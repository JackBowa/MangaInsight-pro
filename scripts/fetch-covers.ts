// scripts/fetch-covers.ts
import fs from "node:fs";
import path from "node:path";
import https from "node:https";

type Target = { slug: string; query: string };

const targets: Target[] = [
  { slug: "berserk",                 query: "Berserk (manga)" },
  { slug: "black-clover",            query: "Black Clover" },
  { slug: "blue-exorcist",           query: "Blue Exorcist" },
  { slug: "claymore",                query: "Claymore (manga)" },
  { slug: "d-gray-man",              query: "D.Gray-man" },
  { slug: "death-note",              query: "Death Note" },
  { slug: "dr-stone",                query: "Dr. Stone" },
  { slug: "eleceed",                 query: "Eleceed" },
  { slug: "fairy-tail",              query: "Fairy Tail" },
  { slug: "fire-force",              query: "Fire Force (manga)" },
  { slug: "fullmetal-alchemist",     query: "Fullmetal Alchemist" },
  { slug: "gintama",                 query: "Gintama" },
  { slug: "hells-paradise",          query: "Hell's Paradise: Jigokuraku" },
  { slug: "jojos-bizarre-adventure", query: "JoJo's Bizarre Adventure" },
  { slug: "made-in-abyss",           query: "Made in Abyss" },
  { slug: "mashle",                  query: "Mashle: Magic and Muscles" },
  { slug: "monster",                 query: "Monster (manga)" },
  { slug: "noragami",                query: "Noragami" },
  { slug: "omniscient-reader",       query: "Omniscient Reader" },
  { slug: "oshi-no-ko",              query: "Oshi no Ko" },
  { slug: "pluto",                   query: "Pluto (manga)" },
  { slug: "slam-dunk",               query: "Slam Dunk (manga)" },
  { slug: "soul-eater",              query: "Soul Eater" },
  { slug: "the-promised-neverland",  query: "The Promised Neverland" },
  { slug: "tower-of-god",            query: "Tower of God" },
  { slug: "vagabond",                query: "Vagabond (manga)" },
  { slug: "vinland-saga",            query: "Vinland Saga" },
  { slug: "wind-breaker",            query: "Wind Breaker (manhwa)" },
  { slug: "hunter-x-hunter",         query: "Hunter × Hunter" },
  // ajoute tes autres titres ici au besoin
];

const outDir = path.join(process.cwd(), "public", "covers");
fs.mkdirSync(outDir, { recursive: true });

function getJSON<T>(url: string): Promise<T> {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(e);
          }
        });
      })
      .on("error", reject);
  });
}

function download(url: string, filePath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath);
    https
      .get(url, (res) => {
        if (res.statusCode && res.statusCode >= 400) {
          file.close();
          fs.rmSync(filePath, { force: true });
          return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        }
        res.pipe(file);
        file.on("finish", () => file.close(() => resolve()));
      })
      .on("error", (err) => {
        file.close();
        fs.rmSync(filePath, { force: true });
        reject(err);
      });
  });
}

// On passe par l’API Wikipedia pour récupérer l’image principale (PageImages),
// puis on télécharge une vignette 1000px de large pour un bon compromis qualité/poids.
async function fetchCover(t: Target) {
  const api = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&piprop=original|thumbnail&pithumbsize=1000&titles=${encodeURIComponent(
    t.query
  )}&redirects=1&origin=*`;

  const json = await getJSON<any>(api);
  const pages = json?.query?.pages ?? {};
  const page = Object.values(pages)[0] as any;

  const thumb =
    page?.thumbnail?.source ||
    page?.original?.source ||
    null;

  if (!thumb) {
    console.warn(`⚠️  Pas d’image trouvée pour "${t.query}" (${t.slug})`);
    return;
  }

  const ext = (thumb.split(".").pop() || "jpg").split("?")[0].toLowerCase();
  const safeExt = ["jpg", "jpeg", "png", "webp"].includes(ext) ? ext : "jpg";
  const dest = path.join(outDir, `${t.slug}.${safeExt}`);

  await download(thumb, dest);
  console.log(`✅ ${t.slug} → covers/${t.slug}.${safeExt}`);
}

(async () => {
  for (const t of targets) {
    try {
      await fetchCover(t);
    } catch (e) {
      console.error(`❌ ${t.slug}:`, (e as Error).message);
    }
  }
})();
