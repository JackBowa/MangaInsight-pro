import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, "../data/series/series-2.ts");

const PATCHES = [
  {
    slug: "hellbound",
    title: "Hellbound",
    synopsis: "A Séoul, des créatures surnaturelles apparaissent pour condamner des individus à l'enfer. Une nouvelle secte religieuse exploite ces phénomènes pour asseoir son emprise sur la société. Face à eux, un détective tente de comprendre la vérité derrière ces condamnations mystérieuses.",
    reviewHtml: `<p>Hellbound est un manhwa de Yeon Sang-ho, le créateur de <em>Train to Busan</em>, et ça se ressent : l'ambiance est oppressante, le propos social acéré. La série interroge comment la peur du divin peut être instrumentalisée pour contrôler les foules. Le thriller religieux fonctionne à plein régime sur ses premiers arcs, même si le rythme se relâche en seconde moitié.</p><p>Une œuvre ambitieuse, sombre et originale dans le paysage manhwa.</p>`,
    pros: ["Ambiance glauque et oppressante réussie", "Critique sociale percutante", "Créatures terrifiantes et design marquant"],
    cons: ["Rythme inégal entre les arcs", "Personnages secondaires peu développés"],
    tags: "Horreur · Surnaturel · Thriller · Drame",
    category: "manhwa",
    stars: 4,
    shops: [],
    streaming: [{ name: "Netflix", url: "https://www.netflix.com/title/81504847", logo: "/logos/netflix.svg" }],
  },
  {
    slug: "dice",
    title: "DICE : Le Cube du Destin",
    synopsis: "Dongtae est au bas de l'échelle sociale : notes catastrophiques, sans amis, invisible de tous. Tout change quand Taebin, un élève populaire mystérieux, lui propose des dés magiques capables de modifier la réalité. Mais chaque face cachée un prix à payer.",
    reviewHtml: `<p>DICE est un webtoon addictif qui explore les dérives du pouvoir absolu. Le concept des dés modifiant les stats des personnages rappelle les RPG tout en posant de vraies questions : si tu pouvais tout changer, le ferais-tu ? La progression de Dongtae est bien gérée, les retournements de situation nombreux, et le dessin dynamique.</p><p>Un shonen fantastique solide avec une dimension psychologique bienvenue, même si l'arc final étire un peu trop le propos.</p>`,
    pros: ["Concept RPG/réalité original et accrocheur", "Montée en puissance du protagoniste satisfaisante", "Action bien rythmée"],
    cons: ["Arc final qui s'étire en longueur", "Certains personnages restent superficiels"],
    tags: "Action · Fantasy · Psychologie · Surnaturel",
    category: "manhwa",
    stars: 3,
    shops: [],
    streaming: [],
  },
  {
    slug: "your-throne",
    title: "Your Throne",
    synopsis: "Dans l'empire Vasilios, Lady Medea Solon perd sa place aux côtés du prince héritier Eros. Déterminée à reprendre ce qui lui appartient, elle se retrouve liée à Psyche Trovi, une rivale en apparence innocente, dans un échange de corps aussi inattendu que périlleux.",
    reviewHtml: `<p>Your Throne est un manhwa de politique et de vengeance au féminin, sublimé par un dessin d'une finesse exceptionnelle. L'échange de corps entre Medea et Psyche offre une structure narrative brillante : chacune doit vivre la vie de l'autre tout en complotant. Les deux protagonistes sont complexes, ni totalement héroïne ni totalement vilaine.</p><p>Le rythme est tendu, les trahisons s'enchaînent, et les illustrations des costumes et décors sont parmi les plus belles du webtoon. Un incontournable du genre politique-romance.</p>`,
    pros: ["Deux protagonistes féminines nuancées et fascinantes", "Intrigues politiques et trahisons bien ficelées", "Direction artistique somptueuse"],
    cons: ["Romance en retrait par rapport aux enjeux politiques", "Quelques longueurs dans les arcs intermédiaires"],
    tags: "Drame · Fantasy · Politique · Romance · Thriller",
    category: "manhwa",
    stars: 5,
    shops: [],
    streaming: [],
  },
  {
    slug: "the-villainess-turns-the-hourglass",
    title: "La Vilaine Retourne le Sablier",
    synopsis: "Aria, cruelle belle-fille manipulée par sa demi-sœur Mielle, est exécutée. Avant de mourir, elle comprend qu'elle a été instrumentalisée depuis le début. Elle se réveille dans le passé avec un sablier magique et une seule obsession : se venger de Mielle à son propre jeu.",
    reviewHtml: `<p>La Vilaine Retourne le Sablier renverse les codes du genre isekai-vilaine avec brio. Aria n'est pas une héroïne qui cherche la rédemption, elle embrasse pleinement son rôle de méchante stratège pour détruire celle qui l'a manipulée. La dynamique entre les deux sœurs est fascinante, et le sablier offre une mécanique narrative ingénieuse.</p><p>Le dessin est élégant, les costumes magnifiques. Un manhwa romanesque et tendu qui renouvelle intelligemment le trope de la vilaine réincarnée.</p>`,
    pros: ["Antagoniste principale assumée et fascinante", "Retournements de situation bien amenés", "Illustrations soignées et costumes époustouflants"],
    cons: ["Certains personnages secondaires monodimensionnels", "Quelques longueurs dans la partie finale"],
    tags: "Drame · Fantasy · Romance · Stratégie",
    category: "manhwa",
    stars: 4,
    shops: [],
    streaming: [],
  },
  {
    slug: "lady-baby",
    title: "Lady Baby",
    synopsis: "Calliope regarde sa famille s'éteindre les uns après les autres, victime d'un complot qu'elle ne comprend pas. Une mystérieuse femme lui offre une seconde chance, mais elle se réveille nourrisson dans les bras de sa mère. Désormais adulte prisonnière d'un corps de bébé, elle doit déjouer le destin de sa famille.",
    reviewHtml: `<p>Lady Baby joue habilement sur le décalage comique entre l'âme adulte de Calliope et son corps de bébé, tout en déroulant une intrigue de cour sombre et complexe. La protagoniste doit naviguer entre les sourires de façade et les machinations politiques dès la naissance, ce qui donne des situations à la fois drôles et dramatiques.</p><p>Le dessin est expressif et les arcs mystery bien construits. Idéal pour les fans de romance fantasy avec une héroïne qui sait ce qu'elle veut.</p>`,
    pros: ["Concept bébé-adulte à la fois drôle et touchant", "Intrigue de cour solide et bien menée", "Héroïne déterminée et attachante"],
    cons: ["Mise en place lente au début", "Rythme parfois irrégulier"],
    tags: "Comédie · Drame · Fantasy · Romance · Mystère",
    category: "manhwa",
    stars: 3,
    shops: [],
    streaming: [],
  },
  {
    slug: "how-to-win-my-husband-over",
    title: "Comment Conquérir Mon Mari",
    synopsis: "Réveillée dans le corps de Rudbeckia de Borgia, une vilaine mineure d'un roman historique condamnée à être tuée par son propre mari, Iske van Omerta, l'héroïne n'a qu'un plan : charmer l'homme qui doit la tuer avant que le destin ne s'accomplisse.",
    reviewHtml: `<p>Comment Conquérir Mon Mari est un manhwa romance fantasy qui se distingue par son héroïne lucide et débrouillarde. Coincée dans un roman qu'elle connaît par cœur, elle utilise ses connaissances du futur pour transformer une relation hostile en quelque chose de plus tendre. La tension romantique est bien dosée, les personnages secondaires de la famille Borgia apportent du relief.</p><p>Un isekai-romance de qualité, moins prévisible qu'il n'y paraît, avec un équilibre réussi entre suspense et douceur.</p>`,
    pros: ["Héroïne intelligente et proactive", "Tension romantique bien dosée", "Twist narratif sur la connaissance du roman"],
    cons: ["Début un peu lent", "Antagonistes parfois caricaturaux"],
    tags: "Fantasy · Romance · Drame",
    category: "manhwa",
    stars: 4,
    shops: [],
    streaming: [],
  },
  {
    slug: "teenage-mercenary",
    title: "Mercenary Enrollment",
    synopsis: "À huit ans, Yu Ijin perd ses parents dans un crash et survit seul dans une zone de guerre pendant dix ans comme mercenaire. De retour en Corée pour retrouver sa famille, il découvre que le lycée est un terrain de combat d'un autre genre, mais ses réflexes de survie restent intacts.",
    reviewHtml: `<p>Mercenary Enrollment est un manhwa d'action qui excelle dans un concept simple mais efficace : un ex-mercenaire aguerri confronté au quotidien banal du lycée. Les scènes de combat sont percutantes et crédibles, la dynamique familiale touchante. Ijin n'est pas un surhomme invincible : ses traumatismes de guerre et sa réadaptation à la vie normale donnent de la profondeur à un personnage en apparence tout-puissant.</p><p>Un shonen de qualité, accessible et bien rythmé, qui sait mélanger action efficace et moments humains.</p>`,
    pros: ["Concept original et bien exploité", "Combats percutants et réalistes", "Dimension émotionnelle liée à la famille réussie"],
    cons: ["Antagonistes parfois prévisibles", "Certains arcs un peu répétitifs"],
    tags: "Action · Drame · Martial Arts",
    category: "manhwa",
    stars: 4,
    shops: [],
    streaming: [],
  },
  {
    slug: "positively-yours",
    title: "Positively Yours",
    synopsis: "Hui-Won, déprimée après que son crush se met en couple avec son autre meilleure amie, cède à une nuit de folie avec un inconnu séduisant. Résultat : une grossesse inattendue. Le destin les remet face à face, et Du-Jun, homme rigide et méticuleux, décide de faire ce qu'il faut.",
    reviewHtml: `<p>Positively Yours est une romance coréenne mature qui traite d'une grossesse surprise sans tomber dans le mélodrame excessif. Le duo principal est savoureux : la spontanée Hui-Won et le rigide Du-Jun s'apprivoisent progressivement, avec des dialogues drôles et une évolution sincère. La série gère bien les enjeux pratiques et émotionnels sans esquiver les sujets difficiles.</p><p>Une romance adulte et réaliste, parfaite pour ceux qui en ont assez des tropiques lycéens. Touchant et souvent hilarant.</p>`,
    pros: ["Romance adulte et réaliste", "Duo protagoniste bien contrasté", "Humour et émotion bien équilibrés"],
    cons: ["Quelques clichés de rom-com inévitables", "Secondaires peu développés"],
    tags: "Comédie · Drame · Romance",
    category: "manhwa",
    stars: 4,
    shops: [],
    streaming: [],
  },
  {
    slug: "the-reason-why-raeliana-ended-up-at-the-dukes-mansion",
    title: "Pourquoi Raeliana Finit dans le Manoir du Duc",
    synopsis: "Eunha Park se réveille dans le corps de Raeliana McMillan, personnage d'un roman voué à mourir pour déclencher l'intrigue principale. Pour survivre, elle propose au duc Noah Wynknight, un personnage clé, un deal : jouer les fiancés pour éloigner les prétendants dangereux.",
    reviewHtml: `<p>Pourquoi Raeliana Finit dans le Manoir du Duc est l'un des manhwas isekai-romance les plus aboutis du genre. L'héroïne est intelligente et rafraîchissante, le duc mystérieux mais jamais unidimensionnel, et leur relation évolue de manière crédible depuis un arrangement pragmatique vers quelque chose de sincère. Le dessin est élégant, les costumes d'époque soignés.</p><p>Un incontournable du romanesque coréen qui a su inspirer une adaptation animée de qualité.</p>`,
    pros: ["Héroïne proactive et perspicace", "Alchimie romantic tension très bien gérée", "Adaptation animée fidèle et réussie"],
    cons: ["Résolution un peu rapide sur les derniers arcs", "Antagonistes pas très menaçants"],
    tags: "Fantasy · Romance · Comédie · Mystère",
    category: "manhwa",
    stars: 4,
    shops: [],
    streaming: [{ name: "Crunchyroll", url: "https://www.crunchyroll.com/series/GXJHM39MQ/why-raeliana-ended-up-at-the-dukes-mansion", logo: "/logos/crunchyroll.svg" }],
  },
  {
    slug: "how-to-use-a-returner",
    title: "Regressor Instruction Manual",
    synopsis: "Giyoung, le joueur aux stats les plus basses du jeu de survie, découvre qu'un autre joueur, Hyunsung, est un regresseur revenu du futur. Sa compétence unique : lire le statut des autres joueurs. Plan parfait : coller à ce retourneur et survivre grâce à lui.",
    reviewHtml: `<p>Regressor Instruction Manual joue intelligemment sur le trope du regresseur en le voyant depuis l'angle d'un personnage faible qui choisit de s'accrocher à lui. Giyoung n'est pas un héros traditionnel : il est opportuniste, calculateur, et assume totalement sa stratégie de survie parasite. Cette perspective originale donne un manhwa d'action plus malin que la moyenne.</p><p>Les combats sont bien illustrés, le système de jeu cohérent, et la dynamique entre les deux protagonistes franchement amusante.</p>`,
    pros: ["Angle narratif original depuis le personnage faible", "Système de jeu cohérent et bien exploité", "Dynamique duo protagonistes rafraîchissante"],
    cons: ["Worldbuilding parfois confus", "Quelques clichés du genre hunter"],
    tags: "Action · Fantasy · Jeu · Aventure",
    category: "manhwa",
    stars: 4,
    shops: [],
    streaming: [],
  },
  {
    slug: "my-gently-raised-beast",
    title: "My Gently Raised Beast",
    synopsis: "Blondina découvre qu'elle est princesse de l'empire Ates, mais sa famille d'adoption la reçoit avec froideur. Sa solitude prend fin quand elle rencontre Amon, une créature féline mystérieuse aux origines divines, dont l'affection sincère va changer le cours de sa vie.",
    reviewHtml: `<p>My Gently Raised Beast séduit par sa douceur et son atmosphère de conte de fées. La relation entre Blondina et Amon est le cœur du manhwa : tendre, protectrice, avec une tension romantique subtile. Le dessin est particulièrement soigné, les expressions des personnages expressives, et l'univers fantastique agréable à explorer.</p><p>Moins axé sur l'action politique que d'autres manhwas de cour, il privilégie l'émotion et la romance, ce qui en fait un choix idéal pour une lecture détente.</p>`,
    pros: ["Relation protagoniste/créature touchante et originale", "Direction artistique douce et élégante", "Ambiance conte de fées réussie"],
    cons: ["Intrigues politiques secondaires peu développées", "Rythme parfois trop tranquille"],
    tags: "Fantasy · Romance · Drame",
    category: "manhwa",
    stars: 3,
    shops: [],
    streaming: [],
  },
  {
    slug: "tyrant-of-the-tower-defense-game",
    title: "I Became the Tyrant of a Defense Game",
    synopsis: "Giyoung est précipité dans un jeu de tower defense de survie sans savoir comment y jouer. Il découvre rapidement qu'il possède un pouvoir unique : commander des forces monstrueuses. Pour survivre et protéger ses alliés, il devra embrasser son rôle de tyran redouté.",
    reviewHtml: `<p>I Became the Tyrant of a Defense Game renouvelle le genre isekai-jeu avec un concept bien trouvé : le protagoniste joue du mauvais côté, commandant des monstres comme un seigneur de guerre. La mécanique de tower defense est bien intégrée dans le récit, les stratégies variées, et l'escalade de puissance satisfaisante.</p><p>Le manhwa se distingue par son ton plus sombre et ses décisions moralement grises. Un bon divertissement pour les fans d'action tactique.</p>`,
    pros: ["Concept tower defense original bien exploité", "Protagonist en position de tyran, moral ambiguë", "Progression de puissance bien dosée"],
    cons: ["Personnages secondaires peu mémorables", "Certains arcs répétitifs"],
    tags: "Action · Fantasy · Jeu · Stratégie",
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

function buildShops(shops) {
  if (!shops || shops.length === 0) return "[]";
  const items = shops.map(s => `{ name: "${s.name}", url: "${s.url}", logo: "${s.logo}" }`).join(", ");
  return `[${items}]`;
}

function buildStreaming(streaming) {
  if (!streaming || streaming.length === 0) return "[]";
  const items = streaming.map(s => `{ name: "${s.name}", url: "${s.url}", logo: "${s.logo}" }`).join(", ");
  return `[${items}]`;
}

let content = readFileSync(FILE, "utf-8");

// Extract existing cover URLs
function getCover(content, slug) {
  const marker = `slug: "${slug}"`;
  const idx = content.indexOf(marker);
  if (idx === -1) return "";
  const block = content.slice(idx, idx + 800);
  const m = block.match(/cover:\s*"([^"]+)"/);
  return m ? m[1] : "";
}

let patched = 0;
for (const p of PATCHES) {
  const cover = getCover(content, p.slug);
  const synopsisEscaped = p.synopsis.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
  const reviewEscaped = p.reviewHtml.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
  const prosJson = JSON.stringify(p.pros);
  const consJson = JSON.stringify(p.cons);

  const replacement = `{
  slug: "${p.slug}",
  title: "${p.title.replace(/"/g, '\\"')}",
  synopsis: "${p.synopsis.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}",
  reviewHtml: \`${reviewEscaped}\`,
  pros: ${prosJson},
  cons: ${consJson},
  tags: "${p.tags}",
  category: "${p.category}",
  stars: ${p.stars},
  cover: "${cover}",
  addedAt: "2026-03-22",
  shops: ${buildShops(p.shops)},
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
