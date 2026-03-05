import { ReactNode } from 'react';

export const metadata = {
  title: 'Guides manga — Par où commencer ?',
  description: 'Guides complets pour découvrir le manga et le manhwa : les genres, par où commencer, où lire légalement, et nos sélections pour débutants.',
  openGraph: {
    title: 'Guides manga et manhwa — MangaInsight',
    description: 'Guides complets pour découvrir le manga et le manhwa : les genres, par où commencer, où lire légalement.',
    url: 'https://mangainsight.com/guides',
  },
};

export default function GuidesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
