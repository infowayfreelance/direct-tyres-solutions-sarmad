import type { Metadata } from "next";
import TraffordParkPage from "@/components/locations/TraffordParkPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Trafford Park | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Trafford Park. Rapid home, workplace and roadside tyre replacement covering industrial routes around the M60 and M602.",
};

export default function Page() {
  return <TraffordParkPage />;
}
