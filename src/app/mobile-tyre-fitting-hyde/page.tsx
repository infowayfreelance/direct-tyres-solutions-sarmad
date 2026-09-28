import type { Metadata } from "next";
import HydePage from "@/components/locations/HydePage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Hyde | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Hyde. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M67 and A560.",
};

export default function Page() {
  return <HydePage />;
}
