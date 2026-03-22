import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, "../data/series/series-2.ts");

const PATCHES = [
  {
    slug: "oh-my-goddess",
    title: "Oh My Goddess!",
    synopsis: "Keiichi Morisato, étudiant maladroit au MIT de Tokyo, compose un mauvais numéro et se retrouve à parler à la Déesse Belldandy. Celle-ci lui accorde un souhait, et Keiichi, pris de court, demande qu'elle reste avec lui pour toujours. Ce voeu change leur vie à tous les deux et donne naissance à une romance douce et fantaisiste.",
    reviewHtml: "<p><em>Oh My Goddess!</em> de Kōsuke Fujishima est un manga seinen romantique publié de 1988 à 2014 — un monument de la longévité. Sur 48 volumes, il déroule l'une des romances les plus douces et bienveillantes du manga japonais.</p><p>La relation entre Keiichi et Belldandy est particulière : elle repose non sur les tensions et les malentendus habituels du genre, mais sur une confiance mutuelle sincère et une affection croissante. Belldandy est un personnage lumineux, dont la gentillesse n'est jamais naïve.</p><p>Le dessin évolue considérablement sur 26 ans, gagnant en précision et en élégance. Les soeurs de Belldandy, Urd et Skuld, apportent comédie et profondeur. Une oeuvre tranquille, chaleureuse, idéale pour les lecteurs qui cherchent une romance sans drama excessif.</p>",
    pros: ["Romance douce et bienveillante, rare dans le manga", "Personnages féminins mémorables (Urd, Skuld)", "Dessin élégant qui s'améliore sur 26 ans"],
    cons: ["48 volumes, engagement long", "Rythme très lent", "Peu de conflit narratif par conception"],
    stars: 4,
    tags: "Romance · Fantastique · Seinen · Comédie",
    category: "manga",
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/manga/oh-my-goddess", logo: "/logos/manganim.svg" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=ah+my+goddess+manga", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=ah+my+goddess+manga", logo: "/logos/amazon.svg" }
    ],
    streaming: []
  },
];

function patchEntry(content, slug, buildReplacement) {
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
  const existingEntry = content.slice(entryStart, entryEnd);
  const coverMatch = existingEntry.match(/cover:\s*"([^"]+)"/);
  const coverValue = coverMatch ? coverMatch[1] : "";
  const replacement = buildReplacement(coverValue);
  return content.slice(0, entryStart) + replacement + content.slice(entryEnd);
}

let content = readFileSync(FILE, "utf-8");
let patched = 0;

for (const p of PATCHES) {
  const result = patchEntry(content, p.slug, (coverValue) => {
    const shopsJson = p.shops.map(s =>
      `  {\n    "name": "${s.name}",\n    "url": "${s.url}",\n    "logo": "${s.logo}"\n  }`
    ).join(",\n");
    return `{
  slug: "${p.slug}",
  title: "${p.title}",
  synopsis: "${p.synopsis.replace(/"/g, '\\"')}",
  reviewHtml: "${p.reviewHtml.replace(/"/g, '\\"')}",
  pros: [${p.pros.map(x => `"${x.replace(/"/g, '\\"')}"`).join(", ")}],
  cons: [${p.cons.map(x => `"${x.replace(/"/g, '\\"')}"`).join(", ")}],
  stars: ${p.stars},
  category: "${p.category}",
  tags: "${p.tags}",
  cover: "${coverValue}",
  addedAt: "2026-03-22",
  shops: [
${shopsJson}
  ],
  streaming: []
}`;
  });
  if (!result) { console.log(`⚠️  Non trouvé : ${p.slug}`); continue; }
  content = result;
  patched++;
  console.log(`✅ ${p.title}`);
}

writeFileSync(FILE, content, "utf-8");
console.log(`\n🎉 Patch batch3-lot10 terminé ! ${patched}/${PATCHES.length} séries patchées.`);
