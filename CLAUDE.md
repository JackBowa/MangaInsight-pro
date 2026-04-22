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
  sitemap.ts            ← Sitemap SEO (séries published:true + pages statiques)
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
  series.ts             ← Re-export : SERIES (tout) + PUBLISHED_SERIES (filtrées)
  series/index.ts       ← Point d'entrée, assemble SERIES_1 + SERIES_2
  series/series-1.ts    ← Séries originales — contient aussi la définition du type Serie
  series/series-2.ts    ← Nouvelles séries ajoutées (batches 2+)
  streaming.ts          ← (legacy) Mapping slug → plateformes streaming
  shops.ts              ← (legacy) Mapping slug → boutiques
scripts/
  import-series.mjs     ← Import AniList depuis un fichier .txt
  patch-metadata.mjs    ← Patch status/volumes/chapters/year/author sur les séries publiées
  check-volumes.mjs     ← Vérifie via AniList si les volumes sont à jour (utilisé par le GitHub Action)
  set-published-keywords.mjs ← Utilitaire pour set published:true par mots-clés dans les slugs
.github/workflows/
  check-volumes.yml     ← GitHub Action quotidienne (8h UTC) : détecte les volumes obsolètes
```

## État du catalogue (avril 2026)
- **~579 séries** au total — `series-1.ts` + `series-2.ts`
- **~147 séries** avec `published: true` (visibles sur le site)
- **~432 séries** avec `published: false` (conservées dans les données, invisibles sur le site)
- Toutes les séries publiées ont : synopsis FR, reviewHtml, pros/cons, stars, tags, shops, streaming
- Les 147 séries publiées ont aussi : `status`, `volumes`, `chapters`, `year`, `author`
- Shops : Manganim (JP manga uniquement), Fnac, Amazon — pas Manganim pour manhwa KR ou manhua CN
- Covers : URL AniList CDN (ex: `https://s4.anilist.co/file/anilistcdn/...`) — plus de fichiers locaux

## Système published (IMPORTANT)
Le champ `published` contrôle la visibilité sur tout le site :
- `published: true` → page visible, série dans toutes les listes
- `published: false` → page 404, série exclue de partout (critiques, tops, quiz, search, sitemap)
- absent → traité comme `true` (rétrocompatibilité)

**Deux exports dans `data/series.ts` :**
- `SERIES` → tout le catalogue (utile pour les scripts internes)
- `PUBLISHED_SERIES` → uniquement les `published !== false` → **utiliser dans toutes les pages**

**Pages qui utilisent `PUBLISHED_SERIES` :** critiques, tops, nouveautés, recommandations, SiteHeader (Cmd+K), sitemap, a-propos.

**Attention aux erreurs de syntaxe** : quand on injecte `published: true/false` via script, vérifier que les champs array (`live: []`, `streaming: []`, `shops: []`) ont bien une virgule avant. Pattern récurrent à corriger :
```js
content.replace(/live: \[\]\n  published:/g, 'live: [],\n  published:')
content.replace(/streaming: \[\]\n  published:/g, 'streaming: [],\n  published:')
```

## Type Serie — champs complets
```ts
type Serie = {
  slug: string;
  title: string;
  category: "manga" | "manhwa";
  cover?: string;
  tags?: string;            // "Action · Fantasy" (string, pas tableau)
  synopsis?: string;
  reviewHtml?: string;
  stars?: number;           // 0..5
  shops?: { name: string; url: string; logo: string }[];
  streaming?: { name: string; url: string; logo: string }[];
  live?: { name: string; url: string; logo: string }[];
  addedAt?: string;         // ISO "2025-03-04"
  pros?: string[];
  cons?: string[];
  published?: boolean;      // false = masqué partout
  status?: "en cours" | "terminé" | "pause";
  volumes?: number;
  chapters?: number;
  year?: number;
  author?: string;
}
```

## Page série `app/series/[slug]/page.tsx`
- Hero : titre avec `clamp(1.8rem,4vw,3.5rem)` pour éviter le débordement sur la cover
- Sidebar "Informations" : badge statut coloré (🔴 terminé / 🟢 en cours / 🟠 pause) + auteur, année, tomes, chapitres, genres
- Séries similaires : **scoring hybride** tags (×3) + mots-clés synopsis (×1) + même catégorie (×1) — filtrées sur `published !== false`
- Pull quote supprimée (était un doublon de la première phrase de l'avis)

## GitHub Action — vérification volumes
`.github/workflows/check-volumes.yml` tourne tous les jours à 8h UTC :
1. Exécute `node scripts/check-volumes.mjs`
2. Pour chaque série `en cours` ou `pause`, interroge AniList
3. Si AniList a plus de volumes → **ouvre une issue GitHub** avec label `volumes-check`
4. Déclenchable manuellement : GitHub → Actions → "Vérification volumes manga" → Run workflow
5. ⚠️ Créer le label `volumes-check` dans Settings → Labels du repo

## Workflow d'ajout de séries
1. **Vérifier les doublons AVANT d'importer** :
   ```bash
   grep -h 'slug:' data/series/series-1.ts data/series/series-2.ts | sed 's/.*slug: "\([^"]*\)".*/\1/' | sort -u > /tmp/all_slugs.txt
   ```
2. Ajouter les titres dans un fichier `.txt` (un par ligne)
3. `node scripts/import-series.mjs scripts/mon-fichier.txt` → génère dans `data/series/series-2.ts`
4. AniList rate-limite à ~34 requêtes par session — splitter en lots de 20 max
5. Détecter les bad matches AniList, créer un script cleanup
6. Créer un script patch avec reviews FR complètes
7. Après ajout, **set `published: false` par défaut** — ne mettre `true` que pour les séries validées
8. Pour les séries publiées, remplir status/volumes/chapters/year/author via `patch-metadata.mjs`
9. `npm run build` → vérifier que ça compile
10. `git add ... && git commit && git push`

## Règles importantes
- Toutes les pages sont `"use client"` → les metadata SEO vont dans un `layout.tsx` séparé par section
- URL sans accents : `/nouveautes` pas `/nouveautés`
- Ne jamais utiliser `localStorage` dans les composants sans vérification SSR
- `sitemap.ts` utilise `PUBLISHED_SERIES` — se met à jour automatiquement
- `tags` doit être une **string** (ex: `"Action · Fantasy"`) et non un tableau
- `category` doit être `"manga"` ou `"manhwa"` uniquement (jamais `"shonen"` etc.)

## Commandes utiles
```bash
npm run dev                                    # Lancer en local
npm run build                                  # Vérifier avant de push
node scripts/import-series.mjs titres.txt      # Importer des séries depuis AniList
node scripts/check-volumes.mjs                 # Vérifier les volumes manuellement
git add -A && git commit -m "..." && git push  # Déployer via Vercel
```

## Points d'attention
- Toujours vérifier `npm run build` avant de push — les erreurs TypeScript bloquent Vercel
- Ne jamais utiliser `localStorage` dans les composants (SSR Next.js)
- AniList peut retourner de mauvaises correspondances — toujours vérifier les titres importés
- Les champs `shops` et `streaming` sont directement dans les entrées series.ts (pas les fichiers legacy)
- **Vérifier les doublons AVANT d'importer** — des séries existent parfois dans les deux fichiers

## Pattern patcher (bracket-depth)
```js
function findEntry(content, slug) {
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
  return { start, end: i }; // end = index du } fermant
}
// Pour supprimer : content.slice(0, start) + content.slice(end + 1)
// Pour modifier : content.slice(0, start) + newEntry + content.slice(end + 1)
// Pour injecter avant } : content.slice(0, end) + "  nouveauChamp: valeur,\n" + content.slice(end)
```

## Bad matches AniList fréquents
- "Overgeared" → "Temppal" (KR)
- "Reincarnator" → "Jeonsaengja" (KR)
- "Super String" → titre JP multivers
- "Is It Tough Being a Friend" → manga JP
- "I Love Yoo" → "I Love You" (JP)
- "unOrdinary" → manga JP
- "Let's Play" → manga JP
- "Light and Shadow" → manga JP

## Titres avec slugs piégeux (apostrophes/caractères spéciaux)
- `JoJo's Bizarre Adventure` → apostrophe typographique `'` dans le titre, slug `jojos-bizarre-adventure`
- `Hunter × Hunter` → symbole × (U+00D7), pas x minuscule
- `SPY×FAMILY` → idem ×, tout en majuscules
- `L'Attaque des Titans` → titre FR, slug `l-attaque-des-titans`
- `Nausicaä` → ä, slug `nausicaa-of-the-valley-of-the-wind`
- `Edens Zero` → slug `eden-zero` (sans s)
- `Ranma ½` → slug `ranma` (sans le ½)
- `Kenshin le Vagabond` → slug `kenshin`
