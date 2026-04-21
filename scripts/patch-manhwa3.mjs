import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, "../data/series/series-2.ts");

const PATCHES = [
  {
    slug: "level-up-with-the-gods",
    title: "Leveling with the Gods",
    synopsis: "Kim YuWon, un ranker légendaire, revient dans le passé après la destruction de la Tour. Armé de sa mémoire du futur et d'un système de progression unique, il remonte les étages de la Tour afin d'empêcher la catastrophe à venir, forgeant des alliances avec des êtres mythologiques comme Hercule et Odin.",
    reviewHtml: "<p><em>Leveling with the Gods</em> se distingue dans le genre murim/tower par son utilisation inventive de la mythologie mondiale — les personnages puissants de la Tour sont des dieux et héros de différentes mythologies. Cette couche mythologique donne du relief à ce qui pourrait être un regression manhwa standard.</p><p>Le système de progression est bien pensé, et Kim YuWon est un héros compétent et stratège plutôt que bourrin. Les alliances avec des figures mythologiques sont bien intégrées à la narration.</p><p>Bonne qualité de dessin, rythme soutenu. Un des meilleurs manhwas du genre tower/regression disponibles.</p>",
    pros: ["Mythologie mondiale bien intégrée", "Héros stratège et compétent", "Rythme soutenu et addictif"],
    cons: ["Dense en personnages mythologiques", "Certaines alliances non développées"],
    stars: 4,
    tags: "Action · Fantasy · Manhwa · Tower · Mythologie",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=leveling+gods+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=leveling+gods+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "the-gamer",
    title: "The Gamer",
    synopsis: "Han Jee-Han découvre qu'il perçoit le monde réel comme un jeu vidéo : des statistiques flottent au-dessus de tout, il peut gagner des niveaux et des compétences. Il doit naviguer dans ce monde transformé en RPG tout en découvrant que des guildes de pouvoirs spéciaux se cachent dans la réalité.",
    reviewHtml: "<p><em>The Gamer</em> est l'un des manhwas pionniers du genre 'game mechanics in real world'. L'idée de percevoir le monde comme un RPG avec stats et niveaux y est déclinée avec humour et inventivité.</p><p>Le système de progression est cohérent et créatif — les compétences acquises par Han Jee-Han sont variées et les façons de monter en niveau souvent originales. La découverte progressive du monde souterrain des pouvoirs est bien rythmée.</p><p>Le dessin est correct sans être exceptionnel. Une série fondatrice du genre, agréable malgré quelques arcs inégaux.</p>",
    pros: ["Pionnier du genre game mechanics", "Système de progression créatif", "Découverte du monde souterrain bien rythmée"],
    cons: ["Dessin inégal", "Certains arcs s'étirent"],
    stars: 3,
    tags: "Action · Fantasy · Manhwa · Game · RPG",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=the+gamer+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=the+gamer+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "hwasanjeonsaeng",
    title: "Volcanic Age",
    synopsis: "Joo Seo-Cheon, un vieux maître d'arts martiaux sur son lit de mort, se réveille dans son corps de jeune apprenti. Avec 60 ans d'expérience de combat et de connaissance du monde murim, il va cette fois éviter les erreurs du passé et atteindre le sommet des arts martiaux.",
    reviewHtml: "<p><em>Volcanic Age</em> est un manhwa de regression murim solide et bien exécuté. La prémisse du vieux maître qui revient dans son jeune corps est familière dans le genre, mais l'auteur l'exploite avec efficacité.</p><p>Joo Seo-Cheon est un protagoniste appréciable : sa sagesse acquise contraste avec sa jeunesse retrouvée, et ses décisions stratégiques témoignent de son expérience. Les arts martiaux sont bien représentés.</p><p>Bon divertissement pour les amateurs du genre murim/regression, avec un rythme soutenu et des combats satisfaisants.</p>",
    pros: ["Héros expérimenté et stratège", "Rythme soutenu", "Arts martiaux bien représentés"],
    cons: ["Formule classique du genre", "Manque de surprises narratives"],
    stars: 3,
    tags: "Action · Arts martiaux · Manhwa · Murim · Regression",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=volcanic+age+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=volcanic+age+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "the-legendary-spearman-returns",
    title: "Return of the Legendary Spear Knight",
    synopsis: "Joshua Sanders, reconnu comme le meilleur lancier du monde, est trahi et tué. Il se retrouve projeté dans le passé, dans son corps d'enfant. Il va cette fois utiliser sa maîtrise de la lance et sa connaissance du futur pour bâtir sa propre puissance plutôt que de servir les nobles qui l'ont trahi.",
    reviewHtml: "<p><em>Return of the Legendary Spear Knight</em> est un manhwa de revenge/regression centré sur un protagoniste dont la spécialité — la lance — est inhabituellement rare dans le genre. Cette distinction donne une identité à la série dans un marché encombré.</p><p>La progression de Joshua est satisfaisante, ses combats à la lance bien chorégraphiés. La politique de la noblesse et les motivations de ses anciens traîtres sont développées suffisamment pour donner de la substance au revenge plot.</p><p>Solide dans son genre, recommandé pour les fans de manhwa regression/revenge qui cherchent quelque chose de légèrement différent.</p>",
    pros: ["Protagoniste à la lance — originalité dans le genre", "Revenge plot satisfaisant", "Combats bien chorégraphiés"],
    cons: ["Formule classique regression/revenge", "Certains personnages secondaires peu développés"],
    stars: 3,
    tags: "Action · Fantasy · Manhwa · Regression · Revenge",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=legendary+spear+knight+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=legendary+spear+knight+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "the-max-level-hero-strikes-back",
    title: "The Max Level Hero Has Returned",
    synopsis: "Davey, prince d'un petit royaume méprisé, tombe dans un coma profond après une tentative d'assassinat. Son âme est projetée dans un monde de héros légendaires où il passe 1000 ans à apprendre auprès des plus grands. Il se réveille level max et commence sa vengeance contre ceux qui l'ont sous-estimé.",
    reviewHtml: "<p><em>The Max Level Hero Has Returned</em> est un manhwa power fantasy très bien exécuté. L'arc de formation de 1000 ans chez des héros légendaires donne une légitimité inhabituelle au niveau de puissance du protagoniste.</p><p>Le contraste entre le prince méprisé et ses capacités secrètes est exploité avec humour et satisfaction. Les réactions des antagonistes qui continuent à le sous-estimer pendant qu'il les défait sont une source de plaisir constant.</p><p>Dessin dynamique, rythme addictif. Un des power fantasy manhwas les plus plaisants du genre.</p>",
    pros: ["Formation légendaire de 1000 ans crédibilise le pouvoir", "Humour et satisfaction du 'surprise power reveal'", "Rythme addictif"],
    cons: ["Power fantasy assumé, peu de tension", "Antagonistes prévisibles"],
    stars: 4,
    tags: "Action · Fantasy · Manhwa · Royauté · Power Fantasy",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=max+level+hero+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=max+level+hero+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "limit-breaker",
    title: "Limit Breaker",
    synopsis: "Kim Kibong est un chasseur de donjons qui a passé 99 ans à combattre dans un donjon d'élite sans pouvoir en sortir. Quand il en sort enfin, le monde a changé mais ses niveaux ont atteint des sommets impossibles. Il doit réapprendre à vivre dans un monde moderne tout en étant l'être le plus puissant.",
    reviewHtml: "<p><em>Limit Breaker</em> a une prémisse originale dans le genre gate/hunter : 99 ans de combat en boucle créent un protagoniste techniquement vieux mais physiquement jeune, avec un niveau hors normes. La réadaptation au monde moderne est traitée avec un humour touchant.</p><p>Les combats sont impressionnants, le système de puissance bien établi. Le manhwa traite aussi des traumatismes de l'isolement prolongé avec une sensibilité appréciable.</p><p>Un manhwa d'action solide avec un angle émotionnel plus développé que la moyenne du genre.</p>",
    pros: ["Prémisse originale (99 ans de donjon)", "Angle émotionnel sur la réadaptation", "Combats impressionnants"],
    cons: ["Certains arcs de réadaptation étirés", "Formule gate/hunter familière"],
    stars: 4,
    tags: "Action · Fantasy · Manhwa · Gate · Regression",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=limit+breaker+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=limit+breaker+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "after-ten-millennia-in-hell",
    title: "Player Who Returned 10000 Years Later",
    synopsis: "Ko Woojin est un chasseur de rang D qui se retrouve enfermé dans une dimension infernale pendant 10 000 ans. Il en revient avec un niveau de puissance incompréhensible et les souvenirs de millénaires de survie. Sa réintégration dans un monde de chasseurs qui l'avaient abandonné est l'occasion d'une vengeance froide et méthodique.",
    reviewHtml: "<p><em>Player Who Returned 10000 Years Later</em> pousse à l'extrême la logique du time skip : 10 000 ans d'enfer donne un protagoniste qui n'a plus grand-chose d'humain, mais dont la quête de vengeance reste lisible. La puissance absolue est bien dosée pour rester intéressante.</p><p>Le manhwa exploite bien le contraste entre Ko Woojin et les chasseurs actuels qui ont profité de son absence. La froide efficacité du héros dans ses vengeances est satisfaisante et crédible.</p><p>Dessin de qualité, rythme efficace. Un power fantasy parmi les plus extrêmes du genre, bien exécuté.</p>",
    pros: ["Time skip extrême (10 000 ans) bien exploité", "Vengeance froide et satisfaisante", "Puissance absolue bien dosée"],
    cons: ["Peu de tension dramatique", "Héros trop puissant crée de la distance"],
    stars: 3,
    tags: "Action · Fantasy · Manhwa · Power Fantasy · Revenge",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=player+returned+10000+years+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=player+returned+10000+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "doom-breaker",
    title: "Reincarnation of the Suicidal Battle God",
    synopsis: "Zephyr, le dernier héros humain, échoue à vaincre le Seigneur des Démons après une lutte de dix ans. Avant de mourir, il est envoyé dix ans dans le passé par un dieu mystérieux. Avec la connaissance de tous ses futurs échecs, il doit reconstruire une nouvelle stratégie pour changer l'issue de la guerre.",
    reviewHtml: "<p><em>Doom Breaker</em> (Reincarnation of the Suicidal Battle God) est un manhwa de regression/second chance de haute qualité. Sa particularité est que le héros revient non pas comme un adolescent, mais en pleine capacité, ce qui change la dynamique du genre.</p><p>Zephyr est un protagoniste fascinant — marqué par des années de guerre solitaire, méthodique et calculateur. La refonte de sa stratégie en sachant ce qui n'a pas fonctionné est satisfaisante et bien détaillée.</p><p>Le dessin des combats est parmi les meilleurs du genre, avec une énergie et une dynamique rares. Un manhwa de référence pour les amateurs de second chance/regression.</p>",
    pros: ["Héros revenu mature et stratège", "Dynamique de second chance originale", "Dessin des combats exceptionnel"],
    cons: ["Dense, nécessite de suivre la chronologie", "Certains arcs complexes"],
    stars: 5,
    tags: "Action · Fantasy · Manhwa · Regression · Combat",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=doom+breaker+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=doom+breaker+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "the-skeleton-soldier-failed-to-defend-the-dungeon",
    title: "The Skeleton Soldier Failed to Defend the Dungeon",
    synopsis: "Un squelette sans nom, invoqué pour défendre une nécromancienne, échoue à la protéger. À sa mort, il découvre qu'il peut revivre depuis un point de sauvegarde antérieur. À chaque cycle, il conserve ses souvenirs et devient progressivement plus fort, déterminé à changer l'issue tragique.",
    reviewHtml: "<p><em>The Skeleton Soldier Failed to Defend the Dungeon</em> est l'un des manhwas les plus originaux et émotionnellement riches du genre loop/regression. Le protagoniste — un squelette sans statut social, sans nom, dont la seule raison d'être est de protéger sa maîtresse — est d'une poignance inattendue.</p><p>Les boucles temporelles sont utilisées intelligemment : chaque cycle apporte de nouvelles informations sur le monde et les personnages, révélant progressivement la profondeur de l'histoire. Les thèmes de persévérance et d'attachement sont traités avec sincérité.</p><p>Un manhwa qui dépasse largement les attentes du genre, à lire absolument pour les amateurs de récits émotionnels et d'action.</p>",
    pros: ["Protagoniste inattendu et touchant", "Boucles temporelles exploitées intelligemment", "Profondeur émotionnelle rare dans le genre"],
    cons: ["Début humble qui peut décourager", "Dessin modeste au départ"],
    stars: 5,
    tags: "Action · Fantasy · Manhwa · Loop · Émotion",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=skeleton+soldier+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=skeleton+soldier+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "descent-of-the-demon-master",
    title: "Descent of the Demonic Master",
    synopsis: "Jinho Kang meurt dans un accident de voiture. Il se retrouve réincarné dans un monde de cultivation en tant que disciple démoniaque, y vit et y meurt. Puis il se réincarne de nouveau dans son monde moderne d'origine, avec les souvenirs et les pouvoirs de sa vie de cultivateur. Il doit vivre normalement tout en gérant des capacités surhumaines.",
    reviewHtml: "<p><em>Descent of the Demonic Master</em> est un manhwa qui propose une double réincarnation originale : un monde moderne, puis un monde de cultivation, puis retour au monde moderne. Cette structure donne au héros une double perspective rare.</p><p>La vie normale de Jinho — famille, école, quotidien coréen — contraste avec ses capacités surhumaines et son expérience de cultivateur démoniaque. Cette dualité est bien exploitée, avec un humour qui découle naturellement des situations.</p><p>Les combats sont dynamiques et bien illustrés. Une lecture plaisante pour les fans de cultivation et d'isekai inversé.</p>",
    pros: ["Double réincarnation originale", "Contraste vie normale/pouvoirs bien exploité", "Humour naturel des situations"],
    cons: ["Formule familière malgré la prémisse originale", "Certains arcs prévisibles"],
    stars: 4,
    tags: "Action · Cultivation · Manhwa · Réincarnation · Moderne",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=descent+demonic+master+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=descent+demonic+master+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "heavenly-demon-reborn",
    title: "Heavenly Demon Reborn!",
    synopsis: "Le Démon Céleste, le plus grand guerrier démoniaque du monde murim, est tué par traîtrise. Réincarné dans le corps d'un orphelin, il reconstruit progressivement sa puissance depuis zéro, avec pour objectif de retrouver ceux qui l'ont trahi et d'atteindre de nouveau le sommet.",
    reviewHtml: "<p><em>Heavenly Demon Reborn!</em> est un manhwa murim/reincarnation bien construit qui se distingue par la personnalité de son protagoniste. Le Démon Céleste n'est pas un héros conventionnel — ses méthodes sont dures, sa morale flexible, et cette nuance est maintenue tout au long de la série.</p><p>Le worldbuilding du murim est riche, avec des sectes, des clans et des factions bien développés. La progression du héros est satisfaisante sans être trop rapide.</p><p>Dessin de bonne qualité, combats lisibles et dynamiques. Un des meilleurs manhwas murim du genre reincarnation.</p>",
    pros: ["Protagoniste ambigu — ni héros classique ni villain", "Worldbuilding murim riche", "Progression bien rythmée"],
    cons: ["Très long (progression lente)", "Formule reincarnation murim familière"],
    stars: 4,
    tags: "Action · Arts martiaux · Manhwa · Murim · Réincarnation",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=heavenly+demon+reborn+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=heavenly+demon+reborn+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "log-in-murim",
    title: "Murim Login",
    synopsis: "Jin Taekyung est un chasseur de rang F qui passe son temps dans un jeu VRMMORPG sur le monde du murim. Quand il perd son équipement dans le jeu, il y reste pour le récupérer — et réalise que ses actions dans le jeu affectent le monde réel. Les adversaires du jeu commencent à apparaître dans la réalité.",
    reviewHtml: "<p><em>Murim Login</em> est une fusion habile de deux genres populaires : le manhwa de chasseurs de donjons et le manhwa murim. La mécanique de jeu qui influence le monde réel est bien exploitée et crée des situations inédites dans les deux genres.</p><p>Jin Taekyung est un héros sympathique — un loser qui compense par une maîtrise du jeu. Sa progression parallèle dans le monde virtuel et réel est bien rythmée et satisfaisante.</p><p>Dessin dynamique, combats variés. L'un des manhwas qui réussit le mieux la fusion murim/game.</p>",
    pros: ["Fusion murim/game bien exécutée", "Mécanique jeu/réalité originale", "Héros underdog attachant"],
    cons: ["Peut sembler décousu au départ", "Certains aspects du jeu peu expliqués"],
    stars: 4,
    tags: "Action · Fantasy · Manhwa · Murim · Game",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=murim+login+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=murim+login+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "hwasangwonma",
    title: "Fist Demon of Mount Hua",
    synopsis: "Chung Myung, le plus grand épéiste du Mont Hua, meurt après avoir scellé le Seigneur des Démons au prix de sa vie. Réincarné 100 ans plus tard dans le corps d'un jeune disciple négligé du même sect, il retrouve un clan Hua dégénéré et décide de le restaurer à sa gloire passée.",
    reviewHtml: "<p><em>Fist Demon of Mount Hua</em> est un manhwa murim/reincarnation populaire dont la force est son héros : Chung Myung est sarcastique, hilarant et infiniment compétent. Son mépris affiché pour les disciples actuels de son ancien sect, combiné à sa démonstration constante de leur infériorité, génère un humour de situation récurrent et jouissif.</p><p>La restauration progressive du sect de Mont Hua est un arc narratif bien construit, où chaque personnage secondaire est développé avec soin.</p><p>Dessin efficace et expressif. Un des manhwas murim les plus plaisants grâce à son ton.</p>",
    pros: ["Héros sarcastique et hilarant", "Restauration du sect bien construite", "Humour de situation constant"],
    cons: ["Très long, format webtoon très étiré", "Certains arcs répétitifs"],
    stars: 4,
    tags: "Action · Arts martiaux · Manhwa · Murim · Comédie",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=fist+demon+mount+hua+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=mount+hua+fist+demon+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "the-world-after-the-fall",
    title: "The World After the Fall",
    synopsis: "Dans un monde envahi de tours et de monstres, les survivants ont découvert qu'ils pouvaient revenir dans le passé. Tout le monde fuit sauf Jaehwan, qui choisit de rester et de continuer à combattre — convaincu que fuir ne fait qu'empirer les choses. Son obstination ouvre une nouvelle voie dans un monde en ruine.",
    reviewHtml: "<p><em>The World After the Fall</em> est l'un des manhwas les plus intellectuellement ambitieux du genre gate/tower. Le concept de base — tout le monde fuit dans le passé sauf le héros — est une métaphore forte sur la fuite face à l'adversité.</p><p>Le récit prend une ampleur épique et philosophique inattendue, explorant des thèmes de responsabilité, de sacrifice et de ce que signifie vraiment sauver un monde. Le worldbuilding est riche et original.</p><p>Dessin de haute qualité. Un manhwa pour les lecteurs qui veulent plus que du power fantasy — une réflexion sur l'héroïsme.</p>",
    pros: ["Ambition narrative et philosophique rare", "Worldbuilding original et riche", "Thèmes de responsabilité bien traités"],
    cons: ["Dense, nécessite attention", "Rythme lent pour les impatients"],
    stars: 5,
    tags: "Action · Fantasy · Manhwa · Post-apocalyptique · Philosophique",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=world+after+fall+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=world+after+fall+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "tomb-raider-king",
    title: "Tomb Raider King",
    synopsis: "Des reliques divines commencent à apparaître dans des tombes à travers le monde, conférant des pouvoirs surnaturels à ceux qui les trouvent. Johra est tué par son patron après avoir localisé une relique majeure. Il revient dix ans en arrière avec la connaissance de l'emplacement de toutes les reliques et la volonté de les monopoliser.",
    reviewHtml: "<p><em>Tomb Raider King</em> est un manhwa d'action/adventure qui combine l'exploration archéologique et les pouvoirs surnaturels avec un protagoniste pragmatique et calculateur. La course aux reliques crée un terrain narratif bien exploité.</p><p>Johra est un héros moralement ambigu — il monopolise les reliques non pour sauver le monde mais pour sa propre puissance. Cette honnêteté sur les motivations du personnage est rafraîchissante.</p><p>Dessin dynamique avec de belles scènes d'exploration. Un manhwa solide pour les amateurs d'aventure et de power fantasy.</p>",
    pros: ["Thème d'exploration archéologique original", "Héros pragmatique et moralement ambigu", "Course aux reliques bien rythmée"],
    cons: ["Héros peu sympathique par conception", "Certains arcs très action-oriented"],
    stars: 3,
    tags: "Action · Aventure · Manhwa · Reliques · Regression",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=tomb+raider+king+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=tomb+raider+king+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "hero-killer",
    title: "Hero Killer",
    synopsis: "Dans un monde de super-héros, Ban Hajin est un gamin ordinaire dont l'admiration pour les héros se transforme en obsession puis en haine quand il découvre la corruption qui se cache derrière le système héroïque. Armé d'un pouvoir qui annule les capacités des autres, il décide d'exposer et d'éliminer les faux héros.",
    reviewHtml: "<p><em>Hero Killer</em> est un manhwa déconstruction du genre super-héros avec une noirceur assumée. La critique du système héroïque comme industrie corrompue est menée sans compromis.</p><p>Ban Hajin est un protagoniste difficile — sa haine est compréhensible mais ses méthodes sont extrêmes. Cette ambiguïté morale est le coeur de la série et la rend plus intéressante qu'un simple récit de vengeance.</p><p>Dessin efficace, atmosphère sombre bien maintenue. Pour les lecteurs qui apprécient les déconstructions du genre super-héros dans la veine de Killing Stalking ou The Boys.</p>",
    pros: ["Déconstruction du genre super-héros efficace", "Ambiguïté morale du protagoniste intéressante", "Critique sociale bien intégrée"],
    cons: ["Très sombre, pas pour tous", "Peut être épuisant émotionnellement"],
    stars: 4,
    tags: "Action · Super-héros · Manhwa · Déconstruction · Dark",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=hero+killer+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=hero+killer+manhwa", logo: "/logos/amazon.svg" }]
  },
  {
    slug: "the-lazy-lord-masters-the-sword",
    title: "Reformation of the Deadbeat Noble",
    synopsis: "Irene Pareira est un noble paresseux qui ne fait rien depuis des années, traumatisé par un passé difficile. Un jour, il observe un vieux vagabond manier l'épée avec une grâce incomparable pendant trois ans. Cette observation silencieuse l'entraîne sur la voie de l'épée de façon inattendue.",
    reviewHtml: "<p><em>Reformation of the Deadbeat Noble</em> est un manhwa d'arts martiaux fantastique qui surprend par son rythme délibérément lent et contemplatif. L'apprentissage d'Irene n'est pas dû à des pouvoirs surnaturels mais à une observation patiente — une approche rare dans le genre.</p><p>Le protagoniste est un anti-héros atypique : sa paresse est présentée non comme un défaut comique mais comme une protection psychologique contre un passé traumatique. Sa transformation est progressive et crédible.</p><p>Le dessin des scènes de combat est excellent, avec une élégance qui reflète la philosophie martiale de la série. Un manhwa pour les lecteurs qui apprécient la narration patient.</p>",
    pros: ["Apprentissage par observation — approche rare", "Protagoniste complexe et crédible", "Combat élégant et bien illustré"],
    cons: ["Rythme lent, pas pour les impatients", "Premier arc très contemplatif"],
    stars: 4,
    tags: "Action · Fantasy · Manhwa · Épée · Redemption",
    category: "manhwa",
    shops: [{ name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=reformation+deadbeat+noble+manhwa", logo: "/logos/fnac.svg" }, { name: "Amazon", url: "https://www.amazon.fr/s?k=reformation+deadbeat+noble+manhwa", logo: "/logos/amazon.svg" }]
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
