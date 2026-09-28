import type { Metadata } from "next";
import AshtonUnderLynePage from "@/components/locations/AshtonUnderLynePage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting Ashton-under-Lyne | DTS",
  description:
    "24/7 mobile tyre fitting in Ashton-under-Lyne. Rapid home, workplace and roadside tyre replacement covering the M60 and A635.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-ashton-under-lyne`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Ashton-under-Lyne" slug="ashton-under-lyne" />
      <AshtonUnderLynePage />
    </>
  );
}
