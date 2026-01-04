/**
 * Script simple pour attendre que PostgreSQL soit prêt
 * Usage: node scripts/wait-for-db.js
 */

// Charger les variables d'environnement depuis .env.local
require('dotenv').config({ path: '.env.local' })

const { Client } = require('pg')

const maxRetries = 30
const retryDelay = 1000 // 1 seconde

async function waitForDb() {
  const connectionString = process.env.DATABASE_URL

  if (!connectionString) {
    console.error('❌ DATABASE_URL n\'est pas défini')
    process.exit(1)
  }

  console.log('⏳ Attente de la connexion à PostgreSQL...')

  for (let i = 0; i < maxRetries; i++) {
    try {
      const client = new Client({ connectionString })
      await client.connect()
      await client.query('SELECT 1')
      await client.end()
      console.log('✅ PostgreSQL est prêt!')
      process.exit(0)
    } catch (error) {
      if (i < maxRetries - 1) {
        process.stdout.write(`\r⏳ Tentative ${i + 1}/${maxRetries}...`)
        await new Promise((resolve) => setTimeout(resolve, retryDelay))
      } else {
        console.error('\n❌ Impossible de se connecter à PostgreSQL après', maxRetries, 'tentatives')
        console.error('Vérifiez que Docker est démarré et que le conteneur postgres est actif:')
        console.error('  docker ps')
        process.exit(1)
      }
    }
  }
}

waitForDb()

