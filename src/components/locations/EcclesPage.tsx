import Image from "next/image";
import { Clock, CreditCard, MapPin, MessageCircle, Navigation, PhoneCall, Route, Shield, ShieldCheck, Timer, Truck, Wrench } from "lucide-react";

export default function EcclesPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[580px] lg:min-h-[640px] flex items-end justify-center bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/hero-section-images-936x527.webp')" }}>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-transparent"></div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-margin-mobile md:px-margin pt-28 pb-12 flex flex-col items-center text-center">
      {/* Live Status Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold mb-4 shadow-md">
      <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
      <span>24/7 RAPID DISPATCH EN ROUTE</span>
      </div>
      {/* Main Headline */}
      <h1 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[56px] md:leading-[64px] md:tracking-[-0.02em] md:font-black text-white max-w-4xl">
              24/7 Mobile Tyre Fitting in Eccles
            </h1>
      {/* Subtitle */}
      <p className="mt-4 text-[15px] leading-[24px] md:text-[18px] md:leading-[28px] text-gray-400 max-w-2xl">
              Emergency mobile tyre replacement across M60 Junctions 10 &amp; 11, M602 Eccles interchange, and Liverpool Road (A57). 25–40 min rapid on-scene arrival.
            </p>
      {/* CTA Cluster */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
      <a className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider hover:bg-secondary-hover transition-transform active:scale-95 shadow-xl" href="tel:07955266077">
      <PhoneCall className="h-5 w-5" />
      <span>Call 07955 266 077</span>
      </a>
      <a className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary/80 text-white backdrop-blur-md font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold hover:bg-primary transition-all shadow-md" href="https://wa.me/448009992470?text=I%20need%20urgent%20mobile%20tyre%20assistance%20in%20Eccles">
      <MessageCircle className="text-accent h-5 w-5" />
      <span>WhatsApp Dispatch</span>
      </a>
      </div>
      {/* Micro Trust Indicator */}
      <div className="mt-6 flex items-center gap-2 text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <ShieldCheck className="text-secondary h-[14px] w-[14px]" />
      <span>M60 • M602 • Barton High Level Bridge Incident Response Units Ready</span>
      </div>
      </div>
      </section>
      {/* 2. STATS STRIP */}
      <section className="w-full bg-primary-dark py-8">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter-mobile md:gap-gutter">
      <div className="p-5 rounded-2xl bg-primary-dark shadow-sm flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
      <Timer className="h-[30px] w-[30px]" />
      </div>
      <div>
      <div className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Average Arrival</div>
      <div className="font-heading text-[20px] leading-[26px] font-bold text-white tracking-wide">25–40 Mins</div>
      </div>
      </div>
      <div className="p-5 rounded-2xl bg-primary-dark shadow-sm flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
      <Route className="h-[30px] w-[30px]" />
      </div>
      <div>
      <div className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Key Motorways</div>
      <div className="font-heading text-[20px] leading-[26px] font-bold text-white tracking-wide">M60, M602 &amp; A57</div>
      </div>
      </div>
      <div className="p-5 rounded-2xl bg-primary-dark shadow-sm flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
      <Clock className="h-[30px] w-[30px]" />
      </div>
      <div>
      <div className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Emergency Cover</div>
      <div className="font-heading text-[20px] leading-[26px] font-bold text-white tracking-wide">24/7/365 Continuous</div>
      </div>
      </div>
      <div className="p-5 rounded-2xl bg-primary-dark shadow-sm flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
      <Truck className="h-[30px] w-[30px]" />
      </div>
      <div>
      <div className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Service Fleet</div>
      <div className="font-heading text-[20px] leading-[26px] font-bold text-white tracking-wide">100% Mobile Van Rigs</div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 3. LOCAL INTRO */}
      <section className="w-full bg-primary-dark py-space-xl">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
      <div className="p-8 md:p-12 rounded-2xl bg-primary/60 shadow-md">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold mb-4">
      <Navigation className="h-[14px] w-[14px]" />
      <span>GREATER MANCHESTER ARTERIAL LOGISTICS</span>
      </div>
      <h2 className="font-heading text-[22px] leading-[28px] font-bold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white mb-6">
                Eccles Junction &amp; Motorway Incident Tyre Response
              </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter text-gray-400">
      <p>
                  Positioned right at the high-velocity junction of Greater Manchester&apos;s critical ring roads, Eccles functions as an intensive transit corridor. Between the notorious Barton High-Level Bridge crosswinds on the M60, the rapid commuter bottleneck entering the M602, and the round-the-clock industrial logistics feeding into Trafford Park and Liverpool Road (A57), tyre punctures and unexpected blowouts demand immediate, safety-certified intervention.
                </p>
      <p>
                  Our dedicated Eccles roadside dispatch units are strategically stationed near M60 Junctions 10 and 11. Fully rigged with high-capacity digital balancers, heavy pneumatic jacks, commercial bead-breakers, and emergency motorway lighting, our technicians arrive on scene fast to get stranded commuters, hauliers, and private motorists back moving with minimal downtime.
                </p>
      </div>
      </div>
      </div>
      </section>
      {/* 4. SERVICES 2X2 GRID */}
      <section className="w-full bg-primary-dark py-space-xl">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
      <div className="flex flex-col items-start mb-8">
      <div className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 tracking-widest uppercase mb-1">On-Demand Capabilities</div>
      <h2 className="font-heading text-[22px] leading-[28px] font-bold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white">Rapid Mobile Tyre Services</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      {/* Service 1 */}
      <div className="rounded-2xl overflow-hidden bg-primary/60 shadow-sm flex flex-col">
      <div className="relative h-60 w-full overflow-hidden bg-primary">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Emergency Roadside Tyre Fitting on Motorway" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
      <div>
      <div className="inline-block px-2.5 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold mb-3">HIGH SPEED • MOTORWAY CERTIFIED</div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold md:text-[30px] md:leading-[38px] md:font-bold text-white mb-2">Emergency Roadside Fitting</h3>
      <p className="text-gray-400">
                      Instant dispatch to hard shoulders, slip roads, and live carriageways along the M60, M602, and A57. Equipped with amber beacons, high-visibility perimeter setups, and rapid rim mounts.
                    </p>
      </div>
      <div className="mt-6 flex items-center justify-between">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary">Response within 25–40 mins</span>
      <a className="p-2 rounded-full bg-primary/80 text-white hover:bg-secondary hover:text-primary transition-colors" href="tel:07955266077">
      <PhoneCall className="h-5 w-5" />
      </a>
      </div>
      </div>
      </div>
      {/* Service 2 */}
      <div className="rounded-2xl overflow-hidden bg-primary/60 shadow-sm flex flex-col">
      <div className="relative h-60 w-full overflow-hidden bg-primary">
      <Image src="/gallery-roadside-fitting.webp" alt="BS AU 159 Puncture Repair inspection gauge" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
      <div>
      <div className="inline-block px-2.5 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold mb-3">BRITISH SAFETY STANDARDS</div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold md:text-[30px] md:leading-[38px] md:font-bold text-white mb-2">BS AU 159 Puncture Repair</h3>
      <p className="text-gray-400">
                      Full interior carcass inspection and combi-plug repairs on site whenever tread integrity allows. Safe, regulatory-compliant solutions that eliminate unnecessary tyre replacements.
                    </p>
      </div>
      <div className="mt-6 flex items-center justify-between">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary">Certified Tread Fix</span>
      <a className="p-2 rounded-full bg-primary/80 text-white hover:bg-secondary hover:text-primary transition-colors" href="tel:07955266077">
      <PhoneCall className="h-5 w-5" />
      </a>
      </div>
      </div>
      </div>
      {/* Service 3 */}
      <div className="rounded-2xl overflow-hidden bg-primary/60 shadow-sm flex flex-col">
      <div className="relative h-60 w-full overflow-hidden bg-primary">
      <Image src="/gallery-home-callout.webp" alt="Locking Wheel Nut Extraction using specialized tooling" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
      <div>
      <div className="inline-block px-2.5 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold mb-3">DAMAGE-FREE EXTRACTION</div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold md:text-[30px] md:leading-[38px] md:font-bold text-white mb-2">Locking Wheel Nut Extraction</h3>
      <p className="text-gray-400">
                      Lost, stripped, or overtightened security keys? Our vans carry heavy-duty inverse-threaded extraction tools to cleanly remove rounded locking nuts without damaging valuable alloys.
                    </p>
      </div>
      <div className="mt-6 flex items-center justify-between">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary">100% Removal Rate</span>
      <a className="p-2 rounded-full bg-primary/80 text-white hover:bg-secondary hover:text-primary transition-colors" href="tel:07955266077">
      <PhoneCall className="h-5 w-5" />
      </a>
      </div>
      </div>
      </div>
      {/* Service 4 */}
      <div className="rounded-2xl overflow-hidden bg-primary/60 shadow-sm flex flex-col">
      <div className="relative h-60 w-full overflow-hidden bg-primary">
      <Image src="/gallery-evening-callout.webp" alt="Home and commercial fleet tyre fitting van" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
      <div>
      <div className="inline-block px-2.5 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold mb-3">FLEET • RESIDENTIAL • SITE</div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold md:text-[30px] md:leading-[38px] md:font-bold text-white mb-2">Home &amp; Commercial Fitting</h3>
      <p className="text-gray-400">
                      Scheduled and priority mobile tyre installations directly at your home driveway, workplace yard, or commercial distribution centre across Eccles, Trafford, and Salford.
                    </p>
      </div>
      <div className="mt-6 flex items-center justify-between">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary">Cars, 4x4s, Vans</span>
      <a className="p-2 rounded-full bg-primary/80 text-white hover:bg-secondary hover:text-primary transition-colors" href="tel:07955266077">
      <PhoneCall className="h-5 w-5" />
      </a>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 5. ROADS & NEARBY AREAS */}
      <section className="w-full bg-primary-dark py-space-xl">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
      <div className="rounded-2xl bg-primary-dark p-8 md:p-12 shadow-md">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
      <div>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold mb-4">
      <MapPin className="h-[14px] w-[14px]" />
      <span>RAPID CORRIDORS</span>
      </div>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white mb-4">Key Eccles Arteries Covered</h2>
      <p className="text-gray-400 mb-6">
                    Our mobile technicians operate in constant proximity to the most congested junctions in western Greater Manchester:
                  </p>
      <ul className="space-y-3 text-white">
      <li className="flex items-center gap-3">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span><strong className="text-white font-bold">M60 J10 Barton:</strong> Direct coverage for Trafford Centre approaches and the high-level bridge.</span>
      </li>
      <li className="flex items-center gap-3">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span><strong className="text-white font-bold">M60 J11 Eccles:</strong> Rapid access to the Regent Road / M602 feeder bottleneck.</span>
      </li>
      <li className="flex items-center gap-3">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span><strong className="text-white font-bold">M602 Motorway:</strong> Emergency coverage connecting Manchester city centre and Salford.</span>
      </li>
      <li className="flex items-center gap-3">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span><strong className="text-white font-bold">A57 Liverpool Road:</strong> Barton Aerodrome logistics, Peel Green, and industrial zones.</span>
      </li>
      </ul>
      </div>
      <div className="bg-primary/60 p-6 rounded-xl flex flex-col justify-between">
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-3">Adjacent Boroughs &amp; Districts</h3>
      <p className="text-gray-400 mb-6">
                      Mobile support vans constantly patrol surrounding postcodes, delivering guaranteed sub-40 minute arrival times across:
                    </p>
      <div className="flex flex-wrap gap-2">
      <span className="px-4 py-2 rounded-full bg-primary/80 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold">Salford</span>
      <span className="px-4 py-2 rounded-full bg-primary/80 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold">Worsley</span>
      <span className="px-4 py-2 rounded-full bg-primary/80 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold">Trafford Park</span>
      <span className="px-4 py-2 rounded-full bg-primary/80 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold">Urmston</span>
      <span className="px-4 py-2 rounded-full bg-primary/80 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold">Irlam</span>
      <span className="px-4 py-2 rounded-full bg-primary/80 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold">Patricroft</span>
      <span className="px-4 py-2 rounded-full bg-primary/80 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold">Monton</span>
      </div>
      </div>
      <div className="mt-8 pt-6 bg-primary/30 p-4 rounded-lg flex items-center justify-between">
      <span className="text-gray-400">Stuck near an Eccles interchange?</span>
      <a className="text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold hover:underline" href="tel:07955266077">
                      Call Emergency Line →
                    </a>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 6. HOW IT WORKS RIBBON */}
      <section className="w-full bg-primary-dark py-space-xl">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
      <div className="text-center mb-12">
      <div className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 tracking-widest uppercase mb-1">5 Simple Steps</div>
      <h2 className="font-heading text-[22px] leading-[28px] font-bold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white">How Our Dispatch Process Works</h2>
      </div>
      <div className="relative">
      {/* Connecting Line for desktop */}
      <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary -translate-y-8 z-0"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
      {/* Step 1 */}
      <div className="p-6 rounded-2xl bg-primary/60 shadow-sm flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-secondary text-primary font-heading text-[20px] leading-[26px] font-bold flex items-center justify-center mb-4 shadow-md">
                    1
                  </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Immediate Call</h3>
      <p className="text-gray-400">Contact our 24/7 hotline with your vehicle registration and exact location.</p>
      </div>
      {/* Step 2 */}
      <div className="p-6 rounded-2xl bg-primary/60 shadow-sm flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-primary text-white font-heading text-[20px] leading-[26px] font-bold flex items-center justify-center mb-4 shadow-md">
                    2
                  </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Tyre Identification</h3>
      <p className="text-gray-400">We cross-reference tyre sizes and match premium, mid-range, or budget options.</p>
      </div>
      {/* Step 3 */}
      <div className="p-6 rounded-2xl bg-primary/60 shadow-sm flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-accent text-white font-heading text-[20px] leading-[26px] font-bold flex items-center justify-center mb-4 shadow-md">
                    3
                  </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Van Dispatch</h3>
      <p className="text-gray-400">Closest operational van departs toward Eccles with real-time ETA updates.</p>
      </div>
      {/* Step 4 */}
      <div className="p-6 rounded-2xl bg-primary/60 shadow-sm flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-primary text-white font-heading text-[20px] leading-[26px] font-bold flex items-center justify-center mb-4 shadow-md">
                    4
                  </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">On-Site Fitting</h3>
      <p className="text-gray-400">Safe wheel swap, electronic balancing, bead seating, and safety torque check.</p>
      </div>
      {/* Step 5 */}
      <div className="p-6 rounded-2xl bg-primary/60 shadow-sm flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-secondary text-primary font-heading text-[20px] leading-[26px] font-bold flex items-center justify-center mb-4 shadow-md">
                    5
                  </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Back on the Road</h3>
      <p className="text-gray-400">Pay safely via chip &amp; pin, contactless, or business account on site.</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 7. REAL LOCAL JOB EXAMPLE */}
      <section className="w-full bg-primary-dark py-space-xl">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
      <div className="relative rounded-2xl bg-primary/60 overflow-hidden shadow-lg">
      {/* Folder Tab Header */}
      <div className="bg-primary/80 px-6 py-3 inline-flex items-center gap-3 rounded-br-2xl">
      <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">VERIFIED CALLOUT // ECCLES M60 J11</span>
      </div>
      <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      <div className="relative md:col-span-4 rounded-xl overflow-hidden shadow-md">
      <Image src="/gallery-evening-home-visit.webp" alt="Technician fitting tyre on Ford Transit Courier" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-56 md:h-64 object-cover" />
      </div>
      <div className="md:col-span-8 flex flex-col justify-center">
      <div className="flex flex-wrap items-center gap-3 mb-3">
      <span className="px-3 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">COMMERCIAL VAN RAPID FIT</span>
      <span className="text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold">Elapsed Time: 31 Mins</span>
      </div>
      <h3 className="font-heading text-[30px] leading-[38px] font-bold text-white mb-3">
                    M60 J11 Slip Road Blowout — Ford Transit Courier
                  </h3>
      <p className="text-gray-400 mb-6">
                    A delivery driver experienced a complete tread separation on the northbound approach into Eccles during morning peak freight hours. Our technician arrived in 19 minutes with amber beacons engaged, positioned a safe traffic zone, and mounted a fresh <strong className="text-white">195/65 R15 commercial C-ply tyre</strong> with digital spin balancing in under 12 minutes. Total roadside downtime: 31 minutes.
                  </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 bg-primary-dark/50 p-4 rounded-xl">
      <div>
      <div className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Vehicle</div>
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Ford Transit Courier</div>
      </div>
      <div>
      <div className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Fitted Tyre</div>
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">195/65 R15 95T C</div>
      </div>
      <div>
      <div className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Response Time</div>
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary">19 Minutes</div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 8. FAQS */}
      <section className="w-full bg-primary-dark py-space-xl">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
      <div className="text-center mb-12">
      <div className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 tracking-widest uppercase mb-1">Common Inquiries</div>
      <h2 className="font-heading text-[22px] leading-[28px] font-bold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white">Eccles Tyre Assistance FAQs</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      {/* Q1 */}
      <div className="p-6 md:p-8 rounded-2xl bg-primary/60 shadow-sm">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-3 flex items-start gap-3">
      <Shield className="text-secondary flex-shrink-0 h-5 w-5" />
      <span>Are you authorized to fit tyres on the M60 or M602 hard shoulder?</span>
      </h3>
      <p className="text-gray-400">
                  Yes. Our vans and drivers adhere strictly to National Highways Sector Schemes for roadside safety. We operate equipped with chapter 8 chevron livery, rooftop 360-degree flashing beacons, and advanced warning equipment to safely secure motorway shoulders and slip roads.
                </p>
      </div>
      {/* Q2 */}
      <div className="p-6 md:p-8 rounded-2xl bg-primary/60 shadow-sm">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-3 flex items-start gap-3">
      <MapPin className="text-secondary flex-shrink-0 h-5 w-5" />
      <span>How fast can a van reach me near Junction 10 or 11?</span>
      </h3>
      <p className="text-gray-400">
                  Under regular conditions, our average arrival window is between 25 and 40 minutes across Eccles, Patricroft, Peel Green, and Barton. We route the closest active mobile unit direct to your GPS pin.
                </p>
      </div>
      {/* Q3 */}
      <div className="p-6 md:p-8 rounded-2xl bg-primary/60 shadow-sm">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-3 flex items-start gap-3">
      <Wrench className="text-secondary flex-shrink-0 h-5 w-5" />
      <span>What if my locking wheel nut key is broken or missing?</span>
      </h3>
      <p className="text-gray-400">
                  Not a problem. Each Eccles service van is supplied with specialist locking wheel nut removal toolkits. We can extract damaged, rounded, or keyless security lugs on site without causing cosmetic damage to your alloy rims.
                </p>
      </div>
      {/* Q4 */}
      <div className="p-6 md:p-8 rounded-2xl bg-primary/60 shadow-sm">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-3 flex items-start gap-3">
      <CreditCard className="text-secondary flex-shrink-0 h-5 w-5" />
      <span>What payment methods do technicians take at the roadside?</span>
      </h3>
      <p className="text-gray-400">
                  All fleet vans carry secure chip-and-pin and contactless card terminals capable of accepting Visa, Mastercard, and American Express. We also offer streamlined invoice terms for registered commercial fleets.
                </p>
      </div>
      </div>
      </div>
      </section>
      {/* 9. RELATED LOCATIONS */}
      <section className="w-full bg-primary-dark py-space-lg">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
      <div className="p-6 md:p-8 rounded-2xl bg-primary-dark flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-1">Serving Greater Manchester &amp; Adjacent Areas</h3>
      <p className="text-gray-400">Explore immediate mobile coverage in adjacent boroughs:</p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
      <a className="px-4 py-2 rounded-full bg-primary/60 text-white hover:text-secondary text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-colors" href="#">Salford →</a>
      <a className="px-4 py-2 rounded-full bg-primary/60 text-white hover:text-secondary text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-colors" href="#">Worsley →</a>
      <a className="px-4 py-2 rounded-full bg-primary/60 text-white hover:text-secondary text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-colors" href="#">Trafford Park →</a>
      <a className="px-4 py-2 rounded-full bg-primary/60 text-white hover:text-secondary text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-colors" href="#">Urmston →</a>
      <a className="px-4 py-2 rounded-full bg-primary/60 text-white hover:text-secondary text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-colors" href="#">Irlam →</a>
      </div>
      </div>
      </div>
      </section>
      {/* 10. FINAL CTA BANNER */}
      <section className="w-full bg-primary-dark py-space-xl">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
      <div className="p-8 md:p-14 rounded-2xl bg-gradient-to-r from-primary/60 to-primary/80 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
      <div className="flex-1 text-center lg:text-left">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold mb-4">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span>24/7 ROADSIDE READINESS ACTIVE</span>
      </div>
      <h2 className="font-heading text-[22px] leading-[28px] font-bold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white mb-3">
                  Stranded in Eccles or on the M60 / M602?
                </h2>
      <p className="text-gray-400 max-w-xl">
                  Our dispatch centre is manned 24 hours a day, 365 days a year. Technicians ready for immediate on-scene response with premium, run-flat, and commercial van tyres.
                </p>
      <div className="mt-4 flex flex-wrap gap-4 text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">
      <span>• Average ETA 25–40 Mins</span>
      <span>• Locking Nut Removal</span>
      <span>• All Tyre Brands Carried</span>
      </div>
      </div>
      <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto flex-shrink-0 items-center">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-secondary text-primary font-heading text-[20px] leading-[26px] font-bold uppercase tracking-wider hover:bg-secondary-hover transition-transform active:scale-95 shadow-2xl" href="tel:07955266077">
      <PhoneCall className="h-5 w-5" />
      <span>Call 07955 266 077</span>
      </a>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Toll-Free • Instant Technician Dispatch</span>
      </div>
      </div>
      </div>
      </section>
    </main>
  );
}
