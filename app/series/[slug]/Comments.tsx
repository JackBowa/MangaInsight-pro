"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/lib/supabase/client";
import { useUser } from "@/lib/lib/useUser";

const A = "#e03030";
const FH = "var(--font-barlow), 'Barlow Condensed', sans-serif";

type CommentRow = {
  id: string;
  slug: string;
  name: string;
  stars: number;
  text: string;
  created_at: string;
  user_id: string | null;
  approved: boolean;
};

export default function Comments({
  slug,
  title,
  max = 10,
}: {
  slug: string;
  title: string;
  max?: number;
}) {
  const user = useUser();
  const [items, setItems] = useState<CommentRow[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [stars, setStars] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("profiles")
      .select("display_name")
      .eq("id", user.id)
      .single()
      .then(({ data }) => {
        if (data?.display_name) setName(data.display_name);
      });
  }, [user]);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("slug", slug)
        .order("created_at", { ascending: false });
      if (!error && data) setItems(data as CommentRow[]);
    })();
  }, [slug, user?.id]);

  const avg =
    items.length > 0
      ? Math.round((items.reduce((s, it) => s + (it.stars ?? 0), 0) / items.length) * 10) / 10
      : null;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!user) return setError("Vous devez être connecté pour publier un avis.");
    if (!name.trim()) return setError("Votre pseudo est requis.");
    if (name.trim().length > 50) return setError("Pseudo trop long (50 caractères max).");
    if (stars < 1 || stars > max) return setError(`Note entre 1 et ${max}.`);
    if (!text.trim()) return setError("Écrivez un avis.");
    if (text.trim().length > 1000) return setError("Avis trop long (1000 caractères max).");

    setBusy(true);
    const { data, error } = await supabase
      .from("comments")
      .insert({ slug, name: name.trim(), stars, text: text.trim(), user_id: user.id })
      .select("*")
      .single();
    setBusy(false);

    if (error) return setError(error.message);
    setItems([data as CommentRow, ...items]);
    setText("");
    setStars(0);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "10px 14px", borderRadius: 4,
    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
    color: "#fff", fontSize: 13, outline: "none", transition: "border-color 0.15s",
    fontFamily: "var(--font-figtree), 'Figtree', sans-serif",
  };

  return (
    <section>
      {/* Moyenne */}
      {avg !== null && (
        <div style={{ marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.4)", fontFamily: FH, letterSpacing: "0.06em" }}>
          Note moyenne lecteurs :{"  "}
          <span style={{ color: A, fontWeight: 700 }}>{avg}/{max}</span>
          {"  "}({items.length} avis)
        </div>
      )}

      {/* Formulaire */}
      <form onSubmit={onSubmit} style={{
        background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 4, padding: 20, marginBottom: 24,
      }}>
        {!user && (
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 12 }}>
            <a href="/compte" style={{ color: A, textDecoration: "none" }}>Connectez-vous</a> pour publier un avis.
          </p>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Votre pseudo"
              disabled={!user || busy}
              style={{ ...inputStyle, flex: 1, minWidth: 140 }}
            />
            {/* Blocs note 1-10 */}
            <div style={{ display: "flex", alignItems: "center", gap: 4, flexWrap: "wrap" }}>
              {Array.from({ length: max }).map((_, i) => {
                const idx = i + 1;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setStars(idx)}
                    disabled={!user || busy}
                    style={{
                      width: 32, height: 32, borderRadius: 4, border: "none",
                      background: idx <= stars ? A : "rgba(255,255,255,0.07)",
                      color: idx <= stars ? "#fff" : "rgba(255,255,255,0.35)",
                      fontFamily: FH, fontSize: 13, fontWeight: 700,
                      cursor: !user || busy ? "default" : "pointer",
                      transition: "all 0.1s",
                    }}
                  >
                    {idx}
                  </button>
                );
              })}
              {stars > 0 && (
                <span style={{ fontSize: 12, color: A, marginLeft: 4, fontFamily: FH, fontWeight: 700 }}>
                  {stars}/10
                </span>
              )}
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <textarea
              value={text}
              onChange={e => setText(e.target.value.slice(0, 1000))}
              placeholder="Votre avis (pas de spoilers non avertis)"
              rows={4}
              disabled={!user || busy}
              style={{ ...inputStyle, resize: "vertical" }}
            />
            <span style={{
              position: "absolute", bottom: 8, right: 12,
              fontSize: 11, color: text.length > 900 ? "#f97316" : "rgba(255,255,255,0.2)",
            }}>
              {text.length}/1000
            </span>
          </div>

          {error && (
            <div style={{
              fontSize: 13, color: "#f87171",
              border: "1px solid rgba(248,113,113,0.3)",
              borderRadius: 4, padding: "8px 12px",
              background: "rgba(239,68,68,0.08)",
            }}>
              {error}
            </div>
          )}

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              type="submit"
              disabled={!user || busy}
              style={{
                padding: "9px 20px", borderRadius: 4,
                background: !user || busy ? "rgba(255,255,255,0.1)" : A,
                color: !user || busy ? "rgba(255,255,255,0.4)" : "#fff",
                border: "none", fontFamily: FH, fontSize: 12, fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
                cursor: !user || busy ? "not-allowed" : "pointer",
                transition: "all 0.15s",
              }}
            >
              {busy ? "Publication..." : "Publier l'avis"}
            </button>
          </div>
        </div>
      </form>

      {/* Liste des commentaires */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {items.map(it => (
          <article
            key={it.id}
            style={{
              background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 4, padding: "14px 16px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <span style={{ fontFamily: FH, fontSize: 13, fontWeight: 700, color: "#fff", letterSpacing: "0.06em" }}>
                {it.name}
              </span>
              <span style={{ color: "#fbbf24", fontSize: 14, letterSpacing: 2 }}>
                {"★".repeat(it.stars)}
                <span style={{ color: "rgba(255,255,255,0.15)" }}>{"★".repeat(max - it.stars)}</span>
              </span>
            </div>
            {!it.approved && (
              <p style={{ fontSize: 11, color: "#f97316", marginBottom: 6, fontFamily: FH, letterSpacing: "0.08em" }}>
                En attente de modération
              </p>
            )}
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>{it.text}</p>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", marginTop: 8 }}>
              {new Date(it.created_at).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </article>
        ))}
        {items.length === 0 && (
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            Pas encore d'avis. Soyez le premier à donner le vôtre !
          </p>
        )}
      </div>
    </section>
  );
}
