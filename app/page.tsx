// components/SiteHeader.tsx
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
    <header className="w-full border-b border-white/10 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60 sticky top-0 z-40">
      <div className="mx-auto max-w-screen-lg h-11 md:h-12 px-3 md:px-4 flex items-center gap-3">
        <Link href="/" className="font-semibold tracking-tight text-white text-sm md:text-base">
          Mangainsight
        </Link>

        {/* nav: compact + scrollable si trop long */}
        <nav className="ml-auto overflow-x-auto whitespace-nowrap no-scrollbar">
          <div className="flex items-center gap-2 md:gap-4 text-[13px] md:text-[15px]">
            {items.map((it) => {
              const active = pathname === it.href || pathname.startsWith(it.href + "/");
              return (
                <Link
                  key={it.href}
                  href={it.href}
                  className={
                    "px-2 py-1 rounded-md transition " +
                    (active
                      ? "text-white bg-white/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5")
                  }
                >
                  {it.label}
                </Link>
              );
            })}
            <Link
              href="/compte"
              className={
                "px-2 py-1 rounded-md transition text-gray-300 hover:text-white hover:bg-white/5"
              }
            >
              Se connecter
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}