import { Metadata } from "next";
import Link from "next/link";
import { content } from "@/lib/content";
import Card from "@/components/Card";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Nos offres d'accompagnement",
  description:
    "Découvrez nos 4 offres d'accompagnement pour dirigeants TPE/PME : clarifier pour décider, structurer pour faire grandir, comprendre, sécuriser.",
  openGraph: {
    title: "Nos offres d'accompagnement | EBE Consulting",
    description:
      "Des solutions adaptées aux besoins des dirigeants TPE/PME en croissance ou transformation.",
  },
};

export default function OffersPage() {
  return (
    <div className="pt-32 pb-16">
      {/* Header */}
      <section className="section-padding bg-gradient-to-b from-white to-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              {content.offers.title}
            </h1>
            <p className="text-xl text-neutral-700 mb-8">
              {content.offers.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {content.offers.list.map((offer) => (
              <Card key={offer.id} className="hover:border-primary-900">
                <div className="mb-4">
                  <span className="text-sm font-semibold text-accent-600 uppercase tracking-wide">
                    {offer.subtitle}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-primary-900 mb-4">
                  {offer.title}
                </h2>
                <p className="text-neutral-700 mb-6">{offer.description}</p>

                <div className="mb-6">
                  <h3 className="font-semibold text-primary-900 mb-2">
                    Objectifs :
                  </h3>
                  <ul className="space-y-1 text-sm text-neutral-600">
                    {offer.objectives.slice(0, 3).map((obj, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-4 h-4 text-accent-600 mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <Button
                    href={`/contact?subject=${encodeURIComponent(`Offre : ${offer.title}`)}&offer=${offer.id}`}
                    variant="primary"
                    className="flex-1"
                  >
                    Demander un devis
                  </Button>
                  <Link
                    href={`/offres/${offer.id}`}
                    className="text-primary-900 font-semibold hover:text-accent-600 transition-colors inline-flex items-center justify-center px-4 py-2 border-2 border-primary-900 rounded-lg hover:bg-primary-50"
                  >
                    En savoir plus
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* COPIL CTA */}
          <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Appui au Comité de Pilotage</h2>
            <p className="text-lg text-primary-100 mb-6">
              Accompagnement stratégique mensuel — Forfait 3 000 € HT/mois
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact?subject=Appui COPIL&offer=copil"
                variant="accent"
                className="text-lg px-8 py-4"
              >
                Demander un devis
              </Button>
              <Button
                href="/copil"
                variant="secondary"
                className="text-lg px-8 py-4 bg-white/10 text-white border-2 border-white hover:bg-white/20"
              >
                Découvrir l'appui COPIL
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">
            Besoin d'un accompagnement sur mesure ?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Échangeons sur votre situation et définissons ensemble la meilleure
            approche.
          </p>
          <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
            Parler de votre situation
          </Button>
        </div>
      </section>
    </div>
  );
}

