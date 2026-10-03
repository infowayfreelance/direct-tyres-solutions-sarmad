import { ArrowRight, Building2, Car, CreditCard, Disc, Gauge, MessageCircle, Navigation, PhoneCall, Search, TrafficCone, Wrench } from "lucide-react";

export default function BradfordPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[92vh] flex items-center overflow-hidden bg-primary-dark">
      {/* Atmospheric Ambient Visual */}
      <div className="absolute inset-0 z-0 bg-cover bg-center mix-blend-luminosity opacity-40 scale-105 transform" style={{ backgroundImage: "url('/hero-section-images-936x527.webp')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/80 to-transparent z-10"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/15 blur-3xl pointer-events-none"></div>
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 w-full flex flex-col justify-center">
      {/* Frosted Glass Mission Panel */}
      <div className="max-w-2xl bg-primary-dark/75 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col gap-6">
      {/* Live Dispatch Status Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent w-fit text-white shadow-lg">
      <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-ping"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold tracking-widest uppercase">West Yorkshire Response Unit • Active</span>
      </div>
      <div className="flex flex-col gap-3">
      <h1 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black leading-none uppercase">
                  24/7 Mobile Tyre Fitting in Bradford
                </h1>
      <p className="text-[18px] leading-[28px] text-gray-400 font-normal">
                  Immediate roadside rescue and on-demand fitting across Bradford. Rapid van dispatch to the M606, A650 corridor, home driveways, and corporate depots in under 35 minutes.
                </p>
      </div>
      {/* Key Metrics Ribbon */}
      <div className="grid grid-cols-3 gap-3 py-3">
      <div className="flex flex-col bg-primary/60 p-3 rounded-xl">
      <span className="font-heading text-[20px] leading-[26px] font-bold text-secondary">25-45m</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-wider">Avg Arrival</span>
      </div>
      <div className="flex flex-col bg-primary/60 p-3 rounded-xl">
      <span className="font-heading text-[20px] leading-[26px] font-bold text-secondary">24/7</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-wider">M606 Support</span>
      </div>
      <div className="flex flex-col bg-primary/60 p-3 rounded-xl">
      <span className="font-heading text-[20px] leading-[26px] font-bold text-secondary">100%</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-wider">Mobile Vans</span>
      </div>
      </div>
      {/* Emergency Action Trigger Group */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
      <a className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-xl" href="tel:07955266077">
      <PhoneCall className="font-bold text-primary h-5 w-5" fill="currentColor" strokeWidth={0} />
      <span>07955 266 077</span>
      </a>
      <a className="flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-primary/80 text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold hover:bg-primary-light transition-all shadow-md" href="https://wa.me/448009992470">
      <MessageCircle className="text-secondary h-5 w-5" />
      <span>WhatsApp Dispatch</span>
      </a>
      </div>
      </div>
      </div>
      </section>
      {/* LOCAL BRADFORD INFRASTRUCTURE OVERVIEW */}
      <section className="w-full bg-primary-dark py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div className="flex flex-col gap-2 max-w-2xl">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold tracking-widest text-secondary-hover uppercase">Hyper-Local Logistics Network</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-extrabold">BRADFORD TRANSIT ARTERIES &amp; OUT-OF-HOURS CALLOUTS</h2>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400 max-w-md">
                Strategically deployed mobile tyre vans operating non-stop across West Yorkshire to bypass pinch-points and reach stranded motorists promptly.
              </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Node 1 */}
      <div className="flex flex-col p-6 rounded-2xl bg-primary/60 backdrop-blur-md shadow-md gap-4">
      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-white">
      <TrafficCone className="h-5 w-5" />
      </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">A6177 Outer Ring Road</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Continuous patrolling around the primary ring road ensures rapid diversion into city multi-storey car parks, commercial zones, and urban estates.</p>
      </div>
      {/* Node 2 */}
      <div className="flex flex-col p-6 rounded-2xl bg-primary/60 backdrop-blur-md shadow-md gap-4">
      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-white">
      <Gauge className="h-5 w-5" />
      </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">M606 Motorway Spur</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Fast response to the South Bradford corridor connecting down into the M62 junction 26 (Chain Bar) for urgent shoulder and slip road recoveries.</p>
      </div>
      {/* Node 3 */}
      <div className="flex flex-col p-6 rounded-2xl bg-primary/60 backdrop-blur-md shadow-md gap-4">
      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-white">
      <Car className="h-5 w-5" />
      </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">A650 Commuter Corridor</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Dedicated coverage from Shipley down through Manningham and Tong Street, delivering roadside tyre changes before morning gridlock sets in.</p>
      </div>
      {/* Node 4 */}
      <div className="flex flex-col p-6 rounded-2xl bg-primary/60 backdrop-blur-md shadow-md gap-4">
      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-white">
      <Building2 className="h-5 w-5" />
      </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Industrial &amp; Office Complexes</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Fleet inspections and puncture resolution directly inside distribution hubs, loading yards, and city centre multi-storey basements.</p>
      </div>
      </div>
      </div>
      </section>
      {/* SPECIALIZED SERVICES (SPOTLIGHT TILES) */}
      <section className="w-full bg-primary-dark py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
      <div className="flex flex-col gap-2">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold tracking-widest text-secondary-hover uppercase">Mission Capabilities</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-extrabold">SPECIALIZED MOBILE TYRE SERVICES</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Tile 1 */}
      <div className="relative h-96 rounded-3xl overflow-hidden flex flex-col justify-end p-6 shadow-2xl group">
      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('/gallery-onsite-wheel-fitting.webp')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/60 to-transparent"></div>
      <div className="relative z-10 p-6 rounded-2xl bg-primary/80 backdrop-blur-md flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Emergency Roadside Puncture Repair</span>
      <span className="px-3 py-1 rounded-full bg-secondary text-primary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">24/7 Priority</span>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    Precision wheel balancing and tyre replacement right at the roadside on live bypasses and trunk roads using mobile air compressors and safety rigs.
                  </p>
      </div>
      </div>
      {/* Tile 2 */}
      <div className="relative h-96 rounded-3xl overflow-hidden flex flex-col justify-end p-6 shadow-2xl group">
      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('/gallery-roadside-fitting.webp')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/60 to-transparent"></div>
      <div className="relative z-10 p-6 rounded-2xl bg-primary/80 backdrop-blur-md flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Run-Flat &amp; Low Profile Fitting</span>
      <span className="px-3 py-1 rounded-full bg-secondary text-primary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">Stock Ready</span>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    State-of-the-art bead press equipment to handle stiff sidewall Run-Flat tyres for BMW, Mercedes, and Audi without scratching premium alloy rims.
                  </p>
      </div>
      </div>
      {/* Tile 3 */}
      <div className="relative h-96 rounded-3xl overflow-hidden flex flex-col justify-end p-6 shadow-2xl group">
      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('/gallery-home-callout.webp')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/60 to-transparent"></div>
      <div className="relative z-10 p-6 rounded-2xl bg-primary/80 backdrop-blur-md flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Commercial Fleet Maintenance</span>
      <span className="px-3 py-1 rounded-full bg-secondary text-primary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">Contract &amp; Ad-Hoc</span>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    On-site van and transit tyre replacements in Bradford industrial estates, minimising depot downtime during business hours and overnight shifts.
                  </p>
      </div>
      </div>
      {/* Tile 4 */}
      <div className="relative h-96 rounded-3xl overflow-hidden flex flex-col justify-end p-6 shadow-2xl group">
      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('/gallery-evening-callout.webp')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/60 to-transparent"></div>
      <div className="relative z-10 p-6 rounded-2xl bg-primary/80 backdrop-blur-md flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Home &amp; Workplace Fitting</span>
      <span className="px-3 py-1 rounded-full bg-secondary text-primary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">Pre-Bookable</span>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    Skip traditional garage queues. Get budget, mid-range, or premium Michelin, Pirelli, and Continental tyres fitted right on your driveway.
                  </p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* ROADS & REGIONAL COVERAGE MAP WITH FLOATING NODES */}
      <section className="relative w-full py-24 px-6 overflow-hidden bg-primary-dark">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
      <div className="flex flex-col gap-2 max-w-2xl">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold tracking-widest text-secondary-hover uppercase">Rapid Perimeter Support</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-extrabold">STRATEGIC CORRIDORS &amp; SURROUNDING ZONES</h2>
      <p className="text-[15px] leading-[24px] text-gray-400">We maintain rapid response units stationed along pivotal interchange points across West Yorkshire.</p>
      </div>
      {/* Tactical Visual Container with Interactive Nodes */}
      <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-8 bg-primary/60">
      {/* Interactive stylized network background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark via-primary/80 to-primary-dark opacity-90"></div>
      {/* Subtle network grid representation */}
      <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
      <svg className="w-full h-full text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="50%" cy="50%" r="180" stroke-dasharray="6,6"></circle>
      <circle cx="50%" cy="50%" r="280" stroke-dasharray="8,8"></circle>
      <line x1="15%" x2="85%" y1="20%" y2="80%"></line>
      <line x1="85%" x2="15%" y1="20%" y2="80%"></line>
      </svg>
      </div>
      {/* Central Hub Node */}
      <div className="relative z-10 flex flex-col items-center">
      <div className="w-20 h-20 rounded-full bg-secondary text-primary flex items-center justify-center shadow-2xl animate-pulse">
      <Disc className="h-9 w-9" fill="currentColor" strokeWidth={0} />
      </div>
      <span className="mt-3 px-4 py-1.5 rounded-full bg-primary/90 backdrop-blur-md text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider shadow-lg">Bradford Central</span>
      </div>
      {/* Floating Sector Tags */}
      <div className="absolute top-10 left-8 md:left-24 px-4 py-2 rounded-xl bg-primary-dark/85 backdrop-blur-md shadow-xl flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-accent"></span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">M606 / M62 Junction</span>
      </div>
      <div className="absolute top-12 right-8 md:right-24 px-4 py-2 rounded-xl bg-primary-dark/85 backdrop-blur-md shadow-xl flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Leeds A647 Express</span>
      </div>
      <div className="absolute bottom-12 left-10 md:left-32 px-4 py-2 rounded-xl bg-primary-dark/85 backdrop-blur-md shadow-xl flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-accent"></span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Halifax &amp; Brighouse</span>
      </div>
      <div className="absolute bottom-10 right-12 md:right-36 px-4 py-2 rounded-xl bg-primary-dark/85 backdrop-blur-md shadow-xl flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Shipley &amp; Aire Valley</span>
      </div>
      <div className="absolute top-1/2 left-6 transform -translate-y-1/2 px-3 py-1.5 rounded-lg bg-primary/70 backdrop-blur-md hidden sm:flex items-center gap-2">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">A6177 Ring Road</span>
      </div>
      <div className="absolute top-1/2 right-6 transform -translate-y-1/2 px-3 py-1.5 rounded-lg bg-primary/70 backdrop-blur-md hidden sm:flex items-center gap-2">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Cleckheaton Bypass</span>
      </div>
      </div>
      </div>
      </section>
      {/* HOW IT WORKS: 5-STEP GLASS PANEL STRIP */}
      <section className="w-full bg-primary-dark py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
      <div className="flex flex-col gap-2">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold tracking-widest text-secondary-hover uppercase">Streamlined Protocol</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-extrabold">HOW EMERGENCY MOBILE FITTING WORKS</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {/* Step 1 */}
      <div className="flex flex-col p-6 rounded-2xl bg-primary/60 backdrop-blur-md shadow-lg gap-4 justify-between">
      <div className="flex items-center justify-between">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary font-black">01</span>
      <PhoneCall className="text-gray-400 h-5 w-5" />
      </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Make Initial Contact</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Call or WhatsApp our 24/7 Bradford line with your vehicle registration and exact location.</p>
      </div>
      </div>
      {/* Step 2 */}
      <div className="flex flex-col p-6 rounded-2xl bg-primary/60 backdrop-blur-md shadow-lg gap-4 justify-between">
      <div className="flex items-center justify-between">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary font-black">02</span>
      <Search className="text-gray-400 h-5 w-5" />
      </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Tyre Match &amp; Quote</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">We cross-reference exact sizing (e.g. 225/45 R18) and confirm a transparent, fixed price quote.</p>
      </div>
      </div>
      {/* Step 3 */}
      <div className="flex flex-col p-6 rounded-2xl bg-primary/60 backdrop-blur-md shadow-lg gap-4 justify-between">
      <div className="flex items-center justify-between">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary font-black">03</span>
      <Navigation className="text-gray-400 h-5 w-5" />
      </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Van En Route</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Nearest emergency unit dispatches immediately with live GPS ETA sent right to your mobile.</p>
      </div>
      </div>
      {/* Step 4 */}
      <div className="flex flex-col p-6 rounded-2xl bg-primary/60 backdrop-blur-md shadow-lg gap-4 justify-between">
      <div className="flex items-center justify-between">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary font-black">04</span>
      <Wrench className="text-gray-400 h-5 w-5" />
      </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Expert Roadside Fit</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Puncture checked, new tyre fitted, valve replaced, wheel balanced, and torqued to exact spec.</p>
      </div>
      </div>
      {/* Step 5 */}
      <div className="flex flex-col p-6 rounded-2xl bg-primary/60 backdrop-blur-md shadow-lg gap-4 justify-between">
      <div className="flex items-center justify-between">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary font-black">05</span>
      <CreditCard className="text-gray-400 h-5 w-5" />
      </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Contactless Pay</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Pay safely via chip &amp; pin, contactless card, or mobile link. Safely back on the move.</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* VERIFIED LOCAL CASE STUDY: M606 BMW REPAIR */}
      <section className="w-full bg-primary-dark py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold tracking-widest text-secondary-hover uppercase">Recent Response Log</span>
      <div className="p-8 md:p-10 rounded-3xl bg-primary/60 backdrop-blur-xl shadow-2xl flex flex-col md:flex-row gap-8 items-center">
      <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden relative shadow-lg">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/gallery-evening-home-visit.webp')" }}></div>
      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">
                  VERIFIED JOB
                </div>
      </div>
      <div className="w-full md:w-2/3 flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
      <h3 className="font-heading text-[30px] leading-[38px] font-bold text-white font-bold">BMW 3 Series • M606 Northbound Approach</h3>
      <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase font-semibold">25 Min Turnaround</span>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Driver experienced sudden sidewall compromise heading onto the M606 spur towards Bradford centre at 21:40 on a wet evening. Stranded on the hard shoulder with a severe puncture.
                </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
      <div className="flex flex-col bg-primary/80 p-3 rounded-xl">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Tyre Model</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">225/45 R18 Run-Flat</span>
      </div>
      <div className="flex flex-col bg-primary/80 p-3 rounded-xl">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Response Time</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">19 Minutes</span>
      </div>
      <div className="flex flex-col bg-primary/80 p-3 rounded-xl col-span-2 sm:col-span-1">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Total Completion</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">25 Minutes</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* FAQS: TWO-COLUMN FROSTED GLASS */}
      <section className="w-full bg-primary-dark py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
      <div className="flex flex-col gap-2">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold tracking-widest text-secondary-hover uppercase">Clear Guidance</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-extrabold">FREQUENTLY ASKED QUESTIONS</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* FAQ 1 */}
      <div className="p-6 rounded-2xl bg-primary/60 backdrop-blur-md shadow-md flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">How quickly can a van reach me in Bradford?</h3>
      <ArrowRight className="text-secondary h-5 w-5" />
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Our average emergency roadside arrival time across Bradford, including the M606 and inner rings, is between 25 and 45 minutes depending on traffic and precise location.
                </p>
      </div>
      {/* FAQ 2 */}
      <div className="p-6 rounded-2xl bg-primary/60 backdrop-blur-md shadow-md flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Can you replace Run-Flat tyres on-site?</h3>
      <ArrowRight className="text-secondary h-5 w-5" />
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Yes. All mobile technician vans carry high-grade assist arms and bead clamps engineered to fit rigid Run-Flat tyres without alloy damage.
                </p>
      </div>
      {/* FAQ 3 */}
      <div className="p-6 rounded-2xl bg-primary/60 backdrop-blur-md shadow-md flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">What if I do not know my tyre size?</h3>
      <ArrowRight className="text-secondary h-5 w-5" />
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Just give us your vehicle registration plate over the phone or via WhatsApp. Our dispatch lookup verifies original equipment sizing and confirmed alternatives.
                </p>
      </div>
      {/* FAQ 4 */}
      <div className="p-6 rounded-2xl bg-primary/60 backdrop-blur-md shadow-md flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Do you operate during the night and on bank holidays?</h3>
      <ArrowRight className="text-secondary h-5 w-5" />
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Yes, our Bradford mobile fleet operates 24 hours a day, 365 days a year, including unsociable hours, severe weather, and holiday weekends.
                </p>
      </div>
      </div>
      </div>
      </section>
      {/* RELATED COVERAGE NETWORK */}
      <section className="w-full bg-primary-dark py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
      <div className="flex items-center justify-between">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">Adjacent Coverage Zones</h3>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-widest">Rapid Response Radius</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      <a className="p-4 rounded-xl bg-primary/60 hover:bg-primary/60 transition-all flex flex-col gap-1" href="#halifax">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Halifax</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Calderdale Corridor</span>
      </a>
      <a className="p-4 rounded-xl bg-primary/60 hover:bg-primary/60 transition-all flex flex-col gap-1" href="#leeds">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Leeds</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">A647 / Ring Road</span>
      </a>
      <a className="p-4 rounded-xl bg-primary/60 hover:bg-primary/60 transition-all flex flex-col gap-1" href="#shipley">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Shipley</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Aire Valley Hub</span>
      </a>
      <a className="p-4 rounded-xl bg-primary/60 hover:bg-primary/60 transition-all flex flex-col gap-1" href="#brighouse">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Brighouse</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">M62 Junction 25</span>
      </a>
      <a className="p-4 rounded-xl bg-primary/60 hover:bg-primary/60 transition-all flex flex-col gap-1" href="#yorkshire">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">West Yorkshire</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">County-wide Fleet</span>
      </a>
      </div>
      </div>
      </section>
      {/* FINAL EMERGENCY CALL TO ACTION */}
      <section className="relative w-full py-28 px-6 bg-primary-dark overflow-hidden flex items-center justify-center">
      {/* Atmospheric Backdrop */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105" style={{ backgroundImage: "url('/gallery-precision-care.webp')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-primary-dark"></div>
      <div className="relative z-10 max-w-4xl w-full p-8 md:p-14 rounded-3xl bg-primary-dark/80 backdrop-blur-xl shadow-2xl flex flex-col items-center text-center gap-8">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent text-white">
      <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold tracking-widest uppercase">Immediate Bradford Dispatch Available</span>
      </div>
      <div className="flex flex-col gap-3 max-w-2xl">
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black uppercase">
                Stranded In Bradford Right Now?
              </h2>
      <p className="text-[18px] leading-[28px] text-gray-400">
                Do not stay trapped at the roadside or stuck on your driveway. Our nearest mobile fitting van is equipped and ready to roll.
              </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-5 w-full justify-center max-w-md">
      <a className="w-full flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-xl" href="tel:07955266077">
      <PhoneCall className="font-bold text-primary h-5 w-5" fill="currentColor" strokeWidth={0} />
      <span>07955 266 077</span>
      </a>
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-widest">
              Rapid Response • Card &amp; Contactless Accepted • 24/7 Guaranteed
            </span>
      </div>
      </section>
    </main>
  );
}
