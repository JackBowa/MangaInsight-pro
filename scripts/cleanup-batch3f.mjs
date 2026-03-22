import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, "../data/series/series-2.ts");

const REMOVE = [
  "mizuno-rina-ryuushutsu",          // bad match pour Nichijou
  "a-bitter-fruit",                   // bad match pour Blue Period
  "bio-luminescence",                  // bad match pour Mushishi
  "gin-no-spoon",                      // bad match pour Silver Spoon (Gin no Saji)
  "sin-flower",                        // bad match pour Flowers of Evil (Aku no Hana)
  "otome-no-hanazono-sennyu-no-daisakusen", // bad match pour Toriko
  "rainbow",                           // version KR incorrecte pour Rainbow (JP)
  "ascendance-of-a-bookworm-ill-do-anything-to-become-a-librarian-part-4-i-want-to-save-the-royal-academys-library", // mauvaise partie
];

let content = readFileSync(FILE, "utf-8");
let removed = 0;
for (const slug of REMOVE) {
  const marker = `slug: "${slug}"`;
  const idx = content.indexOf(marker);
  if (idx === -1) { console.log(`⚠️ Non trouvé : ${slug}`); continue; }
  let i = idx;
  while (i > 0 && content[i] !== "{") i--;
  const entryStart = i;
  let depth = 0;
  for (i = entryStart; i < content.length; i++) {
    if (content[i] === "{") depth++;
    if (content[i] === "}") { depth--; if (depth === 0) break; }
  }
  const entryEnd = i + 1;
  const after = content.slice(entryEnd).match(/^(\s*,)/);
  const fullEnd = after ? entryEnd + after[1].length : entryEnd;
  content = content.slice(0, entryStart) + content.slice(fullEnd);
  removed++;
  console.log(`🗑️  ${slug}`);
}
writeFileSync(FILE, content, "utf-8");
console.log(`\n✅ ${removed} mauvaises correspondances supprimées`);
