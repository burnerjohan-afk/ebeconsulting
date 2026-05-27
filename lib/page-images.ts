/**
 * Visuels des pages internes (hors accueil).
 * Photos locales (Pexels) — réunions pro avec personnes noires clairement visibles.
 * Sources : pexels.com/photo/3184296, 3183197, 7688336, 4427618, 1181519, 3769021
 */
export const pageImages = {
  about: {
    gallery: [
      {
        src: "/image/about/gallery-evolution.png",
        alt: "Accompagnement stratégique — évolution d'activité et indicateurs clés",
      },
      {
        src: "/image/about/gallery-terrain.png",
        alt: "Intervention terrain — checklist et pilotage opérationnel",
      },
      {
        src: "/image/about/gallery-plan-action.png",
        alt: "Plan d'action — clarification des priorités et des compétences",
      },
      {
        src: "/image/about/gallery-strategie.png",
        alt: "Travail collectif — stratégie, vision et prochaines étapes",
      },
      {
        src: "/image/about/gallery-pilotage.png",
        alt: "Pilotage et résultats — analyse, stratégie et plan d'action",
      },
    ],
  },
  hero: {
    about: "/image/pages/hero-about.jpg",
    offers: "/image/pages/hero-offers.jpg",
    offersCopilCard: "/image/pages/hero-offers-copil.jpg",
    copil: "/image/pages/hero-copil.jpg",
    audits: "/image/pages/hero-audits.jpg",
    faq: "/image/pages/hero-faq.jpg",
    contact: "/image/pages/hero-contact.jpg",
    ressources: "/image/pages/hero-ressources.jpg",
  },
  offers: {
    clarifier: "/image/pages/offer-clarifier.jpg",
    structurer: "/image/pages/offer-structurer.jpg",
    comprendre: "/image/pages/offer-comprendre.jpg",
    securiser: "/image/pages/offer-securiser.jpg",
    default: "/image/pages/offer-securiser.jpg",
  },
} as const;
