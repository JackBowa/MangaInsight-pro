"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { SERIES } from "@/data/series";
import { supabase } from "@/lib/lib/supabase/client";

const GENRES = ["Tout", "Action", "Aventure", "Fantasy", "Shonen", "Thriller", "Sport", "Reincarnation", "Surnaturel"];

const FEATURED_SLUGS = ["one-piece", "solo-leveling", "l-attaque-des-titans", "death-note", "blue-lock", "bleach"];

function StarRating({ stars }: { stars?: number }) {
  if (!stars) return null;
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className={`w-2.5 h-2.5 ${i <= stars ? "text-brand-500" : "text-white/15"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function CritiqueCard({ slug, title, cover, tags, stars, category, avg }: {
  slug: string; title: string; cover?: string; tags?: string;
  stars?: number; category?: string; avg?: number | null;
}) {
  const tagList = (tags ?? "").split("·").map((t) => t.trim()).filter(Boolean).slice(0, 3);

  return (
    <Link
      href={`/series/${slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/7 bg-white/3 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-brand-500/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_40px_rgba(139,92,246,0.08)]"
    >
      {/* lueur hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10" />

      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "2/3" }}>
        <img
          src={cover || "/_placeholder.jpg"}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            if (!img.dataset.fallback) { img.dataset.fallback = "1"; img.src = "/_placeholder.jpg"; }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05050e]/97 via-[#05050e]/20 to-transparent opacity-65 transition-opacity duration-300 group-hover:opacity-100" />
        {/* lueur violette depuis le bas */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(139,92,246,0.28)_0%,transparent_65%)] opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

        {/* Badge categorie */}
        {category && (
          <span className={`absolute left-2 top-2 z-10 rounded-full text-[0.58rem] font-bold tracking-widest uppercase px-2 py-0.5 border ${
            category === "manhwa"
              ? "bg-pink-500/20 border-pink-500/35 text-pink-300"
              : "bg-indigo-500/20 border-indigo-500/35 text-indigo-300"
          }`}>
            {category}
          </span>
        )}

        {/* Etoiles */}
        <div className="absolute top-2 right-2 z-10">
          <StarRating stars={stars} />
        </div>

        {/* Tags */}
        {tagList.length > 0 && (
          <div className="absolute bottom-2 left-2 right-2 z-10 flex flex-wrap gap-1">
            {tagList.map((t) => (
              <span key={t} className="rounded-full bg-black/60 border border-white/10 px-1.5 py-0.5 text-[0.6rem] text-white/75">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Corps */}
      <div className="relative z-10 p-3">
        <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }} className="text-[1.05rem] text-white leading-tight mb-1">
          {title}
        </h3>
        {typeof avg === "number" && (
          <p className="text-[0.68rem] text-white/35">
            Lecteurs : <span className="text-brand-400 font-bold">{avg.toFixed(1)}/5</span>
          </p>
        )}
      </div>
    </Link>
  );
}

export default function CritiquesPage() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState<"all" | "manga" | "manhwa">("all");
  const [genre, setGenre] = useState("Tout");
  const [sort, setSort] = useState<"recent" | "title" | "rating">("recent");
  const [avgs, setAvgs] = useState<Record<string, number>>({});
  const [loadingAvgs, setLoadingAvgs] = useState(false);

  const mangaCount = SERIES.filter((s) => s.category === "manga").length;
  const manhwaCount = SERIES.filter((s) => s.category === "manhwa").length;

  const featuredSeries = useMemo(() =>
    FEATURED_SLUGS.map((slug) => SERIES.find((s) => s.slug === slug)).filter(Boolean).slice(0, 6) as typeof SERIES,
    []
  );

  const filtered = useMemo(() => {
    let list = SERIES.slice();
    if (category !== "all") list = list.filter((s) => s.category === category);
    if (genre !== "Tout") list = list.filter((s) => (s.tags ?? "").toLowerCase().includes(genre.toLowerCase()));
    if (q.trim()) {
      const needle = q.toLowerCase();
      list = list.filter((s) =>
        s.title.toLowerCase().includes(needle) ||
        (s.tags ?? "").toLowerCase().includes(needle) ||
        (s.synopsis ?? "").toLowerCase().includes(needle)
      );
    }
    if (sort === "title") list.sort((a, b) => a.title.localeCompare(b.title, "fr"));
    else if (sort === "rating") list.sort((a, b) => (b.stars ?? 0) - (a.stars ?? 0));
    else list = list.reverse();
    return list;
  }, [q, category, genre, sort]);

  useEffect(() => {
    const slugs = Array.from(new Set(filtered.map((s) => s.slug))).slice(0, 200);
    if (!slugs.length) { setAvgs({}); return; }
    let cancelled = false;
    setLoadingAvgs(true);
    supabase.from("comments").select("slug, stars").in("slug", slugs).eq("approved", true)
      .then(({ data, error }) => {
        if (cancelled) return;
        setLoadingAvgs(false);
        if (error || !data) { setAvgs({}); return; }
        const sums: Record<string, { s: number; n: number }> = {};
        for (const row of data as { slug: string; stars: number }[]) {
          if (!sums[row.slug]) sums[row.slug] = { s: 0, n: 0 };
          sums[row.slug].s += row.stars ?? 0;
          sums[row.slug].n += 1;
        }
        const out: Record<string, number> = {};
        Object.keys(sums).forEach((k) => {
          const { s, n } = sums[k];
          if (n > 0) out[k] = Math.round((s / n) * 10) / 10;
        });
        setAvgs(out);
      });
    return () => { cancelled = true; };
  }, [filtered]);

  return (
    <div className="min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        @keyframes floatCover { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes pulseOrb { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.8)} }
        .float-1{animation:floatCover 7s ease-in-out infinite}
        .float-2{animation:floatCover 7s ease-in-out 1s infinite}
        .float-3{animation:floatCover 7s ease-in-out 2s infinite}
        .float-4{animation:floatCover 7s ease-in-out 0.5s infinite}
        .float-5{animation:floatCover 7s ease-in-out 1.5s infinite}
        .float-6{animation:floatCover 7s ease-in-out 2.5s infinite}
        .pulse-dot{animation:pulseOrb 2s infinite}
        .hero-grid{background-image:linear-gradient(rgba(139,92,246,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.06) 1px,transparent 1px);background-size:40px 40px}
      `}</style>

      {/* ── HERO ── */}
      <section className="relative min-h-[320px] flex items-center overflow-hidden px-6 md:px-12 hero-grid">
        {/* fond */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-700/50 via-brand-900/30 to-transparent" />
        {/* orbes */}
        <div className="absolute -top-20 left-[10%] w-72 h-72 rounded-full bg-brand-500/18 blur-[60px] pointer-events-none" />
        <div className="absolute -bottom-10 left-[35%] w-48 h-48 rounded-full bg-brand-400/12 blur-[60px] pointer-events-none" />

        {/* contenu */}
        <div className="relative z-10 max-w-lg py-14">
          <div className="inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.18em] uppercase text-brand-300 bg-brand-500/12 border border-brand-500/25 px-3.5 py-1.5 rounded-full mb-4">
            <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-brand-400 inline-block" />
            Critiques · Manhwa · Manga
          </div>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.03em" }} className="text-[clamp(3.5rem,7vw,5.5rem)] text-white leading-[0.92] mb-4">
            Toutes<br />les <span className="text-brand-500">critiques</span>
          </h1>
          <p className="text-[0.95rem] text-white/50 leading-relaxed mb-6 max-w-sm">
            Explore, filtre et decouvre les meilleures series notees par la redaction.
          </p>
          <div className="flex gap-7">
            {[
              { num: SERIES.length, label: "Series" },
              { num: mangaCount, label: "Mangas" },
              { num: manhwaCount, label: "Manhwas" },
            ].map(({ num, label }) => (
              <div key={label}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-[1.8rem] text-white leading-none tracking-wide">{num}</div>
                <div className="text-[0.65rem] font-bold tracking-[0.12em] uppercase text-white/35 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* covers flottantes */}
        <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 hidden md:grid grid-cols-3 gap-2 z-10" style={{ gridTemplateColumns: "repeat(3, 90px)" }}>
          {featuredSeries.map((s, i) => (
            <div key={s.slug} className={`float-${i + 1} rounded-xl overflow-hidden border border-white/10 shadow-2xl`} style={{ aspectRatio: "2/3", marginTop: i % 2 === 1 ? "16px" : "0" }}>
              <img src={s.cover || "/_placeholder.jpg"} alt={s.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => { const img = e.currentTarget as HTMLImageElement; if (!img.dataset.fb) { img.dataset.fb = "1"; img.src = "/_placeholder.jpg"; } }} />
            </div>
          ))}
        </div>
      </section>

      {/* fade */}
      <div className="h-14 bg-gradient-to-b from-transparent to-[#0b0b10] -mt-0.5 relative z-10" />

      {/* ── CONTENU ── */}
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">

        {/* Filtres */}
        <div className="bg-white/3 border border-white/7 rounded-2xl p-4 md:p-5 mb-7 flex flex-wrap gap-3 items-center">

          {/* Recherche */}
          <div className="relative flex-1 min-w-[200px]">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Rechercher un titre, un genre..."
              className="w-full bg-black/45 border border-white/9 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-brand-500/50 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.08)] placeholder:text-white/25 transition-all"
            />
            {q && (
              <button onClick={() => setQ("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-xs">✕</button>
            )}
          </div>

          {/* Onglets categorie */}
          <div className="flex gap-1 bg-black/35 rounded-xl p-1 border border-white/6">
            {([
              { key: "all", label: "Tout", count: SERIES.length },
              { key: "manga", label: "Manga", count: mangaCount },
              { key: "manhwa", label: "Manhwa", count: manhwaCount },
            ] as const).map((opt) => (
              <button key={opt.key} onClick={() => setCategory(opt.key)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-bold transition-all ${
                  category === opt.key ? "bg-brand-500 text-white shadow-lg shadow-brand-500/30" : "text-white/45 hover:text-white hover:bg-white/6"
                }`}>
                {opt.label}
                <span className={`text-[0.65rem] px-1.5 py-0.5 rounded ${category === opt.key ? "bg-white/25" : "bg-white/10"}`}>{opt.count}</span>
              </button>
            ))}
          </div>

          {/* Tri */}
          <select value={sort} onChange={(e) => setSort(e.target.value as any)}
            className="bg-black/40 border border-white/9 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-brand-500/50 text-white/65">
            <option value="recent">Plus recents</option>
            <option value="title">Titre A-Z</option>
            <option value="rating">Meilleure note</option>
          </select>

          {/* Chips genres */}
          <div className="w-full flex flex-wrap gap-2 pt-3 border-t border-white/5">
            {GENRES.map((g) => (
              <button key={g} onClick={() => setGenre(g)}
                className={`px-3 py-1 rounded-full text-xs font-bold border transition-all ${
                  genre === g
                    ? "bg-brand-500/18 border-brand-500/45 text-brand-300"
                    : "bg-transparent border-white/9 text-white/45 hover:border-white/20 hover:text-white hover:bg-white/4"
                }`}>
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Compteur */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-white/35">
            <span className="text-white font-bold text-base">{filtered.length}</span> resultats
          </p>
          {loadingAvgs && <p className="text-xs text-white/25">Calcul des notes...</p>}
        </div>

        {/* Grille */}
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-white/25">
            <div className="text-5xl mb-4">🔍</div>
            <p style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-2xl text-white/35 mb-2">Aucun resultat</p>
            <p className="text-sm">Essaie d&apos;autres mots-cles ou filtres</p>
          </div>
        ) : (
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {filtered.map((s) => (
              <CritiqueCard
                key={s.slug}
                slug={s.slug}
                title={s.title}
                cover={s.cover}
                tags={s.tags}
                stars={s.stars as number | undefined}
                category={s.category}
                avg={avgs[s.slug]}
              />
            ))}
          </div>
        )}

        <div className="h-20" />
      </div>
    </div>
  );
}
