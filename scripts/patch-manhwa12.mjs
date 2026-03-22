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

// ─── 1. The Second Coming of Gluttony ────────────────────────────────────────
const cover1 = getCover(content, "the-second-coming-of-gluttony");
const r1 = findAndReplace(content, "the-second-coming-of-gluttony", `{
  slug: "the-second-coming-of-gluttony",
  title: "The Second Coming of Gluttony",
  category: "manhwa",
  cover: "${cover1}",
  tags: "Action · Fantasy · Regression · Prophecy",
  stars: 5,
  addedAt: "2026-03-22",
  synopsis: "Seol Jihu, un homme ruiné par ses vices, reçoit une vision prophétique du futur d'un autre monde où il a tout perdu. Armé de cette connaissance, il accepte l'invitation à ce monde alternatif peuplé de monstres et de classes, déterminé cette fois à ne pas répéter ses erreurs et à devenir quelqu'un de valeur.",
  pros: ["Narration dense et ambitieuse", "Développement de personnage exceptionnel sur la durée", "Worldbuilding riche avec factions et politique"],
  cons: ["Long à démarrer — les premiers arcs sont posés", "Protagoniste difficile à apprécier au début"],
  reviewHtml: \`<p>The Second Coming of Gluttony est une oeuvre ambitieuse qui prend son temps pour construire quelque chose de durable. Seol Jihu n'est pas le héros classique — c'est un raté doté d'un talent brut, et regarder sa transformation progressive est l'un des plaisirs les plus satisfaisants du genre.</p><p>Le manhwa se distingue par la richesse de son worldbuilding : le Paradis, monde alternatif au coeur de l'histoire, est construit avec une cohérence interne rare, peuplé de factions avec des motivations complexes et d'un système de classes bien pensé. La narration ne sacrifie jamais la profondeur pour la facilité.</p><p>Un des manhwas de fantasy-regression les plus respectés du genre, indispensable pour les lecteurs patients qui cherchent une oeuvre ambitieuse et récompensant leur investissement.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=second+coming+gluttony+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=second+coming+gluttony+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r1) { console.log("⚠️ Non trouvé : the-second-coming-of-gluttony"); } else { content = r1; patched++; console.log("✅ the-second-coming-of-gluttony"); }

// ─── 2. Trash of the Count's Family ──────────────────────────────────────────
const cover2 = getCover(content, "lout-of-counts-family");
const r2 = findAndReplace(content, "lout-of-counts-family", `{
  slug: "lout-of-counts-family",
  title: "Trash of the Count's Family",
  category: "manhwa",
  cover: "${cover2}",
  tags: "Action · Aventure · Fantasy · Comédie",
  stars: 5,
  addedAt: "2026-03-22",
  synopsis: "Un lecteur lambda se réveille dans le corps de Cale Henituse, un personnage secondaire méprisé dans un roman de fantasy — un « inutile » noble destiné à se faire rosser par le héros. Son unique plan : récupérer quelques objets précieux, vivre tranquillement à l'écart du conflit principal, et éviter toute la violence prévue. Evidemment, rien ne se passe comme prévu.",
  pros: ["Héros unique qui refuse activement d'être le protagoniste", "Humour constant et excellemment calibré", "Cast secondaire mémorable et très attachant"],
  cons: ["Certains arcs de milieu de série s'étirent", "Le rythme accélère beaucoup vers la fin"],
  reviewHtml: \`<p>Trash of the Count's Family est un tour de force du genre isekai. Son concept de base — un homme qui veut être le lâche de l'histoire et y échoue systématiquement — est simple mais exécuté avec une maîtrise comique et narrative absolue. Cale Henituse accumule les pouvoirs et les alliés en cherchant à s'en débarrasser, créant des situations qui font mouche à chaque fois.</p><p>Ce qui distingue vraiment le manhwa, c'est son cast : chaque personnage secondaire qui rejoint Cale est immédiatement attachant, avec sa propre personnalité et son propre arc. La dynamique de groupe est l'un des meilleurs de tout le genre manhwa.</p><p>Un incontournable absolu du manhwa d'isekai comique, à mettre entre toutes les mains. L'une des meilleures séries actuellement en publication.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=trash+count+family+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=trash+count+family+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r2) { console.log("⚠️ Non trouvé : lout-of-counts-family"); } else { content = r2; patched++; console.log("✅ lout-of-counts-family (Trash of Count's Family)"); }

// ─── 3. The Legendary Moonlight Sculptor ─────────────────────────────────────
const cover3 = getCover(content, "the-legendary-moonlight-sculptor");
const r3 = findAndReplace(content, "the-legendary-moonlight-sculptor", `{
  slug: "the-legendary-moonlight-sculptor",
  title: "The Legendary Moonlight Sculptor",
  category: "manhwa",
  cover: "${cover3}",
  tags: "Action · Fantasy · Gaming · Artisanat",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Lee Hyun, un jeune homme pauvre qui joue aux jeux pour survivre, se retrouve dans le VRMMO Royal Road avec la classe la moins populaire : sculpteur. Plutôt que de changer de personnage, il décide de faire de cette classe sous-estimée la plus puissante du jeu, en exploitant ses sculptures pour des effets dévastateurs.",
  pros: ["Concept artisanat-combat très original", "Progression long-terme extrêmement satisfaisante", "Humour décalé autour de la pauvreté et de l'avarice du héros"],
  cons: ["Très long — la série est massive", "Certains arcs de gaming peuvent sembler répétitifs"],
  reviewHtml: \`<p>The Legendary Moonlight Sculptor est une institution du manhwa de gaming. Adaptée d'un roman web coréen culte, la série suit le sculpteur Lee Hyun dans sa quête de domination du VRMMO Royal Road avec la classe « la moins utile » du jeu.</p><p>Le manhwa excelle dans la progression long-terme : voir Lee Hyun accumuler des compétences, de la réputation et de la puissance sur des centaines de chapitres est immensément satisfaisant. L'humour autour de son avarice légendaire est omniprésent et fonctionne à merveille. Les séquences de sculpture créatrice, transformées en armes ou alliés, sont particulièrement inventives.</p><p>Un marathon de lecture qui en vaut l'investissement, idéal pour les amateurs de gaming-fantasy et de progression ultra-longue durée.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=legendary+moonlight+sculptor+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=legendary+moonlight+sculptor+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r3) { console.log("⚠️ Non trouvé : the-legendary-moonlight-sculptor"); } else { content = r3; patched++; console.log("✅ the-legendary-moonlight-sculptor"); }

// ─── 4. Arcane Sniper ────────────────────────────────────────────────────────
const cover4 = getCover(content, "mystic-musketeer");
const r4 = findAndReplace(content, "mystic-musketeer", `{
  slug: "mystic-musketeer",
  title: "Arcane Sniper",
  category: "manhwa",
  cover: "${cover4}",
  tags: "Action · Fantasy · Gaming · Sniper",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Ha LeeHa, accidentellement devenu paraplégique, trouve dans le VRMMO Warlord une seconde vie. Il choisit la classe sniper — rare et difficile — et devient avec le temps le tireur de précision le plus redouté du jeu. Dans le monde réel, sa vie prend aussi une tournure inattendue.",
  pros: ["Angle sniper dans un MMO — très peu traité dans le genre", "Bonne gestion du parallèle vie réelle / jeu", "Action tactique et bien construite"],
  cons: ["Démarrage lent", "Certains aspects du jeu peu développés"],
  reviewHtml: \`<p>Arcane Sniper (Mystic Musketeer) prend un angle peu exploité dans le manhwa de gaming : le personnage du tireur à longue portée, qui combat à distance avec réflexion et précision plutôt que dans la mêlée. Ha LeeHa, joueur paraplégique dans la vie réelle, trouve dans cette classe une liberté de mouvement qu'il ne peut plus avoir autrement.</p><p>Cette dimension de la vie réelle donne au manhwa une profondeur émotionnelle au-delà du simple power fantasy. Les combats à distance sont bien mis en scène, et la progression tactique du héros est cohérente et satisfaisante. L'angle sniper apporte une fraîcheur bienvenue dans un genre souvent dominé par corps-à-corps et magie.</p><p>Un manhwa gaming-action original et bien écrit, recommandé pour les amateurs du genre qui cherchent quelque chose de différent des habituels chasseurs de donjons.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=arcane+sniper+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=arcane+sniper+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r4) { console.log("⚠️ Non trouvé : mystic-musketeer"); } else { content = r4; patched++; console.log("✅ mystic-musketeer (Arcane Sniper)"); }

// ─── 5. Solo Bug Player ───────────────────────────────────────────────────────
const cover5 = getCover(content, "solo-glitch-player");
const r5 = findAndReplace(content, "solo-glitch-player", `{
  slug: "solo-glitch-player",
  title: "Solo Bug Player",
  category: "manhwa",
  cover: "${cover5}",
  tags: "Action · Fantasy · Gaming · Système",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Dans un monde de VR-gaming où les portails de monstres ont fait irruption dans la réalité, Kang Junho découvre qu'il peut exploiter des glitches et bugs du système pour obtenir des pouvoirs que personne d'autre ne possède. Plutôt qu'un système ordinaire, il a accès à tous les exploits que les développeurs ont laissés dans le jeu.",
  pros: ["Concept du bug-exploit en système de jeu, vraiment original", "Imagination débordante dans les capacités obtenues", "Humour meta sur les mécaniques de jeu"],
  cons: ["Logique des bugs parfois incohérente", "Certains antagonistes peu développés"],
  reviewHtml: \`<p>Solo Bug Player adopte une approche méta et décalée du manhwa de système : le héros ne gagne pas de pouvoirs en tuant des monstres, il les obtient en exploitant des bugs et glitches du système comme un speedrunner de jeu vidéo. Ce concept unique génère des pouvoirs inattendus et souvent absurdes, ce qui donne au manhwa un humour constant.</p><p>La progression est imprévisible et rafraîchissante — on ne sait jamais quel exploit le héros va exploiter ensuite. Les références aux mécaniques de jeu vidéo parlent directement aux gamers sans aliéner les non-initiés. Un ton léger et inventif qui se distingue dans un genre parfois trop sérieux.</p><p>Un manhwa gaming original et drôle, parfait pour les lecteurs qui aiment les concepts décalés et l'humour meta dans leurs récits d'action.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=solo+bug+player+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=solo+bug+player+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r5) { console.log("⚠️ Non trouvé : solo-glitch-player"); } else { content = r5; patched++; console.log("✅ solo-glitch-player (Solo Bug Player)"); }

// ─── 6. Player Who Returned 10000 Years Later ────────────────────────────────
const cover6 = getCover(content, "after-ten-millennia-in-hell");
const r6 = findAndReplace(content, "after-ten-millennia-in-hell", `{
  slug: "after-ten-millennia-in-hell",
  title: "Player Who Returned 10,000 Years Later",
  category: "manhwa",
  cover: "${cover6}",
  tags: "Action · Fantasy · Démons · Comeback",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Oh Kang-Woo a survécu 10 000 ans aux enfers en dévorant les âmes de démons pour rester en vie. Quand il retourne enfin sur Terre, il découvre un monde de portails et de chasseurs qui s'est développé en son absence. Avec un pouvoir démoniaque qui dépasse tout ce que les humains peuvent imaginer, il entend retrouver sa vie d'avant.",
  pros: ["Backstory unique — 10 000 ans en enfer crée un héros vraiment différent", "Puissance à l'échelle démoniaque immédiatement établie", "Bonne tension entre nature démoniaque et désir d'humanité"],
  cons: ["Powerscaling peut rendre les enjeux faibles au début", "Certains arcs secondaires peu mémorables"],
  reviewHtml: \`<p>Player Who Returned 10,000 Years Later joue sur une temporalité rarissime dans le genre : un héros qui n'a pas passé quelques années dans un autre monde, mais dix millénaires dans les enfers. Cette absence absurde a forgé Oh Kang-Woo en quelque chose qui n'est plus vraiment humain — et le manhwa explore cette tension de manière intéressante.</p><p>Les combats sont spectaculaires dès le début, le niveau de puissance brut du héros étant établi sans ambiguïté. Ce qui distingue le manhwa de ses pairs power-fantasy, c'est la dimension psychologique : un homme qui veut redevenir humain après avoir dû se comporter comme un démon pendant des millénaires.</p><p>Un manhwa d'action démonique convaincant, recommandé pour les amateurs de héros à la puissance extrême avec une vraie profondeur de backstory.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=player+returned+10000+years+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=player+returned+10000+years+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r6) { console.log("⚠️ Non trouvé : after-ten-millennia-in-hell"); } else { content = r6; patched++; console.log("✅ after-ten-millennia-in-hell (Player 10000 Years)"); }

// ─── 7. Mythic Item Obtained ──────────────────────────────────────────────────
const cover7 = getCover(content, "mythic-item-obtained");
const r7 = findAndReplace(content, "mythic-item-obtained", `{
  slug: "mythic-item-obtained",
  title: "I Obtained a Mythic Item",
  category: "manhwa",
  cover: "${cover7}",
  tags: "Action · Fantasy · Gaming · Hunter",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Raider de bas rang moqué par tous, Kim Jaehyun obtient par accident un objet mythique de rang SSS — le plus rare et puissant du système. Avec cet objet comme catalyseur, il entame une ascension fulgurante, défiant les guildes et les chasseurs d'élite qui l'avaient jadis ignoré.",
  pros: ["Progression rapide et très satisfaisante", "Objets mythiques utilisés de manière créative", "Revanche sociale bien exécutée"],
  cons: ["Formule assez classique du genre", "Certains personnages antagonistes peu nuancés"],
  reviewHtml: \`<p>I Obtained a Mythic Item (Mythic Item Obtained) livre exactement ce qu'il promet : la montée en puissance d'un underdog grâce à un objet légendaire et la revanche sur ceux qui l'avaient méprisé. Le manhwa ne réinvente pas le genre, mais l'exécute avec suffisamment d'entrain pour être très plaisant à lire.</p><p>Les mécaniques d'objet mythique sont bien exploitées — l'auteur imagine des capacités créatives qui vont au-delà du simple boost de stats. Le rythme est rapide, le héros progressant à une vitesse satisfaisante, et les confrontations avec les guildes rivales créent une tension bien dosée.</p><p>Un manhwa hunter-system solide et divertissant, parfait pour une lecture rapide et satisfaisante dans le genre.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=mythic+item+obtained+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=mythic+item+obtained+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r7) { console.log("⚠️ Non trouvé : mythic-item-obtained"); } else { content = r7; patched++; console.log("✅ mythic-item-obtained"); }

// ─── 8. Duke Pendragon ────────────────────────────────────────────────────────
const cover8 = getCover(content, "duke-pendragon-master-of-the-white-dragon");
const r8 = findAndReplace(content, "duke-pendragon-master-of-the-white-dragon", `{
  slug: "duke-pendragon-master-of-the-white-dragon",
  title: "Duke Pendragon",
  category: "manhwa",
  cover: "${cover8}",
  tags: "Action · Fantasy · Dragon · Chevalerie",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Raven Valt, soldat brutal condamné à mourir dans les mines, se retrouve transféré dans le corps d'Alan Pendragon, héritier d'un duché lié à un dragon blanc légendaire. Il doit apprendre à jouer son rôle de duc tout en gérant les menaces internes et externes qui pèsent sur sa maison, avec le soutien inattendu du dragon fantôme Soldrake.",
  pros: ["Dragon fantôme Soldrake — relation unique et mémorable", "Ambiance chevaleresque médiévale bien construite", "Héros pragmatique au caractère fort"],
  cons: ["Rythme parfois irrégulier", "Certaines arcs politiques s'étirent"],
  reviewHtml: \`<p>Duke Pendragon se distingue dans le genre des manhwas de possession de corps noble par l'originalité de sa relation centrale : le duo entre Raven Valt et le dragon fantôme Soldrake. Cette présence dracologique constante donne au manhwa une atmosphère unique, à la fois mystérieuse et puissante.</p><p>Le héros est un soldat durci transplanté dans les codes de la noblesse, et cette inadéquation est exploitée avec humour et tension. L'univers médiéval-fantastique est soigné, les combats avec les capacités du dragon sont visuellement impressionnants, et les intrigues ducales tiennent bien la route.</p><p>Un manhwa fantasy-médiéval de qualité, recommandé pour les amateurs de dragons, de noblesse et d'un héros qui préfère la force brute aux politesses aristrocratiques.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=duke+pendragon+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=duke+pendragon+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r8) { console.log("⚠️ Non trouvé : duke-pendragon-master-of-the-white-dragon"); } else { content = r8; patched++; console.log("✅ duke-pendragon-master-of-the-white-dragon"); }

// ─── 9. The Golden Spoon ─────────────────────────────────────────────────────
const cover9 = getCover(content, "the-golden-spoon");
const r9 = findAndReplace(content, "the-golden-spoon", `{
  slug: "the-golden-spoon",
  title: "The Golden Spoon",
  category: "manhwa",
  cover: "${cover9}",
  tags: "Drame · Regression · École · Social",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Lee Seung-cheon, né dans une famille pauvre, reçoit une cuillère en or magique qui lui permet d'échanger sa vie contre celle d'un enfant de milliardaire. Vivant désormais dans la peau d'un élève de famille ultra-riche, il doit s'adapter à un monde radicalement différent tout en gérant les conséquences de ce choix.",
  pros: ["Critique sociale acérée sur les inégalités coréennes", "Tension morale autour de l'échange d'identité", "Adaptation drama réussie — le manhwa est à la hauteur"],
  cons: ["Rythme parfois haché entre les deux vies", "Certains arcs scolaires trop convenus"],
  reviewHtml: \`<p>The Golden Spoon est un manhwa de critique sociale déguisé en récit de regression. La cuillère en or — symbole en Corée des enfants nés riches — devient un objet littéral qui permet d'échanger sa vie. Cette métaphore filée avec intelligence donne au manhwa une profondeur rare dans le genre.</p><p>Le manhwa excelle dans la représentation des inégalités de classe coréennes : les différences de traitement, d'opportunités et de mentalités entre familles pauvres et riches sont dépeintes avec un réalisme saisissant. Les dilemmes moraux autour de l'échange sont constamment bien posés.</p><p>Un manhwa socialement engagé et narrativement solide, indispensable pour qui s'intéresse à la société coréenne et apprécie les récits à dimension morale.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=golden+spoon+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=golden+spoon+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r9) { console.log("⚠️ Non trouvé : the-golden-spoon"); } else { content = r9; patched++; console.log("✅ the-golden-spoon"); }

// ─── 10. 100th Regression of the Max-Level Player ────────────────────────────
const cover10 = getCover(content, "the-100th-regression-of-the-max-level-player");
const r10 = findAndReplace(content, "the-100th-regression-of-the-max-level-player", `{
  slug: "the-100th-regression-of-the-max-level-player",
  title: "100th Regression of the Max-Level Player",
  category: "manhwa",
  cover: "${cover10}",
  tags: "Action · Fantasy · Gaming · Regression",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Ryu Min a régressé 99 fois dans un jeu mortel imposé à l'humanité entière, mourant à chaque fois malgré tout. Au début de sa centième tentative, il part avec une connaissance absolue du jeu, une maîtrise parfaite de chaque niveau, et la détermination de réussir à tout prix cette dernière chance.",
  pros: ["Concept de la centième tentative — tension maximale dès le début", "Héros ultra-préparé dont les plans sont plaisants à voir", "Action rythmée et spectaculaire"],
  cons: ["Peu de surprises vu l'omniscience du héros", "Personnages secondaires parfois sacrifiés au profit de l'action"],
  reviewHtml: \`<p>100th Regression of the Max-Level Player arrive avec un concept fort : après 99 échecs, c'est la dernière chance. Cette tension existentielle de départ donne au manhwa une urgence permanente, même quand le héros écrase ses adversaires avec une facilité déconcertante — parce qu'on sait que ça ne peut pas durer.</p><p>Le héros est une machine à guerre optimisée par 99 vies d'expérience, et voir ses plans se déployer avec une précision d'horlogerie est constamment satisfaisant. Les combats sont bien construits et visuellement spectaculaires. Le manhwa sait aussi ménager des moments de tension véritable quand des variables inconnues entrent en jeu.</p><p>Un manhwa d'action-gaming très efficace, recommandé pour les amateurs de héros omniscients et de power fantasy avec des enjeux bien posés.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=100th+regression+max+level+player", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=100th+regression+max+level+player+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r10) { console.log("⚠️ Non trouvé : the-100th-regression-of-the-max-level-player"); } else { content = r10; patched++; console.log("✅ the-100th-regression-of-the-max-level-player"); }

// ─── 11. Infinite Leveling: Murim ────────────────────────────────────────────
const cover11 = getCover(content, "infinite-leveling-murim");
const r11 = findAndReplace(content, "infinite-leveling-murim", `{
  slug: "infinite-leveling-murim",
  title: "Infinite Leveling: Murim",
  category: "manhwa",
  cover: "${cover11}",
  tags: "Action · Arts martiaux · Murim · Système",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Dan Woo-hyun est un guerrier médiocre dans le monde du murim, méprisé par tous. Il obtient un système qui lui permet de niveauter à l'infini en accomplissant des quêtes, une progression sans plafond qui va lui permettre de s'élever bien au-delà de tous les grands maîtres du murim.",
  pros: ["Fusion murim et système RPG très bien équilibrée", "Progression ascendante extrêmement satisfaisante", "Antagonistes variés et système de rangs bien établi"],
  cons: ["Les premiers arcs sont classiques", "Certains arcs de tournoi s'étirent"],
  reviewHtml: \`<p>Infinite Leveling: Murim réussit brillamment l'équation murim + système RPG. Dan Woo-hyun part du niveau le plus bas — moqué même par les serviteurs — et son ascension fulgurante est l'un des plaisirs les plus purs que peut offrir le manhwa de progression.</p><p>Ce qui différencie ce titre de ses nombreux concurrents, c'est la cohérence de son système de progression dans le contexte murim : les quêtes sont adaptées au monde des arts martiaux, les niveaux ont du sens, et la montée en puissance est toujours liée à un effort et une compréhension plus profonde des arts de combat.</p><p>Un manhwa murim-système parmi les meilleurs disponibles, incontournable pour les amateurs des deux genres.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=infinite+leveling+murim+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=infinite+leveling+murim+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r11) { console.log("⚠️ Non trouvé : infinite-leveling-murim"); } else { content = r11; patched++; console.log("✅ infinite-leveling-murim"); }

// ─── 12. 66,666 Years: Advent of the Dark Mage ────────────────────────────────
const cover12 = getCover(content, "66666-years-advent-of-the-dark-mage");
const r12 = findAndReplace(content, "66666-years-advent-of-the-dark-mage", `{
  slug: "66666-years-advent-of-the-dark-mage",
  title: "The Dark Magician Transmigrates After 66666 Years",
  category: "manhwa",
  cover: "${cover12}",
  tags: "Action · Fantasy · Magie · Comeback",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Le mage noir le plus puissant du monde, banni et scellé par les dieux pendant 66 666 ans, se réincarne enfin dans le corps d'un jeune garçon de petite noblesse. Avec une connaissance magique de dizaines de millénaires et une patience cultivée dans l'isolement, il entend reprendre sa place dans un monde transformé.",
  pros: ["Backstory impressionnant qui établit immédiatement le poids du héros", "Magie noire unique et puissante bien utilisée", "Retour de légende bien mis en scène"],
  cons: ["Progression parfois trop facile vu la puissance du héros", "Certains antagonistes peu crédibles face au héros"],
  reviewHtml: \`<p>The Dark Magician Transmigrates After 66666 Years joue sur un concept similaire à Player Who Returned 10,000 Years Later, mais avec un angle magie noire qui lui confère une atmosphère bien distincte. Le héros revenant après une période absurde a une puissance et une perspective qui dépassent tout ce que les personnages actuels peuvent comprendre.</p><p>Le manhwa exploite bien l'idée du retour de légende : des humains qui connaissent l'histoire de ce mage noir légendaire, la terreur qu'il inspirait, et la révélation progressive que le jeune garçon discret est en réalité cette légende. La magie noire est représentée avec une esthétique visuelle marquante.</p><p>Un manhwa fantasy comeback solide avec un excellent concept de base et une atmosphère sombre bien maîtrisée.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=dark+magician+66666+years+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=dark+magician+66666+years+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r12) { console.log("⚠️ Non trouvé : 66666-years-advent-of-the-dark-mage"); } else { content = r12; patched++; console.log("✅ 66666-years-advent-of-the-dark-mage"); }

// ─── 13. Estio ───────────────────────────────────────────────────────────────
const cover13 = getCover(content, "estio");
const r13 = findAndReplace(content, "estio", `{
  slug: "estio",
  title: "Estio",
  category: "manhwa",
  cover: "${cover13}",
  tags: "Fantasy · Aventure · Drame · Pouvoirs",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Estio est né avec la capacité de lire les pensées et les émotions des gens autour de lui — un don qui l'a rendu socialement isolé toute sa vie. Recruté par la puissante guilde Haro, il part en mission avec un groupe hétéroclite d'aventuriers, découvrant progressivement l'ampleur de son pouvoir et les secrets qui entourent son existence.",
  pros: ["Héros vulnérable et profondément humain", "Dynamique de groupe excellente et attachante", "Art magnifique et ambiance douce-amère unique"],
  cons: ["Rythme très posé qui peut dérouter", "Peu d'action directe dans les premiers arcs"],
  reviewHtml: \`<p>Estio est une perle rare dans le paysage du manhwa : une oeuvre qui mise entièrement sur la nuance émotionnelle et les relations humaines plutôt que sur l'action. Le héros, capable de ressentir les pensées et émotions d'autrui, est l'un des protagonistes les plus attachants et les plus humains du genre.</p><p>Le manhwa se distingue par son art délicat et son atmosphère particulière — quelque part entre la mélancolie et la chaleur humaine. Les missions de la guilde servent de prétexte à des histoires courtes sur la douleur et la connexion entre les êtres. La dynamique de groupe avec les autres membres de l'équipe est un régal.</p><p>Un manhwa à part, recommandé à ceux qui cherchent quelque chose d'émotionnellement riche et de visuellement beau, loin des combats et des systèmes RPG.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=estio+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=estio+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r13) { console.log("⚠️ Non trouvé : estio"); } else { content = r13; patched++; console.log("✅ estio"); }

// ─── 14. Red Storm ───────────────────────────────────────────────────────────
const cover14 = getCover(content, "red-storm");
const r14 = findAndReplace(content, "red-storm", `{
  slug: "red-storm",
  title: "Red Storm",
  category: "manhwa",
  cover: "${cover14}",
  tags: "Action · Fantasy · Arts martiaux · Aventure",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Yulian Provoke, fils du chef d'une tribu guerrière du désert, fait la rencontre d'un mystérieux étranger du nom de Chun Myung Hoon — un maître des arts martiaux orientaux. Sous sa tutelle, Yulian devient un guerrier d'une puissance sans précédent, destiné à unifier les tribus du désert sous sa bannière.",
  pros: ["Mélange unique de culture tribale du désert et arts martiaux asiatiques", "Longue série avec un développement long-terme exceptionnel", "Personnages construits avec une rare profondeur sur la durée"],
  cons: ["Très longue — nécessite un investissement important", "Art parfois inégal selon les arcs"],
  reviewHtml: \`<p>Red Storm est un classique du manhwa d'action et d'arts martiaux, qui a su construire au fil de ses nombreux volumes une saga épique d'une cohérence remarquable. L'univers du désert, avec ses tribus guerrières et ses codes d'honneur propres, est un cadre original qui contraste avec les mondes fantastiques habituels du genre.</p><p>La rencontre entre Yulian, fils d'une culture tribale, et Chun Myung Hoon, maître d'une tradition d'arts martiaux orientale, crée une alchimie unique. Le mentor-élève est traité avec une profondeur rare, et les progrès de Yulian sont toujours mérités et crédibles.</p><p>Un manhwa d'action long et exigeant qui récompense largement ses lecteurs patients par une saga épique de haute qualité.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=red+storm+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=red+storm+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r14) { console.log("⚠️ Non trouvé : red-storm"); } else { content = r14; patched++; console.log("✅ red-storm"); }

// ─── 15. I Adopted a Villainous Dad ──────────────────────────────────────────
const cover15 = getCover(content, "akdang-appareul-ibyanghaetda");
const r15 = findAndReplace(content, "akdang-appareul-ibyanghaetda", `{
  slug: "akdang-appareul-ibyanghaetda",
  title: "I Adopted a Villainous Dad",
  category: "manhwa",
  cover: "${cover15}",
  tags: "Fantasy · Romance · Isekai · Famille",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Une orpheline réincarnée dans un roman fantastique décide d'adopter le grand villain de l'histoire comme père. Sa logique : si elle devient suffisamment précieuse pour lui, elle sera protégée des pires événements du roman. Ce qu'elle ne prévoit pas, c'est que son père adoptif villain pourrait être transformé par leur relation.",
  pros: ["Relation père-fille opposant villain et enfant, vraiment touchante", "Réinterprétation sympathique du personnage villain", "Art expressif et scènes de complicité bien réalisées"],
  cons: ["Certaines résolutions de conflit un peu magiques", "Le villain redevient gentil assez vite"],
  reviewHtml: \`<p>I Adopted a Villainous Dad propose une variation attendrissante sur le genre villain-isekai : plutôt que de jouer le villain, l'héroïne décide de l'adopter. Cette prémisse génère une dynamique adorable entre un homme endurci et réputé sans pitié, et une petite fille déterminée à le rendre humain.</p><p>Le manhwa traite cette relation avec une sincérité qui dépasse le simple cute factor. Le villain en question est un personnage complexe qui se retrouve progressivement déstabilisé par l'affection inconditionnelle de son enfant adoptive, et sa transformation est menée avec nuance. Les scènes de complicité sont réellement touchantes.</p><p>Un manhwa isekai familial tendre et bien écrit, recommandé pour les amateurs de relations father-figure et d'histoires où l'amour change des gens a priori irrécupérables.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=i+adopted+villainous+dad+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=i+adopted+villainous+dad+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r15) { console.log("⚠️ Non trouvé : akdang-appareul-ibyanghaetda"); } else { content = r15; patched++; console.log("✅ akdang-appareul-ibyanghaetda (Villainous Dad)"); }

// ─── 16. My Husband Is an Antisocial Count ───────────────────────────────────
const cover16 = getCover(content, "my-husband-is-an-antisocial-count");
const r16 = findAndReplace(content, "my-husband-is-an-antisocial-count", `{
  slug: "my-husband-is-an-antisocial-count",
  title: "My Husband Is an Antisocial Count",
  category: "manhwa",
  cover: "${cover16}",
  tags: "Fantasy · Romance · Isekai · Comédie",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Réincarnée en tant que femme destinée à mourir dans un roman de fantasy, Erin Efrain décide d'épouser le comte Ferret — un noble réputé asocial et froid au point d'avoir terrorisé toutes ses prétendantes. Sa logique : un mari qui ne lui parle jamais sera le mari idéal. Ce qu'elle ne prévoit pas, c'est que cet homme froid commence à s'intéresser à elle.",
  pros: ["Dynamique mari asocial / femme pratique vraiment drôle", "Romance qui se développe naturellement", "Héroïne pragmatique et pleine d'humour"],
  cons: ["Concept déjà vu dans d'autres titres", "Résolution de certains malentendus trop rapide"],
  reviewHtml: \`<p>My Husband Is an Antisocial Count fait partie de ces manhwas romantiques qui fonctionnent grâce à la personnalité de leurs protagonistes. L'héroïne, qui voulait un mariage tranquille avec un homme qu'elle n'aurait pas à gérer, et le comte, qui répond au minimum syndical par reflex, forment un duo comique naturellement attachant.</p><p>Le manhwa excelle dans les quiproquos et les moments où l'indifférence calculée des deux personnages craque progressivement. L'humour est constant sans être lourd, et la romance se développe avec une logique interne qui sonne juste. Le comte asocial est particulièrement bien écrit — ses rares moments de vulnérabilité sont d'autant plus forts.</p><p>Un manhwa romantique léger et plaisant, idéal pour une lecture feel-good avec un couple aux personnalités complémentaires.</p>\`,
  shops: [
    { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=husband+antisocial+count+manhwa", logo: "/logos/fnac.png" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=husband+antisocial+count+manhwa", logo: "/logos/amazon.png" }
  ],
  streaming: [],
  live: []
}`);
if (!r16) { console.log("⚠️ Non trouvé : my-husband-is-an-antisocial-count"); } else { content = r16; patched++; console.log("✅ my-husband-is-an-antisocial-count"); }

// ─── Entrées manuelles ────────────────────────────────────────────────────────

// 17. SSS-Rank Suicide Hunter (non trouvé sur AniList)
const entry17 = `{
  slug: "sss-rank-suicide-hunter",
  title: "SSS-Rank Suicide Hunter",
  category: "manhwa",
  cover: "",
  tags: "Action · Fantasy · Hunter · Regression",
  stars: 5,
  addedAt: "2026-03-22",
  synopsis: "Kim Gong-ja, chasseur de rang le plus bas dans un monde de portails et de monstres, possède un pouvoir inutile : copier la capacité de la dernière personne qui l'a tué. Un soir, le chasseur le plus puissant du monde le tue par accident — et Kim Gong-ja se réveille 24h en arrière avec le pouvoir de cet être surhumain. Une boucle temporelle commence.",
  pros: ["Concept de boucle temporelle via mort extraordinairement bien exécuté", "Evolution psychologique du héros fascinante", "Ecriture ambitieuse qui traite de la santé mentale et du deuil"],
  cons: ["Très sombre — pas pour tout le monde", "Densité narrative qui peut être déroutante au début"],
  reviewHtml: \`<p>SSS-Rank Suicide Hunter est une oeuvre à part dans le manhwa de hunter. Son concept de départ — un chasseur qui gagne les pouvoirs de la personne qui le tue, et qui meurt encore et encore dans une boucle temporelle — est d'une ingéniosité redoutable. Ce qui pourrait être un simple power-fantasy devient une exploration dense de la psychologie d'un homme qui a vécu et mort des milliers de fois.</p><p>Le manhwa n'hésite pas à aller dans des zones sombres rarement explorées dans le genre : trauma, répétition compulsive, quête de sens face à l'infini. Kim Gong-ja est l'un des personnages les plus complexes et les plus mémorables du manhwa contemporain. La maîtrise narrative est exceptionnelle.</p><p>Un chef-d'oeuvre du manhwa hunter, indispensable pour les lecteurs qui cherchent de la profondeur, de l'ambition et une oeuvre qui marque durablement.</p>\`,
  shops: [],
  streaming: [],
  live: []
}`;
content = appendEntry(content, entry17);
patched++; console.log("✅ sss-rank-suicide-hunter (manuel)");

// 18. Sooho (manhwa du bodyguard)
const entry18 = `{
  slug: "sooho",
  title: "Sooho",
  category: "manhwa",
  cover: "",
  tags: "Action · Thriller · Bodyguard · Contemporain",
  stars: 4,
  addedAt: "2026-03-22",
  synopsis: "Park Hoon, ancien soldat des forces spéciales reconverti en garde du corps, est engagé pour protéger une jeune héritière. Dans un Séoul moderne où les organisations criminelles et les intérêts politiques se croisent, il doit affronter des menaces de plus en plus complexes tout en gérant une relation protégé/garde du corps compliquée.",
  pros: ["Action de qualité dans un contexte contemporain réaliste", "Protagoniste bodyguard compétent et stylé", "Thriller bien construit avec enjeux escaladants"],
  cons: ["Romance secondaire parfois en retrait", "Certains arcs de thriller très convenus"],
  reviewHtml: \`<p>Sooho est un manhwa d'action contemporaine qui se distingue par son ancrage dans un Séoul moderne et son héros bodyguard — un angle peu commun dans un genre dominé par les chasseurs et les mages. Park Hoon, ancien des forces spéciales, apporte une crédibilité tactique à ses interventions qui fait défaut à beaucoup de manhwas d'action.</p><p>Le manhwa alterne habilement entre les séquences d'action pure, intenses et bien choreographiées, et les moments de tension psychologique autour de la relation protégé/garde du corps. L'univers du crime organisé coréen est bien rendu, avec des antagonistes qui ont leurs propres logiques.</p><p>Un manhwa d'action thriller de qualité, recommandé pour les amateurs d'action contemporaine et de héros compétents dans un cadre réaliste.</p>\`,
  shops: [],
  streaming: [],
  live: []
}`;
content = appendEntry(content, entry18);
patched++; console.log("✅ sooho (manuel)");

writeFileSync(FILE, content, "utf-8");
console.log(`\n✅ ${patched} entrées patchées/ajoutées`);
