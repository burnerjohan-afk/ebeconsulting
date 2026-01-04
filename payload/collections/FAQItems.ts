import type { CollectionConfig } from 'payload'
import { collectionAfterChangeHook, collectionAfterDeleteHook } from '../hooks/revalidate'

export const FAQItems: CollectionConfig = {
  slug: 'faq-items',
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question', 'order', 'active'],
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
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'answer',
      type: 'richText',
      required: true,
    },
  ],
  hooks: {
    afterChange: [collectionAfterChangeHook(['/', '/faq'])],
    afterDelete: [collectionAfterDeleteHook(['/', '/faq'])],
  },
}

