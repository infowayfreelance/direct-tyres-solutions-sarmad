import type { Metadata } from "next";
import StockportPage from "@/components/locations/StockportPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Stockport | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Stockport. Rapid response home, workplace and roadside tyre replacement covering routes around M60, A6, A34.",
};

export default function Page() {
  return <StockportPage />;
}
