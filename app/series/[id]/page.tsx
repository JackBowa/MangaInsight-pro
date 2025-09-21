import { getPostBySlug } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import ProsCons from '@/components/ProsCons'
import Rating from '@/components/Rating'
import Spoiler from '@/components/Spoiler'
import TagChips from '@/components/TagChips'

const components = { ProsCons, Rating, Spoiler, TagChips }

export default async function SeriesPage({ params }: { params: { id: string } }){
  const post = await getPostBySlug(params.id)
  if(!post) return <div>Introuvable</div>
  return (
    <article className="prose">
      <h1>{post.title}</h1>
      <p className="not-prose text-sm text-gray-300">{post.date} · {post.readingTime} · <TagChips items={post.tags} /></p>
      <MDXRemote source={post.content} components={components} />
    </article>
  )
}
