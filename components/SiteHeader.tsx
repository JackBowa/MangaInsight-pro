"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@supabase/auth-helpers-react";

const items = [
  { href: "/", label: "Accueil" },
  { href: "/critiques", label: "Critiques" },
  { href: "/nouveautés", label: "Nouveautés" },
  { href: "/tops", label: "Tops" },
  { href: "/guides", label: "Guides" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const user = useUser();

  return (
    <nav className="border-b border-white/10 bg-black/80 backdrop-blur sticky top-0 z-40">
      <div className="container mx-auto px-4 h-12 flex items-center gap-4">
        <Link href="/" className="font-semibold shrink-0">Mangainsight</Link>

        {/* liens, scrollables sur mobile */}
        <div className="flex-1 overflow-x-auto">
          <div className="flex items-center gap-4 text-sm min-w-max">
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
          </div>
        </div>

        {/* CTA auth, toujours visible à droite */}
        <div className="ml-auto">
          {user ? (
            <Link
              href="/compte"
              className="shrink-0 rounded-lg border border-white/10 px-3 py-1.5 text-sm hover:bg-white/10"
            >
              Mon compte
            </Link>
          ) : (
            <Link
              href="/compte"
              className="shrink-0 rounded-lg border border-white/10 px-3 py-1.5 text-sm hover:bg-white/10"
            >
              Se connecter
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}