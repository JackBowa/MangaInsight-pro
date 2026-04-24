import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SERIES } from "@/data/series";
import { STREAMING_MAP, STREAMING_INFO } from "@/data/streaming";
import { SHOPS_MAP, SHOPS_INFO } from "@/data/shops";
import Comments from "./Comments";
import CoverImage from "./CoverImage";
import SerieActions from "./SerieActions";
import SerieDetailTabs from "./SerieDetailTabs";
import dynamic from "next/dynamic";
const SidebarScores = dynamic(() => import("./SidebarScores"), { ssr: false });

const A = "#e03030";
const FH = "var(--font-barlow), 'Barlow Condensed', sans-serif";

export function generateStaticParams() {
  return SERIES.filter(s => s.published !== false).map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const serie = SERIES.find(s => s.slug === params.slug);
  if (!serie) return {};
  return {
    title: serie.title,
    description: serie.synopsis ? serie.synopsis.slice(0, 155) + "…" : `Critique et avis sur ${serie.title}, MangaInsight`,
    openGraph: {
      title: `${serie.title} · MangaInsight`,
      description: serie.synopsis?.slice(0, 155) + "…",
      images: serie.cover ? [{ url: serie.cover }] : [],
    },
  };
}

function starsToRank(stars?: number): string | null {
  if (stars === 5) return "SSS";
  if (stars === 4) return "SS";
  if (stars === 3) return "S";
  if (stars === 2) return "A";
  if (stars === 1) return "B";
  return null;
}

const STOPWORDS = new Set([
  "le","la","les","un","de","du","des","et","en","au","aux","par","sur","qui","que","dans","est","il","elle",
  "ils","elles","son","sa","ses","leur","leurs","ce","se","si","ne","pas","plus","pour","avec","sans","mais",
  "ou","donc","or","ni","car","tout","tous","très","bien","plus","aussi","même","comme","après","avant","sous",
  "entre","jusqu","lorsque","dont","où","ont","être","avoir","une","lui","nous","vous","mon","ma","mes","ton",
  "ta","tes","notre","votre","vos","cet","cette","ces","ceux","celle","celui","quel","quelle","quels","quelles",
  "quand","comment","pourquoi","va","fait","peut","doit","autre","autres","peu","puis","alors","tout","toute",
  "jeune","homme","monde","vie","jour","ans","long","seul","seule","afin","vers","ainsi","deux","trois","chaque",
]);

function synopsisTokens(text: string): Set<string> {
  return new Set(
    text.toLowerCase()
      .replace(/[^a-zàâäéèêëîïôùûüç\s]/g, " ")
      .split(/\s+/)
      .filter(w => w.length > 3 && !STOPWORDS.has(w))
  );
}

function getSimilar(serie: typeof SERIES[0], count = 6) {
  const tags = (serie.tags ?? "").split("·").map((t: string) => t.trim().toLowerCase());
  const tokens = synopsisTokens(serie.synopsis ?? "");

  return SERIES
    .filter(s => s.slug !== serie.slug && s.published !== false)
    .map(s => {
      const sTags = (s.tags ?? "").split("·").map((t: string) => t.trim().toLowerCase());
      const sTokens = synopsisTokens(s.synopsis ?? "");
      const tagScore = tags.filter((t: string) => sTags.includes(t)).length * 3;
      const synopsisScore = [...tokens].filter(w => sTokens.has(w)).length;
      const categoryBonus = s.category === serie.category ? 1 : 0;
      return { ...s, score: tagScore + synopsisScore + categoryBonus };
    })
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, count);
}

export default function SeriePage({ params }: { params: { slug: string } }) {
  const serie = SERIES.find(s => s.slug === params.slug);
  if (!serie) return notFound();
  if (serie.published === false) return notFound();

  const rank = starsToRank(serie.stars);
  const similar = getSimilar(serie);
  const editorHtml = (serie as any)?.reviewHtml ?? null;
  const stars = typeof serie.stars === "number" ? serie.stars : 0;
  const score10 = stars * 2;
  const pros: string[] = serie.pros ?? [];
  const cons: string[] = serie.cons ?? [];

  // Shops: utilise serie.shops en priorité, fallback legacy map
  const shopItems: { name: string; url: string; logo: string }[] =
    serie.shops && serie.shops.length > 0
      ? serie.shops
      : (SHOPS_MAP[serie.slug] ?? ["amazon", "fnac"]).map(key => {
          const s = SHOPS_INFO[key as keyof typeof SHOPS_INFO];
          return { name: s.name, url: s.getUrl(serie.title), logo: s.logo };
        });

  // Streaming: utilise serie.streaming en priorité, fallback legacy map
  const streamingItems: { name: string; url: string; logo: string }[] =
    serie.streaming && serie.streaming.length > 0
      ? serie.streaming
      : (STREAMING_MAP[serie.slug] ?? []).map(key => {
          const p = STREAMING_INFO[key as keyof typeof STREAMING_INFO];
          return { name: p.name, url: p.getUrl(serie.title), logo: p.logo };
        });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": serie.title,
    "description": serie.synopsis ?? `Critique et avis sur ${serie.title}`,
    "image": serie.cover ?? undefined,
    "url": `https://mangainsight.fr/series/${serie.slug}`,
    "genre": serie.tags?.split("·")[0].trim(),
    "inLanguage": "fr",
    "aggregateRating": stars > 0 ? {
      "@type": "AggregateRating",
      "ratingValue": score10,
      "bestRating": 10,
      "worstRating": 1,
      "ratingCount": 1,
    } : undefined,
  };

  const circumference = 2 * Math.PI * 34; // r=34

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style>{`
        .review-content p { margin-bottom: 1em; font-size: 0.9rem; color: rgba(255,255,255,0.65); line-height: 1.85; }
        .review-content strong { color: #fff; }
        .review-content h2, .review-content h3 { font-family: ${FH}; color: #fff; margin: 1.5em 0 0.5em; letter-spacing: 0.06em; text-transform: uppercase; }
        .similar-card:hover { border-color: rgba(224,48,48,0.4) !important; transform: translateY(-4px); }
        .similar-card { transition: all 0.25s; }
      `}</style>

      {/* ── HERO ── */}
      <div style={{ position: "relative", minHeight: 480, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        {/* Cover floutée en fond */}
        {serie.cover && (
          <div style={{
            position: "absolute", inset: 0, zIndex: 0,
            backgroundImage: `url(${serie.cover})`,
            backgroundSize: "cover", backgroundPosition: "center top",
            filter: "blur(22px) saturate(1.2)", transform: "scale(1.1)",
          }} />
        )}
        {/* Gradient sombre */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to top, #0a0a0a 30%, rgba(10,10,10,0.75) 65%, rgba(10,10,10,0.4) 100%)" }} />
        {/* Stripe rouge gauche */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: A, zIndex: 2 }} />

        {/* Retour */}
        <div style={{ position: "absolute", top: 20, left: 24, zIndex: 10 }}>
          <Link href="/critiques" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontSize: 12, color: "rgba(255,255,255,0.5)",
            background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)",
            padding: "6px 14px", borderRadius: 4, border: "1px solid rgba(255,255,255,0.1)",
            textDecoration: "none", fontFamily: FH, letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}>
            ← Critiques
          </Link>
        </div>

        {/* Contenu hero */}
        <div style={{
          position: "relative", zIndex: 2, width: "100%",
          maxWidth: 1100, margin: "0 auto",
          padding: "0 clamp(20px,4vw,48px) 48px",
          display: "grid", gridTemplateColumns: "auto 1fr", gap: 32, alignItems: "flex-end",
        }} className="hero-grid-chrome">
          {/* Cover nette */}
          {serie.cover && (
            <div style={{
              width: 180, borderRadius: 4, overflow: "hidden",
              border: "2px solid rgba(255,255,255,0.12)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
              transform: "translateY(24px)", flexShrink: 0,
            }} className="hero-cover-chrome">
              <Image src={serie.cover} alt={serie.title} width={180} height={270} style={{ width: "100%", display: "block" }} />
            </div>
          )}

          <div>
            {/* Badges */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
                padding: "4px 10px", borderRadius: 4,
                background: serie.category === "manhwa" ? "rgba(236,72,153,0.15)" : "rgba(255,255,255,0.08)",
                border: `1px solid ${serie.category === "manhwa" ? "rgba(236,72,153,0.3)" : "rgba(255,255,255,0.15)"}`,
                color: serie.category === "manhwa" ? "rgb(249,168,212)" : "rgba(255,255,255,0.7)",
                fontFamily: FH,
              }}>
                {serie.category === "manhwa" ? "🇰🇷 Manhwa" : "🇯🇵 Manga"}
              </span>
              {rank && (
                <span style={{
                  fontFamily: FH, fontSize: 22, fontWeight: 800,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  padding: "4px 16px", borderRadius: 4,
                  background: rank === "SSS" ? "rgba(251,191,36,0.2)" : `rgba(224,48,48,0.15)`,
                  border: `1px solid ${rank === "SSS" ? "rgba(251,191,36,0.4)" : "rgba(224,48,48,0.3)"}`,
                  color: rank === "SSS" ? "rgb(253,224,71)" : "#e03030",
                }}>
                  Rang {rank}
                </span>
              )}
            </div>

            <h1 style={{
              fontFamily: FH,
              fontSize: "clamp(2rem,5vw,4rem)",
              fontWeight: 800,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "#fff",
              lineHeight: 0.95,
              marginBottom: 10,
            }}>
              {serie.title}
            </h1>

            {serie.tags && (
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 16, letterSpacing: "0.04em" }}>
                {serie.tags}
              </p>
            )}

            {/* Score notre note */}
            {stars > 0 && (
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16, flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontFamily: FH, fontSize: 28, fontWeight: 800, color: A, letterSpacing: "0.04em" }}>
                    {score10}
                  </span>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", fontFamily: FH }}>/10</span>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", fontFamily: FH, letterSpacing: "0.1em", textTransform: "uppercase", marginLeft: 4 }}>
                    Notre note
                  </span>
                </div>
              </div>
            )}

            {/* Status + tags pills */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, marginBottom: 20 }}>
              {serie.status && (
                <span style={{
                  fontSize: 11, fontWeight: 700, fontFamily: FH,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  padding: "4px 10px", borderRadius: 4,
                  ...(serie.status === "terminé"
                    ? { background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.25)", color: "rgba(252,165,165,0.9)" }
                    : serie.status === "en cours"
                    ? { background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)", color: "rgba(134,239,172,0.9)" }
                    : { background: "rgba(251,146,60,0.12)", border: "1px solid rgba(251,146,60,0.25)", color: "rgba(253,186,116,0.9)" }),
                }}>
                  {serie.status === "terminé" ? "✓ Terminé" : serie.status === "en cours" ? "⟳ En cours" : "⏸ En pause"}
                </span>
              )}
            </div>

            {/* CTA buttons */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {shopItems[0] && (
                <a href={shopItems[0].url} target="_blank" rel="noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "10px 20px", borderRadius: 4, background: A,
                  color: "#fff", fontSize: 13, fontWeight: 700, textDecoration: "none",
                  fontFamily: FH, letterSpacing: "0.08em", textTransform: "uppercase",
                  boxShadow: "0 4px 20px rgba(224,48,48,0.3)", transition: "all 0.15s",
                }}>
                  📚 Acheter
                </a>
              )}
              {streamingItems[0] && (
                <a href={streamingItems[0].url} target="_blank" rel="noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "10px 20px", borderRadius: 4,
                  background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.8)", fontSize: 13, fontWeight: 700, textDecoration: "none",
                  fontFamily: FH, letterSpacing: "0.08em", textTransform: "uppercase", transition: "all 0.15s",
                }}>
                  ▶ Voir l'animé
                </a>
              )}
            </div>
            <SerieActions slug={serie.slug} title={serie.title} />
          </div>
        </div>
      </div>

      {/* ── CONTENU ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px clamp(20px,4vw,48px) 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 40, alignItems: "start" }} className="serie-layout-chrome">

          {/* COLONNE PRINCIPALE */}
          <div>
            {/* Tabs : Synopsis / Critique / Pros-Cons / Acheter */}
            <SerieDetailTabs
              slug={serie.slug}
              synopsis={serie.synopsis}
              editorHtml={editorHtml}
              pros={pros}
              cons={cons}
              shops={shopItems}
              streaming={streamingItems}
            />

            {/* Commentaires lecteurs */}
            <div style={{ marginTop: 40 }}>
              <p style={{
                fontFamily: FH, fontSize: 11, fontWeight: 700,
                letterSpacing: "0.15em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)", marginBottom: 16,
                display: "flex", alignItems: "center", gap: 12,
              }}>
                Avis des lecteurs
                <span style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
              </p>
              <Comments slug={params.slug} title={serie.title} />
            </div>
          </div>

          {/* ── SIDEBAR ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16, position: "sticky", top: 72 }} className="serie-sidebar-chrome">

            {/* Scores : rédaction + AniList + lecteurs */}
            <SidebarScores slug={serie.slug} serieTitle={serie.title} notrNote={score10} anilistId={serie.anilistId} />

            {/* Rang */}
            {rank && (
              <div style={{ textAlign: "center" }}>
                <span style={{
                  fontFamily: FH, fontSize: 18, fontWeight: 800,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  padding: "6px 18px", borderRadius: 4,
                  background: rank === "SSS" ? "rgba(251,191,36,0.15)" : "rgba(224,48,48,0.12)",
                  border: `1px solid ${rank === "SSS" ? "rgba(251,191,36,0.35)" : "rgba(224,48,48,0.25)"}`,
                  color: rank === "SSS" ? "rgb(253,224,71)" : A,
                  display: "inline-block",
                }}>
                  Rang {rank}
                </span>
              </div>
            )}

            {/* Informations */}
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 4, padding: 20 }}>
              <p style={{
                fontFamily: FH, fontSize: 10, fontWeight: 700,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)", marginBottom: 14,
              }}>
                Informations
              </p>

              {[
                { label: "Type", value: serie.category === "manhwa" ? "Manhwa 🇰🇷" : "Manga 🇯🇵" },
                ...(serie.author ? [{ label: "Auteur", value: serie.author }] : []),
                ...(serie.year ? [{ label: "Début", value: String(serie.year) }] : []),
                ...(serie.volumes ? [{ label: "Tomes", value: `${serie.volumes} tomes` }] : []),
                ...(serie.chapters ? [{ label: "Chapitres", value: `${serie.chapters} chap.` }] : []),
                ...(serie.tags ? [{ label: "Genres", value: serie.tags.split("·")[0].trim() }] : []),
              ].map(({ label, value }) => (
                <div key={label} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: 13,
                }}>
                  <span style={{ color: "rgba(255,255,255,0.35)", fontFamily: FH, fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase" }}>{label}</span>
                  <span style={{ color: "#fff", fontWeight: 600, textAlign: "right" }}>{value}</span>
                </div>
              ))}
            </div>

            {/* Tags liens */}
            {serie.tags && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {serie.tags.split("·").map(t => t.trim()).filter(Boolean).map(tag => (
                  <Link key={tag} href={`/critiques?tag=${encodeURIComponent(tag)}`} style={{
                    fontSize: 11, fontFamily: FH, fontWeight: 700,
                    letterSpacing: "0.08em", textTransform: "uppercase",
                    padding: "4px 10px", borderRadius: 4,
                    background: "rgba(224,48,48,0.08)", border: "1px solid rgba(224,48,48,0.2)",
                    color: "rgba(224,120,120,0.9)", textDecoration: "none",
                  }}>
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── SÉRIES SIMILAIRES ── */}
        {similar.length > 0 && (
          <div style={{ marginTop: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
              <div style={{ width: 4, height: 20, background: A, borderRadius: 2, flexShrink: 0 }} />
              <p style={{
                fontFamily: FH, fontSize: 13, fontWeight: 800,
                letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)",
              }}>
                Séries similaires
              </p>
              <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 12 }} className="similar-grid-chrome">
              {similar.map(s => (
                <Link key={s.slug} href={`/series/${s.slug}`} style={{ textDecoration: "none" }}>
                  <div
                    className="similar-card"
                    style={{ borderRadius: 4, overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <div style={{ aspectRatio: "2/3", overflow: "hidden", position: "relative" }}>
                      <CoverImage
                        src={s.cover}
                        alt={s.title}
                        className="w-full h-full object-cover"
                        style={{ transition: "transform 0.4s" }}
                      />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)" }} />
                    </div>
                    <div style={{ padding: "8px 10px", background: "rgba(255,255,255,0.02)" }}>
                      <p style={{
                        fontFamily: FH, fontSize: 12, fontWeight: 700,
                        color: "#fff", letterSpacing: "0.04em",
                        overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                        textTransform: "uppercase",
                      }}>
                        {s.title}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .serie-layout-chrome { grid-template-columns: 1fr !important; }
          .serie-sidebar-chrome { position: static !important; }
          .similar-grid-chrome { grid-template-columns: repeat(3,1fr) !important; }
        }
        @media (max-width: 600px) {
          .hero-grid-chrome { grid-template-columns: 1fr !important; }
          .hero-cover-chrome { display: none !important; }
          .similar-grid-chrome { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </div>
  );
}
