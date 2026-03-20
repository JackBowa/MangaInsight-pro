/**
 * Patch lot 2/5 — séries 21-40
 * node scripts/patch-batch2-lot2.mjs
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
  { name: "Manganim", url: `https://manganim.fr/search?q=${q}`,                                      logo: L  },
  { name: "Fnac",     url: `https://www.fnac.com/SearchResult/ResultList.aspx?Search=${q}+tome`,     logo: LF },
  { name: "Amazon",   url: `https://www.amazon.fr/s?k=${q}+tome`,                                    logo: LA },
];
const shopManhwa = (q) => [
  { name: "Fnac",     url: `https://www.fnac.com/SearchResult/ResultList.aspx?Search=${q}`,          logo: LF },
  { name: "Amazon",   url: `https://www.amazon.fr/s?k=${q}`,                                         logo: LA },
];
const cr = (q) => [{ name: "Crunchyroll", url: `https://www.crunchyroll.com/fr/search?q=${encodeURIComponent(q)}`, logo: LC }];
const nf = (q) => [{ name: "Netflix",     url: `https://www.netflix.com/search?q=${encodeURIComponent(q)}`,       logo: LN }];

const PATCHES = {

  "girls-last-tour": {
    tags: "Post-apocalyptique · Slice of Life · Seinen · Philosophie",
    stars: 5,
    synopsis: "Chito et Yuuri sont deux jeunes filles qui parcourent en kettenkrad les ruines d'une mégalopole détruite par une guerre dont elles ignorent tout. Elles cherchent de la nourriture, du carburant et des réponses dans un monde silencieux où elles sont peut-être les derniers humains vivants. Girls' Last Tour est une méditation poétique sur la fin du monde, la curiosité et la valeur de l'instant présent.",
    pros: ["Atmosphère unique, mélancolique et apaisante à la fois", "Dialogues d'une profondeur philosophique accessible et sincère", "Équilibre parfait entre humour léger et contemplation existentielle", "Conclusion parmi les plus belles et courageuses du manga récent"],
    cons: ["Rien ne se passe au sens narratif classique, peut dérouter", "Format contemplatif qui ne convient pas à tous les lecteurs"],
    reviewHtml: `<p>Girls' Last Tour est l'une des expériences de lecture les plus singulières du manga moderne. Tsukumizu place deux filles au bout du monde et les laisse parler. De nourriture, de musique, de Dieu, de la mort, de ce que ça signifie d'exister quand plus personne d'autre ne le fait. Et ces conversations, naïves en surface, atteignent quelque chose de très profond.</p><p>La force du manga tient dans son refus du catastrophisme. Le monde est détruit, oui. Mais Chito et Yuuri ne sont pas en train de survivre, elles vivent. Elles trouvent de la joie dans une boîte de conserve, dans un bain de fortune, dans la neige qui tombe sur les ruines. Ce regard positif sur la fin est d'une rareté et d'une intelligence remarquables.</p><p>La conclusion de Girls' Last Tour est un acte de courage éditorial. Tsukumizu ne ment pas à son lecteur. C'est triste, c'est beau, c'est cohérent avec tout ce qui précède. Peu de manga osent aller là. Cinq étoiles pour un manga qui parle de la fin de tout avec autant de tendresse.</p>`,
    shops: shopManga("Girls+Last+Tour"),
    streaming: cr("Girls Last Tour"),
  },

  "golden-kamuy": {
    tags: "Aventure · Historique · Survie · Seinen",
    stars: 5,
    synopsis: "Saichi Sugimoto, survivant de la guerre russo-japonaise surnommé l'Immortel, apprend l'existence d'un trésor aïnou caché quelque part en Hokkaido, dont la carte est tatouée sur la peau de prisonniers évadés. Avec Asirpa, une jeune chasseuse aïnoue, il s'engage dans une course-poursuite contre des factions rivales à travers les étendues sauvages d'Hokkaido. Golden Kamuy est un manga historique d'une richesse et d'une originalité exceptionnelles.",
    pros: ["Documentation sur la culture aïnoue d'une profondeur et d'un respect rares", "Galerie de personnages mémorables avec des backstories fouillés", "Alternance parfaite entre survie intense, humour absurde et drame historique", "Sugimoto est l'un des héros d'action les plus charismatiques du manga seinen"],
    cons: ["Très dense en informations historiques et culturelles qui demandent attention", "Démarrage un peu lent le temps de poser l'univers"],
    reviewHtml: `<p>Golden Kamuy est une anomalie joyeuse dans le paysage du manga. Satoru Noda a réussi à écrire simultanément un survival haletant, une aventure historique rigoureuse, une comédie alimentaire absurde et un documentaire sur la culture aïnoue. Et tout ça fonctionne ensemble, sans que rien ne semble forcé.</p><p>La culture aïnoue est au coeur du manga d'une façon qui dépasse le simple exotisme. Noda a travaillé avec des linguistes et des anthropologues pour représenter cette civilisation avec précision et respect. Asirpa est une protagoniste à part entière, porteuse d'un savoir et d'une vision du monde qui enrichit chaque page.</p><p>Les antagonistes de Golden Kamuy sont extraordinaires. Ogata, Kiroranke, Hijikata, chacun a une philosophie, une histoire, des raisons d'agir qui les rendent fascinants et dangereux. La course au trésor aïnou est un prétexte à une exploration humaine d'une profondeur rare. Un chef-d'oeuvre complet.</p>`,
    shops: shopManga("Golden+Kamuy"),
    streaming: cr("Golden Kamuy"),
  },

  "goodnight-punpun": {
    tags: "Psychologie · Drame · Seinen · Contemplatif",
    stars: 5,
    synopsis: "Punpun Onodera est un enfant ordinaire représenté comme un petit oiseau schématique dans un monde humain réaliste. De l'enfance à l'âge adulte, on le suit traverser des premières amours, des traumatismes familiaux, une dépression profonde et une quête de sens de plus en plus désespérée. Oyasumi Punpun est l'un des manga les plus sombres et les plus honnêtes jamais écrits sur la condition humaine.",
    pros: ["Représentation de la dépression et des traumatismes d'une exactitude troublante", "Dispositif visuel unique (Punpun en oiseau) d'une intelligence narrative remarquable", "Inio Asano au sommet de son art graphique et narratif", "Oeuvre qui reste longtemps après la lecture"],
    cons: ["Très éprouvant émotionnellement, déconseillé en période de vulnérabilité", "Conclusion nihiliste qui peut laisser sans ressource"],
    reviewHtml: `<p>Oyasumi Punpun est un manga qu'on n'oublie pas. Inio Asano a créé une oeuvre qui cartographie l'intérieur d'une tête qui souffre avec une précision clinique et une empathie totale. Punpun n'est pas un anti-héros romantique, il est juste quelqu'un qui ne sait pas comment aller bien, et ça fait toute la différence.</p><p>Le dispositif visuel est d'une intelligence rare : Punpun est dessiné comme un gribouillis, un oiseau minimaliste, dans un monde réaliste magnifiquement détaillé. Ce décalage extériorise l'incapacité du personnage à se sentir réel, à se sentir à sa place dans le monde. On ne voit jamais son "vrai" visage parce qu'il ne le voit pas lui-même.</p><p>C'est un manga difficile à recommander sans réserve, parce qu'il peut faire du mal aux lecteurs fragiles. Mais pour ceux qui peuvent le traverser, c'est une expérience de lecture qui touche à quelque chose de fondamental sur ce que signifie être humain et lutter pour l'accepter.</p>`,
    shops: shopManga("Goodnight+Punpun"),
    streaming: [],
  },

  "gto-great-teacher-onizuka": {
    tags: "Comédie · Drame · Seinen · École",
    stars: 5,
    synopsis: "Eikichi Onizuka, ex-chef de gang de 22 ans sans qualification ni morale apparente, décide de devenir le meilleur professeur du Japon. Affecté à une classe de terminale réputée pour avoir brisé ses professeurs précédents, il va affronter des élèves traumatisés avec les seules armes qu'il possède : son refus des conventions et son empathie brute. GTO est une comédie sociale d'une profondeur inattendue.",
    pros: ["Onizuka est l'un des personnages les plus inoubliables de toute la bande dessinée", "Derrière l'humour vulgaire, un regard sincère et tendre sur l'adolescence et les blessures", "Chaque élève a son propre arc de rédemption fouillé et émouvant", "Humour déjanté qui n'empêche pas les moments d'une sincérité désarmante"],
    cons: ["Fan service daté et parfois malvenu", "Certains gags des années 90 ont mal vieilli"],
    reviewHtml: `<p>GTO est l'un des manga les plus mal catégorisés de l'histoire. On l'associe à la comédie débile, aux gags de fesses, au prof voyou. Tout ça est vrai. Mais derrière la surface, Tohru Fujisawa a écrit l'une des explorations les plus sincères de l'adolescence blessée qu'on puisse trouver dans le manga.</p><p>Onizuka est un génie parce qu'il ne suit pas les règles qui ne fonctionnent pas. Quand un élève se coupe, il ne l'envoie pas chez le psy, il lui montre ses propres cicatrices. Quand un enfant est victime de chantage scolaire, il détruit les coupables avec les mêmes méthodes qu'eux. Il est illégal, dangereux et parfaitement efficace.</p><p>Chaque arc d'élève est une petite histoire sur quelque chose de réel : le divorce des parents, le harcèlement, l'isolement, la peur de l'avenir. Onizuka ne résout pas tout, mais il fait sentir à ces gosses qu'ils comptent pour quelqu'un. C'est suffisant pour changer des vies, dans le manga comme dans la vraie vie. Un chef-d'oeuvre.</p>`,
    shops: shopManga("GTO+Great+Teacher+Onizuka"),
    streaming: cr("GTO"),
  },

  "gushing-over-magical-girls": {
    tags: "Ecchi · Parodie · Magie · Seinen",
    stars: 3,
    synopsis: "Hiiragi Utena adore les magical girls depuis l'enfance, mais est choisie par une créature mystérieuse pour devenir la vilaine de l'histoire, Corporeus, avec le pouvoir de lier et de dominer. Confrontée aux magical girls qu'elle idolâtre dans des combats involontaires, elle navigue entre ses sentiments contradictoires et une équipe de vilaines aussi maladroites qu'elle. Une parodie ecchi qui renverse les codes du genre.",
    pros: ["Parodie intelligente des codes de la magical girl vue depuis le camp des antagonistes", "Humour sur les conventions du genre efficace et bien ciblé", "Certains personnages féminins plus développés qu'attendu"],
    cons: ["Contenu ecchi très présent qui ne conviendra pas à tous", "Le fond narratif reste léger malgré la prémisse originale"],
    reviewHtml: `<p>Gushing Over Magical Girls est une parodie qui connaît parfaitement ce dont elle se moque. En plaçant une fan inconditionnelle du genre du côté des vilaines, Akihiro Ononaka crée une dynamique comique qui déconstruit les conventions de la magical girl avec une affection évidente pour le matériau source.</p><p>Le manga assume son côté ecchi, ce qui limitera son audience. Pour ceux qui sont à l'aise avec ce registre, c'est une comédie efficace avec quelques vraies surprises narratives. Pour les autres, la prémisse restera plus intéressante que l'exécution.</p>`,
    shops: shopManga("Gushing+Magical+Girls"),
    streaming: cr("Gushing over Magical Girls"),
  },

  "hardcore-leveling-warrior": {
    tags: "Action · Manhwa · Jeu vidéo · Fantasy",
    stars: 3,
    synopsis: "Ethan Gong, connu dans le jeu en ligne Lucid Adventure comme le joueur numéro un au monde, se réveille un matin sans aucun de ses équipements ni de ses statistiques, ramené au niveau 1 par un inconnu. Humilié et sans ressources, il doit reconstruire sa puissance depuis zéro dans un monde où l'argent réel et le jeu virtuel sont indissociablement liés. Hardcore Leveling Warrior est un manhwa d'action rythmé sur les conventions des jeux de rôle.",
    pros: ["Progression du personnage de zéro à héros bien construite et satisfaisante", "Système de jeu inventif avec des mécaniques originales", "Personnages secondaires avec des backstories intéressants"],
    cons: ["Arcs tardifs moins bien construits que les premiers", "Protagoniste parfois antipathique du fait de son ego initial"],
    reviewHtml: `<p>Hardcore Leveling Warrior prend un point de départ classique, le joueur OP dépouillé de tout, et le traite avec un soin réel pour le système de jeu sous-jacent. Sehoon Kim a clairement pensé les mécaniques de Lucid Adventure, et les combats tirent intelligemment parti des règles établies.</p><p>Le manga a ses hauts et ses bas. Les premiers arcs, où Ethan reconstruit sa réputation depuis les fondations, sont les plus satisfaisants. Les arcs finaux complexifient peut-être trop l'intrigue. Mais pour les fans de manhwa d'action dans des univers de jeu, c'est une référence solide du genre.</p>`,
    shops: shopManhwa("Hardcore+Leveling+Warrior"),
    streaming: [],
  },

  "helck": {
    tags: "Fantasy · Comédie · Action · Seinen",
    stars: 4,
    synopsis: "Helck est un héros humain légendaire qui se présente au tournoi de recrutement des démons après avoir détruit son propre royaume. Vermilio, l'administratrice démoniaque chargée de le surveiller, est convaincue qu'il prépare un coup bas. Au fil de leur cohabitation, elle découvre que Helck cache un secret douloureux derrière son sourire permanent. Helck est une fantasy qui commence en parodie et se révèle être un drame d'une vraie profondeur.",
    pros: ["Twist narratif remarquable : passe d'une comédie légère à un drame sincère sans perdre son identité", "Helck est un personnage attachant d'une complexité inattendue", "Vermilio est une co-protagoniste forte et charismatique", "Worldbuilding original qui inverse les codes héros/démons"],
    cons: ["Démarrage en parodie peut tromper sur la nature réelle du manga", "Art simple qui s'améliore mais reste modeste"],
    reviewHtml: `<p>Helck est une surprise dans le bon sens du terme. Ce qui commence comme une parodie fantaisiste sur un héros qui veut devenir un démon se révèle chapitre après chapitre être une histoire sur la trahison, le sacrifice et ce qu'on est prêt à endurer pour protéger ceux qu'on aime. Nanaki Nanao exécute ce virage avec une maîtrise remarquable.</p><p>La relation entre Helck et Vermilio est le coeur du manga. Ces deux personnages, qui devraient être ennemis, construisent une confiance mutuelle dans des circonstances impossibles. Leur dynamic est à la fois drôle et touchante, ce qui est exactement ce que le manga promet et tient.</p><p>L'arc final, quand les vraies enjeux sont révélés, est d'une intensité émotionnelle réelle. Helck est le genre de manga qu'on recommande à quelqu'un sans trop expliquer pour qu'il vive la même surprise qu'on a vécue.</p>`,
    shops: shopManga("Helck"),
    streaming: cr("Helck"),
  },

  "hikaru-no-go": {
    tags: "Jeu de go · Sport · Surnaturel · Shōnen",
    stars: 5,
    synopsis: "Hikaru Shindo, collégien ordinaire sans aucun intérêt pour le jeu de go, entre en contact avec le fantôme de Fujiwara no Sai, un joueur de go du Heian mort il y a mille ans, qui partage son corps. Sai aspire à jouer le coup divin, la perfection du go. À travers lui, Hikaru découvre la passion pour ce jeu et commence son propre chemin vers le sommet. Hikaru no Go est le manga de sport le plus improbable jamais écrit, et l'un des meilleurs.",
    pros: ["Progression de Hikaru d'apprenti désintéressé à joueur pro parmi les meilleures du genre", "Fujiwara no Sai est un personnage d'une beauté mélancolique inoubliable", "A rendu le go populaire au Japon et en Corée auprès des jeunes, impact culturel réel", "Rivalité Hikaru-Akira parmi les meilleures du manga"],
    cons: ["Quelques arcs de tournoi un peu longs et répétitifs", "La fin arrive abruptement après un événement majeur"],
    reviewHtml: `<p>Hikaru no Go est un prodige éditorial : un manga sur le go, jeu de plateau complexe et élitiste, qui a captivé des millions de lecteurs n'ayant jamais touché un goban. Yumi Hotta et Takeshi Obata ont réussi ce tour de force en faisant du go un prisme pour parler d'apprentissage, de passion, de rivalité et de transmission.</p><p>Sai est l'un des personnages les plus mémorables du manga. Ce fantôme millénaire qui n'a qu'un désir, jouer au go, et qui doit le vivre à travers un adolescent peu motivé, est traité avec une tendresse qui rend sa trajectoire bouleversante. Leur relation dépasse largement le contrat de cohabitation forcée.</p><p>La rivalité entre Hikaru et Akira Toya est le moteur de toute la série. Deux joueurs qui se cherchent, qui se définissent mutuellement, qui ne peuvent pas avancer sans penser à l'autre. C'est la définition d'une grande rivalité de manga. Hikaru no Go est un chef-d'oeuvre qui mérite son statut de classique.</p>`,
    shops: shopManga("Hikaru+no+Go"),
    streaming: cr("Hikaru no Go"),
  },

  "horimiya": {
    tags: "Romance · Comédie · Shōnen · École",
    stars: 4,
    synopsis: "Kyoko Hori est populaire et brillante au lycée, mais chez elle c'est une sœur dévouée et une mère de substitution pour son petit frère. Izumi Miyamura semble être un nerd sombre et asocial, mais hors de l'école il cache des tatouages et des piercings en nombre. Ces deux façades qui se dévoilent mutuellement donnent naissance à une romance naturelle et sincère.",
    pros: ["Romance qui se déclare vite, sans fausses tensions artificielles — rafraîchissant", "Les deux protagonistes sont attachants et complémentaires", "Humour léger et efficace autour du groupe d'amis", "Art propre et expressif de Daisuke Hagiwara"],
    cons: ["Peu d'enjeux dramatiques, reste en surface après la confession", "Personnages secondaires sous-exploités malgré leur potentiel"],
    reviewHtml: `<p>Horimiya fait quelque chose d'inhabituel dans le manga romantique : ses protagonistes se confessent leurs sentiments assez tôt et passent la majorité de la série en couple. Pas de malentendus interminables, pas de triangles amoureux épuisants. Juste deux personnes qui apprennent à se connaître vraiment et à s'aimer tels qu'ils sont.</p><p>Ce choix est à la fois la force et la limite du manga. C'est reposant et agréable à lire, on s'attache à Hori et Miyamura qui forment un couple crédible et touchant. Mais une fois la romance établie, le manga manque un peu d'enjeux pour maintenir la tension narrative sur la longueur.</p><p>Horimiya reste l'une des meilleures romances lycéennes du manga récent, parfaite pour les lecteurs qui veulent quelque chose de doux et de sincère sans drama excessif.</p>`,
    shops: shopManga("Horimiya"),
    streaming: cr("Horimiya"),
  },

  "i-am-a-hero": {
    tags: "Horreur · Zombie · Seinen · Psychologie",
    stars: 4,
    synopsis: "Hideo Suzuki est un assistant-mangaka raté dans la trentaine, névrotique et indécis, qui rêve de gloire sans jamais oser rien tenter. Quand une épidémie zombie transforme Tokyo en enfer, il est l'un des seuls Japonais civils à posséder légalement une arme à feu. Un survivant ordinaire, terrifiés, dans un apocalypse extraordinaire.",
    pros: ["Protagoniste réaliste et imparfait, à l'opposé du héros classique de zombie", "Atmosphère de terreur psychologique soutenue et oppressante", "Les zombies de Kengo Hanazawa sont visuellement originaux et inquiétants", "Commentaire social sur l'aliénation moderne et la passivité japonaise"],
    cons: ["Rythme délibérément lent dans les premiers volumes, peut tester la patience", "Arcs finaux plus confus et divisifs"],
    reviewHtml: `<p>I Am a Hero est le manga de zombie le plus honnête jamais écrit sur ce que ferait vraiment un homme ordinaire face à l'apocalypse : paniquer, trébucher, se faire pipi dessus, survivre par accident. Hideo n'est pas un héros, c'est le gars qui se trouve avoir un fusil par une bizarrerie administrative.</p><p>Kengo Hanazawa utilise la convention zombie pour disséquer quelque chose de très japonais : l'homme qui n'a pas eu le courage de vivre sa vie, et qui doit décider si l'apocalypse est sa punition ou sa seconde chance. Cette dimension psychologique donne au manga une profondeur que ses confrères du genre n'ont généralement pas.</p><p>Les zombies de Hanazawa sont visuellement originaux, coincés dans les gestes répétitifs de leur mort, et l'horreur qu'ils dégagent est réelle et bien construite. I Am a Hero est une lecture exigeante mais mémorable.</p>`,
    shops: shopManga("I+Am+a+Hero"),
    streaming: [],
  },

  "initial-d": {
    tags: "Course · Sport · Seinen · Classique",
    stars: 4,
    synopsis: "Takumi Fujiwara livre du tofu chaque matin au sommet du mont Akina dans la Toyota AE86 de son père, depuis ses quatorze ans. Sans le savoir, ces années de conduite nocturne ont fait de lui un pilote prodige. Quand les équipes de drift locales découvrent son talent, Takumi se retrouve entraîné dans un monde de courses illégales sur les routes de montagne japonaises.",
    pros: ["Référence absolue du manga de course automobile", "Courses sur les routes de montagne d'une tension tactique réelle", "Influence culturelle immense sur la culture automobile mondiale", "Takumi est un héros atypique : son talent est pur, inconscient, presque transcendant"],
    cons: ["Art des personnages daté et raide, surtout les visages", "Sous-intrigues romantiques faibles comparées à l'action"],
    reviewHtml: `<p>Initial D est la bible du drift et de la course sur route de montagne. Shuichi Shigeno a créé un univers où la technique automobile est traitée avec un sérieux d'ingénieur, et cette rigueur transforme chaque course en quelque chose de crédible et de haletant. On apprend réellement des choses sur la physique du véhicule, les trajectoires, la gestion de l'adhérence.</p><p>Takumi est un héros fascinant parce qu'il n'est pas un geek de bagnole. Il conduit parce qu'on le lui a demandé, sans passion apparente, et son talent est le résultat d'une répétition quotidienne plutôt que d'un don conscient. Ce détachement tranquille face à ses adversaires survoltés est l'une des sources de tension les plus originales du manga sportif.</p><p>L'influence culturelle d'Initial D dépasse largement le Japon. Les touge, les AE86, la culture d'Eurobeat : tout ça a irrigué des générations de passionnés d'automobile à travers le monde. Un classique incontournable.</p>`,
    shops: shopManga("Initial+D"),
    streaming: cr("Initial D"),
  },

  "inuyasha": {
    tags: "Action · Romance · Surnaturel · Shōnen",
    stars: 4,
    synopsis: "Kagome Higurashi, lycéenne tokyoïte, est aspirée dans un puits du sanctuaire familial et se retrouve dans le Japon féodal de l'ère Sengoku. Elle y libère InuYasha, un semi-démon scellé par une flèche, et brise par accident le Joyau des Quatre Âmes en de multiples fragments. Ensemble, ils parcourent le Japon médiéval pour rassembler les éclats avant que le démon Naraku ne les récupère tous.",
    pros: ["Romance épique entre InuYasha et Kagome d'une longévité et d'une intensité rares", "Univers du folklore japonais riche et passionnant", "Galerie de compagnons mémorables : Miroku, Sango, Shippo", "Naraku est l'un des antagonistes les plus diaboliques du manga classique"],
    cons: ["Rythme répétitif dans les arcs médians, nombreux remplissages", "Résolution de certains sous-arcs trop longue"],
    reviewHtml: `<p>InuYasha est l'un des grands manga d'aventure fantastique des années 90-2000. Rumiko Takahashi a créé avec cette série une épopée romantique qui a marqué des générations de lecteurs à travers le monde, portée par une heroïne moderne plongée dans un passé mythologique japonais.</p><p>La tension romantique entre InuYasha et Kagome est le moteur émotionnel de toute la série. Takahashi gère cette relation avec une habileté certaine, alternant proximité et distance, jalousie et sacrifice. Le triangle avec Kikyo, l'amour passé d'InuYasha, est particulièrement bien traité.</p><p>InuYasha souffre du même défaut que beaucoup de séries longues de l'époque : un milieu qui s'étire. Mais ses meilleurs arcs, notamment la confrontation finale avec Naraku, tiennent toutes leurs promesses. Une oeuvre de référence du manga fantastique romantique.</p>`,
    shops: shopManga("Inuyasha"),
    streaming: cr("InuYasha"),
  },

  "is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon": {
    tags: "Fantasy · Aventure · Isekai · Shōnen",
    stars: 3,
    synopsis: "Bell Cranel est le seul membre de la Familia de la déesse Hestia dans la cité d'Orario, construite autour d'un donjon aux profondeurs infinies. Novice maladroit mais déterminé, il progresse dans le donjon pour réaliser son rêve de devenir un grand aventurier, après une rencontre fortuite avec l'épéiste légendaire Aiz Wallenstein qui l'inspire profondément. DanMachi mélange RPG, harem et heroic-fantasy.",
    pros: ["Système de progression RPG satisfaisant et bien pensé", "Worldbuilding de la cité d'Orario avec ses Familias d'une richesse convaincante", "Bell est un protagoniste sympathique et attachant", "Certains arcs (Xenos, Freya) d'une intensité surprenante"],
    cons: ["Éléments harem parfois pesants et clichés", "Rythme inégal entre moments épiques et fanservice"],
    reviewHtml: `<p>DanMachi (acronyme de son titre complet imprononcable) est une fantasy RPG honnête qui fait bien ce qu'elle promet. L'univers d'Orario, avec ses dieux descendus sur terre qui parrainent des aventuriers, est un des concepts les plus originaux du genre isekai-adjacent. Les règles de progression des personnages sont claires et les combats les exploitent bien.</p><p>Bell Cranel est un protagoniste plus intéressant que la moyenne du genre harem. Sa dévotion pour Aiz et sa progression sincère le rendent sympathique. Les arcs qui le sortent de sa zone de confort, notamment l'arc des Xenos, révèlent un potentiel narratif que la série n'exploite pas toujours.</p><p>Pour les amateurs du genre fantasy RPG, DanMachi est un choix solide et divertissant, avec suffisamment de profondeur pour aller au-delà du simple entertainment.</p>`,
    shops: shopManga("DanMachi"),
    streaming: cr("DanMachi"),
  },

  "kaguya-sama-love-is-war": {
    tags: "Comédie · Romance · Psychologie · Seinen",
    stars: 5,
    synopsis: "Miyuki Shirogane et Kaguya Shinomiya sont les deux élèves les plus brillants du prestigieux lycée Shuchiin. Tous deux éperdument amoureux l'un de l'autre, ils refusent catégoriquement d'être le premier à avouer, convaincu que le premier à craquer perd. Chaque chapitre est une bataille de manipulation psychologique et d'orgueil entre deux génies qui s'aiment trop pour le dire. Aka Akasaka signe l'une des comédies romantiques les plus intelligentes du manga.",
    pros: ["Concept de bataille mentale appliqué à la romance d'une créativité inépuisable", "Personnages principaux remarquablement écrits avec une évolution réelle", "Humour d'une constance et d'une finesse rares sur des dizaines de volumes", "Conclusion satisfaisante et méritée"],
    cons: ["Arcs finaux plus sombres et dramatiques peuvent déstabiliser les lecteurs venus pour la comédie", "Certains personnages secondaires envahissent trop l'espace narratif"],
    reviewHtml: `<p>Kaguya-sama est la meilleure comédie romantique du manga moderne, et ce n'est pas une hyperbole. Aka Akasaka a eu l'idée de génie de prendre deux personnages qui s'aiment sincèrement et de faire de cet amour leur principal ennemi. Le résultat est des centaines de chapitres de jeux mentaux hilarants, où l'on sait depuis le début qu'ils finiront ensemble et où on est pourtant incapable de prédire comment ils y arriveront.</p><p>La force du manga tient dans la richesse de ses personnages. Kaguya et Shirogane évoluent vraiment. Kaguya, élevée dans un environnement familial froid et calculateur, apprend au fil des chapitres ce que signifie vouloir quelque chose pour soi. Shirogane, fils de famille modeste qui s'est imposé par le travail, apprend à accepter d'être aidé. Ces arcs de croissance donnent du poids à la comédie.</p><p>Chika Fujiwara, élément chaotique en tête-à-tête permanente avec les plans des deux protagonistes, est l'une des personnages comiques les plus efficaces du manga récent. Kaguya-sama est un chef-d'oeuvre de la comédie romantique qui tient toutes ses promesses.</p>`,
    shops: shopManga("Kaguya-sama"),
    streaming: cr("Kaguya-sama: Love is War"),
  },

  "karakai-jouzu-takagi-san": {
    tags: "Comédie · Romance · Slice of Life · Shōnen",
    stars: 4,
    synopsis: "Nishikata passe ses journées de collège à essayer de piéger Takagi-san, la fille assise à côté de lui, et à échouer lamentablement à chaque tentative. Takagi-san, elle, connaît parfaitement son voisin et le taquine avec une précision et un sourire dévastateurs. Derrière la comédie simple, c'est une romance douce et timide qui se construit à travers des centaines de petits moments quotidiens.",
    pros: ["Charme irrésistible et répétabilité parfaite du concept", "Takagi-san est un personnage adorable et charismatique", "Douceur et légèreté constantes sans jamais devenir sirupeuses", "Chapitres courts parfaits pour une lecture détendue"],
    cons: ["Peu d'évolution narrative, le concept tourne en boucle", "La suite (Mr. Takagi-san) révèle la conclusion dès le départ"],
    reviewHtml: `<p>Karakai Jouzu no Takagi-san est un manga qui ne prétend pas à la complexité. C'est une série sur une fille qui taquine un garçon, et il n'y a pas besoin de plus. La magie tient dans l'exécution : Sōichirō Yamamoto a un sens du timing comique parfait, et Takagi-san est un personnage d'un charme naturel désarmant.</p><p>Le manga fonctionne comme une série de petites pièces de théâtre : chaque chapitre a son propre challenge, son propre gag, sa propre petite victoire pour Takagi et sa petite défaite pour Nishikata. La répétition du format est assumée et réconfortante plutôt qu'épuisante.</p><p>Ce qui rend Takagi-san particulièrement touchant, c'est que derrière les taquineries, on voit clairement une fille qui est amoureuse et qui exprime cet amour de la seule façon qu'elle connaît. Une lecture douce et heureuse.</p>`,
    shops: shopManga("Takagi-san"),
    streaming: cr("Teasing Master Takagi-san"),
  },

  "knights-of-the-zodiac": {
    tags: "Action · Fantasy · Classique · Shōnen",
    stars: 4,
    synopsis: "Seiya et ses compagnons, les Chevaliers de Bronze, combattent au service d'Athéna pour protéger la Terre des dieux et démons qui cherchent à la dominer. Vêtus d'armures de métal appelées Clôts, ils canalisent l'énergie cosmique du Cosmos pour accomplir des exploits surhumains. Saint Seiya, publié depuis 1985, est l'une des séries qui a défini l'imaginaire manga pour des générations de lecteurs français.",
    pros: ["Impact culturel immense en France, série fondatrice du manga en occident", "Armures et design visuels iconiques et mémorables", "Mythologie grecque utilisée avec imagination et générosité", "Arcs du Sanctuaire et de Poséidon parmi les meilleurs du shōnen classique"],
    cons: ["Art et rythme très datés des années 80", "Répétition de schémas combat-dépassement de limites-victoire"],
    reviewHtml: `<p>Les Chevaliers du Zodiaque ont été pour beaucoup de Français leur première porte d'entrée dans le manga et l'animation japonaise. Masami Kurumada a créé quelque chose d'immédiatement iconique : des armures brillantes, une mythologie grecque fantasmée, des combats au Cosmos qui exigent de se dépasser au-delà de ses limites.</p><p>La série souffre de ses origines années 80, avec un rythme et des schémas répétitifs qui peuvent tester les nouveaux lecteurs. Mais l'arc du Sanctuaire, en particulier, est un monument du shōnen classique : douze maisons à traverser, douze adversaires d'exception, une progression implacable vers un climax qui tient toutes ses promesses.</p><p>Saint Seiya reste une oeuvre fondatrice dont l'influence sur le manga et l'imaginaire geek occidental est difficile à surestimer. À lire comme le document historique et émotionnel qu'il est.</p>`,
    shops: shopManga("Saint+Seiya"),
    streaming: cr("Saint Seiya"),
  },

  "koe-no-katachi": {
    tags: "Drame · Romance · Seinen · Rédemption",
    stars: 5,
    synopsis: "Shoya Ishida a harcelé Shoko Nishimiya, une camarade sourde, tout au long de l'école primaire. Des années après, rongé par la honte et le remords, il décide de la retrouver pour s'excuser. A Silent Voice est un manga sur la culpabilité, la réhabilitation et la possibilité de se pardonner soi-même, traité avec une honnêteté qui n'épargne personne.",
    pros: ["Traitement du harcèlement et de la surdité d'une sensibilité et d'une précision rares", "Shoya est l'un des protagonistes en arc de rédemption les mieux écrits du manga", "Yoshitoki Oima évite tous les pièges du mélodrame facile", "Chaque personnage secondaire a ses propres torts et sa propre complexité"],
    cons: ["Très éprouvant émotionnellement, certaines scènes sont difficiles", "Certains personnages secondaires restent ambigus jusqu'à la frustration"],
    reviewHtml: `<p>A Silent Voice est l'un des manga les plus importants de sa génération. Yoshitoki Oima a abordé le harcèlement scolaire et la surdité avec une honnêteté rare, en refusant de simplifier les situations ou de distribuer les torts de manière binaire. Shoya n'est pas un monstre devenu bon : c'est un enfant qui a fait des choses monstrueuses, qui le sait, et qui cherche à vivre avec ça.</p><p>La représentation de Shoko Nishimiya est particulièrement réussie. Sourde dans un monde qui n'est pas fait pour elle, elle n'est ni une victime pitoyable ni une héroïne au-dessus de tout. Elle a ses propres vulnérabilités, ses propres colères, ses propres limites. La voir interagir avec le monde par ses propres moyens est l'une des choses les plus touchantes du manga.</p><p>A Silent Voice vous brisera le coeur et vous le rendra un peu différent. C'est la définition d'un chef-d'oeuvre qui dépasse son médium.</p>`,
    shops: shopManga("A+Silent+Voice"),
    streaming: nf("A Silent Voice"),
  },

  "komi-san-wa-komyushou-desu": {
    tags: "Comédie · Romance · Slice of Life · Shōnen",
    stars: 4,
    synopsis: "Komi Shouko est la fille la plus admirée de son lycée, perçue comme une déesse mystérieuse et intouchable. Son secret : elle souffre d'un trouble de la communication extrême et est incapable d'adresser la parole à quiconque. Seul Tadano Hitohito, son voisin de classe, découvre la vérité et décide de l'aider à réaliser son rêve : se faire cent amis.",
    pros: ["Concept original et touchant sur l'anxiété sociale", "Komi est un personnage attachant dont les expressions expressives compensent l'absence de parole", "Galerie d'amis et de personnages excentriques d'une grande variété", "Humour tendre et bienveillant"],
    cons: ["Répétitif dans son format d'introduction de nouveaux personnages", "Romance principale avance très lentement"],
    reviewHtml: `<p>Komi-san est un manga qui parle d'anxiété sociale avec beaucoup de douceur et d'humour. Le concept de faire de cette paralysie communicationnelle un obstacle à surmonter progressivement, ami par ami, est une idée originale bien exécutée.</p><p>Komi elle-même est un personnage expressif malgré son mutisme : Tomohito Oda la fait communiquer par ses gestes, ses regards et ses expressions, et cette contrainte créative donne lieu à certaines des scènes les plus drôles du manga. Sa relation avec Tadano, patient et sincère, est touchante dans sa modestie.</p><p>Le manga est idéal pour les lecteurs qui cherchent quelque chose de chaleureux et de feel-good, sans grande tension dramatique. Une série qui met de bonne humeur à chaque chapitre.</p>`,
    shops: shopManga("Komi-san"),
    streaming: nf("Komi Can't Communicate"),
  },

  "laid-back-camp": {
    tags: "Slice of Life · Camping · Shōnen · Détente",
    stars: 4,
    synopsis: "Rin Shima aime camper seule au bord du lac Motosu avec sa tente, son réchaud et le calme du mont Fuji en fond. Elle rencontre par hasard Nadeshiko Kagamihara, exubérante et enthousiaste, qui découvre le camping pour la première fois. De cette rencontre naît un groupe de filles qui partagent leur passion pour le plein air, chacune à son propre rythme.",
    pros: ["Atmosphère apaisante unique, le manga parfait pour se détendre", "Vraies informations pratiques sur le camping intégrées naturellement dans le récit", "Respect des différentes façons de profiter de la nature : seul ou en groupe", "Les paysages de la région de Fuji sont d'une beauté constante"],
    cons: ["Peu de tension ou de progression narrative", "Peut sembler trop tranquille pour les lecteurs cherchant de l'action"],
    reviewHtml: `<p>Laid-Back Camp est le manga parfait pour lire sous une couverture quand il pleut dehors. Afro a créé quelque chose d'rare : un manga qui rend heureux sans chercher à émouvoir fortement, sans rebondissements, sans drama. Juste des filles qui campent et dont le plaisir est communicatif.</p><p>Ce qui distingue Laid-Back Camp d'autres slice of life c'est son vrai respect du camping comme pratique. Les informations sur l'équipement, les techniques de feu, les recettes de cuisine en extérieur sont toutes réelles et intégrées naturellement. On apprend des choses utiles en lisant une histoire légère.</p><p>La dynamique entre la solitaire Rin et la sociable Nadeshiko est bien pensée : le manga valide les deux approches du plein air sans forcer l'une vers l'autre. Une lecture douce qui fait envie de planter une tente.</p>`,
    shops: shopManga("Laid-Back+Camp"),
    streaming: cr("Laid-Back Camp"),
  },

  "log-horizon": {
    tags: "Fantasy · Isekai · Stratégie · Seinen",
    stars: 3,
    synopsis: "Trente mille joueurs japonais se retrouvent bloqués dans le monde du MMO Elder Tale lors d'une mise à jour. Contrairement aux isekai classiques, Log Horizon se concentre moins sur les combats que sur la reconstruction d'une société : politique, économie, diplomatie entre guildes et PNJ. Shiroe, mage tacticien réputé pour sa manipulation, est au coeur de cette reconstruction.",
    pros: ["Angle unique sur l'isekai : gouvernance et construction sociale plutôt que combat", "Shiroe est un protagoniste intellectuel original dans le genre", "World-building politique avec de vrais enjeux stratégiques", "Traitement des PNJ comme êtres à part entière très intéressant"],
    cons: ["Rythme lent, beaucoup de dialogues et d'explications", "Adaptation manga de la light novel parfois condensée maladroitement"],
    reviewHtml: `<p>Log Horizon est l'isekai pour ceux qui préfèrent Clausewitz à Tolkien. Mamare Touno et son équipe ne s'intéressent pas aux donjons et aux niveaux mais à la question de savoir comment organiser une société de trente mille personnes coincées ensemble sans règles claires. C'est fascinant et assez unique dans le genre.</p><p>Shiroe est un excellent protagoniste pour ce type d'histoire. Tacticien froid qui pense plusieurs coups à l'avance, il est moins attachant qu'un héros classique mais nettement plus intéressant à observer dans ses machinations politiques. Sa relation avec Naotsugu et Akatsuki offre l'équilibre émotionnel nécessaire.</p><p>Le rythme est lent et les dialogues denses. Log Horizon récompense la patience et l'investissement intellectuel plutôt que l'action immédiate. Pour les amateurs d'isekai stratégique, c'est une référence.</p>`,
    shops: shopManga("Log+Horizon"),
    streaming: cr("Log Horizon"),
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
