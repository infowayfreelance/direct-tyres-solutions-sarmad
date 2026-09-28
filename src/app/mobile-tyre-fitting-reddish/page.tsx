import type { Metadata } from "next";
import ReddishPage from "@/components/locations/ReddishPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Reddish | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Reddish. Rapid response home, workplace and roadside tyre replacement covering routes around M60 nearby, A57, A6017.",
};

export default function Page() {
  return <ReddishPage />;
}
