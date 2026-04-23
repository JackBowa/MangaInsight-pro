"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PUBLISHED_SERIES as SERIES } from "@/data/series";

const A = "#e03030";
const FH = "var(--font-barlow), 'Barlow Condensed', sans-serif";

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
  "naruto": 72, "bleach": 74, "fairy-tail": 63, "gintama": 77,
  "black-clover": 36, "my-hero-academia": 40, "hunter-x-hunter": 37,
  "berserk": 41, "vagabond": 37, "slam-dunk": 31, "death-note": 12,
  "fullmetal-alchemist": 27, "spy-x-family": 13, "chainsaw-man": 12,
  "demon-slayer-kimetsu-no-yaiba": 23, "hells-paradise": 13,
  "the-promised-neverland": 20, "parasyte": 8, "pluto": 8,
  "monster": 18, "vinland-saga": 27, "made-in-abyss": 14,
  "blue-lock": 30, "kaiju-no-8": 11, "mashle": 16,
  "oshi-no-ko": 14, "dr-stone": 26, "fire-force": 34,
  "solo-leveling": 8, "tower-of-god": 20, "the-beginning-after-the-end": 22,
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
      setTimeout(() => setStep(step + 1), 180);
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
      moodTags.forEach(t => { if (serieTags.includes(t)) score += 3; });
      worldTags.forEach(t => { if (serieTags.includes(t)) score += 3; });
      if (ans.type !== "any") {
        if (serie.category === ans.type) score += 4;
        else score -= 2;
      }
      const vols = getVolumes(serie.slug);
      if (ans.length !== "any") {
        if (vols >= minVol && vols <= maxVol) score += 3;
        else score -= 1;
      }
      score += (serie.stars ?? 0) * 0.8;
      return { serie, score };
    });

    let top = scored.sort((a, b) => b.score - a.score).filter(s => s.score > 0).slice(0, 9).map(s => s.serie);
    if (top.length < 5) {
      const extras = scored.filter(s => !top.includes(s.serie)).slice(0, 9 - top.length).map(s => s.serie);
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
  const progress = ((step) / STEPS.length) * 100;

  return (
    <div style={{
      minHeight: "100vh", background: "#0a0a0a",
      display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", padding: "64px 16px",
    }}>
      <style>{`
        .quiz-option:hover { border-color: rgba(224,48,48,0.45) !important; background: rgba(224,48,48,0.06) !important; color: #fff !important; transform: translateX(4px); }
        .quiz-option { transition: all 0.2s; }
        .reco-card:hover { border-color: rgba(224,48,48,0.35) !important; transform: translateY(-4px); }
        .reco-card { transition: all 0.25s; }
        .reco-card:hover img { transform: scale(1.05); }
      `}</style>

      <div style={{ width: "100%", maxWidth: 560, position: "relative", zIndex: 10 }}>

        {!results ? (
          <>
            {/* En-tête */}
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <p style={{
                fontFamily: FH, fontSize: 11, fontWeight: 700,
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: A, marginBottom: 12,
              }}>
                Recommandations personnalisées
              </p>
              <h1 style={{
                fontFamily: FH, fontSize: "clamp(2.5rem,6vw,4rem)",
                fontWeight: 800, letterSpacing: "0.04em", textTransform: "uppercase",
                color: "#fff", lineHeight: 0.92, marginBottom: 10,
              }}>
                Trouve ta<br />
                <span style={{ color: A }}>prochaine série</span>
              </h1>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
                {STEPS.length} questions · 10 secondes
              </p>
            </div>

            {/* Barre de progression */}
            <div style={{
              height: 3, background: "rgba(255,255,255,0.07)",
              borderRadius: 2, marginBottom: 32, overflow: "hidden",
            }}>
              <div style={{
                height: "100%", background: A,
                borderRadius: 2, width: `${progress}%`,
                transition: "width 0.4s ease",
              }} />
            </div>

            {/* Carte question */}
            <div style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 4, padding: "32px 28px",
            }}>
              <p style={{
                fontFamily: FH, fontSize: 10, fontWeight: 700,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.25)", marginBottom: 10,
              }}>
                Question {step + 1} / {STEPS.length}
              </p>
              <h2 style={{
                fontFamily: FH, fontSize: "clamp(1.4rem,4vw,2rem)",
                fontWeight: 800, letterSpacing: "0.04em",
                color: "#fff", marginBottom: 24, lineHeight: 1.1,
                textTransform: "uppercase",
              }}>
                {current.question}
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {current.options.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => handleAnswer(current.id, opt.value)}
                    className="quiz-option"
                    style={{
                      textAlign: "left",
                      padding: "14px 18px",
                      borderRadius: 4,
                      border: answers[current.id] === opt.value
                        ? `1px solid rgba(224,48,48,0.5)`
                        : "1px solid rgba(255,255,255,0.08)",
                      background: answers[current.id] === opt.value
                        ? "rgba(224,48,48,0.08)"
                        : "rgba(255,255,255,0.02)",
                      color: answers[current.id] === opt.value ? "#fff" : "rgba(255,255,255,0.6)",
                      fontSize: 14, cursor: "pointer",
                      fontFamily: "var(--font-figtree), 'Figtree', sans-serif",
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {step > 0 && (
              <button
                onClick={() => setStep(step - 1)}
                style={{
                  display: "block", margin: "16px auto 0",
                  fontSize: 12, color: "rgba(255,255,255,0.25)",
                  background: "none", border: "none", cursor: "pointer",
                  fontFamily: FH, letterSpacing: "0.08em", textTransform: "uppercase",
                  transition: "color 0.15s",
                }}
              >
                ← Question précédente
              </button>
            )}
          </>
        ) : (
          <>
            {/* Résultats */}
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <p style={{
                fontFamily: FH, fontSize: 11, fontWeight: 700,
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: A, marginBottom: 12,
              }}>
                Sélectionnées pour toi
              </p>
              <h1 style={{
                fontFamily: FH, fontSize: "clamp(2rem,5vw,3rem)",
                fontWeight: 800, letterSpacing: "0.04em", textTransform: "uppercase",
                color: "#fff", lineHeight: 0.92, marginBottom: 8,
              }}>
                Tes <span style={{ color: A }}>recommandations</span>
              </h1>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
                {results.length} séries correspondant à tes goûts
              </p>
            </div>

            {/* Grille résultats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 28 }}>
              {results.map((serie, i) => (
                <Link key={serie.slug} href={`/series/${serie.slug}`} style={{ textDecoration: "none" }}>
                  <div className="reco-card" style={{
                    position: "relative", borderRadius: 4, overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}>
                    {i === 0 && (
                      <div style={{
                        position: "absolute", top: 6, left: 6, zIndex: 10,
                        fontFamily: FH, fontSize: 9, fontWeight: 800,
                        letterSpacing: "0.1em", textTransform: "uppercase",
                        background: A, color: "#fff",
                        padding: "3px 7px", borderRadius: 4,
                      }}>
                        Top pick
                      </div>
                    )}
                    <div style={{ aspectRatio: "2/3", position: "relative", overflow: "hidden" }}>
                      <Image
                        src={serie.cover || "/_placeholder.jpg"}
                        alt={serie.title}
                        fill sizes="(max-width: 560px) 33vw, 180px"
                        style={{ objectFit: "cover", transition: "transform 0.4s" }}
                      />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 55%)" }} />
                      <div style={{ position: "absolute", bottom: 8, left: 8, right: 8 }}>
                        <p style={{
                          fontFamily: FH, fontSize: 11, fontWeight: 700,
                          color: "#fff", letterSpacing: "0.04em",
                          textTransform: "uppercase", lineHeight: 1.2,
                        }}>
                          {serie.title}
                        </p>
                        {serie.stars ? (
                          <div style={{ display: "flex", gap: 2, marginTop: 4 }}>
                            {[1,2,3,4,5].map(n => (
                              <span key={n} style={{ fontSize: 8, color: n <= serie.stars! ? A : "rgba(255,255,255,0.2)" }}>★</span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
              <button
                onClick={reset}
                style={{
                  padding: "12px 24px", borderRadius: 4,
                  background: A, color: "#fff", border: "none",
                  fontFamily: FH, fontSize: 12, fontWeight: 700,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  cursor: "pointer", boxShadow: "0 4px 20px rgba(224,48,48,0.3)",
                  transition: "all 0.15s",
                }}
              >
                Recommencer
              </button>
              <Link
                href="/critiques"
                style={{
                  padding: "12px 24px", borderRadius: 4,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: FH, fontSize: 12, fontWeight: 700,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  textDecoration: "none", transition: "all 0.15s",
                }}
              >
                Tout le catalogue →
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
