"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/lib/supabase/client";        // <-- garde ton chemin actuel
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import type { User } from "@supabase/supabase-js";

export default function ComptePage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user ?? null));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  // Si connecté : petit tableau de bord simple
  if (user) {
    return (
      <main className="min-h-screen bg-black text-white">
        <div className="container mx-auto max-w-2xl px-4 py-8 space-y-6">
          <h1 className="text-2xl font-semibold">Mon compte</h1>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm text-gray-300">Connecté en tant que</div>
            <div className="text-lg">{user.email}</div>
          </div>

          <div className="flex gap-3">
            <a
              href="/"
              className="rounded bg-white/10 hover:bg-white/20 px-4 py-2 text-sm"
            >
              Revenir à l’accueil
            </a>
            <button
              onClick={async () => { await supabase.auth.signOut(); window.location.reload(); }}
              className="rounded bg-red-600 hover:bg-red-500 px-4 py-2 text-sm"
            >
              Se déconnecter
            </button>
          </div>
        </div>
      </main>
    );
  }

  // Si déconnecté : widget Auth prêt à l’emploi
  return (
    <main className="min-h-screen bg-black text-white grid place-items-center px-4">
      <div className="w-full max-w-md rounded-xl border border-white/10 bg-white/5 p-5">
        <h1 className="text-xl font-semibold mb-4">Se connecter / S’inscrire</h1>

        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: "#7c3aed",      // violet Tailwind
                  brandAccent: "#6d28d9",
                  inputText: "white",
                },
              },
            },
            className: {
              container: "text-white",
              button: "bg-violet-600 hover:bg-violet-500 text-white",
              input: "bg-black/40 border-white/10 text-white",
              label: "text-gray-300",
            },
          }}
          providers={[]}                // ex: ["google"] si tu actives Google
          localization={{
            variables: {
              sign_in: { email_label: "Email", password_label: "Mot de passe" },
              sign_up: { email_label: "Email", password_label: "Mot de passe" },
            },
          }}
          redirectTo={typeof window !== "undefined" ? window.location.origin : undefined}
        />
      </div>
    </main>
  );
}
