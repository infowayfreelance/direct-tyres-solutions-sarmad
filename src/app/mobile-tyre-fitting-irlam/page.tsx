import type { Metadata } from "next";
import IrlamPage from "@/components/locations/IrlamPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Irlam | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Irlam. Rapid response home, workplace and roadside tyre replacement covering residential routes around the M60 and A57.",
};

export default function Page() {
  return <IrlamPage />;
}
