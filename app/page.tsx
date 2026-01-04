import { Metadata } from "next";
import { content } from "@/lib/content";
import Button from "@/components/ui/Button";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import StickyCTA from "@/components/StickyCTA";
import MethodSection from "@/components/MethodSection";
import OffersSection from "@/components/OffersSection";
import COPILSection from "@/components/COPILSection";
import ImpactSection from "@/components/ImpactSection";
import FinalCTA from "@/components/FinalCTA";
import BadgesSection from "@/components/BadgesSection";
import ClientsSection from "@/components/ClientsSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata: Metadata = {
  title: "Accompagnement dirigeant TPE/PME - EBE Consulting",
  description:
    "Accompagnement dirigeants TPE/PME : structuration organisationnelle, pilotage stratégique et performance durable. Immersion terrain, décisions sécurisées.",
  alternates: {
    canonical: "https://ebeconsulting.fr",
  },
  openGraph: {
    title: "EBE Consulting | Accompagnement dirigeants TPE/PME",
    description:
      "Accompagnement dirigeants TPE/PME : structuration organisationnelle, pilotage stratégique et performance durable. Immersion terrain, décisions sécurisées.",
    url: "https://ebeconsulting.fr",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Badges Section */}
      <BadgesSection />

      {/* Method Section */}
      <MethodSection />

      {/* Offers Section */}
      <OffersSection />

      {/* Clients Section */}
      <ClientsSection />

      {/* COPIL Focus Section */}
      <COPILSection />

      {/* Target Audience Section */}
      <TargetAudienceSection />

      {/* Impact Section */}
      <ImpactSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Final CTA Section */}
      <FinalCTA />

      {/* Sticky CTA Button (Mobile) */}
      <StickyCTA />
    </>
  );
}

