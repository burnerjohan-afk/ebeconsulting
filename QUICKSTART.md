# 🚀 Démarrage rapide - EBE Consulting

Guide minimal pour démarrer le projet en local avec Payload CMS.

## Prérequis

- **Node.js 18+** installé
- **Docker Desktop** installé et démarré
- **npm** (inclus avec Node.js)

## Installation (première fois)

```bash
# 1. Installer les dépendances
npm install

# 2. Créer le fichier .env.local
# Windows PowerShell
Copy-Item env.local.example .env.local

# Linux/Mac
cp env.local.example .env.local

# 3. Éditer .env.local et générer des clés secrètes :
# - PAYLOAD_SECRET (32+ caractères)
# - REVALIDATION_SECRET (32+ caractères)
# Exemple PowerShell: [Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Minimum 0 -Maximum 256 }))
```

## Démarrage

```bash
# 1. Démarrer PostgreSQL
npm run db:up

# 2. Générer les types Payload
npm run payload:generate

# 3. Exécuter le seed (importe le contenu existant)
npm run seed

# 4. Démarrer le serveur de développement
npm run dev
```

## Accès

- **Site** : http://localhost:3000
- **Admin Payload** : http://localhost:3000/admin
  - Email : `admin@ebeconsulting.fr` (ou celui dans `.env.local`)
  - Mot de passe : `ChangeMeStrong123!` (ou celui dans `.env.local`)

## Commandes utiles

```bash
# Arrêter PostgreSQL
npm run db:down

# Réinitialiser la base de données (supprime toutes les données)
npm run db:reset

# Vérifier l'état de PostgreSQL
docker ps

# Seed sans attendre la DB (si DB déjà disponible)
npm run seed:force
```

## Problèmes courants

**PostgreSQL ne démarre pas** :
- Vérifiez que Docker Desktop est démarré
- Vérifiez le port 5432 n'est pas déjà utilisé

**Erreur "PAYLOAD_SECRET is required"** :
- Vérifiez que `.env.local` existe et contient `PAYLOAD_SECRET` (32+ caractères)

**Le seed échoue** :
- Assurez-vous que PostgreSQL est prêt : `npm run db:wait`
- Ou démarrez d'abord le serveur (`npm run dev`) et ouvrez `/admin` pour créer les tables, puis `npm run seed:force`

Pour plus de détails, consultez [README_ADMIN.md](./README_ADMIN.md).

