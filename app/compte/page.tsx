"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@supabase/auth-helpers-react";

// chemins relatifs = zéro galère d'alias
import { supabase } from "../../lib/lib/supabase/client";
import { useProfile } from "../../lib/lib/useProfile";

type View = "signin" | "signup" | "forgot" | "set-new-password";

export default function AccountPage() {
  const user = useUser();
  const [view, setView] = useState<View>("signin");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const origin = typeof window !== "undefined" ? window.location.origin : "";

  // ——— Auth state change: si l’utilisateur clique un lien “reset password” envoyé par mail,
  // Supabase déclenche PASSWORD_RECOVERY quand il revient sur le site.
  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") {
        setView("set-new-password");
      }
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  // ===> VUE: non connecté => formulaires auth
  if (!user) {
    return (
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold mb-6">
          {view === "signin" && "Se connecter"}
          {view === "signup" && "Créer un compte"}
          {view === "forgot" && "Mot de passe oublié"}
          {view === "set-new-password" && "Définir un nouveau mot de passe"}
        </h1>

        <div className="max-w-md space-y-4">
          {view === "signin" && <SigninForm onSwitch={setView} setBusy={setBusy} setError={setError} origin={origin} />}
          {view === "signup" && <SignupForm onSwitch={setView} setBusy={setBusy} setError={setError} origin={origin} />}
          {view === "forgot" && <ForgotForm onSwitch={setView} setBusy={setBusy} setError={setError} origin={origin} />}
          {view === "set-new-password" && <NewPasswordForm onSwitch={setView} setBusy={setBusy} setError={setError} />}

          {/* OAuth (optionnel) */}
          {view !== "set-new-password" && (
            <>
              <div className="text-center text-sm text-gray-400">ou</div>
              <div className="grid grid-cols-2 gap-2">
                <OAuthButton provider="google" label="Google" setBusy={setBusy} setError={setError} origin={origin} />
                <OAuthButton provider="github" label="GitHub" setBusy={setBusy} setError={setError} origin={origin} />
              </div>
            </>
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

  // ===> VUE: connecté => profil
  const { loading, displayName, setDisplayName, avatarUrl, setAvatarUrl, save } = useProfile(user);
  async function logout() {
    await supabase.auth.signOut();
    window.location.replace("/compte");
  }

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
          <button onClick={save} disabled={loading} className="rounded-xl bg-violet-600 hover:bg-violet-500 px-4 py-2">
            Sauvegarder
          </button>
          <button onClick={logout} className="rounded-xl border border-white/15 hover:bg-white/10 px-4 py-2">
            Se déconnecter
          </button>
        </div>
      </div>
    </main>
  );
}

/* -------------------- Sous-composants Auth -------------------- */

function OAuthButton({
  provider,
  label,
  setBusy,
  setError,
  origin,
}: {
  provider: "google" | "github";
  label: string;
  setBusy: (b: boolean) => void;
  setError: (s: string | null) => void;
  origin: string;
}) {
  return (
    <button
      onClick={async () => {
        try {
          setBusy(true);
          setError(null);
          const { error } = await supabase.auth.signInWithOAuth({
            provider,
            options: { redirectTo: `${origin}/compte` },
          });
          if (error) throw error;
        } catch (e: any) {
          setError(e.message ?? "Erreur OAuth.");
        } finally {
          setBusy(false);
        }
      }}
      className="w-full rounded-xl border border-white/20 px-4 py-2 hover:bg-white/10"
    >
      Continuer avec {label}
    </button>
  );
}

function SigninForm({
  onSwitch,
  setBusy,
  setError,
  origin,
}: {
  onSwitch: (v: View) => void;
  setBusy: (b: boolean) => void;
  setError: (s: string | null) => void;
  origin: string;
}) {
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") || "").trim();
    const password = String(form.get("password") || "");
    if (!email || !password) return setError("Email et mot de passe requis.");

    try {
      setBusy(true);
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      window.location.replace("/compte");
    } catch (e: any) {
      setError(e.message ?? "Connexion échouée.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <input name="email" type="email" placeholder="e-mail" className="w-full rounded-xl bg-black/40 border border-white/15 px-3 py-2 outline-none focus:border-violet-400" />
      <input name="password" type="password" placeholder="mot de passe" className="w-full rounded-xl bg-black/40 border border-white/15 px-3 py-2 outline-none focus:border-violet-400" />
      <button type="submit" className="w-full rounded-xl bg-violet-600 hover:bg-violet-500 px-4 py-2">Se connecter</button>
      <div className="text-sm text-gray-400 flex gap-3">
        <button type="button" onClick={() => onSwitch("signup")} className="underline">Créer un compte</button>
        <button type="button" onClick={() => onSwitch("forgot")} className="underline">Mot de passe oublié</button>
      </div>
    </form>
  );
}

function SignupForm({
  onSwitch,
  setBusy,
  setError,
  origin,
}: {
  onSwitch: (v: View) => void;
  setBusy: (b: boolean) => void;
  setError: (s: string | null) => void;
  origin: string;
}) {
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") || "").trim();
    const password = String(form.get("password") || "");

    if (!email || !password) return setError("Email et mot de passe requis.");
    if (password.length < 6) return setError("Mot de passe trop court (min. 6).");

    try {
      setBusy(true);
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${origin}/compte` }, // si email confirmation activée
      });
      if (error) throw error;
      onSwitch("signin");
    } catch (e: any) {
      setError(e.message ?? "Création de compte échouée.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <input name="email" type="email" placeholder="e-mail" className="w-full rounded-xl bg-black/40 border border-white/15 px-3 py-2 outline-none focus:border-violet-400" />
      <input name="password" type="password" placeholder="mot de passe (min. 6)" className="w-full rounded-xl bg-black/40 border border-white/15 px-3 py-2 outline-none focus:border-violet-400" />
      <button type="submit" className="w-full rounded-xl bg-violet-600 hover:bg-violet-500 px-4 py-2">Créer un compte</button>
      <div className="text-sm text-gray-400">
        Déjà un compte ?{" "}
        <button type="button" onClick={() => onSwitch("signin")} className="underline">Se connecter</button>
      </div>
    </form>
  );
}

function ForgotForm({
  onSwitch,
  setBusy,
  setError,
  origin,
}: {
  onSwitch: (v: View) => void;
  setBusy: (b: boolean) => void;
  setError: (s: string | null) => void;
  origin: string;
}) {
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") || "").trim();
    if (!email) return setError("Entre ton e-mail.");

    try {
      setBusy(true);
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${origin}/compte`,
      });
      if (error) throw error;
      onSwitch("signin");
    } catch (e: any) {
      setError(e.message ?? "Impossible d’envoyer le mail de réinitialisation.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <input name="email" type="email" placeholder="e-mail" className="w-full rounded-xl bg-black/40 border border-white/15 px-3 py-2 outline-none focus:border-violet-400" />
      <button type="submit" className="w-full rounded-xl bg-violet-600 hover:bg-violet-500 px-4 py-2">Envoyer un lien de réinitialisation</button>
      <div className="text-sm text-gray-400">
        <button type="button" onClick={() => onSwitch("signin")} className="underline">Retour</button>
      </div>
    </form>
  );
}

function NewPasswordForm({
  onSwitch,
  setBusy,
  setError,
}: {
  onSwitch: (v: View) => void;
  setBusy: (b: boolean) => void;
  setError: (s: string | null) => void;
}) {
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = new FormData(e.currentTarget);
    const password = String(form.get("password") || "");
    if (password.length < 6) return setError("Mot de passe trop court (min. 6).");

    try {
      setBusy(true);
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      onSwitch("signin");
    } catch (e: any) {
      setError(e.message ?? "Impossible de définir le nouveau mot de passe.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <input name="password" type="password" placeholder="Nouveau mot de passe" className="w-full rounded-xl bg-black/40 border border-white/15 px-3 py-2 outline-none focus:border-violet-400" />
      <button type="submit" className="w-full rounded-xl bg-violet-600 hover:bg-violet-500 px-4 py-2">Enregistrer</button>
    </form>
  );
}