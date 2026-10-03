import Image from "next/image";
import { AlertTriangle, BatteryCharging, Car, CheckCircle2, CreditCard, FileImage, Gauge, HelpCircle, KeyRound, MapPin, Navigation, PhoneCall, ShieldCheck, Truck, Zap } from "lucide-react";

export default function BrighousePage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* HERO SECTION: Layered Collage with Dynamic Rotations */}
      <section className="relative w-full pt-6 pb-20 overflow-hidden">
      {/* Ambient backlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-accent/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute -top-12 right-10 w-[380px] h-[380px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Floating Top Ticker Badge */}
      <div className="flex justify-center mb-8">
      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary/80 shadow-md backdrop-blur-md">
      <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-ping"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-white">Live Emergency Dispatch: West Yorkshire Hub En Route</span>
      <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-white">J25 M62 Priority</span>
      </div>
      </div>
      {/* Collaged Multi-Plane Hero Stacking */}
      <div className="relative w-full min-h-[580px] lg:min-h-[640px] flex items-center justify-center">
      {/* Layer 1: Background Left Photo Card (Rotated -3deg) */}
      <div className="absolute left-0 sm:left-4 lg:left-8 top-8 w-64 sm:w-80 lg:w-96 rounded-2xl bg-primary/60 overflow-hidden shadow-2xl transition-transform duration-500 hover:rotate-0 z-0 opacity-80 lg:opacity-95" style={{ transform: "rotate(-3deg)" }}>
      <div className="relative h-56 sm:h-64 lg:h-72 w-full">
      <Image src="/hero-section-images-936x527.webp" alt="Emergency tyre response vehicle deployed in West Yorkshire" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent"></div>
      <div className="absolute bottom-3 left-3 flex items-center gap-2">
      <span className="px-2.5 py-1 rounded-full bg-accent text-white text-xs font-semibold">Unit WY-09</span>
      <span className="text-xs font-medium text-slate-300 backdrop-blur-sm bg-black/40 px-2 py-0.5 rounded">M62 Corridor Patrol</span>
      </div>
      </div>
      <div className="p-4 bg-primary-dark">
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Standby: Clifton Interchange</p>
      <p className="text-[13px] leading-[18px] text-slate-400 mt-1">Ready for motorway hard-shoulder &amp; dual-carriageway deployment.</p>
      </div>
      </div>
      {/* Layer 2: Background Right Photo Card (Rotated 2deg) */}
      <div className="absolute right-0 sm:right-6 lg:right-12 top-4 w-60 sm:w-72 lg:w-84 rounded-2xl bg-primary/60 overflow-hidden shadow-2xl transition-transform duration-500 hover:rotate-0 z-10" style={{ transform: "rotate(2deg)" }}>
      <div className="relative h-48 sm:h-56 lg:h-60 w-full">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Technician measuring tyre tread depth on site" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent"></div>
      <div className="absolute top-3 right-3 px-2 py-1 rounded bg-secondary text-primary text-xs font-bold tracking-wider">
                    STOCK ON VAN
                  </div>
      </div>
      <div className="p-4 bg-primary/80">
      <div className="flex items-center justify-between text-xs text-slate-300">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary">Premium &amp; Budget</span>
      <span>15&quot; – 22&quot; Fitted</span>
      </div>
      <p className="text-[13px] leading-[18px] text-slate-300 mt-1.5 font-medium">Torqued to OEM specification roadside</p>
      </div>
      </div>
      {/* Layer 3: Foreground Main H1 Action Card (Topmost, Rotated -0.8deg) */}
      <div className="relative w-full max-w-2xl mx-auto rounded-3xl bg-primary/60 backdrop-blur-xl p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_-15px_rgba(0,10,30,0.8)] z-30 transition-transform duration-300" style={{ transform: "rotate(-0.8deg)" }}>
      <div className="flex flex-wrap items-center gap-2 mb-4">
      <span className="px-3 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider">
                    Average 25-Min Arrival
                  </span>
      <span className="px-3 py-1 rounded-full bg-primary-light text-slate-200 text-[11px] leading-[14px] tracking-[0.06em] font-bold">
                    West Yorkshire HD6 Hub
                  </span>
      </div>
      <h1 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold sm:text-[56px] sm:leading-[64px] sm:tracking-[-0.02em] sm:font-black text-white">
                  24/7 Mobile Tyre Fitting in Brighouse
                </h1>
      <p className="text-[15px] leading-[24px] sm:text-[18px] sm:leading-[28px] text-slate-300 mt-4 max-w-xl">
                  Stranded on the M62, A641, or immobilized in an industrial yard? Our rapid-response fitting fleet brings the workshop direct to your vehicle with zero towing delays.
                </p>
      {/* Core Call CTA Element */}
      <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
      <a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary hover:bg-secondary-hover text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase shadow-xl active:scale-95 transition-all" href="tel:07955266077">
      <PhoneCall className="h-6 w-6" fill="currentColor" strokeWidth={0} />
      <span>07955 266 077</span>
      </a>
      <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-primary/60 text-slate-300 text-[13px] leading-[18px]">
      <Zap className="text-secondary h-[18px] w-[18px]" />
      <span>Immediate dispatch • Fixed transparent quote</span>
      </div>
      </div>
      {/* Bottom Micro Details */}
      <div className="mt-8 pt-6 flex flex-wrap items-center justify-between gap-4 bg-primary-dark/40 rounded-2xl p-4">
      <div className="flex items-center gap-2">
      <FileImage className="text-accent h-5 w-5" />
      <span className="text-xs font-medium text-slate-300">ISO-certified roadside mechanics</span>
      </div>
      <div className="flex items-center gap-2">
      <Navigation className="text-accent h-5 w-5" />
      <span className="text-xs font-medium text-slate-300">Live GPS technician tracking</span>
      </div>
      <div className="flex items-center gap-2">
      <CreditCard className="text-accent h-5 w-5" />
      <span className="text-xs font-medium text-slate-300">Chip, contactless &amp; corporate invoicing</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* LOCAL STRATEGIC INTRO: J25 & Industrial Thoroughfares */}
      <section className="py-16 bg-primary-dark/50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-5 space-y-4">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-gray-300 text-xs font-bold tracking-wider uppercase">
                  Strategic Location Advantage
                </div>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold sm:text-[40px] sm:leading-[48px] sm:tracking-[-0.02em] sm:font-extrabold text-white">
                  Minutes from M62 Junction 25 &amp; Industrial Corridors
                </h2>
      <p className="text-[15px] leading-[24px] text-slate-300">
                  Nestled directly at the intersection of the M62 motorway, the A641 (Huddersfield Road), and the A644 (Wakefield Road), Brighouse is one of West Yorkshire&apos;s most critical transit arteries. A blown tyre here doesn’t just cause an inconvenience—it can gridlock vital haulage and commute routes.
                </p>
      <p className="text-[15px] leading-[24px] text-slate-300">
                  We operate purpose-built mobile tyre vans stationed continuously within reach of Clifton, Birdsedge, and Armytage Road, eliminating the 2–3 hour waiting times typically demanded by conventional national breakdown clubs.
                </p>
      <div className="pt-3 grid grid-cols-2 gap-4">
      <div className="p-4 rounded-xl bg-primary/60">
      <div className="font-heading text-[30px] leading-[38px] font-bold text-secondary font-black">22 min</div>
      <div className="text-[13px] leading-[18px] text-slate-400">Average on-scene arrival time across HD6</div>
      </div>
      <div className="p-4 rounded-xl bg-primary/60">
      <div className="font-heading text-[30px] leading-[38px] font-bold text-accent font-black">1,400+</div>
      <div className="text-[13px] leading-[18px] text-slate-400">Tyres stocked in regional hub daily</div>
      </div>
      </div>
      </div>
      <div className="lg:col-span-7">
      <div className="relative p-6 sm:p-8 rounded-3xl bg-primary/60 backdrop-blur-md shadow-xl">
      {/* Strategic Transit Nodes Graphic */}
      <div className="flex items-center justify-between pb-6">
      <div>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Active Road Coverage Zones</p>
      <p className="text-[13px] leading-[18px] text-slate-400">Priority monitoring &amp; highway clearance</p>
      </div>
      <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-bold uppercase tracking-wider">High Readiness</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Node 1 */}
      <div className="p-4 rounded-2xl bg-primary/80 hover:bg-primary-light transition-all">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white font-heading">
                          M62
                        </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Junction 25 (Clifton)</h3>
      <p className="text-[13px] leading-[18px] text-slate-400">Eastbound &amp; Westbound ramps</p>
      </div>
      </div>
      <p className="mt-3 text-xs text-slate-300 leading-relaxed">Fast rendezvous at slip roads, Hartshead Moor services, and elevated bridge crossings.</p>
      </div>
      {/* Node 2 */}
      <div className="p-4 rounded-2xl bg-primary/80 hover:bg-primary-light transition-all">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-secondary font-heading">
                          A641
                        </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Huddersfield Road</h3>
      <p className="text-[13px] leading-[18px] text-slate-400">Calder River artery</p>
      </div>
      </div>
      <p className="mt-3 text-xs text-slate-300 leading-relaxed">Dedicated roadside response for commercial light goods vans and commuter vehicles.</p>
      </div>
      {/* Node 3 */}
      <div className="p-4 rounded-2xl bg-primary/80 hover:bg-primary-light transition-all">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-secondary font-heading">
                          A644
                        </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Wakefield Road</h3>
      <p className="text-[13px] leading-[18px] text-slate-400">Industrial logistics belt</p>
      </div>
      </div>
      <p className="mt-3 text-xs text-slate-300 leading-relaxed">Direct support for Cooper Bridge roundabout bottlenecks and freight corridors.</p>
      </div>
      {/* Node 4 */}
      <div className="p-4 rounded-2xl bg-primary/80 hover:bg-primary-light transition-all">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary font-heading">
                          IND
                        </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Armytage Road Zone</h3>
      <p className="text-[13px] leading-[18px] text-slate-400">Distribution yards</p>
      </div>
      </div>
      <p className="mt-3 text-xs text-slate-300 leading-relaxed">On-site fleet tyre servicing, valve stem replacements, and punch punctures fixed on shift.</p>
      </div>
      </div>
      <div className="mt-6 p-4 rounded-2xl bg-accent/20 flex items-center gap-4">
      <Car className="text-gray-300 h-[30px] w-[30px]" />
      <div>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">No Spare Wheel? No Problem.</p>
      <p className="text-[13px] leading-[18px] text-slate-300">Modern cars rarely carry spares. Our vans arrive carrying your precise brand and dimensions ready to mount.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* DYNAMIC CLUSTER: SERVICES SHOWCASE (Clustered Mosaic Pattern) */}
      <section className="py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-14">
      <span className="px-3.5 py-1.5 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider">
                Complete Mobile Capabilities
              </span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold sm:text-[40px] sm:leading-[48px] sm:tracking-[-0.02em] sm:font-extrabold text-white mt-3">
                Heavy-Duty Engineering, Delivered Roadside
              </h2>
      <p className="text-[15px] leading-[24px] text-slate-400 mt-2">
                Every mobile fitting rig features hydraulic bead breakers, computerized high-speed wheel balancers, and high-output silent pneumatic systems.
              </p>
      </div>
      {/* Overlapping Cluster Mosaic */}
      <div className="relative max-w-5xl mx-auto min-h-[520px] flex flex-wrap items-center justify-center gap-6 lg:gap-0">
      {/* Card 1: Emergency Roadside Punctures (Large Square) */}
      <div className="relative w-full sm:w-80 lg:w-96 rounded-3xl bg-primary/60 p-6 shadow-2xl z-20 transform lg:-translate-x-12 lg:-translate-y-6 lg:rotate-[-2deg] transition-all hover:scale-105 hover:z-40">
      <div className="w-14 h-14 rounded-2xl bg-secondary text-primary flex items-center justify-center mb-5 shadow-lg">
      <AlertTriangle className="h-[30px] w-[30px]" />
      </div>
      <span className="px-2.5 py-1 rounded bg-accent text-xs font-semibold text-white">30 Min Dispatch</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mt-3">Emergency Puncture Repair</h3>
      <p className="text-[13px] leading-[18px] text-slate-300 mt-2">
                  BS AU 159 compliant hot vulcanized string &amp; combi plugs. Where repairable, we restore your tyre safely to avoid unnecessary replacements.
                </p>
      <div className="mt-4 flex items-center gap-2 text-xs text-secondary font-bold">
      <ShieldCheck className="h-4 w-4" />
                  Safe tread-zone penetration fixes
                </div>
      </div>
      {/* Card 2: Visual Round/Cutout Accent Image Card */}
      <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-2xl z-10 hidden sm:block lg:absolute lg:top-4 lg:left-1/2 lg:-translate-x-1/2 border-4 border-primary/80">
      <Image src="/gallery-roadside-fitting.webp" alt="Precision tyre technician tread measuring tool" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent flex items-end justify-center pb-6">
      <span className="text-xs uppercase tracking-widest font-black text-secondary bg-primary-dark/80 px-3 py-1 rounded-full">Laser Balanced</span>
      </div>
      </div>
      {/* Card 3: Locking Wheel Nut Removal (Angled Card) */}
      <div className="relative w-full sm:w-80 lg:w-96 rounded-3xl bg-primary/60 p-6 shadow-2xl z-20 transform lg:translate-x-16 lg:-translate-y-2 lg:rotate-[2deg] transition-all hover:scale-105 hover:z-40">
      <div className="w-14 h-14 rounded-2xl bg-accent text-white flex items-center justify-center mb-5 shadow-lg">
      <KeyRound className="h-[30px] w-[30px]" />
      </div>
      <span className="px-2.5 py-1 rounded bg-primary text-xs font-semibold text-slate-200">No Key Needed</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mt-3">Locking Nut Extraction</h3>
      <p className="text-[13px] leading-[18px] text-slate-300 mt-2">
                  Stripped, lost, or overtightened security wheel nuts removed with zero damage to alloy wheels using specialized reverse-thread impact extractors.
                </p>
      <div className="mt-4 flex items-center gap-2 text-xs text-gray-300 font-bold">
      <CheckCircle2 className="h-4 w-4" />
                  100% Guaranteed safe alloy extraction
                </div>
      </div>
      {/* Card 4: Fleet & Commercial Fitment (Shifted Lower Cluster) */}
      <div className="relative w-full sm:w-96 rounded-3xl bg-primary/80 p-6 shadow-2xl z-30 lg:-mt-12 lg:-translate-x-4 lg:rotate-[1deg] transition-all hover:scale-105 hover:z-40">
      <div className="flex items-center justify-between mb-4">
      <div className="w-12 h-12 rounded-2xl bg-accent text-white flex items-center justify-center">
      <Truck className="h-6 w-6" />
      </div>
      <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold">HD &amp; Commercial</span>
      </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Commercial Van &amp; Fleet Fitting</h3>
      <p className="text-[13px] leading-[18px] text-slate-300 mt-2">
                  Minimizing depot downtime for Mercedes Sprinters, Ford Transits, and Luton box vans operating around West Yorkshire logistics networks.
                </p>
      <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
      <span>Reinforced 8-ply C-rated Tyres</span>
      <span className="font-bold text-slate-200">Valve Replacements Included</span>
      </div>
      </div>
      {/* Card 5: Seasonal & Performance Mobile Swaps */}
      <div className="relative w-full sm:w-80 rounded-3xl bg-primary-dark p-6 shadow-2xl z-30 lg:-mt-10 lg:translate-x-8 lg:rotate-[-2deg] transition-all hover:scale-105 hover:z-40">
      <div className="flex items-center justify-between mb-4">
      <div className="w-12 h-12 rounded-2xl bg-primary text-secondary flex items-center justify-center">
      <Gauge className="h-6 w-6" />
      </div>
      <span className="px-3 py-1 rounded-full bg-accent text-white text-xs font-bold">EV / Run-Flat</span>
      </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">EV &amp; Run-Flat Specialist</h3>
      <p className="text-[13px] leading-[18px] text-slate-300 mt-2">
                  Stiff run-flat sidewalls and ultra-heavy EV battery chassis require specialized leverless fitting arms to protect wheel rims and tyre beads.
                </p>
      <div className="mt-4 flex items-center gap-2 text-xs text-secondary font-semibold">
      <BatteryCharging className="h-4 w-4" />
                  Acoustic foam tyres in stock
                </div>
      </div>
      </div>
      </div>
      </section>
      {/* ROADS & REGIONS COLLAGED CHIPS */}
      <section className="py-16 bg-primary-dark">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-xl mx-auto mb-10">
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">Immediate Response Territory</h2>
      <p className="text-[13px] leading-[18px] text-slate-400 mt-2">Mobile units stationed at high-incidence highway junctures across the Calderdale and Kirklees borders.</p>
      </div>
      {/* Collaged Road Badges & Nearby Regions */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
      {/* Motorway Tag */}
      <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-accent text-white shadow-lg transition-transform hover:-translate-y-1" style={{ transform: "rotate(-1.5deg)" }}>
      <span className="w-3 h-3 rounded-full bg-secondary animate-pulse"></span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">M62 (J24 – J26)</span>
      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-black/30">Motorway Escort</span>
      </div>
      {/* Primary Route A641 */}
      <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-primary/80 text-white shadow-md hover:bg-primary-light transition-transform hover:-translate-y-1" style={{ transform: "rotate(1deg)" }}>
      <span className="px-2 py-0.5 rounded bg-secondary text-primary font-black text-xs">A641</span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold">Brighouse ↔ Huddersfield</span>
      </div>
      {/* Primary Route A644 */}
      <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-primary/80 text-white shadow-md hover:bg-primary-light transition-transform hover:-translate-y-1" style={{ transform: "rotate(-2deg)" }}>
      <span className="px-2 py-0.5 rounded bg-secondary text-primary font-black text-xs">A644</span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold">Wakefield Road &amp; Cooper Bridge</span>
      </div>
      {/* Regional Town Tag: Huddersfield */}
      <div className="px-5 py-3 rounded-2xl bg-primary/60 text-slate-200 shadow-md hover:text-white transition-transform hover:-translate-y-1" style={{ transform: "rotate(2deg)" }}>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">Huddersfield</span>
      <span className="text-xs text-slate-400 ml-1.5">(10 mins)</span>
      </div>
      {/* Regional Town Tag: Halifax */}
      <div className="px-5 py-3 rounded-2xl bg-primary/60 text-slate-200 shadow-md hover:text-white transition-transform hover:-translate-y-1" style={{ transform: "rotate(-1deg)" }}>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">Halifax</span>
      <span className="text-xs text-slate-400 ml-1.5">(12 mins)</span>
      </div>
      {/* Regional Town Tag: Bradford */}
      <div className="px-5 py-3 rounded-2xl bg-primary/60 text-slate-200 shadow-md hover:text-white transition-transform hover:-translate-y-1" style={{ transform: "rotate(1.5deg)" }}>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">Bradford</span>
      <span className="text-xs text-slate-400 ml-1.5">(15 mins)</span>
      </div>
      {/* Regional Town Tag: Elland */}
      <div className="px-4 py-2.5 rounded-xl bg-primary-dark text-slate-300 shadow hover:text-white transition-transform" style={{ transform: "rotate(-0.5deg)" }}>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold">Elland &amp; Ainley Top</span>
      <span className="text-xs text-secondary ml-1 font-bold">Live Unit</span>
      </div>
      {/* Regional Town Tag: Mirfield */}
      <div className="px-4 py-2.5 rounded-xl bg-primary-dark text-slate-300 shadow hover:text-white transition-transform" style={{ transform: "rotate(1deg)" }}>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold">Mirfield &amp; Ravensthorpe</span>
      </div>
      {/* Clifton & Armytage */}
      <div className="px-4 py-2.5 rounded-xl bg-primary text-slate-100 shadow hover:text-white transition-transform" style={{ transform: "rotate(-1.8deg)" }}>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold">Clifton &amp; Armytage Estate</span>
      </div>
      </div>
      </div>
      </section>
      {/* HOW IT WORKS: FLUID ARC TIMELINE */}
      <section className="py-20 bg-primary-dark/30">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
      <div>
      <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider">Frictionless 5-Step Process</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold sm:text-[40px] sm:leading-[48px] sm:tracking-[-0.02em] sm:font-extrabold text-white mt-3">From Stranded to Driving in 40 Minutes</h2>
      </div>
      <p className="text-[15px] leading-[24px] text-slate-400 max-w-md mt-4 md:mt-0">
                No sign-ups, no generic call centers, no waiting all morning. One direct phone call activates your dedicated West Yorkshire technician.
              </p>
      </div>
      {/* Scattered Sequential Cards with Organic Offsets */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
      {/* Step 01 */}
      <div className="relative p-6 rounded-3xl bg-primary/60 hover:bg-primary-light transition-all duration-300 shadow-lg transform md:-rotate-2 md:-translate-y-2">
      <div className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary font-black opacity-90">01</div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mt-3">Call Our Dispatcher</h3>
      <p className="text-[13px] leading-[18px] text-slate-300 mt-2">
                  Speak directly with an automotive controller. Provide your location (What3Words supported) or vehicle registration.
                </p>
      <div className="mt-4 text-xs font-semibold text-gray-300 flex items-center gap-1">
      <Zap className="h-[14px] w-[14px]" /> Instant tyre sizing
                </div>
      </div>
      {/* Step 02 */}
      <div className="relative p-6 rounded-3xl bg-primary/80 hover:bg-primary-light transition-all duration-300 shadow-lg transform md:rotate-1 md:translate-y-3">
      <div className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-gray-300 font-black opacity-90">02</div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mt-3">Fixed Price Confirmed</h3>
      <p className="text-[13px] leading-[18px] text-slate-300 mt-2">
                  We confirm the brand, dimensions, and total transparent price before departure. Absolutely no hidden call-out surprises.
                </p>
      <div className="mt-4 text-xs font-semibold text-slate-400">Locked roadside rate</div>
      </div>
      {/* Step 03 */}
      <div className="relative p-6 rounded-3xl bg-primary/60 hover:bg-primary-light transition-all duration-300 shadow-lg transform md:-rotate-1 md:-translate-y-4">
      <div className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black opacity-90">03</div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mt-3">Rapid Mobile Unit Deployed</h3>
      <p className="text-[13px] leading-[18px] text-slate-300 mt-2">
                  Our Brighouse-area mobile workshop sets off with live satellite routing avoiding M62 or local traffic bottlenecks.
                </p>
      <div className="mt-4 text-xs font-semibold text-secondary flex items-center gap-1">
      <MapPin className="h-[14px] w-[14px]" /> Live ETA SMS
                </div>
      </div>
      {/* Step 04 */}
      <div className="relative p-6 rounded-3xl bg-primary/80 hover:bg-primary-light transition-all duration-300 shadow-lg transform md:rotate-2 md:translate-y-2">
      <div className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-accent font-black opacity-90">04</div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mt-3">Precision Installation</h3>
      <p className="text-[13px] leading-[18px] text-slate-300 mt-2">
                  Technician removes old tyre, inspects the rim, mounts and electronic-balances new rubber, then torques wheel nuts to spec.
                </p>
      <div className="mt-4 text-xs font-semibold text-slate-400">New valves fitted</div>
      </div>
      {/* Step 05 */}
      <div className="relative p-6 rounded-3xl bg-primary/60 hover:bg-primary-light transition-all duration-300 shadow-lg transform md:-rotate-1 md:-translate-y-1">
      <div className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary font-black opacity-90">05</div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mt-3">Contactless &amp; Drive</h3>
      <p className="text-[13px] leading-[18px] text-slate-300 mt-2">
                  Pay safely via roadside chip and PIN or Apple/Google Pay. Digital VAT invoice emailed immediately for personal or company records.
                </p>
      <div className="mt-4 text-xs font-semibold text-gray-300 flex items-center gap-1">
      <CheckCircle2 className="h-[14px] w-[14px]" /> Safe journey resumed
                </div>
      </div>
      </div>
      </div>
      </section>
      {/* REAL LOCAL JOB DISPATCH CARD: Armytage Road Industrial Estate */}
      <section className="py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Overlapping Callout Container */}
      <div className="relative rounded-3xl bg-primary-dark p-6 sm:p-10 shadow-2xl overflow-hidden">
      <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none"></div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/* Details Left */}
      <div className="lg:col-span-7 space-y-4">
      <div className="flex items-center gap-2">
      <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-black uppercase tracking-wider">
                      Case Study: Verified Roadside Log
                    </span>
      <span className="text-xs text-slate-400">Log #WY-84920</span>
      </div>
      <h3 className="font-heading text-[30px] leading-[38px] font-bold sm:text-[40px] sm:leading-[48px] sm:tracking-[-0.02em] sm:font-extrabold text-white">
                    Armytage Road Industrial Estate: Commercial Van Rescued in 22 Mins
                  </h3>
      <p className="text-[15px] leading-[24px] text-slate-300">
                    A local delivery driver with a Ford Transit Custom suffered a sidewall split after clipping a curb exiting the distribution terminal on Armytage Road, completely immobilising next-day customer deliveries.
                  </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
      <div className="p-3 rounded-xl bg-primary/60">
      <span className="text-xs text-slate-400 block">Vehicle</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Ford Transit Custom</span>
      </div>
      <div className="p-3 rounded-xl bg-primary/60">
      <span className="text-xs text-slate-400 block">Fitted Tyre</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">215/65 R16C 109T</span>
      </div>
      <div className="p-3 rounded-xl bg-primary/60 col-span-2 sm:col-span-1">
      <span className="text-xs text-slate-400 block">Time to Clear</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary">22 Minutes Total</span>
      </div>
      </div>
      <blockquote className="p-4 rounded-xl bg-primary/80 text-sm text-slate-300 italic">
                    &quot;We had six urgent Leeds drops pending. The technician arrived before I even finished logging the breakdown with head office. Brand new tyre balanced and back rolling in under half an hour.&quot;
                    <footer className="mt-2 text-xs font-bold text-slate-200 not-italic">— Liam B., Logistics Fleet Driver (Brighouse)</footer>
      </blockquote>
      </div>
      {/* Visual Map / Image Stack Right */}
      <div className="lg:col-span-5 relative">
      <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ transform: "rotate(1.2deg)" }}>
      <Image src="/gallery-home-callout.webp" alt="Mobile tyre fitting response van serving Brighouse industrial logistics" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-72 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-transparent to-transparent"></div>
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
      <span className="flex items-center gap-1 font-semibold">
      <MapPin className="text-secondary h-4 w-4" />
                        HD6 1PT • Armytage Rd
                      </span>
      <span className="px-2.5 py-1 rounded bg-accent font-bold text-xs">On-Site Fitting Complete</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* FAQS: TWO-COLUMN CLEAN ARCHITECTURE */}
      <section className="py-20 bg-primary-dark/40">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-xl mx-auto mb-14">
      <span className="px-3 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider">
                Frequently Answered Questions
              </span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold sm:text-[40px] sm:leading-[48px] sm:tracking-[-0.02em] sm:font-extrabold text-white mt-3">
                Clear Answers for Emergency Situations
              </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {/* FAQ 1 */}
      <div className="p-6 rounded-3xl bg-primary/60 shadow-md">
      <div className="flex items-start gap-3">
      <HelpCircle className="text-secondary h-6 w-6 mt-0.5" />
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">How quickly can you attend a blowout on the M62 near Junction 25?</h3>
      <p className="text-[15px] leading-[24px] text-slate-300 mt-2">
                      Our average roadside arrival time for the M62 corridor between Junction 24 (Ainley Top) and Junction 26 (Chain Bar) is between 20 to 35 minutes. If you are stopped on the hard shoulder, we coordinate with highway safety markers for high-visibility clearance.
                    </p>
      </div>
      </div>
      </div>
      {/* FAQ 2 */}
      <div className="p-6 rounded-3xl bg-primary/60 shadow-md">
      <div className="flex items-start gap-3">
      <HelpCircle className="text-secondary h-6 w-6 mt-0.5" />
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">What if I don&apos;t know my exact tyre size in the dark?</h3>
      <p className="text-[15px] leading-[24px] text-slate-300 mt-2">
                      Simply read out your UK vehicle registration to our phone operator. Our system queries DVLA database specs and vehicle tyre trim variations to load our van with the exact required tyre dimensions and load rating before driving out.
                    </p>
      </div>
      </div>
      </div>
      {/* FAQ 3 */}
      <div className="p-6 rounded-3xl bg-primary/60 shadow-md">
      <div className="flex items-start gap-3">
      <HelpCircle className="text-secondary h-6 w-6 mt-0.5" />
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Can you remove overtightened or rounded locking wheel nuts?</h3>
      <p className="text-[15px] leading-[24px] text-slate-300 mt-2">
                      Yes. Every van is outfitted with non-destructive reverse-threaded removal sockets and high-torque air tooling capable of extracting overtightened, damaged, or lost locking wheel nuts without scratching or burning your alloys.
                    </p>
      </div>
      </div>
      </div>
      {/* FAQ 4 */}
      <div className="p-6 rounded-3xl bg-primary/60 shadow-md">
      <div className="flex items-start gap-3">
      <HelpCircle className="text-secondary h-6 w-6 mt-0.5" />
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">What payment methods are supported roadside?</h3>
      <p className="text-[15px] leading-[24px] text-slate-300 mt-2">
                      Our technicians carry secure 4G chip-and-PIN payment terminals supporting all major debit/credit cards, Apple Pay, and Google Pay. Commercial fleet operators can also settle via pre-authorized company invoicing.
                    </p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* RELATED LOCATIONS NETWORK */}
      <section className="py-14 bg-primary-dark">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-slate-400 uppercase tracking-widest mb-6">Connected West Yorkshire Service Coverage</p>
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
      <a className="px-4 py-2 rounded-full bg-primary/60 text-slate-300 hover:text-secondary hover:bg-primary-light transition-colors" href="#huddersfield">
                Huddersfield Mobile Tyres
              </a>
      <a className="px-4 py-2 rounded-full bg-primary/60 text-slate-300 hover:text-secondary hover:bg-primary-light transition-colors" href="#halifax">
                Halifax Roadside Fitting
              </a>
      <a className="px-4 py-2 rounded-full bg-primary/60 text-slate-300 hover:text-secondary hover:bg-primary-light transition-colors" href="#elland">
                Elland &amp; Ainley Top
              </a>
      <a className="px-4 py-2 rounded-full bg-primary/60 text-slate-300 hover:text-secondary hover:bg-primary-light transition-colors" href="#mirfield">
                Mirfield &amp; Dewsbury
              </a>
      <a className="px-4 py-2 rounded-full bg-primary/60 text-slate-300 hover:text-secondary hover:bg-primary-light transition-colors" href="#bradford">
                Bradford South
              </a>
      <a className="px-4 py-2 rounded-full bg-accent/30 text-gray-300 hover:bg-accent hover:text-white transition-colors" href="#uk-wide">
                Mobile Tyre UK Hub →
              </a>
      </div>
      </div>
      </section>
      {/* FINAL CTA: Bold Solid-Gold Card Overlapping Dramatic Photo Card */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Stacking Parent Container */}
      <div className="relative w-full max-w-4xl mx-auto min-h-[420px] flex items-center justify-center">
      {/* Background Angled Dramatic Photo Card (Back Layer) */}
      <div className="absolute inset-x-2 sm:inset-x-8 top-0 h-80 rounded-3xl overflow-hidden shadow-2xl opacity-50 sm:opacity-70 transition-transform duration-500" style={{ transform: "rotate(-2.5deg)" }}>
      <Image src="/gallery-evening-callout.webp" alt="Emergency night mobile tyre van" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary/60 to-transparent"></div>
      </div>
      {/* Foreground Solid-Gold Overlapping Action Card (Front Layer) */}
      <div className="relative w-full sm:w-[92%] rounded-3xl bg-secondary text-primary p-8 sm:p-12 shadow-[0_25px_60px_-10px_rgba(255,215,0,0.35)] z-20 transition-transform duration-300" style={{ transform: "rotate(1deg)" }}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="space-y-3 text-center md:text-left">
      <span className="inline-block px-3 py-1 rounded-full bg-primary text-secondary text-xs font-black uppercase tracking-wider">
                      24/7 West Yorkshire Roadside Fleet
                    </span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold sm:text-[40px] sm:leading-[48px] sm:tracking-[-0.02em] sm:font-extrabold text-primary font-black leading-none">
                      Need Rapid Tyre Help in Brighouse Right Now?
                    </h2>
      <p className="text-[15px] leading-[24px] text-primary font-medium max-w-lg">
                      Call immediately. Our nearby dispatch van is loaded with premium &amp; economy stock, ready to roll to your precise location.
                    </p>
      </div>
      {/* Urgent Call Button */}
      <div className="shrink-0 flex flex-col items-center gap-3">
      <a className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary-dark hover:bg-primary/60 text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold sm:text-[20px] sm:leading-[26px] sm:font-bold uppercase tracking-wider shadow-2xl active:scale-95 transition-all" href="tel:07955266077">
      <PhoneCall className="h-6 w-6 text-secondary" fill="currentColor" strokeWidth={0} />
      <span>07955 266 077</span>
      </a>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-primary font-bold">
                      Zero automated queues • Real human dispatch
                    </span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
    </main>
  );
}
