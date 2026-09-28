import type { Metadata } from "next";
import ColnePage from "@/components/locations/ColnePage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Colne | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Colne. Rapid response home, workplace and roadside tyre replacement covering Pendine hillside routes around the M65 and A56.",
};

export default function Page() {
  return <ColnePage />;
}
