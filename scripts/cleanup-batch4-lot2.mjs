import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, "../data/series/series-2.ts");

const REMOVE = [
  "setsukan-chuudoku", // bad match pour Toriko
  "mars",              // Ishinomori Mars, pas le Mars de Fuyumi Soryo (à ajouter manuellement)
];

function removeFirst(content, slug) {
  const marker = `slug: "${slug}"`;
  const idx = content.indexOf(marker);
  if (idx === -1) return null;
  let i = idx;
  while (i > 0 && content[i] !== "{") i--;
  const start = i; let depth = 0;
  for (i = start; i < content.length; i++) {
    if (content[i] === "{") depth++;
    if (content[i] === "}") { depth--; if (depth === 0) break; }
  }
  const end = i + 1;
  const after = content.slice(end).match(/^(\s*,)/);
  const fullEnd = after ? end + after[1].length : end;
  return content.slice(0, start) + content.slice(fullEnd);
}

let content = readFileSync(FILE, "utf-8");
let removed = 0;
for (const slug of REMOVE) {
  const r = removeFirst(content, slug);
  if (!r) { console.log(`⚠️ Non trouvé : ${slug}`); continue; }
  content = r; removed++; console.log(`🗑️  ${slug}`);
}
writeFileSync(FILE, content, "utf-8");
console.log(`\n✅ ${removed} supprimées`);
