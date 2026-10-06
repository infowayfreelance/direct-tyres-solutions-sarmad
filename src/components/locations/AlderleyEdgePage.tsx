import Image from "next/image";
import { ArrowRight, BellRing, Car, CheckCircle2, ChevronDown, ChevronRight, Clock, Home, MapPin, PhoneCall, ShieldCheck, Star, Timer, Truck, Wrench, Zap } from "lucide-react";

export default function AlderleyEdgePage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      <div className="flex flex-col w-full text-white">
      {/* TOP EMERGENCY STATUS STRIP */}
      <section className="w-full bg-primary-dark px-4 py-2.5">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-[13px] leading-[18px]">
      <div className="flex items-center gap-2">
      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-secondary animate-pulse"></span>
      <span className="text-white font-semibold tracking-wide">CHESHIRE DISPATCH:</span>
      <span className="text-gray-400">Rapid vans active in Alderley Edge, Wilmslow &amp; Prestbury</span>
      </div>
      <div className="flex items-center gap-4">
      <span className="inline-flex items-center gap-1.5 text-accent">
      <Clock className="h-[14px] w-[14px]" />
                24/7/365 On-Call Fleet
              </span>
      <a className="inline-flex items-center gap-1.5 font-bold text-secondary hover:underline" href="tel:07955266077">
      <PhoneCall className="h-[14px] w-[14px]" />
                07955 266 077
              </a>
      </div>
      </div>
      </section>
      {/* MAIN TWO-COLUMN WORKSPACE: STICKY SIDEBAR (28%) + DETAILED CONTENT (72%) */}
      <section className="w-full bg-primary-dark py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
      {/* LEFT SIDEBAR (STICKY ON DESKTOP, 28%) */}
      <aside className="w-full lg:w-[28%] lg:sticky lg:top-6 space-y-6">
      {/* SIDEBAR HERO CARD */}
      <div className="bg-primary-dark rounded-2xl overflow-hidden shadow-xl">
      <div className="relative h-44 w-full overflow-hidden bg-primary/60">
      <Image src="/hero-section-images-936x527.webp" alt="Direct Tyre Solutions Mobile Van Deployment" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent"></div>
      <div className="absolute top-3 left-3 bg-accent/90 text-white px-2.5 py-1 rounded-full text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider flex items-center gap-1">
      <Truck className="h-3 w-3" />
                    Van En Route Tier
                  </div>
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <span className="text-white font-medium">Alderley Edge Sector</span>
      <span className="text-secondary font-bold">Priority Grid</span>
      </div>
      </div>
      <div className="p-5 space-y-5">
      {/* CLICK-TO-CALL DISPATCH CARD */}
      <div className="bg-primary/60 rounded-xl p-4 text-center space-y-2">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-wider block">Immediate Roadside / Home Dispatch</span>
      <a className="block w-full py-3.5 px-4 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider shadow-lg hover:bg-secondary-hover transition-all active:scale-95 text-center" href="tel:07955266077">
                      07955 266 077
                    </a>
      <p className="text-[13px] leading-[18px] text-gray-400 flex items-center justify-center gap-1">
      <Zap className="h-[14px] w-[14px] text-secondary" />
                      Direct Response • No Call Centre Queue
                    </p>
      </div>
      {/* METRIC PILLS */}
      <div className="grid grid-cols-1 gap-2.5 pt-1">
      <div className="flex items-center justify-between p-3 rounded-xl bg-primary/60">
      <div className="flex items-center gap-2">
      <Timer className="text-secondary h-4 w-4" />
      <span className="text-[13px] leading-[18px] text-white">Avg Local Arrival</span>
      </div>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary">25-35 Mins</span>
      </div>
      <div className="flex items-center justify-between p-3 rounded-xl bg-primary/60">
      <div className="flex items-center gap-2">
      <Wrench className="text-accent h-4 w-4" />
      <span className="text-[13px] leading-[18px] text-white">Mobile Workshops</span>
      </div>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-accent">100% Fitted</span>
      </div>
      <div className="flex items-center justify-between p-3 rounded-xl bg-primary/60">
      <div className="flex items-center gap-2">
      <Star className="text-secondary h-4 w-4" />
      <span className="text-[13px] leading-[18px] text-white">Cheshire TrustScore</span>
      </div>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">4.9 / 5.0</span>
      </div>
      </div>
      {/* MINI NAV CONTENTS LIST */}
      <div className="pt-2">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-wider block mb-3">On This Page</span>
      <nav className="space-y-1 text-[13px] leading-[18px]">
      <a className="flex items-center justify-between p-2 rounded-lg text-white hover:bg-primary transition-colors" href="#overview">
      <span>01. Edge Overview &amp; Prestige Hub</span>
      <ArrowRight className="h-[14px] w-[14px] text-gray-400" />
      </a>
      <a className="flex items-center justify-between p-2 rounded-lg text-white hover:bg-primary transition-colors" href="#services">
      <span>02. Mobile Specialist Services</span>
      <ArrowRight className="h-[14px] w-[14px] text-gray-400" />
      </a>
      <a className="flex items-center justify-between p-2 rounded-lg text-white hover:bg-primary transition-colors" href="#transit-corridors">
      <span>03. A34 &amp; Village Corridors</span>
      <ArrowRight className="h-[14px] w-[14px] text-gray-400" />
      </a>
      <a className="flex items-center justify-between p-2 rounded-lg text-white hover:bg-primary transition-colors" href="#how-it-works">
      <span>04. 5-Stage Dispatch Protocol</span>
      <ArrowRight className="h-[14px] w-[14px] text-gray-400" />
      </a>
      <a className="flex items-center justify-between p-2 rounded-lg text-white hover:bg-primary transition-colors" href="#case-study">
      <span>05. Real Job: Macclesfield Rd</span>
      <ArrowRight className="h-[14px] w-[14px] text-gray-400" />
      </a>
      <a className="flex items-center justify-between p-2 rounded-lg text-white hover:bg-primary transition-colors" href="#faq">
      <span>06. Local Resident FAQ</span>
      <ArrowRight className="h-[14px] w-[14px] text-gray-400" />
      </a>
      </nav>
      </div>
      {/* QUICK REGISTRATION LOOKUP */}
      <div className="bg-primary/40 rounded-xl p-4 space-y-3">
      <label className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-wider block" htmlFor="side-reg">Rapid Tyre Match by Reg</label>
      <div className="flex gap-2">
      <div className="relative flex-1">
      <div className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent flex items-center justify-center text-[9px] font-bold text-white">GB</div>
      <input className="w-full pl-8 pr-3 py-2 rounded-lg bg-primary-dark text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-secondary" id="side-reg" placeholder="ENTER REG" type="text"/>
      </div>
      <button className="px-4 py-2 bg-accent hover:bg-accent/90 text-white rounded-lg text-[13px] leading-[18px] font-semibold transition-colors" type="button">
                        Find
                      </button>
      </div>
      <p className="text-[12px] text-gray-400 leading-snug">Instant access to Michelin, Pirelli, Continental, and OE homologated stock.</p>
      </div>
      </div>
      </div>
      {/* SAFETY ADVISORY WIDGET */}
      <div className="bg-primary-dark rounded-2xl p-5 space-y-3">
      <div className="flex items-center gap-2 text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">
      <ShieldCheck className="h-4 w-4" />
                  Alloy Protection Guarantee
                </div>
      <p className="text-[13px] leading-[18px] text-gray-400">
                  Touchless mounting arms and polymer-sheathed impact sockets ensure flawless protection for high-value diamond-cut and forged alloys on Porsche, Range Rover, and Bentley platforms.
                </p>
      </div>
      </aside>
      {/* RIGHT MAIN COLUMN (72%) */}
      <main className="w-full lg:w-[72%] space-y-12 min-w-0">
      {/* a. HERO & INTRO */}
      <article className="bg-primary-dark rounded-2xl p-6 sm:p-8 space-y-6" id="overview">
      <div className="space-y-3">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/60 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">
      <MapPin className="h-3 w-3" />
                    Alderley Edge &amp; Cheshire Golden Triangle
                  </div>
      <h1 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold sm:text-[56px] sm:leading-[64px] sm:tracking-[-0.02em] sm:font-black text-white">
                    24/7 Mobile Tyre Fitting in <span className="text-secondary">Alderley Edge</span>
                  </h1>
      <p className="text-[18px] leading-[28px] text-gray-400">
                    Immediate roadside resolution, discreet private driveway service, and urgent school-run intervention. Operating seamlessly throughout London Road, Woodbrook Road, and along The Edge, Direct Tyre Solutions brings fully equipped mobile fitting bays right to your chassis within 25–35 minutes.
                  </p>
      </div>
      {/* HERO PHOTO BANNER */}
      <div className="relative w-full rounded-2xl overflow-hidden aspect-[16/9] shadow-2xl bg-primary/60">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Direct Tyre Solutions technician carefully fitting alloy wheel tyre on Cheshire residence driveway" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/30 to-transparent"></div>
      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
      <div>
      <span className="px-2.5 py-1 rounded bg-secondary text-primary text-[11px] leading-[14px] tracking-[0.06em] font-bold font-bold uppercase tracking-wider">High Performance Care</span>
      <p className="text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold mt-1">Direct to your home driveway or workplace bay</p>
      <p className="text-gray-400 text-[13px] leading-[18px]">Calibrated dynamic balancing and OE factory torque settings</p>
      </div>
      <a className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase hover:bg-secondary-hover transition-transform active:scale-95 shadow-lg" href="tel:07955266077">
      <PhoneCall className="h-[14px] w-[14px]" />
                      Call Dispatch
                    </a>
      </div>
      </div>
      {/* LOCAL CONTEXT HIGHLIGHTS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
      <div className="p-4 rounded-xl bg-primary/60 space-y-1.5">
      <div className="flex items-center gap-2 text-secondary">
      <Home className="h-[14px] w-[14px]" />
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Driveway Fitting</span>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">Zero disruption to your morning schedule. We change tyres on private driveways without blocking shared gates.</p>
      </div>
      <div className="p-4 rounded-xl bg-primary/60 space-y-1.5">
      <div className="flex items-center gap-2 text-accent">
      <BellRing className="h-[14px] w-[14px]" />
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">School-Run Urgency</span>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">Stuck near The Ryleys or Alderley Edge School for Girls? Rapid response gets you safely back on time.</p>
      </div>
      <div className="p-4 rounded-xl bg-primary/60 space-y-1.5">
      <div className="flex items-center gap-2 text-gray-300">
      <Car className="h-[14px] w-[14px]" />
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Prestige Saloons &amp; 4x4</span>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">Stocked with Porsche (N-rated), BMW (*), Audi (AO), and Land Rover (LR) precision fitments up to 23 inches.</p>
      </div>
      </div>
      </article>
      {/* b. SERVICES (2-COLUMN LIST WITH IMAGE THUMBNAILS) */}
      <article className="space-y-6" id="services">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider block">Precision Roadside &amp; Home Capabilities</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">Specialist Mobile Services in Alderley Edge</h2>
      </div>
      <span className="text-[13px] leading-[18px] text-gray-400">Fully mobile heavy-duty pneumatic tooling</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* SERVICE 1 */}
      <div className="p-5 rounded-2xl bg-primary-dark flex flex-col justify-between gap-4 hover:bg-primary/60 transition-colors group">
      <div className="flex gap-4 items-start">
      <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-primary">
      <Image src="/gallery-roadside-fitting.webp" alt="Emergency roadside mobile tyre fitting unit" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="space-y-1 min-w-0">
      <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">Fast Response</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Emergency Highway &amp; Roadside Replacement</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">High-visibility motorway response along the A34 bypass, Congleton Road, and rural lanes across Cheshire.</p>
      </div>
      </div>
      <div className="flex items-center justify-between pt-2">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-white font-semibold">24/7 Rapid Callout</span>
      <a className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary hover:underline flex items-center gap-1" href="tel:07955266077">
                        Deploy Van <ChevronRight className="h-[14px] w-[14px]" />
      </a>
      </div>
      </div>
      {/* SERVICE 2 */}
      <div className="p-5 rounded-2xl bg-primary-dark flex flex-col justify-between gap-4 hover:bg-primary/60 transition-colors group">
      <div className="flex gap-4 items-start">
      <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-primary">
      <Image src="/gallery-home-callout.webp" alt="Technician measuring tyre tread depth during mobile inspection" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="space-y-1 min-w-0">
      <span className="text-[11px] font-bold text-accent uppercase tracking-wider">Compliant Repair</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">BS AU 159 Puncture Repair</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">On-the-spot internal combination plug-patch repairs for minor tread damage, avoiding unnecessary complete tyre costs.</p>
      </div>
      </div>
      <div className="flex items-center justify-between pt-2">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-white font-semibold">Safety Assessed</span>
      <a className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary hover:underline flex items-center gap-1" href="tel:07955266077">
                        Book Inspection <ChevronRight className="h-[14px] w-[14px]" />
      </a>
      </div>
      </div>
      {/* SERVICE 3 */}
      <div className="p-5 rounded-2xl bg-primary-dark flex flex-col justify-between gap-4 hover:bg-primary/60 transition-colors group">
      <div className="flex gap-4 items-start">
      <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-primary">
      <Image src="/gallery-evening-callout.webp" alt="Technician removing wheel with precision pneumatic tools" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="space-y-1 min-w-0">
      <span className="text-[11px] font-bold text-gray-300 uppercase tracking-wider">Non-Destructive</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Specialist Locking Wheel Nut Removal</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Lost key or overtightened security lugs? Our non-destructive extraction kits remove stubborn bolts without wheel damage.</p>
      </div>
      </div>
      <div className="flex items-center justify-between pt-2">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-white font-semibold">Zero Rim Contact</span>
      <a className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary hover:underline flex items-center gap-1" href="tel:07955266077">
                        Unlock Wheel <ChevronRight className="h-[14px] w-[14px]" />
      </a>
      </div>
      </div>
      {/* SERVICE 4 */}
      <div className="p-5 rounded-2xl bg-primary-dark flex flex-col justify-between gap-4 hover:bg-primary/60 transition-colors group">
      <div className="flex gap-4 items-start">
      <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-primary">
      <Image src="/gallery-evening-home-visit.webp" alt="Equipped mobile tyre workshop van ready for residential deployment" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="space-y-1 min-w-0">
      <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">At-Home White Glove</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Driveway &amp; Prestige Vehicle Fitting</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Engineered specifically for low-profile performance tyres and heavy EV platforms (Tesla, Taycan, Range Rover Sport).</p>
      </div>
      </div>
      <div className="flex items-center justify-between pt-2">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-white font-semibold">Includes Balance &amp; Disposal</span>
      <a className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary hover:underline flex items-center gap-1" href="tel:07955266077">
                        Book Driveway <ChevronRight className="h-[14px] w-[14px]" />
      </a>
      </div>
      </div>
      </div>
      </article>
      {/* c. ROADS & TRANSIT CORRIDORS */}
      <article className="bg-primary-dark rounded-2xl p-6 sm:p-8 space-y-6" id="transit-corridors">
      <div className="space-y-2">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider block">Local Territory Coverage</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">Key Alderley Edge Roads &amp; Commuter Links</h2>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    Our technicians know Cheshire east corridors inside out. Whether you hit road debris heading into Manchester via the bypass or suffer a sidewall puncture along unlit country lanes, our dispatch pinpointing reaches your coordinates instantly.
                  </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="p-4 rounded-xl bg-primary/60 space-y-2">
      <div className="flex items-center gap-2">
      <span className="px-2 py-0.5 rounded bg-accent text-white font-heading text-xs font-bold">A34</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Congleton Road Bypass</span>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">Fast response along both dual-carriageway and single-lane stretches between Alderley Edge, Nether Alderley, and Wilmslow.</p>
      <div className="text-[12px] text-accent font-medium">Avg Dispatch: ~20 mins</div>
      </div>
      <div className="p-4 rounded-xl bg-primary/60 space-y-2">
      <div className="flex items-center gap-2">
      <span className="px-2 py-0.5 rounded bg-accent text-white font-heading text-xs font-bold">A535</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Chelford Road Link</span>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">Crucial agricultural and commuter artery connecting to Jodrell Bank, Holmes Chapel, and rural farm tracks with roadside safety support.</p>
      <div className="text-[12px] text-accent font-medium">Avg Dispatch: ~25 mins</div>
      </div>
      <div className="p-4 rounded-xl bg-primary/60 space-y-2">
      <div className="flex items-center gap-2">
      <span className="px-2 py-0.5 rounded bg-accent text-white font-heading text-xs font-bold">B5087</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Macclesfield Road</span>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">Climbing The Edge towards Macclesfield. Handling severe cambers, pothole impacts, and blind crests with high-candela strobe beacons.</p>
      <div className="text-[12px] text-accent font-medium">Avg Dispatch: ~25 mins</div>
      </div>
      </div>
      {/* SURROUNDING BOROUGHS & TOWNS LIST */}
      <div className="pt-2">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-wider block mb-2">Immediate Neighboring Coverage Hubs</span>
      <div className="flex flex-wrap gap-2">
      <span className="px-3 py-1.5 rounded-lg bg-primary/60 text-[13px] leading-[18px] font-medium text-white">Wilmslow (SK9)</span>
      <span className="px-3 py-1.5 rounded-lg bg-primary/60 text-[13px] leading-[18px] font-medium text-white">Prestbury (SK10)</span>
      <span className="px-3 py-1.5 rounded-lg bg-primary/60 text-[13px] leading-[18px] font-medium text-white">Knutsford (WA16)</span>
      <span className="px-3 py-1.5 rounded-lg bg-primary/60 text-[13px] leading-[18px] font-medium text-white">Macclesfield (SK10/SK11)</span>
      <span className="px-3 py-1.5 rounded-lg bg-primary/60 text-[13px] leading-[18px] font-medium text-white">Handforth (SK9)</span>
      <span className="px-3 py-1.5 rounded-lg bg-primary/60 text-[13px] leading-[18px] font-medium text-white">Mottram St Andrew</span>
      </div>
      </div>
      </article>
      {/* d. HOW IT WORKS: VERTICAL STEPPER WITH CONNECTING LINE */}
      <article className="bg-primary-dark rounded-2xl p-6 sm:p-8 space-y-8" id="how-it-works">
      <div className="space-y-1">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider block">Frictionless 5-Stage Dispatch</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">How Mobile Tyre Fitting Works</h2>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    From the moment you notice low pressure or a complete blowout, our streamlined protocol gets your vehicle safely back in service.
                  </p>
      </div>
      <div className="relative pl-6 sm:pl-8 space-y-8">
      {/* CONNECTING LINE */}
      <div className="absolute left-2.5 sm:left-3.5 top-3 bottom-3 w-0.5 bg-primary"></div>
      {/* STEP 01 */}
      <div className="relative flex items-start gap-4">
      <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-secondary text-primary font-heading text-xs flex items-center justify-center font-black ring-4 ring-primary-dark">
                      01
                    </div>
      <div className="space-y-1">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Instant Call or Registration Lookup</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                        Reach our dedicated controllers on <strong className="text-white font-semibold">07955 266 077</strong> or provide your reg online. We confirm tyre dimensions, load ratings, speed indices, and spare rim clearance.
                      </p>
      </div>
      </div>
      {/* STEP 02 */}
      <div className="relative flex items-start gap-4">
      <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-secondary font-heading text-xs flex items-center justify-center font-bold ring-4 ring-primary-dark">
                      02
                    </div>
      <div className="space-y-1">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Guaranteed Fixed Quote</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                        Clear, all-inclusive pricing provided upfront before technician release. Covers mobile attendance, tyre casing, new rubber valves, electronic balancing, and old tyre disposal. No covert add-ons.
                      </p>
      </div>
      </div>
      {/* STEP 03 */}
      <div className="relative flex items-start gap-4">
      <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-secondary font-heading text-xs flex items-center justify-center font-bold ring-4 ring-primary-dark">
                      03
                    </div>
      <div className="space-y-1">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Mobile Workshop Van Dispatched</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                        The nearest Cheshire mobile unit is routed directly to your home driveway, office car park, or roadside location with real-time ETA updates sent straight to your phone.
                      </p>
      </div>
      </div>
      {/* STEP 04 */}
      <div className="relative flex items-start gap-4">
      <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-secondary font-heading text-xs flex items-center justify-center font-bold ring-4 ring-primary-dark">
                      04
                    </div>
      <div className="space-y-1">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Precision Mounting &amp; Dynamic Balancing</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                        Work is carried out within our van&apos;s self-contained bay using synthetic mounting paste, calibrated wheel balancers, and pneumatic rim clamps. Wheel nuts are finished with manual calibrated torque wrenches.
                      </p>
      </div>
      </div>
      {/* STEP 05 */}
      <div className="relative flex items-start gap-4">
      <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-gray-300 font-heading text-xs flex items-center justify-center font-bold ring-4 ring-primary-dark">
                      05
                    </div>
      <div className="space-y-1">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Contactless Payment &amp; Instant VAT Invoice</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                        Pay securely roadside via card reader or contactless terminal once work is verified. Digital receipt and warranty certificate instantly emailed for personal or company records.
                      </p>
      </div>
      </div>
      </div>
      </article>
      {/* e. REAL LOCAL JOB HIGHLIGHT */}
      <article className="bg-primary-dark rounded-2xl overflow-hidden shadow-xl" id="case-study">
      <div className="p-6 sm:p-8 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
      <div className="flex items-center gap-2">
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-primary text-xs font-bold">✓</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider">Verified Job Log #AE-9482</span>
      </div>
      <span className="text-[13px] leading-[18px] text-gray-400 font-mono">Alderley Edge (SK9)</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div className="md:col-span-7 space-y-3">
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">
                        Recent Case: Macclesfield Road, Alderley Edge
                      </h2>
      <div className="p-4 rounded-xl bg-primary/60 space-y-2">
      <div className="text-[13px] leading-[18px] font-semibold text-white flex items-center gap-1.5">
      <Car className="h-4 w-4 text-secondary" />
                          Land Rover Defender 110 • Morning School Run Emergency
                        </div>
      <p className="text-[13px] leading-[18px] text-gray-400">
                          Driver suffered a severe sidewall pinch after striking granite curbing near The Edge before morning drop-off. Customer could not drive on rim without risking suspension and rim integrity.
                        </p>
      </div>
      <ul className="space-y-2 text-[13px] leading-[18px] text-gray-400">
      <li className="flex items-center gap-2">
      <CheckCircle2 className="h-[14px] w-[14px] text-accent" />
      <strong className="text-white">Response Time:</strong> Mobile technician on driveway in 26 mins from initial call.
                        </li>
      <li className="flex items-center gap-2">
      <CheckCircle2 className="h-[14px] w-[14px] text-accent" />
      <strong className="text-white">Tyre Specification:</strong> Fitted 255/60 R20 Pirelli Scorpion Verde All Season.
                        </li>
      <li className="flex items-center gap-2">
      <CheckCircle2 className="h-[14px] w-[14px] text-accent" />
      <strong className="text-white">Execution:</strong> High-pressure TPMS sensor reset, dynamic laser balance, torqued to OEM 140 Nm specification.
                        </li>
      </ul>
      </div>
      <div className="md:col-span-5">
      <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-primary/60">
      <Image src="/gallery-precision-care.webp" alt="Technician fitting Pirelli Scorpion tyre on Land Rover Defender in Alderley Edge driveway" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute bottom-2 left-2 bg-primary-dark/80 backdrop-blur px-2.5 py-1 rounded text-[11px] font-medium text-white">
                          Macclesfield Rd Driveway Bay
                        </div>
      </div>
      </div>
      </div>
      </div>
      </article>
      {/* f. FAQ ACCORDION */}
      <article className="bg-primary-dark rounded-2xl p-6 sm:p-8 space-y-6" id="faq">
      <div className="space-y-1">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider block">Customer Assurance</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">Frequently Asked Questions</h2>
      <p className="text-[15px] leading-[24px] text-gray-400">Clear details on driveway space, wheel protection, and emergency scheduling.</p>
      </div>
      <div className="space-y-3" id="faq-accordion">
      {/* FAQ 1 */}
      <details className="rounded-xl bg-primary/60 overflow-hidden group"><summary className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white hover:text-secondary transition-colors cursor-pointer list-none">
      <span>How much driveway space is required for mobile tyre fitting?</span>
      <ChevronDown className="faq-icon transition-transform duration-200 text-gray-400 shrink-0 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-5 pb-5 pt-1 text-[13px] leading-[18px] text-gray-400">
                      Our custom Mercedes Sprinter workshops carry compact, self-contained hydraulic jacking rigs. All we need is standard vehicle clearance plus approximately 1 metre of space alongside the wheel being serviced. If your driveway has an incline or tight gates, our technicians carry specialized chocks and safety boards to safely mount the chassis without causing ground marks.
                    </div></details>
      {/* FAQ 2 */}
      <details className="rounded-xl bg-primary/60 overflow-hidden group"><summary className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white hover:text-secondary transition-colors cursor-pointer list-none">
      <span>How do you protect expensive diamond-cut and painted alloy wheels?</span>
      <ChevronDown className="faq-icon transition-transform duration-200 text-gray-400 shrink-0 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-5 pb-5 pt-1 text-[13px] leading-[18px] text-gray-400">
                      Every mobile van operates non-contact bead breaker arms, polymer clamping jaws, and high-density composite lever protectors. We never use bare metal pry bars on wheel lips. Lug nuts are handled with non-marring nylon sleeved impact sockets, followed by hand-tightening to factory specifications using certified calibrated torque wrenches.
                    </div></details>
      {/* FAQ 3 */}
      <details className="rounded-xl bg-primary/60 overflow-hidden group"><summary className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white hover:text-secondary transition-colors cursor-pointer list-none">
      <span>Can you remove damaged or overtightened locking wheel nuts?</span>
      <ChevronDown className="faq-icon transition-transform duration-200 text-gray-400 shrink-0 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-5 pb-5 pt-1 text-[13px] leading-[18px] text-gray-400">
                      Yes. If your original key adapter has rounded off, sheared, or gone missing, our emergency vans carry professional reverse-thread non-impact extraction systems. We regularly remove security nuts from Audi, BMW, Land Rover, and Jaguar vehicles without drilling into the hub or damaging the wheel finish.
                    </div></details>
      {/* FAQ 4 */}
      <details className="rounded-xl bg-primary/60 overflow-hidden group"><summary className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white hover:text-secondary transition-colors cursor-pointer list-none">
      <span>Are mobile vans available on weekends, bank holidays, and late evenings?</span>
      <ChevronDown className="faq-icon transition-transform duration-200 text-gray-400 shrink-0 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-5 pb-5 pt-1 text-[13px] leading-[18px] text-gray-400">
                      Yes. Direct Tyre Solutions operates true 24-hour round-the-clock roadside and residential coverage 365 days a year across Alderley Edge, Wilmslow, and Macclesfield. Whether you require tyre assistance at 11:00 PM on Sunday or before 6:30 AM on a Monday commuter rush, dispatch lines remain answered live.
                    </div></details>
      </div>
      </article>
      </main>
      </div>
      </section>
      {/* RELATED LOCATIONS STRIP (BELOW BOTH COLUMNS) */}
      <section className="w-full bg-primary-dark py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-4">
      <div className="flex items-center justify-between">
      <h2 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white uppercase">
                Direct Tyre Solutions Cheshire &amp; Regional Hubs
              </h2>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary hidden sm:inline">24/7 Rapid Mobile Network</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
      <div className="p-3 rounded-xl bg-primary/60 hover:bg-primary/80 transition-colors text-center">
      <span className="block font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Wilmslow</span>
      <span className="text-xs text-gray-400">SK9 Coverage</span>
      </div>
      <div className="p-3 rounded-xl bg-primary/60 hover:bg-primary/80 transition-colors text-center">
      <span className="block font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Macclesfield</span>
      <span className="text-xs text-gray-400">SK10 / SK11 Hub</span>
      </div>
      <div className="p-3 rounded-xl bg-primary/60 hover:bg-primary/80 transition-colors text-center">
      <span className="block font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Handforth</span>
      <span className="text-xs text-gray-400">Bypass Corridor</span>
      </div>
      <div className="p-3 rounded-xl bg-primary/60 hover:bg-primary/80 transition-colors text-center">
      <span className="block font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Knutsford</span>
      <span className="text-xs text-gray-400">WA16 Sector</span>
      </div>
      <div className="p-3 rounded-xl bg-primary/60 hover:bg-primary/80 transition-colors text-center">
      <span className="block font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Prestbury</span>
      <span className="text-xs text-gray-400">Cheshire Golden Tri</span>
      </div>
      <div className="p-3 rounded-xl bg-primary/60 hover:bg-primary/80 transition-colors text-center">
      <span className="block font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Mobile Tyre UK</span>
      <span className="text-xs text-secondary">National Fleet</span>
      </div>
      </div>
      </div>
      </section>
      {/* FINAL CTA: SOLID GOLD FULL-WIDTH BANNER */}
      <section className="w-full bg-secondary text-primary py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
      <div className="space-y-2">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold font-bold uppercase tracking-wider">
      <ShieldCheck className="h-3 w-3" />
                24/7 Immediate Availability
              </div>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold sm:text-[40px] sm:leading-[48px] sm:tracking-[-0.02em] sm:font-extrabold text-primary font-black">
                Stranded in Alderley Edge or Prestbury?
              </h2>
      <p className="text-[15px] leading-[24px] text-primary/85 max-w-xl">
                Call now for guaranteed 25–35 minute mobile dispatch to your driveway, workplace, or the roadside. Our rapid intervention vans carry tyres in stock.
              </p>
      </div>
      <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
      <a className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary-dark text-secondary font-heading text-[20px] leading-[26px] font-bold tracking-wide shadow-2xl hover:bg-primary-dark transition-transform active:scale-95 flex items-center justify-center gap-2" href="tel:07955266077">
      <PhoneCall className="h-5 w-5" />
                Call 07955 266 077
              </a>
      </div>
      </div>
      </section>
      </div>
    </main>
  );
}
