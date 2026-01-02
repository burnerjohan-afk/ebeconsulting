import { Metadata } from "next";
import { notFound } from "next/navigation";
import { content } from "@/lib/content";
import Button from "@/components/ui/Button";
import Card from "@/components/Card";
import PageHero from "@/components/PageHero";
import OfferDetailCards from "@/components/OfferDetailCards";

interface OfferDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: OfferDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const offer = content.offers.list.find((o) => o.id === id);

  if (!offer) {
    return {
      title: "Offre non trouvée",
    };
  }

  return {
    title: `${offer.title} | ${offer.subtitle}`,
    description: offer.description,
    openGraph: {
      title: `${offer.title} | EBE Consulting`,
      description: offer.description,
    },
  };
}

export default async function OfferDetailPage({ params }: OfferDetailPageProps) {
  const { id } = await params;
  const offer = content.offers.list.find((o) => o.id === id);

  if (!offer) {
    notFound();
  }

  // Images selon le type d'offre
  const offerImages: Record<string, string> = {
    clarifier: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
    structurer: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084",
    comprendre: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2070",
    securiser: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
  };

  const imageUrl = offerImages[id] || "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070";

  return (
    <div>
      {/* Hero avec image selon l'offre */}
      <PageHero
        title={offer.title}
        subtitle={`${offer.subtitle} — ${offer.description}`}
        imageUrl={imageUrl}
        overlayOpacity={0.35}
      />

      <div className="pb-16">

      {/* Objectives */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card>
              <h2 className="text-2xl font-bold text-primary-900 mb-6">
                Objectifs
              </h2>
              <ul className="space-y-3">
                {offer.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-accent-600 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-neutral-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-8">
              Livrables
            </h2>
            <OfferDetailCards
              deliverables={offer.deliverables}
              benefits={[]}
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-8">
              Bénéfices
            </h2>
            <OfferDetailCards
              deliverables={[]}
              benefits={offer.benefits}
            />
          </div>
        </div>
      </section>

      {/* CTA Section principale */}
      <section className="section-padding bg-gradient-to-br from-accent-600 to-accent-700 text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à démarrer ?
            </h2>
            <p className="text-xl text-accent-100 mb-8">
              Demandez un devis personnalisé pour cette offre et recevez une proposition adaptée à vos besoins sous 48h.
            </p>
            <Button
              href={`/contact?subject=${encodeURIComponent(`Demande de devis - ${offer.title}`)}&offer=${offer.id}`}
              variant="primary"
              className="text-lg px-10 py-5 bg-white text-accent-700 hover:bg-neutral-100 shadow-xl transform hover:scale-105 transition-all"
            >
              <svg
                className="w-5 h-5 mr-2 inline"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Demander un devis gratuit
            </Button>
            <p className="text-sm text-accent-200 mt-4">
              Réponse sous 48h ouvrées • Devis gratuit et sans engagement
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section secondaire */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <h3 className="text-2xl font-bold text-primary-900 mb-4">
            Besoin de plus d'informations ?
          </h3>
          <p className="text-lg text-neutral-700 mb-8">
            Échangeons sur votre situation ou découvrez nos autres offres.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
              Parler de votre situation
            </Button>
            <Button
              href="/offres"
              variant="secondary"
              className="text-lg px-8 py-4"
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

