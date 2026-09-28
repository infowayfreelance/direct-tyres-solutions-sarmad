import type { Metadata } from "next";
import KnutsfordPage from "@/components/locations/KnutsfordPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Knutsford | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Knutsford. Rapid response home, workplace and roadside tyre replacement covering market town routes around the A50 and M6.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-knutsford`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Knutsford" slug="knutsford" />
      <KnutsfordPage />
    </>
  );
}
