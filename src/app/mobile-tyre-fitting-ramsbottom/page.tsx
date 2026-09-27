import type { Metadata } from "next";
import RamsbottomPage from "@/components/locations/RamsbottomPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Ramsbottom | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Ramsbottom. Rapid response rural and A-road tyre replacement covering routes around the M66 and A56.",
};

export default function Page() {
  return <RamsbottomPage />;
}
