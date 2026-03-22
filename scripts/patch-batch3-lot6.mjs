/**
 * patch-batch3-lot6.mjs — 11 séries classiques/seinen/shōjo
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const SERIES_FILE = join(__dirname, "../data/series/series-2.ts");

const patches = [
  {
    slug: "fist-of-the-north-star",
    title: "Fist of the North Star",
    category: "manga",
    tags: "Action · Aventure · Post-apocalyptique · Arts martiaux · Seinen",
    stars: 4,
    synopsis: "Dans un monde post-apocalyptique ravagé par la guerre nucléaire, Kenshiro maîtrise le Hokuto Shinken, un art martial légendaire qui détruit le corps de l'adversaire de l'intérieur en pressant ses points vitaux. Il parcourt les terres dévastées pour retrouver sa fiancée Yuria, kidnappée par son rival Shin, tout en protégeant les faibles des oppresseurs.",
    pros: ["Oeuvre fondatrice du manga d'action post-apo", "Kenshiro, icône absolue de la culture manga mondiale", "Violence stylisée d'une efficacité cathartique", "Mythologie martiale inventive et cohérente"],
    cons: ["Structure répétitive (village opprimé → Kenshiro arrive → ennemis explosent)", "Très ancré dans les codes des années 80"],
    reviewHtml: `<p>Fist of the North Star (Hokuto no Ken) est l'une des oeuvres les plus influentes de l'histoire du manga, un monument de la culture populaire japonaise des années 80 dont la résonance n'a jamais faibli. Buronson et Tetsuo Hara ont créé un univers post-apocalyptique d'une brutalité stylistique parfaite.</p><p>Kenshiro est l'archétype du héros stoïque japonais : peu bavard, d'une puissance absolue, mû par un code d'honneur indéfectible. Son catchphrase \"Tu es déjà mort\" est devenue l'une des répliques les plus parodiées de la culture pop mondiale, preuve de l'impact culturel de l'oeuvre.</p><p>Le manga n'est pas subtil et n'a jamais prétendu l'être : c'est de l'action pure, des adversaires qui explosent de l'intérieur, des larmes d'hommes durs qui pleurent rarement mais sincèrement. Dans ce registre, c'est une oeuvre parfaite. Un classique absolu à connaître pour comprendre l'histoire du manga shōnen.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=fist+of+the+north+star+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=fist+of+the+north+star+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=fist-of-the-north-star", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "city-hunter",
    title: "City Hunter",
    category: "manga",
    tags: "Action · Comédie · Drame · Romance · Seinen",
    stars: 4,
    synopsis: "Ryo Saeba est le City Hunter, détective et pistolero légendaire de Shinjuku capable de résoudre tous les problèmes. Accompagné de sa partenaire Kaori, il prend les cas impossibles : protection de VIPs, traque d'assassins. Mais sa principale caractéristique est son obsession permanente pour les femmes, qui le rend paradoxalement très attachant.",
    pros: ["Équilibre comédie/action/drame maîtrisé de façon unique", "Ryo/Kaori, duo des plus inoubliables du manga", "Émotion sincère sous la comédie de moeurs", "Tsukasa Hojo, dessin expressif et dynamique"],
    cons: ["Humour grivois très marqué années 80 qui a vieilli", "Structure épisodique peu propice à un fil narratif fort"],
    reviewHtml: `<p>City Hunter est un manga culte qui a marqué des générations de lecteurs grâce à un équilibre unique entre comédie potache, action efficace et moments d'émotion sincère. Tsukasa Hojo a créé avec Ryo Saeba un personnage immédiatement reconnaissable : le génie de l'action transformé en bouffon devant les femmes.</p><p>Mais ce qui fait la profondeur de City Hunter, c'est la relation Ryo/Kaori. Sous la comédie des coups de marteau et des tentatives repoussées se cache une affection profonde et sincère, et les moments où Ryo dépose son masque de pervers pour montrer qui il est vraiment sont d'une beauté saisissante.</p><p>City Hunter a inspiré des adaptations innombrables, y compris le film français de 2024 avec Alain-Fabien Delon, preuve de sa longévité culturelle. Un monument du manga d'action-comédie japonais des années 80 qui reste plaisir à lire aujourd'hui.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=city+hunter+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=city+hunter+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=city-hunter", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "maison-ikkoku",
    title: "Maison Ikkoku",
    category: "manga",
    tags: "Comédie · Drame · Romance · Seinen · Tranche de vie",
    stars: 5,
    synopsis: "Yusaku Godai, étudiant raté vivant dans la pension délabrée Maison Ikkoku, tombe amoureux de Kyoko Otonashi, la nouvelle gérante veuve et encore dévastée par la mort de son jeune mari. Une romance de Rumiko Takahashi qui se développe sur des années, entre malentendus, rivaux et la difficulté de tourner la page sur un amour perdu.",
    pros: ["Meilleure romance adulte de Rumiko Takahashi", "Kyoko, personnage féminin d'une profondeur et nuance rares", "Émotions traitées avec patience et réalisme", "Fin parfaitement exécutée"],
    cons: ["Rythme très lent par nature (tranche de vie sur des années)", "Godai peut être frustrant dans sa passivité"],
    reviewHtml: `<p>Maison Ikkoku est considéré par beaucoup comme la meilleure romance de Rumiko Takahashi, et probablement l'une des plus belles du manga tout court. Contrairement à ses oeuvres comiques plus célèbres (Urusei Yatsura, Ranma), elle s'applique ici à une romance adulte traitée avec patience et réalisme.</p><p>Kyoko Otonashi est l'une des héroïnes les plus complexes du manga seinen : une veuve qui aime encore son mari défunt, qui ne peut pas avancer, et dont le voyage vers la guérison et la capacité d'aimer à nouveau est traité avec une nuance psychologique remarquable. Sa relation avec Godai, décevant mais sincère, évolue sur des années avec une crédibilité rare.</p><p>La pension Ikkoku et ses locataires exubérants apportent la légèreté nécessaire pour équilibrer la mélancolie centrale. La fin est l'une des plus satisfaisantes du manga romantique. Une lecture essentielle pour tout amateur de romance manga qui veut sortir des lycées et des shōjos.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=maison+ikkoku+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=maison+ikkoku+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=maison-ikkoku", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "konosuba-gods-blessing-on-this-wonderful-world",
    title: "KonoSuba: God's Blessing on This Wonderful World!",
    category: "manga",
    tags: "Aventure · Comédie · Fantasy · Isekai · Shōnen",
    stars: 4,
    synopsis: "Kazuma Satou meurt d'une mort ridicule et se retrouve propulsé dans un monde de fantasy médiévale avec la déesse Aqua (inutile), la magicienne Megumin (ne maîtrise qu'une explosion par jour) et la croisée Darkness (masochiste). Une parodie d'isekai qui ridiculise tous les clichés du genre avec un humour absurde constant.",
    pros: ["Parodie d'isekai la plus efficace et la plus affectueuse du genre", "Groupe de personnages dysfonctionnels parmi les plus drôles du manga", "Humour absurde qui ne faiblit jamais", "Kazuma, anti-héros parfaitement calibré"],
    cons: ["Peu de profondeur narrative, c'est assumé", "Répétitif si lu en grande quantité"],
    reviewHtml: `<p>KonoSuba est la parodie d'isekai par excellence, une série qui aime profondément le genre qu'elle raille. Natsume Akatsuki (auteur du roman original) et l'adaptateur manga ont créé une comédie de groupe d'une efficacité constante, où chaque personnage est une version dysfonctionnelle d'un archétype d'isekai.</p><p>Aqua la déesse inutile et arrogante, Megumin l'obsédée de l'explosion unique, Darkness la masochiste qui prend tous les coups avec délectation : ce trio improbable autour du protagoniste cynique Kazuma est une machine à gags d'une précision de métronome.</p><p>KonoSuba n'a pas de grandes ambitions narratives, et c'est sa force : chaque arc est une occasion de nouvelles situations absurdes, de malentendus hilarants et de catastrophes auto-provoquées. Pour les amateurs d'isekai qui veulent rire de ce qu'ils aiment, c'est la lecture idéale.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=konosuba+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=konosuba+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=konosuba-gods-blessing-on-this-wonderful-world", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "march-comes-in-like-a-lion",
    title: "March Comes in Like a Lion",
    category: "manga",
    tags: "Drame · Psychologie · Sport · Tranche de vie · Seinen",
    stars: 5,
    synopsis: "Rei Kiriyama, adolescent shogi professionnel solitaire et dépressif, vit seul à Tokyo après avoir perdu sa famille. Sa rencontre avec les trois soeurs Kawamoto, leur chaleur et leur quotidien, va progressivement lui apprendre ce que signifie avoir un foyer et des personnes qui tiennent à vous. Un manga sur la guérison, le deuil et la connexion humaine.",
    pros: ["Représentation de la dépression et de l'isolement la plus juste du manga", "Le shogi comme métaphore de la vie, brillamment utilisé", "Chica Umino, écriture et dessin d'une sensibilité unique", "Évolution de Rei parmi les plus émouvantes du manga"],
    cons: ["Rythme très contemplatif qui ne convient pas à tous", "Les arcs shogi peuvent être techniques"],
    reviewHtml: `<p>March Comes in Like a Lion (3-gatsu no Lion) est l'une des oeuvres les plus touchantes et les plus importantes du manga contemporain sur la santé mentale. Chica Umino (auteure de Honey and Clover) a créé quelque chose de rare : un manga sur la dépression qui n'est ni misérabiliste ni simpliste.</p><p>Rei Kiriyama est un personnage d'une justesse psychologique bouleversante. Son isolement, sa difficulté à accepter l'affection, ses autosabotages et sa progression lente mais réelle vers un mieux-être sont représentés avec une précision clinique empreinte de compassion. On ne le plaint pas : on le comprend.</p><p>Le shogi, sport cérébral d'une complexité extrême, est utilisé comme métaphore de la vie : les coups joués, les sacrifices nécessaires, les parties perdues qui enseignent. L'adaptation anime de Shaft est magnifique, mais le manga original, avec son style graphique tendre et expressif unique, est la version définitive. Un chef-d'oeuvre.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=march+comes+in+like+a+lion+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=march+comes+in+like+a+lion+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=march-comes-in-like-a-lion", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "princess-jellyfish",
    title: "Princess Jellyfish",
    category: "manga",
    tags: "Comédie · Drame · Romance · Seinen · Tranche de vie",
    stars: 4,
    synopsis: "Tsukimi Kurashita, illustratrice otaku obsédée par les méduses, vit dans une maison partagée avec d'autres femmes NEET à Tokyo. Sa rencontre avec Kuranosuke, fils de politicien qui se travestit en secret, bouleverse leur monde cloîtré. Une comédie sur l'identité, la féminité et le courage de vivre selon ses propres règles.",
    pros: ["Portrait de la culture otaku féminine affectueux et lucide", "Kuranosuke, personnage de crossdresser traité avec nuance", "Humour et émotion parfaitement dosés", "Critique de la politique de genre et des attentes sociales pertinente"],
    cons: ["Fin de la sérialisation assez abrupte", "Résolution romantique laissée incomplète"],
    reviewHtml: `<p>Princess Jellyfish (Kuragehime) est une comédie seinen d'une originalité remarquable qui explore la culture otaku féminine avec une affection et une acuité rarement vues. Akiko Higashimura crée un portrait collectif d'une maison de femmes inadaptées sociales d'une tendresse non condescendante.</p><p>Kuranosuke est un personnage fascinant : fils de grande famille politique qui se travestit pour exprimer une partie de lui-même que sa vie officielle ne peut accueillir. Sa relation avec Tsukimi, qui se cache derrière son intérêt pour les méduses, explore la question de qui on est vraiment versus qui la société veut qu'on soit.</p><p>La série balance habilement comédie absurde (les réactions des otakus face à un beau garçon) et commentaire social sérieux (la gentrification, la politique, les attendes genrées). Une lecture originale et chaleureuse qui mérite d'être mieux connue en dehors du Japon.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=princess+jellyfish+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=princess+jellyfish+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=princess-jellyfish", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "liar-game",
    title: "LIAR GAME",
    category: "manga",
    tags: "Drame · Psychologie · Thriller · Seinen",
    stars: 4,
    synopsis: "Nao Kanzaki, jeune femme d'une naïveté désarmante, reçoit 100 millions de yens et une invitation au Liar Game Tournament où les participants doivent se voler mutuellement leur argent. Elle recrute l'arnaqueur Shinichi Akiyama pour l'aider à naviguer dans ces jeux de manipulation et de trahison où la psychologie est l'arme principale.",
    pros: ["Jeux de manipulation psychologique d'une ingéniosité constante", "Chaque arc introduit un nouveau format de jeu brillamment conçu", "Dynamique Nao/Akiyama complémentaire et efficace", "Réflexion sur la confiance et la coopération dans un monde de tromperie"],
    cons: ["Nao peut être irritante dans sa naïveté excessive", "Fin jugée incomplète par beaucoup de lecteurs"],
    reviewHtml: `<p>Liar Game est le manga de jeu psychologique par excellence, un thriller où chaque arc est un nouveau format de compétition conçu pour pousser les participants à leurs limites en termes de manipulation et de stratégie. Shinobu Kaitani a créé des règles de jeu d'une inventivité remarquable, chacune explorant différents aspects de la psychologie humaine face à la trahison.</p><p>La dynamique Nao/Akiyama est le moteur émotionnel de la série : la naïveté absolue de Nao (qui croit sincèrement que la coopération bat la trahison) et le cynisme calculateur d'Akiyama créent une tension constante sur ce qu'est la bonne stratégie face à des adversaires sans scrupules.</p><p>Liar Game a inspiré des adaptations drama japonaises et coréennes populaires, et mérite son statut de référence du genre thriller-jeu. La fin est un peu précipitée, mais les 200 chapitres qui la précèdent sont parmi les plus inventifs du manga psychologique.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=liar+game+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=liar+game+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=liar-game", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "magic-knight-rayearth",
    title: "Magic Knight Rayearth",
    category: "manga",
    tags: "Action · Aventure · Fantasy · Mecha · Shōjo",
    stars: 4,
    synopsis: "Hikaru, Umi et Fuu, trois lycéennes sans lien entre elles, sont transportées dans le monde magique de Cephiro lors d'une visite à Tokyo Tower. Elles y deviennent les Chevalières Magiques, destinées à invoquer des Mashin géants et sauver la Princesse Émeraude. Le groupe CLAMP livre une aventure shōjo-mecha aux twists narratifs audacieux.",
    pros: ["CLAMP au sommet de leur période dorée", "Twist de fin de première partie parmi les plus marquants du shōjo", "Fusion shōjo et mecha inédite à l'époque", "Art magnifique et designs de Mashin iconiques"],
    cons: ["Deuxième partie moins forte que la première", "Personnages plus développés dans l'anime"],
    reviewHtml: `<p>Magic Knight Rayearth est l'une des oeuvres majeures de CLAMP, le collectif de mangakas qui a dominé le shōjo des années 90. Combinant l'aventure fantasy, les mecha géants et les codes du shōjo, elles ont créé quelque chose de véritablement unique pour l'époque.</p><p>La première partie est remarquable pour son twist de fin : ce que les héroïnes croyaient être leur mission se révèle être quelque chose de moralement bien plus complexe, remettant en question toute la logique du récit de façon dévastatrice. Ce genre de subversion narrative était rare dans le shōjo des années 90.</p><p>L'art de CLAMP est à son sommet : les designs des personnages et des Mashin mêlent l'élégance du shōjo et la puissance du mecha de façon unique. Une oeuvre qui a marqué toute une génération de lectrices et reste un classique incontournable du shōjo d'action.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=magic+knight+rayearth+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=magic+knight+rayearth+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=magic-knight-rayearth", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "ikigami-the-ultimate-limit",
    title: "Ikigami: The Ultimate Limit",
    category: "manga",
    tags: "Drame · Science-fiction · Thriller · Seinen",
    stars: 4,
    synopsis: "Dans un Japon dystopique, l'État injecte une nano-capsule mortelle à tous les enfants en bas âge. Entre 18 et 24 ans, certains reçoivent un \"ikigami\", un avis de mort dans les 24 heures, pour rappeler à la population la valeur de la vie. Le fonctionnaire Fujimoto livre ces avis et observe comment chaque condamné passe ses dernières heures.",
    pros: ["Concept dystopique d'une pertinence philosophique forte", "Format anthologique permettant une grande variété d'histoires", "Chaque arc explore une réaction différente face à la mort imminente", "Critique du nationalisme et de l'État autoritaire incisive"],
    cons: ["Qualité variable selon les arcs", "Résolution un peu rapide"],
    reviewHtml: `<p>Ikigami est un manga de science-fiction dystopique qui utilise son concept central (l'État qui tue aléatoirement des jeunes adultes pour valoriser la vie) pour explorer avec une profondeur remarquable la façon dont les humains font face à leur propre mort imminente.</p><p>Le format anthologique fonctionne parfaitement : chaque arc suit un condamné différent avec ses propres liens, ses propres regrets et sa propre façon de passer ses 24 dernières heures. Un règle son conflit avec sa famille, un autre réalise un rêve longtemps remis à plus tard, un troisième se retourne contre ceux qui l'ont opprimé. La variété des réponses humaines est fascinante.</p><p>La critique de l'État autoritaire est constante et incisive, mais jamais didactique. Ikigami fait réfléchir sur ce qu'on ferait des 24 heures précédant notre mort, et indirectement sur ce qu'on fait de notre vie entière. Un manga mature et intelligent trop peu connu en France.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=ikigami+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=ikigami+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=ikigami-the-ultimate-limit", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "neon-genesis-evangelion",
    title: "Neon Genesis Evangelion",
    category: "manga",
    tags: "Action · Drame · Mecha · Psychologie · Science-fiction",
    stars: 4,
    synopsis: "Dans un Tokyo-3 post-catastrophe, Shinji Ikari est recruté par son père pour piloter un EVA, un robot colossal, contre les Anges qui menacent l'humanité. Derrière l'action mecha se cache une exploration profonde de la dépression, de l'abandon, des relations humaines dysfonctionnelles et de la question de ce qui justifie de continuer à vivre.",
    pros: ["Adaptation manga d'une oeuvre culturelle majeure", "Thèmes psychologiques explorés avec sincérité", "Yoshiyuki Sadamoto signe un art expressif et maîtrisé", "Plus accessible que l'anime original pour certains lecteurs"],
    cons: ["L'anime original de Anno reste la version définitive", "Le manga condense et simplifie certains aspects", "Publication très étalée (18 ans pour 14 volumes)"],
    reviewHtml: `<p>Neon Genesis Evangelion en manga est l'adaptation par Yoshiyuki Sadamoto (character designer de l'anime) de l'une des oeuvres les plus importantes de l'animation japonaise. Publiée en parallèle de l'anime de Hideaki Anno, cette version offre une perspective légèrement différente sur l'histoire de Shinji Ikari.</p><p>Le manga est souvent plus accessible que l'anime pour les nouveaux lecteurs : plus linéaire, moins abstrait dans sa seconde moitié, il raconte l'histoire de Nerv et des pilotes EVA avec plus de clarté narrative. Certains personnages, notamment Kaworu, y sont traités différemment pour le mieux.</p><p>Pour les fans d'Evangelion, c'est un complément fascinant à l'anime. Pour les non-initiés, c'est une porte d'entrée possible dans cet univers complexe. Sadamoto, dont les designs de personnages sont iconiques, signe un art expressif qui capture parfaitement l'angoisse et la fragilité des protagonistes.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=evangelion+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=neon+genesis+evangelion+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=neon-genesis-evangelion", logo: "/logos/manganim.svg" },
    ],
    streaming: [],
  },
  {
    slug: "thermae-romae",
    title: "Thermae Romae",
    category: "manga",
    tags: "Comédie · Historique · Seinen · Tranche de vie",
    stars: 4,
    synopsis: "Lucius, architecte de bains romains à l'époque de l'Antiquité, est régulièrement téléporté dans le Japon contemporain à travers des conduits de bains publics. Il y découvre les techniques balnéaires japonaises modernes et les rapporte à Rome pour les adapter. Une comédie historique absurde d'une originalité totale, récompensée par le Prix Manga Taisho.",
    pros: ["Concept absurde et unique exécuté avec une sérieux comique parfait", "Vraie érudition sur les thermes romains et les bains japonais", "Humour de décalage culturel fonctionnant sans jamais s'épuiser", "Format court (6 volumes) parfaitement rythmé"],
    cons: ["Concept répétitif par nature", "Peu de développement de personnages (assumé)"],
    reviewHtml: `<p>Thermae Romae est le manga le plus inventif et le plus original de son époque. Mari Yamazaki a eu l'idée géniale de faire se télescoper la culture des thermes romains antiques et des sentō (bains publics) japonais contemporains via un architecte romain aussi sérieux que naïf.</p><p>Lucius est le straight man parfait : un Romain rigoureux qui découvre les innovations japonaises des bains (jets, sièges chauffants, distributeurs automatiques) et les transpose à l'Antiquité avec un pragmatisme total. Le gag se renouvelle constamment grâce à la variété des technologies balnéaires japonaises et à la créativité de Yamazaki pour les contextualiser dans Rome.</p><p>La série est aussi une vraie leçon d'histoire : Yamazaki maîtrise son sujet, et les détails sur les thermes romains, leur rôle social et leurs techniques de construction sont fascinants. Primé au Prix Manga Taisho, adapté en film live action avec Hiroshi Abe, Thermae Romae est une oeuvre unique qui mérite d'être connue.</p>`,
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=thermae+romae+manga&sft=1", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=thermae+romae+manga", logo: "/logos/amazon.svg" },
      { name: "Manganim", url: "https://manganim.com/search?q=thermae-romae", logo: "/logos/manganim.svg" },
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
console.log("\n🎉 Patch batch3-lot6 terminé !");
