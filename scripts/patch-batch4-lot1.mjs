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

function appendEntries(content, entries) {
  const insertPos = content.lastIndexOf("]");
  const toInsert = entries.map(e => ",\n" + e).join("");
  return content.slice(0, insertPos) + toInsert + "\n]";
}

let content = readFileSync(FILE, "utf-8");

const PATCHES = [
  {
    slug: "banana-fish",
    title: "Banana Fish",
    synopsis: "À New York dans les années 80, Ash Lynx, chef de gang de 17 ans au passé traumatique, croise le chemin d'Eiji Okumura, photographe japonais venu couvrir la scène des gangs. Ensemble, ils se retrouvent plongés dans un complot impliquant une mystérieuse drogue nommée Banana Fish, qui relie l'armée américaine et la mafia.",
    reviewHtml: `<p>Chef-d'oeuvre du manga des années 80, Banana Fish est un thriller haletant doublé d'une histoire d'amour entre deux jeunes hommes d'une profondeur rare. Akimi Yoshida compose une oeuvre sombre, violente et déchirante, portée par des personnages inoubliables. Ash Lynx reste l'un des protagonistes les plus marquants de l'histoire du manga, mélange impossible de brutalité et de fragilité.</p><p>La relation entre Ash et Eiji, construite sur la confiance et le respect mutuel, est d'une sincérité bouleversante. La fin est déchirante, inévitable, et hante longtemps.</p>`,
    pros: ["Intrigue complexe et haletante", "Relation Ash/Eiji unique et profondément émouvante", "Ambiance New York années 80 authentique"],
    cons: ["Violence graphique parfois difficile", "Certains arcs secondaires moins maîtrisés"],
    tags: "Action · Drame · Thriller · Seinen",
    category: "manga",
    stars: 5,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Banana+Fish", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Banana+Fish", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Banana+Fish+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [
      { name: "Crunchyroll", url: "https://www.crunchyroll.com/series/GY5VWJ5GR/banana-fish", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" },
    ],
  },
  {
    slug: "inuyashiki",
    title: "Inuyashiki",
    synopsis: "Ichiro Inuyashiki, 58 ans, est un homme invisible : ignoré de sa famille, méprisé pour son apparence et condamné par un cancer. Un soir, il est tué accidentellement par des extraterrestres qui le ressuscitent en robot de combat. Un lycéen brillant, Hiro Shishigami, reçoit les mêmes pouvoirs. L'un choisit d'aider, l'autre de tuer.",
    reviewHtml: `<p>Hiroya Oku (Gantz) livre ici un duel moral fascinant : un vieil homme sans ambition qui devient un héros parfait face à un jeune prodige qui bascule dans le mal pur. La violence est extrême, mais la réflexion sur ce qui fait l'humanité est profonde et sincère.</p><p>Inuyashiki pose une question simple et déchirante : qu'est-ce qu'on choisit de faire avec une puissance absolue ? La réponse de ces deux personnages opposés est une des plus belles démonstrations de caractère du manga de sa génération.</p>`,
    pros: ["Duel moral saisissant entre deux visions de l'humanité", "Action viscérale et spectaculaire", "Réflexion sincère sur la vieillesse et la dignité"],
    cons: ["Violence graphique extrême qui peut rebuter", "Personnages secondaires sous-exploités"],
    tags: "Action · Sci-fi · Drame · Seinen",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Inuyashiki", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Inuyashiki", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Inuyashiki+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "kimi-ni-todoke-from-me-to-you",
    title: "Kimi ni Todoke: From Me to You",
    synopsis: "Sawako Kuronuma, surnommée 'Sadako' par ses camarades à cause de sa ressemblance avec un fantôme de film d'horreur, ne rêve que d'amitié normale. Quand Kazehaya, le garçon le plus populaire de la classe, lui adresse spontanément la parole, sa vie commence à changer.",
    reviewHtml: `<p>Un shojo d'une douceur et d'une sincérité rares. Sawako est un personnage touchant, maladroit dans les relations sociales mais fondamentalement bienveillant, dont la transformation progressive est un bonheur à suivre. La romance se construit avec une patience qui sied parfaitement au personnage.</p><p>Karuho Shiina maîtrise parfaitement les malentendus de l'adolescence sans les rendre artificiels. Kimi ni Todoke est une lecture qui réchauffe, qui sait être drôle sans perdre sa profondeur émotionnelle.</p>`,
    pros: ["Héroïne originale et profondément attachante", "Romance slow-burn bien écrite", "Ambiance chaleureuse et sincère"],
    cons: ["Rythme très lent qui peut frustrer", "Certains malentendus prolongés"],
    tags: "Comédie · Drame · Romance · Shojo",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Kimi+ni+Todoke", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Kimi+ni+Todoke", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Kimi+ni+Todoke+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [
      { name: "Netflix", url: "https://www.netflix.com/title/81736247", logo: "/logos/netflix.svg" },
    ],
  },
  {
    slug: "natsume-yuujinchou",
    title: "Natsume Yuujinchou",
    synopsis: "Takashi Natsume peut voir les esprits (yokai) comme sa grand-mère Reiko avant lui. Il hérite du 'Livre des Amis' de cette dernière, un registre contenant les noms de yokai qu'elle avait vaincus et liés. Natsume décide de leur rendre leurs noms un à un.",
    reviewHtml: `<p>Un manga d'une mélancolie et d'une beauté exceptionnelles. Chaque chapitre est une rencontre entre Natsume et un esprit portant une histoire d'attachement, de deuil ou de solitude. L'oeuvre de Midorikawa est contemplative, profondément humaine, et d'une tendresse infinie.</p><p>Natsume lui-même est un personnage rare : un enfant qui a grandi dans la solitude et apprend, chapitre après chapitre, à accepter l'amour et l'amitié. Le Nyanko-sensei (esprit gardien sous forme de chat dodu) apporte une légèreté bienvenue dans ce récit de deuil et de réconciliation.</p>`,
    pros: ["Atmosphère unique et envoûtante", "Histoires courtes émouvantes et bien construites", "Personnage de Nyanko-sensei irrésistible"],
    cons: ["Rythme très lent, peu d'enjeux dramatiques", "Peu d'évolution narrative globale"],
    tags: "Surnaturel · Quotidien · Drame · Shojo",
    category: "manga",
    stars: 5,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Natsume+Yuujinchou", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Natsume+Yuujinchou", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Natsume+Yuujinchou+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [
      { name: "Crunchyroll", url: "https://www.crunchyroll.com/series/GY5VWJ5GR/natsumes-book-of-friends", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" },
    ],
  },
  {
    slug: "kamisama-kiss",
    title: "Kamisama Kiss",
    synopsis: "Nanami Momozono, lycéenne sans abri depuis la fuite de son père endetté, est embrassée par un dieu local qui lui cède son titre de dieu de la terre et son sanctuaire. Elle doit désormais gérer les affaires divines avec l'aide de Tomoe, un renard-esprit arrogant qui refuse catégoriquement de servir une humaine.",
    reviewHtml: `<p>Un shojo fantastique charmant qui joue habilement sur la dynamique maître/serviteur contraint. Nanami est une héroïne décidée et courageuse malgré ses faiblesses, Tomoe un partenaire tsundere à souhait dont l'évolution est bien menée. La mythologie shintoïste est utilisée de façon inventive sans jamais alourdir la lecture.</p><p>La romance se développe avec naturel sur fond de péripéties de sanctuaire bien rythmées. Un shojo qui assume son côté feel-good tout en offrant des arcs émotionnellement solides.</p>`,
    pros: ["Dynamique héroïne/esprit savoureuse", "Cadre mythologique japonais bien exploité", "Romance qui évolue naturellement"],
    cons: ["Certains arcs fantastiques moins réussis", "Antagonistes peu mémorables"],
    tags: "Comédie · Fantasy · Romance · Shojo",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Kamisama+Kiss", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Kamisama+Kiss", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Kamisama+Kiss+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [
      { name: "Crunchyroll", url: "https://www.crunchyroll.com/series/GRJQ5P1X6/kamisama-kiss", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" },
    ],
  },
  {
    slug: "beck",
    title: "Beck",
    synopsis: "Yukio 'Koyuki' Tanaka, lycéen ordinaire sans passion, rencontre Ryusuke Minami, guitariste de génie au passé américain. Fasciné par la musique rock, Koyuki rejoint son groupe Beck et découvre l'amour, l'amitié et les scènes underground japonaises.",
    reviewHtml: `<p>Beck est THE manga sur le rock japonais. L'amour de la musique transpire dans chaque page : les influences, les concerts, la construction d'un groupe depuis les caves jusqu'aux grandes scènes. Koyuki est un protagoniste attachant, et sa progression vocale donne lieu à des moments de lecture parmi les plus galvanisants du manga de sa génération.</p><p>Harold Sakuishi capture à la perfection l'énergie brute du rock, la camaraderie d'un groupe et la magie des concerts mémorables. Un classique indispensable pour tous les amateurs de musique.</p>`,
    pros: ["Passion communicative pour le rock", "Progression réaliste et satisfaisante du groupe", "Personnages complexes et attachants"],
    cons: ["Fin précipitée qui laisse sur sa faim", "Quelques arcs secondaires inégaux"],
    tags: "Drame · Musique · Quotidien · Seinen",
    category: "manga",
    stars: 5,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Beck+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Beck+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Beck+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "pandora-hearts",
    title: "Pandora Hearts",
    synopsis: "Oz Vessalius, héritier d'une noble famille, est projeté dans l'Abyss lors de sa cérémonie de commémoration. Il y rencontre Alice, une 'Chain' sous forme humaine. Il signe un contrat avec elle pour s'échapper, mais de retour dans le monde, il cherche à comprendre pourquoi il a été condamné par un mystérieux jugement.",
    reviewHtml: `<p>Un shonen gothique et labyrinthique, Pandora Hearts puise dans Alice au Pays des Merveilles pour tisser un récit d'une complexité remarquable. L'ambiance victorienne est parfaitement rendue, les retournements narratifs nombreux et bien construits, et le mystère central sur la famille d'Oz se révèle progressivement avec une vraie maîtrise.</p><p>Jun Mochizuki construit un monde dense dont chaque détail compte, et les révélations des derniers arcs sont parmi les plus retentissantes du manga d'action-mystère. Une oeuvre exigeante qui récompense l'attention portée.</p>`,
    pros: ["Ambiance gothique et victorienne réussie", "Intrigue complexe et bien maîtrisée", "Retournements narratifs déchirants"],
    cons: ["Premier tiers difficile à suivre", "Densité narrative qui peut épuiser"],
    tags: "Action · Fantasy · Mystère · Shonen",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Pandora+Hearts", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Pandora+Hearts", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Pandora+Hearts+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "shadows-house",
    title: "Shadows House",
    synopsis: "Dans un manoir mystérieux vivent les Shadows, une famille de nobles sans visage dont le corps émet une suie noire. Chacun possède un 'visage vivant', une servante humaine censée exprimer leurs émotions à leur place. Emilico, le visage d'une Shadows nommée Kate, commence à percer les secrets de cette maison étrange.",
    reviewHtml: `<p>Shadows House est une curiosité magnifique : un manga d'apparence enfantine qui cache un sous-texte de plus en plus sombre sur la servitude, l'identité et la domination sociale. L'atmosphère gothique est parfaitement construite et le mystère central se déploie avec une patience remarquable.</p><p>La relation entre Kate et Emilico est le coeur du récit, évoluant d'une dynamique maitresse/servante vers quelque chose de plus profond et subversif. Un manga rare qui mérite d'être découvert sans rien savoir de ses révélations.</p>`,
    pros: ["Concept original et atmosphère unique", "Sous-texte social intelligent et bien mené", "Progression du mystère bien dosée"],
    cons: ["Rythme très lent au début", "Certains arcs tardifs moins percutants"],
    tags: "Mystère · Fantastique · Surnaturel · Seinen",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Shadows+House", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Shadows+House", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Shadows+House+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [
      { name: "Crunchyroll", url: "https://www.crunchyroll.com/series/GVWU0KQZD/shadows-house", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" },
    ],
  },
  {
    slug: "spice-wolf",
    title: "Spice and Wolf",
    synopsis: "Lawrence, marchand itinérant, découvre dans un chariot de foin une jeune femme à oreilles de loup : Holo, ancienne déité des moissons. Il accepte de l'amener vers son pays natal dans le nord. Ensemble, ils sillonnent les routes médiévales en mêlant commerce, ruse et romance naissante.",
    reviewHtml: `<p>Unique en son genre, Spice and Wolf brille par ses dialogues ciselés et sa romance lente et sophistiquée entre deux esprits brillants. Holo est un personnage féminin extraordinaire, espiègle, sage et touchant à la fois. Les arcs économiques sur le commerce médiéval sont étonnamment captivants une fois qu'on accepte leur rythme.</p><p>La relation entre Lawrence et Holo est construite sur l'égalité intellectuelle et le respect mutuel, ce qui en fait l'une des romances les plus adultes et satisfaisantes du manga/light novel. Un classique qui prend son temps et récompense la patience.</p>`,
    pros: ["Dialogues brillants et subtils", "Holo personnage féminin exceptionnel", "Romance adulte et intelligente"],
    cons: ["Arcs commerciaux peuvent sembler abstraits", "Rythme lent qui nécessite de la patience"],
    tags: "Aventure · Romance · Fantasy · Seinen",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Spice+and+Wolf", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Spice+and+Wolf", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Spice+and+Wolf+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [
      { name: "Crunchyroll", url: "https://www.crunchyroll.com/series/G6NQ5DWZ6/spice-and-wolf", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" },
    ],
  },
  {
    slug: "black-cat",
    title: "Black Cat",
    synopsis: "Train Heartnet, surnommé 'Black Cat', était le tueur numéro XIII de l'organisation Chronos. Après avoir rencontré une chasseuse de primes nommée Saya, il quitte l'organisation et devient lui-même chasseur de primes, au grand désespoir de son ancien partenaire Creed qui veut le voir revenir.",
    reviewHtml: `<p>Black Cat est un shonen action divertissant avec un protagoniste charismatique et un univers bien construit mêlant assassins d'élite, mercenaires et pouvoirs spéciaux. Les combats sont dynamiques, le design des personnages soigné (Kentaro Yabuki a un trait élégant), et la galerie de personnages secondaires est mémorable.</p><p>Si l'histoire reste dans les rails du genre sans grande surprise, elle le fait avec une efficacité et un style certains. Un bon shonen d'action de la génération Shonen Jump des années 2000, parfait pour les fans du genre.</p>`,
    pros: ["Protagoniste charismatique et design soigné", "Combats dynamiques bien chorégraphiés", "Bonne galerie de personnages"],
    cons: ["Scénario sans grandes surprises", "Antagoniste principal peu convaincant"],
    tags: "Action · Aventure · Sci-fi · Shonen",
    category: "manga",
    stars: 3,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Black+Cat+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Black+Cat+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Black+Cat+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "twin-star-exorcists",
    title: "Twin Star Exorcists",
    synopsis: "Rokuro rêve d'être chanteur depuis son traumatisme avec les Kegare, des esprits maléfiques. Mais une prophétie fait de lui et de Benio les 'Twin Stars Exorcists', destinés à engendrer l'exorciste ultime. Obligés de collaborer, ils apprennent peu à peu à s'apprécier dans leurs combats contre les Kegare.",
    reviewHtml: `<p>Twin Star Exorcists démarre comme une comédie romantique entre exorcistes avant de basculer dans un shonen d'action sérieux et ambitieux. La progression des deux protagonistes est bien gérée, et les arcs d'action gagnent considérablement en ampleur et en intensité au fil des volumes.</p><p>La mythologie des Kegare et des Exorcistes est inventive, et Yoshiaki Sukeno sait alterner moments de légèreté et confrontations épiques. Un shonen solide qui prend le temps de construire ses personnages avant de les mettre à l'épreuve.</p>`,
    pros: ["Dynamique protagonistes bien écrite", "Bonne montée en puissance narrative", "Mythologie des esprits inventive"],
    cons: ["Début confus dans son ton", "Rythme inégal entre les arcs"],
    tags: "Action · Fantasy · Romance · Shonen",
    category: "manga",
    stars: 3,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Twin+Star+Exorcists", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Twin+Star+Exorcists", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Twin+Star+Exorcists+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [
      { name: "Crunchyroll", url: "https://www.crunchyroll.com/series/G9VHN9J96/twin-star-exorcists", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" },
    ],
  },
  {
    slug: "xxxholic",
    title: "xxxHOLiC",
    synopsis: "Kimihiro Watanuki voit des esprits depuis son enfance. Par hasard, il pousse la porte d'une boutique mystérieuse tenue par Yuko Ichihara, la 'Sorcière des Dimensions'. Pour que celle-ci lui retire ses pouvoirs, il accepte de travailler pour elle. Ses missions vont le confronter à la nature des désirs humains.",
    reviewHtml: `<p>xxxHOLiC est l'oeuvre la plus mature et philosophique de CLAMP. Yuko est un personnage fascinant, dispensant sagesse et mélancolie à chaque apparition. Les histoires courtes sur la nature des désirs, du hasard et du karma sont d'une profondeur rare dans le manga, et l'atmosphère est absolument unique.</p><p>Le dessin est épuré et élégant, les lignes allongées à l'extrême créant un esthétisme propre à CLAMP à son meilleur. La connexion avec Tsubasa enrichit les deux oeuvres, mais xxxHOLiC fonctionne parfaitement en solitaire.</p>`,
    pros: ["Philosophie sur le désir et le karma fascinante", "Personnage de Yuko inoubliable", "Atmosphère mystérieuse et envoûtante"],
    cons: ["Rythme contemplatif qui peut frustrer", "Connexion avec Tsubasa parfois nécessaire"],
    tags: "Surnaturel · Mystère · Drame · Seinen",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=xxxHOLiC", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=xxxHOLiC", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=xxxHOLiC+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "tsubasa-reservoir-chronicle",
    title: "Tsubasa RESERVoir CHRoNiCLE",
    synopsis: "Syaoran doit parcourir des mondes parallèles pour récupérer les plumes de Sakura dont la mémoire a été dispersée. Accompagné de Kurogane, Fai et du Mokona, il affronte des dimensions différentes dans une quête qui cache une vérité bien plus sombre et déchirante que prévu.",
    reviewHtml: `<p>Tsubasa est une épopée fantastique ambitieuse signée CLAMP, qui joue avec les reprises de personnages de leurs autres oeuvres (Sakura et Syaoran de Cardcaptor Sakura, Kurogane de Tokyo Babylon, etc.). La narration devient de plus en plus dense et mind-bending dans ses arcs tardifs, avec des retournements narratifs déchirants.</p><p>Les fans de CLAMP y trouveront un véritable monument méta-textuel. La conclusion est parmi les plus ambitieuses du shonen manga, même si elle nécessite d'avoir suivi xxxHOLiC pour en apprécier toute la portée.</p>`,
    pros: ["Univers multimondes inventif", "Retournements narratifs majeurs et déchirants", "Fan service CLAMP maîtrisé"],
    cons: ["Fin difficile à suivre pour les non-initiés à CLAMP", "Rythme inégal entre les arcs"],
    tags: "Action · Aventure · Fantasy · Drame",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Tsubasa+Reservoir+Chronicle", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Tsubasa+Reservoir+Chronicle", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Tsubasa+Reservoir+Chronicle+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "tokyo-babylon",
    title: "Tokyo Babylon",
    synopsis: "Subaru Sumeragi, 16 ans, est le 13e maître onmyoji du clan Sumeragi. Avec sa jumelle Hokuto et l'énigmatique Seishiro Sakurazuka, il utilise ses pouvoirs pour aider les Tokyoïtes en souffrance. Mais une prophétie lie Subaru et Seishiro d'une façon bien plus sombre et tragique qu'il ne peut l'imaginer.",
    reviewHtml: `<p>Premier volet du diptyque CLAMP avec X/1999, Tokyo Babylon est une tragédie à l'esthétique années 90 absolument unique. La relation complexe entre Subaru et Seishiro est parmi les plus mémorables du manga, construite sur un mensonge fondateur dont la révélation est dévastante.</p><p>Les histoires courtes initiales explorent la ville de Tokyo et ses habitants avec une sensibilité sociale remarquable pour l'époque. Un manga court mais d'une densité émotionnelle rare, indispensable pour comprendre X/1999.</p>`,
    pros: ["Relation protagoniste/antagoniste d'une rareté troublante", "Ambiance Tokyo moderne + mysticisme unique", "Fond tragique d'une grande puissance"],
    cons: ["Histoires courtes inégales au début", "Conclusion nécessite X/1999"],
    tags: "Surnaturel · Drame · Romance · Shojo",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Tokyo+Babylon", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Tokyo+Babylon", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Tokyo+Babylon+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "say-i-love-you",
    title: "Say I Love You",
    synopsis: "Mei Tachibana a grandi sans amis suite à un traumatisme d'enfance. Elle vit seule, sans vouloir de relations. Tout change quand elle blesse accidentellement Yamato Kurosawa, le garçon le plus populaire du lycée, qui décide inexplicablement de lui donner son numéro de téléphone.",
    reviewHtml: `<p>Say I Love You est un shojo romantique sincère et honnête sur le fait d'apprendre à faire confiance aux autres. Mei n'est pas une héroïne facile, son traumatisme est réel et sa méfiance compréhensible. La façon dont la série traite ses difficultés sans les résoudre par magie est appréciable.</p><p>La relation avec Yamato est construite avec soin, et la série aborde des sujets comme le cyber-harcèlement et la pression sociale avec une franchise bienvenue. Un shojo solide et émouvant qui ne trahit jamais ses personnages.</p>`,
    pros: ["Héroïne avec une vraie profondeur psychologique", "Traitement honnête des traumatismes sociaux", "Romance bien développée"],
    cons: ["Rythme parfois lent", "Yamato trop parfait pour être crédible"],
    tags: "Drame · Romance · Quotidien · Shojo",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Say+I+Love+You", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Say+I+Love+You+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Say+I+Love+You+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "accel-world",
    title: "Accel World",
    synopsis: "Haruyuki Arita, lycéen boulot et brimé, est recruté par la mystérieuse Kuroyukihime dans un jeu de réalité augmentée ultra-secret : Brain Burst. En accélérant la perception du temps, les joueurs s'affrontent pour atteindre le niveau 10, ce qu'aucun n'a encore jamais accompli.",
    reviewHtml: `<p>Du même auteur que Sword Art Online, Accel World est une oeuvre plus intime et psychologiquement riche. Haruyuki est un protagoniste inhabituel pour le genre : un garçon en surpoids, sans confiance en lui, dont la croissance intérieure est le vrai enjeu de la série. Le concept de 'Brain Burst' est inventif.</p><p>Le manga capture bien l'angoisse adolescente de ne pas être à la hauteur et de devoir surmonter ses complexes. Les combats d'avatars numériques sont visuellement spectaculaires, et la relation avec Kuroyukihime est un moteur narratif efficace.</p>`,
    pros: ["Protagoniste psychologiquement profond et inhabituel", "Système de jeu inventif et bien développé", "Thèmes sur la confiance en soi sincères"],
    cons: ["Rythme inégal entre action et introspection", "Certains arcs secondaires longuets"],
    tags: "Action · Sci-fi · Romance · Shonen",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Accel+World", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Accel+World", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Accel+World+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [
      { name: "Crunchyroll", url: "https://www.crunchyroll.com/series/GVWU0M56R/accel-world", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" },
    ],
  },
  {
    slug: "my-little-monster",
    title: "My Little Monster",
    synopsis: "Shizuku Mizutani ne pense qu'à ses études, indifférente à tout le reste. Elle rencontre Haru Yoshida, élève violent et imprévisible suspendu dès la rentrée, quand on lui demande de lui apporter ses cours. Haru, sans expérience des relations humaines, lui déclare immédiatement son amour. Shizuku ne sait pas comment réagir.",
    reviewHtml: `<p>My Little Monster joue avec les codes du shojo romantique en proposant deux personnages fondamentalement anti-conventionnels : une héroïne qui assume son manque d'empathie, et un garçon qui ne comprend pas les codes sociaux. Leur relation est maladroite, drôle et touchante à la fois.</p><p>La comédie romantique fonctionne bien, et la série aborde avec honnêteté des questions sur ce que signifie vraiment aimer quelqu'un. Les personnages secondaires sont bien développés. Un shojo frais et un peu différent des standards du genre.</p>`,
    pros: ["Duo protagoniste original et drôle", "Comédie romantique fraîche et sincère", "Personnages secondaires bien développés"],
    cons: ["Haru parfois excessivement imprévisible", "Résolution romantique longue à venir"],
    tags: "Comédie · Romance · Quotidien · Shojo",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=My+Little+Monster", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=My+Little+Monster+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=My+Little+Monster+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
];

// Nouvelles entrées à ajouter manuellement (bad matches AniList)
const NEW_ENTRIES = [
  {
    slug: "blue-period",
    title: "Blue Period",
    cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx113399-t9EpLHfD5MVK.jpg",
    synopsis: "Yatora Yaguchi, lycéen brillant mais vide intérieurement, tombe par hasard sous le charme de la peinture lors d'un atelier scolaire. La beauté d'une toile en particulier le bouleverse. Il décide alors de tout quitter pour tenter d'intégrer les Beaux-Arts de Tokyo, l'école la plus difficile du Japon.",
    reviewHtml: `<p>Blue Period est une oeuvre d'art sur l'art lui-même. Tsubasa Yamaguchi capture avec une précision rare les affres de la création, l'angoisse de ne pas savoir si son travail a de la valeur, et la solitude de ceux qui choisissent de vivre pour quelque chose. Le manga ne ment jamais sur la difficulté des Beaux-Arts ni sur le coût émotionnel de vouloir à ce point.</p><p>Chaque personnage rencontré par Yatora est un miroir d'une façon différente d'aborder l'art. Le dessin, sophistiqué et expressif, est lui-même une oeuvre à part entière. Un des meilleurs manga des années 2020, indispensable.</p>`,
    pros: ["Exploration du processus créatif d'une honnêteté rare", "Personnages tous profondément humains", "Dessin expressif et magnifique"],
    cons: ["Rythme lent dans certains arcs de concours", "Monde des Beaux-Arts peu accessible au premier abord"],
    tags: "Drame · Art · Quotidien · Seinen",
    category: "manga",
    stars: 5,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Blue+Period", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Blue+Period+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Blue+Period+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "cross-game",
    title: "Cross Game",
    cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx33504-LnmRXU4xYNSD.jpg",
    synopsis: "Ko Kitamura et Wakaba Tsukishima sont voisins et amis d'enfance. La mort prématurée de Wakaba va transformer profondément Ko et sa soeur Aoba, liant leurs destins autour du baseball et d'un rêve partagé vers le stade national de Koshien.",
    reviewHtml: `<p>Chef-d'oeuvre de Mitsuru Adachi, Cross Game est bien plus qu'un manga de baseball. C'est une méditation douce-amère sur la perte, le temps qui passe et les promesses faites aux disparus. Le dessin dépouillé cache une maîtrise narrative absolue, et chaque case porte un poids émotionnel souvent dévastant.</p><p>Adachi réussit l'exploit de faire du sport le prétexte d'une histoire profondément humaine sur le deuil et la résilience. La relation entre Ko et Aoba, construite sur la rivalité et le silence, est d'une délicatesse exceptionnelle. Un classique absolu.</p>`,
    pros: ["Narration émotionnelle d'une rare maîtrise", "Ambiance nostalgique et mélancolique unique", "Baseball prétexte à une histoire profondément humaine"],
    cons: ["Le dessin dépouillé peut dérouter", "Rythme très lent au début"],
    tags: "Sport · Drame · Romance · Quotidien · Seinen",
    category: "manga",
    stars: 5,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Cross+Game", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Cross+Game+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Cross+Game+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "strobe-edge",
    title: "Strobe Edge",
    cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx37234-MgD7BuTTjX5J.jpg",
    synopsis: "Ninako Kinoshita ne sait pas ce qu'est vraiment tomber amoureux. Quand elle rencontre Ren Ichinose, le garçon le plus populaire du lycée qui est pourtant en couple, elle réalise pour la première fois ce que signifie aimer sans espoir de retour.",
    reviewHtml: `<p>Strobe Edge est un des shojo romantiques les plus honnêtes sur la façon dont on apprend à aimer. Ninako est une héroïne lumineuse dont la naïveté est traitée avec affection plutôt qu'ironie. La série prend le temps d'explorer ce qu'est un amour non partagé avant de laisser une chance aux personnages.</p><p>Io Sakisaka, avant Ao Haru Ride, pose ici les bases de son style : des émotions directes, des personnages sincères, une romance qui ne triche pas. Un shojo court et bien construit, parfait pour découvrir l'autrice.</p>`,
    pros: ["Héroïne lumineuse et sincère", "Traitement honnête de l'amour non partagé", "Manga court et bien rythmé"],
    cons: ["Ren moins développé que Ninako", "Romance qui prend du temps à démarrer"],
    tags: "Drame · Romance · Quotidien · Shojo",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Strobe+Edge", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Strobe+Edge+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Strobe+Edge+manga", logo: "/logos/amazon.png" },
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

// Append new entries
const newEntriesStr = NEW_ENTRIES.map(p => {
  return `{
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
});

content = appendEntries(content, newEntriesStr);
patched += NEW_ENTRIES.length;

writeFileSync(FILE, content, "utf-8");
console.log(`\n✅ ${patched} séries patchées/ajoutées (batch4-lot1)`);
