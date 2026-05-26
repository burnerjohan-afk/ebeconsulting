import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ResourcesPageCard from "@/components/ResourcesPageCard";
import { pageImages } from "@/lib/page-images";

export const metadata: Metadata = {
  title: "Ressources | EBE Consulting",
  description:
    "Retrouvez nos articles, insights et ressources sur l'accompagnement organisationnel, le management et la performance durable.",
  alternates: {
    canonical: "https://ebeconsulting.fr/ressources",
  },
  openGraph: {
    title: "Ressources | EBE Consulting",
    description:
      "Articles et insights sur la structuration organisationnelle et la performance durable.",
    url: "https://ebeconsulting.fr/ressources",
  },
};

export default function ResourcesPage() {
  return (
    <div>
      {/* Hero avec image ressources/connaissances */}
      <PageHero
        title="Ressources"
        subtitle="Articles, insights et ressources sur l'accompagnement organisationnel et la performance durable."
        imageUrl={pageImages.hero.ressources}
        overlayOpacity={0.35}
      />

      <div className="pb-16">

      {/* Coming Soon */}
      <section className="section-padding section-charte">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <ResourcesPageCard />
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

