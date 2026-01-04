import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'

import { Users } from './payload/collections/Users.js'
import { Media } from './payload/collections/Media.js'
import { Offers } from './payload/collections/Offers.js'
import { MethodSteps } from './payload/collections/MethodSteps.js'
import { TrustLogos } from './payload/collections/TrustLogos.js'
import { Audiences } from './payload/collections/Audiences.js'
import { Testimonials } from './payload/collections/Testimonials.js'
import { FAQItems } from './payload/collections/FAQItems.js'
import { Resources } from './payload/collections/Resources.js'

import { SiteSettings } from './payload/globals/SiteSettings.js'
import { HomePage } from './payload/globals/HomePage.js'
import { CopilPage } from './payload/globals/CopilPage.js'
import { BeforeAfter } from './payload/globals/BeforeAfter.js'

const config = buildConfig({
  admin: {
    user: Users.slug,
  },
  editor: slateEditor({}),
  collections: [
    Users,
    Media,
    Offers,
    MethodSteps,
    TrustLogos,
    Audiences,
    Testimonials,
    FAQItems,
    Resources,
  ],
  globals: [
    SiteSettings,
    HomePage,
    CopilPage,
    BeforeAfter,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  serverURL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  secret: process.env.PAYLOAD_SECRET || '',
})

export default config
