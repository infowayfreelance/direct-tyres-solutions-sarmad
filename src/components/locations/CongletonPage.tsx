import Image from "next/image";
import { ArrowLeft, ArrowRight, Award, Car, Clock, CreditCard, HelpCircle, Home, MapPin, MessageCircle, Navigation, PhoneCall, ShieldCheck, Star, TrafficCone, Unlock, Wrench, Zap } from "lucide-react";

export default function CongletonPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      <div className="flex flex-col w-full">
      {/* SECTION 1: HERO (Full-width photo hero with bottom gradient text placement) */}
      <section className="relative w-full h-[620px] md:h-[680px] overflow-hidden flex flex-col justify-end">
      <div className="absolute inset-0 w-full h-full bg-cover bg-center" data-alt="Emergency roadside mobile tyre fitting van with amber beacons lit at dusk on UK highway shoulder, professional tyre replacement in progress with high-vis technician and diagnostic gear." style={{ backgroundImage: "url('/hero-section-images-936x527.webp')" }}>
      </div>
      {/* Inky navy bottom gradient for text integration */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/85 to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-12 w-full">
      <div className="max-w-3xl flex flex-col gap-4">
      <div className="inline-flex items-center gap-2 self-start rounded-full bg-accent px-3.5 py-1 text-white">
      <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider">Cheshire Fast-Response Unit</span>
      </div>
      <h1 className="font-heading text-[36px] leading-[42px] tracking-[-0.01em] font-black md:text-[56px] md:leading-[64px] md:tracking-[-0.02em] md:font-black text-white">
                24/7 Mobile Tyre Fitting in <span className="text-secondary">Congleton</span>
      </h1>
      <p className="text-[15px] leading-[24px] md:text-[18px] md:leading-[28px] text-gray-400 max-w-2xl">
                Rapid on-demand roadside, retail park, and residential driveway mobile tyre replacement across Congleton, Clayton Bypass (A34), and the A536 corridor. Fitted within 25–40 minutes.
              </p>
      <div className="flex flex-wrap items-center gap-4 pt-2">
      <a className="inline-flex items-center gap-3 bg-secondary hover:bg-secondary-hover text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold px-8 py-4 rounded-full transition-transform active:scale-95 shadow-xl" href="tel:08009992470">
      <PhoneCall className="h-5 w-5" fill="currentColor" strokeWidth={0} />
      <span>Call 0800 999 2470</span>
      </a>
      <a className="inline-flex items-center gap-2 bg-primary/80 hover:bg-primary backdrop-blur-md text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold px-7 py-4 rounded-full transition-colors shadow-md" href="https://wa.me/448009992470">
      <MessageCircle className="text-accent h-5 w-5" />
      <span>WhatsApp Dispatch</span>
      </a>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 2: TRUST BADGES (Flat style, 4 badges) */}
      <section className="w-full bg-primary-dark py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      <div className="flex items-center gap-3 p-3 bg-primary/60 rounded-xl">
      <ShieldCheck className="text-secondary h-6 w-6" />
      <div>
      <p className="font-heading text-[13px] leading-[18px] text-white">Fully Insured</p>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Master Technicians</p>
      </div>
      </div>
      <div className="flex items-center gap-3 p-3 bg-primary/60 rounded-xl">
      <Award className="text-accent h-6 w-6" />
      <div>
      <p className="font-heading text-[13px] leading-[18px] text-white">BS AU 159</p>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Certified Standards</p>
      </div>
      </div>
      <div className="flex items-center gap-3 p-3 bg-primary/60 rounded-xl">
      <Star className="text-secondary h-6 w-6" />
      <div>
      <p className="font-heading text-[13px] leading-[18px] text-white">4.9/5 TrustScore</p>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">500+ Local Reviews</p>
      </div>
      </div>
      <div className="flex items-center gap-3 p-3 bg-primary/60 rounded-xl">
      <CreditCard className="text-gray-400 h-6 w-6" />
      <div>
      <p className="font-heading text-[13px] leading-[18px] text-white">Contactless POS</p>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Apple Pay &amp; Cards</p>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 3: LOCAL INTRO (Congleton travel realities) */}
      <section className="w-full bg-primary-dark py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-7 flex flex-col gap-5">
      <div className="inline-flex items-center gap-2 text-secondary">
      <MapPin className="h-5 w-5" />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold tracking-wider uppercase">Direct Tyre Solutions Congleton Hub</span>
      </div>
      <h2 className="font-heading text-[22px] leading-[28px] font-bold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white">
                  Immediate Response Across Cheshire’s Critical Pinch Points
                </h2>
      <p className="text-[15px] leading-[24px] md:text-[18px] md:leading-[28px] text-gray-400">
                  Stranded with a puncture on the Clayton Bypass (A34) or limping into Congleton Retail Park on Barn Road? Traditional recovery flatbeds can mean 3 to 4 hours parked dangerously in traffic, followed by an astronomical recovery surcharge.
                </p>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Our custom Mercedes Sprinter mobile fitting rigs are stationed locally across East Cheshire. Stocking over 600 premium, mid-range, and budget tyre variants—including reinforced run-flats for BMW, Mercedes, and Audi—we eliminate towing logistics entirely. We bring commercial-grade mounting, dynamic digital balancers, and fresh rubber directly to your vehicle&apos;s GPS coordinates.
                </p>
      <div className="flex items-center gap-6 pt-2">
      <div className="flex flex-col">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary">25-40</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Mins Avg Dispatch</span>
      </div>
      <div className="w-px h-12 bg-primary"></div>
      <div className="flex flex-col">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-accent">24/7</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">365 Days Active</span>
      </div>
      <div className="w-px h-12 bg-primary"></div>
      <div className="flex flex-col">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-gray-400">0.00</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Recovery Fee</span>
      </div>
      </div>
      </div>
      <div className="lg:col-span-5 bg-primary-dark p-6 rounded-2xl flex flex-col gap-4 shadow-xl">
      <div className="flex items-center gap-3">
      <Car className="text-secondary h-5 w-5" />
      <span className="font-heading text-[20px] leading-[26px] font-bold text-white">Immediate Congleton Cover</span>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">
                  Current dynamic units active in CW12 postcodes. Instant roadside roadside clearance on:
                </p>
      <ul className="space-y-3 text-[13px] leading-[18px] text-white">
      <li className="flex items-center gap-3 p-3 bg-primary/60 rounded-xl">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span><strong>A34 Clayton Bypass:</strong> Congleton bypass dual-carriageway</span>
      </li>
      <li className="flex items-center gap-3 p-3 bg-primary/60 rounded-xl">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span><strong>Barn Road Retail Park:</strong> Marks &amp; Spencer / B&amp;M car parks</span>
      </li>
      <li className="flex items-center gap-3 p-3 bg-primary/60 rounded-xl">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span><strong>A536 Macclesfield Corridor:</strong> Northbound morning rush flow</span>
      </li>
      <li className="flex items-center gap-3 p-3 bg-primary/60 rounded-xl">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span><strong>A54 Holmes Chapel Road:</strong> Rural and single-carriageway verges</span>
      </li>
      </ul>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 4: SERVICES (Horizontal scroll deck with arrows & real photography) */}
      <section className="w-full bg-primary-dark py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex items-end justify-between mb-8">
      <div>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary uppercase tracking-wider">Mobile Tyre Solutions</span>
      <h2 className="font-heading text-[22px] leading-[28px] font-bold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white mt-1">Our Workshop Comes To You</h2>
      </div>
      <div className="flex gap-2">
      <button aria-label="Previous service" className="w-11 h-11 rounded-full bg-primary/60 hover:bg-primary/80 flex items-center justify-center text-white transition-colors shadow" id="scrollLeftBtn">
      <ArrowLeft className="h-5 w-5" />
      </button>
      <button aria-label="Next service" className="w-11 h-11 rounded-full bg-secondary hover:bg-secondary-hover flex items-center justify-center text-primary transition-colors shadow" id="scrollRightBtn">
      <ArrowRight className="h-5 w-5" />
      </button>
      </div>
      </div>
      {/* Horizontal scroll container */}
      <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory" id="serviceDeck">
      {/* Service Card 1 */}
      <div className="snap-start flex-none w-[320px] md:w-[360px] bg-primary/60 rounded-2xl overflow-hidden shadow-lg flex flex-col">
      <div className="h-48 w-full bg-cover bg-center" data-alt="Roadside emergency tyre replacement van stationed on highway shoulder behind damaged commuter car with orange warning cones in Congleton." style={{ backgroundImage: "url('/gallery-onsite-wheel-fitting.webp')" }}></div>
      <div className="p-6 flex flex-col flex-1">
      <div className="flex items-center justify-between mb-3">
      <span className="font-heading text-[20px] leading-[26px] font-bold text-white">Emergency Roadside</span>
      <span className="text-xs bg-red-500/20 text-white px-2.5 py-0.5 rounded-full uppercase">Priority</span>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400 mb-6 flex-1">
                    Rapid response unit dispatched to hard-shoulders, bypass laybys, or unlit rural verges. Complete wheel change, digital balance, and safe site clearance.
                  </p>
      <a className="inline-flex items-center justify-center gap-2 bg-primary/80 hover:bg-primary text-white py-3 rounded-full transition-colors" href="tel:08009992470">
      <span>Request Urgent Van</span>
      <Zap className="h-[14px] w-[14px]" />
      </a>
      </div>
      </div>
      {/* Service Card 2 */}
      <div className="relative snap-start flex-none w-[320px] md:w-[360px] bg-primary/60 rounded-2xl overflow-hidden shadow-lg flex flex-col">
      <Image src="/wheel-balancing-2-1536x1024.webp" alt="Brand new car tyre tread close up with mobile technician inspection gauge, high detail automotive workshop service photography." fill sizes="(max-width: 1024px) 100vw, 50vw" className="h-48 w-full object-cover" />
      <div className="p-6 flex flex-col flex-1">
      <div className="flex items-center justify-between mb-3">
      <span className="font-heading text-[20px] leading-[26px] font-bold text-white">BS AU 159 Puncture Repair</span>
      <span className="text-xs bg-accent text-white px-2.5 py-0.5 rounded-full uppercase">Standard</span>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400 mb-6 flex-1">
                    Compliant combination plug-patch repairs for minor tread punctures caused by screws or nails. Safe, economical, and saves you the price of a full tyre replacement.
                  </p>
      <a className="inline-flex items-center justify-center gap-2 bg-primary/80 hover:bg-primary text-white py-3 rounded-full transition-colors" href="tel:08009992470">
      <span>Inspect Puncture</span>
      <Wrench className="h-[14px] w-[14px]" />
      </a>
      </div>
      </div>
      {/* Service Card 3 */}
      <div className="snap-start flex-none w-[320px] md:w-[360px] bg-primary/60 rounded-2xl overflow-hidden shadow-lg flex flex-col">
      <div className="h-48 w-full bg-cover bg-center" data-alt="Close up of vehicle wheel hub and locking wheel nut extractor socket kit laid out on workshop surface in mobile van." style={{ backgroundImage: "url('/gallery-roadside-fitting.webp')" }}></div>
      <div className="p-6 flex flex-col flex-1">
      <div className="flex items-center justify-between mb-3">
      <span className="font-heading text-[20px] leading-[26px] font-bold text-white">Locking Nut Removal</span>
      <span className="text-xs bg-primary text-gray-400 px-2.5 py-0.5 rounded-full uppercase">Specialist</span>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400 mb-6 flex-1">
                    Lost key, stripped splines, or over-torqued security nuts removed without scuffing or damaging delicate alloy rims using specialist reverse-thread tools.
                  </p>
      <a className="inline-flex items-center justify-center gap-2 bg-primary/80 hover:bg-primary text-white py-3 rounded-full transition-colors" href="tel:08009992470">
      <span>Extract Stuck Key</span>
      <Unlock className="h-[14px] w-[14px]" />
      </a>
      </div>
      </div>
      {/* Service Card 4 */}
      <div className="snap-start flex-none w-[320px] md:w-[360px] bg-primary/60 rounded-2xl overflow-hidden shadow-lg flex flex-col">
      <div className="h-48 w-full bg-cover bg-center" data-alt="Automotive mobile technician fitting brand new tyre on residential tarmac driveway outside British suburban home during daytime." style={{ backgroundImage: "url('/gallery-home-callout.webp')" }}></div>
      <div className="p-6 flex flex-col flex-1">
      <div className="flex items-center justify-between mb-3">
      <span className="font-heading text-[20px] leading-[26px] font-bold text-white">Driveway &amp; Workplace</span>
      <span className="text-xs bg-secondary/20 text-secondary px-2.5 py-0.5 rounded-full uppercase">Scheduled</span>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400 mb-6 flex-1">
                    Zero disruption to your working day. We fit tyres on your driveway in Congleton or at your office car park while you work. Same-day &amp; pre-booked slots.
                  </p>
      <a className="inline-flex items-center justify-center gap-2 bg-primary/80 hover:bg-primary text-white py-3 rounded-full transition-colors" href="tel:08009992470">
      <span>Book Home Fitting</span>
      <Home className="h-[14px] w-[14px]" />
      </a>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 5: HOW IT WORKS (3 columns with real photos) */}
      <section className="w-full bg-primary-dark py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary uppercase tracking-wider">Fast Protocol</span>
      <h2 className="font-heading text-[22px] leading-[28px] font-bold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white mt-1">From Breakdown to Moving in 3 Steps</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Step 1 */}
      <div className="relative bg-primary-dark rounded-2xl overflow-hidden shadow-md flex flex-col">
      <Image src="/about-rapid-response-tyres.webp" alt="Brand new car tyre tread close up with mobile technician inspection gauge, high detail automotive workshop service photography." fill sizes="(max-width: 1024px) 100vw, 50vw" className="h-44 w-full object-cover" />
      <div className="p-6 flex flex-col flex-1">
      <div className="flex items-center gap-3 mb-3">
      <span className="font-heading text-[30px] leading-[38px] font-bold text-secondary">01</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Call &amp; Vehicle Lookup</h3>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    Provide your vehicle registration and current Congleton location. Our team identifies your exact tyre size, speed rating, and run-flat profile in seconds.
                  </p>
      </div>
      </div>
      {/* Step 2 */}
      <div className="bg-primary-dark rounded-2xl overflow-hidden shadow-md flex flex-col">
      <div className="h-44 w-full bg-cover bg-center" data-alt="High-roof commercial mobile tyre fitting van with sliding door open showing tyre changer and wheel balancer interior tools." style={{ backgroundImage: "url('/gallery-evening-callout.webp')" }}></div>
      <div className="p-6 flex flex-col flex-1">
      <div className="flex items-center gap-3 mb-3">
      <span className="font-heading text-[30px] leading-[38px] font-bold text-accent">02</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Priority Van Mobilised</h3>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    A fully loaded mobile fitting rig leaves our local Cheshire depot instantly, with live WhatsApp technician tracking and an accurate 25-40 min ETA.
                  </p>
      </div>
      </div>
      {/* Step 3 */}
      <div className="bg-primary-dark rounded-2xl overflow-hidden shadow-md flex flex-col">
      <div className="h-44 w-full bg-cover bg-center" data-alt="Technician using pneumatic air gun and torque wrench on alloy wheel lugs during tyre replacement at twilight." style={{ backgroundImage: "url('/gallery-evening-home-visit.webp')" }}></div>
      <div className="p-6 flex flex-col flex-1">
      <div className="flex items-center gap-3 mb-3">
      <span className="font-heading text-[30px] leading-[38px] font-bold text-gray-400">03</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Fitted, Torqued &amp; Cleared</h3>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    New tyres fitted, computer-balanced, and hand-torqued to manufacturer specifications. Old tyres removed and safely recycled. You are back on the road safely.
                  </p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 6: REAL JOB LOG + SHORT TESTIMONIAL (Two-card row with photos) */}
      <section className="w-full bg-primary-dark py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Verified Job Log */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden shadow-xl flex flex-col">
      <div className="h-52 w-full bg-cover bg-center" data-alt="Mobile tyre technician kneeling by the roadside changing an alloy wheel tyre on a dark car at dusk under streetlights on a bypass road." style={{ backgroundImage: "url('/gallery-precision-care.webp')" }}></div>
      <div className="p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-white uppercase">
      <Clock className="h-[14px] w-[14px]" /> Verified Job Log #CG-7721
                    </span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Yesterday 18:42</span>
      </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Clayton Bypass (A34), Congleton</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    Audi Q5 suffered a severe sidewall split and rapid run-flat deflation after hitting debris on the A34 bypass. 
                  </p>
      <div className="grid grid-cols-2 gap-3 pt-2 bg-primary-dark p-4 rounded-xl text-[13px] leading-[18px]">
      <div>
      <span className="text-gray-400 block text-xs">Vehicle:</span>
      <span className="text-white font-semibold">Audi Q5 Quattro</span>
      </div>
      <div>
      <span className="text-gray-400 block text-xs">Tyre Spec:</span>
      <span className="text-white font-semibold">255/45 R20 Run-Flat</span>
      </div>
      <div>
      <span className="text-gray-400 block text-xs">Arrival Time:</span>
      <span className="text-secondary font-semibold">24 Minutes</span>
      </div>
      <div>
      <span className="text-gray-400 block text-xs">Action:</span>
      <span className="text-white font-semibold">Fitted &amp; Verge Balanced</span>
      </div>
      </div>
      </div>
      </div>
      {/* Verified Local Review */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden shadow-xl flex flex-col">
      <div className="h-52 w-full bg-cover bg-center" data-alt="Close up of a newly fitted high-performance tyre and rim on a driveway with technician kneeling beside in high visibility gear." style={{ backgroundImage: "url('/mobile-tyre-fitting-3-1536x1024.webp')" }}></div>
      <div className="p-6 flex flex-col justify-between flex-1 gap-4">
      <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <div className="flex text-secondary">
      <Star className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
      <Star className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
      <Star className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
      <Star className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
      <Star className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-accent uppercase">Verified Congleton Resident</span>
      </div>
      <blockquote className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold md:text-[20px] md:leading-[26px] md:font-bold text-white">
                      “Kerbed my alloy outside Congleton Retail Park during evening rush hour. Direct Tyre Solutions had a mobile workshop van on-site in 28 minutes. Outstanding roadside service.”
                    </blockquote>
      </div>
      <div className="flex items-center gap-3 pt-3 border-t-0 bg-primary-dark p-3.5 rounded-xl">
      <div className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-heading text-[13px] leading-[18px]">
                      DP
                    </div>
      <div>
      <p className="font-heading text-[13px] leading-[18px] text-white">David P.</p>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Congleton • Emergency Retail Park Callout</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 7: ROADS & NEARBY AREAS (Arterials and surrounding hubs) */}
      <section className="w-full bg-primary-dark py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="max-w-2xl mb-10">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary uppercase tracking-wider">Coverage Map</span>
      <h2 className="font-heading text-[22px] leading-[28px] font-bold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white mt-1">Arterials &amp; Nearby Cheshire Towns</h2>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-2">
                Units positioned across East Cheshire with rapid emergency access to all major primary corridors and surrounding parishes:
              </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Arterial Roads */}
      <div className="bg-primary-dark p-6 rounded-2xl flex flex-col gap-4 shadow-md">
      <div className="flex items-center gap-3 text-secondary">
      <TrafficCone className="h-6 w-6" />
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Key Arterial Routes</h3>
      </div>
      <div className="space-y-3 text-[13px] leading-[18px]">
      <div className="p-3 bg-primary/60 rounded-xl flex justify-between items-center">
      <div>
      <span className="font-semibold text-white">A34 Clayton Bypass</span>
      <p className="text-gray-400 text-xs">Congleton link between Newcastle-under-Lyme and Alderley Edge</p>
      </div>
      <span className="px-2.5 py-1 bg-primary text-white rounded-full">15–25 Mins</span>
      </div>
      <div className="p-3 bg-primary/60 rounded-xl flex justify-between items-center">
      <div>
      <span className="font-semibold text-white">A536 Corridor</span>
      <p className="text-gray-400 text-xs">Direct high-commute link into Macclesfield</p>
      </div>
      <span className="px-2.5 py-1 bg-primary text-white rounded-full">20–30 Mins</span>
      </div>
      <div className="p-3 bg-primary/60 rounded-xl flex justify-between items-center">
      <div>
      <span className="font-semibold text-white">A54 Links</span>
      <p className="text-gray-400 text-xs">Connecting Congleton westbound to Holmes Chapel &amp; M6 J18</p>
      </div>
      <span className="px-2.5 py-1 bg-primary text-white rounded-full">20–35 Mins</span>
      </div>
      </div>
      </div>
      {/* Nearby Areas */}
      <div className="bg-primary-dark p-6 rounded-2xl flex flex-col gap-4 shadow-md">
      <div className="flex items-center gap-3 text-accent">
      <Navigation className="h-6 w-6" />
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Surrounding Service Areas</h3>
      </div>
      <div className="grid grid-cols-2 gap-3 text-[13px] leading-[18px]">
      <div className="p-4 bg-primary/60 rounded-xl flex items-center justify-between">
      <div>
      <span className="font-semibold text-white block">Macclesfield</span>
      <span className="text-xs text-gray-400">SK10 / SK11</span>
      </div>
      <Navigation className="text-gray-400 h-[14px] w-[14px]" />
      </div>
      <div className="p-4 bg-primary/60 rounded-xl flex items-center justify-between">
      <div>
      <span className="font-semibold text-white block">Sandbach</span>
      <span className="text-xs text-gray-400">CW11 Postcodes</span>
      </div>
      <Navigation className="text-gray-400 h-[14px] w-[14px]" />
      </div>
      <div className="p-4 bg-primary/60 rounded-xl flex items-center justify-between">
      <div>
      <span className="font-semibold text-white block">Holmes Chapel</span>
      <span className="text-xs text-gray-400">CW4 &amp; M6 J18</span>
      </div>
      <Navigation className="text-gray-400 h-[14px] w-[14px]" />
      </div>
      <div className="p-4 bg-primary/60 rounded-xl flex items-center justify-between">
      <div>
      <span className="font-semibold text-white block">Biddulph</span>
      <span className="text-xs text-gray-400">ST8 Staffordshire Border</span>
      </div>
      <Navigation className="text-gray-400 h-[14px] w-[14px]" />
      </div>
      <div className="col-span-2 p-4 bg-primary/60 rounded-xl flex items-center justify-between">
      <div>
      <span className="font-semibold text-white block">Alsager &amp; Hassall Green</span>
      <span className="text-xs text-gray-400">ST7 South Cheshire Corridor</span>
      </div>
      <span className="text-accent uppercase">Fast En-Route</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 8: FAQS (Two columns) */}
      <section className="w-full bg-primary-dark py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary uppercase tracking-wider">Help &amp; Details</span>
      <h2 className="font-heading text-[22px] leading-[28px] font-bold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white mt-1">Congleton Tyre Fitting FAQ</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* FAQ 1 */}
      <div className="bg-primary/60 p-6 rounded-2xl flex flex-col gap-2">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-start gap-2">
      <HelpCircle className="text-secondary h-5 w-5 mt-0.5" />
                  How fast can you arrive in Congleton?
                </h3>
      <p className="text-[13px] leading-[18px] text-gray-400 pl-7">
                  Our typical roadside and residential response time in Congleton and the A34 Clayton Bypass is 25 to 40 minutes. We assign the closest active mobile van based on live Cheshire traffic data.
                </p>
      </div>
      {/* FAQ 2 */}
      <div className="bg-primary/60 p-6 rounded-2xl flex flex-col gap-2">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-start gap-2">
      <HelpCircle className="text-secondary h-5 w-5 mt-0.5" />
                  Can you change a tyre on a steep residential driveway?
                </h3>
      <p className="text-[13px] leading-[18px] text-gray-400 pl-7">
                  Yes. Our vans carry heavy-duty composite wheel chocks and precision low-profile hydraulic trolley jacks engineered specifically for uneven or inclined tarmac, gravel, and block paving.
                </p>
      </div>
      {/* FAQ 3 */}
      <div className="bg-primary/60 p-6 rounded-2xl flex flex-col gap-2">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-start gap-2">
      <HelpCircle className="text-secondary h-5 w-5 mt-0.5" />
                  What if I do not have the locking wheel nut key?
                </h3>
      <p className="text-[13px] leading-[18px] text-gray-400 pl-7">
                  Not a problem. Each technician carries non-destructive reverse-threaded extraction rigs capable of removing rounded, overtightened, or keyless locking nuts safely without scratching alloys.
                </p>
      </div>
      {/* FAQ 4 */}
      <div className="bg-primary/60 p-6 rounded-2xl flex flex-col gap-2">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-start gap-2">
      <HelpCircle className="text-secondary h-5 w-5 mt-0.5" />
                  Do you cover commercial vans and fleet vehicles?
                </h3>
      <p className="text-[13px] leading-[18px] text-gray-400 pl-7">
                  Yes. We stock high-load commercial tyres (such as 215/65 R16C and 235/65 R16C) for Mercedes Sprinters, Ford Transits, and Luton box vans operating across Cheshire business corridors.
                </p>
      </div>
      {/* FAQ 5 */}
      <div className="bg-primary/60 p-6 rounded-2xl flex flex-col gap-2">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-start gap-2">
      <HelpCircle className="text-secondary h-5 w-5 mt-0.5" />
                  Are you genuinely operational 24/7 on Bank Holidays?
                </h3>
      <p className="text-[13px] leading-[18px] text-gray-400 pl-7">
                  Direct Tyre Solutions maintains live on-call technicians 365 days a year, including Christmas, Easter, and bank holiday weekends throughout Congleton and East Cheshire.
                </p>
      </div>
      {/* FAQ 6 */}
      <div className="bg-primary/60 p-6 rounded-2xl flex flex-col gap-2">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-start gap-2">
      <HelpCircle className="text-secondary h-5 w-5 mt-0.5" />
                  What payment methods do you accept on-site?
                </h3>
      <p className="text-[13px] leading-[18px] text-gray-400 pl-7">
                  Every technician carries a mobile chip-and-pin card terminal supporting Apple Pay, Google Pay, Visa, Mastercard, and contactless card payments. No cash needed.
                </p>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 9: FINAL CTA (Plain rounded full-width banner, solid gold #ffd700 with dark navy text) */}
      <section className="w-full bg-primary-dark py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="w-full bg-secondary text-primary rounded-2xl p-8 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
      <div className="flex flex-col gap-3 text-center lg:text-left">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest opacity-80">Immediate Breakdown Support</span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold font-black">
                  Stranded in Congleton? Call Now.
                </h2>
      <p className="text-[15px] leading-[24px] md:text-[18px] md:leading-[28px] max-w-xl opacity-90">
                  Our mobile tyre van is ready to mobilise immediately to Clayton Bypass, Barn Road Retail Park, or your doorstep.
                </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary-dark hover:bg-primary/60 text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold px-9 py-5 rounded-full shadow-lg transition-transform active:scale-95 text-center" href="tel:08009992470">
      <PhoneCall className="text-secondary h-5 w-5" fill="currentColor" strokeWidth={0} />
      <span>Call 0800 999 2470</span>
      </a>
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold px-7 py-5 rounded-full transition-colors text-center" href="https://wa.me/448009992470">
      <MessageCircle className="h-5 w-5" />
      <span>WhatsApp</span>
      </a>
      </div>
      </div>
      </div>
      </section>
      </div>
    </main>
  );
}
