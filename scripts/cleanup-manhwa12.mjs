import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, "../data/series/series-2.ts");

// Supprimer les doublons (2e occurrence)
const REMOVE_SECOND = [
  "the-beloved-little-princess", // doublon — déjà ajouté dans manhwa10
];

// Supprimer les bad matches et les séries hors-scope
const REMOVE_FIRST = [
  "yume-no-hashibashi",      // bad match JP pour Sooho (manhwa KR)
  "the-ultimate-all-rounder", // manhua CN — hors-scope (pas manhwa KR)
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
