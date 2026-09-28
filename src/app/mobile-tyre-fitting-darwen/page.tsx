import type { Metadata } from "next";
import DarwenPage from "@/components/locations/DarwenPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Darwen | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Darwen. Rapid response home, workplace and roadside tyre replacement covering moorland routes around the M65 and A666.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-darwen`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Darwen" slug="darwen" />
      <DarwenPage />
    </>
  );
}
