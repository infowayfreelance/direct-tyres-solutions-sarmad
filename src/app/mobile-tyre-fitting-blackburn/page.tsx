import type { Metadata } from "next";
import BlackburnPage from "@/components/locations/BlackburnPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Blackburn | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Blackburn. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M65 and A666.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-blackburn`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Blackburn" slug="blackburn" />
      <BlackburnPage />
    </>
  );
}
