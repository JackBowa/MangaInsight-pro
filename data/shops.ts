// Mapping manuel des boutiques disponibles par série
// M = Manganim, A = Amazon, F = Fnac, R = Rakuten
// Règle générale :
//   - Manganim : mangas japonais uniquement (pas les manhwas coréens)
//   - Amazon / Fnac / Rakuten : tout le monde
// Mis à jour : 2026

export type ShopKey = "manganim" | "amazon" | "fnac" | "rakuten";

// Séries disponibles sur Manganim (mangas japonais principalement)
// Les manhwas coréens sont exclus car peu ou pas disponibles
const ALL_SHOPS: ShopKey[] = ["manganim", "amazon", "fnac", "rakuten"];
const NO_MANGANIM: ShopKey[] = ["amazon", "fnac", "rakuten"];

export const SHOPS_MAP: Record<string, ShopKey[]> = {
  // ── MANGAS JAPONAIS — tous les shops ──
  "naruto":                        ALL_SHOPS,
  "my-hero-academia":              ALL_SHOPS,
  "l-attaque-des-titans":          ALL_SHOPS,
  "bleach":                        ALL_SHOPS,
  "black-clover":                  ALL_SHOPS,
  "fairy-tail":                    ALL_SHOPS,
  "hunter-x-hunter":               ALL_SHOPS,
  "fullmetal-alchemist":           ALL_SHOPS,
  "demon-slayer-kimetsu-no-yaiba": ALL_SHOPS,
  "chainsaw-man":                  ALL_SHOPS,
  "blue-lock":                     ALL_SHOPS,
  "dr-stone":                      ALL_SHOPS,
  "fire-force":                    ALL_SHOPS,
  "soul-eater":                    ALL_SHOPS,
  "noragami":                      ALL_SHOPS,
  "blue-exorcist":                 ALL_SHOPS,
  "d-gray-man":                    ALL_SHOPS,
  "mashle":                        ALL_SHOPS,
  "kaiju-no-8":                    ALL_SHOPS,
  "bungou-stray-dogs":             ALL_SHOPS,
  "akame-ga-kill":                 ALL_SHOPS,
  "akatsuki-no-yona":              ALL_SHOPS,
  "magi":                          ALL_SHOPS,
  "radiant":                       ALL_SHOPS,
  "shaman-king":                   ALL_SHOPS,
  "en-en-no-shouboutai":           ALL_SHOPS,
  "zatch-bell":                    ALL_SHOPS,
  "beelzebub":                     ALL_SHOPS,
  "black-bullet":                  ALL_SHOPS,
  "katekyo-hitman-reborn":         ALL_SHOPS,
  "eden-zero":                     ALL_SHOPS,
  "seven-deadly-sins":             ALL_SHOPS,
  "record-of-ragnarok":            ALL_SHOPS,
  "gintama":                       ALL_SHOPS,
  "assassination-classroom":       ALL_SHOPS,
  "kuroko-no-basket":              ALL_SHOPS,
  "sk8-the-infinity":              ALL_SHOPS,
  "hells-paradise":                ALL_SHOPS,
  "oshi-no-ko":                    ALL_SHOPS,
  "trigun":                        ALL_SHOPS,
  "black-lagoon":                  ALL_SHOPS,
  "rosario-vampire":               ALL_SHOPS,
  "highschool-dxd":                ALL_SHOPS,
  "trinity-seven":                 ALL_SHOPS,
  "monster-musume":                ALL_SHOPS,
  "overlord":                      ALL_SHOPS,
  "so-im-a-spider-so-what":        ALL_SHOPS,
  "arifureta":                     ALL_SHOPS,
  "goblin-slayer":                 ALL_SHOPS,
  "no-game-no-life":               ALL_SHOPS,
  "the-rising-of-the-shield-hero": ALL_SHOPS,
  "sword-art-online":              ALL_SHOPS,
  "isekai-cheat-magician":         ALL_SHOPS,
  "blood-lad":                     ALL_SHOPS,
  "angel-beats":                   ALL_SHOPS,
  "bastard":                       ALL_SHOPS,
  "claymore":                      ALL_SHOPS,
  "fate-stay-night":               ALL_SHOPS,
  "kenshin":                       ALL_SHOPS,
  "jojos-bizarre-adventure":       ALL_SHOPS,
  "black-butler":                  ALL_SHOPS,
  "btooom":                        ALL_SHOPS,
  "dororo":                        ALL_SHOPS,
  "made-in-abyss":                 ALL_SHOPS,
  "vinland-saga":                  ALL_SHOPS,
  "psycho-pass":                   ALL_SHOPS,
  "steins-gate":                   ALL_SHOPS,
  "devilman-crybaby":              ALL_SHOPS,
  "parasyte":                      ALL_SHOPS,
  "death-note":                    ALL_SHOPS,
  "pluto":                         ALL_SHOPS,
  "monster":                       ALL_SHOPS,
  "the-promised-neverland":        ALL_SHOPS,
  "tokyo-ghoul":                   ALL_SHOPS,
  "hajime-no-ippo":                ALL_SHOPS,
  "deadman-wonderland":            ALL_SHOPS,
  "spy-x-family":                  ALL_SHOPS,
  "re-zero":                       ALL_SHOPS,
  "vagabond":                      ALL_SHOPS,
  "slam-dunk":                     ALL_SHOPS,
  "berserk":                       ALL_SHOPS,
  "tokyo-revengers":               ALL_SHOPS,
  "blame":                         ALL_SHOPS,
  "kengan-ashura":                 ALL_SHOPS,
  "coppelion":                     ALL_SHOPS,
  "cage-of-eden":                  ALL_SHOPS,
  "grimgar":                       ALL_SHOPS,
  "magister-negi-magi":            ALL_SHOPS,
  "kings-game":                    ALL_SHOPS,
  "black-god":                     ALL_SHOPS,

  // ── MANHWAS CORÉENS — pas sur Manganim ──
  "solo-leveling":                 NO_MANGANIM,
  "the-player-who-cant-level-up":  NO_MANGANIM,
  "the-beginning-after-the-end":   NO_MANGANIM,
  "kill-the-hero":                 NO_MANGANIM,
  "eleceed":                       NO_MANGANIM,
  "omniscient-reader":             NO_MANGANIM,
  "tower-of-god":                  NO_MANGANIM,
  "wind-breaker":                  NO_MANGANIM,
  "sss-class-suicide-hunter":      NO_MANGANIM,
  "my-wife-is-a-demon-queen":      NO_MANGANIM,
  "the-god-of-high-school":        NO_MANGANIM,
};

export const SHOPS_INFO: Record<ShopKey, {
  name: string;
  logo: string;
  color: string;
  getUrl: (title: string) => string;
}> = {
  manganim: {
    name: "Manganim",
    logo: "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594",
    color: "hover:border-orange-500/30",
    getUrl: (title) => `https://manganim.fr/search?q=${encodeURIComponent(title)}`,
  },
  amazon: {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    color: "hover:border-yellow-500/30",
    getUrl: (title) => `https://www.amazon.fr/s?k=${encodeURIComponent(title + " manga")}`,
  },
  fnac: {
    name: "Fnac",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Fnac_logo.svg",
    color: "hover:border-yellow-400/30",
    getUrl: (title) => `https://www.fnac.com/SearchResult/ResultList.aspx?Search=${encodeURIComponent(title + " manga")}&sft=1`,
  },
  rakuten: {
    name: "Rakuten",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Rakuten_Global_Brand_Logo.svg",
    color: "hover:border-red-400/30",
    getUrl: (title) => `https://fr.shopping.rakuten.com/search/${encodeURIComponent(title)}-manga`,
  },
};
