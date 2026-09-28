import type { Metadata } from "next";
import AudenshawPage from "@/components/locations/AudenshawPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Audenshaw | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Audenshaw. Rapid home, workplace and roadside tyre replacement covering residential routes around the M60 and A635.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-audenshaw`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Audenshaw" slug="audenshaw" />
      <AudenshawPage />
    </>
  );
}
