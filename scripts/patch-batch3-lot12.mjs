import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, "../data/series/series-2.ts");

const PATCHES = [
  {
    slug: "kaiju-no8",
    title: "Kaiju No.8",
    synopsis: "Kafka Hibino rêve depuis l'enfance d'intégrer le Corps de Défense pour protéger l'humanité contre les monstres géants appelés kaijus. Après des années d'échecs aux examens, il se retrouve dans le nettoyage des cadavres de kaijus quand il est soudainement contaminé et acquiert la capacité de se transformer lui-même en kaiju.",
    reviewHtml: "<p><em>Kaiju No.8</em> de Naoya Matsumoto est l'une des séries les plus fraîches du Weekly Shōnen Jump des dernières années. Sa force : un protagoniste adulte de 32 ans dont la persévérance sur plus d'une décennie est enfin récompensée d'une façon totalement inattendue.</p><p>Kafka est un héros attachant précisément parce qu'il n'est pas un adolescent prodige, mais un homme ordinaire qui n'a jamais abandonné son rêve. Quand il obtient ses pouvoirs, la dichotomie entre son identité de kaiju et son désir d'en tuer est riche de tension.</p><p>Le dessin de Matsumoto est excellent, avec des scènes de combat lisibles et impressionnantes. Une série qui monte en puissance à chaque arc.</p>",
    pros: ["Héros adulte rare et attachant", "Dichotomie identité humaine/kaiju bien exploitée", "Dessin et chorégraphie de combat excellents"],
    cons: ["Univers en construction, encore en cours", "Certains personnages secondaires peu développés"],
    stars: 4,
    tags: "Action · Shōnen · Kaiju · Science-fiction",
    category: "manga",
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/manga/kaiju-no-8", logo: "/logos/manganim.svg" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=kaiju+no+8+manga", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=kaiju+no+8+manga", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "witch-watch",
    title: "WITCH WATCH",
    synopsis: "Morihito Otogi est le gardien désigné de Nico, une fille de lignée sorcière qui entre à l'âge de ses pouvoirs. La prophétie dit qu'elle causera une catastrophe mondiale, et Morihito doit la protéger, peut-être d'elle-même. Entre gags absurdes et sorts qui partent en vrille, une comédie fantastique pleine d'affection.",
    reviewHtml: "<p><em>Witch Watch</em> de Kenta Shinohara (l'auteur de SKET Dance) est une comédie fantastique chaleureuse qui confirme le talent de son créateur pour les personnages attachants et l'humour bien calibré.</p><p>Nico et Morihito forment un duo complémentaire : elle est enthousiaste et incontrôlable, lui est sérieux et dévoué. La galerie de sorcières et créatures magiques qui les entourent est inventive.</p><p>Comme SKET Dance, la série alterne habilement entre moments comiques et instants plus sérieux. C'est une lecture légère mais solide, idéale pour les fans de l'auteur ou du genre.</p>",
    pros: ["Duo central attachant", "Humour bien calibré (style SKET Dance)", "Univers fantastique inventif"],
    cons: ["Moins ambitieux que SKET Dance", "Léger en narration"],
    stars: 3,
    tags: "Comédie · Fantastique · Shōnen · Magie",
    category: "manga",
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/manga/witch-watch", logo: "/logos/manganim.svg" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=witch+watch+manga", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=witch+watch+manga", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "sakamoto-days",
    title: "Sakamoto Days",
    synopsis: "Taro Sakamoto était l'assassin le plus redouté du monde. Quand il tombe amoureux et fonde une famille, il quitte le milieu et ouvre une supérette. Mais ses anciens employeurs ne l'entendent pas de cette oreille, et les assassins défilent dans sa supérette, à lui de les éliminer sans que sa femme et sa fille ne s'en aperçoivent.",
    reviewHtml: "<p><em>Sakamoto Days</em> est l'une des meilleures surprises récentes du Jump. Yuto Suzuki trouve un angle original dans le genre action : un héros qui n'a aucune envie de se battre mais qui reste le meilleur dans ce qu'il fait.</p><p>L'humour domestique qui entoure les missions d'élimination est irrésistible. Sakamoto, imposant et muet (il ne parle pas dans ses premiers chapitres), communique par expressions et gestes dans des scènes comiques mémorables.</p><p>Le dessin des combats est excellent, avec une fluidité et une inventivité rares. Les personnages secondaires — notamment Shin, son assistant télépathe — enrichissent un cast déjà solide. Une lecture incontournable du Jump actuel.</p>",
    pros: ["Concept original et parfaitement exécuté", "Combats fluides et inventifs", "Humour domestique irrésistible"],
    cons: ["En cours, on ne sait pas encore où ça va", "Quelques arcs inégaux"],
    stars: 5,
    tags: "Action · Comédie · Shōnen · Assassin",
    category: "manga",
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/manga/sakamoto-days", logo: "/logos/manganim.svg" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=sakamoto+days+manga", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=sakamoto+days+manga", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "ayashimon",
    title: "Ayashimon",
    synopsis: "Maruo Tōma est un lycéen qui rêve de combattre des monstres comme dans ses mangas préférés. Un soir, il rencontre Urara, une fille mi-humaine mi-ayakashi (esprit japonais) qui cherche à prendre le contrôle du monde des démons. Maruo, dont la force surhumaine peut rivaliser avec les créatures surnaturelles, devient son garde du corps.",
    reviewHtml: "<p><em>Ayashimon</em> de Yuji Kaku (l'auteur de Hell's Paradise) est malheureusement une série courte (3 volumes) arrêtée par manque de popularité dans le Jump. C'est regrettable car les bases étaient prometteuses.</p><p>L'univers du crime organisé des ayakashi est bien rendu, mêlant yakuza et folklore japonais avec un style graphique caractéristique de Kaku. Maruo est un héros shōnen classique mais attachant dans sa naïveté assumée.</p><p>En 3 volumes, la série fait ce qu'elle peut et propose une conclusion correcte. Pour les fans de Kaku après Hell's Paradise, c'est une lecture intéressante à défaut d'être complète.</p>",
    pros: ["Univers yakuza/ayakashi original", "Style graphique de Yuji Kaku reconnaissable", "Personnage d'Urara charismatique"],
    cons: ["Seulement 3 volumes, série interrompue", "Potentiel non réalisé"],
    stars: 3,
    tags: "Action · Fantastique · Shōnen · Yokai",
    category: "manga",
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/manga/ayashimon", logo: "/logos/manganim.svg" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=ayashimon+manga", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=ayashimon+manga", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "akane-banashi",
    title: "Akane-banashi",
    synopsis: "Akane Osaki, jeune lycéenne, se consacre au rakugo (l'art de la narration comique traditionnelle japonaise) pour venger son père, un narrateur prometteur injustement renvoyé de son école par le maître Ishigami. Sa passion et son talent brut la propulsent dans un monde exigeant et compétitif.",
    reviewHtml: "<p><em>Akane-banashi</em> est l'une des séries les plus originales et les mieux exécutées du Jump récent. Yuki Suenaga et Takamasa Moue réussissent le tour de force de rendre le rakugo — un art méconnu hors du Japon — passionnant et accessible.</p><p>Akane est une héroïne qui porte la série avec une énergie et une détermination contagieuses. Son talent est montré sans explication laborieuse : les planches de rakugo sont dessinées de façon à faire ressentir la performance.</p><p>La rivalité avec Ishigami et la quête de vengeance par le mérite donnent une structure narrative solide. Un des meilleurs sports manga du moment, même si son sport est une forme d'art oral.</p>",
    pros: ["Sujet unique (rakugo) rendu passionnant", "Héroïne énergique et convaincante", "Dessin expressif qui rend la performance"],
    cons: ["Niche pour les lecteurs non familiers du rakugo", "En cours"],
    stars: 5,
    tags: "Drame · Sport · Shōnen · Arts traditionnels",
    category: "manga",
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/manga/akane-banashi", logo: "/logos/manganim.svg" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=akane+banashi+manga", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=akane+banashi+manga", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "choujin-x",
    title: "Choujin X",
    synopsis: "Tokio Kurohara est un lycéen ordinaire dont le meilleur ami Azuma est un génie. Quand des humains commencent à se transformer en Choujin (êtres aux pouvoirs surhumains), Azuma se transforme volontairement pour sauver Tokio, qui est forcé de faire de même. Tokio doit alors trouver sa propre force dans un monde de pouvoirs colossaux.",
    reviewHtml: "<p><em>Choujin X</em> de Sui Ishida (l'auteur de Tokyo Ghoul) est une oeuvre ambitieuse et visuellement époustouflante. Ishida confirme son statut d'auteur à l'univers graphique unique — les pages de Choujin X sont parmi les plus belles du manga contemporain.</p><p>Le thème central — trouver son identité propre plutôt que de copier les autres — est universel et bien intégré dans la narration. Tokio, qui n'a pas encore de pouvoir défini, est une métaphore vivante de l'adolescence en recherche de soi.</p><p>La publication mensuelle donne à Ishida le temps de soigner chaque planche. Un manga d'auteur exigeant, moins accessible que Tokyo Ghoul, mais d'une richesse visuelle et thématique rare.</p>",
    pros: ["Dessin d'Ishida = parmi les meilleurs du manga actuel", "Thèmes d'identité profonds", "Publication mensuelle, qualité constante"],
    cons: ["Rythme lent (mensuel), progression parsemée", "Plus hermétique que Tokyo Ghoul"],
    stars: 4,
    tags: "Action · Fantastique · Seinen · Super-pouvoirs",
    category: "manga",
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/manga/choujin-x", logo: "/logos/manganim.svg" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=choujin+x+manga", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=choujin+x+manga", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "hells-paradise-jigokuraku",
    title: "Hell's Paradise: Jigokuraku",
    synopsis: "Gabimaru, un ninja shinobi surnommé le Creux pour son absence d'émotions, est condamné à mort. Seule une grâce peut le sauver : rapporter l'Élixir d'Éternité depuis l'île mystérieuse de Shinsenkyo. Il est envoyé sur l'île avec d'autres condamnés, chacun escorté par un bourreau shogunal. Ce qu'ils découvrent dépasse leur imagination.",
    reviewHtml: "<p><em>Hell's Paradise: Jigokuraku</em> de Yuji Kaku est une des meilleures séries publiées dans le Jump+ de ces dernières années. Elle mêle action de haute volée, horreur body-horror et exploration philosophique du bouddhisme de façon remarquablement cohérente.</p><p>Gabimaru est un héros dont la dichotomie entre assassin implacable et mari qui veut rentrer chez lui est parfaitement gérée. L'île de Shinsenkyo est une création horrifique et magnifique, où la nature elle-même devient une menace existentielle.</p><p>Les 13 volumes sont denses et bien construits, avec une conclusion satisfaisante. Un seinen d'action majeur qui mérite sa réputation.</p>",
    pros: ["Worldbuilding de l'île horrifique et fascinant", "Action de très haute qualité", "Thèmes philosophiques bien intégrés"],
    cons: ["Certains arcs avec de nombreux personnages à gérer", "Body-horror intense, pas pour tout le monde"],
    stars: 5,
    tags: "Action · Horreur · Seinen · Historique",
    category: "manga",
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/manga/hells-paradise-jigokuraku", logo: "/logos/manganim.svg" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=hell%27s+paradise+manga", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=hells+paradise+manga", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "nues-exorcist",
    title: "Nue's Exorcist",
    synopsis: "Miyako Shizuki est une exorciste qui combat les nue, d'anciens esprits composites et dangereux. Son partenaire de travail est un nue lui-même, Mato Hashihara, qui a accepté de travailler pour les humains. Entre missions d'exorcisme et tension constante, une collaboration inattendue entre humains et monstres.",
    reviewHtml: "<p><em>Nue's Exorcist</em> est une série d'action surnaturelle récente du Jump qui propose un angle intéressant : la collaboration forcée entre exorciste et monstre. L'ambiance sombre et l'esthétique des nue sont bien travaillées.</p><p>La dynamique entre Miyako et Mato est le coeur de la série, et elle est prometeuse, basée sur une méfiance réciproque qui évolue progressivement. Le système de combat autour des pouvoirs composites des nue est inventif.</p><p>Série récente et encore en cours, son potentiel est là mais n'est pas encore pleinement exploité. À suivre pour les amateurs du genre surnaturel/exorcisme.</p>",
    pros: ["Dynamique humain/monstre intéressante", "Esthétique des nue bien travaillée", "Potentiel narratif prometteur"],
    cons: ["Encore en cours, peu de volumes", "Score bas sur AniList, popularité limitée"],
    stars: 3,
    tags: "Action · Fantastique · Shōnen · Exorcisme",
    category: "manga",
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/manga/nues-exorcist", logo: "/logos/manganim.svg" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=nue+exorcist+manga", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=nue+exorcist+manga", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "knights-of-sidonia",
    title: "Knights of Sidonia",
    synopsis: "Nagate Tanikaze grandit dans les entrailles du vaisseau-colonie Sidonia, dernier refuge de l'humanité après la destruction de la Terre par les Gauna, des organismes extraterrestres. Quand il est découvert et intégré à l'armée de pilotes de gardes, il se retrouve au coeur de la guerre pour la survie de l'espèce.",
    reviewHtml: "<p><em>Knights of Sidonia</em> de Tsutomu Nihei est un chef-d'oeuvre de science-fiction dure. L'univers du vaisseau-colonie est construit avec une rigueur rare : l'architecture de Sidonia, les rapports de force internes, l'évolution de l'humanité génétiquement modifiée.</p><p>Nihei excelle dans les designs de vaisseaux et les combats spatiaux, dont la lisibilité et l'inventivité sont remarquables. Nagate est un héros classique mais efficace dans cet univers froid et déterministe.</p><p>Les thèmes transhumanistes — clonage, modification génétique, nouvelles formes de genre et de reproduction — sont explorés avec naturel et profondeur. Une grande SF, compagnon idéal de BLAME! de l'auteur.</p>",
    pros: ["SF dure rigoureuse et fascinante", "Combats spatiaux exceptionnels", "Thèmes transhumanistes bien traités"],
    cons: ["Dessin dense parfois difficile à lire", "Personnages féminins peu différenciés"],
    stars: 4,
    tags: "Science-fiction · Mecha · Seinen · Post-apocalyptique",
    category: "manga",
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/manga/knights-of-sidonia", logo: "/logos/manganim.svg" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=knights+of+sidonia+manga", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=knights+of+sidonia+manga", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "takopis-original-sin",
    title: "Takopi's Original Sin",
    synopsis: "Takopi est un alien de la planète Happy qui arrive sur Terre avec pour mission de rendre les gens heureux. Il rencontre Shizuka, une petite fille profondément malheureuse, bullied à l'école et négligée à la maison. Pour la sauver, Takopi dispose d'objets magiques, mais les réalités de la souffrance humaine dépassent ses capacités de compréhension.",
    reviewHtml: "<p><em>Takopi's Original Sin</em> est un manga court (2 volumes) qui choque par sa noirceur assumée. Ce qui commence comme une histoire d'alien mignon vire rapidement au drama psychologique sombre explorant la violence scolaire, la négligence parentale et la dépression enfantine.</p><p>L'auteur Taizan5 ne ménage pas son lecteur et traite des thèmes lourds avec une honnêteté brutale. La structure narrative avec boucles temporelles ajoute une couche de complexité méritée.</p><p>En 2 volumes, l'oeuvre marque durablement. Pas pour les lecteurs sensibles aux thèmes difficiles, mais une réussite incontestable dans sa catégorie.</p>",
    pros: ["Noirceur et profondeur surprenantes (2 volumes)", "Thèmes sociaux traités honnêtement", "Structure narrative avec boucles temporelles"],
    cons: ["Très sombre, potentiellement éprouvant", "Court par nature — certains fils non développés"],
    stars: 4,
    tags: "Drame · Science-fiction · Psychologique · Court",
    category: "manga",
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/manga/takopis-original-sin", logo: "/logos/manganim.svg" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=takopi+original+sin+manga", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=takopi+original+sin+manga", logo: "/logos/amazon.svg" }
    ]
  },
];

function patchEntry(content, slug, buildReplacement) {
  const marker = `slug: "${slug}"`;
  const idx = content.indexOf(marker);
  if (idx === -1) return null;
  let i = idx;
  while (i > 0 && content[i] !== "{") i--;
  const entryStart = i;
  let depth = 0;
  for (i = entryStart; i < content.length; i++) {
    if (content[i] === "{") depth++;
    if (content[i] === "}") { depth--; if (depth === 0) break; }
  }
  const entryEnd = i + 1;
  const existingEntry = content.slice(entryStart, entryEnd);
  const coverMatch = existingEntry.match(/cover:\s*"([^"]+)"/);
  const coverValue = coverMatch ? coverMatch[1] : "";
  const replacement = buildReplacement(coverValue);
  return content.slice(0, entryStart) + replacement + content.slice(entryEnd);
}

let content = readFileSync(FILE, "utf-8");
let patched = 0;

for (const p of PATCHES) {
  const result = patchEntry(content, p.slug, (coverValue) => {
    const shopsJson = p.shops.map(s =>
      `  {\n    "name": "${s.name}",\n    "url": "${s.url}",\n    "logo": "${s.logo}"\n  }`
    ).join(",\n");
    return `{
  slug: "${p.slug}",
  title: "${p.title.replace(/"/g, '\\"')}",
  synopsis: "${p.synopsis.replace(/"/g, '\\"')}",
  reviewHtml: "${p.reviewHtml.replace(/"/g, '\\"')}",
  pros: [${p.pros.map(x => `"${x.replace(/"/g, '\\"')}"`).join(", ")}],
  cons: [${p.cons.map(x => `"${x.replace(/"/g, '\\"')}"`).join(", ")}],
  stars: ${p.stars},
  category: "${p.category}",
  tags: "${p.tags}",
  cover: "${coverValue}",
  addedAt: "2026-03-22",
  shops: [
${shopsJson}
  ],
  streaming: []
}`;
  });
  if (!result) { console.log(`⚠️  Non trouvé : ${p.slug}`); continue; }
  content = result;
  patched++;
  console.log(`✅ ${p.title}`);
}

writeFileSync(FILE, content, "utf-8");
console.log(`\n🎉 Patch batch3-lot12 terminé ! ${patched}/${PATCHES.length} séries patchées.`);
