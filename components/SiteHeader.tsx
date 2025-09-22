"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
      <div className="container mx-auto px-4 h-12 flex items-center gap-4">
        <Link href="/" className="font-semibold whitespace-nowrap">Mangainsight</Link>

        {/* NEW: viewport étroit -> on autorise le scroll horizontal, sans scrollbar visible */}
        <div className="ml-auto max-w-full overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-4 sm:gap-6 text-sm whitespace-nowrap">
            {items.map((it) => {
              const active = pathname === it.href || pathname.startsWith(it.href + "/");
              return (
                <Link
                  key={it.href}
                  href={it.href}
                  className={active ? "text-white" : "text-gray-300 hover:text-white"}
                >
                  {it.label}
                </Link>
              );
            })}
            {/* (optionnel) lien compte */}
            {/* <Link href="/compte" className="text-gray-300 hover:text-white">Se connecter</Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}