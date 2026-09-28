import type { Metadata } from "next";
import WythenshawePage from "@/components/locations/WythenshawePage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Wythenshawe | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Wythenshawe. Rapid roadside and home tyre replacement covering Manchester Airport and routes around the M56.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-wythenshawe`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Wythenshawe" slug="wythenshawe" />
      <WythenshawePage />
    </>
  );
}
