const A = "#e03030";
const FH = "var(--font-barlow), 'Barlow Condensed', sans-serif";

export const metadata = {
  title: "Politique de confidentialité · MangaInsight",
  description: "Politique de confidentialité et protection des données personnelles de MangaInsight.",
  robots: { index: false },
};

export default function PolitiqueConfidentialite() {
  const section = (title: string, children: React.ReactNode) => (
    <section style={{ marginBottom: 40 }}>
      <h2 style={{ fontFamily: FH, fontSize: 22, fontWeight: 800, color: "#fff", letterSpacing: "0.04em", marginBottom: 14 }}>
        {title}
      </h2>
      {children}
    </section>
  );

  const p = (text: string) => (
    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 10 }}>{text}</p>
  );

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "60px clamp(20px,4vw,40px) 80px" }}>

        <div style={{ marginBottom: 48 }}>
          <div style={{ width: 32, height: 3, background: A, marginBottom: 16 }} />
          <h1 style={{ fontFamily: FH, fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, color: "#fff", letterSpacing: "0.04em", marginBottom: 12 }}>
            Politique de confidentialité
          </h1>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>Dernière mise à jour : avril 2026</p>
        </div>

        {section("1. Qui sommes-nous ?", <>
          {p("MangaInsight est un site de critiques et de recommandations de manga et manhwa en français, accessible à l'adresse https://www.mangainsight.com.")}
          {p("Responsable du traitement : MangaInsight. Pour toute question, vous pouvez nous contacter via le formulaire de contact du site.")}
        </>)}

        {section("2. Données collectées", <>
          {p("Nous collectons uniquement les données strictement nécessaires au fonctionnement du site :")}
          <ul style={{ paddingLeft: 20, marginBottom: 10 }}>
            {["Adresse email : lors de la création d'un compte, pour l'authentification et l'envoi d'emails transactionnels (confirmation, réinitialisation de mot de passe).",
              "Pseudo (display name) : optionnel, visible sur tes commentaires publiés.",
              "Commentaires et notes : le contenu que tu soumets volontairement sur les fiches séries.",
              "Données de navigation : aucune donnée de navigation n'est collectée à des fins publicitaires ou analytiques."
            ].map((item, i) => (
              <li key={i} style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 6 }}>{item}</li>
            ))}
          </ul>
        </>)}

        {section("3. Finalités du traitement", <>
          {p("Tes données sont utilisées exclusivement pour :")}
          <ul style={{ paddingLeft: 20, marginBottom: 10 }}>
            {["Gérer ton compte et l'authentification (base légale : exécution du contrat).",
              "Afficher ton pseudo sur tes commentaires publiés (base légale : intérêt légitime).",
              "Envoyer des emails transactionnels (confirmation de compte, réinitialisation de mot de passe — base légale : exécution du contrat)."
            ].map((item, i) => (
              <li key={i} style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 6 }}>{item}</li>
            ))}
          </ul>
          {p("Nous ne vendons pas tes données et ne les partageons avec aucun tiers à des fins commerciales.")}
        </>)}

        {section("4. Cookies et stockage local", <>
          {p("MangaInsight utilise :")}
          <ul style={{ paddingLeft: 20, marginBottom: 10 }}>
            {["Cookies de session (Supabase) : indispensables pour maintenir ta session de connexion. Ces cookies sont fonctionnels et ne nécessitent pas de consentement.",
              "LocalStorage : utilisé pour sauvegarder tes séries favorites et tes notes personnelles localement dans ton navigateur. Ces données ne sont jamais envoyées à nos serveurs.",
              "Aucun cookie publicitaire ni outil de tracking analytics n'est utilisé."
            ].map((item, i) => (
              <li key={i} style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 6 }}>{item}</li>
            ))}
          </ul>
        </>)}

        {section("5. Hébergement et sous-traitants", <>
          {p("Le site est hébergé sur Vercel (États-Unis). La base de données et l'authentification sont gérées par Supabase (États-Unis). Ces prestataires sont soumis au RGPD via des clauses contractuelles types.")}
          {p("Les emails transactionnels sont envoyés via Resend (États-Unis), uniquement pour les communications liées à ton compte.")}
        </>)}

        {section("6. Durée de conservation", <>
          {p("Tes données de compte sont conservées tant que ton compte est actif. Les commentaires publiés sont conservés sur le site jusqu'à leur suppression par nos soins ou sur ta demande.")}
          {p("En cas de suppression de compte, tes données personnelles sont effacées dans un délai de 30 jours.")}
        </>)}

        {section("7. Tes droits (RGPD)", <>
          {p("Conformément au Règlement Général sur la Protection des Données (RGPD), tu disposes des droits suivants :")}
          <ul style={{ paddingLeft: 20, marginBottom: 10 }}>
            {["Droit d'accès à tes données personnelles.",
              "Droit de rectification de tes données.",
              "Droit à l'effacement (droit à l'oubli).",
              "Droit à la portabilité de tes données.",
              "Droit d'opposition au traitement."
            ].map((item, i) => (
              <li key={i} style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 6 }}>{item}</li>
            ))}
          </ul>
          {p("Pour exercer ces droits, contacte-nous depuis la page de contact du site. Tu as également le droit d'introduire une réclamation auprès de la CNIL (www.cnil.fr).")}
        </>)}

        {section("8. Modifications", <>
          {p("Cette politique peut être mise à jour. La date de dernière modification est indiquée en haut de cette page. En continuant à utiliser le site, tu acceptes les changements éventuels.")}
        </>)}

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.06)", fontSize: 12, color: "rgba(255,255,255,0.2)" }}>
          MangaInsight — Protection des données conforme au RGPD
        </div>
      </div>
    </div>
  );
}
