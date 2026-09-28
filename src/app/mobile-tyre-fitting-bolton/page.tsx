import type { Metadata } from "next";
import BoltonPage from "@/components/locations/BoltonPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Bolton | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Bolton. Rapid response home, workplace and roadside tyre replacement covering routes around M61, A666, A58.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-bolton`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Bolton" slug="bolton" />
      <BoltonPage />
    </>
  );
}
