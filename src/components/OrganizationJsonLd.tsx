import { siteConfig3 } from "@/lib/site-data3";
import { SITE_EMAIL, SITE_PHONE_TEL, SITE_URL } from "@/lib/seo";

export default function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: siteConfig3.name,
    url: SITE_URL,
    image: `${SITE_URL}${siteConfig3.logo}`,
    logo: `${SITE_URL}${siteConfig3.logo}`,
    telephone: SITE_PHONE_TEL,
    email: SITE_EMAIL,
    priceRange: "££",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: {
      "@type": "Place",
      name: "Greater Manchester, Cheshire, Lancashire & West Yorkshire",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
