"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/lib/supabase/client";

const A = "#e03030";
const FH = "var(--font-barlow), 'Barlow Condensed', sans-serif";
const ANILIST_URL = "https://graphql.anilist.co";
const CIRCUMFERENCE = 2 * Math.PI * 34;

const QUERY_BY_ID = `query($id:Int){Media(id:$id,type:MANGA){averageScore}}`;
const QUERY_SEARCH = `query($s:String){Page(perPage:8){media(search:$s,type:MANGA){averageScore title{romaji english}}}}`;

interface SidebarScoresProps {
  slug: string;
  serieTitle: string;
  notrNote: number;
  anilistId?: number;
}

function normalize(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function bestScore(title: string, media: any[]): number | null {
  const nt = normalize(title);
  for (const m of media) {
    if (!m.averageScore) continue;
    const titles = [m.title?.romaji ?? "", m.title?.english ?? ""];
    if (titles.some(t => normalize(t) === nt)) return m.averageScore;
  }
  // fallback : substring match
  for (const m of media) {
    if (!m.averageScore) continue;
    const titles = [m.title?.romaji ?? "", m.title?.english ?? ""];
    if (titles.some(t => normalize(t).startsWith(nt) || nt.startsWith(normalize(t)))) return m.averageScore;
  }
  return null;
}

// Composant cercle de note — défini HORS du composant principal
function ScoreCircle({ value, max, label, color, loading }: {
  value: number | null; max: number; label: string; color: string; loading?: boolean;
}) {
  const pct = value !== null ? Math.min(value / max, 1) : 0;
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ position: "relative", width: 72, height: 72, margin: "0 auto 8px" }}>
        <svg width="72" height="72" style={{ transform: "rotate(-90deg)" }} viewBox="0 0 88 88">
          <circle cx="44" cy="44" r="34" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="7" />
          {value !== null && value > 0 && (
            <circle cx="44" cy="44" r="34" fill="none" stroke={color} strokeWidth="7"
              strokeDasharray={`${pct * CIRCUMFERENCE} ${CIRCUMFERENCE}`} strokeLinecap="round" />
          )}
        </svg>
        <div style={{
          position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: FH, fontSize: 16, fontWeight: 800, color: "#fff",
        }}>
          {loading ? "…" : value !== null ? value : "—"}
        </div>
      </div>
      <p style={{
        fontFamily: FH, fontSize: 9, fontWeight: 700,
        letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)",
      }}>
        {label}
      </p>
    </div>
  );
}

export default function SidebarScores({ slug, serieTitle, notrNote, anilistId }: SidebarScoresProps) {
  const [anilistScore, setAnilistScore] = useState<number | null>(null);
  const [readerAvg, setReaderAvg] = useState<number | null>(null);
  const [readerCount, setReaderCount] = useState(0);
  const [loadingAni, setLoadingAni] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        let score: number | null = null;
        if (anilistId) {
          const res = await fetch(ANILIST_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({ query: QUERY_BY_ID, variables: { id: anilistId } }),
          });
          const json = await res.json();
          score = json?.data?.Media?.averageScore ?? null;
        } else {
          const res = await fetch(ANILIST_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({ query: QUERY_SEARCH, variables: { s: serieTitle } }),
          });
          const json = await res.json();
          score = bestScore(serieTitle, json?.data?.Page?.media ?? []);
        }
        if (!cancelled && score) setAnilistScore(Math.round(score) / 10);
      } catch {
        // AniList inaccessible : le cercle reste vide
      }
      if (!cancelled) setLoadingAni(false);
    })();
    return () => { cancelled = true; };
  }, [serieTitle, anilistId]);

  useEffect(() => {
    supabase.from("comments").select("stars").eq("slug", slug).then(({ data }) => {
      if (data && data.length > 0) {
        const avg = data.reduce((s: number, r: any) => s + (r.stars ?? 0), 0) / data.length;
        setReaderAvg(Math.round(avg * 10) / 10);
        setReaderCount(data.length);
      }
    });
  }, [slug]);

  return (
    <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 4, padding: 20 }}>
      <p style={{ fontFamily: FH, fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 20 }}>
        Notes
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
        <ScoreCircle value={notrNote || null} max={10} label="Rédaction" color={A} />
        <ScoreCircle value={anilistScore} max={10} label="AniList" color="#02a9ff" loading={loadingAni} />
        <ScoreCircle value={readerAvg} max={10} label={readerCount > 0 ? `Lecteurs (${readerCount})` : "Lecteurs"} color="#fbbf24" />
      </div>
      <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-around", fontSize: 10, color: "rgba(255,255,255,0.2)", fontFamily: FH, letterSpacing: "0.08em" }}>
        <span><span style={{ color: A }}>■</span> Rédaction</span>
        <span><span style={{ color: "#02a9ff" }}>■</span> AniList</span>
        <span><span style={{ color: "#fbbf24" }}>■</span> Lecteurs</span>
      </div>
    </div>
  );
}
