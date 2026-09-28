import type { Metadata } from "next";
import WidnesPage from "@/components/locations/WidnesPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Widnes | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Widnes. Rapid response home, workplace and roadside tyre replacement covering routes around M62, A557, A562.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-widnes`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Widnes" slug="widnes" />
      <WidnesPage />
    </>
  );
}
