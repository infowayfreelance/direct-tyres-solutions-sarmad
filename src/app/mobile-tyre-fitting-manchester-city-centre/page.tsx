import type { Metadata } from "next";
import ManchesterCityCentrePage from "@/components/locations/ManchesterCityCentrePage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting Manchester City Centre | DTS",
  description:
    "Specialist mobile tyre technicians equipped for city centre multi-storeys, underground car parks, and curbside emergencies in 15–30 minutes.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-manchester-city-centre`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd
        areaLabel="Manchester City Centre"
        slug="manchester-city-centre"
      />
      <ManchesterCityCentrePage />
    </>
  );
}
