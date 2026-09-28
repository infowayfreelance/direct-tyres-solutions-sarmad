import Image from "next/image";
import { AlertTriangle, Car, Clock, CreditCard, Disc, Gauge, KeyRound, MessageCircle, Moon, Package, PhoneCall, Route, Search, Shield, ShieldCheck, SlidersHorizontal, Timer, Unlock, Wrench } from "lucide-react";

export default function WilmslowPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* SECTION 1: ASYMMETRIC PHOTO GRID HERO */}
      <section className="w-full bg-primary-dark text-white py-8 lg:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
      {/* Left 1/3 (4 Cols) Dark Navy Dispatch Panel */}
      <div className="lg:col-span-4 bg-primary rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
      <div className="absolute -right-16 -top-16 w-44 h-44 rounded-full bg-secondary/5 blur-2xl pointer-events-none"></div>
      <div>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider mb-5">
      <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  Cheshire Rapid Response
                </div>
      <h1 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white mb-4">
                  24/7 Mobile Tyre Fitting in Wilmslow
                </h1>
      <p className="text-[15px] leading-[24px] text-slate-300 mb-6">
                  Immediate emergency roadside intervention and driveway tyre fitting for executive cars, prestige SUVs, and commuter saloons. Operating right across Wilmslow, the Handforth Bypass corridor, and Alderley Edge borders.
                </p>
      {/* Reg Quick Lookup Badge Form */}
      <div className="bg-primary-dark/80 backdrop-blur-md rounded-xl p-4 mb-6 shadow-inner">
      <label className="block text-[11px] leading-[14px] tracking-[0.06em] font-bold text-slate-400 uppercase tracking-wider mb-2">UK Reg Quick Check</label>
      <div className="flex gap-2">
      <div className="relative flex-1">
      <input className="w-full uppercase font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold tracking-widest bg-primary text-white px-3 py-2.5 rounded-lg focus:outline-none focus:bg-primary-dark placeholder:text-slate-500 font-bold" placeholder="ENTER REG" type="text"/>
      </div>
      <button className="bg-secondary hover:bg-secondary-hover text-primary text-[14px] leading-[18px] tracking-[0.02em] font-semibold px-4 py-2.5 rounded-lg font-bold transition-transform active:scale-95 shadow-md flex items-center justify-center" type="button">
      <Search className="h-[20px] w-[20px]" />
      </button>
      </div>
      <div className="flex items-center justify-between text-[11px] leading-[14px] tracking-[0.06em] font-bold text-slate-400 mt-2 px-1">
      <span>Run-flat Stock Verified</span>
      <span className="text-secondary font-semibold">25–35m ETA</span>
      </div>
      </div>
      </div>
      <div className="space-y-3 pt-2">
      <a className="w-full py-4 px-6 rounded-full bg-secondary hover:bg-secondary-hover text-primary text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider flex items-center justify-center gap-3 transition-all duration-200 active:scale-95 shadow-lg shadow-[#ffd700]/20 font-bold" href="tel:08009992470">
      <PhoneCall className="h-[22px] w-[22px]" />
                  Call 0800 999 2470
                </a>
      <a className="w-full py-3.5 px-6 rounded-full bg-white/5 hover:bg-white/10 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold flex items-center justify-center gap-3 transition-colors duration-200" href="https://wa.me/448009992470" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="text-green-400 h-[20px] w-[20px]" />
                  WhatsApp Instant Dispatch
                </a>
      </div>
      </div>
      {/* Right 2/3 (8 Cols) Asymmetric Photo Hero Stage */}
      <div className="lg:col-span-8 relative min-h-[420px] lg:min-h-full rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-end p-6 sm:p-8">
      <Image src="/hero-section-images-936x527.webp" alt="Direct Tyre Solutions mobile fitting van in Wilmslow Cheshire" fill sizes="(max-width: 1024px) 100vw, 50vw" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent"></div>
      {/* Top Right Live Status Pill */}
      <div className="absolute top-6 right-6 z-10 flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary-dark/90 backdrop-blur-md shadow-lg">
      <span className="relative flex h-2.5 w-2.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
      </span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-white">Wilmslow Rapid Response • 25-35 Min ETA</span>
      </div>
      {/* Bottom Overlay Specs Card */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-3 bg-primary/85 backdrop-blur-md p-4 sm:p-5 rounded-xl shadow-lg">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-slate-400 uppercase tracking-wider block">Service Tier</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold block mt-0.5">Premier Prestige Care</span>
      </div>
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-slate-400 uppercase tracking-wider block">Van Location</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold block mt-0.5">A34 / A538 Bypass</span>
      </div>
      <div className="col-span-2 sm:col-span-1">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-slate-400 uppercase tracking-wider block">Inventory</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary font-bold block mt-0.5">OE Premium &amp; Run-Flat</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 2: LOCAL INTRO & CONTEXT */}
      <section className="w-full bg-primary text-white py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-7 space-y-5">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider">
                  Wilmslow &amp; Cheshire Golden Triangle
                </div>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white tracking-tight">
                  Zero-Fuss Precision Fitting on High-Value Driveways and Critical Commutes
                </h2>
      <p className="text-[18px] leading-[28px] text-slate-300">
                  Wilmslow drivers operate some of the UK’s finest machinery—from high-performance Porsche and BMW M-series vehicles to Range Rover, Bentley, and Tesla electric fleets. A blowout along the A34 bypass or a puncture on your private driveway shouldn&apos;t mean costly recovery trucks or scratched Diamond-Cut alloys.
                </p>
      <p className="text-[15px] leading-[24px] text-slate-300">
                  Our custom-built Mercedes Sprinter mobile workshops arrive fully equipped with touchless Italian leverless tyre changers, digital laser wheel balancers, and computerized TPMS calibration hubs. Whether you&apos;re heading toward Manchester Airport on the A555 or stranded in Alderley Road rush hour, Direct Tyre Solutions restores full mobility at your exact coordinates.
                </p>
      </div>
      <div className="lg:col-span-5 grid grid-cols-2 gap-4">
      <div className="bg-primary-dark p-5 rounded-2xl shadow-md">
      <Wrench className="text-secondary h-[30px] w-[30px] mb-2" />
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Prestige Alloy Care</h3>
      <p className="text-[13px] leading-[18px] text-slate-400">Non-contact mount heads protect delicate 20&quot;-24&quot; custom finishes.</p>
      </div>
      <div className="bg-primary-dark p-5 rounded-2xl shadow-md">
      <Timer className="text-secondary h-[30px] w-[30px] mb-2" />
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">28-Min Average</h3>
      <p className="text-[13px] leading-[18px] text-slate-400">Dedicated Cheshire patrol vans on high alert 24/7/365.</p>
      </div>
      <div className="bg-primary-dark p-5 rounded-2xl shadow-md">
      <Gauge className="text-secondary h-[30px] w-[30px] mb-2" />
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Run-Flat Specialists</h3>
      <p className="text-[13px] leading-[18px] text-slate-400">BMW RSC, Mercedes MOE, and Audi RO1 homologated sizes.</p>
      </div>
      <div className="bg-primary-dark p-5 rounded-2xl shadow-md">
      <Unlock className="text-secondary h-[30px] w-[30px] mb-2" />
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Locking Key Lost?</h3>
      <p className="text-[13px] leading-[18px] text-slate-400">Specialist inverse tooling for undamaged master extraction.</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 3: SERVICES (2x2 PHOTO GRID WITH SOLID NAVY CAPTIONS) */}
      <section className="w-full bg-primary-dark text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider block mb-1">Our Core Capabilities</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">Full-Spectrum Roadside &amp; Home Fitting</h2>
      </div>
      <p className="text-[13px] leading-[18px] text-slate-400 max-w-md">
                Commercial-grade machinery inside self-contained mobile workshops delivering workshop-grade perfection without driving to a garage.
              </p>
      </div>
      {/* 2x2 Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Card 1 */}
      <div className="group bg-primary rounded-2xl overflow-hidden shadow-xl flex flex-col transition-all duration-300 hover:scale-[1.01]">
      <div className="relative h-64 overflow-hidden">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Emergency Highway tyre replacement on Cheshire motorway" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute top-4 right-4 bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold px-3 py-1 rounded-full uppercase shadow">
                    Emergency
                  </div>
      </div>
      <div className="p-6 bg-primary flex items-center justify-between">
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold mb-1">Emergency Highway Replacement</h3>
      <p className="text-[13px] leading-[18px] text-slate-400">A34 dual-carriageway, A555 and M56 hard shoulder safe intervention.</p>
      </div>
      <div className="w-10 h-10 rounded-full bg-primary-dark text-secondary flex items-center justify-center shrink-0 ml-4">
      <AlertTriangle className="h-[20px] w-[20px]" />
      </div>
      </div>
      </div>
      {/* Card 2 */}
      <div className="group bg-primary rounded-2xl overflow-hidden shadow-xl flex flex-col transition-all duration-300 hover:scale-[1.01]">
      <div className="relative h-64 overflow-hidden">
      <Image src="/gallery-roadside-fitting.webp" alt="BS AU 159 Puncture Repair inspection tyre tread" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute top-4 right-4 bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold px-3 py-1 rounded-full uppercase shadow">
                    British Standard
                  </div>
      </div>
      <div className="p-6 bg-primary flex items-center justify-between">
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold mb-1">BS AU 159 Puncture Repair</h3>
      <p className="text-[13px] leading-[18px] text-slate-400">Certified safe internal plug-patch repairs for minor tread punctures.</p>
      </div>
      <div className="w-10 h-10 rounded-full bg-primary-dark text-secondary flex items-center justify-center shrink-0 ml-4">
      <Wrench className="h-[20px] w-[20px]" />
      </div>
      </div>
      </div>
      {/* Card 3 */}
      <div className="group bg-primary rounded-2xl overflow-hidden shadow-xl flex flex-col transition-all duration-300 hover:scale-[1.01]">
      <div className="relative h-64 overflow-hidden">
      <Image src="/gallery-home-callout.webp" alt="Precision locking wheel nut removal on driveway" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute top-4 right-4 bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold px-3 py-1 rounded-full uppercase shadow">
                    No Rim Damage
                  </div>
      </div>
      <div className="p-6 bg-primary flex items-center justify-between">
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold mb-1">Specialist Locking Wheel Nut Removal</h3>
      <p className="text-[13px] leading-[18px] text-slate-400">Stripped, rounded, or missing key safely removed on site.</p>
      </div>
      <div className="w-10 h-10 rounded-full bg-primary-dark text-secondary flex items-center justify-center shrink-0 ml-4">
      <KeyRound className="h-[20px] w-[20px]" />
      </div>
      </div>
      </div>
      {/* Card 4 */}
      <div className="group bg-primary rounded-2xl overflow-hidden shadow-xl flex flex-col transition-all duration-300 hover:scale-[1.01]">
      <div className="relative h-64 overflow-hidden">
      <Image src="/gallery-evening-callout.webp" alt="Premium driveway fitting for prestige sports cars" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute top-4 right-4 bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold px-3 py-1 rounded-full uppercase shadow">
                    VIP Executive
                  </div>
      </div>
      <div className="p-6 bg-primary flex items-center justify-between">
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold mb-1">Premium Driveway &amp; Prestige Vehicle Fitting</h3>
      <p className="text-[13px] leading-[18px] text-slate-400">Careful rubber mount clamps tailored for high-end luxury wheels.</p>
      </div>
      <div className="w-10 h-10 rounded-full bg-primary-dark text-secondary flex items-center justify-center shrink-0 ml-4">
      <ShieldCheck className="h-[20px] w-[20px]" />
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 4: ROADS & ARTERIES + PRECISION PHOTO PANEL */}
      <section className="w-full bg-primary text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/* Bordered details card */}
      <div className="lg:col-span-6 bg-primary-dark rounded-2xl p-6 sm:p-8 shadow-xl">
      <div className="flex items-center gap-2 mb-3">
      <Route className="text-secondary h-5 w-5" />
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-slate-400 uppercase tracking-wider">Cheshire Arteries Covered</span>
      </div>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white mb-6">
                  Rapid Dispatch Along Wilmslow’s Busiest Arteries
                </h2>
      <div className="space-y-4">
      <div className="bg-primary p-4 rounded-xl">
      <div className="flex items-center justify-between mb-1">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">A34 Wilmslow Bypass &amp; Handforth Link</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold px-2.5 py-0.5 rounded-full bg-accent text-white">20-30m ETA</span>
      </div>
      <p className="text-[13px] leading-[18px] text-slate-300">Continuous patrols between Alderley Edge, Wilmslow town centre, and Handforth Dean Shopping Centre.</p>
      </div>
      <div className="bg-primary p-4 rounded-xl">
      <div className="flex items-center justify-between mb-1">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">A538 Altrincham Road &amp; Hale Road</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold px-2.5 py-0.5 rounded-full bg-accent text-white">25m ETA</span>
      </div>
      <p className="text-[13px] leading-[18px] text-slate-300">Fast access for flights commuters, business parks, and residential estate lanes.</p>
      </div>
      <div className="bg-primary p-4 rounded-xl">
      <div className="flex items-center justify-between mb-1">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">A555 Airport Relief Road &amp; M56 J6</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold px-2.5 py-0.5 rounded-full bg-accent text-white">15-25m ETA</span>
      </div>
      <p className="text-[13px] leading-[18px] text-slate-300">Crucial emergency response for airport terminal passengers and high-speed express corridors.</p>
      </div>
      </div>
      <div className="mt-6 pt-4 flex flex-wrap gap-2 text-slate-400 text-[13px] leading-[18px]">
      <span className="text-white font-semibold">Immediate coverage for:</span>
      <span>Alderley Rd • Manchester Rd • Dean Row • Styal • Wilmslow Park • Lindow Moss</span>
      </div>
      </div>
      {/* Adjacent Action Photo Panel */}
      <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-2xl h-[420px] lg:h-[480px]">
      <Image src="/gallery-evening-home-visit.webp" alt="Precision tyre torque fitting in Wilmslow" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent"></div>
      <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-primary-dark/85 backdrop-blur-md">
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">Industrial-Grade Driveway Calibration</p>
      <p className="text-[13px] leading-[18px] text-slate-300 mt-1">Calibrated torque wrenches ensure wheel bolts match manufacturer tolerances without over-tightening.</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 5: HOW IT WORKS (HORIZONTAL FLAT NUMERAL RIBBON) */}
      <section className="w-full bg-primary-dark text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider block mb-1">Frictionless 5-Step Process</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">How Our Mobile Fitting Operates</h2>
      </div>
      {/* Horizontal Ribbon Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {/* Step 1 */}
      <div className="bg-primary p-5 rounded-2xl flex flex-col justify-between shadow-md relative overflow-hidden">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary/20 font-black absolute top-2 right-4">01</span>
      <div className="relative z-10 pt-4">
      <span className="inline-block p-2 rounded-lg bg-primary-dark text-secondary mb-3">
      <PhoneCall className="h-[20px] w-[20px]" />
      </span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold mb-2">Call / Reg Lookup</h3>
      <p className="text-[13px] leading-[18px] text-slate-400">Share your location and reg number. Our system instantly selects identical OE fitments.</p>
      </div>
      </div>
      {/* Step 2 */}
      <div className="bg-primary p-5 rounded-2xl flex flex-col justify-between shadow-md relative overflow-hidden">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary/20 font-black absolute top-2 right-4">02</span>
      <div className="relative z-10 pt-4">
      <span className="inline-block p-2 rounded-lg bg-primary-dark text-secondary mb-3">
      <Package className="h-[20px] w-[20px]" />
      </span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold mb-2">Tyre Stock Lock</h3>
      <p className="text-[13px] leading-[18px] text-slate-400">We reserve your choice from premium brand inventories (Michelin, Pirelli, Continental).</p>
      </div>
      </div>
      {/* Step 3 */}
      <div className="bg-primary p-5 rounded-2xl flex flex-col justify-between shadow-md relative overflow-hidden">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary/20 font-black absolute top-2 right-4">03</span>
      <div className="relative z-10 pt-4">
      <span className="inline-block p-2 rounded-lg bg-primary-dark text-secondary mb-3">
      <Car className="h-[20px] w-[20px]" />
      </span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold mb-2">Van Dispatched</h3>
      <p className="text-[13px] leading-[18px] text-slate-400">Fitter deployed immediately with live GPS ETA sent direct to your phone.</p>
      </div>
      </div>
      {/* Step 4 */}
      <div className="bg-primary p-5 rounded-2xl flex flex-col justify-between shadow-md relative overflow-hidden">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary/20 font-black absolute top-2 right-4">04</span>
      <div className="relative z-10 pt-4">
      <span className="inline-block p-2 rounded-lg bg-primary-dark text-secondary mb-3">
      <SlidersHorizontal className="h-[20px] w-[20px]" />
      </span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold mb-2">Balancing &amp; Torque</h3>
      <p className="text-[13px] leading-[18px] text-slate-400">Computerized dynamic wheel balance, new rubber valve, and precise hand-torquing.</p>
      </div>
      </div>
      {/* Step 5 */}
      <div className="bg-primary p-5 rounded-2xl flex flex-col justify-between shadow-md relative overflow-hidden">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary/20 font-black absolute top-2 right-4">05</span>
      <div className="relative z-10 pt-4">
      <span className="inline-block p-2 rounded-lg bg-primary-dark text-secondary mb-3">
      <CreditCard className="h-[20px] w-[20px]" />
      </span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold mb-2">Contactless Card</h3>
      <p className="text-[13px] leading-[18px] text-slate-400">Tap and pay safely on-site via Apple Pay or chip card terminal once 100% satisfied.</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 6: REAL LOCAL JOB IN WILMSLOW */}
      <section className="w-full bg-primary text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
      <div className="bg-primary-dark rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
      {/* Photo Left */}
      <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
      <Image src="/gallery-precision-care.webp" alt="BMW 5 Series repair on Manchester Road Wilmslow" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute top-4 left-4 bg-secondary text-primary text-[11px] leading-[14px] tracking-[0.06em] font-bold px-3 py-1 rounded-full uppercase font-bold shadow">
                  Completed Case
                </div>
      </div>
      {/* Details Right */}
      <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
      <div>
      <div className="flex flex-wrap items-center gap-2 mb-3">
      <span className="text-xs font-mono font-bold text-secondary bg-secondary/10 px-2.5 py-1 rounded">INCIDENT #WL-504</span>
      <span className="text-xs font-mono text-slate-400">Wilmslow Commuter Sector</span>
      </div>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white mb-4">
                    BMW 5 Series Touring — Manchester Road, Wilmslow
                  </h2>
      <p className="text-[15px] leading-[24px] text-slate-300 mb-6">
                    Low-profile run-flat sidewall blowout during morning school commute. Technician on scene in 28 mins. Fitted 245/45 R18 Pirelli Cinturato P7 Run-Flat, calibrated TPMS sensors, and torqued to OEM specification without alloy damage.
                  </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-primary mb-6">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-slate-400 uppercase block">Vehicle</span>
      <span className="text-[13px] leading-[18px] text-white font-semibold">BMW 530d M Sport</span>
      </div>
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-slate-400 uppercase block">Tyre Fitted</span>
      <span className="text-[13px] leading-[18px] text-white font-semibold">Pirelli P7 (RSC)</span>
      </div>
      <div className="col-span-2 sm:col-span-1">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-slate-400 uppercase block">Response Time</span>
      <span className="text-[13px] leading-[18px] text-secondary font-semibold">28 Minutes Total</span>
      </div>
      </div>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-white/5">
      <span className="text-slate-400 text-[13px] leading-[18px] italic">&quot;Saved my entire work morning. Flawless service on my driveway.&quot;</span>
      <span className="text-xs text-slate-400 font-semibold">— Dr. M. Henderson, Wilmslow</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 7: FAQ (2-COLUMN GRID) */}
      <section className="w-full bg-primary-dark text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider block mb-1">Common Inquiries</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">Wilmslow Tyre Emergency FAQs</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* FAQ 1 */}
      <div className="bg-primary p-6 rounded-2xl shadow-md">
      <div className="flex items-start gap-3">
      <Clock className="text-secondary h-6 w-6 mt-0.5" />
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">What is your realistic arrival time in Wilmslow &amp; Alderley Edge?</h3>
      <p className="text-[13px] leading-[18px] text-slate-300">
                      Our Cheshire response vans typically reach locations in Wilmslow town centre, Handforth, and Alderley Edge within 25 to 35 minutes. If traffic bottlenecks occur along the A34 or M56 junctions, your technician will maintain real-time phone contact with updated live ETAs.
                    </p>
      </div>
      </div>
      </div>
      {/* FAQ 2 */}
      <div className="bg-primary p-6 rounded-2xl shadow-md">
      <div className="flex items-start gap-3">
      <Shield className="text-secondary h-6 w-6 mt-0.5" />
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Can you fit tyres on prestige alloy wheels without scratches?</h3>
      <p className="text-[13px] leading-[18px] text-slate-300">
                      Yes. Our vans employ synthetic leverless fitting heads, padded bead breakers, and composite clamps specifically engineered for high-gloss, matte, and diamond-cut finishes on Range Rover, Aston Martin, Porsche, and Audi RS models.
                    </p>
      </div>
      </div>
      </div>
      {/* FAQ 3 */}
      <div className="bg-primary p-6 rounded-2xl shadow-md">
      <div className="flex items-start gap-3">
      <Disc className="text-secondary h-6 w-6 mt-0.5" />
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Do you carry replacement run-flat tyres in your stock vans?</h3>
      <p className="text-[13px] leading-[18px] text-slate-300">
                      We maintain active warehouse access 24/7 across Cheshire and Greater Manchester with heavy stock of Run-Flat (RFT/SSR/ROF/Zero) tyres across 17-inch to 22-inch fitments from Bridgestone, Goodyear, Michelin, and Pirelli.
                    </p>
      </div>
      </div>
      </div>
      {/* FAQ 4 */}
      <div className="bg-primary p-6 rounded-2xl shadow-md">
      <div className="flex items-start gap-3">
      <Moon className="text-secondary h-6 w-6 mt-0.5" />
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Are you available for late evening and night callouts?</h3>
      <p className="text-[13px] leading-[18px] text-slate-300">
                      Direct Tyre Solutions operates round-the-clock 365 days a year. Whether you arrive late at Manchester Airport with a deflated tyre or experience a blowout on a Sunday night, our night dispatch team is on duty.
                    </p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 8: RELATED LOCATIONS (PILLS) */}
      <section className="w-full bg-primary text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto text-center">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-slate-400 uppercase tracking-wider block mb-4">Adjoining Areas Covered Daily</span>
      <div className="flex flex-wrap justify-center items-center gap-3">
      <a className="px-5 py-2.5 rounded-full bg-primary-dark hover:bg-secondary text-slate-200 hover:text-primary text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-all shadow-sm font-semibold" href="#handforth">
                Handforth
              </a>
      <a className="px-5 py-2.5 rounded-full bg-primary-dark hover:bg-secondary text-slate-200 hover:text-primary text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-all shadow-sm font-semibold" href="#alderley-edge">
                Alderley Edge
              </a>
      <a className="px-5 py-2.5 rounded-full bg-primary-dark hover:bg-secondary text-slate-200 hover:text-primary text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-all shadow-sm font-semibold" href="#cheadle">
                Cheadle
              </a>
      <a className="px-5 py-2.5 rounded-full bg-primary-dark hover:bg-secondary text-slate-200 hover:text-primary text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-all shadow-sm font-semibold" href="#wythenshawe">
                Wythenshawe
              </a>
      <a className="px-5 py-2.5 rounded-full bg-primary-dark hover:bg-secondary text-slate-200 hover:text-primary text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-all shadow-sm font-semibold" href="#knutsford">
                Knutsford
              </a>
      <a className="px-5 py-2.5 rounded-full bg-accent text-white hover:bg-white hover:text-primary text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-all shadow-sm font-semibold" href="#uk-network">
                Mobile Tyre Fitting UK
              </a>
      </div>
      </div>
      </section>
      {/* SECTION 9: FINAL CTA (COMPACT CENTERED PANEL) */}
      <section className="w-full bg-primary-dark text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[840px] mx-auto text-center bg-primary rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
      {/* Glow ambient background */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>
      <div className="relative z-10">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider mb-4 font-bold">
      <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                24/7 Cheshire Dispatch On Duty
              </div>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white mb-4">
                Stranded in Wilmslow or Handforth?
              </h2>
      <p className="text-[15px] leading-[24px] text-slate-300 max-w-xl mx-auto mb-8">
                Don&apos;t wait hours for a tow truck. Speak straight to an emergency technician now for an instant quote and 25-minute response to your driveway or roadside.
              </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a className="w-full sm:w-auto px-8 py-4 rounded-full bg-secondary hover:bg-secondary-hover text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-xl font-bold" href="tel:08009992470">
      <PhoneCall className="h-[24px] w-[24px]" />
                  Call 0800 999 2470
                </a>
      </div>
      <p className="text-[13px] leading-[18px] text-slate-400 mt-5">
                Guaranteed OEM Fitments • No Call-Out Deposit Required • All Major Cards &amp; Apple Pay Accepted
              </p>
      </div>
      </div>
      </section>
    </main>
  );
}
