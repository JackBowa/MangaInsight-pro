"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/lib/supabase/client";
import { ANILIST_SEARCH } from "@/lib/anilist";

const A = "#e03030";
const FH = "var(--font-barlow), 'Barlow Condensed', sans-serif";

interface SidebarScoresProps {
  slug: string;
  serieTitle: string;
  notrNote: number;
}

// Normalise une chaîne : minuscules, sans accents, sans ponctuation
function normalize(s: string): string {
  return s.toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Score de similarité 0-1 entre deux titres
function similarity(a: string, b: string): number {
  const na = normalize(a);
  const nb = normalize(b);
  if (na === nb) return 1;
  if (na.includes(nb) || nb.includes(na)) return 0.85;
  const wordsA = new Set(na.split(" ").filter(w => w.length > 2));
  const wordsB = new Set(nb.split(" ").filter(w => w.length > 2));
  const overlap = [...wordsA].filter(w => wordsB.has(w)).length;
  const total = Math.max(wordsA.size, wordsB.size, 1);
  return overlap / total;
}

// Trouve le meilleur match parmi les résultats AniList
function bestMatch(search: string, media: any[]): { score: number; confidence: number } | null {
  let best: { score: number; confidence: number } | null = null;

  for (const m of media) {
    if (!m.averageScore) continue;
    const titles = [
      m.title?.romaji ?? "",
      m.title?.english ?? "",
      m.title?.native ?? "",
    ];
    const conf = Math.max(...titles.map(t => t ? similarity(search, t) : 0));
    if (conf > 0.35 && (!best || conf > best.confidence)) {
      best = { score: m.averageScore, confidence: conf };
    }
  }
  return best;
}

export default function SidebarScores({ slug, serieTitle, notrNote }: SidebarScoresProps) {
  const [anilistScore, setAnilistScore] = useState<number | null>(null);
  const [readerAvg, setReaderAvg] = useState<number | null>(null);
  const [readerCount, setReaderCount] = useState(0);
  const [loadingAni, setLoadingAni] = useState(true);

  // Fetch score AniList avec matching par similarité
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/anilist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: ANILIST_SEARCH,
            variables: { search: serieTitle },
          }),
        });
        const data = await res.json();
        const media = data?.data?.Page?.media ?? [];
        const match = bestMatch(serieTitle, media);
        if (match) setAnilistScore(match.score);
      } catch {}
      setLoadingAni(false);
    })();
  }, [serieTitle]);

  // Fetch moyenne lecteurs depuis Supabase
  useEffect(() => {
    (async () => {
      try {
        const { data } = await supabase
          .from("comments")
          .select("stars")
          .eq("slug", slug);
        if (data && data.length > 0) {
          const avg = data.reduce((s: number, r: { stars: number }) => s + (r.stars ?? 0), 0) / data.length;
          setReaderAvg(Math.round(avg * 10) / 10);
          setReaderCount(data.length);
        }
      } catch {}
    })();
  }, [slug]);

  const circumference = 2 * Math.PI * 34;

  function Circle({
    value, max, label, color, loading = false,
  }: { value: number | null; max: number; label: string; color: string; loading?: boolean }) {
    const pct = value !== null ? value / max : 0;
    return (
      <div style={{ textAlign: "center" }}>
        <div style={{ position: "relative", width: 72, height: 72, margin: "0 auto 8px" }}>
          <svg width="72" height="72" style={{ transform: "rotate(-90deg)" }} viewBox="0 0 88 88">
            <circle cx="44" cy="44" r="34" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="7" />
            {value !== null && (
              <circle
                cx="44" cy="44" r="34" fill="none"
                stroke={color} strokeWidth="7"
                strokeDasharray={`${pct * circumference} ${circumference}`}
                strokeLinecap="round"
              />
            )}
          </svg>
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: FH, fontSize: 16, fontWeight: 800, color: "#fff",
          }}>
            {loading ? "…" : value !== null ? value : "—"}
          </div>
        </div>
        <p style={{
          fontFamily: FH, fontSize: 9, fontWeight: 700,
          letterSpacing: "0.14em", textTransform: "uppercase",
          color: "rgba(255,255,255,0.3)",
        }}>
          {label}
        </p>
      </div>
    );
  }

  // Score AniList converti en /10
  const anilistOn10 = anilistScore !== null ? Math.round(anilistScore / 10) : null;

  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: 4, padding: 20,
    }}>
      <p style={{
        fontFamily: FH, fontSize: 10, fontWeight: 700,
        letterSpacing: "0.14em", textTransform: "uppercase",
        color: "rgba(255,255,255,0.3)", marginBottom: 20,
      }}>
        Notes
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
        <Circle value={notrNote} max={10} label="Rédaction" color={A} />
        <Circle value={anilistOn10} max={10} label="AniList" color="#02a9ff" loading={loadingAni} />
        <Circle value={readerAvg} max={10} label={readerCount > 0 ? `Lecteurs (${readerCount})` : "Lecteurs"} color="#fbbf24" />
      </div>

      <div style={{
        marginTop: 16, paddingTop: 14,
        borderTop: "1px solid rgba(255,255,255,0.05)",
        display: "flex", justifyContent: "space-around",
        fontSize: 10, color: "rgba(255,255,255,0.2)",
        fontFamily: FH, letterSpacing: "0.08em",
      }}>
        <span><span style={{ color: A }}>■</span> Rédaction</span>
        <span><span style={{ color: "#02a9ff" }}>■</span> AniList</span>
        <span><span style={{ color: "#fbbf24" }}>■</span> Lecteurs</span>
      </div>
    </div>
  );
}
