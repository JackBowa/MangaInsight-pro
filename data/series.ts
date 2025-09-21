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
}
]
