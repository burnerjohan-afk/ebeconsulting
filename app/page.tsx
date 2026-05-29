import { Metadata } from "next";
import Hero from "@/components/Hero";
import StickyCTA from "@/components/StickyCTA";
import SignauxSection from "@/components/SignauxSection";
import MethodSection from "@/components/MethodSection";
import TerrainPrincipleSection from "@/components/TerrainPrincipleSection";
import OffersSection from "@/components/OffersSection";
import DifferentiationSection from "@/components/DifferentiationSection";
import SupportNetworkSection from "@/components/SupportNetworkSection";
import COPILSection from "@/components/COPILSection";
import ImpactSection from "@/components/ImpactSection";
import FinalCTA from "@/components/FinalCTA";
import BadgesSection from "@/components/BadgesSection";
import ClientsSection from "@/components/ClientsSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FounderSection from "@/components/FounderSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";

export const metadata: Metadata = {
  title: "Management de transition & conseil opérationnel | EBE Consulting",
  description:
    "Je remets de la clarté, du pilotage et du fonctionnement dans les organisations. Conseil terrain pour dirigeants TPE/PME.",
  alternates: {
    canonical: "https://ebeconsulting.fr",
  },
  openGraph: {
    title: "EBE Consulting | J'arrive. J'évalue. J'agis.",
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
      <TerrainPrincipleSection />
      <OffersSection />
      <DifferentiationSection />
      <SupportNetworkSection />
      <FounderSection />
      <BadgesSection />
      <ClientsSection />
      <COPILSection />
      <TargetAudienceSection />
      <ImpactSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <FinalCTA />
      <StickyCTA />
    </>
  );
}
