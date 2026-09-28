import type { Metadata } from "next";
import CheadlePage from "@/components/locations/CheadlePage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Cheadle | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Cheadle. Rapid response home, workplace and roadside tyre replacement covering routes around M60, M56, A34.",
};

export default function Page() {
  return <CheadlePage />;
}
