import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, "../data/series/series-2.ts");

const PATCHES = [
  {
    slug: "i-am-the-sorcerer-king",
    title: "I Am the Sorcerer King",
    synopsis: "Il y a dix ans, un portail vers un autre monde a ouvert en libérant des monstres sur Terre. Lee SungHoon, jeune homme ordinaire, se fait mordre par un monstre lors d'un raid et se réveille avec les souvenirs de sa vie passée de sorcier le plus puissant du monde magique. Il va reconstruire sa puissance dans ce monde moderne.",
    reviewHtml: "<p><em>I Am the Sorcerer King</em> est un manhwa gate/réincarnation solide qui se distingue par son système de magie bien construit. Le héros, ancien sorcier roi réincarné, dispose d'un arsenal de sorts variés que l'auteur exploite avec créativité dans les combats.</p><p>Le worldbuilding des dimensions alternatives et des monstres est travaillé, avec une lore qui se développe progressivement. Les combats sont visuellement dynamiques et variés.</p><p>Sans réinventer le genre, c'est une exécution propre d'une formule appréciée. Bon divertissement pour les fans de gate manhwa.</p>",
    pros: ["Système de magie bien construit", "Combats variés et dynamiques", "Lore développée progressivement"],
    cons: ["Formule gate/réincarnation classique", "Rythme inégal"],
    stars: 3,
    tags: "Action · Fantasy · Manhwa · Gate · Magie",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=sorcerer+king+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=sorcerer+king+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "god-of-blackfield",
    title: "God of Blackfield",
    synopsis: "Kang Chan, légendaire mercenaire surnommé le Dieu du Champ de Bataille, est tué en Afrique. Il se réveille dans le corps d'un lycéen coréen qui portait le même nom. Avec les instincts et les compétences d'un soldats d'élite dans le corps d'un adolescent, il doit naviguer entre vie lycéenne et réseaux d'espionnage.",
    reviewHtml: "<p><em>God of Blackfield</em> est un manhwa d'action militaire qui se démarque par son héros exceptionnel et son atmosphère de thriller d'espionnage. L'angle mercenaire/espionnage est rare dans le genre manhwa réincarnation et apporte une fraîcheur bienvenue.</p><p>Kang Chan est un protagoniste crédible — sa maîtrise militaire et ses réflexes de combat sont montrés de façon convaincante sans dépasser les limites du réalisme. Les intrigues politiques qui entourent sa réincarnation sont bien construites.</p><p>Dessin propre et efficace, atmosphère sombre bien rendue. Un des meilleurs manhwas du genre action/espionnage.</p>",
    pros: ["Angle militaire/espionnage rare et bien exécuté", "Héros crédible dans ses capacités", "Intrigues politiques bien construites"],
    cons: ["Dense en personnages et factions", "Certains arcs très techniques"],
    stars: 4,
    tags: "Action · Espionnage · Manhwa · Militaire · Réincarnation",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=god+of+blackfield+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=god+of+blackfield+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "the-lone-necromancer",
    title: "The Lone Necromancer",
    synopsis: "Seongwu, chasseur de bas rang, survit à un donjon catastrophique en devenant un nécromancien — une classe maudite qui effraye autant ses alliés que ses ennemis. Seul contre tous, il doit faire ses preuves dans un monde qui craint et rejette les nécromanciens.",
    reviewHtml: "<p><em>The Lone Necromancer</em> exploite un angle original dans le genre gate : le héros possède une classe méprisée et doit s'imposer malgré les préjugés. La nécomancie comme système de combat est bien développée, avec une armée de morts progressivement étoffée.</p><p>La solitude du protagoniste — rejeté autant pour sa classe que pour sa personnalité distante — crée un ton plus sombre que la moyenne. Son évolution vers l'acceptation est gérée avec nuance.</p><p>Dessin de bonne qualité pour les scènes d'armées de non-morts. Un gate manhwa solide avec un angle moins commun.</p>",
    pros: ["Classe maudite — angle moins commun", "Armée de morts bien développée", "Ton plus sombre que la moyenne"],
    cons: ["Héros difficile à aimer au départ", "Formule gate familière"],
    stars: 3,
    tags: "Action · Fantasy · Manhwa · Gate · Nécromancie",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=lone+necromancer+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=lone+necromancer+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "solo-glitch-player",
    title: "Solo Bug Player",
    synopsis: "Jinhyuk, un joueur légendaire de MMORPG connu pour exploiter les bugs du jeu, voit son jeu favori fermer ses serveurs. Quand un jeu réel similaire s'ouvre dans le monde réel, il est le seul à pouvoir utiliser ses techniques de bug-exploitation pour progresser de façon extraordinaire.",
    reviewHtml: "<p><em>Solo Bug Player</em> est un manhwa game isekai qui mise sur un concept original : l'exploitation des failles du système de jeu comme super-pouvoir. Le héros n'est pas le plus fort, mais le plus malin pour trouver et utiliser les bugs.</p><p>Les situations créatives que génère l'exploitation des bugs donnent lieu à des combats et des progressions inhabituels. L'humour est bien présent, avec des situations absurdes découlant naturellement du concept.</p><p>Divertissement léger et créatif pour les fans de gaming manhwa qui cherchent quelque chose de différent de Solo Leveling.</p>",
    pros: ["Concept de bug-exploitation original", "Situations créatives et humoristiques", "Progression non conventionnelle"],
    cons: ["Léger en narration", "Scénario secondaire"],
    stars: 3,
    tags: "Action · Game · Manhwa · Isekai · Comédie",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=solo+bug+player+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=solo+bug+player+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "orange-marmalade",
    title: "Orange Marmalade",
    synopsis: "Les vampires existent et cohabitent avec les humains sous couverture. Baek Ma-Ri est une lycéenne vampire qui tente de passer inaperçue, mais sa rencontre avec Jung Jae-Min, le plus populaire de l'école, complique tout. Une romance lycéenne avec des tensions propres à la cohabitation humains-vampires.",
    reviewHtml: "<p><em>Orange Marmalade</em> est un manhwa romantique supernatural qui traite la métaphore vampirique avec plus de sérieux que la moyenne. La discrimination subie par les vampires est une vraie critique sociale sur les minorités et l'intégration.</p><p>La romance entre Ma-Ri et Jae-Min est bien développée, avec une tension entre attirance et préjugés sociauxbien gérée. Le manhwa évite de tomber dans les clichés du romance vampire en gardant ses personnages humains.</p><p>Un arc historique au milieu de la série apporte une dimension épique inattendue. Une lecture romantique agréable avec plus de substance que la moyenne.</p>",
    pros: ["Métaphore vampirique utilisée comme critique sociale", "Romance bien développée avec vraie tension", "Arc historique surprenant"],
    cons: ["Certains clichés lycée/romance", "Arc historique peut déstabiliser"],
    stars: 4,
    tags: "Romance · Vampires · Lycée · Manhwa · Supernatural",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=orange+marmalade+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=orange+marmalade+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "cheese-in-the-trap-season-1",
    title: "Cheese in the Trap",
    synopsis: "Hong Seol, étudiante sérieuse, est obsédée par le mystère de Yoo Jung, son aîné en fac à l'apparence parfaite. Personne ne comprend pourquoi il s'intéresse à elle. À mesure qu'ils se rapprochent, elle découvre que sa personnalité cache quelque chose de plus complexe et potentiellement dangereuse.",
    reviewHtml: "<p><em>Cheese in the Trap</em> est un webtoon psychologique romantique de référence. Soonkki réussit à créer une romance dont le love interest principal est genuinement ambigu — Yoo Jung est-il un manipulateur sociopathe ou simplement quelqu'un d'incompris ?</p><p>Cette ambiguïté est maintenue tout au long de la série avec une finesse remarquable. Hong Seol est une héroïne très réaliste, avec ses propres failles et contradictions. La dynamique de leur relation est l'une des plus complexes du manhwa romantique.</p><p>Un manhwa de référence pour quiconque cherche de la profondeur psychologique dans ses romances. L'adaptation drama a controversé les fans pour ses choix narratifs.</p>",
    pros: ["Love interest psychologiquement ambigu", "Héroïne réaliste et complexe", "Tension et ambiguïté maintenues"],
    cons: ["Fin débattue parmi les fans", "Rythme lent dans certains arcs"],
    stars: 5,
    tags: "Romance · Psychologique · Université · Manhwa",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=cheese+trap+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=cheese+in+trap+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "a-good-day-to-be-a-dog",
    title: "A Good Day to Be a Dog",
    synopsis: "Han Hana se transforme en chien à chaque fois qu'elle embrasse quelqu'un, et la seule façon de rompre la malédiction est d'être embrassée par la même personne. Elle embrasse accidentellement Seo Woong, son collègue qui déteste les chiens. Une romcom fantastique légère pleine de malentendus.",
    reviewHtml: "<p><em>A Good Day to Be a Dog</em> est une romcom manhwa légère et charmante dont le concept de malédiction est bien utilisé pour générer des situations comiques. Le gag de la transformation en chien est décliné avec inventivité sans s'essouffler trop vite.</p><p>La dynamique entre Hana et Seo Woong est construite sur les malentendus et une attraction progressive naturelle. Les personnages secondaires apportent une bonne dose d'humour supplémentaire.</p><p>Une lecture feel-good parfaite pour les moments de détente, sans prétention narrative mais exécutée avec soin.</p>",
    pros: ["Concept de malédiction bien exploité", "Romcom légère et charmante", "Humour de situation efficace"],
    cons: ["Scénario simple par conception", "Résolution prévisible"],
    stars: 3,
    tags: "Romance · Comédie · Fantastique · Manhwa",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=good+day+be+dog+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=good+day+be+dog+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "please-dont-eat-me",
    title: "Please Don't Eat Me",
    synopsis: "Hanuel, une jeune femme ordinaire, se retrouve dans un monde fantastique medieval et est capturée par un puissant démon nommé Crow qui la garde prisonnière. Mais au lieu de la manger, il la garde et une relation inattendue commence à se développer.",
    reviewHtml: "<p><em>Please Don't Eat Me</em> est une romance fantasy avec une esthétique dark bien rendue. La dynamique captive/ravisseur est un trope classique du genre qui est ici traité avec une tension romantique plutôt qu'une résolution facile.</p><p>Crow est un amour intérêt au charisme indéniable, dont les motivations sont progressivement révélées. Le worldbuilding du monde fantastique est suffisant pour donner du contexte sans trop alourdir la romance.</p><p>Lecture recommandée pour les amateurs de romance sombre et de dynamic power-imbalance bien exécutée.</p>",
    pros: ["Esthétique dark bien rendue", "Tension romantique maintenue", "Love interest charismatique"],
    cons: ["Score bas, série moins connue", "Certains tropes problématiques assumés"],
    stars: 3,
    tags: "Romance · Fantasy · Manhwa · Dark",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=please+dont+eat+me+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=please+dont+eat+me+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "marriage-of-convenience",
    title: "Marriage of Convenience",
    synopsis: "Bianca de Blanchefort, une noble ruinée, accepte d'épouser le duc Zachary Dion, réputé pour se débarrasser de ses épouses. Elle n'y survivra peut-être pas, mais au moins elle mourra en riche. Ce mariage arrangé se transforme progressivement en quelque chose d'inattendu.",
    reviewHtml: "<p><em>Marriage of Convenience</em> est une romance manhwa médiévale fantastique qui déconstruit les attentes du mariage arrangé. Bianca est une héroïne cynique et pragmatique, dont la résignation initiale à une mort probable crée un ton inattendu et rafraîchissant.</p><p>La dynamique de méfiance mutuelle qui évolue en respect puis en amour est bien gérée. Zachary est un love interest crédible dont les actions parlent plus que les mots.</p><p>Le dessin est élégant, l'atmosphère médiévale bien rendue. Un manhwa de romance solide pour les amateurs du genre.</p>",
    pros: ["Héroïne cynique et pragmatique, rafraîchissante", "Évolution de la méfiance vers l'amour bien dosée", "Ton inattendu et original"],
    cons: ["Certain arcs lents", "Antagonistes prévisibles"],
    stars: 4,
    tags: "Romance · Fantasy · Manhwa · Médiéval · Mariage",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=marriage+convenience+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=marriage+convenience+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "forget-my-husband-ill-go-make-money",
    title: "Forget My Husband, I'll Go Make Money",
    synopsis: "Aristia est une princesse qui a passé toute sa vie à se sacrifier pour son fiancé, le prince héritier, qui lui préfère sa demi-soeur. En échange de son aide diplomatique, elle épouse Tarkan, un prince barbare des steppes. Plutôt que de souffrir, elle décide de se consacrer au commerce et de s'affranchir.",
    reviewHtml: "<p><em>Forget My Husband, I'll Go Make Money</em> est un manhwa romance fantastique qui rafraîchit le genre en plaçant l'ambition économique au centre. L'héroïne ne cherche pas à conquérir son mari — elle veut juste devenir riche et indépendante.</p><p>Cette motivation pragmatique donne un ton comique et dynamique à la série. Tarkan, le mari barbare qui tombe amoureux, est un love interest attachant dont les tentatives maladroites d'attirer l'attention de sa femme sont charmantes.</p><p>Le dessin est de bonne qualité, le ton léger bien maintenu. Un manhwa feel-good pour les amateurs de romances à contre-courant.</p>",
    pros: ["Héroïne motivée par l'argent — angle original", "Mari barbare attachant et maladroit", "Ton léger et feel-good"],
    cons: ["Peu de tension dramatique", "Certains arcs économiques complexes"],
    stars: 4,
    tags: "Romance · Fantasy · Comédie · Manhwa · Commerce",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=forget+husband+make+money+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=forget+husband+make+money+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "beware-the-villainess",
    title: "Beware the Villainess!",
    synopsis: "Une jeune femme moderne se réincarne en Melissa, la vilaine d'un roman d'otome. Mais plutôt que de réformer sa vie amoureuse comme dans la plupart des histoires de ce genre, elle décide de prendre soin d'elle-même et de traiter les intérêts amoureux du roman pour ce qu'ils sont vraiment : des drapeaux rouges évidents.",
    reviewHtml: "<p><em>Beware the Villainess!</em> est une déconstruction satirique brillante des manhwas isekai/otome romantiques. L'héroïne identifie et commente avec une lucidité comique tous les red flags que les héroïnes de romance acceptent habituellement comme normal.</p><p>L'humour meta est utilisé avec intelligence — ce n'est pas seulement une parodie, c'est une critique affectueuse du genre qui montre pourquoi ces tropes sont problématiques. Les love interests du roman original sont ridiculisés mais avec nuance.</p><p>Dessin élégant, timing comique impeccable. Un must-read pour quiconque est familier avec les manhwas romantiques isekai.</p>",
    pros: ["Satire brillante et intelligente du genre", "Héroïne lucide et hilarante", "Déconstruction affectueuse des tropes"],
    cons: ["Mieux apprécié si on connaît les codes du genre", "Humour peut sembler trop méta"],
    stars: 5,
    tags: "Romance · Comédie · Manhwa · Isekai · Satire",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=beware+villainess+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=beware+villainess+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "miss-not-so-sidekick",
    title: "Miss Not-So Sidekick",
    synopsis: "Latte Ectrie se réincarne dans son roman otome préféré en tant que personnage secondaire sans importance. Plutôt que de s'impliquer dans l'histoire romantique principale, elle préfère observer en coulisses avec son ami et commenter les situations — transformant son statut de figurante en privilège de spectatrice.",
    reviewHtml: "<p><em>Miss Not-So Sidekick</em> est un manhwa isekai/otome qui mise sur la comédie de spectateur. L'héroïne, personnage secondaire par choix, observe les événements du roman avec le détachement et l'humour d'une lectrice consciente de la fiction.</p><p>Ce parti pris est exploité avec créativité : Latte commente les événements comme une lectrice tout en étant dedans, créant un effet meta délicieux. Les interactions avec les personnages principaux (dont elle connaît les vraies motivations) sont savoureuses.</p><p>Dessin léger et expressif, rythme dynamique. Un manhwa de comédie isekai très réussi pour les fans du genre.</p>",
    pros: ["Concept de spectateur dans son propre roman très original", "Humour meta bien exécuté", "Rythme dynamique et léger"],
    cons: ["Peu d'enjeux pour l'héroïne elle-même", "Fin moins satisfaisante"],
    stars: 4,
    tags: "Comédie · Romance · Manhwa · Isekai · Meta",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=miss+not+sidekick+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=miss+not+sidekick+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "something-about-us",
    title: "Something About Us",
    synopsis: "Eunji et Woojin sont meilleurs amis depuis longtemps. Eunji a des sentiments pour lui depuis des années mais n'ose pas les exprimer. Quand leur cercle d'amis commence à se disperser après le lycée, la fenêtre de leur possible romance se rétrécit. Une romance contemporaine réaliste sur l'amitié amoureuse.",
    reviewHtml: "<p><em>Something About Us</em> est un manhwa romcom contemporain qui se distingue par son réalisme et sa sensibilité. L'auteure Dalseonbi capture avec précision la dynamique de l'amour qui naît dans une amitié profonde et les peurs qui empêchent de franchir le pas.</p><p>Eunji et Woojin sont des personnages très réalistes — leurs hésitations, leurs maladresses et leurs non-dits sonnent juste. Le cadre lycéen/post-lycée est rendu avec fidélité et nostalgie.</p><p>Sans fantastique ni rebondissements dramatiques, cette série mise tout sur l'émotion et la justesse des relations. Pour les amateurs de slice-of-life romantique authentique.</p>",
    pros: ["Réalisme et justesse émotionnelle", "Dynamique amitié-amour bien rendue", "Nostalgie du lycée bien capturée"],
    cons: ["Pas d'événements spectaculaires — slice of life pur", "Rythme très lent"],
    stars: 4,
    tags: "Romance · Slice of life · Lycée · Manhwa · Contemporain",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=something+about+us+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=something+about+us+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "the-perks-of-being-an-s-class-heroine",
    title: "The Perks of Being an S-Class Heroine",
    synopsis: "Ailette Rodchester se réincarne dans un roman fantasy avec le pouvoir unique d'obtenir des dons de n'importe qui. Résolue à utiliser ce pouvoir pour collecter les cadeaux des personnages les plus puissants, elle accumule accidentellement les bénédictions des être les plus redoutables du monde tout en cherchant simplement à vivre tranquille.",
    reviewHtml: "<p><em>The Perks of Being an S-Class Heroine</em> est une romcom isekai légère dont le pouvoir de l'héroïne est brillamment comique : collecter des dons génère des situations où elle reçoit accidentellement les grâces d'êtres dont elle voulait juste un cadeau anodin.</p><p>L'humour découle naturellement du concept, avec une héroïne dont les plans modestes sont constamment dépassés par leurs conséquences. Les personnages puissants qui s'attachent à elle sont amusants dans leur diversité.</p><p>Lecture légère et feel-good, parfaite pour les fans d'isekai romantique comique.</p>",
    pros: ["Pouvoir comique bien exploité", "Situations absurdes délicieuses", "Héroïne sympathique et drôle"],
    cons: ["Léger en narration sérieuse", "Formule répétitive"],
    stars: 3,
    tags: "Romance · Comédie · Manhwa · Isekai · Fantasy",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=perks+s-class+heroine+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=perks+s+class+heroine+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "a-stepmothers-marchen",
    title: "A Stepmother's Märchen",
    synopsis: "La duchesse Shuri se retrouve à élever seule les enfants de son défunt mari, qui la détestaient autrefois. Réincarnée et connaissant le destin de ces enfants dans le roman d'origine, elle décide de les protéger et de les aimer sincèrement — en bonne marâtre qui casse les stéréotypes du conte de fées.",
    reviewHtml: "<p><em>A Stepmother's Märchen</em> est l'un des manhwas de fantasy romantique les plus émouvants disponibles. Il subvertit le trope de la marâtre cruelle en proposant une femme qui choisit d'aimer des enfants qui ne sont pas les siens avec une tendresse et un dévouement absolus.</p><p>Les relations entre Shuri et chacun des enfants sont développées individuellement, avec des moments d'une douceur rare. L'auteure traite les blessures émotionnelles des enfants avec une sensibilité remarquable.</p><p>Le dessin est beau, l'atmosphère de conte de fées bien rendue. Une lecture émotionnelle et feel-good qui sort des sentiers battus du genre. Fortement recommandé.</p>",
    pros: ["Subversion émouvante du trope marâtre", "Relations mère/enfants développées avec soin", "Tendresse et sensibilité remarquables"],
    cons: ["Romance adulte en retrait sur les premières parties", "Certains arcs complexes"],
    stars: 5,
    tags: "Romance · Fantasy · Manhwa · Famille · Émotion",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=stepmother+marchen+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=stepmother+marchen+manhwa", logo: "/logos/amazon.svg" }]
  },
];

function patchEntry(content, slug, buildReplacement) {
  const marker = `slug: "${slug}"`;
  const idx = content.indexOf(marker);
  if (idx === -1) return null;
  let i = idx;
  while (i > 0 && content[i] !== "{") i--;
  const entryStart = i;
  let depth = 0;
  for (i = entryStart; i < content.length; i++) {
    if (content[i] === "{") depth++;
    if (content[i] === "}") { depth--; if (depth === 0) break; }
  }
  const entryEnd = i + 1;
  const existingEntry = content.slice(entryStart, entryEnd);
  const coverMatch = existingEntry.match(/cover:\s*"([^"]+)"/);
  const cover = coverMatch ? coverMatch[1] : "";
  return content.slice(0, entryStart) + buildReplacement(cover) + content.slice(entryEnd);
}

let content = readFileSync(FILE, "utf-8");
let patched = 0;
for (const p of PATCHES) {
  const result = patchEntry(content, p.slug, (cover) => {
    const shopsJson = p.shops.map(s =>
      `  {\n    "name": "${s.name}",\n    "url": "${s.url}",\n    "logo": "${s.logo}"\n  }`
    ).join(",\n");
    return `{
  slug: "${p.slug}",
  title: "${p.title.replace(/"/g, '\\"')}",
  synopsis: "${p.synopsis.replace(/"/g, '\\"')}",
  reviewHtml: "${p.reviewHtml.replace(/"/g, '\\"')}",
  pros: [${p.pros.map(x => `"${x.replace(/"/g, '\\"')}"`).join(", ")}],
  cons: [${p.cons.map(x => `"${x.replace(/"/g, '\\"')}"`).join(", ")}],
  stars: ${p.stars},
  category: "${p.category}",
  tags: "${p.tags}",
  cover: "${cover}",
  addedAt: "2026-03-22",
  shops: [\n${shopsJson}\n  ],
  streaming: []
}`;
  });
  if (!result) { console.log(`⚠️  Non trouvé : ${p.slug}`); continue; }
  content = result;
  patched++;
  console.log(`✅ ${p.title}`);
}
writeFileSync(FILE, content, "utf-8");
console.log(`\n🎉 ${patched}/${PATCHES.length} patchés.`);
