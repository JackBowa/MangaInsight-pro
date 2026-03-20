/**
 * Patch lot 1/5 — 20 séries (batch2)
 * node scripts/patch-batch2-lot1.mjs
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
  { name: "Manganim",    url: `https://manganim.fr/search?q=${q}`,                                          logo: L  },
  { name: "Fnac",        url: `https://www.fnac.com/SearchResult/ResultList.aspx?Search=${q}+tome`,         logo: LF },
  { name: "Amazon",      url: `https://www.amazon.fr/s?k=${q}+tome`,                                        logo: LA },
];
const shopManhwa = (q) => [
  { name: "Fnac",        url: `https://www.fnac.com/SearchResult/ResultList.aspx?Search=${q}`,              logo: LF },
  { name: "Amazon",      url: `https://www.amazon.fr/s?k=${q}`,                                             logo: LA },
];
const cr = (q) => [{ name: "Crunchyroll", url: `https://www.crunchyroll.com/fr/search?q=${encodeURIComponent(q)}`, logo: LC }];
const nf = (q) => [{ name: "Netflix",     url: `https://www.netflix.com/search?q=${encodeURIComponent(q)}`,        logo: LN }];

const PATCHES = {

  "ashita-no-joe-fighting-for-tomorrow": {
    tags: "Boxe · Sport · Drame · Seinen",
    stars: 5,
    synopsis: "Joe Yabuki, voyou sans avenir errant dans les bas-fonds de Tokyo, croise la route de Danpei Tange, ancien entraîneur de boxe alcoolique qui voit en lui un talent exceptionnel. Ensemble, ils vont gravir les échelons d'un monde impitoyable, Joe transformant sa rage en uppercut, son désespoir en jab, sa vie entière en combat. Publié de 1968 à 1973, Ashita no Joe est la référence absolue du manga de sport, celle qui a tout inventé.",
    pros: ["Récit de rédemption parmi les plus puissants de toute la bande dessinée mondiale", "Joe Yabuki est l'un des personnages les plus complexes et attachants du manga", "Finale parmi les plus célèbres et discutées de l'histoire du médium", "Exploration sans concession de la pauvreté, de l'ambition et de la dignité"],
    cons: ["Art daté des années 60-70, déroutant pour les nouveaux lecteurs", "Rythme lent propre à l'époque, très différent du manga moderne"],
    reviewHtml: `<p>Ashita no Joe n'est pas seulement un manga de boxe. C'est l'histoire d'un homme qui n'a rien, qui ne vaut rien aux yeux du monde, et qui décide de tout mettre dans ses poings pour prouver qu'il existe. Joe Yabuki est l'archétype du shōnen héros avant que le terme n'existe, brut, autodestructeur, incapable de renoncer.</p><p>Asao Takamori et Tetsuya Chiba ont créé quelque chose qui dépasse le genre sportif. Les combats sont prétextes à des explorations psychologiques d'une profondeur rare. Chaque adversaire de Joe est un miroir, une version différente de ce qu'il aurait pu devenir. Rikiishi Toru, en particulier, est un rival d'une intensité tragique qui hante tout le manga.</p><p>La conclusion d'Ashita no Joe est l'une des plus discutées de l'histoire du manga. Cinquante ans plus tard, elle divise encore. C'est la marque des grandes oeuvres : elles refusent les réponses faciles.</p>`,
    shops: shopManga("Ashita+no+Joe"),
    streaming: [],
  },

  "asobi-asobase": {
    tags: "Comédie · Slice of Life · Shōjo · École",
    stars: 3,
    synopsis: "Trois lycéennes fondent le club Pastime, censé explorer les loisirs traditionnels japonais. En réalité, elles passent leurs journées à se chamailler, se faire des farces et enchaîner des situations de plus en plus absurdes. Hanako, Olivia et Kasumi forment un trio explosive dont l'humour repose autant sur les expressions faciales outrancières que sur les retournements de situation.",
    pros: ["Humour absurde très efficace et rythmé", "Les expressions des personnages sont un art à part entière", "Gags originaux qui évitent les clichés du genre"],
    cons: ["Répétitif sur la durée, le format court s'essouffle", "Peu de développement de personnages ou d'enjeux narratifs"],
    reviewHtml: `<p>Asobi Asobase est une comédie qui mise tout sur un seul registre : l'absurde porté à son paroxysme par des expressions faciales totalement outrancières. Ça marche, et souvent très bien. Le contraste entre l'apparence sage des trois lycéennes et la violence comique de leurs interactions est une source intarissable de moments hilarants.</p><p>Le manga n'a pas vocation à raconter une histoire ni à développer ses personnages. C'est un recueil de gags au format court, et dans cette discipline, il excelle. Idéal pour lire un chapitre entre deux séries plus denses.</p>`,
    shops: shopManga("Asobi+Asobase"),
    streaming: [],
  },

  "bakuman": {
    tags: "Drame · Seinen · Création · Romance",
    stars: 5,
    synopsis: "Moritaka Mashiro, lycéen rêvant secrètement de devenir mangaka comme son oncle décédé, est découvert par son camarade Akito Takagi qui a lu ses dessins. Ensemble, ils décident de créer un manga pour le Weekly Shōnen Jump, avec comme condition de Mashiro : si leur série est adaptée en animé, la fille qu'il aime, Miho Azuki, en doublera l'héroïne. Écrit par les créateurs de Death Note, Bakuman est une lettre d'amour au manga et à ceux qui le font.",
    pros: ["Plongée fascinante dans les coulisses de l'industrie manga (Jump, éditeurs, sérialisation)", "La romance à distance entre Mashiro et Miho est d'une pureté désarmante", "Rivalités entre mangakas d'une intensité rarement atteinte", "Progression réaliste et méritée des protagonistes"],
    cons: ["Vision de l'industrie parfois idéalisée et sexiste sur le rôle des femmes", "Certains personnages secondaires sous-développés"],
    reviewHtml: `<p>Bakuman est l'un des manga les plus singuliers de Tsugumi Ohba et Takeshi Obata, le duo de Death Note. Ici, pas de dieu de la mort ni de cahier maudit. Juste deux adolescents qui veulent faire du manga dans le Jump, et tout ce que ça implique d'obstination, de doutes et de sacrifice.</p><p>La grande force du manga est son authenticité sur l'industrie. Ohba et Obata l'ont vécue de l'intérieur, et ça se sent à chaque chapitre. Les réunions avec les éditeurs, les taux de popularité, les décisions éditoriales, tout est décrit avec une précision qui donne l'impression d'un documentaire romancé. Pour quiconque s'intéresse à la création, c'est fascinant.</p><p>La romance entre Mashiro et Miho, qui se promettent de ne pas se voir jusqu'à la réalisation de leur rêve commun, est d'une pureté touchante dans sa naïveté. Elle donne au manga une dimension émotionnelle qui contraste avec l'aspect professionnel. Un chef-d'oeuvre pour tous ceux qui aiment le manga autant que ces deux personnages l'aiment.</p>`,
    shops: shopManga("Bakuman"),
    streaming: [],
  },

  "barakamon": {
    tags: "Comédie · Slice of Life · Seinen · Campagne",
    stars: 4,
    synopsis: "Seishuu Handa, calligraphe prodige tokyoïte trop lisse et trop parfait, est exilé par son père sur une île rurale des Gotô après avoir frappé un critique d'art. Confronté à la lenteur de la vie villageoise, aux enfants envahissants et à l'absence de tout ce qui constituait son quotidien, il va devoir se réinventer pour trouver son propre style. Barakamon est un manga sur la créativité, l'authenticité et le bonheur simple.",
    pros: ["Atmosphère chaleureuse et apaisante unique en son genre", "Naru, la petite voisine, est l'un des personnages les plus adorables du manga moderne", "Réflexions sincères sur la création artistique et le perfectionnisme", "Équilibre parfait entre comédie légère et moments émouvants"],
    cons: ["Peu de tension dramatique, peut sembler trop tranquille pour certains", "La fin laisse quelques fils narratifs en suspens"],
    reviewHtml: `<p>Barakamon est un de ces manga qu'on lit pour se sentir mieux. Pas parce qu'il évite les problèmes, mais parce qu'il montre comment une rupture radicale avec ses habitudes peut libérer quelque chose qu'on ne savait pas avoir en soi. Handa n'est pas en vacances sur l'île de Gotô, il se refabrique.</p><p>La relation entre Handa et les habitants de l'île, surtout la petite Naru qui débarque dans son atelier sans permission, est le coeur du manga. Naru est un personnage d'une vitalité communicative, joyeuse et sincère sans jamais tomber dans la mièvrerie. Elle représente exactement ce que Handa a besoin d'apprendre : vivre sans calculer.</p><p>Yoshino Satsuki a le rare talent de parler de création artistique sans jamais être ennuyeux. Les réflexions de Handa sur son style, sur ce que signifie "être authentique" en calligraphie, résonnent bien au-delà du médium. Un manga doux et intelligent.</p>`,
    shops: shopManga("Barakamon"),
    streaming: cr("Barakamon"),
  },

  "battle-angel-alita-last-order": {
    tags: "Sci-fi · Action · Cyberpunk · Seinen",
    stars: 4,
    synopsis: "Alita, cyborg guerrière aux capacités de combat extraordinaires, se réveille dans un monde post-apocalyptique divisé entre la cité céleste Tiphares et la décharge géante Scrapyard. Last Order reprend son histoire après le premier arc, l'envoyant dans le tournoi ZOTT en orbite, affrontant les combattants les plus puissants de la galaxie. Un opéra cyberpunk d'une ambition et d'une densité rares.",
    pros: ["Worldbuilding cyberpunk d'une richesse et d'une cohérence exceptionnelles", "Alita est l'un des personnages féminins les plus forts et complexes du manga", "Combats d'une inventivité technique impressionnante", "Questionnements philosophiques profonds sur l'identité et la conscience"],
    cons: ["Très dense et complexe, demande un investissement important", "Meilleur après avoir lu le premier arc Gunnm"],
    reviewHtml: `<p>Battle Angel Alita est l'une des grandes oeuvres du manga de science-fiction, et Last Order en est la continuation ambitieuse. Yukito Kishiro construit un univers d'une cohérence rare, où chaque élément du worldbuilding, de la physique des combats au fonctionnement des sociétés orbitales, est pensé avec une rigueur d'ingénieur.</p><p>Alita elle-même est un personnage d'exception. Elle n'est pas définie par une mission ou un maître, mais par une recherche constante de ce qu'elle est vraiment, dans des corps successifs, des identités empruntées, des mémoires fragmentées. Cette question de l'identité face au corps modifié est au coeur de tout le manga.</p><p>Last Order monte encore les enchères avec le tournoi ZOTT, qui permet à Kishiro d'introduire des adversaires d'une inventivité folle. Dense, ambitieux, parfois difficile à suivre, mais inoubliable pour les amateurs de science-fiction exigeante.</p>`,
    shops: shopManga("Battle+Angel+Alita"),
    streaming: [],
  },

  "beastars": {
    tags: "Drame · Psychologie · Romance · Seinen",
    stars: 4,
    synopsis: "Dans un monde anthropomorphe où carnivores et herbivores cohabitent sous des règles strictes, Legoshi, loup timide et introverti du lycée Cherryton, tombe amoureux de Haru, une lapine blanche. Leur relation impossible met en lumière les tensions profondes entre instinct et civilisation, désir et morale. Beastars est une métaphore dense sur la discrimination, la sexualité et l'identité.",
    pros: ["Métaphore sociale d'une intelligence et d'une subtilité rares", "Legoshi est un protagoniste d'une complexité psychologique remarquable", "Traitement courageux de thèmes matures : désir, violence, appartenance", "Univers cohérent et original avec ses propres règles sociales"],
    cons: ["Arcs finaux moins maîtrisés et parfois incohérents", "Certains lecteurs décrochent sur la densité thématique"],
    reviewHtml: `<p>Beastars est l'oeuvre la plus ambitieuse de Paru Itagaki, et sans doute l'une des plus originales de sa génération. Sous l'apparence d'un manga d'école avec des animaux anthropomorphes, c'est une exploration dense de ce que signifie contrôler ses instincts, désirer ce qu'on ne peut pas avoir, et exister dans une société qui vous a assigné un rôle.</p><p>Legoshi est un personnage d'une richesse peu commune. Son combat intérieur constant entre sa nature de prédateur et son amour sincère pour Haru est traité avec une honnêteté qui évite les facilités. Il ne triomphe pas de ses instincts, il les négocie, chapitre après chapitre.</p><p>Les premiers arcs sont une réussite quasi totale. La conclusion est plus discutée, Itagaki perdant un peu le fil dans ses derniers volumes. Mais Beastars reste une oeuvre qui prend des risques et les assume, ce qui est déjà beaucoup.</p>`,
    shops: shopManga("Beastars"),
    streaming: nf("Beastars"),
  },

  "blue-spring-ride": {
    tags: "Romance · Shōjo · École · Drame",
    stars: 4,
    synopsis: "Futaba Yoshioka, qui s'était efforcée de réprimer sa féminité au collège pour être acceptée des filles, retrouve au lycée Kou Mabuchi, son premier amour disparu sans explication. Mais Kou a changé, il est devenu distant et cynique. Leur relation hésitante, entre anciens sentiments et nouvelles blessures, forme le coeur d'un shōjo romantique d'une sincérité touchante.",
    pros: ["Évolution psychologique des personnages traitée avec soin et réalisme", "Romance lente et nuancée qui respecte l'intelligence du lecteur", "Kou Mabuchi est un héros shōjo plus complexe que la moyenne", "Art élégant d'Io Sakisaka"],
    cons: ["Rythme parfois très lent, les hésitations s'éternisent", "Quelques arcs secondaires moins captivants"],
    reviewHtml: `<p>Blue Spring Ride fait partie des shōjo qui comprennent que l'amour ne suffit pas pour que deux personnes se retrouvent. Futaba et Kou portent chacun des blessures que l'autre n'a pas vues se former, et leur tentative maladroite de se retrouver malgré ça est le vrai sujet du manga.</p><p>Io Sakisaka écrit des personnages qui pensent et qui se trompent de manière crédible. Les malentendus de Blue Spring Ride ne sont pas là pour créer des rebondissements artificiels, ils naissent d'une psychologie cohérente. Kou en particulier, blessé et fermé, est un héros shōjo qui sort des sentiers battus.</p><p>Le rythme est lent, c'est assumé. Pour les lecteurs qui aiment les romances qui prennent le temps de construire quelque chose, Blue Spring Ride est une très belle lecture.</p>`,
    shops: shopManga("Blue+Spring+Ride"),
    streaming: cr("Ao Haru Ride"),
  },

  "call-of-the-night": {
    tags: "Romance · Surnaturel · Seinen · Vampire",
    stars: 4,
    synopsis: "Kou Yamori, lycéen insomniaque qui fuit le monde le jour, découvre la nuit une liberté qu'il ne soupçonnait pas. Il rencontre Nazuna Nanakusa, une vampire séduisante et nonchalante qui lui propose de le transformer, à condition qu'il tombe amoureux d'elle. Une romance nocturne entre un garçon qui cherche à ressentir quelque chose et une vampire qui fait semblant de ne rien ressentir.",
    pros: ["Atmosphère nocturne unique et envoûtante", "Dynamique de relation original qui inverse les codes du genre vampirique", "Ryou Kotoyama maîtrise parfaitement le rythme et les silences", "Art très élégant, particulièrement efficace dans les scènes de nuit"],
    cons: ["Progression romantique très lente", "Les enjeux de transformation vampirique restent longtemps flous"],
    reviewHtml: `<p>Call of the Night est un manga vampirique qui n'a pas grand chose à voir avec les vampires. C'est surtout une histoire sur l'insomnie comme état d'esprit, sur ces adolescents qui ne savent pas quoi faire de leur vie le jour et qui trouvent dans la nuit un espace où les règles changent.</p><p>Kou et Nazuna forment un duo attachant parce que leurs problèmes sont symétriques. Lui cherche à ressentir quelque chose de vrai. Elle fait tout pour ne pas admettre qu'elle ressent déjà. Cette tension douce est le moteur émotionnel d'un manga qui sait parfaitement gérer ses silences.</p><p>L'ambiance nocturne de Kotoyama est sa marque de fabrique : rues vides, enseignes lumineuses, liberté légèrement vertigineuse. On lit Call of the Night comme on sort la nuit en été, avec ce mélange de mélancolie et d'euphorie.</p>`,
    shops: shopManga("Call+of+the+Night"),
    streaming: cr("Call of the Night"),
  },

  "captain-tsubasa": {
    tags: "Football · Sport · Shōnen · Classique",
    stars: 3,
    synopsis: "Tsubasa Ozora, enfant prodige du football, rêve de remporter la Coupe du Monde avec le Japon. De ses premières parties dans la rue jusqu'aux compétitions internationales, il affronte des rivaux d'exception dont le légendaire gardien Genzo Wakabayashi. Captain Tsubasa, publié depuis 1981, a inspiré des générations de footballeurs professionnels à travers le monde.",
    pros: ["Influence culturelle immense sur le football mondial et japonais", "Rivalités emblématiques qui ont marqué des générations", "Passion communicative pour le football", "Tsubasa est devenu un symbole culturel au-delà du manga"],
    cons: ["Art et techniques narratives très datés des années 80", "Physique complètement irréaliste (tirs nucléaires, gardiens volants)", "Difficile d'aborder pour les nouveaux lecteurs habitués au manga moderne"],
    reviewHtml: `<p>Captain Tsubasa n'est pas un grand manga au sens technique du terme. Il est quelque chose de plus rare : une oeuvre qui a changé la réalité. Des joueurs professionnels comme Zinedine Zidane ou Fernando Torres ont cité Tsubasa comme leur première inspiration footballistique. Pour un manga, c'est une forme de réussite qui dépasse toutes les critiques.</p><p>Yoichi Takahashi a inventé un langage visuel pour le football dans le manga, les tirs qui brisent les filets, les dribbles défiant la physique, les gardiens qui volent. C'est absurde par les standards actuels, mais c'était révolutionnaire en 1981 et ça l'est resté dans l'imaginaire collectif.</p><p>À lire pour comprendre l'histoire du manga sportif et l'impact culturel que peut avoir un dessin animé, mais en acceptant le grand écart avec les standards actuels.</p>`,
    shops: shopManga("Captain+Tsubasa"),
    streaming: nf("Captain Tsubasa"),
  },

  "cardcaptor-sakura": {
    tags: "Magie · Shōjo · Aventure · Romance",
    stars: 4,
    synopsis: "Sakura Kinomoto, écolière de dix ans, découvre par accident le Livre des Clow et libère les Cartes Clow, des entités magiques aux pouvoirs variés. Désignée Cardcaptor par le gardien du livre Cerberus, elle doit récupérer toutes les cartes avant qu'elles ne sèment le chaos. CLAMP signe avec cette série une des oeuvres fondatrices de la magical girl.",
    pros: ["Character design iconique et art CLAMP au sommet de sa forme", "Équilibre parfait entre aventure, humour et moments émouvants", "Représentation des relations et de l'amour d'une ouverture rare pour l'époque", "Sakura est un modèle de protagoniste féminine positive et courageuse"],
    cons: ["Rythme formulaire (capture une carte par chapitre) dans les premiers volumes", "Destiné à un public jeune, certains adultes trouveront le ton trop doux"],
    reviewHtml: `<p>Cardcaptor Sakura est l'une des oeuvres les plus importantes du manga shōjo des années 90. CLAMP a créé avec Sakura Kinomoto une héroïne d'une gentillesse désarmante mais jamais naïve, courageuse sans être agressive, aimante sans être passive. Elle a influencé tout ce qui a suivi dans le genre magical girl.</p><p>Ce qui distingue CCS de ses contemporaines, c'est son traitement des relations. Les amours du manga ne sont jamais réduites à un schéma simple : des personnages aiment des personnages du même genre, des élèves aiment des professeurs, et tout ça est présenté avec une naturalité et une douceur qui était révolutionnaire en 1996.</p><p>L'arc final avec les Cartes Transparentes (dans la suite publiée en 2016) est à la hauteur de l'original. CLAMP n'a rien perdu de leur maîtrise émotionnelle. Une oeuvre à faire découvrir aux plus jeunes, mais dont les adultes apprécieront toute la subtilité.</p>`,
    shops: shopManga("Cardcaptor+Sakura"),
    streaming: cr("Cardcaptor Sakura"),
  },

  "classroom-of-the-elite": {
    tags: "Psychologie · Thriller · Seinen · École",
    stars: 4,
    synopsis: "À l'École Avancée Koudo Ikusei, les élèves semblent jouir d'une liberté totale avec des points échangeables contre tout ce qu'ils désirent. Mais Kiyotaka Ayanokoji, nouvel élève discret assigné à la classe D, la moins bien notée, comprend rapidement que l'école n'est qu'un champ de bataille social masqué. Avec la brillante Suzune Horikita, il va commencer à déjouer les règles du jeu.",
    pros: ["Ayanokoji est l'un des protagonistes à l'intellect le plus fascinant du manga récent", "Jeux mentaux et manipulations d'une construction rigoureuse", "Révélations progressives sur les personnages et le système de l'école", "Ambiance tendue et paranoïaque très efficace"],
    cons: ["Adaptation du light novel parfois condensée maladroitement", "Certains personnages manquent de profondeur initiale"],
    reviewHtml: `<p>Classroom of the Elite tire sa force d'un protagoniste quasi-unique dans le manga moderne. Ayanokoji n'est pas le héros classique qui grandit et surmonte ses faiblesses. Il est déjà au sommet, il se cache volontairement dans la médiocrité, et observer ses calculs se dérouler est d'une satisfaction intellectuelle réelle.</p><p>L'École Koudo Ikusei est un microcosme social fascinant. Sous le vernis de liberté et de bien-être, c'est une compétition darwinienne permanente où les classes s'affrontent pour des ressources et des privilèges. Chaque arc dévoile une couche supplémentaire du système et des personnages qui le font fonctionner.</p><p>Le manga bénéficie d'une adaptation fidèle du light novel d'Amatora Shougo. Pour les amateurs de thrillers mentaux façon Machiavel en uniforme scolaire, c'est une lecture addictive.</p>`,
    shops: shopManga("Classroom+of+the+Elite"),
    streaming: cr("Classroom of the Elite"),
  },

  "dandadan": {
    tags: "Action · Surnaturel · Comédie · Romance",
    stars: 4,
    synopsis: "Momo Ayase croit aux fantômes mais pas aux extraterrestres. Ken Okarun croit aux extraterrestres mais pas aux fantômes. Pour se prouver mutuellement tort, ils s'aventurent ensemble dans des lieux hantés et se retrouvent confrontés à des phénomènes paranormaux dépassant de loin leurs convictions. Dandadan mélange aliens, yokai, amour de lycéens et bagarres cosmiques dans un tourbillon d'énergie visuelle.",
    pros: ["Énergie et créativité visuelle rares, chaque chapitre surprend", "Humour absurde et action effrénée s'équilibrent parfaitement", "Character design des monstres et aliens d'une inventivité folle", "Rythme endiablé qui ne laisse jamais souffler"],
    cons: ["Trop chaotique pour certains lecteurs, difficile de suivre tous les fils", "La romance est parfois reléguée au second plan malgré son potentiel"],
    reviewHtml: `<p>Dandadan est l'une des séries les plus excitantes du Jump+ de ces dernières années. Yukinobu Tatsu vient de chez Shintaro Kago (manga d'horreur expérimental) et ça se voit : sa mise en page est d'une inventivité permanente, ses créatures sont visuellement mémorables, et son sens du rythme est redoutable.</p><p>Le manga assume pleinement son chaos. Aliens contre yokai, vol de parties génitales, grand-mères combattantes, amour de lycéens maladroit au milieu de l'apocalypse. Ce mélange improbable fonctionne parce que Tatsu y croit à fond et dessine chaque absurdité avec le même sérieux qu'une scène épique.</p><p>La relation entre Momo et Okarun, gênée et maladroite, est le fil émotionnel qui donne de l'ancrage à tout le reste. Dandadan est fun, frénétique, et visuellement parmi ce qui se fait de mieux dans le manga d'action contemporain.</p>`,
    shops: shopManga("Dandadan"),
    streaming: cr("Dandadan"),
  },

  "didnt-i-say-to-make-my-abilities-average-in-the-next-life": {
    tags: "Isekai · Comédie · Fantasy · Shōnen",
    stars: 3,
    synopsis: "Misato Kurihara, surdouée marginalisée dans sa vie passée, demande à sa réincarnation d'avoir des capacités parfaitement moyennes. Le problème : la moyenne divine est calculée entre la créature la plus faible et la plus puissante de l'univers, lui donnant des pouvoirs colossaux. Elle forme avec trois amies un groupe d'aventurières tout en cherchant désespérément à passer inaperçue, sans grand succès.",
    pros: ["Prémisse comique bien exploitée sur la malédiction d'être involontairement OP", "Dynamique de groupe des quatre filles sympathique et légère", "Humour efficace sur les clichés de l'isekai"],
    cons: ["Peu de profondeur narrative ou émotionnelle", "Assez prévisible dans ses rebondissements", "L'humour s'épuise sur la longueur"],
    reviewHtml: `<p>Didn't I Say to Make My Abilities Average est une comédie isekai honnête qui fait bien ce qu'elle promet : se moquer gentiment des conventions du genre tout en les reproduisant avec affection. La prémisse, vouloir être ordinaire et rater à chaque fois, est une bonne source de gags récurrents.</p><p>Le manga ne prétend pas être plus que ce qu'il est. C'est une lecture légère et amusante, portée par une héroïne sympathique et un groupe d'amies attachantes. Pour les fans d'isekai qui cherchent quelque chose de détendu et sans prise de tête, c'est un choix tout à fait respectable.</p>`,
    shops: shopManga("Abilities+Average"),
    streaming: cr("Didn't I Say Make My Abilities Average"),
  },

  "domestic-girlfriend": {
    tags: "Romance · Drame · Seinen · Controversé",
    stars: 2,
    synopsis: "Natsuo Fujii est amoureux de sa professeure Hina, sans espoir de réciprocité. Après une nuit impulsive avec une inconnue prénommée Rui, il découvre que son père va se remarier avec la mère de deux filles : Hina et Rui. Le voilà colocataire de la femme qu'il aime et de celle avec qui il a couché. Domestic Girlfriend explore ce triangle impossible jusqu'à ses limites les plus controversées.",
    pros: ["Tension dramatique réelle et situations qui évitent rarement les conséquences", "Certains arcs émotionnellement efficaces malgré les excès", "La relation Natsuo-Rui finit par avoir une vraie profondeur"],
    cons: ["Relation professeur-élève romanticisée de façon problématique", "Natsuo est un protagoniste souvent exaspérant", "Conclusion très discutée et perçue comme incohérente par beaucoup"],
    reviewHtml: `<p>Domestic Girlfriend est un manga qui ne fait pas semblant d'être autre chose qu'un drama romantique provocateur. Kei Sasuga pousse ses personnages dans des situations de plus en plus extrêmes, assumant pleinement le côté scandaleux de sa prémisse.</p><p>Le manga a ses défenseurs pour sa tension émotionnelle réelle et quelques arcs bien construits. Il a aussi ses détracteurs pour la romanticisation d'une relation professeur-élève et une conclusion qui a divisé profondément son lectorat. Les deux camps ont leurs raisons. À aborder en sachant ce qu'on va trouver.</p>`,
    shops: shopManga("Domestic+Girlfriend"),
    streaming: cr("Domestic Girlfriend"),
  },

  "dont-toy-with-me-miss-nagatoro": {
    tags: "Comédie · Romance · Seinen · École",
    stars: 3,
    synopsis: "Hachioji, lycéen introverti passionné de manga, se fait remarquer par Nagatoro, une première année qui prend un malin plaisir à le taquiner sans relâche. Ce qui commence comme un harcèlement ambigu évolue progressivement vers une relation de confiance teintée d'affection maladroite. Le manga joue sur la frontière fine entre moquerie et soin.",
    pros: ["Évolution de la relation Nagatoro-Senpai bien dosée sur la durée", "Nagatoro est un personnage avec plus de profondeur qu'il n'y paraît", "Humour efficace dans les situations de taquinerie", "Les passages sur le manga de Senpai sont touchants"],
    cons: ["Les premiers chapitres sont difficiles à apprécier selon la tolérance au harcèlement fictif", "Rythme irrégulier entre les arcs romantiques et comiques"],
    reviewHtml: `<p>Miss Nagatoro est un manga qui divise essentiellement sur ses premiers chapitres. La dynamique initiale, une fille qui tourmente un garçon visiblement mal à l'aise, peut mettre mal à l'aise. Mais le manga évolue, et assez vite Nagatoro révèle une affection maladroite et sincère sous ses provocations.</p><p>La force du manga sur la longueur est l'évolution de Senpai. Ce n'est pas juste un objet de taquinerie : il développe sa confiance en lui, continue son manga, apprend à s'affirmer. Nagatoro est le catalyseur d'une vraie progression. Pour les lecteurs patients, c'est une romance légère qui finit par mériter son investissement.</p>`,
    shops: shopManga("Nagatoro"),
    streaming: cr("Nagatoro"),
  },

  "dorohedoro": {
    tags: "Dark Fantasy · Action · Comédie · Seinen",
    stars: 5,
    synopsis: "Caiman est un homme à tête de reptile vivant dans le Trou, une ville dystopique où les sorciers viennent tester leurs sorts sur les habitants. Avec son amie Nikaido, il traque les sorciers en espérant retrouver celui qui lui a volé son visage et sa mémoire. Dorohedoro est un univers post-apocalyptique halluciné qui mélange horreur body-horror, comédie absurde et worldbuilding d'une richesse époustouflante.",
    pros: ["Univers absolument unique, rien d'autre n'y ressemble dans le manga", "Caiman et Nikaido forment l'un des meilleurs duos du manga seinen", "Humour absurde qui coexiste parfaitement avec la noirceur de l'univers", "Art chaotique de Q Hayashida qui devient vite addictif"],
    cons: ["Art volontairement brouillon difficile à apprivoiser au départ", "Intrigue complexe avec de nombreux personnages à suivre"],
    reviewHtml: `<p>Dorohedoro est l'une des oeuvres les plus singulières de tout le manga. Q Hayashida a construit pendant quinze ans un univers délirant et cohérent, violent et hilarant, où des sorciers en costume sèment le chaos dans une ville-décharge et où le héros est un reptile amnésique qui mord les têtes pour trouver des réponses.</p><p>Ce qui est remarquable, c'est que malgré l'apparent chaos visuel et narratif, Dorohedoro est d'une maîtrise totale. Chaque personnage a sa propre logique, ses propres désirs. Les sorciers, qu'on devrait détester, deviennent des personnages attachants avec leurs propres codes et leur famille dysfonctionnelle. La frontière entre héros et antagonistes n'existe presque pas.</p><p>Le tone est unique : des scènes de barbecue détendu succèdent à des massacres, et ça fonctionne. Dorohedoro est l'oeuvre qui prouve que le manga peut faire des choses qu'aucun autre médium ne peut se permettre.</p>`,
    shops: shopManga("Dorohedoro"),
    streaming: nf("Dorohedoro"),
  },

  "dragon-quest-the-adventure-of-dai": {
    tags: "Fantasy · Aventure · Shōnen · Classique",
    stars: 4,
    synopsis: "Dai, jeune garçon élevé par des monstres sur une île isolée, rêve de devenir héros. Quand le Seigneur des Ténèbres Hadlar ressurgit, Dai découvre qu'il est le descendant d'un légendaire Paladin. Aux côtés du magicien Popp et de la princesse Leona, il part combattre l'Empire des Ténèbres. Adaptation du célèbre jeu vidéo, Dragon Quest: The Adventure of Dai est un shōnen classique des années 90 d'une qualité remarquable.",
    pros: ["Worldbuilding riche hérité de la saga Dragon Quest enrichi d'éléments originaux", "Le trio Dai-Popp-Maam est l'une des meilleures dynamiques de groupe du shōnen", "Progression de puissance bien dosée et satisfaisante", "Antagonistes avec des motivations et une présence mémorables"],
    cons: ["Art daté des années 90 qui peut dérouter", "Certaines conventions du shōnen de l'époque aujourd'hui très codifiées"],
    reviewHtml: `<p>The Adventure of Dai est l'une des grandes réussites du shōnen des années 90, et sa réédition récente a permis à de nouvelles générations de le découvrir enfin. Riku Sanjo et Koji Inada ont pris l'univers de Dragon Quest et en ont fait quelque chose de profondément personnel, une épopée héroïque avec ses propres règles et sa propre mythologie.</p><p>Le trio principal fonctionne parce que chacun a son arc de croissance distinct. Popp en particulier, d'abord couard et calculateur, traverse l'une des meilleures évolutions de personnage du shōnen classique. Sa transformation est crédible parce qu'elle est payée à un prix réel.</p><p>Les antagonistes sont également notables. Hyunckel et Baran, en particulier, sont des adversaires qui dépassent le simple rôle de boss à vaincre. Dai reste l'une des meilleures adaptations de jeu vidéo en manga, et ce n'est pas rien.</p>`,
    shops: shopManga("Dragon+Quest+Dai"),
    streaming: cr("Dragon Quest Dai no Daibouken"),
  },

  "eyeshield-21": {
    tags: "Football américain · Sport · Shōnen · Comédie",
    stars: 4,
    synopsis: "Sena Kobayakawa, lycéen timide qui a passé sa vie à fuir les brutes, est repéré par Hiruma Yoichi, capitaine diabolique de l'équipe de football américain du lycée Deimon. Sa vitesse de fuite exceptionnelle fait de lui le runningback parfait, baptisé Eyeshield 21 pour protéger son identité. Avec ses coéquipiers improbables, il vise le Christmas Bowl, la finale nationale.",
    pros: ["Hiruma Yoichi est l'un des personnages les plus charismatiques du manga sportif", "Vulgarisation efficace du football américain, sport peu connu en France", "Matchs intenses avec des enjeux tactiques réels", "Humour omniprésent qui rend le tout très accessible"],
    cons: ["Protagoniste Sena parfois trop effacé par rapport aux personnages secondaires", "Arcs finaux légèrement trop longs"],
    reviewHtml: `<p>Eyeshield 21 est le manga qui a fait découvrir le football américain à toute une génération de lecteurs japonais et étrangers. La réussite de Riichiro Inagaki et Yusuke Murata tient en grande partie à leur talent pour expliquer un sport complexe sans jamais ennuyer, en faisant des règles tactiques des sources de tension dramatique réelle.</p><p>Hiruma est la vraie star de la série. Ce capitaine machiavélique, toujours armé, qui manipule tout le monde pour obtenir ce qu'il veut, est d'un charisme irrésistible. Il vole chaque scène et représente une version parfaitement exécutée du "génie de l'ombre" qui tire les ficelles.</p><p>Les matchs d'Eyeshield 21 sont parmi les mieux construits du manga sportif, avec de vrais ajustements tactiques, de vraies surprises, et des moments de gloire gagnés à la sueur. Une référence du genre.</p>`,
    shops: shopManga("Eyeshield+21"),
    streaming: cr("Eyeshield 21"),
  },

  "fruits-basket": {
    tags: "Romance · Surnaturel · Shōjo · Drame",
    stars: 4,
    synopsis: "Tohru Honda, orpheline qui vivait dans une tente, est recueillie par la famille Sohma. Elle découvre rapidement leur secret : certains membres se transforment en animaux du zodiaque chinois au contact d'une personne de l'autre sexe. Derrière les transformations comiques se cache une malédiction familiale profondément douloureuse. Fruits Basket est un shōjo sur la guérison, la famille choisie et le pouvoir d'accepter les autres.",
    pros: ["Tohru Honda est l'un des personnages les plus aimants et sincères du shōjo", "Traitement courageux des traumatismes familiaux et de la toxicité", "Évolution émotionnelle profonde de presque tous les personnages", "Conclusion satisfaisante et méritée"],
    cons: ["Début formulaire avec les transformations qui peut sembler léger", "Rythme inégal entre les tomes comiques et les tomes plus sombres"],
    reviewHtml: `<p>Fruits Basket commence comme une comédie romantique avec des gens qui se transforment en animaux zodiacaux, et se révèle être l'une des explorations les plus sensibles et courageuses de la toxicité familiale dans le manga shōjo. Natsuki Takaya n'épargne pas ses personnages, mais elle leur offre aussi une possibilité de guérison réelle.</p><p>Tohru est l'inverse des héroïnes shōjo passives : elle est active dans sa bonté, elle choisit d'aimer les Sohma tels qu'ils sont, brisés et inaptes aux relations normales, et cette décision a un coût. La voir tenir cette position chapitre après chapitre est émouvant et inspirant.</p><p>L'arc final, qui affronte la malédiction des Sohma dans ses racines, est l'une des conclusions les plus méritées du genre. Fruits Basket est la définition d'un shōjo qui grandit avec son lecteur.</p>`,
    shops: shopManga("Fruits+Basket"),
    streaming: cr("Fruits Basket"),
  },

  "gantz": {
    tags: "Sci-fi · Action · Horreur · Seinen",
    stars: 3,
    synopsis: "Kei Kurono et Masaru Kato meurent écrasés par un métro, pour se réveiller dans un appartement face à une mystérieuse sphère noire appelée Gantz. Elle les envoie combattre des aliens monstrueux dans Tokyo, équipés de combinaisons high-tech, avec comme seule motivation des points qui pourraient leur rendre la vie. Gantz est un survival ultra-violent qui pose des questions sur la mort, le libre arbitre et la valeur de la vie humaine.",
    pros: ["Prémisse de survival original et tendue", "Action ultra-dynamique avec des confrontations aliens mémorables", "Certains arcs (l'arc des vampires, l'arc de la statue géante) sont particulièrement intenses", "Questionnements philosophiques sur la mort et la résurrection"],
    cons: ["Fan service excessif et traitement problématique de certains personnages féminins", "Derniers arcs décevants et conclusion insatisfaisante", "Peut être rebutant par son niveau de violence gratuite"],
    reviewHtml: `<p>Gantz est un manga clivant par excellence. À son meilleur, c'est un survival d'une tension absolue, avec des créatures aliens inventives et une atmosphère de mort permanente qui donne un sens réel à chaque décision des personnages. Les meilleurs arcs, notamment l'arc des vampires et l'arc de la statue géante, sont parmi les plus intenses du seinen d'action.</p><p>À son pire, Gantz est excessif dans tous ses registres : violence, fan service, nihilisme. Hiroya Oku ne fait rien à moitié, ce qui peut être une qualité et un défaut selon les scènes. La conclusion du manga est généralement considérée comme décevante par rapport au potentiel des premiers arcs.</p><p>Gantz reste une lecture marquante pour les amateurs de seinen dark qui cherchent quelque chose de viscéral et provocateur, à condition d'accepter ses excès comme faisant partie du package.</p>`,
    shops: shopManga("Gantz"),
    streaming: [],
  },

};

// ── Moteur de patch (bracket-depth) ────────────────────────────────────────────
function applyPatch(content, slug, patch) {
  const slugStr = `  slug: "${slug}"`;
  const idx = content.indexOf(slugStr);
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

  // Extraire les champs à conserver
  const getField = (field) => {
    const re = new RegExp(`${field}:\\s*"([^"]*)"`, "s");
    const m = block.match(re); return m ? m[1] : "";
  };
  const slug_     = slug;
  const title_    = getField("title");
  const category_ = getField("category");
  const cover_    = getField("cover");
  const addedAt_  = getField("addedAt");

  const shopsStr     = JSON.stringify(patch.shops, null, 2)
    .replace(/"name":/g, "name:").replace(/"url":/g, "url:").replace(/"logo":/g, "logo:");
  const streamStr    = JSON.stringify(patch.streaming, null, 2)
    .replace(/"name":/g, "name:").replace(/"url":/g, "url:").replace(/"logo":/g, "logo:");
  const prosStr      = JSON.stringify(patch.pros);
  const consStr      = JSON.stringify(patch.cons);
  const synopsisEsc  = patch.synopsis.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  const reviewEsc    = patch.reviewHtml;

  const newBlock = `{
  slug: "${slug_}",
  title: "${title_}",
  category: "${category_}",
  cover: "${cover_}",
  tags: "${patch.tags}",
  stars: ${patch.stars},
  addedAt: "${addedAt_}",
  synopsis: "${synopsisEsc}",
  pros: ${prosStr},
  cons: ${consStr},
  reviewHtml: \`${reviewEsc}\`,
  shops: ${shopsStr},
  streaming: ${streamStr},
  live: []
}`;

  return content.slice(0, start) + newBlock + content.slice(end);
}

// ── Main ────────────────────────────────────────────────────────────────────────
let content = readFileSync(FILE, "utf-8");
let ok = 0, skip = 0;

for (const [slug, patch] of Object.entries(PATCHES)) {
  const result = applyPatch(content, slug, patch);
  if (result === null) { console.log(`⚠️  Non trouvé : ${slug}`); skip++; }
  else { content = result; console.log(`✓ ${slug}`); ok++; }
}

writeFileSync(FILE, content, "utf-8");
console.log(`\n✅ ${ok} patchée(s)${skip ? `, ${skip} non trouvée(s)` : ""}.`);
