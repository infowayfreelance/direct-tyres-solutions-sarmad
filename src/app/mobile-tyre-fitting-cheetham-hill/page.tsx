import type { Metadata } from "next";
import CheethamHillPage from "@/components/locations/CheethamHillPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Cheetham Hill | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Cheetham Hill, Manchester. Emergency roadside and driveway tyre fitting within 20–35 minutes.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-cheetham-hill`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Cheetham Hill" slug="cheetham-hill" />
      <CheethamHillPage />
    </>
  );
}
