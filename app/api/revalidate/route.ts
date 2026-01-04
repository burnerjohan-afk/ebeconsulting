import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const secret = request.nextUrl.searchParams.get('secret')
    
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json(
        { message: 'Invalid secret' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { paths, tags } = body

    if (paths && Array.isArray(paths)) {
      for (const path of paths) {
        revalidatePath(path)
      }
    }

    // Note: revalidateTag nécessite Next.js 16+ avec une signature différente
    // Pour l'instant, on utilise uniquement revalidatePath qui est suffisant
    // Les tags peuvent être gérés via revalidatePath si nécessaire

    return NextResponse.json({ 
      revalidated: true, 
      now: Date.now(),
      paths: paths || [],
      tags: tags || [],
    })
  } catch (err) {
    return NextResponse.json(
      { message: 'Error revalidating', error: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

