import type { Metadata } from "next";
import AreasWeCoverPage from "@/components/AreasWeCoverPage";

export const metadata: Metadata = {
  title: "Areas We Cover | Direct Tyre Solutions",
  description:
    "Direct Tyre Solutions provides 24/7 mobile tyre fitting across 100 towns and districts in Greater Manchester, Cheshire, Lancashire and West Yorkshire. Find your area.",
};

export default function Page() {
  return <AreasWeCoverPage />;
}
