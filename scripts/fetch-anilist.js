const fs = require("fs");
const path = require("path");
const https = require("https");

// 📌 Tous tes titres + slugs pour AniList
const targets = [
 { slug: "demon-slayer-kimetsu-no-yaiba", search: "Demon Slayer: Kimetsu no Yaiba" },
  { slug: "spy-x-family",                  search: "SPY x FAMILY" },
  { slug: "overlord",                      search: "Overlord" },
  { slug: "arifureta",                     search: "Arifureta: From Commonplace to World's Strongest" },
  { slug: "re-zero",                       search: "Re:Zero − Starting Life in Another World" },
  { slug: "akame-ga-kill",                 search: "Akame ga Kill!" },
  { slug: "tokyo-ghoul",                   search: "Tokyo Ghoul" },
  { slug: "black-god",                     search: "Black God (Kurokami)" },
  { slug: "sss-class-suicide-hunter",      search: "SSS-Class Suicide Hunter" },
  { slug: "my-wife-is-a-demon-queen",      search: "My Wife Is a Demon Queen" },
  { slug: "the-rising-of-the-shield-hero", search: "The Rising of the Shield Hero" },
  { slug: "sword-art-online",              search: "Sword Art Online" },
  { slug: "goblin-slayer",                 search: "Goblin Slayer" },
  { slug: "grimgar",                       search: "Hai to Gensou no Grimgar" },
  { slug: "no-game-no-life",               search: "No Game No Life" },
  { slug: "record-of-ragnarok",            search: "Record of Ragnarok" },
  { slug: "chainsaw-man",                  search: "Chainsaw Man" },
  { slug: "parasyte",                      search: "Parasyte" },
  { slug: "the-god-of-high-school",        search: "The God of High School" },
  { slug: "akatsuki-no-yona",              search: "Akatsuki no Yona (Yona of the Dawn)" },
  { slug: "btooom",                        search: "Btooom!" },
  { slug: "cage-of-eden",                  search: "Cage of Eden" },
  { slug: "deadman-wonderland",            search: "Deadman Wonderland" },
  { slug: "eden-zero",                     search: "Edens Zero" },
  { slug: "fate-stay-night",               search: "Fate/stay night" },
  { slug: "goblin-nightmare",              search: "Goblin Nightmare" },
  { slug: "highschool-dxd",                search: "High School DxD" },
  { slug: "isekai-cheat-magician",         search: "Isekai Cheat Magician" },
  { slug: "kaiju-no-8",                    search: "Kaiju No. 8" },
  { slug: "kengan-ashura",                 search: "Kengan Ashura" },
  { slug: "kenshin",                       search: "Rurouni Kenshin" },
  { slug: "kings-game",                    search: "King's Game (Ousama Game)" },
  { slug: "kuroshitsuji",                  search: "Black Butler (Kuroshitsuji)" },
  { slug: "magister-negi-magi",            search: "Negima! Magister Negi Magi" },
  { slug: "magi",                           search: "Magi: The Labyrinth of Magic" },
  { slug: "monster-musume",                search: "Monster Musume" },
  { slug: "psycho-pass",                   search: "Psycho-Pass" },
  { slug: "radiant",                       search: "Radiant" },
  { slug: "rosario-vampire",               search: "Rosario + Vampire" },
  { slug: "seven-deadly-sins",             search: "The Seven Deadly Sins" },
  { slug: "shield-hero",                   search: "The Rising of the Shield Hero" },
  { slug: "shaman-king",                   search: "Shaman King" },
  { slug: "sk8-the-infinity",              search: "SK8 the Infinity" },
  { slug: "so-im-a-spider-so-what",        search: "So I'm a Spider, So What?" },
  { slug: "steins-gate",                   search: "Steins;Gate" },
  { slug: "trigun",                         search: "Trigun" },
  { slug: "trinity-seven",                 search: "Trinity Seven" },
  { slug: "angel-beats",                   search: "Angel Beats!" },
  { slug: "bastard",                       search: "Bastard!!" },
  { slug: "beelzebub",                     search: "Beelzebub" },
  { slug: "black-bullet",                  search: "Black Bullet" },
  { slug: "black-lagoon",                  search: "Black Lagoon" },
  { slug: "blame",                         search: "BLAME!" },
  { slug: "blood-lad",                     search: "Blood Lad" },
  { slug: "bungou-stray-dogs",             search: "Bungou Stray Dogs" },
  { slug: "coppelion",                     search: "Coppelion" },
  { slug: "devilman-crybaby",              search: "Devilman Crybaby" },
  { slug: "dororo",                        search: "Dororo" },
  { slug: "en-en-no-shouboutai",           search: "Fire Force" },
  { slug: "hajime-no-ippo",                search: "Hajime no Ippo" },
  { slug: "katekyo-hitman-reborn",         search: "Katekyo Hitman Reborn!" },
  { slug: "zatch-bell",                    search: "Zatch Bell!" }
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