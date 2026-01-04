import { content } from "@/lib/content";

export default function StructuredData() {
  const baseUrl = "https://ebeconsulting.fr";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: content.company.name,
    legalName: "SELECT SERVICES",
    description: content.company.description,
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/image/logo.PNG`,
      width: 320,
      height: 120,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "BATIMENT HORIZON - BOITE 7, 4 RUE DE L'ASTROLABE",
      addressLocality: "REMIRE-MONTJOLY",
      postalCode: "97354",
      addressCountry: "FR",
      addressRegion: "Guyane",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "eb@ebeconsulting.fr",
      availableLanguage: ["French", "fr"],
      areaServed: "FR",
    },
    sameAs: [
      "https://www.linkedin.com/company/ebe-consulting",
      "https://www.facebook.com/ebeconsulting",
      "https://www.instagram.com/ebeconsulting",
    ],
    foundingDate: "2024",
    areaServed: [
      {
        "@type": "Country",
        name: "France",
      },
      {
        "@type": "State",
        name: "Guyane",
      },
      {
        "@type": "State",
        name: "Antilles",
      },
    ],
    knowsAbout: [
      "Accompagnement dirigeant",
      "Audit organisationnel",
      "Structuration managériale",
      "ISO 9001",
      "Conseil en management",
      "Performance durable",
    ],
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
        name: "Guyane",
      },
      {
        "@type": "State",
        name: "Antilles",
      },
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${baseUrl}/contact`,
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: content.company.name,
    url: baseUrl,
    description: content.company.description,
    publisher: {
      "@type": "Organization",
      name: content.company.name,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/contact?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}

