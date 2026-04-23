/**
 * Extrait les IDs AniList depuis les URLs de couverture (bxXXXX dans le CDN AniList)
 * et les injecte comme anilistId dans series-1.ts / series-2.ts
 *
 * Usage : node scripts/patch-anilist-ids.mjs
 *
 * Les covers AniList CDN contiennent l'ID : https://s4.anilist.co/.../bx30013-xxx.jpg
 * "bx" = manga, "nx" = manhwa/novel → on prend les deux
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const FILES = [
  path.join(ROOT, "data/series/series-1.ts"),
  path.join(ROOT, "data/series/series-2.ts"),
];

// Pattern bracket-depth pour trouver un bloc d'entrée par slug
function findEntry(content, slug) {
  const marker = `slug: "${slug}"`;
  const idx = content.indexOf(marker);
  if (idx === -1) return null;
  let i = idx;
  while (i > 0 && content[i] !== "{") i--;
  const start = i;
  let depth = 0;
  for (i = start; i < content.length; i++) {
    if (content[i] === "{") depth++;
    if (content[i] === "}") { depth--; if (depth === 0) break; }
  }
  return { start, end: i };
}

function processFile(file) {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, "utf8");
  let patched = 0;
  let skipped = 0;

  // Extraire tous les slugs du fichier
  const slugs = [...content.matchAll(/slug:\s*"([^"]+)"/g)].map(m => m[1]);

  for (const slug of slugs) {
    const entry = findEntry(content, slug);
    if (!entry) continue;

    const block = content.slice(entry.start, entry.end + 1);

    // Déjà patchée ?
    if (/anilistId:\s*\d+/.test(block)) { skipped++; continue; }

    // Série publiée ?
    const pubMatch = block.match(/published:\s*(true|false)/);
    if (pubMatch && pubMatch[1] === "false") continue;

    // Extraire l'ID depuis l'URL cover (bxXXXX ou nxXXXX)
    const coverMatch = block.match(/cover:\s*"https:\/\/s4\.anilist\.co\/[^"]*\/[bn]x(\d+)-[^"]*"/);
    if (!coverMatch) continue;

    const anilistId = parseInt(coverMatch[1], 10);

    // Injecter anilistId juste avant le } fermant
    const before = content.slice(0, entry.end);
    const after = content.slice(entry.end);
    const needsComma = !before.trimEnd().endsWith(",");
    content = before + (needsComma ? "," : "") + `\n  anilistId: ${anilistId},` + after;

    // Recalculer l'entry après modification
    patched++;

    // Afficher le résultat
    const titleMatch = block.match(/title:\s*"([^"]+)"/);
    console.log(`  ✓ ${titleMatch?.[1] ?? slug} → anilistId: ${anilistId}`);
  }

  if (patched > 0) fs.writeFileSync(file, content, "utf8");
  return { patched, skipped };
}

console.log("\nExtraction des IDs AniList depuis les URLs de couverture...\n");

let total = 0;
for (const file of FILES) {
  const name = path.basename(file);
  console.log(`── ${name}`);
  const result = processFile(file);
  if (result) {
    console.log(`   ${result.patched} patchées, ${result.skipped} déjà présentes\n`);
    total += result.patched;
  }
}

console.log(`Terminé : ${total} séries patchées au total.\n`);
console.log("Note : les séries avec cover locale (non-AniList CDN) gardent le fallback par recherche titre.");
