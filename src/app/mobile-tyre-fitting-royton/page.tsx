import type { Metadata } from "next";
import RoytonPage from "@/components/locations/RoytonPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Royton | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Royton. Workshop-grade mobile tyre changes direct to your location within 20–35 minutes.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-royton`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Royton" slug="royton" />
      <RoytonPage />
    </>
  );
}
