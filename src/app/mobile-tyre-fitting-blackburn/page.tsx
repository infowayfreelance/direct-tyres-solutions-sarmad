import type { Metadata } from "next";
import BlackburnPage from "@/components/locations/BlackburnPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Blackburn | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Blackburn. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M65 and A666.",
};

export default function Page() {
  return <BlackburnPage />;
}
