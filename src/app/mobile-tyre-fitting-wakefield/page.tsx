import type { Metadata } from "next";
import WakefieldPage from "@/components/locations/WakefieldPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Wakefield | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Wakefield. Rapid response home, workplace and roadside tyre replacement covering routes around M1, M62, A638.",
};

export default function Page() {
  return <WakefieldPage />;
}
