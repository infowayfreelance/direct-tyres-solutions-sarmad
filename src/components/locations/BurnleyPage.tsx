import Image from "next/image";
import { Clock, CreditCard, HelpCircle, MessageCircle, PhoneCall, Route, ShieldCheck, Star, Timer, Truck } from "lucide-react";

export default function BurnleyPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* SECTION 1: HERO */}
      <section className="relative w-full h-[620px] lg:h-[700px] flex flex-col justify-end bg-primary-dark overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-cover bg-center" data-alt="Emergency roadside mobile tyre fitting van with amber beacons lit during twilight on UK motorway hard shoulder next to a passenger car being serviced" style={{ backgroundImage: "url('/hero-section-images-936x527.webp')" }}>
      </div>
      {/* Flat bottom gradient area for ultra-high legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-transparent"></div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-24">
      <div className="max-w-4xl flex flex-col gap-6">
      <div className="inline-flex items-center gap-2 self-start rounded-full bg-accent px-3.5 py-1 text-white shadow-lg">
      <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold tracking-wider uppercase font-bold text-white">Lancashire Rapid Dispatch Active</span>
      </div>
      <h1 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold lg:text-[56px] lg:leading-[64px] lg:tracking-[-0.02em] lg:font-black text-white leading-none drop-shadow-md">
                24/7 Mobile Tyre Fitting in <span className="text-secondary">Burnley</span>
              </h1>
      <p className="text-[18px] leading-[28px] text-white max-w-3xl">
                Rapid roadside puncture replacement and workplace fleet tyre fitting across Burnley, Turf Moor, M65 Junctions 10 &amp; 11, and the A682 corridor. Mobile workshop vans on-site within 25–35 minutes.
              </p>
      <div className="flex flex-wrap items-center gap-4 pt-2">
      <a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider font-extrabold shadow-xl hover:brightness-105 active:scale-95 transition-all" href="tel:07955266077">
      <PhoneCall className="h-6 w-6" fill="currentColor" strokeWidth={0} />
                  Call 07955 266 077
                </a>
      <a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary/90 text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider font-semibold shadow-md hover:bg-primary-light active:scale-95 transition-all" href="https://wa.me/448009992470?text=I%20need%20emergency%20tyre%20fitting%20in%20Burnley">
      <MessageCircle className="h-6 w-6 text-accent" />
                  WhatsApp Dispatch
                </a>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 2: STAT STRIP */}
      <section className="w-full bg-primary-dark py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="flex items-center gap-4 p-5 rounded-2xl bg-primary/60 shadow-sm">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent text-white">
      <Timer className="h-5 w-5" />
      </div>
      <div className="flex flex-col">
      <span className="font-heading text-[30px] leading-[38px] font-bold text-secondary font-black">25–35 Mins</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-wider">Average Burnley Arrival</span>
      </div>
      </div>
      <div className="flex items-center gap-4 p-5 rounded-2xl bg-primary/60 shadow-sm">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-accent">
      <Route className="h-5 w-5" />
      </div>
      <div className="flex flex-col">
      <span className="font-heading text-[30px] leading-[38px] font-bold text-white font-black">M65 • A682 • A646</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-wider">Highways Cleared Daily</span>
      </div>
      </div>
      <div className="flex items-center gap-4 p-5 rounded-2xl bg-primary/60 shadow-sm">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent text-white">
      <Clock className="h-5 w-5" />
      </div>
      <div className="flex flex-col">
      <span className="font-heading text-[30px] leading-[38px] font-bold text-secondary font-black">24/7 / 365</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-wider">Day, Night &amp; Bank Holidays</span>
      </div>
      </div>
      <div className="flex items-center gap-4 p-5 rounded-2xl bg-primary/60 shadow-sm">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-secondary">
      <Star className="h-5 w-5" fill="currentColor" strokeWidth={0} />
      </div>
      <div className="flex flex-col">
      <span className="font-heading text-[30px] leading-[38px] font-bold text-white font-black">4.9 / 5.0</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-wider">1,400+ Verified Motorists</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 3: LOCAL INTRO */}
      <section className="w-full bg-primary-dark py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      <div className="lg:col-span-7 flex flex-col gap-5">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-widest text-secondary font-bold">Burnley Roadside Logistics</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black">
                  Immediate Response Across East Lancashire Corridor
                </h2>
      <p className="text-[18px] leading-[28px] text-white">
                  High-traffic Pennine corridors along M65 Junctions 9 to 11, industrial distribution hubs at Network 65, and residential driveways where sudden tyre deflation needs instant mobile resolution without garage queues.
                </p>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Operating specialized heavy-duty mobile tire workshops equipped with digital bead-breakers, high-pressure inflators, and pneumatic wheel lifters. Whether stranded roadside in the rain on the A682 or halted in a loading yard, our rapid vans arrive carrying exact manufacturer-spec tyres.
                </p>
      <div className="flex flex-wrap gap-2 pt-2">
      <span className="px-3.5 py-1 rounded-full bg-primary/80 text-white text-[13px] leading-[18px]">M65 J9-11</span>
      <span className="px-3.5 py-1 rounded-full bg-primary/80 text-white text-[13px] leading-[18px]">A682 Rossendale Rd</span>
      <span className="px-3.5 py-1 rounded-full bg-primary/80 text-white text-[13px] leading-[18px]">A646 Todmorden Corridor</span>
      <span className="px-3.5 py-1 rounded-full bg-primary/80 text-white text-[13px] leading-[18px]">Nelson</span>
      <span className="px-3.5 py-1 rounded-full bg-primary/80 text-white text-[13px] leading-[18px]">Accrington</span>
      <span className="px-3.5 py-1 rounded-full bg-primary/80 text-white text-[13px] leading-[18px]">Padiham</span>
      <span className="px-3.5 py-1 rounded-full bg-primary/80 text-white text-[13px] leading-[18px]">Brierfield</span>
      <span className="px-3.5 py-1 rounded-full bg-primary/80 text-white text-[13px] leading-[18px]">Hapton</span>
      </div>
      </div>
      <div className="lg:col-span-5">
      <div className="rounded-2xl bg-primary/60 p-6 flex flex-col gap-6 shadow-xl">
      <div className="flex items-center gap-3">
      <ShieldCheck className="text-secondary h-6 w-6" />
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Live Burnley Deployment</h3>
      </div>
      <div className="flex flex-col gap-4 text-[13px] leading-[18px]">
      <div className="flex items-start justify-between gap-4 p-3.5 rounded-xl bg-primary-dark">
      <div>
      <div className="text-white font-bold">Van #04 (M65 J10 Turf Moor)</div>
      <div className="text-gray-400">Puncture replacement in progress</div>
      </div>
      <span className="px-2.5 py-0.5 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold font-bold">En Route</span>
      </div>
      <div className="flex items-start justify-between gap-4 p-3.5 rounded-xl bg-primary-dark">
      <div>
      <div className="text-white font-bold">Van #07 (Network 65 Hub)</div>
      <div className="text-gray-400">Fleet commercial inspection</div>
      </div>
      <span className="px-2.5 py-0.5 rounded-full bg-primary text-accent text-[11px] leading-[14px] tracking-[0.06em] font-bold font-bold">On Scene</span>
      </div>
      <div className="flex items-start justify-between gap-4 p-3.5 rounded-xl bg-primary-dark">
      <div>
      <div className="text-white font-bold">Van #12 (A646 Burnley / Padiham)</div>
      <div className="text-gray-400">Ready for immediate motorway dispatch</div>
      </div>
      <span className="px-2.5 py-0.5 rounded-full bg-secondary text-primary text-[11px] leading-[14px] tracking-[0.06em] font-bold font-bold">Available</span>
      </div>
      </div>
      <a className="w-full text-center py-3 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider font-extrabold hover:brightness-105 transition-all" href="tel:07955266077">
                    Request Nearest Van
                  </a>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 4: SERVICES (4 EQUAL CARDS) */}
      <section className="w-full bg-primary-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center gap-3 mb-12">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-widest text-secondary font-bold">Full Mechanical Coverage</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black">Mobile Tyre Services Across Burnley</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Card 1 */}
      <div className="flex flex-col rounded-2xl bg-primary/60 overflow-hidden shadow-lg hover:shadow-2xl transition-all">
      <div className="w-full h-48 bg-cover bg-center" data-alt="Modern mobile tyre repair workshop van parked beside a motorway lane at dusk with amber safety lights illuminating the roadside work environment" style={{ backgroundImage: "url('/gallery-onsite-wheel-fitting.webp')" }}>
      </div>
      <div className="p-6 flex flex-col flex-1 gap-3">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">Emergency Highway Replacement</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 flex-1">
                    Rapid motorway callouts along M65 Junctions 8 through 12. Full amber warning lighting, high-visibility perimeter setups, and emergency high-speed safety tire fitting.
                  </p>
      <div className="pt-2">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase font-bold tracking-wider">Priority Highway Service</span>
      </div>
      </div>
      </div>
      {/* Card 2 */}
      <div className="relative flex flex-col rounded-2xl bg-primary/60 overflow-hidden shadow-lg hover:shadow-2xl transition-all">
      <Image src="/wheel-balancing-2-1536x1024.webp" alt="Brand new car tyre tread inspection with tyre depth gauge" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-1 gap-3">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">BS AU 159 Vulcanised Repair</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 flex-1">
                    Compliant puncture repairs conducted in our climate-managed van workshops. We assess tread depth, structural casing integrity, and repair safely on the spot.
                  </p>
      <div className="pt-2">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase font-bold tracking-wider">Safety Standard Verified</span>
      </div>
      </div>
      </div>
      {/* Card 3 */}
      <div className="flex flex-col rounded-2xl bg-primary/60 overflow-hidden shadow-lg hover:shadow-2xl transition-all">
      <div className="w-full h-48 bg-cover bg-center" data-alt="Interior of custom Mercedes mobile tyre workshop showing rows of commercial light truck tyres and pneumatic mounting equipment" style={{ backgroundImage: "url('/gallery-roadside-fitting.webp')" }}>
      </div>
      <div className="p-6 flex flex-col flex-1 gap-3">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">Commercial Fleet &amp; Courier Tyres</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 flex-1">
                    Keep courier vans, delivery fleets, and utility vehicles running smoothly across Network 65 Business Park with zero yard disruption or trailer downtime.
                  </p>
      <div className="pt-2">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase font-bold tracking-wider">Heavy Load Ratings</span>
      </div>
      </div>
      </div>
      {/* Card 4 */}
      <div className="flex flex-col rounded-2xl bg-primary/60 overflow-hidden shadow-lg hover:shadow-2xl transition-all">
      <div className="w-full h-48 bg-cover bg-center" data-alt="Professional tyre technician removing a stripped locking wheel nut using precision extractor tooling on an alloy wheel rim" style={{ backgroundImage: "url('/gallery-home-callout.webp')" }}>
      </div>
      <div className="p-6 flex flex-col flex-1 gap-3">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">Locking Wheel Nut Extraction</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 flex-1">
                    Lost the wheel nut key or stripped the bolt head? Our specialist non-impact extraction systems safely release seized locking nuts with guaranteed alloy protection.
                  </p>
      <div className="pt-2">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase font-bold tracking-wider">Zero Rim Damage</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 5: TRUST BADGES (PLAIN ICON ROW) */}
      <section className="w-full bg-primary-dark py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div className="flex flex-col items-center text-center gap-3">
      <div className="w-14 h-14 rounded-full bg-primary/60 flex items-center justify-center text-secondary shadow-md">
      <ShieldCheck className="h-[30px] w-[30px]" />
      </div>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Fully Insured £5M</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Roadside &amp; Commercial Liability</span>
      </div>
      <div className="flex flex-col items-center text-center gap-3">
      <div className="w-14 h-14 rounded-full bg-primary/60 flex items-center justify-center text-accent text-white shadow-md">
      <ShieldCheck className="h-[30px] w-[30px]" />
      </div>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">BS AU 159 Compliant</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Strict British Standards Code</span>
      </div>
      <div className="flex flex-col items-center text-center gap-3">
      <div className="w-14 h-14 rounded-full bg-primary/60 flex items-center justify-center text-accent shadow-md">
      <CreditCard className="h-[30px] w-[30px]" />
      </div>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Contactless POS Roadside</span>
      <span className="text-[13px] leading-[18px] text-gray-400">All Major Cards &amp; Apple Pay</span>
      </div>
      <div className="flex flex-col items-center text-center gap-3">
      <div className="w-14 h-14 rounded-full bg-primary/60 flex items-center justify-center text-secondary shadow-md">
      <Truck className="h-[30px] w-[30px]" />
      </div>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Dedicated Burnley Fleet</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Based Locally Around M65</span>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 6: HOW IT WORKS (3 COLUMNS TOPPED WITH REAL PHOTOS) */}
      <section className="w-full bg-primary-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center gap-3 mb-16">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-widest text-secondary font-bold">Frictionless Dispatch</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black">How Burnley Mobile Fitting Works</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Step 1 */}
      <div className="relative flex flex-col rounded-2xl bg-primary/60 overflow-hidden shadow-lg">
      <Image src="/about-rapid-response-tyres.webp" alt="Tyre tread depth inspection showing digital precision equipment" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-52 object-cover" />
      <div className="p-8 flex flex-col gap-4">
      <div className="flex items-center justify-between">
      <span className="font-heading text-[30px] leading-[38px] font-bold font-black text-secondary">01</span>
      <span className="px-3 py-1 rounded-full bg-primary text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold font-bold">Instant</span>
      </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">Call &amp; Vehicle Lookup</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    Share your registration and current Burnley location (postcode, M65 junction, or what3words). We cross-reference manufacturer tyre size profiles and confirm fixed pricing upfront.
                  </p>
      </div>
      </div>
      {/* Step 2 */}
      <div className="flex flex-col rounded-2xl bg-primary/60 overflow-hidden shadow-lg">
      <div className="w-full h-52 bg-cover bg-center" data-alt="Mobile tyre technician setting up impact wrench and hydraulic jack next to car wheel on pavement" style={{ backgroundImage: "url('/gallery-evening-callout.webp')" }}>
      </div>
      <div className="p-8 flex flex-col gap-4">
      <div className="flex items-center justify-between">
      <span className="font-heading text-[30px] leading-[38px] font-bold font-black text-accent text-white">02</span>
      <span className="px-3 py-1 rounded-full bg-primary text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold font-bold">25-35 Mins</span>
      </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">Priority Van Mobilised</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    The closest fitted Mercedes Sprinter mobile unit is dispatched immediately. You receive live SMS tracking and a direct technician contact number while you wait in safety.
                  </p>
      </div>
      </div>
      {/* Step 3 */}
      <div className="flex flex-col rounded-2xl bg-primary/60 overflow-hidden shadow-lg">
      <div className="w-full h-52 bg-cover bg-center" data-alt="Technician torquing car wheel lug nuts to manufacturer specification using precision click torque wrench" style={{ backgroundImage: "url('/gallery-evening-home-visit.webp')" }}>
      </div>
      <div className="p-8 flex flex-col gap-4">
      <div className="flex items-center justify-between">
      <span className="font-heading text-[30px] leading-[38px] font-bold font-black text-secondary">03</span>
      <span className="px-3 py-1 rounded-full bg-primary text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold font-bold">Complete</span>
      </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">Fitted, Torqued &amp; Cleared</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    We mount, electronically balance, replace valve stems, and torque all wheel bolts to manufacturer spec. Old tyres are safely bagged and taken away for eco-friendly recycling.
                  </p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 7: REAL JOB & TESTIMONIAL (TWO-CARD ROW WITH PHOTOS) */}
      <section className="w-full bg-primary-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center gap-3 mb-12">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-widest text-secondary font-bold">From The Field</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black">Burnley Incidents Resolved Today</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Card 1: Job Report */}
      <div className="rounded-2xl bg-primary/60 overflow-hidden flex flex-col md:flex-row shadow-xl">
      <div className="md:w-5/12 h-64 md:h-auto bg-cover bg-center" data-alt="Commercial delivery van undergoing mobile tyre replacement in an industrial business park loading bay" style={{ backgroundImage: "url('/gallery-precision-care.webp')" }}>
      </div>
      <div className="md:w-7/12 p-8 flex flex-col justify-between gap-4">
      <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
      <span className="px-2.5 py-0.5 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold font-bold">Report #BN-4509</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary font-bold">Verified Job</span>
      </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">Network 65 Business Park, Burnley</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                      Mercedes Sprinter distribution courier experienced a 235/65 R16C rear inner-wall blowout on approach to the distribution terminal.
                    </p>
      </div>
      <div className="flex flex-col gap-1.5 pt-4 bg-primary-dark p-4 rounded-xl">
      <div className="flex justify-between text-[13px] leading-[18px]">
      <span className="text-gray-400">Response Time:</span>
      <span className="text-white font-bold">19 minutes</span>
      </div>
      <div className="flex justify-between text-[13px] leading-[18px]">
      <span className="text-gray-400">Fitting Duration:</span>
      <span className="text-white font-bold">22 minutes on loading bay</span>
      </div>
      <div className="flex justify-between text-[13px] leading-[18px]">
      <span className="text-gray-400">Tyre Fitted:</span>
      <span className="text-secondary font-bold">Michelin Agilis 3 Heavy Load</span>
      </div>
      </div>
      </div>
      </div>
      {/* Card 2: Commuter Review */}
      <div className="rounded-2xl bg-primary/60 overflow-hidden flex flex-col md:flex-row shadow-xl">
      <div className="md:w-5/12 h-64 md:h-auto bg-cover bg-center" data-alt="British motorway slip road during evening rain with motorway overhead gantry signs in the background" style={{ backgroundImage: "url('/mobile-tyre-fitting-3-1536x1024.webp')" }}>
      </div>
      <div className="md:w-7/12 p-8 flex flex-col justify-between gap-4">
      <div className="flex flex-col gap-3">
      <div className="flex items-center gap-1 text-secondary">
      <Star className="h-5 w-5" fill="currentColor" strokeWidth={0} />
      <Star className="h-5 w-5" fill="currentColor" strokeWidth={0} />
      <Star className="h-5 w-5" fill="currentColor" strokeWidth={0} />
      <Star className="h-5 w-5" fill="currentColor" strokeWidth={0} />
      <Star className="h-5 w-5" fill="currentColor" strokeWidth={0} />
      </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">M65 J10 Slip Road Rescue</h3>
      <p className="text-[15px] leading-[24px] text-white italic">
                      “Blew a tyre on the M65 J10 slip road near Burnley in heavy rain. Mobile technician arrived in under 30 minutes, changed the tyre with full safety beacons. True lifesavers.”
                    </p>
      </div>
      <div className="pt-4 flex items-center justify-between">
      <div>
      <div className="text-white font-bold font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">Mark T.</div>
      <div className="text-gray-400 text-[13px] leading-[18px]">Burnley Commuter (BMW 3 Series)</div>
      </div>
      <ShieldCheck className="text-secondary h-[30px] w-[30px]" />
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 8: FAQS (TWO COLUMNS) */}
      <section className="w-full bg-primary-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center gap-3 mb-16">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-widest text-secondary font-bold">Frequently Asked Questions</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black">Burnley Mobile Fitting Assistance</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col gap-6">
      {/* FAQ 1 */}
      <div className="p-6 rounded-2xl bg-primary/60 shadow-md flex flex-col gap-3">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold flex items-center gap-2">
      <HelpCircle className="text-secondary h-5 w-5" />
                    Can you change tyres safely on the M65 motorway?
                  </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    Yes. Our fleet technicians are Chapter 8 certified for live carriageway and motorway hard shoulder interventions. We coordinate with National Highways protocols, deploy magnetic synchronized beacon arrays, and create a safe service envelope along M65 Junctions 8 to 12.
                  </p>
      </div>
      {/* FAQ 2 */}
      <div className="p-6 rounded-2xl bg-primary/60 shadow-md flex flex-col gap-3">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold flex items-center gap-2">
      <HelpCircle className="text-secondary h-5 w-5" />
                    Do you carry commercial van and courier sizes in Burnley?
                  </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    Always. We stock heavy-duty 8-ply C-rated commercial tyres (including 215/65 R16C, 235/65 R16C, and 195/70 R15C) directly on our local vans for rapid dispatch to Network 65, Rossendale Road, and Heasandford Industrial Estates.
                  </p>
      </div>
      </div>
      <div className="flex flex-col gap-6">
      {/* FAQ 3 */}
      <div className="p-6 rounded-2xl bg-primary/60 shadow-md flex flex-col gap-3">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold flex items-center gap-2">
      <HelpCircle className="text-secondary h-5 w-5" />
                    What if my locking wheel nut key is broken or lost?
                  </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    Every Burnley unit carries heavy-duty non-invasive extraction tools designed to remove deformed, damaged, or lost locking wheel nuts without scratching or burning your alloy rims.
                  </p>
      </div>
      {/* FAQ 4 */}
      <div className="p-6 rounded-2xl bg-primary/60 shadow-md flex flex-col gap-3">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold flex items-center gap-2">
      <HelpCircle className="text-secondary h-5 w-5" />
                    What payment methods do you accept at the roadside?
                  </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    Our mobile units carry secure contactless chip &amp; PIN terminals. We accept Visa, Mastercard, Maestro, American Express, Apple Pay, Google Pay, and instant BACs for registered business fleet accounts.
                  </p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 9: FINAL CTA (SOLID-GOLD FULL-WIDTH BAR) */}
      <section className="w-full bg-secondary py-12 px-4 sm:px-6 lg:px-8 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
      <div className="flex flex-col gap-2">
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-primary font-black">
                Stranded in Burnley or on the M65 Right Now?
              </h2>
      <p className="text-[18px] leading-[28px] text-primary/90 max-w-2xl font-medium">
                Our mobile fitting van is on standby in Lancashire with full tyre stocks. Guaranteed on-site ETA under 35 minutes.
              </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
      <a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary-dark text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider font-extrabold shadow-2xl hover:bg-primary-light active:scale-95 transition-all" href="tel:07955266077">
      <PhoneCall className="text-secondary h-6 w-6" fill="currentColor" strokeWidth={0} />
                Call 07955 266 077
              </a>
      <a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-accent text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider font-bold shadow-xl hover:brightness-110 active:scale-95 transition-all" href="https://wa.me/448009992470?text=Emergency%20tyre%20fitting%20in%20Burnley">
      <MessageCircle className="text-white h-6 w-6" />
                WhatsApp Dispatch
              </a>
      </div>
      </div>
      </section>
    </main>
  );
}
