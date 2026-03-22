/**
 * patch-batch3-lot4.mjs
 * Patche 17 séries seinen/classiques (Urasawa, Akira, Ghost in the Shell, etc.)
 * dans data/series/series-2.ts
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const SERIES_FILE = join(__dirname, "../data/series/series-2.ts");

const patches = [
  {
    slug: "20th-century-boys",
    title: "20th Century Boys",
    category: "manga",
    tags: "Drame · Mystère · Science-fiction · Thriller · Seinen",
    stars: 5,
    synopsis: "Kenji Endo, gérant d'une supérette, découvre que les symboles d'un \"livre de prophéties\" qu'il avait créé avec ses amis enfants sont maintenant associés à des attentats terroristes réels orchestrés par un mystérieux \"Ami\". Une enquête qui mêle nostalgie des années 70, conspiration mondiale et amitié d'enfance sur des décennies.",
    pros: ["Construction narrative d'une complexité impressionnante", "Utilisation de la nostalgie comme moteur émotionnel unique", "Révélations calibrées avec précision sur 24 volumes", "Personnage de l'Ami, mystère maintenu magistralement"],
    cons: ["L'arc 21st Century Boys final moins fort", "Quelques longueurs dans les arcs intermédiaires"],
    reviewHtml: `<p>20th Century Boys est le chef-d'oeuvre de la narration manga. Naoki Urasawa a construit sur 24 volumes une fresque générationnelle d'une complexité et d'une cohérence remarquables, où chaque révélation redéfinit ce qu'on croyait comprendre depuis le début.</p><p>La gestion du temps est le tour de force de la série : Urasawa jongle entre les années 60-70 de l'enfance de Kenji et le présent du complot, avec des flash-forwards vers un futur dystopique, sans jamais perdre le fil ou le lecteur. La façon dont les symboles innocents d'une bande d'enfants deviennent les emblèmes d'une secte terroriste mondiale est glaçante.</p><p>Le mystère de l'identité de l'Ami est l'un des plus grands suspenses de l'histoire du manga, maintenu avec habileté jusqu'à une révélation parfaitement servie. La nostalgie pour les années 70 japonaises est un moteur émotionnel unique qui donne à l'oeuvre une saveur incomparable. Une oeuvre majeure.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=20th+century+boys+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=20th+century+boys+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=20th-century-boys", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "pluto",
    title: "Pluto",
    category: "manga",
    tags: "Action · Drame · Science-fiction · Thriller · Seinen",
    stars: 5,
    synopsis: "Inspiré d'un arc d'Astro Boy, Pluto suit Gesicht, robot-détective d'Europol, enquêtant sur l'assassinat des sept robots les plus puissants du monde. Une relecture en seinen de l'univers d'Osamu Tezuka qui explore les thèmes de l'humanité, de la haine et de ce que signifie avoir une âme dans un monde post-guerre des robots.",
    pros: ["Relecture respectueuse et brillante de l'univers Tezuka", "Thèmes sur la guerre et la haine d'une profondeur rare", "Gesicht, robot-protagoniste parmi les plus touchants du manga", "Révélation finale dévastatrice et parfaite"],
    cons: ["8 volumes seulement, certains auraient voulu plus", "Connaissance d'Astro Boy enrichit mais n'est pas indispensable"],
    reviewHtml: `<p>Pluto est le miracle de l'adaptation manga : prendre un arc classique d'Astro Boy et le transformer en un thriller de science-fiction adulte d'une profondeur philosophique extraordinaire. Naoki Urasawa et Takashi Nagasaki ont créé quelque chose qui honore l'oeuvre de Tezuka tout en la transcendant.</p><p>La question centrale du manga, répétée sous des formes multiples : qu'est-ce qui crée la haine ? Pourquoi des êtres créés pour la paix finissent-ils par se battre ? Ces questions sont explorées à travers Gesicht, robot qui enquête sur ses semblables tout en portant ses propres traumatismes enfouis.</p><p>La révélation finale sur l'identité et la nature de Pluto est d'une beauté et d'une tristesse dévastatrice. Huit volumes pour une oeuvre complète, dense et parfaite. Pluto est la preuve qu'Urasawa est l'un des plus grands auteurs de manga de tous les temps.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=pluto+manga+urasawa&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=pluto+manga+urasawa", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=pluto", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "billy-bat",
    title: "Billy Bat",
    category: "manga",
    tags: "Drame · Mystère · Thriller · Historique · Seinen",
    stars: 4,
    synopsis: "Kevin Yamagata, dessinateur américain d'origine japonaise dans les années 50, crée un comic strip de détective nommé Billy Bat. Quand il découvre que le personnage existe déjà au Japon depuis des siècles, il plonge dans une conspiration qui traverse les grandes catastrophes de l'Histoire humaine : assassinats, guerres, révolutions.",
    pros: ["Ambition narrative et historique hors normes", "Connexion des événements historiques réels fascinante", "Urasawa maîtrise toujours la tension et les révélations", "Fin ambitieuse qui pousse la mythologie à l'extrême"],
    cons: ["Moins accessible que Monster ou 20th Century Boys", "Certains lecteurs trouvent la conclusion trop mystique"],
    reviewHtml: `<p>Billy Bat est l'oeuvre la plus ambitieuse et la plus étrange de Naoki Urasawa. Collaborant avec Takashi Nagasaki, il a construit un manga qui traverse les siècles, mêlant histoire réelle et fiction pour créer une conspiration d'une portée cosmique.</p><p>Le pitch de base (un personnage de dessin animé qui influence l'histoire de l'humanité) devient le prétexte pour revisiter les grandes catastrophes du XXe siècle sous un angle alternatif. L'assassinat de Kennedy, Hiroshima, la montée du nazisme, tous reliés par la présence mystérieuse de la chauve-souris Billy.</p><p>Plus exigeant et plus expérimental que les autres oeuvres d'Urasawa, Billy Bat récompense le lecteur patient avec une mythologie unique et des connexions qui font froid dans le dos. Pas le meilleur point d'entrée dans l'oeuvre d'Urasawa, mais un complément fascinant pour les fans.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=billy+bat+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=billy+bat+manga+urasawa", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=billy-bat", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "yawara",
    title: "Yawara!",
    category: "manga",
    tags: "Comédie · Drame · Sport · Seinen · Judo",
    stars: 3,
    synopsis: "Yawara Inokuma, petite-fille d'un grand maître de judo, est une prodige des arts martiaux qui rêve simplement d'une vie de lycéenne normale. Son grand-père rêve de la voir représenter le Japon aux Jeux Olympiques. Une comédie sportive de Naoki Urasawa, avant ses grands thrillers, centrée sur les JO de Barcelone 1992.",
    pros: ["Comédie légère et efficace", "Yawara personnage attachant malgré elle", "Urasawa déjà maître de la narration sportive"],
    cons: ["Beaucoup moins ambitieux que les oeuvres tardives d'Urasawa", "Certains gags de comédie des années 90 ont vieilli"],
    reviewHtml: `<p>Yawara ! est la série qui a lancé la carrière de Naoki Urasawa dans les années 80-90. Avant Monster et 20th Century Boys, il signait une comédie sportive légère et attachante sur le judo olympique féminin.</p><p>Yawara est un personnage réussi : une prodige malgré elle, qui subit son destin sportif avec humour et résistance. Les situations comiques autour de sa double vie (star du judo vs lycéenne lambda qui veut être normale) sont efficaces et bien rythmmées.</p><p>C'est une oeuvre mineure dans la discographie d'Urasawa, mais elle révèle déjà ses qualités de base : personnages vivants, sens du rythme et capacité à créer des moments émotionnels forts dans le sport. Pour les fans d'Urasawa qui veulent tout lire, ou pour ceux qui aiment le manga sportif léger.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=yawara+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=yawara+manga+urasawa", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=yawara", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "master-keaton",
    title: "Master Keaton",
    category: "manga",
    tags: "Aventure · Drame · Historique · Mystère · Seinen",
    stars: 4,
    synopsis: "Taichi Keaton est archéologue, instructeur au SAS britannique et enquêteur pour le Lloyd's de Londres. À travers l'Europe et le monde, il résout des affaires d'assurance complexes en utilisant son expertise historique, ses compétences de survie et son intelligence exceptionnelle. Un manga d'aventures intellectuelles et humanistes.",
    pros: ["Format anthologique permettant une grande variété", "Keaton, protagoniste intellectuellement fascinant", "Richesse historique et géographique exceptionnelle", "Humanisme profond dans chaque arc"],
    cons: ["Format épisodique peu propice aux grands arcs narratifs", "Le fil directeur familial parfois ténu"],
    reviewHtml: `<p>Master Keaton est la grande oeuvre méconnue de Naoki Urasawa, co-écrite avec Hokusei Katsushika. C'est un manga anthologique d'une richesse culturelle et intellectuelle rare, où chaque chapitre est une petite leçon d'histoire européenne, de géographie ou de survie.</p><p>Taichi Keaton est un personnage unique dans le manga : un archéologue-espion-enquêteur dont la force principale n'est pas physique mais intellectuelle. Sa connaissance de l'histoire des civilisations lui permet de résoudre les problèmes par la ruse et la compréhension des contextes humains.</p><p>La série est un voyage à travers une Europe post-Guerre Froide vue par un Japonais fasciné par ses complexités culturelles. Chaque arc est une petite nouvelle complète, avec sa propre logique et son émotion. Pour les lecteurs qui aiment l'aventure intelligente et humaniste.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=master+keaton+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=master+keaton+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=master-keaton", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "asadora",
    title: "Asadora!",
    category: "manga",
    tags: "Aventure · Drame · Historique · Mystère · Seinen",
    stars: 4,
    synopsis: "Asa Asada, fille d'une famille nombreuse de Nagoya, se retrouve coincée avec un vieux pilote pendant le typhon Vera de 1959. Cette rencontre initie un récit qui traverse les décennies du Japon d'après-guerre, de la reconstruction aux menaces mystérieuses qui pèsent sur le pays, avec en toile de fond les grandes catastrophes naturelles.",
    pros: ["Urasawa de retour en grande forme", "Reconstitution historique du Japon d'après-guerre magnifique", "Asa personnage de fille forte et originale", "Mystère construit avec patience"],
    cons: ["Publication lente, toujours en cours", "Certains mystères tardent à se révéler"],
    reviewHtml: `<p>Asadora ! est la série en cours de Naoki Urasawa, commencée en 2018, et elle confirme que l'auteur n'a rien perdu de ses qualités. On retrouve sa marque de fabrique : personnages vivants, ancrage historique précis et mystère construit patiemment.</p><p>Le Japon d'après-guerre est rendu avec une fidélité et une affection remarquables. La reconstitution de Nagoya dans les années 50-60, puis l'évolution vers l'ère moderne, crée un voyage temporel fascinant à travers les grandes transformations du pays. Asa est une héroïne au caractère fort et rafraîchissant.</p><p>La série est encore en cours de publication, mais ce qui est paru suffit à confirmer qu'Urasawa travaille à nouveau sur quelque chose de grand. Les fans de l'auteur doivent la suivre dès maintenant.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=asadora+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=asadora+manga+urasawa", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=asadora", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "soil",
    title: "SOIL",
    category: "manga",
    tags: "Drame · Horreur · Mystère · Psychologie · Seinen",
    stars: 4,
    synopsis: "Dans la ville-dortoir idéale de New Town, une famille disparaît du jour au lendemain sans la moindre explication. Deux détectives enquêtent sur ce mystère impossible, dévoilant progressivement les secrets et les névroses qui se cachent derrière la façade de perfection de cette communauté modèle.",
    pros: ["Atmosphère de malaise et de paranoia absolument maîtrisée", "Critique sociale de la banlieue japonaise remarquablement incisive", "Style graphique expressionniste unique", "Mystère maintenu avec une rare cohérence"],
    cons: ["Fin qui peut décevoir ceux qui cherchent des réponses claires", "Style graphique très particulier qui peut rebuter"],
    reviewHtml: `<p>SOIL de Atsushi Kaneko est l'un des thrillers atmosphériques les plus oppressants du manga moderne. La ville de New Town, construite pour être le modèle de la communauté idéale, devient progressivement un espace cauchemardesque où la perfection de surface cache une folie collective.</p><p>Kaneko utilise un style graphique expressionniste très éloigné des codes habituels du manga pour créer une atmosphère de malaise permanent. Les personnages sont dessinés avec des visages qui expriment une anxiété sourde même dans les moments quotidiens. Cette esthétique particulière amplifie le sentiment de quelque chose qui cloche sans jamais pouvoir le nommer.</p><p>La critique de la banlieue-dortoir japonaise et de ses injonctions à la normalité est implacable. SOIL est une oeuvre exigeante qui récompense le lecteur disposé à habiter son malaise plutôt qu'à le résoudre.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=soil+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=soil+manga+kaneko", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=soil", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "biomega",
    title: "BioMega",
    category: "manga",
    tags: "Action · Science-fiction · Post-apocalyptique · Seinen",
    stars: 3,
    synopsis: "Dans un futur post-apocalyptique dominé par un virus qui transforme les humains en zombies, l'agent Zouichi Kanoe parcourt les villes dévastées sur sa moto pour trouver les êtres immuns. Accompagné de son IA de bord, il fait face à des corporations et des entités menaçant ce qui reste de l'humanité.",
    pros: ["Esthétique science-fiction dense et originale", "Action effrénée sans temps mort", "Atmosphère post-apo très immersive"],
    cons: ["Scénario cryptique difficile à suivre par moments", "Personnages peu développés au profit de l'action"],
    reviewHtml: `<p>BioMega est le manga de science-fiction apocalyptique de Tsutomu Nihei (auteur de Blame!), et il porte toutes les marques de son créateur : une esthétique dense et oppressante, une action frénétique dans des espaces architecturaux gigantesques et un scénario qui privilégie l'atmosphère à la clarté narrative.</p><p>Pour les lecteurs qui apprécient Nihei, c'est une exploration fascinante de sa vision d'un futur posthumain. La moto et l'IA de Zouichi créent une dynamique légèrement plus dynamique que Blame!, avec plus d'action et moins de contemplation architecturale.</p><p>Pour les autres, l'opacité narrative peut être un frein sérieux. BioMega fonctionne mieux comme expérience visuelle et atmosphérique que comme histoire. Un manga pour les amateurs de SF sombre et dense qui acceptent de se laisser porter par l'ambiance.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=biomega+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=biomega+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=biomega", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "goodnight-punpun",
    title: "Goodnight Punpun",
    category: "manga",
    tags: "Drame · Psychologie · Romance · Tranche de vie · Seinen",
    stars: 5,
    synopsis: "Punpun Onodera, représenté comme une petite icône abstraite dans un monde de personnages réalistes, grandit dans une famille dysfonctionnelle. De l'école primaire à l'âge adulte, on suit ses amours, ses désillusions, sa dépression et sa quête d'un sens à une existence qui ne semble pas lui vouloir de bien. L'oeuvre la plus sombre et la plus belle d'Inio Asano.",
    pros: ["Représentation de la dépression et des traumas d'une justesse bouleversante", "Style graphique hyper-réaliste contrastant avec l'icône abstraite de Punpun", "Honnêteté émotionnelle totale, sans complaisance ni jugement", "Oeuvre unique et inimitable"],
    cons: ["Extrêmement sombre, peut être éprouvant psychologiquement", "Fin qui ne donne pas de réponses faciles"],
    reviewHtml: `<p>Goodnight Punpun est l'une des oeuvres les plus déchirantes jamais créées dans le médium manga. Inio Asano a représenté son protagoniste sous forme d'une petite icône abstraite dans un monde hyper-réaliste pour mieux illustrer le sentiment d'aliénation profonde qui est au coeur du récit.</p><p>C'est un manga sur la façon dont les traumas d'enfance forment les adultes que nous devenons, sur la dépression comme réalité quotidienne plutôt que spectaculaire, sur les relations amoureuses toxiques que créent des individus blessés. Asano ne juge pas ses personnages mais les observe avec une acuité clinique qui fait mal.</p><p>Goodnight Punpun n'est pas une lecture facile ni recommandable à tout le monde. Mais pour ceux qui sont prêts à lui faire face, c'est une expérience émotionnelle d'une profondeur rare, la preuve que le manga peut atteindre les mêmes sommets que la grande littérature.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=goodnight+punpun+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=goodnight+punpun+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=goodnight-punpun", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "homunculus",
    title: "Homunculus",
    category: "manga",
    tags: "Drame · Horreur · Mystère · Psychologie · Seinen",
    stars: 4,
    synopsis: "Susumu Nakoshi, homme sans domicile fixe, accepte de se faire percer le crâne pour une trépanation expérimentale. Après l'opération, son oeil gauche lui révèle les homoncules, les représentations de traumas psychologiques des personnes qu'il croise. Il utilise ce pouvoir pour tenter d'aider les autres, mais plonge progressivement dans sa propre folie.",
    pros: ["Concept psychanalytique original et fascinant", "Exploration des traumas sous une forme visuelle inventive", "Oeuvre de Hideo Yamamoto, auteur d'Ichi the Killer", "Tension psychologique croissante bien gérée"],
    cons: ["Fin très controversée", "Certains homoncules visuellement perturbants"],
    reviewHtml: `<p>Homunculus est un manga d'horreur psychologique hors du commun. Hideo Yamamoto (auteur d'Ichi the Killer) explore ici le territoire de la psychanalyse visuelle avec un concept brillant : représenter les névroses et traumas des individus sous formes de créatures monstrueuses visibles uniquement par le protagoniste.</p><p>La série fonctionne comme une série de cas cliniques illustrés, chaque person rencontré révélant une blessure unique figurée par son homoncule personnel. Ce prétexte permet une exploration variée des traumatismes humains, des plus banals aux plus extrêmes, avec une imagination visuelle remarquable.</p><p>L'arc sur le protagoniste lui-même constitue un sommet de l'oeuvre, quand ses propres traumas commencent à interférer avec sa prétendue objectivité de thérapeute improvisé. La fin est controversée mais cohérente avec la logique interne de la série. Une oeuvre dense pour lecteurs de manga adulte assumé.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=homunculus+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=homunculus+manga+yamamoto", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=homunculus", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "ichi-the-killer",
    title: "Ichi the Killer",
    category: "manga",
    tags: "Action · Horreur · Psychologie · Seinen · Yakuza",
    stars: 3,
    synopsis: "Dans le milieu yakuza de Tokyo, un tueur psychopathe nommé Ichi décime les membres d'un clan. L'énigmatique et masochiste Kakihara part à sa recherche, intrigué par quelqu'un capable de lui infliger de vraies douleurs. Un plongeon dans les bas-fonds de la violence et de la psychologie pathologique sans aucune concession.",
    pros: ["Exploration psychologique des profils violents sans complaisance", "Style graphique efficace pour les scènes d'action extrême", "Kakihara, antagoniste/protagoniste fascinant"],
    cons: ["Violence et contenu sexuel extrêmes qui limitent son public", "Difficile d'en faire une lecture recommandée au premier degré"],
    reviewHtml: `<p>Ichi the Killer est le manga le plus controversé de Hideo Yamamoto, et probablement l'un des plus dérangeants de l'histoire du médium. L'oeuvre plonge dans la violence gratuite et la psychologie pathologique avec une totale absence de censure ou de condamnation morale explicite.</p><p>Kakihara est l'un des personnages les plus troublants du manga yakuza : un masochiste qui cherche une douleur vraie, fasciné par un tueur dont la violence atteint quelque chose d'authentique selon sa logique tordue. La dynamique entre ces deux figures miroir (le sadique et le masochiste inconscient) est la véritable substance de l'oeuvre.</p><p>Ichi the Killer n'est pas recommandable à la plupart des lecteurs : la violence graphique et le contenu sexuel sont délibérément extrêmes. Mais pour les chercheurs de l'extrémité du médium manga, c'est une oeuvre qui a sa logique propre et son influence culturelle (l'adaptation Miike est culte).</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=ichi+the+killer+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=ichi+the+killer+manga", logo: "/logos/amazon.svg" },
    ],
    streaming: [],
  },
  {
    slug: "akira",
    title: "Akira",
    category: "manga",
    tags: "Action · Science-fiction · Cyberpunk · Post-apocalyptique · Seinen",
    stars: 5,
    synopsis: "En 2019, Neo-Tokyo est une mégalopole dystopique construite sur les ruines de la ville détruite en 1988. Kaneda, chef d'un gang de motards, voit son ami Tetsuo acquérir des pouvoirs psychokinésiques incontrôlables liés au mystérieux projet Akira. Une fresque science-fiction monumentale qui a défini le cyberpunk dans le manga et au-delà.",
    pros: ["Oeuvre fondatrice du manga SF et du cyberpunk visuel mondial", "Katsuhiro Otomo, dessin et architecture urbaine d'une richesse extraordinaire", "Ampleur narrative et créativité visuelle sans équivalent de l'époque", "Influence sur toute la culture pop mondiale incalculable"],
    cons: ["Rythme parfois ralenti par l'ampleur de la destruction", "Certains arcs psychédéliques tardifs très denses"],
    reviewHtml: `<p>Akira est simplement l'une des oeuvres les plus importantes de l'histoire du manga, et probablement la plus influente mondialement. Katsuhiro Otomo a publié entre 1982 et 1990 une science-fiction cyberpunk d'une ambition visuelle et narrative sans précédent.</p><p>Les 2000 pages du manga sont un exercice de maîtrise totale : chaque panneau de Neo-Tokyo grouille de détails architecturaux, chaque scène d'action est chorégraphiée avec une précision hallucinante. Le travail sur les décors de la ville détruite et reconstruite est un chef-d'oeuvre d'architecture imaginaire.</p><p>L'adaptation anime de 1988 (réalisée par Otomo lui-même) est culte, mais le manga original lui est supérieur en profondeur narrative et en richesse visuelle. Akira a influencé The Matrix, Ghost in the Shell, et des générations de créateurs occidentaux et japonais. Une lecture obligatoire pour comprendre la culture pop moderne.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=akira+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=akira+manga+otomo", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=akira", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "the-ghost-in-the-shell",
    title: "The Ghost in the Shell",
    category: "manga",
    tags: "Action · Cyberpunk · Philosophie · Science-fiction · Seinen",
    stars: 5,
    synopsis: "Dans un futur proche où les humains peuvent remplacer leur corps par des prothèses cybernétiques, Motoko Kusanagi dirige la Section 9, unité d'élite anti-terroriste. Au fil de ses missions, elle questionne ce qui définit l'identité, la conscience et l'humanité quand le corps devient une machine remplaçable.",
    pros: ["Questionnements philosophiques sur l'identité et la conscience qui anticipent le transhumanisme", "Masanune Shirow, créateur d'un univers SF d'une richesse conceptuelle rare", "Influence sur tout le cyberpunk mondial (Matrix, etc.)", "Action et réflexion parfaitement équilibrées"],
    cons: ["Notes de bas de page très techniques parfois indigestes", "Dessins très chargés qui demandent attention"],
    reviewHtml: `<p>The Ghost in the Shell est la pierre angulaire du cyberpunk philosophique, une oeuvre qui a influencé la SF mondiale d'une façon incalculable. Masamune Shirow a créé un univers dense et cohérent pour poser des questions qui restent d'une actualité brûlante : qu'est-ce qui fait une âme ? Qu'est-ce qui définit l'humain quand le corps peut être remplacé ?</p><p>Motoko Kusanagi est une héroïne remarquable, cyborg de commandement qui questionne sa propre existence avec une curiosité intellectuelle fascinante plutôt qu'une angoisse existentielle paralysante. Sa façon d'habiter le paradoxe (être humaine dans un corps de machine) est le coeur philosophique de l'oeuvre.</p><p>L'adaptation anime de Mamoru Oshii (1995) est culte et a rendu Ghost in the Shell célèbre mondialement. Mais le manga original, plus dense et plus humoristique, est la source indispensable pour comprendre la richesse de cet univers. Une oeuvre fondatrice.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=ghost+in+the+shell+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=ghost+in+the+shell+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=the-ghost-in-the-shell", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "lone-wolf-and-cub",
    title: "Lone Wolf and Cub",
    category: "manga",
    tags: "Action · Drame · Historique · Seinen · Samouraï",
    stars: 5,
    synopsis: "Ogami Itto, ancien bourreau officiel du Shogunat, est trahi et voit sa femme assassinée. Avec son jeune fils Daigoro dans une poussette, il choisit la voie de la mort et devient un assassin itinérant au Japon féodal, traqué par le clan Yagyu qui l'a condamné. Un manga fondateur du seinen d'action historique.",
    pros: ["Oeuvre fondatrice du manga d'action historique adulte", "Dualité père/fils d'une profondeur émotionnelle rare", "Reconstitution du Japon feudal d'une précision et richesse remarquables", "Influence sur tout le cinéma de samouraï occidental"],
    cons: ["Violence très graphique de son époque", "Certains arcs très épisodiques"],
    reviewHtml: `<p>Lone Wolf and Cub (Kozure Ōkami) est le manga fondateur du seinen d'action historique. Créé en 1970 par le scénariste Kazuo Koike et le dessinateur Goseki Kojima, c'est une oeuvre qui a défini les standards de la violence et de la profondeur philosophique dans le manga adulte.</p><p>Le duo Ogami/Daigoro est l'une des grandes créations du manga : un père condamné qui traverse l'Enfer avec son fils trop jeune pour comprendre, les deux liés par une destinée de mort que le père a choisie à la place de son enfant. L'amour paternel exprimé à travers la violence ritualisée est d'une puissance émotionnelle remarquable.</p><p>L'influence de Lone Wolf and Cub sur la culture mondiale est immense : les films de Zatoichi, le western spaghetti, The Road de Cormac McCarthy, et directement Logan de James Mangold lui doivent beaucoup. Un classique absolu à connaître.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=lone+wolf+and+cub+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=lone+wolf+and+cub+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=lone-wolf-and-cub", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "sanctuary",
    title: "Sanctuary",
    category: "manga",
    tags: "Action · Drame · Politique · Thriller · Seinen",
    stars: 4,
    synopsis: "Deux amis survivants du régime des Khmers rouges au Cambodge font un pacte : l'un infiltrera le monde politique japonais légitime, l'autre le monde yakuza, pour transformer le Japon en sanctuaire de liberté et d'ambition. Un thriller politique et criminel d'une ambition narrative rare pour le manga des années 90.",
    pros: ["Thriller politique d'une sophistication rare dans le manga", "Duo de protagonistes complémentaires remarquablement écrits", "Portrait du Japon politique des années 90 lucide et documenté", "Tension narrative maintenue sur toute la série"],
    cons: ["Ancré dans un Japon politique des années 90 qui a vieilli", "Dessin assez basique au service du scénario"],
    reviewHtml: `<p>Sanctuary est le grand manga de politique-fiction japonais, signé par Sho Fumimura (scénario) et Ryoichi Ikegami (dessin), le duo derrière Crying Freeman. Publié entre 1990 et 1995, c'est un thriller sur les coulisses du pouvoir japonais d'une lucidité et d'une sophistication remarquables.</p><p>Le concept de la double infiltration (politique et yakuza) par deux amis aux méthodes opposées mais au but commun est brillant. Il permet d'explorer simultanément les mécanismes du pouvoir légal et illégal, montrant leurs similitudes troublantes. Les deux protagonistes, Hojo et Asami, sont des personnages charismatiques dont la complémentarité est le vrai moteur de la série.</p><p>Sanctuary a vieilli sur certains aspects politiques spécifiques au Japon des années 90, mais sa critique du système politique bureaucratique et ses portraits psychologiques des personnages de pouvoir restent d'une pertinence étonnante. Un classique du manga politique adulte.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=sanctuary+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=sanctuary+manga+ikegami", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=sanctuary", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "mw",
    title: "MW",
    category: "manga",
    tags: "Drame · Horreur · Mystère · Thriller · Seinen",
    stars: 4,
    synopsis: "Michio Yuki, homme d'affaires au charme maléfique, perpètre des crimes terribles, hanté par un gaz chimique (MW) qui l'a dépouillé de toute morale dans son enfance. Seul le prêtre Garai, complice malgré lui de ses crimes passés, connaît la vérité. Un manga noir de Osamu Tezuka explorant le mal sans rédemption.",
    pros: ["Osamu Tezuka dans ses oeuvres adultes les plus sombres", "Antagoniste principal vraiment dérangeant et fascinant", "Exploration du mal sans manichéisme ni rédemption obligatoire", "Critique de la complicité silencieuse bien traitée"],
    cons: ["Contenu de son époque (années 70) sur certains thèmes", "Format courts par rapport à l'ambition"],
    reviewHtml: `<p>MW est le manga le plus noir et le plus controversé d'Osamu Tezuka, le dieu du manga. Publié entre 1976 et 1978, c'est une exploration du mal radical absolument inhabituelle pour un auteur connu pour ses oeuvres humanistes.</p><p>Michio Yuki est l'un des antagonistes les plus dérangeants du manga : beau, charismatique, capable de tout, y compris manipuler les personnes qui l'entourent et les institutions censées le protéger. Tezuka refuse de lui trouver des excuses faciles tout en expliquant comment une catastrophe chimique a pu créer un monstre.</p><p>La relation entre Yuki et Garai, prêtre qui connaît ses crimes mais ne peut les dénoncer sans se dénoncer lui-même, est au coeur d'une réflexion sur la complicité passive face au mal. MW est l'oeuvre de Tezuka pour adultes par excellence, celle qui prouve l'étendue véritable de son talent.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=mw+manga+tezuka&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=mw+manga+tezuka", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=mw", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "the-summit-of-the-gods",
    title: "The Summit of the Gods",
    category: "manga",
    tags: "Aventure · Drame · Historique · Seinen · Alpinisme",
    stars: 5,
    synopsis: "Makoto Fukamachi, photographe au Népal, découvre un appareil photo qui pourrait prouver qu'une expédition britannique a atteint le sommet de l'Everest en 1924, avant Hillary. Cette découverte le met sur la piste de Habu Joji, alpiniste légendaire porté disparu. Un manga épique sur la montagne et l'obsession humaine de l'ascension.",
    pros: ["Reconstitution des grandes expéditions himalayennes d'une précision extraordinaire", "Habu Joji parmi les plus grands protagonistes du manga aventure", "Philosophie de l'alpinisme traitée avec profondeur", "Suspense historique autour du mystère de Mallory"],
    cons: ["Rythme lent et contemplatif", "Froid et minimaliste, pas pour tous les lecteurs"],
    reviewHtml: `<p>The Summit of the Gods (Le Sommet des Dieux) est l'une des grandes oeuvres de l'aventure manga, une fresque épique sur l'alpinisme himalayan et l'obsession humaine de l'impossible. Jiro Taniguchi adapte avec une majesté visuelle remarquable les romans de Baku Yumemakura.</p><p>La question centrale de l'oeuvre est profondément humaine : pourquoi gravit-on des montagnes où l'on risque de mourir ? La réponse que donne Habu Joji, alpiniste radicalement solitaire et asocial, est d'une beauté austère : parce que la montagne est là, et qu'il doit aller plus haut. Cette philosophie de l'absolu est rendue avec une conviction totale.</p><p>Le dessin de Taniguchi est un sommet (sans jeu de mots) du manga réaliste : les paysages himalayens sont d'une beauté glacée, les expressions des alpinistes dans la souffrance extrême d'une justesse anatomique parfaite. The Summit of the Gods est une oeuvre qui fait physiquement sentir le froid et l'altitude. Un chef-d'oeuvre.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=sommet+des+dieux+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=sommet+des+dieux+manga+taniguchi", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=the-summit-of-the-gods", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
];

// ── patcher ──────────────────────────────────────────────────────────────────
let content = readFileSync(SERIES_FILE, "utf-8");

for (const p of patches) {
  const marker = `slug: "${p.slug}"`;
  const idx = content.indexOf(marker);
  if (idx === -1) { console.warn(`⚠️  Non trouvé : ${p.slug}`); continue; }

  let i = idx;
  while (i > 0 && content[i] !== "{") i--;
  const start = i;

  let depth = 0;
  for (i = start; i < content.length; i++) {
    if (content[i] === "{") depth++;
    if (content[i] === "}") { depth--; if (depth === 0) break; }
  }
  const end = i + 1;

  const existingEntry = content.slice(start, end);
  const coverMatch = existingEntry.match(/cover:\s*"([^"]+)"/);
  const coverValue = coverMatch ? `"${coverMatch[1]}"` : '""';

  const replacement = `{
  slug: "${p.slug}",
  title: "${p.title}",
  category: "${p.category}",
  cover: ${coverValue},
  tags: "${p.tags}",
  stars: ${p.stars},
  addedAt: "2026-03-22",
  synopsis: "${p.synopsis.replace(/"/g, '\\"')}",
  pros: ${JSON.stringify(p.pros)},
  cons: ${JSON.stringify(p.cons)},
  reviewHtml: \`${p.reviewHtml}\`,
  shops: ${JSON.stringify(p.shops, null, 2)},
  streaming: ${JSON.stringify(p.streaming)},
  live: []
}`;

  content = content.slice(0, start) + replacement + content.slice(end);
  console.log(`✅ ${p.title}`);
}

writeFileSync(SERIES_FILE, content, "utf-8");
console.log("\n🎉 Patch batch3-lot4 terminé !");
