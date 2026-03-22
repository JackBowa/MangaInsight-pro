import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, "../data/series/series-2.ts");

function getCover(content, slug) {
  const marker = `slug: "${slug}"`;
  const idx = content.indexOf(marker);
  if (idx === -1) return "";
  const block = content.slice(idx, idx + 600);
  const m = block.match(/cover:\s*"([^"]+)"/);
  return m ? m[1] : "";
}

function findAndReplace(content, slug, newEntry) {
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
  return content.slice(0, start) + newEntry + content.slice(end);
}

function appendEntry(content, entry) {
  const insertPos = content.lastIndexOf("]");
  const before = content.slice(0, insertPos).trimEnd();
  const needsComma = !before.endsWith(",");
  return before + (needsComma ? ",\n" : "\n") + entry + "\n]";
}

let content = readFileSync(FILE, "utf-8");
let patched = 0;

// ─── 1. Past Life Regressor (Jeonsaengja) ─────────────────────────────────────
const cover1 = getCover(content, "jeonsaengja");
const r1 = findAndReplace(content, "jeonsaengja", `{
  slug: "jeonsaengja",
  title: "Past Life Regressor",
  category: "manhwa",
  cover: "${cover1}",
  tags: "Action · Fantasy · Regression",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Han Seo-jun se souvient de sa vie passée dans un monde post-apocalyptique où il a tout perdu. Régressé au tout début de l'Éveil, il décide cette fois de tout faire différemment : obtenir les pouvoirs qu'il n'avait pas, former les alliances qu'il avait négligées, et empêcher la catastrophe qui a tout détruit.",
  pros: ["Prémisse solide avec mémoire des deux vies", "Stratégie et préparation bien développées", "Rythme soutenu et accrocheur"],
  cons: ["Certains mécanismes du système assez vus", "Protagoniste parfois trop omniscient"],
  reviewHtml: \`<p>Past Life Regressor s'inscrit dans la vague des manhwas de regression, mais avec une approche plus stratégique que la moyenne. Le héros ne revient pas simplement pour être surpuissant — il revient avec des informations précises sur l'avenir, et le manhwa exploite intelligemment cette asymétrie d'information.</p><p>Le système de progression est bien pensé, les enjeux bien posés, et l'ambiance post-apo qui sert de toile de fond donne une urgence permanente au récit. Les confrontations, qu'elles soient physiques ou politiques, sont toujours bien construites.</p><p>Un manhwa d'action-regression de qualité supérieure, recommandé si vous cherchez un héros qui réfléchit autant qu'il frappe.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=past+life+regressor+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=past+life+regressor+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r1) { console.log("⚠️ Non trouvé : jeonsaengja"); } else { content = r1; patched++; console.log("✅ jeonsaengja (Past Life Regressor)"); }

// ─── 2. Quest Supremacy ───────────────────────────────────────────────────────
const cover2 = getCover(content, "questism");
const r2 = findAndReplace(content, "questism", `{
  slug: "questism",
  title: "Quest Supremacy",
  category: "manhwa",
  cover: "${cover2}",
  tags: "Action · Système · Hunter",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Dans un monde où des portails de monstres ont transformé la société, Kim Si-hun reçoit un système unique qui lui impose des quêtes à accomplir ou à mourir. Débutant au rang le plus bas, il doit monter aussi vite que possible pour survivre, tout en découvrant les secrets derrière ce système mystérieux.",
  pros: ["Système de quêtes originale avec pénalité de mort", "Progression rapide et satisfaisante", "Action bien chorégraphiée"],
  cons: ["Manque un peu de profondeur narrative", "Antagonistes parfois en retrait"],
  reviewHtml: \`<p>Quest Supremacy fait partie des manhwas de hunter/système qui se distinguent par la pression constante exercée sur le protagoniste : pas de quête accomplie, c'est la mort. Cette menace permanente crée une tension qui différencie le manhwa de ses concurrents plus lénitifs.</p><p>Le héros part de zéro mais progresse à vitesse grand V, et le manhwa est honnête avec lui-même sur ce qu'il propose : de l'action rapide, des stats qui grimpent, et des affrontements spectaculaires. Le tout avec un dessin qui tient la route.</p><p>Un bon représentant du genre hunter-système, particulièrement recommandé pour les lecteurs qui apprécient les montées en puissance rapides sous contrainte.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=quest+supremacy+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=quest+supremacy+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r2) { console.log("⚠️ Non trouvé : questism"); } else { content = r2; patched++; console.log("✅ questism (Quest Supremacy)"); }

// ─── 3. Unholy Blood ─────────────────────────────────────────────────────────
const cover3 = getCover(content, "unholy-blood");
const r3 = findAndReplace(content, "unholy-blood", `{
  slug: "unholy-blood",
  title: "Unholy Blood",
  category: "manhwa",
  cover: "${cover3}",
  tags: "Action · Thriller · Horreur · Vampires",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Park Hayan est une demi-vampire qui a passé des années à se cacher des vampires purs qui veulent sa mort. Lorsqu'une vague de meurtres vampiriques déferle sur Séoul, elle décide de s'allier à un inspecteur humain pour traquer les coupables, mettant en jeu sa sécurité et son identité secrète.",
  pros: ["Héroïne forte et bien construite", "Atmosphère thriller tendue et efficace", "Duo protagonistes à la chimie solide"],
  cons: ["Certains antagonistes manquent de profondeur", "Fin un peu précipitée"],
  reviewHtml: \`<p>Unholy Blood de Lina Im est une rareté dans le manhwa : un thriller vampirique sombre qui mise sur la caractérisation plutôt que sur la romance. Park Hayan est une héroïne convaincante, mi-humaine mi-vampire, qui navigue dans un monde hostile avec détermination et intelligence.</p><p>Le manhwa excelle dans ses séquences d'action, nerveuses et bien rythmées, et dans la construction de son atmosphère : Séoul nocturne, vampires dissimulés dans la société moderne, danger permanent. La relation avec l'inspecteur humain apporte une dimension humaine bienvenue sans tomber dans le cliché.</p><p>Un des meilleurs manhwas vampiriques disponibles, à recommander chaudement aux amateurs de thriller dark et de protagonistes féminines solides.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=unholy+blood+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=unholy+blood+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r3) { console.log("⚠️ Non trouvé : unholy-blood"); } else { content = r3; patched++; console.log("✅ unholy-blood"); }

// ─── 4. Return to Player ─────────────────────────────────────────────────────
const cover4 = getCover(content, "return-to-player");
const r4 = findAndReplace(content, "return-to-player", `{
  slug: "return-to-player",
  title: "Return to Player",
  category: "manhwa",
  cover: "${cover4}",
  tags: "Action · Fantasy · Gaming · Regression",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Le monde entier a été transformé en un jeu mortel par des dieux extraterrestres. Yoon Se-jun a vécu jusqu'à la fin du jeu avant de mourir, et se retrouve projeté dix ans en arrière, au début de tout. Armé de sa connaissance complète du jeu, il entend cette fois changer les règles.",
  pros: ["Concept du gaming-survival très bien exécuté", "Connaissance totale du jeu exploitée intelligemment", "Enjeux épiques avec dieux et fins du monde"],
  cons: ["Parfois dense en mécaniques de jeu à assimiler", "Certain humour décalé peut dérouter"],
  reviewHtml: \`<p>Return to Player est un manhwa de gaming-regression qui se distingue par l'ampleur de son concept : le monde entier converti en jeu mortel par des entités divines, et un héros qui connaît la fin de l'histoire. Le manhwa exploite cette prémisse avec ambition, mêlant stratégie, action et révélations sur la nature du jeu.</p><p>La progression est satisfaisante, l'univers dense et imaginatif, et les confrontations — y compris avec des dieux — ont une échelle épique rare dans le genre. Le héros est compétent sans être omnipotent, ce qui maintient une tension réelle.</p><p>Un manhwa gaming-regression parmi les meilleurs du genre, avec de l'ambition narrative et un world-building soigné.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=return+to+player+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=return+to+player+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r4) { console.log("⚠️ Non trouvé : return-to-player"); } else { content = r4; patched++; console.log("✅ return-to-player"); }

// ─── 5. Reborn Rich (Chaebol's Youngest Son) ──────────────────────────────────
const cover5 = getCover(content, "reborn-rich");
const r5 = findAndReplace(content, "reborn-rich", `{
  slug: "reborn-rich",
  title: "Reborn Rich",
  category: "manhwa",
  cover: "${cover5}",
  tags: "Drame · Business · Regression",
  stars: 5,
  addedAt: "2026-03-22",
  synopsis: "Yoon Hyeon-woo, secrétaire dévoué d'un chaebol coréen, est assassiné par la famille qu'il a servie toute sa vie. Il se réveille réincarné en Song Jung-ki, le plus jeune fils du fondateur de ce même groupe d'entreprises. Armé de sa connaissance du futur économique et des secrets de la famille, il va construire son propre empire.",
  pros: ["Scénario économique et stratégique passionnant", "Tensions familiales et d'entreprise très bien écrites", "Adaptation drama populaire — le manhwa est à la hauteur"],
  cons: ["Peu d'action physique — tout se joue dans la stratégie", "Certains termes business peuvent décourager"],
  reviewHtml: \`<p>Reborn Rich est une oeuvre remarquable dans le paysage du manhwa de regression. En choisissant l'arène économique plutôt que le combat, la série s'adresse à un public différent — et le conquiert brillamment. Le héros manipule les marchés financiers, monte des entreprises, et joue une partie d'échecs multi-décennale avec une famille qui voulait sa mort.</p><p>La force du manhwa réside dans la profondeur de son écriture : les personnages ont tous des motivations complexes, les retournements sont bien preparés, et l'univers des chaebols coréens est dépeint avec un souci de réalisme saisissant. L'adaptation drama avec Song Joong-ki a encore amplifié sa popularité méritée.</p><p>Une des séries les plus solides narrativement du manhwa contemporain, indispensable pour les amateurs de thriller économique et familial.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=reborn+rich+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=reborn+rich+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r5) { console.log("⚠️ Non trouvé : reborn-rich"); } else { content = r5; patched++; console.log("✅ reborn-rich (Reborn Rich)"); }

// ─── 6. The Legend of the Northern Blade ─────────────────────────────────────
const cover6 = getCover(content, "the-legend-of-the-northern-blade");
const r6 = findAndReplace(content, "the-legend-of-the-northern-blade", `{
  slug: "the-legend-of-the-northern-blade",
  title: "Legend of the Northern Blade",
  category: "manhwa",
  cover: "${cover6}",
  tags: "Action · Arts martiaux · Murim · Fantasy",
  stars: 5,
  addedAt: "2026-03-22",
  synopsis: "Après la mort de son père, le grand maître du clan de l'Épée du Nord injustement accusé de trahison, Jin Mu-Won est laissé seul à la dérive dans un monde murim hostile. Passant des années à s'entraîner en secret, il finit par sortir de l'ombre pour venger son père et restaurer l'honneur de son clan.",
  pros: ["Art époustouflant, parmi les plus beaux du genre", "Chorégraphies de combat exceptionnelles", "Atmosphère murim authentique et immersive"],
  cons: ["Démarrage un peu long avant l'action", "Certains personnages secondaires peu développés"],
  reviewHtml: \`<p>The Legend of the Northern Blade est probablement l'un des manhwas d'arts martiaux les plus aboutis visuellement. Chaque page est un travail de maître — les chorégraphies de combat atteignent un niveau de lisibilité et de beauté que peu de séries du genre peuvent égaler.</p><p>Narrativement, le manhwa suit un arc classique de vengeance et rédemption, mais l'exécute avec une telle maîtrise que l'on ne s'en lasse pas. Jin Mu-Won est un héros discret mais captivant, et l'univers murim est construit avec un soin rare pour sa cohérence interne.</p><p>Un incontournable absolu du manhwa murim, à recommander en priorité à quiconque apprécie les arts martiaux ou cherche une série visuellement impressionnante.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=legend+northern+blade+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=legend+northern+blade+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r6) { console.log("⚠️ Non trouvé : the-legend-of-the-northern-blade"); } else { content = r6; patched++; console.log("✅ the-legend-of-the-northern-blade"); }

// ─── 7. Absolute Sword Sense ──────────────────────────────────────────────────
const cover7 = getCover(content, "absolute-sword-sense");
const r7 = findAndReplace(content, "absolute-sword-sense", `{
  slug: "absolute-sword-sense",
  title: "Absolute Sword Sense",
  category: "manhwa",
  cover: "${cover7}",
  tags: "Action · Arts martiaux · Murim",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Oh Sohye, anciennement servante illégitime du clan du Sang Divin, est réincarnée dans son passé après une mort brutale. Portant le don unique de pouvoir communiquer avec les armes, elle décide de tracer son propre chemin dans le monde du murim, loin des chaînes de sa destinée originelle.",
  pros: ["Pouvoir unique et bien exploité (communication avec les armes)", "Héroïne déterminée et attachante", "Bonne densité d'action et de développement"],
  cons: ["Univers murim parfois dense pour les nouveaux lecteurs", "Quelques longueurs dans les arcs de clan"],
  reviewHtml: \`<p>Absolute Sword Sense se distingue dans le genre murim grâce à son concept central original : le protagoniste peut communiquer avec les épées, leur parler et entendre leurs histoires. Ce don, à la fois pratique et philosophique, donne au manhwa une identité propre au sein d'un genre très encombré.</p><p>L'héroïne est convaincante et son évolution bien menée. Les combats sont dynamiques et le système de pouvoirs cohérent. Le manhwa sait doser l'action et le développement de personnages sans jamais perdre le rythme.</p><p>Un manhwa murim de qualité supérieure, idéal pour les amateurs du genre qui cherchent une héroïne forte et un pouvoir vraiment original.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=absolute+sword+sense+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=absolute+sword+sense+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r7) { console.log("⚠️ Non trouvé : absolute-sword-sense"); } else { content = r7; patched++; console.log("✅ absolute-sword-sense"); }

// ─── 8. Taming Master ────────────────────────────────────────────────────────
const cover8 = getCover(content, "taming-master");
const r8 = findAndReplace(content, "taming-master", `{
  slug: "taming-master",
  title: "Taming Master",
  category: "manhwa",
  cover: "${cover8}",
  tags: "Action · Fantasy · Gaming",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Ian Phi, joueur de haut rang dans le VRMMO Kailan, décide de recommencer depuis zéro en choisissant la classe \"Dompteur\" — réputée comme la plus faible du jeu. Avec un savoir-faire unique et une détermination sans faille, il va prouver que même la classe la moins prometteuse peut devenir la plus puissante.",
  pros: ["Concept de la classe \"faible\" rendu fort, très satisfaisant", "Créatures et système de domptage originaux", "Progression jubilante et bien rythmée"],
  cons: ["Logique de jeu parfois complexe à suivre", "Certains arcs compétitifs s'étirent"],
  reviewHtml: \`<p>Taming Master capitalise sur un fantasme bien connu des joueurs : prendre la classe sous-estimée de tout le monde et la rendre absolument brisée. Ian Phi, avec une maîtrise de la mécanique de domptage que personne d'autre n'a explorée, construit une équipe de créatures qui défie les conventions du jeu.</p><p>Le manhwa est un vrai plaisir pour les amateurs de gaming-fantasy : la progression est satisfaisante, les créatures mémorables, et les batailles contre d'autres joueurs ou monstres épiques créent des moments de haut vol. L'humour est bien présent sans jamais alourdir le récit.</p><p>Un manhwa gaming-fantasy enthousiasmant, parfait pour qui aime voir un protagoniste prendre tout le monde à contre-pied avec une stratégie inattendue.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=taming+master+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=taming+master+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r8) { console.log("⚠️ Non trouvé : taming-master"); } else { content = r8; patched++; console.log("✅ taming-master"); }

// ─── 9. The Academy's Undercover Professor ────────────────────────────────────
const cover9 = getCover(content, "the-academys-undercover-professor");
const r9 = findAndReplace(content, "the-academys-undercover-professor", `{
  slug: "the-academys-undercover-professor",
  title: "Academy's Undercover Professor",
  category: "manhwa",
  cover: "${cover9}",
  tags: "Action · Fantasy · Magie · Académie",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Merlin Darlington, mercenaire d'élite, est contraint de prendre l'identité d'un professeur décédé pour infiltrer la prestigieuse Académie de Sorcellerie de Theon. Caché sous une fausse identité, il doit jongler entre ses missions secrètes, l'enseignement de la magie, et les complots qui menacent l'académie de l'intérieur.",
  pros: ["Double vie du protagoniste source de tension constante", "World-building magique riche et cohérent", "Bonne gestion de l'humour et de l'action"],
  cons: ["Certains élèves-personnages restent superficiels", "Quelques arcs un peu convenus"],
  reviewHtml: \`<p>Academy's Undercover Professor joue habilement avec les codes du manhwa d'académie en ajoutant une couche d'espionnage qui distingue le récit. Le héros n'est pas un étudiant qui doit prouver sa valeur — c'est un mercenaire expérimenté qui doit faire semblant d'être professeur, et ce décalage permanent crée des situations à la fois comiques et tendues.</p><p>L'univers magique est bien construit, les intrigues qui se trament en arrière-plan sont solides, et l'écriture sait équilibrer les moments d'action avec les aspects pédagogiques de la vie à l'académie. Le protagoniste dégage un charisme naturel.</p><p>Un excellent manhwa d'académie pour qui cherche quelque chose de plus mature et stratégique que la moyenne du genre.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=academy+undercover+professor+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=academy+undercover+professor+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r9) { console.log("⚠️ Non trouvé : the-academys-undercover-professor"); } else { content = r9; patched++; console.log("✅ the-academys-undercover-professor"); }

// ─── 10. Medical Return ───────────────────────────────────────────────────────
const cover10 = getCover(content, "medical-hwansaeng");
const r10 = findAndReplace(content, "medical-hwansaeng", `{
  slug: "medical-hwansaeng",
  title: "Medical Return",
  category: "manhwa",
  cover: "${cover10}",
  tags: "Drame · Médical · Regression",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Kim Jihyeon, médecin accompli qui a sacrifié toute sa vie à la médecine, meurt brutalement et se retrouve projeté dans son passé, à l'époque de ses études. Avec son expertise médicale complète, il décide de vivre différemment, de sauver les gens qu'il n'a pas pu sauver, et de corriger ses erreurs passées.",
  pros: ["Connaissance médicale précise et bien intégrée", "Dimension émotionnelle forte autour des regrets", "Cas médicaux variés et intéressants"],
  cons: ["Peut sembler dense pour les non-initiés à la médecine", "Rythme parfois inégal entre les arcs"],
  reviewHtml: \`<p>Medical Return appartient au sous-genre médical-regression, mais se distingue par la sincérité de son approche. Le héros n'est pas juste un génie suprême — c'est un médecin qui a tout raté dans sa première vie et qui revient avec la connaissance des erreurs à ne pas répéter. Cette dimension humaine et mélancolique donne de la profondeur à ce qui aurait pu n'être qu'une série de cas médicaux résolus facilement.</p><p>Les procédures médicales sont décrites avec un soin appréciable, et les enjeux — sauver des patients condamnés, dénoncer des corruptions médicales — sont bien posés. Une série qui satisfera aussi bien les amateurs de drama médical que de manhwa de regression.</p><p>Un manhwa médical-regression solide et émotionnellement engageant, recommandé pour les amateurs de drama et de séries médicales réalistes.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=medical+return+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=medical+return+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r10) { console.log("⚠️ Non trouvé : medical-hwansaeng"); } else { content = r10; patched++; console.log("✅ medical-hwansaeng (Medical Return)"); }

// ─── 11. Heavenly Inquisition Sword (Nine Heavens Swordmaster) ────────────────
const cover11 = getCover(content, "the-nine-heavens-swordmaster");
const r11 = findAndReplace(content, "the-nine-heavens-swordmaster", `{
  slug: "the-nine-heavens-swordmaster",
  title: "Heavenly Inquisition Sword",
  category: "manhwa",
  cover: "${cover11}",
  tags: "Action · Arts martiaux · Murim · Fantasy",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Yeon Jeokha, l'héritier du clan Céleste accusé à tort de trahison et condamné à mort, reçoit une seconde chance. Réincarné ou regression — selon les variantes — il reprend les rênes de son destin avec une maîtrise de l'épée divine que personne ne peut égaler, bien décidé à renverser ceux qui l'ont condamné.",
  pros: ["Combats spectaculaires avec pouvoirs célestes", "Héros badass immédiatement établi", "Bonne fluidité narrative"],
  cons: ["Antagonistes parfois caricaturaux", "Certaines intrigues clan-politiques secondaires"],
  reviewHtml: \`<p>Heavenly Inquisition Sword (Nine Heavens Swordmaster) s'inscrit dans la tradition du murim manhwa avec un héros injustement condamné qui revient se venger — un classique, mais bien exécuté. Le manhwa met l'accent sur l'action et les arts martiaux, avec des combats visuellement impressionnants qui tirent parti d'un style graphique dynamique.</p><p>Le protagoniste est établi d'emblée comme un maître de l'épée, ce qui donne aux confrontations une dimension spectaculaire immédiate. Les intrigues politiques de clan fournissent un contexte solide sans trop alourdir le récit.</p><p>Un manhwa murim efficace et généreux en action, idéal pour les amateurs de vengeance épique et d'arts martiaux célestes.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=heavenly+inquisition+sword+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=heavenly+inquisition+sword+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r11) { console.log("⚠️ Non trouvé : the-nine-heavens-swordmaster"); } else { content = r11; patched++; console.log("✅ the-nine-heavens-swordmaster (Heavenly Inquisition Sword)"); }

// ─── 12. I Became the Villain's Mother ───────────────────────────────────────
const cover12 = getCover(content, "akdangui-eommaga-doeeobeoryeotda");
const r12 = findAndReplace(content, "akdangui-eommaga-doeeobeoryeotda", `{
  slug: "akdangui-eommaga-doeeobeoryeotda",
  title: "I Became the Villain's Mother",
  category: "manhwa",
  cover: "${cover12}",
  tags: "Fantasy · Romance · Isekai · Comédie",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Une femme moderne se retrouve réincarnée dans le corps d'un personnage d'un roman de fantasy : la méchante mère du futur grand villain. Sachant que l'enfant qu'elle élève est destiné à devenir un monstre, elle décide de tout faire pour l'en empêcher — avec pour seul outil son amour maternel et sa détermination.",
  pros: ["Dynamique mère-enfant originale et touchante", "Twist sur le genre villainess vraiment rafraîchissant", "Humour et émotion bien équilibrés"],
  cons: ["Certains aspects fantasy restent peu développés", "La romance principale arrive tard"],
  reviewHtml: \`<p>I Became the Villain's Mother est une variation ingénieuse sur le genre villainess isekai. Au lieu de jouer une villainess romantique, l'héroïne doit élever le futur grand méchant d'une histoire — et sa solution est de lui offrir la chose qui lui a manqué : un amour maternel sincère.</p><p>La relation entre l'héroïne et l'enfant-villain est le coeur battant de la série, et le manhwa la traite avec une tendresse et un humour qui sonnent juste. Les scènes d'affection parentale ont une résonance émotionnelle peu commune dans le genre, alternant avec des situations comiques bien amenées.</p><p>Un manhwa isekai-villainess original et émotionnellement satisfaisant, parfait pour qui cherche quelque chose de plus tendre et humain que la moyenne.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=i+became+villain+mother+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=i+became+villain+mother+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r12) { console.log("⚠️ Non trouvé : akdangui-eommaga-doeeobeoryeotda"); } else { content = r12; patched++; console.log("✅ akdangui-eommaga-doeeobeoryeotda (Villain's Mother)"); }

// ─── 13. My Daughter Is the Final Boss ───────────────────────────────────────
const cover13 = getCover(content, "my-daughter-is-the-final-boss");
const r13 = findAndReplace(content, "my-daughter-is-the-final-boss", `{
  slug: "my-daughter-is-the-final-boss",
  title: "My Daughter Is the Final Boss",
  category: "manhwa",
  cover: "${cover13}",
  tags: "Action · Fantasy · Comédie · Famille",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Lee Seojun se réveille dans un monde où des portails de monstres ont envahi la Terre, et découvre que sa petite fille est destinée à devenir le boss final qui détruira le monde. Plutôt que de la craindre, il décide d'être le meilleur père possible pour elle, tout en luttant pour comprendre son destin et peut-être changer la prophétie.",
  pros: ["Concept père-fille adorable dans un contexte apocalyptique", "Équilibre parfait entre comédie et action", "Héros attachant et humain"],
  cons: ["Certains aspects world-building restent flous", "La fille est plus symbole que personnage au début"],
  reviewHtml: \`<p>My Daughter Is the Final Boss propose un concept délicieux : un père qui apprend que sa fille de quelques années est destinée à devenir le Boss Final de l'apocalypse, et qui répond à ça en décidant d'être le meilleur papa possible. Cette prémisse donne lieu à des situations aussi absurdes que touchantes.</p><p>Le manhwa alterne habilement entre les moments d'action tendus — le héros doit se battre pour protéger sa fille dans un monde de portails et de monstres — et les scènes familiales qui sont le vrai moteur émotionnel de la série. L'humour est omniprésent mais jamais aux dépens de la sincérité.</p><p>Un manhwa original et chaleureux, recommandé pour ceux qui cherchent de l'action et de la comédie avec une dimension familiale authentique.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=my+daughter+final+boss+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=my+daughter+final+boss+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r13) { console.log("⚠️ Non trouvé : my-daughter-is-the-final-boss"); } else { content = r13; patched++; console.log("✅ my-daughter-is-the-final-boss"); }

// ─── 14. Murim RPG Simulation ─────────────────────────────────────────────────
const cover14 = getCover(content, "murim-rpg-simulation");
const r14 = findAndReplace(content, "murim-rpg-simulation", `{
  slug: "murim-rpg-simulation",
  title: "Murim RPG Simulation",
  category: "manhwa",
  cover: "${cover14}",
  tags: "Action · Arts martiaux · Murim · Gaming",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Un joueur passionné de RPG se retrouve réincarné dans le monde du murim avec un système de jeu intégré à sa réalité. Armé de sa connaissance des mécaniques RPG et du système, il progresse dans cet univers d'arts martiaux comme s'il jouait à son RPG préféré — avec des conséquences bien réelles.",
  pros: ["Fusion murim et RPG parfaitement équilibrée", "Système de progression lisible et satisfaisant", "Connaissance RPG du héros exploitée intelligemment"],
  cons: ["Certains tropes murim très classiques", "Les enjeux de mort peuvent sembler amoindris"],
  reviewHtml: \`<p>Murim RPG Simulation réussit le mariage difficile entre le monde du murim coréen et la mécanique du RPG. Le protagoniste approche les arts martiaux avec une mentalité de joueur de jeu de rôle, optimisant ses compétences et ses stats comme dans un MMORPG — ce qui donne au manhwa un ton légèrement décalé très agréable.</p><p>Le système de progression est transparent et satisfaisant, et voir le héros appliquer la logique du gamer à des situations de vie-ou-mort du murim crée des moments savoureux. La qualité graphique est solide, surtout dans les séquences de combat.</p><p>Un manhwa murim-gaming original et bien exécuté, à recommander si vous aimez les deux genres et que vous cherchez une fusion réussie.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=murim+rpg+simulation+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=murim+rpg+simulation+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r14) { console.log("⚠️ Non trouvé : murim-rpg-simulation"); } else { content = r14; patched++; console.log("✅ murim-rpg-simulation"); }

// ─── 15. The Extra's Academy Survival Guide ───────────────────────────────────
const cover15 = getCover(content, "the-extras-academy-survival-guide");
const r15 = findAndReplace(content, "the-extras-academy-survival-guide", `{
  slug: "the-extras-academy-survival-guide",
  title: "The Extra's Academy Survival Guide",
  category: "manhwa",
  cover: "${cover15}",
  tags: "Action · Fantasy · Académie · Isekai",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Ed Rothtaylor, personnage secondaire sans importance dans un roman de fantasy, est conscient d'être un \"extra\" destiné à mourir tôt. Expulsé de l'académie royale et abandonné par sa famille, il décide de tout faire pour survivre en connaissant parfaitement l'histoire qui se déroule autour de lui.",
  pros: ["Point de vue de l'extra vraiment original", "Stratégie de survie minutieuse et satisfaisante", "Relations avec les personnages principaux bien développées"],
  cons: ["Démarrage un peu lent le temps de poser le contexte", "Quelques arcs d'académie conventionne"],
  reviewHtml: \`<p>The Extra's Academy Survival Guide adopte un angle rarement exploré : le point de vue du personnage secondaire qui connaît l'histoire et sait qu'il n'a aucune importance dans le grand schéma des choses. Ed Rothtaylor, isolé et abandonné, doit survivre uniquement par sa propre intelligence et sa connaissance du récit.</p><p>Ce qui rend le manhwa particulièrement attachant, c'est la manière dont Ed interagit avec les "vrais" personnages principaux de l'histoire sans se révéler comme un joueur extérieur. Les stratégies de survie sont inventives et le développement des relations surprend régulièrement.</p><p>Un manhwa d'académie-isekai original et malin, recommandé pour les amateurs du genre qui cherchent un protagoniste différent des héros habituels.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=extra+academy+survival+guide+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=extra+academy+survival+guide+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r15) { console.log("⚠️ Non trouvé : the-extras-academy-survival-guide"); } else { content = r15; patched++; console.log("✅ the-extras-academy-survival-guide"); }

// ─── 16. Chronicles of the Martial God's Return ───────────────────────────────
const cover16 = getCover(content, "return-of-the-war-god");
const r16 = findAndReplace(content, "return-of-the-war-god", `{
  slug: "return-of-the-war-god",
  title: "Chronicles of the Martial God's Return",
  category: "manhwa",
  cover: "${cover16}",
  tags: "Action · Arts martiaux · Murim · Comeback",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Le Dieu de la Guerre du murim, autrefois l'être le plus puissant de son époque, est ressuscité après des millénaires dans un monde du murim complètement transformé. Il doit réapprendre les nouvelles techniques, affronter des clans qu'il ne reconnaît plus, et retrouver son statut légendaire dans un monde qui l'a oublié.",
  pros: ["Héros légendaire de retour dans un monde changé — bonne tension", "Combats de haut niveau constants", "Nostalgie et adaptation bien équilibrées"],
  cons: ["Puissance du héros rend les enjeux parfois limités", "Personnages secondaires peu mémorables"],
  reviewHtml: \`<p>Chronicles of the Martial God's Return joue sur le fantasme du retour du grand maître dans un monde qui l'a oublié. Le héros n'est pas un débutant qui progresse — c'est une légende qui doit se réadapter, ce qui crée une dynamique intéressante entre sa puissance intrinsèque et les nouvelles réalités du murim.</p><p>Le manhwa est généreux en action de haut vol, avec des affrontements entre maîtres qui ont l'ampleur et le spectacle qu'on attend du genre. La révélation progressive de l'histoire passée du héros maintient l'intérêt narrative au-delà de la simple démonstration de puissance.</p><p>Un manhwa murim convaincant pour les amateurs de power fantasy et de légendes du passé qui reviennent au premier plan.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=chronicles+martial+god+return+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=chronicles+martial+god+return+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r16) { console.log("⚠️ Non trouvé : return-of-the-war-god"); } else { content = r16; patched++; console.log("✅ return-of-the-war-god (Chronicles Martial God)"); }

// ─── 17. The Perks of Being a Villainess ─────────────────────────────────────
const cover17 = getCover(content, "the-perks-of-being-a-villainess");
const r17 = findAndReplace(content, "the-perks-of-being-a-villainess", `{
  slug: "the-perks-of-being-a-villainess",
  title: "The Perks of Being a Villainess",
  category: "manhwa",
  cover: "${cover17}",
  tags: "Fantasy · Romance · Comédie · Isekai",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Réincarnée en tant que villainess d'un roman de fantasy, Daphne Yulif décide d'embrasser son rôle à fond et de profiter de tous les avantages qu'offre son statut de noble de haut rang — richesse, pouvoir, et les love interests du roman qui gravitent autour d'elle. Elle n'a aucune intention de suivre le scénario original.",
  pros: ["Héroïne pragmatique et drôle qui assume son rôle", "Comédie romantique fraîche et bien écrite", "Retournements du scénario original bien gérés"],
  cons: ["Peu de surprises narratives majeures", "Certains arcs secondaires peu mémorables"],
  reviewHtml: \`<p>The Perks of Being a Villainess adopte une approche délicieusement opportuniste du genre villainess isekai. Plutôt que de chercher à changer son destin ou à racheter son personnage, Daphne décide d'exploiter à fond tous les avantages que lui confère son statut — et le manhwa s'amuse énormément avec cette décision.</p><p>Le ton est léger, l'humour efficace, et les interactions avec les personnages masculins du roman sont particulièrement bien menées. La protagoniste a un charisme naturel qui rend chaque scène agréable, et les péripéties du scénario original dévié sont présentées avec inventivité.</p><p>Un manhwa villainess-isekai de bonne facture, recommandé pour ceux qui aiment les héroïnes décomplexées et la comédie romantique fantasy légère.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=perks+being+villainess+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=perks+being+villainess+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r17) { console.log("⚠️ Non trouvé : the-perks-of-being-a-villainess"); } else { content = r17; patched++; console.log("✅ the-perks-of-being-a-villainess"); }

// ─── Entrées manuelles ────────────────────────────────────────────────────────

// 18. Surviving as a Barbarian in Another World
const entry18 = `{
  slug: "surviving-as-a-barbarian-in-another-world",
  title: "Surviving as a Barbarian in Another World",
  category: "manhwa",
  cover: "",
  tags: "Action · Aventure · Isekai · Fantasy",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Un homme ordinaire est transporté dans un monde fantastique et se retrouve dans le corps d'un barbare des terres sauvages — loin des civilisations et des systèmes de classes habituels. Sans magie ni système, il devra survivre uniquement par sa force brute, son instinct, et son intelligence humaine dans un monde impitoyable.",
  pros: ["Approche survie sans système — originalité dans le genre", "Action brutale et viscérale bien rendue", "Progression crédible basée sur l'effort réel"],
  cons: ["Peu de relations développées dans les premiers arcs", "Univers fantasy moins riche que d'autres titres"],
  reviewHtml: \`<p>Surviving as a Barbarian in Another World se distingue du tout-venant de l'isekai en refusant d'octroyer à son héros un système de progression ou des pouvoirs magiques. Réincarné dans le corps d'un barbare, il doit tout apprendre à la dure, dans un environnement hostile qui ne fait aucun cadeau.</p><p>Cette approche plus brute et survivaliste donne au manhwa une texture différente des isekai classiques : les combats ont du poids, la progression est réelle, et chaque victoire est méritée. Le côté « barbare contre un monde fantastique » crée des situations inattendues et souvent jubilatoires.</p><p>Un isekai de survie rafraîchissant pour qui cherche une alternative aux systèmes RPG omniprésen, avec une action directe et un héros qui compte uniquement sur lui-même.</p>\`,
  shops: [],
  streaming: [],
  live: []
}`;
content = appendEntry(content, entry18);
patched++; console.log("✅ surviving-as-a-barbarian-in-another-world (manuel)");

// 19. Duke's Eldest Son Escaped to the Military
const entry19 = `{
  slug: "dukes-eldest-son-escaped-to-the-military",
  title: "Duke's Eldest Son Escaped to the Military",
  category: "manhwa",
  cover: "",
  tags: "Action · Fantasy · Militaire · Isekai",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "L'aîné du duc, sachant que sa famille noble sera détruite dans le futur et que lui sera exécuté, décide de fuir pour rejoindre l'armée impériale sous un faux nom. Dans les rangs des soldats, loin des intrigues nobiliaires, il va forger son propre chemin et devenir une légende militaire.",
  pros: ["Angle militaire original dans le genre isekai/noble", "Progression du héros hors des sentiers battus", "Bonne tension entre identité secrète et compétences réelles"],
  cons: ["Rythme parfois irrégulier entre arcs militaires et politiques", "Certains personnages nobles peu nuancés"],
  reviewHtml: \`<p>Duke's Eldest Son Escaped to the Military propose une variation intéressante sur le manhwa de noble qui régresse : au lieu de manipuler la politique aristocratique depuis les salons, le héros fuit vers l'armée et choisit de se battre en première ligne sous une fausse identité. Ce choix thématique donne au manhwa un ton plus humble et authentique.</p><p>La progression militaire du héros est bien rendue, avec des combats crédibles et une montée en grade qui reflète vraiment ses compétences. Les tensions autour de son identité cachée apportent une couche de suspense bien gérée.</p><p>Un manhwa fantasy-militaire original, recommandé pour les amateurs de isekai noble qui cherchent quelque chose de moins centré sur les intrigues de cour.</p>\`,
  shops: [],
  streaming: [],
  live: []
}`;
content = appendEntry(content, entry19);
patched++; console.log("✅ dukes-eldest-son-escaped-to-the-military (manuel)");

// 20. The Monster Duchess and Contract Princess
const entry20 = `{
  slug: "monster-duchess-and-contract-princess",
  title: "The Monster Duchess and Contract Princess",
  category: "manhwa",
  cover: "",
  tags: "Fantasy · Romance · Isekai",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Sylvia, maltraitée par sa propre famille qui veut exploiter ses pouvoirs magiques pour les transférer à sa soeur, implore la duchesse la plus redoutée du royaume de l'adopter. La duchesse, surnommée « monstre » pour ses pouvoirs dévastateurs, accepte — et les deux forment une alliance inattendue entre deux êtres rejetés.",
  pros: ["Relation duchesse-enfant à la fois touchante et originale", "Héroïne déterminée malgré sa situation vulnérable", "Romance secondaire bien construite"],
  cons: ["Family drama parfois répétitif", "Résolution de certains conflits un peu rapide"],
  reviewHtml: \`<p>The Monster Duchess and Contract Princess se distingue par la force de sa relation centrale : une petite fille désespérée qui choisit de s'allier à la personne la plus effrayante du royaume pour survivre. La dynamique entre Sylvia et la duchesse est à la fois émouvante et rafraîchissante — deux personnes considérées comme « monstres » par leur entourage qui se trouvent mutuellement.</p><p>Le manhwa gère bien l'équilibre entre le drama familial (la famille cruelle de Sylvia), le développement des pouvoirs magiques, et la romance naissante qui se construit naturellement en arrière-plan. L'héroïne est particulièrement bien écrite pour une protagoniste enfant réincarnée.</p><p>Un manhwa isekai-romance solide et émotionnellement engageant, à recommander pour les amateurs de relations f/f fortes et de dynamiques familiales complexes.</p>\`,
  shops: [],
  streaming: [],
  live: []
}`;
content = appendEntry(content, entry20);
patched++; console.log("✅ monster-duchess-and-contract-princess (manuel)");

writeFileSync(FILE, content, "utf-8");
console.log(`\n✅ ${patched} entrées patchées/ajoutées`);
