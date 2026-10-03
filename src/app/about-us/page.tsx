import type { Metadata } from "next";
import AboutUsPage3 from "@/components/home3/AboutUsPage3";
import { SITE_URL } from "@/lib/seo";

const title = "About Us | Direct Tyre Solutions";
const description =
  "A family business since 1996, now running 24/7 mobile tyre fitting across Greater Manchester, Cheshire, Lancashire and West Yorkshire.";
const url = `${SITE_URL}/about-us`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
  },
  twitter: {
    title,
    description,
  },
};

export default function Page() {
  return <AboutUsPage3 />;
}
