import type { Metadata } from "next";
import ChaddertonPage from "@/components/locations/ChaddertonPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Chadderton | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Chadderton. Rapid mobile tyre replacement direct to your driveway, workplace, or roadside within 20–35 minutes.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-chadderton`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Chadderton" slug="chadderton" />
      <ChaddertonPage />
    </>
  );
}
