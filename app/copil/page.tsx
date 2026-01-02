import { Metadata } from "next";
import { content } from "@/lib/content";
import Button from "@/components/ui/Button";
import Card from "@/components/Card";
import PageHero from "@/components/PageHero";
import { COPILMissions, COPILBenefits, COPILValue } from "@/components/COPILPageCards";

export const metadata: Metadata = {
  title: "Appui au Comité de Pilotage — 3 000 € HT/mois",
  description:
    "Accompagnement stratégique mensuel du Comité de Pilotage. Sécurisation des décisions, anticipation des impacts, traduction stratégie→terrain.",
  openGraph: {
    title: "Appui COPIL | EBE Consulting",
    description:
      "Forfait mensuel 3 000 € HT. Accompagnement stratégique du Comité de Pilotage pour une performance durable.",
  },
};

export default function COPILPage() {
  return (
    <div>
      {/* Hero avec image comité de direction */}
      <PageHero
        title={content.copil.title}
        subtitle={`${content.copil.subtitle} — ${content.copil.description}`}
        imageUrl="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070"
        overlayOpacity={0.4}
      />

      <div className="pb-16">
        {/* Missions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">
              Missions
            </h2>
            <COPILMissions missions={content.copil.missions} />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">
              Bénéfices pour le Directeur Général
            </h2>
            <COPILBenefits benefits={content.copil.benefits} />
          </div>
        </div>
      </section>

      {/* Modalities */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-accent-50 to-accent-100 border-2 border-accent-200">
              <h2 className="text-3xl font-bold text-primary-900 mb-6 text-center">
                Modalités
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <span className="font-semibold text-neutral-700">Tarif</span>
                  <span className="text-2xl font-bold text-primary-900">
                    {content.copil.modalities.pricing}
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <span className="font-semibold text-neutral-700">
                    Facturation
                  </span>
                  <span className="text-lg text-neutral-700">
                    {content.copil.modalities.billing}
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <span className="font-semibold text-neutral-700">
                    Engagement
                  </span>
                  <span className="text-lg text-neutral-700">
                    {content.copil.modalities.commitment}
                  </span>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <span className="font-semibold text-neutral-700 block mb-2">
                    Périmètre
                  </span>
                  <span className="text-neutral-700">
                    {content.copil.modalities.scope}
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">
              {content.copil.valueProposition.title}
            </h2>
            <COPILValue />
          </div>
        </div>
      </section>

      {/* CTA Section principale */}
      <section className="section-padding bg-gradient-to-br from-accent-600 to-accent-700 text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à démarrer avec l'appui COPIL ?
            </h2>
            <p className="text-xl text-accent-100 mb-8">
              Demandez un devis pour l'appui au Comité de Pilotage et recevez une proposition personnalisée sous 48h.
            </p>
            <Button
              href="/contact?subject=Appui COPIL&offer=copil"
              variant="primary"
              className="text-lg px-10 py-5 bg-white text-accent-700 hover:bg-neutral-100 shadow-xl transform hover:scale-105 transition-all"
            >
              <svg
                className="w-5 h-5 mr-2 inline"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Demander un devis gratuit
            </Button>
            <p className="text-sm text-accent-200 mt-4">
              Réponse sous 48h ouvrées • Devis gratuit et sans engagement
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section secondaire */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <h3 className="text-2xl font-bold text-primary-900 mb-4">
            Besoin de plus d'informations ?
          </h3>
          <p className="text-lg text-neutral-700 mb-8">
            Échangeons sur vos besoins ou découvrez nos autres offres.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
              Parler de votre situation
            </Button>
            <Button
              href="/offres"
              variant="secondary"
              className="text-lg px-8 py-4"
            >
              Voir les autres offres
            </Button>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

