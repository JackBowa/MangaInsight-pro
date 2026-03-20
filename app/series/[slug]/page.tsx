import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SERIES } from "@/data/series";
import { STREAMING_MAP, STREAMING_INFO } from "@/data/streaming";
import { SHOPS_MAP, SHOPS_INFO } from "@/data/shops";
import Comments from "./Comments";
import CoverImage from "./CoverImage";
import SerieActions from "./SerieActions";

export function generateStaticParams() {
  return SERIES.map(s => ({ slug: s.slug }));
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

function formatDate(dateStr?: string): string {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

// Séries similaires = même tags en commun, exclut la série courante
function getSimilar(serie: typeof SERIES[0], count = 6) {
  const tags = (serie.tags ?? "").split("·").map(t => t.trim().toLowerCase());
  return SERIES
    .filter(s => s.slug !== serie.slug)
    .map(s => {
      const sTags = (s.tags ?? "").split("·").map(t => t.trim().toLowerCase());
      const common = tags.filter(t => sTags.includes(t)).length;
      return { ...s, common };
    })
    .filter(s => s.common > 0)
    .sort((a, b) => b.common - a.common)
    .slice(0, count);
}

export default function SeriePage({ params }: { params: { slug: string } }) {
  const serie = SERIES.find(s => s.slug === params.slug);
  if (!serie) return notFound();

  const rank = starsToRank(serie.stars);
  const similar = getSimilar(serie);

  const editorHtml = (serie as any)?.editorReview?.html ?? (serie as any)?.reviewHtml ?? null;
  const stars = typeof serie.stars === "number" ? serie.stars : 0;

  const pros: string[] = serie.pros ?? [];
  const cons: string[] = serie.cons ?? [];
  const hasProscons = pros.length > 0 || cons.length > 0;

  const RANK_STYLES: Record<string, string> = {
    SSS: "bg-amber-400/20 border-amber-400/40 text-amber-300",
    SS:  "bg-red-400/18 border-red-400/35 text-red-300",
    S:   "bg-orange-400/18 border-orange-400/35 text-orange-300",
    A:   "bg-green-400/15 border-green-400/30 text-green-300",
    B:   "bg-blue-400/15 border-blue-400/30 text-blue-300",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": serie.title,
    "description": serie.synopsis ?? `Critique et avis sur ${serie.title}`,
    "image": serie.cover ? `https://mangainsight.fr${serie.cover}` : undefined,
    "url": `https://mangainsight.fr/series/${serie.slug}`,
    "genre": serie.tags?.split("·")[0].trim(),
    "inLanguage": "fr",
    "aggregateRating": stars > 0 ? {
      "@type": "AggregateRating",
      "ratingValue": stars,
      "bestRating": 5,
      "worstRating": 1,
      "ratingCount": 1,
    } : undefined,
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        .review-content p { margin-bottom: 1em; font-size: 0.88rem; color: rgba(255,255,255,0.6); line-height: 1.85; }
        .review-content strong { color: #fff; }
      `}</style>

      {/* ── HERO CINÉMATIQUE ── */}
      <div className="relative min-h-[500px] flex items-end overflow-hidden">
        {/* cover floutée en fond */}
        {serie.cover && (
          <div className="absolute inset-0 z-0"
            style={{ backgroundImage: `url(${serie.cover})`, backgroundSize: "cover", backgroundPosition: "center top", filter: "blur(20px) saturate(1.3)", transform: "scale(1.1)" }} />
        )}
        {/* overlays */}
        <div className="absolute inset-0 z-1 bg-gradient-to-t from-[#0b0b10] via-[#0b0b10]/80 to-[#0b0b10]/40" />
        <div className="absolute inset-0 z-1" style={{ backgroundImage: "linear-gradient(rgba(139,92,246,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.04) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />

        {/* Bouton retour */}
        <div className="absolute top-4 left-6 z-10">
          <Link href="/critiques" className="inline-flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
            ← Retour aux critiques
          </Link>
        </div>

        {/* contenu hero */}
        <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 md:px-8 pb-12 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-end">
          {/* cover nette */}
          {serie.cover && (
            <div className="hidden md:block w-[200px] rounded-2xl overflow-hidden border-2 border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.6)] translate-y-8 flex-shrink-0">
              <Image src={serie.cover} alt={serie.title} width={200} height={300} className="w-full block" />
            </div>
          )}
          <div className="pb-2">
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-[0.68rem] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full border ${serie.category === "manhwa" ? "bg-pink-500/20 border-pink-500/35 text-pink-300" : "bg-indigo-500/20 border-indigo-500/35 text-indigo-300"}`}>
                {serie.category === "manhwa" ? "🇰🇷 Manhwa" : "🇯🇵 Manga"}
              </span>
              {rank && (
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.08em" }}
                  className={`text-sm px-3 py-1 rounded-full border ${RANK_STYLES[rank] ?? ""}`}>
                  Rang {rank}
                </span>
              )}
            </div>

            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
              className="text-[clamp(2.8rem,6vw,5rem)] text-white leading-[0.95] mb-2">
              {serie.title}
            </h1>

            {serie.tags && <p className="text-sm text-white/45 mb-4">{serie.tags}</p>}

            {/* Étoiles */}
            {stars > 0 && (
              <div className="flex items-center gap-1 mb-5">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className={`w-5 h-5 ${i <= stars ? "text-brand-500" : "text-white/15"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-xs text-white/30 ml-2">Note rédaction</span>
              </div>
            )}

            <div className="flex gap-2 flex-wrap">
              {serie.shops?.[0] && (
                <a href={serie.shops[0].url} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-500 text-white text-sm font-bold hover:bg-brand-600 transition-all hover:-translate-y-0.5 shadow-lg shadow-brand-500/30">
                  📚 Acheter le manga
                </a>
              )}
              {serie.streaming?.[0] && (
                <a href={serie.streaming[0].url} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/8 border border-white/12 text-white/80 text-sm font-bold hover:bg-white/12 transition-all hover:-translate-y-0.5">
                  ▶ Voir l'animé
                </a>
              )}
            </div>
            <SerieActions slug={serie.slug} title={serie.title} />
          </div>
        </div>
      </div>

      {/* fade */}
      <div className="h-10 bg-gradient-to-b from-transparent to-[#0b0b10] -mt-0.5 relative z-10" />

      {/* ── CONTENU ── */}
      <div className="mx-auto max-w-[1100px] px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 items-start">

          {/* COLONNE PRINCIPALE */}
          <div>

            {/* Synopsis */}
            {serie.synopsis && (
              <div className="mb-8">
                <p className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-white/30 mb-3 flex items-center gap-3 after:flex-1 after:h-px after:bg-white/6">📖 Synopsis</p>
                <div className="bg-white/3 border border-white/7 rounded-2xl p-6 md:p-7">
                  <p className="text-sm text-white/60 leading-[1.85]">{serie.synopsis}</p>
                </div>
              </div>
            )}

            {/* Pros / Cons */}
            {hasProscons && (
              <div className="mb-8">
                <p className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-white/30 mb-3 flex items-center gap-3 after:flex-1 after:h-px after:bg-white/6">⚖️ Points forts & points faibles</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-2xl p-5 bg-emerald-500/7 border border-emerald-500/20">
                    <p className="text-[0.68rem] font-bold tracking-[0.1em] uppercase text-emerald-400 mb-3">✓ Points forts</p>
                    <ul className="flex flex-col gap-2">
                      {pros.map((p, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-white/65 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-1.5" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl p-5 bg-red-500/7 border border-red-500/18">
                    <p className="text-[0.68rem] font-bold tracking-[0.1em] uppercase text-red-400 mb-3">✗ Points faibles</p>
                    <ul className="flex flex-col gap-2">
                      {cons.map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-white/65 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-1.5" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Avis rédaction */}
            {editorHtml && (
              <div className="mb-8">
                <p className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-white/30 mb-3 flex items-center gap-3 after:flex-1 after:h-px after:bg-white/6">✍️ Avis de la rédaction</p>
                <div className="bg-white/3 border border-white/7 rounded-2xl p-6 md:p-7">
                  <div className="review-content" dangerouslySetInnerHTML={{ __html: editorHtml }} />
                </div>
              </div>
            )}

            {/* Commentaires */}
            <div className="mb-8">
              <p className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-white/30 mb-3 flex items-center gap-3 after:flex-1 after:h-px after:bg-white/6">💬 Avis des lecteurs</p>
              <Comments slug={params.slug} title={serie.title} />
            </div>
          </div>

          {/* ── SIDEBAR ── */}
          <div className="flex flex-col gap-4 lg:sticky lg:top-[72px]">

            {/* Note + Rang */}
            <div className="bg-white/3 border border-white/7 rounded-2xl p-5 text-center">
              {/* Cercle SVG */}
              <div className="relative w-20 h-20 mx-auto mb-2">
                <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="7" />
                  <circle cx="40" cy="40" r="34" fill="none" stroke="#8b5cf6" strokeWidth="7"
                    strokeDasharray={`${(stars / 5) * 213.6} 213.6`}
                    strokeLinecap="round" />
                </svg>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  className="absolute inset-0 flex items-center justify-center text-2xl text-white">
                  {stars}/5
                </div>
              </div>
              <p className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-white/30 mb-3">Note rédaction</p>
              {rank && (
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.08em" }}
                  className={`text-xl px-4 py-1 rounded-xl border ${RANK_STYLES[rank] ?? ""}`}>
                  Rang {rank}
                </span>
              )}
            </div>

            {/* Infos */}
            <div className="bg-white/3 border border-white/7 rounded-2xl p-5">
              <p className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-white/30 mb-3">Informations</p>
              {[
                { label: "Catégorie", value: serie.category === "manhwa" ? "Manhwa 🇰🇷" : "Manga 🇯🇵" },
                ...(serie.tags ? [{ label: "Genres", value: serie.tags.split("·")[0].trim() }] : []),
                ...(serie.addedAt ? [{ label: "Ajouté le", value: formatDate(serie.addedAt) }] : []),
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0 text-sm">
                  <span className="text-white/35">{label}</span>
                  <span className="text-white font-semibold text-right">{value}</span>
                </div>
              ))}
            </div>

            {/* Boutiques */}
            {(() => {
              const shopKeys = SHOPS_MAP[serie.slug] ?? ["amazon", "fnac", "rakuten"];
              return (
                <div className="bg-white/3 border border-white/7 rounded-2xl p-5">
                  <p className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-white/30 mb-3">🛒 Acheter</p>
                  <div className="flex flex-col gap-2">
                    {shopKeys.map((key) => {
                      const s = SHOPS_INFO[key];
                      return (
                        <a key={key} href={s.getUrl(serie.title)} target="_blank" rel="noreferrer"
                          className={`flex items-center gap-3 p-2.5 rounded-xl bg-white/4 border border-white/7 text-white/70 text-sm font-bold hover:bg-white/8 hover:text-white transition-all ${s.color}`}>
                          <img src={s.logo} alt={s.name} className="w-6 h-6 object-contain rounded" />
                          {s.name}
                          <svg className="w-3 h-3 ml-auto text-white/20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                          </svg>
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })()}

            {/* Streaming */}
            {(() => {
              const platforms = STREAMING_MAP[serie.slug] ?? null;
              if (!platforms || platforms.length === 0) return null;
              return (
                <div className="bg-white/3 border border-white/7 rounded-2xl p-5">
                  <p className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-white/30 mb-3">📺 Voir l'animé</p>
                  <div className="flex flex-col gap-2">
                    {platforms.map((key) => {
                      const p = STREAMING_INFO[key];
                      return (
                        <a key={key} href={p.getUrl(serie.title)} target="_blank" rel="noreferrer"
                          className={`flex items-center gap-3 p-2.5 rounded-xl bg-white/4 border border-white/7 text-white/70 text-sm font-bold hover:bg-white/8 hover:text-white transition-all ${p.color}`}>
                          <img src={p.logo} alt={p.name} className="w-6 h-6 object-contain rounded" />
                          {p.name}
                          <svg className="w-3 h-3 ml-auto text-white/20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                          </svg>
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })()}

          </div>
        </div>

        {/* ── SÉRIES SIMILAIRES ── */}
        {similar.length > 0 && (
          <div className="mt-8 mb-16">
            <p className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-white/30 mb-5 flex items-center gap-3 after:flex-1 after:h-px after:bg-white/6">🔥 Séries similaires</p>
            <div className="grid gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
              {similar.map(s => (
                <Link key={s.slug} href={`/series/${s.slug}`}
                  className="group block rounded-xl overflow-hidden border border-white/7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/40 hover:shadow-xl">
                  <div className="relative overflow-hidden" style={{ aspectRatio: "2/3" }}>
                    <CoverImage src={s.cover} alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05050e]/95 to-transparent opacity-60" />
                  </div>
                  <div className="p-2 bg-white/3">
                    <h4 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
                      className="text-[0.85rem] text-white leading-tight truncate">{s.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
