import { Metadata } from "next";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import PageHero from "@/components/PageHero";
import OfferDetailCards from "@/components/OfferDetailCards";
import OfferDetailOverview from "@/components/OfferDetailOverview";
import OfferDetailObjectives from "@/components/OfferDetailObjectives";
import BackButton from "@/components/BackButton";
import { getMergedOfferDetail, offerDetailIds } from "@/lib/offers";
import { pageImages } from "@/lib/page-images";

interface OfferDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return offerDetailIds.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: OfferDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const offer = getMergedOfferDetail(id);

  if (!offer) {
    return { title: "Offre non trouvée" };
  }

  return {
    title: `${offer.heroTitle} | EBE Consulting`,
    description: offer.description,
    alternates: {
      canonical: `https://ebeconsulting.fr/offres/${id}`,
    },
    openGraph: {
      title: `${offer.heroTitle} | EBE Consulting`,
      description: offer.description,
      url: `https://ebeconsulting.fr/offres/${id}`,
    },
  };
}

export default async function OfferDetailPage({ params }: OfferDetailPageProps) {
  const { id } = await params;
  const offer = getMergedOfferDetail(id);

  if (!offer) {
    notFound();
  }

  const imageUrl =
    pageImages.offers[id as keyof typeof pageImages.offers] ?? pageImages.offers.default;

  return (
    <div className="relative">
      <BackButton href="/offres" label="Retour aux offres" />

      <PageHero
        title={offer.heroTitle}
        subtitle={offer.heroSubtitle}
        imageUrl={imageUrl}
        overlayOpacity={0.35}
      />

      <div className="pb-16">
        <section className="section-padding section-charte section-separator">
          <div className="container-custom max-w-4xl mx-auto">
            <OfferDetailOverview
              tag={offer.tag}
              number={offer.number}
              hook={offer.hook}
              description={offer.description}
              result={offer.result}
            />
          </div>
        </section>

        {offer.objectives.length > 0 && (
          <section className="section-padding section-charte-alt section-separator">
            <div className="container-custom max-w-4xl mx-auto">
              <OfferDetailObjectives objectives={offer.objectives} />
            </div>
          </section>
        )}

        {offer.deliverables.length > 0 && (
          <section className="section-padding section-charte section-separator">
            <div className="container-custom max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-ebe-anthraciteDark mb-8">
                Livrables
              </h2>
              <OfferDetailCards deliverables={offer.deliverables} benefits={[]} />
            </div>
          </section>
        )}

        {offer.benefits.length > 0 && (
          <section className="section-padding section-charte-alt section-separator">
            <div className="container-custom max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-ebe-anthraciteDark mb-8">
                Bénéfices
              </h2>
              <OfferDetailCards deliverables={[]} benefits={offer.benefits} />
            </div>
          </section>
        )}

        <section className="section-padding bg-ebe-anthraciteDark text-white">
          <div className="container-custom text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à démarrer ?</h2>
            <p className="text-lg text-white/75 mb-8">
              Demandez un devis personnalisé pour « {offer.contactTitle} » et recevez une
              proposition adaptée à vos besoins sous 48h.
            </p>
            <Button
              href={`/contact?subject=${encodeURIComponent(`Offre : ${offer.contactTitle}`)}&offer=${offer.id}`}
              variant="primary"
              className="text-lg px-10 py-5 !bg-white !text-ebe-anthraciteDark hover:!bg-ebe-warmWhite shadow-xl font-bold"
            >
              Demander un devis gratuit
            </Button>
            <p className="text-sm text-white/50 mt-4">
              Réponse sous 48h ouvrées · Devis gratuit et sans engagement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button href="/contact" variant="secondary" className="text-base px-8 py-4">
                Parler de votre situation
              </Button>
              <Button
                href="/offres"
                variant="secondary"
                className="text-base px-8 py-4 bg-white/10 text-white border-white/30 hover:bg-white/20"
              >
                Voir les autres offres
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
