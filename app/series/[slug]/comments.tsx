"use client";
import { useEffect, useMemo, useState } from "react";

type CommentItem = {
  id: string;
  name: string;
  stars: number;
  text: string;
  date: string; // ISO
};

export default function Comments({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) {
  const storageKey = useMemo(() => `ms-comments:${slug}`, [slug]);
  const [items, setItems] = useState<CommentItem[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [stars, setStars] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  // charger depuis localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, [storageKey]);

  // sauvegarder à chaque changement
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(items));
    } catch {}
  }, [storageKey, items]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name.trim()) return setError("Ton pseudo est requis.");
    if (stars < 1 || stars > 5) return setError("Mets une note entre 1 et 5.");
    if (!text.trim()) return setError("Écris un avis.");

    const item: CommentItem = {
      id: crypto.randomUUID(),
      name: name.trim(),
      stars,
      text: text.trim(),
      date: new Date().toISOString(),
    };
    setItems([item, ...items]);
    setName("");
    setText("");
    setStars(0);
  };

  const avg =
    items.length > 0
      ? Math.round(
          (items.reduce((s, it) => s + it.stars, 0) / items.length) * 10
        ) / 10
      : null;

  return (
    <section className="mt-14 mx-auto max-w-3xl">
      <h2 className="text-xl font-semibold mb-2 text-center">
        Avis & commentaires — {title}
      </h2>

      {/* moyenne */}
      <div className="text-center mb-4 text-sm text-gray-300">
        {avg ? (
          <>
            Note moyenne des lecteurs :{" "}
            <span className="font-semibold text-yellow-400">{avg}/5</span>{" "}
            ({items.length} avis)
          </>
        ) : (
          "Pas d'avis pour le moment. Lance-toi !"
        )}
      </div>

      {/* formulaire */}
      <form
        onSubmit={submit}
        className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-3"
      >
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ton pseudo"
            className="flex-1 rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-violet-400"
          />

          {/* étoiles cliquables */}
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => {
              const idx = i + 1;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setStars(idx)}
                  aria-label={`Note ${idx}`}
                  className={`text-2xl leading-none ${
                    idx <= stars ? "text-yellow-400" : "text-gray-600"
                  }`}
                >
                  ★
                </button>
              );
            })}
            <span className="ml-2 text-sm text-gray-400">{stars || 0}/5</span>
          </div>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ton avis (reste sympa, pas de spoilers non avertis 🙂)"
          rows={4}
          className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-violet-400"
        />

        {error && (
          <div className="text-sm text-red-400 border border-red-400/30 rounded px-3 py-2 bg-red-950/20">
            {error}
          </div>
        )}

        <div className="flex justify-end">
          <button
            className="rounded-md bg-violet-600 hover:bg-violet-500 px-4 py-2 text-sm font-medium"
            type="submit"
          >
            Publier l’avis
          </button>
        </div>
      </form>

      {/* liste des commentaires */}
      <div className="mt-6 space-y-3">
        {items.map((it) => (
          <article
            key={it.id}
            className="rounded-lg border border-white/10 bg-white/5 p-3"
          >
            <header className="flex items-center justify-between">
              <div className="font-semibold">{it.name}</div>
              <div className="text-yellow-400">
                {"★".repeat(it.stars)}
                <span className="text-gray-600">
                  {"★".repeat(5 - it.stars)}
                </span>
              </div>
            </header>
            <p className="mt-2 text-gray-100 leading-relaxed">{it.text}</p>
            <div className="mt-1 text-xs text-gray-500">
              {new Date(it.date).toLocaleString()}
            </div>
          </article>
        ))}
      </div>

      {/* astuce */}
      <p className="mt-6 text-center text-xs text-gray-500">
        (Les avis sont stockés dans ton navigateur. Pour un vrai stockage
        partagé, on branchera Supabase/Firestore quand tu veux.)
      </p>
    </section>
  );
}
