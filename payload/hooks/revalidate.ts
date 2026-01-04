import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, GlobalAfterChangeHook } from 'payload'

const REVALIDATION_SECRET = process.env.REVALIDATION_SECRET || ''
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

async function revalidate(paths: string[]) {
  if (!REVALIDATION_SECRET) {
    console.warn('⚠️  REVALIDATION_SECRET non défini, revalidation ignorée')
    return
  }

  // En développement, on peut skip la revalidation si le serveur n'est pas démarré
  if (process.env.NODE_ENV === 'development' && !process.env.FORCE_REVALIDATION) {
    console.log('ℹ️  Revalidation ignorée en développement (utilisez FORCE_REVALIDATION=true pour forcer)')
    return
  }

  try {
    const response = await fetch(`${SITE_URL}/api/revalidate?secret=${REVALIDATION_SECRET}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ paths }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('❌ Erreur de revalidation:', errorText)
    } else {
      const result = await response.json()
      console.log('✅ Revalidation réussie pour:', paths, result)
    }
  } catch (error) {
    // En développement, ne pas faire échouer le hook si le serveur n'est pas démarré
    if (process.env.NODE_ENV === 'development') {
      console.warn('⚠️  Revalidation ignorée (serveur non démarré ou erreur réseau):', error instanceof Error ? error.message : error)
    } else {
      console.error('❌ Erreur lors de la revalidation:', error)
    }
  }
}

// Hook pour afterChange des collections
export const collectionAfterChangeHook = (
  paths: string[]
): CollectionAfterChangeHook => {
  return async ({ doc, req, operation }) => {
    if (operation === 'create' || operation === 'update') {
      await revalidate(paths)
    }
  }
}

// Hook pour afterDelete des collections
export const collectionAfterDeleteHook = (
  paths: string[]
): CollectionAfterDeleteHook => {
  return async ({ doc, req, id }) => {
    await revalidate(paths)
  }
}

// Hook pour les globals
export const globalRevalidateHook = (paths: string[]): GlobalAfterChangeHook => {
  return async ({ doc, req }) => {
    await revalidate(paths)
  }
}

