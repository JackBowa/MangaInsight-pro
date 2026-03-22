import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, "../data/series/series-2.ts");

const PATCHES = [
  {
    slug: "the-remarried-empress",
    title: "The Remarried Empress",
    synopsis: "Navier Ellie Trovi est l'impératrice parfaite : intelligente, gracieuse, admirée. Mais quand son mari l'empereur ramène une concubine ignorante des règles de la cour et commence à négliger Navier, celle-ci choisit une issue inattendue : plutôt que de souffrir en silence, elle demande le divorce et accepte la proposition d'un autre roi.",
    reviewHtml: "<p><em>The Remarried Empress</em> est l'un des manhwas de fantasy romantique les plus populaires, et il mérite pleinement ce statut. Sa force est son héroïne : Navier n'est pas une victime, elle est compétente, digne et prend ses propres décisions avec une clarté remarquable.</p><p>La dynamique de cour impériale est bien rendue, avec une politique et des intrigues crédibles. Le nouvel amour avec le roi Heinrey est développé avec soin, chaque personnage étant traité avec respect.</p><p>Le dessin est élégant, les costumes détaillés, et l'atmosphère de fantaisie royale bien établie. Un manhwa de référence du genre isekai/reincarnation romance.</p>",
    pros: ["Héroïne forte et digne, pas victime", "Politique de cour bien construite", "Romance avec Heinrey bien développée"],
    cons: ["Rythme lent pour les impatients", "Certains personnages secondaires manichéens"],
    stars: 4,
    tags: "Romance · Fantasy · Manhwa · Royauté",
    category: "manhwa",
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=remarried+empress+manhwa", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=remarried+empress+manhwa", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "who-made-me-a-princess",
    title: "Who Made Me a Princess",
    synopsis: "Athanasia se réveille en tant que princesse dans le roman qu'elle lisait — un roman où elle finit exécutée par son propre père, l'empereur Claude. Pour survivre, elle doit soit fuir, soit conquérir le coeur du père le plus froid du monde avant que l'histoire ne suive son cours.",
    reviewHtml: "<p><em>Who Made Me a Princess</em> est l'archétype du manhwa de réincarnation dans un roman romantique, et l'un des meilleurs du genre. La prémisse — survivre dans un roman dont on connaît la fin tragique — est parfaitement exploitée.</p><p>La relation entre Athanasia et son père Claude est le coeur de la série. Voir un père glacial apprendre à aimer sa fille est un arc émotionnel traité avec beaucoup de soin et de naturel.</p><p>Le dessin est absolument magnifique, parmi les plus beaux du webtoon romantique. Les expressions des personnages et les palettes de couleurs sont soignées à l'extrême. Un must-read du genre.</p>",
    pros: ["Dessin parmi les plus beaux du webtoon", "Relation père/fille touchante et bien développée", "Prémisse de réincarnation bien exploitée"],
    cons: ["Rythme très lent dans les premiers chapitres", "Triangle amoureux tardif"],
    stars: 5,
    tags: "Romance · Fantasy · Manhwa · Réincarnation",
    category: "manhwa",
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=who+made+me+a+princess+manhwa", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=who+made+me+a+princess+manhwa", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "doctor-elise-the-royal-lady-with-the-lamp",
    title: "Doctor Elise: The Royal Lady with the Lamp",
    synopsis: "Elise de Clorence était une princesse cruelle dans sa première vie. Réincarnée, elle devient chirurgienne de haut niveau. Quand elle se retrouve de nouveau dans son premier corps de princesse, elle utilise ses connaissances médicales modernes dans un monde médiéval et tente de réparer les erreurs de son ancienne vie.",
    reviewHtml: "<p><em>Doctor Elise</em> se distingue dans le genre réincarnation par son angle médical. Voir une chirurgienne moderne utiliser ses compétences dans un monde médiéval fantastique crée des situations ingénieuses et donne une substance narrative rare au genre.</p><p>Elise est une héroïne compétente et active, dont la rédemption — de princesse cruelle à médecin bienveillante — est traitée avec cohérence. Les arcs médicaux sont bien documentés sans être indigestes.</p><p>Le dessin est propre et expressif. Pour les amateurs de manhwas de romance avec un twist professionnel, c'est un excellent choix.</p>",
    pros: ["Angle médical original et bien documenté", "Héroïne compétente et en rédemption", "Scénario plus substantiel que la moyenne"],
    cons: ["Romance parfois en retrait face aux arcs médicaux", "Rythme irrégulier"],
    stars: 4,
    tags: "Romance · Fantasy · Médecine · Manhwa · Réincarnation",
    category: "manhwa",
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=doctor+elise+manhwa", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=doctor+elise+manhwa", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "under-the-oak-tree",
    title: "Under the Oak Tree",
    synopsis: "Maxi, fille d'un puissant duc mais affligée d'un bégaiement qui lui vaut le mépris de son père, épouse le chevalier Riftan Calypse, un homme de basse naissance mais d'immense valeur. Quand il revient trois ans après leur mariage forcé, couvert de gloire, leur relation malentendus et non-dits doit être reconstruite.",
    reviewHtml: "<p><em>Under the Oak Tree</em> est l'un des manhwas romantiques les plus populaires, adapté d'un roman web coréen. Sa particularité est de placer une héroïne avec un handicap (bégaiement) au centre d'une romance médiévale fantastique, ce qui est rare.</p><p>La relation entre Maxi et Riftan est construite sur les malentendus et la communication difficile, mais évolue vers quelque chose de profond et tendre. Riftan est un amour intérêt passionné et protecteur, dont l'affection pour Maxi est palpable.</p><p>Le dessin détaillé des costumes et décors médiévaux est un plus. Pour les lecteurs qui apprécient les romances lentes et émotionnelles, c'est une lecture très satisfaisante.</p>",
    pros: ["Héroïne avec bégaiement, représentation rare", "Romance lente et profonde", "Décors médiévaux bien détaillés"],
    cons: ["Très axé romance, peu d'action", "Héros parfois trop parfait"],
    stars: 4,
    tags: "Romance · Fantasy · Manhwa · Médiéval",
    category: "manhwa",
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=under+oak+tree+manhwa", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=under+oak+tree+manhwa", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "kill-the-villainess",
    title: "Kill the Villainess",
    synopsis: "Une jeune femme coréenne ordinaire se retrouve piégée dans le corps d'Eris Miserian, la vilaine antagoniste d'un roman romantique destinée à mourir. Désespérée de rentrer chez elle, elle cherche un moyen de se suicider pour sortir du roman, mais le monde lui-même semble résister à ses tentatives.",
    reviewHtml: "<p><em>Kill the Villainess</em> est un manhwa de réincarnation qui prend le contre-pied du genre : l'héroïne ne veut pas prospérer dans ce monde, elle veut en partir. Cette prémisse subversive donne un ton plus sombre et mélancolique que la moyenne.</p><p>L'exploration psychologique de l'héroïne, piégée dans un corps qui n'est pas le sien et dans un destin qu'elle refuse, est menée avec une profondeur inhabituelle. Le monde du roman résiste activement à ses tentatives d'en sortir.</p><p>Le dessin est élégant, l'atmosphère gothique bien rendue. Un manhwa pour ceux qui cherchent plus de substance émotionnelle que la moyenne du genre.</p>",
    pros: ["Prémisse subversive du genre vilaine", "Profondeur psychologique inhabituelle", "Atmosphère sombre et élégante"],
    cons: ["Moins accessible que les manhwas romantiques standards", "Fin débattue"],
    stars: 4,
    tags: "Romance · Fantasy · Manhwa · Psychologique",
    category: "manhwa",
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=kill+the+villainess+manhwa", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=kill+the+villainess+manhwa", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "roxana",
    title: "Roxana",
    synopsis: "Roxana Agrece, réincarnée dans le corps de la vilaine d'un roman, est la fille d'un duc cruel qui assassine ses propres enfants pour tester leur valeur. Pour survivre, elle doit conserver la faveur de son père impitoyable tout en protégeant discrètement le héros du roman, Sylvester, dont elle connaît le destin.",
    reviewHtml: "<p><em>Roxana</em> (The Way to Protect the Female Lead's Older Brother) est un manhwa de réincarnation aux enjeux plus sombres que la moyenne. La position de l'héroïne est précaire dès le départ : dans une famille qui tue ses propres membres, chaque décision est une question de survie.</p><p>La relation entre Roxana et Sylvester est construite sur la protection réciproque et une confiance gagnée progressivement. Le père Agrece est l'un des antagonistes les plus menaçants du genre.</p><p>Le dessin est de bonne qualité, avec une palette sombre adaptée au ton. Un manhwa solide pour les lecteurs qui apprécient la tension et le danger dans leurs romances fantastiques.</p>",
    pros: ["Enjeux de survie plus sombres que la moyenne", "Père antagoniste menaçant et crédible", "Tension maintenue tout au long"],
    cons: ["Ambiance très sombre, pas pour tous", "Certains arcs complexes"],
    stars: 4,
    tags: "Romance · Fantasy · Manhwa · Dark",
    category: "manhwa",
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=roxana+manhwa", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=roxana+manhwa", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "demon-queen-just-wants-to-make-peace",
    title: "Mage and Demon Queen",
    synopsis: "Malori est une aventurière qui, contrairement à tous ses confrères qui cherchent à tuer la Reine Démon Velverosa, veut la séduire. Armée d'un amour inébranlable et d'une magie médiocre, elle monte jusqu'aux niveaux les plus hauts du donjon de la Reine Démon pour lui déclarer sa flamme, encore et encore.",
    reviewHtml: "<p><em>Mage and Demon Queen</em> d'Other est une comédie romantique fantasy girl-love qui fonctionne sur un gag répété mais irrésistible : Malori, aventurière nulle au combat, revient chaque semaine demander à la Reine Démon de l'épouser. La Reine, qui ne comprend pas, continue de la battre.</p><p>La série est légère, drôle et charmante, avec un humour meta sur les jeux de rôle et les donjon-crawlers. La romance entre les deux protagonistes se développe avec douceur sur fond de malentendus comiques.</p><p>Publiée sur Webtoon Canvas (plateforme amateur), c'est un exemple parfait de webtoon girl-love accessible et feel-good.</p>",
    pros: ["Comédie romantique GL légère et charmante", "Humour meta sur les jeux de rôle", "Romance développée avec douceur"],
    cons: ["Format court — chapitres très courts", "Gag répétitif peut lasser"],
    stars: 3,
    tags: "Romance · Fantasy · Comédie · Webtoon · GL",
    category: "manhwa",
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=mage+demon+queen+webtoon", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=mage+demon+queen+webtoon", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "the-worn-and-torn-newbie",
    title: "Worn and Torn Newbie",
    synopsis: "Un joueur de MMORPG vétéran de 20 ans est mystérieusement renvoyé au premier jour de son expérience de jeu. Il conserve toute sa connaissance du jeu — chaque stratégie, chaque boss, chaque objet rare — et va utiliser cet avantage pour dominer le jeu différemment, avec les réflexes d'un novice et la sagesse d'un vétéran.",
    reviewHtml: "<p><em>Worn and Torn Newbie</em> est un manhwa game isekai qui se distingue par son protagoniste : pas un néophyte qui découvre un monde de jeu, mais un expert absolu qui rejoue depuis le début avec une connaissance parfaite. La dynamique est inversée et rafraîchissante.</p><p>La connaissance méta du héros crée des situations où il prend des décisions incompréhensibles pour les autres joueurs mais brillantes en réalité. Le fun est de voir sa stratégie à long terme se révéler.</p><p>Le manhwa est bien rythme, avec un humour intégré naturellement. Pour les fans de gaming/isekai qui cherchent un angle différent.</p>",
    pros: ["Protagoniste vétéran — dynamique inversée originale", "Stratégies à long terme bien construites", "Rythme dynamique"],
    cons: ["Nécessite d'apprécier le contexte gaming", "Certains aspects fan-service"],
    stars: 3,
    tags: "Action · Game · Webtoon · Manhwa · Isekai",
    category: "manhwa",
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=worn+torn+newbie+manhwa", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=worn+torn+newbie+manhwa", logo: "/logos/amazon.svg" }
    ]
  },
  {
    slug: "my-s-class-hunters",
    title: "The S-Classes That I Raised",
    synopsis: "Han Yujin est un chasseur de classe F — le niveau le plus bas — qui a passé sa vie à soutenir son frère chasseur S. Après un accident mortel, il revient dans le passé avec la capacité unique de faire progresser les autres chasseurs vers leur classe maximale. Il va cette fois construire une équipe de S-Class en commençant par zéro.",
    reviewHtml: "<p><em>The S-Classes That I Raised</em> est un manhwa de regression/returnee qui se distingue par son angle : le héros n'est pas lui-même surpuissant, mais son pouvoir est de rendre les autres surpuissants. Cette mécanique crée une dynamique de team-building original dans le genre.</p><p>Han Yujin est un héros attachant précisément parce qu'il n'est pas invincible — il compense par l'intelligence, la gestion et son pouvoir unique. Les personnages qu'il élève forment un cast diversifié et attachant.</p><p>Le manhwa est bien rythmé avec des arcs courts et satisfaisants. Pour les fans de gate/hunter manhwa avec une approche moins conventional.</p>",
    pros: ["Mécanique de pouvoir unique (élever les autres)", "Héros non OP mais intelligent", "Cast d'élèves bien développé"],
    cons: ["Conventions du genre gate/hunter non remises en question", "Certains arcs prévisibles"],
    stars: 4,
    tags: "Action · Fantasy · Manhwa · Regression · Chasseurs",
    category: "manhwa",
    shops: [
      { name: "Fnac", url: "https://www.fnac.com/SearchResult/ResultKNV.aspx?Search=s-classes+raised+manhwa", logo: "/logos/fnac.svg" },
      { name: "Amazon", url: "https://www.amazon.fr/s?k=s+classes+raised+manhwa", logo: "/logos/amazon.svg" }
    ]
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
