import { useRouter } from 'next/router';

export default function Series() {
  const { query } = useRouter();
  const id = String(query.id || 'inconnu');
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1 style={{ fontSize: 32, marginBottom: 12 }}>Série : {id}</h1>
      <p>Route dynamique OK ✅ (dossier <code>pages/</code>).</p>
    </div>
  );
}
