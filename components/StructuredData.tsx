import { content } from "@/lib/content";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: content.company.name,
    legalName: "SELECT SERVICES",
    description: content.company.description,
    url: "https://ebeconsulting.fr",
    logo: {
      "@type": "ImageObject",
      url: "https://ebeconsulting.fr/image/logo.PNG",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "BATIMENT HORIZON - BOITE 7, 4 RUE DE L'ASTROLABE",
      addressLocality: "REMIRE-MONTJOLY",
      postalCode: "97354",
      addressCountry: "FR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "eb@ebeconsulting.fr",
      availableLanguage: "French",
    },
    sameAs: [
      "https://www.linkedin.com/company/ebe-consulting",
      "https://www.facebook.com/ebeconsulting",
      "https://www.instagram.com/ebeconsulting",
    ],
    foundingDate: "2024",
    areaServed: {
      "@type": "Country",
      name: "France",
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: content.company.name,
    description: content.company.description,
    provider: {
      "@type": "Organization",
      name: content.company.name,
    },
    serviceType: [
      "Accompagnement dirigeant",
      "Audit organisationnel",
      "Structuration managériale",
      "Conseil en management",
      "Accompagnement qualité ISO 9001",
      "Appui Comité de Pilotage",
      "Conseil stratégique",
    ],
    areaServed: [
      {
        "@type": "Country",
        name: "France",
      },
      {
        "@type": "State",
        name: "Antilles-Guyane",
      },
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://ebeconsulting.fr/contact",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
    </>
  );
}

