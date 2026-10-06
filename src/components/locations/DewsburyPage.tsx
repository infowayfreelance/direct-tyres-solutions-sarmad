import Image from "next/image";
import { ArrowRight, ArrowUpRight, ChevronDown, MessageCircle, PhoneCall, ShieldCheck, Truck } from "lucide-react";

export default function DewsburyPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      <div className="flex flex-col w-full overflow-hidden text-white">
      {/* 1. HERO SECTION (Warped Grid Hero with Parallelogram Framing) */}
      <section className="relative px-gutter-mobile md:px-gutter lg:px-margin pt-space-xl pb-space-xl max-w-[1280px] mx-auto w-full">
      {/* Atmospheric lighting glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center relative z-10">
      {/* Left Column: Mission Critical Heading & Direct Dispatch CTAs */}
      <div className="lg:col-span-7 flex flex-col gap-space-md">
      {/* Status Indicator Pill */}
      <div className="flex items-center gap-space-xs">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider shadow-sm">
      <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                  24/7 Rapid Response Dewsbury
                </span>
      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/80 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold border-0">
                  Average ETA: 25–40 Mins
                </span>
      </div>
      <h1 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold lg:text-[56px] lg:leading-[64px] lg:tracking-[-0.02em] lg:font-black text-white uppercase">
                24/7 Mobile Tyre Fitting in <span className="text-secondary">Dewsbury</span>
              </h1>
      <p className="text-[18px] leading-[28px] text-white max-w-xl">
                Stranded roadside or flat on your driveway? Our equipped mobile fitting vans arrive anywhere across Dewsbury, the A638 corridor, and surrounding West Yorkshire arteries within 30–60 minutes.
              </p>
      {/* Dispatch CTA Group */}
      <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
      <a className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider hover:bg-secondary-hover active:scale-95 transition-all shadow-xl" href="tel:07955266077">
      <PhoneCall className="text-primary h-5 w-5" fill="currentColor" strokeWidth={0} />
                  Call 07955 266 077
                </a>
      <a className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary/80 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold hover:bg-primary-light active:scale-95 transition-all" href="https://wa.me/447700123456">
      <MessageCircle className="text-accent h-5 w-5" />
                  WhatsApp Technician
                </a>
      </div>
      {/* Metric Badges Row */}
      <div className="grid grid-cols-3 gap-space-sm pt-space-md">
      <div className="bg-primary/60 backdrop-blur-md p-3.5 rounded-xl">
      <span className="font-heading text-[20px] leading-[26px] font-bold text-secondary block">30–60m</span>
      <span className="text-[13px] leading-[18px] text-gray-400">On-scene arrival</span>
      </div>
      <div className="bg-primary/60 backdrop-blur-md p-3.5 rounded-xl">
      <span className="font-heading text-[20px] leading-[26px] font-bold text-gray-400 block">100%</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Mobile balance &amp; fit</span>
      </div>
      <div className="bg-primary/60 backdrop-blur-md p-3.5 rounded-xl">
      <span className="font-heading text-[20px] leading-[26px] font-bold text-accent block">No Hidden</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Callout surprises</span>
      </div>
      </div>
      </div>
      {/* Right Column: Skewed Parallelogram / Warped Visual Block */}
      <div className="lg:col-span-5 relative">
      <div className="relative transform md:-skew-x-3 transition-transform duration-500 hover:skew-x-0">
      {/* Ambient rear accent rim */}
      <div className="absolute -inset-1 bg-gradient-to-r from-secondary via-accent to-accent rounded-2xl opacity-40 blur-lg"></div>
      <div className="relative overflow-hidden rounded-2xl bg-primary-dark shadow-2xl h-[420px] md:h-[480px]">
      <Image src="/hero-section-images-936x527.webp" alt="Emergency roadside mobile tyre technician assisting vehicle" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover transform md:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/30 to-transparent"></div>
      {/* Live Status HUD Overlay inside card */}
      <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-primary-dark/90 backdrop-blur-md transform md:skew-x-3">
      <div className="flex items-center justify-between mb-1">
      <span className="flex items-center gap-1.5 text-xs font-bold text-secondary uppercase tracking-widest">
      <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
                        Active Dewsbury Patrol
                      </span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">WF12 / WF13</span>
      </div>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Emergency Response Vehicle On Route</p>
      <p className="text-[13px] leading-[18px] text-gray-400">Equipped with digital balances, run-flat levers &amp; major brands</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 2. LOCAL INTRO & MUNICIPAL CORRIDORS */}
      <section className="w-full bg-primary-dark py-space-xl px-gutter-mobile md:px-gutter lg:px-margin">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
      <div className="lg:col-span-6 flex flex-col gap-space-sm">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 tracking-widest uppercase">Coverage Architecture</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">Precision Roadside Coverage Across Dewsbury &amp; Environs</h2>
      <p className="text-[15px] leading-[24px] text-gray-400">
                Positioned squarely between Leeds, Huddersfield, and Wakefield, Dewsbury experiences dense commercial traffic, unpredictable Pennine weather, and sharp curb infrastructure. Our rapid deployment fleet operates across every major thoroughfare:
              </p>
      <div className="grid grid-cols-2 gap-space-sm pt-space-xs">
      <div className="p-3.5 bg-primary/60 rounded-xl">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white block">A638 Wakefield Rd</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Express commuter link &amp; retail hubs</span>
      </div>
      <div className="p-3.5 bg-primary/60 rounded-xl">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white block">A644 Huddersfield Rd</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Direct heavy freight &amp; transit lane</span>
      </div>
      <div className="p-3.5 bg-primary/60 rounded-xl">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white block">M62 J28 / J27 Corridors</span>
      <span className="text-[13px] leading-[18px] text-gray-400">High-speed motorway hard shoulder dispatch</span>
      </div>
      <div className="p-3.5 bg-primary/60 rounded-xl">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white block">Dewsbury Town Centre</span>
      <span className="text-[13px] leading-[18px] text-gray-400">WF12/WF13 residential &amp; multi-storey parking</span>
      </div>
      </div>
      </div>
      <div className="lg:col-span-6">
      <div className="p-space-lg rounded-2xl bg-primary/60 backdrop-blur-md relative overflow-hidden">
      <div className="flex items-center justify-between mb-4">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider block">Zone Response Map</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Kirklees &amp; Calder Valley Dispatch</h3>
      </div>
      <Truck className="text-gray-400 h-[30px] w-[30px]" />
      </div>
      <div className="w-full h-64 bg-cover bg-center rounded-xl relative shadow-inner" data-location="Dewsbury, West Yorkshire, UK" style={{ backgroundImage: "url('/gallery-roadside-fitting.webp')" }}>
      <div className="absolute inset-0 bg-primary-dark/40 rounded-xl flex items-end p-4">
      <span className="px-3 py-1.5 rounded-full bg-primary-dark/90 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
                      Live Patrol: Dewsbury Town &amp; Earlsheaton
                    </span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 3. SERVICES: ALTERNATING SKEWED CARDS WITH REAL PHOTOGRAPHY */}
      <section className="py-space-xl px-gutter-mobile md:px-gutter lg:px-margin max-w-[1280px] mx-auto w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-space-lg">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-widest block mb-1">Our Capabilities</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">Emergency Mobile Tyre Solutions</h2>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400 max-w-md mt-2 md:mt-0">
              Equipped with onboard pneumatic bead breakers, high-torque wrenches, and computer balancing.
            </p>
      </div>
      {/* Skewed alternating card grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
      {/* Card 1: Emergency Skew -2deg */}
      <div className="transform md:-skew-x-2 transition-transform duration-300 hover:scale-[1.02] bg-primary/60 rounded-2xl p-space-md shadow-xl flex flex-col justify-between">
      <div className="transform md:skew-x-2">
      <div className="relative h-48 rounded-xl overflow-hidden mb-space-sm">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Emergency roadside puncture repair on West Yorkshire highway" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <span className="absolute top-3 left-3 bg-red-500/20 text-white px-3 py-1 rounded-full text-[11px] leading-[14px] tracking-[0.06em] font-bold">
                    Critical Breakdown
                  </span>
      </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-1">Emergency Roadside Repair</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                  Punctures on the A638, A644, or hard shoulders tackled securely under high-intensity LED scene beacons.
                </p>
      </div>
      <div className="transform md:skew-x-2 pt-space-sm flex items-center justify-between text-gray-400">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold">24/7 Deployment</span>
      <ArrowRight className="h-5 w-5" />
      </div>
      </div>
      {/* Card 2: Tread & Replacement Skew +2deg */}
      <div className="transform md:skew-x-2 transition-transform duration-300 hover:scale-[1.02] bg-primary/60 rounded-2xl p-space-md shadow-xl flex flex-col justify-between">
      <div className="transform md:-skew-x-2">
      <div className="relative h-48 rounded-xl overflow-hidden mb-space-sm">
      <Image src="/gallery-roadside-fitting.webp" alt="Brand new tyre inspection and installation" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <span className="absolute top-3 left-3 bg-accent text-white px-3 py-1 rounded-full text-[11px] leading-[14px] tracking-[0.06em] font-bold">
                    Same-Day Supply
                  </span>
      </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-1">New Tyre Replacement</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                  Massive stock including Michelin, Pirelli, Continental, Goodyear, and budget performance grades for all makes.
                </p>
      </div>
      <div className="transform md:-skew-x-2 pt-space-sm flex items-center justify-between text-secondary">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold">Direct Driveway Fitting</span>
      <ArrowRight className="h-5 w-5" />
      </div>
      </div>
      {/* Card 3: Locking Wheel Nut & Commercial Skew -2deg */}
      <div className="transform md:-skew-x-2 transition-transform duration-300 hover:scale-[1.02] bg-primary/60 rounded-2xl p-space-md shadow-xl flex flex-col justify-between">
      <div className="transform md:skew-x-2">
      <div className="relative h-48 rounded-xl overflow-hidden mb-space-sm bg-primary/80 flex items-center justify-center">
      {/* Inline SVG diagnostic icon indicator */}
      <svg className="w-24 h-24 text-gray-400 opacity-80" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3"></path>
      <path d="M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path>
      </svg>
      <span className="absolute top-3 left-3 bg-primary-light text-white px-3 py-1 rounded-full text-[11px] leading-[14px] tracking-[0.06em] font-bold">
                    Specialist Tools
                  </span>
      </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-1">Locking Nut &amp; Run-Flats</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                  Damage-free locking wheel nut removal without rim scuffs, plus high-rigidity reinforced run-flat swaps.
                </p>
      </div>
      <div className="transform md:skew-x-2 pt-space-sm flex items-center justify-between text-accent">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold">Zero Rim Damage Guarantee</span>
      <ArrowRight className="h-5 w-5" />
      </div>
      </div>
      </div>
      </section>
      {/* 4. ROADS & NEARBY AREAS: HIGH CONTRAST OVERLAPPING CAPTION BLOCK */}
      <section className="py-space-xl px-gutter-mobile md:px-gutter lg:px-margin bg-primary-dark">
      <div className="max-w-[1280px] mx-auto">
      <div className="relative rounded-3xl overflow-hidden bg-primary/60 shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
      {/* Image area */}
      <div className="lg:col-span-7 relative h-72 lg:h-full">
      <Image src="/gallery-home-callout.webp" alt="Emergency roadside service van attending tyre puncture on Yorkshire expressway" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/60 to-primary/60"></div>
      </div>
      {/* Skewed overlapping content block */}
      <div className="lg:col-span-5 p-space-md lg:p-space-lg flex flex-col justify-center relative z-10 lg:-ml-12">
      <div className="bg-primary/80 backdrop-blur-xl p-space-md lg:p-space-lg rounded-2xl transform lg:-skew-x-3 shadow-2xl">
      <div className="transform lg:skew-x-3">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary tracking-widest uppercase">Local Network</span>
      <h3 className="font-heading text-[30px] leading-[38px] font-bold text-white mb-space-sm">Dewsbury Regional Hub</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mb-space-sm">
                        Whether stuck near Dewsbury Railway Station, stalled on the hill climbs through Earlsheaton, or delayed along the Leeds Road shopping strips, our vans carry real-time navigation avoiding bottle-necks.
                      </p>
      <div className="space-y-2">
      <div className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
      <span className="text-[13px] leading-[18px] text-white"><strong>Primary Roads:</strong> M1, M62, A638 Wakefield Rd, A644</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
      <span className="text-[13px] leading-[18px] text-white"><strong>Adjacent Town Hubs:</strong> Batley (1.8m), Ossett (3.2m), Mirfield (3.5m)</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
      <span className="text-[13px] leading-[18px] text-white"><strong>Major Urban Targets:</strong> Huddersfield (8m), Wakefield (6m)</span>
      </div>
      </div>
      <div className="mt-space-md pt-space-xs">
      <a className="inline-flex items-center gap-2 text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold hover:underline" href="tel:07955266077">
                          Dispatch to your GPS point <ArrowUpRight className="h-5 w-5" />
      </a>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 5. HOW IT WORKS: 5 SKEWED PARALLELOGRAM STEPS */}
      <section className="py-space-xl px-gutter-mobile md:px-gutter lg:px-margin max-w-[1280px] mx-auto w-full">
      <div className="text-center max-w-2xl mx-auto mb-space-lg">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-widest block mb-1">Frictionless Workflow</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">5 Steps From Flat to Road-Ready</h2>
      </div>
      {/* 5 Process Steps in Connected Skewed Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-sm relative">
      {/* Step 1 */}
      <div className="transform md:-skew-x-3 bg-primary/60 p-space-md rounded-xl relative flex flex-col justify-between">
      <div className="transform md:skew-x-3">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary/20 block leading-none mb-2">01</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Emergency Call</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Dial 07955 266 077 or WhatsApp your live map pin to our dispatch center.</p>
      </div>
      <div className="transform md:skew-x-3 mt-4 pt-2 border-0">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">2-min triage</span>
      </div>
      </div>
      {/* Step 2 */}
      <div className="transform md:-skew-x-3 bg-primary/60 p-space-md rounded-xl relative flex flex-col justify-between">
      <div className="transform md:skew-x-3">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary/20 block leading-none mb-2">02</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Tyre Match</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Provide your tyre size (e.g. 215/60 R17) or vehicle registration plate.</p>
      </div>
      <div className="transform md:skew-x-3 mt-4 pt-2 border-0">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Exact fit confirmed</span>
      </div>
      </div>
      {/* Step 3 */}
      <div className="transform md:-skew-x-3 bg-primary/60 p-space-md rounded-xl relative flex flex-col justify-between">
      <div className="transform md:skew-x-3">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary/20 block leading-none mb-2">03</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Van En Route</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Our nearest Dewsbury mobile technician is immediately mobilised.</p>
      </div>
      <div className="transform md:skew-x-3 mt-4 pt-2 border-0">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Live arrival update</span>
      </div>
      </div>
      {/* Step 4 */}
      <div className="transform md:-skew-x-3 bg-primary/60 p-space-md rounded-xl relative flex flex-col justify-between">
      <div className="transform md:skew-x-3">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary/20 block leading-none mb-2">04</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Mobile Fit</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Precision mounting, new valve insertion, and electronic computer balancing.</p>
      </div>
      <div className="transform md:skew-x-3 mt-4 pt-2 border-0">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">BS standard work</span>
      </div>
      </div>
      {/* Step 5 */}
      <div className="transform md:-skew-x-3 bg-primary/60 p-space-md rounded-xl relative flex flex-col justify-between">
      <div className="transform md:skew-x-3">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary/20 block leading-none mb-2">05</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Drive Away</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Contactless card payment roadside, old tyre removed and recycled safely.</p>
      </div>
      <div className="transform md:skew-x-3 mt-4 pt-2 border-0">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Seamless handoff</span>
      </div>
      </div>
      </div>
      </section>
      {/* 6. REAL LOCAL JOB EVIDENCE: SKEWED ACCENT CARD */}
      <section className="py-space-xl px-gutter-mobile md:px-gutter lg:px-margin max-w-[1280px] mx-auto w-full">
      <div className="relative transform md:-skew-x-2 bg-gradient-to-br from-primary/60 to-primary/80 rounded-3xl p-space-lg shadow-2xl">
      <div className="transform md:skew-x-2 grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
      <div className="lg:col-span-7 flex flex-col gap-space-sm">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold w-fit">
      <ShieldCheck className="h-[14px] w-[14px]" />
                  Recent Dewsbury Field Dispatch
                </div>
      <h3 className="font-heading text-[30px] leading-[38px] font-bold text-white">
                  Dewsbury Retail Park Puncture Recovery
                </h3>
      <p className="text-[15px] leading-[24px] text-white">
                  A customer driving a <strong>Nissan Qashqai</strong> clipped a curb island exiting the retail complex on Railway Street, blowing out the front passenger tyre. With shopping in the trunk and evening traffic mounting, our local van arrived on scene in 19 minutes.
                </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-space-xs">
      <div className="bg-primary-dark/80 p-3 rounded-xl">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block uppercase">Vehicle</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Nissan Qashqai</span>
      </div>
      <div className="bg-primary-dark/80 p-3 rounded-xl">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block uppercase">Tyre Spec</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">215/60 R17</span>
      </div>
      <div className="bg-primary-dark/80 p-3 rounded-xl">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block uppercase">On-Site Time</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary">26 Minutes</span>
      </div>
      <div className="bg-primary-dark/80 p-3 rounded-xl">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block uppercase">Service</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-accent">New Tyre + Balance</span>
      </div>
      </div>
      </div>
      <div className="lg:col-span-5 relative">
      <div className="relative rounded-2xl overflow-hidden shadow-xl h-64 lg:h-72">
      <Image src="/gallery-evening-callout.webp" alt="Technician measuring tyre tread depth for replacement on Nissan vehicle" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 7. FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
      <section className="py-space-xl px-gutter-mobile md:px-gutter lg:px-margin bg-primary-dark">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
      <div className="lg:col-span-4">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-widest block mb-1">Frequently Asked</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white mb-space-sm">Got Questions About Dewsbury Fitting?</h2>
      <p className="text-[15px] leading-[24px] text-gray-400 mb-space-md">
                Immediate answers on response times, tyre supply, payment options, and motorway callouts.
              </p>
      <div className="p-space-md rounded-2xl bg-primary/60 text-white flex flex-col gap-2">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Need an immediate answer?</span>
      <p className="text-[13px] leading-[18px] text-gray-400">Technicians are active in Kirklees 24 hours a day, 365 days a year.</p>
      <a className="text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold hover:underline mt-1" href="tel:07955266077">Speak directly: 07955 266 077</a>
      </div>
      </div>
      {/* Accordion Column */}
      <div className="lg:col-span-8 flex flex-col gap-space-sm" id="faq-container">
      {/* FAQ 1 */}
      <details className="bg-primary/60 rounded-2xl overflow-hidden transition-all duration-200 group"><summary className="w-full p-space-md text-left flex justify-between items-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white focus:outline-none cursor-pointer list-none">
      <span>How fast can a mobile fitting van reach me in Dewsbury?</span>
      <ChevronDown className="transform transition-transform duration-200 text-gray-400 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-space-md pb-space-md text-gray-400 text-[15px] leading-[24px]">
                  Our average arrival window in Dewsbury and nearby town centres like Batley or Mirfield is 30 to 50 minutes. Highway incidents along the M1 or M62 junctions receive rapid dispatch priority.
                </div></details>
      {/* FAQ 2 */}
      <details className="bg-primary/60 rounded-2xl overflow-hidden transition-all duration-200 group"><summary className="w-full p-space-md text-left flex justify-between items-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white focus:outline-none cursor-pointer list-none">
      <span>Can you fix punctures at my home or workplace driveway?</span>
      <ChevronDown className="transform transition-transform duration-200 text-gray-400 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-space-md pb-space-md text-gray-400 text-[15px] leading-[24px]">
                  Yes. We carry high-precision mobile jacks and compressors suitable for residential driveways, company parking lots, and roadside verges without requiring mains electricity.
                </div></details>
      {/* FAQ 3 */}
      <details className="bg-primary/60 rounded-2xl overflow-hidden transition-all duration-200 group"><summary className="w-full p-space-md text-left flex justify-between items-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white focus:outline-none cursor-pointer list-none">
      <span>What if I don&apos;t know my exact tyre size?</span>
      <ChevronDown className="transform transition-transform duration-200 text-gray-400 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-space-md pb-space-md text-gray-400 text-[15px] leading-[24px]">
                  Simply provide your vehicle registration over the phone or via WhatsApp. Our DVLA-linked database will identify your exact tyre specifications, load index, and speed rating instantly.
                </div></details>
      {/* FAQ 4 */}
      <details className="bg-primary/60 rounded-2xl overflow-hidden transition-all duration-200 group"><summary className="w-full p-space-md text-left flex justify-between items-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white focus:outline-none cursor-pointer list-none">
      <span>Do you carry locking wheel nut removal tools?</span>
      <ChevronDown className="transform transition-transform duration-200 text-gray-400 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-space-md pb-space-md text-gray-400 text-[15px] leading-[24px]">
                  Yes. If your locking key is stripped, rounded, or missing, our specialist inverse-torque extractors can remove the nut cleanly without any damage to your alloy wheels.
                </div></details>
      </div>
      </div>
      </section>
      {/* 8. RELATED LOCATIONS LINKS */}
      <section className="py-space-xl px-gutter-mobile md:px-gutter lg:px-margin max-w-[1280px] mx-auto w-full">
      <div className="flex flex-col gap-space-sm">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-widest">Regional Network</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Nearby West Yorkshire Coverage Hubs</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-space-sm pt-space-xs">
      <a className="p-space-sm rounded-xl bg-primary/60 hover:bg-primary/80 transition-colors flex items-center justify-between" href="#huddersfield">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Huddersfield</span>
      <ArrowRight className="h-3 w-3 text-secondary" />
      </a>
      <a className="p-space-sm rounded-xl bg-primary/60 hover:bg-primary/80 transition-colors flex items-center justify-between" href="#wakefield">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Wakefield</span>
      <ArrowRight className="h-3 w-3 text-secondary" />
      </a>
      <a className="p-space-sm rounded-xl bg-primary/60 hover:bg-primary/80 transition-colors flex items-center justify-between" href="#batley">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Batley</span>
      <ArrowRight className="h-3 w-3 text-secondary" />
      </a>
      <a className="p-space-sm rounded-xl bg-primary/60 hover:bg-primary/80 transition-colors flex items-center justify-between" href="#ossett">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Ossett</span>
      <ArrowRight className="h-3 w-3 text-secondary" />
      </a>
      <a className="p-space-sm rounded-xl bg-primary/60 hover:bg-primary/80 transition-colors flex items-center justify-between" href="#yorkshire">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Mobile Tyre Yorkshire</span>
      <ArrowRight className="h-3 w-3 text-secondary" />
      </a>
      </div>
      </div>
      </section>
      {/* 9. FINAL CTA: BOLD SKEWED GOLD PANEL */}
      <section className="relative px-gutter-mobile md:px-gutter lg:px-margin pb-space-xl pt-space-md max-w-[1280px] mx-auto w-full">
      <div className="relative overflow-hidden rounded-3xl bg-secondary text-primary transform md:-skew-x-2 p-space-md md:p-space-xl shadow-2xl">
      {/* Skewed visual backdrop bleeding out from behind */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 opacity-20 pointer-events-none transform md:skew-x-2">
      <svg fill="currentColor" viewBox="0 0 100 100">
      <circle cx="50" cy="50" fill="none" r="40" stroke="currentColor" strokeWidth="8"></circle>
      <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="4"></path>
      </svg>
      </div>
      <div className="transform md:skew-x-2 relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
      <div className="max-w-xl">
      <span className="px-3.5 py-1 rounded-full bg-primary-dark text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider inline-block mb-space-sm">
                  Emergency Standby Unit
                </span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-primary mb-space-xs uppercase">
                  Stranded in Dewsbury Right Now?
                </h2>
      <p className="text-[18px] leading-[28px] text-primary/80">
                  Call our live regional control room. We will quote you upfront and dispatch a certified fitter immediately to your location.
                </p>
      </div>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm">
      <a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary-dark text-white font-heading text-[20px] leading-[26px] font-bold hover:bg-primary/60 transition-all active:scale-95 shadow-xl" href="tel:07955266077">
      <PhoneCall className="text-secondary h-5 w-5" fill="currentColor" strokeWidth={0} />
                  07955 266 077
                </a>
      <a className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-primary-dark/10 text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold hover:bg-primary-dark/20 transition-all" href="https://wa.me/447700123456">
                  WhatsApp Live Support
                </a>
      </div>
      </div>
      </div>
      </section>
      {/* Interactive Accordion Handler */}
      
      </div>
    </main>
  );
}
