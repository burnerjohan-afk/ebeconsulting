import { Metadata } from "next";
import { content } from "@/lib/content";
import Button from "@/components/Button";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "À propos d'EBE Consulting",
  description:
    "Découvrez l'approche EBE Consulting : immersion terrain, structuration humaine, vision transverse, expertise certifiée ISO 9001 & APSAD.",
  openGraph: {
    title: "À propos | EBE Consulting",
    description:
      "La performance durable se construit avant les chiffres. Notre approche unique allie compréhension terrain et structuration organisationnelle.",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-white to-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              {content.about.title}
            </h1>
            <p className="text-xl text-neutral-700 mb-8">
              {content.about.description}
            </p>
            <p className="text-lg text-neutral-600 italic">
              {content.company.mission}
            </p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-6 text-center">
              {content.about.approach.title}
            </h2>
            <Card>
              <p className="text-lg text-neutral-700 leading-relaxed">
                {content.about.approach.description}
              </p>
            </Card>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.about.values.map((value, index) => (
                <Card key={index}>
                  <h3 className="text-xl font-bold text-primary-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-neutral-700">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-green-50 border-2 border-green-200">
                <h3 className="text-2xl font-bold text-green-900 mb-6">
                  {content.capabilities.can.title}
                </h3>
                <ul className="space-y-3">
                  {content.capabilities.can.items.map((item, index) => (
                    <li key={index} className="flex items-start text-green-800">
                      <svg
                        className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="bg-neutral-50 border-2 border-neutral-200">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                  {content.capabilities.cannot.title}
                </h3>
                <ul className="space-y-3">
                  {content.capabilities.cannot.items.map((item, index) => (
                    <li key={index} className="flex items-start text-neutral-700">
                      <svg
                        className="w-6 h-6 text-neutral-500 mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
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
            <Button href="/offres" variant="accent" className="text-lg px-8 py-4">
              Découvrir nos offres
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              className="text-lg px-8 py-4 bg-white text-primary-900 hover:bg-neutral-100"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

