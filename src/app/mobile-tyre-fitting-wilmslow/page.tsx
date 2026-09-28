import type { Metadata } from "next";
import WilmslowPage from "@/components/locations/WilmslowPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Wilmslow | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Wilmslow. Rapid response home, workplace and roadside tyre replacement covering town centre routes around the A34 and A538.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-wilmslow`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Wilmslow" slug="wilmslow" />
      <WilmslowPage />
    </>
  );
}
