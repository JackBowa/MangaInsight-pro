// scripts/patch-metadata.mjs
// Ajoute status, volumes, chapters, year, author aux séries published: true
import { readFileSync, writeFileSync } from "fs";

const METADATA = {
  // ── SHONEN CLASSIQUES ──
  "one-piece":              { status: "en cours", volumes: 107, chapters: 1112, year: 1997, author: "Eiichiro Oda" },
  "naruto":                 { status: "terminé",  volumes: 72,  chapters: 700,  year: 1999, author: "Masashi Kishimoto" },
  "dragon-ball":            { status: "terminé",  volumes: 42,  chapters: 519,  year: 1984, author: "Akira Toriyama" },
  "bleach":                 { status: "terminé",  volumes: 74,  chapters: 686,  year: 2001, author: "Tite Kubo" },
  "fairy-tail":             { status: "terminé",  volumes: 63,  chapters: 545,  year: 2006, author: "Hiro Mashima" },
  "hunter-x-hunter":        { status: "pause",    volumes: 37,  chapters: 400,  year: 1998, author: "Yoshihiro Togashi" },
  "fullmetal-alchemist":    { status: "terminé",  volumes: 27,  chapters: 116,  year: 2001, author: "Hiromu Arakawa" },
  "demon-slayer-kimetsu-no-yaiba": { status: "terminé", volumes: 23, chapters: 205, year: 2016, author: "Koyoharu Gotouge" },
  "my-hero-academia":       { status: "terminé",  volumes: 42,  chapters: 430,  year: 2014, author: "Kōhei Horikoshi" },
  "jujutsu-kaisen":         { status: "en cours", volumes: 27,  chapters: 265,  year: 2018, author: "Gege Akutami" },
  "black-clover":           { status: "en cours", volumes: 37,  chapters: 375,  year: 2015, author: "Yūki Tabata" },
  "assassination-classroom": { status: "terminé", volumes: 21,  chapters: 185,  year: 2012, author: "Yūsei Matsui" },
  "katekyo-hitman-reborn":  { status: "terminé",  volumes: 42,  chapters: 409,  year: 2004, author: "Akira Amano" },
  "yu-yu-hakusho":          { status: "terminé",  volumes: 19,  chapters: 175,  year: 1990, author: "Yoshihiro Togashi" },
  "slam-dunk":              { status: "terminé",  volumes: 31,  chapters: 276,  year: 1990, author: "Takehiko Inoue" },
  "hajime-no-ippo":         { status: "en cours", volumes: 139, chapters: 1450, year: 1989, author: "George Morikawa" },
  "haikyuu":                { status: "terminé",  volumes: 45,  chapters: 402,  year: 2012, author: "Haruichi Furudate" },
  "blue-lock":              { status: "en cours", volumes: 30,  chapters: 290,  year: 2018, author: "Muneyuki Kaneshiro" },
  "zatch-bell":             { status: "terminé",  volumes: 33,  chapters: 323,  year: 2001, author: "Makoto Raiku" },
  "kuroko-no-basket":       { status: "terminé",  volumes: 30,  chapters: 276,  year: 2008, author: "Tadatoshi Fujimaki" },

  // ── SHONEN MODERNES ──
  "chainsaw-man":           { status: "en cours", volumes: 17,  chapters: 170,  year: 2018, author: "Tatsuki Fujimoto" },
  "spy-x-family":           { status: "en cours", volumes: 14,  chapters: 110,  year: 2019, author: "Tatsuya Endo" },
  "tokyo-revengers":        { status: "terminé",  volumes: 31,  chapters: 278,  year: 2017, author: "Ken Wakui" },
  "dandadan":               { status: "en cours", volumes: 18,  chapters: 180,  year: 2021, author: "Yukinobu Tatsu" },
  "frieren-beyond-journeys-end": { status: "en cours", volumes: 13, chapters: 130, year: 2020, author: "Kanehito Yamada" },
  "delicious-in-dungeon":   { status: "terminé",  volumes: 14,  chapters: 97,   year: 2014, author: "Ryoko Kui" },
  "fire-force":             { status: "terminé",  volumes: 34,  chapters: 304,  year: 2015, author: "Atsushi Ohkubo" },
  "hells-paradise-jigokuraku": { status: "terminé", volumes: 13, chapters: 127, year: 2018, author: "Yuji Kaku" },
  "kaiju-no-8":             { status: "en cours", volumes: 12,  chapters: 120,  year: 2021, author: "Naoya Matsumoto" },
  "undead-unluck":          { status: "terminé",  volumes: 22,  chapters: 215,  year: 2020, author: "Yoshifumi Tozuka" },

  // ── SEINEN ──
  "berserk":                { status: "en cours", volumes: 42,  chapters: 374,  year: 1989, author: "Kentaro Miura" },
  "vagabond":               { status: "pause",    volumes: 37,  chapters: 327,  year: 1998, author: "Takehiko Inoue" },
  "vinland-saga":           { status: "en cours", volumes: 29,  chapters: 214,  year: 2005, author: "Makoto Yukimura" },
  "kingdom":                { status: "en cours", volumes: 72,  chapters: 800,  year: 2006, author: "Yasuhisa Hara" },
  "akira":                  { status: "terminé",  volumes: 6,   chapters: 120,  year: 1982, author: "Katsuhiro Otomo" },
  "the-ghost-in-the-shell": { status: "terminé",  volumes: 3,   chapters: 32,   year: 1989, author: "Masamune Shirow" },
  "monster":                { status: "terminé",  volumes: 18,  chapters: 162,  year: 1994, author: "Naoki Urasawa" },
  "20th-century-boys":      { status: "terminé",  volumes: 22,  chapters: 249,  year: 1999, author: "Naoki Urasawa" },
  "goodnight-punpun":       { status: "terminé",  volumes: 13,  chapters: 147,  year: 2007, author: "Inio Asano" },
  "blame":                  { status: "terminé",  volumes: 10,  chapters: 66,   year: 1997, author: "Tsutomu Nihei" },
  "dorohedoro":             { status: "terminé",  volumes: 23,  chapters: 167,  year: 2000, author: "Q Hayashida" },
  "golden-kamuy":           { status: "terminé",  volumes: 31,  chapters: 314,  year: 2014, author: "Satoru Noda" },
  "gantz":                  { status: "terminé",  volumes: 37,  chapters: 383,  year: 2000, author: "Hiroya Oku" },
  "uzumaki-spiral-into-horror": { status: "terminé", volumes: 3, chapters: 20, year: 1998, author: "Junji Ito" },
  "nausicaa-of-the-valley-of-the-wind": { status: "terminé", volumes: 7, chapters: 59, year: 1982, author: "Hayao Miyazaki" },

  // ── SHOJO / JOSEI ──
  "nana":                   { status: "pause",    volumes: 21,  chapters: 84,   year: 2000, author: "Ai Yazawa" },
  "fruits-basket":          { status: "terminé",  volumes: 23,  chapters: 136,  year: 1998, author: "Natsuki Takaya" },
  "sailor-moon":            { status: "terminé",  volumes: 18,  chapters: 60,   year: 1991, author: "Naoko Takeuchi" },
  "kaguya-sama-love-is-war": { status: "terminé", volumes: 28,  chapters: 281,  year: 2015, author: "Aka Akasaka" },
  "your-lie-in-april":      { status: "terminé",  volumes: 11,  chapters: 44,   year: 2011, author: "Naoshi Arakawa" },
  "orange":                 { status: "terminé",  volumes: 6,   chapters: 22,   year: 2012, author: "Ichigo Takano" },
  "bloom-into-you":         { status: "terminé",  volumes: 8,   chapters: 45,   year: 2015, author: "Nio Nakatani" },
  "given":                  { status: "en cours", volumes: 9,   chapters: 50,   year: 2013, author: "Natsuki Kizu" },
  "ouran-high-school-host-club": { status: "terminé", volumes: 18, chapters: 87, year: 2002, author: "Bisco Hatori" },
  "horimiya":               { status: "terminé",  volumes: 16,  chapters: 122,  year: 2011, author: "HERO" },

  // ── TRANCHE DE VIE / ROMANCE ──
  "yotsuba":                { status: "en cours", volumes: 15,  chapters: 104,  year: 2003, author: "Kiyohiko Azuma" },
  "barakamon":              { status: "terminé",  volumes: 18,  chapters: 118,  year: 2008, author: "Satsuki Yoshino" },
  "silver-spoon":           { status: "terminé",  volumes: 15,  chapters: 130,  year: 2011, author: "Hiromu Arakawa" },
  "laid-back-camp":         { status: "en cours", volumes: 16,  chapters: 100,  year: 2015, author: "Afro" },
  "karakai-jouzu-takagi-san": { status: "terminé", volumes: 20, chapters: 200,  year: 2013, author: "Sōichirō Yamamoto" },
  "my-dress-up-darling":    { status: "en cours", volumes: 14,  chapters: 105,  year: 2018, author: "Shinichi Fukuda" },
  "nisekoi":                { status: "terminé",  volumes: 25,  chapters: 229,  year: 2011, author: "Naoshi Komi" },
  "koe-no-katachi":         { status: "terminé",  volumes: 7,   chapters: 62,   year: 2013, author: "Yoshitoki Oima" },
  "beastars":               { status: "terminé",  volumes: 22,  chapters: 196,  year: 2016, author: "Paru Itagaki" },
  "classroom-of-the-elite": { status: "en cours", volumes: 15,  chapters: 75,   year: 2020, author: "Syougo Kinugasa" },

  // ── ISEKAI / FANTASY ──
  "re-zero":                { status: "en cours", volumes: 40,  chapters: 110,  year: 2014, author: "Tappei Nagatsuki" },
  "made-in-abyss":          { status: "en cours", volumes: 13,  chapters: 68,   year: 2012, author: "Akihito Tsukushi" },
  "mushoku-tensei-redundant-reincarnation": { status: "en cours", volumes: 27, chapters: 100, year: 2014, author: "Rifujin na Magonote" },
  "konosuba-gods-blessing-on-this-wonderful-world": { status: "terminé", volumes: 16, chapters: 61, year: 2013, author: "Natsume Akatsuki" },
  "no-game-no-life":        { status: "pause",    volumes: 9,   chapters: 50,   year: 2013, author: "Yū Kamiya" },
  "overlord":               { status: "en cours", volumes: 16,  chapters: 75,   year: 2012, author: "Kugane Maruyama" },
  "that-time-i-got-reincarnated-as-a-slime": { status: "en cours", volumes: 23, chapters: 110, year: 2015, author: "Fuse" },
  "the-rising-of-the-shield-hero": { status: "en cours", volumes: 25, chapters: 110, year: 2013, author: "Aneko Yusagi" },
  "goblin-slayer":          { status: "en cours", volumes: 16,  chapters: 80,   year: 2016, author: "Kumo Kagyu" },
  "log-horizon":            { status: "en cours", volumes: 13,  chapters: 60,   year: 2011, author: "Mamare Touno" },

  // ── THRILLER / HORROR ──
  "death-note":             { status: "terminé",  volumes: 12,  chapters: 108,  year: 2003, author: "Tsugumi Ohba" },
  "l-attaque-des-titans":   { status: "terminé",  volumes: 34,  chapters: 139,  year: 2009, author: "Hajime Isayama" },
  "parasyte":               { status: "terminé",  volumes: 8,   chapters: 64,   year: 1988, author: "Hitoshi Iwaaki" },
  "the-promised-neverland": { status: "terminé",  volumes: 20,  chapters: 181,  year: 2016, author: "Kaiu Shirai" },
  "deadman-wonderland":     { status: "terminé",  volumes: 13,  chapters: 58,   year: 2007, author: "Jinsei Kataoka" },
  "tokyo-ghoul":            { status: "terminé",  volumes: 14,  chapters: 143,  year: 2011, author: "Sui Ishida" },
  "devilman-crybaby":       { status: "terminé",  volumes: 5,   chapters: 38,   year: 1972, author: "Go Nagai" },
  "dororo":                 { status: "terminé",  volumes: 4,   chapters: 48,   year: 1967, author: "Osamu Tezuka" },

  // ── CLASSIQUES CULTES ──
  "pluto":                  { status: "terminé",  volumes: 8,   chapters: 65,   year: 2003, author: "Naoki Urasawa" },
  "jojos-bizarre-adventure": { status: "en cours", volumes: 131, chapters: 959, year: 1987, author: "Hirohiko Araki" },
  "ranma":                  { status: "terminé",  volumes: 38,  chapters: 407,  year: 1987, author: "Rumiko Takahashi" },
  "inuyasha":               { status: "terminé",  volumes: 56,  chapters: 558,  year: 1996, author: "Rumiko Takahashi" },
  "captain-tsubasa":        { status: "en cours", volumes: 52,  chapters: 525,  year: 1981, author: "Yoichi Takahashi" },
  "eyeshield-21":           { status: "terminé",  volumes: 37,  chapters: 333,  year: 2002, author: "Riichiro Inagaki" },
  "hikaru-no-go":           { status: "terminé",  volumes: 23,  chapters: 189,  year: 1998, author: "Yumi Hotta" },
  "gto-great-teacher-onizuka": { status: "terminé", volumes: 25, chapters: 200, year: 1997, author: "Tohru Fujisawa" },
  "one-punch-man":          { status: "en cours", volumes: 30,  chapters: 200,  year: 2009, author: "ONE" },
  "mob-psycho-100":         { status: "terminé",  volumes: 16,  chapters: 101,  year: 2012, author: "ONE" },

  // ── MANHWA ──
  "solo-leveling":          { status: "terminé",  volumes: 14,  chapters: 179,  year: 2018, author: "Chugong" },
  "tower-of-god":           { status: "en cours", volumes: 16,  chapters: 620,  year: 2010, author: "SIU" },
  "the-beginning-after-the-end": { status: "terminé", volumes: 23, chapters: 180, year: 2018, author: "TurtleMe" },
  "omniscient-reader":      { status: "terminé",  volumes: 8,   chapters: 551,  year: 2018, author: "sing N song" },
  "nano-machine":           { status: "en cours", volumes: 22,  chapters: 230,  year: 2020, author: "Hanjung Wolya" },
  "weak-hero":              { status: "terminé",  volumes: 8,   chapters: 267,  year: 2019, author: "Seopass" },
  "lookism":                { status: "en cours", volumes: 25,  chapters: 510,  year: 2014, author: "Park Tae-jun" },
  "sweet-home":             { status: "terminé",  volumes: 18,  chapters: 140,  year: 2017, author: "Carnby Kim" },
  "noblesse":               { status: "terminé",  volumes: 16,  chapters: 544,  year: 2007, author: "Son Jeho" },
  "the-god-of-high-school": { status: "terminé",  volumes: 15,  chapters: 570,  year: 2011, author: "Yongje Park" },
  "a-returners-magic-should-be-special": { status: "terminé", volumes: 12, chapters: 270, year: 2018, author: "Wookjakga" },
  "second-life-ranker":     { status: "en cours", volumes: 10,  chapters: 200,  year: 2019, author: "Sadoyeon" },
  "the-max-level-hero-has-returned": { status: "en cours", volumes: 8, chapters: 150, year: 2020, author: "Yoonseok" },
  "the-player-who-cant-level-up": { status: "terminé", volumes: 6, chapters: 130, year: 2019, author: "D-Dart" },
  "eleceed":                { status: "en cours", volumes: 10,  chapters: 310,  year: 2019, author: "Son Jeho" },
  "wind-breaker":           { status: "en cours", volumes: 20,  chapters: 500,  year: 2013, author: "Yongseok Jo" },
  "true-beauty":            { status: "terminé",  volumes: 12,  chapters: 207,  year: 2018, author: "Yaongyi" },
  "hardcore-leveling-warrior": { status: "en cours", volumes: 10, chapters: 330, year: 2016, author: "Sehoon Kim" },
  "jungle-juice":           { status: "terminé",  volumes: 8,   chapters: 171,  year: 2020, author: "Juder" },
  "bastard":                { status: "terminé",  volumes: 8,   chapters: 94,   year: 2014, author: "Carnby Kim" },
  "kill-the-hero":          { status: "terminé",  volumes: 9,   chapters: 152,  year: 2019, author: "D-Dart" },
  "sss-class-suicide-hunter": { status: "en cours", volumes: 8, chapters: 160,  year: 2020, author: "Shin Noah" },

  // ── ACTION / AVENTURE ──
  "baki-the-grappler":      { status: "en cours", volumes: 42,  chapters: 380,  year: 1991, author: "Keisuke Itagaki" },
  "kengan-ashura":          { status: "terminé",  volumes: 27,  chapters: 236,  year: 2012, author: "Yabako Sandrovich" },
  "akame-ga-kill":          { status: "terminé",  volumes: 15,  chapters: 78,   year: 2010, author: "Takahiro" },
  "soul-eater":             { status: "terminé",  volumes: 25,  chapters: 113,  year: 2003, author: "Atsushi Ohkubo" },
  "blue-exorcist":          { status: "en cours", volumes: 29,  chapters: 145,  year: 2009, author: "Kazue Kato" },
  "noragami":               { status: "en cours", volumes: 27,  chapters: 110,  year: 2011, author: "Adachitoka" },
  "bungou-stray-dogs":      { status: "en cours", volumes: 24,  chapters: 120,  year: 2013, author: "Kafka Asagiri" },
  "black-lagoon":           { status: "pause",    volumes: 12,  chapters: 103,  year: 2002, author: "Rei Hiroe" },
  "beelzebub":              { status: "terminé",  volumes: 28,  chapters: 239,  year: 2009, author: "Ryūhei Tamura" },
  "dr-stone":               { status: "terminé",  volumes: 26,  chapters: 232,  year: 2017, author: "Riichiro Inagaki" },
  "mashle-magic-and-muscles": { status: "terminé", volumes: 16, chapters: 162, year: 2020, author: "Hajime Komoto" },
  "oshi-no-ko":             { status: "en cours", volumes: 15,  chapters: 155,  year: 2020, author: "Aka Akasaka" },
  "record-of-ragnarok":     { status: "en cours", volumes: 18,  chapters: 95,   year: 2017, author: "Shinya Umemura" },
  "shaman-king":            { status: "terminé",  volumes: 35,  chapters: 300,  year: 1998, author: "Hiroyuki Takei" },
  "witch-hat-atelier":      { status: "en cours", volumes: 12,  chapters: 75,   year: 2016, author: "Kamome Shirahama" },

  // ── DIVERS ──
  "steinsgate":             { status: "terminé",  volumes: 6,   chapters: 24,   year: 2009, author: "Yomi Sarachi" },
  "psycho-pass":            { status: "en cours", volumes: 8,   chapters: 50,   year: 2012, author: "Midori Goto" },
  "edens-zero":             { status: "terminé",  volumes: 32,  chapters: 300,  year: 2018, author: "Hiro Mashima" },
  "gintama":                { status: "terminé",  volumes: 77,  chapters: 704,  year: 2003, author: "Hideaki Sorachi" },
  "d-gray-man":             { status: "pause",    volumes: 27,  chapters: 242,  year: 2004, author: "Katsura Hoshino" },
  "claymore":               { status: "terminé",  volumes: 27,  chapters: 159,  year: 2001, author: "Norihiro Yagi" },
  "black-butler":           { status: "en cours", volumes: 35,  chapters: 200,  year: 2006, author: "Yana Toboso" },
  "yu-gi-oh":               { status: "terminé",  volumes: 38,  chapters: 343,  year: 1996, author: "Kazuki Takahashi" },
  "sword-art-online":       { status: "en cours", volumes: 14,  chapters: 60,   year: 2012, author: "Reki Kawahara" },
  "angel-beats":            { status: "terminé",  volumes: 5,   chapters: 27,   year: 2010, author: "Jun Maeda" },
  "fatestay-night":         { status: "terminé",  volumes: 20,  chapters: 149,  year: 2006, author: "Type-Moon" },
  "magi-the-labyrinth-of-magic": { status: "terminé", volumes: 37, chapters: 369, year: 2009, author: "Shinobu Ohtaka" },
  "the-seven-deadly-sins":  { status: "terminé",  volumes: 41,  chapters: 347,  year: 2012, author: "Nakaba Suzuki" },
  "trigun":                 { status: "terminé",  volumes: 14,  chapters: 70,   year: 1995, author: "Yasuhiro Nightow" },
  "radiant":                { status: "en cours", volumes: 21,  chapters: 200,  year: 2013, author: "Tony Valente" },
  "kenshin-le-vagabond":    { status: "terminé",  volumes: 28,  chapters: 255,  year: 1994, author: "Nobuhiro Watsuki" },
  "fairy-tail-100-years-quest": { status: "en cours", volumes: 16, chapters: 150, year: 2018, author: "Hiro Mashima" },
};

function findEntry(content, slug) {
  const marker = `slug: "${slug}"`;
  const idx = content.indexOf(marker);
  if (idx === -1) return null;
  let i = idx;
  while (i > 0 && content[i] !== "{") i--;
  const start = i;
  let depth = 0;
  for (i = start; i < content.length; i++) {
    if (content[i] === "{") depth++;
    if (content[i] === "}") { depth--; if (depth === 0) break; }
  }
  return { start, end: i };
}

const FILES = ["data/series/series-1.ts", "data/series/series-2.ts"];
let patched = 0, notFound = [];

for (const [slug, meta] of Object.entries(METADATA)) {
  let done = false;
  for (const f of FILES) {
    let content;
    try { content = readFileSync(f, "utf8"); } catch { continue; }
    const entry = findEntry(content, slug);
    if (!entry) continue;
    const entryText = content.slice(entry.start, entry.end + 1);

    // Construire les champs à injecter (seulement ceux pas déjà présents)
    let inject = "";
    if (!entryText.includes("status:")) inject += `  status: "${meta.status}",\n`;
    if (meta.volumes && !entryText.includes("volumes:")) inject += `  volumes: ${meta.volumes},\n`;
    if (meta.chapters && !entryText.includes("chapters:")) inject += `  chapters: ${meta.chapters},\n`;
    if (meta.year && !entryText.includes("year:")) inject += `  year: ${meta.year},\n`;
    if (meta.author && !entryText.includes("author:")) inject += `  author: "${meta.author}",\n`;

    if (!inject) { done = true; break; }

    // Insérer juste avant la dernière }
    const newEntry = entryText.slice(0, -1) + inject + "}";
    content = content.slice(0, entry.start) + newEntry + content.slice(entry.end + 1);
    writeFileSync(f, content, "utf8");
    console.log(`OK: ${slug}`);
    patched++;
    done = true;
    break;
  }
  if (!done) notFound.push(slug);
}

if (notFound.length) console.log("\nNOT FOUND:", notFound.join(", "));
console.log(`\nTotal patché: ${patched}`);
