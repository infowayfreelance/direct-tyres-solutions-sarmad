import type { Metadata } from "next";
import ChorleyPage from "@/components/locations/ChorleyPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Chorley | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Chorley. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M61 and M6.",
};

export default function Page() {
  return <ChorleyPage />;
}
