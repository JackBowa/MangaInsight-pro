"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useMemo } from "react";
import { PUBLISHED_SERIES as SERIES } from "@/data/series";

const A = "#e03030";
const FH = "var(--font-barlow), 'Barlow Condensed', sans-serif";

function timeAgo(dateStr: string): string {
  const now = new Date();
  const diff = Math.floor((now.getTime() - new Date(dateStr).getTime()) / (1000 * 60 * 60 * 24));
  if (diff === 0) return "Aujourd'hui";
  if (diff === 1) return "Hier";
  if (diff < 7) return `Il y a ${diff} jours`;
  if (diff < 14) return "Il y a 1 semaine";
  if (diff < 30) return `Il y a ${Math.floor(diff / 7)} semaines`;
  if (diff < 60) return "Il y a 1 mois";
  return `Il y a ${Math.floor(diff / 30)} mois`;
}

export default function NouveautesPage() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const sorted = useMemo(() =>
    [...SERIES]
      .filter(s => s.addedAt)
      .sort((a, b) => (b.addedAt ?? "").localeCompare(a.addedAt ?? "")),
    []
  );

  const recent = sorted.slice(0, 12);
  const feed = sorted.slice(0, 20);

  function scrollCarousel(dir: number) {
    carouselRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a" }}>
      <style>{`
        .nouveautes-card:hover { border-color: rgba(224,48,48,0.35) !important; transform: translateY(-4px); }
        .nouveautes-card { transition: all 0.25s; }
        .nouveautes-card:hover img { transform: scale(1.05); }
        .feed-row:hover { background: rgba(255,255,255,0.05) !important; border-color: rgba(224,48,48,0.2) !important; }
        .feed-row { transition: all 0.2s; }
        .carousel-hide { scrollbar-width:none; }
        .carousel-hide::-webkit-scrollbar { display:none; }
      `}</style>

      {/* HERO CHROME */}
      <section style={{
        position: "relative", minHeight: 280,
        display: "flex", alignItems: "center",
        padding: "0 clamp(20px,4vw,64px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: A }} />

        <div style={{ position: "relative", zIndex: 2, paddingTop: 48, paddingBottom: 48 }}>
          <p style={{
            fontFamily: FH, fontSize: 11, fontWeight: 700,
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: A, marginBottom: 14,
          }}>
            Mis à jour en continu
          </p>
          <h1 style={{
            fontFamily: FH, fontSize: "clamp(3rem,7vw,5.5rem)",
            fontWeight: 800, letterSpacing: "0.04em", textTransform: "uppercase",
            color: "#fff", lineHeight: 0.92, marginBottom: 16,
          }}>
            NOUVEAUTÉS
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: 440, marginBottom: 28 }}>
            Les dernières séries ajoutées sur MangaInsight, triées par date d'ajout.
          </p>
          <div style={{ display: "flex", gap: 28 }}>
            {[
              { num: sorted.length, label: "Séries avec date" },
              { num: recent.length, label: "Ajouts récents" },
            ].map(({ num, label }) => (
              <div key={label}>
                <div style={{ fontFamily: FH, fontSize: 30, fontWeight: 800, color: "#fff", lineHeight: 1 }}>{num}</div>
                <div style={{ fontFamily: FH, fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginTop: 4 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px clamp(16px,4vw,48px) 80px" }}>

        {/* CAROUSEL */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <div style={{ width: 4, height: 16, background: A, borderRadius: 2 }} />
          <p style={{
            fontFamily: FH, fontSize: 11, fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
          }}>
            Récemment ajoutés
          </p>
          <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
        </div>

        <div style={{ position: "relative", marginBottom: 56 }}>
          {/* Flèche gauche */}
          <button
            onClick={() => scrollCarousel(-1)}
            style={{
              position: "absolute", left: -18, top: "40%", zIndex: 10,
              width: 34, height: 34, borderRadius: "50%",
              background: "rgba(0,0,0,0.8)", border: "1px solid rgba(255,255,255,0.12)",
              color: "#fff", fontSize: 18, cursor: "pointer",
              display: "none", alignItems: "center", justifyContent: "center",
              transition: "all 0.15s",
            }}
            className="carousel-arrow-chrome"
          >
            ‹
          </button>

          <div
            ref={carouselRef}
            className="carousel-hide"
            style={{ display: "flex", gap: 12, overflowX: "auto", scrollSnapType: "x mandatory", paddingBottom: 8 }}
          >
            {recent.map((s, i) => (
              <Link
                key={s.slug}
                href={`/series/${s.slug}`}
                style={{ scrollSnapAlign: "start", flexShrink: 0, width: 148, textDecoration: "none" }}
              >
                <div
                  className="nouveautes-card"
                  style={{
                    borderRadius: 4, overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.07)",
                    background: "rgba(255,255,255,0.02)",
                  }}
                >
                  <div style={{ position: "relative", aspectRatio: "2/3", overflow: "hidden" }}>
                    <Image
                      src={s.cover || "/_placeholder.jpg"}
                      alt={s.title}
                      fill sizes="148px"
                      style={{ objectFit: "cover", transition: "transform 0.4s" }}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 50%)" }} />
                    {/* Badge catégorie */}
                    <span style={{
                      position: "absolute", top: 6, left: 6,
                      fontFamily: FH, fontSize: 9, fontWeight: 700,
                      letterSpacing: "0.1em", textTransform: "uppercase",
                      padding: "2px 6px", borderRadius: 4,
                      background: s.category === "manhwa" ? "rgba(236,72,153,0.2)" : "rgba(255,255,255,0.12)",
                      border: `1px solid ${s.category === "manhwa" ? "rgba(236,72,153,0.3)" : "rgba(255,255,255,0.15)"}`,
                      color: s.category === "manhwa" ? "rgb(249,168,212)" : "rgba(255,255,255,0.75)",
                    }}>
                      {s.category}
                    </span>
                    {/* Badge "NEW" pour les 4 premiers */}
                    {i < 4 && (
                      <span style={{
                        position: "absolute", top: 6, right: 6,
                        fontFamily: FH, fontSize: 9, fontWeight: 800,
                        letterSpacing: "0.1em", textTransform: "uppercase",
                        padding: "2px 6px", borderRadius: 4,
                        background: A, color: "#fff",
                      }}>
                        NEW
                      </span>
                    )}
                  </div>
                  <div style={{ padding: "8px 10px" }}>
                    <p style={{
                      fontFamily: FH, fontSize: 12, fontWeight: 700,
                      color: "#fff", letterSpacing: "0.04em", textTransform: "uppercase",
                      overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                    }}>
                      {s.title}
                    </p>
                    {s.addedAt && (
                      <p style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginTop: 2 }}>
                        {timeAgo(s.addedAt)}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Flèche droite */}
          <button
            onClick={() => scrollCarousel(1)}
            style={{
              position: "absolute", right: -18, top: "40%", zIndex: 10,
              width: 34, height: 34, borderRadius: "50%",
              background: "rgba(0,0,0,0.8)", border: "1px solid rgba(255,255,255,0.12)",
              color: "#fff", fontSize: 18, cursor: "pointer",
              display: "none", alignItems: "center", justifyContent: "center",
              transition: "all 0.15s",
            }}
            className="carousel-arrow-chrome"
          >
            ›
          </button>
        </div>

        {/* FIL D'AJOUTS */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <div style={{ width: 4, height: 16, background: A, borderRadius: 2 }} />
          <p style={{
            fontFamily: FH, fontSize: 11, fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
          }}>
            Fil des ajouts
          </p>
          <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {feed.map((item, i) => (
            <Link
              key={`${item.slug}-${i}`}
              href={`/series/${item.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div
                className="feed-row"
                style={{
                  display: "flex", alignItems: "center", gap: 16,
                  padding: "12px 16px",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 4,
                }}
              >
                {/* Miniature */}
                <div style={{ position: "relative", width: 40, height: 56, borderRadius: 4, overflow: "hidden", flexShrink: 0, border: "1px solid rgba(255,255,255,0.08)" }}>
                  <Image src={item.cover || "/_placeholder.jpg"} alt={item.title} fill sizes="40px" style={{ objectFit: "cover" }} />
                </div>

                {/* Infos */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{
                    fontFamily: FH, fontSize: 14, fontWeight: 700,
                    color: "#fff", letterSpacing: "0.04em", textTransform: "uppercase",
                    overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                    marginBottom: 4,
                  }}>
                    {item.title}
                  </p>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>
                      {item.category === "manhwa" ? "🇰🇷 Manhwa" : "🇯🇵 Manga"}
                    </span>
                    {item.tags && (
                      <>
                        <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "inline-block" }} />
                        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>
                          {item.tags.split("·")[0].trim()}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Badges */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4, flexShrink: 0 }}>
                  <span style={{
                    fontFamily: FH, fontSize: 9, fontWeight: 800,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    padding: "3px 8px", borderRadius: 4,
                    background: "rgba(224,48,48,0.1)", border: "1px solid rgba(224,48,48,0.2)",
                    color: A,
                  }}>
                    Nouveau
                  </span>
                  {item.addedAt && (
                    <span style={{ fontSize: 10, color: "rgba(255,255,255,0.45)" }}>
                      {timeAgo(item.addedAt)}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>

      <style>{`@media (min-width: 768px) { .carousel-arrow-chrome { display: flex !important; } }`}</style>
    </div>
  );
}
