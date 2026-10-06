import Image from "next/image";
import { ArrowRight, CircleDot, Clock, Disc, Gauge, HardHat, HelpCircle, MapPin, MessageCircle, PhoneCall, ShieldCheck, Timer, Truck, Zap } from "lucide-react";

export default function PrestonPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* 1. HERO: Cinematic Frame Hero */}
      <section className="relative w-full px-space-md lg:px-margin pt-space-md lg:pt-space-lg">
      <div className="relative w-full aspect-[16/10] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl bg-primary-dark">
      {/* Background Image with Scrim */}
      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105" data-alt="Emergency motorway tyre fitting van with amber strobe flashing beacons parked on the hard shoulder of the UK M6 near Preston at dusk, technician servicing a stranded car in rain-slicked asphalt with high-contrast safety lighting, deep cinematic blue hour atmosphere." style={{ backgroundImage: "url('/hero-section-images-936x527.webp')" }}>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/60 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/40 to-transparent"></div>
      {/* Inset Gold Border Overlay (Cinematic Letterbox Framing) */}
      <div className="absolute inset-3 md:inset-6 rounded-xl pointer-events-none shadow-[0_0_0_1px_rgba(255,215,0,0.35)]"></div>
      {/* Live Dispatch Status Chip (Top-Left) */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 z-10 flex items-center space-x-2">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold tracking-widest uppercase shadow-md">
      <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                Preston Corridor Live Units (M6 / M55)
              </span>
      </div>
      {/* Hero Typography & Direct Callouts (Bottom/Lower Third) */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-12 z-10 flex flex-col justify-end max-w-5xl">
      <div className="space-y-3">
      <div className="flex items-center space-x-2 text-secondary-hover">
      <Zap className="h-[20px] w-[20px]" fill="currentColor" strokeWidth={0} />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider text-secondary">Lancashire Rapid Dispatch Hub • 15-45 Min ETA</span>
      </div>
      <h1 className="font-heading text-[36px] leading-[42px] tracking-[-0.01em] font-black md:text-[56px] md:leading-[64px] md:tracking-[-0.02em] md:font-black text-white uppercase drop-shadow-md">
                  24/7 Mobile Tyre Fitting <br className="hidden sm:inline"/>
      in <span className="text-secondary">Preston</span>
      </h1>
      <p className="text-[15px] leading-[24px] md:text-[18px] md:leading-[28px] text-gray-300 max-w-2xl text-shadow">
                  Lancashire&apos;s mission-critical breakdown network. Instant roadside response, precision fleet tyre replacement, and motorway puncture recovery across M6, M55, M65, and Preston bypasses.
                </p>
      </div>
      {/* Floating CTAs */}
      <div className="mt-6 flex flex-wrap items-center gap-4">
      <a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider hover:bg-secondary-hover active:scale-95 transition-all shadow-xl hover:shadow-primary-container/20" href="tel:07955266077">
      <PhoneCall className="h-5 w-5" fill="currentColor" strokeWidth={0} />
      <span>07955 266 077</span>
      </a>
      <a className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-primary/80 backdrop-blur-md text-white hover:text-secondary hover:bg-primary-light active:scale-95 transition-all" href="https://wa.me/448009992470" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="text-accent h-5 w-5" fill="currentColor" strokeWidth={0} />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold">WhatsApp Technician</span>
      </a>
      <div className="hidden lg:flex items-center gap-2 pl-4 text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <ShieldCheck className="text-secondary h-4 w-4" />
      <span>No Membership Required • Guaranteed Fitting</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 2. LOCAL INTRO: Strategic Junction Analysis */}
      <section className="w-full px-space-md lg:px-margin py-space-xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-7 space-y-4">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/80 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">
      <CircleDot className="h-[14px] w-[14px]" />
                North West Transport Arteries
              </div>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">
                Preston&apos;s Critical Multi-Motorway Nexus
              </h2>
      <p className="text-[15px] leading-[24px] text-gray-400">
                Preston anchors the North West’s most vital haulage and commuter crossroads. Bridging the severe freight flow of the <strong className="text-white font-semibold">M6 (Junctions 29 through 32)</strong>, the high-speed coastal flow of the <strong className="text-white font-semibold">M55 toward Blackpool</strong>, and direct cross-county connections on the <strong className="text-white font-semibold">M65, A6, and A59</strong>, a tyre blowout here risks total standstill.
              </p>
      <p className="text-[15px] leading-[24px] text-gray-400">
                Whether you are stranded with a high-load blowout on a commercial Luton van at the Broughton interchange, or facing a sharp puncture during the rush-hour commute on the Penwortham bypass, our self-sufficient mobile workshops arrive equipped with heavy-duty bead breakers, digital balancing units, and instant OEM-grade replacement inventory.
              </p>
      </div>
      <div className="lg:col-span-5 grid grid-cols-2 gap-4">
      <div className="p-6 rounded-2xl bg-primary/60 backdrop-blur-md shadow-lg flex flex-col justify-between space-y-3">
      <div className="flex items-center justify-between">
      <Timer className="text-secondary h-[30px] w-[30px]" />
      <span className="px-2 py-0.5 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">Live</span>
      </div>
      <div>
      <div className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">28m</div>
      <div className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-gray-400">Average M6/M55 Response</div>
      </div>
      </div>
      <div className="p-6 rounded-2xl bg-primary/60 backdrop-blur-md shadow-lg flex flex-col justify-between space-y-3">
      <div className="flex items-center justify-between">
      <Truck className="text-secondary h-[30px] w-[30px]" />
      <span className="px-2 py-0.5 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">Stock</span>
      </div>
      <div>
      <div className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">3,500+</div>
      <div className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-gray-400">Premium &amp; Budget Tyres</div>
      </div>
      </div>
      <div className="p-6 rounded-2xl bg-primary/60 backdrop-blur-md shadow-lg flex flex-col justify-between space-y-3">
      <div className="flex items-center justify-between">
      <HardHat className="text-secondary h-[30px] w-[30px]" />
      <span className="px-2 py-0.5 rounded-full bg-primary-light text-gray-300 text-[11px] leading-[14px] tracking-[0.06em] font-bold">24/7</span>
      </div>
      <div>
      <div className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">100%</div>
      <div className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-gray-400">Roadside Certified Vans</div>
      </div>
      </div>
      <div className="p-6 rounded-2xl bg-primary/60 backdrop-blur-md shadow-lg flex flex-col justify-between space-y-3">
      <div className="flex items-center justify-between">
      <ShieldCheck className="text-secondary h-[30px] w-[30px]" />
      <span className="px-2 py-0.5 rounded-full bg-secondary text-primary text-[11px] leading-[14px] tracking-[0.06em] font-bold">Safe</span>
      </div>
      <div>
      <div className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">Zero</div>
      <div className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-gray-400">Hard Shoulder Risk Delay</div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 3. SERVICES: Poster Cards Showcase */}
      <section className="w-full px-space-md lg:px-margin py-space-xl bg-primary-dark">
      <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-accent">Deployment Tiers</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white mt-1">Specialized Emergency Services</h2>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400 max-w-md">
                Heavy commercial support, high-performance car tyres, puncture repairs, and lock-nut extractions fitted at your breakdown coordinates.
              </p>
      </div>
      {/* Horizontal Movie-Poster Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Poster 1: Roadside & Motorway Fitting */}
      <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-primary/60">
      <Image src="/gallery-precision-care.webp" alt="Automotive mobile tyre technician in hi-vis vest using impact wrench on an alloy wheel at the roadside in UK" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent"></div>
      <div className="absolute top-4 left-4">
      <span className="px-3 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">Rapid Roadside</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5 space-y-1">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white group-hover:text-secondary transition-colors">Motorway Puncture Dispatch</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 line-clamp-2">Urgent deployment to M6, M55, and M65 hard shoulders and emergency laybys with safety flare lighting.</p>
      </div>
      </div>
      {/* Poster 2: Mobile Fleet & Commercial Vans */}
      <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-primary/60">
      <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Interior of a heavy-duty Mercedes Sprinter mobile tyre service van parked beside a commercial delivery truck, showing tyre racks, industrial air compressor, and tyre changer unit lit with bright interior LED spotlights at night." style={{ backgroundImage: "url('/gallery-onsite-wheel-fitting.webp')" }}>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent"></div>
      <div className="absolute top-4 left-4">
      <span className="px-3 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">Commercial Vans</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5 space-y-1">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white group-hover:text-secondary transition-colors">Van &amp; Fleet Logistics</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 line-clamp-2">Heavy 8-ply load-rated commercial tyres swapped on-site for Amazon couriers, trade transit vans, and delivery fleets.</p>
      </div>
      </div>
      {/* Poster 3: Precision Tread & Brand Upgrades */}
      <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-primary/60">
      <Image src="/mobile-tyre-fitting-3-1536x1024.webp" alt="Brand new car tyre tread close up with technician inspection gauge" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent"></div>
      <div className="absolute top-4 left-4">
      <span className="px-3 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">Same-Day Supply</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5 space-y-1">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white group-hover:text-secondary transition-colors">Run-Flat &amp; Premium Fit</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 line-clamp-2">Michelin, Pirelli, Continental, and Bridgestone performance tyres mounted and dynamically laser-balanced on the spot.</p>
      </div>
      </div>
      {/* Poster 4: Home & Driveway Fitting */}
      <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-primary/60">
      <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Modern mobile tyre fitting van stationed outside a residential brick driveway in Preston Lancashire on a misty morning, technician carefully torquing alloy wheel lug nuts on an SUV." style={{ backgroundImage: "url('/gallery-roadside-fitting.webp')" }}>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent"></div>
      <div className="absolute top-4 left-4">
      <span className="px-3 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">Driveway &amp; Work</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5 space-y-1">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white group-hover:text-secondary transition-colors">Home &amp; Office Appointments</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 line-clamp-2">Skip the garage queue. We come direct to your residence, business park, or university campus across Preston.</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 4. ROADS & NEARBY AREAS: Letterboxed Cinematic Strip with Floating Glass Pills */}
      <section className="relative w-full px-space-md lg:px-margin py-space-xl">
      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative shadow-2xl bg-primary-dark">
      {/* Letterbox Background Image */}
      <div className="w-full h-96 lg:h-[420px] bg-cover bg-center opacity-40 mix-blend-luminosity" data-alt="Night aerial view of the Preston M6 and M55 interchange illuminated by long-exposure motorway car headlights and sweeping Lancashire infrastructure curves under deep blue night skies." style={{ backgroundImage: "url('/gallery-home-callout.webp')" }}>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/80 to-primary-dark/60"></div>
      {/* Content Container */}
      <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-center max-w-4xl space-y-6">
      <div>
      <span className="px-3 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">Covering Every Route</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white mt-2">Corridors &amp; Regional Lancashire Zones</h2>
      <p className="text-[15px] leading-[24px] text-gray-300 max-w-2xl mt-1">
                  Strategically stationed near M6 Junction 31 and the Broughton Bypass to guarantee under 45-minute arrival across Central Lancashire.
                </p>
      </div>
      {/* Floating Glassmorphism Road Badges */}
      <div className="space-y-3">
      <div className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider">Primary Expressways</div>
      <div className="flex flex-wrap gap-2.5">
      <span className="px-4 py-2 rounded-full bg-primary/80 backdrop-blur-md text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center gap-2 shadow-md">
      <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span> M6 (J29 - J32)
                  </span>
      <span className="px-4 py-2 rounded-full bg-primary/80 backdrop-blur-md text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center gap-2 shadow-md">
      <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span> M55 (Blackpool Link)
                  </span>
      <span className="px-4 py-2 rounded-full bg-primary/80 backdrop-blur-md text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center gap-2 shadow-md">
      <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span> M65 (East Lancs Arterial)
                  </span>
      <span className="px-4 py-2 rounded-full bg-primary/80 backdrop-blur-md text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center gap-2 shadow-md">
      <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span> A6 Preston Bypass
                  </span>
      <span className="px-4 py-2 rounded-full bg-primary/80 backdrop-blur-md text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center gap-2 shadow-md">
      <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span> A59 Guild Way
                  </span>
      </div>
      </div>
      {/* Nearby Towns Covered */}
      <div className="space-y-3 pt-2">
      <div className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-wider">Rapid Coverage Towns</div>
      <div className="flex flex-wrap gap-2">
      <span className="px-3.5 py-1.5 rounded-full bg-primary/60 backdrop-blur-sm text-white text-[13px] leading-[18px] shadow-sm">Leyland</span>
      <span className="px-3.5 py-1.5 rounded-full bg-primary/60 backdrop-blur-sm text-white text-[13px] leading-[18px] shadow-sm">Chorley</span>
      <span className="px-3.5 py-1.5 rounded-full bg-primary/60 backdrop-blur-sm text-white text-[13px] leading-[18px] shadow-sm">Bamber Bridge</span>
      <span className="px-3.5 py-1.5 rounded-full bg-primary/60 backdrop-blur-sm text-white text-[13px] leading-[18px] shadow-sm">Fulwood</span>
      <span className="px-3.5 py-1.5 rounded-full bg-primary/60 backdrop-blur-sm text-white text-[13px] leading-[18px] shadow-sm">Walton-le-Dale</span>
      <span className="px-3.5 py-1.5 rounded-full bg-primary/60 backdrop-blur-sm text-white text-[13px] leading-[18px] shadow-sm">Penwortham</span>
      <span className="px-3.5 py-1.5 rounded-full bg-primary/60 backdrop-blur-sm text-white text-[13px] leading-[18px] shadow-sm">Ashton-on-Ribble</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 5. HOW IT WORKS: 5 Photo Tiles Connected by a Gold Line */}
      <section className="w-full px-space-md lg:px-margin py-space-xl bg-primary/60">
      <div className="max-w-7xl mx-auto space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-2">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary">Straightforward Protocol</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">How Our Dispatch Operates</h2>
      <p className="text-[15px] leading-[24px] text-gray-400">From first phone call to complete road-ready torque, streamlined for high-pressure roadside safety.</p>
      </div>
      {/* 5-Step Process with Continuous Gold Line */}
      <div className="relative">
      {/* Connecting Gold Line (Desktop) */}
      <div className="hidden lg:block absolute top-1/3 left-12 right-12 h-0.5 bg-secondary/40 z-0"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
      {/* Step 1 */}
      <div className="p-5 rounded-2xl bg-primary/80 backdrop-blur-md shadow-xl flex flex-col items-center text-center space-y-4">
      <div className="w-12 h-12 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center shadow-lg">
                    01
                  </div>
      <div className="space-y-1">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Call or WhatsApp</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Confirm your vehicle registration, tyre dimensions, and exact breakdown pin.</p>
      </div>
      </div>
      {/* Step 2 */}
      <div className="p-5 rounded-2xl bg-primary/80 backdrop-blur-md shadow-xl flex flex-col items-center text-center space-y-4">
      <div className="w-12 h-12 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center shadow-lg">
                    02
                  </div>
      <div className="space-y-1">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Instant Sourcing</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">We match your exact OEM specification from our Preston rapid-dispatch depot.</p>
      </div>
      </div>
      {/* Step 3 */}
      <div className="p-5 rounded-2xl bg-primary/80 backdrop-blur-md shadow-xl flex flex-col items-center text-center space-y-4">
      <div className="w-12 h-12 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center shadow-lg">
                    03
                  </div>
      <div className="space-y-1">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Van En Route</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Live technician tracking shared to your phone with accurate M6/M55 ETA.</p>
      </div>
      </div>
      {/* Step 4 */}
      <div className="p-5 rounded-2xl bg-primary/80 backdrop-blur-md shadow-xl flex flex-col items-center text-center space-y-4">
      <div className="w-12 h-12 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center shadow-lg">
                    04
                  </div>
      <div className="space-y-1">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Precision Fitment</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Demount, fresh valve, tyre replacement, laser balancing, and torque calibrated to spec.</p>
      </div>
      </div>
      {/* Step 5 */}
      <div className="p-5 rounded-2xl bg-primary/80 backdrop-blur-md shadow-xl flex flex-col items-center text-center space-y-4">
      <div className="w-12 h-12 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center shadow-lg">
                    05
                  </div>
      <div className="space-y-1">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Back on the Road</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Contactless roadside card payment and direct electronic invoice emailed to you.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 6. REAL LOCAL JOB: Spotlight Card */}
      <section className="w-full px-space-md lg:px-margin py-space-xl">
      <div className="max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-primary-dark">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
      {/* Large Context Photography */}
      <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-full">
      <div className="w-full h-full bg-cover bg-center" data-alt="Night motorway emergency scene at M6 Junction 32 Broughton Interchange near Preston, amber safety strobes glowing on wet tarmac, modern Mercedes saloon car jacked up with technician fitting a new tyre." style={{ backgroundImage: "url('/gallery-evening-callout.webp')" }}>
      </div>
      <div className="absolute top-4 left-4">
      <span className="px-3.5 py-1.5 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider flex items-center gap-1.5">
      <CircleDot className="h-3 w-3" /> Real Preston Dispatch
                    </span>
      </div>
      </div>
      {/* Frosted Text Panel Sliding Over Edge */}
      <div className="lg:col-span-5 bg-primary/80 backdrop-blur-xl p-8 lg:p-12 flex flex-col justify-between space-y-6">
      <div className="space-y-4">
      <div className="flex items-center justify-between text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <span>INCIDENT LOG #PR-8924</span>
      <span className="text-secondary font-semibold">RESOLVED: 24 MINS</span>
      </div>
      <h3 className="font-heading text-[30px] leading-[38px] font-bold text-white">
                      Motorway Intervention: Mercedes E-Class at M6 Broughton
                    </h3>
      <div className="space-y-2">
      <div className="flex items-center gap-3 text-gray-300 text-[13px] leading-[18px]">
      <MapPin className="text-secondary h-[18px] w-[18px]" />
      <span>M6 Northbound slip toward M55 (J32 Broughton)</span>
      </div>
      <div className="flex items-center gap-3 text-gray-300 text-[13px] leading-[18px]">
      <Disc className="text-secondary h-[18px] w-[18px]" />
      <span>Fitted: 245/40 R19 Continental SportContact 7 (Run-Flat)</span>
      </div>
      <div className="flex items-center gap-3 text-gray-300 text-[13px] leading-[18px]">
      <Clock className="text-secondary h-[18px] w-[18px]" />
      <span>Driver safely resumed trip to Lake District within 38 mins total</span>
      </div>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400 italic">
                      “Severely damaged sidewall on an unlit section of the junction slipway. The technician was on site with high-visibility vehicle lights in under 20 minutes and fitted the run-flat smoothly without any alloy scratching.”
                    </p>
      </div>
      <div className="pt-4 flex items-center justify-between border-t border-primary-light/50">
      <div className="flex items-center gap-2">
      <Gauge className="text-secondary h-[14px] w-[14px]" />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Precision Laser Balanced</span>
      </div>
      <a className="inline-flex items-center gap-1.5 text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold hover:underline" href="tel:07955266077">
                      Call for Assistance <ArrowRight className="h-4 w-4" />
      </a>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 7. FAQS: Preston Motorway & Fleet Operations Grid */}
      <section className="w-full px-space-md lg:px-margin py-space-xl bg-primary-dark">
      <div className="max-w-7xl mx-auto space-y-10">
      <div className="space-y-2">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-accent">Frequently Asked Questions</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">Preston Breakdown Guidance</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Q1 */}
      <div className="p-6 rounded-2xl bg-primary/60 backdrop-blur-md shadow-lg space-y-2">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-start gap-2">
      <HelpCircle className="text-secondary h-5 w-5 mt-0.5" />
                  Can you attend if I am stuck on the M6 hard shoulder near Preston?
                </h3>
      <p className="text-[15px] leading-[24px] text-gray-400 pl-7">
                  Yes. Our vans operate fully equipped for Chapter 8 motorway roadside work with 360-degree high-output amber beacons and high-visibility chevrons. Ensure all passengers stand behind the safety barrier prior to our technician’s arrival.
                </p>
      </div>
      {/* Q2 */}
      <div className="p-6 rounded-2xl bg-primary/60 backdrop-blur-md shadow-lg space-y-2">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-start gap-2">
      <HelpCircle className="text-secondary h-5 w-5 mt-0.5" />
                  What happens if I’ve lost my locking wheel nut key?
                </h3>
      <p className="text-[15px] leading-[24px] text-gray-400 pl-7">
                  Every dispatch vehicle carries specialized reverse-thread inverse extraction tooling. We remove stripped, rounded, or missing locking nuts safely without damaging your alloy wheels.
                </p>
      </div>
      {/* Q3 */}
      <div className="p-6 rounded-2xl bg-primary/60 backdrop-blur-md shadow-lg space-y-2">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-start gap-2">
      <HelpCircle className="text-secondary h-5 w-5 mt-0.5" />
                  Do you support logistics vans and commercial couriers?
                </h3>
      <p className="text-[15px] leading-[24px] text-gray-400 pl-7">
                  Absolutely. We carry reinforced C-rated tyres for Mercedes Sprinters, Ford Transits, VW Crafters, and Vauxhall Vivaros, providing immediate roadside swaps to keep your delivery timelines intact.
                </p>
      </div>
      {/* Q4 */}
      <div className="p-6 rounded-2xl bg-primary/60 backdrop-blur-md shadow-lg space-y-2">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-start gap-2">
      <HelpCircle className="text-secondary h-5 w-5 mt-0.5" />
                  Are your services genuinely 24 hours a day, 7 days a week?
                </h3>
      <p className="text-[15px] leading-[24px] text-gray-400 pl-7">
                  Yes, our dispatch desk and on-call technicians operate 365 days a year across weekends, bank holidays, and late nights with guaranteed emergency turnaround throughout Preston and surrounding areas.
                </p>
      </div>
      </div>
      </div>
      </section>
      {/* 8. RELATED LOCATIONS: Lancashire Cross-Links */}
      <section className="w-full px-space-md lg:px-margin py-space-lg bg-primary/60">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase text-gray-300">Local Hub Links</span>
      <h4 className="font-heading text-[20px] leading-[26px] font-bold text-white mt-1">Surrounding Lancashire Service Areas</h4>
      </div>
      <div className="flex flex-wrap gap-3">
      <a className="px-4 py-2 rounded-full bg-primary/80 text-white hover:text-secondary hover:bg-primary-light transition-colors text-[13px] leading-[18px] shadow-sm" href="#leyland">
                Leyland Mobile Tyre Fitting
              </a>
      <a className="px-4 py-2 rounded-full bg-primary/80 text-white hover:text-secondary hover:bg-primary-light transition-colors text-[13px] leading-[18px] shadow-sm" href="#chorley">
                Chorley Mobile Tyre Fitting
              </a>
      <a className="px-4 py-2 rounded-full bg-primary/80 text-white hover:text-secondary hover:bg-primary-light transition-colors text-[13px] leading-[18px] shadow-sm" href="#bamber-bridge">
                Bamber Bridge Tyre Fitting
              </a>
      <a className="px-4 py-2 rounded-full bg-primary/80 text-white hover:text-secondary hover:bg-primary-light transition-colors text-[13px] leading-[18px] shadow-sm" href="#fulwood">
                Fulwood Tyre Fitting
              </a>
      <a className="px-4 py-2 rounded-full bg-accent text-white hover:bg-accent transition-colors text-[13px] leading-[18px] shadow-sm" href="#lancashire">
                Mobile Tyre Fitting Lancashire
              </a>
      </div>
      </div>
      </section>
      {/* 9. FINAL CTA: Cinematic Full-Bleed Urgent Banner */}
      <section className="relative w-full px-space-md lg:px-margin py-space-xl">
      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative shadow-2xl bg-primary-dark text-center">
      {/* Background Image */}
      <div className="w-full h-[380px] md:h-[440px] bg-cover bg-center transition-transform duration-700 hover:scale-105" data-alt="Cinematic atmospheric shot of an emergency tyre response van speeding down a rainy illuminated Lancashire road at night, bright headlights cutting through mist, amber strobe roof light glow, deep moody dark navy tones." style={{ backgroundImage: "url('/gallery-evening-home-visit.webp')" }}>
      </div>
      <div className="absolute inset-0 bg-primary-dark/85 backdrop-blur-sm"></div>
      {/* Center Elements */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-12 space-y-6 max-w-3xl mx-auto">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider">
      <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
                Emergency Van on Standby in Preston
              </span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold md:text-[56px] md:leading-[64px] md:tracking-[-0.02em] md:font-black text-white uppercase">
                Stranded with a Puncture? <br className="hidden sm:inline"/>
      <span className="text-secondary">We Are Moving Now.</span>
      </h2>
      <p className="text-[15px] leading-[24px] md:text-[18px] md:leading-[28px] text-gray-300">
                Call our central Preston dispatch right away. No delays, no advance towing fees, and complete roadside tyre replacement in under an hour.
              </p>
      {/* Final Prominent Gold Pill Call Button */}
      <div className="pt-2">
      <a className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-secondary text-primary font-heading text-[20px] leading-[26px] font-bold uppercase tracking-wider hover:bg-secondary-hover active:scale-95 transition-all shadow-2xl hover:shadow-primary-container/30" href="tel:07955266077">
      <PhoneCall className="h-6 w-6" fill="currentColor" strokeWidth={0} />
      <span>07955 266 077</span>
      </a>
      </div>
      </div>
      </div>
      </section>
    </main>
  );
}
