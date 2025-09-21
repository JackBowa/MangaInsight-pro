export default function Home() {
  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh", fontFamily: "system-ui" }}>
      {/* Bannière */}
      <header role="banner" style={{ margin: 0, padding: 0 }}>
        <img
          src="https://i.postimg.cc/dt1vhRGY/IMG-0126.jpg"
          alt="Manga insight"
          width={2000}
          height={250}
          style={{ display: "block", width: "100%", height: "auto" }}
        />
      </header>

      {/* Bloc texte centré comme avant */}
      <section style={{ maxWidth: 960, margin: "40px auto", padding: "0 16px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Bienvenue</h2>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
          Découvrez nos critiques et commentaires
        </h3>
        <p style={{ opacity: 0.9 }}>
          Explorez des critiques détaillées de vos mangas et manwhas préférés.
        </p>

        <img
          src="https://i.postimg.cc/WbF7sk67/IMG-0132.jpg"
          alt=""
          style={{ maxWidth: "100%", height: "auto", borderRadius: 12, marginTop: "24px" }}
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
