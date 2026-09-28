import type { Metadata } from "next";
import ColnePage from "@/components/locations/ColnePage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Colne | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Colne. Rapid response home, workplace and roadside tyre replacement covering Pendine hillside routes around the M65 and A56.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-colne`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Colne" slug="colne" />
      <ColnePage />
    </>
  );
}
