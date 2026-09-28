import type { Metadata } from "next";
import WarringtonPage from "@/components/locations/WarringtonPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Warrington | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Warrington. Rapid response home, workplace and roadside tyre replacement covering routes around M6, M62, M56.",
};

export default function Page() {
  return <WarringtonPage />;
}
