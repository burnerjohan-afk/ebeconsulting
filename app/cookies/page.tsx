import { Metadata } from "next";
import { content } from "@/lib/content";
import { legalConfig } from "@/lib/legal";
import CookiePreferences from "@/components/legal/CookiePreferences";

export const metadata: Metadata = {
  title: "Politique de cookies | EBE Consulting",
  description: "Gestion de vos préférences de cookies et politique de cookies d'EBE Consulting. Contrôlez l'utilisation des cookies sur notre site.",
  alternates: {
    canonical: "https://ebeconsulting.fr/cookies",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiesPage() {
  return (
    <div className="pt-32 pb-16">
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-primary-900 mb-8">
              Politique de cookies
            </h1>

            <div className="space-y-8 text-neutral-700 mb-12">
              <section>
                <h2 className="text-2xl font-bold text-primary-900 mb-4">
                  1. Qu'est-ce qu'un cookie ?
                </h2>
                <p>
                  Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la visite d'un site web. Il permet au site de reconnaître votre navigateur et de mémoriser certaines informations vous concernant.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-900 mb-4">
                  2. Types de cookies utilisés
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      Cookies essentiels
                    </h3>
                    <p>
                      Ces cookies sont strictement nécessaires au fonctionnement du site. Ils ne peuvent pas être désactivés. Ils sont généralement définis en réponse à des actions que vous effectuez et qui équivalent à une demande de services, comme la définition de vos préférences de confidentialité, la connexion ou le remplissage de formulaires.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      Cookies de mesure d'audience
                    </h3>
                    <p>
                      Ces cookies nous permettent de compter les visites et les sources de trafic afin d'améliorer les performances de notre site. Ils nous aident à savoir quelles pages sont les plus et le moins populaires et à voir comment les visiteurs se déplacent sur le site.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      Cookies fonctionnels
                    </h3>
                    <p>
                      Ces cookies permettent d'améliorer les fonctionnalités et la personnalisation du site, comme les vidéos et les chats en direct. Ils peuvent être définis par nous ou par des fournisseurs tiers.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      Cookies marketing
                    </h3>
                    <p>
                      Ces cookies peuvent être définis sur notre site par nos partenaires publicitaires. Ils peuvent être utilisés par ces entreprises pour établir un profil de vos intérêts et vous montrer des publicités pertinentes sur d'autres sites. Actuellement, nous n'utilisons pas de cookies marketing.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-900 mb-4">
                  3. Durée de conservation
                </h2>
                <p>
                  Les cookies de consentement sont conservés pendant {legalConfig.cookies.consentDuration} mois. Passé ce délai, vous serez à nouveau invité à exprimer votre choix.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-900 mb-4">
                  4. Liste des cookies utilisés
                </h2>
                <div className="space-y-4">
                  <div className="border border-[#3E4A4F]/10 rounded-lg p-4">
                    <h3 className="font-semibold text-primary-900 mb-2">Cookies essentiels</h3>
                    <ul className="space-y-2 text-sm">
                      {legalConfig.cookies.essentialCookies.map((cookie, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="font-medium">• {cookie.name}:</span>
                          <span>{cookie.purpose} (Durée: {cookie.duration})</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {legalConfig.cookies.analyticsCookies.length > 0 && (
                    <div className="border border-[#3E4A4F]/10 rounded-lg p-4">
                      <h3 className="font-semibold text-primary-900 mb-2">Cookies de mesure d'audience</h3>
                      <ul className="space-y-2 text-sm">
                        {legalConfig.cookies.analyticsCookies.map((cookie, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="font-medium">• {cookie.name}:</span>
                            <span>{cookie.purpose} (Durée: {cookie.duration})</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-900 mb-4">
                  5. Gestion de vos préférences
                </h2>
                <p>
                  Vous pouvez à tout moment modifier vos préférences de cookies en utilisant le module ci-dessous ou en cliquant sur "Gérer mes cookies" dans le footer du site.
                </p>
              </section>
            </div>

            {/* Module de gestion des cookies */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-primary-900 mb-6">
                Gérer mes préférences de cookies
              </h2>
              <CookiePreferences />
            </div>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">
                6. Contact
              </h2>
              <p>
                Pour toute question concernant notre utilisation des cookies, vous pouvez nous contacter à :{" "}
                <a
                  href={`mailto:${legalConfig.company.rgpdEmail}`}
                  className="text-primary-900 hover:text-accent-600"
                >
                  {legalConfig.company.rgpdEmail}
                </a>
              </p>
              <p className="mt-4 text-sm text-neutral-600">
                <strong>Dernière mise à jour :</strong> {legalConfig.lastUpdate}
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

