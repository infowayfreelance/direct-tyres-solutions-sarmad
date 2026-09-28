import Image from "next/image";
import { CheckCircle2, ChevronDown, Disc, Home, PhoneCall, Route, ShieldCheck, Truck, Unlock, Wrench, Zap } from "lucide-react";

export default function FarnworthPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      <div className="flex flex-col w-full text-white">
      <section className="relative w-full overflow-hidden bg-primary-dark py-20 px-4 sm:px-6">
      <div className="absolute inset-0 z-0">
      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/hero-section-images-936x527.webp')" }}></div>
      <div className="absolute inset-0 bg-primary-dark/90 backdrop-blur-sm"></div>
      </div>
      <div className="relative z-10 max-w-[640px] mx-auto text-center flex flex-col items-center">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-white mb-6 shadow-sm">
      <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold">24/7 Rapid Response Unit</span>
      </div>
      <h1 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold sm:text-[56px] sm:leading-[64px] sm:tracking-[-0.02em] sm:font-black text-white font-extrabold uppercase mb-4 text-balance">
              24/7 Mobile Tyre Fitting in Farnworth
            </h1>
      <p className="text-[18px] leading-[28px] text-gray-400 max-w-lg mb-8">
              On-demand mobile tyre repairs and replacements across Farnworth, Ellesmere Centre, and surrounding commuter routes.
            </p>
      <a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider transition-transform duration-150 active:scale-95 shadow-xl hover:bg-secondary-hover" href="tel:08009992470">
      <PhoneCall className="text-primary h-5 w-5" fill="currentColor" strokeWidth={0} />
      <span>Call 0800 999 2470</span>
      </a>
      <div className="mt-6 flex items-center justify-center gap-6 text-gray-400">
      <div className="flex items-center gap-1.5 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <ShieldCheck className="text-secondary h-[18px] w-[18px]" />
      <span>BS AU 159 Certified</span>
      </div>
      <div className="flex items-center gap-1.5 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <Zap className="text-secondary h-[18px] w-[18px]" />
      <span>Avg 30-Min Arrival</span>
      </div>
      </div>
      </div>
      </section>
      <div className="w-full bg-primary-dark py-16 px-4 sm:px-6">
      <div className="max-w-[640px] mx-auto flex flex-col gap-14">
      <section className="flex flex-col gap-4">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary">Local Coverage</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">Emergency Assistance Across Farnworth &amp; Surrounds</h2>
      <div className="space-y-4 text-[15px] leading-[24px] text-gray-400">
      <p>
                  Whether stranded near the busy Ellesmere Retail Centre, parked on a residential driveway along Memorial Road, or facing an abrupt puncture on the morning school run through Farnworth town centre, our fully equipped mobile workshops provide rapid, on-site rescue. We bring specialized commercial tyre-changing machinery directly to your stranded position, bypassing the stress of recovery trucks or crowded local garages.
                </p>
      <p>
                  Operating 24 hours a day, 365 days a year, our dedicated mobile technicians navigate Farnworth’s key residential arterial links and commercial zones daily. We ensure safe, roadside and driveway tyre replacements that get you moving quickly without risking wheel or rim damage.
                </p>
      </div>
      </section>
      <div className="w-full h-px bg-primary"></div>
      <section className="flex flex-col gap-6">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary">Our Capabilities</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white mt-1">Specialist Roadside &amp; Driveway Services</h2>
      </div>
      <div className="relative overflow-hidden rounded-2xl bg-primary/60 shadow-md">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Mobile tyre technician performing on-site wheel replacement" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-56 object-cover" />
      </div>
      <div className="flex flex-col gap-4">
      <div className="flex items-start gap-4 p-4 rounded-2xl bg-primary/60 shadow-sm">
      <div className="p-2.5 rounded-full bg-accent text-white mt-0.5">
      <Disc className="h-[20px] w-[20px]" />
      </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Emergency Mobile Replacement</h3>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-1">Comprehensive on-the-spot tyre supply and fitting for cars, 4x4s, and light commercial vans stranded curbside or at home.</p>
      </div>
      </div>
      <div className="flex items-start gap-4 p-4 rounded-2xl bg-primary/60 shadow-sm">
      <div className="p-2.5 rounded-full bg-accent text-white mt-0.5">
      <Wrench className="h-[20px] w-[20px]" />
      </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Safe Puncture Repair (BS AU 159)</h3>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-1">Full British Standard minor tread puncture remediation, complete with structural internal patch seals and bead re-seating.</p>
      </div>
      </div>
      <div className="flex items-start gap-4 p-4 rounded-2xl bg-primary/60 shadow-sm">
      <div className="p-2.5 rounded-full bg-accent text-white mt-0.5">
      <Unlock className="h-[20px] w-[20px]" />
      </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Specialist Locking Wheel Nut Removal</h3>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-1">Non-destructive extraction tools for stripped, rounded, or missing security keys without inflicting cosmetic wheel rim damage.</p>
      </div>
      </div>
      <div className="flex items-start gap-4 p-4 rounded-2xl bg-primary/60 shadow-sm">
      <div className="p-2.5 rounded-full bg-accent text-white mt-0.5">
      <Home className="h-[20px] w-[20px]" />
      </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Home Driveway &amp; Workplace Callouts</h3>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-1">Convenient scheduled or emergency tyre fitting while you work or relax at home, fully balanced with new rubber valves fitted.</p>
      </div>
      </div>
      </div>
      </section>
      <div className="w-full h-px bg-primary"></div>
      <section className="flex flex-col gap-3 p-6 rounded-2xl bg-primary/60">
      <div className="flex items-center gap-2 text-secondary">
      <Route className="h-[20px] w-[20px]" />
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider">Fast Corridor Access</span>
      </div>
      <p className="text-[18px] leading-[28px] text-white">
                Operating daily across the <strong className="text-white font-bold">A666 East Lancs corridor</strong>, <strong className="text-white font-bold">A575 Manchester Road</strong>, <strong className="text-white font-bold">Little Hulton Road</strong>, and providing immediate coverage to <strong className="text-white font-bold">Little Hulton</strong>, <strong className="text-white font-bold">Kearsley</strong>, <strong className="text-white font-bold">Little Hulton</strong>, <strong className="text-white font-bold">Farnworth</strong>, and <strong className="text-white font-bold">Radcliffe</strong>.
              </p>
      </section>
      <div className="w-full h-px bg-primary"></div>
      <section className="flex flex-col gap-6">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary">Step-by-Step</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white mt-1">How It Works</h2>
      </div>
      <div className="flex flex-col gap-4">
      <div className="flex items-start gap-4 p-4 rounded-xl bg-primary-dark">
      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center">1</span>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Call Our 24/7 Dispatch Desk</h3>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-0.5">Ring our emergency line directly. Confirm your tyre size, specific breakdown location, or vehicle registration mark.</p>
      </div>
      </div>
      <div className="flex items-start gap-4 p-4 rounded-xl bg-primary-dark">
      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center">2</span>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Instant Guaranteed Quotation</h3>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-0.5">Receive clear, fixed pricing upfront including callout, fitting, digital wheel balancing, and old tyre casing disposal.</p>
      </div>
      </div>
      <div className="flex items-start gap-4 p-4 rounded-xl bg-primary-dark">
      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center">3</span>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Service Van Mobilisation</h3>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-0.5">The nearest fully stocked mobile technician is routed immediately toward your coordinates in Farnworth.</p>
      </div>
      </div>
      <div className="flex items-start gap-4 p-4 rounded-xl bg-primary-dark">
      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center">4</span>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Precision Roadside Fitting</h3>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-0.5">We conduct safe lifting, dismounting, high-pressure bead inflation, laser wheel balancing, and precise torque wrench tightening.</p>
      </div>
      </div>
      <div className="flex items-start gap-4 p-4 rounded-xl bg-primary-dark">
      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center">5</span>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Contactless Roadside Checkout</h3>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-0.5">Inspect the work and settle with any major debit, credit, or fleet company card via our secure mobile card terminal.</p>
      </div>
      </div>
      </div>
      </section>
      <div className="w-full h-px bg-primary"></div>
      <section className="flex flex-col gap-4">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary">Recent Deployment</span>
      <div className="p-5 rounded-2xl bg-primary/60 shadow-md flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
      <div className="flex items-center gap-2">
      <span className="p-1 rounded-full bg-accent text-white flex items-center justify-center">
      <CheckCircle2 className="h-[16px] w-[16px]" />
      </span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Vauxhall Astra — Memorial Road, Farnworth</h3>
      </div>
      <span className="px-2.5 py-1 rounded-full bg-primary text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold">29 min arrival</span>
      </div>
      <div className="relative overflow-hidden rounded-xl bg-primary-dark">
      <Image src="/gallery-roadside-fitting.webp" alt="Driveway puncture repair completed on Vauxhall Astra" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-44 object-cover" />
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Driver experienced sudden deflation from a heavy industrial roofing nail while parking near Memorial Road shops. Dispatched an emergency van carrying 205/55 R16 stock. Conducted an internal BS AU 159 combination patch-plug repair on the driveway, tested valve seals, and had the motorist safely back on schedule in under 45 minutes total.
                </p>
      </div>
      </section>
      <div className="w-full h-px bg-primary"></div>
      <section className="flex flex-col gap-6">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary">Got Questions?</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white mt-1">Frequently Asked Questions</h2>
      </div>
      <div className="flex flex-col gap-3" id="faq-accordion">
      <details className="rounded-xl bg-primary/60 overflow-hidden group"><summary className="w-full p-4 text-left flex items-center justify-between gap-4 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white focus:outline-none cursor-pointer list-none">
      <span>How fast can a technician reach Farnworth?</span>
      <ChevronDown className="text-secondary transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-4 pb-4 text-[15px] leading-[24px] text-gray-400">
                    Our average emergency arrival window in Farnworth, Little Hulton, and the A666 corridor is 30 to 45 minutes, depending on live traffic conditions.
                  </div></details>
      <details className="rounded-xl bg-primary/60 overflow-hidden group"><summary className="w-full p-4 text-left flex items-center justify-between gap-4 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white focus:outline-none cursor-pointer list-none">
      <span>Can you fix punctures at my home address?</span>
      <ChevronDown className="text-secondary transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-4 pb-4 text-[15px] leading-[24px] text-gray-400">
                    Yes. We regularly attend driveways and designated parking bays across Farnworth. As long as our mobile van can park adjacent or nearby, we can inspect, patch, or replace your tyre safely on site.
                  </div></details>
      <details className="rounded-xl bg-primary/60 overflow-hidden group"><summary className="w-full p-4 text-left flex items-center justify-between gap-4 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white focus:outline-none cursor-pointer list-none">
      <span>What if I have lost my locking wheel nut key?</span>
      <ChevronDown className="text-secondary transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-4 pb-4 text-[15px] leading-[24px] text-gray-400">
                    Our vans carry specialist reverse-thread and shroud-cutting extraction rigs designed specifically to remove stuck, rounded, or missing locking wheel bolts cleanly without damaging high-value alloy wheels.
                  </div></details>
      <details className="rounded-xl bg-primary/60 overflow-hidden group"><summary className="w-full p-4 text-left flex items-center justify-between gap-4 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white focus:outline-none cursor-pointer list-none">
      <span>Do you carry budget and premium tyre brands?</span>
      <ChevronDown className="text-secondary transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-4 pb-4 text-[15px] leading-[24px] text-gray-400">
                    Yes, our stock includes budget economy options, trusted mid-range tyres, and premium brand manufacturers like Michelin, Goodyear, Pirelli, and Continental across all popular diameter sizes.
                  </div></details>
      </div>
      </section>
      <div className="w-full h-px bg-primary"></div>
      <section className="flex flex-col items-center text-center p-8 rounded-2xl bg-primary/80 shadow-xl gap-4">
      <div className="p-3 rounded-full bg-accent text-white">
      <Truck className="h-[28px] w-[28px]" />
      </div>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">Need Emergency Assistance Right Now?</h2>
      <p className="text-[15px] leading-[24px] text-gray-400 max-w-md">
                24/7 Mobile Van Dispatched Across Farnworth, the A666 East Lancs, and surrounding Greater Manchester links.
              </p>
      <a className="mt-2 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider transition-transform duration-150 active:scale-95 shadow-lg hover:bg-secondary-hover" href="tel:08009992470">
      <PhoneCall className="text-primary h-5 w-5" fill="currentColor" strokeWidth={0} />
      <span>Call 0800 999 2470</span>
      </a>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 mt-1">Live operators on call 24 hours a day, 7 days a week</span>
      </section>
      </div>
      </div>
      </div>
    </main>
  );
}
