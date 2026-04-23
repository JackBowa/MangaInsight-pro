import Link from "next/link";

const ACCENT = "#e03030";
const FONT_H = "var(--font-barlow), 'Barlow Condensed', sans-serif";
const FONT_B = "var(--font-figtree), 'Figtree', sans-serif";

const LINKS: Record<string, { href: string; label: string }[]> = {
  Explorer: [
    { href: "/critiques", label: "Toutes les critiques" },
    { href: "/tops", label: "Tops & classements" },
    { href: "/nouveautes", label: "Nouveautés" },
    { href: "/guides", label: "Guides débutants" },
  ],
  "Top séries": [
    { href: "/series/solo-leveling", label: "Solo Leveling" },
    { href: "/series/l-attaque-des-titans", label: "L'Attaque des Titans" },
    { href: "/series/berserk", label: "Berserk" },
    { href: "/series/death-note", label: "Death Note" },
  ],
  "Le site": [
    { href: "/recommandations", label: "✦ Trouve ta série" },
    { href: "/compte", label: "Mon compte" },
    { href: "/a-propos", label: "À propos" },
  ],
};

export default function SiteFooter() {
  return (
    <footer style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.07)", marginTop: "auto", paddingTop: 1 }}>
      <div style={{ borderTop: `3px solid ${ACCENT}` }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px clamp(20px,4vw,52px) 32px" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr repeat(3,auto)", gap: 48, marginBottom: 40 }}
          className="footer-chrome-grid"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: FONT_H,
                fontSize: 22,
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#fff",
                marginBottom: 12,
              }}
            >
              MANGA<span style={{ color: ACCENT }}>INSIGHT</span>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: 200, fontFamily: FONT_B }}>
              La référence francophone pour les critiques de manga et manhwa.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([section, links]) => (
            <div key={section}>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: 14,
                  fontFamily: FONT_H,
                }}
              >
                {section}
              </p>
              {links.map((l) => (
                <Link
                  key={l.href + l.label}
                  href={l.href}
                  style={{
                    display: "block",
                    fontSize: 13,
                    marginBottom: 8,
                    fontFamily: FONT_B,
                    textDecoration: "none",
                    transition: "color .15s",
                  }}
                  className="footer-link-chrome"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", fontFamily: FONT_B }}>
            © {new Date().getFullYear()} MangaInsight — Tous droits réservés
          </span>
        </div>
      </div>

      <style>{`
        .footer-link-chrome { color: rgba(255,255,255,0.6) !important; }
        .footer-link-chrome:hover { color: #fff !important; }
        @media (max-width: 900px) {
          .footer-chrome-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .footer-chrome-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
