import type { Metadata } from "next";
import MilnrowPage from "@/components/locations/MilnrowPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Milnrow | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Milnrow. Rapid response junction and roadside tyre replacement covering routes around the M62 and A640.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-milnrow`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Milnrow" slug="milnrow" />
      <MilnrowPage />
    </>
  );
}
