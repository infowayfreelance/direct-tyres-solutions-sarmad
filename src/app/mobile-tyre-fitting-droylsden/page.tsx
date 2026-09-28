import type { Metadata } from "next";
import DroylsdenPage from "@/components/locations/DroylsdenPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Droylsden | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Droylsden. Rapid response home, workplace and roadside tyre replacement covering routes around A662, A635, M60 nearby.",
};

export default function Page() {
  return <DroylsdenPage />;
}
