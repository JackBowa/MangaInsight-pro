import { notFound } from "next/navigation";
import { SERIES } from "@/data/series";

// étoiles
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
            {typeof serie.stars === "number" && (
              <div className="mt-3">
                <Stars n={serie.stars} />
              </div>
            )}

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

        {/* AVIS centré */}
        {serie.reviewHtml && (
          <section className="mt-12 mx-auto max-w-3xl text-gray-100 leading-relaxed text-center">
            <h2 className="text-xl font-semibold mb-6">Avis</h2>
            <div
              className="prose prose-invert max-w-none mx-auto text-center"
              dangerouslySetInnerHTML={{ __html: serie.reviewHtml }}
            />
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
      </article>

      <footer className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        {"\u00A9"} {new Date().getFullYear()} Mangainsight
      </footer>
    </main>
  );
}
