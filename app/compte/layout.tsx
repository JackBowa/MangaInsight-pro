import { ReactNode } from 'react';

export const metadata = {
  title: 'Mon compte',
  description: 'Gere ton profil MangaInsight, modifie ton pseudo et consulte tes avis.',
  openGraph: {
    title: 'Mon compte — MangaInsight',
    description: 'Gere ton profil MangaInsight.',
    url: 'https://mangainsight.com/compte',
  },
};

export default function CompteLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
