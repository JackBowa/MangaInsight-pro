const fs = require("fs");
const path = require("path");
const https = require("https");

// Ta liste de slugs / titres à chercher
const targets = [
  { slug: "berserk", search: "Berserk" },
  { slug: "black-clover", search: "Black Clover" },
  { slug: "blue-exorcist", search: "Blue Exorcist" },
  // ... etc.
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