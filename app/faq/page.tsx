import { Metadata } from "next";
import { content } from "@/lib/content";
import FAQ from "@/components/FAQ";
import PageHero from "@/components/PageHero";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Questions fréquentes | EBE Consulting",
  description:
    "Réponses aux questions fréquentes sur l'accompagnement EBE Consulting : durée, déroulé, livrables, tarifs, zone géographique.",
  openGraph: {
    title: "FAQ | EBE Consulting",
    description:
      "Toutes les réponses à vos questions sur notre accompagnement organisationnel et managérial.",
  },
};

export default function FAQPage() {
  return (
    <>
      <FAQSchema />
      <div>
        {/* Hero avec image */}
        <PageHero
          title={content.faq.title}
          subtitle="Toutes les réponses à vos questions sur notre accompagnement"
          imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070"
          overlayOpacity={0.35}
        />

        <div className="pb-16">
          {/* FAQ Section */}
          <FAQ />
        </div>
      </div>
    </>
  );
}

