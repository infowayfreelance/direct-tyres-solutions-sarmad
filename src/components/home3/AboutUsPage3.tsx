import { CheckCircle2, MapPin, PhoneCall, ShieldCheck, Star, Timer, UserCheck } from "lucide-react";
import Reveal from "../Reveal";
import CTA3 from "./CTA3";
import { heroChecklist3, siteConfig3, trustBar3 } from "@/lib/site-data3";

const icons = {
  shield: ShieldCheck,
  "user-check": UserCheck,
  timer: Timer,
  star: Star,
} as const;

export default function AboutUsPage3() {
  const telHref = `tel:${siteConfig3.phone.replace(/\s/g, "")}`;

  return (
    <main className="pt-20">
      <section className="bg-primary-dark py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <span className="text-secondary font-bold tracking-[0.15em] uppercase text-sm mb-3 block">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-black text-white tracking-tight">
              A Family Business On The Road Since 1996
            </h1>
            <p className="text-gray-300 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
              {siteConfig3.name} started as a small family operation and has
              grown into a 24/7 mobile tyre-fitting service trusted across
              Greater Manchester, Cheshire, Lancashire and West Yorkshire —
              without ever losing the personal touch of a family-run garage.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-primary-dark border-y border-white/10 py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 lg:divide-x lg:divide-white/10">
            {trustBar3.map((item, i) => {
              const Icon = icons[item.icon as keyof typeof icons];
              return (
                <Reveal
                  key={item.title}
                  delayMs={i * 80}
                  className="flex items-center gap-3 lg:justify-center lg:px-4"
                >
                  <Icon className="h-7 w-7 text-secondary shrink-0" />
                  <div>
                    <h3 className="text-white font-bold text-sm leading-tight">{item.title}</h3>
                    <p className="text-gray-400 text-xs leading-tight">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-primary-dark py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Reveal className="space-y-5">
            <h2 className="font-heading text-2xl md:text-3xl font-black text-white">
              What We Do
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Rather than asking you to come to us, we bring a fully equipped
              mobile workshop to your home, your workplace, or wherever
              you&apos;ve broken down. Every van carries the same tools and
              premium tyre brands you&apos;d find in a traditional garage, so
              there&apos;s no compromise on the job — just less hassle for
              you.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {heroChecklist3.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-white font-medium">
                  <CheckCircle2
                    className="h-5 w-5 text-secondary shrink-0"
                    fill="currentColor"
                    stroke="var(--color-primary-dark)"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delayMs={120} className="space-y-5">
            <h2 className="font-heading text-2xl md:text-3xl font-black text-white">
              Where We Cover
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Our vans run dispatch routes across Greater Manchester,
              Cheshire, Lancashire and West Yorkshire — from city centres to
              rural villages — with an average response time of 30–45
              minutes.
            </p>
            <div className="flex items-start gap-3 bg-primary/60 border border-white/10 rounded-2xl p-5">
              <MapPin className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-bold">100+ towns and districts covered</p>
                <p className="text-gray-400 text-sm mt-1">
                  See the full list on our{" "}
                  <a href="/areas-we-cover" className="text-secondary hover:underline">
                    Areas We Cover
                  </a>{" "}
                  page.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-primary-dark border-t border-white/10 py-14 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="font-heading text-2xl md:text-3xl font-black text-white">
              Need a hand right now?
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">
              Our team is on call day and night. Get in touch and we&apos;ll
              have a van on its way.
            </p>
            <a
              href={telHref}
              className="mt-6 inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-secondary text-primary font-bold rounded-full shadow-lg hover:bg-secondary-hover transition-colors"
            >
              <PhoneCall className="h-5 w-5" fill="currentColor" strokeWidth={0} />
              Call {siteConfig3.phone}
            </a>
          </Reveal>
        </div>
      </section>

      <CTA3 />
    </main>
  );
}
