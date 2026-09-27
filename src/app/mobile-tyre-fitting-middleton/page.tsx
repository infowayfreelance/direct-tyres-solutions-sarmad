import type { Metadata } from "next";
import MiddletonPage from "@/components/locations/MiddletonPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Middleton | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Middleton. Rapid response home, workplace and roadside tyre replacement covering routes around the M60 and M62.",
};

export default function Page() {
  return <MiddletonPage />;
}
