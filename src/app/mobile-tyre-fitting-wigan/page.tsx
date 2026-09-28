import type { Metadata } from "next";
import WiganPage from "@/components/locations/WiganPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Wigan | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Wigan. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M6 and A49.",
};

export default function Page() {
  return <WiganPage />;
}
