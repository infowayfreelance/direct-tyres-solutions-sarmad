import type { Metadata } from "next";
import AlderleyEdgePage from "@/components/locations/AlderleyEdgePage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Alderley Edge | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Alderley Edge. Rapid home, workplace and roadside tyre replacement covering Cheshire village routes around the A34.",
};

export default function Page() {
  return <AlderleyEdgePage />;
}
