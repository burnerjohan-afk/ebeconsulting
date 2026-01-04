/**
 * Couche de compatibilité : utilise Payload CMS si disponible, sinon fallback sur content.ts
 * Permet une migration progressive sans casser le site
 */

import { content } from './content'
import { 
  getHomePage, 
  getSiteSettings, 
  listOffers, 
  listMethodSteps,
  listTrustLogos,
  listAudiences,
  getBeforeAfter,
  listTestimonials,
  listFAQ,
  getCopilPage,
} from './cms/payload'
import {
  adaptHomePageHero,
  adaptProofBadges,
  adaptOffers,
  adaptMethodSteps,
  adaptTrustLogos,
  adaptAudiences,
  adaptBeforeAfter,
  adaptTestimonials,
  adaptFAQ,
  adaptCopilPage,
} from './cms/adapters'

// Flag pour activer/désactiver le CMS (utile pour migration progressive)
const USE_CMS = process.env.NEXT_PUBLIC_USE_CMS === 'true'

export async function getContent() {
  if (!USE_CMS) {
    return content
  }

  try {
    const [homePage, siteSettings, offers, methodSteps, trustLogos, audiences, beforeAfter, testimonials, faqItems, copilPage] = await Promise.all([
      getHomePage(),
      getSiteSettings(),
      listOffers(),
      listMethodSteps(),
      listTrustLogos(),
      listAudiences(),
      getBeforeAfter(),
      listTestimonials(),
      listFAQ(),
      getCopilPage(),
    ])

    const hero = adaptHomePageHero(homePage)
    const badges = adaptProofBadges(homePage)
    const adaptedOffers = adaptOffers(offers)
    const adaptedSteps = adaptMethodSteps(methodSteps)
    const adaptedLogos = adaptTrustLogos(trustLogos)
    const adaptedAudiences = adaptAudiences(audiences)
    const adaptedBeforeAfter = adaptBeforeAfter(beforeAfter)
    const adaptedTestimonials = adaptTestimonials(testimonials)
    const adaptedFAQ = adaptFAQ(faqItems)
    const adaptedCopil = adaptCopilPage(copilPage)

    return {
      company: {
        name: siteSettings?.brandName || content.company.name,
        tagline: siteSettings?.baseline || content.company.tagline,
        mission: content.company.mission,
        description: content.company.description,
      },
      hero: hero || content.hero,
      badges: badges.length > 0 ? badges : content.badges,
      method: {
        title: homePage?.methodIntro?.title || content.method.title,
        subtitle: homePage?.methodIntro?.subtitle || content.method.subtitle,
        steps: adaptedSteps.length > 0 ? adaptedSteps : content.method.steps,
      },
      offers: {
        title: content.offers.title,
        subtitle: content.offers.subtitle,
        list: adaptedOffers.length > 0 ? adaptedOffers : content.offers.list,
      },
      copil: adaptedCopil || content.copil,
      target: {
        title: content.target.title,
        description: content.target.description,
        audiences: adaptedAudiences.length > 0 ? adaptedAudiences : content.target.audiences,
      },
      impact: {
        title: content.impact.title,
        before: adaptedBeforeAfter.before.points.length > 0 
          ? { ...content.impact.before, points: adaptedBeforeAfter.before.points }
          : content.impact.before,
        after: adaptedBeforeAfter.after.points.length > 0
          ? { ...content.impact.after, points: adaptedBeforeAfter.after.points }
          : content.impact.after,
      },
      testimonials: adaptedTestimonials.length > 0 ? adaptedTestimonials : content.testimonials,
      faq: {
        title: content.faq.title,
        items: adaptedFAQ.length > 0 ? adaptedFAQ : content.faq.items,
      },
      // Garder le reste du contenu tel quel
      capabilities: content.capabilities,
      contact: content.contact,
      about: content.about,
      footer: {
        ...content.footer,
        description: siteSettings?.footerText || content.footer.description,
      },
    }
  } catch (error) {
    console.error('Erreur lors du chargement du contenu CMS, utilisation du fallback:', error)
    return content
  }
}

