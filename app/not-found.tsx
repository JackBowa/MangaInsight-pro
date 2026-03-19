"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');`}</style>

      {/* Fond */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-brand-600/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-brand-400/8 blur-[80px]" />
      </div>

      <div className="relative z-10 text-center max-w-lg">
        <p className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-brand-400 mb-4">
          Erreur 404
        </p>

        <div
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
          className="text-[clamp(6rem,20vw,10rem)] text-white/8 leading-none select-none mb-[-1rem]"
        >
          404
        </div>

        <h1
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
          className="text-[clamp(2.5rem,6vw,4rem)] text-white leading-none mb-4"
        >
          Page <span className="text-brand-400">introuvable</span>
        </h1>

        <p className="text-sm text-white/40 leading-relaxed mb-8">
          Cette page n&apos;existe pas ou a été déplacée. Retourne au catalogue pour trouver ta prochaine série.
        </p>

        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-brand-500 text-white text-sm font-bold hover:bg-brand-600 transition-all hover:-translate-y-0.5 shadow-lg shadow-brand-500/25"
          >
            Accueil
          </Link>
          <Link
            href="/critiques"
            className="px-6 py-3 rounded-xl bg-white/6 border border-white/10 text-white/70 text-sm font-bold hover:bg-white/10 hover:text-white transition-all"
          >
            Toutes les critiques →
          </Link>
        </div>
      </div>
    </div>
  );
}
