import type { Metadata } from "next";
import AncoatsPage from "@/components/locations/AncoatsPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Ancoats | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Ancoats. On-demand roadside and curbside tyre replacement for apartment residents and businesses in 20–35 minutes.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-ancoats`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Ancoats" slug="ancoats" />
      <AncoatsPage />
    </>
  );
}
