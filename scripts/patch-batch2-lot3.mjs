/**
 * Patch lot 3/5 — séries 41-60
 * node scripts/patch-batch2-lot3.mjs
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

  "lone-wolf-and-cub": {
    tags: "Action · Historique · Seinen · Classique",
    stars: 5,
    synopsis: "Ogami Itto, ancien bourreau officiel du Shogunat Tokugawa, est trahi par le clan Yagyu et voit sa femme assassinée. Avec son fils Daigoro âgé de deux ans dans une poussette de combat, il devient Lone Wolf, tueur à gages errant sur les routes du Japon féodal en attendant de se venger. Kazuo Koike et Goseki Kojima signent un monument de la bande dessinée mondiale publié de 1970 à 1976.",
    pros: ["Chef-d'oeuvre absolu de la bande dessinée mondiale, toutes cultures confondues", "Art de Goseki Kojima d'une expressivité et d'une maîtrise incomparables", "Exploration profonde du bushido, de la mort et de la paternité", "Influence immense sur tous les auteurs qui ont suivi"],
    cons: ["Art et rythme des années 70, très différent du manga moderne", "Certains volumes sont très violents et graphiques"],
    reviewHtml: `<p>Lone Wolf and Cub est l'une des plus grandes oeuvres de la bande dessinée mondiale, point. Kazuo Koike et Goseki Kojima ont créé quelque chose qui transcende le manga et le genre historique pour atteindre une dimension littéraire universelle. La relation entre Ogami Itto et son fils Daigoro, marchant sur la voie de la mort ensemble, est l'une des plus belles histoires de paternité jamais racontées.</p><p>L'art de Kojima est sidérant. Ses cases de combat sont d'une clarté mécanique parfaite, ses paysages de neige et de nuit sont d'une beauté mélancolique, et ses moments d'intimité entre père et fils ont une douceur qui contraste parfaitement avec la violence environnante. Chaque page est une oeuvre graphique autonome.</p><p>Lone Wolf and Cub a influencé directement des générations d'auteurs, de Frank Miller à Osamu Tezuka en passant par des réalisateurs comme John Woo. C'est la définition d'une oeuvre fondatrice, à lire comme tel.</p>`,
    shops: shopManga("Lone+Wolf+and+Cub"),
    streaming: [],
  },

  "medaka-box": {
    tags: "Action · Comédie · Shōnen · École",
    stars: 3,
    synopsis: "Medaka Kurokami, lycéenne élue présidente du conseil étudiant avec 98% des voix, est une perfection humaine qui excelle dans tout sans effort apparent. Avec son ami d'enfance Zenkichi Hitoyoshi, elle répond aux demandes des élèves via la boîte à suggestions. Derrière la comédie scolaire, Medaka Box révèle progressivement ses vraies ambitions comme une déconstruction méta du manga de shōnen.",
    pros: ["Évolution surprenante d'une comédie scolaire vers une déconstruction méta du genre", "Medaka est un concept de personnage original et provocateur", "Les arcs finaux sont audacieux dans leur remise en question des conventions", "Nisio Isin (Monogatari) apporte une densité de dialogues et d'idées rare"],
    cons: ["Démarrage trompeur qui peut rebuter avant les arcs intéressants", "Très dense et verbeux, surtout dans la seconde moitié"],
    reviewHtml: `<p>Medaka Box est un manga qui change complètement de nature au fil des volumes. Ce qui commence comme une comédie scolaire sympa avec une présidente de conseil géniale devient progressivement un des commentaires les plus méta sur les conventions du manga shōnen jamais tentés. Nisio Isin n'écrit pas des histoires, il dissèque les mécanismes de l'écriture d'histoires.</p><p>Medaka elle-même est un concept provocateur : une protagoniste parfaite dans l'absolu, sans faille ni progression possible, dans un genre qui repose sur la progression du héros. Comment raconter une histoire autour d'un personnage qui n'a pas besoin de grandir ? La réponse du manga est inventive, même si pas toujours convaincante.</p><p>À recommander principalement aux lecteurs qui connaissent bien le shōnen et qui apprécieront la méta-lecture. Pour les autres, le bénéfice est plus limité.</p>`,
    shops: shopManga("Medaka+Box"),
    streaming: [],
  },

  "mieruko-chan": {
    tags: "Horreur · Comédie · Seinen · Quotidien",
    stars: 3,
    synopsis: "Miko Yotsuya voit des fantômes monstrueux depuis un jour, partout et en permanence. Sa stratégie de survie : faire semblant de ne rien voir et continuer sa vie normale en espérant qu'ils partent. Entourée de sa meilleure amie Hana et de créatures terrifiantes que seule elle perçoit, elle tente de traverser le lycée sans perdre la raison.",
    pros: ["Concept comique original et bien exploité sur l'ignorance forcée comme mécanisme de survie", "Les designs des fantômes sont visuellement très efficaces et inquiétants", "Hana est un personnage de contraste parfait, joyeux et inconscient du danger"],
    cons: ["Format répétitif qui s'épuise sur la longueur", "Peu d'évolution narrative au-delà du concept initial"],
    reviewHtml: `<p>Mieruko-chan repose sur un concept comique simple et efficace : une fille voit des horreurs indicibles et décide de les ignorer stoïquement. La tension entre les designs de monstres vraiment effrayants de Tomoki Izumi et les réactions ultra-deadpan de Miko génère un humour d'une constance appréciable.</p><p>Le manga est idéal pour lire en petites doses. Chaque chapitre livre son quota de créatures bizarres et de situations inconfortables avec un rythme bien rodé. Sur la longueur, le concept s'essouffle un peu sans réel développement narratif, mais pour des sessions courtes et détendues, c'est un bon divertissement horror-comedy.</p>`,
    shops: shopManga("Mieruko-chan"),
    streaming: cr("Mieruko-chan"),
  },

  "mission-yozakura-family": {
    tags: "Action · Comédie · Romance · Shōnen",
    stars: 3,
    synopsis: "Taiyo Asano, lycéen timide dont la seule amie est Mutsumi Yozakura, découvre que la famille de cette dernière est en réalité une dynasty d'espions d'élite. Pour protéger Taiyo des ennemis de la famille, il est forcé d'en devenir membre en épousant Mutsumi. Sa nouvelle belle-famille composée de frères et sœurs avec des pouvoirs d'espionnage surhumains va l'entraîner dans un monde de missions dangereuses.",
    pros: ["Dynamique familiale espion originale et divertissante", "Action bien rythmée avec des personnages aux styles de combat variés", "Humour sur les situations de cohabitation efficace"],
    cons: ["Prémisse romantique forcée peu crédible", "Manque de profondeur narrative comparé aux meilleurs shōnens d'action"],
    reviewHtml: `<p>Mission Yozakura Family est un shōnen d'action honnête qui exploite bien sa prémisse de famille d'espions. Hitsuji Gondaira construit une galerie de personnages aux personnalités et aux capacités bien distinctes, et les missions permettent à chacun de briller à son tour.</p><p>Le manga souffre d'une prémisse romantique peu convaincante dans ses débuts, mais trouve son rythme une fois que les relations familiales sont établies. Pour les fans de shōnen d'action léger et bien rythmé, c'est un choix solide sans prétention.</p>`,
    shops: shopManga("Mission+Yozakura+Family"),
    streaming: cr("Mission Yozakura Family"),
  },

  "monthly-girls-nozaki-kun": {
    tags: "Comédie · Romance · Seinen · Manga",
    stars: 4,
    synopsis: "Chiyo Sakura avoue ses sentiments à Umetaro Nozaki, son camarade de classe, et se retrouve embarquée comme assistante sur son manga shōjo — car Nozaki est en fait un mangaka professionnel publié sous pseudonyme. Il a interprété sa déclaration comme une demande de travail. Commence une comédie romantique sur les malentendus, la création manga et les incompréhensions amoureuses permanentes.",
    pros: ["Concept extrêmement inventif autour de la création manga et des malentendus", "Gags sur les conventions du manga shōjo d'une précision hilarante", "Chaque personnage secondaire est une satire d'un archétype manga", "Rythme impeccable chapitre après chapitre"],
    cons: ["Romance principale qui n'avance jamais, le malentendu est le sujet pas la résolution", "Peut frustrer les lecteurs qui attendent une progression romantique"],
    reviewHtml: `<p>Nozaki-kun est la meilleure comédie sur le manga elle-même. Izumi Tsubaki a eu l'idée brillante de placer un mangaka shōjo au centre d'une romance qui parodie précisément les codes du genre qu'il produit. Les situations où Nozaki "utilise" ses amis comme modèles pour ses personnages de manga, sans comprendre les émotions réelles derrière, sont d'une drôlerie constante.</p><p>Le cast secondaire est exceptionnel. Mikorin, Kashima, Seo, Wakamatsu, chacun représente un archétype du manga shōjo déconstruit de façon irrésistible. Kashima, princesse inversée, et Hori, metteur en scène frustré, forment un duo particulièrement mémorable.</p><p>La romance principale entre Chiyo et Nozaki n'avance jamais, et c'est un choix délibéré : le malentendu de départ est le moteur de toute la comédie. Pour les lecteurs qui acceptent cette règle du jeu, c'est un manga d'une intelligence et d'une générosité rares.</p>`,
    shops: shopManga("Nozaki-kun"),
    streaming: cr("Monthly Girls Nozaki-kun"),
  },

  "moriarty-the-patriot": {
    tags: "Mystère · Historique · Seinen · Thriller",
    stars: 4,
    synopsis: "William James Moriarty, fils illégitime anobli par adoption, est un jeune lord victorien animé par une ambition révolutionnaire : détruire le système de castes britannique de l'intérieur. Avec ses frères et une équipe de confidents, il orchestre des crimes calculés pour exposer et punir les nobles corrompus. L'arrivée de Sherlock Holmes dans sa vie transforme l'ennemi juré des romans de Conan Doyle en protagoniste nuancé.",
    pros: ["Réinvention remarquable de Moriarty en anti-héros complexe et attachant", "Reconstitution de l'ère victorienne d'une richesse visuelle impressionnante", "La dynamique Moriarty-Holmes est d'une tension et d'une complicité fascinantes", "Questionnements profonds sur la justice, la légitimité et le changement social"],
    cons: ["Certains arcs s'étirent sur la longueur", "Fin de série divisive pour les fans du Moriarty original de Conan Doyle"],
    reviewHtml: `<p>Moriarty the Patriot est l'une des meilleures réappropriations d'un personnage littéraire dans le manga. Ryosuke Takeuchi et Hikaru Miyoshi prennent le grand méchant de Sherlock Holmes et en font le héros d'une révolution sociale victorienne. Le résultat est un thriller historique d'une intelligence remarquable.</p><p>Le William Moriarty qu'ils construisent est fascinant : idéaliste, froid, méthodique, animé par une rage sociale légitime et des moyens moralement ambigus. Son projet de destruction des privilèges de naissance par la force et la manipulation pose des questions sur la justice qui restent sans réponse simple.</p><p>L'arrivée de Sherlock Holmes est le vrai tournant du manga. Leur relation, faite d'admiration mutuelle et de complication émotionnelle croissante, est l'une des plus magnétiques du manga récent. Une série ambitieuse et réussie.</p>`,
    shops: shopManga("Moriarty+the+Patriot"),
    streaming: cr("Moriarty the Patriot"),
  },

  "mushoku-tensei-redundant-reincarnation": {
    tags: "Isekai · Fantasy · Aventure · Seinen",
    stars: 4,
    synopsis: "Un homme de 34 ans, NEET et reclus toute sa vie, meurt et se réincarne dans un monde de fantasy sous le nom de Rudeus Greyrat, conservant ses souvenirs mais recommençant depuis l'enfance. Décidé à ne pas gâcher cette seconde chance, il se consacre à la magie et aux relations humaines qu'il n'avait jamais su construire. Mushoku Tensei est l'oeuvre qui a largement posé les codes de l'isekai moderne.",
    pros: ["Protagoniste rare dans l'isekai : adulte psychologiquement brisé qui reconstruit sa personnalité depuis zéro", "Worldbuilding rich et cohérent, avec une géographie et une géopolitique réelles", "Progression émotionnelle de Rudeus d'une honnêteté et d'une complexité inhabituelles", "Influence fondatrice sur tout le genre isekai moderne"],
    cons: ["Comportement problématique de Rudeus envers les personnages féminins jeunes, notamment dans les premiers volumes", "Peut mettre mal à l'aise malgré l'évolution du personnage"],
    reviewHtml: `<p>Mushoku Tensei est l'oeuvre qui a défini les codes de l'isekai tel qu'on le connaît aujourd'hui. Rifujin na Magonote a posé les fondations du genre avec une ambition narrative que beaucoup de ses successeurs n'ont jamais atteinte : Rudeus n'est pas un héros invincible, c'est un homme brisé qui essaie de se réparer dans un corps neuf.</p><p>La force principale du manga est l'évolution psychologique de Rudeus. Ses traumatismes d'avant la réincarnation ne disparaissent pas comme par magie. Ils resurgissent, ils sabotent ses relations, ils nécessitent un travail conscient. Cette honnêteté sur la guérison psychologique est rare dans le genre.</p><p>Mushoku Tensei souffre de certains éléments problématiques, notamment dans ses premiers arcs, qui ont fait l'objet de critiques légitimes. L'oeuvre reste cependant fondamentale pour comprendre l'isekai et son évolution. À aborder en étant conscient de ces aspects.</p>`,
    shops: shopManga("Mushoku+Tensei"),
    streaming: cr("Mushoku Tensei"),
  },

  "my-dress-up-darling": {
    tags: "Romance · Cosplay · Seinen · École",
    stars: 4,
    synopsis: "Wakana Gojo est un lycéen passionné de poupées hina traditionnelles japonaises, une passion qu'il cache soigneusement. Marin Kitagawa, camarade de classe populaire et extravertie, découvre son secret et lui révèle le sien : elle veut cosplayer ses personnages de jeux préférés mais ne sait pas coudre. Leur collaboration inattendue autour du cosplay lance une romance naturelle et solaire.",
    pros: ["Marin Kitagawa est l'une des héroïnes les plus charismatiques et rafraîchissantes du manga récent", "Respect authentique du cosplay comme art et passion", "Chimie romantique naturelle et sans artificiel entre les deux protagonistes", "Équilibre parfait entre fan service et contenu émotionnel sincère"],
    cons: ["Fan service très présent autour de Marin qui polarise les avis", "Progression de la romance parfois trop prudente"],
    reviewHtml: `<p>My Dress-Up Darling a explosé en popularité pour une bonne raison : Marin Kitagawa est un personnage d'une fraîcheur et d'une vitalité rares. Elle aime ce qu'elle aime sans s'excuser, elle est enthousiaste sans être naïve, et sa façon d'embarquer Gojo dans sa passion avec une générosité totale est immédiatement attachante.</p><p>Le cosplay est traité avec un vrai respect : Shinichi Fukuda documente les techniques de couture, les matériaux, les défis de reproduction de costumes complexes. Cet aspect documentaire donne une authenticité qui distingue le manga des romances lycéennes génériques.</p><p>La dynamique entre Gojo, timide et habilement artisan, et Marin, extravertie et passionnée, est l'une des plus organiques du manga récent. Leur romance se construit sur une collaboration réelle et un respect mutuel des passions de l'autre. Un très bon choix pour les amateurs de romance lycéenne moderne.</p>`,
    shops: shopManga("My+Dress-Up+Darling"),
    streaming: cr("My Dress-Up Darling"),
  },

  "nausicaa-of-the-valley-of-the-wind": {
    tags: "Sci-fi · Fantasy · Aventure · Seinen",
    stars: 5,
    synopsis: "Dans un futur post-industriel où la civilisation humaine a été détruite par des guerres et des cataclysmes écologiques, Nausicaä est la princesse d'une petite vallée préservée du vent. Elle cherche à comprendre et à protéger la Mer des Korbes, forêt toxique qui envahit les terres humaines, plutôt qu'à la détruire. Hayao Miyazaki consacre douze ans à cette oeuvre manga qui dépasse largement le film qu'il en a tiré.",
    pros: ["Chef-d'oeuvre écologique d'une profondeur et d'une complexité uniques", "Nausicaä est l'un des personnages féminins les plus complets et inspirants de toute la BD mondiale", "Art de Miyazaki d'une richesse et d'une expressivité exceptionnelles", "Message environnemental et philosophique d'une avant-garde qui n'a pas vieilli"],
    cons: ["Densité narrative très élevée, demande un lecteur attentif", "Le film ne couvre que les deux premiers volumes, le manga est une oeuvre différente et plus ambitieuse"],
    reviewHtml: `<p>Nausicaä est l'oeuvre la plus importante de Hayao Miyazaki, et le fait qu'elle existe sous forme de manga plutôt que de film lui donne une liberté narrative qu'aucun long-métrage ne pourrait accueillir. Sur douze ans et sept volumes, Miyazaki a construit une cosmologie post-apocalyptique d'une complexité et d'une cohérence stupéfiantes.</p><p>Ce qui rend Nausicaä si particulier, c'est que son message écologique refuse la simplicité. La Mer des Korbes, que tout le monde veut détruire, est en réalité la solution. Les humains, en voulant "purifier" le monde, cherchent à reproduire exactement ce qui l'a tué. Cette ambiguïté morale radicale, écrite en 1982, était révolutionnaire et reste parfaitement pertinente.</p><p>Nausicaä elle-même est un archétype de personnage féminin héroïque qui n'a pas vieilli d'un jour. Courageuse, curieuse, profondément empathique, elle fait des choix difficiles et les assume. Une oeuvre fondamentale de la bande dessinée mondiale.</p>`,
    shops: shopManga("Nausicaa"),
    streaming: [],
  },

  "nisekoi": {
    tags: "Comédie · Romance · Harem · Shōnen",
    stars: 3,
    synopsis: "Raku Ichijo, fils du chef d'un clan yakuza, est forcé de simuler une relation avec Chitoge Kirisaki, fille du chef d'une famille de gangsters rivale, pour maintenir la paix entre leurs organisations. La complication : Raku garde depuis dix ans un médaillon promis à une fille dont il a oublié le nom. Commence un harem romantique où plusieurs prétendantes pourraient être la mystérieuse fille au pendentif.",
    pros: ["Prémisse amusante et bien exécutée dans les premiers volumes", "Chitoge et Onodera forment un triangle amoureux efficace", "Humour de situation efficace et bien rythmé", "Art soigné de Naoshi Komi"],
    cons: ["Conclusion très controversée qui a déçu une majorité des lecteurs", "Stagnation du mystère du médaillon trop longue", "Résolution peu satisfaisante au regard de l'investissement"],
    reviewHtml: `<p>Nisekoi est un harem romantique compétent qui a eu le malheur d'une conclusion que beaucoup de ses lecteurs ont jugée décevante. Dans ses meilleurs moments, la dynamique entre Raku et Chitoge est vivante et amusante, et le mystère du médaillon est une accroche narrative efficace.</p><p>Le problème est que Naoshi Komi a trop longtemps refusé de trancher dans la hiérarchie romantique, diluant progressivement l'intérêt du lecteur. Quand la réponse arrive enfin, elle a perdu une partie de sa portée émotionnelle. Nisekoi reste une lecture agréable si on accepte ses limites de genre, mais ne tient pas toutes ses promesses initiales.</p>`,
    shops: shopManga("Nisekoi"),
    streaming: cr("Nisekoi"),
  },

  "no-guns-life": {
    tags: "Sci-fi · Noir · Action · Seinen",
    stars: 3,
    synopsis: "Juzo Inui est un Extended, humain modifié avec une tête en forme de revolver, qui travaille comme résolveur de problèmes dans une ville cyberpunk en marge de la loi. Quand un enfant Extended fugitif lui est confié, il se retrouve pris entre une méga-corporation, des rebelles et les nombreux acteurs d'un monde où l'humanité augmentée a créé de nouvelles hiérarchies sociales.",
    pros: ["Atmosphère cyberpunk noir des années 40 très bien rendue", "Juzo est un personnage d'une froideur et d'une intégrité attachantes", "Critique sociale sur les corps augmentés et la marchandisation du corps efficace", "Design visuel original, notamment la tête-revolver iconique"],
    cons: ["Rythme lent et parfois difficile à suivre", "Certains arcs moins inspirés que d'autres"],
    reviewHtml: `<p>No Guns Life est un manga d'atmosphère avant tout. Tasuku Karasuma a dessiné une ville cyberpunk post-guerre imprégnée de film noir américain des années 40, avec ses détectives fatigués, ses corporations sans scrupule et ses innocents coincés au milieu. L'ensemble est visuellement cohérent et immersif.</p><p>Juzo Inui, avec sa tête de flingue et son code moral rigide, est un protagoniste qui marche dans la tradition des détectives durs à cuire. Son refus de se plier aux règles des puissants, même quand c'est à son détriment, est une posture attachante dans un genre qui en a besoin.</p><p>No Guns Life est une bonne série pour les amateurs de cyberpunk noir et de seinen d'atmosphère, moins recommandée pour ceux qui cherchent un rythme soutenu et des révélations fréquentes.</p>`,
    shops: shopManga("No+Guns+Life"),
    streaming: cr("No Guns Life"),
  },

  "ouran-high-school-host-club": {
    tags: "Comédie · Romance · Shōjo · Parodie",
    stars: 4,
    synopsis: "Haruhi Fujioka, étudiante boursière d'une famille modeste dans l'élitiste lycée Ouran, casse accidentellement un vase de dix millions de yens appartenant au Host Club, un club de beaux garçons riches qui divertissent les filles de l'école. Pour rembourser sa dette, elle est recrutée comme nouveau membre. Bisco Hatori signe une parodie affectueuse du shōjo romantique tout en livrant une vraie romance.",
    pros: ["Parodie bienveillante et intelligente des codes du shōjo et du harem", "Haruhi est une héroïne pragmatique et rafraîchissante, indifférente aux conventions sociales", "Chaque membre du Host Club est un archétype shōjo déconstruit avec humour", "Romance principale (Haruhi-Tamaki) touchante malgré l'ironie omniprésente"],
    cons: ["Arcs finaux plus sérieux qui contrastent avec la légèreté initiale", "Certains volumes moins inspirés au milieu de la série"],
    reviewHtml: `<p>Ouran High School Host Club est le manga qui prouve qu'une parodie peut être aussi touchante que l'original. Bisco Hatori se moque des codes du shōjo avec une affection évidente pour le genre, et ses personnages, qui sont tous des archétypes exagérés, finissent par acquérir une profondeur réelle au fil des volumes.</p><p>Haruhi est l'une des meilleures héroïnes du shōjo parce qu'elle n'appartient pas à sa logique. Elle ne s'emballe pas pour les beaux garçons, elle ne cherche pas à être sauvée, et son pragmatisme décontracté face aux folies du Host Club est la source d'un humour constant et frais.</p><p>La romance avec Tamaki, aussi ridicule que sincère, est finalement très bien construite sur la longueur. Ouran a vieilli avec grâce et reste une lecture incontournable du shōjo des années 2000.</p>`,
    shops: shopManga("Ouran+Host+Club"),
    streaming: cr("Ouran High School Host Club"),
  },

  "psyen": {
    tags: "Action · Sci-fi · Psychologie · Shōnen",
    stars: 4,
    synopsis: "Sakurako Amamiya et Ageha Yoshina reçoivent mystérieusement une carte de téléphone les conviant dans un monde dévasté appelé Psyren. Ils y affrontent des créatures mutantes appelées WISE dans un futur post-apocalyptique, révélant progressivement leurs propres pouvoirs psychiques. En voyageant entre présent et futur, ils cherchent à comprendre la catastrophe à venir et à l'empêcher.",
    pros: ["Concept de voyage temporel entre présent et futur post-apo original et bien exploité", "Système de pouvoirs psychiques intéressant avec ses propres règles", "Tension dramatique réelle autour de la catastrophe à prévenir", "Histoire d'amour entre les protagonistes bien dosée"],
    cons: ["Fin abrupte due à l'annulation prématurée dans le Jump", "Certains arcs auraient bénéficié de plus d'espace narratif"],
    reviewHtml: `<p>Psyren est l'un des manga les plus injustement oubliés du Weekly Shōnen Jump. Toshiaki Iwashiro a construit un système de pouvoirs psychiques original et un mystère temporel engageant, avec des personnages attachants et une romance bien amenée. La série méritait largement une conclusion plus développée que celle qu'elle a obtenu.</p><p>Le concept de voyager dans un futur post-apocalyptique tout en essayant de changer le présent pour l'éviter est une des premières utilisations vraiment efficaces de ce mécanisme dans le shōnen. Les révélations progressives sur Psyren et ses origines maintiennent un vrai suspense.</p><p>L'annulation prématurée par le Jump est une des grandes frustrations du manga de cette génération. Ce qui existe est excellent. La conclusion précipitée est le seul vrai regret.</p>`,
    shops: shopManga("Psyren"),
    streaming: [],
  },

  "ranma": {
    tags: "Comédie · Arts martiaux · Romance · Shōnen",
    stars: 4,
    synopsis: "Ranma Saotome, adolescent expert en arts martiaux, tombe dans une source maudite lors d'un entraînement en Chine : désormais, l'eau froide le transforme en fille, l'eau chaude lui rend sa forme masculine. Fiancé malgré lui à Akane Tendo, il doit naviguer entre ses rivaux, ses prétendantes, les malédictions des autres personnages et ses propres sentiments refoulés dans la ville de Tokyo.",
    pros: ["Humour sur le changement de genre parmi les plus inventifs et généreux du manga classique", "Galerie de personnages excentriques mémorables et variés", "Rumiko Takahashi au sommet de sa maîtrise du gag et du timing comique", "Romance Ranma-Akane touchante sous les chamailleries perpétuelles"],
    cons: ["Très long et répétitif dans sa seconde moitié", "Absence de conclusion satisfaisante dans la version originale"],
    reviewHtml: `<p>Ranma ½ est la définition du manga de comédie romantique des années 80-90. Rumiko Takahashi maîtrisait comme personne l'art du gag récurrent et de la situation embarrassante, et le dispositif du changement de genre lui offre une source inépuisable de complications hilarantes et de moments de tendresse inattendus.</p><p>La galerie de personnages est l'une des plus richement peuplées du manga de l'époque. Chaque rival, chaque prétendante, chaque père excentrique apporte sa propre mécanique comique. Ryoga et son sens de l'orientation catastrophique, Shampoo et ses contraintes culturelles absurdes, Happosai le maître pervers, tous sont devenus des figures emblématiques.</p><p>Ranma ½ s'étire et se répète dans ses volumes finaux, et la conclusion laisse beaucoup de lecteurs sur leur faim. Mais ses meilleurs moments, nombreux, sont parmi les plus drôles du manga classique. Une oeuvre fondatrice du genre.</p>`,
    shops: shopManga("Ranma"),
    streaming: cr("Ranma 1/2"),
  },

  "rave-master": {
    tags: "Aventure · Action · Fantasy · Shōnen",
    stars: 3,
    synopsis: "Haru Glory, jeune homme ordinaire vivant sur une île isolée, hérite du Rave Master, une épée magique dont seul lui peut maîtriser les cinq formes. Accompagné du chien-carotte Plue et de la mystérieuse Elie, il part à la recherche des cinq pierres Rave pour combattre la Dark Bring, source de chaos dans le monde. Premier grand manga de Hiro Mashima avant Fairy Tail.",
    pros: ["Aventure fantastique classique avec un coeur sincère et généreux", "Système d'épée à cinq formes original et visuellement intéressant", "Enjeux émotionnels sincères, notamment autour du passé d'Elie", "Bases posées par Mashima qu'on retrouvera développées dans Fairy Tail"],
    cons: ["Art daté des débuts de Mashima, moins maîtrisé que ses oeuvres ultérieures", "Certains arcs prévisibles et clichés du genre"],
    reviewHtml: `<p>Rave Master est le manga de jeunesse de Hiro Mashima, et ça se voit. L'enthousiasme est là, les idées aussi, mais la maîtrise narrative et graphique qu'il atteindra avec Fairy Tail est encore en construction. C'est un manga sincère, avec un coeur généreux, qui plaira aux amateurs d'aventure fantasy classique sans exigence particulière.</p><p>La relation entre Haru et Elie est le point fort émotionnel de la série, avec un mystère sur le passé de la jeune fille qui donne une vraie direction narrative. Plue, personnage muet à la forme incertaine, est un mascotte qui a traversé toutes les oeuvres de Mashima depuis.</p><p>À lire idéalement après Fairy Tail pour voir les origines d'un auteur, ou comme aventure shōnen solide si on cherche quelque chose de classique et bienveillant.</p>`,
    shops: shopManga("Rave+Master"),
    streaming: cr("Rave Master"),
  },

  "rent-a-girlfriend": {
    tags: "Romance · Comédie · Seinen · Controversé",
    stars: 2,
    synopsis: "Kazuya Kinoshita, lycéen fraîchement quitté par sa petite amie, loue les services de Chizuru Mizuhara, petite amie de location. Après une série de mensonges en cascade pour cacher la vérité à sa famille, il se retrouve à maintenir une relation fictive avec une fille qui le méprise ostensiblement. Rent-A-Girlfriend est une comédie romantique controversée pour son protagoniste et sa progression.",
    pros: ["Prémisse originale sur les relations de service au Japon", "Chizuru est un personnage bien développé avec ses propres ambitions", "Quelques moments sincères et touchants dans la relation principale"],
    cons: ["Kazuya est l'un des protagonistes les plus répudiés du manga récent pour sa lâcheté et son manque de maturité", "Progression romantique excessivement lente au regard de l'intérêt généré", "Nombreux arcs répétitifs autour du même malentendu central"],
    reviewHtml: `<p>Rent-A-Girlfriend souffre principalement de son protagoniste. Kazuya Kinoshita est un personnage d'une passivité et d'une lâcheté qui exaspèrent même ses défenseurs. Incapable de prendre une décision simple, il maintient des situations inconfortables par inaction chronique pendant des dizaines de volumes.</p><p>Chizuru, en revanche, est un personnage intéressant. Sa double vie entre façade de petite amie parfaite et vrai caractère distant cache des ambitions et des blessures réelles. Le manga serait probablement meilleur si elle était la protagoniste principale.</p><p>Pour les amateurs du genre qui acceptent le rythme extrêmement lent et les frustrations inhérentes, il y a quelques bons moments. Pour les autres, le rapport effort/récompense est décevant.</p>`,
    shops: shopManga("Rent-A-Girlfriend"),
    streaming: cr("Rent-A-Girlfriend"),
  },

  "sailor-moon": {
    tags: "Magie · Romance · Shōjo · Classique",
    stars: 4,
    synopsis: "Usagi Tsukino, collégienne maladroite et pleurnicharde, découvre qu'elle est Sailor Moon, la guerrière de l'amour et de la justice. Guidée par le chat noir Luna, elle réunit progressivement les autres Sailor Senshi pour combattre les forces du Dark Kingdom qui cherchent à envahir la Terre. Naoko Takeuchi signe avec Sailor Moon le manga magical girl le plus influent de l'histoire.",
    pros: ["Impact culturel mondial immense, série fondatrice du genre magical girl moderne", "Character design iconique dont l'influence est toujours visible aujourd'hui", "Équilibre romance-action-amitié bien géré", "Aspects cosmiques et mythologiques grandissants qui enrichissent l'univers"],
    cons: ["Art des années 90 parfois confus dans les scènes d'action", "Certains arcs plus faibles que d'autres, notamment les arcs médians"],
    reviewHtml: `<p>Sailor Moon a défini le manga magical girl pour des décennies. Naoko Takeuchi a créé un vocabulaire visuel et thématique qui a irrigué tout ce qui a suivi dans le genre. Les transformations, les attaques spéciales, le groupe de guerrières liées par l'amitié, tout ça vient de Sailor Moon, et la plupart des variations depuis sont des variations sur ses thèmes.</p><p>Usagi est une héroïne délibérément imparfaite dans un genre qui tendait vers des protagonistes idéalisées. Elle pleure, elle est en retard, elle mange trop, elle a peur. Et pourtant, elle est au fond une des personnages les plus courageuses et les plus aimantes de toute la bande dessinée japonaise. Ce paradoxe est au coeur de son succès durable.</p><p>Les arcs les plus tardifs, notamment l'arc de Sailor Stars, atteignent une dimension cosmique épique qui contraste avec les débuts plus simples. Sailor Moon a grandi avec ses lecteurs, et c'est l'une des raisons de sa longévité.</p>`,
    shops: shopManga("Sailor+Moon"),
    streaming: cr("Sailor Moon"),
  },

  "seraph-of-the-end-vampire-reign": {
    tags: "Action · Post-apocalyptique · Fantasy · Shōnen",
    stars: 3,
    synopsis: "Dans un monde post-apocalyptique où un virus a tué tous les adultes, les vampires ont pris le contrôle de la civilisation et gardent les humains comme bétail. Yuichiro Hyakuya, orphelin élevé par les vampires, s'échappe et rejoint l'Armée de la Lune Impériale pour se venger et retrouver son ami d'enfance Mikaela. Seraph of the End alterne combat vampirique et drama familial intense.",
    pros: ["Prémisse post-apocalyptique vampire originale", "Relation entre Yuu et Mika au coeur émotionnel efficace", "Combats bien chorégraphiés", "Lore sur les anges déchus et les vampires intéressant"],
    cons: ["Rythme inégal avec des arcs très lents", "Personnages féminins peu développés", "Intrigue principale complexe mais parfois incohérente"],
    reviewHtml: `<p>Seraph of the End est un manga d'action vampire qui a de solides bases émotionnelles sans toujours les exploiter pleinement. La relation entre Yuu et Mika, amis d'enfance séparés par les circonstances et devenus ennemis de fait, est le vrai moteur émotionnel de la série, et quand le manga s'y concentre, il est à son meilleur.</p><p>La série souffre d'un rythme irrégulier et d'un lore qui se complexifie parfois au détriment de la clarté narrative. Mais pour les amateurs de fantasy post-apocalyptique avec vampires et anges déchus, c'est une lecture solide avec suffisamment de bonnes idées pour valoir l'investissement.</p>`,
    shops: shopManga("Seraph+of+the+End"),
    streaming: cr("Seraph of the End"),
  },

  "shijou-saikyou-no-deshi-kenichi": {
    tags: "Arts martiaux · Comédie · Action · Shōnen",
    stars: 3,
    synopsis: "Kenichi Shirahama, lycéen maigrichon et souvent victime de brutes, rencontre Miu Furinji et est introduit à la Ryouzanpaku, un dojo tenu par six maîtres d'arts martiaux aux styles différents. Déterminé à ne plus jamais fuir ni se laisser intimider, il subit un entraînement surhumain pour devenir le disciple le plus puissant de l'histoire. Comédie d'arts martiaux exagérée et généreuse.",
    pros: ["Présentation variée et respectueuse de nombreux styles d'arts martiaux", "Les six maîtres de Ryouzanpaku sont des personnages attachants et mémorables", "Progression de Kenichi crédible malgré les exagérations", "Humour constamment bien dosé"],
    cons: ["Très long, avec des arcs tardifs qui s'étendent excessivement", "Fan service récurrent autour de Miu et des personnages féminins"],
    reviewHtml: `<p>Kenichi est un manga d'arts martiaux qui se distingue par la richesse de sa documentation sur les différentes disciplines. Syun Matsuena a clairement fait ses recherches, et les techniques présentées, même exagérées pour les besoins du manga, reposent sur des bases réelles. C'est un aspect rare dans le genre.</p><p>Les maîtres de Ryouzanpaku sont les vrais personnages du manga. Akisame, Sakaki, Shigure, Apachai, Ma Kensei, chacun a une personnalité forte et un style de combat distinct. Leurs interactions avec Kenichi, entre cruauté dans l'entraînement et affection secrète, sont la source d'un humour constant.</p><p>La longueur est le principal défaut du manga. Sur les premiers arcs, c'est excellent. Sur la longueur totale, ça s'étire. À recommander surtout pour les 200 premiers chapitres.</p>`,
    shops: shopManga("Kenichi"),
    streaming: cr("Kenichi the Mightiest Disciple"),
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
