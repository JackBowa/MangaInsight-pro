"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/",          label: "Accueil" },
  { href: "/critiques", label: "Critiques" },
  { href: "/news",      label: "News" },
  { href: "/tops",      label: "Tops" },
  { href: "/guides",    label: "Guides" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  return (
    <nav className="border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="container mx-auto px-4 h-16 flex items-center gap-5">
        {/* LOGO / IMAGE */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="https://i.postimg.cc/dt1vhRGY/IMG-0126.jpg" // ⬅️ ton image d’accueil/logo
            alt="Mangainsight"
            className="h-12 w-auto object-cover rounded"      // hauteur header
          />
        </Link>

        {/* MENU */}
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
                    ? "text-white font-medium"
                    : "text-gray-300 hover:text-white"
                }
              >
                {it.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

