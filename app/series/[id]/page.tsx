export default function Series({ params }: { params: { id: string } }) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        Série : {params.id}
      </h1>
      <p>
        Route dynamique OK ✅ — cette page est servie par Next.js.
      </p>
    </div>
  );
}

