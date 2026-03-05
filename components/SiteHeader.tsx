"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useUser } from "@supabase/auth-helpers-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { SERIES } from "@/data/series";

const items = [
  { href: "/", label: "Accueil" },
  { href: "/critiques", label: "Critiques" },
  { href: "/nouveautés", label: "Nouveautés" },
  { href: "/tops", label: "Tops" },
  { href: "/guides", label: "Guides" },
  { href: "/recommandations", label: "✨ Pour toi" },
  { href: "/a-propos", label: "À propos" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const user = useUser();

  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Résultats filtrés
  const results = query.trim().length < 2 ? [] : SERIES.filter(s => {
    const q = query.toLowerCase();
    return s.title.toLowerCase().includes(q) || (s.tags ?? "").toLowerCase().includes(q);
  }).slice(0, 8);

  // Ouvrir avec Cmd+K / Ctrl+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Focus input à l'ouverture
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
    else setQuery("");
  }, [open]);

  const goTo = useCallback((slug: string) => {
    setOpen(false);
    router.push(`/series/${slug}`);
  }, [router]);

  return (
    <>
      <nav className="border-b border-white/10 bg-black/80 backdrop-blur sticky top-0 z-40">
        <div className="max-w-[1400px] mx-auto px-4 h-14 flex items-center gap-4">
          <Link href="/" className="font-semibold shrink-0" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.08em", fontSize: "1.1rem" }}>
            🎌 Mangainsight
          </Link>

          {/* liens nav — masqués sur mobile */}
          <div className="hidden md:flex flex-1 items-center gap-5 text-sm">
            {items.map((it) => {
              const active = pathname === it.href || (it.href !== "/" && pathname.startsWith(it.href));
              return (
                <Link key={it.href} href={it.href}
                  className={active ? "text-white font-semibold" : "text-white/50 hover:text-white transition-colors"}>
                  {it.label}
                </Link>
              );
            })}
          </div>

          <div className="flex-1 md:flex-none" />

          {/* Bouton recherche */}
          <button onClick={() => setOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-white/70 hover:bg-white/8 transition-all text-sm">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <span className="hidden sm:inline text-xs">Rechercher</span>
            <span className="hidden lg:inline text-[0.6rem] bg-white/8 border border-white/10 px-1.5 py-0.5 rounded font-mono text-white/30">⌘K</span>
          </button>

          {/* Auth — masqué sur mobile */}
          <Link href="/compte"
            className="hidden md:block shrink-0 rounded-lg border border-white/10 px-3 py-1.5 text-sm hover:bg-white/10 transition-colors text-white/70">
            {user ? "Mon compte" : "Se connecter"}
          </Link>

          {/* Burger — visible sur mobile uniquement */}
          <button onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/8 transition-colors"
            aria-label="Menu">
            <span className={`block w-5 h-0.5 bg-white/70 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white/70 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white/70 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Menu mobile déroulant */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/8 bg-black/95 backdrop-blur-md px-4 py-4 flex flex-col gap-1">
            {items.map((it) => {
              const active = pathname === it.href || (it.href !== "/" && pathname.startsWith(it.href));
              return (
                <Link key={it.href} href={it.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    active
                      ? "bg-brand-500/15 text-brand-300 border border-brand-500/25"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}>
                  {it.label}
                </Link>
              );
            })}
            <div className="border-t border-white/8 mt-2 pt-3">
              <Link href="/compte" onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-all block">
                {user ? "👤 Mon compte" : "🔑 Se connecter"}
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* ── MODALE RECHERCHE ── */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[12vh] px-4"
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
          {/* backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(false)} />

          {/* panel */}
          <div className="relative w-full max-w-[580px] bg-[#13131f] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(139,92,246,0.15)" }}>

            {/* input */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/8">
              <svg className="w-4 h-4 text-white/30 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
              <input
                ref={inputRef}
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Rechercher une série..."
                className="flex-1 bg-transparent text-white placeholder-white/25 text-sm outline-none"
              />
              {query && (
                <button onClick={() => setQuery("")} className="text-white/25 hover:text-white/60 transition-colors text-lg leading-none">×</button>
              )}
              <kbd className="hidden sm:inline text-[0.6rem] bg-white/6 border border-white/10 px-1.5 py-0.5 rounded font-mono text-white/25">ESC</kbd>
            </div>

            {/* résultats */}
            <div className="max-h-[420px] overflow-y-auto">
              {query.trim().length < 2 ? (
                <div className="px-5 py-10 text-center text-sm text-white/25">
                  Tape au moins 2 caractères...
                </div>
              ) : results.length === 0 ? (
                <div className="px-5 py-10 text-center">
                  <p className="text-sm text-white/30 mb-1">Aucun résultat pour <strong className="text-white/60">&ldquo;{query}&rdquo;</strong></p>
                  <p className="text-xs text-white/20">Essaie un autre titre ou un genre</p>
                </div>
              ) : (
                <div className="p-2">
                  {results.map(s => (
                    <button key={s.slug} onClick={() => goTo(s.slug)}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors group text-left">
                      {/* cover miniature */}
                      <div className="w-9 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-white/8">
                        <img src={s.cover || "/_placeholder.jpg"} alt={s.title}
                          className="w-full h-full object-cover" />
                      </div>
                      {/* infos */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-white font-semibold truncate group-hover:text-brand-300 transition-colors"
                          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em", fontSize: "1rem" }}>
                          {s.title}
                        </p>
                        <p className="text-xs text-white/35 truncate">{s.tags}</p>
                      </div>
                      {/* badge catégorie */}
                      <span className={`text-[0.58rem] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full border flex-shrink-0 ${
                        s.category === "manhwa"
                          ? "bg-pink-500/15 border-pink-500/30 text-pink-300"
                          : "bg-indigo-500/15 border-indigo-500/30 text-indigo-300"
                      }`}>{s.category}</span>
                      <svg className="w-3.5 h-3.5 text-white/15 group-hover:text-white/40 transition-colors flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  ))}
                </div>
              )}

              {/* footer */}
              <div className="px-5 py-2.5 border-t border-white/6 flex items-center justify-between">
                <p className="text-[0.65rem] text-white/20">{SERIES.length} séries indexées</p>
                {results.length > 0 && (
                  <p className="text-[0.65rem] text-white/20">{results.length} résultat{results.length > 1 ? "s" : ""}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
