import Image from "next/image";
import { Car, ChevronDown, Clock, MapPin, MessageCircle, Moon, Navigation, PhoneCall, Route, ShieldCheck, Wrench } from "lucide-react";

export default function RamsbottomPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* SECTION 1: HERO (Village Photo Hero) */}
      <section className="relative w-full overflow-hidden bg-primary-dark">
      <div className="relative absolute inset-0 z-0">
      <Image src="/hero-section-images-936x527.webp" alt="Direct Tyre Solutions emergency mobile van servicing roadside in twilight conditions" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity filter contrast-125" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/90 to-primary-dark/60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 flex flex-col justify-center">
      <div className="inline-flex items-center gap-2 self-start rounded-full bg-primary/80 px-3.5 py-1 mb-6">
      <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-white">Rossendale Valley Coverage</span>
      </div>
      <h1 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold sm:text-[56px] sm:leading-[64px] sm:tracking-[-0.02em] sm:font-black text-white max-w-4xl mb-4">
              24/7 Mobile Tyre Fitting in Ramsbottom
            </h1>
      <p className="text-[18px] leading-[28px] text-gray-400 max-w-2xl mb-8">
              Immediate roadside and driveway deployment across the Pennine corridor and Rossendale Valley. On-scene tyre replacement for severe rural inclines, Holcombe Hill approaches, and the M66/A56 trunk route.
            </p>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-xl">
      <a className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider shadow-lg hover:bg-secondary-hover transition-all active:scale-95 text-center" href="tel:08009992470">
      <PhoneCall className="h-[20px] w-[20px]" />
      <span>Call 0800 999 2470</span>
      </a>
      <a className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary/80 text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold hover:bg-primary transition-all active:scale-95 text-center" href="https://wa.me/448009992470">
      <MessageCircle className="h-[20px] w-[20px] text-accent" />
      <span>WhatsApp Us</span>
      </a>
      </div>
      <div className="mt-12 flex flex-wrap items-center gap-6 text-gray-400 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <div className="flex items-center gap-2">
      <ShieldCheck className="text-secondary h-[18px] w-[18px]" />
      <span>Average Arrival 30-45 Mins</span>
      </div>
      <div className="flex items-center gap-2">
      <Clock className="text-secondary h-[18px] w-[18px]" />
      <span>Open 24 Hours, 365 Days</span>
      </div>
      <div className="flex items-center gap-2">
      <Wrench className="text-secondary h-[18px] w-[18px]" />
      <span>Van-Mounted Balancing Rig</span>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 2: LOCAL INTRO */}
      <section className="w-full bg-primary-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7 flex flex-col gap-6">
      <div className="flex items-center gap-2 text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest">
      <MapPin className="h-[16px] w-[16px]" />
      <span>Hyperlocal Roadside Dispatch</span>
      </div>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold sm:text-[40px] sm:leading-[48px] sm:tracking-[-0.02em] sm:font-extrabold text-white">
                Overcoming steep moors, cobbled lanes, and isolated hill roads.
              </h2>
      <div className="space-y-4 text-gray-400 text-[15px] leading-[24px]">
      <p>
                  Ramsbottom presents some of Lancashire’s most challenging driving terrain. From the historic stone cobbles flanking the town centre to the abrupt, punishing inclines of Bolton Road (A676), Holcombe Brook, and Peel Brow, a sudden blowout or split sidewall frequently leaves motorists stranded on unlit, narrow verges without a hard shoulder.
                </p>
      <p>
                  When torrential Pennine rain or sudden moorland black ice strikes, attempting to tow an immobilised vehicle down hill descents toward Bury is hazardous, slow, and expensive. Our high-payload commercial vans carry industrial bead breakers, digital balancers, and full size stocks directly to your stranded position, delivering factory-grade mounting right where you stand.
                </p>
      </div>
      </div>
      <div className="lg:col-span-5">
      <div className="bg-primary/60 rounded-2xl p-6 sm:p-8 flex flex-col gap-4 shadow-xl">
      <span className="font-heading text-[20px] leading-[26px] font-bold text-white">Key Local Corridors Covered</span>
      <p className="text-[13px] leading-[18px] text-gray-400">Immediate mobile technician routing active across vital transit arteries:</p>
      <div className="space-y-3 pt-2">
      <div className="flex items-start gap-3 bg-primary/80 p-3 rounded-lg">
      <Car className="text-secondary h-[20px] w-[20px] mt-0.5" />
      <div>
      <strong className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white block">M66 &amp; A56 Bypass</strong>
      <span className="text-[13px] leading-[18px] text-gray-400">Rapid intervention on both northbound and southbound sliproads towards Edenfield.</span>
      </div>
      </div>
      <div className="flex items-start gap-3 bg-primary/80 p-3 rounded-lg">
      <Navigation className="text-secondary h-[20px] w-[20px] mt-0.5" />
      <div>
      <strong className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white block">A676 Bolton Road &amp; Peel Brow</strong>
      <span className="text-[13px] leading-[18px] text-gray-400">Precision fitting on high-gradient residential corridors and moor access paths.</span>
      </div>
      </div>
      <div className="flex items-start gap-3 bg-primary/80 p-3 rounded-lg">
      <Moon className="text-secondary h-[20px] w-[20px] mt-0.5" />
      <div>
      <strong className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white block">Holcombe Hill &amp; Rake Incline</strong>
      <span className="text-[13px] leading-[18px] text-gray-400">Equipped with 4x4-ready jacks and heavy-duty compressors for rural rescues.</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 3: SERVICES (Single Unified Panel) */}
      <section className="w-full bg-primary-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
      <div className="text-center mb-10">
      <h2 className="font-heading text-[30px] leading-[38px] font-bold sm:text-[40px] sm:leading-[48px] sm:tracking-[-0.02em] sm:font-extrabold text-white mb-3">
                On-Demand Technical Solutions
              </h2>
      <p className="text-[15px] leading-[24px] text-gray-400 max-w-xl mx-auto">
                Fully self-contained mobile workshops dispatched with all necessary fitting and diagnostic equipment.
              </p>
      </div>
      <div className="rounded-2xl bg-primary/60 p-6 sm:p-10 shadow-2xl space-y-6">
      {/* Service Item 1 */}
      <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-white/10">
      <div className="relative w-full sm:w-36 h-28 flex-shrink-0 rounded-xl overflow-hidden bg-primary">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Emergency roadside response technician attending broken down vehicle" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 text-center sm:text-left">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-1">Emergency Roadside Tyre Replacement</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    Complete swap of unrepairable blowouts, split shoulders, and sidewall tears on public carriageways or home drives. We stock premium, mid-range, and economy specifications.
                  </p>
      </div>
      <div className="flex-shrink-0 self-center">
      <span className="inline-flex items-center text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">24/7 Priority</span>
      </div>
      </div>
      {/* Service Item 2 */}
      <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-white/10">
      <div className="relative w-full sm:w-36 h-28 flex-shrink-0 rounded-xl overflow-hidden bg-primary">
      <Image src="/gallery-roadside-fitting.webp" alt="Impact wrench changing wheel on vehicle" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 text-center sm:text-left">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-1">Mobile Puncture Vulcanisation</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    British Standard BSAU159 compliant internal mushroom plug-patch repairs. Clean tread perforation repair executed on-site without unnecessary replacement costs.
                  </p>
      </div>
      <div className="flex-shrink-0 self-center">
      <span className="inline-flex items-center text-gray-400 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">BSAU Compliant</span>
      </div>
      </div>
      {/* Service Item 3 */}
      <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-white/10">
      <div className="relative w-full sm:w-36 h-28 flex-shrink-0 rounded-xl overflow-hidden bg-primary">
      <Image src="/gallery-home-callout.webp" alt="Close-up alloy wheel maintenance and lock removal" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 text-center sm:text-left">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-1">Locking Wheel Nut Extraction</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    Damage-free specialized reverse-thread extraction for rounded, corroded, or missing locking keys. Clean removal protecting pristine alloy wheel surfaces.
                  </p>
      </div>
      <div className="flex-shrink-0 self-center">
      <span className="inline-flex items-center text-accent font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">Zero Rim Damage</span>
      </div>
      </div>
      {/* Service Item 4 */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
      <div className="relative w-full sm:w-36 h-28 flex-shrink-0 rounded-xl overflow-hidden bg-primary">
      <Image src="/gallery-evening-callout.webp" alt="High-traction commercial van tyre ready for all seasons" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 text-center sm:text-left">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-1">All-Season &amp; Winter Pennine Tyres</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    Moorland winter rubber upgrades and heavy siped compounds selected specifically for Rossendale sleet, surface standing water, and freezing temperatures.
                  </p>
      </div>
      <div className="flex-shrink-0 self-center">
      <span className="inline-flex items-center text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">Cold Weather Ready</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 4: ROADS & NEARBY AREAS */}
      <section className="w-full bg-primary-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-6 flex flex-col gap-6">
      <div>
      <span className="text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider block mb-1">Regional Fleet Coverage</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold sm:text-[40px] sm:leading-[48px] sm:tracking-[-0.02em] sm:font-extrabold text-white">
                    Surrounding Towns &amp; Connecting Arteries
                  </h2>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Our vans patrol continuously between the northern Manchester rim and the high Rossendale boundary, ensuring immediate response across these primary population centres and junctions:
                </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      <div className="bg-primary/60 p-3 rounded-xl flex items-center gap-2">
      <Navigation className="text-secondary h-[18px] w-[18px]" />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Bury</span>
      </div>
      <div className="bg-primary/60 p-3 rounded-xl flex items-center gap-2">
      <Navigation className="text-secondary h-[18px] w-[18px]" />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Rawtenstall</span>
      </div>
      <div className="bg-primary/60 p-3 rounded-xl flex items-center gap-2">
      <Navigation className="text-secondary h-[18px] w-[18px]" />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Haslingden</span>
      </div>
      <div className="bg-primary/60 p-3 rounded-xl flex items-center gap-2">
      <Navigation className="text-secondary h-[18px] w-[18px]" />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Edenfield</span>
      </div>
      <div className="bg-primary/60 p-3 rounded-xl flex items-center gap-2">
      <Navigation className="text-secondary h-[18px] w-[18px]" />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Tottington</span>
      </div>
      <div className="bg-primary/60 p-3 rounded-xl flex items-center gap-2">
      <Navigation className="text-secondary h-[18px] w-[18px]" />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Holcombe</span>
      </div>
      </div>
      <div className="bg-primary/80 p-4 rounded-xl flex items-center gap-3">
      <Route className="text-accent h-[24px] w-[24px]" />
      <span className="text-[13px] leading-[18px] text-gray-400">
                    Continuous clearance on <strong className="text-white">M66, A56, A676, B6214,</strong> and adjacent cross-moor transit paths.
                  </span>
      </div>
      </div>
      <div className="lg:col-span-6">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-primary/60 aspect-video">
      <Image src="/gallery-evening-home-visit.webp" alt="Mobile tyre assistance vehicle on highway near Ramsbottom junction" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent flex items-end p-6">
      <div className="bg-primary/60 backdrop-blur-md px-4 py-2 rounded-lg">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-white uppercase font-bold tracking-wider">Live Patrol:</span>
      <span className="text-[13px] leading-[18px] text-white ml-2">A56 bypass linking into Ramsbottom centre</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 5: HOW IT WORKS (Simple 5-Dot Progress Row) */}
      <section className="w-full bg-primary-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
      <h2 className="font-heading text-[30px] leading-[38px] font-bold sm:text-[40px] sm:leading-[48px] sm:tracking-[-0.02em] sm:font-extrabold text-white mb-3">
                Streamlined Emergency Dispatch
              </h2>
      <p className="text-[15px] leading-[24px] text-gray-400 max-w-lg mx-auto">
                From first contact to complete wheel torquing in 5 simple steps.
              </p>
      </div>
      {/* 5-Dot Desktop/Mobile Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 relative">
      {/* Step 1 */}
      <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center font-heading text-[20px] leading-[26px] font-bold mb-4 shadow-md">
                  1
                </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Call or WhatsApp</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Provide your location &amp; tyre size or registration.</p>
      </div>
      {/* Step 2 */}
      <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-heading text-[20px] leading-[26px] font-bold mb-4 shadow-md">
                  2
                </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Instant Tyre Match</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">We confirm local inventory matching OE standards.</p>
      </div>
      {/* Step 3 */}
      <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-heading text-[20px] leading-[26px] font-bold mb-4 shadow-md">
                  3
                </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Van Dispatched</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Real-time mobile unit deployed directly to your GPS pin.</p>
      </div>
      {/* Step 4 */}
      <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-heading text-[20px] leading-[26px] font-bold mb-4 shadow-md">
                  4
                </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">On-Site Fitting</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Precision mounting, bead seal, electronic balance &amp; torque.</p>
      </div>
      {/* Step 5 */}
      <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-heading text-[20px] leading-[26px] font-bold mb-4 shadow-md">
                  5
                </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Drive Away Safe</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Contactless card payment with digital receipt.</p>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 6: REAL LOCAL JOB */}
      <section className="w-full bg-primary-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
      <div className="rounded-2xl bg-primary/60 p-6 sm:p-8 shadow-xl flex flex-col md:flex-row gap-6 items-center">
      <div className="relative w-full md:w-56 h-48 flex-shrink-0 rounded-xl overflow-hidden bg-primary">
      <Image src="/gallery-precision-care.webp" alt="Land Rover Discovery alloy wheel fitted with All-Terrain tyre" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 flex flex-col justify-center">
      <div className="inline-flex items-center gap-2 mb-2">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-white">Verified Callout Incident</span>
      </div>
      <h3 className="font-heading text-[30px] leading-[38px] font-bold text-white mb-2">
                  Land Rover Discovery Sport — Peel Brow
                </h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mb-4">
                  The driver suffered a severe sidewall pinch after catching a sharp stone drainage curb during heavy evening rain near Holcombe. An unrepairable tear left the SUV stranded on an unlit incline at 20:15.
                </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 bg-primary/80 p-3 rounded-xl text-left">
      <div>
      <span className="block text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Tyre Spec</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">235/60 R18 A/T</span>
      </div>
      <div>
      <span className="block text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Response Time</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">34 Minutes</span>
      </div>
      <div className="col-span-2 sm:col-span-1">
      <span className="block text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Resolution</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-gray-400">Balanced &amp; Torqued</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 7: FAQ (Standard Clean Accordion) */}
      <section className="w-full bg-primary-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
      <h2 className="font-heading text-[30px] leading-[38px] font-bold sm:text-[40px] sm:leading-[48px] sm:tracking-[-0.02em] sm:font-extrabold text-white mb-2">
                Frequently Asked Questions
              </h2>
      <p className="text-[15px] leading-[24px] text-gray-400">
                Common queries regarding our Ramsbottom roadside &amp; home emergency services.
              </p>
      </div>
      <div className="space-y-4" id="faq-accordion">
      {/* Q1 */}
      <details className="group bg-primary/60 rounded-xl p-5 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm">
      <summary className="flex justify-between items-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">
      <span>How fast can you reach a stranded vehicle in Ramsbottom?</span>
      <ChevronDown className="transition-transform duration-200 group-open:rotate-180 text-secondary h-5 w-5" />
      </summary>
      <p className="mt-3 text-[13px] leading-[18px] text-gray-400">
                  Our average arrival window for Ramsbottom, Shuttleworth, and Holcombe is 30 to 45 minutes. Due to our regular patrol units stationed near the A56 and M66 junction, urgent breakdowns receive priority routing.
                </p>
      </details>
      {/* Q2 */}
      <details className="group bg-primary/60 rounded-xl p-5 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm">
      <summary className="flex justify-between items-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">
      <span>Can you change a tyre safely on steep hills like Bolton Road or Rake?</span>
      <ChevronDown className="transition-transform duration-200 group-open:rotate-180 text-secondary h-5 w-5" />
      </summary>
      <p className="mt-3 text-[13px] leading-[18px] text-gray-400">
                  Yes. Our vehicles carry heavy-duty industrial chocks, low-profile hydraulic trolley jacks, and specialized high-traction stabilizing blocks designed for unlevel or steep tarmac common across Holcombe Hill and Peel Brow.
                </p>
      </details>
      {/* Q3 */}
      <details className="group bg-primary/60 rounded-xl p-5 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm">
      <summary className="flex justify-between items-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">
      <span>Do you operate late at night and during bad weather?</span>
      <ChevronDown className="transition-transform duration-200 group-open:rotate-180 text-secondary h-5 w-5" />
      </summary>
      <p className="mt-3 text-[13px] leading-[18px] text-gray-400">
                  We operate 24 hours a day, 7 days a week, 365 days a year. Our service vans are equipped with powerful high-lumen floodlighting and all-weather canopies, enabling safe tyre fitting in rain, snow, or pitch-black country lanes.
                </p>
      </details>
      {/* Q4 */}
      <details className="group bg-primary/60 rounded-xl p-5 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm">
      <summary className="flex justify-between items-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">
      <span>What if I do not have the locking wheel nut key?</span>
      <ChevronDown className="transition-transform duration-200 group-open:rotate-180 text-secondary h-5 w-5" />
      </summary>
      <p className="mt-3 text-[13px] leading-[18px] text-gray-400">
                  Our technicians carry specialist inverse-thread extraction tooling capable of removing damaged, stripped, or missing security nuts without inflicting damage on the alloy wheel face.
                </p>
      </details>
      {/* Q5 */}
      <details className="group bg-primary/60 rounded-xl p-5 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm">
      <summary className="flex justify-between items-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">
      <span>Do you offer tyre puncture repairs on-site?</span>
      <ChevronDown className="transition-transform duration-200 group-open:rotate-180 text-secondary h-5 w-5" />
      </summary>
      <p className="mt-3 text-[13px] leading-[18px] text-gray-400">
                  Yes, if the puncture is located within the central three-quarters of the tread band and conforms with BS AU 159 criteria, we will execute a complete vulcanised plug-patch repair on the spot.
                </p>
      </details>
      </div>
      </div>
      </section>
      {/* SECTION 8: RELATED LOCATIONS */}
      <section className="w-full bg-primary-dark py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
      <div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Direct Coverage Across Greater Manchester &amp; Pennines</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Immediate mobile technician dispatch available in adjacent operational sectors:</p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
      <a className="px-3.5 py-1.5 rounded-full bg-primary/60 hover:bg-primary text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-colors" href="#bury">Bury</a>
      <a className="px-3.5 py-1.5 rounded-full bg-primary/60 hover:bg-primary text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-colors" href="#rawtenstall">Rawtenstall</a>
      <a className="px-3.5 py-1.5 rounded-full bg-primary/60 hover:bg-primary text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-colors" href="#haslingden">Haslingden</a>
      <a className="px-3.5 py-1.5 rounded-full bg-primary/60 hover:bg-primary text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-colors" href="#edenfield">Edenfield</a>
      <a className="px-3.5 py-1.5 rounded-full bg-primary/60 hover:bg-primary text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-colors" href="#tottington">Tottington</a>
      </div>
      </div>
      </section>
      {/* SECTION 9: FINAL CTA (Split Bar) */}
      <section className="w-full bg-primary-dark py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto rounded-2xl bg-primary/60 p-6 sm:p-10 shadow-2xl flex flex-col items-center text-center">
      <span className="inline-block px-3 py-1 rounded-full bg-secondary/15 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider mb-4">
              24/7 Rapid Emergency Response Active
            </span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold sm:text-[40px] sm:leading-[48px] sm:tracking-[-0.02em] sm:font-extrabold text-white mb-3">
              Stranded in Ramsbottom? We Are En Route.
            </h2>
      <p className="text-[15px] leading-[24px] text-gray-400 max-w-lg mb-8">
              Speak directly with an on-duty technician now for immediate vehicle clearance, price quotation, and confirmed ETA.
            </p>
      {/* Split Bar: Equal-Width Buttons */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
      <a className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider shadow-lg hover:bg-secondary-hover transition-all active:scale-95 text-center" href="tel:08009992470">
      <PhoneCall className="h-[20px] w-[20px]" />
      <span>Call 0800 999 2470</span>
      </a>
      <a className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-full bg-accent text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider shadow-lg hover:bg-blue-600 transition-all active:scale-95 text-center" href="https://wa.me/448009992470">
      <MessageCircle className="h-[20px] w-[20px]" />
      <span>WhatsApp Technician</span>
      </a>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-4">
              Zero recovery fees required • Direct mobile roadside repair on scene
            </p>
      </div>
      </section>
    </main>
  );
}
