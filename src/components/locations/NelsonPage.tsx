import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronDown, Home, KeyRound, MessageCircle, Navigation, PhoneCall, Route, ShieldCheck, Siren, Wrench } from "lucide-react";

export default function NelsonPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* HERO SECTION: Organic Cutout Hero */}
      <section className="relative w-full overflow-hidden bg-primary-dark px-gutter-mobile md:px-margin py-space-xl lg:py-24">
      {/* Ambient glow orbs */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
      {/* Giant ghost location typography in background */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 select-none pointer-events-none text-[120px] md:text-[220px] lg:text-[280px] font-heading font-black text-white/[0.03] tracking-tighter leading-none whitespace-nowrap z-0">
            NELSON
          </div>
      <div className="relative z-10 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
      {/* Left Column: Key Copy & CTAs */}
      <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
      {/* Urgent Pill Badge */}
      <div className="inline-flex items-center gap-space-xs bg-accent text-white px-3 py-1 rounded-full shadow-md">
      <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-white">Lancashire Rapid Response • Average Arrival 30-45 Mins</span>
      </div>
      <h1 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold lg:font-heading lg:text-[56px] lg:leading-[64px] lg:tracking-[-0.02em] lg:font-black text-white">
                24/7 Mobile Tyre Fitting in <span className="text-secondary underline decoration-accent decoration-4 underline-offset-8">Nelson</span>
      </h1>
      <p className="text-[18px] leading-[28px] text-gray-400 max-w-xl">
                Stuck on the M65, marooned in town-centre traffic, or grounded on a steep terraced street? Our heavy-duty mobile vans bring workshop-grade tyre fitting and laser-balancing directly to your exact location in Nelson and Pendle.
              </p>
      {/* Dispatch Stats Pill Trio */}
      <div className="grid grid-cols-3 gap-space-sm w-full max-w-lg pt-space-xs">
      <div className="bg-primary/60 backdrop-blur-md p-3 rounded-xl">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary block">24/7/365</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Round-the-Clock</span>
      </div>
      <div className="bg-primary/60 backdrop-blur-md p-3 rounded-xl">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-accent block">J12 &amp; J13</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">M65 Corridors</span>
      </div>
      <div className="bg-primary/60 backdrop-blur-md p-3 rounded-xl">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary block">0 Towing</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">On-Site Solution</span>
      </div>
      </div>
      {/* Primary Actions: Phone & WhatsApp */}
      <div className="flex flex-wrap items-center gap-space-sm pt-space-sm w-full sm:w-auto">
      <a className="inline-flex items-center justify-center gap-space-xs bg-secondary hover:bg-secondary-hover text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold px-8 py-4 rounded-full shadow-lg transition-transform active:scale-95 group" href="tel:08009992470">
      <PhoneCall className="text-primary h-6 w-6 group-hover:rotate-12 transition-transform" />
      <span>CALL 0800 999 2470</span>
      </a>
      <a className="inline-flex items-center justify-center gap-space-xs bg-primary/80 hover:bg-primary-light text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold px-6 py-4 rounded-full shadow-sm transition-colors" href="https://wa.me/448009992470" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="text-accent h-5 w-5" />
      <span>WhatsApp Technician</span>
      </a>
      </div>
      </div>
      {/* Right Column: Asymmetric Blob Organic Cutout */}
      <div className="lg:col-span-5 relative flex justify-center items-center mt-space-lg lg:mt-0">
      <div className="relative w-[320px] sm:w-[380px] lg:w-[440px] aspect-square">
      {/* Blob glow background backdrop */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accent via-secondary/20 to-primary-light rounded-[58%_42%_65%_35%/45%_55%_45%_55%] blur-xl opacity-60"></div>
      {/* Masked Image Container */}
      <div className="relative w-full h-full overflow-hidden rounded-[58%_42%_65%_35%/45%_55%_45%_55%] shadow-2xl bg-primary/60">
      <Image src="/hero-section-images-936x527.webp" alt="Mobile Tyre Service Van" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-out" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent"></div>
      </div>
      {/* Floating Micro Diagnostics Badge */}
      <div className="absolute -bottom-4 -left-4 bg-primary/60 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white">
      <Navigation className="h-5 w-5" />
      </div>
      <div>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase">Patrol Unit Active</p>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Nelson &amp; Pendle Sector</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* LOCAL INTRO: Textile-Town & Commuter Context */}
      <section className="w-full bg-primary/60 px-gutter-mobile md:px-margin py-space-xl">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
      <div className="lg:col-span-5 space-y-space-md">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-widest block">Hyper-Local Terrain &amp; Expertise</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">
                Mastering Nelson’s Cobbled Terraces, Gradients &amp; Fast Motorways
              </h2>
      <div className="w-16 h-1 bg-secondary rounded-full"></div>
      </div>
      <div className="lg:col-span-7 space-y-space-md text-[15px] leading-[24px] text-gray-400">
      <p>
                Nelson’s historical layout presents unique roadside headaches. From steep, narrow Victorian terraces along <strong className="text-white font-semibold">Manchester Road (A682)</strong> and compact alleyways where recovery flatbeds physically cannot maneuver, to high-speed commuter emergencies near <strong className="text-white font-semibold">M65 Junction 12 (Brierfield)</strong> and <strong className="text-white font-semibold">Junction 13 (Nelson Centre)</strong>.
              </p>
      <p>
                Instead of paying exorbitant recovery rates to get hauled to a static garage in Colne or Burnley, our custom-built Mercedes Sprinter vans carry commercial hydraulic jacks, computerised rim balancers, and full run-flat pneumatic tools. We replace tyres parked right on your driveway, inside Pendle Rise retail parks, or safely on highway hard shoulders.
              </p>
      </div>
      </div>
      </section>
      {/* SERVICES: Fanned Hand of Cards Layout */}
      <section className="w-full bg-primary-dark px-gutter-mobile md:px-margin py-space-xl lg:py-28 overflow-hidden relative">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-space-xl">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-widest block">Complete On-Site Capabilities</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white mt-1">Our Rapid Nelson Services</h2>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400 max-w-md">
                Zero disruption. Fully equipped mobile tyre workshops engineered to solve roadside crises without waiting days for garage slots.
              </p>
      </div>
      {/* Fanned Dynamic Hand of Cluster Cards */}
      <div className="relative w-full py-10 flex flex-wrap lg:flex-nowrap items-center justify-center gap-6 lg:gap-4">
      {/* Card 1: Emergency Replacement (Tilted -4deg) */}
      <div className="w-full sm:w-[280px] lg:w-[320px] bg-primary/60 rounded-2xl p-4 shadow-xl lg:-rotate-3 hover:rotate-0 transition-transform duration-300 relative group flex-shrink-0">
      <div className="w-full h-48 rounded-xl overflow-hidden mb-4 relative bg-primary">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Emergency roadside mobile tyre fitting" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
      <span className="absolute top-2 right-2 bg-accent text-white p-2 rounded-full shadow-md">
      <Siren className="h-[18px] w-[18px] block" />
      </span>
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase">Immediate Dispatch</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mt-1">Emergency Tyre Fitting</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-2">
                  Blown tread or high-speed motorway puncture on the M65? Rapid on-scene rim mount and pressure balancing in under 45 minutes.
                </p>
      </div>
      {/* Card 2: Puncture Repair (Tilted +3deg) */}
      <div className="w-full sm:w-[260px] lg:w-[290px] bg-primary/60 rounded-2xl p-4 shadow-xl lg:rotate-2 hover:rotate-0 transition-transform duration-300 relative group flex-shrink-0 lg:-ml-6">
      <div className="w-full h-44 rounded-xl overflow-hidden mb-4 relative bg-primary">
      <Image src="/gallery-roadside-fitting.webp" alt="Close-up tyre puncture diagnostics and tread inspection" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
      <span className="absolute top-2 right-2 bg-secondary text-primary p-2 rounded-full shadow-md">
      <Wrench className="h-[18px] w-[18px] block" />
      </span>
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">BS AU 159 Compliant</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mt-1">Puncture Repair</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-2">
                  Nails, screws, or sharp debris safely plugged and vulcanised on your premises if tread integrity meets safety legal criteria.
                </p>
      </div>
      {/* Card 3: Locking Nut Removal (Tilted -2deg) */}
      <div className="w-full sm:w-[260px] lg:w-[290px] bg-primary/60 rounded-2xl p-4 shadow-xl lg:-rotate-2 hover:rotate-0 transition-transform duration-300 relative group flex-shrink-0 lg:-ml-6">
      <div className="w-full h-44 rounded-xl overflow-hidden mb-4 relative bg-primary">
      <Image src="/gallery-home-callout.webp" alt="Technician measuring tyre tread depth and wheel assembly" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
      <span className="absolute top-2 right-2 bg-primary-light text-white p-2 rounded-full shadow-md">
      <KeyRound className="h-[18px] w-[18px] block" />
      </span>
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase">Damaged Keys Solved</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mt-1">Locking Wheel Nut</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-2">
                  Stripped, corroded, or missing locking nut key? Specialised reverse-thread extraction tools remove stubborn bolts without wheel damage.
                </p>
      </div>
      {/* Card 4: Driveway & Fleet (Flat Anchor) */}
      <div className="w-full sm:w-[260px] lg:w-[290px] bg-primary/60 rounded-2xl p-4 shadow-xl lg:rotate-3 hover:rotate-0 transition-transform duration-300 relative group flex-shrink-0 lg:-ml-6">
      <div className="w-full h-44 rounded-xl overflow-hidden mb-4 relative bg-primary">
      <Image src="/gallery-evening-callout.webp" alt="Mobile service van attending vehicle on residential street" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
      <span className="absolute top-2 right-2 bg-accent text-white p-2 rounded-full shadow-md">
      <Home className="h-[18px] w-[18px] block" />
      </span>
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Home &amp; Office</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mt-1">Driveway Fitting</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-2">
                  Schedule multiple tyre replacements right outside your home in Nelson or workplace car parks while you carry on uninterrupted.
                </p>
      </div>
      </div>
      </div>
      </section>
      {/* ROADS & NEARBY AREAS: Editorial Pull Quote with Inset Visual */}
      <section className="w-full bg-primary/60 px-gutter-mobile md:px-margin py-space-xl">
      <div className="max-w-[1280px] mx-auto bg-primary-dark/60 rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
      {/* Editorial Pull-Quote Text */}
      <div className="lg:col-span-8 flex flex-col gap-space-md">
      <div className="flex items-center gap-2">
      <Route className="text-secondary h-6 w-6" />
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider">Pendle Arterial Coverage</span>
      </div>
      <blockquote className="font-heading md:font-heading text-[30px] leading-[38px] font-bold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white">
                  “Instant response across the
                  <span className="text-secondary bg-secondary/10 px-2 rounded">M65</span> corridor, 
                  <span className="text-secondary bg-secondary/10 px-2 rounded">A56</span> Leeds Road, and the 
                  <span className="text-secondary bg-secondary/10 px-2 rounded">A682</span>, bridging rapid dispatch between 
                  <span className="text-gray-400">Burnley</span>, 
                  <span className="text-gray-400">Colne</span>, 
                  <span className="text-gray-400">Brierfield</span>, 
                  <span className="text-gray-400">Barrowford</span>, and 
                  <span className="text-gray-400">Padiham</span>.”
                </blockquote>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Whether stranded near Nelson Interchange, navigating the retail strip near North Valley Road, or delayed on your morning commute towards Blackburn and Preston, our proximity guarantees the lowest wait times in East Lancashire.
                </p>
      </div>
      {/* Inset Circular Action Photo */}
      <div className="lg:col-span-4 flex justify-center items-center">
      <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden shadow-2xl bg-primary/80 flex-shrink-0">
      <Image src="/gallery-evening-home-visit.webp" alt="Roadside technician checking tyre pressure" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover scale-110" />
      <div className="absolute inset-0 bg-accent/20 mix-blend-overlay"></div>
      {/* Inset Badge */}
      <div className="absolute bottom-2 inset-x-0 mx-auto w-max bg-primary-dark/90 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold px-3 py-1 rounded-full uppercase">
                    Lancashire Units
                  </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* HOW IT WORKS: Large Offset Numerals over Continuous Photo Strip */}
      <section className="w-full bg-primary-dark px-gutter-mobile md:px-margin py-space-xl relative">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-space-xl">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider block">Frictionless Process</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white mt-1">From Breakdown to Driving in 5 Steps</h2>
      </div>
      {/* Offset Numerals Grid */}
      <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md relative z-10">
      {/* Step 01 */}
      <div className="bg-primary/60 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col justify-between">
      <span className="font-heading text-[56px] leading-[64px] tracking-[-0.02em] font-black text-secondary/20 font-black leading-none block select-none">01</span>
      <div className="mt-4">
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Call or WhatsApp</h4>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-2">Provide your car reg, tyre size (e.g. 205/55 R16), and road or postcode in Nelson.</p>
      </div>
      </div>
      {/* Step 02 */}
      <div className="bg-primary/60 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col justify-between">
      <span className="font-heading text-[56px] leading-[64px] tracking-[-0.02em] font-black text-secondary/20 font-black leading-none block select-none">02</span>
      <div className="mt-4">
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Instant Quote</h4>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-2">Transparent, all-inclusive pricing with zero hidden roadside surprise charges.</p>
      </div>
      </div>
      {/* Step 03 */}
      <div className="bg-primary/60 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col justify-between">
      <span className="font-heading text-[56px] leading-[64px] tracking-[-0.02em] font-black text-secondary/20 font-black leading-none block select-none">03</span>
      <div className="mt-4">
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Van Dispatched</h4>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-2">Our mobile workshop deploys immediately with your specific premium or budget tyre.</p>
      </div>
      </div>
      {/* Step 04 */}
      <div className="bg-primary/60 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col justify-between">
      <span className="font-heading text-[56px] leading-[64px] tracking-[-0.02em] font-black text-secondary/20 font-black leading-none block select-none">04</span>
      <div className="mt-4">
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">On-Site Fitting</h4>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-2">Precision bead breaking, mounting, digital wheel balance, and fresh rubber valve.</p>
      </div>
      </div>
      {/* Step 05 */}
      <div className="bg-primary/60 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col justify-between">
      <span className="font-heading text-[56px] leading-[64px] tracking-[-0.02em] font-black text-secondary/20 font-black leading-none block select-none">05</span>
      <div className="mt-4">
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Drive Away Safe</h4>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-2">Old casing safely removed for environmental recycling. Tap to pay via card reader.</p>
      </div>
      </div>
      </div>
      {/* Horizontal Continuous Photo Strip Banner behind/beneath numerals */}
      <div className="w-full h-24 mt-6 rounded-2xl overflow-hidden relative shadow-inner opacity-70">
      <Image src="/gallery-precision-care.webp" alt="Continuous fleet workshop strip" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-transparent to-primary-dark"></div>
      </div>
      </div>
      </div>
      </section>
      {/* REAL LOCAL JOB: Verified Report Card */}
      <section className="w-full bg-primary/60 px-gutter-mobile md:px-margin py-space-xl">
      <div className="max-w-[1280px] mx-auto">
      <div className="bg-primary/60 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl flex flex-col lg:flex-row items-center gap-space-lg">
      {/* Left: Verified Badge & Metadata */}
      <div className="flex-1 space-y-space-md">
      <div className="flex flex-wrap items-center gap-2">
      <span className="bg-secondary text-primary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase px-3 py-1 rounded-full font-bold flex items-center gap-1">
      <ShieldCheck className="h-[14px] w-[14px]" /> Verified Field Dispatch
                  </span>
      <span className="text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold">Yesterday at 18:42</span>
      </div>
      <h3 className="font-heading text-[30px] leading-[38px] font-bold text-white">
                  Vauxhall Corsa Emergency Replacement
                </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-2">
      <div className="bg-primary-dark p-3 rounded-xl">
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Location</p>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mt-1">Nelson Town Centre</p>
      <p className="text-[13px] leading-[18px] text-gray-400">A56 Leeds Rd</p>
      </div>
      <div className="bg-primary-dark p-3 rounded-xl">
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Tyre Fitted</p>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mt-1">195/55 R16</p>
      <p className="text-[13px] leading-[18px] text-gray-400">Mid-Range Road</p>
      </div>
      <div className="bg-primary-dark p-3 rounded-xl">
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Arrival Time</p>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary mt-1">21 Minutes</p>
      <p className="text-[13px] leading-[18px] text-gray-400">Target met</p>
      </div>
      <div className="bg-primary-dark p-3 rounded-xl">
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Outcome</p>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-accent mt-1">Pothole Split</p>
      <p className="text-[13px] leading-[18px] text-gray-400">Full Rim Check OK</p>
      </div>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Driver experienced sudden pressure collapse after striking a raised ironwork grid on the A56 Leeds Road approach during wet rush hour conditions. Van dispatched with onboard 195/55 R16 stock. Fitted, electronically spin-balanced, and back on the road in under half an hour.
                </p>
      </div>
      {/* Right: Small Action Visual Placeholder */}
      <div className="w-full lg:w-72 h-56 rounded-2xl overflow-hidden relative shadow-lg flex-shrink-0 bg-primary/60">
      <Image src="/mobile-tyre-fitting-3-1536x1024.webp" alt="Completed roadside tyre replacement in Nelson" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary-dark/20"></div>
      <div className="absolute bottom-2 left-2 bg-primary-dark/80 backdrop-blur-md px-3 py-1 rounded-md text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold flex items-center gap-1">
      <CheckCircle2 className="text-secondary h-[14px] w-[14px]" /> Nelson Job Log #NL-8492
                </div>
      </div>
      </div>
      </div>
      </section>
      {/* FAQS: Interactive Accordion */}
      <section className="w-full bg-primary-dark px-gutter-mobile md:px-margin py-space-xl">
      <div className="max-w-[960px] mx-auto flex flex-col gap-space-lg">
      <div className="text-center space-y-space-xs">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-widest block">Clear Answers</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">Frequently Asked Questions in Nelson</h2>
      <p className="text-[15px] leading-[24px] text-gray-400 max-w-xl mx-auto">
                Need reassurance about narrow road access, emergency motorway dispatch, or upfront quotes?
              </p>
      </div>
      {/* Accordion Container */}
      <div className="space-y-3 mt-4" id="faq-accordion">
      {/* FAQ 1 */}
      <div className="bg-primary/60 rounded-2xl shadow-sm overflow-hidden transition-all">
      <button className="faq-toggle w-full p-5 text-left flex items-center justify-between gap-4 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white focus:outline-none" type="button">
      <span>Can your fitting vans get down narrow Victorian terraced streets in Nelson?</span>
      <ChevronDown className="text-secondary transform transition-transform duration-300 h-5 w-5" />
      </button>
      <div className="faq-content max-h-0 overflow-hidden transition-all duration-300 px-5 text-gray-400 text-[15px] leading-[24px]">
      <div className="pb-5">
                    Yes, absolutely. Unlike bulky flatbed recovery trucks that get jammed on tight East Lancashire terraced roads, our mobile fitting fleet consists of standard-wheelbase high-top vans. We can parallel park directly alongside your vehicle in compact residential streets off Manchester Road or Scotland Road and complete full tyre replacements without blocking neighbourhood traffic.
                  </div>
      </div>
      </div>
      {/* FAQ 2 */}
      <div className="bg-primary/60 rounded-2xl shadow-sm overflow-hidden transition-all">
      <button className="faq-toggle w-full p-5 text-left flex items-center justify-between gap-4 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white focus:outline-none" type="button">
      <span>What happens if I get a puncture on the M65 near Junction 12 or 13?</span>
      <ChevronDown className="text-secondary transform transition-transform duration-300 h-5 w-5" />
      </button>
      <div className="faq-content max-h-0 overflow-hidden transition-all duration-300 px-5 text-gray-400 text-[15px] leading-[24px]">
      <div className="pb-5">
                    Pull over as far left onto the hard shoulder or emergency refuge area as safely possible, turn on your hazard lights, exit via the left passenger door, and stand behind the safety barrier. Contact our emergency line with your precise location marker. Our roadside technicians operate compliant Chapter 8 high-visibility strobe liveries to carry out rapid wheel replacements in safe coordination with traffic authorities.
                  </div>
      </div>
      </div>
      {/* FAQ 3 */}
      <div className="bg-primary/60 rounded-2xl shadow-sm overflow-hidden transition-all">
      <button className="faq-toggle w-full p-5 text-left flex items-center justify-between gap-4 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white focus:outline-none" type="button">
      <span>Are there surprise callout charges or hidden fees?</span>
      <ChevronDown className="text-secondary transform transition-transform duration-300 h-5 w-5" />
      </button>
      <div className="faq-content max-h-0 overflow-hidden transition-all duration-300 px-5 text-gray-400 text-[15px] leading-[24px]">
      <div className="pb-5">
                    No. We provide an absolute, fixed all-inclusive quotation prior to van departure. That covers the new tyre casing, mobile dispatch to your Nelson location, professional mounting, digital wheel balancing, new standard rubber valve replacement, and eco-friendly disposal of your old damaged tyre.
                  </div>
      </div>
      </div>
      {/* FAQ 4 */}
      <div className="bg-primary/60 rounded-2xl shadow-sm overflow-hidden transition-all">
      <button className="faq-toggle w-full p-5 text-left flex items-center justify-between gap-4 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white focus:outline-none" type="button">
      <span>Can you extract damaged or rounded locking wheel nuts?</span>
      <ChevronDown className="text-secondary transform transition-transform duration-300 h-5 w-5" />
      </button>
      <div className="faq-content max-h-0 overflow-hidden transition-all duration-300 px-5 text-gray-400 text-[15px] leading-[24px]">
      <div className="pb-5">
                    Yes. If your locking nut adaptor is stripped, warped, or missing entirely, our technicians carry heavy-duty reverse-fluted extraction tools to safely grip and unseat the security bolt without scoring your alloy rims.
                  </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* RELATED LOCATIONS: Pendle & East Lancashire Network */}
      <section className="w-full bg-primary/60 px-gutter-mobile md:px-margin py-space-lg">
      <div className="max-w-[1280px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-md">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider block">Neighbouring Service Zones</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mt-1">Mobile Tyre Fitting Across East Lancashire</h3>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">Active vans operating continuously across Pendle and Burnley boroughs.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-space-sm">
      <div className="bg-primary/80 hover:bg-primary-light transition-colors p-4 rounded-xl flex items-center justify-between group cursor-pointer">
      <div>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Burnley</p>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">10-15 Min Transit</p>
      </div>
      <ArrowRight className="text-gray-400 group-hover:text-secondary group-hover:translate-x-1 transition-all h-5 w-5" />
      </div>
      <div className="bg-primary/80 hover:bg-primary-light transition-colors p-4 rounded-xl flex items-center justify-between group cursor-pointer">
      <div>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Colne</p>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">8-12 Min Transit</p>
      </div>
      <ArrowRight className="text-gray-400 group-hover:text-secondary group-hover:translate-x-1 transition-all h-5 w-5" />
      </div>
      <div className="bg-primary/80 hover:bg-primary-light transition-colors p-4 rounded-xl flex items-center justify-between group cursor-pointer">
      <div>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Brierfield</p>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">5-10 Min Transit</p>
      </div>
      <ArrowRight className="text-gray-400 group-hover:text-secondary group-hover:translate-x-1 transition-all h-5 w-5" />
      </div>
      <div className="bg-primary/80 hover:bg-primary-light transition-colors p-4 rounded-xl flex items-center justify-between group cursor-pointer">
      <div>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Barrowford</p>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">7-12 Min Transit</p>
      </div>
      <ArrowRight className="text-gray-400 group-hover:text-secondary group-hover:translate-x-1 transition-all h-5 w-5" />
      </div>
      <div className="bg-primary/80 hover:bg-primary-light transition-colors p-4 rounded-xl flex items-center justify-between group cursor-pointer">
      <div>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Padiham</p>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">12-18 Min Transit</p>
      </div>
      <ArrowRight className="text-gray-400 group-hover:text-secondary group-hover:translate-x-1 transition-all h-5 w-5" />
      </div>
      </div>
      </div>
      </section>
      {/* FINAL CTA: Full-Bleed Action with Angled Floating Glass Panel */}
      <section className="relative w-full overflow-hidden bg-primary-dark min-h-[460px] flex items-center justify-end px-gutter-mobile md:px-margin py-space-xl">
      {/* Full-Bleed Background Photo */}
      <div className="relative absolute inset-0 w-full h-full">
      <Image src="/wheel-balancing-2-1536x1024.webp" alt="Emergency roadside service at night" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover object-center scale-105" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/80 to-primary-dark/40"></div>
      </div>
      {/* Angled Floating Glass Panel over corner */}
      <div className="relative z-10 max-w-xl w-full bg-primary-dark/90 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-2xl space-y-space-md -rotate-1 hover:rotate-0 transition-transform duration-300">
      <div className="inline-flex items-center gap-2 bg-accent text-white px-3 py-1 rounded-full">
      <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">Ready for Immediate Callout</span>
      </div>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">
              Stranded in Nelson? We’re Already Nearby.
            </h2>
      <p className="text-[15px] leading-[24px] text-gray-400">
              Don’t wait hours in cold weather for standard recovery. Speak directly to an on-duty technician and have a mobile tyre workshop heading to your exact Nelson location right now.
            </p>
      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm">
      <a className="flex-1 inline-flex items-center justify-center gap-space-xs bg-secondary hover:bg-secondary-hover text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold px-8 py-4 rounded-full shadow-xl transition-transform active:scale-95 text-center" href="tel:08009992470">
      <PhoneCall className="text-primary h-6 w-6" />
      <span>0800 999 2470</span>
      </a>
      <a className="inline-flex items-center justify-center gap-space-xs bg-primary hover:bg-primary-light text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold px-6 py-4 rounded-full transition-colors" href="https://wa.me/448009992470" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="text-accent h-5 w-5" />
      <span>WhatsApp</span>
      </a>
      </div>
      </div>
      </section>
      {/* Interactive Accordion Script */}
    </main>
  );
}
