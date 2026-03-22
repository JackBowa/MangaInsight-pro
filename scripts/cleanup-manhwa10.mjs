import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, "../data/series/series-2.ts");

// Supprimer les doublons (2e occurrence) — série déjà dans le catalogue
const REMOVE_SECOND = [
  "my-secretly-hot-husband",           // doublon — My Husband Hides His Beauty déjà en catalogue
  "my-s-class-hunters",                // doublon — The S-Classes That I Raised déjà en catalogue
  "the-reaper",                        // doublon — Reaper of the Drifting Moon déjà en catalogue
  "the-celestial-returned-from-hell",  // doublon — The Constellation That Returned from Hell déjà en catalogue
];

// Supprimer les bad matches AniList (1ère occurrence)
const REMOVE_FIRST = [
  "itsuwari-no-hanayome-wa-nigerarenai", // bad match JP pour A Fake Bride
  "muda-da-to-tsuihou-sareta-kyuutei-juui-kemono-no-kuni-ni-koutaiguu-de-manukareru-mori-de-tasuketa-shinjuu-to-kemomimi-bishoujo-tachi-ni-mechakucha-dekiai-sare-nagara-slow-life-wo-tanoshinderu", // bad match JP pour Return of the Tower Climber
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
