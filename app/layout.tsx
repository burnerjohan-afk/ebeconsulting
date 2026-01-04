import type { Metadata } from "next";
import { Inter, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import CookieBanner from "@/components/legal/CookieBanner";

// Inter - Police premium similaire à SF Pro d'Apple
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "EBE Consulting | Accompagnement dirigeants TPE/PME",
    template: "%s | EBE Consulting",
  },
  description:
    "Accompagnement des dirigeants TPE/PME dans la structuration organisationnelle, managériale et opérationnelle. La performance durable se construit avant les chiffres.",
  keywords: [
    "accompagnement dirigeant",
    "audit organisationnel",
    "structuration managériale",
    "ISO 9001",
    "performance durable",
    "Antilles-Guyane",
    "TPE PME",
    "comité de pilotage",
    "conseil organisation",
    "management",
  ],
  authors: [{ name: "EBE Consulting" }],
  creator: "EBE Consulting",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://ebeconsulting.fr",
    siteName: "EBE Consulting",
    title: "EBE Consulting | Accompagnement dirigeants TPE/PME",
    description:
      "La performance durable se construit avant les chiffres. Accompagnement organisationnel, managérial et opérationnel.",
  },
  twitter: {
    card: "summary_large_image",
    title: "EBE Consulting | Accompagnement dirigeants TPE/PME",
    description:
      "La performance durable se construit avant les chiffres.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${montserrat.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <StructuredData />
        <Header />
        <main className="min-h-screen pb-20 md:pb-0">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

