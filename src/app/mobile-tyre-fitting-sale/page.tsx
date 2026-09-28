import type { Metadata } from "next";
import SalePage from "@/components/locations/SalePage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Sale | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Sale. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M60 and A56.",
};

export default function Page() {
  return <SalePage />;
}
