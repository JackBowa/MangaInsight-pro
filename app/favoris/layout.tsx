import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mes favoris · MangaInsight",
  description: "Retrouvez toutes les séries que vous avez sauvegardées sur MangaInsight.",
};

export default function FavorisLayout({ children }: { children: React.ReactNode }) {
  return children;
}
