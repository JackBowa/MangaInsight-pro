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

let content = readFileSync(FILE, "utf-8");

const PATCHES = [
  {
    slug: "burn-the-witch",
    title: "Burn the Witch",
    synopsis: "Dans une version inverse de Soul Society où les dragons coexistent avec les humains, Noel et Ninny sont des sorcières de Reverse London chargées de gérer les dragons qui menacent les civils. Une histoire courte dans l'univers de Bleach, signée Tite Kubo.",
    reviewHtml: `<p>Burn the Witch est une courte incursion de Tite Kubo dans un univers parallèle de Bleach, et c'est une réussite surprenante. Le duo Noel/Ninny fonctionne bien, le système de dragons de Reverse London est inventif, et Kubo retrouve son sens du design et du cool factor qui avait fait le succès de Bleach.</p><p>Court mais dense, le manga ne perd pas de temps et va droit à l'essentiel. Pour les fans de Bleach, c'est un must. Pour les nouveaux, c'est une porte d'entrée accessible à l'univers étendu.</p>`,
    pros: ["Duo de protagonistes féminines charismatiques", "Système de dragons inventif", "Rythme court et efficace"],
    cons: ["Trop court pour développer pleinement l'univers", "Certains enjeux peu établis pour les non-fans de Bleach"],
    tags: "Action · Fantasy · Comédie · Shonen",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Burn+the+Witch", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Burn+the+Witch", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Burn+the+Witch+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "fairy-tail-100-years-quest",
    title: "Fairy Tail: 100 Years Quest",
    synopsis: "Natsu et l'équipe Fairy Tail se lancent dans la quête centenaire abandonnée depuis 100 ans : neutraliser les Cinq Dragons Dieux, des créatures d'une puissance encore supérieure aux Dragons dont Natsu a triomphé. La suite directe de Fairy Tail dessinée par Atsuo Ueda.",
    reviewHtml: `<p>Fairy Tail: 100 Years Quest est la suite officielle créée par Hiro Mashima et dessinée par Atsuo Ueda, qui parvient à retrouver l'énergie et la convivialité de l'original. Les Dragon Gods sont des antagonistes imposants, et les retrouvailles avec les personnages aimés sont un vrai plaisir.</p><p>Si la formule reste identique à Fairy Tail, c'est précisément ce que les fans attendent. Un manga de suivi solide qui assume d'être un service fans généreux et bien réalisé.</p>`,
    pros: ["Retrouvailles avec les personnages aimés", "Nouveaux antagonistes bien conçus", "Dessin d'Ueda qui honore le style de Mashima"],
    cons: ["Peu d'évolution pour les personnages existants", "Formule identique à l'original sans surprise"],
    tags: "Action · Aventure · Fantasy · Shonen",
    category: "manga",
    stars: 3,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Fairy+Tail+100+Years+Quest", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Fairy+Tail+100+Years+Quest", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Fairy+Tail+100+Years+Quest+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "samurai-deeper-kyo",
    title: "Samurai Deeper Kyo",
    synopsis: "Dans le Japon du début des Tokugawa, Kyoshiro Mibu est un vendeur ambulant de médicaments dont le corps abrite la conscience du légendaire tueur Demon Eyes Kyo, responsable de 1000 morts à Sekigahara. Les deux partagent le même corps et une jeune femme cherchant Kyo va déclencher leurs aventures.",
    reviewHtml: `<p>Samurai Deeper Kyo est un shonen samourai baroque et généreux, qui multiplie les affrontements entre guerriers légendaires dans un Japon féodal stylisé. Le concept du partage de corps est bien exploité, et Kyo lui-même est un protagoniste charismatique dans la tradition des anti-héros froids.</p><p>Le manga assume ses excès avec une énergie communicative. Les batailles sont spectaculaires, les techniques de combat fantaisistes, et l'univers étendu des guerriers légendaires donne de l'ambition au récit. Un bon manga d'action samourai pour les amateurs du genre.</p>`,
    pros: ["Protagoniste anti-héros charismatique", "Combats de samourai spectaculaires", "Concept partage de corps bien utilisé"],
    cons: ["Narration parfois confuse dans les arcs tardifs", "Très daté esthétiquement"],
    tags: "Action · Aventure · Historique · Shonen",
    category: "manga",
    stars: 3,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Samurai+Deeper+Kyo", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Samurai+Deeper+Kyo+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Samurai+Deeper+Kyo+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "kiss-yori-mo-hayaku",
    title: "Faster than a Kiss",
    synopsis: "Fumino et son petit frère se retrouvent sans abri après la mort de leurs parents. Son professeur de lycée, Kazuma Ojiro, lui propose de l'épouser pour lui donner un foyer stable. Fumino accepte, et ils doivent maintenant vivre ensemble en secret tout en continuant leur relation élève-professeur.",
    reviewHtml: `<p>Faster than a Kiss est un shojo romantique qui assume son concept controversé (mariage professeur-élève) avec légèreté et humour. Kazuma est un personnage bien écrit, attentionné et respectueux, et la dynamique cohabitation secrète donne lieu à des situations comiques bien amenées.</p><p>Le manga se concentre sur le développement émotionnel de Fumino, qui apprend à faire confiance après les pertes de son enfance. Un shojo feel-good qui réussit à rendre son prémisse attachant grâce à des personnages bien écrits.</p>`,
    pros: ["Dynamique cohabitation secrète bien utilisée", "Personnages principaux bien écrits et attachants", "Humour et moments doux bien équilibrés"],
    cons: ["Prémisse controversé difficile à ignorer", "Résolution romantique attendue"],
    tags: "Comédie · Drame · Romance · Shojo",
    category: "manga",
    stars: 3,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Faster+than+a+Kiss", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Faster+than+a+Kiss+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Faster+than+a+Kiss+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "wild-ones",
    title: "Wild Ones",
    synopsis: "Sachie Wakamura perd sa mère et découvre que son grand-père est un chef yakuza. Elle emménage avec lui et se retrouve entourée de garde du corps yakuzas dont le plus jeune, Rakuto Igarashi, va prendre soin d'elle. Une romance shojo entre innocence et monde du crime.",
    reviewHtml: `<p>Wild Ones est un shojo romantique léger et charmant qui joue avec le décalage entre l'héroïne naïve et son environnement de yakuzas protecteurs. Rakuto est un love interest charismatique et mystérieux, et les situations comiques nées du contraste monde du crime/lycéenne ordinaire sont bien utilisées.</p><p>La série ne prend pas son côté yakuza trop au sérieux, ce qui lui donne une légèreté agréable. Un shojo divertissant pour les amateurs de romance avec atmosphère.</p>`,
    pros: ["Contraste yakuza/lycéenne amusant bien exploité", "Love interest charismatique et bien développé", "Légèreté agréable"],
    cons: ["Peu de profondeur narrative", "Héroïne parfois trop passive"],
    tags: "Comédie · Drame · Romance · Shojo",
    category: "manga",
    stars: 3,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Wild+Ones+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Wild+Ones+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Wild+Ones+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "tail-of-the-moon",
    title: "Tail of the Moon",
    synopsis: "Usagi est une apprentie ninja maladroite issue d'un clan de ninjas. Elle est envoyée en mission au service du légendaire guerrier Hanzo Hattori pour devenir sa femme et lui donner un héritier. Mais Hanzo la rejette catégoriquement, et Usagi doit prouver sa valeur dans ce Japon médiéval stylisé.",
    reviewHtml: `<p>Tail of the Moon est un shojo historique fantaisiste et léger situé au Japon médiéval. La dynamique entre Usagi (maladroite mais déterminée) et Hanzo (sévère mais honorable) est le moteur d'une comédie romantique bien menée. Le cadre ninja/époque Sengoku est utilisé avec inventivité.</p><p>La série assume son côté feel-good et divertissant, sans prétention à une reconstitution historique sérieuse. Un shojo agréable pour les amateurs de romance historique légère.</p>`,
    pros: ["Dynamique héroïne maladroite/samourai sévère efficace", "Humour bien calibré", "Cadre ninja original"],
    cons: ["Historiquement peu rigoureux", "Héroïne souvent passive dans les moments critiques"],
    tags: "Comédie · Romance · Historique · Shojo",
    category: "manga",
    stars: 3,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Tail+of+the+Moon+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Tail+of+the+Moon+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Tail+of+the+Moon+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "black-rose-alice",
    title: "Black Rose Alice",
    synopsis: "À Vienne en 1908, le ténor Dimitri est tué et se réveille en vampire. Il doit trouver une femme pour perpétuer son clan, et choisit Agnieszka, dont l'âme ressemble à celle de sa bien-aimée défunte. L'histoire saute au Japon contemporain, où leur histoire se poursuit à travers les réincarnations.",
    reviewHtml: `<p>Black Rose Alice est un josei romantique sombre et atypique qui mêle gothique viennois, romance vampirique et structure narrative en deux époques. Setona Mizushiro crée une atmosphère mélancolique unique, et la relation complexe entre vampire et l'humaine choisie évite les clichés du genre.</p><p>Le manga est court mais laisse une impression durable, notamment grâce à sa fin ambiguë et courageuse. Pour les amateurs de romance vampire dark avec plus de substance que la moyenne.</p>`,
    pros: ["Atmosphère gothique unique entre Vienne et Tokyo", "Romance vampirique qui évite les clichés", "Fin ambiguë et courageuse"],
    cons: ["Format très court, certains arcs peu développés", "Ton mélancolique constant peut peser"],
    tags: "Drame · Romance · Surnaturel · Josei",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Black+Rose+Alice", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Black+Rose+Alice+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Black+Rose+Alice+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "oresama-teacher",
    title: "Oresama Teacher",
    synopsis: "Mafuyu Kurosaki était la reine des délinquants de son lycée. Renvoyée, elle est envoyée dans un nouveau lycée avec la ferme intention de devenir une fille normale. Mais elle se retrouve entraînée par son professeur principal, un ancien camarade qui dirige un club de discipline secrètement composé d'anciens délinquants.",
    reviewHtml: `<p>Oresama Teacher est une comédie shojo absolument hilarante dont l'humour absurde et débridé ne faiblit jamais. Mafuyu est une héroïne fantastique, forte et drôle, dont les tentatives de devenir 'normale' échouent systématiquement de façon spectaculaire. Le professeur Takaomi est un antagoniste/mentor irrésistiblement irritant.</p><p>La série excelle dans le timing comique et les situations improbables. Une des meilleures comédies shojo des années 2000-2010, indispensable pour les amateurs d'humour et de personnages féminins forts.</p>`,
    pros: ["Comédie absurde d'une efficacité redoutable", "Héroïne forte et hilarante", "Timing comique parfait"],
    cons: ["Peu d'enjeux romantiques pour un shojo", "Romance en arrière-plan très lente"],
    tags: "Comédie · Drame · Quotidien · Shojo",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Oresama+Teacher", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Oresama+Teacher+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Oresama+Teacher+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "mirai-nikki",
    title: "Mirai Nikki",
    synopsis: "Yukiteru Amano tient un journal du futur sur son téléphone. Il se retrouve propulsé dans un jeu de survie organisé par le dieu du temps Deus Ex Machina : 12 joueurs disposant de journaux prophétiques doivent s'éliminer, le dernier survivant devenant dieu. Yuno Gasai, sa voisine obsédée, est aussi une participante.",
    reviewHtml: `<p>Mirai Nikki est un thriller de survie haletant rendu célèbre par Yuno Gasai, l'un des personnages de yandere les plus iconiques du manga. La tension entre confiance et trahison est constante, et le concept des journaux du futur donne lieu à des déductions et contre-déductions tactiquement brillantes.</p><p>La série monte en intensité de façon constante, avec des révélations sur les participants bien réparties. La relation Yukiteru/Yuno est à la fois fascinante et terrifiante. Un thriller psychologique qui ne relâche jamais la pression.</p>`,
    pros: ["Concept des journaux prophétiques tactiquement brillant", "Yuno Gasai personnage iconique et terrifiante", "Tension narrative constante et bien soutenue"],
    cons: ["Yukiteru très passif en tant que protagoniste", "Conclusion divisive"],
    tags: "Action · Thriller · Psychologie · Seinen",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Mirai+Nikki", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Mirai+Nikki+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Mirai+Nikki+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [
      { name: "Crunchyroll", url: "https://www.crunchyroll.com/series/GR5VGJ85R/future-diary", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" },
    ],
  },
  {
    slug: "highschool-of-the-dead",
    title: "Highschool of the Dead",
    synopsis: "Une apocalypse zombie frappe le Japon. Takashi Kimuro et un groupe de lycéens doivent survivre et se frayer un chemin à travers une ville envahie par les morts. Le manga combine survival horror et action intense dans un cadre lycée.",
    reviewHtml: `<p>Highschool of the Dead est le survival zombie japonais de référence des années 2000, qui combine efficacement action intense, tension de survie et fanservice assumé. L'animation des combats est spectaculaire, et les enjeux de survie créent une tension réelle malgré les conventions du genre.</p><p>Malheureusement interrompu par le décès de l'auteur Daisuke Sato, le manga reste inachevé. Ce qu'il existe est néanmoins un divertissement de haute qualité pour les amateurs du genre, avec un dessin de Shouji Sato au top de sa forme.</p>`,
    pros: ["Action de survie zombie spectaculaire", "Tension bien maintenue", "Dessin dynamique et expressif"],
    cons: ["Inachevé suite au décès de l'auteur", "Fanservice envahissant qui perturbe l'immersion"],
    tags: "Action · Horreur · Thriller · Seinen",
    category: "manga",
    stars: 3,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Highschool+of+the+Dead", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Highschool+of+the+Dead+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Highschool+of+the+Dead+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "freezing",
    title: "Freezing",
    synopsis: "Dans un futur où la Terre est envahie par des entités extraterrestres appelées Nova, des jeunes femmes nommées Pandoras sont génétiquement modifiées pour les combattre. Kazuya Aoi intègre l'académie West Genetics et rencontre Satellizer, la Pandora la plus puissante mais aussi la plus solitaire.",
    reviewHtml: `<p>Freezing est un manga d'action fantastique qui combine combats de filles améliorées génétiquement, worldbuilding sci-fi et romance. Le système des Pandoras/Limiters est bien développé, et les enjeux militaires contre les Nova donnent de la substance aux arcs d'action.</p><p>La série assume son côté fanservice sans s'y réduire, et Satellizer est un personnage bien construit dont le passé traumatique est traité avec plus de soin qu'attendu. Pour les amateurs d'action fantastique avec héroïnes puissantes.</p>`,
    pros: ["Héroïne principale bien construite malgré les apparences", "Worldbuilding militaire cohérent", "Arcs d'action solides"],
    cons: ["Fanservice très présent qui dérange certains lecteurs", "Certains arcs secondaires longuets"],
    tags: "Action · Sci-fi · Romance · Seinen",
    category: "manga",
    stars: 3,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Freezing+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Freezing+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Freezing+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "nura-rise-of-the-yokai-clan",
    title: "Nura: Rise of the Yokai Clan",
    synopsis: "Rikuo Nura est le petit-fils du chef suprême des yokai, un quart démon. Le jour, il est un lycéen ordinaire qui veut mener une vie humaine. La nuit, son côté démon s'éveille et il devient un chef yokai redouté. Il doit choisir quel être il veut être et protéger ceux qu'il aime.",
    reviewHtml: `<p>Nura: Rise of the Yokai Clan est un shonen solide qui joue avec la dualité humain/démon de façon satisfaisante. La mythologie des yokai japonais est utilisée généreusement, et la galerie de yokai suivant Rikuo est mémorable et variée. Le concept de nuit/jour qui transforme le personnage donne lieu à de bons contrastes.</p><p>La série monte bien en puissance dans ses arcs tardifs, avec des antagonistes yokai de plus en plus imposants. Un shonen honnête et divertissant pour les fans de folklore japonais et d'action.</p>`,
    pros: ["Mythologie des yokai japonais riche et variée", "Dualité humain/démon bien exploitée", "Galerie de personnages secondaires mémorable"],
    cons: ["Rythme parfois inégal", "Héroïnes secondaires peu développées"],
    tags: "Action · Fantasy · Surnaturel · Shonen",
    category: "manga",
    stars: 3,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Nura+Yokai+Clan", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Nura+Rise+Yokai+Clan", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Nura+Rise+Yokai+Clan+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "omamori-himari",
    title: "Omamori Himari",
    synopsis: "Yuuto Amakawa, lycéen ordinaire aux allergies aux chats, découvre à ses 16 ans qu'il descend d'une famille d'exorcistes. Une jeune samourai-chaton nommée Himari se matérialise pour le protéger des démons qui s'attaquent à lui. Débute une vie mouvementée entre démons, exorcistes et une galerie de personnages fantastiques.",
    reviewHtml: `<p>Omamori Himari est un harem fantastique qui ne se prend pas au sérieux et en tire toute son énergie. Himari est un personnage charismatique, et le mélange action de sabre + créatures surnaturelles + situations harem comédie fonctionne dans le cadre qu'il s'est fixé.</p><p>Le manga divertit sans prétendre à autre chose, et les affrontements de démones sont dynamiques. Un harem fantastique divertissant pour les amateurs du genre, sans plus.</p>`,
    pros: ["Himari personnage charismatique et bien dessiné", "Action de sabre surnaturelle dynamique", "Humour harem bien dosé"],
    cons: ["Très convenu dans ses codes", "Protagoniste masculin peu charismatique"],
    tags: "Action · Comédie · Fantasy · Seinen",
    category: "manga",
    stars: 3,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Omamori+Himari", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Omamori+Himari+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Omamori+Himari+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "sun-ken-rock",
    title: "Sun-Ken Rock",
    synopsis: "Ken Sugisaki suit la femme dont il est amoureux, Yumin, en Corée pour la retrouver. Se retrouvant sans le sou dans les rues de Séoul, il est recruté par un gang et gravit les échelons jusqu'à devenir chef d'une puissante organisation criminelle, tout en cherchant à reconquérir Yumin.",
    reviewHtml: `<p>Sun-Ken Rock est un manhwa/manga d'action criminelle qui brille par ses combats chorégraphiés avec une maestria absolue. Boichi, l'auteur, impose un style dynamique et musclé qui fait de chaque affrontement un spectacle visuel. L'histoire de Ken qui monte dans la pègre coréenne est directe et efficace.</p><p>La série ne manque pas d'ambition narrative, et les enjeux s'élargissent considérablement au fil des arcs. Pour les amateurs d'action et de mafia, c'est une référence du genre avec des combats parmi les mieux illustrés du manga.</p>`,
    pros: ["Combats parmi les mieux illustrés du manga", "Dynamique criminelle bien construite", "Style graphique de Boichi exceptionnel"],
    cons: ["Fanservice très appuyé par moments", "Héroïne Yumin peu développée"],
    tags: "Action · Drame · Criminalité · Seinen",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Sun-Ken+Rock", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Sun+Ken+Rock+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Sun+Ken+Rock+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "cdebreaker",
    title: "Code:Breaker",
    synopsis: "Sakura Sakurakoji assiste à l'immolation de plusieurs hommes par les flammes bleues d'un mystérieux garçon. Le lendemain, ce garçon est transféré dans son lycée. Il est un Code:Breaker, un agent gouvernemental secret utilisant des pouvoirs surnaturels pour éliminer les criminels qui échappent à la loi.",
    reviewHtml: `<p>Code:Breaker est un shonen d'action aux pouvoirs variés avec un anti-héros froid au code moral rigide. La dynamique entre Sakura, pacifiste convaincue, et Rei, Code:Breaker sans pitié, crée une tension morale intéressante qui dépasse les conventions du genre.</p><p>Les pouvoirs de Code:Breaker sont inventifs et les affrontements visuellement réussis. La série s'améliore au fil des arcs, notamment dans ses révélations sur l'organisation secrète. Un shonen d'action solide qui mérite plus de reconnaissance.</p>`,
    pros: ["Tension morale entre pacifisme et justice expéditive", "Galerie de pouvoirs variée et inventive", "Anti-héros charismatique"],
    cons: ["Début lent dans son établissement", "Certains antagonistes peu développés"],
    tags: "Action · Fantasy · Thriller · Shonen",
    category: "manga",
    stars: 3,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Code+Breaker+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Code+Breaker+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Code+Breaker+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "w-juliet",
    title: "W Juliet",
    synopsis: "Ito Miura, lycéenne tomboyish qui joue les rôles masculins dans la troupe de théâtre de son école, rencontre Makoto Amano, un garçon qui doit se déguiser en fille pendant 2 ans pour prouver à son père qu'il peut devenir acteur. Ils tombent amoureux dans cette situation inhabituelle.",
    reviewHtml: `<p>W Juliet est une comédie romantique shojo des années 90 autour du travestissement et du théâtre. Emura traite avec une grande bienveillance le sujet des genres et des rôles sociaux, et la relation entre Ito et Makoto est charmante et sincère. Le cadre théâtral donne lieu à des situations comiques bien utilisées.</p><p>Un shojo court et bien construit, précurseur des oeuvres contemporaines sur la fluidité de genre. Attachant dans sa simplicité et sa bienveillance.</p>`,
    pros: ["Traitement bienveillant du travestissement et des genres", "Relation protagonistes sincère et attachante", "Humour bien dosé"],
    cons: ["Dessin daté", "Format court qui ne permet pas beaucoup de développement"],
    tags: "Comédie · Drame · Romance · Shojo",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=W+Juliet+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=W+Juliet+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=W+Juliet+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "ultra-maniac",
    title: "Ultra Maniac",
    synopsis: "Ayu Tateishi, lycéenne populaire et pragmatique, se retrouve impliquée dans les aventures de Nina Sakura, une sorcière du Magic Kingdom qui a échoué dans ses études de magie et tente désespérément de collecter des Magic Stones pour rentrer chez elle. Malgré leurs différences, elles deviennent meilleures amies.",
    reviewHtml: `<p>Ultra Maniac est un shojo fantastique léger et charmant de Wataru Yoshizumi. La dynamique entre Ayu, pragmatique et réaliste, et Nina, sorcière maladroite et enthousiaste, est le coeur d'une comédie romantique bien menée. La magie est utilisée avec humour et légèreté.</p><p>Un shojo feel-good court et sans prétention, parfait pour une lecture décontractée. La romance parallèle entre Ayu et Tetsushi est bien dosée. Un classique des shojo des années 2000.</p>`,
    pros: ["Duo protagoniste féminin attachant et bien écrit", "Légèreté et humour bien calibrés", "Romance bien dosée"],
    cons: ["Peu d'enjeux dramatiques", "Formule répétitive"],
    tags: "Comédie · Fantasy · Romance · Shojo",
    category: "manga",
    stars: 3,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Ultra+Maniac+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Ultra+Maniac+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Ultra+Maniac+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "maid-sama",
    title: "Maid-sama!",
    synopsis: "Misaki Ayuzawa est la présidente de conseil lycée autoritaire d'un établissement récemment mixte. Elle cache un secret : après l'école, elle travaille dans un café maid pour aider sa famille dans le besoin. Le garçon le plus populaire du lycée, Usui Takumi, découvre son secret et décide de ne pas le révéler, pour l'instant.",
    reviewHtml: `<p>Maid-sama! est une des meilleures comédies romantiques shojo des années 2000. Misaki est une héroïne exceptionnelle : forte, compétente, fière, qui ne cède pas facilement. La dynamique avec Usui (teasing permanent mais respect profond) est jouissive, et les situations du café maid donnent lieu à des moments hilarants.</p><p>La série sait aussi être sérieuse quand il le faut, notamment dans les arcs sur la famille de Misaki et les origines d'Usui. Un shojo qui vieillit très bien et reste un incontournable du genre.</p>`,
    pros: ["Héroïne forte et compétente exceptionnelle", "Dynamique protagoniste/love interest parfaitement calibrée", "Équilibre comédie/émotion maîtrisé"],
    cons: ["Usui trop parfait pour être totalement crédible", "Certains arcs secondaires longuets"],
    tags: "Comédie · Romance · Quotidien · Shojo",
    category: "manga",
    stars: 5,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Maid-sama", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Maid+sama+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Maid+sama+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [
      { name: "Crunchyroll", url: "https://www.crunchyroll.com/series/GY9PJ5J9R/maid-sama", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" },
    ],
  },
  {
    slug: "vampire-knight-memories",
    title: "Vampire Knight: Memories",
    synopsis: "Suite de Vampire Knight, se déroulant dans un futur où humains et vampires coexistent paisiblement. Zero et Yuki ont vécu leur vie ensemble, et maintenant leurs enfants héritent d'un monde changé. Le manga explore les conséquences du choix de Yuki dans l'histoire originale.",
    reviewHtml: `<p>Vampire Knight: Memories est la suite que les fans de Vampire Knight attendaient, servant à la fois comme épilogue et comme nouvelles histoires dans ce monde réinventé. Matsuri Hino retrouve ses personnages avec affection, et les moments entre Zero et Yuki sont particulièrement bien traités.</p><p>La série offre une conclusion plus douce à l'histoire originale et développe l'univers dans un futur intéressant. Pour les fans de Vampire Knight, c'est une suite satisfaisante et bien menée.</p>`,
    pros: ["Conclusions satisfaisantes pour les fans de l'original", "Développement de l'univers dans le futur bien mené", "Retrouvailles émotionnelles avec les personnages"],
    cons: ["Peu accessible sans Vampire Knight original", "Moins d'intensité dramatique que l'original"],
    tags: "Drame · Romance · Surnaturel · Shojo",
    category: "manga",
    stars: 3,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Vampire+Knight+Memories", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Vampire+Knight+Memories+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Vampire+Knight+Memories+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "fairy-cube",
    title: "Fairy Cube",
    synopsis: "Ian peut voir des fairies (fées) depuis son enfance, ce qui lui a valu d'être isolé. Son double, Tokage, prend possession de son corps et le tue. Ian se retrouve à partager l'enveloppe de Tokage tout en cherchant à reprendre son corps et à comprendre les mystères des fées.",
    reviewHtml: `<p>Fairy Cube est un shojo fantastique court et atmosphérique de Kaori Yuki. La mythologie des fées est traitée avec un ton mélancolique et sombre caractéristique de l'autrice. Le concept de double et de vol d'identité donne lieu à une intrigue dense et émotionnellement chargée.</p><p>Kaori Yuki (Angel Sanctuary, Godchild) imprime son esthétisme gothique unique à ce manga court. Pour les fans de son univers, c'est un must. Pour les nouveaux, c'est une bonne introduction à son style sombre et poétique.</p>`,
    pros: ["Mythologie des fées sombre et originale", "Esthétisme gothique de Kaori Yuki", "Intrigue dense et émotionnellement chargée"],
    cons: ["Format court qui laisse peu de place pour développer l'univers", "Fin précipitée"],
    tags: "Aventure · Drame · Fantasy · Shojo",
    category: "manga",
    stars: 3,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Fairy+Cube+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Fairy+Cube+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Fairy+Cube+manga", logo: "/logos/amazon.png" },
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

writeFileSync(FILE, content, "utf-8");
console.log(`\n✅ ${patched} séries patchées (batch4-lot3)`);
