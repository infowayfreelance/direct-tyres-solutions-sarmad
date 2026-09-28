import type { Metadata } from "next";
import DentonPage from "@/components/locations/DentonPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Denton | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Denton. Rapid response home, workplace and roadside tyre replacement covering routes around M60, M67, A57.",
};

export default function Page() {
  return <DentonPage />;
}
