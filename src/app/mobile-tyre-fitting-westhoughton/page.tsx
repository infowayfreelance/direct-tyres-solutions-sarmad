import type { Metadata } from "next";
import WesthoughtonPage from "@/components/locations/WesthoughtonPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Westhoughton | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Westhoughton. Rapid response home, workplace and roadside tyre replacement covering routes around M61, A6, A58.",
};

export default function Page() {
  return <WesthoughtonPage />;
}
