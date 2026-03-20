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
  sitemap.ts            ← Sitemap SEO (208 séries + pages statiques)
  critiques/            ← Page critiques (use client → layout.tsx séparé pour SEO)
  tops/                 ← Classement SSS→B
  nouveautes/           ← ⚠️ Sans accent (anciennement "nouveautés" avec accent, causait des erreurs Google)
  guides/               ← Articles MDX
  recommandations/      ← Quiz "trouve ta série"
  favoris/              ← Page favoris (localStorage)
  a-propos/
  series/[slug]/        ← Page individuelle de chaque série
  api/anilist/          ← Proxy AniList sécurisé (rate limit + whitelist)
components/
  SiteHeader.tsx        ← Nav + recherche Cmd+K + burger mobile + lien Favoris
  SiteFooter.tsx
data/
  series.ts             ← 208 séries avec slug, title, category, stars, tags, cover, synopsis, reviewHtml, pros, cons, addedAt, shops, streaming, live
  streaming.ts          ← (legacy) Mapping slug → plateformes streaming
  shops.ts              ← (legacy) Mapping slug → boutiques
scripts/
  import-series.mjs     ← Import AniList depuis un fichier .txt (node scripts/import-series.mjs titres.txt)
  patch-new-series.mjs  ← Patch lot 0 : 20 séries initiales batch 2
  patch-batch2-lot1.mjs ← Patch lot 1/5
  patch-batch2-lot2.mjs ← Patch lot 2/5
  patch-batch2-lot3.mjs ← Patch lot 3/5
  patch-batch2-lot4.mjs ← Patch lot 4/5
  patch-batch2-lot5.mjs ← Patch lot 5/5
  cleanup-bad-entries.mjs ← Supprime des entrées par slug
```

## État du catalogue (mars 2026)
- **208 séries** au total dans `data/series.ts`
- Toutes ont : synopsis FR, reviewHtml, pros/cons, stars, tags, shops, streaming
- Shops : Manganim (JP manga uniquement), Fnac, Amazon — pas Manganim pour manhwa KR ou manhua CN
- Streaming : intégré directement dans chaque entrée series.ts (champs `shops` et `streaming`)
- Covers : `/public/covers/[slug].jpg`

## Fonctionnalités en place
- Page 404 personnalisée (`app/not-found.tsx`)
- Pagination sur la page Critiques (bouton "Charger plus")
- Animations fade-in sur les cartes
- JSON-LD structured data sur les pages séries
- Favoris (localStorage) avec page `/favoris` et bouton ♥ dans le nav
- Bouton partage (copie lien) sur chaque page série
- Validation commentaires (max 50 / 1000 chars) avec compteur
- Proxy AniList sécurisé avec rate limiting (20 req/min/IP)
- `.gitignore` en place (node_modules, .next, .env*, .claude/)
- Redirection 301 `/nouveautés` → `/nouveautes`

## Workflow d'ajout de séries
1. Ajouter les titres dans un fichier `.txt` (un par ligne)
2. `node scripts/import-series.mjs scripts/mon-fichier.txt` → génère les entrées dans series.ts
3. AniList rate-limite à ~34 requêtes par session — splitter en petits fichiers si > 30 titres
4. Vérifier les mauvaises correspondances AniList (titres étranges) et les supprimer avec `cleanup-bad-entries.mjs`
5. Créer un script `patch-xxx.mjs` avec les reviews FR complètes (copier la structure des scripts existants)
6. `npm run build` → vérifier que ça compile
7. `git add ... && git commit && git push`

## Règles importantes
- Toutes les pages sont `"use client"` → les metadata SEO vont dans un `layout.tsx` séparé par section
- URL sans accents : `/nouveautes` pas `/nouveautés`
- Ne jamais utiliser `localStorage` dans les composants sans vérification SSR
- Les `"use client"` empêchent l'export de `metadata` — toujours créer un `layout.tsx` séparé
- `sitemap.ts` doit être mis à jour si le nombre de séries change significativement

## Commandes utiles
```bash
npm run dev                                    # Lancer en local
npm run build                                  # Vérifier avant de push
node scripts/import-series.mjs titres.txt      # Importer des séries depuis AniList
git add -A && git commit -m "..." && git push  # Déployer via Vercel
```

## Points d'attention
- Toujours vérifier `npm run build` avant de push — les erreurs TypeScript bloquent Vercel
- Ne jamais utiliser `localStorage` dans les composants (SSR Next.js) — utiliser un hook avec vérification `typeof window`
- AniList peut retourner de mauvaises correspondances — toujours vérifier les titres importés
- Le champ `shops` et `streaming` sont maintenant directement dans `data/series.ts` (pas dans les fichiers séparés legacy)
