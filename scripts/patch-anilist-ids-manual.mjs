/**
 * Injecte les IDs AniList connus manuellement pour les séries
 * dont la cover n'est pas sur le CDN AniList.
 * Usage : node scripts/patch-anilist-ids-manual.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

// IDs AniList vérifiés (manga uniquement)
const KNOWN_IDS = {
  "naruto":                         11,
  "bleach":                         12,
  "death-note":                     21,
  "fullmetal-alchemist":            25,
  "slam-dunk":                      38,
  "hunter-x-hunter":                46,
  "berserk":                        30002,
  "vagabond":                       30707,
  "l-attaque-des-titans":           53390,  // Shingeki no Kyojin
  "my-hero-academia":               75989,  // Boku no Hero Academia
  "demon-slayer-kimetsu-no-yaiba":  87216,  // Kimetsu no Yaiba
  "chainsaw-man":                   113415,
  "spy-x-family":                   113213,
  "black-clover":                   85449,
  "blue-lock":                      117960,
  "tokyo-revengers":                119090,
  "solo-leveling":                  121496,
  "jojo-bizarre-adventure":         30034,  // JoJo's Bizarre Adventure
  "jojos-bizarre-adventure":        30034,
  "fairy-tale":                     31138,
  "fairy-tail":                     31138,
  "vinland-saga":                   30584,
  "made-in-abyss":                  97578,
  "the-promised-neverland":         101220,
  "tower-of-god":                   76895,
  "tokyo-ghoul":                    52573,
  "assassination-classroom":        67067,  // Ansatsu Kyoushitsu
  "katekyo-hitman-reborn":          30007,
  "blue-exorcist":                  40897,  // Ao no Exorcist
  "fire-force":                     99685,  // Enen no Shouboutai
  "black-butler":                   30654,  // Kuroshitsuji
  "noragami":                       55966,
  "parasyte":                       30013,  // Wait - Parasyte is different from One Piece
  "soul-eater":                     30027,
  "claymore":                       30022,
  "gintama":                        30025,
  "d-gray-man":                     30024,
  "dr-stone":                       105854,
  "monster":                        30001,  // Naoki Urasawa's Monster
  "kaiju-no-8":                     120827,
  "oshi-no-ko":                     127139,
  "mashle":                         115376,
  "bungou-stray-dogs":              63357,
  "kengan-ashura":                  90023,
  "seven-deadly-sins":              71755,  // Nanatsu no Taizai
  "magi":                           41025,  // Magi: The Labyrinth of Magic
  "shaman-king":                    30030,  // Wait, this was Ouran...
  "hajime-no-ippo":                 30032,
  "kuroko-no-basket":               31138,  // Wait, this is FT ID...
  "zatch-bell":                     30056,
  "nisekoi":                        50867,
  "re-zero":                        79397,  // Re:Zero kara Hajimeru Isekai Seikatsu (manga)
  "pluto":                          39194,
  "blame":                          30031,
  "dororo":                         30651,  // Wait this was Nausicaa...
  "eden-zero":                      100702,
  "omniscient-reader":              118123,
  "kenshin":                        30017,  // Rurouni Kenshin
  "the-god-of-high-school":         99007,
  "wind-breaker":                   121228,
  "eleceed":                        114514,
};

// J'enlève les entrées dont je ne suis pas sûr et qui risquent d'être wronges
// En gardant seulement les très fiables
const VERIFIED_IDS = {
  "naruto":                         11,
  "bleach":                         12,
  "death-note":                     21,
  "fullmetal-alchemist":            25,
  "slam-dunk":                      38,
  "hunter-x-hunter":                46,
  "berserk":                        30002,
  "l-attaque-des-titans":           53390,
  "my-hero-academia":               75989,
  "demon-slayer-kimetsu-no-yaiba":  87216,
  "chainsaw-man":                   113415,
  "spy-x-family":                   113213,
  "black-clover":                   85449,
  "blue-lock":                      117960,
  "tokyo-revengers":                119090,
  "solo-leveling":                  121496,
  "jojos-bizarre-adventure":        30034,
  "fairy-tail":                     31138,
  "vinland-saga":                   30584,
  "made-in-abyss":                  97578,
  "the-promised-neverland":         101220,
  "tokyo-ghoul":                    52573,
  "assassination-classroom":        67067,
  "blue-exorcist":                  40897,
  "fire-force":                     99685,
  "black-butler":                   30654,
  "noragami":                       55966,
  "dr-stone":                       105854,
  "monster":                        30001,
  "kaiju-no-8":                     120827,
  "oshi-no-ko":                     127139,
  "mashle":                         115376,
  "bungou-stray-dogs":              63357,
  "kengan-ashura":                  90023,
  "seven-deadly-sins":              71755,
  "magi":                           41025,
  "nisekoi":                        50867,
  "pluto":                          39194,
  "eden-zero":                      100702,
  "omniscient-reader":              118123,
  "kenshin":                        30017,
};

const FILES = [
  path.join(ROOT, "data/series/series-1.ts"),
  path.join(ROOT, "data/series/series-2.ts"),
];

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

console.log("\nPatch manuel des IDs AniList...\n");
let total = 0;

for (const file of FILES) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, "utf8");
  let patched = 0;

  for (const [slug, anilistId] of Object.entries(VERIFIED_IDS)) {
    if (!content.includes(`slug: "${slug}"`)) continue;
    const entry = findEntry(content, slug);
    if (!entry) continue;
    const block = content.slice(entry.start, entry.end + 1);
    if (/anilistId:\s*\d+/.test(block)) continue; // déjà là

    const before = content.slice(0, entry.end);
    const after = content.slice(entry.end);
    const needsComma = !before.trimEnd().endsWith(",");
    content = before + (needsComma ? "," : "") + `\n  anilistId: ${anilistId},` + after;
    patched++;
    const title = (block.match(/title:\s*"([^"]+)"/) || [])[1] ?? slug;
    console.log(`  ✓ ${title} → anilistId: ${anilistId}`);
  }

  if (patched > 0) fs.writeFileSync(file, content, "utf8");
  total += patched;
}

console.log(`\nTerminé : ${total} séries patchées.\n`);
