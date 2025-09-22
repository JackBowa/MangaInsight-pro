export type ExternalScore = {
  source: "AniList" | "MAL" | "Other";
  value: number;        // ex: 8.6
  scale?: number;       // ex: 10 (par défaut 10)
  url?: string;         // lien vers la source
};

export type Series = {
  slug: string;
  title: string;
  category: "manga" | "manhwa" | "anime";
  tags?: string;
  cover?: string;
  synopsis?: string;

  // ★ Avis de la rédaction (facultatif)
  editorReview?: {
    rating?: number;     // 0..5 (ou 0..10 si tu préfères)
    html?: string | null; // HTML (peut être null/omise)
  } | null;

  // ★ Score(s) externe(s) (facultatif)
  externalScores?: ExternalScore[];

  // Boutiques / streaming / live (comme avant)
  shops?: { name: string; url: string; logo: string }[];
  streaming?: { name: string; url: string; logo: string }[];
  live?: { name: string; url: string; logo: string }[];
};