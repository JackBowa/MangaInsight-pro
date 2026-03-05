import { ReactNode } from 'react';

export const metadata = {
  title: 'À propos de MangaInsight',
  description: 'MangaInsight est la référence francophone pour les critiques de manga et manhwa. Découvre notre histoire, nos valeurs et notre équipe.',
  openGraph: {
    title: 'À propos — MangaInsight',
    description: 'MangaInsight est la référence francophone pour les critiques de manga et manhwa. Découvre notre histoire et nos valeurs.',
    url: 'https://mangainsight.com/a-propos',
  },
};

export default function AProposLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
