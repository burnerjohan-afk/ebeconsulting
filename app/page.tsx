import { Metadata } from "next";
import Link from "next/link";
import { content } from "@/lib/content";
import Button from "@/components/Button";
import Card from "@/components/Card";
import FAQ from "@/components/FAQ";
import ContactFormWrapper from "@/components/ContactFormWrapper";
import FAQSchema from "@/components/FAQSchema";
import Hero from "@/components/Hero";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "EBE Consulting accompagne les dirigeants TPE/PME dans la structuration organisationnelle. La performance durable se construit avant les chiffres.",
  openGraph: {
    title: "EBE Consulting | Accompagnement dirigeants TPE/PME",
    description:
      "La performance durable se construit avant les chiffres. Comprendre. Décider. Structurer. Sécuriser.",
  },
};

export default function HomePage() {
  return (
    <>
      <FAQSchema />
      {/* Hero Section */}
      <Hero />

      {/* Badges Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.badges.map((badge, index) => (
              <Card key={index} className="text-center">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  {badge.title}
                </h3>
                <p className="text-neutral-600 text-sm">{badge.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              {content.method.title}
            </h2>
            <p className="text-lg text-neutral-700 italic">
              {content.method.subtitle}
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {content.method.steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary-900 text-white flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-700 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-start text-neutral-600"
                      >
                        <svg
                          className="w-5 h-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              {content.offers.title}
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              {content.offers.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {content.offers.list.map((offer) => (
              <Card key={offer.id} className="hover:border-primary-900">
                <div className="mb-4">
                  <span className="text-sm font-semibold text-accent-600 uppercase tracking-wide">
                    {offer.subtitle}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-3">
                  {offer.title}
                </h3>
                <p className="text-neutral-700 mb-6">{offer.description}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    href={`/contact?subject=${encodeURIComponent(`Offre : ${offer.title}`)}&offer=${offer.id}`}
                    variant="primary"
                    className="flex-1 text-sm"
                  >
                    Demander un devis
                  </Button>
                  <Link
                    href={`/offres/${offer.id}`}
                    className="text-primary-900 font-semibold hover:text-accent-600 transition-colors inline-flex items-center justify-center px-4 py-2 border-2 border-primary-900 rounded-lg hover:bg-primary-50 text-sm"
                  >
                    En savoir plus
                    <svg
                      className="w-4 h-4 ml-2"
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

          <div className="text-center">
            <Button href="/copil" variant="accent" className="text-lg px-8 py-4">
              Découvrir l'appui COPIL — 3 000 € HT/mois
            </Button>
          </div>
        </div>
      </section>

      {/* COPIL Focus Section */}
      <section className="section-padding bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {content.copil.title}
              </h2>
              <p className="text-xl text-primary-100 mb-2">
                {content.copil.subtitle}
              </p>
              <p className="text-lg text-primary-200">
                {content.copil.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {content.copil.missions.map((mission, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {mission.title}
                  </h3>
                  <p className="text-primary-100">{mission.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
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
                  En savoir plus
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              {content.target.title}
            </h2>
            <p className="text-lg text-neutral-700">
              {content.target.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {content.target.audiences.map((audience, index) => (
              <Card key={index}>
                <h3 className="text-xl font-bold text-primary-900 mb-3">
                  {audience.title}
                </h3>
                <p className="text-neutral-700">{audience.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              {content.impact.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-red-50 rounded-xl p-8 border-2 border-red-200">
              <h3 className="text-2xl font-bold text-red-900 mb-6">
                {content.impact.before.title}
              </h3>
              <ul className="space-y-3">
                {content.impact.before.points.map((point, index) => (
                  <li key={index} className="flex items-start text-red-800">
                    <svg
                      className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200">
              <h3 className="text-2xl font-bold text-green-900 mb-6">
                {content.impact.after.title}
              </h3>
              <ul className="space-y-3">
                {content.impact.after.points.map((point, index) => (
                  <li key={index} className="flex items-start text-green-800">
                    <svg
                      className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Retours clients
            </h2>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <Card>
              <p className="text-neutral-600 italic mb-4">
                "Retours disponibles sur demande. N'hésitez pas à nous
                contacter pour échanger avec nos clients."
              </p>
              <Button href="/contact" variant="primary">
                Demander un échange
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Parlez-nous de votre situation
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Échangeons sur vos enjeux et définissons ensemble la meilleure
              approche pour votre organisation.
            </p>
            <ContactFormWrapper />
          </div>
        </div>
      </section>

      {/* Sticky CTA Button (Mobile) */}
      <StickyCTA />
    </>
  );
}

