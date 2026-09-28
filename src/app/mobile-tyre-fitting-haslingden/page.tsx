import type { Metadata } from "next";
import HaslingdenPage from "@/components/locations/HaslingdenPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Haslingden | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Haslingden. Rapid response home, workplace and roadside tyre replacement covering Pennine hillside routes around the M65 and A56.",
};

export default function Page() {
  return <HaslingdenPage />;
}
