"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useMemo } from "react";
import { SERIES } from "@/data/series";

// Calcule "il y a X jours" depuis une date ISO
function timeAgo(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diff = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  if (diff === 0) return "Aujourd'hui";
  if (diff === 1) return "Hier";
  if (diff < 7) return `Il y a ${diff} jours`;
  if (diff < 14) return "Il y a 1 semaine";
  if (diff < 30) return `Il y a ${Math.floor(diff / 7)} semaines`;
  if (diff < 60) return "Il y a 1 mois";
  return `Il y a ${Math.floor(diff / 30)} mois`;
}

type BadgeType = "new" | "update" | "critique";

const BADGE_STYLES: Record<BadgeType, string> = {
  new:      "bg-cyan-400/15 border border-cyan-400/30 text-cyan-300",
  update:   "bg-amber-400/12 border border-amber-400/30 text-amber-300",
  critique: "bg-brand-500/15 border border-brand-500/30 text-brand-300",
};

export default function NouveautesPage() {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Trier par addedAt décroissant
  const sorted = useMemo(() =>
    [...SERIES]
      .filter(s => s.addedAt)
      .sort((a, b) => (b.addedAt ?? "").localeCompare(a.addedAt ?? "")),
    []
  );

  // Carousel = 12 plus récentes
  const recent = sorted.slice(0, 12);

  // Fil d'actu = 15 plus récentes avec badge
  const feed = sorted.slice(0, 15).map(s => ({
    ...s,
    badge: "new" as BadgeType,
    badgeLabel: "Nouveau",
  }));

  function scrollCarousel(dir: number) {
    carouselRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        @keyframes pulseOrb { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.8)} }
        .pulse-dot { animation: pulseOrb 2s infinite; }
        .hero-grid { background-image: linear-gradient(rgba(139,92,246,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.06) 1px,transparent 1px); background-size:40px 40px; }
        .carousel-hide-scrollbar { scrollbar-width:none; }
        .carousel-hide-scrollbar::-webkit-scrollbar { display:none; }
      `}</style>

      {/* HERO */}
      <section className="relative min-h-[320px] flex items-center overflow-hidden px-6 md:px-12 hero-grid">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-700/50 via-brand-900/30 to-transparent" />
        <div className="absolute -top-16 left-[5%] w-96 h-96 rounded-full bg-brand-500/18 blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-10 left-[45%] w-64 h-64 rounded-full bg-cyan-500/12 blur-[70px] pointer-events-none" />

        <div className="relative z-10 py-14 max-w-xl">
          <div className="inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.18em] uppercase text-cyan-300 bg-cyan-500/10 border border-cyan-500/25 px-3.5 py-1.5 rounded-full mb-5">
            <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
            Mis à jour régulièrement
          </div>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.03em" }}
            className="text-[clamp(3.5rem,7vw,5.5rem)] text-white leading-none mb-4">
            Les <span className="text-cyan-400">nouveautés</span>
          </h1>
          <p className="text-[0.95rem] text-white/50 leading-relaxed mb-6">
            Les dernières séries ajoutées sur MangaInsight, triées automatiquement par date d&apos;ajout.
          </p>
          <div className="flex gap-6">
            {[
              { num: sorted.length, label: "Séries" },
              { num: recent.length, label: "Ajouts récents" },
            ].map(({ num, label }) => (
              <div key={label}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-[1.8rem] text-white leading-none tracking-wide">{num}</div>
                <div className="text-[0.65rem] font-bold tracking-[0.12em] uppercase text-white/35 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="h-14 bg-gradient-to-b from-transparent to-[#0b0b10] -mt-0.5 relative z-10" />

      <div className="mx-auto max-w-[1280px] px-4 md:px-8">

        {/* ── CAROUSEL ── */}
        <p className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-white/35 mb-4 flex items-center gap-3 after:flex-1 after:h-px after:bg-white/6">
          🆕 Récemment ajoutés
        </p>
        <div className="relative mb-14">
          <button onClick={() => scrollCarousel(-1)}
            className="absolute left-[-18px] top-1/2 -translate-y-[60%] z-10 w-9 h-9 rounded-full bg-black/70 border border-white/12 text-white items-center justify-center hover:bg-brand-500/50 hover:border-brand-500/50 transition-all backdrop-blur-sm text-base hidden md:flex">
            ‹
          </button>

          <div ref={carouselRef}
            className="flex gap-3.5 overflow-x-auto scroll-smooth carousel-hide-scrollbar pb-3"
            style={{ scrollSnapType: "x mandatory" }}>
            {recent.map((s, i) => (
              <Link key={s.slug} href={`/series/${s.slug}`}
                style={{ scrollSnapAlign: "start" }}
                className="flex-shrink-0 w-40 rounded-2xl overflow-hidden border border-white/7 bg-white/3 flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/45 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(139,92,246,0.08)] group">
                <div className="relative overflow-hidden" style={{ aspectRatio: "2/3" }}>
                  <Image src={s.cover || "/_placeholder.jpg"} alt={s.title}
                    fill sizes="160px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05050e]/95 to-transparent opacity-60" />
                  <span className={`absolute top-1.5 left-1.5 text-[0.52rem] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded-full border ${
                    s.category === "manhwa" ? "bg-pink-500/20 border-pink-500/35 text-pink-300" : "bg-indigo-500/20 border-indigo-500/35 text-indigo-300"
                  }`}>{s.category}</span>
                  {i < 4 && (
                    <span className="absolute top-1.5 right-1.5 text-[0.52rem] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded-full bg-cyan-400 text-black">
                      New
                    </span>
                  )}
                </div>
                <div className="p-2.5">
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
                    className="text-[0.9rem] text-white leading-tight">{s.title}</h3>
                  {s.addedAt && (
                    <p className="text-[0.6rem] text-white/30 mt-0.5">{timeAgo(s.addedAt)}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <button onClick={() => scrollCarousel(1)}
            className="absolute right-[-18px] top-1/2 -translate-y-[60%] z-10 w-9 h-9 rounded-full bg-black/70 border border-white/12 text-white items-center justify-center hover:bg-brand-500/50 hover:border-brand-500/50 transition-all backdrop-blur-sm text-base hidden md:flex">
            ›
          </button>
        </div>

        {/* ── FIL D'ACTU ── */}
        <p className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-white/35 mb-4 flex items-center gap-3 after:flex-1 after:h-px after:bg-white/6">
          📡 Fil des ajouts
        </p>
        <div className="flex flex-col gap-3 mb-24">
          {feed.map((item, i) => (
            <Link key={`${item.slug}-${i}`} href={`/series/${item.slug}`}
              className="flex items-center gap-4 px-4 py-3.5 bg-white/3 border border-white/6 rounded-2xl transition-all duration-250 hover:bg-white/5 hover:border-brand-500/30 hover:translate-x-1">
              <div className="relative w-11 h-14 rounded-lg overflow-hidden flex-shrink-0 border border-white/8">
                <Image src={item.cover || "/_placeholder.jpg"} alt={item.title}
                  fill sizes="44px"
                  className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
                  className="text-[1rem] text-white truncate mb-1">{item.title}</h3>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[0.62rem] text-white/40">
                    {item.category === "manhwa" ? "🇰🇷 Manhwa" : "🇯🇵 Manga"}
                  </span>
                  {item.tags && <>
                    <span className="w-0.5 h-0.5 rounded-full bg-white/20" />
                    <span className="text-[0.62rem] text-white/40">{item.tags}</span>
                  </>}
                </div>
              </div>
              <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                <span className={`text-[0.6rem] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full ${BADGE_STYLES[item.badge]}`}>
                  {item.badgeLabel}
                </span>
                {item.addedAt && (
                  <span className="text-[0.68rem] text-white/25">{timeAgo(item.addedAt)}</span>
                )}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
