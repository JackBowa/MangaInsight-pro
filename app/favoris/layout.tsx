import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mes favoris · MangaInsight",
  description: "Retrouve toutes les séries que tu as sauvegardées sur MangaInsight.",
};

export default function FavorisLayout({ children }: { children: React.ReactNode }) {
  return children;
}
