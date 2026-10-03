import { CreditCard, Disc, Lock, PhoneCall, RefreshCw, Wrench } from "lucide-react";
import Reveal from "../Reveal";
import CTA3 from "./CTA3";
import { services3, siteConfig3 } from "@/lib/site-data3";

const icons = {
  disc: Disc,
  wrench: Wrench,
  refresh: RefreshCw,
  lock: Lock,
  card: CreditCard,
} as const;

export default function ServicesPage3() {
  const telHref = `tel:${siteConfig3.phone.replace(/\s/g, "")}`;

  return (
    <main className="pt-20">
      <section className="bg-primary-dark py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <span className="text-secondary font-bold tracking-[0.15em] uppercase text-sm mb-3 block">
              Our Services
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-black text-white tracking-tight">
              Professional Tyre Solutions Wherever You Are
            </h1>
            <p className="text-gray-300 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
              From emergency callouts to scheduled tyre replacement, our fully
              insured mobile vans bring the whole workshop to your home,
              workplace or the roadside — 24 hours a day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-primary-dark pb-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services3.map((service, i) => {
            const is247 = service.icon === "24-7";
            const Icon = !is247 ? icons[service.icon as keyof typeof icons] : null;
            return (
              <Reveal key={service.title} delayMs={i * 80}>
                <div className="bg-primary/60 border border-white/10 rounded-2xl p-8 h-full flex flex-col items-center text-center hover:border-secondary/40 hover:-translate-y-1 transition-all duration-300">
                  <span className="flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-5 shrink-0">
                    {is247 ? (
                      <span className="text-white font-black text-sm leading-none">24/7</span>
                    ) : (
                      Icon && <Icon className="h-7 w-7 text-white" />
                    )}
                  </span>
                  <h2 className="text-lg font-bold text-white mb-2">{service.title}</h2>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                  <span className="block w-10 h-1 bg-secondary rounded-full mt-5" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-primary-dark border-t border-white/10 py-14 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="font-heading text-2xl md:text-3xl font-black text-white">
              Not sure what you need?
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">
              Call our team and describe the problem — we&apos;ll tell you
              exactly what service applies and give you an honest price
              before we dispatch a van.
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
