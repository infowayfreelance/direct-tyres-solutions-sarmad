import type { Metadata } from "next";
import WorsleyPage from "@/components/locations/WorsleyPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Worsley | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Worsley. Rapid home, workplace and roadside tyre replacement covering canal-side routes around the M60 and A572.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-worsley`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Worsley" slug="worsley" />
      <WorsleyPage />
    </>
  );
}
