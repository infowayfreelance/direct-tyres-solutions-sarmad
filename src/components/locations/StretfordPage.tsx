import Image from "next/image";
import { ArrowRight, Car, CheckCircle2, ChevronDown, Clock, MapPin, MessageCircle, PhoneCall, ShieldCheck, TrafficCone, Wrench, Zap } from "lucide-react";

export default function StretfordPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      <div className="flex flex-col w-full text-white">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 py-8 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* STICKY SIDEBAR (LEFT) */}
      <aside className="lg:col-span-4 lg:sticky lg:top-6 space-y-6">
      <div className="bg-primary/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl">
      <div className="relative h-48 w-full overflow-hidden">
      <Image src="/hero-section-images-936x527.webp" alt="Stretford emergency mobile tyre fitting unit parked on local roadside" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/60 to-transparent"></div>
      <div className="absolute top-3 left-3 bg-accent text-white px-3 py-1 rounded-full text-[11px] leading-[14px] tracking-[0.06em] font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-md">
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Live Dispatch Unit
                  </div>
      <div className="absolute bottom-3 left-3 right-3 text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">
                    Greater Manchester Fleet #08
                  </div>
      </div>
      <div className="p-5 md:p-6 space-y-5">
      <div className="space-y-1">
      <span className="text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">24-Hour Roadside Control</span>
      <a className="flex items-center justify-between w-full bg-secondary hover:bg-yellow-400 text-primary font-heading text-[20px] leading-[26px] font-bold font-bold px-4 py-3.5 rounded-full shadow-lg transition-transform active:scale-95 group" href="tel:08009992470">
      <span className="flex items-center gap-2">
      <PhoneCall className="h-[22px] w-[22px]" />
                        0800 999 2470
                      </span>
      <ArrowRight className="h-[18px] w-[18px] group-hover:translate-x-1 transition-transform" />
      </a>
      <p className="text-center text-[13px] leading-[18px] text-gray-400 pt-1">Direct to Stretford patrol controller</p>
      </div>
      {/* Quick Telemetry Stats */}
      <div className="grid grid-cols-3 gap-2 bg-primary-dark p-3 rounded-xl">
      <div className="text-center">
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary">25-40m</div>
      <div className="text-[11px] leading-tight text-gray-400 mt-0.5">Avg ETA</div>
      </div>
      <div className="text-center">
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-gray-400">100%</div>
      <div className="text-[11px] leading-tight text-gray-400 mt-0.5">Mobile Van</div>
      </div>
      <div className="text-center">
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-emerald-400">24/7</div>
      <div className="text-[11px] leading-tight text-gray-400 mt-0.5">All Weather</div>
      </div>
      </div>
      {/* Fast Coverage Roads */}
      <div className="space-y-2 pt-2">
      <div className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
      <MapPin className="text-gray-400 h-[16px] w-[16px]" />
                      Key Response Arteries
                    </div>
      <div className="flex flex-wrap gap-1.5 text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <span className="bg-primary/80 px-2.5 py-1 rounded-full text-white">M60 J7/J8</span>
      <span className="bg-primary/80 px-2.5 py-1 rounded-full text-white">A56 Chester Rd</span>
      <span className="bg-primary/80 px-2.5 py-1 rounded-full text-white">A5181 Barton Rd</span>
      <span className="bg-primary/80 px-2.5 py-1 rounded-full text-white">Edge Lane</span>
      </div>
      </div>
      {/* Mini Contents Navigation */}
      <div className="space-y-2 pt-3">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-wider">Fast Navigation</span>
      <ul className="space-y-1.5 text-[13px] leading-[18px] text-white">
      <li><a className="hover:text-secondary transition-colors flex items-center gap-2 py-1" href="#services"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Mobile Van Capabilities</a></li>
      <li><a className="hover:text-secondary transition-colors flex items-center gap-2 py-1" href="#process"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Stretford Dispatch Steps</a></li>
      <li><a className="hover:text-secondary transition-colors flex items-center gap-2 py-1" href="#incident"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Verified Local Case Log</a></li>
      <li><a className="hover:text-secondary transition-colors flex items-center gap-2 py-1" href="#faq"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Breakdown FAQs</a></li>
      </ul>
      </div>
      </div>
      </div>
      </aside>
      {/* MAIN CONTENT COLUMN (RIGHT) */}
      <main className="lg:col-span-8 space-y-12">
      {/* HERO SECTION */}
      <section className="bg-primary/60 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
      <div className="relative z-10 space-y-6">
      <div className="inline-flex items-center gap-2 bg-accent/20 text-gray-400 px-3.5 py-1.5 rounded-full text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <MapPin className="h-[16px] w-[16px]" />
                    Trafford Borough Rapid Response Zone
                  </div>
      <h1 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold md:text-[56px] md:leading-[64px] md:tracking-[-0.02em] md:font-black text-white leading-[1.08]">
                    24/7 Mobile Tyre Fitting in <span className="text-secondary">Stretford</span>
      </h1>
      <p className="text-[18px] leading-[28px] text-gray-400 max-w-2xl">
                    Driveway puncture repairs and roadside tyre replacement across Chester Road (A56), Edge Lane, and Stretford residential avenues. Fast van dispatch equipped with precision electronic balancing and commercial mounting gear.
                  </p>
      <div className="flex flex-wrap gap-4 pt-2">
      <a className="bg-secondary hover:bg-yellow-400 text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold px-7 py-3.5 rounded-full shadow-lg flex items-center gap-2 transition-all transform hover:-translate-y-0.5" href="tel:08009992470">
      <PhoneCall className="h-[20px] w-[20px]" />
                      Call 0800 999 2470
                    </a>
      <a className="bg-primary/80 hover:bg-primary-light text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold px-6 py-3.5 rounded-full shadow flex items-center gap-2 transition-colors" href="https://wa.me/448009992470">
      <MessageCircle className="text-emerald-400 h-[20px] w-[20px]" />
                      WhatsApp Dispatch
                    </a>
      </div>
      {/* Hero Real Photo Card */}
      <div className="pt-4">
      <div className="relative rounded-xl overflow-hidden aspect-[16/9] shadow-lg">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Mobile tyre technician using impact wrench on vehicle wheel in Stretford" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent flex items-end p-4">
      <span className="text-[13px] leading-[18px] text-white/90 flex items-center gap-2">
      <ShieldCheck className="text-secondary h-[18px] w-[18px]" />
                          On-site wheel mounting underway on residential drive in Trafford
                        </span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* LOCAL INTRO: COMMUNITY & TRAFFIC PROFILE */}
      <section className="space-y-4">
      <div className="flex items-center gap-2 text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">
      <TrafficCone className="h-5 w-5" />
      <span>Stretford Transit Conditions</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400 text-[15px] leading-[24px]">
      <div className="bg-primary-dark p-6 rounded-2xl space-y-3">
      <h2 className="text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center gap-2">
      <Car className="text-gray-400 h-[20px] w-[20px]" />
                      Chester Road &amp; Tram Conduits
                    </h2>
      <p>
                      Stretford functions as one of Manchester&apos;s most critical transit arteries, where the high-frequency Metrolink crossing routes parallel the multi-lane A56 Chester Road. During morning and evening peak traffic, stopped vehicles caused by sudden blowouts or road debris near Stretford Mall create instant choke points. Our localized patrol vans bypass standstill gridlock via King Street, Edge Lane, and local orbital paths to reach stalled drivers without delay.
                    </p>
      </div>
      <div className="bg-primary-dark p-6 rounded-2xl space-y-3">
      <h2 className="text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center gap-2">
      <MapPin className="text-gray-400 h-[20px] w-[20px]" />
                      Residential Kerbs &amp; Tight Avenues
                    </h2>
      <p>
                      The tight Victorian terraced avenues off Barton Road (A5181), Derbyshire Lane, and Longford Park host intensive curbside parking. Narrow clearance frequently leads to heavy alloy pinch-flats against raised granite curbstones. Our mobile fitting fleet carries high-lift jacks, slimline compressors, and low-clearance support rigs designed explicitly to execute clean wheel replacements in congested Stretford driveways without blocking street access.
                    </p>
      </div>
      </div>
      </section>
      {/* SERVICES GRID (2 Columns with Thumbnails) */}
      <section className="space-y-6" id="services">
      <div className="space-y-1">
      <span className="text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider">Operational Capabilities</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">Full-Spectrum Stretford Tyre Services</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Service 1 */}
      <div className="bg-primary/60 backdrop-blur-md p-4 rounded-2xl flex gap-4 items-start shadow-md hover:bg-primary/60 transition-colors">
      <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
      <Image src="/gallery-roadside-fitting.webp" alt="Emergency roadside mobile tyre fitting van with orange beacons" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="space-y-1.5">
      <h3 className="text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">Emergency Roadside Replacement</h3>
      <p className="text-gray-400 text-[13px] leading-[18px]">Immediate on-scene intervention along the M60 J7/J8 slipways and Chester Road with beacon-lit safety perimeter.</p>
      <div className="pt-1 flex items-center gap-1.5 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <Zap className="h-[16px] w-[16px]" />
                        25-40 Min Priority Response
                      </div>
      </div>
      </div>
      {/* Service 2 */}
      <div className="bg-primary/60 backdrop-blur-md p-4 rounded-2xl flex gap-4 items-start shadow-md hover:bg-primary/60 transition-colors">
      <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
      <Image src="/gallery-home-callout.webp" alt="Close-up of new car tyre tread and inspection gauge" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="space-y-1.5">
      <h3 className="text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">British Standard Puncture Seal</h3>
      <p className="text-gray-400 text-[13px] leading-[18px]">BS AU 159 certified chemical vulcanized plug-patch procedures performed directly on-site when tread integrity allows.</p>
      <div className="pt-1 flex items-center gap-1.5 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <CheckCircle2 className="h-[16px] w-[16px]" />
                        Safe Tread Verification
                      </div>
      </div>
      </div>
      {/* Service 3 */}
      <div className="bg-primary/60 backdrop-blur-md p-4 rounded-2xl flex gap-4 items-start shadow-md hover:bg-primary/60 transition-colors">
      <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
      <Image src="/gallery-evening-callout.webp" alt="Technician fitting wheel alloy" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="space-y-1.5">
      <h3 className="text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">Locking Wheel Nut Removal</h3>
      <p className="text-gray-400 text-[13px] leading-[18px]">Specialist inverse extraction tools remove rounded, damaged, or lost key locking lugs without harming premium rims.</p>
      <div className="pt-1 flex items-center gap-1.5 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <Wrench className="h-[16px] w-[16px]" />
                        Non-Destructive Guarantee
                      </div>
      </div>
      </div>
      {/* Service 4 */}
      <div className="bg-primary/60 backdrop-blur-md p-4 rounded-2xl flex gap-4 items-start shadow-md hover:bg-primary/60 transition-colors">
      <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
      <Image src="/gallery-evening-home-visit.webp" alt="Mobile tyre fitting vehicle at British roadside" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="space-y-1.5">
      <h3 className="text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">Home &amp; Workplace Fitting</h3>
      <p className="text-gray-400 text-[13px] leading-[18px]">Book scheduled seasonal shifts, run-flat replacements, or multi-vehicle fleet reviews directly at your Stretford property.</p>
      <div className="pt-1 flex items-center gap-1.5 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <Clock className="h-[16px] w-[16px]" />
                        Exact Time Slots Available
                      </div>
      </div>
      </div>
      </div>
      </section>
      {/* HOW IT WORKS: 5-STEP VERTICAL PROGRESSION */}
      <section className="space-y-6" id="process">
      <div className="space-y-1">
      <span className="text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider">System Workflow</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">How Stretford Dispatch Works</h2>
      </div>
      <div className="bg-primary/60 backdrop-blur-md p-6 rounded-2xl space-y-6">
      <div className="flex gap-4 items-start">
      <div className="w-9 h-9 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center shrink-0">1</div>
      <div className="space-y-1">
      <div className="text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">Initial Contact &amp; Location Fix</div>
      <p className="text-gray-400 text-[13px] leading-[18px]">Call 0800 999 2470 or WhatsApp your live Stretford street pin, whether stranded on Edge Lane or parked on your private drive.</p>
      </div>
      </div>
      <div className="flex gap-4 items-start">
      <div className="w-9 h-9 rounded-full bg-primary/80 text-gray-400 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center shrink-0">2</div>
      <div className="space-y-1">
      <div className="text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">Tyre Specification &amp; Live Stock Check</div>
      <p className="text-gray-400 text-[13px] leading-[18px]">Provide your vehicle registration or sidewall metrics (e.g. 225/45 R18). We pull matched budget, mid-range, or premium inventory instantly.</p>
      </div>
      </div>
      <div className="flex gap-4 items-start">
      <div className="w-9 h-9 rounded-full bg-primary/80 text-gray-400 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center shrink-0">3</div>
      <div className="space-y-1">
      <div className="text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">Patrol Van En Route</div>
      <p className="text-gray-400 text-[13px] leading-[18px]">The nearest Trafford mobile workshop is locked to your callout with real-time ETA updates (average arrival 25–40 minutes).</p>
      </div>
      </div>
      <div className="flex gap-4 items-start">
      <div className="w-9 h-9 rounded-full bg-primary/80 text-gray-400 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center shrink-0">4</div>
      <div className="space-y-1">
      <div className="text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">Precision Mount, Balance &amp; Pressure Check</div>
      <p className="text-gray-400 text-[13px] leading-[18px]">Technician removes the damaged tyre, installs the replacement, calibrates high-speed wheel balance, and installs new rubber valves.</p>
      </div>
      </div>
      <div className="flex gap-4 items-start">
      <div className="w-9 h-9 rounded-full bg-primary/80 text-gray-400 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center shrink-0">5</div>
      <div className="space-y-1">
      <div className="text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">Contactless Payment &amp; Safe Drive-Off</div>
      <p className="text-gray-400 text-[13px] leading-[18px]">Inspect the completed wheel. Settle via mobile card reader (chip, pin, contactless) with digital invoice issued instantly.</p>
      </div>
      </div>
      </div>
      </section>
      {/* REAL LOCAL JOB EXAMPLE */}
      <section className="bg-primary/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl" id="incident">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
      <div className="md:col-span-5 relative min-h-[220px]">
      <Image src="/gallery-precision-care.webp" alt="Real local tyre job in Stretford" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute top-3 left-3 bg-secondary text-primary text-[11px] leading-[14px] tracking-[0.06em] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider font-bold">
                      Case Logged
                    </div>
      </div>
      <div className="md:col-span-7 p-6 space-y-4">
      <div className="space-y-1">
      <div className="text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">Recent Field Dispatch</div>
      <h3 className="text-white font-heading text-[20px] leading-[26px] font-bold">Volkswagen Passat — Barton Road, Stretford</h3>
      </div>
      <p className="text-gray-400 text-[15px] leading-[24px]">
                      Driver suffered a heavy sidewall rupture against a granite kerb near the Barton Road turnoff during evening rain. With no spare wheel in the boot, the vehicle was immobilized in an active bus lane.
                    </p>
      <div className="grid grid-cols-3 gap-2 bg-primary-dark p-3 rounded-xl text-center">
      <div>
      <span className="block text-gray-400 text-[11px] uppercase">Fitted Tyre</span>
      <span className="text-white font-heading text-[15px] leading-[24px] font-bold">235/40 R19</span>
      </div>
      <div>
      <span className="block text-gray-400 text-[11px] uppercase">Dispatch Time</span>
      <span className="text-secondary font-heading text-[15px] leading-[24px] font-bold">19 Mins</span>
      </div>
      <div>
      <span className="block text-gray-400 text-[11px] uppercase">On-Site Turn</span>
      <span className="text-emerald-400 font-heading text-[15px] leading-[24px] font-bold">27 Mins</span>
      </div>
      </div>
      <div className="flex items-center gap-2 text-white text-[13px] leading-[18px]">
      <ShieldCheck className="text-emerald-400 h-[18px] w-[18px]" />
      <span>Alloy bead cleaned, balanced, and driver returned safely to road within 46 total minutes.</span>
      </div>
      </div>
      </div>
      </section>
      {/* FAQS: STRETFORD SPECIFIC */}
      <section className="space-y-6" id="faq">
      <div className="space-y-1">
      <span className="text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider">Local Knowledge</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">Stretford Driver Questions</h2>
      </div>
      <div className="space-y-3">
      <details className="group bg-primary-dark p-4 rounded-xl [&amp;_summary::-webkit-details-marker]:none">
      <summary className="flex justify-between items-center cursor-pointer text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">
      <span>Can your vans change tyres on narrow Stretford residential terraces?</span>
      <ChevronDown className="text-gray-400 transition group-open:rotate-180 h-5 w-5" />
      </summary>
      <p className="text-gray-400 text-[15px] leading-[24px] mt-3">
                      Yes. Our Mercedes Sprinter and Ford Transit workshop units are outfitted with low-profile slide-out compressors and short-throw bead breakers. We routinely operate in constrained terraced street parking off Barton Road, Derbyshire Lane, and near Longford Park without interrupting traffic flow.
                    </p>
      </details>
      <details className="group bg-primary-dark p-4 rounded-xl [&amp;_summary::-webkit-details-marker]:none">
      <summary className="flex justify-between items-center cursor-pointer text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">
      <span>How fast can you reach the A56 Chester Road corridor?</span>
      <ChevronDown className="text-gray-400 transition group-open:rotate-180 h-5 w-5" />
      </summary>
      <p className="text-gray-400 text-[15px] leading-[24px] mt-3">
                      We position roaming mobile fitters continuously across the Trafford area. For Chester Road and the M60 Junction 7/8 interchanges, our average emergency roadside response is between 25 and 40 minutes, 24 hours a day.
                    </p>
      </details>
      <details className="group bg-primary-dark p-4 rounded-xl [&amp;_summary::-webkit-details-marker]:none">
      <summary className="flex justify-between items-center cursor-pointer text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">
      <span>Can you repair my puncture instead of putting on a new tyre?</span>
      <ChevronDown className="text-gray-400 transition group-open:rotate-180 h-5 w-5" />
      </summary>
      <p className="text-gray-400 text-[15px] leading-[24px] mt-3">
                      Whenever puncture damage is isolated to the central three-quarters of the tread and does not exceed 6mm in diameter (per British Standard BS AU 159), our engineers will execute an on-site vulcanized repair to save you the expense of a new replacement.
                    </p>
      </details>
      <details className="group bg-primary-dark p-4 rounded-xl [&amp;_summary::-webkit-details-marker]:none">
      <summary className="flex justify-between items-center cursor-pointer text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">
      <span>What if I have lost or stripped my locking wheel nut key?</span>
      <ChevronDown className="text-gray-400 transition group-open:rotate-180 h-5 w-5" />
      </summary>
      <p className="text-gray-400 text-[15px] leading-[24px] mt-3">
                      All our mobile units carry specialist heavy-duty reverse-threaded locking nut extraction sleeves. We remove damaged, overtightened, or missing-key lug nuts on site without scratching or marring your alloy wheel finishes.
                    </p>
      </details>
      </div>
      </section>
      </main>
      </div>
      </div>
      {/* RELATED LOCATIONS STRIP (FULL WIDTH) */}
      <section className="w-full bg-primary-dark py-8">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 space-y-3">
      <div className="text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-center md:text-left">
              Connected Greater Manchester Coverage Hubs
            </div>
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-3 text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">
      <span className="bg-primary/60 px-4 py-2 rounded-full hover:bg-primary/80 transition-colors cursor-default">Trafford Park</span>
      <span className="text-gray-400/40">/</span>
      <span className="bg-primary/60 px-4 py-2 rounded-full hover:bg-primary/80 transition-colors cursor-default">Urmston</span>
      <span className="text-gray-400/40">/</span>
      <span className="bg-primary/60 px-4 py-2 rounded-full hover:bg-primary/80 transition-colors cursor-default">Sale</span>
      <span className="text-gray-400/40">/</span>
      <span className="bg-primary/60 px-4 py-2 rounded-full hover:bg-primary/80 transition-colors cursor-default">Chorlton</span>
      <span className="text-gray-400/40">/</span>
      <span className="bg-primary/60 px-4 py-2 rounded-full hover:bg-primary/80 transition-colors cursor-default">Manchester City Centre</span>
      <span className="text-gray-400/40">/</span>
      <span className="bg-accent/20 text-gray-400 px-4 py-2 rounded-full text-[11px] leading-[14px] tracking-[0.06em] font-bold font-semibold">Mobile Tyre Fitting UK</span>
      </div>
      </div>
      </section>
      {/* FINAL CTA BANNER (GOLD BAR) */}
      <section className="w-full bg-secondary text-primary py-10 px-4 md:px-8 shadow-2xl">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="space-y-1 text-center md:text-left">
      <div className="inline-flex items-center gap-1.5 bg-primary text-secondary px-3 py-1 rounded-full text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider font-bold">
      <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
                24/7 Stretford Emergency Line
              </div>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-primary font-black">
                Stranded With a Punctured Tyre in Stretford?
              </h2>
      <p className="text-[15px] leading-[24px] text-primary/80 max-w-xl">
                Don&apos;t wait hours for a breakdown recovery flatbed. Our mobile tyre workshops replace or repair tyres on the spot wherever you are.
              </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
      <a className="w-full sm:w-auto bg-primary-dark hover:bg-black text-white font-heading text-[20px] leading-[26px] font-bold font-bold px-8 py-4 rounded-full shadow-2xl flex items-center justify-center gap-3 transition-transform active:scale-95" href="tel:08009992470">
      <PhoneCall className="text-secondary h-[24px] w-[24px]" />
                0800 999 2470
              </a>
      </div>
      </div>
      </section>
      </div>
    </main>
  );
}
