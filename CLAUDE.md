# MangaInsight — Contexte projet pour Claude Code

## C'est quoi ce projet ?
Site de critiques manga et manhwa en français. Stack : **Next.js + Tailwind + Supabase**, déployé sur **Vercel**, repo GitHub : `JackBowa/MangaInsight-pro`.

## Design system — Neon Codex
- Fond sombre `#0d0d14`, accents violets `#7c3aed` / `#a78bfa`
- Typo titres : **Bebas Neue** (Google Fonts)
- Typo corps : DM Sans
- Pas de tirets longs (—), utiliser des virgules à la place
- Grille violet subtile en fond sur les heroes

## Structure des fichiers importants
```
app/
  page.tsx              ← Homepage
  layout.tsx            ← Layout global + metadata Open Graph
  sitemap.ts            ← Sitemap SEO (102 séries + pages statiques)
  critiques/            ← Page critiques (use client → layout.tsx séparé pour SEO)
  tops/                 ← Classement SSS→B
  nouveautes/           ← ⚠️ Sans accent (anciennement "nouveautés" avec accent, causait des erreurs Google)
  guides/               ← Articles MDX
  recommandations/      ← Quiz "trouve ta série"
  a-propos/
  series/[slug]/        ← Page individuelle de chaque série
components/
  SiteHeader.tsx        ← Nav + recherche Cmd+K + burger mobile
  SiteFooter.tsx
data/
  series.ts             ← 102 séries avec slug, title, category, stars, tags, cover, synopsis, reviewHtml, pros, cons, addedAt
  streaming.ts          ← Mapping slug → plateformes streaming (Crunchyroll, ADN, Netflix)
  shops.ts              ← Mapping slug → boutiques (Manganim pour mangas JP uniquement, Amazon/Fnac/Rakuten pour tous)
```

## Règles importantes
- Toutes les pages sont `"use client"` → les metadata SEO vont dans un `layout.tsx` séparé par section
- URL sans accents : `/nouveautes` pas `/nouveautés`
- `next.config.mjs` contient une redirection 301 `/nouveautés` → `/nouveautes`
- Les covers sont dans `/public/covers/[slug].jpg`
- Supabase gère l'auth et les commentaires

## Ce qui a été fait récemment
- 102 séries avec critiques complètes (reviewHtml, pros/cons, notes)
- Streaming précis par série (section masquée si pas d'animé)
- Boutiques précises (Manganim exclu pour les manhwas coréens)
- Heroes enrichis sur Tops et Nouveautes (stats dynamiques)
- Open Graph tags + og-image.png (1200×630)
- Metadata SEO sur toutes les pages via layout.tsx
- Section "Trouve ta prochaine série" sur la homepage
- 4 catégories sur la homepage (Critiques, Tops, Guides, Nouveautés)
- Mobile : covers cachées sur petit écran, texte plus lisible
- Redirection `/nouveautés` → `/nouveautes` (fix erreur Google Search Console)

## Fichiers modifiés en attente d'intégration
Ces fichiers ont été générés et sont à copier dans le projet :
- `next.config.mjs` → racine
- `app/sitemap.ts`
- `app/page.tsx`
- `app/layout.tsx`
- `app/nouveautes/page.tsx` ← nouveau dossier à créer
- `app/nouveautes/layout.tsx` ← nouveau dossier à créer
- `app/tops/page.tsx`
- `app/tops/layout.tsx`
- `app/critiques/layout.tsx`
- `app/guides/layout.tsx`
- `app/recommandations/layout.tsx`
- `app/a-propos/layout.tsx`
- `components/SiteHeader.tsx`
- `components/SiteFooter.tsx`

## Commandes utiles
```bash
npm run dev       # Lancer en local
npm run build     # Vérifier que ça compile avant de push
git add -A && git commit -m "..." && git push   # Déployer via Vercel
```

## Points d'attention
- Toujours vérifier `npm run build` avant de push — les erreurs TypeScript bloquent Vercel
- Le dossier `app/nouveautés/` (avec accent) doit être supprimé, remplacé par `app/nouveautes/`
- Ne jamais utiliser `localStorage` dans les composants (SSR Next.js)
- Les `"use client"` empêchent l'export de `metadata` — toujours créer un `layout.tsx` séparé
