import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, "../data/series/series-2.ts");

const REMOVE = [
  // bad matches
  "i-thought-i-was-reincarnated-as-a-noble-villainess-but-i-actually-ended-up-as-cinderellas-older-stepsister-a-cinderella-otakus-isekai-reincarnation",
  "i-love-you",           // bad match pour I Love Yoo (webtoon)
  "kanojo-iro-no-kanojo", // bad match pour Unordinary
  "summer-battle",        // bad match pour Castle Swimmer
  "yeong-has-temperature",// bad match pour SubZero
  "an-insincere-idols-blank-slate", // bad match pour Pink is for Brats
  "how-a-country-girl-reincarnated-as-a-villainess-tries-to-avoid-a-bad-ending-i-dont-want-to-die-so-i-need-to-become-stronger-than-the-final-boss",
  "intaishita-ossan-kenja-daga-manadeshi-ga-tsuihou-sarete-kita-no-de-shoushin-ryokou-ni-tsureteiku-slow-life-na-tabi-no-tsumori-ga-nazeka-sekai-saikyou-no-shitei-ni-natte-ita",
  // duplicate — return-of-the-war-god already patched in manhwa1
  "return-of-the-war-god",
];

// Note: "demon-queen-just-wants-to-make-peace" might be OK as alternative title
// Keep: the-remarried-empress, who-made-me-a-princess, doctor-elise-the-royal-lady-with-the-lamp,
//        under-the-oak-tree, kill-the-villainess, roxana, demon-queen-just-wants-to-make-peace,
//        the-worn-and-torn-newbie, my-s-class-hunters

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

// Also remove second occurrence of return-of-the-war-god
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

// Remove the bad matches (single occurrence)
for (const slug of REMOVE.filter(s => s !== "return-of-the-war-god")) {
  const newContent = removeFirst(content, slug);
  if (!newContent) { console.log(`⚠️ Non trouvé : ${slug}`); continue; }
  content = newContent;
  removed++;
  console.log(`🗑️  ${slug}`);
}

// Remove second occurrence of return-of-the-war-god
const newContent = removeSecond(content, "return-of-the-war-god");
if (newContent) {
  content = newContent;
  removed++;
  console.log(`🗑️  return-of-the-war-god (2ème occurrence)`);
}

writeFileSync(FILE, content, "utf-8");
console.log(`\n✅ ${removed} supprimées`);
