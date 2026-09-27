import Image from "next/image";
import { ArrowRight, ChevronRight, HelpCircle, MapPin, Navigation, PhoneCall, ShieldCheck, Timer, Wrench } from "lucide-react";

export default function WhitefieldPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      <div className="w-full max-w-7xl mx-auto px-margin-mobile md:px-margin py-space-xl">
      {/* Breadcrumb / Urgency Header Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-lg bg-primary-dark px-space-md py-space-sm rounded-xl">
      <div className="flex items-center space-x-2 text-gray-400 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <span>Greater Manchester</span>
      <ChevronRight className="h-[14px] w-[14px]" />
      <span>Bury Borough</span>
      <ChevronRight className="h-[14px] w-[14px]" />
      <span className="text-secondary font-bold">Whitefield M45</span>
      </div>
      <div className="flex items-center space-x-2">
      <span className="relative flex h-2.5 w-2.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
      </span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white font-bold">2 Vans Active near M60 J17</span>
      </div>
      </div>
      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
      {/* STICKY SIDEBAR (lg:col-span-4 / lg:w-80) */}
      <aside className="lg:col-span-4 w-full lg:sticky lg:top-6 space-y-space-md">
      {/* Van Spotlight Card */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden shadow-xl">
      <div className="relative w-full h-48 bg-primary-dark overflow-hidden">
      <Image src="/hero-section-images-936x527.webp" alt="Direct Tyre Solutions mobile tyre fitting emergency response van" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
      <span className="absolute top-3 left-3 bg-accent text-white px-space-sm py-0.5 rounded-full text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider font-bold">
                    Rapid Response Van
                  </span>
      </div>
      <div className="p-space-md space-y-space-md">
      <div>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase text-gray-400 tracking-wider">Emergency Line</p>
      <a className="block font-heading text-[30px] leading-[38px] font-bold text-white hover:text-secondary transition-colors tracking-tight" href="tel:08009992470">
                      0800 999 2470
                    </a>
      <p className="text-[13px] leading-[18px] text-gray-400 flex items-center gap-1 mt-1">
      <ShieldCheck className="h-4 w-4 text-gray-400" />
                      24/7 Whitefield &amp; M60 Roadside Units
                    </p>
      </div>
      {/* Primary Phone CTA */}
      <a className="w-full flex items-center justify-center gap-2 bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-bold py-3.5 px-6 rounded-full hover:bg-secondary-hover active:scale-95 transition-all shadow-md" href="tel:08009992470">
      <PhoneCall className="h-5 w-5" />
                    Call Technician 24/7
                  </a>
      {/* Quick Operational Stats */}
      <div className="grid grid-cols-3 gap-2 pt-2">
      <div className="bg-primary/80 p-2.5 rounded-xl text-center">
      <Timer className="text-secondary h-5 w-5" />
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mt-1">25-35m</p>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Arrival Time</p>
      </div>
      <div className="bg-primary/80 p-2.5 rounded-xl text-center">
      <Wrench className="text-gray-400 h-5 w-5" />
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mt-1">100%</p>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Fitted Mobile</p>
      </div>
      <div className="bg-primary/80 p-2.5 rounded-xl text-center">
      <ShieldCheck className="text-secondary h-5 w-5" />
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mt-1">All</p>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Major Brands</p>
      </div>
      </div>
      {/* Section Jump Anchor Navigation */}
      <div className="bg-primary-dark p-space-md rounded-xl space-y-2">
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-gray-400 mb-2">On This Page</p>
      <a className="flex items-center justify-between text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white hover:text-secondary transition-colors py-1" href="#services">
      <span>Fitting Services</span>
      <ArrowRight className="h-4 w-4" />
      </a>
      <a className="flex items-center justify-between text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white hover:text-secondary transition-colors py-1" href="#how-it-works">
      <span>Dispatch Workflow</span>
      <ArrowRight className="h-4 w-4" />
      </a>
      <a className="flex items-center justify-between text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white hover:text-secondary transition-colors py-1" href="#local-incident">
      <span>Recent Whitefield Callout</span>
      <ArrowRight className="h-4 w-4" />
      </a>
      <a className="flex items-center justify-between text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white hover:text-secondary transition-colors py-1" href="#faq">
      <span>Frequently Asked Questions</span>
      <ArrowRight className="h-4 w-4" />
      </a>
      </div>
      </div>
      </div>
      {/* Emergency Tip Module */}
      <div className="bg-primary-dark p-space-md rounded-2xl">
      <div className="flex items-start gap-3">
      <ShieldCheck className="text-secondary h-5 w-5" />
      <div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Stuck on the M60?</h4>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">
                      If stranded near J17 or the Simister Island interchange, pull behind the barrier, keep hazard lights on, and quote marker numbers when calling.
                    </p>
      </div>
      </div>
      </div>
      </aside>
      {/* MAIN CONTENT (lg:col-span-8) */}
      <div className="lg:col-span-8 space-y-space-xl">
      {/* Hero Intro Section */}
      <div className="relative bg-primary/60 rounded-2xl overflow-hidden p-space-lg md:p-space-xl">
      <div className="space-y-space-md">
      <div className="inline-flex items-center gap-2 bg-accent text-white px-3 py-1 rounded-full text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <Wrench className="h-4 w-4" />
                    Home • Workplace • Roadside Mobile Units
                  </div>
      <h1 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black max-w-2xl">
                    24/7 Mobile Tyre Fitting in Whitefield
                  </h1>
      <p className="text-[18px] leading-[28px] text-gray-300">
                    Fast, dependable mobile tyre replacement across Whitefield, Unsworth, and the busy commuter corridors of Bury New Road (A56) and M60 Junctions 17 &amp; 18. Equipped with compressed air, wheel balancers, and full diagnostic sets, our mobile workshops bring the garage directly to your driveway or roadside.
                  </p>
      <div className="relative w-full h-72 md:h-80 rounded-xl overflow-hidden mt-space-md shadow-lg">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Automotive mobile technician fitting brand new tyre on driveway in Whitefield" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-transparent">
      <p className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white font-semibold flex items-center gap-1.5">
      <MapPin className="text-secondary h-4 w-4" />
                        On-site mobile fitting — Driveway, car parks, &amp; commuter roadside callouts.
                      </p>
      </div>
      </div>
      </div>
      </div>
      {/* Local Context & Arterial Roads */}
      <div className="bg-primary-dark p-space-lg rounded-2xl space-y-space-md">
      <div className="flex items-center gap-3">
      <Navigation className="text-gray-400 h-[30px] w-[30px]" />
      <div>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">Reliable Assistance Across All Whitefield Districts</h2>
      <p className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-gray-400">From residential streets to major Greater Manchester bypasses</p>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md text-white text-[15px] leading-[24px] pt-space-xs">
      <p className="leading-relaxed">
                    Whether you discover a flat tyre on your driveway in <span className="text-white font-semibold">Unsworth</span>, sustain bead damage over a pothole on <span className="text-white font-semibold">Bury Old Road</span>, or suffer an emergency high-speed puncture while navigating the <span className="text-white font-semibold">M60 Junction 17</span> roundabout, waiting hours for a tow truck is unnecessary.
                  </p>
      <p className="leading-relaxed">
                    Our mobile fitting vans carry commercial equipment capable of handling run-flat tyres, low-profile performance alloys, commercial vans, and family SUVs on location. We regularly patrol <span className="text-white font-semibold">A56 Manchester Road</span> and the <span className="text-white font-semibold">M66 connector</span>, getting Whitefield drivers back on the road in under an hour.
                  </p>
      </div>
      {/* Highlight Road Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-sm">
      <div className="bg-primary/60 p-space-sm rounded-xl text-center">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase block">Orbital</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">M60 J17-18</span>
      </div>
      <div className="bg-primary/60 p-space-sm rounded-xl text-center">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase block">Motorway</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">M66 Pilsworth</span>
      </div>
      <div className="bg-primary/60 p-space-sm rounded-xl text-center">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase block">Arterial</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">A56 Bury New Rd</span>
      </div>
      <div className="bg-primary/60 p-space-sm rounded-xl text-center">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase block">Commuter</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">Bury Old Road</span>
      </div>
      </div>
      </div>
      {/* Services Grid */}
      <div className="space-y-space-md" id="services">
      <div>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">Emergency &amp; Mobile Tyre Services</h2>
      <p className="text-[15px] leading-[24px] text-gray-400">Equipped with heavy-duty bead breakers, precision balancers, and fresh tyres.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
      {/* Service 1 */}
      <div className="bg-primary/60 p-space-md rounded-2xl flex flex-col justify-between space-y-space-sm hover:bg-primary/80 transition-colors">
      <div className="flex items-start gap-space-sm">
      <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-primary-dark">
      <Image src="/gallery-roadside-fitting.webp" alt="Close-up of high quality tyre tread and tyre depth gauge" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Emergency Roadside Fitting</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">
                          Immediate dispatch for highway, dual carriageway, and side street punctures anywhere in Whitefield.
                        </p>
      </div>
      </div>
      <div className="pt-space-xs flex items-center justify-between text-white">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold bg-primary-dark px-2.5 py-1 rounded-full text-gray-400">24/7 Available</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Arrival ~30 mins</span>
      </div>
      </div>
      {/* Service 2 */}
      <div className="bg-primary/60 p-space-md rounded-2xl flex flex-col justify-between space-y-space-sm hover:bg-primary/80 transition-colors">
      <div className="flex items-start gap-space-sm">
      <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-primary-dark">
      <Image src="/gallery-home-callout.webp" alt="Roadside breakdown van attending roadside emergency at night" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Motorway &amp; A-Road Rescue</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">
                          High-visibility response units certified for hard shoulder tyre repairs on M60 and M66 junctions.
                        </p>
      </div>
      </div>
      <div className="pt-space-xs flex items-center justify-between text-white">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold bg-primary-dark px-2.5 py-1 rounded-full text-secondary">Priority Dispatch</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Highway Spec</span>
      </div>
      </div>
      {/* Service 3 */}
      <div className="bg-primary/60 p-space-md rounded-2xl flex flex-col justify-between space-y-space-sm hover:bg-primary/80 transition-colors">
      <div className="flex items-start gap-space-sm">
      <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-primary-dark">
      <Image src="/gallery-evening-callout.webp" alt="Technician fitting tyre on car in home driveway" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Driveway &amp; Home Fitting</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">
                          Wake up to a flat? We install and balance new premium or budget tyres outside your home while you work.
                        </p>
      </div>
      </div>
      <div className="pt-space-xs flex items-center justify-between text-white">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold bg-primary-dark px-2.5 py-1 rounded-full text-gray-400">Zero Recovery Cost</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Book or Emergency</span>
      </div>
      </div>
      {/* Service 4 */}
      <div className="bg-primary/60 p-space-md rounded-2xl flex flex-col justify-between space-y-space-sm hover:bg-primary/80 transition-colors">
      <div className="flex items-start gap-space-sm">
      <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-primary-dark">
      <Image src="/gallery-evening-home-visit.webp" alt="Fully loaded mobile tyre van workshop" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Puncture Repair &amp; Valves</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">
                          BS AU 159 certified puncture repairs, bead resealing, and TPMS sensor servicing on all standard rims.
                        </p>
      </div>
      </div>
      <div className="pt-space-xs flex items-center justify-between text-white">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold bg-primary-dark px-2.5 py-1 rounded-full text-gray-400">Safe British Standard</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">On-site test</span>
      </div>
      </div>
      </div>
      </div>
      {/* How It Works (5 Clean Sequential Steps) */}
      <div className="bg-primary-dark p-space-lg rounded-2xl space-y-space-lg" id="how-it-works">
      <div>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">How Mobile Fitting Works</h2>
      <p className="text-[15px] leading-[24px] text-gray-400">Simple 5-step rapid dispatch to get you rolling safely.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-space-sm">
      <div className="bg-primary/60 p-space-sm rounded-xl relative space-y-2">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary font-black">01</span>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Call or Reg</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Dial our dispatch team or provide your vehicle registration and postcode.</p>
      </div>
      <div className="bg-primary/60 p-space-sm rounded-xl relative space-y-2">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-gray-400 font-black">02</span>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Tyre Select</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Choose premium, mid-range, or budget stock matched to your tyre dimensions.</p>
      </div>
      <div className="bg-primary/60 p-space-sm rounded-xl relative space-y-2">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary font-black">03</span>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Van En Route</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Technician dispatches immediately from Whitefield or adjacent Bury depot.</p>
      </div>
      <div className="bg-primary/60 p-space-sm rounded-xl relative space-y-2">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-gray-400 font-black">04</span>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Mobile Fit</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Tyre unmounted, replaced, computer spin-balanced, and torqued on site.</p>
      </div>
      <div className="bg-primary/60 p-space-sm rounded-xl relative space-y-2">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary font-black">05</span>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Card &amp; Drive</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Contactless roadside payment terminal; zero wait, drive away protected.</p>
      </div>
      </div>
      </div>
      {/* Real Local Job Proof Card */}
      <div className="bg-primary/60 p-space-lg rounded-2xl space-y-space-md" id="local-incident">
      <div className="flex flex-wrap items-center justify-between gap-space-sm">
      <span className="bg-secondary text-primary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase font-bold px-3 py-1 rounded-full">
                    Recent Job Report • Whitefield
                  </span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-gray-400">Verified Callout #WF-8842</span>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-space-md bg-primary-dark p-space-md rounded-xl">
      <div className="relative w-full md:w-44 h-36 rounded-lg overflow-hidden shrink-0 bg-primary-dark">
      <Image src="/gallery-precision-care.webp" alt="Audi A4 roadside wheel replacement on Bury New Road" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="space-y-2 w-full">
      <div className="flex flex-wrap items-center justify-between gap-2">
      <h4 className="font-heading text-[20px] leading-[26px] font-bold text-white">Audi A4 Avant (2.0 TDI)</h4>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary font-semibold">Arrived in 27 Mins</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[13px] leading-[18px] text-gray-400 pt-1">
      <div><span className="text-gray-400 block">Tyre Spec:</span> 245/40 R18 97Y</div>
      <div><span className="text-gray-400 block">Location:</span> Bury New Rd, Metrolink</div>
      <div><span className="text-gray-400 block">Incident:</span> Deep Pothole Pinch</div>
      <div><span className="text-gray-400 block">Action:</span> Michelin Pilot Sport 5</div>
      </div>
      <p className="text-[13px] leading-[18px] text-white pt-2">
                      Driver struck curb crater during evening commute near Whitefield Metrolink station. Technician arrived within 27 minutes, checked wheel alignment tolerance, fitted a new Michelin 245/40 R18, adjusted pressures on all corners, and driver continued journey without car recovery fees.
                    </p>
      </div>
      </div>
      </div>
      {/* FAQ Section */}
      <div className="space-y-space-md" id="faq">
      <div>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">Frequently Asked Questions</h2>
      <p className="text-[15px] leading-[24px] text-gray-400">Clear answers regarding mobile roadside and residential tyre fitting in Whitefield.</p>
      </div>
      <div className="space-y-space-sm">
      <div className="bg-primary/60 p-space-md rounded-xl space-y-2">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-center gap-2">
      <HelpCircle className="text-secondary h-5 w-5" />
                      How quickly can a van arrive at my location in Whitefield?
                    </h3>
      <p className="text-[15px] leading-[24px] text-gray-400 pl-7">
                      Our average emergency response time for Whitefield and adjacent M60 junctions is 25 to 35 minutes, depending on traffic along the A56 and Simister Island corridor.
                    </p>
      </div>
      <div className="bg-primary/60 p-space-md rounded-xl space-y-2">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-center gap-2">
      <HelpCircle className="text-secondary h-5 w-5" />
                      Do you carry tyres for electric vehicles and heavy SUVs?
                    </h3>
      <p className="text-[15px] leading-[24px] text-gray-400 pl-7">
                      Yes. Our vans stock EV-specific tyres (sound-absorbing foam, high load index ratings) for Tesla, Polestar, BMW i-series, plus all popular crossovers and light commercial vans.
                    </p>
      </div>
      <div className="bg-primary/60 p-space-md rounded-xl space-y-2">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-center gap-2">
      <HelpCircle className="text-secondary h-5 w-5" />
                      Can you fit new tyres directly on my driveway while I am busy?
                    </h3>
      <p className="text-[15px] leading-[24px] text-gray-400 pl-7">
                      Absolutely. We just need access to your locking wheel nut key and space around the car. You don’t need to stand outside in the rain; we handle everything and notify you upon final torque check.
                    </p>
      </div>
      <div className="bg-primary/60 p-space-md rounded-xl space-y-2">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-center gap-2">
      <HelpCircle className="text-secondary h-5 w-5" />
                      What if I don&apos;t know my exact tyre measurements?
                    </h3>
      <p className="text-[15px] leading-[24px] text-gray-400 pl-7">
                      Give us a quick call with your vehicle registration plate. Our system verifies OEM factory dimensions and profile ratings over the phone in seconds.
                    </p>
      </div>
      <div className="bg-primary/60 p-space-md rounded-xl space-y-2">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-center gap-2">
      <HelpCircle className="text-secondary h-5 w-5" />
                      Is wheel balancing included with mobile fitting?
                    </h3>
      <p className="text-[15px] leading-[24px] text-gray-400 pl-7">
                      Yes. Every callout includes electronic precision spin balancing, fresh rubber standard valves, environmentally certified tyre casing disposal, and pressure checks.
                    </p>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Related Locations Strip */}
      <div className="mt-space-xl pt-space-lg bg-primary-dark p-space-lg rounded-2xl space-y-space-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Nearby Coverage Around Whitefield</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Direct Tyre Solutions rapid mobile coverage zones within 10-15 miles</p>
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary font-semibold uppercase">Daily Motorway Patrol</span>
      </div>
      <div className="flex flex-wrap gap-2 pt-2">
      <a className="bg-primary/60 px-4 py-2 rounded-full text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white hover:text-secondary hover:bg-primary/80 transition-colors" href="#bury">
                Bury
              </a>
      <a className="bg-primary/60 px-4 py-2 rounded-full text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white hover:text-secondary hover:bg-primary/80 transition-colors" href="#prestwich">
                Prestwich
              </a>
      <a className="bg-primary/60 px-4 py-2 rounded-full text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white hover:text-secondary hover:bg-primary/80 transition-colors" href="#radcliffe">
                Radcliffe
              </a>
      <a className="bg-primary/60 px-4 py-2 rounded-full text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white hover:text-secondary hover:bg-primary/80 transition-colors" href="#unsworth">
                Unsworth
              </a>
      <a className="bg-primary/60 px-4 py-2 rounded-full text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white hover:text-secondary hover:bg-primary/80 transition-colors" href="#pilsworth">
                Pilsworth
              </a>
      <a className="bg-primary/60 px-4 py-2 rounded-full text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white hover:text-secondary hover:bg-primary/80 transition-colors" href="#m60-services">
                M60 J17-J18 Ring Road
              </a>
      <a className="bg-accent px-4 py-2 rounded-full text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white font-bold hover:bg-primary transition-colors" href="#mobile-services">
                All Mobile Tyre Services →
              </a>
      </div>
      </div>
      {/* Final High-Impact CTA Strip */}
      <div className="mt-space-lg bg-primary/60 rounded-2xl p-space-lg md:p-space-xl text-center space-y-space-md shadow-2xl relative overflow-hidden">
      <div className="max-w-2xl mx-auto space-y-space-xs">
      <span className="inline-block bg-secondary text-primary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase font-black px-3 py-1 rounded-full mb-1">
                Instant Roadside Assistance
              </span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black">
                Stranded with a Puncture in Whitefield?
              </h2>
      <p className="text-[18px] leading-[28px] text-gray-300">
                Our rapid response mobile fitting technicians are standing by across M45, Unsworth, and Bury Old Road. Call now for priority arrival.
              </p>
      </div>
      <div className="pt-space-xs flex flex-col sm:flex-row items-center justify-center gap-space-md">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-secondary text-primary font-heading text-[20px] leading-[26px] font-bold font-bold px-8 py-4 rounded-full hover:bg-secondary-hover active:scale-95 transition-all shadow-xl" href="tel:08009992470">
      <PhoneCall className="h-6 w-6" />
                Call Whitefield Dispatch: 0800 999 2470
              </a>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400 pt-1">
              24 Hours • 7 Days a Week • Bank Holidays • Zero Membership Required
            </p>
      </div>
      </div>
    </main>
  );
}
