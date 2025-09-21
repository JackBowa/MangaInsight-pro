import Link from 'next/link'

export default function SiteHeader(){
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold tracking-wide">Mangainsight</Link>
        <nav className="flex gap-4 text-sm text-gray-200">
          <Link href="/reviews">Reviews</Link>
          <Link href="/news">News</Link>
          <Link href="/tops">Tops</Link>
          <Link href="/guides">Guides</Link>
        </nav>
      </div>
    </header>
  )
}
