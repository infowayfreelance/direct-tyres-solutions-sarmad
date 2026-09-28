import type { Metadata } from "next";
import RuncornPage from "@/components/locations/RuncornPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Runcorn | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Runcorn. Rapid response home, workplace and roadside tyre replacement covering routes around M56, A533, A557.",
};

export default function Page() {
  return <RuncornPage />;
}
