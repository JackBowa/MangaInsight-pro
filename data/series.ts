// data/series.ts
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
};

export const SERIES: Serie[] = [
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  streaming: []
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
  live: []
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
  live: []
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
  live: []
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
  streaming: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  streaming: []
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
  streaming: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
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
  live: []
},
{
  slug: "one-piece",
  title: "One Piece",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30013-BeslEMqiPhlk.jpg",
  tags: "Action · Aventure · Comédie · Fantasy",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "As a child, Monkey D. Luffy was inspired to become a pirate by listening to the tales of the buccaneer \"Red-Haired\" Shanks. But his life changed when Luffy accidentally ate the Gum-Gum Devil Fruit and gained the power to stretch like rubber...at the cost of never being able to swim again! Years later, still vowing to become the king of the pirates, Luffy sets out on his adventure...one guy alone i",
  pros: ["Combats dynamiques et bien chorégraphiés", "World-building riche et immersif", "Humour efficace qui allège le récit", "Univers fantastique original"],
  cons: ["Peut nécessiter de s'accrocher au départ"],
  reviewHtml: `<p>One Piece est une série incontournable du genre Action.  (score AniList : 91/100)</p><p>À compléter avec votre avis personnel.</p>`,
  shops: [],
  streaming: [],
  live: []
},

{
  slug: "dragon-ball",
  title: "Dragon Ball",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30042-4SetGiEbGc9x.jpg",
  tags: "Action · Aventure · Comédie · Fantasy · Sci-fi",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Dragon Ball follows the adventures of Son Goku from his childhood through adulthood as he trains in martial arts and explores the world in search of the seven mystical orbs known as the Dragon Balls, which can summon a wish-granting dragon when gathered. Along his journey, Goku makes several friends and battles a wide variety of villains, many of whom also seek the Dragon Balls for their own desir",
  pros: ["Combats dynamiques et bien chorégraphiés", "World-building riche et immersif", "Humour efficace qui allège le récit", "Univers fantastique original"],
  cons: ["Certains arcs secondaires moins aboutis"],
  reviewHtml: `<p>Dragon Ball est une série incontournable du genre Action.  (score AniList : 83/100)</p><p>À compléter avec votre avis personnel.</p>`,
  shops: [],
  streaming: [],
  live: []
},
{
  slug: "jujutsu-kaisen",
  title: "Jujutsu Kaisen",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx101517-H3TdM3g5ZUe9.jpg",
  tags: "Action · Drame · Surnaturel",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Although Yuji Itadori looks like your average teenager, his immense physical strength is something to behold! Every sports club wants him to join, but Itadori would rather hang out with the school outcasts in the Occult Research Club. One day, the club manages to get their hands on a sealed cursed object. Little do they know the terror they’ll unleash when they break the seal… (Source: VIZ Media) ",
  pros: ["Combats dynamiques et bien chorégraphiés", "Moments émotionnellement forts"],
  cons: ["Peut nécessiter de s'accrocher au départ"],
  reviewHtml: `<p>Jujutsu Kaisen est une série incontournable du genre Action.  (score AniList : 80/100)</p><p>À compléter avec votre avis personnel.</p>`,
  shops: [],
  streaming: [],
  live: []
},

{
  slug: "one-punch-man",
  title: "One Punch Man",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx85364-O28PUKbABg8y.jpg",
  tags: "Action · Comédie · Sci-fi · Surnaturel",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Follows the life of a hero who manages to win all battles with only one punch. This ability seems to frustrate him as he no longer feels the thrill and adrenaline of fighting a tough battle, which leads to him questioning his past desire of being strong. The original drawn by ONE.",
  pros: ["Combats dynamiques et bien chorégraphiés", "Humour efficace qui allège le récit", "Concepts science-fiction inventifs"],
  cons: ["Peut nécessiter de s'accrocher au départ"],
  reviewHtml: `<p>One Punch Man est une série incontournable du genre Action.  (score AniList : 82/100)</p><p>À compléter avec votre avis personnel.</p>`,
  shops: [],
  streaming: [],
  live: []
},

{
  slug: "mob-psycho-100",
  title: "Mob Psycho 100",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/nx85189-06aXUBq5jwce.jpg",
  tags: "Action · Comédie · Drame · Psychologie · Quotidien",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "Do you or someone you know need an exorcist who works cheap? Reigen's your guy! What's his secret to busting ghosts while keeping prices low? Well, first, he's a fraud, and second, he pays the guy who's got the real psychic power—his student assistant Shigeo—less than minimum wage. Shigeo is an awkward but kind boy whose urge to help others and get along with them is bound up with the mental safet",
  pros: ["Combats dynamiques et bien chorégraphiés", "Humour efficace qui allège le récit", "Moments émotionnellement forts", "Profondeur psychologique des personnages"],
  cons: ["Certains arcs secondaires moins aboutis"],
  reviewHtml: `<p>Mob Psycho 100 est une série incontournable du genre Action.  (score AniList : 85/100)</p><p>À compléter avec votre avis personnel.</p>`,
  shops: [],
  streaming: [],
  live: []
},

{
  slug: "haikyuu",
  title: "Haikyuu!!",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx181735-xIoXaQmtjkuC.png",
  tags: "Sport",
  stars: 2,
  addedAt: "2026-03-19",
  synopsis: "",
  pros: ["Tension dramatique dans les matchs", "Personnages attachants", "Narration solide"],
  cons: ["Rythme parfois irrégulier"],
  reviewHtml: `<p>Haikyuu!! est une série solide du genre Sports.  (score AniList : 61/100)</p><p>À compléter avec votre avis personnel.</p>`,
  shops: [],
  streaming: [],
  live: []
},

{
  slug: "frieren-beyond-journeys-end",
  title: "Frieren: Beyond Journey’s End",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx118586-CXKgWikBFQgS.jpg",
  tags: "Aventure · Drame · Fantasy",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "The adventure is over but life goes on for an elf mage just beginning to learn what living is all about. Elf mage Frieren and her courageous fellow adventurers have defeated the Demon King and brought peace to the land. With the great struggle over, they all go their separate ways to live a quiet life. But as an elf, Frieren, nearly immortal, will long outlive the rest of her former party. How wil",
  pros: ["World-building riche et immersif", "Moments émotionnellement forts", "Univers fantastique original"],
  cons: ["Peut nécessiter de s'accrocher au départ"],
  reviewHtml: `<p>Frieren: Beyond Journey’s End est une série incontournable du genre Adventure.  (score AniList : 87/100)</p><p>À compléter avec votre avis personnel.</p>`,
  shops: [],
  streaming: [],
  live: []
},

{
  slug: "delicious-in-dungeon",
  title: "Delicious in Dungeon",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx86082-MXizJxzbijdd.jpg",
  tags: "Aventure · Comédie · Drame · Fantasy",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "When young adventurer Laios and his company are attacked and soundly thrashed by a dragon deep in a dungeon, the party loses all its money and provisions...and a member! They're eager to go back and save her, but there is just one problem: If they set out with no food or coin to speak of, they're sure to starve on the way! But Laios comes up with a brilliant idea: \"Let's eat the monsters!\" Slimes,",
  pros: ["World-building riche et immersif", "Humour efficace qui allège le récit", "Moments émotionnellement forts", "Univers fantastique original"],
  cons: ["Peut nécessiter de s'accrocher au départ"],
  reviewHtml: `<p>Delicious in Dungeon est une série incontournable du genre Adventure.  (score AniList : 88/100)</p><p>À compléter avec votre avis personnel.</p>`,
  shops: [],
  streaming: [],
  live: []
},

{
  slug: "yu-yu-hakusho",
  title: "Yu Yu Hakusho",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30053-wCR6xyGzeUYo.png",
  tags: "Action · Comédie · Drame · Romance · Surnaturel",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Yusuke Urameshi was a tough teen delinquent until one selfless act changed his life...by ending it. When he died saving a little kid from a speeding car, the afterlife didn't know what to do with him, so it gave him a second chance at life. Now, Yusuke is a ghost with a mission, performing good deeds at the behest of Botan, the ferrywoman of the River Styx, and Koenma, the pacifier-sucking judge o",
  pros: ["Combats dynamiques et bien chorégraphiés", "Humour efficace qui allège le récit", "Moments émotionnellement forts"],
  cons: ["Certains arcs secondaires moins aboutis"],
  reviewHtml: `<p>Yu Yu Hakusho est une série incontournable du genre Action.  (score AniList : 80/100)</p><p>À compléter avec votre avis personnel.</p>`,
  shops: [],
  streaming: [],
  live: []
},

{
  slug: "nana",
  title: "Nana",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30028-VJqBC1ar6AxE.png",
  tags: "Drame · Romance · Quotidien",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "Nana Komatsu is a young woman who's endured an unending string of boyfriend problems. Moving to Tokyo, she's hoping to take control of her life and put all those messy misadventures behind her. She's looking for love and she's hoping to find it in the big city. Nana Osaki, on the other hand, is cool, confident and focused. She swaggers into town and proceeds to kick down the doors to Tokyo's under",
  pros: ["Moments émotionnellement forts", "Personnages attachants", "Narration solide"],
  cons: ["Peut nécessiter de s'accrocher au départ"],
  reviewHtml: `<p>Nana est une série incontournable du genre Drama.  (score AniList : 88/100)</p><p>À compléter avec votre avis personnel.</p>`,
  shops: [],
  streaming: [],
  live: []
},

{
  slug: "kingdom",
  title: "Kingdom",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/nx46765-KPXir4sRqJBW.png",
  tags: "Action · Drame",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "Xin is a war orphan in a poor village in the kingdom of Qin. He has big dreams of becoming a great general, and when his best friend’s life is cut short by political machinations, Xin sets off to find a deposed ruler and help restore his place on the throne, while working his way up through the ranks of the Qin kingdom’s army to do what no one has ever done before—unify China. (Source: VIZ Media)",
  pros: ["Combats dynamiques et bien chorégraphiés", "Moments émotionnellement forts"],
  cons: ["Peut nécessiter de s'accrocher au départ"],
  reviewHtml: `<p>Kingdom est une série incontournable du genre Action.  (score AniList : 89/100)</p><p>À compléter avec votre avis personnel.</p>`,
  shops: [],
  streaming: [],
  live: []
},

{
  slug: "20th-century-boys",
  title: "20th Century Boys",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30003-E84fwIh22LAQ.jpg",
  tags: "Drame · Mystère · Psychologie · Sci-fi · Thriller",
  stars: 5,
  addedAt: "2026-03-19",
  synopsis: "Humanity, having faced extinction at the end of the 20th century, would not have entered the new millennium if it weren't for them. In 1969, during their youth, they created a symbol. In 1997, as the coming disaster slowly starts to unfold, that symbol returns. This is the story of a group of boys who try to save the world. For Kenji, a simple convenience store manager who once dreamed of becoming",
  pros: ["Moments émotionnellement forts", "Profondeur psychologique des personnages", "Concepts science-fiction inventifs", "Intrigue bien construite"],
  cons: ["Certains arcs secondaires moins aboutis"],
  reviewHtml: `<p>20th Century Boys est une série incontournable du genre Drama.  (score AniList : 88/100)</p><p>À compléter avec votre avis personnel.</p>`,
  shops: [],
  streaming: [],
  live: []
},

{
  slug: "akira",
  title: "Akira",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30664-JJq9tosQvlpW.jpg",
  tags: "Action · Horreur · Psychologie · Sci-fi",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Welcome to Neo-Tokyo, built on the ashes of a Tokyo annihilated by a blast of unknown origin that triggered World War III. The lives of two streetwise teenage friends, Tetsuo and Kaneda, change forever when paranormal abilities begin to waken in Tetsuo, making him a target for a shadowy agency that will stop at nothing to prevent another catastrophe like the one that leveled Tokyo. At the core of ",
  pros: ["Combats dynamiques et bien chorégraphiés", "Profondeur psychologique des personnages", "Concepts science-fiction inventifs"],
  cons: ["Peut nécessiter de s'accrocher au départ"],
  reviewHtml: `<p>Akira est une série incontournable du genre Action.  (score AniList : 84/100)</p><p>À compléter avec votre avis personnel.</p>`,
  shops: [],
  streaming: [],
  live: []
},

{
  slug: "baki-the-search-of-our-strongest-hero",
  title: "Baki: The Search of our Strongest Hero",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx35157-trkQLXrIhY2s.png",
  tags: "Action · Sport",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "BAKI: THE SEARCH OF OUR STRONGEST HERO is the official name of the 4th saga in which Baki will find strongest enemies in his path, and the way to challenge his dad once again, and this time&hellip; To lose is to die. Hanma Baki (named &ldquo;Wild Fang&rdquo; by his father) is a boy born under an unlucky star. Since the day of his birth, Baki has been rigorously training at all kinds of martial art",
  pros: ["Combats dynamiques et bien chorégraphiés", "Tension dramatique dans les matchs"],
  cons: ["Peut nécessiter de s'accrocher au départ"],
  reviewHtml: `<p>Baki: The Search of our Strongest Hero est une série incontournable du genre Action.  (score AniList : 77/100)</p><p>À compléter avec votre avis personnel.</p>`,
  shops: [],
  streaming: [],
  live: []
},

{
  slug: "that-time-i-got-reincarnated-as-a-slime",
  title: "That Time I Got Reincarnated as a Slime",
  category: "manga",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/nx86399-NwbRFVh5koqc.jpg",
  tags: "Action · Aventure · Comédie · Fantasy",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "As players of Monster Hunter and Dungeons & Dragons know, the slime is not exactly the king of the fantasy monsters. So when a 37-year-old Tokyo salaryman dies and wakes up in a world of dragons and magic, he's a little disappointed to find he's become a blind, boneless slime monster. (Source: Kodansha USA)",
  pros: ["Combats dynamiques et bien chorégraphiés", "World-building riche et immersif", "Humour efficace qui allège le récit", "Univers fantastique original"],
  cons: ["Peut nécessiter de s'accrocher au départ"],
  reviewHtml: `<p>That Time I Got Reincarnated as a Slime est une série incontournable du genre Action.  (score AniList : 82/100)</p><p>À compléter avec votre avis personnel.</p>`,
  shops: [],
  streaming: [],
  live: []
},

{
  slug: "lookism",
  title: "Lookism",
  category: "manhwa",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx86848-4CSItSclJUvi.jpg",
  tags: "Action · Comédie · Drame · Surnaturel",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Daniel is an unattractive loner who wakes up in a different body. Now tall, handsome, and cooler than ever in his new form, Daniel aims to achieve everything he couldn't before. How far will he go to keep his body... and his secrets? (Source: WEBTOON)",
  pros: ["Combats dynamiques et bien chorégraphiés", "Humour efficace qui allège le récit", "Moments émotionnellement forts"],
  cons: ["Peut nécessiter de s'accrocher au départ"],
  reviewHtml: `<p>Lookism est une série incontournable du genre Action.  (score AniList : 78/100)</p><p>À compléter avec votre avis personnel.</p>`,
  shops: [],
  streaming: [],
  live: []
},

{
  slug: "sweet-home",
  title: "Sweet Home",
  category: "manhwa",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx100954-xY0Vw2sRRo8t.png",
  tags: "Drame · Horreur · Psychologie · Surnaturel · Thriller",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "After an unexpected family tragedy, a reclusive high school student is forced to leave his home -- only to face something much scarier: a reality where monsters are trying to wipe out humanity. Now he must fight alongside a handful of reluctant heroes to try and save the world before it’s too late. (Source: WEBTOON) Note: Includes one extra chapter.",
  pros: ["Moments émotionnellement forts", "Profondeur psychologique des personnages"],
  cons: ["Certains arcs secondaires moins aboutis"],
  reviewHtml: `<p>Sweet Home est une série incontournable du genre Drama.  (score AniList : 82/100)</p><p>À compléter avec votre avis personnel.</p>`,
  shops: [],
  streaming: [],
  live: []
},

{
  slug: "noblesse",
  title: "Noblesse",
  category: "manhwa",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx59983-cfSjrRxuAlAD.png",
  tags: "Action · Aventure · Comédie · Surnaturel",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Rai wakes up from an 820-year-long sleep and starts his new life as a student in a high school founded by his loyal servant, Frankenstein. But his peaceful days with other human students are soon interrupted by mysterious attackers known as the \"Unions.\" (Source: WEBTOON)",
  pros: ["Combats dynamiques et bien chorégraphiés", "World-building riche et immersif", "Humour efficace qui allège le récit"],
  cons: ["Peut nécessiter de s'accrocher au départ"],
  reviewHtml: `<p>Noblesse est une série incontournable du genre Action.  (score AniList : 76/100)</p><p>À compléter avec votre avis personnel.</p>`,
  shops: [],
  streaming: [],
  live: []
},

{
  slug: "weak-hero",
  title: "Weak Hero",
  category: "manhwa",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx113488-0ghq0eEnftk0.jpg",
  tags: "Action · Drame",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Once the bullies target you, it’s game over. The school is run by tyrants whose favorite hobby is tormenting the weakest kids in class. But then Gray arrived. This mysterious new student threatens to dismantle the established order. He may be small in stature, but his calculative and brutal fighting leaves unsuspecting opponents lying on the floor begging for mercy. Now the school's toughest bulli",
  pros: ["Combats dynamiques et bien chorégraphiés", "Moments émotionnellement forts"],
  cons: ["Peut nécessiter de s'accrocher au départ"],
  reviewHtml: `<p>Weak Hero est une série incontournable du genre Action.  (score AniList : 78/100)</p><p>À compléter avec votre avis personnel.</p>`,
  shops: [],
  streaming: [],
  live: []
},

{
  slug: "a-returners-magic-should-be-special",
  title: "A Returner's Magic Should Be Special",
  category: "manhwa",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx105393-oiHumQoBGKG5.jpg",
  tags: "Action · Aventure · Fantasy",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "The worst calamity humankind has ever faced... Shadow Realms have ravaged the earth and decimated almost everyone in their way. The survival of humanity hinges upon the success of just six mages, including analytic fighter Desir Herrman. The remaining heroes make one final stand to end the bloodshed...but to no avail. Desir closes his eyes on what should be the end of his life—only to open them an",
  pros: ["Combats dynamiques et bien chorégraphiés", "World-building riche et immersif", "Univers fantastique original"],
  cons: ["Peut nécessiter de s'accrocher au départ"],
  reviewHtml: `<p>A Returner's Magic Should Be Special est une série incontournable du genre Action.  (score AniList : 76/100)</p><p>À compléter avec votre avis personnel.</p>`,
  shops: [],
  streaming: [],
  live: []
},

{
  slug: "second-life-ranker",
  title: "Second Life Ranker",
  category: "manhwa",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx109957-EgJWdR7l9TBG.jpg",
  tags: "Action · Aventure · Fantasy",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Yeonwoo’s brother disappeared years ago, and he’s devastated to learn of his death. As he copes with his loss, he’s given a pocket watch and learns there’s more to his brother’s death: he was betrayed while competing in the Tower of the Sun God. Now it’s Yeonwoo’s turn to use the knowledge his brother left behind. Can Yeonwoo (call sign: Cain) navigate that world and gain enough power and experien",
  pros: ["Combats dynamiques et bien chorégraphiés", "World-building riche et immersif", "Univers fantastique original"],
  cons: ["Peut nécessiter de s'accrocher au départ"],
  reviewHtml: `<p>Second Life Ranker est une série incontournable du genre Action.  (score AniList : 77/100)</p><p>À compléter avec votre avis personnel.</p>`,
  shops: [],
  streaming: [],
  live: []
},

{
  slug: "nano-machine",
  title: "Nano Machine",
  category: "manhwa",
  cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx120980-RZ9WLd0o9hyo.jpg",
  tags: "Action · Aventure · Fantasy · Sci-fi",
  stars: 4,
  addedAt: "2026-03-19",
  synopsis: "Nanotechnology meets martial arts at the Mashin Academy. Yeo-Un’s mother may not be one of the High Priest’s six official wives, but his father’s blood still qualifies him for a chance at the position of Minor Priest. Will a mysterious nanomachine injection from a future descendent help Yeo-un in this fierce competition against his powerful half-siblings? (Source: WEBTOON)",
  pros: ["Combats dynamiques et bien chorégraphiés", "World-building riche et immersif", "Univers fantastique original", "Concepts science-fiction inventifs"],
  cons: ["Peut nécessiter de s'accrocher au départ"],
  reviewHtml: `<p>Nano Machine est une série incontournable du genre Action.  (score AniList : 81/100)</p><p>À compléter avec votre avis personnel.</p>`,
  shops: [],
  streaming: [],
  live: []
},

]
