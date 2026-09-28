import type { Metadata } from "next";
import BramhallPage from "@/components/locations/BramhallPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Bramhall | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Bramhall. Rapid response home, workplace and roadside tyre replacement covering routes around A555, A5102, A34.",
};

export default function Page() {
  return <BramhallPage />;
}
