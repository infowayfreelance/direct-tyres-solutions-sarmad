import type { Metadata } from "next";
import DarwenPage from "@/components/locations/DarwenPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Darwen | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Darwen. Rapid response home, workplace and roadside tyre replacement covering moorland routes around the M65 and A666.",
};

export default function Page() {
  return <DarwenPage />;
}
