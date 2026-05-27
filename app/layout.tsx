import type { Metadata } from "next";
import { Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default: "EBE Consulting | Accompagnement dirigeants TPE/PME",
    template: "%s | EBE Consulting",
  },
  description:
    "Conseil terrain et management de transition : immersion, observation du fonctionnement réel et pilotage opérationnel pour dirigeants TPE/PME. Antilles-Guyane et France métropolitaine.",
  keywords: [
    "conseil terrain",
    "accompagnement dirigeant",
    "pilotage opérationnel",
    "fonctionnement réel",
    "immersion entreprise",
    "audit organisationnel",
    "structuration managériale",
    "ISO 9001",
    "organisation performante",
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
      "Conseil terrain : immersion, observation et pilotage opérationnel pour des organisations plus claires et autonomes.",
    images: [
      {
        url: "https://ebeconsulting.fr/image/logo.PNG",
        width: 320,
        height: 120,
        alt: "EBE Consulting - Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EBE Consulting | Accompagnement dirigeants TPE/PME",
    description:
      "Une organisation performante se construit avant les résultats.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans antialiased">
        <StructuredData />
        <Header />
        <main className="min-h-screen pb-20 md:pb-0">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

