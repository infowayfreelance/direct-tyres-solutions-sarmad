import Image from "next/image";
import { Car, Check, CheckCircle2, ChevronDown, KeyRound, MessageCircle, Navigation, PhoneCall, Shield, ShieldCheck, Timer, Wrench } from "lucide-react";

export default function BredburyPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* SECTION 1: HERO (Split Screen Photo Hero) */}
      <section className="relative w-full bg-primary-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      {/* Left 55% Content */}
      <div className="lg:col-span-7 flex flex-col space-y-6">
      <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-primary/80 text-secondary">
      <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
      <span className="uppercase tracking-wider text-secondary">M60 Junction 25 &amp; 26 Immediate Dispatch</span>
      </div>
      <h1 className="font-heading text-[56px] leading-[64px] tracking-[-0.02em] font-black text-white leading-none uppercase">
                  24/7 Mobile Tyre Fitting in <span className="text-secondary">Bredbury</span>
                </h1>
      <p className="text-[18px] leading-[28px] text-gray-300 max-w-2xl">
                  Rapid roadside response across M60 Junction 25, A560 Stockport Road &amp; A6017 Ashton Road corridors. Van dispatched in minutes.
                </p>
      {/* Direct CTAs */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
      <a className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase shadow-xl hover:bg-secondary-hover transition-all duration-200 hover:scale-[1.02] active:scale-95" href="tel:07955266077">
      <PhoneCall className="mr-2 h-5 w-5" />
                    Call 07955 266 077
                  </a>
      <a className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-primary text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold hover:bg-primary-light transition-all duration-200" href="https://wa.me/448009992470" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="mr-2 text-green-500 h-5 w-5" />
                    WhatsApp Live Dispatch
                  </a>
      </div>
      {/* Micro Trust Bar */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 text-gray-400 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <div className="flex items-center gap-2">
      <Timer className="text-secondary h-5 w-5" />
      <span>25-35 Min SLA</span>
      </div>
      <div className="flex items-center gap-2">
      <ShieldCheck className="text-secondary h-5 w-5" />
      <span>All Major Brands Stocked</span>
      </div>
      <div className="flex items-center gap-2">
      <Shield className="text-secondary h-5 w-5" />
      <span>Motorway Certified Techs</span>
      </div>
      </div>
      </div>
      {/* Right 45% Photo Panel */}
      <div className="lg:col-span-5 relative">
      <div className="relative w-full aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-primary/60">
      <Image src="/hero-section-images-936x527.webp" alt="Direct Tyre Solutions rapid response vehicle providing emergency breakdown assistance near Bredbury Junction 25" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-60"></div>
      </div>
      {/* Overlapping Bottom Stat Badge */}
      <div className="absolute -bottom-4 left-4 right-4 sm:left-8 sm:right-8 bg-primary px-4 py-3 rounded-xl shadow-xl flex items-center justify-center gap-2 text-center">
      <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary"></span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white font-bold">Avg Arrival: 25-35 Mins • M60 Standby Unit Active</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 2: LOCAL INTRO */}
      <section className="w-full bg-primary-dark py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-primary/60 backdrop-blur-md rounded-2xl p-8 lg:p-12 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
      <span className="px-3 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider">Strategic Sector</span>
      <span className="font-heading text-[20px] leading-[26px] font-bold text-secondary uppercase tracking-tight">Bredbury Junction Geography</span>
      </div>
      <div className="space-y-5 text-gray-300 text-[18px] leading-[28px]">
      <p>
                  Bredbury occupies a pivotal choke point connecting Greater Manchester&apos;s ring network to Tameside and High Peak transit routes. Positioned directly between M60 Junction 25 (Bredbury Interchange) and Junction 26, the area experiences sustained high-density commercial haulage, commuter bottlenecks, and rapid surface transitions where heavy lane shifts trigger sudden tyre failures.
                </p>
      <p>
                  When a blowout or deep puncture strikes on the fast-flowing A560 Stockport Road, Bredbury Bar, or the Ashton Road commercial spine, waiting hours for standard recovery tow-trucks creates hazardous exposure. Direct Tyre Solutions deploys fully mobile compressed-air tyre fitting units stationed on instantaneous standby, executing run-flat swaps and industrial bead seating directly at the verge or commercial park curb with zero need for costly recovery recovery transport.
                </p>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 3: SERVICES (2x2 Grid) */}
      <section className="w-full bg-primary-dark py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-14">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase text-secondary tracking-widest block mb-2">Complete Mobile Capabilities</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white uppercase">Rapid Response Services in Bredbury</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Service Card 1 */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden shadow-lg flex flex-col">
      <div className="relative h-56 w-full">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Emergency tyre replacement mobile unit in Bredbury" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-lg">
      <Car className="text-white h-5 w-5" />
      </div>
      </div>
      <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between">
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-2">Emergency Tyre Replacement</h3>
      <p className="text-[15px] leading-[24px] text-gray-300 mb-4">
                      Round-the-clock roadside replacement for blowouts, tread de-lamination, and sidewall ruptures on the M60 corridor.
                    </p>
      </div>
      <div className="pt-4 bg-primary/80 rounded-xl p-3 flex items-center gap-2 text-gray-400 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <CheckCircle2 className="text-secondary h-[14px] w-[14px]" />
      <span>Equipped for high-load vans, SUVs, performance run-flats</span>
      </div>
      </div>
      </div>
      {/* Service Card 2 */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden shadow-lg flex flex-col">
      <div className="relative h-56 w-full">
      <Image src="/gallery-roadside-fitting.webp" alt="Precision tyre puncture repair inspection in Bredbury" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary flex items-center justify-center shadow-lg">
      <Wrench className="text-primary h-5 w-5" />
      </div>
      </div>
      <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between">
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-2">Puncture Repair &amp; Valve Inspection</h3>
      <p className="text-[15px] leading-[24px] text-gray-300 mb-4">
                      BS AU 159 certified combi-plug cold vulcanisation for repairable punctures caused by industrial debris along local link roads.
                    </p>
      </div>
      <div className="pt-4 bg-primary/80 rounded-xl p-3 flex items-center gap-2 text-gray-400 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <CheckCircle2 className="text-secondary h-[14px] w-[14px]" />
      <span>Includes digital tread depth &amp; bead integrity assessment</span>
      </div>
      </div>
      </div>
      {/* Service Card 3 */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden shadow-lg flex flex-col">
      <div className="relative h-56 w-full">
      <Image src="/gallery-home-callout.webp" alt="Locking wheel nut removal specialist in Bredbury" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-lg">
      <KeyRound className="text-white h-5 w-5" />
      </div>
      </div>
      <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between">
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-2">Locking Wheel Nut Removal</h3>
      <p className="text-[15px] leading-[24px] text-gray-300 mb-4">
                      Non-destructive reverse impact extraction for stripped, overtightened, or lost locking wheel keys without alloy scratching.
                    </p>
      </div>
      <div className="pt-4 bg-primary/80 rounded-xl p-3 flex items-center gap-2 text-gray-400 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <CheckCircle2 className="text-secondary h-[14px] w-[14px]" />
      <span>100% extraction success rate for BMW, Audi, Ford, JLR</span>
      </div>
      </div>
      </div>
      {/* Service Card 4 */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden shadow-lg flex flex-col">
      <div className="relative h-56 w-full">
      <Image src="/gallery-evening-callout.webp" alt="Roadside and home driveway mobile tyre replacement" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary flex items-center justify-center shadow-lg">
      <Wrench className="text-primary h-5 w-5" />
      </div>
      </div>
      <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between">
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-2">Driveway &amp; Business Park Fitting</h3>
      <p className="text-[15px] leading-[24px] text-gray-300 mb-4">
                      Skip garage waiting queues. On-site scheduled mobile fitting directly at your home address or workplace car park across Bredbury.
                    </p>
      </div>
      <div className="pt-4 bg-primary/80 rounded-xl p-3 flex items-center gap-2 text-gray-400 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <CheckCircle2 className="text-secondary h-[14px] w-[14px]" />
      <span>Dynamic high-speed computer wheel balancing included</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 4: ROADS & NEARBY AREAS */}
      <section className="w-full bg-primary-dark py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* Text/Spec Panel (7 Cols) */}
      <div className="lg:col-span-7 bg-primary/60 rounded-2xl p-8 lg:p-10 flex flex-col justify-between shadow-xl">
      <div>
      <div className="flex items-center gap-2 mb-4">
      <Navigation className="text-secondary h-5 w-5" />
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase text-secondary tracking-wider">Bredbury Corridor Coverage</span>
      </div>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white uppercase mb-6">
                    Primary Roadways &amp; Motorway Access
                  </h2>
      <div className="space-y-6">
      <div className="bg-primary/60 p-4 rounded-xl">
      <div className="flex items-center justify-between mb-1">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary">M60 Motorway (Junctions 25 &amp; 26)</span>
      <span className="px-2 py-0.5 rounded text-xs bg-accent text-white font-bold">15-25m SLA</span>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-300">
      <strong>Operational Protocol:</strong> Priority response for hard shoulder strandings, slip roads, and lane clearances approaching Bredbury Interchange.
                      </p>
      </div>
      <div className="bg-primary/60 p-4 rounded-xl">
      <div className="flex items-center justify-between mb-1">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary">A560 Stockport Road</span>
      <span className="px-2 py-0.5 rounded text-xs bg-accent text-white font-bold">20-30m SLA</span>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-300">
      <strong>Operational Protocol:</strong> Critical link connecting Bredbury to Stockport centre and Hyde. Continuous mobile van roving between light industrial zones.
                      </p>
      </div>
      <div className="bg-primary/60 p-4 rounded-xl">
      <div className="flex items-center justify-between mb-1">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary">A6017 Ashton Road</span>
      <span className="px-2 py-0.5 rounded text-xs bg-accent text-white font-bold">20-30m SLA</span>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-300">
      <strong>Operational Protocol:</strong> Direct northward artery toward Denton and Crown Point. Immediate roadside dispatch for hauliers and commuter cars.
                      </p>
      </div>
      </div>
      </div>
      <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
      <span className="text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold mr-2">Adjacent Response Zones:</span>
      <span className="px-3 py-1 bg-primary rounded-full text-gray-400 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">Stockport</span>
      <span className="px-3 py-1 bg-primary rounded-full text-gray-400 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">Hyde</span>
      <span className="px-3 py-1 bg-primary rounded-full text-gray-400 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">Denton</span>
      <span className="px-3 py-1 bg-primary rounded-full text-gray-400 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">Romiley</span>
      <span className="px-3 py-1 bg-primary rounded-full text-gray-400 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">Woodley</span>
      </div>
      </div>
      {/* Image Panel (5 Cols) */}
      <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-xl relative min-h-[360px] bg-primary/60">
      <Image src="/gallery-evening-home-visit.webp" alt="Direct Tyre Solutions fleet van parked safely on roadside in Bredbury" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-80"></div>
      <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-primary/60 backdrop-blur-md">
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Fully Equipped Mobile Workshops</p>
      <p className="text-[13px] leading-[18px] text-gray-300">Heavy-duty pneumatic bead breakers, nitrogen inflation tanks, and precision balancer units in every Bredbury unit.</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 5: HOW IT WORKS (Ribbon of 5 Steps) */}
      <section className="w-full bg-primary-dark py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-14">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase text-secondary tracking-widest block mb-2">Rapid 5-Step Process</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white uppercase">How Mobile Fitting Works</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
      {/* Step 1 */}
      <div className="bg-primary/60 rounded-2xl p-6 text-center flex flex-col items-center shadow-lg relative group hover:bg-primary/80 transition-colors">
      <div className="w-12 h-12 rounded-full bg-secondary text-primary font-heading text-[20px] leading-[26px] font-bold flex items-center justify-center mb-4 font-bold shadow-md">
                  1
                </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Call / WhatsApp</h3>
      <p className="text-[13px] leading-[18px] text-gray-300">Give us your location in Bredbury or M60 marker.</p>
      </div>
      {/* Step 2 */}
      <div className="bg-primary/60 rounded-2xl p-6 text-center flex flex-col items-center shadow-lg relative group hover:bg-primary/80 transition-colors">
      <div className="w-12 h-12 rounded-full bg-secondary text-primary font-heading text-[20px] leading-[26px] font-bold flex items-center justify-center mb-4 font-bold shadow-md">
                  2
                </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Tyre Spec Matched</h3>
      <p className="text-[13px] leading-[18px] text-gray-300">Instant reg check matches exact size, speed, and load rating.</p>
      </div>
      {/* Step 3 */}
      <div className="bg-primary/60 rounded-2xl p-6 text-center flex flex-col items-center shadow-lg relative group hover:bg-primary/80 transition-colors">
      <div className="w-12 h-12 rounded-full bg-secondary text-primary font-heading text-[20px] leading-[26px] font-bold flex items-center justify-center mb-4 font-bold shadow-md">
                  3
                </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Van Dispatched</h3>
      <p className="text-[13px] leading-[18px] text-gray-300">Nearest Bredbury technician mobilised immediately with live ETA.</p>
      </div>
      {/* Step 4 */}
      <div className="bg-primary/60 rounded-2xl p-6 text-center flex flex-col items-center shadow-lg relative group hover:bg-primary/80 transition-colors">
      <div className="w-12 h-12 rounded-full bg-secondary text-primary font-heading text-[20px] leading-[26px] font-bold flex items-center justify-center mb-4 font-bold shadow-md">
                  4
                </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">On-Site Fitting</h3>
      <p className="text-[13px] leading-[18px] text-gray-300">Precision tyre installation, new rubber valve, and dynamic balance.</p>
      </div>
      {/* Step 5 */}
      <div className="bg-primary/60 rounded-2xl p-6 text-center flex flex-col items-center shadow-lg relative group hover:bg-primary/80 transition-colors">
      <div className="w-12 h-12 rounded-full bg-secondary text-primary font-heading text-[20px] leading-[26px] font-bold flex items-center justify-center mb-4 font-bold shadow-md">
                  5
                </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Pay &amp; Drive Away</h3>
      <p className="text-[13px] leading-[18px] text-gray-300">Safe contactless card payment terminal once satisfied.</p>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 6: REAL LOCAL JOB */}
      <section className="w-full bg-primary-dark py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-primary/60 rounded-2xl overflow-hidden shadow-2xl">
      <div className="flex flex-col sm:flex-row items-stretch">
      <div className="sm:w-2/5 min-h-[200px] relative">
      <Image src="/gallery-precision-care.webp" alt="Real roadside repair near Bredbury J25 off-slip" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute top-3 left-3 bg-accent px-2.5 py-1 rounded text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">Verified Job</div>
      </div>
      <div className="p-6 sm:p-8 sm:w-3/5 flex flex-col justify-between">
      <div>
      <div className="flex items-center justify-between text-gray-300 text-[14px] leading-[18px] tracking-[0.02em] font-semibold mb-2">
      <span>Location: M60 J25 Off-Slip, Bredbury</span>
      <span className="text-secondary font-bold">28 Min Turnaround</span>
      </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-2">BMW 3 Series — Pothole Impact Deflation</h3>
      <p className="text-[15px] leading-[24px] text-gray-300">
                      Driver suffered sudden sidewall split exiting the M60 ring road onto Stockport Road. Our standby van deployed within 6 minutes, removing the compromised Bridgestone Potenza and seating a fresh 225/45 R18 Run-Flat with full digital wheel balance. Driver safely resumed transit.
                    </p>
      </div>
      <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Technician: Dave M. (Van 04)</span>
      <span className="inline-flex items-center text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold font-bold">
      <Check className="h-[14px] w-[14px] mr-1" /> Complete Roadside Resolution
                    </span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 7: FAQ (Clean Accordion) */}
      <section className="w-full bg-primary-dark py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase text-secondary tracking-widest block mb-2">Got Questions?</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white uppercase">Bredbury Emergency FAQ</h2>
      </div>
      <div className="space-y-4">
      {/* FAQ 1 */}
      <details className="group bg-primary/60 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer open:bg-primary/80 transition-colors">
      <summary className="flex items-center justify-between text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">
      <span>What is your realistic arrival time to Bredbury and the M60?</span>
      <ChevronDown className="transition-transform duration-200 group-open:rotate-180 text-secondary h-5 w-5" />
      </summary>
      <div className="mt-4 pt-4 border-t border-white/10 text-[15px] leading-[24px] text-gray-300">
                  Our standby mobile vans are stationed across the southern and eastern Greater Manchester ring road. For callouts within Bredbury (including Junction 25, Ashton Road, and Stockport Road), our average response time ranges between 25 and 35 minutes depending on live motorway flow.
                </div>
      </details>
      {/* FAQ 2 */}
      <details className="group bg-primary/60 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer open:bg-primary/80 transition-colors">
      <summary className="flex items-center justify-between text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">
      <span>Can you safely replace a tyre on the M60 motorway shoulder?</span>
      
      <ChevronDown className="transition-transform duration-200 group-open:rotate-180 text-secondary h-5 w-5" />
      </summary>
      <div className="mt-4 pt-4 border-t border-white/10 text-[15px] leading-[24px] text-gray-300">
                  Yes. Our vans adhere to strict Chapter 8 highway safety standards, fitted with high-intensity rear LED warning matrixes, 360-degree amber beacons, and trained roadside operators. If you are in a live lane or dangerous refuge, our dispatch operator coordinates with National Highways while guiding you safely behind the crash barrier.
                </div>
      </details>
      {/* FAQ 3 */}
      <details className="group bg-primary/60 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer open:bg-primary/80 transition-colors">
      <summary className="flex items-center justify-between text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">
      <span>What happens if I don&apos;t have my locking wheel nut key?</span>
      <ChevronDown className="transition-transform duration-200 group-open:rotate-180 text-secondary h-5 w-5" />
      </summary>
      <div className="mt-4 pt-4 border-t border-white/10 text-[15px] leading-[24px] text-gray-300">
                  All Bredbury response units carry specialist inverse extraction equipment designed to grip and remove rounded, damaged, or keyless locking bolts without causing harm to your alloy wheel surfaces.
                </div>
      </details>
      {/* FAQ 4 */}
      <details className="group bg-primary/60 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer open:bg-primary/80 transition-colors">
      <summary className="flex items-center justify-between text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">
      <span>What payment methods do you accept at the roadside?</span>
      <ChevronDown className="transition-transform duration-200 group-open:rotate-180 text-secondary h-5 w-5" />
      </summary>
      <div className="mt-4 pt-4 border-t border-white/10 text-[15px] leading-[24px] text-gray-300">
                  All mobile technicians carry secure handheld chip, pin, and contactless payment machines. We accept Visa, Mastercard, American Express, Apple Pay, and Google Pay once the replacement or puncture repair is completely finished.
                </div>
      </details>
      </div>
      </div>
      </section>
      {/* SECTION 8: RELATED LOCATIONS */}
      <section className="w-full bg-primary-dark py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white uppercase tracking-wider mb-6">Explore Nearby Response Hubs</p>
      <div className="flex flex-wrap items-center justify-center gap-3">
      <a className="px-5 py-2.5 rounded-full bg-primary hover:bg-primary-light text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-colors" href="#">Stockport</a>
      <a className="px-5 py-2.5 rounded-full bg-primary hover:bg-primary-light text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-colors" href="#">Hyde</a>
      <a className="px-5 py-2.5 rounded-full bg-primary hover:bg-primary-light text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-colors" href="#">Denton</a>
      <a className="px-5 py-2.5 rounded-full bg-primary hover:bg-primary-light text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-colors" href="#">Romiley</a>
      <a className="px-5 py-2.5 rounded-full bg-primary hover:bg-primary-light text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-colors" href="#">Woodley</a>
      <a className="px-5 py-2.5 rounded-full bg-accent hover:bg-blue-600 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-colors" href="#">Mobile Tyre Fitting UK</a>
      </div>
      </div>
      </section>
      {/* SECTION 9: FINAL FULL-WIDTH GOLD CTA */}
      <section className="w-full bg-secondary text-primary py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
      <div>
      <h2 className="font-heading md:font-heading text-[36px] leading-[42px] tracking-[-0.01em] font-black md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold font-black uppercase text-primary">
                Stranded in Bredbury? Mobile Van En Route.
              </h2>
      <p className="text-[18px] leading-[28px] text-white-container font-medium mt-1">
                Immediate phone priority line. Live dispatcher ready 24 hours a day, 365 days a year.
              </p>
      </div>
      <div className="flex-shrink-0">
      <a className="inline-flex items-center justify-center px-8 py-5 rounded-full bg-primary-dark text-secondary font-heading text-[20px] leading-[26px] font-bold uppercase tracking-wider hover:bg-primary-dark transition-transform duration-200 hover:scale-105 shadow-2xl" href="tel:07955266077">
      <PhoneCall className="mr-2 h-6 w-6" />
                Call 07955 266 077 Now
              </a>
      </div>
      </div>
      </section>
    </main>
  );
}
