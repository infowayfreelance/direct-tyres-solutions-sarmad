import type { Metadata } from "next";
import BredburyPage from "@/components/locations/BredburyPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Bredbury | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Bredbury. Rapid response home, workplace and roadside tyre replacement covering industrial estates and routes around the M60 and A560.",
};

export default function Page() {
  return <BredburyPage />;
}
