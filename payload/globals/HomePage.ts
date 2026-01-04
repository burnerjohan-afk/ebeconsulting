import type { GlobalConfig } from 'payload'
import { globalRevalidateHook } from '../hooks/revalidate'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: 'Page d\'accueil',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'h1',
          type: 'text',
          required: true,
        },
        {
          name: 'subheadline',
          type: 'text',
          required: true,
        },
        {
          name: 'primaryCTA',
          type: 'group',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'href',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'secondaryCTA',
          type: 'group',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'href',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'proofBadges',
      type: 'array',
      label: 'Badges de preuve',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'iconKey',
          type: 'text',
        },
        {
          name: 'order',
          type: 'number',
          required: true,
          defaultValue: 0,
        },
        {
          name: 'active',
          type: 'checkbox',
          defaultValue: true,
        },
      ],
    },
    {
      name: 'methodIntro',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'subtitle',
          type: 'text',
        },
      ],
    },
    {
      name: 'sectionsToggle',
      type: 'group',
      label: 'Affichage des sections',
      fields: [
        {
          name: 'homeMethod',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'homeOffers',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'homeTrust',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'homeCopil',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'homeAudience',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'homeBeforeAfter',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'homeTestimonials',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'homeFAQ',
          type: 'checkbox',
          defaultValue: true,
        },
      ],
    },
  ],
  hooks: {
    afterChange: [globalRevalidateHook(['/'])],
  },
}

