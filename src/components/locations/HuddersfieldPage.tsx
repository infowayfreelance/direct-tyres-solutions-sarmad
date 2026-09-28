import Image from "next/image";
import { ArrowRight, Car, CheckCircle2, ChevronRight, Clock, CreditCard, Disc, HelpCircle, Navigation, Package, PhoneCall, Route, Search, Shield, ShieldCheck, Siren, Star, Timer, Truck, Unlock, Wrench, Zap } from "lucide-react";

export default function HuddersfieldPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      <div className="flex flex-col w-full text-white">
      {/* 1. HERO BENTO SHOWCASE */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 lg:gap-4 auto-rows-[minmax(140px,auto)]">
      {/* Bento 1: Primary Urgent Gold Cell (H1 + Direct Dispatch) */}
      <div className="md:col-span-7 lg:col-span-7 bg-secondary text-primary p-6 sm:p-8 lg:p-10 rounded-2xl flex flex-col justify-between shadow-xl relative overflow-hidden">
      <div className="space-y-4 relative z-10">
      <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full w-max">
      <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-primary font-bold">West Yorkshire Rapid Response</span>
      </div>
      <h1 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold lg:text-[56px] lg:leading-[64px] lg:tracking-[-0.02em] lg:font-black uppercase text-primary font-black leading-[1.05]">
                  24/7 Mobile Tyre Fitting in Huddersfield
                </h1>
      <p className="text-[18px] leading-[28px] text-primary/80 max-w-xl font-medium">
                  Stranded at Ainley Top, stuck on the Castlegate loop, or flat at home? Our roadside tyre service vans arrive directly at your location equipped with full digital balancing and tyre replacement machinery.
                </p>
      </div>
      <div className="pt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 relative z-10">
      <a className="inline-flex items-center justify-center gap-3 bg-primary-dark text-secondary px-8 py-4 rounded-full font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase hover:bg-primary/60 transition-all transform active:scale-95 shadow-lg group" href="tel:08009992470">
      <PhoneCall className="text-secondary group-hover:rotate-12 transition-transform h-5 w-5" />
      <span>0800 999 2470</span>
      </a>
      <div className="flex items-center gap-2 text-primary/90 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <Zap className="text-accent h-5 w-5" fill="currentColor" strokeWidth={0} />
      <span>Immediate Unit Dispatch • No Tow Required</span>
      </div>
      </div>
      </div>
      {/* Bento 2: Hero Visual Action Cell */}
      <div className="md:col-span-5 lg:col-span-5 min-h-[300px] lg:min-h-[420px] rounded-2xl overflow-hidden relative group bg-primary/60 shadow-xl">
      <Image src="/hero-section-images-936x527.webp" alt="Emergency mobile tyre technician replacing punctured tyre on roadside in Huddersfield" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/30 to-transparent"></div>
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
      <span className="inline-flex items-center gap-1.5 bg-accent text-white px-3 py-1 rounded-full text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <Truck className="h-[16px] w-[16px]" /> Mobile Van Active
                </span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-white bg-primary-dark/80 backdrop-blur-md px-3 py-1 rounded-full">
                  Kirklees &amp; Calderdale Fleet
                </span>
      </div>
      </div>
      {/* Bento 3: Quick Metric ETA Cell */}
      <div className="md:col-span-4 lg:col-span-4 bg-primary/80 p-6 rounded-2xl flex flex-col justify-between shadow-lg relative overflow-hidden">
      <div className="flex items-center justify-between">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-wider">Arrival Time</span>
      <Timer className="text-secondary h-5 w-5" />
      </div>
      <div className="my-4">
      <div className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold lg:text-[56px] lg:leading-[64px] lg:tracking-[-0.02em] lg:font-black text-secondary font-black">20–35</div>
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white uppercase">Minutes Average Arrival</div>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">Continuous tracking across A62, Bradley, Waterloo &amp; town centre.</p>
      </div>
      {/* Bento 4: M62 Priority Badge Cell */}
      <div className="md:col-span-4 lg:col-span-4 bg-primary-dark p-6 rounded-2xl flex flex-col justify-between shadow-lg">
      <div className="flex items-center justify-between">
      <span className="inline-flex items-center gap-2 bg-accent/20 text-gray-300 px-2.5 py-0.5 rounded-full text-[11px] leading-[14px] tracking-[0.06em] font-bold font-semibold">
                  Motorway Patrol
                </span>
      <Car className="text-gray-300 h-5 w-5" />
      </div>
      <div className="my-3">
      <div className="font-heading text-[30px] leading-[38px] font-bold text-white font-extrabold tracking-tight">M62 J23–J25</div>
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary">Priority Rapid Coverage</div>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">Hard shoulder &amp; safety refuge bay tyre fitting certified to NTDA safety standards.</p>
      </div>
      {/* Bento 5: High Value Stock Inventory Tag */}
      <div className="md:col-span-4 lg:col-span-4 bg-primary/80 p-6 rounded-2xl flex flex-col justify-between shadow-lg">
      <div className="flex items-center justify-between">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-wider">Van Inventory</span>
      <Disc className="text-secondary h-5 w-5" />
      </div>
      <div className="my-3">
      <div className="font-heading text-[30px] leading-[38px] font-bold text-white font-extrabold tracking-tight">Premium &amp; Budget</div>
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">13&quot; to 23&quot; Run-Flat In Stock</div>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">Michelin, Pirelli, Continental, Goodyear, and quality high-tread economy sizes ready.</p>
      </div>
      </div>
      </section>
      {/* 2. LOCAL INTRO & GEOGRAPHY INSIGHT */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-primary/60 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-7 space-y-4">
      <div className="inline-flex items-center gap-2 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest font-bold">
      <Route className="h-[18px] w-[18px]" />
                  Pennine Topography Specialists
                </div>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-extrabold">
                  Engineered For Huddersfield&apos;s Demanding Valley Roads
                </h2>
      <p className="text-[18px] leading-[28px] text-gray-400">
                  From the steep incline of <strong className="text-white">Ainley Top on the A629</strong> down to the frantic roundabout network around the <strong className="text-white">Castlegate Ring Road</strong>, Huddersfield presents sharp elevation shifts and tight corners that punish worn tyres. Driving on a flat tyre up Chapel Hill or along Manchester Road damages expensive alloy wheels within seconds.
                </p>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Our custom high-payload Mercedes Sprinter workshops bring industrial bead breakers, computer-guided wheel balancers, and fresh premium rubber directly to you—whether you&apos;re stuck at Kingsgate Shopping Park, a residential driveway in Lindley, or a breakdown layby on the M62.
                </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
      <div className="bg-primary/80 p-3 rounded-xl">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary block">Zero Towing</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Save £200+ breakdown costs</span>
      </div>
      <div className="bg-primary/80 p-3 rounded-xl">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary block">Any Weather</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Pennine rain, sleet &amp; snow</span>
      </div>
      <div className="bg-primary/80 p-3 rounded-xl col-span-2 sm:col-span-1">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary block">Roadside Safe</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Highway beacon compliant</span>
      </div>
      </div>
      </div>
      <div className="lg:col-span-5 flex flex-col gap-3">
      <div className="bg-primary/80 p-5 rounded-xl">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-gray-300">
      <Navigation className="h-5 w-5" />
      </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">HD1 &amp; Surrounding Postcodes</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">HD1, HD2, HD3, HD4, HD5, HD7, HD8, HD9</p>
      </div>
      </div>
      </div>
      <div className="bg-primary/80 p-5 rounded-xl">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
      <Siren className="h-5 w-5" />
      </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">Emergency Puncture Callout</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Standard BS AU 159 compliant plug patches</p>
      </div>
      </div>
      </div>
      <div className="bg-primary/80 p-5 rounded-xl">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-gray-300">
      <ShieldCheck className="h-5 w-5" />
      </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">Locking Wheel Nut Removal</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Specialist reverse-thread tooling on van</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 3. SERVICES: 5-CELL ASYMMETRIC BENTO GRID */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider font-bold">Comprehensive Field Engineering</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black mt-1">Our Huddersfield Tyre Operations</h2>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400 max-w-md">
              Fully mobile workshops equipped with pneumatic heavy lift jacks, dynamic high-speed wheel balancing, and brand new tyres.
            </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      {/* Service 1: Large Visual Puncture / Emergency Cell */}
      <div className="md:col-span-8 bg-primary/60 rounded-2xl overflow-hidden relative min-h-[340px] flex flex-col justify-end p-6 sm:p-8 group shadow-xl">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Mobile tyre technician performing pneumatic wheel change on driveway" fill sizes="(max-width: 1024px) 100vw, 50vw" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/60 to-transparent"></div>
      <div className="relative z-10 space-y-2 max-w-xl">
      <span className="inline-flex items-center gap-1 bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold px-3 py-1 rounded-full uppercase font-bold">
                  Most Requested
                </span>
      <h3 className="font-heading text-[30px] leading-[38px] font-bold text-white font-bold">Emergency Roadside Tyre Replacement</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Blowouts, pothole sidewall pinches, or road debris destruction across Huddersfield. We dispatch immediately with your vehicle&apos;s specific size and load index.
                </p>
      </div>
      </div>
      {/* Service 2: Dark Solid Cell - Puncture Repairs */}
      <div className="md:col-span-4 bg-primary/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
      <div>
      <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary mb-4">
      <Wrench className="h-[28px] w-[28px]" />
      </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold mb-2">BS AU 159 Minor Repairs</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  If a screw or nail pierced the central 70% of your tread and the carcass isn&apos;t deformed, we repair it safely on-site to keep costs down.
                </p>
      </div>
      <div className="pt-6 text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary flex items-center gap-1 font-bold">
                Inspected &amp; pressure tested before release
              </div>
      </div>
      {/* Service 3: Visual Tread Inspection & Replacement Cell */}
      <div className="md:col-span-4 bg-primary/60 rounded-2xl overflow-hidden relative min-h-[280px] flex flex-col justify-end p-6 group shadow-xl">
      <Image src="/gallery-roadside-fitting.webp" alt="Brand new tyre tread inspection with digital depth measurement gauge" fill sizes="(max-width: 1024px) 100vw, 50vw" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-transparent"></div>
      <div className="relative z-10">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold mb-1">Seasonal &amp; Fleet Fitting</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                  All-weather, winter tyres, and high-mileage van sets fitted at your workplace or home.
                </p>
      </div>
      </div>
      {/* Service 4: Motorway Hard Shoulder Support */}
      <div className="md:col-span-4 bg-primary/60 rounded-2xl overflow-hidden relative min-h-[280px] flex flex-col justify-end p-6 group shadow-xl">
      <Image src="/gallery-home-callout.webp" alt="Motorway emergency scene with service van flashing amber lights on hard shoulder" fill sizes="(max-width: 1024px) 100vw, 50vw" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-transparent"></div>
      <div className="relative z-10">
      <span className="inline-flex items-center gap-1 bg-primary/80 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold px-2.5 py-0.5 rounded-full mb-1 font-bold">
                  M62 Certified
                </span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold mb-1">Motorway Fast Response</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                  Rapid deployment to J23 Outlane, J24 Ainley Top, and J25 Brighouse motorway zones.
                </p>
      </div>
      </div>
      {/* Service 5: Locking Key Extraction & Valve Repair */}
      <div className="md:col-span-4 bg-primary/80 rounded-2xl p-6 flex flex-col justify-between shadow-xl">
      <div>
      <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-gray-300 mb-4">
      <Wrench className="h-[28px] w-[28px]" />
      </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold mb-2">Stripped Nut Extraction</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Lost your locking key adaptor or damaged by over-tightening? Our mobile technicians use non-destructive extraction kits.
                </p>
      </div>
      <div className="pt-4 text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">
                Includes standard brass valve core replacement &amp; wheel rebalancing.
              </div>
      </div>
      </div>
      </section>
      {/* 4. ROADS & NEARBY AREAS SLIM FULL-WIDTH PHOTO BAND */}
      <section className="w-full my-8">
      <div className="relative w-full overflow-hidden bg-primary-dark py-12 lg:py-16">
      <div className="relative absolute inset-0 opacity-20">
      <Image src="/gallery-evening-callout.webp" alt="Roadside highway network background" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover filter blur-sm" />
      </div>
      <div className="absolute inset-0 bg-primary-dark/90 backdrop-blur-xs"></div>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-8">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-widest font-bold">Local Route Coverage</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white font-extrabold mt-1">Huddersfield Transit Corridors &amp; Neighboring Towns</h2>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-2">
                  Technicians strategically parked around key junctions for under-35 minute dispatch.
                </p>
      </div>
      {/* Strategic Road Highlights */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
      <div className="bg-primary/60 backdrop-blur-md p-4 rounded-xl text-center">
      <span className="font-heading text-[30px] leading-[38px] font-bold text-secondary font-black block">M62</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Junctions 23, 24, 25</span>
      </div>
      <div className="bg-primary/60 backdrop-blur-md p-4 rounded-xl text-center">
      <span className="font-heading text-[30px] leading-[38px] font-bold text-secondary font-black block">A62</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Manchester / Leeds Rd</span>
      </div>
      <div className="bg-primary/60 backdrop-blur-md p-4 rounded-xl text-center">
      <span className="font-heading text-[30px] leading-[38px] font-bold text-secondary font-black block">A629</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Halifax Rd &amp; Ainley Top</span>
      </div>
      <div className="bg-primary/60 backdrop-blur-md p-4 rounded-xl text-center">
      <span className="font-heading text-[30px] leading-[38px] font-bold text-secondary font-black block">A641</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Bradford Road Corridor</span>
      </div>
      </div>
      {/* Overlaid Towns Tag Cloud */}
      <div className="flex flex-wrap justify-center items-center gap-2.5">
      <span className="bg-primary/80 px-4 py-2 rounded-full text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Brighouse</span>
      <span className="bg-primary/80 px-4 py-2 rounded-full text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Halifax</span>
      <span className="bg-primary/80 px-4 py-2 rounded-full text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Dewsbury</span>
      <span className="bg-primary/80 px-4 py-2 rounded-full text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Elland</span>
      <span className="bg-primary/80 px-4 py-2 rounded-full text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Holmfirth</span>
      <span className="bg-primary/80 px-4 py-2 rounded-full text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Slaithwaite</span>
      <span className="bg-primary/80 px-4 py-2 rounded-full text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Kirkburton</span>
      <span className="bg-primary/80 px-4 py-2 rounded-full text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Mirfield</span>
      </div>
      </div>
      </div>
      </section>
      {/* 5. HOW IT WORKS: ZIG-ZAG BENTO CELLS (01 TO 05) */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10 text-center max-w-xl mx-auto">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-widest font-bold">5-Step Dispatch Protocol</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black mt-1">From Blowout To Rolling in 45 Mins</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      {/* Step 01 (Large) */}
      <div className="md:col-span-7 bg-primary/60 p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-lg">
      <div className="flex items-center justify-between mb-4">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary font-black">01</span>
      <PhoneCall className="text-gray-300 h-5 w-5" />
      </div>
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold mb-2">Immediate Phone or Web Contact</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Ring our local controller. Share your location (or WhatsApp live pin) and your vehicle registration so we pull accurate tyre specs immediately.
                </p>
      </div>
      </div>
      {/* Step 02 (Small) */}
      <div className="md:col-span-5 bg-primary/80 p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-lg">
      <div className="flex items-center justify-between mb-4">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-gray-400/40 font-black">02</span>
      <Package className="text-secondary h-5 w-5" />
      </div>
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold mb-2">Stock Match Confirmation</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  We confirm matching tyre size, brand preference, and load rating right off the mobile rack before dispatch.
                </p>
      </div>
      </div>
      {/* Step 03 (Small) */}
      <div className="md:col-span-5 bg-primary/80 p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-lg">
      <div className="flex items-center justify-between mb-4">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-gray-400/40 font-black">03</span>
      <Route className="text-gray-300 h-5 w-5" />
      </div>
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold mb-2">Van Deployed En Route</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Technician assigned with accurate live GPS tracking. Typical arrival within 20–35 minutes across Huddersfield.
                </p>
      </div>
      </div>
      {/* Step 04 (Large) */}
      <div className="md:col-span-7 bg-primary/60 p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-lg">
      <div className="flex items-center justify-between mb-4">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary font-black">04</span>
      <Wrench className="text-secondary h-5 w-5" />
      </div>
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold mb-2">On-Site Precision Fitting &amp; Balancing</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Pneumatic jack lift, tyre demount, new valve install, laser wheel balancing, and torqued to manufacturer specs with a calibrated digital wrench.
                </p>
      </div>
      </div>
      {/* Step 05 (Full Width Accent) */}
      <div className="md:col-span-12 bg-primary-dark p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
      <div className="flex items-center gap-4">
      <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-white shrink-0">
      <span className="font-heading text-[20px] leading-[26px] font-bold font-black">05</span>
      </div>
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">Contactless Payment &amp; Safe Departure</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Card terminal on van (Visa, Mastercard, Apple Pay). Environmental eco-disposal of your old tyre included.</p>
      </div>
      </div>
      <div className="shrink-0">
      <span className="inline-flex items-center gap-2 text-secondary text-[14px] leading-[18px] tracking-[0.02em] font-semibold font-bold">
      <CheckCircle2 className="text-secondary h-5 w-5" /> No Hidden Callout Surcharges
                </span>
      </div>
      </div>
      </div>
      </section>
      {/* 6. REAL LOCAL JOB: 2-CELL BENTO PAIRING */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-primary/60 rounded-3xl overflow-hidden shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12">
      {/* Cell 1: Action Photo */}
      <div className="lg:col-span-6 relative min-h-[360px] lg:min-h-[460px]">
      <Image src="/gallery-evening-home-visit.webp" alt="Mobile mechanic changing an Audi tyre at Ainley Top Huddersfield" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent"></div>
      <div className="absolute bottom-6 left-6 right-6">
      <span className="inline-block bg-secondary text-primary px-3 py-1 rounded-full text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase font-bold mb-2">
                    Verified Huddersfield Job
                  </span>
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">Ainley Top (A629 / M62 J24 Sliproad)</div>
      <div className="text-[13px] leading-[18px] text-gray-400">Completed Tuesday evening in 27 minutes</div>
      </div>
      </div>
      {/* Cell 2: Verified Quote & Telemetry Data */}
      <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between bg-primary/80">
      <div>
      <div className="flex items-center gap-1 text-secondary mb-4">
      <Star className="h-[20px] w-[20px]" fill="currentColor" strokeWidth={0} />
      <Star className="h-[20px] w-[20px]" fill="currentColor" strokeWidth={0} />
      <Star className="h-[20px] w-[20px]" fill="currentColor" strokeWidth={0} />
      <Star className="h-[20px] w-[20px]" fill="currentColor" strokeWidth={0} />
      <Star className="h-[20px] w-[20px]" fill="currentColor" strokeWidth={0} />
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-white ml-2">5.0 Star Feedback</span>
      </div>
      <blockquote className="text-[18px] leading-[28px] text-white font-medium italic mb-6">
                    &quot;Hit a pothole ascending towards Ainley Top roundabout in the pouring rain. Audi Q5 showed instant zero PSI warning. The van arrived in less than half an hour with the exact Michelin 255/50 R20 replacement. Changed in 15 minutes, torqued properly, and got me home safely.&quot;
                  </blockquote>
      <div className="space-y-1">
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary font-bold">David M.</div>
      <div className="text-[13px] leading-[18px] text-gray-400">Lindley, Huddersfield • Commuter</div>
      </div>
      </div>
      <div className="pt-8 grid grid-cols-3 gap-3 border-t-0">
      <div className="bg-primary/60 p-3 rounded-xl">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block uppercase">Vehicle</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">Audi Q5 Quattro</span>
      </div>
      <div className="bg-primary/60 p-3 rounded-xl">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block uppercase">Tyre Size</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">255/50 R20</span>
      </div>
      <div className="bg-primary/60 p-3 rounded-xl">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block uppercase">Total Time</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary font-bold">27 Mins</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 7. FAQS: BENTO GRID OF TILES */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-xl mx-auto mb-10">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-widest font-bold">Huddersfield Driver Questions</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black mt-1">Frequently Asked Questions</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* FAQ 1 */}
      <div className="bg-primary/60 p-6 rounded-2xl shadow-lg flex flex-col justify-between">
      <div>
      <div className="flex items-center gap-2 text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-bold mb-2">
      <HelpCircle className="h-5 w-5" />
                  Can you change a tyre safely on steep hills?
                </div>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Yes. Our vans carry heavy-duty composite wheel chocks, pneumatic stabilizer feet, and low-profile hydraulic trolley jacks rated to safely lift on Huddersfield&apos;s steep residential roads.
                </p>
      </div>
      </div>
      {/* FAQ 2 */}
      <div className="bg-primary/60 p-6 rounded-2xl shadow-lg flex flex-col justify-between">
      <div>
      <div className="flex items-center gap-2 text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-bold mb-2">
      <Clock className="h-5 w-5" />
                  Are you genuinely 24/7 in West Yorkshire?
                </div>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Yes. Our night-shift mobile fitting units remain operational 365 days a year for commercial fleet emergencies, shift workers, and unexpected late-night motorway punctures.
                </p>
      </div>
      </div>
      {/* FAQ 3 */}
      <div className="bg-primary/60 p-6 rounded-2xl shadow-lg flex flex-col justify-between">
      <div>
      <div className="flex items-center gap-2 text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-bold mb-2">
      <Search className="h-5 w-5" />
                  What if I don&apos;t know my exact tyre size?
                </div>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Provide your vehicle registration plate over the phone. Our system accesses DVLA and manufacturer data to identify factory options and wheel variants.
                </p>
      </div>
      </div>
      {/* FAQ 4 */}
      <div className="bg-primary/60 p-6 rounded-2xl shadow-lg flex flex-col justify-between">
      <div>
      <div className="flex items-center gap-2 text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-bold mb-2">
      <Unlock className="h-5 w-5" />
                  Can you help if I lost the locking wheel nut key?
                </div>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Yes. All Huddersfield mobile vans carry certified locking wheel nut removal tools designed to cleanly extract stubborn or rounded nuts without alloy damage.
                </p>
      </div>
      </div>
      {/* FAQ 5 */}
      <div className="bg-primary/60 p-6 rounded-2xl shadow-lg flex flex-col justify-between">
      <div>
      <div className="flex items-center gap-2 text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-bold mb-2">
      <Shield className="h-5 w-5" />
                  Do you attend motorway hard shoulders?
                </div>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Yes, our technicians hold NTDA roadside safety certificates and vans are equipped with Chapter 8 high-intensity reflective battenburg and beacon arrays for M62 attendance.
                </p>
      </div>
      </div>
      {/* FAQ 6 */}
      <div className="bg-primary/60 p-6 rounded-2xl shadow-lg flex flex-col justify-between">
      <div>
      <div className="flex items-center gap-2 text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-bold mb-2">
      <CreditCard className="h-5 w-5" />
                  How do I pay on the roadside?
                </div>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Each van carries a secure cellular chip-and-pin card reader accepting all major UK debit/credit cards, contactless, Apple Pay, and Google Pay once work is done.
                </p>
      </div>
      </div>
      </div>
      </section>
      {/* 8. RELATED LOCATIONS */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-primary/80 rounded-2xl p-6 sm:p-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
      <div>
      <h2 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">Nearby Coverage Hubs in West Yorkshire</h2>
      <p className="text-[13px] leading-[18px] text-gray-400">Fast dispatch vans stationed across Kirklees &amp; Calderdale</p>
      </div>
      <a className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary hover:underline flex items-center gap-1 font-bold" href="#">
                View Nationwide Mobile Tyre UK <ArrowRight className="h-[16px] w-[16px]" />
      </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      <a className="bg-primary/60 p-3.5 rounded-xl hover:bg-primary-light transition-colors flex items-center justify-between group" href="#">
      <span className="text-[15px] leading-[24px] text-white group-hover:text-secondary font-semibold">Brighouse</span>
      <ChevronRight className="h-[18px] w-[18px] text-gray-400 group-hover:text-secondary" />
      </a>
      <a className="bg-primary/60 p-3.5 rounded-xl hover:bg-primary-light transition-colors flex items-center justify-between group" href="#">
      <span className="text-[15px] leading-[24px] text-white group-hover:text-secondary font-semibold">Halifax</span>
      <ChevronRight className="h-[18px] w-[18px] text-gray-400 group-hover:text-secondary" />
      </a>
      <a className="bg-primary/60 p-3.5 rounded-xl hover:bg-primary-light transition-colors flex items-center justify-between group" href="#">
      <span className="text-[15px] leading-[24px] text-white group-hover:text-secondary font-semibold">Dewsbury</span>
      <ChevronRight className="h-[18px] w-[18px] text-gray-400 group-hover:text-secondary" />
      </a>
      <a className="bg-primary/60 p-3.5 rounded-xl hover:bg-primary-light transition-colors flex items-center justify-between group" href="#">
      <span className="text-[15px] leading-[24px] text-white group-hover:text-secondary font-semibold">Holmfirth</span>
      <ChevronRight className="h-[18px] w-[18px] text-gray-400 group-hover:text-secondary" />
      </a>
      </div>
      </div>
      </section>
      {/* 9. FINAL CTA: FULL-WIDTH BENTO CELL */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
      <div className="bg-gradient-to-br from-primary/80 via-primary/60 to-primary-dark p-8 sm:p-12 lg:p-16 rounded-3xl shadow-2xl relative overflow-hidden text-center flex flex-col items-center">
      {/* Subtle glow orb backdrop */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="relative z-10 max-w-3xl space-y-6">
      <div className="inline-flex items-center gap-2 bg-accent/20 text-gray-300 px-3 py-1 rounded-full text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider font-bold">
      <span className="w-2 h-2 rounded-full bg-secondary"></span> Huddersfield Standby Unit Live
              </div>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold sm:text-[40px] sm:leading-[48px] sm:tracking-[-0.02em] sm:font-extrabold lg:text-[56px] lg:leading-[64px] lg:tracking-[-0.02em] lg:font-black text-white font-black">
                Stranded In Huddersfield? Let Us Bring The Garage To You.
              </h2>
      <p className="text-[18px] leading-[28px] text-white max-w-2xl mx-auto">
                No tow trucks. No tyre shop queues. Our fully kitted mobile workshop replaces your puncture at home, work, or roadside in 30 minutes.
              </p>
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-secondary text-primary px-10 py-5 rounded-full font-heading text-[20px] leading-[26px] font-bold uppercase tracking-wider hover:bg-secondary-hover transition-all transform active:scale-95 shadow-xl font-black group" href="tel:08009992470">
      <PhoneCall className="h-[26px] w-[26px] group-hover:rotate-12 transition-transform" />
      <span>Call 0800 999 2470 Now</span>
      </a>
      </div>
      <div className="pt-4 flex flex-wrap justify-center items-center gap-6 text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-gray-400">
      <div className="flex items-center gap-1.5">
      <ShieldCheck className="text-secondary h-[18px] w-[18px]" />
      <span>24/7 Immediate Dispatch</span>
      </div>
      <div className="flex items-center gap-1.5">
      <ShieldCheck className="text-secondary h-[18px] w-[18px]" />
      <span>All Major Brands Stocked</span>
      </div>
      <div className="flex items-center gap-1.5">
      <ShieldCheck className="text-secondary h-[18px] w-[18px]" />
      <span>Direct Roadside Assistance</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      </div>
    </main>
  );
}
