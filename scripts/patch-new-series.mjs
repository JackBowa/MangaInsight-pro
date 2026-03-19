/**
 * Patch les 22 nouvelles séries avec critiques, synopsis FR, pros/cons, shops, streaming
 * Usage : node scripts/patch-new-series.mjs
 */

import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, "../data/series.ts");

const L = "https://manganim.fr/cdn/shop/files/logo-manganim-header_180x.png?v=1672862594";
const LF = "https://cdn.iconscout.com/icon/free/png-256/free-fnac-3521434-2944878.png";
const LA = "https://www.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg";
const LC = "https://upload.wikimedia.org/wikipedia/commons/f/fc/Crunchyroll_logo_2018_vertical.png";
const LN = "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940";

const shopManga = (q) => [
  { name: "Manganim", url: `https://manganim.fr/search?q=${q}`, logo: L },
  { name: "Fnac", url: `https://www.fnac.com/SearchResult/ResultList.aspx?Search=${q}+tome`, logo: LF },
  { name: "Amazon", url: `https://www.amazon.fr/s?k=${q}+tome`, logo: LA },
];
const shopManhwa = (q) => [
  { name: "Fnac", url: `https://www.fnac.com/SearchResult/ResultList.aspx?Search=${q}`, logo: LF },
  { name: "Amazon", url: `https://www.amazon.fr/s?k=${q}`, logo: LA },
];
const crunchyroll = (q) => [{ name: "Crunchyroll", url: `https://www.crunchyroll.com/fr/search?q=${encodeURIComponent(q)}`, logo: LC }];
const netflix = (q) => [{ name: "Netflix", url: `https://www.netflix.com/search?q=${encodeURIComponent(q)}`, logo: LN }];

// ── Données complètes ──────────────────────────────────────────────────────────
const PATCHES = {
  "jujutsu-kaisen": {
    tags: "Action · Sorcellerie · Malédictions · Shōnen",
    stars: 5,
    synopsis: "Yuji Itadori, lycéen au physique hors norme, ingère par accident un doigt maudit de Ryomen Sukuna, roi des fléaux. Condamné à mort mais trop précieux pour être exécuté immédiatement, il doit avaler les vingt doigts restants pour affaiblir le démon de l'intérieur. Sous la tutelle du légendaire Gojo Satoru, il intègre l'école des sorciers pour combattre les malédictions.",
    pros: ["Gojo Satoru, personnage le plus iconique du shōnen récent", "Combats spectaculaires et techniquement inventifs", "Les morts comptent vraiment, tension permanente", "Arc de Shibuya parmi les meilleurs du genre"],
    cons: ["Personnages féminins sous-exploités", "Arcs post-Shibuya moins maîtrisés narrativement"],
    reviewHtml: `<p>Jujutsu Kaisen est arrivé au bon moment pour redonner un souffle au shōnen d'action. Gege Akutami ne joue pas la sécurité. Les personnages meurent. Les victoires sont chèrement acquises. Et Gojo Satoru, dès son introduction, est devenu l'un des personnages les plus discutés de toute sa génération.</p><p>Le système des malédictions et des techniques est l'un des mieux construits du genre. Chaque sorcier a une technique qui lui est propre, avec ses règles, ses limites et ses coûts narratifs. Les combats ne sont pas seulement spectaculaires, ils sont réfléchis. L'arc de Shibuya reste un sommet, dense, brutal, imprévisible.</p><p>Akutami a aussi le courage de casser ses propres constructions. On s'attache à des personnages qu'il sacrifie ensuite sans prévenir. Ce sentiment d'insécurité permanente tient en haleine comme peu de shōnens récents.</p><p>Les arcs finaux sont plus divisifs, mais Jujutsu Kaisen reste une oeuvre ambitieuse qui a redéfini les standards du genre. Cinq étoiles mérités.</p>`,
    shops: shopManga("Jujutsu+Kaisen"),
    streaming: crunchyroll("Jujutsu Kaisen"),
  },
  "one-punch-man": {
    tags: "Action · Super-héros · Parodie · Comédie",
    stars: 4,
    synopsis: "Saitama est un héros amateur qui peut vaincre n'importe quel adversaire d'un seul coup de poing. Ce pouvoir absolu est devenu son pire cauchemar : plus rien ne le stimule. En attendant un ennemi à sa hauteur, il s'inscrit à l'Association des Héros où il côtoie des combattants hors du commun.",
    pros: ["Satire intelligente et efficace du genre super-héros", "Genos et la galerie de héros tous mémorables", "Artwork de Murata absolument époustouflant", "Humour décalé qui fonctionne sur la durée"],
    cons: ["Rythme lent sur les arcs récents de la version manga", "Le gag central s'épuise légèrement sur la durée"],
    reviewHtml: `<p>One Punch Man est une blague devenue chef-d'oeuvre. Le pitch de départ, un héros si puissant qu'il s'ennuie, aurait pu tenir cinq chapitres. Il tient depuis des années parce que derrière la satire, ONE construit un univers de super-héros d'une richesse inattendue.</p><p>Saitama incarne quelque chose de touchant : la mélancolie du but atteint. Il a obtenu la force absolue qu'il cherchait, et il n'a rien à en faire. Cette désillusion tranquille sous les combats absurdes donne au manga une profondeur qu'on ne lui attendait pas.</p><p>La version dessinée par Yusuke Murata est visuellement parmi ce qui se fait de mieux dans le manga. Ses doubles pages de combat sont des oeuvres à part entière, chaque coup de poing de Saitama est dessiné comme s'il allait briser la page.</p><p>Quelques longueurs sur les arcs récents, mais One Punch Man reste une des réussites les plus originales du shōnen moderne.</p>`,
    shops: shopManga("One+Punch+Man"),
    streaming: crunchyroll("One Punch Man"),
  },
  "mob-psycho-100": {
    tags: "Surnaturel · Psychologie · Comédie · Action",
    stars: 5,
    synopsis: "Shigeo Kageyama dit Mob est un adolescent discret doté de pouvoirs psychiques phénoménaux. Pour ne pas blesser ceux qu'il aime, il bloque ses émotions. Il travaille comme assistant pour Reigen, arnaqueur brillant qui se fait passer pour exorciste. Derrière le spectaculaire se cache une histoire de croissance personnelle et d'acceptation de soi.",
    pros: ["Message profond sur la valeur des émotions et l'acceptation de soi", "Reigen est l'un des personnages les plus originaux du manga", "Humour et émotion parfaitement équilibrés", "Conclusion parmi les plus satisfaisantes du genre"],
    cons: ["Style graphique volontairement brouillon déroutant au premier abord", "Trop court, on en voudrait bien plus"],
    reviewHtml: `<p>Mob Psycho 100 est l'oeuvre la plus personnelle de ONE, et sans doute sa meilleure. Sous les explosions psychiques et les combats d'exorcistes, c'est une histoire sur la valeur des émotions, sur pourquoi il faut les ressentir même quand elles font mal.</p><p>Shigeo est le protagoniste le moins conventionnel du genre. Il ne cherche pas à devenir fort. Il veut juste être une personne ordinaire, avoir des amis, plaire à la fille qu'il aime. Ce décalage entre ses pouvoirs monstrueux et ses aspirations modestes est la source d'un humour et d'une tendresse constants.</p><p>Reigen Arataka vole chaque scène qu'il occupe. Cet escroc sans pouvoirs qui exploite Mob est aussi son meilleur modèle de vie, à sa manière chaotique. Leur relation est l'une des plus belles du manga.</p><p>La conclusion de Mob Psycho 100 est magistrale. Rare sont les manga qui savent terminer. Celui-ci sait. Cinq étoiles sans hésitation.</p>`,
    shops: shopManga("Mob+Psycho+100"),
    streaming: crunchyroll("Mob Psycho 100"),
  },
  "haikyuu": {
    tags: "Volleyball · Sport · Shōnen · Équipe",
    stars: 4,
    synopsis: "Shoyo Hinata, passionné de volleyball malgré sa petite taille, intègre l'équipe du lycée Karasuno. Il forme avec le génie glacial Kageyama Tobio un duo explosif et complémentaire. Leur route vers les nationals les confronte à des adversaires d'exception, chacun portant sa propre philosophie du jeu.",
    pros: ["Meilleure série sportive de sa génération", "Chaque adversaire est aussi attachant que les protagonistes", "Moments de matchs qui donnent des frissons", "Fin de série parfaitement exécutée"],
    cons: ["Démarre doucement, les premiers matchs sont moins intenses", "Peut paraître répétitif dans sa structure"],
    reviewHtml: `<p>Haikyu!! est la référence absolue du manga de sport de la dernière décennie. Haruichi Furudate a compris quelque chose que peu de ses confrères maîtrisent : pour que les matchs aient du sens, les adversaires doivent compter autant que les héros.</p><p>Chaque équipe affrontée par Karasuno est développée avec un soin remarquable. Nekoma, Aoba Josai, Shiratorizawa, Date Tech, chacune a son identité, sa philosophie, ses figures inoubliables. On finit par vouloir que tout le monde gagne, et c'est là que le manga devient douloureux et magnifique à la fois.</p><p>Hinata et Kageyama forment le meilleur duo du genre. Leur complémentarité et leurs frictions sont le moteur émotionnel de toute la série. Leur évolution sur l'ensemble des arcs est l'une des progressions les plus satisfaisantes du manga de sport.</p><p>La conclusion d'Haikyu!! est un modèle. Furudate sait exactement où il va et comment y atterrir. Une série qui tient toutes ses promesses.</p>`,
    shops: shopManga("Haikyu"),
    streaming: crunchyroll("Haikyuu"),
  },
  "frieren-beyond-journeys-end": {
    tags: "Fantasy · Post-aventure · Mélancolie · Seinen",
    stars: 5,
    synopsis: "Après avoir vaincu le Roi des Démons, l'elfe magicienne Frieren et ses compagnons se séparent. Des décennies passent, les humains vieillissent et meurent. Frieren, quasi-immortelle, réalise qu'elle n'a jamais vraiment pris le temps de les connaître. Elle entreprend un nouveau voyage pour comprendre ce que signifie vivre.",
    pros: ["Traitement du temps et de la mort d'une profondeur rare", "Frieren est un personnage inoubliable", "Écriture sobre et émotionnellement précise", "Chaque chapitre court laisse une trace durable"],
    cons: ["Rythme contemplatif qui peut dérouter les lecteurs d'action pure", "Peu de tension dramatique au sens classique"],
    reviewHtml: `<p>Frieren est une anomalie douce dans le paysage du manga. Pas de tournoi, pas de progression de puissance, pas de méchant à abattre. Juste une elfe qui réapprend à regarder le monde à travers les yeux des humains qui lui survivront.</p><p>Le génie de la série tient dans son rapport au temps. Frieren traverse des siècles sans vieillir, et ce que ça implique, la perte, la nostalgie, la culpabilité de ne pas avoir été présent, est traité avec une précision émotionnelle rarement atteinte dans ce médium.</p><p>Fern et Stark, ses nouveaux compagnons, sont des personnages d'une richesse tranquille. Leur relation avec Frieren, et entre eux, se construit lentement, en petites scènes qui semblent anodines et qu'on n'oublie pas.</p><p>Frieren est l'un des manga les plus récompensés de ces dernières années, et c'est entièrement mérité. Une oeuvre qui touche à quelque chose d'universel sur ce que signifie vivre avec les autres.</p>`,
    shops: shopManga("Frieren"),
    streaming: crunchyroll("Frieren"),
  },
  "delicious-in-dungeon": {
    tags: "Fantasy · Gastronomie · Aventure · Comédie",
    stars: 5,
    synopsis: "Laios et son groupe d'aventuriers, à court de vivres après avoir été vaincus par un dragon, prennent une décision radicale : manger les monstres du donjon. Avec l'aide du nain Senshi, expert en cuisine monstrueuse, ils progressent vers les profondeurs pour sauver leur camarade dévorée, tout en élaborant des recettes improbables.",
    pros: ["Concept original tenu avec brio sur toute la série", "World-building gastronomique d'une créativité folle", "Tous les personnages sont attachants à leur manière", "Fin satisfaisante et bien préparée"],
    cons: ["Peut sembler léger avant que la profondeur se révèle"],
    reviewHtml: `<p>Delicious in Dungeon est la preuve qu'une idée en apparence absurde peut devenir un chef-d'oeuvre si elle est traitée avec sérieux et passion. Ryoko Kui a construit autour de la cuisine monstrueuse un monde d'une cohérence et d'une richesse qui forcent le respect.</p><p>Chaque chapitre suit la même structure de base : la rencontre avec un monstre, sa préparation en recette par Senshi, sa dégustation. Et pourtant, jamais deux chapitres ne se ressemblent vraiment. L'inventivité de l'autrice est inépuisable, chaque monstre révèle quelque chose de nouveau sur l'écosystème du donjon.</p><p>Mais Dungeon Meshi n'est pas qu'un recueil de recettes fantastiques. La progression narrative, les révélations sur la nature du donjon et de ses créateurs, la psychologie de Laios et de ses compagnons, tout cela construit quelque chose d'ambitieux sous la légèreté apparente.</p><p>La conclusion est parfaite. Tout est préparé, tout est payé. Une des oeuvres les plus complètes du manga de fantasy récent.</p>`,
    shops: shopManga("Dungeon+Meshi"),
    streaming: netflix("Delicious in Dungeon"),
  },
  "yu-yu-hakusho": {
    tags: "Action · Surnaturel · Arts martiaux · Tournoi",
    stars: 4,
    synopsis: "Yusuke Urameshi, voyou au grand coeur, meurt en sauvant un enfant d'une voiture. Jugé trop imprévisible pour l'au-delà, il est renvoyé dans le monde des vivants comme détective des esprits. Il doit désormais combattre démons et monstres pour maintenir l'équilibre entre les trois mondes.",
    pros: ["Classique fondateur du shōnen des années 90", "Hiei et Kurama parmi les meilleurs side characters du genre", "Tournoi des Ténèbres inoubliable", "Togashi avant Hunter x Hunter"],
    cons: ["Deuxième moitié moins inspirée que la première", "Fin abrupte après le tournoi"],
    reviewHtml: `<p>Yu Yu Hakusho est l'oeuvre de jeunesse de Yoshihiro Togashi avant qu'il révolutionne le genre avec Hunter x Hunter. Et déjà, tous les marqueurs de son génie sont présents : personnages profonds, systèmes de combat intelligents, et une volonté de casser les attentes du lecteur.</p><p>Yusuke est un délinquant au fond noble, mais ce sont ses compagnons qui volent la vedette. Hiei, le démon froid et orgueilleux, et Kurama, l'élégant esprit renard, sont parmi les personnages les plus mémorables du shōnen de cette époque. Leur développement au fil des arcs reste une masterclass.</p><p>Le Tournoi des Ténèbres est le sommet absolu de la série. Les combats sont stratégiques, les enjeux dramatiques, et chaque match révèle quelque chose de nouveau sur les personnages. C'est du shōnen de tournoi fait par quelqu'un qui comprend que les combats doivent avoir un sens narratif.</p><p>La conclusion est moins aboutie, Togashi l'a abandonnée avant terme. Mais pour tout ce qui précède, Yu Yu Hakusho reste une oeuvre fondatrice incontournable.</p>`,
    shops: shopManga("Yu+Yu+Hakusho"),
    streaming: crunchyroll("Yu Yu Hakusho"),
  },
  "nana": {
    tags: "Drame · Romance · Musique · Josei",
    stars: 5,
    synopsis: "Deux jeunes femmes prénommées Nana partagent un compartiment de train pour Tokyo. L'une fuit ses histoires d'amour, l'autre rejoint son groupe de punk rock. Elles se retrouvent colocataires et leur amitié devient l'axe autour duquel se brisent et se reconstruisent leur vie et leurs amours.",
    pros: ["L'amitié la plus sincère et la plus complexe du manga", "Psychologie féminine traitée avec une profondeur rare", "Atmosphère Tokyo années 2000 unique et nostalgique", "Chaque personnage porte ses contradictions"],
    cons: ["Série inachevée depuis 2009 en raison de la maladie de l'autrice", "Peut être douloureux émotionnellement"],
    reviewHtml: `<p>Nana est le manga qui m'a montré que le médium pouvait parler de tout, avec la même précision qu'un roman. Ai Yazawa ne raconte pas une histoire d'amour. Elle raconte comment deux personnes très différentes construisent quelque chose d'indéfinissable et d'irremplaçable en vivant ensemble.</p><p>Les deux Nana sont des personnages d'une richesse saisissante. Nana Osaki, punkeuse dure comme l'acier et blessée jusqu'à la moelle. Nana Komatsu, romantique chronique qui court après les mauvaises personnes pour les bonnes raisons. Leur complémentarité et leurs frictions sont le moteur émotionnel d'une série qui ne ressemble à aucune autre.</p><p>Yazawa traite de la musique, de l'amour, de la gloire et de la trahison avec une acuité psychologique et une tendresse qui manquent cruellement dans la fiction japonaise. Tokyo des années 2000 est un personnage à part entière, ses appartements, ses live-houses, son énergie particulière.</p><p>La série est inachevée depuis 2009. C'est douloureux. Mais ce qui existe est une oeuvre majeure du manga, et ça ne changera pas.</p>`,
    shops: shopManga("Nana+manga"),
    streaming: [],
  },
  "kingdom": {
    tags: "Historique · Guerre · Shōnen · Chine ancienne",
    stars: 5,
    synopsis: "Dans la Chine antique des Royaumes Combattants, l'orphelin de guerre Xin rêve de devenir le plus grand général de l'histoire. Aux côtés du prince Ying Zheng qui veut unifier la Chine, il gravit les échelons de l'armée à travers des batailles d'une envergure épique, perdant des amis mais gagnant en humanité.",
    pros: ["Batailles épiques parmi les meilleures du manga de guerre", "Xin est l'un des héros shōnen les mieux construits", "Fresque historique ambitieuse et documentée", "Personnages secondaires tous mémorables"],
    cons: ["Slow burn exigeant, plus de 800 chapitres", "Démarre lentement avant que la machine s'emballe"],
    reviewHtml: `<p>Kingdom est une entreprise colossale. Yasuhisa Hara s'est attaqué à l'unification de la Chine sous Qin Shi Huang, l'un des épisodes les plus sanglants et les plus fascinants de l'histoire humaine. Et il le fait avec une ambition narrative et visuelle que peu de mangas ont osée.</p><p>Xin, gamin des rues qui veut devenir le plus grand général, est un héros shōnen classique dans sa construction mais exceptionnellement bien exécuté. Sa progression est crédible, durement gagnée, et émotionnellement coûteuse. Kingdom ne protège pas ses personnages secondaires, et les pertes font mal.</p><p>Les batailles sont le coeur de la série, et Hara excelle à en faire des événements stratégiques et humains. Chaque général a sa doctrine, sa psychologie, ses failles. Les confrontations entre cerveaux militaires rivalisent avec les meilleurs shōnens de combat.</p><p>C'est un investissement considérable, mais Kingdom est l'une des fresques les plus ambitieuses et les mieux tenues du manga. Un futur classique absolu.</p>`,
    shops: shopManga("Kingdom+manga"),
    streaming: crunchyroll("Kingdom"),
  },
  "20th-century-boys": {
    tags: "Thriller · Mystère · Sci-fi · Manga de prestige",
    stars: 5,
    synopsis: "En 1969, des enfants inventent un livre prophétique avec un signe mystérieux comme symbole. Trente ans plus tard, une secte terroriste utilise ce même symbole pour menacer l'humanité. Kenji, gérant d'une supérette, réalise que les prophéties viennent de leur enfance, et que l'un d'eux est devenu le vilain.",
    pros: ["Narration non-linéaire d'une maîtrise absolue", "Révélations progressives qui récompensent l'attention du lecteur", "Thèmes sur la nostalgie et la responsabilité collective", "L'oeuvre maîtresse de Naoki Urasawa"],
    cons: ["Rythme lent qui exige patience", "Quelques résolutions trop rapides dans la dernière partie"],
    reviewHtml: `<p>20th Century Boys est le sommet de Naoki Urasawa, et l'un des thrillers les plus ambitieux jamais écrits dans le manga. L'idée de départ est vertigineuse : et si les jeux d'enfants d'un groupe de gamins en 1969 devenaient, trente ans plus tard, le plan d'une secte apocalyptique ?</p><p>Urasawa tresse avec maestria des temporalités multiples, l'enfance dans les années 60, la menace terroriste des années 90, le monde post-catastrophe des années 2000. Chaque révélation sur le passé éclaire le présent différemment, et le lecteur assemble peu à peu un puzzle dont les pièces semblent impossibles à ajuster.</p><p>Les personnages portent le manga avec une humanité remarquable. Kenji, héros ordinaire malgré lui, ses amis d'enfance devenus adultes imparfaits, et en creux le mystérieux Ami dont l'identité est l'un des secrets les mieux gardés du manga.</p><p>Quelques longueurs et résolutions rapides en fin de course, mais 20th Century Boys reste une oeuvre qui récompense chaque heure passée à la lire. Un chef-d'oeuvre du thriller manga.</p>`,
    shops: shopManga("20th+Century+Boys"),
    streaming: [],
  },
  "akira": {
    tags: "Cyberpunk · Sci-fi · Post-apocalyptique · Seinen",
    stars: 5,
    synopsis: "Dans un Neo-Tokyo post-apocalyptique, Kaneda, chef d'un gang de motards, voit son ami Tetsuo développer des pouvoirs psychiques incontrôlables après une rencontre avec un enfant mystérieux. Le gouvernement veut récupérer Tetsuo à tout prix. Une course contre la montre commence dans une ville au bord du chaos.",
    pros: ["Oeuvre fondatrice du cyberpunk mondial", "Artwork de Katsuhiro Otomo révolutionnaire pour son époque", "Ambiance Neo-Tokyo unique et oppressante", "Tetsuo parmi les antagonistes les plus tragiques du manga"],
    cons: ["Densité narrative exigeante", "Deuxième moitié dense en lore politique"],
    reviewHtml: `<p>Akira n'est pas seulement un manga. C'est un acte fondateur qui a redéfini ce que la bande dessinée pouvait visuellement accomplir. Katsuhiro Otomo a dessiné Neo-Tokyo avec une précision architecturale obsessionnelle, et le résultat ressemble à une ville réelle que l'on n'a jamais visitée mais dont on reconnaît immédiatement l'atmosphère.</p><p>L'histoire de Kaneda et Tetsuo est celle de l'amitié brisée par le pouvoir. Tetsuo, le plus faible du gang, obtient des capacités psychiques qui le dépassent et le dévoreront. Son basculement progressif est l'une des études de personnage les plus fascinantes du seinen.</p><p>Akira anticipe des dizaines de thèmes du manga et du cinéma de science-fiction qui suivront : la corruption du pouvoir, les expériences sur les enfants, la ville comme organisme mourant. L'influence d'Otomo se retrouve partout, de Ghost in the Shell à Neon Genesis Evangelion.</p><p>Exigeant, dense, parfois difficile à suivre dans sa deuxième moitié. Mais Akira reste une oeuvre incontournable pour qui veut comprendre l'histoire du manga et du cyberpunk.</p>`,
    shops: shopManga("Akira+manga"),
    streaming: netflix("Akira"),
  },
  "baki-the-search-of-our-strongest-hero": {
    tags: "Arts martiaux · Combat · Action · Surhommes",
    stars: 3,
    synopsis: "Baki Hanma, fils du combattant le plus puissant de la planète, s'entraîne sans relâche pour surpasser son père Yujiro, être d'une force surhumaine surnommé le Démon. Sa route croise celle des fighters les plus dangereux du monde dans des affrontements qui défient les limites du corps humain.",
    pros: ["Fan service de combat décomplexé et totalement assumé", "Adversaires mémorables et physiquement inventifs", "Yujiro Hanma parmi les antagonistes les plus imposants du manga"],
    cons: ["Scénario quasi inexistant, prétexte aux combats", "Physiques surréalistes qui peuvent rebuter", "Répétitif sur la durée"],
    reviewHtml: `<p>Baki est une promesse simple tenue avec une constance admirable : des hommes surhumains qui se battent jusqu'à l'extrême. Itagaki père ne prétend pas raconter une grande histoire. Il dessine des combattants absurdes dans des affrontements absurdes, et il le fait avec une conviction totale.</p><p>Yujiro Hanma, le Démon, est le père le plus monstrueux du manga. Sa présence dans chaque arc comme horizon indépassable donne à Baki une tension de fond permanente : peut-on vraiment vouloir vaincre quelque chose d'aussi inhumain ?</p><p>Les adversaires sont inventifs et délirants, des condamnés à mort américains aux champions de sumo en passant par des guerriers musashi. Chacun a sa spécialité physique poussée jusqu'à l'absurde. C'est l'attrait principal de la série.</p><p>Baki n'est pas pour tout le monde. Mais pour les amateurs de manga de combat décomplexé, c'est une valeur sûre. À consommer sans se prendre la tête.</p>`,
    shops: shopManga("Baki"),
    streaming: netflix("Baki"),
  },
  "that-time-i-got-reincarnated-as-a-slime": {
    tags: "Isekai · Fantasy · Nation-building · Comédie",
    stars: 3,
    synopsis: "Satoru Mikami, salaryman japonais de 37 ans, meurt poignardé et se réincarne dans un monde fantastique sous la forme d'un slime aveugle. Il hérite cependant du pouvoir d'absorber et reproduire les capacités de ses adversaires, et commence à construire une nation de monstres dans la forêt.",
    pros: ["Isekai confortable et bienveillant qui fait du bien", "Nation-building progressif satisfaisant", "Rimuru est un protagoniste sympathique et intelligent"],
    cons: ["Peu de tension dramatique, le héros ne perd presque jamais", "Monde très complaisant envers Rimuru", "Manque de vrais enjeux sur la durée"],
    reviewHtml: `<p>Tensei Slime est l'isekai confort par excellence. Pas de drame existentiel, pas de défaites douloureuses, juste un homme gentil réincarné en slime qui fait des amis monstres et construit une ville idéale. Et dans ce registre, il est excellent.</p><p>Rimuru est un protagoniste atypique pour le genre : pragmatique, bienveillant, soucieux du bonheur de ses sujets avant sa propre gloire. Le nation-building, la diplomatie, la gestion des ressources, ça occupe une place centrale et c'est ça qui distingue la série des isekai de power fantasy purs.</p><p>Le problème est aussi sa force : Rimuru ne perd presque jamais, les menaces sont systématiquement désamorcées, et le monde entier finit par l'aimer. La tension dramatique est quasi absente. C'est reposant ou ennuyeux selon les attentes.</p><p>Pour une lecture sans prise de tête dans un univers fantasy bien construit, Tensei Slime fait le travail. Pas un chef-d'oeuvre, mais un plaisir coupable assumé.</p>`,
    shops: shopManga("Tensei+Slime"),
    streaming: crunchyroll("That Time I Got Reincarnated as a Slime"),
  },
  "lookism": {
    tags: "Drame · Réaliste · Action · Société",
    stars: 4,
    synopsis: "Park Hyun-Seok, lycéen obèse victime de brimades, se réveille avec un second corps beau et athlétique. Le jour dans son corps séduisant, la nuit dans son corps d'origine, il découvre les deux faces d'une société obsédée par l'apparence, où la beauté ouvre toutes les portes.",
    pros: ["Critique de l'apparence physique acérée et pertinente", "Évolution du héros psychologiquement convaincante", "Arcs d'action progressivement ambitieux", "Manhwa le plus lu au monde sur Webtoon"],
    cons: ["Arcs secondaires très nombreux, parfois dispersés", "Qualité narrative inégale selon les parties"],
    reviewHtml: `<p>Lookism a démarré comme une critique sociale sur l'apparence et la discrimination, et il l'est resté tout en ajoutant des couches d'action et de conspirations qui ont rendu l'univers plus dense au fil des arcs.</p><p>Park Hyun-Seok est un personnage attachant précisément parce qu'il n'est pas parfait. Même dans son beau corps, il traîne les traumatismes de sa vie d'avant. La série montre avec intelligence que changer de visage ne change pas une psychologie meurtrie par des années de mépris.</p><p>Park Tae-Joon développe autour de son héros une galerie de personnages secondaires qui finissent par occuper autant de place que lui. Les gangs de la série, leurs hiérarchies, leurs loyautés, leurs histoires individuelles forment un univers cohérent et vivant.</p><p>Très long, parfois inégal dans ses arcs secondaires, mais Lookism reste l'un des manhwas les plus lus au monde pour de bonnes raisons. Une oeuvre qui a plus à dire qu'il n'y paraît.</p>`,
    shops: shopManhwa("Lookism"),
    streaming: netflix("Lookism"),
  },
  "sweet-home": {
    tags: "Horreur · Survie · Action · Surnaturel",
    stars: 4,
    synopsis: "Cha Hyun-Soo, adolescent reclus aux pensées suicidaires, déménage dans un vieil immeuble après la mort de sa famille. Il découvre que des humains se transforment en monstres selon leurs désirs refoulés. Enfermé avec d'autres résidents, il doit survivre tout en luttant contre sa propre monstruosité intérieure.",
    pros: ["Horreur viscérale et psychologique efficace", "Métaphore sur les pulsions humaines puissante", "Designs de monstres inventifs et dérangeants", "Tension narrative permanente"],
    cons: ["Fin précipitée, derniers arcs moins maîtrisés", "Certains personnages sacrifiés trop rapidement"],
    reviewHtml: `<p>Sweet Home est arrivé comme une claque dans le paysage du manhwa. Kim Carnby et Hwang Young-Chan ont créé quelque chose de rare : un survival-horror qui parle vraiment de psychologie humaine, pas juste de monstres à fuir.</p><p>Le concept central est brillant : les humains se transforment en créatures selon leur désir le plus profond et le plus refoulé. Un homme obsédé par la force devient une masse musculaire incontrôlable. Une femme qui déteste les bactéries se transforme en anticorps géant. Chaque monstre est un portrait psychologique déformé.</p><p>Cha Hyun-Soo, héros dépressif qui voulait mourir avant que tout ça commence, est le personnage parfait pour ce genre. Sa lutte interne entre humanité et monstruosité donne une profondeur émotionnelle rare à ce qui aurait pu n'être qu'un simple survival.</p><p>La fin est imparfaite, précipitée. Mais Sweet Home reste l'une des oeuvres d'horreur les plus percutantes du manhwa moderne.</p>`,
    shops: shopManhwa("Sweet+Home+manhwa"),
    streaming: netflix("Sweet Home"),
  },
  "noblesse": {
    tags: "Action · Surnaturel · École · Manhwa classique",
    stars: 3,
    synopsis: "Rai, noble vampire millénaire, se réveille après 820 ans de sommeil et s'inscrit dans un lycée moderne fondé par son serviteur Frankenstein. Cette vie paisible est brisée par une organisation secrète qui menace les humains. Rai et ses alliés doivent combattre pour protéger ce monde qu'il découvre à peine.",
    pros: ["Rai est un personnage charismatique et attachant malgré son flegme", "Dynamique Rai et Frankenstein excellente et drôle", "Moments épiques bien mis en scène"],
    cons: ["Scénario très convenu, antagonistes génériques", "Deuxième moitié en baisse qualitative notable", "Humour répétitif à la longue"],
    reviewHtml: `<p>Noblesse est le manhwa de webtoon classique, celui qui a posé des codes que des dizaines de séries ont repris depuis. Son héros, Rai, noble vampire dépassé par la modernité mais d'une puissance absolue, est une figure attachante dont le mélange de dignité surannée et de candeur face aux smartphones est une source de comédie constante.</p><p>La relation entre Rai et Frankenstein, son serviteur loyal depuis des siècles, est le coeur émotionnel de la série. Leur complicité silencieuse, leurs loyautés respectives, leurs façons si différentes d'appréhender la violence et la protection, c'est là que Noblesse est à son meilleur.</p><p>Le problème est ailleurs : les antagonistes sont interchangeables, les arcs se répètent sur le même schéma, et la série perd de la vitesse après son premier tiers. L'Union, organisation supposément menaçante, n'impressionne jamais vraiment face à la puissance absurde de nos héros.</p><p>Noblesse reste une lecture agréable pour les amateurs du genre, et un classique historique du manhwa. Mais difficile de le placer au niveau des meilleures productions coréennes récentes.</p>`,
    shops: shopManhwa("Noblesse+manhwa"),
    streaming: crunchyroll("Noblesse"),
  },
  "weak-hero": {
    tags: "Action · Réaliste · Lycée · Combat",
    stars: 4,
    synopsis: "Gray, nouveau lycéen au physique chétif, arrive dans un établissement gangrené par la violence. Plutôt que de s'incliner, il répond aux brutes avec une froideur calculée et une brutalité chirurgicale. Ses méthodes peu orthodoxes font de lui une légende malgré lui.",
    pros: ["Combat réaliste et brutal sans artifice surpuissant", "Gray est un protagoniste fascinant et original", "Critique de la violence scolaire sans complaisance", "Artwork expressif et efficace"],
    cons: ["Personnages secondaires parfois peu développés", "Structure des arcs un peu répétitive"],
    reviewHtml: `<p>Weak Hero se distingue radicalement des autres manhwas d'action scolaire parce que son héros n'est pas un combattant. Gray est un intello qui a décidé d'appliquer une logique froide et brutale à des situations où les autres s'en remettent aux émotions. Il casse des bras, il vise les points faibles, et il rentre chez lui étudier.</p><p>Cette approche donne aux combats une texture différente des power fantasy habituels. Gray peut perdre. Gray peut saigner. Ce qu'il ne peut pas faire, c'est renoncer, et cette obstination froide est plus impressionnante que n'importe quel pouvoir spécial.</p><p>La série parle aussi de la solidarité qui se construit entre des garçons que la violence scolaire a isolés. Donald et Ben, ses alliés progressifs, apportent une chaleur humaine qui équilibre la froideur de Gray.</p><p>Weak Hero est l'un des manhwas d'action les plus recommandables pour quelqu'un qui cherche quelque chose de plus ancré que les habituels récits de chasseurs ou de donjons. Un manhwa de rue, efficace et sincère.</p>`,
    shops: shopManhwa("Weak+Hero"),
    streaming: [],
  },
  "a-returners-magic-should-be-special": {
    tags: "Fantasy · Magie · Retour dans le temps · Action",
    stars: 4,
    synopsis: "Desir Herrman, dernier survivant d'une expédition qui a failli sauver le monde du Labyrinthe des Ombres, se retrouve propulsé 13 ans en arrière à l'époque de ses études. Fort de sa connaissance du futur, il assemble une équipe pour changer le destin du monde avant qu'il soit trop tard.",
    pros: ["Boucle temporelle bien exploitée, les connaissances du futur sont utilisées intelligemment", "Système magique inventif et cohérent", "Progression satisfaisante du héros et de son équipe"],
    cons: ["Certains personnages secondaires manquent de profondeur", "Résolutions parfois trop propres"],
    reviewHtml: `<p>A Returner's Magic propose une variation intelligente sur le thème du retour dans le temps. Desir ne revient pas seulement pour corriger des erreurs, il revient avec une stratégie, un plan précis basé sur une connaissance encyclopédique du futur. Et ça change tout à la dynamique narrative.</p><p>Le Labyrinthe des Ombres, donjon apocalyptique dont chaque étage reproduit un désastre historique, est un concept de world-building fascinant. Les arcs qui explorent ces répliques d'événements passés sont les meilleurs de la série, mêlant action, histoire et enjeux émotionnels.</p><p>L'équipe que Desir constitue progressivement, notamment Romantica et Pram, est attachante et bien équilibrée. Leurs dynamiques évoluent naturellement au fil des épreuves, sans que tout soit toujours rose.</p><p>Quelques longueurs et une tendance à trop bien s'en sortir, mais A Returner's Magic est un manhwa de fantasy soigné qui satisfait les amateurs du genre.</p>`,
    shops: shopManhwa("Returners+Magic"),
    streaming: crunchyroll("A Returner's Magic Should Be Special"),
  },
  "second-life-ranker": {
    tags: "Action · Fantasy · Vengeance · Tower",
    stars: 4,
    synopsis: "Yeon-woo apprend que son frère jumeau est mort trahi dans une Tour mystérieuse. À travers les mémoires cryptées que son frère lui laisse, il découvre les secrets de cette Tour et y entre à son tour sous le pseudonyme Cain, déterminé à venger son frère en maîtrisant les pouvoirs qu'il lui a transmis.",
    pros: ["Motivation du héros claire, simple et émotionnellement efficace", "Système de progression addictif", "Combats de boss inventifs et rythmés", "Rythme soutenu qui tient en haleine"],
    cons: ["Héros surpuissant assez rapidement, la tension diminue", "Complexité du lore excessive par moments"],
    reviewHtml: `<p>Second Life Ranker fonctionne sur une mécanique émotionnelle simple et terriblement efficace : un homme remonte le temps et l'espace pour venger son frère. Pas de rédemption complexe, pas d'ambiguïté morale. Juste une loyauté fraternelle poussée jusqu'à ses limites.</p><p>La Tour de l'Oeil du Soleil est un terrain de jeu bien construit, avec ses étages thématiques, ses clans rivaux, ses dieux qui jouent avec les humains comme des pions. L'héritage de connaissances du frère décédé donne à Yeon-woo une longueur d'avance constante, et voir comment il exploite ces informations est le plaisir principal de la lecture.</p><p>Le problème récurrent des tower manhwas se retrouve ici : le héros devient très puissant assez vite, et l'escalade de la puissance des ennemis suit mécaniquement. La tension des premières phases cède la place à un spectacle de force dont les enjeux s'érodent.</p><p>Mais dans son registre, Second Life Ranker est l'un des meilleurs représentants du genre. Une lecture efficace et addictive.</p>`,
    shops: shopManhwa("Second+Life+Ranker"),
    streaming: [],
  },
  "nano-machine": {
    tags: "Arts martiaux · Nanotechnologie · Action · Murim",
    stars: 4,
    synopsis: "Yeo-un, fils illégitime d'un chef de secte martiale, reçoit l'injection d'une nano-machine venue du futur par un mystérieux descendant. Cette technologie lui confère des capacités d'apprentissage et de combat exceptionnelles. Il doit survivre aux complots de l'académie martiale Mashin pour exceller.",
    pros: ["Mélange nanotechnologie et univers murim original et bien exploité", "Progression du héros satisfaisante et bien rythmée", "Intrigues politiques de l'académie bien construites"],
    cons: ["Harem de personnages féminins assez convenu", "Héros chanceux à l'excès par moments", "Rythme inégal selon les arcs"],
    reviewHtml: `<p>Nano Machine prend le pari audacieux de mélanger la science-fiction la plus contemporaine, des nanomachines venues du futur, avec le genre murim, ces univers de clans et d'arts martiaux inspirés de la Chine ancienne. Et ça fonctionne mieux qu'on ne l'attendrait.</p><p>Yeo-un est un protagoniste dans la tradition des anti-héros murim : né du mauvais côté de la société, il utilise les ressources à sa disposition de manière pragmatique plutôt que noble. Les nano-machines ne lui donnent pas la victoire facile mais accélèrent son apprentissage et ses capacités d'analyse, ce qui donne aux combats une dimension stratégique appréciable.</p><p>L'académie Mashin, avec ses clans rivaux, ses hiérarchies internes et ses complots permanents, est un cadre de politique martiale bien utilisé. Les rivalités entre disciples, les alliances de circonstance, les trahisons programmées, tout cela est traité avec assez de subtilité pour tenir la longueur.</p><p>Nano Machine n'est pas un manhwa de prestige. Mais c'est une lecture solide et satisfaisante pour les amateurs du genre, avec une originalité de concept qui le distingue de la masse.</p>`,
    shops: shopManhwa("Nano+Machine"),
    streaming: [],
  },
};

// ── Application des patches ───────────────────────────────────────────────────
let content = readFileSync(FILE, "utf-8");
let patchCount = 0;

for (const [slug, patch] of Object.entries(PATCHES)) {
  // Trouve l'entrée par son slug
  const slugMarker = `slug: "${slug}"`;
  const idx = content.indexOf(slugMarker);
  if (idx === -1) {
    console.log(`⚠️  Slug non trouvé : ${slug}`);
    continue;
  }

  // Trouve la fin de l'entrée (le prochain "},\n" ou "},\n\n]")
  const entryStart = content.lastIndexOf("{", idx);
  let depth = 0;
  let entryEnd = entryStart;
  for (let i = entryStart; i < content.length; i++) {
    if (content[i] === "{") depth++;
    else if (content[i] === "}") {
      depth--;
      if (depth === 0) { entryEnd = i + 1; break; }
    }
  }

  // Reconstruit l'entrée avec les nouvelles données
  // Récupère cover et addedAt depuis l'entrée originale
  const originalEntry = content.slice(entryStart, entryEnd);
  const coverMatch = originalEntry.match(/cover: "(.*?)"/);
  const addedAtMatch = originalEntry.match(/addedAt: "(.*?)"/);
  const categoryMatch = originalEntry.match(/category: "(.*?)"/);
  const titleMatch = originalEntry.match(/title: "(.*?)"/);

  const cover = coverMatch?.[1] ?? "";
  const addedAt = addedAtMatch?.[1] ?? "2026-03-19";
  const category = categoryMatch?.[1] ?? "manga";
  const title = titleMatch?.[1] ?? slug;

  const shopsStr = JSON.stringify(patch.shops, null, 2)
    .replace(/"name"/g, "name")
    .replace(/"url"/g, "url")
    .replace(/"logo"/g, "logo")
    .replace(/"/g, '"');

  const streamingStr = JSON.stringify(patch.streaming, null, 2)
    .replace(/"name"/g, "name")
    .replace(/"url"/g, "url")
    .replace(/"logo"/g, "logo");

  const prosStr = JSON.stringify(patch.pros);
  const consStr = JSON.stringify(patch.cons);

  const newEntry = `{
  slug: "${slug}",
  title: "${title}",
  category: "${category}",
  cover: "${cover}",
  tags: "${patch.tags}",
  stars: ${patch.stars},
  addedAt: "${addedAt}",
  synopsis: "${patch.synopsis.replace(/"/g, '\\"')}",
  pros: ${prosStr},
  cons: ${consStr},
  reviewHtml: \`${patch.reviewHtml}\`,
  shops: ${JSON.stringify(patch.shops)},
  streaming: ${JSON.stringify(patch.streaming)},
  live: []
}`;

  content = content.slice(0, entryStart) + newEntry + content.slice(entryEnd);
  patchCount++;
  console.log(`✓ ${slug}`);
}

writeFileSync(FILE, content, "utf-8");
console.log(`\n✅ ${patchCount} série(s) mises à jour.`);
