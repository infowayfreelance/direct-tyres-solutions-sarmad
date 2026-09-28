import type { Metadata } from "next";
import CheadleHulmePage from "@/components/locations/CheadleHulmePage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Cheadle Hulme | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Cheadle Hulme. Rapid response home, workplace and roadside tyre replacement covering routes around A34, A555, M60 nearby.",
};

export default function Page() {
  return <CheadleHulmePage />;
}
