import type { Metadata } from "next";
import MostonPage from "@/components/locations/MostonPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Moston | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Moston, North Manchester. On-demand mobile tyre fitting within 20–35 minutes.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-moston`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Moston" slug="moston" />
      <MostonPage />
    </>
  );
}
