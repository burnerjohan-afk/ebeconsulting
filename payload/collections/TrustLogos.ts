import type { CollectionConfig } from 'payload'
import { collectionAfterChangeHook, collectionAfterDeleteHook } from '../hooks/revalidate'

export const TrustLogos: CollectionConfig = {
  slug: 'trust-logos',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'order', 'active'],
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
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'websiteUrl',
      type: 'text',
      admin: {
        description: 'URL du site web (optionnel)',
      },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
  hooks: {
    afterChange: [collectionAfterChangeHook(['/'])],
    afterDelete: [collectionAfterDeleteHook(['/'])],
  },
}

