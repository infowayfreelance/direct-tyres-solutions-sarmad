import type { Metadata } from "next";
import ChorleyPage from "@/components/locations/ChorleyPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Chorley | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Chorley. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M61 and M6.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-chorley`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Chorley" slug="chorley" />
      <ChorleyPage />
    </>
  );
}
