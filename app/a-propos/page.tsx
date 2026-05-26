import { Metadata } from "next";
import Image from "next/image";
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
        {/* Portrait */}
        <section className="section-padding section-charte section-separator">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
              <div className="w-full max-w-[20rem] sm:max-w-[22rem] mx-auto lg:mx-0">
                <Image
                  src="/image/photo-eb.png"
                  alt={content.about.profile.imageAlt}
                  width={731}
                  height={1024}
                  sizes="(max-width: 1024px) 352px, 22rem"
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
                <div className="space-y-4">
                  {content.about.profile.paragraphs.map((paragraph) => (
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
          </div>
        </section>

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
              Ce que je peux faire / Ce que je ne peux pas faire
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
              href="/contact"
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

