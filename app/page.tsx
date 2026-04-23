import Link from "next/link";
import Image from "next/image";
import { SERIES, PUBLISHED_SERIES } from "@/data/series";

const ACCENT = "#e03030";
const ACCENT_DIM = "rgba(224,48,48,0.1)";
const ACCENT_BORDER = "rgba(224,48,48,0.22)";
const FONT_H = "var(--font-barlow), 'Barlow Condensed', sans-serif";
const FONT_B = "var(--font-figtree), 'Figtree', sans-serif";
const BG = "#0a0a0a";
const TEXT_MUTED = "rgba(255,255,255,0.45)";
const TEXT_DIM = "rgba(255,255,255,0.65)";

const HERO_COVER_SLUGS = [
  "l-attaque-des-titans",
  "solo-leveling",
  "berserk",
  "vinland-saga",
  "chainsaw-man",
  "death-note",
  "naruto",
  "one-piece",
];

const FEATURED_SLUGS = [
  "solo-leveling",
  "l-attaque-des-titans",
  "berserk",
  "vagabond",
  "vinland-saga",
  "chainsaw-man",
];

const RECENT_SLUGS = [
  "naruto",
  "bleach",
  "my-hero-academia",
  "tokyo-revengers",
];

function StarRow({ stars, size = 13 }: { stars?: number; size?: number }) {
  if (!stars) return null;
  return (
    <span style={{ color: ACCENT, fontSize: size, letterSpacing: "0.04em" }}>
      {[1, 2, 3, 4, 5].map((i) => (i <= stars ? "★" : "☆")).join("")}
    </span>
  );
}

export default function Home() {
  const heroCovers = HERO_COVER_SLUGS.map((slug) => SERIES.find((s) => s.slug === slug)).filter(Boolean);
  const featured = FEATURED_SLUGS.map((slug) => SERIES.find((s) => s.slug === slug)).filter(Boolean);
  const recent = RECENT_SLUGS.map((slug) => SERIES.find((s) => s.slug === slug)).filter(Boolean);

  const totalSeries = PUBLISHED_SERIES.length;
  const totalManhwa = PUBLISHED_SERIES.filter((s) => s.category === "manhwa").length;
  const totalHearts = PUBLISHED_SERIES.filter((s) => s.stars === 5).length;

  return (
    <div style={{ background: BG, minHeight: "100vh", fontFamily: FONT_B }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "88vh", display: "flex", alignItems: "flex-end", overflow: "hidden", padding: "0 clamp(20px,4vw,60px) 64px" }}>
        <div style={{ position: "absolute", inset: 0, background: "#090909" }} />

        {/* Covers wall — right side */}
        <div className="hero-covers-chrome" style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "52%", display: "flex", gap: 10, padding: "16px 0", overflow: "hidden", alignItems: "flex-start" }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "22%", background: "linear-gradient(to right, #090909, transparent)", zIndex: 2 }} />
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to left, #090909, transparent)", zIndex: 2 }} />
          {([[0, 1], [2, 3], [4, 5], [6, 7]] as [number, number][]).map((pair, ci) => (
            <div key={ci} style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: ci === 1 ? 60 : ci === 2 ? 20 : ci === 3 ? 80 : 0, flexShrink: 0 }}>
              {pair.map((idx) => {
                const s = heroCovers[idx];
                if (!s?.cover) return null;
                return (
                  <Image
                    key={idx}
                    src={s.cover}
                    alt={s.title}
                    width={200}
                    height={290}
                    style={{ width: "clamp(160px,13vw,200px)", height: "auto", objectFit: "cover", borderRadius: 2, border: "1px solid rgba(255,255,255,0.06)", boxShadow: "0 8px 32px rgba(0,0,0,0.6)" }}
                    priority={ci === 0}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* Red left stripe */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 5, background: ACCENT, zIndex: 5 }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 10, maxWidth: 580 }}>
          <h1 style={{ fontFamily: FONT_H, fontSize: "clamp(72px,10vw,120px)", fontWeight: 800, lineHeight: 0.88, textTransform: "uppercase", color: "#fff", marginBottom: 24, letterSpacing: "-0.01em" }}>
            LE GUIDE<br />
            <span style={{ color: ACCENT }}>MANGA</span>
            <br />ULTIME
          </h1>

          <p style={{ fontSize: "clamp(14px,1.5vw,16px)", color: TEXT_DIM, lineHeight: 1.75, maxWidth: 440, marginBottom: 36 }}>
            Des critiques honnêtes, des classements sélectionnés et des recommandations personnalisées pour ne jamais rater une bonne série.
          </p>

          <div style={{ display: "flex", gap: 0, borderRadius: 4, overflow: "hidden", width: "fit-content", border: "1px solid rgba(255,255,255,0.1)" }}>
            <Link href="/critiques" style={{ display: "block", padding: "14px 32px", background: ACCENT, color: "#fff", fontWeight: 700, fontSize: 13, fontFamily: FONT_H, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>
              Explorer les critiques
            </Link>
            <Link href="/tops" style={{ display: "block", padding: "14px 28px", background: "transparent", color: TEXT_DIM, fontWeight: 600, fontSize: 13, fontFamily: FONT_H, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderLeft: "1px solid rgba(255,255,255,0.1)" }}>
              Tops →
            </Link>
          </div>

          {/* Stats row */}
          <div className="hero-stats-chrome" style={{ display: "flex", gap: 0, marginTop: 44, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            {([
              [`${totalSeries}+`, "SÉRIES"],
              [`${totalManhwa}`, "MANHWAS"],
              [`${totalHearts}`, "COUPS DE CŒUR"],
              ["100%", "FRANCOPHONE"],
            ] as [string, string][]).map(([n, l], i) => (
              <div key={l} style={{ flex: 1, borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none", paddingRight: 20, marginRight: 20 }}>
                <div style={{ fontFamily: FONT_H, fontSize: 36, fontWeight: 800, color: "#fff", lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: 10, color: TEXT_MUTED, letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SÉRIES EN VEDETTE ── */}
      <section style={{ maxWidth: 1440, margin: "0 auto", padding: "64px clamp(20px,4vw,52px)" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 24, height: 3, background: ACCENT }} />
            <h2 style={{ fontFamily: FONT_H, fontSize: 28, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", color: "#fff" }}>
              SÉRIES EN VEDETTE
            </h2>
          </div>
          <Link href="/critiques" style={{ fontFamily: FONT_H, fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
            TOUT VOIR →
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 14 }}>
          {featured.map((serie) => {
            if (!serie) return null;
            return (
              <Link
                key={serie.slug}
                href={`/series/${serie.slug}`}
                className="feat-card-chrome"
                style={{ textDecoration: "none", display: "block", borderRadius: 2, overflow: "hidden", position: "relative", aspectRatio: "2/3", background: "#141414", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                {serie.cover && (
                  <Image
                    src={serie.cover}
                    alt={serie.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1100px) 33vw, 16vw"
                    className="feat-img-chrome"
                    style={{ objectFit: "cover", transition: "transform .4s ease" }}
                  />
                )}
                <div className="feat-overlay-chrome" style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.3) 50%, transparent 100%)", opacity: 0.7, transition: "opacity .3s", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 12 }}>
                  <div style={{ fontFamily: FONT_H, fontSize: 14, fontWeight: 800, letterSpacing: "0.04em", color: "#fff", lineHeight: 1.1, marginBottom: 4 }}>
                    {serie.title}
                  </div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>
                    {(serie.tags ?? "").split(",")[0]?.trim()}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <StarRow stars={serie.stars} size={11} />
                    {serie.stars != null && (
                      <span style={{ fontFamily: FONT_H, fontSize: 13, fontWeight: 700, color: "#fff", background: ACCENT, padding: "2px 7px", borderRadius: 2 }}>
                        {serie.stars * 2}/10
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── QUIZ BANNER ── */}
      <section style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(20px,4vw,52px) 48px" }}>
        <div
          className="quiz-banner-chrome"
          style={{
            position: "relative",
            padding: "clamp(24px,4vw,40px) clamp(24px,4vw,48px)",
            background: "linear-gradient(135deg, rgba(224,48,48,0.12) 0%, rgba(224,48,48,0.04) 100%)",
            border: `1px solid ${ACCENT_BORDER}`,
            borderRadius: 4,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: ACCENT }} />
          <div style={{ paddingLeft: 16 }}>
            <div style={{ fontFamily: FONT_H, fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: ACCENT, marginBottom: 8 }}>
              ✦ NOUVEAU
            </div>
            <h2 style={{ fontFamily: FONT_H, fontSize: "clamp(22px,3vw,34px)", fontWeight: 800, textTransform: "uppercase", color: "#fff", lineHeight: 1, marginBottom: 8 }}>
              QUELLE SÉRIE POUR TOI ?
            </h2>
            <p style={{ fontSize: 14, color: TEXT_MUTED }}>
              4 questions · une recommandation personnalisée parmi nos {totalSeries}+ séries
            </p>
          </div>
          <Link
            href="/recommandations"
            style={{ padding: "13px 28px", background: ACCENT, color: "#fff", fontWeight: 700, fontSize: 13, fontFamily: FONT_H, letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: 4, textDecoration: "none", whiteSpace: "nowrap" }}
          >
            LANCER LE QUIZ →
          </Link>
        </div>
      </section>

      {/* ── DERNIÈRES CRITIQUES ── */}
      <section style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(20px,4vw,52px) 80px" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 24, height: 3, background: ACCENT }} />
            <h2 style={{ fontFamily: FONT_H, fontSize: 28, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", color: "#fff" }}>
              DERNIÈRES CRITIQUES
            </h2>
          </div>
          <Link href="/critiques" style={{ fontFamily: FONT_H, fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
            TOUT VOIR →
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 14 }}>
          {recent.map((serie) => {
            if (!serie) return null;
            return (
              <Link
                key={serie.slug}
                href={`/series/${serie.slug}`}
                className="review-card-chrome"
                style={{ display: "block", background: "#111", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 4, overflow: "hidden", textDecoration: "none", transition: "border-color .2s, transform .2s" }}
              >
                {serie.cover && (
                  <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                    <Image
                      src={serie.cover}
                      alt={serie.title}
                      fill
                      sizes="(max-width: 900px) 50vw, 25vw"
                      style={{ objectFit: "cover", objectPosition: "top" }}
                    />
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: ACCENT }} />
                  </div>
                )}
                <div style={{ padding: "14px 16px" }}>
                  <div style={{ fontFamily: FONT_H, fontSize: 18, fontWeight: 800, letterSpacing: "0.04em", color: "#fff", marginBottom: 4 }}>
                    {serie.title}
                  </div>
                  <div style={{ fontSize: 12, color: TEXT_MUTED, marginBottom: 10 }}>
                    {serie.tags}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "3px 8px",
                      borderRadius: 2,
                      background: serie.category === "manhwa" ? "rgba(244,114,182,0.1)" : ACCENT_DIM,
                      border: `1px solid ${serie.category === "manhwa" ? "rgba(244,114,182,0.2)" : ACCENT_BORDER}`,
                      color: serie.category === "manhwa" ? "#f9a8d4" : "#fca5a5",
                    }}>
                      {serie.category}
                    </span>
                    <StarRow stars={serie.stars} size={12} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── COMPTE BANNER ── */}
      <section style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(20px,4vw,52px) 80px" }}>
        <div style={{ textAlign: "center", padding: "48px 32px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 4 }}>
          <h2 style={{ fontFamily: FONT_H, fontSize: "clamp(28px,4vw,42px)", fontWeight: 800, textTransform: "uppercase", color: "#fff", marginBottom: 12 }}>
            REJOINS LA COMMUNAUTÉ
          </h2>
          <p style={{ fontSize: 14, color: TEXT_MUTED, maxWidth: 480, margin: "0 auto 28px" }}>
            Créez un compte pour noter vos séries, laisser des commentaires et suivre vos lectures.
          </p>
          <Link
            href="/compte"
            style={{ display: "inline-block", padding: "13px 32px", background: ACCENT, color: "#fff", fontWeight: 700, fontSize: 14, fontFamily: FONT_H, letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: 4, textDecoration: "none" }}
          >
            CRÉER MON COMPTE →
          </Link>
        </div>
      </section>

      <style>{`
        .feat-card-chrome:hover .feat-img-chrome { transform: scale(1.05) !important; }
        .feat-card-chrome:hover .feat-overlay-chrome { opacity: 1 !important; }
        .review-card-chrome:hover { border-color: rgba(224,48,48,0.22) !important; transform: translateY(-3px); }

        @media (max-width: 900px) {
          .hero-covers-chrome { display: none !important; }
        }
        @media (max-width: 600px) {
          .hero-stats-chrome {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 16px !important;
          }
          .hero-stats-chrome > div {
            border-right: none !important;
            padding-right: 0 !important;
            margin-right: 0 !important;
          }
        }
        @media (max-width: 700px) {
          .quiz-banner-chrome { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </div>
  );
}
