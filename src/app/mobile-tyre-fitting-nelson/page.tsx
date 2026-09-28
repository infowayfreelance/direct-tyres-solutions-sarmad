import type { Metadata } from "next";
import NelsonPage from "@/components/locations/NelsonPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Nelson | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Nelson. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M65 and A56.",
};

export default function Page() {
  return <NelsonPage />;
}
