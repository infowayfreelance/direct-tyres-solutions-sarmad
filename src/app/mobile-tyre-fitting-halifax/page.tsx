import type { Metadata } from "next";
import HalifaxPage from "@/components/locations/HalifaxPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Halifax | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Halifax. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M62 and A58.",
};

export default function Page() {
  return <HalifaxPage />;
}
