/**
 * patch-batch3-lot3.mjs
 * Patche 20 séries romance/shōjo/classiques
 * dans data/series/series-2.ts
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const SERIES_FILE = join(__dirname, "../data/series/series-2.ts");

const patches = [
  {
    slug: "spy-x-family",
    title: "SPY x FAMILY",
    category: "manga",
    tags: "Action · Comédie · Romance · Espionnage · Shōnen",
    stars: 5,
    synopsis: "Loid Forger est un espion d'élite contraint de former une famille fictive pour infiltrer une école de prestige. Il adopte Anya, une petite fille capable de lire dans les pensées, et épouse Yor, une tueuse à gages qui cherche elle aussi une couverture. Aucun des trois ne sait la vérité sur les autres, mais ils vont former une vraie famille malgré eux.",
    pros: ["Concept original qui fonctionne parfaitement", "Anya est le personnage le plus attachant du manga récent", "Humour brillant sans jamais trahir les enjeux", "Chaque arc famille/espion s'équilibre parfaitement"],
    cons: ["Avancement de l'intrigue principale lent", "Certains arcs secondaires moins intéressants"],
    reviewHtml: `<p>SPY x FAMILY est le manga phénomène qui mérite pleinement sa réputation. Tatsuya Endo a trouvé la formule parfaite : une prémisse espionnage jouissive (Mission Impossible meets Famille parfaite) au service d'une comédie familiale tendre et sincère.</p><p>Le génie du manga repose sur ses trois protagonistes et l'ironie de leurs situations. Anya, qui sait tout des secrets de sa famille mais ne peut rien dire, est d'une expressivité comique absolue. La dynamique entre des adultes froids et compétents face à l'innocence débordante d'une petite fille est inépuisable.</p><p>Mais SPY x FAMILY n'est pas qu'une comédie : sous les gags se cache une réflexion sincère sur la famille, la confiance et l'amour inconditionnel. Loid et Yor évoluent subtilement, leur lien se renforçant chapitre après chapitre. Une oeuvre qui réunit tout le monde autour d'elle.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=spy+x+family+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=spy+x+family+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=spy-x-family", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "kaguya-sama-love-is-war",
    title: "Kaguya-sama: Love is War",
    category: "manga",
    tags: "Comédie · Romance · Psychologie · Shōnen",
    stars: 5,
    synopsis: "Kaguya Shinomiya et Miyuki Shirogane, tous deux présidents du conseil des élèves, sont secrètement amoureux l'un de l'autre. Mais leurs egos démesurés font que chacun refuse d'avouer en premier. S'ensuit une guerre psychologique absurde et brillante où chaque interaction devient une bataille stratégique pour forcer l'autre à avouer.",
    pros: ["Concept de comédie psychologique absolument brillant", "Évolution des personnages très bien gérée", "Narration du \"commentateur\" qui transcende les scènes banales", "Arcs émotionnels qui compensent la comédie légère"],
    cons: ["Répétitif si lu en rafale", "Certains arcs tardifs moins inspirés"],
    reviewHtml: `<p>Kaguya-sama est la comédie romantique la plus intelligente du manga récent. Aka Akasaka a pris une prémisse simple (deux idiots qui refusent d'avouer leur amour) et en a tiré une série d'une inventivité comique extraordinaire sur plus de 280 chapitres.</p><p>Le secret de la réussite : le narrateur omniscient qui commente chaque micro-interaction avec un sérieux de documentaire militaire. Transformer une demande de trajet en voiture en affrontement tactique digne de Sun Tzu est un exploit comique répété à l'infini sans jamais se démoduler vraiment.</p><p>Mais la série sait aussi être touchante : l'évolution de Kaguya, fille de grande famille froide qui apprend à ressentir, est traitée avec une subtilité remarquable. Les arcs émotionnels majeurs (Confession Arc, Moon Festival) sont des sommets de romance manga. Une oeuvre complète et maîtrisée de bout en bout.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=kaguya+sama+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=kaguya+sama+love+is+war+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=kaguya-sama-love-is-war", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "rent-a-girlfriend",
    title: "Rent-A-Girlfriend",
    category: "manga",
    tags: "Comédie · Romance · Harem · Seinen",
    stars: 3,
    synopsis: "Kazuya Kinoshita, étudiant fraîchement largué, loue les services de Chizuru Mizuhara, une petite amie de location. Après une série de quiproquos, ils se retrouvent à entretenir une relation fictive face à leurs familles respectives. Entre la fake girlfriend parfaite et ses sentiments réels, Kazuya va naviguer dans une comédie romantique qui s'étire sur des années.",
    pros: ["Chizuru est un personnage bien écrit", "Moments d'humour efficaces", "Some moments of genuine emotional connection"],
    cons: ["Kazuya parmi les protagonistes les plus agaçants du genre", "Stagnation narrative chronique sur des dizaines de chapitres", "Harem qui dilue l'intrigue principale"],
    reviewHtml: `<p>Rent-A-Girlfriend est un manga à deux vitesses : d'un côté, Chizuru est un personnage féminin bien construit, avec ses contradictions et son évolution sincère. De l'autre, Kazuya reste l'un des protagonistes les plus exaspérants du manga romance moderne, incapable de décision et englué dans ses hésitations sur des centaines de chapitres.</p><p>La prémisse de départ est originale et la dynamique fake relationship a du potentiel. Reiji Miyajima exploite intelligemment les situations gênantes et les révélations progressives. Mais la série souffre d'un mal commun aux romcoms magazine : l'étirement artificiel pour éviter la résolution.</p><p>Pour les fans du genre qui apprécient Chizuru et acceptent le rythme lent, c'est une lecture plaisante. Pour ceux qui veulent de la progression narrative efficace, c'est frustrant. À lire avec des attentes modérées.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=rent+a+girlfriend+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=rent+a+girlfriend+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=rent-a-girlfriend", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "domestic-girlfriend",
    title: "Domestic Girlfriend",
    category: "manga",
    tags: "Drame · Romance · Seinen",
    stars: 3,
    synopsis: "Natsuo Fujii est amoureux de son professeur Hina. Après une nuit fortuite avec une inconnue nommée Rui, il découvre que les deux jeunes femmes sont ses nouvelles demi-soeurs suite au remariage de leurs parents. Une romance interdite compliquée qui explore les relations tabous avec un sérieux dramatique assumé.",
    pros: ["N'a pas peur d'aller loin dans le drame", "Quelques arcs émotionnellement forts", "Fin qui surprend"],
    cons: ["Prémisse moralement problématique peu questionnée", "Personnages aux décisions souvent irrationnelles", "Excès de drama qui frôle le soap opera"],
    reviewHtml: `<p>Domestic Girlfriend est le manga drama qui va trop loin, dans tous les sens du terme. Kei Sasuga pousse les situations romantiques dans des territoires extrêmes (relations professeur-élève, famille recomposée incestueuse) avec un aplomb qui laisse pantois.</p><p>Pour les amateurs de drama intense et sans limites, c'est une proposition claire : la série ne fait pas semblant d'être autre chose qu'un soap opera romantique. Certains arcs sont effectivement prenants, notamment ceux impliquant les conséquences concrètes des relations interdites.</p><p>La fin, qui a divisé le fandom, a au moins le mérite de ne pas être la résolution facile attendue. Pour ceux qui cherchent une romance sage, passez votre chemin. Pour ceux qui veulent du drama maximal assumé, c'est une expérience à part.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=domestic+girlfriend+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=domestic+girlfriend+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=domestic-girlfriend", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "we-never-learn",
    title: "We Never Learn",
    category: "manga",
    tags: "Comédie · Romance · Harem · Shōnen",
    stars: 3,
    synopsis: "Nariyuki Yuiga, lycéen méritant mais peu sûr de lui, est chargé de tutorer trois génies : Fumino qui excelle en lettres mais veut étudier les sciences, Rizu forte en maths mais passionnée de psychologie, et Uruka championne de natation voulant partir à l'étranger. Une comédie scolaire romantique avec harem décomplexé.",
    pros: ["Heroïnes bien différenciées et attachantes", "Humour de situation efficace", "Finale multiple bien exécutée"],
    cons: ["Formula harem très classique sans grande originalité", "Progression romantique lente", "Protagoniste assez fade"],
    reviewHtml: `<p>We Never Learn est le harem romantique honnête dans ses ambitions : il ne prétend pas révolutionner le genre, mais offre une formule éprouvée exécutée avec soin. Taishi Tsutsui a le mérite de créer des héroïnes réellement différenciées, chacune ayant une personnalité et des aspirations propres.</p><p>La gimmick des génies hors de leur domaine est exploitée avec constance pour créer des situations comiques autour des sessions de tutorat. L'humour fonctionne bien même s'il reste dans les codes établis du genre. Les sentiments des différentes héroïnes évoluent de façon crédible.</p><p>La grande originalité : la série propose plusieurs fins alternatives selon l'héroïne choisie, un gimmick éditorial qui a bien fonctionné et donne une relecture intéressante. Une lecture plaisante pour les fans du genre qui ne demande pas plus que ce qu'elle promet.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=we+never+learn+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=we+never+learn+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=we-never-learn", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "horimiya",
    title: "Horimiya",
    category: "manga",
    tags: "Comédie · Romance · Tranche de vie · Shōnen",
    stars: 4,
    synopsis: "Kyouko Hori est une lycéenne populaire et sérieuse qui cache son vrai visage de fille de famille. Izumi Miyamura semble être un garçon discret et grincheux, mais il cache des tatouages et des piercings sous ses vêtements. Quand ils découvrent leurs doubles vies respectives, une amitié complice naît qui évolue naturellement vers l'amour.",
    pros: ["Relation principale qui progresse vraiment", "Dynamique de couple après la confession originale", "Atmosphère chaleureuse et confortable", "Ensemble de personnages secondaires attachants"],
    cons: ["Arcs secondaires parfois très légers", "Certains comportements d'Hori normalisés problématiquement"],
    reviewHtml: `<p>Horimiya est une romance scolaire qui fait ce que peu osent : montrer la vie du couple après la confession, pas seulement la course vers celle-ci. HERO a construit une relation centrale mature et confortable, où deux personnes apprennent à se montrer telles qu'elles sont vraiment.</p><p>La dynamique Hori/Miyamura est remarquablement bien écrite : leurs interactions combinent humour, tendresse et une vraie communication. Le fait que la série s'attarde sur leur relation établie, avec ses petits conflits et ses moments de complicité quotidienne, la distingue nettement de la concurrence.</p><p>L'adaptation en anime a popularisé l'oeuvre à juste titre. Horimiya est une romance apaisante, idéale pour ceux qui en ont assez des malentendus artificiels prolongés. Une lecture feel-good sincère et bien exécutée.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=horimiya+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=horimiya+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=horimiya", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "a-silent-voice",
    title: "A Silent Voice",
    category: "manga",
    tags: "Drame · Romance · Tranche de vie · Seinen",
    stars: 5,
    synopsis: "Shoya Ishida a harcelé Shoko Nishimiya, une camarade sourde, tout au long de l'école primaire. Des années plus tard, rongé par la culpabilité et l'isolement, il décide de retrouver Shoko pour se faire pardonner. Un récit sur la rédemption, le handicap, la communication et le pardon qui évite tous les clichés du genre.",
    pros: ["Traitement du handicap et de la communication nuancé et juste", "Rédemption du protagoniste crédible et douloureuse", "Ne donne pas de réponses faciles", "Émotion profonde et sincère"],
    cons: ["Certains personnages secondaires moins développés", "Quelques arcs tardifs un peu trop épars"],
    reviewHtml: `<p>A Silent Voice est l'une des oeuvres les plus importantes du manga contemporain sur le thème du harcèlement scolaire et de la rédemption. Yoshitoki Oima aborde des sujets difficiles (le handicap, la culpabilité, le suicide) avec une honnêteté et une subtilité rares.</p><p>Le tour de force de la série est de rendre Shoya sympathique malgré ses actions passées : en montrant comment un enfant ordinaire peut devenir bourreau, puis comment ce même enfant peut chercher à se reconstruire, Oima parle à quelque chose d'universel sur la responsabilité et la croissance.</p><p>La représentation du handicap auditif est remarquablement juste, notamment dans les difficultés de communication et les incompréhensions quotidiennes. L'adaptation cinématographique de Kyoto Animation est magnifique, mais le manga original mérite d'être lu pour sa richesse narrative supplémentaire. Un chef-d'oeuvre du manga contemporain.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=a+silent+voice+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=a+silent+voice+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=a-silent-voice", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "your-lie-in-april",
    title: "Your Lie in April",
    category: "manga",
    tags: "Drame · Musique · Romance · Shōnen",
    stars: 4,
    synopsis: "Kousei Arima était un pianiste prodige jusqu'à ce que le décès traumatique de sa mère lui fasse perdre la capacité d'entendre sa propre musique. La rencontre avec Kaori Miyazono, violoniste libre et extravagante, va le pousser à rejouer. Un récit sur la musique, le deuil et la beauté fugace des moments partagés.",
    pros: ["Représentation émotionnelle de la musique classique magnifique", "Évolution de Kousei traitée avec sensibilité", "Kaori parmi les personnages féminins les plus marquants", "Fin bouleversante et mémorable"],
    cons: ["Quelques clichés du genre drama musical", "Certains personnages secondaires caricaturaux"],
    reviewHtml: `<p>Your Lie in April (Shigatsu wa Kimi no Uso) est le manga musical qui a touché le coeur de millions de lecteurs grâce à sa représentation émotionnelle unique du rapport à la musique. Naoshi Arakawa parvient à transcrire sur papier ce que ressent un musicien quand il joue vraiment.</p><p>Kousei est un protagoniste touchant : un enfant brisé par un amour maternel toxique, qui a peur de retrouver la musique parce qu'elle lui rappelle trop de douleur. Son chemin vers la scène est traité avec patience et sincérité. Kaori, lumineuse et secrète, est l'une des héroïnes les plus aimées du manga seinen.</p><p>La fin, attendue mais redoutée, est exécutée avec une beauté déchirante. Même en la connaissant à l'avance, elle fait son effet. Un manga à lire dans de bonnes conditions : seul, avec de la musique de Chopin en fond sonore.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=your+lie+in+april+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=your+lie+in+april+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=your-lie-in-april", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "fruits-basket",
    title: "Fruits Basket",
    category: "manga",
    tags: "Comédie · Drame · Fantasy · Romance · Shōjo",
    stars: 5,
    synopsis: "Tohru Honda, orpheline habitant sous une tente, est accueillie par la mystérieuse famille Sohma. Elle découvre leur secret : certains membres se transforment en animaux du zodiaque chinois quand ils sont enlacés par quelqu'un du sexe opposé. En côtoyant les Sohma, Tohru va chercher à briser la malédiction qui les opprime depuis des générations.",
    pros: ["Tohru Honda, héroïne shōjo la plus attachante de sa génération", "Profondeur émotionnelle et thèmes sur le trauma familiaux exceptionnels", "Chaque personnage Sohma a son arc complet", "Fin satisfaisante et méritée"],
    cons: ["Début peut sembler léger avant la profondeur des arcs tardifs", "Certains personnages négatifs manichéens"],
    reviewHtml: `<p>Fruits Basket est le chef-d'oeuvre du shōjo des années 2000, une oeuvre qui dépasse de très loin sa prémisse fantaisiste pour devenir une exploration profonde du trauma familial, de l'acceptation de soi et du pouvoir de l'amour inconditionnel.</p><p>Natsuki Takaya a construit quelque chose de rare : une héroïne, Tohru, dont l'optimisme et la gentillesse ne sont jamais naïfs ou irritants, mais représentent un vrai choix face à la douleur. En contact avec les Sohma, chacun portant une blessure différente liée à leur malédiction, elle offre simplement sa présence, sans juger, sans exiger.</p><p>Les arcs des différents Sohma, notamment Kyo et Yuki, sont d'une profondeur psychologique rare dans le shōjo. La malédiction du zodiaque est une métaphore puissante de l'emprise familiale toxique. Fruits Basket mérite d'être (re)lu par tous les amateurs de manga romantique et émotionnel.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=fruits+basket+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=fruits+basket+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=fruits-basket", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "clannad",
    title: "Clannad",
    category: "manga",
    tags: "Drame · Romance · Tranche de vie",
    stars: 3,
    synopsis: "Tomoya Okazaki, lycéen cynique et sans ambition, rencontre Nagisa Furukawa, une fille timide qui rêve de ressusciter le club de théâtre. Ensemble ils vont recruter des membres et vivre leurs dernières années de lycée. Adapté du visual novel de Key, Clannad explore les thèmes de la famille, de la perte et des miracles quotidiens.",
    pros: ["Adaptation fidèle d'un VN culte", "Arcs individuels des héroïnes touchants", "Thèmes sur la famille profondément humains"],
    cons: ["Adaptation manga moins impactante que l'anime ou le VN", "Certains arcs du visual novel absents ou condensés", "Dessin peu remarquable"],
    reviewHtml: `<p>Clannad en manga est d'abord une adaptation d'une oeuvre culte qui existe dans d'autres formes bien plus réussies. Le visual novel original de Key et l'adaptation anime de Kyoto Animation restent les versions de référence pour vivre l'histoire de Tomoya et Nagisa dans toute sa profondeur émotionnelle.</p><p>La version manga condense et simplifie le matériel de base, et si les moments forts de l'histoire restent présents, ils ont moins d'impact sans la musique et les voix qui leur donnent leur puissance dans le VN ou l'anime. Les arcs des héroïnes secondaires, riches dans l'original, sont souvent trop raccourcis ici.</p><p>Pour ceux qui veulent découvrir Clannad, commencer par l'anime est fortement recommandé. Pour les fans de l'univers qui veulent tout voir, c'est un complément satisfaisant mais non indispensable.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=clannad+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=clannad+manga", logo: "/logos/amazon.svg" },
    ],
    streaming: [],
  },
  {
    slug: "nana",
    title: "Nana",
    category: "manga",
    tags: "Drame · Musique · Romance · Seinen · Tranche de vie",
    stars: 5,
    synopsis: "Deux jeunes femmes qui s'appellent toutes les deux Nana se rencontrent dans un train pour Tokyo. Nana Osaki, punk et leader d'un groupe de rock, et Nana Komatsu, romantique et rêveuse, vont partager un appartement et des vies qui s'entremêlent profondément, entre amour, ambition musicale et les dures réalités de l'âge adulte.",
    pros: ["Portraiture adulte et nuancée de deux femmes remarquables", "La musique rock comme toile de fond authentique", "Relations amoureuses traitées sans manichéisme", "Ai Yazawa au sommet de son art"],
    cons: ["Publication suspendue depuis 2009 pour cause de maladie de l'auteure", "Fin jamais connue"],
    reviewHtml: `<p>Nana est le manga shōjo le plus adulte et le plus sincère de sa génération. Ai Yazawa a créé deux héroïnes diamétralement opposées mais d'une richesse humaine égale, dont la coexistence forme le coeur d'une oeuvre sur l'amour, l'ambition et la façon dont les choix de jeunesse nous définissent.</p><p>La scène musicale punk-rock tokyoïte des années 2000 est recréée avec un authenticité remarquable. Le groupe BLAST et ses dynamiques internes, les tensions entre succès commercial et intégrité artistique, sont traités avec la sérieux d'un vrai drame musical.</p><p>La douleur de Nana réside dans son inachèvement : Ai Yazawa a dû interrompre la publication en 2009 pour des raisons de santé, laissant l'histoire en suspens dans des moments cruciaux. Les 21 volumes existants restent une oeuvre majeure du manga féminin, et l'espoir de sa reprise un jour persiste dans le coeur de ses lecteurs.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=nana+manga+yazawa&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=nana+manga+yazawa", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=nana", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "skip-beat",
    title: "Skip Beat!",
    category: "manga",
    tags: "Comédie · Drame · Romance · Shōjo · Showbiz",
    stars: 4,
    synopsis: "Kyoko Mogami abandonne tout pour suivre son enfance Sho à Tokyo et l'aider à devenir une star de J-pop. Quand elle découvre qu'il ne l'a jamais considérée que comme une domestique commode, sa douce nature se métamorphose en soif de vengeance : elle entrera dans le showbiz et le dépassera. Mais en cours de route, elle découvre sa vraie passion, le jeu d'actrice.",
    pros: ["Kyoko parmi les héroïnes les plus charismatiques du shōjo", "Progression vers le showbiz passionnante et variée", "Humour sur les démons de Kyoko absolument hilarant", "Romance qui prend son temps mais de façon justifiée"],
    cons: ["70+ volumes, la romance principale avance très lentement", "Certains arcs de côté moins captivants"],
    reviewHtml: `<p>Skip Beat! est un manga qui dure depuis 2002 et justifie chaque volume par la force de son personnage principal. Kyoko Mogami est l'une des héroïnes les plus originales du shōjo : une fille douce transformée en machine de vengeance, qui découvre en cherchant à se venger sa vraie passion et son vrai moi.</p><p>Yoshiki Nakamura excelle à montrer l'évolution d'une actrice en formation : chaque rôle que Kyoko obtient est une nouvelle facette de sa personnalité qu'elle doit explorer, et la façon dont ses rôles résonnent avec son trauma personnel est brillamment traité. Les passages comiques sur ses \"démons de la rancune\" sont d'un humour incomparable.</p><p>La romance avec Ren Tsuruga est la patience testée au maximum mais récompensée : leur dynamique est complexe, tendue, et l'attente est suffisamment payante pour justifier la longueur. Pour ceux qui acceptent le long format shōjo, c'est une des meilleures séries du genre.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=skip+beat+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=skip+beat+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=skip-beat", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "boys-over-flowers",
    title: "Boys Over Flowers",
    category: "manga",
    tags: "Drame · Romance · Shōjo",
    stars: 3,
    synopsis: "Tsukushi Makino, lycéenne de famille modeste dans l'école ultra-élitiste Eitoku, refuse de se soumettre aux F4, les quatre garçons les plus riches et les plus puissants du lycée. Cette résistance attire l'attention de Tsukasa Domyoji, le leader des F4, qui passe de la persécution à l'attirance dans cette romance coréenne devenue phénomène mondial.",
    pros: ["Prémisse qui a défini un genre entier", "Tsukushi est une héroïne à fort caractère", "Tension romantique efficace dans les premiers arcs"],
    cons: ["Tsukasa est un personnage problématique à l'aune des standards modernes", "Certains arcs tardifs s'étirent inutilement", "Dynamique amoureuse basée sur la coercition difficile à défendre"],
    reviewHtml: `<p>Boys Over Flowers (Hana Yori Dango) est un classique du shōjo des années 90 qui a défini l'archétype du romance avec garçon riche dominant. L'oeuvre de Yoko Kamio a eu une influence culturelle immense, générant de multiples adaptations drama en Asie (japonaise, coréenne, chinoise, taïwanaise).</p><p>Lu avec le prisme de son époque, c'est une romance efficace avec une héroïne forte et des tensions bien construites. Tsukushi a suffisamment de caractère pour ne pas être une simple victime passive, ce qui la distingue de nombreuses héroïnes de l'époque.</p><p>Relu aujourd'hui, la dynamique de Tsukasa est difficile à digérer : le personnage commence essentiellement comme un harceleur violent dont les comportements sont progressivement romantisés. Un artefact culturel important mais à apprécier avec conscience de son contexte historique.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=boys+over+flowers+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=boys+over+flowers+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=boys-over-flowers", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "ouran-high-school-host-club",
    title: "Ouran High School Host Club",
    category: "manga",
    tags: "Comédie · Romance · Shōjo · Parodie",
    stars: 4,
    synopsis: "Haruhi Fujioka, bourse-méritante à l'école Ouran pour ultra-riches, casse par accident un vase à 8 millions de yens appartenant au Club des Hôtes. Pour rembourser sa dette, elle doit devenir hôte et divertir les élèves féminins. Une satire tendre de tous les clichés du shōjo et du monde des ultra-riches, qui cache une vraie romance sous la comédie.",
    pros: ["Parodie des clichés shōjo brillante et affectueuse", "Ensemble de personnages tous mémorables", "Équilibre parfait comédie/romance", "Haruhi excellent personnage féminin qui refuse les stéréotypes"],
    cons: ["Le rythme comédie peut décevoir ceux qui attendent un vrai romance", "Certains épisodes très épisodiques sans impact narratif"],
    reviewHtml: `<p>Ouran Host Club est la comédie shōjo ultime, une oeuvre qui aime profondément son genre tout en se moquant gentiment de ses clichés. Bisco Hatori a créé une galerie de personnages masculins qui incarnent chacun un archétype différent (le gentil, le sombre, le shotō, les jumeaux, le lolicon) pour mieux les démonter sous la comédie.</p><p>Haruhi est une héroïne remarquable : pragmatique, directe, indifférente aux constructions sociales de genre, elle dévalorise constamment les codes de la féminité performative tout en gardant son humanité. Sa relation avec Tamaki est l'une des plus savoureuses du shōjo, entre comédie et sentiment sincère.</p><p>La série est aussi une satire fine du monde des ultra-riches : les Hôtes, malgré leurs excès, apprennent peu à peu ce que signifie un sentiment authentique. Une oeuvre légère qui a plus à dire qu'il n'y paraît, indispensable pour tout fan du genre.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=ouran+host+club+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=ouran+high+school+host+club+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=ouran-high-school-host-club", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "sa-special-a",
    title: "S.A: Special A",
    category: "manga",
    tags: "Comédie · Romance · Shōjo",
    stars: 3,
    synopsis: "Hikari Hanazono a toujours voulu battre Kei Takishima, le seul élève au-dessus d'elle depuis l'enfance. Ils intègrent tous deux le groupe S.A. (Special A), l'élite absolue de leur lycée. Hikari est tellement obsédée par la rivalité qu'elle est la seule à ne pas comprendre que Kei est profondément amoureux d'elle.",
    pros: ["Dynamique de rivalité amoureuse charmante", "Humour sur l'aveuglement d'Hikari fonctionne bien", "Ensemble S.A. aux romances secondaires agréables"],
    cons: ["Hikari peut devenir irritante dans son obliviousness", "Formule répétitive sur la durée", "Résolution tardive qui aurait pu venir plus tôt"],
    reviewHtml: `<p>S.A.: Special A est une romance shōjo qui joue sur l'une des formules les plus classiques du genre : la rivalité qui cache l'amour. Maki Minami l'exécute avec entrain et légèreté, créant une série de tranches scolaires agréables portées par la dynamique principale.</p><p>La force du manga est l'ensemble de l'équipe S.A. : les romances des différents couples secondaires diversifient agréablement la lecture et donnent de la profondeur au groupe. Le campus luxueux et les situations absurdes créent une atmosphère de comédie détendue.</p><p>Le bémol : Hikari pousse parfois le concept d'obliviousness romantique à ses limites, et la série aurait gagné à progresser vers la résolution plus rapidement. Pour les fans de romance shōjo légère sans grande ambition narrative, c'est une lecture plaisante.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=special+a+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=special+a+manga+minami", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=sa-special-a", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "vampire-knight",
    title: "Vampire Knight",
    category: "manga",
    tags: "Drame · Fantastique · Romance · Shōjo · Vampires",
    stars: 3,
    synopsis: "Yuki Cross vit dans l'académie Cross, divisée entre élèves humains de jour et vampires étudiants de nuit. Avec son ami d'enfance Zero, elle veille à maintenir la paix. Mais ses origines mystérieuses et son lien avec Kaname Kuran, le noble vampire qui l'a sauvée enfant, vont la plonger dans des secrets qui redéfiniront sa vision du monde.",
    pros: ["Ambiance gothic vampire romantique efficace", "Triangle amoureux bien construit", "Révélations sur les origines de Yuki surprenantes"],
    cons: ["Yuki peut être une héroïne passive frustrante", "Narration parfois confuse dans les arcs tardifs", "Représentation idéalisée des vampires qui a vieilli"],
    reviewHtml: `<p>Vampire Knight est le shōjo vampire par excellence des années 2000, capitalisant habilement sur l'engouement mondial pour les romances avec des créatures de la nuit. Matsuri Hino crée une atmosphère gothique soignée et un triangle amoureux humain-vampire-humain maudit particulièrement envoûtant pour son public cible.</p><p>Le design des personnages est superbe, et l'académie Cross avec sa dualité jour/nuit est un cadre riche. Les révélations sur le passé de Yuki constituent les meilleurs moments de la série, renversant efficacement les attentes établies dans les premiers volumes.</p><p>Avec le recul, la série montre les limites du shōjo vampire romantique : Yuki est parfois trop passive et le récit normalise des dynamiques de pouvoir problématiques entre vampires et humains. Un classique de son époque, à lire comme tel plutôt que comme une oeuvre intemporelle.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=vampire+knight+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=vampire+knight+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=vampire-knight", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "absolute-boyfriend",
    title: "Absolute Boyfriend",
    category: "manga",
    tags: "Comédie · Drame · Romance · Science-fiction · Shōjo",
    stars: 3,
    synopsis: "Riiko Izawa commande accidentellement sur internet un \"petit ami idéal\" androïde nommé Night. Bien décidée à le renvoyer, elle se retrouve incapable de rembourser sa dette et doit garder Night en se faisant passer pour sa propriétaire. Une romance science-fiction courte sur ce que signifie aimer et être humain.",
    pros: ["Format court bien rythmé", "Night est un personnage touchant", "Fin plus émouvante qu'attendu"],
    cons: ["Prémisse gadget qui demande de l'indulgence", "Manque de profondeur dans le traitement sci-fi"],
    reviewHtml: `<p>Absolute Boyfriend est une romance science-fiction de Yuu Watase, auteure connue pour Fushigi Yuugi, dans un format court (6 volumes) qui va à l'essentiel. La prémisse du petit ami androïde est un prétexte pour explorer la question de ce qui constitue un amour véritable.</p><p>Night est le personnage central réussi : androïde conçu pour être le partenaire parfait, il développe des émotions authentiques qui posent des questions sur l'amour conditionné versus l'amour spontané. Sa naïveté et sa sincérité touchent malgré l'aspect artificiellement fabriqué.</p><p>La fin, beaucoup plus mélancolique que la comédie du départ ne le laissait attendre, est le vrai point fort de la série. Watase sait comment conclure. Une lecture légère avec une petite surprise émotionnelle finale, idéale pour une découverte du genre.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=absolute+boyfriend+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=absolute+boyfriend+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=absolute-boyfriend", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "inuyasha",
    title: "InuYasha",
    category: "manga",
    tags: "Action · Aventure · Fantasy · Historique · Romance · Shōnen",
    stars: 4,
    synopsis: "Kagome Higurashi, lycéenne moderne, tombe dans un puit et se retrouve propulsée au Japon féodal. Elle libère accidentellement InuYasha, un demi-démon scellé depuis 50 ans, et brise le Joyau des Quatre-Âmes en mille éclats. Ensemble ils vont parcourir le Japon médiéval pour rassembler les fragments avant que le puissant Naraku ne les récupère.",
    pros: ["World-building du Japon médiéval fantastique très riche", "InuYasha/Kagome, un couple iconic", "Excellente galerie de personnages et d'antagonistes", "Atmosph\\u00e8re d\\'aventure épique bien soutenue"],
    cons: ["Dernier arc très long et parfois répétitif", "Miroir de Naraku utilisé à l'excès comme antagoniste élastique"],
    reviewHtml: `<p>InuYasha est l'oeuvre signature de la grande Rumiko Takahashi dans le genre action-romance-fantastique. Publié de 1996 à 2008, c'est une fresque épique du Japon médiéval qui a accompagné des générations de lecteurs et de téléspectateurs dans les années 2000.</p><p>Le cadre historique-fantastique du Japon féodal permet une créativité remarquable dans les démons et entités surnaturelles rencontrés. Chaque arc introduit de nouveaux youkai et de nouvelles menaces, maintenant la variété sur 56 volumes. La galerie des compagnons (Miroku, Sango, Shippo) est chaleureuse et bien développée.</p><p>La romance entre InuYasha, déchiré entre deux mondes et deux amours, et Kagome, ancre moderne dans ce passé, est l'une des plus durables et sincères du manga shōnen. Le dernier arc est parfois répétitif mais la conclusion est satisfaisante. Un classique incontournable de l'aventure romantique fantastique.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=inuyasha+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=inuyasha+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=inuyasha", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "ranma",
    title: "Ranma ½",
    category: "manga",
    tags: "Action · Aventure · Comédie · Romance · Arts martiaux · Shōnen",
    stars: 4,
    synopsis: "Ranma Saotome tombe dans une source maudite en Chine et se transforme en fille quand il est aspergé d'eau froide. Il redevient garçon avec l'eau chaude. Fiancé d'office à Akane Tendo par leurs pères respectifs, les deux prétendants farouchement indépendants vont devoir cohabiter, s'affronter et, progressivement, tomber amoureux.",
    pros: ["Concept de transformation de genre brillamment exploité pour la comédie", "Galerie de prétendants tous hilarants", "Arts martiaux créatifs et absurdes", "Rumiko Takahashi au top de sa maîtrise de l'humour"],
    cons: ["Status quo maintenu trop longtemps", "Ranma/Akane évolution romantique très lente"],
    reviewHtml: `<p>Ranma ½ est le manga de la comédie romantique et des arts martiaux absurdes, publié par la reine du genre Rumiko Takahashi. La prémisse du personnage qui change de sexe selon la température de l'eau est exploitée avec une inventivité comique inépuisable sur 38 volumes.</p><p>Takahashi a construit une galerie de prétendants tous plus délirantes les uns que les autres, chacun avec son propre style de combat absurde (arts martiaux de la restauration rapide, de la calligraphie, de la patinoire...). La créativité dans l'invention de nouveaux styles d'arts martiaux est un régal constant.</p><p>La romance Ranma/Akane est un exemple parfait du tsundere couple : deux personnages fiers qui refusent d'admettre leurs sentiments jusqu'à un degré souvent frustrant mais toujours drôle. La fin, après des années de statu quo, est douce-amère mais juste. Un pilier du manga shōnen comique.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=ranma+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=ranma+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=ranma", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "urusei-yatsura",
    title: "Urusei Yatsura",
    category: "manga",
    tags: "Comédie · Romance · Science-fiction · Shōnen · Seinen",
    stars: 4,
    synopsis: "Ataru Moroboshi, le lycéen le plus malchanceux et lubriques du Japon, est choisi au hasard pour représenter l'humanité face aux Oni aliens. Il remporte la partie de tag contre leur princesse Lum et sauve la Terre, mais Lum, pensant qu'il a demandé sa main, s'installe chez lui et tombe amoureuse. Le chaos quotidien de Lum et Ataru a lancé tout le manga romantique-comédie moderne.",
    pros: ["Série fondatrice de la comédie romantique manga moderne", "Lum est une des héroïnes les plus iconiques de l'histoire du manga", "Invention comique inépuisable", "Rumiko Takahashi à ses débuts, fraîche et créative"],
    cons: ["Datée sur certains aspects (attitudes masculines de l'époque)", "Format très épisodique sans fil conducteur fort"],
    reviewHtml: `<p>Urusei Yatsura est le manga fondateur de la comédie romantique moderne. Rumiko Takahashi a créé avec Lum l'une des héroïnes les plus iconiques de l'histoire du médium : l'extraterrestre en bikini tigre qui dit \"Chéri darling\" est une figure culturelle qui a traversé les décennies.</p><p>Publié dès 1978, c'est l'oeuvre qui a établi les codes de la harem comédie et de la romance fantastique qui ont influencé tout ce qui a suivi. La créativité de Takahashi dans l'invention de situations absurdes autour des créatures surnaturelles japonaises (oni, kappa, shinto) est éblouissante.</p><p>La série est plus épisodique que narrative, fonctionnant comme une série de gags liés par les personnages récurrents. Lue avec le recul de son époque, certains aspects ont vieilli, mais la fraîcheur d'invention et l'iconicité de Lum restent intacts. Un classique incontournable pour comprendre les racines du manga romantique-comique.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=urusei+yatsura+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=urusei+yatsura+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=urusei-yatsura", logo: "/logos/manganim.svg" },
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

  // find opening brace
  let i = idx;
  while (i > 0 && content[i] !== "{") i--;
  const start = i;

  // find matching closing brace
  let depth = 0;
  for (i = start; i < content.length; i++) {
    if (content[i] === "{") depth++;
    if (content[i] === "}") { depth--; if (depth === 0) break; }
  }
  const end = i + 1;

  // extract cover URL from existing entry
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
console.log("\n🎉 Patch batch3-lot3 terminé !");
