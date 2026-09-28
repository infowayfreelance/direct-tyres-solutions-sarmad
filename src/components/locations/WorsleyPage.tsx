import Image from "next/image";
import { ArrowRight, Building2, Car, CheckCircle2, CircleDot, HelpCircle, Home, MapPin, MessageCircle, PhoneCall, Route, ShieldCheck, Timer, Unlock, Wrench } from "lucide-react";

export default function WorsleyPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* SECTION 1: ASYMMETRIC PHOTO GRID HERO */}
      <section className="w-full bg-primary-dark relative overflow-hidden py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* 2/3 Image Container */}
      <div className="lg:col-span-8 relative min-h-[380px] lg:min-h-[580px] rounded-3xl overflow-hidden shadow-2xl bg-primary-dark group">
      <Image src="/hero-section-images-936x527.webp" alt="Professional 24/7 Mobile Tyre Service Workshop Van stationed in Worsley" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/30 to-transparent"></div>
      <div className="absolute top-6 left-6 flex flex-wrap gap-2.5">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider shadow-md">
      <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
                  24/7 Rapid Response
                </span>
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/90 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold backdrop-blur-md">
      <Timer className="text-secondary h-4 w-4" />
                  Avg 30-45 Min ETA
                </span>
      </div>
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white/80 text-[13px] leading-[18px]">
      <span className="flex items-center gap-1.5 font-semibold text-white">
      <MapPin className="text-secondary h-[14px] w-[14px]" />
                  M60 J13 • M62 • A580 East Lancs Road
                </span>
      <span className="hidden sm:inline-block px-2.5 py-1 bg-primary/60 rounded-md backdrop-blur-sm">Certified IMI Technicians</span>
      </div>
      </div>
      {/* 1/3 Content Panel */}
      <div className="lg:col-span-4 flex flex-col justify-between bg-primary-dark rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl relative backdrop-blur-sm">
      <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest">
      <Car className="text-secondary h-[18px] w-[18px]" />
                  Salford • Greater Manchester
                </div>
      <h1 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold lg:text-[56px] lg:leading-[64px] lg:tracking-[-0.02em] lg:font-black text-white font-black">
                  24/7 Mobile Tyre Fitting in <span className="text-secondary">Worsley</span>
      </h1>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Rapid roadside and residential deployment across M60 Junction 13, the M62 interchange, Bridgewater Canal perimeter, and the A580 corridor. Available day, night, and bank holidays.
                </p>
      </div>
      <div className="mt-8 flex flex-col gap-3.5">
      <a className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider hover:bg-secondary-hover active:scale-95 transition-all shadow-lg shadow-primary-container/20 group" href="tel:08009992470">
      <PhoneCall className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                  Call 0800 999 2470
                </a>
      <a className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-primary/80 hover:bg-primary-light text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-all active:scale-95" href="https://wa.me/448009992470" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="text-gray-400 h-[18px] w-[18px]" />
                  WhatsApp Dispatch
                </a>
      <div className="flex items-center justify-center gap-2 pt-3 text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <ShieldCheck className="text-secondary h-[14px] w-[14px]" />
                  Guaranteed Van Deployment • Fixed Quotes
                </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 2: LOCAL OPERATIONAL INTRO */}
      <section className="w-full bg-primary-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      <div className="lg:col-span-5 flex flex-col gap-3">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  Critical Junction Response
                </span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold lg:text-[40px] lg:leading-[48px] lg:tracking-[-0.02em] lg:font-extrabold text-white font-extrabold">
                  High-Speed Interchanges &amp; Leafy Suburbs
                </h2>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Worsley sits at one of the Northwest&apos;s most critical transit hubs. Our rapid response network solves blowouts in minutes.
                </p>
      </div>
      <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-primary-dark p-6 rounded-2xl shadow-md">
      <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
      <CircleDot className="text-gray-400 h-5 w-5" />
      </div>
      <p className="text-[15px] leading-[24px] text-white/90">
                    Situated right at the dynamic meeting point of the M60 ring road, M62 trans-Pennine route, and M602 city approach, Worsley experiences heavy congestion and sudden puncture emergencies. When rubber fails on high-speed deceleration lanes or during peak commuter crawls on the A580 East Lancs Road, waiting hours is hazardous.
                  </p>
      </div>
      <div className="bg-primary-dark p-6 rounded-2xl shadow-md">
      <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
      <Wrench className="text-secondary h-5 w-5" />
      </div>
      <p className="text-[15px] leading-[24px] text-white/90">
                    Beyond motorways, Worsley’s affluent historic neighborhoods around the Bridgewater Canal, Broadoak Park, and Roe Green demand precision on-site care. We bring dealer-standard fitting, computerized balancers, and top-tier OEM tyres directly to your personal driveway, club car park, or executive office suite without dealer markups.
                  </p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 3: SERVICES (TIGHT 2x2 PHOTO GRID WITH SOLID CAPTION STRIP) */}
      <section className="w-full bg-primary-dark py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-widest">Worsley Fleet Capabilities</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold lg:text-[40px] lg:leading-[48px] lg:tracking-[-0.02em] lg:font-extrabold text-white font-extrabold mt-1">
                  Engineered For Every Scenario
                </h2>
      </div>
      <p className="text-gray-400 text-[13px] leading-[18px] max-w-md">
                Fully self-contained mobile workshops equipped with pneumatic bead breakers, laser balancers, and wide-profile run-flat changers.
              </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Card 1 */}
      <div className="flex flex-col rounded-2xl overflow-hidden shadow-lg bg-primary-dark group">
      <div className="relative h-64 overflow-hidden">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Emergency Motorway Tyre Fitting Support on M60 Hard Shoulder near Worsley" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-4 right-4">
      <span className="px-2.5 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">
                      Priority Dispatch
                    </span>
      </div>
      </div>
      <div className="p-5 bg-primary/60 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
      <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
      <Home className="text-white h-4 w-4" />
      </span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">
                      Emergency Motorway &amp; Trunk Road Service
                    </span>
      </div>
      <ArrowRight className="text-gray-400 group-hover:text-secondary transition-colors h-5 w-5" />
      </div>
      </div>
      {/* Card 2 */}
      <div className="flex flex-col rounded-2xl overflow-hidden shadow-lg bg-primary-dark group">
      <div className="relative h-64 overflow-hidden">
      <Image src="/gallery-roadside-fitting.webp" alt="BS AU 159 Certified Tyre Puncture Repair Inspection Gauge" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-4 right-4">
      <span className="px-2.5 py-1 rounded-full bg-primary text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">
                      Safety Compliant
                    </span>
      </div>
      </div>
      <div className="p-5 bg-primary/60 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
      <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
      <Wrench className="text-white h-4 w-4" />
      </span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">
                      BS AU 159 Puncture Repair
                    </span>
      </div>
      <ArrowRight className="text-gray-400 group-hover:text-secondary transition-colors h-5 w-5" />
      </div>
      </div>
      {/* Card 3 */}
      <div className="flex flex-col rounded-2xl overflow-hidden shadow-lg bg-primary-dark group">
      <div className="relative h-64 overflow-hidden">
      <Image src="/gallery-home-callout.webp" alt="Technician extracting damaged locking wheel nut on vehicle driveway" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-4 right-4">
      <span className="px-2.5 py-1 rounded-full bg-secondary/20 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold">
                      Non-Destructive
                    </span>
      </div>
      </div>
      <div className="p-5 bg-primary/60 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
      <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
      <Unlock className="text-white h-4 w-4" />
      </span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">
                      Locking Wheel Nut Extraction
                    </span>
      </div>
      <ArrowRight className="text-gray-400 group-hover:text-secondary transition-colors h-5 w-5" />
      </div>
      </div>
      {/* Card 4 */}
      <div className="flex flex-col rounded-2xl overflow-hidden shadow-lg bg-primary-dark group">
      <div className="relative h-64 overflow-hidden">
      <Image src="/gallery-evening-callout.webp" alt="Driveway mobile tyre fitting on executive prestige vehicle in Worsley" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-4 right-4">
      <span className="px-2.5 py-1 rounded-full bg-primary text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">
                      Driveway Convenience
                    </span>
      </div>
      </div>
      <div className="p-5 bg-primary/60 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
      <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
      <Car className="text-white h-4 w-4" />
      </span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">
                      Driveway &amp; Prestige Vehicle Fitting
                    </span>
      </div>
      <ArrowRight className="text-gray-400 group-hover:text-secondary transition-colors h-5 w-5" />
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 4: HOW IT WORKS (HORIZONTAL RIBBON OF FLAT NUMERALS 01-05) */}
      <section className="w-full bg-primary-dark py-16 px-4 sm:px-6 lg:px-8 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
      <div className="mb-10 text-center">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-widest">Rapid Protocol</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold lg:text-[40px] lg:leading-[48px] lg:tracking-[-0.02em] lg:font-extrabold text-white font-extrabold mt-1">
                From Breakdown to Mobile in 5 Milestones
              </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-4 relative">
      {/* Step 1 */}
      <div className="flex flex-col bg-primary-dark/60 p-5 rounded-2xl hover:bg-primary-dark transition-colors">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary font-black opacity-90 mb-2">01</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold mb-1">Instant Call</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Dial 0800 999 2470 with your location and tyre dimensions.</p>
      </div>
      {/* Step 2 */}
      <div className="flex flex-col bg-primary-dark/60 p-5 rounded-2xl hover:bg-primary-dark transition-colors">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-gray-400 font-black opacity-90 mb-2">02</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold mb-1">Stock Lock</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Immediate inventory check matching OEM tyre spec and speed ratings.</p>
      </div>
      {/* Step 3 */}
      <div className="flex flex-col bg-primary-dark/60 p-5 rounded-2xl hover:bg-primary-dark transition-colors">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary font-black opacity-90 mb-2">03</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold mb-1">Van En Route</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Closest Worsley technician dispatched with real-time ETA tracking.</p>
      </div>
      {/* Step 4 */}
      <div className="flex flex-col bg-primary-dark/60 p-5 rounded-2xl hover:bg-primary-dark transition-colors">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-gray-400 font-black opacity-90 mb-2">04</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold mb-1">Precision Fit</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Pneumatic swap, new rubber valves, and computerized digital balancing.</p>
      </div>
      {/* Step 5 */}
      <div className="col-span-2 md:col-span-1 flex flex-col bg-primary-dark/60 p-5 rounded-2xl hover:bg-primary-dark transition-colors">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary font-black opacity-90 mb-2">05</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold mb-1">Safe Journey</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Old tyre safely disposed of. Contactless card payment processed on-site.</p>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 5: REAL LOCAL JOB EXAMPLE */}
      <section className="w-full bg-primary-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <div className="bg-primary-dark rounded-3xl overflow-hidden shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
      {/* Photo Left */}
      <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-full">
      <Image src="/gallery-evening-home-visit.webp" alt="Technician changing tyre on Range Rover Sport at Worsley Brow" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-primary-dark/90 lg:from-transparent to-transparent"></div>
      <div className="absolute top-4 left-4">
      <span className="px-3 py-1 rounded-full bg-primary-dark/80 text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold backdrop-blur-md">
                      Verified Dispatch Record #WR-8842
                    </span>
      </div>
      </div>
      {/* Details Right */}
      <div className="lg:col-span-6 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
      <div className="flex items-center gap-2 mb-3">
      <CheckCircle2 className="text-secondary h-4 w-4" />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary font-bold uppercase tracking-wider">Completed Case Study</span>
      </div>
      <h3 className="font-heading text-[30px] leading-[38px] font-bold lg:text-[40px] lg:leading-[48px] lg:tracking-[-0.02em] lg:font-extrabold text-white font-extrabold mb-4">
                    Incident Log: Range Rover Sport — Worsley Brow
                  </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
      <div className="bg-primary/60 p-3.5 rounded-xl">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block mb-1">Incident Scenario</span>
      <span className="text-[15px] leading-[24px] text-white font-semibold">Sharp kerb strike during evening commute crawl</span>
      </div>
      <div className="bg-primary/60 p-3.5 rounded-xl">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block mb-1">Response &amp; Resolution</span>
      <span className="text-[15px] leading-[24px] text-white font-bold">Fitted in 34 mins from first dispatch alert</span>
      </div>
      <div className="bg-primary/60 p-3.5 rounded-xl">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block mb-1">Tyre Fitted</span>
      <span className="text-[15px] leading-[24px] text-white font-semibold">275/40 R21 Pirelli Scorpion Winter/All-Season</span>
      </div>
      <div className="bg-primary/60 p-3.5 rounded-xl">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block mb-1">Technical Spec</span>
      <span className="text-[15px] leading-[24px] text-white font-semibold">Electronically balanced &amp; torque-set</span>
      </div>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400 italic">
                    &quot;Driver was safely turned around on Worsley Brow and heading home toward Roe Green without waiting for a recovery flatbed.&quot;
                  </p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 6: ROADS & NEARBY AREAS COVERED */}
      <section className="w-full bg-primary-dark py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-widest">Immediate Coverage Reach</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold lg:text-[40px] lg:leading-[48px] lg:tracking-[-0.02em] lg:font-extrabold text-white font-extrabold mt-1">
                  Motorway Corridors &amp; Neighboring Boroughs
                </h2>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400 max-w-md">
                Stationed patrol units continuously monitor the orbital junctions to ensure minimum response latency across North &amp; West Greater Manchester.
              </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Arterial Roads Column */}
      <div className="bg-primary-dark p-6 sm:p-8 rounded-3xl">
      <div className="flex items-center gap-3 mb-6">
      <span className="p-2 rounded-xl bg-accent text-white">
      <Route className="h-5 w-5" />
      </span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">Key Highway Arteries</h3>
      </div>
      <ul className="space-y-4 text-[15px] leading-[24px]">
      <li className="flex items-start gap-3 text-white">
      <CheckCircle2 className="text-secondary shrink-0 mt-0.5 h-5 w-5" />
      <div>
      <span className="font-bold text-white">M60 Junction 13:</span> Direct exit ramps, slip lanes, and central orbital flow.
                    </div>
      </li>
      <li className="flex items-start gap-3 text-white">
      <CheckCircle2 className="text-secondary shrink-0 mt-0.5 h-5 w-5" />
      <div>
      <span className="font-bold text-white">M62 Eastbound &amp; Westbound Links:</span> Critical freight corridors linking Liverpool &amp; Leeds.
                    </div>
      </li>
      <li className="flex items-start gap-3 text-white">
      <CheckCircle2 className="text-secondary shrink-0 mt-0.5 h-5 w-5" />
      <div>
      <span className="font-bold text-white">A580 (East Lancashire Road):</span> High-speed express route spanning Salford and Wigan.
                    </div>
      </li>
      <li className="flex items-start gap-3 text-white">
      <CheckCircle2 className="text-secondary shrink-0 mt-0.5 h-5 w-5" />
      <div>
      <span className="font-bold text-white">Walkden Road (A575):</span> Connecting the Worsley interchange north toward Bolton.
                    </div>
      </li>
      </ul>
      </div>
      {/* Surrounding Districts Column */}
      <div className="bg-primary-dark p-6 sm:p-8 rounded-3xl">
      <div className="flex items-center gap-3 mb-6">
      <span className="p-2 rounded-xl bg-secondary/20 text-secondary">
      <Building2 className="h-5 w-5" />
      </span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">Surrounding Districts &amp; Towns</h3>
      </div>
      <div className="grid grid-cols-2 gap-3 text-[15px] leading-[24px]">
      <div className="p-3 bg-primary/60 rounded-xl flex items-center gap-2">
      <MapPin className="text-gray-400 h-4 w-4" />
      <span className="font-semibold text-white">Swinton</span>
      </div>
      <div className="p-3 bg-primary/60 rounded-xl flex items-center gap-2">
      <MapPin className="text-gray-400 h-4 w-4" />
      <span className="font-semibold text-white">Walkden</span>
      </div>
      <div className="p-3 bg-primary/60 rounded-xl flex items-center gap-2">
      <MapPin className="text-gray-400 h-4 w-4" />
      <span className="font-semibold text-white">Eccles</span>
      </div>
      <div className="p-3 bg-primary/60 rounded-xl flex items-center gap-2">
      <MapPin className="text-gray-400 h-4 w-4" />
      <span className="font-semibold text-white">Irlam</span>
      </div>
      <div className="p-3 bg-primary/60 rounded-xl flex items-center gap-2">
      <MapPin className="text-gray-400 h-4 w-4" />
      <span className="font-semibold text-white">Little Hulton</span>
      </div>
      <div className="p-3 bg-primary/60 rounded-xl flex items-center gap-2">
      <MapPin className="text-gray-400 h-4 w-4" />
      <span className="font-semibold text-white">Roe Green &amp; Boothstown</span>
      </div>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-4">
                  Response vans are pre-stocked with standard, SUV, commercial van, and high-performance tyres for all nearby Salford addresses.
                </p>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 7: FAQS (TWO-COLUMN GRID OF 4 QUESTIONS) */}
      <section className="w-full bg-primary-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-widest">Clear Information</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold lg:text-[40px] lg:leading-[48px] lg:tracking-[-0.02em] lg:font-extrabold text-white font-extrabold mt-1">
                Frequently Asked Questions
              </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Q1 */}
      <div className="bg-primary-dark p-6 rounded-2xl">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold flex items-center gap-2.5 mb-2">
      <HelpCircle className="text-secondary h-5 w-5" />
                  How fast can you arrive at M60 Junction 13?
                </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Because our mobile units continuously circulate the Salford and Greater Manchester motorway rings, our typical response time to Worsley interchange (M60 J13 / M62) averages between 30 to 45 minutes, depending on traffic conditions.
                </p>
      </div>
      {/* Q2 */}
      <div className="bg-primary-dark p-6 rounded-2xl">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold flex items-center gap-2.5 mb-2">
      <HelpCircle className="text-secondary h-5 w-5" />
                  Can you fit tyres on high-performance and 4x4 vehicles?
                </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Yes. Our vans carry specialized leverless fitting arms and protective alloy clamping tools designed specifically for low-profile 20&quot; to 23&quot; alloy wheels, run-flat tyres, and luxury 4x4 models without scratching wheels.
                </p>
      </div>
      {/* Q3 */}
      <div className="bg-primary-dark p-6 rounded-2xl">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold flex items-center gap-2.5 mb-2">
      <HelpCircle className="text-secondary h-5 w-5" />
                  What if my locking wheel nut key is broken or lost?
                </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  We carry specialist inverse-thread extraction equipment to safely remove stripped, overtightened, or lost locking wheel nuts on roadside and home driveways without damage to the alloy wheel casing.
                </p>
      </div>
      {/* Q4 */}
      <div className="bg-primary-dark p-6 rounded-2xl">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold flex items-center gap-2.5 mb-2">
      <HelpCircle className="text-secondary h-5 w-5" />
                  Are puncture repairs completed to British Standards?
                </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  All our puncture interventions comply strictly with BS AU 159. If your tyre tread is punctured by a nail or screw within the central 60-70% zone without sidewall cord compromise, we perform a permanent vulcanized plug repair.
                </p>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 8: FINAL CTA BANNER */}
      <section className="w-full bg-primary-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-gradient-to-b from-primary/60 to-primary-dark p-8 sm:p-12 rounded-3xl text-center shadow-2xl relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="relative z-10 flex flex-col items-center">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 text-gray-400 text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider mb-4">
      <span className="w-2 h-2 rounded-full bg-accent"></span>
                Emergency Units Active Now
              </span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold sm:text-[40px] sm:leading-[48px] sm:tracking-[-0.02em] sm:font-extrabold text-white font-black mb-3">
                Stranded in Worsley?
              </h2>
      <p className="text-[18px] leading-[28px] text-gray-400 max-w-xl mx-auto mb-8">
                Do not risk driving on a shredded tyre or waiting hours for standard recovery. Our mobile tyre workshops are operational 24/7 across Worsley, the M60, and East Lancs Road.
              </p>
      <a className="inline-flex items-center justify-center gap-3 py-4 px-10 rounded-full bg-secondary text-primary font-heading text-[20px] leading-[26px] font-bold uppercase tracking-wider hover:bg-secondary-hover active:scale-95 transition-all shadow-xl shadow-primary-container/25" href="tel:08009992470">
      <PhoneCall className="h-6 w-6 font-bold" />
                Call 0800 999 2470
              </a>
      <div className="mt-6 flex flex-wrap justify-center items-center gap-4 text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <span>• No membership required</span>
      <span>• Fixed upfront price</span>
      <span>• On-site card payment</span>
      </div>
      </div>
      </div>
      </section>
    </main>
  );
}
