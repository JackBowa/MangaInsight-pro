import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, "../data/series/series-2.ts");

const REMOVE = [
  // bad match pour Akutami Gege Short Stories
  "black-kokka-wo-tsuihou-sareta-kedo-zen-jidou-eirei-shoukan-ga-aru-kara-nanimo-komaranai-saikyou-class-no-eirei-1000-tai-ga-shiranai-uchi-ni-shigoto-wo-katazukete-kurerushi-minna-yasashikute-igokochi-ii-nde-imasara-gen-no-kuni-ni-wa-modorimasen",
  // duplicates avec series-1
  "delicious-in-dungeon",
  "frieren-beyond-journeys-end",
  "spy-x-family",
  "blue-lock",
  "undead-unluck",
  "dandadan",
  "dorohedoro",
  "blame",
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
console.log(`\n✅ ${removed} entrées supprimées`);
