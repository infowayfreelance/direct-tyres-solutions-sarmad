import type { Metadata } from "next";
import WiganPage from "@/components/locations/WiganPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Wigan | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Wigan. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M6 and A49.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-wigan`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Wigan" slug="wigan" />
      <WiganPage />
    </>
  );
}
