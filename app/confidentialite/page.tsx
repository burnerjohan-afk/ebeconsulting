import { Metadata } from "next";
import { content } from "@/lib/content";
import { legalConfig } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Politique de confidentialité | EBE Consulting",
  description: "Politique de confidentialité et protection des données personnelles d'EBE Consulting",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-16">
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h1 className="text-4xl font-bold text-primary-900 mb-8">
              Politique de confidentialité
            </h1>

            <div className="space-y-8 text-neutral-700">
              <section>
                <h2 className="text-2xl font-bold text-primary-900 mb-4">
                  1. Introduction
                </h2>
                <p>
                  {content.company.name} s'engage à protéger la confidentialité
                  et la sécurité des informations personnelles que vous nous
                  confiez. Cette politique de confidentialité explique comment
                  nous collectons, utilisons, stockons et protégeons vos données
                  personnelles conformément au Règlement Général sur la
                  Protection des Données (RGPD) et à la loi "Informatique et
                  Libertés".
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-900 mb-4">
                  2. Responsable du traitement
                </h2>
                <p>
                  Le responsable du traitement des données personnelles est :
                </p>
                <p className="pl-4">
                  <strong>{legalConfig.company.legalName}</strong>
                  <br />
                  {legalConfig.company.address}
                  <br />
                  Email :{" "}
                  <a
                    href={`mailto:${legalConfig.company.rgpdEmail}`}
                    className="text-primary-900 hover:text-accent-600"
                  >
                    {legalConfig.company.rgpdEmail}
                  </a>
                  {legalConfig.company.phone && (
                    <>
                      <br />
                      Téléphone : {legalConfig.company.phone}
                    </>
                  )}
                </p>
                <p className="mt-2 text-sm text-neutral-600">
                  <em>Note : Pour toute question relative à la protection des données personnelles, vous pouvez également contacter notre DPO (Délégué à la Protection des Données) si désigné.</em>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-900 mb-4">
                  3. Données collectées
                </h2>
                <p>
                  Nous collectons les données personnelles suivantes lorsque vous
                  utilisez notre formulaire de contact :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone (optionnel)</li>
                  <li>Nom de l'entreprise</li>
                  <li>Taille de l'entreprise</li>
                  <li>Message et sujet de contact</li>
                </ul>
                <p className="mt-4">
                  Nous collectons également des données techniques lors de votre
                  visite (adresse IP, type de navigateur, pages visitées) via des
                  cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-900 mb-4">
                  4. Finalités du traitement
                </h2>
                <p>Vos données personnelles sont utilisées pour :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Répondre à vos demandes de contact via le formulaire</li>
                  <li>Planifier un échange ou un rendez-vous (si vous utilisez un outil de prise de RDV)</li>
                  <li>Vous fournir des informations sur nos services et offres</li>
                  <li>Prospection commerciale B2B (si applicable, sur la base de votre consentement ou de notre intérêt légitime)</li>
                  <li>Améliorer notre site web et nos services (mesure d'audience, avec votre consentement)</li>
                  <li>Respecter nos obligations légales et réglementaires</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-900 mb-4">
                  5. Base légale
                </h2>
                <p>
                  Le traitement de vos données personnelles est basé sur :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Votre consentement</strong> : lorsque vous acceptez l'utilisation de vos données via le formulaire de contact et pour les cookies non essentiels (mesure d'audience)
                  </li>
                  <li>
                    <strong>L'exécution de mesures précontractuelles</strong> : réponse à votre demande de contact, établissement d'un devis
                  </li>
                  <li>
                    <strong>Notre intérêt légitime</strong> : prospection commerciale B2B (si applicable, vous pouvez vous opposer à tout moment)
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-900 mb-4">
                  6. Conservation des données
                </h2>
                <p>Vos données personnelles sont conservées selon les durées suivantes :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Demandes de contact</strong> : {legalConfig.dataRetention.contactRequests}</li>
                  <li><strong>Prospects</strong> : {legalConfig.dataRetention.prospects}</li>
                  <li><strong>Logs techniques</strong> : {legalConfig.dataRetention.technicalLogs}</li>
                </ul>
                <p className="mt-4">
                  Au-delà de ces durées, vos données sont supprimées ou anonymisées, sauf obligation légale de conservation plus longue (factures, contrats, etc.).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-900 mb-4">
                  7. Destinataires des données
                </h2>
                <p>Vos données personnelles sont destinées à :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>EBE Consulting</strong> : pour le traitement de votre demande</li>
                  <li><strong>Nos prestataires techniques</strong> : hébergeur, service d'email, dans le cadre strict de l'exécution de leurs missions (sous-traitants)</li>
                </ul>
                <p className="mt-4">
                  Vos données ne sont <strong>jamais vendues, louées ou partagées</strong> avec des tiers à des fins commerciales.
                </p>
                <p className="mt-4">
                  <strong>Transferts hors UE :</strong> Si nous utilisons des prestataires situés hors de l'Union Européenne (ex: Calendly, Google Analytics), nous nous assurons que des garanties appropriées sont en place (clauses contractuelles types, Privacy Shield, etc.) conformément au RGPD.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-900 mb-4">
                  8. Vos droits
                </h2>
                <p>
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Droit d'accès</strong> : obtenir une copie de vos
                    données personnelles
                  </li>
                  <li>
                    <strong>Droit de rectification</strong> : corriger vos données
                    inexactes ou incomplètes
                  </li>
                  <li>
                    <strong>Droit à l'effacement</strong> : demander la
                    suppression de vos données
                  </li>
                  <li>
                    <strong>Droit à la limitation</strong> : limiter le traitement
                    de vos données
                  </li>
                  <li>
                    <strong>Droit à la portabilité</strong> : récupérer vos données
                    dans un format structuré
                  </li>
                  <li>
                    <strong>Droit d'opposition</strong> : vous opposer au
                    traitement de vos données
                  </li>
                  <li>
                    <strong>Droit de retirer votre consentement</strong> : à tout
                    moment
                  </li>
                </ul>
                <p className="mt-4">
                  Pour exercer ces droits, contactez-nous par email à :{" "}
                  <a
                    href={`mailto:${legalConfig.company.rgpdEmail}`}
                    className="text-primary-900 hover:text-accent-600"
                  >
                    {legalConfig.company.rgpdEmail}
                  </a>
                  {" "}en précisant votre demande et en joignant une copie de votre pièce d'identité.
                </p>
                <p className="mt-4">
                  Nous nous engageons à répondre à votre demande dans un délai d'un mois maximum.
                </p>
                <p className="mt-4">
                  Vous avez également le droit d'introduire une réclamation auprès de la{" "}
                  <a
                    href="https://www.cnil.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-900 hover:text-accent-600"
                  >
                    CNIL (Commission Nationale de l'Informatique et des Libertés)
                  </a>
                  {" "}si vous estimez que vos droits ne sont pas respectés.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-900 mb-4">
                  9. Sécurité
                </h2>
                <p>
                  Nous mettons en œuvre des mesures techniques et
                  organisationnelles appropriées pour protéger vos données
                  personnelles contre tout accès non autorisé, perte, destruction
                  ou altération.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-900 mb-4">
                  10. Cookies
                </h2>
                <p>
                  Notre site utilise des cookies pour améliorer votre expérience de navigation. 
                  Vous pouvez gérer vos préférences de cookies à tout moment en visitant notre{" "}
                  <a
                    href="/cookies"
                    className="text-primary-900 hover:text-accent-600"
                  >
                    page de gestion des cookies
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-900 mb-4">
                  11. Modifications
                </h2>
                <p>
                  Cette politique de confidentialité peut être modifiée à tout
                  moment. La version en vigueur est celle publiée sur cette page.
                  Nous vous encourageons à la consulter régulièrement.
                </p>
                <p className="mt-4">
                  <strong>Dernière mise à jour :</strong> {legalConfig.lastUpdate}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-900 mb-4">
                  12. Contact
                </h2>
                <p>
                  Pour toute question concernant cette politique de
                  confidentialité ou le traitement de vos données personnelles,
                  vous pouvez nous contacter à :
                </p>
                <p className="pl-4">
                  <strong>{legalConfig.company.legalName}</strong>
                  <br />
                  Email :{" "}
                  <a
                    href={`mailto:${legalConfig.company.rgpdEmail}`}
                    className="text-primary-900 hover:text-accent-600"
                  >
                    {legalConfig.company.rgpdEmail}
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

