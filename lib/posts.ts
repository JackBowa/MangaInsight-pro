import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

function rtFr(content: string): string {
  const rt = readingTime(content)
  return `${Math.max(1, Math.ceil(rt.minutes))} min de lecture`
}

const contentDir = path.join(process.cwd(), 'content')

export async function getAllPosts(limit?: number){
  const reviewsDir = path.join(contentDir, 'reviews')
  if(!fs.existsSync(reviewsDir)) return []
  const files = fs.readdirSync(reviewsDir).filter(f=>f.endsWith('.mdx'))
  const posts = files.map(file=>{
    const slug = file.replace(/\.mdx$/, '')
    const raw = fs.readFileSync(path.join(reviewsDir, file),'utf8')
    const { content, data } = matter(raw)
    return { slug, title: (data as any).title || slug, excerpt: (data as any).excerpt || '', date: (data as any).date || '', tags: (data as any).tags || [], readingTime: rtFr(content), content }
  }).sort((a,b)=> (b.date?.localeCompare?.(a.date)) ?? 0)
  return typeof limit==='number' ? posts.slice(0,limit) : posts
}

export async function getAllGuides() {
  const guidesDir = path.join(contentDir, 'guides')
  if (!fs.existsSync(guidesDir)) return []
  const files = fs.readdirSync(guidesDir).filter(f => f.endsWith('.mdx'))
  const guides = files.map(file => {
    const slug = file.replace(/\.mdx$/, '')
    const raw = fs.readFileSync(path.join(guidesDir, file), 'utf8')
    const { content, data } = matter(raw)
    return {
      slug,
      title: (data as any).title || slug,
      excerpt: (data as any).excerpt || '',
      date: (data as any).date || '',
      icon: (data as any).icon || '📖',
      theme: (data as any).theme || 'purple',
      category: (data as any).category || 'Guide',
      tags: (data as any).tags || [],
      readingTime: rtFr(content),
      content,
    }
  }).sort((a, b) => a.date.localeCompare(b.date))
  return guides
}

export async function getGuideBySlug(slug: string) {
  const p = path.join(contentDir, 'guides', slug + '.mdx')
  if (!fs.existsSync(p)) return null
  const raw = fs.readFileSync(p, 'utf8')
  const { content, data } = matter(raw)
  return {
    slug,
    title: (data as any).title || slug,
    excerpt: (data as any).excerpt || '',
    date: (data as any).date || '',
    icon: (data as any).icon || '📖',
    theme: (data as any).theme || 'purple',
    category: (data as any).category || 'Guide',
    tags: (data as any).tags || [],
    readingTime: rtFr(content),
    content,
  }
}

export async function getPostBySlug(slug: string){
  const p = path.join(contentDir,'reviews', slug + '.mdx')
  if(!fs.existsSync(p)) return null
  const raw = fs.readFileSync(p,'utf8')
  const { content, data } = matter(raw)
  return { slug, title: (data as any).title || slug, excerpt: (data as any).excerpt || '', date: (data as any).date || '', tags: (data as any).tags || [], readingTime: rtFr(content), content }
}
