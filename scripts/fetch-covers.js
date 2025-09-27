// scripts/fetch-covers.js  (Node.js pur)
'use strict';

const fs = require('fs');
const path = require('path');
const https = require('https');

// ---- Slug -> page Wikipédia à viser
const targets = [
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
];

const outDir = path.join(__dirname, '..', 'public', 'covers');
fs.mkdirSync(outDir, { recursive: true });

// ---- util: GET JSON
function getJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'node' } }, (res) => {
      let data = '';
      res.on('data', (c) => data += c);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(new Error('Bad JSON from API')); }
      });
    }).on('error', reject);
  });
}

// ---- util: téléchargement + suivi de redirections/erreurs
function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.headers.location) {
        file.close(); fs.rmSync(dest, { force: true });
        return download(res.headers.location, dest).then(resolve, reject);
      }
      if (res.statusCode && res.statusCode >= 400) {
        file.close(); fs.rmSync(dest, { force: true });
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      file.close(); fs.rmSync(dest, { force: true });
      reject(err);
    });
  });
}

// ---- fetch 1 cover
async function fetchCover(slug, query) {
  const api = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&piprop=original|thumbnail&pithumbsize=1000&titles=${encodeURIComponent(query)}&redirects=1&origin=*`;
  const json  = await getJSON(api);
  const pages = (json && json.query && json.query.pages) || {};
  const page  = Object.values(pages)[0] || {};
  const src   = (page.thumbnail && page.thumbnail.source) || (page.original && page.original.source) || null;

  if (!src) { console.warn(`⚠️  Pas d’image pour ${slug} (${query})`); return; }

  let ext = (src.split('.').pop() || 'jpg').split('?')[0].toLowerCase();
  if (!['jpg','jpeg','png','webp'].includes(ext)) ext = 'jpg';

  const dest = path.join(outDir, `${slug}.${ext}`);
  await download(src, dest);
  console.log(`✅ ${slug} → covers/${slug}.${ext}`);
}

// ---- boucle
(async function run() {
  for (const { slug, query } of targets) {
    try { await fetchCover(slug, query); }
    catch (e) { console.error(`❌ ${slug}: ${e.message}`); }
  }
})();