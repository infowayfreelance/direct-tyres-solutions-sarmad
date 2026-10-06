import { ArrowRight, Check, CircleDot, Clock, Compass, Headphones, HelpCircle, MapPin, MessageCircle, Navigation, PhoneCall, Route, ShieldCheck, Siren, Truck } from "lucide-react";

export default function HeywoodPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* HERO SECTION: Photo-backed with tactical navy scrim */}
      <section className="relative w-full overflow-hidden bg-primary-dark py-20 lg:py-28">
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero-section-images-936x527.webp')" }}></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-primary-dark/95 via-primary-dark/85 to-primary-dark"></div>
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      {/* Status Badge */}
      <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 mb-6 backdrop-blur-md">
      <span className="relative flex h-2.5 w-2.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
      </span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-gray-400">24/7 Rapid Response Unit • Heywood &amp; M62 Corridor</span>
      </div>
      {/* H1 Page Title */}
      <h1 className="text-[36px] leading-[42px] tracking-[-0.01em] font-black md:text-[56px] md:leading-[64px] md:tracking-[-0.02em] md:font-black font-heading text-white max-w-4xl uppercase">
              24/7 Mobile Tyre Fitting in <span className="text-secondary">Heywood</span>
            </h1>
      {/* Subtitle */}
      <p className="mt-4 max-w-2xl text-[18px] leading-[28px] text-gray-400/80">
              Emergency Roadside &amp; Junction Tyre Rescue across M62 J19, M66, and Heywood Distribution Corridors. Fast, professional on-site mobile wheel dispatch.
            </p>
      {/* Tactical CTAs */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
      <a className="inline-flex items-center gap-3 rounded-full bg-secondary px-8 py-4 text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading uppercase text-white shadow-xl hover:bg-secondary-hover active:scale-95 transition-all" href="tel:07955266077">
      <PhoneCall className="h-[24px] w-[24px]" />
      <span>Call 07955 266 077</span>
      </a>
      <a className="inline-flex items-center gap-3 rounded-full bg-primary/80 px-8 py-4 text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading uppercase text-white shadow-lg hover:bg-primary transition-all" href="https://wa.me/448009992470">
      <MessageCircle className="h-[24px] w-[24px] text-accent" />
      <span>WhatsApp Fitter</span>
      </a>
      </div>
      {/* Live Notification Strip */}
      <div className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary-dark/80 px-4 py-2 text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">
      <ShieldCheck className="h-[18px] w-[18px] text-secondary" />
      <span>Average arrival time across Pilsworth &amp; Heywood: <strong className="text-white">24-35 Minutes</strong></span>
      </div>
      </div>
      </section>
      {/* STATS STRIP: 4 Modular Cards */}
      <section className="w-full bg-primary-dark py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="rounded-2xl bg-primary-dark p-6 flex items-center gap-4 shadow-md">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
      <Clock className="h-[28px] w-[28px]" />
      </div>
      <div>
      <div className="text-[20px] leading-[26px] font-bold font-heading text-white">30 Mins</div>
      <div className="text-[13px] leading-[18px] text-gray-400/70">Average Heywood Arrival</div>
      </div>
      </div>
      <div className="rounded-2xl bg-primary-dark p-6 flex items-center gap-4 shadow-md">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
      <Route className="h-[28px] w-[28px]" />
      </div>
      <div>
      <div className="text-[20px] leading-[26px] font-bold font-heading text-white">M62 J19, M66 &amp; A58</div>
      <div className="text-[13px] leading-[18px] text-gray-400/70">Rapid Motorway Coverage</div>
      </div>
      </div>
      <div className="rounded-2xl bg-primary-dark p-6 flex items-center gap-4 shadow-md">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
      <Siren className="h-[28px] w-[28px]" />
      </div>
      <div>
      <div className="text-[20px] leading-[26px] font-bold font-heading text-white">24/7/365 On Call</div>
      <div className="text-[13px] leading-[18px] text-gray-400/70">Midnight &amp; Weekend Rescue</div>
      </div>
      </div>
      <div className="rounded-2xl bg-primary-dark p-6 flex items-center gap-4 shadow-md">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
      <Truck className="h-[28px] w-[28px]" />
      </div>
      <div>
      <div className="text-[20px] leading-[26px] font-bold font-heading text-white">100% Mobile Van</div>
      <div className="text-[13px] leading-[18px] text-gray-400/70">Heavy-Duty Roadside Gear</div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* LOCAL CONTEXT & OPERATIONAL OVERVIEW */}
      <section className="w-full bg-primary-dark py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7 flex flex-col gap-6">
      <div className="inline-flex items-center gap-2 text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider text-gray-400">
      <MapPin className="h-[20px] w-[20px] text-secondary" />
                  Local Junction &amp; Freight Corridor Specialists
                </div>
      <h2 className="text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold font-heading text-white">
                  Critical Roadside Interventions Across Heywood Logistics Routes
                </h2>
      <div className="space-y-4 text-[15px] leading-[24px] text-gray-400/80">
      <p>
                    Operating at the center of Greater Manchester’s transit matrix, Heywood drivers face high-risk bottlenecks daily. Between the heavily trafficked freight routes around Pilsworth Industrial Estate, continuous haulage logistics near M62 Junction 19, and the constant flow of commuter traffic along the A58 Rochdale Road, sudden blowouts and puncture emergencies require rapid, zero-delay resolution.
                  </p>
      <p>
                    Direct Tyre Solutions positions dedicated emergency mobile service vans along key arterial slip roads. We bypass recovery yard waiting times by bringing complete workshop-grade fitting rigs directly to your stranded position—whether on the hard shoulder, a distribution loading bay, or your residential driveway.
                  </p>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-2">
      <div className="flex items-center gap-3">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white">
      <Check className="h-[16px] w-[16px]" />
      </span>
      <span className="text-[13px] leading-[18px] text-white font-semibold">Stocked Commercial Tyres</span>
      </div>
      <div className="flex items-center gap-3">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white">
      <Check className="h-[16px] w-[16px]" />
      </span>
      <span className="text-[13px] leading-[18px] text-white font-semibold">Specialist Run-Flat Equipment</span>
      </div>
      <div className="flex items-center gap-3">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white">
      <Check className="h-[16px] w-[16px]" />
      </span>
      <span className="text-[13px] leading-[18px] text-white font-semibold">Digital Torque Calibration</span>
      </div>
      <div className="flex items-center gap-3">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white">
      <Check className="h-[16px] w-[16px]" />
      </span>
      <span className="text-[13px] leading-[18px] text-white font-semibold">No Recovery/Towing Needed</span>
      </div>
      </div>
      </div>
      <div className="lg:col-span-5">
      <div className="relative rounded-2xl bg-primary/60 p-6 shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between pb-4">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider text-white">Live Heywood Dispatch Hub</span>
      <span className="rounded-full bg-accent px-3 py-1 text-[11px] leading-[14px] tracking-[0.06em] font-bold text-white">Vans Patrolling</span>
      </div>
      <div className="relative w-full h-64 rounded-xl overflow-hidden mb-6 bg-cover bg-center" style={{ backgroundImage: "url('/gallery-onsite-wheel-fitting.webp')" }}>
      <div className="absolute inset-0 bg-primary-dark/40 backdrop-blur-[2px]"></div>
      <div className="absolute bottom-3 left-3 bg-primary-dark/90 px-3 py-1.5 rounded-lg text-[11px] leading-[14px] tracking-[0.06em] font-bold text-white flex items-center gap-2">
      <CircleDot className="text-secondary h-[16px] w-[16px]" />
      <span>Active Units: J19 M62 / Pilsworth / A58</span>
      </div>
      </div>
      <div className="space-y-3">
      <div className="flex items-center justify-between text-[13px] leading-[18px]">
      <span className="text-gray-400/70">Heywood Hub Direct Line</span>
      <span className="font-bold text-white">07955 266 077</span>
      </div>
      <div className="flex items-center justify-between text-[13px] leading-[18px]">
      <span className="text-gray-400/70">Average Response Status</span>
      <span className="font-bold text-secondary">Green (Under 30 Min)</span>
      </div>
      <div className="flex items-center justify-between text-[13px] leading-[18px]">
      <span className="text-gray-400/70">Payment Accepted</span>
      <span className="font-bold text-gray-400">Card / Contactless / Account</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 2x2 SERVICES GRID: Tight photo cards */}
      <section className="w-full bg-primary-dark py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center mb-12">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider text-secondary">What We Do</span>
      <h2 className="text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold font-heading text-white mt-2">
                Specialist On-Demand Tyre Services
              </h2>
      <p className="text-[15px] leading-[24px] text-gray-400/80 max-w-2xl mt-3">
                Fully fitted breakdown support equipped with commercial mounting machines, high-pressure bead seaters, and precision wheel balancers.
              </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Service Card 1 */}
      <div className="group rounded-2xl bg-primary/60 overflow-hidden shadow-xl flex flex-col transition-all hover:bg-primary/80">
      <div className="h-56 w-full overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/gallery-roadside-fitting.webp')" }}></div>
      <div className="p-8 flex flex-col flex-1 justify-between">
      <div>
      <div className="flex items-center justify-between mb-3">
      <h3 className="text-[20px] leading-[26px] font-bold font-heading text-white">Emergency Roadside Replacement</h3>
      <span className="rounded-full bg-secondary/20 px-3 py-1 text-[11px] leading-[14px] tracking-[0.06em] font-bold font-bold text-secondary">Priority 1</span>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400/70">
                      Punctures and high-speed blowouts along the M62 and A58 corridor replaced in-situ. We bring brand new budget, mid-range, or premium tyre stock directly to your location so you are never left waiting for an expensive recovery tow.
                    </p>
      </div>
      <div className="mt-6 flex items-center justify-between pt-4 bg-primary-dark/40 rounded-xl px-4 py-3">
      <span className="text-[13px] leading-[18px] text-gray-400">Includes laser balancing &amp; new rubber valve</span>
      <a className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary hover:underline inline-flex items-center gap-1" href="tel:07955266077">
                      Dispatch <ArrowRight className="h-[16px] w-[16px]" />
      </a>
      </div>
      </div>
      </div>
      {/* Service Card 2 */}
      <div className="group rounded-2xl bg-primary/60 overflow-hidden shadow-xl flex flex-col transition-all hover:bg-primary/80">
      <div className="h-56 w-full overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/gallery-home-callout.webp')" }}></div>
      <div className="p-8 flex flex-col flex-1 justify-between">
      <div>
      <div className="flex items-center justify-between mb-3">
      <h3 className="text-[20px] leading-[26px] font-bold font-heading text-white">Puncture Repair On-Site</h3>
      <span className="rounded-full bg-accent/20 px-3 py-1 text-[11px] leading-[14px] tracking-[0.06em] font-bold font-bold text-gray-400">BS AU 159</span>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400/70">
                      Got a screw, nail, or minor deflation? If the damage sits within the central 70% tread area and adheres to strict British safety guidelines, our technician performs an internal plug-patch vulcanisation on the spot.
                    </p>
      </div>
      <div className="mt-6 flex items-center justify-between pt-4 bg-primary-dark/40 rounded-xl px-4 py-3">
      <span className="text-[13px] leading-[18px] text-gray-400">Rigorous 5-point rim &amp; bead integrity check</span>
      <a className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary hover:underline inline-flex items-center gap-1" href="tel:07955266077">
                      Dispatch <ArrowRight className="h-[16px] w-[16px]" />
      </a>
      </div>
      </div>
      </div>
      {/* Service Card 3 */}
      <div className="group rounded-2xl bg-primary/60 overflow-hidden shadow-xl flex flex-col transition-all hover:bg-primary/80">
      <div className="h-56 w-full overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/gallery-evening-callout.webp')" }}></div>
      <div className="p-8 flex flex-col flex-1 justify-between">
      <div>
      <div className="flex items-center justify-between mb-3">
      <h3 className="text-[20px] leading-[26px] font-bold font-heading text-white">Locking Wheel Nut Extraction</h3>
      <span className="rounded-full bg-primary px-3 py-1 text-[11px] leading-[14px] tracking-[0.06em] font-bold font-bold text-gray-400">Damage-Free</span>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400/70">
                      Lost wheel nut key or rounded off bolts? Our vans carry heavy-duty inverse-threaded extraction tools and hydraulic release systems to remove stubborn nuts without scratching your alloy rims.
                    </p>
      </div>
      <div className="mt-6 flex items-center justify-between pt-4 bg-primary-dark/40 rounded-xl px-4 py-3">
      <span className="text-[13px] leading-[18px] text-gray-400">100% success rate on BMW, Ford, Audi, JLR</span>
      <a className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary hover:underline inline-flex items-center gap-1" href="tel:07955266077">
                      Dispatch <ArrowRight className="h-[16px] w-[16px]" />
      </a>
      </div>
      </div>
      </div>
      {/* Service Card 4 */}
      <div className="group rounded-2xl bg-primary/60 overflow-hidden shadow-xl flex flex-col transition-all hover:bg-primary/80">
      <div className="h-56 w-full overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/gallery-evening-home-visit.webp')" }}></div>
      <div className="p-8 flex flex-col flex-1 justify-between">
      <div>
      <div className="flex items-center justify-between mb-3">
      <h3 className="text-[20px] leading-[26px] font-bold font-heading text-white">Fleet &amp; Van Tyres</h3>
      <span className="rounded-full bg-secondary/20 px-3 py-1 text-[11px] leading-[14px] tracking-[0.06em] font-bold font-bold text-secondary">Pilsworth Hub</span>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400/70">
                      Minimise distribution downtime. We supply, mount, and torque high-load commercial tyres (C-rated) for couriers, delivery fleets, and utility vans operating out of Heywood industrial distribution parks.
                    </p>
      </div>
      <div className="mt-6 flex items-center justify-between pt-4 bg-primary-dark/40 rounded-xl px-4 py-3">
      <span className="text-[13px] leading-[18px] text-gray-400">Full VAT invoicing &amp; fleet accounts available</span>
      <a className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary hover:underline inline-flex items-center gap-1" href="tel:07955266077">
                      Dispatch <ArrowRight className="h-[16px] w-[16px]" />
      </a>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* ROADS & LOCALITY COVERAGE CALLOUT */}
      <section className="w-full bg-primary-dark py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-primary-dark p-8 lg:p-10 shadow-lg">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-secondary text-white">
      <Navigation className="h-[36px] w-[36px]" />
      </div>
      <div className="flex-1">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary">High-Priority Corridor Coverage</span>
      <p className="text-[16px] leading-[22px] tracking-[0.01em] font-bold md:text-[20px] md:leading-[26px] md:font-bold font-heading text-white mt-1">
                    Strategic rapid dispatch to <span className="text-secondary font-extrabold">M62 (Junction 19)</span>, <span className="text-secondary font-extrabold">M66</span>, and <span className="text-secondary font-extrabold">A58 Rochdale Road</span>. Immediate response units serving Heywood Town Centre, Pilsworth, Bamford, Bury, Middleton, and Rochdale.
                  </p>
      </div>
      <a className="shrink-0 rounded-full bg-secondary px-6 py-3.5 text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase font-bold text-white hover:bg-secondary-hover transition-all" href="tel:07955266077">
                  Call Local Depot
                </a>
      </div>
      </div>
      </div>
      </section>
      {/* HOW IT WORKS: Horizontal ribbon of flat numerals (01 to 05) */}
      <section className="w-full bg-primary-dark py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center mb-14">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider text-gray-400">Frictionless Workflow</span>
      <h2 className="text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold font-heading text-white mt-2">
                How Our Heywood Mobile Dispatch Operates
              </h2>
      <p className="text-[15px] leading-[24px] text-gray-400/70 max-w-xl mt-2">
                From roadside breakdown to back on the road in five fast, disciplined steps.
              </p>
      </div>
      <div className="relative">
      {/* Connecting Line for Desktop */}
      <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-primary -translate-y-8 z-0"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
      {/* Step 01 */}
      <div className="flex flex-col items-center text-center bg-primary-dark lg:bg-transparent p-6 lg:p-0 rounded-2xl">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/80 text-secondary font-heading text-[20px] leading-[26px] font-bold mb-4 shadow-md">
                    01
                  </div>
      <h4 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-white mb-2">Call In</h4>
      <p className="text-[13px] leading-[18px] text-gray-400/70">
                    Ring 07955 266 077 with your location or vehicle registration.
                  </p>
      </div>
      {/* Step 02 */}
      <div className="flex flex-col items-center text-center bg-primary-dark lg:bg-transparent p-6 lg:p-0 rounded-2xl">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/80 text-secondary font-heading text-[20px] leading-[26px] font-bold mb-4 shadow-md">
                    02
                  </div>
      <h4 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-white mb-2">Tyre Match</h4>
      <p className="text-[13px] leading-[18px] text-gray-400/70">
                    We confirm precise tyre dimensions and quote a transparent, fixed price.
                  </p>
      </div>
      {/* Step 03 */}
      <div className="flex flex-col items-center text-center bg-primary-dark lg:bg-transparent p-6 lg:p-0 rounded-2xl">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/80 text-secondary font-heading text-[20px] leading-[26px] font-bold mb-4 shadow-md">
                    03
                  </div>
      <h4 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-white mb-2">Van En Route</h4>
      <p className="text-[13px] leading-[18px] text-gray-400/70">
                    Nearest emergency mobile unit navigates directly to your exact GPS pin.
                  </p>
      </div>
      {/* Step 04 */}
      <div className="flex flex-col items-center text-center bg-primary-dark lg:bg-transparent p-6 lg:p-0 rounded-2xl">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-white font-heading text-[20px] leading-[26px] font-bold mb-4 shadow-md">
                    04
                  </div>
      <h4 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-white mb-2">Fitted &amp; Balanced</h4>
      <p className="text-[13px] leading-[18px] text-gray-400/70">
                    Technician fits, balances, and torques the wheel to factory spec.
                  </p>
      </div>
      {/* Step 05 */}
      <div className="flex flex-col items-center text-center bg-primary-dark lg:bg-transparent p-6 lg:p-0 rounded-2xl">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/80 text-secondary font-heading text-[20px] leading-[26px] font-bold mb-4 shadow-md">
                    05
                  </div>
      <h4 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-white mb-2">Back on Track</h4>
      <p className="text-[13px] leading-[18px] text-gray-400/70">
                    Contactless card payment settled roadside. Digital invoice emailed instantly.
                  </p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* REAL LOCAL JOB CARD (Folder-tab style header) */}
      <section className="w-full bg-primary-dark py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
      {/* Folder Tab Header */}
      <div className="inline-block rounded-t-xl bg-primary/80 px-6 py-2.5 text-[11px] leading-[14px] tracking-[0.06em] font-bold font-bold tracking-widest text-secondary uppercase shadow-sm">
                LOGGED CALLOUT #HW-4091
              </div>
      {/* Job Card Container */}
      <div className="rounded-b-2xl rounded-tr-2xl bg-primary/60 p-6 sm:p-10 shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      {/* Thumbnail Photo */}
      <div className="md:col-span-5">
      <div className="h-64 md:h-full min-h-[220px] rounded-xl overflow-hidden bg-cover bg-center shadow-md relative" style={{ backgroundImage: "url('/gallery-precision-care.webp')" }}>
      <span className="absolute top-3 left-3 rounded-full bg-primary-dark/90 px-3 py-1 text-[11px] leading-[14px] tracking-[0.06em] font-bold text-accent">
                        Roadside Rescue Complete
                      </span>
      </div>
      </div>
      {/* Detailed Dispatch Breakdown */}
      <div className="md:col-span-7 flex flex-col justify-between">
      <div>
      <div className="flex items-center justify-between pb-2">
      <h3 className="text-[20px] leading-[26px] font-bold font-heading text-white">Ford Transit Custom</h3>
      <span className="text-[13px] leading-[18px] text-secondary font-semibold">Pilsworth Way (M62 J19)</span>
      </div>
      <div className="inline-block text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-gray-400 font-mono mb-4">
                        Tyre Spec: 215/65 R16C Heavy-Duty Commercial
                      </div>
      <p className="text-[15px] leading-[24px] text-gray-400/80 mb-6">
                        Severe sidewall puncture caused by metal debris near Pilsworth logistics junction. Courier had 24 scheduled deliveries remaining. Emergency van routed from Heywood depot; technician arrived, removed damaged wheel, mounted new reinforced commercial tyre, and recalibrated wheel hub torque in 24 minutes total.
                      </p>
      </div>
      {/* Quick Logged Metrics */}
      <div className="grid grid-cols-3 gap-3 bg-primary-dark/60 rounded-xl p-4 text-center">
      <div>
      <div className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400/60 uppercase">Response Time</div>
      <div className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-secondary mt-0.5">24 Mins</div>
      </div>
      <div>
      <div className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400/60 uppercase">Job Duration</div>
      <div className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-white mt-0.5">18 Mins</div>
      </div>
      <div>
      <div className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400/60 uppercase">Route Status</div>
      <div className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-accent mt-0.5">Resumed</div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* FAQ SECTION: 2-Column Grid (6 Cards) */}
      <section className="w-full bg-primary-dark py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center mb-12">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider text-gray-400">Got Questions?</span>
      <h2 className="text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold font-heading text-white mt-2">
                Heywood Mobile Tyre Fitting FAQ
              </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Q1 */}
      <div className="rounded-2xl bg-primary/60 p-6 shadow-md">
      <div className="flex items-start gap-3">
      <HelpCircle className="text-secondary h-[24px] w-[24px] mt-0.5" />
      <div>
      <h4 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-white">How quickly can a fitter reach me on the M62 near Junction 19?</h4>
      <p className="text-[13px] leading-[18px] text-gray-400/70 mt-2">
                      Our active patrol units typically reach stranded vehicles on M62 J19 slip roads and nearby laybys within 25 to 35 minutes depending on live motorway traffic conditions.
                    </p>
      </div>
      </div>
      </div>
      {/* Q2 */}
      <div className="rounded-2xl bg-primary/60 p-6 shadow-md">
      <div className="flex items-start gap-3">
      <HelpCircle className="text-secondary h-[24px] w-[24px] mt-0.5" />
      <div>
      <h4 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-white">Do I need to supply my own replacement tyre?</h4>
      <p className="text-[13px] leading-[18px] text-gray-400/70 mt-2">
                      No. We carry a vast warehouse stock of brand-new tyres ranging from budget and all-season up to premium brands (Michelin, Goodyear, Continental, Pirelli) suited to your vehicle&apos;s make.
                    </p>
      </div>
      </div>
      </div>
      {/* Q3 */}
      <div className="rounded-2xl bg-primary/60 p-6 shadow-md">
      <div className="flex items-start gap-3">
      <HelpCircle className="text-secondary h-[24px] w-[24px] mt-0.5" />
      <div>
      <h4 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-white">Can you change commercial van tyres at Pilsworth Industrial Park?</h4>
      <p className="text-[13px] leading-[18px] text-gray-400/70 mt-2">
                      Yes. Our vans are specifically outfitted with commercial heavy-duty bead breakers and air supplies capable of fitting C-rated commercial tyres directly inside loading bays or parking yards.
                    </p>
      </div>
      </div>
      </div>
      {/* Q4 */}
      <div className="rounded-2xl bg-primary/60 p-6 shadow-md">
      <div className="flex items-start gap-3">
      <HelpCircle className="text-secondary h-[24px] w-[24px] mt-0.5" />
      <div>
      <h4 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-white">What happens if my locking wheel nut key is broken or lost?</h4>
      <p className="text-[13px] leading-[18px] text-gray-400/70 mt-2">
                      Our technicians carry specialized non-destructive extraction kits. We can safely remove locking wheel nuts on roadside without inflicting damage on your rims or hub assemblies.
                    </p>
      </div>
      </div>
      </div>
      {/* Q5 */}
      <div className="rounded-2xl bg-primary/60 p-6 shadow-md">
      <div className="flex items-start gap-3">
      <HelpCircle className="text-secondary h-[24px] w-[24px] mt-0.5" />
      <div>
      <h4 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-white">Are you available during bank holidays and late nights in Heywood?</h4>
      <p className="text-[13px] leading-[18px] text-gray-400/70 mt-2">
                      Yes, our operations operate 24 hours a day, 365 days a year without closure. Midnight callouts receive the exact same rapid priority response as daytime bookings.
                    </p>
      </div>
      </div>
      </div>
      {/* Q6 */}
      <div className="rounded-2xl bg-primary/60 p-6 shadow-md">
      <div className="flex items-start gap-3">
      <HelpCircle className="text-secondary h-[24px] w-[24px] mt-0.5" />
      <div>
      <h4 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-white">What payment options do you support at roadside?</h4>
      <p className="text-[13px] leading-[18px] text-gray-400/70 mt-2">
                      Every mobile van is equipped with a secure chip-and-pin/contactless terminal. We accept Visa, Mastercard, American Express, Apple Pay, Google Pay, and pre-approved commercial fleet accounts.
                    </p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* RELATED SERVICE LOCATIONS */}
      <section className="w-full bg-primary-dark py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-gray-400">Regional Coverage Net</span>
      <h3 className="text-[20px] leading-[26px] font-bold font-heading text-white mt-1">Neighbouring Mobile Response Zones</h3>
      </div>
      <div className="text-[13px] leading-[18px] text-gray-400/70">
                Cross-borough emergency coverage across Greater Manchester
              </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      <a className="flex flex-col items-center justify-center rounded-xl bg-primary/60 p-4 text-center hover:bg-primary/80 transition-all" href="#rochdale">
      <Navigation className="text-secondary mb-1 h-[22px] w-[22px]" />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white font-bold">Rochdale</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400/60 mt-0.5">7 Mins Away</span>
      </a>
      <a className="flex flex-col items-center justify-center rounded-xl bg-primary/60 p-4 text-center hover:bg-primary/80 transition-all" href="#bury">
      <Navigation className="text-secondary mb-1 h-[22px] w-[22px]" />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white font-bold">Bury</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400/60 mt-0.5">8 Mins Away</span>
      </a>
      <a className="flex flex-col items-center justify-center rounded-xl bg-primary/60 p-4 text-center hover:bg-primary/80 transition-all" href="#middleton">
      <Navigation className="text-secondary mb-1 h-[22px] w-[22px]" />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white font-bold">Middleton</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400/60 mt-0.5">6 Mins Away</span>
      </a>
      <a className="flex flex-col items-center justify-center rounded-xl bg-primary/60 p-4 text-center hover:bg-primary/80 transition-all" href="#pilsworth">
      <Navigation className="text-secondary mb-1 h-[22px] w-[22px]" />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white font-bold">Pilsworth</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400/60 mt-0.5">Local Industrial Hub</span>
      </a>
      <a className="flex flex-col items-center justify-center rounded-xl bg-primary/60 p-4 text-center hover:bg-primary/80 transition-all" href="#bamford">
      <Navigation className="text-secondary mb-1 h-[22px] w-[22px]" />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white font-bold">Bamford</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400/60 mt-0.5">5 Mins Away</span>
      </a>
      <a className="flex flex-col items-center justify-center rounded-xl bg-primary/60 p-4 text-center hover:bg-primary/80 transition-all" href="#uk-wide">
      <Compass className="text-accent mb-1 h-[22px] w-[22px]" />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white font-bold">Mobile Tyre UK</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400/60 mt-0.5">National Network</span>
      </a>
      </div>
      </div>
      </section>
      {/* FINAL CTA: Full-width Flat Bar with Key Stats */}
      <section className="w-full bg-primary-dark py-10 shadow-inner">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-primary/80 rounded-2xl p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary text-white">
      <Headphones className="h-[32px] w-[32px]" />
      </div>
      <div>
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-gray-400">
      <span>30-Min Avg Dispatch</span>
      <span>•</span>
      <span>No Towing Required</span>
      <span>•</span>
      <span>24/7/365 On Call</span>
      </div>
      <h3 className="text-[20px] leading-[26px] font-bold md:text-[30px] md:leading-[38px] md:font-bold font-heading text-white mt-1">
                    Stranded in Heywood or M62 J19? We are on standby.
                  </h3>
      </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
      <a className="inline-flex items-center gap-3 rounded-full bg-secondary px-8 py-4 text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading uppercase text-white shadow-2xl hover:bg-secondary-hover active:scale-95 transition-all" href="tel:07955266077">
      <PhoneCall className="h-[24px] w-[24px]" />
      <span>Call 07955 266 077 Now</span>
      </a>
      </div>
      </div>
      </div>
      </section>
    </main>
  );
}
