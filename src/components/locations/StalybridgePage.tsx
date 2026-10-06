import Image from "next/image";
import { Car, CheckCircle2, ChevronDown, Clock, CreditCard, Home, MapPin, MessageCircle, Navigation, PhoneCall, ShieldCheck, Unlock, Wrench } from "lucide-react";

export default function StalybridgePage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      <div className="flex flex-col w-full text-white">
      {/* 1. Hero Photo Strip (Full-Bleed) */}
      <section className="relative w-full overflow-hidden bg-primary-dark">
      <div className="relative absolute inset-0 z-0">
      <Image src="/hero-section-images-936x527.webp" alt="Direct Tyre Solutions mobile van roadside in Stalybridge" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover object-center opacity-40 scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-primary-dark/60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-20 md:py-28 flex flex-col items-center text-center">
      {/* Real-time Status Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/80 backdrop-blur-md border border-white/10 shadow-lg mb-6">
      <span className="relative flex h-2.5 w-2.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
      </span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary">24/7 Rapid Response Unit</span>
      <span className="text-xs text-gray-400">•</span>
      <span className="text-xs text-gray-400">Stalybridge &amp; Pennine Fringe</span>
      </div>
      <h1 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white font-black uppercase text-balance">
              24/7 Mobile Tyre Fitting in <span className="text-secondary">Stalybridge</span>
            </h1>
      <p className="mt-4 text-[15px] leading-[24px] md:text-[18px] md:leading-[28px] text-gray-400 max-w-2xl text-balance">
              Emergency roadside tyre repair and rapid driveway fitting along the <span className="text-white font-semibold">A6018 Stamford Street</span>, steep Pennine inclines, and the commuter corridor of the <span className="text-white font-semibold">A635 towards Mossley</span>.
            </p>
      {/* Live ETA & dispatch indicator */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400/90">
      <div className="flex items-center gap-1.5 bg-primary/60 px-3 py-1 rounded-full border border-white/5">
      <Navigation className="h-[14px] w-[14px] text-secondary" />
      <span>Average Arrival: <strong className="text-white">25–40 Mins</strong></span>
      </div>
      <div className="flex items-center gap-1.5 bg-primary/60 px-3 py-1 rounded-full border border-white/5">
      <ShieldCheck className="h-[14px] w-[14px] text-gray-400" />
      <span>Fully Equipped Mobile Vans</span>
      </div>
      <div className="flex items-center gap-1.5 bg-primary/60 px-3 py-1 rounded-full border border-white/5">
      <CreditCard className="h-[14px] w-[14px] text-secondary" />
      <span>Contactless Roadside Pay</span>
      </div>
      </div>
      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary hover:bg-secondary-hover text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold transition-all shadow-[0_0_25px_rgba(255,215,0,0.3)] hover:scale-[1.02] active:scale-95" href="tel:07955266077">
      <PhoneCall className="font-bold h-5 w-5" fill="currentColor" strokeWidth={0} />
      <span>CALL 07955 266 077</span>
      </a>
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-primary/80 hover:bg-primary text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold border border-white/10 transition-all hover:scale-[1.02] active:scale-95" href="https://wa.me/448009992470?text=I%20need%20emergency%20tyre%20assistance%20in%20Stalybridge" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="text-secondary h-5 w-5" />
      <span>WhatsApp Dispatch</span>
      </a>
      </div>
      </div>
      </section>
      {/* 2. Local Intro (Centered Column ~760px) */}
      <section className="w-full bg-primary-dark py-16 px-4">
      <div className="max-w-[760px] mx-auto flex flex-col gap-6 text-white">
      <div className="inline-flex items-center gap-2 self-start text-secondary text-xs uppercase tracking-widest font-bold">
      <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
              Local Operational Profile
            </div>
      <h2 className="font-heading text-[22px] leading-[28px] font-bold md:text-[30px] md:leading-[38px] md:font-bold text-white tracking-tight">
              Rapid deployment built for Stalybridge’s valley roads and steep commuter hills.
            </h2>
      <p className="text-[15px] leading-[24px] text-gray-400">
              Nestled in the deep Tame Valley below the wild moorland slopes of the Pennine fringe, Stalybridge poses distinctive roadside challenges. From the narrow, high-friction gradients of Mottram Road and Ridge Hill to the heavy industrial and rail-commuter traffic bottlenecking along Stamford Street, tyre failures here frequently happen in precarious, unlit, or gradient-heavy locations where attempting a DIY spare wheel change is outright dangerous.
            </p>
      <p className="text-[15px] leading-[24px] text-gray-400">
              Rather than waiting hours for an expensive recovery tow truck to pull your vehicle to an off-site depot, Direct Tyre Solutions dispatches high-clearance, completely self-powered mobile workshops directly to your pinpoint location. Whether you are pulled onto the kerb along the A6018, stranded near Stalybridge railway station, or stuck on your driveway before the morning Manchester run, our certified technicians carry premium, mid-range, and run-flat stock for immediate on-the-spot installation and digital wheel balancing.
            </p>
      {/* Micro Metric Grid */}
      <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/5">
      <div className="p-4 rounded-xl bg-primary-dark border border-white/5 flex flex-col">
      <span className="font-heading text-white text-2xl font-black">28m</span>
      <span className="text-xs text-gray-400 mt-1">Average Stalybridge Response</span>
      </div>
      <div className="p-4 rounded-xl bg-primary-dark border border-white/5 flex flex-col">
      <span className="font-heading text-secondary text-2xl font-black">24/7</span>
      <span className="text-xs text-gray-400 mt-1">Night &amp; Day Mobile Cover</span>
      </div>
      <div className="p-4 rounded-xl bg-primary-dark border border-white/5 flex flex-col">
      <span className="font-heading text-white text-2xl font-black">100%</span>
      <span className="text-xs text-gray-400 mt-1">Roadside Digital Balancing</span>
      </div>
      </div>
      </div>
      </section>
      {/* 3. Services Photo Strip (Full-bleed) */}
      <section className="relative w-full bg-primary-dark py-20 px-4 sm:px-6 overflow-hidden">
      {/* Full-bleed photo backdrop */}
      <div className="relative absolute inset-0 z-0 opacity-25">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Emergency tyre breakdown response van on roadside at night" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary-dark/90 to-primary-dark"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
      <div className="text-center max-w-xl mb-12">
      <span className="text-xs uppercase tracking-widest text-secondary font-bold">On-Demand Fleet Capabilities</span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white font-bold mt-2">
                Specialist Roadside &amp; Mobile Services
              </h2>
      <p className="text-gray-400 mt-2 text-sm">
                Everything completed directly inside our self-sufficient service vans without needing a workshop ramp.
              </p>
      </div>
      {/* 4 Horizontal Cards with Solid Dark Navy Caption Bars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {/* Card 1 */}
      <div className="flex flex-col rounded-2xl overflow-hidden bg-primary-dark/90 backdrop-blur-md border border-white/10 shadow-xl group hover:border-secondary/40 transition-all">
      <div className="p-6 flex-1 flex flex-col">
      <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-gray-400 mb-4 border border-accent/40">
      <Car className="h-5 w-5" />
      </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white group-hover:text-secondary transition-colors">Emergency Replacement</h3>
      <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    Blowouts, sidewall ruptures, and dangerous pothole tears sorted immediately roadside with exact-match replacements.
                  </p>
      </div>
      <div className="px-5 py-3 bg-primary border-t border-white/5 flex items-center justify-between text-xs">
      <span className="text-secondary font-bold">Urgent Dispatch</span>
      <span className="text-gray-400">Car, 4x4 &amp; Van</span>
      </div>
      </div>
      {/* Card 2 */}
      <div className="flex flex-col rounded-2xl overflow-hidden bg-primary-dark/90 backdrop-blur-md border border-white/10 shadow-xl group hover:border-secondary/40 transition-all">
      <div className="p-6 flex-1 flex flex-col">
      <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-gray-400 mb-4 border border-accent/40">
      <Wrench className="h-5 w-5" />
      </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white group-hover:text-secondary transition-colors">Puncture Vulcanisation</h3>
      <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    Strict BSAU159-compliant internal combi-plug repairs for tread-area screw and nail penetrations where safe.
                  </p>
      </div>
      <div className="px-5 py-3 bg-primary border-t border-white/5 flex items-center justify-between text-xs">
      <span className="text-secondary font-bold">BSAU159 Standard</span>
      <span className="text-gray-400">Safe &amp; Permanent</span>
      </div>
      </div>
      {/* Card 3 */}
      <div className="flex flex-col rounded-2xl overflow-hidden bg-primary-dark/90 backdrop-blur-md border border-white/10 shadow-xl group hover:border-secondary/40 transition-all">
      <div className="p-6 flex-1 flex flex-col">
      <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-gray-400 mb-4 border border-accent/40">
      <Unlock className="h-5 w-5" />
      </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white group-hover:text-secondary transition-colors">Locking Nut Removal</h3>
      <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    Rounded off, stripped, or lost locking wheel nut keys? Non-destructive specialist reverse-torque tooling on-board.
                  </p>
      </div>
      <div className="px-5 py-3 bg-primary border-t border-white/5 flex items-center justify-between text-xs">
      <span className="text-secondary font-bold">Alloy-Safe Tools</span>
      <span className="text-gray-400">Zero Damage</span>
      </div>
      </div>
      {/* Card 4 */}
      <div className="flex flex-col rounded-2xl overflow-hidden bg-primary-dark/90 backdrop-blur-md border border-white/10 shadow-xl group hover:border-secondary/40 transition-all">
      <div className="p-6 flex-1 flex flex-col">
      <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-gray-400 mb-4 border border-accent/40">
      <Home className="h-5 w-5" />
      </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white group-hover:text-secondary transition-colors">Driveway Fitting</h3>
      <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    Pre-booked or same-day scheduled fitting at your home or workplace across Stalybridge without queueing at garages.
                  </p>
      </div>
      <div className="px-5 py-3 bg-primary border-t border-white/5 flex items-center justify-between text-xs">
      <span className="text-secondary font-bold">At Home or Work</span>
      <span className="text-gray-400">Complete Convenience</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 4. How It Works (Centered Column ~760px) */}
      <section className="w-full bg-primary-dark py-20 px-4">
      <div className="max-w-[760px] mx-auto flex flex-col">
      <div className="text-left mb-10">
      <span className="text-xs uppercase tracking-widest text-secondary font-bold">5-Step Protocol</span>
      <h2 className="font-heading text-[22px] leading-[28px] font-bold md:text-[30px] md:leading-[38px] md:font-bold text-white font-bold mt-1">
                How Mobile Fitting Works in Stalybridge
              </h2>
      <p className="text-sm text-gray-400 mt-1">
                Zero paperwork, zero towing stress. We bring the tyre bay directly to your wheel.
              </p>
      </div>
      {/* Vertical Clean List (1 to 5) */}
      <div className="flex flex-col gap-6">
      {/* Step 1 */}
      <div className="flex gap-4 p-5 rounded-2xl bg-primary-dark border border-white/5 hover:border-white/15 transition-all">
      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/60 text-secondary font-heading font-bold border border-secondary/30">
                  1
                </div>
      <div className="flex flex-col justify-center">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Initial Call &amp; Location Lock</h3>
      <p className="text-gray-400 text-xs mt-1">
                    Dial 07955 266 077. Give us your vehicle registration, tyre size (e.g. 225/45 R17), and exact location in Stalybridge or send a WhatsApp pinpoint.
                  </p>
      </div>
      </div>
      {/* Step 2 */}
      <div className="flex gap-4 p-5 rounded-2xl bg-primary-dark border border-white/5 hover:border-white/15 transition-all">
      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/60 text-secondary font-heading font-bold border border-secondary/30">
                  2
                </div>
      <div className="flex flex-col justify-center">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Exact Tyre Stock Allocation</h3>
      <p className="text-gray-400 text-xs mt-1">
                    We check our emergency van inventory for your required budget, mid-range, or premium tyre specifications (including run-flats, EVs, and reinforced commercial XL).
                  </p>
      </div>
      </div>
      {/* Step 3 */}
      <div className="flex gap-4 p-5 rounded-2xl bg-primary-dark border border-white/5 hover:border-white/15 transition-all">
      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/60 text-secondary font-heading font-bold border border-secondary/30">
                  3
                </div>
      <div className="flex flex-col justify-center">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Rapid Mobile Van Dispatch</h3>
      <p className="text-gray-400 text-xs mt-1">
                    A liveried service van heads straight to your location along the A6018, A635, or hillside streets with an accurate live ETA sent to your mobile.
                  </p>
      </div>
      </div>
      {/* Step 4 */}
      <div className="flex gap-4 p-5 rounded-2xl bg-primary-dark border border-white/5 hover:border-white/15 transition-all">
      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/60 text-secondary font-heading font-bold border border-secondary/30">
                  4
                </div>
      <div className="flex flex-col justify-center">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Precision Fitting, Valving &amp; Balancing</h3>
      <p className="text-gray-400 text-xs mt-1">
                    Our technician lifts the vehicle safely, unmounts the old rubber, installs a new high-pressure valve, executes computerised spin balancing, and torques wheel nuts to manufacturer spec.
                  </p>
      </div>
      </div>
      {/* Step 5 */}
      <div className="flex gap-4 p-5 rounded-2xl bg-primary-dark border border-white/5 hover:border-white/15 transition-all">
      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/60 text-secondary font-heading font-bold border border-secondary/30">
                  5
                </div>
      <div className="flex flex-col justify-center">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Contactless Payment &amp; Safe Journey Resumed</h3>
      <p className="text-gray-400 text-xs mt-1">
                    Pay quickly via our secure on-board card terminal or digital invoice. We responsibly bag and take away your damaged tyre for environmental recycling.
                  </p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 5. Real Local Job Photo Strip (Full-bleed) */}
      <section className="relative w-full bg-primary-dark py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
      <div className="text-center mb-6">
      <span className="text-xs uppercase tracking-widest text-secondary font-bold">Verified Incident Log</span>
      <h2 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold mt-1">Recent Callout in Stalybridge</h2>
      </div>
      {/* Photographic Card Band with Solid Bottom Caption */}
      <div className="rounded-2xl overflow-hidden bg-primary-dark border border-white/10 shadow-2xl">
      <div className="relative h-64 sm:h-80 md:h-96 w-full">
      <Image src="/gallery-roadside-fitting.webp" alt="Technician fitting tyre on Land Rover in Stalybridge" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover object-center" />
      <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-dark/80 backdrop-blur-md text-xs font-semibold text-white border border-white/10">
      <span className="h-2 w-2 rounded-full bg-secondary"></span>
                  Stalybridge Unit #04 Dispatched
                </div>
      </div>
      {/* Solid Bottom Caption */}
      <div className="p-5 sm:p-6 bg-primary border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex flex-col">
      <div className="flex items-center gap-2">
      <CheckCircle2 className="text-secondary h-[18px] w-[18px]" />
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Incident: Land Rover Discovery — A6018 Stamford St, Stalybridge</span>
      </div>
      <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                    Kerbed alloy sidewall rupture, 255/55 R19 fitted &amp; balanced in 31 minutes. Customer mobile card payment. Old tyre safely removed for green recycling.
                  </p>
      </div>
      <div className="flex-shrink-0 flex items-center gap-2 self-start md:self-auto bg-primary/60 px-4 py-2 rounded-xl border border-white/5">
      <Clock className="text-gray-400 h-[14px] w-[14px]" />
      <span className="text-xs text-white font-bold">Completed in 31m</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 6. Roads & Nearby Areas (Centered Column ~760px) */}
      <section className="w-full bg-primary-dark py-16 px-4">
      <div className="max-w-[760px] mx-auto flex flex-col gap-8">
      <div>
      <span className="text-xs uppercase tracking-widest text-secondary font-bold">Fast Highway &amp; Arterial Access</span>
      <h2 className="font-heading text-[22px] leading-[28px] font-bold md:text-[30px] md:leading-[38px] md:font-bold text-white font-bold mt-1">
                Roads Covered &amp; Surrounding Areas
              </h2>
      <p className="text-sm text-gray-400 mt-1">
                Our rapid response vehicles are pre-positioned around the Tame Valley and eastern Greater Manchester belt.
              </p>
      </div>
      {/* Critical Roads Plain List with Bold Names */}
      <div className="flex flex-col gap-3">
      <h3 className="font-heading text-sm uppercase text-white tracking-wider font-bold">Key Arterial Routes</h3>
      <div className="p-4 rounded-xl bg-primary-dark border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
      <div className="flex items-center gap-3">
      <span className="px-2.5 py-1 rounded bg-accent/30 text-gray-400 font-heading text-xs font-bold border border-accent/40">A6018</span>
      <span className="text-sm text-white font-semibold">Stamford Street &amp; Mottram Road</span>
      </div>
      <span className="text-xs text-gray-400">Continuous town center &amp; hillside patrol</span>
      </div>
      <div className="p-4 rounded-xl bg-primary-dark border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
      <div className="flex items-center gap-3">
      <span className="px-2.5 py-1 rounded bg-accent/30 text-gray-400 font-heading text-xs font-bold border border-accent/40">A635</span>
      <span className="text-sm text-white font-semibold">Stamford Road / Greenfield Route towards Mossley</span>
      </div>
      <span className="text-xs text-gray-400">Pennine ascent &amp; commuter link</span>
      </div>
      <div className="p-4 rounded-xl bg-primary-dark border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
      <div className="flex items-center gap-3">
      <span className="px-2.5 py-1 rounded bg-accent/30 text-gray-400 font-heading text-xs font-bold border border-accent/40">M67</span>
      <span className="text-sm text-white font-semibold">Motorway Junctions 3 &amp; 4 (Denton to Mottram)</span>
      </div>
      <span className="text-xs text-gray-400">High-speed motorway hard shoulder safety rescue</span>
      </div>
      </div>
      {/* Surrounding Town Pills */}
      <div className="flex flex-col gap-3 pt-4 border-t border-white/5">
      <h3 className="font-heading text-sm uppercase text-white tracking-wider font-bold">Surrounding Towns Serviced</h3>
      <div className="flex flex-wrap gap-2.5">
      <span className="px-4 py-2 rounded-full bg-primary/80 border border-white/10 text-xs text-white font-medium flex items-center gap-1.5">
      <MapPin className="text-gray-400 h-[14px] w-[14px]" />
                  Ashton-under-Lyne
                </span>
      <span className="px-4 py-2 rounded-full bg-primary/80 border border-white/10 text-xs text-white font-medium flex items-center gap-1.5">
      <MapPin className="text-gray-400 h-[14px] w-[14px]" />
                  Dukinfield
                </span>
      <span className="px-4 py-2 rounded-full bg-primary/80 border border-white/10 text-xs text-white font-medium flex items-center gap-1.5">
      <MapPin className="text-gray-400 h-[14px] w-[14px]" />
                  Mossley
                </span>
      <span className="px-4 py-2 rounded-full bg-primary/80 border border-white/10 text-xs text-white font-medium flex items-center gap-1.5">
      <MapPin className="text-gray-400 h-[14px] w-[14px]" />
                  Hyde
                </span>
      <span className="px-4 py-2 rounded-full bg-primary/80 border border-white/10 text-xs text-white font-medium flex items-center gap-1.5">
      <MapPin className="text-gray-400 h-[14px] w-[14px]" />
                  Mottram in Longdendale
                </span>
      </div>
      </div>
      </div>
      </section>
      {/* 7. FAQ (Centered Column ~760px) */}
      <section className="w-full bg-primary-dark py-20 px-4">
      <div className="max-w-[760px] mx-auto flex flex-col">
      <div className="text-left mb-8">
      <span className="text-xs uppercase tracking-widest text-secondary font-bold">Clear Answers</span>
      <h2 className="font-heading text-[22px] leading-[28px] font-bold md:text-[30px] md:leading-[38px] md:font-bold text-white font-bold mt-1">
                Stalybridge Tyre Fitting FAQ
              </h2>
      <p className="text-sm text-gray-400 mt-1">
                Got questions about our mobile callout operations? Everything you need to know below.
              </p>
      </div>
      {/* Clean Single-Column Accordion */}
      <div className="flex flex-col gap-3" id="faq-accordion">
      {/* Item 1 */}
      <div className="rounded-xl bg-primary-dark border border-white/10 overflow-hidden">
      <button aria-expanded="false" className="faq-toggle w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none" type="button">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">How quickly can a mobile tyre van reach me in Stalybridge?</span>
      <ChevronDown className="text-secondary transition-transform duration-200 h-5 w-5" />
      </button>
      <div className="faq-content hidden px-5 pb-5 pt-0 text-xs text-gray-400 leading-relaxed border-t border-white/5">
                  Our typical roadside ETA across Stalybridge, including Stamford Street, Mottram Road, and Ridge Hill, is 25 to 45 minutes. For rural fringe areas extending up towards the A635 or Walker Brow, travel time may slightly vary depending on weather conditions, but our dispatchers provide live GPS arrival tracking.
                </div>
      </div>
      {/* Item 2 */}
      <div className="rounded-xl bg-primary-dark border border-white/10 overflow-hidden">
      <button aria-expanded="false" className="faq-toggle w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none" type="button">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Can you change a tyre on steep hills or narrow residential roads?</span>
      <ChevronDown className="text-secondary transition-transform duration-200 h-5 w-5" />
      </button>
      <div className="faq-content hidden px-5 pb-5 pt-0 text-xs text-gray-400 leading-relaxed border-t border-white/5">
                  Yes. Our vans carry heavy-duty industrial chocks, low-profile hydraulic trolley jacks, and specialized stabilizing pads specifically suited for Stalybridge’s hilly terrain. If a position is deemed unsafe due to traffic blind spots, our technician will safely assist in repositioning the vehicle or deploy safety beacons.
                </div>
      </div>
      {/* Item 3 */}
      <div className="rounded-xl bg-primary-dark border border-white/10 overflow-hidden">
      <button aria-expanded="false" className="faq-toggle w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none" type="button">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Do you carry tyres for premium German cars, SUVs, and commercial vans?</span>
      <ChevronDown className="text-secondary transition-transform duration-200 h-5 w-5" />
      </button>
      <div className="faq-content hidden px-5 pb-5 pt-0 text-xs text-gray-400 leading-relaxed border-t border-white/5">
                  Absolutely. We stock major brands including Michelin, Continental, Pirelli, Goodyear, and Bridgestone, as well as dependable mid-range and budget options. We cater to Run-Flat (RFT), reinforced commercial XL, and high-load SUV fitments (16” to 22”).
                </div>
      </div>
      {/* Item 4 */}
      <div className="rounded-xl bg-primary-dark border border-white/10 overflow-hidden">
      <button aria-expanded="false" className="faq-toggle w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none" type="button">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">What happens if I cannot find my locking wheel nut key?</span>
      <ChevronDown className="text-secondary transition-transform duration-200 h-5 w-5" />
      </button>
      <div className="faq-content hidden px-5 pb-5 pt-0 text-xs text-gray-400 leading-relaxed border-t border-white/5">
                  Our vans are equipped with specialist reverse-torque locking nut extractor equipment. We can safely remove stubborn, stripped, or lost locking nuts from all makes of alloy wheels without causing damage to the rim or brake hub assembly.
                </div>
      </div>
      {/* Item 5 */}
      <div className="rounded-xl bg-primary-dark border border-white/10 overflow-hidden">
      <button aria-expanded="false" className="faq-toggle w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none" type="button">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">How do I pay at the roadside in Stalybridge?</span>
      <ChevronDown className="text-secondary transition-transform duration-200 h-5 w-5" />
      </button>
      <div className="faq-content hidden px-5 pb-5 pt-0 text-xs text-gray-400 leading-relaxed border-t border-white/5">
                  You do not pay anything until the tyre is mounted and balanced to your satisfaction. All our vans carry encrypted mobile chip &amp; pin / contactless card terminals accepting Visa, Mastercard, Apple Pay, and Google Pay. Company fleet billing accounts can also be arranged.
                </div>
      </div>
      </div>
      </div>
      </section>
      {/* 8. Final CTA (Full-bleed) */}
      <section className="w-full bg-secondary text-primary py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
      <div className="flex flex-col">
      <div className="inline-flex items-center justify-center md:justify-start gap-2 text-primary/80 text-xs font-bold uppercase tracking-wider mb-2">
      <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                Emergency Units Live in SK15
              </div>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold font-black text-primary">
                Stranded in Stalybridge? Van On Call 24/7
              </h2>
      <p className="text-primary/85 text-sm md:text-base mt-2 max-w-xl">
                Don&apos;t risk driving on a flat or ruined rim. Our technician will come to your car, fix or replace the tyre, and have you moving within the hour.
              </p>
      </div>
      <div className="flex-shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary-dark hover:bg-primary-dark text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold transition-all shadow-xl hover:scale-105 active:scale-95" href="tel:07955266077">
      <PhoneCall className="text-secondary font-bold h-5 w-5" fill="currentColor" strokeWidth={0} />
      <span>Call 07955 266 077</span>
      </a>
      </div>
      </div>
      </section>
      </div>
    </main>
  );
}
