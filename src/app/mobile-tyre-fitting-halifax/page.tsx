import type { Metadata } from "next";
import HalifaxPage from "@/components/locations/HalifaxPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Halifax | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Halifax. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M62 and A58.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-halifax`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Halifax" slug="halifax" />
      <HalifaxPage />
    </>
  );
}
