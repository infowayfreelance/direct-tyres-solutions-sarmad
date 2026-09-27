import type { Metadata } from "next";
import PrestwichPage from "@/components/locations/PrestwichPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Prestwich | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Prestwich. Rapid response home, workplace and roadside tyre replacement covering routes around the M60 and A56.",
};

export default function Page() {
  return <PrestwichPage />;
}
