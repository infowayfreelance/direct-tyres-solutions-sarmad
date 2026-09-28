import type { Metadata } from "next";
import FailsworthPage from "@/components/locations/FailsworthPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Failsworth | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Failsworth. Professional mobile tyre replacement fitted on your drive or roadside within 20–30 minutes.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-failsworth`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Failsworth" slug="failsworth" />
      <FailsworthPage />
    </>
  );
}
