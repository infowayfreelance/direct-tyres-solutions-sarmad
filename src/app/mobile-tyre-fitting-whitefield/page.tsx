import type { Metadata } from "next";
import WhitefieldPage from "@/components/locations/WhitefieldPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Whitefield | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Whitefield. Rapid response home, workplace and roadside tyre replacement covering routes around the M60 and M66.",
};

export default function Page() {
  return <WhitefieldPage />;
}
