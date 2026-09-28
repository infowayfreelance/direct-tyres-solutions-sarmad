import type { Metadata } from "next";
import HomePage3 from "@/components/home3/HomePage3";

export const metadata: Metadata = {
  title: "Direct Tyre Solutions | 24/7 Mobile Tyre Fitting",
  description:
    "Fast, fully insured 24/7 mobile tyre fitting at home, work or roadside across Greater Manchester, Cheshire, Lancashire & West Yorkshire. Call now.",
};

export default function Page() {
  return <HomePage3 />;
}
