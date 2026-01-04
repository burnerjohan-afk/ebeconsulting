import type { GlobalConfig } from 'payload'
import { globalRevalidateHook } from '../hooks/revalidate'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Paramètres du site',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'brandName',
      type: 'text',
      required: true,
      defaultValue: 'EBE Consulting',
    },
    {
      name: 'baseline',
      type: 'text',
      admin: {
        description: 'Tagline principal',
      },
    },
    {
      name: 'contactEmail',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'address',
      type: 'textarea',
    },
    {
      name: 'socialLinks',
      type: 'group',
      fields: [
        {
          name: 'linkedin',
          type: 'text',
        },
        {
          name: 'facebook',
          type: 'text',
        },
        {
          name: 'instagram',
          type: 'text',
        },
      ],
    },
    {
      name: 'footerText',
      type: 'textarea',
      admin: {
        description: 'Texte du footer',
      },
    },
    {
      name: 'rgpdFooterLine',
      type: 'text',
      admin: {
        description: 'Mention RGPD courte dans le footer',
      },
    },
    {
      name: 'globalCTAs',
      type: 'group',
      fields: [
        {
          name: 'primary',
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
          name: 'secondary',
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
      ],
    },
    {
      name: 'defaultSEO',
      type: 'group',
      fields: [
        {
          name: 'titleTemplate',
          type: 'text',
          defaultValue: '%s | EBE Consulting',
        },
        {
          name: 'defaultTitle',
          type: 'text',
        },
        {
          name: 'defaultDescription',
          type: 'textarea',
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
  hooks: {
    afterChange: [globalRevalidateHook(['/'])],
  },
}

