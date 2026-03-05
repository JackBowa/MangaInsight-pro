import { ReactNode } from 'react';

export const metadata = {
  title: 'Critiques manga et manhwa',
  description: 'Toutes nos critiques détaillées de manga et manhwa : notes, points forts, points faibles et avis complets sur plus de 100 séries.',
  openGraph: {
    title: 'Critiques manga et manhwa — MangaInsight',
    description: 'Toutes nos critiques détaillées de manga et manhwa : notes, points forts, points faibles et avis complets sur plus de 100 séries.',
    url: 'https://mangainsight.com/critiques',
  },
};

export default function CritiquesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
