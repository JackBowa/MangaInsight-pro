// app/critiques/page.tsx
"use client";
import { SERIES } from "@/data/series";
import { useState } from "react";

const group = {
  mangas: SERIES.filter((s) => s.category === "manga"),
  manhwas: SERIES.filter((s) => s.category === "manhwa"),
};

export default function Critiques() {
  const [open, setOpen] = useState<{ [k: string]: boolean }>({ mangas: true, manhwas: false });

  const Accordeon = ({ id, title, items }: { id: string; title: string; items: typeof SERIES }) => (
    <div style={{ marginBottom: 12 }}>
      <button
        onClick={() => setOpen((o) => ({ ...o, [id]: !o[id] }))}
        style={{
          width: "100%",
          textAlign: "left",
          cursor: "pointer",
          background: "#444",
          border: "1px solid #666",
          padding: "10px 12px",
          borderRadius: 8,
          color: "#fff",
        }}
      >
        {title}
      </button>
      {open[id] && (
        <div style={{ border: "1px solid #666", borderTop: "none", padding: 12, borderRadius: "0 0 8px 8px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: 12,
            }}
          >
            {items.map((s) => (
              <a
                key={s.slug}
                href={`/series/${s.slug}`}
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "#fff",
                  border: "1px solid #222",
                  borderRadius: 12,
                  padding: 12,
                  background: "#111",
                }}
              >
                {s.cover && (
                  <img
                    src={s.cover}
                    alt={s.title}
                    style={{ width: "100%", height: 140, objectFit: "cover", borderRadius: 8, marginBottom: 8 }}
                  />
                )}
                <div style={{ fontWeight: 700 }}>{s.title}</div>
                {s.tags && <div style={{ opacity: 0.7, fontSize: 14 }}>{s.tags}</div>}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh", fontFamily: "system-ui" }}>
      {/* Bannière + menu simple */}
      <header role="banner" style={{ margin: 0, padding: 0 }}>
        <img
          src="https://i.postimg.cc/dt1vhRGY/IMG-0126.jpg"
          alt="Manga insight"
          width={2000}
          height={250}
          style={{ display: "block", width: "100%", height: "auto" }}
        />
      </header>

      <section style={{ maxWidth: 1000, margin: "20px auto", padding: "0 16px" }}>
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>Critiques des mangas et des manhwas</h2>

        <Accordeon id="mangas" title="Mangas" items={group.mangas} />
        <Accordeon id="manhwas" title="Manhwas" items={group.manhwas} />
      </section>

      <footer style={{ textAlign: "center", padding: "20px 0", borderTop: "1px solid #222" }}>
        <small>
          <a href="https://www.instagram.com/mangainsight_review/" target="_blank" rel="noreferrer" style={{ marginRight: 12 }}>
            Instagram
          </a>
          <a href="https://www.facebook.com/profile.php?id=61558806596916" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </small>
      </footer>
    </main>
  );
}
