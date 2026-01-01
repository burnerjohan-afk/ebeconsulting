import { Metadata } from "next";
import { content } from "@/lib/content";
import ContactFormWrapper from "@/components/ContactFormWrapper";

export const metadata: Metadata = {
  title: "Contact | EBE Consulting",
  description:
    "Contactez EBE Consulting pour échanger sur vos enjeux organisationnels, managériaux et opérationnels. Réponse sous 24h.",
  openGraph: {
    title: "Contact | EBE Consulting",
    description:
      "Parlez-nous de votre situation. Échangeons sur vos enjeux et définissons ensemble la meilleure approche.",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-16">
      {/* Header */}
      <section className="section-padding bg-gradient-to-b from-white to-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              {content.contact.title}
            </h1>
            <p className="text-xl text-neutral-700">
              {content.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <ContactFormWrapper />
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-900 text-white flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">
                  Email
                </h3>
                <p className="text-neutral-700">
                  <a
                    href="mailto:contact@ebe-consulting.fr"
                    className="hover:text-primary-900 transition-colors"
                  >
                    contact@ebe-consulting.fr
                  </a>
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-900 text-white flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">
                  Réponse
                </h3>
                <p className="text-neutral-700">
                  Sous 24h ouvrées
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

