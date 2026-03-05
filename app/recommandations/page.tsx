"use client";

import { useState } from "react";
import Link from "next/link";
import { SERIES } from "@/data/series";

const STEPS = [
  {
    id: "mood",
    question: "T'as envie de quoi ce soir ?",
    options: [
      { label: "🔥 Action & adrénaline", value: "action" },
      { label: "😂 Rire et bonne humeur", value: "comedy" },
      { label: "🌑 Sombre et intense", value: "dark" },
      { label: "💭 Réfléchir et s'évader", value: "deep" },
    ],
  },
  {
    id: "length",
    question: "Tu veux quelque chose de...",
    options: [
      { label: "⚡ Court — moins de 15 tomes", value: "short" },
      { label: "📚 Moyen — 15 à 40 tomes", value: "medium" },
      { label: "🌊 Long — saga épique", value: "long" },
      { label: "🤷 Peu importe", value: "any" },
    ],
  },
  {
    id: "world",
    question: "Dans quel univers ?",
    options: [
      { label: "⚔️ Fantasy & magie", value: "fantasy" },
      { label: "🏫 Lycée & vie quotidienne", value: "school" },
      { label: "🚀 Sci-fi & futur", value: "scifi" },
      { label: "🌍 Monde réel", value: "real" },
    ],
  },
  {
    id: "type",
    question: "Tu préfères...",
    options: [
      { label: "📖 Manga japonais", value: "manga" },
      { label: "🇰🇷 Manhwa coréen", value: "manhwa" },
      { label: "🎌 Peu importe", value: "any" },
    ],
  },
];

const SCORE_MAP: Record<string, Record<string, string[]>> = {
  mood: {
    action:  ["Action", "Combat", "Tournoi", "Compétition", "Arts martiaux", "Boxe", "Football"],
    comedy:  ["Comédie", "Parodie", "Quotidien", "Harem", "École"],
    dark:    ["Dark Fantasy", "Dark", "Horreur", "Survie", "Thriller", "Psychologie"],
    deep:    ["Philosophie", "Drame", "Sci-fi", "Thriller", "Mystère", "Cyberpunk"],
  },
  world: {
    fantasy: ["Fantasy", "Dark Fantasy", "Magie", "Démons", "Isekai", "Chevaliers"],
    school:  ["Lycée", "Académie", "École", "Tournoi"],
    scifi:   ["Sci-fi", "Cyberpunk", "Robotique", "Futur", "Espace"],
    real:    ["Sport", "Boxe", "Football", "Basket", "Mafia", "Enquête"],
  },
};

const LENGTH_MAP: Record<string, [number, number]> = {
  short:  [1, 15],
  medium: [15, 40],
  long:   [40, 9999],
  any:    [1, 9999],
};

// Approximation des longueurs par slug (volumes)
const VOLUME_COUNTS: Record<string, number> = {
  "naruto": 72, "one-piece": 110, "bleach": 74, "fairy-tail": 63,
  "black-clover": 36, "my-hero-academia": 40, "hunter-x-hunter": 37,
  "berserk": 41, "vagabond": 37, "slam-dunk": 31, "death-note": 12,
  "fullmetal-alchemist": 27, "spy-x-family": 13, "chainsaw-man": 12,
  "demon-slayer-kimetsu-no-yaiba": 23, "hells-paradise": 13,
  "the-promised-neverland": 20, "parasyte": 8, "pluto": 8,
  "monster": 18, "vinland-saga": 27, "made-in-abyss": 14,
  "blue-lock": 30, "kaiju-no-8": 11, "mashle": 16,
  "oshi-no-ko": 14, "dr-stone": 26, "fire-force": 34,
  "soul-eater": 25, "noragami": 27, "tokyo-ghoul": 14,
  "re-zero": 18, "tower-of-god": 20, "solo-leveling": 8,
};

function getVolumes(slug: string): number {
  return VOLUME_COUNTS[slug] ?? 20; // défaut : 20
}

export default function RecommandationsPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<typeof SERIES | null>(null);

  function handleAnswer(id: string, value: string) {
    const newAnswers = { ...answers, [id]: value };
    setAnswers(newAnswers);

    if (step < STEPS.length - 1) {
      setTimeout(() => setStep(step + 1), 200);
    } else {
      computeResults(newAnswers);
    }
  }

  function computeResults(ans: Record<string, string>) {
    const moodTags = SCORE_MAP.mood[ans.mood] ?? [];
    const worldTags = SCORE_MAP.world[ans.world] ?? [];
    const [minVol, maxVol] = LENGTH_MAP[ans.length] ?? [1, 9999];

    const scored = SERIES.map(serie => {
      const serieTags = (serie.tags ?? "").split("·").map(t => t.trim());
      let score = 0;

      moodTags.forEach(t => { if (serieTags.includes(t)) score += 2; });
      worldTags.forEach(t => { if (serieTags.includes(t)) score += 2; });

      if (ans.type !== "any" && serie.category === ans.type) score += 3;
      if (ans.type !== "any" && serie.category !== ans.type) score -= 5;

      const vols = getVolumes(serie.slug);
      if (vols >= minVol && vols <= maxVol) score += 2;

      score += (serie.stars ?? 0) * 0.5;

      return { serie, score };
    });

    const top = scored
      .filter(s => s.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 9)
      .map(s => s.serie);

    setResults(top);
  }

  function reset() {
    setStep(0);
    setAnswers({});
    setResults(null);
  }

  const current = STEPS[step];
  const progress = (step / STEPS.length) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');`}</style>

      {/* Fond */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-600/10 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-brand-400/8 blur-[80px]" />
      </div>

      <div className="relative z-10 w-full max-w-xl">

        {!results ? (
          <>
            {/* En-tête */}
            <div className="text-center mb-10">
              <p className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-brand-400 mb-3">
                🎌 Recommandations personnalisées
              </p>
              <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
                className="text-[3rem] text-white leading-none mb-2">
                Trouve ta<br /><span className="text-brand-400">prochaine série</span>
              </h1>
              <p className="text-sm text-white/40">4 questions · 10 secondes</p>
            </div>

            {/* Barre de progression */}
            <div className="h-1 bg-white/8 rounded-full mb-8 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-brand-600 to-brand-400 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }} />
            </div>

            {/* Question */}
            <div className="bg-white/3 border border-white/8 rounded-2xl p-8">
              <p className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-white/30 mb-3">
                Question {step + 1} sur {STEPS.length}
              </p>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
                className="text-[1.8rem] text-white mb-6 leading-tight">
                {current.question}
              </h2>

              <div className="grid grid-cols-1 gap-3">
                {current.options.map(opt => (
                  <button key={opt.value} onClick={() => handleAnswer(current.id, opt.value)}
                    className={`text-left px-5 py-4 rounded-xl border text-sm font-medium transition-all duration-200
                      hover:-translate-y-0.5 hover:border-brand-500/50 hover:bg-brand-500/8 hover:text-white
                      ${answers[current.id] === opt.value
                        ? "border-brand-500/60 bg-brand-500/12 text-white"
                        : "border-white/8 bg-white/2 text-white/60"
                      }`}>
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Retour */}
            {step > 0 && (
              <button onClick={() => setStep(step - 1)}
                className="mt-4 text-xs text-white/30 hover:text-white/60 transition-colors mx-auto block">
                ← Question précédente
              </button>
            )}
          </>
        ) : (
          <>
            {/* Résultats */}
            <div className="text-center mb-8">
              <p className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-brand-400 mb-3">
                ✨ Sélectionnées pour toi
              </p>
              <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
                className="text-[2.8rem] text-white leading-none mb-2">
                Tes <span className="text-brand-400">recommandations</span>
              </h1>
              <p className="text-sm text-white/40">{results.length} séries correspondant à tes goûts</p>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-8">
              {results.map((serie, i) => (
                <Link key={serie.slug} href={`/series/${serie.slug}`}
                  className="group relative rounded-xl overflow-hidden border border-white/8 hover:border-brand-500/40 transition-all duration-300 hover:-translate-y-1">
                  {i === 0 && (
                    <div className="absolute top-2 left-2 z-20 bg-brand-500 text-white text-[0.6rem] font-bold px-2 py-0.5 rounded-full">
                      ⭐ Top pick
                    </div>
                  )}
                  <div style={{ aspectRatio: "2/3" }} className="relative overflow-hidden">
                    <img src={serie.cover || "/_placeholder.jpg"} alt={serie.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => { const img = e.currentTarget as HTMLImageElement; if (!img.dataset.fb) { img.dataset.fb="1"; img.src="/_placeholder.jpg"; }}} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <p style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        className="text-[0.85rem] text-white leading-tight">{serie.title}</p>
                      {serie.stars ? (
                        <div className="flex gap-0.5 mt-1">
                          {[1,2,3,4,5].map(n => (
                            <svg key={n} className={`w-2 h-2 ${n <= serie.stars! ? "text-brand-400" : "text-white/20"}`} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex gap-3 justify-center">
              <button onClick={reset}
                className="px-6 py-3 rounded-xl bg-brand-500 text-white text-sm font-bold hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/25">
                🔄 Recommencer
              </button>
              <Link href="/critiques"
                className="px-6 py-3 rounded-xl bg-white/6 border border-white/10 text-white/70 text-sm font-bold hover:bg-white/10 hover:text-white transition-all">
                Voir tout le catalogue →
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
