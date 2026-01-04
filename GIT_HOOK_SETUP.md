# Configuration du hook Git pour mise à jour automatique de la date

## Fonctionnement

Un hook Git `pre-commit` a été configuré pour mettre à jour automatiquement la date de dernière mise à jour dans `lib/legal.ts` à chaque commit.

## Fichiers créés

- `scripts/update-last-update.js` : Script Node.js qui met à jour la date
- `.git/hooks/pre-commit` : Hook Git qui exécute le script avant chaque commit

## Utilisation

### Mise à jour manuelle

Vous pouvez mettre à jour la date manuellement en exécutant :

```bash
npm run update-date
```

ou

```bash
node scripts/update-last-update.js
```

### Mise à jour automatique lors des commits

Le hook Git s'exécute automatiquement lors de chaque `git commit`. Il :
1. Met à jour la date dans `lib/legal.ts`
2. Ajoute automatiquement le fichier modifié au commit

## Note importante

Si vous travaillez sur Windows et que le hook ne s'exécute pas automatiquement, vous pouvez :
1. Exécuter manuellement `npm run update-date` avant chaque commit
2. Ou configurer Git pour utiliser le hook PowerShell (`.git/hooks/pre-commit.ps1`)

## Désactiver temporairement le hook

Pour désactiver temporairement le hook lors d'un commit :

```bash
git commit --no-verify
```

