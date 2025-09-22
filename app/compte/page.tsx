"use client";

import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/lib/supabase/client";
import { useUser } from "@/lib/lib/useUser";
import { useProfile } from "@/lib/lib/useProfile";

export default function ComptePage() {
  const user = useUser();
  const { loading, displayName, setDisplayName, avatarUrl, setAvatarUrl, save } = useProfile(user);
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  async function onUpload(e: React.ChangeEvent<HTMLInputElement>) {
    setErr(null); setMsg(null);
    const file = e.target.files?.[0];
    if (!user || !file) return;

    // Chemin: avatars/<user_id>/<timestamp>-<filename>
    const path = `${user.id}/${Date.now()}-${file.name}`;
    const { error } = await supabase.storage.from("avatars").upload(path, file, { upsert: false });
    if (error) { setErr(error.message); return; }

    const { data } = supabase.storage.from("avatars").getPublicUrl(path);
    setAvatarUrl(data.publicUrl); // on sauvegardera ensuite dans profiles
    setMsg("Avatar uploadé. N’oublie pas d’enregistrer tes changements.");
  }

  async function onSave(e: React.FormEvent) {
    e.preventDefault();
    setErr(null); setMsg(null);
    try {
      await save();
      setMsg("Profil mis à jour ✅");
    } catch (e: any) {
      setErr(e?.message ?? "Erreur");
    }
  }

  async function logout() {
    await supabase.auth.signOut();
    window.location.reload();
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-black text-white grid place-items-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-2">Compte</h1>
          <p>Tu dois être connecté pour gérer ton profil.</p>
          <a href="/compte" className="underline">Aller à la connexion</a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto max-w-2xl px-4 py-8 space-y-6">
        <h1 className="text-2xl font-semibold">Mon compte</h1>

        <form onSubmit={onSave} className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full overflow-hidden bg-white/10 border border-white/10">
              {avatarUrl ? (
                <img src={avatarUrl} alt="avatar" className="h-full w-full object-cover" />
              ) : (
                <div className="h-full w-full grid place-items-center text-gray-400 text-sm">Aucun</div>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <button
                type="button"
                className="rounded bg-white/10 hover:bg-white/20 px-3 py-1 text-sm"
                onClick={() => fileRef.current?.click()}
              >
                Changer l’avatar
              </button>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={onUpload}
              />
              <div className="text-xs text-gray-400">PNG/JPG, ~1–2 Mo idéal.</div>
            </div>
          </div>

          <label className="block">
            <div className="text-sm text-gray-300 mb-1">Pseudo affiché</div>
            <input
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Ton pseudo…"
              className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-violet-400"
              disabled={loading}
            />
          </label>

          {err && <div className="text-sm text-red-400">{err}</div>}
          {msg && <div className="text-sm text-green-400">{msg}</div>}

          <div className="flex gap-3">
            <button
              type="submit"
              className="rounded bg-violet-600 hover:bg-violet-500 px-4 py-2 text-sm"
              disabled={loading}
            >
              Enregistrer
            </button>
            <button
              type="button"
              onClick={logout}
              className="rounded bg-red-600 hover:bg-red-500 px-4 py-2 text-sm"
            >
              Se déconnecter
            </button>
          </div>
        </form>

        <div className="text-sm text-gray-400">
          Connecté en tant que <span className="text-gray-200">{user.email}</span>
        </div>
      </div>
    </main>
  );
}
