import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, "../data/series/series-2.ts");

const PATCHES = [
  {
    slug: "tower-of-god",
    title: "Tower of God",
    synopsis: "Vingt-cinquième Bam a passé toute sa vie sous une tour, sans ciel ni avenir, avec Rachel comme seule lumière. Quand elle décide de monter dans la Tour, une structure mystérieuse dont l'ascension promet tout ce que l'on désire, Bam la suit et se retrouve projeté dans un monde de compétitions impitoyables, de pouvoirs surnaturels et de trahisons.",
    reviewHtml: "<p><em>Tower of God</em> de SIU est l'un des piliers fondateurs du manhwa webtoon moderne. Publié depuis 2010 sur Naver, il a posé les bases du genre avec un worldbuilding d'une richesse exceptionnelle.</p><p>La Tour est une des constructions fictives les plus inventives du genre : chaque étage est un monde différent avec ses règles, sa faune et sa politique. SIU y déploie des centaines de personnages avec une maîtrise remarquable.</p><p>Bam est un héros dont l'évolution est l'une des plus satisfaisantes du webtoon — de gosse naïf à force à part entière. Une lecture incontournable malgré ses pauses fréquentes de publication.</p>",
    pros: ["Worldbuilding d'une richesse exceptionnelle", "Centaines de personnages bien gérés", "Évolution du héros très satisfaisante"],
    cons: ["Pauses de publication fréquentes", "Arcs très longs, rythme inégal"],
    stars: 5,
    tags: "Action · Fantasy · Webtoon · Manhwa",
    category: "manhwa",
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=tower+of+god+manhwa", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=tower+of+god+manhwa", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "the-god-of-high-school",
    title: "The God of High School",
    synopsis: "Jin Mori, un lycéen coréen champion de taekwondo, est invité à participer au tournoi God of High School, une compétition rassemblant les meilleurs combattants de tout le pays. Ce qui commence comme un tournoi sportif révèle progressivement des enjeux surnaturels bien plus grands que prévu.",
    reviewHtml: "<p><em>The God of High School</em> de Yongje Park est une des séries de combat les plus viscéralement jouissives du webtoon. Si le scénario est simple au départ, il prend une ampleur mythologique inattendue qui surprend agréablement.</p><p>Les combats sont ce qui définit la série : dynamiques, inventifs, visuellement percutants. Park dessine l'action avec une clarté et une énergie rares, et chaque affrontement est mémorable.</p><p>Jin Mori est un héros shōnen classique dans le bon sens — enthousiaste, loyal et progressivement révélé comme bien plus qu'il n'y paraît. Une lecture parfaite pour les amateurs d'action pure.</p>",
    pros: ["Combats parmi les meilleurs du webtoon", "Énergie et rythme constants", "Révélations mythologiques surprenantes"],
    cons: ["Scénario simple au départ", "Personnages secondaires peu développés"],
    stars: 4,
    tags: "Action · Arts martiaux · Webtoon · Manhwa",
    category: "manhwa",
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=god+of+high+school+manhwa", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=god+of+high+school+manhwa", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "noblesse",
    title: "Noblesse",
    synopsis: "Cadis Etrama Di Raizel, un noble vampire d'une puissance immense, se réveille après un sommeil de 820 ans et s'inscrit dans un lycée coréen pour retrouver son fidèle serviteur Frankenstein. Ses anciens ennemis et diverses organisations secrètes vont rapidement troubler sa nouvelle vie tranquille.",
    reviewHtml: "<p><em>Noblesse</em> de Son Jeho et Lee Kwangsu est l'un des webtoons pionniers, publié depuis 2007. Son charme repose sur un protagoniste atypique : Rai, immensément puissant mais totalement désintéressé par son propre pouvoir, découvrant le monde moderne avec une dignité sereine et comique.</p><p>La dynamique entre Rai et Frankenstein (son serviteur protecteur) est le coeur émotionnel de la série. Les combats montent progressivement en intensité et en enjeux.</p><p>La série souffre d'un rythme parfois inégal et de certains arcs répétitifs, mais reste un classique fondateur du webtoon action/fantasy coréen. La conclusion est satisfaisante.</p>",
    pros: ["Protagoniste charismatique et unique", "Dynamique Rai/Frankenstein touchante", "Classique fondateur du webtoon"],
    cons: ["Rythme inégal", "Certains arcs répétitifs"],
    stars: 4,
    tags: "Action · Fantasy · Vampires · Webtoon · Manhwa",
    category: "manhwa",
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=noblesse+manhwa", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=noblesse+manhwa", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "nano-machine",
    title: "Nano Machine",
    synopsis: "Cheon Yeo-Woon est un bâtard dans une secte d'arts martiaux, en butte aux persécutions des fils légitimes. Un descendant du futur lui injecte secrètement une nano machine qui l'aide à maîtriser rapidement les arts martiaux et à s'élever dans la hiérarchie brutale de la secte.",
    reviewHtml: "<p><em>Nano Machine</em> est l'archétype du manhwa de cultivation moderne avec twist technologique. La combinaison arts martiaux chinois / nano machine futuriste crée une dynamique de progression originale très appréciée des lecteurs du genre.</p><p>La progression de Cheon Yeo-Woon est rapide mais cohérente grâce à la logique de la nano machine. La politique interne de la secte, ses complots et ses trahisons donnent de la substance à ce qui pourrait rester un simple power fantasy.</p><p>Dessin dynamique, rythme soutenu et retournements fréquents font de Nano Machine une lecture addictive pour les amateurs de cultivation et de revenge manhwa.</p>",
    pros: ["Fusion cultivation/technologie originale", "Rythme soutenu et addictif", "Complots de secte bien construits"],
    cons: ["Power fantasy assumé, peu de nuance", "Dessin inégal"],
    stars: 4,
    tags: "Action · Cultivation · Webtoon · Manhwa",
    category: "manhwa",
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=nano+machine+manhwa", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=nano+machine+manhwa", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "omniscient-reader",
    title: "Omniscient Reader's Viewpoint",
    synopsis: "Kim Dokja est le seul lecteur à avoir fini le roman web 'Three Ways to Survive the Apocalypse'. Quand le monde se transforme en l'apocalypse décrite dans ce roman, il est le seul à en connaître le déroulement. Armé de cette connaissance, il doit naviguer dans un monde devenu fiction tout en essayant de changer la destinée des personnages qu'il aime.",
    reviewHtml: "<p><em>Omniscient Reader's Viewpoint</em> est l'un des meilleurs webtoons du moment, adapté du roman web coréen de singNsong. Sa prémisse — un lecteur qui connaît l'intrigue mais doit la vivre — est exploitée avec une intelligence et une profondeur rares.</p><p>Kim Dokja est un héros fascinant : sa connaissance méta du récit crée des situations narratives uniques, et son évolution d'observateur passif en acteur central est l'un des arcs de personnage les plus satisfaisants du genre.</p><p>Les thèmes sur la narration, la fiction et ce que les histoires font aux gens sont traités avec sérieux. Le dessin est de haute qualité. Une oeuvre majeure du manhwa contemporain.</p>",
    pros: ["Prémisse méta brillamment exploitée", "Héros complexe et attachant", "Thèmes profonds sur la fiction et la narration"],
    cons: ["Dense, nécessite attention", "Nombreux personnages à suivre"],
    stars: 5,
    tags: "Action · Fantasy · Webtoon · Manhwa · Post-apocalyptique",
    category: "manhwa",
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=omniscient+reader+manhwa", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=omniscient+reader+manhwa", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "martial-peak",
    title: "Martial Peak",
    synopsis: "Yang Kai est un disciple de bas rang dans une secte d'arts martiaux qui récure les latrines. Un jour, il trouve un livre noir mystérieux qui lui confère la capacité d'absorber l'énergie de ses ennemis vaincus. Son ascension fulgurante dans le monde de la cultivation commence.",
    reviewHtml: "<p><em>Martial Peak</em> est un manhua (BD chinoise) de cultivation extrêmement populaire, avec des milliers de chapitres à son actif. C'est l'archétype du genre xianxia : héros parti de zéro qui devient progressivement invincible en traversant des royaumes de puissance toujours plus élevés.</p><p>Le point fort de la série est sa progression fluide et la variété des décors et ennemis rencontrés. Chaque arc apporte de nouveaux défis et de nouvelles mécaniques de cultivation.</p><p>Accessible sans background en xianxia, c'est une lecture de divertissement pur, à aborder sans attentes narratives complexes mais avec l'envie de suivre une progression de puissance satisfaisante.</p>",
    pros: ["Progression de puissance fluide et satisfaisante", "Variété des arcs et des décors", "Série longue pour les grands lecteurs"],
    cons: ["Scénario simple, peu de nuance", "Répétitif sur la très longue durée"],
    stars: 3,
    tags: "Action · Cultivation · Manhua · Xianxia",
    category: "manhwa",
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=martial+peak+manga", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=martial+peak+manga", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "the-breaker",
    title: "The Breaker",
    synopsis: "Yi Shioon est un lycéen bullied qui rencontre par hasard Chunwoo Han, un maître d'arts martiaux faisant semblant d'être prof de remplacement. Shioon le supplie de lui enseigner le combat pour se défendre. Il ignore qu'il vient d'être entraîné dans le monde souterrain du Murim, la communauté secrète des arts martiaux coréens.",
    reviewHtml: "<p><em>The Breaker</em> de Jeon Geuk-jin et Park Jin-hwan est un manhwa d'arts martiaux de référence, publié de 2007 à 2010. Il se distingue du genre par son approche plus réaliste et nuancée des arts martiaux coréens et la relation maître/disciple au coeur de l'histoire.</p><p>Chunwoo Han est l'un des personnages les plus complexes du genre : brutal mais pas sans code éthique, avec un passé douloureux qui explique ses contradictions. La relation avec Shioon évolue de façon inattendue.</p><p>Le dessin de combat est excellent et lisible. Une série fondatrice du manhwa d'arts martiaux qui tient la route aujourd'hui.</p>",
    pros: ["Relation maître/disciple complexe", "Arts martiaux réalistes et bien dessinés", "Personnages nuancés pour le genre"],
    cons: ["Fin abrupte (suite dans New Waves)", "Certains arcs inégaux"],
    stars: 4,
    tags: "Action · Arts martiaux · Manhwa · Murim",
    category: "manhwa",
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=the+breaker+manhwa", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=the+breaker+manhwa", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "the-breaker-new-waves",
    title: "The Breaker: New Waves",
    synopsis: "Suite directe de The Breaker. Shioon, maintenant privé de son ki par son ancien maître, doit survivre dans le monde du Murim sans ses pouvoirs. Il doit reconstruire sa force à partir de zéro tout en étant la cible de factions rivales qui voient en lui un moyen de déstabiliser Chunwoo Han.",
    reviewHtml: "<p><em>The Breaker: New Waves</em> est la suite directe et obligatoire de The Breaker. Elle amplifie les thèmes de l'original : Shioon privé de ses pouvoirs est une décision narrative courageuse qui remet à zéro la progression du héros de façon crédible.</p><p>La politique du Murim prend plus de place dans cette suite, avec des factions multiples aux motivations entremêlées. Le dessin monte encore en qualité, avec des chorégraphies de combat encore plus soignées.</p><p>Une suite qui dépasse l'original sur plusieurs aspects. À lire absolument après The Breaker.</p>",
    pros: ["Suite qui dépasse l'original", "Politique du Murim bien construite", "Dessin en progression constante"],
    cons: ["Indispensable de lire The Breaker d'abord", "Certains fils narratifs non résolus"],
    stars: 4,
    tags: "Action · Arts martiaux · Manhwa · Murim",
    category: "manhwa",
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=breaker+new+waves+manhwa", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=breaker+new+waves+manhwa", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "return-of-the-war-god",
    title: "Return of the War God",
    synopsis: "Un guerrier légendaire est tué après avoir vaincu un dieu maléfique. Il se réincarne dans le corps d'un jeune homme faible au sein d'une famille noble en déclin. Avec les souvenirs et les réflexes de son passé légendaire, il doit reconstruire sa puissance et venger son clan.",
    reviewHtml: "<p><em>Return of the War God</em> (Chronicles of the Martial God's Return) est un manhwa de reincarnation/revenge dans la veine des séries murim classiques. La formule est bien rodée : héros légendaire dans un corps faible qui reprend progressivement son niveau tout en réglant des comptes.</p><p>Le manhwa est solide dans son genre, avec un héros charismatique et des combats bien dessinés. L'univers murim est bien construit et la progression satisfaisante.</p><p>Sans révolutionner le genre, c'est une lecture addictive et bien exécutée pour les fans de murim manhwa.</p>",
    pros: ["Héros charismatique et compétent", "Revenge satisfaisant bien rythmé", "Univers murim cohérent"],
    cons: ["Formule classique sans surprise", "Personnages secondaires peu développés"],
    stars: 3,
    tags: "Action · Cultivation · Manhwa · Murim · Réincarnation",
    category: "manhwa",
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=chronicles+martial+god+return+manhwa", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=return+war+god+manhwa", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "jungle-juice",
    title: "Jungle Juice",
    synopsis: "Jang Suchan, lycéen modèle, se retrouve avec des ailes de mouche après avoir bu une étrange substance. Pour cacher sa transformation, il mène une double vie jusqu'à ce qu'il soit découvert et entraîné dans Nest, une ville secrète peuplée d'humains-insectes comme lui. Il doit y survivre et comprendre ce qu'il est devenu.",
    reviewHtml: "<p><em>Jungle Juice</em> est un webtoon d'action qui tire intelligemment parti de sa prémisse d'hybrides humain/insecte. Les pouvoirs des personnages, inspirés de leurs caractéristiques d'insectes, donnent lieu à des combats créatifs et diversifiés.</p><p>L'univers de Nest est bien construit, avec une hiérarchie sociale et des factions dont les motivations sont développées progressivement. Le héros Suchan est attachant dans sa volonté de protéger à la fois ses deux mondes.</p><p>Un manhwa d'action original qui se distingue par son concept, avec un dessin de qualité et des arcs bien construits.</p>",
    pros: ["Concept hybride humain/insecte très original", "Combats créatifs basés sur les pouvoirs d'insectes", "Univers bien construit"],
    cons: ["Certains concepts absurdes si on y réfléchit", "Rythme inégal sur certains arcs"],
    stars: 4,
    tags: "Action · Fantasy · Webtoon · Manhwa",
    category: "manhwa",
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=jungle+juice+manhwa", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=jungle+juice+manhwa", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "eleceed",
    title: "Eleceed",
    synopsis: "Jiwoo Seo est un lycéen gentil qui cache des réflexes surhumains. Un jour, il recueille un chat gros et paresseux qui est en réalité Kayden Break, un puissant évolueur (humain aux capacités améliorées) fuyant ses ennemis. Ensemble, ils entrent dans le monde secret des évolueurs et de leurs combats pour le contrôle du monde.",
    reviewHtml: "<p><em>Eleceed</em> de Son Jae-ho et Kim Zhena est l'une des meilleures surprises du webtoon d'action. Le duo Jiwoo/Kayden-chat est irrésistible : le jeune homme enthousiaste et le maître coincé dans un corps de chat créent une dynamique comique et affectueuse qui distingue la série.</p><p>Mais Eleceed ne se contente pas de l'humour : les combats entre évolueurs sont visuellement impressionnants et les enjeux montent progressivement. Le système de pouvoirs est cohérent et inventif.</p><p>Le dessin de Kim Zhena est parmi les plus beaux du webtoon actuel — couleurs éclatantes et action lisible. Un must-read pour les fans du genre.</p>",
    pros: ["Duo Jiwoo/Kayden-chat irrésistible", "Dessin parmi les meilleurs du webtoon actuel", "Équilibre parfait humour/action"],
    cons: ["Progression parfois lente", "En cours, pas encore de conclusion"],
    stars: 5,
    tags: "Action · Comédie · Webtoon · Manhwa",
    category: "manhwa",
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=eleceed+manhwa", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=eleceed+manhwa", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "weak-hero",
    title: "Weak Hero",
    synopsis: "Gray Yeon est un lycéen nouveau venu dans une école gangrenée par la violence des bandes. Physiquement ordinaire, il neutralise pourtant les brutes avec une précision chirurgicale en utilisant l'intelligence plutôt que la force brute. Sa réputation grandit malgré lui dans le monde violent des gangs lycéens coréens.",
    reviewHtml: "<p><em>Weak Hero</em> de Seopass et Razen est un manhwa de combat lycéen qui se distingue par son approche réaliste et psychologique. Gray Yeon n'est pas un héros classique : il utilise la physique et la géographie du combat plutôt que des pouvoirs fantastiques.</p><p>Le manhwa sait être brutal sans complaisance. Les conséquences des combats sont montrées honnêtement, et la question de la violence comme réponse à la violence est soulevée sans être résolue simplement.</p><p>Le dessin est excellent, avec des expressions faciales particulièrement réussies qui renforcent l'aspect psychologique. Un des meilleurs manhwas de son genre.</p>",
    pros: ["Héros intelligent et original", "Approche réaliste et psychologique", "Dessin expressif et brutal"],
    cons: ["Très sombre par moments", "Pas de happy end garanti"],
    stars: 5,
    tags: "Action · Drame · Lycée · Manhwa · Réaliste",
    category: "manhwa",
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=weak+hero+manhwa", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=weak+hero+manhwa", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "true-beauty",
    title: "True Beauty",
    synopsis: "Lim Jugyeong est une lycéenne complexée par son apparence. Grâce au maquillage, elle se transforme en beauté reconnue de toute l'école. Mais quand Lee Suho, l'homme le plus beau de l'école, découvre son vrai visage, une romance naît sur fond d'insécurité, d'authenticité et de premier amour.",
    reviewHtml: "<p><em>True Beauty</em> de Yaongyi est l'un des webtoons romantiques les plus populaires de Naver. Sa prémisse sur le maquillage comme masque social touche à des thèmes universels d'insécurité et d'authenticité avec une sincérité appréciable.</p><p>Jugyeong est une héroïne attachante précisément parce qu'elle n'est pas parfaite — ses complexes sont traités avec empathie et humour. Le triangle amoureux est bien géré, chaque prétendant étant crédible.</p><p>L'adaptation drama coréenne (2020) a amplifié la popularité mondiale du manhwa. Pour les amateurs de romance lycéenne légère avec une touche de profondeur, c'est un incontournable du genre.</p>",
    pros: ["Thèmes d'insécurité traités avec empathie", "Triangle amoureux bien construit", "Héroïne attachante et réaliste"],
    cons: ["Certains clichés du genre romcom", "Rythme inégal sur la longueur"],
    stars: 3,
    tags: "Romance · Comédie · Lycée · Webtoon · Manhwa",
    category: "manhwa",
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=true+beauty+manhwa", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=true+beauty+manhwa", logo: "/logos/amazon.svg" }
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
  return content.slice(0, entryStart) + buildReplacement(coverValue) + content.slice(entryEnd);
}

let content = readFileSync(FILE, "utf-8");
let patched = 0;
for (const p of PATCHES) {
  const result = patchEntry(content, p.slug, (cover) => {
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
  cover: "${cover}",
  addedAt: "2026-03-22",
  shops: [\n${shopsJson}\n  ],
  streaming: []
}`;
  });
  if (!result) { console.log(`⚠️  Non trouvé : ${p.slug}`); continue; }
  content = result;
  patched++;
  console.log(`✅ ${p.title}`);
}
writeFileSync(FILE, content, "utf-8");
console.log(`\n🎉 ${patched}/${PATCHES.length} patchés.`);
