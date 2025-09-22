"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

export function useProfile(user: User | null) {
  const [loading, setLoading] = useState(false);
  const [displayName, setDisplayName] = useState<string>("");
  const [avatarUrl, setAvatarUrl] = useState<string>("");

  useEffect(() => {
    if (!user) { setDisplayName(""); setAvatarUrl(""); return; }
    setLoading(true);
    supabase.from("profiles").select("*").eq("id", user.id).single()
      .then(({ data }) => {
        if (data) {
          setDisplayName(data.display_name ?? "");
          setAvatarUrl(data.avatar_url ?? "");
        }
      })
      .finally(() => setLoading(false));
  }, [user]);

  async function save() {
    if (!user) return;
    const payload = {
      id: user.id,
      display_name: displayName || null,
      avatar_url: avatarUrl || null,
      updated_at: new Date().toISOString(),
    };
    // upsert crée ou met à jour
    const { error } = await supabase.from("profiles").upsert(payload);
    if (error) throw error;
  }

  return { loading, displayName, setDisplayName, avatarUrl, setAvatarUrl, save };
}
