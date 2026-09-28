import Image from "next/image";
import { AlertTriangle, ChevronDown, CircleDot, Clock, KeyRound, MapPin, MessageCircle, Navigation, PhoneCall, ShieldCheck, Wrench, Zap } from "lucide-react";

export default function WesthoughtonPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* SECTION 1: HERO (Editorial Split) */}
      <section className="relative w-full bg-primary-dark overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin py-space-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
      {/* Left Editorial Copy (7 Cols) */}
      <div className="lg:col-span-7 flex flex-col items-start z-10">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-white mb-space-md">
      <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary">Greater Manchester • Westhoughton Rapid Unit</span>
      </div>
      <h1 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold lg:text-[56px] lg:leading-[64px] lg:tracking-[-0.02em] lg:font-black text-white leading-none mb-space-sm">
                  24/7 Mobile Tyre Fitting in Westhoughton
                </h1>
      {/* Thin Gold Rule */}
      <div className="w-24 h-1 bg-secondary rounded-full mb-space-md"></div>
      <p className="text-[18px] leading-[28px] text-gray-400 max-w-xl mb-space-lg">
                  Rapid roadside emergency dispatch and precision driveway tyre replacement across Westhoughton, the M61 East Lancs corridor, and surrounding Greater Manchester districts. Average arrival time 25–40 mins.
                </p>
      {/* Direct CTAs Inline */}
      <div className="flex flex-wrap items-center gap-space-sm w-full sm:w-auto">
      <a className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider hover:bg-secondary-hover transition-transform active:scale-95 shadow-xl" href="tel:08009992470">
      <PhoneCall className="text-[20px] leading-[26px] font-bold h-5 w-5" fill="currentColor" strokeWidth={0} />
      <span>Call 0800 999 2470</span>
      </a>
      <a className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-primary/80 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold hover:bg-primary transition-colors" href="https://wa.me/448009992470" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="text-accent h-5 w-5" />
      <span>WhatsApp Dispatch</span>
      </a>
      </div>
      {/* Trust Badges Under Hero CTA */}
      <div className="flex flex-wrap items-center gap-y-2 gap-x-6 mt-space-lg text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <div className="flex items-center gap-1.5">
      <Clock className="text-secondary h-[14px] w-[14px]" />
      <span>365-Day 24-Hour Callout</span>
      </div>
      <div className="flex items-center gap-1.5">
      <ShieldCheck className="text-secondary h-[14px] w-[14px]" />
      <span>Fully Insured &amp; BS AU 159 Certified</span>
      </div>
      <div className="flex items-center gap-1.5">
      <Zap className="text-secondary h-[14px] w-[14px]" />
      <span>No Towing Needed</span>
      </div>
      </div>
      </div>
      {/* Right Visual (5 Cols) */}
      <div className="lg:col-span-5 relative mt-space-lg lg:mt-0">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-primary/80 aspect-[4/3] lg:aspect-[5/4]">
      <Image src="/hero-section-images-936x527.webp" alt="Mobile technician changing alloy wheel tyre" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-80"></div>
      <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-primary-dark/80 backdrop-blur-md">
      <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white">
      <Wrench className="text-[16px] leading-[22px] tracking-[0.01em] font-bold h-5 w-5" />
      </div>
      <div>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">On-Site Tyre Bay</p>
      <p className="text-[13px] leading-[18px] text-gray-400">Driveways, Car Parks &amp; Dual Carriageways</p>
      </div>
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary bg-secondary/10 px-2.5 py-1 rounded-full uppercase tracking-wider">Active Van</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 2: LOCAL INTRO */}
      <section className="w-full bg-primary/60 py-space-xl">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
      <div className="lg:col-span-5">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary mb-space-xs block">Hyper-Local Coverage</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white tracking-tight">
                  From the M61 Arterial Spine to Pennington Cul-de-Sacs
                </h2>
      </div>
      <div className="lg:col-span-7">
      <p className="text-[15px] leading-[24px] text-gray-400 mb-space-sm">
                  A tyre blowout or bead split doesn’t wait for business hours. Whether you have suffered a sudden tyre puncture navigating the commuter flow on the <strong>M61 East Lancashire Road</strong>, clipped a kerb outside <strong>Parsonage Retail Park</strong>, or discovered an unyielding flat on your home driveway in <strong>Pennington</strong> or <strong>Bedford</strong>, our Westhoughton mobile rapid-response fleet eliminates the frustration and cost of local recovery tow-trucks.
                </p>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Each van is custom-fitted with industrial hydraulic jacks, high-speed computerized wheel balancers, and a comprehensive stock of budget, mid-range, and premium OEM tyres (Continental, Michelin, Pirelli, Goodyear) ready for instant, roadside roadside deployment.
                </p>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 3: SERVICES (Vertical Icon-List with Photos) */}
      <section className="w-full bg-primary-dark py-space-xl">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
      <div className="mb-space-lg max-w-2xl">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary mb-space-xs block">Engineering Services</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white tracking-tight">
                Specialised Roadside &amp; Mobile Tyre Procedures
              </h2>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-space-xs">
                Direct Tyre Solutions operates fully compliant emergency assistance units capable of performing all garage-level services directly at your vehicle.
              </p>
      </div>
      <div className="flex flex-col gap-space-md">
      {/* Row 1 */}
      <div className="flex flex-col sm:flex-row items-center gap-space-md p-space-md rounded-2xl bg-primary/60 hover:bg-primary/60 transition-all">
      <div className="relative w-full sm:w-44 h-32 rounded-xl overflow-hidden flex-shrink-0 bg-primary/80">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Emergency roadside service" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow">
      <div className="flex items-center gap-2 mb-1.5">
      <span className="inline-flex p-1.5 rounded-lg bg-accent text-white">
      <AlertTriangle className="h-4 w-4" />
      </span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Emergency Roadside Replacement</h3>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400 max-w-3xl">
                    High-priority immediate response for blowouts on the M61, A6, and dual carriageways. Our vans arrive equipped with synchronized LED hazard beacons, high-visibility perimeter setups, and on-board inflation rigs to replace destroyed tyres safely on live routes.
                  </p>
      </div>
      <div className="sm:self-center flex-shrink-0">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary px-3 py-1.5 rounded-full bg-secondary/10 uppercase">24/7 Rapid</span>
      </div>
      </div>
      {/* Row 2 */}
      <div className="flex flex-col sm:flex-row items-center gap-space-md p-space-md rounded-2xl bg-primary/60 hover:bg-primary/60 transition-all">
      <div className="relative w-full sm:w-44 h-32 rounded-xl overflow-hidden flex-shrink-0 bg-primary/80">
      <Image src="/gallery-roadside-fitting.webp" alt="Puncture inspection gauge" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow">
      <div className="flex items-center gap-2 mb-1.5">
      <span className="inline-flex p-1.5 rounded-lg bg-accent text-white">
      <Wrench className="h-4 w-4" />
      </span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">BS AU 159 Puncture Vulcanisation</h3>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400 max-w-3xl">
                    Strict British Standard minor puncture repairs. If your tyre tread has caught a nail or screw in the central 60-70% zone without internal cord delamination, we patch, vulcanise, and re-balance on the spot, saving you the expense of a brand-new tyre.
                  </p>
      </div>
      <div className="sm:self-center flex-shrink-0">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 px-3 py-1.5 rounded-full bg-accent/20 uppercase">BS AU 159</span>
      </div>
      </div>
      {/* Row 3 */}
      <div className="flex flex-col sm:flex-row items-center gap-space-md p-space-md rounded-2xl bg-primary/60 hover:bg-primary/60 transition-all">
      <div className="relative w-full sm:w-44 h-32 rounded-xl overflow-hidden flex-shrink-0 bg-primary/80">
      <Image src="/gallery-home-callout.webp" alt="Locking wheel nut removal" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow">
      <div className="flex items-center gap-2 mb-1.5">
      <span className="inline-flex p-1.5 rounded-lg bg-accent text-white">
      <KeyRound className="h-4 w-4" />
      </span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Locking Nut Extraction</h3>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400 max-w-3xl">
                    Lost the locking key, or stripped the socket teeth during an attempted wheel swap? We use specialized reverse-threaded heavy-duty extraction tooling to release stuck nuts safely without scraping, gouging, or damaging your delicate alloy rims.
                  </p>
      </div>
      <div className="sm:self-center flex-shrink-0">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-white px-3 py-1.5 rounded-full bg-primary uppercase">Zero Wheel Harm</span>
      </div>
      </div>
      {/* Row 4 */}
      <div className="flex flex-col sm:flex-row items-center gap-space-md p-space-md rounded-2xl bg-primary/60 hover:bg-primary/60 transition-all">
      <div className="relative w-full sm:w-44 h-32 rounded-xl overflow-hidden flex-shrink-0 bg-primary/80">
      <Image src="/gallery-evening-callout.webp" alt="Mobile fitting van on driveway" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow">
      <div className="flex items-center gap-2 mb-1.5">
      <span className="inline-flex p-1.5 rounded-lg bg-accent text-white">
      <MapPin className="h-4 w-4" />
      </span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Residential &amp; Driveway Fitting</h3>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400 max-w-3xl">
                    Skip waiting rooms and lost Saturdays. Book single or complete axle changes directly outside your home or business premises in Westhoughton. We handle precision digital bead sealing, high-speed spin balance, and eco-compliant casing disposal.
                  </p>
      </div>
      <div className="sm:self-center flex-shrink-0">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary px-3 py-1.5 rounded-full bg-secondary/10 uppercase">At Your Door</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 4: ROADS & AREAS (Network Hub) */}
      <section className="w-full bg-primary/60 py-space-xl">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
      <div className="text-center max-w-2xl mx-auto mb-space-lg">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary mb-space-xs block">Operational Radius</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white tracking-tight">
                Westhoughton Road Corridor &amp; Regional Outposts
              </h2>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-space-xs">
                Direct dispatch positioned immediately around key regional transit junctions for rapid interception.
              </p>
      </div>
      {/* Network Graphic / Layout */}
      <div className="p-space-lg rounded-2xl bg-primary-dark relative overflow-hidden">
      {/* Center Hub + Spokes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md items-center">
      {/* Node Column Left */}
      <div className="flex flex-col gap-space-md">
      <div className="p-space-md rounded-xl bg-primary/60 flex items-center justify-between">
      <div>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white block">Bolton</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Via A6 • 10-15 Min</span>
      </div>
      <span className="w-3 h-3 rounded-full bg-accent"></span>
      </div>
      <div className="p-space-md rounded-xl bg-primary/60 flex items-center justify-between">
      <div>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Horwich</span>
      <span className="text-[13px] leading-[18px] text-gray-400 block">Via A58 • 12-18 Min</span>
      </div>
      <span className="w-3 h-3 rounded-full bg-accent"></span>
      </div>
      <div className="p-space-md rounded-xl bg-primary/60 flex items-center justify-between">
      <div>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Wigan</span>
      <span className="text-[13px] leading-[18px] text-gray-400 block">Via A577 / Ince • 20 Min</span>
      </div>
      <span className="w-3 h-3 rounded-full bg-accent"></span>
      </div>
      </div>
      {/* Central Core: WESTHOUGHTON */}
      <div className="p-space-lg rounded-2xl bg-primary/80 text-center flex flex-col items-center justify-center my-space-sm md:my-0 shadow-lg">
      <div className="w-16 h-16 rounded-full bg-secondary text-primary flex items-center justify-center mb-space-sm">
      <CircleDot className="text-[36px] leading-[42px] tracking-[-0.01em] font-black h-5 w-5" fill="currentColor" strokeWidth={0} />
      </div>
      <h3 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">WESTHOUGHTON</h3>
      <p className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary uppercase tracking-wider mb-space-sm">Central Hub &amp; Depot Unit</p>
      <div className="text-left w-full space-y-1.5 pt-space-sm text-[13px] leading-[18px] text-white">
      <div className="flex items-center gap-2">
      <Navigation className="text-secondary h-[14px] w-[14px]" />
      <span><strong>M61 (East Lancs):</strong> Constant Patrol</span>
      </div>
      <div className="flex items-center gap-2">
      <Navigation className="text-secondary h-[14px] w-[14px]" />
      <span><strong>A6 / A58:</strong> Instant Surface Access</span>
      </div>
      <div className="flex items-center gap-2">
      <Navigation className="text-secondary h-[14px] w-[14px]" />
      <span><strong>M60 / M61 Interchanges:</strong> 15-20 Min</span>
      </div>
      </div>
      </div>
      {/* Node Column Right */}
      <div className="flex flex-col gap-space-md">
      <div className="p-space-md rounded-xl bg-primary/60 flex items-center justify-between">
      <div>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white block">Westhoughton</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Via M61 East • 15-20 Min</span>
      </div>
      <span className="w-3 h-3 rounded-full bg-accent"></span>
      </div>
      <div className="p-space-md rounded-xl bg-primary/60 flex items-center justify-between">
      <div>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white block">Atherton</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Via Warrington Rd • 12-15 Min</span>
      </div>
      <span className="w-3 h-3 rounded-full bg-accent"></span>
      </div>
      <div className="p-space-md rounded-xl bg-primary/60 flex items-center justify-between">
      <div>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white block">Lowton &amp; Golborne</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Via Stone Cross • 10 Min</span>
      </div>
      <span className="w-3 h-3 rounded-full bg-accent"></span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 5: HOW IT WORKS & REAL JOB */}
      <section className="w-full bg-primary-dark py-space-xl">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
      {/* Left Side: 5-Step Ribbon (8 cols) */}
      <div className="lg:col-span-8">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary mb-space-xs block">Operational Sequence</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white tracking-tight mb-space-lg">
                  Rapid 5-Stage Mobile Deployment
                </h2>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-space-sm relative">
      {/* Step 1 */}
      <div className="p-space-sm rounded-xl bg-primary/60 flex flex-col items-start">
      <div className="w-8 h-8 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center mb-space-xs">
                      01
                    </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Phone Call</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Instant dispatcher takes exact Westhoughton location.</p>
      </div>
      {/* Step 2 */}
      <div className="p-space-sm rounded-xl bg-primary/60 flex flex-col items-start">
      <div className="w-8 h-8 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center mb-space-xs">
                      02
                    </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Tyre Verify</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Confirm dimensions (e.g. 205/55 R16) &amp; brand choice.</p>
      </div>
      {/* Step 3 */}
      <div className="p-space-sm rounded-xl bg-primary/60 flex flex-col items-start">
      <div className="w-8 h-8 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center mb-space-xs">
                      03
                    </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Unit Mobilised</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Fitter dispatched with accurate tracking update.</p>
      </div>
      {/* Step 4 */}
      <div className="p-space-sm rounded-xl bg-primary/60 flex flex-col items-start">
      <div className="w-8 h-8 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center mb-space-xs">
                      04
                    </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Driveway Mount</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Hydraulic jack, tyre fitting, laser balance.</p>
      </div>
      {/* Step 5 */}
      <div className="p-space-sm rounded-xl bg-primary/60 flex flex-col items-start">
      <div className="w-8 h-8 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center mb-space-xs">
                      05
                    </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Card Payment</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Mobile POS terminal: Contactless, Debit, or Credit.</p>
      </div>
      </div>
      <div className="mt-space-lg p-space-md rounded-xl bg-primary/60 flex items-center justify-between flex-wrap gap-4">
      <div className="flex items-center gap-3">
      <ShieldCheck className="text-secondary text-[30px] leading-[38px] font-bold h-5 w-5" />
      <div>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Need Tyre Support Right Now?</p>
      <p className="text-[13px] leading-[18px] text-gray-400">Priority operators standing by for Westhoughton dispatch.</p>
      </div>
      </div>
      <a className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-secondary text-primary text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider hover:bg-secondary-hover transition-colors" href="tel:08009992470">
      <PhoneCall className="h-[14px] w-[14px]" fill="currentColor" strokeWidth={0} />
      <span>0800 999 2470</span>
      </a>
      </div>
      </div>
      {/* Right Side: Real Job Sidebar (4 cols) */}
      <div className="lg:col-span-4 mt-space-lg lg:mt-0">
      <div className="p-space-md rounded-2xl bg-primary/60 relative">
      <div className="flex items-center justify-between mb-space-sm">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary bg-secondary/10 px-2 py-1 rounded-full uppercase tracking-wider">
                      Case Log #WN7-891
                    </span>
      <span className="text-[13px] leading-[18px] text-gray-400">Today</span>
      </div>
      <div className="relative rounded-xl overflow-hidden aspect-video bg-primary/80 mb-space-sm">
      <Image src="/gallery-evening-home-visit.webp" alt="Recent job at Parsonage Retail Park Westhoughton" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-1">
                    Recent Callout: Parsonage Retail Park, Westhoughton
                  </h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mb-space-sm">
                    Vauxhall Corsa flat tyre after clipping a high kerb near the shopping complex. Driver contacted dispatch at 14:15. Mobile fitter was on site in <strong>22 minutes</strong>. Tyre inspected, replacement tyre fitted, digitally balanced, and motorist safely back on route before 14:50.
                  </p>
      <div className="space-y-1.5 pt-space-xs text-[11px] leading-[14px] tracking-[0.06em] font-bold text-white">
      <div className="flex justify-between">
      <span className="text-gray-400">Vehicle:</span>
      <span>Vauxhall Corsa 1.2</span>
      </div>
      <div className="flex justify-between">
      <span className="text-gray-400">Tyre Fitted:</span>
      <span>195/55 R16 Continental</span>
      </div>
      <div className="flex justify-between">
      <span className="text-gray-400">Response Time:</span>
      <span className="text-secondary">22 Mins</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 6: FAQ ACCORDION */}
      <section className="w-full bg-primary/60 py-space-xl">
      <div className="max-w-[800px] mx-auto px-margin-mobile md:px-margin">
      <div className="text-center mb-space-lg">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary mb-space-xs block">Frequently Asked Questions</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white tracking-tight">
                Emergency Tyre Fitting in Westhoughton
              </h2>
      </div>
      <div className="flex flex-col gap-space-sm">
      {/* Question 1 */}
      <details className="group rounded-2xl bg-primary-dark p-space-md cursor-pointer transition-colors" open>
      <summary className="flex justify-between items-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white list-none">
      <span>What is your average response time to Westhoughton and the M61?</span>
      <ChevronDown className="transform group-open:rotate-180 transition-transform text-secondary h-5 w-5" />
      </summary>
      <div className="mt-space-sm text-[15px] leading-[24px] text-gray-400">
                  Our standard arrival time for emergency tyre repairs and replacements in Westhoughton, Pennington, and along the M61 East Lancashire Road is between 25 and 45 minutes. Priority roadside assistance is dispatched immediately upon confirming tyre sizing and vehicle location.
                </div>
      </details>
      {/* Question 2 */}
      <details className="group rounded-2xl bg-primary-dark p-space-md cursor-pointer transition-colors">
      <summary className="flex justify-between items-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white list-none">
      <span>Do you operate during evenings, weekends, and Bank Holidays?</span>
      <ChevronDown className="transform group-open:rotate-180 transition-transform text-secondary h-5 w-5" />
      </summary>
      <div className="mt-space-sm text-[15px] leading-[24px] text-gray-400">
                  Yes, our Westhoughton mobile fitting services run 24 hours a day, 7 days a week, 365 days a year. Whether you need roadside emergency tyre assistance on a Sunday evening or driveway tyre installation early on a Saturday, our technicians are on full rotation.
                </div>
      </details>
      {/* Question 3 */}
      <details className="group rounded-2xl bg-primary-dark p-space-md cursor-pointer transition-colors">
      <summary className="flex justify-between items-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white list-none">
      <span>Which tyre brands and sizes do your mobile vans carry?</span>
      <ChevronDown className="transform group-open:rotate-180 transition-transform text-secondary h-5 w-5" />
      </summary>
      <div className="mt-space-sm text-[15px] leading-[24px] text-gray-400">
                  We stock an extensive supply ranging from economy budget tyres through mid-tier (Nexen, Kumho, Hankook) to premium OEM brands including Michelin, Pirelli, Continental, Bridgestone, and Goodyear. We stock standard passenger, run-flat, EV-specific, and reinforced van commercial load-rated tyres.
                </div>
      </details>
      {/* Question 4 */}
      <details className="group rounded-2xl bg-primary-dark p-space-md cursor-pointer transition-colors">
      <summary className="flex justify-between items-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white list-none">
      <span>How much driveway space is needed for home fitting?</span>
      <ChevronDown className="transform group-open:rotate-180 transition-transform text-secondary h-5 w-5" />
      </summary>
      <div className="mt-space-sm text-[15px] leading-[24px] text-gray-400">
                  We require only enough space to park our service van adjacent to or just behind your car, with approximately 1 metre of clearance around the affected wheels. We can safely work on residential driveways, private parking bays, company car parks, or kerbside where safe.
                </div>
      </details>
      </div>
      </div>
      </section>
      {/* SECTION 7: RELATED LOCATIONS */}
      <section className="w-full bg-primary-dark py-space-md">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-gray-400 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <span className="text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold mr-2">Nearby Service Areas:</span>
      <a className="hover:text-secondary transition-colors" href="#">Bolton</a>
      <span className="text-gray-400/40">•</span>
      <a className="hover:text-secondary transition-colors" href="#">Horwich</a>
      <span className="text-gray-400/40">•</span>
      <a className="hover:text-secondary transition-colors" href="#">Wigan</a>
      <span className="text-gray-400/40">•</span>
      <a className="hover:text-secondary transition-colors" href="#">Westhoughton</a>
      <span className="text-gray-400/40">•</span>
      <a className="hover:text-secondary transition-colors" href="#">Atherton</a>
      <span className="text-gray-400/40">•</span>
      <a className="hover:text-secondary transition-colors" href="#">Mobile Tyre Fitting UK</a>
      </div>
      </div>
      </section>
      {/* SECTION 8: FINAL CTA */}
      <section className="w-full bg-primary-dark py-space-xl">
      <div className="max-w-[960px] mx-auto px-margin-mobile md:px-margin">
      <div className="rounded-2xl p-space-lg md:p-space-xl bg-primary/60 text-center flex flex-col items-center shadow-2xl relative overflow-hidden">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider mb-space-sm">
      <MapPin className="h-4 w-4" />
      <span>Westhoughton Local Unit Standing By</span>
      </div>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold md:text-[56px] md:leading-[64px] md:tracking-[-0.02em] md:font-black text-white mb-space-sm max-w-xl">
                Stranded in Westhoughton with a Punctured Tyre?
              </h2>
      <p className="text-[18px] leading-[28px] text-gray-400 max-w-lg mb-space-lg">
                Don&apos;t wait hours for a recovery lorry. Our specialized mobile fitting van is stocked and ready to reach your Westhoughton location now.
              </p>
      <a className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider hover:bg-secondary-hover transition-transform active:scale-95 shadow-2xl mb-space-sm" href="tel:08009992470">
      <PhoneCall className="text-[20px] leading-[26px] font-bold h-5 w-5" fill="currentColor" strokeWidth={0} />
      <span>Call 0800 999 2470</span>
      </a>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">
                24/7 Guaranteed Response • No Callout Surcharge During Daylight Hours • Transparent UK Quotations
              </p>
      </div>
      </div>
      </section>
    </main>
  );
}
