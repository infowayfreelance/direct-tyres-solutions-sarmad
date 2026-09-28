import type { Metadata } from "next";
import RawtenstallPage from "@/components/locations/RawtenstallPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Rawtenstall | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Rawtenstall. Rapid response home, workplace and roadside tyre replacement covering valley routes around the M66 and A56.",
};

export default function Page() {
  return <RawtenstallPage />;
}
