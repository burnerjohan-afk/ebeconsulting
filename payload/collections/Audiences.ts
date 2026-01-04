import type { CollectionConfig } from 'payload'
import { collectionAfterChangeHook, collectionAfterDeleteHook } from '../hooks/revalidate'

export const Audiences: CollectionConfig = {
  slug: 'audiences',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order', 'active'],
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
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'iconKey',
      type: 'text',
      admin: {
        description: 'Clé de l\'icône',
      },
    },
  ],
  hooks: {
    afterChange: [collectionAfterChangeHook(['/'])],
    afterDelete: [collectionAfterDeleteHook(['/'])],
  },
}

