// scripts/set-published.mjs
// Ajoute published: false à toutes les séries de series-1.ts
// sauf celles listées dans PUBLISHED_SLUGS
import { readFileSync, writeFileSync } from "fs";

const PUBLISHED_SLUGS = new Set([
  "naruto",
  "solo-leveling",
  "tokyo-revengers",
  "the-player-who-cant-level-up",
  "the-beginning-after-the-end",
  "my-hero-academia",
  "l-attaque-des-titans",
  "blue-lock",
  "bleach",
  "assassination-classroom",
  "kuroko-no-basket",
  "hunter-x-hunter",
  "berserk",
  "black-clover",
  "death-note",
  "fairy-tail",
  "fire-force",
  "fullmetal-alchemist",
  "hells-paradise",
  "made-in-abyss",
  "monster",
  "omniscient-reader",
  "pluto",
  "slam-dunk",
  "the-promised-neverland",
  "tower-of-god",
  "vagabond",
  "vinland-saga",
  "demon-slayer-kimetsu-no-yaiba",
  "spy-x-family",
  "chainsaw-man",
  "re-zero",
  "tokyo-ghoul",
  "haikyuu",
  "frieren-beyond-journeys-end",
  "delicious-in-dungeon",
  "yu-yu-hakusho",
  "nana",
  "kingdom",
  "20th-century-boys",
  "akira",
  "goodnight-punpun",
  "dorohedoro",
  "golden-kamuy",
  "gantz",
  "katekyo-hitman-reborn",
  "zatch-bell",
  "one-piece",
  "dragon-ball",
  "jujutsu-kaisen",
  "sailor-moon",
  "lookism",
  "sweet-home",
  "noblesse",
  "weak-hero",
  "a-returners-magic-should-be-special",
  "nano-machine",
  "the-god-of-high-school",
  "parasyte",
  "kaiju-no-8",
  "witch-hat-atelier",
  "deadman-wonderland",
  "barakamon",
  "horimiya",
  "your-lie-in-april",
  "koe-no-katachi",
  "fruits-basket",
  "kaguya-sama-love-is-war",
  "my-dress-up-darling",
  "mushoku-tensei-redundant-reincarnation",
  "devilman-crybaby",
  "dororo",
  "blame",
  "uzumaki-spiral-into-horror",
  "hajime-no-ippo",
  // Pour séries potentiellement dans series-2 (orange, bloom-into-you, given, etc.)
  // elles n'ont pas besoin d'être ici si elles ne sont pas dans series-1.ts
]);

// Trouve l'entrée { ... } contenant slug: "X" et retourne {start, end}
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
  return { start, end: i }; // end = index of closing }
}

let content = readFileSync("data/series/series-1.ts", "utf8");

// Extraire tous les slugs présents (skip la définition de type ligne ~3)
const slugMatches = [...content.matchAll(/slug:\s*"([^"]+)"/g)]
  .filter(m => m.index > 200); // skip le type definition

let modified = 0;
let skipped = 0;

// Traiter de la fin vers le début pour ne pas décaler les indices
const toProcess = slugMatches
  .filter(m => !PUBLISHED_SLUGS.has(m[1]))
  .reverse();

for (const m of toProcess) {
  const slug = m[1];
  const entry = findEntry(content, slug);
  if (!entry) { console.warn(`Not found: ${slug}`); continue; }

  // Vérifier si published est déjà présent dans cet entry
  const entryContent = content.slice(entry.start, entry.end + 1);
  if (entryContent.includes("published:")) {
    skipped++;
    continue;
  }

  // Insérer `  published: false,\n` juste avant la dernière `}`
  const insertion = `  published: false,\n`;
  content = content.slice(0, entry.end) + insertion + content.slice(entry.end);
  modified++;
}

writeFileSync("data/series/series-1.ts", content, "utf8");
console.log(`Done. Modified: ${modified}, Already set: ${skipped}, Published (kept): ${PUBLISHED_SLUGS.size}`);
