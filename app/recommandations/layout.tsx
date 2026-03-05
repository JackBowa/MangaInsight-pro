import { ReactNode } from 'react';

export const metadata = {
  title: 'Trouve ta prochaine série manga',
  description: 'Réponds à 4 questions et découvre la série manga ou manhwa faite pour toi parmi nos 100+ critiques. Recommandations personnalisées par MangaInsight.',
  openGraph: {
    title: 'Trouve ta prochaine série manga — MangaInsight',
    description: 'Réponds à 4 questions et découvre la série manga ou manhwa faite pour toi parmi nos 100+ critiques.',
    url: 'https://mangainsight.com/recommandations',
  },
};

export default function RecommandationsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
