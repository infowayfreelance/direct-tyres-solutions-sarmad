import type { Metadata } from "next";
import StocktonHeathPage from "@/components/locations/StocktonHeathPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Stockton Heath | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Stockton Heath. Rapid response home, workplace and roadside tyre replacement covering routes around M56, A49, A56.",
};

export default function Page() {
  return <StocktonHeathPage />;
}
