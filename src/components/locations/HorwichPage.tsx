import Image from "next/image";
import { ChevronDown, History, Info, KeyRound, MapPin, PhoneCall, Route, ShieldCheck, Siren, Timer, Wrench } from "lucide-react";

export default function HorwichPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* SECTION 1: HERO */}
      <section className="relative w-full bg-primary overflow-hidden py-16 md:py-24">
      {/* Background Image Scrim */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero-section-images-936x527.webp')" }}></div>
      <div className="absolute inset-0 bg-primary-dark/85 backdrop-blur-[2px]"></div>
      {/* Centered Narrow Column */}
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
      {/* Status Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 mb-6">
      <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-white tracking-wider uppercase">24/7 Mobile Response · Horwich Unit Active</span>
      </div>
      {/* H1 Headline */}
      <h1 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold sm:text-[56px] sm:leading-[64px] sm:tracking-[-0.02em] sm:font-black text-white uppercase mb-4">
              24/7 Mobile Tyre Fitting in Horwich
            </h1>
      {/* Subtitle */}
      <p className="text-[18px] leading-[28px] text-gray-400 max-w-xl mb-8">
              Rapid emergency roadside, home, and commercial driveway assistance across Bolton Road, Westhoughton Road, and the central M61 corridor.
            </p>
      {/* Primary Gold Pill Action Button */}
      <a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary hover:bg-secondary-hover text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold transition-transform active:scale-95 shadow-xl shadow-black/40 group" href="tel:07955266077">
      <PhoneCall className="h-[22px] w-[22px] group-hover:rotate-12 transition-transform" />
      <span>Call 07955 266 077</span>
      </a>
      {/* Quick Micro Proof */}
      <div className="mt-6 flex items-center justify-center gap-6 text-gray-400 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <span className="inline-flex items-center gap-1.5">
      <Timer className="h-[18px] w-[18px] text-secondary" /> Average ETA: 30-45 Mins
              </span>
      <span className="inline-flex items-center gap-1.5">
      <ShieldCheck className="h-[18px] w-[18px] text-accent" /> Fully Insured Techs
              </span>
      </div>
      </div>
      </section>
      {/* Divider */}
      <div className="w-full bg-primary-dark px-4">
      <div className="max-w-2xl mx-auto h-[1px] bg-white/10"></div>
      </div>
      {/* SECTION 2: LOCAL INTRO */}
      <section className="w-full bg-primary-dark py-14">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 flex flex-col gap-5">
      <div className="flex items-center gap-2 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold tracking-widest uppercase">
      <MapPin className="h-[16px] w-[16px]" />
      <span>Immediate Horwich Coverage</span>
      </div>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">
              Zero Garage Queues. Zero Recovery Trucks.
            </h2>
      <div className="text-[15px] leading-[24px] text-gray-400 space-y-4">
      <p>
                Suffering a puncture or sudden sidewall blowout in Horwich doesn’t need to disrupt your day. Whether you are stuck on a narrow residential terraced street around Bag Lane or parked roadside near Horwich Station during peak commute, towing your vehicle to a traditional tyre depot is slow, costly, and inconvenient.
              </p>
      <p>
                Direct Tyre Solutions operates fully equipped mobile workshop vans stationed right in Greater Manchester. We bring computer-calibrated balancing machinery, commercial pneumatic bead breakers, and an extensive stock of premium and budget tyre brands straight to your vehicle. Stay in the warmth of your home or safety of your vehicle while our mobile master technicians replace or repair your tyres on the spot.
              </p>
      </div>
      <div className="p-4 rounded-2xl bg-primary/70 backdrop-blur-md border border-white/10 flex items-start gap-3 mt-2">
      <Info className="text-secondary h-[24px] w-[24px] mt-0.5" />
      <p className="text-[13px] leading-[18px] text-white">
      <span className="text-white font-semibold">Terraced Street Specialists:</span> Our bespoke, compact emergency vans are custom-built to navigate narrow Horwich back alleys and tight kerbside spaces without blocking residential access.
              </p>
      </div>
      </div>
      </section>
      {/* Divider */}
      <div className="w-full bg-primary px-4">
      <div className="max-w-2xl mx-auto h-[1px] bg-white/10"></div>
      </div>
      {/* SECTION 3: SERVICES */}
      <section className="w-full bg-primary py-14">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 flex flex-col gap-6">
      <div>
      <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold tracking-widest uppercase block mb-1">Rapid On-Site Capabilities</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">Our Horwich Mobile Services</h2>
      </div>
      {/* Compact Bulleted List */}
      <div className="space-y-4">
      <div className="p-4 rounded-2xl bg-primary-dark/80 backdrop-blur-md border border-white/10 flex items-start gap-4">
      <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
      <Siren className="text-accent h-[20px] w-[20px]" />
      </div>
      <div>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white block">Emergency Roadside Replacement</span>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">24/7 callouts for dangerous flats, blowouts, and tread separations across all major routes.</p>
      </div>
      </div>
      <div className="p-4 rounded-2xl bg-primary-dark/80 backdrop-blur-md border border-white/10 flex items-start gap-4">
      <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
      <Wrench className="text-accent h-[20px] w-[20px]" />
      </div>
      <div>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white block">BS AU 159 Puncture Seal</span>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">Legally certified permanent internal combination plug-patch repairs carried out on site whenever safe.</p>
      </div>
      </div>
      <div className="p-4 rounded-2xl bg-primary-dark/80 backdrop-blur-md border border-white/10 flex items-start gap-4">
      <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
      <KeyRound className="text-accent h-[20px] w-[20px]" />
      </div>
      <div>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white block">Locking Wheel Nut Removal</span>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">Specialist non-destructive extractor tooling for stripped, rounded, or lost locking wheel nut security keys.</p>
      </div>
      </div>
      <div className="p-4 rounded-2xl bg-primary-dark/80 backdrop-blur-md border border-white/10 flex items-start gap-4">
      <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
      <Wrench className="text-accent h-[20px] w-[20px]" />
      </div>
      <div>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white block">Driveway &amp; Workplace Fitting</span>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">Pre-booked home installations, multi-tyre seasonal swaps, and scheduled corporate fleet servicing.</p>
      </div>
      </div>
      </div>
      {/* Action Photo Representation */}
      <div className="rounded-2xl overflow-hidden border border-white/10 relative mt-2 shadow-xl shadow-black/50">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Technician changing tyre using impact tools" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-56 sm:h-64 object-cover" />
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary-dark via-primary-dark/70 to-transparent p-4 flex items-center justify-between">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Driveway Fitting &amp; Precision Torquing</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary font-semibold">OE Spec Compliant</span>
      </div>
      </div>
      </div>
      </section>
      {/* Divider */}
      <div className="w-full bg-primary-dark px-4">
      <div className="max-w-2xl mx-auto h-[1px] bg-white/10"></div>
      </div>
      {/* SECTION 4: ROADS & AREAS */}
      <section className="w-full bg-primary-dark py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
      <div className="p-6 rounded-2xl bg-primary/80 backdrop-blur-md border border-white/10 flex flex-col gap-3">
      <div className="flex items-center gap-2">
      <Route className="text-secondary h-[20px] w-[20px]" />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white uppercase tracking-wider font-bold">Key Arteries &amp; Surrounding Areas</span>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400">
                Our mobile units continuously patrol the <span className="text-white font-medium">M61 (Bolton Road &amp; Church Street)</span>, <span className="text-white font-medium">A673 (Bolton Road bypass)</span>, and the vital <span className="text-white font-medium">A6 East Lancashire Road corridor</span>, ensuring rapid average 30-45 minute dispatch across Horwich, <span className="text-white font-medium">Bolton, Westhoughton, Chorley, Blackrod,</span> and <span className="text-white font-medium">Lostock</span>.
              </p>
      </div>
      </div>
      </section>
      {/* Divider */}
      <div className="w-full bg-primary px-4">
      <div className="max-w-2xl mx-auto h-[1px] bg-white/10"></div>
      </div>
      {/* SECTION 5: HOW IT WORKS */}
      <section className="w-full bg-primary py-14">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 flex flex-col gap-6">
      <div>
      <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold tracking-widest uppercase block mb-1">Simple 5-Step Process</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">How Horwich Mobile Fitting Works</h2>
      </div>
      {/* Plain Numbered List (1 to 5) */}
      <ol className="space-y-4">
      <li className="flex items-start gap-4 p-4 rounded-xl bg-primary-dark/60 border border-white/10">
      <div className="w-7 h-7 rounded-full bg-secondary text-primary flex items-center justify-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold shrink-0 font-bold">1</div>
      <div className="text-[15px] leading-[24px] text-white">
      <span className="font-semibold block text-white">Call 07955 266 077 with your tyre size or car registration.</span>
      <span className="text-gray-400 text-[13px] leading-[18px] mt-0.5 block">Our dispatch controllers look up exact speed and load ratings immediately.</span>
      </div>
      </li>
      <li className="flex items-start gap-4 p-4 rounded-xl bg-primary-dark/60 border border-white/10">
      <div className="w-7 h-7 rounded-full bg-secondary text-primary flex items-center justify-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold shrink-0 font-bold">2</div>
      <div className="text-[15px] leading-[24px] text-white">
      <span className="font-semibold block text-white">Upfront quote confirmed over the phone.</span>
      <span className="text-gray-400 text-[13px] leading-[18px] mt-0.5 block">Transparent, fixed pricing including fitting, new rubber valve, and environmental disposal. No hidden surcharges.</span>
      </div>
      </li>
      <li className="flex items-start gap-4 p-4 rounded-xl bg-primary-dark/60 border border-white/10">
      <div className="w-7 h-7 rounded-full bg-secondary text-primary flex items-center justify-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold shrink-0 font-bold">3</div>
      <div className="text-[15px] leading-[24px] text-white">
      <span className="font-semibold block text-white">Horwich van dispatched immediately.</span>
      <span className="text-gray-400 text-[13px] leading-[18px] mt-0.5 block">Our mobile fitting technician heads directly to your exact GPS coordinates or street address.</span>
      </div>
      </li>
      <li className="flex items-start gap-4 p-4 rounded-xl bg-primary-dark/60 border border-white/10">
      <div className="w-7 h-7 rounded-full bg-secondary text-primary flex items-center justify-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold shrink-0 font-bold">4</div>
      <div className="text-[15px] leading-[24px] text-white">
      <span className="font-semibold block text-white">Fitted, inflated, and balanced on your driveway or kerbside.</span>
      <span className="text-gray-400 text-[13px] leading-[18px] mt-0.5 block">Wheel nuts torqued strictly to manufacturer guidelines using certified torque wrenches.</span>
      </div>
      </li>
      <li className="flex items-start gap-4 p-4 rounded-xl bg-primary-dark/60 border border-white/10">
      <div className="w-7 h-7 rounded-full bg-secondary text-primary flex items-center justify-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold shrink-0 font-bold">5</div>
      <div className="text-[15px] leading-[24px] text-white">
      <span className="font-semibold block text-white">Contactless card payment on completion.</span>
      <span className="text-gray-400 text-[13px] leading-[18px] mt-0.5 block">Inspect the completed job, tap your card via mobile terminal, and receive an instant digital invoice.</span>
      </div>
      </li>
      </ol>
      </div>
      </section>
      {/* Divider */}
      <div className="w-full bg-primary-dark px-4">
      <div className="max-w-2xl mx-auto h-[1px] bg-white/10"></div>
      </div>
      {/* SECTION 6: REAL LOCAL JOB */}
      <section className="w-full bg-primary-dark py-14">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
      <div className="p-5 sm:p-6 rounded-2xl bg-primary/85 backdrop-blur-md border border-white/10 flex flex-col sm:flex-row items-center sm:items-start gap-5 shadow-lg shadow-black/40">
      {/* Thumbnail */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 border border-white/10">
      <Image src="/gallery-roadside-fitting.webp" alt="New car tyre inspection gauge" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      {/* Job details */}
      <div className="flex-1 text-center sm:text-left">
      <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-secondary/15 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold font-semibold mb-2">
      <History className="h-[14px] w-[14px]" />
      <span>Horwich Dispatch Log #AT-771</span>
      </div>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">
                  Nissan Qashqai · Bolton Old Road
                </p>
      <p className="text-[13px] leading-[18px] text-gray-400">
                  Severe pothole sidewall bulge suffered during evening rush hour. Horwich mobile technician arrived in 25 minutes. Fitted new 215/55 R18 tyre, balanced assembly, and torqued to OEM specification. Driver safely back on route.
                </p>
      </div>
      </div>
      </div>
      </section>
      {/* Divider */}
      <div className="w-full bg-primary px-4">
      <div className="max-w-2xl mx-auto h-[1px] bg-white/10"></div>
      </div>
      {/* SECTION 7: FAQ */}
      <section className="w-full bg-primary py-14">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 flex flex-col gap-6">
      <div>
      <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold tracking-widest uppercase block mb-1">Common Inquiries</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">Frequently Asked Questions</h2>
      </div>
      {/* Accordion Items */}
      <div className="space-y-3" id="faq-container">
      {/* FAQ 1 */}
      <details className="rounded-2xl bg-primary-dark/80 border border-white/10 overflow-hidden group"><summary className="faq-toggle w-full p-4 text-left flex items-center justify-between text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold focus:outline-none cursor-pointer list-none">
      <span>What is your typical arrival ETA in Horwich?</span>
      <ChevronDown className="faq-icon transition-transform text-gray-400 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-4 pb-4 text-[13px] leading-[18px] text-gray-400">
                  For emergency calls within Horwich and immediate routes (M61, A673, Westhoughton border), our average technician arrival time is 30 to 45 minutes, subject to live traffic conditions.
                </div></details>
      {/* FAQ 2 */}
      <details className="rounded-2xl bg-primary-dark/80 border border-white/10 overflow-hidden group"><summary className="faq-toggle w-full p-4 text-left flex items-center justify-between text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold focus:outline-none cursor-pointer list-none">
      <span>Can you change a tyre on a narrow residential street?</span>
      <ChevronDown className="faq-icon transition-transform text-gray-400 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-4 pb-4 text-[13px] leading-[18px] text-gray-400">
                  Yes. Our vans are specifically outfitted with high-intensity perimeter safety beacons and compact, slide-mounted bead breakers so we can service cars parked on tight terraced streets or tight driveway spaces without blocking oncoming residential traffic.
                </div></details>
      {/* FAQ 3 */}
      <details className="rounded-2xl bg-primary-dark/80 border border-white/10 overflow-hidden group"><summary className="faq-toggle w-full p-4 text-left flex items-center justify-between text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold focus:outline-none cursor-pointer list-none">
      <span>What if I have lost my locking wheel nut key?</span>
      <ChevronDown className="faq-icon transition-transform text-gray-400 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-4 pb-4 text-[13px] leading-[18px] text-gray-400">
                  No problem. Every emergency van carries professional inverse-thread locking wheel nut removal tooling. We safely extract over-tightened, damaged, or keyless locking bolts without scratching or harming your alloy wheels.
                </div></details>
      {/* FAQ 4 */}
      <details className="rounded-2xl bg-primary-dark/80 border border-white/10 overflow-hidden group"><summary className="faq-toggle w-full p-4 text-left flex items-center justify-between text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold focus:outline-none cursor-pointer list-none">
      <span>Do you operate in rain, ice, or bad weather?</span>
      <ChevronDown className="faq-icon transition-transform text-gray-400 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-4 pb-4 text-[13px] leading-[18px] text-gray-400">
                  Yes, we provide 24/7 all-weather mobile tyre intervention 365 days a year. All tyre extraction, fitting, and high-speed balancing take place inside our sheltered, weather-sealed mobile workshop vans.
                </div></details>
      </div>
      </div>
      </section>
      {/* Divider */}
      <div className="w-full bg-primary-dark px-4">
      <div className="max-w-2xl mx-auto h-[1px] bg-white/10"></div>
      </div>
      {/* SECTION 8: FINAL CTA */}
      <section className="w-full bg-primary-dark py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
      <PhoneCall className="text-secondary h-[28px] w-[28px]" />
      </div>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white mb-2">
              Stranded in Horwich? We&apos;re on Standby.
            </h2>
      <p className="text-[15px] leading-[24px] text-gray-400 max-w-md mb-8">
              Mobile tyre technician available now for immediate dispatch across Horwich and Greater Manchester.
            </p>
      {/* Prominent Gold Call Button */}
      <a className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-secondary hover:bg-secondary-hover text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold transition-transform active:scale-95 shadow-xl shadow-black/50 group" href="tel:07955266077">
      <PhoneCall className="h-[24px] w-[24px] group-hover:rotate-12 transition-transform" />
      <span>Call 07955 266 077</span>
      </a>
      {/* 24/7 Availability Notice */}
      <span className="mt-4 text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-accent"></span>
              24 Hours · 7 Days a Week · No Membership Required
            </span>
      </div>
      </section>
    </main>
  );
}
