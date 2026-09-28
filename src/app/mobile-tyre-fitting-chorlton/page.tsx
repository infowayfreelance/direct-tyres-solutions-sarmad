import type { Metadata } from "next";
import ChorltonPage from "@/components/locations/ChorltonPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Chorlton | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Chorlton-cum-Hardy, Manchester. Emergency roadside and driveway tyre replacement within 20–35 minutes.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-chorlton`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Chorlton" slug="chorlton" />
      <ChorltonPage />
    </>
  );
}
