/**
 * Import de séries depuis AniList
 * Usage : node scripts/import-series.mjs titres.txt
 *
 * titres.txt = un titre par ligne, ex:
 *   One Piece
 *   Dragon Ball
 *   Slam Dunk
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SERIES_FILE = join(__dirname, "../data/series.ts");

// ── Mapping genres AniList → tags français ──────────────────────────────────
const GENRE_MAP = {
  "Action":        "Action",
  "Adventure":     "Aventure",
  "Comedy":        "Comédie",
  "Drama":         "Drame",
  "Fantasy":       "Fantasy",
  "Horror":        "Horreur",
  "Mystery":       "Mystère",
  "Psychological": "Psychologie",
  "Romance":       "Romance",
  "Sci-Fi":        "Sci-fi",
  "Slice of Life": "Quotidien",
  "Sports":        "Sport",
  "Supernatural":  "Surnaturel",
  "Thriller":      "Thriller",
  "Ecchi":         "Ecchi",
  "Mecha":         "Mecha",
  "Shounen":       "Shōnen",
  "Shoujo":        "Shōjo",
  "Seinen":        "Seinen",
  "Josei":         "Josei",
};

// ── Helpers ──────────────────────────────────────────────────────────────────
function slugify(title) {
  return title
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/['']/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function scoreToStars(score) {
  if (!score) return 3;
  if (score >= 85) return 5;
  if (score >= 75) return 4;
  if (score >= 65) return 3;
  if (score >= 50) return 2;
  return 1;
}

function mapGenres(genres = []) {
  return genres
    .map(g => GENRE_MAP[g])
    .filter(Boolean)
    .slice(0, 5)
    .join(" · ");
}

function cleanDescription(desc) {
  if (!desc) return "";
  return desc
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/\n+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 400);
}

function generateProscons(genres = [], score) {
  const pros = [];
  const cons = [];

  if (genres.includes("Action"))       pros.push("Combats dynamiques et bien chorégraphiés");
  if (genres.includes("Adventure"))    pros.push("World-building riche et immersif");
  if (genres.includes("Comedy"))       pros.push("Humour efficace qui allège le récit");
  if (genres.includes("Drama"))        pros.push("Moments émotionnellement forts");
  if (genres.includes("Fantasy"))      pros.push("Univers fantastique original");
  if (genres.includes("Psychological"))pros.push("Profondeur psychologique des personnages");
  if (genres.includes("Sci-Fi"))       pros.push("Concepts science-fiction inventifs");
  if (genres.includes("Sports"))       pros.push("Tension dramatique dans les matchs");
  if (genres.includes("Mystery"))      pros.push("Intrigue bien construite");

  if (score && score < 70)  cons.push("Rythme parfois irrégulier");
  if (genres.includes("Ecchi"))        cons.push("Fan service intrusif par moments");
  if (genres.length > 4)               cons.push("Certains arcs secondaires moins aboutis");

  // Valeurs par défaut si trop peu générées
  if (pros.length < 2) pros.push("Personnages attachants", "Narration solide");
  if (cons.length < 1) cons.push("Peut nécessiter de s'accrocher au départ");

  return { pros: pros.slice(0, 4), cons: cons.slice(0, 3) };
}

function generateReview(title, genres = [], score) {
  const stars = scoreToStars(score);
  const scoreStr = score ? ` (score AniList : ${score}/100)` : "";

  return `<p>${title} est une série ${stars >= 4 ? "incontournable" : "solide"} du genre ${genres[0] ?? "manga"}. ${scoreStr}</p><p>À compléter avec votre avis personnel.</p>`;
}

// ── AniList API ───────────────────────────────────────────────────────────────
const ANILIST_QUERY = `
query ($search: String) {
  Page(perPage: 5) {
    media(search: $search, type: MANGA) {
      id
      title { romaji english native }
      coverImage { large extraLarge }
      genres
      averageScore
      description(asHtml: false)
      countryOfOrigin
      volumes
    }
  }
}`;

async function fetchAniList(title) {
  const res = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ query: ANILIST_QUERY, variables: { search: title } }),
  });
  const json = await res.json();
  return json?.data?.Page?.media?.[0] ?? null;
}

// ── Génération d'entrée TypeScript ────────────────────────────────────────────
function generateEntry(media, inputTitle) {
  const title = media.title.english ?? media.title.romaji ?? inputTitle;
  const slug = slugify(title);
  const category = media.countryOfOrigin === "KR" ? "manhwa" : "manga";
  const cover = media.coverImage?.extraLarge ?? media.coverImage?.large ?? "";
  const tags = mapGenres(media.genres);
  const synopsis = cleanDescription(media.description);
  const stars = scoreToStars(media.averageScore);
  const { pros, cons } = generateProscons(media.genres, media.averageScore);
  const reviewHtml = generateReview(title, media.genres, media.averageScore);
  const today = new Date().toISOString().split("T")[0];

  return `{
  slug: "${slug}",
  title: "${title.replace(/"/g, '\\"')}",
  category: "${category}",
  cover: "${cover}",
  tags: "${tags}",
  stars: ${stars},
  addedAt: "${today}",
  synopsis: "${synopsis.replace(/"/g, '\\"')}",
  pros: [${pros.map(p => `"${p.replace(/"/g, '\\"')}"`).join(", ")}],
  cons: [${cons.map(c => `"${c.replace(/"/g, '\\"')}"`).join(", ")}],
  reviewHtml: \`${reviewHtml}\`,
  shops: [],
  streaming: [],
  live: []
},`;
}

// ── Main ──────────────────────────────────────────────────────────────────────
const inputFile = process.argv[2];
if (!inputFile) {
  console.error("Usage: node scripts/import-series.mjs titres.txt");
  process.exit(1);
}

if (!existsSync(inputFile)) {
  console.error(`Fichier introuvable : ${inputFile}`);
  process.exit(1);
}

const titles = readFileSync(inputFile, "utf-8")
  .split("\n")
  .map(l => l.trim())
  .filter(Boolean);

console.log(`\n🎌 Import de ${titles.length} série(s)...\n`);

const entries = [];
const failed = [];

for (const title of titles) {
  process.stdout.write(`  → ${title}... `);
  try {
    const media = await fetchAniList(title);
    if (!media) {
      console.log("❌ Non trouvé sur AniList");
      failed.push(title);
      continue;
    }
    const displayTitle = media.title.english ?? media.title.romaji ?? title;
    const entry = generateEntry(media, title);
    entries.push(entry);
    console.log(`✓ "${displayTitle}" (${media.countryOfOrigin ?? "JP"}, score: ${media.averageScore ?? "?"})`);
  } catch (err) {
    console.log(`❌ Erreur: ${err.message}`);
    failed.push(title);
  }

  // Petite pause pour ne pas spammer AniList
  await new Promise(r => setTimeout(r, 500));
}

if (entries.length === 0) {
  console.log("\n❌ Aucune série importée.");
  process.exit(1);
}

// Injecter dans series.ts juste avant le "]" de fermeture du tableau SERIES
// On cherche "export const SERIES" puis on trouve la fin du tableau
const seriesContent = readFileSync(SERIES_FILE, "utf-8");

const arrayStart = seriesContent.indexOf("export const SERIES");
if (arrayStart === -1) {
  console.error("\n❌ Impossible de trouver export const SERIES dans series.ts");
  process.exit(1);
}

// Depuis arrayStart, on trouve le dernier "\n]" (fermeture du tableau)
const afterDecl = seriesContent.slice(arrayStart);
const lastBracket = afterDecl.lastIndexOf("\n]");
if (lastBracket === -1) {
  console.error("\n❌ Impossible de trouver la fermeture ] du tableau SERIES");
  process.exit(1);
}
const insertPoint = arrayStart + lastBracket;

// S'assurer qu'il y a une virgule après la dernière entrée
const before = seriesContent.slice(0, insertPoint).trimEnd();
const needsComma = !before.endsWith(",");

const newContent =
  before +
  (needsComma ? "," : "") +
  "\n" + entries.join("\n\n") + "\n" +
  seriesContent.slice(insertPoint);

writeFileSync(SERIES_FILE, newContent, "utf-8");

console.log(`\n✅ ${entries.length} série(s) ajoutée(s) dans data/series.ts`);
if (failed.length > 0) {
  console.log(`⚠️  ${failed.length} série(s) non trouvée(s) : ${failed.join(", ")}`);
}
console.log("\n💡 Pense à :");
console.log("   1. Relire les entrées générées dans data/series.ts");
console.log("   2. Compléter les reviewHtml avec tes avis");
console.log("   3. Ajouter les liens shops/streaming");
console.log("   4. npm run build pour vérifier\n");
