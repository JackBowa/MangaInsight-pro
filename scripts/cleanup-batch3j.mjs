import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, "../data/series/series-2.ts");

const REMOVE = [
  // bad matches
  "chained-soldier",               // bad match pour Demon Slayer
  "my-hero-academia-school-briefs",// spinoff, pas le manga principal
  // duplicates avec series-1
  "cardcaptor-sakura",
  "sailor-moon",
  "ranma",
  "inuyasha",
  "zatch-bell",
  "fairy-tail",
  "black-clover",
  "assassination-classroom",
  "the-promised-neverland",
  "jujutsu-kaisen",
  "tokyo-ghoul",
  "overlord",
  "that-time-i-got-reincarnated-as-a-slime",
  "sword-art-online",
  "re-zero",
];

// Also remove second occurrence of magic-knight-rayearth (already patched in lot6)
function findSecondOccurrence(content, slug) {
  const marker = `slug: "${slug}"`;
  const first = content.indexOf(marker);
  if (first === -1) return null;
  const second = content.indexOf(marker, first + marker.length);
  if (second === -1) return null;
  let i = second;
  while (i > 0 && content[i] !== "{") i--;
  const entryStart = i;
  let depth = 0;
  for (i = entryStart; i < content.length; i++) {
    if (content[i] === "{") depth++;
    if (content[i] === "}") { depth--; if (depth === 0) break; }
  }
  return { start: entryStart, end: i + 1 };
}

function removeFirst(content, slug) {
  const marker = `slug: "${slug}"`;
  const idx = content.indexOf(marker);
  if (idx === -1) return null;
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
  return content.slice(0, entryStart) + content.slice(fullEnd);
}

let content = readFileSync(FILE, "utf-8");
let removed = 0;

// Remove standard bad/dup entries
for (const slug of REMOVE) {
  const newContent = removeFirst(content, slug);
  if (!newContent) { console.log(`⚠️ Non trouvé : ${slug}`); continue; }
  content = newContent;
  removed++;
  console.log(`🗑️  ${slug}`);
}

// Remove second magic-knight-rayearth (stub from batch3j)
const pos = findSecondOccurrence(content, "magic-knight-rayearth");
if (pos) {
  const after = content.slice(pos.end).match(/^(\s*,)/);
  const fullEnd = after ? pos.end + after[1].length : pos.end;
  content = content.slice(0, pos.start) + content.slice(fullEnd);
  removed++;
  console.log(`🗑️  magic-knight-rayearth (2ème occurrence)`);
}

writeFileSync(FILE, content, "utf-8");
console.log(`\n✅ ${removed} entrées supprimées`);
