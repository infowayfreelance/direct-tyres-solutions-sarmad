import type { Metadata } from "next";
import WidnesPage from "@/components/locations/WidnesPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Widnes | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Widnes. Rapid response home, workplace and roadside tyre replacement covering routes around M62, A557, A562.",
};

export default function Page() {
  return <WidnesPage />;
}
