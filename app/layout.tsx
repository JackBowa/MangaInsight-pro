import './styles/globals.css'
import { ReactNode } from 'react'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata = {
  metadataBase: new URL('https://mangainsight.com'),
  title: { default: 'Mangainsight', template: '%s · Mangainsight' },
  description: 'Reviews, news, et guides manga/manhwa/webtoons.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark">
      <body className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1 container mx-auto px-4 py-8">{children as ReactNode}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
