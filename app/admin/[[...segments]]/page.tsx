import { RootPage } from '@payloadcms/next/views'
import configPromise from '@/payload.config'
import { getPayload } from 'payload'

export const dynamic = 'force-dynamic'

export default async function AdminPage({
  params,
  searchParams,
}: {
  params: Promise<{ segments?: string[] }>
  searchParams: Promise<{ [key: string]: string | string[] }>
}) {
  // Vérifier que PAYLOAD_SECRET est défini
  if (!process.env.PAYLOAD_SECRET) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Configuration manquante</h1>
        <p>PAYLOAD_SECRET n'est pas défini dans les variables d'environnement.</p>
      </div>
    )
  }

  const payload = await getPayload({ config: configPromise })

  return RootPage({
    config: configPromise,
    importMap: payload.importMap,
    params: params.then((p) => ({ segments: p.segments || [] })),
    searchParams,
  })
}

