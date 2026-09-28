import type { Metadata } from "next";
import RadcliffePage from "@/components/locations/RadcliffePage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Radcliffe | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Radcliffe. Rapid response home, workplace and roadside tyre replacement covering routes around the M60 and A665.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-radcliffe`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Radcliffe" slug="radcliffe" />
      <RadcliffePage />
    </>
  );
}
