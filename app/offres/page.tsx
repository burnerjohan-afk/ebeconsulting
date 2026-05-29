import { Metadata } from "next";
import { content } from "@/lib/content";
import Button from "@/components/ui/Button";
import PageHero from "@/components/PageHero";
import OffersPageCards from "@/components/OffersPageCards";
import { pageImages } from "@/lib/page-images";
import { contactHrefParlons } from "@/lib/contact-subjects";

export const metadata: Metadata = {
  title: "Offres d'accompagnement dirigeant - EBE Consulting",
  description:
    "Six offres pour dirigeants TPE/PME : diagnostic, structuration, accompagnement, transition, audit et appui COPIL — toujours à partir du terrain.",
  alternates: {
    canonical: "https://ebeconsulting.fr/offres",
  },
  openGraph: {
    title: "Les offres | EBE Consulting",
    description:
      "Six réponses à six problématiques de dirigeant. Problématique, réponse terrain, bénéfices concrets.",
    url: "https://ebeconsulting.fr/offres",
  },
};

export default function OffersPage() {
  const { offers } = content;

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
          </div>
        </section>

        <section className="section-padding section-charte-alt section-separator">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-ebe-anthraciteDark mb-4">
              Besoin d&apos;un accompagnement sur mesure ?
            </h2>
            <p className="text-lg text-ebe-anthracite/70 mb-8 max-w-2xl mx-auto">
              Décrivez votre situation : je vous indique l&apos;offre la plus pertinente — ou
              comment combiner plusieurs leviers.
            </p>
            <Button href={contactHrefParlons()} variant="primary" className="text-lg px-8 py-4">
              Parler de votre situation
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
