"use client";
import { useState } from "react";
import { supabase } from "@/lib/lib/supabase/client"; // ton client

export default function ComptePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) setMessage(error.message);
    else setMessage("Compte créé ! Vérifie tes mails pour confirmer.");
  }

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setMessage(error.message);
    else setMessage("Connexion réussie !");
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <form onSubmit={handleSignIn} className="space-y-4">
        <h1 className="text-xl font-bold">Connexion / Inscription</h1>
        <input
          type="email"
          placeholder="Email"
          className="block w-full rounded-md px-3 py-2 text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          className="block w-full rounded-md px-3 py-2 text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex gap-2">
          <button
            onClick={handleSignIn}
            className="bg-violet-600 px-4 py-2 rounded-md"
          >
            Se connecter
          </button>
          <button
            onClick={handleSignUp}
            className="bg-green-600 px-4 py-2 rounded-md"
          >
            S'inscrire
          </button>
        </div>
        {message && <p className="text-sm mt-2">{message}</p>}
      </form>
    </main>
  );
}
