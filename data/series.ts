// data/series.ts — re-export pour compatibilité
// Les données sont dans data/series/series-1.ts, series-2.ts, etc.
// Tous les imports existants `from "@/data/series"` continuent de fonctionner.
export type { Serie } from './series/index'
export { SERIES, PUBLISHED_SERIES } from './series/index'
