import type { Metadata } from "next";
import MacclesfieldPage from "@/components/locations/MacclesfieldPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Macclesfield | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Macclesfield. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the A523 and A537.",
};

export default function Page() {
  return <MacclesfieldPage />;
}
