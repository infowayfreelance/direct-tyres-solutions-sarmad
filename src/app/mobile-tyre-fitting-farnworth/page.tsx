import type { Metadata } from "next";
import FarnworthPage from "@/components/locations/FarnworthPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Farnworth | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Farnworth. Rapid response home, workplace and roadside tyre replacement covering routes around M61, A666, A575.",
};

export default function Page() {
  return <FarnworthPage />;
}
