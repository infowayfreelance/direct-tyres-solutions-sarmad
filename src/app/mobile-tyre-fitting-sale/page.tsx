import type { Metadata } from "next";
import SalePage from "@/components/locations/SalePage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Sale | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Sale. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M60 and A56.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-sale`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Sale" slug="sale" />
      <SalePage />
    </>
  );
}
