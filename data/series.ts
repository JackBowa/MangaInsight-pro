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
};

export const SERIES: Serie[] = [
  // === EXEMPLE COMPLET : ONE PIECE ===
  {
    slug: "one-piece",
    title: "One Piece",
    category: "manga",
    tags: "Shōnen · Aventure",
    cover:
      "https://manga-insight-pro.vercel.app/one-piece.avif",
    synopsis:
`Il fut un temps où Gold Roger était le plus grand de tous les pirates, le "Roi des Pirates" était son surnom. À sa mort, son trésor d'une valeur inestimable connu sous le nom de "One Piece" fut caché quelque part sur "Grand Line". De nombreux pirates sont partis à la recherche de ce trésor mais tous sont morts
  avant même de l'atteindre. Monkey D. Luffy rêve de retrouver ce trésor légendaire et de devenir le nouveau "Roi des Pirates". Après avoir mangé un fruit du démon, il possède un pouvoir lui permettant de réaliser son rêve. Il lui faut maintenant trouver un équipage pour partir à l'aventure !`,
    reviewHtml: `
 <p>One Piece est un véritable trésor pour moi, une aventure épique qui m'a accompagné pendant des années. Suivre les péripéties de Monkey D. Luffy et de son équipage est une expérience que je chéris profondément. Ce qui rend ce manga si spécial, c'est son univers incroyablement vaste et varié. Chaque île recèle ses propres mystères et ses propres dangers, créant ainsi un monde où l'imagination semble infinie. </p>
              
               <p>Le style de dessin unique d'Eiichiro Oda est immédiatement reconnaissable. Ses personnages sont si expressifs, et les scènes d'action sont si dynamiques qu'on a l'impression de vivre chaque combat aux côtés de Luffy et de son équipage. Même en noir et blanc, le manga parvient à capturer toute l'énergie et l'émotion de chaque moment.</p>

              <p>Ce qui me fascine le plus dans One Piece, ce sont les personnages. Chacun d'entre eux a une histoire poignante et des motivations profondes, ce qui crée un lien puissant entre eux et les lecteurs. Les thèmes explorés, comme l'amitié et la liberté, résonnent d'une manière unique et contribuent à faire de cette aventure une expérience véritablement mémorable.</p>

              <p>La longueur de One Piece peut sembler intimidante au début, mais c'est en réalité l'une de ses forces. Cette longévité permet à l'histoire de se développer de manière organique, offrant des arcs narratifs riches et des moments mémorables à chaque tournant. Même après des centaines de chapitres, chaque nouvelle révélation me laisse toujours en haleine, attendant avec impatience la suite de l'aventure.</p>

              <p>En résumé, si vous cherchez une saga captivante, pleine d'aventures, d'émotions et de rebondissements, alors ne cherchez pas plus loin que One Piece. C'est bien plus qu'un simple manga sur les pirates, c'est une expérience de lecture inoubliable qui vous transportera dans un monde fantastique où chaque page vous réserve une nouvelle surprise.</p>

    `,
    stars: 5,
    shops: [
      {
        name: "Manganim",
        url: "https://manganim.fr/search?q=One+piece+tome",
        logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594",
      },
      {
        name: "Fnac",
        url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=one+piece+tome",
        logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png",
      },
      {
        name: "Amazon",
        url: "https://www.amazon.fr/s?k=one+piece+tome",
        logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg",
      },
    ],
    streaming: [
      {
        name: "Crunchyroll",
        url: "https://www.crunchyroll.com/fr/series/GRMG8ZQZR/one-piece",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png",
      },
      {
        name: "Netflix (animé)",
        url: "https://www.netflix.com/be-fr/title/80107103",
        logo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
      },
    ],
    live: [
      {
        name: "Netflix (live action)",
        url: "https://www.netflix.com/be-fr/title/80217863",
        logo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
      },
    ],
  },

  // Tu ajoutes les autres séries ici, par ex. Naruto :
{
  slug: "naruto",
  title: "Naruto",
  category: "manga",
  tags: "Shōnen · Ninjas · Action",
  cover: "https://manga-insight-pro.vercel.app/naruto.jpg",
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
  title: "Solo Leveling",
  category: "manhwa",
  tags: "Action · Fantasy · Chasseurs",
  cover:
    "https://manga-insight-pro.vercel.app/solo-leveling.jpeg",
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
  title: "Tokyo Revengers",
  category: "manga",
  tags: "Action · Voyage temporel",
  cover: "https://manga-insight-pro.vercel.app/Tokyo-Revengers.jpg",
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
  title: "The Player Who Can’t Level Up",
  category: "manhwa",
  tags: "Action · Fantasy",
  cover: "https://manga-insight-pro.vercel.app/the-player.png",
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
  title: "The Beginning After The End",
  category: "manhwa",
  tags: "Réincarnation · Fantasy",
  cover: "https://manga-insight-pro.vercel.app/the%20beginning.jpg",
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
  title: "My Hero Academia",
  category: "manga",
  tags: "Super-héros · Shōnen",
  cover: "https://manga-insight-pro.vercel.app/My-Hero-Academia.jpg",
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
  title: "L’Attaque des Titans",
  category: "manga",
  tags: "Dark Fantasy · Titans",
  cover: "https://manga-insight-pro.vercel.app/shingeki-no-kyojin.jpg",
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
  title: "Blue Lock",
  category: "manga",
  tags: "Football · Shōnen · Compétition",
  cover: "https://manga-insight-pro.vercel.app/blue-lock.jpg",
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
  title: "Bleach",
  category: "manga",
  tags: "Shōnen · Surnaturel · Action",
  cover: "https://manga-insight-pro.vercel.app/bleach.jpg",
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
  title: "Black Butler",
  category: "manga",
  tags: "Gothique · Mystère · Fantasy",
  cover: "https://manga-insight-pro.vercel.app/black-butler.jpg",
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
  title: "Kuroko no Basket",
  category: "manga",
  tags: "Sport · Basket · Lycée · Shônen · Compétition",
  cover: "https://manga-insight-pro.vercel.app/kuroko-no-basket.jpg",
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
  title: "Kill the Hero",
  category: "manhwa",
  tags: "Action · Donjons · Régression · Revanche · Thriller",
  cover: "https://manga-insight-pro.vercel.app/kill-the-hero.png",
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
  title: "Berserk",
  category: "manga",
  tags: "Dark Fantasy · Tragédie · Épée · Destin",
  cover: "https://manga-insight-pro.vercel.app/berserk.jpg",
  synopsis: "Guts, mercenaire marqué par la fatalité, traverse un monde ravagé par monstres et trahisons. Sa quête de vengeance croise celle d’un empire du mal. L’espoir subsiste au fil du fer et de la camaraderie. Une odyssée violente et mythique.",
  reviewHtml: "",
  stars: 0,
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
  title: "Black Clover",
  category: "manga",
  tags: "Shōnen · Magie · Rivalité · Dépassement",
  cover: "https://manga-insight-pro.vercel.app/black-clover.png",
  synopsis: "Né sans magie, Asta rêve pourtant de devenir Empereur-Mage. Avec son grimoire anti-magie et la rivalité de Yuno, il défie un monde qui le croit impuissant. Missions périlleuses et complots démoniaques s’enchaînent. La persévérance devient son arme absolue.",
  reviewHtml: "",
  stars: 0,
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
  title: "Blue Exorcist",
  category: "manga",
  tags: "Exorcisme · Démon · Lycée · Action",
  cover: "https://manga-insight-pro.vercel.app/blue-exorcist.png",
  synopsis: "Rin découvre qu’il est le fils de Satan. Décidé à lutter contre son héritage, il rejoint une académie d’exorcistes. Entre fraternité et tentations, il forge sa propre voie. Le feu bleu n’est pas une fatalité.",
  reviewHtml: "",
  stars: 0,
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
  title: "Claymore",
  category: "manga",
  tags: "Dark Fantasy · Démons · Épée · Vengeance",
  cover: "https://manga-insight-pro.vercel.app/claymore.png",
  synopsis: "Des guerrières mi-humaines mi-démones traquent des créatures voraces. Clare poursuit sa vendetta dans un monde hostile et hiérarchisé. Les combats laissent place à des choix cruels. La frontière entre monstre et humain s’effrite.",
  reviewHtml: "",
  stars: 0,
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
  title: "D.Gray-man",
  category: "manga",
  tags: "Surnaturel · Organisation · Tragédie · Gothique",
  cover: "https://manga-insight-pro.vercel.app/d-gray-man.jpg",
  synopsis: "Allen Walker combat aux côtés d’exorcistes contre les Akuma créés par le Comte Millénaire. L’Innocence, arme divine, épuise autant qu’elle sauve. Les secrets de l’Ordre s’assombrissent. Le salut a un coût.",
  reviewHtml: "",
  stars: 0,
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
  title: "Death Note",
  category: "manga",
  tags: "Thriller · Surnaturel · Psychologie · Duel cérébral",
  cover: "https://manga-insight-pro.vercel.app/death-note.jpg",
  synopsis: "Light Yagami découvre un cahier permettant de tuer quiconque dont on écrit le nom. Il se lance dans une croisade pour « purifier » le monde, attirant l’attention du détective L. Un duel d’esprits s’engage où chaque geste peut trahir l’autre. Le pouvoir absolu corrompt ses convictions.",
  reviewHtml: "",
  stars: 0,
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
  title: "Dr. Stone",
  category: "manga",
  tags: "Science · Survie · Post-apo · Aventure",
  cover: "https://manga-insight-pro.vercel.app/dr-stone.jpg",
  synopsis: "L’humanité est pétrifiée pendant des millénaires. À son réveil, Senku, prodige de la science, veut rebâtir la civilisation avec des moyens rudimentaires. Entre inventions géniales et alliances fragiles, une nouvelle ère commence.",
  reviewHtml: "",
  stars: 0,
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
  title: "Eleceed",
  category: "manhwa",
  tags: "Action · Pouvoirs · Comédie · Mentor",
  cover: "https://manga-insight-pro.vercel.app/eleceed.jpg",
  synopsis: "Jiwoo, au cœur doux et rapide comme l’éclair, rencontre Kayden, maître puissant coincé en chat. Ensemble, ils naviguent le monde secret des éveillés. Amitiés, entraînements et affrontements s’enchaînent. La gentillesse peut frapper fort.",
  reviewHtml: "",
  stars: 0,
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
  title: "Fairy Tail",
  category: "manga",
  tags: "Shōnen · Magie · Guilde · Aventure",
  cover: "https://manga-insight-pro.vercel.app/fairy-tail.jpg",
  synopsis: "Lucy rejoint Fairy Tail et forme un duo avec Natsu, chasseur de dragons au tempérament brûlant. La guilde enchaîne missions, tournois et guerres de factions. Entre rivalités et solidarité, chacun protège sa famille choisie.",
  reviewHtml: "",
  stars: 0,
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
  title: "Fire Force",
  category: "manga",
  tags: "Action · Pompiers · Surnaturel · Enquête",
  cover: "https://manga-insight-pro.vercel.app/fire-force.jpg",
  synopsis: "Des combustions humaines spontanées transforment des victimes en infernaux. Shinra, pompier aux pieds flamboyants, combat ces fléaux tout en cherchant la vérité sur son passé. Les brigades s’affrontent sur fond de complot religieux.",
  reviewHtml: "",
  stars: 0,
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
  title: "Fullmetal Alchemist",
  category: "manga",
  tags: "Aventure · Alchimie · Frères · Guerre",
  cover: "https://manga-insight-pro.vercel.app/fullmetal-alchemist.png",
  synopsis: "Après une transmutation interdite, Edward et Alphonse perdent chacun une partie d’eux-mêmes. Pour récupérer leurs corps, ils cherchent la Pierre Philosophale. Leur quête révèle complots d’État, homonculus et vérités amères.",
  reviewHtml: "",
  stars: 0,
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
  title: "Gintama",
  category: "manga",
  tags: "Comédie · Sci-fi · Parodie · Samouraï",
  cover: "https://manga-insight-pro.vercel.app/gintama.jpg",
  synopsis: "Dans un Edo envahi par des aliens, Gintoki, samouraï décalé, accepte tous les petits boulots. Parodies méta, émotions sincères et combats sérieux cohabitent. L’absurde devient un art.",
  reviewHtml: "",
  stars: 0,
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
  title: "Hell’s Paradise",
  category: "manga",
  tags: "Dark Fantasy · Ninjas · Survival · Île maudite",
  cover: "https://manga-insight-pro.vercel.app/hells-paradise.png",
  synopsis: "Condamné à mort, Gabimaru se voit offrir la vie sauve s’il récupère un élixir d’immortalité sur une île létale. Assassins et samouraïs s’y affrontent au cœur d’une nature monstrueuse. Beauté et horreur s’entrelacent.",
  reviewHtml: "",
  stars: 0,
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
  title: "JoJo’s Bizarre Adventure",
  category: "manga",
  tags: "Action · Fantastique · Saga · Style",
  cover: "https://manga-insight-pro.vercel.app/jojos-bizarre-adventure.jpg",
  synopsis: "Saga multigénérationnelle où les Joestar affrontent des forces occultes. Pouvoirs stylisés, poses iconiques et imagination débridée. Chaque partie réinvente la formule avec panache.",
  reviewHtml: "",
  stars: 0,
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
  title: "Made in Abyss",
  category: "manga",
  tags: "Aventure · Exploration · Mystère · Dark",
  cover: "https://manga-insight-pro.vercel.app/made-in-abyss.jpg",
  synopsis: "Riko descend dans l’Abysse pour retrouver sa mère légendaire, accompagnée de Reg, androïde amnésique. À mesure qu’ils plongent, la beauté cède au cauchemar. Les secrets enfouis exigent un tribut terrible.",
  reviewHtml: "",
  stars: 0,
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
  title: "Mashle",
  category: "manga",
  tags: "Comédie · Magie · Parodie · Action",
  cover: "https://manga-insight-pro.vercel.app/mashle.jpg",
  synopsis: "Dans un monde régi par la magie, Mash n’en possède aucune… mais des biceps en béton. Il entre dans une académie et résout tous les problèmes à la force brute. Les codes sont bousculés, les duels tournent à l’absurde.",
  reviewHtml: "",
  stars: 0,
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
  title: "Monster",
  category: "manga",
  tags: "Thriller · Psychologie · Europe · Enquête",
  cover: "https://manga-insight-pro.vercel.app/monster.jpg",
  synopsis: "Brillant neurochirurgien, Tenma sauve un enfant promis à devenir un tueur. Des années plus tard, il traque le monstre qu’il a épargné, à travers une Europe hantée par la culpabilité et la manipulation.",
  reviewHtml: "",
  stars: 0,
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
  title: "Noragami",
  category: "manga",
  tags: "Dieux · Action · Comédie · Quotidien",
  cover: "https://manga-insight-pro.vercel.app/noragami.png",
  synopsis: "Yato, dieu fauché, rêve de devenir populaire. Avec Hiyori et Yukine, il résout des affaires entre monde des vivants et esprits. Derrière les gags, des blessures profondes ressurgissent.",
  reviewHtml: "",
  stars: 0,
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
  title: "Omniscient Reader",
  category: "manhwa",
  tags: "Apocalypse · Méta · Scénario · Compagnons",
  cover: "https://manga-insight-pro.vercel.app/omniscient-reader.jpg",
  synopsis: "Dokja voit son webroman favori devenir réalité. Armé de sa connaissance de l’histoire, il tente de survivre aux scénarios imposés par des entités cosmiques. Savoir n’équivaut pas à pouvoir.",
  reviewHtml: "",
  stars: 0,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=omniscient+reader", logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [],
  live: []
},
{
  slug: "oshi-no-ko",
  title: "Oshi no Ko",
  category: "manga",
  tags: "Showbiz · Drame · Mystère · Réincarnation",
  cover: "https://manga-insight-pro.vercel.app/oshi-no-ko.png",
  synopsis: "Un médecin et sa patiente renaissent dans le monde des idoles, liés au destin d’une star lumineuse. Entre coulisses du showbiz et quête de vérité, ils affrontent manipulations et médias.",
  reviewHtml: "",
  stars: 0,
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
  title: "Pluto",
  category: "manga",
  tags: "Sci-fi · Robotique · Enquête · Remake",
  cover: "https://manga-insight-pro.vercel.app/pluto.jpg",
  synopsis: "Relecture sombre d’un arc d’Astro Boy. Gesicht, détective robot, enquête sur des assassinats visant les plus puissants robots du monde. Humanité, mémoire et haine s’entrecroisent.",
  reviewHtml: "",
  stars: 0,
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
  title: "Slam Dunk",
  category: "manga",
  tags: "Sport · Basket · Lycée · Équipe",
  cover: "https://manga-insight-pro.vercel.app/slam-dunk.png",
  synopsis: "Voyou au grand cœur, Hanamichi rejoint le club de basket par amour-propre. Entre entraînements, rivalités et matchs haletants, il découvre l’esprit d’équipe. Le terrain devient sa seconde chance.",
  reviewHtml: "",
  stars: 0,
  shops: [
    { name: "Fnac",   url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=slam+dunk+tome", logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=slam+dunk+tome",       logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [],
  live: []
},
{
  slug: "soul-eater",
  title: "Soul Eater",
  category: "manga",
  tags: "Fantaisie · Académie · Armes vivantes · Style",
  cover: "https://manga-insight-pro.vercel.app/soul-eater.jpg",
  synopsis: "À la Shibusen, des manieurs et leurs armes humaines chassent âmes corrompues et sorcières. Maka et Soul visent le statut d’Arme ultime. Ambiance gothique, humour noir et combats syncopés.",
  reviewHtml: "",
  stars: 0,
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
  title: "The Promised Neverland",
  category: "manga",
  tags: "Thriller · Évasion · Mystère · Enfance",
  cover: "https://manga-insight-pro.vercel.app/the-promised-neverland.jpg",
  synopsis: "Emma, Norman et Ray découvrent l’horrible vérité de leur orphelinat. Ils orchestrent une évasion impossible sous l’œil d’adultes menaçants. Chaque détail compte, chaque erreur est fatale.",
  reviewHtml: "",
  stars: 0,
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
  title: "Tower of God",
  category: "manhwa",
  tags: "Fantasy · Tour · Épreuves · Compétition",
  cover: "https://manga-insight-pro.vercel.app/tower-of-god.jpg",
  synopsis: "Bam entre dans une tour où chaque étage impose des tests mortels. Alliances fragiles, règles changeantes et pouvoirs étranges rythment l’ascension. Il cherche son amie Rachel, quitte à tout sacrifier.",
  reviewHtml: "",
  stars: 0,
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
  title: "Vagabond",
  category: "manga",
  tags: "Samouraï · Historique · Philosophie · Duel",
  cover: "https://manga-insight-pro.vercel.app/vagabond.png",
  synopsis: "Libre adaptation de la vie de Musashi Miyamoto. De combats en errance, le jeune bretteur apprend la voie du sabre et de l’humilité. Chaque duel interroge le sens de la force.",
  reviewHtml: "",
  stars: 0,
  shops: [
    { name: "Fnac",   url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=vagabond+tome", logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=vagabond+tome",       logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [],
  live: []
},
{
  slug: "vinland-saga",
  title: "Vinland Saga",
  category: "manga",
  tags: "Historique · Vikings · Épopée · Drame",
  cover: "https://manga-insight-pro.vercel.app/vinland-saga.jpg",
  synopsis: "Thorfinn, jeune guerrier islandais, poursuit une vengeance qui le consume. Des champs de bataille à la quête d’un nouveau monde, il redéfinit sa voie. La violence héritée se heurte au désir de paix.",
  reviewHtml: "",
  stars: 0,
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
  title: "Wind Breaker",
  category: "manhwa",
  tags: "Action · Combat · Lycée · Délinquants · Shōnen",
  cover: "https://manga-insight-pro.vercel.app/wind-breaker.jpg",
  synopsis: "Haruka Sakura est un lycéen qui arrive au lycée Fûrin, connu pour son taux de délinquance élevé. Son objectif : affronter les meilleurs bagarreurs et devenir le meilleur d'entre eux. Mais cela ne va pas être aussi simple qu'il ne le pensait.",
  reviewHtml: "",
  stars: 0,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=wind+breaker+manhwa", logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [],
  live: []
},
{
  slug: "demon-slayer-kimetsu-no-yaiba",
  title: "Demon Slayer: Kimetsu no Yaiba",
  category: "manga",
  tags: "Shōnen · Démons · Sabre · Fratrie",
  cover: "https://manga-insight-pro.vercel.app/demon-slayer.png",
  synopsis: "Après le massacre de sa famille et la transformation de sa sœur Nezuko en démon, Tanjiro rejoint le Corps des Pourfendeurs pour la protéger et traquer les responsables.",
  reviewHtml: "",
  stars: 0,
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
  title: "SPY×FAMILY",
  category: "manga",
  tags: "Comédie · Espionnage · Famille",
  cover: "https://manga-insight-pro.vercel.app/spy-x-family.jpg",
  synopsis: "Pour approcher un politicien, l’espion « Twilight » forme une famille de façade : Anya, fillette télépathe, et Yor, tueuse à gages. Personne ne connaît le secret des autres.",
  reviewHtml: "",
  stars: 0,
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
  slug: "overlord",
  title: "Overlord",
  category: "manga",
  tags: "Isekai · Jeu vidéo · Nécromancie · Fantasy",
  cover: "https://manga-insight-pro.vercel.app/overlord.jpg",
  synopsis: "Coincé dans son MMORPG favori quand les serveurs s’arrêtent, Momonga devient Ainz Ooal Gown, seigneur mort-vivant, et tente de comprendre — voire dominer — ce monde.",
  reviewHtml: "",
  stars: 0,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Overlord%20manga", logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=overlord%20manga%20tome", logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=overlord+manga+tome", logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/series/G69PZ5PDY/overlord", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" }
  ],
  live: []
},
{
  slug: "arifureta",
  title: "Arifureta: De zéro à héros",
  category: "manga",
  tags: "Isekai · Donjon · Vengeance · Survie",
  cover: "https://manga-insight-pro.vercel.app/arifureta.jpg",
  synopsis: "Trahi lors d’un raid, Hajime chute au fond d’un donjon. Pour survivre, il se radicalise, fabrique ses armes et remonte, décidé à renverser son destin.",
  reviewHtml: "",
  stars: 0,
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
  title: "Re:Zero",
  category: "manga",
  tags: "Isekai · Boucle temporelle · Drame · Fantasy",
  cover: "https://manga-insight-pro.vercel.app/re-zero.jpg",
  synopsis: "Subaru est transporté dans un autre monde et découvre qu’à chaque mort, il revient à un point de sauvegarde. Il tente d’enrayer les tragédies qui l’entourent.",
  reviewHtml: "",
  stars: 0,
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
  slug: "akame-ga-kill",
  title: "Akame ga Kill!",
  category: "manga",
  tags: "Action · Assassins · Rébellion · Drame",
  cover: "https://manga-insight-pro.vercel.app/akame-ga-kill.jpg",
  synopsis: "Tatsumi rejoint Night Raid, un groupe d’assassins qui lutte contre un empire gangrené par la corruption. Chaque victoire se paie au prix fort.",
  reviewHtml: "",
  stars: 0,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Akame%20ga%20Kill", logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594" },
    { name: "Fnac",     url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=akame%20ga%20kill%20tome", logo: "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png" },
    { name: "Amazon",   url: "https://www.amazon.fr/s?k=akame+ga+kill+tome", logo: "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/series/GY2P14QEY/akame-ga-kill", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" }
  ],
  live: []
},
{
  slug: "tokyo-ghoul",
  title: "Tokyo Ghoul",
  category: "manga",
  tags: "Dark Fantasy · Ghouls · Identité · Drame",
  cover: "https://manga-insight-pro.vercel.app/tokyo-ghoul.jpg",
  synopsis: "Blessé par une goule, Ken Kaneki devient un hybride et doit survivre entre deux mondes en luttant pour conserver son humanité.",
  reviewHtml: "",
  stars: 0,
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
  title: "Black God (Kurokami)",
  category: "manga",
  tags: "Action · Surnaturel · Pacte · Rivalités",
  cover: "https://manga-insight-pro.vercel.app/kurokami.jpg",
  synopsis: "Après une rencontre avec Kuro, Keita se retrouve lié à une mototsumitama et impliqué dans des conflits mystiques qui dépassent son quotidien.",
  reviewHtml: "",
  stars: 0,
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
  title: "SSS-Class Suicide Hunter",
  category: "manhwa",
  tags: "Répétition · Donjons · Vengeance",
  cover: "https://manga-insight-pro.vercel.app/sss-suicide-hunter.jpg",
  synopsis: "La capacité unique de Kim Gong-ja le rend plus fort à chaque mort. Il accumule talents et stratégies dans un monde où les épreuves ne pardonnent pas.",
  reviewHtml: "",
  stars: 0,
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
  title: "My Wife Is a Demon Queen",
  category: "manhwa",
  tags: "Isekai · Couple · Fantasy",
  cover: "https://manga-insight-pro.vercel.app/my-wife-demon-queen.jpg",
  synopsis: "Un humain invoqué devient l’époux d’une reine démoniaque déchue. Ensemble, ils tentent de reconquérir un trône et un avenir.",
  reviewHtml: "",
  stars: 0,
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
  title: "The Rising of the Shield Hero",
  category: "manga",
  tags: "Isekai · Héros · Trahison · Fantasy",
  cover: "https://manga-insight-pro.vercel.app/shield-hero.jpg",
  synopsis: "Naofumi est invoqué dans un autre monde parmi les quatre héros légendaires. Prenant le bouclier, le plus faible des armes, il est trahi, calomnié, et doit prouver sa valeur seul.",
  reviewHtml: "",
  stars: 0,
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
  title: "Sword Art Online",
  category: "manga",
  tags: "Isekai · Jeu vidéo · Romance · Action",
  cover: "https://manga-insight-pro.vercel.app/sword-art-online.jpg",
  synopsis: "Kirito et d’autres joueurs sont piégés dans un jeu virtuel mortel : mourir dans le jeu signifie mourir dans la réalité. Kirito lutte pour sauver tout le monde.",
  reviewHtml: "",
  stars: 0,
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
  title: "Goblin Slayer",
  category: "manga",
  tags: "Dark Fantasy · Aventure · Violence",
  cover: "https://manga-insight-pro.vercel.app/goblin-slayer.jpg",
  synopsis: "Dans un monde où les gobelins terrorisent les villageois, une prêtresse rejoint un guerrier mystérieux : Goblin Slayer, obsédé par leur extermination.",
  reviewHtml: "",
  stars: 0,
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
  title: "Grimgar, le Monde des Cendres et de Fantaisie",
  category: "manga",
  tags: "Fantasy · Monde parallèle · Aventure",
  cover: "https://manga-insight-pro.vercel.app/grimgar.jpg",
  synopsis: "Des individus se réveillent dans un monde inconnu sans souvenir, forcés de s’adapter, lutter et trouver leur place au sein d’une communauté d’aventuriers.",
  reviewHtml: "",
  stars: 0,
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
  title: "No Game No Life",
  category: "manga",
  tags: "Isekai · Jeux · Fantaisie",
  cover: "https://manga-insight-pro.vercel.app/no-game-no-life.jpg",
  synopsis: "Sora et Shiro, fratrie géniale des jeux, sont invoqués dans Disboard, un monde où tout est déterminé par les jeux. Ils visent à défier les dieux du nouveau monde.",
  reviewHtml: "",
  stars: 0,
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
  title: "Record of Ragnarok",
  category: "manga",
  tags: "Mythologie · Combat · Tournoi",
  cover: "https://manga-insight-pro.vercel.app/record-of-ragnarok.jpg",
  synopsis: "Tous les 1000 ans, les dieux décident du sort de l’humanité. 13 duels sont organisés entre dieux et humains pour décider si l’humanité peut survivre.",
  reviewHtml: "",
  stars: 0,
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
  title: "Chainsaw Man",
  category: "manga",
  tags: "Shōnen · Démons · Horreur · Action",
  cover: "https://manga-insight-pro.vercel.app/chainsaw-man.png",
  synopsis: "Denji fusionne avec Pochita et devient Chainsaw Man pour combattre les démons tout en essayant de mener une vie “normale”.",
  reviewHtml: "",
  stars: 0,
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
  title: "Parasyte",
  category: "manga",
  tags: "Horreur · Psychologie · Aliens",
  cover: "https://manga-insight-pro.vercel.app/parasyte.png",
  synopsis: "Un parasite extraterrestre occupe la main droite de Shinichi. Ensemble, ils se battent contre d’autres parasites qui menacent l’humanité.",
  reviewHtml: "",
  stars: 0,
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
  title: "The God of High School",
  category: "manga",
  tags: "Arts martiaux · Tournoi · Action · Fantasy",
  cover: "https://manga-insight-pro.vercel.app/the-god-of-high-school.png",
  synopsis: "Jin Mori participe à un tournoi lycéen mêlant arts martiaux et forces mystiques, face à des adversaires aux pouvoirs surnaturels. Les enjeux sont divins.",
  reviewHtml: "",
  stars: 0,
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
  slug: "akame-ga-kill",
  title: "Akame ga Kill!",
  category: "manga",
  tags: "Action · Rébellion · Assassins · Dark Fantasy",
  cover: "https://manga-insight-pro.vercel.app/akame-ga-kill.jpg",
  synopsis: "Tatsumi rejoint Night Raid, un groupe d’assassins luttant contre un Empire corrompu. Entre missions meurtrières et sacrifices, il découvre la face sombre de la révolution.",
  reviewHtml: "",
  stars: 0,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Akame+ga+Kill", logo: "" },
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=akame+ga+kill+tome", logo: "" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=akame+ga+kill+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/series/G69V7G5KY/akame-ga-kill", logo: "" }
  ],
  live: []
},
{
  slug: "akatsuki-no-yona",
  title: "Yona, Princesse de l’Aube",
  category: "manga",
  tags: "Aventure · Romance · Fantasy · Voyage",
  cover: "https://manga-insight-pro.vercel.app/yona.jpg",
  synopsis: "Princesse Yona voit son royaume basculer dans le chaos. Trahie, elle s’exile et part en quête des quatre dragons légendaires pour reconquérir son trône.",
  reviewHtml: "",
  stars: 0,
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
  title: "Btooom!",
  category: "manga",
  tags: "Survie · Battle royale · Jeu vidéo",
  cover: "https://manga-insight-pro.vercel.app/btooom.jpg",
  synopsis: "Ryōta Sakamoto, joueur expert de Btooom!, se réveille sur une île transformée en champ de bataille où chacun doit tuer pour survivre à coups de bombes.",
  reviewHtml: "",
  stars: 0,
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
  title: "Cage of Eden",
  category: "manga",
  tags: "Survie · Île mystérieuse · Aventure",
  cover: "https://manga-insight-pro.vercel.app/cage-of-eden.jpg",
  synopsis: "Des lycéens échouent sur une île peuplée de créatures préhistoriques. Pour survivre, ils doivent s’unir et percer le mystère du lieu.",
  reviewHtml: "",
  stars: 0,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=cage+of+eden+manga", logo: "" }
  ],
  streaming: []
},
{
  slug: "deadman-wonderland",
  title: "Deadman Wonderland",
  category: "manga",
  tags: "Prison · Pouvoirs · Survival Game",
  cover: "https://manga-insight-pro.vercel.app/deadman-wonderland.jpg",
  synopsis: "Accusé à tort du massacre de sa classe, Ganta est envoyé dans une prison-parc d’attractions où les détenus s’affrontent à mort. Il y découvre un mystérieux pouvoir du sang.",
  reviewHtml: "",
  stars: 0,
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
  title: "Edens Zero",
  category: "manga",
  tags: "Sci-fi · Aventure · Espace",
  cover: "https://manga-insight-pro.vercel.app/edens-zero.jpg",
  synopsis: "Shiki, élevé par des robots sur l’île Granbell, rejoint Rebecca et Happy pour explorer l’espace à la recherche de la déesse Mère et découvrir l’amitié.",
  reviewHtml: "",
  stars: 0,
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
  title: "Fate/Stay Night",
  category: "manga",
  tags: "Magie · Combat · Guerre du Graal",
  cover: "https://manga-insight-pro.vercel.app/fate-stay-night.png",
  synopsis: "Shirō Emiya est entraîné dans la Guerre du Saint Graal, un tournoi où mages et esprits héroïques s’affrontent pour un souhait ultime.",
  reviewHtml: "",
  stars: 0,
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
  title: "Goblin Nightmare",
  category: "manga",
  tags: "Dark Fantasy · Gobelins · Vengeance",
  cover: "https://manga-insight-pro.vercel.app/goblin-nightmare.jpg",
  synopsis: "Dans un univers ravagé par les gobelins, un guerrier maudit poursuit une vendetta sans fin. Chaque village libéré est une étape vers sa propre damnation.",
  reviewHtml: "",
  stars: 0,
  shops: [
    { name: "Amazon", url: "#", logo: "" }
  ],
  streaming: []
},
{
  slug: "highschool-dxd",
  title: "High School DxD",
  category: "manga",
  tags: "Écchi · Démon · Lycée · Action",
  cover: "https://manga-insight-pro.vercel.app/highschool-dxd.jpg",
  synopsis: "Issei Hyoudou est tué par une fille lors de son premier rendez-vous puis ressuscité en démon par Rias Gremory. Il entre alors dans un monde de démons et d’anges déchus.",
  reviewHtml: "",
  stars: 0,
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
  title: "Isekai Cheat Magician",
  category: "manga",
  tags: "Isekai · Magie · Duo",
  cover: "https://manga-insight-pro.vercel.app/isekai-cheat-magician.png",
  synopsis: "Taichi et Rin sont transportés dans un autre monde et découvrent des pouvoirs magiques extraordinaires. Ils doivent apprendre à les maîtriser et à survivre aux complots.",
  reviewHtml: "",
  stars: 0,
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
  title: "Kaiju No. 8",
  category: "manga",
  tags: "Monstres · Armée · Transformation · Action",
  cover: "https://manga-insight-pro.vercel.app/kaiju-no-8.jpg",
  synopsis: "Kafka Hibino, employé du nettoyage des Kaijus, rêve d’intégrer les Forces de Défense. Après un incident, il obtient le pouvoir de se transformer en monstre et décide de combattre pour protéger l’humanité.",
  reviewHtml: "",
  stars: 0,
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
  title: "Kengan Ashura",
  category: "manga",
  tags: "Combat · Tournoi · Entreprises",
  cover: "https://manga-insight-pro.vercel.app/kengan-ashura.jpg",
  synopsis: "Tokita Ohma participe à des combats clandestins où les entreprises engagent des combattants pour régler leurs différends. Chaque affrontement est un duel de styles et de stratégies.",
  reviewHtml: "",
  stars: 0,
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
  title: "Kenshin le Vagabond",
  category: "manga",
  tags: "Samouraï · Historique · Rédemption",
  cover: "https://manga-insight-pro.vercel.app/kenshin.jpg",
  synopsis: "Ancien assassin surnommé Battosai, Kenshin parcourt le Japon pour expier ses crimes. Il protège les innocents avec un sabre à lame inversée.",
  reviewHtml: "",
  stars: 0,
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
  title: "King’s Game",
  category: "manga",
  tags: "Survie · Jeu mortel · Lycée",
  cover: "https://manga-insight-pro.vercel.app/kings-game.jpg",
  synopsis: "Une classe reçoit des ordres d’un mystérieux ‘Roi’. Chaque ordre doit être exécuté sous peine de mort. Nobuaki tente de briser la malédiction du jeu.",
  reviewHtml: "",
  stars: 0,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=king%27s+game+manga", logo: "" }
  ],
  streaming: []
},
{
  slug: "kuroshitsuji",
  title: "Black Butler (Kuroshitsuji)",
  category: "manga",
  tags: "Gothique · Mystère · Démon",
  cover: "https://manga-insight-pro.vercel.app/kuroshitsuji.jpg",
  synopsis: "Ciel Phantomhive, jeune comte anglais, a scellé un pacte avec Sebastian, son majordome démoniaque. Ensemble, ils résolvent les affaires sombres du Londres victorien.",
  reviewHtml: "",
  stars: 0,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Black+Butler", logo: "" },
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=black+butler+tome", logo: "" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=black+butler+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/fr/series/GRDV5EN6Y/black-butler", logo: "" }
  ],
  live: []
},
{
  slug: "magister-negi-magi",
  title: "Negima! Magister Negi Magi",
  category: "manga",
  tags: "Magie · Comédie · École",
  cover: "https://manga-insight-pro.vercel.app/negima.jpg",
  synopsis: "Negi Springfield, magicien de 10 ans, devient professeur d’une classe de 31 filles dans un collège japonais tout en poursuivant ses études de magie et ses missions secrètes.",
  reviewHtml: "",
  stars: 0,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=negima+manga", logo: "" }
  ],
  streaming: []
},
{
  slug: "magi",
  title: "Magi: The Labyrinth of Magic",
  category: "manga",
  tags: "Aventure · Magie · Mille et une nuits",
  cover: "https://manga-insight-pro.vercel.app/magi.jpg",
  synopsis: "Aladdin et Alibaba explorent des donjons mystérieux remplis de trésors et de djinns. Leurs choix influenceront l’équilibre du monde.",
  reviewHtml: "",
  stars: 0,
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
  title: "Monster Musume",
  category: "manga",
  tags: "Comédie · Romance · Monstres",
  cover: "https://manga-insight-pro.vercel.app/monster-musume.jpg",
  synopsis: "Dans un Japon où humains et créatures mythiques cohabitent, Kimihito se retrouve malgré lui à héberger plusieurs demi-humaines aux caractères bien trempés.",
  reviewHtml: "",
  stars: 0,
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
  title: "Overlord",
  category: "manga",
  tags: "Isekai · Guilde · Non-mort",
  cover: "https://manga-insight-pro.vercel.app/overlord.png",
  synopsis: "Momonga reste connecté dans le jeu Yggdrasil lors de sa fermeture et se retrouve coincé dans son avatar de seigneur mort-vivant. Il décide d’explorer et de dominer ce nouveau monde.",
  reviewHtml: "",
  stars: 0,
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
  title: "Psycho-Pass",
  category: "manga",
  tags: "Futur · Thriller · Cyberpunk",
  cover: "https://manga-insight-pro.vercel.app/psycho-pass.jpg",
  synopsis: "Dans un futur où la criminalité est prédite par le système Sibyl, Akane Tsunemori rejoint la police et découvre les failles de ce système de justice préventive.",
  reviewHtml: "",
  stars: 0,
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
  title: "Radiant",
  category: "manga",
  tags: "Magie · Aventure · Sorciers",
  cover: "https://manga-insight-pro.vercel.app/radiant.jpg",
  synopsis: "Seth, un jeune sorcier contaminé par les Némésis, cherche à détruire leur nid d’origine, Radiant, tout en affrontant l’Inquisition et les préjugés.",
  reviewHtml: "",
  stars: 0,
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
  slug: "re-zero",
  title: "Re:Zero − Starting Life in Another World",
  category: "manga",
  tags: "Isekai · Boucle temporelle · Drame",
  cover: "https://manga-insight-pro.vercel.app/re-zero.jpg",
  synopsis: "Subaru est transporté dans un autre monde et découvre qu’il revient à un point précis chaque fois qu’il meurt. Il doit utiliser cette malédiction pour sauver ceux qu’il aime.",
  reviewHtml: "",
  stars: 0,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=re+zero+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Re%3AZero", logo: "" }
  ],
  live: []
},
{
  slug: "rosario-vampire",
  title: "Rosario + Vampire",
  category: "manga",
  tags: "Comédie · Harem · Monstres · Lycée",
  cover: "https://manga-insight-pro.vercel.app/rosario-vampire.jpg",
  synopsis: "Tsukune intègre par erreur un lycée pour monstres. Il rencontre Moka, une vampire, et tente de cacher son identité d’humain tout en survivant aux élèves surnaturels.",
  reviewHtml: "",
  stars: 0,
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
  title: "The Seven Deadly Sins",
  category: "manga",
  tags: "Fantasy · Chevaliers · Péchés capitaux",
  cover: "https://manga-insight-pro.vercel.app/seven-deadly-sins.jpg",
  synopsis: "La princesse Elizabeth recherche les Seven Deadly Sins, chevaliers accusés de trahison, pour sauver son royaume. Meliodas, leur chef, cache un passé redoutable.",
  reviewHtml: "",
  stars: 0,
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
  slug: "shield-hero",
  title: "The Rising of the Shield Hero",
  category: "manga",
  tags: "Isekai · Bouclier · Réhabilitation",
  cover: "https://manga-insight-pro.vercel.app/shield-hero.jpg",
  synopsis: "Naofumi, invoqué comme Héros du Bouclier, est trahi et rejeté. Il doit se reconstruire et protéger le royaume avec l’aide de Raphtalia.",
  reviewHtml: "",
  stars: 0,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=the+rising+of+the+shield+hero+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Shield%20Hero", logo: "" }
  ],
  live: []
},
{
  slug: "shaman-king",
  title: "Shaman King",
  category: "manga",
  tags: "Esprits · Tournoi · Héritage",
  cover: "https://manga-insight-pro.vercel.app/shaman-king.jpg",
  synopsis: "Yoh Asakura, shaman capable de communiquer avec les esprits, participe au Shaman Fight pour devenir le Shaman King et unir le monde des vivants et des morts.",
  reviewHtml: "",
  stars: 0,
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
  title: "SK8 the Infinity",
  category: "manga",
  tags: "Skateboard · Compétition · Amitié",
  cover: "https://manga-insight-pro.vercel.app/sk8-the-infinity.jpg",
  synopsis: "Reki et Langa participent à des courses de skateboard clandestines appelées ‘S’. Vitesse, style et rivalités s’enchaînent sur les rampes.",
  reviewHtml: "",
  stars: 0,
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
  title: "So I’m a Spider, So What?",
  category: "manga",
  tags: "Isekai · Monstre · Survie",
  cover: "https://manga-insight-pro.vercel.app/so-im-a-spider.jpg",
  synopsis: "Une lycéenne se réincarne en araignée dans un donjon. Elle doit survivre, évoluer et comprendre les mystères de ce nouveau monde.",
  reviewHtml: "",
  stars: 0,
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
  title: "Steins;Gate",
  category: "manga",
  tags: "Voyage temporel · Science · Thriller",
  cover: "https://manga-insight-pro.vercel.app/steins-gate.jpg",
  synopsis: "Un groupe d’amis découvre comment envoyer des messages dans le passé. Chaque modification change le présent et entraîne des conséquences dramatiques.",
  reviewHtml: "",
  stars: 0,
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
  title: "Trigun",
  category: "manga",
  tags: "Western · Sci-fi · Chasseur de primes",
  cover: "https://manga-insight-pro.vercel.app/trigun.jpg",
  synopsis: "Vash the Stampede est un tireur d’élite au grand cœur recherché pour une prime énorme. Sur une planète désertique, il tente d’éviter les bains de sang.",
  reviewHtml: "",
  stars: 0,
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
  title: "Trinity Seven",
  category: "manga",
  tags: "Magie · Harem · Académie",
  cover: "https://manga-insight-pro.vercel.app/trinity-seven.jpg",
  synopsis: "Arata Kasuga voit son village détruit par un phénomène magique. Pour sauver sa cousine, il intègre l’académie royale et rencontre les ‘Trinity Seven’, sept puissantes magiciennes.",
  reviewHtml: "",
  stars: 0,
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
  title: "Akame ga Kill!",
  category: "manga",
  tags: "Action · Rébellion · Assassins",
  cover: "https://manga-insight-pro.vercel.app/akame-ga-kill.jpg",
  synopsis: "Tatsumi rejoint Night Raid, un groupe d’assassins luttant contre un empire corrompu. Chaque combat se paie cher et l’espoir d’un monde meilleur coûte des vies.",
  reviewHtml: "",
  stars: 0,
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
  title: "Angel Beats!",
  category: "manga",
  tags: "Au-delà · Lycée · Drame",
  cover: "https://manga-insight-pro.vercel.app/angel-beats.jpg",
  synopsis: "Dans un lycée de l’au-delà, Otonashi rejoint un groupe rebelle dirigé par Yuri pour défier une mystérieuse ‘Ange’. Entre humour et drame, chaque élève doit affronter son passé.",
  reviewHtml: "",
  stars: 0,
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
  title: "Bastard!!",
  category: "manga",
  tags: "Dark Fantasy · Heavy Metal · Magie",
  cover: "https://manga-insight-pro.vercel.app/bastard.jpg",
  synopsis: "Dans un monde médiéval où règnent magie et métal, Dark Schneider, puissant sorcier, est libéré pour sauver un royaume mais son caractère tyrannique menace tout.",
  reviewHtml: "",
  stars: 0,
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
  title: "Beelzebub",
  category: "manga",
  tags: "Comédie · Démon · Lycée",
  cover: "https://manga-insight-pro.vercel.app/beelzebub.jpg",
  synopsis: "Oga Tatsumi, délinquant, devient le ‘père’ du bébé Beelzebub, héritier du roi des démons. Il doit l’élever tout en gérant son quotidien de bagarres lycéennes.",
  reviewHtml: "",
  stars: 0,
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
  title: "Black Bullet",
  category: "manga",
  tags: "Post-apo · Armes vivantes · Action",
  cover: "https://manga-insight-pro.vercel.app/black-bullet.jpg",
  synopsis: "Dans un futur envahi par des créatures appelées Gastrea, les ‘Enfants maudits’ aux pouvoirs spéciaux combattent aux côtés de leurs protecteurs pour sauver l’humanité.",
  reviewHtml: "",
  stars: 0,
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
  title: "Black Lagoon",
  category: "manga",
  tags: "Action · Mafia · Pirates modernes",
  cover: "https://manga-insight-pro.vercel.app/black-lagoon.jpg",
  synopsis: "Rokurou, employé japonais, est kidnappé par des mercenaires. Il rejoint leur équipage dans un monde de trafics et de fusillades en Asie du Sud-Est.",
  reviewHtml: "",
  stars: 0,
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
  title: "Blame!",
  category: "manga",
  tags: "Sci-fi · Cyberpunk · Exploration",
  cover: "https://manga-insight-pro.vercel.app/blame.jpg",
  synopsis: "Dans un futur lointain, Killy parcourt une gigantesque mégastructure à la recherche du gène d’accès au réseau. Silence, architecture titanesque et solitude l’accompagnent.",
  reviewHtml: "",
  stars: 0,
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
  title: "Blood Lad",
  category: "manga",
  tags: "Comédie · Vampire · Action",
  cover: "https://manga-insight-pro.vercel.app/blood-lad.jpg",
  synopsis: "Staz, vampire otaku, règne sur un quartier du monde des démons. Quand une humaine meurt dans son territoire, il promet de la ressusciter.",
  reviewHtml: "",
  stars: 0,
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
  title: "Bungou Stray Dogs",
  category: "manga",
  tags: "Pouvoirs · Enquête · Organisation",
  cover: "https://manga-insight-pro.vercel.app/bungou-stray-dogs.jpg",
  synopsis: "Atsushi, orphelin affamé, rencontre Dazai et Kunikida, membres d’une agence d’investigation composée d’individus aux dons surnaturels. Il y découvre complots et secrets.",
  reviewHtml: "",
  stars: 0,
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
  title: "Coppelion",
  category: "manga",
  tags: "Post-apo · Tokyo · Unités spéciales",
  cover: "https://manga-insight-pro.vercel.app/coppelion.jpg",
  synopsis: "2036 : Tokyo est contaminée après un accident nucléaire. Trois lycéennes génétiquement modifiées et immunisées sont envoyées secourir les survivants.",
  stars: 0,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=coppelion+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Coppelion", logo: "" }
  ],
  live: []
},
{
  slug: "deadman-wonderland",
  title: "Deadman Wonderland",
  category: "manga",
  tags: "Prison · Pouvoirs · Survival",
  cover: "https://manga-insight-pro.vercel.app/deadman-wonderland.jpg",
  synopsis: "Accusé à tort d’un massacre, Ganta est envoyé à Deadman Wonderland, prison-parc d’attraction où les détenus s’affrontent dans des jeux mortels.",
  stars: 0,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=deadman+wonderland+tome", logo: "" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=deadman+wonderland+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Deadman%20Wonderland", logo: "" }
  ],
  live: []
},
{
  slug: "devilman-crybaby",
  title: "Devilman Crybaby",
  category: "manga",
  tags: "Démons · Apocalypse · Tragédie",
  cover: "https://manga-insight-pro.vercel.app/devilman.jpg",
  synopsis: "Akira fusionne avec un démon pour combattre ses semblables et protéger l’humanité. Mais la frontière entre bien et mal s’efface rapidement.",
  stars: 0,
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
  title: "Dororo",
  category: "manga",
  tags: "Historique · Démon · Voyage",
  cover: "https://manga-insight-pro.vercel.app/dororo.jpg",
  synopsis: "Hyakkimaru, né sans membres ni organes, les récupère en exterminant les démons qui les détiennent, accompagné du jeune voleur Dororo.",
  stars: 0,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=dororo+manga", logo: "" }
  ],
  streaming: [
    { name: "Prime Video", url: "https://www.primevideo.com/search/ref=atv_nb_sr?phrase=Dororo", logo: "" }
  ],
  live: []
},
{
  slug: "eden-zero",
  title: "Edens Zero",
  category: "manga",
  tags: "Sci-fi · Aventure · Guildes",
  cover: "https://manga-insight-pro.vercel.app/edens-zero.jpg",
  synopsis: "Shiki, jeune garçon élevé par des robots, quitte sa planète pour explorer l’univers aux côtés de Rebecca et Happy, à la recherche de Mother.",
  stars: 0,
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
  slug: "en-en-no-shouboutai",
  title: "En’en no Shouboutai (Fire Force)",
  category: "manga",
  tags: "Pompiers · Surnaturel · Action",
  cover: "https://manga-insight-pro.vercel.app/fire-force.jpg",
  synopsis: "Des combustions humaines spontanées transforment les victimes en infernaux. Shinra, pompier aux pieds de feu, cherche la vérité sur son passé.",
  stars: 0,
  shops: [
    { name: "Manganim", url: "https://manganim.fr/search?q=Fire+Force", logo: "" },
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=fire+force+tome", logo: "" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=fire+force+tome", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Fire%20Force", logo: "" }
  ],
  live: []
},
{
  slug: "hajime-no-ippo",
  title: "Hajime no Ippo",
  category: "manga",
  tags: "Boxe · Sport · Shōnen",
  cover: "https://manga-insight-pro.vercel.app/hajime-no-ippo.jpg",
  synopsis: "Ippo, lycéen timide, découvre la boxe et s’entraîne dur pour devenir champion. Chaque match est une leçon de courage et de dépassement.",
  stars: 0,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=hajime+no+ippo+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Hajime%20no%20Ippo", logo: "" }
  ],
  live: []
},
{
  slug: "highschool-dxd",
  title: "Highschool DxD",
  category: "manga",
  tags: "Écchi · Démons · Lycée",
  cover: "https://manga-insight-pro.vercel.app/highschool-dxd.jpg",
  synopsis: "Issei, lycéen pervers, est tué par une fille lors de leur premier rendez-vous puis ressuscité comme démon au service de Rias Gremory.",
  stars: 0,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=highschool+dxd+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Highschool%20DxD", logo: "" }
  ],
  live: []
},
{
  slug: "katekyo-hitman-reborn",
  title: "Katekyo Hitman Reborn!",
  category: "manga",
  tags: "Mafia · Comédie · Action",
  cover: "https://manga-insight-pro.vercel.app/katekyo-hitman-reborn.jpg",
  synopsis: "Tsuna, collégien médiocre, apprend qu’il est héritier d’une famille mafieuse. Son tuteur, un bébé mafieux armé, le forme pour en devenir le boss.",
  stars: 0,
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
  title: "Zatch Bell!",
  category: "manga",
  tags: "Démons · Tournoi · Amitié",
  cover: "https://manga-insight-pro.vercel.app/zatch-bell.jpg",
  synopsis: "Kiyomaro reçoit un grimoire et rencontre Zatch, enfant démon venu gagner un tournoi pour devenir roi. Ensemble, ils affrontent d’autres duos mage/démon.",
  stars: 0,
  shops: [
    { name: "Amazon", url: "https://www.amazon.fr/s?k=zatch+bell+manga", logo: "" }
  ],
  streaming: [
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Zatch%20Bell", logo: "" }
  ],
  live: []
}
]
