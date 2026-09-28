import Image from "next/image";
import { ArrowRight, Building2, Car, Clock, KeyRound, MapPin, MessageCircle, Navigation, PhoneCall, TrafficCone, Wrench, Zap } from "lucide-react";

export default function WarringtonPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      <div className="flex flex-col w-full text-white bg-primary-dark">
      {/* SECTION 1: HERO (Split-Screen City Hero) */}
      <section className="relative w-full bg-primary-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin py-space-lg lg:py-space-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
      {/* Left Column: 55% equivalent (7 cols) */}
      <div className="lg:col-span-7 flex flex-col justify-center space-y-space-md z-10">
      <div className="flex items-center gap-space-sm flex-wrap">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] leading-[14px] tracking-[0.06em] font-bold bg-accent/20 text-accent border border-accent/40">
      <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    24/7 Warrington Dispatch Active
                  </span>
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] leading-[14px] tracking-[0.06em] font-bold bg-primary/80 text-gray-400">
      <Zap className="h-[14px] w-[14px]" />
                    Average ETA: 25-45 Mins
                  </span>
      </div>
      <h1 className="font-heading text-[36px] leading-[42px] tracking-[-0.01em] font-black md:text-[56px] md:leading-[64px] md:tracking-[-0.02em] md:font-black text-white uppercase font-black leading-none">
                  24/7 Mobile Tyre Fitting in <span className="text-secondary">Warrington</span>
      </h1>
      <p className="text-[15px] leading-[24px] md:text-[18px] md:leading-[28px] text-gray-400 max-w-2xl">
                  Rapid roadside, apartment car park, and workplace mobile tyre fitting across Warrington, Regent Road corridor, Warrington town centre, and M6. 25-45 minute average response.
                </p>
      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md pt-space-xs">
      <a className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider font-bold transition hover:bg-secondary-hover active:scale-95 shadow-lg shadow-primary-container/20" href="tel:08009992470">
      <PhoneCall className="font-bold text-[20px] leading-[26px] font-bold h-5 w-5" />
      <span>Call 0800 999 2470</span>
      </a>
      <a className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-primary/60 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider border border-white/10 hover:bg-primary hover:border-white/30 active:scale-95 transition" href="https://wa.me/448009992470" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="text-gray-400 h-5 w-5" />
      <span>WhatsApp Dispatch</span>
      </a>
      </div>
      {/* Quick Metrics Bar */}
      <div className="grid grid-cols-3 gap-space-sm pt-space-md max-w-xl border-t border-white/10">
      <div>
      <div className="font-heading text-[20px] leading-[26px] font-bold text-secondary font-black">25-45m</div>
      <div className="text-[13px] leading-[18px] text-gray-400">Urban Response</div>
      </div>
      <div>
      <div className="font-heading text-[20px] leading-[26px] font-bold text-white font-black">365 Days</div>
      <div className="text-[13px] leading-[18px] text-gray-400">Day &amp; Night</div>
      </div>
      <div>
      <div className="font-heading text-[20px] leading-[26px] font-bold text-accent font-black">100%</div>
      <div className="text-[13px] leading-[18px] text-gray-400">Van-Equipped</div>
      </div>
      </div>
      </div>
      {/* Right Column: 45% equivalent (5 cols) */}
      <div className="lg:col-span-5 relative mt-space-md lg:mt-0">
      <div className="relative w-full aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-primary/60">
      <Image src="/hero-section-images-936x527.webp" alt="Warrington Emergency Mobile Tyre Fitting Unit" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/20 to-transparent"></div>
      {/* Overlay Badge */}
      <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-dark/90 backdrop-blur-md border border-secondary/40">
      <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-ping"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary font-bold">24/7 Live Incident Hub</span>
      </div>
      {/* Bottom Card Insight */}
      <div className="absolute bottom-4 left-4 right-4 p-space-sm bg-primary-dark/95 backdrop-blur-md rounded-xl border border-white/10">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0 text-white">
      <Car className="text-[16px] leading-[22px] tracking-[0.01em] font-bold h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
      <p className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white truncate">Warrington Roadside Mobile Support</p>
      <p className="text-[13px] leading-[18px] text-gray-400 truncate">M6 Corridor &amp; Warrington Quays Patrol</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 2: LOCAL INTRO */}
      <section className="w-full bg-primary/60 py-space-xl border-y border-white/5">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
      <div className="max-w-3xl">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary font-bold block mb-space-xs">
                Warrington Infrastructure Tyre Logistics
              </span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white font-black uppercase mb-space-md">
                Precision Mobile Fitting Adapted for Warrington&apos;s High-Density Fabric
              </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg text-[15px] leading-[24px] text-gray-400">
      <div className="space-y-4">
      <p>
                  Warrington represents one of the North West&apos;s most intense transport intersections, defined by rapid urban commuting, dense high-rise developments across <span className="text-white font-semibold">Warrington Quays</span> and <span className="text-white font-semibold">Chapel Street</span>, and heavy multi-lane bottlenecks converging toward the Regent Road gateway. A puncture or sidewall failure in this urban landscape brings severe safety risks and immediate traffic gridlock.
                </p>
      <p>
                  Traditional recovery services typically tow vehicles to depot garages, consuming half a day and racking up flatbed fees. Our fully self-contained mobile tyre workshops bring precision hydraulic jacks, digital wheel balancers, and fresh original-equipment tyres straight to your kerb, parking bay, or motorway hard shoulder within 25 to 45 minutes.
                </p>
      </div>
      <div className="space-y-4">
      <p>
                  Whether stranded in a multi-storey underground basement at Warrington town centre with zero clearance for recovery trucks, or stuck curbside near the <span className="text-white font-semibold">M6 motorway inbound artery</span>, our low-profile, rapid-deployment fleet safely navigates restricted height limits and compact bays without damage.
                </p>
      <p>
                  Every emergency response van stocks an extensive profile catalogue—from standard run-flat compounds for prestige saloons to heavy load-index commercial van tyres—ensuring zero downtime for commuters, taxi fleets, and logistics drivers traversing Warrington around the clock.
                </p>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 3: SERVICES (Horizontal Scroll-Snap Bento Row) */}
      <section className="w-full bg-primary-dark py-space-xl">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-4">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary font-bold block mb-space-xs">
                  Mobile Workshop Units
                </span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white font-black uppercase">
                  Specialist On-Site Services
                </h2>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400 max-w-md">
                Commercial grade mounting and computer balancing carried out directly on location in Warrington.
              </p>
      </div>
      {/* Scrollable Snap Container */}
      <div className="flex gap-space-md overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none">
      {/* Service Card 1 */}
      <div className="w-[280px] sm:w-[320px] shrink-0 snap-start rounded-2xl bg-primary/60 border border-white/10 overflow-hidden flex flex-col hover:border-secondary/40 transition duration-300">
      <div className="relative h-44 w-full overflow-hidden bg-primary">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Emergency roadside tyre replacement in Warrington" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white shadow-md">
      <Wrench className="h-[18px] w-[18px]" />
      </div>
      </div>
      <div className="p-space-md flex flex-col flex-1 justify-between space-y-3">
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold mb-1">Emergency Tyre Replacement</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                      Rapid roadside dispatch for blowout, pothole, and puncture failures across Warrington arteries. Budget to premium brands carried.
                    </p>
      </div>
      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary">
      <span>Roadside &amp; Motorway</span>
      <ArrowRight className="h-[16px] w-[16px]" />
      </div>
      </div>
      </div>
      {/* Service Card 2 */}
      <div className="w-[280px] sm:w-[320px] shrink-0 snap-start rounded-2xl bg-primary/60 border border-white/10 overflow-hidden flex flex-col hover:border-secondary/40 transition duration-300">
      <div className="relative h-44 w-full overflow-hidden bg-primary">
      <Image src="/gallery-roadside-fitting.webp" alt="BS AU 159 compliant tyre puncture repair" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white shadow-md">
      <Wrench className="h-[18px] w-[18px]" />
      </div>
      </div>
      <div className="p-space-md flex flex-col flex-1 justify-between space-y-3">
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold mb-1">BS AU 159 Puncture Repair</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                      Thorough internal tyre inspection and vulcanised combi-plug repairs where safety standards allow, saving you the cost of a full replacement.
                    </p>
      </div>
      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary">
      <span>British Standard Compliant</span>
      <ArrowRight className="h-[16px] w-[16px]" />
      </div>
      </div>
      </div>
      {/* Service Card 3 */}
      <div className="w-[280px] sm:w-[320px] shrink-0 snap-start rounded-2xl bg-primary/60 border border-white/10 overflow-hidden flex flex-col hover:border-secondary/40 transition duration-300">
      <div className="relative h-44 w-full overflow-hidden bg-primary">
      <Image src="/gallery-home-callout.webp" alt="Locking wheel nut removal on driveway" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white shadow-md">
      <KeyRound className="h-[18px] w-[18px]" />
      </div>
      </div>
      <div className="p-space-md flex flex-col flex-1 justify-between space-y-3">
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold mb-1">Locking Wheel Nut Removal</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                      Lost, stripped, or over-torqued wheel nut keys cleanly extracted using dedicated inverse extraction tools with zero alloy wheel damage.
                    </p>
      </div>
      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary">
      <span>Damage-Free Removal</span>
      <ArrowRight className="h-[16px] w-[16px]" />
      </div>
      </div>
      </div>
      {/* Service Card 4 */}
      <div className="w-[280px] sm:w-[320px] shrink-0 snap-start rounded-2xl bg-primary/60 border border-white/10 overflow-hidden flex flex-col hover:border-secondary/40 transition duration-300">
      <div className="relative h-44 w-full overflow-hidden bg-primary">
      <Image src="/gallery-evening-callout.webp" alt="Driveway, apartment and workplace fitting van" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white shadow-md">
      <Building2 className="h-[18px] w-[18px]" />
      </div>
      </div>
      <div className="p-space-md flex flex-col flex-1 justify-between space-y-3">
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold mb-1">Apartment &amp; Workplace Fitting</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                      Scheduled and on-demand tyre installation at your Warrington home address, underground parking bay, or commercial office parking lot.
                    </p>
      </div>
      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary">
      <span>Home &amp; Office Visit</span>
      <ArrowRight className="h-[16px] w-[16px]" />
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 4: ROADS & NEARBY AREAS */}
      <section className="w-full bg-primary/60 py-space-xl border-t border-white/5">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
      {/* Text & Grid */}
      <div className="lg:col-span-7 space-y-space-md">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary font-bold block mb-space-xs">
                    Immediate Warrington Coverage
                  </span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white font-black uppercase">
                    Major Corridors &amp; Bordering Districts
                  </h2>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-2">
                    Our mobile technicians operate in continuous patrol loops, providing guaranteed rapid response across primary transit routes and business parks.
                  </p>
      </div>
      {/* Plain Bordered Panel */}
      <div className="rounded-2xl border border-white/10 bg-primary-dark/70 p-space-md space-y-space-md">
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
      <TrafficCone className="text-secondary h-[20px] w-[20px]" />
                      Critical Road Arteries Monitored:
                    </h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px] leading-[18px] text-gray-400">
      <li className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
      <strong className="text-white">M6 motorway artery</strong> (J1 - J3 inbound/outbound)
                      </li>
      <li className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
      <strong className="text-white">A49 Regent Road</strong> dual carriageway corridor
                      </li>
      <li className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
      <strong className="text-white">M56 Chapel Street</strong> &amp; Crescent thoroughfares
                      </li>
      <li className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
      <strong className="text-white">M62 Junctions 12–14</strong> (Stockton Heath &amp; Irlam interchanges)
                      </li>
      </ul>
      </div>
      <div className="border-t border-white/10 pt- space-sm">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
      <MapPin className="text-gray-400 h-[20px] w-[20px]" />
                      Key Districts &amp; Neighboring Catchments:
                    </h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                      Prioritised mobile dispatch to <span className="text-white">Warrington Quays</span>, <span className="text-white">Warrington town centre</span>, <span className="text-white">Stockton Heath</span>, <span className="text-white">Birchwood</span>, <span className="text-white">Widnes</span>, <span className="text-white">Irlam</span>, <span className="text-white">Pendleton</span>, <span className="text-white">Walkden</span>, and the western boundary borders of <span className="text-white">Warrington town centre</span>.
                    </p>
      </div>
      </div>
      </div>
      {/* Supporting Photo Panel */}
      <div className="lg:col-span-5">
      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl aspect-[16/10] lg:aspect-auto lg:h-[420px]">
      <Image src="/gallery-evening-home-visit.webp" alt="Warrington Emergency Response Tyre Van on A49 Regent Road corridor" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent"></div>
      <div className="absolute bottom-4 left-4 right-4 p-space-sm rounded-xl bg-primary/60 backdrop-blur-md border border-white/10">
      <div className="flex items-center justify-between">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase font-bold">Fast Patrol Status</span>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">On Standby: M6 / A49 Junction</p>
      </div>
      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white">
      <Navigation className="h-[18px] w-[18px]" />
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 5: HOW IT WORKS (Vertical Stepper) */}
      <section className="w-full bg-primary-dark py-space-xl">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
      <div className="max-w-3xl mb-space-lg">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary font-bold block mb-space-xs">
                Transparent Emergency Dispatch
              </span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white font-black uppercase">
                5 Steps from Stranded to Back on the Road
              </h2>
      </div>
      <div className="relative pl-6 sm:pl-10 space-y-space-md before:absolute before:left-[19px] sm:before:left-[27px] before:top-3 before:bottom-3 before:w-0.5 before:bg-white/10">
      {/* Stage 1 */}
      <div className="relative flex items-start gap-4">
      <div className="absolute -left-[30px] sm:-left-[38px] w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-secondary text-primary flex items-center justify-center font-bold text-[11px] leading-[14px] tracking-[0.06em] font-bold shrink-0 shadow-md">
                  1
                </div>
      <div className="rounded-xl p-space-md bg-primary/60 border border-white/10 w-full hover:border-white/20 transition">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold mb-1">Direct Call or WhatsApp</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    Speak directly with an emergency tyre technician. Share your live pin location in Warrington, vehicle registration, and tyre size.
                  </p>
      </div>
      </div>
      {/* Stage 2 */}
      <div className="relative flex items-start gap-4">
      <div className="absolute -left-[30px] sm:-left-[38px] w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary text-white border border-white/20 flex items-center justify-center font-bold text-[11px] leading-[14px] tracking-[0.06em] font-bold shrink-0">
                  2
                </div>
      <div className="rounded-xl p-space-md bg-primary/60 border border-white/10 w-full hover:border-white/20 transition">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold mb-1">Tyre Spec &amp; Fixed Quote Confirmation</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    We verify matching tyre brand, load rating, run-flat specifications, and provide an all-inclusive transparent quote before rollout.
                  </p>
      </div>
      </div>
      {/* Stage 3 */}
      <div className="relative flex items-start gap-4">
      <div className="absolute -left-[30px] sm:-left-[38px] w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-[11px] leading-[14px] tracking-[0.06em] font-bold shrink-0">
                  3
                </div>
      <div className="rounded-xl p-space-md bg-primary/60 border border-white/10 w-full hover:border-white/20 transition">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold mb-1">Mobile Unit Dispatched (25-45m ETA)</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    Our nearest Warrington mobile response van routes directly to you. Real-time updates provided via phone or SMS while en route.
                  </p>
      </div>
      </div>
      {/* Stage 4 */}
      <div className="relative flex items-start gap-4">
      <div className="absolute -left-[30px] sm:-left-[38px] w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary text-white border border-white/20 flex items-center justify-center font-bold text-[11px] leading-[14px] tracking-[0.06em] font-bold shrink-0">
                  4
                </div>
      <div className="rounded-xl p-space-md bg-primary/60 border border-white/10 w-full hover:border-white/20 transition">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold mb-1">Precision On-Site Fitting &amp; Balancing</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    Our technician demounts the damaged tyre, replaces valve stems, digitally balances the new tyre, and torques wheel nuts to manufacturer specifications.
                  </p>
      </div>
      </div>
      {/* Stage 5 */}
      <div className="relative flex items-start gap-4">
      <div className="absolute -left-[30px] sm:-left-[38px] w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-secondary text-primary flex items-center justify-center font-bold text-[11px] leading-[14px] tracking-[0.06em] font-bold shrink-0 shadow-md">
                  5
                </div>
      <div className="rounded-xl p-space-md bg-primary/60 border border-white/10 w-full hover:border-white/20 transition">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold mb-1">Contactless Payment &amp; Back On Road</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    Inspect the work, settle instantly via mobile chip &amp; pin, contactless card, or bank transfer, and drive away safely with a digital invoice.
                  </p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 6: REAL LOCAL JOB EXAMPLE */}
      <section className="w-full bg-primary/60 py-space-xl border-t border-white/5">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
      <div className="rounded-2xl bg-primary-dark border border-white/10 overflow-hidden shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-12">
      {/* Thumbnail Column */}
      <div className="md:col-span-5 relative min-h-[260px] md:min-h-full">
      <Image src="/gallery-precision-care.webp" alt="BMW 3 Series tyre repair on Regent Road Warrington" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute top-4 left-4">
      <span className="px-3 py-1 rounded-full text-[11px] leading-[14px] tracking-[0.06em] font-bold bg-secondary text-primary font-bold uppercase tracking-wider">
                      Completed Job Log
                    </span>
      </div>
      </div>
      {/* Data Content Column */}
      <div className="md:col-span-7 p-space-lg flex flex-col justify-center space-y-4">
      <div className="flex items-center gap-2 text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider">
      <Clock className="h-[16px] w-[16px] text-accent" />
      <span>Case Ref: SAL-2024-8890 • Night Incident</span>
      </div>
      <h3 className="font-heading text-[22px] leading-[28px] font-bold md:text-[30px] md:leading-[38px] md:font-bold text-white font-black">
                    Incident Log: BMW 3 Series — Regent Road (A49), Warrington
                  </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    Driver struck a recessed roadwork pothole while joining Regent Road inbound toward Lymm, suffering instantaneous sidewall pinch and total deflation. Stranded in a bus lane lane-taper near the M6 interchange.
                  </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-sm pt-2">
      <div className="p-space-sm rounded-xl bg-primary/80 border border-white/5">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block">Response Time</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary font-bold">24 Minutes</span>
      </div>
      <div className="p-space-sm rounded-xl bg-primary/80 border border-white/5">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block">Tyre Fitted</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">225/45 R18 Run-Flat</span>
      </div>
      <div className="p-space-sm rounded-xl bg-primary/80 border border-white/5 col-span-2 sm:col-span-1">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block">Procedure</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-accent font-bold">Balanced &amp; Torqued</span>
      </div>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400/80 italic pt-1">
                    &quot;Customer had no spare wheel and was safely back on the move within 48 minutes of their initial phone call.&quot;
                  </p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 7: FAQS */}
      <section className="w-full bg-primary-dark py-space-xl">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
      <div className="max-w-3xl mb-space-lg">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary font-bold block mb-space-xs">
                Warrington Mobile Tyre Answers
              </span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white font-black uppercase">
                Frequently Asked Questions
              </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
      {/* FAQ 1 */}
      <div className="p-space-md rounded-2xl bg-primary/60 border border-white/10 space-y-2">
      <div className="flex items-start gap-3">
      <span className="w-7 h-7 rounded-full bg-accent/40 text-accent flex items-center justify-center font-bold text-[11px] leading-[14px] tracking-[0.06em] font-bold shrink-0">Q</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">How quickly can a mobile tyre van reach me in Warrington?</h3>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400 pl-10">
                  Our average emergency roadside arrival time across central Warrington, Warrington town centre, and the M6 corridor is between 25 and 45 minutes, subject to live traffic conditions.
                </p>
      </div>
      {/* FAQ 2 */}
      <div className="p-space-md rounded-2xl bg-primary/60 border border-white/10 space-y-2">
      <div className="flex items-start gap-3">
      <span className="w-7 h-7 rounded-full bg-accent/40 text-accent flex items-center justify-center font-bold text-[11px] leading-[14px] tracking-[0.06em] font-bold shrink-0">Q</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">Can you access underground or low-clearance apartment parking?</h3>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400 pl-10">
                  Yes. For underground multi-storeys with height restrictions around Warrington Quays and Chapel Street, our technicians carry portable battery-powered jacking and extraction gear into the basement while the main unit stages nearby.
                </p>
      </div>
      {/* FAQ 3 */}
      <div className="p-space-md rounded-2xl bg-primary/60 border border-white/10 space-y-2">
      <div className="flex items-start gap-3">
      <span className="w-7 h-7 rounded-full bg-accent/40 text-accent flex items-center justify-center font-bold text-[11px] leading-[14px] tracking-[0.06em] font-bold shrink-0">Q</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">Do you operate out-of-hours on weekends and bank holidays?</h3>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400 pl-10">
                  We are fully operational 24 hours a day, 7 days a week, 365 days a year. Midnight blowouts, Sunday morning workplace fits, and bank holiday breakdowns are handled with zero compromise.
                </p>
      </div>
      {/* FAQ 4 */}
      <div className="p-space-md rounded-2xl bg-primary/60 border border-white/10 space-y-2">
      <div className="flex items-start gap-3">
      <span className="w-7 h-7 rounded-full bg-accent/40 text-accent flex items-center justify-center font-bold text-[11px] leading-[14px] tracking-[0.06em] font-bold shrink-0">Q</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">Do you stock run-flat tyres and commercial van sizes?</h3>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400 pl-10">
                  Yes. Our vans carry extensive inventories of BMW/Mercedes/Audi run-flat specifications, SUV fitments, and high-load commercial 8-ply C-rated tyres for delivery vans and light commercial vehicles.
                </p>
      </div>
      {/* FAQ 5 */}
      <div className="p-space-md rounded-2xl bg-primary/60 border border-white/10 space-y-2">
      <div className="flex items-start gap-3">
      <span className="w-7 h-7 rounded-full bg-accent/40 text-accent flex items-center justify-center font-bold text-[11px] leading-[14px] tracking-[0.06em] font-bold shrink-0">Q</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">What payment methods do technicians accept roadside?</h3>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400 pl-10">
                  Every technician carries an encrypted handheld card terminal accepting Visa, Mastercard, American Express, Apple Pay, Google Pay, or direct instant business bank transfers. Payment is collected upon job completion.
                </p>
      </div>
      {/* FAQ 6 */}
      <div className="p-space-md rounded-2xl bg-primary/60 border border-white/10 space-y-2">
      <div className="flex items-start gap-3">
      <span className="w-7 h-7 rounded-full bg-accent/40 text-accent flex items-center justify-center font-bold text-[11px] leading-[14px] tracking-[0.06em] font-bold shrink-0">Q</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-bold">Can you repair my tyre instead of fitting a brand new one?</h3>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400 pl-10">
                  If the puncture is located within the central 70% tread area and adheres strictly to BS AU 159 regulations (with no run-flat sidewall integrity loss), our technician will perform a permanent combi-plug vulcanised repair on site.
                </p>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 8: RELATED LOCATIONS */}
      <section className="w-full bg-primary/60 py-space-lg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-space-sm">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white uppercase tracking-wider">
                Nearby Cheshire Coverage Hubs
              </h3>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">24/7 Mobile Units Operating Daily</span>
      </div>
      <div className="flex flex-wrap gap-2.5">
      <a className="px-4 py-2 rounded-full bg-primary/80 text-white border border-white/10 text-[14px] leading-[18px] tracking-[0.02em] font-semibold hover:bg-primary hover:text-secondary transition active:scale-95" href="#">
                Stockton Heath
              </a>
      <a className="px-4 py-2 rounded-full bg-primary/80 text-white border border-white/10 text-[14px] leading-[18px] tracking-[0.02em] font-semibold hover:bg-primary hover:text-secondary transition active:scale-95" href="#">
                Birchwood
              </a>
      <a className="px-4 py-2 rounded-full bg-primary/80 text-white border border-white/10 text-[14px] leading-[18px] tracking-[0.02em] font-semibold hover:bg-primary hover:text-secondary transition active:scale-95" href="#">
                Widnes
              </a>
      <a className="px-4 py-2 rounded-full bg-primary/80 text-white border border-white/10 text-[14px] leading-[18px] tracking-[0.02em] font-semibold hover:bg-primary hover:text-secondary transition active:scale-95" href="#">
                Irlam
              </a>
      <a className="px-4 py-2 rounded-full bg-primary/80 text-white border border-white/10 text-[14px] leading-[18px] tracking-[0.02em] font-semibold hover:bg-primary hover:text-secondary transition active:scale-95" href="#">
                Warrington town centre
              </a>
      <a className="px-4 py-2 rounded-full bg-primary text-secondary border border-secondary/30 text-[14px] leading-[18px] tracking-[0.02em] font-semibold hover:bg-secondary hover:text-primary transition active:scale-95" href="#">
                Mobile Tyre Fitting UK →
              </a>
      </div>
      </div>
      </section>
      {/* SECTION 9: FINAL CTA BANNER (Solid flat gold bar #ffd700) */}
      <section className="w-full bg-secondary text-primary-dark py-space-lg md:py-space-xl">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-space-md text-center lg:text-left">
      <div className="space-y-1">
      <span className="inline-block px-3 py-1 rounded-full bg-primary-dark text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase font-black tracking-widest mb-1">
                  24/7 Warrington Dispatch Line
                </span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold font-black uppercase text-primary-dark">
                  Need Emergency Tyre Fitting in Warrington Right Now?
                </h2>
      <p className="text-[15px] leading-[24px] md:text-[18px] md:leading-[28px] text-primary-dark/80 max-w-xl font-semibold">
                  Vans en route across Regent Road, Warrington town centre, and M6. Immediate telephone dispatch with fixed quote.
                </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-space-sm shrink-0">
      <a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary-dark text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider font-black hover:bg-primary-dark active:scale-95 transition shadow-xl" href="tel:08009992470">
      <PhoneCall className="text-[20px] leading-[26px] font-bold h-5 w-5" />
      <span>Call 0800 999 2470</span>
      </a>
      <a className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-primary-dark/10 text-primary-dark border border-primary-dark/30 text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider font-bold hover:bg-primary-dark/20 active:scale-95 transition" href="https://wa.me/448009992470" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="h-5 w-5" />
      <span>WhatsApp</span>
      </a>
      </div>
      </div>
      </div>
      </section>
      </div>
    </main>
  );
}
