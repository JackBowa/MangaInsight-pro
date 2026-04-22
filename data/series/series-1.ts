// data/series/series-1.ts — séries 1 à 208
export type Serie = {
  slug: string;          // url: /series/<slug>
  title: string;         // Titre affiché
  category: "manga" | "manhwa";
  cover?: string;        // URL d’image de couverture
  tags?: string;         // ex: "Shōnen · Aventure"
  synopsis?: string;
  reviewHtml?: string;   // HTML optionnel pour l’avis (si tu veux copier/coller)
  stars?: number;        // 0..5
  shops?: { name: string; url: string; logo: string }[];
  streaming?: { name: string; url: string; logo: string }[];
  live?: { name: string; url: string; logo: string }[];
  addedAt?: string;       // date d'ajout ISO ex: "2025-03-04"
  pros?: string[];        // points forts
  cons?: string[];        // points faibles
  published?: boolean;    // false = page masquée (notFound)
  status?: "en cours" | "terminé" | "pause";
  volumes?: number;       // nombre de tomes publiés
  chapters?: number;      // nombre de chapitres
  year?: number;          // année de début de publication
  author?: string;        // auteur(s)
};

export const SERIES_1: Serie[] = [
  // === EXEMPLE COMPLET : ONE PIECE ===
  // Tu ajoutes les autres séries ici, par ex. Naruto :
{
  slug: "naruto",
  pros: ["Personnages profonds et mémorables","Thèmes universels, amitié, persévérance, sacrifice","Combats stratégiques et inventifs","World-building riche et cohérent"],
  cons: ["Nombreux flashbacks ralentissent le rythme","Arcs de remplissage dans l'animé","Fin de Shippuden divisive"],
  addedAt: "2025-09-01",
  title: "Naruto",
  category: "manga",
  tags: "Shōnen · Ninjas · Action",
  cover: "/naruto.jpg",
  synopsis: "Dans le village de Konoha vit Naruto, un jeune garçon détesté et craint des villageois du fait qu'il détienne en lui Kyuubi (démon renard à neuf queues) d'une incroyable force, qui a tué un grand nombre de personnes. Le ninja le plus puissant de Konoha à l'époque, le quatrième Hokage, Minato Namikaze, réussit à sceller ce démon dans le corps de Naruto. Malheureusement il y laissa la vie.\n\nC'est ainsi que douze ans plus tard, Naruto rêve de devenir le plus grand Hokage de Konoha afin que tous le reconnaissent à sa juste valeur. Mais la route pour devenir Hokage est très longue et Naruto sera confronté à un bon nombre d'épreuves et devra affronter de nombreux ennemis pour atteindre son but !",
  reviewHtml: `
    <p>Naruto et Naruto Shippuden sont des sagas qui ont laissé une empreinte indélébile dans mon cœur de fan de manga. Suivre les aventures de Naruto Uzumaki, un jeune ninja au cœur vaillant, a été une expérience incroyablement riche et émouvante.</p>
    <p>Ce qui m'a particulièrement marqué dans Naruto, ce sont ses personnages. Chacun d'eux est unique et complexe, avec ses propres luttes et ses propres rêves. Voir leur évolution au fil de la série a été à la fois inspirant et poignant, créant un lien profond entre eux et moi en tant que lecteur.</p>
    <p>Les combats dans Naruto sont tout simplement époustouflants. Chaque affrontement est une danse dynamique de pouvoirs ninja, remplie d'action, de stratégie et d'émotion. Les techniques uniques et les tactiques intelligentes des personnages rendent chaque bataille palpitante et imprévisible.</p>
    <p>Quant à Naruto Shippuden, c'est une suite qui a su élever l'aventure à de nouveaux sommets. Avec des enjeux plus élevés et des défis plus grands, nous voyons nos héros affronter des adversaires redoutables tout en luttant avec leurs propres démons intérieurs. Les personnages se développent encore davantage, ajoutant des couches de profondeur à une histoire déjà captivante.</p>
    <p>Ce qui rend ces sagas vraiment spéciales, ce sont les thèmes universels qu'elles explorent. Des notions telles que l'amitié, le courage et la persévérance résonnent avec le lecteur d'une manière profonde et durable, nous rappelant les valeurs fondamentales qui font de nous des êtres humains.</p>
    <p>En résumé, Naruto et Naruto Shippuden sont bien plus que de simples histoires de ninjas. Ce sont des récits d'aventure, de croissance personnelle et d'amitié qui continueront à inspirer et à captiver les lecteurs du monde entier pour les années à venir.</p>
  `,
  stars: 5,
  shops: [
    {
      name: "Manganim",
      url: "https://manganim.fr/collections/tomes-naruto?_pos=1&_psq=naruto+tome&_ss=e&_v=1.0",
      logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594",
    },
    {
      name: "Fnac",
      url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=naruto+tome&sft=1&sa=0",
      logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png",
    },
    {
      name: "Amazon",
      url: "https://www.amazon.fr/s?k=naruto+tome&__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3GRE9SIBRE7A8&sprefix=naruto+tome%2Caps%2C91&ref=nb_sb_noss_2",
      logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg",
    },
  ],
  streaming: [
    {
      name: "Netflix",
      url: "https://www.netflix.com/search?q=naruto&jbv=70205012",
      logo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
    },
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 72,
  chapters: 700,
  year: 1999,
  author: "Masashi Kishimoto",
},

  // Exemple manhwa
{
  slug: "solo-leveling",
  pros: ["Power fantasy addictif et bien rythmé","Artwork coréen spectaculaire","Progression du héros très satisfaisante"],
  cons: ["Personnages secondaires peu développés","Scénario prévisible","Manque de profondeur émotionnelle"],
  addedAt: "2025-09-02",
  title: "Solo Leveling",
  category: "manhwa",
  tags: "Action · Fantasy · Chasseurs",
  cover:
    "/solo-leveling.jpeg",
  synopsis:
    "Il y a dix ans, des portails apparaissaient en ouvrant des passages vers des donjons et du monde parallèle, et parmi des gens normaux, certains ont éveillé leurs pouvoirs et sont devenus des chasseurs. Sung Jin-Woo, un chasseur faible, a beaucoup de mal à survivre. Un jour, il se retrouve dans un double donjon et, en échappant la mort de justesse, il obtient un étrange pouvoir et devient le chasseur le plus fort.",
  reviewHtml: `
    <p><strong>Un voyage épique dans un monde de chasseurs et de monstres</strong></p>

    <p><em>Solo Leveling</em> est bien plus qu'un simple manhwa&nbsp;: c'est une expérience captivante qui te plonge dans un univers où la frontière entre l'humanité et le surnaturel s'estompe. En tant que premier manhwa que j'ai lu, il m'a immédiatement accroché avec son mélange d'action, de mystère et de magie.</p>

    <p>L'histoire suit Jin-Woo, un chasseur de donjons, alors qu'il entre dans un monde dangereux où des monstres menacent l'humanité. Ce qui commence comme une quête personnelle pour devenir plus fort se transforme rapidement en une bataille pour sauver le monde lui-même. La progression du personnage est palpitante, et voir Jin-Woo surmonter des défis de plus en plus grands est incroyablement satisfaisant.</p>

    <p>Ce qui distingue vraiment <em>Solo Leveling</em>, c'est son art magnifique et ses scènes d'action épiques. Chaque chapitre est un régal visuel&nbsp;: combats fluides, créatures impressionnantes et mise en scène ultra dynamique. Les retournements de situation te tiennent en haleine jusqu'à la dernière page.</p>

    <p>En résumé, <em>Solo Leveling</em> est un incontournable du genre&nbsp;: une lecture addictive et immersive, portée par un héros qui explose littéralement ses limites. À lire si tu veux une aventure nerveuse dans un monde fantastique.</p>
  `,
  stars: 5,
  shops: [
    {
      name: "Manganim",
      url: "https://manganim.fr/collections/tomes-solo-leveling?_pos=2&_psq=Solo+leveing&_ss=e&_v=1.0",
      logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594",
    },
    {
      name: "Fnac",
      url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Solo+leveling&sft=1&sa=0",
      logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png",
    },
    {
      name: "Amazon",
      url: "https://www.amazon.fr/s?k=Solo+leveling+tome&__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=24JTZHYW0CMFC&sprefix=solo+leveling+tome%2Caps%2C90&ref=nb_sb_noss_2",
      logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg",
    },
  ],
  streaming: [
    {
      name: "Crunchyroll",
      url: "https://www.crunchyroll.com/fr/series/GDKHZEJ0K/solo-leveling",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png",
    },
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 14,
  chapters: 179,
  year: 2018,
  author: "Chugong",
},

// TOKYO REVENGERS
{
  slug: "tokyo-revengers",
  pros: ["Concept de voyage temporel addictif","Tensions entre gangs très bien rendues","Rythme effréné"],
  cons: ["Logique temporelle parfois incohérente","Fin jugée décevante par beaucoup","Quelques arcs en trop"],
  addedAt: "2025-09-04",
  title: "Tokyo Revengers",
  category: "manga",
  tags: "Action · Voyage temporel",
  cover: "/Tokyo-Revengers.jpg",
  synopsis: "Takemichi Hanagaki, 26 ans, apprend que son ex-petite amie Hinata a été tuée par le gang Tokyo Manji. Peu après, il est poussé sur les rails du métro et se retrouve douze ans en arrière. Il décide de modifier le passé pour sauver Hinata et empêcher la montée du gang.",
  reviewHtml: `
 <p> Tokyo Revengers est un manga qui m'a rapidement accroché avec son mélange de voyage dans le temps, de gangs de rue et de quête de rédemption. L'histoire suit Takemichi Hanagaki, un jeune homme qui découvre qu'il peut remonter le temps pour essayer de sauver son ex-petite amie Hinata, qui a été tuée dans le futur par un gang violent. Cette combinaison de thèmes m'a immédiatement intrigué, car elle apporte un aspect de suspense et de mystère tout en explorant la vie des gangs à Tokyo.</p>

              <p>Ce qui rend Tokyo Revengers si intéressant, c'est l'évolution de Takemichi. Il commence comme un personnage assez ordinaire, mais avec un énorme cœur, et il est prêt à tout pour changer le futur. Toutefois, il a tendance à pleurer et à se laisser submerger par les émotions assez souvent, ce qui peut être un peu répétitif à la longue. Malgré cela, sa détermination à changer le cours des événements et à protéger ses amis reste touchante.</p>

              <p>Les autres personnages sont également bien développés. Les membres du Tokyo Manji Gang, comme Mikey et Draken, ajoutent de la profondeur à l'histoire. Ils ont chacun leur propre histoire, leurs propres motivations, et la dynamique entre eux est l'un des points forts du manga. Les rivalités entre gangs, les luttes pour le pouvoir et les intrigues internes créent une tension constante qui maintient l'intérêt.</p>

              <p>L'aspect du voyage dans le temps apporte une dimension unique à Tokyo Revengers. Cela permet à Takemichi de revoir des événements passés et de tenter de les modifier, mais cela soulève également des questions sur le destin et la possibilité réelle de changer le futur. Cette dualité entre déterminisme et libre arbitre ajoute un niveau de complexité à l'intrigue.</p>

              <p>Les scènes de combat sont intenses, avec des moments de grande violence, mais aussi des actes de courage et de loyauté. Ces éléments contribuent à donner au manga un ton réaliste et dur, ce qui contraste avec d'autres mangas plus légers.</p>

              <p>Je donnerais à Tokyo Revengers une note de 4 sur 5. Malgré les moments où Takemichi pleure un peu trop, c'est un bon manga avec une intrigue captivante, des personnages intéressants et des thèmes profonds. Si vous aimez les histoires de gangs, de voyages dans le temps et de rédemption, ce manga vaut vraiment le détour. La tension constante et les rebondissements rendent chaque chapitre excitant, et on veut toujours savoir ce qui va se passer ensuite.</p>
`,
  stars: 4,
  shops: [
    {
      name: "Manganim",
      url: "https://manganim.fr/search?q=tokyo+revengers",
      logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594",
    },
    {
      name: "Fnac",
      url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=tokyo+revengers",
      logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png",
    },
    {
      name: "Amazon",
      url: "https://www.amazon.fr/s?k=tokyo+revengers",
      logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg",
    },
  ],
  streaming: [
    {
      name: "Crunchyroll",
      url: "https://www.crunchyroll.com/fr/series/G3KHEVMEX/tokyo-revengers",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png",
    },
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 31,
  chapters: 278,
  year: 2017,
  author: "Ken Wakui",
},

// THE PLAYER WHO CAN'T LEVEL UP
{
  slug: "the-player-who-cant-level-up",
  pros: ["Concept original de stagnation volontaire dans un monde de progression","Héros ingénieux qui compense par la stratégie","Univers de donjons bien construit"],
  cons: ["Rythme parfois lent","Certains arcs manquent de tension","Personnages secondaires peu développés"],
  addedAt: "2025-09-06",
  title: "The Player Who Can’t Level Up",
  category: "manhwa",
  tags: "Action · Fantasy",
  cover: "/the-player.png",
  synopsis: "Kim Gi-Gyu, un joueur qui a reçu son éveil mais reste bloqué au niveau 1 malgré des années d'efforts. Lorsqu’il obtient soudainement une arme unique et un pouvoir mystérieux, sa progression commence et il découvre la vérité sur son monde.",
  reviewHtml: `
   <p>The Player Who Can't Level Up m'a agréablement surpris avec son approche unique dans le monde des manhwas axés sur les jeux, se distinguant même de séries bien connues comme "Solo Leveling". Dès le début, j'ai été intrigué par le protagoniste, ce joueur qui défie les conventions en trouvant des moyens ingénieux de devenir plus fort malgré son incapacité à monter de niveau.</p>

              <p>Ce qui m'a le plus marqué, c'est l'immersion totale dans un monde élaboré et détaillé. Chaque élément, des règles du jeu aux enjeux, est soigneusement développé, offrant une expérience de lecture vraiment immersive. Chaque chapitre m'a transporté dans un nouvel aspect de cet univers fascinant, me tenant en haleine à chaque tournant.</p>

              <p>Les dessins sont tout simplement spectaculaires. Chaque détail est méticuleusement rendu, donnant vie aux personnages et aux scènes avec une incroyable vivacité. Les scènes d'action sont un vrai régal, avec un rythme qui m'a fait retenir mon souffle à chaque page. Et les expressions des personnages... Elles capturent si bien leurs émotions que j'ai vraiment ressenti leur joie, leur colère et leur détermination tout au long de l'histoire.</p>

              <p>Mais ce qui rend ce manhwa vraiment addictif, ce sont ses intrigues captivantes. Les rebondissements inattendus et les développements astucieux m'ont maintenu en suspense à chaque instant. Voir comment le protagoniste surmonte les obstacles avec intelligence et détermination, même sans pouvoir monter de niveau, est à la fois inspirant et incroyablement divertissant.</p>

              <p>En conclusion, The Player Who Can't Level Up est un véritable joyau pour les amateurs de manhwas axés sur les jeux. Son univers riche, ses superbes dessins et ses intrigues palpitantes en font une lecture incontournable pour ceux qui recherchent quelque chose d'original et de captivant. Si vous aimez les histoires où l'intelligence et la détermination sont les clés du succès, alors vous ne serez pas déçu par ce manhwa captivant.</p>
   `,
  stars: 5,
  shops: [
    {
      name: "Manganim",
      url: "https://manganim.fr/search?q=the+player+who+cant+level+up",
      logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594",
    },
    {
      name: "Amazon",
      url: "https://www.amazon.fr/s?k=the+player+who+cant+level+up",
      logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg",
    },
  ],
  streaming: [],
  live: [],
  published: true,
  status: "terminé",
  volumes: 6,
  chapters: 130,
  year: 2019,
  author: "D-Dart",
},

// THE BEGINNING AFTER THE END
{
  slug: "the-beginning-after-the-end",
  pros: ["Isekai avec un vrai passé adulte pour le protagoniste","World-building solide et progressif","Évolution émotionnelle crédible"],
  cons: ["Longueur excessive de certains arcs","Quelques clichés du genre persistants","Rythme inégal selon les volumes"],
  addedAt: "2025-09-08",
  title: "The Beginning After The End",
  category: "manhwa",
  tags: "Réincarnation · Fantasy",
  cover: "/the beginning.jpg",
  synopsis: "Arthur Leywin, roi d’un monde magique, meurt et se réincarne dans un nouveau monde où il grandit avec les souvenirs de sa vie passée. Décidé à corriger ses erreurs, il explore un univers rempli de magie, de monstres et d’intrigues.",
  reviewHtml: `
  <p>The Beginning After the End m'a vraiment captivé avec son univers incroyablement riche et immersif. Dès les premières pages, j'ai été transporté dans un monde où la magie et les conflits règnent en maîtres, et où chaque recoin révèle de nouveaux mystères à explorer. Ce qui m'a le plus marqué, c'est le protagoniste, cet ancien roi réincarné dans un corps nouveau. Son voyage, entre la quête de puissance et celle de rédemption, m'a profondément touché, car il combine sa sagesse acquise dans sa vie passée avec les défis de sa nouvelle existence.</p>

                <p>Visuellement, le manhwa est un véritable régal pour les yeux. Les dessins détaillés et dynamiques captent parfaitement l'intensité des scènes d'action, donnant vie à chaque mouvement avec une énergie palpable. Et les personnages... Leurs designs uniques les rendent vraiment mémorables, et suivre leur évolution au fil des chapitres est un véritable plaisir.</p>

                <p>Mais ce qui m'a vraiment accroché, c'est la détermination du protagoniste. On la ressent à chaque page, et cela crée un lien profond entre le lecteur et lui. Sa croissance, à la fois en termes de pouvoir et de caractère, est un véritable pilier de l'histoire, et voir comment il surmonte les obstacles est à la fois inspirant et émouvant. Et bien sûr, les autres personnages ne sont pas en reste. Leurs propres parcours ajoutent des couches de profondeur à l'univers déjà complexe, créant ainsi une toile narrative vraiment captivante.</p>

              <p>En résumé, The Beginning After the End est bien plus qu'une simple série de manhwa. C'est une expérience immersive qui m'a totalement absorbé. Entre l'univers complexe, les scènes d'action exécutées à la perfection et la force inébranlable du protagoniste, c'est une lecture que je recommande vivement à tous les amateurs de fantasy. Si vous cherchez une histoire qui vous transporte et vous fait vibrer à chaque page, alors vous allez adorer plonger dans cet univers fascinant.</p>
   `,
  stars: 5,
  shops: [
    {
      name: "Manganim",
      url: "https://manganim.fr/search?q=the+beginning+after+the+end",
      logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594",
    },
    {
      name: "Amazon",
      url: "https://www.amazon.fr/s?k=the+beginning+after+the+end",
      logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg",
    },
  ],
  streaming: [],
  live: [],
  published: true,
  status: "terminé",
  volumes: 23,
  chapters: 180,
  year: 2018,
  author: "TurtleMe",
},

// MY HERO ACADEMIA
{
  slug: "my-hero-academia",
  pros: ["Galerie de personnages très variée et attachante","Système de pouvoirs (Quirks) créatif","Combats spectaculaires"],
  cons: ["Arcs inégaux en qualité","Certains personnages principaux mis de côté","Arc final trop long"],
  addedAt: "2025-09-10",
  title: "My Hero Academia",
  category: "manga",
  tags: "Super-héros · Shōnen",
  cover: "/My-Hero-Academia.jpg",
  synopsis: "Dans un monde où 80 % de la population possède des super-pouvoirs appelés Alters, Izuku Midoriya est né sans aucun don. Son rêve de devenir héros semble impossible, jusqu’au jour où il rencontre son idole All Might qui lui transmet son pouvoir.",
  reviewHtml: `
        <p>My Hero Academia est un manga qui incarne l'essence même du genre shōnen. L'histoire suit Izuku Midoriya, un jeune garçon né sans super-pouvoirs dans un monde où presque tout le monde en possède, mais qui aspire à devenir un héros. Cette prémisse m'a tout de suite captivé, car elle renverse le cliché du héros naturellement doué et montre un personnage qui doit travailler dur pour atteindre ses objectifs.</p>
                <p>Ce qui rend My Hero Academia si spécial, c'est l'univers riche en super-héros et en super-vilains. Chaque personnage a un pouvoir unique (ou "Quirk"), ce qui crée des possibilités infinies pour des combats passionnants et des interactions dynamiques. Midoriya, surnommé Deku, commence son voyage en tant qu'outsider, ce qui le rend incroyablement attachant. Sa détermination et son esprit de persévérance sont inspirants, et on ne peut s'empêcher de l'encourager.</p>
                  <p>Les autres personnages, comme All Might, Bakugo, Todoroki, et Uraraka, apportent chacun leur propre style et leur propre histoire à l'intrigue. Les relations qui se tissent entre les élèves de la classe 1-A ajoutent de la profondeur à l'histoire. C'est un plaisir de voir comment ils évoluent en tant que héros en formation et en tant qu'amis.</p>
                    <p>L'action dans My Hero Academia est époustouflante. Les combats sont intenses et bien chorégraphiés, avec des moments épiques qui m'ont tenu en haleine. Les thèmes abordés, comme le courage, l'amitié et la justice, donnent du poids à l'histoire, faisant de ce manga bien plus qu'une simple série d'action.</p>
                      <p>Cependant, ce que j'apprécie le plus dans My Hero Academia, c'est la croissance des personnages. On voit Deku passer de quelqu'un qui n'a rien à quelqu'un qui travaille dur pour devenir un héros digne de ce nom. Cela montre que le véritable héroïsme ne réside pas dans le pouvoir, mais dans le courage et le dévouement.</p>
                        <p>Je donne à My Hero Academia une note de 5 sur 5 pour sa capacité à inspirer et à divertir. Le monde des super-héros est excitant et plein de possibilités, et les personnages sont bien développés. Si vous aimez les histoires de héros qui se battent pour ce qui est juste, ce manga est fait pour vous. C'est un univers où j'ai toujours hâte de revenir, et le seul regret, c'est de devoir attendre le prochain chapitre.
.</p>`,

  stars: 5,
  shops: [
    {
      name: "Manganim",
      url: "https://manganim.fr/search?q=my+hero+academia",
      logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594",
    },
    {
      name: "Fnac",
      url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=my+hero+academia",
      logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png",
    },
    {
      name: "Amazon",
      url: "https://www.amazon.fr/s?k=my+hero+academia",
      logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg",
    },
  ],
  streaming: [
    {
      name: "Crunchyroll",
      url: "https://www.crunchyroll.com/fr/series/G6J0G49X6/my-hero-academia",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png",
    },
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 42,
  chapters: 430,
  year: 2014,
  author: "Kōhei Horikoshi",
},


// L'ATTAQUE DES TITANS
{
  slug: "l-attaque-des-titans",
  pros: ["Twists scénaristiques imprévisibles","Thèmes politiques et philosophiques rares dans le shōnen","Personnages complexes et moralement ambigus","Tension permanente"],
  cons: ["Fin très controversée et divisive","Rythme parfois lent dans les arcs politiques","Certains personnages sacrifiés"],
  addedAt: "2025-09-11",
  title: "L’Attaque des Titans",
  category: "manga",
  tags: "Dark Fantasy · Titans",
  cover: "/shingeki-no-kyojin.jpg",
  synopsis: "L’humanité vit retranchée derrière d’immenses murs pour se protéger des Titans, des créatures géantes mangeuses d’hommes. Eren Jaeger, témoin de la destruction de sa ville, jure de les exterminer et rejoint l’armée pour combattre ces monstres.",
  reviewHtml: `
    <p> L'Attaque des Titans (Shingeki no Kyojin) est un manga qui a redéfini le genre de la fantasy sombre et post-apocalyptique. Dès le premier chapitre, j'ai été impressionné par l'ampleur de son univers et par l'innovation de son concept. L'histoire se déroule dans un monde où l'humanité vit à l'intérieur de gigantesques murs pour se protéger des Titans, des créatures monstrueuses qui dévorent les humains. Le mystère qui entoure ces Titans est l'un des éléments les plus captivants du manga.</p>

              <p>Ce qui rend L'Attaque des Titans si spécial, c'est la combinaison de moments intenses, de révélations surprenantes et de personnages profondément attachants. Eren Yeager, Mikasa Ackerman, et Armin Arlert, les protagonistes principaux, commencent comme de simples enfants cherchant à survivre dans ce monde brutal, mais leur évolution au fil de la série est fascinante. Chacun d'eux a ses propres motivations et son propre développement, ce qui crée une dynamique riche et nuancée.</p>

              <p>Les scènes d'action dans L'Attaque des Titans sont à couper le souffle. Les combats contre les Titans sont incroyablement bien réalisés, avec une tension palpable à chaque instant. Le manga explore des thèmes profonds, comme le sacrifice, le courage et la quête de liberté, tout en offrant des moments de pur chaos et d'adrénaline. C'est un équilibre parfait entre action intense et moments d'émotion qui restent gravés dans la mémoire.</p>

                <p>Un autre aspect que j'ai trouvé impressionnant est le développement de l'intrigue. Chaque révélation sur les Titans, les murs et l'histoire cachée du monde apporte de nouvelles couches de complexité à l'histoire. Cela maintient un niveau constant de suspense et de curiosité, ce qui m'a rendu accro à la série.</p>

                <p>Je donne à L'Attaque des Titans une note de 5 sur 5 pour son innovation, son côté impressionnant et ses personnages très attachants. C'est un manga qui parvient à surprendre et à émouvoir, tout en offrant des scènes d'action spectaculaires. Si vous recherchez une série avec des personnages forts, une intrigue captivante et des combats épiques, L'Attaque des Titans est un incontournable. C'est l'une des œuvres les plus innovantes et engageantes que j'ai lues, et je la recommande à tous ceux qui aiment les histoires qui vous tiennent en haleine du début à la fin </p>
        `,
  stars: 5,
  shops: [
    {
      name: "Manganim",
      url: "https://manganim.fr/search?q=attaque+des+titans",
      logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594",
    },
    {
      name: "Fnac",
      url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=attaque+des+titans",
      logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png",
    },
    {
      name: "Amazon",
      url: "https://www.amazon.fr/s?k=attaque+des+titans",
      logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg",
    },
  ],
  streaming: [
    {
      name: "Crunchyroll",
      url: "https://www.crunchyroll.com/fr/series/GR751KNZY/attack-on-titan",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png",
    },
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 34,
  chapters: 139,
  year: 2009,
  author: "Hajime Isayama",
},
// BLUE LOCK
{
  slug: "blue-lock",
  pros: ["Concept original, anti-shōnen sportif","Rivalités intenses et mémorables","Psychologie du football jamais vue dans le genre"],
  cons: ["Certains matchs s'étirent en longueur","Logique footballistique parfois fantaisiste","Personnages féminins inexistants"],
  addedAt: "2025-09-13",
  title: "Blue Lock",
  category: "manga",
  tags: "Football · Shōnen · Compétition",
  cover: "/blue-lock.jpg",
  synopsis: `Après l’échec du Japon à la Coupe du monde, un programme radical est lancé : Blue Lock, une sélection impitoyable destinée à forger l’attaquant égoïste ultime. Yoichi Isagi, lycéen talentueux mais hésitant, y joue sa carrière et sa vision du football.`,
  reviewHtml: `
  
              <p>Blue Lock est un manga qui a complètement renouvelé mon intérêt pour les récits sportifs. En se concentrant sur le football, ce manga introduit une prémisse unique où le gouvernement japonais crée une installation appelée Blue Lock, destinée à former le meilleur attaquant de football du monde. Cette approche radicale et compétitive du sport m'a immédiatement captivé.</p>

              <p>Ce que j'apprécie le plus dans Blue Lock, c'est la façon dont il se distingue d'autres mangas sportifs. Au lieu de se concentrer uniquement sur l'esprit d'équipe, il met en avant l'individualisme et la quête de l'excellence personnelle. Le personnage principal, Yoichi Isagi, se retrouve confronté à un dilemme moral profond entre ses aspirations personnelles et le bien collectif de l'équipe, ce qui ajoute une tension dramatique fascinante.</p>

              <p>Les personnages sont un autre point fort de Blue Lock. Chaque joueur a un style de jeu unique et une personnalité bien définie, ce qui enrichit les interactions et les confrontations sur et hors du terrain. Les stratégies et les tactiques employées sont innovantes et reflètent une compréhension profonde du football, ce qui rend les matchs excitants et imprévisibles.</p>

              <p>Graphiquement, Blue Lock est un régal pour les yeux. Les mouvements des joueurs sont représentés avec une précision et une dynamique qui capturent l'intensité du sport. Les expressions faciales et les mouvements corporels transmettent parfaitement l'urgence et la pression ressenties par les joueurs pendant les matchs.</p>

              <p>Le développement des personnages est également remarquable. Voir Isagi et ses coéquipiers évoluer, surmonter des défis et repousser leurs limites pour atteindre le sommet est incroyablement inspirant. Leur croissance n'est pas seulement physique, mais aussi émotionnelle et mentale, ce qui rend chaque victoire et chaque défaite encore plus poignante.</p>

              <p>En somme, je donne à Blue Lock une note de 5 sur 5 pour son approche audacieuse et innovante du manga sportif. Il brise les conventions et offre une lecture exaltante qui est à la fois un hommage au football et une exploration des ambitions personnelles. Si vous cherchez un manga qui mélange action, stratégie et développement de personnages, Blue Lock est incontestablement à recommander. C'est une série que je trouve difficile de lâcher, tant chaque chapitre me laisse impatient de découvrir la suite.</p>

        
  `,
  stars: 5,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=blue+lock", logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=blue+lock", logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=blue+lock", logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" },
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/fr/series/G4PH0WEKE/blue-lock", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" },
  ],
  live: [],
  published: true,
  status: "en cours",
  volumes: 30,
  chapters: 290,
  year: 2018,
  author: "Muneyuki Kaneshiro",
},

// BLEACH
{
  slug: "bleach",
  pros: ["Designs de personnages iconiques","Arc Soul Society, l'un des meilleurs du shōnen","Ambiance unique entre le monde des vivants et des morts"],
  cons: ["Arc Fullbring considéré comme le moins bon","Remplissage excessif dans l'animé","Fin manga très précipitée"],
  addedAt: "2025-09-15",
  title: "Bleach",
  category: "manga",
  tags: "Shōnen · Surnaturel · Action",
  cover: "/bleach.jpg",
  synopsis: `Ichigo Kurosaki, lycéen capable de voir les esprits, hérite par hasard des pouvoirs d’une Shinigami, Rukia. Propulsé dans le monde des âmes, il doit protéger les vivants des Hollows et affronter des complots qui dépassent son imagination.`,
  reviewHtml: `
    >Bleach occupe une place spéciale dans mon cœur, car c'était le premier manga que j'ai découvert, et son histoire m'a captivé dès le premier chapitre. Plonger dans l'univers de Soul Society et suivre les aventures de Ichigo Kurosaki m'a totalement absorbé, et j'ai été emporté par chaque arc narratif.</p>
              
               <p>Ce qui m'a vraiment marqué dans Bleach, ce sont les combats. Ils sont tout simplement impressionnants, avec des pouvoirs et des techniques incroyablement variés qui m'ont toujours laissé bouche bée. Chaque affrontement est intense, et voir les personnages utiliser leur Zanpakuto avec maîtrise est un vrai régal visuel.</p>

              <p>Mais ce n'est pas seulement l'action qui m'a séduit. Les personnages de Bleach ont une profondeur et une complexité qui les rendent vraiment mémorables. De Ichigo et Rukia à Byakuya et Kenpachi, chacun a ses propres motivations et son propre cheminement, ce qui rend leur évolution au fil de l'histoire fascinante à suivre.</p>

              <p>Ce manga a une capacité incroyable à mélanger l'action avec des moments émotionnels poignants. Les liens d'amitié et de camaraderie entre les personnages sont au cœur de l'histoire, et ces moments de connexion humaine ajoutent une dimension supplémentaire à l'ensemble.</p>

              <p>J'ai relu Bleach plusieurs fois, et à chaque relecture, je découvre de nouveaux détails et nuances que j'avais peut-être manqués auparavant. C'est une série qui ne cesse de me surprendre et de me captiver, et je suis reconnaissant d'avoir eu l'opportunité de plonger dans cet univers fantastique.</p>
   
              <p>En résumé, Bleach est bien plus qu'un simple manga pour moi. C'est une aventure épique qui a façonné ma passion pour les histoires narratives. Ses combats spectaculaires, ses personnages mémorables et son mélange habile d'action et d'émotion en font un incontournable pour tous les amateurs de manga.</p>
    `,
  stars: 5,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=bleach", logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=bleach+manga", logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=bleach+manga", logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" },
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/fr/series/G63VGG2NY/bleach", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" },
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 74,
  chapters: 686,
  year: 2001,
  author: "Tite Kubo",
},

// BLACK BUTLER (Kuroshitsuji)
{
  slug: "black-butler",
  pros: ["Duo Sebastian/Ciel iconique et fascinant","Ambiance victorienne gothique unique","Mélange humour et horreur très bien dosé"],
  cons: ["Arcs inégaux en qualité","Certaines intrigues s'étirent inutilement","Résolution de certains mystères décevante"],
  addedAt: "2025-09-17",
  title: "Black Butler",
  category: "manga",
  tags: "Gothique · Mystère · Fantasy",
  cover: "/black-butler.jpg",
  synopsis: `Ciel Phantomhive, jeune comte au passé tragique, a scellé un pacte avec Sebastian, un majordome démoniaque parfait. Ensemble, ils résolvent des affaires sombres dans le Londres victorien, en attendant le jour où Sebastian prendra l’âme de Ciel.`,
  reviewHtml: `
     <p>Bleach occupe une place spéciale dans mon cœur, car c'était le premier manga que j'ai découvert, et son histoire m'a captivé dès le premier chapitre. Plonger dans l'univers de Soul Society et suivre les aventures de Ichigo Kurosaki m'a totalement absorbé, et j'ai été emporté par chaque arc narratif.</p>
              
               <p>Ce qui m'a vraiment marqué dans Bleach, ce sont les combats. Ils sont tout simplement impressionnants, avec des pouvoirs et des techniques incroyablement variés qui m'ont toujours laissé bouche bée. Chaque affrontement est intense, et voir les personnages utiliser leur Zanpakuto avec maîtrise est un vrai régal visuel.</p>

              <p>Mais ce n'est pas seulement l'action qui m'a séduit. Les personnages de Bleach ont une profondeur et une complexité qui les rendent vraiment mémorables. De Ichigo et Rukia à Byakuya et Kenpachi, chacun a ses propres motivations et son propre cheminement, ce qui rend leur évolution au fil de l'histoire fascinante à suivre.</p>

              <p>Ce manga a une capacité incroyable à mélanger l'action avec des moments émotionnels poignants. Les liens d'amitié et de camaraderie entre les personnages sont au cœur de l'histoire, et ces moments de connexion humaine ajoutent une dimension supplémentaire à l'ensemble.</p>

              <p>J'ai relu Bleach plusieurs fois, et à chaque relecture, je découvre de nouveaux détails et nuances que j'avais peut-être manqués auparavant. C'est une série qui ne cesse de me surprendre et de me captiver, et je suis reconnaissant d'avoir eu l'opportunité de plonger dans cet univers fantastique.</p>
   
              <p>En résumé, Bleach est bien plus qu'un simple manga pour moi. C'est une aventure épique qui a façonné ma passion pour les histoires narratives. Ses combats spectaculaires, ses personnages mémorables et son mélange habile d'action et d'émotion en font un incontournable pour tous les amateurs de manga.</p>
    `,
  stars: 5,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=black+butler", logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=black+butler", logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=black+butler+manga", logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" },
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/fr/series/GRDV5EN6Y/black-butler", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" },
  ],
  live: [],
  published: true,
  status: "en cours",
  volumes: 35,
  chapters: 200,
  year: 2006,
  author: "Yana Toboso",
},

// ASSASSINATION CLASSROOM
{
  slug: "assassination-classroom",
  pros: ["Concept brillant et original","Équilibre parfait entre comédie et émotion","Korosensei, l'un des meilleurs personnages du shōnen"],
  cons: ["Certains élèves restent peu développés","Quelques arcs mineurs dispensables","Fin prévisible malgré la qualité d'exécution"],
  addedAt: "2025-09-19",
  title: "Assassination Classroom",
  category: "manga",
  tags: "Comédie · École · Action",
  cover: "/assassination-classroom.jpg",
  synopsis: `La classe 3-E reçoit une mission folle : tuer leur professeur Koro-sensei, une créature surpuissante qui menace de détruire la Terre… après les avoir “bien formés”. Entre cours délirants, entraînement et amitié, les élèves vont se dépasser.`,
  reviewHtml: `
    <p>"Assassination Classroom" est un manga qui m'a fait passer d'excellents moments. L'intrigue tourne autour d'une classe de collégiens qui doivent assassiner leur professeur, Koro-sensei, une créature mystérieuse dotée de pouvoirs incroyables. Dès le départ, le concept est unique et promet des situations comiques, mais il y a aussi des moments plus profonds qui ajoutent de la profondeur à l'histoire.</p>

              <p>Ce qui m'a marqué avec "Assassination Classroom", c'est son équilibre entre humour et émotion. Les interactions entre Koro-sensei et ses élèves sont hilarantes, avec des gags visuels, des jeux de mots et des situations absurdes. Koro-sensei, malgré son rôle de cible à assassiner, se révèle être un professeur exceptionnel qui se soucie réellement du bien-être de ses élèves. Cette dualité crée un mélange parfait de comédie et de moments touchants.</p>

              <p>Les élèves eux-mêmes sont des personnages attachants, chacun avec ses propres défis et aspirations. Les différentes tentatives d'assassinat, souvent ratées de manière comique, montrent à quel point Koro-sensei est puissant mais aussi combien il est dévoué à l'enseignement. Cette dynamique entre la comédie et le développement des personnages rend "Assassination Classroom" vraiment spécial.</p>

              <p>Au fil des épisodes, j'ai été surpris par la profondeur de certaines histoires et les leçons de vie qui émergent de ce contexte inhabituel. Les thèmes abordés, comme le travail d'équipe, la résilience et le dépassement de soi, donnent au manga une dimension éducative qui complète parfaitement le côté comique.</p>

              <p>Le seul point négatif pour moi, c'est qu'il n'y a pas plus de chapitres. J'aurais aimé passer plus de temps avec ces personnages et voir d'autres tentatives d'assassinat aussi inventives que drôles. C'est un manga qui vous fait rire, mais qui sait aussi vous émouvoir, ce qui le rend très agréable à lire.</p>

              <p>Je donne à "Assassination Classroom" une note de 5 sur 5 pour son humour, ses personnages uniques et la capacité de mélanger comédie et émotion. Si vous aimez les mangas qui vous font rire tout en vous touchant, c'est un incontournable. Le seul regret est que l'aventure se termine trop tôt.</p>
`,
  stars: 5,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=assassination+classroom", logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=assassination+classroom", logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=assassination+classroom", logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" },
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/fr/series/GY8DV5N1Y/assassination-classroom", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" },
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 21,
  chapters: 185,
  year: 2012,
  author: "Yūsei Matsui",
},
{
  slug: "kuroko-no-basket",
  pros: ["Matchs intenses et bien rythmés","Galerie de personnages mémorables","Spécialités de jeu inventives et spectaculaires"],
  cons: ["Pouvoirs trop surhumains pour un sport réaliste","Adversaires principaux parfois trop puissants","Peu de défaites pour les protagonistes"],
  addedAt: "2025-09-21",
  title: "Kuroko no Basket",
  category: "manga",
  tags: "Sport · Basket · Lycée · Shônen · Compétition",
  cover: "/kuroko-no-basket.jpg",
  synopsis: `À Seirin, l’arrivée du discret Kuroko Tetsuya et du surdoué Kagami Taiga bouscule la hiérarchie du basket lycéen. Tandis que l’ombre et la lumière unissent leurs forces, l’équipe vise le sommet du championnat. Face à la légendaire “Génération des Miracles”, chaque match devient un duel de styles et de mentalités. Un shônen sportif rythmé, où la stratégie compte autant que l’exploit.`,
  reviewHtml: `<p> Kuroko’s Basket est un manga qui a capturé l'esprit du basket-ball d'une manière que peu d'autres séries ont réussi à faire. Ayant pratiqué le basket pendant 12 ans, je trouve que ce manga réussit à allier action intense, stratégie sportive et développement de personnages avec une aisance incroyable. L'histoire suit Kuroko Tetsuya, un joueur apparemment discret mais doté d'une technique exceptionnelle, et Kagami Taiga, son coéquipier talentueux et passionné. Ensemble, ils visent à conquérir le championnat de basket-ball lycéen.
 </p>
<p> Ce qui rend Kuroko’s Basket si captivant, c'est sa capacité à créer des matchs pleins d'adrénaline. Les rencontres entre les équipes sont épiques, avec des stratégies ingénieuses et des techniques spéciales qui ajoutent une touche de fantaisie au basket. En tant que joueur, j'ai apprécié la manière dont le manga dépeint les différentes approches du jeu, des tactiques défensives à l'offensive spectaculaire. </p>
<p> Les personnages de Kuroko’s Basket sont un autre point fort. Kuroko, avec son style de jeu discret mais efficace, est un protagoniste unique dans le monde des mangas de sport. Kagami, avec sa force brute et sa détermination, apporte un équilibre parfait. Les autres membres de l'équipe Seirin, ainsi que les rivaux issus de la "Génération des Miracles", ont chacun leur propre caractère et style de jeu, ce qui rend chaque match passionnant à suivre. </p>
<p>L'intensité des matchs est palpable, et le manga parvient à capturer l'excitation du basket-ball. Les moments de victoire, de défaite et de camaraderie entre les joueurs ajoutent une profondeur émotionnelle qui fait écho à ma propre expérience en tant que joueur. On ressent la pression, la joie des victoires et la déception des défaites, ce qui rend chaque chapitre mémorable. </p>
<p>Je donne à Kuroko’s Basket une note de 5 sur 5 pour son approche exceptionnelle du basket-ball et sa capacité à maintenir une énergie élevée tout au long de la série. Le mélange d'action sportive, de développement de personnages et de rivalités féroces crée une expérience de lecture incroyable. Si vous aimez le basket et recherchez un manga qui capte l'essence de ce sport avec une touche d'originalité, "Kuroko no Basket" est un incontournable. Pour moi, c'est l'un des meilleurs mangas de sport, et je le recommande vivement à quiconque aime le basket ou cherche une série pleine d'action et de passion. </p>`,
  stars: 5,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/collections/tomes-kurokos-basket?_pos=2&_psq=Kuroko&_ss=e&_v=1.0", logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=kuroko+basket&SCat=0%211&sft=1&sa=1", logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=kuroko%27s+basket+tome&ref=nb_sb_noss", logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/fr/series/G62P48X56/kurokos-basketball", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 30,
  chapters: 276,
  year: 2008,
  author: "Tadatoshi Fujimaki",
},
{
  slug: "kill-the-hero",
  pros: ["Protagoniste froid et calculateur rafraîchissant","Boucle de régression bien exploitée","Tension maintenue tout au long"],
  cons: ["Manque d'humour et de légèreté","Personnages secondaires effacés","Prévisible dans sa structure"],
  addedAt: "2025-09-22",
  title: "Kill the Hero",
  category: "manhwa",
  tags: "Action · Donjons · Régression · Revanche · Thriller",
  cover: "/kill-the-hero.png",
  synopsis: `Dans un monde envahi par des donjons et des guildes sans scrupules, un joueur revient au point de départ après une trahison. Fort d’une connaissance du futur et d’une détermination froide, il grimpe l’échelle du pouvoir. Combats nerveux, intrigues de coulisses et coups de poker rythment sa quête. Une chasse à l’“héros” qui brouille les lignes entre justice et vengeance.`,
  reviewHtml: `<p> Kill the Hero m'a happé dès les premières pages avec son intrigue palpitante et ses personnages captivants. Plonger dans ce monde où les héros et les monstres s'affrontent dans une lutte sans merci a été une expérience époustouflante du début à la fin. </p>
<p> Ce qui rend Kill the Hero si unique, c'est son rythme effréné et son action sans répit. Chaque chapitre est une montagne russe d'émotions, avec des combats exaltants et des retournements de situation qui m'ont maintenu en haleine à chaque instant. </p>
<p> Les personnages de Kill the Hero sont un véritable atout. Du héros charismatique aux antagonistes redoutables, chacun apporte une dimension intrigante à l'histoire. Leurs motivations complexes et leurs interactions fascinantes ajoutent une profondeur inattendue à cette aventure déjà captivante. </p>
<p> Cependant, malgré tout son dynamisme, je dois reconnaître que par moments, l'évolution du héros semble un peu trop linéaire. Certaines victoires semblent venir trop facilement, ce qui peut parfois atténuer le suspense et la tension. </p>
<p> Cela dit, Kill the Hero reste une lecture incroyablement gratifiante. Son cocktail d'action intense, de mystères captivants et de personnages inoubliables en fait un manhwa à ne pas manquer pour tous les amateurs de thrillers et d'aventures épiques. Avec un peu plus de complexité dans le développement du héros, cette série pourrait aisément se hisser parmi les meilleurs du genre. </p>`,
  stars: 4,
  shops: [],
  streaming: [],
  live: [],
  published: true,
  status: "terminé",
  volumes: 9,
  chapters: 152,
  year: 2019,
  author: "D-Dart",
}, 
 {
  slug: "hunter-x-hunter",
  pros: ["Système de pouvoirs Nen, le plus inventif du genre","Arcs variés et tous marquants","Protagonistes vraiment originaux"],
  cons: ["Hiatus interminables depuis des années","Certains arcs très longs et denses","Fin potentiellement jamais écrite"],
  addedAt: "2025-09-24",
  reviewHtml: `<p>Yoshihiro Togashi a créé avec Hunter x Hunter quelque chose de paradoxal : une série incomplète qui reste l'une des plus abouties intellectuellement du shōnen. Malgré des hiatus qui s'étirent sur des années, malgré une fin qui n'arrive pas, chaque arc de HxH est une démonstration de ce que peut atteindre le manga quand un auteur refuse tous les compromis.</p>
<p>Le système de pouvoirs Nen est le plus ingénieux du genre. Pas de simples attaques numérotées ici, chaque utilisateur développe un Nen unique qui reflète sa personnalité, ses peurs, ses désirs. Les combats de HxH sont des joutes mentales autant que physiques, et certains affrontements se résolvent en plusieurs chapitres de déduction pure. L'arc Yorknew et l'arc Chimaera Ant sont parmi les sommets absolus du shōnen.</p>
<p>Gon et Killua forment l'un des meilleurs duos de l'histoire du manga, deux garçons liés par une amitié sincère mais que tout oppose, et dont les chemins finissent par diverger de façon déchirante. Leur relation est le cœur émotionnel de la série.</p>
<p>La seule vraie ombre au tableau : les hiatus. Togashi souffre de problèmes de dos chroniques qui rendent la publication extrêmement irrégulière. Commencer HxH c'est accepter d'attendre. Mais ce qu'il y a à lire vaut chaque minute d'attente.</p>`,
  title: "Hunter × Hunter",
  category: "manga",
  tags: "Action · Aventure · Shōnen",
  cover: "/hunter-x-hunter.jpg", // mets l'image dans /public/hunter-x-hunter.jpg
  synopsis: `Dans un monde où les Hunters sont des aventuriers d’élite prêts à tout, 
Gon Freecss, un jeune garçon de 12 ans, décide de passer l’examen Hunter afin de retrouver son père disparu, 
lui-même Hunter légendaire. Au fil de son périple, il se lie d’amitié avec Kirua, Léolio et Kurapika et affronte des épreuves 
toujours plus dangereuses, des combats mortels et des ennemis redoutables pour progresser et découvrir la vérité.`,
  // optionnel : si tu as des liens d’achat ou streaming
  shops: [
    {
      name: "Amazon",
      url: "https://www.amazon.fr/dp/B00G8Q3WVG",
      logo: "/logos/amazon.svg" // exemple
    }
  ],
  streaming: [
    {
      name: "Crunchyroll",
      url: "https://www.crunchyroll.com/fr/series/GY3VKX1MR/hunter-x-hunter",
      logo: "/logos/crunchyroll.svg"
    }
  ],
  live: [],
  published: true,
  status: "pause",
  volumes: 37,
  chapters: 400,
  year: 1998,
  author: "Yoshihiro Togashi",
},
{
  slug: "berserk",
  pros: ["Chef-d'œuvre absolu du dark fantasy","Artwork de Miura, niveau hors norme","Personnage de Guts, l'un des meilleurs de l'histoire du manga"],
  cons: ["Hiatus très fréquents du vivant de l'auteur","Histoire inachevée suite au décès de Miura","Extrêmement violent et sombre"],
  addedAt: "2025-09-26",
  title: "Berserk",
  category: "manga",
  tags: "Dark Fantasy · Tragédie · Épée · Destin",
  cover: "/berserk.jpg",
  synopsis: "Guts, mercenaire marqué par la fatalité, traverse un monde ravagé par monstres et trahisons. Sa quête de vengeance croise celle d’un empire du mal. L’espoir subsiste au fil du fer et de la camaraderie. Une odyssée violente et mythique.",
  reviewHtml: `<p>Il y a des œuvres qui transcendent leur médium. Berserk est de celles-là. Kentaro Miura a consacré plus de trente ans de sa vie à bâtir l'un des univers les plus sombres, les plus beaux et les plus humains de toute la bande dessinée mondiale, et son décès en 2021 a laissé une cicatrice dans le cœur de millions de lecteurs, comme un écho cruel au destin de son héros.</p><p>Guts, le guerrier à l'épée démesurée, est bien plus qu'un personnage d'action. C'est une étude sur la souffrance, la résistance, et la question fondamentale de savoir si un homme brisé peut encore choisir de vivre. L'Arc d'Or reste l'une des meilleures introductions de l'histoire du manga : une amitié, une trahison, une chute. Tout ce qui suit en découle.</p><p>L'artwork de Miura est hors catégorie. Ses doubles pages de bataille, ses architectures gothiques, ses démons d'un détail hallucinant, aucun autre mangaka n'a atteint ce niveau de maîtrise technique. Chaque planche est une peinture.</p><p>Berserk est violent, sombre, parfois éprouvant. Mais c'est une lecture nécessaire, un monument qui rappelle pourquoi le manga peut être un art majeur. L'histoire reste inachevée, et ce manque fait mal. Mais ce qui existe déjà suffit à en faire un chef-d'œuvre absolu.</p>`,
  stars: 5,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Berserk", logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=berserk+manga", logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=berserk+manga", logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/fr/search?q=Berserk", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" },
    { name: "Netflix",     url: "https://www.netflix.com/search?q=Berserk",        logo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940" }
  ],
  live: [],
  published: true,
  status: "en cours",
  volumes: 42,
  chapters: 374,
  year: 1989,
  author: "Kentaro Miura",
},
{
  slug: "black-clover",
  pros: ["Énergie et enthousiasme communicatifs","Système de magie créatif et varié","Progression constante en qualité"],
  cons: ["Début générique et lent","Asta criard au départ","Trop de personnages difficiles à suivre"],
  addedAt: "2025-09-28",
  title: "Black Clover",
  category: "manga",
  tags: "Shōnen · Magie · Rivalité · Dépassement",
  cover: "/black-clover.png",
  synopsis: "Né sans magie, Asta rêve pourtant de devenir Empereur-Mage. Avec son grimoire anti-magie et la rivalité de Yuno, il défie un monde qui le croit impuissant. Missions périlleuses et complots démoniaques s’enchaînent. La persévérance devient son arme absolue.",
  reviewHtml: `<p>Black Clover assume pleinement d'être un shōnen classique, et le fait avec une énergie et une conviction qui finissent par emporter l'adhésion. Yūki Tabata n'invente rien, mais il exécute la formule avec un soin et une progression constante qui ont conquis des millions de lecteurs.</p><p>Asta est né sans magie dans un monde où tout le monde en a. Sa compensation : un corps physique extraordinaire et une volonté absolue de devenir le Roi Mage malgré tout. Ce prémisse classique est porté par un protagoniste dont l'enthousiasme bruyant cache une loyauté et une droiture sincères, irritant au départ, attachant sur la durée.</p><p>Black Clover brille dans ses arcs de tournoi et de bataille à grande échelle. Le système de magie, chaque utilisateur a un attribut unique, crée des affrontements variés et créatifs. Les chevaliers magiques des Taureaux Noirs forment une galerie de personnages secondaires solides, dont plusieurs volent régulièrement la vedette à Asta.</p><p>La série s'améliore significativement au fil des arcs, les premiers tomes sont les plus génériques, et la qualité monte à mesure que Tabata développe son world-building. Un shōnen d'action qui récompense la patience.</p>`,
  stars: 3,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Black+Clover", logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=black+clover+tome", logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=black+clover+tome",        logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/fr/search?q=Black%20Clover", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" },
    { name: "Netflix",     url: "https://www.netflix.com/search?q=Black%20Clover",        logo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940" }
  ],
  live: [],
  published: true,
  status: "en cours",
  volumes: 37,
  chapters: 375,
  year: 2015,
  author: "Yūki Tabata",
},
{
  slug: "blue-exorcist",
  pros: ["Univers riche mêlant démonologie et quotidien","Duo Rin/Yukio bien écrit","Ambiance scolaire originale"],
  cons: ["Publication très irrégulière","Certains arcs sans tension réelle","Résolution parfois bâclée"],
  addedAt: "2025-09-30",
  title: "Blue Exorcist",
  category: "manga",
  tags: "Exorcisme · Démon · Lycée · Action",
  cover: "/blue-exorcist.png",
  synopsis: "Rin découvre qu’il est le fils de Satan. Décidé à lutter contre son héritage, il rejoint une académie d’exorcistes. Entre fraternité et tentations, il forge sa propre voie. Le feu bleu n’est pas une fatalité.",
  reviewHtml: `<p>Blue Exorcist pose une question intéressante : que se passe-t-il quand le fils de Satan veut devenir exorciste pour combattre les démons ? Kazue Katō construit autour de cette prémisse un manga d'action-aventure au monde riche, ancré dans une mythologie démoniaque et chrétienne revisitée avec originalité.</p><p>Rin Okumura et son frère Yukio forment un duo central efficace, l'un impulsif et puissant mais incontrôlable, l'autre studieux et compétent mais portant des fardeaux cachés. Leur relation fraternelle, compliquée par leurs natures si différentes et par les secrets que Yukio dissimule, est le fil émotionnel le plus intéressant de la série.</p><p>L'Académie True Cross et ses enseignants exorcistes constituent un cadre scolaire original, l'aspect formation des élèves donne une structure aux premiers arcs et permet d'introduire une galerie de personnages secondaires attachants. Shiemi, Bon, Shura, chacun apporte quelque chose à la dynamique du groupe.</p><p>Blue Exorcist souffre d'une publication irrégulière et d'arcs parfois inégaux en qualité. Mais son univers riche et ses personnages bien écrits en font une série qui mérite d'être découverte par tout amateur de dark fantasy avec une touche scolaire.</p>`,
  stars: 3,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Blue+Exorcist", logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=blue+exorcist+tome", logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=blue+exorcist+tome",        logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/fr/search?q=Blue%20Exorcist", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" },
    { name: "Netflix",     url: "https://www.netflix.com/search?q=Blue%20Exorcist",        logo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940" }
  ],
  live: [],
  published: true,
  status: "en cours",
  volumes: 29,
  chapters: 145,
  year: 2009,
  author: "Kazue Kato",
},
{
  slug: "claymore",
  pros: ["Héroïnes complexes et mémorables","Atmosphère médiévale pesante et cohérente","Combats stratégiques et brutaux"],
  cons: ["Fin un peu abrupte","Personnages masculins peu développés","Rythme parfois difficile en milieu de série"],
  addedAt: "2025-10-02",
  title: "Claymore",
  category: "manga",
  tags: "Dark Fantasy · Démons · Épée · Vengeance",
  cover: "/claymore.png",
  synopsis: "Des guerrières mi-humaines mi-démones traquent des créatures voraces. Clare poursuit sa vendetta dans un monde hostile et hiérarchisé. Les combats laissent place à des choix cruels. La frontière entre monstre et humain s’effrite.",
  reviewHtml: `<p>Claymore est un manga de dark fantasy médiéval qui mérite bien plus de reconnaissance que celle qu'il a reçue. Norihiro Yagi a construit une œuvre dense, sombre, et émotionnellement intense autour d'un concept fort : des guerrières mi-humaines mi-monstres, créées pour combattre les Yoma, et condamnées à une existence entre deux mondes.</p><p>Clare, la protagoniste, est une héroïne atypique, introvertie, froide, motivée par une vengeance personnelle plutôt que par des idéaux nobles. Son évolution au fil de la série, notamment sa relation avec Teresa dont le sacrifice l'a façonnée, est l'un des arcs émotionnels les plus réussis du manga d'action. Les Claymore elles-mêmes, chacune numérotée selon sa puissance, forment une galerie de personnages féminins forts et complexes, rare dans le genre.</p><p>L'artwork de Yagi crée une atmosphère médiévale pesante et cohérente. Les combats sont brutaux et lisibles, et la montée en puissance des menaces, des Yoma aux Abysses, est bien dosée. Les arcs de la Guerre du Nord et du dénouement final comptent parmi les meilleurs du manga d'action dark fantasy.</p><p>Claymore est une série exigeante qui récompense la patience. Un classique sous-estimé.</p>`,
  stars: 3,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Claymore", logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=claymore+tome",  logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=claymore+manga",          logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/fr/search?q=Claymore", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 27,
  chapters: 159,
  year: 2001,
  author: "Norihiro Yagi",
},
{
  slug: "d-gray-man",
  pros: ["Univers steampunk gothique unique","Allen Walker attachant et complexe","Mythologie dense et intéressante"],
  cons: ["Hiatus très fréquents depuis des années","Rythme haché par les interruptions","Certains arcs incomplets"],
  addedAt: "2025-10-03",
  title: "D.Gray-man",
  category: "manga",
  tags: "Surnaturel · Organisation · Tragédie · Gothique",
  cover: "/d-gray-man.jpg",
  synopsis: "Allen Walker combat aux côtés d’exorcistes contre les Akuma créés par le Comte Millénaire. L’Innocence, arme divine, épuise autant qu’elle sauve. Les secrets de l’Ordre s’assombrissent. Le salut a un coût.",
  reviewHtml: `<p>D.Gray-man est l'une des séries les plus visuellement inventives du shōnen des années 2000. Katsura Hoshino a créé un univers steampunk gothique où des exorcistes combattent les Akuma, des machines d'âmes corrompues, avec des armes appelées Innocence. L'esthétique est immédiatement reconnaissable et n'a pas vieilli.</p><p>Allen Walker est un protagoniste attachant dont la malédiction, voir les âmes piégées dans les Akuma, lui donne une sensibilité rare parmi les héros de shōnen. Sa relation contradictoire avec le Comte Millénaire et avec Road Camelot ajoute une profondeur mythologique progressive. Kanda, Lenalee, et Lavi forment une équipe complémentaire et bien développée.</p><p>La série souffre d'une publication extrêmement irrégulière, des hiatus parfois longs de plusieurs années, qui a fragmenté son lectorat. Mais le matériel existant, notamment les révélations sur la véritable nature d'Allen, montre une série qui avait des ambitions narratives réelles et originales.</p><p>Pour les amateurs d'esthétique gothic-steampunk et de shōnen d'action avec une mythologie dense, D.Gray-man reste une expérience unique.</p>`,
  stars: 3,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=D.Gray-man", logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=d+gray+man+tome",  logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=D.Gray-man+tome",           logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/fr/search?q=D.Gray-man", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" }
  ],
  live: [],
  published: true,
  status: "pause",
  volumes: 27,
  chapters: 242,
  year: 2004,
  author: "Katsura Hoshino",
},
{
  slug: "death-note",
  pros: ["Duel psychologique haletant","Light Yagami, antagoniste iconique","Rythme parfait sur 12 tomes","Réflexion sur la justice et le pouvoir"],
  cons: ["Deuxième partie en retrait après un tournant majeur","Quelques facilités scénaristiques vers la fin"],
  addedAt: "2025-10-05",
  title: "Death Note",
  category: "manga",
  tags: "Thriller · Surnaturel · Psychologie · Duel cérébral",
  cover: "/death-note.jpg",
  synopsis: "Light Yagami découvre un cahier permettant de tuer quiconque dont on écrit le nom. Il se lance dans une croisade pour « purifier » le monde, attirant l’attention du détective L. Un duel d’esprits s’engage où chaque geste peut trahir l’autre. Le pouvoir absolu corrompt ses convictions.",
  reviewHtml: `<p>Death Note est l'un des rares mangas à avoir transcendé son propre genre. Ce n'est pas une histoire de combat ni d'aventure, c'est un duel psychologique pur entre deux génies, et chaque chapitre est une partie d'échecs où les règles changent constamment. Tsugumi Ohba et Takeshi Obata ont créé quelque chose d'unique dans le paysage du manga.</p><p>Light Yagami est l'un des antagonistes les plus fascinants de toute la fiction. Brillant, narcissique, convaincu d'agir pour le bien de l'humanité, sa descente progressive dans la folie est terrifiante précisément parce qu'elle est logique. Face à lui, L est son miroir parfait : aussi intelligent, aussi tordu, mais du bon côté. Leur confrontation occupe la majeure partie de la série et ne faiblit jamais.</p><p>Les 12 premiers tomes sont d'une tenue narrative exceptionnelle. Le rythme est parfait, les twists arrivent sans prévenir, et la tension ne retombe jamais. Death Note se lit en apnée, chapitre après chapitre, impossible à poser.</p><p>La deuxième partie, après un tournant majeur à mi-série, est globalement jugée inférieure. Les nouveaux personnages ne retrouvent pas le niveau de L, et la conclusion divise. Mais les deux tiers de Death Note suffisent à en faire un chef-d'œuvre du thriller manga.</p>`,
  stars: 5,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Death+Note", logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=death+note+tome",  logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=death+note+tome",           logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/fr/search?q=Death%20Note", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" },
    { name: "Netflix",     url: "https://www.netflix.com/search?q=Death%20Note",        logo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 12,
  chapters: 108,
  year: 2003,
  author: "Tsugumi Ohba",
},
{
  slug: "dr-stone",
  pros: ["Science expliquée de façon ludique et accessible","Concept de reconstruction civilisationnelle unique","Senku, héros intellectuel rafraîchissant"],
  cons: ["Tension dramatique limitée par l'invincibilité du duo","Personnages secondaires peu développés","Arcs tardifs moins inspirés"],
  addedAt: "2025-10-07",
  title: "Dr. Stone",
  category: "manga",
  tags: "Science · Survie · Post-apo · Aventure",
  cover: "/dr-stone.jpg",
  synopsis: "L’humanité est pétrifiée pendant des millénaires. À son réveil, Senku, prodige de la science, veut rebâtir la civilisation avec des moyens rudimentaires. Entre inventions géniales et alliances fragiles, une nouvelle ère commence.",
  reviewHtml: `<p>Dr. Stone est une lettre d'amour à la science. Riichiro Inagaki et Boichi ont créé un shōnen où l'intelligence et la connaissance scientifique sont les véritables superpuissances, et ça marche étonnamment bien.</p><p>L'humanité entière est pétrifiée pendant 3700 ans. Senku Ishigami se réveille avec un seul objectif : reconstruire la civilisation depuis zéro, en utilisant uniquement la science. Chaque arc est une démonstration ludique de chimie, physique, biologie ou ingénierie, et Inagaki parvient à rendre fascinant le processus de recréer du savon, de la nourriture ou de l'électricité.</p><p>Ce qui distingue Dr. Stone c'est son optimisme. Dans un genre souvent dominé par la survie sombre et la violence, c'est une série qui dit que la connaissance humaine peut tout surmonter. Senku n'est pas un héros qui frappe fort, c'est un héros qui réfléchit vite, et ses victoires intellectuelles sont aussi satisfaisantes que n'importe quel combat.</p><p>Les derniers arcs sont légèrement moins inspirés que le début, et certains personnages secondaires restent peu développés. Mais Dr. Stone est une série originale, positive, et éducative sans jamais être ennuyeuse, un tour de force.</p>`,
  stars: 4,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Dr.+Stone", logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=dr+stone+tome",   logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=dr+stone+tome",            logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/fr/search?q=Dr.%20Stone", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 26,
  chapters: 232,
  year: 2017,
  author: "Riichiro Inagaki",
},
{
  slug: "eleceed",
  pros: ["Duo Jiwoo/Kayden irrésistible","Humour constant et bien dosé","Action dynamique et lisible"],
  cons: ["Worldbuilding encore superficiel","Antagonistes peu mémorables","Certains arcs de tournoi répétitifs"],
  addedAt: "2025-10-09",
  title: "Eleceed",
  category: "manhwa",
  tags: "Action · Pouvoirs · Comédie · Mentor",
  cover: "/eleceed.jpg",
  synopsis: "Jiwoo, au cœur doux et rapide comme l’éclair, rencontre Kayden, maître puissant coincé en chat. Ensemble, ils naviguent le monde secret des éveillés. Amitiés, entraînements et affrontements s’enchaînent. La gentillesse peut frapper fort.",
  reviewHtml: `<p>Eleceed est l'une des meilleures surprises du manhwa récent. Le duo Son Jae-ho et Zhena a créé une série de super-héros coréenne qui allie action, comédie et cœur avec une aisance rare. Le concept, un garçon aux réflexes surhumains qui recueille un chat bedonnant qui est en réalité un puissant éveil, est délibérément absurde et pleinement assumé.</p><p>Kayden, emprisonné dans le corps d'un gros chat blanc, est l'un des personnages les plus drôles du manhwa contemporain. Sa frustration permanente, son orgueil blessé, et sa relation progressivement affectueuse avec Jiwoo créent une dynamique irrésistible. Les échanges entre les deux protagonistes portent la série autant que l'action.</p><p>Le système des Éveillés, individus aux capacités surnaturelles hiérarchisées, est bien construit, et les arcs de tournoi introduits progressivement montrent une série qui sait développer ses enjeux. Le dessin de Zhena est expressif et dynamique, particulièrement efficace dans les séquences comiques.</p><p>Eleceed est une lecture légère et joyeuse qui ne sacrifie pas la qualité pour la simplicité. Idéal pour découvrir le manhwa d'action sans se prendre la tête.</p>`,
  stars: 4,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Eleceed",  logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=eleceed",         logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=eleceed",     logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [],
  live: [],
  published: true,
  status: "en cours",
  volumes: 10,
  chapters: 310,
  year: 2019,
  author: "Son Jeho",
},
{
  slug: "fairy-tail",
  pros: ["Ambiance chaleureuse et familiale unique","Personnages attachants et variés","Moments d'amitié sincèrement émouvants"],
  cons: ["Enjeux limités par l'absence de vraies morts","Résolutions trop souvent émotionnelles","Structure répétitive arc après arc"],
  addedAt: "2025-10-11",
  title: "Fairy Tail",
  category: "manga",
  tags: "Shōnen · Magie · Guilde · Aventure",
  cover: "/fairy-tail.jpg",
  synopsis: "Lucy rejoint Fairy Tail et forme un duo avec Natsu, chasseur de dragons au tempérament brûlant. La guilde enchaîne missions, tournois et guerres de factions. Entre rivalités et solidarité, chacun protège sa famille choisie.",
  reviewHtml: `<p>Fairy Tail est le manga de la bonne humeur. Hiro Mashima a créé une série qui ne cherche pas à surprendre ni à bouleverser, elle veut juste divertir, réchauffer le cœur, et célébrer l'amitié et la famille choisie. Dans ce registre très précis, elle réussit avec une constance remarquable sur 63 volumes.</p><p>La guilde Fairy Tail est le vrai protagoniste de la série, une famille dysfonctionnelle et bruyante dont chaque membre est attachant à sa façon. Natsu, Lucy, Erza, Gray, Wendy, Happy, chacun a son moment de gloire, ses faiblesses, et sa contribution unique aux aventures du groupe. L'alchimie entre ces personnages est la force principale de la série.</p><p>Mashima excelle dans les moments de camaraderie, les retournements émotionnels bien placés, et les combats au sein desquels les personnages trouvent une puissance dans leurs liens plutôt que dans leur entraînement solitaire. La magie des nakama est poussée à son maximum ici.</p><p>Les reproches sont connus : la mort n'existe pratiquement pas dans Fairy Tail, ce qui diminue les enjeux. Certains arcs se ressemblent dans leur structure. Et la résolution de certains combats par des power-ups émotionnels peut sembler facile. Mais pour un manga de pur plaisir de lecture sans prise de tête, Fairy Tail est imbattable.</p>`,
  stars: 3,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Fairy+Tail",  logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=fairy+tail+tome",  logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=fairy+tail+tome",           logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/fr/search?q=Fairy%20Tail", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 63,
  chapters: 545,
  year: 2006,
  author: "Hiro Mashima",
},
{
  slug: "fire-force",
  pros: ["Univers pyrokinétique original et cohérent","Artwork spectaculaire d'Ohkubo","Mythologie progressive ambitieuse"],
  cons: ["Certains arcs intermédiaires en retrait","Quelques résolutions précipitées","Fan service parfois mal intégré"],
  addedAt: "2025-10-13",
  title: "Fire Force",
  category: "manga",
  tags: "Action · Pompiers · Surnaturel · Enquête",
  cover: "/fire-force.jpg",
  synopsis: "Des combustions humaines spontanées transforment des victimes en infernaux. Shinra, pompier aux pieds flamboyants, combat ces fléaux tout en cherchant la vérité sur son passé. Les brigades s’affrontent sur fond de complot religieux.",
  reviewHtml: `<p>Fire Force est la deuxième grande série d'Atsushi Ohkubo après Soul Eater, et elle porte sa signature visuelle immédiatement reconnaissable. L'univers, un Tokyo futur où des êtres humains s'enflamment spontanément et deviennent des démons de feu combattus par des pompiers aux pouvoirs pyrokinétiques, est l'un des plus originaux du shōnen moderne.</p><p>Shinra Kusakabe, avec son sourire nerveux perpétuel et ses pieds qui s'embrasent pour voler, est un protagoniste attachant dont le mystère familial sert de fil conducteur à toute la série. La Brigade 8 qu'il rejoint est une galerie de personnages aux personnalités tranchées, Arthur le chevalier délirant, Maki la musclée sensible, Hinawa le froid stratège.</p><p>Fire Force brille dans ses combats, Ohkubo maîtrise la dynamique de l'action comme personne, et dans sa mythologie progressive sur l'origine des Infernaux et la vérité sur le monde. Les révélations des arcs tardifs récompensent les lecteurs patients avec un world-building ambitieux.</p><p>Certains arcs intermédiaires sont plus inégaux, et quelques résolutions semblent précipitées. Mais Fire Force est une série ambitieuse et visuellement spectaculaire qui confirme le talent d'Ohkubo.</p>`,
  stars: 3,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Fire+Force",  logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=fire+force+tome", logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=fire+force+tome",           logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/fr/search?q=Fire%20Force", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 34,
  chapters: 304,
  year: 2015,
  author: "Atsushi Ohkubo",
},
{
  slug: "fullmetal-alchemist",
  pros: ["Scénario sans faille du début à la fin","Duo Edward/Alphonse attachant","Thèmes profonds, deuil, responsabilité, humanité"],
  cons: ["Rythme parfois rapide en fin de série","Certains antagonistes moins bien traités que d'autres"],
  addedAt: "2025-10-14",
  title: "Fullmetal Alchemist",
  category: "manga",
  tags: "Aventure · Alchimie · Frères · Guerre",
  cover: "/fullmetal-alchemist.png",
  synopsis: "Après une transmutation interdite, Edward et Alphonse perdent chacun une partie d’eux-mêmes. Pour récupérer leurs corps, ils cherchent la Pierre Philosophale. Leur quête révèle complots d’État, homonculus et vérités amères.",
  reviewHtml: `<p>Fullmetal Alchemist est l'exemple parfait d'un manga qui sait exactement ce qu'il veut raconter, et qui le raconte sans jamais dévier. En 27 tomes, Hiromu Arakawa construit un récit complet, cohérent, émotionnellement puissant, sans un seul arc de remplissage. C'est rare. C'est précieux.</p><p>Edward et Alphonse Elric ont brisé la loi fondamentale de l'alchimie en tentant de ressusciter leur mère. Le prix à payer : le bras et la jambe d'Edward, et le corps entier d'Alphonse, son âme scellée dans une armure de métal. Leur quête entraîne dans une conspiration qui menace tout un pays.</p><p>Ce qui distingue FMA c'est l'équilibre parfait entre action et émotion, humour et gravité, world-building et personnages. Les thèmes, le deuil, la responsabilité, le sacrifice, la famille, sont traités avec une maturité rare dans le shōnen. La conclusion est un modèle pour toute série longue.</p><p>FMA est un chef-d'œuvre sans défaut majeur. La meilleure introduction possible au manga pour quelqu'un qui n'a encore rien lu.</p>`,
  stars: 5,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Fullmetal+Alchemist",  logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=fullmetal+alchemist+tome",  logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=fullmetal+alchemist+tome",         logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/fr/search?q=Fullmetal%20Alchemist", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" },
    { name: "Netflix",     url: "https://www.netflix.com/search?q=Fullmetal%20Alchemist",        logo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 27,
  chapters: 116,
  year: 2001,
  author: "Hiromu Arakawa",
},
{
  slug: "gintama",
  pros: ["Humour le plus inventif du manga","Arcs sérieux d'une intensité rare","Gintoki, personnage d'une profondeur inattendue"],
  cons: ["Début très lent et décousu","Nécessite une connaissance de la culture japonaise","Difficile à recommander sans connaître le contexte"],
  addedAt: "2025-10-16",
  title: "Gintama",
  category: "manga",
  tags: "Comédie · Sci-fi · Parodie · Samouraï",
  cover: "/gintama.jpg",
  synopsis: "Dans un Edo envahi par des aliens, Gintoki, samouraï décalé, accepte tous les petits boulots. Parodies méta, émotions sincères et combats sérieux cohabitent. L’absurde devient un art.",
  reviewHtml: `<p>Gintama est impossible à résumer à quelqu'un qui ne l'a pas lu. C'est une parodie de manga de samouraïs qui se déroule dans un Japon d'Edo envahi par des aliens, avec un héros paresseux qui fait des petits boulots pour payer le loyer, et qui est aussi l'un des combattants les plus puissants de l'univers. Ça n'a aucun sens. C'est génial.</p><p>Hideaki Sorachi a créé une série qui peut passer d'un arc comique absurde à un arc dramatique déchirant d'un chapitre à l'autre, et les deux fonctionnent parfaitement. Les arcs sérieux de Gintama sont parmi les plus intenses du shōnen. Mais c'est l'humour qui rend la série unique : les parodies, les références, les gags meta qui brisent le quatrième mur, les moments où les personnages commentent leur propre manga.</p><p>Gintoki Sakata est l'un des meilleurs personnages du manga, en apparence un adulte irresponsable qui mange des sucreries et lit des Jump, en réalité un ancien soldat brisé par la guerre qui cache une loyauté absolue envers ceux qu'il aime. Cette profondeur cachée derrière la comédie est la marque de fabrique de Gintama.</p><p>La seule difficulté : les premiers arcs sont lents à démarrer et l'humour peut sembler décousu. Mais ceux qui persistent découvrent l'une des expériences manga les plus complètes et les plus émouvantes qui soit.</p>`,
  stars: 4,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Gintama",  logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=gintama+manga",  logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=gintama+manga",         logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/fr/search?q=Gintama", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 77,
  chapters: 704,
  year: 2003,
  author: "Hideaki Sorachi",
},
{
  slug: "hells-paradise",
  pros: ["Seulement 13 tomes, très bien rythmé","Univers visuel sublime et original","Thèmes profonds traités avec cohérence"],
  cons: ["Contenu très violent et perturbant","Certains personnages secondaires peu exploités","Fin un peu rapide"],
  addedAt: "2025-10-18",
  title: "Hell’s Paradise",
  category: "manga",
  tags: "Dark Fantasy · Ninjas · Survival · Île maudite",
  cover: "/hells-paradise.png",
  synopsis: "Condamné à mort, Gabimaru se voit offrir la vie sauve s’il récupère un élixir d’immortalité sur une île létale. Assassins et samouraïs s’y affrontent au cœur d’une nature monstrueuse. Beauté et horreur s’entrelacent.",
  reviewHtml: `<p>Hell's Paradise : Jigokuraku est une série de 13 tomes qui prouve qu'un manga court bien maîtrisé vaut mieux qu'une longue saga qui s'étire. Yuji Kaku a créé une œuvre dense, graphiquement splendide, et thématiquement cohérente de la première à la dernière page.</p><p>Gabimaru le Creux, assassin ninja réputé invincible envoyé sur une île mystérieuse pour trouver l'Élixir d'immortalité, est un personnage dont la contradiction centrale est fascinante : un homme qui dit ne rien ressentir mais qui risque tout pour retrouver sa femme. Cette dissonance entre ce qu'il prétend être et ce qu'il est vraiment structure tout son arc.</p><p>L'île de Shinsenkyo est un environnement d'une créativité visuelle remarquable, une nature luxuriante et mortelle, des créatures hybrides entre bouddhisme et horreur, une esthétique qui rappelle les estampes japonaises revisitées par le gore. Kaku dessine avec une précision et un style qui font de chaque planche un plaisir visuel.</p><p>Les thèmes, la nature du paradis et de l'enfer, ce qui constitue l'humanité, le désir comme force vitale, sont explorés sans lourdeur à travers des personnages qui évoluent tous de façon credible. Une réussite complète.</p>`,
  stars: 4,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Hell%27s+Paradise",  logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=hell%27s+paradise+tome",  logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=hell%27s+paradise+tome",         logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/fr/search?q=Hell%27s%20Paradise", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" }
  ],
  live: []
},
{
  slug: "jojos-bizarre-adventure",
  pros: ["Chaque arc totalement différent et unique","Système de Stands, le plus créatif du genre","Style visuel iconique et inimitable"],
  cons: ["Style graphique déroutant pour les nouveaux lecteurs","Tons très différents entre les arcs","Accessible uniquement à un public averti"],
  addedAt: "2025-10-20",
  title: "JoJo’s Bizarre Adventure",
  category: "manga",
  tags: "Action · Fantastique · Saga · Style",
  cover: "/jojos-bizarre-adventure.jpg",
  synopsis: "Saga multigénérationnelle où les Joestar affrontent des forces occultes. Pouvoirs stylisés, poses iconiques et imagination débridée. Chaque partie réinvente la formule avec panache.",
  reviewHtml: `<p>JoJo's Bizarre Adventure est unique. Absolument unique. Hirohiko Araki publie cette saga depuis 1987, et elle continue encore aujourd'hui, chaque arc suit un membre différent de la famille Joestar à travers les époques, avec un style graphique en constante évolution qui n'ressemble à aucun autre manga.</p><p>Le système des Stands, des manifestations de l'âme prenant forme physique, chacune avec des pouvoirs uniques et souvent conceptuels, est l'une des idées les plus créatives du manga d'action. Les combats de JoJo ne reposent pas sur la force brute mais sur l'ingéniosité : utiliser le pouvoir de son Stand de façon inattendue, trouver la faille dans celui de l'ennemi. Chaque duel est un puzzle.</p><p>Chaque arc a son propre ton. Phantom Blood est gothique et sérieux. Battle Tendency est pulp et exubérant. Stardust Crusaders est un road trip. Diamond is Unbreakable est presque un slice-of-life de super-héros de quartier. Cette variété est une force, il y a un arc JoJo pour chaque goût.</p><p>Le style d'Araki, poses extravagantes, références à la mode haute couture, musique omniprésente, est soit une révélation soit un repoussoir. Mais ceux qui entrent dans l'univers JoJo n'en ressortent généralement pas.</p>`,
  stars: 4,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=JoJo",    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=jojo+manga",  logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=jojo+manga",           logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/fr/search?q=JoJo",  logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" },
    { name: "Netflix",     url: "https://www.netflix.com/search?q=JoJo",          logo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940" }
  ],
  live: [],
  published: true,
  status: "en cours",
  volumes: 131,
  chapters: 959,
  year: 1987,
  author: "Hirohiko Araki",
},
{
  slug: "made-in-abyss",
  pros: ["Univers unique et fascinant","Mélange de merveille enfantine et d'horreur adulte","Illustrations oniriques sublimes"],
  cons: ["Extrêmement sombre et éprouvant","Rythme de publication très lent","Contenu difficile à certains moments"],
  addedAt: "2025-10-22",
  title: "Made in Abyss",
  category: "manga",
  tags: "Aventure · Exploration · Mystère · Dark",
  cover: "/made-in-abyss.jpg",
  synopsis: "Riko descend dans l’Abysse pour retrouver sa mère légendaire, accompagnée de Reg, androïde amnésique. À mesure qu’ils plongent, la beauté cède au cauchemar. Les secrets enfouis exigent un tribut terrible.",
  reviewHtml: `<p>Made in Abyss est une expérience de lecture unique, et éprouvante. Akihito Tsukushi a créé un monde d'une beauté envoûtante et d'une cruauté absolue. Le résultat est une série qui fascine autant qu'elle dérange.</p><p>L'Abysse est un gouffre sans fond dont personne ne comprend l'origine. Plus on descend, plus les merveilles sont grandes, et plus les conséquences de la remontée sont terribles. Ce système de malédiction ascensionnelle est l'un des concepts les plus ingénieux du manga récent : chaque décision de descendre plus loin devient irréversible, et le lecteur le ressent physiquement.</p><p>Riko et Reg forment un duo attachant. Leur aventure dans les couches de l'Abysse alterne entre émerveillement et horreur, et c'est cette tension permanente qui rend la lecture addictive. Les illustrations oniriques sont sublimes.</p><p>Une mise en garde s'impose : Made in Abyss contient des scènes extrêmement dures. Ce n'est pas une lecture pour tout le monde. Mais pour ceux qui acceptent ce contrat, c'est l'un des univers les plus originaux du manga contemporain.</p>`,
  stars: 5,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Made+in+Abyss",  logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=made+in+abyss",    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=made+in+abyss+manga",   logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/fr/search?q=Made%20in%20Abyss", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" }
  ],
  live: [],
  published: true,
  status: "en cours",
  volumes: 13,
  chapters: 68,
  year: 2012,
  author: "Akihito Tsukushi",
},
{
  slug: "mashle",
  pros: ["Timing comique impeccable","Concept parodique bien exécuté","Personnages secondaires attachants"],
  cons: ["Peu de profondeur narrative","Formule répétitive sur la durée","Antagonistes peu mémorables"],
  addedAt: "2025-10-24",
  title: "Mashle",
  category: "manga",
  tags: "Comédie · Magie · Parodie · Action",
  cover: "/mashle.jpg",
  synopsis: "Dans un monde régi par la magie, Mash n’en possède aucune… mais des biceps en béton. Il entre dans une académie et résout tous les problèmes à la force brute. Les codes sont bousculés, les duels tournent à l’absurde.",
  reviewHtml: `<p>Mashle est une parodie de Harry Potter croisée avec One Punch Man, et cette combinaison absurde fonctionne remarquablement bien. Hajime Kōmoto a créé un gag manga d'action qui se moque des codes du shōnen magique tout en les utilisant avec une efficacité surprenante.</p><p>Mash Burnedead n'a aucun pouvoir magique dans un monde où la magie détermine la valeur d'une personne. Sa solution : des muscles. Des muscles impossibles. Il résout absolument tout avec des poings, des abdos, et une expression imperturbable face à des adversaires qui s'attendent à un duel de sorts. Le concept est simple et la série l'exploite jusqu'à la dernière goutte.</p><p>Ce qui élève Mashle au-dessus de la simple parodie c'est son timing comique impeccable et ses personnages secondaires attachants. Lance Crown, le rival pompeux qui finit par devenir un allié fiable, est l'un des meilleurs exemples du trope du rival bien exécuté. Les arc de tournoi, même prévisibles dans leur structure, sont portés par des gags qui ne s'épuisent pas.</p><p>Mashle ne prétend pas être autre chose qu'un divertissement pur. Il y réussit avec une régularité et une générosité qui lui valent amplement sa place dans le paysage shōnen récent.</p>`,
  stars: 4,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Mashle",  logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=mashle+tome",   logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=mashle+tome",           logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/fr/search?q=Mashle", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 16,
  chapters: 162,
  year: 2020,
  author: "Hajime Komoto",
},
{
  slug: "monster",
  pros: ["Thriller psychologique sans équivalent dans le manga","Johan Liebert, antagoniste le plus terrfiant du medium","Réalisme et profondeur humaine exceptionnels"],
  cons: ["Rythme lent et exigeant","Pas d'action spectaculaire","Demande une patience et une maturité du lecteur"],
  addedAt: "2025-10-25",
  title: "Monster",
  category: "manga",
  tags: "Thriller · Psychologie · Europe · Enquête",
  cover: "/monster.jpg",
  synopsis: "Brillant neurochirurgien, Tenma sauve un enfant promis à devenir un tueur. Des années plus tard, il traque le monstre qu’il a épargné, à travers une Europe hantée par la culpabilité et la manipulation.",
  reviewHtml: `<p>Monster est l'œuvre maîtresse de Naoki Urasawa, et l'une des meilleures bandes dessinées du vingtième siècle, tout medium confondu. Ce n'est pas une hyperbole. En 18 volumes, Urasawa construit un thriller psychologique d'une précision et d'une profondeur qui n'ont pas d'équivalent dans le manga.</p><p>Johan Liebert est l'antagoniste le plus terrfiant de l'histoire du manga, non pas parce qu'il a des pouvoirs surhumains, mais précisément parce qu'il n'en a pas. Il est humain. Et pourtant, partout où il passe, des gens meurent ou perdent leur âme. Il fascine, manipule, convainc, et le lecteur, comme les personnages, ne comprend jamais tout à fait comment ni pourquoi.</p><p>Le Dr Tenma, qui l'a sauvé enfant et qui le traque des années plus tard à travers l'Europe, est un protagoniste d'une intégrité rare. Sa quête le confronte à une question fondamentale : toutes les vies ont-elles la même valeur ? Cette question, posée dans le premier chapitre, résonne jusqu'au dernier.</p><p>Monster demande un lecteur adulte et patient. Il n'y a pas d'action spectaculaire ni de pouvoirs magiques, juste des personnages extraordinairement bien écrits dans une Europe post-guerre froide reconstituée avec soin. Un chef-d'œuvre absolu.</p>`,
  stars: 5,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Monster+manga",  logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=monster+ura+rasawa",   logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=monster+manga+urasawa",        logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Netflix", url: "https://www.netflix.com/search?q=Monster%20anime", logo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 18,
  chapters: 162,
  year: 1994,
  author: "Naoki Urasawa",
},
{
  slug: "noragami",
  pros: ["Mythologie shinto bien intégrée","Yato, personnage attachant et profond","Équilibre comédie/drama très réussi"],
  cons: ["Publication très irrégulière","Certains arcs en attente de résolution depuis des années","Rythme de publication frustrant"],
  addedAt: "2025-10-27",
  title: "Noragami",
  category: "manga",
  tags: "Dieux · Action · Comédie · Quotidien",
  cover: "/noragami.png",
  synopsis: "Yato, dieu fauché, rêve de devenir populaire. Avec Hiyori et Yukine, il résout des affaires entre monde des vivants et esprits. Derrière les gags, des blessures profondes ressurgissent.",
  reviewHtml: `<p>Noragami est une pépite qui mérite bien plus de reconnaissance qu'elle n'en a reçu. Adachitoka a construit un univers ancré dans la mythologie japonaise, dieux shintoïstes, esprits, frontière entre le monde des vivants et celui des morts, avec une maîtrise et une cohérence remarquables.</p><p>Yato est un dieu mineur sans temple ni fidèles, qui rend des services pour 5 yens en rêvant de gloire. C'est un personnage comique en surface, mais derrière la façade du sans-abri divin se cache une histoire longue et douloureuse que la série dévoile progressivement. Sa relation avec Yukine, son Regalia, et Hiyori, la fille qui peut voir les dieux, forme un trio attachant dont la dynamique évolue naturellement au fil des tomes.</p><p>Les arcs plus sérieux de Noragami, notamment tout ce qui concerne le passé de Yato et les intrigues des dieux majeurs, sont d'une intensité surprenante pour une série qui se présente d'abord comme une comédie surnaturelle. Bishamon, antagoniste puis alliée, est l'un des meilleurs personnages secondaires du manga d'action-aventure.</p><p>La publication est malheureusement très irrégulière. Mais chaque tome vaut l'attente.</p>`,
  stars: 4,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Noragami",  logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=noragami+tome",   logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=noragami+tome",            logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/fr/search?q=Noragami", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" }
  ],
  live: [],
  published: true,
  status: "en cours",
  volumes: 27,
  chapters: 110,
  year: 2011,
  author: "Adachitoka",
},
{
  slug: "omniscient-reader",
  pros: ["Concept meta-narratif brillant","Protagoniste avec une vraie profondeur","Univers d'une richesse rare dans le manhwa"],
  cons: ["Très dense, nécessite une lecture attentive","Nombreux personnages difficiles à mémoriser","Début lent"],
  addedAt: "2025-10-29",
  title: "Omniscient Reader",
  category: "manhwa",
  tags: "Apocalypse · Méta · Scénario · Compagnons",
  cover: "/omniscient-reader.jpg",
  synopsis: "Dokja voit son webroman favori devenir réalité. Armé de sa connaissance de l’histoire, il tente de survivre aux scénarios imposés par des entités cosmiques. Savoir n’équivaut pas à pouvoir.",
  reviewHtml: `<p>Omniscient Reader's Viewpoint est peut-être le manhwa le mieux écrit de sa génération. Le concept est méta et brillant : Kim Dokja est le seul lecteur au monde à avoir fini "Three Ways to Survive the Apocalypse", un roman web obscur, et quand le monde réel commence à suivre exactement le scénario du roman, il devient le seul humain à savoir ce qui va se passer.</p><p>Cette omniscience partielle est utilisée avec une intelligence rare. Dokja connaît les grandes lignes du "scénario" mais pas tous les détails, et ses tentatives de dévier le récit tout en l'utilisant créent des situations d'une complexité fascinante. La question de ce que signifie être lecteur versus personnage, observateur versus acteur, est explorée avec une profondeur philosophique inattendue.</p><p>Le manhwa récompense les lecteurs attentifs avec des callbacks, des foreshadowings et des révélations qui recontextualisent des scènes passées. Certaines révélations sur la véritable nature du "roman" et de son auteur font partie des meilleurs moments de l'ensemble du genre.</p><p>C'est une lecture dense qui demande de l'attention, les noms coréens, la hiérarchie des constellations, les règles du système sont nombreux à intégrer. Mais Omniscient Reader est une œuvre qui traite son lecteur comme un adulte intelligent, et ça change tout.</p>`,
  stars: 5,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=omniscient+reader", logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [],
  live: [],
  published: true,
  status: "terminé",
  volumes: 8,
  chapters: 551,
  year: 2018,
  author: "sing N song",
},
{
  slug: "oshi-no-ko",
  pros: ["Critique acérée de l'industrie du divertissement japonais","Twists de début de série mémorables","Thèmes adultes traités avec maturité"],
  cons: ["Rythme inégal selon les arcs","Sous-intrigues romantiques moins intéressantes","Peut dérouter par ses changements de registre"],
  addedAt: "2025-10-31",
  title: "Oshi no Ko",
  category: "manga",
  tags: "Showbiz · Drame · Mystère · Réincarnation",
  cover: "/oshi-no-ko.png",
  synopsis: "Un médecin et sa patiente renaissent dans le monde des idoles, liés au destin d’une star lumineuse. Entre coulisses du showbiz et quête de vérité, ils affrontent manipulations et médias.",
  reviewHtml: `<p>Oshi no Ko commence avec l'un des premiers chapitres les plus surprenants du manga récent. Ce qui ressemble à une romance entre un médecin de campagne et son idole préférée prend en quelques pages une direction radicalement inattendue, et le lecteur se retrouve embarqué dans quelque chose de bien plus sombre et complexe que prévu.</p><p>Aka Akasaka, auteur de Kaguya-sama, et Mengo Yokoyari construisent une critique acérée de l'industrie du divertissement japonais : les idols, le monde de l'acteur, les réseaux sociaux, la culture du mensonge public et de la performance permanente. C'est rare de voir un manga shōnen traiter ces thèmes avec autant de mordant.</p><p>Les personnages sont complexes et leurs motivations évoluent de façon crédible. La question centrale de la série, peut-on utiliser le mensonge pour atteindre la vérité ?, est explorée sous plusieurs angles sans jamais imposer de réponse simple.</p><p>Le rythme peut être inégal selon les arcs, et certaines sous-intrigues romantiques semblent moins essentielles que la critique de l'industrie. Mais Oshi no Ko est l'une des séries les plus ambitieuses et les plus originales du manga contemporain.</p>`,
  stars: 4,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Oshi+no+Ko",  logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=oshi+no+ko",   logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=oshi+no+ko",            logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Netflix", url: "https://www.netflix.com/search?q=Oshi%20no%20Ko", logo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940" }
  ],
  live: [],
  published: true,
  status: "en cours",
  volumes: 15,
  chapters: 155,
  year: 2020,
  author: "Aka Akasaka",
},
{
  slug: "pluto",
  pros: ["Réécriture d'Astro Boy pour adultes magistrale","Thèmes sur la guerre et la haine d'une profondeur rare","Artwork d'Urasawa immaculé"],
  cons: ["Nécessite de connaître Astro Boy pour apprécier pleinement","Très court, 8 volumes qui laissent un vide","Fin très émotionnellement éprouvante"],
  addedAt: "2025-11-02",
  title: "Pluto",
  category: "manga",
  tags: "Sci-fi · Robotique · Enquête · Remake",
  cover: "/pluto.jpg",
  synopsis: "Relecture sombre d’un arc d’Astro Boy. Gesicht, détective robot, enquête sur des assassinats visant les plus puissants robots du monde. Humanité, mémoire et haine s’entrecroisent.",
  reviewHtml: `<p>Pluto est la preuve que le manga peut être de la grande littérature. Naoki Urasawa a pris un arc classique d'Astro Boy, Le Robot le Plus Puissant du Monde, et l'a réécrit pour adultes, avec une profondeur thématique et une maîtrise narrative qui honorent Osamu Tezuka tout en créant quelque chose de radicalement nouveau.</p><p>Dans un futur proche, les huit robots les plus puissants du monde sont assassinés un par un. L'enquête menée par Gesicht, robot détective europol, révèle progressivement une conspiration qui touche aux fondements de la guerre, de la haine, et de ce que signifie souffrir. Atom n'apparaît que tardivement, mais son arc final est d'une beauté bouleversante.</p><p>Urasawa traite ses robots comme des êtres émotionnels complets, capables de traumatisme, de deuil, d'amour, de doute existentiel. Cette humanisation totale est la clé de l'émotion que génère Pluto. Quand un robot "meurt", on pleure. Vraiment.</p><p>Les thèmes, le cycle de la haine, le coût humain de la guerre, la question de si une machine peut vraiment haïr, résonnent avec une actualité douloureuse. Pluto est court, 8 volumes, et chaque page compte. Un monument.</p>`,
  stars: 5,
  shops: [
    { name: "Fnac",   url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=pluto+manga+urasawa", logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=pluto+manga+urasawa",       logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Netflix", url: "https://www.netflix.com/search?q=Pluto%20anime", logo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 8,
  chapters: 65,
  year: 2003,
  author: "Naoki Urasawa",
},
{
  slug: "slam-dunk",
  pros: ["Le meilleur manga de sport jamais créé","Hanamichi, protagoniste inoubliable","Matchs d'un réalisme et d'une tension exceptionnels"],
  cons: ["Fin abrupte qui laisse des histoires inachevées","Visuellement daté par moments","Début très lent avant que Hanamichi joue vraiment"],
  addedAt: "2025-11-04",
  title: "Slam Dunk",
  category: "manga",
  tags: "Sport · Basket · Lycée · Équipe",
  cover: "/slam-dunk.png",
  synopsis: "Voyou au grand cœur, Hanamichi rejoint le club de basket par amour-propre. Entre entraînements, rivalités et matchs haletants, il découvre l’esprit d’équipe. Le terrain devient sa seconde chance.",
  reviewHtml: `<p>Slam Dunk n'est pas juste le meilleur manga de basketball jamais créé, c'est l'un des meilleurs mangas de sport tout court, et une œuvre dont l'influence sur la culture japonaise et asiatique reste immense trente ans après sa publication. Takehiko Inoue a réussi quelque chose d'extraordinaire : rendre le basketball passionnant pour des millions de lecteurs qui n'avaient jamais regardé un match.</p><p>Hanamichi Sakuragi est l'un des protagonistes les plus mémorables du shōnen. Bruyant, immature, comique, et pourtant capable de moments de grandeur pure qui font monter les larmes. Son apprentissage du basketball, motivé au départ par le désir d'impressionner une fille, devient peu à peu une véritable passion, et ce basculement est traité avec une subtilité magnifique.</p><p>Ce qui distingue Slam Dunk c'est son réalisme. Les matchs sont ancrés dans une logique basketballistique crédible. Les adversaires sont respectés et développés. Les victoires sont méritées et les défaites ont du poids. Le climax de la série, le tournoi national, est une séquence de manga sportif qui n'a jamais été égalée.</p><p>La fin arrive abruptement, laissant certaines histoires inachevées. Mais Slam Dunk reste une expérience manga incontournable, et son film de 2022 a confirmé que l'œuvre n'a rien perdu de sa puissance émotionnelle.</p>`,
  stars: 5,
  shops: [
    { name: "Fnac",   url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=slam+dunk+tome", logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=slam+dunk+tome",       logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [],
  live: [],
  published: true,
  status: "terminé",
  volumes: 31,
  chapters: 276,
  year: 1990,
  author: "Takehiko Inoue",
},
{
  slug: "soul-eater",
  pros: ["Esthétique gothic halloween unique et mémorable","Personnages secondaires qui volent souvent la vedette","Humour et action bien équilibrés"],
  cons: ["Qualité en baisse dans la deuxième moitié","Fin manga décevante vs l'animé","Certains pouvoirs peu cohérents"],
  addedAt: "2025-11-05",
  title: "Soul Eater",
  category: "manga",
  tags: "Fantaisie · Académie · Armes vivantes · Style",
  cover: "/soul-eater.jpg",
  synopsis: "À la Shibusen, des manieurs et leurs armes humaines chassent âmes corrompues et sorcières. Maka et Soul visent le statut d’Arme ultime. Ambiance gothique, humour noir et combats syncopés.",
  reviewHtml: `<p>Soul Eater a un style visuel immédiatement reconnaissable, une Death City gothique sous une lune souriante et un soleil ricanant, des personnages aux designs extravagants, une esthétique Halloween permanente qui donne à la série une identité visuelle forte. Atsushi Ohkubo a créé un univers où des élèves s'entraînent pour devenir des Faucheuses de la Mort en utilisant leurs partenaires transformés en armes.</p><p>Le concept est inventif : chaque duo est composé d'un méister et d'une arme vivante, et leur compatibilité psychologique détermine leur puissance. Soul et Maka forment le duo central, attachant et bien écrit, mais c'est souvent la galerie de personnages secondaires, Black Star, Death the Kid avec son obsession de la symétrie, qui vole la vedette.</p><p>Soul Eater est à son meilleur dans ses premiers arcs, où l'équilibre entre humour, action et développement des personnages est parfait. La série perd un peu de son élan dans sa deuxième moitié, et la fin du manga diverge de celle de l'animé de façon assez abrupte.</p><p>Mais comme introduction au manga d'action avec une esthétique unique et des personnages mémorables, Soul Eater reste une valeur sûre, surtout pour un public adolescent ou pour ceux qui aiment les univers dark fantasy avec une touche de comédie.</p>`,
  stars: 4,
  shops: [
    { name: "Fnac",   url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=soul+eater+tome", logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=soul+eater+tome",       logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/fr/search?q=Soul%20Eater", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 25,
  chapters: 113,
  year: 2003,
  author: "Atsushi Ohkubo",
},
{
  slug: "the-promised-neverland",
  pros: ["Arc 1, thriller haletant d'une tension rare","Trio Emma/Norman/Ray remarquable","Twists réguliers qui renouvellent l'intrigue"],
  cons: ["Qualité chute drastiquement après l'arc 1","Fin très précipitée et décevante","Certains arcs intermédiaires dispensables"],
  addedAt: "2025-11-07",
  title: "The Promised Neverland",
  category: "manga",
  tags: "Thriller · Évasion · Mystère · Enfance",
  cover: "/the-promised-neverland.jpg",
  synopsis: "Emma, Norman et Ray découvrent l’horrible vérité de leur orphelinat. Ils orchestrent une évasion impossible sous l’œil d’adultes menaçants. Chaque détail compte, chaque erreur est fatale.",
  reviewHtml: `<p>Les premiers tomes de The Promised Neverland sont parmi les plus haletants qu'on puisse lire en manga. Le concept de départ est brillant, l'exécution est chirurgicale, et la révélation de la vérité sur Grace Field House reste l'un des meilleurs moments d'horreur douce du genre.</p><p>Emma, Norman et Ray forment un trio exceptionnellement bien équilibré. L'optimisme inconditionnel d'Emma, la froideur stratégique de Norman, le réalisme cynique de Ray, leurs approches opposées créent des dynamiques fascinantes. La relation avec Isabella, leur gardienne, atteint des profondeurs émotionnelles inattendues.</p><p>L'arc de Grace Field House est un chef-d'œuvre de thriller. La tension monte chapitre après chapitre, les plans et contre-plans des enfants contre leur gardienne sont d'une intelligence rare. On lit en apnée.</p><p>Honnêtement : la qualité chute significativement après cet arc, et la fin a déçu beaucoup de lecteurs. Mais les 40 premiers chapitres justifient à eux seuls la lecture, peu de mangas commencent aussi fort.</p>`,
  stars: 5,
  shops: [
    { name: "Fnac",   url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=the+promised+neverland+tome", logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=the+promised+neverland+tome",       logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/fr/search?q=The%20Promised%20Neverland", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" },
    { name: "Netflix",     url: "https://www.netflix.com/search?q=The%20Promised%20Neverland",        logo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 20,
  chapters: 181,
  year: 2016,
  author: "Kaiu Shirai",
},
{
  slug: "tower-of-god",
  pros: ["Univers vertical et mystérieux fascinant","Twenty-Fifth Bam, évolution lente mais marquante","Intrigues politiques complexes"],
  cons: ["Rythme très lent par moments","Extrêmement long avec des centaines de chapitres","Certains arcs difficiles à suivre"],
  addedAt: "2025-11-09",
  title: "Tower of God",
  category: "manhwa",
  tags: "Fantasy · Tour · Épreuves · Compétition",
  cover: "/tower-of-god.jpg",
  synopsis: "Bam entre dans une tour où chaque étage impose des tests mortels. Alliances fragiles, règles changeantes et pouvoirs étranges rythment l’ascension. Il cherche son amie Rachel, quitte à tout sacrifier.",
  reviewHtml: `<p>Tower of God est l'un des manhwas les plus ambitieux jamais créés. SIU, Slave In Utero, a commencé cette publication sur plateforme webtoon coréenne en 2010, et a depuis construit l'un des univers les plus complexes et les plus riches du medium.</p><p>La Tour est une structure mystérieuse dont personne ne connaît le sommet. Ceux qui la grimpent peuvent voir leurs vœux exaucés, richesse, pouvoir, ou simplement retrouver quelqu'un de perdu. Twenty-Fifth Bam entre dans la Tour pour retrouver Rachel, la seule personne qu'il ait jamais connue. Ce point de départ simple ouvre sur un récit politique, mythologique et émotionnel d'une ampleur rare.</p><p>Le système de pouvoirs, Shinsu, positions de combat, classes de grimpeurs, est élaboré et cohérent. Les personnages secondaires sont nombreux mais remarquablement bien développés. Khun Aguero Agnes, l'allié stratège de Bam, est l'un des meilleurs personnages de soutien du webtoon.</p><p>Tower of God demande un investissement important, des centaines de chapitres, des dizaines de personnages à mémoriser, des arcs qui s'étalent sur des années de publication. Mais pour ceux qui s'accrochent, c'est une saga épique comme il en existe peu.</p>`,
  stars: 4,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=tower+of+god+manhwa", logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/fr/search?q=Tower%20of%20God", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" }
  ],
  live: [],
  published: true,
  status: "en cours",
  volumes: 16,
  chapters: 620,
  year: 2010,
  author: "SIU",
},
{
  slug: "vagabond",
  pros: ["Artwork sumi-e d'une beauté absolue","Évolution philosophique de Musashi unique dans le manga","Sasaki Kojiro, l'un des meilleurs personnages secondaires"],
  cons: ["Hiatus depuis 2015 sans fin connue","Histoire probablement inachevée","Rythme très lent par nature"],
  addedAt: "2025-11-11",
  title: "Vagabond",
  category: "manga",
  tags: "Samouraï · Historique · Philosophie · Duel",
  cover: "/vagabond.png",
  synopsis: "Libre adaptation de la vie de Musashi Miyamoto. De combats en errance, le jeune bretteur apprend la voie du sabre et de l’humilité. Chaque duel interroge le sens de la force.",
  reviewHtml: `<p>Vagabond n'est pas un manga de samouraï. C'est une exploration de ce que signifie être humain, racontée à travers la vie de Miyamoto Musashi, le plus grand duelliste de l'histoire japonaise. Takehiko Inoue, déjà auteur de Slam Dunk, a consacré plus de vingt ans à cette œuvre, et chaque tome en porte la marque.</p><p>L'artwork de Vagabond est dans une catégorie à part. Inoue utilise l'encre sumi-e dans un style qui rappelle la peinture japonaise traditionnelle, des traits expressifs, des noirs profonds, des compositions magistrales. Certaines doubles pages sont des œuvres d'art autonomes. Aucun autre manga ne ressemble à Vagabond.</p><p>L'histoire suit Musashi depuis sa jeunesse violente jusqu'à sa maturité philosophique. Le jeune homme assoiffé de gloire qui veut être "invincible sous le ciel" devient quelqu'un qui comprend que la vraie force n'a rien à voir avec les combats. Sasaki Kojiro, son rival sourd de naissance, est l'un des personnages les mieux écrits de tout le manga.</p><p>Vagabond est en hiatus depuis 2015 et la fin semble incertaine. Mais les 37 volumes existants, d'une beauté absolue, suffisent à en faire l'une des plus grandes œuvres de la bande dessinée mondiale.</p>`,
  stars: 5,
  shops: [
    { name: "Fnac",   url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=vagabond+tome", logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=vagabond+tome",       logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [],
  live: [],
  published: true,
  status: "pause",
  volumes: 37,
  chapters: 327,
  year: 1998,
  author: "Takehiko Inoue",
},
{
  slug: "vinland-saga",
  pros: ["Reconstitution historique exceptionnelle","Évolution de Thorfinn, l'une des meilleures arcs du manga","Thèmes pacifistes rares et courageux"],
  cons: ["Deuxième arc radicalement différent peut dérouter","Rythme lent dans l'arc de la ferme","Peu accessible aux non-initiés à l'histoire viking"],
  addedAt: "2025-11-13",
  title: "Vinland Saga",
  category: "manga",
  tags: "Historique · Vikings · Épopée · Drame",
  cover: "/vinland-saga.jpg",
  synopsis: "Thorfinn, jeune guerrier islandais, poursuit une vengeance qui le consume. Des champs de bataille à la quête d’un nouveau monde, il redéfinit sa voie. La violence héritée se heurte au désir de paix.",
  reviewHtml: `<p>Makoto Yukimura a commencé Vinland Saga comme un manga de vikings épiques, et en a fait quelque chose d'infiniment plus grand : une méditation sur la violence, la rédemption, et le sens de la paix dans un monde qui ne connaît que la guerre.</p><p>L'arc 1 suit Thorfinn, aveuglé par la vengeance depuis l'enfance. La reconstitution historique de l'ère viking est saisissante. Askeladd, l'antagoniste principal, est l'un des personnages les plus complexes et les plus fascinants du manga moderne, un homme amoral qui cache une loyauté profonde.</p><p>Puis vient l'arc 2, et tout change. Thorfinn se retrouve esclave dans une ferme. C'est là que Vinland Saga révèle son ambition : montrer qu'un homme construit par la haine peut, lentement, douloureusement, choisir autre chose. L'évolution de Thorfinn est l'une des plus belles courbes narratives du manga contemporain.</p><p>Une lecture qui demande de la patience, mais qui récompense chaque heure investie. Vinland Saga est une œuvre adulte, courageuse, unique.</p>`,
  stars: 5,
  shops: [
    { name: "Fnac",   url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=vinland+saga+tome", logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=vinland+saga+tome",       logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/fr/search?q=Vinland%20Saga", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" },
    { name: "Netflix",     url: "https://www.netflix.com/search?q=Vinland%20Saga",        logo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940" }
  ],
  live: [],
  published: true,
  status: "en cours",
  volumes: 29,
  chapters: 214,
  year: 2005,
  author: "Makoto Yukimura",
},
{
  slug: "wind-breaker",
  pros: ["Dynamique de groupe exceptionnelle et attachante","Combats chorégraphiés avec un sens du rythme rare","Évolution du protagoniste crédible et bien menée","Thèmes de protection et fraternité traités avec sincérité"],
  cons: ["Prémisse classique du lycée de bagarreurs sans grande originalité","Certains personnages secondaires restent peu développés"],
  addedAt: "2025-11-15",
  title: "Wind Breaker",
  category: "manhwa",
  tags: "Action · Combat · Lycée · Délinquants · Shōnen",
  cover: "/wind-breaker.jpg",
  synopsis: "Haruka Sakura est un lycéen qui arrive au lycée Fûrin, connu pour son taux de délinquance élevé. Son objectif : affronter les meilleurs bagarreurs et devenir le meilleur d'entre eux. Mais cela ne va pas être aussi simple qu'il ne le pensait.",
  reviewHtml: `<p>Wind Breaker est l'une des meilleures séries de street gang du manhwa récent. Jo Yongseok a créé un manga d'action qui utilise la hiérarchie des lycées de délinquants comme cadre pour explorer des thèmes plus profonds, la place qu'on occupe dans un groupe, la fierté mal placée, et ce que signifie vraiment protéger quelque chose.</p><p>Jay, le protagoniste, arrive dans un lycée réputé pour ses combattants avec une seule ambition : devenir le plus fort. Ce qu'il découvre c'est une école dont les élèves se battent non pas pour la gloire personnelle mais pour protéger leur quartier des gangs extérieurs. Ce renversement de ses attentes, et du lecteur, est le point de départ d'une évolution de personnage bien menée.</p><p>Les combats de Wind Breaker sont dynamiques et chorégraphiés avec soin, l'action est lisible et chaque affrontement a un enjeu clair. Les personnages secondaires, notamment Kuwahara et les autres membres de l'école, ont chacun leur arc et leur profondeur propre.</p><p>Wind Breaker est en cours de publication et monte en qualité arc après arc. Une série d'action urbaine solide avec plus de cœur qu'elle n'en a l'air.</p>`,
  stars: 4,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=wind+breaker+manhwa", logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [],
  live: [],
  published: true,
  status: "en cours",
  volumes: 20,
  chapters: 500,
  year: 2013,
  author: "Yongseok Jo",
},
{
  slug: "demon-slayer-kimetsu-no-yaiba",
  pros: ["Dessins parmi les plus beaux du shōnen moderne","Relation Tanjiro/Nezuko très émouvante","Histoire complète en 23 tomes"],
  cons: ["Antagonistes peu développés","Certains personnages secondaires interchangeables","Résolution un peu rapide"],
  addedAt: "2025-11-16",
  title: "Demon Slayer: Kimetsu no Yaiba",
  category: "manga",
  tags: "Shōnen · Démons · Sabre · Fratrie",
  cover: "/demon-slayer-kimetsu-no-yaiba.png",
  synopsis: "Après le massacre de sa famille et la transformation de sa sœur Nezuko en démon, Tanjiro rejoint le Corps des Pourfendeurs pour la protéger et traquer les responsables.",
  reviewHtml: `<p>Demon Slayer est peut-être le manga le plus beau visuellement de sa génération. Koyoharu Gotouge a développé un style graphique immédiatement reconnaissable, des traits nets, des kimonos aux motifs géométriques complexes, des effets de souffle et d'eau qui semblent animés sur la page. Même en noir et blanc, chaque planche est un spectacle.</p><p>L'histoire de Tanjiro, un garçon qui devient chasseur de démons pour sauver sa sœur Nezuko, est simple dans son prémisse. Mais cette simplicité est une force. La relation fraternelle entre Tanjiro et Nezuko est le cœur émotionnel de la série, et elle fonctionne parfaitement du premier au dernier chapitre.</p><p>Les Piliers, les neuf chasseurs d'élite, sont une galerie de personnages mémorables, chacun avec son style de combat et son histoire. L'arc du Train de l'Infini compte parmi les meilleures séquences d'action du shōnen moderne.</p><p>Le seul reproche : les antagonistes restent en surface, peu développés. Mais comme divertissement pur, visuellement somptueux et émotionnellement efficace, Demon Slayer est irréprochable.</p>`,
  stars: 4,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Demon+Slayer", logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=demon+slayer+tome", logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=demon+slayer+tome", logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" },
    { name: "Netflix (recherche)", url: "https://www.netflix.com/search?q=Demon%20Slayer", logo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 23,
  chapters: 205,
  year: 2016,
  author: "Koyoharu Gotouge",
},
{
  slug: "spy-x-family",
  pros: ["Humour parfaitement dosé","Anya, personnage irrésistible","Légèreté assumée et rafraîchissante"],
  cons: ["Peu d'enjeux réels malgré le prémisse espionnage","Progression narrative lente","Risque de tourner en rond sur la durée"],
  addedAt: "2025-11-18",
  title: "SPY×FAMILY",
  category: "manga",
  tags: "Comédie · Espionnage · Famille",
  cover: "/spy-x-family.jpg",
  synopsis: "Pour approcher un politicien, l’espion « Twilight » forme une famille de façade : Anya, fillette télépathe, et Yor, tueuse à gages. Personne ne connaît le secret des autres.",
  reviewHtml: `<p>Dans un paysage manga souvent dominé par l'action intense et les enjeux de vie ou de mort, Spy x Family arrive avec une proposition rafraîchissante : et si l'espionnage international servait de cadre à une comédie familiale douce et chaleureuse ? Tatsuya Endo a trouvé la formule parfaite.</p><p>Loid Forger, agent secret d'élite, doit constituer une fausse famille pour mener à bien une mission. Il adopte Anya, une petite fille télépathe qui sait tout mais fait semblant de ne rien savoir. Il épouse Yor, une tueuse à gages qui cherche une couverture. Chacun cache son identité aux autres. Et pourtant, malgré la construction artificielle de cette famille, quelque chose de vrai se construit progressivement.</p><p>Anya est l'une des créations les plus attachantes du manga récent. Ses expressions, ses réactions, son enthousiasme sincère pour sa nouvelle vie, chaque scène avec elle est un bonheur. Elle porte la série sur ses petites épaules avec un naturel désarmant.</p><p>Spy x Family assume pleinement sa légèreté. Ce n'est pas une série qui cherche à surprendre ou à bouleverser, c'est un manga qui veut juste rendre le lecteur heureux. Et elle y réussit parfaitement, à chaque chapitre.</p>`,
  stars: 4,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Spy+x+Family", logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Spy%20x%20Family%20tome", logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=spy+x+family+tome", logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/series/G4PH0WXVJ/spy-x-family", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" },
    { name: "Netflix (recherche)", url: "https://www.netflix.com/search?q=Spy%20x%20Family", logo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940" }
  ],
  live: [],
  published: true,
  status: "en cours",
  volumes: 14,
  chapters: 110,
  year: 2019,
  author: "Tatsuya Endo",
},

{
  slug: "arifureta",
  pros: ["Progression crafting inventive et satisfaisante","Atmosphère survival efficace au début","Héros pragmatique et compétent"],
  cons: ["Virage harem qui déçoit les fans du ton sombre initial","Qualité narrative inégale","Personnages féminins stéréotypés"],
  addedAt: "2025-11-20",
  title: "Arifureta: De zéro à héros",
  category: "manga",
  tags: "Isekai · Donjon · Vengeance · Survie",
  cover: "/arifureta.jpg",
  synopsis: "Trahi lors d’un raid, Hajime chute au fond d’un donjon. Pour survivre, il se radicalise, fabrique ses armes et remonte, décidé à renverser son destin.",
  reviewHtml: `<p>Arifureta commence avec un concept familier, groupe d'élèves transportés dans un autre monde, mais choisit de suivre le personnage le plus faible du groupe, Hajime Nagumo, après qu'il ait été trahi et laissé pour mort dans les profondeurs d'un donjon. Sa survie et sa transformation progressive en quelqu'un de plus dur, plus efficace, et moins naïf que ses anciens camarades forment le cœur de la série.</p><p>Ce qui fonctionne bien dans Arifureta c'est l'aspect crafting et progression : Hajime utilise sa seule compétence de transmutation pour créer des armes de plus en plus sophistiquées, et cette ingéniosité pratique dans un monde de magie et d'épées est rafraîchissante. Les premières parties du donjon ont une atmosphère de survival tendue et efficace.</p><p>La série change de registre une fois Hajime sorti du donjon, elle devient plus légère, plus harem, avec l'accumulation progressive d'une troupe de compagnes aux personnalités contrastées. Ce virage plaît à certains lecteurs, en déçoit d'autres qui préféraient le ton sombre du début.</p><p>Arifureta est un isekai de divertissement honnête, pas révolutionnaire, mais efficace dans ce qu'il propose, surtout pour les fans du genre qui apprécient un protagoniste compétent et pragmatique.</p>`,
  stars: 3,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Arifureta", logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=arifureta%20tome", logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=arifureta+tome", logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/series/G4PH0WXD1/arifureta-from-commonplace-to-worlds-strongest", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" }
  ],
  live: [],
  published: false,
},
{
  slug: "re-zero",
  pros: ["Système de résurrection exploré avec génie","Subaru, anti-héros complexe et réaliste","World-building très riche"],
  cons: ["Certains arcs très longs","Personnage de Subaru peut être agaçant au début","Nombreux personnages à suivre"],
  addedAt: "2025-11-22",
  title: "Re:Zero",
  category: "manga",
  tags: "Isekai · Boucle temporelle · Drame · Fantasy",
  cover: "/re-zero.jpg",
  synopsis: "Subaru est transporté dans un autre monde et découvre qu’à chaque mort, il revient à un point de sauvegarde. Il tente d’enrayer les tragédies qui l’entourent.",
  reviewHtml: `<p>Re:Zero a réinventé la formule isekai en prenant le concept de "recommencer depuis un checkpoint" et en explorant honnêtement ce que ça ferait à un être humain. La réponse est : rien de bon. Et c'est là toute la brillance de la série.</p><p>Subaru Natsuki est téléporté dans un autre monde dont le seul pouvoir est de revenir à la vie après chaque mort, sans que personne d'autre ne s'en souvienne. Ce pouvoir qui ressemble à un cadeau est une malédiction. Chaque mort est vécue pleinement. La douleur, la panique, le désespoir s'accumulent. Tappei Nagatsuki traite le trauma psychologique avec une rigueur rare dans le genre.</p><p>La scène du "je ne veux pas mourir" de Subaru est l'une des séquences les plus émotionnellement intenses du genre. Elle redéfinit le personnage et brise les attentes du lecteur d'une façon difficile à oublier.</p><p>Re:Zero est dense, très dense. Ce n'est pas une lecture légère. Mais pour ceux qui s'accrochent, c'est l'un des isekai les plus intelligents jamais écrits.</p>`,
  stars: 4,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Re%3AZero%20tome", logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=re%3Azero%20tome", logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=re%3Azero+tome", logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/series/GRGG9798R/rezero--starting-life-in-another-world-", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" }
  ],
  live: [],
  published: true,
  status: "en cours",
  volumes: 40,
  chapters: 110,
  year: 2014,
  author: "Tappei Nagatsuki",
},
{
  slug: "tokyo-ghoul",
  pros: ["Premier arc excellent et atmosphérique","Transformation de Kaneki fascinante","Métaphore de la marginalité bien traitée"],
  cons: ["Qualité chute après le premier arc","Scénario trop complexe dans :re","Fin décevante pour la majorité des lecteurs"],
  addedAt: "2025-11-24",
  title: "Tokyo Ghoul",
  category: "manga",
  tags: "Dark Fantasy · Ghouls · Identité · Drame",
  cover: "/tokyo-ghoul.jpg",
  synopsis: "Blessé par une goule, Ken Kaneki devient un hybride et doit survivre entre deux mondes en luttant pour conserver son humanité.",
  reviewHtml: `<p>Tokyo Ghoul commence comme l'un des mangas d'horreur urbaine les plus prometteurs de sa génération. Kaneki Ken, étudiant ordinaire transformé en demi-goule après une rencontre traumatisante, est un protagoniste attachant dont la transformation progressive est fascinante à suivre. La métaphore de la marginalité, du "monstre" contraint de vivre caché dans la société humaine, est traitée avec une vraie sensibilité.</p><p>Le premier arc est excellent. L'ambiance du 20ème arrondissement, la galerie de personnages du café Anteiku, la tension entre ghules et enquêteurs du CCG, tout fonctionne. Les combats sont brutaux et stylisés, et la descente psychologique de Kaneki vers l'acceptation de sa nature monstrueuse est l'un des arcs de transformation les plus marquants du manga d'action.</p><p>La suite, Tokyo Ghoul :re, est plus inégale. Le scénario se complexifie jusqu'à parfois perdre le fil, certains personnages sont sous-exploités, et la conclusion laisse une partie des lecteurs sur leur faim. Le sentiment d'une série qui n'a pas tout à fait réalisé son potentiel est réel.</p><p>Mais pour son ambiance unique, son protagoniste mémorable et son premier arc impeccable, Tokyo Ghoul mérite largement sa place dans la bibliothèque de tout amateur de manga dark.</p>`,
  stars: 3,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Tokyo%20Ghoul%20tome", logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=tokyo%20ghoul%20tome", logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=tokyo+ghoul+tome", logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/series/G6NV7Z50Y/tokyo-ghoul", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 14,
  chapters: 143,
  year: 2011,
  author: "Sui Ishida",
},
{
  slug: "black-god",
  pros: ["Système de doubles original et bien conçu","Kuro attachante et charismatique","Action rythmée et lisible"],
  cons: ["Worldbuilding parfois confus","Personnages secondaires peu développés","Rythme inégal entre les arcs"],
  addedAt: "2025-11-26",
  title: "Black God (Kurokami)",
  category: "manga",
  tags: "Action · Surnaturel · Pacte · Rivalités",
  cover: "/kurokami.jpg",
  synopsis: "Après une rencontre avec Kuro, Keita se retrouve lié à une mototsumitama et impliqué dans des conflits mystiques qui dépassent son quotidien.",
  reviewHtml: `<p>Tokyo Ghoul commence comme l'un des mangas d'horreur urbaine les plus prometteurs de sa génération. Kaneki Ken, étudiant ordinaire transformé en demi-goule après une rencontre traumatisante, est un protagoniste attachant dont la transformation progressive est fascinante à suivre. La métaphore de la marginalité, du "monstre" contraint de vivre caché dans la société humaine, est traitée avec une vraie sensibilité.</p><p>Le premier arc est excellent. L'ambiance du 20ème arrondissement, la galerie de personnages du café Anteiku, la tension entre ghules et enquêteurs du CCG, tout fonctionne. Les combats sont brutaux et stylisés, et la descente psychologique de Kaneki vers l'acceptation de sa nature est l'un des arcs de transformation les plus marquants du manga d'action.</p><p>La suite, Tokyo Ghoul :re, est plus inégale. Le scénario se complexifie jusqu'à parfois perdre le fil, et la conclusion laisse une partie des lecteurs sur leur faim. Mais pour son ambiance unique et son premier arc impeccable, Tokyo Ghoul mérite sa place dans toute bonne bibliothèque manga.</p>`,
  stars: 2,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Kurokami%20Black%20God", logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=kurokami%20manga%20tome", logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=black+god+manga+kurokami", logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [],  // L'anime "Kurokami The Animation" n'est pas disponible partout sur les plateformes majeures
  live: [],
  published: false,
},
{
  slug: "sss-class-suicide-hunter",
  pros: ["Mécanisme de boucle temporelle exploité avec génie","Évolution psychologique du protagoniste très crédible","Payoffs émotionnels dévastateurs"],
  cons: ["Certains arcs d'exposition trop longs","Nombreux personnages à mémoriser","Début difficile d'accès"],
  addedAt: "2025-11-27",
  title: "SSS-Class Suicide Hunter",
  category: "manhwa",
  tags: "Répétition · Donjons · Vengeance",
  cover: "/sss-class-suicide-hunter.jpg",
  synopsis: "La capacité unique de Kim Gong-ja le rend plus fort à chaque mort. Il accumule talents et stratégies dans un monde où les épreuves ne pardonnent pas.",
  reviewHtml: `<p>SSS-Class Suicide Hunter commence avec l'une des prémisses les plus originales du manhwa de progression : Kim Gongja copie le pouvoir de n'importe qui en mourant de sa main, et voyage dans le temps jusqu'au moment de sa mort. Quand il copie accidentellement le pouvoir du chasseur le plus puissant du monde et meurt aussitôt, il se retrouve condamné à revivre indéfiniment jusqu'à comprendre comment survivre.</p><p>Ce mécanisme de boucle temporelle est exploité avec une intelligence et une créativité constantes. Chaque arc utilise le retour en arrière différemment, parfois pour résoudre un puzzle, parfois pour explorer ce qu'un personnage aurait fait autrement, parfois pour des effets émotionnels dévastateurs. La série ne se répète jamais.</p><p>Gongja lui-même évolue de façon crédible, les centaines de morts accumulées laissent des traces psychologiques réelles, et son rapport aux autres personnages change profondément au fil des arcs. Cette progression émotionnelle distingue SSS-Class des manhwas de progression plus superficiels.</p><p>Le rythme peut sembler lent dans certains arcs d'exposition, mais les payoffs valent l'investissement. Un manhwa de système qui mérite vraiment sa réputation.</p>`,
  stars: 3,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=SSS%20Class%20Suicide%20Hunter", logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=SSS%20Class%20Suicide%20Hunter", logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=SSS+Class+Suicide+Hunter", logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [],  // Pas d'anime officiel confirmé
  live: [],
  published: true,
  status: "en cours",
  volumes: 8,
  chapters: 160,
  year: 2020,
  author: "Shin Noah",
},
{
  slug: "my-wife-is-a-demon-queen",
  pros: ["Héros ingénieux sans pouvoirs de combat rafraîchissant","Dynamique du couple comique et efficace","Légèreté assumée et cohérente"],
  cons: ["Peu de profondeur narrative","Enjeux dramatiques limités","Prévisible dans ses développements"],
  addedAt: "2025-11-29",
  title: "My Wife Is a Demon Queen",
  category: "manhwa",
  tags: "Isekai · Couple · Fantasy",
  cover: "/my-wife-is-a-demon-queen.jpg",
  synopsis: "Un humain invoqué devient l’époux d’une reine démoniaque déchue. Ensemble, ils tentent de reconquérir un trône et un avenir.",
  reviewHtml: `<p>My Wife is a Demon Queen est un manhwa de fantasy légère qui assume pleinement son registre de comédie romantique dans un monde d'épée et de sorcellerie. Xiao Tong Kong a créé une série charmante dont le principal attrait est la dynamique entre ses deux protagonistes.</p><p>Xiang Ye, un humain ordinaire transporté dans un monde fantastique, se retrouve lié à Isabella, l'ancienne Reine Démon déchue cherchant à reconquérir son trône. Leur relation, elle le méprise ouvertement mais dépend de lui, il l'admire sincèrement et la soutient sans condition, est le moteur comique et émotionnel de la série.</p><p>Ce qui distingue My Wife is a Demon Queen de la masse des isekai c'est son héros : Xiang Ye n'a aucun pouvoir de combat, mais compense par une ingéniosité pratique et une loyauté absolue. Ses solutions créatives aux problèmes, souvent basées sur des connaissances du monde réel, sont plus satisfaisantes que les power-ups habituels du genre.</p><p>La série ne prétend pas à la profondeur. Elle offre de la légèreté, de l'humour, et une romance qui progresse honnêtement. Pour une lecture détente sans prise de tête, c'est une valeur sûre.</p>`,
  stars: 2,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=My%20Wife%20Is%20a%20Demon%20Queen", logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=My%20Wife%20Is%20a%20Demon%20Queen", logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=My+Wife+Is+a+Demon+Queen", logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [],  // Aucun anime officiel connu
  live: [],
  published: false,
},
{
  slug: "the-rising-of-the-shield-hero",
  pros: ["Protagoniste plus sombre et amer que la moyenne isekai","Arc de réhabilitation bien géré","Compagnons attachants autour de Naofumi"],
  cons: ["Perd son mordant dans les arcs tardifs","Système de niveaux générique","Certains antagonistes caricaturaux"],
  addedAt: "2025-12-01",
  title: "The Rising of the Shield Hero",
  category: "manga",
  tags: "Isekai · Héros · Trahison · Fantasy",
  cover: "/the-rising-of-the-shield-hero.jpg",
  synopsis: "Naofumi est invoqué dans un autre monde parmi les quatre héros légendaires. Prenant le bouclier, le plus faible des armes, il est trahi, calomnié, et doit prouver sa valeur seul.",
  reviewHtml: `<p>The Rising of the Shield Hero se distingue dans le genre isekai par son ton résolument plus sombre et plus amer. Naofumi Iwatani est convoqué dans un autre monde comme Héros du Bouclier, et immédiatement trahi, accusé à tort, et rejeté par tous. Là où la plupart des protagonistes isekai sont accueillis en sauveurs, Naofumi doit construire sa force depuis le fond du gouffre, sans alliés et sans confiance.</p><p>Cette prémisse amère donne à la série une énergie différente. Naofumi n'est pas un héros généreux, c'est un homme blessé qui garde ses distances, méfiant envers tout le monde, et dont la dureté est une cicatrice plus qu'un trait de caractère. Son évolution progressive, sous l'influence de Raphtalia et Filo, est l'arc émotionnel le plus intéressant de la série.</p><p>Les premiers arcs sont les meilleurs, la tension entre Naofumi et le reste du monde, les révélations sur les véritables enjeux de la menace des Vagues, la dynamique de son petit groupe. La série perd un peu de son mordant dans ses arcs ultérieurs quand Naofumi devient plus accepté.</p><p>Un isekai qui prend des risques narratifs et qui récompense les lecteurs patients avec un protagoniste plus complexe que la moyenne du genre.</p>`,
  stars: 3,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Shield+Hero", logo: "" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=shield+hero+tome", logo: "" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=shield+hero+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/series/G21MYZ1ML/the-rising-of-the-shield-hero", logo: "" }
  ],
  live: [],
  published: true,
  status: "en cours",
  volumes: 25,
  chapters: 110,
  year: 2013,
  author: "Aneko Yusagi",
},
{
  slug: "sword-art-online",
  pros: ["Prémisse de départ très accrocheur","Arc Aincrad solide et immersif","Influence majeure sur tout le genre isekai"],
  cons: ["Qualité très inégale entre les arcs","Kirito trop parfait par moments","ALfheim Online jugé très faible par la majorité"],
  addedAt: "2025-12-03",
  title: "Sword Art Online",
  category: "manga",
  tags: "Isekai · Jeu vidéo · Romance · Action",
  cover: "/sword-art-online.jpg",
  synopsis: "Kirito et d’autres joueurs sont piégés dans un jeu virtuel mortel : mourir dans le jeu signifie mourir dans la réalité. Kirito lutte pour sauver tout le monde.",
  reviewHtml: `<p>Sword Art Online est l'une des séries les plus influentes, et les plus débattues, du manga et light novel des années 2010. Son prémisse de départ reste l'un des plus accrocheurs du genre : 10 000 joueurs piégés dans un MMO de réalité virtuelle où mourir dans le jeu signifie mourir pour de vrai. Cette première arc, Aincrad, est un thriller de survie efficace qui a défini l'esthétique isekai pour une décennie.</p><p>Kirito est un protagoniste qui divise. Ses détracteurs lui reprochent d'être trop parfait, trop facilement victorieux. Ses défenseurs apprécient son pragmatisme froid et sa loyauté envers ses proches. Asuna, dans l'arc Aincrad, est l'un des personnages féminins les mieux écrits du genre, ce qui rend d'autant plus décevant son traitement dans certains arcs suivants.</p><p>SAO souffre d'une inégalité prononcée entre ses arcs. Aincrad est solide. ALfheim Online est jugé bien plus faible par la majorité des lecteurs. GGO et Alicization remontent le niveau avec des concepts plus inventifs et un meilleur traitement des personnages secondaires.</p><p>Malgré ses défauts bien documentés, SAO a introduit des millions de lecteurs au manga et light novel. Son influence sur tout le genre isekai qui a suivi est indéniable.</p>`,
  stars: 3,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Sword+Art+Online", logo: "" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=sword+art+online+tome", logo: "" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=sword+art+online+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/series/G4V5XW0PE/sword-art-online", logo: "" },
    { name: "Netflix (recherche)", url: "https://www.netflix.com/search?q=Sword%20Art%20Online", logo: "" }
  ],
  live: [],
  published: true,
  status: "en cours",
  volumes: 14,
  chapters: 60,
  year: 2012,
  author: "Reki Kawahara",
},
{
  slug: "goblin-slayer",
  pros: ["Protagonist original et traumatisé de façon crédible","Désacralisation honnête du heroic fantasy","Combats tactiques et conséquents"],
  cons: ["Premier chapitre très difficile à lire","Pas pour tous les publics","Manque de variété dans les antagonistes"],
  addedAt: "2025-12-05",
  title: "Goblin Slayer",
  category: "manga",
  tags: "Dark Fantasy · Aventure · Violence",
  cover: "/goblin-slayer.jpg",
  synopsis: "Dans un monde où les gobelins terrorisent les villageois, une prêtresse rejoint un guerrier mystérieux : Goblin Slayer, obsédé par leur extermination.",
  reviewHtml: `<p>Goblin Slayer est une série qui a fait beaucoup parler à sa sortie, et pas toujours pour les bonnes raisons. Kumo Kagyu a créé un dark fantasy résolument brutal, dont le premier chapitre est l'un des plus violents et dérangeants du genre. Ceux qui passent ce cap découvrent quelque chose de plus nuancé.</p><p>Le Goblin Slayer lui-même est un personnage fascinant, un homme traumatisé par un massacre dans son enfance, entièrement consumé par une obsession : tuer des gobelins. Uniquement des gobelins. Sa rigidité monomaniaques, son pragmatisme froid, et les fissures occasionnelles dans son armure émotionnelle en font un protagoniste bien plus intéressant que la moyenne du fantasy.</p><p>La série explore intelligemment ce que le genre heroic fantasy occulte habituellement, les aventuriers débutants qui meurent bêtement, les créatures "faibles" qui sont redoutables en nombre, la réalité violente d'un monde médiéval fantastique. Cette désacralisation est sa force principale.</p><p>Goblin Slayer n'est pas pour tout le monde, le contenu est explicitement sombre et violent. Mais pour ceux qui cherchent un dark fantasy sérieux avec un protagoniste original, c'est une série qui mérite d'être jugée sur l'ensemble de son œuvre.</p>`,
  stars: 3,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Goblin+Slayer", logo: "" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=goblin+slayer+tome", logo: "" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=goblin+slayer+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/series/GR1MVZ6L2/goblin-slayer", logo: "" }
  ],
  live: [],
  published: true,
  status: "en cours",
  volumes: 16,
  chapters: 80,
  year: 2016,
  author: "Kumo Kagyu",
},
{
  slug: "grimgar",
  pros: ["Isekai le plus honnête émotionnellement","Atmosphère mélancolique unique","Vraies conséquences de la mort sur le groupe"],
  cons: ["Rythme très lent par design","Peu d'action spectaculaire","Peut frustrer les lecteurs de manhwa de progression"],
  addedAt: "2025-12-07",
  title: "Grimgar, le Monde des Cendres et de Fantaisie",
  category: "manga",
  tags: "Fantasy · Monde parallèle · Aventure",
  cover: "/grimgar.jpg",
  synopsis: "Des individus se réveillent dans un monde inconnu sans souvenir, forcés de s’adapter, lutter et trouver leur place au sein d’une communauté d’aventuriers.",
  reviewHtml: `<p>Grimgar of Fantasy and Ash est l'anti-isekai par excellence. Là où la plupart des séries du genre propulsent leur héros vers la puissance, Ao Jyumonji s'intéresse à ce que ressentent vraiment des gens ordinaires transportés dans un monde de RPG, la peur, la fatigue, le deuil, l'incertitude permanente.</p><p>Le groupe de protagonistes est faible. Vraiment faible. Tuer un simple gobelin leur prend plusieurs chapitres d'effort, de stratégie et de risque. Cette lenteur délibérée est ce qui rend Grimgar unique, on ressent le danger, on comprend pourquoi chaque victoire compte, et quand un personnage meurt, l'impact émotionnel est réel parce que la série a pris le temps de le construire.</p><p>L'atmosphère de Grimgar est mélancolique et contemplative. Les moments de pause, les repas partagés, les conversations du soir, les petits rituels du quotidien, ont autant d'importance que les combats. C'est un isekai pour ceux qui voudraient que le genre prenne le temps de respirer.</p><p>La progression narrative est lente par design, ce qui peut frustrer les lecteurs habitués aux manhwas de système. Mais pour une expérience isekai émotionnellement honnête et atmosphériquement riche, Grimgar est irremplaçable.</p>`,
  stars: 3,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Grimgar+fantasy", logo: "" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=grimgar+tome", logo: "" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=grimgar+manga", logo: "" }
  ],
  streaming: [],  // anime disponible mais dépend des régions
  live: [],
  published: false,
},
{
  slug: "no-game-no-life",
  pros: ["Duo Sora/Shiro iconique et mémorable","Résolutions de jeux brillantes et satisfaisantes","Énergie visuelle unique"],
  cons: ["Hiatus depuis des années","Histoire probablement inachevée","Fan service parfois excessif"],
  addedAt: "2025-12-08",
  title: "No Game No Life",
  category: "manga",
  tags: "Isekai · Jeux · Fantaisie",
  cover: "/no-game-no-life.jpg",
  synopsis: "Sora et Shiro, fratrie géniale des jeux, sont invoqués dans Disboard, un monde où tout est déterminé par les jeux. Ils visent à défier les dieux du nouveau monde.",
  reviewHtml: `<p>No Game No Life est le fantasme ultime du gamer transporté dans un autre monde, exécuté avec une intelligence et une énergie visuelle qui le distinguent nettement de la masse des isekai. Yuu Kamiya a créé deux protagonistes iconiques : Sora et Shiro, frère et sœur, génies du jeu incapables de fonctionner dans le monde réel mais invincibles dans celui de Disboard, où tout se règle par le jeu.</p><p>Le concept central est brillant : dans un monde où la guerre est interdite et où tout conflit se résout par des jeux aux règles strictes, l'intelligence et la créativité valent plus que la force. Chaque arc est un tournoi ou un duel où les règles semblent impossibles à contourner, et Sora et Shiro trouvent toujours une solution latérale inattendue. Ces moments de révélation sont parmi les plus satisfaisants du genre.</p><p>Le style visuel, couleurs saturées, compositions dynamiques, est immédiatement reconnaissable et parfaitement adapté à l'énergie de la série. Les échanges entre les personnages sont vifs et souvent drôles.</p><p>La grande frustration : la série est en hiatus depuis des années, et l'histoire reste inachevée. Ce qui existe est excellent, mais s'y plonger c'est accepter de peut-être ne jamais voir la fin.</p>`,
  stars: 3,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=No+Game+No+Life", logo: "" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=no+game+no+life+tome", logo: "" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=no+game+no+life+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/series/GR1NV2LD5/no-game-no-life", logo: "" }
  ],
  live: [],
  published: true,
  status: "pause",
  volumes: 9,
  chapters: 50,
  year: 2013,
  author: "Yū Kamiya",
},
{
  slug: "record-of-ragnarok",
  pros: ["Concept direct et assumé, dieux vs humains légendaires","Chaque combattant développé avec soin","Combats épiques à grande échelle"],
  cons: ["Peu de profondeur narrative en dehors des duels","Résultats de certains combats discutables","Structure très répétitive"],
  addedAt: "2025-12-10",
  title: "Record of Ragnarok",
  category: "manga",
  tags: "Mythologie · Combat · Tournoi",
  cover: "/record-of-ragnarok.jpg",
  synopsis: "Tous les 1000 ans, les dieux décident du sort de l’humanité. 13 duels sont organisés entre dieux et humains pour décider si l’humanité peut survivre.",
  reviewHtml: `<p>Record of Ragnarok a le concept le plus direct du manga de combat : les dieux de toutes les mythologies décident d'exterminer l'humanité. Treize humains légendaires sont sélectionnés pour les affronter en duel. Si l'humanité gagne sept combats, elle survit. Shinya Umemura et Takumi Fukui n'ont pas cherché la subtilité, et c'est exactement ce qui fonctionne.</p><p>Chaque combat est un spectacle à grande échelle mettant en scène des personnages historiques ou mythologiques dans des affrontements titanesques. Lu Bu contre Thor, Adam contre Zeus, Sasaki Kojiro contre Poseidon, chaque duel a son propre ton, ses propres enjeux émotionnels, et son propre dosage entre puissance brute et ingéniosité tactique.</p><p>Ce qui élève la série au-dessus du simple combat de fan service c'est le soin apporté à la caractérisation des combattants. Des personnages comme Adam, Nikola Tesla, ou Sasaki Kojiro sont développés avec une profondeur surprenante pour une série dont le pitch est "dieux vs humains". Le chapitre sur Adam en particulier est l'un des meilleurs du manga d'action récent.</p><p>Record of Ragnarok ne cherche pas à être plus que ce qu'il est, un manga de combats épiques avec un casting légendaire. Il excelle dans cet objectif précis.</p>`,
  stars: 4,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Record+of+Ragnarok", logo: "" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=record+of+ragnarok+tome", logo: "" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=record+of+ragnarok+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/series/GRK9ZNXJQ/record-of-ragnarok", logo: "" }
  ],
  live: [],
  published: true,
  status: "en cours",
  volumes: 18,
  chapters: 95,
  year: 2017,
  author: "Shinya Umemura",
},
{
  slug: "chainsaw-man",
  pros: ["Complètement imprévisible, impossible de deviner la suite","Humour noir et violence stylisée parfaitement dosés","Designs de démons iconiques"],
  cons: ["Extrêmement violent et gore","Partie 2 plus lente que la partie 1","Peut dérouter les lecteurs non habitués au style de Fujimoto"],
  addedAt: "2025-12-12",
  title: "Chainsaw Man",
  category: "manga",
  tags: "Shōnen · Démons · Horreur · Action",
  cover: "/chainsaw-man.png",
  synopsis: "Denji fusionne avec Pochita et devient Chainsaw Man pour combattre les démons tout en essayant de mener une vie “normale”.",
  reviewHtml: `<p>Comment résumer Chainsaw Man ? C'est la série qui vous fera rire, pleurer, crier de surprise et fermer le tome en vous demandant ce qui vient de se passer, parfois dans la même page. Tatsuki Fujimoto est un auteur complètement à part, et Chainsaw Man est son œuvre la plus débridée, la plus imprévisible, la plus marquante.</p><p>Denji, mi-humain mi-tronçonneuse, n'a pas de grands idéaux. Il veut juste manger à sa faim, dormir dans un vrai lit, et peut-être toucher une fille. Cette franchise désarmante est la grande force de la série : dans un genre saturé de héros noblement motivés, Denji est rafraîchissant de bêtise sincère. Et pourtant, derrière ce vernis de comédie gore, Fujimoto construit quelque chose de bien plus profond.</p><p>La partie 1 est un feu d'artifice de 97 chapitres sans un seul temps mort. Les designs de démons sont iconiques, les combats défient la physique et le bon sens, et les retournements de situation arrivent quand on les attend le moins. Plusieurs moments resteront gravés longtemps après la lecture.</p><p>Attention : c'est violent, très violent. Mais pour ceux qui se laissent embarquer, Chainsaw Man est une expérience unique que le manga mainstream n'offre nulle part ailleurs.</p>`,
  stars: 4,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Chainsaw+Man", logo: "" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=chainsaw+man+tome", logo: "" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=chainsaw+man+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/series/G6NV7Z5KY/chainsaw-man", logo: "" }
  ],
  live: [],
  published: true,
  status: "en cours",
  volumes: 17,
  chapters: 170,
  year: 2018,
  author: "Tatsuki Fujimoto",
},
{
  slug: "parasyte",
  pros: ["Science-fiction philosophique d'une intelligence rare","Migi, partenaire unique dans le manga","Questions sur l'humanité traitées avec profondeur"],
  cons: ["Dessin daté visuellement","Très court, peut laisser sur sa faim","Fin un peu abrupte"],
  addedAt: "2025-12-14",
  title: "Parasyte",
  category: "manga",
  tags: "Horreur · Psychologie · Aliens",
  cover: "/parasyte.png",
  synopsis: "Un parasite extraterrestre occupe la main droite de Shinichi. Ensemble, ils se battent contre d’autres parasites qui menacent l’humanité.",
  reviewHtml: `<p>Parasyte est un manga des années 90 qui n'a pas pris une ride. Hitoshi Iwaaki a créé une œuvre de science-fiction corporelle d'une intelligence rare, terrifiante, philosophique, et profondément humaine à la fois.</p><p>Shinichi Izumi a la main droite colonisée par un parasite extraterrestre nommé Migi, qui aurait dû prendre son cerveau mais a raté sa cible. Leur cohabitation forcée, un humain et une créature froide et purement rationnelle partageant un corps, est le cœur de la série. Leur relation évolue de la méfiance à quelque chose de plus complexe, et c'est fascinant à observer.</p><p>Parasyte pose des questions que peu de mangas osent : qu'est-ce qui définit l'humanité ? Les humains sont-ils vraiment différents des parasites qui dévorent d'autres espèces ? La violence de la série n'est jamais gratuite, elle sert une réflexion continue sur la nature animale de l'homme et sur ce que signifie avoir de l'empathie.</p><p>Le dessin est daté visuellement, et l'œuvre est courte, 64 chapitres. Mais Parasyte est l'exemple parfait d'un manga qui dit exactement ce qu'il a à dire, sans une page de trop. Un classique absolu du manga de science-fiction.</p>`,
  stars: 5,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Parasyte", logo: "" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=parasyte+tome", logo: "" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=parasyte+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/series/G4V5XW60X/parasyte-the-max", logo: "" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 8,
  chapters: 64,
  year: 1988,
  author: "Hitoshi Iwaaki",
},
{
  slug: "the-god-of-high-school",
  pros: ["Combats parmi les plus spectaculaires du manhwa","Tournoi initial direct et efficace","Designs de personnages mémorables"],
  cons: ["Scénario s'effondre dans la deuxième partie","Mythologie divine confuse","Cohérence narrative sacrifiée pour le spectacle"],
  addedAt: "2025-12-16",
  title: "The God of High School",
  category: "manga",
  tags: "Arts martiaux · Tournoi · Action · Fantasy",
  cover: "/the-god-of-high-school.png",
  synopsis: "Jin Mori participe à un tournoi lycéen mêlant arts martiaux et forces mystiques, face à des adversaires aux pouvoirs surnaturels. Les enjeux sont divins.",
  reviewHtml: `<p>The God of High School est le manhwa de combat pur par excellence. Yongje Park n'essaie pas de révolutionner la narration ou de construire un world-building complexe, il veut juste créer les combats les plus spectaculaires possibles, et dans cet objectif très précis, il réussit brillamment.</p><p>Jin Mori, Han Daewi et Yu Mira, le trio central, forment un groupe attachant et leurs personnalités contrastées créent une dynamique de groupe efficace. Le tournoi de combat qui structure la première partie de la série est simple mais efficace, et chaque combattant rencontré a un style et des motivations suffisamment distinctifs pour marquer.</p><p>Le manhwa change radicalement de registre dans sa seconde moitié en introduisant une mythologie à grande échelle, dieux, pouvoirs divins, enjeux cosmiques, qui divise les lecteurs. Certains apprécient l'ambition de cette expansion. D'autres trouvent que la série perd le charme simple et direct de ses débuts de tournoi de quartier.</p><p>Les illustrations de Park sont dynamiques et lisibles même dans les séquences d'action les plus chargées, une compétence rare. Pour un manhwa d'action pure, The God of High School est difficile à battre.</p>`,
  stars: 4,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=The+God+of+High+School", logo: "" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=the+god+of+high+school+tome", logo: "" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=the+god+of+high+school+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/series/G4V5XW4QZ/the-god-of-high-school", logo: "" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 15,
  chapters: 570,
  year: 2011,
  author: "Yongje Park",
},
{
  slug: "akatsuki-no-yona",
  pros: ["Arc de transformation de Yona parmi les meilleurs du shōjo","Hak, love interest exemplaire","Thèmes politiques traités avec maturité"],
  cons: ["Rythme très lent dans certains arcs","Publication irrégulière","Progression romantique frustrante"],
  addedAt: "2025-12-18",
  title: "Yona, Princesse de l’Aube",
  category: "manga",
  tags: "Aventure · Romance · Fantasy · Voyage",
  cover: "/akatsuki-no-yona.jpg",
  synopsis: "Princesse Yona voit son royaume basculer dans le chaos. Trahie, elle s’exile et part en quête des quatre dragons légendaires pour reconquérir son trône.",
  reviewHtml: `<p>Akatsuki no Yona est l'une des meilleures séries shōjo d'action de ces vingt dernières années. Mizuho Kusanagi a créé une héroïne dont l'arc de transformation, de princesse naïve et gâtée à chef de guerre déterminée, est l'un des plus satisfaisants du manga féminin.</p><p>Yona commence la série comme une adolescente dont le seul souci est ses cheveux roux. Après le meurtre de son père et la trahison de l'homme qu'elle aimait, elle doit survivre, trouver des alliés, et décider de ce qu'elle veut vraiment faire de sa vie et de son royaume. Cette évolution est progressive, crédible, et émotionnellement puissante.</p><p>Les Quatre Dragons, guerriers légendaires que Yona doit rassembler, sont une galerie de personnages aux backstories touchantes. Hak, son garde du corps dévoué, est l'un des meilleurs love interests du shōjo, présent sans être étouffant, fort sans être dominant, drôle sans être superficiel.</p><p>La série aborde des thèmes politiques sérieux, inégalités sociales, corruption, coût de la guerre, avec une maturité rare pour le genre. Akatsuki no Yona est une lecture incontournable pour tous les fans de fantasy historique et de développement de personnage.</p>`,
  stars: 3,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Yona", logo: "" },
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=yona+tome", logo: "" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=yona+princesse+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/series/G69V7G5YZ/yona-of-the-dawn", logo: "" }
  ],
  live: [],
  published: false,
},
{
  slug: "btooom",
  pros: ["Mécanique de bombes tactiquement intéressante","Tension de survie bien maintenue","Backstories des participants bien construites"],
  cons: ["Certains arcs tardifs moins efficaces","Fin décevante pour certains lecteurs","Protagoniste pas toujours sympathique"],
  addedAt: "2025-12-19",
  title: "Btooom!",
  category: "manga",
  tags: "Survie · Battle royale · Jeu vidéo",
  cover: "/btooom.jpg",
  synopsis: "Ryōta Sakamoto, joueur expert de Btooom!, se réveille sur une île transformée en champ de bataille où chacun doit tuer pour survivre à coups de bombes.",
  reviewHtml: `<p>Btooom! est un survival game manga qui utilise les codes du genre avec une efficacité solide. Junya Inoue a créé un thriller d'action dont le hook, des gens piégés sur une île et forcés de se battre avec des bombes, est simple et efficace. La spécialité des BIM, les différents types de bombes disponibles, donne aux affrontements une dimension tactique intéressante.</p><p>Ryōta Sakamoto, champion de jeu vidéo inadapté socialement, est un protagoniste dont l'évolution de gamer passif à survivant actif est bien gérée. Sa relation avec Himiko, qui lui est d'abord hostile pour de bonnes raisons, forme le cœur émotionnel de la série.</p><p>Btooom! est à son meilleur dans ses premiers arcs, où la tension de survie est maintenue et où les motivations des participants à ce jeu meurtrier restent mystérieuses. La série explore intelligemment la question de qui mérite vraiment d'être là, chaque participant a été "nominé" par quelqu'un de son entourage, ce qui soulève des questions sur les relations humaines en société.</p><p>Un survival game solide et bien rythmé, idéal pour les fans du genre qui cherchent une série complète.</p>`,
  stars: 3,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=btooom+tome", logo: "" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=btooom+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?from=search&q=Btooom", logo: "" }
  ],
  live: [],
  published: false,
},
{
  slug: "cage-of-eden",
  pros: ["Mystère central intrigant et bien dosé","Galerie de survivants aux compétences variées","Rythme haletant dans les meilleurs arcs"],
  cons: ["Fin jugée précipitée","Certaines résolutions de mystères décevantes","Fan service parfois mal placé"],
  addedAt: "2025-12-21",
  title: "Cage of Eden",
  category: "manga",
  tags: "Survie · Île mystérieuse · Aventure",
  cover: "/cage-of-eden.jpg",
  synopsis: "Des lycéens échouent sur une île peuplée de créatures préhistoriques. Pour survivre, ils doivent s’unir et percer le mystère du lieu.",
  reviewHtml: `<p>Cage of Eden est un survival manga à la Lost, des lycéens dont l'avion s'écrase sur une île mystérieuse peuplée d'animaux préhistoriques supposément éteints. Yoshinobu Yamada a créé une série de survie qui mélange action, mystère et science avec une ambition narrative évidente.</p><p>Akira Sengoku, protagoniste pas particulièrement exceptionnel mais déterminé à protéger les autres, mène un groupe hétérogène dont les dynamiques, alliances, trahisons, romances sous stress de survie, constituent le tissu narratif de la série. La galerie de personnages est l'une des forces de Cage of Eden : chaque survivant a ses propres compétences et ses propres failles.</p><p>Le mystère central, pourquoi cette île existe-t-elle, qui y a amené ces animaux préhistoriques, que cachent les structures que les survivants découvrent, maintient un suspens efficace tout au long de la série. Yamada parsème des indices et des révélations avec un rythme bien calibré.</p><p>La fin a été jugée précipitée par une partie des lecteurs. Mais Cage of Eden offre une expérience de survival haletante avec suffisamment de profondeur narrative pour dépasser le simple divertissement d'action.</p>`,
  stars: 3,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=cage+of+eden+manga", logo: "" }
  ],
  streaming: [],
  published: false,
},
{
  slug: "deadman-wonderland",
  pros: ["Univers carcéral dystopique très original","Shiro, l'un des meilleurs mystères du manga d'action","Combats sanguinaires et inventifs"],
  cons: ["Série raccourcie contre la volonté des auteurs","Plusieurs intrigues inachevées","Fin précipitée et frustrante"],
  addedAt: "2025-12-23",
  title: "Deadman Wonderland",
  category: "manga",
  tags: "Prison · Pouvoirs · Survival Game",
  cover: "/deadman-wonderland.jpg",
  synopsis: "Accusé à tort du massacre de sa classe, Ganta est envoyé dans une prison-parc d’attractions où les détenus s’affrontent à mort. Il y découvre un mystérieux pouvoir du sang.",
  reviewHtml: `<p>Deadman Wonderland est un manga d'action psychologique qui n'hésite pas à aller dans des territoires sombres. Jinsei Kataoka et Kazuma Kondou ont créé un univers carcéral dystopique, une prison-parc d'attractions où les détenus risquent leur vie pour divertir le public, avec une créativité morbide assumée.</p><p>Ganta Igarashi, condamné à tort pour le massacre de sa classe, découvre dans cette prison des individus capables de manipuler leur propre sang comme arme. Le système des Branches of Sin, ces pouvoirs sanguinaires aux formes variées, crée des combats visuellement originaux et souvent intenses.</p><p>Shiro, la mystérieuse albinos qui semble connaître Ganta depuis toujours, est le personnage le plus fascinant de la série. Sa véritable nature et son lien avec Ganta constituent l'un des meilleurs mystères du manga d'action de sa génération.</p><p>Deadman Wonderland souffre d'une fin précipitée, la série a été raccourcie contre la volonté des auteurs, ce qui laisse certaines intrigues inachevées. Mais pour son atmosphère unique, ses personnages mémorables, et son univers carcéral inventif, c'est une série qui vaut le détour.</p>`,
  stars: 3,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=deadman+wonderland+tome", logo: "" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=deadman+wonderland+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Deadman+Wonderland", logo: "" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 13,
  chapters: 58,
  year: 2007,
  author: "Jinsei Kataoka",
},
{
  slug: "eden-zero",
  pros: ["World-building spatial plus ambitieux que Fairy Tail","Système Ether Gear cohérent et varié","Personnages bien développés"],
  cons: ["Trop similaire à Fairy Tail dans sa structure","Certains lecteurs de Mashima en attente de plus d'originalité","Arcs de début génériques"],
  addedAt: "2025-12-25",
  title: "Edens Zero",
  category: "manga",
  tags: "Sci-fi · Aventure · Espace",
  cover: "/eden-zero.jpg",
  synopsis: "Shiki, élevé par des robots sur l’île Granbell, rejoint Rebecca et Happy pour explorer l’espace à la recherche de la déesse Mère et découvrir l’amitié.",
  reviewHtml: `<p>Edens Zero est la troisième grande saga de Hiro Mashima après Rave Master et Fairy Tail, et elle bénéficie de toute l'expérience accumulée. Dans un univers de science-fiction spatiale où des humains et des robots cohabitent, Shiki Granbell quitte sa planète natale pour explorer le cosmos et trouver la déesse Cosmos, Rebecca.</p><p>Mashima a gardé ses forces, personnages attachants, moments d'amitié chaleureux, combats dynamiques, tout en développant un world-building plus ambitieux que ses œuvres précédentes. L'univers interstellaire d'Edens Zero permet une variété de décors et de cultures qui renouvelle l'intérêt arc après arc.</p><p>Le système des Ether Gear, des pouvoirs liés à différentes forces cosmiques, est plus cohérent et inventif que la simple magie de Fairy Tail. Les Quatre Shining Stars, les alliées androïdes de Shiki, sont des personnages bien construits dont les arcs individuels approfondissent progressivement la mythologie de la série.</p><p>Edens Zero assume ses similarités avec Fairy Tail, même structure de guilde, même dynamique de nakama, mais les transcende par des enjeux plus grands et un ton plus équilibré entre légèreté et gravité. Pour les fans de Mashima, c'est sa meilleure œuvre.</p>`,
  stars: 3,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Edens+Zero", logo: "" },
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=edens+zero+tome", logo: "" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=edens+zero+manga", logo: "" }
  ],
  streaming: [
    { name: "Netflix", url: "https://www.netflix.com/search?q=Edens%20Zero", logo: "" }
  ],
  live: [],
  published: true,
  status: "en cours",
  volumes: 32,
  chapters: 300,
  year: 2018,
  author: "Hiro Mashima",
},
{
  slug: "fate-stay-night",
  pros: ["Concept de Guerre du Graal brillant et fertile","Servants développés avec une vraie profondeur mythologique","Gilgamesh, antagoniste mémorable"],
  cons: ["Dense et exigeant pour les nouveaux venus","Plusieurs routes nécessaires pour tout comprendre","Rythme parfois lent"],
  addedAt: "2025-12-27",
  title: "Fate/Stay Night",
  category: "manga",
  tags: "Magie · Combat · Guerre du Graal",
  cover: "/fate-stay-night.png",
  synopsis: "Shirō Emiya est entraîné dans la Guerre du Saint Graal, un tournoi où mages et esprits héroïques s’affrontent pour un souhait ultime.",
  reviewHtml: `<p>Fate/stay night est le point d'entrée dans l'un des univers fictifs les plus expansifs et les plus complexes du manga et de l'animation japonaise. Le concept central, une guerre secrète entre mages qui invoquent des héros légendaires comme Servants pour combattre en leur nom, est l'une des idées les plus fertiles de la fantasy moderne.</p><p>Shirou Emiya, forgeron amateur de magie avec un idéalisme naïf mais sincère, est invoqué dans la Cinquième Guerre du Graal quasi malgré lui. Sa relation avec Saber, le Roi Arthur incarné en guerrière, est le cœur émotionnel de la route Fate, la première des trois histoires que propose l'œuvre originale.</p><p>Ce qui distingue Fate/stay night c'est la profondeur de ses Servants. Chaque héros invoqué, Hercule, Médée, Gilgamesh, est réinterprété avec soin, ses mythes originaux revisités de façon cohérente avec sa personnalité dans la série. Gilgamesh en particulier est l'un des antagonistes les mieux écrits du medium.</p><p>L'adaptation manga capture l'essentiel de l'œuvre originale. Une porte d'entrée idéale vers un univers qui occupera le lecteur curieux pendant des années.</p>`,
  stars: 3,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=fate+stay+night+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Fate", logo: "" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 20,
  chapters: 149,
  year: 2006,
  author: "Type-Moon",
},
{
  slug: "goblin-nightmare",
  pros: ["Perspective originale du point de vue des gobelins","Survie dans un monde hostile bien rendue","Déconstruction intéressante du heroic fantasy"],
  cons: ["Univers peu développé","Personnages difficiles à mémoriser","Peu reconnu et donc peu de ressources"],
  addedAt: "2025-12-29",
  title: "Goblin Nightmare",
  category: "manga",
  tags: "Dark Fantasy · Gobelins · Vengeance",
  cover: "/goblin-nightmare.jpg",
  synopsis: "Dans un univers ravagé par les gobelins, un guerrier maudit poursuit une vendetta sans fin. Chaque village libéré est une étape vers sa propre damnation.",
  reviewHtml: `<p>Goblin Nightmare est une série de dark fantasy qui explore le monde du point de vue des créatures habituellement reléguées au rang de chair à canon dans les récits heroic fantasy. Ce renversement de perspective, suivre les gobelins plutôt que les héros qui les combattent, est le concept central qui distingue la série.</p><p>L'univers est brutal et sans romantisme, la survie dans un monde où les humains et autres races plus puissantes traitent les gobelins comme des nuisibles à éliminer crée une tension permanente et des enjeux immédiats. Les protagonistes gobelins ont des motivations simples et claires qui les rendent accessibles malgré leur nature de "monstres".</p><p>Goblin Nightmare est une série de niche qui intéressera particulièrement les fans de dark fantasy qui apprécient les récits centrés sur les marges et les perspectives inhabituelles. Elle ne révolutionne pas le genre mais occupe un espace narratif rarement exploré.</p>`,
  stars: 2,
  shops: [
    { name: "Amazon", url: "#", logo: "" }
  ],
  streaming: [],
  published: false,
},
{
  slug: "highschool-dxd",
  pros: ["Système de puissances angélique/démoniaque élaboré","Arcs d'action tardifs genuinement intenses","Issei attachant malgré les clichés"],
  cons: ["Fan service omniprésent et souvent mal placé","Clairement pas pour tous les publics","Difficile à recommander sans mettre en garde"],
  addedAt: "2025-12-30",
  title: "High School DxD",
  category: "manga",
  tags: "Écchi · Démon · Lycée · Action",
  cover: "/highschool-dxd.jpg",
  synopsis: "Issei Hyoudou est tué par une fille lors de son premier rendez-vous puis ressuscité en démon par Rias Gremory. Il entre alors dans un monde de démons et d’anges déchus.",
  reviewHtml: `<p>High School DxD est la série ecchi-action la plus populaire de sa génération, et sa réputation, méritée, de manga à fanservice intense occulte souvent ses qualités réelles. Ichiei Ishibumi a construit, derrière l'abondance de scènes provocatrices, un système de pouvoirs et une mythologie angélique-démoniaque étonnamment élaborés.</p><p>Issei Hyodo, lycéen ressuscité en diable après avoir été tué par une ange déchue, développe un pouvoir unique lié à sa nature de "Dragon Dieu Rouge". Sa progression, de perdant absolu à combattant d'élite, suit la formule shōnen classique mais avec une énergie et un humour qui lui donnent son propre charme.</p><p>Ce qui surprend les lecteurs qui dépassent la surface c'est la qualité des arcs d'action tardifs. Les batailles contre les antagonistes majeurs atteignent une échelle épique et une intensité émotionnelle genuines. Les personnages féminins, au-delà de leur rôle de fanservice, ont des motivations et des arcs narratifs réels.</p><p>High School DxD n'est clairement pas une série pour tout le monde. Mais pour ceux qui acceptent son contrat, beaucoup de fanservice, beaucoup d'action, humour décomplexé, c'est un divertissement généreux qui va plus loin qu'il n'y paraît.</p>`,
  stars: 2,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=high+school+dxd+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=High%20School%20DxD", logo: "" }
  ],
  live: [],
  published: false,
},
{
  slug: "isekai-cheat-magician",
  pros: ["Power fantasy assumé et honnête","Duo Taichi/Rin équilibré","Divertissement sans prise de tête"],
  cons: ["Aucune originalité narrative","Antagonistes très peu développés","Oubliable malgré sa bonne humeur"],
  addedAt: "2026-01-01",
  title: "Isekai Cheat Magician",
  category: "manga",
  tags: "Isekai · Magie · Duo",
  cover: "/isekai-cheat-magician.png",
  synopsis: "Taichi et Rin sont transportés dans un autre monde et découvrent des pouvoirs magiques extraordinaires. Ils doivent apprendre à les maîtriser et à survivre aux complots.",
  reviewHtml: `<p>Isekai Cheat Magician est un isekai qui assume pleinement sa nature de power fantasy sans complexes. Taichi et Rin sont transportés dans un monde fantastique et découvrent rapidement qu'ils ont des capacités magiques hors norme, Taichi en magie physique et combat, Rin en magie élémentaire. Leur progression vers le sommet de la hiérarchie magique est directe et efficace.</p><p>La série ne cherche pas à surprendre ni à subvertir les attentes du genre. Elle offre exactement ce qu'elle promet : des protagonistes sympathiques qui deviennent rapidement puissants, des antagonistes clairement identifiables, et des combats où les héros gagnent de façon satisfaisante. Pour un certain public, c'est précisément ce qui est recherché.</p><p>Le duo Taichi-Rin fonctionne bien, leur complicité préexistante et leur évolution parallèle créent une dynamique plus équilibrée que les isekai centrés sur un seul protagoniste masculin. Les personnages secondaires, notamment les membres de leur guilde d'aventuriers, ajoutent une chaleur qui empêche la série de paraître froide malgré les power-ups constants.</p><p>Isekai Cheat Magician est un isekai de confort, pas révolutionnaire, mais honnête dans ce qu'il offre.</p>`,
  stars: 2,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=isekai+cheat+magician+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Isekai+Cheat+Magician", logo: "" }
  ],
  live: [],
  published: false,
},
{
  slug: "kaiju-no-8",
  pros: ["Protagoniste adulte rare et crédible dans le shōnen","Système de combat inventif et évolutif","Designs de kaiju mémorables"],
  cons: ["En cours, donc impossible de juger la conclusion","Certains personnages secondaires encore peu exploités","Rythme parfois trop rapide"],
  addedAt: "2026-01-03",
  title: "Kaiju No. 8",
  category: "manga",
  tags: "Monstres · Armée · Transformation · Action",
  cover: "/kaiju-no-8.jpg",
  synopsis: "Kafka Hibino, employé du nettoyage des Kaijus, rêve d’intégrer les Forces de Défense. Après un incident, il obtient le pouvoir de se transformer en monstre et décide de combattre pour protéger l’humanité.",
  reviewHtml: `<p>Kaiju No. 8 est l'une des meilleures nouvelles séries shōnen de ces dernières années. Naoya Matsumoto a créé un manga de kaiju dont la prémisse, un homme de 32 ans qui rêve depuis toujours d'intégrer les forces de défense anti-monstres se transforme involontairement en kaiju, est exploitée avec un soin et une progression exemplaires.</p><p>Kafka Hibino est un protagoniste adulte, ce qui est rare dans le shōnen, et cette maturité donne à ses motivations et à ses relations une crédibilité que les héros adolescents peinent souvent à atteindre. Sa loyauté envers Mina Ashiro, commandante des forces de défense et amie d'enfance, est le fil émotionnel le plus touchant de la série.</p><p>Le système de combat, les soldats absorbent et utilisent les pouvoirs des kaiju vaincus, est inventif et crée des dynamiques d'équipe intéressantes. Les designs des kaiju sont mémorables et variés, et les combats allient spectacle visuel et enjeux émotionnels avec une régularité rassurante.</p><p>Kaiju No. 8 est en cours de publication et monte en puissance arc après arc. L'une des meilleures séries en cours du Weekly Shōnen Jump.</p>`,
  stars: 4,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Kaiju+No+8", logo: "" },
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=kaiju+no+8+tome", logo: "" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=kaiju+no+8", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Kaiju%20No.%208", logo: "" }
  ],
  live: [],
  published: true,
  status: "en cours",
  volumes: 12,
  chapters: 120,
  year: 2021,
  author: "Naoya Matsumoto",
},
{
  slug: "kengan-ashura",
  pros: ["Combats de MMA les plus réalistes et élaborés du manga","Chaque combattant adverse mémorable et bien développé","Artwork exceptionnel dans les scènes de combat"],
  cons: ["Prémisse d'entreprises qui se battent difficile à prendre au sérieux","Peu de développement en dehors des combats","Personnage principal un peu transparent"],
  addedAt: "2026-01-05",
  title: "Kengan Ashura",
  category: "manga",
  tags: "Combat · Tournoi · Entreprises",
  cover: "/kengan-ashura.jpg",
  synopsis: "Tokita Ohma participe à des combats clandestins où les entreprises engagent des combattants pour régler leurs différends. Chaque affrontement est un duel de styles et de stratégies.",
  reviewHtml: `<p>Kengan Ashura est le manga de combat de MMA/arts martiaux le plus sérieux et le plus élaboré du marché. Yabako Sandrovich a créé un univers où les grandes entreprises japonaises résolvent leurs conflits commerciaux par des combats clandestins entre lutteurs d'élite. Ce prémisse absurde est traité avec un deadpan parfait.</p><p>Tokita Ohma, combattant mystérieux engagé par un homme d'affaires ordinaire, est un protagoniste dont le passé et les motivations se dévoilent progressivement avec soin. Mais la vraie force de Kengan Ashura c'est son tournoi, chaque combattant adverse est développé avec un style martial unique, une philosophie propre, et des motivations qui rendent chaque duel plus qu'un simple concours de force.</p><p>Le dessin de Daromeon pour les séquences de combat est exceptionnel, les mouvements sont précis, lisibles, et les techniques martiales semblent réelles et documentées. L'escalade des affrontements vers le tournoi final maintient une tension constante.</p><p>Kengan Ashura est suivi de Kengan Omega qui continue l'histoire avec le même soin. Pour les amateurs de manga de combat sérieux et bien construit, c'est une référence absolue du genre.</p>`,
  stars: 4,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=kengan+ashura+manga", logo: "" }
  ],
  streaming: [
    { name: "Netflix", url: "https://www.netflix.com/search?q=Kengan%20Ashura", logo: "" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 27,
  chapters: 236,
  year: 2012,
  author: "Yabako Sandrovich",
},
{
  slug: "kenshin",
  pros: ["Kenshin, l'un des personnages les plus iconiques du manga","Arc Kyoto avec Shishio parmi les meilleurs du genre","Thème de la rédemption traité avec profondeur"],
  cons: ["Fin originale inégale","Réputation ternie par les problèmes de l'auteur","Dernier arc moins fort que le reste"],
  addedAt: "2026-01-07",
  title: "Kenshin le Vagabond",
  category: "manga",
  tags: "Samouraï · Historique · Rédemption",
  cover: "/kenshin.jpg",
  synopsis: "Ancien assassin surnommé Battosai, Kenshin parcourt le Japon pour expier ses crimes. Il protège les innocents avec un sabre à lame inversée.",
  reviewHtml: `<p>Rurouni Kenshin est un classique du manga historique d'action qui a défini l'esthétique du samouraï repentant pour toute une génération. Nobuhiro Watsuki a créé en Himura Kenshin l'un des personnages les plus iconiques du shōnen, un assassin légendaire de l'ère Bakumatsu qui a juré de ne plus tuer et porte un sabre inversé pour tenir cette promesse.</p><p>La tension centrale de la série, un homme capable d'une violence absolue qui choisit chaque jour de ne pas l'exercer, est la source de toute sa profondeur émotionnelle. Kenshin est doux, presque enfantin dans sa vie quotidienne, mais les moments où son passé resurgit révèlent quelqu'un de bien plus complexe et meurtri.</p><p>L'arc Kyoto, avec Makoto Shishio comme antagoniste, est l'un des meilleurs arcs du manga des années 90. Shishio, lui aussi assassin du Bakumatsu, brûlé et abandonné par le gouvernement qu'il servait, est le miroir le plus sombre de Kenshin. Leur confrontation est mémorable.</p><p>La fin originale de la série a été jugée inégale, et les problèmes personnels de Watsuki ont terni la réputation de l'auteur. Mais Rurouni Kenshin comme œuvre reste un monument du manga historique d'action.</p>`,
  stars: 4,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=kenshin+tome", logo: "" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=kenshin+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Kenshin", logo: "" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 28,
  chapters: 255,
  year: 1994,
  author: "Nobuhiro Watsuki",
},
{
  slug: "kings-game",
  pros: ["Tension de survie immédiate et efficace","Ordres du roi inventifs et cruels","Flashbacks sur la première expérience de Nobuaki intenses"],
  cons: ["Escalade artificielle dans les arcs tardifs","Résolution divisive","Certains personnages peu développés avant leur mort"],
  addedAt: "2026-01-09",
  title: "King’s Game",
  category: "manga",
  tags: "Survie · Jeu mortel · Lycée",
  cover: "/kings-game.jpg",
  synopsis: "Une classe reçoit des ordres d’un mystérieux ‘Roi’. Chaque ordre doit être exécuté sous peine de mort. Nobuaki tente de briser la malédiction du jeu.",
  reviewHtml: `<p>King's Game est un thriller de survie scolaire qui mise tout sur son concept : une classe entière reçoit des ordres d'un "roi" mystérieux, et quiconque désobéit meurt. La tension est immédiate et le rythme effréné.</p><p>Nobuaki Kanazawa a déjà survécu à un King's Game dans son ancienne école, ce passé traumatique qu'il révèle progressivement donne à sa résistance aux règles du jeu une profondeur que les autres personnages n'ont pas. Les flashbacks sur sa première expérience sont souvent plus intenses que le présent narratif.</p><p>King's Game fonctionne comme un thriller de haute tension dans ses meilleurs moments, les ordres du roi sont inventifs et cruels, les dilemmes moraux auxquels sont confrontés les élèves sont genuinement difficiles, et les morts ont un impact réel. La série ne ménage pas ses personnages.</p><p>Le défaut principal est une tendance à l'escalade qui peut sembler artificielle dans les arcs tardifs, et une résolution qui divise. Mais pour les fans de survival horror scolaire à l'ambiance oppressante, King's Game est l'une des propositions les plus directes et les plus efficaces du genre.</p>`,
  stars: 2,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=king%27s+game+manga", logo: "" }
  ],
  streaming: [],
  published: false,
},
{
  slug: "magister-negi-magi",
  pros: ["Évolution de registre de harem à saga épique unique","Gestion d'un casting de 31 personnages remarquable","Système de combat Pactio très inventif"],
  cons: ["Départ très lent et comédie légère qui peut décourager","Très long avant d'atteindre les arcs sérieux","Fin bâclée par l'éditeur"],
  addedAt: "2026-01-10",
  title: "Negima! Magister Negi Magi",
  category: "manga",
  tags: "Magie · Comédie · École",
  cover: "/negima.jpg",
  synopsis: "Negi Springfield, magicien de 10 ans, devient professeur d’une classe de 31 filles dans un collège japonais tout en poursuivant ses études de magie et ses missions secrètes.",
  reviewHtml: `<p>Negima! est une série de Ken Akamatsu, auteur de Love Hina, qui commence comme une comédie de harem scolaire avant de se transformer progressivement en manga d'action magique épique. Cette évolution de registre est l'une des plus spectaculaires de l'histoire du shōnen.</p><p>Negi Springfield, sorcier gallois de dix ans nommé professeur dans un lycée de filles japonaises, est au départ un prétexte à situations comiques. Mais Akamatsu a des ambitions narratives réelles, et à mesure que la mythologie du monde magique se développe et que les enjeux s'élèvent, Negima! devient une saga d'aventure et de combats d'une ampleur inattendue.</p><p>La galerie des 31 élèves de la classe 2-A est l'une des plus grandes de tout le manga, et Akamatsu parvient à donner à chacune une personnalité distincte et des moments de développement propres. La gestion de ce casting XXL est une performance narrative en soi.</p><p>Le système de combat, les Pactio entre Negi et ses élèves, la magie de combat, devient de plus en plus sophistiqué et inventif dans les arcs tardifs. Negima! est une série qui se bonifie avec chaque tome. Une underrated classic.</p>`,
  stars: 3,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=negima+manga", logo: "" }
  ],
  streaming: [],
  published: false,
},
{
  slug: "magi",
  pros: ["Thèmes politiques adultes rares dans le shōnen","Univers inspiré des Mille et Une Nuits très riche","Judal, antagoniste complexe et fascinant"],
  cons: ["Certains arcs géopolitiques très denses","Nombreux personnages difficiles à suivre","Fin un peu précipitée"],
  addedAt: "2026-01-12",
  title: "Magi: The Labyrinth of Magic",
  category: "manga",
  tags: "Aventure · Magie · Mille et une nuits",
  cover: "/magi.jpg",
  synopsis: "Aladdin et Alibaba explorent des donjons mystérieux remplis de trésors et de djinns. Leurs choix influenceront l’équilibre du monde.",
  reviewHtml: `<p>Magi : The Labyrinth of Magic est une aventure de fantasy inspirée des Mille et Une Nuits avec une ambition narrative et politique rare dans le shōnen. Shinobu Ohtaka a créé un univers où des donjons mystérieux créés par des mages légendaires abritent des trésors et des djinns, et où la politique mondiale est déterminée par ceux qui en contrôlent les richesses.</p><p>Aladdin, Ali Baba et Morgiana forment un trio central bien équilibré, mais c'est la progression du world-building qui distingue vraiment Magi. La série commence comme une aventure de donjons légère et se développe progressivement en une réflexion sur les systèmes politiques, l'esclavage, le colonialisme et la nature du destin. Cette évolution de registre est gérée avec un soin remarquable.</p><p>Judal, antagoniste principal des premiers arcs, est l'un des personnages les plus complexes moralement du shōnen de sa génération, ni vraiment méchant, ni vraiment héros, conditionné par une enfance qu'on découvre progressivement. Ses scènes avec Aladdin comptent parmi les meilleures de la série.</p><p>Magi est une série qui récompense les lecteurs patients avec un world-building de plus en plus riche et des thèmes adultes traités avec sérieux. Une œuvre ambitieuse.</p>`,
  stars: 4,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=magi+tome", logo: "" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=magi+manga", logo: "" }
  ],
  streaming: [
    { name: "Netflix", url: "https://www.netflix.com/search?q=Magi", logo: "" },
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Magi", logo: "" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 37,
  chapters: 369,
  year: 2009,
  author: "Shinobu Ohtaka",
},
{
  slug: "monster-musume",
  pros: ["Worldbuilding cohérent des contraintes physiques de chaque espèce","Humour généreux et bonne humeur constante","Personnages féminins aux personnalités distinctes"],
  cons: ["Fan service très présent et assumé","Peu de profondeur narrative","Clairement un genre très ciblé"],
  addedAt: "2026-01-14",
  title: "Monster Musume",
  category: "manga",
  tags: "Comédie · Romance · Monstres",
  cover: "/monster-musume.jpg",
  synopsis: "Dans un Japon où humains et créatures mythiques cohabitent, Kimihito se retrouve malgré lui à héberger plusieurs demi-humaines aux caractères bien trempés.",
  reviewHtml: `<p>Monster Musume no Iru Nichijou est le manga de harem de créatures mythologiques, et il embrasse pleinement son concept avec une générosité et un humour qui en font une lecture bien plus divertissante qu'attendu. Okayado a créé un monde où les espèces fantastiques, lamies, harpies, centaures, arachnes, vivent en cohabitation avec les humains dans le cadre d'un programme d'échange culturel.</p><p>Kimihito Kurusu, logeur involontaire de multiples créatures, est un protagoniste dont la patience infinie et la bienveillance sincère envers ses pensionnaires créent des situations comiques régulières. Les créatures elles-mêmes, Miia la lamie jalouse, Papi la harpie enfantine, Centorea la centaure chevaleresque, ont chacune une personnalité distincte et des gags qui leur sont propres.</p><p>Ce qui distingue Monster Musume c'est son worldbuilding cohérent. Les contraintes physiques de chaque espèce, comment une lamie prend un bain, comment une centaure entre dans une maison, comment une sirène se déplace en ville, sont traitées avec une attention au détail qui crée un univers crédible dans son absurdité.</p><p>Pour les fans du genre harem avec une touche de fantasy légère et un humour généreux, Monster Musume est une valeur sûre.</p>`,
  stars: 2,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=monster+musume+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Monster%20Musume", logo: "" }
  ],
  live: [],
  published: false,
},
{
  slug: "overlord",
  pros: ["Inversion brillante du protagoniste omnipotent antagoniste","World-building politique très élaboré","Ainz fascinant dans sa dualité humain/lich"],
  cons: ["Tension dramatique limitée par l'invincibilité d'Ainz","Certains arcs très longs","Difficile à apprécier sans goût pour le genre isekai dark"],
  addedAt: "2026-01-16",
  title: "Overlord",
  category: "manga",
  tags: "Isekai · Guilde · Non-mort",
  cover: "/overlord.png",
  synopsis: "Momonga reste connecté dans le jeu Yggdrasil lors de sa fermeture et se retrouve coincé dans son avatar de seigneur mort-vivant. Il décide d’explorer et de dominer ce nouveau monde.",
  reviewHtml: `<p>Overlord prend le concept isekai et le retourne complètement. Au lieu de suivre un héros qui arrive dans un autre monde et devient progressivement puissant, Ainz Ooal Gown commence déjà comme la créature la plus redoutable de son univers, et la série explore ce que ça signifie d'être un antagoniste omnipotent qui essaie de comprendre ce nouveau monde.</p><p>Cette inversion est la grande force d'Overlord. Ainz n'est pas sympathique au sens traditionnel, il dirige une guilde de monstres maléfiques, ses subordonnés sont fanatiques et terrifiants, et ses "bonnes actions" sont souvent des calculs politiques. Pourtant, on suit son point de vue avec fascination, en partie parce qu'il reste humain dans sa façon de penser malgré son apparence de squelette lich.</p><p>Le world-building est l'un des plus élaborés du genre isekai. Le Nouvel Monde que découvre Ainz est riche, politique, et peuplé de factions complexes. Les arcs qui explorent ce monde du côté des humains ordinaires sont parfois aussi intéressants que ceux centrés sur Ainz.</p><p>Le défaut principal : certains arcs s'étirent en longueur, et les combats manquent de tension puisqu'Ainz est invincible. Mais pour un isekai qui pense en dehors des sentiers battus, Overlord est une référence.</p>`,
  stars: 3,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=overlord+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Overlord", logo: "" },
    { name: "Netflix", url: "https://www.netflix.com/search?q=Overlord", logo: "" }
  ],
  live: [],
  published: true,
  status: "en cours",
  volumes: 16,
  chapters: 75,
  year: 2012,
  author: "Kugane Maruyama",
},
{
  slug: "psycho-pass",
  pros: ["Dystopie Sibyl d'une cohérence et d'une pertinence rares","Akane, héroïne dont l'évolution est exemplaire","Questions sur la surveillance algorithmique très actuelles"],
  cons: ["Dense et exigeant pour les amateurs d'action pure","Adaptation manga moins complète que l'animé","Rythme parfois lent"],
  addedAt: "2026-01-18",
  title: "Psycho-Pass",
  category: "manga",
  tags: "Futur · Thriller · Cyberpunk",
  cover: "/psycho-pass.jpg",
  synopsis: "Dans un futur où la criminalité est prédite par le système Sibyl, Akane Tsunemori rejoint la police et découvre les failles de ce système de justice préventive.",
  reviewHtml: `<p>Psycho-Pass est l'une des meilleures œuvres de science-fiction cyberpunk du manga des années 2010, une adaptation qui rivalise avec son animé d'origine en termes de qualité narrative. L'univers Sibyl, un Japon futur où un système algorithmique évalue en permanence le "coefficient criminel" de chaque citoyen et autorise les arrestations préventives, est l'une des dystopies les plus cohérentes et les plus dérangeantes du genre.</p><p>Akane Tsunemori est une héroïne dont l'évolution, de jeune inspectrice idéaliste à femme qui comprend les contradictions du système qu'elle sert, est traitée avec une subtilité remarquable. Sa relation avec Shinya Kougami, exécuteur aux méthodes discutables, est le cœur émotionnel de la série.</p><p>Les questions que pose Psycho-Pass, peut-on juger une personne avant qu'elle ait commis un crime ? La sécurité vaut-elle la liberté ? Qui contrôle les contrôleurs ?, résonnent avec une acuité particulière dans notre époque de surveillance algorithmique. La série ne donne pas de réponses faciles.</p><p>L'antagoniste Makishima Shōgo est l'un des plus mémorables du manga de SF, un humaniste convaincu que le système Sibyl détruit ce qui fait l'humanité, dont les méthodes criminelles servent une philosophie cohérente. Un manga cyberpunk essentiel.</p>`,
  stars: 4,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=psycho+pass+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Psycho-Pass", logo: "" }
  ],
  live: [],
  published: true,
  status: "en cours",
  volumes: 8,
  chapters: 50,
  year: 2012,
  author: "Midori Goto",
},
{
  slug: "radiant",
  pros: ["Fierté française dans le manga mondial","Thème de la discrimination traité avec sincérité","Univers en constante expansion"],
  cons: ["Encore en développement, difficile de juger l'ensemble","Certains arcs moins inspirés","Parfois en retrait par rapport aux meilleurs shōnen japonais"],
  addedAt: "2026-01-20",
  title: "Radiant",
  category: "manga",
  tags: "Magie · Aventure · Sorciers",
  cover: "/radiant.jpg",
  synopsis: "Seth, un jeune sorcier contaminé par les Némésis, cherche à détruire leur nid d’origine, Radiant, tout en affrontant l’Inquisition et les préjugés.",
  reviewHtml: `<p>Radiant est une fierté du manga franco-japonais, créée par Tony Valente, auteur français, et publiée simultanément en France et au Japon. Cette distinction rare s'accompagne d'une qualité réelle : Radiant est un shōnen de fantasy bien construit qui mérite sa place aux côtés des productions japonaises.</p><p>Seth, sorcier infecté par les Nemesis, des monstres tombés du ciel, cherche Radiant, le lieu d'origine de ces créatures, pour les éradiquer à la source. Sa quête le confronte à une intolérance systémique envers les sorciers dans un monde qui les craint autant qu'il a besoin d'eux. Cette métaphore de la discrimination est l'épine dorsale thématique de la série.</p><p>L'univers de Radiant mélange fantasy, steampunk et influences folkloriques européennes avec une cohérence visuelle agréable. Le dessin de Valente est expressif et dynamique, et ses designs de créatures et d'environnements témoignent d'une vraie créativité.</p><p>Radiant prouve qu'un auteur non-japonais peut maîtriser les codes du shōnen tout en y apportant sa propre sensibilité. Une série à soutenir, et une belle ambassadrice de la bande dessinée française sur la scène internationale.</p>`,
  stars: 3,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Radiant", logo: "" },
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=radiant+tome", logo: "" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=radiant+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Radiant", logo: "" }
  ],
  live: [],
  published: true,
  status: "en cours",
  volumes: 21,
  chapters: 200,
  year: 2013,
  author: "Tony Valente",
},
{
  slug: "rosario-vampire",
  pros: ["Deuxième saison bien plus ambitieuse que la première","Évolution de Tsukune crédible et satisfaisante","Univers paranormal attachant"],
  cons: ["Très ancré dans les clichés du harem scolaire","Première saison légère et générique","Fan service omniprésent"],
  addedAt: "2026-01-21",
  title: "Rosario + Vampire",
  category: "manga",
  tags: "Comédie · Harem · Monstres · Lycée",
  cover: "/rosario-vampire.jpg",
  synopsis: "Tsukune intègre par erreur un lycée pour monstres. Il rencontre Moka, une vampire, et tente de cacher son identité d’humain tout en survivant aux élèves surnaturels.",
  reviewHtml: `<p>Rosario + Vampire est le manga de harem scolaire paranormal par excellence, et il connaît sa fonction parfaitement. Akihisa Ikeda a créé un lycée peuplé de monstres où un humain ordinaire débarque accidentellement et attire inévitablement l'attention de chaque fille de l'école. Le dispositif est éprouvé, et la série l'exploite avec bonne humeur.</p><p>Ce qui distingue Rosario + Vampire de la masse du genre c'est la deuxième saison, Rosario + Vampire II, qui abandonne partiellement le registre comédie légère pour un ton plus sérieux et des enjeux plus élevés. Le développement de Moka et la révélation progressive de sa véritable nature vampirique ajoutent une profondeur inattendue.</p><p>Tsukune, protagoniste humain archétypalement ordinaire, évolue de façon crédible tout au long des deux saisons, sa transformation de garçon passif à quelqu'un capable de protéger ceux qu'il aime est bien menée, même si elle suit la progression shōnen classique.</p><p>Pour les fans du genre harem scolaire avec une touche paranormale, Rosario + Vampire est une valeur sûre, divertissante, généreuse, et plus ambitieuse qu'il n'y paraît dans sa deuxième partie.</p>`,
  stars: 2,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=rosario+vampire+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Rosario%20Vampire", logo: "" }
  ],
  live: [],
  published: false,
},
{
  slug: "seven-deadly-sins",
  pros: ["Meliodas et Elizabeth, romance avec une vraie profondeur","Chacun des sept péchés a sa propre histoire","Arcs d'action épique bien menés"],
  cons: ["Fin précipitée et décevante","Power-ups excessifs dans les arcs tardifs","Certains antagonistes sacrifiés"],
  addedAt: "2026-01-23",
  title: "The Seven Deadly Sins",
  category: "manga",
  tags: "Fantasy · Chevaliers · Péchés capitaux",
  cover: "/seven-deadly-sins.jpg",
  synopsis: "La princesse Elizabeth recherche les Seven Deadly Sins, chevaliers accusés de trahison, pour sauver son royaume. Meliodas, leur chef, cache un passé redoutable.",
  reviewHtml: `<p>Seven Deadly Sins arrive avec un concept accrocheur : sept chevaliers légendaires, chacun incarnant un péché capital, réunis pour sauver un royaume. Nakaba Suzuki construit autour de cette prémisse un manga d'aventure fantaisiste coloré, dynamique, et bourré d'action.</p><p>Meliodas et Elizabeth forment le duo central, et leur relation, dont la vraie nature se révèle progressivement, apporte une dimension émotionnelle qui dépasse le simple shōnen d'action. Les sept péchés eux-mêmes sont des personnages mémorables : Ban l'immortel cynique, King le fée mélancolique, Diane la géante affectueuse, chacun a son histoire et ses motivations propres.</p><p>La série brille dans ses arcs d'action épique et dans ses moments de camaraderie. Le système de pouvoirs, Sacres et capacités uniques, crée des combats variés et spectaculaires. L'escalade des enjeux, passant de la politique du royaume aux menaces démoniaques et divines, est bien gérée sur la majorité de la série.</p><p>La fin est jugée précipitée et décevante par une bonne partie des lecteurs, et certains arcs tardifs souffrent d'une surenchère de power-ups. Mais Seven Deadly Sins reste un manga de fantasy d'aventure solide et divertissant, surtout dans ses deux tiers initiaux.</p>`,
  stars: 4,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Seven+Deadly+Sins", logo: "" },
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=seven+deadly+sins+tome", logo: "" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=seven+deadly+sins+manga", logo: "" }
  ],
  streaming: [
    { name: "Netflix", url: "https://www.netflix.com/search?q=Seven%20Deadly%20Sins", logo: "" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 41,
  chapters: 347,
  year: 2012,
  author: "Nakaba Suzuki",
},
{
  slug: "shaman-king",
  pros: ["Philosophie zen unique dans le shōnen de combat","Yoh, protagoniste atypique et mémorable","Anna, l'un des meilleurs personnages féminins de l'époque"],
  cons: ["Fin originale bâclée avant la version complète","Certains arcs du tournoi longuets","Moins de tension dramatique que dans d'autres séries du genre"],
  addedAt: "2026-01-25",
  title: "Shaman King",
  category: "manga",
  tags: "Esprits · Tournoi · Héritage",
  cover: "/shaman-king.jpg",
  synopsis: "Yoh Asakura, shaman capable de communiquer avec les esprits, participe au Shaman Fight pour devenir le Shaman King et unir le monde des vivants et des morts.",
  reviewHtml: `<p>Shaman King est un classique de son époque, un manga des années 2000 qui a marqué toute une génération avec son univers de chamanes, d'esprits, et de tournoi mondial pour décider qui deviendra le Roi Chamane. Hiroyuki Takei a créé quelque chose d'unique : un shōnen de bataille avec une philosophie profondément zen et une vision du monde apaisée qui contraste avec l'énergie guerrière du genre.</p><p>Yoh Asakura est l'un des protagonistes les plus atypiques du shōnen, paresseux, détendu, indifférent à la gloire, motivé uniquement par le désir de "vivre une vie tranquille". Cette attitude nonchalante cache une profondeur spirituelle réelle, et ses moments de sérieux n'en sont que plus frappants. Anna, sa fiancée autoritaire, est l'un des personnages féminins les plus mémorables du manga de l'époque.</p><p>L'univers de Shaman King, les types de Furyoku, les esprits alliés, la hiérarchie des chamanes, est riche et cohérent. Les adversaires rencontrés au tournoi sont variés et souvent plus complexes moralement qu'il n'y paraît.</p><p>La fin originale avait été précipitée par l'arrêt de la série. La version complète publiée plus tard offre une conclusion plus satisfaisante. Un classique nostalgique qui tient toujours la route.</p>`,
  stars: 4,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Shaman+King", logo: "" },
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=shaman+king+tome", logo: "" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=shaman+king+manga", logo: "" }
  ],
  streaming: [
    { name: "Netflix", url: "https://www.netflix.com/search?q=Shaman%20King", logo: "" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 35,
  chapters: 300,
  year: 1998,
  author: "Hiroyuki Takei",
},
{
  slug: "sk8-the-infinity",
  pros: ["Skateboard rendu avec une énergie visuelle remarquable","Amitié Reki/Langa touchante et bien développée","Adam, antagoniste mémorable et flamboyant"],
  cons: ["Série courte qui laisse certains personnages peu exploités","Certaines courses avec des enjeux peu clairs","Réservé aux amateurs du genre"],
  addedAt: "2026-01-27",
  title: "SK8 the Infinity",
  category: "manga",
  tags: "Skateboard · Compétition · Amitié",
  cover: "/sk8-the-infinity.jpg",
  synopsis: "Reki et Langa participent à des courses de skateboard clandestines appelées ‘S’. Vitesse, style et rivalités s’enchaînent sur les rampes.",
  reviewHtml: `<p>SK8 the Infinity est une série sur le skateboard nocturne clandestin à Okinawa, et elle est bien plus intense et bien plus bien dessinée qu'on pourrait l'attendre. Kenta Shinohara a créé un manga de sport qui capture l'adrénaline et la liberté du skate avec une énergie visuelle remarquable.</p><p>Reki et Langa forment un duo central attachant, le passionné technique qui enseigne et le débutant avec un passé de snowboard qui apprend et dépasse rapidement. Leur amitié, testée par les jalousies et les doutes, est le fil émotionnel le plus fort de la série.</p><p>Les courses de S, le circuit clandestin où les skateurs s'affrontent dans des descentes urbaines nocturnes, sont chorégraphiées avec un sens du mouvement et du danger qui rend chaque duel haletant. Les designs des personnages sont distinctifs et mémorables, et l'antagoniste Adam est l'un des plus flamboyants du manga de sport récent.</p><p>SK8 the Infinity est une série courte et dense qui n'a pas une page en trop. Pour les amateurs de manga de sport avec une esthétique urbaine et des personnages bien écrits, c'est une lecture incontournable.</p>`,
  stars: 2,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=sk8+the+infinity+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=SK8%20the%20Infinity", logo: "" }
  ],
  live: [],
  published: false,
},
{
  slug: "so-im-a-spider-so-what",
  pros: ["Kumoko, l'une des voix les plus drôles de l'isekai","Exploitation créative des mécaniques de RPG","Architecture narrative progressive bien construite"],
  cons: ["Arcs alternatifs humains moins captivants","Peut sembler décousu entre les deux fils narratifs","Très dense à suivre par moments"],
  addedAt: "2026-01-29",
  title: "So I’m a Spider, So What?",
  category: "manga",
  tags: "Isekai · Monstre · Survie",
  cover: "/so-im-a-spider.jpg",
  synopsis: "Une lycéenne se réincarne en araignée dans un donjon. Elle doit survivre, évoluer et comprendre les mystères de ce nouveau monde.",
  reviewHtml: `<p>So I'm a Spider, So What? est l'isekai le plus original de sa vague, parce qu'il ose donner comme protagoniste non pas un humain héroïque mais une araignée de bas niveau qui commence au fond de la hiérarchie des monstres et doit survivre par l'intelligence et l'adaptation. Okina Baba a créé quelque chose de vraiment différent.</p><p>La protagoniste, jamais nommée, simplement "Kumoko" par le fandom, est l'une des voix les plus drôles et les plus attachantes du genre. Son monologue intérieur constant, alternant entre panique existentielle et fierté absurde pour ses petites victoires, crée une dynamique comique qui ne se démode pas. Survivre en tant qu'araignée dans un donjon peuplé de monstres bien plus puissants est un défi constant et inventif.</p><p>La série joue intelligemment avec les mécaniques de RPG, le système de compétences, d'évolution, de niveaux, de façon plus créative que la plupart des isekai. Les révélations progressives sur la nature du monde et le lien entre les différentes intrigues parallèles constituent une architecture narrative solide.</p><p>Les arcs alternatifs centrés sur les autres réincarnés humains sont plus conventionnels que les parties araignée. Mais Kumoko à elle seule vaut la lecture.</p>`,
  stars: 3,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=so+i%27m+a+spider+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=So%20I%27m%20a%20Spider", logo: "" }
  ],
  live: [],
  published: false,
},
{
  slug: "steins-gate",
  pros: ["Mécanique temporelle d'une précision et d'une cohérence rares","Retournement de ton magistral à mi-série","Mayuri et Kurisu, deux des meilleures héroïnes de SF manga"],
  cons: ["Début volontairement confus et difficile d'accès","Demande une attention soutenue du lecteur","L'adaptation manga reste en retrait de l'œuvre originale"],
  addedAt: "2026-01-31",
  title: "Steins;Gate",
  category: "manga",
  tags: "Voyage temporel · Science · Thriller",
  cover: "/steins-gate.jpg",
  synopsis: "Un groupe d’amis découvre comment envoyer des messages dans le passé. Chaque modification change le présent et entraîne des conséquences dramatiques.",
  reviewHtml: `<p>Steins;Gate est l'une des meilleures histoires de voyage temporel jamais racontées, dans quelque manga, roman ou film que ce soit. L'adaptation manga de l'œuvre originale capture l'essentiel d'un récit dont la construction temporelle est d'une précision et d'une cohérence rares.</p><p>Rintaro Okabe, dit Hououin Kyouma, est un "savant fou" autodéclaré dont l'humour de surface cache une anxiété profonde. Lui et ses amis découvrent accidentellement comment envoyer des messages dans le passé, et chaque modification de la timeline a des conséquences qui s'accumulent de façon implacable. La série manipule le lecteur avec la même maîtrise que ses protagonistes manipulent le temps.</p><p>Le point de bascule de Steins;Gate, le moment où la légèreté des premiers arcs se transforme en quelque chose de beaucoup plus sombre et urgent, est l'un des meilleurs retournements de ton du medium. Ce qui suivra tient ses promesses jusqu'au bout.</p><p>Mayuri et Kurisu sont deux des meilleurs personnages féminins du manga de science-fiction. Leur importance respective dans l'arc émotionnel d'Okabe est traitée avec un soin exceptionnel. Un chef-d'œuvre de SF.</p>`,
  stars: 4,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=steins+gate+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Steins%3BGate", logo: "" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 6,
  chapters: 24,
  year: 2009,
  author: "Yomi Sarachi",
},
{
  slug: "trigun",
  pros: ["Vash, parmi les personnages les plus originaux du manga","Western SF unique en son genre","Équilibre comédie/drame progressif très bien géré"],
  cons: ["Dessin parfois confus dans les scènes d'action","Peu connu malgré sa qualité","Publication ancienne et irrégulière"],
  addedAt: "2026-02-01",
  title: "Trigun",
  category: "manga",
  tags: "Western · Sci-fi · Chasseur de primes",
  cover: "/trigun.jpg",
  synopsis: "Vash the Stampede est un tireur d’élite au grand cœur recherché pour une prime énorme. Sur une planète désertique, il tente d’éviter les bains de sang.",
  reviewHtml: `<p>Trigun est un western de science-fiction japonais, un genre qui n'existe pratiquement qu'à travers cette série de Yasuhiro Nightow, et c'est l'une des preuves les plus convaincantes de ce que peut accomplir le manga quand il sort de ses territoires habituels.</p><p>Vash the Stampede est recherché dans toute la galaxie pour avoir détruit une ville entière. Sa prime est astronomique. La réalité est tout autre : Vash est un homme aux capacités extraordinaires qui refuse de tuer et qui consacre son existence à protéger des inconnus, souvent au prix de souffrances personnelles considérables. Ce décalage entre réputation et réalité est le cœur comique et émotionnel de la série.</p><p>Trigun commence comme une comédie d'action légère avant de révéler progressivement une histoire bien plus sombre sur la survie d'une humanité transplantée sur une planète désertique, et sur le coût d'un idéalisme absolu dans un monde qui ne le mérite pas toujours. Nicholas D. Wolfwood, le prêtre aux méthodes discutables, est l'un des meilleurs personnages secondaires du manga d'action.</p><p>Un classique mal connu qui mérite d'être (re)découvert.</p>`,
  stars: 3,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=trigun+tome", logo: "" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=trigun+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Trigun", logo: "" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 14,
  chapters: 70,
  year: 1995,
  author: "Yasuhiro Nightow",
},
{
  slug: "trinity-seven",
  pros: ["Protagoniste décomplexé et rafraîchissant pour le genre","Système magique plus élaboré que la concurrence","Bonne humeur constante et généreuse"],
  cons: ["Clairement du harem assumé, peu de profondeur narrative","Situations embarrassantes répétitives","Intérêt limité pour ceux qui n'apprécient pas le genre"],
  addedAt: "2026-02-03",
  title: "Trinity Seven",
  category: "manga",
  tags: "Magie · Harem · Académie",
  cover: "/trinity-seven.jpg",
  synopsis: "Arata Kasuga voit son village détruit par un phénomène magique. Pour sauver sa cousine, il intègre l’académie royale et rencontre les ‘Trinity Seven’, sept puissantes magiciennes.",
  reviewHtml: `<p>Trinity Seven est un manga de harem magique scolaire qui se distingue du genre par son protagoniste. Arata Kasuga n'est pas le héros timide et passif habituel, il assume ses intentions avec un humour décomplexé et une confiance en soi qui donnent à ses interactions avec les Trinity Seven un dynamisme inhabituel pour le genre.</p><p>Le système magique, les Themas, les Archives, les grimoires, est plus élaboré que celui de la plupart des séries similaires, et les arc d'action qui l'explorent montrent une série qui a des ambitions au-delà du simple fanservice. Les sept héroïnes ont chacune leur spécialité magique et leur personnalité propre, suffisamment distinctives pour éviter la confusion.</p><p>Trinity Seven assume pleinement son registre, comédie romantique avec beaucoup de situations embarrassantes et un protagoniste qui ne fait pas semblant d'être indifférent, et le fait avec une bonne humeur constante. La série ne prétend pas à la profondeur mais offre un divertissement généreux et bien rythmé pour les fans du genre.</p>`,
  stars: 2,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=trinity+seven+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Trinity%20Seven", logo: "" }
  ],
  live: [],
  published: false,
},
{
  slug: "akame-ga-kill",
  pros: ["Vraies morts de personnages attachants, enjeux réels","Esdeath, antagoniste complexe et mémorable","Romance Tatsumi/Mine sincèrement émouvante"],
  cons: ["Tone shifts parfois maladroits entre comédie et tragédie","Certains personnages meurent avant d'être vraiment développés","Fin diverge de l'animé de façon surprenante"],
  addedAt: "2026-02-05",
  title: "Akame ga Kill!",
  category: "manga",
  tags: "Action · Rébellion · Assassins",
  cover: "/akame-ga-kill.jpg",
  synopsis: "Tatsumi rejoint Night Raid, un groupe d’assassins luttant contre un empire corrompu. Chaque combat se paie cher et l’espoir d’un monde meilleur coûte des vies.",
  reviewHtml: `<p>Akame ga Kill! est une série qui a choisi un parti pris radical : personne n'est à l'abri. Dans un monde de fantasy corrompue où un empire décadent opprime ses sujets, un groupe de révolutionnaires appelé Night Raid combat pour le changement, et les membres meurent. Vraiment. Régulièrement. Et ça fait mal parce que Takahiro a pris le temps de les rendre attachants.</p><p>Tatsumi, jeune villageois naïf qui rejoint Night Raid, est le prisme à travers lequel on découvre la brutalité de ce monde. Son évolution, de l'idéalisme à une compréhension plus dure de ce que la révolution exige, est l'arc central de la série. La relation entre lui et Mine est l'une des romances les plus sincèrement touchantes du manga d'action dark.</p><p>Les Teigu, armes aux pouvoirs uniques, créent des combats variés et inventifs. L'antagoniste Esdeath est l'un des personnages les plus complexes de la série : un général impitoyable dont la philosophie de force absolue est terrifiante précisément parce qu'elle est cohérente.</p><p>La fin diverge de l'animé et est plus sombre. Akame ga Kill n'est pas parfait, mais son engagement total envers ses propres règles en fait une expérience marquante.</p>`,
  stars: 4,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Akame+ga+Kill", logo: "" },
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=akame+ga+kill+tome", logo: "" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=akame+ga+kill+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Akame%20ga%20Kill", logo: "" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 15,
  chapters: 78,
  year: 2010,
  author: "Takahiro",
},
{
  slug: "angel-beats",
  pros: ["Prémisse émotionnellement unique, le purgatoire des regrets","Kanade, révélation progressive magistralement gérée","Backstories des membres de la SSS poignantes"],
  cons: ["Court et condensé, certaines histoires méritaient plus","Ton inégal entre comédie légère et tragédie profonde","Demande un investissement émotionnel fort"],
  addedAt: "2026-02-07",
  title: "Angel Beats!",
  category: "manga",
  tags: "Au-delà · Lycée · Drame",
  cover: "/angel-beats.jpg",
  synopsis: "Dans un lycée de l’au-delà, Otonashi rejoint un groupe rebelle dirigé par Yuri pour défier une mystérieuse ‘Ange’. Entre humour et drame, chaque élève doit affronter son passé.",
  reviewHtml: `<p>Angel Beats! est l'adaptation manga d'un visual novel / anime de Key, le studio spécialisé dans les histoires qui brisent le cœur, et elle conserve l'essentiel de l'impact émotionnel de l'œuvre originale. Dans un lycée qui est en réalité un purgatoire pour adolescents morts avec des regrets, un groupe de rebelles combat contre "Dieu" pour ne pas disparaître.</p><p>Le prémisse est plus mélancolique qu'il n'y paraît. Chaque membre de la SSS, la brigade des rebelles, porte le poids d'une vie interrompue trop tôt, souvent par des circonstances injustes. Leurs backstories, révélées progressivement, sont des petites tragédies qui expliquent leur résistance à "l'acceptation".</p><p>Otonashi, protagoniste amnésique, est le fil conducteur qui permet au lecteur de découvrir cet univers étrange. Sa relation avec Kanade, mystérieuse, semblant être leur ennemie mais dont les motivations sont bien différentes, est le cœur émotionnel de la série et sa meilleure réussite.</p><p>Angel Beats! est une lecture courte et intense, idéale pour ceux qui cherchent une histoire fantastique avec une charge émotionnelle réelle. Prévoir des mouchoirs.</p>`,
  stars: 3,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=angel+beats+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Angel%20Beats", logo: "" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 5,
  chapters: 27,
  year: 2010,
  author: "Jun Maeda",
},
{
  slug: "bastard",
  pros: ["Dark Schneider, antihéros le plus excessif et fascinant du genre","Artwork exceptionnel pour l'époque","Esthétique heavy metal unique dans le manga"],
  cons: ["Publication chaotique et hiatus fréquents","Très difficile de trouver l'œuvre complète","Style graphique daté pour les nouveaux lecteurs"],
  addedAt: "2026-02-09",
  title: "Bastard!!",
  category: "manga",
  tags: "Dark Fantasy · Heavy Metal · Magie",
  cover: "/bastard.jpg",
  synopsis: "Dans un monde médiéval où règnent magie et métal, Dark Schneider, puissant sorcier, est libéré pour sauver un royaume mais son caractère tyrannique menace tout.",
  reviewHtml: `<p>Bastard!! -Darkness Everlasting- est un manga des années 90 qui a défini une certaine esthétique du heavy metal fantasy dans le manga. Kazushi Hagiwara a créé un univers de dark fantasy débridé, magie destructrice, antihéros flamboyant, références musicales heavy metal omniprésentes, avec une exubérance qui n'appartient qu'à lui.</p><p>Dark Schneider, le plus puissant sorcier qui ait jamais vécu, est un antihéros délibérément excessif, arrogant, libidineux, destructeur, et pourtant capable de moments de loyauté et de sacrifice qui recontextualisent tout. Son rapport au monde, il a littéralement essayé de le conquérir avant d'être scellé, en fait l'un des protagonistes les plus uniques du genre.</p><p>L'artwork de Hagiwara est d'une qualité exceptionnelle pour l'époque et reste impressionnant aujourd'hui, ses personnages féminins, ses scènes de combat, ses représentations de magie apocalyptique sont dessinés avec un soin qui justifie à lui seul la réputation de la série.</p><p>La publication est extrêmement irrégulière, des années de hiatus séparent parfois les chapitres. Mais Bastard!! reste une œuvre marquante de la fantasy manga, un artefact d'une époque où le genre n'avait pas encore de règles.</p>`,
  stars: 2,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=bastard+manga", logo: "" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=bastard+manga", logo: "" }
  ],
  streaming: [
    { name: "Netflix", url: "https://www.netflix.com/search?q=Bastard", logo: "" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 8,
  chapters: 94,
  year: 2014,
  author: "Carnby Kim",
},
{
  slug: "beelzebub",
  pros: ["Duo Oga/Baby Beel, l'un des plus drôles du manga","Énergie comique inépuisable","Personnages secondaires truculents et bien utilisés"],
  cons: ["Peu de profondeur narrative","Structure répétitive dans les arcs de délinquants","Fin abrupte et insatisfaisante"],
  addedAt: "2026-02-11",
  title: "Beelzebub",
  category: "manga",
  tags: "Comédie · Démon · Lycée",
  cover: "/beelzebub.jpg",
  synopsis: "Oga Tatsumi, délinquant, devient le ‘père’ du bébé Beelzebub, héritier du roi des démons. Il doit l’élever tout en gérant son quotidien de bagarres lycéennes.",
  reviewHtml: `<p>Beelzebub est l'une des comédies de délinquants les plus drôles du shōnen, une série qui fait le pari absurde de coller un bébé démon nu sur le dos du délinquant le plus violent d'un lycée de voyous et d'en faire une comédie d'action. Ryūhei Tamura exécute ce concept avec une énergie comique inépuisable.</p><p>Oga Tatsumi et Baby Beel forment l'un des duos les plus improbables et les plus attachants du manga. Le bébé-démon pleure quand il est séparé d'Oga, le frappe quand il est content, et génère des décharges électriques sur tous ceux qu'Oga frappe. La logique absurde de leur cohabitation est la source de gags qui ne s'épuisent jamais vraiment.</p><p>Les arcs de combats contre d'autres délinquants d'élite, les intrigues démoniaques qui s'immiscent progressivement dans le quotidien scolaire, et les personnages secondaires truculents, Furuichi le meilleur ami lâche, Hilda la bonniche démon sans humour, complètent un ensemble généreux et bien rythmé.</p><p>Beelzebub est une série de pur divertissement, sans prétention narrative mais d'une générosité constante. Idéale pour rire.</p>`,
  stars: 3,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Beelzebub", logo: "" },
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=beelzebub+tome", logo: "" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=beelzebub+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Beelzebub", logo: "" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 28,
  chapters: 239,
  year: 2009,
  author: "Ryūhei Tamura",
},
{
  slug: "black-bullet",
  pros: ["Thèmes de discrimination des enfants soldats traités avec profondeur","Duo Rentaro/Enju touchant","Ambiance post-apo bien construite"],
  cons: ["Adaptation incomplète par rapport au light novel","Certains antagonistes peu développés","Court et frustrant pour les lecteurs de l'univers complet"],
  addedAt: "2026-02-12",
  title: "Black Bullet",
  category: "manga",
  tags: "Post-apo · Armes vivantes · Action",
  cover: "/black-bullet.jpg",
  synopsis: "Dans un futur envahi par des créatures appelées Gastrea, les ‘Enfants maudits’ aux pouvoirs spéciaux combattent aux côtés de leurs protecteurs pour sauver l’humanité.",
  reviewHtml: `<p>Black Bullet est un light novel adapté en manga qui s explore un Japon post-apocalyptique où des parasites appelés Gastrea ont forcé l'humanité à se réfugier derrière des murs de Varanium. Les Civile, jeunes filles aux capacités surhumaines nées de mères infectées, combattent les Gastrea aux côtés d'Initiateurs humains.</p><p>Rentaro Satomi et Enju Aihara forment un duo central touchant, lui déterminé à protéger son partenaire malgré les préjugés sociaux contre les Civile, elle cheerful et attachante malgré la discrimination qu'elle subit. Leur relation fraternelle est le cœur émotionnel de la série.</p><p>Black Bullet aborde des thèmes sérieux, discrimination systémique, enfants soldats, sacrifice, avec plus de profondeur que son prémisse d'action ne le laisse supposer. Les moments où la série confronte frontalement la cruauté du traitement des Civile sont parmi ses plus forts.</p><p>La série est courte et son adaptation manga reste incomplète par rapport au light novel original. Mais comme introduction à un univers de post-apocalypse avec des enjeux humains réels, Black Bullet est une lecture solide.</p>`,
  stars: 2,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=black+bullet+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Black%20Bullet", logo: "" }
  ],
  live: [],
  published: false,
},
{
  slug: "black-lagoon",
  pros: ["Revy, héroïne d'action la plus mémorable du genre","Répliques cinglantes et dialogues de haute volée","Chaque arc comme un film d'action indépendant"],
  cons: ["Hiatus très fréquents depuis des années","Peu de progression narrative globale","Fin potentiellement jamais écrite"],
  addedAt: "2026-02-14",
  title: "Black Lagoon",
  category: "manga",
  tags: "Action · Mafia · Pirates modernes",
  cover: "/black-lagoon.jpg",
  synopsis: "Rokurou, employé japonais, est kidnappé par des mercenaires. Il rejoint leur équipage dans un monde de trafics et de fusillades en Asie du Sud-Est.",
  reviewHtml: `<p>Black Lagoon est le manga de mercenaires et de criminels le plus cool du marché, et il le sait parfaitement. Rei Hiroe a créé une série d'action pure qui se déroule dans les bas-fonds de l'Asie du Sud-Est, avec un casting de personnages moralement compromis dont chaque interaction est un feu d'artifice de répliques cinglantes et de violence stylisée.</p><p>Revy est l'une des héroïnes d'action les plus mémorables du manga, bilingue, nihiliste, dangereuse, et portant des cicatrices psychologiques que la série ne minimise pas. Sa relation antagoniste-évolutive avec Rokuro, l'employé de bureau japonais qui a tout perdu et rejoint l'équipage du Black Lagoon, forme le cœur narratif de la série.</p><p>Les arcs sont de mini-films d'action : la guerre des cartels, les nazis en Roumanie, les domestiques enfants soldats. Chaque arc a son propre ton et ses propres antagonistes, mais tous partagent un même engagement envers la violence conséquente et les personnages qui ont des raisons réelles d'être ce qu'ils sont.</p><p>Black Lagoon est en hiatus fréquent depuis des années, ce qui frustre son lectorat fidèle. Mais ce qui existe est du pur divertissement d'action adulte, sans équivalent dans le genre.</p>`,
  stars: 3,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=black+lagoon+tome", logo: "" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=black+lagoon+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Black%20Lagoon", logo: "" }
  ],
  live: [],
  published: true,
  status: "pause",
  volumes: 12,
  chapters: 103,
  year: 2002,
  author: "Rei Hiroe",
},
{
  slug: "blame",
  pros: ["Architecture SF oppressante unique dans le medium","Narration visuelle pure, presque sans dialogue","Atmosphère post-humaine inoubliable"],
  cons: ["Très difficile d'accès pour les nouveaux lecteurs de manga","Pratiquement pas de narration explicite","Demande un lecteur prêt à construire sa propre compréhension"],
  addedAt: "2026-02-16",
  title: "Blame!",
  category: "manga",
  tags: "Sci-fi · Cyberpunk · Exploration",
  cover: "/blame.jpg",
  synopsis: "Dans un futur lointain, Killy parcourt une gigantesque mégastructure à la recherche du gène d’accès au réseau. Silence, architecture titanesque et solitude l’accompagnent.",
  reviewHtml: `<p>Blame! de Tsutomu Nihei est l'une des expériences manga les plus radicales et les plus déroutantes qui soit, et l'une des plus mémorables. Dans un futur lointain, une méga-structure artificielle s'est développée de façon incontrôlée sur des milliards de kilomètres cubes, peuplée d'humains dégénérés et de robots hostiles. Killy traverse cette architecture impossible à la recherche du Gène Net.</p><p>Blame! est un manga presque sans dialogue. Nihei raconte essentiellement par les images, des architectures gigantesques et oppressantes, des silhouettes minuscules perdues dans des espaces impossibles, une violence soudaine et brutale. C'est de la science-fiction architecturale pure, et l'atmosphère qu'elle génère est unique.</p><p>Killy lui-même est l'un des protagonistes les plus mystérieux du manga, stoïque jusqu'à l'extrême, sa force et ses motivations se révèlent par fragments. L'absence d'exposition traditionnelle oblige le lecteur à construire sa propre compréhension de ce monde fragmenté.</p><p>Blame! n'est pas pour tous les goûts. C'est une œuvre d'art visuel autant qu'un récit, et elle demande un lecteur prêt à accepter l'ambiguïté. Mais pour ceux qui entrent dans son univers, c'est une expérience inoubliable.</p>`,
  stars: 2,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=blame+manga", logo: "" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=blame+manga", logo: "" }
  ],
  streaming: [
    { name: "Netflix", url: "https://www.netflix.com/search?q=Blame", logo: "" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 10,
  chapters: 66,
  year: 1997,
  author: "Tsutomu Nihei",
},
{
  slug: "blood-lad",
  pros: ["Humour méta sur la culture otaku très bien exécuté","Staz, vampire otaku décalé et attachant","Légèreté assumée et bonne humeur généreuse"],
  cons: ["Peu de profondeur narrative","Enjeux dramatiques limités","Oubliable malgré son charme"],
  addedAt: "2026-02-18",
  title: "Blood Lad",
  category: "manga",
  tags: "Comédie · Vampire · Action",
  cover: "/blood-lad.jpg",
  synopsis: "Staz, vampire otaku, règne sur un quartier du monde des démons. Quand une humaine meurt dans son territoire, il promet de la ressusciter.",
  reviewHtml: `<p>Blood Lad est une comédie de fantasy urbaine qui se distingue par son protagoniste inattendu : Staz, vampire-boss d'un territoire des Enfers, est un otaku obsédé par la culture pop japonaise qui n'a aucun intérêt pour sucer le sang. Quand une lycéenne japonaise ordinaire débarque accidentellement dans son territoire et se fait tuer, il décide de la ressusciter, principalement parce que c'est une vraie Japonaise.</p><p>Cette prémisse absurde est exploitée avec un humour méta constant, les références à la culture otaku, au manga, aux jeux vidéo s'accumulent de façon jubilatoire. Staz lui-même est une parodie vivante du vampire traditionnel, et son décalage avec les attentes du genre crée des situations comiques régulières.</p><p>Yūki Kodama équilibre bien comédie et action, les arcs de combat existent et sont bien menés, mais la série ne perd jamais de vue que son cœur c'est la relation entre Staz et Fuyumi, et l'humour qui découle de leur situation improbable.</p><p>Blood Lad est une lecture légère et régulièrement drôle, idéale pour les fans de culture otaku qui apprécient l'autodérision et une fantasy qui ne se prend pas trop au sérieux.</p>`,
  stars: 2,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Blood+Lad", logo: "" },
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=blood+lad+tome", logo: "" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=blood+lad+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Blood%20Lad", logo: "" }
  ],
  live: [],
  published: false,
},
{
  slug: "bungou-stray-dogs",
  pros: ["Concept de pouvoirs basés sur des auteurs littéraires brillant","Dazai, personnage le plus fascinant de la série","Alternance comédie/drama très habile"],
  cons: ["Nombreux personnages difficiles à mémoriser au début","Certains arcs moins bien gérés que d'autres","Peut sembler prétentieux pour ceux qui n'apprécient pas le concept"],
  addedAt: "2026-02-20",
  title: "Bungou Stray Dogs",
  category: "manga",
  tags: "Pouvoirs · Enquête · Organisation",
  cover: "/bungou-stray-dogs.jpg",
  synopsis: "Atsushi, orphelin affamé, rencontre Dazai et Kunikida, membres d’une agence d’investigation composée d’individus aux dons surnaturels. Il y découvre complots et secrets.",
  reviewHtml: `<p>Bungou Stray Dogs est une série qui fait le pari audacieux de nommer tous ses personnages d'après des auteurs littéraires réels, Osamu Dazai, Ryūnosuke Akutagawa, Francis Scott Fitzgerald, et de leur donner des pouvoirs basés sur leurs œuvres. Ce concept méta et littéraire aurait pu sembler prétentieux. En pratique, il donne à la série une identité visuelle et narrative unique.</p><p>L'histoire suit l'Agence des Détectives Armés, des individus aux capacités surnaturelles qui gèrent les cas trop étranges pour la police normale, et leur opposition aux groupes criminels et gouvernementaux qui cherchent à les détruire. La politique entre factions, les alliances changeantes, et les révélations progressives sur les motivations de chaque camp maintiennent une tension constante.</p><p>Dazai Osamu est le personnage central de facto, mystérieux, manipulateur, suicidaire de façon comique mais profondément mélancolique sous la surface. Son passé dans la Port Mafia et sa relation avec Chuuya Nakahara sont parmi les meilleurs éléments de la série.</p><p>Bungou Stray Dogs alterne habilement entre comédie légère et drama intense, parfois dans le même chapitre. Une série originale qui récompense les lecteurs curieux de littérature japonaise.</p>`,
  stars: 3,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Bungou+Stray+Dogs", logo: "" },
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=bungou+stray+dogs+tome", logo: "" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=bungou+stray+dogs+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Bungou%20Stray%20Dogs", logo: "" }
  ],
  live: [],
  published: true,
  status: "en cours",
  volumes: 24,
  chapters: 120,
  year: 2013,
  author: "Kafka Asagiri",
},
{
  slug: "coppelion",
  pros: ["Atmosphère post-nucléaire unique et bien rendue","Héroïnes humanistes et attachantes","Visuellement ambitieux et soigné"],
  cons: ["Rythme parfois trop lent","Développement de l'antagonisme parfois confus","Public de niche restreint"],
  addedAt: "2026-02-22",
  title: "Coppelion",
  category: "manga",
  tags: "Post-apo · Tokyo · Unités spéciales",
  cover: "/coppelion.jpg",
  synopsis: "2036 : Tokyo est contaminée après un accident nucléaire. Trois lycéennes génétiquement modifiées et immunisées sont envoyées secourir les survivants.",
  reviewHtml: `
    <p>Coppelion m'a surpris par son ambiance unique, un Tokyo déserté et irradié, exploré par trois lycéennes génétiquement modifiées. C'est un manga post-apocalyptique qui prend le temps de s'installer, et c'est précisément ce que j'ai aimé.</p>
    <p>Ibara, Aoi et Taeko forment un trio attachant, chacune avec sa propre façon de faire face à l'horreur silencieuse qui les entoure. Le désespoir des survivants qu'elles rencontrent est traité avec une vraie sensibilité, sans jamais verser dans le misérabilisme.</p>
    <p>Visuellement, les décors de Tokyo envahi par la nature sont d'une beauté mélancolique rare. Le manga prend clairement position sur le nucléaire, ce qui lui donne une résonance particulière après Fukushima. Pas le manga le plus rythmé, mais une œuvre sincère qui mérite d'être découverte.</p>
  `,
  stars: 2,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=coppelion+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Coppelion", logo: "" }
  ],
  live: [],
  published: false,
},
 {
  slug: "devilman-crybaby",
  pros: ["Œuvre fondatrice du dark fantasy manga","Fin nihiliste d'une cohérence et d'un courage rares","Influence sur des décennies de manga ultérieur"],
  cons: ["Dessin très daté visuellement","Contenu extrêmement violent et perturbant","Difficile d'accès pour les lecteurs modernes"],
  addedAt: "2026-02-23",
  title: "Devilman Crybaby",
  category: "manga",
  tags: "Démons · Apocalypse · Tragédie",
  cover: "/devilman.jpg",
  synopsis: "Akira fusionne avec un démon pour combattre ses semblables et protéger l’humanité. Mais la frontière entre bien et mal s’efface rapidement.",
  reviewHtml: `
    <p>Devilman est une œuvre qui fait mal, et c'est exactement son intention. Go Nagai a créé en 1972 quelque chose que peu de mangakas oseraient encore aujourd'hui : une série qui détruit tout ce qu'elle construit, jusqu'à sa conclusion nihiliste absolue.</p>
    <p>Akira Fudo est l'un des personnages les plus tragiques du medium. Sa transformation, son amour pour Miki, son amitié avec Ryo, tout est mis en place avec soin uniquement pour être arraché. La dernière partie est une des expériences les plus dévastatrices que j'ai vécues en lisant un manga.</p>
    <p>Le style graphique est daté, évidemment. Mais l'impact émotionnel et thématique est intact. Devilman a influencé des décennies d'œuvres sombres, Berserk, Evangelion, Chainsaw Man lui doivent tous quelque chose. Une lecture incontournable pour quiconque veut comprendre l'histoire du manga.</p>
  `,
  stars: 3,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=devilman+manga", logo: "" }
  ],
  streaming: [
    { name: "Netflix", url: "https://www.netflix.com/search?q=Devilman%20Crybaby", logo: "" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 5,
  chapters: 38,
  year: 1972,
  author: "Go Nagai",
},
{
  slug: "dororo",
  pros: ["Œuvre fondatrice de Tezuka d'une modernité surprenante","Concept de Hyakkimaru unique et poignant","Thèmes sur la guerre d'une actualité permanente"],
  cons: ["Dessin daté, standards des années 60","Récit inachevé par Tezuka lui-même","Difficile à appréhender sans contexte historique manga"],
  addedAt: "2026-02-25",
  title: "Dororo",
  category: "manga",
  tags: "Historique · Démon · Voyage",
  cover: "/dororo.jpg",
  synopsis: "Hyakkimaru, né sans membres ni organes, les récupère en exterminant les démons qui les détiennent, accompagné du jeune voleur Dororo.",
  reviewHtml: `
    <p>Dororo est une œuvre de 1967 qui parle de guerre, de sacrifice et d'humanité avec une modernité stupéfiante. Tezuka y raconte l'histoire d'Hyakkimaru, né sans organes ni membres vendus à des démons par son père ambitieux, et de Dororo, orphelin des routes qui devient son compagnon.</p>
    <p>Chaque démon vaincu rend un organe à Hyakkimaru, ce concept de reconquête de soi morceau par morceau est d'une puissance symbolique rare. La série pose des questions sur ce qui fait de nous des humains, sur le prix du pouvoir, sur l'innocence perdue.</p>
    <p>Le récit est inachevé par Tezuka lui-même, ce qui frustre, mais les volumes disponibles constituent une expérience complète en soi. Une fenêtre exceptionnelle sur le génie du dieu du manga, et une série qui n'a pas pris une ride dans son propos.</p>
  `,
  stars: 3,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=dororo+manga", logo: "" }
  ],
  streaming: [
    { name: "Prime Video", url: "https://www.primevideo.com/search/ref=atv_nb_sr?phrase=Dororo", logo: "" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 4,
  chapters: 48,
  year: 1967,
  author: "Osamu Tezuka",
},
{
  slug: "hajime-no-ippo",
  pros: ["La saga sportive la plus longue et la plus riche du manga","Boxe représentée avec une précision technique exemplaire","Chaque adversaire développé avec autant de soin que le héros"],
  cons: ["Plus de 1400 chapitres, très difficile à aborder","Certains arcs tardifs critiqués pour leur rythme","Engagement à très long terme requis"],
  addedAt: "2026-03-01",
  title: "Hajime no Ippo",
  category: "manga",
  tags: "Boxe · Sport · Shōnen",
  cover: "/hajime-no-ippo.jpg",
  synopsis: "Ippo, lycéen timide, découvre la boxe et s’entraîne dur pour devenir champion. Chaque match est une leçon de courage et de dépassement.",
  reviewHtml: `
    <p>Hajime no Ippo, c'est plus de trente ans et 1400 chapitres consacrés à la boxe, et c'est probablement la meilleure série sportive jamais écrite. Makunouchi Ippo, introverti et brimé, découvre la boxe presque par accident et y trouve un moyen de se construire. Ce parcours de l'ombre à la lumière est traité avec une sincérité désarmante.</p>
    <p>Ce qui rend Ippo unique, c'est l'attention portée à chaque adversaire. Chaque combattant a son histoire, sa philosophie, ses raisons de se battre. Les matchs sont techniquement précis et dramatiquement intenses, chaque KO a du poids parce que les deux camps ont été développés avec soin.</p>
    <p>Oui, c'est un investissement colossal. Oui, certains arcs tardifs sont moins inspirés. Mais les sommets d'Ippo, le match contre Miyata, contre Sendo, contre Date, sont parmi les meilleurs moments du manga de sport. Une œuvre monument.</p>
  `,
  stars: 3,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=hajime+no+ippo+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Hajime%20no%20Ippo", logo: "" }
  ],
  live: [],
  published: true,
  status: "en cours",
  volumes: 139,
  chapters: 1450,
  year: 1989,
  author: "George Morikawa",
},
{
  slug: "katekyo-hitman-reborn",
  pros: ["Évolution de comédie gag à saga d'action remarquable","Système des Flames et des armes inventif","Arcs de bataille tardifs intenses et bien construits"],
  cons: ["Début très lent et peu représentatif de la série","Certains arcs de transition longuets","Fin précipitée par rapport aux ambitions narratives"],
  addedAt: "2026-03-03",
  title: "Katekyo Hitman Reborn!",
  category: "manga",
  tags: "Mafia · Comédie · Action",
  cover: "/katekyo-hitman-reborn.jpg",
  synopsis: "Tsuna, collégien médiocre, apprend qu’il est héritier d’une famille mafieuse. Son tuteur, un bébé mafieux armé, le forme pour en devenir le boss.",
  reviewHtml: `
    <p>Reborn est le parfait exemple d'un manga qui ne ressemble pas du tout à ce qu'il devient. Les premiers volumes, une comédie gag sur un bébé tueur à gages, ne préparent absolument pas à la saga épique que la série finit par être. Cette transformation est l'une des plus réussies du shōnen.</p>
    <p>Tsunayoshi Sawada, le "Tsuna-nul" du début, devient un protagoniste genuinement charismatique. Le système des Flames et des armes, chaque personnage avec sa propre Box Weapon, sa Flame spécifique, est inventif et bien exploité dans les arcs de combat tardifs.</p>
    <p>L'arc des Arcobaleno et l'arc futur sont des sommets de tension et d'émotion que peu de shōnens atteignent. La fin, malheureusement, est visiblement précipitée par l'éditeur, ce qui laisse un goût amer. Mais pour tout ce qui précède, Reborn mérite largement sa réputation de classique sous-estimé.</p>
  `,
  stars: 3,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=katekyo+hitman+reborn+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Katekyo%20Hitman%20Reborn", logo: "" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 42,
  chapters: 409,
  year: 2004,
  author: "Akira Amano",
},
{
  slug: "zatch-bell",
  pros: ["Duo Kiyo/Zatch attachant et sincèrement émouvant","Concept de mammodo et partenaires humains original","Moments de fin de combat souvent bouleversants"],
  cons: ["Visuellement daté","Certains duels longuets","Moins connu que d'autres classiques de son époque"],
  addedAt: "2026-03-05",
  title: "Zatch Bell!",
  category: "manga",
  tags: "Démons · Tournoi · Amitié",
  cover: "/zatch-bell.jpg",
  synopsis: "Kiyomaro reçoit un grimoire et rencontre Zatch, enfant démon venu gagner un tournoi pour devenir roi. Ensemble, ils affrontent d’autres duos mage/démon.",
  reviewHtml: `
    <p>Zatch Bell est l'un de ces mangas qu'on lit enfant et qui laissent une empreinte émotionnelle durable. L'histoire de Kiyo et Zatch, un lycéen surdoué asocial et un mamodo amnésique au cœur pur, est une des plus belles histoires d'amitié du shōnen des années 2000.</p>
    <p>Le concept est simple mais fertile : 100 mamodos s'affrontent pour devenir roi de leur monde. Chaque duel révèle l'histoire du mamodo et de son partenaire humain, et les défaites, les livres qui brûlent, sont parmi les moments les plus bouleversants du genre. Brago, Tia, Ponygon, chaque personnage finit par compter.</p>
    <p>Visuellement daté et rythmiquement inégal par moments, Zatch Bell reste une œuvre sincère et généreuse. Sa conclusion est l'une des plus émouvantes qu'il m'ait été donné de lire. Un classique injustement oublié qui mérite d'être redécouvert.</p>
  `,
  stars: 3,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=zatch+bell+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Zatch%20Bell", logo: "" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 33,
  chapters: 323,
  year: 2001,
  author: "Makoto Raiku",
},
{
  slug: "one-piece",
  title: "One Piece",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30013-BeslEMqiPhlk.jpg",
  tags: "Action · Aventure · Piraterie · Shōnen",
  stars: 5,
  addedAt: "2026-03-19",
  pros: ["World-building le plus ambitieux de l'histoire du manga", "Chaque arc introduit un monde unique et des personnages mémorables", "Émotions intenses à chaque grande révélation", "Luffy est l'un des héros les plus iconiques du médium"],
  cons: ["Rythme considérablement ralenti depuis Dressrosa", "Investissement colossal, plus de 1100 chapitres"],
  synopsis: "Monkey D. Luffy, garçon impulsif aux ambitions démesurées, a mangé un Fruit du Démon qui l'a transformé en homme-caoutchouc. Il part à la conquête du Grand Line pour trouver le One Piece, trésor légendaire du Roi des Pirates Roger, et porter la même couronne. Il réunit autour de lui l'équipage le plus hétéroclite et le plus attachant de l'histoire du manga.",
  reviewHtml: `<p>One Piece est probablement l'entreprise narrative la plus ambitieuse jamais entreprise dans le manga. Eiichiro Oda construit depuis 1997 un monde dont la cohérence et la richesse défient l'entendement. Chaque île est un univers à part entière, avec sa culture, son histoire, ses enjeux propres. Ce n'est pas un décor, c'est un continent imaginaire.</p><p>Ce qui fait la force de One Piece, c'est son coeur. Luffy est l'antithèse du héros calculateur. Il court vers les ennuis, rit face au danger, et pleure sans honte pour ses amis. Chaque membre du Chapeau de Paille porte une histoire brisée et un rêve impossible, et leur chemin commun ressemble à une promesse que le manga tient depuis le premier chapitre.</p><p>Les grands arcs, Marineford, Whole Cake Island, Wano, sont des événements. Des moments avec leurs révélations, leurs sacrifices, leurs victoires arrachées. Oda sait construire l'émotion et le spectacle mieux que presque n'importe qui.</p><p>La lenteur des arcs récents est réelle. Mais One Piece reste la démonstration de ce que le manga peut accomplir quand il vise vraiment haut. Un monument.</p>`,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=One+Piece", logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=one+piece+tome", logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=one+piece+tome", logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/fr/search?q=One%20Piece", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" }
  ],
  live: [],
  published: true,
  status: "en cours",
  volumes: 107,
  chapters: 1112,
  year: 1997,
  author: "Eiichiro Oda",
},

{
  slug: "dragon-ball",
  title: "Dragon Ball",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30042-4SetGiEbGc9x.jpg",
  tags: "Action · Arts martiaux · Aventure · Shōnen",
  stars: 5,
  addedAt: "2026-03-19",
  pros: ["Père fondateur du shōnen d'action moderne", "Goku est l'archétype du héros shōnen par excellence", "Tournois d'arts martiaux parmi les plus jouissifs du manga", "Rythme impeccable, jamais un chapitre de trop"],
  cons: ["Dragon Ball Z moins inventif que la première partie", "Personnages féminins très en retrait"],
  synopsis: "Goku, enfant doté d'une force surhumaine et d'une queue de singe, part à la recherche des 7 Dragon Balls qui exaucent un voeu. Ses aventures le mènent des tournois d'arts martiaux jusqu'aux confins de l'univers, face à des guerriers toujours plus puissants. La saga qui a inventé le shōnen d'action tel qu'on le connaît.",
  reviewHtml: `<p>Dragon Ball est la matrice. Avant Toriyama, il existait du manga d'action. Après lui, il existe le shōnen tel que le monde entier le connaît. Goku, Krilin, Végéta, Piccolo, ces noms résonnent comme des références culturelles planétaires, et ce n'est pas un hasard.</p><p>La première moitié, Dragon Ball pur, est une oeuvre d'une légèreté et d'une inventivité délicieuses. Goku enfant qui découvre le monde, les tournois d'arts martiaux au Château du Ruban Rouge, le Grand Maître Tortue, tout cela a une fraîcheur que peu de manga ont retrouvée depuis.</p><p>Dragon Ball Z monte les enjeux à l'échelle galactique, avec des transformations de plus en plus spectaculaires. La formule se répète, mais Toriyama la maîtrise à la perfection. Chaque saga a son antagoniste mémorable, ses combats de référence, son moment de bascule émotionnel.</p><p>Dragon Ball n'est pas seulement un grand manga. C'est la raison pour laquelle le manga existe dans la conscience collective mondiale. Un acte fondateur.</p>`,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Dragon+Ball", logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=dragon+ball+tome", logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=dragon+ball+tome", logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/fr/search?q=Dragon%20Ball", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" }
  ],
  live: [],
  published: true,
  status: "terminé",
  volumes: 42,
  chapters: 519,
  year: 1984,
  author: "Akira Toriyama",
},
{
  slug: "jujutsu-kaisen",
  title: "Jujutsu Kaisen",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx101517-H3TdM3g5ZUe9.jpg",
  tags: "Action · Sorcellerie · Malédictions · Shōnen",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "Yuji Itadori, lycéen au physique hors norme, ingère par accident un doigt maudit de Ryomen Sukuna, roi des fléaux. Condamné à mort mais trop précieux pour être exécuté immédiatement, il doit avaler les vingt doigts restants pour affaiblir le démon de l'intérieur. Sous la tutelle du légendaire Gojo Satoru, il intègre l'école des sorciers pour combattre les malédictions.",
  pros: ["Gojo Satoru, personnage le plus iconique du shōnen récent","Combats spectaculaires et techniquement inventifs","Les morts comptent vraiment, tension permanente","Arc de Shibuya parmi les meilleurs du genre"],
  cons: ["Personnages féminins sous-exploités","Arcs post-Shibuya moins maîtrisés narrativement"],
  reviewHtml: `<p>Jujutsu Kaisen est arrivé au bon moment pour redonner un souffle au shōnen d'action. Gege Akutami ne joue pas la sécurité. Les personnages meurent. Les victoires sont chèrement acquises. Et Gojo Satoru, dès son introduction, est devenu l'un des personnages les plus discutés de toute sa génération.</p><p>Le système des malédictions et des techniques est l'un des mieux construits du genre. Chaque sorcier a une technique qui lui est propre, avec ses règles, ses limites et ses coûts narratifs. Les combats ne sont pas seulement spectaculaires, ils sont réfléchis. L'arc de Shibuya reste un sommet, dense, brutal, imprévisible.</p><p>Akutami a aussi le courage de casser ses propres constructions. On s'attache à des personnages qu'il sacrifie ensuite sans prévenir. Ce sentiment d'insécurité permanente tient en haleine comme peu de shōnens récents.</p><p>Les arcs finaux sont plus divisifs, mais Jujutsu Kaisen reste une oeuvre ambitieuse qui a redéfini les standards du genre. Cinq étoiles mérités.</p>`,
  shops: [{"name":"Manganim","url":"https://manganim.fr/search?q=Jujutsu+Kaisen","logo":"https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"},{"name":"Fnac","url":"https://www.fnac.com/SearchResult/ResultList.aspx?Search=Jujutsu+Kaisen+tome","logo":"https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"},{"name":"Amazon","url":"https://www.amazon.fr/s?k=Jujutsu+Kaisen+tome","logo":"https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"}],
  streaming: [{"name":"Crunchyroll","url":"https://www.crunchyroll.com/fr/search?q=Jujutsu%20Kaisen","logo":"https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"}],
  live: [],
  published: true,
  status: "en cours",
  volumes: 27,
  chapters: 265,
  year: 2018,
  author: "Gege Akutami",
},

{
  slug: "one-punch-man",
  title: "One Punch Man",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx85364-O28PUKbABg8y.jpg",
  tags: "Action · Super-héros · Parodie · Comédie",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Saitama est un héros amateur qui peut vaincre n'importe quel adversaire d'un seul coup de poing. Ce pouvoir absolu est devenu son pire cauchemar : plus rien ne le stimule. En attendant un ennemi à sa hauteur, il s'inscrit à l'Association des Héros où il côtoie des combattants hors du commun.",
  pros: ["Satire intelligente et efficace du genre super-héros","Genos et la galerie de héros tous mémorables","Artwork de Murata absolument époustouflant","Humour décalé qui fonctionne sur la durée"],
  cons: ["Rythme lent sur les arcs récents de la version manga","Le gag central s'épuise légèrement sur la durée"],
  reviewHtml: `<p>One Punch Man est une blague devenue chef-d'oeuvre. Le pitch de départ, un héros si puissant qu'il s'ennuie, aurait pu tenir cinq chapitres. Il tient depuis des années parce que derrière la satire, ONE construit un univers de super-héros d'une richesse inattendue.</p><p>Saitama incarne quelque chose de touchant : la mélancolie du but atteint. Il a obtenu la force absolue qu'il cherchait, et il n'a rien à en faire. Cette désillusion tranquille sous les combats absurdes donne au manga une profondeur qu'on ne lui attendait pas.</p><p>La version dessinée par Yusuke Murata est visuellement parmi ce qui se fait de mieux dans le manga. Ses doubles pages de combat sont des oeuvres à part entière, chaque coup de poing de Saitama est dessiné comme s'il allait briser la page.</p><p>Quelques longueurs sur les arcs récents, mais One Punch Man reste une des réussites les plus originales du shōnen moderne.</p>`,
  shops: [{"name":"Manganim","url":"https://manganim.fr/search?q=One+Punch+Man","logo":"https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"},{"name":"Fnac","url":"https://www.fnac.com/SearchResult/ResultList.aspx?Search=One+Punch+Man+tome","logo":"https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"},{"name":"Amazon","url":"https://www.amazon.fr/s?k=One+Punch+Man+tome","logo":"https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"}],
  streaming: [{"name":"Crunchyroll","url":"https://www.crunchyroll.com/fr/search?q=One%20Punch%20Man","logo":"https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"}],
  live: [],
  published: true,
  status: "en cours",
  volumes: 30,
  chapters: 200,
  year: 2009,
  author: "ONE",
},

{
  slug: "mob-psycho-100",
  title: "Mob Psycho 100",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/nx85189-06aXUBq5jwce.jpg",
  tags: "Surnaturel · Psychologie · Comédie · Action",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "Shigeo Kageyama dit Mob est un adolescent discret doté de pouvoirs psychiques phénoménaux. Pour ne pas blesser ceux qu'il aime, il bloque ses émotions. Il travaille comme assistant pour Reigen, arnaqueur brillant qui se fait passer pour exorciste. Derrière le spectaculaire se cache une histoire de croissance personnelle et d'acceptation de soi.",
  pros: ["Message profond sur la valeur des émotions et l'acceptation de soi","Reigen est l'un des personnages les plus originaux du manga","Humour et émotion parfaitement équilibrés","Conclusion parmi les plus satisfaisantes du genre"],
  cons: ["Style graphique volontairement brouillon déroutant au premier abord","Trop court, on en voudrait bien plus"],
  reviewHtml: `<p>Mob Psycho 100 est l'oeuvre la plus personnelle de ONE, et sans doute sa meilleure. Sous les explosions psychiques et les combats d'exorcistes, c'est une histoire sur la valeur des émotions, sur pourquoi il faut les ressentir même quand elles font mal.</p><p>Shigeo est le protagoniste le moins conventionnel du genre. Il ne cherche pas à devenir fort. Il veut juste être une personne ordinaire, avoir des amis, plaire à la fille qu'il aime. Ce décalage entre ses pouvoirs monstrueux et ses aspirations modestes est la source d'un humour et d'une tendresse constants.</p><p>Reigen Arataka vole chaque scène qu'il occupe. Cet escroc sans pouvoirs qui exploite Mob est aussi son meilleur modèle de vie, à sa manière chaotique. Leur relation est l'une des plus belles du manga.</p><p>La conclusion de Mob Psycho 100 est magistrale. Rare sont les manga qui savent terminer. Celui-ci sait. Cinq étoiles sans hésitation.</p>`,
  shops: [{"name":"Manganim","url":"https://manganim.fr/search?q=Mob+Psycho+100","logo":"https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"},{"name":"Fnac","url":"https://www.fnac.com/SearchResult/ResultList.aspx?Search=Mob+Psycho+100+tome","logo":"https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"},{"name":"Amazon","url":"https://www.amazon.fr/s?k=Mob+Psycho+100+tome","logo":"https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"}],
  streaming: [{"name":"Crunchyroll","url":"https://www.crunchyroll.com/fr/search?q=Mob%20Psycho%20100","logo":"https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"}],
  live: [],
  published: true,
  status: "terminé",
  volumes: 16,
  chapters: 101,
  year: 2012,
  author: "ONE",
},

{
  slug: "haikyuu",
  title: "Haikyuu!!",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx181735-xIoXaQmtjkuC.png",
  tags: "Volleyball · Sport · Shōnen · Équipe",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Shoyo Hinata, passionné de volleyball malgré sa petite taille, intègre l'équipe du lycée Karasuno. Il forme avec le génie glacial Kageyama Tobio un duo explosif et complémentaire. Leur route vers les nationals les confronte à des adversaires d'exception, chacun portant sa propre philosophie du jeu.",
  pros: ["Meilleure série sportive de sa génération","Chaque adversaire est aussi attachant que les protagonistes","Moments de matchs qui donnent des frissons","Fin de série parfaitement exécutée"],
  cons: ["Démarre doucement, les premiers matchs sont moins intenses","Peut paraître répétitif dans sa structure"],
  reviewHtml: `<p>Haikyu!! est la référence absolue du manga de sport de la dernière décennie. Haruichi Furudate a compris quelque chose que peu de ses confrères maîtrisent : pour que les matchs aient du sens, les adversaires doivent compter autant que les héros.</p><p>Chaque équipe affrontée par Karasuno est développée avec un soin remarquable. Nekoma, Aoba Josai, Shiratorizawa, Date Tech, chacune a son identité, sa philosophie, ses figures inoubliables. On finit par vouloir que tout le monde gagne, et c'est là que le manga devient douloureux et magnifique à la fois.</p><p>Hinata et Kageyama forment le meilleur duo du genre. Leur complémentarité et leurs frictions sont le moteur émotionnel de toute la série. Leur évolution sur l'ensemble des arcs est l'une des progressions les plus satisfaisantes du manga de sport.</p><p>La conclusion d'Haikyu!! est un modèle. Furudate sait exactement où il va et comment y atterrir. Une série qui tient toutes ses promesses.</p>`,
  shops: [{"name":"Manganim","url":"https://manganim.fr/search?q=Haikyu","logo":"https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"},{"name":"Fnac","url":"https://www.fnac.com/SearchResult/ResultList.aspx?Search=Haikyu+tome","logo":"https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"},{"name":"Amazon","url":"https://www.amazon.fr/s?k=Haikyu+tome","logo":"https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"}],
  streaming: [{"name":"Crunchyroll","url":"https://www.crunchyroll.com/fr/search?q=Haikyuu","logo":"https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"}],
  live: [],
  published: true,
  status: "terminé",
  volumes: 45,
  chapters: 402,
  year: 2012,
  author: "Haruichi Furudate",
},

{
  slug: "frieren-beyond-journeys-end",
  title: "Frieren: Beyond Journey’s End",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx118586-CXKgWikBFQgS.jpg",
  tags: "Fantasy · Post-aventure · Mélancolie · Seinen",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "Après avoir vaincu le Roi des Démons, l'elfe magicienne Frieren et ses compagnons se séparent. Des décennies passent, les humains vieillissent et meurent. Frieren, quasi-immortelle, réalise qu'elle n'a jamais vraiment pris le temps de les connaître. Elle entreprend un nouveau voyage pour comprendre ce que signifie vivre.",
  pros: ["Traitement du temps et de la mort d'une profondeur rare","Frieren est un personnage inoubliable","Écriture sobre et émotionnellement précise","Chaque chapitre court laisse une trace durable"],
  cons: ["Rythme contemplatif qui peut dérouter les lecteurs d'action pure","Peu de tension dramatique au sens classique"],
  reviewHtml: `<p>Frieren est une anomalie douce dans le paysage du manga. Pas de tournoi, pas de progression de puissance, pas de méchant à abattre. Juste une elfe qui réapprend à regarder le monde à travers les yeux des humains qui lui survivront.</p><p>Le génie de la série tient dans son rapport au temps. Frieren traverse des siècles sans vieillir, et ce que ça implique, la perte, la nostalgie, la culpabilité de ne pas avoir été présent, est traité avec une précision émotionnelle rarement atteinte dans ce médium.</p><p>Fern et Stark, ses nouveaux compagnons, sont des personnages d'une richesse tranquille. Leur relation avec Frieren, et entre eux, se construit lentement, en petites scènes qui semblent anodines et qu'on n'oublie pas.</p><p>Frieren est l'un des manga les plus récompensés de ces dernières années, et c'est entièrement mérité. Une oeuvre qui touche à quelque chose d'universel sur ce que signifie vivre avec les autres.</p>`,
  shops: [{"name":"Manganim","url":"https://manganim.fr/search?q=Frieren","logo":"https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"},{"name":"Fnac","url":"https://www.fnac.com/SearchResult/ResultList.aspx?Search=Frieren+tome","logo":"https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"},{"name":"Amazon","url":"https://www.amazon.fr/s?k=Frieren+tome","logo":"https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"}],
  streaming: [{"name":"Crunchyroll","url":"https://www.crunchyroll.com/fr/search?q=Frieren","logo":"https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"}],
  live: [],
  published: true,
  status: "en cours",
  volumes: 13,
  chapters: 130,
  year: 2020,
  author: "Kanehito Yamada",
},

{
  slug: "delicious-in-dungeon",
  title: "Delicious in Dungeon",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx86082-MXizJxzbijdd.jpg",
  tags: "Fantasy · Gastronomie · Aventure · Comédie",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "Laios et son groupe d'aventuriers, à court de vivres après avoir été vaincus par un dragon, prennent une décision radicale : manger les monstres du donjon. Avec l'aide du nain Senshi, expert en cuisine monstrueuse, ils progressent vers les profondeurs pour sauver leur camarade dévorée, tout en élaborant des recettes improbables.",
  pros: ["Concept original tenu avec brio sur toute la série","World-building gastronomique d'une créativité folle","Tous les personnages sont attachants à leur manière","Fin satisfaisante et bien préparée"],
  cons: ["Peut sembler léger avant que la profondeur se révèle"],
  reviewHtml: `<p>Delicious in Dungeon est la preuve qu'une idée en apparence absurde peut devenir un chef-d'oeuvre si elle est traitée avec sérieux et passion. Ryoko Kui a construit autour de la cuisine monstrueuse un monde d'une cohérence et d'une richesse qui forcent le respect.</p><p>Chaque chapitre suit la même structure de base : la rencontre avec un monstre, sa préparation en recette par Senshi, sa dégustation. Et pourtant, jamais deux chapitres ne se ressemblent vraiment. L'inventivité de l'autrice est inépuisable, chaque monstre révèle quelque chose de nouveau sur l'écosystème du donjon.</p><p>Mais Dungeon Meshi n'est pas qu'un recueil de recettes fantastiques. La progression narrative, les révélations sur la nature du donjon et de ses créateurs, la psychologie de Laios et de ses compagnons, tout cela construit quelque chose d'ambitieux sous la légèreté apparente.</p><p>La conclusion est parfaite. Tout est préparé, tout est payé. Une des oeuvres les plus complètes du manga de fantasy récent.</p>`,
  shops: [{"name":"Manganim","url":"https://manganim.fr/search?q=Dungeon+Meshi","logo":"https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"},{"name":"Fnac","url":"https://www.fnac.com/SearchResult/ResultList.aspx?Search=Dungeon+Meshi+tome","logo":"https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"},{"name":"Amazon","url":"https://www.amazon.fr/s?k=Dungeon+Meshi+tome","logo":"https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"}],
  streaming: [{"name":"Netflix","url":"https://www.netflix.com/search?q=Delicious%20in%20Dungeon","logo":"https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940"}],
  live: [],
  published: true,
  status: "terminé",
  volumes: 14,
  chapters: 97,
  year: 2014,
  author: "Ryoko Kui",
},

{
  slug: "yu-yu-hakusho",
  title: "Yu Yu Hakusho",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30053-wCR6xyGzeUYo.png",
  tags: "Action · Surnaturel · Arts martiaux · Tournoi",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Yusuke Urameshi, voyou au grand coeur, meurt en sauvant un enfant d'une voiture. Jugé trop imprévisible pour l'au-delà, il est renvoyé dans le monde des vivants comme détective des esprits. Il doit désormais combattre démons et monstres pour maintenir l'équilibre entre les trois mondes.",
  pros: ["Classique fondateur du shōnen des années 90","Hiei et Kurama parmi les meilleurs side characters du genre","Tournoi des Ténèbres inoubliable","Togashi avant Hunter x Hunter"],
  cons: ["Deuxième moitié moins inspirée que la première","Fin abrupte après le tournoi"],
  reviewHtml: `<p>Yu Yu Hakusho est l'oeuvre de jeunesse de Yoshihiro Togashi avant qu'il révolutionne le genre avec Hunter x Hunter. Et déjà, tous les marqueurs de son génie sont présents : personnages profonds, systèmes de combat intelligents, et une volonté de casser les attentes du lecteur.</p><p>Yusuke est un délinquant au fond noble, mais ce sont ses compagnons qui volent la vedette. Hiei, le démon froid et orgueilleux, et Kurama, l'élégant esprit renard, sont parmi les personnages les plus mémorables du shōnen de cette époque. Leur développement au fil des arcs reste une masterclass.</p><p>Le Tournoi des Ténèbres est le sommet absolu de la série. Les combats sont stratégiques, les enjeux dramatiques, et chaque match révèle quelque chose de nouveau sur les personnages. C'est du shōnen de tournoi fait par quelqu'un qui comprend que les combats doivent avoir un sens narratif.</p><p>La conclusion est moins aboutie, Togashi l'a abandonnée avant terme. Mais pour tout ce qui précède, Yu Yu Hakusho reste une oeuvre fondatrice incontournable.</p>`,
  shops: [{"name":"Manganim","url":"https://manganim.fr/search?q=Yu+Yu+Hakusho","logo":"https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"},{"name":"Fnac","url":"https://www.fnac.com/SearchResult/ResultList.aspx?Search=Yu+Yu+Hakusho+tome","logo":"https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"},{"name":"Amazon","url":"https://www.amazon.fr/s?k=Yu+Yu+Hakusho+tome","logo":"https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"}],
  streaming: [{"name":"Crunchyroll","url":"https://www.crunchyroll.com/fr/search?q=Yu%20Yu%20Hakusho","logo":"https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"}],
  live: [],
  published: true,
  status: "terminé",
  volumes: 19,
  chapters: 175,
  year: 1990,
  author: "Yoshihiro Togashi",
},

{
  slug: "nana",
  title: "Nana",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30028-VJqBC1ar6AxE.png",
  tags: "Drame · Romance · Musique · Josei",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "Deux jeunes femmes prénommées Nana partagent un compartiment de train pour Tokyo. L'une fuit ses histoires d'amour, l'autre rejoint son groupe de punk rock. Elles se retrouvent colocataires et leur amitié devient l'axe autour duquel se brisent et se reconstruisent leur vie et leurs amours.",
  pros: ["L'amitié la plus sincère et la plus complexe du manga","Psychologie féminine traitée avec une profondeur rare","Atmosphère Tokyo années 2000 unique et nostalgique","Chaque personnage porte ses contradictions"],
  cons: ["Série inachevée depuis 2009 en raison de la maladie de l'autrice","Peut être douloureux émotionnellement"],
  reviewHtml: `<p>Nana est le manga qui m'a montré que le médium pouvait parler de tout, avec la même précision qu'un roman. Ai Yazawa ne raconte pas une histoire d'amour. Elle raconte comment deux personnes très différentes construisent quelque chose d'indéfinissable et d'irremplaçable en vivant ensemble.</p><p>Les deux Nana sont des personnages d'une richesse saisissante. Nana Osaki, punkeuse dure comme l'acier et blessée jusqu'à la moelle. Nana Komatsu, romantique chronique qui court après les mauvaises personnes pour les bonnes raisons. Leur complémentarité et leurs frictions sont le moteur émotionnel d'une série qui ne ressemble à aucune autre.</p><p>Yazawa traite de la musique, de l'amour, de la gloire et de la trahison avec une acuité psychologique et une tendresse qui manquent cruellement dans la fiction japonaise. Tokyo des années 2000 est un personnage à part entière, ses appartements, ses live-houses, son énergie particulière.</p><p>La série est inachevée depuis 2009. C'est douloureux. Mais ce qui existe est une oeuvre majeure du manga, et ça ne changera pas.</p>`,
  shops: [{"name":"Manganim","url":"https://manganim.fr/search?q=Nana+manga","logo":"https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"},{"name":"Fnac","url":"https://www.fnac.com/SearchResult/ResultList.aspx?Search=Nana+manga+tome","logo":"https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"},{"name":"Amazon","url":"https://www.amazon.fr/s?k=Nana+manga+tome","logo":"https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"}],
  streaming: [],
  live: [],
  published: true,
  status: "pause",
  volumes: 21,
  chapters: 84,
  year: 2000,
  author: "Ai Yazawa",
},

{
  slug: "kingdom",
  title: "Kingdom",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/nx46765-KPXir4sRqJBW.png",
  tags: "Historique · Guerre · Shōnen · Chine ancienne",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "Dans la Chine antique des Royaumes Combattants, l'orphelin de guerre Xin rêve de devenir le plus grand général de l'histoire. Aux côtés du prince Ying Zheng qui veut unifier la Chine, il gravit les échelons de l'armée à travers des batailles d'une envergure épique, perdant des amis mais gagnant en humanité.",
  pros: ["Batailles épiques parmi les meilleures du manga de guerre","Xin est l'un des héros shōnen les mieux construits","Fresque historique ambitieuse et documentée","Personnages secondaires tous mémorables"],
  cons: ["Slow burn exigeant, plus de 800 chapitres","Démarre lentement avant que la machine s'emballe"],
  reviewHtml: `<p>Kingdom est une entreprise colossale. Yasuhisa Hara s'est attaqué à l'unification de la Chine sous Qin Shi Huang, l'un des épisodes les plus sanglants et les plus fascinants de l'histoire humaine. Et il le fait avec une ambition narrative et visuelle que peu de mangas ont osée.</p><p>Xin, gamin des rues qui veut devenir le plus grand général, est un héros shōnen classique dans sa construction mais exceptionnellement bien exécuté. Sa progression est crédible, durement gagnée, et émotionnellement coûteuse. Kingdom ne protège pas ses personnages secondaires, et les pertes font mal.</p><p>Les batailles sont le coeur de la série, et Hara excelle à en faire des événements stratégiques et humains. Chaque général a sa doctrine, sa psychologie, ses failles. Les confrontations entre cerveaux militaires rivalisent avec les meilleurs shōnens de combat.</p><p>C'est un investissement considérable, mais Kingdom est l'une des fresques les plus ambitieuses et les mieux tenues du manga. Un futur classique absolu.</p>`,
  shops: [{"name":"Manganim","url":"https://manganim.fr/search?q=Kingdom+manga","logo":"https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"},{"name":"Fnac","url":"https://www.fnac.com/SearchResult/ResultList.aspx?Search=Kingdom+manga+tome","logo":"https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"},{"name":"Amazon","url":"https://www.amazon.fr/s?k=Kingdom+manga+tome","logo":"https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"}],
  streaming: [{"name":"Crunchyroll","url":"https://www.crunchyroll.com/fr/search?q=Kingdom","logo":"https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"}],
  live: [],
  published: true,
  status: "en cours",
  volumes: 72,
  chapters: 800,
  year: 2006,
  author: "Yasuhisa Hara",
},

{
  slug: "20th-century-boys",
  title: "20th Century Boys",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30003-E84fwIh22LAQ.jpg",
  tags: "Thriller · Mystère · Sci-fi · Manga de prestige",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "En 1969, des enfants inventent un livre prophétique avec un signe mystérieux comme symbole. Trente ans plus tard, une secte terroriste utilise ce même symbole pour menacer l'humanité. Kenji, gérant d'une supérette, réalise que les prophéties viennent de leur enfance, et que l'un d'eux est devenu le vilain.",
  pros: ["Narration non-linéaire d'une maîtrise absolue","Révélations progressives qui récompensent l'attention du lecteur","Thèmes sur la nostalgie et la responsabilité collective","L'oeuvre maîtresse de Naoki Urasawa"],
  cons: ["Rythme lent qui exige patience","Quelques résolutions trop rapides dans la dernière partie"],
  reviewHtml: `<p>20th Century Boys est le sommet de Naoki Urasawa, et l'un des thrillers les plus ambitieux jamais écrits dans le manga. L'idée de départ est vertigineuse : et si les jeux d'enfants d'un groupe de gamins en 1969 devenaient, trente ans plus tard, le plan d'une secte apocalyptique ?</p><p>Urasawa tresse avec maestria des temporalités multiples, l'enfance dans les années 60, la menace terroriste des années 90, le monde post-catastrophe des années 2000. Chaque révélation sur le passé éclaire le présent différemment, et le lecteur assemble peu à peu un puzzle dont les pièces semblent impossibles à ajuster.</p><p>Les personnages portent le manga avec une humanité remarquable. Kenji, héros ordinaire malgré lui, ses amis d'enfance devenus adultes imparfaits, et en creux le mystérieux Ami dont l'identité est l'un des secrets les mieux gardés du manga.</p><p>Quelques longueurs et résolutions rapides en fin de course, mais 20th Century Boys reste une oeuvre qui récompense chaque heure passée à la lire. Un chef-d'oeuvre du thriller manga.</p>`,
  shops: [{"name":"Manganim","url":"https://manganim.fr/search?q=20th+Century+Boys","logo":"https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"},{"name":"Fnac","url":"https://www.fnac.com/SearchResult/ResultList.aspx?Search=20th+Century+Boys+tome","logo":"https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"},{"name":"Amazon","url":"https://www.amazon.fr/s?k=20th+Century+Boys+tome","logo":"https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"}],
  streaming: [],
  live: [],
  published: true,
  status: "terminé",
  volumes: 22,
  chapters: 249,
  year: 1999,
  author: "Naoki Urasawa",
},

{
  slug: "akira",
  title: "Akira",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30664-JJq9tosQvlpW.jpg",
  tags: "Cyberpunk · Sci-fi · Post-apocalyptique · Seinen",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "Dans un Neo-Tokyo post-apocalyptique, Kaneda, chef d'un gang de motards, voit son ami Tetsuo développer des pouvoirs psychiques incontrôlables après une rencontre avec un enfant mystérieux. Le gouvernement veut récupérer Tetsuo à tout prix. Une course contre la montre commence dans une ville au bord du chaos.",
  pros: ["Oeuvre fondatrice du cyberpunk mondial","Artwork de Katsuhiro Otomo révolutionnaire pour son époque","Ambiance Neo-Tokyo unique et oppressante","Tetsuo parmi les antagonistes les plus tragiques du manga"],
  cons: ["Densité narrative exigeante","Deuxième moitié dense en lore politique"],
  reviewHtml: `<p>Akira n'est pas seulement un manga. C'est un acte fondateur qui a redéfini ce que la bande dessinée pouvait visuellement accomplir. Katsuhiro Otomo a dessiné Neo-Tokyo avec une précision architecturale obsessionnelle, et le résultat ressemble à une ville réelle que l'on n'a jamais visitée mais dont on reconnaît immédiatement l'atmosphère.</p><p>L'histoire de Kaneda et Tetsuo est celle de l'amitié brisée par le pouvoir. Tetsuo, le plus faible du gang, obtient des capacités psychiques qui le dépassent et le dévoreront. Son basculement progressif est l'une des études de personnage les plus fascinantes du seinen.</p><p>Akira anticipe des dizaines de thèmes du manga et du cinéma de science-fiction qui suivront : la corruption du pouvoir, les expériences sur les enfants, la ville comme organisme mourant. L'influence d'Otomo se retrouve partout, de Ghost in the Shell à Neon Genesis Evangelion.</p><p>Exigeant, dense, parfois difficile à suivre dans sa deuxième moitié. Mais Akira reste une oeuvre incontournable pour qui veut comprendre l'histoire du manga et du cyberpunk.</p>`,
  shops: [{"name":"Manganim","url":"https://manganim.fr/search?q=Akira+manga","logo":"https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"},{"name":"Fnac","url":"https://www.fnac.com/SearchResult/ResultList.aspx?Search=Akira+manga+tome","logo":"https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"},{"name":"Amazon","url":"https://www.amazon.fr/s?k=Akira+manga+tome","logo":"https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"}],
  streaming: [{"name":"Netflix","url":"https://www.netflix.com/search?q=Akira","logo":"https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940"}],
  live: [],
  published: true,
  status: "terminé",
  volumes: 6,
  chapters: 120,
  year: 1982,
  author: "Katsuhiro Otomo",
},

{
  slug: "baki-the-search-of-our-strongest-hero",
  title: "Baki: The Search of our Strongest Hero",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx35157-trkQLXrIhY2s.png",
  tags: "Arts martiaux · Combat · Action · Surhommes",
  stars: 3,
  addedAt: "2026-03-19",
  synopsis: "Baki Hanma, fils du combattant le plus puissant de la planète, s'entraîne sans relâche pour surpasser son père Yujiro, être d'une force surhumaine surnommé le Démon. Sa route croise celle des fighters les plus dangereux du monde dans des affrontements qui défient les limites du corps humain.",
  pros: ["Fan service de combat décomplexé et totalement assumé","Adversaires mémorables et physiquement inventifs","Yujiro Hanma parmi les antagonistes les plus imposants du manga"],
  cons: ["Scénario quasi inexistant, prétexte aux combats","Physiques surréalistes qui peuvent rebuter","Répétitif sur la durée"],
  reviewHtml: `<p>Baki est une promesse simple tenue avec une constance admirable : des hommes surhumains qui se battent jusqu'à l'extrême. Itagaki père ne prétend pas raconter une grande histoire. Il dessine des combattants absurdes dans des affrontements absurdes, et il le fait avec une conviction totale.</p><p>Yujiro Hanma, le Démon, est le père le plus monstrueux du manga. Sa présence dans chaque arc comme horizon indépassable donne à Baki une tension de fond permanente : peut-on vraiment vouloir vaincre quelque chose d'aussi inhumain ?</p><p>Les adversaires sont inventifs et délirants, des condamnés à mort américains aux champions de sumo en passant par des guerriers musashi. Chacun a sa spécialité physique poussée jusqu'à l'absurde. C'est l'attrait principal de la série.</p><p>Baki n'est pas pour tout le monde. Mais pour les amateurs de manga de combat décomplexé, c'est une valeur sûre. À consommer sans se prendre la tête.</p>`,
  shops: [{"name":"Manganim","url":"https://manganim.fr/search?q=Baki","logo":"https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"},{"name":"Fnac","url":"https://www.fnac.com/SearchResult/ResultList.aspx?Search=Baki+tome","logo":"https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"},{"name":"Amazon","url":"https://www.amazon.fr/s?k=Baki+tome","logo":"https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"}],
  streaming: [{"name":"Netflix","url":"https://www.netflix.com/search?q=Baki","logo":"https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940"}],
  live: [],
  published: true,
  status: "en cours",
  volumes: 42,
  chapters: 380,
  year: 1991,
  author: "Keisuke Itagaki",
},

{
  slug: "that-time-i-got-reincarnated-as-a-slime",
  title: "That Time I Got Reincarnated as a Slime",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/nx86399-NwbRFVh5koqc.jpg",
  tags: "Isekai · Fantasy · Nation-building · Comédie",
  stars: 3,
  addedAt: "2026-03-19",
  synopsis: "Satoru Mikami, salaryman japonais de 37 ans, meurt poignardé et se réincarne dans un monde fantastique sous la forme d'un slime aveugle. Il hérite cependant du pouvoir d'absorber et reproduire les capacités de ses adversaires, et commence à construire une nation de monstres dans la forêt.",
  pros: ["Isekai confortable et bienveillant qui fait du bien","Nation-building progressif satisfaisant","Rimuru est un protagoniste sympathique et intelligent"],
  cons: ["Peu de tension dramatique, le héros ne perd presque jamais","Monde très complaisant envers Rimuru","Manque de vrais enjeux sur la durée"],
  reviewHtml: `<p>Tensei Slime est l'isekai confort par excellence. Pas de drame existentiel, pas de défaites douloureuses, juste un homme gentil réincarné en slime qui fait des amis monstres et construit une ville idéale. Et dans ce registre, il est excellent.</p><p>Rimuru est un protagoniste atypique pour le genre : pragmatique, bienveillant, soucieux du bonheur de ses sujets avant sa propre gloire. Le nation-building, la diplomatie, la gestion des ressources, ça occupe une place centrale et c'est ça qui distingue la série des isekai de power fantasy purs.</p><p>Le problème est aussi sa force : Rimuru ne perd presque jamais, les menaces sont systématiquement désamorcées, et le monde entier finit par l'aimer. La tension dramatique est quasi absente. C'est reposant ou ennuyeux selon les attentes.</p><p>Pour une lecture sans prise de tête dans un univers fantasy bien construit, Tensei Slime fait le travail. Pas un chef-d'oeuvre, mais un plaisir coupable assumé.</p>`,
  shops: [{"name":"Manganim","url":"https://manganim.fr/search?q=Tensei+Slime","logo":"https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"},{"name":"Fnac","url":"https://www.fnac.com/SearchResult/ResultList.aspx?Search=Tensei+Slime+tome","logo":"https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"},{"name":"Amazon","url":"https://www.amazon.fr/s?k=Tensei+Slime+tome","logo":"https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"}],
  streaming: [{"name":"Crunchyroll","url":"https://www.crunchyroll.com/fr/search?q=That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime","logo":"https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"}],
  live: [],
  published: true,
  status: "en cours",
  volumes: 23,
  chapters: 110,
  year: 2015,
  author: "Fuse",
},

{
  slug: "lookism",
  title: "Lookism",
  category: "manhwa",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx86848-4CSItSclJUvi.jpg",
  tags: "Drame · Réaliste · Action · Société",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Park Hyun-Seok, lycéen obèse victime de brimades, se réveille avec un second corps beau et athlétique. Le jour dans son corps séduisant, la nuit dans son corps d'origine, il découvre les deux faces d'une société obsédée par l'apparence, où la beauté ouvre toutes les portes.",
  pros: ["Critique de l'apparence physique acérée et pertinente","Évolution du héros psychologiquement convaincante","Arcs d'action progressivement ambitieux","Manhwa le plus lu au monde sur Webtoon"],
  cons: ["Arcs secondaires très nombreux, parfois dispersés","Qualité narrative inégale selon les parties"],
  reviewHtml: `<p>Lookism a démarré comme une critique sociale sur l'apparence et la discrimination, et il l'est resté tout en ajoutant des couches d'action et de conspirations qui ont rendu l'univers plus dense au fil des arcs.</p><p>Park Hyun-Seok est un personnage attachant précisément parce qu'il n'est pas parfait. Même dans son beau corps, il traîne les traumatismes de sa vie d'avant. La série montre avec intelligence que changer de visage ne change pas une psychologie meurtrie par des années de mépris.</p><p>Park Tae-Joon développe autour de son héros une galerie de personnages secondaires qui finissent par occuper autant de place que lui. Les gangs de la série, leurs hiérarchies, leurs loyautés, leurs histoires individuelles forment un univers cohérent et vivant.</p><p>Très long, parfois inégal dans ses arcs secondaires, mais Lookism reste l'un des manhwas les plus lus au monde pour de bonnes raisons. Une oeuvre qui a plus à dire qu'il n'y paraît.</p>`,
  shops: [{"name":"Fnac","url":"https://www.fnac.com/SearchResult/ResultList.aspx?Search=Lookism","logo":"https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"},{"name":"Amazon","url":"https://www.amazon.fr/s?k=Lookism","logo":"https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"}],
  streaming: [{"name":"Netflix","url":"https://www.netflix.com/search?q=Lookism","logo":"https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940"}],
  live: [],
  published: true,
  status: "en cours",
  volumes: 25,
  chapters: 510,
  year: 2014,
  author: "Park Tae-jun",
},

{
  slug: "sweet-home",
  title: "Sweet Home",
  category: "manhwa",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx100954-xY0Vw2sRRo8t.png",
  tags: "Horreur · Survie · Action · Surnaturel",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Cha Hyun-Soo, adolescent reclus aux pensées suicidaires, déménage dans un vieil immeuble après la mort de sa famille. Il découvre que des humains se transforment en monstres selon leurs désirs refoulés. Enfermé avec d'autres résidents, il doit survivre tout en luttant contre sa propre monstruosité intérieure.",
  pros: ["Horreur viscérale et psychologique efficace","Métaphore sur les pulsions humaines puissante","Designs de monstres inventifs et dérangeants","Tension narrative permanente"],
  cons: ["Fin précipitée, derniers arcs moins maîtrisés","Certains personnages sacrifiés trop rapidement"],
  reviewHtml: `<p>Sweet Home est arrivé comme une claque dans le paysage du manhwa. Kim Carnby et Hwang Young-Chan ont créé quelque chose de rare : un survival-horror qui parle vraiment de psychologie humaine, pas juste de monstres à fuir.</p><p>Le concept central est brillant : les humains se transforment en créatures selon leur désir le plus profond et le plus refoulé. Un homme obsédé par la force devient une masse musculaire incontrôlable. Une femme qui déteste les bactéries se transforme en anticorps géant. Chaque monstre est un portrait psychologique déformé.</p><p>Cha Hyun-Soo, héros dépressif qui voulait mourir avant que tout ça commence, est le personnage parfait pour ce genre. Sa lutte interne entre humanité et monstruosité donne une profondeur émotionnelle rare à ce qui aurait pu n'être qu'un simple survival.</p><p>La fin est imparfaite, précipitée. Mais Sweet Home reste l'une des oeuvres d'horreur les plus percutantes du manhwa moderne.</p>`,
  shops: [{"name":"Fnac","url":"https://www.fnac.com/SearchResult/ResultList.aspx?Search=Sweet+Home+manhwa","logo":"https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"},{"name":"Amazon","url":"https://www.amazon.fr/s?k=Sweet+Home+manhwa","logo":"https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"}],
  streaming: [{"name":"Netflix","url":"https://www.netflix.com/search?q=Sweet%20Home","logo":"https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940"}],
  live: [],
  published: true,
  status: "terminé",
  volumes: 18,
  chapters: 140,
  year: 2017,
  author: "Carnby Kim",
},

{
  slug: "noblesse",
  title: "Noblesse",
  category: "manhwa",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx59983-cfSjrRxuAlAD.png",
  tags: "Action · Surnaturel · École · Manhwa classique",
  stars: 3,
  addedAt: "2026-03-19",
  synopsis: "Rai, noble vampire millénaire, se réveille après 820 ans de sommeil et s'inscrit dans un lycée moderne fondé par son serviteur Frankenstein. Cette vie paisible est brisée par une organisation secrète qui menace les humains. Rai et ses alliés doivent combattre pour protéger ce monde qu'il découvre à peine.",
  pros: ["Rai est un personnage charismatique et attachant malgré son flegme","Dynamique Rai et Frankenstein excellente et drôle","Moments épiques bien mis en scène"],
  cons: ["Scénario très convenu, antagonistes génériques","Deuxième moitié en baisse qualitative notable","Humour répétitif à la longue"],
  reviewHtml: `<p>Noblesse est le manhwa de webtoon classique, celui qui a posé des codes que des dizaines de séries ont repris depuis. Son héros, Rai, noble vampire dépassé par la modernité mais d'une puissance absolue, est une figure attachante dont le mélange de dignité surannée et de candeur face aux smartphones est une source de comédie constante.</p><p>La relation entre Rai et Frankenstein, son serviteur loyal depuis des siècles, est le coeur émotionnel de la série. Leur complicité silencieuse, leurs loyautés respectives, leurs façons si différentes d'appréhender la violence et la protection, c'est là que Noblesse est à son meilleur.</p><p>Le problème est ailleurs : les antagonistes sont interchangeables, les arcs se répètent sur le même schéma, et la série perd de la vitesse après son premier tiers. L'Union, organisation supposément menaçante, n'impressionne jamais vraiment face à la puissance absurde de nos héros.</p><p>Noblesse reste une lecture agréable pour les amateurs du genre, et un classique historique du manhwa. Mais difficile de le placer au niveau des meilleures productions coréennes récentes.</p>`,
  shops: [{"name":"Fnac","url":"https://www.fnac.com/SearchResult/ResultList.aspx?Search=Noblesse+manhwa","logo":"https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"},{"name":"Amazon","url":"https://www.amazon.fr/s?k=Noblesse+manhwa","logo":"https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"}],
  streaming: [{"name":"Crunchyroll","url":"https://www.crunchyroll.com/fr/search?q=Noblesse","logo":"https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"}],
  live: [],
  published: true,
  status: "terminé",
  volumes: 16,
  chapters: 544,
  year: 2007,
  author: "Son Jeho",
},

{
  slug: "weak-hero",
  title: "Weak Hero",
  category: "manhwa",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx113488-0ghq0eEnftk0.jpg",
  tags: "Action · Réaliste · Lycée · Combat",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Gray, nouveau lycéen au physique chétif, arrive dans un établissement gangrené par la violence. Plutôt que de s'incliner, il répond aux brutes avec une froideur calculée et une brutalité chirurgicale. Ses méthodes peu orthodoxes font de lui une légende malgré lui.",
  pros: ["Combat réaliste et brutal sans artifice surpuissant","Gray est un protagoniste fascinant et original","Critique de la violence scolaire sans complaisance","Artwork expressif et efficace"],
  cons: ["Personnages secondaires parfois peu développés","Structure des arcs un peu répétitive"],
  reviewHtml: `<p>Weak Hero se distingue radicalement des autres manhwas d'action scolaire parce que son héros n'est pas un combattant. Gray est un intello qui a décidé d'appliquer une logique froide et brutale à des situations où les autres s'en remettent aux émotions. Il casse des bras, il vise les points faibles, et il rentre chez lui étudier.</p><p>Cette approche donne aux combats une texture différente des power fantasy habituels. Gray peut perdre. Gray peut saigner. Ce qu'il ne peut pas faire, c'est renoncer, et cette obstination froide est plus impressionnante que n'importe quel pouvoir spécial.</p><p>La série parle aussi de la solidarité qui se construit entre des garçons que la violence scolaire a isolés. Donald et Ben, ses alliés progressifs, apportent une chaleur humaine qui équilibre la froideur de Gray.</p><p>Weak Hero est l'un des manhwas d'action les plus recommandables pour quelqu'un qui cherche quelque chose de plus ancré que les habituels récits de chasseurs ou de donjons. Un manhwa de rue, efficace et sincère.</p>`,
  shops: [{"name":"Fnac","url":"https://www.fnac.com/SearchResult/ResultList.aspx?Search=Weak+Hero","logo":"https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"},{"name":"Amazon","url":"https://www.amazon.fr/s?k=Weak+Hero","logo":"https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"}],
  streaming: [],
  live: [],
  published: true,
  status: "terminé",
  volumes: 8,
  chapters: 267,
  year: 2019,
  author: "Seopass",
},

{
  slug: "a-returners-magic-should-be-special",
  title: "A Returner's Magic Should Be Special",
  category: "manhwa",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx105393-oiHumQoBGKG5.jpg",
  tags: "Fantasy · Magie · Retour dans le temps · Action",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Desir Herrman, dernier survivant d'une expédition qui a failli sauver le monde du Labyrinthe des Ombres, se retrouve propulsé 13 ans en arrière à l'époque de ses études. Fort de sa connaissance du futur, il assemble une équipe pour changer le destin du monde avant qu'il soit trop tard.",
  pros: ["Boucle temporelle bien exploitée, les connaissances du futur sont utilisées intelligemment","Système magique inventif et cohérent","Progression satisfaisante du héros et de son équipe"],
  cons: ["Certains personnages secondaires manquent de profondeur","Résolutions parfois trop propres"],
  reviewHtml: `<p>A Returner's Magic propose une variation intelligente sur le thème du retour dans le temps. Desir ne revient pas seulement pour corriger des erreurs, il revient avec une stratégie, un plan précis basé sur une connaissance encyclopédique du futur. Et ça change tout à la dynamique narrative.</p><p>Le Labyrinthe des Ombres, donjon apocalyptique dont chaque étage reproduit un désastre historique, est un concept de world-building fascinant. Les arcs qui explorent ces répliques d'événements passés sont les meilleurs de la série, mêlant action, histoire et enjeux émotionnels.</p><p>L'équipe que Desir constitue progressivement, notamment Romantica et Pram, est attachante et bien équilibrée. Leurs dynamiques évoluent naturellement au fil des épreuves, sans que tout soit toujours rose.</p><p>Quelques longueurs et une tendance à trop bien s'en sortir, mais A Returner's Magic est un manhwa de fantasy soigné qui satisfait les amateurs du genre.</p>`,
  shops: [{"name":"Fnac","url":"https://www.fnac.com/SearchResult/ResultList.aspx?Search=Returners+Magic","logo":"https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"},{"name":"Amazon","url":"https://www.amazon.fr/s?k=Returners+Magic","logo":"https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"}],
  streaming: [{"name":"Crunchyroll","url":"https://www.crunchyroll.com/fr/search?q=A%20Returner's%20Magic%20Should%20Be%20Special","logo":"https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"}],
  live: [],
  published: true,
  status: "terminé",
  volumes: 12,
  chapters: 270,
  year: 2018,
  author: "Wookjakga",
},

{
  slug: "second-life-ranker",
  title: "Second Life Ranker",
  category: "manhwa",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx109957-EgJWdR7l9TBG.jpg",
  tags: "Action · Fantasy · Vengeance · Tower",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Yeon-woo apprend que son frère jumeau est mort trahi dans une Tour mystérieuse. À travers les mémoires cryptées que son frère lui laisse, il découvre les secrets de cette Tour et y entre à son tour sous le pseudonyme Cain, déterminé à venger son frère en maîtrisant les pouvoirs qu'il lui a transmis.",
  pros: ["Motivation du héros claire, simple et émotionnellement efficace","Système de progression addictif","Combats de boss inventifs et rythmés","Rythme soutenu qui tient en haleine"],
  cons: ["Héros surpuissant assez rapidement, la tension diminue","Complexité du lore excessive par moments"],
  reviewHtml: `<p>Second Life Ranker fonctionne sur une mécanique émotionnelle simple et terriblement efficace : un homme remonte le temps et l'espace pour venger son frère. Pas de rédemption complexe, pas d'ambiguïté morale. Juste une loyauté fraternelle poussée jusqu'à ses limites.</p><p>La Tour de l'Oeil du Soleil est un terrain de jeu bien construit, avec ses étages thématiques, ses clans rivaux, ses dieux qui jouent avec les humains comme des pions. L'héritage de connaissances du frère décédé donne à Yeon-woo une longueur d'avance constante, et voir comment il exploite ces informations est le plaisir principal de la lecture.</p><p>Le problème récurrent des tower manhwas se retrouve ici : le héros devient très puissant assez vite, et l'escalade de la puissance des ennemis suit mécaniquement. La tension des premières phases cède la place à un spectacle de force dont les enjeux s'érodent.</p><p>Mais dans son registre, Second Life Ranker est l'un des meilleurs représentants du genre. Une lecture efficace et addictive.</p>`,
  shops: [{"name":"Fnac","url":"https://www.fnac.com/SearchResult/ResultList.aspx?Search=Second+Life+Ranker","logo":"https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"},{"name":"Amazon","url":"https://www.amazon.fr/s?k=Second+Life+Ranker","logo":"https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"}],
  streaming: [],
  live: [],
  published: true,
  status: "en cours",
  volumes: 10,
  chapters: 200,
  year: 2019,
  author: "Sadoyeon",
},

{
  slug: "nano-machine",
  title: "Nano Machine",
  category: "manhwa",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx120980-RZ9WLd0o9hyo.jpg",
  tags: "Arts martiaux · Nanotechnologie · Action · Murim",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Yeo-un, fils illégitime d'un chef de secte martiale, reçoit l'injection d'une nano-machine venue du futur par un mystérieux descendant. Cette technologie lui confère des capacités d'apprentissage et de combat exceptionnelles. Il doit survivre aux complots de l'académie martiale Mashin pour exceller.",
  pros: ["Mélange nanotechnologie et univers murim original et bien exploité","Progression du héros satisfaisante et bien rythmée","Intrigues politiques de l'académie bien construites"],
  cons: ["Harem de personnages féminins assez convenu","Héros chanceux à l'excès par moments","Rythme inégal selon les arcs"],
  reviewHtml: `<p>Nano Machine prend le pari audacieux de mélanger la science-fiction la plus contemporaine, des nanomachines venues du futur, avec le genre murim, ces univers de clans et d'arts martiaux inspirés de la Chine ancienne. Et ça fonctionne mieux qu'on ne l'attendrait.</p><p>Yeo-un est un protagoniste dans la tradition des anti-héros murim : né du mauvais côté de la société, il utilise les ressources à sa disposition de manière pragmatique plutôt que noble. Les nano-machines ne lui donnent pas la victoire facile mais accélèrent son apprentissage et ses capacités d'analyse, ce qui donne aux combats une dimension stratégique appréciable.</p><p>L'académie Mashin, avec ses clans rivaux, ses hiérarchies internes et ses complots permanents, est un cadre de politique martiale bien utilisé. Les rivalités entre disciples, les alliances de circonstance, les trahisons programmées, tout cela est traité avec assez de subtilité pour tenir la longueur.</p><p>Nano Machine n'est pas un manhwa de prestige. Mais c'est une lecture solide et satisfaisante pour les amateurs du genre, avec une originalité de concept qui le distingue de la masse.</p>`,
  shops: [{"name":"Fnac","url":"https://www.fnac.com/SearchResult/ResultList.aspx?Search=Nano+Machine","logo":"https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"},{"name":"Amazon","url":"https://www.amazon.fr/s?k=Nano+Machine","logo":"https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"}],
  streaming: [],
  live: [],
  published: true,
  status: "en cours",
  volumes: 22,
  chapters: 230,
  year: 2020,
  author: "Hanjung Wolya",
},
{
  slug: "yu-gi-oh",
  title: "Yu-Gi-Oh!",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30054-HwrRlsJYePNF.jpg",
  tags: "Jeux · Action · Surnaturel · Shōnen",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Yugi Muto est un lycéen timide qui résout le Puzzle du Millénaire, un artéfact égyptien mystérieux. Il est dès lors habité par l'esprit d'un ancien pharaon dont la mémoire est effacée. Cet alter ego Yami Yugi joue des Jeux des Ténèbres contre les ennemis de Yugi, punissant les tricheurs et les malfaisants. La série évolue progressivement vers le jeu de cartes Duel Monsters qui a connu un succès mondial phénoménal.",
  pros: ["Impact culturel mondial immense : le jeu de cartes a généré des milliards de revenus","L'arc du Memory World et la révélation sur le passé du pharaon sont emotionnellement forts","La dualité Yugi/Yami est une des meilleures dynamiques de double personnage du manga","Premiers arcs variés avec des jeux inventifs au-delà du seul Duel Monsters"],
  cons: ["Premiers arcs plus sombres et violents très différents du Duel Monsters qui a suivi","Les règles de Duel Monsters sont parfois difficiles à suivre sans connaître le jeu"],
  reviewHtml: `<p>Yu-Gi-Oh est le manga qui a lancé l'une des franchises de jeux de cartes les plus lucratives de l'histoire. Kazuki Takahashi avait initialement une vision bien différente : un manga de jeux variés et sombres, où Yami Yugi punissait les méchants par des Jeux des Ténèbres dont les enjeux allaient bien au-delà du loisir. Cette version originale est plus adulte et plus inventive que la série Duel Monsters qu'elle est devenue.</p><p>La dualité entre le timide Yugi et l'altier Yami est l'un des dispositifs narratifs les plus efficaces du shōnen. Leur relation évolue d'une cohabitation vers une véritable amitié et une compréhension mutuelle, et l'arc final sur le passé du pharaon est un climax émotionnel à la hauteur de toute la série.</p><p>Yu-Gi-Oh a vieilli différemment selon ses arcs. Les premiers volumes ont une noirceur fascinante que la franchise officielle a oubliée. L'arc Duel Monsters reste le coeur populaire pour une raison : il est bien construit et émotionnellement généreux.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Yu-Gi-Oh",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Yu-Gi-Oh+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Yu-Gi-Oh+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Yu-Gi-Oh",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: true,
  status: "terminé",
  volumes: 38,
  chapters: 343,
  year: 1996,
  author: "Kazuki Takahashi",
},

{
  slug: "inuyasha",
  title: "InuYasha",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30676-kQTOiNRyKwqL.jpg",
  tags: "Action · Romance · Surnaturel · Shōnen",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Kagome Higurashi, lycéenne tokyoïte, est aspirée dans un puits du sanctuaire familial et se retrouve dans le Japon féodal de l'ère Sengoku. Elle y libère InuYasha, un semi-démon scellé par une flèche, et brise par accident le Joyau des Quatre Âmes en de multiples fragments. Ensemble, ils parcourent le Japon médiéval pour rassembler les éclats avant que le démon Naraku ne les récupère tous.",
  pros: ["Romance épique entre InuYasha et Kagome d'une longévité et d'une intensité rares","Univers du folklore japonais riche et passionnant","Galerie de compagnons mémorables : Miroku, Sango, Shippo","Naraku est l'un des antagonistes les plus diaboliques du manga classique"],
  cons: ["Rythme répétitif dans les arcs médians, nombreux remplissages","Résolution de certains sous-arcs trop longue"],
  reviewHtml: `<p>InuYasha est l'un des grands manga d'aventure fantastique des années 90-2000. Rumiko Takahashi a créé avec cette série une épopée romantique qui a marqué des générations de lecteurs à travers le monde, portée par une heroïne moderne plongée dans un passé mythologique japonais.</p><p>La tension romantique entre InuYasha et Kagome est le moteur émotionnel de toute la série. Takahashi gère cette relation avec une habileté certaine, alternant proximité et distance, jalousie et sacrifice. Le triangle avec Kikyo, l'amour passé d'InuYasha, est particulièrement bien traité.</p><p>InuYasha souffre du même défaut que beaucoup de séries longues de l'époque : un milieu qui s'étire. Mais ses meilleurs arcs, notamment la confrontation finale avec Naraku, tiennent toutes leurs promesses. Une oeuvre de référence du manga fantastique romantique.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Inuyasha",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Inuyasha+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Inuyasha+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=InuYasha",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: true,
  status: "terminé",
  volumes: 56,
  chapters: 558,
  year: 1996,
  author: "Rumiko Takahashi",
},

{
  slug: "knights-of-the-zodiac",
  title: "Knights of the Zodiac",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx31045-YUcWBMk7RpeK.png",
  tags: "Action · Fantasy · Classique · Shōnen",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Seiya et ses compagnons, les Chevaliers de Bronze, combattent au service d'Athéna pour protéger la Terre des dieux et démons qui cherchent à la dominer. Vêtus d'armures de métal appelées Clôts, ils canalisent l'énergie cosmique du Cosmos pour accomplir des exploits surhumains. Saint Seiya, publié depuis 1985, est l'une des séries qui a défini l'imaginaire manga pour des générations de lecteurs français.",
  pros: ["Impact culturel immense en France, série fondatrice du manga en occident","Armures et design visuels iconiques et mémorables","Mythologie grecque utilisée avec imagination et générosité","Arcs du Sanctuaire et de Poséidon parmi les meilleurs du shōnen classique"],
  cons: ["Art et rythme très datés des années 80","Répétition de schémas combat-dépassement de limites-victoire"],
  reviewHtml: `<p>Les Chevaliers du Zodiaque ont été pour beaucoup de Français leur première porte d'entrée dans le manga et l'animation japonaise. Masami Kurumada a créé quelque chose d'immédiatement iconique : des armures brillantes, une mythologie grecque fantasmée, des combats au Cosmos qui exigent de se dépasser au-delà de ses limites.</p><p>La série souffre de ses origines années 80, avec un rythme et des schémas répétitifs qui peuvent tester les nouveaux lecteurs. Mais l'arc du Sanctuaire, en particulier, est un monument du shōnen classique : douze maisons à traverser, douze adversaires d'exception, une progression implacable vers un climax qui tient toutes ses promesses.</p><p>Saint Seiya reste une oeuvre fondatrice dont l'influence sur le manga et l'imaginaire geek occidental est difficile à surestimer. À lire comme le document historique et émotionnel qu'il est.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Saint+Seiya",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Saint+Seiya+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Saint+Seiya+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Saint%20Seiya",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "captain-tsubasa",
  title: "Captain Tsubasa",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx31789-qiNlHJDMJncz.png",
  tags: "Football · Sport · Shōnen · Classique",
  stars: 3,
  addedAt: "2026-03-19",
  synopsis: "Tsubasa Ozora, enfant prodige du football, rêve de remporter la Coupe du Monde avec le Japon. De ses premières parties dans la rue jusqu'aux compétitions internationales, il affronte des rivaux d'exception dont le légendaire gardien Genzo Wakabayashi. Captain Tsubasa, publié depuis 1981, a inspiré des générations de footballeurs professionnels à travers le monde.",
  pros: ["Influence culturelle immense sur le football mondial et japonais","Rivalités emblématiques qui ont marqué des générations","Passion communicative pour le football","Tsubasa est devenu un symbole culturel au-delà du manga"],
  cons: ["Art et techniques narratives très datés des années 80","Physique complètement irréaliste (tirs nucléaires, gardiens volants)","Difficile d'aborder pour les nouveaux lecteurs habitués au manga moderne"],
  reviewHtml: `<p>Captain Tsubasa n'est pas un grand manga au sens technique du terme. Il est quelque chose de plus rare : une oeuvre qui a changé la réalité. Des joueurs professionnels comme Zinedine Zidane ou Fernando Torres ont cité Tsubasa comme leur première inspiration footballistique. Pour un manga, c'est une forme de réussite qui dépasse toutes les critiques.</p><p>Yoichi Takahashi a inventé un langage visuel pour le football dans le manga, les tirs qui brisent les filets, les dribbles défiant la physique, les gardiens qui volent. C'est absurde par les standards actuels, mais c'était révolutionnaire en 1981 et ça l'est resté dans l'imaginaire collectif.</p><p>À lire pour comprendre l'histoire du manga sportif et l'impact culturel que peut avoir un dessin animé, mais en acceptant le grand écart avec les standards actuels.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Captain+Tsubasa",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Captain+Tsubasa+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Captain+Tsubasa+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Netflix",
    url: "https://www.netflix.com/search?q=Captain%20Tsubasa",
    logo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940"
  }
],
  live: [],
  published: true,
  status: "en cours",
  volumes: 52,
  chapters: 525,
  year: 1981,
  author: "Yoichi Takahashi",
},

{
  slug: "eyeshield-21",
  title: "Eyeshield 21",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30043-b2SqUjwSzfIH.png",
  tags: "Football américain · Sport · Shōnen · Comédie",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Sena Kobayakawa, lycéen timide qui a passé sa vie à fuir les brutes, est repéré par Hiruma Yoichi, capitaine diabolique de l'équipe de football américain du lycée Deimon. Sa vitesse de fuite exceptionnelle fait de lui le runningback parfait, baptisé Eyeshield 21 pour protéger son identité. Avec ses coéquipiers improbables, il vise le Christmas Bowl, la finale nationale.",
  pros: ["Hiruma Yoichi est l'un des personnages les plus charismatiques du manga sportif","Vulgarisation efficace du football américain, sport peu connu en France","Matchs intenses avec des enjeux tactiques réels","Humour omniprésent qui rend le tout très accessible"],
  cons: ["Protagoniste Sena parfois trop effacé par rapport aux personnages secondaires","Arcs finaux légèrement trop longs"],
  reviewHtml: `<p>Eyeshield 21 est le manga qui a fait découvrir le football américain à toute une génération de lecteurs japonais et étrangers. La réussite de Riichiro Inagaki et Yusuke Murata tient en grande partie à leur talent pour expliquer un sport complexe sans jamais ennuyer, en faisant des règles tactiques des sources de tension dramatique réelle.</p><p>Hiruma est la vraie star de la série. Ce capitaine machiavélique, toujours armé, qui manipule tout le monde pour obtenir ce qu'il veut, est d'un charisme irrésistible. Il vole chaque scène et représente une version parfaitement exécutée du "génie de l'ombre" qui tire les ficelles.</p><p>Les matchs d'Eyeshield 21 sont parmi les mieux construits du manga sportif, avec de vrais ajustements tactiques, de vraies surprises, et des moments de gloire gagnés à la sueur. Une référence du genre.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Eyeshield+21",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Eyeshield+21+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Eyeshield+21+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Eyeshield%2021",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: true,
  status: "terminé",
  volumes: 37,
  chapters: 333,
  year: 2002,
  author: "Riichiro Inagaki",
},


{
  slug: "rave-master",
  title: "Rave Master",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/nx30014-Q7yKgaHVVmUg.jpg",
  tags: "Aventure · Action · Fantasy · Shōnen",
  stars: 3,
  addedAt: "2026-03-19",
  synopsis: "Haru Glory, jeune homme ordinaire vivant sur une île isolée, hérite du Rave Master, une épée magique dont seul lui peut maîtriser les cinq formes. Accompagné du chien-carotte Plue et de la mystérieuse Elie, il part à la recherche des cinq pierres Rave pour combattre la Dark Bring, source de chaos dans le monde. Premier grand manga de Hiro Mashima avant Fairy Tail.",
  pros: ["Aventure fantastique classique avec un coeur sincère et généreux","Système d'épée à cinq formes original et visuellement intéressant","Enjeux émotionnels sincères, notamment autour du passé d'Elie","Bases posées par Mashima qu'on retrouvera développées dans Fairy Tail"],
  cons: ["Art daté des débuts de Mashima, moins maîtrisé que ses oeuvres ultérieures","Certains arcs prévisibles et clichés du genre"],
  reviewHtml: `<p>Rave Master est le manga de jeunesse de Hiro Mashima, et ça se voit. L'enthousiasme est là, les idées aussi, mais la maîtrise narrative et graphique qu'il atteindra avec Fairy Tail est encore en construction. C'est un manga sincère, avec un coeur généreux, qui plaira aux amateurs d'aventure fantasy classique sans exigence particulière.</p><p>La relation entre Haru et Elie est le point fort émotionnel de la série, avec un mystère sur le passé de la jeune fille qui donne une vraie direction narrative. Plue, personnage muet à la forme incertaine, est un mascotte qui a traversé toutes les oeuvres de Mashima depuis.</p><p>À lire idéalement après Fairy Tail pour voir les origines d'un auteur, ou comme aventure shōnen solide si on cherche quelque chose de classique et bienveillant.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Rave+Master",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Rave+Master+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Rave+Master+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Rave%20Master",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "cardcaptor-sakura",
  title: "Cardcaptor Sakura",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30106-GgFOXeyB70xj.png",
  tags: "Magie · Shōjo · Aventure · Romance",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Sakura Kinomoto, écolière de dix ans, découvre par accident le Livre des Clow et libère les Cartes Clow, des entités magiques aux pouvoirs variés. Désignée Cardcaptor par le gardien du livre Cerberus, elle doit récupérer toutes les cartes avant qu'elles ne sèment le chaos. CLAMP signe avec cette série une des oeuvres fondatrices de la magical girl.",
  pros: ["Character design iconique et art CLAMP au sommet de sa forme","Équilibre parfait entre aventure, humour et moments émouvants","Représentation des relations et de l'amour d'une ouverture rare pour l'époque","Sakura est un modèle de protagoniste féminine positive et courageuse"],
  cons: ["Rythme formulaire (capture une carte par chapitre) dans les premiers volumes","Destiné à un public jeune, certains adultes trouveront le ton trop doux"],
  reviewHtml: `<p>Cardcaptor Sakura est l'une des oeuvres les plus importantes du manga shōjo des années 90. CLAMP a créé avec Sakura Kinomoto une héroïne d'une gentillesse désarmante mais jamais naïve, courageuse sans être agressive, aimante sans être passive. Elle a influencé tout ce qui a suivi dans le genre magical girl.</p><p>Ce qui distingue CCS de ses contemporaines, c'est son traitement des relations. Les amours du manga ne sont jamais réduites à un schéma simple : des personnages aiment des personnages du même genre, des élèves aiment des professeurs, et tout ça est présenté avec une naturalité et une douceur qui était révolutionnaire en 1996.</p><p>L'arc final avec les Cartes Transparentes (dans la suite publiée en 2016) est à la hauteur de l'original. CLAMP n'a rien perdu de leur maîtrise émotionnelle. Une oeuvre à faire découvrir aux plus jeunes, mais dont les adultes apprécieront toute la subtilité.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Cardcaptor+Sakura",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Cardcaptor+Sakura+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Cardcaptor+Sakura+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Cardcaptor%20Sakura",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "sailor-moon",
  title: "Sailor Moon",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30092-tjzz7ymlFfQu.png",
  tags: "Magie · Romance · Shōjo · Classique",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Usagi Tsukino, collégienne maladroite et pleurnicharde, découvre qu'elle est Sailor Moon, la guerrière de l'amour et de la justice. Guidée par le chat noir Luna, elle réunit progressivement les autres Sailor Senshi pour combattre les forces du Dark Kingdom qui cherchent à envahir la Terre. Naoko Takeuchi signe avec Sailor Moon le manga magical girl le plus influent de l'histoire.",
  pros: ["Impact culturel mondial immense, série fondatrice du genre magical girl moderne","Character design iconique dont l'influence est toujours visible aujourd'hui","Équilibre romance-action-amitié bien géré","Aspects cosmiques et mythologiques grandissants qui enrichissent l'univers"],
  cons: ["Art des années 90 parfois confus dans les scènes d'action","Certains arcs plus faibles que d'autres, notamment les arcs médians"],
  reviewHtml: `<p>Sailor Moon a défini le manga magical girl pour des décennies. Naoko Takeuchi a créé un vocabulaire visuel et thématique qui a irrigué tout ce qui a suivi dans le genre. Les transformations, les attaques spéciales, le groupe de guerrières liées par l'amitié, tout ça vient de Sailor Moon, et la plupart des variations depuis sont des variations sur ses thèmes.</p><p>Usagi est une héroïne délibérément imparfaite dans un genre qui tendait vers des protagonistes idéalisées. Elle pleure, elle est en retard, elle mange trop, elle a peur. Et pourtant, elle est au fond une des personnages les plus courageuses et les plus aimantes de toute la bande dessinée japonaise. Ce paradoxe est au coeur de son succès durable.</p><p>Les arcs les plus tardifs, notamment l'arc de Sailor Stars, atteignent une dimension cosmique épique qui contraste avec les débuts plus simples. Sailor Moon a grandi avec ses lecteurs, et c'est l'une des raisons de sa longévité.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Sailor+Moon",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Sailor+Moon+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Sailor+Moon+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Sailor%20Moon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: true,
  status: "terminé",
  volumes: 18,
  chapters: 60,
  year: 1991,
  author: "Naoko Takeuchi",
},

{
  slug: "hikaru-no-go",
  title: "Hikaru no Go",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30020-5NZUzVqJPD2L.png",
  tags: "Jeu de go · Sport · Surnaturel · Shōnen",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "Hikaru Shindo, collégien ordinaire sans aucun intérêt pour le jeu de go, entre en contact avec le fantôme de Fujiwara no Sai, un joueur de go du Heian mort il y a mille ans, qui partage son corps. Sai aspire à jouer le coup divin, la perfection du go. À travers lui, Hikaru découvre la passion pour ce jeu et commence son propre chemin vers le sommet. Hikaru no Go est le manga de sport le plus improbable jamais écrit, et l'un des meilleurs.",
  pros: ["Progression de Hikaru d'apprenti désintéressé à joueur pro parmi les meilleures du genre","Fujiwara no Sai est un personnage d'une beauté mélancolique inoubliable","A rendu le go populaire au Japon et en Corée auprès des jeunes, impact culturel réel","Rivalité Hikaru-Akira parmi les meilleures du manga"],
  cons: ["Quelques arcs de tournoi un peu longs et répétitifs","La fin arrive abruptement après un événement majeur"],
  reviewHtml: `<p>Hikaru no Go est un prodige éditorial : un manga sur le go, jeu de plateau complexe et élitiste, qui a captivé des millions de lecteurs n'ayant jamais touché un goban. Yumi Hotta et Takeshi Obata ont réussi ce tour de force en faisant du go un prisme pour parler d'apprentissage, de passion, de rivalité et de transmission.</p><p>Sai est l'un des personnages les plus mémorables du manga. Ce fantôme millénaire qui n'a qu'un désir, jouer au go, et qui doit le vivre à travers un adolescent peu motivé, est traité avec une tendresse qui rend sa trajectoire bouleversante. Leur relation dépasse largement le contrat de cohabitation forcée.</p><p>La rivalité entre Hikaru et Akira Toya est le moteur de toute la série. Deux joueurs qui se cherchent, qui se définissent mutuellement, qui ne peuvent pas avancer sans penser à l'autre. C'est la définition d'une grande rivalité de manga. Hikaru no Go est un chef-d'oeuvre qui mérite son statut de classique.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Hikaru+no+Go",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Hikaru+no+Go+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Hikaru+no+Go+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Hikaru%20no%20Go",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: true,
  status: "terminé",
  volumes: 23,
  chapters: 189,
  year: 1998,
  author: "Yumi Hotta",
},

{
  slug: "bakuman",
  title: "Bakuman.",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/95994-1FbJgX47l7em.jpg",
  tags: "Drame · Seinen · Création · Romance",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "Moritaka Mashiro, lycéen rêvant secrètement de devenir mangaka comme son oncle décédé, est découvert par son camarade Akito Takagi qui a lu ses dessins. Ensemble, ils décident de créer un manga pour le Weekly Shōnen Jump, avec comme condition de Mashiro : si leur série est adaptée en animé, la fille qu'il aime, Miho Azuki, en doublera l'héroïne. Écrit par les créateurs de Death Note, Bakuman est une lettre d'amour au manga et à ceux qui le font.",
  pros: ["Plongée fascinante dans les coulisses de l'industrie manga (Jump, éditeurs, sérialisation)","La romance à distance entre Mashiro et Miho est d'une pureté désarmante","Rivalités entre mangakas d'une intensité rarement atteinte","Progression réaliste et méritée des protagonistes"],
  cons: ["Vision de l'industrie parfois idéalisée et sexiste sur le rôle des femmes","Certains personnages secondaires sous-développés"],
  reviewHtml: `<p>Bakuman est l'un des manga les plus singuliers de Tsugumi Ohba et Takeshi Obata, le duo de Death Note. Ici, pas de dieu de la mort ni de cahier maudit. Juste deux adolescents qui veulent faire du manga dans le Jump, et tout ce que ça implique d'obstination, de doutes et de sacrifice.</p><p>La grande force du manga est son authenticité sur l'industrie. Ohba et Obata l'ont vécue de l'intérieur, et ça se sent à chaque chapitre. Les réunions avec les éditeurs, les taux de popularité, les décisions éditoriales, tout est décrit avec une précision qui donne l'impression d'un documentaire romancé. Pour quiconque s'intéresse à la création, c'est fascinant.</p><p>La romance entre Mashiro et Miho, qui se promettent de ne pas se voir jusqu'à la réalisation de leur rêve commun, est d'une pureté touchante dans sa naïveté. Elle donne au manga une dimension émotionnelle qui contraste avec l'aspect professionnel. Un chef-d'oeuvre pour tous ceux qui aiment le manga autant que ces deux personnages l'aiment.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Bakuman",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Bakuman+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Bakuman+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [],
  live: [],
  published: false,
},

{
  slug: "the-prince-of-tennis",
  title: "The Prince of Tennis",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30049-ipwZTsHitrhC.png",
  tags: "Tennis · Sport · Shōnen · Comédie",
  stars: 3,
  addedAt: "2026-03-19",
  synopsis: "Ryoma Echizen, prodige du tennis de douze ans formé aux États-Unis, intègre l'équipe de tennis du lycée Seishun. Avec ses coéquipiers variés et sous la direction de l'entraîneur Ryuzaki, ils progressent vers les championnats nationaux. Prince of Tennis est le manga de sport qui a popularisé le tennis au Japon tout en poussant les limites du réalisme sportif à leurs extrêmes absolus.",
  pros: ["A rendu le tennis populaire au Japon auprès d'une génération entière","Galerie de personnages aux styles et personnalités très variés","Les techniques de tennis impossibles ont une iconicité visuelle indéniable","Humour involontaire sur l'escalade des pouvoirs sportifs"],
  cons: ["Physique du tennis complètement abandonné dès les arcs médians","Ryoma est un protagoniste distant et peu attachant","Les suites (New Prince of Tennis) poussent l'absurde à des niveaux satiriques non intentionnels"],
  reviewHtml: `<p>Prince of Tennis est un manga de sport qui a choisi à un moment précis de ne plus se soucier du sport. Les premières arcs sont un shōnen tennistique solide, avec des personnages bien différenciés et des matchs tactiques plaisants. Puis Takeshi Konomi a commencé à inventer des techniques qui défient les lois physiques, et le manga s'est transformé en quelque chose d'entièrement différent.</p><p>L'impact culturel du manga sur le tennis japonais est réel, et ses personnages sont immédiatement reconnaissables même pour les non-lecteurs. Ryoma Echizen, cold et dominant, est un archétype du protagoniste shōnen invincible poussé à son extrême logique.</p><p>À lire en sachant ce qu'on cherche : un divertissement shōnen de sport classique dans les premiers arcs, une experience de jeu de puissance de plus en plus délirante dans les suivants.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Prince+of+Tennis",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Prince+of+Tennis+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Prince+of+Tennis+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Prince%20of%20Tennis",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "ashita-no-joe-fighting-for-tomorrow",
  title: "Ashita no Joe: Fighting for Tomorrow",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx31303-l21HJn9AXl7w.jpg",
  tags: "Boxe · Sport · Drame · Seinen",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "Joe Yabuki, voyou sans avenir errant dans les bas-fonds de Tokyo, croise la route de Danpei Tange, ancien entraîneur de boxe alcoolique qui voit en lui un talent exceptionnel. Ensemble, ils vont gravir les échelons d'un monde impitoyable, Joe transformant sa rage en uppercut, son désespoir en jab, sa vie entière en combat. Publié de 1968 à 1973, Ashita no Joe est la référence absolue du manga de sport, celle qui a tout inventé.",
  pros: ["Récit de rédemption parmi les plus puissants de toute la bande dessinée mondiale","Joe Yabuki est l'un des personnages les plus complexes et attachants du manga","Finale parmi les plus célèbres et discutées de l'histoire du médium","Exploration sans concession de la pauvreté, de l'ambition et de la dignité"],
  cons: ["Art daté des années 60-70, déroutant pour les nouveaux lecteurs","Rythme lent propre à l'époque, très différent du manga moderne"],
  reviewHtml: `<p>Ashita no Joe n'est pas seulement un manga de boxe. C'est l'histoire d'un homme qui n'a rien, qui ne vaut rien aux yeux du monde, et qui décide de tout mettre dans ses poings pour prouver qu'il existe. Joe Yabuki est l'archétype du shōnen héros avant que le terme n'existe, brut, autodestructeur, incapable de renoncer.</p><p>Asao Takamori et Tetsuya Chiba ont créé quelque chose qui dépasse le genre sportif. Les combats sont prétextes à des explorations psychologiques d'une profondeur rare. Chaque adversaire de Joe est un miroir, une version différente de ce qu'il aurait pu devenir. Rikiishi Toru, en particulier, est un rival d'une intensité tragique qui hante tout le manga.</p><p>La conclusion d'Ashita no Joe est l'une des plus discutées de l'histoire du manga. Cinquante ans plus tard, elle divise encore. C'est la marque des grandes oeuvres : elles refusent les réponses faciles.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Ashita+no+Joe",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Ashita+no+Joe+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Ashita+no+Joe+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [],
  live: [],
  published: false,
},


{
  slug: "nausicaa-of-the-valley-of-the-wind",
  title: "Nausicaä of the Valley of the Wind",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30651-xLufeLnDPqpn.jpg",
  tags: "Sci-fi · Fantasy · Aventure · Seinen",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "Dans un futur post-industriel où la civilisation humaine a été détruite par des guerres et des cataclysmes écologiques, Nausicaä est la princesse d'une petite vallée préservée du vent. Elle cherche à comprendre et à protéger la Mer des Korbes, forêt toxique qui envahit les terres humaines, plutôt qu'à la détruire. Hayao Miyazaki consacre douze ans à cette oeuvre manga qui dépasse largement le film qu'il en a tiré.",
  pros: ["Chef-d'oeuvre écologique d'une profondeur et d'une complexité uniques","Nausicaä est l'un des personnages féminins les plus complets et inspirants de toute la BD mondiale","Art de Miyazaki d'une richesse et d'une expressivité exceptionnelles","Message environnemental et philosophique d'une avant-garde qui n'a pas vieilli"],
  cons: ["Densité narrative très élevée, demande un lecteur attentif","Le film ne couvre que les deux premiers volumes, le manga est une oeuvre différente et plus ambitieuse"],
  reviewHtml: `<p>Nausicaä est l'oeuvre la plus importante de Hayao Miyazaki, et le fait qu'elle existe sous forme de manga plutôt que de film lui donne une liberté narrative qu'aucun long-métrage ne pourrait accueillir. Sur douze ans et sept volumes, Miyazaki a construit une cosmologie post-apocalyptique d'une complexité et d'une cohérence stupéfiantes.</p><p>Ce qui rend Nausicaä si particulier, c'est que son message écologique refuse la simplicité. La Mer des Korbes, que tout le monde veut détruire, est en réalité la solution. Les humains, en voulant "purifier" le monde, cherchent à reproduire exactement ce qui l'a tué. Cette ambiguïté morale radicale, écrite en 1982, était révolutionnaire et reste parfaitement pertinente.</p><p>Nausicaä elle-même est un archétype de personnage féminin héroïque qui n'a pas vieilli d'un jour. Courageuse, curieuse, profondément empathique, elle fait des choix difficiles et les assume. Une oeuvre fondamentale de la bande dessinée mondiale.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Nausicaa",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Nausicaa+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Nausicaa+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [],
  live: [],
  published: true,
  status: "terminé",
  volumes: 7,
  chapters: 59,
  year: 1982,
  author: "Hayao Miyazaki",
},

{
  slug: "gto-great-teacher-onizuka",
  title: "GTO: Great Teacher Onizuka",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30336-KWTPMwsNTeSa.png",
  tags: "Comédie · Drame · Seinen · École",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "Eikichi Onizuka, ex-chef de gang de 22 ans sans qualification ni morale apparente, décide de devenir le meilleur professeur du Japon. Affecté à une classe de terminale réputée pour avoir brisé ses professeurs précédents, il va affronter des élèves traumatisés avec les seules armes qu'il possède : son refus des conventions et son empathie brute. GTO est une comédie sociale d'une profondeur inattendue.",
  pros: ["Onizuka est l'un des personnages les plus inoubliables de toute la bande dessinée","Derrière l'humour vulgaire, un regard sincère et tendre sur l'adolescence et les blessures","Chaque élève a son propre arc de rédemption fouillé et émouvant","Humour déjanté qui n'empêche pas les moments d'une sincérité désarmante"],
  cons: ["Fan service daté et parfois malvenu","Certains gags des années 90 ont mal vieilli"],
  reviewHtml: `<p>GTO est l'un des manga les plus mal catégorisés de l'histoire. On l'associe à la comédie débile, aux gags de fesses, au prof voyou. Tout ça est vrai. Mais derrière la surface, Tohru Fujisawa a écrit l'une des explorations les plus sincères de l'adolescence blessée qu'on puisse trouver dans le manga.</p><p>Onizuka est un génie parce qu'il ne suit pas les règles qui ne fonctionnent pas. Quand un élève se coupe, il ne l'envoie pas chez le psy, il lui montre ses propres cicatrices. Quand un enfant est victime de chantage scolaire, il détruit les coupables avec les mêmes méthodes qu'eux. Il est illégal, dangereux et parfaitement efficace.</p><p>Chaque arc d'élève est une petite histoire sur quelque chose de réel : le divorce des parents, le harcèlement, l'isolement, la peur de l'avenir. Onizuka ne résout pas tout, mais il fait sentir à ces gosses qu'ils comptent pour quelqu'un. C'est suffisant pour changer des vies, dans le manga comme dans la vraie vie. Un chef-d'oeuvre.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=GTO+Great+Teacher+Onizuka",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=GTO+Great+Teacher+Onizuka+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=GTO+Great+Teacher+Onizuka+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=GTO",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: true,
  status: "terminé",
  volumes: 25,
  chapters: 200,
  year: 1997,
  author: "Tohru Fujisawa",
},

{
  slug: "initial-d",
  title: "Initial D",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/nx30375-YFIIOwp5kSqW.jpg",
  tags: "Course · Sport · Seinen · Classique",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Takumi Fujiwara livre du tofu chaque matin au sommet du mont Akina dans la Toyota AE86 de son père, depuis ses quatorze ans. Sans le savoir, ces années de conduite nocturne ont fait de lui un pilote prodige. Quand les équipes de drift locales découvrent son talent, Takumi se retrouve entraîné dans un monde de courses illégales sur les routes de montagne japonaises.",
  pros: ["Référence absolue du manga de course automobile","Courses sur les routes de montagne d'une tension tactique réelle","Influence culturelle immense sur la culture automobile mondiale","Takumi est un héros atypique : son talent est pur, inconscient, presque transcendant"],
  cons: ["Art des personnages daté et raide, surtout les visages","Sous-intrigues romantiques faibles comparées à l'action"],
  reviewHtml: `<p>Initial D est la bible du drift et de la course sur route de montagne. Shuichi Shigeno a créé un univers où la technique automobile est traitée avec un sérieux d'ingénieur, et cette rigueur transforme chaque course en quelque chose de crédible et de haletant. On apprend réellement des choses sur la physique du véhicule, les trajectoires, la gestion de l'adhérence.</p><p>Takumi est un héros fascinant parce qu'il n'est pas un geek de bagnole. Il conduit parce qu'on le lui a demandé, sans passion apparente, et son talent est le résultat d'une répétition quotidienne plutôt que d'un don conscient. Ce détachement tranquille face à ses adversaires survoltés est l'une des sources de tension les plus originales du manga sportif.</p><p>L'influence culturelle d'Initial D dépasse largement le Japon. Les touge, les AE86, la culture d'Eurobeat : tout ça a irrigué des générations de passionnés d'automobile à travers le monde. Un classique incontournable.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Initial+D",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Initial+D+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Initial+D+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Initial%20D",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "lone-wolf-and-cub",
  title: "Lone Wolf and Cub",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30904-KRN1WE3ZU3vl.jpg",
  tags: "Action · Historique · Seinen · Classique",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "Ogami Itto, ancien bourreau officiel du Shogunat Tokugawa, est trahi par le clan Yagyu et voit sa femme assassinée. Avec son fils Daigoro âgé de deux ans dans une poussette de combat, il devient Lone Wolf, tueur à gages errant sur les routes du Japon féodal en attendant de se venger. Kazuo Koike et Goseki Kojima signent un monument de la bande dessinée mondiale publié de 1970 à 1976.",
  pros: ["Chef-d'oeuvre absolu de la bande dessinée mondiale, toutes cultures confondues","Art de Goseki Kojima d'une expressivité et d'une maîtrise incomparables","Exploration profonde du bushido, de la mort et de la paternité","Influence immense sur tous les auteurs qui ont suivi"],
  cons: ["Art et rythme des années 70, très différent du manga moderne","Certains volumes sont très violents et graphiques"],
  reviewHtml: `<p>Lone Wolf and Cub est l'une des plus grandes oeuvres de la bande dessinée mondiale, point. Kazuo Koike et Goseki Kojima ont créé quelque chose qui transcende le manga et le genre historique pour atteindre une dimension littéraire universelle. La relation entre Ogami Itto et son fils Daigoro, marchant sur la voie de la mort ensemble, est l'une des plus belles histoires de paternité jamais racontées.</p><p>L'art de Kojima est sidérant. Ses cases de combat sont d'une clarté mécanique parfaite, ses paysages de neige et de nuit sont d'une beauté mélancolique, et ses moments d'intimité entre père et fils ont une douceur qui contraste parfaitement avec la violence environnante. Chaque page est une oeuvre graphique autonome.</p><p>Lone Wolf and Cub a influencé directement des générations d'auteurs, de Frank Miller à Osamu Tezuka en passant par des réalisateurs comme John Woo. C'est la définition d'une oeuvre fondatrice, à lire comme tel.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Lone+Wolf+and+Cub",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Lone+Wolf+and+Cub+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Lone+Wolf+and+Cub+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [],
  live: [],
  published: false,
},

{
  slug: "ranma",
  title: "Ranma ½",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30023-NWoD28ZKC73c.jpg",
  tags: "Comédie · Arts martiaux · Romance · Shōnen",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Ranma Saotome, adolescent expert en arts martiaux, tombe dans une source maudite lors d'un entraînement en Chine : désormais, l'eau froide le transforme en fille, l'eau chaude lui rend sa forme masculine. Fiancé malgré lui à Akane Tendo, il doit naviguer entre ses rivaux, ses prétendantes, les malédictions des autres personnages et ses propres sentiments refoulés dans la ville de Tokyo.",
  pros: ["Humour sur le changement de genre parmi les plus inventifs et généreux du manga classique","Galerie de personnages excentriques mémorables et variés","Rumiko Takahashi au sommet de sa maîtrise du gag et du timing comique","Romance Ranma-Akane touchante sous les chamailleries perpétuelles"],
  cons: ["Très long et répétitif dans sa seconde moitié","Absence de conclusion satisfaisante dans la version originale"],
  reviewHtml: `<p>Ranma ½ est la définition du manga de comédie romantique des années 80-90. Rumiko Takahashi maîtrisait comme personne l'art du gag récurrent et de la situation embarrassante, et le dispositif du changement de genre lui offre une source inépuisable de complications hilarantes et de moments de tendresse inattendus.</p><p>La galerie de personnages est l'une des plus richement peuplées du manga de l'époque. Chaque rival, chaque prétendante, chaque père excentrique apporte sa propre mécanique comique. Ryoga et son sens de l'orientation catastrophique, Shampoo et ses contraintes culturelles absurdes, Happosai le maître pervers, tous sont devenus des figures emblématiques.</p><p>Ranma ½ s'étire et se répète dans ses volumes finaux, et la conclusion laisse beaucoup de lecteurs sur leur faim. Mais ses meilleurs moments, nombreux, sont parmi les plus drôles du manga classique. Une oeuvre fondatrice du genre.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Ranma",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Ranma+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Ranma+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Ranma%201%2F2",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: true,
  status: "terminé",
  volumes: 38,
  chapters: 407,
  year: 1987,
  author: "Rumiko Takahashi",
},

{
  slug: "shijou-saikyou-no-deshi-kenichi",
  title: "Shijou Saikyou no Deshi Kenichi",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/b30988-JvtSyVVWqHUn.jpg",
  tags: "Arts martiaux · Comédie · Action · Shōnen",
  stars: 3,
  addedAt: "2026-03-19",
  synopsis: "Kenichi Shirahama, lycéen maigrichon et souvent victime de brutes, rencontre Miu Furinji et est introduit à la Ryouzanpaku, un dojo tenu par six maîtres d'arts martiaux aux styles différents. Déterminé à ne plus jamais fuir ni se laisser intimider, il subit un entraînement surhumain pour devenir le disciple le plus puissant de l'histoire. Comédie d'arts martiaux exagérée et généreuse.",
  pros: ["Présentation variée et respectueuse de nombreux styles d'arts martiaux","Les six maîtres de Ryouzanpaku sont des personnages attachants et mémorables","Progression de Kenichi crédible malgré les exagérations","Humour constamment bien dosé"],
  cons: ["Très long, avec des arcs tardifs qui s'étendent excessivement","Fan service récurrent autour de Miu et des personnages féminins"],
  reviewHtml: `<p>Kenichi est un manga d'arts martiaux qui se distingue par la richesse de sa documentation sur les différentes disciplines. Syun Matsuena a clairement fait ses recherches, et les techniques présentées, même exagérées pour les besoins du manga, reposent sur des bases réelles. C'est un aspect rare dans le genre.</p><p>Les maîtres de Ryouzanpaku sont les vrais personnages du manga. Akisame, Sakaki, Shigure, Apachai, Ma Kensei, chacun a une personnalité forte et un style de combat distinct. Leurs interactions avec Kenichi, entre cruauté dans l'entraînement et affection secrète, sont la source d'un humour constant.</p><p>La longueur est le principal défaut du manga. Sur les premiers arcs, c'est excellent. Sur la longueur totale, ça s'étire. À recommander surtout pour les 200 premiers chapitres.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Kenichi",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Kenichi+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Kenichi+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Kenichi%20the%20Mightiest%20Disciple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "dandadan",
  title: "Dandadan",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx132029-prGF4gePdSKv.jpg",
  tags: "Action · Surnaturel · Comédie · Romance",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Momo Ayase croit aux fantômes mais pas aux extraterrestres. Ken Okarun croit aux extraterrestres mais pas aux fantômes. Pour se prouver mutuellement tort, ils s'aventurent ensemble dans des lieux hantés et se retrouvent confrontés à des phénomènes paranormaux dépassant de loin leurs convictions. Dandadan mélange aliens, yokai, amour de lycéens et bagarres cosmiques dans un tourbillon d'énergie visuelle.",
  pros: ["Énergie et créativité visuelle rares, chaque chapitre surprend","Humour absurde et action effrénée s'équilibrent parfaitement","Character design des monstres et aliens d'une inventivité folle","Rythme endiablé qui ne laisse jamais souffler"],
  cons: ["Trop chaotique pour certains lecteurs, difficile de suivre tous les fils","La romance est parfois reléguée au second plan malgré son potentiel"],
  reviewHtml: `<p>Dandadan est l'une des séries les plus excitantes du Jump+ de ces dernières années. Yukinobu Tatsu vient de chez Shintaro Kago (manga d'horreur expérimental) et ça se voit : sa mise en page est d'une inventivité permanente, ses créatures sont visuellement mémorables, et son sens du rythme est redoutable.</p><p>Le manga assume pleinement son chaos. Aliens contre yokai, vol de parties génitales, grand-mères combattantes, amour de lycéens maladroit au milieu de l'apocalypse. Ce mélange improbable fonctionne parce que Tatsu y croit à fond et dessine chaque absurdité avec le même sérieux qu'une scène épique.</p><p>La relation entre Momo et Okarun, gênée et maladroite, est le fil émotionnel qui donne de l'ancrage à tout le reste. Dandadan est fun, frénétique, et visuellement parmi ce qui se fait de mieux dans le manga d'action contemporain.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Dandadan",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Dandadan+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Dandadan+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Dandadan",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: true,
  status: "en cours",
  volumes: 18,
  chapters: 180,
  year: 2021,
  author: "Yukinobu Tatsu",
},

{
  slug: "zom-100-bucket-list-of-the-dead",
  title: "Zom 100: Bucket List of the Dead",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx104660-NZZdpLJlgHle.jpg",
  tags: "Comédie · Horreur · Action · Seinen",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Akira Tendo, salaryman épuisé par trois ans de travail dans une entreprise toxique, se réveille un matin face à une apocalypse zombie. Sa réaction : un soulagement total. Il n'a plus à aller au travail. Avec une énergie retrouvée, il dresse sa liste de cent choses à faire avant de devenir zombie, et part à travers le Japon infesté accomplir chacune d'entre elles avec un enthousiasme désarmant.",
  pros: ["Concept original et subversif : l'apocalypse comme libération d'un travail oppressif","Akira est un protagoniste d'une joie de vivre communicative et contagieuse","Critique sociale sur le karoshi et la culture de travail japonaise pertinente et bien amenée","Équilibre parfait entre humour, action et émotion"],
  cons: ["Arcs tardifs perdent un peu de la fraîcheur initiale","Le message optimiste peut sembler naïf dans les situations les plus sombres"],
  reviewHtml: `<p>Zom 100 est l'apocalypse zombie la plus joyeuse jamais mise en scène. Haro Aso et Kotaro Takata ont eu l'idée brillante de faire de la fin du monde une libération : Akira Tendo, que trois ans dans une entreprise de karoshi avaient transformé en zombie avant l'heure, retrouve toute sa vitalité au moment précis où les vrais zombies débarquent.</p><p>Le manga fonctionne comme une critique sociale déguisée en comédie d'action. La liste de cent choses à faire est un inventaire de tout ce qu'une vie de salaryman sacrifie, et chaque item accompli est une petite victoire contre le système qui avait détruit Akira. C'est subversif, généreux et parfaitement calibré.</p><p>Akira est un protagoniste rare dans le manga : quelqu'un qui choisit explicitement la joie, qui court vers la vie plutôt que de fuir la mort. Dans un genre dominé par la survie anxieuse, sa philosophie est une bouffée d'air frais. Un manga qui donne envie de vivre sa liste.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Zom+100",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Zom+100+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Zom+100+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Netflix",
    url: "https://www.netflix.com/search?q=Zom%20100",
    logo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940"
  }
],
  live: [],
  published: false,
},

{
  slug: "the-eminence-in-shadow",
  title: "The Eminence in Shadow",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx106758-jtXpQYQqyNJv.jpg",
  tags: "Isekai · Comédie · Action · Seinen",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Cid Kagenou rêve depuis l'enfance d'être une puissance de l'ombre, un stratège secret qui manipule les événements depuis les coulisses. Réincarné dans un monde de fantasy, il crée une organisation fictive appelée Shadow Garden pour jouer son rôle de maître de l'ombre imaginaire. Le problème : ses inventions absurdes s'avèrent toutes réelles, et Shadow Garden combat de vraies conspiration sans que Cid le sache.",
  pros: ["Concept de parodie méta de l'isekai d'une intelligence et d'une constance rares","Cid est le personnage le plus délibérément absurde et satisfaisant de l'isekai moderne","Humour sur l'obliviousness totale du protagoniste face à la réalité jamais épuisé","Combats spectaculaires malgré le ton parodique"],
  cons: ["Les personnages secondaires sont moins développés que le concept principal","Peu d'enjeux émotionnels au-delà de la comédie"],
  reviewHtml: `<p>The Eminence in Shadow est la meilleure parodie d'isekai depuis One Punch Man. Le concept est d'une simplicité géniale : un garçon convaincu d'être dans un film de genre invente une fiction et la réalité s'y conforme parfaitement, à son insu total. Cid ne sait jamais ce qui se passe vraiment, et c'est pour ça que chaque scène est hilarante.</p><p>Ce qui distingue Touzai et son adaptation manga d'une simple comédie est la cohérence de l'exécution. Les membres de Shadow Garden sont de vraies antagonistes de puissance réelle, et leurs combats sont spectaculaires malgré le fait que Cid les traverse en mode "je joue mon rôle de badass de l'ombre". L'absurde est traité avec un sérieux total, ce qui est le secret de son efficacité.</p><p>The Eminence in Shadow est une lecture jouissive pour quiconque connaît suffisamment les codes de l'isekai pour apprécier leur démolition méthodique et affectueuse.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Eminence+in+Shadow",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Eminence+in+Shadow+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Eminence+in+Shadow+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=The%20Eminence%20in%20Shadow",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "world-trigger",
  title: "World Trigger",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx78151-o2g4GiqaiPyO.jpg",
  tags: "Sci-fi · Action · Tactique · Shōnen",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Des créatures appelées Neighbors envahissent la ville de Mikado depuis des portails interdimensionnels. La Frontier Defense Agency Border les combat avec des armures appelées Triggers. Osamu Mikumo, agent de Border de niveau C, rencontre Yuma Kuga, un Neighbor qui veut comprendre le monde des humains. World Trigger est un manga tactique d'une rigueur et d'une profondeur rares.",
  pros: ["Système de combat tactique le plus rigoureusement pensé du manga shōnen","Aucun personnage n'est fort par magie, tout s'explique par la stratégie et l'entraînement","Galerie de personnages d'une richesse exceptionnelle avec chacun leur style de combat","Daisuke Ashihara construit des batailles qui se lisent comme des parties d'échecs"],
  cons: ["Démarrage très lent les premiers volumes","Interruptions de publication fréquentes à cause de la santé de l'auteur"],
  reviewHtml: `<p>World Trigger est le manga le plus rigoureux intellectuellement dans le genre shōnen d'action. Daisuke Ashihara a construit un système de combat où la tactique prévaut absolument sur la puissance brute. Aucun personnage ne gagne parce qu'il est "plus fort" : il gagne parce qu'il a mieux préparé, mieux lu la situation, mieux utilisé ses ressources. C'est rare et fascinant.</p><p>Le système de Triggers, avec ses innombrables types d'armes et leurs interactions, est l'un des systèmes de pouvoirs les mieux pensés du manga. Chaque combattant a un set unique adapté à son style, et les batailles font des analyses post-match détaillées qui expliquent les décisions prises. C'est du management sportif appliqué aux arts martiaux fantastiques.</p><p>World Trigger récompense le lecteur patient et attentif. Si vous aimez les combats qui font réfléchir autant que regarder, c'est une référence absolue.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=World+Trigger",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=World+Trigger+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=World+Trigger+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=World%20Trigger",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "undead-unluck",
  title: "Undead Unluck",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx114791-Rj07uWUnsgLY.jpg",
  tags: "Action · Surnaturel · Comédie · Shōnen",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Fuuko Izumo a le pouvoir maudit de l'Unluck : tout être vivant qui la touche subit une malchance catastrophique. Andy est un immortel qui cherche désespérément à mourir mais ne le peut pas. Leur rencontre donne naissance à un duo explosif qui intègre l'organisation Union, chargée de gérer les porteurs de pouvoirs négatifs. Undead Unluck est une série d'action créative dont le système de pouvoirs est parmi les plus inventifs du Jump.",
  pros: ["Système de pouvoirs basé sur des concepts abstraits d'une créativité exceptionnelle","Dynamique Andy-Fuuko de comédie et de romance bien dosée","Chaque arc introduit de nouveaux pouvoirs originaux qui renouvellent constamment l'action","Yoshifumi Tozuka a une imagination visuelle débordante"],
  cons: ["Peut sembler chaotique dans ses premiers chapitres le temps que le système soit établi","Certains arcs médians moins inspirés"],
  reviewHtml: `<p>Undead Unluck est la série la plus créativement ambitieuse du Weekly Shōnen Jump de ces dernières années. Yoshifumi Tozuka a inventé un système de pouvoirs basé sur des concepts négatifs abstraits, l'Unluck, l'Undead, l'Unseen, l'Unfair, chacun avec ses propres règles et ses propres limites, d'une inventivité que très peu de manga ont égalée.</p><p>Andy et Fuuko forment un duo d'une chimie remarquable. Leur relation, qui commence par l'absurde, se construit vers quelque chose d'émotionnellement réel avec une habileté que les fans de romance apprécieront. Les enjeux personnels et cosmiques s'entremêlent de façon satisfaisante.</p><p>Undead Unluck est le genre de manga qu'on recommande à quelqu'un qui veut quelque chose de frais dans le shōnen d'action. Ça ne ressemble pas à grand chose d'autre, et c'est déjà une grande qualité.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Undead+Unluck",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Undead+Unluck+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Undead+Unluck+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Undead%20Unluck",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: true,
  status: "terminé",
  volumes: 22,
  chapters: 215,
  year: 2020,
  author: "Yoshifumi Tozuka",
},

{
  slug: "mission-yozakura-family",
  title: "Mission: Yozakura Family",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx111149-cHYBsPbWIb3L.jpg",
  tags: "Action · Comédie · Romance · Shōnen",
  stars: 3,
  addedAt: "2026-03-19",
  synopsis: "Taiyo Asano, lycéen timide dont la seule amie est Mutsumi Yozakura, découvre que la famille de cette dernière est en réalité une dynasty d'espions d'élite. Pour protéger Taiyo des ennemis de la famille, il est forcé d'en devenir membre en épousant Mutsumi. Sa nouvelle belle-famille composée de frères et sœurs avec des pouvoirs d'espionnage surhumains va l'entraîner dans un monde de missions dangereuses.",
  pros: ["Dynamique familiale espion originale et divertissante","Action bien rythmée avec des personnages aux styles de combat variés","Humour sur les situations de cohabitation efficace"],
  cons: ["Prémisse romantique forcée peu crédible","Manque de profondeur narrative comparé aux meilleurs shōnens d'action"],
  reviewHtml: `<p>Mission Yozakura Family est un shōnen d'action honnête qui exploite bien sa prémisse de famille d'espions. Hitsuji Gondaira construit une galerie de personnages aux personnalités et aux capacités bien distinctes, et les missions permettent à chacun de briller à son tour.</p><p>Le manga souffre d'une prémisse romantique peu convaincante dans ses débuts, mais trouve son rythme une fois que les relations familiales sont établies. Pour les fans de shōnen d'action léger et bien rythmé, c'est un choix solide sans prétention.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Mission+Yozakura+Family",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Mission+Yozakura+Family+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Mission+Yozakura+Family+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Mission%20Yozakura%20Family",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "witch-hat-atelier",
  title: "Witch Hat Atelier",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx98263-kIeaTXrAbGkj.jpg",
  tags: "Fantasy · Magie · Seinen · Aventure",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "Coco rêve de magie depuis toujours, mais dans son monde, la sorcellerie est un talent de naissance réservé à une caste héréditaire. En espionnant une sorcière, elle découvre le secret interdit : la magie s'apprend, elle se trace. Après avoir involontairement pétrifié sa mère, elle est prise comme apprentie par le sorcier Qifrey pour réparer son erreur et apprendre l'art des Chapeaux de Sorcière.",
  pros: ["Art de Kamome Shirahama d'une beauté et d'une précision techniques absolument exceptionnelles","Worldbuilding de la magie-écriture d'une cohérence et d'une originalité rares","Thèmes sur l'accessibilité de la connaissance et les systèmes d'exclusion traités avec profondeur","Rythme contemplatif qui magnifie chaque révélation"],
  cons: ["Rythme de publication très lent, les volumes sortent avec des intervalles importants","Peu d'action au sens classique, manga avant tout d'atmosphère et de mystère"],
  reviewHtml: `<p>Witch Hat Atelier est peut-être le manga le plus beau visuellement publié en ce moment. Kamome Shirahama dessine chaque page avec une minutie et une maîtrise qui relèvent de l'orfèvrerie. Les sorts, qui se tracent comme des glyphes complexes, sont dessinés avec une précision qui donne à la magie une tangibilité réelle et fascinante.</p><p>Mais Witch Hat Atelier n'est pas que visuellement exceptionnel. Son worldbuilding pose une question subversive : et si la magie n'était pas un don héréditaire mais une technique apprise, et si l'aristocratie magique maintenait ce mensonge pour conserver son pouvoir ? Coco, en découvrant la vérité, devient malgré elle une figure révolutionnaire.</p><p>Les thèmes sur l'exclusion, la transmission du savoir et le coût des systèmes d'élite sont traités avec une intelligence qui transcende le public cible apparent. Witch Hat Atelier est un chef-d'oeuvre en cours de construction. Cinq étoiles mérités dès maintenant.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Witch+Hat+Atelier",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Witch+Hat+Atelier+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Witch+Hat+Atelier+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [],
  live: [],
  published: true,
  status: "en cours",
  volumes: 12,
  chapters: 75,
  year: 2016,
  author: "Kamome Shirahama",
},

{
  slug: "seraph-of-the-end-vampire-reign",
  title: "Seraph of the End: Vampire Reign",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/nx73661-PJX2JcBAUYCx.png",
  tags: "Action · Post-apocalyptique · Fantasy · Shōnen",
  stars: 3,
  addedAt: "2026-03-19",
  synopsis: "Dans un monde post-apocalyptique où un virus a tué tous les adultes, les vampires ont pris le contrôle de la civilisation et gardent les humains comme bétail. Yuichiro Hyakuya, orphelin élevé par les vampires, s'échappe et rejoint l'Armée de la Lune Impériale pour se venger et retrouver son ami d'enfance Mikaela. Seraph of the End alterne combat vampirique et drama familial intense.",
  pros: ["Prémisse post-apocalyptique vampire originale","Relation entre Yuu et Mika au coeur émotionnel efficace","Combats bien chorégraphiés","Lore sur les anges déchus et les vampires intéressant"],
  cons: ["Rythme inégal avec des arcs très lents","Personnages féminins peu développés","Intrigue principale complexe mais parfois incohérente"],
  reviewHtml: `<p>Seraph of the End est un manga d'action vampire qui a de solides bases émotionnelles sans toujours les exploiter pleinement. La relation entre Yuu et Mika, amis d'enfance séparés par les circonstances et devenus ennemis de fait, est le vrai moteur émotionnel de la série, et quand le manga s'y concentre, il est à son meilleur.</p><p>La série souffre d'un rythme irrégulier et d'un lore qui se complexifie parfois au détriment de la clarté narrative. Mais pour les amateurs de fantasy post-apocalyptique avec vampires et anges déchus, c'est une lecture solide avec suffisamment de bonnes idées pour valoir l'investissement.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Seraph+of+the+End",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Seraph+of+the+End+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Seraph+of+the+End+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Seraph%20of%20the%20End",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "helck",
  title: "Helck",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/nx86720-hMyIB05OrKRC.jpg",
  tags: "Fantasy · Comédie · Action · Seinen",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Helck est un héros humain légendaire qui se présente au tournoi de recrutement des démons après avoir détruit son propre royaume. Vermilio, l'administratrice démoniaque chargée de le surveiller, est convaincue qu'il prépare un coup bas. Au fil de leur cohabitation, elle découvre que Helck cache un secret douloureux derrière son sourire permanent. Helck est une fantasy qui commence en parodie et se révèle être un drame d'une vraie profondeur.",
  pros: ["Twist narratif remarquable : passe d'une comédie légère à un drame sincère sans perdre son identité","Helck est un personnage attachant d'une complexité inattendue","Vermilio est une co-protagoniste forte et charismatique","Worldbuilding original qui inverse les codes héros/démons"],
  cons: ["Démarrage en parodie peut tromper sur la nature réelle du manga","Art simple qui s'améliore mais reste modeste"],
  reviewHtml: `<p>Helck est une surprise dans le bon sens du terme. Ce qui commence comme une parodie fantaisiste sur un héros qui veut devenir un démon se révèle chapitre après chapitre être une histoire sur la trahison, le sacrifice et ce qu'on est prêt à endurer pour protéger ceux qu'on aime. Nanaki Nanao exécute ce virage avec une maîtrise remarquable.</p><p>La relation entre Helck et Vermilio est le coeur du manga. Ces deux personnages, qui devraient être ennemis, construisent une confiance mutuelle dans des circonstances impossibles. Leur dynamic est à la fois drôle et touchante, ce qui est exactement ce que le manga promet et tient.</p><p>L'arc final, quand les vraies enjeux sont révélés, est d'une intensité émotionnelle réelle. Helck est le genre de manga qu'on recommande à quelqu'un sans trop expliquer pour qu'il vive la même surprise qu'on a vécue.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Helck",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Helck+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Helck+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Helck",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "dorohedoro",
  title: "Dorohedoro",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx31133-Jx6map3Oidz1.png",
  tags: "Dark Fantasy · Action · Comédie · Seinen",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "Caiman est un homme à tête de reptile vivant dans le Trou, une ville dystopique où les sorciers viennent tester leurs sorts sur les habitants. Avec son amie Nikaido, il traque les sorciers en espérant retrouver celui qui lui a volé son visage et sa mémoire. Dorohedoro est un univers post-apocalyptique halluciné qui mélange horreur body-horror, comédie absurde et worldbuilding d'une richesse époustouflante.",
  pros: ["Univers absolument unique, rien d'autre n'y ressemble dans le manga","Caiman et Nikaido forment l'un des meilleurs duos du manga seinen","Humour absurde qui coexiste parfaitement avec la noirceur de l'univers","Art chaotique de Q Hayashida qui devient vite addictif"],
  cons: ["Art volontairement brouillon difficile à apprivoiser au départ","Intrigue complexe avec de nombreux personnages à suivre"],
  reviewHtml: `<p>Dorohedoro est l'une des oeuvres les plus singulières de tout le manga. Q Hayashida a construit pendant quinze ans un univers délirant et cohérent, violent et hilarant, où des sorciers en costume sèment le chaos dans une ville-décharge et où le héros est un reptile amnésique qui mord les têtes pour trouver des réponses.</p><p>Ce qui est remarquable, c'est que malgré l'apparent chaos visuel et narratif, Dorohedoro est d'une maîtrise totale. Chaque personnage a sa propre logique, ses propres désirs. Les sorciers, qu'on devrait détester, deviennent des personnages attachants avec leurs propres codes et leur famille dysfonctionnelle. La frontière entre héros et antagonistes n'existe presque pas.</p><p>Le tone est unique : des scènes de barbecue détendu succèdent à des massacres, et ça fonctionne. Dorohedoro est l'oeuvre qui prouve que le manga peut faire des choses qu'aucun autre médium ne peut se permettre.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Dorohedoro",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Dorohedoro+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Dorohedoro+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Netflix",
    url: "https://www.netflix.com/search?q=Dorohedoro",
    logo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940"
  }
],
  live: [],
  published: true,
  status: "terminé",
  volumes: 23,
  chapters: 167,
  year: 2000,
  author: "Q Hayashida",
},

{
  slug: "beastars",
  title: "BEASTARS",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx98587-useiMvZ0nfya.png",
  tags: "Drame · Psychologie · Romance · Seinen",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Dans un monde anthropomorphe où carnivores et herbivores cohabitent sous des règles strictes, Legoshi, loup timide et introverti du lycée Cherryton, tombe amoureux de Haru, une lapine blanche. Leur relation impossible met en lumière les tensions profondes entre instinct et civilisation, désir et morale. Beastars est une métaphore dense sur la discrimination, la sexualité et l'identité.",
  pros: ["Métaphore sociale d'une intelligence et d'une subtilité rares","Legoshi est un protagoniste d'une complexité psychologique remarquable","Traitement courageux de thèmes matures : désir, violence, appartenance","Univers cohérent et original avec ses propres règles sociales"],
  cons: ["Arcs finaux moins maîtrisés et parfois incohérents","Certains lecteurs décrochent sur la densité thématique"],
  reviewHtml: `<p>Beastars est l'oeuvre la plus ambitieuse de Paru Itagaki, et sans doute l'une des plus originales de sa génération. Sous l'apparence d'un manga d'école avec des animaux anthropomorphes, c'est une exploration dense de ce que signifie contrôler ses instincts, désirer ce qu'on ne peut pas avoir, et exister dans une société qui vous a assigné un rôle.</p><p>Legoshi est un personnage d'une richesse peu commune. Son combat intérieur constant entre sa nature de prédateur et son amour sincère pour Haru est traité avec une honnêteté qui évite les facilités. Il ne triomphe pas de ses instincts, il les négocie, chapitre après chapitre.</p><p>Les premiers arcs sont une réussite quasi totale. La conclusion est plus discutée, Itagaki perdant un peu le fil dans ses derniers volumes. Mais Beastars reste une oeuvre qui prend des risques et les assume, ce qui est déjà beaucoup.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Beastars",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Beastars+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Beastars+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Netflix",
    url: "https://www.netflix.com/search?q=Beastars",
    logo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940"
  }
],
  live: [],
  published: true,
  status: "terminé",
  volumes: 22,
  chapters: 196,
  year: 2016,
  author: "Paru Itagaki",
},

{
  slug: "golden-kamuy",
  title: "Golden Kamuy",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx86559-Y4xDmoz4ud43.jpg",
  tags: "Aventure · Historique · Survie · Seinen",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "Saichi Sugimoto, survivant de la guerre russo-japonaise surnommé l'Immortel, apprend l'existence d'un trésor aïnou caché quelque part en Hokkaido, dont la carte est tatouée sur la peau de prisonniers évadés. Avec Asirpa, une jeune chasseuse aïnoue, il s'engage dans une course-poursuite contre des factions rivales à travers les étendues sauvages d'Hokkaido. Golden Kamuy est un manga historique d'une richesse et d'une originalité exceptionnelles.",
  pros: ["Documentation sur la culture aïnoue d'une profondeur et d'un respect rares","Galerie de personnages mémorables avec des backstories fouillés","Alternance parfaite entre survie intense, humour absurde et drame historique","Sugimoto est l'un des héros d'action les plus charismatiques du manga seinen"],
  cons: ["Très dense en informations historiques et culturelles qui demandent attention","Démarrage un peu lent le temps de poser l'univers"],
  reviewHtml: `<p>Golden Kamuy est une anomalie joyeuse dans le paysage du manga. Satoru Noda a réussi à écrire simultanément un survival haletant, une aventure historique rigoureuse, une comédie alimentaire absurde et un documentaire sur la culture aïnoue. Et tout ça fonctionne ensemble, sans que rien ne semble forcé.</p><p>La culture aïnoue est au coeur du manga d'une façon qui dépasse le simple exotisme. Noda a travaillé avec des linguistes et des anthropologues pour représenter cette civilisation avec précision et respect. Asirpa est une protagoniste à part entière, porteuse d'un savoir et d'une vision du monde qui enrichit chaque page.</p><p>Les antagonistes de Golden Kamuy sont extraordinaires. Ogata, Kiroranke, Hijikata, chacun a une philosophie, une histoire, des raisons d'agir qui les rendent fascinants et dangereux. La course au trésor aïnou est un prétexte à une exploration humaine d'une profondeur rare. Un chef-d'oeuvre complet.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Golden+Kamuy",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Golden+Kamuy+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Golden+Kamuy+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Golden%20Kamuy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: true,
  status: "terminé",
  volumes: 31,
  chapters: 314,
  year: 2014,
  author: "Satoru Noda",
},

{
  slug: "the-ancient-magus-bride",
  title: "The Ancient Magus' Bride",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/nx85435-GEy771ZSyuO0.jpg",
  tags: "Fantasy · Romance · Surnaturel · Seinen",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Chise Hatori, orpheline de seize ans sans foyer ni avenir, se vend aux enchères dans un marché de l'occulte. Elle est achetée par Elias Ainsworth, une créature magique à tête de crâne animal, qui lui révèle qu'elle est une Sleigh Beggy, une rare source de magie capable d'en absorber et en donner. Il lui annonce qu'il en fera sa fiancée et son apprentie. Un conte de fées sombre sur la guérison et l'appartenance.",
  pros: ["Worldbuilding du folklore européen et japonais d'une richesse et d'une beauté rares","Chise est un personnage fragile et attachant dont la guérison progressive est émouvante","Art de Kore Yamazaki d'une beauté envoûtante","Exploration sincère du deuil, de l'acceptation de soi et du désir d'appartenir"],
  cons: ["Relation fiancé/apprentie entre une mineure et une entité ancienne inconfortable pour certains lecteurs","Rythme contemplatif qui peut décourager les lecteurs d'action"],
  reviewHtml: `<p>The Ancient Magus' Bride est un manga qui ressemble à un conte de fées adulte : beau, étrange, parfois sombre, avec des créatures qui défient la catégorisation morale. Kore Yamazaki a construit un univers où le folklore des îles britanniques et la magie japonaise coexistent naturellement, et l'ensemble est visuellement somptueux.</p><p>Chise est un personnage d'une vulnérabilité touchante. Une fille qui se croit sans valeur et qui accepte sa vente comme une délivrance apprend lentement à désirer vivre pour elle-même. Sa relation avec Elias, entité ancienne qui ne comprend pas les émotions humaines mais cherche à les apprendre, est complexe et traitée avec une honnêteté qui évite les facilités romantiques.</p><p>The Ancient Magus' Bride récompense les lecteurs patients qui cherchent quelque chose d'atmosphérique et d'émotionnellement riche. C'est un manga qui s'apprécie comme un conte, pas comme une aventure.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Ancient+Magus+Bride",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Ancient+Magus+Bride+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Ancient+Magus+Bride+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=The%20Ancient%20Magus%20Bride",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "toilet-bound-hanako-kun",
  title: "Toilet-Bound Hanako-kun",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/nx98842-Ji0v423UZ4er.jpg",
  tags: "Surnaturel · Romance · Mystère · Shōnen",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Nene Yashiro convoque le fantôme de la toilette du troisième niveau de son lycée pour exaucer son voeu romantique, et se retrouve liée à Hanako, esprit espiègle mais puissant, comme son assistant. Ensemble, ils gèrent les mystères surnaturels de l'école et les Sept Merveilles qui l'habitent. Aida Iro signe un manga d'atmosphère gothique à l'art unique et à la narration émotionnellement dense.",
  pros: ["Art de Aida Iro d'une originalité visuelle absolument unique dans le manga","Atmosphère qui mélange humour léger et horreur folk japonaise avec une expertise rare","Lore des Sept Merveilles d'une richesse et d'une cohérence impressionnantes","Moments émotionnels d'une profondeur inattendue pour un shōnen"],
  cons: ["Rythme irrégulier, certains arcs plus lents que d'autres","La romance reste très implicite pour les lecteurs qui l'attendent"],
  reviewHtml: `<p>Toilet-Bound Hanako-kun est visuellement l'un des manga les plus originaux de sa génération. Aida Iro a développé un style graphique immédiatement reconnaissable, avec ses aplats de couleurs vives, ses décorations géométriques et ses designs de personnages impossibles à confondre avec n'importe quel autre manga.</p><p>Derrière l'humour et la légèreté apparente, le manga cache une mélancolie profonde. Hanako est un personnage d'une complexité que ses fanfaronnades dissimulent soigneusement. Les arcs qui révèlent son passé et sa nature réelle sont parmi les plus émouvants du shōnen récent.</p><p>Le lore des Sept Merveilles de l'école est un worldbuilding fantastique d'une cohérence et d'une inventivité impressionnantes. Chaque mystère révélé en ouvre plusieurs autres. Un manga qui récompense l'attention et la fidélité.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Toilet+Bound+Hanako-kun",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Toilet+Bound+Hanako-kun+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Toilet+Bound+Hanako-kun+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Toilet-Bound%20Hanako-kun",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "kaguya-sama-love-is-war",
  title: "Kaguya-sama: Love is War",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx86635-EdaLQmsn86Fy.png",
  tags: "Comédie · Romance · Psychologie · Seinen",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "Miyuki Shirogane et Kaguya Shinomiya sont les deux élèves les plus brillants du prestigieux lycée Shuchiin. Tous deux éperdument amoureux l'un de l'autre, ils refusent catégoriquement d'être le premier à avouer, convaincu que le premier à craquer perd. Chaque chapitre est une bataille de manipulation psychologique et d'orgueil entre deux génies qui s'aiment trop pour le dire. Aka Akasaka signe l'une des comédies romantiques les plus intelligentes du manga.",
  pros: ["Concept de bataille mentale appliqué à la romance d'une créativité inépuisable","Personnages principaux remarquablement écrits avec une évolution réelle","Humour d'une constance et d'une finesse rares sur des dizaines de volumes","Conclusion satisfaisante et méritée"],
  cons: ["Arcs finaux plus sombres et dramatiques peuvent déstabiliser les lecteurs venus pour la comédie","Certains personnages secondaires envahissent trop l'espace narratif"],
  reviewHtml: `<p>Kaguya-sama est la meilleure comédie romantique du manga moderne, et ce n'est pas une hyperbole. Aka Akasaka a eu l'idée de génie de prendre deux personnages qui s'aiment sincèrement et de faire de cet amour leur principal ennemi. Le résultat est des centaines de chapitres de jeux mentaux hilarants, où l'on sait depuis le début qu'ils finiront ensemble et où on est pourtant incapable de prédire comment ils y arriveront.</p><p>La force du manga tient dans la richesse de ses personnages. Kaguya et Shirogane évoluent vraiment. Kaguya, élevée dans un environnement familial froid et calculateur, apprend au fil des chapitres ce que signifie vouloir quelque chose pour soi. Shirogane, fils de famille modeste qui s'est imposé par le travail, apprend à accepter d'être aidé. Ces arcs de croissance donnent du poids à la comédie.</p><p>Chika Fujiwara, élément chaotique en tête-à-tête permanente avec les plans des deux protagonistes, est l'une des personnages comiques les plus efficaces du manga récent. Kaguya-sama est un chef-d'oeuvre de la comédie romantique qui tient toutes ses promesses.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Kaguya-sama",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Kaguya-sama+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Kaguya-sama+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Kaguya-sama%3A%20Love%20is%20War",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: true,
  status: "terminé",
  volumes: 28,
  chapters: 281,
  year: 2015,
  author: "Aka Akasaka",
},

{
  slug: "moriarty-the-patriot",
  title: "Moriarty the Patriot",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx98544-UzMzrwxRii6p.jpg",
  tags: "Mystère · Historique · Seinen · Thriller",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "William James Moriarty, fils illégitime anobli par adoption, est un jeune lord victorien animé par une ambition révolutionnaire : détruire le système de castes britannique de l'intérieur. Avec ses frères et une équipe de confidents, il orchestre des crimes calculés pour exposer et punir les nobles corrompus. L'arrivée de Sherlock Holmes dans sa vie transforme l'ennemi juré des romans de Conan Doyle en protagoniste nuancé.",
  pros: ["Réinvention remarquable de Moriarty en anti-héros complexe et attachant","Reconstitution de l'ère victorienne d'une richesse visuelle impressionnante","La dynamique Moriarty-Holmes est d'une tension et d'une complicité fascinantes","Questionnements profonds sur la justice, la légitimité et le changement social"],
  cons: ["Certains arcs s'étirent sur la longueur","Fin de série divisive pour les fans du Moriarty original de Conan Doyle"],
  reviewHtml: `<p>Moriarty the Patriot est l'une des meilleures réappropriations d'un personnage littéraire dans le manga. Ryosuke Takeuchi et Hikaru Miyoshi prennent le grand méchant de Sherlock Holmes et en font le héros d'une révolution sociale victorienne. Le résultat est un thriller historique d'une intelligence remarquable.</p><p>Le William Moriarty qu'ils construisent est fascinant : idéaliste, froid, méthodique, animé par une rage sociale légitime et des moyens moralement ambigus. Son projet de destruction des privilèges de naissance par la force et la manipulation pose des questions sur la justice qui restent sans réponse simple.</p><p>L'arrivée de Sherlock Holmes est le vrai tournant du manga. Leur relation, faite d'admiration mutuelle et de complication émotionnelle croissante, est l'une des plus magnétiques du manga récent. Une série ambitieuse et réussie.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Moriarty+the+Patriot",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Moriarty+the+Patriot+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Moriarty+the+Patriot+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Moriarty%20the%20Patriot",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "the-case-study-of-vanitas",
  title: "The Case Study of Vanitas",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx86568-IibEQI2zjYFl.jpg",
  tags: "Fantasy · Romance · Aventure · Seinen",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Dans un Paris steampunk du XIXe siècle, Noé Archiviste arrive depuis le monde des vampires à la recherche du mystérieux Livre de Vanitas. Il rencontre Vanitas, un humain excentrique et arrogant qui prétend posséder ce grimoire maudit et l'utilise pour soigner les vampires corrompus par leurs noms. Une aventure sur fond de comédie, de secrets et de manipulation entre deux personnages que tout oppose.",
  pros: ["Direction artistique steampunk de Paris d'une élégance et d'une richesse remarquables","Dynamique Noé-Vanitas hilarante et progressivement touchante","Jun Mochizuki maîtrise la gestion des révélations et du mystère","Humour et drama équilibrés avec expertise"],
  cons: ["Structure narrative complexe avec de nombreux fils qui exigent de l'attention","Rythme lent dans certains arcs de worldbuilding"],
  reviewHtml: `<p>The Case Study of Vanitas est Jun Mochizuki au meilleur de sa forme. Après Pandora Hearts, elle revient avec un manga vampirique steampunk d'une sophistication narrative et visuelle impressionnante. Le Paris imaginaire qu'elle construit est un personnage en soi, somptueux et cohérent.</p><p>La relation entre Noé et Vanitas est le coeur du manga. Leur dynamique de binôme comique cache des enjeux bien plus sombres que ce que leurs chamailleries laissent entrevoir. Mochizuki excelle dans cet art de laisser des indices que le lecteur assemble progressivement en quelque chose d'inévitable et douloureux.</p><p>Pour les amateurs de fantasy romantique avec du mystère et de l'humour, The Case Study of Vanitas est parmi les meilleures propositions du manga actuel. Une oeuvre ambitieuse qui tient ses promesses.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Case+Study+of+Vanitas",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Case+Study+of+Vanitas+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Case+Study+of+Vanitas+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=The%20Case%20Study%20of%20Vanitas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "no-guns-life",
  title: "No Guns Life",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx86994-dD2VeOMADGhC.png",
  tags: "Sci-fi · Noir · Action · Seinen",
  stars: 3,
  addedAt: "2026-03-19",
  synopsis: "Juzo Inui est un Extended, humain modifié avec une tête en forme de revolver, qui travaille comme résolveur de problèmes dans une ville cyberpunk en marge de la loi. Quand un enfant Extended fugitif lui est confié, il se retrouve pris entre une méga-corporation, des rebelles et les nombreux acteurs d'un monde où l'humanité augmentée a créé de nouvelles hiérarchies sociales.",
  pros: ["Atmosphère cyberpunk noir des années 40 très bien rendue","Juzo est un personnage d'une froideur et d'une intégrité attachantes","Critique sociale sur les corps augmentés et la marchandisation du corps efficace","Design visuel original, notamment la tête-revolver iconique"],
  cons: ["Rythme lent et parfois difficile à suivre","Certains arcs moins inspirés que d'autres"],
  reviewHtml: `<p>No Guns Life est un manga d'atmosphère avant tout. Tasuku Karasuma a dessiné une ville cyberpunk post-guerre imprégnée de film noir américain des années 40, avec ses détectives fatigués, ses corporations sans scrupule et ses innocents coincés au milieu. L'ensemble est visuellement cohérent et immersif.</p><p>Juzo Inui, avec sa tête de flingue et son code moral rigide, est un protagoniste qui marche dans la tradition des détectives durs à cuire. Son refus de se plier aux règles des puissants, même quand c'est à son détriment, est une posture attachante dans un genre qui en a besoin.</p><p>No Guns Life est une bonne série pour les amateurs de cyberpunk noir et de seinen d'atmosphère, moins recommandée pour ceux qui cherchent un rythme soutenu et des révélations fréquentes.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=No+Guns+Life",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=No+Guns+Life+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=No+Guns+Life+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=No%20Guns%20Life",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "dragon-quest-the-adventure-of-dai",
  title: "Dragon Quest: The Adventure of Dai",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30871-NzemCChOPyDk.jpg",
  tags: "Fantasy · Aventure · Shōnen · Classique",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Dai, jeune garçon élevé par des monstres sur une île isolée, rêve de devenir héros. Quand le Seigneur des Ténèbres Hadlar ressurgit, Dai découvre qu'il est le descendant d'un légendaire Paladin. Aux côtés du magicien Popp et de la princesse Leona, il part combattre l'Empire des Ténèbres. Adaptation du célèbre jeu vidéo, Dragon Quest: The Adventure of Dai est un shōnen classique des années 90 d'une qualité remarquable.",
  pros: ["Worldbuilding riche hérité de la saga Dragon Quest enrichi d'éléments originaux","Le trio Dai-Popp-Maam est l'une des meilleures dynamiques de groupe du shōnen","Progression de puissance bien dosée et satisfaisante","Antagonistes avec des motivations et une présence mémorables"],
  cons: ["Art daté des années 90 qui peut dérouter","Certaines conventions du shōnen de l'époque aujourd'hui très codifiées"],
  reviewHtml: `<p>The Adventure of Dai est l'une des grandes réussites du shōnen des années 90, et sa réédition récente a permis à de nouvelles générations de le découvrir enfin. Riku Sanjo et Koji Inada ont pris l'univers de Dragon Quest et en ont fait quelque chose de profondément personnel, une épopée héroïque avec ses propres règles et sa propre mythologie.</p><p>Le trio principal fonctionne parce que chacun a son arc de croissance distinct. Popp en particulier, d'abord couard et calculateur, traverse l'une des meilleures évolutions de personnage du shōnen classique. Sa transformation est crédible parce qu'elle est payée à un prix réel.</p><p>Les antagonistes sont également notables. Hyunckel et Baran, en particulier, sont des adversaires qui dépassent le simple rôle de boss à vaincre. Dai reste l'une des meilleures adaptations de jeu vidéo en manga, et ce n'est pas rien.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Dragon+Quest+Dai",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Dragon+Quest+Dai+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Dragon+Quest+Dai+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Dragon%20Quest%20Dai%20no%20Daibouken",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "horimiya",
  title: "Horimiya",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx72451-vVXtRwyttjGG.png",
  tags: "Romance · Comédie · Shōnen · École",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Kyoko Hori est populaire et brillante au lycée, mais chez elle c'est une sœur dévouée et une mère de substitution pour son petit frère. Izumi Miyamura semble être un nerd sombre et asocial, mais hors de l'école il cache des tatouages et des piercings en nombre. Ces deux façades qui se dévoilent mutuellement donnent naissance à une romance naturelle et sincère.",
  pros: ["Romance qui se déclare vite, sans fausses tensions artificielles — rafraîchissant","Les deux protagonistes sont attachants et complémentaires","Humour léger et efficace autour du groupe d'amis","Art propre et expressif de Daisuke Hagiwara"],
  cons: ["Peu d'enjeux dramatiques, reste en surface après la confession","Personnages secondaires sous-exploités malgré leur potentiel"],
  reviewHtml: `<p>Horimiya fait quelque chose d'inhabituel dans le manga romantique : ses protagonistes se confessent leurs sentiments assez tôt et passent la majorité de la série en couple. Pas de malentendus interminables, pas de triangles amoureux épuisants. Juste deux personnes qui apprennent à se connaître vraiment et à s'aimer tels qu'ils sont.</p><p>Ce choix est à la fois la force et la limite du manga. C'est reposant et agréable à lire, on s'attache à Hori et Miyamura qui forment un couple crédible et touchant. Mais une fois la romance établie, le manga manque un peu d'enjeux pour maintenir la tension narrative sur la longueur.</p><p>Horimiya reste l'une des meilleures romances lycéennes du manga récent, parfaite pour les lecteurs qui veulent quelque chose de doux et de sincère sans drama excessif.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Horimiya",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Horimiya+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Horimiya+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Horimiya",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: true,
  status: "terminé",
  volumes: 16,
  chapters: 122,
  year: 2011,
  author: "HERO",
},

{
  slug: "your-lie-in-april",
  title: "Your Lie in April",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx67707-srHFl9GBmfig.png",
  tags: "Romance · Musique · Drame · Shōnen",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "Kousei Arima était un prodige du piano surnommé la Machine Humaine pour sa précision mécanique, jusqu'au jour où, à la suite du décès de sa mère tyrannique et aimante à la fois, il devient incapable d'entendre sa propre musique. Deux ans plus tard, il rencontre la violoniste Kaori Miyazono, imprévisible et lumineuse, qui va le forcer à remonter sur scène et à ressentir à nouveau.",
  pros: ["L'une des histoires d'amour les plus dévastatrices et les plus belles du manga","Représentation musicale visuelle d'une poésie et d'une originalité remarquables","Kaori Miyazono est un personnage inoubliable dont la présence illumine chaque page","Conclusion parmi les plus courageuses et les plus déchirantes du manga romantique"],
  cons: ["Très éprouvant émotionnellement, déconseillé en état de fragilité","Certains flashbacks de l'enfance de Kousei sont difficiles à traverser"],
  reviewHtml: `<p>Your Lie in April est l'un des manga les plus douloureux et les plus beaux qu'on puisse lire. Naoshi Arakawa raconte une histoire d'amour et de musique avec une sincérité totale, sans jamais mentir à son lecteur sur où ça va, et cette honnêteté rend chaque chapitre à la fois lumineux et insupportable.</p><p>Kaori Miyazono est un personnage d'exception. Elle incarne quelque chose d'absolument singulier : la joie totale de vivre dans le présent, même quand le présent est tout ce qu'il reste. Son influence sur Kousei n'est pas celle d'une muse passive, c'est une force active qui choisit de donner tout ce qu'elle a.</p><p>La représentation visuelle de la musique dans Your Lie in April est l'une des réalisations graphiques les plus remarquables du manga. Arakawa traduit le son en lumière, en mouvement, en pages qui semblent résonner. C'est une oeuvre qui fait entendre ce qu'on ne peut pas voir.</p><p>Your Lie in April vous brisera. Et vous vous en souviendrez toute votre vie.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Your+Lie+in+April",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Your+Lie+in+April+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Your+Lie+in+April+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Netflix",
    url: "https://www.netflix.com/search?q=Your%20Lie%20in%20April",
    logo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940"
  }
],
  live: [],
  published: true,
  status: "terminé",
  volumes: 11,
  chapters: 44,
  year: 2011,
  author: "Naoshi Arakawa",
},

{
  slug: "koe-no-katachi",
  title: "Koe no Katachi",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx78621-5EoA5Nv06Ok4.jpg",
  tags: "Drame · Romance · Seinen · Rédemption",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "Shoya Ishida a harcelé Shoko Nishimiya, une camarade sourde, tout au long de l'école primaire. Des années après, rongé par la honte et le remords, il décide de la retrouver pour s'excuser. A Silent Voice est un manga sur la culpabilité, la réhabilitation et la possibilité de se pardonner soi-même, traité avec une honnêteté qui n'épargne personne.",
  pros: ["Traitement du harcèlement et de la surdité d'une sensibilité et d'une précision rares","Shoya est l'un des protagonistes en arc de rédemption les mieux écrits du manga","Yoshitoki Oima évite tous les pièges du mélodrame facile","Chaque personnage secondaire a ses propres torts et sa propre complexité"],
  cons: ["Très éprouvant émotionnellement, certaines scènes sont difficiles","Certains personnages secondaires restent ambigus jusqu'à la frustration"],
  reviewHtml: `<p>A Silent Voice est l'un des manga les plus importants de sa génération. Yoshitoki Oima a abordé le harcèlement scolaire et la surdité avec une honnêteté rare, en refusant de simplifier les situations ou de distribuer les torts de manière binaire. Shoya n'est pas un monstre devenu bon : c'est un enfant qui a fait des choses monstrueuses, qui le sait, et qui cherche à vivre avec ça.</p><p>La représentation de Shoko Nishimiya est particulièrement réussie. Sourde dans un monde qui n'est pas fait pour elle, elle n'est ni une victime pitoyable ni une héroïne au-dessus de tout. Elle a ses propres vulnérabilités, ses propres colères, ses propres limites. La voir interagir avec le monde par ses propres moyens est l'une des choses les plus touchantes du manga.</p><p>A Silent Voice vous brisera le coeur et vous le rendra un peu différent. C'est la définition d'un chef-d'oeuvre qui dépasse son médium.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=A+Silent+Voice",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=A+Silent+Voice+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=A+Silent+Voice+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Netflix",
    url: "https://www.netflix.com/search?q=A%20Silent%20Voice",
    logo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940"
  }
],
  live: [],
  published: true,
  status: "terminé",
  volumes: 7,
  chapters: 62,
  year: 2013,
  author: "Yoshitoki Oima",
},

{
  slug: "fruits-basket",
  title: "Fruits Basket",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30102-MJuQ0e0k2CgU.png",
  tags: "Romance · Surnaturel · Shōjo · Drame",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Tohru Honda, orpheline qui vivait dans une tente, est recueillie par la famille Sohma. Elle découvre rapidement leur secret : certains membres se transforment en animaux du zodiaque chinois au contact d'une personne de l'autre sexe. Derrière les transformations comiques se cache une malédiction familiale profondément douloureuse. Fruits Basket est un shōjo sur la guérison, la famille choisie et le pouvoir d'accepter les autres.",
  pros: ["Tohru Honda est l'un des personnages les plus aimants et sincères du shōjo","Traitement courageux des traumatismes familiaux et de la toxicité","Évolution émotionnelle profonde de presque tous les personnages","Conclusion satisfaisante et méritée"],
  cons: ["Début formulaire avec les transformations qui peut sembler léger","Rythme inégal entre les tomes comiques et les tomes plus sombres"],
  reviewHtml: `<p>Fruits Basket commence comme une comédie romantique avec des gens qui se transforment en animaux zodiacaux, et se révèle être l'une des explorations les plus sensibles et courageuses de la toxicité familiale dans le manga shōjo. Natsuki Takaya n'épargne pas ses personnages, mais elle leur offre aussi une possibilité de guérison réelle.</p><p>Tohru est l'inverse des héroïnes shōjo passives : elle est active dans sa bonté, elle choisit d'aimer les Sohma tels qu'ils sont, brisés et inaptes aux relations normales, et cette décision a un coût. La voir tenir cette position chapitre après chapitre est émouvant et inspirant.</p><p>L'arc final, qui affronte la malédiction des Sohma dans ses racines, est l'une des conclusions les plus méritées du genre. Fruits Basket est la définition d'un shōjo qui grandit avec son lecteur.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Fruits+Basket",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Fruits+Basket+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Fruits+Basket+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Fruits%20Basket",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: true,
  status: "terminé",
  volumes: 23,
  chapters: 136,
  year: 1998,
  author: "Natsuki Takaya",
},

{
  slug: "ouran-high-school-host-club",
  title: "Ouran High School Host Club",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30030-zBHKa3yHdtnM.png",
  tags: "Comédie · Romance · Shōjo · Parodie",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Haruhi Fujioka, étudiante boursière d'une famille modeste dans l'élitiste lycée Ouran, casse accidentellement un vase de dix millions de yens appartenant au Host Club, un club de beaux garçons riches qui divertissent les filles de l'école. Pour rembourser sa dette, elle est recrutée comme nouveau membre. Bisco Hatori signe une parodie affectueuse du shōjo romantique tout en livrant une vraie romance.",
  pros: ["Parodie bienveillante et intelligente des codes du shōjo et du harem","Haruhi est une héroïne pragmatique et rafraîchissante, indifférente aux conventions sociales","Chaque membre du Host Club est un archétype shōjo déconstruit avec humour","Romance principale (Haruhi-Tamaki) touchante malgré l'ironie omniprésente"],
  cons: ["Arcs finaux plus sérieux qui contrastent avec la légèreté initiale","Certains volumes moins inspirés au milieu de la série"],
  reviewHtml: `<p>Ouran High School Host Club est le manga qui prouve qu'une parodie peut être aussi touchante que l'original. Bisco Hatori se moque des codes du shōjo avec une affection évidente pour le genre, et ses personnages, qui sont tous des archétypes exagérés, finissent par acquérir une profondeur réelle au fil des volumes.</p><p>Haruhi est l'une des meilleures héroïnes du shōjo parce qu'elle n'appartient pas à sa logique. Elle ne s'emballe pas pour les beaux garçons, elle ne cherche pas à être sauvée, et son pragmatisme décontracté face aux folies du Host Club est la source d'un humour constant et frais.</p><p>La romance avec Tamaki, aussi ridicule que sincère, est finalement très bien construite sur la longueur. Ouran a vieilli avec grâce et reste une lecture incontournable du shōjo des années 2000.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Ouran+Host+Club",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Ouran+Host+Club+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Ouran+Host+Club+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Ouran%20High%20School%20Host%20Club",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: true,
  status: "terminé",
  volumes: 18,
  chapters: 87,
  year: 2002,
  author: "Bisco Hatori",
},

{
  slug: "nisekoi",
  title: "Nisekoi",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/24172.jpg",
  tags: "Comédie · Romance · Harem · Shōnen",
  stars: 3,
  addedAt: "2026-03-19",
  synopsis: "Raku Ichijo, fils du chef d'un clan yakuza, est forcé de simuler une relation avec Chitoge Kirisaki, fille du chef d'une famille de gangsters rivale, pour maintenir la paix entre leurs organisations. La complication : Raku garde depuis dix ans un médaillon promis à une fille dont il a oublié le nom. Commence un harem romantique où plusieurs prétendantes pourraient être la mystérieuse fille au pendentif.",
  pros: ["Prémisse amusante et bien exécutée dans les premiers volumes","Chitoge et Onodera forment un triangle amoureux efficace","Humour de situation efficace et bien rythmé","Art soigné de Naoshi Komi"],
  cons: ["Conclusion très controversée qui a déçu une majorité des lecteurs","Stagnation du mystère du médaillon trop longue","Résolution peu satisfaisante au regard de l'investissement"],
  reviewHtml: `<p>Nisekoi est un harem romantique compétent qui a eu le malheur d'une conclusion que beaucoup de ses lecteurs ont jugée décevante. Dans ses meilleurs moments, la dynamique entre Raku et Chitoge est vivante et amusante, et le mystère du médaillon est une accroche narrative efficace.</p><p>Le problème est que Naoshi Komi a trop longtemps refusé de trancher dans la hiérarchie romantique, diluant progressivement l'intérêt du lecteur. Quand la réponse arrive enfin, elle a perdu une partie de sa portée émotionnelle. Nisekoi reste une lecture agréable si on accepte ses limites de genre, mais ne tient pas toutes ses promesses initiales.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Nisekoi",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Nisekoi+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Nisekoi+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Nisekoi",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: true,
  status: "terminé",
  volumes: 25,
  chapters: 229,
  year: 2011,
  author: "Naoshi Komi",
},

{
  slug: "my-dress-up-darling",
  title: "My Dress-Up Darling",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx101583-VI1PT2QGGT8W.jpg",
  tags: "Romance · Cosplay · Seinen · École",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Wakana Gojo est un lycéen passionné de poupées hina traditionnelles japonaises, une passion qu'il cache soigneusement. Marin Kitagawa, camarade de classe populaire et extravertie, découvre son secret et lui révèle le sien : elle veut cosplayer ses personnages de jeux préférés mais ne sait pas coudre. Leur collaboration inattendue autour du cosplay lance une romance naturelle et solaire.",
  pros: ["Marin Kitagawa est l'une des héroïnes les plus charismatiques et rafraîchissantes du manga récent","Respect authentique du cosplay comme art et passion","Chimie romantique naturelle et sans artificiel entre les deux protagonistes","Équilibre parfait entre fan service et contenu émotionnel sincère"],
  cons: ["Fan service très présent autour de Marin qui polarise les avis","Progression de la romance parfois trop prudente"],
  reviewHtml: `<p>My Dress-Up Darling a explosé en popularité pour une bonne raison : Marin Kitagawa est un personnage d'une fraîcheur et d'une vitalité rares. Elle aime ce qu'elle aime sans s'excuser, elle est enthousiaste sans être naïve, et sa façon d'embarquer Gojo dans sa passion avec une générosité totale est immédiatement attachante.</p><p>Le cosplay est traité avec un vrai respect : Shinichi Fukuda documente les techniques de couture, les matériaux, les défis de reproduction de costumes complexes. Cet aspect documentaire donne une authenticité qui distingue le manga des romances lycéennes génériques.</p><p>La dynamique entre Gojo, timide et habilement artisan, et Marin, extravertie et passionnée, est l'une des plus organiques du manga récent. Leur romance se construit sur une collaboration réelle et un respect mutuel des passions de l'autre. Un très bon choix pour les amateurs de romance lycéenne moderne.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=My+Dress-Up+Darling",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=My+Dress-Up+Darling+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=My+Dress-Up+Darling+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=My%20Dress-Up%20Darling",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: true,
  status: "en cours",
  volumes: 14,
  chapters: 105,
  year: 2018,
  author: "Shinichi Fukuda",
},

{
  slug: "komi-san-wa-komyushou-desu",
  title: "Komi-san wa Komyushou desu.",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx86813-ywOLcmlGJKTy.jpg",
  tags: "Comédie · Romance · Slice of Life · Shōnen",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Komi Shouko est la fille la plus admirée de son lycée, perçue comme une déesse mystérieuse et intouchable. Son secret : elle souffre d'un trouble de la communication extrême et est incapable d'adresser la parole à quiconque. Seul Tadano Hitohito, son voisin de classe, découvre la vérité et décide de l'aider à réaliser son rêve : se faire cent amis.",
  pros: ["Concept original et touchant sur l'anxiété sociale","Komi est un personnage attachant dont les expressions expressives compensent l'absence de parole","Galerie d'amis et de personnages excentriques d'une grande variété","Humour tendre et bienveillant"],
  cons: ["Répétitif dans son format d'introduction de nouveaux personnages","Romance principale avance très lentement"],
  reviewHtml: `<p>Komi-san est un manga qui parle d'anxiété sociale avec beaucoup de douceur et d'humour. Le concept de faire de cette paralysie communicationnelle un obstacle à surmonter progressivement, ami par ami, est une idée originale bien exécutée.</p><p>Komi elle-même est un personnage expressif malgré son mutisme : Tomohito Oda la fait communiquer par ses gestes, ses regards et ses expressions, et cette contrainte créative donne lieu à certaines des scènes les plus drôles du manga. Sa relation avec Tadano, patient et sincère, est touchante dans sa modestie.</p><p>Le manga est idéal pour les lecteurs qui cherchent quelque chose de chaleureux et de feel-good, sans grande tension dramatique. Une série qui met de bonne humeur à chaque chapitre.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Komi-san",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Komi-san+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Komi-san+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Netflix",
    url: "https://www.netflix.com/search?q=Komi%20Can't%20Communicate",
    logo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940"
  }
],
  live: [],
  published: false,
},

{
  slug: "blue-spring-ride",
  title: "Blue Spring Ride",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx63297-4UWuHue0AJD2.jpg",
  tags: "Romance · Shōjo · École · Drame",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Futaba Yoshioka, qui s'était efforcée de réprimer sa féminité au collège pour être acceptée des filles, retrouve au lycée Kou Mabuchi, son premier amour disparu sans explication. Mais Kou a changé, il est devenu distant et cynique. Leur relation hésitante, entre anciens sentiments et nouvelles blessures, forme le coeur d'un shōjo romantique d'une sincérité touchante.",
  pros: ["Évolution psychologique des personnages traitée avec soin et réalisme","Romance lente et nuancée qui respecte l'intelligence du lecteur","Kou Mabuchi est un héros shōjo plus complexe que la moyenne","Art élégant d'Io Sakisaka"],
  cons: ["Rythme parfois très lent, les hésitations s'éternisent","Quelques arcs secondaires moins captivants"],
  reviewHtml: `<p>Blue Spring Ride fait partie des shōjo qui comprennent que l'amour ne suffit pas pour que deux personnes se retrouvent. Futaba et Kou portent chacun des blessures que l'autre n'a pas vues se former, et leur tentative maladroite de se retrouver malgré ça est le vrai sujet du manga.</p><p>Io Sakisaka écrit des personnages qui pensent et qui se trompent de manière crédible. Les malentendus de Blue Spring Ride ne sont pas là pour créer des rebondissements artificiels, ils naissent d'une psychologie cohérente. Kou en particulier, blessé et fermé, est un héros shōjo qui sort des sentiers battus.</p><p>Le rythme est lent, c'est assumé. Pour les lecteurs qui aiment les romances qui prennent le temps de construire quelque chose, Blue Spring Ride est une très belle lecture.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Blue+Spring+Ride",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Blue+Spring+Ride+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Blue+Spring+Ride+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Ao%20Haru%20Ride",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "monthly-girls-nozaki-kun",
  title: "Monthly Girls' Nozaki-kun",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/nx59211-ltc4FW9inrms.jpg",
  tags: "Comédie · Romance · Seinen · Manga",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Chiyo Sakura avoue ses sentiments à Umetaro Nozaki, son camarade de classe, et se retrouve embarquée comme assistante sur son manga shōjo — car Nozaki est en fait un mangaka professionnel publié sous pseudonyme. Il a interprété sa déclaration comme une demande de travail. Commence une comédie romantique sur les malentendus, la création manga et les incompréhensions amoureuses permanentes.",
  pros: ["Concept extrêmement inventif autour de la création manga et des malentendus","Gags sur les conventions du manga shōjo d'une précision hilarante","Chaque personnage secondaire est une satire d'un archétype manga","Rythme impeccable chapitre après chapitre"],
  cons: ["Romance principale qui n'avance jamais, le malentendu est le sujet pas la résolution","Peut frustrer les lecteurs qui attendent une progression romantique"],
  reviewHtml: `<p>Nozaki-kun est la meilleure comédie sur le manga elle-même. Izumi Tsubaki a eu l'idée brillante de placer un mangaka shōjo au centre d'une romance qui parodie précisément les codes du genre qu'il produit. Les situations où Nozaki "utilise" ses amis comme modèles pour ses personnages de manga, sans comprendre les émotions réelles derrière, sont d'une drôlerie constante.</p><p>Le cast secondaire est exceptionnel. Mikorin, Kashima, Seo, Wakamatsu, chacun représente un archétype du manga shōjo déconstruit de façon irrésistible. Kashima, princesse inversée, et Hori, metteur en scène frustré, forment un duo particulièrement mémorable.</p><p>La romance principale entre Chiyo et Nozaki n'avance jamais, et c'est un choix délibéré : le malentendu de départ est le moteur de toute la comédie. Pour les lecteurs qui acceptent cette règle du jeu, c'est un manga d'une intelligence et d'une générosité rares.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Nozaki-kun",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Nozaki-kun+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Nozaki-kun+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Monthly%20Girls%20Nozaki-kun",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "rent-a-girlfriend",
  title: "Rent-A-Girlfriend",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx99943-DX7nDMeqSTk3.png",
  tags: "Romance · Comédie · Seinen · Controversé",
  stars: 2,
  addedAt: "2026-03-19",
  synopsis: "Kazuya Kinoshita, lycéen fraîchement quitté par sa petite amie, loue les services de Chizuru Mizuhara, petite amie de location. Après une série de mensonges en cascade pour cacher la vérité à sa famille, il se retrouve à maintenir une relation fictive avec une fille qui le méprise ostensiblement. Rent-A-Girlfriend est une comédie romantique controversée pour son protagoniste et sa progression.",
  pros: ["Prémisse originale sur les relations de service au Japon","Chizuru est un personnage bien développé avec ses propres ambitions","Quelques moments sincères et touchants dans la relation principale"],
  cons: ["Kazuya est l'un des protagonistes les plus répudiés du manga récent pour sa lâcheté et son manque de maturité","Progression romantique excessivement lente au regard de l'intérêt généré","Nombreux arcs répétitifs autour du même malentendu central"],
  reviewHtml: `<p>Rent-A-Girlfriend souffre principalement de son protagoniste. Kazuya Kinoshita est un personnage d'une passivité et d'une lâcheté qui exaspèrent même ses défenseurs. Incapable de prendre une décision simple, il maintient des situations inconfortables par inaction chronique pendant des dizaines de volumes.</p><p>Chizuru, en revanche, est un personnage intéressant. Sa double vie entre façade de petite amie parfaite et vrai caractère distant cache des ambitions et des blessures réelles. Le manga serait probablement meilleur si elle était la protagoniste principale.</p><p>Pour les amateurs du genre qui acceptent le rythme extrêmement lent et les frustrations inhérentes, il y a quelques bons moments. Pour les autres, le rapport effort/récompense est décevant.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Rent-A-Girlfriend",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Rent-A-Girlfriend+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Rent-A-Girlfriend+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Rent-A-Girlfriend",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "dont-toy-with-me-miss-nagatoro",
  title: "Don't Toy With Me, Miss Nagatoro",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/nx100664-uzN5998CDxPJ.jpg",
  tags: "Comédie · Romance · Seinen · École",
  stars: 3,
  addedAt: "2026-03-19",
  synopsis: "Hachioji, lycéen introverti passionné de manga, se fait remarquer par Nagatoro, une première année qui prend un malin plaisir à le taquiner sans relâche. Ce qui commence comme un harcèlement ambigu évolue progressivement vers une relation de confiance teintée d'affection maladroite. Le manga joue sur la frontière fine entre moquerie et soin.",
  pros: ["Évolution de la relation Nagatoro-Senpai bien dosée sur la durée","Nagatoro est un personnage avec plus de profondeur qu'il n'y paraît","Humour efficace dans les situations de taquinerie","Les passages sur le manga de Senpai sont touchants"],
  cons: ["Les premiers chapitres sont difficiles à apprécier selon la tolérance au harcèlement fictif","Rythme irrégulier entre les arcs romantiques et comiques"],
  reviewHtml: `<p>Miss Nagatoro est un manga qui divise essentiellement sur ses premiers chapitres. La dynamique initiale, une fille qui tourmente un garçon visiblement mal à l'aise, peut mettre mal à l'aise. Mais le manga évolue, et assez vite Nagatoro révèle une affection maladroite et sincère sous ses provocations.</p><p>La force du manga sur la longueur est l'évolution de Senpai. Ce n'est pas juste un objet de taquinerie : il développe sa confiance en lui, continue son manga, apprend à s'affirmer. Nagatoro est le catalyseur d'une vraie progression. Pour les lecteurs patients, c'est une romance légère qui finit par mériter son investissement.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Nagatoro",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Nagatoro+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Nagatoro+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Nagatoro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "barakamon",
  title: "Barakamon",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/nx47051-2Qdu2XyoAv1z.jpg",
  tags: "Comédie · Slice of Life · Seinen · Campagne",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Seishuu Handa, calligraphe prodige tokyoïte trop lisse et trop parfait, est exilé par son père sur une île rurale des Gotô après avoir frappé un critique d'art. Confronté à la lenteur de la vie villageoise, aux enfants envahissants et à l'absence de tout ce qui constituait son quotidien, il va devoir se réinventer pour trouver son propre style. Barakamon est un manga sur la créativité, l'authenticité et le bonheur simple.",
  pros: ["Atmosphère chaleureuse et apaisante unique en son genre","Naru, la petite voisine, est l'un des personnages les plus adorables du manga moderne","Réflexions sincères sur la création artistique et le perfectionnisme","Équilibre parfait entre comédie légère et moments émouvants"],
  cons: ["Peu de tension dramatique, peut sembler trop tranquille pour certains","La fin laisse quelques fils narratifs en suspens"],
  reviewHtml: `<p>Barakamon est un de ces manga qu'on lit pour se sentir mieux. Pas parce qu'il évite les problèmes, mais parce qu'il montre comment une rupture radicale avec ses habitudes peut libérer quelque chose qu'on ne savait pas avoir en soi. Handa n'est pas en vacances sur l'île de Gotô, il se refabrique.</p><p>La relation entre Handa et les habitants de l'île, surtout la petite Naru qui débarque dans son atelier sans permission, est le coeur du manga. Naru est un personnage d'une vitalité communicative, joyeuse et sincère sans jamais tomber dans la mièvrerie. Elle représente exactement ce que Handa a besoin d'apprendre : vivre sans calculer.</p><p>Yoshino Satsuki a le rare talent de parler de création artistique sans jamais être ennuyeux. Les réflexions de Handa sur son style, sur ce que signifie "être authentique" en calligraphie, résonnent bien au-delà du médium. Un manga doux et intelligent.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Barakamon",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Barakamon+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Barakamon+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Barakamon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: true,
  status: "terminé",
  volumes: 18,
  chapters: 118,
  year: 2008,
  author: "Satsuki Yoshino",
},

{
  slug: "yahari-ore-no-seishun-love-come-wa-machigatteiru-monologue",
  title: "Yahari Ore no Seishun Love Come wa Machigatteiru. Monologue",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx75447-g0pXtV8FB0JP.jpg",
  tags: "Romance · Psychologie · Seinen · École",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Hachiman Hikigaya, lycéen cynique convaincu que les liens humains sont des illusions, est forcé d'intégrer le Club de Service avec Yukino Yukinoshita, aussi solitaire et acerbe que lui, et Yui Yuigahama, sincère et sociable. À travers les demandes d'autres élèves, ils aident les autres tout en évitant soigneusement de s'aider eux-mêmes. OreGairu est une étude psychologique sur la solitude, l'honnêteté et le coût des relations.",
  pros: ["Hachiman est l'un des protagonistes les plus complexes et les plus honnêtes du manga scolaire","Dialogue d'une densité philosophique rare sur la nature des liens et de l'authenticité","Triangle émotionnel Hachiman-Yukino-Yui traité avec une nuance remarquable","Conclusion honnête qui respecte les contradictions des personnages"],
  cons: ["Très verbal et introspectif, peu adapté aux lecteurs qui cherchent de l'action ou de la légèreté","L'adaptation manga de la light novel perd parfois en profondeur"],
  reviewHtml: `<p>OreGairu est une des oeuvres les plus honnêtes jamais écrites sur l'adolescence et la peur des relations authentiques. Wataru Watari a créé avec Hachiman Hikigaya un personnage dont le cynisme n'est pas une posture cool mais une stratégie de survie psychologique : si je n'attends rien, je ne serai pas déçu. La voir se fissurer progressivement est l'arc de personnage le plus bien construit du manga scolaire.</p><p>La relation entre Hachiman, Yukino et Yui est d'une complexité émotionnelle qui dépasse largement la romance conventionnelle. Tous trois se protègent avec des mécanismes différents, et leur chemin vers une connexion réelle est parsemé de reculs, de malentendus et de douloureuses honnêtetés.</p><p>OreGairu est lent, dense et parfois épuisant. C'est aussi l'une des représentations les plus justes de comment certains adolescents vivent vraiment l'intériorité. Un manga important pour qui se reconnaît dans Hachiman.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=OreGairu",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=OreGairu+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=OreGairu+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=My%20Teen%20Romantic%20Comedy%20SNAFU",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "domestic-girlfriend",
  title: "Domestic Girlfriend",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx85802-lh7gZHgQmliE.png",
  tags: "Romance · Drame · Seinen · Controversé",
  stars: 2,
  addedAt: "2026-03-19",
  synopsis: "Natsuo Fujii est amoureux de sa professeure Hina, sans espoir de réciprocité. Après une nuit impulsive avec une inconnue prénommée Rui, il découvre que son père va se remarier avec la mère de deux filles : Hina et Rui. Le voilà colocataire de la femme qu'il aime et de celle avec qui il a couché. Domestic Girlfriend explore ce triangle impossible jusqu'à ses limites les plus controversées.",
  pros: ["Tension dramatique réelle et situations qui évitent rarement les conséquences","Certains arcs émotionnellement efficaces malgré les excès","La relation Natsuo-Rui finit par avoir une vraie profondeur"],
  cons: ["Relation professeur-élève romanticisée de façon problématique","Natsuo est un protagoniste souvent exaspérant","Conclusion très discutée et perçue comme incohérente par beaucoup"],
  reviewHtml: `<p>Domestic Girlfriend est un manga qui ne fait pas semblant d'être autre chose qu'un drama romantique provocateur. Kei Sasuga pousse ses personnages dans des situations de plus en plus extrêmes, assumant pleinement le côté scandaleux de sa prémisse.</p><p>Le manga a ses défenseurs pour sa tension émotionnelle réelle et quelques arcs bien construits. Il a aussi ses détracteurs pour la romanticisation d'une relation professeur-élève et une conclusion qui a divisé profondément son lectorat. Les deux camps ont leurs raisons. À aborder en sachant ce qu'on va trouver.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Domestic+Girlfriend",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Domestic+Girlfriend+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Domestic+Girlfriend+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Domestic%20Girlfriend",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "uzumaki-spiral-into-horror",
  title: "Uzumaki: Spiral into Horror",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30436-Opk9ZubMPuDU.jpg",
  tags: "Horreur · Psychologie · Seinen · Junji Ito",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "Dans la petite ville côtière de Kurouzu, les habitants commencent à développer une obsession maladive pour la spirale. Des escargots géants aux cheveux qui tournent, des tornades qui aspirent les âmes aux bâtiments qui se tordent en colimaçon, la ville entière est progressivement dévorée par la malédiction de la spirale. Junji Ito signe avec Uzumaki son oeuvre la plus ambitieuse et la plus terrifiante.",
  pros: ["Concept d'horreur d'une originalité absolue, rien d'autre n'y ressemble dans toute la bande dessinée","Imagination visuelle de Junji Ito au sommet de sa forme sur chaque chapitre","Escalade progressive et inexorable vers l'horreur cosmique parfaitement dosée","Finale d'une cohérence et d'une ambition remarquables"],
  cons: ["Certains chapitres isolés moins forts que l'ensemble","Sujette aux cauchemars, déconseillée avant de dormir"],
  reviewHtml: `<p>Uzumaki est l'oeuvre maîtresse de Junji Ito, et l'une des oeuvres d'horreur les plus originales jamais créées dans n'importe quel médium. Le concept de la spirale comme source de terreur cosmique est d'une simplicité abstraite qui permet une escalade d'inventions visuelles sans limite. Chaque chapitre explore une nouvelle manifestation de la malédiction, et chaque nouvelle manifestation est plus perturbante que la précédente.</p><p>Ce qui rend Uzumaki particulièrement efficace, c'est sa logique interne parfaite. La spirale n'est pas juste un motif décoratif de l'horreur, c'est une force cosmique avec ses propres règles que le manga explore méthodiquement jusqu'à leurs conséquences ultimes. La ville de Kurouzu se transforme selon une progression géométrique cauchemardesque mais rigoureuse.</p><p>L'art de Ito est ici au sommet de ses capacités expressives. Ses doubles pages de transformation architecturale et humaine sont des chefs-d'oeuvre graphiques qui restent gravés dans la mémoire. Un manga à lire absolument, avec les lumières allumées.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Uzumaki+Junji+Ito",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Uzumaki+Junji+Ito+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Uzumaki+Junji+Ito+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [],
  live: [],
  published: true,
  status: "terminé",
  volumes: 3,
  chapters: 20,
  year: 1998,
  author: "Junji Ito",
},


{
  slug: "goodnight-punpun",
  title: "Goodnight Punpun",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx34632-5xMDkx3pXsEh.png",
  tags: "Psychologie · Drame · Seinen · Contemplatif",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "Punpun Onodera est un enfant ordinaire représenté comme un petit oiseau schématique dans un monde humain réaliste. De l'enfance à l'âge adulte, on le suit traverser des premières amours, des traumatismes familiaux, une dépression profonde et une quête de sens de plus en plus désespérée. Oyasumi Punpun est l'un des manga les plus sombres et les plus honnêtes jamais écrits sur la condition humaine.",
  pros: ["Représentation de la dépression et des traumatismes d'une exactitude troublante","Dispositif visuel unique (Punpun en oiseau) d'une intelligence narrative remarquable","Inio Asano au sommet de son art graphique et narratif","Oeuvre qui reste longtemps après la lecture"],
  cons: ["Très éprouvant émotionnellement, déconseillé en période de vulnérabilité","Conclusion nihiliste qui peut laisser sans ressource"],
  reviewHtml: `<p>Oyasumi Punpun est un manga qu'on n'oublie pas. Inio Asano a créé une oeuvre qui cartographie l'intérieur d'une tête qui souffre avec une précision clinique et une empathie totale. Punpun n'est pas un anti-héros romantique, il est juste quelqu'un qui ne sait pas comment aller bien, et ça fait toute la différence.</p><p>Le dispositif visuel est d'une intelligence rare : Punpun est dessiné comme un gribouillis, un oiseau minimaliste, dans un monde réaliste magnifiquement détaillé. Ce décalage extériorise l'incapacité du personnage à se sentir réel, à se sentir à sa place dans le monde. On ne voit jamais son "vrai" visage parce qu'il ne le voit pas lui-même.</p><p>C'est un manga difficile à recommander sans réserve, parce qu'il peut faire du mal aux lecteurs fragiles. Mais pour ceux qui peuvent le traverser, c'est une expérience de lecture qui touche à quelque chose de fondamental sur ce que signifie être humain et lutter pour l'accepter.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Goodnight+Punpun",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Goodnight+Punpun+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Goodnight+Punpun+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [],
  live: [],
  published: true,
  status: "terminé",
  volumes: 13,
  chapters: 147,
  year: 2007,
  author: "Inio Asano",
},

{
  slug: "gantz",
  title: "Gantz",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30564-RbyFbLzbnKea.jpg",
  tags: "Sci-fi · Action · Horreur · Seinen",
  stars: 3,
  addedAt: "2026-03-19",
  synopsis: "Kei Kurono et Masaru Kato meurent écrasés par un métro, pour se réveiller dans un appartement face à une mystérieuse sphère noire appelée Gantz. Elle les envoie combattre des aliens monstrueux dans Tokyo, équipés de combinaisons high-tech, avec comme seule motivation des points qui pourraient leur rendre la vie. Gantz est un survival ultra-violent qui pose des questions sur la mort, le libre arbitre et la valeur de la vie humaine.",
  pros: ["Prémisse de survival original et tendue","Action ultra-dynamique avec des confrontations aliens mémorables","Certains arcs (l'arc des vampires, l'arc de la statue géante) sont particulièrement intenses","Questionnements philosophiques sur la mort et la résurrection"],
  cons: ["Fan service excessif et traitement problématique de certains personnages féminins","Derniers arcs décevants et conclusion insatisfaisante","Peut être rebutant par son niveau de violence gratuite"],
  reviewHtml: `<p>Gantz est un manga clivant par excellence. À son meilleur, c'est un survival d'une tension absolue, avec des créatures aliens inventives et une atmosphère de mort permanente qui donne un sens réel à chaque décision des personnages. Les meilleurs arcs, notamment l'arc des vampires et l'arc de la statue géante, sont parmi les plus intenses du seinen d'action.</p><p>À son pire, Gantz est excessif dans tous ses registres : violence, fan service, nihilisme. Hiroya Oku ne fait rien à moitié, ce qui peut être une qualité et un défaut selon les scènes. La conclusion du manga est généralement considérée comme décevante par rapport au potentiel des premiers arcs.</p><p>Gantz reste une lecture marquante pour les amateurs de seinen dark qui cherchent quelque chose de viscéral et provocateur, à condition d'accepter ses excès comme faisant partie du package.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Gantz",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Gantz+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Gantz+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [],
  live: [],
  published: true,
  status: "terminé",
  volumes: 37,
  chapters: 383,
  year: 2000,
  author: "Hiroya Oku",
},

{
  slug: "i-am-a-hero",
  title: "I Am a Hero",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx44440-oLFibAj4TvM7.jpg",
  tags: "Horreur · Zombie · Seinen · Psychologie",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Hideo Suzuki est un assistant-mangaka raté dans la trentaine, névrotique et indécis, qui rêve de gloire sans jamais oser rien tenter. Quand une épidémie zombie transforme Tokyo en enfer, il est l'un des seuls Japonais civils à posséder légalement une arme à feu. Un survivant ordinaire, terrifiés, dans un apocalypse extraordinaire.",
  pros: ["Protagoniste réaliste et imparfait, à l'opposé du héros classique de zombie","Atmosphère de terreur psychologique soutenue et oppressante","Les zombies de Kengo Hanazawa sont visuellement originaux et inquiétants","Commentaire social sur l'aliénation moderne et la passivité japonaise"],
  cons: ["Rythme délibérément lent dans les premiers volumes, peut tester la patience","Arcs finaux plus confus et divisifs"],
  reviewHtml: `<p>I Am a Hero est le manga de zombie le plus honnête jamais écrit sur ce que ferait vraiment un homme ordinaire face à l'apocalypse : paniquer, trébucher, se faire pipi dessus, survivre par accident. Hideo n'est pas un héros, c'est le gars qui se trouve avoir un fusil par une bizarrerie administrative.</p><p>Kengo Hanazawa utilise la convention zombie pour disséquer quelque chose de très japonais : l'homme qui n'a pas eu le courage de vivre sa vie, et qui doit décider si l'apocalypse est sa punition ou sa seconde chance. Cette dimension psychologique donne au manga une profondeur que ses confrères du genre n'ont généralement pas.</p><p>Les zombies de Hanazawa sont visuellement originaux, coincés dans les gestes répétitifs de leur mort, et l'horreur qu'ils dégagent est réelle et bien construite. I Am a Hero est une lecture exigeante mais mémorable.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=I+Am+a+Hero",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=I+Am+a+Hero+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=I+Am+a+Hero+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [],
  live: [],
  published: false,
},

{
  slug: "girls-last-tour",
  title: "Girls' Last Tour",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx85412-wzZ2QFwbZJED.jpg",
  tags: "Post-apocalyptique · Slice of Life · Seinen · Philosophie",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "Chito et Yuuri sont deux jeunes filles qui parcourent en kettenkrad les ruines d'une mégalopole détruite par une guerre dont elles ignorent tout. Elles cherchent de la nourriture, du carburant et des réponses dans un monde silencieux où elles sont peut-être les derniers humains vivants. Girls' Last Tour est une méditation poétique sur la fin du monde, la curiosité et la valeur de l'instant présent.",
  pros: ["Atmosphère unique, mélancolique et apaisante à la fois","Dialogues d'une profondeur philosophique accessible et sincère","Équilibre parfait entre humour léger et contemplation existentielle","Conclusion parmi les plus belles et courageuses du manga récent"],
  cons: ["Rien ne se passe au sens narratif classique, peut dérouter","Format contemplatif qui ne convient pas à tous les lecteurs"],
  reviewHtml: `<p>Girls' Last Tour est l'une des expériences de lecture les plus singulières du manga moderne. Tsukumizu place deux filles au bout du monde et les laisse parler. De nourriture, de musique, de Dieu, de la mort, de ce que ça signifie d'exister quand plus personne d'autre ne le fait. Et ces conversations, naïves en surface, atteignent quelque chose de très profond.</p><p>La force du manga tient dans son refus du catastrophisme. Le monde est détruit, oui. Mais Chito et Yuuri ne sont pas en train de survivre, elles vivent. Elles trouvent de la joie dans une boîte de conserve, dans un bain de fortune, dans la neige qui tombe sur les ruines. Ce regard positif sur la fin est d'une rareté et d'une intelligence remarquables.</p><p>La conclusion de Girls' Last Tour est un acte de courage éditorial. Tsukumizu ne ment pas à son lecteur. C'est triste, c'est beau, c'est cohérent avec tout ce qui précède. Peu de manga osent aller là. Cinq étoiles pour un manga qui parle de la fin de tout avec autant de tendresse.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Girls+Last+Tour",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Girls+Last+Tour+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Girls+Last+Tour+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Girls%20Last%20Tour",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "mieruko-chan",
  title: "Mieruko-chan",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx105097-nMpc8bjBeuXE.jpg",
  tags: "Horreur · Comédie · Seinen · Quotidien",
  stars: 3,
  addedAt: "2026-03-19",
  synopsis: "Miko Yotsuya voit des fantômes monstrueux depuis un jour, partout et en permanence. Sa stratégie de survie : faire semblant de ne rien voir et continuer sa vie normale en espérant qu'ils partent. Entourée de sa meilleure amie Hana et de créatures terrifiantes que seule elle perçoit, elle tente de traverser le lycée sans perdre la raison.",
  pros: ["Concept comique original et bien exploité sur l'ignorance forcée comme mécanisme de survie","Les designs des fantômes sont visuellement très efficaces et inquiétants","Hana est un personnage de contraste parfait, joyeux et inconscient du danger"],
  cons: ["Format répétitif qui s'épuise sur la longueur","Peu d'évolution narrative au-delà du concept initial"],
  reviewHtml: `<p>Mieruko-chan repose sur un concept comique simple et efficace : une fille voit des horreurs indicibles et décide de les ignorer stoïquement. La tension entre les designs de monstres vraiment effrayants de Tomoki Izumi et les réactions ultra-deadpan de Miko génère un humour d'une constance appréciable.</p><p>Le manga est idéal pour lire en petites doses. Chaque chapitre livre son quota de créatures bizarres et de situations inconfortables avec un rythme bien rodé. Sur la longueur, le concept s'essouffle un peu sans réel développement narratif, mais pour des sessions courtes et détendues, c'est un bon divertissement horror-comedy.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Mieruko-chan",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Mieruko-chan+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Mieruko-chan+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Mieruko-chan",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "mushoku-tensei-redundant-reincarnation",
  title: "Mushoku Tensei: Redundant Reincarnation",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx165131-R4pedWdbZiAW.jpg",
  tags: "Isekai · Fantasy · Aventure · Seinen",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Un homme de 34 ans, NEET et reclus toute sa vie, meurt et se réincarne dans un monde de fantasy sous le nom de Rudeus Greyrat, conservant ses souvenirs mais recommençant depuis l'enfance. Décidé à ne pas gâcher cette seconde chance, il se consacre à la magie et aux relations humaines qu'il n'avait jamais su construire. Mushoku Tensei est l'oeuvre qui a largement posé les codes de l'isekai moderne.",
  pros: ["Protagoniste rare dans l'isekai : adulte psychologiquement brisé qui reconstruit sa personnalité depuis zéro","Worldbuilding rich et cohérent, avec une géographie et une géopolitique réelles","Progression émotionnelle de Rudeus d'une honnêteté et d'une complexité inhabituelles","Influence fondatrice sur tout le genre isekai moderne"],
  cons: ["Comportement problématique de Rudeus envers les personnages féminins jeunes, notamment dans les premiers volumes","Peut mettre mal à l'aise malgré l'évolution du personnage"],
  reviewHtml: `<p>Mushoku Tensei est l'oeuvre qui a défini les codes de l'isekai tel qu'on le connaît aujourd'hui. Rifujin na Magonote a posé les fondations du genre avec une ambition narrative que beaucoup de ses successeurs n'ont jamais atteinte : Rudeus n'est pas un héros invincible, c'est un homme brisé qui essaie de se réparer dans un corps neuf.</p><p>La force principale du manga est l'évolution psychologique de Rudeus. Ses traumatismes d'avant la réincarnation ne disparaissent pas comme par magie. Ils resurgissent, ils sabotent ses relations, ils nécessitent un travail conscient. Cette honnêteté sur la guérison psychologique est rare dans le genre.</p><p>Mushoku Tensei souffre de certains éléments problématiques, notamment dans ses premiers arcs, qui ont fait l'objet de critiques légitimes. L'oeuvre reste cependant fondamentale pour comprendre l'isekai et son évolution. À aborder en étant conscient de ces aspects.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Mushoku+Tensei",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Mushoku+Tensei+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Mushoku+Tensei+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Mushoku%20Tensei",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: true,
  status: "en cours",
  volumes: 27,
  chapters: 100,
  year: 2014,
  author: "Rifujin na Magonote",
},

{
  slug: "is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon",
  title: "Is It Wrong to Try to Pick Up Girls in a Dungeon?",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx85162-Fpd3ejAlFWP8.jpg",
  tags: "Fantasy · Aventure · Isekai · Shōnen",
  stars: 3,
  addedAt: "2026-03-19",
  synopsis: "Bell Cranel est le seul membre de la Familia de la déesse Hestia dans la cité d'Orario, construite autour d'un donjon aux profondeurs infinies. Novice maladroit mais déterminé, il progresse dans le donjon pour réaliser son rêve de devenir un grand aventurier, après une rencontre fortuite avec l'épéiste légendaire Aiz Wallenstein qui l'inspire profondément. DanMachi mélange RPG, harem et heroic-fantasy.",
  pros: ["Système de progression RPG satisfaisant et bien pensé","Worldbuilding de la cité d'Orario avec ses Familias d'une richesse convaincante","Bell est un protagoniste sympathique et attachant","Certains arcs (Xenos, Freya) d'une intensité surprenante"],
  cons: ["Éléments harem parfois pesants et clichés","Rythme inégal entre moments épiques et fanservice"],
  reviewHtml: `<p>DanMachi (acronyme de son titre complet imprononcable) est une fantasy RPG honnête qui fait bien ce qu'elle promet. L'univers d'Orario, avec ses dieux descendus sur terre qui parrainent des aventuriers, est un des concepts les plus originaux du genre isekai-adjacent. Les règles de progression des personnages sont claires et les combats les exploitent bien.</p><p>Bell Cranel est un protagoniste plus intéressant que la moyenne du genre harem. Sa dévotion pour Aiz et sa progression sincère le rendent sympathique. Les arcs qui le sortent de sa zone de confort, notamment l'arc des Xenos, révèlent un potentiel narratif que la série n'exploite pas toujours.</p><p>Pour les amateurs du genre fantasy RPG, DanMachi est un choix solide et divertissant, avec suffisamment de profondeur pour aller au-delà du simple entertainment.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=DanMachi",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=DanMachi+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=DanMachi+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=DanMachi",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "log-horizon",
  title: "Log Horizon",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx76024-asSsUMwFm5O8.jpg",
  tags: "Fantasy · Isekai · Stratégie · Seinen",
  stars: 3,
  addedAt: "2026-03-19",
  synopsis: "Trente mille joueurs japonais se retrouvent bloqués dans le monde du MMO Elder Tale lors d'une mise à jour. Contrairement aux isekai classiques, Log Horizon se concentre moins sur les combats que sur la reconstruction d'une société : politique, économie, diplomatie entre guildes et PNJ. Shiroe, mage tacticien réputé pour sa manipulation, est au coeur de cette reconstruction.",
  pros: ["Angle unique sur l'isekai : gouvernance et construction sociale plutôt que combat","Shiroe est un protagoniste intellectuel original dans le genre","World-building politique avec de vrais enjeux stratégiques","Traitement des PNJ comme êtres à part entière très intéressant"],
  cons: ["Rythme lent, beaucoup de dialogues et d'explications","Adaptation manga de la light novel parfois condensée maladroitement"],
  reviewHtml: `<p>Log Horizon est l'isekai pour ceux qui préfèrent Clausewitz à Tolkien. Mamare Touno et son équipe ne s'intéressent pas aux donjons et aux niveaux mais à la question de savoir comment organiser une société de trente mille personnes coincées ensemble sans règles claires. C'est fascinant et assez unique dans le genre.</p><p>Shiroe est un excellent protagoniste pour ce type d'histoire. Tacticien froid qui pense plusieurs coups à l'avance, il est moins attachant qu'un héros classique mais nettement plus intéressant à observer dans ses machinations politiques. Sa relation avec Naotsugu et Akatsuki offre l'équilibre émotionnel nécessaire.</p><p>Le rythme est lent et les dialogues denses. Log Horizon récompense la patience et l'investissement intellectuel plutôt que l'action immédiate. Pour les amateurs d'isekai stratégique, c'est une référence.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Log+Horizon",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Log+Horizon+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Log+Horizon+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Log%20Horizon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: true,
  status: "en cours",
  volumes: 13,
  chapters: 60,
  year: 2011,
  author: "Mamare Touno",
},

{
  slug: "skeleton-knight-in-another-world",
  title: "Skeleton Knight in Another World",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx87239-SYX4tnwAzmhN.jpg",
  tags: "Isekai · Comédie · Fantasy · Action",
  stars: 2,
  addedAt: "2026-03-19",
  synopsis: "Un joueur se réveille dans le monde de son jeu préféré, mais son avatar est un squelette en armure complète — impossible à retirer sans perdre sa magie. Sous le nom d'Arc, il parcourt ce monde médiéval fantastique en essayant de dissimuler sa nature monstrueuse, tout en aidant les gens qu'il croise et en découvrant les injustices de cette société.",
  pros: ["Prémisse sympathique du héros caché sous une apparence monstrueuse","Action fluide et combats dynamiques","Ton léger et humoristique accessible"],
  cons: ["Peu de profondeur narrative ou de développement de personnages","Protagoniste trop puissant sans vrai challenge","Très générique dans ses conventions d'isekai"],
  reviewHtml: `<p>Skeleton Knight in Another World est un isekai honnête qui fait ce qu'il promet sans prétendre à plus. Arc est un protagoniste sympathique et sa situation de squelette inadapté au monde humain génère quelques gags amusants. La contrainte visuelle de son armure est exploitée correctement.</p><p>Le manga souffre des maux habituels du genre : un protagoniste trop puissant, des enjeux limités, une progression prévisible. Pour les lecteurs qui cherchent une fantasy légère et détendue sans attente particulière, c'est une lecture agréable. Pour ceux qui cherchent de la profondeur, ce n'est pas ici qu'il faut chercher.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Skeleton+Knight",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Skeleton+Knight+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Skeleton+Knight+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Skeleton%20Knight%20in%20Another%20World",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "didnt-i-say-to-make-my-abilities-average-in-the-next-life",
  title: "Didn't I Say to Make My Abilities Average in the Next Life?!",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/nx99102-DGXEjeRwT5bi.jpg",
  tags: "Isekai · Comédie · Fantasy · Shōnen",
  stars: 3,
  addedAt: "2026-03-19",
  synopsis: "Misato Kurihara, surdouée marginalisée dans sa vie passée, demande à sa réincarnation d'avoir des capacités parfaitement moyennes. Le problème : la moyenne divine est calculée entre la créature la plus faible et la plus puissante de l'univers, lui donnant des pouvoirs colossaux. Elle forme avec trois amies un groupe d'aventurières tout en cherchant désespérément à passer inaperçue, sans grand succès.",
  pros: ["Prémisse comique bien exploitée sur la malédiction d'être involontairement OP","Dynamique de groupe des quatre filles sympathique et légère","Humour efficace sur les clichés de l'isekai"],
  cons: ["Peu de profondeur narrative ou émotionnelle","Assez prévisible dans ses rebondissements","L'humour s'épuise sur la longueur"],
  reviewHtml: `<p>Didn't I Say to Make My Abilities Average est une comédie isekai honnête qui fait bien ce qu'elle promet : se moquer gentiment des conventions du genre tout en les reproduisant avec affection. La prémisse, vouloir être ordinaire et rater à chaque fois, est une bonne source de gags récurrents.</p><p>Le manga ne prétend pas être plus que ce qu'il est. C'est une lecture légère et amusante, portée par une héroïne sympathique et un groupe d'amies attachantes. Pour les fans d'isekai qui cherchent quelque chose de détendu et sans prise de tête, c'est un choix tout à fait respectable.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Abilities+Average",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Abilities+Average+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Abilities+Average+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Didn't%20I%20Say%20Make%20My%20Abilities%20Average",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "gushing-over-magical-girls",
  title: "Gushing over Magical Girls",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx109017-bT3qVhgii0Xy.png",
  tags: "Ecchi · Parodie · Magie · Seinen",
  stars: 3,
  addedAt: "2026-03-19",
  synopsis: "Hiiragi Utena adore les magical girls depuis l'enfance, mais est choisie par une créature mystérieuse pour devenir la vilaine de l'histoire, Corporeus, avec le pouvoir de lier et de dominer. Confrontée aux magical girls qu'elle idolâtre dans des combats involontaires, elle navigue entre ses sentiments contradictoires et une équipe de vilaines aussi maladroites qu'elle. Une parodie ecchi qui renverse les codes du genre.",
  pros: ["Parodie intelligente des codes de la magical girl vue depuis le camp des antagonistes","Humour sur les conventions du genre efficace et bien ciblé","Certains personnages féminins plus développés qu'attendu"],
  cons: ["Contenu ecchi très présent qui ne conviendra pas à tous","Le fond narratif reste léger malgré la prémisse originale"],
  reviewHtml: `<p>Gushing Over Magical Girls est une parodie qui connaît parfaitement ce dont elle se moque. En plaçant une fan inconditionnelle du genre du côté des vilaines, Akihiro Ononaka crée une dynamique comique qui déconstruit les conventions de la magical girl avec une affection évidente pour le matériau source.</p><p>Le manga assume son côté ecchi, ce qui limitera son audience. Pour ceux qui sont à l'aise avec ce registre, c'est une comédie efficace avec quelques vraies surprises narratives. Pour les autres, la prémisse restera plus intéressante que l'exécution.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Gushing+Magical+Girls",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Gushing+Magical+Girls+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Gushing+Magical+Girls+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Gushing%20over%20Magical%20Girls",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "true-beauty",
  title: "True Beauty",
  category: "manhwa",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx103995-eE7WHxOy77TB.jpg",
  tags: "Romance · Manhwa · Comédie · École",
  stars: 3,
  addedAt: "2026-03-19",
  synopsis: "Lim Jugyeong est une lycéenne complexée par son visage sans maquillage. Après avoir appris l'art du maquillage sur internet, elle devient une beauté reconnue dans sa nouvelle école. Mais deux garçons découvrent sa vraie apparence : Suho, le beau populaire, et Seojun, le rebelle. True Beauty est le webtoon romantique coréen le plus lu de sa génération.",
  pros: ["Phénomène culturel réel qui a touché des millions de lecteurs","Message sincère sur la confiance en soi et l'acceptation","Triangle amoureux bien construit avec deux prétendants crédibles"],
  cons: ["Très codifié dans les conventions du romance coréen, peu de surprises","Certains arcs secondaires excessivement longs","Représentation du maquillage comme masque obligatoire parfois maladroite"],
  reviewHtml: `<p>True Beauty est le manhwa romantique qui a défini une époque de webtoon. Yaongyi a touché quelque chose d'universel avec Jugyeong : la terreur d'être vue telle qu'on est vraiment, et le masque qu'on construit pour survivre au regard des autres. Ce thème résonne bien au-delà du public cible initial.</p><p>Le triangle amoureux entre Suho et Seojun est efficacement construit, les deux prétendants ayant des personnalités et des dynamiques distinctes avec Jugyeong. La série a su maintenir un suspense romantique réel sur sa longueur, ce qui est déjà un accomplissement dans le genre.</p><p>True Beauty souffre d'une longueur excessive dans ses derniers arcs et d'une représentation du maquillage parfois ambiguë dans son message. Mais en tant que phénomène culturel et comme romance accessible, sa popularité est entièrement méritée.</p>`,
  shops: [
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=True+Beauty+manhwa",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=True+Beauty+manhwa",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [],
  live: [],
  published: true,
  status: "terminé",
  volumes: 12,
  chapters: 207,
  year: 2018,
  author: "Yaongyi",
},
{
  slug: "hardcore-leveling-warrior",
  title: "Hardcore Leveling Warrior",
  category: "manhwa",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx101134-RH16zHUBRyXL.png",
  tags: "Action · Manhwa · Jeu vidéo · Fantasy",
  stars: 3,
  addedAt: "2026-03-19",
  synopsis: "Ethan Gong, connu dans le jeu en ligne Lucid Adventure comme le joueur numéro un au monde, se réveille un matin sans aucun de ses équipements ni de ses statistiques, ramené au niveau 1 par un inconnu. Humilié et sans ressources, il doit reconstruire sa puissance depuis zéro dans un monde où l'argent réel et le jeu virtuel sont indissociablement liés. Hardcore Leveling Warrior est un manhwa d'action rythmé sur les conventions des jeux de rôle.",
  pros: ["Progression du personnage de zéro à héros bien construite et satisfaisante","Système de jeu inventif avec des mécaniques originales","Personnages secondaires avec des backstories intéressants"],
  cons: ["Arcs tardifs moins bien construits que les premiers","Protagoniste parfois antipathique du fait de son ego initial"],
  reviewHtml: `<p>Hardcore Leveling Warrior prend un point de départ classique, le joueur OP dépouillé de tout, et le traite avec un soin réel pour le système de jeu sous-jacent. Sehoon Kim a clairement pensé les mécaniques de Lucid Adventure, et les combats tirent intelligemment parti des règles établies.</p><p>Le manga a ses hauts et ses bas. Les premiers arcs, où Ethan reconstruit sa réputation depuis les fondations, sont les plus satisfaisants. Les arcs finaux complexifient peut-être trop l'intrigue. Mais pour les fans de manhwa d'action dans des univers de jeu, c'est une référence solide du genre.</p>`,
  shops: [
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Hardcore+Leveling+Warrior",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Hardcore+Leveling+Warrior",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [],
  live: [],
  published: true,
  status: "en cours",
  volumes: 10,
  chapters: 330,
  year: 2016,
  author: "Sehoon Kim",
},

{
  slug: "wotakoi-love-is-hard-for-otaku",
  title: "Wotakoi: Love is Hard for Otaku",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx86717-S7z7uizfTfEu.png",
  tags: "Romance · Comédie · Seinen · Otaku",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Narumi Momose est une fujoshi secrète qui cache sa passion des BL à ses collègues. Elle retrouve par hasard son ancien camarade d'école Hirotaka Nifuji, gamer incurable, qui lui propose sans romantisme excessif de sortir ensemble puisqu'ils sont tous les deux otaku. Une romance entre adultes qui partagent des passions geek et apprennent maladroitement à s'aimer.",
  pros: ["Romance entre adultes au travail, décor rare et bienvenu dans le manga romantique","Humour sur les passions otaku d'une précision et d'une affection rares","Hirotaka est un petit ami d'une maladresse et d'une sincérité attendrissantes","Deux couples secondaires qui enrichissent la dynamique de groupe"],
  cons: ["Progression romantique très lente même pour une seinen romance","Format de gags courts peut parfois sembler décousu"],
  reviewHtml: `<p>Wotakoi est une bouffée d'air frais dans le manga romantique. Fujita s'intéresse à des adultes qui travaillent, qui ont des passions geek qu'ils gèrent plus ou moins bien, et qui essaient de construire une relation amoureuse avec la même maladresse qu'ils mettent dans tout le reste. C'est agréablement réaliste.</p><p>Hirotaka Nifuji est l'un des petits amis les plus attachants du manga seinen : complètement incapable d'expressions romantiques conventionnelles mais sincèrement investi dans la relation à sa façon. Ses tentatives gauches de faire des "choses de couple" sont d'une drôlerie constante.</p><p>Le manga excelle dans ses moments calmes, quand les personnages jouent ensemble, regardent des animés ou discutent de leurs passions avec un enthousiasme que leurs collègues ne comprennent pas. Wotakoi capture parfaitement ce que c'est d'être avec quelqu'un qui partage vraiment ce qu'on aime.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Wotakoi",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Wotakoi+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Wotakoi+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Wotakoi%3A%20Love%20is%20Hard%20for%20Otaku",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "we-never-learn",
  title: "We Never Learn",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/nx98235-V6yBxNIrsOp0.jpg",
  tags: "Comédie · Romance · Harem · Shōnen",
  stars: 3,
  addedAt: "2026-03-19",
  synopsis: "Nariyuki Yuiga, lycéen brillant mais sans moyens, obtient une bourse complète en échange d'un défi : faire entrer en fac les deux génies de son lycée, Rizu Ogata en littérature et Fumino Furuhashi en sciences, dans des matières où elles sont désastreuses malgré leur génie dans d'autres domaines. Une comédie romantique harem autour du tutorat.",
  pros: ["Concept original du génie incompétent dans sa matière de rêve","Bonne dynamique de groupe entre les différentes prétendantes","Humour de situation efficace dans les sessions de tutorat","Plusieurs fins alternatives bien exécutées dans les derniers volumes"],
  cons: ["Schéma harem classique sans grandes innovations","Certaines prétendantes moins développées que d'autres"],
  reviewHtml: `<p>We Never Learn est un harem romantique solide qui exploite bien son concept de base. L'idée que les personnages soient des génies incompétents dans leurs matières de prédilection est une source de situations comiques bien utilisées, et Nariyuki est un protagoniste plus actif que la moyenne du genre.</p><p>La série se distingue par sa gestion des fins alternatives : les derniers volumes offrent plusieurs dénouements possibles selon la prétendante choisie, ce qui est une approche honnête et satisfaisante pour un genre dont la conclusion est toujours la plus difficile à réussir. Pour les fans de comédie romantique lycéenne, c'est un choix fiable.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=We+Never+Learn",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=We+Never+Learn+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=We+Never+Learn+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=We%20Never%20Learn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "call-of-the-night",
  title: "Call of the Night",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx111233-bQQV6KWMBXz4.jpg",
  tags: "Romance · Surnaturel · Seinen · Vampire",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Kou Yamori, lycéen insomniaque qui fuit le monde le jour, découvre la nuit une liberté qu'il ne soupçonnait pas. Il rencontre Nazuna Nanakusa, une vampire séduisante et nonchalante qui lui propose de le transformer, à condition qu'il tombe amoureux d'elle. Une romance nocturne entre un garçon qui cherche à ressentir quelque chose et une vampire qui fait semblant de ne rien ressentir.",
  pros: ["Atmosphère nocturne unique et envoûtante","Dynamique de relation original qui inverse les codes du genre vampirique","Ryou Kotoyama maîtrise parfaitement le rythme et les silences","Art très élégant, particulièrement efficace dans les scènes de nuit"],
  cons: ["Progression romantique très lente","Les enjeux de transformation vampirique restent longtemps flous"],
  reviewHtml: `<p>Call of the Night est un manga vampirique qui n'a pas grand chose à voir avec les vampires. C'est surtout une histoire sur l'insomnie comme état d'esprit, sur ces adolescents qui ne savent pas quoi faire de leur vie le jour et qui trouvent dans la nuit un espace où les règles changent.</p><p>Kou et Nazuna forment un duo attachant parce que leurs problèmes sont symétriques. Lui cherche à ressentir quelque chose de vrai. Elle fait tout pour ne pas admettre qu'elle ressent déjà. Cette tension douce est le moteur émotionnel d'un manga qui sait parfaitement gérer ses silences.</p><p>L'ambiance nocturne de Kotoyama est sa marque de fabrique : rues vides, enseignes lumineuses, liberté légèrement vertigineuse. On lit Call of the Night comme on sort la nuit en été, avec ce mélange de mélancolie et d'euphorie.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Call+of+the+Night",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Call+of+the+Night+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Call+of+the+Night+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Call%20of%20the%20Night",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "the-ghost-in-the-shell",
  title: "The Ghost in the Shell",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx31023-iozeApEMjmPP.jpg",
  tags: "Sci-fi · Cyberpunk · Seinen · Philosophie",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "Dans un Japon cyberpunk du futur proche, le Major Motoko Kusanagi dirige la Section 9, une unité de police spécialisée dans la cybercriminalité. Son corps est presque entièrement prothétique, et elle s'interroge constamment sur la nature de son identité : y a-t-il encore quelque chose d'humain en elle ? Quand elle traque un mystérieux hacker appelé le Puppet Master, les questions sur la conscience et l'identité deviennent existentielles.",
  pros: ["Oeuvre fondatrice du cyberpunk mondial, influence immense sur toute la SF qui a suivi","Questionnements philosophiques sur l'identité, la conscience et l'humanité d'une profondeur réelle","Masamune Shirow construit un worldbuilding technologique d'une cohérence remarquable","Kusanagi est l'un des personnages féminins les plus iconiques de toute la SF"],
  cons: ["Très dense, avec de nombreuses notes de bas de page et digressions techniques","Humour grivois de Shirow déplace certains lecteurs"],
  reviewHtml: `<p>Ghost in the Shell est l'un des manga les plus importants jamais publiés, point. Masamune Shirow a posé en 1989 des questions sur l'identité numérique, la conscience artificielle et la frontière entre humain et machine qui sont plus pertinentes aujourd'hui qu'elles ne l'étaient à l'époque. L'influence de cette oeuvre sur la science-fiction mondiale est impossible à surestimer.</p><p>Le Major Kusanagi est un personnage d'une densité philosophique rare. Son questionnement sur ce qui constitue son "ghost", son âme dans un corps artificiel, est traité avec une honnêteté qui refuse les réponses faciles. Shirow ne résout pas le problème de la conscience, il l'expose dans toute sa complexité vertigineuse.</p><p>Le manga original est plus dense et plus technique que le film de Mamoru Oshii, avec plus d'humour et plus de digressions. C'est une oeuvre qui exige de l'engagement mais qui le récompense largement. Un chef-d'oeuvre fondateur de la science-fiction.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Ghost+in+the+Shell",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Ghost+in+the+Shell+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Ghost+in+the+Shell+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Netflix",
    url: "https://www.netflix.com/search?q=Ghost%20in%20the%20Shell",
    logo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940"
  }
],
  live: [],
  published: true,
  status: "terminé",
  volumes: 3,
  chapters: 32,
  year: 1989,
  author: "Masamune Shirow",
},

{
  slug: "yokohama-kaidashi-kikou",
  title: "Yokohama Kaidashi Kikou",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/b30004-k0YUnO94IB4x.jpg",
  tags: "Post-apocalyptique · Slice of Life · Seinen · Poétique",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "Alpha est un robot androïde gérant un café isolé sur la côte de la baie de Sagami, dans un monde où la civilisation humaine décline doucement. Les océans montent, les villes se vident, mais personne ne semble pressé. Alpha observe, note, photograph, attend que son propriétaire revienne d'un long voyage. YKK est un manga sur la douceur de la fin du monde et la beauté de l'instant qui passe.",
  pros: ["Atmosphère unique et irremplaçable dans toute la bande dessinée mondiale","Hisai Hitoshi maîtrise le silence et la lumière comme peu d'auteurs","Méditation apaisante sur la temporalité, la mémoire et ce que signifie vivre","Alpha est l'un des personnages les plus touchants du manga seinen"],
  cons: ["Rien ne se passe au sens narratif classique, incompatible avec les lecteurs qui cherchent des enjeux","Difficile à trouver en édition française complète"],
  reviewHtml: `<p>Yokohama Kaidashi Kikou est une oeuvre unique dans toute la bande dessinée mondiale. Hitoshi Ashinano a inventé un genre qu'on pourrait appeler l'apocalypse douce : un monde en fin de course, mais qui s'éteint si lentement et si paisiblement qu'il ressemble moins à une catastrophe qu'à un coucher de soleil très long.</p><p>Alpha, robot androïde qui attend, observe et photographie, est l'un des personnages les plus attachants du manga. Son regard sur le monde humain en déclin est d'une tendresse et d'une curiosité qui transforment chaque moment ordinaire, une tasse de café, une balade à vélo, une conversation avec un voisin, en quelque chose de précieux et d'irremplaçable.</p><p>YKK parle de la mort de la civilisation avec la même légèreté qu'il parle du changement des saisons. C'est une oeuvre qui apprend à regarder les choses avant qu'elles disparaissent. Absolument irremplaçable.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Yokohama+Kaidashi+Kikou",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Yokohama+Kaidashi+Kikou+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Yokohama+Kaidashi+Kikou+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [],
  live: [],
  published: false,
},

{
  slug: "shiki",
  title: "Shiki",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/b112199-bF1fzRraSut3.jpg",
  tags: "Horreur · Vampire · Seinen · Psychologie",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Dans le village isolé de Sotoba, une série de décès inexpliqués survient à la suite de l'installation d'une mystérieuse famille dans un manoir de style occidental. Le docteur Toshio Ozaki commence à comprendre que les morts ne restent pas morts. Shiki est un thriller vampirique qui s'interroge sur qui sont vraiment les monstres : les vampires ou les humains qui les pourchassent.",
  pros: ["Tension montante parfaitement dosée sur la première moitié","Renversement moral brillant dans la seconde moitié qui remet tout en question","Personnages des deux camps traités avec une empathie égale","Atmosphère de village coupé du monde oppressante et réussie"],
  cons: ["Galerie de personnages très large qui peut dérouter au départ","Rythme lent dans les premiers volumes"],
  reviewHtml: `<p>Shiki est un manga d'horreur qui joue avec les conventions du genre vampirique pour produire quelque chose de nettement plus ambigu et perturbant. Fuyumi Ono et Ryu Fujisaki ne se contentent pas de raconter des humains contre des vampires : ils construisent progressivement un questionnement sur la légitimité de la survie et sur ce qui définit un monstre.</p><p>Le vrai tour de force de Shiki est son retournement de perspective à mi-parcours. Quand les humains commencent à riposter, leur violence est aussi froide et méthodique que celle qu'ils condamnaient. Le lecteur se retrouve à souffrir pour les deux camps, sans boussole morale claire. C'est rare et courageux dans le genre horreur.</p><p>L'atmosphère de Sotoba, village fermé sur lui-même, est d'une efficacité remarquable. La lenteur initiale est un investissement qui se rentabilise complètement dans les arcs finaux.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Shiki+manga",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Shiki+manga+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Shiki+manga+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [],
  live: [],
  published: false,
},

{
  slug: "witchcraft-works",
  title: "Witchcraft Works",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx49896-3bGO2Oga6p0l.png",
  tags: "Fantasy · Romance · Comédie · Seinen",
  stars: 3,
  addedAt: "2026-03-19",
  synopsis: "Honoka Takamiya, lycéen ordinaire, découvre que Ayaka Kagari, la fille la plus populaire de son école, est en réalité une puissante sorcière du Feu dont la mission depuis toujours est de le protéger. Honoka se révèle être porteur d'une puissance dormante que des sorcières opposées à Ayaka cherchent à récupérer. Une fantasy romantique qui inverse les rôles classiques.",
  pros: ["Inversion des rôles de genre fraîche : la fille forte protège le garçon ordinaire","Ayaka est un personnage d'une froideur et d'un dévouement attachants","Humour de situation efficace sur l'inversion des conventions"],
  cons: ["Worldbuilding peu approfondi malgré un potentiel évident","Manque de profondeur narrative sur la longueur"],
  reviewHtml: `<p>Witchcraft Works a une bonne idée de départ : inverser les rôles classiques de la fantasy romantique en faisant de la fille la puissante protectrice et du garçon l'objet de protection. Ayaka Kagari, froide et absolument dévouée à Honoka depuis toujours, est un personnage original dans le genre.</p><p>Le manga exploite correctement cette prémisse sans aller aussi loin qu'il le pourrait dans ses implications. C'est une lecture légère et agréable pour les amateurs de fantasy romantique, sans la profondeur narrative qui lui permettrait de sortir du lot.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Witchcraft+Works",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Witchcraft+Works+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Witchcraft+Works+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Witchcraft%20Works",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "classroom-of-the-elite",
  title: "Classroom of the Elite",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx96798-SIQLQqS8HO9h.jpg",
  tags: "Psychologie · Thriller · Seinen · École",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "À l'École Avancée Koudo Ikusei, les élèves semblent jouir d'une liberté totale avec des points échangeables contre tout ce qu'ils désirent. Mais Kiyotaka Ayanokoji, nouvel élève discret assigné à la classe D, la moins bien notée, comprend rapidement que l'école n'est qu'un champ de bataille social masqué. Avec la brillante Suzune Horikita, il va commencer à déjouer les règles du jeu.",
  pros: ["Ayanokoji est l'un des protagonistes à l'intellect le plus fascinant du manga récent","Jeux mentaux et manipulations d'une construction rigoureuse","Révélations progressives sur les personnages et le système de l'école","Ambiance tendue et paranoïaque très efficace"],
  cons: ["Adaptation du light novel parfois condensée maladroitement","Certains personnages manquent de profondeur initiale"],
  reviewHtml: `<p>Classroom of the Elite tire sa force d'un protagoniste quasi-unique dans le manga moderne. Ayanokoji n'est pas le héros classique qui grandit et surmonte ses faiblesses. Il est déjà au sommet, il se cache volontairement dans la médiocrité, et observer ses calculs se dérouler est d'une satisfaction intellectuelle réelle.</p><p>L'École Koudo Ikusei est un microcosme social fascinant. Sous le vernis de liberté et de bien-être, c'est une compétition darwinienne permanente où les classes s'affrontent pour des ressources et des privilèges. Chaque arc dévoile une couche supplémentaire du système et des personnages qui le font fonctionner.</p><p>Le manga bénéficie d'une adaptation fidèle du light novel d'Amatora Shougo. Pour les amateurs de thrillers mentaux façon Machiavel en uniforme scolaire, c'est une lecture addictive.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Classroom+of+the+Elite",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Classroom+of+the+Elite+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Classroom+of+the+Elite+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Classroom%20of%20the%20Elite",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: true,
  status: "en cours",
  volumes: 15,
  chapters: 75,
  year: 2020,
  author: "Syougo Kinugasa",
},

{
  slug: "soul-land",
  title: "Soul Land",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx85446-YmuBl8pnTL9j.jpg",
  tags: "Action · Fantasy · Cultivation · Manhua",
  stars: 3,
  addedAt: "2026-03-19",
  synopsis: "Tang San est un disciple du Tangmen, clan des arts cachés, qui se suicide après avoir volé les plus grands secrets de son clan. Il se réincarne dans le monde de Soul Land où chaque être humain possède une Âme Ancestrale, une manifestation spirituelle qui détermine son destin. Né avec une Âme bleue argentée considérée comme inutile, il est décidé à prouver sa valeur.",
  pros: ["Système de cultivation original avec ses propres règles et ses propres hiérarchies","Fusion inventive entre arts martiaux cachés et fantasy spirituelle","Progression du personnage satisfaisante sur la longueur"],
  cons: ["Récit très long avec des arcs qui s'étendent","Conventions du genre cultivation qui sembleront répétitives aux non-initiés","Art inégal selon les adaptateurs"],
  reviewHtml: `<p>Soul Land est l'une des grandes séries du genre cultivation chinois, adapté en manhua depuis le roman web de Tang Jia San Shao. Le mélange entre les arts cachés du Tangmen, héritage du roman de wuxia, et le système d'Âmes Ancestrales de la fantasy occidentalisée est inventif et donne à la série une identité distincte dans le genre.</p><p>Tang San est un protagoniste compétent dont la progression est bien dosée. Les fondations du système de pouvoir, claires et cohérentes, permettent aux combats d'avoir des enjeux tactiques réels. Pour les lecteurs déjà familiers du genre cultivation, Soul Land est une référence solide. Pour les nouveaux venus, c'est une bonne porte d'entrée dans cet univers.</p>`,
  shops: [
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Soul+Land+manga",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Soul+Land+manga",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [],
  live: [],
  published: false,
},

{
  slug: "the-world-god-only-knows",
  title: "The World God Only Knows",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/23032.jpg",
  tags: "Comédie · Romance · Seinen · Méta",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Keima Katsuragi est un génie des jeux de dating simulation qui a conquis virtuellement des milliers d'héroïnes. Il est forcé par un démon nommé Elsie de séduire des vraies filles pour en expulser les esprits errants qui s'y cachent, en appliquant les mécaniques de ses jeux. Un manga romantique méta sur les conventions du genre, la réalité et l'idéal.",
  pros: ["Concept méta sur les codes des dating sims d'une intelligence rare","Keima est un protagoniste original et attachant malgré son arrogance","Arc final qui subvertit toutes les attentes établies de manière satisfaisante","Humour sur les conventions du genre romantic comedy très efficace"],
  cons: ["Premiers arcs formulaires avant que la série ne montre son vrai potentiel","Arc final peut dérouter les lecteurs attachés à la structure initiale"],
  reviewHtml: `<p>The World God Only Knows commence comme une comédie romantique répétitive et se révèle être l'une des déconstructions les plus intelligentes du genre romantique dans le manga. Tamiki Wakaki a pris son temps pour établir les règles de son univers avant de les démonter méthodiquement dans ses derniers arcs.</p><p>Keima Katsuragi est un protagoniste fascinant parce que sa compétence dans les jeux est exactement ce qui le rend inapte à la réalité. Sa transformation progressive, d'expert en fictions romantiques en participant réel à une histoire vraie, est l'arc de personnage le plus bien caché du manga comique.</p><p>L'arc final, Goddess Arc, est une récompense pour les lecteurs patients. Il retourne complètement les certitudes établies et démontre que Wakaki savait exactement où il allait depuis le début. Une oeuvre à sous-estimer au départ et à ne jamais oublier.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=World+God+Only+Knows",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=World+God+Only+Knows+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=World+God+Only+Knows+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=The%20World%20God%20Only%20Knows",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

{
  slug: "medaka-box",
  title: "Medaka Box",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx43949-sSgW4VE0nQKH.jpg",
  tags: "Action · Comédie · Shōnen · École",
  stars: 3,
  addedAt: "2026-03-19",
  synopsis: "Medaka Kurokami, lycéenne élue présidente du conseil étudiant avec 98% des voix, est une perfection humaine qui excelle dans tout sans effort apparent. Avec son ami d'enfance Zenkichi Hitoyoshi, elle répond aux demandes des élèves via la boîte à suggestions. Derrière la comédie scolaire, Medaka Box révèle progressivement ses vraies ambitions comme une déconstruction méta du manga de shōnen.",
  pros: ["Évolution surprenante d'une comédie scolaire vers une déconstruction méta du genre","Medaka est un concept de personnage original et provocateur","Les arcs finaux sont audacieux dans leur remise en question des conventions","Nisio Isin (Monogatari) apporte une densité de dialogues et d'idées rare"],
  cons: ["Démarrage trompeur qui peut rebuter avant les arcs intéressants","Très dense et verbeux, surtout dans la seconde moitié"],
  reviewHtml: `<p>Medaka Box est un manga qui change complètement de nature au fil des volumes. Ce qui commence comme une comédie scolaire sympa avec une présidente de conseil géniale devient progressivement un des commentaires les plus méta sur les conventions du manga shōnen jamais tentés. Nisio Isin n'écrit pas des histoires, il dissèque les mécanismes de l'écriture d'histoires.</p><p>Medaka elle-même est un concept provocateur : une protagoniste parfaite dans l'absolu, sans faille ni progression possible, dans un genre qui repose sur la progression du héros. Comment raconter une histoire autour d'un personnage qui n'a pas besoin de grandir ? La réponse du manga est inventive, même si pas toujours convaincante.</p><p>À recommander principalement aux lecteurs qui connaissent bien le shōnen et qui apprécieront la méta-lecture. Pour les autres, le bénéfice est plus limité.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Medaka+Box",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Medaka+Box+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Medaka+Box+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [],
  live: [],
  published: false,
},

{
  slug: "psyen",
  title: "PSYЯEN",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx33438-pBfMEC42XhCA.png",
  tags: "Action · Sci-fi · Psychologie · Shōnen",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Sakurako Amamiya et Ageha Yoshina reçoivent mystérieusement une carte de téléphone les conviant dans un monde dévasté appelé Psyren. Ils y affrontent des créatures mutantes appelées WISE dans un futur post-apocalyptique, révélant progressivement leurs propres pouvoirs psychiques. En voyageant entre présent et futur, ils cherchent à comprendre la catastrophe à venir et à l'empêcher.",
  pros: ["Concept de voyage temporel entre présent et futur post-apo original et bien exploité","Système de pouvoirs psychiques intéressant avec ses propres règles","Tension dramatique réelle autour de la catastrophe à prévenir","Histoire d'amour entre les protagonistes bien dosée"],
  cons: ["Fin abrupte due à l'annulation prématurée dans le Jump","Certains arcs auraient bénéficié de plus d'espace narratif"],
  reviewHtml: `<p>Psyren est l'un des manga les plus injustement oubliés du Weekly Shōnen Jump. Toshiaki Iwashiro a construit un système de pouvoirs psychiques original et un mystère temporel engageant, avec des personnages attachants et une romance bien amenée. La série méritait largement une conclusion plus développée que celle qu'elle a obtenu.</p><p>Le concept de voyager dans un futur post-apocalyptique tout en essayant de changer le présent pour l'éviter est une des premières utilisations vraiment efficaces de ce mécanisme dans le shōnen. Les révélations progressives sur Psyren et ses origines maintiennent un vrai suspense.</p><p>L'annulation prématurée par le Jump est une des grandes frustrations du manga de cette génération. Ce qui existe est excellent. La conclusion précipitée est le seul vrai regret.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Psyren",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Psyren+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Psyren+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [],
  live: [],
  published: false,
},


{
  slug: "karakai-jouzu-takagi-san",
  title: "Karakai Jouzu Takagi-san",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx138552-ya7O0IThDeZ6.jpg",
  tags: "Comédie · Romance · Slice of Life · Shōnen",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Nishikata passe ses journées de collège à essayer de piéger Takagi-san, la fille assise à côté de lui, et à échouer lamentablement à chaque tentative. Takagi-san, elle, connaît parfaitement son voisin et le taquine avec une précision et un sourire dévastateurs. Derrière la comédie simple, c'est une romance douce et timide qui se construit à travers des centaines de petits moments quotidiens.",
  pros: ["Charme irrésistible et répétabilité parfaite du concept","Takagi-san est un personnage adorable et charismatique","Douceur et légèreté constantes sans jamais devenir sirupeuses","Chapitres courts parfaits pour une lecture détendue"],
  cons: ["Peu d'évolution narrative, le concept tourne en boucle","La suite (Mr. Takagi-san) révèle la conclusion dès le départ"],
  reviewHtml: `<p>Karakai Jouzu no Takagi-san est un manga qui ne prétend pas à la complexité. C'est une série sur une fille qui taquine un garçon, et il n'y a pas besoin de plus. La magie tient dans l'exécution : Sōichirō Yamamoto a un sens du timing comique parfait, et Takagi-san est un personnage d'un charme naturel désarmant.</p><p>Le manga fonctionne comme une série de petites pièces de théâtre : chaque chapitre a son propre challenge, son propre gag, sa propre petite victoire pour Takagi et sa petite défaite pour Nishikata. La répétition du format est assumée et réconfortante plutôt qu'épuisante.</p><p>Ce qui rend Takagi-san particulièrement touchant, c'est que derrière les taquineries, on voit clairement une fille qui est amoureuse et qui exprime cet amour de la seule façon qu'elle connaît. Une lecture douce et heureuse.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Takagi-san",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Takagi-san+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Takagi-san+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Teasing%20Master%20Takagi-san",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: true,
  status: "terminé",
  volumes: 20,
  chapters: 200,
  year: 2013,
  author: "Sōichirō Yamamoto",
},

{
  slug: "laid-back-camp",
  title: "Laid-Back Camp",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx98351-cv6xQvSwK9GP.png",
  tags: "Slice of Life · Camping · Shōnen · Détente",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Rin Shima aime camper seule au bord du lac Motosu avec sa tente, son réchaud et le calme du mont Fuji en fond. Elle rencontre par hasard Nadeshiko Kagamihara, exubérante et enthousiaste, qui découvre le camping pour la première fois. De cette rencontre naît un groupe de filles qui partagent leur passion pour le plein air, chacune à son propre rythme.",
  pros: ["Atmosphère apaisante unique, le manga parfait pour se détendre","Vraies informations pratiques sur le camping intégrées naturellement dans le récit","Respect des différentes façons de profiter de la nature : seul ou en groupe","Les paysages de la région de Fuji sont d'une beauté constante"],
  cons: ["Peu de tension ou de progression narrative","Peut sembler trop tranquille pour les lecteurs cherchant de l'action"],
  reviewHtml: `<p>Laid-Back Camp est le manga parfait pour lire sous une couverture quand il pleut dehors. Afro a créé quelque chose d'rare : un manga qui rend heureux sans chercher à émouvoir fortement, sans rebondissements, sans drama. Juste des filles qui campent et dont le plaisir est communicatif.</p><p>Ce qui distingue Laid-Back Camp d'autres slice of life c'est son vrai respect du camping comme pratique. Les informations sur l'équipement, les techniques de feu, les recettes de cuisine en extérieur sont toutes réelles et intégrées naturellement. On apprend des choses utiles en lisant une histoire légère.</p><p>La dynamique entre la solitaire Rin et la sociable Nadeshiko est bien pensée : le manga valide les deux approches du plein air sans forcer l'une vers l'autre. Une lecture douce qui fait envie de planter une tente.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Laid-Back+Camp",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Laid-Back+Camp+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Laid-Back+Camp+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Laid-Back%20Camp",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: true,
  status: "en cours",
  volumes: 16,
  chapters: 100,
  year: 2015,
  author: "Afro",
},

{
  slug: "asobi-asobase",
  title: "Asobi Asobase",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/nx97418-4vfXwsEGB7Rh.jpg",
  tags: "Comédie · Slice of Life · Shōjo · École",
  stars: 3,
  addedAt: "2026-03-19",
  synopsis: "Trois lycéennes fondent le club Pastime, censé explorer les loisirs traditionnels japonais. En réalité, elles passent leurs journées à se chamailler, se faire des farces et enchaîner des situations de plus en plus absurdes. Hanako, Olivia et Kasumi forment un trio explosive dont l'humour repose autant sur les expressions faciales outrancières que sur les retournements de situation.",
  pros: ["Humour absurde très efficace et rythmé","Les expressions des personnages sont un art à part entière","Gags originaux qui évitent les clichés du genre"],
  cons: ["Répétitif sur la durée, le format court s'essouffle","Peu de développement de personnages ou d'enjeux narratifs"],
  reviewHtml: `<p>Asobi Asobase est une comédie qui mise tout sur un seul registre : l'absurde porté à son paroxysme par des expressions faciales totalement outrancières. Ça marche, et souvent très bien. Le contraste entre l'apparence sage des trois lycéennes et la violence comique de leurs interactions est une source intarissable de moments hilarants.</p><p>Le manga n'a pas vocation à raconter une histoire ni à développer ses personnages. C'est un recueil de gags au format court, et dans cette discipline, il excelle. Idéal pour lire un chapitre entre deux séries plus denses.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Asobi+Asobase",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Asobi+Asobase+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Asobi+Asobase+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [],
  live: [],
  published: false,
},

{
  slug: "the-return-of-the-disaster-class-hero",
  title: "The Return of the Disaster-Class Hero",
  category: "manhwa",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx143056-MEpVxW7346jz.jpg",
  tags: "Action · Manhwa · Fantasy · Vengeance",
  stars: 3,
  addedAt: "2026-03-19",
  synopsis: "Lee Geon, héros de classe S au pouvoir de la Faucheuse, est trahi et abandonné par ses compagnons dans un donjon de niveau impossible. Dix ans plus tard, il revient transformé, plus puissant que jamais, avec une seule motivation : se venger de ceux qui l'ont trahi. Un manhwa de vengeance classique mais efficacement exécuté.",
  pros: ["Protagoniste à la posture froide et déterminée très efficace dans son registre","Montée en puissance progressive bien dosée","Révélations sur les trahisons passées maintiennent un bon suspense"],
  cons: ["Schéma vengeance très codifié sans grandes surprises","Personnages secondaires peu développés au-delà de leur rôle"],
  reviewHtml: `<p>The Return of the Disaster-Class Hero est un manhwa de vengeance qui connaît ses forces et les exploite sans prétendre à plus. Lee Geon est un protagoniste froid et implacable dont les retrouvailles progressives avec ceux qui l'ont trahi sont exécutées avec un rythme satisfaisant.</p><p>Le manga n'invente pas le genre mais le pratique avec compétence. Les lecteurs de manhwa d'action qui cherchent une histoire de héros trahi et ressuscité trouveront ici exactement ce qu'ils attendent, bien exécuté et sans longueurs inutiles.</p>`,
  shops: [
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Disaster+Class+Hero",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Disaster+Class+Hero",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [],
  live: [],
  published: false,
},

{
  slug: "the-sss-rank-hunters-lucky-draw",
  title: "The SSS-Rank Hunter's Lucky Draw",
  category: "manhwa",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx140466-f3JaHHbVXh8a.jpg",
  tags: "Action · Manhwa · Fantasy · Gacha",
  stars: 2,
  addedAt: "2026-03-19",
  synopsis: "Dans un monde où des portails de donjons sont apparus partout, Hyun-Sung Park est un chasseur de rang E qui découvre un système de gacha divin lui permettant d'obtenir des compétences et équipements de rang SSS par tirage aléatoire. Avec ce pouvoir imprévisible mais potentiellement illimité, il commence son ascension dans la hiérarchie des chasseurs.",
  pros: ["Concept de gacha comme système de progression original dans le genre hunter","Moments de tirage aléatoire qui créent une tension comique efficace"],
  cons: ["Exécution générique malgré la prémisse originale","Manque de profondeur narrative et de développement de personnages","Protagoniste peu distinct des héros classiques du genre"],
  reviewHtml: `<p>The SSS-Rank Hunter's Lucky Draw a une bonne idée de départ, utiliser la mécanique du gacha comme système de progression pour un hunter, mais ne l'exploite pas aussi inventivemment qu'elle le mérite. Le résultat est un manhwa d'action correct mais générique, qui s'adresse surtout aux fans du genre hunter à la recherche de lecture facile.</p><p>Pour les amateurs inconditionnels du genre, c'est une lecture honnête. Pour ceux qui cherchent quelque chose de distinctif dans le paysage déjà surchargé du manhwa hunter, il faudra chercher ailleurs.</p>`,
  shops: [
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=SSS+Rank+Hunter+Lucky+Draw",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=SSS+Rank+Hunter+Lucky+Draw",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [],
  live: [],
  published: false,
},



{
  slug: "battle-angel-alita-last-order",
  title: "Battle Angel Alita: Last Order",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30770-LkQ1FCwWIO9H.jpg",
  tags: "Sci-fi · Action · Cyberpunk · Seinen",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Alita, cyborg guerrière aux capacités de combat extraordinaires, se réveille dans un monde post-apocalyptique divisé entre la cité céleste Tiphares et la décharge géante Scrapyard. Last Order reprend son histoire après le premier arc, l'envoyant dans le tournoi ZOTT en orbite, affrontant les combattants les plus puissants de la galaxie. Un opéra cyberpunk d'une ambition et d'une densité rares.",
  pros: ["Worldbuilding cyberpunk d'une richesse et d'une cohérence exceptionnelles","Alita est l'un des personnages féminins les plus forts et complexes du manga","Combats d'une inventivité technique impressionnante","Questionnements philosophiques profonds sur l'identité et la conscience"],
  cons: ["Très dense et complexe, demande un investissement important","Meilleur après avoir lu le premier arc Gunnm"],
  reviewHtml: `<p>Battle Angel Alita est l'une des grandes oeuvres du manga de science-fiction, et Last Order en est la continuation ambitieuse. Yukito Kishiro construit un univers d'une cohérence rare, où chaque élément du worldbuilding, de la physique des combats au fonctionnement des sociétés orbitales, est pensé avec une rigueur d'ingénieur.</p><p>Alita elle-même est un personnage d'exception. Elle n'est pas définie par une mission ou un maître, mais par une recherche constante de ce qu'elle est vraiment, dans des corps successifs, des identités empruntées, des mémoires fragmentées. Cette question de l'identité face au corps modifié est au coeur de tout le manga.</p><p>Last Order monte encore les enchères avec le tournoi ZOTT, qui permet à Kishiro d'introduire des adversaires d'une inventivité folle. Dense, ambitieux, parfois difficile à suivre, mais inoubliable pour les amateurs de science-fiction exigeante.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Battle+Angel+Alita",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Battle+Angel+Alita+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Battle+Angel+Alita+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [],
  live: [],
  published: false,
},

{
  slug: "skip-and-loafer",
  title: "Skip and Loafer",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx109285-HmBZpzsO2zxd.jpg",
  tags: "Romance · Slice of Life · Seinen · École",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Mitsumi Iwakura débarque à Tokyo depuis sa petite ville de province avec un plan de vie détaillé et une ambition débordante. Son premier jour de lycée tourne mal, mais elle rencontre Sousuke Shima, beau et populaire, qui l'aide sans y penser. Entre la candeur de Mitsumi et la façade décontractée de Shima qui cache quelque chose, une amitié puis une romance se construisent naturellement.",
  pros: ["Mitsumi est une héroïne d'un enthousiasme et d'une sincérité contagieux","Romance qui se développe organiquement sans manipulation narrative artificielle","Traitement sensible de la pression sociale et de l'identité au lycée","Art de Misaki Takamatsu expressif et chaleureux"],
  cons: ["Rythme très doux, peut manquer de piquant pour certains","Certains arcs secondaires moins captivants"],
  reviewHtml: `<p>Skip and Loafer est une des romances lycéennes les plus fraîches et les plus sincères du manga récent. Mitsumi Iwakura, avec ses plans en PowerPoint pour sa vie et sa candeur totale face au monde de Tokyo, est un personnage immédiatement attachant dont l'enthousiasme est communicatif.</p><p>Ce qui distingue le manga, c'est sa façon de traiter Shima. Sous la surface de garçon parfait et populaire se cache quelqu'un qui a perdu contact avec ses propres désirs, qui joue un rôle depuis si longtemps qu'il ne sait plus qui il est vraiment. La rencontre avec Mitsumi, qui l'accepte naturellement sans rien attendre en retour, est un catalyseur de croissance rarement aussi bien exécuté.</p><p>Skip and Loafer est doux, intelligent et terriblement honnête sur ce que signifie être adolescent loin de chez soi. Une belle lecture.</p>`,
  shops: [
  {
    name: "Manganim",
    url: "https://manganim.fr/search?q=Skip+and+Loafer",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594"
  },
  {
    name: "Fnac",
    url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=Skip+and+Loafer+tome",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.fr/s?k=Skip+and+Loafer+tome",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
  }
],
  streaming: [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr/search?q=Skip%20and%20Loafer",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png"
  }
],
  live: [],
  published: false,
},

]
