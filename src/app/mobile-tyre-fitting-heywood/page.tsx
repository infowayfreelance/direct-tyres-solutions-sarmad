import type { Metadata } from "next";
import HeywoodPage from "@/components/locations/HeywoodPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Heywood | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Heywood. Rapid response junction and roadside tyre replacement covering routes around the M62 and M66.",
};

export default function Page() {
  return <HeywoodPage />;
}
