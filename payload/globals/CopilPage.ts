import type { GlobalConfig } from 'payload'
import { globalRevalidateHook } from '../hooks/revalidate'

export const CopilPage: GlobalConfig = {
  slug: 'copil-page',
  label: 'Page Appui COPIL',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'heroTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'heroSubheadline',
      type: 'text',
    },
    {
      name: 'monthlyPriceLabel',
      type: 'text',
      admin: {
        description: 'Ex: "Forfait mensuel 3 000 € HT"',
      },
    },
    {
      name: 'introText',
      type: 'richText',
    },
    {
      name: 'blocks',
      type: 'array',
      label: 'Blocs de contenu',
      fields: [
        {
          name: 'order',
          type: 'number',
          required: true,
          defaultValue: 0,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'richText',
          required: true,
        },
        {
          name: 'iconKey',
          type: 'text',
        },
        {
          name: 'active',
          type: 'checkbox',
          defaultValue: true,
        },
      ],
    },
    {
      name: 'cta',
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
      name: 'seo',
      type: 'group',
      label: 'SEO',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'canonical',
          type: 'text',
        },
        {
          name: 'noindex',
          type: 'checkbox',
          defaultValue: false,
        },
      ],
    },
  ],
  hooks: {
    afterChange: [globalRevalidateHook(['/copil', '/'])],
  },
}

