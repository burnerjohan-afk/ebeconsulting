/** Libellés du menu « Demande de devis » — version courte, lisible sur mobile */
export const CONTACT_SUBJECTS = [
  "Clarifier & décider",
  "Structurer & faire grandir",
  "Comprendre & prendre du recul",
  "Sécuriser & poser le cadre",
  "Appui COPIL",
  "Audit / Diagnostic",
  "Autre demande",
] as const;

export type ContactSubject = (typeof CONTACT_SUBJECTS)[number];

export const CONTACT_SUBJECT_HINT =
  "Choisissez l'accompagnement correspondant le plus à votre besoin actuel.";

export const OFFER_ID_TO_CONTACT_SUBJECT: Record<string, ContactSubject> = {
  clarifier: "Clarifier & décider",
  structurer: "Structurer & faire grandir",
  comprendre: "Comprendre & prendre du recul",
  securiser: "Sécuriser & poser le cadre",
  copil: "Appui COPIL",
  audit: "Audit / Diagnostic",
};

const LEGACY_SUBJECT_ALIASES: Record<string, ContactSubject> = {
  "demande de devis": "Autre demande",
  "appui copil": "Appui COPIL",
  "audit / diagnostic": "Audit / Diagnostic",
  autre: "Autre demande",
  "offre 1 : clarifier pour décider": "Clarifier & décider",
  "offre 2 : structurer pour faire grandir": "Structurer & faire grandir",
  "offre 3 : prendre du recul pour comprendre": "Comprendre & prendre du recul",
  "offre 4 : poser le cadre pour sécuriser": "Sécuriser & poser le cadre",
  "clarifier pour décider": "Clarifier & décider",
  "structurer pour faire grandir": "Structurer & faire grandir",
  "prendre du recul pour comprendre": "Comprendre & prendre du recul",
  "poser le cadre pour sécuriser": "Sécuriser & poser le cadre",
};

function normalizeSubjectKey(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

export function resolveContactSubject(
  urlSubject: string | null,
  urlOffer: string | null
): ContactSubject | "" {
  if (urlOffer && OFFER_ID_TO_CONTACT_SUBJECT[urlOffer]) {
    return OFFER_ID_TO_CONTACT_SUBJECT[urlOffer];
  }

  if (!urlSubject) return "";

  const normalized = normalizeSubjectKey(urlSubject);
  const alias = LEGACY_SUBJECT_ALIASES[normalized];
  if (alias) return alias;

  const exact = CONTACT_SUBJECTS.find(
    (s) => normalizeSubjectKey(s) === normalized
  );
  if (exact) return exact;

  const withoutOffrePrefix = normalized.replace(/^offre\s*:\s*/, "");
  const fromPrefix = LEGACY_SUBJECT_ALIASES[withoutOffrePrefix];
  if (fromPrefix) return fromPrefix;

  return "";
}

export function buildDevisPrefillMessage(subject: string): string {
  return `Bonjour,\n\nJe suis intéressé(e) par l'accompagnement : ${subject}.\n\nPourriez-vous me faire parvenir un devis personnalisé ?\n\nMerci par avance.`;
}

export function contactHrefForOffer(offerId: string): string {
  const subject =
    OFFER_ID_TO_CONTACT_SUBJECT[offerId] ?? ("Autre demande" as ContactSubject);
  return `/contact?subject=${encodeURIComponent(subject)}&offer=${encodeURIComponent(offerId)}`;
}
