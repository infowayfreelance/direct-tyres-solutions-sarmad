import type { Metadata } from "next";
import WalkdenPage from "@/components/locations/WalkdenPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Walkden | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Walkden. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M61 and A6.",
};

export default function Page() {
  return <WalkdenPage />;
}
