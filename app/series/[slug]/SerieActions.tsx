"use client";

import { useState } from "react";
import { useFavorites } from "@/lib/useFavorites";

export default function SerieActions({ slug, title }: { slug: string; title: string }) {
  const { isFav, toggle } = useFavorites();
  const [copied, setCopied] = useState(false);
  const fav = isFav(slug);

  function handleShare() {
    const url = `${window.location.origin}/series/${slug}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="flex gap-2 mt-3">
      <button
        onClick={() => toggle(slug)}
        title={fav ? "Retirer des favoris" : "Ajouter aux favoris"}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-bold transition-all hover:-translate-y-0.5 ${
          fav
            ? "bg-pink-500/15 border-pink-500/40 text-pink-300 hover:bg-pink-500/25"
            : "bg-white/6 border-white/12 text-white/60 hover:bg-white/10 hover:text-white"
        }`}
      >
        {fav ? "♥ Favori" : "♡ Favoris"}
      </button>

      <button
        onClick={handleShare}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/6 border border-white/12 text-white/60 text-sm font-bold hover:bg-white/10 hover:text-white transition-all hover:-translate-y-0.5"
      >
        {copied ? "✓ Lien copié !" : "Partager"}
      </button>
    </div>
  );
}
