"use client";

import { useEffect, useState } from "react";

const A = "#e03030";
const FH = "var(--font-barlow), 'Barlow Condensed', sans-serif";
const KEY = "cookie-consent-v1";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(KEY, "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 9999,
      background: "#111116", borderTop: "1px solid rgba(255,255,255,0.08)",
      padding: "16px clamp(16px,4vw,48px)",
      display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap",
    }}>
      <p style={{
        flex: 1, minWidth: 240,
        fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.6,
        fontFamily: "var(--font-figtree), 'Figtree', sans-serif",
      }}>
        Ce site utilise des cookies fonctionnels pour gérer ta session de connexion.
        Aucun cookie publicitaire ni tracking n&apos;est utilisé.{" "}
        <a href="/politique-de-confidentialite" style={{ color: A, textDecoration: "none" }}>
          En savoir plus
        </a>
      </p>
      <button
        onClick={accept}
        style={{
          padding: "9px 22px", borderRadius: 4, border: "none",
          background: A, color: "#fff",
          fontFamily: FH, fontSize: 12, fontWeight: 700,
          letterSpacing: "0.1em", textTransform: "uppercase",
          cursor: "pointer", flexShrink: 0,
        }}
      >
        J&apos;accepte
      </button>
    </div>
  );
}
