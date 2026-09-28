import type { Metadata } from "next";
import MarplePage from "@/components/locations/MarplePage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Marple | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Marple. Rapid response home, workplace and roadside tyre replacement covering routes around A626, A627, A6 nearby.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-marple`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Marple" slug="marple" />
      <MarplePage />
    </>
  );
}
