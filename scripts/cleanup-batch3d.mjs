import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, "../data/series/series-2.ts");

const REMOVE = [
  "tong-lei",           // mauvaise correspondance pour Monster (Urasawa)
  "happy-happy-clover", // mauvaise correspondance pour Happy (Urasawa)
];

let content = readFileSync(FILE, "utf-8");
for (const slug of REMOVE) {
  const marker = `slug: "${slug}"`;
  const start = content.indexOf(marker);
  if (start === -1) { console.log(`⚠️ Non trouvé : ${slug}`); continue; }
  let depth = 0, i = start;
  while (i > 0 && content[i] !== "{") i--;
  const entryStart = i;
  depth = 0;
  for (i = entryStart; i < content.length; i++) {
    if (content[i] === "{") depth++;
    if (content[i] === "}") { depth--; if (depth === 0) break; }
  }
  const entryEnd = i + 1;
  const after = content.slice(entryEnd).match(/^(\s*,)/);
  const fullEnd = after ? entryEnd + after[1].length : entryEnd;
  content = content.slice(0, entryStart) + content.slice(fullEnd);
  console.log(`🗑️ Supprimé : ${slug}`);
}
writeFileSync(FILE, content, "utf-8");
console.log("✅ Nettoyage terminé");
