"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/lib/supabase/client";
import { useUser } from "@/lib/lib/useUser";

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
  max = 5,
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

  // Pré-remplir le pseudo avec le display_name du profil
  useEffect(() => {
    if (!user) return;
    supabase
      .from("profiles")
      .select("display_name")
      .eq("id", user.id)
      .single()
      .then(({ data, error }) => {
        if (error) console.error(error);
        if (data?.display_name) setName(data.display_name);
      });
  }, [user]);

  // Charger les commentaires (approuvés + les miens si policies configurées)
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
      ? Math.round(
          (items.reduce((s, it) => s + (it.stars ?? 0), 0) / items.length) * 10
        ) / 10
      : null;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!user) return setError("Tu dois être connecté pour publier un avis.");
    if (!name.trim()) return setError("Ton pseudo est requis.");
    if (stars < 1 || stars > max) return setError(`Note entre 1 et ${max}.`);
    if (!text.trim()) return setError("Écris un avis.");

    setBusy(true);
    const { data, error } = await supabase
      .from("comments")
      .insert({
        slug,
        name: name.trim(),
        stars,
        text: text.trim(),
        user_id: user.id,
      })
      .select("*")
      .single();
    setBusy(false);

    if (error) return setError(error.message);

    setItems([data as CommentRow, ...items]);
    setText("");
    setStars(0);
    // si l'utilisateur est connecté et qu'on a prérempli le name, on le laisse
    if (!user) setName("");
  }

  return (
    <section className="mt-14 mx-auto max-w-3xl">
      <h2 className="text-xl font-semibold mb-2 text-center">
        Avis & commentaires — {title}
      </h2>

      <div className="text-center mb-4 text-sm text-gray-300">
        {avg ? (
          <>
            Note moyenne des lecteurs :{" "}
            <span className="font-semibold text-yellow-400">
              {avg}/{max}
            </span>{" "}
            ({items.length} avis)
          </>
        ) : (
          `Pas d'avis pour le moment. Note sur ${max}.`
        )}
      </div>

      <form
        onSubmit={onSubmit}
        className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-3"
      >
        {!user && (
          <p className="text-sm text-gray-300">
            Connecte-toi via <a className="underline" href="/compte">/compte</a>{" "}
            pour publier.
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ton pseudo"
            className="flex-1 rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-violet-400"
            disabled={!user || busy}
          />

          <div className="flex items-center gap-1">
            {Array.from({ length: max }).map((_, i) => {
              const idx = i + 1;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setStars(idx)}
                  disabled={!user || busy}
                  aria-label={`Note ${idx}`}
                  className={`text-2xl leading-none ${
                    idx <= stars ? "text-yellow-400" : "text-gray-600"
                  }`}
                >
                  ★
                </button>
              );
            })}
            <span className="ml-2 text-sm text-gray-400">
              {stars || 0}/{max}
            </span>
          </div>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ton avis (reste sympa, pas de spoilers non avertis 🙂)"
          rows={4}
          className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-violet-400"
          disabled={!user || busy}
        />

        {error && (
          <div className="text-sm text-red-400 border border-red-400/30 rounded px-3 py-2 bg-red-950/20">
            {error}
          </div>
        )}

        <div className="flex justify-end">
          <button
            disabled={!user || busy}
            className="rounded-md bg-violet-600 hover:bg-violet-500 px-4 py-2 text-sm font-medium disabled:opacity-50"
            type="submit"
          >
            {busy ? "Publication..." : "Publier l’avis"}
          </button>
        </div>
      </form>

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
                  {"★".repeat(max - it.stars)}
                </span>
              </div>
            </header>
            {!it.approved && (
              <div className="text-xs text-orange-400 mt-1">
                En attente d’approbation
              </div>
            )}
            <p className="mt-2 text-gray-100 leading-relaxed">{it.text}</p>
            <div className="mt-1 text-xs text-gray-500">
              {new Date(it.created_at).toLocaleString()}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
