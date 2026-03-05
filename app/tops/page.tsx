"use client";

import Link from "next/link";
import { useState } from "react";
import { SERIES } from "@/data/series";

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

const RANK_STYLES: Record<Rank, { section: string; badge: string; cardHover: string; glow: string }> = {
  SSS: {
    section: "from-amber-400/20 to-amber-600/10 border-amber-400/50 text-amber-300",
    badge: "bg-amber-400 text-black shadow-[0_0_12px_rgba(251,191,36,0.6)]",
    cardHover: "hover:border-amber-400/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.55),0_0_40px_rgba(251,191,36,0.12)]",
    glow: "bg-[radial-gradient(ellipse_at_50%_100%,rgba(251,191,36,0.22)_0%,transparent_65%)]",
  },
  SS: {
    section: "from-red-400/18 to-red-600/8 border-red-400/45 text-red-300",
    badge: "bg-red-400/90 text-white",
    cardHover: "hover:border-red-400/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.55),0_0_30px_rgba(248,113,113,0.08)]",
    glow: "bg-[radial-gradient(ellipse_at_50%_100%,rgba(248,113,113,0.18)_0%,transparent_65%)]",
  },
  S: {
    section: "from-orange-400/18 to-orange-600/8 border-orange-400/40 text-orange-300",
    badge: "bg-orange-400/90 text-white",
    cardHover: "hover:border-orange-400/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.55),0_0_30px_rgba(251,146,60,0.08)]",
    glow: "bg-[radial-gradient(ellipse_at_50%_100%,rgba(251,146,60,0.18)_0%,transparent_65%)]",
  },
  A: {
    section: "from-green-400/15 to-green-600/6 border-green-400/35 text-green-300",
    badge: "bg-green-400/85 text-black",
    cardHover: "hover:border-green-400/35 hover:shadow-[0_20px_50px_rgba(0,0,0,0.55)]",
    glow: "bg-[radial-gradient(ellipse_at_50%_100%,rgba(74,222,128,0.15)_0%,transparent_65%)]",
  },
  B: {
    section: "from-blue-400/15 to-blue-600/6 border-blue-400/30 text-blue-300",
    badge: "bg-blue-400/85 text-white",
    cardHover: "hover:border-blue-400/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.55)]",
    glow: "bg-[radial-gradient(ellipse_at_50%_100%,rgba(96,165,250,0.15)_0%,transparent_65%)]",
  },
};

function RankCard({ slug, title, cover, tags, rank }: {
  slug: string; title: string; cover?: string; tags?: string; rank: Rank;
}) {
  const tagList = (tags ?? "").split("·").map((t) => t.trim()).filter(Boolean).slice(0, 2);
  const styles = RANK_STYLES[rank];

  return (
    <Link
      href={`/series/${slug}`}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/7 bg-white/3 cursor-pointer transition-all duration-350 hover:-translate-y-2 ${styles.cardHover}`}
    >
      {/* lueur hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/8 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10" />

      {/* Badge rang */}
      <span style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.08em" }}
        className={`absolute top-2 left-2 z-20 text-sm px-2 py-0.5 rounded-lg ${styles.badge} ${rank === "SSS" ? "animate-pulse" : ""}`}>
        {rank}
      </span>

      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "2/3" }}>
        <img
          src={cover || "/_placeholder.jpg"}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-106"
          onError={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            if (!img.dataset.fb) { img.dataset.fb = "1"; img.src = "/_placeholder.jpg"; }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05050e]/97 via-[#05050e]/15 to-transparent opacity-65 transition-opacity duration-300 group-hover:opacity-100" />
        <div className={`absolute inset-0 ${styles.glow} opacity-0 transition-opacity duration-400 group-hover:opacity-100`} />

        {tagList.length > 0 && (
          <div className="absolute bottom-2 left-2 right-2 z-10 flex flex-wrap gap-1">
            {tagList.map((t) => (
              <span key={t} className="rounded-full bg-black/60 border border-white/10 px-1.5 py-0.5 text-[0.58rem] text-white/75">{t}</span>
            ))}
          </div>
        )}
      </div>

      {/* Corps */}
      <div className="p-3 relative z-10">
        <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
          className="text-[0.98rem] text-white leading-tight">
          {title}
        </h3>
      </div>
    </Link>
  );
}

function RankSection({ rank, items }: { rank: Rank; items: typeof SERIES }) {
  const styles = RANK_STYLES[rank];
  if (!items.length) return null;

  return (
    <div className="mb-12">
      {/* Header de section */}
      <div className="flex items-center gap-4 mb-5">
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.06em" }}
          className={`text-2xl px-4 py-1.5 rounded-xl bg-gradient-to-r border ${styles.section} min-w-[72px] text-center flex-shrink-0`}>
          {rank}
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-white/8 to-transparent" />
        <span className="text-xs text-white/30 flex-shrink-0">{items.length} série{items.length > 1 ? "s" : ""}</span>
      </div>

      {/* Grille */}
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {items.map((s, i) => (
          <RankCard
            key={s.slug}
            slug={s.slug}
            title={s.title}
            cover={s.cover}
            tags={s.tags}
            rank={rank}
          />
        ))}
      </div>
    </div>
  );
}

export default function TopsPage() {
  const [tab, setTab] = useState<"manga" | "manhwa">("manga");

  const mangas = SERIES.filter((s) => s.category === "manga");
  const manhwas = SERIES.filter((s) => s.category === "manhwa");

  const byRank = (list: typeof SERIES) => {
    const groups: Record<Rank, typeof SERIES> = { SSS: [], SS: [], S: [], A: [], B: [] };
    list.forEach((s) => {
      const rank = starsToRank(s.stars as number ?? 0);
      if (rank) groups[rank].push(s);
    });
    return groups;
  };

  const mangaRanks = byRank(mangas);
  const manhwaRanks = byRank(manhwas);
  const activeRanks = tab === "manga" ? mangaRanks : manhwaRanks;

  const totalRanked = (tab === "manga" ? mangas : manhwas).filter((s) => starsToRank(s.stars as number ?? 0)).length;

  return (
    <div className="min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        @keyframes pulseOrb { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.8)} }
        .pulse-dot { animation: pulseOrb 2s infinite; }
        .hero-grid { background-image: linear-gradient(rgba(139,92,246,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.06) 1px,transparent 1px); background-size:40px 40px; }
        .scale-106 { transform: scale(1.06); }
      `}</style>

      {/* HERO */}
      <section className="relative min-h-[320px] flex items-center overflow-hidden px-6 md:px-12 hero-grid">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-700/50 via-brand-900/30 to-transparent" />
        <div className="absolute -top-16 left-[5%] w-96 h-96 rounded-full bg-amber-400/12 blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-10 left-[40%] w-64 h-64 rounded-full bg-brand-500/18 blur-[70px] pointer-events-none" />

        <div className="relative z-10 py-14 max-w-xl">
          <div className="inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.18em] uppercase text-amber-300 bg-amber-400/10 border border-amber-400/25 px-3.5 py-1.5 rounded-full mb-5">
            <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
            Classements officiels
          </div>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.03em" }}
            className="text-[clamp(3.5rem,7vw,5.5rem)] text-white leading-none mb-4">
            Rangs <span className="text-amber-400">SSS</span> à <span className="text-blue-400">B</span>
          </h1>
          <p className="text-[0.95rem] text-white/50 leading-relaxed mb-6">
            Les meilleures séries classées par la rédaction, de l&apos;incontournable absolu au bon divertissement.
          </p>
          <div className="flex gap-6">
            {([
              { rank: "SSS", color: "text-amber-400" },
              { rank: "SS",  color: "text-red-400" },
              { rank: "S",   color: "text-orange-400" },
              { rank: "A",   color: "text-green-400" },
              { rank: "B",   color: "text-blue-400" },
            ] as const).map(({ rank, color }) => {
              const count = SERIES.filter(s => starsToRank(s.stars as number ?? 0) === rank).length;
              return count > 0 ? (
                <div key={rank}>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif" }} className={`text-[1.8rem] leading-none tracking-wide ${color}`}>{count}</div>
                  <div className="text-[0.65rem] font-bold tracking-[0.12em] uppercase text-white/35 mt-0.5">Rang {rank}</div>
                </div>
              ) : null;
            })}
          </div>
        </div>

        {/* Covers top SSS flottantes */}
        <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 hidden md:flex gap-2 z-10">
          {SERIES.filter(s => starsToRank(s.stars as number ?? 0) === "SSS").slice(0, 5).map((s, i) => (
            <div key={s.slug} className="rounded-xl overflow-hidden border border-amber-400/20 shadow-2xl flex-shrink-0"
              style={{ width: 70, aspectRatio: "2/3", marginTop: i % 2 === 1 ? 16 : 0, opacity: 1 - i * 0.12 }}>
              <img src={s.cover || "/_placeholder.jpg"} alt={s.title} className="w-full h-full object-cover"
                onError={(e) => { const img = e.currentTarget as HTMLImageElement; if (!img.dataset.fb) { img.dataset.fb = "1"; img.src = "/_placeholder.jpg"; }}} />
            </div>
          ))}
        </div>
      </section>

      {/* fade */}
      <div className="h-14 bg-gradient-to-b from-transparent to-[#0b0b10] -mt-0.5 relative z-10" />

      <div className="mx-auto max-w-[1300px] px-4 md:px-8">

        {/* Tabs */}
        <div className="flex gap-2 mb-10">
          {(["manga", "manhwa"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-7 py-2.5 rounded-xl text-sm font-bold border transition-all ${
                tab === t
                  ? "bg-brand-500/15 border-brand-500/40 text-brand-300"
                  : "bg-white/3 border-white/8 text-white/40 hover:text-white hover:bg-white/5"
              }`}>
              {t === "manga" ? "📚 Mangas" : "🇰🇷 Manhwas"}
            </button>
          ))}
          <span className="ml-auto self-center text-xs text-white/30">
            <span className="text-white font-bold">{totalRanked}</span> séries classées
          </span>
        </div>

        {/* Sections par rang */}
        {RANK_ORDER.map((rank) => (
          <RankSection key={rank} rank={rank} items={activeRanks[rank]} />
        ))}

        <div className="h-20" />
      </div>
    </div>
  );
}
