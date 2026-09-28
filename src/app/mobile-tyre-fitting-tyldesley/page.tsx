import type { Metadata } from "next";
import TyldesleyPage from "@/components/locations/TyldesleyPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Tyldesley | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Tyldesley. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the A577 and A580.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-tyldesley`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Tyldesley" slug="tyldesley" />
      <TyldesleyPage />
    </>
  );
}
