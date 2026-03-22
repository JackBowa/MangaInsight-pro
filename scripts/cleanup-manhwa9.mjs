import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, "../data/series/series-2.ts");

// Enlever les doublons (2e occurrence) et les bad matches
const REMOVE_SECOND = [
  "the-lazy-lord-masters-the-sword", // doublon — déjà dans le catalogue
  "log-in-murim",                     // doublon — Murim Login = Log-in Murim déjà en catalogue
  "i-shall-master-this-family",       // doublon — I'll Be the Matriarch = déjà en catalogue
  "how-to-use-a-returner",            // doublon — Regressor Instruction Manual = déjà en catalogue
];

const REMOVE_FIRST = [
  "harley-takes-the-house", // bad match pour Beware of the Brothers
  "tensei-shitara-dai-nana-ouji-datta-node-kimamani-majutsu-wo-kiwamemasu", // manga JP pas manhwa
];

function removeSecond(content, slug) {
  const marker = `slug: "${slug}"`;
  const first = content.indexOf(marker);
  if (first === -1) return null;
  const second = content.indexOf(marker, first + marker.length);
  if (second === -1) return null;
  let i = second;
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

for (const slug of REMOVE_SECOND) {
  const r = removeSecond(content, slug);
  if (!r) { console.log(`⚠️ Doublon non trouvé : ${slug}`); continue; }
  content = r; removed++; console.log(`🗑️  doublon ${slug}`);
}

for (const slug of REMOVE_FIRST) {
  const r = removeFirst(content, slug);
  if (!r) { console.log(`⚠️ Non trouvé : ${slug}`); continue; }
  content = r; removed++; console.log(`🗑️  ${slug}`);
}

writeFileSync(FILE, content, "utf-8");
console.log(`\n✅ ${removed} entrées supprimées`);
