# 🚀 Starter **Mangainsight** (Next.js 14 + Tailwind + MDX + AniList‑ready)

Base professionnelle et légère pour Mangainsight : thème sombre, pages SEO, articles en MDX, composants critiques pour reviews (notes, pros/cons, fiches séries), et utilitaires pour brancher AniList.

---

## 1) Arborescence
```
.
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ (sections)/
│  │  ├─ reviews/page.tsx
│  │  ├─ news/page.tsx
│  │  ├─ tops/page.tsx
│  │  └─ guides/page.tsx
│  ├─ series/
│  │  └─ [id]/page.tsx
│  ├─ api/
│  │  └─ anilist/route.ts
│  ├─ robots.txt/route.ts
│  └─ sitemap.xml/route.ts
├─ components/
│  ├─ SiteHeader.tsx
│  ├─ SiteFooter.tsx
│  ├─ ReviewCard.tsx
│  ├─ SeriesCard.tsx
│  ├─ Rating.tsx
│  ├─ ProsCons.tsx
│  ├─ Spoiler.tsx
│  ├─ TagChips.tsx
│  ├─ ComparisonTable.tsx
│  ├─ Breadcrumbs.tsx
│  └─ Toc.tsx
├─ content/
│  ├─ reviews/
│  │  └─ solo-leveling-t1.mdx
│  ├─ news/
│  │  └─ actus-semaine-38-2025.mdx
│  ├─ guides/
│  │  └─ comment-choisir-son-webtoon.mdx
│  └─ images/
├─ lib/
│  ├─ mdx.ts
│  ├─ posts.ts
│  ├─ seo.ts
│  └─ anilist.ts
├─ public/
│  ├─ logo-mangainsight.svg
│  └─ og-image.png
├─ styles/
│  └─ globals.css
├─ data/
│  └─ affiliates.json
├─ .env.example
├─ next.config.mjs
├─ package.json
├─ postcss.config.js
├─ tailwind.config.ts
├─ tsconfig.json
└─ README.md
```

---

## 2) Fichiers clés

### `package.json`
```json
{
  "name": "mangainsight",
  "private": true,
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.5",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "next-mdx-remote": "5.0.0",
    "gray-matter": "4.0.3",
    "remark-gfm": "4.0.0",
    "reading-time": "1.5.0",
    "clsx": "2.1.1",
    "lucide-react": "0.452.0"
  },
  "devDependencies": {
    "autoprefixer": "10.4.19",
    "postcss": "8.4.38",
    "tailwindcss": "3.4.10",
    "typescript": "5.6.2",
    "@types/node": "20.14.12",
    "@types/react": "18.3.3",
    "@types/react-dom": "18.3.0"
  }
}
```

### `next.config.mjs`
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { mdxRs: true },
  images: { domains: ["images.unsplash.com", "s4.anilist.co", "m.media-amazon.com"] }
};
export default nextConfig;
```

### `tailwind.config.ts`
```ts
import type { Config } from 'tailwindcss'
const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{md,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#8b5cf6',
          50: '#f5f3ff', 100: '#ede9fe', 200: '#ddd6fe', 300: '#c4b5fd', 400: '#a78bfa', 500: '#8b5cf6', 600: '#7c3aed', 700: '#6d28d9', 800: '#5b21b6', 900: '#4c1d95'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
export default config
```

### `styles/globals.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html { color-scheme: dark; }
body { @apply bg-[#0b0b10] text-gray-100; }
.prose { @apply prose-invert max-w-none; }
.prose img { @apply rounded-xl; }
.card { @apply rounded-2xl border border-white/10 bg-white/5 backdrop-blur; }
.btn { @apply inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 hover:bg-white/10; }
.chips { @apply inline-flex items-center gap-2 text-xs px-2 py-1 rounded-lg bg-white/10; }
```

### `app/layout.tsx`
```tsx
import './globals.css'
import { ReactNode } from 'react'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata = {
  metadataBase: new URL('https://mangainsight.com'),
  title: { default: 'Mangainsight', template: '%s · Mangainsight' },
  description: 'Reviews, news, et guides manga/manhwa/webtoons.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className="dark">
      <body className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
```

### `app/page.tsx`
```tsx
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default async function Home() {
  const latest = await getAllPosts(6)
  return (
    <div className="space-y-8">
      <section className="text-center space-y-3">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Mangainsight</h1>
        <p className="text-gray-300">Critiques affûtées. Sélections utiles. Zéro bla-bla.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Dernières reviews</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {latest.map(p => (
            <Link key={p.slug} href={`/series/${p.slug}`} className="card p-4 block hover:scale-[1.01] transition">
              <h3 className="font-semibold mb-1">{p.title}</h3>
              <p className="text-sm text-gray-300 line-clamp-3">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
```

### `app/(sections)/reviews/page.tsx`
```tsx
import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'

export default async function ReviewsPage(){
  const posts = await getAllPosts()
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Reviews</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map(p => (
          <Link key={p.slug} href={`/series/${p.slug}`} className="card p-4 block">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-300 line-clamp-3">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
```

### `app/series/[id]/page.tsx`
```tsx
import { getPostBySlug } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import ProsCons from '@/components/ProsCons'
import Rating from '@/components/Rating'
import Spoiler from '@/components/Spoiler'
import TagChips from '@/components/TagChips'

const components = { ProsCons, Rating, Spoiler, TagChips }

export default async function SeriesPage({ params }: { params: { id: string } }){
  const post = await getPostBySlug(params.id)
  if(!post) return <div>Introuvable</div>
  return (
    <article className="prose">
      <h1>{post.title}</h1>
      <p className="not-prose text-sm text-gray-300">{post.date} · {post.readingTime} · <TagChips items={post.tags} /></p>
      <MDXRemote source={post.content} components={components} />
    </article>
  )
}
```

### `app/api/anilist/route.ts`
```ts
export async function POST(req: Request){
  const { query, variables } = await req.json()
  const res = await fetch('https://graphql.anilist.co', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({ query, variables })
  })
  const data = await res.json()
  return Response.json(data)
}
```

### `app/robots.txt/route.ts`
```ts
export async function GET(){
  const body = `User-agent: *\nAllow: /\nSitemap: https://mangainsight.com/sitemap.xml\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } })
}
```

### `app/sitemap.xml/route.ts`
```ts
import { getAllPosts } from '@/lib/posts'
export async function GET(){
  const posts = await getAllPosts()
  const urls = posts.map(p=>`<url><loc>https://mangainsight.com/series/${p.slug}</loc></url>`).join('')
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } })
}
```

### `components/SiteHeader.tsx`
```tsx
import Link from 'next/link'

export default function SiteHeader(){
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold tracking-wide">Mangainsight</Link>
        <nav className="flex gap-4 text-sm text-gray-200">
          <Link href="/reviews">Reviews</Link>
          <Link href="/news">News</Link>
          <Link href="/tops">Tops</Link>
          <Link href="/guides">Guides</Link>
        </nav>
      </div>
    </header>
  )
}
```

### `components/SiteFooter.tsx`
```tsx
export default function SiteFooter(){
  return (
    <footer className="border-t border-white/10 text-sm text-gray-300">
      <div className="container mx-auto px-4 py-8">
        © {new Date().getFullYear()} Mangainsight — Mentions légales & Affiliation
      </div>
    </footer>
  )
}
```

### `components/Rating.tsx`
```tsx
export default function Rating({ value=0 }: { value?: number }){
  return <div className="text-sm">Note: {value.toFixed(1)} / 10</div>
}
```

### `components/ProsCons.tsx`
```tsx
export default function ProsCons({ pros=[], cons=[] as string[] }){
  return (
    <div className="grid md:grid-cols-2 gap-4 not-prose">
      <div className="card p-4">
        <h4 className="font-semibold mb-2">Points forts</h4>
        <ul className="list-disc list-inside space-y-1">{pros.map((p,i)=>(<li key={i}>{p}</li>))}</ul>
      </div>
      <div className="card p-4">
        <h4 className="font-semibold mb-2">Points faibles</h4>
        <ul className="list-disc list-inside space-y-1">{cons.map((c,i)=>(<li key={i}>{c}</li>))}</ul>
      </div>
    </div>
  )
}
```

### `components/Spoiler.tsx`
```tsx
'use client'
import { useState } from 'react'
export default function Spoiler({ children }: { children: React.ReactNode }){
  const [open,setOpen]=useState(false)
  return (
    <div className="not-prose">
      <button className="btn" onClick={()=>setOpen(!open)}>{open? 'Masquer spoiler' : 'Afficher spoiler'}</button>
      {open && <div className="mt-3 card p-4">{children}</div>}
    </div>
  )
}
```

### `components/TagChips.tsx`
```tsx
export default function TagChips({ items=[] as string[] }){
  return (
    <span className="inline-flex flex-wrap gap-2 align-middle not-prose">
      {items.map((t,i)=>(<span key={i} className="chips">#{t}</span>))}
    </span>
  )
}
```

### `lib/posts.ts`
```ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const contentDir = path.join(process.cwd(), 'content')

export async function getAllPosts(limit?: number){
  const reviewsDir = path.join(contentDir, 'reviews')
  const files = fs.readdirSync(reviewsDir).filter(f=>f.endsWith('.mdx'))
  const posts = files.map(file=>{
    const slug = file.replace(/\.mdx$/, '')
    const raw = fs.readFileSync(path.join(reviewsDir, file),'utf8')
    const { content, data } = matter(raw)
    const rt = readingTime(content)
    return { slug, title: data.title || slug, excerpt: data.excerpt || '', date: data.date || '', tags: data.tags || [], readingTime: rt.text, content }
  }).sort((a,b)=> (b.date?.localeCompare?.(a.date)) ?? 0)
  return typeof limit==='number' ? posts.slice(0,limit) : posts
}

export async function getPostBySlug(slug: string){
  const p = path.join(contentDir,'reviews', slug + '.mdx')
  if(!fs.existsSync(p)) return null
  const raw = fs.readFileSync(p,'utf8')
  const { content, data } = matter(raw)
  const rt = readingTime(content)
  return { slug, title: data.title || slug, excerpt: data.excerpt || '', date: data.date || '', tags: data.tags || [], readingTime: rt.text, content }
}
```

### `lib/anilist.ts`
```ts
export const ANILIST_SEARCH = `
query ($search: String) {
  Page(perPage: 12) {
    media(search: $search, type: MANGA) {
      id
      title { romaji english native }
      coverImage { large }
      genres
      averageScore
      description(asHtml:false)
    }
  }
}`
```

### `content/reviews/solo-leveling-t1.mdx`
```mdx
---
title: "Solo Leveling – Tome 1"
date: "2025-09-20"
excerpt: "Un démarrage efficace : univers simple, montée en puissance addictive."
tags: [manhwa, action, fantasy]
---

<Rating value={8.0} />

**Verdict rapide** : un premier tome qui coche les cases du power‑fantasy. Rythme soutenu, hook clair. 

<ProsCons pros={["Héros clair et déterminé","Mise en scène énergique","Lisible sur mobile"]} cons={["Secondaires encore fades","Quelques facilités de scénario"]} />

### Ce qu’on aime
- Progression lisible, chapitres courts.
- Mise en page pensée webtoon.

<Spoiler>
Twist de la double‑porte et conséquences sur le système de quêtes.
</Spoiler>

<TagChips items={["SoloLeveling","Webtoon","Dungeon"]} />
```

### `README.md`
```md
# Mangainsight – Starter

## Déploiement rapide
1. Crée un repo GitHub et copie/colle ces fichiers.
2. Sur Vercel: "Import Project" → sélectionne le repo → Build par défaut.
3. (Optionnel) Ajoute un domaine `mangainsight.com`.

## Ajouter une review
- Duplique `content/reviews/solo-leveling-t1.mdx`.
- Renseigne le front‑matter (`title`, `date`, `excerpt`, `tags`).
- Utilise les composants MDX: `<Rating />`, `<ProsCons />`, `<Spoiler />`, `<TagChips />`.

## Chercher une série (AniList)
App‑route `POST /api/anilist` proxy → `https://graphql.anilist.co`.

Exemple client:
```ts
const res = await fetch('/api/anilist', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ query: ANILIST_SEARCH, variables:{ search:'One Piece' } }) })
const data = await res.json()
```

## SEO
- `app/robots.txt` & `app/sitemap.xml` dynamiques.
- Title template, OpenGraph via `metadata`.

## Style
- Thème sombre par défaut, palette `brand` violette.
- Classes utilitaires: `.card`, `.btn`, `.chips`.
