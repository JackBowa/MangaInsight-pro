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

const PATCHES = [
  {
    slug: "reborn-as-a-scholar",
    title: "The Scholar's Reincarnation",
    synopsis: "Un démon légendaire est réincarné en tant que fils d'un académicien dans un monde de cultivation. Dépouillé de sa puissance passée mais conservant ses connaissances de combattant, il doit repartir de zéro dans ce nouveau corps tout en faisant face à sa nouvelle famille et aux intrigues de ce monde.",
    reviewHtml: `<p>The Scholar's Reincarnation combine intelligemment la dynamique famille/protagoniste typique des manhwas de reincarnation avec un système de cultivation bien développé. Le fait que le 'démon' réincarné soit fondamentalement bon et développe des relations familiales authentiques est une nuance agréable dans le genre.</p><p>L'action est bien servie par un dessin dynamique, et la progression du protagoniste est satisfaisante. Un manhwa d'action-fantasy solide pour les fans du genre.</p>`,
    pros: ["Dynamique familiale originale pour un manhwa d'action", "Système de cultivation bien développé", "Protagoniste nuancé malgré son passé de démon"],
    cons: ["Conventions du genre reincarnation respectées sans surprise", "Antagonistes peu mémorables"],
    tags: "Action · Aventure · Fantasy · Manhwa",
    category: "manhwa",
    stars: 3,
    shops: [],
    streaming: [],
  },
  {
    slug: "the-swordmasters-son",
    title: "Swordmaster's Youngest Son",
    synopsis: "Jin Runcandel, fils cadet d'une famille de swordmasters légendaires, est expulsé après avoir été jugé inapte. Mais il meurt et est réincarné dans son passé, avec les connaissances de ses erreurs. Il cherche à devenir le plus grand swordmaster de l'histoire Runcandel.",
    reviewHtml: `<p>Swordmaster's Youngest Son est un manhwa de régression/reincarnation qui brille par la profondeur de son univers. La famille Runcandel, avec ses politiques internes complexes et ses codes d'honneur rigides, est un cadre narratif riche. Jin est un protagoniste stratège dont les décisions s'appuient sur ses erreurs passées.</p><p>La série monte en intensité progressive et les arcs de compétition interne à la famille sont particulièrement bien écrits. Un manhwa au-dessus de la moyenne du genre dans son ambition narrative.</p>`,
    pros: ["Univers de la famille Runcandel riche et complexe", "Politique interne à la famille bien développée", "Protagoniste stratège et convaincant"],
    cons: ["Début lent dans l'établissement de l'univers", "Nombreux personnages à suivre"],
    tags: "Action · Aventure · Fantasy · Manhwa",
    category: "manhwa",
    stars: 4,
    shops: [],
    streaming: [],
  },
  {
    slug: "return-of-the-mad-demon",
    title: "Return of the Mad Demon",
    synopsis: "Lee Zaha, surnommé le Démon Fou, est tué par ses ennemis après avoir passé sa vie à chercher l'Étoile du Ciel. Il revient à sa jeunesse dans la même quête, mais avec toute l'expérience et les rancunes de sa vie passée. Un murim de combat et de vengeance dans le monde du wuxia.",
    reviewHtml: `<p>Return of the Mad Demon est un manhwa wuxia de régression au rythme explosif. Lee Zaha est un protagoniste jouissif, chaotique et imprévisible, dont l'expérience de vieux démon contraste hilarantement avec son corps jeune. Le ton mêle action intense et comédie décalée avec un équilibre parfait.</p><p>Les combats de murim sont spectaculaires, et les retrouvailles avec ses ennemis d'autrefois (qui ne le reconnaissent pas) donnent lieu à des moments savoureux. Un manhwa d'action-comédie wuxia parmi les plus divertissants du genre.</p>`,
    pros: ["Protagoniste chaotique et mémorable", "Mélange action/comédie wuxia parfaitement dosé", "Rythme explosif et combat bien illustrés"],
    cons: ["Peu de profondeur émotionnelle", "Antagonistes secondaires peu développés"],
    tags: "Action · Aventure · Comédie · Manhwa",
    category: "manhwa",
    stars: 4,
    shops: [],
    streaming: [],
  },
  {
    slug: "debut-or-die",
    title: "Debut or Die",
    synopsis: "Un étudiant ordinaire se réveille dans le corps d'un personnage de fiction d'un manhwa d'idol dont il doit réussir les débuts ou mourir. Sans aucun talent particulier, il doit survivre dans le monde brutal de l'industrie du K-pop avec ses connaissances d'outsider.",
    reviewHtml: `<p>Debut or Die est un manhwa d'isekai survival dans le monde de l'industrie musicale coréenne, un cadre original et bien documenté. La tension entre la nécessité de performer et l'inadéquation totale du protagoniste crée une dynamique de survie stressante et engageante.</p><p>Le manhwa aborde avec une précision remarquable les aspects sombres de l'industrie du K-pop (formation, auditions, rivalités) tout en maintenant une énergie narrative positive. Un manhwa qui se démarque par l'originalité de son cadre.</p>`,
    pros: ["Cadre K-pop original et bien documenté", "Tension survival bien maintenue", "Critique intelligente de l'industrie musicale"],
    cons: ["Connaissance du K-pop utile mais pas indispensable", "Certains arcs de compétition longuets"],
    tags: "Drame · Musique · Survival · Manhwa",
    category: "manhwa",
    stars: 4,
    shops: [],
    streaming: [],
  },
  {
    slug: "is-this-hero-for-real",
    title: "Is This Hero for Real?",
    synopsis: "Kang Hansoo, lycéen coréen, est transporté dans un monde fantastique comme héros. Mais une erreur divine fait qu'il ne reçoit aucune des bénédictions héros habituelles. Il cherche à retourner dans son monde tout en naviguant dans ce monde fantastique avec ses seules capacités humaines.",
    reviewHtml: `<p>Is This Hero for Real? est une parodie de l'isekai hero menée avec un humour constant et bien calibré. Kang Hansoo est un protagoniste rafraîchissant de pragmatisme et de refus des clichés du genre. Le monde fantastique est construit avec une inventivité qui permet à la parodie de fonctionner sans devenir répétitive.</p><p>La série s'améliore au fil des chapitres en développant ses personnages au-delà de la simple parodie. Un manhwa d'isekai comique bien mené pour les fans du genre qui veulent de l'humour.</p>`,
    pros: ["Parodie isekai hero bien menée et constante", "Protagonist pragmatique et rafraîchissant", "Humour bien calibré"],
    cons: ["Monde fantastique peu développé au début", "Certains arcs moins convaincants"],
    tags: "Action · Aventure · Comédie · Manhwa",
    category: "manhwa",
    stars: 3,
    shops: [],
    streaming: [],
  },
  {
    slug: "reverse-villain",
    title: "Reverse Villain",
    synopsis: "Jung-woo est le champion du bien dans un monde de cultivation, mais fatigué de renaître encore et encore pour combattre le mal. Cette fois, il décide de rejoindre le camp des méchants pour trouver enfin le repos. Il devient villain tout en gardant son coeur de héros, créant une situation paradoxale.",
    reviewHtml: `<p>Reverse Villain est un manhwa de cultivation qui joue avec intelligence les codes du genre. Jung-woo qui veut être villain mais ne peut s'empêcher d'être juste est un concept à la fois comique et touchant. La série explore avec finesse la fatigue du héros éternel et le désir de repos.</p><p>Les combats de cultivation sont bien illustrés, et la dynamique entre le protagoniste et les véritables méchants est savoureuse. Un manhwa de cultivation qui se distingue par son originalité narrative.</p>`,
    pros: ["Concept héros-qui-veut-être-villain original", "Exploration sincère de la fatigue du héros", "Dynamique comique et touchante à la fois"],
    cons: ["Cultivation system parfois difficile à suivre", "Certaines résolutions trop faciles"],
    tags: "Action · Aventure · Comédie · Manhwa",
    category: "manhwa",
    stars: 4,
    shops: [],
    streaming: [],
  },
  {
    slug: "the-frozen-player-returns",
    title: "Return of the Frozen Player",
    synopsis: "Park Seonjae, premier Awakened de Corée, a été gelé pendant 25 ans dans un donjon de glace. Il se réveille dans un monde qui a considérablement évolué sans lui, où des milliers de hunters d'un niveau bien supérieur existent. Il doit rattraper 25 ans de retard tout en gardant des souvenirs qu'il est le seul à posséder.",
    reviewHtml: `<p>Return of the Frozen Player est un manhwa hunter qui se distingue par son concept de décalage temporel : le protagoniste revient d'une époque révolue et ses connaissances de 'premier Awakened' sont précieuses mais dépassées. La dynamique de rattrapage crée une tension narrative originale dans le genre.</p><p>Les combats sont dynamiques et le dessin de qualité. L'aspect émotionnel du protagoniste qui retrouve un monde changé est bien traité. Un manhwa hunter au-dessus de la moyenne pour ceux qui veulent un peu de substance avec leur action.</p>`,
    pros: ["Concept décalage temporel original pour le genre hunter", "Aspect émotionnel du retard traité avec soin", "Combats dynamiques de qualité"],
    cons: ["Certains clichés du genre hunter inévitables", "Personnages secondaires peu développés"],
    tags: "Action · Aventure · Fantasy · Manhwa",
    category: "manhwa",
    stars: 3,
    shops: [],
    streaming: [],
  },
  {
    slug: "the-novels-extra",
    title: "The Novel's Extra",
    synopsis: "Kim Hajin se retrouve transposé dans un roman qu'il a lui-même écrit, mais en tant que personnage secondaire insignifiant qui aurait dû mourir en début d'histoire. Grâce à sa connaissance de l'intrigue qu'il a créée, il cherche à survivre et à changer les événements en sa faveur.",
    reviewHtml: `<p>The Novel's Extra est un manhwa isekai qui joue intelligemment avec le concept de l'auteur connaissant son propre monde. Kim Hajin peut anticiper les événements et comprendre les motivations de personnages qu'il a lui-même créés, donnant lieu à des situations stratégiques inventives.</p><p>La série développe une réflexion intéressante sur ce que ça signifie 'connaître' un monde vs le vivre. Les personnages secondaires (issus du roman original) sont bien développés. Un manhwa isekai plus intelligent que la moyenne du genre.</p>`,
    pros: ["Concept auteur-dans-son-propre-roman intelligent", "Réflexion originale sur la connaissance du monde fictionnel", "Personnages secondaires bien développés"],
    cons: ["Complexe à suivre avec les nombreuses références au roman fictif", "Certains arcs d'action moins réussis"],
    tags: "Action · Aventure · Fantasy · Manhwa",
    category: "manhwa",
    stars: 4,
    shops: [],
    streaming: [],
  },
  {
    slug: "i-am-the-real-one",
    title: "I Am the Real One",
    synopsis: "Keira Parvis, héritière légitime, est rejetée par son père au profit d'une fausse héritière, puis exécutée. Elle revient dans le passé et décide cette fois de gagner l'amour de son père et de démasquer l'imposteur avant qu'il ne soit trop tard.",
    reviewHtml: `<p>I Am the Real One est un manhwa isekai-villainess qui traite avec sensibilité la thématique de l'abandon parental et du désir de reconnaissance. Keira est un personnage touchant dont la quête d'amour paternel est le moteur émotionnel principal, et le manhwa ne la réduit jamais à un simple désir de vengeance.</p><p>La mise en scène de l'imposteur et des dynamiques de confiance dans la famille Parvis est bien construite. Un manhwa romance-fantaisie qui vaut la peine pour son coeur émotionnel.</p>`,
    pros: ["Thématique de l'abandon parental traitée avec sensibilité", "Héroïne attachante au-delà du simple désir de vengeance", "Dynamiques familiales bien construites"],
    cons: ["Rythme lent dans l'établissement de la nouvelle stratégie", "Romance en arrière-plan peu développée"],
    tags: "Drame · Fantasy · Romance · Manhwa",
    category: "manhwa",
    stars: 4,
    shops: [],
    streaming: [],
  },
  {
    slug: "father-i-dont-want-this-marriage",
    title: "Father, I Don't Want This Marriage",
    synopsis: "Judith, fille d'un duc, est forcée d'un mariage politique par son père. Mais en épousant le prince Blian, elle réalise que ni lui ni elle ne voulaient ce mariage, et ils décident de jouer la comédie ensemble devant la cour tout en développant une vraie relation.",
    reviewHtml: `<p>Father, I Don't Want This Marriage est un manhwa romance de cour qui se distingue par sa dynamique de complot partagé. Les deux protagonistes qui doivent jouer le jeu ensemble tout en se découvrant créent une relation organique et amusante. Le cadre politique est utilisé efficacement.</p><p>L'humour vient naturellement des situations de fausse romance qui deviennent vraie, et les deux personnages sont bien écrits. Un manhwa romance solide et bien rythmé.</p>`,
    pros: ["Dynamique complot partagé originale et amusante", "Relation organique entre les protagonistes", "Rythme bien dosé"],
    cons: ["Cadre politique peu développé", "Certains antagonistes caricaturaux"],
    tags: "Comédie · Drame · Romance · Manhwa",
    category: "manhwa",
    stars: 4,
    shops: [],
    streaming: [],
  },
  {
    slug: "helmut",
    title: "Helmut: The Forsaken Child",
    synopsis: "Helmut a été abandonné dans la forêt des démons à sa naissance. Il y survit seul, développant des capacités hors normes. À 10 ans, il est recueilli par des humains et intègre une académie militaire, mais son passé de forêt des démons le suit.",
    reviewHtml: `<p>Helmut: The Forsaken Child est un manhwa fantasy qui joue avec le thème de l'inadaptation sociale d'un protagoniste élevé hors de la civilisation. Helmut est un personnage brut et fascinant, dont les réactions instinctives et la façon d'appréhender le monde humain donnent lieu à des moments à la fois comiques et poignants.</p><p>L'académie militaire comme cadre de sa socialisation forcée est bien utilisée, et ses progrès sont satisfaisants. Un manhwa fantasy original et bien développé.</p>`,
    pros: ["Protagoniste brut et fascinant issu de la forêt des démons", "Thème de socialisation forcée bien utilisé", "Équilibre comédie/action bien maîtrisé"],
    cons: ["Certains arcs d'académie répétitifs", "Romance secondaire peu développée"],
    tags: "Action · Aventure · Fantasy · Manhwa",
    category: "manhwa",
    stars: 4,
    shops: [],
    streaming: [],
  },
  {
    slug: "lady-to-queen",
    title: "Lady to Queen",
    synopsis: "Ellia est une fille ordinaire du peuple qui, après sa mort injuste, revient dans le passé avec la résolution de vivre pour elle-même. Elle gravit les échelons de la société en utilisant ses connaissances de son ancienne vie pour devenir une figure d'influence dans la noblesse.",
    reviewHtml: `<p>Lady to Queen est un manhwa de régression féminin qui se distingue par l'énergie déterminée de son héroïne. Ellia n'est pas une noble de naissance qui cherche à se venger, mais une roturière qui décide de prendre sa vie en main avec intelligence. Cette perspective plus humble donne un angle frais au genre.</p><p>La progression d'Ellia dans la société est satisfaisante, et ses stratégies s'appuient sur sa connaissance passée de façon crédible. Un manhwa de régression féminin bien mené et attachant.</p>`,
    pros: ["Héroïne roturière original pour le genre isekai-noble", "Progression sociale satisfaisante et crédible", "Énergie déterminée contagieuse"],
    cons: ["Protagoniste masculin moins développé", "Certains antagonistes trop évidents"],
    tags: "Drame · Fantasy · Romance · Manhwa",
    category: "manhwa",
    stars: 3,
    shops: [],
    streaming: [],
  },
  {
    slug: "crimson-karma",
    title: "Crimson Karma",
    synopsis: "Kasia de Ernst, mercenaire légendaire, est tuée et transmise dans le corps d'une noble de faible réputation. Utilisant ses connaissances militaires dans ce nouveau corps, elle doit naviguer la politique de la noblesse tout en gérant ses nouvelles responsabilités et une romance inattendue.",
    reviewHtml: `<p>Crimson Karma est un manhwa isekai-romance qui se démarque par son héroïne mercenaire, bien plus compétente et badass que la moyenne du genre. Kasia apporte une fraîcheur militaire dans le monde des nobles, et ses stratégies brutalement pragmatiques contrastent avec les manœuvres politiques élégantes de la noblesse.</p><p>La romance avec le général ennemi est bien développée, et les batailles utilisant les compétences militaires de Kasia sont un vrai plus. Un manhwa romance avec une héroïne forte et une action plus présente qu'habituellement.</p>`,
    pros: ["Héroïne mercenaire compétente et badass", "Compétences militaires utilisées intelligemment", "Romance bien développée"],
    cons: ["Certains aspects politiques peu développés", "Antagonistes secondaires peu mémorables"],
    tags: "Action · Drame · Romance · Manhwa",
    category: "manhwa",
    stars: 4,
    shops: [],
    streaming: [],
  },
  {
    slug: "when-the-villainess-is-in-love",
    title: "When the Villainess Loves",
    synopsis: "Une fan de manhwa se retrouve réincarnée dans son manhwa favori en tant que villainess destinée à mourir. Elle décide d'utiliser sa connaissance de l'histoire pour éviter sa mort, tout en tombant amoureuse de personnages secondaires qu'elle adorait en tant que lectrice.",
    reviewHtml: `<p>When the Villainess Loves est un manhwa isekai-villainess avec une dynamique méta amusante : la protagoniste était fan de l'oeuvre avant d'y être plongée. Sa relation émotionnelle avec les personnages comme lectrice crée une profondeur supplémentaire à ses interactions.</p><p>Les personnages secondaires, qu'elle connaît et admire, sont bien développés. La romance multiples est gérée avec humour et légèreté. Un manhwa villainess plus original que la moyenne grâce à son aspect méta bien utilisé.</p>`,
    pros: ["Aspect méta lectrice-réincarnée bien utilisé", "Personnages secondaires bien développés", "Humour et légèreté bien dosés"],
    cons: ["Romance multipersonnages parfois confuse", "Enjeux de survie peu intenses"],
    tags: "Comédie · Drame · Fantasy · Romance · Manhwa",
    category: "manhwa",
    stars: 3,
    shops: [],
    streaming: [],
  },
];

// Entrées à ajouter manuellement (remplaçants des 6 supprimées)
const NEW_ENTRIES = [
  {
    slug: "beware-of-the-brothers",
    title: "Beware of the Brothers!",
    cover: "",
    synopsis: "Hari, orpheline recueillie par la famille royale, est entourée de trois princes qui l'adorent mais ne voient pas qu'elle est épuisée d'être leur souffre-douleur affectueux. Quand elle régresse dans le passé, elle décide enfin de se faire respecter et de vivre pour elle-même.",
    reviewHtml: `<p>Beware of the Brothers! est un manhwa de régression féminin charmant qui joue avec la dynamique frères surprotecteurs. L'humour vient des tentatives répétées d'Hari de se libérer de leurs attentions étouffantes, et les trois frères sont bien différenciés et attachants chacun à leur façon.</p><p>La romance se développe doucement en arrière-plan, et le manhwa maintient une légèreté constante. Un manhwa romance feel-good bien mené.</p>`,
    pros: ["Dynamique frères-soeur attachante et humoristique", "Frères bien différenciés et mémorables", "Légèreté et humour constants"],
    cons: ["Peu d'enjeux dramatiques", "Romance très lente"],
    tags: "Comédie · Drame · Fantasy · Romance · Manhwa",
    category: "manhwa",
    stars: 4,
    shops: [],
    streaming: [],
  },
  {
    slug: "ill-be-the-matriarch-in-this-life",
    title: "I'll Be the Matriarch in This Life",
    cover: "",
    synopsis: "Florentia renaît dans sa famille noble qui a été ruinée dans sa vie précédente. Elle décide cette fois d'utiliser toutes ses connaissances de l'histoire pour reconstruire sa famille et devenir la matriarche qui les protégera. Un manhwa de régression business et politique.",
    reviewHtml: `<p>I'll Be the Matriarch in This Life est un manhwa de régression féminin orienté business et politique familiale. Florentia est une héroïne compétente et déterminée, dont les stratégies s'appuient sur ses souvenirs passés pour reconstruire sa famille méticuleusement.</p><p>L'aspect management et reconstruction de domaine est bien développé et donne de la substance aux arcs non-romantiques. La romance avec l'héritier de la maison impériale est bien amenée. Un manhwa solide du genre.</p>`,
    pros: ["Aspect business/politique familiale bien développé", "Héroïne compétente et stratège", "Romance bien amenée"],
    cons: ["Conventions du genre isekai-noble présentes", "Certains arcs politiques longuets"],
    tags: "Drame · Fantasy · Romance · Manhwa",
    category: "manhwa",
    stars: 4,
    shops: [],
    streaming: [],
  },
  {
    slug: "reformation-of-the-deadbeat-noble",
    title: "Reformation of the Deadbeat Noble",
    cover: "",
    synopsis: "Irene Pareira, fils d'un duc, est connu comme le plus grand fainéant de la noblesse. Un rêve mystérieux où il voit sa propre fin minable le pousse à reprendre l'entraînement à l'épée. Un maître légendaire accepte de le former, et la transformation commence.",
    reviewHtml: `<p>Reformation of the Deadbeat Noble est un manhwa de progression épée qui joue avec la transformation radicale d'un personnage considéré comme sans espoir. L'évolution d'Irene d'aristocrate paresseux en swordmaster potentiel est satisfaisante et bien rythmée.</p><p>La relation avec son maître est le coeur du manhwa, développée avec respect et profondeur. Les combats gagnent en intensité progressive. Un manhwa de training arc bien mené, plus axé sur la progression personnelle que sur les systèmes de jeu.</p>`,
    pros: ["Transformation du personnage satisfaisante et crédible", "Relation maître/disciple centrale et bien développée", "Combat d'épée progressif et bien illustré"],
    cons: ["Démarrage lent", "Romance en arrière-plan peu développée"],
    tags: "Action · Aventure · Fantasy · Manhwa",
    category: "manhwa",
    stars: 4,
    shops: [],
    streaming: [],
  },
  {
    slug: "murim-login",
    title: "Murim Login",
    cover: "",
    synopsis: "Jin Tae-Kyung, hunter E-rang dans un monde de portes de donjon, découvre une capsule de réalité virtuelle qui l'envoie dans le monde du murim (arts martiaux traditionnels). Il développe ses compétences dans le murim qui se transposent dans le monde réel, lui donnant des capacités hors norme.",
    reviewHtml: `<p>Murim Login est un manhwa hunter qui combine intelligemment deux genres populaires : le système de donjon moderne et le murim traditionnel. Le fait que les entraînements dans le monde virtuel se transposent dans la réalité donne une logique satisfaisante à la progression du protagoniste.</p><p>Les techniques de combat du murim intégrées dans les combats de hunter modernes donnent des affrontements originaux et dynamiques. Un manhwa qui renouvelle le genre hunter avec une proposition fraîche.</p>`,
    pros: ["Combinaison hunter/murim originale et bien exploitée", "Progression logique et satisfaisante", "Combats qui mêlent arts martiaux et système moderne"],
    cons: ["Deux univers à maintenir en parallèle parfois complexe", "Personnages secondaires peu développés"],
    tags: "Action · Aventure · Fantasy · Manhwa",
    category: "manhwa",
    stars: 4,
    shops: [],
    streaming: [],
  },
  {
    slug: "regressor-instruction-manual",
    title: "Regressor Instruction Manual",
    cover: "",
    synopsis: "Kim Woo-jin n'est pas un regresseur : il n'a aucun talent spécial. Mais il vit à une époque où les regresseurs sont nombreux et il décide d'exploiter leur présence, en manipulant et dirigeant ces puissants protagonistes pour ses propres fins. Un manhwa de meta-gaming sur le concept du regresseur.",
    reviewHtml: `<p>Regressor Instruction Manual est un manhwa intelligent qui prend le contre-pied du genre : au lieu d'être le regresseur puissant, le protagoniste est un homme ordinaire qui exploite les regresseurs. Cette inversion donne lieu à une série de manipulations stratégiques savoureuses.</p><p>Le ton cynique et pragmatique est bien mené, et la compréhension des clichés du genre par le protagoniste est méta et amusante. Un manhwa pour les lecteurs qui connaissent bien les manhwas de régression et veulent en rire intelligemment.</p>`,
    pros: ["Inversion du concept regresseur originale et intelligente", "Ton cynique et stratégique bien mené", "Méta et amusant pour les connaisseurs du genre"],
    cons: ["Protagoniste difficile à aimer au premier abord", "Nécessite une familiarité avec le genre pour apprécier pleinement"],
    tags: "Action · Aventure · Comédie · Manhwa",
    category: "manhwa",
    stars: 4,
    shops: [],
    streaming: [],
  },
  {
    slug: "i-was-reincarnated-as-the-7th-prince",
    title: "I Was Reincarnated as the 7th Prince",
    cover: "",
    synopsis: "Un jeune homme passionné de magie qui ne pouvait pas la pratiquer dans sa vie précédente est réincarné comme Lloyd, le 7e prince d'un royaume. Dans ce corps royal, il peut enfin apprendre la magie sans restriction et se consacre entièrement à cet objectif avec une obsession totale.",
    reviewHtml: `<p>I Was Reincarnated as the 7th Prince est un manga (adaptation de light novel japonais) centré sur la magie comme passion pure. Lloyd est un protagoniste touchant dans son obsession sincère, et le fait qu'il utilise son statut royal uniquement comme prétexte pour étudier la magie librement est délicieux.</p><p>Les rencontres avec les maîtres de magie et ses progrès sont satisfaisants. Une oeuvre légère et enthousiasmante pour les amateurs de magie-fantasy.</p>`,
    pros: ["Passion pour la magie sincère et communicative", "Protagoniste attachant dans son obsession", "Progression magique satisfaisante"],
    cons: ["Légèreté qui peut frustrer ceux qui cherchent plus de profondeur", "Enjeux peu dramatiques"],
    tags: "Action · Aventure · Fantasy · Manga",
    category: "manga",
    stars: 3,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=7th+Prince+Reincarnated", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=7th+Prince+Reincarnated+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=7th+Prince+Reincarnated+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
];

let patched = 0;
for (const p of PATCHES) {
  const cover = getCover(content, p.slug);
  const entry = `{
  slug: "${p.slug}",
  title: "${p.title}",
  category: "${p.category}",
  cover: "${cover}",
  tags: "${p.tags}",
  stars: ${p.stars},
  addedAt: "2026-03-22",
  synopsis: ${JSON.stringify(p.synopsis)},
  pros: ${JSON.stringify(p.pros)},
  cons: ${JSON.stringify(p.cons)},
  reviewHtml: \`${p.reviewHtml}\`,
  shops: ${JSON.stringify(p.shops, null, 2)},
  streaming: ${JSON.stringify(p.streaming, null, 2)},
  live: []
}`;
  const r = findAndReplace(content, p.slug, entry);
  if (!r) { console.log(`⚠️ Non trouvé : ${p.slug}`); continue; }
  content = r; patched++; console.log(`✅ ${p.slug}`);
}

for (const p of NEW_ENTRIES) {
  const entry = `{
  slug: "${p.slug}",
  title: "${p.title}",
  category: "${p.category}",
  cover: "${p.cover}",
  tags: "${p.tags}",
  stars: ${p.stars},
  addedAt: "2026-03-22",
  synopsis: ${JSON.stringify(p.synopsis)},
  pros: ${JSON.stringify(p.pros)},
  cons: ${JSON.stringify(p.cons)},
  reviewHtml: \`${p.reviewHtml}\`,
  shops: ${JSON.stringify(p.shops, null, 2)},
  streaming: ${JSON.stringify(p.streaming, null, 2)},
  live: []
}`;
  content = appendEntry(content, entry);
  patched++; console.log(`✅ ${p.slug} (ajout manuel)`);
}

writeFileSync(FILE, content, "utf-8");
console.log(`\n✅ ${patched} séries patchées/ajoutées (manhwa9)`);
