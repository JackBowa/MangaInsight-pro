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

const PATCHES = [
  {
    slug: "the-wallflower-yamatonadeshiko-shichihenge",
    title: "The Wallflower",
    synopsis: "Sunako Nakahara, traumatisée après un rejet violent, se plonge dans une passion obsessionnelle pour les choses morbides. Ses tantes lui proposent un marché à quatre beaux garçons : transformez-la en 'lady parfaite' et vous vivrez dans leur manoir gratuitement. Sunako résiste de toutes ses forces.",
    reviewHtml: `<p>The Wallflower est une comédie shojo complètement délirante qui subvertit tous les codes du genre avec une joie communicative. Sunako est un personnage absolument unique : gothique, obsédée par l'horreur, qui fuit la beauté sous toutes ses formes. La dynamique avec les quatre bishounen qui essaient de la 'transformer' est hilarante.</p><p>Le manga multiplie les situations absurdes avec un timing comique parfait, et la romance avec Kyohei se construit sous les décombres de la folie ambiante. Un des shojo les plus originaux et les plus drôles de sa génération.</p>`,
    pros: ["Héroïne complètement originale et mémorable", "Comédie absurde d'une efficacité redoutable", "Subversion des codes shojo très réussie"],
    cons: ["Humour très répétitif sur la durée", "Peu d'évolution des personnages"],
    tags: "Comédie · Romance · Horreur · Shojo",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=The+Wallflower+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=The+Wallflower+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=The+Wallflower+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "devilman",
    title: "Devilman",
    synopsis: "Akira Fudo, lycéen doux et naïf, est convaincu par son ami mystérieux Ryo de fusionner avec un démon pour combattre les forces démoniaques qui veulent reprendre la Terre. Il devient Devilman, possédant la puissance du démon mais l'âme humaine d'Akira. Une tragédie épique sur la nature humaine.",
    reviewHtml: `<p>Devilman de Go Nagai est une oeuvre fondatrice du manga dark fantasy qui a tout inventé : le hero fusion démon/humain, l'apocalypse biblique, le sacrifice ultime. Créé en 1972, il reste d'une pertinence troublante sur la peur de l'Autre et comment la haine détruit les innocents.</p><p>La conclusion, nihiliste et dévastatrice, est parmi les plus courageuses de l'histoire du manga. Devilman Crybaby (Netflix) a remis en lumière cet oeuvre, mais l'original a une densité narrative et une violence visuelle qui lui sont propres. Un monument incontournable.</p>`,
    pros: ["Oeuvre fondatrice du manga dark fantasy", "Fin nihiliste d'une rare puissance", "Réflexion sur la haine et la peur de l'Autre"],
    cons: ["Dessin daté des années 70", "Rythme très rapide parfois précipité"],
    tags: "Action · Horreur · Sci-fi · Seinen",
    category: "manga",
    stars: 5,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Devilman+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Devilman+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Devilman+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "sekirei",
    title: "Sekirei",
    synopsis: "Minato Sahashi, étudiant raté aux examens d'entrée à l'université, est choisi par Musubi, une jeune femme aux capacités surhumaines appelée Sekirei. Il devient son Ashikabi, le lien humain qui libère ses pouvoirs. Ils se retrouvent plongés dans le Sekirei Plan, un jeu de combat orchestré par la mystérieuse société MBI.",
    reviewHtml: `<p>Sekirei est un manga harem d'action fantastique qui assume pleinement ses conventions. Les combats entre Sekirei sont dynamiques et bien illustrés, et l'univers du Sekirei Plan a une cohérence interne satisfaisante. Minato, contrairement aux protagonistes harem habituels, fait preuve d'une empathie réelle qui enrichit ses relations.</p><p>La série monte en intensité dans ses arcs tardifs et prend ses enjeux au sérieux. Pour les amateurs d'action harem fantastique, c'est un des meilleurs exemples du genre.</p>`,
    pros: ["Combats dynamiques et bien chorégraphiés", "Univers cohérent et bien développé", "Protagoniste plus empathique que la moyenne du genre"],
    cons: ["Très convenu dans ses codes harem", "Fanservice omniprésent"],
    tags: "Action · Comédie · Sci-fi · Seinen",
    category: "manga",
    stars: 3,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Sekirei+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Sekirei+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Sekirei+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "air-gear",
    title: "Air Gear",
    synopsis: "Itsuki Minami, lycéen de rue, découvre les Air Trecks, des rollers motorisés permettant des acrobaties impressionnantes. Il se lance dans la compétition des AT Riders, grimpant les échelons pour devenir le Storm King et obtenir les ailes légendaires. Un shonen de sport extrême débridé.",
    reviewHtml: `<p>Air Gear est un shonen d'action et de sport extrême qui déborde d'énergie. Oh! Great dessine des acrobaties en rollers motorisés avec un dynamisme visuel époustouflant, et les affrontements entre équipes de riders sont visuellement spectaculaires. La progression de Itsuki est portée par un pur enthousiasme communicatif.</p><p>Le manga devient de plus en plus complexe et baroque dans ses arcs tardifs, ce qui divise les lecteurs. Mais pour l'action pure et la liberté de ton, Air Gear est une expérience unique. Un manga de genre qui repousse ses limites.</p>`,
    pros: ["Dynamisme visuel exceptionnel de Oh! Great", "Énergie et enthousiasme communicatifs", "Concept de rollers motorisés original"],
    cons: ["Arcs tardifs très compliqués et parfois incohérents", "Fanservice envahissant"],
    tags: "Action · Sport · Comédie · Shonen",
    category: "manga",
    stars: 3,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Air+Gear+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Air+Gear+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Air+Gear+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "trinity-blood",
    title: "Trinity Blood",
    synopsis: "Dans un futur post-apocalyptique où les vampires (Methuselahs) et les humains sont en guerre, le père Abel Nightroad voyage pour le Vatican. Il cache une nature bien plus dangereuse que celle des vampires : il est un Crusnik, un être qui se nourrit du sang des vampires.",
    reviewHtml: `<p>Trinity Blood est un manga d'action dark fantasy spectaculaire avec une esthétique steampunk/gothique très soignée. Abel Nightroad est un des protagonistes les plus charismatiques du genre : un prêtre jovial qui cache une nature apocalyptique. L'univers post-apocalyptique mêlant Vatican, vampires et technologie est inventif.</p><p>Malheureusement interrompu par le décès de l'auteure du roman original, le manga reste inachevé. Ce qui existe est néanmoins d'une grande qualité visuelle et narrative. Un classique du manga dark fantasy des années 2000.</p>`,
    pros: ["Protagoniste charismatique et mystérieux", "Esthétique gothique/steampunk réussie", "Univers politique complexe et inventif"],
    cons: ["Inachevé suite au décès de l'auteure", "Certains arcs difficiles à suivre sans les romans"],
    tags: "Action · Fantasy · Sci-fi · Seinen",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Trinity+Blood+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Trinity+Blood+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Trinity+Blood+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "gosick",
    title: "Gosick",
    synopsis: "Dans un pays fictif d'Europe de l'Ouest dans les années 1920, Kazuya Kujo est un étudiant japonais qui découvre dans la bibliothèque du lycée Victorique de Blois, une petite fille au génie déductif extraordinaire. Ensemble, ils résolvent des mystères tout en naviguant dans un contexte historique pré-Seconde Guerre mondiale.",
    reviewHtml: `<p>Gosick est un polar historique atypique et charmant, avec une héroïne à la Sherlock Holmes dans un cadre européen des années 1920. Victorique est un personnage fascinant, au génie froid mais à l'humanité profonde. La dynamique avec Kazuya est bien construite, oscillant entre assistante/détective et quelque chose de plus complexe.</p><p>Les enquêtes sont bien construites et le contexte pré-Seconde Guerre mondiale donne de la profondeur à l'ensemble. Un manga différent des standards du genre, avec une atmosphère unique.</p>`,
    pros: ["Héroïne détective au caractère exceptionnel", "Atmosphère Europe des années 1920 bien rendue", "Mystères bien construits"],
    cons: ["Certains arcs d'enquête longuets", "Résolution parfois trop rapide"],
    tags: "Mystère · Drame · Romance · Seinen",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Gosick+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Gosick+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Gosick+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "hana-kimi-for-you-in-full-blossom",
    title: "Hana-Kimi",
    synopsis: "Mizuki Ashiya, Japonaise-Américaine, se déguise en garçon pour intégrer un lycée masculin japonais et être près de Shuichi Izumi, le sauteur en hauteur dont elle est fan. Elle tente de le convaincre de reprendre la compétition tout en cachant son identité à tout le monde.",
    reviewHtml: `<p>Hana-Kimi est un shojo classique du travestissement au lycée, fondateur du genre. La prémisse naïve cache un manga plus nuancé sur l'amitié, la confiance et les sacrifices. Mizuki est une héroïne sympathique, et Izumi est un protagoniste masculin bien développé dont la relation avec Mizuki évolue naturellement.</p><p>La série est meilleure dans ses moments d'amitié et de confiance que dans ses quiproquos, et la conclusion est satisfaisante. Un classique shojo incontournable pour les fans du genre.</p>`,
    pros: ["Pionnier du genre travestissement-au-lycée", "Relation protagonistes bien développée", "Moments d'amitié sincères"],
    cons: ["Certains quiproquos trop prolongés", "Rythme inégal"],
    tags: "Comédie · Drame · Romance · Shojo",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Hana-Kimi+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Hana+Kimi+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Hana-Kimi+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "brave-10",
    title: "Brave 10",
    synopsis: "Dans le Japon de l'ère Sengoku, la prêtresse Isanami fuit après le massacre de son sanctuaire. Elle est sauvée par le ninja Saizo Kirigakure, qui la conduit auprès de Yukimura Sanada. Ce dernier cherche à réunir dix braves guerriers dotés de pouvoirs spéciaux pour forger une force invincible.",
    reviewHtml: `<p>Brave 10 est un manga d'action historique qui transpose les guerriers légendaires de l'ère Sengoku dans un format shojo-seinen dynamique. Les Dix Braves ont des personnalités bien différenciées et leurs pouvoirs élémentaires donnent lieu à des combats variés. L'ère Sengoku est un cadre toujours spectaculaire.</p><p>La série prend ses personnages au sérieux tout en maintenant un rythme d'action élevé. Un bon manga d'action historique pour les amateurs de ninjas et de l'ère des batailles.</p>`,
    pros: ["Galerie de personnages bien différenciés", "Action ninja de l'ère Sengoku bien rendue", "Bonne énergie narrative"],
    cons: ["Personnages féminins peu développés", "Certains arcs trop surchargés"],
    tags: "Action · Aventure · Historique · Shonen",
    category: "manga",
    stars: 3,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Brave+10+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Brave+10+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Brave+10+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "kare-first-love",
    title: "Kare First Love",
    synopsis: "Karin Karino, complexée par son apparence, ne croit pas pouvoir plaire à qui que ce soit. Mais Kiriya Aoi, lycéen populaire et photographe en herbe, s'intéresse à elle sincèrement. C'est le premier amour de Karin, et elle doit naviguer entre insécurité, jalousie et apprentissage de la confiance.",
    reviewHtml: `<p>Kare First Love est un shojo romantique sincère et émotionnellement honnête sur les complexes de l'adolescence. Karin est une héroïne attachante dont l'insécurité est traitée avec bienveillance plutôt qu'ironie. La relation avec Kiriya est construite avec patience et tendresse.</p><p>Miyasaka Kaho crée une romance qui prend le temps de l'émotion, et la progression vers la confiance de Karin est satisfaisante. Un shojo feel-good solide pour les amateurs de romance sincère.</p>`,
    pros: ["Traitement bienveillant des complexes adolescents", "Romance construite avec patience", "Héroïne attachante et humaine"],
    cons: ["Rythme lent", "Certaines situations répétitives"],
    tags: "Drame · Romance · Quotidien · Shojo",
    category: "manga",
    stars: 3,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Kare+First+Love+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Kare+First+Love+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Kare+First+Love+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "no-6",
    title: "No. 6",
    synopsis: "Dans la cité utopique No. 6, Shion mène une vie parfaite jusqu'au jour où il abrite un fugitif nommé Nezumi. Cette rencontre le plonge dans la réalité cachée de sa société idéale, et des années plus tard il découvre une vérité horrifiante sur les fondations de No. 6.",
    reviewHtml: `<p>No. 6 est une dystopie shojo/seinen d'une intelligence narrative rare, qui explore comment une société 'parfaite' maintient sa perfection sur des fondations de violence cachée. La relation entre Shion et Nezumi, à la fois amicale, philosophique et romantique, est au coeur de l'oeuvre et d'une authenticité rare.</p><p>L'univers de No. 6 est construit avec une précision satisfaisante, et la critique sociale est incisive sans être didactique. Une oeuvre courte mais dense, qui récompense l'attention.</p>`,
    pros: ["Critique de l'utopie incisive et bien construite", "Relation Shion/Nezumi d'une authenticité rare", "Univers dystopique cohérent et effrayant"],
    cons: ["Format court qui expédie certains éléments", "Fin laissant des questions ouvertes"],
    tags: "Sci-fi · Drame · Dystopie · Seinen",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=No+6+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=No+6+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=No+6+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "bamboo-blade",
    title: "Bamboo Blade",
    synopsis: "Kojirou Ishida, professeur de kendo dans un lycée, parie avec un ami qu'il peut former une équipe féminine de kendo imbattable. Il recrute Tamaki Kawazoe, lycéenne timide mais de niveau exceptionnel, et d'autres filles pour former cette équipe. Un manga de sport scolaire mêlant kendo, comédie et camaraderie.",
    reviewHtml: `<p>Bamboo Blade est un manga de sport scolaire charmant et bien équilibré qui aime sincèrement le kendo. Les personnages, notamment Tamaki (geek du kendo et des sentai), sont attachants et bien différenciés. Le manga alterne comédie légère et moments sérieux de compétition avec un bon équilibre.</p><p>Sans être révolutionnaire, Bamboo Blade est un exemple réussi de manga sportif qui prend autant soin de ses personnages que de son sport. Parfait pour les amateurs de sport scolaire.</p>`,
    pros: ["Personnages bien différenciés et attachants", "Équilibre comédie/sport bien maîtrisé", "Amour sincère pour le kendo"],
    cons: ["Sans grande ambition narrative", "Certains arcs de compétition longuets"],
    tags: "Comédie · Quotidien · Sport · Seinen",
    category: "manga",
    stars: 3,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Bamboo+Blade+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Bamboo+Blade+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Bamboo+Blade+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "genshiken",
    title: "Genshiken",
    synopsis: "Kanji Sasahara intègre l'université et rejoint timidement le 'Genshiken', un club d'otakus dont les membres sont passionnés de manga, anime, figurines et jeux. La série suit leur vie d'otakus assumés et leur évolution personnelle à travers cette passion partagée.",
    reviewHtml: `<p>Genshiken est LE manga sur la culture otaku japonaise, traité avec une affection et un humour autoderisoires parfaitement calibrés. Shimoku Kio crée des personnages dont l'amour du manga/anime est traité comme quelque chose d'entièrement légitime, sans le moraliser ni le caricaturer.</p><p>La série est aussi une comédie romantique honnête et une réflexion sur l'identité à l'université. La suite Genshiken Nidaime explore de nouvelles thématiques avec la même finesse. Un must pour tous les amateurs de culture otaku.</p>`,
    pros: ["Portrait affectueux et précis de la culture otaku", "Personnages attachants et bien développés", "Comédie romantique bien équilibrée"],
    cons: ["Nécessite une familiarité avec la culture otaku pour pleinement apprécier", "Rythme lent"],
    tags: "Comédie · Romance · Quotidien · Seinen",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Genshiken+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Genshiken+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Genshiken+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "lady-snowblood",
    title: "Lady Snowblood",
    synopsis: "Yuki Kashima, née dans une prison d'une mère mourante, a été élevée uniquement pour la vengeance. Sa mère a été violée et son père tué par un gang de quatre personnes. Yuki est une tueuse implacable qui traque les survivants de ce gang dans le Japon de l'ère Meiji.",
    reviewHtml: `<p>Lady Snowblood est un manga de vengeance classique des années 70, oeuvre fondatrice du chanbara féminin qui a inspiré Kill Bill de Tarantino. Kazuo Koike et Masaki Kamiya créent une protagoniste d'une froideur et d'une détermination absolues dans un Japon Meiji magnifiquement rendu.</p><p>La violence est graphique mais au service d'un récit sur le destin et le sacrifice. Yuki est l'un des personnages féminins les plus iconiques du manga des années 70, et l'influence de cette oeuvre sur la culture populaire mondiale est considérable.</p>`,
    pros: ["Oeuvre fondatrice du chanbara féminin", "Protagoniste iconique d'une rare froideur", "Japon Meiji magnifiquement rendu"],
    cons: ["Violence graphique qui peut rebuter", "Dessin daté des années 70"],
    tags: "Action · Drame · Historique · Seinen",
    category: "manga",
    stars: 5,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Lady+Snowblood+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Lady+Snowblood+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Lady+Snowblood+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "tomo-chan-is-a-girl",
    title: "Tomo-chan Is a Girl!",
    synopsis: "Tomo Aizawa est une fille athlétique et forte qui a grandi avec son ami d'enfance Jun. Elle réalise qu'elle est amoureuse de lui, mais Jun la voit toujours comme son meilleur ami masculin depuis que leur amitié s'est construite sur la bagarre. Elle tente de lui faire comprendre qu'elle est une fille.",
    reviewHtml: `<p>Tomo-chan Is a Girl! est une comédie romantique courte et réjouissante qui joue avec les stéréotypes de genre de façon bienveillante. Le format 4-koma adapté (une gag par page) donne un rythme parfait à la comédie, et la dynamique Tomo/Jun est jouissive dans sa lenteur calculée.</p><p>Fumita Yanagida maîtrise parfaitement le timing comique, et la série sait aussi être sincèrement émouvante dans ses moments importants. Une comédie romantique courte et efficace, dont la résolution est payante.</p>`,
    pros: ["Timing comique parfait", "Dynamique protagoniste/love interest réjouissante", "Format court et bien rythmé"],
    cons: ["Concept unique exploité jusqu'à épuisement", "Certains personnages secondaires peu développés"],
    tags: "Comédie · Romance · Quotidien · Seinen",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Tomo-chan+Is+a+Girl", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Tomo-chan+Is+a+Girl", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Tomo-chan+Is+a+Girl+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "lucifer-and-the-biscuit-hammer",
    title: "Lucifer and the Biscuit Hammer",
    synopsis: "Yuuhi Amamiya, lycéen apathique, est désigné Chevalier du Lézard pour protéger la Terre d'un mage maléfique. Sa princesse est Samidare Asahina, mais elle lui révèle que son vrai plan est de détruire la Terre elle-même après l'avoir sauvée. Yuuhi décide de la suivre dans cette ambition absurde.",
    reviewHtml: `<p>Lucifer and the Biscuit Hammer est une oeuvre culte qui cache sous une prémisse absurde une des explorations les plus sincères du manga sur la raison de vivre et de se battre. Les personnages, tous des Chevaliers brisés ou hantés, ont des histoires d'une profondeur émotionnelle rare.</p><p>L'auteur Satoshi Mizukami construit quelque chose d'unique : une histoire de combat fantastique où l'enjeu n'est jamais vraiment de sauver le monde mais de décider pourquoi ça vaut la peine. Un chef-d'oeuvre discret qui mérite d'être lu.</p>`,
    pros: ["Exploration sincère et profonde de la raison de vivre", "Personnages tous complexes et marquants", "Prémisse absurde au service d'émotions réelles"],
    cons: ["Dessin simple qui peut décourager", "Début lent"],
    tags: "Action · Aventure · Fantasy · Seinen",
    category: "manga",
    stars: 5,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Lucifer+Biscuit+Hammer", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Lucifer+Biscuit+Hammer+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Lucifer+Biscuit+Hammer+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "moyasimon-tales-of-agriculture",
    title: "Moyashimon",
    synopsis: "Tadayasu Sawaki intègre une université agricole avec une capacité unique : il peut voir et communiquer avec les micro-organismes à l'oeil nu. Ces bactéries et champignons visibles lui apparaissent comme des créatures mignonnes aux dialogues savoureux. Une série éducative et humoristique sur la fermentation et la microbiologie.",
    reviewHtml: `<p>Moyashimon est une oeuvre absolument unique qui transforme la microbiologie en comédie adorable et en cours magistral sur la fermentation. Les micro-organismes anthropomorphisés sont irrésistibles, et le manga enseigne de vrais concepts scientifiques avec une légèreté et une précision qui forcent l'admiration.</p><p>Masayuki Ishikawa crée un manga éducatif qui n'est jamais ennuyeux, grâce à des personnages savoureux et des situations comiques bien trouvées. Un manga parfaitement original qui ne ressemble à rien d'autre.</p>`,
    pros: ["Concept absolument unique dans le manga", "Micro-organismes anthropomorphisés irrésistibles", "Contenu scientifique précis et accessible"],
    cons: ["Niché dans son sujet, peut décourager les non-initiés à la biologie", "Rythme lent"],
    tags: "Comédie · Quotidien · Science · Seinen",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Moyashimon+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Moyashimon+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Moyashimon+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "boys-run-the-riot",
    title: "Boys Run the Riot",
    synopsis: "Ryo est un lycéen transgenre (né fille, se ressent garçon) qui cache son identité. Il rencontre Fukuda, un lycéen délinquant transféré. Ensemble, ils lancent une marque de streetwear pour exprimer leur identité. Un manga sur la mode, l'identité de genre et l'amitié.",
    reviewHtml: `<p>Boys Run the Riot est un manga court mais percutant sur l'identité transgenre, traité avec une honnêteté et une sensibilité exceptionnelles. Keito Gaku représente l'expérience de Ryo sans la minimiser ni la dramatiser à l'excès, et le regard de la société est montré avec précision.</p><p>La dimension mode/streetwear est originale et bien utilisée comme vecteur d'expression identitaire. Un manga courageux et bienveillant, pionnier sur un sujet rare dans le manga mainstream.</p>`,
    pros: ["Représentation transgenre honnête et sensible", "Mode/streetwear comme vecteur d'identité original", "Amitié masculine sincère et attachante"],
    cons: ["Format court qui ne développe pas tous les aspects", "Fin un peu précipitée"],
    tags: "Drame · Quotidien · LGBTQ+ · Seinen",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Boys+Run+the+Riot", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Boys+Run+the+Riot+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Boys+Run+the+Riot+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "basara",
    title: "Basara",
    synopsis: "Dans un Japon post-apocalyptique divisé en royaumes tyranniques, Tatara est censé être 'l'Enfant de la Destinée' pour mener la révolution. À sa mort, sa jumelle Sarasa prend son identité et porte le fardeau de la prophétie. Elle tombe amoureuse d'un mystérieux inconnu, ignorant qu'il est le prince ennemi.",
    reviewHtml: `<p>Basara est un des grands chefs-d'oeuvre du shojo des années 90, une épopée post-apocalyptique d'une ambition narrative rare pour le genre. Yumi Tamura construit un récit politique et romantique d'une envergure comparable aux meilleurs mangas historiques, avec une héroïne qui porte le poids du destin avec une crédibilité totale.</p><p>La relation entre Sarasa et Shuri (le prince ennemi) est une des romances les plus tragiques et bien construites du manga, déchirée entre amour et idéologie. Un manga que tout amateur de shojo se doit de lire.</p>`,
    pros: ["Épopée post-apocalyptique d'une ambition rare pour le shojo", "Romance tragique d'une profondeur exceptionnelle", "Héroïne qui porte le poids du destin avec crédibilité"],
    cons: ["Format long (27 volumes) qui peut décourager", "Dessin daté des années 90"],
    tags: "Action · Aventure · Drame · Romance · Shojo",
    category: "manga",
    stars: 5,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Basara+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Basara+manga+Tamura", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Basara+manga+Yumi+Tamura", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
];

const NEW_ENTRIES = [
  {
    slug: "mushishi",
    title: "Mushishi",
    cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30017-fVGjXU8dQJJb.jpg",
    synopsis: "Ginko est un Mushishi, un spécialiste des Mushi, êtres primitifs qui existent entre le monde visible et invisible. Il voyage de village en village pour aider les gens dont la vie est affectée par des Mushi mystérieux, résolvant des problèmes souvent impossibles à comprendre pour les non-initiés.",
    reviewHtml: `<p>Mushishi est une oeuvre d'une beauté et d'une sérénité absolument uniques dans le manga. Yuki Urushibara crée un recueil d'histoires courtes d'une atmosphère contemplative et mélancolique, où chaque rencontre avec un Mushi est une métaphore sur la vie, la mort et la coexistence avec l'incompréhensible.</p><p>Ginko est un personnage d'une discrétion parfaite, présent sans dominer, et chaque habitant rencontré porte une histoire profondément humaine. Mushishi est une expérience de lecture méditative, à savourer lentement, qui laisse une empreinte durable et apaisante.</p>`,
    pros: ["Atmosphère contemplative et mélancolique unique", "Histoires courtes d'une profondeur humaniste rare", "Ginko personnage d'une discrétion parfaite"],
    cons: ["Rythme très lent, clairement non adapté à tous les lecteurs", "Peu de fil narratif continu"],
    tags: "Aventure · Fantastique · Surnaturel · Quotidien · Seinen",
    category: "manga",
    stars: 5,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Mushishi+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Mushishi+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Mushishi+manga", logo: "/logos/amazon.png" },
    ],
    streaming: [],
  },
  {
    slug: "happiness-oshimi",
    title: "Happiness",
    cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx86077-6lX7W9U0LZWF.jpg",
    synopsis: "Makoto Okazaki, lycéen ordinaire et isolé, est transformé en demi-vampire après une agression dans la nuit. Il tente de contrôler sa soif de sang tout en naviguant sa vie de lycéen, et développe une connexion étrange avec la vampire qui l'a mordu.",
    reviewHtml: `<p>Happiness est Shuzo Oshimi (Flowers of Evil, Inside Mari) dans un registre vampire atmosphérique et psychologiquement dense. L'auteur transpose son exploration habituelle de la transformation intérieure et de l'aliénation adolescente dans un cadre vampirique qui s'y prête parfaitement.</p><p>L'ambiance est sombre et oppressante, la soif de sang métaphore évidente mais efficace de l'éveil sexuel et de la transformation. Oshimi prouve qu'il peut rendre le vampire japonais unique. Pour les fans de manga d'horreur psychologique.</p>`,
    pros: ["Atmosphère oppressante parfaitement maîtrisée", "Métaphore vampire/transformation adolescente efficace", "Style graphique expressif d'Oshimi"],
    cons: ["Résolution moins satisfaisante que ses autres oeuvres", "Personnages secondaires peu développés"],
    tags: "Drame · Horreur · Romance · Surnaturel · Seinen",
    category: "manga",
    stars: 4,
    shops: [
      { name: "Manganim", url: "https://www.manganim.fr/catalogsearch/result/?q=Happiness+Oshimi+manga", logo: "/logos/manganim.png" },
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0!1&Search=Happiness+Oshimi+manga", logo: "/logos/fnac.png" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=Happiness+Oshimi+manga", logo: "/logos/amazon.png" },
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
console.log(`\n✅ ${patched} séries patchées/ajoutées (batch4-lot4)`);
