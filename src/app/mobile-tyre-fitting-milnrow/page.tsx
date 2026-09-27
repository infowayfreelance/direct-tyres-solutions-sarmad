import type { Metadata } from "next";
import MilnrowPage from "@/components/locations/MilnrowPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Milnrow | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Milnrow. Rapid response junction and roadside tyre replacement covering routes around the M62 and A640.",
};

export default function Page() {
  return <MilnrowPage />;
}
