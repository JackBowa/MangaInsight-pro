"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { PUBLISHED_SERIES as SERIES } from "@/data/series";
import { supabase } from "@/lib/lib/supabase/client";

const A = "#e03030";
const ADim = "rgba(224,48,48,0.1)";
const ABorder = "rgba(224,48,48,0.22)";
const FH = "var(--font-barlow), 'Barlow Condensed', sans-serif";
const FB = "var(--font-figtree), 'Figtree', sans-serif";

const GENRES = ["Tous", "Action", "Fantasy", "Comédie", "Aventure", "Shōnen", "Isekai", "Dark Fantasy", "Thriller", "Sport", "Historique", "Psychologique", "Horreur"];
const PAGE_SIZE = 24;

function StarRow({ stars, size = 12 }: { stars?: number; size?: number }) {
  if (!stars) return null;
  return <span style={{ color: A, fontSize: size }}>{[1,2,3,4,5].map(i => i <= stars ? "★" : "☆").join("")}</span>;
}

function CritiqueCard({ slug, title, cover, tags, stars, category, avg, onTagClick }: {
  slug: string; title: string; cover?: string; tags?: string;
  stars?: number; category?: string; avg?: number | null;
  onTagClick?: (tag: string) => void;
}) {
  const tagList = (tags ?? "").split("·").map(t => t.trim()).filter(Boolean).slice(0, 2);
  return (
    <Link href={`/series/${slug}`} className="critique-card-chrome"
      style={{ display: "block", textDecoration: "none", borderRadius: 2, overflow: "hidden", position: "relative", aspectRatio: "2/3", background: "#141414", border: "1px solid rgba(255,255,255,0.06)" }}>
      {cover && (
        <Image src={cover} alt={title} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
          style={{ objectFit: "cover", transition: "transform .4s ease" }} className="critique-img-chrome" />
      )}
      <div className="critique-overlay-chrome" style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.15) 55%, transparent 100%)", opacity: 0.7, transition: "opacity .25s", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 10 }}>
        {category && (
          <span style={{ alignSelf: "flex-start", fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "2px 6px", borderRadius: 2, marginBottom: 4,
            background: category === "manhwa" ? "rgba(244,114,182,0.15)" : ADim,
            border: `1px solid ${category === "manhwa" ? "rgba(244,114,182,0.3)" : ABorder}`,
            color: category === "manhwa" ? "#f9a8d4" : "#fca5a5" }}>{category}</span>
        )}
        <div style={{ fontFamily: FH, fontSize: 13, fontWeight: 800, letterSpacing: "0.04em", color: "#fff", lineHeight: 1.1, marginBottom: 3 }}>{title}</div>
        <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", marginBottom: 5 }}>{tagList[0]}</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <StarRow stars={stars} size={10} />
          {avg != null && <span style={{ fontFamily: FB, fontSize: 9, color: "rgba(255,255,255,0.4)" }}>{avg.toFixed(1)}/5</span>}
        </div>
      </div>
    </Link>
  );
}

export default function CritiquesPage() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState<"all" | "manga" | "manhwa">("all");
  const [genre, setGenre] = useState("Tous");
  const [sort, setSort] = useState<"recent" | "title" | "rating">("recent");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [avgs, setAvgs] = useState<Record<string, number>>({});
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const mangaCount = SERIES.filter(s => s.category === "manga").length;
  const manhwaCount = SERIES.filter(s => s.category === "manhwa").length;

  const filtered = useMemo(() => {
    let list = SERIES.slice();
    if (category !== "all") list = list.filter(s => s.category === category);
    if (genre !== "Tous") list = list.filter(s => (s.tags ?? "").toLowerCase().includes(genre.toLowerCase()));
    if (q.trim()) {
      const n = q.toLowerCase();
      list = list.filter(s => s.title.toLowerCase().includes(n) || (s.tags ?? "").toLowerCase().includes(n));
    }
    if (sort === "title") list.sort((a, b) => a.title.localeCompare(b.title, "fr"));
    else if (sort === "rating") list.sort((a, b) => (b.stars ?? 0) - (a.stars ?? 0));
    else list = list.reverse();
    return list;
  }, [q, category, genre, sort]);

  useEffect(() => { setVisibleCount(PAGE_SIZE); }, [q, category, genre, sort]);

  useEffect(() => {
    const slugs = Array.from(new Set(filtered.map(s => s.slug))).slice(0, 200);
    if (!slugs.length) { setAvgs({}); return; }
    let cancelled = false;
    supabase.from("comments").select("slug, stars").in("slug", slugs).eq("approved", true)
      .then(({ data, error }) => {
        if (cancelled) return;
        if (error || !data) { setAvgs({}); return; }
        const sums: Record<string, { s: number; n: number }> = {};
        for (const row of data as { slug: string; stars: number }[]) {
          if (!sums[row.slug]) sums[row.slug] = { s: 0, n: 0 };
          sums[row.slug].s += row.stars ?? 0;
          sums[row.slug].n += 1;
        }
        const out: Record<string, number> = {};
        Object.keys(sums).forEach(k => { const { s, n } = sums[k]; if (n > 0) out[k] = Math.round((s / n) * 10) / 10; });
        setAvgs(out);
      });
    return () => { cancelled = true; };
  }, [filtered]);

  const chipStyle = (active: boolean) => ({
    padding: "7px 14px", borderRadius: 4, fontSize: 12, fontWeight: 700,
    fontFamily: FH, letterSpacing: "0.08em", textTransform: "uppercase" as const, cursor: "pointer",
    background: active ? A : "rgba(255,255,255,0.04)",
    border: `1px solid ${active ? A : "rgba(255,255,255,0.07)"}`,
    color: active ? "#fff" : "rgba(255,255,255,0.4)",
    whiteSpace: "nowrap" as const,
  });

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: FB }}>

      {/* Header */}
      <div style={{ borderLeft: `5px solid ${A}`, background: "#080808", padding: "40px clamp(20px,4vw,52px) 32px" }}>
        <div style={{ maxWidth: 1700, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <div style={{ width: 24, height: 3, background: A }} />
            <span style={{ fontFamily: FH, fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: A }}>CATALOGUE</span>
          </div>
          <h1 style={{ fontFamily: FH, fontSize: "clamp(40px,6vw,72px)", fontWeight: 800, textTransform: "uppercase", color: "#fff", lineHeight: 0.9, marginBottom: 10 }}>TOUTES LES CRITIQUES</h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)" }}>{SERIES.length} séries référencées · manga &amp; manhwa</p>
        </div>
      </div>

      {/* Filters sticky bar */}
      <div style={{ background: "#0d0d0d", borderBottom: "1px solid rgba(255,255,255,0.07)", position: "sticky", top: 56, zIndex: 50 }}>
        <div style={{ maxWidth: 1700, margin: "0 auto", padding: "12px clamp(20px,4vw,52px)", display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          {/* Category chips */}
          {(["all", "manga", "manhwa"] as const).map(c => (
            <button key={c} onClick={() => setCategory(c)} style={chipStyle(category === c)}>
              {c === "all" ? `TOUS (${SERIES.length})` : c === "manga" ? `MANGA (${mangaCount})` : `MANHWA (${manhwaCount})`}
            </button>
          ))}
          <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.07)", margin: "0 4px" }} />
          {/* Genre scroll */}
          <div style={{ display: "flex", gap: 6, overflow: "auto", flex: 1 }} className="no-scrollbar">
            {GENRES.map(g => (
              <button key={g} onClick={() => setGenre(g)} style={chipStyle(genre === g)}>{g.toUpperCase()}</button>
            ))}
          </div>
          <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.07)", margin: "0 4px" }} />
          {/* Sort */}
          <select value={sort} onChange={e => setSort(e.target.value as any)}
            style={{ fontSize: 12, fontWeight: 700, fontFamily: FH, letterSpacing: "0.08em", textTransform: "uppercase", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "#fff", padding: "7px 12px", borderRadius: 4, cursor: "pointer" }}>
            <option value="recent">RÉCENTS ↓</option>
            <option value="title">A → Z</option>
            <option value="rating">NOTE ↓</option>
          </select>
          {/* View toggle */}
          <div style={{ display: "flex", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 4, overflow: "hidden" }}>
            {(["grid", "list"] as const).map(v => (
              <button key={v} onClick={() => setView(v)} style={{ padding: "6px 12px", background: view === v ? A : "transparent", border: "none", color: view === v ? "#fff" : "rgba(255,255,255,0.4)", cursor: "pointer", fontSize: 14 }}>
                {v === "grid" ? "▦" : "☰"}
              </button>
            ))}
          </div>
          {/* Search */}
          <div style={{ position: "relative" }}>
            <input value={q} onChange={e => setQ(e.target.value)} placeholder="Rechercher..."
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 4, padding: "7px 32px 7px 12px", fontSize: 13, color: "#fff", outline: "none", fontFamily: FB, width: 160 }} />
            {q && <button onClick={() => setQ("")} style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer" }}>✕</button>}
          </div>
        </div>
      </div>

      {/* Count */}
      <div style={{ maxWidth: 1700, margin: "0 auto", padding: "16px clamp(20px,4vw,52px) 0" }}>
        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>{filtered.length} série{filtered.length > 1 ? "s" : ""} trouvée{filtered.length > 1 ? "s" : ""}</span>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 1700, margin: "0 auto", padding: "16px clamp(20px,4vw,52px) 80px" }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 20px", color: "rgba(255,255,255,0.45)" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
            <p style={{ fontFamily: FH, fontSize: 24, marginBottom: 8 }}>AUCUN RÉSULTAT</p>
            <p style={{ fontSize: 13 }}>Essaie d'autres mots-clés ou filtres</p>
          </div>
        ) : view === "grid" ? (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))", gap: 12 }}>
              {filtered.slice(0, visibleCount).map(s => (
                <CritiqueCard key={s.slug} slug={s.slug} title={s.title} cover={s.cover} tags={s.tags}
                  stars={s.stars} category={s.category} avg={avgs[s.slug]}
                  onTagClick={tag => { setGenre(tag); window.scrollTo({ top: 0, behavior: "smooth" }); }} />
              ))}
            </div>
            {visibleCount < filtered.length && (
              <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
                <button onClick={() => setVisibleCount(v => v + PAGE_SIZE)}
                  style={{ padding: "12px 32px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 4, color: "rgba(255,255,255,0.5)", fontSize: 13, fontFamily: FH, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" }}>
                  CHARGER PLUS ({filtered.length - visibleCount} restantes)
                </button>
              </div>
            )}
          </>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {filtered.slice(0, visibleCount).map((s, i) => (
              <Link key={s.slug} href={`/series/${s.slug}`}
                style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 14px", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent", borderRadius: 4, textDecoration: "none", borderLeft: `3px solid ${s.stars === 5 ? A : "transparent"}` }}
                className="list-item-chrome">
                <span style={{ fontFamily: FH, fontSize: 20, fontWeight: 800, color: "rgba(255,255,255,0.1)", width: 32, textAlign: "right", flexShrink: 0 }}>{String(i + 1).padStart(2, "0")}</span>
                {s.cover && <Image src={s.cover} alt={s.title} width={40} height={56} style={{ objectFit: "cover", borderRadius: 2, border: "1px solid rgba(255,255,255,0.07)", flexShrink: 0 }} />}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: FH, fontSize: 17, fontWeight: 800, letterSpacing: "0.03em", color: "#fff", lineHeight: 1 }}>{s.title}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>{s.tags}</div>
                </div>
                <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "2px 8px", borderRadius: 2,
                  background: s.category === "manhwa" ? "rgba(244,114,182,0.1)" : ADim,
                  color: s.category === "manhwa" ? "#f9a8d4" : "#fca5a5" }}>{s.category}</span>
                <StarRow stars={s.stars} size={11} />
                <svg width="12" height="12" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>
              </Link>
            ))}
            {visibleCount < filtered.length && (
              <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
                <button onClick={() => setVisibleCount(v => v + PAGE_SIZE)}
                  style={{ padding: "12px 32px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 4, color: "rgba(255,255,255,0.5)", fontSize: 13, fontFamily: FH, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" }}>
                  CHARGER PLUS ({filtered.length - visibleCount} restantes)
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        .critique-card-chrome:hover .critique-img-chrome { transform: scale(1.05) !important; }
        .critique-card-chrome:hover .critique-overlay-chrome { opacity: 1 !important; }
        .list-item-chrome:hover { background: rgba(255,255,255,0.04) !important; }
      `}</style>
    </div>
  );
}
