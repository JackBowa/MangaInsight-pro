/**
 * patch-batch3-lot5.mjs
 * Patche 17 séries manhwa/fantasy/shōnen (Solo Leveling, Tower of God, FMA, etc.)
 * dans data/series/series-2.ts
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const SERIES_FILE = join(__dirname, "../data/series/series-2.ts");

const patches = [
  {
    slug: "solo-leveling",
    title: "Solo Leveling",
    category: "manhwa",
    tags: "Action · Aventure · Fantasy · Isekai · Manhwa",
    stars: 4,
    synopsis: "Sung Jin-Woo est le chasseur le plus faible de Corée, régulièrement proche de la mort dans les donjons les moins dangereux. Après une near-death experience dans un donjon-piège, il acquiert un système unique qui lui permet de progresser sans limite quand tous les autres chasseurs ont des capacités fixes. Du rang E au rang S en puissance absolue.",
    pros: ["Power fantasy pure exécutée avec maîtrise", "Progression du héros d'une satisfaction constante", "Système de jeu bien exploité narrativement", "Arcs de boss épiques et bien mis en scène"],
    cons: ["Protagoniste quasi-indestructible réduit la tension", "Personnages féminins peu développés", "Scénario parfois prévisible"],
    reviewHtml: `<p>Solo Leveling est le manhwa d'action fantasy qui a mis le format coréen sur la carte mondiale. Chu-Gong et le dessinateur Dubu ont créé le power fantasy ultime : voir un homme au fond du classement devenir l'être le plus puissant de son monde, étape par étape, avec une satisfaction de progression absolument addictive.</p><p>Le système de jeu (niveaux, quêtes, statistiques) est intégré de façon intelligente à la narration : chaque arc est un boss-fight plus exigeant que le précédent, escaladant les enjeux avec une efficacité de jeu vidéo. Le dessin de Dubu, en couleurs complètes, est d'une qualité visuelle rare pour un webtoon.</p><p>Solo Leveling n'est pas une oeuvre profonde : la philosophie est absente, les personnages secondaires peu développés, et la tension est limitée par l'invincibilité progressive du héros. Mais comme entertainment pur, c'est une lecture extrêmement efficace qui justifie son statut de phénomène global.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=solo+leveling+manhwa&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=solo+leveling+manhwa", logo: "/logos/amazon.svg" },
    ],
    streaming: [],
  },
  {
    slug: "omniscient-reader",
    title: "Omniscient Reader",
    category: "manhwa",
    tags: "Action · Aventure · Fantasy · Manhwa · Méta-fiction",
    stars: 5,
    synopsis: "Kim Dokja est l'unique lecteur d'un roman web de fin du monde appelé Three Ways to Survive in a Ruined World. Quand la réalité commence à coïncider avec la fiction, il est le seul à connaître l'histoire complète. Utilisez sa connaissance du roman pour aider les personnages et survivre à une apocalypse qu'il connaît par coeur.",
    pros: ["Concept méta-fictionnel brillant et original", "Développement émotionnel des personnages exceptional", "Construction narrative complexe et satisfaisante", "Meilleur manhwa romantique/épique de sa génération selon beaucoup"],
    cons: ["Densité narrative peut être épuisante", "Demande une vraie concentration pour suivre tous les fils"],
    reviewHtml: `<p>Omniscient Reader est considéré par beaucoup comme le meilleur manhwa de fantasy de ces dernières années, et l'argument est solide. L'adaptation du roman web coréen propose un concept méta-fictionnel fascinant : un lecteur qui connaît la fin de l'histoire et doit utiliser cette connaissance pour survivre dans la fiction devenue réalité.</p><p>Ce qui distingue ORV de la concurrence, c'est la profondeur émotionnelle de ses personnages. Kim Dokja n'est pas simplement un overpowered protagonist : c'est un solitaire qui a trouvé dans la fiction sa seule connexion au monde, et qui doit apprendre que les personnages qu'il aimait en tant que lecteur sont de vraies personnes avec leur propre agentivité.</p><p>La relation entre Kim Dokja et Yoo Joonghyuk, protagoniste du roman dans le roman, est l'une des dynamiques les plus complexes et les plus touchantes du manhwa récent. Une oeuvre ambitieuse qui mérite son hype.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=omniscient+reader+manhwa&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=omniscient+reader+manhwa", logo: "/logos/amazon.svg" },
    ],
    streaming: [],
  },
  {
    slug: "tower-of-god",
    title: "Tower of God",
    category: "manhwa",
    tags: "Action · Aventure · Fantasy · Manhwa · Shōnen",
    stars: 4,
    synopsis: "Twenty-Fifth Bam escalade la Tour, une structure mystérieuse dont les étages testent les compétants à différentes épreuves, pour retrouver son amie Rachel qui est entrée avant lui. Dans cette ascension dangereuse, il rencontre des alliés et des ennemis qui le forcent à remettre en question ce qu'il croit savoir sur la Tour, sur Rachel, et sur lui-même.",
    pros: ["World-building de la Tour d'une inventivité et richesse exceptionnelle", "Galerie de personnages tous mémorables", "Twists narratifs qui redéfinissent l'histoire", "Publication sur 15 ans qui a maintenu une qualité constante"],
    cons: ["Arcs très longs (parfois des centaines de chapitres par arc)", "Hiatuses fréquents de l'auteur", "Début difficile à cause du style graphique des débuts"],
    reviewHtml: `<p>Tower of God (SIU/Slave.In.Utero) est le manhwa de fantasy qui a lancé la plateforme Webtoon sur la scène internationale. Publié depuis 2010, c'est l'une des oeuvres les plus ambitieuses et les plus riches du manhwa, avec un world-building de la Tour qui n'a cessé de s'approfondir.</p><p>Chaque étage de la Tour introduit de nouvelles règles, de nouvelles factions, de nouveaux pouvoirs, créant un univers d'une complexité organique remarquable. La révélation progressive de la vérité sur Rachel, sur la nature de la Tour et sur Bam lui-même est calibrée avec soin sur des années.</p><p>La longévité est à la fois la force et la limite de Tower of God : pour ceux qui embarquent, c'est une aventure longue et riche. Pour ceux qui découvrent en 2024, le volume de matériel est imposant. Mais l'investissement est largement récompensé pour ceux qui font le chemin.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=tower+of+god+manhwa&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=tower+of+god+manhwa", logo: "/logos/amazon.svg" },
    ],
    streaming: [],
  },
  {
    slug: "noblesse",
    title: "Noblesse",
    category: "manhwa",
    tags: "Action · Comédie · Fantastique · Manhwa · Vampires",
    stars: 3,
    synopsis: "Cadis Etrama di Raizel, un noble vampire de 820 ans, se réveille en Corée moderne et s'inscrit dans un lycée. Avec son serviteur Frankenstein, il navigue dans le monde contemporain tout en affrontant des organisations secrètes. Un manhwa d'action comique sur un vampire ultra-puissant confronté à la normalité scolaire.",
    pros: ["Dynamique maître/serviteur Rai/Frankenstein hilarante", "Moments d'action épiques bien mis en scène", "Humour sur le choc culturel efficace"],
    cons: ["Scénario peu original dans la seconde moitié", "Personnages secondaires peu développés", "Qualité narrative décline vers la fin"],
    reviewHtml: `<p>Noblesse est le manhwa vampire qui a popularisé le format webtoon en Corée avant Solo Leveling. Son concept est simple mais efficace : un vampire toute-puissance qui s'inscrit au lycée et découvre la modernité, accompagné d'un serviteur (Frankenstein) qui est aussi amusant que dangereux.</p><p>La dynamique Rai/Frankenstein est le vrai coeur de la série : le noble silencieux et mystérieux et le serviteur dévoué mais capable d'une violence extrême forment un duo comique très efficace. Les interactions avec les humains ordinaires sont une source de gags constante.</p><p>La série est plus réussie dans sa première moitié que dans la seconde, où le scénario de menaces organisationnelles prend le dessus sur la comédie de moeurs. Mais pour une lecture légère d'action fantastique avec de bonnes doses d'humour, c'est un choix solide.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=noblesse+manhwa&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=noblesse+manhwa", logo: "/logos/amazon.svg" },
    ],
    streaming: [],
  },
  {
    slug: "the-god-of-high-school",
    title: "The God of High School",
    category: "manhwa",
    tags: "Action · Arts martiaux · Fantasy · Manhwa · Tournoi",
    stars: 3,
    synopsis: "Jin Mo-Ri, lycéen maître en arts martiaux, est recruté pour le tournoi God of High School, une compétition où les meilleurs combattants du monde s'affrontent pour obtenir n'importe quel voeu. Ce qui commence comme un tournoi sportif révèle des dimensions mythologiques bien plus grandes que les participants l'anticipaient.",
    pros: ["Combats d'une vitesse et d'une créativité visuelle impressionnantes", "Escalade des enjeux qui mène à une fantasy mythologique grandiose", "Jin Mo-Ri, protagoniste charismatique et fun"],
    cons: ["Scénario parfois décousu dans les arcs mythologiques tardifs", "Personnages secondaires sacrifiés au profit des combats"],
    reviewHtml: `<p>The God of High School est le manhwa d'arts martiaux par excellence, une séries de combats de haute volée qui monte progressivement en puissance jusqu'à des affrontements de niveau mythologique. L'auteur Yongje Park a clairement mis la priorité sur le spectacle des combats.</p><p>Le démarrage est excellent : le tournoi initial est une série de combats créatifs entre combattants aux styles très différents, avec une énergie et une dynamisme visuel remarquables. Jin Mo-Ri est un protagoniste authentiquement fun, sa maîtrise du Taekwondo étant mise en scène avec une exubérance communicative.</p><p>La série perd de sa cohérence quand elle quitte les combats pour explorer sa mythologie divine, devenant parfois confuse. Mais pour les amateurs d'action pure et de power fantasy, God of High School est une lecture immédiatement satisfaisante.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=god+of+high+school+manhwa&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=god+of+high+school+manhwa", logo: "/logos/amazon.svg" },
    ],
    streaming: [],
  },
  {
    slug: "eleceed",
    title: "Eleceed",
    category: "manhwa",
    tags: "Action · Comédie · Fantasy · Manhwa · Pouvoirs",
    stars: 4,
    synopsis: "Jiwoo est un lycéen gentil aux capacités de vitesse surnaturelles qu'il cache soigneusement. Il recueille un gros chat blessé qui est en fait Kayden, un agent-éveillé légendaire coincé dans un corps de chat. Ensemble ils affrontent les menaces qui pèsent sur le monde des éveillés, entre comédie domestique et action intense.",
    pros: ["Duo Jiwoo/Kayden-chat absolument charmant et hilarant", "Combats d'une créativité et dynamisme excellent", "Équilibre parfait comédie/action/développement de personnage", "Progrès de Jiwoo très satisfaisant"],
    cons: ["Hiatuses récurrents de l'auteur", "Arcs tardifs parfois trop étirés"],
    reviewHtml: `<p>Eleceed est l'une des meilleures surprises du manhwa récent, combinant avec une efficacité remarquable la comédie domestique (un garçon et son chat légendaire piégé dans un corps félin) et l'action de pouvoirs surnaturels de haute volée.</p><p>Jiwoo est un protagoniste authentiquement attachant : gentil sans être naïf, travailleur, déterminé à devenir plus fort pour protéger ceux qu'il aime. Sa relation avec Kayden, qui doit donner des conseils d'agent secret depuis un corps de chat obèse, est une source inépuisable de moments comiques et émotionnels.</p><p>Les combats du manhwa sont d'une créativité et d'une dynamique visuelle excellentes, et le système de pouvoirs est bien construit avec une évolution logique des capacités. Eleceed est une recommandation enthousiaste pour les lecteurs de manhwa d'action qui veulent aussi des personnages et de l'humour.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=eleceed+manhwa&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=eleceed+manhwa", logo: "/logos/amazon.svg" },
    ],
    streaming: [],
  },
  {
    slug: "sweet-home",
    title: "Sweet Home",
    category: "manhwa",
    tags: "Action · Horreur · Psychologie · Manhwa · Post-apocalyptique",
    stars: 4,
    synopsis: "Cha Hyun-soo, lycéen isolé en dépression, emménage seul dans un immeuble délabré. Le lendemain, une catastrophe mondiale transforme les humains en monstres physicalisant leurs désirs les plus profonds. Piégé dans l'immeuble avec d'autres survivants, il doit faire face aux monstres mais aussi à sa propre transformation progressive.",
    pros: ["Concept des monstres comme métaphore des désirs intérieurs brillant", "Atmosphère de huis-clos oppressante parfaitement réalisée", "Développement psychologique des survivants remarquable", "Design des monstres inventif et visuellement saisissant"],
    cons: ["Seconde moitié moins forte que la première", "Certains personnages secondaires sous-exploités"],
    reviewHtml: `<p>Sweet Home est le manhwa d'horreur qui a explosé avec son adaptation Netflix et mérite pleinement son succès. Youngchan Hwang et Carnby Kim ont créé un horror-thriller de huis-clos d'une efficacité redoutable, avec une prémisse brillante : les monstres sont les désirs inconscients des humains rendus visibles.</p><p>Un glouton devient une masse de chair, un dépressif une créature de vide, un jaloux une chose qui dévore. Cette logique donne aux créatures une cohérence horrifiante et permet des passages quasi-allégoriques sur la nature humaine. L'immeuble devient un microcosme de la société confrontée à ses propres abîmes.</p><p>L'arc psychologique du protagoniste, confronté à sa propre monstruification possible, est traité avec une nuance remarquable. Sweet Home n'est pas seulement effrayant : c'est aussi un récit sur la résilience et la raison de continuer à vivre. Un des meilleurs manhwa d'horreur disponibles.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=sweet+home+manhwa&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=sweet+home+manhwa", logo: "/logos/amazon.svg" },
    ],
    streaming: [],
  },
  {
    slug: "true-beauty",
    title: "True Beauty",
    category: "manhwa",
    tags: "Comédie · Romance · Tranche de vie · Manhwa",
    stars: 3,
    synopsis: "Lim Jugyeong est une lycéenne complexée par son physique qui maîtrise le maquillage jusqu'à devenir méconnaissable. Sa double vie est connue de deux garçons : Lee Suho, populaire et distant, et Han Seojun, rebelle avec un coeur d'or. Une comédie romantique de manhwa qui explore les questions de beauté, d'image de soi et d'authenticité.",
    pros: ["Thème de l'image et du maquillage bien traité", "Triangle amoureux efficace", "Humour léger et accessible"],
    cons: ["Tropes du triangle amoureux très classiques", "Résolution parfois trop rapide des conflits", "Personnages secondaires peu développés"],
    reviewHtml: `<p>True Beauty est le manhwa romance qui a cartonné sur Webtoon grâce à un sujet universel : la pression sociale sur l'apparence physique, et comment le maquillage peut servir à la fois d'armure et de masque. Yaongyi traite ce thème avec légèreté et humour tout en touchant à quelque chose de réel.</p><p>Lim Jugyeong est un personnage auquel beaucoup de lecteurs s'identifient : complexée, qui utilise le maquillage pour être une autre personne. Sa découverte progressive de son estime de soi, aidée par deux garçons qui l'apprécient sous différentes formes, constitue l'arc émotionnel central.</p><p>Le triangle amoureux est exécuté avec les codes classiques du genre et satisfait les attentes de son public cible. True Beauty n'est pas une oeuvre ambitieuse, mais c'est un manhwa romance léger bien fait pour ceux qui cherchent une lecture accessible et touchante.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=true+beauty+manhwa&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=true+beauty+manhwa", logo: "/logos/amazon.svg" },
    ],
    streaming: [],
  },
  {
    slug: "lookism",
    title: "Lookism",
    category: "manhwa",
    tags: "Action · Comédie · Drame · Manhwa · Société",
    stars: 4,
    synopsis: "Daniel Park, lycéen obèse et victime de harcèlement, se réveille un matin avec un deuxième corps, beau et athlétique. Il peut passer d'un corps à l'autre pendant que l'un dort. Cette prémisse SF permet une critique incisive des discriminations basées sur l'apparence physique dans la société coréenne et mondiale.",
    pros: ["Critique sociale de la superficialité et du lookisme percutante", "Concept SF exploité avec intelligence et cohérence", "Évolution vers les arts martiaux et le crime bien intégrée", "Nombreux arcs de personnages secondaires remarquablement développés"],
    cons: ["Très long (500+ chapitres), certains arcs s'étirent", "Ton inégal entre comédie, drame et action"],
    reviewHtml: `<p>Lookism est un manhwa qui commence avec une prémisse fantaisiste pour livrer une critique sociale d'une acuité remarquable. Park Tae-jun utilise le concept des deux corps pour démontrer avec précision comment la société traite différemment les individus selon leur apparence, avec une honnêteté parfois brutale.</p><p>Ce qui distingue Lookism de la simple satire, c'est sa capacité à développer ses personnages secondaires avec une profondeur inattendue. Chaque personnage du lycée a son propre arc, ses propres traumatismes et ses propres façons de naviguer dans une société qui les juge sur leur physique.</p><p>La série évolue vers les arts martiaux et les organisations criminelles dans ses arcs tardifs, changeant de ton mais maintenant l'intérêt. Sur 500+ chapitres, la qualité reste globalement haute. Pour ceux qui veulent un manhwa socialement conscient avec de l'action et de l'émotion, Lookism est un excellent choix.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=lookism+manhwa&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=lookism+manhwa", logo: "/logos/amazon.svg" },
    ],
    streaming: [],
  },
  {
    slug: "weak-hero",
    title: "Weak Hero",
    category: "manhwa",
    tags: "Action · Drame · Manhwa · Lycée · Violence scolaire",
    stars: 4,
    synopsis: "Yeon Si-Eun, premier de classe brillant mais physiquement faible, utilise son intelligence et sa connaissance des points de pression pour vaincre des adversaires bien plus forts physiquement. Dans un lycée dominé par des gangs brutaux, il refuse de plier. Un manhwa sur l'utilisation de l'intellect face à la brutalité.",
    pros: ["Combats intelligents basés sur la tactique plutôt que la force", "Protagoniste brillant et attachant malgré son côté froid", "Réalisme de la violence scolaire sans glamourisation", "Amitié Gray/Ben d'une sincérité touchante"],
    cons: ["Ton très sombre et violent, peu de légèreté", "Certains adversaires manichéens"],
    reviewHtml: `<p>Weak Hero est le manhwa de délinquance scolaire le plus intelligent de sa génération. Seopass et Razen ont créé un protagoniste qui refuse l'archétype du héros fort : Yeon Si-Eun est chétif et physiquement vulnérable, mais utilise son intelligence supérieure pour neutraliser des adversaires bien plus imposants.</p><p>Ce concept de combat tactique, où la connaissance de l'anatomie et la préparation remplacent la force brute, donne aux affrontements une originalité bienvenue dans un genre dominé par la puissance physique. Si-Eun reste vulnérable même quand il gagne, ce qui maintient une tension réaliste.</p><p>L'amitié progressive entre Si-Eun et Ben, son protecteur improbable, est l'arc émotionnel qui donne de la chaleur à un manhwa par ailleurs très sombre sur la violence des hiérarchies adolescentes. Weak Hero est une lecture recommandée pour les amateurs de drama scolaire réaliste.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=weak+hero+manhwa&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=weak+hero+manhwa", logo: "/logos/amazon.svg" },
    ],
    streaming: [],
  },
  {
    slug: "dr-stone",
    title: "Dr. STONE",
    category: "manga",
    tags: "Action · Aventure · Comédie · Science · Shōnen",
    stars: 4,
    synopsis: "Senku Ishigami, génie scientifique, est pétrifié avec toute l'humanité puis se réveille 3700 ans plus tard dans un monde de pierre. Son objectif : reconstruire la civilisation scientifique en repartant de zéro, avec uniquement la connaissance et le raisonnement scientifique. Un manga qui rend la science passionnante et accessible.",
    pros: ["Science réelle intégrée de façon passionnante et accessible", "Senku parmi les protagonistes les plus originaux du shōnen Jump", "Concept de reconstruction civilisationnelle fascinant", "Humour constant et efficace"],
    cons: ["Arcs de battle shōnen tardifs en contradiction avec l'esprit initial", "Certains personnages peu développés"],
    reviewHtml: `<p>Dr. Stone est le manga le plus pédagogique et inventif de Weekly Jump des dernières années. Riichiro Inagaki (auteur d'Eyeshield 21) et Boichi ont créé une oeuvre qui parvient à rendre la chimie, la physique et la biologie genuinement excitantes à travers un récit de reconstruction civilisationnelle ambitieux.</p><p>Senku est un personnage unique dans le shōnen : un génie scientifique pur dont le pouvoir est la connaissance plutôt que la force. Sa façon de résoudre les problèmes par la déduction et l'expérimentation est constamment satisfaisante intellectuellement, et ses explications scientifiques sont réelles et correctes.</p><p>Le concept du Royaume de la Science vs le Royaume de la Force fonctionne comme une métaphore de la raison vs la superstition/le pouvoir. Les arcs tardifs où le manga verse dans le battle shōnen plus conventionnel sont moins originaux, mais les premières parties sont parmi les meilleures de sa génération.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=dr+stone+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=dr+stone+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=dr-stone", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "toilet-bound-hanako-kun",
    title: "Toilet-Bound Hanako-kun",
    category: "manga",
    tags: "Aventure · Comédie · Fantastique · Romance · Shōnen",
    stars: 4,
    synopsis: "Nene Yashiro, lycéenne romantique, invoque Hanako-san des toilettes, le fantôme légendaire de l'école, espérant une aide pour ses problèmes amoureux. Elle découvre que Hanako est en fait un garçon et devient son assistant pour résoudre les mystères des Rumeurs de l'École. Un manga de fantasy gothique japonaise d'une beauté visuelle éblouissante.",
    pros: ["Style graphique d'Aidairo absolument magnifique et unique", "Atmosphère yokai-scolaire parfaitement construite", "Humour et émotions équilibrés avec grâce", "Mystère sur le passé de Hanako bien construit"],
    cons: ["Rythme parfois lent dans les arcs de folklore", "Romance principale peu résolue"],
    reviewHtml: `<p>Toilet-bound Hanako-kun est visuellement l'un des mangas les plus beaux de sa génération. Le duo Aidairo (deux auteures) a créé un style graphique unique qui mêle les influences de l'illustration japonaise traditionnelle et du shounen moderne, donnant à chaque page une qualité d'affiche.</p><p>L'univers du manga est remarquablement bien construit : les Rumeurs de l'École, chacune représentant un aspect du folklore scolaire japonais, sont des arcs auto-conclusifs mais connectés par un mystère central sur le passé de Hanako et les forces qui menacent l'équilibre entre vivants et fantômes.</p><p>La dynamique Hanako/Nene est charmante : le fantôme espiègle et mystérieux et la lycéenne enthousiaste forment un duo complémentaire dans les enquêtes. L'humour léger coexiste avec des moments d'émotion sincère sur la mort et le souvenir. Un manga pour les lecteurs qui apprécient la fantasy japonaise avec un sens esthétique fort.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=hanako+kun+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=toilet+bound+hanako+kun+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=toilet-bound-hanako-kun", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "black-butler",
    title: "Black Butler",
    category: "manga",
    tags: "Action · Comédie · Fantastique · Mystère · Shōnen",
    stars: 4,
    synopsis: "Dans l'Angleterre victorienne, Ciel Phantomhive est le jeune héritier d'une famille noble qui sert la Reine en résolvant les affaires criminelles les plus sombres. Son majordome Sebastian, un démon lié par un contrat, exécute tout avec une perfection absolue en échange de l'âme de Ciel à terme. Gothique, élégant et sombre.",
    pros: ["Esthétique victorienne gothique d'une cohérence parfaite", "Sebastian, personnage de majordome-démon iconique", "Mystères policiers de qualité dans l'arc initial", "Humour serviteurs très efficace"],
    cons: ["Qualité narrative inégale selon les arcs", "Certains arcs tardifs longuets"],
    reviewHtml: `<p>Black Butler (Kuroshitsuji) est le manga gothique victorien par excellence, une oeuvre qui a su créer une esthétique immédiatement reconnaissable et un antagoniste-protagoniste d'une élégance froide fascinante. Yana Toboso publie depuis 2006 une série dont la longévité est justifiée.</p><p>Sebastian Michaelis est l'une des grandes créations du manga shōnen : un démon qui performe la perfection absolue, impeccable dans tous les domaines, avec une arrogance gracieuse qui cache sa véritable nature. Sa relation avec Ciel, transaction froide et calculée sous une surface de loyauté, est la tension centrale de toute l'oeuvre.</p><p>Les arcs policiers de la série (les morts dans la Tamise, Jack l'Éventreur) sont de bons thrillers d'époque. Les arcs plus fantastiques qui suivent sont d'une qualité variable, mais l'esthétique victorienne constante maintient le charme de la série. Un incontournable du manga gothique.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=black+butler+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=black+butler+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=black-butler", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "fullmetal-alchemist",
    title: "Fullmetal Alchemist",
    category: "manga",
    tags: "Action · Aventure · Drame · Fantasy · Shōnen",
    stars: 5,
    synopsis: "Les frères Elric ont violé la loi suprême de l'alchimie en tentant de ressusciter leur mère : Edward a perdu un bras et une jambe, Alphonse son corps entier (son âme est scellée dans une armure). Pour récupérer leurs corps, ils cherchent la Pierre Philosophale dans un monde steampunk d'alchimie, confrontant des vérités de plus en plus sombres sur leur État.",
    pros: ["Oeuvre parfaitement construite de bout en bout (27 volumes)", "Thèmes profonds sur le sacrifice, la culpabilité et la rédemption", "Galerie de personnages tous mémorables et bien développés", "Fin satisfaisante et méritée"],
    cons: ["Peu de défauts majeurs signalables"],
    reviewHtml: `<p>Fullmetal Alchemist est souvent cité comme le manga le mieux construit de l'histoire du médium, et l'argument est difficile à contester. Hiromu Arakawa a publié entre 2001 et 2010 une oeuvre d'une cohérence, d'une profondeur et d'une satisfaction narrative quasi-parfaites.</p><p>Tout dans FMA est maîtrisé : le système d'alchimie avec ses règles et ses coûts équivalents qui structurent tout le récit, les personnages secondaires dont aucun n'est un remplissage, les antagonistes dont les motivations sont compréhensibles même quand elles sont terribles, et les thèmes sur la guerre, le génocide et l'abus du pouvoir traités avec un sérieux rare dans le shōnen.</p><p>La fin de Fullmetal Alchemist reste l'une des plus satisfaisantes de l'histoire du manga : elle paye chaque investissement émotionnel et narratif du lecteur avec précision. Une oeuvre idéale pour découvrir le manga, et une lecture indispensable pour tout amateur sérieux du médium.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=fullmetal+alchemist+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=fullmetal+alchemist+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=fullmetal-alchemist", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "soul-eater",
    title: "Soul Eater",
    category: "manga",
    tags: "Action · Aventure · Comédie · Fantasy · Shōnen",
    stars: 4,
    synopsis: "À la Death Weapon Meister Academy (DWMA), des étudiants s'entraînent avec leurs partenaires transformables en armes pour récolter 99 âmes de criminels et une âme de sorcière, créant une arme divine pour le dieu de la Mort. Maka et son partenaire Soul Eater, Death the Kid et ses soeurs Thompson, Black Star et Tsubaki forment les protagonistes de cette aventure dark fantasy.",
    pros: ["Esthétique halloweenesque unique et inoubliable", "Galerie de personnages et d'antagonistes mémorables", "Humour constant et efficace", "Arcs d'action solides et bien chorégraphiés"],
    cons: ["Fin précipitée qui différencie du matériel de l'anime", "Dernier arc moins fort"],
    reviewHtml: `<p>Soul Eater est l'un des mangas les plus visuellement distinctifs de sa génération. Atsushi Ohkubo a créé un univers de dark fantasy halloweenesque d'une cohérence esthétique absolue, où tout -- architecture, personnages, atmosph\\u00e8re -- respire le gothique décoratif joyeux.</p><p>La DWMA et ses alentours sont un terrain de jeu visuel inépuisable, et les personnages qui le peuplent sont tous mémorables. Death the Kid avec son obsession de la symétrie parfaite est un personnage comique d'une efficacité constante. Maka est une héroïne shōnen peu commune par sa détermination intellectuelle.</p><p>L'anime de 2008, qui diverge du manga dans sa seconde moitié, est souvent la version connue, mais le manga original vaut d'être lu pour son traitement différent des arcs finaux. Soul Eater reste un classique du manga action-fantasy des années 2000, dont l'influence sur l'esthétique manga perdure.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=soul+eater+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=soul+eater+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=soul-eater", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "blue-exorcist",
    title: "Blue Exorcist",
    category: "manga",
    tags: "Action · Aventure · Fantasy · Surnaturel · Shōnen",
    stars: 3,
    synopsis: "Rin Okumura découvre le jour de ses 16 ans qu'il est le fils de Satan et possède des pouvoirs démoniaques. Pour devenir exorciste et protéger le monde, il entre à la True Cross Academy. Un manga d'action fantastique sur un jeune homme qui doit maîtriser ses pouvoirs diaboliques au service du bien.",
    pros: ["Concept du fils de Satan devenu exorciste original", "Bonne dynamique fratrie Rin/Yukio", "Combats bien chorégraphiés"],
    cons: ["Scénario assez classique dans son déroulement", "Nombreux hiatuses qui ont ralenti la publication", "Moins original que d'autres séries du genre"],
    reviewHtml: `<p>Blue Exorcist (Ao no Exorcist) est un manga d'action fantastique solide qui joue habilement sur le paradoxe d'un fils du démon qui choisit de devenir serviteur de la lumière. Kazue Kato crée une dynamique intéressante entre Rin et son frère jumeau Yukio, exorciste formé depuis l'enfance alors que Rin vient de découvrir ses pouvoirs.</p><p>L'académie d'exorcisme est un cadre riche qui permet de nombreuses situations combinant action et comédie scolaire. Les combats sont bien rythmés et les pouvoirs de Rin (les flammes bleues du fils de Satan) sont visuellement distinctifs.</p><p>La série souffre de hiatuses récurrents qui ont fragmenté son rythme de publication et de quelques arcs moins inspirés. Mais pour les amateurs de shōnen d'action avec une touche de fantastique chrétien-japonais, c'est une lecture agréable et solide.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=blue+exorcist+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=blue+exorcist+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=blue-exorcist", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "noragami-stray-god",
    title: "Noragami: Stray God",
    category: "manga",
    tags: "Action · Aventure · Comédie · Fantasy · Shōnen · Mythologie",
    stars: 4,
    synopsis: "Yato est un dieu mineur sans temple ni fidèle qui accepte tous les travaux pour 5 yens. Il rencontre Hiyori, lycéenne dont l'âme sort accidentellement de son corps, et Yukine, un esprit mort devenu son arme divine. Ensemble ils naviguent dans le monde des dieux shinto, des esprits et des menaces qui pèsent sur leurs existences précaires.",
    pros: ["Mythologie shinto abordée avec précision et inventivité", "Dynamique du trio Yato/Hiyori/Yukine très bien écrite", "Équilibre parfait entre humour léger et drama profond", "Arcs de développement de Yukine parmi les plus touchants du manga"],
    cons: ["Publication lente en magazine (hiatuses fréquents)", "Arcs tardifs très denses en mythologie shinto"],
    reviewHtml: `<p>Noragami est l'un des mangas les plus intelligents dans son utilisation de la mythologie japonaise. Adachitoka mêle comédie légère et drama profond avec une fluidité remarquable, utilisant le panthéon shinto comme toile de fond pour explorer des thèmes de l'identité, de la mort et de la valeur d'une existence.</p><p>Yato est un personnage attachant et complexe : dieu raté et comique en surface, mais porteur d'un passé sombre et d'une envie sincère d'être reconnu, d'exister. Sa relation avec Yukine, esprit adolescent qui doit apprendre à accepter sa mort, est l'arc émotionnel le plus fort de la série et l'un des plus beaux du manga fantastique.</p><p>La série brille particulièrement dans ses arcs plus sombres où la mythologie shinto est explorée avec un sérieux documenté. Les dieux, les esprits, les règles du monde des morts sont traités avec un respect de la source remarquable. Un manga pour ceux qui veulent du fantastique japonais authentique.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=noragami+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=noragami+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=noragami-stray-god", logo: "/logos/manganim.svg" },
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
console.log("\n🎉 Patch batch3-lot5 terminé !");
