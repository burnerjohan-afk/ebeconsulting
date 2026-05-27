# EBE Consulting - Site Web

Site web professionnel pour EBE Consulting, cabinet d'accompagnement des dirigeants TPE/PME.

## 🚀 Technologies

- **Next.js 15** (App Router) avec TypeScript
- **Tailwind CSS** pour le styling
- **Framer Motion** pour les animations
- **next-seo** pour l'optimisation SEO

## 📋 Prérequis

- Node.js 18+ 
- npm, yarn ou pnpm

## 🛠️ Installation

1. **Cloner le projet** (si applicable) ou naviguer dans le dossier du projet

2. **Installer les dépendances** :

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

## 🏃 Développement

Lancer le serveur de développement :

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🏗️ Build de production

Créer une version optimisée pour la production :

```bash
npm run build
# ou
yarn build
# ou
pnpm build
```

Lancer le serveur de production :

```bash
npm start
# ou
yarn start
# ou
pnpm start
```

## 📁 Structure du projet

```
ebe-consulting/
├── app/                    # Pages Next.js (App Router)
│   ├── page.tsx           # Page d'accueil
│   ├── layout.tsx         # Layout principal
│   ├── globals.css        # Styles globaux
│   ├── offres/            # Pages offres
│   ├── copil/             # Page COPIL
│   ├── a-propos/          # Page À propos
│   ├── contact/           # Page Contact
│   ├── ressources/        # Page Ressources
│   ├── mentions-legales/  # Mentions légales
│   └── confidentialite/   # Politique de confidentialité
├── components/            # Composants React réutilisables
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── ContactForm.tsx
│   ├── FAQ.tsx
│   ├── Hero.tsx
│   ├── SocialLinks.tsx
│   ├── StructuredData.tsx
│   └── FAQSchema.tsx
├── lib/                   # Utilitaires et configuration
│   ├── content.ts         # Contenu centralisé
│   └── theme.ts           # Configuration du thème
├── public/                # Fichiers statiques
│   └── image/
│       └── logo.PNG       # Logo de l'entreprise
└── package.json
```

## ⚙️ Variables d'environnement

Créer un fichier `.env.local` à la racine du projet :

```env
# Voir env.local.example pour la liste complète.

# SMTP OVH (messagerie eb@ebeconsulting.fr)
EMAIL_TO=eb@ebeconsulting.fr
EMAIL_FROM=EBE Consulting <eb@ebeconsulting.fr>
SMTP_HOST=ssl0.ovh.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=eb@ebeconsulting.fr
SMTP_PASS=mot_de_passe_boite_mail_ovh

NEXT_PUBLIC_SITE_URL=https://ebeconsulting.fr
```

## 📧 Configuration du formulaire de contact (OVH)

Le formulaire envoie les demandes via **Nodemailer** et le SMTP OVH (`ssl0.ovh.net`).

1. Dans l’[Espace client OVH](https://www.ovh.com/manager/) : **Web Cloud → Emails → ebeconsulting.fr** → compte `eb@ebeconsulting.fr`.
2. Utiliser le **mot de passe de la boîte mail** (pas celui de l’espace client).
3. Renseigner les variables dans `.env.local` (local) et dans **Vercel → Settings → Environment Variables** (production).
4. **Port 587** + `SMTP_SECURE=false` (STARTTLS), ou **port 465** + `SMTP_SECURE=true` si 587 échoue.

Sans SMTP configuré, le site propose un fallback `mailto:eb@ebeconsulting.fr`.

## 🎨 Personnalisation

### Couleurs

Les couleurs sont définies dans `tailwind.config.ts` et `lib/theme.ts`. Modifier ces fichiers pour changer la palette.

### Contenu

Tout le contenu textuel est centralisé dans `lib/content.ts`. Modifier ce fichier pour mettre à jour les textes.

## 🔍 SEO

Le site inclut :
- Métadonnées optimisées (titles, descriptions, OpenGraph)
- Schema.org (Organization, ProfessionalService, FAQPage)
- Structure sémantique HTML5
- URLs propres et descriptives

## 📱 Responsive

Le site est entièrement responsive (mobile-first) avec des breakpoints :
- Mobile : < 768px
- Tablet : 768px - 1024px
- Desktop : > 1024px

## 🚢 Déploiement

### Vercel (recommandé)

1. Connecter votre repository GitHub
2. Importer le projet sur Vercel
3. Les variables d'environnement seront demandées lors du déploiement

### Autres plateformes

Le site peut être déployé sur :
- Netlify
- AWS Amplify
- Cloudflare Pages
- Tout hébergeur supportant Next.js

## 📝 Notes importantes

- **Mentions légales** : Compléter les informations dans `app/mentions-legales/page.tsx` (raison sociale, adresse, SIRET, etc.)
- **Politique de confidentialité** : Vérifier et compléter `app/confidentialite/page.tsx`
- **Logo** : Le logo se trouve dans `/public/image/logo.PNG`
- **Email** : Configurer le service d'email pour le formulaire de contact
- **Réseaux sociaux** : Mettre à jour les URLs dans `components/SocialLinks.tsx`

## 🐛 Dépannage

### Erreurs de build

- Vérifier que toutes les dépendances sont installées
- Vérifier la version de Node.js (18+)
- Supprimer `.next` et `node_modules`, puis réinstaller

### Problèmes de styles

- Vérifier que Tailwind CSS est bien configuré
- Vérifier les imports dans `app/globals.css`

## 📄 Licence

Propriétaire - EBE Consulting

## 👤 Support

Pour toute question technique, contactez : eb@ebeconsulting.fr
