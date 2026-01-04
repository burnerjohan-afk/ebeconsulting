import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: true,
  admin: {
    useAsTitle: 'alt',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      admin: {
        description: 'Texte alternatif pour l\'accessibilité et le SEO',
      },
    },
    {
      name: 'credit',
      type: 'text',
      admin: {
        description: 'Crédit photo (optionnel)',
      },
    },
  ],
}

