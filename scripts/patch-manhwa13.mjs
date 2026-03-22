import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, "../data/series/series-2.ts");

function getCover(content, slug) {
  const marker = `slug: "${slug}"`;
  const idx = content.indexOf(marker);
  if (idx === -1) return "";
  const block = content.slice(idx, idx + 600);
  const m = block.match(/cover:\s*"([^"]+)"/);
  return m ? m[1] : "";
}

function findAndReplace(content, slug, newEntry) {
  const marker = `slug: "${slug}"`;
  const idx = content.indexOf(marker);
  if (idx === -1) return null;
  let i = idx;
  while (i > 0 && content[i] !== "{") i--;
  const start = i; let depth = 0;
  for (i = start; i < content.length; i++) {
    if (content[i] === "{") depth++;
    if (content[i] === "}") { depth--; if (depth === 0) break; }
  }
  const end = i + 1;
  return content.slice(0, start) + newEntry + content.slice(end);
}

function appendEntry(content, entry) {
  const insertPos = content.lastIndexOf("]");
  const before = content.slice(0, insertPos).trimEnd();
  const needsComma = !before.endsWith(",");
  return before + (needsComma ? ",\n" : "\n") + entry + "\n]";
}

let content = readFileSync(FILE, "utf-8");
let patched = 0;

// ─── 1. Memorize ─────────────────────────────────────────────────────────────
const cover1 = getCover(content, "memorize");
const r1 = findAndReplace(content, "memorize", `{
  slug: "memorize",
  title: "Memorize",
  category: "manhwa",
  cover: "${cover1}",
  tags: "Action · Fantasy · Gaming · Regression",
  stars: 5,
  addedAt: "2026-03-22",
  synopsis: "Kim Su-Hyun a survécu 10 ans dans une simulation post-apocalyptique brutale appelée Halls. A sa mort, il est projeté 10 ans en arrière au début de tout avec ses capacités maximales et une mémoire parfaite. Il doit désormais naviguer dans un monde qu'il connaît par coeur, protéger des gens qu'il a vus mourir, et affronter les secrets cachés derrière le système.",
  pros: ["L'un des meilleurs manhwas de regression — narration dense et ambitieuse", "Héros avec un passé traumatisant, crédible et touchant", "World-building exceptionnel avec une vraie cohérence interne"],
  cons: ["Dense et complexe — peut être difficile à suivre au départ", "Certains arcs très sombres peu adaptés à tout le monde"],
  reviewHtml: \`<p>Memorize est une oeuvre de reference dans le genre manhwa de regression. Kim Su-Hyun, survivant de dix ans d'enfer dans les Halls, revient avec la connaissance absolue d'un monde que les autres vivent pour la première fois — et le poids de tout ce qu'il a vu et perdu.</p><p>Ce qui distingue Memorize de ses nombreux concurrents, c'est la profondeur émotionnelle de son héros. Su-Hyun n'est pas simplement puissant — il porte un trauma réel, des regrets précis, et des relations reconstituées qui ont une résonance authentique. Le worldbuilding est également exceptionnel, avec des Halls cohérents, dangereux et inventifs.</p><p>Un incontournable du manhwa d'action-regression, à recommander en priorité aux lecteurs qui cherchent un récit ambitieux avec une vraie densité narrative et émotionnelle.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=memorize+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=memorize+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r1) { console.log("⚠️ Non trouvé : memorize"); } else { content = r1; patched++; console.log("✅ memorize"); }

// ─── 2. Dungeon Defense ───────────────────────────────────────────────────────
const cover2 = getCover(content, "dungeon-defense");
const r2 = findAndReplace(content, "dungeon-defense", `{
  slug: "dungeon-defense",
  title: "Dungeon Defense",
  category: "manhwa",
  cover: "${cover2}",
  tags: "Fantasy · Stratégie · Dark · Anti-héros",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Un joueur de jeu de stratégie médiéval se retrouve transporté dans le jeu en tant que Dantalian — le demon lord le plus faible de tous. Dans un monde où les héros exterment les demons lords un par un, il doit utiliser sa connaissance du jeu, sa ruse, et une manipulation hors norme pour survivre contre toute attente.",
  pros: ["Anti-héros démon absolument fascinant", "Stratégie et manipulation poussées à l'extrême", "Ton dark et subversif rafraîchissant"],
  cons: ["Très sombre — violence, manipulation et contenu adulte", "Progression narrative parfois très lente"],
  reviewHtml: \`<p>Dungeon Defense est une oeuvre à part — un manhwa sombre et subversif qui adopte le point de vue du « méchant » de manière absolue. Dantalian est un demon lord faible dans un monde en guerre contre les démons, et sa survie repose entièrement sur une intelligence stratégique et une manipulation psychologique portées à leur paroxysme.</p><p>Le manhwa ne fait aucun compromis : les thèmes sont sombres, les méthodes du protagoniste moralement troubles, et les situations parfois choquantes. Mais pour les lecteurs qui cherchent quelque chose de radicalement différent des héros classiques, c'est une expérience unique. La profondeur stratégique du récit est rarement égalée dans le genre.</p><p>Réservé aux lecteurs matures qui cherchent un manhwa d'anti-héros sans concessions, avec une intelligence narrative hors du commun.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=dungeon+defense+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=dungeon+defense+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r2) { console.log("⚠️ Non trouvé : dungeon-defense"); } else { content = r2; patched++; console.log("✅ dungeon-defense"); }

// ─── 3. Elqueeness ────────────────────────────────────────────────────────────
const cover3 = getCover(content, "jeongnyeongwang-elkwineseu");
const r3 = findAndReplace(content, "jeongnyeongwang-elkwineseu", `{
  slug: "jeongnyeongwang-elkwineseu",
  title: "Elqueeness",
  category: "manhwa",
  cover: "${cover3}",
  tags: "Fantasy · Aventure · Elfe · Action",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Elqueeness, reine des elfes dans un autre monde, est transportée sur Terre où la magie n'existe pas. Découvrant un monde moderne incompréhensible pour elle, elle doit apprendre à s'y adapter tout en cherchant un moyen de rentrer chez elle, avec l'aide d'un humain ordinaire qui l'a trouvée.",
  pros: ["Concept elfe dans le monde moderne original et drôle", "Héroïne fière et dépaysée attachante", "Comédie de situation constante et bien jouée"],
  cons: ["Peu d'enjeux dramatiques au début", "Le worldbuilding de l'autre monde peu développé"],
  reviewHtml: \`<p>Elqueeness est une comédie de dépaysement bien exécutée : une reine elfique hautaine et puissante qui se retrouve dans le Séoul moderne sans rien comprendre à la technologie, aux conventions sociales, ou à la culture humaine. Ce choc culturel est exploité avec une constance et une inventivité qui rendent le manhwa très plaisant à lire.</p><p>L'héroïne est particulièrement bien écrite : sa fierté elfique qui se confronte à son incompétence totale dans le monde moderne crée des situations comiques vraiment drôles, sans jamais la rendre ridicule. La dynamique avec le protagoniste humain est naturelle et bien dosée.</p><p>Un manhwa de fantasy-comédie légère et originale, recommandé pour une lecture divertissante avec une héroïne mémorable.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=elqueeness+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=elqueeness+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r3) { console.log("⚠️ Non trouvé : jeongnyeongwang-elkwineseu"); } else { content = r3; patched++; console.log("✅ jeongnyeongwang-elkwineseu (Elqueeness)"); }

// ─── 4. Immortal Regis ────────────────────────────────────────────────────────
const cover4 = getCover(content, "immortal-regis");
const r4 = findAndReplace(content, "immortal-regis", `{
  slug: "immortal-regis",
  title: "Immortal Regis",
  category: "manhwa",
  cover: "${cover4}",
  tags: "Action · Fantasy · Mort-vivant · Pouvoirs",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Chae Jido, lycéen ordinaire, est tué et se retrouve dans le Monde des Morts — un autre plan d'existence. Là, il obtient des pouvoirs de mort-vivant et doit naviguer entre deux mondes, vivant et mort, tout en affrontant des entités et des factions qui le considèrent comme une anomalie à éliminer.",
  pros: ["Univers de la mort-vivance bien construit et original", "Dual-world entre vivants et morts, bien équilibré", "Atmosphère sombre et unique dans le manhwa"],
  cons: ["Peut sembler déroutant au départ avec les deux mondes", "Certains arcs de faction s'étirent"],
  reviewHtml: \`<p>Immortal Regis est un classique du manhwa coréen, une des premières séries à avoir popularisé le genre undead/autre monde. L'univers de Namo, avec son Monde des Morts élaboré et ses règles propres, a influencé de nombreux manhwas qui ont suivi.</p><p>Ce qui distingue la série, c'est son atmosphère unique : ni héros classique ni anti-héros, Jido navigue dans un espace ambivalent entre vie et mort avec des pouvoirs de mort-vivant qui ont une esthétique visuelle marquante. Les deux mondes interagissent de manière intéressante et créent des enjeux que les manhwas de hunter classiques n'ont pas.</p><p>Un manhwa classique qui a vieilli avec dignité, recommandé pour son univers original et les amateurs de manhwas undead avec un vrai worldbuilding.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=immortal+regis+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=immortal+regis+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r4) { console.log("⚠️ Non trouvé : immortal-regis"); } else { content = r4; patched++; console.log("✅ immortal-regis"); }

// ─── 5. Volcanic Age ─────────────────────────────────────────────────────────
const cover5 = getCover(content, "hwasanjeonsaeng");
const r5 = findAndReplace(content, "hwasanjeonsaeng", `{
  slug: "hwasanjeonsaeng",
  title: "Volcanic Age",
  category: "manhwa",
  cover: "${cover5}",
  tags: "Action · Arts martiaux · Murim · Regression",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Joo Seo-Cheon a passé sa vie à servir son clan du Mont Hua, mourant vieux et regrettant de n'avoir jamais atteint son plein potentiel. Il se réveille dans le passé, dans son corps de jeune disciple, avec toute l'expérience de ses décennies de pratique. Cette fois, il ne laissera aucun talent inexploité.",
  pros: ["Progression d'un vrai maître qui connaît ses lacunes passées", "Ambiance murim du Mont Hua excellemment rendue", "Développement des arts martiaux très cohérent"],
  cons: ["Rythme posé qui demande de la patience", "Arcs de tournoi nombreux"],
  reviewHtml: \`<p>Volcanic Age (Hwasan Jeon-saeng) appartient à la grande tradition du murim-regression coréen, avec une variation qui lui est propre : un personnage qui régresse non pas au début de sa vie pour devenir le plus puissant, mais vers sa jeunesse pour enfin accomplir ce qu'il n'a jamais pu faire correctement.</p><p>Cette nuance donne à Joo Seo-Cheon une humilité et une sagesse rares parmi les héros du genre. Il connaît ses lacunes passées et les comble méthodiquement, avec une progression des arts martiaux particulièrement bien construite. L'ambiance du clan du Mont Hua est immersive et authentique.</p><p>Un manhwa murim de référence, recommandé pour les amateurs du genre qui apprécient un héros mature, une progression cohérente et un univers martial soigné.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=volcanic+age+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=volcanic+age+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r5) { console.log("⚠️ Non trouvé : hwasanjeonsaeng"); } else { content = r5; patched++; console.log("✅ hwasanjeonsaeng (Volcanic Age)"); }

// ─── 6. Peerless Dad ──────────────────────────────────────────────────────────
const cover6 = getCover(content, "father-unrivaled");
const r6 = findAndReplace(content, "father-unrivaled", `{
  slug: "father-unrivaled",
  title: "Peerless Dad",
  category: "manhwa",
  cover: "${cover6}",
  tags: "Action · Arts martiaux · Murim · Famille",
  stars: 5,
  addedAt: "2026-03-22",
  synopsis: "Noh Gajang, guerrier redoutable du murim, abandonne tout pour s'occuper de ses trois enfants après la mort de sa femme. Alors qu'il essaie d'être simplement un bon père, le monde du murim le rattrape inévitablement, et il doit protéger sa famille tout en gérant son passé qui refait surface.",
  pros: ["Dimension familiale touchante et rare dans le murim", "Humour chaleureux avec les trois enfants", "Combats spectaculaires quand le père sort enfin ses griffes"],
  cons: ["Rythme tranquille dans les arcs familiaux (certains attendaient plus d'action)", "Quelques arcs de murim très convenus"],
  reviewHtml: \`<p>Peerless Dad est un manhwa qui fait quelque chose de rare et de réussi dans le murim : centrer le récit sur la paternité. Noh Gajang, guerrier dont la réputation ferait trembler les grands clans, passe la majorité de son temps à cuisiner pour ses enfants, les conduire à l'école des arts martiaux, et essayer (mal) de les élever seul.</p><p>Cette tension entre le père aimant qui ne veut plus se battre et le guerrier inégalable que le monde ne laisse pas en paix crée une dynamique narrative unique. Les scènes de vie familiale sont genuinement touchantes et drôles, et les combats — rares mais dévastateurs — ont d'autant plus d'impact.</p><p>Un des meilleurs manhwas de murim pour son humanité et son humour, indispensable pour qui cherche quelque chose de chaleureux dans un genre souvent très sérieux.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=peerless+dad+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=peerless+dad+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r6) { console.log("⚠️ Non trouvé : father-unrivaled"); } else { content = r6; patched++; console.log("✅ father-unrivaled (Peerless Dad)"); }

// ─── 7. The Undefeatable Swordsman ───────────────────────────────────────────
const cover7 = getCover(content, "the-undefeatable-swordsman");
const r7 = findAndReplace(content, "the-undefeatable-swordsman", `{
  slug: "the-undefeatable-swordsman",
  title: "The Undefeatable Swordsman",
  category: "manhwa",
  cover: "${cover7}",
  tags: "Action · Arts martiaux · Murim · Comédie",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Song Woo-Moon, fils d'un aubergiste et autrefois considéré comme simplement idiot, se réveille un jour avec un talent martial inégalé — le résultat de peintures mystiques qu'il observait depuis l'enfance. Ignorant lui-même l'ampleur de son pouvoir, il part à l'aventure dans le monde du murim avec une naïveté désarmante.",
  pros: ["Héros naïf et attachant dont l'ingénuité crée des situations comiques excellentes", "Puissance cachée bien gérée", "Ton léger qui contraste bien avec la violence du murim"],
  cons: ["Certains antagonistes peu mémorables", "Résolution de conflits parfois trop aisée"],
  reviewHtml: \`<p>The Undefeatable Swordsman mise sur un concept simple mais efficace : un héros qui ne comprend pas lui-même sa propre puissance. Cette ingénuité crée une comédie de situation constante — Song Woo-Moon résout des crises de vie-ou-mort avec la même décontraction qu'il ferait son travail à l'auberge, sans réaliser qu'il vient de battre un maître du murim.</p><p>Le manhwa sait équilibrer les moments comiques avec les séquences d'action, ces dernières étant d'autant plus impressionnantes que le héros les traverse sans effort apparent. L'univers murim est bien construit et sert de toile de fond cohérente pour les aventures.</p><p>Un manhwa murim plaisant et drôle, idéal pour une lecture légère avec un héros attachant dans sa naïveté totale.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=undefeatable+swordsman+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=undefeatable+swordsman+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r7) { console.log("⚠️ Non trouvé : the-undefeatable-swordsman"); } else { content = r7; patched++; console.log("✅ the-undefeatable-swordsman"); }

// ─── 8. Lightning Degree ─────────────────────────────────────────────────────
const cover8 = getCover(content, "masters-of-lightning-knives");
const r8 = findAndReplace(content, "masters-of-lightning-knives", `{
  slug: "masters-of-lightning-knives",
  title: "Lightning Degree",
  category: "manhwa",
  cover: "${cover8}",
  tags: "Action · Arts martiaux · Murim · Couteaux",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Ryu Tae Yang, fils d'un forgeron de lames, possède un talent exceptionnel pour les couteaux volants dans le monde du murim. Après la destruction de son clan par un ennemi puissant, il entame un voyage de maîtrise et de vengeance, perfectionnant l'art du couteau jusqu'à atteindre le sommet de sa discipline.",
  pros: ["Spécialisation couteaux volants — très rare dans le murim", "Combats nerveux et bien choreographiés", "Arc de vengeance mené avec rigueur"],
  cons: ["Thème de vengeance classique sans grands détours", "Certains personnages secondaires peu développés"],
  reviewHtml: \`<p>Lightning Degree se distingue dans la masse des manhwas de murim par sa spécialisation absolue : les couteaux volants. Alors que la plupart des séries du genre célèbrent l'épée ou le poing, ce manhwa exploite une arme rare et technique, ce qui donne aux combats une esthétique visuellement distinctive.</p><p>Ryu Tae Yang est un protagoniste déterminé et convaincant, et la progression de sa maîtrise des lames est bien construite. Les combats bénéficient d'une chorégraphie qui tire parti de la vitesse et de la précision des couteaux, créant des séquences d'action mémorables.</p><p>Un manhwa murim solide et original dans son angle d'attaque, recommandé pour les amateurs du genre qui cherchent quelque chose de différent de l'omniprésente voie de l'épée.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=lightning+degree+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=lightning+degree+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r8) { console.log("⚠️ Non trouvé : masters-of-lightning-knives"); } else { content = r8; patched++; console.log("✅ masters-of-lightning-knives (Lightning Degree)"); }

// ─── 9. The Demon Prince Goes to the Academy ─────────────────────────────────
const cover9 = getCover(content, "demon-king-of-the-royal-class");
const r9 = findAndReplace(content, "demon-king-of-the-royal-class", `{
  slug: "demon-king-of-the-royal-class",
  title: "The Demon Prince Goes to the Academy",
  category: "manhwa",
  cover: "${cover9}",
  tags: "Fantasy · Action · Académie · Isekai",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Un lecteur réincarné dans un roman de fantasy se retrouve dans le corps du Démon Seigneur final — le Boss absolu que le héros est supposé vaincre à la fin. Pour survivre, il décide de s'infiltrer dans l'académie royale sous un faux nom, espérant changer le déroulement prévu de l'histoire depuis l'intérieur.",
  pros: ["Concept de l'antagoniste principal infiltré parmi les héros", "Double vie tendue et constamment risquée", "Excellente gestion des personnages de l'académie"],
  cons: ["Certaines révélations prévisibles", "Arcs d'académie parfois trop classiques"],
  reviewHtml: \`<p>The Demon Prince Goes to the Academy joue un jeu intéressant avec les conventions du genre : le protagoniste EST le Big Bad final de l'histoire, mais il essaie désespérément de survivre en se faisant passer pour un étudiant ordinaire parmi les futurs héros censés le tuer.</p><p>Cette situation crée une tension permanente et savoureuse : chaque interaction avec les personnages principaux de l'histoire originale est un numéro d'équilibriste entre rester dans l'ombre et ne pas se faire démasquer. Le manhwa gère bien le cast de l'académie et l'ambiance collégiale tout en maintenant les enjeux cachés.</p><p>Un manhwa d'académie-isekai original, recommandé pour les amateurs du genre qui cherchent un protagoniste moralement ambigu et des situations tendues autour de l'identité secrète.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=demon+prince+academy+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=demon+prince+academy+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r9) { console.log("⚠️ Non trouvé : demon-king-of-the-royal-class"); } else { content = r9; patched++; console.log("✅ demon-king-of-the-royal-class (Demon Prince Academy)"); }

// ─── 10. Tutorial Tower of the Advanced Player ───────────────────────────────
const cover10 = getCover(content, "the-advanced-player-of-the-tutorial-tower");
const r10 = findAndReplace(content, "the-advanced-player-of-the-tutorial-tower", `{
  slug: "the-advanced-player-of-the-tutorial-tower",
  title: "Tutorial Tower of the Advanced Player",
  category: "manhwa",
  cover: "${cover10}",
  tags: "Action · Fantasy · Gaming · Hunter",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Kim Hyun, coincé pendant 12 ans dans la tour tutoriel censée introduire les nouveaux joueurs aux portails de monstres, est finalement libéré avec une puissance absolument démesurée. Dans un monde de chasseurs qui a évolué sans lui, il doit s'y réintégrer tout en utilisant des compétences acquises dans les couches les plus profondes du tutoriel.",
  pros: ["Concept du tutoriel infini bien exploité", "Compétences inattendues et créatives acquises dans le tutoriel", "Rythme d'action rapide et satisfaisant"],
  cons: ["Certains arcs du monde extérieur moins originaux", "Antagonistes parfois peu nuancés"],
  reviewHtml: \`<p>Tutorial Tower of the Advanced Player joue sur une idée déjà explorée — le héros coincé dans un tutoriel — mais avec une exécution fraîche. Kim Hyun ressort après 12 ans avec des compétences absurdes obtenues en épuisant les ressources d'une tour censée être juste introductive, ce qui crée des combats inventifs et souvent drôles.</p><p>Le manhwa est honnête dans son ambition : c'est du power fantasy efficace avec un héros surpuissant qui redécouvre le monde, mais la créativité dans l'utilisation de ses compétences de tutoriel compense ce que le concept a de trop familier. Le rythme est rapide et les combats bien construits.</p><p>Un manhwa d'action-gaming plaisant et bien exécuté, recommandé pour les amateurs de montées en puissance post-isolation et de héros aux compétences inattendues.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=tutorial+tower+advanced+player+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=tutorial+tower+advanced+player+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r10) { console.log("⚠️ Non trouvé : the-advanced-player-of-the-tutorial-tower"); } else { content = r10; patched++; console.log("✅ the-advanced-player-of-the-tutorial-tower"); }

// ─── 11. How to Live as a Villain ────────────────────────────────────────────
const cover11 = getCover(content, "akdangi-saraganeun-beop");
const r11 = findAndReplace(content, "akdangi-saraganeun-beop", `{
  slug: "akdangi-saraganeun-beop",
  title: "How to Live as a Villain",
  category: "manhwa",
  cover: "${cover11}",
  tags: "Fantasy · Action · Anti-héros · Isekai",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Kim Kyung-ho se réincarne dans un roman de fantasy en tant que villain mineur condamné à mourir tôt. Refusant d'accepter ce destin, il décide d'embrasser entièrement son rôle de villain — manipuler, trahir, utiliser tous les moyens nécessaires — pour survivre et éventuellement prospérer dans ce monde hostile.",
  pros: ["Anti-héros assumé qui ne cherche pas la rédemption", "Stratégie de survie par la manipulation bien exécutée", "Tension permanente autour des personnages qu'il doit manipuler"],
  cons: ["Héros difficile à apprécier pour les lecteurs attachés aux protagonistes moraux", "Certains arcs de manipulation prévisibles"],
  reviewHtml: \`<p>How to Live as a Villain adopte une approche décomplexée du villain isekai : le héros ne cherche pas à être gentil malgré lui, il assume pleinement sa nature de manipulateur et stratège sans scrupules. Cette honnêteté narrative est rafraîchissante dans un genre qui force souvent ses protagonistes à des rédemptions artificielles.</p><p>Le manhwa est particulièrement réussi dans ses arcs de manipulation — voir Kim Kyung-ho tisser ses intrigues avec plusieurs couches d'avance est constamment plaisant. Les situations de danger réel sont bien gérées, et la tension autour des personnages manipulés tient bien la route.</p><p>Un manhwa d'anti-héros bien construit, recommandé pour qui apprécie les protagonistes moralement complexes et les récits de survie par l'intelligence plutôt que par la force brute.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=how+to+live+villain+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=how+to+live+villain+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r11) { console.log("⚠️ Non trouvé : akdangi-saraganeun-beop"); } else { content = r11; patched++; console.log("✅ akdangi-saraganeun-beop (How to Live as a Villain)"); }

// ─── 12. Spirit Farmer ────────────────────────────────────────────────────────
const cover12 = getCover(content, "farmer-of-spirits");
const r12 = findAndReplace(content, "farmer-of-spirits", `{
  slug: "farmer-of-spirits",
  title: "Spirit Farmer",
  category: "manhwa",
  cover: "${cover12}",
  tags: "Fantasy · Farming · Aventure · Esprits",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Dans un monde où les monstres et les esprits coexistent avec les humains, un jeune homme possède le don rare de cultiver et d'élever des esprits comme un fermier cultive des plantes. Ce pouvoir atypique, méprisé au départ, va s'avérer d'une versatilité et d'une puissance insoupçonnées.",
  pros: ["Concept agricole appliqué aux esprits — très original", "Progression créative et imprévisible", "Ambiance distincte des manhwas d'action habituels"],
  cons: ["Rythme plus lent que les manhwas d'action purs", "Système des esprits parfois complexe à suivre"],
  reviewHtml: \`<p>Spirit Farmer joue sur une idée charmante et originale : appliquer les mécaniques de la vie agricole au monde des esprits. Le protagoniste ne se bat pas au sens classique — il cultive, fait pousser, et développe des esprits avec la même attention qu'un jardinier donne à ses plantes. Cette approche non-conventionnelle dans un genre saturé d'action directe est extrêmement rafraîchissante.</p><p>La progression est créative et souvent surprenante, les esprits ayant des capacités variées qui évoluent en fonction des soins reçus. L'atmosphère du manhwa est douce et contemplative, ce qui en fait une lecture agréable pour décompresser.</p><p>Un manhwa de fantasy agricole-spirits unique et bien exécuté, recommandé pour ceux qui cherchent quelque chose de différent des portails de monstres habituels.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=spirit+farmer+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=spirit+farmer+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r12) { console.log("⚠️ Non trouvé : farmer-of-spirits"); } else { content = r12; patched++; console.log("✅ farmer-of-spirits (Spirit Farmer)"); }

// ─── 13. Villain to Kill ──────────────────────────────────────────────────────
const cover13 = getCover(content, "villain-to-kill");
const r13 = findAndReplace(content, "villain-to-kill", `{
  slug: "villain-to-kill",
  title: "Villain to Kill",
  category: "manhwa",
  cover: "${cover13}",
  tags: "Action · Fantasy · Pouvoirs · Anti-héros",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Cassian, un héros au statut de saint, se retrouve mort et réincarné dans le corps d'un villain — un être aux pouvoirs sombres que les héros sont censés combattre. Avec la mémoire de sa vie précédente, il doit décider s'il va jouer le jeu du villain, essayer de revenir à ses valeurs, ou trouver une troisième voie.",
  pros: ["Inversion héros/villain très bien exécutée", "Dilemme moral autour de l'utilisation de pouvoirs sombres", "Action intense avec pouvoirs villain créatifs"],
  cons: ["Certains arcs de transition entre les deux identités s'étirent", "Quelques antagonistes peu nuancés"],
  reviewHtml: \`<p>Villain to Kill propose un angle rare : non pas un lecteur réincarné en villain, mais un vrai héros qui se retrouve dans le corps d'un villain. Cette différence donne au manhwa une profondeur morale que le concept standard n'a pas — Cassian a véritablement des valeurs de héros, et la confrontation avec des pouvoirs qui le définissent désormais comme une menace est fascinante.</p><p>Le manhwa gère bien la tension entre l'identité passée et le nouveau rôle imposé. Les pouvoirs villain sont bien imaginés et les combats qui en découlent sont visuellement impressionnants. La question du choix moral — utiliser ces pouvoirs sombres pour faire le bien, ou résister ? — reste présente tout au long.</p><p>Un manhwa d'action de grande qualité avec une profondeur morale peu commune dans le genre, recommandé à ceux qui aiment les protagonistes tiraillés entre deux identités.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=villain+to+kill+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=villain+to+kill+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r13) { console.log("⚠️ Non trouvé : villain-to-kill"); } else { content = r13; patched++; console.log("✅ villain-to-kill"); }

// ─── 14. The Twins' New Life ──────────────────────────────────────────────────
const cover14 = getCover(content, "the-twins-new-life");
const r14 = findAndReplace(content, "the-twins-new-life", `{
  slug: "the-twins-new-life",
  title: "The Twin Siblings' New Life",
  category: "manhwa",
  cover: "${cover14}",
  tags: "Fantasy · Isekai · Famille · Drame",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Des jumeaux maltraités par leur famille d'origine dans un monde fantastique se retrouvent adoptés par un duc mystérieux. Commençant une nouvelle vie dans un foyer qui leur offre enfin chaleur et sécurité, ils doivent apprendre à faire confiance et à guérir des blessures laissées par leur passé cruel.",
  pros: ["Dimension guérison émotionnelle très bien traitée", "Relation jumeaux touchante et bien développée", "Figure parentale adoptive attachante"],
  cons: ["Rythme très doux — peu adapté aux amateurs d'action", "Famille d'origine trop clairement vilaine"],
  reviewHtml: \`<p>The Twin Siblings' New Life est un manhwa d'isekai feel-good centré sur la guérison émotionnelle de deux enfants maltraités. Le manhwa s'intéresse à la reconstruction — comment des êtres brisés apprennent à nouveau à faire confiance, à recevoir de l'affection, à se sentir en sécurité — avec une sensibilité et une douceur rares.</p><p>Les jumeaux sont écrits avec une vraie profondeur pour des personnages enfants, et leurs réactions réalistes aux tentatives d'affection du duc adoptif sont à la fois touchantes et déchirantes. Le manhwa évite les résolutions trop rapides — la guérison prend du temps, et le récit respecte cette réalité.</p><p>Un manhwa isekai familial doux et émotionnellement satisfaisant, recommandé pour qui cherche une lecture tendre sur la guérison et la construction de liens familiaux sains.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=twin+siblings+new+life+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=twin+siblings+new+life+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r14) { console.log("⚠️ Non trouvé : the-twins-new-life"); } else { content = r14; patched++; console.log("✅ the-twins-new-life"); }

// ─── 15. A Modern Man Who Got Transmigrated Into the Murim World ──────────────
const cover15 = getCover(content, "murime-tteoreojin-hyeondaein");
const r15 = findAndReplace(content, "murime-tteoreojin-hyeondaein", `{
  slug: "murime-tteoreojin-hyeondaein",
  title: "A Modern Man Who Got Transmigrated Into the Murim World",
  category: "manhwa",
  cover: "${cover15}",
  tags: "Action · Arts martiaux · Murim · Comédie",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Un homme ordinaire du XXIe siècle se retrouve transporté dans le monde du murim coréen classique. Sans connaissance des arts martiaux ni des codes du murim, il doit apprendre à survivre dans un monde où la force physique et les techniques martiales gouvernent tout, en apportant avec lui la logique et les connaissances du monde moderne.",
  pros: ["Comédie de dépaysement culture moderne/murim très bien jouée", "Connaissance moderne utilisée créativement dans le contexte murim", "Héros ordinaire attachant et réaliste"],
  cons: ["Concept partagé avec d'autres titres", "Certains arcs d'apprentissage s'étirent"],
  reviewHtml: \`<p>A Modern Man Who Got Transmigrated Into the Murim World joue avec une idée simple — la confrontation entre la logique du monde moderne et les codes du murim — mais l'exécute avec un humour constant et bien calibré. Le héros, homme ordinaire sans aucune formation martiale, apporte un regard externe décalé sur des conventions que les habitants du murim considèrent comme allant de soi.</p><p>Cette perspective extérieure génère des situations comiques naturelles : négocier avec des bandits en utilisant la logique commerciale moderne, appliquer la connaissance des premiers secours à des blessures de combat, ou utiliser la chimie basique pour créer des avantages tactiques. Le manhwa sait exploiter ce filon avec inventivité.</p><p>Un manhwa murim-comédie original et léger, recommandé pour les amateurs du genre qui cherchent un angle frais sur un univers bien établi.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=modern+man+transmigrated+murim+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=modern+man+transmigrated+murim+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r15) { console.log("⚠️ Non trouvé : murime-tteoreojin-hyeondaein"); } else { content = r15; patched++; console.log("✅ murime-tteoreojin-hyeondaein (Modern Man Murim)"); }

// ─── Entrée manuelle ──────────────────────────────────────────────────────────

// 16. I Am the Villainess, So I Am Taming the Final Boss
const entry16 = `{
  slug: "i-am-the-villainess-so-i-am-taming-the-final-boss",
  title: "I Am the Villainess, So I Am Taming the Final Boss",
  category: "manhwa",
  cover: "",
  tags: "Fantasy · Romance · Isekai · Comédie",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Aileen d'Autriche se réveille dans un otome game en tant que villainess qui doit être éliminée par le prince. Pour survivre, elle décide d'une stratégie audacieuse : apprivoiser Claude, le Boss Final du jeu — un démon mi-humain qui est censé détruire le monde à la fin — et en faire son allié. Ce qui commence comme une stratégie de survie tourne rapidement à la romance.",
  pros: ["Concept d'apprivoisement du boss final vraiment original", "Héroïne audacieuse et drôle", "Romance avec le boss final développée avec beaucoup de charme"],
  cons: ["Résolution de conflits parfois trop facile grâce à l'audace de l'héroïne", "Certains antagonistes peu mémorables"],
  reviewHtml: \`<p>I Am the Villainess, So I Am Taming the Final Boss est l'un des manhwas villainess les plus inventifs de ces dernières années. L'héroïne ne cherche pas à survivre en se faisant discreta ou en manipulant le prince — elle va directement apprivoiser le monstre le plus dangereux du jeu, avec une effronterie qui désarçonne absolument tout le monde.</p><p>Claude, le boss final mi-démon, réagit à cette approche avec une incompréhension qui tourne rapidement en fascination, et leur relation est l'un des couples les plus charmants et originaux du genre villainess. Le manhwa sait alterner humour et moments de tendresse avec un timing parfait.</p><p>Un must-read du genre villainess-isekai, recommandé pour son héroïne inoubliable, son concept original et sa romance délicieuse.</p>\`,
  shops: [],
  streaming: [],
  live: []
}`;
content = appendEntry(content, entry16);
patched++; console.log("✅ i-am-the-villainess-so-i-am-taming-the-final-boss (manuel)");

writeFileSync(FILE, content, "utf-8");
console.log(`\n✅ ${patched} entrées patchées/ajoutées`);
