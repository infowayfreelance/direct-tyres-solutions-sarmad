import type { Metadata } from "next";
import FarnworthPage from "@/components/locations/FarnworthPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Farnworth | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Farnworth. Rapid response home, workplace and roadside tyre replacement covering routes around M61, A666, A575.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-farnworth`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Farnworth" slug="farnworth" />
      <FarnworthPage />
    </>
  );
}
