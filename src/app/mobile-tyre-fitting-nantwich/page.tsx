import type { Metadata } from "next";
import NantwichPage from "@/components/locations/NantwichPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Nantwich | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Nantwich. Rapid response home, workplace and roadside tyre replacement covering market town routes around the A51 and A500.",
};

export default function Page() {
  return <NantwichPage />;
}
