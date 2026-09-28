import type { Metadata } from "next";
import PrestonPage from "@/components/locations/PrestonPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Preston | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Preston. Rapid response home, workplace and roadside tyre replacement covering city routes around the M6, M55 and M61.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-preston`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Preston" slug="preston" />
      <PrestonPage />
    </>
  );
}
