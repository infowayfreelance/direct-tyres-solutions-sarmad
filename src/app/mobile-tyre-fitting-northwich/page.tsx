import type { Metadata } from "next";
import NorthwichPage from "@/components/locations/NorthwichPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Northwich | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Northwich. Rapid response home, workplace and roadside tyre replacement covering routes around M56, A556, A533.",
};

export default function Page() {
  return <NorthwichPage />;
}
