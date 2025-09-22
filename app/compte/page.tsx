"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@supabase/auth-helpers-react";

// ✅ chemins RELATIFS (fonctionnent partout)
import { supabase } from "../../lib/lib/supabase/client";
import { useProfile } from "../../lib/lib/useProfile";

export default function AccountPage() {
  const user = useUser();

  // profil (hook maison)
  const {
    loading,
    displayName,
    setDisplayName,
    avatarUrl,
    setAvatarUrl,
    save,
  } = useProfile();

  const [busy, setBusy] = useState(false);
  const [mailSent, setMailSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // --- UI connexion si pas connecté ---
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
    // petit refresh soft
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
            <p className="text-red-400