const fs = require("fs");
const path = require("path");
const https = require("https");

// 📌 Tous tes titres + slugs pour AniList
const targets = [
  { slug: "berserk",                 search: "Berserk" },
  { slug: "black-clover",            search: "Black Clover" },
  { slug: "blue-exorcist",           search: "Blue Exorcist" },
  { slug: "claymore",                search: "Claymore" },
  { slug: "d-gray-man",              search: "D.Gray-man" },
  { slug: "death-note",              search: "Death Note" },
  { slug: "dr-stone",                search: "Dr. Stone" },
  { slug: "eleceed",                 search: "Eleceed" },
  { slug: "fairy-tail",              search: "Fairy Tail" },
  { slug: "fire-force",              search: "Fire Force" },
  { slug: "fullmetal-alchemist",     search: "Fullmetal Alchemist" },
  { slug: "gintama",                 search: "Gintama" },
  { slug: "hells-paradise",          search: "Hell's Paradise: Jigokuraku" },
  { slug: "jojos-bizarre-adventure", search: "JoJo's Bizarre Adventure" },
  { slug: "made-in-abyss",           search: "Made in Abyss" },
  { slug: "mashle",                  search: "Mashle: Magic and Muscles" },
  { slug: "monster",                 search: "Monster" },
  { slug: "noragami",                search: "Noragami" },
  { slug: "omniscient-reader",       search: "Omniscient Reader" },
  { slug: "oshi-no-ko",              search: "Oshi no Ko" },
  { slug: "pluto",                   search: "Pluto" },
  { slug: "slam-dunk",               search: "Slam Dunk" },
  { slug: "soul-eater",              search: "Soul Eater" },
  { slug: "the-promised-neverland",  search: "The Promised Neverland" },
  { slug: "tower-of-god",            search: "Tower of God" },
  { slug: "vagabond",                search: "Vagabond" },
  { slug: "vinland-saga",            search: "Vinland Saga" },
  { slug: "wind-breaker",            search: "Wind Breaker" },
  { slug: "hunter-x-hunter",         search: "Hunter x Hunter" },
];

const outDir = path.join(process.cwd(), "public", "covers");
fs.mkdirSync(outDir, { recursive: true });

function postGraphQL(query, variables) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ query, variables });
    const req = https.request(
      "https://graphql.anilist.co",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(data),
        },
      },
      (res) => {
        let body = "";
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => {
          try {
            resolve(JSON.parse(body));
          } catch (e) {
            reject(e);
          }
        });
      }
    );
    req.on("error", reject);
    req.write(data);
    req.end();
  });
}

function download(url, filePath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath);
    https.get(url, (res) => {
      if (res.statusCode >= 400) {
        file.close();
        fs.rmSync(filePath, { force: true });
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      res.pipe(file);
      file.on("finish", () => file.close(() => resolve()));
    }).on("error", (err) => {
      file.close();
      fs.rmSync(filePath, { force: true });
      reject(err);
    });
  });
}

const query = `
query ($search: String) {
  Media (search: $search, type: MANGA) {
    coverImage {
      extraLarge
      large
    }
  }
}`;

async function fetchCover({ slug, search }) {
  try {
    const json = await postGraphQL(query, { search });
    const media = json?.data?.Media;
    if (!media) {
      console.warn(`⚠️ Pas trouvé : ${slug} (${search})`);
      return;
    }
    const src = media.coverImage.extraLarge || media.coverImage.large;
    if (!src) {
      console.warn(`⚠️ Pas d’image : ${slug}`);
      return;
    }
    let ext = (src.split(".").pop() || "jpg").split("?")[0].toLowerCase();
    if (!["jpg", "jpeg", "png", "webp"].includes(ext)) ext = "jpg";
    const dest = path.join(outDir, `${slug}.${ext}`);
    await download(src, dest);
    console.log(`✅ ${slug} → covers/${slug}.${ext}`);
  } catch (e) {
    console.error(`❌ ${slug}: ${e.message}`);
  }
}

(async () => {
  for (const t of targets) {
    await fetchCover(t);
  }
})();