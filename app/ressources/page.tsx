import { Metadata } from "next";
import { content } from "@/lib/content";
import Button from "@/components/Button";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Ressources | EBE Consulting",
  description:
    "Retrouvez nos articles, insights et ressources sur l'accompagnement organisationnel, le management et la performance durable.",
  openGraph: {
    title: "Ressources | EBE Consulting",
    description:
      "Articles et insights sur la structuration organisationnelle et la performance durable.",
  },
};

export default function ResourcesPage() {
  return (
    <div className="pt-32 pb-16">
      {/* Header */}
      <section className="section-padding bg-gradient-to-b from-white to-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              Ressources
            </h1>
            <p className="text-xl text-neutral-700">
              Articles, insights et ressources sur l'accompagnement
              organisationnel et la performance durable.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Card className="text-center">
              <div className="mb-6">
                <svg
                  className="w-16 h-16 text-primary-900 mx-auto"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-primary-900 mb-4">
                Ressources à venir
              </h2>
              <p className="text-neutral-700 mb-6">
                Nous préparons actuellement des articles et ressources sur
                l'accompagnement organisationnel, le management et la performance
                durable. Revenez bientôt pour découvrir nos insights.
              </p>
              <p className="text-neutral-600 mb-8">
                En attendant, n'hésitez pas à nous contacter pour échanger sur
                vos enjeux.
              </p>
              <Button href="/contact" variant="primary">
                Nous contacter
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

