/* scripts/fetch-covers.ts */
import fs from "fs";
import path from "path";
import https from "https";

const outDir = path.join(process.cwd(), "public", "covers");

type Serie = {
  slug: string;
  title: string;
  cover?: string | null;
};

const SERIES: Serie[] = require("../data/series").SERIES;

fs.mkdirSync(outDir, { recursive: true });

function getJSON(url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on("error", reject);
  });
}

function download(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, (response) => {
        if (response.statusCode && response.statusCode >= 400) {
          file.close();
          fs.unlink(dest, () => {});
          return reject(new Error(`HTTP ${response.statusCode} for ${url}`));
        }
        response.pipe(file);
        file.on("finish", () => file.close(() => resolve()));
      })
      .on("error", (err) => {
        file.close();
        fs.unlink(dest, () => {});
        reject(err);
      });
  });
}

(async () => {
  console.log(`→ Export des covers dans ${outDir}`);

  for (const s of SERIES) {
    const target = path.join(outDir, `${s.slug}.jpg`);
    if (fs.existsSync(target)) {
      console.log(`skip ${s.slug} (déjà présent)`);
      continue;
    }

    // 1) si cover fourni dans data, on essaie direct
    if (s.cover && /^https?:\/\//i.test(s.cover)) {
      try {
        await download(s.cover, target);
        console.log(`ok   ${s.slug} (depuis s.cover)`);
        continue;
      } catch {}
    }

    // 2) fallback: jaquettes via Jikan (MyAnimeList)
    try {
      const q = encodeURIComponent(s.title);
      const res: any = await getJSON(`https://api.jikan.moe/v4/anime?q=${q}&limit=1`);
      const imgUrl: string | undefined =
        res?.data?.[0]?.images?.jpg?.large_image_url ||
        res?.data?.[0]?.images?.jpg?.image_url ||
        res?.data?.[0]?.images?.webp?.large_image_url ||
        res?.data?.[0]?.images?.webp?.image_url;

      if (!imgUrl) throw new Error("image not found");
      await download(imgUrl, target);
      console.log(`ok   ${s.slug} (Jikan)`);
      continue;
    } catch (e) {
      console.log(`fail ${s.slug} (Jikan): ${(e as Error).message}`);
    }

    // 3) placeholder si rien trouvé
    fs.copyFileSync(path.join(process.cwd(), "public", "covers", "_placeholder.jpg"), target);
    console.log(`ph   ${s.slug} (placeholder)`);
  }

  console.log("✓ Terminé.");
})();