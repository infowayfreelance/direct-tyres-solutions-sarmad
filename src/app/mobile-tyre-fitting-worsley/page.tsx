import type { Metadata } from "next";
import WorsleyPage from "@/components/locations/WorsleyPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Worsley | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Worsley. Rapid home, workplace and roadside tyre replacement covering canal-side routes around the M60 and A572.",
};

export default function Page() {
  return <WorsleyPage />;
}
