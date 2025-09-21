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
      "https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
    synopsis:
      "Il fut un temps où Gold Roger était le plus grand de tous les pirates, le "Roi des Pirates" était son surnom. A sa mort, son trésor d'une valeur inestimable connu sous le nom de "One Piece" fut caché quelque part sur "Grand Line". De nombreux pirates sont partis à la recherche de ce trésor mais tous sont morts avant même de l'atteindre. Monkey D. Luffy rêve de retrouver ce trésor légendaire et de devenir le nouveau "Roi des Pirates". Après avoir mangé un fruit du démon, il possède un pouvoir lui permettant de réaliser son rêve. Il lui faut maintenant trouver un équipage pour partir à l'aventure !",
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
    tags: "Shōnen · Ninja",
    cover: "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
    synopsis:
      "Naruto rêve de devenir Hokage et porte en lui le démon renard à neuf queues.",
    reviewHtml: "<p>Ton texte d’avis ici…</p>",
    stars: 4,
    shops: [],
    streaming: [],
    live: [],
  },

  // Exemple manhwa
  {
    slug: "solo-leveling",
    title: "Solo Leveling",
    category: "manhwa",
    tags: "Action · Fantasy",
    cover: "https://m.media-amazon.com/images/I/81Y8KpYtQhL.jpg",
    synopsis: "Sung Jin-Woo passe de chasseur faible à surpuissant via un système mystérieux.",
    reviewHtml: "<p>Ton texte d’avis ici…</p>",
    stars: 4,
    shops: [],
    streaming: [],
    live: [],
  },
];
