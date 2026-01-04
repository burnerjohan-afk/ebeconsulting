import { Metadata } from "next";
import { content } from "@/lib/content";
import Button from "@/components/ui/Button";
import PageHero from "@/components/PageHero";
import OffersPageCards from "@/components/OffersPageCards";

export const metadata: Metadata = {
  title: "Offres d'accompagnement dirigeant - EBE Consulting",
  description:
    "4 offres d'accompagnement pour dirigeants TPE/PME : clarifier pour décider, structurer pour grandir, comprendre, sécuriser. Solutions sur mesure.",
  alternates: {
    canonical: "https://ebeconsulting.fr/offres",
  },
  openGraph: {
    title: "Offres d'accompagnement dirigeant | EBE Consulting",
    description:
      "4 offres d'accompagnement pour dirigeants TPE/PME : clarifier pour décider, structurer pour grandir, comprendre, sécuriser. Solutions sur mesure.",
    url: "https://ebeconsulting.fr/offres",
  },
};

export default function OffersPage() {
  return (
    <div>
      {/* Hero avec image */}
      <PageHero
        title={content.offers.title}
        subtitle={content.offers.subtitle}
        imageUrl="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2070"
        overlayOpacity={0.35}
      />

      <div className="pb-16">
        {/* Offers Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <OffersPageCards />

          {/* COPIL CTA */}
          <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Appui au Comité de Pilotage</h2>
            <p className="text-lg text-primary-100 mb-6">
              Accompagnement stratégique mensuel — Forfait 3 000 € HT/mois
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact?subject=Appui COPIL&offer=copil"
                variant="primary"
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
    </div>
  );
}

