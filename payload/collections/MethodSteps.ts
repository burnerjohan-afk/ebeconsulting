import type { CollectionConfig } from 'payload'
import { collectionAfterChangeHook, collectionAfterDeleteHook } from '../hooks/revalidate'

export const MethodSteps: CollectionConfig = {
  slug: 'method-steps',
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
      name: 'bulletPoints',
      type: 'array',
      label: 'Points clés',
      fields: [
        {
          name: 'point',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'iconKey',
      type: 'text',
      admin: {
        description: 'Clé de l\'icône (ex: "comprendre", "decider")',
      },
    },
  ],
  hooks: {
    afterChange: [collectionAfterChangeHook(['/'])],
    afterDelete: [collectionAfterDeleteHook(['/'])],
  },
}

