import { content } from "./content";

export type OfferListItem = (typeof content.offers.list)[number];
export type OfferPhase = (typeof content.homepageOffers.phases)[number] & {
  detailHref?: string;
  outcome?: string;
};

function mergeUniqueItems(primary: string[], secondary: string[]) {
  const normalized = new Set(primary.map((item) => item.toLowerCase().trim()));
  const extras = secondary.filter((item) => {
    const key = item.toLowerCase().trim();
    if (normalized.has(key)) return false;
    normalized.add(key);
    return true;
  });
  return [...primary, ...extras];
}

export function getAllOfferPhases(): OfferPhase[] {
  return [
    ...content.homepageOffers.phases,
    ...(content.homepageOffers.supplementaryPhases ?? []),
  ];
}

export function getOfferPhaseById(id: string): OfferPhase | undefined {
  return getAllOfferPhases().find((phase) => phase.contactOfferId === id);
}

export function getOfferListItem(id: string): OfferListItem | undefined {
  return content.offers.list.find((offer) => offer.id === id);
}

export function getMergedOfferDetail(id: string) {
  const phase = getOfferPhaseById(id);
  const legacy = getOfferListItem(id);

  if (!phase && !legacy) {
    return null;
  }

  const phaseDeliverables = phase?.deliverables ?? [];
  const legacyDeliverables = legacy?.deliverables ?? [];

  return {
    id,
    phase,
    legacy,
    heroTitle: phase?.title ?? legacy!.title,
    heroSubtitle: phase
      ? `${phase.tag} · ${legacy?.subtitle ?? phase.hook}`
      : legacy!.subtitle,
    hook: phase?.hook,
    description: phase?.description ?? legacy!.description,
    result: phase?.result,
    tag: phase?.tag,
    number: phase?.number,
    deliverables: mergeUniqueItems(phaseDeliverables, legacyDeliverables),
    objectives: legacy?.objectives ?? [],
    benefits: legacy?.benefits ?? [],
    contactTitle: phase?.title ?? legacy!.title,
    legacyTitle: legacy?.title,
  };
}

export const offerDetailIds = content.offers.list.map((offer) => offer.id);
