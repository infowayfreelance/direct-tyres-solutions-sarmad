import type { Metadata } from "next";
import BirchwoodPage from "@/components/locations/BirchwoodPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Birchwood | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Birchwood. Rapid response home, workplace and roadside tyre replacement covering routes around M62, M6 nearby, A574.",
};

export default function Page() {
  return <BirchwoodPage />;
}
