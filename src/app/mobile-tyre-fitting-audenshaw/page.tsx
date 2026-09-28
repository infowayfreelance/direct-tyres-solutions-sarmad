import type { Metadata } from "next";
import AudenshawPage from "@/components/locations/AudenshawPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Audenshaw | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Audenshaw. Rapid response home, workplace and roadside tyre replacement covering residential and reservoir-side routes around the M60 and A635.",
};

export default function Page() {
  return <AudenshawPage />;
}
