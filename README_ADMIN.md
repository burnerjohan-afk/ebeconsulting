# Guide d'administration Payload CMS - EBE Consulting

Ce guide explique comment utiliser le back-office Payload CMS pour administrer le contenu du site EBE Consulting.

## 📋 Table des matières

1. [Installation](#installation)
2. [Configuration](#configuration)
3. [Seed initial](#seed-initial)
4. [Accès au back-office](#accès-au-back-office)
5. [Collections et Globals](#collections-et-globals)
6. [Revalidation ISR](#revalidation-isr)
7. [Déploiement](#déploiement)

## 🚀 Installation

### Prérequis

- **Node.js 18+**
- **Docker Desktop** (pour PostgreSQL local) - [Télécharger Docker](https://www.docker.com/products/docker-desktop)
- **npm** (inclus avec Node.js)

### Installation des dépendances

```bash
npm install
```

### Configuration locale avec Docker

#### 1. Démarrer PostgreSQL avec Docker

Le projet inclut un `docker-compose.yml` pour démarrer PostgreSQL automatiquement :

```bash
# Démarrer PostgreSQL
npm run db:up

# Vérifier que le conteneur est actif
docker ps
```

Le conteneur PostgreSQL sera accessible sur `localhost:5432` avec :
- **User** : `ebe`
- **Password** : `ebe_password`
- **Database** : `ebe_payload`

#### 2. Variables d'environnement

Créez un fichier `.env.local` à la racine du projet en copiant `env.local.example` :

```bash
# Windows (PowerShell)
Copy-Item env.local.example .env.local

# Linux/Mac
cp env.local.example .env.local
```

Puis éditez `.env.local` et **générez des clés secrètes** :

```bash
# Générer PAYLOAD_SECRET (Windows PowerShell)
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Minimum 0 -Maximum 256 }))

# Générer PAYLOAD_SECRET (Linux/Mac)
openssl rand -base64 32

# Générer REVALIDATION_SECRET (même méthode)
```

**⚠️ Important** : 
- Ne commitez **jamais** le fichier `.env.local` dans Git
- Changez les mots de passe par défaut en production
- Utilisez des clés secrètes fortes (32+ caractères)

### Configuration sans Docker (PostgreSQL externe)

Si vous avez déjà PostgreSQL installé localement ou utilisez une base cloud :

1. Créez une base de données :
```sql
CREATE DATABASE ebe_payload;
```

2. Mettez à jour `DATABASE_URL` dans `.env.local` :
```env
DATABASE_URL="postgresql://user:password@localhost:5432/ebe_payload"
```

### Génération des types TypeScript

```bash
npm run payload:generate
```

Cela génère `payload-types.ts` avec tous les types TypeScript pour vos collections et globals.

## 🌱 Seed initial

Le script de seed importe tout le contenu existant du site dans Payload CMS pour conserver le rendu identique.

### Exécution du seed

**Avec Docker (recommandé)** :

```bash
# 1. Démarrer PostgreSQL
npm run db:up

# 2. Attendre que la DB soit prête et exécuter le seed
npm run seed
```

Le script `seed` attend automatiquement que PostgreSQL soit prêt avant d'exécuter le seed.

**Sans Docker (DB déjà disponible)** :

```bash
npm run seed:force
```

### Commandes Docker utiles

```bash
# Démarrer PostgreSQL
npm run db:up

# Arrêter PostgreSQL (sans supprimer les données)
npm run db:down

# Réinitialiser complètement (supprime toutes les données)
npm run db:reset

# Vérifier l'état du conteneur
docker ps

# Voir les logs PostgreSQL
docker logs ebe_payload_db
```

Le script va :
- ✅ Créer les paramètres du site
- ✅ Configurer la page d'accueil
- ✅ Importer les étapes de méthode
- ✅ Importer les offres
- ✅ Importer les logos clients
- ✅ Configurer la page COPIL
- ✅ Importer les audiences
- ✅ Configurer Avant/Après
- ✅ Importer les témoignages
- ✅ Importer les questions FAQ
- ✅ Créer un utilisateur admin

### Utilisateur admin par défaut

Après le seed, vous pouvez vous connecter avec :
- **Email** : `admin@ebeconsulting.fr` (ou celui défini dans `ADMIN_EMAIL`)
- **Mot de passe** : `ChangeMeStrong123!` (ou celui défini dans `ADMIN_PASSWORD`)

**⚠️ Changez le mot de passe immédiatement après la première connexion !**

## 🚀 Démarrage rapide (checklist)

Pour démarrer le projet en local :

1. **Installer les dépendances** :
   ```bash
   npm install
   ```

2. **Créer `.env.local`** :
   ```bash
   # Copier le template
   cp env.local.example .env.local
   # Puis éditer .env.local et générer des clés secrètes
   ```

3. **Démarrer PostgreSQL** :
   ```bash
   npm run db:up
   ```

4. **Générer les types Payload** :
   ```bash
   npm run payload:generate
   ```

5. **Exécuter le seed** :
   ```bash
   npm run seed
   ```

6. **Démarrer le serveur de développement** :
   ```bash
   npm run dev
   ```

7. **Accéder au back-office** :
   - Ouvrir http://localhost:3000/admin
   - Se connecter avec les identifiants définis dans `.env.local`

## 🔐 Accès au back-office

### URL d'accès

- **Local** : http://localhost:3000/admin
- **Production** : https://ebeconsulting.fr/admin

### Rôles utilisateurs

Le système utilise 3 rôles avec des permissions différentes :

#### 👑 Admin
- Accès complet à toutes les collections et globals
- Gestion des utilisateurs
- Configuration système
- Suppression de contenu

#### ✏️ Editor
- CRUD sur le contenu (offres, témoignages, FAQ, etc.)
- Pas d'accès à la configuration système
- Pas de suppression (sauf admin)

#### 👁️ Viewer
- Lecture seule
- Aucune modification possible

## 📚 Collections et Globals

### Globals (Singletons)

#### Site Settings (`site-settings`)
Paramètres généraux du site :
- Nom de la marque
- Baseline/tagline
- Email de contact
- Liens réseaux sociaux
- Textes du footer
- CTAs globaux
- SEO par défaut

#### Home Page (`home-page`)
Contenu de la page d'accueil :
- Hero (H1, sous-titre, CTAs, image de fond)
- Badges de preuve
- Introduction méthode
- Toggles d'affichage des sections

#### COPIL Page (`copil-page`)
Contenu de la page Appui COPIL :
- Hero
- Prix mensuel
- Blocs de contenu (missions)
- CTA
- SEO

#### Before After (`before-after`)
Listes Avant/Après pour la section impact

### Collections

#### Offers (`offers`)
Offres d'accompagnement avec :
- Statut (draft/published)
- Ordre d'affichage
- Toggle actif/inactif
- Titre, descriptions
- Objectifs, livrables, bénéfices
- CTAs
- SEO

#### Method Steps (`method-steps`)
Étapes de la méthode (4 étapes)

#### Trust Logos (`trust-logos`)
Logos des entreprises clientes

#### Audiences (`audiences`)
Publics cibles ("Pour qui ?")

#### Testimonials (`testimonials`)
Témoignages clients

#### FAQ Items (`faq-items`)
Questions/réponses FAQ

#### Resources (`resources`)
Articles/ressources (avec drafts)

#### Media (`media`)
Gestion des images avec alt text obligatoire

#### Users (`users`)
Gestion des utilisateurs admin

## 🔄 Revalidation ISR

Le système utilise Next.js ISR (Incremental Static Regeneration) pour mettre à jour automatiquement le site quand le contenu change dans Payload.

### Fonctionnement

Quand vous modifiez du contenu dans Payload :
1. Un hook `afterChange` se déclenche
2. Il appelle l'endpoint `/api/revalidate`
3. Next.js invalide le cache des pages concernées
4. Les pages sont régénérées avec le nouveau contenu

### Pages revalidées automatiquement

- **Home Page** : `/` (quand home-page, method-steps, offers, trust-logos, before-after, testimonials, faq changent)
- **Offres** : `/offres` (quand offers change)
- **COPIL** : `/copil` (quand copil-page change)
- **FAQ** : `/faq` (quand faq-items change)

### Revalidation manuelle

Si nécessaire, vous pouvez revalider manuellement via l'API :

```bash
curl -X POST "http://localhost:3000/api/revalidate?secret=YOUR_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"paths": ["/", "/offres"]}'
```

## 🚢 Déploiement Production (Vercel)

### Prérequis

Pour déployer en production, vous aurez besoin d'une base de données PostgreSQL managée. Options recommandées :

- **Neon** (gratuit jusqu'à 512 MB) : https://neon.tech
- **Supabase** (gratuit jusqu'à 500 MB) : https://supabase.com
- **Vercel Postgres** : Intégré à Vercel
- **Railway** : https://railway.app

### Configuration Vercel

1. **Créer une base de données PostgreSQL** :
   - Créez un compte sur Neon, Supabase ou votre fournisseur préféré
   - Créez une nouvelle base de données
   - Copiez l'URL de connexion (format : `postgresql://user:password@host:port/database`)

2. **Variables d'environnement dans Vercel** :
   
   Allez dans **Settings > Environment Variables** et ajoutez :
   
   ```env
   DATABASE_URL="postgresql://user:password@host:port/database"
   PAYLOAD_SECRET="votre-clé-secrète-32-chars-min"
   NEXT_PUBLIC_SITE_URL="https://ebeconsulting.fr"
   REVALIDATION_SECRET="votre-clé-revalidation"
   ADMIN_EMAIL="admin@ebeconsulting.fr"
   ADMIN_PASSWORD="MotDePasseFort123!"
   ```

   **⚠️ Important** :
   - Générez des clés secrètes fortes (32+ caractères)
   - Utilisez un mot de passe admin fort
   - `NEXT_PUBLIC_SITE_URL` doit être l'URL de production

3. **Déployer** :
   ```bash
   # Connecter le repo à Vercel (première fois)
   vercel

   # Déployer en production
   vercel --prod
   ```

4. **Exécuter le seed en production** (une seule fois) :
   
   Après le premier déploiement, exécutez le seed pour initialiser les données :
   
   ```bash
   # Via Vercel CLI (recommandé)
   vercel env pull .env.production
   npm run seed:force
   
   # Ou via un script de déploiement automatisé
   ```

5. **Storage des médias** :
   - **Dev** : Stockage local (`/media`)
   - **Prod** : Configurez S3 ou Vercel Blob dans `payload.config.ts` (optionnel, le stockage local fonctionne aussi)

### Commandes de déploiement

```bash
# Build de production
npm run build

# Génération des types Payload
npm run payload:generate

# Seed en production (une seule fois)
npm run seed
```

## 📝 Notes importantes

### Ordre d'affichage

Toutes les collections utilisent un champ `order` pour définir l'ordre d'affichage. Les éléments sont triés par `order` ASC.

### Toggle actif/inactif

Le champ `active` permet de masquer un élément sans le supprimer. Seuls les éléments avec `active: true` sont affichés sur le site.

### Statut des offres

Les offres utilisent un système de drafts :
- **Draft** : Non publié, visible uniquement en admin
- **Published** : Publié et visible sur le site

### Rich Text

Les champs `richText` utilisent Slate Editor. Vous pouvez formater le texte (gras, italique, listes, etc.) directement dans l'admin.

### Images

- Tous les uploads d'images nécessitent un **alt text** (obligatoire pour l'accessibilité et le SEO)
- Les images sont optimisées automatiquement par Next.js
- En production, configurez un storage cloud (S3, Vercel Blob)

## 🆘 Dépannage

### Erreur de connexion à la base de données

**Avec Docker** :
```bash
# Vérifier que le conteneur est actif
docker ps

# Vérifier les logs
docker logs ebe_payload_db

# Redémarrer si nécessaire
npm run db:down
npm run db:up
```

**Sans Docker** :
- Vérifiez que PostgreSQL est démarré
- Vérifiez que `DATABASE_URL` dans `.env.local` est correct
- Vérifiez que la base de données existe

### Erreur "PAYLOAD_SECRET is required"

Ajoutez `PAYLOAD_SECRET` dans `.env.local` (minimum 32 caractères). Générez une clé :
```bash
# Windows PowerShell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Minimum 0 -Maximum 256 }))

# Linux/Mac
openssl rand -base64 32
```

### Erreur "Cannot connect to database" au démarrage

1. Vérifiez que Docker est démarré : `docker ps`
2. Vérifiez que PostgreSQL est prêt : `npm run db:wait`
3. Vérifiez `DATABASE_URL` dans `.env.local`

### Le contenu ne se met pas à jour après modification

1. Vérifiez que `REVALIDATION_SECRET` est défini
2. Vérifiez les logs du serveur pour les erreurs de revalidation
3. Revalidez manuellement si nécessaire

### Types TypeScript manquants

Exécutez :
```bash
npm run payload:generate
```

### Le seed échoue avec "relation does not exist"

C'est normal au premier lancement. Payload crée automatiquement les tables au premier accès à `/admin`. 

**Solution** :
1. Démarrer le serveur : `npm run dev`
2. Ouvrir http://localhost:3000/admin (cela créera les tables)
3. Puis exécuter : `npm run seed:force`

### Réinitialiser complètement la base de données

```bash
# Arrêter et supprimer toutes les données
npm run db:reset

# Réexécuter le seed
npm run seed
```

## 📞 Support

Pour toute question sur l'utilisation du back-office Payload, consultez la [documentation officielle](https://payloadcms.com/docs).

