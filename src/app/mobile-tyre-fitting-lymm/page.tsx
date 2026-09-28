import type { Metadata } from "next";
import LymmPage from "@/components/locations/LymmPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Lymm | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Lymm. Rapid response home, workplace and roadside tyre replacement covering routes around M6, M56, A56.",
};

export default function Page() {
  return <LymmPage />;
}
