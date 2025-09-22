"use client";

import { useState } from "react";
import { useUser } from "@/lib/lib/useUser";
import { supabase } from "@/lib/lib/supabase/client";

export default function AuthMenu() {
  const user = useUser();
  const [open, setOpen] = useState(false);

  if (!user) {
    return (
      <a href="/compte" className="text-sm text-violet-300 hover:text-violet-200">
        Se connecter
      </a>
    );
  }

  const label = user.email ?? "Mon compte";

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="text-sm text-gray-200 hover:text-white"
        title={label}
      >
        {label}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-lg border border-white/10 bg-black/80 backdrop-blur p-1">
          <a
            className="block px-3 py-2 text-sm text-gray-200 hover:bg-white/10 rounded"
            href="/compte"
          >
            Mon compte
          </a>
          <button
            className="w-full text-left px-3 py-2 text-sm text-red-300 hover:bg-white/10 rounded"
            onClick={async () => {
              await supabase.auth.signOut();
              window.location.reload();
            }}
          >
            Se déconnecter
          </button>
        </div>
      )}
    </div>
  );
}
