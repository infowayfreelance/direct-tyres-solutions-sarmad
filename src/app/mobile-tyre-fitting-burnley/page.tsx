import type { Metadata } from "next";
import BurnleyPage from "@/components/locations/BurnleyPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Burnley | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Burnley. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M65 and A56.",
};

export default function Page() {
  return <BurnleyPage />;
}
