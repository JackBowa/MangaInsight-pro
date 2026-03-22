import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, "../data/series/series-2.ts");

const PATCHES = [
  {
    slug: "is",
    title: "I\"s",
    titleFr: "I\"s",
    synopsis: "Seto Iori est un lycéen ordinaire secrètement amoureux de sa camarade Iori Yoshizuki. Mais quand Itsuki Akiba, une ancienne amie d'enfance, refait surface dans sa vie, ses sentiments se compliquent. Entre idylle hésitante et nostalgie de l'enfance, I\"s est un shōnen romantique tout en douceur et en émotions.",
    reviewHtml: "<p>Masami Kishimoto livre avec <em>I\"s</em> un manga romantique du lycée d'une tendresse désarmante. Là où d'autres séries misent sur le spectaculaire, celle-ci choisit la subtilité : regards furtifs, malentendus innocents, silences éloquents.</p><p>Le dessin est particulièrement soigné pour l'époque, avec des personnages féminins dessinés avec délicatesse. Le triangle amoureux entre Iori, Itsuki et Seto ne tombe jamais dans le mélo — chaque personnage est traité avec respect et profondeur.</p><p>C'est une lecture nostalgique, parfaite pour les amateurs de romance japonaise classique années 90-2000. Pas révolutionnaire, mais sincère jusqu'au bout.</p>",
    pros: ["Romance douce et sincère", "Dessin délicat et expressif", "Triangle amoureux bien géré"],
    cons: ["Rythme lent pour certains lecteurs", "Héros un peu passif par moments"],
    stars: 3,
    tags: ["Romance", "Shōnen", "Lycée", "Années 90"],
    category: "shonen",
    shops: { manganim: "https://www.manganim.fr/manga/i-s", fnac: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=I%22s+manga", amazon: "https://www.amazon.fr/s?k=I%22s+manga" },
    streaming: {}
  },
  {
    slug: "video-girl-ai",
    title: "Video Girl Ai",
    titleFr: "Video Girl Ai",
    synopsis: "Yōta Moteuchi est un lycéen qui vient de se faire rejeter par la fille qu'il aimait. En rentrant chez lui, il loue une cassette vidéo qui libère Ai, une mystérieuse fille censée consoler les coeurs brisés. Mais le magnétoscope défaillant de Yōta la rend bien plus humaine que prévu, et les deux finissent par nouer une relation inattendue.",
    reviewHtml: "<p><em>Video Girl Ai</em> est l'un des grands classiques de Masakazu Katsura, un auteur qui sait comme personne mêler romantisme et mélancolie. La prémisse fantastique sert de prétexte à une exploration sincère de l'amour non partagé et de la solitude adolescente.</p><p>Ai est un personnage mémorable — à la fois attachante, maladroite et touchante dans sa façon d'apprendre à être humaine. La relation entre elle et Yōta est dessinée avec une sensibilité rare pour un shōnen de l'époque.</p><p>Le dessin de Katsura est magnifique, caractéristique des années 90 avec ses personnages expressifs et ses scènes émotionnelles maîtrisées. Une oeuvre qui marque.</p>",
    pros: ["Personnages profonds et attachants", "Romantisme sincère et touchant", "Dessin élégant de Katsura"],
    cons: ["Fin un peu précipitée", "Certains passages datés"],
    stars: 4,
    tags: ["Romance", "Fantastique", "Shōnen", "Classique"],
    category: "shonen",
    shops: { manganim: "https://www.manganim.fr/manga/video-girl-ai", fnac: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=video+girl+ai+manga", amazon: "https://www.amazon.fr/s?k=video+girl+ai+manga" },
    streaming: {}
  },
  {
    slug: "marmalade-boy",
    title: "Marmalade Boy",
    titleFr: "Marmalade Boy",
    synopsis: "La vie de Miki Koishikawa est bouleversée le jour où ses parents annoncent qu'ils divorcent pour se remettre en couple avec deux autres personnes, et que toute la famille va cohabiter. Elle se retrouve ainsi à partager le foyer avec Yū Matsuura, un garçon séduisant et agaçant à la fois. Entre tension et attirance, une romance complexe s'engage.",
    reviewHtml: "<p><em>Marmalade Boy</em> est un shōjo des années 90 qui a marqué toute une génération. La situation de départ — deux familles qui se mélangent après des divorces croisés — est audacieuse et donne lieu à une romance pleine de rebondissements.</p><p>Yū Matsuura est un héros masculin charismatique peu courant dans les shōjo de l'époque : mystérieux, taquin mais sincèrement épris. La dynamique avec Miki est fluide et entretient un suspense romantique efficace.</p><p>Wataru Yoshizumi maîtrise parfaitement les codes du genre — les quiproquos, les rivaux, les révélations — pour livrer un manga feel-good qui se lit d'une traite. Légèrement daté visuellement, mais toujours charmant.</p>",
    pros: ["Prémisse originale et bien exploitée", "Héros masculin charismatique", "Nombreux rebondissements"],
    cons: ["Certains fils narratifs étirés", "Visuellement daté"],
    stars: 3,
    tags: ["Romance", "Shōjo", "Famille", "Classique 90s"],
    category: "shojo",
    shops: { manganim: "https://www.manganim.fr/manga/marmalade-boy", fnac: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=marmalade+boy+manga", amazon: "https://www.amazon.fr/s?k=marmalade+boy+manga" },
    streaming: {}
  },
  {
    slug: "boys-over-flowers",
    title: "Boys Over Flowers",
    titleFr: "Boys Over Flowers",
    synopsis: "Tsukushi Makino, fille d'une famille modeste, entre dans la prestigieuse académie Eitoku dominée par les F4, quatre garçons riches et arrogants. Quand elle se retrouve dans leur collimateur, elle refuse de plier. Sa ténacité attire l'attention — et les sentiments — de Tsukasa Domyoji, le leader impulsif du groupe.",
    reviewHtml: "<p><em>Boys Over Flowers</em> (Hana Yori Dango) est l'un des shōjo les plus influents de l'histoire du manga. La formule — fille ordinaire vs garçon riche et autoritaire — a été copiée des dizaines de fois, mais l'original garde une énergie incomparable.</p><p>Tsukushi est une héroïne exceptionnelle : courageuse, entêtée, jamais soumise. Tsukasa est un héros contradictoire — détestable puis touchant — dont l'évolution est l'un des arcs de personnage les plus satisfaisants du genre.</p><p>La série est longue (36 volumes) et certains arcs s'étirent, mais l'intensité émotionnelle reste constante. Un classique absolu qui a engendré de nombreuses adaptations drama en Asie.</p>",
    pros: ["Héroïne forte et mémorable", "Histoire d'amour intense et addictive", "Influence culturelle immense"],
    cons: ["36 volumes — certains arcs sont longs", "Comportements du héros parfois problématiques"],
    stars: 4,
    tags: ["Romance", "Shōjo", "Lycée", "Classique"],
    category: "shojo",
    shops: { manganim: "https://www.manganim.fr/manga/boys-over-flowers", fnac: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=hana+yori+dango+manga", amazon: "https://www.amazon.fr/s?k=hana+yori+dango+manga" },
    streaming: {}
  },
  {
    slug: "absolute-boyfriend",
    title: "Absolute Boyfriend",
    titleFr: "Absolute Boyfriend",
    synopsis: "Riiko Izawa, une lycéenne sans succès amoureux, commande accidentellement un « petit ami idéal » sur un site mystérieux. Elle reçoit Night, un androïde humanoïde parfait conçu pour l'aimer. Mais quand un vrai garçon entre dans sa vie, elle se retrouve face à un dilemme impossible.",
    reviewHtml: "<p><em>Absolute Boyfriend</em> de Yuu Watase est un shōjo fantastique court (6 volumes) qui soulève des questions étonnamment profondes sur la nature de l'amour. Ce qui commence comme une comédie romantique légère prend progressivement une tournure mélancolique.</p><p>Night, l'androïde, est un personnage adorable dont la sincérité désarmante touche vraiment le lecteur. Le triangle amoureux est bien construit, et la fin — sans divulgâcher — est bien plus courageuse que ce à quoi on s'attendrait d'un shōjo mainstream.</p><p>Le dessin de Watase est irréprochable, avec des personnages expressifs caractéristiques de son style. Une lecture rapide, émouvante, idéale pour les amateurs du genre.</p>",
    pros: ["Court et bien rythmé (6 volumes)", "Fin courageuse et mémorable", "Personnage d'androïde touchant"],
    cons: ["Prémisse légèrement naïve", "Quelques clichés du genre"],
    stars: 3,
    tags: ["Romance", "Shōjo", "Science-fiction", "Androïde"],
    category: "shojo",
    shops: { manganim: "https://www.manganim.fr/manga/absolute-boyfriend", fnac: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=absolute+boyfriend+manga", amazon: "https://www.amazon.fr/s?k=absolute+boyfriend+manga" },
    streaming: {}
  },
  {
    slug: "skip-beat",
    title: "Skip Beat!",
    titleFr: "Skip Beat !",
    synopsis: "Kyōko Mogami a tout abandonné pour suivre son ami d'enfance Shō dans sa carrière de chanteur à Tōkyō. Quand elle découvre qu'il la méprise et ne l'a utilisée que comme bonne à tout faire, elle jure de se venger en devenant une star plus grande que lui. Son chemin croise alors celui du mystérieux acteur Ren Tsuruga.",
    reviewHtml: "<p><em>Skip Beat!</em> est probablement l'un des meilleurs shōjo des années 2000, et il reste d'une qualité remarquable aujourd'hui après plus de 40 volumes. Son secret : une héroïne dont la motivation principale n'est pas l'amour, mais la vengeance et la réalisation de soi.</p><p>Kyōko est un personnage extraordinaire — intense, comique, dramatique — dont la passion pour la performance finit par dépasser sa soif de revanche. Yoshiki Nakamura excelle dans les scènes de jeu d'acteur où Kyōko se transforme littéralement sous nos yeux.</p><p>La romance avec Ren est lente et frustrante dans le bon sens — chaque avancée est méritée et précieuse. Un shōjo long mais jamais monotone.</p>",
    pros: ["Héroïne hors du commun, animée par la passion", "Scènes de jeu d'acteur inventives", "Romance lente mais intense"],
    cons: ["Plus de 40 volumes — engagement long", "Rythme inégal sur certains arcs"],
    stars: 4,
    tags: ["Romance", "Shōjo", "Show-business", "Comédie"],
    category: "shojo",
    shops: { manganim: "https://www.manganim.fr/manga/skip-beat", fnac: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=skip+beat+manga", amazon: "https://www.amazon.fr/s?k=skip+beat+manga" },
    streaming: {}
  },
  {
    slug: "fruits-basket-another",
    title: "Fruits Basket Another",
    titleFr: "Fruits Basket Another",
    synopsis: "Des années après les événements de Fruits Basket, Sawa Mitoma, une lycéenne effacée qui se croit un fardeau pour les autres, rencontre les enfants des personnages du manga original — dont Mutsuki Sohma. Une nouvelle histoire débute, héritière de l'esprit de la série originale.",
    reviewHtml: "<p><em>Fruits Basket Another</em> est une suite courte (3 volumes) destinée aux fans de la série originale de Natsuki Takaya. Plutôt qu'un simple fan-service, c'est un prolongement thématique sincère : la nouvelle génération hérite des blessures et des guérisons de la précédente.</p><p>Sawa est une héroïne attachante, avec une problématique différente de Tohru mais tout aussi touchante. La nostalgie est bien dosée — les retrouvailles avec les anciens personnages font plaisir sans prendre le dessus sur la nouvelle histoire.</p><p>Visuellement, Takaya retrouve son style tout en l'actualisant légèrement. Pour les fans de Fruits Basket, c'est une lecture incontournable. Pour les nouveaux lecteurs, mieux vaut commencer par l'original.</p>",
    pros: ["Prolongement sincère de l'original", "Nouvelle héroïne attachante", "Nostalgie bien dosée"],
    cons: ["Très court (3 volumes)", "Nécessite de connaître l'original"],
    stars: 3,
    tags: ["Romance", "Shōjo", "Famille", "Suite"],
    category: "shojo",
    shops: { manganim: "https://www.manganim.fr/manga/fruits-basket-another", fnac: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=fruits+basket+another+manga", amazon: "https://www.amazon.fr/s?k=fruits+basket+another+manga" },
    streaming: {}
  },
  {
    slug: "clannad",
    title: "Clannad",
    titleFr: "Clannad",
    synopsis: "Tomoya Okazaki est un lycéen blasé qui traîne sa vie sans but. Sa rencontre avec Nagisa Furukawa, une fille fragile et déterminée à relancer le club de théâtre du lycée, va peu à peu changer sa vision du monde. Adaptation du visual novel culte de Key, Clannad explore la famille, la perte et la reconstruction.",
    reviewHtml: "<p>L'adaptation manga de <em>Clannad</em> par Yuna Takanagi tente de capturer la magie du visual novel de Key — une tâche ambitieuse tant l'oeuvre originale repose sur ses musiques et sa narration interactive. Le résultat est honorable sans être transcendant.</p><p>Le manga condense efficacement l'arc principal de Tomoya et Nagisa, avec les moments émotionnels forts bien rendus. Cependant, la richesse des routes alternatives du jeu est inévitablement perdue.</p><p>Pour les fans du jeu ou de l'anime, c'est une version complémentaire intéressante. Pour les néophytes, l'anime KyoAni reste la meilleure porte d'entrée dans l'univers Clannad.</p>",
    pros: ["Moments émotionnels bien rendus", "Fidèle à l'esprit de l'oeuvre", "Dessin soigné"],
    cons: ["Moins riche que le jeu et l'anime", "Routes alternatives absentes"],
    stars: 3,
    tags: ["Romance", "Drame", "Shōnen", "Slice of life"],
    category: "shonen",
    shops: { manganim: "https://www.manganim.fr/manga/clannad", fnac: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=clannad+manga", amazon: "https://www.amazon.fr/s?k=clannad+manga" },
    streaming: {}
  },
  {
    slug: "air",
    title: "Air",
    titleFr: "Air",
    synopsis: "Yukito Kunisaki voyage de ville en ville en cherchant une fille ailée dans le ciel, selon la promesse faite à sa mère. À la ville côtière de Garudos, il rencontre Misuzu Kamio, une fille solitaire et étrange qui rêve chaque nuit d'un ciel sans fin. Une histoire empreinte de fantastique et de mélancolie.",
    reviewHtml: "<p>L'adaptation manga du visual novel <em>Air</em> de Key (par Yuna Takanagi également) souffre des mêmes limitations que Clannad : la compression d'une oeuvre complexe en format manga réduit inévitablement sa profondeur émotionnelle.</p><p>La relation entre Yukito et Misuzu est touchante, et l'atmosphère estivale et mélancolique est bien restituée. Mais la complexité mythologique de l'oeuvre originale — les vies antérieures, la malédiction — est simplifiée.</p><p>C'est une lecture agréable pour les fans de l'univers Key, mais l'anime reste supérieur pour vivre pleinement l'expérience Air. À réserver aux curieux de l'adaptation.</p>",
    pros: ["Atmosphère estivale et mélancolique", "Relation touchante entre les personnages", "Court et facile à lire"],
    cons: ["Moins impactant que l'anime et le jeu", "Mythologie simplifiée"],
    stars: 3,
    tags: ["Romance", "Fantastique", "Drame", "Key"],
    category: "shonen",
    shops: { manganim: "https://www.manganim.fr/manga/air", fnac: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=air+manga+key", amazon: "https://www.amazon.fr/s?k=air+manga+key" },
    streaming: {}
  },
  {
    slug: "little-busters",
    title: "Little Busters!",
    titleFr: "Little Busters !",
    synopsis: "Riki Naoe a perdu ses parents étant enfant et a été recueilli par le groupe d'amis soudés appelé les « Little Busters ». Des années plus tard, au lycée, ces amis lui proposent de monter une équipe de baseball, et Riki découvre peu à peu les secrets que cachent ses amis les plus proches.",
    reviewHtml: "<p>L'adaptation manga de <em>Little Busters!</em> est l'une des versions papier de l'univers Key les plus réussies. Le groupe des Little Busters — soudé, joyeux, chacun portant ses secrets — est immédiatement attachant.</p><p>Le manga réussit à rendre la dynamique de groupe vivante, ce qui était l'un des points forts du visual novel. Les arcs individuels des personnages féminins sont condensés mais gardent leur impact émotionnel.</p><p>La révélation centrale de l'histoire — qui constitue le coeur du jeu — est traitée avec soin sans être dévalorisée. Pour les fans de Key et des adaptations manga d'oeuvres interactives, c'est une lecture recommandée.</p>",
    pros: ["Dynamique de groupe très réussie", "Personnages attachants et variés", "Fidèle à l'esprit du visual novel"],
    cons: ["Certains arcs condensés", "Impact moindre sans la musique de Key"],
    stars: 3,
    tags: ["Romance", "Drame", "Amitié", "Key"],
    category: "shonen",
    shops: { manganim: "https://www.manganim.fr/manga/little-busters", fnac: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=little+busters+manga", amazon: "https://www.amazon.fr/s?k=little+busters+manga" },
    streaming: {}
  },
  {
    slug: "toradora",
    title: "Toradora!",
    titleFr: "Toradora !",
    synopsis: "Ryūji Takasu a une tête d'intimidateur malgré sa nature douce. Taiga Aisaka est une petite fille explosive surnommée le Tigre de poche. Ces deux lycéens aux antipodes forment une alliance pour s'entraider à séduire leurs amours respectifs — mais la vie en décide autrement.",
    reviewHtml: "<p><em>Toradora!</em> est l'une des light novels les plus appréciées du genre romance lycée des années 2000, et son adaptation manga par Yuyuko Takemiya est une réussite. La formule est simple mais parfaitement exécutée : deux personnages opposés qui apprennent à se connaître et tombent amoureux à leur insu.</p><p>Taiga est un personnage mémorable — difficile, violente, mais profondément blessée et sincère. La progression de la relation entre elle et Ryūji est l'une des mieux écrites du genre. Chaque étape semble naturelle, jamais forcée.</p><p>L'humour est bien dosé, les seconds rôles sont développés, et la fin est satisfaisante. Un classique de la romcom lycée qui tient la route.</p>",
    pros: ["Duo principal mémorable et bien écrit", "Progression romantique naturelle", "Humour et émotion bien équilibrés"],
    cons: ["Certains clichés du genre", "Personnages secondaires inégaux"],
    stars: 4,
    tags: ["Romance", "Comédie", "Lycée", "Light Novel"],
    category: "shonen",
    shops: { manganim: "https://www.manganim.fr/manga/toradora", fnac: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=toradora+manga", amazon: "https://www.amazon.fr/s?k=toradora+manga" },
    streaming: {}
  },
  {
    slug: "golden-time",
    title: "Golden Time",
    titleFr: "Golden Time",
    synopsis: "Banri Tada entre à la faculté de droit de Tōkyō avec un passé qui lui échappe : un accident l'a privé de tous ses souvenirs antérieurs. Il rencontre Kōko Kaga, une camarade aussi belle qu'obsédée par son ami d'enfance, et entre les deux naît une relation complexe entre premier amour et reconstruction identitaire.",
    reviewHtml: "<p><em>Golden Time</em>, de Yuyuko Takemiya (l'auteure de Toradora!), est une romance lycée qui se distingue en se déroulant à l'université. Ce cadre plus adulte autorise des thématiques plus matures : amnésie, deuil du passé, reconstruction de soi.</p><p>Kōko est un personnage fascinant — intense, parfois envahissante, mais d'une honnêteté émotionnelle rare. La mécanique de l'amnésie de Banri est exploitée de façon originale, créant un conflit intérieur intéressant entre son moi passé et présent.</p><p>Le manga est une adaptation fidèle de la light novel, avec quelques simplifications inévitables. Pour les fans de Toradora!, c'est une lecture naturelle — plus mature, plus mélancolique, tout aussi attachante.</p>",
    pros: ["Cadre universitaire original", "Thématiques adultes bien traitées", "Héroïne complexe et mémorable"],
    cons: ["Amnésie parfois surexploitée", "Rythme irrégulier"],
    stars: 3,
    tags: ["Romance", "Université", "Drame", "Light Novel"],
    category: "shonen",
    shops: { manganim: "https://www.manganim.fr/manga/golden-time", fnac: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=golden+time+manga", amazon: "https://www.amazon.fr/s?k=golden+time+manga" },
    streaming: {}
  },
];

// bracket-depth patcher
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
  const coverValue = coverMatch ? `"${coverMatch[1]}"` : '""';
  const replacement = buildReplacement(coverValue);
  return content.slice(0, entryStart) + replacement + content.slice(entryEnd);
}

let content = readFileSync(FILE, "utf-8");
let patched = 0;

for (const p of PATCHES) {
  const result = patchEntry(content, p.slug, (coverValue) => {
    const shopsEntries = Object.entries(p.shops).map(([k, v]) => `      ${k}: "${v}"`).join(",\n");
    const streamingEntries = Object.entries(p.streaming).map(([k, v]) => `      ${k}: "${v}"`).join(",\n");
    return `{
    slug: "${p.slug}",
    title: "${p.title}",
    titleFr: "${p.titleFr}",
    synopsis: "${p.synopsis.replace(/"/g, '\\"')}",
    reviewHtml: "${p.reviewHtml.replace(/"/g, '\\"')}",
    pros: [${p.pros.map(x => `"${x.replace(/"/g, '\\"')}"`).join(", ")}],
    cons: [${p.cons.map(x => `"${x.replace(/"/g, '\\"')}"`).join(", ")}],
    stars: ${p.stars},
    tags: [${p.tags.map(x => `"${x}"`).join(", ")}],
    category: "${p.category}",
    cover: ${coverValue},
    addedAt: "2026-03-22",
    shops: {
${shopsEntries}
    },
    streaming: {
${streamingEntries}
    }
  }`;
  });
  if (!result) { console.log(`⚠️  Non trouvé : ${p.slug}`); continue; }
  content = result;
  patched++;
  console.log(`✅ ${p.title}`);
}

writeFileSync(FILE, content, "utf-8");
console.log(`\n🎉 Patch batch3-lot9 terminé ! ${patched}/${PATCHES.length} séries patchées.`);
