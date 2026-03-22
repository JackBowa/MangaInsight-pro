import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, "../data/series/series-2.ts");

const PATCHES = [
  {
    slug: "fff-class-trashero",
    title: "FFF-Class Trashero",
    synopsis: "Han Sungchul, héros d'un monde fantastique, complète sa quête de dix ans en massacrant tout sur son passage plutôt qu'en sauvant le monde. Résultat : note F en tant que héros. Il est renvoyé au début de l'aventure et doit recommencer jusqu'à obtenir un A. Problème : il s'en fiche complètement.",
    reviewHtml: `<p>FFF-Class Trashero est une déconstruction cynique et hilarante du genre isekai. Le protagoniste refuse catégoriquement d'être le héros vertueux attendu et préfère des solutions brutalement efficaces plutôt qu'élégantes. L'humour noir est constant, les situations absurdes bien amenées, et le principe de recommencer encore et encore est utilisé pour critiquer les clichés du genre.</p><p>Le manhwa est plus drôle que profond, mais son ton résolument anti-héroïque en fait une lecture rafraîchissante pour ceux qui ont lu trop d'isekai classiques.</p>`,
    pros: ["Parodie isekai intelligente et hilarante", "Protagoniste anti-héros assumé", "Situations absurdes bien exploitées"],
    cons: ["Peut sembler répétitif sur la durée", "Peu de profondeur émotionnelle"],
    tags: "Action · Comédie · Fantasy · Parodie",
    category: "manhwa",
    stars: 4,
    shops: [],
    streaming: [],
  },
  {
    slug: "my-id-is-gangnam-beauty",
    title: "My ID is Gangnam Beauty",
    synopsis: "Mirae a subi des années de harcèlement à cause de son apparence. À l'entrée à l'université, elle décide de subir une chirurgie esthétique pour changer de vie. Mais les regards persistent, et elle doit apprendre à se réconcilier avec sa propre image au-delà des jugements.",
    reviewHtml: `<p>My ID is Gangnam Beauty est un webtoon coréen rare qui traite frontalement des standards de beauté, du harcèlement et de la chirurgie esthétique. Mirae n'est pas une héroïne parfaite, elle porte ses complexes de façon crédible et douloureuse. La série ne juge pas ses choix mais explore honnêtement leurs conséquences sociales.</p><p>La romance avec Do-kyung est bien écrite, sans tomber dans la fantaisie. Un manhwa romcom avec une dimension sociale réelle, plus profond qu'il n'y paraît.</p>`,
    pros: ["Traitement honnête des standards de beauté", "Héroïne attachante et réaliste", "Réflexion sur l'image de soi bienvenue"],
    cons: ["Antagoniste trop caricaturale", "Certains arcs secondaires peu développés"],
    tags: "Comédie · Drame · Romance · Quotidien",
    category: "manhwa",
    stars: 4,
    shops: [],
    streaming: [{ name: "Crunchyroll", url: "https://www.crunchyroll.com/series/GR0XVZMNR/my-id-is-gangnam-beauty", logo: "/logos/crunchyroll.svg" }],
  },
  {
    slug: "dungeon-odyssey",
    title: "Dungeon Odyssey",
    synopsis: "Kang Jin-hyuk, hunter ordinaire, se retrouve piégé au fin fond d'un donjon impossible lors d'une catastrophe. Pour survivre, il doit remonter des étages en écrasant tout sur son passage, armé d'une compétence unique qu'il va apprendre à maîtriser.",
    reviewHtml: `<p>Dungeon Odyssey est un manhwa hunter action bien rythmé qui assume son côté divertissement pur. Le système de donjon multi-étages est bien construit, la progression du protagoniste satisfaisante, et les combats dynamiques. Sans révolutionner le genre, la série livre exactement ce qu'on attend d'elle.</p><p>Le dessin est solide, les designs d'ennemis variés. Un bon manhwa d'action pour les fans de système de jeu et de montée en puissance progressive.</p>`,
    pros: ["Système de donjon bien construit", "Action rythmée et combats dynamiques", "Progression satisfaisante"],
    cons: ["Peu original dans son genre", "Personnages secondaires génériques"],
    tags: "Action · Aventure · Fantasy · Jeu",
    category: "manhwa",
    stars: 3,
    shops: [],
    streaming: [],
  },
  {
    slug: "im-the-max-level-newbie",
    title: "Je Suis le Débutant Max Level",
    synopsis: "Kang Tae-san était le seul joueur à avoir atteint le niveau maximum dans un jeu de tours d'ascension de donjons, quand ce jeu devient la réalité. Fort de sa connaissance parfaite du système, il commence au niveau 1 dans un monde qui ne connaît pas encore les limites de sa maîtrise.",
    reviewHtml: `<p>Je Suis le Débutant Max Level exploite bien le concept du joueur expert dans un monde qui ne le connaît pas encore. Kang Tae-san anticipe tout, résout les situations avec une efficacité déconcertante, et l'écart entre ses capacités réelles et la perception des autres donne des moments satisfaisants.</p><p>Le manhwa est moins profond que ses ambitions, mais compense par un rythme enlevé et des combats bien illustrés. Un plaisir coupable efficace pour les fans du genre.</p>`,
    pros: ["Concept expert-déguisé-en-novice satisfaisant", "Rythme rapide et combats énergiques", "Humour né du décalage entre réalité et perception"],
    cons: ["Protagoniste trop omniscient", "Manque de vraie tension dramatique"],
    tags: "Action · Aventure · Fantasy · Comédie",
    category: "manhwa",
    stars: 3,
    shops: [],
    streaming: [],
  },
  {
    slug: "the-lord-of-coins",
    title: "The Lord's Coins Aren't Decreasing",
    synopsis: "Ern Schatten, seigneur d'un domaine minable, découvre un système unique : il peut observer d'autres mondes parallèles et commercer entre eux. Grâce à cette compétence de commerce interplanaire, il va transformer son domaine ruiné en empire prospère.",
    reviewHtml: `<p>The Lord's Coins Aren't Decreasing est un manhwa fantasy économique original. L'idée de construire sa puissance par le commerce plutôt que par les combats donne une perspective rafraîchissante dans un genre dominé par les hunters et les épées. Ern est un protagoniste calculateur et pragmatique qui pense en termes de profit avant tout.</p><p>Les mécaniques d'échange entre mondes sont inventives, les arcs de développement du domaine satisfaisants. Un manhwa pour ceux qui aiment la stratégie autant que l'action.</p>`,
    pros: ["Concept d'économie inter-mondes original", "Protagoniste stratège et pragmatique", "Construction d'empire satisfaisante"],
    cons: ["Arcs d'action moins réussis que les arcs commerce", "Monde peu développé au début"],
    tags: "Action · Aventure · Fantasy · Économie",
    category: "manhwa",
    stars: 4,
    shops: [],
    streaming: [],
  },
];

function findAndReplace(content, slug, newEntry) {
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
  const end = i + 1;
  return content.slice(0, start) + newEntry + content.slice(end);
}

function buildStreaming(streaming) {
  if (!streaming || streaming.length === 0) return "[]";
  const items = streaming.map(s => `{ name: "${s.name}", url: "${s.url}", logo: "${s.logo}" }`).join(", ");
  return `[${items}]`;
}

function getCover(content, slug) {
  const marker = `slug: "${slug}"`;
  const idx = content.indexOf(marker);
  if (idx === -1) return "";
  const block = content.slice(idx, idx + 800);
  const m = block.match(/cover:\s*"([^"]+)"/);
  return m ? m[1] : "";
}

let content = readFileSync(FILE, "utf-8");
let patched = 0;

for (const p of PATCHES) {
  const cover = getCover(content, p.slug);
  const synEscaped = p.synopsis.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  const reviewEscaped = p.reviewHtml.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
  const prosJson = JSON.stringify(p.pros);
  const consJson = JSON.stringify(p.cons);

  const replacement = `{
  slug: "${p.slug}",
  title: "${p.title.replace(/"/g, '\\"')}",
  synopsis: "${synEscaped}",
  reviewHtml: \`${reviewEscaped}\`,
  pros: ${prosJson},
  cons: ${consJson},
  tags: "${p.tags}",
  category: "${p.category}",
  stars: ${p.stars},
  cover: "${cover}",
  addedAt: "2026-03-22",
  shops: [],
  streaming: ${buildStreaming(p.streaming)},
  live: []
}`;

  const r = findAndReplace(content, p.slug, replacement);
  if (!r) { console.log(`⚠️ Non trouvé : ${p.slug}`); continue; }
  content = r;
  patched++;
  console.log(`✅ ${p.title}`);
}

writeFileSync(FILE, content, "utf-8");
console.log(`\n🎉 ${patched}/${PATCHES.length} patchés.`);
