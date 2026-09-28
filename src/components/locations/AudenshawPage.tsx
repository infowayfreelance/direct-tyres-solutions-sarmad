import Image from "next/image";
import { Check, Clock, Disc, HelpCircle, Home, KeyRound, MapPin, MessageCircle, PhoneCall, RefreshCw, Route, ShieldCheck, Signpost, Timer, Wrench, Zap } from "lucide-react";

export default function AudenshawPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-primary-dark">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero-section-images-936x527.webp')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/90 to-primary-dark/60"></div>
      <div className="absolute inset-0 bg-primary-dark/40 backdrop-blur-[2px]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:pt-24 sm:pb-20 flex flex-col justify-between min-h-[620px]">
      <div className="max-w-3xl space-y-6">
      {/* Urgent Status Badge */}
      <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-accent/20 text-accent backdrop-blur-md">
      <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider text-gray-300">Live Rapid Response Units Active in Audenshaw</span>
      </div>
      {/* H1 Heading */}
      <h1 className="font-heading text-[56px] leading-[64px] tracking-[-0.02em] font-black text-white font-black leading-none drop-shadow-sm">
                24/7 Mobile Tyre Fitting in Audenshaw
              </h1>
      {/* Context & Scope Description */}
      <p className="text-[18px] leading-[28px] text-white max-w-2xl">
                Critical roadside tyre replacement and puncture intervention serving <span className="text-secondary font-semibold">M60 Junctions 23 &amp; 24</span>, the <span className="text-secondary font-semibold">M67 link</span>, and the Audenshaw Reservoir perimeter. Fast van dispatch directly to your vehicle anywhere in Tameside.
              </p>
      {/* CTA Cluster */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
      <a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary hover:bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider transition-all duration-150 transform active:scale-95 shadow-xl hover:shadow-primary-container/20" href="tel:08009992470">
      <PhoneCall className="h-5 w-5" fill="currentColor" strokeWidth={0} />
      <span>Call 0800 999 2470</span>
      </a>
      <a className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-primary/80 hover:bg-primary text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold transition-all duration-150 backdrop-blur-md" href="https://wa.me/448009992470" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="text-accent h-5 w-5" />
      <span>WhatsApp Dispatch</span>
      </a>
      </div>
      </div>
      {/* Hero 3-Stat Strip */}
      <div className="mt-12 sm:mt-16 pt-8 bg-primary/60 backdrop-blur-md rounded-2xl p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/5">
      <div className="flex items-center gap-4 md:px-4 first:pl-0">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
      <Timer className="h-5 w-5" fill="currentColor" strokeWidth={0} />
      </div>
      <div>
      <div className="font-heading text-[30px] leading-[38px] font-bold text-white tracking-tight">20-35 Min</div>
      <div className="text-[13px] leading-[18px] text-gray-400">Average Arrival across Audenshaw</div>
      </div>
      </div>
      <div className="flex items-center gap-4 md:px-6 pt-4 md:pt-0">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-gray-400">
      <MapPin className="h-5 w-5" fill="currentColor" strokeWidth={0} />
      </div>
      <div>
      <div className="font-heading text-[30px] leading-[38px] font-bold text-white tracking-tight">M60 &amp; M67</div>
      <div className="text-[13px] leading-[18px] text-gray-400">Standby Units on J23/J24 Corridors</div>
      </div>
      </div>
      <div className="flex items-center gap-4 md:px-6 pt-4 md:pt-0">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
      <RefreshCw className="h-5 w-5" fill="currentColor" strokeWidth={0} />
      </div>
      <div>
      <div className="font-heading text-[30px] leading-[38px] font-bold text-white tracking-tight">24/7 Continuous</div>
      <div className="text-[13px] leading-[18px] text-gray-400">Day &amp; Night Roadside Technicians</div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* INTERACTIVE SERVICES TAB BAR SECTION */}
      <section className="w-full bg-primary-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-widest text-secondary">Dedicated Breakdown Services</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white mt-1">Operational Response Capabilities</h2>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400 max-w-md">
                Fully kitted high-roof commercial vans carrying electronic balancers, heavy pneumatic lifts, and high-spec stock suitable for passenger and light commercial vehicles.
              </p>
      </div>
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-primary-dark/80 backdrop-blur-md" id="service-tabs" role="tablist">
      <button className="tab-btn active-tab flex-1 min-w-[200px] py-3.5 px-5 rounded-xl font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold transition-all text-center flex items-center justify-center gap-2 bg-secondary text-primary" id="tab-btn-0">
      <Home className="h-[18px] w-[18px]" />
      <span>Emergency Replacement</span>
      </button>
      <button className="tab-btn flex-1 min-w-[200px] py-3.5 px-5 rounded-xl font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold transition-all text-center flex items-center justify-center gap-2 bg-transparent text-white hover:bg-primary/60" id="tab-btn-1">
      <Wrench className="h-[18px] w-[18px]" />
      <span>BS AU 159 Puncture Repair</span>
      </button>
      <button className="tab-btn flex-1 min-w-[200px] py-3.5 px-5 rounded-xl font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold transition-all text-center flex items-center justify-center gap-2 bg-transparent text-white hover:bg-primary/60" id="tab-btn-2">
      <KeyRound className="h-[18px] w-[18px]" />
      <span>Locking Wheel Nut</span>
      </button>
      <button className="tab-btn flex-1 min-w-[200px] py-3.5 px-5 rounded-xl font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold transition-all text-center flex items-center justify-center gap-2 bg-transparent text-white hover:bg-primary/60" id="tab-btn-3">
      <Wrench className="h-[18px] w-[18px]" />
      <span>Driveway &amp; Workplace</span>
      </button>
      </div>
      {/* Featured Tab Content Area */}
      <div className="relative bg-primary/60 rounded-2xl overflow-hidden p-6 lg:p-8 backdrop-blur-md">
      {/* Tab 0: Emergency Replacement */}
      <div className="tab-panel grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id="tab-panel-0">
      <div className="lg:col-span-7 space-y-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">
                    Motorway &amp; Dual Carriageway Priority
                  </div>
      <h3 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">
                    Rapid Motorway &amp; Trunk Road Tyre Fitting
                  </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    Stranded on the hard shoulder near M60 Junction 23, on the M67 westbound approach, or by Manchester Road? Our technicians arrive with complete roadside beacons, amber safety systems, and brand-new premium or mid-range tyres pre-matched to your car&apos;s load and speed rating.
                  </p>
      <div className="space-y-3">
      <div className="flex items-start gap-3">
      <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center text-white text-xs">
      <Check className="h-[14px] w-[14px]" />
      </span>
      <span className="text-[15px] leading-[24px] text-white">Highway-safe beaconed vans and strict compliance with Chapter 8 safety guidelines.</span>
      </div>
      <div className="flex items-start gap-3">
      <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center text-white text-xs">
      <Check className="h-[14px] w-[14px]" />
      </span>
      <span className="text-[15px] leading-[24px] text-white">Complete wheel balancing and brand new high-pressure tubeless valves with every replacement.</span>
      </div>
      <div className="flex items-start gap-3">
      <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center text-white text-xs">
      <Check className="h-[14px] w-[14px]" />
      </span>
      <span className="text-[15px] leading-[24px] text-white">Comprehensive inventory carried for all major sizes: 15&quot; through 22&quot; SUV and EV profiles.</span>
      </div>
      </div>
      <div className="pt-4">
      <a className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-secondary hover:bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase transition-all shadow-md" href="tel:08009992470">
      <Zap className="h-[18px] w-[18px]" />
      <span>Request Emergency Technician</span>
      </a>
      </div>
      </div>
      <div className="lg:col-span-5 h-[340px] sm:h-[400px] rounded-xl overflow-hidden relative shadow-2xl">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="British motorway roadside emergency scene on hard shoulder with mobile tyre fitting service support van" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent"></div>
      <div className="absolute bottom-4 left-4 right-4 p-3 bg-primary-dark/80 backdrop-blur-md rounded-lg flex items-center justify-between text-white">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary">Audenshaw Standby Van</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold">Active Patrol</span>
      </div>
      </div>
      </div>
      {/* Tab 1: Puncture Repair */}
      <div className="tab-panel grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id="tab-panel-1">
      <div className="lg:col-span-7 space-y-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">
                    BS AU 159 Standard
                  </div>
      <h3 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">
                    Certified Tread Puncture Repairs
                  </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    Not every tyre issue requires a total replacement. If safe under British Standard AU 159, we perform an internal mushroom plug and vulcanised patch repair on-site, saving you the expense of a replacement tyre.
                  </p>
      <div className="space-y-3">
      <div className="flex items-start gap-3">
      <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center text-white text-xs">
      <Check className="h-[14px] w-[14px]" />
      </span>
      <span className="text-[15px] leading-[24px] text-white">Meticulous internal wheel and liner assessment for hidden structural heat damage.</span>
      </div>
      <div className="flex items-start gap-3">
      <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center text-white text-xs">
      <Check className="h-[14px] w-[14px]" />
      </span>
      <span className="text-[15px] leading-[24px] text-white">Combination plug-patch units chemical vulcanisation for permanent seal integrity.</span>
      </div>
      <div className="flex items-start gap-3">
      <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center text-white text-xs">
      <Check className="h-[14px] w-[14px]" />
      </span>
      <span className="text-[15px] leading-[24px] text-white">Spare tyre kept on van as fail-safe guarantee if puncture proves unrepairable.</span>
      </div>
      </div>
      <div className="pt-4">
      <a className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-secondary hover:bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase transition-all shadow-md" href="tel:08009992470">
      <Zap className="h-[18px] w-[18px]" />
      <span>Request Emergency Technician</span>
      </a>
      </div>
      </div>
      <div className="lg:col-span-5 h-[340px] sm:h-[400px] rounded-xl overflow-hidden relative shadow-2xl">
      <Image src="/gallery-roadside-fitting.webp" alt="Automotive mobile tyre technician in hi-vis vest changing tyre" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent"></div>
      <div className="absolute bottom-4 left-4 right-4 p-3 bg-primary-dark/80 backdrop-blur-md rounded-lg flex items-center justify-between text-white">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary">Audenshaw Tech</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold">Precision Repair</span>
      </div>
      </div>
      </div>
      {/* Tab 2: Locking Wheel Nut */}
      <div className="tab-panel grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id="tab-panel-2">
      <div className="lg:col-span-7 space-y-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">
                    Non-Destructive Removal
                  </div>
      <h3 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">
                    Specialist Locking Wheel Nut Extraction
                  </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    Lost the key? Rounded splines or over-torqued security bolts? Our mobile units are equipped with inverse thread extraction tools and induction release kits designed to remove damaged locking nuts without scarring your alloy wheels.
                  </p>
      <div className="space-y-3">
      <div className="flex items-start gap-3">
      <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center text-white text-xs">
      <Check className="h-[14px] w-[14px]" />
      </span>
      <span className="text-[15px] leading-[24px] text-white">Guaranteed removal for rounded, stripped, damaged, or seized security lugs.</span>
      </div>
      <div className="flex items-start gap-3">
      <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center text-white text-xs">
      <Check className="h-[14px] w-[14px]" />
      </span>
      <span className="text-[15px] leading-[24px] text-white">Zero damage guarantee for pristine diamond-cut or painted alloy rims.</span>
      </div>
      <div className="flex items-start gap-3">
      <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center text-white text-xs">
      <Check className="h-[14px] w-[14px]" />
      </span>
      <span className="text-[15px] leading-[24px] text-white">Full standard replacement bolt sets fitted immediately on site.</span>
      </div>
      </div>
      <div className="pt-4">
      <a className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-secondary hover:bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase transition-all shadow-md" href="tel:08009992470">
      <Zap className="h-[18px] w-[18px]" />
      <span>Request Emergency Technician</span>
      </a>
      </div>
      </div>
      <div className="lg:col-span-5 h-[340px] sm:h-[400px] rounded-xl overflow-hidden relative shadow-2xl">
      <Image src="/gallery-home-callout.webp" alt="UK mobile tyre fitting van with equipment ready for dispatch" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent"></div>
      <div className="absolute bottom-4 left-4 right-4 p-3 bg-primary-dark/80 backdrop-blur-md rounded-lg flex items-center justify-between text-white">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary">Specialist Tooling</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold">No Rim Damage</span>
      </div>
      </div>
      </div>
      {/* Tab 3: Driveway & Workplace */}
      <div className="tab-panel grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id="tab-panel-3">
      <div className="lg:col-span-7 space-y-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">
                    Convenient At-Home Fitting
                  </div>
      <h3 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">
                    Audenshaw Driveway &amp; Business Park Appointments
                  </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    No need to waste hours sitting in garage waiting rooms. We arrive directly at your residential home in Audenshaw, your industrial estate near Guide Bridge, or your corporate car park while you continue your day uninterrupted.
                  </p>
      <div className="space-y-3">
      <div className="flex items-start gap-3">
      <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center text-white text-xs">
      <Check className="h-[14px] w-[14px]" />
      </span>
      <span className="text-[15px] leading-[24px] text-white">Flexible booking times available 7 days a week, early mornings to late evenings.</span>
      </div>
      <div className="flex items-start gap-3">
      <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center text-white text-xs">
      <Check className="h-[14px] w-[14px]" />
      </span>
      <span className="text-[15px] leading-[24px] text-white">Multi-vehicle fleet discounts for commercial vans and company vehicle sets.</span>
      </div>
      <div className="flex items-start gap-3">
      <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center text-white text-xs">
      <Check className="h-[14px] w-[14px]" />
      </span>
      <span className="text-[15px] leading-[24px] text-white">Old casing disposal and environmental casing recycling included in every visit.</span>
      </div>
      </div>
      <div className="pt-4">
      <a className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-secondary hover:bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase transition-all shadow-md" href="tel:08009992470">
      <Zap className="h-[18px] w-[18px]" />
      <span>Request Emergency Technician</span>
      </a>
      </div>
      </div>
      <div className="lg:col-span-5 h-[340px] sm:h-[400px] rounded-xl overflow-hidden relative shadow-2xl">
      <Image src="/gallery-evening-callout.webp" alt="Driveway fitting with impact wrench and technician in Audenshaw" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent"></div>
      <div className="absolute bottom-4 left-4 right-4 p-3 bg-primary-dark/80 backdrop-blur-md rounded-lg flex items-center justify-between text-white">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary">Home &amp; Office</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold">Audenshaw Service</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* HOW IT WORKS: 5-DOT PROGRESS BAR */}
      <section className="w-full bg-primary-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-widest text-secondary">Streamlined Dispatch Flow</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">How Our Dispatch Works</h2>
      <p className="text-[15px] leading-[24px] text-gray-400">From first contact to getting your wheels rolling again in five transparent steps.</p>
      </div>
      {/* 5-Step Horizontal Flow */}
      <div className="relative">
      {/* Connecting Line behind circles on Desktop */}
      <div className="hidden md:block absolute top-7 left-12 right-12 h-0.5 bg-primary"></div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
      {/* Step 1 */}
      <div className="flex flex-col items-center text-center space-y-4">
      <div className="w-14 h-14 rounded-full bg-secondary text-primary flex items-center justify-center font-heading text-[30px] leading-[38px] font-bold shadow-lg">
                    1
                  </div>
      <div className="space-y-1">
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Call or WhatsApp</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Provide your location near Audenshaw and your tyre sizing.</p>
      </div>
      </div>
      {/* Step 2 */}
      <div className="flex flex-col items-center text-center space-y-4">
      <div className="w-14 h-14 rounded-full bg-primary text-gray-300 flex items-center justify-center font-heading text-[30px] leading-[38px] font-bold">
                    2
                  </div>
      <div className="space-y-1">
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Tyre &amp; Quote Lock</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">We confirm tyre availability from local stock and provide a transparent, fixed price.</p>
      </div>
      </div>
      {/* Step 3 */}
      <div className="flex flex-col items-center text-center space-y-4">
      <div className="w-14 h-14 rounded-full bg-primary text-gray-300 flex items-center justify-center font-heading text-[30px] leading-[38px] font-bold">
                    3
                  </div>
      <div className="space-y-1">
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Van En Route</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Nearest standby mobile technician departs with live estimated time of arrival.</p>
      </div>
      </div>
      {/* Step 4 */}
      <div className="flex flex-col items-center text-center space-y-4">
      <div className="w-14 h-14 rounded-full bg-primary text-gray-300 flex items-center justify-center font-heading text-[30px] leading-[38px] font-bold">
                    4
                  </div>
      <div className="space-y-1">
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Expert Fitting</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Tyre mounted, precision balanced, valve replaced, and bolts hand-torqued to spec.</p>
      </div>
      </div>
      {/* Step 5 */}
      <div className="flex flex-col items-center text-center space-y-4">
      <div className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center font-heading text-[30px] leading-[38px] font-bold shadow-lg">
      <Check className="h-6 w-6" />
      </div>
      <div className="space-y-1">
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Back on Road</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Contactless card or mobile payment on-site, with digital VAT invoice emailed.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* REAL LOCAL JOB CARD SECTION */}
      <section className="w-full bg-primary-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-widest text-secondary">Audenshaw Field Dispatch Record</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white mt-1">Real Local Job Report</h2>
      </div>
      <div className="flex items-center gap-2 text-gray-400 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <span className="inline-block w-2 h-2 rounded-full bg-accent-hover"></span>
      <span>Verified Incident Log</span>
      </div>
      </div>
      {/* Job Card */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden shadow-xl p-6 lg:p-8 backdrop-blur-md">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/* Thumbnail Image */}
      <div className="lg:col-span-5 h-[260px] sm:h-[300px] rounded-xl overflow-hidden relative">
      <Image src="/gallery-evening-home-visit.webp" alt="Technician fitting tyre on driveway in Audenshaw" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary-dark/90 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">
                    Incident Ref: #AD-8402
                  </div>
      </div>
      {/* Log Content */}
      <div className="lg:col-span-7 space-y-5">
      <div className="flex flex-wrap items-center gap-3">
      <span className="px-3 py-1 rounded-full bg-accent/20 text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase font-semibold">Audenshaw Road / Guide Bridge</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Completed in 24 mins</span>
      </div>
      <h3 className="font-heading text-[30px] leading-[38px] font-bold text-white">
                    Incident Log: Ford Focus — Audenshaw Road near Guide Bridge
                  </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    Driver suffered a high-pressure blowout from a heavy industrial construction screw after passing industrial depots near the railway bridge. Driver pulled onto a safe kerbside inlet. Dispatch vehicle dispatched from M60 orbital patrol unit.
                  </p>
      {/* Specification grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
      <div className="bg-primary-dark p-3.5 rounded-xl">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block uppercase">Tyre Spec Fitted</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">205/55 R16 91V</span>
      </div>
      <div className="bg-primary-dark p-3.5 rounded-xl">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block uppercase">Arrival Time</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">19 Minutes</span>
      </div>
      <div className="bg-primary-dark p-3.5 rounded-xl col-span-2 sm:col-span-1">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block uppercase">Service Result</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-accent">Balanced &amp; Torqued</span>
      </div>
      </div>
      <div className="flex items-center gap-4 text-white text-[13px] leading-[18px] pt-2">
      <ShieldCheck className="text-secondary h-4 w-4" />
      <span>Vehicle safe to continue onto M67 without detour or depot waiting.</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* ROADS & NEARBY AREAS COVERAGE SECTION */}
      <section className="w-full bg-primary-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-widest text-secondary">Geographic Reach</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">Audenshaw Key Corridors &amp; Surrounds</h2>
      <p className="text-[15px] leading-[24px] text-gray-400">Strategically deployed technicians stationed for immediate interception along crucial Tameside junctions and ring road approaches.</p>
      </div>
      {/* Plain Bordered Strategic Road Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-primary/60 p-6 rounded-2xl flex flex-col justify-between space-y-4">
      <div className="space-y-2">
      <div className="w-10 h-10 rounded-xl bg-accent/20 text-gray-400 flex items-center justify-center font-bold">
      <Route className="h-5 w-5" />
      </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">M60 Junction 23 &amp; 24</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    Audenshaw interchange, Ashton Road slipways, and south-eastern orbital approaches. Immediate hard-shoulder and recovery-layby attendance.
                  </p>
      </div>
      <span className="inline-flex items-center gap-1.5 text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary">
      <Clock className="h-[14px] w-[14px]" /> Priority dispatch response
                </span>
      </div>
      <div className="bg-primary/60 p-6 rounded-2xl flex flex-col justify-between space-y-4">
      <div className="space-y-2">
      <div className="w-10 h-10 rounded-xl bg-accent/20 text-gray-400 flex items-center justify-center font-bold">
      <Route className="h-5 w-5" />
      </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">M67 Link &amp; Feeder Lanes</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    Connecting Manchester eastward towards Denton, Hyde, and the Peak corridor. Fast mobile deployment directly to stranded vehicles.
                  </p>
      </div>
      <span className="inline-flex items-center gap-1.5 text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary">
      <Clock className="h-[14px] w-[14px]" /> 20-30 min ETA target
                </span>
      </div>
      <div className="bg-primary/60 p-6 rounded-2xl flex flex-col justify-between space-y-4">
      <div className="space-y-2">
      <div className="w-10 h-10 rounded-xl bg-accent/20 text-gray-400 flex items-center justify-center font-bold">
      <Signpost className="h-5 w-5" />
      </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">A635 Manchester Road &amp; Reservoirs</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    Spanning the Audenshaw Reservoirs perimeter, Audenshaw railway approaches, and retail business parks linking towards Ashton.
                  </p>
      </div>
      <span className="inline-flex items-center gap-1.5 text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary">
      <Clock className="h-[14px] w-[14px]" /> Local neighborhood units
                </span>
      </div>
      </div>
      {/* Adjacent Towns Pills */}
      <div className="bg-primary/60 p-8 rounded-2xl space-y-4 text-center">
      <h4 className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider text-gray-400">Nearby Covered Communities in Immediate Dispatch Radius</h4>
      <div className="flex flex-wrap items-center justify-center gap-3">
      <span className="px-5 py-2.5 rounded-full bg-primary text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-secondary"></span> Denton
                </span>
      <span className="px-5 py-2.5 rounded-full bg-primary text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-secondary"></span> Ashton-under-Lyne
                </span>
      <span className="px-5 py-2.5 rounded-full bg-primary text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-secondary"></span> Droylsden
                </span>
      <span className="px-5 py-2.5 rounded-full bg-primary text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-secondary"></span> Dukinfield
                </span>
      <span className="px-5 py-2.5 rounded-full bg-primary text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-secondary"></span> Guide Bridge
                </span>
      </div>
      </div>
      </div>
      </section>
      {/* FAQ SECTION: TWO COLUMN GRID */}
      <section className="w-full bg-primary-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-widest text-secondary">Clear Answers</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">Frequently Asked Questions</h2>
      <p className="text-[15px] leading-[24px] text-gray-400">Everything you need to know about our emergency mobile tyre fitting in Audenshaw.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* FAQ 1 */}
      <div className="bg-primary/60 p-6 rounded-2xl space-y-3">
      <div className="flex items-start gap-3">
      <HelpCircle className="text-secondary h-6 w-6 mt-0.5" />
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">How quickly can a tyre van reach me at M60 Junction 23?</h3>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400 pl-9">
                  Our typical arrival time around M60 Junctions 23 and 24 is between 20 and 35 minutes. We maintain standby mobile units along the Tameside motorway corridor to minimize roadside vulnerability.
                </p>
      </div>
      {/* FAQ 2 */}
      <div className="bg-primary/60 p-6 rounded-2xl space-y-3">
      <div className="flex items-start gap-3">
      <HelpCircle className="text-secondary h-6 w-6 mt-0.5" />
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">What if I don&apos;t know my exact tyre size?</h3>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400 pl-9">
                  Simply give us your vehicle registration number when calling. Our direct DVLA database lookup will identify the manufacturer specifications. You can also send a photo of your tyre sidewall via WhatsApp.
                </p>
      </div>
      {/* FAQ 3 */}
      <div className="bg-primary/60 p-6 rounded-2xl space-y-3">
      <div className="flex items-start gap-3">
      <HelpCircle className="text-secondary h-6 w-6 mt-0.5" />
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Can you replace a damaged tyre on my driveway in Audenshaw?</h3>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400 pl-9">
                  Yes. Our vans operate fully independently with integrated compressed air, wheel balancers, and jacks. We can replace, balance, and safely dispose of tyres at residential properties or workplace parking bays across Audenshaw.
                </p>
      </div>
      {/* FAQ 4 */}
      <div className="bg-primary/60 p-6 rounded-2xl space-y-3">
      <div className="flex items-start gap-3">
      <HelpCircle className="text-secondary h-6 w-6 mt-0.5" />
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Are you genuinely operational 24 hours including bank holidays?</h3>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400 pl-9">
                  Yes, 365 days a year without exception. Punctures and tyre blowouts happen at late hours, which is why our dispatch desk and roadside fitting vans maintain continuous rotating shifts throughout the night.
                </p>
      </div>
      </div>
      </div>
      </section>
      {/* FINAL CTA: SLIM FLAT GOLD BAR */}
      <section className="w-full bg-secondary py-6 px-4 sm:px-6 lg:px-8 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
      <div className="w-12 h-12 rounded-full bg-primary-dark text-secondary flex items-center justify-center flex-shrink-0">
      <Disc className="h-6 w-6" fill="currentColor" strokeWidth={0} />
      </div>
      <div>
      <div className="font-heading text-[20px] leading-[26px] font-bold text-primary tracking-tight font-extrabold uppercase">
                  24/7 Mobile Tyre Fitting Audenshaw
                </div>
      <div className="text-[13px] leading-[18px] text-primary font-medium">
                  Emergency technician standby on M60 J23 / J24, M67 &amp; A635 routes.
                </div>
      </div>
      </div>
      <div className="flex items-center gap-4">
      <a className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-primary-dark hover:bg-primary/60 text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider transition-all transform active:scale-95 shadow-md" href="tel:08009992470">
      <PhoneCall className="text-secondary h-5 w-5" fill="currentColor" strokeWidth={0} />
      <span>Call 0800 999 2470</span>
      </a>
      </div>
      </div>
      </section>
      </div>
    </main>
  );
}
