import type { Metadata } from "next";
import HuddersfieldPage from "@/components/locations/HuddersfieldPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Huddersfield | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Huddersfield. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M62 and A62.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-huddersfield`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Huddersfield" slug="huddersfield" />
      <HuddersfieldPage />
    </>
  );
}
