import { getAllPosts } from '@/lib/posts'
export async function GET(){
  const posts = await getAllPosts()
  const urls = posts.map(p=>`<url><loc>https://mangainsight.com/series/${p.slug}</loc></url>`).join('')
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } })
}
