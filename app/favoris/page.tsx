"use client";

import Link from "next/link";
import { SERIES } from "@/data/series";
import { useFavorites } from "@/lib/useFavorites";

export default function FavorisPage() {
  const { favorites, toggle } = useFavorites();

  const favSeries = SERIES.filter((s) => favorites.includes(s.slug));

  return (
    <div className="min-h-screen">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        @keyframes fadeInUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        .card-fadein{animation:fadeInUp 0.4s ease both}
      `}</style>

      {/* HERO */}
      <section className="relative min-h-[260px] flex items-center overflow-hidden px-6 md:px-12"
        style={{ backgroundImage: "linear-gradient(rgba(139,92,246,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.06) 1px,transparent 1px)", backgroundSize: "40px 40px" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-pink-700/30 via-brand-900/20 to-transparent" />
        <div className="absolute -top-16 left-[5%] w-80 h-80 rounded-full bg-pink-500/12 blur-[80px] pointer-events-none" />

        <div className="relative z-10 py-12 max-w-xl">
          <div className="inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.18em] uppercase text-pink-300 bg-pink-500/10 border border-pink-500/25 px-3.5 py-1.5 rounded-full mb-5">
            ♥ Mes séries sauvegardées
          </div>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.03em" }}
            className="text-[clamp(3rem,7vw,5rem)] text-white leading-none mb-3">
            Mes <span className="text-pink-400">favoris</span>
          </h1>
          <p className="text-[0.95rem] text-white/50">
            {favSeries.length > 0
              ? `${favSeries.length} série${favSeries.length > 1 ? "s" : ""} sauvegardée${favSeries.length > 1 ? "s" : ""}`
              : "Aucune série sauvegardée pour l'instant"}
          </p>
        </div>
      </section>

      <div className="h-10 bg-gradient-to-b from-transparent to-[#0b0b10] -mt-0.5 relative z-10" />

      <div className="mx-auto max-w-[1400px] px-4 md:px-8 pb-20">
        {favSeries.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-5xl mb-5">♡</div>
            <p style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-2xl text-white/30 mb-3">
              Aucun favori
            </p>
            <p className="text-sm text-white/30 mb-8">
              Clique sur le bouton ♡ sur n'importe quelle page série pour la sauvegarder ici.
            </p>
            <Link href="/critiques"
              className="inline-flex px-6 py-3 rounded-xl bg-brand-500 text-white text-sm font-bold hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/25">
              Découvrir le catalogue →
            </Link>
          </div>
        ) : (
          <>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mt-4">
              {favSeries.map((s, i) => (
                <div key={s.slug} className="card-fadein group relative flex flex-col overflow-hidden rounded-2xl border border-white/7 bg-white/3 transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_40px_rgba(236,72,153,0.08)]"
                  style={{ animationDelay: `${i * 40}ms` }}>

                  <div className="relative overflow-hidden" style={{ aspectRatio: "2/3" }}>
                    <img src={s.cover || "/_placeholder.jpg"} alt={s.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => { const img = e.currentTarget as HTMLImageElement; if (!img.dataset.fb) { img.dataset.fb = "1"; img.src = "/_placeholder.jpg"; } }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05050e]/95 via-[#05050e]/20 to-transparent opacity-65 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Bouton retirer */}
                    <button
                      onClick={() => toggle(s.slug)}
                      title="Retirer des favoris"
                      className="absolute top-2 right-2 z-20 w-7 h-7 rounded-full bg-black/60 border border-pink-500/40 text-pink-400 text-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-pink-500/20">
                      ♥
                    </button>

                    {s.category && (
                      <span className={`absolute left-2 top-2 z-10 rounded-full text-[0.58rem] font-bold tracking-widest uppercase px-2 py-0.5 border ${
                        s.category === "manhwa" ? "bg-pink-500/20 border-pink-500/35 text-pink-300" : "bg-indigo-500/20 border-indigo-500/35 text-indigo-300"
                      }`}>{s.category}</span>
                    )}
                  </div>

                  <Link href={`/series/${s.slug}`} className="p-3 flex-1">
                    <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
                      className="text-[1.05rem] text-white leading-tight mb-1">{s.title}</h3>
                    {s.stars ? (
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map(n => (
                          <svg key={n} className={`w-2.5 h-2.5 ${n <= s.stars! ? "text-brand-500" : "text-white/15"}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    ) : null}
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href="/critiques"
                className="inline-flex px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white/60 text-sm font-bold hover:bg-white/10 hover:text-white transition-all">
                Ajouter d'autres séries →
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
