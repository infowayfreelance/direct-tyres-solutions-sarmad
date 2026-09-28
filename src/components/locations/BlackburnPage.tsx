import Image from "next/image";
import { ArrowRight, Car, CheckCircle2, ChevronDown, MapPin, MessageCircle, PhoneCall, Truck, Unlock, Wrench } from "lucide-react";

export default function BlackburnPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* SECTION 1: SPLIT-SCREEN PHOTO HERO */}
      <section className="w-full bg-primary-dark">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin py-space-xl lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-gutter items-center">
      {/* Left 55% Content */}
      <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-space-lg">
      <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-3.5 py-1.5 rounded-full mb-6">
      <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold tracking-wider uppercase text-white">Lancashire Mobile Response Unit</span>
      </div>
      <h1 className="font-heading text-[36px] leading-[42px] tracking-[-0.01em] font-black md:text-[56px] md:leading-[64px] md:tracking-[-0.02em] md:font-black text-white mb-6">
                  24/7 Mobile Tyre Fitting in Blackburn
                </h1>
      <p className="text-[18px] leading-[28px] text-white/90 mb-8 max-w-2xl">
                  Emergency roadside, retail park, and residential mobile tyre replacement across Blackburn, M65 Junctions 4–6, and the A666 corridor. Dedicated fitted vans on-scene within 25–40 minutes.
                </p>
      {/* CTAs */}
      <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
      <a className="inline-flex items-center justify-center gap-3 bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase px-8 py-4 rounded-full transition-transform active:scale-95 shadow-xl hover:opacity-95" href="tel:08009992470">
      <PhoneCall className="h-6 w-6" />
                    Call 0800 999 2470
                  </a>
      <a className="inline-flex items-center justify-center gap-2 bg-primary/80 hover:bg-primary text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold px-7 py-4 rounded-full transition-colors backdrop-blur-md" href="https://wa.me/448009992470">
      <MessageCircle className="h-5 w-5 text-secondary" />
                    WhatsApp Dispatch
                  </a>
      </div>
      {/* Quick trust metrics */}
      <div className="grid grid-cols-3 gap-4 pt-10 mt-10 w-full bg-primary-dark/40 rounded-2xl p-4">
      <div>
      <p className="font-heading text-[20px] leading-[26px] font-bold text-secondary font-black">25–40m</p>
      <p className="text-[13px] leading-[18px] text-white/70">M65 Corridor ETA</p>
      </div>
      <div>
      <p className="font-heading text-[20px] leading-[26px] font-bold text-secondary font-black">24/7/365</p>
      <p className="text-[13px] leading-[18px] text-white/70">Night &amp; Day Shift</p>
      </div>
      <div>
      <p className="font-heading text-[20px] leading-[26px] font-bold text-secondary font-black">BS AU 159</p>
      <p className="text-[13px] leading-[18px] text-white/70">Certified Repairs</p>
      </div>
      </div>
      </div>
      {/* Right 45% Photo Panel */}
      <div className="lg:col-span-5 relative mt-6 lg:mt-0">
      <div className="relative w-full h-[460px] lg:h-[540px] rounded-2xl overflow-hidden bg-primary/80 shadow-2xl">
      <Image src="/hero-section-images-936x527.webp" alt="Yellow and white emergency mobile tyre fitting response van parked on the hard shoulder of a British motorway at dusk with bright amber strobe beacons illuminated, roadside intervention setup with jack and spare tyre ready in Blackburn Lancashire." fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-80"></div>
      </div>
      {/* Floating Stat Badge */}
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-11/12 bg-primary-dark text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center justify-between">
      <div className="flex items-center gap-2.5">
      <span className="w-3 h-3 rounded-full bg-secondary"></span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white uppercase tracking-wider">Active Patrol</span>
      </div>
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary">
                    Avg Arrival: 25–35 Mins
                  </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 2: 2x2 SERVICES GRID */}
      <section className="w-full bg-primary-dark py-space-xl lg:py-24">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
      <div className="max-w-3xl mb-12">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider text-secondary">Comprehensive Roadside &amp; Mobile Operations</span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white mt-2">Specialist Tyre Solutions Across Blackburn</h2>
      <p className="text-[18px] leading-[28px] text-white/80 mt-3">From blowout rescues on the M65 to residential driveway fittings in Darwen, our onboard workshop vans execute full tyre replacement and precision wheel balancing anywhere.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
      {/* Service Card 1 */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden shadow-xl flex flex-col group hover:bg-primary/80 transition-colors">
      <div className="relative h-60 w-full overflow-hidden bg-primary">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Automotive roadside tyre replacement technician kneeling next to a car with an electric cordless impact wrench removing wheel nuts on an asphalt roadside in Lancashire UK." fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-4 right-4 bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md">
      <Car className="h-5 w-5" />
      </div>
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
      <div>
      <h3 className="font-heading text-[22px] leading-[28px] font-bold md:text-[30px] md:leading-[38px] md:font-bold text-white mb-2">Emergency Roadside Replacement</h3>
      <p className="text-[15px] leading-[24px] text-white/80 mb-6">
                      Rapid motorway and dual carriageway dispatch. We stock budget, mid-range, and premium tyres including Michelin, Pirelli, and Bridgestone to replace blowouts instantly safely off the live carriageway.
                    </p>
      </div>
      <div className="flex items-center text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold gap-2">
      <span>Rapid Highway Response</span>
      <ArrowRight className="h-[18px] w-[18px]" />
      </div>
      </div>
      </div>
      {/* Service Card 2 */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden shadow-xl flex flex-col group hover:bg-primary/80 transition-colors">
      <div className="relative h-60 w-full overflow-hidden bg-primary">
      <Image src="/gallery-roadside-fitting.webp" alt="Brand new car tyre tread close up with mobile technician inspection gauge" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-4 right-4 bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md">
      <Wrench className="h-5 w-5" />
      </div>
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
      <div>
      <h3 className="font-heading text-[22px] leading-[28px] font-bold md:text-[30px] md:leading-[38px] md:font-bold text-white mb-2">BS AU 159 Puncture Repair</h3>
      <p className="text-[15px] leading-[24px] text-white/80 mb-6">
                      British Standard puncture remediation for tread nail and screw punctures. Internal mushroom-plug vulcanisation ensures long-term integrity without purchasing unnecessary replacement units.
                    </p>
      </div>
      <div className="flex items-center text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold gap-2">
      <span>Mobile Vulcanisation Setup</span>
      <ArrowRight className="h-[18px] w-[18px]" />
      </div>
      </div>
      </div>
      {/* Service Card 3 */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden shadow-xl flex flex-col group hover:bg-primary/80 transition-colors">
      <div className="relative h-60 w-full overflow-hidden bg-primary">
      <Image src="/gallery-home-callout.webp" alt="Mechanic working on specialized alloy wheel locking wheel nut removal using master extraction tools in a driveway residential setting." fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-4 right-4 bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md">
      <Unlock className="h-5 w-5" />
      </div>
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
      <div>
      <h3 className="font-heading text-[22px] leading-[28px] font-bold md:text-[30px] md:leading-[38px] md:font-bold text-white mb-2">Locking Wheel Nut Removal</h3>
      <p className="text-[15px] leading-[24px] text-white/80 mb-6">
                      Lost your key or stripped the pattern? Our mobile units carry inverse-thread hardened extraction tooling to safely extract damaged locking wheel bolts without scratching or scuffing alloy rims.
                    </p>
      </div>
      <div className="flex items-center text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold gap-2">
      <span>Non-Destructive Alloy Care</span>
      <ArrowRight className="h-[18px] w-[18px]" />
      </div>
      </div>
      </div>
      {/* Service Card 4 */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden shadow-xl flex flex-col group hover:bg-primary/80 transition-colors">
      <div className="relative h-60 w-full overflow-hidden bg-primary">
      <Image src="/gallery-evening-callout.webp" alt="Commercial delivery van fleet tyre service with technician mounting heavy ply reinforced commercial tyres outside warehouse logistics facility." fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-4 right-4 bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md">
      <Truck className="h-5 w-5" />
      </div>
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
      <div>
      <h3 className="font-heading text-[22px] leading-[28px] font-bold md:text-[30px] md:leading-[38px] md:font-bold text-white mb-2">Commercial Van &amp; Fleet Tyres</h3>
      <p className="text-[15px] leading-[24px] text-white/80 mb-6">
                      High-load rating (C-Rated) commercial fitments for Ford Transit, Mercedes Sprinter, and regional hauliers. Direct on-site fitting at industrial estates to minimise delivery vehicle downtime.
                    </p>
      </div>
      <div className="flex items-center text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold gap-2">
      <span>Fleet Priority Accounts</span>
      <ArrowRight className="h-[18px] w-[18px]" />
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 3: ROADS & AREAS COVERAGE PANEL */}
      <section className="w-full bg-primary-dark py-space-xl lg:py-20">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
      <div className="bg-primary-dark rounded-2xl p-6 md:p-10 shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-7 flex flex-col">
      <div className="flex items-center gap-2 text-secondary text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider mb-2">
      <MapPin className="h-[18px] w-[18px]" />
                    Blackburn Operational Sector
                  </div>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white mb-4">
                    Immediate Dispatch Across Primary Arteries &amp; Local Towns
                  </h2>
      <p className="text-[15px] leading-[24px] text-white/80 mb-6">
                    Our mobile units maintain stationary patrol positions alongside junction roundabouts and key transit links across Lancashire. We reach roadside breakdowns and private properties swiftly with pre-loaded inventory.
                  </p>
      {/* Key Roads */}
      <div className="mb-6">
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-3">Key Arteries &amp; Express Corridors:</p>
      <div className="flex flex-wrap gap-2.5">
      <span className="bg-primary text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold px-4 py-2 rounded-xl">M65 J4 (Darwen)</span>
      <span className="bg-primary text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold px-4 py-2 rounded-xl">M65 J5 (Shadsworth)</span>
      <span className="bg-primary text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold px-4 py-2 rounded-xl">M65 J6 (Whitebirk)</span>
      <span className="bg-primary text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold px-4 py-2 rounded-xl">A666 Whalley Banks / Bolton Rd</span>
      <span className="bg-primary text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold px-4 py-2 rounded-xl">A6078 Town Centre Ring</span>
      <span className="bg-primary text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold px-4 py-2 rounded-xl">Whitebirk Retail Park</span>
      </div>
      </div>
      {/* Nearby Towns */}
      <div>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-3">Surrounding Lancashire Hubs Covered:</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      <div className="flex items-center gap-2 bg-primary/60 px-3.5 py-2.5 rounded-xl">
      <CheckCircle2 className="text-secondary h-4 w-4" />
      <span className="text-[15px] leading-[24px] text-white font-semibold">Darwen</span>
      </div>
      <div className="flex items-center gap-2 bg-primary/60 px-3.5 py-2.5 rounded-xl">
      <CheckCircle2 className="text-secondary h-4 w-4" />
      <span className="text-[15px] leading-[24px] text-white font-semibold">Accrington</span>
      </div>
      <div className="flex items-center gap-2 bg-primary/60 px-3.5 py-2.5 rounded-xl">
      <CheckCircle2 className="text-secondary h-4 w-4" />
      <span className="text-[15px] leading-[24px] text-white font-semibold">Rishton</span>
      </div>
      <div className="flex items-center gap-2 bg-primary/60 px-3.5 py-2.5 rounded-xl">
      <CheckCircle2 className="text-secondary h-4 w-4" />
      <span className="text-[15px] leading-[24px] text-white font-semibold">Great Harwood</span>
      </div>
      <div className="flex items-center gap-2 bg-primary/60 px-3.5 py-2.5 rounded-xl">
      <CheckCircle2 className="text-secondary h-4 w-4" />
      <span className="text-[15px] leading-[24px] text-white font-semibold">Oswaldtwistle</span>
      </div>
      <div className="flex items-center gap-2 bg-primary/60 px-3.5 py-2.5 rounded-xl">
      <CheckCircle2 className="text-secondary h-4 w-4" />
      <span className="text-[15px] leading-[24px] text-white font-semibold">Mellor &amp; Ribble</span>
      </div>
      </div>
      </div>
      </div>
      {/* Photo Beside Panel */}
      <div className="lg:col-span-5 relative h-80 lg:h-full min-h-[340px] rounded-2xl overflow-hidden shadow-xl">
      <Image src="/gallery-evening-home-visit.webp" alt="Emergency tyre service vehicle parked with warning lights on beside a British road at sunset near Blackburn Lancashire, technician replacing a car tyre." fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-60"></div>
      <div className="absolute bottom-4 left-4 right-4 bg-primary/60 backdrop-blur-md p-4 rounded-xl">
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Lancashire Mobile Fleet</p>
      <p className="text-[13px] leading-[18px] text-white/80">Equipped with run-flat changers &amp; digital nitrogen inflators</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 4: HOW-IT-WORKS 5-STEP RIBBON */}
      <section className="w-full bg-primary-dark py-space-xl lg:py-24">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
      <div className="text-center max-w-2xl mx-auto mb-16">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider text-secondary">Five-Stage Emergency Protocol</span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white mt-2">How Our Mobile Fitment Works</h2>
      <p className="text-[18px] leading-[28px] text-white/80 mt-2">Zero hassle. No recovery flatbed needed. We resolve the puncture or blowout on location.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
      {/* Step 1 */}
      <div className="bg-primary/60 p-6 rounded-2xl flex flex-col items-center text-center shadow-lg relative">
      <div className="w-12 h-12 rounded-full bg-secondary text-primary font-heading text-[20px] leading-[26px] font-bold flex items-center justify-center font-black mb-4 shadow-md">
                  01
                </div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Urgent Call</h4>
      <p className="text-[13px] leading-[18px] text-white/75">Dial our direct phone line. Tell us your location or road milestone.</p>
      </div>
      {/* Step 2 */}
      <div className="bg-primary/60 p-6 rounded-2xl flex flex-col items-center text-center shadow-lg relative">
      <div className="w-12 h-12 rounded-full bg-primary text-secondary font-heading text-[20px] leading-[26px] font-bold flex items-center justify-center font-black mb-4">
                  02
                </div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Tyre Spec Matched</h4>
      <p className="text-[13px] leading-[18px] text-white/75">We confirm tyre dimensions via reg lookup or sidewall size reading.</p>
      </div>
      {/* Step 3 */}
      <div className="bg-primary/60 p-6 rounded-2xl flex flex-col items-center text-center shadow-lg relative">
      <div className="w-12 h-12 rounded-full bg-accent text-white font-heading text-[20px] leading-[26px] font-bold flex items-center justify-center font-black mb-4 shadow-md">
                  03
                </div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Van Dispatched</h4>
      <p className="text-[13px] leading-[18px] text-white/75">Our nearest liveried mobile van routes to you with ETA via live GPS.</p>
      </div>
      {/* Step 4 */}
      <div className="bg-primary/60 p-6 rounded-2xl flex flex-col items-center text-center shadow-lg relative">
      <div className="w-12 h-12 rounded-full bg-primary text-secondary font-heading text-[20px] leading-[26px] font-bold flex items-center justify-center font-black mb-4">
                  04
                </div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Digital Torque &amp; Balance</h4>
      <p className="text-[13px] leading-[18px] text-white/75">New rubber fitted, laser-balanced, and torqued to OEM specifications.</p>
      </div>
      {/* Step 5 */}
      <div className="bg-primary/60 p-6 rounded-2xl flex flex-col items-center text-center shadow-lg relative">
      <div className="w-12 h-12 rounded-full bg-secondary text-primary font-heading text-[20px] leading-[26px] font-bold flex items-center justify-center font-black mb-4 shadow-md">
                  05
                </div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Contactless &amp; Drive</h4>
      <p className="text-[13px] leading-[18px] text-white/75">Pay via card terminal or link and get back safely on the road.</p>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 5: REAL JOB INCIDENT REPORT */}
      <section className="w-full bg-primary-dark py-space-xl lg:py-20">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
      <div className="bg-primary/60 rounded-2xl p-6 md:p-8 shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/* Thumbnail */}
      <div className="lg:col-span-4 relative h-64 lg:h-72 rounded-xl overflow-hidden bg-primary/80 shadow-md">
      <Image src="/gallery-precision-care.webp" alt="Technician servicing a modern SUV wheel with heavy duty mechanical tyre change equipment on a wet shopping center car park surface." fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute top-3 left-3 bg-secondary text-primary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase px-3 py-1 rounded-full">
                    Field Log
                  </div>
      </div>
      {/* Report Details */}
      <div className="lg:col-span-8 flex flex-col">
      <div className="flex flex-wrap items-center gap-3 mb-3">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider text-gray-400">Verified Incident Report #BB-8910</span>
      <span className="bg-primary text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold px-3 py-1 rounded-full">Completed in 38 Mins Total</span>
      </div>
      <h3 className="font-heading text-[22px] leading-[28px] font-bold md:text-[30px] md:leading-[38px] md:font-bold text-white mb-3">
                    Whitebirk Retail Park, Blackburn — Volkswagen Tiguan
                  </h3>
      <p className="text-[15px] leading-[24px] text-white/90 mb-6">
                    Driver suffered severe kerb impact on a concrete splitter island resulting in an unrepairable sidewall pinch flat. Our mobile unit dispatched from J6 reached the vehicle bay in 23 minutes. Fitted and balanced a brand new 235/50 R19 tyre right in the shopping bay without requiring vehicle recovery or towing.
                  </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-primary-dark p-4 rounded-xl">
      <div>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase text-white/60">Location</p>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Whitebirk, BB1</p>
      </div>
      <div>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase text-white/60">Tyre Spec</p>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">235/50 R19 XL</p>
      </div>
      <div>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase text-white/60">Response Time</p>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary">23 Minutes</p>
      </div>
      <div>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase text-white/60">Fitment Type</p>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">On-Bay Mobile</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 6: FAQ ACCORDION */}
      <section className="w-full bg-primary-dark py-space-xl lg:py-24">
      <div className="max-w-[960px] mx-auto px-margin-mobile md:px-margin">
      <div className="text-center mb-12">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider text-secondary">Driver Questions Answered</span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white mt-2">Blackburn Mobile Tyre FAQ</h2>
      </div>
      <div className="flex flex-col gap-4">
      {/* Item 1 */}
      <details className="group bg-primary/60 rounded-2xl p-6 transition-all [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer" open>
      <summary className="flex items-center justify-between font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">
      <span>How fast can a van reach me along the M65 corridor?</span>
      <ChevronDown className="text-secondary group-open:rotate-180 transition-transform h-5 w-5" />
      </summary>
      <p className="text-[15px] leading-[24px] text-white/80 mt-4">
                  Our dedicated Blackburn mobile vans operate immediately off Junction 5 and Junction 6. Average arrival times across M65 Junctions 4 through 6 sit between 25 to 35 minutes, traffic permitting. We provide live dispatch updates and direct phone confirmation once on route.
                </p>
      </details>
      {/* Item 2 */}
      <details className="group bg-primary/60 rounded-2xl p-6 transition-all [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer">
      <summary className="flex items-center justify-between font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">
      <span>Can you change tyres on narrow or steep terraced streets in Blackburn?</span>
      <ChevronDown className="text-secondary group-open:rotate-180 transition-transform h-5 w-5" />
      </summary>
      <p className="text-[15px] leading-[24px] text-white/80 mt-4">
                  Yes. Our vans are engineered with compact high-power onboard generators, low-profile hydraulic trolley jacks, and wheel-chocking systems specifically configured for Lancashire&apos;s steep hills and tight Victorian terraced streets.
                </p>
      </details>
      {/* Item 3 */}
      <details className="group bg-primary/60 rounded-2xl p-6 transition-all [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer">
      <summary className="flex items-center justify-between font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">
      <span>What if I have lost or damaged my locking wheel nut key?</span>
      <ChevronDown className="text-secondary group-open:rotate-180 transition-transform h-5 w-5" />
      </summary>
      <p className="text-[15px] leading-[24px] text-white/80 mt-4">
                  We carry specialist reverse-threaded locking nut extraction equipment on every dispatch van. Our certified technicians extract rounded, over-tightened, or missing key bolts cleanly without inflicting any harm to your alloy wheel faces.
                </p>
      </details>
      {/* Item 4 */}
      <details className="group bg-primary/60 rounded-2xl p-6 transition-all [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer">
      <summary className="flex items-center justify-between font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">
      <span>What payment methods do technicians take on scene?</span>
      <ChevronDown className="text-secondary group-open:rotate-180 transition-transform h-5 w-5" />
      </summary>
      <p className="text-[15px] leading-[24px] text-white/80 mt-4">
                  All technicians carry secure mobile chip-and-pin card machines accepting Apple Pay, Google Pay, Visa, Mastercard, and commercial fleet fuel cards. You only pay after the tyre is fitted, balanced, and verified.
                </p>
      </details>
      </div>
      </div>
      </section>
      {/* SECTION 7: FINAL SOLID FLAT GOLD CTA BAR */}
      <section className="w-full bg-secondary py-12 md:py-16 text-primary">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
      <div className="flex flex-col text-center lg:text-left">
      <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-2">
      <span className="w-3 h-3 rounded-full bg-primary"></span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider font-extrabold text-primary">Always Available • 24 Hours / 7 Days</span>
      </div>
      <h2 className="font-heading text-[36px] leading-[42px] tracking-[-0.01em] font-black md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-primary font-black">
                  Stranded in Blackburn? Van Dispatched in Minutes.
                </h2>
      <p className="text-[18px] leading-[28px] text-primary/90 mt-2 max-w-2xl font-medium">
                  M65, A666 corridor, retail parks, or outside your front door. Speak directly to our local controller now.
                </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary-dark text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase px-10 py-5 rounded-full shadow-2xl transition-transform active:scale-95" href="tel:08009992470">
      <PhoneCall className="h-6 w-6 text-secondary" />
                  Call 0800 999 2470
                </a>
      </div>
      </div>
      </div>
      </section>
    </main>
  );
}
