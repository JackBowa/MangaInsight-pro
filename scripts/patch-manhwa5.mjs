import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, "../data/series/series-2.ts");

const PATCHES = [
  {
    slug: "the-tutorial-is-too-tough",
    title: "The Tutorial Is Too Hard",
    synopsis: "Lee Ho-jae est téléporté dans un tutoriel de jeu avec 1000 niveaux de difficulté, du plus facile au plus meurtrier. Il choisit délibérément le niveau de difficulté 'Hell' par curiosité — et se retrouve seul dans le tutoriel le plus difficile qui soit. Il va devoir survivre, progresser et découvrir les secrets de ce jeu.",
    reviewHtml: "<p><em>The Tutorial Is Too Hard</em> est un manhwa gate/game qui tire toute sa substance de son concept simple : un homme qui choisit la difficulté maximale par curiosité et persévère malgré tout. Cette obstination du héros face à des défis apparemment impossibles est addictive.</p><p>Lee Ho-jae est un protagoniste fascinant — pas le plus intelligent ni le plus fort, mais d'une ténacité absolue et d'un humour noir face à l'absurdité de sa situation. L'exploration du tutoriel révèle progressivement un lore riche.</p><p>Le manhwa est terminé avec une conclusion satisfaisante. Un des meilleurs manhwas de progression seul-contre-tous.</p>",
    pros: ["Concept de difficulté maximale choisie — très original", "Héros tenace et humour noir attachant", "Lore progressivement révélé"],
    cons: ["Certains arcs solitaires peuvent être lents", "Isolation prolongée du héros"],
    stars: 5,
    tags: "Action · Fantasy · Manhwa · Game · Solo",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=tutorial+too+hard+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=tutorial+too+hard+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "the-art-of-reincarnation",
    title: "Standard of Reincarnation",
    synopsis: "Dalian, le plus grand guerrier de son époque, est réincarné dans le corps d'un jeune homme ordinaire — le fils d'un clan dégénéré considéré comme honteux. Avec les souvenirs de sa vie passée et la volonté de surpasser ses propres limites, il commence à reconstruire sa légende.",
    reviewHtml: "<p><em>Standard of Reincarnation</em> est un manhwa murim/regression solide qui se distingue par le fait que le héros cherche à surpasser sa vie passée plutôt qu'à simplement la reproduire. Cette ambition donne une direction narrative intéressante.</p><p>Dalian est un personnage charismatique dont la sagesse ancienne contraste avec les challenges d'une nouvelle vie. Le système d'arts martiaux est bien construit et les combats bien choreographiés.</p><p>Un manhwa d'action murim bien exécuté, avec plus de profondeur que la moyenne du genre regression.</p>",
    pros: ["Ambition de dépasser sa vie passée — angle intéressant", "Arts martiaux bien construits", "Héros charismatique"],
    cons: ["Formule murim familière", "Certains arcs prévisibles"],
    stars: 4,
    tags: "Action · Arts martiaux · Manhwa · Murim · Regression",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=standard+reincarnation+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=standard+reincarnation+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "the-live",
    title: "The Live",
    synopsis: "Yun Jae est une homme ordinaire dont la femme et l'enfant meurent dans un accident. Un mystérieux message lui parvient depuis le futur : son fils, survivant dans un monde dystopique, lui envoie un système de jeu pour lui permettre de changer ce futur. Il entre dans le jeu avec pour seule motivation de sauver sa famille.",
    reviewHtml: "<p><em>The Live</em> est un manhwa gate/game avec une dimension émotionnelle plus forte que la moyenne. La motivation du héros — sauver sa femme et son fils — est simple mais ancrée dans une perte réelle, ce qui donne une urgence émotionnelle à chaque mission.</p><p>Le système de jeu envoyé par son fils du futur crée une dynamique narrative originale : les choix du héros dans le présent influencent le futur de son fils de façon visible. Cette connexion père/fils est le coeur emotionnel de la série.</p><p>Bien rythmé, avec des combats efficaces et une ligne narrative émotionnelle maintenue. Un manhwa de gate plus humain que la moyenne.</p>",
    pros: ["Motivation émotionnelle forte — sauver sa famille", "Connexion père/fils originale", "Plus humain que la moyenne du genre"],
    cons: ["Certains arcs game très techniques", "Résolution du futur parfois obscure"],
    stars: 4,
    tags: "Action · Fantasy · Manhwa · Game · Famille",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=the+live+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=the+live+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "dark-moon-the-blood-altar",
    title: "Dark Moon: The Blood Altar",
    synopsis: "Dans un monde où les vampires et les humains coexistent sous tension, Soo-ah, une jeune femme ordinaire, est entraînée dans un conflit entre clans vampiriques. Liée à un vampire puissant, elle découvre que son passé et ses origines la placent au coeur d'une prophétie ancienne.",
    reviewHtml: "<p><em>Dark Moon: The Blood Altar</em> est le manhwa officiel basé sur l'univers de Dark Moon (les albums du groupe BTS). L'univers fantastique vampire et la narration musicale sont bien traduits en manhwa, avec une esthétique soignée et une atmosphère sombre caractéristique.</p><p>Même pour les lecteurs non-fans de BTS, le manhwa fonctionne comme une romance vampire fantastique standalone avec des visuels de qualité. L'intrigue mystérieuse autour des origines de Soo-ah maintient l'intérêt.</p><p>Le dessin est particulièrement travaillé, avec des designs de personnages marquants. Un manhwa vampire solide pour les amateurs du genre.</p>",
    pros: ["Esthétique dark vampire très soignée", "Designs de personnages marquants", "Intrigue mystérieuse bien construite"],
    cons: ["Fan-service pour l'univers BTS (peut rebuter)", "Certains codes narrative très codes"],
    stars: 3,
    tags: "Romance · Vampires · Fantasy · Manhwa · Dark",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=dark+moon+blood+altar+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=dark+moon+blood+altar+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "shark",
    title: "Shark",
    synopsis: "I Soo est l'héritier d'une famille de gangsters qui a perdu ses proches dans des circonstances mystérieuses. Déterminé à découvrir la vérité et à venger sa famille, il s'infiltre dans les cercles criminels et du pouvoir en utilisant ses capacités exceptionnelles et une intelligence froide.",
    reviewHtml: "<p><em>Shark</em> est un manhwa de crime/thriller coréen avec une tension narrative soutenue. L'atmosphere du monde criminel coréen est bien rendue, avec des intrigues qui mêlent crime organisé, politique et corruption.</p><p>I Soo est un protagoniste calculateur et implacable, dont la quête de vengeance est méthodique et crédible. Les révélations sur la mort de sa famille sont distillées progressivement, maintenant l'intérêt.</p><p>Dessin détaillé, narration mature. Pour les amateurs de thrillers criminels asiatiques exigeants.</p>",
    pros: ["Thriller criminel coréen bien exécuté", "Protagoniste calculateur et crédible", "Révélations bien dosées"],
    cons: ["Dense en personnages et factions", "Ton très sombre constant"],
    stars: 4,
    tags: "Action · Thriller · Crime · Manhwa · Revenge",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=shark+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=shark+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "the-archmage-returns-after-4000-years",
    title: "The Great Mage Returns After 4000 Years",
    synopsis: "Lucas Traumen, le plus grand mage de l'histoire, est emprisonné dans un enfer de conscience pendant 4000 ans par un demi-dieu. Il se réincarne dans le corps d'un étudiant en magie considéré comme nul. Avec 4000 ans d'expérience et de réflexion sur la magie, il va reconstruire sa puissance.",
    reviewHtml: "<p><em>The Great Mage Returns After 4000 Years</em> est un manhwa fantasy qui exploite l'angle du retour du mage légendaire avec efficacité. 4000 ans d'emprisonnement ont forgé une résolution implacable chez Lucas — pas de nostalgie, juste la volonté froide d'atteindre ses objectifs.</p><p>Le système de magie est l'un des plus développés du genre, avec des sorts et des théories magiques cohérentes. La progression du héros depuis un corps nul vers la puissance légendaire est satisfaisante et bien paced.</p><p>Dessin de qualité, combats magiques impressionnants. Un solide manhwa fantasy pour les amateurs du genre.</p>",
    pros: ["Système de magie bien développé", "Héros implacable et charismatique", "Progression bien rythmée"],
    cons: ["Formule reincarnation/regression classique", "Certains antagonistes peu développés"],
    stars: 4,
    tags: "Action · Fantasy · Manhwa · Magie · Regression",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=great+mage+returns+4000+years+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=great+mage+4000+years+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "a-returners-magic-should-be-special",
    title: "A Returner's Magic Should Be Special",
    synopsis: "Desir Arman revient 10 ans en arrière avec le souvenir de l'échec de son groupe face au Shadow Labyrinth — un donjon qui a failli détruire le monde. Cette fois, il va utiliser sa connaissance du futur pour entraîner ses nouveaux compagnons et préparer une défense contre la catastrophe à venir.",
    reviewHtml: "<p><em>A Returner's Magic Should Be Special</em> est un manhwa de regression de haute qualité. Sa particularité est l'accent mis sur l'entraînement et la préparation plutôt que sur le seul power fantasy : Desir investit son temps à forger les autres, pas seulement lui-même.</p><p>La dynamique de mentoring entre Desir et ses élèves est bien construite, et les révélations progressives sur la vraie nature du Shadow Labyrinth maintiennent une tension narrative de fond.</p><p>Dessin de très bonne qualité, avec des combats magiques variés et lisibles. Un des meilleurs manhwas du genre regression pour ceux qui cherchent de la substance narrative.</p>",
    pros: ["Accent sur l'entraînement des autres — angle rare", "Tension narrative de fond bien maintenue", "Dessin et combats de très bonne qualité"],
    cons: ["Certains arcs d'entraînement lents", "Dense en personnages"],
    stars: 5,
    tags: "Action · Fantasy · Manhwa · Regression · Magie",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=returner+magic+special+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=returner+magic+special+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "the-max-level-returner",
    title: "The Max Level Returner",
    synopsis: "Yoon Sang-Hyuk passe 50 ans dans un monde parallèle de survie, atteignant le niveau maximum du jeu. Quand il revient dans le monde réel, seul quelques mois se sont écoulés. Il est désormais le seul être humain ayant atteint le niveau max, et les portes qui s'ouvrent dans le monde réel n'ont pas de secret pour lui.",
    reviewHtml: "<p><em>The Max Level Returner</em> est un manhwa de return qui distingue son héros par une solitude totale — 50 ans passé seul dans un monde hostile. Cette expérience forge un protagoniste calme, efficace et légèrement déconnecté des émotions humaines ordinaires.</p><p>La maîtrise absolue de Yoon Sang-Hyuk de tous les aspects du jeu crée des moments satisfaisants où il résout des situations impossibles avec aisance. Les interactions avec les autres chasseurs qui découvrent progressivement son niveau sont amusantes.</p><p>Dessin efficace, power fantasy bien rythmé. Bon divertissement pour les fans du genre.</p>",
    pros: ["50 ans seul — isolation bien exploitée", "Maîtrise totale du jeu crée des moments satisfaisants", "Interactions avec les autres bien gérées"],
    cons: ["Héros émotionnellement distant", "Formule return familière"],
    stars: 3,
    tags: "Action · Fantasy · Manhwa · Gate · Power Fantasy",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=max+level+returner+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=max+level+returner+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "second-life-ranker",
    title: "Second Life Ranker",
    synopsis: "Yeon-woo découvre le journal de bord de son frère jumeau, mort dans une Tour mystérieuse. Il décide d'entrer dans la Tour pour venger son frère et découvrir la vérité sur sa mort. Grâce au journal qui détaille les étages déjà parcourus, il progresse avec une efficacité que personne ne comprend.",
    reviewHtml: "<p><em>Second Life Ranker</em> est l'un des manhwas de tower les plus appréciés du genre. Sa force est double : une motivation émotionnelle forte (venger un frère) et une mécanique narrative originale (le journal qui révèle les secrets de la Tour).</p><p>Yeon-woo est un protagoniste charismatique dont l'évolution de vengeur à quelque chose de plus grand est bien menée. Les révélations sur la mort du frère et les conspirations de la Tour sont distillées avec soin.</p><p>Le système de puissance est bien construit, les combats impressionnants. Un des piliers du manhwa tower à lire absolument.</p>",
    pros: ["Motivation émotionnelle forte — venger son frère", "Mécanique du journal bien exploitée", "Pilier du genre tower bien construit"],
    cons: ["Dense en lore", "Progression parfois complexe à suivre"],
    stars: 5,
    tags: "Action · Fantasy · Manhwa · Tower · Revenge",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=second+life+ranker+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=second+life+ranker+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "kill-the-dragon",
    title: "Kill the Dragon",
    synopsis: "Dans un monde où les dragons règnent en dominants et les humains vivent sous leur joug, une organisation secrète cherche à les éliminer. Lee Chan, un jeune homme qui a perdu sa famille à cause des dragons, rejoint cette organisation pour apprendre à tuer des créatures que peu peuvent même approcher.",
    reviewHtml: "<p><em>Kill the Dragon</em> est un manhwa d'action anti-héros qui exploite un angle original : les dragons comme oppresseurs systémiques plutôt que comme créatures légendaires à défier par gloire. La résistance organisée contre eux donne une dimension de combat de libération intéressante.</p><p>Lee Chan est un protagoniste motivé par la perte, dont la progression vers un tueur efficace est bien menée. Les combats contre les dragons sont spectaculaires et bien illustrés.</p><p>Un manhwa d'action solide avec un angle moins commun dans la représentation des dragons.</p>",
    pros: ["Dragons comme oppresseurs — angle original", "Combats spectaculaires", "Motivation de perte bien intégrée"],
    cons: ["Formule vengeance familière", "Développement des personnages secondaires limité"],
    stars: 3,
    tags: "Action · Fantasy · Manhwa · Dragons",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=kill+the+dragon+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=kill+the+dragon+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "dungeon-reset",
    title: "Dungeon Reset",
    synopsis: "Dawun, coincé dans un donjon avec d'autres survivants, bénéficie d'un bug unique : à chaque reset du donjon, lui seul conserve ses objets et ses acquis. Alors que les autres avancent dans le donjon avec péril, il reste au premier niveau, accumulant tranquillement des ressources et des capacités dans la sécurité relative.",
    reviewHtml: "<p><em>Dungeon Reset</em> est un manhwa de donjon avec un concept délicieusement anti-conventionnel : le héros ne progresse pas dans le donjon, il exploite son bug pour rester en sécurité et accumuler des ressources. Cette approche counter-intuitive génère un humour et des situations très originaux.</p><p>Le manhwa se distingue par la créativité avec laquelle Dawun exploite son avantage unique — crafting, agriculture, construction dans un donjon — tout en observant les autres se débattre avec les niveaux supérieurs.</p><p>Dessin expressif, concept savoureux. Un des manhwas de donjon les plus originaux et divertissants.</p>",
    pros: ["Concept anti-conventionnel savoureux", "Créativité dans l'exploitation du bug", "Humour et situations très originaux"],
    cons: ["Moins d'action que la moyenne du genre", "Protagoniste peu ambitieux par conception"],
    stars: 4,
    tags: "Action · Comédie · Manhwa · Donjon · Survival",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=dungeon+reset+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=dungeon+reset+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "mystic-musketeer",
    title: "Arcane Sniper",
    synopsis: "Ha Jaeha, un soldat blessé incapable de se battre physiquement, découvre un MMORPG où il peut jouer au sniper à longue distance. Sa précision militaire réelle lui donne un avantage unique. Quand le jeu révèle des connexions avec le monde réel, ses compétences de tir deviennent vitales.",
    reviewHtml: "<p><em>Arcane Sniper</em> est un manhwa game isekai qui se distingue par son angle de sniper à longue portée. Voir la mécanique du combat à distance — calcul balistique, anticipation, gestion des variables — appliquée dans un contexte fantasy est original et bien exploité.</p><p>Le héros, soldat blessé reconverti en sniper virtuel puis réel, a une background crédible qui justifie ses compétences. Les scènes de tir de précision sont bien illustrées et satisfaisantes.</p><p>Un manhwa game solide avec un angle combat moins commun que la mêlée habituelle.</p>",
    pros: ["Angle sniper — combat à distance original", "Background militaire crédible du héros", "Scènes de tir de précision satisfaisantes"],
    cons: ["Formule game isekai classique", "Certains aspects game peu expliqués"],
    stars: 3,
    tags: "Action · Game · Manhwa · Militaire · Sniper",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=arcane+sniper+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=arcane+sniper+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "the-celestial-returned-from-hell",
    title: "The Constellation That Returned From Hell",
    synopsis: "Choi Yeon-woo survit à une catastrophe de donjon et revient avec la capacité de voir des Constellations — êtres puissants du monde céleste qui peuvent parrainer des chasseurs. Son retour transforme sa position dans le système des chasseurs de façon inattendue.",
    reviewHtml: "<p><em>The Constellation That Returned From Hell</em> est un manhwa de return/gate qui exploite le système de Constellations de façon intéressante. La relation entre les chasseurs et leurs Constellations parraines crée une dynamique politique et relationnelle originale.</p><p>Le héros revenu de l'enfer avec de nouvelles capacités de perception des Constellations est une mécanique bien exploitée pour créer des situations uniques dans les dungeons et les interactions avec les autres chasseurs.</p><p>Dessin de bonne qualité, système de jeu cohérent. Un gate manhwa solide avec un angle distinctif.</p>",
    pros: ["Système de Constellations original", "Dynamique politique chasseurs/parrains intéressante", "Mécanique de perception bien exploitée"],
    cons: ["Dense en lore du système de Constellations", "Certains arcs complexes"],
    stars: 3,
    tags: "Action · Fantasy · Manhwa · Gate · Constellations",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=constellation+returned+hell+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=constellation+returned+hell+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "i-get-stronger-the-more-i-eat",
    title: "I Grow Stronger By Eating",
    synopsis: "Jaehwan découvre qu'il peut absorber la puissance des monstres qu'il mange. Cette capacité unique lui permet une progression exponentielle dans un monde envahi de créatures. Plus il mange, plus il devient puissant — une mécanique de progression aussi simple qu'efficace.",
    reviewHtml: "<p><em>I Grow Stronger By Eating</em> est un manhwa de progression dont la mécanique — manger pour progresser — est exploitée avec humour et créativité. Le concept est absurde mais l'auteur en tire un divertissement léger et efficace.</p><p>Les situations comiques découlant de la nécessité de manger des monstres de plus en plus grands et puissants sont inventives. Jaehwan est un héros sympathique dont l'appétit est sa plus grande force et sa plus grande faiblesse.</p><p>Lecture légère et fun pour les fans de progression manhwa qui veulent du divertissement sans prise de tête.</p>",
    pros: ["Mécanique de progression originale et comique", "Situations absurdes inventives", "Lecture légère et fun"],
    cons: ["Léger en narration sérieuse", "Répétitif sur la longueur"],
    stars: 3,
    tags: "Action · Comédie · Manhwa · Power Fantasy",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=grow+stronger+eating+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=grow+stronger+eating+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "hunter-academys-invincible-martial-god",
    title: "Hunter Academy's Battle God",
    synopsis: "Le plus grand chasseur de l'histoire se réincarne dans le corps d'un élève sous-performant d'une académie de chasseurs. Avec ses capacités légendaires redécouvertes progressivement dans un nouveau corps, il va reconstruire sa réputation tout en guidant ses camarades vers leur plein potentiel.",
    reviewHtml: "<p><em>Hunter Academy's Battle God</em> est un manhwa gate/regression classique sur fond d'académie. La formule légendaire réincarné dans un élève nul est bien connue mais exécutée ici avec soin. L'ambiance d'académie donne un rythme différent des manhwas gate traditionnels.</p><p>Le mix entre combats d'élèves, tournois et missions de terrain est bien équilibré. Le héros retrouve ses capacités progressivement, ce qui crée une progression satisfaisante.</p><p>Dessin dynamique, ambiance académie bien rendue. Un bon manhwa pour les amateurs du genre.</p>",
    pros: ["Ambiance académie bien rendue", "Progression des capacités satisfaisante", "Mix missions/tournois équilibré"],
    cons: ["Formule classique sans grande surprise", "Score bas indique popularité limitée"],
    stars: 3,
    tags: "Action · Fantasy · Manhwa · Académie · Regression",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=hunter+academy+battle+god+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=hunter+academy+battle+god+manhwa", logo: "/logos/amazon.svg" }]
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
  const cover = coverMatch ? coverMatch[1] : "";
  return content.slice(0, entryStart) + buildReplacement(cover) + content.slice(entryEnd);
}

let content = readFileSync(FILE, "utf-8");
let patched = 0;
for (const p of PATCHES) {
  const result = patchEntry(content, p.slug, (cover) => {
    const shopsJson = p.shops.map(s =>
      `  {\n    "name": "${s.name}",\n    "url": "${s.url}",\n    "logo": "${s.logo}"\n  }`
    ).join(",\n");
    return `{
  slug: "${p.slug}",
  title: "${p.title.replace(/"/g, '\\"')}",
  synopsis: "${p.synopsis.replace(/"/g, '\\"')}",
  reviewHtml: "${p.reviewHtml.replace(/"/g, '\\"')}",
  pros: [${p.pros.map(x => `"${x.replace(/"/g, '\\"')}"`).join(", ")}],
  cons: [${p.cons.map(x => `"${x.replace(/"/g, '\\"')}"`).join(", ")}],
  stars: ${p.stars},
  category: "${p.category}",
  tags: "${p.tags}",
  cover: "${cover}",
  addedAt: "2026-03-22",
  shops: [\n${shopsJson}\n  ],
  streaming: []
}`;
  });
  if (!result) { console.log(`⚠️  Non trouvé : ${p.slug}`); continue; }
  content = result;
  patched++;
  console.log(`✅ ${p.title}`);
}
writeFileSync(FILE, content, "utf-8");
console.log(`\n🎉 ${patched}/${PATCHES.length} patchés.`);
