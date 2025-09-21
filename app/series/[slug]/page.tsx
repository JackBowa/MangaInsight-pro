import { notFound } from "next/navigation";
import { SERIES } from "@/data/series";

// petite étoile propre
function Stars({ n = 0 }: { n?: number }) {
  const count = Math.max(0, Math.min(5, n ?? 0));
  return (
    <div className="flex items-center gap-1" aria-label={`${count} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? "text-yellow-400" : "text-gray-600"}>★</span>
      ))}
    </div>
  );
}

export default function SeriePage({ params }: { params: { slug: string } }) {
  const serie = SERIES.find((s) => s.slug === params.slug);
  if (!serie) return notFound();

  return (
    <main className="min-h-screen bg-black text-white">
      {/* top bar */}
      <header className="border-b border-white/10">
        <div className="container mx-auto h-12 px-4 flex items-center">
          <a href="/critiques" className="text-violet-300 hover:text-violet-200">← Retour aux critiques</a>
        </div>
      </header>

      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* HERO */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-6">
          {/* image */}
          {serie.cover && (
            <img
              src={serie.cover}
              alt={serie.title}
              className="w-full md:w-1/2 rounded-xl border border-white/10 object-cover max-h-80"
            />
          )}

          {/* meta */}
          <div className="mt-4 md:mt-0 flex-1">
            <h1 className="text-3xl font-bold">{serie.title}</h1>
            {serie.tags && <p className="mt-1 text-sm text-gray-300">{serie.tags}</p>}
            {"stars" in serie && typeof serie.stars === "number" && (
              <div className="mt-3"><Stars n={serie.stars} /></div>
            )}
            {serie.synopsis && (
              <div className="mt-4">
                <h2 className="text-lg font-semibold mb-1">Synopsis</h2>
                <p className="text-gray-200 leading-relaxed">{serie.synopsis}</p>
              </div>
            )}
          </div>
        </div>

        {/* AVIS */}
        {serie.reviewHtml && (
          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Avis</h2>
            <div
              className="prose prose-invert max-w-none leading-relaxed text-gray-100"
              // ton HTML (paragraphes, etc.)
              dangerouslySetInnerHTML={{ __html: serie.reviewHtml }}
            />
          </section>
        )}

        {/* BOUTIQUES / STREAMING / LIVE */}
        {(serie.shops?.length || serie.streaming?.length || serie.live?.length) ? (
          <section className="mt-10 space-y-8">
            {!!serie.shops?.length && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Boutiques</h3>
                <div className="flex flex-wrap items-center gap-4">
                  {serie.shops!.map((s, i) => (
                    <a key={i} href={s.url} target="_blank" rel="noreferrer" title={s.name}
                       className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 transition rounded-md border border-white/10 p-2">
                      <img src={s.logo} alt={s.name} className="h-8 object-contain" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {!!serie.streaming?.length && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Animé</h3>
                <div className="flex flex-wrap items-center gap-4">
                  {serie.streaming!.map((s, i) => (
                    <a key={i} href={s.url} target="_blank" rel="noreferrer" title={s.name}
                       className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 transition rounded-md border border-white/10 p-2">
                      <img src={s.logo} alt={s.name} className="h-8 object-contain" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {!!serie.live?.length && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Live action</h3>
                <div className="flex flex-wrap items-center gap-4">
                  {serie.live!.map((s, i) => (
                    <a key={i} href={s.url} target="_blank" rel="noreferrer" title={s.name}
                       className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 transition rounded-md border border-white/10 p-2">
                      <img src={s.logo} alt={s.name} className="h-8 object-contain" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </section>
        ) : null}

        <div className="h-12" />
      </article>

      <footer className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Mangainsight
      </footer>
    </main>
  );
}
