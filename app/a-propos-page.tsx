import Link from "next/link";
import { SERIES } from "@/data/series";

export const metadata = {
  title: "À propos",
  description: "Qui sommes-nous ? L'histoire de MangaInsight, la référence francophone pour les critiques de manga et manhwa.",
};

const STATS = [
  { num: SERIES.length + "+", label: "Séries critiquées" },
  { num: SERIES.filter(s => s.category === "manhwa").length + "+", label: "Manhwas référencés" },
  { num: "100%", label: "Indépendant & sans pub" },
  { num: "2024", label: "Année de création" },
];

const VALEURS = [
  {
    emoji: "🎯",
    title: "Honnêteté avant tout",
    desc: "Nos critiques disent ce qu'elles pensent vraiment — les points forts comme les faiblesses. Pas de note gonflée pour plaire à un éditeur.",
  },
  {
    emoji: "📚",
    title: "On lit vraiment",
    desc: "Chaque critique est rédigée par quelqu'un qui a lu la série. Pas de résumé Wikipedia, pas de copier-coller.",
  },
  {
    emoji: "🇫🇷",
    title: "En français, pour les francophones",
    desc: "On voulait une référence manga sérieuse en français. Les bons sites sont souvent en anglais — on comble ce manque.",
  },
  {
    emoji: "🚫",
    title: "Zéro publicité",
    desc: "Pas de bannières, pas de pop-ups, pas d'affiliés qui influencent nos notes. MangaInsight est construit pour les lecteurs.",
  },
];

export default function AProposPage() {
  return (
    <div className="min-h-screen">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');`}</style>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 md:px-12 py-24 border-b border-white/6">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-700/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-brand-500/10 blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-brand-400 mb-4">
            🎌 À propos de MangaInsight
          </p>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
            className="text-[clamp(3rem,8vw,5rem)] text-white leading-none mb-6">
            Fait par des<br /><span className="text-brand-400">passionnés</span>
          </h1>
          <p className="text-base text-white/50 leading-relaxed max-w-lg mx-auto">
            MangaInsight est né d'un constat simple : il n'existait pas de vraie référence francophone
            pour les critiques de manga et de manhwa. On a décidé de la construire.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 md:px-8 py-16">

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {STATS.map(s => (
            <div key={s.label} className="bg-white/3 border border-white/7 rounded-2xl p-5 text-center">
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
                className="text-[2.2rem] text-brand-400 leading-none mb-1">{s.num}</div>
              <div className="text-[0.7rem] font-bold tracking-[0.1em] uppercase text-white/35">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Histoire */}
        <div className="mb-16">
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
            className="text-[2rem] text-white mb-6">Notre histoire</h2>
          <div className="bg-white/3 border border-white/7 rounded-2xl p-7 space-y-4 text-[0.93rem] text-white/60 leading-relaxed">
            <p>
              Tout a commencé avec une frustration familière pour tout lecteur de manga francophone :
              les meilleurs sites de critique sont en anglais, les forums français manquent de rigueur,
              et les recommandations algorithmes des plateformes de streaming ne comprennent pas vraiment
              ce qu'on cherche.
            </p>
            <p>
              On voulait un endroit qui traite le manga et le manhwa avec le sérieux qu'ils méritent,
              avec de vraies critiques argumentées, des notes honnêtes, et des recommandations personnalisées
              basées sur les goûts plutôt que sur les algorithmes commerciaux.
            </p>
            <p>
              MangaInsight a été construit de A à Z, avec amour et beaucoup de lecture.
              Le catalogue grandit régulièrement, les critiques sont relues et mises à jour,
              et chaque nouvelle fonctionnalité est pensée pour rendre la découverte de manga
              plus simple et plus juste.
            </p>
          </div>
        </div>

        {/* Valeurs */}
        <div className="mb-16">
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
            className="text-[2rem] text-white mb-6">Ce en quoi on croit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {VALEURS.map(v => (
              <div key={v.title} className="bg-white/3 border border-white/7 rounded-2xl p-6 hover:border-brand-500/30 transition-colors">
                <div className="text-2xl mb-3">{v.emoji}</div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
                  className="text-[1.15rem] text-white mb-2">{v.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative rounded-2xl overflow-hidden border border-brand-500/25 bg-gradient-to-br from-brand-700/20 to-transparent p-8 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(139,92,246,0.15),transparent_70%)] pointer-events-none" />
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
            className="text-[2rem] text-white mb-3 relative">Prêt à explorer ?</h2>
          <p className="text-sm text-white/45 mb-6 relative">
            Plus de {SERIES.length} séries critiquées t'attendent.
          </p>
          <div className="flex gap-3 justify-center flex-wrap relative">
            <Link href="/critiques"
              className="px-6 py-3 rounded-xl bg-brand-500 text-white text-sm font-bold hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/25">
              Voir toutes les critiques
            </Link>
            <Link href="/recommandations"
              className="px-6 py-3 rounded-xl bg-white/6 border border-white/10 text-white/70 text-sm font-bold hover:bg-white/10 hover:text-white transition-all">
              ✨ Trouve ta série
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
