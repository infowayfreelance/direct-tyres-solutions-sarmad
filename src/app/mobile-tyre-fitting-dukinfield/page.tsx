import type { Metadata } from "next";
import DukinfieldPage from "@/components/locations/DukinfieldPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Dukinfield | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Dukinfield. Rapid home, workplace and roadside tyre replacement covering residential routes around the M67 and A57.",
};

export default function Page() {
  return <DukinfieldPage />;
}
