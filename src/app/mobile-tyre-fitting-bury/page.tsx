import type { Metadata } from "next";
import BuryPage from "@/components/locations/BuryPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Bury | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Bury. Rapid response town-centre, retail-park and roadside tyre replacement covering routes around the M66 and M60.",
};

export default function Page() {
  return <BuryPage />;
}
