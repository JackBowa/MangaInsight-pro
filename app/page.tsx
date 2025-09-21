import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default async function Home() {
  const latest = await getAllPosts(6)
  return (
    <div className="space-y-8">
      <section className="text-center space-y-3">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Mangainsight</h1>
        <p className="text-gray-300">Critiques affûtées. Sélections utiles. Zéro bla-bla.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Dernières reviews</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {latest.map(p => (
            <Link key={p.slug} href={`/series/${p.slug}`} className="card p-4 block hover:scale-[1.01] transition">
              <h3 className="font-semibold mb-1">{p.title}</h3>
              <p className="text-sm text-gray-300 line-clamp-3">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
