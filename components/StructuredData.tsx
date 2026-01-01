import { content } from "@/lib/content";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: content.company.name,
    description: content.company.description,
    url: "https://ebe-consulting.fr",
    logo: "https://ebe-consulting.fr/image/logo.PNG",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "contact@ebe-consulting.fr",
    },
    sameAs: [],
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: content.company.name,
    description: content.company.description,
    serviceType: [
      "Accompagnement dirigeant",
      "Audit organisationnel",
      "Structuration managériale",
      "Conseil en management",
      "Accompagnement qualité ISO 9001",
    ],
    areaServed: {
      "@type": "Country",
      name: "France",
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

