"use client";

import { useEffect, useState } from "react";
import { useUser } from "@supabase/auth-helpers-react";
import { supabase } from "@/lib/supabase/client";
import { useProfile } from "@/lib/lib/useProfile";

export default function AccountPage() {
  const user = useUser();
  const { loading, displayName, setDisplayName, avatarUrl, setAvatarUrl, save } = useProfile();
  const [busy, setBusy] = useState(false);

  // --- VIEW: not logged in => show real login UI ---
  if (!user) {
    async function oauth(provider: "google" | "github") {
      setBusy(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: { redirectTo: `${window.location.origin}/compte` },
      });
    }

    async function magicLink(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const email = String(form.get("email") || "").trim();
      if (!email) return;
      setBusy(true);
      await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: `${window.location.origin}/compte` },
      });
      alert("Lien magique envoyé (si l'adresse est valide).");
      setBusy(false);
    }

    return (
      <main className="max-w-md mx-auto my-8 p-4 card">
        <h1 className="text-2xl font-semibold mb-4">Se connecter</h1>

        <div className="space-y-3">
          <button
            onClick={() => oauth("google")}
            disabled={busy}
            className="w-full btn justify-center"
          >
            Se connecter avec Google
          </button>
          <button
            onClick={() => oauth("github")}
            disabled={busy}
            className="w-full btn justify-center"
          >
            Se connecter avec GitHub
          </button>

          <div className="text-center text-sm text-gray-400 my-2">— ou —</div>

          <form onSubmit={magicLink} className="space-y-2">
            <input
              name="email"
              type="email"
              placeholder="ton@email.com"
              className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2"
              disabled={busy}
            />
            <button disabled={busy} className="w-full btn justify-center">
              Recevoir un lien magique
            </button>
          </form>
        </div>
      </main>
    );
  }

  // --- VIEW: logged in => profile editor (déjà fonctionnel chez toi) ---
  return (
    <main className="max-w-xl mx-auto my-8 p-4 card space-y-4">
      <h1 className="text-2xl font-semibold">Mon profil</h1>

      <label className="block text-sm">
        <span className="text-gray-400">Pseudo affiché</span>
        <input
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2"
          disabled={loading}
        />
      </label>

      <label className="block text-sm">
        <span className="text-gray-400">URL avatar</span>
        <input
          value={avatarUrl ?? ""}
          onChange={(e) => setAvatarUrl(e.target.value)}
          className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2"
          disabled={loading}
        />
      </label>

      <div className="flex gap-2">
        <button onClick={save} disabled={loading} className="btn">Enregistrer</button>
        <button
          onClick={() => supabase.auth.signOut()}
          className="btn"
        >
          Se déconnecter
        </button>
      </div>
    </main>
  );
}