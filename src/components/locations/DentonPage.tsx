import Image from "next/image";
import { AlertTriangle, ArrowRight, CheckCircle2, Disc, Gauge, HelpCircle, Home, Lock, MapPin, MessageCircle, PhoneCall, ShieldCheck, Truck, Zap } from "lucide-react";

export default function DentonPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* HERO SECTION: Asymmetric 2-Column Grid */}
      <section className="w-full bg-primary-dark text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
      {/* Left Column: Command Details (1/3 approx -> 5 cols) */}
      <div className="lg:col-span-5 bg-primary rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div>
      {/* Live Status Indicator */}
      <div className="inline-flex items-center gap-2 bg-primary-dark/80 px-3 py-1.5 rounded-full mb-6">
      <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-ping"></span>
      <span className="w-2 h-2 rounded-full bg-secondary -ml-4"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider font-bold">Denton Response Unit On Call</span>
      </div>
      <h1 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white uppercase mb-4">
                    24/7 Mobile Tyre Fitting in Denton
                  </h1>
      <p className="text-[15px] leading-[24px] text-gray-300 mb-6">
                    Rapid on-site dispatch across Clarendon Square, Mottram Road, and M60 Junction 3. Complete puncture repair, emergency tyre replacement, and digital wheel balancing delivered directly to your roadside location, workplace, or home driveway.
                  </p>
      {/* Dispatch Highlights */}
      <div className="space-y-3 mb-8">
      <div className="flex items-center gap-3">
      <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white shrink-0 text-xs">
      <Zap className="h-[14px] w-[14px]" />
      </span>
      <span className="text-[13px] leading-[18px] text-gray-200">Average response time: 25-45 mins</span>
      </div>
      <div className="flex items-center gap-3">
      <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white shrink-0 text-xs">
      <Lock className="h-[14px] w-[14px]" />
      </span>
      <span className="text-[13px] leading-[18px] text-gray-200">365-day roadside &amp; commercial recovery</span>
      </div>
      <div className="flex items-center gap-3">
      <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white shrink-0 text-xs">
      <Disc className="h-[14px] w-[14px]" />
      </span>
      <span className="text-[13px] leading-[18px] text-gray-200">All sizes in stock: Budget, Premium &amp; Run-flat</span>
      </div>
      </div>
      </div>
      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4">
      <a className="flex-1 inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-hover text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase px-6 py-4 rounded-full shadow-lg transition-transform active:scale-95 text-center" href="tel:08009992470">
      <PhoneCall className="h-[20px] w-[20px]" fill="currentColor" strokeWidth={0} />
      <span>Call 0800 999 2470</span>
      </a>
      <a className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold px-5 py-4 rounded-full backdrop-blur-md transition-colors text-center" href="https://wa.me/448009992470" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="h-[20px] w-[20px] text-green-400" />
      <span>WhatsApp</span>
      </a>
      </div>
      </div>
      {/* Right Column: Edge-to-Edge Hero Image (2/3 approx -> 7 cols) */}
      <div className="lg:col-span-7 rounded-2xl overflow-hidden relative min-h-[380px] lg:min-h-full shadow-2xl flex flex-col justify-end">
      <Image src="/hero-section-images-936x527.webp" alt="Mobile tyre technician changing alloy wheel tyre on a car driveway in Denton" fill sizes="(max-width: 1024px) 100vw, 50vw" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent"></div>
      {/* Tactical Overlay Strip */}
      <div className="relative z-10 p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4">
      <div className="bg-primary/90 backdrop-blur-md px-4 py-3 rounded-xl">
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider">SK14 Service Van Status</p>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Live Dispatched: Mottram Rd &amp; M60 Corridor</p>
      </div>
      <div className="flex items-center gap-2 bg-accent text-white px-4 py-3 rounded-xl text-[14px] leading-[18px] tracking-[0.02em] font-semibold shadow-lg">
      <ShieldCheck className="h-[18px] w-[18px]" />
      <span>Fully Equipped Mobile Rigs</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* LOCAL INTRO: Terrain, Traffic & Logistics in Denton */}
      <section className="w-full bg-primary text-white py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-7">
      <div className="inline-flex items-center gap-2 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider mb-3">
      <MapPin className="h-[16px] w-[16px]" />
      <span>Denton Operating Footprint</span>
      </div>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white mb-6 uppercase">
                  Engineered for Denton’s Severe Gradients &amp; Motorway Traffic
                </h2>
      <p className="text-[15px] leading-[24px] text-gray-300 mb-4">
                  Denton presents a demanding automotive environment: dense town-centre trading around Clarendon Shopping Centre, steep residential climbs reaching up towards Werneth Low, and relentless heavy logistics funnelling through the M60 terminus onto the single-carriageway M67 Mottram bypass.
                </p>
      <p className="text-[15px] leading-[24px] text-gray-300">
                  Whether you hit an unforgiving curb on Market Street, suffer a high-speed motorway blowout approaching Junction 3, or experience a puncture on an industrial delivery route through Newton, our fully outfitted Mercedes Sprinter tyre units bring industrial fitting machines and digital dynamic balancers directly to your exact GPS coordinates.
                </p>
      </div>
      <div className="lg:col-span-5 grid grid-cols-2 gap-4">
      <div className="bg-primary-dark p-6 rounded-2xl">
      <span className="font-heading text-[56px] leading-[64px] tracking-[-0.02em] font-black text-secondary block mb-1">30m</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white block">Target Arrival</span>
      <span className="text-[13px] leading-[18px] text-gray-400 mt-1 block">Rapid intervention along the M60 corridor and town centre</span>
      </div>
      <div className="bg-primary-dark p-6 rounded-2xl">
      <span className="font-heading text-[56px] leading-[64px] tracking-[-0.02em] font-black text-accent block mb-1">24/7</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white block">Continuous Rota</span>
      <span className="text-[13px] leading-[18px] text-gray-400 mt-1 block">Full overnight, bank holiday, and bad-weather coverage</span>
      </div>
      <div className="bg-primary-dark p-6 rounded-2xl col-span-2">
      <div className="flex items-center justify-between mb-2">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Full Size Range Ready</span>
      <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold">13&quot; — 23&quot; RIMS</span>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">Cars, SUVs, 4x4s, electric vehicles (EV), and high-roof commercial vans supported.</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SERVICES: Tight 2x2 Photo Grid with Solid Dark Navy Caption Strips */}
      <section className="w-full bg-primary-dark text-white py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
      <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest block mb-2">On-Demand Capabilities</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white uppercase">Mobile Tyre Services Across SK14</h2>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-2">Comprehensive workshop-grade equipment deployed inside mobile fleet units.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Card 1: Motorway Roadside */}
      <div className="rounded-2xl overflow-hidden bg-primary flex flex-col shadow-xl group">
      <div className="relative h-64 overflow-hidden">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Motorway roadside emergency tyre fitting scene on hard shoulder at night" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute top-4 left-4 bg-primary-dark/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-secondary">
                    Emergency Rapid Dispatch
                  </div>
      </div>
      <div className="p-6 bg-primary flex items-center justify-between">
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Roadside &amp; Motorway Assistance</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">Hazard clearance and puncture swap on M60, M67, and slip roads.</p>
      </div>
      <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white shrink-0 ml-4 shadow-md">
      <AlertTriangle className="h-[20px] w-[20px]" />
      </span>
      </div>
      </div>
      {/* Card 2: Precision Balancing & Fitting */}
      <div className="rounded-2xl overflow-hidden bg-primary flex flex-col shadow-xl group">
      <div className="relative h-64 overflow-hidden">
      <Image src="/gallery-roadside-fitting.webp" alt="Brand new tyre tread inspection with digital gauge" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute top-4 left-4 bg-primary-dark/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-secondary">
                    Digital Inspection
                  </div>
      </div>
      <div className="p-6 bg-primary flex items-center justify-between">
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">New Tyre Supply &amp; Laser Balancing</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">Michelin, Goodyear, Continental, and budget tier brands in stock.</p>
      </div>
      <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white shrink-0 ml-4 shadow-md">
      <Gauge className="h-[20px] w-[20px]" />
      </span>
      </div>
      </div>
      {/* Card 3: Home & Workplace Driveway */}
      <div className="rounded-2xl overflow-hidden bg-primary flex flex-col shadow-xl group">
      <div className="relative h-64 overflow-hidden">
      <Image src="/gallery-home-callout.webp" alt="Technician changing car wheel on driveway in residential area" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute top-4 left-4 bg-primary-dark/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-secondary">
                    Home &amp; Office Visits
                  </div>
      </div>
      <div className="p-6 bg-primary flex items-center justify-between">
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Driveway &amp; Car Park Fitting</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">Zero downtime: scheduled tyre replacements at your residence or worksite.</p>
      </div>
      <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white shrink-0 ml-4 shadow-md">
      <Home className="h-[20px] w-[20px]" />
      </span>
      </div>
      </div>
      {/* Card 4: Fleet & Commercial Units */}
      <div className="rounded-2xl overflow-hidden bg-primary flex flex-col shadow-xl group">
      <div className="relative h-64 overflow-hidden">
      <Image src="/gallery-evening-callout.webp" alt="Modern mobile tyre fitting van with high visibility markings at roadside" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute top-4 left-4 bg-primary-dark/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-secondary">
                    Commercial Response
                  </div>
      </div>
      <div className="p-6 bg-primary flex items-center justify-between">
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Commercial Vans &amp; Fleet Solutions</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">High-load commercial C-rated tyres and courier rapid recovery.</p>
      </div>
      <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white shrink-0 ml-4 shadow-md">
      <Truck className="h-[20px] w-[20px]" />
      </span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* HOW IT WORKS: Horizontal Ribbon with Flat Numerals (1 to 5) */}
      <section className="w-full bg-primary text-white py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
      <div>
      <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest block mb-2">Fast Resolution Protocol</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white uppercase">How Mobile Fitting Works</h2>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400 max-w-sm mt-3 md:mt-0">
                From first contact to fresh rubber on the tarmac in 5 frictionless stages.
              </p>
      </div>
      {/* Numerals Ribbon */}
      <div className="relative">
      <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-white/10 z-0"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
      <div className="bg-primary-dark p-6 rounded-2xl flex flex-col justify-between">
      <div>
      <span className="font-heading text-[56px] leading-[64px] tracking-[-0.02em] font-black text-secondary block leading-none mb-3">01</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Call or Message</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                      Dial our freephone or ping WhatsApp with your car reg and current location in Denton.
                    </p>
      </div>
      <div className="mt-4 pt-3 text-xs text-gray-400 uppercase tracking-wider font-semibold">Immediate answer</div>
      </div>
      <div className="bg-primary-dark p-6 rounded-2xl flex flex-col justify-between">
      <div>
      <span className="font-heading text-[56px] leading-[64px] tracking-[-0.02em] font-black text-white block leading-none mb-3">02</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Tyre Identification</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                      We check matching size, speed rating, and stock for budget, mid-range, or premium.
                    </p>
      </div>
      <div className="mt-4 pt-3 text-xs text-gray-400 uppercase tracking-wider font-semibold">Exact Match</div>
      </div>
      <div className="bg-primary-dark p-6 rounded-2xl flex flex-col justify-between">
      <div>
      <span className="font-heading text-[56px] leading-[64px] tracking-[-0.02em] font-black text-white block leading-none mb-3">03</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Van Dispatch</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                      Nearest mobile workshop unit routes straight to your position with live updates.
                    </p>
      </div>
      <div className="mt-4 pt-3 text-xs text-gray-400 uppercase tracking-wider font-semibold">En Route Quickly</div>
      </div>
      <div className="bg-primary-dark p-6 rounded-2xl flex flex-col justify-between">
      <div>
      <span className="font-heading text-[56px] leading-[64px] tracking-[-0.02em] font-black text-white block leading-none mb-3">04</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Precision Fitting</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                      New tyre fitted, digital dynamic wheel balancing, new valve installed, and pressures set.
                    </p>
      </div>
      <div className="mt-4 pt-3 text-xs text-gray-400 uppercase tracking-wider font-semibold">Workshop Standard</div>
      </div>
      <div className="bg-primary-dark p-6 rounded-2xl flex flex-col justify-between">
      <div>
      <span className="font-heading text-[56px] leading-[64px] tracking-[-0.02em] font-black text-accent block leading-none mb-3">05</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Contactless Pay</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                      Pay roadside via card terminal or phone once completely satisfied and back mobile.
                    </p>
      </div>
      <div className="mt-4 pt-3 text-xs text-gray-400 uppercase tracking-wider font-semibold">All Cards Accepted</div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* REAL LOCAL JOB: Wide Card Case Study */}
      <section className="w-full bg-primary-dark text-white py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-primary rounded-2xl overflow-hidden shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
      {/* Image Column (5 cols) */}
      <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
      <Image src="/gallery-evening-home-visit.webp" alt="Real local job tyre fitment on Nissan Qashqai at Mottram Road Denton" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent lg:hidden"></div>
      </div>
      {/* Content Column (7 cols) */}
      <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
      <div>
      <div className="flex items-center justify-between mb-4">
      <span className="bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Verified Local Job Log
                      </span>
      <span className="text-gray-400 text-[13px] leading-[18px]">Denton SK14</span>
      </div>
      <h3 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white uppercase mb-2">
                      Nissan Qashqai — Mottram Road, Denton
                    </h3>
      <p className="text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold mb-6">
                      Pothole rim pinch &amp; blowout • 215/55 R18 fitted and laser balanced in 29 mins
                    </p>
      <div className="bg-primary-dark p-5 rounded-xl space-y-3 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm">
      <span className="text-gray-400">Incident Reported:</span>
      <span className="text-white font-semibold">19:42 — Curb impact on downhill gradient</span>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm">
      <span className="text-gray-400">Tyre Profile:</span>
      <span className="text-white font-semibold">215/55 R18 99V XL Reinforced</span>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm">
      <span className="text-gray-400">Total Turnaround:</span>
      <span className="text-secondary font-bold">29 Minutes from call receipt to driver departure</span>
      </div>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-300">
                      &quot;Hit an unavoidable sunken pothole on Mottram Road in heavy rain. Sidewall split instantly. Direct Tyre Solutions arrived in 20 minutes, inspected the alloy for hairline cracks, fitted a fresh tyre, and had me back on the road before recovery trucks even answered.&quot;
                    </p>
      </div>
      <div className="mt-8 pt-4 flex items-center justify-between">
      <span className="text-xs text-gray-400 text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider">SK14 Mobile Van #2</span>
      <a className="inline-flex items-center gap-2 text-secondary hover:text-secondary-hover font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase text-sm" href="tel:08009992470">
      <span>Request Similar Rapid Service</span>
      <ArrowRight className="h-[18px] w-[18px]" />
      </a>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* ROADS & NEARBY AREAS: Plain Bordered Grid & Pill Badges */}
      <section className="w-full bg-primary text-white py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
      <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest block mb-2">Strategic Highways</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white uppercase">Critical Corridors &amp; Coverage</h2>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-2">Positioned for sub-30 minute roadside response across key Tameside &amp; High Peak routes.</p>
      </div>
      {/* Road Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div className="bg-primary-dark p-6 rounded-2xl flex flex-col justify-between shadow-lg">
      <div>
      <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center font-heading text-[20px] leading-[26px] font-bold font-black mb-4">
                    M60
                  </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-2">M60 Junction 3 &amp; 4</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    Immediate hard shoulder and slip road response connecting Denton directly through Denton to the Mottram roundabout.
                  </p>
      </div>
      <span className="text-xs font-semibold text-secondary uppercase tracking-wider mt-4 block">Average ETA: 20-30 Mins</span>
      </div>
      <div className="bg-primary-dark p-6 rounded-2xl flex flex-col justify-between shadow-lg">
      <div>
      <div className="w-12 h-12 rounded-xl bg-secondary text-primary flex items-center justify-center font-heading text-[20px] leading-[26px] font-bold font-black mb-4">
                    M67
                  </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-2">M67 Mottram Road</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    High-congestion single lane freight route connecting Denton, Hattersley, and the Snake Pass approaches into Derbyshire.
                  </p>
      </div>
      <span className="text-xs font-semibold text-secondary uppercase tracking-wider mt-4 block">Average ETA: 25-35 Mins</span>
      </div>
      <div className="bg-primary-dark p-6 rounded-2xl flex flex-col justify-between shadow-lg">
      <div>
      <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center font-heading text-[20px] leading-[26px] font-bold font-black mb-4">
                    A57
                  </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-2">A57 Clark Way &amp; Reddish Rd</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    Town-centre bypass and vital northern link towards Reddish, Ashton-under-Lyne, and industrial business parks.
                  </p>
      </div>
      <span className="text-xs font-semibold text-secondary uppercase tracking-wider mt-4 block">Average ETA: 20-25 Mins</span>
      </div>
      </div>
      {/* Surrounding Town Coverage Pills */}
      <div className="bg-primary-dark p-8 rounded-2xl text-center">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-2 uppercase">Surrounding Service Footprint</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mb-6">Our vans patrol continuously across the surrounding district borders:</p>
      <div className="flex flex-wrap items-center justify-center gap-3">
      <div className="bg-primary px-5 py-2.5 rounded-full text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold flex items-center gap-2 shadow-sm">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span>Denton</span>
      </div>
      <div className="bg-primary px-5 py-2.5 rounded-full text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold flex items-center gap-2 shadow-sm">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span>Ashton-under-Lyne</span>
      </div>
      <div className="bg-primary px-5 py-2.5 rounded-full text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold flex items-center gap-2 shadow-sm">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span>Gorton</span>
      </div>
      <div className="bg-primary px-5 py-2.5 rounded-full text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold flex items-center gap-2 shadow-sm">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span>Reddish</span>
      </div>
      <div className="bg-primary px-5 py-2.5 rounded-full text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold flex items-center gap-2 shadow-sm">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span>Audenshaw</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* FAQ SECTION: Two-Column Grid of Concise Q&A Cards */}
      <section className="w-full bg-primary-dark text-white py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
      <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest block mb-2">Driver Clarity</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white uppercase">Frequently Asked Questions</h2>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-2">Clear answers for roadside and residential tyre emergencies in Denton.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-primary p-6 rounded-2xl shadow-md">
      <div className="flex items-start gap-3">
      <HelpCircle className="text-secondary h-[24px] w-[24px] mt-0.5 shrink-0" />
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">How quickly can a tyre van reach me in Denton?</h3>
      <p className="text-[13px] leading-[18px] text-gray-300">
                      Our average emergency response time across Denton, Mottram, and Hattersley is between 25 and 45 minutes, depending on your exact proximity to the M60 or M67.
                    </p>
      </div>
      </div>
      </div>
      <div className="bg-primary p-6 rounded-2xl shadow-md">
      <div className="flex items-start gap-3">
      <HelpCircle className="text-secondary h-[24px] w-[24px] mt-0.5 shrink-0" />
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">What if I don&apos;t know my exact tyre size?</h3>
      <p className="text-[13px] leading-[18px] text-gray-300">
                      Simply provide your vehicle registration when you call or text. Our dispatch system cross-references manufacturer specifications to verify matching tyre dimensions and speed ratings.
                    </p>
      </div>
      </div>
      </div>
      <div className="bg-primary p-6 rounded-2xl shadow-md">
      <div className="flex items-start gap-3">
      <HelpCircle className="text-secondary h-[24px] w-[24px] mt-0.5 shrink-0" />
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Can you fit tyres on steep residential roads around Werneth Low?</h3>
      <p className="text-[13px] leading-[18px] text-gray-300">
                      Yes. Our vans carry commercial chocks, high-lift hydraulic jacks, and stabilising equipment specifically engineered to handle uneven road cambers and steep incline driveways safely.
                    </p>
      </div>
      </div>
      </div>
      <div className="bg-primary p-6 rounded-2xl shadow-md">
      <div className="flex items-start gap-3">
      <HelpCircle className="text-secondary h-[24px] w-[24px] mt-0.5 shrink-0" />
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Do you repair punctures instead of replacing the tyre?</h3>
      <p className="text-[13px] leading-[18px] text-gray-300">
                      If the puncture falls within the central 70% of the tread and has not caused internal cord or sidewall structural breakdown, we execute an immediate BSAU159 compliant repair on-site.
                    </p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* FINAL CTA: Compact Centered Panel with Solid Gold Button */}
      <section className="w-full bg-primary text-white py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-primary-dark rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
      <div className="absolute -top-12 -left-12 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-accent/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="relative z-10">
      <div className="inline-flex items-center gap-2 bg-primary px-4 py-1.5 rounded-full mb-6">
      <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-300 uppercase tracking-wider font-semibold">Tameside Dispatcher Live</span>
      </div>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white uppercase mb-4">
                  Stranded with a Flat Tyre in Denton?
                </h2>
      <p className="text-[18px] leading-[28px] text-gray-300 mb-8 max-w-xl mx-auto">
                  Our fully equipped response units are on standby 24 hours a day, 7 days a week across Denton, the M60 corridor, and M67 Mottram bypass.
                </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-secondary hover:bg-secondary-hover text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase px-8 py-4 rounded-full shadow-xl transition-transform active:scale-95 text-center" href="tel:08009992470">
      <PhoneCall className="h-[22px] w-[22px]" fill="currentColor" strokeWidth={0} />
      <span>Call 0800 999 2470</span>
      </a>
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold px-6 py-4 rounded-full backdrop-blur-md transition-colors text-center" href="https://wa.me/448009992470" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="h-[22px] w-[22px] text-green-400" />
      <span>Message on WhatsApp</span>
      </a>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-400 text-xs uppercase tracking-widest font-semibold">
      <span className="flex items-center gap-1.5">
      <CheckCircle2 className="h-[16px] w-[16px] text-secondary" />
                    No Call-Out Fee With Tyre
                  </span>
      <span className="flex items-center gap-1.5">
      <CheckCircle2 className="h-[16px] w-[16px] text-secondary" />
                    All Major Cards Taken
                  </span>
      <span className="flex items-center gap-1.5">
      <CheckCircle2 className="h-[16px] w-[16px] text-secondary" />
                    24/7 Guaranteed Response
                  </span>
      </div>
      </div>
      </div>
      </div>
      </section>
    </main>
  );
}
