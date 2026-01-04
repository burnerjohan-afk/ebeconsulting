import type { CollectionConfig } from 'payload'
import { collectionAfterChangeHook, collectionAfterDeleteHook } from '../hooks/revalidate'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'companyName',
    defaultColumns: ['companyName', 'personRole', 'order', 'active'],
  },
  access: {
    read: () => true,
  },
  fields: [
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
    {
      name: 'companyName',
      type: 'text',
      required: true,
    },
    {
      name: 'personRole',
      type: 'text',
      required: true,
      admin: {
        description: 'Rôle de la personne (ex: "Directeur Général")',
      },
    },
    {
      name: 'quoteShort',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Citation courte (pour l\'aperçu)',
      },
    },
    {
      name: 'quoteFull',
      type: 'richText',
      admin: {
        description: 'Citation complète (si différente)',
      },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Logo de l\'entreprise',
      },
    },
  ],
  hooks: {
    afterChange: [collectionAfterChangeHook(['/', '/faq'])],
    afterDelete: [collectionAfterDeleteHook(['/', '/faq'])],
  },
}

