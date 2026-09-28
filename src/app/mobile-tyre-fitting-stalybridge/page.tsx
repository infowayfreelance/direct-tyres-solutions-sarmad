import type { Metadata } from "next";
import StalybridgePage from "@/components/locations/StalybridgePage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Stalybridge | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Stalybridge. Rapid home, workplace and roadside tyre replacement covering valley routes around the A635 and A6018.",
};

export default function Page() {
  return <StalybridgePage />;
}
