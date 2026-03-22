/**
 * patch-batch3-lot8.mjs — 18 séries shōjo/seinen/classiques
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const SERIES_FILE = join(__dirname, "../data/series/series-2.ts");

const patches = [
  {
    slug: "planetes",
    title: "Planetes",
    category: "manga",
    tags: "Aventure · Drame · Science-fiction · Seinen · Space opera",
    stars: 5,
    synopsis: "Dans le XXIe siècle, Hachimaki Hoshino travaille pour une compagnie qui récupère les débris spatiaux en orbite terrestre. Un travail ingrat et dangereux, mais qui nourrit son rêve de posséder un jour son propre vaisseau et partir vers Jupiter. Un manga de hard science-fiction sur le travail, les rêves et ce qu'on est prêt à sacrifier pour eux.",
    pros: ["Hard SF d'une rigueur scientifique exemplaire", "Portrait de la vie quotidienne dans l'espace très réaliste", "Hachimaki, évolution de personnage parmi les plus satisfaisantes du seinen", "Thèmes sur les rêves, le travail et les sacrifices d'une profondeur rare"],
    cons: ["Rythme lent dans les premiers tomes", "Format court (4 volumes) laisse certains personnages sous-exploités"],
    reviewHtml: `<p>Planetes est l'un des plus beaux mangas de science-fiction réaliste jamais publiés. Makoto Yukimura (qui écrira ensuite Vinland Saga) a d'abord créé cette oeuvre sur les éboueurs de l'espace, et y a déjà fait preuve d'un talent remarquable pour mêler rigueur documentaire et profondeur émotionnelle.</p><p>La NASA a salué la précision scientifique de Planetes, et on comprend pourquoi : la représentation de la vie dans l'espace, des problèmes techniques de l'orbite et des dangers des débris spatiaux est d'une crédibilité rare dans le manga. Mais Yukimura ne sacrifie jamais les personnages à la rigueur scientifique.</p><p>Hachimaki est un protagoniste fascinant : rêveur ambitieux qui va devoir choisir entre son rêve absolu et les personnes qui l'aiment. Cette question de ce qu'on sacrifie à l'ambition est traitée avec une maturité et une honnêteté rares. Planetes est une oeuvre courte et complète, idéale pour les amateurs de SF adulte qui veulent du sentiment en plus de la technique.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=planetes+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=planetes+manga+yukimura", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=planetes", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "chihayafuru",
    title: "Chihayafuru",
    category: "manga",
    tags: "Drame · Romance · Sport · Shōjo · Karuta",
    stars: 5,
    synopsis: "Chihaya Ayase, passionnée de karuta, un jeu de cartes traditionnel japonais, s'y consacre depuis l'enfance avec Arata et Taichi. Ses deux amis d'enfance ont pris des chemins divergents, mais Chihaya continue, créant un club de karuta au lycée et visant le titre de Meijin. Une romance à triangle amoureux enchâssée dans l'un des mangas sportifs les plus profonds.",
    pros: ["Le karuta rendu passionnant pour des non-initiés complets", "Triangle amoureux parmi les plus douloureux et bien construits du manga", "Chihaya, héroïne sport/romance d'une spontanéité irrésistible", "Chaque match de karuta est aussi tendu qu'une finale de sport"],
    cons: ["Publication très longue (50+ volumes toujours en cours)", "Triangle amoureux résolu très tard"],
    reviewHtml: `<p>Chihayafuru est le miracle du manga sportif féminin : une oeuvre qui parvient à rendre le karuta, jeu de cartes traditionnel japonais dont la plupart des lecteurs n'avaient jamais entendu parler, aussi intense et émotionnellement chargé que n'importe quelle finale sportive de haut niveau.</p><p>Yuki Suetsugu maîtrise l'art de faire ressentir physiquement les matchs de karuta : la vitesse des prises de carte, la lecture du jeu adverse, l'endurance psychologique nécessaire. Mais c'est le triangle amoureux Chihaya/Taichi/Arata qui constitue le vrai moteur émotionnel de l'oeuvre, d'une complexité et d'une douleur rares.</p><p>Chihaya elle-même est un personnage inoubliable : fille mono-maniaque du karuta, maladroite socialement mais d'une intensité et d'une sincérité qui la rendent immédiatement attachante. Chihayafuru est une oeuvre longue mais qui justifie chaque chapitre. Un chef-d'oeuvre du manga féminin contemporain.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=chihayafuru+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=chihayafuru+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=chihayafuru", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "kare-kano-his-and-her-circumstances",
    title: "Kare Kano: His and Her Circumstances",
    category: "manga",
    tags: "Comédie · Drame · Romance · Shōjo",
    stars: 4,
    synopsis: "Yukino Miyazawa, première de classe parfaite qui entretient soigneusement cette image pour les compliments, est démasquée par Soichiro Arima, garçon réellement parfait qui voit clair dans son jeu. Contraints à se côtoyer, ils découvrent mutuellement leurs vraies personnalités et tombent amoureux. Une déconstruction affectueuse du shōjo d'excellence scolaire.",
    pros: ["Concept de la fausse perfection vs vraie personnalité brillamment exploité", "Romance qui progresse vraiment et rapidement", "Moments de comédie parmi les plus drôles du shōjo des années 90", "Profondeur psychologique des deux protagonistes inattendue"],
    cons: ["Qualité décline fortement dans la seconde moitié", "L'auteure a perdu le contrôle de la série sur la fin"],
    reviewHtml: `<p>Kare Kano (His and Her Circumstances) est l'un des grands shōjo de romance des années 90, une oeuvre qui a eu une influence majeure sur le genre grâce à son concept de déconstruction de la façade sociale. Masami Tsuda crée deux personnages qui se cachent derrière des personas soigneusement construites, et leur rencontre force chacun à être authentique.</p><p>La première moitié est excellente : la dynamique Yukino/Arima est drôle, romantique et psychologiquement riche. L'adaptation anime de Hideaki Anno (oui, le créateur d'Evangelion) pour les premiers arcs est considérée comme l'une des meilleures du genre.</p><p>La seconde moitié souffre clairement de l'épuisement de l'auteure et d'une perte de direction narrative. La série se disperse dans des arcs secondaires qui oublient les protagonistes principaux. Mais pour ses premières parties au moins, Kare Kano est un shōjo de référence qui mérite d'être connu.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=kare+kano+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=kare+kano+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=kare-kano-his-and-her-circumstances", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "paradise-kiss",
    title: "Paradise Kiss",
    category: "manga",
    tags: "Drame · Fashion · Romance · Seinen",
    stars: 4,
    synopsis: "Yukari Hayasaka, lycéenne studieuse sous pression parentale, est recrutée malgré elle comme mannequin par le groupe ParaKiss, étudiants en stylisme qui préparent leur défilé final. Sa rencontre avec George Koizumi, designer talentueux et séducteur, va transformer sa vie. Ai Yazawa avant Nana, déjà à son sommet.",
    pros: ["Monde de la mode représenté avec authenticité et passion", "George, personnage masculin le plus complexe du shōjo des années 2000", "Fin courageuse qui refuse les résolutions faciles", "Ai Yazawa au sommet de sa maîtrise artistique"],
    cons: ["Seulement 5 volumes, certains personnages auraient mérité plus", "Fin qui peut décevoir ceux qui veulent le happy ending classique"],
    reviewHtml: `<p>Paradise Kiss est l'oeuvre qui a établi Ai Yazawa comme une auteure unique dans le manga shōjo. Publié avant Nana, ce manga en 5 volumes sur le monde de la mode et l'éveil d'une jeune femme à sa propre volonté est d'une maturité et d'une élégance remarquables.</p><p>George Koizumi est l'un des personnages masculins les plus fascinants et les plus ambigus du shōjo : séduisant, talentueux, mais fondamentalement incapable d'amour stable. Sa relation avec Yukari est une exploration honnête de ce que signifie être attirée par quelqu'un qui n'est pas fait pour vous.</p><p>La fin de Paradise Kiss a divisé les lecteurs, mais sa cohérence avec la psychologie des personnages est irréprochable. Yazawa refuse le conte de fées et signe une conclusion adulte qui respecte ses personnages. Pour ceux qui cherchent un manga de mode élégant et émotionnellement honnête, c'est un must.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=paradise+kiss+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=paradise+kiss+manga+yazawa", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=paradise-kiss", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "itazura-na-kiss",
    title: "Itazura na Kiss",
    category: "manga",
    tags: "Comédie · Drame · Romance · Shōjo",
    stars: 3,
    synopsis: "Kotoko Aihara, lycéenne maladroite et pas brillante, aime en secret Naoki Irie depuis le lycée. Après une avalanche de refus humiliants, leurs familles se retrouvent à cohabiter suite à un accident. La proximité forcée va faire évoluer leur relation dans une romance qui s'étend de l'adolescence au mariage et à la parentalité.",
    pros: ["Romance qui couvre toute une vie (lycée, mariage, enfants)", "Moments d'humour et de maladresse de Kotoko très efficaces", "Manga qui a généré de nombreuses adaptations drama cultes en Asie"],
    cons: ["Naoki est souvent désagréable et difficile à apprécier", "Kotoko peut être frustrante dans sa passivité", "Manga inachevé (mort de l'auteure)"],
    reviewHtml: `<p>Itazura na Kiss est un classique fondateur du shōjo qui a influencé des générations de dramas romantiques asiatiques. Kaoru Tada a créé la formule de la fille ordinaire et du garçon parfait et distant qui est devenu l'archétype du genre, popularisé par des adaptations drama successives au Japon, Corée, Taiwan et Chine.</p><p>La particularité d'Itazura na Kiss est sa durée narrative : on suit Kotoko et Naoki du lycée au mariage en passant par les études, le travail et la parentalité. Cette continuité temporelle rare dans le manga shōjo donne à la relation une profondeur que les séries qui s'arrêtent à la confession n'atteignent pas.</p><p>La série reste inachevée suite au décès accidentel de Kaoru Tada en 1999, ce qui lui donne une coloration mélancolique supplémentaire. Les adaptations drama (notamment la version taïwanaise It Started With a Kiss) restent des oeuvres cultes dans toute l'Asie.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=itazura+na+kiss+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=itazura+na+kiss+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=itazura-na-kiss", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "peach-girl",
    title: "Peach Girl",
    category: "manga",
    tags: "Drame · Romance · Shōjo",
    stars: 3,
    synopsis: "Momo Adachi est une lycéenne bronzée et platine jugée négativement par ses camarades. Sa meilleure amie Sae est en réalité une rivale manipulatrice qui lui vole les hommes. Entre Toji dont elle est amoureuse et Kairi qui l'aime sincèrement, Momo navigue dans une mer de dramas et de malentendus.",
    pros: ["Drama romantique intense et efficace pour son public cible", "Sae, antagoniste parmi les plus mémorables du shōjo", "Moments émotionnellement forts malgré les excès"],
    cons: ["Drama soapopera parfois excessif", "Tropes stéréotypés (bronzage = mauvaise réputation) datés"],
    reviewHtml: `<p>Peach Girl est le shōjo drama par excellence des années 2000, une oeuvre qui cumule les rebondissements romanesques avec une générosité sans complexes. Miwa Ueda assume totalement le registre mélodramatique et livre une romance intense qui a passionné des millions de lectrices.</p><p>L'antagoniste Sae est le personnage le plus mémorable de la série : une manipulatrice de haute volée dont les machinations sont à la fois exaspérantes et fascinantes. Elle élève le niveau de drama à des sommets que peu de shōjo osent atteindre, ce qui rend les moments de résolution d'autant plus satisfaisants.</p><p>Vue avec le recul, la prémisse de base (Momo est jugée sur son apparence physique) pointe vers des stéréotypes de l'époque maintenant datés. Mais Peach Girl reste une lecture de pur divertissement émotionnel pour les amateurs de shōjo drama intense, un classique du genre dans ses propres termes.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=peach+girl+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=peach+girl+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=peach-girl", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "tokyo-tarareba-girls",
    title: "Tokyo Tarareba Girls",
    category: "manga",
    tags: "Comédie · Drame · Romance · Josei · Tranche de vie",
    stars: 4,
    synopsis: "Rinko, 33 ans, scénariste de manga, se retrouve coincée dans une vie sentimentale en roue libre avec ses deux amies lors d'une réunion arrosée. Entre rêves romantiques des années 90 et réalité du marché du travail féminin, elles vont naviguer dans le Japon contemporain. Une comédie josei de Akiko Higashimura sur les femmes de 30 ans.",
    pros: ["Portrait féministe des femmes de 30 ans d'une honnêteté jubilatoire", "Higashimura maîtrise l'humour d'autodérision et la profondeur", "Critique de la pression sociale sur les femmes célibataires acerbe et juste", "Personnages secondaires (les amies) très bien caractérisés"],
    cons: ["Key, personnage masculin central, parfois trop brutal dans ses jugements", "Certaines répétitions dans les arcs"],
    reviewHtml: `<p>Tokyo Tarareba Girls est l'oeuvre la plus directement féministe d'Akiko Higashimura (auteure de Princess Jellyfish). La série cible avec une précision chirurgicale les injonctions contradictoires faites aux femmes japonaises de 30 ans : être mariées mais pas désespérées, ambitieuses mais pas trop, modernes mais respectueuses des traditions.</p><p>Rinko et ses amies sont trois protagonistes imparfaites d'une authenticité désarmante : leurs self-sabotages romantiques, leurs rationalisations, leurs faux espoirs sont représentés avec un humour cruel mais toujours affectueux. Higashimura ne juge pas ses personnages, elle les observe avec la tendresse d'une auteure qui a vécu les mêmes contradictions.</p><p>La série a été un phénomène cultural au Japon, résonnant profondément avec toute une génération de femmes qui se retrouvaient dans ces personnages. Traduite et adaptée en drama, elle reste une oeuvre de référence du josei contemporain.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=tokyo+tarareba+girls+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=tokyo+tarareba+girls+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=tokyo-tarareba-girls", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "dengeki-daisy",
    title: "Dengeki Daisy",
    category: "manga",
    tags: "Comédie · Drame · Romance · Shōjo",
    stars: 4,
    synopsis: "Teru Kurebayashi, lycéenne orpheline, reçoit à la mort de son frère un téléphone et le contact de DAISY, un mystérieux protecteur anonyme qui lui répond toujours. Kurosaki, le concierge bougon de son lycée, l'emploie comme esclave pour rembourser une dette. Romance shōjo d'une chaleur et d'un humour constants.",
    pros: ["Dynamique Teru/Kurosaki pleine de tension comique et de chaleur", "Mystère de l'identité de DAISY bien géré", "Humour constant qui équilibre les moments dramatiques", "Romance progressive et satisfaisante"],
    cons: ["Certains arcs de thriller moins convaincants", "Résolution de certains mystères un peu précipitée"],
    reviewHtml: `<p>Dengeki Daisy est le shōjo qui a parfaitement équilibré comédie de character et romance mystérieuse. Kyousuke Motomi crée avec Teru et Kurosaki un duo dont la dynamique esclave/tyran cache progressivement une affection mutuelle sincère et une protection déguisée en maltraitance bienveillante.</p><p>Le mystère de DAISY, le protecteur digital de Teru, est géré avec habileté : on sait assez vite qui c'est, mais l'enjeu se déplace sur pourquoi il cache son identité et comment ils vont naviguer quand la vérité sera révélée. Motomi maîtrise les allers-retours entre comédie légère et drama émotionnel.</p><p>Dengeki Daisy est un shōjo moderne dans la droite lignée des classiques du genre : romance avec décalage de pouvoir qui évolue vers l'égalité, humour de situation efficace et moments d'émotion sincère. Une lecture solide et plaisante pour les amateurs du genre.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=dengeki+daisy+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=dengeki+daisy+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=dengeki-daisy", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "gyo",
    title: "Gyo",
    category: "manga",
    tags: "Horreur · Science-fiction · Seinen",
    stars: 3,
    synopsis: "Tadashi et sa petite amie Kaori sont en vacances à Okinawa quand des poissons morts montés sur des pattes mécaniques commencent à envahir la côte. Ce phénomène inexplicable s'étend progressivement vers le continent japonais. Un manga d'horreur de Junji Ito qui pousse le corps grotesque à ses extrêmes les plus perturbants.",
    pros: ["Concept central d'une originalité perturbante unique à Junji Ito", "Escalade de la grotesquerie gérée avec un sens de l'horreur corporelle expert", "Images inoubliables (pour les bonnes et mauvaises raisons)", "Court et efficace (2 volumes)"],
    cons: ["Moins psychologiquement riche que ses meilleures oeuvres (Uzumaki)", "Explication scientifique satisfaisante absente"],
    reviewHtml: `<p>Gyo est Junji Ito dans son registre de l'horreur corporelle absurde et perturbante poussée à l'extrême. Le concept de base (des poissons morts qui marchent sur des pattes mécaniques envahissant le Japon) est exactement le type d'idée surréaliste que seul Ito a l'audace de mettre en oeuvre sérieusement.</p><p>Ce qui commence comme une horreur de surface devient rapidement quelque chose de plus dérangeant quand les corps humains commencent à interagir avec le phénomène. Ito excelle à trouver l'aspect du corps humain qui, une fois légèrement modifié, devient profondément horrifiant. Gyo exploite cette technique avec une efficacité maximale.</p><p>Moins profond psychologiquement qu'Uzumaki mais plus efficacement dégoûtant dans ses images, Gyo est un bon point d'entrée dans l'oeuvre de Junji Ito pour ceux qui veulent expérimenter son style unique. Court et marquant dans tous les sens du terme.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=gyo+manga+ito&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=gyo+manga+junji+ito", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=gyo", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "tekkonkinkreet-black-white",
    title: "Tekkonkinkreet: Black & White",
    category: "manga",
    tags: "Action · Drame · Fantasy · Seinen",
    stars: 5,
    synopsis: "Black et White, deux orphelins qui vivent dans la rue de la ville de Treasure Town, règnent sur leur territoire avec une violence naïve et joyeuse. Quand des yakuzas et des forces mystérieuses menacent leur ville et leur amitié, leur équilibre fragile est mis à rude épreuve. Un manga de Taiyo Matsumoto d'une originalité visuelle absolue.",
    pros: ["Style graphique de Taiyo Matsumoto complètement unique dans le manga", "Relation Black/White d'une profondeur et d'une émotion rares", "Treasure Town, ville imaginaire parmi les plus riches du manga", "Métaphore sur l'enfance perdue traitée avec une beauté sombre"],
    cons: ["Style graphique très atypique qui peut rebuter", "Narration volontairement cryptique dans certains passages"],
    reviewHtml: `<p>Tekkonkinkreet est l'oeuvre qui a établi Taiyo Matsumoto comme une voix absolument unique dans le manga. Son style graphique, aux antipodes des standards du manga conventionnel, crée une Treasure Town d'une vitalité visuelle extraordinaire où chaque page est une composition artistique à part entière.</p><p>Black et White sont l'un des duos les plus touchants du manga : deux enfants dont les noms résument parfaitement leurs natures complémentaires. Black, la rage et la violence protectrice. White, la douceur et l'innocence. Leur dépendance mutuelle et les menaces qui pèsent sur leur équilibre constituent le coeur émotionnel d'une oeuvre sur la fin de l'enfance et le prix de la survie.</p><p>L'adaptation anime de 2006 par le Studio 4°C (supervisée par Michael Arias) est un chef-d'oeuvre qui amplifie le style visuel du manga. Mais l'original est la source indispensable. Tekkonkinkreet est une oeuvre d'art totale.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=tekkonkinkreet+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=tekkonkinkreet+manga+matsumoto", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=tekkonkinkreet-black-white", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "sunny",
    title: "Sunny",
    category: "manga",
    tags: "Drame · Seinen · Tranche de vie · Enfance",
    stars: 5,
    synopsis: "Dans un foyer pour enfants du Japon des années 70, des enfants aux histoires variées et douloureuses partagent leur quotidien. Une vieille voiture rouillée, la Sunny, devient leur espace de rêverie et d'évasion. Taiyo Matsumoto crée une oeuvre d'une tendresse absolue sur l'enfance blessée et la résilience.",
    pros: ["Un des mangas sur l'enfance les plus profonds et les plus beaux", "Style graphique de Matsumoto d'une chaleur et d'une expressivité parfaites", "Chaque enfant est un portrait complet d'une richesse émotionnelle rare", "Métaphore de la voiture comme espace de rêve parfaite"],
    cons: ["Série en pause depuis 2014", "Format très contemplatif qui demande de se laisser porter"],
    reviewHtml: `<p>Sunny est peut-être l'oeuvre la plus douce et la plus déchirante de Taiyo Matsumoto. Là où Tekkonkinkreet était sombre et violent, Sunny est d'une tendresse absolue pour ses personnages : des enfants abandonnés ou oubliés par leurs familles, qui trouvent dans une vieille voiture rouillée un espace de rêves et de liberté.</p><p>La voiture Sunny elle-même est un personnage : cet espace où les enfants peuvent imaginer être ailleurs, être recueillis par leurs parents, être adultes et libres. Matsumoto représente ces rêveries avec une beauté visuelle émotionnellement dévastatrice dans les passages les plus forts.</p><p>Chaque enfant du foyer est un portrait humain d'une richesse que peu de mangas atteignent : leurs joies simples, leurs blessures profondes, leurs façons différentes de porter l'absence parentale. Sunny est une oeuvre rare qui fait aimer profondément des personnages en quelques pages.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=sunny+manga+matsumoto&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=sunny+manga+matsumoto", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=sunny", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "cats-eye",
    title: "Cat's Eye",
    category: "manga",
    tags: "Action · Comédie · Romance · Seinen",
    stars: 4,
    synopsis: "Les soeurs Kisugi, Rui, Ai et Hitomi, gèrent un café et mènent une double vie comme cambrioleurs sous le nom de Cat's Eye. Elles volent uniquement des oeuvres d'art ayant appartenu à leur père disparu pour le retrouver. Hitomi est fiancée au policier Toshi qui les traque sans les reconnaître. Un manga d'Tsukasa Hojo, père de City Hunter.",
    pros: ["Dynamique du policier qui traque sa fiancée cambrioleur hilarante et efficace", "Trio de soeurs charmant et bien différencié", "Tsukasa Hojo maîtrise déjà son sens du rythme et de l'humour", "Oeuvre fondatrice du manga cambriolage romantique"],
    cons: ["Dessin daté années 80", "Résolution de la quête du père très tardive"],
    reviewHtml: `<p>Cat's Eye est la série qui a lancé la carrière de Tsukasa Hojo avant City Hunter. Publiée dès 1981, elle établit déjà tous ses talents : sens du timing comique, héroïnes aux doubles vies ingénieuses et dynamique romantique basée sur un malentendu prolongé.</p><p>Le concept du policier qui ignore que sa fiancée est la criminelle qu'il traque est exploité avec une inventivité constante. Hojo trouve toujours de nouvelles façons de placer Toshi dans des situations de quasi-découverte qui se résolvent de justesse, maintenant le tension et l'humour sur de nombreux volumes.</p><p>Le trio des soeurs Kisugi est charmant : leurs personnalités distinctes et leurs dynamiques familiales apportent de la chaleur à un manga qui aurait pu être une simple série de cambriolages. Cat's Eye a influencé tout le manga d'action romantique qui a suivi et mérite d'être (re)découvert comme classique du genre.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=cats+eye+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=cats+eye+manga+hojo", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=cats-eye", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "glass-no-kamen",
    title: "Glass Mask",
    category: "manga",
    tags: "Drame · Romance · Shōjo · Théâtre",
    stars: 4,
    synopsis: "Maya Kitajima, fille de servante sans talent évident, révèle des dons exceptionnels pour le jeu d'actrice sous la direction de Chigusa Tsukikage, grande dame du théâtre. Sa rivale et némésis est Ayumi Himekawa, héritière riche et talentueuse. Une course vers le rôle légendaire de la Déesse Pourpre dans un manga shōjo sur la passion artistique.",
    pros: ["Portrait de la passion artistique d'une intensité rarement égalée", "Maya, héroïne shōjo d'une générosité et d'un talent fascinants", "Rivalité artistique Maya/Ayumi parmi les meilleures du genre", "Oeuvre fondatrice du manga sur les arts de la scène"],
    cons: ["Publication depuis 1976, encore inachevée", "Rythme parfois très lent"],
    reviewHtml: `<p>Glass Mask (Glass no Kamen) est l'un des plus longs et des plus influents mangas shōjo de l'histoire. Suzue Miuchi publie depuis 1976 l'histoire de Maya Kitajima et cette longévité est la preuve de la fascination durable qu'exerce cette oeuvre sur le public japonais féminin.</p><p>Maya est une héroïne unique : elle n'est ni belle, ni riche, ni de bonne famille, mais son talent brut et sa dévotion absolue au théâtre la rendent invincible dans son art. Sa façon d'absorber les personnages qu'elle joue, d'y puiser ses propres émotions, est représentée avec une conviction qui rend le théâtre véritablement passionnant.</p><p>La rivalité entre Maya et Ayumi est l'une des grandes dynamiques du shōjo : deux talentueuses que tout oppose, qui se tirent mutuellement vers le haut tout en s'affrontant. La quête du rôle de la Déesse Pourpre structure l'ensemble comme un long voyage artistique. Malgré son inachèvement apparent, Glass Mask reste une oeuvre fondatrice incontournable.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=glass+mask+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=glass+mask+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=glass-no-kamen", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "love-complex",
    title: "Lovely Complex",
    category: "manga",
    tags: "Comédie · Romance · Shōjo",
    stars: 4,
    synopsis: "Risa Koizumi est une lycéenne trop grande pour une fille, Atsushi Otani est un garçon trop petit pour un garçon. Régulièrement comparés à un duo comique, ils se retrouvent à s'entraider dans leurs aventures romantiques respectives avant de réaliser que leurs sentiments ont évolué vers quelque chose de plus sérieux.",
    pros: ["Humour de situation reposant sur les complexes physiques parfaitement exécuté", "Risa, héroïne shōjo d'une énergie et d'un charme irrésistibles", "Progression romantique à la fois drôle et sincère", "Dialecte d'Osaka utilisé avec authenticité et humour"],
    cons: ["Formule romcom classique peu subversive", "Quelques arcs secondaires moins inspirés"],
    reviewHtml: `<p>Lovely Complex est la comédie romantique shōjo qui a connu un succès immense au Japon et à l'international grâce à son héroïne irrésistible et son humour de situation parfaitement exécuté. Aya Nakahara capitalise sur les complexes physiques des deux protagonistes pour créer une comédie d'auto-dérision affectueuse.</p><p>Risa est l'une des meilleures héroïnes du shōjo comique : extravertie, maladroite, sincère, expressive à l'extrême, elle transforme chaque situation gênante en moment inoubliable. Sa dynamique avec l'impassible Otani crée un contraste comique parfait qui s'approfondit progressivement vers une romance sincère.</p><p>L'utilisation du dialecte d'Osaka donne à la série une saveur régionale authentique et contribue à l'humour naturel des échanges. Lovely Complex est une lecture légère et joyeuse, le shōjo parfait quand on cherche du bonheur sans prise de tête.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=lovely+complex+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=lovely+complex+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=love-complex", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "emma",
    title: "Emma",
    category: "manga",
    tags: "Drame · Historique · Romance · Seinen",
    stars: 5,
    synopsis: "Dans l'Angleterre victorienne, William Jones, fils de famille bourgeoise, tombe amoureux d'Emma, servante de son ancienne gouvernante. Leur relation est impossible selon les codes de classe stricts de l'époque. Kaoru Mori livre une romance historique d'une précision et d'une tendresse incomparables, son premier chef-d'oeuvre avant A Bride's Story.",
    pros: ["Reconstitution de l'Angleterre victorienne d'une précision documentaire fascinante", "Emma, héroïne d'une dignité et d'une douceur inoubliables", "Romance inter-classe traitée avec intelligence et réalisme historique", "Kaoru Mori déjà au sommet de son art du dessin historique"],
    cons: ["Rythme lent et contemplatif (assumé)", "7 volumes principaux + extras"],
    reviewHtml: `<p>Emma est le premier chef-d'oeuvre de Kaoru Mori, une romance victorienne d'une beauté et d'une précision historique rares. Avant A Bride's Story et son Asie centrale, Mori s'est d'abord passionnée pour l'Angleterre de la fin du XIXe siècle, et chaque page en témoigne.</p><p>Emma est une héroïne inoubliable : silencieuse, digne, lunettes rondes et tablier blanc, elle incarne une forme d'élégance sobre qui contraste magnifiquement avec les excès décoratifs de son époque. La façon dont elle navigue dans un monde qui ne la voit pas comme un sujet romantique légitime est traitée avec une sensibilité remarquable.</p><p>Mori refuse le happy ending facile pour explorer comment deux personnes de classes différentes pourraient construire quelque chose dans les contraintes de l'ère victorienne. Son travail de recherche sur les costumes, les intérieurs et les usages sociaux de l'époque est encyclopédique. Emma est une oeuvre d'amour pour une époque et un genre.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=emma+manga+mori&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=emma+manga+kaoru+mori", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=emma", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "wolf-girl-and-black-prince",
    title: "Wolf Girl and Black Prince",
    category: "manga",
    tags: "Comédie · Romance · Shōjo",
    stars: 3,
    synopsis: "Erika Shinohara, lycéenne qui ment sur sa vie amoureuse, demande à Kyoya Sata de jouer son petit ami. Il accepte, mais au prix de la traiter comme son chien personnel. Ce qui commence comme un arrangement cynique va évoluer vers une romance sous la pression de la comédie de moeurs.",
    pros: ["Dynamique de chantage romantique qui évolue de façon satisfaisante", "Kyoya, archétype du prince noir bien exécuté", "Humour de situation efficace"],
    cons: ["Prémisse de la relation de domination difficile à défendre", "Erika trop passive pendant trop longtemps", "Kyoya reste problématique même après son évolution"],
    reviewHtml: `<p>Wolf Girl and Black Prince est le manga romance shōjo qui joue sur l'archétype du prince noir sadique avec une conscience plus ou moins grande de ses limites. Ayuko Hatta crée avec Kyoya un personnage charismatique dont la cruauté initiale est clairement présentée comme un problème, et son évolution vers quelqu'un de plus humain comme le vrai arc.</p><p>La dynamique de la relation est inconfortable par design dans ses premiers arcs, et la série fonctionne mieux quand elle commence à remettre en question le comportement de Kyoya plutôt que de le romantiser. Erika, qui gagne progressivement en assertivité, représente une évolution positive.</p><p>Pour les lecteurs familiers du genre des romances shōjo avec tension de pouvoir, c'est une version honnête et souvent amusante du archétype. Les attendes du public cible sont satisfaites avec compétence. Mais l'adaptation anime est peut-être plus accessible que le manga pour une première approche.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=wolf+girl+black+prince+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=wolf+girl+black+prince+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=wolf-girl-and-black-prince", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "high-school-debut",
    title: "High School Debut",
    category: "manga",
    tags: "Comédie · Romance · Shōjo",
    stars: 4,
    synopsis: "Haruna Nagashima, ancienne star du softball collégien, entre au lycée décidée à trouver enfin un petit ami. Mais sans aucune connaissance du monde des garçons, elle demande à Yoh Komiyama, beau gosse de l'école, d'être son coach en séduction. Une comédie romantique classique d'une efficacité constante.",
    pros: ["Haruna parmi les héroïnes shōjo les plus drôles et les plus sympathiques", "Progression romantique rapide et satisfaisante (pas de stagnation)", "Humour sportif et détermination de Haruna constamment efficaces", "Yoh bien écrit dans son évolution"],
    cons: ["Formule romcom classique sans grande originalité", "Certains arcs secondaires peu mémorables"],
    reviewHtml: `<p>High School Debut est la comédie romantique shōjo parfaite pour ceux qui veulent de l'efficacité sans frustration. Kazune Kawahara a créé une héroïne irrésistible en Haruna : son approche sportive et directe de la séduction (\"Je vais m'entraîner à être féminine comme je me suis entraînée au softball\") est d'une drôlerie constante.</p><p>Ce qui distingue High School Debut de nombreux shōjo, c'est la vitesse de progression : la romance se concrétise rapidement, et la série s'intéresse davantage à la relation établie qu'à la course vers la confession. Cette décision narrative rafraîchissante évite l'étirement artificiel qui affecte tant de mangas du genre.</p><p>Yoh est aussi un intérêt romantique mieux écrit que la moyenne : il exprime clairement ses sentiments, communique avec Haruna et évolue de façon crédible. Un shōjo confortable et joyeux, idéal pour une lecture détendue.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=high+school+debut+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=high+school+debut+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=high-school-debut", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "sand-chronicles",
    title: "Sand Chronicles",
    category: "manga",
    tags: "Drame · Romance · Shōjo · Tranche de vie",
    stars: 4,
    synopsis: "Ann Uekusa, 12 ans, déménage de Tokyo à la campagne d'Izumo avec sa mère dépressive. La lenteur de la vie rurale, ses nouvelles amitiés et son premier amour vont l'aider à grandir. Un shōjo de Hinako Ashihara qui suit Ann de l'adolescence à l'âge adulte avec une sensibilité rare.",
    pros: ["Chronologie de l'adolescence à l'âge adulte traitée avec réalisme", "Représentation de la dépression maternelle d'une justesse rare dans le shōjo", "Ann, évolution de personnage très satisfaisante sur plusieurs années", "Atmosphère rurale d'Izumo magnifiquement rendue"],
    cons: ["Certains arcs adultes moins captivants que l'arc lycée", "Sano, intérêt romantique principal, sous-développé par moments"],
    reviewHtml: `<p>Sand Chronicles (Sunadokei) est l'un des shōjo les plus mûrs et les plus honnêtes de sa génération sur la croissance et les blessures de l'adolescence. Hinako Ashihara suit Ann de ses 12 ans à l'âge adulte avec une continuité narrative qui permet d'explorer les répercussions à long terme des traumatismes d'enfance.</p><p>La dépression de la mère d'Ann est représentée avec une justesse et une compassion remarquables pour un shōjo des années 2000 : sans jugement moral, avec une compréhension de ce que vivent les enfants de parents malades mentaux. Cette thématique donne à Sand Chronicles une profondeur émotionnelle qui le distingue de la concurrence.</p><p>La campagne d'Izumo est rendue avec une atmosphère apaisante et mélancolique qui contraste avec les turbulences émotionnelles des personnages. Ashihara sait dessiner la nature comme espace de guérison. Sand Chronicles est une lecture douce-amère, parfaite pour les lecteurs qui apprécient les shōjo avec de la substance.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=sand+chronicles+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=sand+chronicles+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=sand-chronicles", logo: "/logos/manganim.svg" },
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
console.log("\n🎉 Patch batch3-lot8 terminé !");
