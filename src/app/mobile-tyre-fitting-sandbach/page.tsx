import type { Metadata } from "next";
import SandbachPage from "@/components/locations/SandbachPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Sandbach | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Sandbach. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M6 and A534.",
};

export default function Page() {
  return <SandbachPage />;
}
