import Link from "next/link";
import { getAllGuides } from "@/lib/posts";

const THEME_STYLES: Record<string, { card: string; category: string }> = {
  purple: { card: "from-[#1a0533] to-[#13131f] hover:border-brand-500/40", category: "text-brand-400" },
  blue:   { card: "from-[#0c1a3d] to-[#0d0d1a] hover:border-blue-400/35",   category: "text-blue-300" },
  green:  { card: "from-[#052e1a] to-[#0d0d14] hover:border-emerald-400/35", category: "text-emerald-300" },
  orange: { card: "from-[#2d1500] to-[#0d0d14] hover:border-orange-400/35",  category: "text-orange-300" },
  red:    { card: "from-[#2d0808] to-[#0d0d14] hover:border-red-400/35",     category: "text-red-300" },
};

export default async function GuidesPage() {
  const guides = await getAllGuides();
  const [featured, ...rest] = guides;

  return (
    <div className="min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        @keyframes pulseOrb { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.8)} }
        .pulse-dot { animation: pulseOrb 2s infinite; }
        .hero-grid { background-image: linear-gradient(rgba(139,92,246,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.06) 1px,transparent 1px); background-size:40px 40px; }
      `}</style>

      {/* HERO */}
      <section className="relative min-h-[260px] flex items-center overflow-hidden px-6 md:px-12 hero-grid">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-700/50 via-brand-900/30 to-transparent" />
        <div className="absolute -top-16 left-[5%] w-72 h-72 rounded-full bg-brand-500/18 blur-[60px] pointer-events-none" />
        <div className="absolute -bottom-10 left-[45%] w-48 h-48 rounded-full bg-emerald-500/10 blur-[60px] pointer-events-none" />
        <div className="relative z-10 py-12">
          <div className="inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.18em] uppercase text-emerald-300 bg-emerald-500/10 border border-emerald-500/25 px-3.5 py-1.5 rounded-full mb-4">
            <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
            Pour tous les niveaux
          </div>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.03em" }}
            className="text-[clamp(3rem,6vw,5rem)] text-white leading-[0.92] mb-3">
            Guides &amp;<br /><span className="text-emerald-400">conseils</span>
          </h1>
          <p className="text-[0.9rem] text-white/45 leading-relaxed max-w-md">
            Tout ce qu&apos;il faut savoir pour se lancer dans le manga — des bases aux recommandations expertes.
          </p>
        </div>
      </section>
      <div className="h-14 bg-gradient-to-b from-transparent to-[#0b0b10] -mt-0.5 relative z-10" />

      <div className="mx-auto max-w-[1200px] px-4 md:px-8">

        {/* À LA UNE */}
        {featured && (
          <>
            <p className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-white/35 mb-4 flex items-center gap-3 after:flex-1 after:h-px after:bg-white/6">
              ⭐ À la une
            </p>
            <Link href={`/guides/${featured.slug}`}
              className="group relative block rounded-[20px] overflow-hidden border border-white/8 mb-10 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a0533] to-[#0d0d1a]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(139,92,246,0.18)_0%,transparent_60%)]" />
              <div className="relative z-10 p-8 md:p-10 flex items-center gap-8 md:gap-12">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-400 flex items-center justify-center text-4xl flex-shrink-0 shadow-xl shadow-brand-500/30">
                  {featured.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[0.68rem] font-bold tracking-[0.12em] uppercase text-brand-400 bg-brand-500/15 border border-brand-500/30 px-2.5 py-1 rounded-full">
                      {featured.category}
                    </span>
                    <span className="text-xs text-white/30">· {featured.readingTime}</span>
                  </div>
                  <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
                    className="text-2xl md:text-3xl text-white leading-tight mb-3">
                    {featured.title}
                  </h2>
                  <p className="text-sm text-white/50 leading-relaxed max-w-xl">{featured.excerpt}</p>
                  <div className="flex items-center gap-5 mt-4">
                    <span className="text-xs text-white/30">📚 Guide complet</span>
                    <span className="text-xs text-white/30">🎯 Niveau débutant</span>
                    <span className="text-xs text-white/30">✅ Mis à jour 2025</span>
                  </div>
                </div>
                <div className="text-white/25 text-2xl transition-all duration-300 group-hover:translate-x-2 group-hover:text-brand-400 flex-shrink-0 hidden md:block">→</div>
              </div>
            </Link>
          </>
        )}

        {/* TOUS LES GUIDES */}
        <p className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-white/35 mb-4 flex items-center gap-3 after:flex-1 after:h-px after:bg-white/6">
          📚 Tous les guides
        </p>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {rest.map((guide) => {
            const t = THEME_STYLES[guide.theme] || THEME_STYLES.purple;
            return (
              <Link key={guide.slug} href={`/guides/${guide.slug}`}
                className={`group relative flex flex-col rounded-[18px] overflow-hidden border border-white/7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl bg-gradient-to-br ${t.card}`}>
                <div className="p-6 flex-1 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(255,255,255,0.04)_0%,transparent_50%)]" />
                  <div className="text-3xl mb-4 relative z-10">{guide.icon}</div>
                  <p className={`text-[0.62rem] font-bold tracking-[0.12em] uppercase mb-2 relative z-10 ${t.category}`}>{guide.category}</p>
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
                    className="text-xl text-white leading-tight mb-3 relative z-10">{guide.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed relative z-10">{guide.excerpt}</p>
                </div>
                <div className="px-6 py-3.5 border-t border-white/6 bg-black/20 flex items-center justify-between">
                  <span className="text-xs text-white/30">⏱ {guide.readingTime}</span>
                  <span className="text-white/25 text-sm transition-all duration-300 group-hover:translate-x-1 group-hover:text-white/60">→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
