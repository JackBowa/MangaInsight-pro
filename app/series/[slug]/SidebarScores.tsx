"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/lib/supabase/client";

const A = "#e03030";
const FH = "var(--font-barlow), 'Barlow Condensed', sans-serif";

interface SidebarScoresProps {
  slug: string;
  serieTitle: string;
  notrNote: number; // stars * 2, sur 10
}

export default function SidebarScores({ slug, serieTitle, notrNote }: SidebarScoresProps) {
  const [anilistScore, setAnilistScore] = useState<number | null>(null);
  const [readerAvg, setReaderAvg] = useState<number | null>(null);
  const [readerCount, setReaderCount] = useState(0);
  const [loadingAni, setLoadingAni] = useState(true);

  // Fetch score AniList
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/anilist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `
query ($search: String) {
  Page(perPage: 12) {
    media(search: $search, type: MANGA) {
      id
      title { romaji english native }
      coverImage { large }
      genres
      averageScore
      description(asHtml:false)
    }
  }
}`,
            variables: { search: serieTitle },
          }),
        });
        const data = await res.json();
        const media = data?.data?.Page?.media;
        if (media && media.length > 0 && media[0].averageScore) {
          setAnilistScore(media[0].averageScore); // 0-100
        }
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

  function ScoreCircle({ value, max, label, color }: { value: number; max: number; label: string; color: string }) {
    const pct = value / max;
    return (
      <div style={{ textAlign: "center" }}>
        <div style={{ position: "relative", width: 72, height: 72, margin: "0 auto 8px" }}>
          <svg width="72" height="72" style={{ transform: "rotate(-90deg)" }} viewBox="0 0 88 88">
            <circle cx="44" cy="44" r="34" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="7" />
            <circle
              cx="44" cy="44" r="34" fill="none"
              stroke={color} strokeWidth="7"
              strokeDasharray={`${pct * circumference} ${circumference}`}
              strokeLinecap="round"
            />
          </svg>
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: FH, fontSize: 16, fontWeight: 800, color: "#fff",
          }}>
            {value}
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
        {/* Notre note */}
        <ScoreCircle value={notrNote} max={10} label="Rédaction" color={A} />

        {/* AniList */}
        <div style={{ textAlign: "center" }}>
          <div style={{ position: "relative", width: 72, height: 72, margin: "0 auto 8px" }}>
            <svg width="72" height="72" style={{ transform: "rotate(-90deg)" }} viewBox="0 0 88 88">
              <circle cx="44" cy="44" r="34" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="7" />
              {anilistScore !== null && (
                <circle
                  cx="44" cy="44" r="34" fill="none"
                  stroke="#02a9ff" strokeWidth="7"
                  strokeDasharray={`${(anilistScore / 100) * circumference} ${circumference}`}
                  strokeLinecap="round"
                />
              )}
            </svg>
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: FH, fontSize: 16, fontWeight: 800, color: "#fff",
            }}>
              {loadingAni ? "…" : anilistScore !== null ? Math.round(anilistScore / 10) : "—"}
            </div>
          </div>
          <p style={{
            fontFamily: FH, fontSize: 9, fontWeight: 700,
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
          }}>
            AniList
          </p>
        </div>

        {/* Note lecteurs */}
        <div style={{ textAlign: "center" }}>
          <div style={{ position: "relative", width: 72, height: 72, margin: "0 auto 8px" }}>
            <svg width="72" height="72" style={{ transform: "rotate(-90deg)" }} viewBox="0 0 88 88">
              <circle cx="44" cy="44" r="34" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="7" />
              {readerAvg !== null && (
                <circle
                  cx="44" cy="44" r="34" fill="none"
                  stroke="#fbbf24" strokeWidth="7"
                  strokeDasharray={`${(readerAvg / 10) * circumference} ${circumference}`}
                  strokeLinecap="round"
                />
              )}
            </svg>
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: FH, fontSize: 16, fontWeight: 800, color: "#fff",
            }}>
              {readerAvg !== null ? readerAvg : "—"}
            </div>
          </div>
          <p style={{
            fontFamily: FH, fontSize: 9, fontWeight: 700,
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
          }}>
            {readerCount > 0 ? `Lecteurs (${readerCount})` : "Lecteurs"}
          </p>
        </div>
      </div>

      {/* Légende sous /10 */}
      <div style={{
        marginTop: 16, paddingTop: 14,
        borderTop: "1px solid rgba(255,255,255,0.05)",
        display: "flex", justifyContent: "space-around",
        fontSize: 10, color: "rgba(255,255,255,0.2)",
        fontFamily: FH, letterSpacing: "0.08em",
      }}>
        <span style={{ color: A }}>■</span> /10
        <span style={{ color: "#02a9ff" }}>■</span> /10
        <span style={{ color: "#fbbf24" }}>■</span> /10
      </div>
    </div>
  );
}
