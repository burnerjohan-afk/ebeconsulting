import { Metadata } from "next";
import { content } from "@/lib/content";
import ContactFormWrapper from "@/components/ContactFormWrapper";
import PageHero from "@/components/PageHero";
import ContactPageInfo from "@/components/ContactPageInfo";
import { pageImages } from "@/lib/page-images";

export const metadata: Metadata = {
  title: "Contact EBE Consulting - Demander un devis",
  description:
    "Contactez-moi pour un accompagnement sur mesure. Échangez sur vos enjeux et recevez une proposition personnalisée sous 48h.",
  alternates: {
    canonical: "https://ebeconsulting.fr/contact",
  },
  openGraph: {
    title: "Contact EBE Consulting - Demander un devis",
    description:
      "Contactez-moi pour un accompagnement sur mesure. Échangez sur vos enjeux et recevez une proposition personnalisée sous 48h.",
    url: "https://ebeconsulting.fr/contact",
  },
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero avec image bureau/communication */}
      <PageHero
        title={content.contact.title}
        subtitle={content.contact.subtitle}
        imageUrl={pageImages.hero.contact}
        overlayOpacity={0.35}
      />

      <div className="pb-16">

      {/* Contact Form */}
      <section className="section-padding section-charte">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <ContactFormWrapper />
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding section-charte">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <ContactPageInfo />
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

