import type { Metadata } from "next";
import BradfordPage from "@/components/locations/BradfordPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Bradford | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Bradford. Rapid response home, workplace and roadside tyre replacement covering city routes around the M606, M62 and A650.",
};

export default function Page() {
  return <BradfordPage />;
}
