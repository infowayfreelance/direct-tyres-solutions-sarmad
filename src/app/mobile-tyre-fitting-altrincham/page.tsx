import type { Metadata } from "next";
import AltrinchamPage from "@/components/locations/AltrinchamPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Altrincham | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Altrincham. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the A56 and M56.",
};

export default function Page() {
  return <AltrinchamPage />;
}
