import type { Metadata } from "next";
import WilmslowPage from "@/components/locations/WilmslowPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Wilmslow | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Wilmslow. Rapid response home, workplace and roadside tyre replacement covering town centre routes around the A34 and A538.",
};

export default function Page() {
  return <WilmslowPage />;
}
