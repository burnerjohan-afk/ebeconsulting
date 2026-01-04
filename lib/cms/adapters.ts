/**
 * Adapters pour transformer les données Payload en format compatible avec les composants existants
 * Ces fonctions permettent de garder les composants inchangés visuellement
 */

// Types Payload seront générés après npm run payload:generate
// Pour l'instant, on utilise des types génériques
type HomePage = any
type SiteSettings = any
type Offer = any
type MethodStep = any
type TrustLogo = any
type CopilPage = any
type Audience = any
type BeforeAfter = any
type Testimonial = any
type FAQItem = any

// Adapter pour HomePage -> format hero existant
export function adaptHomePageHero(homePage: HomePage | null) {
  if (!homePage?.hero) {
    return null
  }
  return {
    title: homePage.hero.h1 || '',
    subtitle: homePage.hero.subheadline || '',
    ctaPrimary: homePage.hero.primaryCTA?.label || '',
    ctaSecondary: homePage.hero.secondaryCTA?.label || '',
  }
}

// Adapter pour les badges
export function adaptProofBadges(homePage: HomePage | null) {
  if (!homePage?.proofBadges) {
    return []
  }
  return homePage.proofBadges
    .filter((badge: any) => badge.active)
    .sort((a: any, b: any) => (a.order || 0) - (b.order || 0))
    .map((badge: any) => ({
      title: badge.label || '',
      description: badge.description || '',
      iconKey: badge.iconKey || '',
    }))
}

// Adapter pour les offres
export function adaptOffers(offers: Offer[]) {
  return offers.map((offer: any) => ({
    id: offer.id?.toString() || '',
    title: offer.title || '',
    subtitle: offer.categoryLabel || '',
    description: offer.shortDescription || '',
    iconKey: offer.iconKey || '',
    ctaQuote: offer.ctas?.quote || null,
    ctaMore: offer.ctas?.more || null,
  }))
}

// Adapter pour les étapes de méthode
export function adaptMethodSteps(steps: MethodStep[]) {
  return steps.map((step: any, index: number) => ({
    number: String(index + 1).padStart(2, '0'),
    title: step.title || '',
    description: step.description || '',
    details: step.bulletPoints?.map((bp: any) => bp.point || '') || [],
    iconKey: step.iconKey || '',
  }))
}

// Adapter pour les logos clients
export function adaptTrustLogos(logos: TrustLogo[]) {
  return logos.map((logo: any) => ({
    name: logo.name || '',
    logo: typeof logo.logo === 'object' && logo.logo !== null ? logo.logo : null,
    websiteUrl: logo.websiteUrl || '',
  }))
}

// Adapter pour les audiences
export function adaptAudiences(audiences: Audience[]) {
  return audiences.map((audience: any) => ({
    title: audience.title || '',
    description: audience.description || '',
    iconKey: audience.iconKey || '',
  }))
}

// Adapter pour Before/After
export function adaptBeforeAfter(beforeAfter: BeforeAfter | null) {
  if (!beforeAfter) {
    return { before: { points: [] }, after: { points: [] } }
  }
  return {
    before: {
      points: beforeAfter.beforeItems?.map((item: any) => item.item || '') || [],
    },
    after: {
      points: beforeAfter.afterItems?.map((item: any) => item.item || '') || [],
    },
  }
}

// Adapter pour les témoignages
export function adaptTestimonials(testimonials: Testimonial[]) {
  return testimonials.map((testimonial: any) => ({
    company: testimonial.companyName || '',
    quote: testimonial.quoteShort || '',
    author: testimonial.personRole || '',
    role: testimonial.companyName || '',
    logo: typeof testimonial.logo === 'object' && testimonial.logo !== null ? testimonial.logo : null,
  }))
}

// Adapter pour FAQ
export function adaptFAQ(faqItems: FAQItem[]) {
  return faqItems.map((item: any) => ({
    question: item.question || '',
    answer: item.answer || '',
  }))
}

// Adapter pour COPIL page
export function adaptCopilPage(copilPage: CopilPage | null) {
  if (!copilPage) {
    return null
  }
  return {
    title: copilPage.heroTitle || '',
    subtitle: copilPage.monthlyPriceLabel || '',
    description: copilPage.heroSubheadline || '',
    missions: copilPage.blocks
      ?.filter((block: any) => block.active)
      .sort((a: any, b: any) => (a.order || 0) - (b.order || 0))
      .map((block: any) => ({
        title: block.title || '',
        description: block.description || '',
        iconKey: block.iconKey || '',
      })) || [],
    cta: copilPage.cta || null,
  }
}
