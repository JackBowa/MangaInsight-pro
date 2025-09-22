"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

export function useProfile(user: User | null) {
  const [loading, setLoading] = useState(false);
  const [displayName, setDisplayName] = useState<string>("");
  const [avatarUrl, setAvatarUrl] = useState<string>("");

  useEffect(() => {
    if (!user) {
      setDisplayName("");
      setAvatarUrl("");
      return;
    }

    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("display_name, avatar_url")
          .eq("id", user.id)
          .single();

        if (error) {
          // Optionnel: console.error(error);
          return;
        }
        if (!cancelled && data) {
          setDisplayName(data.display_name ?? "");
          setAvatarUrl(data.avatar_url ?? "");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [user]);

  async function save() {
    if (!user) return;
    const payload = {
      id: user.id,
      display_name: displayName || null,
      avatar_url: avatarUrl || null,
      updated_at: new Date().toISOString(),
    };
    const { error } = await supabase.from("profiles").upsert(payload);
    if (error) throw error;
  }

  return { loading, displayName, setDisplayName, avatarUrl, setAvatarUrl, save };
}
