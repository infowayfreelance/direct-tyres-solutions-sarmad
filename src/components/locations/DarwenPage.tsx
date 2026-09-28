import Image from "next/image";
import { Car, CheckCircle2, CreditCard, Flame, MapPin, MessageCircle, Mountain, Navigation, PhoneCall, Route, ShieldCheck, Snowflake, Unlock, Wrench, Zap } from "lucide-react";

export default function DarwenPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* SECTION 1: ASYMMETRIC PHOTO GRID HERO */}
      <section className="w-full bg-primary-dark px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
      {/* Plain Navy Action Panel (1/3 desktop) */}
      <div className="lg:col-span-4 bg-primary/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
      <div className="space-y-4">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">
      <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  Lancashire Emergency Rapid Response
                </div>
      <h1 className="text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-heading">
                  24/7 Mobile Tyre Fitting in Darwen
                </h1>
      <p className="text-[15px] leading-[24px] text-white">
                  Rapid mobile tyre replacement across Darwen&apos;s steep valley streets, the A666 corridor, and M65 Junction 4 approaches. Direct to your home driveway or roadside within 25–45 minutes.
                </p>
      </div>
      <div className="pt-8 space-y-3">
      <a className="w-full py-4 px-6 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95 text-center" href="tel:08009992470">
      <PhoneCall className="h-[18px] w-[18px]" />
                  Call 0800 999 2470
                </a>
      <a className="w-full py-3.5 px-6 rounded-full bg-primary text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold flex items-center justify-center gap-2 transition-colors hover:bg-primary-light text-center" href="https://wa.me/448009992470">
      <MessageCircle className="h-[18px] w-[18px] text-gray-400" />
                  WhatsApp Dispatch
                </a>
      <div className="flex items-center justify-between pt-2 px-1 text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">
      <span>Avg ETA: 28 Mins</span>
      <span>•</span>
      <span>Jacks rated for 30° inclines</span>
      <span>•</span>
      <span>Zero Callout Surcharge</span>
      </div>
      </div>
      </div>
      {/* Hero Visual (2/3 desktop) */}
      <div className="lg:col-span-8 relative min-h-[380px] lg:min-h-[520px] rounded-2xl overflow-hidden shadow-2xl bg-primary/60">
      <Image src="/hero-section-images-936x527.webp" alt="Commercial emergency mobile tyre fitting service van stopped at dusk on a steep valley road in Darwen Lancashire with illuminated LED beacons and specialized tyre machinery visible inside rear doors" fill sizes="(max-width: 1024px) 100vw, 50vw" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/20 to-transparent"></div>
      <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-primary/60 backdrop-blur-md">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white">
      <Navigation className="h-5 w-5" />
      </div>
      <div>
      <p className="text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-heading">Active Mobile Vans in BB3</p>
      <p className="text-[13px] leading-[18px] text-gray-400">Patrolling Sunnyhurst, Bolton Rd &amp; Roman Road</p>
      </div>
      </div>
      <div className="px-3 py-1 rounded-full bg-primary text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold">
                  Live Status: Immediate Dispatch
                </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 2: LOCAL INTRO & PENNINE CHALLENGES */}
      <section className="w-full bg-primary-dark px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-7 space-y-4">
      <div className="inline-flex items-center gap-1.5 text-gray-400 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <Mountain className="h-[14px] w-[14px]" />
                Pennine Geography Engineering
              </div>
      <h2 className="text-[30px] leading-[38px] font-bold text-white font-heading">
                Mastering Darwen’s Steep Terraces &amp; High Moorland Approaches
              </h2>
      <p className="text-[15px] leading-[24px] text-white">
                Navigating Darwen&apos;s distinctive Pennine geography requires tailored equipment. Steep cobblestone terraced streets off Duckworth Street and Bolton Road (A666) create hazardous scenarios where traditional flatbed recovery tow trucks cannot safely winch cars without rim gouging or scraping bodywork.
              </p>
      <p className="text-[15px] leading-[24px] text-gray-400">
                Our purpose-built mobile fitting Mercedes Sprinter vans carry high-capacity low-clearance twin air-hydraulic jacks, mechanical wheel chocks rated for 30-degree valley gradients, and onboard digital balancing rigs. We resolve puncture failures right where your car is parked—without unnecessary tow-truck damage.
              </p>
      </div>
      <div className="lg:col-span-5 grid grid-cols-2 gap-4">
      <div className="bg-primary/60 p-5 rounded-2xl shadow-md">
      <Flame className="text-secondary h-[30px] w-[30px] mb-2" />
      <p className="text-[20px] leading-[26px] font-bold text-white font-heading">28 Min</p>
      <p className="text-[13px] leading-[18px] text-gray-400">Darwen average arrival speed</p>
      </div>
      <div className="bg-primary/60 p-5 rounded-2xl shadow-md">
      <ShieldCheck className="text-accent h-[30px] w-[30px] mb-2" />
      <p className="text-[20px] leading-[26px] font-bold text-white font-heading">No Rim Gouge</p>
      <p className="text-[13px] leading-[18px] text-gray-400">Incline wheel-lock safeguards</p>
      </div>
      <div className="bg-primary/60 p-5 rounded-2xl shadow-md">
      <Car className="text-gray-400 h-[30px] w-[30px] mb-2" />
      <p className="text-[20px] leading-[26px] font-bold text-white font-heading">1,800+</p>
      <p className="text-[13px] leading-[18px] text-gray-400">Tyres stocked in regional hub</p>
      </div>
      <div className="bg-primary/60 p-5 rounded-2xl shadow-md">
      <ShieldCheck className="text-secondary h-[30px] w-[30px] mb-2" />
      <p className="text-[20px] leading-[26px] font-bold text-white font-heading">100%</p>
      <p className="text-[13px] leading-[18px] text-gray-400">Calibrated torque on site</p>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 3: SERVICES (2x2 Grid with Solid Navy Bottom Caption Strip) */}
      <section className="w-full bg-primary-dark px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto space-y-8">
      <div className="max-w-2xl space-y-2">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary uppercase tracking-wider">Mission-Ready Services</span>
      <h2 className="text-[30px] leading-[38px] font-bold text-white font-heading">Comprehensive Mobile Solutions Across Darwen</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Service Card 1 */}
      <div className="flex flex-col rounded-2xl overflow-hidden bg-primary/60 shadow-lg group">
      <div className="relative h-64 overflow-hidden">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Heavy duty vehicle commercial puncture repair mobile technician working on a wet tarmac emergency roadside scene with amber beacon lights" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="bg-primary-dark p-5 flex items-center justify-between">
      <div className="space-y-1">
      <h3 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-heading">Emergency Roadside Replacement</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">A666, M65 Junction 4, and moorland road blowouts resolved fast.</p>
      </div>
      <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center shrink-0">
      <Zap className="h-[14px] w-[14px]" />
      </div>
      </div>
      </div>
      {/* Service Card 2 (using required image IMAGE_83) */}
      <div className="flex flex-col rounded-2xl overflow-hidden bg-primary/60 shadow-lg group">
      <div className="relative h-64 overflow-hidden">
      <Image src="/gallery-roadside-fitting.webp" alt="Brand new car tyre tread close up with mobile technician inspection gauge" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="bg-primary-dark p-5 flex items-center justify-between">
      <div className="space-y-1">
      <h3 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-heading">Driveway Fitting &amp; Pre-Booked Replacements</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Full seasonal switches, premium run-flats, and winter compound sets.</p>
      </div>
      <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center shrink-0">
      <Wrench className="h-[14px] w-[14px]" />
      </div>
      </div>
      </div>
      {/* Service Card 3 */}
      <div className="flex flex-col rounded-2xl overflow-hidden bg-primary/60 shadow-lg group">
      <div className="relative h-64 overflow-hidden">
      <Image src="/gallery-home-callout.webp" alt="Skilled automotive tyre specialist using pneumatic impact wrench to secure alloy wheel lug nuts on driveway in residential neighborhood" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="bg-primary-dark p-5 flex items-center justify-between">
      <div className="space-y-1">
      <h3 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-heading">Locking Wheel Nut Removal</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Specialist inverse spiral extractors for rounded, sheared, or missing keys.</p>
      </div>
      <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center shrink-0">
      <Unlock className="h-[14px] w-[14px]" />
      </div>
      </div>
      </div>
      {/* Service Card 4 */}
      <div className="flex flex-col rounded-2xl overflow-hidden bg-primary/60 shadow-lg group">
      <div className="relative h-64 overflow-hidden">
      <Image src="/gallery-evening-callout.webp" alt="Digital mobile wheel balancing and valve replacement setup inside custom equipped emergency tyre response vehicle" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="bg-primary-dark p-5 flex items-center justify-between">
      <div className="space-y-1">
      <h3 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-heading">Puncture Repairs &amp; Electronic TPMS Reset</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">BS AU 159 certified vulcanized puncture repairs and sensor coding.</p>
      </div>
      <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center shrink-0">
      <Wrench className="h-[14px] w-[14px]" />
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 4: HOW IT WORKS (Horizontal Flat Numerals 01 to 05) */}
      <section className="w-full bg-primary-dark px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-gray-400 uppercase tracking-wider">Five-Step Emergency Workflow</span>
      <h2 className="text-[30px] leading-[38px] font-bold text-white font-heading">From Strand to Back On The Road</h2>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400 max-w-sm">No membership club cards or roadside queues required. Direct local operator dispatch.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6">
      <div className="bg-primary/60 p-6 rounded-2xl flex flex-col justify-between min-h-[160px] shadow-sm">
      <span className="text-[56px] leading-[64px] tracking-[-0.02em] font-black text-white font-heading leading-none">01</span>
      <div>
      <h4 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-heading">Instant Call</h4>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">Direct line to Darwen dispatch desk.</p>
      </div>
      </div>
      <div className="bg-primary/60 p-6 rounded-2xl flex flex-col justify-between min-h-[160px] shadow-sm">
      <span className="text-[56px] leading-[64px] tracking-[-0.02em] font-black text-white font-heading leading-none">02</span>
      <div>
      <h4 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-heading">Vehicle Match</h4>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">Exact tyre size &amp; speed rating pulled from VRM.</p>
      </div>
      </div>
      <div className="bg-primary/60 p-6 rounded-2xl flex flex-col justify-between min-h-[160px] shadow-sm">
      <span className="text-[56px] leading-[64px] tracking-[-0.02em] font-black text-white font-heading leading-none">03</span>
      <div>
      <h4 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-heading">Van En Route</h4>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">Live tracking via SMS link with 25-45m ETA.</p>
      </div>
      </div>
      <div className="bg-primary/60 p-6 rounded-2xl flex flex-col justify-between min-h-[160px] shadow-sm">
      <span className="text-[56px] leading-[64px] tracking-[-0.02em] font-black text-white font-heading leading-none">04</span>
      <div>
      <h4 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-heading">Precision Fit</h4>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">Balanced, new valve installed &amp; hand-torqued.</p>
      </div>
      </div>
      <div className="bg-primary/60 p-6 rounded-2xl flex flex-col justify-between min-h-[160px] shadow-sm col-span-2 md:col-span-1">
      <span className="text-[56px] leading-[64px] tracking-[-0.02em] font-black text-secondary font-heading leading-none">05</span>
      <div>
      <h4 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-heading">Card Payment</h4>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">Contactless chip &amp; PIN machine on site.</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 5: REAL JOB CASE STUDY (Wide Card Layout) */}
      <section className="w-full bg-primary-dark px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
      <div className="bg-primary/60 rounded-2xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
      <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full">
      <Image src="/gallery-evening-home-visit.webp" alt="Professional tyre technician kneeling next to silver Ford Kuga on a steep residential road in Darwen using pneumatic torque tools on alloy wheel" fill sizes="(max-width: 1024px) 100vw, 50vw" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
      <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
      <span className="px-3 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">
                      Verified Callout #DW-3341
                    </span>
      <span className="px-3 py-1 rounded-full bg-primary text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">
                      Bolton Road, Darwen (A666)
                    </span>
      </div>
      <h3 className="text-[30px] leading-[38px] font-bold text-white font-heading">
                    Steep Incline Sidewall Blowout Replacement
                  </h3>
      <p className="text-[15px] leading-[24px] text-white">
                    Driver suffered severe kerb blowout on an 18-degree gradient section of Bolton Road during afternoon peak hours. With standard recovery declaring a 3-hour delay, our nearest BB3 mobile unit was routed immediately.
                  </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
      <div className="bg-primary-dark p-3.5 rounded-xl">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase block">Vehicle</span>
      <span className="text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-heading">Ford Kuga AWD</span>
      </div>
      <div className="bg-primary-dark p-3.5 rounded-xl">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase block">Tyre Fitted</span>
      <span className="text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-heading">235/55 R18 104V</span>
      </div>
      <div className="bg-primary-dark p-3.5 rounded-xl col-span-2 sm:col-span-1">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase block">Time on Scene</span>
      <span className="text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary font-heading">28 Mins</span>
      </div>
      </div>
      </div>
      <div className="p-4 rounded-xl bg-primary-dark flex items-center justify-between">
      <div className="flex items-center gap-3">
      <CheckCircle2 className="text-secondary h-5 w-5" />
      <span className="text-[13px] leading-[18px] text-white">Calibrated to 135 Nm torque specification. Customer safely back on route.</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 6: ROADS & NEARBY AREAS COVERAGE */}
      <section className="w-full bg-primary-dark px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto space-y-8">
      <div>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary uppercase tracking-wider">Fast Response Territory</span>
      <h2 className="text-[30px] leading-[38px] font-bold text-white font-heading">Key Corridors &amp; Lancashire Coverage</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-primary/60 p-6 sm:p-8 rounded-2xl shadow-md space-y-4">
      <div className="flex items-center gap-2 text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-heading">
      <Route className="text-gray-400 h-5 w-5" />
                  Primary Arterial Routes Served
                </div>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Our vans maintain designated staging spots for instant entry onto Darwen’s main travel links:
                </p>
      <ul className="space-y-3 pt-2">
      <li className="flex items-start gap-3 bg-primary-dark p-3.5 rounded-xl">
      <span className="px-2 py-0.5 rounded bg-secondary text-primary font-bold text-[11px] leading-[14px] tracking-[0.06em] font-bold">M65</span>
      <div>
      <strong className="text-white font-heading block">M65 Junction 4 (Earcroft Interchange)</strong>
      <span className="text-[13px] leading-[18px] text-gray-400">Rapid hard shoulder and slipway intervention.</span>
      </div>
      </li>
      <li className="flex items-start gap-3 bg-primary-dark p-3.5 rounded-xl">
      <span className="px-2 py-0.5 rounded bg-accent text-white font-bold text-[11px] leading-[14px] tracking-[0.06em] font-bold">A666</span>
      <div>
      <strong className="text-white font-heading block">A666 Duckworth Street &amp; Bolton Road Corridor</strong>
      <span className="text-[13px] leading-[18px] text-gray-400">Connecting Darwen centre southward towards Cadshaw and Entwistle.</span>
      </div>
      </li>
      <li className="flex items-start gap-3 bg-primary-dark p-3.5 rounded-xl">
      <span className="px-2 py-0.5 rounded bg-primary text-white font-bold text-[11px] leading-[14px] tracking-[0.06em] font-bold">A675</span>
      <div>
      <strong className="text-white font-heading block">A675 Belmont Road Corridor</strong>
      <span className="text-[13px] leading-[18px] text-gray-400">High moorland connectivity between Blackburn, Belmont, and Bolton.</span>
      </div>
      </li>
      </ul>
      </div>
      <div className="bg-primary/60 p-6 sm:p-8 rounded-2xl shadow-md space-y-4">
      <div className="flex items-center gap-2 text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-heading">
      <MapPin className="text-secondary h-5 w-5" />
                  Nearby Towns &amp; Surrounding Parishes
                </div>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Direct dispatch spans BB3, BB2, BL7, and adjacent Lancashire communities:
                </p>
      <div className="grid grid-cols-2 gap-3 pt-2">
      <div className="p-3 bg-primary-dark rounded-xl">
      <div className="font-heading text-white">Blackburn</div>
      <span className="text-[13px] leading-[18px] text-gray-400">10–20 min dispatch</span>
      </div>
      <div className="p-3 bg-primary-dark rounded-xl">
      <div className="font-heading text-white">Bolton</div>
      <span className="text-[13px] leading-[18px] text-gray-400">15–25 min dispatch</span>
      </div>
      <div className="p-3 bg-primary-dark rounded-xl">
      <div className="font-heading text-white">Chorley</div>
      <span className="text-[13px] leading-[18px] text-gray-400">15–30 min dispatch</span>
      </div>
      <div className="p-3 bg-primary-dark rounded-xl">
      <div className="font-heading text-white">Tockholes</div>
      <span className="text-[13px] leading-[18px] text-gray-400">10–18 min dispatch</span>
      </div>
      <div className="p-3 bg-primary-dark rounded-xl">
      <div className="font-heading text-white">Ewood</div>
      <span className="text-[13px] leading-[18px] text-gray-400">8–15 min dispatch</span>
      </div>
      <div className="p-3 bg-primary-dark rounded-xl">
      <div className="font-heading text-white">Sunnyhurst</div>
      <span className="text-[13px] leading-[18px] text-gray-400">5–12 min dispatch</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 7: FAQ (Two-Column Grid) */}
      <section className="w-full bg-primary-dark px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-gray-400 uppercase tracking-wider">Helpful Answers</span>
      <h2 className="text-[30px] leading-[38px] font-bold text-white font-heading">Frequently Asked Questions in Darwen</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-primary/60 p-6 rounded-2xl space-y-2 shadow-md">
      <h3 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-heading flex items-center gap-2">
      <Mountain className="text-secondary h-5 w-5" />
                  Can you safely jack up my vehicle on a steep Darwen street?
                </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Yes. Our vans carry specialized aircraft-grade alloy wheel chocks and broad-base pneumatic trolley jacks specifically engineered for incline stability on valley gradients like those near Bold Venture Park and Cemetery Road.
                </p>
      </div>
      <div className="bg-primary/60 p-6 rounded-2xl space-y-2 shadow-md">
      <h3 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-heading flex items-center gap-2">
      <Snowflake className="text-secondary h-5 w-5" />
                  Do you operate during harsh Pennine winter weather?
                </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Our fleet includes all-weather 4-Motion response vans equipped with winter tyres, onboard LED lighting arrays, and heavy-duty generators to carry out fitting safely through Lancashire sleet, rain, and snow.
                </p>
      </div>
      <div className="bg-primary/60 p-6 rounded-2xl space-y-2 shadow-md">
      <h3 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-heading flex items-center gap-2">
      <Car className="text-secondary h-5 w-5" />
                  Do you carry tyres for 4x4s, pickups, and heavy electric SUVs?
                </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  We stock extensive inventory across all major rim sizes (14&quot; up to 23&quot;), including extra-load (XL) ratings, acoustic foam-lined EV tyres (Tesla, Polestar), and all-terrain tread patterns for rural moorland pickups.
                </p>
      </div>
      <div className="bg-primary/60 p-6 rounded-2xl space-y-2 shadow-md">
      <h3 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white font-heading flex items-center gap-2">
      <CreditCard className="text-secondary h-5 w-5" />
                  How do I pay at the roadside or on my driveway?
                </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Every technician carries a mobile card payment terminal accepting Visa, Mastercard, Apple Pay, and Google Pay. You only pay once the new tyre is professionally fitted, balanced, and safety torqued.
                </p>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 8: FINAL CTA (Compact Centered Panel) */}
      <section className="w-full bg-primary-dark px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="max-w-4xl mx-auto bg-primary/60 rounded-2xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
      <div className="relative z-10 space-y-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
                Darwen Hub Available Right Now
              </div>
      <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-heading max-w-xl mx-auto">
                Need Immediate Tyre Replacement in Darwen?
              </h2>
      <p className="text-[18px] leading-[28px] text-white max-w-lg mx-auto">
                Don&apos;t risk driving on a damaged tyre or waiting hours for a tow. Our local van is on standby for swift, professional roadside or driveway fitting.
              </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
      <a className="w-full sm:w-auto py-4 px-8 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center gap-2 shadow-xl hover:opacity-95 transition-transform active:scale-95" href="tel:08009992470">
      <PhoneCall className="h-5 w-5" />
                  Call 0800 999 2470
                </a>
      <a className="w-full sm:w-auto py-4 px-8 rounded-full bg-primary text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold flex items-center justify-center gap-2 hover:bg-primary-light transition-colors" href="https://wa.me/448009992470">
      <MessageCircle className="text-gray-400 h-5 w-5" />
                  WhatsApp Dispatch
                </a>
      </div>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">
                Operates 24 Hours • 7 Days a Week • Covering BB3, Blackburn, Bolton &amp; M65 J4
              </p>
      </div>
      </div>
      </section>
    </main>
  );
}
