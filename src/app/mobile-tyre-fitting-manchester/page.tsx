import type { Metadata } from "next";
import ManchesterPage from "@/components/locations/ManchesterPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Manchester | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting across Greater Manchester. Emergency roadside and driveway tyre replacement in 20–35 minutes.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-manchester`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Manchester" slug="manchester" />
      <ManchesterPage />
    </>
  );
}
