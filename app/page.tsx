export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Mangainsight</h1>
      <p style={{ marginBottom: '1rem' }}>
        Accueil OK ✅ — cette page est servie par Next.js.
      </p>
      <a href="/reviews" style={{ color: '#8b5cf6', textDecoration: 'underline' }}>
        Aller aux reviews
      </a>
    </div>
  );
}
