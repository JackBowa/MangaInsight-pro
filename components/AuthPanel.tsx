"use client";

import { useState } from "react";
import { supabase } from "@/lib/lib/supabase/client";

type Mode = "login" | "signup";

export default function AuthPanel() {
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function onLogin(e: React.FormEvent) {
    e.preventDefault();
    setErr(null); setMsg(null); setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) return setErr(error.message);
    // rafraîchit la page / redirige vers /compte
    window.location.href = "/compte";
  }

  async function onSignup(e: React.FormEvent) {
    e.preventDefault();
    setErr(null); setMsg(null); setBusy(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${window.location.origin}/compte` },
    });
    setBusy(false);
    if (error) return setErr(error.message);
    setMsg("Compte créé ! Vérifie tes emails pour confirmer l’adresse.");
  }

  async function onReset() {
    if (!email) return setErr("Entre d’abord ton email pour le reset.");
    setErr(null); setMsg(null); setBusy(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/compte`,
    });
    setBusy(false);
    if (error) return setErr(error.message);
    setMsg("Email de réinitialisation envoyé 👍");
  }

  return (
    <div className="max-w-md mx-auto card p-5">
      <div className="flex gap-2 mb-4">
        <button
          className={`btn ${mode === "login" ? "bg-white/10" : ""}`}
          onClick={() => setMode("login")}
          type="button"
        >
          Connexion
        </button>
        <button
          className={`btn ${mode === "signup" ? "bg-white/10" : ""}`}
          onClick={() => setMode("signup")}
          type="button"
        >
          Inscription
        </button>
      </div>

      <form onSubmit={mode === "login" ? onLogin : onSignup} className="space-y-3">
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-violet-400"
        />
        <input
          type="password"
          required
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-violet-400"
        />

        {err && (
          <div className="text-sm text-red-400 border border-red-400/30 rounded px-3 py-2 bg-red-950/20">
            {err}
          </div>
        )}
        {msg && (
          <div className="text-sm text-emerald-300 border border-emerald-400/20 rounded px-3 py-2 bg-emerald-900/20">
            {msg}
          </div>
        )}

        <div className="flex items-center justify-between">
          <button
            disabled={busy}
            className="rounded-xl bg-violet-600 hover:bg-violet-500 px-4 py-2 text-sm font-medium disabled:opacity-50"
            type="submit"
          >
            {busy ? "Patiente..." : mode === "login" ? "Se connecter" : "Créer mon compte"}
          </button>

          {mode === "login" && (
            <button
              type="button"
              onClick={onReset}
              className="text-sm text-gray-300 hover:text-white underline"
            >
              Mot de passe oublié ?
            </button>
          )}
        </div>
      </form>
    </div>
  );
}