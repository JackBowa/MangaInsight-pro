/**
 * Patch lot 4/5 — séries 60-72
 * node scripts/patch-batch2-lot4.mjs
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, "../data/series.ts");

const L  = "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594";
const LF = "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png";
const LA = "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg";
const LC = "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png";
const LN = "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940";

const shopManga  = (q) => [
  { name: "Manganim", url: `https://manganim.fr/search?q=${q}`,                                  logo: L  },
  { name: "Fnac",     url: `https://www.fnac.com/SearchResult/ResultList.aspx?Search=${q}+tome`, logo: LF },
  { name: "Amazon",   url: `https://www.amazon.fr/s?k=${q}+tome`,                                logo: LA },
];
const shopManhwa = (q) => [
  { name: "Fnac",   url: `https://www.fnac.com/SearchResult/ResultList.aspx?Search=${q}`, logo: LF },
  { name: "Amazon", url: `https://www.amazon.fr/s?k=${q}`,                                logo: LA },
];
const shopManhua = (q) => [
  { name: "Fnac",   url: `https://www.fnac.com/SearchResult/ResultList.aspx?Search=${q}`, logo: LF },
  { name: "Amazon", url: `https://www.amazon.fr/s?k=${q}`,                                logo: LA },
];
const cr = (q) => [{ name: "Crunchyroll", url: `https://www.crunchyroll.com/fr/search?q=${encodeURIComponent(q)}`, logo: LC }];
const nf = (q) => [{ name: "Netflix",     url: `https://www.netflix.com/search?q=${encodeURIComponent(q)}`,       logo: LN }];

const PATCHES = {

  "shiki": {
    tags: "Horreur · Vampire · Seinen · Psychologie",
    stars: 4,
    synopsis: "Dans le village isolé de Sotoba, une série de décès inexpliqués survient à la suite de l'installation d'une mystérieuse famille dans un manoir de style occidental. Le docteur Toshio Ozaki commence à comprendre que les morts ne restent pas morts. Shiki est un thriller vampirique qui s'interroge sur qui sont vraiment les monstres : les vampires ou les humains qui les pourchassent.",
    pros: ["Tension montante parfaitement dosée sur la première moitié", "Renversement moral brillant dans la seconde moitié qui remet tout en question", "Personnages des deux camps traités avec une empathie égale", "Atmosphère de village coupé du monde oppressante et réussie"],
    cons: ["Galerie de personnages très large qui peut dérouter au départ", "Rythme lent dans les premiers volumes"],
    reviewHtml: `<p>Shiki est un manga d'horreur qui joue avec les conventions du genre vampirique pour produire quelque chose de nettement plus ambigu et perturbant. Fuyumi Ono et Ryu Fujisaki ne se contentent pas de raconter des humains contre des vampires : ils construisent progressivement un questionnement sur la légitimité de la survie et sur ce qui définit un monstre.</p><p>Le vrai tour de force de Shiki est son retournement de perspective à mi-parcours. Quand les humains commencent à riposter, leur violence est aussi froide et méthodique que celle qu'ils condamnaient. Le lecteur se retrouve à souffrir pour les deux camps, sans boussole morale claire. C'est rare et courageux dans le genre horreur.</p><p>L'atmosphère de Sotoba, village fermé sur lui-même, est d'une efficacité remarquable. La lenteur initiale est un investissement qui se rentabilise complètement dans les arcs finaux.</p>`,
    shops: shopManga("Shiki+manga"),
    streaming: [],
  },

  "skeleton-knight-in-another-world": {
    tags: "Isekai · Comédie · Fantasy · Action",
    stars: 2,
    synopsis: "Un joueur se réveille dans le monde de son jeu préféré, mais son avatar est un squelette en armure complète — impossible à retirer sans perdre sa magie. Sous le nom d'Arc, il parcourt ce monde médiéval fantastique en essayant de dissimuler sa nature monstrueuse, tout en aidant les gens qu'il croise et en découvrant les injustices de cette société.",
    pros: ["Prémisse sympathique du héros caché sous une apparence monstrueuse", "Action fluide et combats dynamiques", "Ton léger et humoristique accessible"],
    cons: ["Peu de profondeur narrative ou de développement de personnages", "Protagoniste trop puissant sans vrai challenge", "Très générique dans ses conventions d'isekai"],
    reviewHtml: `<p>Skeleton Knight in Another World est un isekai honnête qui fait ce qu'il promet sans prétendre à plus. Arc est un protagoniste sympathique et sa situation de squelette inadapté au monde humain génère quelques gags amusants. La contrainte visuelle de son armure est exploitée correctement.</p><p>Le manga souffre des maux habituels du genre : un protagoniste trop puissant, des enjeux limités, une progression prévisible. Pour les lecteurs qui cherchent une fantasy légère et détendue sans attente particulière, c'est une lecture agréable. Pour ceux qui cherchent de la profondeur, ce n'est pas ici qu'il faut chercher.</p>`,
    shops: shopManga("Skeleton+Knight"),
    streaming: cr("Skeleton Knight in Another World"),
  },

  "skip-and-loafer": {
    tags: "Romance · Slice of Life · Seinen · École",
    stars: 4,
    synopsis: "Mitsumi Iwakura débarque à Tokyo depuis sa petite ville de province avec un plan de vie détaillé et une ambition débordante. Son premier jour de lycée tourne mal, mais elle rencontre Sousuke Shima, beau et populaire, qui l'aide sans y penser. Entre la candeur de Mitsumi et la façade décontractée de Shima qui cache quelque chose, une amitié puis une romance se construisent naturellement.",
    pros: ["Mitsumi est une héroïne d'un enthousiasme et d'une sincérité contagieux", "Romance qui se développe organiquement sans manipulation narrative artificielle", "Traitement sensible de la pression sociale et de l'identité au lycée", "Art de Misaki Takamatsu expressif et chaleureux"],
    cons: ["Rythme très doux, peut manquer de piquant pour certains", "Certains arcs secondaires moins captivants"],
    reviewHtml: `<p>Skip and Loafer est une des romances lycéennes les plus fraîches et les plus sincères du manga récent. Mitsumi Iwakura, avec ses plans en PowerPoint pour sa vie et sa candeur totale face au monde de Tokyo, est un personnage immédiatement attachant dont l'enthousiasme est communicatif.</p><p>Ce qui distingue le manga, c'est sa façon de traiter Shima. Sous la surface de garçon parfait et populaire se cache quelqu'un qui a perdu contact avec ses propres désirs, qui joue un rôle depuis si longtemps qu'il ne sait plus qui il est vraiment. La rencontre avec Mitsumi, qui l'accepte naturellement sans rien attendre en retour, est un catalyseur de croissance rarement aussi bien exécuté.</p><p>Skip and Loafer est doux, intelligent et terriblement honnête sur ce que signifie être adolescent loin de chez soi. Une belle lecture.</p>`,
    shops: shopManga("Skip+and+Loafer"),
    streaming: cr("Skip and Loafer"),
  },

  "soul-land": {
    tags: "Action · Fantasy · Cultivation · Manhua",
    stars: 3,
    synopsis: "Tang San est un disciple du Tangmen, clan des arts cachés, qui se suicide après avoir volé les plus grands secrets de son clan. Il se réincarne dans le monde de Soul Land où chaque être humain possède une Âme Ancestrale, une manifestation spirituelle qui détermine son destin. Né avec une Âme bleue argentée considérée comme inutile, il est décidé à prouver sa valeur.",
    pros: ["Système de cultivation original avec ses propres règles et ses propres hiérarchies", "Fusion inventive entre arts martiaux cachés et fantasy spirituelle", "Progression du personnage satisfaisante sur la longueur"],
    cons: ["Récit très long avec des arcs qui s'étendent", "Conventions du genre cultivation qui sembleront répétitives aux non-initiés", "Art inégal selon les adaptateurs"],
    reviewHtml: `<p>Soul Land est l'une des grandes séries du genre cultivation chinois, adapté en manhua depuis le roman web de Tang Jia San Shao. Le mélange entre les arts cachés du Tangmen, héritage du roman de wuxia, et le système d'Âmes Ancestrales de la fantasy occidentalisée est inventif et donne à la série une identité distincte dans le genre.</p><p>Tang San est un protagoniste compétent dont la progression est bien dosée. Les fondations du système de pouvoir, claires et cohérentes, permettent aux combats d'avoir des enjeux tactiques réels. Pour les lecteurs déjà familiers du genre cultivation, Soul Land est une référence solide. Pour les nouveaux venus, c'est une bonne porte d'entrée dans cet univers.</p>`,
    shops: shopManhua("Soul+Land+manga"),
    streaming: [],
  },

  "the-ancient-magus-bride": {
    tags: "Fantasy · Romance · Surnaturel · Seinen",
    stars: 4,
    synopsis: "Chise Hatori, orpheline de seize ans sans foyer ni avenir, se vend aux enchères dans un marché de l'occulte. Elle est achetée par Elias Ainsworth, une créature magique à tête de crâne animal, qui lui révèle qu'elle est une Sleigh Beggy, une rare source de magie capable d'en absorber et en donner. Il lui annonce qu'il en fera sa fiancée et son apprentie. Un conte de fées sombre sur la guérison et l'appartenance.",
    pros: ["Worldbuilding du folklore européen et japonais d'une richesse et d'une beauté rares", "Chise est un personnage fragile et attachant dont la guérison progressive est émouvante", "Art de Kore Yamazaki d'une beauté envoûtante", "Exploration sincère du deuil, de l'acceptation de soi et du désir d'appartenir"],
    cons: ["Relation fiancé/apprentie entre une mineure et une entité ancienne inconfortable pour certains lecteurs", "Rythme contemplatif qui peut décourager les lecteurs d'action"],
    reviewHtml: `<p>The Ancient Magus' Bride est un manga qui ressemble à un conte de fées adulte : beau, étrange, parfois sombre, avec des créatures qui défient la catégorisation morale. Kore Yamazaki a construit un univers où le folklore des îles britanniques et la magie japonaise coexistent naturellement, et l'ensemble est visuellement somptueux.</p><p>Chise est un personnage d'une vulnérabilité touchante. Une fille qui se croit sans valeur et qui accepte sa vente comme une délivrance apprend lentement à désirer vivre pour elle-même. Sa relation avec Elias, entité ancienne qui ne comprend pas les émotions humaines mais cherche à les apprendre, est complexe et traitée avec une honnêteté qui évite les facilités romantiques.</p><p>The Ancient Magus' Bride récompense les lecteurs patients qui cherchent quelque chose d'atmosphérique et d'émotionnellement riche. C'est un manga qui s'apprécie comme un conte, pas comme une aventure.</p>`,
    shops: shopManga("Ancient+Magus+Bride"),
    streaming: cr("The Ancient Magus Bride"),
  },

  "the-case-study-of-vanitas": {
    tags: "Fantasy · Romance · Aventure · Seinen",
    stars: 4,
    synopsis: "Dans un Paris steampunk du XIXe siècle, Noé Archiviste arrive depuis le monde des vampires à la recherche du mystérieux Livre de Vanitas. Il rencontre Vanitas, un humain excentrique et arrogant qui prétend posséder ce grimoire maudit et l'utilise pour soigner les vampires corrompus par leurs noms. Une aventure sur fond de comédie, de secrets et de manipulation entre deux personnages que tout oppose.",
    pros: ["Direction artistique steampunk de Paris d'une élégance et d'une richesse remarquables", "Dynamique Noé-Vanitas hilarante et progressivement touchante", "Jun Mochizuki maîtrise la gestion des révélations et du mystère", "Humour et drama équilibrés avec expertise"],
    cons: ["Structure narrative complexe avec de nombreux fils qui exigent de l'attention", "Rythme lent dans certains arcs de worldbuilding"],
    reviewHtml: `<p>The Case Study of Vanitas est Jun Mochizuki au meilleur de sa forme. Après Pandora Hearts, elle revient avec un manga vampirique steampunk d'une sophistication narrative et visuelle impressionnante. Le Paris imaginaire qu'elle construit est un personnage en soi, somptueux et cohérent.</p><p>La relation entre Noé et Vanitas est le coeur du manga. Leur dynamique de binôme comique cache des enjeux bien plus sombres que ce que leurs chamailleries laissent entrevoir. Mochizuki excelle dans cet art de laisser des indices que le lecteur assemble progressivement en quelque chose d'inévitable et douloureux.</p><p>Pour les amateurs de fantasy romantique avec du mystère et de l'humour, The Case Study of Vanitas est parmi les meilleures propositions du manga actuel. Une oeuvre ambitieuse qui tient ses promesses.</p>`,
    shops: shopManga("Case+Study+of+Vanitas"),
    streaming: cr("The Case Study of Vanitas"),
  },

  "the-eminence-in-shadow": {
    tags: "Isekai · Comédie · Action · Seinen",
    stars: 4,
    synopsis: "Cid Kagenou rêve depuis l'enfance d'être une puissance de l'ombre, un stratège secret qui manipule les événements depuis les coulisses. Réincarné dans un monde de fantasy, il crée une organisation fictive appelée Shadow Garden pour jouer son rôle de maître de l'ombre imaginaire. Le problème : ses inventions absurdes s'avèrent toutes réelles, et Shadow Garden combat de vraies conspiration sans que Cid le sache.",
    pros: ["Concept de parodie méta de l'isekai d'une intelligence et d'une constance rares", "Cid est le personnage le plus délibérément absurde et satisfaisant de l'isekai moderne", "Humour sur l'obliviousness totale du protagoniste face à la réalité jamais épuisé", "Combats spectaculaires malgré le ton parodique"],
    cons: ["Les personnages secondaires sont moins développés que le concept principal", "Peu d'enjeux émotionnels au-delà de la comédie"],
    reviewHtml: `<p>The Eminence in Shadow est la meilleure parodie d'isekai depuis One Punch Man. Le concept est d'une simplicité géniale : un garçon convaincu d'être dans un film de genre invente une fiction et la réalité s'y conforme parfaitement, à son insu total. Cid ne sait jamais ce qui se passe vraiment, et c'est pour ça que chaque scène est hilarante.</p><p>Ce qui distingue Touzai et son adaptation manga d'une simple comédie est la cohérence de l'exécution. Les membres de Shadow Garden sont de vraies antagonistes de puissance réelle, et leurs combats sont spectaculaires malgré le fait que Cid les traverse en mode "je joue mon rôle de badass de l'ombre". L'absurde est traité avec un sérieux total, ce qui est le secret de son efficacité.</p><p>The Eminence in Shadow est une lecture jouissive pour quiconque connaît suffisamment les codes de l'isekai pour apprécier leur démolition méthodique et affectueuse.</p>`,
    shops: shopManga("Eminence+in+Shadow"),
    streaming: cr("The Eminence in Shadow"),
  },

  "the-ghost-in-the-shell": {
    tags: "Sci-fi · Cyberpunk · Seinen · Philosophie",
    stars: 5,
    synopsis: "Dans un Japon cyberpunk du futur proche, le Major Motoko Kusanagi dirige la Section 9, une unité de police spécialisée dans la cybercriminalité. Son corps est presque entièrement prothétique, et elle s'interroge constamment sur la nature de son identité : y a-t-il encore quelque chose d'humain en elle ? Quand elle traque un mystérieux hacker appelé le Puppet Master, les questions sur la conscience et l'identité deviennent existentielles.",
    pros: ["Oeuvre fondatrice du cyberpunk mondial, influence immense sur toute la SF qui a suivi", "Questionnements philosophiques sur l'identité, la conscience et l'humanité d'une profondeur réelle", "Masamune Shirow construit un worldbuilding technologique d'une cohérence remarquable", "Kusanagi est l'un des personnages féminins les plus iconiques de toute la SF"],
    cons: ["Très dense, avec de nombreuses notes de bas de page et digressions techniques", "Humour grivois de Shirow déplace certains lecteurs"],
    reviewHtml: `<p>Ghost in the Shell est l'un des manga les plus importants jamais publiés, point. Masamune Shirow a posé en 1989 des questions sur l'identité numérique, la conscience artificielle et la frontière entre humain et machine qui sont plus pertinentes aujourd'hui qu'elles ne l'étaient à l'époque. L'influence de cette oeuvre sur la science-fiction mondiale est impossible à surestimer.</p><p>Le Major Kusanagi est un personnage d'une densité philosophique rare. Son questionnement sur ce qui constitue son "ghost", son âme dans un corps artificiel, est traité avec une honnêteté qui refuse les réponses faciles. Shirow ne résout pas le problème de la conscience, il l'expose dans toute sa complexité vertigineuse.</p><p>Le manga original est plus dense et plus technique que le film de Mamoru Oshii, avec plus d'humour et plus de digressions. C'est une oeuvre qui exige de l'engagement mais qui le récompense largement. Un chef-d'oeuvre fondateur de la science-fiction.</p>`,
    shops: shopManga("Ghost+in+the+Shell"),
    streaming: nf("Ghost in the Shell"),
  },

  "the-prince-of-tennis": {
    tags: "Tennis · Sport · Shōnen · Comédie",
    stars: 3,
    synopsis: "Ryoma Echizen, prodige du tennis de douze ans formé aux États-Unis, intègre l'équipe de tennis du lycée Seishun. Avec ses coéquipiers variés et sous la direction de l'entraîneur Ryuzaki, ils progressent vers les championnats nationaux. Prince of Tennis est le manga de sport qui a popularisé le tennis au Japon tout en poussant les limites du réalisme sportif à leurs extrêmes absolus.",
    pros: ["A rendu le tennis populaire au Japon auprès d'une génération entière", "Galerie de personnages aux styles et personnalités très variés", "Les techniques de tennis impossibles ont une iconicité visuelle indéniable", "Humour involontaire sur l'escalade des pouvoirs sportifs"],
    cons: ["Physique du tennis complètement abandonné dès les arcs médians", "Ryoma est un protagoniste distant et peu attachant", "Les suites (New Prince of Tennis) poussent l'absurde à des niveaux satiriques non intentionnels"],
    reviewHtml: `<p>Prince of Tennis est un manga de sport qui a choisi à un moment précis de ne plus se soucier du sport. Les premières arcs sont un shōnen tennistique solide, avec des personnages bien différenciés et des matchs tactiques plaisants. Puis Takeshi Konomi a commencé à inventer des techniques qui défient les lois physiques, et le manga s'est transformé en quelque chose d'entièrement différent.</p><p>L'impact culturel du manga sur le tennis japonais est réel, et ses personnages sont immédiatement reconnaissables même pour les non-lecteurs. Ryoma Echizen, cold et dominant, est un archétype du protagoniste shōnen invincible poussé à son extrême logique.</p><p>À lire en sachant ce qu'on cherche : un divertissement shōnen de sport classique dans les premiers arcs, une experience de jeu de puissance de plus en plus délirante dans les suivants.</p>`,
    shops: shopManga("Prince+of+Tennis"),
    streaming: cr("Prince of Tennis"),
  },

  "the-return-of-the-disaster-class-hero": {
    tags: "Action · Manhwa · Fantasy · Vengeance",
    stars: 3,
    synopsis: "Lee Geon, héros de classe S au pouvoir de la Faucheuse, est trahi et abandonné par ses compagnons dans un donjon de niveau impossible. Dix ans plus tard, il revient transformé, plus puissant que jamais, avec une seule motivation : se venger de ceux qui l'ont trahi. Un manhwa de vengeance classique mais efficacement exécuté.",
    pros: ["Protagoniste à la posture froide et déterminée très efficace dans son registre", "Montée en puissance progressive bien dosée", "Révélations sur les trahisons passées maintiennent un bon suspense"],
    cons: ["Schéma vengeance très codifié sans grandes surprises", "Personnages secondaires peu développés au-delà de leur rôle"],
    reviewHtml: `<p>The Return of the Disaster-Class Hero est un manhwa de vengeance qui connaît ses forces et les exploite sans prétendre à plus. Lee Geon est un protagoniste froid et implacable dont les retrouvailles progressives avec ceux qui l'ont trahi sont exécutées avec un rythme satisfaisant.</p><p>Le manga n'invente pas le genre mais le pratique avec compétence. Les lecteurs de manhwa d'action qui cherchent une histoire de héros trahi et ressuscité trouveront ici exactement ce qu'ils attendent, bien exécuté et sans longueurs inutiles.</p>`,
    shops: shopManhwa("Disaster+Class+Hero"),
    streaming: [],
  },

  "the-sss-rank-hunters-lucky-draw": {
    tags: "Action · Manhwa · Fantasy · Gacha",
    stars: 2,
    synopsis: "Dans un monde où des portails de donjons sont apparus partout, Hyun-Sung Park est un chasseur de rang E qui découvre un système de gacha divin lui permettant d'obtenir des compétences et équipements de rang SSS par tirage aléatoire. Avec ce pouvoir imprévisible mais potentiellement illimité, il commence son ascension dans la hiérarchie des chasseurs.",
    pros: ["Concept de gacha comme système de progression original dans le genre hunter", "Moments de tirage aléatoire qui créent une tension comique efficace"],
    cons: ["Exécution générique malgré la prémisse originale", "Manque de profondeur narrative et de développement de personnages", "Protagoniste peu distinct des héros classiques du genre"],
    reviewHtml: `<p>The SSS-Rank Hunter's Lucky Draw a une bonne idée de départ, utiliser la mécanique du gacha comme système de progression pour un hunter, mais ne l'exploite pas aussi inventivemment qu'elle le mérite. Le résultat est un manhwa d'action correct mais générique, qui s'adresse surtout aux fans du genre hunter à la recherche de lecture facile.</p><p>Pour les amateurs inconditionnels du genre, c'est une lecture honnête. Pour ceux qui cherchent quelque chose de distinctif dans le paysage déjà surchargé du manhwa hunter, il faudra chercher ailleurs.</p>`,
    shops: shopManhwa("SSS+Rank+Hunter+Lucky+Draw"),
    streaming: [],
  },

  "the-world-god-only-knows": {
    tags: "Comédie · Romance · Seinen · Méta",
    stars: 4,
    synopsis: "Keima Katsuragi est un génie des jeux de dating simulation qui a conquis virtuellement des milliers d'héroïnes. Il est forcé par un démon nommé Elsie de séduire des vraies filles pour en expulser les esprits errants qui s'y cachent, en appliquant les mécaniques de ses jeux. Un manga romantique méta sur les conventions du genre, la réalité et l'idéal.",
    pros: ["Concept méta sur les codes des dating sims d'une intelligence rare", "Keima est un protagoniste original et attachant malgré son arrogance", "Arc final qui subvertit toutes les attentes établies de manière satisfaisante", "Humour sur les conventions du genre romantic comedy très efficace"],
    cons: ["Premiers arcs formulaires avant que la série ne montre son vrai potentiel", "Arc final peut dérouter les lecteurs attachés à la structure initiale"],
    reviewHtml: `<p>The World God Only Knows commence comme une comédie romantique répétitive et se révèle être l'une des déconstructions les plus intelligentes du genre romantique dans le manga. Tamiki Wakaki a pris son temps pour établir les règles de son univers avant de les démonter méthodiquement dans ses derniers arcs.</p><p>Keima Katsuragi est un protagoniste fascinant parce que sa compétence dans les jeux est exactement ce qui le rend inapte à la réalité. Sa transformation progressive, d'expert en fictions romantiques en participant réel à une histoire vraie, est l'arc de personnage le plus bien caché du manga comique.</p><p>L'arc final, Goddess Arc, est une récompense pour les lecteurs patients. Il retourne complètement les certitudes établies et démontre que Wakaki savait exactement où il allait depuis le début. Une oeuvre à sous-estimer au départ et à ne jamais oublier.</p>`,
    shops: shopManga("World+God+Only+Knows"),
    streaming: cr("The World God Only Knows"),
  },

  "toilet-bound-hanako-kun": {
    tags: "Surnaturel · Romance · Mystère · Shōnen",
    stars: 4,
    synopsis: "Nene Yashiro convoque le fantôme de la toilette du troisième niveau de son lycée pour exaucer son voeu romantique, et se retrouve liée à Hanako, esprit espiègle mais puissant, comme son assistant. Ensemble, ils gèrent les mystères surnaturels de l'école et les Sept Merveilles qui l'habitent. Aida Iro signe un manga d'atmosphère gothique à l'art unique et à la narration émotionnellement dense.",
    pros: ["Art de Aida Iro d'une originalité visuelle absolument unique dans le manga", "Atmosphère qui mélange humour léger et horreur folk japonaise avec une expertise rare", "Lore des Sept Merveilles d'une richesse et d'une cohérence impressionnantes", "Moments émotionnels d'une profondeur inattendue pour un shōnen"],
    cons: ["Rythme irrégulier, certains arcs plus lents que d'autres", "La romance reste très implicite pour les lecteurs qui l'attendent"],
    reviewHtml: `<p>Toilet-Bound Hanako-kun est visuellement l'un des manga les plus originaux de sa génération. Aida Iro a développé un style graphique immédiatement reconnaissable, avec ses aplats de couleurs vives, ses décorations géométriques et ses designs de personnages impossibles à confondre avec n'importe quel autre manga.</p><p>Derrière l'humour et la légèreté apparente, le manga cache une mélancolie profonde. Hanako est un personnage d'une complexité que ses fanfaronnades dissimulent soigneusement. Les arcs qui révèlent son passé et sa nature réelle sont parmi les plus émouvants du shōnen récent.</p><p>Le lore des Sept Merveilles de l'école est un worldbuilding fantastique d'une cohérence et d'une inventivité impressionnantes. Chaque mystère révélé en ouvre plusieurs autres. Un manga qui récompense l'attention et la fidélité.</p>`,
    shops: shopManga("Toilet+Bound+Hanako-kun"),
    streaming: cr("Toilet-Bound Hanako-kun"),
  },

};

// ── Moteur de patch ─────────────────────────────────────────────────────────────
function applyPatch(content, slug, patch) {
  const idx = content.indexOf(`  slug: "${slug}"`);
  if (idx === -1) return null;
  let start = idx;
  while (start > 0 && content[start] !== "{") start--;
  let depth = 0, end = start;
  while (end < content.length) {
    if (content[end] === "{") depth++;
    if (content[end] === "}") { depth--; if (depth === 0) { end++; break; } }
    end++;
  }
  const block = content.slice(start, end);
  const get = (f) => { const m = block.match(new RegExp(`${f}:\\s*"([^"]*)"`, "s")); return m ? m[1] : ""; };
  const shopsStr  = JSON.stringify(patch.shops, null, 2).replace(/"(name|url|logo)":/g, "$1:");
  const streamStr = JSON.stringify(patch.streaming, null, 2).replace(/"(name|url|logo)":/g, "$1:");
  const synEsc    = patch.synopsis.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  const newBlock = `{
  slug: "${slug}",
  title: "${get("title")}",
  category: "${get("category")}",
  cover: "${get("cover")}",
  tags: "${patch.tags}",
  stars: ${patch.stars},
  addedAt: "${get("addedAt")}",
  synopsis: "${synEsc}",
  pros: ${JSON.stringify(patch.pros)},
  cons: ${JSON.stringify(patch.cons)},
  reviewHtml: \`${patch.reviewHtml}\`,
  shops: ${shopsStr},
  streaming: ${streamStr},
  live: []
}`;
  return content.slice(0, start) + newBlock + content.slice(end);
}

let content = readFileSync(FILE, "utf-8");
let ok = 0, skip = 0;
for (const [slug, patch] of Object.entries(PATCHES)) {
  const result = applyPatch(content, slug, patch);
  if (!result) { console.log(`⚠️  Non trouvé : ${slug}`); skip++; }
  else { content = result; console.log(`✓ ${slug}`); ok++; }
}
writeFileSync(FILE, content, "utf-8");
console.log(`\n✅ ${ok} patchée(s)${skip ? `, ⚠️ ${skip} non trouvée(s)` : ""}.`);
