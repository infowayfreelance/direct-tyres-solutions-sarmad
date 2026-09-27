import type { Metadata } from "next";
import LittleboroughPage from "@/components/locations/LittleboroughPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Littleborough | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Littleborough. Rapid response rural and A-road tyre replacement covering routes around the A58 and A6033.",
};

export default function Page() {
  return <LittleboroughPage />;
}
