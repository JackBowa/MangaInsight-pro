'use client';

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function SupaTest() {
  const { data, error } = await supabase
    .from('comments')
    .select('id')
    .limit(1);

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 rounded-lg border border-white/10 bg-white/5">
      <h2 className="text-lg font-semibold mb-2">Test Supabase</h2>
      {error ? (
        <p className="text-red-400">✖ {error.message}</p>
      ) : (
        <p className="text-green-400">
          ✔ Connexion OK — URL: {process.env.NEXT_PUBLIC_SUPABASE_URL}
        </p>
      )}
    </div>
  );
}
