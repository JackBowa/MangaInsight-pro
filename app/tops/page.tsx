"use client";

import Link from "next/link";
import { useState } from "react";
import { PUBLISHED_SERIES as SERIES } from "@/data/series";

const A = "#e03030";
const FH = "var(--font-barlow), 'Barlow Condensed', sans-serif";

type Rank = "SSS" | "SS" | "S" | "A" | "B";
const RANK_ORDER: Rank[] = ["SSS", "SS", "S", "A", "B"];

function starsToRank(stars: number): Rank | null {
  if (stars === 5) return "SSS";
  if (stars === 4) return "SS";
  if (stars === 3) return "S";
  if (stars === 2) return "A";
  if (stars === 1) return "B";
  return null;
}

const RANK_META: Record<Rank, { color: string; bg: string; border: string; label: string }> = {
  SSS: { color: "#fbbf24", bg: "rgba(251,191,36,0.12)", border: "rgba(251,191,36,0.3)", label: "Incontournable absolu" },
  SS:  { color: A,         bg: "rgba(224,48,48,0.1)",   border: "rgba(224,48,48,0.25)", label: "Exceptionnel" },
  S:   { color: "#fb923c", bg: "rgba(251,146,60,0.1)",  border: "rgba(251,146,60,0.25)", label: "Excellent" },
  A:   { color: "#4ade80", bg: "rgba(74,222,128,0.08)", border: "rgba(74,222,128,0.2)", label: "Très bien" },
  B:   { color: "#60a5fa", bg: "rgba(96,165,250,0.08)", border: "rgba(96,165,250,0.2)", label: "Bon" },
};

function RankCard({ slug, title, cover, tags, rank, index }: {
  slug: string; title: string; cover?: string; tags?: string; rank: Rank; index: number;
}) {
  const meta = RANK_META[rank];
  const tagList = (tags ?? "").split("·").map(t => t.trim()).filter(Boolean).slice(0, 2);

  return (
    <Link href={`/series/${slug}`} style={{ textDecoration: "none" }} className="rank-card-chrome">
      <div style={{
        position: "relative", borderRadius: 4, overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)",
        cursor: "pointer", transition: "all 0.25s",
      }}>
        {/* Numéro dans son rang */}
        <div style={{
          position: "absolute", top: 8, left: 8, zIndex: 20,
          fontFamily: FH, fontSize: 11, fontWeight: 800,
          letterSpacing: "0.1em",
          background: meta.bg, border: `1px solid ${meta.border}`,
          color: meta.color, padding: "3px 8px", borderRadius: 4,
        }}>
          {rank}
        </div>

        {/* Image */}
        <div style={{ aspectRatio: "2/3", overflow: "hidden", position: "relative" }}>
          <img
            src={cover || "/_placeholder.jpg"}
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s", display: "block" }}
            className="rank-card-img"
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              if (!img.dataset.fb) { img.dataset.fb = "1"; img.src = "/_placeholder.jpg"; }
            }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)",
          }} />
          {tagList.length > 0 && (
            <div style={{ position: "absolute", bottom: 8, left: 8, right: 8, display: "flex", gap: 4, flexWrap: "wrap" }}>
              {tagList.map(t => (
                <span key={t} style={{
                  fontSize: 10, padding: "2px 6px", borderRadius: 4,
                  background: "rgba(0,0,0,0.65)", border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.7)", fontFamily: FH, fontWeight: 600,
                  letterSpacing: "0.06em",
                }}>
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Titre */}
        <div style={{ padding: "8px 10px", background: "rgba(255,255,255,0.02)" }}>
          <p style={{
            fontFamily: FH, fontSize: 12, fontWeight: 700,
            color: "#fff", letterSpacing: "0.04em", textTransform: "uppercase",
            overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
          }}>
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
}

function RankSection({ rank, items }: { rank: Rank; items: typeof SERIES }) {
  const meta = RANK_META[rank];
  if (!items.length) return null;

  return (
    <div style={{ marginBottom: 48 }}>
      {/* En-tête rang */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
        <div style={{ width: 4, height: 32, background: meta.color, borderRadius: 2, flexShrink: 0 }} />
        <div>
          <span style={{
            fontFamily: FH, fontSize: 28, fontWeight: 800,
            letterSpacing: "0.08em", color: meta.color,
          }}>
            {rank}
          </span>
          <span style={{
            fontFamily: FH, fontSize: 12, fontWeight: 600,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)", marginLeft: 12,
          }}>
            {meta.label}
          </span>
        </div>
        <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
        <span style={{
          fontFamily: FH, fontSize: 11, fontWeight: 700,
          color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em",
        }}>
          {items.length} série{items.length > 1 ? "s" : ""}
        </span>
      </div>

      {/* Grille de cartes */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
        gap: 12,
      }}>
        {items.map((s, i) => (
          <RankCard
            key={s.slug}
            slug={s.slug}
            title={s.title}
            cover={s.cover}
            tags={s.tags}
            rank={rank}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}

export default function TopsPage() {
  const [tab, setTab] = useState<"manga" | "manhwa">("manga");

  const mangas = SERIES.filter(s => s.category === "manga");
  const manhwas = SERIES.filter(s => s.category === "manhwa");

  const byRank = (list: typeof SERIES) => {
    const groups: Record<Rank, typeof SERIES> = { SSS: [], SS: [], S: [], A: [], B: [] };
    list.forEach(s => {
      const rank = starsToRank(s.stars as number ?? 0);
      if (rank) groups[rank].push(s);
    });
    return groups;
  };

  const mangaRanks = byRank(mangas);
  const manhwaRanks = byRank(manhwas);
  const activeRanks = tab === "manga" ? mangaRanks : manhwaRanks;
  const activeList = tab === "manga" ? mangas : manhwas;
  const totalRanked = activeList.filter(s => starsToRank(s.stars as number ?? 0)).length;

  // Compte global pour le hero
  const rankCounts = RANK_ORDER.map(rank => ({
    rank,
    count: SERIES.filter(s => starsToRank(s.stars as number ?? 0) === rank).length,
  })).filter(r => r.count > 0);

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a" }}>
      <style>{`
        .rank-card-chrome:hover > div { border-color: rgba(255,255,255,0.15) !important; transform: translateY(-4px); }
        .rank-card-chrome:hover .rank-card-img { transform: scale(1.05); }
        .podium-card:hover { transform: translateY(-4px); transition: all 0.25s; }
        .podium-card { transition: all 0.25s; }
        .podium-card:hover .podium-img { transform: scale(1.05); }
        @media (max-width: 600px) { .podium-grid-chrome { grid-template-columns: 1fr !important; } }
      `}</style>

      {/* HERO CHROME */}
      <section style={{
        position: "relative", minHeight: 300,
        display: "flex", alignItems: "center", overflow: "hidden",
        padding: "0 clamp(20px,4vw,64px)",
        background: "#0a0a0a",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        {/* Stripe rouge gauche */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: A }} />

        <div style={{ position: "relative", zIndex: 2, paddingTop: 56, paddingBottom: 56, maxWidth: 800 }}>
          <p style={{
            fontFamily: FH, fontSize: 11, fontWeight: 700,
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: A, marginBottom: 16,
          }}>
            Classements MangaInsight
          </p>
          <h1 style={{
            fontFamily: FH, fontSize: "clamp(3rem,8vw,6rem)",
            fontWeight: 800, letterSpacing: "0.04em", textTransform: "uppercase",
            color: "#fff", lineHeight: 0.9, marginBottom: 20,
          }}>
            TOPS &<br />
            <span style={{ color: A }}>CLASSEMENTS</span>
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: 480, marginBottom: 32 }}>
            Les meilleures séries classées par la rédaction, du rang SSS incontournable au rang B solide.
          </p>

          {/* Compteurs par rang */}
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {rankCounts.map(({ rank, count }) => (
              <div key={rank} style={{ textAlign: "center" }}>
                <div style={{
                  fontFamily: FH, fontSize: 28, fontWeight: 800,
                  color: RANK_META[rank].color, letterSpacing: "0.04em",
                }}>
                  {count}
                </div>
                <div style={{
                  fontFamily: FH, fontSize: 10, fontWeight: 700,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)", marginTop: 2,
                }}>
                  Rang {rank}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "40px clamp(16px,4vw,48px) 80px" }}>

        {/* Tabs Manga / Manhwa */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 40, borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: 0 }}>
          {(["manga", "manhwa"] as const).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                fontFamily: FH, fontSize: 13, fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
                padding: "12px 20px", background: "none", border: "none",
                borderBottom: tab === t ? `2px solid ${A}` : "2px solid transparent",
                color: tab === t ? "#fff" : "rgba(255,255,255,0.35)",
                cursor: "pointer", transition: "color 0.15s", marginBottom: -1,
              }}
            >
              {t === "manga" ? "📚 Mangas" : "🇰🇷 Manhwas"}
            </button>
          ))}
          <span style={{
            marginLeft: "auto", fontFamily: FH, fontSize: 11,
            color: "rgba(255,255,255,0.25)", letterSpacing: "0.08em",
          }}>
            <strong style={{ color: "rgba(255,255,255,0.6)" }}>{totalRanked}</strong> séries classées
          </span>
        </div>

        {/* ── PODIUM TOP 3 ── */}
        {activeRanks["SSS"].length >= 1 && (
          <div style={{ marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
              <div style={{ width: 4, height: 20, background: "#fbbf24", borderRadius: 2 }} />
              <p style={{ fontFamily: FH, fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
                Podium SSS
              </p>
              <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr 1fr", gap: 12, alignItems: "flex-end" }} className="podium-grid-chrome">
              {/* 2e place */}
              {activeRanks["SSS"][1] ? (
                <Link href={`/series/${activeRanks["SSS"][1].slug}`} style={{ textDecoration: "none" }}>
                  <div style={{ position: "relative" }}>
                    <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", fontFamily: FH, fontSize: 32, fontWeight: 800, color: "rgba(192,192,192,0.9)", zIndex: 10, textShadow: "0 0 20px rgba(192,192,192,0.3)" }}>②</div>
                    <div className="podium-card" style={{ borderRadius: 4, overflow: "hidden", border: "1px solid rgba(192,192,192,0.2)", marginTop: 28 }}>
                      <div style={{ aspectRatio: "2/3", position: "relative", overflow: "hidden" }}>
                        <img src={activeRanks["SSS"][1].cover || "/_placeholder.jpg"} alt={activeRanks["SSS"][1].title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }} className="podium-img" />
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 50%)" }} />
                        <div style={{ position: "absolute", bottom: 10, left: 10, right: 10 }}>
                          <p style={{ fontFamily: FH, fontSize: 13, fontWeight: 800, color: "#fff", textTransform: "uppercase", letterSpacing: "0.04em" }}>{activeRanks["SSS"][1].title}</p>
                          <p style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{activeRanks["SSS"][1].tags?.split("·")[0].trim()}</p>
                        </div>
                      </div>
                      <div style={{ background: "rgba(192,192,192,0.06)", padding: "8px 10px", borderTop: "1px solid rgba(192,192,192,0.12)", textAlign: "center" }}>
                        <span style={{ fontFamily: FH, fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "rgba(192,192,192,0.7)", textTransform: "uppercase" }}>Argent</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ) : <div />}

              {/* 1re place */}
              <Link href={`/series/${activeRanks["SSS"][0].slug}`} style={{ textDecoration: "none" }}>
                <div style={{ position: "relative" }}>
                  <div style={{ position: "absolute", top: -16, left: "50%", transform: "translateX(-50%)", fontFamily: FH, fontSize: 40, fontWeight: 800, color: "#fbbf24", zIndex: 10, textShadow: "0 0 30px rgba(251,191,36,0.6)" }}>①</div>
                  <div className="podium-card" style={{ borderRadius: 4, overflow: "hidden", border: "2px solid rgba(251,191,36,0.4)", marginTop: 24, boxShadow: "0 0 40px rgba(251,191,36,0.15)" }}>
                    <div style={{ aspectRatio: "2/3", position: "relative", overflow: "hidden" }}>
                      <img src={activeRanks["SSS"][0].cover || "/_placeholder.jpg"} alt={activeRanks["SSS"][0].title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }} className="podium-img" />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 45%)" }} />
                      <div style={{ position: "absolute", bottom: 12, left: 12, right: 12 }}>
                        <p style={{ fontFamily: FH, fontSize: 15, fontWeight: 800, color: "#fff", textTransform: "uppercase", letterSpacing: "0.04em" }}>{activeRanks["SSS"][0].title}</p>
                        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 3 }}>{activeRanks["SSS"][0].tags?.split("·")[0].trim()}</p>
                      </div>
                    </div>
                    <div style={{ background: "rgba(251,191,36,0.08)", padding: "10px", borderTop: "1px solid rgba(251,191,36,0.2)", textAlign: "center" }}>
                      <span style={{ fontFamily: FH, fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", color: "#fbbf24", textTransform: "uppercase" }}>Or · Meilleure série</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* 3e place */}
              {activeRanks["SSS"][2] ? (
                <Link href={`/series/${activeRanks["SSS"][2].slug}`} style={{ textDecoration: "none" }}>
                  <div style={{ position: "relative" }}>
                    <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", fontFamily: FH, fontSize: 32, fontWeight: 800, color: "rgba(205,127,50,0.9)", zIndex: 10, textShadow: "0 0 20px rgba(205,127,50,0.3)" }}>③</div>
                    <div className="podium-card" style={{ borderRadius: 4, overflow: "hidden", border: "1px solid rgba(205,127,50,0.2)", marginTop: 28 }}>
                      <div style={{ aspectRatio: "2/3", position: "relative", overflow: "hidden" }}>
                        <img src={activeRanks["SSS"][2].cover || "/_placeholder.jpg"} alt={activeRanks["SSS"][2].title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }} className="podium-img" />
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 50%)" }} />
                        <div style={{ position: "absolute", bottom: 10, left: 10, right: 10 }}>
                          <p style={{ fontFamily: FH, fontSize: 13, fontWeight: 800, color: "#fff", textTransform: "uppercase", letterSpacing: "0.04em" }}>{activeRanks["SSS"][2].title}</p>
                          <p style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{activeRanks["SSS"][2].tags?.split("·")[0].trim()}</p>
                        </div>
                      </div>
                      <div style={{ background: "rgba(205,127,50,0.06)", padding: "8px 10px", borderTop: "1px solid rgba(205,127,50,0.12)", textAlign: "center" }}>
                        <span style={{ fontFamily: FH, fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "rgba(205,127,50,0.7)", textTransform: "uppercase" }}>Bronze</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ) : <div />}
            </div>
          </div>
        )}

        {/* Sections par rang */}
        {RANK_ORDER.map(rank => (
          <RankSection key={rank} rank={rank} items={activeRanks[rank]} />
        ))}
      </div>
    </div>
  );
}
