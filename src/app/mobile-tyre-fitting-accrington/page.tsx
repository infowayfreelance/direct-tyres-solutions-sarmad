import type { Metadata } from "next";
import AccringtonPage from "@/components/locations/AccringtonPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Accrington | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Accrington. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M65 and A680.",
};

export default function Page() {
  return <AccringtonPage />;
}
