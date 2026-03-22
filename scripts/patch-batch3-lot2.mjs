/**
 * patch-batch3-lot2.mjs
 * Patche 16 séries du lot 2 (Berserk, Vinland Saga, Kingdom, etc.)
 * dans data/series/series-2.ts
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const SERIES_FILE = join(__dirname, "../data/series/series-2.ts");

const patches = [
  {
    slug: "berserk",
    title: "Berserk",
    category: "manga",
    tags: "Action · Aventure · Dark Fantasy · Horreur · Psychologie",
    stars: 5,
    synopsis: "Guts, le Guerrier Noir, erre dans un monde sombre où les démons côtoient les hommes. Portant une épée démesurée et une main en acier, il est maudit par la Marque du Sacrifice qui attire les forces des ténèbres. Sa quête : retrouver Griffith, son ancien frère d'armes devenu un dieu du mal, et le tuer. Un récit de vengeance, de survie et de rédemption dans un monde médiéval impitoyable.",
    pros: ["Univers dark fantasy d'une richesse exceptionnelle", "Guts, l'un des protagonistes les plus complexes du manga", "Art époustouflant, surtout dans les arcs tardifs", "Profondeur philosophique et psychologique rare"],
    cons: ["Rythme très lent depuis les années 2010", "Contenu ultra-violent qui peut rebuter"],
    reviewHtml: `<p>Berserk est tout simplement le monument incontournable du dark fantasy en manga. Kentaro Miura a créé une oeuvre d'une densité narrative et artistique rarement égalée, où chaque page transpire le travail et la passion.</p><p>L'arc du Faucon Doré reste l'un des meilleurs récits de trahison et de désillusion jamais écrits dans le médium. La transformation de Griffith et la chute de Guts sont d'une puissance émotionnelle absolue. Le tout est servi par un dessin d'une précision méticuleuse, avec des planches de combat qui défient la physique et des panoramas qui coupent le souffle.</p><p>Le seul bémol : la publication erratique de Miura (et son décès en 2021, repris depuis par ses assistants) a ralenti considérablement le rythme. Mais l'oeuvre existante suffit à en faire une lecture obligatoire pour tout amateur de manga sérieux.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=berserk+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=berserk+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=berserk", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "vinland-saga",
    title: "Vinland Saga",
    category: "manga",
    tags: "Action · Aventure · Drame · Historique · Psychologie",
    stars: 5,
    synopsis: "Au XIe siècle, le jeune Thorfinn voit son père, un légendaire guerrier pacifiste, assassiné par le mercenaire Askeladd. Élevé parmi les meurtriers de son père, il grandit avec une seule obsession : se venger dans un duel loyal. Mais sa quête de vengeance le plonge dans les guerres vikings, les intrigues politiques anglo-saxonnes et une profonde remise en question de ce que signifie être un vrai guerrier.",
    pros: ["Évolution de personnage parmi les meilleures du manga", "Reconstitution historique minutieuse et passionnante", "Deuxième arc (ferme) aussi puissant que le premier", "Thèmes profonds sur la paix, la violence et la rédemption"],
    cons: ["L'arc de la ferme peut dérouter ceux qui attendent de l'action pure", "Rythme posé qui demande de la patience"],
    reviewHtml: `<p>Vinland Saga est un chef-d'oeuvre de la narration manga. Makoto Yukimura signe ici une épopée viking qui transcende le simple manga d'action pour devenir une réflexion profonde sur la violence, la liberté et ce que signifie vivre en paix.</p><p>Le premier arc est une odyssée de vengeance classique, brillamment exécutée. Mais c'est le deuxième arc, à la ferme, qui révèle l'ambition véritable de l'oeuvre : voir Thorfinn se reconstruire après des années de haine, trouver un but au-delà de la mort. C'est une évolution de personnage d'une justesse rare, qui prend le temps qu'il faut sans jamais perdre le lecteur.</p><p>Le dessin, puissant et expressif, sait autant représenter la brutalité des batailles que la douceur d'un moment de paix. Vinland Saga fait partie de ces oeuvres qui restent longtemps après la lecture.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=vinland+saga+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=vinland+saga+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=vinland-saga", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "kingdom",
    title: "Kingdom",
    category: "manga",
    tags: "Action · Aventure · Drame · Historique · Militaire",
    stars: 5,
    synopsis: "Dans la Chine des Royaumes Combattants (IIIe siècle av. J.-C.), Xin est un jeune orphelin de guerre qui rêve de devenir le plus grand général sous les cieux. Après la mort de son ami d'enfance Piao, il se retrouve mêlé aux luttes de succession du Royaume de Qin et va croiser le chemin d'Ei Sei, le futur Qin Shi Huang. Une épopée historique grandiose sur l'unification de la Chine.",
    pros: ["Batailles stratégiques d'une complexité impressionnante", "Galerie de généraux tous mémorables", "Montée en puissance du héros parfaitement dosée", "Reconstitution historique très soignée"],
    cons: ["Plus de 70 volumes, engagement conséquent", "Les arcs de siège peuvent être répétitifs"],
    reviewHtml: `<p>Kingdom est l'une des grandes épopées du manga shōnen. Yasuhisa Hara a construit sur plus de 70 volumes une fresque militaire et politique d'une ambition extraordinaire, ancrée dans l'histoire réelle de la Chine ancienne.</p><p>Ce qui distingue Kingdom, c'est la façon dont il aborde les batailles : chaque affrontement est un véritable exercice de stratégie, où les généraux s'affrontent aussi bien intellectuellement que physiquement. La galerie de personnages est immense mais chaque général est unique, avec ses propres philosophies de combat et ses motivations profondes.</p><p>Xin évolue de façon crédible d'un gamin impulsif à un véritable chef militaire, et c'est cette progression qui maintient l'intérêt sur la durée. Un manga pour ceux qui aiment les récits épiques avec une substance historique réelle.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=kingdom+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=kingdom+manga+hara", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=kingdom", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "vagabond",
    title: "Vagabond",
    category: "manga",
    tags: "Action · Aventure · Drame · Historique · Psychologie",
    stars: 5,
    synopsis: "Miyamoto Musashi, survivant de la bataille de Sekigahara, fuit la mort et commence un voyage qui le mènera à devenir le plus grand sabreur du Japon. Adapté du roman Musashi de Eiji Yoshikawa, Vagabond explore la quête spirituelle d'un homme qui cherche à dépasser sa violence pour atteindre une vérité plus profonde : que signifie être réellement fort ?",
    pros: ["Dessin de Takehiko Inoue parmi les plus beaux du manga", "Profondeur philosophique et spirituelle exceptionnelle", "Duels d'une intensité et d'une beauté rares", "Développement de personnage magistral"],
    cons: ["Publication suspendue depuis 2015, fin incertaine", "Rythme contemplatif pas pour tous les lecteurs"],
    reviewHtml: `<p>Vagabond est peut-être le manga au plus beau dessin jamais publié. Takehiko Inoue, déjà auteur de Slam Dunk, a produit ici une oeuvre d'une beauté visuelle absolument stupéfiante, avec des doubles pages qui rivalisent avec les plus grandes peintures.</p><p>Mais Vagabond n'est pas qu'un exercice de style : c'est une exploration profonde de ce que signifie chercher la force véritable. Musashi n'est pas un héros simple, c'est un homme violent qui apprend peu à peu à dépasser sa brutalité pour atteindre quelque chose de plus grand. La philosophie zen imprègne chaque arc.</p><p>Le seul regret : Inoue a suspendu la publication en 2015 et la fin reste en suspens. Mais les 37 volumes existants constituent déjà une oeuvre majeure de la culture manga.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=vagabond+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=vagabond+manga+inoue", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=vagabond", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "blade-of-the-immortal",
    title: "Blade of the Immortal",
    category: "manga",
    tags: "Action · Aventure · Drame · Historique · Surnaturel",
    stars: 4,
    synopsis: "Manji est un rōnin du Japon féodal maudit avec l'immortalité jusqu'à ce qu'il ait tué mille hommes mauvais. Il accepte de protéger la jeune Rin Asano, qui cherche à venger le meurtre de ses parents par l'école de sabre Ittō-ryū. Un manga d'action historique brutal et élaboré, récompensé par le Prix Eisner.",
    pros: ["Combats d'une complexité et brutalité remarquables", "Galerie de antagonistes mémorables", "Style graphique sombre et unique", "Thèmes moraux ambigus intéressants"],
    cons: ["Très violent, certaines scènes extrêmes", "Longueur (30 volumes) parfois dispersée"],
    reviewHtml: `<p>Blade of the Immortal est un manga d'action historique qui se distingue par sa brutalité assumée et sa complexité morale. Hiroaki Samura a créé un univers du Japon féodal où les protagonistes ne sont pas des héros purs mais des êtres déchirés par leurs passés.</p><p>Manji est un anti-héros fascinant : immortel, cynique, mais animé par une volonté de rédemption. Les combats sont chorégraphiés avec une précision technique impressionnante, chaque affrontement étant unique dans sa forme et ses enjeux. Les antagonistes de l'Ittō-ryū sont particulièrement réussis, chacun représentant une philosophie de combat différente.</p><p>L'oeuvre est exigeante sur le plan de la violence, mais ceux qui acceptent ce parti pris y trouveront un manga d'une grande profondeur sur la culpabilité, la vengeance et la possibilité du pardon.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=blade+of+the+immortal+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=blade+of+the+immortal+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=blade-of-the-immortal", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "slam-dunk",
    title: "Slam Dunk",
    category: "manga",
    tags: "Comédie · Drame · Sport · Shōnen",
    stars: 5,
    synopsis: "Hanamichi Sakuragi, lycéen bagarreur rejeté 50 fois de suite par des filles, découvre le basket-ball pour plaire à Haruko, la soeur du capitaine de l'équipe. Ce qu'il pensait être un simple prétexte romantique va devenir la passion de sa vie, et le révéler comme un talent brut capable de mener son équipe au championnat national.",
    pros: ["Progression du héros extrêmement satisfaisante", "Humour parfait qui coexiste avec l'émotion", "Matchs d'une tension dramatique irréprochable", "Caractérisation irréprochable de toute l'équipe"],
    cons: ["Fin abrupte qui laisse sur sa faim", "Quelques personnages adverses stéréotypés"],
    reviewHtml: `<p>Slam Dunk est le manga sportif ultime, celui qui a défini le genre pour des générations de lecteurs. Takehiko Inoue a réussi le tour de force de rendre le basket-ball passionnant même pour ceux qui n'y connaissent rien, grâce à des personnages attachants et une narration irréprochable.</p><p>Hanamichi Sakuragi est l'un des héros les plus drôles et les plus touchants du manga : son ego démesuré, sa progression fulgurante et ses moments de grâce pure créent un cocktail émotionnel unique. L'équipe de Shohoku dans son ensemble est remarquablement écrite, chaque membre ayant ses propres arcs et motivations.</p><p>Les matchs sont tendus à couper le souffle, en particulier le tournoi national qui constitue un sommet dramatique rare. La fin, volontairement ouverte, reste un sujet de débat mais ne diminue pas la qualité de l'ensemble. Un classique absolu.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=slam+dunk+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=slam+dunk+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=slam-dunk", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "eyeshield-21",
    title: "Eyeshield 21",
    category: "manga",
    tags: "Comédie · Sport · Shōnen · Action",
    stars: 4,
    synopsis: "Sena Kobayakawa a passé sa vie à courir pour fuir les brutes. Cette capacité à esquiver et à sprinter va faire de lui le running back star de l'équipe de football américain de son lycée, les Devil Bats de Deimon, sous le pseudonyme d'Eyeshield 21. Aux côtés du maniaque Hiruma et du colosse Kurita, il va viser le Christmas Bowl.",
    pros: ["Apprentissage du football américain progressif et ludique", "Hiruma, l'un des meilleurs personnages secondaires du shōnen", "Matchs inventifs et variés", "Humour constant et efficace"],
    cons: ["Certains arcs de tournoi s'étirent trop", "Protagoniste assez effacé comparé aux rivaux"],
    reviewHtml: `<p>Eyeshield 21 est la grande série sportive sur le football américain, parvenant à rendre ce sport complexe accessible et passionnant pour un public qui n'y connaît rien. Riichiro Inagaki et Yusuke Murata (futur auteur de One Punch Man) forment un duo parfait.</p><p>La grande force du manga est son sens du spectacle : les matchs sont visuellement impressionnants, avec des stratégies inventives et des moments de grâce athlétique parfaitement mis en scène. Hiruma, le quarterback diabolique et manipulateur, est l'un des personnages les plus charismatiques de toute la production Jump.</p><p>L'humour est omniprésent et fonctionne bien, allégeant les enjeux sans les trahir. Une série idéale pour les amateurs de sports manga qui veulent sortir des sentiers battus du foot ou du basket.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=eyeshield+21+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=eyeshield+21+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=eyeshield-21", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "hikaru-no-go",
    title: "Hikaru no Go",
    category: "manga",
    tags: "Comédie · Drame · Sport · Surnaturel · Shōnen",
    stars: 4,
    synopsis: "Hikaru Shindo, collégien insouciant, découvre un ancien goban hanté par l'esprit de Fujiwara no Sai, un génie du go du Heian. Sai prend possession de lui pour jouer au go, et Hikaru va progressivement s'y passionner, cherchant à atteindre le \"Divin Mouvement\" et à rivaliser avec le prodige Akira Toya.",
    pros: ["Hors-série pour rendre le go accessible et fascinant", "Bromance Hikaru/Akira très bien construite", "Évolution de personnage satisfaisante", "Émotion dans l'arc de Sai"],
    cons: ["Fin assez brusque après la résolution de l'arc principal", "Le go reste difficile à visualiser sans connaissances"],
    reviewHtml: `<p>Hikaru no Go est un tour de force : parvenir à rendre le jeu de go, l'un des plus complexes au monde, accessible et palpitant pour des millions de lecteurs. Yumi Hotta et Takeshi Obata (futur auteur de Death Note) ont créé quelque chose d'unique.</p><p>La relation entre Hikaru et Sai est le coeur de l'oeuvre, une bromance intergénérationnelle touchante entre un fantôme millénaire et un gamin moderne. L'arc final avec la disparition de Sai est d'une émotion dévastatrice, et la quête d'Hikaru pour retrouver son jeu dans les parties suivantes est admirablement traitée.</p><p>La rivalité avec Akira Toya structure l'ensemble avec élégance : deux joueurs qui se tirent mutuellement vers le haut, cherchant à comprendre le mystère du joueur qui les fascine. Un manga indispensable pour comprendre l'importance culturelle du go au Japon.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=hikaru+no+go+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=hikaru+no+go+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=hikaru-no-go", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "the-promised-neverland",
    title: "The Promised Neverland",
    category: "manga",
    tags: "Drame · Fantasy · Horreur · Mystère · Psychologie",
    stars: 4,
    synopsis: "Emma, Norman et Ray sont les enfants les plus brillants de Grace Field, un orphelinat idyllique sous la tutelle de leur \"Maman\". Mais quand ils découvrent l'horrible vérité derrière cette façade de bonheur, les trois amis mettent en place un plan d'évasion désespéré face à des adultes beaucoup plus dangereux qu'ils n'y paraissent.",
    pros: ["Premier arc haletant, tension psychologique excellente", "Duel d'intelligences entre enfants et adultes magistral", "Révélations bien dosées", "Trio de protagonistes attachants"],
    cons: ["Qualité en dents de scie après l'arc de Grace Field", "Fin décevante pour beaucoup de lecteurs"],
    reviewHtml: `<p>The Promised Neverland commence comme l'un des meilleurs thrillers du manga Jump : le premier arc à Grace Field est une masterclass de tension psychologique, où chaque révélation redéfinit les règles du jeu. Le duel d'intelligences entre Emma/Norman et Isabella est fascinant.</p><p>Kaiu Shirai et Posuka Demizu construisent une atmosphère de menace permanente avec peu de moyens, jouant habilement sur l'innocence apparente des enfants et la malveillance cachée des adultes. Les 38 premiers chapitres sont parmi les meilleurs de toute la production Weekly Jump.</p><p>La suite est plus inégale : après l'évasion, la série peine à retrouver la même intensité malgré des idées intéressantes sur la nature du monde. La fin divise. Mais pour son premier arc au moins, The Promised Neverland mérite amplement sa réputation.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=the+promised+neverland+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=the+promised+neverland+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=the-promised-neverland", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "chainsaw-man",
    title: "Chainsaw Man",
    category: "manga",
    tags: "Action · Comédie · Drame · Horreur · Surnaturel",
    stars: 5,
    synopsis: "Denji, un jeune homme criblé de dettes qui chasse des démons pour survivre, fusionne avec son chien-démon Pochita et devient le Chainsaw Man. Recruté par le Bureau des Démons, il se retrouve plongé dans un monde de conspirations, de démons terrifiants et de relations humaines aussi dangereuses que les monstres qu'il affronte.",
    pros: ["Subversif et imprévisible à chaque chapitre", "Fujimoto joue avec les codes du shōnen de façon brillante", "Démons conceptuels fascinants", "Émotion brute et sincère malgré le chaos"],
    cons: ["Partie 2 plus difficile d'accès que la partie 1", "Certains arcs de la partie 1 moins aboutis"],
    reviewHtml: `<p>Chainsaw Man est l'oeuvre la plus singulière publiée dans Weekly Jump depuis des années. Tatsuki Fujimoto y démontre un talent exceptionnel pour subvertir les attentes, construisant un récit chaotique, violent et drôle qui cache une sincérité émotionnelle désarmante.</p><p>Le concept des démons basés sur des peurs (le démon couteau, le démon pistolet, le démon éternité) est d'une créativité remarquable et permet des affrontements toujours surprenants. Mais c'est la relation de Denji avec les personnages qui l'entourent, notamment Makima, qui constitue le vrai moteur émotionnel de l'oeuvre.</p><p>L'arc final de la partie 1 atteint un sommet d'intensité et de douleur émotionnelle rare. Chainsaw Man n'est pas un manga confortable, mais c'est précisément pour ça qu'il marque durablement. Fujimoto est une voix unique dans le manga contemporain.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=chainsaw+man+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=chainsaw+man+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=chainsaw-man", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "fire-punch",
    title: "Fire Punch",
    category: "manga",
    tags: "Action · Drame · Fantasy · Horreur · Psychologie · Post-apocalyptique",
    stars: 4,
    synopsis: "Dans un monde glacial post-apocalyptique, Agni est un \"béni\" dont le corps régénère à l'infini. Quand son village est massacré par un autre béni capable de créer du feu inextinguible, Agni se retrouve condamné à brûler éternellement tout en se régénérant, avançant dans un état de souffrance perpétuelle pour venger sa soeur.",
    pros: ["Concept visuel unique (personnage en feu constant)", "Exploration sombre de la survie et de la culpabilité", "Déconstruction des archétypes du héros", "Tatsuki Fujimoto, talent brut avant Chainsaw Man"],
    cons: ["Narration volontairement chaotique et déstabilisante", "Fin abrupte et polarisante"],
    reviewHtml: `<p>Fire Punch est l'oeuvre qui a révélé Tatsuki Fujimoto comme l'un des auteurs les plus singuliers de sa génération. Publié avant Chainsaw Man, ce manga post-apocalyptique témoigne déjà d'une vision artistique radicalement originale.</p><p>L'image centrale de l'oeuvre est saisissante : un homme qui brûle en marchant, incapable de mourir, porté uniquement par la promesse de vengeance. Cette métaphore de la souffrance perpétuelle et de l'impossibilité de se laisser mourir est traitée avec une noirceur totale, sans concession.</p><p>La narration est volontairement désordonnée, mêlant les genres (post-apo, road movie, réflexion sur la fiction) de façon parfois déroutante. Mais c'est justement cette imprévisibilité qui fascine. Fire Punch est l'oeuvre d'un auteur qui refuse catégoriquement les codes attendus, pour le meilleur et parfois pour le pire.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=fire+punch+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=fire+punch+manga+fujimoto", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=fire-punch", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "delicious-in-dungeon",
    title: "Delicious in Dungeon",
    category: "manga",
    tags: "Aventure · Comédie · Fantasy · Gastronomie",
    stars: 5,
    synopsis: "Laios et son groupe d'aventuriers se lancent dans un donjon pour sauver leur soeur dévorée par un dragon, sans provisions ni argent. La solution de Laios : cuisiner et manger les monstres du donjon. Un manga de fantasy culinaire qui prend son concept délirant avec un sérieux absolu et y ajoute un world-building d'une richesse surprenante.",
    pros: ["Concept original exécuté avec une cohérence totale", "World-building de fantasy parmi les meilleurs du genre", "Chaque chapitre est à la fois drôle, appétissant et riche en lore", "Personnages tous très bien écrits"],
    cons: ["Rythme lent au début qui peut décourager", "L'arc final très dense demande attention"],
    reviewHtml: `<p>Delicious in Dungeon (Dungeon Meshi) est un manga qui prouve qu'un concept absurde, traité avec sérieux et talent, peut devenir une oeuvre de référence. Ryoko Kui a bâti autour de la simple question \"peut-on manger les monstres ?\" un univers d'une richesse fantastique exceptionnelle.</p><p>Chaque chapitre est une recette impossible mêlée de worldbuilding inventif : comment fonctionne l'écosystème du donjon, quelle est la nature des monstres, comment la magie s'articule avec la biologie des créatures. La série répond à ces questions avec le sérieux d'un documentaire naturaliste, ce qui est à la fois très drôle et fascinant.</p><p>Les personnages sont tous remarquablement écrits, notamment Laios avec ses obsessions particulières pour les monstres. L'arc final élargit considérablement les enjeux pour une conclusion ambitieuse et satisfaisante. Dungeon Meshi est une oeuvre complète, qui mérite son statut de classique moderne.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=dungeon+meshi+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=dungeon+meshi+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=delicious-in-dungeon", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "dorohedoro",
    title: "Dorohedoro",
    category: "manga",
    tags: "Action · Aventure · Comédie · Dark Fantasy · Horreur",
    stars: 5,
    synopsis: "Dans \"le Trou\", une ville misérable où les sorciers viennent pratiquer leurs expériences sur les habitants, Caiman erre avec une tête de reptile et une amnésie totale. Avec son amie Nikaido, il traque les sorciers pour retrouver celui qui l'a transformé. Une plongée dans un univers de dark fantasy délirant, violent et bizarrement touchant.",
    pros: ["Univers absolument unique dans toute la production manga", "Mélange de violence, humour et humanité maîtrisé", "Esthétique sombre et grotesque inoubliable", "Lore d'une profondeur inattendue"],
    cons: ["Style graphique rugueux peu conventionnel", "Premier volume difficile, demande de dépasser le choc visuel"],
    reviewHtml: `<p>Dorohedoro est une oeuvre comme il n'en existe aucune autre dans le manga. Q Hayashida a créé un univers de dark fantasy grotesque et violent qui aurait dû être repoussant, et parvient pourtant à y insuffler une humanité et un humour profondément attachants.</p><p>\"Le Trou\" est l'un des univers les plus singuliers du manga : une ville sordide où coexistent des personnages improbables, des sorciers aux pouvoirs variés et une gastronomie qui occupe une place centrale dans la vie des personnages. Cette normalité dans l'anormal est la marque de fabrique de Dorohedoro.</p><p>Caiman et Nikaido forment un duo de protagonistes inoubliables, et les antagonistes sorciers sont traités avec autant de soin que les héros. Le lore s'approfondit au fil des volumes pour révéler une mythologie plus riche qu'attendu. Dorohedoro est une oeuvre culte qui demande un effort initial mais récompense largement le lecteur patient.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=dorohedoro+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=dorohedoro+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=dorohedoro", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "kaiju-no8",
    title: "Kaiju No.8",
    category: "manga",
    tags: "Action · Comédie · Science-fiction · Shōnen",
    stars: 4,
    synopsis: "Kafka Hibino, quadragénaire qui nettoie les cadavres de kaijus après les combats, voit son rêve de rejoindre les Forces de Défense réactivé quand il absorbe un parasite et acquiert la capacité de se transformer en kaiju de niveau 8. Désormais double agent involontaire, il doit trouver comment utiliser ce pouvoir au service de l'humanité.",
    pros: ["Concept original et amusant du héros tardif", "Design des kaijus et des transformations impressionnant", "Rythme soutenu avec peu de temps mort", "Camaraderie de l'escouade bien rendue"],
    cons: ["Scénario assez prévisible dans ses arcs", "Kafka manque parfois de profondeur en tant que personnage"],
    reviewHtml: `<p>Kaiju No.8 a conquis des millions de lecteurs grâce à un concept simple mais efficace : et si le héros de l'histoire était un vieux de la vieille qui rate sa chance depuis des années ? La thématique de la résilience tardive fonctionne bien et donne au manga une saveur différente des shōnens habituels.</p><p>Naoya Matsumoto (Pochi Kuro) réalise un travail spectaculaire sur les designs des kaijus et les séquences de transformation. Les combats sont bien chorégraphiés et l'escalade de puissance gérée avec une bonne progression. Le mangaka sait aussi quand insérer de l'humour pour alléger l'atmosphère.</p><p>La série reste sur des rails assez classiques en terme de narration, mais elle les parcourt avec une efficacité et une énergie indéniables. Pour les fans d'action avec un univers kaiju bien construit, c'est un choix solide.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=kaiju+no+8+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=kaiju+no+8+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=kaiju-no8", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "blue-lock",
    title: "Blue Lock",
    category: "manga",
    tags: "Action · Drame · Psychologie · Sport · Football",
    stars: 4,
    synopsis: "Après la défaite du Japon en Coupe du Monde, la Fédération de football lance le projet Blue Lock : réunir 300 des meilleurs attaquants japonais dans une installation de compétition intense pour en façonner un seul tueur de buts absolu. Isagi Yoichi, attaquant prometteur mais sans instinct de tueur, doit transcender ses limites ou être éliminé.",
    pros: ["Psychologie du sport et de la compétition très bien rendue", "Système d'évolution du jeu inventif", "Rivalités entre joueurs toutes mémorables", "Concept de l'ego comme arme dramatiquement efficace"],
    cons: ["Traitement du football parfois irréaliste", "Personnages féminins quasi absents"],
    reviewHtml: `<p>Blue Lock est arrivé comme une bouffée d'air frais dans le manga sportif en osant poser une question radicale : et si l'altruisme était l'ennemi de la performance ? Le projet Blue Lock, qui promeut l'égo comme condition nécessaire au génie du football, donne au manga une identité philosophique marquante.</p><p>Muneyuki Kaneshiro et Yusuke Nomura ont construit un système de progression tactique inventif, où chaque arc voit Isagi développer de nouvelles \"armes\" cognitives. Les rivalités qui se forment sont toutes passionnantes, chaque joueur représentant un style de jeu et une psychologie différents.</p><p>Le manga ne prétend pas être une représentation réaliste du football, et c'est tant mieux : il pousse les concepts à l'extrême pour servir le drame et les enjeux émotionnels. Un des sports manga les plus stimulants intellectuellement de sa génération.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=blue+lock+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=blue+lock+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=blue-lock", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "rave-master",
    title: "Rave Master",
    category: "manga",
    tags: "Aventure · Comédie · Fantasy · Shōnen",
    stars: 4,
    synopsis: "Haru Glory, un jeune homme vivant sur une île isolée, devient le deuxième Rave Master, porteur de la pierre Rave, seule arme capable de détruire les Dark Brings qui menacent le Continent de la Chanson. Accompagné de ses compagnons dont l'adorable Plue, il parcourt le monde pour collecter les cinq Raves et affronter la société criminelle Demon Card.",
    pros: ["Aventure épique avec un sense of wonder communicatif", "Plue est un personnage iconique très attachant", "Combats créatifs avec les différentes formes de Ten Powers", "Liens émotionnels entre personnages bien construits"],
    cons: ["Début assez lent et classique", "Certains antagonistes manquent de profondeur"],
    reviewHtml: `<p>Rave Master (Groove Adventure Rave) est l'oeuvre qui a lancé la carrière de Hiro Mashima avant Fairy Tail. Publiée entre 1999 et 2005, elle montre déjà tous les atouts de l'auteur : un sens de l'aventure expansif, des compagnonnages chaleureux et une imagination fertile pour les pouvoirs et les artefacts magiques.</p><p>Le système des Ten Powers, l'épée de Haru qui peut changer de forme selon la situation, donne aux combats une inventivité constante. Mais ce qui distingue Rave Master c'est l'atmosphère d'exploration joyeuse : chaque nouvelle région du Continent de la Chanson est l'occasion de découvertes et de rencontres variées.</p><p>Plue, la créature indéfinissable au nez pointu, est devenu un personnage culte reconnaissable entre tous. Rave Master reste une aventure shōnen classique mais exécutée avec générosité et enthousiasme, idéale pour les lecteurs qui aiment les grandes épopées fantastiques traditionnelles.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=rave+master+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=rave+master+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=rave-master", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
];

// ── patcher ──────────────────────────────────────────────────────────────────
let content = readFileSync(SERIES_FILE, "utf-8");

for (const p of patches) {
  const marker = `slug: "${p.slug}"`;
  const idx = content.indexOf(marker);
  if (idx === -1) { console.warn(`⚠️  Non trouvé : ${p.slug}`); continue; }

  // find opening brace
  let i = idx;
  while (i > 0 && content[i] !== "{") i--;
  const start = i;

  // find matching closing brace
  let depth = 0;
  for (i = start; i < content.length; i++) {
    if (content[i] === "{") depth++;
    if (content[i] === "}") { depth--; if (depth === 0) break; }
  }
  const end = i + 1;

  const replacement = `{
  slug: "${p.slug}",
  title: "${p.title}",
  category: "${p.category}",
  cover: ${content.slice(start, end).match(/cover:\s*"([^"]+)"/)?.[0] ?? 'cover: ""'},
  tags: "${p.tags}",
  stars: ${p.stars},
  addedAt: "2026-03-22",
  synopsis: "${p.synopsis.replace(/"/g, '\\"')}",
  pros: ${JSON.stringify(p.pros)},
  cons: ${JSON.stringify(p.cons)},
  reviewHtml: \`${p.reviewHtml}\`,
  shops: ${JSON.stringify(p.shops, null, 2)},
  streaming: ${JSON.stringify(p.streaming)},
  live: []
}`;

  content = content.slice(0, start) + replacement + content.slice(end);
  console.log(`✅ ${p.title}`);
}

writeFileSync(SERIES_FILE, content, "utf-8");
console.log("\n🎉 Patch batch3-lot2 terminé !");
