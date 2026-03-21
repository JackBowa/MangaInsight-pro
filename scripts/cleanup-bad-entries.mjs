/**
 * Supprime des entrées par slug de data/series.ts
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SERIES_FILE = join(__dirname, "../data/series.ts");

// Slugs à supprimer (mauvaises correspondances AniList)
const SLUGS_TO_REMOVE = [
  "suitei-chijo",                // mauvais résultat pour "Toriko"
  "ping-pong-peril",             // mauvais résultat pour "Ping Pong"
  "bio-luminescence",            // mauvais résultat pour "Mushishi"
  "junji-ito-horror-comic-collection", // mauvais pour "Tomie"
  "amakute-atsukute-iki-mo-dekinai-bangai-hen-amakute-atsui-matsuri-no-ato", // mauvais pour "Hinamatsuri"
];

let content = readFileSync(SERIES_FILE, "utf-8");
let removed = 0;

for (const slug of SLUGS_TO_REMOVE) {
  // On cherche le bloc {  slug: "xxx", ... },
  // en utilisant une regex multi-ligne avec profondeur de brackets
  const slugStr = `  slug: "${slug}"`;
  const idx = content.indexOf(slugStr);
  if (idx === -1) {
    console.log(`⚠️  Slug non trouvé : ${slug}`);
    continue;
  }

  // Reculer jusqu'au { qui précède
  let start = idx;
  while (start > 0 && content[start] !== "{") start--;

  // Avancer jusqu'à la } de fermeture (en comptant les niveaux)
  let depth = 0;
  let end = start;
  while (end < content.length) {
    if (content[end] === "{") depth++;
    if (content[end] === "}") {
      depth--;
      if (depth === 0) { end++; break; }
    }
    end++;
  }

  // Inclure la virgule éventuelle et les sauts de ligne autour
  let realStart = start;
  let realEnd = end;

  // Reculer pour inclure whitespace avant {
  while (realStart > 0 && content[realStart - 1] !== "\n") realStart--;

  // Avancer pour inclure la virgule et le saut de ligne
  while (realEnd < content.length && (content[realEnd] === "," || content[realEnd] === "\r")) realEnd++;
  if (content[realEnd] === "\n") realEnd++;

  content = content.slice(0, realStart) + content.slice(realEnd);
  console.log(`✓ Supprimé : ${slug}`);
  removed++;
}

writeFileSync(SERIES_FILE, content, "utf-8");
console.log(`\n✅ ${removed} entrée(s) supprimée(s).`);
// This file was already run - run cleanup2 instead
