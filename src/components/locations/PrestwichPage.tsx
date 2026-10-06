import Image from "next/image";
import { CheckCircle2, Clock, Gauge, MessageCircle, PhoneCall, ShieldCheck, Wrench } from "lucide-react";

export default function PrestwichPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* HERO SECTION: PHOTO STACK HERO */}
      <section className="relative w-full bg-primary-dark py-space-xl px-margin-mobile md:px-margin overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
      {/* Left Content Column */}
      <div className="lg:col-span-7 flex flex-col z-10">
      <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider mb-space-md shadow-md">
      <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
                24/7 Rapid Mobile Response — Prestwich &amp; M60
              </div>
      <h1 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black mb-space-md">
                24/7 Mobile Tyre Fitting in <span className="text-secondary">Prestwich</span>
              </h1>
      <p className="text-[18px] leading-[28px] text-gray-400 max-w-xl mb-space-lg">
                Stuck with a puncture on Bury New Road, stranded before the school run, or facing tyre failure near M60 Junction 17? Our fully fitted mobile workshops reach your driveway, office, or roadside spot within 30–60 minutes.
              </p>
      {/* CTA Cluster */}
      <div className="flex flex-wrap items-center gap-space-md mb-space-lg">
      <a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold hover:brightness-105 active:scale-95 transition-all shadow-xl font-bold" href="tel:07955266077">
      <PhoneCall className="text-primary h-5 w-5" />
                  Call 07955 266 077
                </a>
      <a className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-primary/80 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold hover:bg-primary transition-all shadow-md" href="https://wa.me/448009992470">
      <MessageCircle className="text-accent h-5 w-5" />
                  WhatsApp Booking
                </a>
      </div>
      {/* Micro Proof Badges */}
      <div className="flex items-center gap-6 pt-space-xs text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <div className="flex items-center gap-2">
      <ShieldCheck className="text-secondary h-[18px] w-[18px]" />
                  30–60 Min Target ETA
                </div>
      <div className="flex items-center gap-2">
      <Clock className="text-secondary h-[18px] w-[18px]" />
                  Open 24 Hours / 365 Days
                </div>
      <div className="flex items-center gap-2">
      <Wrench className="text-secondary h-[18px] w-[18px]" />
                  Driveway &amp; Kerbside Safe
                </div>
      </div>
      </div>
      {/* Right Column: Photo Stack (2 Overlapping Panels) */}
      <div className="lg:col-span-5 relative mt-space-lg lg:mt-0 flex items-center justify-center">
      {/* Ambient radial glow behind stack */}
      <div className="absolute w-72 h-72 rounded-full bg-accent/20 blur-3xl pointer-events-none"></div>
      <div className="relative w-full max-w-[440px] h-[400px] md:h-[460px]">
      {/* Base / Back Photo: Tread & Pressure Verification */}
      <div className="relative absolute top-0 right-0 w-[78%] h-[68%] rounded-2xl overflow-hidden shadow-2xl bg-primary-dark z-10 transition-transform hover:-translate-y-1 duration-300">
      <Image src="/hero-section-images-936x527.webp" alt="Technician measuring tyre tread depth with precision digital vernier gauge" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-full bg-primary-dark/80 backdrop-blur-md text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold flex items-center gap-1.5">
      <Gauge className="text-accent h-[14px] w-[14px]" />
                    Digital Safety Check
                  </div>
      </div>
      {/* Front / Floating Photo: Technician roadside impact wrench */}
      <div className="relative absolute bottom-0 left-0 w-[84%] h-[72%] rounded-2xl overflow-hidden shadow-2xl bg-primary-dark z-20 transition-transform hover:translate-x-1 duration-300">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Emergency mobile tyre fitting specialist mounting wheel on driveway" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-full bg-primary-dark/85 backdrop-blur-md text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold flex items-center gap-2">
      <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                    On-Site Precision Torque
                  </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* LOCAL INTRO & GEOGRAPHY CONTEXT */}
      <section className="w-full bg-primary-dark py-space-xl px-margin-mobile md:px-margin">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
      <div className="md:col-span-4 flex flex-col">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary mb-space-xs">Prestwich Coverage</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white font-bold">
                Driveway, Commuter &amp; Orbital Interventions
              </h2>
      </div>
      <div className="md:col-span-8 flex flex-col gap-space-md text-gray-400 text-[15px] leading-[24px]">
      <p>
                Prestwich presents a distinct blend of historic, densely parked residential avenues and intense orbital transit corridors. With high commuter flow funnelling down Bury New Road (A56), Middleton Road (A576), and the notorious bottlenecks surrounding Simister Island (M60 Junction 18), a damaged tyre quickly paralyzes your daily schedule.
              </p>
      <p>
                Dragging a deflated wheel to a static garage risks rim fractures and rim leaks. Our mobile units arrive equipped with pneumatic jacks, computerized wheel balancers, and full locking wheel nut removal rigs—finishing the installation directly in your driveway or safe curbside without you taking a minute out of work.
              </p>
      </div>
      </div>
      </section>
      {/* SERVICES SECTION: CHECKLIST COLUMN WITH INTEGRATED REAL PHOTO */}
      <section className="w-full bg-primary-dark py-space-xl px-margin-mobile md:px-margin">
      <div className="max-w-[1280px] mx-auto">
      <div className="mb-space-lg max-w-2xl">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-gray-300">Mobile Capabilities</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-bold mt-1">
                Specialist Tyre Solutions Across M25 / Prestwich
              </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
      {/* Checklist Column */}
      <div className="lg:col-span-7 flex flex-col justify-between space-y-space-md">
      {/* Item 1 */}
      <div className="p-space-lg rounded-2xl bg-primary-dark shadow-sm flex items-start gap-space-md">
      <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mt-1">
      <CheckCircle2 className="text-secondary h-5 w-5" fill="currentColor" strokeWidth={0} />
      </div>
      <div className="flex flex-col">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Emergency Tyre Replacement (24/7)</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                      From high-speed motorway blowouts on the M60 to sudden punctures on narrow avenues, our service vans carry extensive stock of budget, mid-range, and premium run-flat tyres for all major makes.
                    </p>
      </div>
      </div>
      {/* Item 2 */}
      <div className="p-space-lg rounded-2xl bg-primary-dark shadow-sm flex items-start gap-space-md">
      <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mt-1">
      <CheckCircle2 className="text-secondary h-5 w-5" fill="currentColor" strokeWidth={0} />
      </div>
      <div className="flex flex-col">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">BS AU 159 Compliant Puncture Repair</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                      We never rush or use temporary plugs. When tyre structural cords remain undamaged within the central 70% tread area, we perform complete combination stem repairs saving you the cost of a full replacement.
                    </p>
      </div>
      </div>
      {/* Item 3 */}
      <div className="p-space-lg rounded-2xl bg-primary-dark shadow-sm flex items-start gap-space-md">
      <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mt-1">
      <CheckCircle2 className="text-secondary h-5 w-5" fill="currentColor" strokeWidth={0} />
      </div>
      <div className="flex flex-col">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Locking Wheel Nut Extraction</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                      Lost key, stripped splines, or over-torqued lugs? Our vans utilize non-impact inverse hydraulic extraction blades to safely retrieve frozen security nuts without alloy rim scoring.
                    </p>
      </div>
      </div>
      {/* Item 4 */}
      <div className="p-space-lg rounded-2xl bg-primary-dark shadow-sm flex items-start gap-space-md">
      <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mt-1">
      <CheckCircle2 className="text-secondary h-5 w-5" fill="currentColor" strokeWidth={0} />
      </div>
      <div className="flex flex-col">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Driveway, Home &amp; Corporate Fitting</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                      Skip long tyre-depot waiting rooms. We complete complete vehicle renewals or seasonal rotations straight at your office car park or home, including bead sealing and new high-pressure valves.
                    </p>
      </div>
      </div>
      </div>
      {/* Accompanying Real Photo Panel */}
      <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-2xl min-h-[380px] bg-primary-dark">
      <Image src="/gallery-roadside-fitting.webp" alt="Mobile tyre fitting van and technician using pneumatic wrench directly on residential driveway" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-80"></div>
      <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-primary/60 backdrop-blur-md">
      <div className="flex items-center justify-between mb-1">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white font-bold">Prestwich Dispatch Hub</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary font-semibold">Active Unit</span>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    Every unit carries dynamic road balancing equipment, compressed air reserves, and digital calibrated torquing tools.
                  </p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* ROADS & LOCALITY TAG CLOUD */}
      <section className="w-full bg-primary-dark py-space-xl px-margin-mobile md:px-margin">
      <div className="max-w-[1280px] mx-auto text-center flex flex-col items-center">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary mb-space-xs">Strategic Operational Range</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white font-bold mb-space-md">
              Prestwich Transit Arteries &amp; Key Corridors
            </h2>
      <p className="text-[15px] leading-[24px] text-gray-400 max-w-2xl mb-space-lg">
              Immediate 30-minute roadside interception and driveway deployment across all central junctions and bordering postal sectors:
            </p>
      {/* Sleek Tag Cloud */}
      <div className="flex flex-wrap justify-center items-center gap-space-sm max-w-4xl">
      <span className="px-4 py-2.5 rounded-full bg-primary/60 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold shadow-sm hover:bg-primary/80 transition-colors">
                M60 Junction 17 (Prestwich / Whitefield)
              </span>
      <span className="px-4 py-2.5 rounded-full bg-primary/60 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold shadow-sm hover:bg-primary/80 transition-colors">
                A56 Bury New Road
              </span>
      <span className="px-4 py-2.5 rounded-full bg-primary/60 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold shadow-sm hover:bg-primary/80 transition-colors">
                A576 Middleton Road
              </span>
      <span className="px-4 py-2.5 rounded-full bg-primary/80 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold shadow-sm hover:bg-primary transition-colors">
                Heaton Park Boundary
              </span>
      <span className="px-4 py-2.5 rounded-full bg-primary/60 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold shadow-sm hover:bg-primary/80 transition-colors">
                Sedgley Park
              </span>
      <span className="px-4 py-2.5 rounded-full bg-primary/60 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold shadow-sm hover:bg-primary/80 transition-colors">
                Rainsough Brow
              </span>
      <span className="px-4 py-2.5 rounded-full bg-primary/60 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold shadow-sm hover:bg-primary/80 transition-colors">
                Simister Island (J18)
              </span>
      <span className="px-4 py-2.5 rounded-full bg-primary/60 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold shadow-sm hover:bg-primary/80 transition-colors">
                Bury
              </span>
      <span className="px-4 py-2.5 rounded-full bg-primary/60 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold shadow-sm hover:bg-primary/80 transition-colors">
                Whitefield
              </span>
      <span className="px-4 py-2.5 rounded-full bg-primary/60 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold shadow-sm hover:bg-primary/80 transition-colors">
                Middleton
              </span>
      <span className="px-4 py-2.5 rounded-full bg-primary/60 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold shadow-sm hover:bg-primary/80 transition-colors">
                Cheetham Hill
              </span>
      <span className="px-4 py-2.5 rounded-full bg-primary/60 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold shadow-sm hover:bg-primary/80 transition-colors">
                Salford
              </span>
      </div>
      </div>
      </section>
      {/* HOW IT WORKS: VERTICAL STEPPER WITH THIN CONNECTING LINE */}
      <section className="w-full bg-primary-dark py-space-xl px-margin-mobile md:px-margin">
      <div className="max-w-[840px] mx-auto">
      <div className="text-center mb-space-xl">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary">Process</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-bold mt-1">
                From Stranded to Rolling: In 5 Simple Steps
              </h2>
      </div>
      <div className="relative flex flex-col space-y-space-lg">
      {/* Connecting Line */}
      <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-secondary via-accent to-secondary"></div>
      {/* Step 1 */}
      <div className="relative flex items-start gap-space-lg">
      <div className="relative z-10 w-12 h-12 rounded-full bg-primary-dark flex items-center justify-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary shadow-md shrink-0 ring-4 ring-primary-dark">
                  1
                </div>
      <div className="flex-1 pt-1">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Instant Call or WhatsApp Dispatch</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    Dial 07955 266 077 or send your live pin location. Give us your vehicle registration or tyre sidewall spec (e.g. 225/45 R17).
                  </p>
      </div>
      </div>
      {/* Step 2 */}
      <div className="relative flex items-start gap-space-lg">
      <div className="relative z-10 w-12 h-12 rounded-full bg-primary-dark flex items-center justify-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-gray-300 shadow-md shrink-0 ring-4 ring-primary-dark">
                  2
                </div>
      <div className="flex-1 pt-1">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Transparent Upfront Quote</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    We confirm our all-inclusive price before leaving base: new casing, mobile fitting, balance, new valve, and old tyre disposal. No surprise fees.
                  </p>
      </div>
      </div>
      {/* Step 3 */}
      <div className="relative flex items-start gap-space-lg">
      <div className="relative z-10 w-12 h-12 rounded-full bg-primary-dark flex items-center justify-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-gray-300 shadow-md shrink-0 ring-4 ring-primary-dark">
                  3
                </div>
      <div className="flex-1 pt-1">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Rapid Dispatch (30–60 Min ETA)</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    Our nearest dedicated Prestwich van deploys directly to your parked bay, driveway, or highway refuge area with GPS tracking updates.
                  </p>
      </div>
      </div>
      {/* Step 4 */}
      <div className="relative flex items-start gap-space-lg">
      <div className="relative z-10 w-12 h-12 rounded-full bg-primary-dark flex items-center justify-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-gray-300 shadow-md shrink-0 ring-4 ring-primary-dark">
                  4
                </div>
      <div className="flex-1 pt-1">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Safe Precision Fitting &amp; Laser Balancing</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    Technician unmounts, bead-cleans, installs the fresh tyre, dynamically balances the wheel, and torques the bolts to manufacturer factory limits.
                  </p>
      </div>
      </div>
      {/* Step 5 */}
      <div className="relative flex items-start gap-space-lg">
      <div className="relative z-10 w-12 h-12 rounded-full bg-primary-dark flex items-center justify-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary shadow-md shrink-0 ring-4 ring-primary-dark">
                  5
                </div>
      <div className="flex-1 pt-1">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Contactless Payment &amp; Back On Road</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    Inspect the completed work, pay securely via tap-to-pay chip &amp; pin, and get straight back onto the M60 or your daily commute.
                  </p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* REAL LOCAL JOB HIGHLIGHT */}
      <section className="w-full bg-primary-dark py-space-xl px-margin-mobile md:px-margin">
      <div className="max-w-[1280px] mx-auto">
      <div className="mb-space-lg">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary">Verified Job Log</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white font-bold mt-1">
                Recent Case: St Mary&apos;s Road, Prestwich
              </h2>
      </div>
      <div className="rounded-2xl bg-primary/60 p-space-lg shadow-xl grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
      {/* Thumbnail */}
      <div className="relative md:col-span-5 h-[260px] rounded-xl overflow-hidden bg-primary-dark shadow-inner">
      <Image src="/gallery-home-callout.webp" alt="Detailed inspection of premium Michelin tire tread depth on fitted alloy" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      {/* Write-up Content */}
      <div className="md:col-span-7 flex flex-col justify-center">
      <div className="flex flex-wrap items-center gap-2 mb-space-sm">
      <span className="px-3 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold font-semibold">
                    Driveway Callout
                  </span>
      <span className="px-3 py-1 rounded-full bg-primary text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">
                    Mercedes-Benz C-Class
                  </span>
      <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold">
                    33 Min Arrival
                  </span>
      </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold mb-space-xs">
                  Pre-Commute Flat Tyre Resolution
                </h3>
      <p className="text-[15px] leading-[24px] text-gray-400 mb-space-md">
                  Customer noticed complete pressure loss on their front-left tyre (245/40 R18) just prior to morning school drop-off on St Mary&apos;s Road. Our team dispatched an inventory van carrying matched Continental SportContact tyres. Arrived in 33 minutes, polished the oxidized rim bead, mounted the new casing, balanced to zero-vibration tolerance, and torqued nuts to factory spec. Customer departed on schedule.
                </p>
      <div className="grid grid-cols-3 gap-space-sm pt-space-xs border-t border-white/5 text-white">
      <div>
      <div className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Tyre Size</div>
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">245/40 R18</div>
      </div>
      <div>
      <div className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Arrival Time</div>
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">33 Mins</div>
      </div>
      <div>
      <div className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Status</div>
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary">Resolved</div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* FAQS (SINGLE NARROW COLUMN) */}
      <section className="w-full bg-primary-dark py-space-xl px-margin-mobile md:px-margin">
      <div className="max-w-2xl mx-auto flex flex-col">
      <div className="text-center mb-space-lg">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-gray-300">Got Questions?</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-bold mt-1">
                Prestwich Mobile Tyre FAQs
              </h2>
      </div>
      <div className="flex flex-col space-y-space-md">
      {/* Q1 */}
      <div className="p-space-lg rounded-2xl bg-primary/60 shadow-sm">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">How quickly can a mobile technician reach me in Prestwich?</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Our average emergency response time across Prestwich, Sedgley Park, and M60 J17 sits between 30 and 60 minutes, depending on active highway traffic. We will quote an honest, live ETA upon your call.
                </p>
      </div>
      {/* Q2 */}
      <div className="p-space-lg rounded-2xl bg-primary/60 shadow-sm">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Can you fit tyres on narrow residential streets without off-street parking?</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Yes. Our vans are custom-built for tight residential streets common in Prestwich. As long as our vehicle can safely stop adjacent to or near your car with hazard beacons engaged, we can conduct complete replacements.
                </p>
      </div>
      {/* Q3 */}
      <div className="p-space-lg rounded-2xl bg-primary/60 shadow-sm">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">What if I do not know my exact tyre size?</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Simply provide your vehicle registration when phoning 07955 266 077. Our DVLA integration checks factory wheels instantly. If aftermarket wheels are installed, we will guide you on reading the embossed sidewall code.
                </p>
      </div>
      {/* Q4 */}
      <div className="p-space-lg rounded-2xl bg-primary/60 shadow-sm">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Can you fix a puncture instead of forcing a replacement?</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Always. If the puncture is localized in the main central tread and there has been zero sidewall chafing or internal cord degradation, we will repair it in full accordance with British Standard BS AU 159.
                </p>
      </div>
      {/* Q5 */}
      <div className="p-space-lg rounded-2xl bg-primary/60 shadow-sm">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Are you available during bank holidays and overnight?</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Yes, our mobile tyre fitting units operate 24 hours a day, 7 days a week, 365 days a year without downtime across Prestwich and Greater Manchester.
                </p>
      </div>
      </div>
      </div>
      </section>
      {/* RELATED SERVICE LOCATIONS */}
      <section className="w-full bg-primary-dark py-space-lg px-margin-mobile md:px-margin">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-space-md">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-gray-400">
              Nearby Coverage Locations:
            </span>
      <div className="flex flex-wrap items-center gap-space-sm">
      <a className="px-5 py-2.5 rounded-full bg-primary/60 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold hover:bg-secondary hover:text-primary transition-colors shadow-sm" href="#bury">
                Bury
              </a>
      <a className="px-5 py-2.5 rounded-full bg-primary/60 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold hover:bg-secondary hover:text-primary transition-colors shadow-sm" href="#whitefield">
                Whitefield
              </a>
      <a className="px-5 py-2.5 rounded-full bg-primary/60 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold hover:bg-secondary hover:text-primary transition-colors shadow-sm" href="#salford">
                Salford
              </a>
      <a className="px-5 py-2.5 rounded-full bg-primary/60 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold hover:bg-secondary hover:text-primary transition-colors shadow-sm" href="#cheetham-hill">
                Cheetham Hill
              </a>
      <a className="px-5 py-2.5 rounded-full bg-primary/60 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold hover:bg-secondary hover:text-primary transition-colors shadow-sm" href="#middleton">
                Middleton
              </a>
      </div>
      </div>
      </section>
      {/* FINAL MINIMAL CTA */}
      <section className="w-full bg-primary-dark py-space-xl px-margin-mobile md:px-margin text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-bold mb-space-md">
              Need Urgent Tyre Fitting in Prestwich?
            </h2>
      <p className="text-[18px] leading-[28px] text-gray-400 mb-space-lg">
              Vans stationed in Prestwich and on stand-by near M60 J17 right now. Don&apos;t risk wheel rim damage.
            </p>
      <a className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold hover:brightness-105 active:scale-95 transition-all shadow-2xl font-black" href="tel:07955266077">
      <PhoneCall className="text-primary h-5 w-5" />
              Call 07955 266 077 Now — 24/7
            </a>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 mt-space-md">
              Zero hidden fees • Rapid dispatch • All major tyre brands carried
            </span>
      </div>
      </section>
    </main>
  );
}
