export async function GET(){
  const body = `User-agent: *\nAllow: /\nSitemap: https://mangainsight.com/sitemap.xml\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } })
}
