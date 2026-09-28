import type { Metadata } from "next";
import HomePage3 from "@/components/home3/HomePage3";
import { SITE_URL } from "@/lib/seo";

const title = "Direct Tyre Solutions | 24/7 Mobile Tyre Fitting";
const description =
  "Fast, fully insured 24/7 mobile tyre fitting at home, work or roadside across Greater Manchester, Cheshire, Lancashire & West Yorkshire. Call now.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
  },
  twitter: {
    title,
    description,
  },
};

export default function Page() {
  return <HomePage3 />;
}
