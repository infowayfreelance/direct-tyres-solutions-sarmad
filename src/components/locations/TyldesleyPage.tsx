import Image from "next/image";
import { ArrowRight, Bus, CheckCircle2, ChevronDown, ClipboardList, Compass, MapPin, MessageCircle, PhoneCall, ShieldCheck, Siren, Timer, Truck } from "lucide-react";

export default function TyldesleyPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-primary-dark">
      <div className="relative absolute inset-0 z-0">
      <Image src="/hero-section-images-936x527.webp" alt="Direct Tyre Solutions Mobile Van Tyldesley" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover opacity-25 mix-blend-luminosity scale-105 transform duration-700 ease-out" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/85 to-primary-dark/90"></div>
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent/20 rounded-full blur-[120px] pointer-events-none"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-20 lg:pt-24 lg:pb-28 flex flex-col items-center text-center">
      {/* Urgent Live Pill Indicator */}
      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary/80 backdrop-blur-md shadow-md mb-8">
      <span className="relative flex h-2.5 w-2.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
      </span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-white">Live Dispatch Active</span>
      <span className="text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold">•</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Greater Manchester Fleet</span>
      </div>
      {/* Main Headline */}
      <h1 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold lg:text-[56px] lg:leading-[64px] lg:tracking-[-0.02em] lg:font-black text-white max-w-5xl">
              24/7 Mobile Tyre Fitting in <span className="text-secondary inline-block">Tyldesley</span>
      </h1>
      {/* Subtitle */}
      <p className="mt-6 text-[18px] leading-[28px] text-white max-w-3xl">
              Immediate driveway, workplace, and rapid roadside dispatch across <span className="text-white font-medium">Mosley Common</span>, the <span className="text-white font-medium">A580 East Lancs corridor</span>, and guided busway commuter hubs. We bring the complete garage directly to your vehicle within 30–60 minutes.
            </p>
      {/* CTA Stack */}
      <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold hover:brightness-105 active:scale-95 transition-all shadow-xl shadow-primary-container/20" href="tel:07955266077">
      <PhoneCall className="h-[22px] w-[22px]" fill="currentColor" strokeWidth={0} />
                Call 07955 266 077
              </a>
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary/80 hover:bg-primary text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-all shadow-md" href="https://wa.me/448009992470">
      <MessageCircle className="h-[20px] w-[20px] text-accent" />
                WhatsApp Rapid Quote
              </a>
      </div>
      {/* Quick Metrics Strip */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl pt-8">
      <div className="flex flex-col items-center p-3 rounded-xl bg-primary-dark/60 backdrop-blur-sm">
      <span className="font-heading text-[30px] leading-[38px] font-bold text-secondary">29 min</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 mt-1 uppercase tracking-wider">Average Tyldesley ETA</span>
      </div>
      <div className="flex flex-col items-center p-3 rounded-xl bg-primary-dark/60 backdrop-blur-sm">
      <span className="font-heading text-[30px] leading-[38px] font-bold text-white">24/7/365</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 mt-1 uppercase tracking-wider">Night &amp; Weekend Service</span>
      </div>
      <div className="flex flex-col items-center p-3 rounded-xl bg-primary-dark/60 backdrop-blur-sm">
      <span className="font-heading text-[30px] leading-[38px] font-bold text-secondary">650+</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 mt-1 uppercase tracking-wider">Tyre Sizes Stocked</span>
      </div>
      <div className="flex flex-col items-center p-3 rounded-xl bg-primary-dark/60 backdrop-blur-sm">
      <span className="font-heading text-[30px] leading-[38px] font-bold text-white">Zero</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 mt-1 uppercase tracking-wider">Towing Charge Required</span>
      </div>
      </div>
      </div>
      </section>
      {/* BODY ARRANGEMENT: TWO-TONE SIDEBAR & MAIN CONTENT */}
      <section className="w-full bg-primary-dark py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
      {/* LEFT SIDEBAR (25%) */}
      <aside className="w-full lg:w-1/4 lg:sticky lg:top-8 flex flex-col gap-6">
      {/* Live Vehicle Patrol Card */}
      <div className="p-5 rounded-2xl bg-primary-dark/90 backdrop-blur-md shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-full blur-2xl pointer-events-none"></div>
      <div className="flex items-center justify-between mb-3">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-wider">Local Fleet Radar</span>
      <span className="flex h-2 w-2 rounded-full bg-secondary"></span>
      </div>
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-center gap-2">
      <Truck className="text-secondary h-[20px] w-[20px]" />
                    Unit 06 on Standby
                  </div>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1.5">
                    Patrolling near <span className="text-white font-medium">A580 / A5082</span> junction. Direct dispatch ready for Tyldesley, Astley &amp; Mosley Common.
                  </p>
      <div className="mt-4 pt-3 flex items-center justify-between text-white">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Queue:</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary font-semibold">Immediate Availability</span>
      </div>
      </div>
      {/* Fast Page Table of Contents */}
      <div className="p-5 rounded-2xl bg-primary/60 backdrop-blur-md shadow-md">
      <h3 className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
      <ClipboardList className="h-[16px] w-[16px] text-secondary" />
                    Tyldesley Dispatch Nav
                  </h3>
      <nav className="flex flex-col gap-2.5">
      <a className="flex items-center justify-between p-2.5 rounded-lg bg-primary-dark/50 hover:bg-primary/80 transition-colors group" href="#overview">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white group-hover:text-white transition-colors">01. Overview &amp; Transit</span>
      <ArrowRight className="h-[16px] w-[16px] text-gray-400 group-hover:text-secondary transition-colors" />
      </a>
      <a className="flex items-center justify-between p-2.5 rounded-lg bg-primary-dark/50 hover:bg-primary/80 transition-colors group" href="#services">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white group-hover:text-white transition-colors">02. Tyre Services</span>
      <ArrowRight className="h-[16px] w-[16px] text-gray-400 group-hover:text-secondary transition-colors" />
      </a>
      <a className="flex items-center justify-between p-2.5 rounded-lg bg-primary-dark/50 hover:bg-primary/80 transition-colors group" href="#roads">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white group-hover:text-white transition-colors">03. Road Corridor Table</span>
      <ArrowRight className="h-[16px] w-[16px] text-gray-400 group-hover:text-secondary transition-colors" />
      </a>
      <a className="flex items-center justify-between p-2.5 rounded-lg bg-primary-dark/50 hover:bg-primary/80 transition-colors group" href="#dispatch-process">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white group-hover:text-white transition-colors">04. Five-Step Dispatch</span>
      <ArrowRight className="h-[16px] w-[16px] text-gray-400 group-hover:text-secondary transition-colors" />
      </a>
      <a className="flex items-center justify-between p-2.5 rounded-lg bg-primary-dark/50 hover:bg-primary/80 transition-colors group" href="#local-case">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white group-hover:text-white transition-colors">05. Incident Log</span>
      <ArrowRight className="h-[16px] w-[16px] text-gray-400 group-hover:text-secondary transition-colors" />
      </a>
      <a className="flex items-center justify-between p-2.5 rounded-lg bg-primary-dark/50 hover:bg-primary/80 transition-colors group" href="#faq">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white group-hover:text-white transition-colors">06. Local Tyldesley FAQs</span>
      <ArrowRight className="h-[16px] w-[16px] text-gray-400 group-hover:text-secondary transition-colors" />
      </a>
      </nav>
      </div>
      {/* Direct Sidebar Dispatch Button */}
      <div className="p-5 rounded-2xl bg-primary/80 backdrop-blur-md shadow-xl flex flex-col items-center text-center">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase text-gray-400 tracking-wider mb-2">Emergency Breakdown?</span>
      <span className="font-heading text-[20px] leading-[26px] font-bold text-white mb-3">Don&apos;t wait for a tow truck.</span>
      <a className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold hover:brightness-105 active:scale-95 transition-all shadow-lg" href="tel:07955266077">
      <PhoneCall className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
                    07955 266 077
                  </a>
      <span className="text-[13px] leading-[18px] text-gray-400 mt-2">Zero booking deposit required</span>
      </div>
      </aside>
      {/* RIGHT MAIN COLUMN (75%) */}
      <main className="w-full lg:w-3/4 flex flex-col gap-14">
      {/* SECTION A: LOCAL INTRO */}
      <section className="p-8 rounded-2xl bg-primary/60 backdrop-blur-md shadow-lg scroll-mt-24" id="overview">
      <div className="flex items-center gap-2 mb-3 text-accent">
      <Compass className="h-[20px] w-[20px]" />
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-gray-300">Local Operational Overview</span>
      </div>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white mb-4">
                    Rapid Response Mobile Fitting Across Greater Manchester &amp; Leigh Borders
                  </h2>
      <div className="space-y-4 text-[15px] leading-[24px] text-white">
      <p>
                      Tyldesley is a bustling Greater Manchester town defined by heavy commuter channels, compact Victorian terrace side streets, and modern housing developments stretching toward <strong className="text-white font-semibold">Mosley Common, Astley, and Boothstown</strong>. Drivers here face recurring puncture vulnerabilities: high-speed potholes along the <strong className="text-white font-semibold">A580 East Lancashire Road</strong>, tight kerbing around Elliott Street and Manchester Road, and sudden flats before early morning transit into Manchester City Centre or Salford Quays.
                    </p>
      <p>
                      When a blowout or puncture hits, finding an open static garage in Tyldesley or paying hundreds for an emergency flatbed recovery to Leigh or Atherton is completely unnecessary. Our fully outfitted heavy-duty mobile support vans bring pneumatic air jacks, digital laser balancing, and computerised bead-breakers straight to your kerbside, company carpark, or residential driveway.
                    </p>
      </div>
      {/* Context Highlights */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
      <div className="p-4 rounded-xl bg-primary-dark/70 flex flex-col">
      <MapPin className="text-secondary mb-2 h-5 w-5" />
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Driveway Service</span>
      <span className="text-[13px] leading-[18px] text-gray-400">We fit while you drink your morning coffee before work. No lost hours.</span>
      </div>
      <div className="p-4 rounded-xl bg-primary-dark/70 flex flex-col">
      <Siren className="text-accent mb-2 h-5 w-5" />
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">A580 Hard Shoulder</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Highway-certified amber beacon vans equipped for fast roadside clearance.</span>
      </div>
      <div className="p-4 rounded-xl bg-primary-dark/70 flex flex-col">
      <Bus className="text-gray-400 mb-2 h-5 w-5" />
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Busway Corridor</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Immediate coverage across Vantage busway stops and commuter hubs.</span>
      </div>
      </div>
      </section>
      {/* SECTION B: SERVICES LIST WITH THUMBNAILS */}
      <section className="p-8 rounded-2xl bg-primary/60 backdrop-blur-md shadow-lg scroll-mt-24" id="services">
      <div className="flex items-center justify-between mb-6">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary">Complete Roadside Portfolio</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white tracking-tight mt-1">Specialised On-Demand Tyre Services</h2>
      </div>
      <span className="hidden md:inline-flex px-3 py-1 rounded-full bg-primary/80 text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold">
                      Same-Day Guarantee
                    </span>
      </div>
      {/* List inside framed module */}
      <div className="rounded-xl overflow-hidden bg-primary-dark">
      {/* Item 1 */}
      <div className="p-5 flex flex-col sm:flex-row gap-5 items-center hover:bg-primary/80 transition-colors">
      <div className="relative w-full sm:w-28 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-primary">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Emergency roadside response service" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow">
      <div className="flex items-center gap-2">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Emergency Roadside Puncture &amp; Blowout Rescue</span>
      <span className="px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold">Urgent</span>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">
                          Fast response roadside replacement on dual carriageways, rural bypasses, and unlit back lanes. Full beacon safety setup and high-speed tyre demounting.
                        </p>
      </div>
      <a className="self-end sm:self-center px-4 py-2 rounded-full bg-primary hover:bg-primary-light text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold whitespace-nowrap transition-colors" href="tel:07955266077">
                        Dispatch Van
                      </a>
      </div>
      {/* Item 2 */}
      <div className="p-5 flex flex-col sm:flex-row gap-5 items-center hover:bg-primary/80 transition-colors">
      <div className="relative w-full sm:w-28 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-primary">
      <Image src="/gallery-roadside-fitting.webp" alt="Premium tyre tread inspection and replacement" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow">
      <div className="flex items-center gap-2">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Driveway Tyre Fitting &amp; Wear Inspections</span>
      <span className="px-2 py-0.5 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">Popular</span>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">
                          Premium brands (Michelin, Pirelli, Bridgestone, Continental) and budget options fitted while your vehicle sits securely on your Tyldesley driveway.
                        </p>
      </div>
      <a className="self-end sm:self-center px-4 py-2 rounded-full bg-primary hover:bg-primary-light text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold whitespace-nowrap transition-colors" href="tel:07955266077">
                        Book Home Fit
                      </a>
      </div>
      {/* Item 3 */}
      <div className="p-5 flex flex-col sm:flex-row gap-5 items-center hover:bg-primary/80 transition-colors">
      <div className="relative w-full sm:w-28 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-primary">
      <Image src="/gallery-home-callout.webp" alt="Locking wheel nut removal on driveway" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow">
      <div className="flex items-center gap-2">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Locking Wheel Nut Damage Extraction</span>
      <span className="px-2 py-0.5 rounded-full bg-primary text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold">Specialist</span>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">
                          Lost key or stripped lug bolts? Our mobile technicians use non-destructive inverted carbide extractors to remove stubborn nuts without damaging your alloys.
                        </p>
      </div>
      <a className="self-end sm:self-center px-4 py-2 rounded-full bg-primary hover:bg-primary-light text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold whitespace-nowrap transition-colors" href="tel:07955266077">
                        Unlock Alloys
                      </a>
      </div>
      {/* Item 4 */}
      <div className="p-5 flex flex-col sm:flex-row gap-5 items-center hover:bg-primary/80 transition-colors">
      <div className="relative w-full sm:w-28 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-primary">
      <Image src="/gallery-evening-callout.webp" alt="Commercial fleet mobile tyre replacement van" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow">
      <div className="flex items-center gap-2">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Commercial Van &amp; Courier Rapid Recovery</span>
      <span className="px-2 py-0.5 rounded-full bg-secondary/20 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold">Fleet</span>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">
                          Heavy-load-rated reinforced commercial tyres (C-ply) fitted on site for delivery couriers, tradespeople, and delivery fleets working the M60 / A580 nexus.
                        </p>
      </div>
      <a className="self-end sm:self-center px-4 py-2 rounded-full bg-primary hover:bg-primary-light text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold whitespace-nowrap transition-colors" href="tel:07955266077">
                        Fleet Callout
                      </a>
      </div>
      </div>
      </section>
      {/* SECTION C: ROADS & AREAS (DATA-TABLE-STYLE PANEL) */}
      <section className="p-8 rounded-2xl bg-primary/60 backdrop-blur-md shadow-lg scroll-mt-24" id="roads">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-gray-400">Geographic Coverage Grid</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white tracking-tight mt-1">Tyldesley Road Corridor ETAs</h2>
      </div>
      <span className="text-[13px] leading-[18px] text-gray-400">Updated real-time from active patrol vans</span>
      </div>
      {/* Data Table Layout */}
      <div className="overflow-x-auto">
      <table className="w-full text-left">
      <thead>
      <tr className="bg-primary-dark text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider">
      <th className="py-3 px-4 rounded-l-lg">Corridor / Key Road</th>
      <th className="py-3 px-4">Coverage Area &amp; Suburbs</th>
      <th className="py-3 px-4">Typical Transit Hazard</th>
      <th className="py-3 px-4 rounded-r-lg text-right">Target ETA</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-primary/40 text-[13px] leading-[18px]">
      <tr className="hover:bg-primary/80 transition-colors">
      <td className="py-4 px-4 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-center gap-2">
      <span className="px-2 py-0.5 rounded bg-secondary text-primary font-mono text-[11px] font-bold">A580</span>
                            East Lancs Road
                          </td>
      <td className="py-4 px-4 text-white">Mosley Common, Astley Green, Boothstown Junction</td>
      <td className="py-4 px-4 text-gray-400">High-speed curb debris, debris blowouts, dual-carriageway halts</td>
      <td className="py-4 px-4 text-right">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary font-semibold">20–30 mins</span>
      </td>
      </tr>
      <tr className="hover:bg-primary/80 transition-colors">
      <td className="py-4 px-4 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-center gap-2">
      <span className="px-2 py-0.5 rounded bg-primary text-white font-mono text-[11px] font-bold">A577</span>
                            Elliott St / Manchester Rd
                          </td>
      <td className="py-4 px-4 text-white">Tyldesley Town Centre, Atherton border, Shakerley estate</td>
      <td className="py-4 px-4 text-gray-400">Congested residential streets, pinching kerbs, screw punctures</td>
      <td className="py-4 px-4 text-right">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary font-semibold">25–35 mins</span>
      </td>
      </tr>
      <tr className="hover:bg-primary/80 transition-colors">
      <td className="py-4 px-4 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-center gap-2">
      <span className="px-2 py-0.5 rounded bg-primary text-white font-mono text-[11px] font-bold">A5082</span>
                            Mort Lane &amp; Armitage
                          </td>
      <td className="py-4 px-4 text-white">Mort Lane Railway Bridge, Walkden connector, Little Hulton</td>
      <td className="py-4 px-4 text-gray-400">Narrow rail-bridge impact, deep rainwater gully potholes</td>
      <td className="py-4 px-4 text-right">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary font-semibold">20–35 mins</span>
      </td>
      </tr>
      <tr className="hover:bg-primary/80 transition-colors">
      <td className="py-4 px-4 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-center gap-2">
      <span className="px-2 py-0.5 rounded bg-primary text-white font-mono text-[11px] font-bold">B5232</span>
                            Newearth Rd &amp; Worsley
                          </td>
      <td className="py-4 px-4 text-white">Ellenbrook border, Worsley fringe, guided busway crossing</td>
      <td className="py-4 px-4 text-gray-400">Slow deflation, early morning residential battery/rim flats</td>
      <td className="py-4 px-4 text-right">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary font-semibold">30–40 mins</span>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      {/* Surrounding Towns Footer */}
      <div className="mt-6 pt-4 flex flex-wrap items-center justify-between gap-3 text-gray-400 text-[13px] leading-[18px]">
      <span className="flex items-center gap-1.5 text-white">
      <MapPin className="h-[16px] w-[16px] text-secondary" />
                      Surrounding satellite coverage:
                    </span>
      <div className="flex flex-wrap gap-2">
      <span className="px-2.5 py-1 rounded-full bg-primary-dark text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">Leigh (WN7)</span>
      <span className="px-2.5 py-1 rounded-full bg-primary-dark text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">Atherton (M46)</span>
      <span className="px-2.5 py-1 rounded-full bg-primary-dark text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">Walkden (M28)</span>
      <span className="px-2.5 py-1 rounded-full bg-primary-dark text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">Worsley (M28)</span>
      <span className="px-2.5 py-1 rounded-full bg-primary-dark text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">Little Hulton (M38)</span>
      </div>
      </div>
      </section>
      {/* SECTION D: FIVE-STEP DISPATCH PROCESS (VERTICAL STACK WITH CONNECTING LINE) */}
      <section className="p-8 rounded-2xl bg-primary/60 backdrop-blur-md shadow-lg scroll-mt-24" id="dispatch-process">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary">Simple Emergency Workflow</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white tracking-tight mt-1 mb-8">How Mobile Fitting Operates</h2>
      <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-primary">
      {/* Step 1 */}
      <div className="relative flex items-start gap-4 group">
      <div className="absolute -left-6 sm:-left-8 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary group-hover:bg-secondary transition-colors ring-4 ring-primary-dark">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-white group-hover:text-primary">01</span>
      </div>
      <div className="pl-2">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Call or WhatsApp Our Tyldesley Desk</h3>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-1">
                          Call <strong>07955 266 077</strong>. Give our technician your Tyldesley location (e.g. driveway address, Astley car park, or A580 marker post).
                        </p>
      </div>
      </div>
      {/* Step 2 */}
      <div className="relative flex items-start gap-4 group">
      <div className="absolute -left-6 sm:-left-8 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary group-hover:bg-secondary transition-colors ring-4 ring-primary-dark">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-white group-hover:text-primary">02</span>
      </div>
      <div className="pl-2">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Instant Spec &amp; Size Confirmation</h3>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-1">
                          We cross-check your tyre dimensions (e.g. 225/45 R17) from your vehicle registration number. You choose between premium, mid-range, or budget stock with transparent, upfront pricing.
                        </p>
      </div>
      </div>
      {/* Step 3 */}
      <div className="relative flex items-start gap-4 group">
      <div className="absolute -left-6 sm:-left-8 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary group-hover:bg-secondary transition-colors ring-4 ring-primary-dark">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-white group-hover:text-primary">03</span>
      </div>
      <div className="pl-2">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Rapid Mobile Van Dispatch</h3>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-1">
                          The nearest mobile fitting van in Greater Manchester reroutes directly to your live pin. You receive direct driver SMS updates with precise minute-by-minute ETAs.
                        </p>
      </div>
      </div>
      {/* Step 4 */}
      <div className="relative flex items-start gap-4 group">
      <div className="absolute -left-6 sm:-left-8 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary group-hover:bg-secondary transition-colors ring-4 ring-primary-dark">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-white group-hover:text-primary">04</span>
      </div>
      <div className="pl-2">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Precision Roadside / Driveway Installation</h3>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-1">
                          Our city-guilds certified technician jacks the car safely, swaps the tyre, installs a brand-new valve, performs electronic wheel balancing, and torques nuts to manufacturer spec.
                        </p>
      </div>
      </div>
      {/* Step 5 */}
      <div className="relative flex items-start gap-4 group">
      <div className="absolute -left-6 sm:-left-8 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary group-hover:bg-secondary transition-colors ring-4 ring-primary-dark">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-white group-hover:text-primary">05</span>
      </div>
      <div className="pl-2">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Contactless Card Payment &amp; Environmental Disposal</h3>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-1">
                          Inspect the fitment, tap any debit/credit card or Apple/Google Pay on our mobile card machine, and we take your punctured tyre away for eco-friendly recycling.
                        </p>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION E: REAL LOCAL JOB (HIGHLIGHTED CALLOUT BOX WITH GOLD ACCENT) */}
      <section className="rounded-2xl bg-primary-dark/90 backdrop-blur-md p-6 sm:p-8 shadow-xl relative overflow-hidden scroll-mt-24" id="local-case">
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-secondary"></div>
      <div className="flex flex-col md:flex-row items-center gap-6">
      <div className="relative w-full md:w-56 h-40 rounded-xl overflow-hidden flex-shrink-0 bg-primary/60">
      <Image src="/gallery-evening-home-visit.webp" alt="Real local incident report tyre technician in Tyldesley" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
      <span className="px-2.5 py-0.5 rounded-full bg-secondary/20 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">
                          Incident Report #TY-884
                        </span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">07:15 AM Dispatch</span>
      </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">
                        Mosley Common, Tyldesley — Volkswagen Golf GTD
                      </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                        Driver discovered sudden total pressure loss on the front-right tyre right before an urgent morning commute via the guided busway corridor towards central Manchester. The vehicle was stuck on a sloping residential tarmac driveway.
                      </p>
      <div className="mt-2 flex flex-wrap items-center gap-4 text-white text-[13px] leading-[18px]">
      <div className="flex items-center gap-1.5 text-white">
      <Timer className="text-secondary h-[18px] w-[18px]" />
      <span>Arrived on driveway in <strong>24 minutes</strong></span>
      </div>
      <div className="flex items-center gap-1.5 text-white">
      <ShieldCheck className="text-gray-400 h-[18px] w-[18px]" />
      <span>New <strong>Bridgestone Potenza S001</strong> fitted &amp; balanced</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION F: COMPACT FAQ ACCORDION */}
      <section className="p-8 rounded-2xl bg-primary/60 backdrop-blur-md shadow-lg scroll-mt-24" id="faq">
      <div className="mb-6">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-gray-400">Got Questions?</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white tracking-tight mt-1">Tyldesley Fitting FAQs</h2>
      </div>
      <div className="space-y-4" id="faq-accordion">
      {/* FAQ 1 */}
      <details className="group rounded-xl bg-primary-dark p-4 [&amp;_summary::-webkit-details-marker]:hidden open:bg-primary/80 transition-colors">
      <summary className="flex items-center justify-between cursor-pointer font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white list-none">
      <span>How quickly can a mobile tyre van reach me in Tyldesley?</span>
      <ChevronDown className="text-gray-400 group-open:rotate-180 transition-transform h-5 w-5" />
      </summary>
      <p className="mt-3 text-[15px] leading-[24px] text-gray-400">
                        Our average emergency response time across Tyldesley, Astley, and Mosley Common is between 25 and 45 minutes. Because we maintain roving mobile units adjacent to the A580 East Lancs corridor and M60 junction routes, we do not have to wait for garage queues to dispatch.
                      </p>
      </details>
      {/* FAQ 2 */}
      <details className="group rounded-xl bg-primary-dark p-4 [&amp;_summary::-webkit-details-marker]:hidden open:bg-primary/80 transition-colors">
      <summary className="flex items-center justify-between cursor-pointer font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white list-none">
      <span>Can you fit tyres on narrow residential streets or tight driveways?</span>
      <ChevronDown className="text-gray-400 group-open:rotate-180 transition-transform h-5 w-5" />
      </summary>
      <p className="mt-3 text-[15px] leading-[24px] text-gray-400">
                        Yes. Many older areas around Tyldesley centre (such as Elliott Street side roads) have narrow terraced parking. Our Mercedes and Iveco vans are custom-built self-contained workbenches. We carry low-clearance bottle jacks, rubber pad trolley jacks, and pneumatic tools that operate comfortably within a standard single car bay.
                      </p>
      </details>
      {/* FAQ 3 */}
      <details className="group rounded-xl bg-primary-dark p-4 [&amp;_summary::-webkit-details-marker]:hidden open:bg-primary/80 transition-colors">
      <summary className="flex items-center justify-between cursor-pointer font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white list-none">
      <span>What happens if I have lost my locking wheel nut key?</span>
      <ChevronDown className="text-gray-400 group-open:rotate-180 transition-transform h-5 w-5" />
      </summary>
      <p className="mt-3 text-[15px] leading-[24px] text-gray-400">
                        No problem. Over 30% of emergency callouts involve missing, rounded, or sheared locking wheel nut keys. Every Direct Tyre Solutions van is equipped with specialist non-impact locking wheel nut removal rigs that safely remove stripped bolts without rim damage.
                      </p>
      </details>
      {/* FAQ 4 */}
      <details className="group rounded-xl bg-primary-dark p-4 [&amp;_summary::-webkit-details-marker]:hidden open:bg-primary/80 transition-colors">
      <summary className="flex items-center justify-between cursor-pointer font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white list-none">
      <span>Do I have to pay before the fitter arrives?</span>
      <ChevronDown className="text-gray-400 group-open:rotate-180 transition-transform h-5 w-5" />
      </summary>
      <p className="mt-3 text-[15px] leading-[24px] text-gray-400">
                        No upfront pre-payment or deposit is required for our standard emergency callouts. Once our technician arrives on site, completes the fitment, checks all torque specs, and tests the bead seals, you can settle payment via chip-and-pin, contactless card, or smartphone pay directly at the van.
                      </p>
      </details>
      </div>
      </section>
      </main>
      </div>
      </div>
      </section>
      {/* FINAL CTA: TWO-COLUMN FULL-WIDTH BANNER */}
      <section className="w-full bg-primary-dark relative overflow-hidden py-16 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-primary/80 pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto px-6">
      <div className="p-8 lg:p-12 rounded-3xl bg-primary/80 backdrop-blur-xl shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* Left: Guarantees & Text */}
      <div className="flex-1 space-y-4">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider">
      <ShieldCheck className="h-[16px] w-[16px]" />
                  Direct Roadside Dispatch Guarantee
                </div>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold lg:text-[56px] lg:leading-[64px] lg:tracking-[-0.02em] lg:font-black text-white">
                  Stranded in Tyldesley? <br className="hidden sm:inline"/>Get a Van to You Now.
                </h2>
      <p className="text-[18px] leading-[28px] text-gray-400 max-w-xl">
                  Never wait hours for breakdown recovery. Our mobile tyre workshops carry your exact size and get you back moving quickly on the road today.
                </p>
      {/* Badges */}
      <div className="pt-2 flex flex-wrap items-center gap-4 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <span className="flex items-center gap-1.5">
      <CheckCircle2 className="text-secondary h-[18px] w-[18px]" />
                    24/7 All-Weather Dispatch
                  </span>
      <span className="flex items-center gap-1.5">
      <CheckCircle2 className="text-secondary h-[18px] w-[18px]" />
                    No Garage Queue
                  </span>
      <span className="flex items-center gap-1.5">
      <CheckCircle2 className="text-secondary h-[18px] w-[18px]" />
                    Transparent Callout Rates
                  </span>
      </div>
      </div>
      {/* Right: Click to Call Action Block */}
      <div className="w-full lg:w-auto flex flex-col items-center sm:items-end gap-3 flex-shrink-0">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-4 px-10 py-5 rounded-full bg-secondary text-primary font-heading text-[30px] leading-[38px] font-bold hover:brightness-105 active:scale-95 transition-all shadow-2xl shadow-primary-container/30" href="tel:07955266077">
      <PhoneCall className="h-[30px] w-[30px]" fill="currentColor" strokeWidth={0} />
                  Call 07955 266 077
                </a>
      <div className="flex items-center gap-2 text-gray-400 text-[13px] leading-[18px]">
      <span className="inline-block w-2 h-2 rounded-full bg-accent-hover animate-pulse"></span>
                  Typical Tyldesley dispatch time: under 30 minutes
                </div>
      </div>
      </div>
      </div>
      </section>
    </main>
  );
}
