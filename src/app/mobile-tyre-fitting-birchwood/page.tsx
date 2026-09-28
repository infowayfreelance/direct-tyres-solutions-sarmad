import type { Metadata } from "next";
import BirchwoodPage from "@/components/locations/BirchwoodPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Birchwood | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Birchwood. Rapid response home, workplace and roadside tyre replacement covering routes around M62, M6 nearby, A574.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-birchwood`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Birchwood" slug="birchwood" />
      <BirchwoodPage />
    </>
  );
}
