import type { Metadata } from "next";
import WinsfordPage from "@/components/locations/WinsfordPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Winsford | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Winsford. Rapid response home, workplace and roadside tyre replacement covering routes around A54, A530, A533.",
};

export default function Page() {
  return <WinsfordPage />;
}
