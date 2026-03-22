// data/series/index.ts — point d'entrée unique du catalogue
// Pour ajouter un fichier : importer + ajouter dans le spread SERIES

import type { Serie } from './series-1'
import { SERIES_1 } from './series-1'
import { SERIES_2 } from './series-2'

export type { Serie }

export const SERIES: Serie[] = [
  ...SERIES_1,
  ...SERIES_2,
]
