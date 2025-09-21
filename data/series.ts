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
      "Luffy se lance sur les mers pour trouver le One Piece et devenir le Roi des Pirates.",
    reviewHtml: `
      <p>One Piece est un véritable trésor pour moi, une aventure épique qui m'a accompagné pendant des années. 
      Suivre Monkey D. Luffy et son équipage, c’est plonger dans un univers vaste, varié et d’une imagination folle.</p>
      <p>Le style de Oda est reconnaissable et dynamique. Même en noir et blanc, chaque combat a de l'énergie.</p>
      <p>Les personnages ont tous une histoire forte. Les thèmes d’amitié et de liberté donnent une vraie émotion.</p>
      <p>Sa longueur peut faire peur, mais c’est une force: l’intrigue se développe naturellement et les arcs sont mémorables.</p>
      <p>En bref: si tu veux une saga d’aventure marquante, fonce.</p>
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
