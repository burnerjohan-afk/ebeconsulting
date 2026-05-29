import { Metadata } from "next";
import Image from "next/image";
import { content } from "@/lib/content";
import Button from "@/components/ui/Button";
import PageHero from "@/components/PageHero";
import { AboutValues, AboutCapabilities } from "@/components/AboutPageCards";
import FounderJourney from "@/components/FounderJourney";
import TerrainPrincipleSection from "@/components/TerrainPrincipleSection";
import { pageImages } from "@/lib/page-images";
import { contactHrefParlons } from "@/lib/contact-subjects";
import AboutFounderGallery from "@/components/AboutFounderGallery";
import SupportNetworkSection from "@/components/SupportNetworkSection";

export const metadata: Metadata = {
  title: "À propos | EBE Consulting",
  description:
    "Après 30 ans de direction opérationnelle, qualité et management, j'accompagne les dirigeants qui ont besoin de reprendre clarté, pilotage et fonctionnement.",
  alternates: {
    canonical: "https://ebeconsulting.fr/a-propos",
  },
  openGraph: {
    title: "À propos | EBE Consulting",
    description:
      "Après 30 ans de direction opérationnelle, qualité et management, j'accompagne les dirigeants qui ont besoin de reprendre clarté, pilotage et fonctionnement.",
    url: "https://ebeconsulting.fr/a-propos",
  },
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero avec image consulting professionnel */}
      <PageHero
        title={content.about.title}
        subtitle={content.about.description}
        imageUrl={pageImages.hero.about}
        overlayOpacity={0.35}
      />

      <div className="pb-16">
        {/* Présentation fondatrice */}
        <section className="section-padding section-charte section-separator">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
                <div className="w-full max-w-[22rem] sm:max-w-[24rem] mx-auto lg:mx-0">
                  <Image
                    src={content.founder.portrait.src}
                    alt={content.about.profile.imageAlt}
                    width={731}
                    height={1024}
                    sizes="(max-width: 1024px) 352px, 24rem"
                    className="w-full h-auto rounded-2xl shadow-[0_24px_60px_rgba(62,74,79,0.15)] ring-1 ring-ebe-anthracite/10"
                    priority
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ebe-orange mb-4">
                    {content.about.profile.eyebrow}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6 leading-tight">
                    {content.about.profile.title}
                  </h2>
                  <p className="text-lg md:text-xl text-neutral-800 leading-relaxed mb-6 border-l-[3px] border-ebe-orange pl-5 font-medium">
                    {content.founder.lead}
                  </p>
                  <div className="space-y-4">
                    {content.about.profile.paragraphs.slice(1).map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 48)}
                        className="text-lg text-neutral-700 leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 lg:mt-14 pt-10 lg:pt-12 border-t border-ebe-anthracite/10">
                <AboutFounderGallery />
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-ebe-anthracite/50 text-center mt-4">
                  Accompagnement, terrain et pilotage opérationnel
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Parcours */}
        <section className="section-padding section-charte-alt section-separator">
          <div className="container-custom max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-3 text-center">
              Mon parcours
            </h2>
            <p className="text-neutral-600 text-center mb-10 max-w-2xl mx-auto">
              Trois décennies au croisement du management, de la qualité et du
              pilotage opérationnel.
            </p>
            <FounderJourney />
          </div>
        </section>

        <TerrainPrincipleSection />

        <SupportNetworkSection />

        {/* Approach Section */}
      <section className="section-padding section-charte-alt section-separator">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-6 text-center">
              {content.about.approach.title}
            </h2>
            <div className="card-premium">
              <p className="text-lg text-neutral-700 leading-relaxed">
                {content.about.approach.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding section-charte section-separator">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">
              {content.about.valuesTitle}
            </h2>
            <AboutValues />
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-padding section-charte">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">
              {content.capabilities.sectionTitle}
            </h2>
            <AboutCapabilities />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-ebe-anthraciteDark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            {content.about.cta.title}
          </h2>
          <p className="text-lg text-white/75 mb-8">
            {content.about.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/offres" variant="primary" className="text-lg px-8 py-4">
              {content.about.cta.offersButton}
            </Button>
            <Button
              href={contactHrefParlons()}
              variant="primary"
              className="text-lg px-8 py-4 !bg-white !text-ebe-anthraciteDark hover:!bg-ebe-warmWhite shadow-lg font-bold"
            >
              {content.about.cta.contactButton}
            </Button>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

