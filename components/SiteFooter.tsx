import Link from "next/link";

const LINKS = {
  "Explorer": [
    { href: "/critiques", label: "Toutes les critiques" },
    { href: "/tops", label: "Tops & classements" },
    { href: "/nouveautés", label: "Nouveautés" },
    { href: "/guides", label: "Guides débutants" },
  ],
  "Top séries": [
    { href: "/series/naruto", label: "Naruto" },
    { href: "/series/solo-leveling", label: "Solo Leveling" },
    { href: "/series/l-attaque-des-titans", label: "L'Attaque des Titans" },
    { href: "/series/death-note", label: "Death Note" },
  ],
  "Le site": [
    { href: "/compte", label: "Mon compte" },
    { href: "/compte", label: "Se connecter" },
  ],
};

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-[#0b0b10] mt-auto">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.08em", fontSize: "1.4rem" }}
              className="text-white mb-3">
              🎌 MangaInsight
            </div>
            <p className="text-xs text-white/35 leading-relaxed max-w-[180px]">
              La référence francophone pour les critiques de manga et manhwa.
            </p>
          </div>

          {/* Liens */}
          {Object.entries(LINKS).map(([section, links]) => (
            <div key={section}>
              <p className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-white/30 mb-3">{section}</p>
              <ul className="flex flex-col gap-2">
                {links.map(l => (
                  <li key={l.href + l.label}>
                    <Link href={l.href} className="text-xs text-white/50 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[0.7rem] text-white/25">
            © {new Date().getFullYear()} MangaInsight — Tous droits réservés
          </p>
          <p className="text-[0.7rem] text-white/20">
            Créé avec ❤️ et Claude · <a href="https://github.com/JackBowa/MangaInsight-pro" target="_blank" rel="noreferrer" className="hover:text-white/50 transition-colors">GitHub</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
