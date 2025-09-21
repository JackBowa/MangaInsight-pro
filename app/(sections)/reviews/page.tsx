import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'

export default async function ReviewsPage(){
  const posts = await getAllPosts()
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Reviews</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map(p => (
          <Link key={p.slug} href={`/series/${p.slug}`} className="card p-4 block">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-300 line-clamp-3">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
