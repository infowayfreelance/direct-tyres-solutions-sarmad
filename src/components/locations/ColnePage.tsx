import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check, CheckCircle2, ChevronDown, Disc, MapPin, MessageCircle, PhoneCall, Route, ShieldCheck, Star, Unlock, Wrench } from "lucide-react";

export default function ColnePage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      <div className="flex flex-col w-full text-white">
      {/* 1. HERO SECTION: Diagonal Split (Dark Navy & Tactical Gold Border against Real Field Photo) */}
      <section className="relative w-full overflow-hidden bg-primary-dark">
      <div className="max-w-[1280px] mx-auto min-h-[580px] lg:min-h-[640px] grid grid-cols-1 lg:grid-cols-12 relative">
      {/* Left Content Column (Navy Anchor) */}
      <div className="lg:col-span-7 flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-12 lg:py-20 z-10">
      {/* Live Dispatch Pill Badge */}
      <div className="flex items-center gap-2 mb-6">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold shadow-md">
      <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                  LANCASHIRE RAPID DISPATCH EN ROUTE
                </span>
      <span className="text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold hidden sm:inline-block">Avg ETA: 25-40 MIN</span>
      </div>
      {/* Oversized Headline */}
      <h1 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold sm:text-[46px] sm:leading-[52px] font-black text-white uppercase mb-4">
                24/7 Mobile Tyre <br className="hidden sm:inline"/>
      <span className="text-secondary">Fitting in Colne</span>
      </h1>
      {/* Commuter & Pennine Fringe Subheading */}
      <p className="text-[18px] leading-[28px] text-gray-400 max-w-xl mb-8 font-normal">
                Stranded at the edge of the M65 terminus, along Vivary Way, or climbing the moorland passes toward North Yorkshire? Our fully equipped emergency vans bring workshop-grade tyre replacement straight to your exact roadside or driveway location.
              </p>
      {/* CTA Cluster: Phone & WhatsApp Link */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
      <a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider font-extrabold shadow-xl hover:bg-secondary-hover transition-transform duration-150 active:scale-95 group" href="tel:08009992470">
      <PhoneCall className="text-primary h-6 w-6 group-hover:animate-bounce" />
      <span>0800 999 2470</span>
      </a>
      <a className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-primary/80 text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold shadow-md hover:bg-primary transition duration-200" href="https://wa.me/448009992470" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="text-accent h-5 w-5" />
      <span>Send Location via WhatsApp</span>
      </a>
      </div>
      {/* Key Route Metadata Ticker */}
      <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10 text-gray-400">
      <div>
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">M65 J14</div>
      <div className="text-[13px] leading-[18px] text-gray-400">Terminus Express</div>
      </div>
      <div>
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">A56 &amp; A6068</div>
      <div className="text-[13px] leading-[18px] text-gray-400">Cross-Pennine Arteries</div>
      </div>
      <div>
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary">24/7/365</div>
      <div className="text-[13px] leading-[18px] text-gray-400">Night &amp; Moorland Aid</div>
      </div>
      </div>
      </div>
      {/* Right Visual Column (Diagonal Cut Photo) */}
      <div className="lg:col-span-5 relative min-h-[340px] lg:min-h-full w-full">
      {/* Angled Gold Accent Line Overlay for Desktop */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none z-10" style={{ clipPath: "polygon(0 0, 16px 0, 100% 100%, calc(100% - 16px) 100%)", background: "linear-gradient(180deg, #ffd700, #0259f8)" }}></div>
      {/* Clipping Container */}
      <div className="w-full h-full relative overflow-hidden [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(14%_0,100%_0,100%_100%,0%_100%)]">
      <Image src="/hero-section-images-936x527.webp" alt="Emergency mobile tyre repair van responding roadside in UK" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover object-center filter brightness-90 contrast-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent lg:hidden"></div>
      <div className="absolute bottom-4 right-4 bg-primary-dark/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-white">COLNE &amp; PENDLE CREW ACTIVE</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 2. LOCAL INTRO: Town-Edge, Arterials & Moorland Commuters */}
      <section className="w-full py-16 lg:py-20 px-4 sm:px-8 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-7 flex flex-col space-y-4">
      <div className="flex items-center gap-2">
      <span className="text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider">Pendle Boundary Coverage</span>
      <span className="h-[2px] w-12 bg-secondary inline-block"></span>
      </div>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white tracking-tight">
                Rapid Roadside &amp; Driveway Rescue Where East Lancs Meets Yorkshire
              </h2>
      <p className="text-[18px] leading-[28px] text-gray-400">
                Positioned as the eastern terminus of the M65, Colne endures heavy commuter transfers onto the single-carriageway A56 toward Skipton and the winding A6068 Vivary Way / Keighley Road over the moorland summits. Potholes hidden along dark Lancashire lanes and unlit cross-border commuter tracks frequently cause sudden sidewall punctures, pinch flats, and bead blowouts.
              </p>
      <p className="text-[15px] leading-[24px] text-gray-400">
                Whether you are stranded outside retail parks near North Valley, halted on steep rural ascents toward Trawden Forest, or broken down in foul weather past Foulridge, our high-clearance mobile tyre vans navigate local moorland grades with industrial jacks, high-output air compressors, and precision electronic balancers.
              </p>
      </div>
      {/* Quick Context Box with Radial Status Chart */}
      <div className="lg:col-span-5 bg-primary/60 rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl relative overflow-hidden">
      <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-accent/10 rounded-full blur-2xl pointer-events-none"></div>
      <div className="flex items-center justify-between mb-6">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Colne Sector Operations</span>
      <span className="px-2.5 py-1 rounded-full bg-secondary text-primary text-[11px] leading-[14px] tracking-[0.06em] font-bold">LIVE</span>
      </div>
      <div className="space-y-4 text-[13px] leading-[18px]">
      <div className="flex items-center justify-between pb-3 border-b border-white/5">
      <span className="text-gray-400">M65 J14 Roundabout Response</span>
      <span className="text-secondary font-bold">18 - 25 mins</span>
      </div>
      <div className="flex items-center justify-between pb-3 border-b border-white/5">
      <span className="text-gray-400">A6068 Moorland Corridor (Keighley Rd)</span>
      <span className="text-secondary font-bold">25 - 35 mins</span>
      </div>
      <div className="flex items-center justify-between pb-3 border-b border-white/5">
      <span className="text-gray-400">Trawden / Laneshawbridge Rural</span>
      <span className="text-secondary font-bold">25 - 40 mins</span>
      </div>
      <div className="flex items-center justify-between">
      <span className="text-gray-400">Run-Flat &amp; Low-Profile Van Stock</span>
      <span className="text-white font-bold">100% Direct Match</span>
      </div>
      </div>
      <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
      <ShieldCheck className="text-secondary h-5 w-5" />
      <span className="text-gray-400 text-[13px] leading-[18px]">All roadside procedures comply fully with UK Road Traffic safety protocols.</span>
      </div>
      </div>
      </div>
      </section>
      {/* 3. SERVICES: Masonry Grid of Mixed Sizes */}
      <section className="w-full py-12 px-4 sm:px-8 max-w-[1280px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
      <div>
      <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider block mb-1">Heavy-Duty Roadside Capability</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">Emergency Tyre Services Fitted On Site</h2>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400 max-w-md">
              No tow trucks required. From high-speed dual carriageways to steep residential driveways, we perform full fittings and laser wheel balancing where you halt.
            </p>
      </div>
      {/* Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Big Card (Spans 2 columns on desktop) */}
      <div className="lg:col-span-2 bg-primary/60 rounded-2xl overflow-hidden border border-white/10 flex flex-col sm:flex-row shadow-lg group">
      <div className="sm:w-1/2 min-h-[240px] relative overflow-hidden">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Mechanic changing car wheel tyre on driveway" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      <div className="absolute top-4 left-4">
      <span className="px-3 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold shadow-md">
                    PRIMARY EMERGENCY TIER
                  </span>
      </div>
      </div>
      <div className="sm:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-3">Highway &amp; Dual Carriageway Rapid Replacement</h3>
      <p className="text-[15px] leading-[24px] text-gray-400 mb-4">
                    Immediate deployment for drivers experiencing blowouts on the M65 terminus or along high-traffic stretches of the A56 and Vivary Way bypass. High-visibility beacons, certified impact guns, and digital bead seating ensure fast, risk-mitigated resolution on dangerous verges.
                  </p>
      </div>
      <ul className="space-y-2 text-gray-400 text-[13px] leading-[18px]">
      <li className="flex items-center gap-2">
      <CheckCircle2 className="text-secondary h-[18px] w-[18px]" />
                    High-load commercial vehicle jacks
                  </li>
      <li className="flex items-center gap-2">
      <CheckCircle2 className="text-secondary h-[18px] w-[18px]" />
                    All premium &amp; mid-range sizes (Michelin, Pirelli, Goodyear)
                  </li>
      </ul>
      </div>
      </div>
      {/* Compact Card 1: Puncture Repair */}
      <div className="bg-primary/60 rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between shadow-lg">
      <div>
      <div className="w-12 h-12 rounded-xl bg-primary/80 flex items-center justify-center text-secondary mb-4">
      <Wrench className="h-[30px] w-[30px]" />
      </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-2">BS AU 159 Puncture Repair</h3>
      <p className="text-[15px] leading-[24px] text-gray-400 mb-4">
                  Avoid unnecessary replacements if the tyre is sound. We conduct stringent internal liner inspections and vulcanised plug repairs strictly compliant with British Standard regulations.
                </p>
      </div>
      <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold tracking-wider uppercase flex items-center gap-1">
                Internal Inspection Mandatory <ArrowRight className="h-4 w-4" />
      </span>
      </div>
      {/* Compact Card 2: Locking Wheel Nut Removal */}
      <div className="bg-primary/60 rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between shadow-lg">
      <div>
      <div className="w-12 h-12 rounded-xl bg-primary/80 flex items-center justify-center text-accent mb-4">
      <Unlock className="h-[30px] w-[30px]" />
      </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-2">Damaged Wheel Nut Extraction</h3>
      <p className="text-[15px] leading-[24px] text-gray-400 mb-4">
                  Rounded, overtightened, or missing key for your locking wheel nuts? We deploy heavy-duty reverse-fluted extraction tools that remove stuck nuts without scratching your alloy rims.
                </p>
      </div>
      <span className="text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold tracking-wider uppercase flex items-center gap-1">
                Zero Rim Damage Guarantee <ShieldCheck className="h-4 w-4" />
      </span>
      </div>
      {/* Compact Card 3: Residential & Farm Driveway Fitting */}
      <div className="lg:col-span-2 bg-primary/60 rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-lg">
      <div className="max-w-xl">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/80 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold mb-3">
      <MapPin className="h-4 w-4" />
                  LOCAL HOME &amp; AGRICULTURAL SERVICES
                </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-2">Residential &amp; Farm Driveway Fitting</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Woke up to a flat tyre in Trawden or Foulridge? Don&apos;t risk rim damage driving down narrow drystone-walled lanes to a garage. Our mobile technician comes directly to your home, workplace, or farm holding.
                </p>
      </div>
      <a className="shrink-0 px-6 py-3 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase font-bold hover:bg-secondary-hover transition" href="tel:08009992470">
                Book Driveway Slot
              </a>
      </div>
      </div>
      </section>
      {/* 4. ROADS & NEARBY AREAS: Frosted Glass Overlay Card */}
      <section className="w-full py-16 px-4 sm:px-8 max-w-[1280px] mx-auto">
      <div className="relative rounded-3xl overflow-hidden bg-primary-dark border border-white/10 p-8 sm:p-12 shadow-2xl">
      {/* Ambient Background Glow & Grids */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/80 to-primary-dark/90 z-0"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-5 space-y-4">
      <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold tracking-wider uppercase">Strategic Lancashire Hub</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">
                  Key Routes &amp; Surrounding Sectors We Serve Daily
                </h2>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Our vans are stationed directly off major feeder bypasses around Pendle, allowing rapid deployment whether you are stranded on the motorway dual section or mountain passes.
                </p>
      <div className="flex items-center gap-3 pt-2">
      <Route className="text-accent h-6 w-6" />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Average response: 30 minutes across all listed corridors</span>
      </div>
      </div>
      <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Key Corridor 1 */}
      <div className="bg-primary/60 backdrop-blur-md p-5 rounded-xl border border-white/5 shadow-inner">
      <div className="flex items-center gap-2 mb-1">
      <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">M65 J14 &amp; Vivary Way</h4>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">The busy terminal bottleneck and North Valley retail belt. Rapid emergency shoulder fitting.</p>
      </div>
      {/* Key Corridor 2 */}
      <div className="bg-primary/60 backdrop-blur-md p-5 rounded-xl border border-white/5 shadow-inner">
      <div className="flex items-center gap-2 mb-1">
      <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">A56 Skipton Road Corridor</h4>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">Connecting Colne through Foulridge toward Earby and the Yorkshire Dales boundary.</p>
      </div>
      {/* Key Corridor 3 */}
      <div className="bg-primary/60 backdrop-blur-md p-5 rounded-xl border border-white/5 shadow-inner">
      <div className="flex items-center gap-2 mb-1">
      <span className="w-2.5 h-2.5 rounded-full bg-accent"></span>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">A6068 Keighley Road</h4>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">The high moorland pass over Laneshawbridge into West Yorkshire with dark, winding stretches.</p>
      </div>
      {/* Key Corridor 4 */}
      <div className="bg-primary/60 backdrop-blur-md p-5 rounded-xl border border-white/5 shadow-inner">
      <div className="flex items-center gap-2 mb-1">
      <span className="w-2.5 h-2.5 rounded-full bg-accent"></span>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Pendle Towns &amp; Villages</h4>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">Nelson, Barrowford, Barnoldswick, Foulridge, and Trawden farm lanes covered 24 hours.</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 5. HOW IT WORKS: Connected Curved Dotted Steps (1 to 5) */}
      <section className="w-full py-16 lg:py-20 px-4 sm:px-8 max-w-[1280px] mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
      <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider block mb-2">Simple 5-Step Resolution</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">How Emergency Mobile Fitting Works</h2>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-2">No advance memberships, no recovery wait-times. Call, get confirmed ETA, and watch us replace your tyre on scene.</p>
      </div>
      {/* Stepper Grid with Dotted Connectors */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
      {/* Step 1 */}
      <div className="flex flex-col items-center text-center relative group">
      <div className="w-14 h-14 rounded-full bg-primary/60 border-2 border-secondary text-secondary font-heading text-[20px] leading-[26px] font-bold flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-200">
                1
              </div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Call Our Dispatch</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Dial 0800 999 2470. Tell us your location in Colne and your tyre sidewall dimensions or vehicle reg.</p>
      </div>
      {/* Step 2 */}
      <div className="flex flex-col items-center text-center relative group">
      <div className="w-14 h-14 rounded-full bg-primary/60 border-2 border-white/20 text-white font-heading text-[20px] leading-[26px] font-bold flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-200">
                2
              </div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Instant Tyre Match</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">We match your specific brand preference or budget variant and give you an upfront fixed price.</p>
      </div>
      {/* Step 3 */}
      <div className="flex flex-col items-center text-center relative group">
      <div className="w-14 h-14 rounded-full bg-primary/60 border-2 border-accent text-gray-400 font-heading text-[20px] leading-[26px] font-bold flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-200">
                3
              </div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Van Dispatched</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Mobile fitting van departs immediately. You receive live technician contact and WhatsApp live tracking.</p>
      </div>
      {/* Step 4 */}
      <div className="flex flex-col items-center text-center relative group">
      <div className="w-14 h-14 rounded-full bg-primary/60 border-2 border-white/20 text-white font-heading text-[20px] leading-[26px] font-bold flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-200">
                4
              </div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Roadside Fitting</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Tyre changed, new valve installed, digital electronic balancing executed, and old casing taken away.</p>
      </div>
      {/* Step 5 */}
      <div className="flex flex-col items-center text-center relative group">
      <div className="w-14 h-14 rounded-full bg-primary/60 border-2 border-secondary text-secondary font-heading text-[20px] leading-[26px] font-bold flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-200">
                5
              </div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Drive Away Safe</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Pay conveniently on card or contactless via mobile terminal. You are safely back on the road.</p>
      </div>
      </div>
      </section>
      {/* 6. REAL LOCAL JOB: Overlapping Asymmetric Cards */}
      <section className="w-full py-16 px-4 sm:px-8 max-w-[1280px] mx-auto">
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
      {/* Backing Photo Card */}
      <div className="lg:col-span-8 rounded-3xl overflow-hidden h-[380px] sm:h-[460px] relative shadow-2xl border border-white/10">
      <Image src="/gallery-roadside-fitting.webp" alt="BMW Run-Flat tyre fitting roadside on dark rainy Lancashire evening" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/30 to-transparent"></div>
      <div className="absolute top-6 left-6 flex items-center gap-2">
      <span className="px-3 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">Verified Rescue Case Study</span>
      </div>
      </div>
      {/* Overlapping Foreground Detail Card */}
      <div className="lg:col-span-6 lg:-ml-24 z-20 bg-primary/60 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-secondary/30 shadow-2xl space-y-4">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
      <div>
      <span className="text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold block uppercase">Incident Location</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">A6068 Keighley Road, nr Laneshawbridge</span>
      </div>
      <span className="px-2.5 py-1 rounded bg-primary text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">
                  28 MIN ETA
                </span>
      </div>
      <div className="grid grid-cols-2 gap-4 py-2 text-[13px] leading-[18px]">
      <div>
      <span className="text-gray-400 block">Vehicle</span>
      <span className="text-white font-bold">BMW 3 Series Touring</span>
      </div>
      <div>
      <span className="text-gray-400 block">Tyre Fitted</span>
      <span className="text-white font-bold">225/45 R18 Run-Flat</span>
      </div>
      <div>
      <span className="text-gray-400 block">Conditions</span>
      <span className="text-gray-400 font-bold">Heavy rain, unlit moor section</span>
      </div>
      <div>
      <span className="text-gray-400 block">Job Type</span>
      <span className="text-secondary font-bold">Sidewall Impact Replacement</span>
      </div>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400 pt-2 border-t border-white/10">
                &quot;Pothole blowout 2 miles past Colne heading up toward Cowling. Recovery estimated a 4-hour flatbed wait. The TyrePro crew arrived within 28 minutes, fitted a matching run-flat tyre directly on the wet verge, and had me safely home before midnight.&quot;
              </p>
      <div className="flex items-center gap-2 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <Star className="text-secondary h-[14px] w-[14px]" />
      <Star className="text-secondary h-[14px] w-[14px]" />
      <Star className="text-secondary h-[14px] w-[14px]" />
      <Star className="text-secondary h-[14px] w-[14px]" />
      <Star className="text-secondary h-[14px] w-[14px]" />
      <span className="text-gray-400 ml-2">— David H., Colne Commuter</span>
      </div>
      </div>
      </div>
      </section>
      {/* 7. FREQUENTLY ASKED QUESTIONS (Accordion style) */}
      <section className="w-full py-16 px-4 sm:px-8 max-w-[1000px] mx-auto">
      <div className="text-center mb-12">
      <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider block mb-2">Direct Answers</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">Frequently Asked Questions in Colne</h2>
      </div>
      <div className="space-y-4" id="colne-faq-group">
      {/* FAQ 1 */}
      <details className="bg-primary/60 rounded-xl border border-white/5 overflow-hidden transition-all duration-200 group"><summary className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer list-none">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Can your mobile vans access narrow or steep moorland lanes around Trawden &amp; Foulridge?</span>
      <ChevronDown className="text-secondary transform transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-6 pb-6 text-gray-400 text-[15px] leading-[24px]">
                Yes. Our vans are specifically configured medium-wheelbase Mercedes Sprinters equipped with high-torque gearboxes and heavy-duty onboard stabilisers. We routinely navigate rural farm tracks, single-track drystone lanes, and high-incline moorland routes across Pendle that standard large recovery transporters cannot safely reach.
              </div></details>
      {/* FAQ 2 */}
      <details className="bg-primary/60 rounded-xl border border-white/5 overflow-hidden transition-all duration-200 group"><summary className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer list-none">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Do you carry Run-Flat tyres and low profile tyres in emergency van stock?</span>
      <ChevronDown className="text-secondary transform transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-6 pb-6 text-gray-400 text-[15px] leading-[24px]">
                Yes. We hold extensive warehouse inventory in Lancashire covering premium Run-Flat variations (BMW RSC, Mercedes MOE, Audi RO1) from 16-inch to 22-inch diameters. When you call our dispatcher, we verify your exact rim and load specification so the van departs stocked with the identical tyre replacement.
              </div></details>
      {/* FAQ 3 */}
      <details className="bg-primary/60 rounded-xl border border-white/5 overflow-hidden transition-all duration-200 group"><summary className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer list-none">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Are your emergency fitters operational late at night and during bank holidays?</span>
      <ChevronDown className="text-secondary transform transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-6 pb-6 text-gray-400 text-[15px] leading-[24px]">
                We operate 24 hours a day, 365 days a year. Breakdown assistance in the Pendle region does not stop for nightfall, weekend closures, or freezing winter conditions. We maintain dedicated night-shift mobile fitters across Lancashire to guarantee immediate dispatch at 2:00 AM just as seamlessly as 2:00 PM.
              </div></details>
      {/* FAQ 4 */}
      <details className="bg-primary/60 rounded-xl border border-white/5 overflow-hidden transition-all duration-200 group"><summary className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer list-none">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">What happens if my tyre cannot be repaired due to British Standards (BS AU 159)?</span>
      <ChevronDown className="text-secondary transform transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-6 pb-6 text-gray-400 text-[15px] leading-[24px]">
                If our technician examines the tyre and identifies shoulder damage, sidewall perforations, or internal run-flat structural breakdown, it cannot legally or safely be patched. Because our mobile units carry fresh replacement tyres matched to your vehicle on every callout, we can immediately fit a new tyre on scene without any secondary dispatch fees.
              </div></details>
      </div>
      </section>
      {/* 8. RELATED LOCATIONS: Internal Sector Linking */}
      <section className="w-full py-12 px-4 sm:px-8 max-w-[1280px] mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Nearby Coverage Hubs in Pendle &amp; Lancashire</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Operating seamless reciprocal coverage with adjacent rapid-response vans.</p>
      </div>
      <a className="text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold mt-2 md:mt-0 flex items-center gap-1" href="tel:08009992470">
              Check ETA in your zone <ArrowUpRight className="h-5 w-5" />
      </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <a className="p-4 rounded-xl bg-primary/60 hover:bg-primary/80 transition border border-white/5 flex flex-col justify-between" href="#nelson">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Nelson</span>
      <span className="text-[13px] leading-[18px] text-gray-400 mt-1">M65 J12 &amp; J13 Express</span>
      </a>
      <a className="p-4 rounded-xl bg-primary/60 hover:bg-primary/80 transition border border-white/5 flex flex-col justify-between" href="#barrowford">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Barrowford</span>
      <span className="text-[13px] leading-[18px] text-gray-400 mt-1">A682 Pendle Heritage</span>
      </a>
      <a className="p-4 rounded-xl bg-primary/60 hover:bg-primary/80 transition border border-white/5 flex flex-col justify-between" href="#barnoldswick">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Barnoldswick</span>
      <span className="text-[13px] leading-[18px] text-gray-400 mt-1">West Craven Arterials</span>
      </a>
      <a className="p-4 rounded-xl bg-primary/60 hover:bg-primary/80 transition border border-white/5 flex flex-col justify-between" href="#lancashire-hub">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary">All Lancashire</span>
      <span className="text-[13px] leading-[18px] text-gray-400 mt-1">Countywide 24/7 Network</span>
      </a>
      </div>
      </section>
      {/* 9. FINAL CTA: Oversized Gold Circular Badge Ring & Primary Action */}
      <section className="w-full py-20 px-4 sm:px-8 bg-primary-dark relative overflow-hidden border-t-2 border-secondary/40">
      {/* Background Subtle Energy Radial */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-[600px] h-[600px] rounded-full bg-secondary/5 blur-3xl"></div>
      </div>
      <div className="max-w-[800px] mx-auto text-center relative z-10 flex flex-col items-center">
      {/* Oversized Circular Graphic Ring Behind CTA */}
      <div className="relative mb-8 flex items-center justify-center">
      {/* Animated / Glowing Border Ring */}
      <div className="absolute -inset-4 rounded-full border-2 border-dashed border-secondary/40 animate-[spin_20s_linear_infinite]"></div>
      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-primary/80 border-4 border-secondary flex flex-col items-center justify-center shadow-[0_0_30px_rgba(255,215,0,0.3)]">
      <Disc className="text-secondary h-9 w-9 sm:h-12 w-12" />
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold font-black text-white tracking-tighter uppercase">24 HR ON-SITE</span>
      </div>
      </div>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black uppercase mb-4">
              Need Urgent Mobile Tyre Fitting in Colne?
            </h2>
      <p className="text-[18px] leading-[28px] text-gray-400 max-w-xl mb-8">
              Don’t wait hours for recovery on unlit A-roads or risk driving on damaged rims. Speak with our local Lancashire controller right now for guaranteed instant dispatch.
            </p>
      {/* Primary Action Button: Visible Click-to-Call */}
      <a className="inline-flex items-center justify-center gap-4 px-10 py-5 rounded-full bg-secondary text-primary font-heading text-[20px] leading-[26px] font-bold uppercase font-black shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5),0_0_20px_0_rgba(255,215,0,0.4)] hover:bg-secondary-hover transition-all duration-150 transform hover:scale-105 active:scale-95 mb-6" href="tel:08009992470">
      <PhoneCall className="text-primary h-[30px] w-[30px]" />
      <span>Call Dispatch: 0800 999 2470</span>
      </a>
      {/* Dispatch Details Ticker */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-[13px] leading-[18px]">
      <span className="flex items-center gap-1.5">
      <Check className="text-secondary h-[18px] w-[18px]" />
                No Memberships Needed
              </span>
      <span className="flex items-center gap-1.5">
      <Check className="text-secondary h-[18px] w-[18px]" />
                Fixed Roadside Quotes
              </span>
      <span className="flex items-center gap-1.5">
      <Check className="text-secondary h-[18px] w-[18px]" />
                All Major Card Payments Accepted
              </span>
      </div>
      </div>
      </section>
      {/* Interactive Accordion Handler */}
      
      </div>
    </main>
  );
}
