export default function SiteFooter(){
  return (
    <footer className="border-t border-white/10 text-sm text-gray-300">
      <div className="container mx-auto px-4 py-8">
        © {new Date().getFullYear()} Mangainsight — Mentions légales & Affiliation
      </div>
    </footer>
  )
}
