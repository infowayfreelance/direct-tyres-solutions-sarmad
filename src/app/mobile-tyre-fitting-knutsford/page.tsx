import type { Metadata } from "next";
import KnutsfordPage from "@/components/locations/KnutsfordPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Knutsford | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Knutsford. Rapid response home, workplace and roadside tyre replacement covering market town routes around the A50 and M6.",
};

export default function Page() {
  return <KnutsfordPage />;
}
