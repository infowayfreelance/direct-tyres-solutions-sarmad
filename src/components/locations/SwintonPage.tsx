import Image from "next/image";
import { AlertTriangle, ArrowRight, Building2, Car, CheckCircle2, ChevronDown, Clock, CornerUpRight, CreditCard, Gauge, KeyRound, Navigation, PhoneCall, Route, ShieldCheck, Signpost, Wrench } from "lucide-react";

export default function SwintonPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* SECTION 1: HERO (EDITORIAL SPLIT) */}
      <section className="w-full bg-primary-dark text-white py-12 lg:py-20 px-4 sm:px-8 xl:px-12 flex justify-center">
      <div className="max-w-[1280px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      {/* Left Column: Copy & Core CTA */}
      <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 w-fit backdrop-blur-md">
      <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white tracking-wider uppercase">Rapid Mobile Response • Greater Manchester M27</span>
      </div>
      <h1 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold sm:text-[56px] sm:leading-[64px] sm:tracking-[-0.02em] sm:font-black font-black leading-[1.05] text-white">
                24/7 Mobile Tyre Fitting in <span className="text-secondary">Swinton</span>
      </h1>
      {/* Thin gold decorative rule */}
      <div className="w-24 h-[2px] bg-secondary"></div>
      <p className="text-[18px] leading-[28px] text-gray-300 max-w-xl">
                Direct driveway, kerbside, and roadside tyre replacement across Swinton, Pendlebury, the A580 East Lancs corridor, and A6. Zero garage queues.
              </p>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
      <a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary hover:bg-secondary-hover text-primary font-heading text-[20px] leading-[26px] font-bold font-extrabold tracking-wide shadow-lg shadow-[#ffd700]/10 transition-all transform active:scale-95 text-center" href="tel:08009992470">
      <PhoneCall className="h-6 w-6" fill="currentColor" strokeWidth={0} />
      <span>Call 0800 999 2470</span>
      </a>
      <div className="flex items-center gap-3 px-4 py-3 rounded-full bg-white/5 backdrop-blur-md">
      <Clock className="text-secondary h-5 w-5" />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-gray-300">Avg. 30–55 Min Arrival</span>
      </div>
      </div>
      <div className="pt-4 grid grid-cols-3 gap-4 max-w-lg">
      <div className="flex flex-col">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary font-bold">24 Hours</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Day &amp; Night Dispatch</span>
      </div>
      <div className="flex flex-col">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary font-bold">BS AU 159</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Puncture Certified</span>
      </div>
      <div className="flex flex-col">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary font-bold">All Brands</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Budget to Premium</span>
      </div>
      </div>
      </div>
      {/* Right Column: Hero Visual Image */}
      <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[460px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl bg-primary">
      <Image src="/hero-section-images-936x527.webp" alt="Mobile tyre technician fitting wheel in Swinton" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-80"></div>
      <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-primary-dark/85 backdrop-blur-md">
      <div className="flex items-center gap-3">
      <Wrench className="text-secondary h-[30px] w-[30px]" />
      <div>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">On-Driveway Tyre Fitting</p>
      <p className="text-[13px] leading-[18px] text-gray-300">Fully equipped mobile workshop active in Swinton right now.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 2: LOCAL COMMUTING INTRO */}
      <section className="w-full bg-primary text-white py-14 lg:py-18 px-4 sm:px-8 xl:px-12 flex justify-center">
      <div className="max-w-[1280px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      <div className="lg:col-span-5 flex flex-col space-y-4">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary uppercase tracking-wider">Hyper-Local Swinton Deployment</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black">
                Commuting Between Salford &amp; Manchester with Tyre Troubles?
              </h2>
      <p className="text-[13px] leading-[18px] text-gray-400">
                Fast response vans strategically based to reach Swinton Town Centre, Victoria Park, and residential quarters without delay.
              </p>
      </div>
      <div className="lg:col-span-7 space-y-5 text-gray-300 text-[15px] leading-[24px]">
      <p className="p-6 rounded-2xl bg-primary-dark/60 backdrop-blur-md">
                Sitting at the crossroads of Salford and central Manchester transit lines, Swinton endures massive daily commuter volume. From the stop-start congestion along <span className="text-white font-semibold">Chorley Road (A6)</span> to rapid traffic cruising down the <span className="text-white font-semibold">A580 East Lancashire Road</span>, unexpected debris, potholes, and instant deflations frequently ground vehicles during critical morning and evening commutes.
              </p>
      <p className="p-6 rounded-2xl bg-primary-dark/60 backdrop-blur-md">
                Whether you wake up to a flat tyre on quiet residential cul-de-sacs near <span className="text-white font-semibold">Swinton Park Road</span>, get stuck kerbside heading towards <span className="text-white font-semibold">Pendlebury</span>, or notice low pressure at your office car park, our fully self-sufficient mobile vans arrive direct to your exact GPS coordinates. You skip recovery tow trucks, avoid long waits at traditional Salford garages, and keep your schedule intact.
              </p>
      </div>
      </div>
      </section>
      {/* SECTION 3: SERVICES (VERTICAL ICON-LIST WITH THUMBNAILS) */}
      <section className="w-full bg-primary-dark text-white py-16 lg:py-24 px-4 sm:px-8 xl:px-12 flex justify-center">
      <div className="max-w-[1280px] w-full flex flex-col space-y-12">
      <div className="flex flex-col max-w-2xl space-y-3">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 w-fit">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-accent uppercase font-bold tracking-wider">Expert Capabilities</span>
      </div>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold font-black text-white">
                Our Mobile Tyre Services in Swinton
              </h2>
      <p className="text-[15px] leading-[24px] text-gray-400">
                Turnaround-focused tyre assistance engineered to handle roadside punctures, fleet repairs, and domestic emergencies 24 hours a day.
              </p>
      </div>
      {/* Services Stack */}
      <div className="flex flex-col space-y-4">
      {/* Row 1: Emergency Roadside */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-5 sm:p-6 rounded-2xl bg-primary/70 backdrop-blur-md transition-all hover:bg-primary">
      <div className="relative w-full md:w-44 h-32 md:h-28 rounded-xl overflow-hidden shrink-0 bg-primary-dark">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Emergency roadside tyre fitting van" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent shrink-0 text-white shadow-md">
      <AlertTriangle className="h-6 w-6" />
      </div>
      <div className="flex-1 flex flex-col justify-center">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold font-bold text-white mb-1">
                    Emergency Roadside Replacement
                  </h3>
      <p className="text-[15px] leading-[24px] text-gray-300">
                    Immediate dispatch to dangerous live shoulders, laybys, and slip roads across the M60 J13/14 and A580. Equipped with high-visibility vehicle safety equipment, LED beacons, and onboard air compressors to safely replace shredded tyres on the spot.
                  </p>
      </div>
      <div className="shrink-0 self-end md:self-center">
      <a className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold flex items-center gap-2 transition-all" href="tel:08009992470">
      <span>Book Priority</span>
      <ArrowRight className="h-[14px] w-[14px]" />
      </a>
      </div>
      </div>
      {/* Row 2: BS AU 159 Puncture Repair */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-5 sm:p-6 rounded-2xl bg-primary/70 backdrop-blur-md transition-all hover:bg-primary">
      <div className="relative w-full md:w-44 h-32 md:h-28 rounded-xl overflow-hidden shrink-0 bg-primary-dark">
      <Image src="/gallery-roadside-fitting.webp" alt="Puncture inspection and tread depth measurement" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent shrink-0 text-white shadow-md">
      <ShieldCheck className="h-6 w-6" />
      </div>
      <div className="flex-1 flex flex-col justify-center">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold font-bold text-white mb-1">
                    BS AU 159 Certified Puncture Repair
                  </h3>
      <p className="text-[15px] leading-[24px] text-gray-300">
                    Strict British Standard safety assessments on tread damage. If safe to repair (central 70% of tread zone, no internal sidewall compromise), we carry out combi-plug patch vulcanisation right on your driveway, saving you the expense of a new casing.
                  </p>
      </div>
      <div className="shrink-0 self-end md:self-center">
      <a className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold flex items-center gap-2 transition-all" href="tel:08009992470">
      <span>Check Repair</span>
      <ArrowRight className="h-[14px] w-[14px]" />
      </a>
      </div>
      </div>
      {/* Row 3: Locking Wheel Nut Removal */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-5 sm:p-6 rounded-2xl bg-primary/70 backdrop-blur-md transition-all hover:bg-primary">
      <div className="relative w-full md:w-44 h-32 md:h-28 rounded-xl overflow-hidden shrink-0 bg-primary-dark">
      <Image src="/gallery-home-callout.webp" alt="Locking wheel nut removal tooling on car" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent shrink-0 text-white shadow-md">
      <KeyRound className="h-6 w-6" />
      </div>
      <div className="flex-1 flex flex-col justify-center">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold font-bold text-white mb-1">
                    Locking Wheel Nut Removal
                  </h3>
      <p className="text-[15px] leading-[24px] text-gray-300">
                    Lost your security key or dealing with stripped, overtightened wheel bolts? Our technicians use specialist non-destructive reverse-thread extractors and inverse tooling to cleanly release seized bolts without damaging delicate alloy surfaces.
                  </p>
      </div>
      <div className="shrink-0 self-end md:self-center">
      <a className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold flex items-center gap-2 transition-all" href="tel:08009992470">
      <span>Extract Nut</span>
      <ArrowRight className="h-[14px] w-[14px]" />
      </a>
      </div>
      </div>
      {/* Row 4: Residential Driveway & Workplace Fitting */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-5 sm:p-6 rounded-2xl bg-primary/70 backdrop-blur-md transition-all hover:bg-primary">
      <div className="relative w-full md:w-44 h-32 md:h-28 rounded-xl overflow-hidden shrink-0 bg-primary-dark">
      <Image src="/gallery-evening-callout.webp" alt="Mobile fitting van parked outside home in residential area" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent shrink-0 text-white shadow-md">
      <Wrench className="h-6 w-6" />
      </div>
      <div className="flex-1 flex flex-col justify-center">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold font-bold text-white mb-1">
                    Residential Driveway &amp; Workplace Fitting
                  </h3>
      <p className="text-[15px] leading-[24px] text-gray-300">
                    Pre-booked or same-day scheduled appointments outside your front door or office car park. Each van carries computerised dynamic wheel balancers, rubber valves, disposal bays for your scrap tyres, and a diverse stock of seasonal tyres.
                  </p>
      </div>
      <div className="shrink-0 self-end md:self-center">
      <a className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold flex items-center gap-2 transition-all" href="tel:08009992470">
      <span>Book Home</span>
      <ArrowRight className="h-[14px] w-[14px]" />
      </a>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 4: ROADS & NEARBY AREAS (MAP-STYLE NODE PANEL) */}
      <section className="w-full bg-primary text-white py-16 lg:py-24 px-4 sm:px-8 xl:px-12 flex justify-center">
      <div className="max-w-[1280px] w-full flex flex-col space-y-10">
      <div className="text-center max-w-2xl mx-auto space-y-3">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary uppercase tracking-wider font-bold">Network &amp; Coverage Grid</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold font-black text-white">
                Swinton Operational Corridor
              </h2>
      <p className="text-[15px] leading-[24px] text-gray-300">
                Rapid van staging ensures swift access to principal motorways, arterial link roads, and neighboring boroughs across Salford and Greater Manchester.
              </p>
      </div>
      {/* Stylized Network Diagram Card */}
      <div className="w-full p-8 lg:p-12 rounded-3xl bg-primary-dark/80 backdrop-blur-md relative overflow-hidden">
      {/* Background subtle tech grid lines */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffd700_1px,transparent_1px),linear-gradient(to_bottom,#ffd700_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      {/* West & North Nodes */}
      <div className="flex flex-col space-y-4">
      <div className="p-4 rounded-xl bg-primary shadow-md flex items-center gap-3">
      <Route className="text-secondary h-5 w-5" />
      <div>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">A580 East Lancs Road</p>
      <p className="text-[13px] leading-[18px] text-gray-400">Direct link through Swinton &amp; Walkden</p>
      </div>
      </div>
      <div className="p-4 rounded-xl bg-primary shadow-md flex items-center gap-3">
      <Signpost className="text-secondary h-5 w-5" />
      <div>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">Walkden &amp; Worsley</p>
      <p className="text-[13px] leading-[18px] text-gray-400">Under 15-minute dispatch radius</p>
      </div>
      </div>
      <div className="p-4 rounded-xl bg-primary shadow-md flex items-center gap-3">
      <CornerUpRight className="text-secondary h-5 w-5" />
      <div>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">M60 Junction 13 &amp; 14</p>
      <p className="text-[13px] leading-[18px] text-gray-400">Immediate orbital motorway access</p>
      </div>
      </div>
      </div>
      {/* Central Core Node: SWINTON */}
      <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-b from-primary to-primary-dark text-center shadow-xl">
      <div className="w-16 h-16 rounded-full bg-secondary text-primary flex items-center justify-center mb-4 shadow-lg shadow-[#ffd700]/20">
      <Navigation className="h-[30px] w-[30px] font-bold" />
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-accent uppercase tracking-wider font-bold">Central Dispatch Hub</span>
      <h3 className="font-heading text-[30px] leading-[38px] font-bold font-black text-white mt-1 mb-2">SWINTON</h3>
      <p className="text-[13px] leading-[18px] text-gray-300 mb-4">Postcode District: M27</p>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/30 text-xs font-semibold text-white">
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
      <span>2 Units Available On-Call</span>
      </div>
      </div>
      {/* East & South Nodes */}
      <div className="flex flex-col space-y-4">
      <div className="p-4 rounded-xl bg-primary shadow-md flex items-center gap-3">
      <Route className="text-secondary h-5 w-5" />
      <div>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">A6 Chorley Rd / Manchester Rd</p>
      <p className="text-[13px] leading-[18px] text-gray-400">Continuous corridor into Salford</p>
      </div>
      </div>
      <div className="p-4 rounded-xl bg-primary shadow-md flex items-center gap-3">
      <Building2 className="text-secondary h-5 w-5" />
      <div>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">Pendlebury &amp; Salford</p>
      <p className="text-[13px] leading-[18px] text-gray-400">Seamless metropolitan support</p>
      </div>
      </div>
      <div className="p-4 rounded-xl bg-primary shadow-md flex items-center gap-3">
      <Car className="text-secondary h-5 w-5" />
      <div>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">Eccles &amp; Monton</p>
      <p className="text-[13px] leading-[18px] text-gray-400">Covering southern residential avenues</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 5 & 6: HOW IT WORKS + REAL LOCAL JOB EXAMPLE */}
      <section className="w-full bg-primary-dark text-white py-16 lg:py-24 px-4 sm:px-8 xl:px-12 flex justify-center">
      <div className="max-w-[1280px] w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* 5-Step Process Ribbon (Left 8 cols) */}
      <div className="lg:col-span-8 flex flex-col space-y-8">
      <div>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary uppercase tracking-wider font-bold">Fast &amp; Simple</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold font-black text-white mt-1">
                  5 Simple Steps to Get You Rolling
                </h2>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-2">
                  No recovery delays, no garage waits. From callout to road-ready in under an hour.
                </p>
      </div>
      {/* Steps Stack */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
      <div className="p-5 rounded-2xl bg-primary/80 backdrop-blur-md flex flex-col items-start space-y-3">
      <span className="w-9 h-9 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-black flex items-center justify-center">1</span>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-bold text-white">Call Us</h4>
      <p className="text-[13px] leading-[18px] text-gray-300">Dial 0800 999 2470 with your location and tyre size.</p>
      </div>
      <div className="p-5 rounded-2xl bg-primary/80 backdrop-blur-md flex flex-col items-start space-y-3">
      <span className="w-9 h-9 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-black flex items-center justify-center">2</span>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-bold text-white">Instant Quote</h4>
      <p className="text-[13px] leading-[18px] text-gray-300">Fixed, transparent pricing with no hidden roadside extras.</p>
      </div>
      <div className="p-5 rounded-2xl bg-primary/80 backdrop-blur-md flex flex-col items-start space-y-3">
      <span className="w-9 h-9 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-black flex items-center justify-center">3</span>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-bold text-white">Van Dispatched</h4>
      <p className="text-[13px] leading-[18px] text-gray-300">Technician routed immediately with your exact tyre match.</p>
      </div>
      <div className="p-5 rounded-2xl bg-primary/80 backdrop-blur-md flex flex-col items-start space-y-3">
      <span className="w-9 h-9 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-black flex items-center justify-center">4</span>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-bold text-white">Fitted &amp; Balanced</h4>
      <p className="text-[13px] leading-[18px] text-gray-300">Fast on-site precision replacement &amp; valve renewal.</p>
      </div>
      <div className="p-5 rounded-2xl bg-primary/80 backdrop-blur-md flex flex-col items-start space-y-3">
      <span className="w-9 h-9 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-black flex items-center justify-center">5</span>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-bold text-white">Drive Away</h4>
      <p className="text-[13px] leading-[18px] text-gray-300">Contactless card payment and you&apos;re safely on your way.</p>
      </div>
      </div>
      </div>
      {/* Real Local Job Example Card (Right 4 cols) */}
      <div className="lg:col-span-4 p-6 rounded-3xl bg-primary shadow-xl space-y-4">
      <div className="flex items-center justify-between">
      <span className="px-2.5 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">Real Local Job</span>
      <span className="text-[13px] leading-[18px] text-secondary font-semibold">Swinton M27</span>
      </div>
      <div className="relative w-full h-44 rounded-xl overflow-hidden bg-primary-dark">
      <Image src="/gallery-evening-home-visit.webp" alt="Driveway tyre change on Nissan Qashqai in Swinton" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold font-bold text-white">
                  Driveway Callout: Swinton Park Road
                </h3>
      <p className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-gray-400 mt-0.5">Vehicle: Nissan Qashqai</p>
      </div>
      <div className="space-y-2 text-gray-300 text-[13px] leading-[18px]">
      <div className="flex items-start gap-2">
      <AlertTriangle className="text-secondary h-[18px] w-[18px] shrink-0" />
      <p><span className="text-white font-semibold">Issue:</span> Flat nearside front tyre discovered right before morning school run.</p>
      </div>
      <div className="flex items-start gap-2">
      <CheckCircle2 className="text-secondary h-[18px] w-[18px] shrink-0" />
      <p><span className="text-white font-semibold">Resolution:</span> Fitted premium 215/55 R18 tyre, rebalanced, reset TPMS.</p>
      </div>
      <div className="flex items-start gap-2">
      <Gauge className="text-secondary h-[18px] w-[18px] shrink-0" />
      <p><span className="text-white font-semibold">Total Time:</span> Van on-site in 28 minutes. Back on the road by 8:15 AM.</p>
      </div>
      </div>
      <div className="pt-2">
      <a className="w-full block py-3 text-center rounded-full bg-secondary hover:bg-secondary-hover text-primary text-[14px] leading-[18px] tracking-[0.02em] font-semibold font-extrabold uppercase transition-all" href="tel:08009992470">
                  Get Similar Fast Help
                </a>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 7: FAQS (SINGLE-COLUMN ACCORDION) */}
      <section className="w-full bg-primary text-white py-16 lg:py-24 px-4 sm:px-8 xl:px-12 flex justify-center">
      <div className="max-w-[860px] w-full flex flex-col space-y-10">
      <div className="text-center space-y-3">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary uppercase tracking-wider font-bold">Frequently Asked Questions</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold font-black text-white">
                Tyre Fitting in Swinton: FAQs
              </h2>
      <p className="text-[15px] leading-[24px] text-gray-300">
                Everything you need to know about our response times, pricing, and on-site procedures.
              </p>
      </div>
      {/* FAQ Container */}
      <div className="space-y-4">
      {/* Item 1 */}
      <details className="group rounded-2xl bg-primary-dark/80 p-6 [&amp;_summary::-webkit-details-marker]:none cursor-pointer">
      <summary className="flex items-center justify-between font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-bold text-white">
      <span>How fast can a mobile fitting van reach me in Swinton?</span>
      <ChevronDown className="transition duration-300 group-open:-rotate-180 text-secondary h-5 w-5" />
      </summary>
      <p className="mt-4 text-[15px] leading-[24px] text-gray-300">
                  Our average emergency response time for Swinton (including Pendlebury, Walkden, and the A580 East Lancs) is between 30 and 55 minutes. We maintain mobile fitting units circulating Greater Manchester around the clock to ensure you are never stranded.
                </p>
      </details>
      {/* Item 2 */}
      <details className="group rounded-2xl bg-primary-dark/80 p-6 [&amp;_summary::-webkit-details-marker]:none cursor-pointer">
      <summary className="flex items-center justify-between font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-bold text-white">
      <span>Can you replace tyres on my home driveway or workplace car park?</span>
      <ChevronDown className="transition duration-300 group-open:-rotate-180 text-secondary h-5 w-5" />
      </summary>
      <p className="mt-4 text-[15px] leading-[24px] text-gray-300">
                  Yes, absolutely. Our custom service vans are completely self-powered with onboard industrial compressors, hydraulic jacks, dynamic wheel balancers, and computerized bead breakers. We only need space to safely park adjacent to your car.
                </p>
      </details>
      {/* Item 3 */}
      <details className="group rounded-2xl bg-primary-dark/80 p-6 [&amp;_summary::-webkit-details-marker]:none cursor-pointer">
      <summary className="flex items-center justify-between font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-bold text-white">
      <span>What if I don&apos;t know my exact tyre size?</span>
      <ChevronDown className="transition duration-300 group-open:-rotate-180 text-secondary h-5 w-5" />
      </summary>
      <p className="mt-4 text-[15px] leading-[24px] text-gray-300">
                  No problem. Give our dispatch team a call on 0800 999 2470 with your vehicle registration number. We can check manufacturer specifications and carry options ranging from budget alternatives to mid-range and premium brands like Michelin, Pirelli, Goodyear, and Continental.
                </p>
      </details>
      {/* Item 4 */}
      <details className="group rounded-2xl bg-primary-dark/80 p-6 [&amp;_summary::-webkit-details-marker]:none cursor-pointer">
      <summary className="flex items-center justify-between font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-bold text-white">
      <span>Do you attend punctures on the M60 or A580 during night hours?</span>
      <ChevronDown className="transition duration-300 group-open:-rotate-180 text-secondary h-5 w-5" />
      </summary>
      <p className="mt-4 text-[15px] leading-[24px] text-gray-300">
                  Yes. We provide genuine 24-hour, 7-day-a-week motorway and trunk road recovery fitting. Our vans carry full Chapter 8 reflective highway livery, flashing amber roof bars, and safety barriers to protect you and your passengers while we replace the tyre.
                </p>
      </details>
      {/* Item 5 */}
      <details className="group rounded-2xl bg-primary-dark/80 p-6 [&amp;_summary::-webkit-details-marker]:none cursor-pointer">
      <summary className="flex items-center justify-between font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-bold text-white">
      <span>What happens to my damaged or punctured tyre?</span>
      <ChevronDown className="transition duration-300 group-open:-rotate-180 text-secondary h-5 w-5" />
      </summary>
      <p className="mt-4 text-[15px] leading-[24px] text-gray-300">
                  We include full environmental disposal of your old casing as part of our comprehensive service. It will be taken away in our onboard disposal bay and transferred to licensed UK tyre recycling facilities.
                </p>
      </details>
      </div>
      </div>
      </section>
      {/* SECTION 8: RELATED LOCATIONS (TEXT-LINK ROW) */}
      <section className="w-full bg-primary-dark text-gray-400 py-8 px-4 sm:px-8 xl:px-12 flex justify-center">
      <div className="max-w-[1280px] w-full flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white font-semibold shrink-0">Nearby Coverage Areas:</span>
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[13px] leading-[18px] text-gray-300">
      <a className="hover:text-secondary transition-colors" href="#">Salford</a>
      <span className="text-gray-600">|</span>
      <a className="hover:text-secondary transition-colors" href="#">Worsley</a>
      <span className="text-gray-600">|</span>
      <a className="hover:text-secondary transition-colors" href="#">Walkden</a>
      <span className="text-gray-600">|</span>
      <a className="hover:text-secondary transition-colors" href="#">Pendlebury</a>
      <span className="text-gray-600">|</span>
      <a className="hover:text-secondary transition-colors" href="#">Eccles</a>
      <span className="text-gray-600">|</span>
      <a className="hover:text-secondary font-semibold transition-colors text-white" href="#">Mobile Tyre Fitting UK</a>
      </div>
      </div>
      </section>
      {/* SECTION 9: FINAL COMPACT CTA BANNER */}
      <section className="w-full bg-primary text-white py-16 px-4 sm:px-8 xl:px-12 flex justify-center">
      <div className="max-w-[960px] w-full p-8 sm:p-12 rounded-3xl bg-primary-dark shadow-2xl flex flex-col items-center text-center space-y-6 relative overflow-hidden">
      {/* Standby status indicator */}
      <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 backdrop-blur-md">
      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-emerald-400 font-bold uppercase">
                Van on Standby in M27 Swinton
              </span>
      </div>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold font-black text-white max-w-xl">
              Need Immediate Mobile Tyre Assistance in Swinton?
            </h2>
      <p className="text-[15px] leading-[24px] text-gray-300 max-w-lg">
              Speak directly to our emergency controllers now. We will dispatch the closest mobile tyre unit straight to your roadside location or home address.
            </p>
      <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-secondary hover:bg-secondary-hover text-primary font-heading text-[20px] leading-[26px] font-bold font-black tracking-wide shadow-xl shadow-[#ffd700]/20 transition-all transform active:scale-95 text-center" href="tel:08009992470">
      <PhoneCall className="h-6 w-6" fill="currentColor" strokeWidth={0} />
      <span>Call 0800 999 2470</span>
      </a>
      </div>
      <div className="flex items-center gap-6 text-gray-400 text-[13px] leading-[18px] pt-2">
      <span className="flex items-center gap-1.5"><Clock className="text-secondary h-[14px] w-[14px]" /> Open 24 Hours</span>
      <span className="flex items-center gap-1.5"><CreditCard className="text-secondary h-[14px] w-[14px]" /> Pay On Completion</span>
      <span className="flex items-center gap-1.5"><ShieldCheck className="text-secondary h-[14px] w-[14px]" /> Guaranteed Work</span>
      </div>
      </div>
      </section>
    </main>
  );
}
