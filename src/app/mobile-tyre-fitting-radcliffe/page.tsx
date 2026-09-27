import type { Metadata } from "next";
import RadcliffePage from "@/components/locations/RadcliffePage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Radcliffe | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Radcliffe. Rapid response home, workplace and roadside tyre replacement covering routes around the M60 and A665.",
};

export default function Page() {
  return <RadcliffePage />;
}
