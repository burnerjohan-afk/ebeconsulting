import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import type { Payload } from 'payload'

let cachedPayload: Payload | null = null

async function getPayloadClient(): Promise<Payload> {
  if (cachedPayload) {
    return cachedPayload
  }
  cachedPayload = await getPayload({ config: configPromise })
  return cachedPayload
}

// Site Settings
export async function getSiteSettings() {
  const payload = await getPayloadClient()
  const settings = await payload.findGlobal({
    slug: 'site-settings',
  })
  return settings
}

// Home Page
export async function getHomePage() {
  const payload = await getPayloadClient()
  const homePage = await payload.findGlobal({
    slug: 'home-page',
  })
  return homePage
}

// Offers
export async function listOffers() {
  const payload = await getPayloadClient()
  const offers = await payload.find({
    collection: 'offers',
    where: {
      and: [
        { active: { equals: true } },
        { status: { equals: 'published' } },
      ],
    },
    sort: 'order',
    limit: 100,
  })
  return offers.docs
}

export async function getOfferBySlug(slug: string) {
  const payload = await getPayloadClient()
  const offers = await payload.find({
    collection: 'offers',
    where: {
      and: [
        { active: { equals: true } },
        { status: { equals: 'published' } },
      ],
    },
    limit: 100,
  })
  return offers.docs.find((offer) => {
    // Créer un slug à partir du titre ou utiliser un champ slug si disponible
    const offerSlug = offer.title?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') || ''
    return offerSlug === slug
  })
}

// Method Steps
export async function listMethodSteps() {
  const payload = await getPayloadClient()
  const steps = await payload.find({
    collection: 'method-steps',
    where: {
      active: { equals: true },
    },
    sort: 'order',
    limit: 10,
  })
  return steps.docs
}

// Trust Logos
export async function listTrustLogos() {
  const payload = await getPayloadClient()
  const logos = await payload.find({
    collection: 'trust-logos',
    where: {
      active: { equals: true },
    },
    sort: 'order',
    limit: 20,
  })
  return logos.docs
}

// COPIL Page
export async function getCopilPage() {
  const payload = await getPayloadClient()
  const copilPage = await payload.findGlobal({
    slug: 'copil-page',
  })
  return copilPage
}

// Audiences
export async function listAudiences() {
  const payload = await getPayloadClient()
  const audiences = await payload.find({
    collection: 'audiences',
    where: {
      active: { equals: true },
    },
    sort: 'order',
    limit: 10,
  })
  return audiences.docs
}

// Before After
export async function getBeforeAfter() {
  const payload = await getPayloadClient()
  const beforeAfter = await payload.findGlobal({
    slug: 'before-after',
  })
  return beforeAfter
}

// Testimonials
export async function listTestimonials() {
  const payload = await getPayloadClient()
  const testimonials = await payload.find({
    collection: 'testimonials',
    where: {
      active: { equals: true },
    },
    sort: 'order',
    limit: 10,
  })
  return testimonials.docs
}

// FAQ Items
export async function listFAQ() {
  const payload = await getPayloadClient()
  const faqItems = await payload.find({
    collection: 'faq-items',
    where: {
      active: { equals: true },
    },
    sort: 'order',
    limit: 20,
  })
  return faqItems.docs
}

// Resources
export async function listResources() {
  const payload = await getPayloadClient()
  const resources = await payload.find({
    collection: 'resources',
    where: {
      _status: { equals: 'published' },
    },
    sort: '-publishedAt',
    limit: 20,
  })
  return resources.docs
}

export async function getResourceBySlug(slug: string) {
  const payload = await getPayloadClient()
  const resources = await payload.find({
    collection: 'resources',
    where: {
      and: [
        { slug: { equals: slug } },
        { _status: { equals: 'published' } },
      ],
    },
    limit: 1,
  })
  return resources.docs[0] || null
}

