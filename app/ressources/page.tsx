import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ResourcesPageCard from "@/components/ResourcesPageCard";

export const metadata: Metadata = {
  title: "Ressources | EBE Consulting",
  description:
    "Retrouvez nos articles, insights et ressources sur l'accompagnement organisationnel, le management et la performance durable.",
  openGraph: {
    title: "Ressources | EBE Consulting",
    description:
      "Articles et insights sur la structuration organisationnelle et la performance durable.",
  },
};

export default function ResourcesPage() {
  return (
    <div>
      {/* Hero avec image ressources/connaissances */}
      <PageHero
        title="Ressources"
        subtitle="Articles, insights et ressources sur l'accompagnement organisationnel et la performance durable."
        imageUrl="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2128"
        overlayOpacity={0.35}
      />

      <div className="pb-16">

      {/* Coming Soon */}
      <section className="section-padding bg-white">
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

