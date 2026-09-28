import type { Metadata } from "next";
import MacclesfieldPage from "@/components/locations/MacclesfieldPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Macclesfield | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Macclesfield. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the A523 and A537.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-macclesfield`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Macclesfield" slug="macclesfield" />
      <MacclesfieldPage />
    </>
  );
}
