import type { Metadata } from "next";
import RuncornPage from "@/components/locations/RuncornPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Runcorn | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Runcorn. Rapid response home, workplace and roadside tyre replacement covering routes around M56, A533, A557.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-runcorn`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Runcorn" slug="runcorn" />
      <RuncornPage />
    </>
  );
}
