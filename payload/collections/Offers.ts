import type { CollectionConfig } from 'payload'
import { collectionAfterChangeHook, collectionAfterDeleteHook } from '../hooks/revalidate'

export const Offers: CollectionConfig = {
  slug: 'offers',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'categoryLabel', 'order', 'active', 'status'],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => {
      return user?.role === 'admin' || user?.role === 'editor'
    },
    update: ({ req: { user } }) => {
      return user?.role === 'admin' || user?.role === 'editor'
    },
    delete: ({ req: { user } }) => {
      return user?.role === 'admin'
    },
  },
  fields: [
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Brouillon', value: 'draft' },
        { label: 'Publié', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 0,
      admin: {
        description: 'Ordre d\'affichage (0 = premier)',
      },
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Afficher cette offre',
      },
    },
    {
      name: 'categoryLabel',
      type: 'text',
      required: true,
      admin: {
        description: 'Label de catégorie (ex: "Accompagnement dirigeant")',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Description courte pour les cartes',
      },
    },
    {
      name: 'longDescription',
      type: 'richText',
      admin: {
        description: 'Description détaillée pour la page dédiée',
      },
    },
    {
      name: 'objectives',
      type: 'array',
      label: 'Objectifs',
      fields: [
        {
          name: 'objective',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'deliverables',
      type: 'array',
      label: 'Livrables',
      fields: [
        {
          name: 'deliverable',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'benefits',
      type: 'array',
      label: 'Bénéfices',
      fields: [
        {
          name: 'benefit',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'ctas',
      type: 'group',
      fields: [
        {
          name: 'quote',
          type: 'group',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
              defaultValue: 'Demander un devis',
            },
            {
              name: 'href',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'more',
          type: 'group',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
              defaultValue: 'En savoir plus',
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
      name: 'iconKey',
      type: 'text',
      admin: {
        description: 'Clé de l\'icône (ex: "clarifier", "structurer")',
      },
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      fields: [
        {
          name: 'title',
          type: 'text',
          admin: {
            description: 'Meta title (si différent du titre)',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          admin: {
            description: 'Meta description',
          },
        },
        {
          name: 'canonical',
          type: 'text',
          admin: {
            description: 'URL canonique',
          },
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
    afterChange: [collectionAfterChangeHook(['/', '/offres'])],
    afterDelete: [collectionAfterDeleteHook(['/', '/offres'])],
  },
}

