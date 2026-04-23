"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useUser } from "@supabase/auth-helpers-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { PUBLISHED_SERIES as SERIES } from "@/data/series";

const NAV_ITEMS = [
  { href: "/critiques", label: "Critiques" },
  { href: "/nouveautes", label: "Nouveautés" },
  { href: "/tops", label: "Tops" },
  { href: "/guides", label: "Guides" },
  { href: "/recommandations", label: "Trouve ta série", hot: true },
];

const ACCENT = "#e03030";
const FONT_H = "var(--font-barlow), 'Barlow Condensed', sans-serif";
const FONT_B = "var(--font-figtree), 'Figtree', sans-serif";

export default function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const user = useUser();

  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const results =
    query.trim().length < 2
      ? []
      : SERIES.filter((s) => {
          const q = query.toLowerCase();
          return (
            s.title.toLowerCase().includes(q) ||
            (s.tags ?? "").toLowerCase().includes(q)
          );
        }).slice(0, 8);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (searchOpen) setTimeout(() => inputRef.current?.focus(), 50);
    else setQuery("");
  }, [searchOpen]);

  const goTo = useCallback(
    (slug: string) => {
      setSearchOpen(false);
      router.push(`/series/${slug}`);
    },
    [router]
  );

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* ── NAV ── */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          height: 56,
          background: "rgba(10,10,10,0.96)",
          backdropFilter: "blur(12px)",
          borderBottom: `2px solid ${ACCENT}`,
          display: "flex",
          alignItems: "center",
          padding: "0 clamp(20px,4vw,52px)",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: FONT_H,
            fontSize: 21,
            fontWeight: 800,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#fff",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          MANGA<span style={{ color: ACCENT }}>INSIGHT</span>
        </Link>

        {/* Desktop nav */}
        <div
          className="hidden md:flex"
          style={{ gap: 28, marginLeft: 48, flex: 1 }}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontFamily: FONT_H,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                color: item.hot
                  ? ACCENT
                  : isActive(item.href)
                  ? "#fff"
                  : "rgba(255,255,255,0.4)",
                textDecoration: "none",
                padding: "4px 0",
                borderBottom: isActive(item.href)
                  ? `2px solid ${ACCENT}`
                  : "2px solid transparent",
                transition: "color .15s, border-color .15s",
              }}
            >
              {item.hot ? "✦ " : ""}
              {item.label}
            </Link>
          ))}
        </div>

        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            gap: 10,
            alignItems: "center",
          }}
        >
          {/* Search */}
          <button
            onClick={() => setSearchOpen(true)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 12,
              color: "rgba(255,255,255,0.4)",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "6px 14px",
              borderRadius: 4,
              cursor: "pointer",
              fontFamily: FONT_B,
            }}
          >
            <svg
              width="13"
              height="13"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <span className="hidden sm:inline">Rechercher</span>
            <span
              className="hidden lg:inline"
              style={{
                fontSize: 10,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.07)",
                padding: "2px 5px",
                borderRadius: 3,
                fontFamily: "monospace",
              }}
            >
              ⌘K
            </span>
          </button>

          {/* Account — desktop */}
          <Link
            href="/compte"
            className="hidden md:block"
            style={{
              fontFamily: FONT_H,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#fff",
              background: ACCENT,
              padding: "7px 18px",
              borderRadius: 4,
              textDecoration: "none",
            }}
          >
            {user ? "Mon compte" : "Se connecter"}
          </Link>

          {/* Burger — mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "6px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
            aria-label="Menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 20,
                  height: 2,
                  background: "rgba(255,255,255,0.7)",
                  borderRadius: 1,
                  transition: "all .2s",
                  transform: menuOpen
                    ? i === 0
                      ? "rotate(45deg) translateY(7px)"
                      : i === 2
                      ? "rotate(-45deg) translateY(-7px)"
                      : "scale(0)"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 56,
            left: 0,
            right: 0,
            zIndex: 99,
            background: "#0d0d0d",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            padding: "16px 20px 20px",
          }}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "14px 0",
                fontFamily: FONT_H,
                fontSize: 18,
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: item.hot ? ACCENT : "#fff",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                textDecoration: "none",
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/compte"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              marginTop: 12,
              padding: "12px 0",
              fontFamily: FONT_H,
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: ACCENT,
              textDecoration: "none",
            }}
          >
            → {user ? "Mon compte" : "Se connecter"}
          </Link>
        </div>
      )}

      {/* ── SEARCH MODAL ── */}
      {searchOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "12vh 16px 0",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setSearchOpen(false);
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.75)",
              backdropFilter: "blur(6px)",
            }}
            onClick={() => setSearchOpen(false)}
          />
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 580,
              background: "#141414",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 8,
              overflow: "hidden",
              boxShadow: `0 24px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(224,48,48,0.22)`,
            }}
          >
            {/* Input */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "14px 18px",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <svg
                width="15"
                height="15"
                fill="none"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher une série..."
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#fff",
                  fontSize: 15,
                  fontFamily: FONT_B,
                }}
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  style={{
                    background: "none",
                    border: "none",
                    color: "rgba(255,255,255,0.25)",
                    fontSize: 18,
                    cursor: "pointer",
                    lineHeight: 1,
                  }}
                >
                  ×
                </button>
              )}
              <kbd
                style={{
                  fontSize: 10,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  padding: "2px 6px",
                  borderRadius: 3,
                  fontFamily: "monospace",
                  color: "rgba(255,255,255,0.25)",
                }}
              >
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div style={{ maxHeight: 380, overflowY: "auto" }}>
              {query.trim().length < 2 ? (
                <div
                  style={{
                    padding: "36px 18px",
                    textAlign: "center",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.25)",
                    fontFamily: FONT_B,
                  }}
                >
                  Tape au moins 2 caractères…
                </div>
              ) : results.length === 0 ? (
                <div
                  style={{
                    padding: "36px 18px",
                    textAlign: "center",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.25)",
                    fontFamily: FONT_B,
                  }}
                >
                  Aucun résultat pour «&nbsp;{query}&nbsp;»
                </div>
              ) : (
                <div style={{ padding: 8 }}>
                  {results.map((s) => (
                    <button
                      key={s.slug}
                      onClick={() => goTo(s.slug)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "10px 12px",
                        borderRadius: 4,
                        cursor: "pointer",
                        background: "transparent",
                        border: "none",
                        textAlign: "left",
                        transition: "background .15s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background =
                          "rgba(255,255,255,0.04)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "transparent")
                      }
                    >
                      {/* cover */}
                      {s.cover && (
                        <img
                          src={s.cover}
                          alt={s.title}
                          style={{
                            width: 36,
                            height: 50,
                            objectFit: "cover",
                            borderRadius: 2,
                            border: "1px solid rgba(255,255,255,0.07)",
                            flexShrink: 0,
                          }}
                        />
                      )}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          style={{
                            fontFamily: FONT_H,
                            fontSize: 15,
                            fontWeight: 800,
                            letterSpacing: "0.04em",
                            color: "#fff",
                          }}
                        >
                          {s.title}
                        </div>
                        <div
                          style={{
                            fontSize: 11,
                            color: "rgba(255,255,255,0.25)",
                            marginTop: 1,
                            fontFamily: FONT_B,
                          }}
                        >
                          {s.tags}
                        </div>
                      </div>
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          padding: "3px 8px",
                          borderRadius: 3,
                          background:
                            s.category === "manhwa"
                              ? "rgba(244,114,182,0.12)"
                              : "rgba(224,48,48,0.1)",
                          border: `1px solid ${
                            s.category === "manhwa"
                              ? "rgba(244,114,182,0.25)"
                              : "rgba(224,48,48,0.22)"
                          }`,
                          color:
                            s.category === "manhwa" ? "#f9a8d4" : "#fca5a5",
                          fontFamily: FONT_B,
                          flexShrink: 0,
                        }}
                      >
                        {s.category}
                      </span>
                    </button>
                  ))}
                </div>
              )}

              <div
                style={{
                  padding: "8px 18px",
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.25)",
                    fontFamily: FONT_B,
                  }}
                >
                  {SERIES.length} séries indexées
                </span>
                {results.length > 0 && (
                  <span
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.25)",
                      fontFamily: FONT_B,
                    }}
                  >
                    {results.length} résultat{results.length > 1 ? "s" : ""}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
