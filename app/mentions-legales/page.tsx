import { Metadata } from "next";
import { content } from "@/lib/content";
import { legalConfig } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Mentions légales | EBE Consulting",
  description: "Mentions légales d'EBE Consulting : informations légales, coordonnées, hébergement et conformité RGPD.",
  alternates: {
    canonical: "https://ebeconsulting.fr/mentions-legales",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LegalPage() {
  return (
    <div className="pt-32 pb-16">
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h1 className="text-4xl font-bold text-primary-900 mb-8">
              Mentions légales
            </h1>

            <div className="space-y-8 text-neutral-700">
              <section>
                <h2 className="text-2xl font-bold text-primary-900 mb-4">
                  1. Éditeur du site
                </h2>
                <p>
                  Le site <strong>ebeconsulting.fr</strong> est édité par :
                </p>
                <p className="pl-4">
                  <strong>{legalConfig.company.legalName}</strong>
                  <br />
                  {legalConfig.company.address.split('\n').map((line, index, array) => (
                    <span key={index}>
                      {line}
                      {index < array.length - 1 && <br />}
                    </span>
                  ))}
                  <br />
                  SIRET : {legalConfig.company.siret}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-900 mb-4">
                  2. Hébergement
                </h2>
                <p>
                  Le site est hébergé par :
                  <br />
                  {legalConfig.hosting.name}
                  <br />
                  {legalConfig.hosting.address}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-900 mb-4">
                  3. Propriété intellectuelle
                </h2>
                <p>
                  L'ensemble de ce site relève de la législation française et
                  internationale sur le droit d'auteur et la propriété
                  intellectuelle. Tous les droits de reproduction sont réservés,
                  y compris pour les documents téléchargeables et les
                  représentations iconographiques et photographiques.
                </p>
                <p>
                  La reproduction de tout ou partie de ce site sur un support
                  électronique quel qu'il soit est formellement interdite sauf
                  autorisation expresse de l'éditeur.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-900 mb-4">
                  4. Protection des données personnelles
                </h2>
                <p>
                  Conformément à la loi "Informatique et Libertés" du 6 janvier
                  1978 modifiée et au Règlement Général sur la Protection des
                  Données (RGPD), vous disposez d'un droit d'accès, de
                  rectification, de suppression et d'opposition aux données
                  personnelles vous concernant.
                </p>
                <p>
                  Pour exercer ce droit, vous pouvez nous contacter à l'adresse
                  suivante :{" "}
                  <a
                    href="mailto:eb@ebeconsulting.fr"
                    className="text-primary-900 hover:text-accent-600"
                  >
                    eb@ebeconsulting.fr
                  </a>
                </p>
                <p>
                  Pour plus d'informations, consultez notre{" "}
                  <a
                    href="/confidentialite"
                    className="text-primary-900 hover:text-accent-600"
                  >
                    Politique de confidentialité
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-900 mb-4">
                  5. Cookies
                </h2>
                <p>
                  Ce site utilise des cookies pour améliorer l'expérience utilisateur. 
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
                  6. Limitation de responsabilité
                </h2>
                <p>
                  Les informations contenues sur ce site sont aussi précises que
                  possible et le site est périodiquement remis à jour, mais
                  peut toutefois contenir des inexactitudes, des omissions ou
                  des lacunes.
                </p>
                <p>
                  {content.company.name} ne pourra être tenu responsable des
                  dommages directs et indirects causés au matériel de
                  l'utilisateur, lors de l'accès au site, et résultant soit de
                  l'utilisation d'un matériel ne répondant pas aux
                  spécifications, soit de l'apparition d'un bug ou d'une
                  incompatibilité.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-900 mb-4">
                  7. Droit applicable
                </h2>
                <p>
                  Tout litige en relation avec l'utilisation du site{" "}
                  <strong>ebeconsulting.fr</strong> est soumis au droit français.
                  Il est fait attribution exclusive de juridiction aux tribunaux
                  compétents de Fort-de-France.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

