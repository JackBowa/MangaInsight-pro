"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/lib/supabase/client";

const A = "#e03030";
const FH = "var(--font-barlow), 'Barlow Condensed', sans-serif";
const CIRC = 2 * Math.PI * 34;

const Q_ID = `query ($id: Int) { Media(id: $id, type: MANGA) { averageScore } }`;
const Q_SEARCH = `query ($search: String) { Page(perPage: 5) { media(search: $search, type: MANGA) { averageScore title { romaji english } } } }`;

interface Props {
  slug: string;
  serieTitle: string;
  notrNote: number;
  anilistId?: number;
}

function normalize(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function ScoreCircle({ value, max, label, color, loading }: {
  value: number | null; max: number; label: string; color: string; loading?: boolean;
}) {
  const pct = value ? Math.min(value / max, 1) : 0;
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ position: "relative", width: 72, height: 72, margin: "0 auto 8px" }}>
        <svg width="72" height="72" style={{ transform: "rotate(-90deg)" }} viewBox="0 0 88 88">
          <circle cx="44" cy="44" r="34" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="7" />
          {!!value && (
            <circle cx="44" cy="44" r="34" fill="none" stroke={color} strokeWidth="7"
              strokeDasharray={`${pct * CIRC} ${CIRC}`} strokeLinecap="round" />
          )}
        </svg>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: FH, fontSize: 16, fontWeight: 800, color: "#fff" }}>
          {loading ? "…" : value ?? "—"}
        </div>
      </div>
      <p style={{ fontFamily: FH, fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>
        {label}
      </p>
    </div>
  );
}

export default function SidebarScores({ slug, serieTitle, notrNote, anilistId }: Props) {
  const [anilistScore, setAnilistScore] = useState<number | null>(null);
  const [readerAvg, setReaderAvg] = useState<number | null>(null);
  const [readerCount, setReaderCount] = useState(0);
  const [loadingAni, setLoadingAni] = useState(true);

  useEffect(() => {
    const query = anilistId ? Q_ID : Q_SEARCH;
    const variables = anilistId ? { id: anilistId } : { search: serieTitle };

    fetch("/api/anilist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
    })
      .then(r => r.json())
      .then(json => {
        let raw: number | null = null;
        if (anilistId) {
          raw = json?.data?.Media?.averageScore ?? null;
        } else {
          const media: any[] = json?.data?.Page?.media ?? [];
          const nt = normalize(serieTitle);
          for (const m of media) {
            if (!m.averageScore) continue;
            if ([m.title?.romaji ?? "", m.title?.english ?? ""].some(t => normalize(t) === nt)) {
              raw = m.averageScore;
              break;
            }
          }
          if (!raw && media[0]?.averageScore) raw = media[0].averageScore;
        }
        if (raw) setAnilistScore(Math.round(raw) / 10);
      })
      .catch(() => {})
      .finally(() => setLoadingAni(false));
  }, [serieTitle, anilistId]);

  useEffect(() => {
    supabase.from("comments").select("stars").eq("slug", slug).then(({ data }) => {
      if (data?.length) {
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
