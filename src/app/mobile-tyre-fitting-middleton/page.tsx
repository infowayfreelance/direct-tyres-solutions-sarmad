import type { Metadata } from "next";
import MiddletonPage from "@/components/locations/MiddletonPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Middleton | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Middleton. Rapid response home, workplace and roadside tyre replacement covering routes around the M60 and M62.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-middleton`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Middleton" slug="middleton" />
      <MiddletonPage />
    </>
  );
}
