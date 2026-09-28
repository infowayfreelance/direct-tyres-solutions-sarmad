import type { Metadata } from "next";
import HazelGrovePage from "@/components/locations/HazelGrovePage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Hazel Grove | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Hazel Grove. Rapid response home, workplace and roadside tyre replacement covering routes around A6, A555, A627.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-hazel-grove`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Hazel Grove" slug="hazel-grove" />
      <HazelGrovePage />
    </>
  );
}
