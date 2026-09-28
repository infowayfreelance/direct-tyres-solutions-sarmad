import type { Metadata } from "next";
import AlderleyEdgePage from "@/components/locations/AlderleyEdgePage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Alderley Edge | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Alderley Edge. Rapid home, workplace and roadside tyre replacement covering Cheshire village routes around the A34.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-alderley-edge`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Alderley Edge" slug="alderley-edge" />
      <AlderleyEdgePage />
    </>
  );
}
