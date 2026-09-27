import Image from "next/image";
import { ArrowRight, Car, ChevronDown, Clock, Home, KeyRound, MapPin, MessageCircle, Navigation, PhoneCall, Route, ShieldCheck, Truck, Wrench } from "lucide-react";

export default function MilnrowPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* SECTION 1: PHOTO BENTO GRID HERO */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4">
      {/* Box 1: Core Value Proposition & Urgent CTA */}
      <div className="lg:col-span-1 lg:row-span-1 rounded-2xl bg-primary/60 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
      <div className="absolute -top-12 -left-12 w-40 h-40 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="space-y-3 z-10">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider">
      <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
                  24/7 Rapid Response Unit
                </div>
      <h1 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-extrabold">
                  24/7 Mobile Tyre Fitting in Milnrow
                </h1>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Critical response across M62 Junction 21, Elizabethan Way (A640), and local driveways. Direct road-ready mobile dispatch with zero recovery delays.
                </p>
      </div>
      <div className="pt-6 flex flex-col sm:flex-row gap-3 z-10">
      <a className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-secondary hover:bg-secondary-hover text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold py-3 px-5 transition duration-200 transform active:scale-95 shadow-md" href="tel:08009992470">
      <PhoneCall className="h-[20px] w-[20px]" />
                  Call 0800 999 2470
                </a>
      <a className="inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-light text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold py-3 px-5 transition duration-200" href="https://wa.me/448009992470">
      <MessageCircle className="h-[20px] w-[20px] text-accent" />
                  WhatsApp
                </a>
      </div>
      </div>
      {/* Box 2 (Prominent full-bleed visual): col-span-2 row-span-2 */}
      <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 rounded-2xl overflow-hidden relative min-h-[380px] lg:min-h-[500px] shadow-2xl group">
      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" style={{ backgroundImage: "url('/hero-section-images-936x527.webp')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent"></div>
      {/* Live telemetry badge */}
      <div className="absolute top-5 right-5 backdrop-blur-md bg-primary-dark/80 rounded-xl px-4 py-2.5 flex items-center gap-3">
      <div className="w-3 h-3 rounded-full bg-secondary animate-pulse"></div>
      <div>
      <span className="block text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Standby Location</span>
      <span className="block font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">M62 J21 / Kingsway Link</span>
      </div>
      </div>
      <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
      <div className="max-w-md">
      <span className="px-2.5 py-1 rounded bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase mb-2 inline-block">Heavy Industrial Spec</span>
      <h3 className="font-heading text-[30px] leading-[38px] font-bold text-white font-bold drop-shadow-md">
                    M62 High-Speed Breakdown &amp; Roadside Support
                  </h3>
      <p className="text-[13px] leading-[18px] text-gray-300 mt-1">
                    Fully kitted response vans carrying run-flats, ultra-high performance profiles, and commercial load-rated tyres for immediate roadside fitting.
                  </p>
      </div>
      <div className="flex items-center gap-2 bg-primary/60 backdrop-blur-md rounded-full px-4 py-2">
      <ShieldCheck className="text-secondary h-[18px] w-[18px]" />
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-white uppercase tracking-wider">BS AU 159 Approved</span>
      </div>
      </div>
      </div>
      {/* Box 3: Quick Stat - Arrival Time */}
      <div className="lg:col-span-1 rounded-2xl bg-primary/60 backdrop-blur-md p-6 flex items-center gap-4 shadow-lg">
      <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
      <Clock className="text-accent h-[32px] w-[32px]" />
      </div>
      <div>
      <div className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black leading-none">25-35m</div>
      <div className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase text-gray-400 tracking-wider mt-1">Average Rapid Arrival</div>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-0.5">Priority reach across M62 J21 &amp; Kingsway Business Park.</p>
      </div>
      </div>
      {/* Box 4: Quick Stat - Onboard Diagnostic & Fitting Tech */}
      <div className="lg:col-span-1 rounded-2xl bg-primary/60 backdrop-blur-md p-6 flex items-center gap-4 shadow-lg">
      <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
      <Wrench className="text-secondary h-[32px] w-[32px]" />
      </div>
      <div>
      <div className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">24/7/365 Van Dispatch</div>
      <div className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase text-secondary-hover tracking-wider mt-1">Full Workshop Capabilities</div>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-0.5">Onboard computerized balancers &amp; hydraulic bead breakers.</p>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 2: LOCAL INTRO SECTION */}
      <section className="w-full bg-primary-dark py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-7 space-y-4">
      <div className="inline-flex items-center gap-2 text-secondary text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider">
      <MapPin className="h-[18px] w-[18px]" />
                Gateway to the Trans-Pennine Corridor
              </div>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white font-extrabold tracking-tight">
                Rapid Intervention at Milnrow &amp; The M62 Incline
              </h2>
      <p className="text-[18px] leading-[28px] text-gray-400">
                Positioned squarely at the foot of the notorious Trans-Pennine motorway climb, Milnrow serves as a strategic arterial pinch point. Tyres that withstand urban commuting frequently succumb to high-speed blowouts or carcass separation when navigating the steep gradient of M62 Junction 21, particularly under severe crosswinds and heavy rainfall.
              </p>
      <p className="text-[15px] leading-[24px] text-gray-400">
                Whether you are stranded along the fast-moving lanes of Elizabethan Way (A640), delayed at Sir Isaac Newton Way / A6193 outside Kingsway Logistics Hub, or immobilized on your home driveway in central Milnrow, our emergency technicians deploy with complete commercial mounting assemblies, rapid wheel-safety verification, and brand-matched replacements.
              </p>
      </div>
      {/* Quick Route Diagnostics Card */}
      <div className="lg:col-span-5 bg-primary/60 rounded-2xl p-6 shadow-xl space-y-4">
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-center justify-between">
      <span>Milnrow Corridor Status</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase text-accent bg-primary px-2.5 py-0.5 rounded-full">Active Fleet</span>
      </h4>
      <div className="space-y-3">
      <div className="flex items-center justify-between p-3 rounded-xl bg-primary/80">
      <div className="flex items-center gap-3">
      <Route className="text-secondary h-[20px] w-[20px]" />
      <div>
      <p className="text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold">M62 Junction 21 Slips</p>
      <p className="text-gray-400 text-[13px] leading-[18px]">Incline stress &amp; hard shoulder blowouts</p>
      </div>
      </div>
      <span className="text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">~20 min</span>
      </div>
      <div className="flex items-center justify-between p-3 rounded-xl bg-primary/80">
      <div className="flex items-center gap-3">
      <Truck className="text-secondary h-[20px] w-[20px]" />
      <div>
      <p className="text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold">A6193 Kingsway Link</p>
      <p className="text-gray-400 text-[13px] leading-[18px]">HGV &amp; distribution freight access</p>
      </div>
      </div>
      <span className="text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">~25 min</span>
      </div>
      <div className="flex items-center justify-between p-3 rounded-xl bg-primary/80">
      <div className="flex items-center gap-3">
      <MapPin className="text-secondary h-[20px] w-[20px]" />
      <div>
      <p className="text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold">Milnrow &amp; Newhey Village</p>
      <p className="text-gray-400 text-[13px] leading-[18px]">Residential driveways &amp; local bays</p>
      </div>
      </div>
      <span className="text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">~25 min</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 3: SERVICES (5 CIRCULAR BADGES WITH PHOTOS) */}
      <section className="w-full max-w-[1280px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
      <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest font-bold">Comprehensive Rapid Capabilities</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white font-extrabold mt-1">Specialist Mobile Services in Milnrow</h2>
      <p className="text-gray-400 text-[15px] leading-[24px] mt-2">Equipped to handle high-performance performance vehicles, commercial transporters, and routine commuter punctures on-site.</p>
      </div>
      {/* 5 Circular Badges in a Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 justify-items-center">
      {/* Service 1 */}
      <div className="flex flex-col items-center text-center group cursor-pointer">
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-accent to-primary shadow-lg transition-transform duration-300 group-hover:scale-105">
      <div className="w-full h-full rounded-full overflow-hidden bg-primary/60 relative">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Emergency Roadside Tyre Van" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <span className="absolute bottom-1 right-1 w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center shadow-md">
      <Car className="h-[18px] w-[18px]" />
      </span>
      </div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold mt-4">Emergency Roadside</h4>
      <p className="text-gray-400 text-[13px] leading-[18px] mt-1 max-w-[180px]">Instant M62 &amp; dual carriageway dispatch</p>
      </div>
      {/* Service 2 */}
      <div className="flex flex-col items-center text-center group cursor-pointer">
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-accent to-primary shadow-lg transition-transform duration-300 group-hover:scale-105">
      <div className="w-full h-full rounded-full overflow-hidden bg-primary/60 relative">
      <Image src="/gallery-roadside-fitting.webp" alt="Tyre Tread and Puncture Repair" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <span className="absolute bottom-1 right-1 w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center shadow-md">
      <Wrench className="h-[18px] w-[18px]" />
      </span>
      </div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold mt-4">Puncture Fix</h4>
      <p className="text-gray-400 text-[13px] leading-[18px] mt-1 max-w-[180px]">Safe BS AU 159 certified puncture sealing</p>
      </div>
      {/* Service 3 */}
      <div className="flex flex-col items-center text-center group cursor-pointer">
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-secondary to-primary shadow-lg transition-transform duration-300 group-hover:scale-105">
      <div className="w-full h-full rounded-full overflow-hidden bg-primary/60 relative">
      <Image src="/gallery-home-callout.webp" alt="Technician with Impact Wrench" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <span className="absolute bottom-1 right-1 w-9 h-9 rounded-full bg-secondary text-primary flex items-center justify-center shadow-md">
      <KeyRound className="h-[18px] w-[18px]" />
      </span>
      </div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold mt-4">Locking Nut Removal</h4>
      <p className="text-gray-400 text-[13px] leading-[18px] mt-1 max-w-[180px]">Damage-free specialized extraction</p>
      </div>
      {/* Service 4 */}
      <div className="flex flex-col items-center text-center group cursor-pointer">
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-accent to-primary shadow-lg transition-transform duration-300 group-hover:scale-105">
      <div className="w-full h-full rounded-full overflow-hidden bg-primary/60 relative">
      <Image src="/gallery-evening-callout.webp" alt="Commercial Van Fleet Fitting" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <span className="absolute bottom-1 right-1 w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center shadow-md">
      <Truck className="h-[18px] w-[18px]" />
      </span>
      </div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold mt-4">Commercial Fleet</h4>
      <p className="text-gray-400 text-[13px] leading-[18px] mt-1 max-w-[180px]">Heavy duty logistics &amp; van fleet support</p>
      </div>
      {/* Service 5 */}
      <div className="flex flex-col items-center text-center group cursor-pointer">
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-accent to-primary shadow-lg transition-transform duration-300 group-hover:scale-105">
      <div className="w-full h-full rounded-full overflow-hidden bg-primary/60 relative">
      <Image src="/gallery-evening-home-visit.webp" alt="Driveway Mobile Fitting" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <span className="absolute bottom-1 right-1 w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center shadow-md">
      <Home className="h-[18px] w-[18px]" />
      </span>
      </div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold mt-4">Driveway Fitting</h4>
      <p className="text-gray-400 text-[13px] leading-[18px] mt-1 max-w-[180px]">Scheduled or same-day home installation</p>
      </div>
      </div>
      </section>
      {/* SECTION 4: ROADS & NEARBY AREAS COVERAGE MATRIX */}
      <section className="w-full bg-primary-dark py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
      <div>
      <span className="text-gray-300 text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest font-bold">Local Coverage Zone</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white font-extrabold mt-1">Milnrow Priority Corridors &amp; Environs</h2>
      </div>
      <p className="text-gray-400 text-[15px] leading-[24px] max-w-md mt-2 md:mt-0">
                Our rapid response vehicles are strategically parked near primary feeder roundabouts for swift arterial entry.
              </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {/* Arterial Card 1 */}
      <div className="bg-primary/60 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
      <div className="space-y-2">
      <div className="flex items-center justify-between">
      <span className="text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">M62 (Jct 21)</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold bg-primary/80 text-white px-2 py-0.5 rounded">Motorway</span>
      </div>
      <p className="text-gray-400 text-[13px] leading-[18px]">
                    Immediate hard-shoulder safety assistance, slip road rescue, and quick-turnaround puncture repair before the steep Pennines ascent.
                  </p>
      </div>
      <div className="mt-4 pt-3 flex items-center gap-1.5 text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  15-25 min avg ETA
                </div>
      </div>
      {/* Arterial Card 2 */}
      <div className="bg-primary/60 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
      <div className="space-y-2">
      <div className="flex items-center justify-between">
      <span className="text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">A640 Elizabethan Way</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold bg-primary/80 text-white px-2 py-0.5 rounded">Primary Dual</span>
      </div>
      <p className="text-gray-400 text-[13px] leading-[18px]">
                    Serving the heavy dual carriageway transit link between Rochdale and Milnrow village, accommodating severe pothole damages.
                  </p>
      </div>
      <div className="mt-4 pt-3 flex items-center gap-1.5 text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  20 min avg ETA
                </div>
      </div>
      {/* Arterial Card 3 */}
      <div className="bg-primary/60 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
      <div className="space-y-2">
      <div className="flex items-center justify-between">
      <span className="text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">A6193 Sir Isaac Newton</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold bg-primary/80 text-white px-2 py-0.5 rounded">Logistics Way</span>
      </div>
      <p className="text-gray-400 text-[13px] leading-[18px]">
                    Direct hub line for Kingsway Business Park distribution hubs. Commercial and transit vehicle priority fleet repair.
                  </p>
      </div>
      <div className="mt-4 pt-3 flex items-center gap-1.5 text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  20-30 min avg ETA
                </div>
      </div>
      {/* Arterial Card 4 */}
      <div className="bg-primary/60 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
      <div className="space-y-2">
      <div className="flex items-center justify-between">
      <span className="text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">Newhey &amp; Shaw Links</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold bg-primary/80 text-white px-2 py-0.5 rounded">Connecting Hubs</span>
      </div>
      <p className="text-gray-400 text-[13px] leading-[18px]">
                    Comprehensive residential coverage covering Newhey Road, Shaw town edge, and rural undulating hillside lanes.
                  </p>
      </div>
      <div className="mt-4 pt-3 flex items-center gap-1.5 text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  25-35 min avg ETA
                </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 5: HOW IT WORKS (CIRCULAR NUMBERED 1 TO 5) */}
      <section className="w-full max-w-[1280px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-xl mx-auto mb-14">
      <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest font-bold">Streamlined Dispatch</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white font-extrabold mt-1">How Direct Tyre Solutions Works</h2>
      <p className="text-gray-400 text-[15px] leading-[24px] mt-2">Zero complexity emergency workflow designed to get you safely moving.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
      {/* Step 1 */}
      <div className="flex flex-col items-center text-center relative z-10">
      <div className="w-14 h-14 rounded-full bg-secondary text-primary font-heading text-[20px] leading-[26px] font-bold flex items-center justify-center font-black shadow-lg shadow-primary-container/20 ring-4 ring-primary-dark">
                1
              </div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold mt-4">Immediate Call</h4>
      <p className="text-gray-400 text-[13px] leading-[18px] mt-1">Direct contact with local Milnrow controller. No call-centre holding loops.</p>
      </div>
      {/* Step 2 */}
      <div className="flex flex-col items-center text-center relative z-10">
      <div className="w-14 h-14 rounded-full bg-primary/80 text-white font-heading text-[20px] leading-[26px] font-bold flex items-center justify-center font-black shadow-lg ring-4 ring-primary-dark">
                2
              </div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold mt-4">Tyre Match &amp; GPS</h4>
      <p className="text-gray-400 text-[13px] leading-[18px] mt-1">We confirm exact tyre spec via registration and map your exact pinned location.</p>
      </div>
      {/* Step 3 */}
      <div className="flex flex-col items-center text-center relative z-10">
      <div className="w-14 h-14 rounded-full bg-primary/80 text-white font-heading text-[20px] leading-[26px] font-bold flex items-center justify-center font-black shadow-lg ring-4 ring-primary-dark">
                3
              </div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold mt-4">Van Deployment</h4>
      <p className="text-gray-400 text-[13px] leading-[18px] mt-1">Equipped mobile tyre workshop dispatches immediately towards M62 J21 or driveway.</p>
      </div>
      {/* Step 4 */}
      <div className="flex flex-col items-center text-center relative z-10">
      <div className="w-14 h-14 rounded-full bg-primary/80 text-white font-heading text-[20px] leading-[26px] font-bold flex items-center justify-center font-black shadow-lg ring-4 ring-primary-dark">
                4
              </div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold mt-4">Precision Fitting</h4>
      <p className="text-gray-400 text-[13px] leading-[18px] mt-1">Wheel demount, new tyre mount, laser spin balance, and calibrated torque check.</p>
      </div>
      {/* Step 5 */}
      <div className="flex flex-col items-center text-center relative z-10">
      <div className="w-14 h-14 rounded-full bg-accent text-white font-heading text-[20px] leading-[26px] font-bold flex items-center justify-center font-black shadow-lg ring-4 ring-primary-dark">
                5
              </div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold mt-4">Direct Contactless Pay</h4>
      <p className="text-gray-400 text-[13px] leading-[18px] mt-1">Simple roadside card terminal, digital receipt issued, and you are back on road safely.</p>
      </div>
      </div>
      </section>
      {/* SECTION 6 & 7: REAL LOCAL JOB + FAQ SECTION */}
      <section className="w-full bg-primary-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Real Local Job Card (5 cols) */}
      <div className="lg:col-span-5 bg-primary/60 rounded-2xl p-6 shadow-xl space-y-5">
      <div className="flex items-center justify-between">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase font-semibold">
      <ShieldCheck className="h-[16px] w-[16px]" />
                  Recent Incident Log
                </span>
      <span className="text-gray-400 text-[13px] leading-[18px]">Today, 06:40 AM</span>
      </div>
      <div className="rounded-xl overflow-hidden relative h-48 w-full">
      <Image src="/gallery-precision-care.webp" alt="Emergency roadside job photo" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent"></div>
      <div className="absolute bottom-3 left-3 bg-primary-dark/80 backdrop-blur-md px-3 py-1 rounded text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold">
                  M62 J21 Slip Road Exit
                </div>
      </div>
      <div className="space-y-3">
      <div className="flex justify-between items-center pb-2">
      <span className="text-[15px] leading-[24px] text-gray-400">Vehicle</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Volkswagen Golf 2.0 TDI</span>
      </div>
      <div className="flex justify-between items-center pb-2">
      <span className="text-[15px] leading-[24px] text-gray-400">Tyre Fitted</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">225/40 R18 92Y XL</span>
      </div>
      <div className="flex justify-between items-center pb-2">
      <span className="text-[15px] leading-[24px] text-gray-400">Incident Reason</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-red-400">Pothole High-Speed Blowout</span>
      </div>
      <div className="flex justify-between items-center pb-2">
      <span className="text-[15px] leading-[24px] text-gray-400">Arrival Time</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-accent">26 Minutes from Dispatch</span>
      </div>
      </div>
      <div className="p-3.5 rounded-xl bg-primary/80 text-[13px] leading-[18px] text-gray-400">
      <strong className="text-white">Technician Note:</strong> Driver suffered rapid pressure loss on the westbound off-ramp. Van arrived with beacon deployment, verified rim integrity, fitted brand new tyre, electronically balanced, and re-torqued nuts to 120Nm. Driver back en route inside 42 minutes total.
              </div>
      </div>
      {/* FAQ Section (7 cols) */}
      <div className="lg:col-span-7 space-y-4">
      <div className="mb-6">
      <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest font-bold">Clear Guidance</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white font-extrabold mt-1">Frequently Asked Questions</h2>
      <p className="text-gray-400 text-[15px] leading-[24px] mt-1">Everything you need to know about mobile tyre repair around Milnrow.</p>
      </div>
      <div className="space-y-3" id="milnrow-faq-accordion">
      {/* FAQ 1 */}
      <details className="rounded-xl bg-primary/60 p-4 cursor-pointer transition hover:bg-primary/80 group"><summary className="cursor-pointer list-none"><div className="flex justify-between items-center">
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">How quickly can you reach M62 Junction 21?</h4>
      <ChevronDown className="text-secondary transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </div></summary><div className="mt-2 text-gray-400 text-[15px] leading-[24px]">
                    Our vans regularly patrol the Kingsway Business Park and Elizabethan Way approaches. Under standard traffic conditions, average roadside arrival times at Junction 21 sit between 20 to 30 minutes from booking.
                  </div></details>
      {/* FAQ 2 */}
      <details className="rounded-xl bg-primary/60 p-4 cursor-pointer transition hover:bg-primary/80 group"><summary className="cursor-pointer list-none"><div className="flex justify-between items-center">
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Can you replace run-flat tyres at the roadside?</h4>
      <ChevronDown className="text-secondary transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </div></summary><div className="mt-2 text-gray-400 text-[15px] leading-[24px]">
                    Yes. Our mobile units feature heavy-duty pneumatic assist arms capable of mounting stiff-sidewall run-flat tyres (BMW, Mercedes-Benz, Audi) without damaging your alloy wheels.
                  </div></details>
      {/* FAQ 3 */}
      <details className="rounded-xl bg-primary/60 p-4 cursor-pointer transition hover:bg-primary/80 group"><summary className="cursor-pointer list-none"><div className="flex justify-between items-center">
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">What if I don&apos;t have my locking wheel nut key?</h4>
      <ChevronDown className="text-secondary transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </div></summary><div className="mt-2 text-gray-400 text-[15px] leading-[24px]">
                    We carry reverse-thread carbide extraction tools specifically designed to remove overtightened, damaged, or missing locking wheel nuts cleanly without touching your rim.
                  </div></details>
      {/* FAQ 4 */}
      <details className="rounded-xl bg-primary/60 p-4 cursor-pointer transition hover:bg-primary/80 group"><summary className="cursor-pointer list-none"><div className="flex justify-between items-center">
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Do you fit tyres at residential addresses in Newhey &amp; Milnrow?</h4>
      <ChevronDown className="text-secondary transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </div></summary><div className="mt-2 text-gray-400 text-[15px] leading-[24px]">
                    Absolutely. We provide both urgent on-demand emergency callouts and pre-booked driveway tyre replacements at your home or workplace across the entire borough.
                  </div></details>
      </div>
      
      </div>
      </div>
      </section>
      {/* SECTION 8: RELATED LOCATIONS (3 EQUAL-WIDTH CARDS) */}
      <section className="w-full max-w-[1280px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
      <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest font-bold">Network Coverage</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white font-extrabold mt-1">Adjacent Serviced Sectors</h2>
      <p className="text-gray-400 text-[15px] leading-[24px] mt-1">Our emergency tyre technicians operate across neighboring hubs without regional boundary delays.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Location Card 1 */}
      <div className="rounded-2xl bg-primary/60 p-6 shadow-lg flex flex-col justify-between group hover:bg-primary/80 transition">
      <div>
      <div className="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center mb-4">
      <Navigation className="h-[20px] w-[20px]" />
      </div>
      <h4 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">Shaw &amp; Royton</h4>
      <p className="text-gray-400 text-[13px] leading-[18px] mt-2">
                  Coverage covering B6197, Shaw town centre, Crompton Way, and commuter routes leading directly into Oldham.
                </p>
      </div>
      <div className="mt-6 pt-4 flex items-center justify-between text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <span className="text-secondary font-bold">ETA: 20-30 MINS</span>
      <span className="text-gray-400 group-hover:text-white transition flex items-center gap-1">
                  Dispatch Van <ArrowRight className="h-[14px] w-[14px]" />
      </span>
      </div>
      </div>
      {/* Location Card 2 */}
      <div className="rounded-2xl bg-primary/60 p-6 shadow-lg flex flex-col justify-between group hover:bg-primary/80 transition">
      <div>
      <div className="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center mb-4">
      <Navigation className="h-[20px] w-[20px]" />
      </div>
      <h4 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">Littleborough &amp; Newhey</h4>
      <p className="text-gray-400 text-[13px] leading-[18px] mt-2">
                  Full service reaching Hollingworth Lake roads, Halifax Road (A58), and elevated Pennine footpaths.
                </p>
      </div>
      <div className="mt-6 pt-4 flex items-center justify-between text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <span className="text-secondary font-bold">ETA: 25-35 MINS</span>
      <span className="text-gray-400 group-hover:text-white transition flex items-center gap-1">
                  Dispatch Van <ArrowRight className="h-[14px] w-[14px]" />
      </span>
      </div>
      </div>
      {/* Location Card 3 */}
      <div className="rounded-2xl bg-primary/60 p-6 shadow-lg flex flex-col justify-between group hover:bg-primary/80 transition">
      <div>
      <div className="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center mb-4">
      <Navigation className="h-[20px] w-[20px]" />
      </div>
      <h4 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">Rochdale &amp; M62 Corridor</h4>
      <p className="text-gray-400 text-[13px] leading-[18px] mt-2">
                  Urban residential, Kingsway logistics warehouses, and motorway spans through Junction 20 and Junction 21.
                </p>
      </div>
      <div className="mt-6 pt-4 flex items-center justify-between text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <span className="text-secondary font-bold">ETA: 20-25 MINS</span>
      <span className="text-gray-400 group-hover:text-white transition flex items-center gap-1">
                  Dispatch Van <ArrowRight className="h-[14px] w-[14px]" />
      </span>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 9: FINAL HIGH-IMPACT CTA BANNER */}
      <section className="w-full bg-primary-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto rounded-3xl bg-gradient-to-r from-primary/60 to-primary/80 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="relative z-10 max-w-3xl space-y-4">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">
      <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
                Emergency Fitters on Road Now
              </div>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black">
                Stranded in Milnrow? Van Dispatched in Minutes.
              </h2>
      <p className="text-[18px] leading-[28px] text-gray-400">
                Call direct to lock in our nearest rapid mobile tyre vehicle. We confirm your sizing, provide an accurate arrival estimate, and fix your tyre roadside or at home.
              </p>
      <div className="pt-6 flex flex-col sm:flex-row gap-4">
      <a className="inline-flex items-center justify-center gap-3 rounded-full bg-secondary hover:bg-secondary-hover text-primary font-heading text-[20px] leading-[26px] font-bold py-4 px-8 transition duration-200 transform active:scale-95 shadow-xl" href="tel:08009992470">
      <PhoneCall className="h-[24px] w-[24px]" />
                  Call Milnrow 24/7 Fitter: 0800 999 2470
                </a>
      <a className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-dark hover:bg-primary text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold py-4 px-8 transition duration-200" href="https://wa.me/448009992470">
      <MessageCircle className="h-[22px] w-[22px] text-accent" />
                  WhatsApp Controller
                </a>
      </div>
      </div>
      </div>
      </section>
    </main>
  );
}
