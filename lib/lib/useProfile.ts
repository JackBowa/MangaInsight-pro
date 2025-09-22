// lib/lib/useProfile.ts
import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "./supabase/client";

export function useProfile(user: User | null) {
  const [loading, setLoading] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    if (!user) return;

    const load = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("display_name, avatar_url")
          .eq("id", user.id)
          .single();

        if (error) {
          // Optionnel: console.warn("profiles load error", error);
          return;
        }
        if (data) {
          setDisplayName(data.display_name ?? "");
          setAvatarUrl(data.avatar_url ?? "");
        }
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [user]);

  async function save() {
    if (!user) return;

    const { error } = await supabase
      .from("profiles")
      .upsert({
        id: user.id,
        display_name: displayName || null,
        avatar_url: avatarUrl || null,
      });

    if (error) {
      throw error;
    }
  }

  return {
    loading,
    displayName,
    setDisplayName,
    avatarUrl,
    setAvatarUrl,
    save,
  };
}