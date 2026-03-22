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
  // Find last } before closing ] to append after it
  const insertPos = content.lastIndexOf("]");
  // Check if content before ] ends with comma already
  const before = content.slice(0, insertPos).trimEnd();
  const needsComma = !before.endsWith(",");
  return before + (needsComma ? ",\n" : "\n") + entry + "\n]";
}

let content = readFileSync(FILE, "utf-8");

const PATCHES = [
  {
    slug: "the-irregular-at-magic-high-school",
    title: "The Irregular at Magic High School",
    synopsis: "Dans un futur où la magie est une technologie, Tatsuya et Miyuki Shiba entrent dans une prestigieuse école de magie. Miyuki est classée première de sa promotion, Tatsuya dans la section inférieure. Mais ses capacités réelles dépassent de loin ce que le système peut mesurer.",
    reviewHtml: `<p>Mahouka est un manga de fantasy technologique qui mélange école de magie, politique et action de haute intensité. Tatsuya Shiba est une figure d'overpowered protagoniste assumée, dont les compétences techniques surpassent tous ses pairs. L'intérêt est moins dans la tension des combats que dans la stratégie et la politique magique.</p><p>Le worldbuilding est particulièrement riche, avec un système de magie détaillé et une réflexion sur les inégalités sociales dans un monde où le talent est quantifié. Pour les amateurs de light novel adapté, c'est une référence du genre.</p>`,
    pros: ["Worldbuilding de fantasy technologique très élaboré", "Protagoniste overpowered assumé et cohérent", "Réflexion sur les inégalités dans une société magique"],
    cons: ["Protagoniste trop parfait pour créer de la tension", "Rythme parfois laborieux dans les explications"],
    tags: "Action · Sci-fi · Fantasy · Shonen",
    category: "manga",
    stars: 3,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Irregular+Magic+High+School", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Irregular+Magic+High+School", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Irregular+Magic+High+School+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [
      { name: "Crunchyroll", url: "https://www.crunchyroll.com/series/G6NQ5DWZ6/the-irregular-at-magic-high-school", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png" },
    ],
  },
  {
    slug: "tegami-bachi",
    title: "Tegami Bachi",
    synopsis: "Dans un monde plongé dans une nuit éternelle, les Lettre Abeilles transportent le courrier entre les cités isolées, affrontant les terribles Gaichuu, insectes géants de métal. Lag Seeing, jeune garçon livré comme lettre étant enfant, rêve de devenir Lettre Abeille pour retrouver son père.",
    reviewHtml: `<p>Tegami Bachi est un shonen d'aventure à l'ambiance mélancolique et poétique très particulière. Le concept des lettres comme vecteurs d'émotions humaines donne lieu à des chapitres émouvants sur la solitude, la séparation et l'espoir. Hiroyuki Asada crée un monde crépusculaire magnifiquement dessiné.</p><p>La progression de Lag est touchante, portée par une relation père-fils et des rencontres marquantes. Le manga oscille entre road-trip émotionnel et shonen d'action, avec une réussite variable selon les arcs. Une oeuvre sincère et visuellement belle.</p>`,
    pros: ["Ambiance mélancolique et poétique unique", "Concept de lettres/émotions original et émouvant", "Dessin élégant et atmosphérique"],
    cons: ["Rythme lent et inégal", "Arcs d'action moins réussis que les arcs émotionnels"],
    tags: "Aventure · Drame · Fantasy · Shonen",
    category: "manga",
    stars: 3,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Tegami+Bachi", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Tegami+Bachi", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Tegami+Bachi+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "07-ghost",
    title: "07-Ghost",
    synopsis: "Teito Klein, esclave orphelin devenu militaire d'élite, fuit après avoir découvert la vérité sur le meurtre de son père. Il se réfugie dans une église sacrée dont les prêtres abritent des pouvoirs divins nommés les Zaiphon, et apprend progressivement son véritable destin.",
    reviewHtml: `<p>07-Ghost est un manga shojo d'action-fantasy qui mêle esthétique militaire, mythologie chrétienne réinventée et romance. L'ambiance gothique et baroque est réussie, et le duo Teito/Frau est une relation bien écrite entre un jeune fugitif blessé et un moine débraillé au grand coeur.</p><p>L'histoire prend son temps pour dévoiler ses révélations sur les fantômes divins et le passé de Teito, avec une atmosphère qui rappelle les grands shojo d'action des années 2000. Un classique du genre pour les amateurs.</p>`,
    pros: ["Ambiance gothique et esthétique baroque réussie", "Relation Teito/Frau bien écrite", "Mythologie inventive et développée"],
    cons: ["Rythme très lent dans les arcs d'exposition", "Certaines révélations prévisibles"],
    tags: "Action · Fantasy · Drame · Shojo",
    category: "manga",
    stars: 3,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=07-Ghost", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=07+Ghost", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=07-Ghost+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "broken-blade",
    title: "Break Blade",
    synopsis: "Dans un monde où tout le monde possède la capacité de contrôler le quartz pour faire fonctionner les machines, Rygart Arrow est le seul à en être incapable. Mais cette incapacité le rend paradoxalement le seul apte à piloter un ancien Golem de quartz découvert dans des ruines.",
    reviewHtml: `<p>Break Blade est un excellent manga de mecha qui se distingue par son protagoniste anticonventionnel : un 'inapte' dans un monde de talents. La politique et les conflits entre nations sont bien développés, et l'aspect tragique des guerres (affronter d'anciens amis) est traité sans complaisance.</p><p>Les combats de Golems sont spectaculaires et bien chorégraphiés. La série alterne tension politique et action intense dans un équilibre satisfaisant. Un mecha solide pour les amateurs du genre, avec plus de profondeur que la moyenne.</p>`,
    pros: ["Protagoniste anticonventionnel dans son genre", "Politique et conflits bien développés", "Combats de mecha spectaculaires"],
    cons: ["Narration dense qui peut perdre les nouveaux venus", "Rythme de publication très lent historiquement"],
    tags: "Action · Mecha · Fantasy · Seinen",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Break+Blade", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Break+Blade+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Break+Blade+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "dnangel",
    title: "D.N.Angel",
    synopsis: "Daisuke Niwa, lycéen ordinaire, se transforme en Phantom Thief Dark, un voleur fantôme légendaire, à chaque fois qu'il pense à la fille dont il est amoureux. Dark, l'entité qui habite en lui, vole des oeuvres d'art magiques pour les neutraliser. Mais un rival nommé Krad complique les choses.",
    reviewHtml: `<p>D.N.Angel est un shojo romantique et fantastique au charme rétro des années 2000. Le concept de double identité articulé autour des émotions amoureuses est bien trouvé, et Daisuke est un héros attachant dans son incapacité à contrôler ses transformations.</p><p>Le manga joue avec les codes du phantom thief et du combat d'entités magiques, donnant lieu à des moments visuellement élégants. La relation entre les personnages est le vrai moteur narratif. Un classique des shojo d'époque pour les nostalgiques.</p>`,
    pros: ["Concept double identité original et bien utilisé", "Esthétique et ambiance shojo années 2000 charmante", "Romance bien menée"],
    cons: ["Publication étalée sur des décennies, rythme très irrégulier", "Univers parfois confus"],
    tags: "Aventure · Fantasy · Romance · Shojo",
    category: "manga",
    stars: 3,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=DN+Angel", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=DN+Angel+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=DN+Angel+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "red-river",
    title: "Red River",
    synopsis: "Yuri Suzuki, lycéenne japonaise, est transportée dans le monde de l'Anatolie antique (Hittites, vers 1400 av. J.-C.). La reine qui l'a invoquée veut la sacrifier, mais le prince Kail la protège. Yuri est vénérée comme une incarnation d'Ishtar, et son destin se mêle à l'histoire de l'Empire hittite.",
    reviewHtml: `<p>Red River est un shojo historique remarquable qui transporte son héroïne dans l'Anatolie antique avec une rigueur documentaire inhabituellement sérieuse. Chie Shinohara crée un univers riche et crédible, et Yuri est une héroïne qui grandit de façon convaincante de lycéenne ordinaire en figure politique déterminante.</p><p>La romance avec Kail est intense et bien construite, l'histoire politique fascinante. Pour les amateurs de shojo historique, Red River est une référence incontournable du genre.</p>`,
    pros: ["Reconstitution historique hittite sérieuse et richement détaillée", "Héroïne qui évolue de façon convaincante", "Romance épique et politique entrelacées"],
    cons: ["Longueur impressionnante (28 volumes)", "Certaines conventions du shojo limitent la crédibilité"],
    tags: "Aventure · Drame · Romance · Historique · Shojo",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Red+River+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Red+River+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Red+River+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "ceres-celestial-legend",
    title: "Ceres: Celestial Legend",
    synopsis: "Aya Mikage, 16 ans, découvre lors de son anniversaire que ses ancêtres ont capturé une tennyo (être céleste) dont elle est la réincarnation. Ceres, l'entité en elle, cherche à récupérer sa robe céleste et se venge de la famille Mikage. Aya doit survivre entre deux identités opposées.",
    reviewHtml: `<p>Ceres est le pendant plus sombre et dramatique de Fushigi Yugi par Yuu Watase. Là où son oeuvre précédente était plus légère, ici le ton est délibérément brutal : la famille Mikage est véritablement malveillante, la situation d'Aya désespérée, et le manga n'hésite pas à sacrifier des personnages.</p><p>La thématique du corps partagé entre deux identités opposées est bien exploitée, et la conclusion n'évite pas la tragédie. Un shojo dark mature qui surprend par son refus du happy-end facile.</p>`,
    pros: ["Ton dramatique plus sombre que la moyenne du shojo", "Thématique de la double identité bien exploitée", "Conclusion courageuse"],
    cons: ["Certains personnages masculins trop idéalisés", "Rythme inégal"],
    tags: "Aventure · Drame · Surnaturel · Shojo",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Ceres+Celestial+Legend", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Ceres+Celestial+Legend", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Ceres+Celestial+Legend+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "please-save-my-earth",
    title: "Please Save My Earth",
    synopsis: "Alice Sakaguchi fait des rêves étranges où elle est une scientifique extraterrestre sur la Lune. D'autres adolescents font les mêmes rêves. Ils réalisent qu'ils sont les réincarnations d'une équipe de chercheurs alien qui observait la Terre, et que leurs destins passés les rattrapent.",
    reviewHtml: `<p>Please Save My Earth est un shojo des années 90 d'une ambition narrative rare. La structure qui alterne mémoires de vies passées et présent contemporain est sophistiquée, et Saki Hiwatari explore avec une sensibilité profonde les thèmes de l'identité, du karma et de la rédemption.</p><p>Le dessin a vieilli mais l'histoire reste captivante, notamment grâce au personnage de Rin/Issei, l'un des antagonistes les plus complexes du manga des années 90. Un classique méconnu du shojo fantastique, indispensable pour les amateurs du genre.</p>`,
    pros: ["Structure narrative vies passées/présent très sophistiquée", "Personnages psychologiquement complexes", "Thèmes de rédemption et d'identité profonds"],
    cons: ["Dessin daté", "Début lent qui demande de la patience"],
    tags: "Drame · Romance · Sci-fi · Surnaturel · Shojo",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Please+Save+My+Earth", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Please+Save+My+Earth+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Please+Save+My+Earth+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "tokyo-mew-mew",
    title: "Tokyo Mew Mew",
    synopsis: "Ichigo Momomiya, lycéenne, est fusionnée avec l'ADN d'un chat sauvage du Japon lors d'un événement mystérieux. Elle devient Mew Ichigo, combattante contre les Chimera Animals, des créatures créées par des extraterrestres qui veulent reprendre la Terre. Elle recrute quatre autres filles pour former l'équipe Mew Mew.",
    reviewHtml: `<p>Tokyo Mew Mew est un shojo magical girl des années 2000 charmant, qui mêle combat de super-héroïnes, romance lycéenne et conscience écologique. Ichigo est une héroïne lumineuse et maladroite, et la dynamique de l'équipe est bien menée.</p><p>Le manga assume pleinement ses conventions de magical girl tout en y ajoutant une touche d'action et d'humour. La relation avec Masaya est le moteur romantique classique du genre. Un classique de son époque, idéal pour les fans de Pretty Cure et Sailor Moon.</p>`,
    pros: ["Dynamique d'équipe bien construite", "Héroïne attachante et lumineuse", "Bonne dose d'humour"],
    cons: ["Conventions magical girl très respectées sans surprise", "Antagonistes peu développés"],
    tags: "Aventure · Comédie · Romance · Mahou Shoujo",
    category: "manga",
    stars: 3,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Tokyo+Mew+Mew", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Tokyo+Mew+Mew", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Tokyo+Mew+Mew+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "shugo-chara",
    title: "Shugo Chara!",
    synopsis: "Amu Hinamori, vue par ses camarades comme une fille cool et distante, souhaite secrètement être différente. Elle se réveille un matin avec trois oeufs de personnage : ses 'Shugo Chara', des incarnations de sa vraie personnalité cachée. Ces personnages l'aident à combattre les X Eggs qui corrompent les rêves des enfants.",
    reviewHtml: `<p>Shugo Chara! est un shojo magical girl qui traite avec bienveillance la question de l'identité sociale et du fossé entre qui on est et comment les autres nous perçoivent. Amu est un personnage touchant, coincée dans une réputation qu'elle n'a pas choisie.</p><p>Le manga multiplie les transformations et les combats de façon satisfaisante, et la galerie de personnages secondaires est bien développée. La romance avec Ikuto est un moteur narratif efficace. Un shojo d'action feel-good bien mené.</p>`,
    pros: ["Thématique identité sociale originale pour le genre", "Héroïne attachante dans sa dualité", "Galerie de personnages secondaires développée"],
    cons: ["Répétitif dans sa structure de transformation/combat", "Romantisme parfois trop sage"],
    tags: "Comédie · Fantasy · Romance · Mahou Shoujo",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Shugo+Chara", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Shugo+Chara", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Shugo+Chara+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "full-moon",
    title: "Full Moon wo Sagashite",
    synopsis: "Mitsuki Koyama rêve de devenir chanteuse pour retrouver Eichi, son premier amour parti aux États-Unis. Mais elle est atteinte d'un cancer de la gorge inopérable et a deux ans à vivre. Deux shinigami viennent la chercher mais l'aident finalement à réaliser son rêve en la transformant en 16 ans.",
    reviewHtml: `<p>Full Moon est un shojo musical d'une profondeur émotionnelle inattendue. La prémisse (une enfant mourante poursuivant son rêve avec l'aide de la mort) donne lieu à des moments déchirants mêlés de légèreté musicale. Arina Tanemura gère avec sensibilité l'équilibre entre espoir et destin inéluctable.</p><p>La transformation de Mitsuki en adolescente de 16 ans est un prétexte fantastique bien utilisé, et la relation avec les deux shinigami apporte une dimension humaine touchante. Un classique du shojo pour les amateurs de récits emotionnellement intenses.</p>`,
    pros: ["Profondeur émotionnelle inattendue pour le genre", "Gestion sensible de la maladie et du deuil", "Romance sincère et déchirante"],
    cons: ["Dessin très chargé typique de Tanemura", "Certains arcs de la carrière musicale longuets"],
    tags: "Drame · Musique · Romance · Mahou Shoujo",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Full+Moon+Sagashite", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Full+Moon+wo+Sagashite", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Full+Moon+Sagashite+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "alice-19th",
    title: "Alice 19th",
    synopsis: "Alice Seno est une lycéenne effacée qui vit dans l'ombre de sa grande soeur Mayura. Un jour, elle sauve une créature magique qui lui révèle qu'elle est destinée à devenir une maîtresse des Lotis Words, des mots de pouvoir capables de soigner les coeurs. Mais lorsque Mayura est dévorée par les Maram, les mots des ténèbres, Alice doit la sauver.",
    reviewHtml: `<p>Alice 19th est un shojo fantastique court mais efficace de Yuu Watase. La dynamique entre les deux soeurs, la culpabilité d'Alice et la confrontation avec les ténèbres intérieures sont des thèmes bien traités. Le système des Lotis Words est inventif et donne lieu à des combats originaux basés sur les émotions.</p><p>Sans atteindre la complexité de Fushigi Yugi, Alice 19th offre une aventure shojo solide et émotionnellement engageante, idéale pour les amateurs de Yuu Watase et du shojo fantastique des années 2000.</p>`,
    pros: ["Dynamique soeurs et culpabilité bien traitée", "Système de combat basé sur les émotions original", "Format court bien maîtrisé"],
    cons: ["Moins ambitieux que les autres oeuvres de Watase", "Certains personnages secondaires peu développés"],
    tags: "Aventure · Fantasy · Romance · Shojo",
    category: "manga",
    stars: 3,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Alice+19th", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Alice+19th+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Alice+19th+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "tobaku-hakairoku-kaiji",
    title: "Kaiji",
    synopsis: "Kaiji Ito, chômeur endetté et sans ambition, est forcé de participer à un jeu de cartes illégal sur un bateau de croisière pour rembourser les dettes d'un ancien ami. Ce jeu n'est que le début d'une série d'épreuves psychologiques et financières extrêmes orchestrées par des yakuzas.",
    reviewHtml: `<p>Kaiji est une oeuvre de génie sur la psychologie humaine sous pression extrême. Nobuyuki Fukumoto décortique avec une précision chirurgicale la prise de décision, le bluff, la peur et l'espoir dans des situations désespérées. Chaque chapitre est une leçon de tension narrative.</p><p>Le trait stylisé et expressif, les personnages aux visages anguleux et torturés, le monologue intérieur qui envahit la narration : tout contribue à créer une oeuvre unique. Kaiji est l'anti-héros idéal, oscillant sans cesse entre génie momentané et effondrement total. Un chef-d'oeuvre du seinen.</p>`,
    pros: ["Tension psychologique d'une précision chirurgicale", "Décryptage fascinant de la prise de décision", "Anti-héros inoubliable et profondément humain"],
    cons: ["Rythme très lent, chaque jeu dure des dizaines de chapitres", "Style graphique difficile à apprécier au premier abord"],
    tags: "Psychologie · Thriller · Drame · Seinen",
    category: "manga",
    stars: 5,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Kaiji+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Kaiji+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Kaiji+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "wolfsmund",
    title: "Wolfsmund",
    synopsis: "Au Moyen Age suisse, le col du Saint-Gothard est contrôlé par Wolfram, bailli cruel au service des Habsbourg. Le poste de passage qu'il dirige est surnommé 'Wolfsmund' (la gueule du loup) car nul ne passe sans que ses intentions soient percées à jour. Les combattants de la liberté tentent de le franchir pour rejoindre les cantons libres.",
    reviewHtml: `<p>Wolfsmund est un seinen historique brutal et sans concessions, inspiré de la lutte d'indépendance suisse du 14e siècle. Mitsuhisa Kuji ne ménage pas ses personnages : le taux de mortalité est élevé, et les héros ne gagnent pas systématiquement. L'horreur de l'oppression et le coût réel de la résistance sont montrés sans euphémismes.</p><p>Wolfram, l'antagoniste principal, est un des bailli les plus mémorables du manga historique, d'un cynisme et d'une intelligence terrifiants. Une oeuvre sombre et percutante pour les amateurs d'histoire médiévale.</p>`,
    pros: ["Cadre historique médiéval suisse original et bien documenté", "Antagoniste d'une profondeur rare", "Ton sans compromis qui ne protège pas ses personnages"],
    cons: ["Très sombre, peu de répit émotionnel", "Certains personnages de passage peu développés"],
    tags: "Action · Drame · Historique · Seinen",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Wolfsmund+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Wolfsmund+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Wolfsmund+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "black-bird",
    title: "Black Bird",
    synopsis: "Misao Harada peut voir les esprits depuis l'enfance. À ses 16 ans, elle réalise qu'elle est 'la fiancée des démons' : son sang les rend immortels et sa chair les renforce. Kyo Usui, son voisin d'enfance qui vient de réapparaître, est en réalité le chef d'un clan de démons tengu et veut l'épouser pour protéger son clan.",
    reviewHtml: `<p>Black Bird est un shojo romantique et surnaturel qui assume pleinement ses codes romantiques controversés. La relation entre Misao et Kyo est intense et possessive, et le manga ne s'embarrasse pas de nuances dans la dynamique de pouvoir. Pour les amateurs de romance surnaturelle dark, c'est exactement ce qu'il promet.</p><p>Le worldbuilding des démons et clans est bien développé, et les enjeux politiques des tribus de démons donnent de l'épaisseur à la série. Un shojo pour les fans de romance surnaturelle sans complexes.</p>`,
    pros: ["Worldbuilding des clans de démons bien développé", "Romance surnaturelle intense et assumée", "Enjeux politiques qui enrichissent l'histoire"],
    cons: ["Dynamique de pouvoir très déséquilibrée", "Héroïne souvent passive"],
    tags: "Drame · Romance · Surnaturel · Shojo",
    category: "manga",
    stars: 3,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Black+Bird+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Black+Bird+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Black+Bird+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "midnight-secretary",
    title: "Midnight Secretary",
    synopsis: "Kaya Satozuka est une secrétaire compétente et efficace qui prend en charge le PDG narcissique de son entreprise, Kyouhei Touma. Elle découvre qu'il est un vampire et l'aide à gérer discrètement ses besoins en sang. Entre eux, une relation compliquée se développe.",
    reviewHtml: `<p>Midnight Secretary est un josei romantique qui joue habilement la carte du vampire d'entreprise. Le contexte professionnel est bien utilisé, Kaya est une héroïne compétente qui ne se laisse pas impressionner, et la dynamique boss/secrétaire-vampire est distillée avec humour et sensualité bien dosés.</p><p>La série assume son côté romance adulte sans en faire trop, et la progression des sentiments entre les deux protagonistes est bien gérée. Un josei court et efficace pour les amateurs de romance surnaturelle avec du caractère.</p>`,
    pros: ["Héroïne compétente et qui ne se laisse pas marcher dessus", "Dynamique vampire/monde professionnel originale", "Romance adulte bien dosée"],
    cons: ["Résolution sentimentale prévisible", "Format court qui ne permet pas beaucoup d'approfondissement"],
    tags: "Drame · Romance · Surnaturel · Josei",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Midnight+Secretary", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Midnight+Secretary+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Midnight+Secretary+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "otomen",
    title: "Otomen",
    synopsis: "Asuka Masamune est un lycéen modèle considéré comme le garçon le plus masculin de son école. En secret, il adore la couture, la pâtisserie, le manga shojo et tout ce qui est considéré comme 'féminin'. Il doit cacher qui il est vraiment, jusqu'à sa rencontre avec Ryo, une fille au caractère bien masculin.",
    reviewHtml: `<p>Otomen est une comédie romantique shojo rafraîchissante sur les stéréotypes de genre. La subversion des rôles conventionnels masculin/féminin est menée avec légèreté et humour constant. Asuka est un protagoniste attachant dans sa dualité, et le manga ne cesse jamais de se moquer gentiment des conventions sociales.</p><p>La romance avec Ryo est bien menée, les personnages secondaires tous déclinés sur le même principe de subversion de stéréotype. Une oeuvre légère et bienveillante qui garde sa fraîcheur.</p>`,
    pros: ["Subversion des stéréotypes de genre drôle et bienveillante", "Protagoniste attachant et original", "Humour constant et bien calibré"],
    cons: ["Répétitif dans sa formule", "Peu d'enjeux dramatiques forts"],
    tags: "Comédie · Romance · Quotidien · Shojo",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Otomen+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Otomen+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Otomen+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "goodbye-eri",
    title: "Goodbye, Eri",
    synopsis: "Yuta filme la vie de sa mère mourante à sa demande. Le film qu'il crée est un échec émotionnel aux yeux de ses camarades. Mais il rencontre Eri, une fille mystérieuse qui l'aide à transformer cette expérience en quelque chose de plus complexe. Un one-shot sur le deuil, la mémoire et le pouvoir du cinéma.",
    reviewHtml: `<p>Tatsuki Fujimoto (Chainsaw Man, Fire Punch) prouve avec Goodbye, Eri qu'il est dans une catégorie à part. Ce one-shot sur le deuil et la fabrication d'images est construit avec une intelligence formelle époustouflante, jouant avec le médium manga pour explorer comment on transforme la réalité en fiction, et si cette transformation est un mensonge ou une vérité plus profonde.</p><p>La conclusion est une des plus mémorables du manga récent. Un one-shot court mais vertigineux, à lire une première fois pour l'histoire et une deuxième pour comprendre sa construction.</p>`,
    pros: ["Intelligence formelle époustouflante sur le médium manga", "Réflexion sur le deuil, la mémoire et la fiction", "Conclusion vertigineuse et mémorable"],
    cons: ["Format one-shot frustrant pour ceux qui veulent plus", "Nécessite une deuxième lecture pour pleinement apprécier"],
    tags: "Drame · Psychologie · Quotidien · Seinen",
    category: "manga",
    stars: 5,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Goodbye+Eri", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Goodbye+Eri+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Goodbye+Eri+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
];

// Nouvelles entrées à ajouter manuellement (bad matches AniList)
const NEW_ENTRIES = [
  {
    slug: "toriko",
    title: "Toriko",
    cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx43255-nFNfY8pQCfhS.jpg",
    synopsis: "Dans un monde où la gastronomie est la forme de combat ultime, Toriko est un Gourmet Hunter légendaire aux pouvoirs démesurés qui chasse les créatures les plus rares et les ingrédients les plus savoureux. Accompagné du cuisinier Komatsu, il parcourt des terres sauvages pour compléter son menu parfait.",
    reviewHtml: `<p>Toriko est le manga de la nourriture et du combat dans toute leur démesure. Mitsutoshi Shimabukuro crée un univers où la gastronomie est littéralement une question de survie, avec des créatures gigantesques et des ingrédients capables de tuer. L'imagination déployée pour concevoir les êtres vivants comestibles est absolument folle.</p><p>Le manga combine l'énergie débordante d'un shonen de combat classique avec une créativité gastronomique unique en son genre. Les combats sont spectaculaires, les personnages charismatiques, et le worldbuilding alimentaire est une invitation permanente au voyage. Un shonen généreux et jouissif.</p>`,
    pros: ["Imagination gastronomique absolument débridée", "Combats spectaculaires et personnages charismatiques", "Worldbuilding alimentaire unique en son genre"],
    cons: ["Protagoniste trop puissant très tôt", "Certains arcs tardifs moins inspirés"],
    tags: "Action · Aventure · Comédie · Shonen",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Toriko+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Toriko+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Toriko+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "mars-fuyumi-soryo",
    title: "Mars",
    cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30028-L2v6bWaqf21y.jpg",
    synopsis: "Kira Aso est une lycéenne solitaire et introvertie qui dessine en silence. Rei Kashino est le garçon le plus séduisant et le plus dangereux du lycée, motard et coureur de filles. Un dessin échangé par hasard va créer un lien improbable entre ces deux opposés qui partagent des blessures bien plus profondes que prévu.",
    reviewHtml: `<p>Mars est un shojo des années 90 d'une intensité émotionnelle rare qui ose aborder frontalement des sujets difficiles : abus sexuels, tentatives de suicide, troubles psychologiques graves. Fuyumi Soryo ne cache rien et ne simplifie rien, ce qui donne au manga une profondeur et une crédibilité inhabituelle pour le genre.</p><p>La relation entre Kira et Rei est construite sur deux blessures qui se reconnaissent et s'aident mutuellement à survivre. La conclusion, bien que discutée, est à la mesure de ce qu'ils ont traversé ensemble. Un classique courageux du shojo, à ne pas lire au premier degré.</p>`,
    pros: ["Traitement courageux de sujets difficiles", "Relation protagonistes construite sur la vraie vulnérabilité", "Profondeur émotionnelle rare pour le shojo"],
    cons: ["Certains éléments très datés des années 90", "Intensité parfois difficile à soutenir"],
    tags: "Drame · Romance · Psychologie · Shojo",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Mars+Fuyumi+Soryo", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Mars+manga+Soryo", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Mars+manga+Fuyumi+Soryo", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
];

let patched = 0;
for (const p of PATCHES) {
  const cover = getCover(content, p.slug);
  const entry = `{
  slug: "${p.slug}",
  title: "${p.title}",
  category: "${p.category}",
  cover: "${cover}",
  tags: "${p.tags}",
  stars: ${p.stars},
  addedAt: "2026-03-22",
  synopsis: ${JSON.stringify(p.synopsis)},
  pros: ${JSON.stringify(p.pros)},
  cons: ${JSON.stringify(p.cons)},
  reviewHtml: \`${p.reviewHtml}\`,
  shops: ${JSON.stringify(p.shops, null, 2)},
  streaming: ${JSON.stringify(p.streaming, null, 2)},
  live: []
}`;
  const r = findAndReplace(content, p.slug, entry);
  if (!r) { console.log(`⚠️ Non trouvé : ${p.slug}`); continue; }
  content = r; patched++; console.log(`✅ ${p.slug}`);
}

// Append new entries
for (const p of NEW_ENTRIES) {
  const entry = `{
  slug: "${p.slug}",
  title: "${p.title}",
  category: "${p.category}",
  cover: "${p.cover}",
  tags: "${p.tags}",
  stars: ${p.stars},
  addedAt: "2026-03-22",
  synopsis: ${JSON.stringify(p.synopsis)},
  pros: ${JSON.stringify(p.pros)},
  cons: ${JSON.stringify(p.cons)},
  reviewHtml: \`${p.reviewHtml}\`,
  shops: ${JSON.stringify(p.shops, null, 2)},
  streaming: ${JSON.stringify(p.streaming, null, 2)},
  live: []
}`;
  content = appendEntry(content, entry);
  patched++; console.log(`✅ ${p.slug} (ajout manuel)`);
}

writeFileSync(FILE, content, "utf-8");
console.log(`\n✅ ${patched} séries patchées/ajoutées (batch4-lot2)`);
