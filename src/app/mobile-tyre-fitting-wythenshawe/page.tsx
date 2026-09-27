import type { Metadata } from "next";
import WythenshawePage from "@/components/locations/WythenshawePage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Wythenshawe | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Wythenshawe. Rapid roadside and home tyre replacement covering Manchester Airport and routes around the M56.",
};

export default function Page() {
  return <WythenshawePage />;
}
