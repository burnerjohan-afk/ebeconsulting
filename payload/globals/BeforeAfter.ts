import type { GlobalConfig } from 'payload'
import { globalRevalidateHook } from '../hooks/revalidate'

export const BeforeAfter: GlobalConfig = {
  slug: 'before-after',
  label: 'Avant / Après',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'beforeItems',
      type: 'array',
      label: 'Avant',
      fields: [
        {
          name: 'item',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'afterItems',
      type: 'array',
      label: 'Après',
      fields: [
        {
          name: 'item',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
  hooks: {
    afterChange: [globalRevalidateHook(['/'])],
  },
}

