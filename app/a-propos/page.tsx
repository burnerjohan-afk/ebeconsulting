import { Metadata } from "next";
import { content } from "@/lib/content";
import Button from "@/components/ui/Button";
import PageHero from "@/components/PageHero";
import { AboutValues, AboutCapabilities } from "@/components/AboutPageCards";

export const metadata: Metadata = {
  title: "EBE Consulting - Expert structuration organisationnelle",
  description:
    "EBE Consulting : expert accompagnement dirigeants TPE/PME. Vision transverse, approche terrain, expertise ISO 9001 & APSAD. Performance durable.",
  alternates: {
    canonical: "https://ebeconsulting.fr/a-propos",
  },
  openGraph: {
    title: "EBE Consulting - Expert structuration organisationnelle",
    description:
      "EBE Consulting : expert accompagnement dirigeants TPE/PME. Vision transverse, approche terrain, expertise ISO 9001 & APSAD. Performance durable.",
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
        imageUrl="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084"
        overlayOpacity={0.35}
      />

      <div className="pb-16">
        {/* Approach Section */}
      <section className="section-padding bg-white">
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
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">
              Nos valeurs
            </h2>
            <AboutValues />
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">
              Ce que je peux faire / Ce que je ne peux pas faire
            </h2>
            <AboutCapabilities />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            En savoir plus sur notre accompagnement
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            Découvrez nos offres ou échangeons directement sur votre situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/offres" variant="primary" className="text-lg px-8 py-4">
              Découvrir nos offres
            </Button>
            <Button
              href="/contact"
              variant="primary"
              className="text-lg px-8 py-4 bg-white text-[#3E4A4F] hover:bg-neutral-100"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

