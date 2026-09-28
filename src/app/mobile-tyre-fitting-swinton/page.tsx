import type { Metadata } from "next";
import SwintonPage from "@/components/locations/SwintonPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Swinton | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Swinton. Rapid home, workplace and roadside tyre replacement covering residential routes around the M60 and A580.",
};

export default function Page() {
  return <SwintonPage />;
}
