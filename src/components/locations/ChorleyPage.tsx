import Image from "next/image";
import { ChevronRight, Clock, HelpCircle, Info, MapPin, MessageCircle, PhoneCall, Route, Shield, ShieldCheck, Timer, Truck, Zap } from "lucide-react";

export default function ChorleyPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      <div className="flex flex-col w-full text-white">
      {/* 1. HERO: BOLD TYPOGRAPHIC HERO WITH EMBEDDED VERTICAL PHOTO STRIP */}
      <section className="relative w-full overflow-hidden bg-primary-dark py-8 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
      {/* Top Status Cluster */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                24/7 Rapid Response Unit
              </span>
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/80 text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider">
      <MapPin className="h-[15px] w-[15px] text-secondary" />
                Chorley &amp; Lancashire Arterials
              </span>
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/80 text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <Clock className="h-[15px] w-[15px] text-secondary" />
                Avg. Arrival: 25-45 Mins
              </span>
      </div>
      {/* Main Typographic Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* Left: Oversized Giant Typographic Impact */}
      <div className="lg:col-span-8 flex flex-col justify-between z-10">
      <div>
      <span className="block text-secondary-hover font-heading uppercase tracking-widest mb-3">
                    Chorley Emergency Roadside &amp; Mobile Service
                  </span>
      <h1 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold md:text-[56px] md:leading-[64px] md:tracking-[-0.02em] md:font-black uppercase text-white leading-none">
                    24/7 Mobile Tyre <br className="hidden sm:inline"/>
      Fitting in <span className="text-secondary underline decoration-accent/40">Chorley</span>
      </h1>
      <p className="mt-6 text-[18px] leading-[28px] text-white max-w-2xl">
                    Stranded on the hard shoulder or stalled in a Botany Bay distribution hub? Our heavy-duty mobile fitting vans are stationed across the <strong className="text-secondary font-semibold">M61 corridor (J6 &amp; J8)</strong> and <strong className="text-secondary font-semibold">M6 Junction 28</strong>. Get roadside tyre replacement without dealership towing delays.
                  </p>
      </div>
      {/* CTAs & Trust Badges */}
      <div className="mt-8 pt-6">
      <div className="flex flex-wrap items-center gap-4">
      {/* Primary Action: Click-to-call #1 */}
      <a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary hover:bg-secondary-hover text-primary font-heading transition-all duration-200 active:scale-95 shadow-xl shadow-primary-container/20" href="tel:07955266077">
      <PhoneCall className="font-bold h-[22px] w-[22px]" fill="currentColor" strokeWidth={0} />
      <span>CALL DISPATCH: 07955 266 077</span>
      </a>
      {/* Secondary WhatsApp Trigger */}
      <a className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-primary/80 hover:bg-primary text-white transition-colors active:scale-95" href="https://wa.me/448009992470?text=Emergency%20Tyre%20Assistance%20Chorley" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="text-accent h-5 w-5" />
      <span>Send WhatsApp Location</span>
      </a>
      </div>
      {/* Urgent Motorway Advisory */}
      <div className="mt-6 p-4 rounded-xl bg-primary/60 flex items-center gap-3 max-w-xl">
      <Shield className="text-secondary h-[24px] w-[24px]" />
      <p className="text-[13px] leading-[18px] text-gray-400">
      <strong className="text-white">Stuck on the M61/M6?</strong> Turn hazard lights on, move behind safety barrier, and give our operator your nearest junction marker post.
                    </p>
      </div>
      </div>
      </div>
      {/* Right: Tall Real-Photo Strip Cut Into Edge */}
      <div className="lg:col-span-4 relative min-h-[380px] lg:min-h-full rounded-2xl overflow-hidden bg-primary/60 shadow-2xl">
      <Image src="/hero-section-images-936x527.webp" alt="UK Mobile tyre technician replacing emergency van wheel roadside" fill sizes="(max-width: 1024px) 100vw, 50vw" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/30 to-transparent"></div>
      {/* Tactical Overlay Strip Data */}
      <div className="absolute bottom-0 inset-x-0 p-5 flex flex-col gap-2">
      <div className="flex items-center justify-between">
      <span className="px-2.5 py-1 rounded bg-accent text-white">VAN UNIT #4 CHORLEY</span>
      <span className="text-secondary font-heading flex items-center gap-1">
      <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
                      ACTIVE
                    </span>
      </div>
      <p className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white font-bold">Motorway Patrol: M61 J8 • Euxton • A6 Bypass</p>
      <p className="text-[13px] leading-[18px] text-gray-400">Equipped with 14&quot;–23&quot; run-flats, heavy commercial van tyres, and laser digital wheel balancers.</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 2. LOCAL INTRO: THE CHORLEY JUNCTION NEXUS */}
      <section className="w-full bg-primary-dark py-12">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="p-6 rounded-2xl bg-primary/60">
      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white mb-4">
      <Route className="h-5 w-5" />
      </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-2">M61 / M6 Junction Nexus</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Chorley connects the North West corridor via M61 Junctions 6 &amp; 8 and M6 Junction 28. High-speed punctures on these motorway transitions require fast, roadside intervention to prevent secondary collisions.
                </p>
      </div>
      <div className="p-6 rounded-2xl bg-primary/60">
      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white mb-4">
      <Truck className="h-5 w-5" />
      </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-2">Botany Bay Commercial Logistics</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  From industrial supply chains off the A674 to delivery hubs around Botany Bay, we carry high-load index 8-ply and 10-ply van tyres ready to rescue delivery fleets and fleet owner-operators.
                </p>
      </div>
      <div className="p-6 rounded-2xl bg-primary/60">
      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white mb-4">
      <Timer className="h-5 w-5" />
      </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-2">Zero Towing Waits</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Don&apos;t spend 3 hours waiting for an AA or RAC recovery flatbed to tow you to a locked garage. We fit, balance, and test brand-new rubber right where your vehicle is standing.
                </p>
      </div>
      </div>
      </div>
      </section>
      {/* 3. SERVICES: HORIZONTAL SPROCKET-EDGED FILMSTRIP PHOTO CARDS */}
      <section className="w-full bg-primary-dark py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary-hover uppercase tracking-wider block mb-1">Workshop Delivered To Your Wheels</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white uppercase">On-Demand Roadside Services</h2>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-2 md:mt-0 max-w-md">
                Industrial-grade mobile machinery powered by onboard pneumatics, delivering garage-quality wheel care anywhere in Lancashire.
              </p>
      </div>
      {/* Filmstrip Sprocket Container */}
      <div className="relative bg-primary/80 rounded-2xl p-4 md:p-6 overflow-hidden">
      {/* Film Sprocket Top Accent */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
      <div className="flex gap-2">
      <span className="w-3 h-2 rounded-sm bg-primary"></span>
      <span className="w-3 h-2 rounded-sm bg-primary"></span>
      <span className="w-3 h-2 rounded-sm bg-primary"></span>
      <span className="w-3 h-2 rounded-sm bg-primary"></span>
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold tracking-widest text-gray-400 uppercase">FILMSTRIP DISPATCH LOG • CHORLEY DIVISION</span>
      <div className="flex gap-2">
      <span className="w-3 h-2 rounded-sm bg-primary"></span>
      <span className="w-3 h-2 rounded-sm bg-primary"></span>
      <span className="w-3 h-2 rounded-sm bg-primary"></span>
      <span className="w-3 h-2 rounded-sm bg-primary"></span>
      </div>
      </div>
      {/* 4 Filmstrip Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Card 1 */}
      <div className="group relative rounded-xl overflow-hidden bg-primary-dark flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Emergency Motorway Tyre Replacement van deployed at roadside" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-primary-dark/80 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold">SERVICE 01</div>
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
      <div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Motorway Blowout Response</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Immediate dispatch to M61 J6-J8 and M6 J28 hard shoulders or emergency refuge areas.</p>
      </div>
      <div className="mt-3 pt-2 text-secondary text-[14px] leading-[18px] tracking-[0.02em] font-semibold flex items-center gap-1">
      <span>Rapid motorway clearance</span>
      <ChevronRight className="h-[16px] w-[16px]" />
      </div>
      </div>
      </div>
      {/* Card 2 */}
      <div className="group relative rounded-xl overflow-hidden bg-primary-dark flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
      <Image src="/gallery-roadside-fitting.webp" alt="Puncture repairs and tyre tread depth measurement in mobile workshop" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-primary-dark/80 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold">SERVICE 02</div>
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
      <div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">BS AU 159 Puncture Repair</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Tread punctures professionally plugged and vulcanized on-site if structurally safe and compliant.</p>
      </div>
      <div className="mt-3 pt-2 text-secondary text-[14px] leading-[18px] tracking-[0.02em] font-semibold flex items-center gap-1">
      <span>Safe tread plug &amp; seal</span>
      <ChevronRight className="h-[16px] w-[16px]" />
      </div>
      </div>
      </div>
      {/* Card 3 */}
      <div className="group relative rounded-xl overflow-hidden bg-primary-dark flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
      <Image src="/gallery-home-callout.webp" alt="Commercial fleet mobile tyre fitting van in Lancashire" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-primary-dark/80 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold">SERVICE 03</div>
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
      <div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Commercial Fleet &amp; Van</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Reinforced commercial sidewall stock for Sprinters, Transits, and Luton box vans around Chorley estates.</p>
      </div>
      <div className="mt-3 pt-2 text-secondary text-[14px] leading-[18px] tracking-[0.02em] font-semibold flex items-center gap-1">
      <span>Heavy-ply inventory</span>
      <ChevronRight className="h-[16px] w-[16px]" />
      </div>
      </div>
      </div>
      {/* Card 4 */}
      <div className="group relative rounded-xl overflow-hidden bg-primary-dark flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
      <Image src="/gallery-evening-callout.webp" alt="Technician with locking wheel nut removal tool" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-primary-dark/80 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold">SERVICE 04</div>
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
      <div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Locking Wheel Nut Removal</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Lost or stripped key? Specialist inverse-impact extraction tools remove stubborn bolts without wheel damage.</p>
      </div>
      <div className="mt-3 pt-2 text-secondary text-[14px] leading-[18px] tracking-[0.02em] font-semibold flex items-center gap-1">
      <span>Non-destructive removal</span>
      <ChevronRight className="h-[16px] w-[16px]" />
      </div>
      </div>
      </div>
      </div>
      {/* Film Sprocket Bottom Accent */}
      <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10">
      <div className="flex gap-2">
      <span className="w-3 h-2 rounded-sm bg-primary"></span>
      <span className="w-3 h-2 rounded-sm bg-primary"></span>
      <span className="w-3 h-2 rounded-sm bg-primary"></span>
      <span className="w-3 h-2 rounded-sm bg-primary"></span>
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold tracking-widest text-gray-400 uppercase">CONTINUOUS 24/7 AVAILABILITY</span>
      <div className="flex gap-2">
      <span className="w-3 h-2 rounded-sm bg-primary"></span>
      <span className="w-3 h-2 rounded-sm bg-primary"></span>
      <span className="w-3 h-2 rounded-sm bg-primary"></span>
      <span className="w-3 h-2 rounded-sm bg-primary"></span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 4. ROADS & NEARBY AREAS: BOLD EDITORIAL STATEMENT BAND */}
      <section className="w-full bg-primary/60 py-14">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
      <div className="text-center max-w-4xl mx-auto">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 tracking-widest uppercase block mb-3">Lancashire Emergency Coverage Map</span>
      <h2 className="font-heading md:font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold md:text-[56px] md:leading-[64px] md:tracking-[-0.02em] md:font-black uppercase text-white">
                Covering the <span className="text-secondary">M61</span>, the <span className="text-secondary">M6</span>, <span className="text-secondary">A6</span> Preston Rd &amp; <span className="text-secondary">A674</span>
      </h2>
      <p className="mt-4 font-heading text-[20px] leading-[26px] font-bold text-gray-400">
                Stationed in <span className="text-white font-bold">Chorley</span> with continuous mobile radius over <span className="text-secondary font-semibold">Euxton</span>, <span className="text-secondary font-semibold">Leyland</span>, <span className="text-secondary font-semibold">Horwich</span>, <span className="text-secondary font-semibold">Adlington</span>, and North <span className="text-secondary font-semibold">Bolton</span>.
              </p>
      {/* Route Tags Grid */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
      <span className="px-3 py-1.5 rounded-full bg-primary/80 text-white">M61 Junction 8 (Chorley / Botany)</span>
      <span className="px-3 py-1.5 rounded-full bg-primary/80 text-white">M61 Junction 6 (Horwich / Middlebrook)</span>
      <span className="px-3 py-1.5 rounded-full bg-primary/80 text-white">M6 Junction 28 (Leyland)</span>
      <span className="px-3 py-1.5 rounded-full bg-primary/80 text-white">A6 Preston Road corridor</span>
      <span className="px-3 py-1.5 rounded-full bg-primary/80 text-white">A581 / Euxton Lane</span>
      <span className="px-3 py-1.5 rounded-full bg-primary/80 text-white">Chorley Town Centre &amp; Astley Park</span>
      <span className="px-3 py-1.5 rounded-full bg-primary/80 text-white">Buckshaw Village</span>
      </div>
      </div>
      </div>
      </section>
      {/* 5. HOW IT WORKS: LARGE ILLUSTRATED CARD WITH 5 NUMBERED OVERLAYS */}
      <section className="w-full bg-primary-dark py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
      <div className="mb-10 text-center">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary-hover uppercase tracking-wider block mb-1">Zero Friction Breakdown Dispatch</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white uppercase">How Our Emergency Response Operates</h2>
      </div>
      {/* Illustrated Master Card with Photo & Step Nodes */}
      <div className="relative bg-primary/60 rounded-3xl overflow-hidden p-6 md:p-10">
      {/* Background Ambient Dimmer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
      {/* Centerpiece Graphic: Technician at Work */}
      <div className="lg:col-span-6 relative rounded-2xl overflow-hidden h-[340px] md:h-[460px] shadow-2xl">
      <Image src="/gallery-evening-home-visit.webp" alt="Mobile tyre technician working roadside with tools in British weather" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/30 to-transparent"></div>
      {/* Floating Marker Callouts on Image */}
      <div className="absolute top-6 left-6 flex items-center gap-2 bg-primary-dark/90 backdrop-blur-md px-3 py-1.5 rounded-full text-white">
      <span className="w-6 h-6 rounded-full bg-secondary text-primary flex items-center justify-center font-bold text-[11px] leading-[14px] tracking-[0.06em] font-bold">1</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold">Your Location Shared</span>
      </div>
      <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-primary-dark/90 backdrop-blur-md">
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary mb-0.5">Fully Outfitted Rapid Interceptor Van</p>
      <p className="text-[13px] leading-[18px] text-gray-400">Includes computerized bead-breaking, electronic wheel balancing, and air-tank refills.</p>
      </div>
      </div>
      {/* Interactive 5-Step Vertical Flow */}
      <div className="lg:col-span-6 flex flex-col gap-4">
      {/* Step 1 */}
      <div className="p-4 rounded-xl bg-primary/80 flex items-start gap-4 transition-colors hover:bg-primary">
      <span className="w-8 h-8 rounded-full bg-secondary text-primary font-heading flex items-center justify-center shrink-0">1</span>
      <div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Emergency Call or WhatsApp</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Ring our 24hr line. Provide your vehicle registration or tyre sidewall size (e.g. 205/55 R16) and location pin.</p>
      </div>
      </div>
      {/* Step 2 */}
      <div className="p-4 rounded-xl bg-primary/80 flex items-start gap-4 transition-colors hover:bg-primary">
      <span className="w-8 h-8 rounded-full bg-accent text-white font-heading flex items-center justify-center shrink-0">2</span>
      <div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Exact Tyre Confirmation &amp; Fixed Quote</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">We match premium, mid-range, or budget stock immediately from our Chorley inventory. No hidden callout surcharges.</p>
      </div>
      </div>
      {/* Step 3 */}
      <div className="p-4 rounded-xl bg-primary/80 flex items-start gap-4 transition-colors hover:bg-primary">
      <span className="w-8 h-8 rounded-full bg-primary-light text-white font-heading flex items-center justify-center shrink-0">3</span>
      <div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">GPS Dispatch to Your Location</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">The nearest van is routed immediately with a live ETA sent to your smartphone via SMS.</p>
      </div>
      </div>
      {/* Step 4 */}
      <div className="p-4 rounded-xl bg-primary/80 flex items-start gap-4 transition-colors hover:bg-primary">
      <span className="w-8 h-8 rounded-full bg-primary-light text-white font-heading flex items-center justify-center shrink-0">4</span>
      <div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Precision Roadside Fitting &amp; Balancing</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Our certified technician secures your vehicle, fits the replacement, installs a fresh valve, and laser balances.</p>
      </div>
      </div>
      {/* Step 5 */}
      <div className="p-4 rounded-xl bg-primary/80 flex items-start gap-4 transition-colors hover:bg-primary">
      <span className="w-8 h-8 rounded-full bg-secondary text-primary font-heading flex items-center justify-center shrink-0">5</span>
      <div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Mobile Payment &amp; Back On The Road</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Contactless card terminal on-board. Invoices emailed directly for personal or commercial expense records.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 6. REAL LOCAL JOB: VERIFIED CALLOUT REPORT CARD */}
      <section className="w-full bg-primary-dark py-14">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
      <div className="bg-primary/60 rounded-3xl p-6 md:p-8 relative overflow-hidden">
      {/* Top Decorative Stamp */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
      <div className="flex items-center gap-3">
      <span className="px-3 py-1 rounded bg-secondary text-primary font-bold uppercase tracking-wider">
                    VERIFIED CALLOUT INCIDENT
                  </span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Ticket #CHO-8821 • Lancashire Traffic Area</span>
      </div>
      <span className="text-gray-400 font-semibold flex items-center gap-1">
      <ShieldCheck className="h-[18px] w-[18px]" /> Recorded 14 Feb 2025
                </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-6 items-center">
      <div className="md:col-span-7 flex flex-col gap-4">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary-hover uppercase tracking-wider">Location Description</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold md:text-[30px] md:leading-[38px] md:font-bold text-white">
                      Ford Transit Courier on M61 Junction 8 Slip Road
                    </h3>
      </div>
      <p className="text-[15px] leading-[24px] text-white">
                    Driver suffered a violent high-speed rear-left puncture entering the southbound slipway from Chorley towards Botany Bay. The tyre had unseated from the rim bead, leaving the delivery van immobilized on a narrow verge.
                  </p>
      {/* Incident Telemetry Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
      <div className="p-3 rounded-xl bg-primary/80">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block">Dispatched</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">02:14 AM</span>
      </div>
      <div className="p-3 rounded-xl bg-primary/80">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block">Arrival Time</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">19 Mins</span>
      </div>
      <div className="p-3 rounded-xl bg-primary/80">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block">Tyre Fitted</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary">215/65 R16C</span>
      </div>
      <div className="p-3 rounded-xl bg-primary/80">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block">Job Complete</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">23 Mins</span>
      </div>
      </div>
      <div className="p-3 rounded-xl bg-primary-dark text-gray-400 text-[13px] leading-[18px] flex items-center gap-2">
      <Info className="text-secondary h-5 w-5" />
      <span>Vehicle made roadworthy with zero tow charges. Delivery payload delivered to Chorley depot on schedule.</span>
      </div>
      </div>
      <div className="md:col-span-5 relative h-64 md:h-full min-h-[220px] rounded-2xl overflow-hidden bg-primary-dark">
      <Image src="/gallery-precision-care.webp" alt="Close-up inspection of heavy commercial vehicle tyre tread" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute bottom-3 right-3 px-3 py-1 rounded bg-primary-dark/80 text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">
                    Chorley Fast-Response Unit
                  </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 7. FAQS: TWO-COLUMN MOTORWAY & COMMERCE GRID */}
      <section className="w-full bg-primary-dark py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
      <div className="mb-12">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary-hover uppercase tracking-wider block mb-1">Chorley Breakdown Guide</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white uppercase">Frequently Asked Questions</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Q1 */}
      <div className="p-6 rounded-2xl bg-primary/60">
      <div className="flex items-center gap-2 mb-3">
      <HelpCircle className="text-secondary h-5 w-5" />
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Can you legally fit tyres on the M61 or M6 hard shoulder?</h4>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Yes, our technicians are certified in roadside and active motorway compliance. If you are positioned on an emergency refuge or wide hard shoulder, we coordinate with amber warning arrays. If the spot is deemed hazardous by National Highways, we can escort or winch your vehicle to the nearest Chorley slipway exit safely.
                </p>
      </div>
      {/* Q2 */}
      <div className="p-6 rounded-2xl bg-primary/60">
      <div className="flex items-center gap-2 mb-3">
      <HelpCircle className="text-secondary h-5 w-5" />
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Do you stock commercial van and light truck tyres?</h4>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Yes. We carry continuous inventory of reinforced &apos;C&apos; rated commercial tyres (e.g. 215/65 R16C, 235/65 R16C) for Ford Transit, Mercedes Sprinter, Vauxhall Vivaro, and other courier fleets operating across Chorley&apos;s industrial zones.
                </p>
      </div>
      {/* Q3 */}
      <div className="p-6 rounded-2xl bg-primary/60">
      <div className="flex items-center gap-2 mb-3">
      <HelpCircle className="text-secondary h-5 w-5" />
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">What happens if my locking wheel nut key is broken or missing?</h4>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  All our Chorley response vans carry specialized locking wheel nut extraction kits. We reverse-thread or shroud-extract overtightened, rounded, or damaged security keys without damaging the alloy wheel.
                </p>
      </div>
      {/* Q4 */}
      <div className="p-6 rounded-2xl bg-primary/60">
      <div className="flex items-center gap-2 mb-3">
      <HelpCircle className="text-secondary h-5 w-5" />
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">What payment methods do you accept at roadside?</h4>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Every technician carries a mobile chip &amp; PIN / contactless card terminal accepting Visa, Mastercard, Maestro, and American Express, as well as Apple Pay and Google Pay. Company card payments can receive VAT receipts on site.
                </p>
      </div>
      </div>
      </div>
      </section>
      {/* 8. RELATED LOCATIONS: REGIONAL LINKS HUB */}
      <section className="w-full bg-primary-dark py-12">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white uppercase">Regional Emergency Units Near Chorley</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Surrounding Lancashire and Greater Manchester response zones.</p>
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase font-semibold">24-Hour Cross-Border Coverage</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      <div className="p-4 rounded-xl bg-primary/60 flex flex-col justify-between">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white font-bold">Bolton</span>
      <span className="text-[13px] leading-[18px] text-gray-400 mt-1">M61 South / A6</span>
      <span className="mt-2 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold flex items-center">Available →</span>
      </div>
      <div className="p-4 rounded-xl bg-primary/60 flex flex-col justify-between">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white font-bold">Leyland</span>
      <span className="text-[13px] leading-[18px] text-gray-400 mt-1">M6 Junction 28</span>
      <span className="mt-2 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold flex items-center">Available →</span>
      </div>
      <div className="p-4 rounded-xl bg-primary/60 flex flex-col justify-between">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white font-bold">Horwich</span>
      <span className="text-[13px] leading-[18px] text-gray-400 mt-1">M61 Junction 6</span>
      <span className="mt-2 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold flex items-center">Available →</span>
      </div>
      <div className="p-4 rounded-xl bg-primary/60 flex flex-col justify-between">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white font-bold">Euxton &amp; Buckshaw</span>
      <span className="text-[13px] leading-[18px] text-gray-400 mt-1">B5252 &amp; A49</span>
      <span className="mt-2 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold flex items-center">Available →</span>
      </div>
      <div className="p-4 rounded-xl bg-primary/60 flex flex-col justify-between">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white font-bold">Mobile Tyre UK</span>
      <span className="text-[13px] leading-[18px] text-gray-400 mt-1">National Fleet Network</span>
      <span className="mt-2 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold flex items-center">View Network →</span>
      </div>
      </div>
      </div>
      </section>
      {/* 9. FINAL CTA: FULL-WIDTH PHOTO WITH MASSIVE HEADLINE IN NEGATIVE SPACE */}
      <section className="relative w-full min-h-[520px] flex items-center bg-primary-dark overflow-hidden">
      {/* Background Image Asset */}
      <div className="relative absolute inset-0">
      <Image src="/mobile-tyre-fitting-3-1536x1024.webp" alt="Mobile tyre fitting response van parked at roadside at dusk in Lancashire" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover object-left md:object-center opacity-40 mix-blend-luminosity" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/80 to-primary-dark/60"></div>
      </div>
      {/* Negative Space Content */}
      <div className="relative max-w-[1280px] mx-auto px-4 md:px-8 py-20 w-full z-10">
      <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold mb-4">
      <Zap className="h-[16px] w-[16px]" />
      <span>Chorley On-Call Units Standing By</span>
      </div>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold md:text-[56px] md:leading-[64px] md:tracking-[-0.02em] md:font-black uppercase text-white leading-none mb-6">
                Stranded in Chorley? <br/>
      <span className="text-secondary">We Are Ready to Roll.</span>
      </h2>
      <p className="text-[18px] leading-[28px] text-white mb-8 max-w-xl">
                Don&apos;t wait hours for a breakdown recovery truck. Talk straight to our emergency Lancashire control room and have an equipped tyre fitting van dispatched to your exact GPS pin now.
              </p>
      {/* Final Primary Call Action: Click-to-call #2 */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
      <a className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-secondary hover:bg-secondary-hover text-primary font-heading tracking-wide transition-all duration-200 active:scale-95 shadow-2xl shadow-primary-container/30" href="tel:07955266077">
      <PhoneCall className="font-bold h-[24px] w-[24px]" fill="currentColor" strokeWidth={0} />
      <span>07955 266 077</span>
      </a>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-gray-400 text-center sm:text-left">
                  Average local arrival: 25-45 minutes • Open 24/7/365
                </span>
      </div>
      </div>
      </div>
      </section>
      </div>
    </main>
  );
}
