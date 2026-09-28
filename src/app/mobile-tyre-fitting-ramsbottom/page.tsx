import type { Metadata } from "next";
import RamsbottomPage from "@/components/locations/RamsbottomPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Ramsbottom | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Ramsbottom. Rapid response rural and A-road tyre replacement covering routes around the M66 and A56.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-ramsbottom`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Ramsbottom" slug="ramsbottom" />
      <RamsbottomPage />
    </>
  );
}
