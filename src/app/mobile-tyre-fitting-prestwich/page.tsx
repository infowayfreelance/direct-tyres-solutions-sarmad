import type { Metadata } from "next";
import PrestwichPage from "@/components/locations/PrestwichPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Prestwich | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Prestwich. Rapid response home, workplace and roadside tyre replacement covering routes around the M60 and A56.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-prestwich`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Prestwich" slug="prestwich" />
      <PrestwichPage />
    </>
  );
}
