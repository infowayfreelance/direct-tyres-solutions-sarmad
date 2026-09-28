import Image from "next/image";
import { AlertTriangle, ChevronDown, Clock, Headphones, HelpCircle, KeyRound, MessageCircle, Navigation, PhoneCall, Route, ShieldCheck, Wrench } from "lucide-react";

export default function AltrinchamPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* SECTION 1: HERO (Dark Navy #0b1e3d) */}
      <section className="w-full bg-primary py-16 lg:py-24 px-6 md:px-12 lg:px-16 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      {/* Left Column (Text & Actions) */}
      <div className="lg:col-span-6 flex flex-col items-start space-y-6">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent">
      <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-white">Emergency Breakdown &amp; Driveway Service</span>
      </div>
      <h1 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold lg:text-[56px] lg:leading-[64px] lg:tracking-[-0.02em] lg:font-black text-white leading-[1.08]">
                24/7 Mobile Tyre Fitting in Altrincham
              </h1>
      <p className="text-[18px] leading-[28px] text-gray-400 max-w-xl">
                Rapid mobile tyre replacement across Altrincham, Hale, Bowdon, and Timperley. Purpose-built on-site service protecting performance alloys and resolving high-speed blowouts along the M56 and A56 without tow truck recovery.
              </p>
      {/* CTA Action Group */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
      <a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary text-primary-dark font-bold text-base hover:bg-secondary-hover transition-all transform active:scale-95 shadow-lg shadow-[#ffd700]/10" href="tel:08009992470">
      <PhoneCall className="h-[20px] w-[20px]" />
      <span>Call 0800 999 2470</span>
      </a>
      <a className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-white/5 border border-white/20 text-white font-semibold text-base hover:bg-white/10 transition-all" href="https://wa.me/448009992470" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="h-[20px] w-[20px] text-green-500" />
      <span>WhatsApp Dispatch</span>
      </a>
      </div>
      {/* Meta Assurance Strip */}
      <div className="pt-4 flex flex-wrap items-center gap-6 text-gray-400 text-[13px] leading-[18px]">
      <div className="flex items-center gap-2">
      <ShieldCheck className="text-secondary h-[18px] w-[18px]" />
      <span>OEM Specifications Guaranteed</span>
      </div>
      <div className="flex items-center gap-2">
      <Clock className="text-secondary h-[18px] w-[18px]" />
      <span>Average 28-min ETA</span>
      </div>
      <div className="flex items-center gap-2">
      <KeyRound className="text-secondary h-[18px] w-[18px]" />
      <span>Locking Key Specialists</span>
      </div>
      </div>
      </div>
      {/* Right Column (Media Hero Card) */}
      <div className="lg:col-span-6 relative">
      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-primary-dark/80">
      <Image src="/hero-section-images-936x527.webp" alt="Direct Tyre Solutions technician operating on an executive alloy wheel in Altrincham" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-[420px] sm:h-[480px] object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-80"></div>
      {/* Floating Status Pill */}
      <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-primary-dark/90 backdrop-blur-md border border-white/15 flex items-center justify-between">
      <div className="flex items-center space-x-3">
      <div className="w-3 h-3 rounded-full bg-accent ring-4 ring-accent/20"></div>
      <div>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Altrincham &amp; Hale Rapid Patrol</p>
      <p className="text-[13px] leading-[18px] text-gray-400">M56 J6-J8 Corridor • Live Unit Available</p>
      </div>
      </div>
      <span className="px-3 py-1 rounded-full bg-secondary/20 border border-secondary/40 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider">
                    25-35 Min ETA
                  </span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 2: LOCAL INTRO (Darker Navy #061226) */}
      <section className="w-full bg-primary-dark py-20 px-6 md:px-12 lg:px-16 border-t border-b border-white/5">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      <div className="lg:col-span-4">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary block mb-2">Prestige Wheel Care</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white tracking-tight">
                Precision Driveway Fitting. Zero Flatbed Hassle.
              </h2>
      </div>
      <div className="lg:col-span-8 space-y-5 text-gray-400 text-[15px] leading-[24px]">
      <p>
                Commuter travel along the A56 Dunham Road, Manchester Road, and the high-volume M56 Junctions 6 and 7 demands instant mechanical intervention when punctures occur. Waiting for traditional flatbed recovery frequently causes costly wheel rim damage on low-profile alloy wheels and hours stranded on the hard shoulder.
              </p>
      <p>
                Direct Tyre Solutions operates fully equipped mobile tyre fitting workshops stationed continuously across Hale, Bowdon, and Timperley. Our technicians utilize polymer-coated bead breakers and laser-calibrated computerized dynamic balancers directly on your private driveway or roadside, fitting OEM-grade rubber for Porsche, BMW, Mercedes, Range Rover, and Tesla without you leaving your premises.
              </p>
      <div className="pt-2 flex flex-wrap gap-8 text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">
      <div><span className="text-secondary text-[20px] leading-[26px] font-bold block font-heading">100%</span> Rim Protection Guarantee</div>
      <div><span className="text-secondary text-[20px] leading-[26px] font-bold block font-heading">24/7</span> Bank Holidays &amp; Weekends</div>
      <div><span className="text-secondary text-[20px] leading-[26px] font-bold block font-heading">All Sizes</span> Run-Flat &amp; High-Load EV</div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 3: SERVICES (Dark Navy #0b1e3d) */}
      <section className="w-full bg-primary py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1280px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary block mb-2">Our Capabilities</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white tracking-tight">Specialist Mobile Tyre Services in Altrincham</h2>
      </div>
      <p className="text-gray-400 text-[13px] leading-[18px] mt-3 md:mt-0 max-w-sm">
                Commercial-grade machinery housed inside Mercedes-Benz custom sprinters, delivered directly to your location.
              </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Card 1 */}
      <div className="rounded-2xl border border-white/10 bg-primary-dark/80 overflow-hidden flex flex-col hover:border-white/20 transition-all">
      <div className="h-48 overflow-hidden relative">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Emergency roadside mobile tyre service M56 Altrincham" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-80"></div>
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
      <div>
      <div className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center text-secondary mb-4">
      <AlertTriangle className="h-[22px] w-[22px]" />
      </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Emergency Roadside Replacement</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                      Fast emergency response on the M56, A56, or local trunk routes. High-visibility lighting and safety protocols to secure your vehicle.
                    </p>
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-accent uppercase tracking-wider font-semibold">Priority 24/7 Dispatch →</span>
      </div>
      </div>
      {/* Card 2 */}
      <div className="rounded-2xl border border-white/10 bg-primary-dark/80 overflow-hidden flex flex-col hover:border-white/20 transition-all">
      <div className="h-48 overflow-hidden relative">
      <Image src="/gallery-roadside-fitting.webp" alt="BS AU 159 Puncture Repair inspection Altrincham" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-80"></div>
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
      <div>
      <div className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center text-secondary mb-4">
      <Wrench className="h-[22px] w-[22px]" />
      </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">BS AU 159 Puncture Repair</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                      Thorough internal tyre inspection and vulcanised patch repair in accordance with stringent British Standards to safely restore roadworthiness.
                    </p>
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-accent uppercase tracking-wider font-semibold">Safety Certified Repair →</span>
      </div>
      </div>
      {/* Card 3 */}
      <div className="rounded-2xl border border-white/10 bg-primary-dark/80 overflow-hidden flex flex-col hover:border-white/20 transition-all">
      <div className="h-48 overflow-hidden relative">
      <Image src="/gallery-home-callout.webp" alt="Specialist locking wheel nut removal service van" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-80"></div>
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
      <div>
      <div className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center text-secondary mb-4">
      <KeyRound className="h-[22px] w-[22px]" />
      </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Locking Wheel Nut Removal</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                      Lost key or stripped threads? We deploy non-destructive reverse carbide extraction kits that preserve your prestige diamond-cut rims entirely.
                    </p>
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-accent uppercase tracking-wider font-semibold">Zero Wheel Damage →</span>
      </div>
      </div>
      {/* Card 4 */}
      <div className="rounded-2xl border border-white/10 bg-primary-dark/80 overflow-hidden flex flex-col hover:border-white/20 transition-all">
      <div className="h-48 overflow-hidden relative">
      <Image src="/gallery-evening-callout.webp" alt="Driveway alloy wheel tyre replacement Bowdon" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-80"></div>
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
      <div>
      <div className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center text-secondary mb-4">
      <Wrench className="h-[22px] w-[22px]" />
      </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Driveway &amp; Prestige Fitting</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                      Booked home and executive office appointments throughout Hale, Bowdon, and Altrincham center. Digital balance and valve replacements included.
                    </p>
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-accent uppercase tracking-wider font-semibold">Scheduled or Urgent →</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 4: ROADS & AREAS COVERED (Darker Navy #061226) */}
      <section className="w-full bg-primary-dark py-20 px-6 md:px-12 lg:px-16 border-t border-b border-white/5">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Key Arterials & Zones */}
      <div className="lg:col-span-7 flex flex-col space-y-6">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary block mb-2">Coverage Zone</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white tracking-tight">Rapid Response Corridors Across South Trafford</h2>
      <p className="text-gray-400 text-[15px] leading-[24px] mt-2">
                  Mobile workshop vans are continually deployed near principal junctions for accelerated transit to stranded motorists and quiet residential avenues alike.
                </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="p-5 rounded-2xl border border-white/10 bg-primary-dark/80">
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-center gap-2 mb-2">
      <Route className="text-secondary h-[20px] w-[20px]" />
                    Major Arterials &amp; Motorways
                  </h4>
      <ul className="text-[13px] leading-[18px] text-gray-400 space-y-2">
      <li><strong className="text-white">M56 (Junctions 6, 7 &amp; 8):</strong> Airport bypass &amp; Bowdon interchange</li>
      <li><strong className="text-white">A56 Manchester Rd / Dunham Rd:</strong> Central Altrincham thoroughfare</li>
      <li><strong className="text-white">A560 Shaftesbury Ave:</strong> Quick link between Timperley and M56</li>
      <li><strong className="text-white">B5160 Hale Road:</strong> Direct corridor serving Hale and Bowdon</li>
      </ul>
      </div>
      <div className="p-5 rounded-2xl border border-white/10 bg-primary-dark/80">
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-center gap-2 mb-2">
      <Navigation className="text-accent h-[20px] w-[20px]" />
                    Immediate Service Areas
                  </h4>
      <ul className="text-[13px] leading-[18px] text-gray-400 space-y-2">
      <li><strong className="text-white">Altrincham Town Centre:</strong> WA14 / WA15 postcode coverage</li>
      <li><strong className="text-white">Hale &amp; Hale Barns:</strong> Fast residential turnaround on driveways</li>
      <li><strong className="text-white">Bowdon &amp; Dunham Massey:</strong> Executive estates &amp; country roads</li>
      <li><strong className="text-white">Timperley, Sale &amp; Lymm:</strong> Cross-boundary 30-min response</li>
      </ul>
      </div>
      </div>
      <div className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 text-gray-400 text-[13px] leading-[18px]">
      <HelpCircle className="text-secondary h-[24px] w-[24px]" />
      <span>Don&apos;t see your specific road? If you are within 12 miles of Altrincham, our mobile units will dispatch directly. <strong className="text-white">Call 0800 999 2470</strong> for live tracking.</span>
      </div>
      </div>
      {/* Workshop Image */}
      <div className="lg:col-span-5">
      <div className="rounded-2xl overflow-hidden border border-white/10 relative shadow-xl">
      <Image src="/gallery-evening-home-visit.webp" alt="Direct Tyre Solutions mobile van parked ready for dispatch in Altrincham" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-[400px] object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-60"></div>
      <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-primary-dark/85 backdrop-blur-sm border border-white/10 text-center">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-white uppercase tracking-wider">Independent Fleet Unit • Live Satellite Tracked</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 5: HOW IT WORKS (Dark Navy #0b1e3d) */}
      <section className="w-full bg-primary py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1280px] mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary block mb-2">Frictionless Workflow</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white tracking-tight">From Callout to Road-Ready in 5 Steps</h2>
      <p className="text-gray-400 text-[13px] leading-[18px] mt-2">
                Transparent roadside or driveway fitting designed for minimal disruption to your day.
              </p>
      </div>
      {/* Step Row */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
      {/* Step 1 */}
      <div className="relative p-6 rounded-2xl border border-white/10 bg-primary-dark/70 flex flex-col justify-between">
      <div>
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary block mb-3 font-extrabold opacity-90">01</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Call Dispatch</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Speak to an Altrincham technician directly on 0800 999 2470 with your location.</p>
      </div>
      <div className="mt-4 pt-4 border-t border-white/5">
      <span className="text-xs text-white/50 uppercase tracking-wider">Instant Confirmation</span>
      </div>
      </div>
      {/* Step 2 */}
      <div className="relative p-6 rounded-2xl border border-white/10 bg-primary-dark/70 flex flex-col justify-between">
      <div>
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary block mb-3 font-extrabold opacity-90">02</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Tyre Match</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">We cross-reference tyre sizes (e.g. 265/45 R20) with premium or budget brand availability.</p>
      </div>
      <div className="mt-4 pt-4 border-t border-white/5">
      <span className="text-xs text-white/50 uppercase tracking-wider">OEM Specifications</span>
      </div>
      </div>
      {/* Step 3 */}
      <div className="relative p-6 rounded-2xl border border-white/10 bg-primary-dark/70 flex flex-col justify-between">
      <div>
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary block mb-3 font-extrabold opacity-90">03</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Van Dispatched</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Mobile workshop en route to your driveway, motorway refuge, or car park in 25-35 minutes.</p>
      </div>
      <div className="mt-4 pt-4 border-t border-white/5">
      <span className="text-xs text-white/50 uppercase tracking-wider">Live ETA Updates</span>
      </div>
      </div>
      {/* Step 4 */}
      <div className="relative p-6 rounded-2xl border border-white/10 bg-primary-dark/70 flex flex-col justify-between">
      <div>
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary block mb-3 font-extrabold opacity-90">04</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Precision Mount</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Touchless bead-breaking, brand-new valve replacement, and computerized digital wheel balance.</p>
      </div>
      <div className="mt-4 pt-4 border-t border-white/5">
      <span className="text-xs text-white/50 uppercase tracking-wider">Alloy Care Assured</span>
      </div>
      </div>
      {/* Step 5 */}
      <div className="relative p-6 rounded-2xl border border-white/10 bg-primary-dark/70 flex flex-col justify-between">
      <div>
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary block mb-3 font-extrabold opacity-90">05</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Contactless Pay</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Seamless payment via card, Apple Pay, or business fleet invoicing once inspected.</p>
      </div>
      <div className="mt-4 pt-4 border-t border-white/5">
      <span className="text-xs text-white/50 uppercase tracking-wider">No Hidden Callout Fees</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 6: REAL LOCAL JOB (Darker Navy #061226) */}
      <section className="w-full bg-primary-dark py-16 px-6 md:px-12 lg:px-16 border-t border-b border-white/5">
      <div className="max-w-[1280px] mx-auto">
      <div className="p-8 rounded-2xl border border-white/10 bg-primary-dark/90 flex flex-col lg:flex-row items-center gap-8">
      {/* Thumbnail */}
      <div className="relative w-full lg:w-1/3 h-56 rounded-xl overflow-hidden border border-white/10 flex-shrink-0">
      <Image src="/gallery-precision-care.webp" alt="Real verified job mobile tyre fitment Bowdon Altrincham" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      {/* Details */}
      <div className="w-full lg:w-2/3 flex flex-col space-y-4">
      <div className="flex flex-wrap items-center gap-2">
      <span className="px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">
                    Verified Emergency Callout
                  </span>
      <span className="text-gray-400 text-[13px] leading-[18px]">Bowdon, Altrincham (WA14)</span>
      </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white tracking-tight">
                  Porsche Macan — Sidewall Pinch on Kerbed Stone
                </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-2 border-t border-b border-white/10 text-left">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase block">Response Time</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">24 Mins</span>
      </div>
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase block">Tyre Fitted</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary">Michelin Pilot Sport 4</span>
      </div>
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase block">Dimensions</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">265/45 R20</span>
      </div>
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase block">Job Duration</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">31 Mins On-Site</span>
      </div>
      </div>
      <blockquote className="italic text-gray-400 text-[15px] leading-[24px] border-l-2 border-secondary pl-4">
                  “Saved our evening commute to Manchester with zero delay or alloy wheel damage.”
                  <span className="block not-italic text-sm text-white mt-1 font-semibold">— Dr. M. Harrison, Bowdon Resident</span>
      </blockquote>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 7: FAQ (Dark Navy #0b1e3d) */}
      <section className="w-full bg-primary py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-[960px] mx-auto">
      <div className="text-center mb-12">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary block mb-2">Got Questions?</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white tracking-tight">Altrincham Tyre Fitting FAQs</h2>
      </div>
      <div className="space-y-4">
      {/* FAQ 1 */}
      <details className="group p-6 rounded-2xl border border-white/10 bg-primary-dark/80 transition-all [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer">
      <summary className="flex items-center justify-between font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">
      <span>What are typical response times across Altrincham, Bowdon, and Hale?</span>
      <ChevronDown className="text-secondary transition-transform group-open:rotate-180 h-5 w-5" />
      </summary>
      <div className="mt-4 pt-4 border-t border-white/5 text-gray-400 text-[15px] leading-[24px]">
                  Our local mobile workshop vans are continuously stationed near Dunham Road and the M56 Junction 7 intersection. For emergency breakdowns in central Altrincham, Hale, Bowdon, and Timperley, typical technician arrival times average between 25 and 35 minutes depending on traffic.
                </div>
      </details>
      {/* FAQ 2 */}
      <details className="group p-6 rounded-2xl border border-white/10 bg-primary-dark/80 transition-all [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer">
      <summary className="flex items-center justify-between font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">
      <span>Can your equipment safely handle low-profile prestige wheels and diamond-cut alloys?</span>
      <ChevronDown className="text-secondary transition-transform group-open:rotate-180 h-5 w-5" />
      </summary>
      <div className="mt-4 pt-4 border-t border-white/5 text-gray-400 text-[15px] leading-[24px]">
                  Yes. Our vans carry leverless, polymer-headed Italian mounting systems specifically engineered for ultra-low profile run-flats and high-value diamond-cut rims. We do not use metal bars that can score or mark the face of your wheel rim.
                </div>
      </details>
      {/* FAQ 3 */}
      <details className="group p-6 rounded-2xl border border-white/10 bg-primary-dark/80 transition-all [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer">
      <summary className="flex items-center justify-between font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">
      <span>What happens if my locking wheel nut key is broken or missing?</span>
      <ChevronDown className="text-secondary transition-transform group-open:rotate-180 h-5 w-5" />
      </summary>
      <div className="mt-4 pt-4 border-t border-white/5 text-gray-400 text-[15px] leading-[24px]">
                  Our technicians carry specialist locking wheel nut removal toolkits. We use inverse-threaded hardened shrouds to securely extract overtightened or rounded locking nuts without drilling or risking cosmetic impact to the alloy housing.
                </div>
      </details>
      {/* FAQ 4 */}
      <details className="group p-6 rounded-2xl border border-white/10 bg-primary-dark/80 transition-all [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer">
      <summary className="flex items-center justify-between font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">
      <span>Do you operate out-of-hours along the M56 motorway?</span>
      <ChevronDown className="text-secondary transition-transform group-open:rotate-180 h-5 w-5" />
      </summary>
      <div className="mt-4 pt-4 border-t border-white/5 text-gray-400 text-[15px] leading-[24px]">
                  Direct Tyre Solutions operates 24 hours a day, 365 days a year. If you suffer a blowout on the M56 hard shoulder or slip road late at night, our emergency roadside team will dispatch immediately with proper Chapter 8 highway markings and safety equipment.
                </div>
      </details>
      </div>
      </div>
      </section>
      {/* SECTION 8: RELATED LOCATIONS (Darker Navy #061226) */}
      <section className="w-full bg-primary-dark py-14 px-6 md:px-12 lg:px-16 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-gray-400 block">Greater Manchester &amp; Cheshire North Coverage</span>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Other Immediate Response Locations Nearby</h4>
      </div>
      <div className="flex flex-wrap items-center gap-3">
      <a className="px-4 py-2 rounded-full border border-white/15 bg-white/5 text-gray-400 hover:text-white hover:border-secondary transition-all text-[14px] leading-[18px] tracking-[0.02em] font-semibold" href="#">Sale</a>
      <a className="px-4 py-2 rounded-full border border-white/15 bg-white/5 text-gray-400 hover:text-white hover:border-secondary transition-all text-[14px] leading-[18px] tracking-[0.02em] font-semibold" href="#">Hale</a>
      <a className="px-4 py-2 rounded-full border border-white/15 bg-white/5 text-gray-400 hover:text-white hover:border-secondary transition-all text-[14px] leading-[18px] tracking-[0.02em] font-semibold" href="#">Bowdon</a>
      <a className="px-4 py-2 rounded-full border border-white/15 bg-white/5 text-gray-400 hover:text-white hover:border-secondary transition-all text-[14px] leading-[18px] tracking-[0.02em] font-semibold" href="#">Timperley</a>
      <a className="px-4 py-2 rounded-full border border-white/15 bg-white/5 text-gray-400 hover:text-white hover:border-secondary transition-all text-[14px] leading-[18px] tracking-[0.02em] font-semibold" href="#">Lymm</a>
      <a className="px-4 py-2 rounded-full border border-accent/40 bg-accent/10 text-white hover:bg-accent/20 transition-all text-[14px] leading-[18px] tracking-[0.02em] font-semibold" href="#">Mobile Tyre Fitting UK</a>
      </div>
      </div>
      </section>
      {/* SECTION 9: FINAL CTA (Dark Navy #0b1e3d) */}
      <section className="w-full bg-primary py-20 px-6 md:px-12 lg:px-16 text-center border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[760px] mx-auto flex flex-col items-center space-y-6 relative z-10">
      <div className="w-12 h-12 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center text-secondary">
      <Headphones className="h-[26px] w-[26px]" />
      </div>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">
              Stranded in Altrincham or Hale?
            </h2>
      <p className="text-[18px] leading-[28px] text-gray-400 max-w-lg">
              Our local mobile fitting van is on standby right now. Direct dispatch with full tyre stocks for all passenger cars, 4x4s, and commercial vans.
            </p>
      <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
      <a className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-secondary text-primary-dark font-bold text-lg hover:bg-secondary-hover transition-all transform active:scale-95 shadow-xl shadow-[#ffd700]/15" href="tel:08009992470">
      <PhoneCall className="h-[24px] w-[24px]" />
      <span>Call 0800 999 2470</span>
      </a>
      </div>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-widest pt-2">
              24 Hours • 7 Days A Week • Fast Response Anywhere in Altrincham
            </p>
      </div>
      </section>
    </main>
  );
}
