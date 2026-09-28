import type { Metadata } from "next";
import TyldesleyPage from "@/components/locations/TyldesleyPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Tyldesley | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Tyldesley. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the A577 and A580.",
};

export default function Page() {
  return <TyldesleyPage />;
}
