"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { SERIES } from "@/data/series";
import { supabase } from "@/lib/lib/supabase/client";

/* Mini étoiles pour affichage "rédac" */
function Stars({ n = 0 }: { n?: number }) {
  const c = Math.max(0, Math.min(5, n ?? 0));
  return (
    <div className="flex items-center gap-0.5" aria-label={`${c} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < c ? "text-yellow-400" : "text-gray-600"}>
          ★
        </span>
      ))}
    </div>
  );
}

/* Carte série — badge “note moyenne lecteurs” + fallback cover */
function CritiqueCard({
  slug,
  title,
  cover,
  tags,
  stars,
  category,
  avg,
}: {
  slug: string;
  title: string;
  cover?: string;
  tags?: string;
  stars?: number;
  category?: string;
  avg?: number | null;
}) {
  const tagList = (tags ?? "")
    .split("·")
    .map((t) => t.trim())
    .filter(Boolean)
    .slice(0, 3);

  // src avec fallback initial
  const src = cover || `/covers/${slug}.jpg`;

  return (
    <Link
      href={`/series/${slug}`}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition shadow-sm hover:shadow-lg"
    >
      {/* image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={src}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition scale-100 group-hover:scale-105"
          onError={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            // 1er fallback -> /covers/<slug>.jpg ; 2e -> placeholder
            if (!img.dataset.fallback) {
              img.dataset.fallback = "slug";
              img.src = `/covers/${slug}.jpg`;
            } else if (img.dataset.fallback === "slug") {
              img.dataset.fallback = "placeholder";
              img.src = "https://manga-insight-pro.vercel.app/_placeholder.jpg";
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/0" />

        {/* badge catégorie */}
        {category && (
          <span className="absolute left-2 top-2 rounded-full border border-white/15 bg-black/50 px-2 py-0.5 text-xs tracking-wide text-white/90">
            {category}
          </span>
        )}

        {/* badge note moyenne lecteurs */}
        {typeof avg === "number" && (
          <span className="absolute right-2 top-2 rounded-full border border-white/15 bg-black/60 px-2 py-0.5 text-xs text-white/90">
            Lecteurs : <b>{avg.toFixed(1)}/5</b>
          </span>
        )}

        {/* tags (3 max) */}
        {tagList.length > 0 && (
          <div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1.5">
            {tagList.map((t) => (
              <span
                key={t}
                className="rounded-full bg-black/50 px-2 py-0.5 text-[11px] border border-white/10 text-white/90"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* contenu */}
      <div className="p-3">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-base font-semibold line-clamp-2">{title}</h3>
          {typeof stars === "number" && (
            <div className="shrink-0">
              <Stars n={stars} />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function CritiquesPage() {
  // états
  const [q, setQ] = useState("");
  const [category, setCategory] = useState<"all" | "manga" | "manhwa">("all");
  const [sort, setSort] = useState<"recent" | "title" | "rating">("recent");

  // moyennes lecteurs par slug
  const [avgs, setAvgs] = useState<Record<string, number>>({});
  const [loadingAvgs, setLoadingAvgs] = useState(false);

  // filtrage + tri
  const filtered = useMemo(() => {
    let list = SERIES.slice();

    if (category !== "all") {
      list = list.filter((s) => (s.category ?? "").toLowerCase() === category);
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

    if (sort === "title") {
      list.sort((a, b) => a.title.localeCompare(b.title, "fr"));
    } else if (sort === "rating") {
      list.sort((a, b) => (b.stars ?? 0) - (a.stars ?? 0));
    } else {
      list = list.reverse(); // "recent"
    }

    return list;
  }, [q, category, sort]);

  /* ⚡️ Moyennes lecteurs pour les items visibles */
  useEffect(() => {
    const slugs = filtered.map((s) => s.slug);
    if (slugs.length === 0) {
      setAvgs({});
      return;
    }

    const uniq = Array.from(new Set(slugs)).slice(0, 200);
    let cancelled = false;
    setLoadingAvgs(true);
    supabase
      .from("comments")
      .select("slug, stars")
      .in("slug", uniq)
      .eq("approved", true)
      .then(({ data, error }) => {
        if (cancelled) return;
        setLoadingAvgs(false);
        if (error || !data) {
          setAvgs({});
          return;
        }
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

    return () => {
      cancelled = true;
    };
  }, [filtered]);

  return (
    <div className="mx-auto max-w-7xl">
      {/* Titre + barre de filtres */}
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Critiques</h1>
        <p className="text-sm text-gray-300">
          Explore les mangas & manhwas : recherche, filtre par type et trie.
        </p>
      </header>

      {/* contrôles */}
      <div className="mb-6 grid items-center gap-3 md:grid-cols-12">
        {/* recherche */}
        <div className="md:col-span-6">
          <div className="relative">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Rechercher un titre ou un mot-clé…"
              className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-2.5 outline-none focus:border-violet-400"
            />
            {q && (
              <button
                onClick={() => setQ("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-400 hover:text-white"
                aria-label="Effacer"
                title="Effacer"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* catégories */}
        <div className="md:col-span-3 flex gap-2">
          {[
            { key: "all", label: "Tout" },
            { key: "manga", label: "Manga" },
            { key: "manhwa", label: "Manhwa" },
          ].map((opt) => (
            <button
              key={opt.key}
              onClick={() => setCategory(opt.key as any)}
              className={[
                "rounded-lg px-3 py-2 text-sm border transition",
                category === opt.key
                  ? "bg-violet-600 border-violet-500"
                  : "bg-white/5 border-white/10 hover:bg-white/10",
              ].join(" ")}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* tri */}
        <div className="md:col-span-3">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as any)}
            className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-sm outline-none focus:border-violet-400"
          >
            <option value="recent">Tri : plus récents</option>
            <option value="title">Tri : titre A–Z</option>
            <option value="rating">Tri : meilleure note</option>
          </select>
        </div>
      </div>

      {/* grille */}
      {filtered.length === 0 ? (
        <div className="mt-12 text-center text-sm text-gray-400">
          Aucun résultat. Essaie d’autres mots-clés ou filtres.
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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

      {loadingAvgs && (
        <div className="mt-4 text-center text-xs text-gray-500">
          Calcul des notes lecteurs…
        </div>
      )}
    </div>
  );
}