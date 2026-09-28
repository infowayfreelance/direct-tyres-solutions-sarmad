import type { Metadata } from "next";
import CongletonPage from "@/components/locations/CongletonPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Congleton | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Congleton. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the A34 and A536.",
};

export default function Page() {
  return <CongletonPage />;
}
