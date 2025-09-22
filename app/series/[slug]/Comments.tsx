"use client";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/lib/supabase/client";

type DbComment = {
  id: string;
  slug: string;
  name: string;
  stars: number;
  text: string;
  created_at: string;
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
  const [items, setItems] = useState<DbComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [stars, setStars] = useState(0);
  const [error, setError] = useState<string | null>(null);

  // 1) fetch au chargement
  useEffect(() => {
    let ignore = false;
    (async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("slug", slug)
        .order("created_at", { ascending: false });
      if (!ignore) {
        if (error) setError(error.message);
        else setItems(data ?? []);
        setLoading(false);
      }
    })();
    return () => { ignore = true };
  }, [slug]);

  // 2) abonnement temps réel (optionnel)
  useEffect(() => {
    const ch = supabase
      .channel(`comments:${slug}`)
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'comments', filter: `slug=eq.${slug}` },
        payload => setItems(prev => [payload.new as DbComment, ...prev])
      )
      .subscribe();
    return () => { supabase.removeChannel(ch); };
  }, [slug]);

  // 3) soumission
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name.trim()) return setError("Ton pseudo est requis.");
    if (stars < 1 || stars > max) return setError(`Mets une note entre 1 et ${max}.`);
    if (!text.trim()) return setError("Écris un avis.");

    const { error } = await supabase.from("comments").insert({
      slug,
      name: name.trim(),
      stars,
      text: text.trim(),
    });
    if (error) return setError(error.message);

    // reset (l’insert temps réel ajoutera la ligne)
    setName(""); setText(""); setStars(0);
  };

  const avg = useMemo(() => {
    if (!items.length) return null;
    const v = items.reduce((s, it) => s + it.stars, 0) / items.length;
    return Math.round(v * 10) / 10;
  }, [items]);

  return (
    <section className="mt-14 mx-auto max-w-3xl">
      <h2 className="text-xl font-semibold mb-2 text-center">
        Avis & commentaires — {title}
      </h2>

      <div className="text-center mb-4 text-sm text-gray-300">
        {avg !== null ? (
          <>Note moyenne des lecteurs : <span className="font-semibold text-yellow-400">{avg}/{max}</span> ({items.length} avis)</>
        ) : loading ? "Chargement…" : `Pas d'avis pour le moment. Note sur ${max}.`}
      </div>

      <form onSubmit={submit} className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-3">
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ton pseudo"
            className="flex-1 rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-violet-400"
          />
          <div className="flex items-center gap-1">
            {Array.from({ length: max }).map((_, i) => {
              const idx = i + 1;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setStars(idx)}
                  aria-label={`Note ${idx}`}
                  className={`text-2xl leading-none ${idx <= stars ? "text-yellow-400" : "text-gray-600"}`}
                >
                  ★
                </button>
              );
            })}
            <span className="ml-2 text-sm text-gray-400">{stars || 0}/{max}</span>
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
          <button className="rounded-md bg-violet-600 hover:bg-violet-500 px-4 py-2 text-sm font-medium" type="submit">
            Publier l’avis
          </button>
        </div>
      </form>

      <div className="mt-6 space-y-3">
        {items.map((it) => (
          <article key={it.id} className="rounded-lg border border-white/10 bg-white/5 p-3">
            <header className="flex items-center justify-between">
              <div className="font-semibold">{it.name}</div>
              <div className="text-yellow-400">
                {"★".repeat(it.stars)}
                <span className="text-gray-600">{"★".repeat(max - it.stars)}</span>
              </div>
            </header>
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
