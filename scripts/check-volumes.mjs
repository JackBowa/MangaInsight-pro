// scripts/check-volumes.mjs
// Vérifie si les volumes/chapitres sont à jour via AniList
// Usage : node scripts/check-volumes.mjs
// Sortie : liste les séries où AniList a plus de volumes que nos données

import { readFileSync } from "fs";

const ANILIST_API = "https://graphql.anilist.co";
const DELAY_MS = 1200; // respecter le rate limit AniList

const QUERY = `
query ($title: String) {
  Page(page: 1, perPage: 3) {
    media(search: $title, type: MANGA, sort: SEARCH_MATCH) {
      title { romaji english native }
      volumes
      chapters
      status
    }
  }
}`;

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function queryAniList(title) {
  const res = await fetch(ANILIST_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: QUERY, variables: { title } }),
  });
  if (!res.ok) return null;
  const json = await res.json();
  return json?.data?.Page?.media?.[0] ?? null;
}

// Lire toutes les séries avec volumes définis
function getSeries() {
  const results = [];
  for (const f of ["data/series/series-1.ts", "data/series/series-2.ts"]) {
    let content;
    try { content = readFileSync(f, "utf8"); } catch { continue; }

    const slugMatches = [...content.matchAll(/slug:\s*"([^"]+)"/g)].filter(m => m.index > 200);
    for (const m of slugMatches) {
      const slug = m[1];
      const idx = content.indexOf(`slug: "${slug}"`);
      let i = idx;
      while (i > 0 && content[i] !== "{") i--;
      const start = i;
      let depth = 0;
      for (i = start; i < content.length; i++) {
        if (content[i] === "{") depth++;
        if (content[i] === "}") { depth--; if (depth === 0) break; }
      }
      const entry = content.slice(start, i + 1);

      const publishedMatch = entry.match(/published:\s*(true|false)/);
      if (publishedMatch?.[1] === "false") continue;

      const titleMatch = entry.match(/title:\s*"([^"]+)"/);
      const volumesMatch = entry.match(/volumes:\s*(\d+)/);
      const statusMatch = entry.match(/status:\s*"([^"]+)"/);
      const authorMatch = entry.match(/author:\s*"([^"]+)"/);

      if (!titleMatch || !volumesMatch) continue;
      if (statusMatch?.[1] === "terminé") continue; // terminé = pas besoin de vérifier

      results.push({
        slug,
        title: titleMatch[1],
        volumes: parseInt(volumesMatch[1]),
        status: statusMatch?.[1] ?? "?",
        author: authorMatch?.[1] ?? "",
      });
    }
  }
  return results;
}

async function main() {
  const series = getSeries();
  console.log(`Vérification de ${series.length} séries en cours / pause...\n`);

  const outdated = [];
  const errors = [];

  for (const serie of series) {
    await sleep(DELAY_MS);
    try {
      const result = await queryAniList(serie.title);
      if (!result) { errors.push(serie.title); continue; }

      const aniVolumes = result.volumes ?? 0;
      if (aniVolumes > serie.volumes) {
        outdated.push({
          title: serie.title,
          slug: serie.slug,
          ours: serie.volumes,
          anilist: aniVolumes,
          aniTitle: result.title.english || result.title.romaji,
        });
        console.log(`⚠️  ${serie.title} : nos données=${serie.volumes} | AniList=${aniVolumes} (${result.title.romaji})`);
      } else {
        console.log(`✓  ${serie.title} : ${serie.volumes} tomes (AniList: ${aniVolumes ?? "N/A"})`);
      }
    } catch (e) {
      errors.push(serie.title);
      console.log(`✗  ${serie.title} : erreur (${e.message})`);
    }
  }

  console.log(`\n── Résumé ──`);
  console.log(`Total vérifié : ${series.length}`);
  console.log(`À mettre à jour (${outdated.length}) :`);
  outdated.forEach(s => console.log(`  - ${s.title} : ${s.ours} → ${s.anilist} tomes`));
  if (errors.length) console.log(`Erreurs (${errors.length}) : ${errors.join(", ")}`);

  // Sortie JSON pour le GitHub Action
  if (process.env.GITHUB_OUTPUT) {
    const { appendFileSync } = await import("fs");
    appendFileSync(process.env.GITHUB_OUTPUT, `outdated_count=${outdated.length}\n`);
    appendFileSync(process.env.GITHUB_OUTPUT, `outdated_json=${JSON.stringify(outdated)}\n`);
  }

  // Exit code 1 si des mises à jour sont nécessaires (pour CI)
  if (outdated.length > 0) process.exit(1);
}

main();
