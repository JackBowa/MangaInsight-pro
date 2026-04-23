"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@/lib/lib/useUser";
import { supabase } from "@/lib/lib/supabase/client";
import { useProfile } from "@/lib/lib/useProfile";

const A = "#e03030";
const FH = "var(--font-barlow), 'Barlow Condensed', sans-serif";

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "10px 14px", borderRadius: 4,
  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
  color: "#fff", fontSize: 14, outline: "none", transition: "border-color 0.15s",
  fontFamily: "var(--font-figtree), 'Figtree', sans-serif",
};

function AuthPanel() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ text: string; type: "error" | "success" } | null>(null);

  const origin = typeof window !== "undefined" ? window.location.origin : "https://mangainsight.fr";

  async function signIn(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) {
      if (error.message.includes("Invalid login")) setMsg({ text: "Email ou mot de passe incorrect.", type: "error" });
      else if (error.message.includes("Email not confirmed")) setMsg({ text: "Ton email n'est pas encore confirmé. Vérifie ta boîte mail (et les spams).", type: "error" });
      else setMsg({ text: error.message, type: "error" });
    } else {
      setMsg({ text: "Connecté !", type: "success" });
    }
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
    if (error) {
      if (error.message.includes("already registered")) setMsg({ text: "Cet email est déjà utilisé. Connecte-toi ou réinitialise ton mot de passe.", type: "error" });
      else if (error.message.includes("Password should")) setMsg({ text: "Mot de passe trop court (6 caractères minimum).", type: "error" });
      else setMsg({ text: error.message, type: "error" });
    } else {
      setMsg({ text: "Compte créé ! Vérifie ta boîte mail (et les spams) pour confirmer ton adresse.", type: "success" });
    }
  }

  async function resetPassword() {
    if (!email) { setMsg({ text: "Entre d'abord ton email.", type: "error" }); return; }
    setMsg(null);
    setBusy(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${origin}/compte` });
    setBusy(false);
    if (error) setMsg({ text: error.message, type: "error" });
    else setMsg({ text: "Email de réinitialisation envoyé (si l'adresse existe). Vérifie tes spams.", type: "success" });
  }

  return (
    <div style={{ maxWidth: 420, margin: "0 auto" }}>
      {/* Tabs */}
      <div style={{ display: "flex", borderBottom: "1px solid rgba(255,255,255,0.08)", marginBottom: 28 }}>
        {(["signin", "signup"] as const).map(m => (
          <button key={m} onClick={() => { setMode(m); setMsg(null); }} style={{
            fontFamily: FH, fontSize: 12, fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            padding: "12px 20px", background: "none", border: "none",
            borderBottom: mode === m ? `2px solid ${A}` : "2px solid transparent",
            color: mode === m ? "#fff" : "rgba(255,255,255,0.35)",
            cursor: "pointer", transition: "color 0.15s", marginBottom: -1,
          }}>
            {m === "signin" ? "Se connecter" : "Créer un compte"}
          </button>
        ))}
      </div>

      <form onSubmit={mode === "signin" ? signIn : signUp} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <input
          type="email" placeholder="Email" value={email}
          onChange={e => setEmail(e.target.value)}
          style={inputStyle} autoComplete="email" required
        />
        <input
          type="password"
          placeholder={mode === "signup" ? "Mot de passe (6 caractères min.)" : "Mot de passe"}
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={inputStyle}
          autoComplete={mode === "signin" ? "current-password" : "new-password"}
          required
        />

        {msg && (
          <div style={{
            fontSize: 13, padding: "10px 14px", borderRadius: 4,
            background: msg.type === "error" ? "rgba(239,68,68,0.08)" : "rgba(34,197,94,0.08)",
            border: `1px solid ${msg.type === "error" ? "rgba(239,68,68,0.25)" : "rgba(34,197,94,0.25)"}`,
            color: msg.type === "error" ? "#f87171" : "#86efac",
          }}>
            {msg.text}
          </div>
        )}

        <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
          <button type="submit" disabled={busy} style={{
            padding: "10px 22px", borderRadius: 4,
            background: busy ? "rgba(255,255,255,0.1)" : A,
            color: busy ? "rgba(255,255,255,0.4)" : "#fff",
            border: "none", fontFamily: FH, fontSize: 12, fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            cursor: busy ? "not-allowed" : "pointer", transition: "all 0.15s",
          }}>
            {busy ? "Chargement…" : mode === "signin" ? "Se connecter" : "Créer le compte"}
          </button>

          {mode === "signin" && (
            <button type="button" onClick={resetPassword} disabled={busy} style={{
              marginLeft: "auto", fontSize: 12, color: "rgba(255,255,255,0.3)",
              background: "none", border: "none", cursor: "pointer",
              fontFamily: FH, letterSpacing: "0.06em", transition: "color 0.15s",
            }}>
              Mot de passe oublié ?
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default function AccountPage() {
  const user = useUser();
  const [busy, setBusy] = useState(false);
  const [saved, setSaved] = useState(false);
  const { loading, displayName, setDisplayName, avatarUrl, setAvatarUrl, save } = useProfile(user);

  if (!user) {
    return (
      <div style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 16px" }}>
        <p style={{ fontFamily: FH, fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: A, marginBottom: 16 }}>
          Espace membre
        </p>
        <h1 style={{ fontFamily: FH, fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 800, letterSpacing: "0.04em", textTransform: "uppercase", color: "#fff", lineHeight: 0.92, marginBottom: 32, textAlign: "center" }}>
          Mon <span style={{ color: A }}>compte</span>
        </h1>
        <div style={{ width: "100%", maxWidth: 420 }}>
          <AuthPanel />
        </div>
      </div>
    );
  }

  async function onSave(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setSaved(false);
    try { await save(); setSaved(true); setTimeout(() => setSaved(false), 3000); }
    finally { setBusy(false); }
  }

  return (
    <div style={{ maxWidth: 600, margin: "60px auto", padding: "0 16px" }}>
      <p style={{ fontFamily: FH, fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: A, marginBottom: 12 }}>
        Espace membre
      </p>
      <h1 style={{ fontFamily: FH, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "0.04em", textTransform: "uppercase", color: "#fff", lineHeight: 0.92, marginBottom: 32 }}>
        Mon <span style={{ color: A }}>profil</span>
      </h1>

      <form onSubmit={onSave} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 4, padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Avatar + email */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {avatarUrl ? (
            <img src={avatarUrl} alt="" style={{ width: 56, height: 56, borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(255,255,255,0.1)" }} />
          ) : (
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>👤</div>
          )}
          <div>
            <p style={{ fontSize: 14, color: "#fff", fontWeight: 600 }}>{user.email}</p>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: FH, letterSpacing: "0.06em" }}>{user.id.slice(0, 8)}…</p>
          </div>
        </div>

        <div>
          <label style={{ fontFamily: FH, fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", display: "block", marginBottom: 8 }}>Pseudo affiché</label>
          <input value={displayName} onChange={e => setDisplayName(e.target.value)} placeholder="Ton pseudo" style={inputStyle} disabled={loading || busy} />
        </div>

        <div>
          <label style={{ fontFamily: FH, fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", display: "block", marginBottom: 8 }}>Avatar (URL)</label>
          <input value={avatarUrl || ""} onChange={e => setAvatarUrl(e.target.value)} placeholder="https://…/avatar.jpg" style={inputStyle} disabled={loading || busy} />
        </div>

        {saved && (
          <div style={{ fontSize: 13, padding: "10px 14px", borderRadius: 4, background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.25)", color: "#86efac" }}>
            Profil mis à jour.
          </div>
        )}

        <div style={{ display: "flex", gap: 10 }}>
          <button type="submit" disabled={loading || busy} style={{
            padding: "10px 22px", borderRadius: 4, background: loading || busy ? "rgba(255,255,255,0.1)" : A,
            color: loading || busy ? "rgba(255,255,255,0.4)" : "#fff", border: "none",
            fontFamily: FH, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
            cursor: loading || busy ? "not-allowed" : "pointer", transition: "all 0.15s",
          }}>
            {busy ? "Enregistrement…" : "Enregistrer"}
          </button>
          <button type="button" disabled={busy} onClick={async () => { setBusy(true); await supabase.auth.signOut(); setBusy(false); }} style={{
            padding: "10px 22px", borderRadius: 4, background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)",
            fontFamily: FH, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
            cursor: busy ? "not-allowed" : "pointer", transition: "all 0.15s",
          }}>
            Se déconnecter
          </button>
        </div>
      </form>
    </div>
  );
}
