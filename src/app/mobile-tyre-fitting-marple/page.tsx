import type { Metadata } from "next";
import MarplePage from "@/components/locations/MarplePage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Marple | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Marple. Rapid response home, workplace and roadside tyre replacement covering routes around A626, A627, A6 nearby.",
};

export default function Page() {
  return <MarplePage />;
}
