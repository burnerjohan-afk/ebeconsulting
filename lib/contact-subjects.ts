import { content, getContactSubjects } from "./content";

export const CONTACT_SUBJECT_HINT =
  "Choisissez l'accompagnement correspondant le plus à votre besoin actuel.";

export const CONTACT_SUBJECT_OTHER = "Autre demande";

export type ContactSubject = string;

export function getOfferIdToContactSubject(): Record<string, string> {
  const map: Record<string, string> = {};
  for (const phase of content.homepageOffers.phases) {
    map[phase.contactOfferId] = phase.title;
  }
  map.copil = content.copil.title;
  map.audit = content.audits.title;
  return map;
}

/** Conservé pour les imports existants */
export const OFFER_ID_TO_CONTACT_SUBJECT = getOfferIdToContactSubject();

function normalizeSubjectKey(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function buildLegacySubjectAliases(): Record<string, string> {
  const offerMap = getOfferIdToContactSubject();
  const aliases: Record<string, string> = {
    "demande de devis": CONTACT_SUBJECT_OTHER,
    autre: CONTACT_SUBJECT_OTHER,
    "autre demande": CONTACT_SUBJECT_OTHER,
    "clarifier & décider": offerMap.clarifier,
    "structurer & faire grandir": offerMap.structurer,
    "comprendre & prendre du recul": offerMap.comprendre,
    "sécuriser & poser le cadre": offerMap.securiser,
    "appui copil": offerMap.copil,
    "audit / diagnostic": offerMap.audit,
    "offre 1 : clarifier pour décider": offerMap.clarifier,
    "offre 2 : structurer pour faire grandir": offerMap.structurer,
    "offre 3 : prendre du recul pour comprendre": offerMap.comprendre,
    "offre 4 : poser le cadre pour sécuriser": offerMap.securiser,
    "clarifier pour décider": offerMap.clarifier,
    "structurer pour faire grandir": offerMap.structurer,
    "prendre du recul pour comprendre": offerMap.comprendre,
    "poser le cadre pour sécuriser": offerMap.securiser,
  };

  for (const offer of content.offers.list) {
    aliases[normalizeSubjectKey(offer.title)] = offerMap[offer.id];
    if (offer.subtitle) {
      aliases[normalizeSubjectKey(offer.subtitle)] = offerMap[offer.id];
    }
  }

  for (const phase of content.homepageOffers.phases) {
    aliases[normalizeSubjectKey(phase.title)] = offerMap[phase.contactOfferId];
    aliases[normalizeSubjectKey(phase.tag)] = offerMap[phase.contactOfferId];
  }

  aliases[normalizeSubjectKey(content.copil.title)] = offerMap.copil;
  aliases[normalizeSubjectKey(content.audits.title)] = offerMap.audit;

  return aliases;
}

const LEGACY_SUBJECT_ALIASES = buildLegacySubjectAliases();

export function resolveContactSubject(
  urlSubject: string | null,
  urlOffer: string | null
): string {
  const offerMap = getOfferIdToContactSubject();

  if (urlOffer && offerMap[urlOffer]) {
    return offerMap[urlOffer];
  }

  if (!urlSubject) return "";

  const normalized = normalizeSubjectKey(urlSubject);
  const alias = LEGACY_SUBJECT_ALIASES[normalized];
  if (alias) return alias;

  const exact = getContactSubjects().find(
    (s) => normalizeSubjectKey(s) === normalized
  );
  if (exact) return exact;

  const withoutOffrePrefix = normalized.replace(/^offre\s*:\s*/, "");
  const fromPrefix = LEGACY_SUBJECT_ALIASES[withoutOffrePrefix];
  if (fromPrefix) return fromPrefix;

  return "";
}

const ACCOMPAGNEMENT_LINE_REGEX =
  /^Je suis intéressé\(e\) par l'accompagnement : .+$/m;

export function buildDevisPrefillMessage(subject: string): string {
  return `Bonjour,\n\nJe suis intéressé(e) par l'accompagnement : ${subject}.\n\nPourriez-vous me faire parvenir un devis personnalisé ?\n\nMerci par avance.`;
}

/** Message généré automatiquement (modèle devis) — pas une saisie libre */
export function isDevisPrefillMessage(message: string): boolean {
  const trimmed = message.trim();
  return (
    trimmed.startsWith("Bonjour,") &&
    trimmed.includes("Je suis intéressé(e) par l'accompagnement :") &&
    trimmed.includes("Pourriez-vous me faire parvenir un devis personnalisé")
  );
}

/** Aligne la ligne d'accompagnement dans le message sur le choix du menu */
export function syncAccompagnementInMessage(
  message: string,
  subject: string
): string {
  if (!subject.trim()) return message;

  if (isDevisPrefillMessage(message) || message.trim() === "") {
    return buildDevisPrefillMessage(subject);
  }

  if (ACCOMPAGNEMENT_LINE_REGEX.test(message)) {
    return message.replace(
      ACCOMPAGNEMENT_LINE_REGEX,
      `Je suis intéressé(e) par l'accompagnement : ${subject}.`
    );
  }

  return message;
}

export const CONTACT_PATH = "/contact";

/** Menu / footer — formulaire vierge */
export function contactHref(): string {
  return CONTACT_PATH;
}

/** Demande de devis ou « Parlons de votre situation » — même préremplissage */
export function contactHrefDevis(): string {
  return contactHrefWithSubject(CONTACT_SUBJECT_OTHER);
}

export const contactHrefParlons = contactHrefDevis;

export function contactHrefWithSubject(subject: string): string {
  return `${CONTACT_PATH}?subject=${encodeURIComponent(subject)}`;
}

/** Lien depuis une offre (accueil, fiches offres, Parlons-en) */
export function contactHrefForOffer(offerId: string): string {
  const offerMap = getOfferIdToContactSubject();
  const subject = offerMap[offerId] ?? CONTACT_SUBJECT_OTHER;
  return `${CONTACT_PATH}?subject=${encodeURIComponent(subject)}&offer=${encodeURIComponent(offerId)}`;
}
