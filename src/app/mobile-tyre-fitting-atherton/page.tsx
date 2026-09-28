import type { Metadata } from "next";
import AthertonPage from "@/components/locations/AthertonPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Atherton | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Atherton. Rapid response home, workplace and roadside tyre replacement covering residential streets and routes around the A577 and A579.",
};

export default function Page() {
  return <AthertonPage />;
}
