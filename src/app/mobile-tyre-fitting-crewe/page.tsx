import type { Metadata } from "next";
import CrewePage from "@/components/locations/CrewePage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Crewe | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Crewe. Rapid response home, workplace and roadside tyre replacement covering railway town routes around the M6 and A534.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-crewe`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Crewe" slug="crewe" />
      <CrewePage />
    </>
  );
}
