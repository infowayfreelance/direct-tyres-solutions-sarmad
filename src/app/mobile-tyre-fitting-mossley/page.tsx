import type { Metadata } from "next";
import MossleyPage from "@/components/locations/MossleyPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Mossley | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Mossley. Rapid response home, workplace and roadside tyre replacement covering Pennine hillside routes around the A635 and A670.",
};

export default function Page() {
  return <MossleyPage />;
}
