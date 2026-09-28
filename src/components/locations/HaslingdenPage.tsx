import Image from "next/image";
import { AlertTriangle, ArrowRight, CheckCircle2, ChevronDown, Gauge, MessageCircle, Mountain, Navigation, PhoneCall, Radar, ShieldCheck, Timer, Truck, Unlock, Wrench } from "lucide-react";

export default function HaslingdenPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* HERO SECTION: Layered Depth Hero */}
      <section className="relative w-full overflow-hidden bg-primary-dark min-h-[92vh] flex flex-col justify-end">
      {/* Full-bleed Background Scene */}
      <div className="absolute inset-0 z-0">
      <div aria-label="Mobile tyre roadside emergency scene on UK road with support van beacons at twilight" className="w-full h-full bg-cover bg-center scale-105 transition-transform duration-1000 ease-out" role="img" style={{ backgroundImage: "url('/hero-section-images-936x527.webp')" }}>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-transparent to-primary-dark/60"></div>
      </div>
      {/* Oversized Dimensional Typography Behind Hero Copy */}
      <div className="absolute top-12 left-0 right-0 pointer-events-none select-none overflow-hidden z-1 flex justify-center opacity-10">
      <span className="font-heading text-[18vw] leading-none tracking-tighter text-white uppercase font-black whitespace-nowrap">
              HASLINGDEN
            </span>
      </div>
      {/* Content & Glassmorphic Floating Panel */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-24 sm:pt-32">
      {/* Fast Diagnostic Ticker Bar */}
      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/60 backdrop-blur-md mb-6 shadow-lg">
      <span className="inline-flex items-center justify-center w-2.5 h-2.5 rounded-full bg-secondary animate-ping"></span>
      <span className="w-2.5 h-2.5 -ml-5 rounded-full bg-secondary"></span>
      <span className="uppercase tracking-wider text-white">Lancashire Mobile Dispatch: 24/7 Rossendale Priority Unit</span>
      <span className="px-2 py-0.5 rounded-full bg-accent text-white">Live Coverage</span>
      </div>
      {/* Overlapping Glass CTA Box */}
      <div className="w-full max-w-4xl bg-primary-dark/75 backdrop-blur-xl rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
      {/* Structural highlight edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent"></div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-8 space-y-4">
      <div className="flex items-center gap-2 text-secondary-hover uppercase tracking-widest">
      <Radar className="h-[14px] w-[14px]" />
      <span>A56 • A680 • A676 • Moorland &amp; Valley Response</span>
      </div>
      <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-white font-extrabold tracking-tight leading-none">
                    24/7 Mobile Tyre Fitting in <span className="text-secondary underline decoration-secondary/40 decoration-4 underline-offset-8">Haslingden</span>
      </h1>
      <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
                    Rapid roadside and rural tyre replacement across Rossendale. When moorland blowouts strike the bypass or cold weather sidelines your vehicle, our heavy-spec vans reach you directly.
                  </p>
      </div>
      {/* Dual Conversion Pillar */}
      <div className="lg:col-span-4 flex flex-col gap-3.5">
      <a className="group relative flex items-center justify-center gap-3 w-full py-4 px-6 rounded-full bg-secondary text-primary font-heading uppercase tracking-wider transition-all duration-300 hover:brightness-110 active:scale-95 shadow-xl shadow-primary-container/20" href="tel:08009992470">
      <PhoneCall className="font-black h-5 w-5 transition-transform group-hover:rotate-12" />
      <span className="font-extrabold text-lg">0800 999 2470</span>
      </a>
      <a className="flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-full bg-primary-light/70 text-white hover:bg-primary-light transition-colors duration-200 font-semibold" href="https://wa.me/448009992470" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="text-secondary h-5 w-5" />
      <span>WhatsApp Live Location</span>
      </a>
      <div className="flex items-center justify-between text-xs text-accent px-2 pt-1">
      <span className="flex items-center gap-1"><Timer className="h-3 w-3 text-secondary" /> Avg 25–45m Arrival</span>
      <span className="flex items-center gap-1"><ShieldCheck className="h-3 w-3 text-accent" /> Zero Tow Cost</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* EDITORIAL LOCAL NARRATIVE */}
      <section className="w-full bg-primary-dark py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      <div className="lg:col-span-5 relative">
      <div className="sticky top-12 space-y-6">
      <div className="inline-block px-3 py-1 rounded-full bg-accent text-white uppercase tracking-wider">
                    Rossendale Terrain Brief
                  </div>
      <h2 className="font-heading text-white text-3xl sm:text-4xl tracking-tight leading-tight">
                    Why waiting for a flatbed recovery on Haslingden&apos;s moors is a costly gamble.
                  </h2>
      <div className="w-20 h-1 bg-secondary rounded-full"></div>
      <p className="text-gray-400 leading-relaxed">
                    Between the sheer gradients of the Rossendale Valley and the high-speed transit sections of the A56, Haslingden sits at one of East Lancashire&apos;s most demanding automotive crossroads. Standard recovery lorries struggle with low clearance on tight stone lanes, and hours stuck on exposed moorlands expose families and couriers to hazardous conditions.
                  </p>
      </div>
      </div>
      <div className="lg:col-span-7 space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* Strategic Insight Card 1 */}
      <div className="bg-primary-dark p-6 rounded-2xl shadow-md">
      <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-secondary mb-4">
      <Mountain className="h-5 w-5" />
      </div>
      <h3 className="font-heading text-white mb-2">Severe Gradients &amp; Cold Damp Tarmac</h3>
      <p className="text-gray-400 leading-relaxed">
                      Haslingden’s position between Cribden Hill and the Grane Road (A6177) leaves roads prone to sudden black ice, sharp debris carry-over from farm access, and micro-punctures that deflate rapidly under downhill braking stress.
                    </p>
      </div>
      {/* Strategic Insight Card 2 */}
      <div className="bg-primary-dark p-6 rounded-2xl shadow-md">
      <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-accent mb-4">
      <Gauge className="h-5 w-5" />
      </div>
      <h3 className="font-heading text-white mb-2">The A56 High-Speed Corridor</h3>
      <p className="text-gray-400 leading-relaxed">
                      The dual carriageway bypass carries high volumes connecting the M66 to the M65. A stranded vehicle on narrow run-off strips demands rapid 30-minute intervention with certified amber-strobe roadside safety protocols.
                    </p>
      </div>
      </div>
      {/* Deep Narrative Quote Block */}
      <div className="bg-primary/60 p-8 rounded-2xl relative overflow-hidden">
      <div className="relative z-10 flex gap-4">
      <Wrench className="h-9 w-9 text-secondary shrink-0" />
      <div className="space-y-3">
      <h4 className="font-heading text-white">Self-Contained Roadside Tyre Workshops</h4>
      <p className="text-white leading-relaxed">
                        &quot;Our mobile vans do not tow you to a garage that is closed for the weekend. We carry high-precision pneumatic bead breakers, electronic dynamic wheel balancers, and a rolling cache of premium, mid-range, and commercial tyres right to your location. Whether you are at a standstill on the A680 Manchester Road or parked in a farm yard off Helmshore, the tyre is replaced and balanced on the spot.&quot;
                      </p>
      <div className="pt-2 flex items-center gap-3 text-xs text-gray-400">
      <span className="font-semibold text-secondary">Lancashire Mobile Fleet Operations</span>
      <span>•</span>
      <span>Unit 4 Valley Rapid Squad</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SERVICES: Fanned Stacked Photocard Mosaic (Not a plain grid) */}
      <section className="w-full bg-primary-dark py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
      <span className="uppercase tracking-widest text-secondary-hover">Tactical Capabilities</span>
      <h2 className="font-heading text-3xl sm:text-5xl text-white font-extrabold tracking-tight">
                Emergency Fitment Solutions On Demand
              </h2>
      <p className="text-gray-400">
                Equipped for passenger SUVs, performance low-profile setups, commercial transit vans, and agricultural support.
              </p>
      </div>
      {/* Fanned Dynamic Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
      {/* Card 1: Rotated -2deg */}
      <div className="group relative rounded-2xl bg-primary-dark overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 hover:z-20 md:-rotate-2">
      <div className="relative h-60 w-full overflow-hidden">
      <Image src="/gallery-precision-care.webp" alt="Emergency tyre replacement on UK roadway" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent"></div>
      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-white">
                    Critical Response
                  </span>
      </div>
      <div className="p-6 space-y-3">
      <div className="flex items-center gap-2">
      <AlertTriangle className="text-secondary h-5 w-5" />
      <h3 className="font-heading text-white">Emergency Replacement</h3>
      </div>
      <p className="text-gray-400">
                    Immediate supply &amp; mobile installation for blown, shredded, or kerbed sidewalls. Michelin, Goodyear, Pirelli, and budget variants in van stock.
                  </p>
      <ul className="pt-2 space-y-1.5 text-gray-400">
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>All rim sizes up to 24-inch</li>
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Run-flat certified equipment</li>
      </ul>
      </div>
      </div>
      {/* Card 2: Rotated 1.5deg */}
      <div className="group relative rounded-2xl bg-primary-dark overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 hover:z-20 md:rotate-[1.5deg] md:mt-4">
      <div className="relative h-60 w-full overflow-hidden">
      <Image src="/mobile-tyre-fitting-3-1536x1024.webp" alt="Tyre tread depth inspection gauge and puncture inspection" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent"></div>
      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary-light text-white">
                    BS AU 159 Compliant
                  </span>
      </div>
      <div className="p-6 space-y-3">
      <div className="flex items-center gap-2">
      <Wrench className="text-secondary h-5 w-5" />
      <h3 className="font-heading text-white">Puncture Repair</h3>
      </div>
      <p className="text-gray-400">
                    Strict British Standard internal rubber mushroom plug stem repairs. If safe and road-legal to salvage, we fix it and save you the cost of new rubber.
                  </p>
      <ul className="pt-2 space-y-1.5 text-gray-400">
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Full internal liner inspection</li>
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Fresh valve &amp; bead sealing</li>
      </ul>
      </div>
      </div>
      {/* Card 3: Rotated -1deg */}
      <div className="group relative rounded-2xl bg-primary-dark overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 hover:z-20 md:-rotate-1">
      <div className="relative h-60 w-full overflow-hidden">
      <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Specialist automotive mechanical impact extractor tool removing a damaged locking wheel nut from an alloy rim without scratches, high contrast dramatic workshop lighting, navy and metallic tones" style={{ backgroundImage: "url('/gallery-onsite-wheel-fitting.webp')" }}>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent"></div>
      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-secondary/20 text-secondary">
                    Zero Alloy Damage
                  </span>
      </div>
      <div className="p-6 space-y-3">
      <div className="flex items-center gap-2">
      <Unlock className="text-secondary h-5 w-5" />
      <h3 className="font-heading text-white">Locking Nut Removal</h3>
      </div>
      <p className="text-gray-400">
                    Lost the wheel key or rounded off a stubborn security bolt? Our reverse-thread impact extractors remove stripped locking nuts quickly without wheel damage.
                  </p>
      <ul className="pt-2 space-y-1.5 text-gray-400">
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>McGard &amp; spinning collar types</li>
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Replacement lug bolts fitted</li>
      </ul>
      </div>
      </div>
      {/* Card 4: Rotated 2deg */}
      <div className="group relative rounded-2xl bg-primary-dark overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 hover:z-20 md:rotate-2 md:mt-4">
      <div className="relative h-60 w-full overflow-hidden">
      <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Mobile tyre fitting van parked in a rural hillside farm driveway in Lancashire overlooking foggy moors, cold morning mist, yellow emergency lights glowing, rugged terrain vehicle support" style={{ backgroundImage: "url('/gallery-roadside-fitting.webp')" }}>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent"></div>
      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-white">
                    All Terrain
                  </span>
      </div>
      <div className="p-6 space-y-3">
      <div className="flex items-center gap-2">
      <Truck className="text-secondary h-5 w-5" />
      <h3 className="font-heading text-white">Driveway &amp; Rural Fitting</h3>
      </div>
      <p className="text-gray-400">
                    From Haslingden town center driveways to off-grid Rossendale farm tracks and quarry depots, our high-lift jacks and onboard generators operate anywhere.
                  </p>
      <ul className="pt-2 space-y-1.5 text-gray-400">
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Zero travel surcharge to home</li>
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Fleet &amp; commercial van capacity</li>
      </ul>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* ROADS & REGIONAL PANORAMIC RADAR */}
      <section className="w-full bg-primary-dark py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
      <div>
      <span className="uppercase tracking-widest text-secondary-hover">Immediate Sector Coverage</span>
      <h2 className="font-heading text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
                  Key Arteries &amp; Neighbouring Valley Environs
                </h2>
      </div>
      <div className="flex flex-wrap gap-2">
      <span className="px-3 py-1 rounded-full bg-primary/60 text-secondary font-bold">A56 Bypass Priority</span>
      <span className="px-3 py-1 rounded-full bg-primary/60 text-gray-400">A680 Manchester Rd</span>
      <span className="px-3 py-1 rounded-full bg-primary/60 text-gray-400">A676 Bolton Rd</span>
      </div>
      </div>
      {/* Large Interactive Panoramic Visual with Live Pulsing Pins */}
      <div className="relative w-full h-[520px] rounded-3xl overflow-hidden shadow-2xl bg-primary-dark">
      <div aria-label="Map perspective of Rossendale, Haslingden, and connecting A-roads" className="w-full h-full bg-cover bg-center" data-alt="Expansive panoramic view over the Rossendale valley landscape around Haslingden Lancashire showing winding highway roads, rolling green and misty moors, dramatic twilight sky, cinematic road mapping aesthetic" role="img" style={{ backgroundImage: "url('/gallery-home-callout.webp')" }}>
      </div>
      {/* Dark Tint Scrim */}
      <div className="absolute inset-0 bg-primary-dark/65"></div>
      {/* Overlaid Tactical Grid Decorator */}
      <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
      <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
      <path className="text-white" d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"></path>
      </pattern>
      </defs>
      <rect fill="url(#grid)" height="100%" width="100%"></rect>
      </svg>
      {/* Pulsing Map Pins */}
      {/* Center: Haslingden Hub */}
      <div className="absolute top-[48%] left-[48%] -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer">
      <div className="relative flex items-center justify-center">
      <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-secondary opacity-75"></span>
      <span className="relative inline-flex rounded-full h-6 w-6 bg-secondary items-center justify-center text-primary font-bold text-xs shadow-lg">H</span>
      </div>
      <div className="mt-2 bg-primary/80 backdrop-blur-md px-3 py-1 rounded-lg shadow-xl text-center">
      <p className="font-heading text-xs text-secondary font-black">HASLINGDEN HUB</p>
      <p className="text-[10px] text-white">Base Unit Standing By</p>
      </div>
      </div>
      {/* Pin: Rawtenstall */}
      <div className="absolute top-[32%] left-[68%] z-10">
      <div className="flex items-center gap-2 bg-primary/60 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-white/5 hover:border-secondary transition-all">
      <span className="w-2.5 h-2.5 rounded-full bg-accent"></span>
      <span className="text-xs text-white">Rawtenstall</span>
      <span className="text-[10px] text-secondary font-mono">6 min</span>
      </div>
      </div>
      {/* Pin: Accrington */}
      <div className="absolute top-[22%] left-[28%] z-10">
      <div className="flex items-center gap-2 bg-primary/60 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-white/5 hover:border-secondary transition-all">
      <span className="w-2.5 h-2.5 rounded-full bg-accent"></span>
      <span className="text-xs text-white">Accrington</span>
      <span className="text-[10px] text-secondary font-mono">11 min</span>
      </div>
      </div>
      {/* Pin: Helmshore */}
      <div className="absolute top-[68%] left-[40%] z-10">
      <div className="flex items-center gap-2 bg-primary/60 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-white/5 hover:border-secondary transition-all">
      <span className="w-2.5 h-2.5 rounded-full bg-accent"></span>
      <span className="text-xs text-white">Helmshore</span>
      <span className="text-[10px] text-secondary font-mono">4 min</span>
      </div>
      </div>
      {/* Pin: Ramsbottom */}
      <div className="absolute top-[80%] left-[58%] z-10">
      <div className="flex items-center gap-2 bg-primary/60 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-white/5 hover:border-secondary transition-all">
      <span className="w-2.5 h-2.5 rounded-full bg-accent"></span>
      <span className="text-xs text-white">Ramsbottom</span>
      <span className="text-[10px] text-secondary font-mono">9 min</span>
      </div>
      </div>
      {/* Pin: Edenfield */}
      <div className="absolute top-[65%] left-[72%] z-10">
      <div className="flex items-center gap-2 bg-primary/60 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-white/5 hover:border-secondary transition-all">
      <span className="w-2.5 h-2.5 rounded-full bg-accent"></span>
      <span className="text-xs text-white">Edenfield</span>
      <span className="text-[10px] text-secondary font-mono">7 min</span>
      </div>
      </div>
      {/* Floating Roadway Indicators */}
      <div className="absolute bottom-6 left-6 right-6 flex flex-wrap justify-between items-center gap-4 bg-primary/80 backdrop-blur-lg p-4 rounded-2xl">
      <div className="flex items-center gap-6">
      <div>
      <div className="text-[10px] text-gray-400 uppercase tracking-wider">Major Link</div>
      <div className="font-heading text-secondary">A56 Bypass</div>
      </div>
      <div className="h-8 w-px bg-white/10"></div>
      <div>
      <div className="text-[10px] text-gray-400 uppercase tracking-wider">Moorland Artery</div>
      <div className="font-heading text-white">B6232 Grane Rd</div>
      </div>
      <div className="h-8 w-px bg-white/10 hidden sm:block"></div>
      <div className="hidden sm:block">
      <div className="text-[10px] text-gray-400 uppercase tracking-wider">Valley Connector</div>
      <div className="font-heading text-white">A680 / A676</div>
      </div>
      </div>
      <a className="px-5 py-2.5 rounded-full bg-secondary text-primary font-heading text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2" href="tel:08009992470">
      <Navigation className="h-[14px] w-[14px]" />
      <span>Request Roadside Van</span>
      </a>
      </div>
      </div>
      </div>
      </section>
      {/* HOW IT WORKS: Curved / Wavy Path Progression */}
      <section className="w-full bg-primary-dark py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
      <span className="uppercase tracking-widest text-secondary-hover">Zero Wait Bureaucracy</span>
      <h2 className="font-heading text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
                How Haslingden Rapid Dispatch Works
              </h2>
      <p className="text-gray-400">Straight from roadside distress call to balanced wheel in 5 clear milestones.</p>
      </div>
      <div className="relative">
      {/* SVG Curved Continuous Connecting Track (Desktop) */}
      <div className="hidden lg:block absolute top-16 left-0 right-0 w-full h-24 pointer-events-none z-0">
      <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1200 100">
      <path className="text-secondary/30" d="M 50,50 C 200,90 400,10 600,50 C 800,90 1000,10 1150,50" stroke="currentColor" stroke-dasharray="6 6" strokeWidth="3"></path>
      </svg>
      </div>
      {/* 5 Numbered Stages */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
      {/* Node 1 */}
      <div className="bg-primary/60 p-6 rounded-2xl shadow-xl flex flex-col items-center text-center space-y-3 relative group hover:-translate-y-1 transition-transform">
      <div className="w-12 h-12 rounded-full bg-secondary text-primary font-heading flex items-center justify-center shadow-lg font-black">
                    1
                  </div>
      <span className="text-accent uppercase tracking-wider">Instant Contact</span>
      <h3 className="font-heading text-white">Call or WhatsApp</h3>
      <p className="text-gray-400">
                    Dial our 24/7 desk or send your What3Words/pin. Give us your tyre size or vehicle registration.
                  </p>
      </div>
      {/* Node 2 */}
      <div className="bg-primary/60 p-6 rounded-2xl shadow-xl flex flex-col items-center text-center space-y-3 relative group hover:-translate-y-1 transition-transform">
      <div className="w-12 h-12 rounded-full bg-primary-light text-white font-heading flex items-center justify-center shadow-lg font-black">
                    2
                  </div>
      <span className="text-accent uppercase tracking-wider">Guaranteed Stock</span>
      <h3 className="font-heading text-white">Van Allocated</h3>
      <p className="text-gray-400">
                    The correct tyre is mounted into our mobile tyre rig. We confirm price and precise live ETA.
                  </p>
      </div>
      {/* Node 3 */}
      <div className="bg-primary/60 p-6 rounded-2xl shadow-xl flex flex-col items-center text-center space-y-3 relative group hover:-translate-y-1 transition-transform">
      <div className="w-12 h-12 rounded-full bg-accent text-white font-heading flex items-center justify-center shadow-lg font-black">
                    3
                  </div>
      <span className="text-accent uppercase tracking-wider">Fast Transit</span>
      <h3 className="font-heading text-white">Direct Arrival</h3>
      <p className="text-gray-400">
                    Our technician reaches your location on the A56, driveway, or workplace with high-visibility lighting.
                  </p>
      </div>
      {/* Node 4 */}
      <div className="bg-primary/60 p-6 rounded-2xl shadow-xl flex flex-col items-center text-center space-y-3 relative group hover:-translate-y-1 transition-transform">
      <div className="w-12 h-12 rounded-full bg-primary-light text-white font-heading flex items-center justify-center shadow-lg font-black">
                    4
                  </div>
      <span className="text-accent uppercase tracking-wider">Workshop Fitting</span>
      <h3 className="font-heading text-white">Fitted &amp; Balanced</h3>
      <p className="text-gray-400">
                    Bead broken, old tyre stripped, new tyre mounted, digital balance, new valve, and calibrated torque check.
                  </p>
      </div>
      {/* Node 5 */}
      <div className="bg-primary/60 p-6 rounded-2xl shadow-xl flex flex-col items-center text-center space-y-3 relative group hover:-translate-y-1 transition-transform">
      <div className="w-12 h-12 rounded-full bg-secondary text-primary font-heading flex items-center justify-center shadow-lg font-black">
                    5
                  </div>
      <span className="text-accent uppercase tracking-wider">Hassle Free</span>
      <h3 className="font-heading text-white">Drive Away</h3>
      <p className="text-gray-400">
                    Tap to pay via mobile contactless card reader. Old tyre taken away for environmentally certified recycling.
                  </p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* REAL LOCAL JOB EXAMPLE: Overlapping Card Pattern */}
      <section className="w-full bg-primary-dark py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-primary-dark">
      {/* Large Background Job Scene Photo */}
      <div className="relative h-[480px] lg:h-[580px] w-full">
      <div aria-label="Land Rover roadside tyre service on A56 Haslingden" className="w-full h-full bg-cover bg-center" data-alt="Modern dark gray Land Rover Discovery parked safely on the side of a wet twilight highway A-road in Northern England while an emergency tyre repair van technician works on the rear alloy wheel with tools illuminated by warm spotlights" role="img" style={{ backgroundImage: "url('/gallery-evening-callout.webp')" }}>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent"></div>
      </div>
      {/* Asymmetric Overlapping Case File Overlay Card */}
      <div className="relative lg:absolute lg:bottom-8 lg:right-8 lg:max-w-xl -mt-24 lg:mt-0 m-4 z-20">
      <div className="bg-primary/60 backdrop-blur-xl p-8 rounded-3xl shadow-2xl space-y-5 border border-white/10">
      <div className="flex items-center justify-between">
      <span className="px-3 py-1 rounded-full bg-accent text-white uppercase tracking-wider">
                      Recent Incident Report
                    </span>
      <span className="text-secondary font-mono">Case #HSL-8842</span>
      </div>
      <div className="space-y-1">
      <h3 className="font-heading text-white text-2xl font-bold">
                      A56 Haslingden Bypass (Northbound Slip)
                    </h3>
      <p className="text-accent">
                      Vehicle: Land Rover Discovery Sport • 20:45 Evening Response
                    </p>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-2">
      <div className="bg-primary-dark p-3.5 rounded-xl">
      <span className="text-xs text-gray-400 block">Issue Diagnosed</span>
      <span className="font-heading text-sm text-white">Puncture (Pothole Rim Pinch)</span>
      </div>
      <div className="bg-primary-dark p-3.5 rounded-xl">
      <span className="text-xs text-gray-400 block">Tyre Fitted</span>
      <span className="font-heading text-sm text-secondary">255/55 R19 All-Terrain</span>
      </div>
      <div className="bg-primary-dark p-3.5 rounded-xl">
      <span className="text-xs text-gray-400 block">Response Time</span>
      <span className="font-heading text-sm text-accent">26 Minutes from Call</span>
      </div>
      <div className="bg-primary-dark p-3.5 rounded-xl">
      <span className="text-xs text-gray-400 block">Outcome</span>
      <span className="font-heading text-sm text-white">Torqued &amp; Cleared Road</span>
      </div>
      </div>
      <p className="text-gray-400 italic">
                    &quot;Driver struck sharp aggregate washed down from the high embankment in heavy rain. Our Rossendale mobile unit arrived in under half an hour, preventing a secondary collision on an unlit bypass stretch.&quot;
                  </p>
      <div className="pt-2 flex items-center justify-between border-t border-white/10">
      <span className="text-xs text-gray-400">Verified Callout Log • Lancashire Dispatch</span>
      <a className="text-secondary hover:underline text-xs font-bold inline-flex items-center gap-1" href="tel:08009992470">
                      Emergency Line <ArrowRight className="h-3 w-3" />
      </a>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* FAQS ACCORDION */}
      <section className="w-full bg-primary-dark py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 space-y-2">
      <span className="uppercase tracking-widest text-secondary-hover">Need Answers Now?</span>
      <h2 className="font-heading text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
                Haslingden Mobile Tyre FAQs
              </h2>
      </div>
      <div className="space-y-4" id="faq-container">
      {/* FAQ 1 */}
      <details className="group bg-primary-dark rounded-2xl overflow-hidden transition-all duration-200 open:bg-primary/60">
      <summary className="flex justify-between items-center p-6 cursor-pointer list-none select-none">
      <span className="font-heading text-white text-base sm:text-lg">How quickly can your tyre van reach me in Haslingden during bad weather?</span>
      <ChevronDown className="text-secondary transition-transform group-open:rotate-180 h-5 w-5" />
      </summary>
      <div className="px-6 pb-6 pt-2 text-gray-400 leading-relaxed border-t border-white/5">
                  Our Lancashire patrol vehicles are strategically positioned near major arteries including the A56 and A680 corridor. Even in icy conditions, heavy Rossendale rains, or peak congestion, our average arrival timeframe remains between 25 and 45 minutes across Haslingden, Helmshore, and Rawtenstall.
                </div>
      </details>
      {/* FAQ 2 */}
      <details className="group bg-primary-dark rounded-2xl overflow-hidden transition-all duration-200 open:bg-primary/60">
      <summary className="flex justify-between items-center p-6 cursor-pointer list-none select-none">
      <span className="font-heading text-white text-base sm:text-lg">Can your vans access remote moorland roads or tight farm tracks?</span>
      <ChevronDown className="text-secondary transition-transform group-open:rotate-180 h-5 w-5" />
      </summary>
      <div className="px-6 pb-6 pt-2 text-gray-400 leading-relaxed border-t border-white/5">
                  Yes. Our Mercedes Sprinter and Ford Transit custom workshops are engineered with high ground clearance, heavy-duty suspension, and auxiliary scene floodlighting. Whether you are stuck down an unpaved lane off Grane Road or in an agricultural yard, we get our equipment alongside your wheels safely.
                </div>
      </details>
      {/* FAQ 3 */}
      <details className="group bg-primary-dark rounded-2xl overflow-hidden transition-all duration-200 open:bg-primary/60">
      <summary className="flex justify-between items-center p-6 cursor-pointer list-none select-none">
      <span className="font-heading text-white text-base sm:text-lg">What if I do not have the locking wheel nut key?</span>
      <ChevronDown className="text-secondary transition-transform group-open:rotate-180 h-5 w-5" />
      </summary>
      <div className="px-6 pb-6 pt-2 text-gray-400 leading-relaxed border-t border-white/5">
                  Do not worry. Every mobile tyre technician carries specialized reverse-threaded extraction tools and hydraulic induction kit. We can safely remove broken, over-torqued, or missing-key locking wheel nuts from all premium alloy wheels without leaving scratches.
                </div>
      </details>
      {/* FAQ 4 */}
      <details className="group bg-primary-dark rounded-2xl overflow-hidden transition-all duration-200 open:bg-primary/60">
      <summary className="flex justify-between items-center p-6 cursor-pointer list-none select-none">
      <span className="font-heading text-white text-base sm:text-lg">How do I pay on the roadside?</span>
      <ChevronDown className="text-secondary transition-transform group-open:rotate-180 h-5 w-5" />
      </summary>
      <div className="px-6 pb-6 pt-2 text-gray-400 leading-relaxed border-t border-white/5">
                  All technicians carry secure mobile POS terminals that accept all major debit/credit cards, Apple Pay, Google Pay, and business fleet accounts. No cash is required, and full digital VAT receipts are issued to your phone or email instantly on site.
                </div>
      </details>
      </div>
      </div>
      </section>
      {/* RELATED NEARBY LOCATIONS */}
      <section className="w-full bg-primary-dark py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="border-t border-white/10 pt-12">
      <h4 className="text-gray-400 uppercase tracking-wider mb-6 text-center">
                Neighbouring Mobile Tyre Coverage Nodes
              </h4>
      <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6">
      <a className="px-5 py-2.5 rounded-full bg-primary/60 hover:bg-primary-light transition-colors text-white" href="#">
                  Mobile Tyre Fitting Rawtenstall
                </a>
      <a className="px-5 py-2.5 rounded-full bg-primary/60 hover:bg-primary-light transition-colors text-white" href="#">
                  Mobile Tyre Fitting Accrington
                </a>
      <a className="px-5 py-2.5 rounded-full bg-primary/60 hover:bg-primary-light transition-colors text-white" href="#">
                  Mobile Tyre Fitting Ramsbottom
                </a>
      <a className="px-5 py-2.5 rounded-full bg-primary/60 hover:bg-primary-light transition-colors text-white" href="#">
                  Mobile Tyre Fitting Helmshore
                </a>
      <a className="px-5 py-2.5 rounded-full bg-primary/80 hover:bg-secondary hover:text-primary transition-all text-secondary-hover" href="#">
                  Mobile Tyre Fitting Lancashire Network →
                </a>
      </div>
      </div>
      </div>
      </section>
      {/* FINAL CTA: Full-Bleed Dramatic Hero with Angled Pill Button */}
      <section className="relative w-full overflow-hidden bg-primary-dark py-24 sm:py-32 flex items-center justify-center">
      {/* Atmospheric Photo Background */}
      <div className="absolute inset-0 z-0 opacity-40">
      <div aria-label="Emergency response van ready for dispatch on wet highway" className="w-full h-full bg-cover bg-center" role="img" style={{ backgroundImage: "url('/gallery-evening-home-visit.webp')" }}>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/90 to-primary-dark"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-light/80 backdrop-blur-md">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span className="text-white uppercase tracking-widest">Available 24 Hours • 365 Days</span>
      </div>
      <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
              Stranded with a flat tyre in Haslingden?
            </h2>
      <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
              Speak directly with our local Rossendale dispatcher. We locate your exact breakdown coordinates and deploy our closest mobile tyre fitting unit right now.
            </p>
      {/* Offset / Angled Gold Action Button */}
      <div className="pt-6 flex flex-col sm:flex-row justify-center items-center gap-5">
      <a className="group transform -rotate-1 hover:rotate-0 transition-transform duration-300 inline-flex items-center justify-center gap-4 py-5 px-10 rounded-full bg-secondary text-primary shadow-2xl shadow-primary-container/30 hover:brightness-110 active:scale-95" href="tel:08009992470">
      <PhoneCall className="h-[30px] w-[30px] font-black transition-transform group-hover:scale-110" />
      <div className="text-left">
      <span className="block text-[11px] font-bold tracking-widest uppercase text-primary">24/7 Fast Response Dispatch</span>
      <span className="block font-heading text-2xl sm:text-3xl font-black leading-none">0800 999 2470</span>
      </div>
      </a>
      <a className="inline-flex items-center justify-center gap-3 py-4 px-8 rounded-full bg-primary/80 text-white font-bold hover:bg-primary-light transition-colors shadow-lg" href="https://wa.me/448009992470" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="text-secondary h-5 w-5" />
      <span>Send Location via WhatsApp</span>
      </a>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 pt-4 text-xs text-gray-400 uppercase tracking-wider">
      <span className="flex items-center gap-1.5"><CheckCircle2 className="h-[14px] w-[14px] text-secondary" /> No Memberships Needed</span>
      <span className="flex items-center gap-1.5"><CheckCircle2 className="h-[14px] w-[14px] text-secondary" /> New Tyres in Van Stock</span>
      <span className="flex items-center gap-1.5"><CheckCircle2 className="h-[14px] w-[14px] text-secondary" /> All Weather Roadside &amp; Home</span>
      </div>
      </div>
      </section>
    </main>
  );
}
