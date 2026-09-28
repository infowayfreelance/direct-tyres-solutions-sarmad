import type { Metadata } from "next";
import AshtonUnderLynePage from "@/components/locations/AshtonUnderLynePage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Ashton-under-Lyne | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Ashton-under-Lyne. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M60 and A635.",
};

export default function Page() {
  return <AshtonUnderLynePage />;
}
