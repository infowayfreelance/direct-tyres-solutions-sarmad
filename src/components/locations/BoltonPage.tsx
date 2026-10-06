import Image from "next/image";
import { ArrowRight, Car, CheckCircle2, ChevronRight, CreditCard, KeyRound, MapPin, MessageCircle, Navigation, PhoneCall, Truck, Wrench, Zap } from "lucide-react";

export default function BoltonPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* SECTION 1: HERO SECTION (50/50 Split Block) */}
      <section className="w-full bg-primary text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/* Left Column: Copy & Urgent CTA */}
      <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
      <div className="inline-flex items-center gap-2 self-start bg-accent/20 text-secondary/70 px-3.5 py-1.5 rounded-full text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
                  Bolton &amp; Greater Manchester Mobile Tyre Response
                </div>
      <h1 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">
                  24/7 Mobile Tyre Fitting in <span className="text-secondary">Bolton</span>
                </h1>
      <p className="text-[18px] leading-[28px] text-gray-400">
                  Rapid roadside breakdown support, home driveway tyre replacements, and workplace fleet callouts across Bolton. Direct mobile fitting units stocked with premium and budget tyres dispatched within minutes.
                </p>
      <div className="flex flex-col sm:flex-row gap-4 pt-2">
      <a className="inline-flex items-center justify-center gap-3 bg-secondary hover:bg-secondary-hover text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-bold px-8 py-4 rounded-full transition-all duration-200 active:scale-95 shadow-lg shadow-black/30" href="tel:07955266077">
      <PhoneCall className="h-[22px] w-[22px]" fill="currentColor" strokeWidth={0} />
      <span>Call 07955 266 077</span>
      </a>
      <a className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-bold px-8 py-4 rounded-full transition-all duration-200" href="https://wa.me/448009992470" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="h-[22px] w-[22px]" />
      <span>WhatsApp</span>
      </a>
      </div>
      <div className="grid grid-cols-3 gap-4 pt-4">
      <div className="flex flex-col bg-primary-dark/80 p-3 rounded-xl">
      <span className="font-heading text-[20px] leading-[26px] font-bold text-secondary">25-45m</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Average Arrival</span>
      </div>
      <div className="flex flex-col bg-primary-dark/80 p-3 rounded-xl">
      <span className="font-heading text-[20px] leading-[26px] font-bold text-accent">24/7/365</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Round-The-Clock</span>
      </div>
      <div className="flex flex-col bg-primary-dark/80 p-3 rounded-xl">
      <span className="font-heading text-[20px] leading-[26px] font-bold text-white">No Tow</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Fitted On Site</span>
      </div>
      </div>
      </div>
      {/* Right Column: Clean Photographic Reality (Split) */}
      <div className="relative lg:col-span-6 overflow-hidden rounded-2xl shadow-2xl">
      <Image src="/hero-section-images-936x527.webp" alt="Close-up action shot of an automotive mobile tyre technician in hi-vis vest using an impact wrench to change an alloy wheel tyre on a car driveway, UK setting, realistic industrial photography." fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-[400px] lg:h-[480px] object-cover object-center" />
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 2: LOCAL INTRO BLOCK (#061226) */}
      <section className="w-full bg-primary-dark text-white py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      <div className="lg:col-span-7 space-y-6">
      <div className="inline-flex items-center gap-2 text-secondary text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider">
      <MapPin className="h-[18px] w-[18px]" />
                  Local Knowledge &amp; Rapid Transit
                </div>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">
                  Keeping Bolton Moving Without Costly Recovery Trucks
                </h2>
      <div className="space-y-4 text-[15px] leading-[24px] text-gray-400">
      <p>
                    Steeped in industrial heritage alongside the River Irwell and Bridgewater Canal, Bolton serves as a vital commuter link between Westhoughton, Farnworth, and North Manchester. Daily congestion on the <strong className="text-white">A666 Water Street</strong> and the bottleneck transitions along <strong className="text-white">A58 Ringley Road</strong> frequently expose vehicles to road debris, sunken ironworks, and severe pothole damage.
                  </p>
      <p>
                    When a puncture or sidewall blowout strikes, getting towed to a static garage wastes critical hours and racks up heavy recovery bills. Our fully outfitted mobile tyre vans carry computerized wheel balancers, heavy pneumatic jacks, and an exhaustive roster of tyre sizes straight to your roadside location, workplace car park, or residential driveway—getting you roadworthy within minutes.
                  </p>
      </div>
      <div className="flex flex-wrap gap-3 pt-2">
      <span className="bg-primary text-white px-3 py-1 rounded-full text-[13px] leading-[18px]">M60 Junction 17 &amp; 18 Access</span>
      <span className="bg-primary text-white px-3 py-1 rounded-full text-[13px] leading-[18px]">A666 Water St Arterial</span>
      <span className="bg-primary text-white px-3 py-1 rounded-full text-[13px] leading-[18px]">A58 Ringley Rd Commuter Path</span>
      <span className="bg-primary text-white px-3 py-1 rounded-full text-[13px] leading-[18px]">Ainsworth Road Corridor</span>
      </div>
      </div>
      <div className="lg:col-span-5 bg-primary p-6 lg:p-8 rounded-2xl space-y-6 shadow-xl">
      <div className="flex items-center justify-between">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Dispatch Status</span>
      <span className="inline-flex items-center gap-1.5 text-accent bg-accent/20 px-3 py-1 rounded-full text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <span className="w-2 h-2 rounded-full bg-accent"></span> Units Patrolling
                  </span>
      </div>
      <div className="space-y-3 text-[13px] leading-[18px] text-gray-400">
      <div className="flex justify-between py-2 border-b border-white/5">
      <span>Primary Depot</span>
      <span className="text-white font-semibold">Greater Manchester Central</span>
      </div>
      <div className="flex justify-between py-2 border-b border-white/5">
      <span>Local Unit Radius</span>
      <span className="text-white font-semibold">Bolton (BL1) &amp; 8-Mile Ring</span>
      </div>
      <div className="flex justify-between py-2 border-b border-white/5">
      <span>Tyre Availability</span>
      <span className="text-white font-semibold">Budget, Mid-Range, Premium, EV</span>
      </div>
      <div className="flex justify-between py-2">
      <span>Fitting Guarantee</span>
      <span className="text-secondary font-semibold">Torqued to Manufacturer Spec</span>
      </div>
      </div>
      <a className="w-full flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-hover text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-bold py-3.5 rounded-full transition duration-150" href="tel:07955266077">
      <Zap className="h-[20px] w-[20px]" />
                  Request Rapid Bolton Dispatch
                </a>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 3: SERVICES BLOCK (#0b1e3d) */}
      <section className="w-full bg-primary text-white py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">Comprehensive On-Site Tyre Services</h2>
      <p className="text-[15px] leading-[24px] text-gray-400">
                Our self-contained vans are heavy mobile workshops equipped with pneumatic tyre changers, computer wheel balancers, and specialist extraction equipment.
              </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Card 1: Emergency Replacement */}
      <div className="group flex flex-col bg-primary-dark rounded-2xl overflow-hidden shadow-lg transition duration-200 hover:-translate-y-1">
      <div className="relative h-48 w-full overflow-hidden">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Professional photograph of a modern UK mobile tyre fitting van parked at roadside in British weather, yellow and blue emergency livery, high-visibility markings, tyre fitting equipment inside, clean realistic documentary photography, dramatic dusk lighting." fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-300" />
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white shadow-md">
      <Car className="h-[18px] w-[18px]" />
      </div>
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-primary-dark">
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Emergency Replacement</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Blowouts, slashed sidewalls, or MOT-failing treads. Delivered and fitted directly on the roadside or hard shoulder.</p>
      </div>
      <div className="pt-2">
      <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold inline-flex items-center gap-1 font-bold">
                      24/7 Instant Dispatch <ArrowRight className="h-[14px] w-[14px]" />
      </span>
      </div>
      </div>
      </div>
      {/* Card 2: Puncture Seal */}
      <div className="group flex flex-col bg-primary-dark rounded-2xl overflow-hidden shadow-lg transition duration-200 hover:-translate-y-1">
      <div className="relative h-48 w-full overflow-hidden">
      <Image src="/gallery-roadside-fitting.webp" alt="Close-up action shot of an automotive mobile tyre technician in hi-vis vest using an impact wrench to change an alloy wheel tyre on a car driveway, UK setting, realistic industrial photography." fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-300" />
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white shadow-md">
      <Wrench className="h-[18px] w-[18px]" />
      </div>
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-primary-dark">
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Puncture Seal &amp; Repair</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Rigorous British Standard (BS AU 159) plug-patch repairs for tread punctures, saving the cost of a full brand-new replacement.</p>
      </div>
      <div className="pt-2">
      <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold inline-flex items-center gap-1 font-bold">
                      BS AU 159 Compliant <ArrowRight className="h-[14px] w-[14px]" />
      </span>
      </div>
      </div>
      </div>
      {/* Card 3: Locking Nut Removal */}
      <div className="group flex flex-col bg-primary-dark rounded-2xl overflow-hidden shadow-lg transition duration-200 hover:-translate-y-1">
      <div className="relative h-48 w-full overflow-hidden">
      <Image src="/gallery-home-callout.webp" alt="Professional photograph of a modern UK mobile tyre fitting van parked at roadside in British weather, yellow and blue emergency livery, high-visibility markings, tyre fitting equipment inside, clean realistic documentary photography, dramatic dusk lighting." fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-300" />
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white shadow-md">
      <KeyRound className="h-[18px] w-[18px]" />
      </div>
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-primary-dark">
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Locking Nut Removal</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Stripped, rounded, or misplaced locking key? We extract security bolts non-destructively without scratching delicate alloys.</p>
      </div>
      <div className="pt-2">
      <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold inline-flex items-center gap-1 font-bold">
                      Damage-Free Technique <ArrowRight className="h-[14px] w-[14px]" />
      </span>
      </div>
      </div>
      </div>
      {/* Card 4: Commercial Fleet */}
      <div className="group flex flex-col bg-primary-dark rounded-2xl overflow-hidden shadow-lg transition duration-200 hover:-translate-y-1">
      <div className="relative h-48 w-full overflow-hidden">
      <Image src="/gallery-evening-callout.webp" alt="Close-up action shot of an automotive mobile tyre technician in hi-vis vest using an impact wrench to change an alloy wheel tyre on a car driveway, UK setting, realistic industrial photography." fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-300" />
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white shadow-md">
      <Truck className="h-[18px] w-[18px]" />
      </div>
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-primary-dark">
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Commercial Fleet Support</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Van fleets, delivery couriers, and trade workhorses. High-ply commercial C-rated tyres installed on location to eliminate downtime.</p>
      </div>
      <div className="pt-2">
      <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold inline-flex items-center gap-1 font-bold">
                      Commercial C-Rated Tyres <ArrowRight className="h-[14px] w-[14px]" />
      </span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 4: FULL-WIDTH PANORAMIC ROAD/AREA PHOTO BAND */}
      <section className="relative w-full overflow-hidden">
      <div className="relative min-h-[420px] flex items-center bg-primary-dark">
      <Image src="/gallery-evening-home-visit.webp" alt="Professional photograph of a modern UK mobile tyre fitting van parked at roadside in British weather, yellow and blue emergency livery, high-visibility markings, tyre fitting equipment inside, clean realistic documentary photography, dramatic dusk lighting." fill sizes="(max-width: 1024px) 100vw, 50vw" className="absolute inset-0 w-full h-full object-cover object-center opacity-30" />
      <div className="absolute inset-0 bg-primary-dark/85 backdrop-blur-[2px]"></div>
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-8 space-y-4">
      <span className="inline-flex items-center gap-2 bg-accent text-white px-3 py-1 rounded-full text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase font-bold tracking-wider">
                    Strategic Road Network Patrol
                  </span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white font-extrabold">
                    Immediate Dispatch Across Bolton, M60, and Regional Connectors
                  </h2>
      <p className="text-[15px] leading-[24px] text-white max-w-2xl">
                    From late-night commuter delays along the <strong className="text-secondary">M60 Motorway</strong> corridor to congested town centre stops along the <strong className="text-secondary">A666</strong> and residential estates off <strong className="text-secondary">A58</strong>, our units hold direct satellite tracking for immediate emergency deployment.
                  </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-2xl">
      <div className="bg-primary/90 p-3 rounded-xl">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block">Major Junction</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">M60 J17 &amp; J18</span>
      </div>
      <div className="bg-primary/90 p-3 rounded-xl">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block">Town Artery</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">A666 Water St</span>
      </div>
      <div className="bg-primary/90 p-3 rounded-xl">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block">Connecting Route</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">A58 Ringley Rd</span>
      </div>
      </div>
      </div>
      <div className="lg:col-span-4 bg-primary/90 p-6 rounded-2xl space-y-4 shadow-xl">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-center gap-2">
      <Navigation className="text-secondary h-5 w-5" />
                    Nearby Response Sectors
                  </h3>
      <div className="flex flex-wrap gap-2">
      <span className="bg-primary-dark text-white px-3 py-1.5 rounded-lg text-[13px] leading-[18px]">Farnworth (BL4)</span>
      <span className="bg-primary-dark text-white px-3 py-1.5 rounded-lg text-[13px] leading-[18px]">Horwich (BL6)</span>
      <span className="bg-primary-dark text-white px-3 py-1.5 rounded-lg text-[13px] leading-[18px]">Westhoughton (BL1-BL4)</span>
      <span className="bg-primary-dark text-white px-3 py-1.5 rounded-lg text-[13px] leading-[18px]">Bolton (BL4)</span>
      <span className="bg-primary-dark text-white px-3 py-1.5 rounded-lg text-[13px] leading-[18px]">Walkden (BL3)</span>
      <span className="bg-primary-dark text-white px-3 py-1.5 rounded-lg text-[13px] leading-[18px]">Prestwich (BL2)</span>
      </div>
      <a className="block text-center bg-secondary hover:bg-secondary-hover text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-bold py-3 rounded-full transition" href="tel:07955266077">
                    Dispatch Van Now: 07955 266 077
                  </a>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 5: HOW IT WORKS BLOCK (#061226) */}
      <section className="w-full bg-primary-dark text-white py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">How It Works: 5 Simple Steps</h2>
      <p className="text-[15px] leading-[24px] text-gray-400">
                Transparent, rapid roadside and home tyre replacement without the hassle of garage appointments or recovery delays.
              </p>
      </div>
      {/* Horizontal Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
      {/* Step 1 */}
      <div className="bg-primary p-6 rounded-2xl flex flex-col items-center text-center space-y-4">
      <div className="w-14 h-14 rounded-full bg-accent/20 text-secondary/70 flex items-center justify-center">
      <PhoneCall className="h-[28px] w-[28px]" />
      </div>
      <div className="w-8 h-8 rounded-full bg-secondary text-primary font-bold flex items-center justify-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">
                  1
                </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Contact Us</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Call 07955 266 077 or send a WhatsApp with your location in Bolton.</p>
      </div>
      {/* Step 2 */}
      <div className="bg-primary p-6 rounded-2xl flex flex-col items-center text-center space-y-4">
      <div className="w-14 h-14 rounded-full bg-accent/20 text-secondary/70 flex items-center justify-center">
      <MapPin className="h-[28px] w-[28px]" />
      </div>
      <div className="w-8 h-8 rounded-full bg-secondary text-primary font-bold flex items-center justify-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">
                  2
                </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Confirm Tyre</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Provide vehicle registration or tyre size (e.g. 205/55 R16) and chosen brand tier.</p>
      </div>
      {/* Step 3 */}
      <div className="bg-primary p-6 rounded-2xl flex flex-col items-center text-center space-y-4">
      <div className="w-14 h-14 rounded-full bg-accent/20 text-secondary/70 flex items-center justify-center">
      <Truck className="h-[28px] w-[28px]" />
      </div>
      <div className="w-8 h-8 rounded-full bg-secondary text-primary font-bold flex items-center justify-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">
                  3
                </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Van En Route</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Our technician is dispatched instantly, providing live ETA updates directly to your phone.</p>
      </div>
      {/* Step 4 */}
      <div className="bg-primary p-6 rounded-2xl flex flex-col items-center text-center space-y-4">
      <div className="w-14 h-14 rounded-full bg-accent/20 text-secondary/70 flex items-center justify-center">
      <Wrench className="h-[28px] w-[28px]" />
      </div>
      <div className="w-8 h-8 rounded-full bg-secondary text-primary font-bold flex items-center justify-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">
                  4
                </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Fitted &amp; Balanced</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Precision fitting, computerized balancing, and new valves fitted safely on-site.</p>
      </div>
      {/* Step 5 */}
      <div className="bg-primary p-6 rounded-2xl flex flex-col items-center text-center space-y-4">
      <div className="w-14 h-14 rounded-full bg-accent/20 text-secondary/70 flex items-center justify-center">
      <CreditCard className="h-[28px] w-[28px]" />
      </div>
      <div className="w-8 h-8 rounded-full bg-secondary text-primary font-bold flex items-center justify-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">
                  5
                </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Back On the Road</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Card or contactless payment accepted curbside. Old casing disposed of responsibly.</p>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 6: REAL LOCAL JOB CARD (#0b1e3d) */}
      <section className="w-full bg-primary text-white py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
      <div>
      <span className="text-secondary text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider font-semibold">Incident Log</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">Recent Bolton Roadside Fix</h2>
      </div>
      <span className="text-[13px] leading-[18px] text-gray-400">Documented on-call dispatch record</span>
      </div>
      <div className="bg-primary-dark rounded-2xl overflow-hidden shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
      <div className="lg:col-span-5 relative h-64 lg:h-auto">
      <Image src="/gallery-precision-care.webp" alt="Professional photograph of a modern UK mobile tyre fitting van parked at roadside in British weather, yellow and blue emergency livery, high-visibility markings, tyre fitting equipment inside, clean realistic documentary photography, dramatic dusk lighting." fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover object-center" />
      <div className="absolute top-4 left-4 bg-secondary text-primary font-bold text-[11px] leading-[14px] tracking-[0.06em] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Completed roadside
                  </div>
      </div>
      <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
      <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Vauxhall Corsa Hatchback</h3>
      <span className="text-[13px] leading-[18px] text-gray-400">A666 Water Street, Bolton</span>
      </div>
      <div className="bg-accent/20 text-accent/40 px-3 py-1 rounded-full text-[14px] leading-[18px] tracking-[0.02em] font-semibold font-bold">
                        29 Min Response
                      </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-2">
      <div>
      <span className="text-[13px] leading-[18px] text-[13px] leading-[18px] text-gray-400 block">Tyre Specification</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">195/55 R16 87V</span>
      </div>
      <div>
      <span className="text-[13px] leading-[18px] text-[13px] leading-[18px] text-gray-400 block">Issue Diagnosed</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-red-400 font-bold">Total Rim Deflation</span>
      </div>
      <div>
      <span className="text-[13px] leading-[18px] text-[13px] leading-[18px] text-gray-400 block">Vehicle Movement</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary font-bold">0 Yards (Static)</span>
      </div>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400">
                      Driver struck an unexpected sunken drainage ironwork along the A666 during evening rush hour. Tyre pressure warning light triggered immediately, dropping to 0 PSI within 150 yards. Driver pulled safely onto the curb. Van arrived in 29 minutes, inspected the alloy wheel for hairline cracks, installed a fresh 195/55 R16 tyre, re-balanced the rim, and torqued the wheel bolts before escorting the driver safely back into traffic.
                    </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
      <div className="flex items-center gap-2 text-white text-[13px] leading-[18px]">
      <CheckCircle2 className="text-secondary h-5 w-5" />
      <span>Alloy Bead Sealed &amp; Wheel Balanced</span>
      </div>
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-hover text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-bold px-6 py-2.5 rounded-full transition" href="tel:07955266077">
      <PhoneCall className="h-[18px] w-[18px]" />
                      Call Similar Dispatch
                    </a>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 7: FAQ BLOCK (#061226) */}
      <section className="w-full bg-primary-dark text-white py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="max-w-3xl space-y-3">
      <span className="text-secondary text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider font-semibold">Common Queries</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">Bolton Mobile Tyre Fitting FAQs</h2>
      </div>
      <div className="space-y-4 max-w-4xl">
      <div className="bg-primary p-6 rounded-2xl space-y-2">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">How quickly can a mobile technician arrive in Bolton?</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Our typical emergency ETA in Bolton (BL1) and adjacent links across Farnworth, Horwich, and Westhoughton ranges between 25 and 45 minutes, subject to live traffic conditions along the A666 and M60.
                </p>
      </div>
      <div className="bg-primary p-6 rounded-2xl space-y-2">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Do I need to take my car to a garage if I get a puncture in Bolton?</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  No. Driving on a flat tyre permanently ruins the tyre carcass and destroys costly alloy rims. Our vans arrive fully equipped to perform punctures repairs (BS AU 159 standard) or complete replacements right on your driveway or the roadside.
                </p>
      </div>
      <div className="bg-primary p-6 rounded-2xl space-y-2">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">What if I do not know my exact tyre size?</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Just give us your vehicle registration number when you call 07955 266 077. We will cross-reference the DVLA database and confirm your factory tyre dimensions before leaving depot.
                </p>
      </div>
      <div className="bg-primary p-6 rounded-2xl space-y-2">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Can you remove locking wheel nuts if my key is lost or broken?</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Yes. Every mobile van carries specialist locking nut extraction tooling that safely grips damaged or lost security keys without causing harm to your vehicle&apos;s wheels.
                </p>
      </div>
      <div className="bg-primary p-6 rounded-2xl space-y-2">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">What payment options do you support curbside?</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  All mobile technicians carry mobile POS terminals accepting Apple Pay, Google Pay, Visa, Mastercard, and American Express. You only pay once the job is fully completed and inspected.
                </p>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 8: RELATED LOCATIONS (#0b1e3d) */}
      <section className="w-full bg-primary text-white py-14">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-4">
      <div>
      <h2 className="font-heading text-[20px] leading-[26px] font-bold text-white">Other Areas Covered Near Bolton</h2>
      <p className="text-[13px] leading-[18px] text-gray-400">Rapid mobile tyre coverage dispatched from our nearby Greater Manchester satellite hubs.</p>
      </div>
      <span className="text-secondary text-[14px] leading-[18px] tracking-[0.02em] font-semibold font-bold">24-Hour Roadside Mobility</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      <a className="bg-primary-dark p-4 rounded-xl flex items-center justify-between group hover:bg-accent/20 transition" href="#">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Farnworth</span>
      <ChevronRight className="text-gray-400 group-hover:text-secondary h-[18px] w-[18px]" />
      </a>
      <a className="bg-primary-dark p-4 rounded-xl flex items-center justify-between group hover:bg-accent/20 transition" href="#">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Horwich</span>
      <ChevronRight className="text-gray-400 group-hover:text-secondary h-[18px] w-[18px]" />
      </a>
      <a className="bg-primary-dark p-4 rounded-xl flex items-center justify-between group hover:bg-accent/20 transition" href="#">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Westhoughton</span>
      <ChevronRight className="text-gray-400 group-hover:text-secondary h-[18px] w-[18px]" />
      </a>
      <a className="bg-primary-dark p-4 rounded-xl flex items-center justify-between group hover:bg-accent/20 transition" href="#">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Bolton</span>
      <ChevronRight className="text-gray-400 group-hover:text-secondary h-[18px] w-[18px]" />
      </a>
      <a className="bg-primary-dark p-4 rounded-xl flex items-center justify-between group hover:bg-accent/20 transition" href="#">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Walkden</span>
      <ChevronRight className="text-gray-400 group-hover:text-secondary h-[18px] w-[18px]" />
      </a>
      </div>
      </div>
      </section>
      {/* SECTION 9: FINAL CTA (Full-Width Solid Gold Band) */}
      <section className="w-full bg-primary-dark px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-[1280px] mx-auto">
      <div className="w-full bg-secondary text-primary py-10 px-6 sm:px-12 rounded-2xl text-center space-y-6 shadow-2xl">
      <div className="space-y-2 max-w-3xl mx-auto">
      <span className="bg-primary text-secondary px-3.5 py-1 rounded-full text-[11px] leading-[14px] tracking-[0.06em] font-bold font-bold uppercase tracking-wider inline-block">
                  24/7 Mobile Tyre Service
                </span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold font-extrabold text-primary">
                  Stranded in Bolton? We Come To You.
                </h2>
      <p className="text-[18px] leading-[28px] text-primary/85 font-medium max-w-2xl mx-auto">
                  From home driveways and depot yards to emergency roadside breakdowns on the A666 and M60—our Bolton fitters are ready to roll.
                </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
      <a className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white font-heading text-[20px] leading-[26px] font-bold font-bold px-8 py-4 rounded-full transition duration-150 shadow-md active:scale-95" href="tel:07955266077">
      <PhoneCall className="h-[24px] w-[24px]" />
                  Call Bolton Fitter 07955 266 077
                </a>
      <a className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-black/10 text-primary border-2 border-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-bold px-8 py-3.5 rounded-full transition duration-150" href="https://wa.me/448009992470" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="h-[22px] w-[22px]" />
                  Send WhatsApp Message
                </a>
      </div>
      <div className="pt-2 text-center">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-primary font-bold">
                  Average 25-45 minute response time • All tyre sizes stocked • BS AU 159 certified
                </span>
      </div>
      </div>
      </div>
      </section>
    </main>
  );
}
