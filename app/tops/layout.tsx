import { ReactNode } from 'react';

export const metadata = {
  title: 'Tops manga et manhwa — Classement SSS à B',
  description: 'Le classement officiel MangaInsight : les meilleures séries manga et manhwa notées de SSS à B par notre rédaction. Trouve les incontournables absolus.',
  openGraph: {
    title: 'Tops manga et manhwa — MangaInsight',
    description: 'Le classement officiel MangaInsight : les meilleures séries manga et manhwa notées de SSS à B par notre rédaction.',
    url: 'https://mangainsight.com/tops',
  },
};

export default function TopsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
