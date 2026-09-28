import type { Metadata } from "next";
import NelsonPage from "@/components/locations/NelsonPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Nelson | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Nelson. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M65 and A56.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-nelson`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Nelson" slug="nelson" />
      <NelsonPage />
    </>
  );
}
