// lib/lib/useProfile.ts (extrait)
import { useEffect, useState } from "react";
import { supabase } from "./supabase/client";
import type { User } from "@supabase/supabase-js";

export function useProfile(user: User | null) {
  const [loading, setLoading] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    if (!user) return;
    setLoading(true);
    supabase
      .from("profiles")
      .select("display_name, avatar_url")
      .eq("id", user.id)
      .single()
      .then(({ data, error }) => {
        if (!error && data) {
          setDisplayName(data.display_name ?? "");
          setAvatarUrl(data.avatar_url ?? "");
        }
      })
      .finally(() => setLoading(false));
  }, [user]);

  async function save() {
    if (!user) return;
    const { error } = await supabase
      .from("profiles")
      .upsert({ id: user.id, display_name: displayName, avatar_url: avatarUrl });
    if (error) throw error;
  }

  return { loading, displayName, setDisplayName, avatarUrl, setAvatarUrl, save };
}