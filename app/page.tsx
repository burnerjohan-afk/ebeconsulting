import { Metadata } from "next";
import Hero from "@/components/Hero";
import StickyCTA from "@/components/StickyCTA";
import SignauxSection from "@/components/SignauxSection";
import MethodSection from "@/components/MethodSection";
import OffersSection from "@/components/OffersSection";
import DifferentiationSection from "@/components/DifferentiationSection";
import COPILSection from "@/components/COPILSection";
import ImpactSection from "@/components/ImpactSection";
import FinalCTA from "@/components/FinalCTA";
import BadgesSection from "@/components/BadgesSection";
import ClientsSection from "@/components/ClientsSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata: Metadata = {
  title: "Management de transition & conseil opérationnel | EBE Consulting",
  description:
    "J'arrive. J'analyse. J'agis. EBE Consulting accompagne les dirigeants TPE/PME : lecture terrain, structuration organisationnelle et remise en mouvement durable.",
  alternates: {
    canonical: "https://ebeconsulting.fr",
  },
  openGraph: {
    title: "EBE Consulting | J'arrive. J'analyse. J'agis.",
    description:
      "Management de transition et conseil opérationnel pour des organisations plus claires, plus solides et plus autonomes.",
    url: "https://ebeconsulting.fr",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SignauxSection />
      <MethodSection />
      <OffersSection />
      <DifferentiationSection />
      <BadgesSection />
      <ClientsSection />
      <COPILSection />
      <TargetAudienceSection />
      <ImpactSection />
      <TestimonialsSection />
      <FinalCTA />
      <StickyCTA />
    </>
  );
}
