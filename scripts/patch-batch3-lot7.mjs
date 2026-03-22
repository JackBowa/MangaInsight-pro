/**
 * patch-batch3-lot7.mjs — 15 séries seinen/shōjo/tranche de vie
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const SERIES_FILE = join(__dirname, "../data/series/series-2.ts");

const patches = [
  {
    slug: "silver-spoon",
    title: "Silver Spoon",
    category: "manga",
    tags: "Comédie · Drame · Seinen · Tranche de vie · Agriculture",
    stars: 5,
    synopsis: "Yugo Hachiken, lycéen de la ville qui fuit la pression scolaire de ses parents, intègre l'École Agricole d'Ezono en Hokkaido. Il découvre un monde totalement étranger : animaux d'élevage, réalités rurales, élèves qui ont des rêves concrets et travaillent dur pour les réaliser. Hiromu Arakawa (FMA) signe une oeuvre sur la croissance personnelle et le sens du travail.",
    pros: ["Hiromu Arakawa au sommet de sa maîtrise narrative", "Thèmes sur l'agriculture et l'alimentation traités avec profondeur", "Hachiken, évolution de personnage parmi les plus satisfaisantes du manga", "Humour constant et personnages secondaires tous mémorables"],
    cons: ["Fin précipitée suite à la maladie de l'auteure", "Derniers arcs condensés"],
    reviewHtml: `<p>Silver Spoon (Gin no Saji) est l'oeuvre qui a prouvé que Hiromu Arakawa n'était pas qu'une spécialiste du shōnen d'action. Après Fullmetal Alchemist, elle s'est attaquée à un sujet radicalement différent — l'agriculture en Hokkaido — pour livrer une oeuvre d'une profondeur et d'une chaleur remarquables.</p><p>Hachiken est un protagoniste fascinant : un perfectionniste académique qui a tout optimisé sauf ce qui compte, fuyant une famille oppressante pour se retrouver dans un monde où le travail a un sens concret et où les rêves des autres lui donnent à réfléchir sur l'absence des siens. Son évolution est d'une justesse et d'une satisfaction rares.</p><p>Les thèmes de l'agriculture — la naissance et la mort des animaux, la valeur de la nourriture, le mode de vie rural — sont traités avec une honnêteté et une documentation sérieuse. Silver Spoon fait aimer la campagne et l'élevage à des lecteurs urbains, et ça, c'est un vrai tour de force.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=silver+spoon+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=silver+spoon+manga+arakawa", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=silver-spoon", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "aku-no-hana",
    title: "Aku no Hana",
    category: "manga",
    tags: "Drame · Psychologie · Romance · Seinen",
    stars: 4,
    synopsis: "Takao Kasuga, lycéen obsédé par Baudelaire, vole par inadvertance le sac de sport de la fille dont il est amoureux. Nanako Saeki, la déviante de la classe, le surprend et le fait chanter, l'obligeant à conclure un \"contrat\" avec elle. Un portrait psychologique intense d'une adolescence étouffée dans une ville de province, par Shuzo Oshimi.",
    pros: ["Portrait de l'adolescence torturée d'une sincérité brûlante", "Deux arcs distincts (lycée/adulte) qui approfondissent les thèmes", "Oshimi, auteur qui n'a peur de rien", "Nanako Saeki, personnage féminin parmi les plus complexes du seinen"],
    cons: ["Style graphique très simple qui peut dérouter", "Contenu perturbant, pas pour tous"],
    reviewHtml: `<p>Aku no Hana (Les Fleurs du Mal) est le manga de l'adolescence comme cauchemar intérieur. Shuzo Oshimi capture avec une précision douloureuse ce sentiment d'être différent des autres, d'étouffer dans une petite ville, de chercher la transgression comme seule forme d'existence possible.</p><p>Nanako Saeki est l'un des personnages féminins les plus fascinants et les plus déstabilisants du manga : ni victime ni vilaine, elle est quelqu'un qui agit en dehors des codes sociaux non par méchanceté mais par incompréhension radicale de ceux-ci. Sa dynamique avec Kasuga est une exploration de ce que deux inadaptés se font mutuellement.</p><p>La série existe en deux parties distinctes (adolescence/vie adulte) qui changent radicalement de ton et d'approche. Ensemble elles forment un portrait complet d'une vie marquée par ses transgressions passées. Oshimi confirme avec ce manga son statut d'auteur majeur du seinen psychologique.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=aku+no+hana+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=aku+no+hana+manga+oshimi", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=aku-no-hana", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "solanin",
    title: "Solanin",
    category: "manga",
    tags: "Drame · Musique · Romance · Seinen · Tranche de vie",
    stars: 5,
    synopsis: "Meiko et son petit ami Naruo vivent à Tokyo la galère des jeunes adultes post-diplôme : jobs alimentaires, rêves musicaux remis à plus tard, questions sur ce qu'on veut vraiment faire de sa vie. Quand Naruo décide de tout risquer pour son groupe, une décision irréversible va tout changer. L'oeuvre de jeunesse d'Inio Asano.",
    pros: ["Portrait générationnel des 20-25 ans d'une justesse déchirante", "Musique comme moteur émotionnel parfaitement intégrée", "Fin d'une beauté et d'une tristesse inoubliables", "Asano avant Punpun, déjà un talent exceptionnel"],
    cons: ["Format court (2 volumes) qui laisse sur sa faim", "Peu de personnages secondaires développés"],
    reviewHtml: `<p>Solanin est le manga qui a révélé Inio Asano comme une voix générationnelle majeure. Publiée avant Goodnight Punpun, cette histoire courte de jeunes adultes perdus à Tokyo résonne avec une sincérité déchirante pour quiconque a traversé cette période d'incertitude post-étudiante.</p><p>Asano capture parfaitement la paralysie des 20 ans : le sentiment que les rêves d'enfance deviennent optionnels alors que la vie adulte impose ses contraintes, et l'incapacité à faire le premier pas vers ce qu'on veut vraiment. La musique de Naruo, ses doutes, sa décision finale, sont traités avec une authenticité émotionnelle rare.</p><p>La fin de Solanin est l'une des plus émouvantes du manga. Sans en révéler la nature, elle transforme rétrospectivement tout ce qu'on a lu en quelque chose d'encore plus beau et plus douloureux. Deux volumes qui comptent autant que beaucoup de séries en vingt. Un chef-d'oeuvre court.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=solanin+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=solanin+manga+asano", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=solanin", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "what-did-you-eat-yesterday",
    title: "What Did You Eat Yesterday?",
    category: "manga",
    tags: "Comédie · Cuisine · Romance · Seinen · Tranche de vie",
    stars: 4,
    synopsis: "Shiro Kakei, avocat au caractère économe et passionné de cuisine, prépare chaque soir des repas élaborés pour lui et son petit ami Kenji, coiffeur exubérant. Un manga de cuisine et de vie quotidienne autour d'un couple gay d'âge mûr, d'une tendresse et d'une normalité apaisantes.",
    pros: ["Représentation d'un couple gay adulte d'une normalité et tendresse uniques", "Recettes réelles intégrées de façon naturelle et appétissante", "Personnages secondaires tous attachants", "Yoshinaga au sommet de sa maîtrise du tranche de vie"],
    cons: ["Rythme très lent par nature", "Peu d'enjeux dramatiques (assumé)"],
    reviewHtml: `<p>What Did You Eat Yesterday? (Kinou Nani Tabeta?) est l'une des représentations les plus saines et les plus naturelles d'un couple homosexuel dans le manga. Fumi Yoshinaga place au centre de son récit un avocat et un coiffeur qui s'aiment depuis des années, et leur quotidien autour de la cuisine comme langage d'amour.</p><p>Shiro qui cuisine avec une précision méthodique pour Kenji après une longue journée de travail est une métaphore de l'amour discret et concret. Les recettes, réelles et détaillées, sont intégrées naturellement dans les conversations du couple, rendant la lecture à la fois émouvante et pratiquement utile.</p><p>La série n'a pas d'arc dramatique fort : c'est délibérément le quotidien de deux personnes ordinaires qui construisent une vie ensemble. Dans ce genre minimaliste, Yoshinaga atteint un sommet de la représentation de la vie de couple. Une lecture apaisante et chaleureuse.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=what+did+you+eat+yesterday+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=what+did+you+eat+yesterday+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=what-did-you-eat-yesterday", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "hozukis-coolheadedness",
    title: "Hozuki's Coolheadedness",
    category: "manga",
    tags: "Comédie · Fantasy · Mythologie · Seinen",
    stars: 4,
    synopsis: "Hozuki est le sous-officier extrêmement compétent et froid du roi des Enfers japonais, supervisant les différents départements des Enfers avec une efficacité terrifiante. Une comédie d'office qui parodie la bureaucratie de l'au-delà, mêlant mythologie japonaise, folklore mondial et humour de bureau japonais.",
    pros: ["Érudition sur la mythologie japonaise et mondiale impressionnante", "Humour de bureau transposé aux Enfers fonctionne parfaitement", "Hozuki, personnage deadpan d'une efficacité comique constante", "Format de courtes histoires idéal pour la lecture épisodique"],
    cons: ["Humour très spécifique à la culture japonaise", "Moins accessible sans connaissances de la mythologie shinto"],
    reviewHtml: `<p>Hozuki's Coolheadedness (Hozuki no Reitetsu) est l'une des comédies les plus originales et les plus cultivées du manga seinen récent. Natsumi Eguchi a créé un univers des Enfers japonais d'une précision mythologique remarquable, le transformant en terrain de jeu pour une satire du monde du travail japonais.</p><p>Hozuki lui-même est un personnage d'une efficacité comique parfaite : froid, compétent, sarcastique, il gère des problèmes absurdes (un département des Enfers qui dysfonctionne, des démons indisciplinés, des collègues mythologiques d'autres cultures) avec un calme qui contraste parfaitement avec le chaos ambiant.</p><p>La richesse culturelle est un vrai atout : chaque arc introduit des éléments de mythologie japonaise (oni, tengu, yokai) ou mondiale (Enfers grecs, vikings, chrétiens) avec une précision et un humour qui donnent envie d'approfondir. Pour les amateurs de comédie culturellement riche.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=hozuki+coolheadedness+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=hozuki+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=hozukis-coolheadedness", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "a-brides-story",
    title: "A Bride's Story",
    category: "manga",
    tags: "Aventure · Drame · Historique · Romance · Seinen",
    stars: 5,
    synopsis: "Dans l'Asie centrale du XIXe siècle, Amir Halgal, cavalière et archère de 20 ans, épouse le jeune Karluk Eihon de 12 ans selon la tradition nomade. Le récit suit leur vie dans les steppes et les caravansérails, ainsi que d'autres mariages et vies de femmes de la région. Kaoru Mori offre un portrait d'une beauté magistrale de la culture centre-asiatique.",
    pros: ["Documentation sur la culture centre-asiatique d'une précision et d'une beauté rares", "Dessin de Kaoru Mori parmi les plus beaux du manga contemporain", "Galerie de personnages féminins tous distinctifs et touchants", "Richesse du quotidien et des traditions représentée avec amour"],
    cons: ["Rythme contemplativement lent qui peut ne pas convenir à tous", "Peu d'enjeux dramatiques dans certains arcs"],
    reviewHtml: `<p>A Bride's Story (Otoyomegatari) est l'oeuvre qui confirme Kaoru Mori comme l'une des dessinatrices les plus talentueuses de sa génération. Son travail précédent Emma (romance victorienne) annonçait déjà son amour du détail historique, mais Otoyomegatari atteint un niveau de richesse visuelle et culturelle absolu.</p><p>Chaque page est un document : les broderies des vêtements, les motifs des tapis, les architectures des maisons en pisé, la nourriture, les rituels — tout est documenté avec une précision ethnographique et une beauté artistique qui font de cette série un vrai trésor. Kaoru Mori avoue passer des semaines à faire des recherches pour chaque arc.</p><p>L'histoire d'Amir et Karluk est touchante dans son asymétrie et son respect mutuel, mais la vraie richesse vient des portraits de femmes que Mori développe : chacune avec sa propre façon d'habiter une vie définie par les traditions de son peuple. Un manga magnifique au sens littéral du terme.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=otoyomegatari+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=a+brides+story+manga+mori", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=a-brides-story", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "rainbow-nisha-rokubou-no-shichinin",
    title: "Rainbow: Nisha Rokubou no Shichinin",
    category: "manga",
    tags: "Action · Drame · Seinen · Historique · Prison",
    stars: 5,
    synopsis: "Au Japon de l'après-guerre (1955), six jeunes délinquants sont internés dans un centre correctionnel brutal. Ils forment une fraternité autour de Rokurouta Sakuragi, plus âgé et plus endurci, apprenant à survivre à la violence des gardiens et à rester humains. Une fois libérés, ils devront faire face au Japon en reconstruction.",
    pros: ["Portrait de l'amitié masculine d'une intensité et d'une sincérité exceptionnelles", "Reconstitution du Japon d'après-guerre poignante et documentée", "Émotions brutes et sincères sans manipulation", "Arc post-prison aussi fort que l'arc prison"],
    cons: ["Violence physique et psychologique intense", "Certains antagonistes manichéens"],
    reviewHtml: `<p>Rainbow est l'une des oeuvres les plus intenses et les plus émouvantes du manga seinen. George Abe et Masasumi Kakizaki ont créé un récit d'amitié masculine dans les conditions les plus extrêmes, où sept garçons apprennent ensemble ce que signifie garder sa dignité face à l'inhumanité.</p><p>Rokurouta Sakuragi est l'une des figures fraternelles les plus marquantes du manga : plus âgé, plus brisé, mais animé d'une force tranquille qui inspire les six plus jeunes à survivre et à croire en un avenir. Sa relation avec chacun des membres du groupe est développée avec une tendresse sans sentimentalisme.</p><p>Ce qui distingue Rainbow des autres manga de prison, c'est sa suite : la vie après la libération, la difficulté de s'intégrer dans un Japon en pleine reconstruction économique pour des jeunes marqués par leur passé. La série ne lâche jamais ses personnages, et ça fait toute la différence. Un manga qui touche profondément.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=rainbow+manga+seinen&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=rainbow+nisha+rokubou+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=rainbow-nisha-rokubou-no-shichinin", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "ran-and-the-gray-world",
    title: "Ran and the Gray World",
    category: "manga",
    tags: "Aventure · Comédie · Fantastique · Romance · Shōjo",
    stars: 4,
    synopsis: "Ran Uruma, petite fille de 11 ans fille d'une grande sorcière, peut se transformer en adulte grâce à une paire de baskets magiques. Dans sa forme adulte, elle explore le monde et rencontre Jin Senbongi, un jeune homme dont elle tombe amoureuse. Un manga de fantasy shōjo d'une originalité visuelle et narrative remarquable.",
    pros: ["Style graphique d'Aki Irie absolument unique", "Concept de la double vie enfant/adulte exploité avec fantaisie", "Atmosphère magique et mélancolique parfaitement équilibrée", "Personnages de la famille Uruma tous fascinants"],
    cons: ["Disponibilité limitée en français", "Fin assez rapide"],
    reviewHtml: `<p>Ran and the Gray World est l'oeuvre qui a révélé Aki Irie comme une dessinatrice au style absolument unique dans le paysage du manga shōjo. Son trait, qui mêle précision des détails et liberté des formes, crée une atmosphère visuelle immédiatement reconnaissable.</p><p>Le concept central est ingénieux : une enfant qui peut devenir adulte à volonté, naviguant entre les deux identités avec une naïveté enfantine dans un corps de femme. Cette dualité permet des situations à la fois comiques et mélancoliques, notamment dans sa relation avec Jin qui ne connaît que sa forme adulte.</p><p>La famille Uruma est une galerie de personnages tous hauts en couleur : père absent et puissant, frère aîné protecteur, mère légendaire. Chaque membre apporte sa propre dynamique au récit. Ran and the Gray World est une oeuvre originale qui mérite d'être découverte par les amateurs de fantasy shōjo hors des sentiers battus.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=ran+gray+world+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=ran+and+the+gray+world+manga", logo: "/logos/amazon.svg" },
    ],
    streaming: [],
  },
  {
    slug: "fushigi-yugi",
    title: "Fushigi Yûgi",
    category: "manga",
    tags: "Aventure · Drame · Fantasy · Romance · Shōjo",
    stars: 3,
    synopsis: "Miaka Yuki, lycéenne, se retrouve transportée dans un livre au décor de la Chine ancienne où elle devient la Prêtresse de Suzaku destinée à rassembler les Sept Guerriers de Suzaku pour invoquer le dieu-phénix et réaliser trois voeux. Une fantasy shōjo des années 90 qui a influencé tout le genre.",
    pros: ["Romance épique intense très satisfaisante pour son public", "Galerie de guerriers tous mémorables", "Yuu Watase maîtrise la tension dramatique", "Pionnier de l'isekai shōjo"],
    cons: ["Miaka peut être frustrante comme héroïne passive", "Certains éléments romantiques problématiques vus aujourd'hui", "Qualité narrative inégale dans les arcs finaux"],
    reviewHtml: `<p>Fushigi Yugi (La Légende de Gembu) est l'une des séries fondatrices du shōjo fantasy isekai des années 90. Yuu Watase a créé un récit romanesque intense qui a captivé des millions de lectrices avec sa galerie de guerriers bishōnen et ses romances tragiques.</p><p>L'univers de la Chine ancienne fantaisiste est bien construit, et les différentes dynamiques entre Miaka et les Suzaku Shichiseishi sont variées et bien caractérisées. Tamahome reste l'un des intérêts romantiques les plus aimés du shōjo, et la relation tumultueuse du couple principal garde son efficacité dramatique.</p><p>Vue avec les yeux d'aujourd'hui, la série montre ses limites : Miaka est une héroïne souvent passive et pleurante, et certaines situations romantiques seraient traitées différemment dans le manga moderne. Mais comme artefact culturel du shōjo des années 90 et comme oeuvre pionnière du genre, Fushigi Yugi mérite sa place dans le panthéon du manga romantique.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=fushigi+yugi+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=fushigi+yugi+manga+watase", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=fushigi-yugi", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "descending-stories-showa-genroku-rakugo-shinju",
    title: "Descending Stories: Showa Genroku Rakugo Shinju",
    category: "manga",
    tags: "Drame · Historique · Seinen · Arts traditionnels",
    stars: 5,
    synopsis: "Un homme libéré de prison décide de devenir apprenti rakugoka (conteur traditionnel japonais) auprès du grand maître Yakumo Yuurakutei. Le récit explore l'art du rakugo, l'amitié tragique entre Yakumo et son alter ego Sukeroku décédé, et la transmission d'un art ancien dans le Japon moderne.",
    pros: ["Le rakugo rendu accessible et fascinant pour des non-initiés", "Portrait de l'amitié artistique et de la rivalité d'une profondeur rare", "Narration non-linéaire maîtrisée avec excellence", "Fin parmi les plus belles du manga seinen"],
    cons: ["Niche culturelle qui demande un effort d'entrée", "Peu connu en dehors du Japon"],
    reviewHtml: `<p>Descending Stories est un manga rare : une oeuvre qui vous passionne pour un art que vous ignoriez totalement avant de le lire. Haruko Kumota rend le rakugo, art du monologue comique japonais, aussi fascinant que n'importe quelle performance sportive, grâce à la façon dont elle capture la technique, l'émotionnel et la transmission de cet art.</p><p>La relation centrale entre Yakumo et Sukeroku est l'une des grandes amitiés masculines du manga seinen : deux artistes que tout oppose sauf leur passion commune, dont le destin tragique structure toute la narration. La façon dont leurs styles de rakugo reflètent leurs personnalités est d'une finesse remarquable.</p><p>L'adaptation anime par Studio DEEN est un bijou qui amplifie les performances rakugo avec des voix exceptionnelles, mais le manga original, publié dans le magazine Itan, est l'oeuvre de référence. Un manga qui ouvre une fenêtre unique sur la culture japonaise traditionnelle avec une émotion universelle.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=rakugo+shinju+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=showa+genroku+rakugo+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=descending-stories-showa-genroku-rakugo-shinju", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "a-distant-neighborhood",
    title: "A Distant Neighborhood",
    category: "manga",
    tags: "Drame · Fantasy · Seinen · Tranche de vie",
    stars: 5,
    synopsis: "Hiroshi Nakahara, quarantenaire blasé, se retrouve mystérieusement transporté dans son passé, dans le corps de son jeune moi de 14 ans. Gardant ses souvenirs d'adulte, il revit son adolescence et comprend des vérités sur son père qui avait disparu mystérieusement. Une oeuvre contemplative de Jiro Taniguchi sur le deuil et les regrets.",
    pros: ["Jiro Taniguchi au sommet de sa poésie visuelle", "Thème du retour dans le passé traité avec une sensibilité unique", "Atmosphère des années 60-70 japonaises magnifiquement rendue", "Émotion finale d'une beauté déchirante"],
    cons: ["Rythme très contemplatif qui peut décourager les lecteurs habitués à l'action", "Peu de personnages secondaires développés"],
    reviewHtml: `<p>A Distant Neighborhood (Quartier Lointain) est l'oeuvre la plus connue de Jiro Taniguchi en Europe, son Prix de la Critique à Angoulême ayant légitimement attiré l'attention sur ce manga d'une douceur et d'une profondeur singulières.</p><p>Taniguchi maîtrise comme personne l'art du manga mélancolique et contemplatif. La reconstitution de la petite ville japonaise des années 60, avec ses maisons en bois, ses rues étroites et ses rituels quotidiens, est d'une précision nostalgique qui touche au-delà des frontières culturelles. On n'a pas besoin d'avoir grandi au Japon pour ressentir cette nostalgie.</p><p>Le coeur de l'oeuvre est la relation avec le père : Hiroshi, adulte dans un corps d'enfant, comprend enfin ce que son père traversait avant sa disparition. Cette exploration du deuil différé et de la compréhension tardive est traitée avec une délicatesse et une retenue qui en décuplent l'impact. Un manga pour adultes dans le meilleur sens du terme.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=quartier+lointain+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=quartier+lointain+manga+taniguchi", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=a-distant-neighborhood", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "the-walking-man",
    title: "The Walking Man",
    category: "manga",
    tags: "Seinen · Tranche de vie · Contemplation",
    stars: 4,
    synopsis: "Un homme marche. Chaque chapitre suit ce personnage sans nom lors d'une promenade dans sa ville et ses environs, découvrant la nature, les petits moments de beauté quotidienne, les rencontres fugaces. Pas d'intrigue, pas de conflit : juste la pratique de la marche attentive comme forme de méditation.",
    pros: ["Expérience de lecture unique et apaisante", "Dessin de Taniguchi d'une précision naturaliste magnifique", "Célébration de la lenteur et de l'attention dans un monde moderne", "Format idéal pour une lecture contemplative"],
    cons: ["Absence totale de narration traditionnelle (c'est voulu mais déroutant)", "Peu d'intérêt pour les lecteurs qui cherchent une histoire"],
    reviewHtml: `<p>The Walking Man (Aruku Hito) est une expérience de lecture unique dans l'histoire du manga. Jiro Taniguchi a réalisé une série de courtes histoires sans intrigue ni conflit, suivant simplement un homme qui marche et observe le monde avec attention.</p><p>C'est un manga de la lenteur revendiquée, un antidote à l'action et aux enjeux dramatiques qui dominent le medium. Taniguchi dessine la nature — les arbres, la pluie, les oiseaux, les saisons — avec une précision naturaliste qui transforme chaque case en aquarelle. La promenade devient méditation.</p><p>Pour certains lecteurs, c'est une révélation : un manga qui propose simplement de regarder le monde avec plus d'attention, de remarquer les petites choses. Pour d'autres, c'est ennuyeux. Mais dans sa catégorie — le manga comme expérience contemplative — The Walking Man est une oeuvre définitive et incomparable.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=walking+man+manga+taniguchi&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=walking+man+manga+taniguchi", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=the-walking-man", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "my-neighbor-seki",
    title: "My Neighbor Seki",
    category: "manga",
    tags: "Comédie · Tranche de vie · Shōnen",
    stars: 4,
    synopsis: "Rumi Yokoi, élève sérieuse, est constamment distraite par son voisin de classe Toshinari Seki qui construit des objets élaborés, joue à des jeux complexes ou réalise des projets impossibles pendant les cours sans jamais se faire prendre. Chaque chapitre est une nouvelle invention absurde de Seki qui fait disjoncter Rumi.",
    pros: ["Concept de comédie de répétition exécuté avec une inventivité inépuisable", "Rumi en narratrice réactive est parfaite", "Chaque chapitre est une idée comique nouvelle et différente", "Format court idéal pour la lecture épisodique"],
    cons: ["Formule répétitive (c'est assumé mais peut lasser)", "Peu de développement narratif ou de personnages"],
    reviewHtml: `<p>My Neighbor Seki est l'une des meilleures comédies de concept du manga récent. Takuma Morishige a trouvé une formule parfaite : chaque chapitre présente Seki réalisant quelque chose d'élaboré et d'absurde pendant un cours, et Rumi qui observe, réagit et se laisse entraîner dans son délire malgré elle.</p><p>La force du manga est son inventivité constante : pas deux chapitres pareils. Seki joue aux échecs avec des figurines qui ont une vie propre, construit une ville miniature sur son bureau, organise des mariages de gommes, joue au golf avec des boulettes de papier. Chaque nouvelle idée est plus absurde et plus élaborée que la précédente.</p><p>La dynamique entre le personnage silencieux qui n'est jamais pris en flagrant délit et celle qui s'indigne mais se laisse toujours embarquer est une comédie de caractère efficace. Un manga léger et joyeux, parfait pour de courtes sessions de lecture.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=my+neighbor+seki+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=my+neighbor+seki+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=my-neighbor-seki", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "super-lovers",
    title: "SUPER LOVERS",
    category: "manga",
    tags: "Comédie · Drame · Romance · Shōnen-ai",
    stars: 3,
    synopsis: "Haru Kaidou est envoyé par sa mère au Canada pour s'occuper d'Ren, son demi-frère adoptif sauvage qui ne parle qu'aux animaux. Après un accident qui lui efface une partie de la mémoire, Ren vient vivre au Japon avec Haru et ses frères jumeaux, et leur relation prend une nouvelle direction. Un shōnen-ai de longue haleine.",
    pros: ["Dynamique familiale élargie agréable", "Ren attachant dans sa façon d'appréhender le monde", "Moments de comédie efficaces"],
    cons: ["Prémisse romantique problématique (écart d'âge et dynamique de tutelle)", "Rythme très lent sur de nombreux volumes", "Résolution romantique extrêmement tardive"],
    reviewHtml: `<p>Super Lovers est un shōnen-ai de Miyuki Abe qui a fidélisé un public important grâce à sa dynamique de personnages chaleureuse, mais qui soulève des questions légitimes sur sa prémisse centrale : la relation romantique entre deux frères adoptifs avec un écart d'âge significatif, dans un contexte de tutelle.</p><p>Ren, avec sa façon sauvage et directe d'aborder le monde, est le personnage le plus réussi : son adaptation progressive à la vie familiale et sociale du Japon apporte la légèreté et les moments comiques les plus efficaces. La maison des quatre frères est un cadre chaleureux.</p><p>Pour les lecteurs du genre qui acceptent la prémisse, c'est une lecture de shōnen-ai confortable avec ses qualités propres. Pour les autres, la dynamique de départ reste un obstacle difficile à dépasser. À aborder avec conscience du contexte éditorial du genre.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=super+lovers+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=super+lovers+manga", logo: "/logos/amazon.svg" },
    ],
    streaming: [],
  },
  {
    slug: "embracing-love",
    title: "Embracing Love",
    category: "manga",
    tags: "Drame · Romance · Seinen · Yaoi",
    stars: 3,
    synopsis: "Iwaki Kyousuke et Katou Youji, tous deux acteurs en reconversion dans le cinéma pour adultes, se retrouvent rivaux puis amants dans un monde où ils doivent cacher leur relation réelle tout en jouant ensemble à l'écran. Un manga yaoi de Youka Nitta qui a popularisé le genre en dehors du Japon.",
    pros: ["Contexte du showbiz adulte original", "Dynamique Iwaki/Katou bien construite", "Une des séries yaoi les plus connues et traduites"],
    cons: ["Contenu explicite pas pour tous", "Scénario parfois mélodramatique"],
    reviewHtml: `<p>Embracing Love (Haru wo Daiteita) est l'une des séries yaoi les plus connues et les plus traduites en dehors du Japon. Youka Nitta a créé avec Iwaki et Katou un couple central dont la dynamique tension/affection a fidélisé un large public du genre.</p><p>Le cadre du milieu du cinéma pour adultes est original et permet à Nitta d'explorer les paradoxes d'acteurs qui jouent des scènes intimes à l'écran tout en refusant d'assumer une relation réelle. Cette tension entre performance et sincérité donne au manga plus de substance que le yaoi moyen.</p><p>Pour les lecteurs familiers du genre yaoi, c'est une référence solide et bien construite. Pour les non-initiés, c'est une porte d'entrée possible dans le genre, avec des personnages suffisamment développés pour justifier l'intérêt au-delà du contenu romantique explicite.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=haru+wo+daiteita+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=embracing+love+manga", logo: "/logos/amazon.svg" },
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

  let i = idx;
  while (i > 0 && content[i] !== "{") i--;
  const start = i;

  let depth = 0;
  for (i = start; i < content.length; i++) {
    if (content[i] === "{") depth++;
    if (content[i] === "}") { depth--; if (depth === 0) break; }
  }
  const end = i + 1;

  const existingEntry = content.slice(start, end);
  const coverMatch = existingEntry.match(/cover:\s*"([^"]+)"/);
  const coverValue = coverMatch ? `"${coverMatch[1]}"` : '""';

  const replacement = `{
  slug: "${p.slug}",
  title: "${p.title}",
  category: "${p.category}",
  cover: ${coverValue},
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
console.log("\n🎉 Patch batch3-lot7 terminé !");
