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
  patch-manhwa1.mjs → patch-manhwa8.mjs  ← Batches manhwa 1-8 (102 manhwas)
  cleanup-manhwa1.mjs → cleanup-manhwa8.mjs ← Nettoyage bad matches AniList par batch
data/series/
  series-1.ts           ← Séries originales (manga/manhwa initiaux)
  series-2.ts           ← Toutes les nouvelles séries ajoutées (batches 2+)
```

## État du catalogue (mars 2026)
- **~411 séries** au total — `data/series/series-1.ts` (séries originales) + `data/series/series-2.ts` (nouvelles séries)
- **~102 manhwas** ajoutés en batches 1-8 dans `data/series/series-2.ts`
- Toutes ont : synopsis FR, reviewHtml, pros/cons, stars, tags, shops, streaming
- Shops : Manganim (JP manga uniquement), Fnac, Amazon — pas Manganim pour manhwa KR ou manhua CN
- Streaming : intégré directement dans chaque entrée series.ts (champs `shops` et `streaming`)
- Covers : URL AniList CDN (ex: `https://s4.anilist.co/file/anilistcdn/...`) — plus de fichiers locaux `/public/covers/`

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
1. **Vérifier les doublons AVANT d'importer** :
   ```bash
   grep -h 'slug:' data/series/series-1.ts data/series/series-2.ts | sed 's/.*slug: "\([^"]*\)".*/\1/' | sort -u > /tmp/all_slugs.txt
   ```
   Puis tester chaque slug candidat contre cette liste avant d'écrire le .txt
2. Ajouter les titres dans un fichier `.txt` (un par ligne, ex: `scripts/manhwaN.txt`)
3. `node scripts/import-series.mjs scripts/mon-fichier.txt` → génère les entrées dans `data/series/series-2.ts`
4. AniList rate-limite à ~34 requêtes par session — splitter en lots de 20 max
5. **Détecter les bad matches AniList** : titre JP/KR dans le résultat alors qu'on cherche KR/CN = mauvaise correspondance
6. Créer un script `cleanup-manhwaN.mjs` pour supprimer les bad matches (utiliser pattern `removeFirst` / `removeSecond`)
7. Créer un script `patch-manhwaN.mjs` avec les reviews FR complètes
   - `tags` doit être une **string** (ex: `"Action · Fantasy"`) et non un tableau
   - `category` doit être `"manga"` ou `"manhwa"` uniquement (jamais `"shonen"` etc.)
   - Pas de champ `titleFr` dans le type
   - Extraire la cover existante avant de patcher : `getCover(content, slug)`
8. `npm run build` → vérifier que ça compile
9. `git add ... && git commit && git push`

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
- Le champ `shops` et `streaming` sont maintenant directement dans `data/series/series-2.ts` (pas dans les fichiers séparés legacy)
- **Vérifier les doublons AVANT d'importer** — ne pas attendre après l'import pour découvrir les conflits
- `sitemap.ts` à mettre à jour quand le catalogue dépasse une centaine de séries de plus

## Pattern patcher (bracket-depth)
Tous les scripts patch/cleanup utilisent ce pattern pour localiser et remplacer/supprimer une entrée par slug :
```js
function findAndReplace(content, slug, newEntry) {
  const marker = `slug: "${slug}"`;
  const idx = content.indexOf(marker);
  if (idx === -1) return null;
  let i = idx;
  while (i > 0 && content[i] !== "{") i--;
  const start = i;
  let depth = 0;
  for (i = start; i < content.length; i++) {
    if (content[i] === "{") depth++;
    if (content[i] === "}") { depth--; if (depth === 0) break; }
  }
  const end = i + 1;
  return content.slice(0, start) + newEntry + content.slice(end);
}
// Pour supprimer : retourner content.slice(0, start) + content.slice(fullEnd)
// fullEnd = end + (virgule/espace suivant si présent)
```

## Bad matches AniList fréquents
Ces titres retournent systématiquement de mauvaises correspondances JP :
- "Overgeared" → "Temppal" (KR)
- "Reincarnator" → "Jeonsaengja" (KR)
- "Super String" → titre JP multivers
- "Is It Tough Being a Friend" → manga JP
- "I Love Yoo" → "I Love You" (JP)
- "unOrdinary" → manga JP
- "Let's Play" → manga JP
- "Light and Shadow" → manga JP
