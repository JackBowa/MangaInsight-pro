import { notFound } from "next/navigation";
import { SERIES } from "@/data/series";
import Comments from "./Comments";

// Étoiles (sur 5)
function Stars({ n = 0 }: { n?: number }) {
  const c = Math.max(0, Math.min(5, n ?? 0));
  return (
    <div className="flex items-center gap-1" aria-label={`${c} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < c ? "text-yellow-400" : "text-gray-600"}>★</span>
      ))}
    </div>
  );
}

export default function SeriePage({ params }: { params: { slug: string } }) {
  const serie = SERIES.find((s) => s.slug === params.slug);
  if (!serie) return notFound();

  // rating prioritaire : editorReview.rating -> stars
  const editorRating =
    typeof (serie as any)?.editorReview?.rating === "number"
      ? (serie as any).editorReview.rating as number
      : undefined;

  const headerRating =
    typeof editorRating === "number"
      ? editorRating
      : typeof (serie as any).stars === "number"
      ? ((serie as any).stars as number)
      : undefined;

  // contenu avis prioritaire : editorReview.html -> reviewHtml
  const editorHtml =
    (serie as any)?.editorReview?.html ??
    (serie as any)?.reviewHtml ??
    null;

  return (
    <main className="min-h-screen bg-black text-white">
      {/* barre fine */}
      <header className="border-b border-white/10">
        <div className="container mx-auto px-4 h-12 flex items-center">
          <a href="/critiques" className="text-violet-300 hover:text-violet-200">
            ← Retour aux critiques
          </a>
        </div>
      </header>

      <article className="container mx-auto px-4 py-8 max-w-6xl">
        {/* HERO */}
        <div className="grid gap-6 md:grid-cols-12">
          {/* image */}
          {serie.cover && (
            <div className="md:col-span-5">
              <img
                src={serie.cover}
                alt={serie.title}
                className="w-full rounded-xl border border-white/10 object-cover aspect-[4/3] shadow"
              />
            </div>
          )}

          {/* méta + synopsis */}
          <div className="md:col-span-7">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{serie.title}</h1>
            {serie.tags && <p className="mt-1 text-sm text-gray-300">{serie.tags}</p>}

            {/* étoiles : priorité à editorReview.rating, sinon serie.stars */}
            {typeof headerRating === "number" && (
              <div className="mt-3">
                <Stars n={headerRating} />
              </div>
            )}

            {/* Scores externes (optionnels): [{source, value, scale=10, url}] */}
            {(serie as any)?.externalScores?.length ? (
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                {(serie as any).externalScores.map(
                  (s: { source: string; value: number; scale?: number; url?: string }, i: number) => {
                    const scale = s.scale ?? 10;
                    const ten = Math.round((s.value / scale) * 100) / 10; // normalisé /10
                    const chip = (
                      <span className="chips">
                        <span className="opacity-80">{s.source}</span>
                        <strong>{ten}/10</strong>
                      </span>
                    );
                    return s.url ? (
                      <a
                        key={i}
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        title={`${s.source}: ${s.value}/${scale}`}
                      >
                        {chip}
                      </a>
                    ) : (
                      <span key={i} title={`${s.source}: ${s.value}/${scale}`}>
                        {chip}
                      </span>
                    );
                  }
                )}
              </div>
            ) : null}

            {serie.synopsis && (
              <div className="mt-5 max-w-prose text-gray-200 leading-relaxed">
                <h2 className="text-lg font-semibold mb-1">Synopsis</h2>
                <p>{serie.synopsis}</p>
              </div>
            )}
          </div>
        </div>

        {/* séparateur */}
        <div className="my-8 h-px bg-white/10" />

        {/* AVIS de la rédaction (facultatif) */}
        {editorHtml ? (
          <section className="mt-12 mx-auto max-w-3xl text-gray-100 leading-relaxed text-center">
            <h2 className="text-xl font-semibold mb-6">Avis de la rédaction</h2>

            {typeof editorRating === "number" && (
              <div className="mb-4 flex justify-center">
                <Stars n={editorRating} />
              </div>
            )}

            <div
              className="prose prose-invert max-w-none mx-auto text-center"
              dangerouslySetInnerHTML={{ __html: editorHtml }}
            />
          </section>
        ) : (
          <section className="mt-12 mx-auto max-w-3xl text-center text-sm text-gray-400">
            <em>Avis de la rédaction à venir.</em>
          </section>
        )}

        {/* BOUTIQUES / STREAMING / LIVE centrés */}
        {(serie.shops?.length || serie.streaming?.length || serie.live?.length) ? (
          <section className="mt-12 mx-auto max-w-5xl grid gap-10 md:grid-cols-3">
            {!!serie.shops?.length && (
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3">Boutiques</h3>
                <div className="flex flex-wrap justify-center items-center gap-4">
                  {serie.shops!.map((s, i) => (
                    <a
                      key={i}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      title={s.name}
                      className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 transition rounded-lg border border-white/10 p-2"
                    >
                      <img src={s.logo} alt={s.name} className="h-8 object-contain" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {!!serie.streaming?.length && (
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3">Animé</h3>
                <div className="flex flex-wrap justify-center items-center gap-4">
                  {serie.streaming!.map((s, i) => (
                    <a
                      key={i}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      title={s.name}
                      className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 transition rounded-lg border border-white/10 p-2"
                    >
                      <img src={s.logo} alt={s.name} className="h-8 object-contain" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {!!serie.live?.length && (
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3">Live action</h3>
                <div className="flex flex-wrap justify-center items-center gap-4">
                  {serie.live!.map((s, i) => (
                    <a
                      key={i}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      title={s.name}
                      className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 transition rounded-lg border border-white/10 p-2"
                    >
                      <img src={s.logo} alt={s.name} className="h-8 object-contain" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </section>
        ) : null}

        <div className="h-10" />

        {/* Avis & Commentaires des lecteurs (sur 5) */}
        <Comments slug={params.slug} title={serie.title} />
      </article>

      <footer className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        {"\u00A9"} {new Date().getFullYear()} Mangainsight
      </footer>
    </main>
  );
}