"use client";

import { useEffect, useState } from "react";
import { useUser } from "@/lib/lib/useUser";
import { supabase } from "@/lib/lib/supabase/client";

export default function AuthMenu() {
  const user = useUser();
  const [avatar, setAvatar] = useState<string | null>(null);
  const [label, setLabel] = useState<string>("");

  useEffect(() => {
    if (!user) { setAvatar(null); setLabel(""); return; }
    supabase.from("profiles").select("display_name, avatar_url").eq("id", user.id).single()
      .then(({ data }) => {
        setLabel(data?.display_name || user.email || "Mon compte");
        setAvatar(data?.avatar_url || null);
      });
  }, [user]);

  if (!user) {
    return (
      <a href="/compte" className="text-sm text-violet-300 hover:text-violet-200">
        Se connecter
      </a>
    );
  }

  return (
    <a href="/compte" className="flex items-center gap-2 text-sm text-gray-200 hover:text-white">
      {avatar ? (
        <img src={avatar} alt="" className="h-6 w-6 rounded-full object-cover border border-white/10" />
      ) : (
        <div className="h-6 w-6 rounded-full bg-white/10 grid place-items-center text-[10px]">👤</div>
      )}
      <span className="max-w-[160px] truncate">{label}</span>
    </a>
  );
}
