import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const SERIES_FILE = join(__dirname, "../data/series.ts");

const SLUGS_TO_REMOVE = [
  "arafou-dokushin-barikyari-oba-san-tachi-ga-toshishita-danshi-to-no-kankei-ni-hamaru-hanashi",
  "tsukimi-na-jinsei-wo-ayun-de-ita-ossan-isekai-e-nidome-no-jinsei-mo-futsuu-de-ii-no-ni-sainou-ga-sore-wo-yurusanai-ken",
  "rich-girl-caretaker-im-secretly-the-caregiver-of-the-most-popular-girl-in-this-rich-kid-school",
];

let content = readFileSync(SERIES_FILE, "utf-8");
let removed = 0;
for (const slug of SLUGS_TO_REMOVE) {
  const slugStr = `  slug: "${slug}"`;
  const idx = content.indexOf(slugStr);
  if (idx === -1) { console.log(`⚠️  Non trouvé : ${slug}`); continue; }
  let start = idx;
  while (start > 0 && content[start] !== "{") start--;
  let depth = 0, end = start;
  while (end < content.length) {
    if (content[end] === "{") depth++;
    if (content[end] === "}") { depth--; if (depth === 0) { end++; break; } }
    end++;
  }
  let realStart = start;
  while (realStart > 0 && content[realStart - 1] !== "\n") realStart--;
  let realEnd = end;
  while (realEnd < content.length && (content[realEnd] === "," || content[realEnd] === "\r")) realEnd++;
  if (content[realEnd] === "\n") realEnd++;
  content = content.slice(0, realStart) + content.slice(realEnd);
  console.log(`✓ Supprimé : ${slug.slice(0, 50)}...`);
  removed++;
}
writeFileSync(SERIES_FILE, content, "utf-8");
console.log(`\n✅ ${removed} entrée(s) supprimée(s).`);
