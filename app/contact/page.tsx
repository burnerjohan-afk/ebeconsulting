import { Metadata } from "next";
import { content } from "@/lib/content";
import ContactFormWrapper from "@/components/ContactFormWrapper";
import PageHero from "@/components/PageHero";
import ContactPageInfo from "@/components/ContactPageInfo";

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
    <div>
      {/* Hero avec image bureau/communication */}
      <PageHero
        title={content.contact.title}
        subtitle={content.contact.subtitle}
        imageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
        overlayOpacity={0.35}
      />

      <div className="pb-16">

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
            <ContactPageInfo />
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

