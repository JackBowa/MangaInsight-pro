import { ReactNode } from 'react';

export const metadata = {
  title: 'Nouveautés manga et manhwa',
  description: 'Les dernières séries manga et manhwa ajoutées sur MangaInsight. Découvre les nouvelles critiques et les ajouts récents à notre catalogue.',
  openGraph: {
    title: 'Nouveautés manga et manhwa — MangaInsight',
    description: 'Les dernières séries manga et manhwa ajoutées sur MangaInsight. Découvre les nouvelles critiques.',
    url: 'https://mangainsight.com/nouveautes',
  },
};

export default function NouveautesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
