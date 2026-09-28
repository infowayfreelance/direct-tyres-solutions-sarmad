import type { Metadata } from "next";
import BuryPage from "@/components/locations/BuryPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Bury | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Bury. Rapid response town-centre, retail-park and roadside tyre replacement covering routes around the M66 and M60.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-bury`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Bury" slug="bury" />
      <BuryPage />
    </>
  );
}
