import type { Metadata } from "next";
import BrighousePage from "@/components/locations/BrighousePage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Brighouse | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Brighouse. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M62 and A644.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-brighouse`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Brighouse" slug="brighouse" />
      <BrighousePage />
    </>
  );
}
