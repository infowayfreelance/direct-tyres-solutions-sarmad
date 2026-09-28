import type { Metadata } from "next";
import DewsburyPage from "@/components/locations/DewsburyPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Dewsbury | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Dewsbury. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M1 and A644.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-dewsbury`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Dewsbury" slug="dewsbury" />
      <DewsburyPage />
    </>
  );
}
