"use client";

import { useState, useEffect } from "react";

const A = "#e03030";
const FH = "var(--font-barlow), 'Barlow Condensed', sans-serif";

type Shop = { name: string; url: string; logo: string };

interface SerieDetailTabsProps {
  slug: string;
  synopsis?: string;
  editorHtml?: string | null;
  pros: string[];
  cons: string[];
  shops: Shop[];
  streaming: Shop[];
}

const TABS = [
  { id: "synopsis", label: "Synopsis" },
  { id: "critique", label: "Critique rédaction" },
  { id: "proscons", label: "Points forts & faibles" },
  { id: "acheter", label: "Où acheter" },
];

export default function SerieDetailTabs({
  slug,
  synopsis,
  editorHtml,
  pros,
  cons,
  shops,
  streaming,
}: SerieDetailTabsProps) {
  const [tab, setTab] = useState("synopsis");
  const [rating, setRating] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`reader-rating-${slug}`);
      if (saved) setRating(parseInt(saved, 10));
    } catch {}
  }, [slug]);

  function handleRate(n: number) {
    try {
      localStorage.setItem(`reader-rating-${slug}`, String(n));
    } catch {}
    setRating(n);
  }

  return (
    <>
      {/* Tab bar */}
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          marginBottom: 28,
          overflowX: "auto",
        }}
        className="no-scrollbar"
      >
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              fontFamily: FH,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "12px 18px",
              background: "none",
              border: "none",
              borderBottom: tab === t.id ? `2px solid ${A}` : "2px solid transparent",
              color: tab === t.id ? "#fff" : "rgba(255,255,255,0.35)",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "color 0.15s",
              marginBottom: -1,
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Synopsis */}
      {tab === "synopsis" &&
        (synopsis ? (
          <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.85 }}>
            {synopsis}
          </p>
        ) : (
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 14 }}>
            Pas de synopsis disponible.
          </p>
        ))}

      {/* Critique rédaction */}
      {tab === "critique" && (
        <div>
          {editorHtml ? (
            <div
              style={{ borderLeft: `3px solid ${A}`, paddingLeft: 24, marginBottom: 32 }}
            >
              <div className="review-content" dangerouslySetInnerHTML={{ __html: editorHtml }} />
            </div>
          ) : (
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 14, marginBottom: 32 }}>
              Pas de critique disponible pour cette série.
            </p>
          )}

          {/* Note lecteur — 10 blocs cliquables */}
          <div
            style={{
              padding: 24,
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 4,
            }}
          >
            <p
              style={{
                fontFamily: FH,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                marginBottom: 14,
              }}
            >
              Votre note lecteur
            </p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => {
                const isActive = rating !== null && n <= rating;
                const isHov = hovered !== null && n <= hovered;
                return (
                  <button
                    key={n}
                    type="button"
                    onClick={() => handleRate(n)}
                    onMouseEnter={() => setHovered(n)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      width: 38,
                      height: 38,
                      border: "none",
                      borderRadius: 4,
                      background: isHov || isActive ? A : "rgba(255,255,255,0.07)",
                      color: isHov || isActive ? "#fff" : "rgba(255,255,255,0.4)",
                      fontFamily: FH,
                      fontSize: 14,
                      fontWeight: 700,
                      cursor: "pointer",
                      transition: "all 0.1s",
                    }}
                  >
                    {n}
                  </button>
                );
              })}
            </div>
            {rating !== null && (
              <p
                style={{
                  marginTop: 10,
                  fontSize: 13,
                  color: A,
                  fontFamily: FH,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                }}
              >
                Votre note : {rating}/10 ✓
              </p>
            )}
          </div>
        </div>
      )}

      {/* Points forts & faibles */}
      {tab === "proscons" && (
        <>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
            className="proscons-grid-chrome"
          >
            <div
              style={{
                padding: 20,
                background: "rgba(34,197,94,0.06)",
                border: "1px solid rgba(34,197,94,0.2)",
                borderRadius: 4,
              }}
            >
              <p
                style={{
                  fontFamily: FH,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(34,197,94,0.9)",
                  marginBottom: 14,
                }}
              >
                ✓ Points forts
              </p>
              {pros.length > 0 ? (
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {pros.map((p, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        fontSize: 13,
                        color: "rgba(255,255,255,0.7)",
                        lineHeight: 1.6,
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "rgb(34,197,94)",
                          flexShrink: 0,
                          marginTop: 6,
                        }}
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 13 }}>Aucun point fort renseigné.</p>
              )}
            </div>

            <div
              style={{
                padding: 20,
                background: "rgba(224,48,48,0.06)",
                border: "1px solid rgba(224,48,48,0.2)",
                borderRadius: 4,
              }}
            >
              <p
                style={{
                  fontFamily: FH,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(224,100,100,0.9)",
                  marginBottom: 14,
                }}
              >
                ✗ Points faibles
              </p>
              {cons.length > 0 ? (
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {cons.map((c, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        fontSize: 13,
                        color: "rgba(255,255,255,0.7)",
                        lineHeight: 1.6,
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: A,
                          flexShrink: 0,
                          marginTop: 6,
                        }}
                      />
                      {c}
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 13 }}>Aucun point faible renseigné.</p>
              )}
            </div>
          </div>
          <style>{`@media (max-width: 580px) { .proscons-grid-chrome { grid-template-columns: 1fr !important; } }`}</style>
        </>
      )}

      {/* Où acheter */}
      {tab === "acheter" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {shops.length > 0 && (
            <div>
              <p
                style={{
                  fontFamily: FH,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                  marginBottom: 12,
                }}
              >
                📚 Acheter le manga
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {shops.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="shop-link-chrome"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "12px 16px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 4,
                      color: "rgba(255,255,255,0.75)",
                      textDecoration: "none",
                      fontSize: 14,
                      fontWeight: 600,
                      transition: "all 0.15s",
                    }}
                  >
                    {s.logo && (
                      <img
                        src={s.logo}
                        alt={s.name}
                        style={{ width: 24, height: 24, objectFit: "contain", borderRadius: 4 }}
                      />
                    )}
                    {s.name}
                    <svg
                      style={{ width: 12, height: 12, marginLeft: "auto", opacity: 0.3 }}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          )}

          {streaming.length > 0 && (
            <div>
              <p
                style={{
                  fontFamily: FH,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                  marginBottom: 12,
                }}
              >
                📺 Voir l'animé
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {streaming.map((p, i) => (
                  <a
                    key={i}
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="shop-link-chrome"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "12px 16px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 4,
                      color: "rgba(255,255,255,0.75)",
                      textDecoration: "none",
                      fontSize: 14,
                      fontWeight: 600,
                      transition: "all 0.15s",
                    }}
                  >
                    {p.logo && (
                      <img
                        src={p.logo}
                        alt={p.name}
                        style={{ width: 24, height: 24, objectFit: "contain", borderRadius: 4 }}
                      />
                    )}
                    {p.name}
                    <svg
                      style={{ width: 12, height: 12, marginLeft: "auto", opacity: 0.3 }}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          )}

          {shops.length === 0 && streaming.length === 0 && (
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 14 }}>
              Pas de liens disponibles pour cette série.
            </p>
          )}

          <style>{`.shop-link-chrome:hover { background: rgba(255,255,255,0.08) !important; color: #fff !important; }`}</style>
        </div>
      )}
    </>
  );
}
