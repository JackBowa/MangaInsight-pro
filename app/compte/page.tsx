"use client";

import React, { useState } from "react";
import { useUser } from "@supabase/auth-helpers-react";

// chemins RELATIFS (fonctionnent partout, Vercel inclus)
import { supabase } from "../../lib/lib/supabase/client";
import { useProfile } from "../../lib/lib/useProfile";

export default function AccountPage() {
  const user = useUser();

  // ⬅️ Corrigé : on passe `user` au hook
  const {
    loading,
    displayName,
    setDisplayName,
    avatarUrl,
    setAvatarUrl,
    save,
  } = useProfile(user);

  const [busy, setBusy] = useState(false);
  const [mailSent, setMailSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function oauth(provider: "google" | "github") {
    try {
      setBusy(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: { redirectTo: `${window.location.origin}/compte` },
      });
      if (error) throw error;
    } catch (e: any) {
      setError(e.message ?? "Erreur de connexion OAuth.");
    } finally {
      setBusy(false);
    }
  }

  async function magicLink(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") || "").trim();
    if (!email) return setError("Entre un e-mail.");
    try {
      setBusy(true);
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: `${window.location.origin}/compte` },
      });
      if (error) throw error;
      setMailSent(true);
    } catch (e: any) {
      setError(e.message ?? "Échec de l’envoi du lien magique.");
    } finally {
      setBusy(false);
    }
  }

  async function logout() {
    await supabase.auth.signOut();
    window.location.replace("/compte");
  }

  if (!user) {
    // --- écran de connexion ---
    return (
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold mb-6">Se connecter</h1>

        <div className="max-w-md space-y-4">
          <button
            onClick={() => oauth("google")}
            disabled={busy}
            className="w-full rounded-xl border border-white/20 px-4 py-2 hover:bg-white/10"
          >
            Continuer avec Google
          </button>
          <button
            onClick={() => oauth("github")}
            disabled={busy}
            className="w-full rounded-xl border border-white/20 px-4 py-2 hover:bg-white/10"
          >
            Continuer avec GitHub
          </button>

          <div className="text-center text-sm text-gray-400">ou</div>

          <form onSubmit={magicLink} className="space-y-3">
            <input
              name="email"
              type="email"
              placeholder="ton@email.com"
              className="w-full rounded-xl bg-black/40 border border-white/15 px-3 py-2 outline-none focus:border-violet-400"
              disabled={busy}
            />
            <button
              type="submit"
              disabled={busy}
              className="w-full rounded-xl bg-violet-600 hover:bg-violet-500 px-4 py-2"
            >
              Recevoir un lien magique
            </button>
          </form>

          {mailSent && (
            <p className="text-green-400 text-sm">
              Lien envoyé ! Vérifie ta boîte mail.
            </p>
          )}
          {error && (
            <p className="text-red-400 text-sm border border-red-400/30 rounded px-3 py-2 bg-red-950/20">
              {error}
            </p>
          )}
        </div>
      </main>
    );
  }

  // --- écran profil ---
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">Mon compte</h1>

      <div className="max-w-xl space-y-6">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <label className="text-sm text-gray-300">Pseudo</label>
          <input
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Ton pseudo"
            className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-violet-400"
            disabled={loading}
          />
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <label className="text-sm text-gray-300">Avatar (URL)</label>
          <input
            value={avatarUrl}
            onChange={(e) => setAvatarUrl(e.target.value)}
            placeholder="https://…"
            className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-violet-400"
            disabled={loading}
          />
          {avatarUrl && (
            <div className="mt-3">
              <img
                src={avatarUrl}
                alt="Aperçu avatar"
                className="h-16 w-16 rounded-full object-cover border border-white/10"
              />
            </div>
          )}
        </div>

        <div className="flex gap-3">
          <button
            onClick={save}
            disabled={loading}
            className="rounded-xl bg-violet-600 hover:bg-violet-500 px-4 py-2"
          >
            Sauvegarder
          </button>
          <button
            onClick={logout}
            className="rounded-xl border border-white/15 hover:bg-white/10 px-4 py-2"
          >
            Se déconnecter
          </button>
        </div>
      </div>
    </main>
  );
}