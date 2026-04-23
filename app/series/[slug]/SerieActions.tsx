"use client";

import { useState } from "react";
import { useFavorites } from "@/lib/useFavorites";

const A = "#e03030";
const FH = "var(--font-barlow), 'Barlow Condensed', sans-serif";

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
    <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
      <button
        onClick={() => toggle(slug)}
        title={fav ? "Retirer des favoris" : "Ajouter aux favoris"}
        style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          padding: "8px 16px", borderRadius: 4,
          fontFamily: FH, fontSize: 12, fontWeight: 700,
          letterSpacing: "0.08em", textTransform: "uppercase",
          cursor: "pointer", transition: "all 0.15s",
          border: fav ? "1px solid rgba(236,72,153,0.35)" : "1px solid rgba(255,255,255,0.12)",
          background: fav ? "rgba(236,72,153,0.12)" : "rgba(255,255,255,0.06)",
          color: fav ? "rgb(249,168,212)" : "rgba(255,255,255,0.6)",
        }}
      >
        {fav ? "♥ Favori" : "♡ Favoris"}
      </button>

      <button
        onClick={handleShare}
        style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          padding: "8px 16px", borderRadius: 4,
          fontFamily: FH, fontSize: 12, fontWeight: 700,
          letterSpacing: "0.08em", textTransform: "uppercase",
          cursor: "pointer", transition: "all 0.15s",
          border: copied ? `1px solid rgba(34,197,94,0.35)` : "1px solid rgba(255,255,255,0.12)",
          background: copied ? "rgba(34,197,94,0.1)" : "rgba(255,255,255,0.06)",
          color: copied ? "rgb(134,239,172)" : "rgba(255,255,255,0.6)",
        }}
      >
        {copied ? "✓ Lien copié" : "Partager"}
      </button>
    </div>
  );
}
