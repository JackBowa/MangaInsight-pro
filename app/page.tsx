// app/page.tsx
export default function Home() {
  return (
    <main style={{ background: "#0b0b10", color: "#fff", minHeight: "100vh", fontFamily: "system-ui" }}>
      {/* Bannière */}
      <header role="banner" style={{ margin: 0, padding: 0 }}>
        <img
          src="https://i.postimg.cc/dt1vhRGY/IMG-0126.jpg"
          alt="Manga insight"
          width={2000}
          height={250}
          style={{ display: "block", width: "100%", height: "auto" }}
        />
        {/* Menu */}
        <nav style={{ textAlign: "center", padding: "10px 0" }}>
          <a href="/" style={{ margin: "0 10px" }}>Accueil</a>
          <a href="/critiques" style={{ margin: "0 10px" }}>Critiques</a>
          <a href="/a-propos" style={{ margin: "0 10px" }}>À propos</a>
          <a href="/contact" style={{ margin: "0 10px" }}>Contact</a>
        </nav>
      </header>

      {/* Contenu */}
      <section style={{ maxWidth: 960, margin: "20px auto", padding: "0 16px" }}>
        <h2>Bienvenue</h2>
        <h3>Découvrez nos critiques et commentaires</h3>
        <p>Explorez des critiques détaillées de vos mangas et manwhas préférés.</p>

        <img
          src="https://i.postimg.cc/WbF7sk67/IMG-0132.jpg"
          alt=""
          style={{ maxWidth: "100%", height: "auto", borderRadius: 12 }}
        />
      </section>

      <footer style={{ textAlign: "center", padding: "20px 0", borderTop: "1px solid #222" }}>
        <small>
          <a href="https://www.instagram.com/mangainsight_review/" target="_blank" rel="noreferrer" style={{ marginRight: 12 }}>
            Instagram
          </a>
          <a href="https://www.facebook.com/profile.php?id=61558806596916" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </small>
        <div style={{ opacity: 0.7, marginTop: 8 }}>© 2025 Mangainsight — Mentions légales & Affiliation</div>
      </footer>
    </main>
  );
}
