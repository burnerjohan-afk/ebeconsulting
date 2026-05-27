import { Metadata } from "next";
import { content } from "@/lib/content";
import Button from "@/components/ui/Button";
import PageHero from "@/components/PageHero";
import {
  AuditWhyGrid,
  AuditApproachSteps,
  AuditTypesGrid,
  AuditDeliverablesList,
} from "@/components/AuditPageSections";
import { pageImages } from "@/lib/page-images";

export const metadata: Metadata = {
  title: "Audits & diagnostic organisationnel | EBE Consulting",
  description:
    "Audits terrain : diagnostic entreprise, qualité, processus, APSAD et ISO. Immersion et observation du fonctionnement réel avant de décider.",
  alternates: {
    canonical: "https://ebeconsulting.fr/audits",
  },
  openGraph: {
    title: "Audits & diagnostic | EBE Consulting",
    description:
      "Audit de situation, qualité, organisation, APSAD et ISO — pour éclairer vos décisions avant d'engager la transformation.",
    url: "https://ebeconsulting.fr/audits",
  },
};

export default function AuditsPage() {
  const { audits } = content;

  return (
    <div>
      <PageHero
        title={audits.title}
        subtitle={audits.description}
        imageUrl={pageImages.hero.audits}
        overlayOpacity={0.4}
      />

      <div className="pb-16">
        <section className="section-padding section-charte">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ebe-orange mb-4">
                {audits.intro.eyebrow}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                {audits.intro.title}
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">{audits.intro.lead}</p>
            </div>
            <div className="max-w-3xl mx-auto space-y-5">
              {audits.intro.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-neutral-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding section-charte-alt section-separator">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-primary-900 mb-10 text-center">
              {audits.why.title}
            </h2>
            <div className="max-w-5xl mx-auto">
              <AuditWhyGrid />
            </div>
          </div>
        </section>

        <section className="section-padding section-charte section-separator">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-primary-900 mb-10 text-center">
              {audits.approach.title}
            </h2>
            <AuditApproachSteps />
          </div>
        </section>

        <section className="section-padding section-charte-alt section-separator">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-primary-900 mb-4">{audits.types.title}</h2>
              <p className="text-lg text-neutral-700">{audits.types.subtitle}</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <AuditTypesGrid />
            </div>
          </div>
        </section>

        <section className="section-padding section-charte section-separator">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-primary-900 mb-10 text-center">
              {audits.deliverables.title}
            </h2>
            <AuditDeliverablesList />
          </div>
        </section>

        <section className="section-padding bg-ebe-anthraciteDark text-white">
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{audits.cta.title}</h2>
              <p className="text-xl text-white/75 mb-8">{audits.cta.description}</p>
              <Button
                href="/contact?subject=Audit / diagnostic&offer=audit"
                variant="primary"
                className="text-lg px-10 py-5 !bg-white !text-ebe-anthraciteDark hover:!bg-ebe-warmWhite shadow-xl font-bold"
              >
                Demander un audit
              </Button>
              <p className="text-sm text-white/50 mt-4">
                Réponse sous 48h ouvrées · Devis personnalisé selon périmètre
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding section-charte">
          <div className="container-custom text-center">
            <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
              Un audit peut aussi précéder nos offres d&apos;accompagnement ou l&apos;appui au
              Comité de Pilotage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/offres" variant="primary" className="text-lg px-8 py-4">
                Voir les offres
              </Button>
              <Button href="/copil" variant="secondary" className="text-lg px-8 py-4">
                Découvrir l&apos;appui COPIL
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
