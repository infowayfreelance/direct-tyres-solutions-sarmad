import type { Metadata } from "next";
import HolmesChapelPage from "@/components/locations/HolmesChapelPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Holmes Chapel | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Holmes Chapel. Rapid response home, workplace and roadside tyre replacement covering village routes around the M6 and A54.",
};

export default function Page() {
  return <HolmesChapelPage />;
}
