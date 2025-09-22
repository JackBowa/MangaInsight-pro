"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AuthMenu from "@/components/AuthMenu"; // <-- on importe le menu d’auth

const items = [
  { href: "/",          label: "Accueil" },
  { href: "/critiques", label: "Critiques" },
  { href: "/nouveautés", label: "Nouveautés" },
  { href: "/tops",      label: "Tops" },
  { href: "/guides",    label: "Guides" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  return (
    <nav className="border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="container mx-auto px-4 h-12 flex items-center gap-5">
        {/* Logo */}
        <Link href="/" className="font-semibold">
          Mangainsight
        </Link>

        {/* Menu principal */}
        <div className="ml-auto flex items-center gap-4 text-sm">
          {items.map((it) => {
            const active =
              pathname === it.href || pathname.startsWith(it.href + "/");
            return (
              <Link
                key={it.href}
                href={it.href}
                className={
                  active
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }
              >
                {it.label}
              </Link>
            );
          })}

          {/* Ici l’onglet Connexion / Mon compte */}
          <AuthMenu />
        </div>
      </div>
    </nav>
  );
}
