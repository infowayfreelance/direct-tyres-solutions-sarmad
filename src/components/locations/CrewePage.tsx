import Image from "next/image";
import { AlarmClockCheck, Clock, Headphones, KeyRound, MapPin, MessageCircle, Moon, PhoneCall, ShieldCheck, ShoppingCart, TrafficCone, TrainFront, Truck, Unlock, Warehouse, Wrench, Zap } from "lucide-react";

export default function CrewePage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* SECTION 1: HERO (Editorial Split) */}
      <section className="w-full bg-primary-dark text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      {/* Left Content (7 Cols) */}
      <div className="lg:col-span-7 flex flex-col justify-center z-10">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 text-accent w-fit mb-6">
      <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider">Cheshire Fast Rapid Dispatch • Avg ETA 30-45m</span>
      </div>
      <h1 className="font-heading text-[36px] leading-[42px] tracking-[-0.01em] font-black lg:text-[56px] lg:leading-[64px] lg:tracking-[-0.02em] lg:font-black text-white font-black leading-none mb-6">
                  24/7 Mobile Tyre Fitting in Crewe
                </h1>
      <div className="w-28 h-1 bg-secondary rounded-full mb-8"></div>
      <div className="flex flex-col xl:flex-row xl:items-start gap-6 mb-8">
      <p className="text-[18px] leading-[28px] text-gray-400 flex-1">
                    Fast mobile tyre fitting, puncture repairs, and fleet tyre callouts across Crewe railway hub, Grand Junction Retail Park, Weston Road, and the A500 corridor.
                  </p>
      </div>
      {/* CTAs */}
      <div className="flex flex-wrap items-center gap-4">
      <a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-bold hover:bg-secondary-hover transition-transform duration-150 active:scale-95 shadow-xl" href="tel:08009992470">
      <PhoneCall className="text-primary font-bold h-5 w-5" />
      <span>Call 0800 999 2470</span>
      </a>
      <a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary/60 text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-semibold hover:bg-primary-light transition-all duration-150" href="https://wa.me/448009992470?text=Emergency%20tyre%20fitting%20dispatch%20Crewe" rel="noopener" target="_blank">
      <MessageCircle className="text-accent h-5 w-5" />
      <span>WhatsApp Dispatch</span>
      </a>
      </div>
      {/* Quick Metrics Bar */}
      <div className="grid grid-cols-3 gap-4 pt-10 mt-10 border-t-0 bg-primary/60 p-4 rounded-2xl backdrop-blur-md">
      <div>
      <span className="block font-heading text-[20px] leading-[26px] font-bold text-secondary font-black">24/7</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-wider">All-Weather</span>
      </div>
      <div>
      <span className="block font-heading text-[20px] leading-[26px] font-bold text-gray-300 font-black">30 Min</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-wider">Target ETA</span>
      </div>
      <div>
      <span className="block font-heading text-[20px] leading-[26px] font-bold text-accent font-black">100%</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-wider">Van Equipped</span>
      </div>
      </div>
      </div>
      {/* Right Photographic Half (5 Cols) */}
      <div className="lg:col-span-5 relative w-full h-[420px] lg:h-[580px] rounded-2xl overflow-hidden shadow-2xl">
      <Image src="/hero-section-images-936x527.webp" alt="Emergency roadside mobile tyre fitting unit at work" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover rounded-2xl" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent"></div>
      <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-primary-dark/85 backdrop-blur-md">
      <div className="flex items-center gap-3">
      <Zap className="text-secondary h-6 w-6" />
      <div>
      <span className="block font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Live Emergency Standby</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Patrolling Crewe station, A500 &amp; M6 J16 route</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 2: LOCAL INTRO (Railway Hub & Retail Priority) */}
      <section className="w-full bg-primary-dark text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-4">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-gray-300 mb-4">
      <MapPin className="h-[14px] w-[14px]" />
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider">Cheshire Transport Core</span>
      </div>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black mb-4">
                  Keeping Crewe Moving, 24 Hours A Day
                </h2>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  From critical railway connection deadlines to high-volume distribution freight, tyre failures require instant on-site resolution without depot delays.
                </p>
      </div>
      <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="p-6 rounded-2xl bg-primary/60 shadow-md">
      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mb-4">
      <TrainFront className="text-white h-5 w-5" />
      </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Crewe Railway Commuters</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    Stranded on your morning rail shift commute or parking at Weston Road station car parks? We replace blowouts and slow punctures right on the bays before your return train.
                  </p>
      </div>
      <div className="p-6 rounded-2xl bg-primary/60 shadow-md">
      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-4">
      <ShoppingCart className="text-primary font-bold h-5 w-5" />
      </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Grand Junction Retail Park</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    Kerb pinches and unexpected flats sorted while you shop. Rapid on-site fitment without blocking high-traffic shopping avenues or commercial delivery zones.
                  </p>
      </div>
      <div className="p-6 rounded-2xl bg-primary/60 shadow-md">
      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mb-4">
      <TrafficCone className="text-white h-5 w-5" />
      </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">A500 Shavington Bypass</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    Rush-hour breakdown support on dual-carriageways feeding Crewe, Nantwich, and the M6 Junction 16. Fast roadside safety perimeter and emergency wheel swaps.
                  </p>
      </div>
      <div className="p-6 rounded-2xl bg-primary/60 shadow-md">
      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-4">
      <Truck className="text-primary font-bold h-5 w-5" />
      </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Zero-Downtime Fleets</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    Commercial delivery vans, couriers, and trades across Crewe Gates &amp; Weston Industrial Estates. High-load-rated commercial tyres fitted on site.
                  </p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 3: SERVICES (Vertical Icon & Photo List) */}
      <section className="w-full bg-primary-dark py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col items-center text-center mb-16">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary mb-2">Fully Equipped Mobile Workshops</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black">Crewe Mobile Tyre Services</h2>
      <div className="w-20 h-1 bg-secondary rounded-full mt-4"></div>
      </div>
      <div className="space-y-4 max-w-4xl mx-auto">
      {/* Service Row 1 */}
      <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-primary/60 backdrop-blur-md shadow-md transition-all duration-200">
      <div className="relative w-full sm:w-28 sm:h-28 h-40 rounded-xl overflow-hidden flex-shrink-0 bg-primary">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Emergency 24/7 Roadside Mobile Tyre Fitting" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center flex-shrink-0 shadow-lg">
      <AlarmClockCheck className="h-6 w-6" />
      </div>
      <div className="flex-1 text-center sm:text-left">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold mb-1">24/7 Emergency Tyre Replacement</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    Complete blowouts, rim damage, and sidewall rips replaced on the roadside or driveway at any hour across Crewe, including weekend night shifts.
                  </p>
      </div>
      <a className="px-5 py-2.5 rounded-full bg-primary text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider hover:bg-secondary hover:text-primary transition-colors flex-shrink-0" href="tel:08009992470">
                  Dispatch Now
                </a>
      </div>
      {/* Service Row 2 */}
      <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-primary/60 backdrop-blur-md shadow-md transition-all duration-200">
      <div className="relative w-full sm:w-28 sm:h-28 h-40 rounded-xl overflow-hidden flex-shrink-0 bg-primary">
      <Image src="/gallery-roadside-fitting.webp" alt="Mobile puncture repair British Standard" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center flex-shrink-0 shadow-lg">
      <Wrench className="h-6 w-6" />
      </div>
      <div className="flex-1 text-center sm:text-left">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold mb-1">Mobile BSAU159 Puncture Repair</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    Tread nail and screw extractions assessed and sealed strictly compliant with British safety standards directly on your driveway or workplace.
                  </p>
      </div>
      <a className="px-5 py-2.5 rounded-full bg-primary text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider hover:bg-secondary hover:text-primary transition-colors flex-shrink-0" href="tel:08009992470">
                  Book Repair
                </a>
      </div>
      {/* Service Row 3 */}
      <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-primary/60 backdrop-blur-md shadow-md transition-all duration-200">
      <div className="relative w-full sm:w-28 sm:h-28 h-40 rounded-xl overflow-hidden flex-shrink-0 bg-primary">
      <Image src="/gallery-home-callout.webp" alt="Commercial fleet mobile tyre change Crewe" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center flex-shrink-0 shadow-lg">
      <Truck className="h-6 w-6" />
      </div>
      <div className="flex-1 text-center sm:text-left">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold mb-1">Commercial &amp; Fleet Van Tyre Services</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    Heavy-ply commercial tyres (Ford Transit, Sprinter, Vauxhall Vivaro) fitted with precision laser balancing to eliminate cargo transit delays.
                  </p>
      </div>
      <a className="px-5 py-2.5 rounded-full bg-primary text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider hover:bg-secondary hover:text-primary transition-colors flex-shrink-0" href="tel:08009992470">
                  Fleet Support
                </a>
      </div>
      {/* Service Row 4 */}
      <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-primary/60 backdrop-blur-md shadow-md transition-all duration-200">
      <div className="relative w-full sm:w-28 sm:h-28 h-40 rounded-xl overflow-hidden flex-shrink-0 bg-primary">
      <Image src="/gallery-evening-callout.webp" alt="Specialist locking wheel nut removal without damage" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center flex-shrink-0 shadow-lg">
      <KeyRound className="h-6 w-6" />
      </div>
      <div className="flex-1 text-center sm:text-left">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold mb-1">Locking Wheel Nut Removal</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    Lost security key or overtightened/sheared rounded lugs safely extracted with precision inverse hydraulic tooling without scratching alloy wheels.
                  </p>
      </div>
      <a className="px-5 py-2.5 rounded-full bg-primary text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider hover:bg-secondary hover:text-primary transition-colors flex-shrink-0" href="tel:08009992470">
                  Get Assist
                </a>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 4: ROADS & AREAS (Simplified Hub & Connected Nodes Map) */}
      <section className="w-full bg-primary/80 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col items-center text-center mb-12">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-gray-300 mb-2">Rapid Response Network</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black">Crewe Hub &amp; Connected Arterials</h2>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-2 max-w-xl">
                Continuous mobile coverage across Cheshire&apos;s central transport arteries and neighbouring communities.
              </p>
      </div>
      {/* Network Visualization Hub */}
      <div className="p-8 lg:p-12 rounded-3xl bg-primary-dark shadow-2xl relative overflow-hidden">
      {/* SVG Connected Arteries Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 hidden md:block">
      <svg className="w-full h-full" fill="none" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
      <line className="text-gray-400" stroke="currentColor" stroke-dasharray="6 6" strokeWidth="2" x1="500" x2="200" y1="250" y2="120"></line>
      <line className="text-gray-400" stroke="currentColor" stroke-dasharray="6 6" strokeWidth="2" x1="500" x2="800" y1="250" y2="120"></line>
      <line className="text-gray-400" stroke="currentColor" stroke-dasharray="6 6" strokeWidth="2" x1="500" x2="160" y1="250" y2="380"></line>
      <line className="text-gray-400" stroke="currentColor" stroke-dasharray="6 6" strokeWidth="2" x1="500" x2="500" y1="250" y2="440"></line>
      <line className="text-gray-400" stroke="currentColor" stroke-dasharray="6 6" strokeWidth="2" x1="500" x2="840" y1="250" y2="380"></line>
      </svg>
      </div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
      {/* Node: Nantwich (West) */}
      <div className="p-5 rounded-2xl bg-primary/60 text-center flex flex-col items-center">
      <span className="inline-flex px-2.5 py-1 rounded-full bg-accent/20 text-gray-300 text-[11px] leading-[14px] tracking-[0.06em] font-bold font-semibold mb-2">A534 West</span>
      <span className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">Nantwich</span>
      <span className="text-[13px] leading-[18px] text-gray-400 mt-1">10-15 Min ETA</span>
      </div>
      {/* Node: Sandbach (North-East) */}
      <div className="p-5 rounded-2xl bg-primary/60 text-center flex flex-col items-center">
      <span className="inline-flex px-2.5 py-1 rounded-full bg-accent/20 text-gray-300 text-[11px] leading-[14px] tracking-[0.06em] font-bold font-semibold mb-2">A534 East</span>
      <span className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">Sandbach</span>
      <span className="text-[13px] leading-[18px] text-gray-400 mt-1">15-20 Min ETA</span>
      </div>
      {/* Central Hub: Crewe Core */}
      <div className="p-8 rounded-3xl bg-accent/10 shadow-2xl flex flex-col items-center text-center md:scale-105">
      <div className="w-14 h-14 rounded-full bg-secondary text-primary flex items-center justify-center mb-3">
      <MapPin className="h-[30px] w-[30px] font-black" />
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary font-black">Central Depot Hub</span>
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black mt-1">CREWE</span>
      <span className="text-[13px] leading-[18px] text-gray-400 mt-1">Grand Junction • Rail Station • Weston Rd</span>
      <div className="inline-flex items-center gap-1.5 mt-3 text-accent text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <span className="w-2 h-2 rounded-full bg-accent"></span> Immediate Dispatch
                  </div>
      </div>
      {/* Node: Middlewich / Winsford (North) */}
      <div className="p-5 rounded-2xl bg-primary/60 text-center flex flex-col items-center">
      <span className="inline-flex px-2.5 py-1 rounded-full bg-accent/20 text-gray-300 text-[11px] leading-[14px] tracking-[0.06em] font-bold font-semibold mb-2">A530 North</span>
      <span className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">Winsford &amp; Middlewich</span>
      <span className="text-[13px] leading-[18px] text-gray-400 mt-1">20-25 Min ETA</span>
      </div>
      {/* Node: Alsager / M6 (South-East) */}
      <div className="p-5 rounded-2xl bg-primary/60 text-center flex flex-col items-center">
      <span className="inline-flex px-2.5 py-1 rounded-full bg-accent/20 text-gray-300 text-[11px] leading-[14px] tracking-[0.06em] font-bold font-semibold mb-2">A500 / M6 J16</span>
      <span className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">Alsager</span>
      <span className="text-[13px] leading-[18px] text-gray-400 mt-1">12-18 Min ETA</span>
      </div>
      </div>
      {/* Road Highlight Pills Below */}
      <div className="mt-10 pt-8 flex flex-wrap items-center justify-center gap-3">
      <span className="px-4 py-2 rounded-xl bg-primary/60 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">
      <span className="text-secondary mr-1.5">A500</span> Shavington Bypass
                </span>
      <span className="px-4 py-2 rounded-xl bg-primary/60 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">
      <span className="text-secondary mr-1.5">A534</span> Crewe Link Road
                </span>
      <span className="px-4 py-2 rounded-xl bg-primary/60 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">
      <span className="text-secondary mr-1.5">A530</span> Middlewich Road
                </span>
      <span className="px-4 py-2 rounded-xl bg-primary/60 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">
      <span className="text-secondary mr-1.5">M6</span> Junction 16 Gateway
                </span>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 5 & 6: HOW IT WORKS + REAL JOB SIDEBAR */}
      <section className="w-full bg-primary-dark py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col items-center text-center mb-16">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary mb-2">Rapid 5-Step Process</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black">How Crewe Mobile Fitting Works</h2>
      <div className="w-20 h-1 bg-secondary rounded-full mt-4"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* 5-Step Ribbon (8 Cols) */}
      <div className="lg:col-span-8 space-y-4">
      {/* Step 1 */}
      <div className="flex items-start gap-5 p-5 rounded-2xl bg-primary/60">
      <div className="w-12 h-12 rounded-full bg-secondary text-primary font-heading text-[20px] leading-[26px] font-bold font-black flex items-center justify-center flex-shrink-0">
                    01
                  </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">Dial Dispatch</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">
                      Call 0800 999 2470 or send your live pin on WhatsApp. We confirm your Crewe location in seconds.
                    </p>
      </div>
      </div>
      {/* Step 2 */}
      <div className="flex items-start gap-5 p-5 rounded-2xl bg-primary/60">
      <div className="w-12 h-12 rounded-full bg-accent text-white font-heading text-[20px] leading-[26px] font-bold font-black flex items-center justify-center flex-shrink-0">
                    02
                  </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">Tyre Spec &amp; Price Lock</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">
                      Share your vehicle reg or tyre dimensions (e.g., 225/45 R17). We give you guaranteed upfront pricing with no hidden roadside extras.
                    </p>
      </div>
      </div>
      {/* Step 3 */}
      <div className="flex items-start gap-5 p-5 rounded-2xl bg-primary/60">
      <div className="w-12 h-12 rounded-full bg-accent text-white font-heading text-[20px] leading-[26px] font-bold font-black flex items-center justify-center flex-shrink-0">
                    03
                  </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">Van Dispatched</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">
                      A heavy-duty Mercedes-Benz or Iveco mobile fitting unit navigates to your exact pin with live GPS updates.
                    </p>
      </div>
      </div>
      {/* Step 4 */}
      <div className="flex items-start gap-5 p-5 rounded-2xl bg-primary/60">
      <div className="w-12 h-12 rounded-full bg-accent text-white font-heading text-[20px] leading-[26px] font-bold font-black flex items-center justify-center flex-shrink-0">
                    04
                  </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">Laser Balance &amp; Fit</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">
                      Certified fitters demount, fit brand-new rubber, install new valves, digitally balance, and torque bolts to manufacturer standards.
                    </p>
      </div>
      </div>
      {/* Step 5 */}
      <div className="flex items-start gap-5 p-5 rounded-2xl bg-primary/60">
      <div className="w-12 h-12 rounded-full bg-secondary text-primary font-heading text-[20px] leading-[26px] font-bold font-black flex items-center justify-center flex-shrink-0">
                    05
                  </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">Drive Away Safe</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">
                      Contactless chip &amp; pin payment on the spot. Your old damaged tyre is loaded into the van for eco-friendly recycling.
                    </p>
      </div>
      </div>
      </div>
      {/* Real Job Sidebar Card (4 Cols) */}
      <div className="lg:col-span-4 p-6 rounded-2xl bg-primary-dark shadow-2xl relative">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold font-bold uppercase mb-4">
      <span className="w-2 h-2 rounded-full bg-secondary"></span> Recent Dispatch
                </div>
      <div className="relative w-full h-44 rounded-xl overflow-hidden mb-5">
      <Image src="/gallery-evening-home-visit.webp" alt="Verified job completion in Crewe" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute top-2 right-2 px-2.5 py-1 rounded bg-primary-dark/90 text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold font-mono">
                    #CR-8821
                  </div>
      </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold mb-2">
                  Grand Junction Retail Park
                </h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mb-4">
                  Commercial tyre puncture callout for a local logistics contractor.
                </p>
      <div className="space-y-2.5 pt-4 bg-primary/60 p-4 rounded-xl">
      <div className="flex justify-between items-center text-[13px] leading-[18px]">
      <span className="text-gray-400">Vehicle:</span>
      <span className="text-white font-semibold">Ford Transit Custom</span>
      </div>
      <div className="flex justify-between items-center text-[13px] leading-[18px]">
      <span className="text-gray-400">Tyre Fitted:</span>
      <span className="text-white font-semibold">215/65 R16C Heavy Ply</span>
      </div>
      <div className="flex justify-between items-center text-[13px] leading-[18px]">
      <span className="text-gray-400">Arrival Time:</span>
      <span className="text-white font-semibold">21 Mins from call</span>
      </div>
      <div className="flex justify-between items-center text-[13px] leading-[18px]">
      <span className="text-gray-400">Job Duration:</span>
      <span className="text-secondary font-bold">27 Mins Total Turnaround</span>
      </div>
      </div>
      <div className="mt-6 flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
      <ShieldCheck className="h-[14px] w-[14px] text-white" />
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Fitment verified by Senior Cheshire Technician</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 7: FAQ (Single Column Accordion) */}
      <section className="w-full bg-primary-dark py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6">
      <div className="flex flex-col items-center text-center mb-12">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary mb-2">Got Questions?</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black">Crewe Mobile Tyre FAQs</h2>
      <div className="w-20 h-1 bg-secondary rounded-full mt-4"></div>
      </div>
      <div className="space-y-4">
      {/* FAQ Item 1 */}
      <div className="p-6 rounded-2xl bg-primary/60">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold mb-2 flex items-center justify-between">
      <span>What are your typical response times across Crewe?</span>
      <Clock className="text-secondary h-5 w-5" />
      </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Our vans are stationed near primary access corridors including the A500 and Weston Road. Average arrival times across central Crewe, the rail station, and Grand Junction Retail Park sit between 30 to 45 minutes for urgent roadside calls.
                </p>
      </div>
      {/* FAQ Item 2 */}
      <div className="p-6 rounded-2xl bg-primary/60">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold mb-2 flex items-center justify-between">
      <span>Can you attend industrial estates and distribution yards?</span>
      <Warehouse className="text-secondary h-5 w-5" />
      </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Yes. We routinely service vehicles at Crewe Gates Industrial Estate, Weston Road logistics compounds, and Marshfield Bank. Our technicians carry standard PPE and comply fully with gate sign-in and safety protocols.
                </p>
      </div>
      {/* FAQ Item 3 */}
      <div className="p-6 rounded-2xl bg-primary/60">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold mb-2 flex items-center justify-between">
      <span>Do you operate late nights and during weekend shifts?</span>
      <Moon className="text-secondary h-5 w-5" />
      </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Our phone dispatch lines and on-call mobile vans operate genuine 24 hours a day, 365 days a year. Whether you blow a tyre at 2:00 AM on the A534 or Sunday afternoon at the shops, our response units are active.
                </p>
      </div>
      {/* FAQ Item 4 */}
      <div className="p-6 rounded-2xl bg-primary/60">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold mb-2 flex items-center justify-between">
      <span>What happens if I don&apos;t have the locking wheel nut key?</span>
      <Unlock className="text-secondary h-5 w-5" />
      </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  No problem. Every van is equipped with specialist reverse-threaded extraction tooling. We remove rounded, seized, or lost locking wheel nuts safely without damaging your alloy rims or wheel studs.
                </p>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 8: RELATED LOCATIONS (Plain Text-Link Row) */}
      <section className="w-full bg-primary/80 py-10">
      <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-gray-400 block mb-1">Cheshire Service Coverage</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Explore Neighbouring Towns</span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <a className="text-gray-300 hover:text-secondary transition-colors underline decoration-secondary/30 underline-offset-4" href="#">Nantwich Mobile Tyres</a>
      <span className="text-gray-400/40">•</span>
      <a className="text-gray-300 hover:text-secondary transition-colors underline decoration-secondary/30 underline-offset-4" href="#">Sandbach 24/7 Fitting</a>
      <span className="text-gray-400/40">•</span>
      <a className="text-gray-300 hover:text-secondary transition-colors underline decoration-secondary/30 underline-offset-4" href="#">Middlewich Roadside</a>
      <span className="text-gray-400/40">•</span>
      <a className="text-gray-300 hover:text-secondary transition-colors underline decoration-secondary/30 underline-offset-4" href="#">Alsager Van Dispatch</a>
      <span className="text-gray-400/40">•</span>
      <a className="text-white font-bold hover:text-secondary transition-colors underline decoration-secondary underline-offset-4" href="#">Mobile Tyre Fitting Cheshire</a>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 9: FINAL CTA (Compact Centered Panel) */}
      <section className="w-full bg-primary-dark py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-6">
      <div className="p-8 lg:p-12 rounded-3xl bg-primary/60 text-center flex flex-col items-center shadow-2xl relative overflow-hidden">
      <div className="w-16 h-16 rounded-full bg-secondary text-primary flex items-center justify-center mb-6">
      <Headphones className="h-[30px] w-[30px] font-black" />
      </div>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black mb-3">
                Stranded in Crewe with a Flat Tyre?
              </h2>
      <p className="text-[18px] leading-[28px] text-gray-400 max-w-xl mb-8">
                Our rapid response mobile technicians are on standby right now. Give our Cheshire dispatch team a call and we&apos;ll send a van straight to your location.
              </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-secondary text-primary font-heading text-[20px] leading-[26px] font-bold font-black tracking-wide hover:bg-secondary-hover transition-transform duration-150 active:scale-95 shadow-xl" href="tel:08009992470">
      <PhoneCall className="font-black h-5 w-5" />
      <span>Call 0800 999 2470</span>
      </a>
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-5 rounded-full bg-primary text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-semibold hover:bg-primary-light transition-colors" href="https://wa.me/448009992470?text=I%20need%20a%20mobile%20tyre%20fitting%20in%20Crewe" rel="noopener" target="_blank">
      <MessageCircle className="text-accent h-5 w-5" />
      <span>Send Location on WhatsApp</span>
      </a>
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-wider mt-6">
                Zero Membership Required • 24/7 Pay-As-You-Go Response
              </span>
      </div>
      </div>
      </section>
    </main>
  );
}
