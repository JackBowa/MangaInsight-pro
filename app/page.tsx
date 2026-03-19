import Link from "next/link";
import { SERIES } from "@/data/series";

// Séries en vedette (top 5 étoiles, mix manga/manhwa)
const FEATURED = [
  "one-piece",
  "l-attaque-des-titans",
  "solo-leveling",
  "death-note",
  "blue-lock",
  "the-beginning-after-the-end",
];

const RECENT_REVIEWS = [
  "naruto",
  "bleach",
  "tokyo-revengers",
  "my-hero-academia",
];

const featured = FEATURED.map((slug) =>
  SERIES.find((s) => s.slug === slug)
).filter(Boolean);

const recentReviews = RECENT_REVIEWS.map((slug) =>
  SERIES.find((s) => s.slug === slug)
).filter(Boolean);

function StarRating({ stars }: { stars?: number }) {
  if (!stars) return null;
  return (
    <span className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-3 h-3 ${i <= stars ? "text-brand" : "text-white/20"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Nunito:wght@400;600;700&display=swap');

        .home-root {
          font-family: 'Nunito', sans-serif;
        }

        /* ── HERO ── */
        .hero {
          position: relative;
          min-height: 88vh;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          margin: -2rem -1rem 0;
          padding: 0 2rem 5rem;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 60% 30%, rgba(139,92,246,0.18) 0%, transparent 70%),
            radial-gradient(ellipse 50% 40% at 20% 80%, rgba(109,40,217,0.12) 0%, transparent 60%),
            linear-gradient(180deg, #05050a 0%, #0b0b18 100%);
        }
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 60%, transparent 100%);
        }
        .hero-covers {
          position: absolute;
          top: 0; right: 0;
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding-right: 0;
          overflow: hidden;
        }
        .hero-cover-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
          animation: floatCol 8s ease-in-out infinite;
        }
        .hero-cover-col:nth-child(2) {
          margin-top: 48px;
          animation-delay: -3s;
        }
        .hero-cover-col:nth-child(3) {
          margin-top: 24px;
          animation-delay: -6s;
        }
        @keyframes floatCol {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .hero-cover-img {
          width: 130px;
          height: 190px;
          object-fit: cover;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 8px 32px rgba(0,0,0,0.5);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hero-cover-img:hover {
          transform: scale(1.04) translateY(-4px);
          box-shadow: 0 16px 40px rgba(139,92,246,0.3);
        }
        .hero-covers-fade {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 45%;
          background: linear-gradient(to right, #05050a 20%, transparent);
        }
        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 560px;
        }
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #a78bfa;
          margin-bottom: 1rem;
          padding: 6px 14px;
          background: rgba(139,92,246,0.12);
          border: 1px solid rgba(139,92,246,0.25);
          border-radius: 999px;
        }
        .hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3.5rem, 8vw, 6.5rem);
          line-height: 0.92;
          letter-spacing: 0.02em;
          color: #fff;
          margin-bottom: 1.5rem;
        }
        .hero-title span {
          color: #8b5cf6;
        }
        .hero-desc {
          font-size: 1rem;
          color: rgba(255,255,255,0.75);
          line-height: 1.7;
          margin-bottom: 2.5rem;
          max-width: 420px;
        }
        .hero-ctas {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 28px;
          background: #8b5cf6;
          color: #fff;
          font-weight: 700;
          font-size: 0.9rem;
          border-radius: 12px;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 24px rgba(139,92,246,0.4);
        }
        .btn-primary:hover {
          background: #7c3aed;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(139,92,246,0.5);
        }
        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 28px;
          background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.8);
          font-weight: 600;
          font-size: 0.9rem;
          border-radius: 12px;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.1);
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .btn-ghost:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.2);
          transform: translateY(-2px);
        }
        .hero-stats {
          display: flex;
          gap: 2rem;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.07);
        }
        .hero-stat-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          color: #fff;
          line-height: 1;
        }
        .hero-stat-label {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-top: 2px;
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .hero {
            min-height: 70vh;
            padding: 0 1.25rem 4rem;
            align-items: flex-end;
          }
          .hero-covers {
            display: none;
          }
          .hero-bg {
            background:
              radial-gradient(ellipse 100% 60% at 50% 20%, rgba(139,92,246,0.25) 0%, transparent 70%),
              linear-gradient(180deg, #05050a 0%, #0b0b18 100%);
          }
          .hero-content {
            max-width: 100%;
          }
          .hero-title {
            font-size: clamp(3.2rem, 14vw, 4.5rem);
          }
          .hero-desc {
            color: rgba(255,255,255,0.85);
            font-size: 0.95rem;
          }
          .hero-stats {
            gap: 1.5rem;
          }
        }
        .section {
          margin: 5rem 0;
        }
        .section-header {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 1.75rem;
        }
        .section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          letter-spacing: 0.04em;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .section-title::before {
          content: '';
          display: block;
          width: 4px;
          height: 1.6rem;
          background: #8b5cf6;
          border-radius: 2px;
        }
        .section-link {
          font-size: 0.8rem;
          color: #a78bfa;
          text-decoration: none;
          font-weight: 600;
          letter-spacing: 0.04em;
          transition: color 0.2s;
        }
        .section-link:hover { color: #c4b5fd; }

        /* ── FEATURED GRID ── */
        .featured-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
        }
        @media (max-width: 1100px) { .featured-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 640px)  { .featured-grid { grid-template-columns: repeat(2, 1fr); } }

        .featured-card {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          aspect-ratio: 2/3;
          cursor: pointer;
          group: true;
        }
        .featured-card:hover .featured-overlay {
          opacity: 1;
        }
        .featured-card:hover .featured-img {
          transform: scale(1.06);
        }
        .featured-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .featured-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(5,5,10,0.97) 0%, rgba(5,5,10,0.5) 50%, transparent 100%);
          opacity: 0.7;
          transition: opacity 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 14px;
        }
        .featured-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 999px;
          background: rgba(139,92,246,0.25);
          border: 1px solid rgba(139,92,246,0.4);
          color: #c4b5fd;
        }
        .featured-card-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.1rem;
          letter-spacing: 0.04em;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 4px;
        }
        .featured-card-tags {
          font-size: 0.65rem;
          color: rgba(255,255,255,0.5);
          margin-bottom: 6px;
        }

        /* ── REVIEW CARDS ── */
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        @media (max-width: 900px) { .reviews-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 500px) { .reviews-grid { grid-template-columns: 1fr; } }

        .review-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          transition: border-color 0.3s, background 0.3s, transform 0.3s;
          display: flex;
          flex-direction: column;
        }
        .review-card:hover {
          border-color: rgba(139,92,246,0.35);
          background: rgba(139,92,246,0.06);
          transform: translateY(-4px);
        }
        .review-card-img {
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
          object-position: top;
        }
        .review-card-body {
          padding: 14px 16px 16px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .review-card-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.15rem;
          letter-spacing: 0.04em;
          color: #fff;
        }
        .review-card-tags {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.4);
        }
        .review-card-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 10px;
        }
        .review-card-cat {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 2px 8px;
          border-radius: 999px;
        }
        .cat-manga { background: rgba(99,102,241,0.15); color: #a5b4fc; }
        .cat-manhwa { background: rgba(236,72,153,0.15); color: #f9a8d4; }

        /* ── BANNER CTA ── */
        .banner-cta {
          position: relative;
          margin: 4rem 0;
          padding: 3.5rem 3rem;
          border-radius: 20px;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(109,40,217,0.25) 0%, rgba(139,92,246,0.12) 50%, rgba(0,0,0,0) 100%);
          border: 1px solid rgba(139,92,246,0.2);
          text-align: center;
        }
        .banner-cta::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -20%;
          width: 60%;
          height: 200%;
          background: radial-gradient(ellipse, rgba(139,92,246,0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        .banner-cta-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          color: #fff;
          margin-bottom: 0.75rem;
          letter-spacing: 0.04em;
        }
        .banner-cta-desc {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.55);
          margin-bottom: 2rem;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
        }

        /* ── CATEGORIES ── */
        .categories-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin: 4rem 0;
        }
        @media (max-width: 900px) { .categories-row { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .categories-row { grid-template-columns: repeat(2, 1fr); } }

        .cat-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 22px;
          border-radius: 14px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          text-decoration: none;
          color: inherit;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .cat-card:hover {
          background: rgba(139,92,246,0.08);
          border-color: rgba(139,92,246,0.3);
          transform: translateY(-2px);
        }
        .cat-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }
        .cat-card-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.2rem;
          letter-spacing: 0.04em;
          color: #fff;
          margin-bottom: 2px;
        }
        .cat-card-desc {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.4);
        }
      `}</style>

      <div className="home-root">

        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-grid" />

          {/* Covers flottantes */}
          <div className="hero-covers">
            <div className="hero-covers-fade" />
            <div className="hero-cover-col">
              {["one-piece", "bleach", "naruto"].map((slug) => {
                const s = SERIES.find((x) => x.slug === slug);
                return s?.cover ? (
                  <img key={slug} src={s.cover} alt={s.title} className="hero-cover-img" />
                ) : null;
              })}
            </div>
            <div className="hero-cover-col">
              {["solo-leveling", "l-attaque-des-titans", "blue-lock"].map((slug) => {
                const s = SERIES.find((x) => x.slug === slug);
                return s?.cover ? (
                  <img key={slug} src={s.cover} alt={s.title} className="hero-cover-img" />
                ) : null;
              })}
            </div>
            <div className="hero-cover-col">
              {["death-note", "my-hero-academia", "the-beginning-after-the-end"].map((slug) => {
                const s = SERIES.find((x) => x.slug === slug);
                return s?.cover ? (
                  <img key={slug} src={s.cover} alt={s.title} className="hero-cover-img" />
                ) : null;
              })}
            </div>
          </div>

          {/* Contenu hero */}
          <div className="hero-content">
            <div className="hero-eyebrow">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
                <circle cx="4" cy="4" r="4" />
              </svg>
              Critiques · Manhwa · Manga
            </div>

            <h1 className="hero-title">
              Ton guide <span>manga</span> ultime
            </h1>

            <p className="hero-desc">
              Critiques détaillées, tops incontournables et guides pour explorer
              les meilleures séries manga et manhwa du moment.
            </p>

            <div className="hero-ctas">
              <Link href="/critiques" className="btn-primary">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Explorer les critiques
              </Link>
              <Link href="/tops" className="btn-ghost">
                Voir les tops →
              </Link>
            </div>

            <div className="hero-stats">
              <div>
                <div className="hero-stat-num">{SERIES.length}+</div>
                <div className="hero-stat-label">Séries référencées</div>
              </div>
              <div>
                <div className="hero-stat-num">{SERIES.filter(s => s.category === "manhwa").length}</div>
                <div className="hero-stat-label">Manhwas</div>
              </div>
              <div>
                <div className="hero-stat-num">{SERIES.filter(s => s.stars === 5).length}</div>
                <div className="hero-stat-label">Coups de cœur</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SÉRIES EN VEDETTE ── */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">Séries en vedette</h2>
            <Link href="/critiques" className="section-link">Tout voir →</Link>
          </div>
          <div className="featured-grid">
            {featured.map((serie) => {
              if (!serie) return null;
              return (
                <Link
                  key={serie.slug}
                  href={`/series/${serie.slug}`}
                  className="featured-card"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={serie.cover || "/_placeholder.jpg"}
                    alt={serie.title}
                    className="featured-img"
                  />
                  <div className="featured-overlay">
                    <div className="featured-badge">{serie.category === "manhwa" ? "Manhwa" : "Manga"}</div>
                    <div className="featured-card-title">{serie.title}</div>
                    <div className="featured-card-tags">{serie.tags}</div>
                    <StarRating stars={serie.stars} />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── CATÉGORIES ── */}
        <div className="categories-row">
          <Link href="/critiques" className="cat-card">
            <span className="cat-icon">📖</span>
            <div>
              <div className="cat-card-title">Critiques</div>
              <div className="cat-card-desc">Avis détaillés sur vos séries</div>
            </div>
          </Link>
          <Link href="/tops" className="cat-card">
            <span className="cat-icon">🏆</span>
            <div>
              <div className="cat-card-title">Tops</div>
              <div className="cat-card-desc">Les meilleures séries classées</div>
            </div>
          </Link>
          <Link href="/guides" className="cat-card">
            <span className="cat-icon">🗺️</span>
            <div>
              <div className="cat-card-title">Guides</div>
              <div className="cat-card-desc">Par où commencer ?</div>
            </div>
          </Link>
          <Link href="/nouveautes" className="cat-card">
            <span className="cat-icon">🆕</span>
            <div>
              <div className="cat-card-title">Nouveautés</div>
              <div className="cat-card-desc">Les derniers ajouts du catalogue</div>
            </div>
          </Link>
        </div>

        {/* ── DERNIÈRES CRITIQUES ── */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">Dernières critiques</h2>
            <Link href="/critiques" className="section-link">Tout voir →</Link>
          </div>
          <div className="reviews-grid">
            {recentReviews.map((serie) => {
              if (!serie) return null;
              return (
                <Link
                  key={serie.slug}
                  href={`/series/${serie.slug}`}
                  className="review-card"
                >
                  <img
                    src={serie.cover || "/_placeholder.jpg"}
                    alt={serie.title}
                    className="review-card-img"
                  />
                  <div className="review-card-body">
                    <div className="review-card-title">{serie.title}</div>
                    <div className="review-card-tags">{serie.tags}</div>
                    <div className="review-card-meta">
                      <span className={`review-card-cat ${serie.category === "manhwa" ? "cat-manhwa" : "cat-manga"}`}>
                        {serie.category === "manhwa" ? "Manhwa" : "Manga"}
                      </span>
                      <StarRating stars={serie.stars} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── TROUVE TA SÉRIE ── */}
        <section style={{
          margin: "4rem 0",
          background: "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(109,40,217,0.08) 50%, transparent 100%)",
          border: "1px solid rgba(124,58,237,0.25)",
          borderRadius: "20px",
          padding: "2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
          flexWrap: "wrap",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(124,58,237,0.2) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#a78bfa", marginBottom: "0.75rem" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              Nouveau
            </div>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", letterSpacing: "0.03em", color: "#fff", lineHeight: 1, marginBottom: "0.6rem" }}>
              Trouve ta prochaine série
            </h2>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", maxWidth: "400px", lineHeight: 1.6 }}>
              Réponds à 4 questions et on te recommande la série parfaite parmi nos 102 critiques.
            </p>
          </div>
          <Link href="/recommandations" style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            padding: "14px 28px", background: "#7c3aed", color: "#fff",
            fontWeight: 700, fontSize: "0.95rem", borderRadius: "12px",
            textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0,
            boxShadow: "0 4px 24px rgba(124,58,237,0.45)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}>
            ✨ Lancer le quiz
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </section>

        {/* ── BANNER CTA ── */}
        <div className="banner-cta">
          <h2 className="banner-cta-title">Rejoins la communauté</h2>
          <p className="banner-cta-desc">
            Crée un compte pour noter tes séries, laisser des commentaires et suivre tes lectures.
          </p>
          <Link href="/compte" className="btn-primary" style={{ display: "inline-flex" }}>
            Créer un compte gratuit
          </Link>
        </div>

      </div>
    </>
  );
}
