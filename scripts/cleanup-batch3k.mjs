import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, "../data/series/series-2.ts");

const REMOVE_FIRST = [
  // duplicates avec series-1
  "beelzebub",
  "medaka-box",
  "monthly-girls-nozaki-kun",
  "nisekoi",
  // bad match pour WataMote (anthology pas le manga principal)
  "watashi-ga-motenai-no-wa-dou-kangaetemo-omaera-ga-warui-anthology",
];

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

function removeSecond(content, slug) {
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
  const entryEnd = i + 1;
  const after = content.slice(entryEnd).match(/^(\s*,)/);
  const fullEnd = after ? entryEnd + after[1].length : entryEnd;
  return content.slice(0, entryStart) + content.slice(fullEnd);
}

let content = readFileSync(FILE, "utf-8");
let removed = 0;

for (const slug of REMOVE_FIRST) {
  const newContent = removeFirst(content, slug);
  if (!newContent) { console.log(`⚠️ Non trouvé : ${slug}`); continue; }
  content = newContent;
  removed++;
  console.log(`🗑️  ${slug}`);
}

// Remove second the-devil-is-a-part-timer (duplicate import)
const newContent = removeSecond(content, "the-devil-is-a-part-timer");
if (newContent) {
  content = newContent;
  removed++;
  console.log(`🗑️  the-devil-is-a-part-timer (2ème occurrence)`);
}

writeFileSync(FILE, content, "utf-8");
console.log(`\n✅ ${removed} entrées supprimées`);
