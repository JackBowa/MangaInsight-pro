"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@/lib/lib/useUser";
import { supabase } from "@/lib/lib/supabase/client";
import { useProfile } from "@/lib/lib/useProfile";

/** -------------------- */
/**  UI de connexion     */
/** -------------------- */
function AuthPanel() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const origin =
    typeof window !== "undefined" ? window.location.origin : "https://mangainsight.com";

  async function signIn(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) setMsg(error.message);
    else setMsg("Connecté !");
  }

  async function signUp(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    setBusy(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${origin}/compte` },
    });
    setBusy(false);
    if (error) setMsg(error.message);
    else setMsg("Compte créé. Vérifie tes emails pour confirmer l’adresse.");
  }

  async function resetPassword() {
    if (!email) {
      setMsg("Entre d’abord ton email pour réinitialiser le mot de passe.");
      return;
    }
    setMsg(null);
    setBusy(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${origin}/compte`,
    });
    setBusy(false);
    if (error) setMsg(error.message);
    else setMsg("Email de réinitialisation envoyé (si l’adresse existe).");
  }

  return (
    <div className="max-w-md mx-auto card p-5">
      <h2 className="text-xl font-semibold mb-3">
        {mode === "signin" ? "Se connecter" : "Créer un compte"}
      </h2>

      <form onSubmit={mode === "signin" ? signIn : signUp} className="space-y-3">
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-violet-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-violet-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete={mode === "signin" ? "current-password" : "new-password"}
          required
        />

        {!!msg && (
          <div className="text-sm text-orange-300 border border-white/10 rounded px-3 py-2 bg-white/5">
            {msg}
          </div>
        )}

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={busy}
            className="btn bg-violet-600 hover:bg-violet-500 border-violet-500 text-white"
          >
            {busy ? "Chargement…" : mode === "signin" ? "Se connecter" : "Créer le compte"}
          </button>

          <button
            type="button"
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            className="btn"
            disabled={busy}
          >
            {mode === "signin" ? "Créer un compte" : "J’ai déjà un compte"}
          </button>

          <button type="button" onClick={resetPassword} className="ml-auto text-sm underline">
            Mot de passe oublié ?
          </button>
        </div>
      </form>
    </div>
  );
}

/** -------------------- */
/**  Page /compte        */
/** -------------------- */
export default function AccountPage() {
  const user = useUser();
  const [busy, setBusy] = useState(false);
  const [saved, setSaved] = useState(false);

  // Hook profil (pseudo + avatar)
  const { loading, displayName, setDisplayName, avatarUrl, setAvatarUrl, save } =
    useProfile(user);

  // Si pas connecté → montrer l’UI de connexion complète
  if (!user) {
    return (
      <section className="mx-auto max-w-3xl">
        <h1 className="text-2xl font-semibold mb-4 text-center">Compte</h1>
        <p className="text-center text-sm text-gray-300 mb-4">
          Tu dois être connecté pour gérer ton profil.
        </p>
        <AuthPanel />
      </section>
    );
  }

  // Connecté → édition du profil
  async function onSave(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setSaved(false);
    try {
      await save();
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="mx-auto max-w-3xl">
      <h1 className="text-2xl font-semibold mb-6">Mon compte</h1>

      <form onSubmit={onSave} className="card p-5 space-y-4">
        <div className="flex items-center gap-4">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt=""
              className="h-16 w-16 rounded-full object-cover border border-white/10"
            />
          ) : (
            <div className="h-16 w-16 rounded-full bg-white/10 grid place-items-center">👤</div>
          )}
          <div className="text-sm text-gray-400">
            {user.email}
            <div className="text-xs opacity-70">{user.id}</div>
          </div>
        </div>

        <label className="block">
          <div className="text-sm mb-1">Pseudo affiché</div>
          <input
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Ton pseudo"
            className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-violet-400"
            disabled={loading || busy}
          />
        </label>

        <label className="block">
          <div className="text-sm mb-1">Avatar (URL)</div>
          <input
            value={avatarUrl || ""}
            onChange={(e) => setAvatarUrl(e.target.value)}
            placeholder="https://…/mon-avatar.jpg"
            className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-violet-400"
            disabled={loading || busy}
          />
        </label>

        {saved && (
          <div className="text-sm text-emerald-300 border border-emerald-400/20 rounded px-3 py-2 bg-emerald-900/20">
            Profil mis a jour.
          </div>
        )}

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={loading || busy}
            className="btn bg-violet-600 hover:bg-violet-500 border-violet-500 text-white"
          >
            {busy ? "Enregistrement…" : "Enregistrer"}
          </button>

          <button
            type="button"
            className="btn"
            onClick={async () => {
              setBusy(true);
              await supabase.auth.signOut();
              setBusy(false);
              // Le header + cette page se mettront à jour automatiquement
            }}
            disabled={busy}
          >
            Se déconnecter
          </button>
        </div>
      </form>
    </section>
  );
}