import type { Metadata } from "next";
import EcclesPage from "@/components/locations/EcclesPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Eccles | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Eccles. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M602 and A57.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-eccles`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Eccles" slug="eccles" />
      <EcclesPage />
    </>
  );
}
