import type { Metadata } from "next";
import HeywoodPage from "@/components/locations/HeywoodPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Heywood | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Heywood. Rapid response junction and roadside tyre replacement covering routes around the M62 and M66.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-heywood`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Heywood" slug="heywood" />
      <HeywoodPage />
    </>
  );
}
