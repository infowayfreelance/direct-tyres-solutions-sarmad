import type { Metadata } from "next";
import AccringtonPage from "@/components/locations/AccringtonPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Accrington | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Accrington. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M65 and A680.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-accrington`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Accrington" slug="accrington" />
      <AccringtonPage />
    </>
  );
}
