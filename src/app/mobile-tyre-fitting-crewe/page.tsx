import type { Metadata } from "next";
import CrewePage from "@/components/locations/CrewePage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Crewe | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Crewe. Rapid response home, workplace and roadside tyre replacement covering railway town routes around the M6 and A534.",
};

export default function Page() {
  return <CrewePage />;
}
