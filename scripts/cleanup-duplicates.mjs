import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, "../data/series/series-2.ts");

const REMOVE = [
  "20th-century-boys",
  "akira",
  "berserk",
  "black-butler",
  "blue-exorcist",
  "blue-lock",
  "chainsaw-man",
  "delicious-in-dungeon",
  "domestic-girlfriend",
  "dorohedoro",
  "dr-stone",
  "eleceed",
  "eyeshield-21",
  "fruits-basket",
  "fullmetal-alchemist",
  "goodnight-punpun",
  "hikaru-no-go",
  "horimiya",
  "inuyasha",
  "kaguya-sama-love-is-war",
  "kingdom",
  "lone-wolf-and-cub",
  "lookism",
  "nana",
  "noblesse",
  "omniscient-reader",
  "ouran-high-school-host-club",
  "pluto",
  "ranma",
  "rave-master",
  "rent-a-girlfriend",
  "slam-dunk",
  "solo-leveling",
  "soul-eater",
  "spy-x-family",
  "sweet-home",
  "the-ghost-in-the-shell",
  "the-god-of-high-school",
  "the-promised-neverland",
  "toilet-bound-hanako-kun",
  "tower-of-god",
  "true-beauty",
  "vagabond",
  "vinland-saga",
  "we-never-learn",
  "weak-hero",
  "your-lie-in-april",
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
console.log(`\n✅ ${removed} doublons supprimés de series-2.ts`);
