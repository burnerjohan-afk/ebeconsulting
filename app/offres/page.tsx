import { Metadata } from "next";
import { content } from "@/lib/content";
import Button from "@/components/ui/Button";
import PageHero from "@/components/PageHero";
import OffersPageCards from "@/components/OffersPageCards";
import { pageImages } from "@/lib/page-images";

export const metadata: Metadata = {
  title: "Offres d'accompagnement dirigeant - EBE Consulting",
  description:
    "Quatre façons d'intervenir pour une efficacité réelle : diagnostic, structuration, accompagnement dirigeant, management de transition. À partir d'une lecture terrain.",
  alternates: {
    canonical: "https://ebeconsulting.fr/offres",
  },
  openGraph: {
    title: "Les offres EBE Consulting | EBE Consulting",
    description:
      "Quatre façons d'intervenir, une seule exigence : l'efficacité réelle. Chaque mission démarre par une lecture terrain.",
    url: "https://ebeconsulting.fr/offres",
  },
};

export default function OffersPage() {
  const { offers, copil } = content;

  return (
    <div>
      <PageHero
        title={offers.title}
        subtitle={offers.subtitle}
        imageUrl={pageImages.hero.offers}
        overlayOpacity={0.35}
      />

      <div className="pb-16">
        <section className="section-padding section-charte section-separator">
          <div className="container-custom">
            <OffersPageCards />

            <div className="relative overflow-hidden bg-ebe-anthraciteDark rounded-xl p-8 md:p-10 text-white text-center max-w-5xl mx-auto mt-4">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: `url(${pageImages.hero.offersCopilCard})` }}
                aria-hidden
              />
              <div className="absolute inset-0 bg-ebe-anthraciteDark/85" aria-hidden />
              <div className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ebe-orange mb-3">
                  Offre complémentaire
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">{copil.title}</h2>
                <p className="text-base md:text-lg text-white/75 mb-6 max-w-2xl mx-auto">
                  {copil.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
                  <Button
                    href="/contact?subject=Appui COPIL&offer=copil"
                    variant="primary"
                    className="text-base px-8 py-4"
                  >
                    Demander un devis
                  </Button>
                  <Button
                    href="/copil"
                    variant="secondary"
                    className="text-base px-8 py-4 bg-white/10 text-white border-2 border-white/30 hover:bg-white/20"
                  >
                    Découvrir l&apos;appui COPIL
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding section-charte-alt section-separator">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-ebe-anthraciteDark mb-4">
              Besoin d&apos;un accompagnement sur mesure ?
            </h2>
            <p className="text-lg text-ebe-anthracite/70 mb-8 max-w-2xl mx-auto">
              Échangeons sur votre situation et définissons ensemble la meilleure
              approche — à partir du réel, pas d&apos;un catalogue prédéfini.
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
