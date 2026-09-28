import type { Metadata } from "next";
import DewsburyPage from "@/components/locations/DewsburyPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Dewsbury | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Dewsbury. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M1 and A644.",
};

export default function Page() {
  return <DewsburyPage />;
}
