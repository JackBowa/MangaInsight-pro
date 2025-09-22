export default function Home() {
  return (
    <main className="min-h-[60vh]">
      <header role="banner" className="m-0 p-0">
        <img
          src="https://i.postimg.cc/dt1vhRGY/IMG-0126.jpg"
          alt="Manga insight"
          width={2000}
          height={250}
          className="block w-full h-auto"
        />
      </header>

      <section className="max-w-[960px] mx-auto my-10 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-2">Bienvenue</h2>
        <h3 className="text-xl mb-4">Découvrez nos critiques et commentaires</h3>
        <p className="opacity-90">Explorez des critiques détaillées de vos mangas et manwhas préférés.</p>

        <img
          src="https://i.postimg.cc/WbF7sk67/IMG-0132.jpg"
          alt=""
          className="max-w-full h-auto rounded-xl mt-6"
        />
      </section>

      <footer className="text-center py-5 border-t border-white/10">
        <small>
          <a href="https://www.instagram.com/mangainsight_review/" target="_blank" rel="noreferrer" className="mr-3 underline">
            Instagram
          </a>
          <a href="https://www.facebook.com/profile.php?id=61558806596916" target="_blank" rel="noreferrer" className="underline">
            Facebook
          </a>
        </small>
        <div className="opacity-70 mt-2">© 2025 Mangainsight — Mentions légales & Affiliation</div>
      </footer>
    </main>
  );
}