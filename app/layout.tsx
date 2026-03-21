import '../styles/globals.css'
import { ReactNode } from 'react'
import { Bebas_Neue, DM_Sans } from 'next/font/google'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://mangainsight.com'),
  title: { default: 'MangaInsight', template: '%s · MangaInsight' },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
  },
  description: 'Critiques détaillées, tops et guides pour explorer les meilleures séries manga et manhwa.',
  openGraph: {
    type: 'website',
    siteName: 'MangaInsight',
    title: 'MangaInsight — Ton guide manga ultime',
    description: 'Critiques détaillées, tops et guides pour explorer les meilleures séries manga et manhwa.',
    url: 'https://mangainsight.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MangaInsight — Critiques manga et manhwa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MangaInsight — Ton guide manga ultime',
    description: 'Critiques détaillées, tops et guides pour explorer les meilleures séries manga et manhwa.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={`dark ${bebasNeue.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}

