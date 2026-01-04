/**
 * Configuration légale et RGPD pour EBE Consulting
 * À compléter avec les informations réelles de l'entreprise
 */

export const legalConfig = {
  company: {
    name: "EBE Consulting",
    legalName: "SELECT SERVICES",
    address: "BATIMENT HORIZON - BOITE 7\n4 RUE DE L'ASTROLABE\n97354 REMIRE-MONTJOLY",
    siret: "92881565300011",
    email: "contact@ebe-consulting.fr",
    rgpdEmail: "contact@select.fr", // Email pour exercer les droits RGPD
  },
  hosting: {
    name: "OVH",
    address: "2 rue Kellermann\n59100 Roubaix\nFrance",
  },
  cookies: {
    consentDuration: 6, // Durée du consentement en mois (recommandé 6 mois en France)
    essentialCookies: [
      {
        name: "cookie-consent",
        purpose: "Mémorisation du choix de consentement aux cookies",
        duration: "6 mois",
        type: "Technique",
      },
    ],
    analyticsCookies: [
      {
        name: "[À compléter si analytics utilisé]",
        purpose: "[À compléter]",
        duration: "[À compléter]",
        type: "Mesure d'audience",
      },
    ],
  },
  dataRetention: {
    contactRequests: "12-24 mois",
    prospects: "3 ans maximum après dernier contact",
    technicalLogs: "12 mois maximum",
  },
  lastUpdate: "3 janvier 2026",
};

export type CookieConsent = {
  essential: boolean; // Toujours true, ne peut pas être désactivé
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  timestamp: number; // Date du consentement
};

export const COOKIE_CONSENT_KEY = "ebe-consulting-cookie-consent";

/**
 * Vérifie si un consentement existe et est valide
 */
export function hasConsent(category: keyof Omit<CookieConsent, "essential" | "timestamp">): boolean {
  if (typeof window === "undefined") return false;

  try {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) return false;

    const parsed: CookieConsent = JSON.parse(consent);
    const now = Date.now();
    const sixMonths = 6 * 30 * 24 * 60 * 60 * 1000; // 6 mois en millisecondes

    // Vérifier si le consentement est encore valide (moins de 6 mois)
    if (now - parsed.timestamp > sixMonths) {
      localStorage.removeItem(COOKIE_CONSENT_KEY);
      return false;
    }

    return parsed[category] === true;
  } catch {
    return false;
  }
}

/**
 * Récupère le consentement complet
 */
export function getConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) return null;
    return JSON.parse(consent) as CookieConsent;
  } catch {
    return null;
  }
}

/**
 * Sauvegarde le consentement
 */
export function saveConsent(consent: Omit<CookieConsent, "timestamp">): void {
  if (typeof window === "undefined") return;

  const fullConsent: CookieConsent = {
    ...consent,
    essential: true, // Toujours true
    timestamp: Date.now(),
  };

  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(fullConsent));
}

/**
 * Supprime le consentement
 */
export function clearConsent(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(COOKIE_CONSENT_KEY);
}

