import Link from "next/link";
import { MapPin, PhoneCall } from "lucide-react";
import { locationAreasByRegion } from "@/lib/locations-data";

export default function AreasWeCoverPage() {
  const totalAreas = locationAreasByRegion.reduce((sum, group) => sum + group.areas.length, 0);

  return (
    <main className="w-full pt-20 bg-primary-dark">
      <section className="w-full bg-primary-dark py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col gap-4 text-center">
          <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-widest">
            Full Coverage Directory
          </span>
          <h1 className="font-heading text-[36px] leading-[42px] md:text-[56px] md:leading-[64px] tracking-[-0.02em] font-black text-white">
            Areas We Cover
          </h1>
          <p className="text-[16px] leading-[26px] md:text-[18px] md:leading-[28px] text-gray-400 max-w-2xl mx-auto">
            Direct Tyre Solutions runs 24/7 mobile tyre fitting across {totalAreas} towns and
            districts &mdash; from Greater Manchester out through Cheshire, Lancashire, and West
            Yorkshire. Find your area below to see local response times and coverage details.
          </p>
          <a
            href="tel:08009992470"
            className="mx-auto mt-2 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-secondary hover:bg-secondary-hover text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold transition-all shadow-md"
          >
            <PhoneCall className="h-5 w-5" fill="currentColor" strokeWidth={0} />
            Call 0800 999 2470
          </a>
        </div>
      </section>

      <section className="w-full pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {locationAreasByRegion.map((group) => (
            <div
              key={group.region}
              className="bg-primary/60 rounded-2xl p-6 flex flex-col gap-3 border border-white/10"
            >
              <h2 className="font-heading text-[18px] leading-[24px] font-bold text-secondary uppercase tracking-[0.04em]">
                {group.region}
              </h2>
              <ul className="grid grid-cols-1 gap-1.5">
                {group.areas.map((area) => (
                  <li key={area.slug}>
                    <Link
                      href={area.href}
                      className="flex items-center gap-2 py-1 text-[15px] leading-[22px] text-gray-300 hover:text-white transition-colors"
                    >
                      <MapPin className="h-3.5 w-3.5 text-secondary-hover shrink-0" />
                      {area.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-secondary py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="font-heading text-[28px] leading-[34px] md:text-[32px] md:leading-[38px] font-extrabold text-primary">
              Can&apos;t see your exact street?
            </h2>
            <p className="text-[15px] leading-[24px] text-primary/80 mt-1">
              We dispatch fully mobile vans well beyond this list &mdash; call us and we&apos;ll
              confirm coverage and arrival time for your postcode.
            </p>
          </div>
          <a
            href="tel:08009992470"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary hover:bg-primary-dark text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold transition-all shadow-md shrink-0"
          >
            <PhoneCall className="h-5 w-5" />
            Call 0800 999 2470
          </a>
        </div>
      </section>
    </main>
  );
}
