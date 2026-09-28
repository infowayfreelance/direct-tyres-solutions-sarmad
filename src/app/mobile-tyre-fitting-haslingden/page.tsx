import type { Metadata } from "next";
import HaslingdenPage from "@/components/locations/HaslingdenPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Haslingden | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Haslingden. Rapid response home, workplace and roadside tyre replacement covering Pennine hillside routes around the M65 and A56.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-haslingden`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Haslingden" slug="haslingden" />
      <HaslingdenPage />
    </>
  );
}
