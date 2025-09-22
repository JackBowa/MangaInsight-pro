"use client";
import { useState } from "react";
import { supabase } from "@/lib/lib/supabase/client";

export default function ComptePage() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function sendMagicLink(e: React.FormEvent) {
    e.preventDefault();
    setOk(null); setErr(null);
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: typeof window !== "undefined"
          ? window.location.origin
          : undefined,
      },
    });
    if (error) setErr(error.message);
    else setOk("Email envoyé ! Clique sur le lien pour te connecter.");
  }

  async function logout() {
    await supabase.auth.signOut();
    window.location.reload();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto max-w-md p-6">
        <h1 className="text-2xl font-bold mb-4">Se connecter</h1>

        <form onSubmit={sendMagicLink} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Ton e-mail"
            required
            className="w-full rounded bg-black/40 border border-white/10 px-3 py-2"
          />
          <button className="rounded bg-violet-600 hover:bg-violet-500 px-4 py-2 text-sm font-medium">
            Recevoir un lien magique
          </button>
        </form>

        {ok && <p className="mt-3 text-green-400">{ok}</p>}
        {err && <p className="mt-3 text-red-400">{err}</p>}

        <hr className="my-6 border-white/10" />
        <button onClick={logout} className="text-sm text-gray-300 underline">
          Se déconnecter
        </button>
      </div>
    </main>
  );
}
