import type { Metadata } from "next";
import HandforthPage from "@/components/locations/HandforthPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Handforth | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Handforth. Rapid response home, workplace and roadside tyre replacement covering residential and business park routes around the A34 and A555.",
};

export default function Page() {
  return <HandforthPage />;
}
