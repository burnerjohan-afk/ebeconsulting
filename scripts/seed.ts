/**
 * Script de seed pour importer le contenu existant dans Payload CMS
 * Usage: npx tsx scripts/seed.ts
 */

import { getPayload } from 'payload'
import configPromise from '../payload.config'
import { content } from '../lib/content'
import path from 'path'
import fs from 'fs'

async function seed() {
  console.log('🌱 Démarrage du seed Payload CMS...\n')

  const payload = await getPayload({ config: configPromise })

  try {
    // 1. Site Settings
    console.log('📝 Configuration des paramètres du site...')
    await payload.updateGlobal({
      slug: 'site-settings',
      data: {
        brandName: content.company.name,
        baseline: content.company.tagline,
        contactEmail: 'eb@ebeconsulting.fr',
        footerText: content.footer.description,
        rgpdFooterLine: 'Données personnelles : le site applique les principes RGPD.',
        globalCTAs: {
          primary: {
            label: content.hero.ctaPrimary,
            href: '/contact',
          },
          secondary: {
            label: content.hero.ctaSecondary,
            href: '/offres',
          },
        },
        defaultSEO: {
          titleTemplate: '%s | EBE Consulting',
          defaultTitle: 'EBE Consulting | Accompagnement dirigeants TPE/PME',
          defaultDescription: content.company.description,
        },
        socialLinks: {
          linkedin: 'https://www.linkedin.com/company/ebe-consulting',
          facebook: 'https://www.facebook.com/ebeconsulting',
          instagram: 'https://www.instagram.com/ebeconsulting',
        },
      },
    })
    console.log('✅ Paramètres du site configurés\n')

    // 2. Home Page
    console.log('🏠 Configuration de la page d\'accueil...')
    const proofBadges = content.badges.map((badge, index) => ({
      label: badge.title,
      description: badge.description,
      iconKey: badge.title.toLowerCase().replace(/\s+/g, '-'),
      order: index,
      active: true,
    }))

    await payload.updateGlobal({
      slug: 'home-page',
      data: {
        hero: {
          h1: content.hero.title,
          subheadline: content.hero.subtitle,
          primaryCTA: {
            label: content.hero.ctaPrimary,
            href: '/contact',
          },
          secondaryCTA: {
            label: content.hero.ctaSecondary,
            href: '/offres',
          },
        },
        proofBadges,
        methodIntro: {
          title: content.method.title,
          subtitle: content.method.subtitle,
        },
        sectionsToggle: {
          homeMethod: true,
          homeOffers: true,
          homeTrust: true,
          homeCopil: true,
          homeAudience: true,
          homeBeforeAfter: true,
          homeTestimonials: true,
          homeFAQ: false, // FAQ est sur une page dédiée
        },
      },
    })
    console.log('✅ Page d\'accueil configurée\n')

    // 3. Method Steps
    console.log('📋 Importation des étapes de méthode...')
    for (let i = 0; i < content.method.steps.length; i++) {
      const step = content.method.steps[i]
      await payload.create({
        collection: 'method-steps',
        data: {
          order: i,
          active: true,
          title: step.title,
          description: step.description,
          bulletPoints: step.details.map((detail) => ({ point: detail })),
          iconKey: step.title.toLowerCase().replace(/\s+/g, '-'),
        },
      })
    }
    console.log('✅ Étapes de méthode importées\n')

    // 4. Offers
    console.log('💼 Importation des offres...')
    for (let i = 0; i < content.offers.list.length; i++) {
      const offer = content.offers.list[i]
      await payload.create({
        collection: 'offers',
        data: {
          status: 'published',
          order: i,
          active: true,
          categoryLabel: offer.subtitle,
          title: offer.title,
          shortDescription: offer.description,
          longDescription: [
            {
              children: [{ text: offer.description }],
            },
          ],
          objectives: offer.objectives?.map((obj) => ({ objective: obj })) || [],
          deliverables: offer.deliverables?.map((del) => ({ deliverable: del })) || [],
          benefits: offer.benefits?.map((ben) => ({ benefit: ben })) || [],
          ctas: {
            quote: {
              label: 'Demander un devis',
              href: `/contact?subject=${encodeURIComponent(`Offre : ${offer.title}`)}&offer=${offer.id}`,
            },
            more: {
              label: 'En savoir plus',
              href: `/offres/${offer.id}`,
            },
          },
          iconKey: offer.id,
        },
      })
    }
    console.log('✅ Offres importées\n')

    // 5. Trust Logos (si images existent)
    console.log('🖼️  Importation des logos clients...')
    const logoFiles = [
      { name: 'Neodisplay', file: 'neodisplay.jpg' },
      { name: 'SELECT Service', file: 'select logo.png' },
    ]

    for (let i = 0; i < logoFiles.length; i++) {
      const logo = logoFiles[i]
      const filePath = path.join(process.cwd(), 'public', 'image', logo.file)
      
      if (fs.existsSync(filePath)) {
        try {
          // Vérifier si le logo existe déjà
          const existingLogos = await payload.find({
            collection: 'trust-logos',
            where: {
              name: { equals: logo.name },
            },
            limit: 1,
          })

          if (existingLogos.docs.length === 0) {
            // Upload du fichier via l'API Payload
            const FormData = require('form-data')
            const formData = new FormData()
            formData.append('file', fs.createReadStream(filePath), {
              filename: logo.file,
              contentType: logo.file.endsWith('.png') ? 'image/png' : 'image/jpeg',
            })
            formData.append('alt', `Logo ${logo.name}`)

            // Note: L'upload via API nécessite une requête HTTP
            // Pour le seed, on crée juste l'entrée sans le fichier
            // Le fichier devra être uploadé manuellement dans l'admin
            console.log(`⚠️  Logo ${logo.name}: créer manuellement dans l'admin et uploader ${logo.file}`)
            
            // Créer l'entrée trust-logo sans le fichier pour l'instant
            // L'utilisateur devra uploader le fichier manuellement
            await payload.create({
              collection: 'trust-logos',
              data: {
                order: i,
                active: true,
                name: logo.name,
                // logo sera null pour l'instant, à uploader manuellement
              },
            })
          }
        } catch (error) {
          console.error(`❌ Erreur lors de l'import du logo ${logo.name}:`, error)
        }
      }
    }
    console.log('✅ Logos clients importés (fichiers à uploader manuellement dans l\'admin)\n')

    // 6. COPIL Page
    console.log('📊 Configuration de la page COPIL...')
    const copilBlocks = content.copil.missions.map((mission, index) => ({
      order: index,
      title: mission.title,
      description: [
        {
          children: [{ text: mission.description }],
        },
      ],
      iconKey: mission.title.toLowerCase().replace(/\s+/g, '-'),
      active: true,
    }))

    await payload.updateGlobal({
      slug: 'copil-page',
      data: {
        heroTitle: content.copil.title,
        heroSubheadline: content.copil.description,
        monthlyPriceLabel: content.copil.subtitle,
        introText: [
          {
            children: [{ text: content.copil.description }],
          },
        ],
        blocks: copilBlocks,
        cta: {
          label: 'Demander un devis',
          href: '/contact?subject=Appui COPIL&offer=copil',
        },
        seo: {
          title: 'Appui Comité de Pilotage - 3000€ HT/mois',
          description: content.copil.description,
          canonical: 'https://ebeconsulting.fr/copil',
        },
      },
    })
    console.log('✅ Page COPIL configurée\n')

    // 7. Audiences
    console.log('👥 Importation des audiences...')
    for (let i = 0; i < content.target.audiences.length; i++) {
      const audience = content.target.audiences[i]
      await payload.create({
        collection: 'audiences',
        data: {
          order: i,
          active: true,
          title: audience.title,
          description: audience.description,
          iconKey: audience.title.toLowerCase().replace(/\s+/g, '-'),
        },
      })
    }
    console.log('✅ Audiences importées\n')

    // 8. Before After
    console.log('🔄 Configuration Avant/Après...')
    await payload.updateGlobal({
      slug: 'before-after',
      data: {
        beforeItems: content.impact.before.points.map((point) => ({ item: point })),
        afterItems: content.impact.after.points.map((point) => ({ item: point })),
      },
    })
    console.log('✅ Avant/Après configuré\n')

    // 9. Testimonials
    console.log('💬 Importation des témoignages...')
    for (let i = 0; i < content.testimonials.length; i++) {
      const testimonial = content.testimonials[i]
      await payload.create({
        collection: 'testimonials',
        data: {
          order: i,
          active: true,
          companyName: testimonial.company,
          personRole: testimonial.role,
          quoteShort: testimonial.quote.substring(0, 150),
          quoteFull: [
            {
              children: [{ text: testimonial.quote }],
            },
          ],
        },
      })
    }
    console.log('✅ Témoignages importés\n')

    // 10. FAQ Items
    console.log('❓ Importation des questions FAQ...')
    for (let i = 0; i < content.faq.items.length; i++) {
      const faqItem = content.faq.items[i]
      await payload.create({
        collection: 'faq-items',
        data: {
          order: i,
          active: true,
          question: faqItem.question,
          answer: [
            {
              children: [{ text: faqItem.answer }],
            },
          ],
        },
      })
    }
    console.log('✅ Questions FAQ importées\n')

    // 11. Créer un utilisateur admin si nécessaire
    console.log('👤 Vérification de l\'utilisateur admin...')
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@ebeconsulting.fr'
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123'

    const existingAdmins = await payload.find({
      collection: 'users',
      where: {
        email: { equals: adminEmail },
      },
      limit: 1,
    })

    if (existingAdmins.docs.length === 0) {
      await payload.create({
        collection: 'users',
        data: {
          email: adminEmail,
          password: adminPassword,
          role: 'admin',
        },
      })
      console.log(`✅ Utilisateur admin créé: ${adminEmail}`)
    } else {
      console.log(`ℹ️  Utilisateur admin existe déjà: ${adminEmail}`)
    }

    console.log('\n🎉 Seed terminé avec succès!')
    console.log(`\n📌 Accès admin: ${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/admin`)
    console.log(`📌 Email: ${adminEmail}`)
    console.log(`📌 Mot de passe: ${adminPassword}\n`)
  } catch (error) {
    console.error('❌ Erreur lors du seed:', error)
    throw error
  }
}

seed()
  .then(() => {
    process.exit(0)
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

