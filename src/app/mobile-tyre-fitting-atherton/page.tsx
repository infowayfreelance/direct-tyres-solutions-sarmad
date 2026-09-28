import type { Metadata } from "next";
import AthertonPage from "@/components/locations/AthertonPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Atherton | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Atherton. Rapid home, workplace and roadside tyre replacement covering residential routes around the A577 and A579.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-atherton`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Atherton" slug="atherton" />
      <AthertonPage />
    </>
  );
}
