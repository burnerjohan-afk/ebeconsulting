# Instructions pour connecter le projet à GitHub

## Étape 1 : Créer un nouveau repository sur GitHub

1. Allez sur [GitHub.com](https://github.com) et connectez-vous
2. Cliquez sur le bouton **"+"** en haut à droite, puis **"New repository"**
3. Remplissez les informations :
   - **Repository name** : `ebe-consulting` (ou le nom de votre choix)
   - **Description** : "Site web EBE Consulting - Next.js 15"
   - **Visibilité** : Choisissez Public ou Private
   - **NE COCHEZ PAS** "Initialize this repository with a README" (on a déjà un README)
4. Cliquez sur **"Create repository"**

## Étape 2 : Connecter votre projet local à GitHub

Après avoir créé le repository, GitHub vous donnera des instructions. Utilisez ces commandes dans votre terminal :

```bash
# Ajouter le remote GitHub (remplacez VOTRE_USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/VOTRE_USERNAME/ebe-consulting.git

# Renommer la branche principale en 'main' (si nécessaire)
git branch -M main

# Pousser le code vers GitHub
git push -u origin main
```

## Alternative : Avec SSH

Si vous préférez utiliser SSH au lieu de HTTPS :

```bash
git remote add origin git@github.com:VOTRE_USERNAME/ebe-consulting.git
git branch -M main
git push -u origin main
```

## Étape 3 : Vérification

Après avoir poussé le code, rafraîchissez la page GitHub. Vous devriez voir tous vos fichiers !

## Commandes Git utiles pour la suite

```bash
# Voir l'état des fichiers
git status

# Ajouter des fichiers modifiés
git add .

# Faire un commit
git commit -m "Description de vos modifications"

# Pousser vers GitHub
git push

# Récupérer les dernières modifications
git pull
```

## Déploiement automatique (optionnel)

Une fois connecté à GitHub, vous pouvez facilement déployer sur Vercel :

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez votre compte GitHub
3. Importez le repository `ebe-consulting`
4. Vercel détectera automatiquement Next.js et déploiera votre site !

