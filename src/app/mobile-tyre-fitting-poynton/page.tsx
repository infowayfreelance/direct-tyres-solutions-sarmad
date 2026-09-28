import type { Metadata } from "next";
import PoyntonPage from "@/components/locations/PoyntonPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Poynton | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Poynton. Rapid response home, workplace and roadside tyre replacement covering routes around A555, A523, A5149.",
};

export default function Page() {
  return <PoyntonPage />;
}
