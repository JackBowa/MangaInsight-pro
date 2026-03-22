// data/series/index.ts — point d'entrée unique du catalogue
// Ajouter ici les nouveaux fichiers au fur et à mesure :
//   import { SERIES_2 } from './series-2'
//   export const SERIES = [...SERIES_1, ...SERIES_2]

import type { Serie } from './series-1'
import { SERIES_1 } from './series-1'

export type { Serie }

export const SERIES: Serie[] = [
  ...SERIES_1,
]
