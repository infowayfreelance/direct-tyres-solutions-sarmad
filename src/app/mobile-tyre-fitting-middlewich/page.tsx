import type { Metadata } from "next";
import MiddlewichPage from "@/components/locations/MiddlewichPage";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in Middlewich | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Middlewich. Rapid response home, workplace and roadside tyre replacement covering routes around M6 nearby, A54, A530.",
};

export default function Page() {
  return <MiddlewichPage />;
}
