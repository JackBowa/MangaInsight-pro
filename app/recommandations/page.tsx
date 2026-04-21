"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PUBLISHED_SERIES as SERIES } from "@/data/series";

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
      { label: "⚡ Court, moins de 15 tomes", value: "short" },
      { label: "📚 Moyen, 15 à 40 tomes", value: "medium" },
      { label: "🌊 Long, saga épique", value: "long" },
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
    action:  ["Action", "Combat", "Tournoi", "Compétition", "Arts martiaux", "Boxe", "Football", "Shōnen", "Shônen", "Super-héros", "Duel", "Rivalité", "Rivalités", "Vengeance"],
    comedy:  ["Comédie", "Parodie", "Quotidien", "Harem", "École", "Famille", "Espionnage", "Duo", "Amitié"],
    dark:    ["Dark Fantasy", "Dark", "Horreur", "Survie", "Thriller", "Psychologie", "Post-apo", "Apocalypse", "Battle royale", "Survival", "Survival Game", "Jeu mortel", "Tragédie", "Violence", "Prison"],
    deep:    ["Philosophie", "Drame", "Sci-fi", "Thriller", "Mystère", "Cyberpunk", "Psychologie", "Enquête", "Identité", "Méta", "Scénario"],
  },
  world: {
    fantasy: ["Fantasy", "Dark Fantasy", "Magie", "Démons", "Isekai", "Chevaliers", "Surnaturel", "Réincarnation", "Monde parallèle", "Donjon", "Donjons", "Guilde", "Chasseurs", "Mythologie", "Dieux", "Esprits", "Fantastique", "Fantaisie"],
    school:  ["Lycée", "Académie", "École", "Tournoi", "Compétition"],
    scifi:   ["Sci-fi", "Cyberpunk", "Robotique", "Futur", "Espace", "Science", "Boucle temporelle", "Voyage temporel"],
    real:    ["Sport", "Boxe", "Football", "Basket", "Mafia", "Enquête", "Historique", "Samouraï", "Délinquants", "Armée", "Assassins"],
  },
};

const LENGTH_MAP: Record<string, [number, number]> = {
  short:  [1, 15],
  medium: [15, 40],
  long:   [40, 9999],
  any:    [1, 9999],
};

const VOLUME_COUNTS: Record<string, number> = {
  // Manga
  "naruto": 72, "bleach": 74, "fairy-tail": 63, "gintama": 77,
  "black-clover": 36, "my-hero-academia": 40, "hunter-x-hunter": 37,
  "berserk": 41, "vagabond": 37, "slam-dunk": 31, "death-note": 12,
  "fullmetal-alchemist": 27, "spy-x-family": 13, "chainsaw-man": 12,
  "demon-slayer-kimetsu-no-yaiba": 23, "hells-paradise": 13,
  "the-promised-neverland": 20, "parasyte": 8, "pluto": 8,
  "monster": 18, "vinland-saga": 27, "made-in-abyss": 14,
  "blue-lock": 30, "kaiju-no-8": 11, "mashle": 16,
  "oshi-no-ko": 14, "dr-stone": 26, "fire-force": 34,
  "soul-eater": 25, "noragami": 27, "tokyo-ghoul": 14,
  "l-attaque-des-titans": 34, "assassination-classroom": 21,
  "black-butler": 34, "blue-exorcist": 28, "claymore": 27,
  "d-gray-man": 27, "jojos-bizarre-adventure": 130, "kenshin": 28,
  "kengan-ashura": 27, "akatsuki-no-yona": 43, "seven-deadly-sins": 41,
  "beelzebub": 43, "katekyo-hitman-reborn": 42, "shaman-king": 35,
  "magi": 37, "hajime-no-ippo": 141,
  "btooom": 26, "cage-of-eden": 21, "deadman-wonderland": 13,
  "eden-zero": 29, "fate-stay-night": 10, "highschool-dxd": 25,
  "isekai-cheat-magician": 13, "magister-negi-magi": 38,
  "monster-musume": 17, "radiant": 22, "rosario-vampire": 24,
  "so-im-a-spider-so-what": 16, "trigun": 14, "trinity-seven": 22,
  "akame-ga-kill": 15, "bastard": 27, "black-bullet": 5,
  "black-lagoon": 11, "blame": 10, "blood-lad": 17,
  "bungou-stray-dogs": 25, "coppelion": 26, "devilman-crybaby": 5,
  "dororo": 4, "en-en-no-shouboutai": 34, "zatch-bell": 33,
  "wind-breaker": 21, "goblin-slayer": 17, "grimgar": 18,
  "no-game-no-life": 10, "record-of-ragnarok": 17,
  "the-rising-of-the-shield-hero": 25, "sword-art-online": 27,
  "arifureta": 14, "angel-beats": 3, "steins-gate": 5,
  "sk8-the-infinity": 2, "psycho-pass": 6, "overlord": 16,
  // Manhwa
  "solo-leveling": 8, "tower-of-god": 20, "re-zero": 18,
  "the-player-who-cant-level-up": 7, "the-beginning-after-the-end": 22,
  "kill-the-hero": 13, "eleceed": 25, "omniscient-reader": 8,
  "sss-class-suicide-hunter": 13, "my-wife-is-a-demon-queen": 9,
  "the-god-of-high-school": 20, "goblin-nightmare": 5,
  "kuroko-no-basket": 30, "black-god": 10,
};

function getVolumes(slug: string): number {
  return VOLUME_COUNTS[slug] ?? 18;
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
      const serieTags = (serie.tags ?? "").split("·").map((t: string) => t.trim());
      let score = 0;

      // Mood : +3 par tag correspondant
      moodTags.forEach(t => { if (serieTags.includes(t)) score += 3; });
      // Univers : +3 par tag correspondant
      worldTags.forEach(t => { if (serieTags.includes(t)) score += 3; });

      // Type : bonus si match, légère pénalité si non (ne tue pas le résultat)
      if (ans.type !== "any") {
        if (serie.category === ans.type) score += 4;
        else score -= 2;
      }

      // Longueur : bonus si dans la fourchette, malus modéré sinon
      const vols = getVolumes(serie.slug);
      if (ans.length !== "any") {
        if (vols >= minVol && vols <= maxVol) score += 3;
        else score -= 1;
      }

      // Note editoriale : bonus qualité
      score += (serie.stars ?? 0) * 0.8;

      return { serie, score };
    });

    const sorted = scored.sort((a, b) => b.score - a.score);

    // Résultats principaux : score > 0
    let top = sorted.filter(s => s.score > 0).slice(0, 9).map(s => s.serie);

    // Fallback : si moins de 5 résultats, compléter avec les mieux notés sans filtre
    if (top.length < 5) {
      const extras = sorted
        .filter(s => !top.includes(s.serie))
        .slice(0, 9 - top.length)
        .map(s => s.serie);
      top = [...top, ...extras];
    }

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
              <h1 style={{ fontFamily: "var(--font-bebas), sans-serif", letterSpacing: "0.04em" }}
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
              <h2 style={{ fontFamily: "var(--font-bebas), sans-serif", letterSpacing: "0.04em" }}
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
              <h1 style={{ fontFamily: "var(--font-bebas), sans-serif", letterSpacing: "0.04em" }}
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
                    <Image src={serie.cover || "/_placeholder.jpg"} alt={serie.title}
                      fill sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <p style={{ fontFamily: "var(--font-bebas), sans-serif" }}
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
