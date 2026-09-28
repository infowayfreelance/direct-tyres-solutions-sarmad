import type { Metadata } from "next";
import HazelGrovePage from "@/components/locations/HazelGrovePage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Hazel Grove | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Hazel Grove. Rapid response home, workplace and roadside tyre replacement covering routes around A6, A555, A627.",
};

export default function Page() {
  return <HazelGrovePage />;
}
