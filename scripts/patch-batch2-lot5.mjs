/**
 * Patch lot 5/5 — séries finales
 * node scripts/patch-batch2-lot5.mjs
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, "../data/series.ts");

const L  = "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594";
const LF = "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png";
const LA = "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg";
const LC = "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png";
const LN = "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940";

const shopManga  = (q) => [
  { name: "Manganim", url: `https://manganim.fr/search?q=${q}`,                                  logo: L  },
  { name: "Fnac",     url: `https://www.fnac.com/SearchResult/ResultList.aspx?Search=${q}+tome`, logo: LF },
  { name: "Amazon",   url: `https://www.amazon.fr/s?k=${q}+tome`,                                logo: LA },
];
const shopManhwa = (q) => [
  { name: "Fnac",   url: `https://www.fnac.com/SearchResult/ResultList.aspx?Search=${q}`, logo: LF },
  { name: "Amazon", url: `https://www.amazon.fr/s?k=${q}`,                                logo: LA },
];
const cr = (q) => [{ name: "Crunchyroll", url: `https://www.crunchyroll.com/fr/search?q=${encodeURIComponent(q)}`, logo: LC }];
const nf = (q) => [{ name: "Netflix",     url: `https://www.netflix.com/search?q=${encodeURIComponent(q)}`,       logo: LN }];

const PATCHES = {

  "true-beauty": {
    tags: "Romance · Manhwa · Comédie · École",
    stars: 3,
    synopsis: "Lim Jugyeong est une lycéenne complexée par son visage sans maquillage. Après avoir appris l'art du maquillage sur internet, elle devient une beauté reconnue dans sa nouvelle école. Mais deux garçons découvrent sa vraie apparence : Suho, le beau populaire, et Seojun, le rebelle. True Beauty est le webtoon romantique coréen le plus lu de sa génération.",
    pros: ["Phénomène culturel réel qui a touché des millions de lecteurs", "Message sincère sur la confiance en soi et l'acceptation", "Triangle amoureux bien construit avec deux prétendants crédibles"],
    cons: ["Très codifié dans les conventions du romance coréen, peu de surprises", "Certains arcs secondaires excessivement longs", "Représentation du maquillage comme masque obligatoire parfois maladroite"],
    reviewHtml: `<p>True Beauty est le manhwa romantique qui a défini une époque de webtoon. Yaongyi a touché quelque chose d'universel avec Jugyeong : la terreur d'être vue telle qu'on est vraiment, et le masque qu'on construit pour survivre au regard des autres. Ce thème résonne bien au-delà du public cible initial.</p><p>Le triangle amoureux entre Suho et Seojun est efficacement construit, les deux prétendants ayant des personnalités et des dynamiques distinctes avec Jugyeong. La série a su maintenir un suspense romantique réel sur sa longueur, ce qui est déjà un accomplissement dans le genre.</p><p>True Beauty souffre d'une longueur excessive dans ses derniers arcs et d'une représentation du maquillage parfois ambiguë dans son message. Mais en tant que phénomène culturel et comme romance accessible, sa popularité est entièrement méritée.</p>`,
    shops: shopManhwa("True+Beauty+manhwa"),
    streaming: [],
  },

  "undead-unluck": {
    tags: "Action · Surnaturel · Comédie · Shōnen",
    stars: 4,
    synopsis: "Fuuko Izumo a le pouvoir maudit de l'Unluck : tout être vivant qui la touche subit une malchance catastrophique. Andy est un immortel qui cherche désespérément à mourir mais ne le peut pas. Leur rencontre donne naissance à un duo explosif qui intègre l'organisation Union, chargée de gérer les porteurs de pouvoirs négatifs. Undead Unluck est une série d'action créative dont le système de pouvoirs est parmi les plus inventifs du Jump.",
    pros: ["Système de pouvoirs basé sur des concepts abstraits d'une créativité exceptionnelle", "Dynamique Andy-Fuuko de comédie et de romance bien dosée", "Chaque arc introduit de nouveaux pouvoirs originaux qui renouvellent constamment l'action", "Yoshifumi Tozuka a une imagination visuelle débordante"],
    cons: ["Peut sembler chaotique dans ses premiers chapitres le temps que le système soit établi", "Certains arcs médians moins inspirés"],
    reviewHtml: `<p>Undead Unluck est la série la plus créativement ambitieuse du Weekly Shōnen Jump de ces dernières années. Yoshifumi Tozuka a inventé un système de pouvoirs basé sur des concepts négatifs abstraits, l'Unluck, l'Undead, l'Unseen, l'Unfair, chacun avec ses propres règles et ses propres limites, d'une inventivité que très peu de manga ont égalée.</p><p>Andy et Fuuko forment un duo d'une chimie remarquable. Leur relation, qui commence par l'absurde, se construit vers quelque chose d'émotionnellement réel avec une habileté que les fans de romance apprécieront. Les enjeux personnels et cosmiques s'entremêlent de façon satisfaisante.</p><p>Undead Unluck est le genre de manga qu'on recommande à quelqu'un qui veut quelque chose de frais dans le shōnen d'action. Ça ne ressemble pas à grand chose d'autre, et c'est déjà une grande qualité.</p>`,
    shops: shopManga("Undead+Unluck"),
    streaming: cr("Undead Unluck"),
  },

  "uzumaki-spiral-into-horror": {
    tags: "Horreur · Psychologie · Seinen · Junji Ito",
    stars: 5,
    synopsis: "Dans la petite ville côtière de Kurouzu, les habitants commencent à développer une obsession maladive pour la spirale. Des escargots géants aux cheveux qui tournent, des tornades qui aspirent les âmes aux bâtiments qui se tordent en colimaçon, la ville entière est progressivement dévorée par la malédiction de la spirale. Junji Ito signe avec Uzumaki son oeuvre la plus ambitieuse et la plus terrifiante.",
    pros: ["Concept d'horreur d'une originalité absolue, rien d'autre n'y ressemble dans toute la bande dessinée", "Imagination visuelle de Junji Ito au sommet de sa forme sur chaque chapitre", "Escalade progressive et inexorable vers l'horreur cosmique parfaitement dosée", "Finale d'une cohérence et d'une ambition remarquables"],
    cons: ["Certains chapitres isolés moins forts que l'ensemble", "Sujette aux cauchemars, déconseillée avant de dormir"],
    reviewHtml: `<p>Uzumaki est l'oeuvre maîtresse de Junji Ito, et l'une des oeuvres d'horreur les plus originales jamais créées dans n'importe quel médium. Le concept de la spirale comme source de terreur cosmique est d'une simplicité abstraite qui permet une escalade d'inventions visuelles sans limite. Chaque chapitre explore une nouvelle manifestation de la malédiction, et chaque nouvelle manifestation est plus perturbante que la précédente.</p><p>Ce qui rend Uzumaki particulièrement efficace, c'est sa logique interne parfaite. La spirale n'est pas juste un motif décoratif de l'horreur, c'est une force cosmique avec ses propres règles que le manga explore méthodiquement jusqu'à leurs conséquences ultimes. La ville de Kurouzu se transforme selon une progression géométrique cauchemardesque mais rigoureuse.</p><p>L'art de Ito est ici au sommet de ses capacités expressives. Ses doubles pages de transformation architecturale et humaine sont des chefs-d'oeuvre graphiques qui restent gravés dans la mémoire. Un manga à lire absolument, avec les lumières allumées.</p>`,
    shops: shopManga("Uzumaki+Junji+Ito"),
    streaming: [],
  },

  "we-never-learn": {
    tags: "Comédie · Romance · Harem · Shōnen",
    stars: 3,
    synopsis: "Nariyuki Yuiga, lycéen brillant mais sans moyens, obtient une bourse complète en échange d'un défi : faire entrer en fac les deux génies de son lycée, Rizu Ogata en littérature et Fumino Furuhashi en sciences, dans des matières où elles sont désastreuses malgré leur génie dans d'autres domaines. Une comédie romantique harem autour du tutorat.",
    pros: ["Concept original du génie incompétent dans sa matière de rêve", "Bonne dynamique de groupe entre les différentes prétendantes", "Humour de situation efficace dans les sessions de tutorat", "Plusieurs fins alternatives bien exécutées dans les derniers volumes"],
    cons: ["Schéma harem classique sans grandes innovations", "Certaines prétendantes moins développées que d'autres"],
    reviewHtml: `<p>We Never Learn est un harem romantique solide qui exploite bien son concept de base. L'idée que les personnages soient des génies incompétents dans leurs matières de prédilection est une source de situations comiques bien utilisées, et Nariyuki est un protagoniste plus actif que la moyenne du genre.</p><p>La série se distingue par sa gestion des fins alternatives : les derniers volumes offrent plusieurs dénouements possibles selon la prétendante choisie, ce qui est une approche honnête et satisfaisante pour un genre dont la conclusion est toujours la plus difficile à réussir. Pour les fans de comédie romantique lycéenne, c'est un choix fiable.</p>`,
    shops: shopManga("We+Never+Learn"),
    streaming: cr("We Never Learn"),
  },

  "witch-hat-atelier": {
    tags: "Fantasy · Magie · Seinen · Aventure",
    stars: 5,
    synopsis: "Coco rêve de magie depuis toujours, mais dans son monde, la sorcellerie est un talent de naissance réservé à une caste héréditaire. En espionnant une sorcière, elle découvre le secret interdit : la magie s'apprend, elle se trace. Après avoir involontairement pétrifié sa mère, elle est prise comme apprentie par le sorcier Qifrey pour réparer son erreur et apprendre l'art des Chapeaux de Sorcière.",
    pros: ["Art de Kamome Shirahama d'une beauté et d'une précision techniques absolument exceptionnelles", "Worldbuilding de la magie-écriture d'une cohérence et d'une originalité rares", "Thèmes sur l'accessibilité de la connaissance et les systèmes d'exclusion traités avec profondeur", "Rythme contemplatif qui magnifie chaque révélation"],
    cons: ["Rythme de publication très lent, les volumes sortent avec des intervalles importants", "Peu d'action au sens classique, manga avant tout d'atmosphère et de mystère"],
    reviewHtml: `<p>Witch Hat Atelier est peut-être le manga le plus beau visuellement publié en ce moment. Kamome Shirahama dessine chaque page avec une minutie et une maîtrise qui relèvent de l'orfèvrerie. Les sorts, qui se tracent comme des glyphes complexes, sont dessinés avec une précision qui donne à la magie une tangibilité réelle et fascinante.</p><p>Mais Witch Hat Atelier n'est pas que visuellement exceptionnel. Son worldbuilding pose une question subversive : et si la magie n'était pas un don héréditaire mais une technique apprise, et si l'aristocratie magique maintenait ce mensonge pour conserver son pouvoir ? Coco, en découvrant la vérité, devient malgré elle une figure révolutionnaire.</p><p>Les thèmes sur l'exclusion, la transmission du savoir et le coût des systèmes d'élite sont traités avec une intelligence qui transcende le public cible apparent. Witch Hat Atelier est un chef-d'oeuvre en cours de construction. Cinq étoiles mérités dès maintenant.</p>`,
    shops: shopManga("Witch+Hat+Atelier"),
    streaming: [],
  },

  "witchcraft-works": {
    tags: "Fantasy · Romance · Comédie · Seinen",
    stars: 3,
    synopsis: "Honoka Takamiya, lycéen ordinaire, découvre que Ayaka Kagari, la fille la plus populaire de son école, est en réalité une puissante sorcière du Feu dont la mission depuis toujours est de le protéger. Honoka se révèle être porteur d'une puissance dormante que des sorcières opposées à Ayaka cherchent à récupérer. Une fantasy romantique qui inverse les rôles classiques.",
    pros: ["Inversion des rôles de genre fraîche : la fille forte protège le garçon ordinaire", "Ayaka est un personnage d'une froideur et d'un dévouement attachants", "Humour de situation efficace sur l'inversion des conventions"],
    cons: ["Worldbuilding peu approfondi malgré un potentiel évident", "Manque de profondeur narrative sur la longueur"],
    reviewHtml: `<p>Witchcraft Works a une bonne idée de départ : inverser les rôles classiques de la fantasy romantique en faisant de la fille la puissante protectrice et du garçon l'objet de protection. Ayaka Kagari, froide et absolument dévouée à Honoka depuis toujours, est un personnage original dans le genre.</p><p>Le manga exploite correctement cette prémisse sans aller aussi loin qu'il le pourrait dans ses implications. C'est une lecture légère et agréable pour les amateurs de fantasy romantique, sans la profondeur narrative qui lui permettrait de sortir du lot.</p>`,
    shops: shopManga("Witchcraft+Works"),
    streaming: cr("Witchcraft Works"),
  },

  "world-trigger": {
    tags: "Sci-fi · Action · Tactique · Shōnen",
    stars: 4,
    synopsis: "Des créatures appelées Neighbors envahissent la ville de Mikado depuis des portails interdimensionnels. La Frontier Defense Agency Border les combat avec des armures appelées Triggers. Osamu Mikumo, agent de Border de niveau C, rencontre Yuma Kuga, un Neighbor qui veut comprendre le monde des humains. World Trigger est un manga tactique d'une rigueur et d'une profondeur rares.",
    pros: ["Système de combat tactique le plus rigoureusement pensé du manga shōnen", "Aucun personnage n'est fort par magie, tout s'explique par la stratégie et l'entraînement", "Galerie de personnages d'une richesse exceptionnelle avec chacun leur style de combat", "Daisuke Ashihara construit des batailles qui se lisent comme des parties d'échecs"],
    cons: ["Démarrage très lent les premiers volumes", "Interruptions de publication fréquentes à cause de la santé de l'auteur"],
    reviewHtml: `<p>World Trigger est le manga le plus rigoureux intellectuellement dans le genre shōnen d'action. Daisuke Ashihara a construit un système de combat où la tactique prévaut absolument sur la puissance brute. Aucun personnage ne gagne parce qu'il est "plus fort" : il gagne parce qu'il a mieux préparé, mieux lu la situation, mieux utilisé ses ressources. C'est rare et fascinant.</p><p>Le système de Triggers, avec ses innombrables types d'armes et leurs interactions, est l'un des systèmes de pouvoirs les mieux pensés du manga. Chaque combattant a un set unique adapté à son style, et les batailles font des analyses post-match détaillées qui expliquent les décisions prises. C'est du management sportif appliqué aux arts martiaux fantastiques.</p><p>World Trigger récompense le lecteur patient et attentif. Si vous aimez les combats qui font réfléchir autant que regarder, c'est une référence absolue.</p>`,
    shops: shopManga("World+Trigger"),
    streaming: cr("World Trigger"),
  },

  "wotakoi-love-is-hard-for-otaku": {
    tags: "Romance · Comédie · Seinen · Otaku",
    stars: 4,
    synopsis: "Narumi Momose est une fujoshi secrète qui cache sa passion des BL à ses collègues. Elle retrouve par hasard son ancien camarade d'école Hirotaka Nifuji, gamer incurable, qui lui propose sans romantisme excessif de sortir ensemble puisqu'ils sont tous les deux otaku. Une romance entre adultes qui partagent des passions geek et apprennent maladroitement à s'aimer.",
    pros: ["Romance entre adultes au travail, décor rare et bienvenu dans le manga romantique", "Humour sur les passions otaku d'une précision et d'une affection rares", "Hirotaka est un petit ami d'une maladresse et d'une sincérité attendrissantes", "Deux couples secondaires qui enrichissent la dynamique de groupe"],
    cons: ["Progression romantique très lente même pour une seinen romance", "Format de gags courts peut parfois sembler décousu"],
    reviewHtml: `<p>Wotakoi est une bouffée d'air frais dans le manga romantique. Fujita s'intéresse à des adultes qui travaillent, qui ont des passions geek qu'ils gèrent plus ou moins bien, et qui essaient de construire une relation amoureuse avec la même maladresse qu'ils mettent dans tout le reste. C'est agréablement réaliste.</p><p>Hirotaka Nifuji est l'un des petits amis les plus attachants du manga seinen : complètement incapable d'expressions romantiques conventionnelles mais sincèrement investi dans la relation à sa façon. Ses tentatives gauches de faire des "choses de couple" sont d'une drôlerie constante.</p><p>Le manga excelle dans ses moments calmes, quand les personnages jouent ensemble, regardent des animés ou discutent de leurs passions avec un enthousiasme que leurs collègues ne comprennent pas. Wotakoi capture parfaitement ce que c'est d'être avec quelqu'un qui partage vraiment ce qu'on aime.</p>`,
    shops: shopManga("Wotakoi"),
    streaming: cr("Wotakoi: Love is Hard for Otaku"),
  },

  "yahari-ore-no-seishun-love-come-wa-machigatteiru-monologue": {
    tags: "Romance · Psychologie · Seinen · École",
    stars: 4,
    synopsis: "Hachiman Hikigaya, lycéen cynique convaincu que les liens humains sont des illusions, est forcé d'intégrer le Club de Service avec Yukino Yukinoshita, aussi solitaire et acerbe que lui, et Yui Yuigahama, sincère et sociable. À travers les demandes d'autres élèves, ils aident les autres tout en évitant soigneusement de s'aider eux-mêmes. OreGairu est une étude psychologique sur la solitude, l'honnêteté et le coût des relations.",
    pros: ["Hachiman est l'un des protagonistes les plus complexes et les plus honnêtes du manga scolaire", "Dialogue d'une densité philosophique rare sur la nature des liens et de l'authenticité", "Triangle émotionnel Hachiman-Yukino-Yui traité avec une nuance remarquable", "Conclusion honnête qui respecte les contradictions des personnages"],
    cons: ["Très verbal et introspectif, peu adapté aux lecteurs qui cherchent de l'action ou de la légèreté", "L'adaptation manga de la light novel perd parfois en profondeur"],
    reviewHtml: `<p>OreGairu est une des oeuvres les plus honnêtes jamais écrites sur l'adolescence et la peur des relations authentiques. Wataru Watari a créé avec Hachiman Hikigaya un personnage dont le cynisme n'est pas une posture cool mais une stratégie de survie psychologique : si je n'attends rien, je ne serai pas déçu. La voir se fissurer progressivement est l'arc de personnage le plus bien construit du manga scolaire.</p><p>La relation entre Hachiman, Yukino et Yui est d'une complexité émotionnelle qui dépasse largement la romance conventionnelle. Tous trois se protègent avec des mécanismes différents, et leur chemin vers une connexion réelle est parsemé de reculs, de malentendus et de douloureuses honnêtetés.</p><p>OreGairu est lent, dense et parfois épuisant. C'est aussi l'une des représentations les plus justes de comment certains adolescents vivent vraiment l'intériorité. Un manga important pour qui se reconnaît dans Hachiman.</p>`,
    shops: shopManga("OreGairu"),
    streaming: cr("My Teen Romantic Comedy SNAFU"),
  },

  "yokohama-kaidashi-kikou": {
    tags: "Post-apocalyptique · Slice of Life · Seinen · Poétique",
    stars: 5,
    synopsis: "Alpha est un robot androïde gérant un café isolé sur la côte de la baie de Sagami, dans un monde où la civilisation humaine décline doucement. Les océans montent, les villes se vident, mais personne ne semble pressé. Alpha observe, note, photograph, attend que son propriétaire revienne d'un long voyage. YKK est un manga sur la douceur de la fin du monde et la beauté de l'instant qui passe.",
    pros: ["Atmosphère unique et irremplaçable dans toute la bande dessinée mondiale", "Hisai Hitoshi maîtrise le silence et la lumière comme peu d'auteurs", "Méditation apaisante sur la temporalité, la mémoire et ce que signifie vivre", "Alpha est l'un des personnages les plus touchants du manga seinen"],
    cons: ["Rien ne se passe au sens narratif classique, incompatible avec les lecteurs qui cherchent des enjeux", "Difficile à trouver en édition française complète"],
    reviewHtml: `<p>Yokohama Kaidashi Kikou est une oeuvre unique dans toute la bande dessinée mondiale. Hitoshi Ashinano a inventé un genre qu'on pourrait appeler l'apocalypse douce : un monde en fin de course, mais qui s'éteint si lentement et si paisiblement qu'il ressemble moins à une catastrophe qu'à un coucher de soleil très long.</p><p>Alpha, robot androïde qui attend, observe et photographie, est l'un des personnages les plus attachants du manga. Son regard sur le monde humain en déclin est d'une tendresse et d'une curiosité qui transforment chaque moment ordinaire, une tasse de café, une balade à vélo, une conversation avec un voisin, en quelque chose de précieux et d'irremplaçable.</p><p>YKK parle de la mort de la civilisation avec la même légèreté qu'il parle du changement des saisons. C'est une oeuvre qui apprend à regarder les choses avant qu'elles disparaissent. Absolument irremplaçable.</p>`,
    shops: shopManga("Yokohama+Kaidashi+Kikou"),
    streaming: [],
  },

  "your-lie-in-april": {
    tags: "Romance · Musique · Drame · Shōnen",
    stars: 5,
    synopsis: "Kousei Arima était un prodige du piano surnommé la Machine Humaine pour sa précision mécanique, jusqu'au jour où, à la suite du décès de sa mère tyrannique et aimante à la fois, il devient incapable d'entendre sa propre musique. Deux ans plus tard, il rencontre la violoniste Kaori Miyazono, imprévisible et lumineuse, qui va le forcer à remonter sur scène et à ressentir à nouveau.",
    pros: ["L'une des histoires d'amour les plus dévastatrices et les plus belles du manga", "Représentation musicale visuelle d'une poésie et d'une originalité remarquables", "Kaori Miyazono est un personnage inoubliable dont la présence illumine chaque page", "Conclusion parmi les plus courageuses et les plus déchirantes du manga romantique"],
    cons: ["Très éprouvant émotionnellement, déconseillé en état de fragilité", "Certains flashbacks de l'enfance de Kousei sont difficiles à traverser"],
    reviewHtml: `<p>Your Lie in April est l'un des manga les plus douloureux et les plus beaux qu'on puisse lire. Naoshi Arakawa raconte une histoire d'amour et de musique avec une sincérité totale, sans jamais mentir à son lecteur sur où ça va, et cette honnêteté rend chaque chapitre à la fois lumineux et insupportable.</p><p>Kaori Miyazono est un personnage d'exception. Elle incarne quelque chose d'absolument singulier : la joie totale de vivre dans le présent, même quand le présent est tout ce qu'il reste. Son influence sur Kousei n'est pas celle d'une muse passive, c'est une force active qui choisit de donner tout ce qu'elle a.</p><p>La représentation visuelle de la musique dans Your Lie in April est l'une des réalisations graphiques les plus remarquables du manga. Arakawa traduit le son en lumière, en mouvement, en pages qui semblent résonner. C'est une oeuvre qui fait entendre ce qu'on ne peut pas voir.</p><p>Your Lie in April vous brisera. Et vous vous en souviendrez toute votre vie.</p>`,
    shops: shopManga("Your+Lie+in+April"),
    streaming: nf("Your Lie in April"),
  },

  "yu-gi-oh": {
    tags: "Jeux · Action · Surnaturel · Shōnen",
    stars: 4,
    synopsis: "Yugi Muto est un lycéen timide qui résout le Puzzle du Millénaire, un artéfact égyptien mystérieux. Il est dès lors habité par l'esprit d'un ancien pharaon dont la mémoire est effacée. Cet alter ego Yami Yugi joue des Jeux des Ténèbres contre les ennemis de Yugi, punissant les tricheurs et les malfaisants. La série évolue progressivement vers le jeu de cartes Duel Monsters qui a connu un succès mondial phénoménal.",
    pros: ["Impact culturel mondial immense : le jeu de cartes a généré des milliards de revenus", "L'arc du Memory World et la révélation sur le passé du pharaon sont emotionnellement forts", "La dualité Yugi/Yami est une des meilleures dynamiques de double personnage du manga", "Premiers arcs variés avec des jeux inventifs au-delà du seul Duel Monsters"],
    cons: ["Premiers arcs plus sombres et violents très différents du Duel Monsters qui a suivi", "Les règles de Duel Monsters sont parfois difficiles à suivre sans connaître le jeu"],
    reviewHtml: `<p>Yu-Gi-Oh est le manga qui a lancé l'une des franchises de jeux de cartes les plus lucratives de l'histoire. Kazuki Takahashi avait initialement une vision bien différente : un manga de jeux variés et sombres, où Yami Yugi punissait les méchants par des Jeux des Ténèbres dont les enjeux allaient bien au-delà du loisir. Cette version originale est plus adulte et plus inventive que la série Duel Monsters qu'elle est devenue.</p><p>La dualité entre le timide Yugi et l'altier Yami est l'un des dispositifs narratifs les plus efficaces du shōnen. Leur relation évolue d'une cohabitation vers une véritable amitié et une compréhension mutuelle, et l'arc final sur le passé du pharaon est un climax émotionnel à la hauteur de toute la série.</p><p>Yu-Gi-Oh a vieilli différemment selon ses arcs. Les premiers volumes ont une noirceur fascinante que la franchise officielle a oubliée. L'arc Duel Monsters reste le coeur populaire pour une raison : il est bien construit et émotionnellement généreux.</p>`,
    shops: shopManga("Yu-Gi-Oh"),
    streaming: cr("Yu-Gi-Oh"),
  },

  "zom-100-bucket-list-of-the-dead": {
    tags: "Comédie · Horreur · Action · Seinen",
    stars: 4,
    synopsis: "Akira Tendo, salaryman épuisé par trois ans de travail dans une entreprise toxique, se réveille un matin face à une apocalypse zombie. Sa réaction : un soulagement total. Il n'a plus à aller au travail. Avec une énergie retrouvée, il dresse sa liste de cent choses à faire avant de devenir zombie, et part à travers le Japon infesté accomplir chacune d'entre elles avec un enthousiasme désarmant.",
    pros: ["Concept original et subversif : l'apocalypse comme libération d'un travail oppressif", "Akira est un protagoniste d'une joie de vivre communicative et contagieuse", "Critique sociale sur le karoshi et la culture de travail japonaise pertinente et bien amenée", "Équilibre parfait entre humour, action et émotion"],
    cons: ["Arcs tardifs perdent un peu de la fraîcheur initiale", "Le message optimiste peut sembler naïf dans les situations les plus sombres"],
    reviewHtml: `<p>Zom 100 est l'apocalypse zombie la plus joyeuse jamais mise en scène. Haro Aso et Kotaro Takata ont eu l'idée brillante de faire de la fin du monde une libération : Akira Tendo, que trois ans dans une entreprise de karoshi avaient transformé en zombie avant l'heure, retrouve toute sa vitalité au moment précis où les vrais zombies débarquent.</p><p>Le manga fonctionne comme une critique sociale déguisée en comédie d'action. La liste de cent choses à faire est un inventaire de tout ce qu'une vie de salaryman sacrifie, et chaque item accompli est une petite victoire contre le système qui avait détruit Akira. C'est subversif, généreux et parfaitement calibré.</p><p>Akira est un protagoniste rare dans le manga : quelqu'un qui choisit explicitement la joie, qui court vers la vie plutôt que de fuir la mort. Dans un genre dominé par la survie anxieuse, sa philosophie est une bouffée d'air frais. Un manga qui donne envie de vivre sa liste.</p>`,
    shops: shopManga("Zom+100"),
    streaming: nf("Zom 100"),
  },

};

// ── Moteur de patch ─────────────────────────────────────────────────────────────
function applyPatch(content, slug, patch) {
  const idx = content.indexOf(`  slug: "${slug}"`);
  if (idx === -1) return null;
  let start = idx;
  while (start > 0 && content[start] !== "{") start--;
  let depth = 0, end = start;
  while (end < content.length) {
    if (content[end] === "{") depth++;
    if (content[end] === "}") { depth--; if (depth === 0) { end++; break; } }
    end++;
  }
  const block = content.slice(start, end);
  const get = (f) => { const m = block.match(new RegExp(`${f}:\\s*"([^"]*)"`, "s")); return m ? m[1] : ""; };
  const shopsStr  = JSON.stringify(patch.shops, null, 2).replace(/"(name|url|logo)":/g, "$1:");
  const streamStr = JSON.stringify(patch.streaming, null, 2).replace(/"(name|url|logo)":/g, "$1:");
  const synEsc    = patch.synopsis.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  const newBlock = `{
  slug: "${slug}",
  title: "${get("title")}",
  category: "${get("category")}",
  cover: "${get("cover")}",
  tags: "${patch.tags}",
  stars: ${patch.stars},
  addedAt: "${get("addedAt")}",
  synopsis: "${synEsc}",
  pros: ${JSON.stringify(patch.pros)},
  cons: ${JSON.stringify(patch.cons)},
  reviewHtml: \`${patch.reviewHtml}\`,
  shops: ${shopsStr},
  streaming: ${streamStr},
  live: []
}`;
  return content.slice(0, start) + newBlock + content.slice(end);
}

let content = readFileSync(FILE, "utf-8");
let ok = 0, skip = 0;
for (const [slug, patch] of Object.entries(PATCHES)) {
  const result = applyPatch(content, slug, patch);
  if (!result) { console.log(`⚠️  Non trouvé : ${slug}`); skip++; }
  else { content = result; console.log(`✓ ${slug}`); ok++; }
}
writeFileSync(FILE, content, "utf-8");
console.log(`\n✅ ${ok} patchée(s)${skip ? `, ⚠️ ${skip} non trouvée(s)` : ""}.`);
