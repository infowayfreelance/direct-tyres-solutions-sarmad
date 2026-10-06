import Image from "next/image";
import { AlertTriangle, ArrowRight, Car, CheckCircle2, ChevronDown, Home, KeyRound, MessageCircle, Navigation, PhoneCall, Wrench } from "lucide-react";

export default function StocktonHeathPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* SECTION 1: HERO */}
      <section className="relative w-full overflow-hidden bg-primary-dark">
      <div className="absolute inset-0 z-0">
      <div className="w-full h-full bg-cover bg-center scale-105 transform motion-safe:transition-transform duration-1000" style={{ backgroundImage: "url('/hero-section-images-936x527.webp')" }}>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 via-primary-dark/85 to-primary-dark"></div>
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-primary-dark/60 to-primary-dark"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col items-center text-center">
      {/* Live Status Badge */}
      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary/80 backdrop-blur-md shadow-sm mb-6">
      <span className="relative flex h-2.5 w-2.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
      </span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-white">Live Emergency Dispatch Across Stockton Heath</span>
      <span className="px-2 py-0.5 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold font-semibold">24/7 Rapid Response</span>
      </div>
      {/* Main Headline */}
      <h1 className="font-heading text-[36px] leading-[42px] tracking-[-0.01em] font-black md:text-[56px] md:leading-[64px] md:tracking-[-0.02em] md:font-black text-white max-w-4xl uppercase mb-6">
              24/7 Mobile Tyre Fitting in <span className="text-secondary">Stockton Heath</span>
            </h1>
      {/* Subtitle */}
      <p className="text-[18px] leading-[28px] text-gray-400 max-w-3xl mb-10">
              Fast roadside, driveway, and workplace tyre replacements along <span className="text-white font-semibold">Washway Road (A49)</span>, <span className="text-white font-semibold">M56 Junctions 6–8</span>, and Brooklands. Average response time: <span className="text-secondary font-bold">25–40 minutes</span>.
            </p>
      {/* CTA Stack */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase shadow-xl shadow-primary-container/20 hover:brightness-110 active:scale-95 transition-all" href="tel:07955266077">
      <PhoneCall className="h-6 w-6 font-bold" fill="currentColor" strokeWidth={0} />
                Call 07955 266 077
              </a>
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary/80 hover:bg-primary-light text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold backdrop-blur-md transition-all active:scale-95" href="https://wa.me/448009992470?text=I%20need%20emergency%20mobile%20tyre%20fitting%20in%20Sale" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="text-emerald-400 h-6 w-6" />
                WhatsApp Dispatch
              </a>
      </div>
      {/* Quick Metrics Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 w-full max-w-4xl">
      <div className="bg-primary/60 backdrop-blur-md rounded-xl p-4 flex flex-col items-center justify-center shadow-sm">
      <span className="font-heading text-[30px] leading-[38px] font-bold text-secondary">25-40m</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase mt-1">Average Arrival</span>
      </div>
      <div className="bg-primary/60 backdrop-blur-md rounded-xl p-4 flex flex-col items-center justify-center shadow-sm">
      <span className="font-heading text-[30px] leading-[38px] font-bold text-white">M56 J6-8</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase mt-1">Corridor Priority</span>
      </div>
      <div className="bg-primary/60 backdrop-blur-md rounded-xl p-4 flex flex-col items-center justify-center shadow-sm">
      <span className="font-heading text-[30px] leading-[38px] font-bold text-white">BS AU 159</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase mt-1">Certified Repairs</span>
      </div>
      <div className="bg-primary/60 backdrop-blur-md rounded-xl p-4 flex flex-col items-center justify-center shadow-sm">
      <span className="font-heading text-[30px] leading-[38px] font-bold text-secondary">365 Days</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase mt-1">Round-the-Clock</span>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 2: TWO-TONE SIDEBAR & MAIN COLUMN */}
      <section className="w-full bg-primary-dark py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
      {/* LEFT SIDEBAR CONTENTS RAIL */}
      <aside className="w-full lg:w-80 shrink-0 lg:sticky lg:top-8 flex flex-col gap-6">
      {/* Rail Navigation Module */}
      <div className="bg-primary/60 backdrop-blur-md rounded-2xl p-6 shadow-md flex flex-col gap-6">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-widest block mb-2">Navigation Matrix</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Emergency Index</h3>
      </div>
      <nav className="flex flex-col gap-2">
      <a className="flex items-center justify-between p-3 rounded-xl bg-primary/80 hover:bg-primary/80 text-white transition-colors group" href="#overview">
      <span className="flex items-center gap-3 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <span className="text-gray-400 font-mono">01</span>
                        Overview &amp; Dispatch
                      </span>
      <ArrowRight className="h-[14px] w-[14px] text-gray-400 group-hover:translate-x-1 transition-transform" />
      </a>
      <a className="flex items-center justify-between p-3 rounded-xl bg-primary/80 hover:bg-primary/80 text-white transition-colors group" href="#services">
      <span className="flex items-center gap-3 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <span className="text-gray-400 font-mono">02</span>
                        Tyre Services
                      </span>
      <ArrowRight className="h-[14px] w-[14px] text-gray-400 group-hover:translate-x-1 transition-transform" />
      </a>
      <a className="flex items-center justify-between p-3 rounded-xl bg-primary/80 hover:bg-primary/80 text-white transition-colors group" href="#roads">
      <span className="flex items-center gap-3 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <span className="text-gray-400 font-mono">03</span>
                        Roads &amp; Areas
                      </span>
      <ArrowRight className="h-[14px] w-[14px] text-gray-400 group-hover:translate-x-1 transition-transform" />
      </a>
      <a className="flex items-center justify-between p-3 rounded-xl bg-primary/80 hover:bg-primary/80 text-white transition-colors group" href="#process">
      <span className="flex items-center gap-3 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <span className="text-gray-400 font-mono">04</span>
                        How It Works
                      </span>
      <ArrowRight className="h-[14px] w-[14px] text-gray-400 group-hover:translate-x-1 transition-transform" />
      </a>
      <a className="flex items-center justify-between p-3 rounded-xl bg-primary/80 hover:bg-primary/80 text-white transition-colors group" href="#faq">
      <span className="flex items-center gap-3 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <span className="text-gray-400 font-mono">05</span>
                        Stockton Heath Tyre FAQs
                      </span>
      <ArrowRight className="h-[14px] w-[14px] text-gray-400 group-hover:translate-x-1 transition-transform" />
      </a>
      </nav>
      {/* Active Patrol Indicator Card */}
      <div className="p-4 rounded-xl bg-primary/80 flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-wider">Patrol Grid</span>
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold font-semibold">Active Unit</span>
      </div>
      <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-lg bg-primary/60 text-secondary">
      <Navigation className="h-5 w-5" />
      </div>
      <div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Van 04 En Route</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Patrolling Washway Road corridor</p>
      </div>
      </div>
      <div className="w-full bg-primary/80 rounded-full h-1.5 overflow-hidden">
      <div className="bg-secondary h-full rounded-full w-4/5 animate-pulse"></div>
      </div>
      </div>
      {/* Instant Phone Trigger */}
      <div className="pt-2">
      <a className="w-full inline-flex items-center justify-center gap-3 p-4 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase shadow-lg hover:brightness-110 active:scale-95 transition-all text-center" href="tel:07955266077">
      <PhoneCall className="h-5 w-5" />
                      07955 266 077
                    </a>
      <span className="block text-center text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 mt-2">Zero call centres. Direct operator line.</span>
      </div>
      </div>
      {/* Direct Location Quick-Glance */}
      <div className="p-5 rounded-2xl bg-primary/80 flex flex-col gap-3">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-white uppercase font-bold tracking-wider">Emergency Coverage Areas</span>
      <div className="flex flex-wrap gap-2">
      <span className="px-2.5 py-1 rounded-md bg-primary/60 text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">Stockton Heath Moor</span>
      <span className="px-2.5 py-1 rounded-md bg-primary/60 text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">Brooklands</span>
      <span className="px-2.5 py-1 rounded-md bg-primary/60 text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">Ashton upon Mersey</span>
      <span className="px-2.5 py-1 rounded-md bg-primary/60 text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">Warrington Border</span>
      <span className="px-2.5 py-1 rounded-md bg-primary/60 text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">Daresbury</span>
      <span className="px-2.5 py-1 rounded-md bg-primary/60 text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">M56 J6 &amp; 7</span>
      </div>
      </div>
      </aside>
      {/* RIGHT MAIN CONTENT COLUMN */}
      <main className="w-full flex-1 flex flex-col gap-16 min-w-0">
      {/* SUBSECTION 01: LOCAL INTRO */}
      <section className="flex flex-col gap-6" id="overview">
      <div className="inline-flex items-center gap-2 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest">
      <span>Section 01</span>
      <span>/</span>
      <span>Local Deployment Status</span>
      </div>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white">
                    Rapid Response Mobile Tyre Services across Stockton Heath &amp; South Manchester
                  </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-400 text-[15px] leading-[24px]">
      <div className="p-6 rounded-2xl bg-primary/60 backdrop-blur-md flex flex-col justify-between">
      <p>
                        As one of Greater Manchester’s primary commuter corridors, Stockton Heath experiences intense daily arterial pressure. A puncture on <strong className="text-white font-semibold">Washway Road (A49)</strong> or <strong className="text-white font-semibold">Cross Street</strong> can instantly stall crucial school-run timetables or professional commutes into the city centre and Warrington town centre. Our mobile response fleet operates stationed along primary arteries to intervene without towing delays.
                      </p>
      <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white">
      <span className="flex items-center gap-1.5"><Car className="text-secondary h-4 w-4" /> High Traffic Interventions</span>
      <span className="font-mono text-white">A49 • M56 • A56</span>
      </div>
      </div>
      <div className="p-6 rounded-2xl bg-primary/60 backdrop-blur-md flex flex-col justify-between">
      <p>
                        Whether your tyre suffered a puncture over road debris around <strong className="text-white font-semibold">Brooklands station</strong>, lost pressure on your residential driveway in <strong className="text-white font-semibold">Ashton upon Mersey</strong>, or blew out merging onto the <strong className="text-white font-semibold">M56 at Junction 7</strong>, our fully equipped service vans carry digital balancing rigs and a vast range of standard, run-flat, and commercial tyre stock.
                      </p>
      <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white">
      <span className="flex items-center gap-1.5"><Wrench className="text-gray-300 h-4 w-4" /> Driveway &amp; Kerbside Ready</span>
      <span className="font-mono text-white">Full Stock Fleet</span>
      </div>
      </div>
      </div>
      </section>
      {/* SUBSECTION 02: SERVICES */}
      <section className="flex flex-col gap-6" id="services">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
      <div>
      <div className="inline-flex items-center gap-2 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest mb-1">
      <span>Section 02</span>
      <span>/</span>
      <span>Rapid Solutions</span>
      </div>
      <h2 className="font-heading text-[22px] leading-[28px] font-bold md:text-[30px] md:leading-[38px] md:font-bold text-white tracking-tight">
                        Mobile Tyre Services Fitted At Your Location
                      </h2>
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Fully mobile workshop units</span>
      </div>
      {/* Bordered List Container */}
      <div className="flex flex-col gap-3 rounded-2xl p-2 bg-primary-dark shadow-inner">
      {/* Service 1 */}
      <div className="relative flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-primary/60 hover:bg-primary/80 transition-all">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Emergency roadside mobile tyre fitting unit on hard shoulder" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full sm:w-28 h-20 object-cover rounded-lg shrink-0" />
      <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 mb-1">
      <AlertTriangle className="text-secondary h-5 w-5" />
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white truncate">Emergency Roadside Assistance</h3>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400 line-clamp-2">
                          Priority motorway and dual carriageway dispatch on the M56, A49, and connecting slip roads. High-visibility safety zone setup and rapid roadside replacement.
                        </p>
      </div>
      <div className="flex sm:flex-col items-center gap-2 shrink-0 w-full sm:w-auto justify-between">
      <span className="px-2.5 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold font-semibold">Priority</span>
      <a className="text-secondary hover:underline text-[11px] leading-[14px] tracking-[0.06em] font-bold flex items-center gap-1" href="tel:07955266077">Dispatch <ArrowRight className="h-3 w-3" /></a>
      </div>
      </div>
      {/* Service 2 */}
      <div className="relative flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-primary/60 hover:bg-primary/80 transition-all">
      <Image src="/gallery-roadside-fitting.webp" alt="Close up tyre inspection and puncture repair tread gauge" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full sm:w-28 h-20 object-cover rounded-lg shrink-0" />
      <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 mb-1">
      <Wrench className="text-secondary h-5 w-5" />
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white truncate">BS AU 159 Certified Puncture Repair</h3>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400 line-clamp-2">
                          Strict British Standard internal combi-plug puncture repairs. We test structural integrity, tread depth, and casing safe limits before any fitting decision.
                        </p>
      </div>
      <div className="flex sm:flex-col items-center gap-2 shrink-0 w-full sm:w-auto justify-between">
      <span className="px-2.5 py-1 rounded-full bg-primary-light text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">Safe &amp; Legal</span>
      <a className="text-secondary hover:underline text-[11px] leading-[14px] tracking-[0.06em] font-bold flex items-center gap-1" href="tel:07955266077">Enquire <ArrowRight className="h-3 w-3" /></a>
      </div>
      </div>
      {/* Service 3 */}
      <div className="relative flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-primary/60 hover:bg-primary/80 transition-all">
      <Image src="/gallery-home-callout.webp" alt="Technician using impact wrench to extract damaged wheel nut" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full sm:w-28 h-20 object-cover rounded-lg shrink-0" />
      <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 mb-1">
      <KeyRound className="text-secondary h-5 w-5" />
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white truncate">Locking Wheel Nut Extraction</h3>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400 line-clamp-2">
                          Lost key, rounded teeth, or over-torqued wheel bolts? Non-destructive specialist reverse-thread tools remove stuck nuts without scratching expensive alloys.
                        </p>
      </div>
      <div className="flex sm:flex-col items-center gap-2 shrink-0 w-full sm:w-auto justify-between">
      <span className="px-2.5 py-1 rounded-full bg-primary-light text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">Specialist</span>
      <a className="text-secondary hover:underline text-[11px] leading-[14px] tracking-[0.06em] font-bold flex items-center gap-1" href="tel:07955266077">Help Now <ArrowRight className="h-3 w-3" /></a>
      </div>
      </div>
      {/* Service 4 */}
      <div className="relative flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-primary/60 hover:bg-primary/80 transition-all">
      <Image src="/gallery-evening-callout.webp" alt="Modern mobile tyre fitting van parked in British street" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full sm:w-28 h-20 object-cover rounded-lg shrink-0" />
      <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 mb-1">
      <Home className="text-secondary h-5 w-5" />
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white truncate">Driveway &amp; Workplace Fitting</h3>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400 line-clamp-2">
                          Avoid garage waiting rooms. We fit premium, mid-range, or budget tyres outside your home in Ashton upon Mersey or your office car park in Carrington.
                        </p>
      </div>
      <div className="flex sm:flex-col items-center gap-2 shrink-0 w-full sm:w-auto justify-between">
      <span className="px-2.5 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold font-semibold">Convenient</span>
      <a className="text-secondary hover:underline text-[11px] leading-[14px] tracking-[0.06em] font-bold flex items-center gap-1" href="tel:07955266077">Book Today <ArrowRight className="h-3 w-3" /></a>
      </div>
      </div>
      </div>
      </section>
      {/* SUBSECTION 03: ROADS COVERED DATA TABLE */}
      <section className="flex flex-col gap-6" id="roads">
      <div>
      <div className="inline-flex items-center gap-2 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest mb-1">
      <span>Section 03</span>
      <span>/</span>
      <span>Territory Radius</span>
      </div>
      <h2 className="font-heading text-[22px] leading-[28px] font-bold md:text-[30px] md:leading-[38px] md:font-bold text-white tracking-tight">
                      Roads &amp; Surrounding Areas Covered
                    </h2>
      </div>
      {/* High-Contrast Data Table Panel */}
      <div className="overflow-x-auto rounded-2xl bg-primary/60 backdrop-blur-md shadow-md">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-primary/80 text-white uppercase text-[11px] leading-[14px] tracking-[0.06em] font-bold tracking-wider">
      <th className="py-4 px-6">Corridor / Key Road</th>
      <th className="py-4 px-6">Primary Coverage Area</th>
      <th className="py-4 px-6 text-right">Target Response ETA</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-white/5 text-[13px] leading-[18px] text-white">
      <tr className="hover:bg-primary/80 transition-colors">
      <td className="py-4 px-6 font-semibold text-white flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                            A49 Washway Road / Cross St
                          </td>
      <td className="py-4 px-6 text-gray-400">Stockton Heath Town Centre, Brooklands, Woodheys</td>
      <td className="py-4 px-6 text-right font-mono font-bold text-secondary">20 - 30 Mins</td>
      </tr>
      <tr className="hover:bg-primary/80 transition-colors">
      <td className="py-4 px-6 font-semibold text-white flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                            M56 Motorway (Junctions 6, 7 &amp; 8)
                          </td>
      <td className="py-4 px-6 text-gray-400">Carrington Spur, Stockton Heath Water Park, Warrington Interchange</td>
      <td className="py-4 px-6 text-right font-mono font-bold text-secondary">25 - 35 Mins</td>
      </tr>
      <tr className="hover:bg-primary/80 transition-colors">
      <td className="py-4 px-6 font-semibold text-white flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                            A56 (Harboro Road / Carrington)
                          </td>
      <td className="py-4 px-6 text-gray-400">Ashton upon Mersey, Carrington, Partington link</td>
      <td className="py-4 px-6 text-right font-mono font-bold text-secondary">25 - 40 Mins</td>
      </tr>
      <tr className="hover:bg-primary/80 transition-colors">
      <td className="py-4 px-6 font-semibold text-white flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                            B5166 / Marsland Road
                          </td>
      <td className="py-4 px-6 text-gray-400">Stockton Heath Moor, Northern Moor, Brooklands Tram Zone</td>
      <td className="py-4 px-6 text-right font-mono font-bold text-secondary">20 - 30 Mins</td>
      </tr>
      <tr className="hover:bg-primary/80 transition-colors">
      <td className="py-4 px-6 font-semibold text-white flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                            Regional Surrounds (A49 Southbound)
                          </td>
      <td className="py-4 px-6 text-gray-400">Daresbury, Lymm, Grappenhall, Appleton</td>
      <td className="py-4 px-6 text-right font-mono font-bold text-secondary">30 - 45 Mins</td>
      </tr>
      </tbody>
      </table>
      </div>
      </section>
      {/* SUBSECTION 04: HOW IT WORKS */}
      <section className="flex flex-col gap-6" id="process">
      <div>
      <div className="inline-flex items-center gap-2 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest mb-1">
      <span>Section 04</span>
      <span>/</span>
      <span>Frictionless Protocol</span>
      </div>
      <h2 className="font-heading text-[22px] leading-[28px] font-bold md:text-[30px] md:leading-[38px] md:font-bold text-white tracking-tight">
                      How Our Stockton Heath Dispatch Operates
                    </h2>
      </div>
      {/* 5 Vertical Connected Steps */}
      <div className="relative flex flex-col gap-6 pl-6 ml-4 border-l-2 border-secondary/30">
      {/* Step 1 */}
      <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-xl bg-primary/60 backdrop-blur-md">
      <div className="absolute -left-[35px] top-4 w-6 h-6 rounded-full bg-secondary text-primary font-bold font-mono text-xs flex items-center justify-center">
                        1
                      </div>
      <div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Emergency Call &amp; Location Lock</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Call 07955 266 077. Provide your postcode, street name, or What3Words coordinate.</p>
      </div>
      <span className="font-mono text-xs text-secondary shrink-0">Minute 0</span>
      </div>
      {/* Step 2 */}
      <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-xl bg-primary/60 backdrop-blur-md">
      <div className="absolute -left-[35px] top-4 w-6 h-6 rounded-full bg-secondary text-primary font-bold font-mono text-xs flex items-center justify-center">
                        2
                      </div>
      <div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Tyre Size &amp; Issue Confirmation</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">We match your tyre dimensions (e.g. 225/45 R17) from your vehicle registration.</p>
      </div>
      <span className="font-mono text-xs text-secondary shrink-0">Minute 2</span>
      </div>
      {/* Step 3 */}
      <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-xl bg-primary/60 backdrop-blur-md">
      <div className="absolute -left-[35px] top-4 w-6 h-6 rounded-full bg-secondary text-primary font-bold font-mono text-xs flex items-center justify-center">
                        3
                      </div>
      <div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Immediate Van Dispatch</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Nearest mobile technician mobilized across Stockton Heath with full stock and equipment.</p>
      </div>
      <span className="font-mono text-xs text-secondary shrink-0">Minute 5</span>
      </div>
      {/* Step 4 */}
      <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-xl bg-primary/60 backdrop-blur-md">
      <div className="absolute -left-[35px] top-4 w-6 h-6 rounded-full bg-secondary text-primary font-bold font-mono text-xs flex items-center justify-center">
                        4
                      </div>
      <div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">On-Site Precision Fitting &amp; Balancing</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">New tyre mounted, dynamically balanced, new valve fitted, old tyre loaded for eco-disposal.</p>
      </div>
      <span className="font-mono text-xs text-secondary shrink-0">Minute 35</span>
      </div>
      {/* Step 5 */}
      <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-xl bg-primary/60 backdrop-blur-md">
      <div className="absolute -left-[35px] top-4 w-6 h-6 rounded-full bg-secondary text-primary font-bold font-mono text-xs flex items-center justify-center">
                        5
                      </div>
      <div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Secure Mobile Card Payment</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Transparent quote honored. Pay via contactless, debit/credit, or Apple/Google Pay on completion.</p>
      </div>
      <span className="font-mono text-xs text-secondary shrink-0">Complete</span>
      </div>
      </div>
      </section>
      {/* SUBSECTION: REAL LOCAL JOB (VERIFIED INCIDENT) */}
      <section className="p-6 rounded-2xl bg-primary/60 backdrop-blur-md border-l-4 border-l-secondary shadow-md flex flex-col md:flex-row gap-6 items-center">
      <div className="relative w-full md:w-44 h-32 rounded-xl overflow-hidden shrink-0">
      <Image src="/gallery-evening-home-visit.webp" alt="Automotive technician fitting Audi tyre on driveway" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1">
      <div className="flex items-center gap-2 mb-2">
      <span className="px-2 py-0.5 rounded bg-secondary/20 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold font-bold uppercase">Verified Dispatch Log</span>
      <span className="text-xs text-gray-400 font-mono">Incident #SL-8842</span>
      </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-1">
                      Audi A3 Sportback — Brooklands Road, Stockton Heath
                    </h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                      Driver suffered sudden sidewall pinch and inflation failure after encountering a sharp pothole near Brooklands Metrolink station during morning commute. Rapid dispatch reached the driver in 24 minutes. Fitted and computer-balanced a replacement <strong className="text-white">225/40 R18</strong> performance tyre right at the roadside, allowing customer to proceed without vehicle recovery fees.
                    </p>
      </div>
      </section>
      {/* SUBSECTION 05: FAQ */}
      <section className="flex flex-col gap-6" id="faq">
      <div>
      <div className="inline-flex items-center gap-2 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest mb-1">
      <span>Section 05</span>
      <span>/</span>
      <span>Clarity</span>
      </div>
      <h2 className="font-heading text-[22px] leading-[28px] font-bold md:text-[30px] md:leading-[38px] md:font-bold text-white tracking-tight">
                      Frequently Asked Questions: Stockton Heath Mobile Tyres
                    </h2>
      </div>
      {/* Compact Accordion List with native details tags */}
      <div className="flex flex-col gap-3">
      <details className="group p-4 rounded-xl bg-primary/60 backdrop-blur-md cursor-pointer transition-colors">
      <summary className="flex items-center justify-between font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white list-none">
      <span>How fast can a mobile tyre van get to me in Stockton Heath?</span>
      <ChevronDown className="text-secondary transition-transform group-open:rotate-180 h-5 w-5" />
      </summary>
      <p className="mt-3 text-[13px] leading-[18px] text-gray-400">
                        Our average dispatch ETA across Stockton Heath, Stockton Heath Moor, and Brooklands is between 25 and 40 minutes. For emergencies situated on the M56 corridor (Junctions 6 to 8), our active motorway response units prioritize high-risk road shoulders for rapid arrival.
                      </p>
      </details>
      <details className="group p-4 rounded-xl bg-primary/60 backdrop-blur-md cursor-pointer transition-colors">
      <summary className="flex items-center justify-between font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white list-none">
      <span>Do you operate late at night and on bank holidays in Stockton Heath?</span>
      <ChevronDown className="text-secondary transition-transform group-open:rotate-180 h-5 w-5" />
      </summary>
      <p className="mt-3 text-[13px] leading-[18px] text-gray-400">
                        Yes. We operate a true 24-hour, 365-day emergency fitting service. Regardless of whether you have an urgent blowout at 2:00 AM on Washway Road or a flat tyre on your driveway on a Sunday afternoon, our call handlers and mobile units are fully operational.
                      </p>
      </details>
      <details className="group p-4 rounded-xl bg-primary/60 backdrop-blur-md cursor-pointer transition-colors">
      <summary className="flex items-center justify-between font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white list-none">
      <span>Can you fit tyres on narrow residential driveways in Ashton upon Mersey?</span>
      <ChevronDown className="text-secondary transition-transform group-open:rotate-180 h-5 w-5" />
      </summary>
      <p className="mt-3 text-[13px] leading-[18px] text-gray-400">
                        Absolutely. Our modern Mercedes Sprinter and Ford Transit fleet are engineered with self-contained onboard generators, pneumatic jacks, and bead breakers. We only need approximately 1 meter of clearance alongside your vehicle to replace wheels safely.
                      </p>
      </details>
      <details className="group p-4 rounded-xl bg-primary/60 backdrop-blur-md cursor-pointer transition-colors">
      <summary className="flex items-center justify-between font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white list-none">
      <span>What brands of tyres do your mobile vans carry?</span>
      <ChevronDown className="text-secondary transition-transform group-open:rotate-180 h-5 w-5" />
      </summary>
      <p className="mt-3 text-[13px] leading-[18px] text-gray-400">
                        We supply all tier categories: premium brands (Michelin, Continental, Pirelli, Goodyear, Bridgestone), quality mid-range options (Kumho, Hankook, Falken), and certified economy tyres. Run-flat and EV-rated compounds are also routinely stocked.
                      </p>
      </details>
      </div>
      </section>
      </main>
      </div>
      </div>
      </section>
      {/* SECTION 3: FINAL CALL-TO-ACTION BANNER */}
      <section className="w-full bg-primary-dark py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-primary/60 p-8 lg:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Ambient Glow */}
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
      {/* Left Copy Side */}
      <div className="flex-1 flex flex-col gap-3 z-10">
      <div className="inline-flex items-center gap-2">
      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase font-bold tracking-wider">Stockton Heath &amp; M56 Standby Units</span>
      </div>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white">
                  Stuck with a Flat Tyre in Stockton Heath?
                </h2>
      <p className="text-[15px] leading-[24px] text-gray-400 max-w-xl">
                  Direct dispatch to your exact location in Ashton upon Mersey, Brooklands, Stockton Heath Moor, or the M56. No garage queues, no towing charges.
                </p>
      </div>
      {/* Right Action Button Side */}
      <div className="shrink-0 flex flex-col items-center sm:items-end gap-3 z-10 w-full sm:w-auto">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-secondary text-primary font-heading text-[20px] leading-[26px] font-bold uppercase tracking-wider shadow-2xl shadow-primary-container/30 hover:brightness-110 active:scale-95 transition-all text-center" href="tel:07955266077">
      <PhoneCall className="h-6 w-6 font-bold" fill="currentColor" strokeWidth={0} />
                  Call 07955 266 077
                </a>
      <div className="flex items-center gap-2 text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <CheckCircle2 className="text-emerald-400 h-[14px] w-[14px]" />
                  Available 24 Hours / 7 Days a Week
                </div>
      </div>
      </div>
      </div>
      </section>
    </main>
  );
}
