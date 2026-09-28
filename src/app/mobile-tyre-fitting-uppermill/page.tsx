import type { Metadata } from "next";
import UppermillPage from "@/components/locations/UppermillPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Uppermill | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Uppermill, Saddleworth. Rapid roadside and driveway tyre replacement within 25–40 minutes.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-uppermill`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Uppermill" slug="uppermill" />
      <UppermillPage />
    </>
  );
}
