import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, "../data/series/series-2.ts");

const PATCHES = [
  {
    slug: "cromartie-high-school",
    title: "Cromartie High School",
    synopsis: "Takashi Kamiyama, lycéen sage et studieux, intègre par accident Cromartie, le lycée le plus redouté de Tokyo peuplé de délinquants et de brutes. Mais la vraie question n'est pas pourquoi il est là, c'est pourquoi il y a un robot, un gorille et quelqu'un qui ressemble à Freddie Mercury parmi les élèves.",
    reviewHtml: "<p><em>Cromartie High School</em> est une des séries comiques les plus absurdes et irrésistibles du manga. Eiji Nonaka pousse le non-sequitur et le surréalisme lycéen à des sommets rarement atteints.</p><p>Le principe est simple : prendre les clichés du manga yankee (délinquants, bagarres, hiérarchie des lycées) et les détourner avec un humour complètement deadpan. Personne ne s'étonne du gorille. Le robot a des problèmes existentiels. Freddie Mercury ne dit jamais rien.</p><p>Les gags sont courts, percutants et souvent brillants. C'est le genre de manga qu'on cite encore des années après l'avoir lu. Court (26 volumes courts), efficace, culte.</p>",
    pros: ["Humour absurde et surréaliste au sommet", "Gags courts et percutants", "Culte dans sa catégorie"],
    cons: ["Humour très spécifique, pas pour tous", "Pas de narration classique"],
    stars: 4,
    tags: "Comédie · Parodie · Lycée · Absurde",
    category: "manga",
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/manga/cromartie-high-school", logo: "/logos/manganim.svg" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=cromartie+high+school+manga", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=cromartie+high+school+manga", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "school-rumble",
    title: "School Rumble",
    synopsis: "Tsukamoto Tenma est amoureuse du mystérieux Karasuma, un garçon impossible à déchiffrer. Harima Kenji, un délinquant réformé, est amoureux de Tsukamoto sans réussir à le lui dire. Entre les malentendus, les triangles amoureux et les situations absurdes, une comédie romantique aussi chaotique qu'attachante.",
    reviewHtml: "<p><em>School Rumble</em> est l'une des meilleures comédies romantiques des années 2000. Jin Kobayashi excelle dans l'art du quiproquo en chaîne et du personnage à la malchance comique chronique.</p><p>Harima est un héros inoubliable : aspirant mangaka, ancien délinquant, totalement paralysé par ses sentiments. Ses tentatives répétées d'avouer ses sentiments à Tsukamoto sont systématiquement sabordées de la façon la plus spectaculaire qui soit.</p><p>La galerie de personnages secondaires est riche et contribue à un univers lycéen vivant et cohérent. Seule la fin déçoit légèrement après une longue course. Mais le chemin est jubilatoire.</p>",
    pros: ["Humour romantique impeccable", "Harima est un héros mémorable", "Ensemble cast riche et attachant"],
    cons: ["Fin décevante après une longue série", "Quelques arcs moins inspirés"],
    stars: 4,
    tags: "Comédie · Romance · Lycée · Shōnen",
    category: "manga",
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/manga/school-rumble", logo: "/logos/manganim.svg" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=school+rumble+manga", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=school+rumble+manga", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "sket-dance",
    title: "SKET Dance",
    synopsis: "Bossun, Himeko et Switch forment le SKET-dan, un club lycéen dont la mission est d'aider tous ceux qui en ont besoin. Qu'il s'agisse de résoudre des problèmes personnels, de sauver des clubs en crise ou de se lancer dans des aventures improbables, ces trois amis absurdement compétents dans leurs domaines respectifs prennent tout au sérieux.",
    reviewHtml: "<p><em>SKET Dance</em> de Kenta Shinohara est un shōnen choral qui alterne brillamment entre comédie pure et moments d'émotion sincère. Le trio central est l'un des plus équilibrés du genre : Bossun le leader intuitif, Himeko la bagarreuse au grand coeur, Switch le génie calculateur au passé mystérieux.</p><p>La série excelle dans sa capacité à faire rire aux éclats une page et émouvoir la suivante. Les backstories des personnages, révélées progressivement, sont bien construites et crédibles.</p><p>Avec un crossover célèbre avec Gintama, SKET Dance appartient à la grande tradition des shōnen comiques de qualité. 32 volumes bien remplis.</p>",
    pros: ["Trio central parfaitement équilibré", "Alternance réussie comédie / émotion", "Backstories bien construites"],
    cons: ["Démarrage lent", "Certains gags répétitifs"],
    stars: 4,
    tags: "Comédie · Shōnen · Lycée · Action",
    category: "manga",
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/manga/sket-dance", logo: "/logos/manganim.svg" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=sket+dance+manga", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=sket+dance+manga", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "mx0",
    title: "Mx0",
    synopsis: "Taiga Kuzumi échoue à l'examen d'entrée d'une école de magie et, lors de la restitution de son examen, une photo compromettante le force à bluffer : il prétend être un sorcier hors norme. Pour survivre dans cette école sans un gramme de magie, il devra user de ruse, de déduction et de bluff permanent.",
    reviewHtml: "<p><em>Mx0</em> de Yasuhiro Kano est un manga qui mérite bien plus de reconnaissance qu'il n'en a reçu. La prémisse est géniale : un garçon sans magie obligé de survivre dans une école de magie par la seule intelligence et l'improvisation.</p><p>Taiga est un héros excellemment écrit, dont l'ingéniosité pour contourner les situations impossibles génère des moments genuinement jubilatoires. Le système de magie est cohérent et bien pensé.</p><p>Malheureusement, la série fut interrompue prématurément par le Jump avant sa conclusion. Les 10 volumes existants sont néanmoins une lecture très recommandée, avec une fin de fortune qui tient la route.</p>",
    pros: ["Prémisse inventive et bien exploitée", "Héros brillant et attachant", "Système de magie cohérent"],
    cons: ["Interrompu prématurément (10 volumes)", "Fin non planifiée"],
    stars: 4,
    tags: "Fantastique · Comédie · Shōnen · Magie",
    category: "manga",
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/manga/mx0", logo: "/logos/manganim.svg" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=mx0+manga", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=mx0+manga", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "uq-holder",
    title: "UQ Holder!",
    synopsis: "Tōta Konoe, jeune garçon vivant à la campagne, rêve de monter à la grande ville. Quand il découvre que sa tutrice Yukihime est en réalité une vampire immortelle, il est entraîné dans un monde d'êtres immortels, d'organisation secrètes et de magie. Suite spirituelle de Negima!, UQ Holder développe un univers riche.",
    reviewHtml: "<p><em>UQ Holder!</em> de Ken Akamatsu est la suite indirecte de <em>Mahou Sensei Negima!</em> mais fonctionne très bien en lecture standalone. L'univers futuriste mêlant immortels et magie est l'un des plus inventifs d'Akamatsu.</p><p>Tōta est un héros shōnen classique mais sympathique, dont l'évolution est bien menée. La galerie d'immortels de l'UQ Holder est diversifiée et attachante, chacun avec une forme d'immortalité différente et une personnalité marquée.</p><p>Les arcs d'action sont bien chorégraphiés, et les connexions avec Negima! ravissent les fans de la série originale. Une lecture solide pour les amateurs du genre.</p>",
    pros: ["Univers riche et inventif", "Galerie de personnages variés", "Connexions avec Negima satisfaisantes"],
    cons: ["Rythme inégal", "Certains arcs s'étirent"],
    stars: 3,
    tags: "Action · Fantastique · Shōnen · Magie",
    category: "manga",
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/manga/uq-holder", logo: "/logos/manganim.svg" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=uq+holder+manga", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=uq+holder+manga", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "to-love-ru",
    title: "To Love Ru",
    synopsis: "Rito Yuki, un lycéen timide incapable d'avouer ses sentiments à la fille qu'il aime, voit sa vie basculer le jour où Lala, une princesse extraterrestre en fuite, atterrit dans sa baignoire et décide de l'épouser pour échapper à ses prétendants. Une comédie romantique spatiale qui ne s'embarrasse pas de la subtilité.",
    reviewHtml: "<p><em>To Love Ru</em> de Saki Hasemi et Kentaro Yabuki est l'exemple parfait du harem manga assumé. Sans prétention narrative particulière, il excelle dans ce qu'il propose : du fanservice généreux, de l'humour de situation et une galerie de filles attachantes.</p><p>Ce qui distingue la série, c'est surtout le dessin de Yabuki, d'une précision et d'un soin remarquables pour le genre. Les personnages féminins, bien que nombreux, ont chacun leur personnalité distincte.</p><p>La suite <em>To Love Ru Darkness</em> approfondit les personnages avec plus de sérieux. Pour les lecteurs qui cherchent exactement ce que la série promet sans surprise, c'est du travail bien fait.</p>",
    pros: ["Dessin de Yabuki remarquable", "Humour de situation efficace", "Personnages féminins bien différenciés"],
    cons: ["Harem assumé — pas pour tous", "Héros passif et frustrant", "Peu de progression narrative"],
    stars: 3,
    tags: "Comédie · Harem · Science-fiction · Ecchi",
    category: "manga",
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/manga/to-love-ru", logo: "/logos/manganim.svg" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=to+love+ru+manga", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=to+love+ru+manga", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "my-youth-romantic-comedy-is-wrong-as-i-expected",
    title: "My Youth Romantic Comedy Is Wrong, As I Expected",
    synopsis: "Hachiman Hikigaya est un lycéen cynique convaincu que le service club de son école est une perte de temps. Forcé d'y rejoindre par un professeur, il rencontre Yukino Yukinoshita, aussi froide et brillante que lui, et Yui Yuigahama, sociable et sincère. Ensemble, ils aident leurs camarades tout en questionnant leurs propres valeurs.",
    reviewHtml: "<p><em>Oregairu</em> (Mon histoire d'amour de lycée est de toutes façons une erreur) est l'une des light novels les plus intelligentes du genre rom-com lycée. Elle se distingue par son refus des clichés habituels et sa profondeur psychologique inhabituelle.</p><p>Hachiman est un personnage fascinant : sa lecture cynique du monde est souvent juste, mais son refus de connexion réelle lui coûte. L'évolution de ses relations avec Yukino et Yui est écrite avec soin et honnêteté.</p><p>L'adaptation manga capture bien l'esprit de l'original. Pour les lecteurs qui cherchent une rom-com lycée qui se pose des vraies questions sur l'authenticité et les relations humaines, Oregairu est incontournable.</p>",
    pros: ["Psychologie du héros rare et nuancée", "Questionnements profonds sur l'authenticité", "Triangle amoureux bien traité"],
    cons: ["Héros difficile à aimer au départ", "Dense, peu accessible au premier abord"],
    stars: 4,
    tags: "Romance · Comédie · Lycée · Light Novel",
    category: "manga",
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/manga/oregairu", logo: "/logos/manganim.svg" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=oregairu+manga", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=oregairu+manga", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "the-devil-is-a-part-timer",
    title: "The Devil is a Part-Timer!",
    synopsis: "Satan, vaincu dans son monde fantastique, fuit par un portail et se retrouve à Tokyo sans pouvoirs. Contraint de s'adapter à la vie moderne, il prend un job à temps partiel dans une chaîne de fast-food. Pendant ce temps, la héroïne qui l'a chassé de son monde le retrouve et tente de le vaincre, avec les mêmes problèmes d'adaptation.",
    reviewHtml: "<p><em>The Devil is a Part-Timer!</em> exploite une prémisse absurde avec un sens du timing comique impeccable. La déchéance du Seigneur des Ténèbres réduit à vendre des hamburgers pour payer son loyer est intrinsèquement drôle, et Satou Wagahara en tire tout le potentiel.</p><p>Ce qui distingue la série, c'est l'affection que l'auteur porte à ses personnages : Satan/Sadao Maou est un protagoniste genuinement sympa qui prend son travail très au sérieux. Les confrontations avec la héroïne Emilia prennent une dimension inattendue quand les deux commencent à s'entendre.</p><p>L'adaptation manga de la light novel est bien réalisée, avec des gags visuels ajoutés et un rythme dynamique. Un isekai/comédie solide qui évite les pièges du genre.</p>",
    pros: ["Prémisse comique parfaitement exploitée", "Personnage de Satan étonnamment attachant", "Rythme comique impeccable"],
    cons: ["Peu de développement romantique", "Ton très léger, peu de profondeur"],
    stars: 4,
    tags: "Comédie · Fantastique · Isekai · Light Novel",
    category: "manga",
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/manga/the-devil-is-a-part-timer", logo: "/logos/manganim.svg" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=the+devil+is+a+part+timer+manga", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=devil+is+part+timer+manga", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "himouto-umaru-chan",
    title: "Himouto! Umaru-chan",
    synopsis: "Umaru Doma est parfaite en dehors : belle, intelligente, sportive, admirée de tous. Mais une fois rentrée chez son frère, elle se transforme en créature en sweat à capuche de hamster, se vautrant dans les chips, les jeux vidéo et les animes. Une comédie de décalage entre image publique et vraie nature.",
    reviewHtml: "<p><em>Himouto! Umaru-chan</em> est une comédie de tranche de vie légère et charmante. Le gimmick de la double personnalité d'Umaru est simple mais efficacement exploité pour générer des situations comiques récurrentes.</p><p>La relation fraternelle entre Umaru et Taihei est le coeur de la série : bienveillante, parfois exaspérée, mais toujours affectueuse. Les personnages secondaires, notamment les amies d'Umaru qui ignorent sa double vie, enrichissent l'univers.</p><p>C'est une lecture idéale pour les moments de détente, sans prétention narrative. Les otakus et les amateurs de culture pop y trouveront des clins d'oeil appréciés.</p>",
    pros: ["Comédie légère et efficace", "Relation fraternelle touchante", "Parfait pour les courtes sessions de lecture"],
    cons: ["Gimmick répétitif sur la longueur", "Peu de développement narratif"],
    stars: 3,
    tags: "Comédie · Slice of life · Otaku · Famille",
    category: "manga",
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/manga/himouto-umaru-chan", logo: "/logos/manganim.svg" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=himouto+umaru-chan+manga", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=himouto+umaru-chan+manga", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "sewayaki-kitsune-no-senko-san",
    title: "Sewayaki Kitsune no Senko-san",
    synopsis: "Nakano, un salaryman épuisé par le surmenage, rentre chez lui pour trouver Senko, une kitsune (renarde divine) de 800 ans, qui s'est installée chez lui pour prendre soin de lui. Chaque soir, elle cuisine, le chouchoute et lui offre la caresse apaisante de sa queue. Une oeuvre de moe et de douceur sans prétention.",
    reviewHtml: "<p><em>Sewayaki Kitsune no Senko-san</em> est un manga assumément thérapeutique. Rimukoro ne prétend pas raconter une grande histoire : il offre des tranches de vie douces, chaleureuses, destinées à apaiser le stress du quotidien.</p><p>Senko est un personnage délibérément mignon et bienveillant, sans la moindre ironie. L'humour est doux, les moments de tendresse sincères. La référence constante au surmenage japonais (karōshi) donne une dimension sociale subtile à la série.</p><p>C'est une lecture de niche : parfaite pour se détendre, irritante si on cherche une narration. Les amateurs de moe confortant trouveront ici une valeur sûre.</p>",
    pros: ["Ambiance apaisante et chaleureuse", "Senko est adorable par conception", "Parfait manga de décompression"],
    cons: ["Zéro narration ou tension dramatique", "Très niche (moe pur)"],
    stars: 3,
    tags: "Comédie · Slice of life · Fantastique · Moe",
    category: "manga",
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/manga/sewayaki-kitsune-no-senko-san", logo: "/logos/manganim.svg" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=senko-san+manga", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=senko+san+manga", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "kakuriyo-no-yadomeshi",
    title: "Kakuriyo no Yadomeshi",
    synopsis: "Aoi, jeune femme capable de voir les esprits depuis l'enfance, hérite d'une dette contractée par son grand-père auprès d'un puissant Ogre du monde des esprits. Pour rembourser, elle est contrainte de travailler dans l'auberge du monde caché, Tenjin-ya, et apprend à cuisiner pour des clients surnaturels exigeants.",
    reviewHtml: "<p><em>Kakuriyo no Yadomeshi</em> est un manga josei qui allie deux univers appréciés : le monde des esprits japonais et la gastronomie. L'auteure Haruka Haui crée une heroïne déterminée et talentueuse dont le pouvoir vient de sa cuisine plutôt que de capacités magiques.</p><p>L'ambiance du monde des esprits est bien rendue, avec une esthétique inspirée du Japon traditionnel. Les recettes cuisinées par Aoi sont décrites avec appétit, et les personnages surnaturels forment une galerie colorée.</p><p>Le romance avec Ōdanna, l'ogre propriétaire, se développe lentement mais avec constance. Une lecture agréable pour les amateurs de folklore japonais et de romance fantastique.</p>",
    pros: ["Univers des esprits bien construit", "Héroïne active et compétente", "Romance fantastique bien développée"],
    cons: ["Rythme lent", "Certains arcs répétitifs"],
    stars: 3,
    tags: "Romance · Fantastique · Josei · Gastronomie",
    category: "manga",
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=kakuriyo+yadomeshi+manga", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=kakuriyo+yadomeshi+manga", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "teasing-master-takagi-san",
    title: "Teasing Master Takagi-san",
    synopsis: "Nishikata est un collégien qui ne réussit jamais à vaincre sa camarade Takagi lors de leurs joutes quotidiennes. Takagi, qui a des sentiments pour lui, se délecte de le taquiner avec un timing et une précision dévastatrices. Une romance douce et légère où l'amour se cache dans les petits moments du quotidien.",
    reviewHtml: "<p><em>Teasing Master Takagi-san</em> de Sōichirō Yamamoto est une série qui a conquis un immense public grâce à sa simplicité désarmante. Chaque chapitre est une variation sur le même thème : Takagi taquine Nishikata, Nishikata essaie vainement de riposter, Takagi gagne.</p><p>Ce qui rend la formule irrésistible, c'est la clarté des sentiments de Takagi et la naïveté de Nishikata. L'évolution est lente mais réelle, et les moments de tendresse sont d'une douceur rare.</p><p>La série a généré une suite (<em>Karakai Jouzu no (Moto) Takagi-san</em>) qui montre leur vie adulte et confirme la direction romantique. Une lecture parfaite pour les moments de légèreté.</p>",
    pros: ["Formule simple et irrésistiblement efficace", "Douceur et tendresse bien rendues", "Chapitres courts, lecture rapide"],
    cons: ["Très répétitif par nature", "Peu de variété narrative"],
    stars: 4,
    tags: "Romance · Comédie · Slice of life · Collège",
    category: "manga",
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/manga/teasing-master-takagi-san", logo: "/logos/manganim.svg" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=takagi-san+manga", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=takagi-san+manga", logo: "/logos/amazon.svg" }
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
console.log(`\n🎉 Patch batch3-lot11 terminé ! ${patched}/${PATCHES.length} séries patchées.`);
