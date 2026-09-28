import type { Metadata } from "next";
import StretfordPage from "@/components/locations/StretfordPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Stretford | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Stretford. Rapid response home, workplace and roadside tyre replacement covering residential routes around the M60 and A56.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-stretford`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Stretford" slug="stretford" />
      <StretfordPage />
    </>
  );
}
