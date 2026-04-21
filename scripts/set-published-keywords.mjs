// scripts/set-published-keywords.mjs
// Met published: true pour toutes les séries dont le slug contient un des mots-clés
import { readFileSync, writeFileSync } from "fs";

const KEYWORDS = [
  "konosuba", "given", "bloom-into", "orange", "max-level-hero",
  "second-life", "returner", "god-high-school", "nano-machine", "eleceed",
  "silver-spoon", "barakamon", "yotsuba", "solanin", "a-silent-voice",
  "koe-no-katachi", "my-dress-up", "dress-up-darling", "quintessential",
  "quintuplets", "horimiya", "fruits-basket", "sailor-moon", "kaguya",
  "your-lie", "april", "witch-hat", "golden-kamuy", "dorohedoro", "gantz",
  "goodnight-punpun", "punpun", "mushoku", "re-zero", "rezero",
  "made-in-abyss", "spy-family", "spyxfamily", "chainsaw", "parasyte",
  "tokyo-ghoul", "deadman", "kaiju", "blame", "devilman", "dororo",
  "hajime-ippo", "katekyo", "zatch", "dragon-ball", "jujutsu", "haikyuu",
  "frieren", "dungeon-meshi", "yu-yu", "nana", "kingdom", "20th-century",
  "akira", "lookism", "sweet-home", "noblesse", "weak-hero", "uzumaki",
  "vagabond", "vinland", "berserk", "monster", "tower-of-god", "omniscient",
  "the-player", "tutorial-too-hard", "level-up",
];

function slugMatchesKeywords(slug) {
  return KEYWORDS.some(kw => slug.includes(kw));
}

function findEntry(content, slug) {
  const marker = `slug: "${slug}"`;
  const idx = content.indexOf(marker);
  if (idx === -1) return null;
  let i = idx;
  while (i > 0 && content[i] !== "{") i--;
  const start = i;
  let depth = 0;
  for (i = start; i < content.length; i++) {
    if (content[i] === "{") depth++;
    if (content[i] === "}") { depth--; if (depth === 0) break; }
  }
  return { start, end: i };
}

let content = readFileSync("data/series/series-1.ts", "utf8");

const slugMatches = [...content.matchAll(/slug:\s*"([^"]+)"/g)]
  .filter(m => m.index > 200);

const matchingSlugs = slugMatches
  .map(m => m[1])
  .filter(slugMatchesKeywords);

console.log(`Slugs correspondants (${matchingSlugs.length}) :`);
matchingSlugs.forEach(s => console.log("  -", s));

// Traiter de la fin vers le début pour ne pas décaler les indices
const toProcess = slugMatches
  .filter(m => slugMatchesKeywords(m[1]))
  .reverse();

let setTrue = 0;
let alreadyTrue = 0;
let replacedFalse = 0;

for (const m of toProcess) {
  const slug = m[1];
  const entry = findEntry(content, slug);
  if (!entry) { console.warn(`Not found: ${slug}`); continue; }

  const entryText = content.slice(entry.start, entry.end + 1);

  if (entryText.includes("published: true")) {
    alreadyTrue++;
    continue;
  }

  if (entryText.includes("published: false")) {
    // Remplacer false par true dans cet entry
    const before = content.slice(0, entry.start);
    const after = content.slice(entry.end + 1);
    const newEntry = entryText.replace("published: false", "published: true");
    content = before + newEntry + after;
    replacedFalse++;
  } else {
    // Ajouter published: true avant la }
    const insertion = `  published: true,\n`;
    content = content.slice(0, entry.end) + insertion + content.slice(entry.end);
    setTrue++;
  }
}

writeFileSync("data/series/series-1.ts", content, "utf8");

// Compter le total published: true
const totalTrue = [...content.matchAll(/published:\s*true/g)].length;

console.log(`\nDone.`);
console.log(`  ${replacedFalse} false → true`);
console.log(`  ${setTrue} ajout published: true`);
console.log(`  ${alreadyTrue} déjà à true`);
console.log(`\nTotal published: true dans series-1.ts : ${totalTrue}`);
