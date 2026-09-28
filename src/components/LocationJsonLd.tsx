import { siteConfig3 } from "@/lib/site-data3";
import { SITE_EMAIL, SITE_PHONE_TEL, SITE_URL } from "@/lib/seo";

type LocationJsonLdProps = {
  areaLabel: string;
  slug: string;
};

export default function LocationJsonLd({
  areaLabel,
  slug,
}: LocationJsonLdProps) {
  const pageUrl = `${SITE_URL}/mobile-tyre-fitting-${slug}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Mobile Tyre Fitting",
    url: pageUrl,
    provider: {
      "@type": "AutoRepair",
      name: siteConfig3.name,
      telephone: SITE_PHONE_TEL,
      email: SITE_EMAIL,
      url: SITE_URL,
      image: `${SITE_URL}${siteConfig3.logo}`,
    },
    areaServed: {
      "@type": "City",
      name: areaLabel,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Areas We Cover",
        item: `${SITE_URL}/areas-we-cover`,
      },
      { "@type": "ListItem", position: 3, name: areaLabel, item: pageUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
