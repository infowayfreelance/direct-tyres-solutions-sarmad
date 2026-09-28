import type { Metadata } from "next";
import AshtonUnderLynePage from "@/components/locations/AshtonUnderLynePage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting Ashton-under-Lyne | DTS",
  description:
    "24/7 mobile tyre fitting in Ashton-under-Lyne. Rapid home, workplace and roadside tyre replacement covering the M60 and A635.",
};

export default function Page() {
  return <AshtonUnderLynePage />;
}
