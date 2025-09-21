// app/series/[slug]/page.tsx
import { notFound } from "next/navigation";
import { SERIES } from "@/data/series";

function Stars({ n = 0 }: { n?: number }) {
  return (
    <div style={{ display: "flex", gap: 6, justifyContent: "center", margin: "8px 0 16px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ fontSize: 24, color: i < (n || 0) ? "gold" : "gray" }}>★</span>
      ))}
    </div>
  );
}

export default function SeriePage({ params }: { params: { slug: string } }) {
  const serie = SERIES.find((s) => s.slug === params.slug);
  if (!serie) return notFound();

  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh", fontFamily: "system-ui" }}>
      <header style={{ padding: "16px", borderBottom: "1px solid #222" }}>
        <a href="/critiques" style={{ color: "#8b5cf6", textDecoration: "none" }}>← Retour aux critiques</a>
      </header>

      <article style={{ maxWidth: 900, margin: "24px auto", padding: "0 16px" }}>
        <h1 style={{ marginBottom: 4 }}>{serie.title}</h1>
        {serie.tags && <div style={{ opacity: 0.8, marginBottom: 16 }}>{serie.tags}</div>}

        {serie.cover && (
          <img
            src={serie.cover}
            alt={serie.title}
            style={{ width: "100%", maxHeight: 360, objectFit: "cover", borderRadius: 12, marginBottom: 16 }}
          />
        )}

        {typeof serie.stars === "number" && <Stars n={serie.stars} />}

        {serie.synopsis && (
          <>
            <h2>Synopsis</h2>
            <p>{serie.synopsis}</p>
          </>
        )}

        {serie.reviewHtml && (
          <>
            <h2>Avis</h2>
            <div dangerouslySetInnerHTML={{ __html: serie.reviewHtml }} />
          </>
        )}

        {serie.shops && serie.shops.length > 0 && (
          <>
            <h2>Boutiques</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {serie.shops.map((s, i) => (
                <a key={i} href={s.url} target="_blank" rel="noreferrer" title={s.name} style={{ display: "inline-block" }}>
                  <img src={s.logo} alt={s.name} style={{ height: 50 }} />
                </a>
              ))}
            </div>
          </>
        )}

        {serie.streaming && serie.streaming.length > 0 && (
          <>
            <h2>Animé</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {serie.streaming.map((s, i) => (
                <a key={i} href={s.url} target="_blank" rel="noreferrer" title={s.name} style={{ display: "inline-block" }}>
                  <img src={s.logo} alt={s.name} style={{ height: 50 }} />
                </a>
              ))}
            </div>
          </>
        )}

        {serie.live && serie.live.length > 0 && (
          <>
            <h2>Live action</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {serie.live.map((s, i) => (
                <a key={i} href={s.url} target="_blank" rel="noreferrer" title={s.name} style={{ display: "inline-block" }}>
                  <img src={s.logo} alt={s.name} style={{ height: 50 }} />
                </a>
              ))}
            </div>
          </>
        )}
      </article>

      <footer style={{ textAlign: "center", padding: "20px 0", borderTop: "1px solid #222" }}>
        <small>© 2025 Mangainsight</small>
      </footer>
    </main>
  );
}
