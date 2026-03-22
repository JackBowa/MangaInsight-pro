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

// ─── 1. The Frost Flower Knight ───────────────────────────────────────────────
const cover1 = getCover(content, "the-frost-flower-knight");
const r1 = findAndReplace(content, "the-frost-flower-knight", `{
  slug: "the-frost-flower-knight",
  title: "Knight of the Frozen Flower",
  category: "manhwa",
  cover: "${cover1}",
  tags: "Action · Fantasy · Romance",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Yulia Von Rosenthal a tout sacrifié pour servir l'Empereur Léonard, mais elle est trahie et condamnée à mort en raison de la malédiction familiale qui défigure son visage. Ressuscitée huit ans avant sa mort, elle décide de changer son destin, briser la malédiction et ne plus jamais se soumettre aveuglément.",
  pros: ["Héroïne forte avec une vraie évolution", "Romance dosée avec intelligence", "Univers médiéval-fantastique soigné"],
  cons: ["Démarrage un peu lent", "Certains arcs secondaires s'étirent"],
  reviewHtml: \`<p>Knight of the Frozen Flower fait partie de ces manhwas féminins qui élèvent le genre. L'héroïne Yulia n'est pas une demoiselle en détresse : c'est une chevalière aguerrie, trahie par celui qu'elle aimait, qui se réveille dans le passé avec une seule obsession — ne plus jamais être vulnérable.</p><p>Le récit alterne habilement entre confrontations politiques, combats chorégraphiés et tension romantique. Le développement de la relation centrale est particulièrement bien mené, évitant les clichés habituels. La malédiction familiale apporte une profondeur supplémentaire à une héroïne déjà convaincante.</p><p>Un manhwa de fantasy romantique parmi les meilleurs du genre, à ne pas rater si vous aimez les protagonistes féminines solides.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=knight+frozen+flower", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=knight+frozen+flower+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r1) { console.log("⚠️ Non trouvé : the-frost-flower-knight"); } else { content = r1; patched++; console.log("✅ the-frost-flower-knight"); }

// ─── 2. Latna Saga: Survival of a Sword King ─────────────────────────────────
const cover2 = getCover(content, "latna-saga-survival-of-a-sword-king");
const r2 = findAndReplace(content, "latna-saga-survival-of-a-sword-king", `{
  slug: "latna-saga-survival-of-a-sword-king",
  title: "Survival Story of a Sword King in a Fantasy World",
  category: "manhwa",
  cover: "${cover2}",
  tags: "Action · Aventure · Fantasy",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Ryu Han-bin est transporté dans un autre monde au sortir de l'armée. Mais son guide de progression était bugué — il reste coincé dans le tutoriel pendant plus de 20 ans, accumulant une puissance de guerrier hors norme. Quand il sort enfin, tout le monde est devenu bien plus fort que prévu. Il devra s'adapter à un monde qu'il ne reconnaît plus.",
  pros: ["Prémisse originale avec le tutoriel infini", "Combats intenses et bien rythmés", "Humour situationnel bien intégré"],
  cons: ["Powerscaling parfois déséquilibré", "Certains personnages secondaires peu développés"],
  reviewHtml: \`<p>Survival Story of a Sword King in a Fantasy World joue avec les codes du isekai de survie avec une idée de départ vraiment originale : un protagoniste bloqué pendant 20 ans dans un tutoriel bogué. Résultat ? Ryu Han-bin sort de cette prison avec des stats de monstre, mais dans un monde qui n'attendait pas.</p><p>Le manhwa excelle dans ses séquences d'action, nerveuses et bien construites, et sait instiller de l'humour sans dénaturer la tension. Le héros, vétéran de l'armée avant son téléportation, a une personnalité concrète qui le distingue des protagonistes lambda du genre.</p><p>Un isekai action de qualité, idéal si vous cherchez quelque chose de plus axé combats et survie que romance ou politique.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=survival+story+sword+king", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=survival+story+sword+king+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r2) { console.log("⚠️ Non trouvé : latna-saga-survival-of-a-sword-king"); } else { content = r2; patched++; console.log("✅ latna-saga-survival-of-a-sword-king"); }

// ─── 3. The Greatest Estate Developer ────────────────────────────────────────
const cover3 = getCover(content, "the-greatest-estate-developer");
const r3 = findAndReplace(content, "the-greatest-estate-developer", `{
  slug: "the-greatest-estate-developer",
  title: "The Greatest Estate Developer",
  category: "manhwa",
  cover: "${cover3}",
  tags: "Aventure · Comédie · Fantasy",
  stars: 5,
  addedAt: "2026-03-22",
  synopsis: "Kim Su-Ho, étudiant en génie civil, se réveille dans le corps de Lloyd Frontera, noble fainéant criblé de dettes dans un roman fantastique qu'il connaît par coeur. Armé de ses connaissances en construction et ingénierie, il va transformer son domaine ruiné en empire économique, avec l'aide d'un hamster géant, d'une chevalière et de mages.",
  pros: ["Concept ultra original (génie civil en monde médiéval)", "Humour constant et bien dosé", "Progression jubilante du héros"],
  cons: ["Très léger sur les enjeux dramatiques", "Certains arcs manquent de tension"],
  reviewHtml: \`<p>The Greatest Estate Developer est une pépite. L'idée de propulser un étudiant en génie civil dans un monde médiéval fantastique est brillante : plutôt que de combattre avec une épée ou une magie surpuissante, le héros construit des routes, des canaux et des bâtiments pour sortir sa famille de la ruine.</p><p>Le manhwa enchaîne les idées avec un entrain communicatif, jonglant entre humour, stratégie économique et action à doses calibrées. Chaque chapitre amène une nouvelle invention ou un nouveau plan qui donne envie de tourner la page immédiatement.</p><p>Parmi les meilleurs manhwas d'isekai de ces dernières années, et certainement l'un des plus inventifs. Un must-read pour les amateurs du genre.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=greatest+estate+developer", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=greatest+estate+developer+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r3) { console.log("⚠️ Non trouvé : the-greatest-estate-developer"); } else { content = r3; patched++; console.log("✅ the-greatest-estate-developer"); }

// ─── 4. The Beloved Little Princess ──────────────────────────────────────────
const cover4 = getCover(content, "the-beloved-little-princess");
const r4 = findAndReplace(content, "the-beloved-little-princess", `{
  slug: "the-beloved-little-princess",
  title: "The Beloved Little Princess",
  category: "manhwa",
  cover: "${cover4}",
  tags: "Fantasy · Romance · Tranche de vie",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Erdel, une petite princesse ignorée de toute la famille impériale, se retrouve soudain choyée par ses proches après un mystérieux incident. Elle doit naviguer entre l'affection inattendue de ses frères et soeurs, les intrigues de la cour, et les secrets qui entourent son existence même.",
  pros: ["Ambiance douce et chaleureuse", "Dynamiques familiales adorables", "Art délicat et expressif"],
  cons: ["Rythme très posé qui ne convient pas à tous", "Peu d'enjeux dramatiques forts"],
  reviewHtml: \`<p>The Beloved Little Princess fait partie de ces manhwas qui misent tout sur la douceur et le feel-good. On suit une petite princesse longtemps négligée qui se retrouve soudainement entourée d'amour, et le récit explore avec tendresse comment elle apprend à accepter cette affection.</p><p>Le manhwa se distingue par ses dynamiques familiales : les interactions entre Erdel et ses frères aînés sont délicieuses, mêlant humour et moments émouvants. L'art soigné, avec ses couleurs pastel et ses expressions expressives, renforce l'atmosphère chaleureuse de l'ensemble.</p><p>Un manhwa idéal pour décompresser, sans conflits violents ni intrigues trop complexes. Un cocon de douceur qui fait du bien.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=beloved+little+princess+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=beloved+little+princess+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r4) { console.log("⚠️ Non trouvé : the-beloved-little-princess"); } else { content = r4; patched++; console.log("✅ the-beloved-little-princess"); }

// ─── 5. Ranker's Return ───────────────────────────────────────────────────────
const cover5 = getCover(content, "rankers-return");
const r5 = findAndReplace(content, "rankers-return", `{
  slug: "rankers-return",
  title: "Ranker's Return",
  category: "manhwa",
  cover: "${cover5}",
  tags: "Action · Fantasy · Jeu",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Minhyuk était autrefois le joueur de rang S le plus célèbre du VRMMO Arena, avant d'être forcé de prendre sa retraite. Des années plus tard, il revient dans le jeu pour recommencer de zéro en solo, avec un seul objectif : devenir le meilleur de tous les temps. Ce qu'il ne sait pas, c'est que ses streams vont captiver des millions de joueurs.",
  pros: ["Progression du héros satisfaisante", "Dynamique de la célébrité bien exploitée", "Combats nerveux et spectaculaires"],
  cons: ["Personnages secondaires peu mémorables", "Certains arcs trop prévisibles"],
  reviewHtml: \`<p>Ranker's Return prend le pari du retour aux sources dans un VRMMO, avec un ancien champion qui repart de zéro. Le concept est bien rodé dans le genre, mais le manhwa l'exécute avec suffisamment de panache pour se démarquer.</p><p>Ce qui fonctionne particulièrement bien, c'est la dimension spectacle : Minhyuk devient une star des streams sans le chercher, et les réactions de la communauté de joueurs apportent une couche de légèreté bienvenue. Les combats sont dynamiques, les stats progressent de manière satisfaisante, et le héros a un charisme naturel.</p><p>Un manhwa gaming-action bien ficelé, parfait pour les amateurs de progression rapide et de combats épiques.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=ranker+return+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=ranker+return+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r5) { console.log("⚠️ Non trouvé : rankers-return"); } else { content = r5; patched++; console.log("✅ rankers-return"); }

// ─── 6. The Grand Mudang Saga (Path of the Shaman) ───────────────────────────
const cover6 = getCover(content, "the-grand-mudang-saga");
const r6 = findAndReplace(content, "the-grand-mudang-saga", `{
  slug: "the-grand-mudang-saga",
  title: "Path of the Shaman",
  category: "manhwa",
  cover: "${cover6}",
  tags: "Action · Arts martiaux · Fantasy",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Dans un monde où les chamanes coréens (mudang) possèdent de véritables pouvoirs spirituels, un jeune homme hérite d'un don ancestral exceptionnel. Il devra maîtriser les arts du chamanisme tout en affrontant des entités surnaturelles et des factions rivales qui convoitent son pouvoir.",
  pros: ["Univers inspiré du chamanisme coréen, très original", "Action bien chorégraphiée", "Lore culturel riche et dépaysant"],
  cons: ["Courbe d'apprentissage pour les concepts culturels", "Rythme parfois inégal"],
  reviewHtml: \`<p>Path of the Shaman (The Grand Mudang Saga) est une série qui sort du lot grâce à son ancrage dans la culture chamanique coréenne. Plutôt que de recycler les codes habituels du fantasy occidental, le manhwa puise dans les traditions spirituelles coréennes — les mudang, les entités, les rituels — pour construire un système de magie unique et dépaysant.</p><p>L'action est présente et bien menée, mais c'est surtout l'univers qui accroche : la manière dont la spiritualité et le combat fusionnent est visuellement impressionnante et narrativement solide. Le héros gagne en profondeur au fil des chapitres.</p><p>Un manhwa à découvrir pour qui cherche quelque chose de différent dans l'action-fantasy, ancré dans une culture peu représentée dans le genre.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=path+shaman+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=path+shaman+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r6) { console.log("⚠️ Non trouvé : the-grand-mudang-saga"); } else { content = r6; patched++; console.log("✅ the-grand-mudang-saga"); }

// ─── 7. The Warrior Returns ───────────────────────────────────────────────────
const cover7 = getCover(content, "the-warrior-returns");
const r7 = findAndReplace(content, "the-warrior-returns", `{
  slug: "the-warrior-returns",
  title: "The Warrior Returns",
  category: "manhwa",
  cover: "${cover7}",
  tags: "Action · Fantasy · Comeback",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Un guerrier légendaire qui avait sauvé un autre monde est de retour sur Terre après des années d'absence. Mais la société a changé, les portails de monstres se sont multipliés, et il doit maintenant reprendre sa place dans un monde de chasseurs et de guildes qu'il ne reconnaît plus. Avec une puissance largement hors norme, il repart de zéro.",
  pros: ["Héros immédiatement imposant et charismatique", "Combats au niveau de puissance spectaculaire", "Bonne intégration retour/monde moderne"],
  cons: ["Tension dramatique limitée vu l'écart de puissance", "Personnages antagonistes sans grande épaisseur"],
  reviewHtml: \`<p>The Warrior Returns capitalise sur un fantasme classique du genre : le héros absolu qui revient dans un monde ordinaire. Mais là où beaucoup de manhwas similaires patinent, celui-ci maintient un rythme soutenu grâce à un protagoniste qui a réellement du charisme et une présence narrative forte.</p><p>Les combats sont un régal visuel — le héros est simplement trop puissant pour la plupart de ses adversaires, et le manhwa l'assume entièrement, en faisant un outil de satisfaction plutôt qu'un problème narratif. L'intrigue principale qui se développe en arrière-plan promet des confrontations plus équilibrées.</p><p>Un manhwa idéal pour les amateurs de power fantasy assumé, avec un protagoniste qu'on aime voir écraser ses ennemis.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=warrior+returns+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=warrior+returns+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r7) { console.log("⚠️ Non trouvé : the-warrior-returns"); } else { content = r7; patched++; console.log("✅ the-warrior-returns"); }

// ─── 8. I Became the Wife of the Monstrous Crown Prince ──────────────────────
const cover8 = getCover(content, "the-little-princess-and-her-monster-prince");
const r8 = findAndReplace(content, "the-little-princess-and-her-monster-prince", `{
  slug: "the-little-princess-and-her-monster-prince",
  title: "I Became the Wife of the Monstrous Crown Prince",
  category: "manhwa",
  cover: "${cover8}",
  tags: "Fantasy · Romance · Isekai",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Après sa mort, Diana se réveille dans le corps d'une petite fille dans un roman fantastique qu'elle connaît — une fillette destinée à mourir jeune. Pour survivre, elle décide d'approcher le prince héritier surnommé « le monstre » par sa propre famille, espérant trouver en lui un protecteur inattendu.",
  pros: ["Dynamique enfant/adulte réincarnée touchante", "Prince mystérieux bien construit", "Art expressif et soigné"],
  cons: ["Progression lente au départ", "Certains antagonistes trop évidents"],
  reviewHtml: \`<p>I Became the Wife of the Monstrous Crown Prince joue avec les codes de l'isekai villainess en proposant une héroïne réincarnée dans le corps d'une enfant, ce qui change radicalement la dynamique habituelle. Le fait que le « monstre » soit en réalité un prince délaissé par sa propre famille crée une connexion entre les deux personnages à la fois logique et émouvante.</p><p>Le manhwa prend son temps pour développer cette relation atypique, et c'est ce qui le distingue : les scènes d'affection sincère entre les deux protagonistes ont une résonance particulière. L'art contribue énormément à l'atmosphère, avec des expressions faciales très travaillées.</p><p>Un excellent choix pour les amateurs d'isekai romantique qui cherchent quelque chose de plus tendre et moins trépidant que la moyenne.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=wife+monstrous+crown+prince+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=wife+monstrous+crown+prince+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r8) { console.log("⚠️ Non trouvé : the-little-princess-and-her-monster-prince"); } else { content = r8; patched++; console.log("✅ the-little-princess-and-her-monster-prince"); }

// ─── 9. Flower and the Beast ──────────────────────────────────────────────────
const cover9 = getCover(content, "flower-and-the-beast");
const r9 = findAndReplace(content, "flower-and-the-beast", `{
  slug: "flower-and-the-beast",
  title: "Flower and the Beast",
  category: "manhwa",
  cover: "${cover9}",
  tags: "Romance · Drame · Contemporain",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Une jeune femme douce et réservée se retrouve liée à un homme à la réputation redoutable, connu pour sa froideur et son caractère imprévisible. Entre leurs deux personnalités opposées naît une relation tumultueuse qui les amènera tous les deux à remettre en question ce qu'ils pensaient vouloir de la vie.",
  pros: ["Chimie palpable entre les deux protagonistes", "Drame bien dosé sans excès mélo", "Art élégant et expressif"],
  cons: ["Certains tropes romantiques classiques", "Résolution parfois trop rapide des conflits"],
  reviewHtml: \`<p>Flower and the Beast est un manhwa romantique contemporain qui tire sa force du contraste entre ses deux protagonistes. D'un côté une héroïne sensible et bienveillante, de l'autre un homme brut et fermé — une dynamique classique mais exécutée avec soin et sincérité.</p><p>Ce qui distingue ce titre, c'est la qualité de l'art, très soigné, et la gestion des émotions des personnages : les moments de tension et de vulnérabilité sonnent juste. Le drame est présent mais jamais écrasant, permettant aux scènes de douceur de prendre toute leur place.</p><p>Un manhwa romantique convaincant, recommendé si vous aimez les romances où les personnages évoluent réellement l'un grâce à l'autre.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=flower+beast+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=flower+beast+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r9) { console.log("⚠️ Non trouvé : flower-and-the-beast"); } else { content = r9; patched++; console.log("✅ flower-and-the-beast"); }

// ─── 10. The Bad Ending of the Otome Game ────────────────────────────────────
const cover10 = getCover(content, "lias-bad-ending");
const r10 = findAndReplace(content, "lias-bad-ending", `{
  slug: "lias-bad-ending",
  title: "The Bad Ending of the Otome Game",
  category: "manhwa",
  cover: "${cover10}",
  tags: "Fantasy · Romance · Isekai",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Lia se réveille dans l'otome game qu'elle adorait jouer, mais dans le corps de la vilaine qui finit systématiquement par mourir dans la bad ending. Sachant exactement comment éviter sa mort et modifier le scénario, elle décide d'agir en coulisses pour changer son destin, sans attirer l'attention des protagonistes.",
  pros: ["Héroïne maligne qui exploite sa connaissance du jeu", "Bonne dose d'humour et d'ironie", "Dynamiques avec les love interests bien écrites"],
  cons: ["Concept vu dans d'autres titres similaires", "Quelques longueurs dans les arcs intermédiaires"],
  reviewHtml: \`<p>The Bad Ending of the Otome Game s'inscrit dans la veine des villainess isekai, mais propose une héroïne plus active que la moyenne : Lia connaît le jeu par coeur et joue avec les événements pour éviter sa mort, dans un jeu de chat et souris avec le destin qui s'avère très plaisant.</p><p>Le manhwa équilibre bien les moments de tension narrative — saura-t-elle éviter la bad ending ? — avec de l'humour et des interactions savoureuses avec les personnages masculins du jeu. Le character design est agréable, et l'héroïne a une réelle personnalité.</p><p>Un très bon manhwa isekai-villainess pour qui apprécie ce type de récit, avec assez d'originalité dans l'exécution pour se démarquer de la masse.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=bad+ending+otome+game+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=bad+ending+otome+game+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r10) { console.log("⚠️ Non trouvé : lias-bad-ending"); } else { content = r10; patched++; console.log("✅ lias-bad-ending"); }

// ─── Entrées manuelles (non trouvées par AniList) ────────────────────────────

// 11. Killing Stalking
const entry11 = `{
  slug: "killing-stalking",
  title: "Killing Stalking",
  category: "manhwa",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx86793-JXFn8YaKuobm.jpg",
  tags: "Thriller · Horreur · Psychologique · Drame",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Yoon Bum, un jeune homme solitaire obsédé par Oh Sangwoo, décide de s'introduire chez lui. Ce qu'il découvre dépasse tout ce qu'il aurait pu imaginer. Les deux hommes se retrouvent alors liés dans une relation de terreur et de dépendance qui va bien au-delà de tout ce qu'on peut qualifier de normal.",
  pros: ["Tension psychologique extrêmement bien exécutée", "Art expressif qui sert l'atmosphère oppressante", "Récit qui pousse à réfléchir sur la manipulation et l'abus"],
  cons: ["Contenu très sombre, clairement pas pour tous", "Représentation de dynamiques toxiques à ne pas romantiser"],
  reviewHtml: \`<p>Killing Stalking est l'un des manhwas les plus discutés et les plus polarisants de la décennie. L'oeuvre de Koogi plonge le lecteur dans une relation entre un stalker et sa cible — une relation qui vire rapidement au cauchemar psychologique et ne ressemble à rien de romantique malgré ce que sa popularité BL pourrait laisser supposer.</p><p>Ce qui fait la force du manhwa, c'est l'exécution artistique : chaque planche transpire la tension, la claustrophobie et l'angoisse. Koogi maîtrise parfaitement la mise en scène du danger et de la manipulation. L'oeuvre est aussi une exploration lucide de la psychologie du traumatisme et de l'emprise.</p><p>Réservé à un lectorat adulte averti, Killing Stalking reste une oeuvre marquante et perturbante — à lire en ayant conscience de ce que l'on s'apprête à découvrir.</p>\`,
  shops: [],
  streaming: [],
  live: []
}`;
content = appendEntry(content, entry11);
patched++; console.log("✅ killing-stalking (manuel)");

// 12. Starting Today I'm a Villainess
const entry12 = `{
  slug: "starting-today-im-a-villainess",
  title: "Starting Today I'm a Villainess",
  category: "manhwa",
  cover: "",
  tags: "Fantasy · Romance · Isekai",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Une jeune femme se réincarne dans un roman d'otome en tant que la villainess — celle que tout le monde est censé détester. Décidée à profiter de sa nouvelle vie plutôt que de subir son destin écrit, elle se met à jouer son rôle avec un enthousiasme communicatif, pour le meilleur et pour le pire.",
  pros: ["Héroïne volontaire et drôle", "Bonne gestion de l'humour et du retournement de situation", "Romances bien menées"],
  cons: ["Concept partagé avec de nombreux titres similaires", "Certains antagonistes manquent de substance"],
  reviewHtml: \`<p>Starting Today I'm a Villainess reprend une formule éprouvée du manhwa isekai — la réincarnation en villainess dans un otome game — mais le fait avec suffisamment d'énergie et d'humour pour rester frais. L'héroïne, qui décide d'embrasser pleinement son rôle de méchante, est attachante et drôle à suivre.</p><p>Le manhwa joue intelligemment avec les attentes du genre, faisant dérailler le scénario original de manière savoureuse. Les interactions amoureuses sont bien gérées, sans tomber dans la romance sirupeuse ou dans la comédie trop forcée.</p><p>Un bon représentant du sous-genre villainess isekai, à recommander à ceux qui apprécient les héroïnes proactives et l'humour situationnel.</p>\`,
  shops: [],
  streaming: [],
  live: []
}`;
content = appendEntry(content, entry12);
patched++; console.log("✅ starting-today-im-a-villainess (manuel)");

// 13. The Villainess Wants to Be a Villainess Again
const entry13 = `{
  slug: "the-villainess-wants-to-be-a-villainess-again",
  title: "The Villainess Wants to Be a Villainess Again",
  category: "manhwa",
  cover: "",
  tags: "Fantasy · Romance · Comédie",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Ida Noella, réputée pour être la pire villainess du royaume, se retrouve confrontée à sa propre réputation quand l'homme qu'elle aime commence à se rapprocher d'elle sincèrement. Tiraillée entre l'image qu'elle s'est construite et ses vrais sentiments, elle tente de rester dans son rôle tout en cédant peu à peu.",
  pros: ["Héroïne au caractère bien trempé et attachant", "Comédie romantique efficace", "Romance qui prend son temps de manière satisfaisante"],
  cons: ["Quelques longueurs dans l'arc principal", "Certains retournements prévisibles"],
  reviewHtml: \`<p>The Villainess Wants to Be a Villainess Again se distingue dans la vague des manhwas villainess par son humour particulier : l'héroïne veut vraiment rester une villainess, mais les circonstances et ses propres sentiments conspirent contre elle. Cette tension comique entre l'image voulue et la réalité fonctionne remarquablement bien.</p><p>Le manhwa est une comédie romantique bien menée, avec une héroïne qui a du caractère et des dialogues qui font mouche. La romance se développe avec naturel, évitant les moments trop forcés habituels au genre.</p><p>Un manhwa villainess au-dessus de la moyenne, particulièrement recommendé pour sa légèreté et son héroïne mémorable.</p>\`,
  shops: [],
  streaming: [],
  live: []
}`;
content = appendEntry(content, entry13);
patched++; console.log("✅ the-villainess-wants-to-be-a-villainess-again (manuel)");

// 14. Honey Trap Darling
const entry14 = `{
  slug: "honey-trap-darling",
  title: "Honey Trap Darling",
  category: "manhwa",
  cover: "",
  tags: "Romance · Comédie · Contemporain",
  stars: 3,
  addedAt: "2026-03-22",
  synopsis: "Une jeune femme accepte de jouer le rôle de petite amie d'un homme populaire pour l'aider à se débarrasser de prétendantes encombrantes. Ce qui devait être une simple relation de façade commence rapidement à développer des sentiments bien réels de part et d'autre.",
  pros: ["Comédie romantique légère et agréable", "Bon timing comique", "Relation fausse-vraie exécutée avec charme"],
  cons: ["Peu de surprises dans le déroulé", "Personnages secondaires anecdotiques"],
  reviewHtml: \`<p>Honey Trap Darling s'inscrit dans la tradition de la romantic comedy à relation contractuelle — un terrain très balisé dans le manhwa. Le manhwa ne cherche pas à révolutionner la formule, mais l'exécute avec sincérité et légèreté.</p><p>Les deux protagonistes ont une bonne alchimie, et les situations comiques générées par leur accord secret sont suffisamment bien menées pour maintenir l'intérêt. C'est le genre de lecture plaisante et sans prise de tête, idéale pour un moment de détente.</p><p>Un manhwa romantique convenu mais efficace, recommandé pour les amateurs de romance légère et de comédie de situation.</p>\`,
  shops: [],
  streaming: [],
  live: []
}`;
content = appendEntry(content, entry14);
patched++; console.log("✅ honey-trap-darling (manuel)");

writeFileSync(FILE, content, "utf-8");
console.log(`\n✅ ${patched} entrées patchées/ajoutées`);
