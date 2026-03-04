"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { SERIES } from "@/data/series";
import { supabase } from "@/lib/lib/supabase/client";

const GENRES = ["Tout", "Action", "Aventure", "Fantasy", "Shonen", "Thriller", "Sport", "Reincarnation", "Surnaturel"];

function StarRating({ stars }: { stars?: number }) {
  if (!stars) return null;
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className={`w-2.5 h-2.5 ${i <= stars ? "text-brand" : "text-white/15"}`} fill="currentColor" viewBox="0 0 20 20">
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
  const src = cover || `/_placeholder.jpg`;

  return (
    <Link href={`/series/${slug}`} className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/3 hover:border-brand/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        .card-title-bebas { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.04em; }
      `}</style>

      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "2/3" }}>
        <img
          src={src}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            if (!img.dataset.fallback) {
              img.dataset.fallback = "1";
              img.src = "/_placeholder.jpg";
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badge categorie */}
        {category && (
          <span className={`absolute left-2 top-2 rounded-full text-[0.58rem] font-bold tracking-widest uppercase px-2 py-0.5 border ${
            category === "manhwa"
              ? "bg-pink-500/20 border-pink-500/35 text-pink-300"
              : "bg-indigo-500/20 border-indigo-500/35 text-indigo-300"
          }`}>
            {category}
          </span>
        )}

        {/* Etoiles */}
        <div className="absolute top-2 right-2">
          <StarRating stars={stars} />
        </div>

        {/* Tags */}
        {tagList.length > 0 && (
          <div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1">
            {tagList.map((t) => (
              <span key={t} className="rounded-full bg-black/55 border border-white/10 px-1.5 py-0.5 text-[0.6rem] text-white/80">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Corps */}
      <div className="p-3">
        <h3 className="card-title-bebas text-[1rem] text-white leading-tight mb-1">{title}</h3>
        {typeof avg === "number" && (
          <p className="text-[0.68rem] text-white/40">
            Lecteurs : <span className="text-brand-light font-bold">{avg.toFixed(1)}/5</span>
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

  const filtered = useMemo(() => {
    let list = SERIES.slice();

    if (category !== "all") list = list.filter((s) => s.category === category);

    if (genre !== "Tout") {
      list = list.filter((s) => (s.tags ?? "").toLowerCase().includes(genre.toLowerCase()));
    }

    if (q.trim()) {
      const needle = q.toLowerCase();
      list = list.filter(
        (s) =>
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
    if (slugs.length === 0) { setAvgs({}); return; }
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
    <div className="mx-auto max-w-7xl">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        .bebas { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.04em; }
        .eyebrow::before { content: ''; display: inline-block; width: 20px; height: 2px; background: #a78bfa; border-radius: 1px; margin-right: 8px; vertical-align: middle; }
      `}</style>

      {/* Header */}
      <div className="py-10">
        <p className="eyebrow text-[0.72rem] font-bold tracking-widest uppercase text-brand-light mb-3">Catalogue complet</p>
        <h1 className="bebas text-5xl md:text-6xl text-white mb-2">Critiques</h1>
        <p className="text-sm text-white/40">
          <span className="text-brand-light font-bold">{SERIES.length}</span> series referencees · Manga & Manhwa
        </p>
      </div>

      {/* Barre de filtres */}
      <div className="bg-white/3 border border-white/7 rounded-2xl p-4 mb-8 flex flex-wrap gap-4 items-center">

        {/* Recherche */}
        <div className="relative flex-1 min-w-[200px]">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Rechercher un titre, un genre..."
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-brand/50 placeholder:text-white/30 transition-colors"
          />
          {q && (
            <button onClick={() => setQ("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-xs">✕</button>
          )}
        </div>

        {/* Onglets categorie */}
        <div className="flex gap-1.5 bg-black/30 rounded-xl p-1 border border-white/6">
          {([
            { key: "all", label: "Tout", count: SERIES.length },
            { key: "manga", label: "Manga", count: mangaCount },
            { key: "manhwa", label: "Manhwa", count: manhwaCount },
          ] as const).map((opt) => (
            <button
              key={opt.key}
              onClick={() => setCategory(opt.key)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-bold transition-all ${
                category === opt.key
                  ? "bg-brand text-white shadow-lg shadow-brand/30"
                  : "text-white/50 hover:text-white hover:bg-white/6"
              }`}
            >
              {opt.label}
              <span className={`text-[0.65rem] px-1.5 py-0.5 rounded ${category === opt.key ? "bg-white/25" : "bg-white/10"}`}>
                {opt.count}
              </span>
            </button>
          ))}
        </div>

        {/* Tri */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as any)}
          className="bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-brand/50 text-white/70"
        >
          <option value="recent">Plus recents</option>
          <option value="title">Titre A-Z</option>
          <option value="rating">Meilleure note</option>
        </select>

        {/* Chips genres */}
        <div className="w-full flex flex-wrap gap-2 pt-3 border-t border-white/6">
          {GENRES.map((g) => (
            <button
              key={g}
              onClick={() => setGenre(g)}
              className={`px-3 py-1 rounded-full text-xs font-bold border transition-all ${
                genre === g
                  ? "bg-brand/20 border-brand/50 text-brand-light"
                  : "bg-transparent border-white/10 text-white/50 hover:border-white/20 hover:text-white"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* Compteur resultats */}
      <div className="flex items-center justify-between mb-5">
        <p className="text-sm text-white/40">
          <span className="text-white font-bold">{filtered.length}</span> resultats
        </p>
        {loadingAvgs && <p className="text-xs text-white/30">Calcul des notes lecteurs...</p>}
      </div>

      {/* Grille */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-white/30">
          <div className="text-5xl mb-4">🔍</div>
          <p className="bebas text-2xl text-white/40 mb-2">Aucun resultat</p>
          <p className="text-sm">Essayez d&apos;autres mots-cles ou filtres</p>
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
    </div>
  );
}
