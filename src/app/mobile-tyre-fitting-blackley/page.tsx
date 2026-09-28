import type { Metadata } from "next";
import BlackleyPage from "@/components/locations/BlackleyPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Blackley | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Blackley, North Manchester. Emergency roadside and doorstep tyre replacement within 20–35 minutes.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-blackley`,
  },
};

export default function Page() {
  return (
    <>
      <LocationJsonLd areaLabel="Blackley" slug="blackley" />
      <BlackleyPage />
    </>
  );
}
