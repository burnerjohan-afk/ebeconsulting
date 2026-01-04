import { RootLayout } from '@payloadcms/next/layouts'
import { handleServerFunctions } from '@payloadcms/next/layouts'
import configPromise from '@/payload.config'
import { getPayload } from 'payload'
import { ReactNode } from 'react'

export const dynamic = 'force-dynamic'

export default async function AdminLayout({
  children,
}: {
  children: ReactNode
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

  const serverFunction = (args: { name: string; args: Record<string, unknown> }) => {
    return handleServerFunctions({
      config: configPromise,
      importMap: payload.importMap,
      ...args,
    })
  }

  return RootLayout({
    children,
    config: configPromise,
    importMap: payload.importMap,
    serverFunction,
  })
}

