"use client";
export const dynamic = "force-dynamic"; // évite tout prérendu

import { useEffect, useState } from "react";

export default function SupaTest() {
  const [ok, setOk] = useState<string>("…");

  useEffect(() => {
    (async () => {
      // 👉 import dynamique pour n'utiliser supabase que dans le navigateur
      const { createClient } = await import("@supabase/supabase-js");

      const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
      const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
      const supabase = createClient(url, anon);

      const { error } = await supabase
        .from("pg_catalog.pg_tables")
        .select("schemaname")
        .limit(1);

      setOk(error ? `❌ ${error.message}` : "✅ Connexion OK");
    })();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="p-6 rounded-lg border border-white/10 bg-white/5">
        <h1 className="text-xl font-semibold mb-2">Test Supabase</h1>
        <p>{ok}</p>
      </div>
    </main>
  );
}