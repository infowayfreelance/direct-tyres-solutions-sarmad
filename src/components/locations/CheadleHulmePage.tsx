import Image from "next/image";
import { AlertTriangle, ArrowRight, Clock, CreditCard, Gauge, HelpCircle, MapPin, MessageCircle, Navigation, PhoneCall, Route, Shield, ShieldCheck } from "lucide-react";

export default function CheadleHulmePage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[580px] lg:min-h-[640px] flex items-center justify-center bg-primary-dark overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/hero-section-images-936x527.webp')" }}></div>
      {/* Scrim & Gradient Overlays */}
      <div className="absolute inset-0 bg-primary-dark/80 backdrop-brightness-75"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/60 to-transparent"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-margin-mobile lg:px-margin text-center py-space-xl flex flex-col items-center">
      {/* Status Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/90 text-white shadow-md mb-6">
      <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-white">Live Emergency Dispatch: Cheshire &amp; A34 Corridor</span>
      </div>
      <h1 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold lg:text-[56px] lg:leading-[64px] lg:tracking-[-0.02em] lg:font-black text-white mb-4 max-w-4xl drop-shadow-lg">
              24/7 Mobile Tyre Fitting in <span className="text-secondary">Cheadle Hulme</span>
            </h1>
      <p className="text-[18px] leading-[28px] text-white/90 max-w-2xl mx-auto mb-8 font-normal">
              Immediate roadside tyre replacement across A34 Junction 19 (Tabley Interchange), A555, and rural M60 connectors. Vans fully stocked and mobile within 25–40 minutes.
            </p>
      {/* CTA Cluster */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase hover:bg-secondary transition-all duration-200 shadow-xl active:scale-95 group" href="tel:07955266077">
      <PhoneCall className="text-primary group-hover:animate-bounce h-5 w-5" fill="currentColor" strokeWidth={0} />
                Call 07955 266 077
              </a>
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary/80 text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold hover:bg-primary transition-all duration-200 shadow-lg active:scale-95 backdrop-blur-md" href="https://wa.me/448009992470?text=I%20need%20urgent%20mobile%20tyre%20assistance%20in%20Knutsford" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="text-secondary h-5 w-5" />
                WhatsApp Dispatch
              </a>
      </div>
      {/* Live Reassurance Metrics */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-400 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <span className="flex items-center gap-1.5"><Clock className="text-secondary h-[14px] w-[14px]" /> Average ETA: 25-40 Mins</span>
      <span className="flex items-center gap-1.5"><ShieldCheck className="text-secondary h-[14px] w-[14px]" /> All Major Sizes Carried</span>
      <span className="flex items-center gap-1.5"><CreditCard className="text-secondary h-[14px] w-[14px]" /> Contactless Roadside Payment</span>
      </div>
      </div>
      </section>
      {/* STATS STRIP */}
      <section className="w-full bg-primary-dark py-6">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {/* Stat 1 */}
      <div className="bg-primary/60 backdrop-blur-md p-5 rounded-2xl flex flex-col justify-center shadow-sm">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-gray-400">Rapid Dispatch</span>
      <span className="font-heading text-[30px] leading-[38px] font-bold text-secondary mt-1">25-40 Mins</span>
      <span className="text-[13px] leading-[18px] text-white/75 mt-0.5">Average Cheadle Hulme Arrival</span>
      </div>
      {/* Stat 2 */}
      <div className="bg-primary/60 backdrop-blur-md p-5 rounded-2xl flex flex-col justify-center shadow-sm">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-gray-400">Crucial Arteries</span>
      <span className="font-heading text-[30px] leading-[38px] font-bold text-white mt-1">A34 &amp; A555</span>
      <span className="text-[13px] leading-[18px] text-white/75 mt-0.5">J19 Tabley, M60 &amp; A34</span>
      </div>
      {/* Stat 3 */}
      <div className="bg-primary/60 backdrop-blur-md p-5 rounded-2xl flex flex-col justify-center shadow-sm">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-gray-400">Availability</span>
      <span className="font-heading text-[30px] leading-[38px] font-bold text-secondary mt-1">24/7/365</span>
      <span className="text-[13px] leading-[18px] text-white/75 mt-0.5">Zero Out-Of-Hours Delays</span>
      </div>
      {/* Stat 4 */}
      <div className="bg-primary/60 backdrop-blur-md p-5 rounded-2xl flex flex-col justify-center shadow-sm">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-gray-400">Workshop Capacity</span>
      <span className="font-heading text-[30px] leading-[38px] font-bold text-white mt-1">100% Mobile</span>
      <span className="text-[13px] leading-[18px] text-white/75 mt-0.5">Full Fitting Units On Scene</span>
      </div>
      </div>
      </div>
      </section>
      {/* LOCAL INTRO & CONTEXT */}
      <section className="w-full bg-primary-dark py-16">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-7 flex flex-col">
      <div className="inline-flex items-center gap-2 mb-3">
      <span className="w-3 h-0.5 bg-secondary"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary">Strategic Transit Crossroads</span>
      </div>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white mb-5">
                  Cheshire Breakdown Priority: Direct Tyre Solutions Cheadle Hulme
                </h2>
      <p className="text-[15px] leading-[24px] text-white/85 mb-4">
                  Cheadle Hulme serves as one of North West England’s vital transit junctions. Straddling the heavily congested <strong className="text-white font-bold">A34 Junction 19 (Tabley Interchange)</strong> and feeding straight into the <strong className="text-white font-bold">A555 Cheshire trunk lines</strong>, sudden tyre blowouts here can paralyze traffic or strand motorists in hazardous, high-speed situations.
                </p>
      <p className="text-[15px] leading-[24px] text-white/80 mb-6">
                  Whether stranded on a highway deceleration lane, experiencing a sharp pinch-flat across country lanes around Bruntwood Park, or dealing with an unrepairable puncture on the M60 near Toft Road, Direct Tyre Solutions eliminates the need for expensive recovery trucks. Our specialized mobile fitting vans deploy immediately, bringing industrial-grade tire mounting, electronic dynamic balancing, and certified fitments directly to your GPS coordinates.
                </p>
      <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-2 bg-primary/60 px-4 py-2.5 rounded-xl">
      <MapPin className="text-accent h-5 w-5" fill="currentColor" strokeWidth={0} />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Stationed Near A556 &amp; A34 J19</span>
      </div>
      <div className="flex items-center gap-2 bg-primary/60 px-4 py-2.5 rounded-xl">
      <Gauge className="text-secondary h-5 w-5" fill="currentColor" strokeWidth={0} />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Emergency Response Priority</span>
      </div>
      </div>
      </div>
      <div className="lg:col-span-5 relative">
      <div className="relative bg-primary/80 p-6 rounded-2xl shadow-2xl overflow-hidden">
      <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-gray-400">Dispatch Control</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Cheadle Hulme Grid Readiness</h3>
      </div>
      <span className="px-2.5 py-1 rounded-full bg-secondary/20 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold">Active Fleet</span>
      </div>
      <ul className="space-y-3 text-[13px] leading-[18px]">
      <li className="flex items-start gap-3 bg-primary-dark/60 p-3 rounded-xl">
      <AlertTriangle className="text-secondary h-[18px] w-[18px] mt-0.5" />
      <div>
      <strong className="text-white block">A34 Junction 19 Tabley Roundabout</strong>
      <span className="text-gray-400">Patrolling units stationed within 4 miles of the slip road.</span>
      </div>
      </li>
      <li className="flex items-start gap-3 bg-primary-dark/60 p-3 rounded-xl">
      <Navigation className="text-gray-400 h-[18px] w-[18px] mt-0.5" />
      <div>
      <strong className="text-white block">M60 Cheadle Hulme to Handforth</strong>
      <span className="text-gray-400">Rapid service coverage for commercial and passenger vehicles.</span>
      </div>
      </li>
      <li className="flex items-start gap-3 bg-primary-dark/60 p-3 rounded-xl">
      <Route className="text-secondary h-[18px] w-[18px] mt-0.5" />
      <div>
      <strong className="text-white block">A34 Cheadle Hulme - Chelford Link</strong>
      <span className="text-gray-400">Emergency rural roadside repair equipped with high-vis beacons.</span>
      </div>
      </li>
      </ul>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SERVICES SECTION (2x2 GRID WITH IMAGES) */}
      <section className="w-full bg-primary-dark py-20">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
      <div className="text-center max-w-3xl mx-auto mb-14">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary mb-2 block">Comprehensive Roadside Assistance</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">Rapid Mobile Tyre Services in Cheadle Hulme</h2>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-3">From highway high-speed blowouts to locked alloy wheel removals, our vans carry complete workshop machinery to solve your tyre problem on site.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Service Card 1 */}
      <div className="group bg-primary/60 backdrop-blur-md rounded-2xl overflow-hidden flex flex-col hover:bg-primary/80 transition-all duration-300 shadow-md">
      <div className="h-56 w-full overflow-hidden relative">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Emergency Highway Tyre Replacement" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-80"></div>
      <span className="absolute top-4 left-4 bg-secondary text-primary text-[11px] leading-[14px] tracking-[0.06em] font-bold px-3 py-1 rounded-full uppercase">Priority Response</span>
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-2">Emergency Highway Tyre Replacement</h3>
      <p className="text-[15px] leading-[24px] text-white/80 mb-4">
                      Stranded on the A34 or A555 hard shoulder? Our Class-1 emergency beacon-equipped vans arrive fast, securing the zone and installing OEM-grade tyres suited for your exact vehicle specifications.
                    </p>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Includes laser wheel balancing</span>
      <a className="text-secondary text-[14px] leading-[18px] tracking-[0.02em] font-semibold flex items-center gap-1 hover:underline" href="tel:07955266077">
                      Dispatch <ArrowRight className="h-[14px] w-[14px]" />
      </a>
      </div>
      </div>
      </div>
      {/* Service Card 2 */}
      <div className="group bg-primary/60 backdrop-blur-md rounded-2xl overflow-hidden flex flex-col hover:bg-primary/80 transition-all duration-300 shadow-md">
      <div className="h-56 w-full overflow-hidden relative">
      <Image src="/gallery-roadside-fitting.webp" alt="British Standard Puncture Seal" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-80"></div>
      <span className="absolute top-4 left-4 bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold px-3 py-1 rounded-full uppercase">BS AU 159 Compliant</span>
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-2">British Standard Puncture Seal</h3>
      <p className="text-[15px] leading-[24px] text-white/80 mb-4">
                      Not all punctures require brand new rubber. If tread puncture is within central 70% and within legal speed guidelines, we provide complete internal combination plug-patch repairs immediately.
                    </p>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Tread depth &amp; safety inspection</span>
      <a className="text-secondary text-[14px] leading-[18px] tracking-[0.02em] font-semibold flex items-center gap-1 hover:underline" href="tel:07955266077">
                      Dispatch <ArrowRight className="h-[14px] w-[14px]" />
      </a>
      </div>
      </div>
      </div>
      {/* Service Card 3 */}
      <div className="group bg-primary/60 backdrop-blur-md rounded-2xl overflow-hidden flex flex-col hover:bg-primary/80 transition-all duration-300 shadow-md">
      <div className="h-56 w-full overflow-hidden relative">
      <Image src="/gallery-home-callout.webp" alt="Locking Wheel Nut Removal" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-80"></div>
      <span className="absolute top-4 left-4 bg-primary text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold px-3 py-1 rounded-full uppercase">Damage-Free Guarantee</span>
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-2">Locking Nut Specialized Removal</h3>
      <p className="text-[15px] leading-[24px] text-white/80 mb-4">
                      Lost wheel key or stripped nut pattern? Our mobile technicians use non-destructive specialized torque extraction tools to release seized locking bolts without scratch damage to precious alloy rims.
                    </p>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">MacGard, McGard, BMW &amp; OEM fitments</span>
      <a className="text-secondary text-[14px] leading-[18px] tracking-[0.02em] font-semibold flex items-center gap-1 hover:underline" href="tel:07955266077">
                      Dispatch <ArrowRight className="h-[14px] w-[14px]" />
      </a>
      </div>
      </div>
      </div>
      {/* Service Card 4 */}
      <div className="group bg-primary/60 backdrop-blur-md rounded-2xl overflow-hidden flex flex-col hover:bg-primary/80 transition-all duration-300 shadow-md">
      <div className="h-56 w-full overflow-hidden relative">
      <Image src="/gallery-evening-callout.webp" alt="Driveway &amp; Rural Property Fitting" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-80"></div>
      <span className="absolute top-4 left-4 bg-secondary text-primary text-[11px] leading-[14px] tracking-[0.06em] font-bold px-3 py-1 rounded-full uppercase">Home &amp; Rural Callouts</span>
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-2">Driveway &amp; Rural Property Fitting</h3>
      <p className="text-[15px] leading-[24px] text-white/80 mb-4">
                      Wake up to a flat tyre in Cheadle Hulme, Mere, or Tabley? Avoid driving on damaged rims. We arrive at your home, farm, or workplace driveway, change your tyre cleanly, and dispose of old casings safely.
                    </p>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Zero travel fee surprises</span>
      <a className="text-secondary text-[14px] leading-[18px] tracking-[0.02em] font-semibold flex items-center gap-1 hover:underline" href="tel:07955266077">
                      Dispatch <ArrowRight className="h-[14px] w-[14px]" />
      </a>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* ROADS & REGIONS COVERAGE PANEL */}
      <section className="w-full bg-primary-dark py-14">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
      <div className="bg-primary-dark p-8 lg:p-10 rounded-2xl shadow-xl">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary">Key Network Hubs</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white mt-1">Cheadle Hulme &amp; Cheshire Coverage Corridors</h2>
      </div>
      <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-secondary animate-pulse"></span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white font-semibold">Immediate Dispatch Active</span>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
      <div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-gray-400 mb-3 flex items-center gap-2">
      <Route className="text-secondary h-5 w-5" /> Major Roadways &amp; Motorways
                  </h4>
      <p className="text-[15px] leading-[24px] text-white/85">
                    We operate emergency recovery and fitting vans along <strong className="text-white">A34 Junction 19</strong> (Tabley Roundabout), the <strong className="text-white">A555 (J6 to J9 links)</strong>, <strong className="text-white">M60 Toft Road &amp; Manchester Road</strong>, and the <strong className="text-white">A34 Chelford Road</strong> connecting to Macclesfield.
                  </p>
      </div>
      <div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-gray-400 mb-3 flex items-center gap-2">
      <MapPin className="text-secondary h-5 w-5" /> Surrounding Cheshire Towns &amp; Villages
                  </h4>
      <p className="text-[15px] leading-[24px] text-white/85">
                    Our roving fleet maintains lightning turnaround times for residential, rural, and commercial callouts throughout <strong className="text-white">Cheadle</strong>, <strong className="text-white">Bramhall</strong>, <strong className="text-white">Stockport</strong>, <strong className="text-white">Handforth</strong>, <strong className="text-white">Mere</strong>, and <strong className="text-white">Heald Green</strong>.
                  </p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* HOW IT WORKS (HORIZONTAL RIBBON OF FLAT NUMERALS) */}
      <section className="w-full bg-primary-dark py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
      <div className="text-center max-w-2xl mx-auto mb-16">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary mb-2 block">Streamlined Roadside Protocol</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">How Emergency Fitting Works</h2>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-2">Five painless steps from initial breakdown to safe motoring.</p>
      </div>
      {/* Step ribbon */}
      <div className="relative">
      {/* Connecting Line for desktop */}
      <div className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 bg-primary z-0"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
      {/* Step 01 */}
      <div className="flex flex-col bg-primary/60 p-6 rounded-2xl shadow-md">
      <span className="font-heading text-[56px] leading-[64px] tracking-[-0.02em] font-black text-secondary/30 mb-2 leading-none">01</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Urgent Call</h3>
      <p className="text-[13px] leading-[18px] text-white/75">Dial our 24/7 hotline with your vehicle location and tyre details.</p>
      </div>
      {/* Step 02 */}
      <div className="flex flex-col bg-primary/60 p-6 rounded-2xl shadow-md">
      <span className="font-heading text-[56px] leading-[64px] tracking-[-0.02em] font-black text-secondary/30 mb-2 leading-none">02</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Tyre Match</h3>
      <p className="text-[13px] leading-[18px] text-white/75">We identify OEM specifications (budget, mid-range, or premium).</p>
      </div>
      {/* Step 03 */}
      <div className="flex flex-col bg-primary/60 p-6 rounded-2xl shadow-md">
      <span className="font-heading text-[56px] leading-[64px] tracking-[-0.02em] font-black text-secondary/30 mb-2 leading-none">03</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Van Dispatched</h3>
      <p className="text-[13px] leading-[18px] text-white/75">Our closest technician heads to your exact location with live GPS tracking.</p>
      </div>
      {/* Step 04 */}
      <div className="flex flex-col bg-primary/60 p-6 rounded-2xl shadow-md">
      <span className="font-heading text-[56px] leading-[64px] tracking-[-0.02em] font-black text-secondary/30 mb-2 leading-none">04</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Laser Balance &amp; Fit</h3>
      <p className="text-[13px] leading-[18px] text-white/75">Mobile tyre removal, new tyre mounting, valve replacement &amp; wheel balancing.</p>
      </div>
      {/* Step 05 */}
      <div className="flex flex-col bg-primary/60 p-6 rounded-2xl shadow-md">
      <span className="font-heading text-[56px] leading-[64px] tracking-[-0.02em] font-black text-secondary/30 mb-2 leading-none">05</span>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Contactless Card</h3>
      <p className="text-[13px] leading-[18px] text-white/75">Pay securely by card reader on completion. No hidden roadside surcharge.</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* REAL LOCAL JOB CARD (FOLDER-TAB STYLE) */}
      <section className="w-full bg-primary-dark py-16">
      <div className="max-w-5xl mx-auto px-margin-mobile lg:px-margin">
      {/* Folder Header Tab */}
      <div className="inline-flex items-center gap-2 bg-accent px-6 py-2.5 rounded-t-xl text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <ShieldCheck className="h-[14px] w-[14px]" fill="currentColor" strokeWidth={0} />
      <span>Verified Callout Log #4892-KN</span>
      </div>
      {/* Main Folder Content Box */}
      <div className="bg-primary/80 rounded-b-2xl rounded-tr-2xl p-6 lg:p-8 shadow-2xl relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div className="md:col-span-5 h-64 rounded-xl overflow-hidden relative shadow-lg">
      <Image src="/gallery-evening-home-visit.webp" alt="Verified roadside replacement A34 Cheadle Hulme" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute bottom-2 left-2 bg-primary-dark/90 px-3 py-1 rounded text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary">
                    A34 J19 Slip Road
                  </div>
      </div>
      <div className="md:col-span-7 flex flex-col justify-between">
      <div>
      <div className="flex items-center gap-2 mb-2">
      <span className="px-2 py-0.5 rounded bg-secondary/20 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase font-semibold">Incident Resolved</span>
      <span className="text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold">Dusk Response • Transit Corridor</span>
      </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-3">
                      A34 Junction 19 Slip Road, Cheadle Hulme
                    </h3>
      <p className="text-[15px] leading-[24px] text-white/90 mb-4">
                      Range Rover Velar suffered a severe sidewall failure during heavy evening commuter transit approaching the Tabley interchange. Direct Tyre Solutions emergency fitting unit arrived on-scene within 27 minutes.
                    </p>
      <div className="grid grid-cols-2 gap-3 bg-primary/60 p-4 rounded-xl text-[13px] leading-[18px]">
      <div>
      <span className="text-gray-400 block text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">Fitted Tyre</span>
      <strong className="text-white">255/50 R20 All-Season</strong>
      </div>
      <div>
      <span className="text-gray-400 block text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">Total Turnaround</span>
      <strong className="text-secondary">44 Mins Arrival to Departure</strong>
      </div>
      </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <span className="flex items-center gap-1 text-gray-400">
      <Shield className="h-[14px] w-[14px]" /> Safe Motorway Extraction
                    </span>
      <span>Customer back on road safely</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* FAQ SECTION (TWO-COLUMN GRID) */}
      <section className="w-full bg-primary-dark py-20">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
      <div className="text-center max-w-2xl mx-auto mb-14">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary mb-2 block">Common Questions</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">Cheadle Hulme Tyre Dispatch FAQs</h2>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-2">Clear information for urgent and scheduled mobile visits.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* FAQ 1 */}
      <div className="bg-primary/60 backdrop-blur-md p-6 rounded-2xl shadow-sm">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2 flex items-start gap-2">
      <HelpCircle className="text-secondary h-5 w-5 mt-0.5" />
                  How fast can a mobile van reach A34 Junction 19?
                </h3>
      <p className="text-[15px] leading-[24px] text-white/80 pl-7">
                  Our strategic positioning in Cheshire allows our rapid mobile vans to reach the A34 J19 Tabley roundabout and adjoining slips in an average of 25 to 40 minutes, depending on active highway conditions.
                </p>
      </div>
      {/* FAQ 2 */}
      <div className="bg-primary/60 backdrop-blur-md p-6 rounded-2xl shadow-sm">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2 flex items-start gap-2">
      <HelpCircle className="text-secondary h-5 w-5 mt-0.5" />
                  Can you replace tyres on country lanes in Tabley or Mere?
                </h3>
      <p className="text-[15px] leading-[24px] text-white/80 pl-7">
                  Yes. Our vans are compact, ruggedized Mercedes and Ford mobile service units capable of navigating narrow Cheshire rural lanes, private drives, farm access roads, and golf clubs without difficulty.
                </p>
      </div>
      {/* FAQ 3 */}
      <div className="bg-primary/60 backdrop-blur-md p-6 rounded-2xl shadow-sm">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2 flex items-start gap-2">
      <HelpCircle className="text-secondary h-5 w-5 mt-0.5" />
                  What tyre brands do you keep in stock?
                </h3>
      <p className="text-[15px] leading-[24px] text-white/80 pl-7">
                  We carry a large mobile inventory covering Michelin, Continental, Pirelli, Goodyear, and Bridgestone, as well as dependable mid-range and cost-effective budget options for all cars, 4x4s, and vans.
                </p>
      </div>
      {/* FAQ 4 */}
      <div className="bg-primary/60 backdrop-blur-md p-6 rounded-2xl shadow-sm">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2 flex items-start gap-2">
      <HelpCircle className="text-secondary h-5 w-5 mt-0.5" />
                  Are you available overnight and on weekends?
                </h3>
      <p className="text-[15px] leading-[24px] text-white/80 pl-7">
                  Direct Tyre Solutions operates 24 hours a day, 7 days a week, 365 days a year. Our overnight emergency technicians handle nighttime emergencies on motorways and rural A-roads without exception.
                </p>
      </div>
      </div>
      </div>
      </section>
      {/* FINAL CTA (FULL-WIDTH FLAT BAR) */}
      <section className="w-full bg-primary/80 py-16">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary mb-2 block">Cheshire Emergency Dispatch</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">Need a Mobile Tyre Unit in Cheadle Hulme Now?</h2>
      <p className="text-[15px] leading-[24px] text-white/85 mt-2 max-w-xl">
                  Avg 25–40 min dispatch • A34, A555, M60, A34 coverage • All tyre brands and sizes in stock for immediate on-site fitting.
                </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase hover:bg-secondary transition-all duration-200 shadow-xl active:scale-95 group" href="tel:07955266077">
      <PhoneCall className="text-primary group-hover:animate-bounce h-5 w-5" fill="currentColor" strokeWidth={0} />
                  Call 07955 266 077
                </a>
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold hover:bg-primary transition-all duration-200 shadow-lg active:scale-95" href="https://wa.me/448009992470?text=I%20need%20urgent%20mobile%20tyre%20assistance%20in%20Knutsford" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="text-secondary h-5 w-5" />
                  WhatsApp Dispatch
                </a>
      </div>
      </div>
      </div>
      </section>
    </main>
  );
}
