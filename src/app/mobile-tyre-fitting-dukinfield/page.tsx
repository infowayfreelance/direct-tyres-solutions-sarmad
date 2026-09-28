import type { Metadata } from "next";
import DukinfieldPage from "@/components/locations/DukinfieldPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Dukinfield | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Dukinfield. Rapid home, workplace and roadside tyre replacement covering residential routes around the M67 and A57.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-dukinfield`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Dukinfield" slug="dukinfield" />
      <DukinfieldPage />
    </>
  );
}
