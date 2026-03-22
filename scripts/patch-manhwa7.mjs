import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, "../data/series/series-2.ts");

const PATCHES = [
  {
    slug: "the-abandoned-empress",
    title: "L'Impératrice Abandonnée",
    synopsis: "Aristia est l'impératrice choisie par la prophétie, mais le jeune empereur lui préfère une étrangère. Après une vie de mépris et de souffrance, elle meurt. Elle se réveille enfant, avec tous ses souvenirs, et décide de changer son destin — quitte à refuser la couronne.",
    reviewHtml: `<p>L'Impératrice Abandonnée est un manhwa romance-fantasy qui se distingue par la force émotionnelle de son héroïne. Aristia, meurtrie par une première vie d'humiliations, choisit la liberté plutôt que la grandeur. La tension entre son passé douloureux et ses tentatives de construire un avenir différent est bien gérée.</p><p>Le dessin est beau, les costumes d'époque soignés, et les moments romantiques délicats. Un incontournable du genre "villainess/seconde chance", même si le rythme se relâche parfois en milieu de série.</p>`,
    pros: ["Héroïne émouvante et bien écrite", "Romance lente mais sincère", "Univers de cour élégant"],
    cons: ["Rythme irrégulier dans les arcs intermédiaires", "Certains antagonistes trop manichéens"],
    tags: "Drame · Fantasy · Romance",
    category: "manhwa",
    stars: 4,
    shops: [],
    streaming: [],
  },
  {
    slug: "villains-are-destined-to-die",
    title: "Les Vilains Sont Condamnés à Mourir",
    synopsis: "Une joueuse se réveille coincée dans son otome game sous l'identité de la vilaine, Penelope Eckhart, condamnée à mourir selon tous les scénarios du jeu. Sans accès aux choix faciles réservés à l'héroïne, elle doit survivre en mode difficile face à des personnages qui la détestent.",
    reviewHtml: `<p>Les Vilains Sont Condamnés à Mourir est l'un des manhwas isekai-otome les mieux écrits du genre. Penelope est piégée dans un mode impossible : tous les love interests la méprisent, chaque faux pas peut la tuer, et elle n'a pas les avantages de l'héroïne. Le désespoir de la situation est rendu palpable, sans jamais verser dans le misérabilisme.</p><p>L'humour noir côtoie des moments déchirants. Le système de jeu est bien intégré à la narration. Un manhwa qui comprend et subvertit intelligemment les codes du genre.</p>`,
    pros: ["Concept otome-jeu déconstruit brillamment", "Tension permanente entre survie et romance", "Humour noir bien dosé"],
    cons: ["Certains love interests peu développés au début", "Fin un peu précipitée"],
    tags: "Comédie · Fantasy · Romance · Psychologie",
    category: "manhwa",
    stars: 5,
    shops: [],
    streaming: [],
  },
  {
    slug: "the-boxer",
    title: "The Boxer",
    synopsis: "Yu est un jeune homme au regard vide qui n'a jamais trouvé sa raison de vivre. Découvert par un entraîneur légendaire, il découvre la boxe — et une aptitude terrifiante pour la violence. Mais dans quel but se battre quand on ne ressent rien ?",
    reviewHtml: `<p>The Boxer est une œuvre à part dans le paysage manhwa. À mi-chemin entre le sport de combat et la réflexion philosophique, il suit un protagoniste qui n'est pas un héros classique mais un être vide cherchant un sens à son existence à travers les poings. La narration est poétique, le trait graphique expressif et parfois brutal.</p><p>Le manhwa interroge la violence, le talent, et la solitude d'une manière rarement vue dans le genre sportif. Un chef-d'œuvre atypique qui laisse une empreinte durable.</p>`,
    pros: ["Protagoniste unique et fascinant", "Narration poétique et profonde", "Combats visuellement saisissants"],
    cons: ["Rythme contemplatif qui peut déconcerter", "Peu accessible aux lecteurs cherchant de l'action pure"],
    tags: "Action · Drame · Psychologie · Sports",
    category: "manhwa",
    stars: 5,
    shops: [],
    streaming: [],
  },
  {
    slug: "lout-of-counts-family",
    title: "Le Vaurien de la Famille du Comte",
    synopsis: "Un lecteur avide se retrouve dans le corps de Claude de Ilfir, le jeune frère dissolu d'un comte dans un roman de fantasy qu'il connaît par cœur. Problème : ce personnage est voué à une mort horrible. Armé de ses connaissances du futur, il doit changer son destin.",
    reviewHtml: `<p>Le Vaurien de la Famille du Comte mélange habilement l'humour et l'isekai classique. Claude, à la base un ivrogne méprisable, devient progressivement quelqu'un de plus fiable tout en conservant ses travers comiques. Le roman original lui servant de guide, il anticipe les événements avec un avantage stratégique bien exploité.</p><p>Le manhwa est rythmé, souvent drôle, avec de bonnes scènes d'action. Un bon équilibre entre comédie, politique de cour et fantastique.</p>`,
    pros: ["Humour efficace et personnage principal attachant", "Utilisation intelligente de la connaissance du roman", "Bonne progression narrative"],
    cons: ["Quelques arcs moins aboutis", "Secondaires parfois génériques"],
    tags: "Action · Comédie · Fantasy · Aventure",
    category: "manhwa",
    stars: 4,
    shops: [],
    streaming: [],
  },
  {
    slug: "the-reaper",
    title: "Reaper of the Drifting Moon",
    synopsis: "Pyo-wol, un orphelin enlevé et entraîné dans les ténèbres par une guilde d'assassins, émerge comme le tueur le plus redoutable des arts martiaux. Il n'aspire à rien d'autre qu'à retrouver sa liberté, mais le monde des murim ne laisse jamais les forts en paix.",
    reviewHtml: `<p>Reaper of the Drifting Moon est un manhwa de murim (arts martiaux) qui se distingue par son protagoniste anti-héroïque. Pyo-wol n'est pas un justicier, c'est un assassin froid et calculateur qui avance ses propres objectifs dans un monde de clans rivaux. L'atmosphère sombre et le niveau de violence plus élevé que la moyenne en font une lecture pour amateurs de martial arts matures.</p><p>Le worldbuilding est dense, les combats précis et brutaux. Un manhwa murim solide pour les lecteurs qui veulent sortir des héros vertueux classiques.</p>`,
    pros: ["Protagoniste anti-héroïque fascinant", "Worldbuilding murim dense et cohérent", "Combats techniques et intenses"],
    cons: ["Peut être difficile d'entrée pour les non-initiés au murim", "Rythme très dense en personnages"],
    tags: "Action · Aventure · Arts Martiaux · Drame",
    category: "manhwa",
    stars: 4,
    shops: [],
    streaming: [],
  },
  {
    slug: "charlotte-and-her-5-disciples",
    title: "Charlotte et Ses 5 Disciples",
    synopsis: "Charlotte, grande maîtresse magicienne, est réincarnée dans le corps d'une enfant après sa mort. Ses anciens disciples — désormais des adultes puissants — la prennent sous leur aile sans savoir qui elle est vraiment. Elle doit les remettre dans le droit chemin avant que le destin du monde ne bascule.",
    reviewHtml: `<p>Charlotte et Ses 5 Disciples joue avec humour sur l'inversion des rôles maître-élève. Charlotte, grande sage dans sa vie précédente, doit maintenant supporter la protection condescendante de ses anciens étudiants qui ne la reconnaissent pas. Les interactions entre les cinq disciples et leur "protégée" secrète sont souvent hilarantes.</p><p>Le manhwa est léger et divertissant, avec de bons moments de reveal progressifs. Parfait pour les amateurs de fantasy comédie avec une héroïne compétente cachée.</p>`,
    pros: ["Concept maître-devenu-enfant original et comique", "Dynamiques de groupe amusantes avec les cinq disciples", "Bonne dose d'humour et de situations décalées"],
    cons: ["Moins de profondeur que d'autres manhwas fantasy", "Antagonistes peu mémorables"],
    tags: "Comédie · Fantasy · Romance",
    category: "manhwa",
    stars: 3,
    shops: [],
    streaming: [],
  },
  {
    slug: "akdangui-eommaga-doeeobeoryeotda",
    title: "I Became the Villain's Mother",
    synopsis: "Une femme ordinaire se réveille dans un roman qu'elle connaît, dans le corps d'une méchante mère condamnée à périr à la fin. Son fils, Erden, est le grand vilain de l'histoire. Mais au lieu de le rejeter, elle décide de l'aimer sincèrement, et peut-être de changer son destin.",
    reviewHtml: `<p>I Became the Villain's Mother est un manhwa doux et émouvant sur la maternité et la rédemption. L'héroïne choisit d'aimer l'enfant qu'elle est censée haïr, et leur relation est le cœur battant de la série. Erden, au départ méfiant et blessé, s'ouvre progressivement à cette affection inattendue — des moments qui touchent sincèrement.</p><p>La romance en arrière-plan avec le père d'Erden est bien gérée sans éclipser le lien mère-fils. Un manhwa feel-good qui réchauffe le cœur.</p>`,
    pros: ["Relation mère-fils touchante et bien développée", "Ambiance chaleureuse et feel-good", "Évolution émotionnelle crédible"],
    cons: ["Peu d'enjeux dramatiques importants", "Rythme très doux, peu d'action"],
    tags: "Drame · Fantasy · Romance · Quotidien",
    category: "manhwa",
    stars: 4,
    shops: [],
    streaming: [],
  },
  {
    slug: "the-tyrants-tranquilizer",
    title: "Le Tranquillisant du Tyran",
    synopsis: "Amelie se retrouve dans le corps d'un personnage mineur d'un roman, chargée de servir Sejanus, l'empereurs tyran. Curieusement, sa seule présence calme les crises de rage imprévisibles du souverain. Elle devient son unique remède, ce qui la protège de la mort mais l'enchaîne à lui.",
    reviewHtml: `<p>Le Tranquillisant du Tyran joue habilement sur la tension entre le despotisme de Sejanus et la douceur apaisante d'Amelie. Le concept du love interest tyran est ici subverti par la dynamique originale de la protagoniste comme seul antidote à ses crises. La romance se construit lentement mais sincèrement.</p><p>Le dessin est délicat, l'atmosphère de cour oppressante mais jamais désespérée. Un bon manhwa romance fantasy pour les amateurs de slow burn avec un twist original.</p>`,
    pros: ["Concept tranquillisant-tyran original", "Slow burn romantique bien dosé", "Atmosphère de cour réussie"],
    cons: ["Rythme très lent dans les premiers chapitres", "Tyran parfois trop peu nuancé"],
    tags: "Fantasy · Romance · Drame",
    category: "manhwa",
    stars: 3,
    shops: [],
    streaming: [],
  },
  {
    slug: "flirting-with-the-villains-dad",
    title: "Séduire le Père du Vilain",
    synopsis: "Perdia se retrouve dans le roman qu'elle lisait, dans le corps de la fille du vilain condamnée à mourir. Pour survivre, elle décide de séduire le père du grand antagoniste, Eclise — un homme puissant mais méconnu du roman — et de changer le cours de l'histoire.",
    reviewHtml: `<p>Séduire le Père du Vilain est une romance fantasy pleine de charme et d'humour. Perdia est une héroïne déterminée qui n'hésite pas à agir de façon non conventionnelle pour s'en sortir. Sa relation avec Eclise évolue de manière touchante, passant d'un calcul de survie à quelque chose de sincère.</p><p>Le manhwa se distingue par son ton léger et ses personnages secondaires attachants. Une lecture divertissante pour les amateurs d'isekai romance avec une héroïne proactive.</p>`,
    pros: ["Héroïne proactive et drôle", "Romance père-figure attendrissante", "Ton léger et divertissant"],
    cons: ["Enjeux principaux peu menaçants", "Manque parfois de profondeur"],
    tags: "Comédie · Fantasy · Romance",
    category: "manhwa",
    stars: 3,
    shops: [],
    streaming: [],
  },
  {
    slug: "i-shall-master-this-family",
    title: "Je Vais Maîtriser Cette Famille",
    synopsis: "Firentia, petite-fille illégitime dans une grande famille noble, assiste impuissante à l'effondrement de son clan dans une première vie. Revenue dans le passé, elle décide d'une seule chose : prendre les rênes de la famille Lombardi et l'amener au sommet, quoi qu'il en coûte.",
    reviewHtml: `<p>Je Vais Maîtriser Cette Famille est un manhwa isekai centré sur l'ambition féminine et la gestion familiale plutôt que sur la romance. Firentia est une protagoniste rare : froide, stratège, et déterminée à tout contrôler. Les arcs de politique noble et de gestion d'entreprise sont bien écrits, avec de vraies tensions.</p><p>Le manga se distingue par son héroïne qui n'attend pas d'être sauvée mais construit activement sa propre puissance. Recommandé pour les fans d'isekai centré sur la stratégie.</p>`,
    pros: ["Héroïne ambitieuse et stratège sortant des clichés", "Arcs de politique et gestion familiale bien écrits", "Progression de puissance satisfaisante"],
    cons: ["Romance en retrait", "Certains antagonistes peu crédibles"],
    tags: "Drame · Fantasy · Politique · Romance",
    category: "manhwa",
    stars: 4,
    shops: [],
    streaming: [],
  },
  {
    slug: "the-villainess-lives-again",
    title: "La Vilaine Vit à Nouveau",
    synopsis: "Artezia, la vilaine de l'histoire, réalise trop tard qu'elle a aidé le mauvais camp. Exécutée, elle se réveille dans le passé et décide de tout recommencer, cette fois en soutenant le vrai héros, Walter, pour éviter la catastrophe. Mais ses motivations restent ambiguës.",
    reviewHtml: `<p>La Vilaine Vit à Nouveau est l'une des meilleures entrées du genre vilaine-réincarnée. Artezia n'est pas une héroïne sympathique au départ : elle reste froide, calculatrice, et ses choix moraux sont souvent gris. Cette complexité la rend fascinante. La relation avec Walter, qu'elle aide tout en le gardant à distance, est une des romances les plus bien écrites du genre.</p><p>Le dessin est élégant, le rythme bien maîtrisé. Un manhwa mature et intelligent qui récompense l'attention portée aux détails.</p>`,
    pros: ["Protagoniste moralement complexe et fascinante", "Romance slow burn avec une vraie tension", "Narration intelligente avec des retournements bien amenés"],
    cons: ["Peut sembler froid au début", "Rythme lent dans les premiers chapitres"],
    tags: "Drame · Fantasy · Romance · Politique",
    category: "manhwa",
    stars: 5,
    shops: [],
    streaming: [],
  },
  {
    slug: "return-of-the-blossoming-blade",
    title: "Le Retour de la Lame Fleurie",
    synopsis: "Cheongmyeong, le disciple le plus fort du légendaire Épéiste du Mont Hua, se réveille 100 ans après sa mort dans le corps d'un disciple médiocre du même clan — désormais en déclin. Il se donne pour mission de restaurer la gloire perdue du Mont Hua.",
    reviewHtml: `<p>Le Retour de la Lame Fleurie est parmi les meilleurs manhwas de murim disponibles. Cheongmyeong est un protagoniste formidable : arrogant, puissant, drôle, et porté par un deuil sincère pour son époque passée. Le décalage entre son génie martial et l'incompétence du clan actuel donne lieu à des moments aussi comiques qu'épiques.</p><p>Les combats sont spectaculaires, les relations entre disciples touchantes, et la progression vers la restauration du clan est satisfaisante chapitre après chapitre. Un must-read du genre.</p>`,
    pros: ["Protagoniste charismatique et attachant", "Combats de murim parmi les plus épiques", "Équilibre parfait entre humour et action"],
    cons: ["Peut sembler slow au tout début", "Certains arcs rivaux un peu répétitifs"],
    tags: "Action · Aventure · Arts Martiaux · Comédie",
    category: "manhwa",
    stars: 5,
    shops: [],
    streaming: [],
  },
  {
    slug: "the-monstrous-dukes-adopted-daughter",
    title: "La Fille Adoptive du Duc Monstrueux",
    synopsis: "Leslie, maltraitée depuis l'enfance, est adoptée par le puissant Duc Salvatore — dit le Monstrueux pour son apparence effrayante. Sous la protection de cet homme redouté de tous, elle découvre pour la première fois la chaleur d'une famille et l'amour d'un père.",
    reviewHtml: `<p>La Fille Adoptive du Duc Monstrueux est un manhwa qui joue sur le contraste entre l'image terrifiante du duc et sa tendresse paternelle. La relation père-adoptif / fille est le centre émotionnel de la série, touchante et bien développée. Le dessin est doux, les expressions des personnages expressives.</p><p>Sans être révolutionnaire, le manhwa offre une atmosphère chaleureuse et des moments feel-good sincères. Idéal pour ceux qui apprécient les romances de cour centrées sur les liens familiaux.</p>`,
    pros: ["Relation père-fille émouvante et originale", "Duc monstrueux / cœur tendre très attachant", "Ambiance chaleureuse et réconfortante"],
    cons: ["Peu de tension dramatique", "Romance secondaire peu développée"],
    tags: "Drame · Fantasy · Romance · Quotidien",
    category: "manhwa",
    stars: 3,
    shops: [],
    streaming: [],
  },
  {
    slug: "kings-maker",
    title: "King's Maker",
    synopsis: "Wolfgang Soldmann, fils illégitime du roi, survit dans les ruelles sombres. Solomon, quatrième prince au sourire de façade, le remarque et fait de lui son allié. Ensemble, ils naviguent les complots de succession d'un royaume où la beauté cache toujours la violence.",
    reviewHtml: `<p>King's Maker est un manhwa BL (Boys Love) politique d'une grande qualité. L'alchimie entre Wolfgang et Solomon est le moteur de la série : l'un brut et imprévisible, l'autre calculateur et masqué. La politique de palais est brutale, les enjeux de pouvoir palpables, et le dessin d'une élégance rare.</p><p>Pour les lecteurs ouverts au genre BL, c'est une lecture incontournable qui traite de trahison, d'ambition et d'amour avec une maturité surprenante.</p>`,
    pros: ["Duo protagoniste fascinant aux personnalités opposées", "Intrigue politique dense et mature", "Direction artistique exceptionnelle"],
    cons: ["Genre BL peut ne pas convenir à tous", "Rythme très soutenu nécessitant une attention constante"],
    tags: "Action · Drame · Fantasy · Politique · BL",
    category: "manhwa",
    stars: 5,
    shops: [],
    streaming: [],
  },
  {
    slug: "my-secretly-hot-husband",
    title: "Mon Mari Secrètement Beau",
    synopsis: "Leticia épouse Cahill par contrat, sans savoir qu'il dissimule sa véritable apparence sous des artifices. Aux yeux du monde, il est laid et ordinaire. Mais la vérité est tout autre, et leur mariage de façade évolue vers quelque chose de bien réel.",
    reviewHtml: `<p>Mon Mari Secrètement Beau joue avec légèreté sur le trope du mari mystérieux qui cache sa beauté. La relation entre Leticia et Cahill évolue en douceur, portée par des malentendus comiques et une complicité grandissante. Le dessin est soigné, les révélations progressives bien amenées.</p><p>Sans être le manhwa romance le plus profond, il offre une lecture plaisante et divertissante pour les amateurs du genre, avec un mari attendrissant et une héroïne spontanée.</p>`,
    pros: ["Concept de déguisement bien exploité", "Romance légère et agréable", "Duo principal attachant"],
    cons: ["Peu d'enjeux dramatiques importants", "Prévisible dans son déroulement"],
    tags: "Comédie · Fantasy · Romance",
    category: "manhwa",
    stars: 3,
    shops: [],
    streaming: [],
  },
  {
    slug: "a-common-story-of-a-ladys-new-life",
    title: "La Vie Ordinaire d'une Dame Réincarnée",
    synopsis: "Une femme ordinaire se réveille dans le corps de la comtesse Reinhardt dans un monde de roman. Sans ambitions héroïques particulières, elle souhaite juste vivre une vie tranquille et agréable. Mais être noble comporte ses propres complications.",
    reviewHtml: `<p>La Vie Ordinaire d'une Dame Réincarnée est un manhwa slice-of-life fantasy qui assume son ton détendu. L'héroïne ne cherche pas à sauver le monde ni à conquérir un empire, juste à profiter de sa nouvelle vie confortablement. Cette approche modeste est rafraîchissante dans un genre souvent dominé par des ambitions démesurées.</p><p>Le dessin est charmant, les moments de vie quotidienne délicieux. Un manhwa sans grande prétention mais sincèrement agréable pour une lecture légère.</p>`,
    pros: ["Ton slice-of-life relaxant dans un cadre fantasy", "Héroïne aux objectifs modestes et attachants", "Douceur visuelle et narrative bienvenue"],
    cons: ["Peu de tension dramatique ou d'enjeux", "Histoire sans réelle progression narrative"],
    tags: "Comédie · Fantasy · Romance · Quotidien",
    category: "manhwa",
    stars: 3,
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
