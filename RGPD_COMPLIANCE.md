# Conformité RGPD - EBE Consulting

## ✅ Implémentation réalisée

### 1. Pages légales créées/mises à jour

- ✅ `/mentions-legales` - Mentions légales complètes
- ✅ `/confidentialite` - Politique de confidentialité RGPD complète
- ✅ `/cookies` - Politique de cookies + gestion du consentement

### 2. Système de gestion des cookies

- ✅ **CookieBanner** (`components/legal/CookieBanner.tsx`)
  - Affiché au premier chargement si aucun consentement
  - 3 options : "Tout accepter", "Tout refuser", "Personnaliser"
  - Stockage dans localStorage (durée : 6 mois)
  
- ✅ **CookiePreferences** (`components/legal/CookiePreferences.tsx`)
  - Accessible depuis `/cookies` et depuis le footer
  - Gestion par catégorie : Essentiels, Analytics, Marketing, Fonctionnels
  - Les cookies essentiels ne peuvent pas être désactivés

### 3. Formulaire de contact conforme

- ✅ Case à cocher obligatoire (non pré-cochée) pour le consentement RGPD
- ✅ Validation côté client et serveur
- ✅ Message d'information sur l'utilisation des données
- ✅ Lien vers la politique de confidentialité
- ✅ Honeypot anti-spam (déjà présent)

### 4. Footer mis à jour

- ✅ Section "Légal" avec liens :
  - Mentions légales
  - Politique de confidentialité
  - Gérer mes cookies
- ✅ Mention RGPD : "Données personnelles : le site applique les principes RGPD. Détails : Politique de confidentialité."

### 5. Configuration centralisée

- ✅ `lib/legal.ts` : Configuration légale centralisée
  - Informations entreprise
  - Hébergeur
  - Durées de conservation
  - Configuration cookies

## 📋 À compléter

### Informations légales à renseigner dans `lib/legal.ts` :

```typescript
company: {
  legalName: "[À compléter - Raison sociale complète]",
  address: "[À compléter - Adresse complète]",
  siret: "[À compléter - Numéro SIRET]",
  rcs: "[À compléter - Numéro RCS si applicable]",
  publicationDirector: "[À compléter - Nom du directeur de publication]",
  phone: "[À compléter - Téléphone]",
},
hosting: {
  name: "[À compléter - Nom de l'hébergeur, ex: Vercel, OVH, etc.]",
  address: "[À compléter - Adresse de l'hébergeur]",
},
lastUpdate: "[À compléter - Date de dernière mise à jour, ex: 15 janvier 2025]",
```

### Cookies analytics (si utilisé)

Si vous utilisez Google Analytics ou un autre outil d'analyse, compléter dans `lib/legal.ts` :

```typescript
analyticsCookies: [
  {
    name: "[Nom du cookie, ex: _ga]",
    purpose: "[Description du cookie]",
    duration: "[Durée, ex: 2 ans]",
    type: "Mesure d'audience",
  },
],
```

## 🔒 Conformité RGPD

### Principes respectés

1. **Consentement explicite** : Aucun cookie non essentiel sans consentement
2. **Refus aussi simple que l'acceptation** : Bouton "Tout refuser" au même niveau
3. **Information transparente** : Politique de confidentialité détaillée
4. **Droits des personnes** : Section dédiée avec email de contact RGPD
5. **Durées de conservation** : Définies et documentées
6. **Sécurité** : Mention des mesures de protection

### Checklist de validation

- [ ] Ouvrir le site en navigation privée : aucun cookie non essentiel déposé avant choix
- [ ] "Tout refuser" : aucun script analytics/marketing ne se charge
- [ ] "Tout accepter" : scripts autorisés (si analytics configuré)
- [ ] "Personnaliser" : choix mémorisé
- [ ] Le lien "Gérer mes cookies" rouvre les préférences
- [ ] Formulaire : impossible d'envoyer sans consentement
- [ ] Vérifier que les informations légales sont complétées

## 📝 Notes importantes

- **Ne jamais affirmer "100% conforme RGPD"** : Utiliser "Le site applique les principes RGPD"
- **Consentement cookies** : Durée de 6 mois (recommandation CNIL)
- **Analytics** : Actuellement désactivé par défaut. Si vous souhaitez l'activer, utiliser `hasConsent('analytics')` pour conditionner le chargement
- **Transferts hors UE** : Si vous utilisez Calendly, Google Analytics, etc., mentionner les garanties (DPA, SCC) dans la politique de confidentialité

## 🔧 Utilisation technique

### Vérifier le consentement

```typescript
import { hasConsent } from '@/lib/legal';

// Dans un composant client
if (hasConsent('analytics')) {
  // Charger Google Analytics ou autre
}
```

### Sauvegarder un consentement

```typescript
import { saveConsent } from '@/lib/legal';

saveConsent({
  essential: true,
  analytics: true,
  marketing: false,
  functional: true,
});
```

## 📞 Contact RGPD

Email pour exercer les droits RGPD : `contact@ebe-consulting.fr` (configurable dans `lib/legal.ts`)

---

**Dernière mise à jour** : Janvier 2025

