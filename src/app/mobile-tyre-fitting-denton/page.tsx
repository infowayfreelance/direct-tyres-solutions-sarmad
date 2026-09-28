import type { Metadata } from "next";
import DentonPage from "@/components/locations/DentonPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Denton | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Denton. Rapid response home, workplace and roadside tyre replacement covering routes around M60, M67, A57.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-denton`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Denton" slug="denton" />
      <DentonPage />
    </>
  );
}
