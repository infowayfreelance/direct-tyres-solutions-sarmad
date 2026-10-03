import Image from "next/image";
import { ArrowLeft, ArrowRight, Car, CheckCircle2, CreditCard, HelpCircle, MapPin, MessageCircle, MessageSquare, PhoneCall, ShieldCheck, Star, Timer, Truck, Wrench } from "lucide-react";

export default function BuryPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="w-full bg-primary-dark py-space-xl">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
      <div className="lg:col-span-7 flex flex-col gap-space-md">
      <div className="inline-flex items-center gap-2 self-start bg-primary/80 px-3 py-1.5 rounded-full">
      <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase text-secondary tracking-wider">Direct Tyre Solutions UK • Bury Tier 1 Response</span>
      </div>
      <h1 className="font-heading text-[36px] leading-[42px] tracking-[-0.01em] font-black md:text-[56px] md:leading-[64px] md:tracking-[-0.02em] md:font-black text-white">
                24/7 Mobile Tyre Fitting in Bury
              </h1>
      <p className="text-[18px] leading-[28px] text-gray-400 max-w-2xl">
                Rapid roadside, car park, and driveway dispatch covering The Rock shopping district, Moorgate, Pilsworth Retail Park, and the heavy M66 &amp; A56 arterial corridors. Standard 30–45 minute on-scene response with fully equipped workshop vans.
              </p>
      <div className="flex flex-wrap items-center gap-space-md pt-2">
      <a className="inline-flex items-center gap-3 bg-secondary hover:bg-secondary-hover text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold px-8 py-4 rounded-full transition-transform active:scale-95 shadow-lg" href="tel:07955266077">
      <PhoneCall className="text-[20px] leading-[26px] font-bold h-5 w-5" fill="currentColor" strokeWidth={0} />
      <span>Call 07955 266 077</span>
      </a>
      <a className="inline-flex items-center gap-3 bg-primary/80 hover:bg-primary-light text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold px-7 py-4 rounded-full transition-colors" href="https://wa.me/448009992470" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="text-accent h-5 w-5" />
      <span>WhatsApp Us</span>
      </a>
      </div>
      <div className="flex items-center gap-space-md pt-2">
      <div className="flex items-center text-secondary">
      <Star className="text-[16px] leading-[22px] tracking-[0.01em] font-bold h-5 w-5" fill="currentColor" strokeWidth={0} />
      <Star className="text-[16px] leading-[22px] tracking-[0.01em] font-bold h-5 w-5" fill="currentColor" strokeWidth={0} />
      <Star className="text-[16px] leading-[22px] tracking-[0.01em] font-bold h-5 w-5" fill="currentColor" strokeWidth={0} />
      <Star className="text-[16px] leading-[22px] tracking-[0.01em] font-bold h-5 w-5" fill="currentColor" strokeWidth={0} />
      <Star className="text-[16px] leading-[22px] tracking-[0.01em] font-bold h-5 w-5" fill="currentColor" strokeWidth={0} />
      </div>
      <span className="text-[13px] leading-[18px] text-gray-400">4.9/5 rated across Greater Manchester • <strong className="text-white">24/7 Available</strong></span>
      </div>
      </div>
      <div className="lg:col-span-5 relative">
      <div className="relative w-full rounded-2xl overflow-hidden bg-primary/60 shadow-2xl">
      <Image src="/hero-section-images-936x527.webp" alt="Direct Tyre Solutions mobile tyre fitting emergency van parked on roadside with emergency beacons operating" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-[420px] object-cover" />
      <div className="absolute bottom-4 left-4 right-4 bg-primary-dark/90 backdrop-blur-md p-4 rounded-xl flex items-center justify-between">
      <div className="flex flex-col">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider">Active Van In Area</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Bury Fleet Unit #4 • Pilsworth Sector</span>
      </div>
      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">
                    Live GPS
                  </span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* TRUST BADGES ROW */}
      <section className="w-full bg-primary-dark py-6">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
      <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/60">
      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
      <ShieldCheck className="text-white h-5 w-5" />
      </div>
      <div className="flex flex-col min-w-0">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white truncate">Fully Insured</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Qualified Master Techs</span>
      </div>
      </div>
      <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/60">
      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
      <Wrench className="text-white h-5 w-5" />
      </div>
      <div className="flex flex-col min-w-0">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white truncate">BS AU 159 Certified</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Strict Safety Standards</span>
      </div>
      </div>
      <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/60">
      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
      <MessageSquare className="text-white h-5 w-5" />
      </div>
      <div className="flex flex-col min-w-0">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white truncate">4.9 / 5.0 TrustScore</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Over 1,200 Reviews</span>
      </div>
      </div>
      <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/60">
      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
      <CreditCard className="text-white h-5 w-5" />
      </div>
      <div className="flex flex-col min-w-0">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white truncate">Apple &amp; Card Pay</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Contactless Roadside</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* LOCAL INTRO */}
      <section className="w-full bg-primary-dark py-space-xl">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin grid grid-cols-1 lg:grid-cols-12 gap-gutter">
      <div className="lg:col-span-4 flex flex-col gap-2">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider">Local Operational Context</span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white">
                Bury Roadside &amp; Commercial Realities
              </h2>
      </div>
      <div className="lg:col-span-8 flex flex-col gap-space-md text-gray-400 text-[18px] leading-[28px]">
      <p>
                Bury&apos;s blend of dense Victorian town-centre road layouts, congested retail destinations such as The Rock and Woodfields, and high-velocity commuter corridors along the M66 presents unique challenges when a tyre fails. Waiting hours for a traditional flatbed recovery vehicle often results in secondary safety hazards, missed shifts, and steep towing penalties.
              </p>
      <p>
                Direct Tyre Solutions operates dedicated mobile response units stationed strategically around Junction 2 (Heap Bridge) and Junction 3 (Pilsworth) of the M66. Whether you are stuck on a driveway in Brandlesholme, disabled with a puncture in an Asda car park, or pulled over on the hard shoulder of the A56 Manchester Road, our mobile technicians arrive fully equipped to mount, digitally balance, and test your new tyre on the spot.
              </p>
      </div>
      </div>
      </section>
      {/* SERVICES HORIZONTAL SCROLL DECK */}
      <section className="w-full bg-primary-dark py-space-xl">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-space-lg">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div className="flex flex-col gap-1">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider">Our Capabilities</span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white">
                  Comprehensive Mobile Tyre Services
                </h2>
      </div>
      <div className="flex items-center gap-2">
      <button aria-label="Previous service" className="w-12 h-12 rounded-full bg-primary/80 hover:bg-primary-light text-white flex items-center justify-center transition-colors" id="scrollLeftBtn">
      <ArrowLeft className="h-5 w-5" />
      </button>
      <button aria-label="Next service" className="w-12 h-12 rounded-full bg-primary/80 hover:bg-primary-light text-white flex items-center justify-center transition-colors" id="scrollRightBtn">
      <ArrowRight className="h-5 w-5" />
      </button>
      </div>
      </div>
      {/* Scrollable Deck */}
      <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth" id="servicesDeck" style={{ WebkitOverflowScrolling: "touch" }}>
      {/* Card 1 */}
      <div className="min-w-[300px] md:min-w-[360px] max-w-[360px] snap-start flex flex-col rounded-2xl bg-primary/60 overflow-hidden shrink-0">
      <div className="relative h-48 w-full bg-primary overflow-hidden">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Emergency roadside tyre fitting van stationed safely on motorway shoulder" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
      <Car className="text-[15px] leading-[24px] text-white h-5 w-5" />
      </div>
      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-primary-dark/80 backdrop-blur-sm text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold font-bold">
                    30-45 Min ETA
                  </span>
      </div>
      <div className="p-6 flex flex-col flex-1 justify-between gap-4">
      <div className="flex flex-col gap-2">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold md:text-[30px] md:leading-[38px] md:font-bold text-white">Emergency Roadside Fitting</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">Immediate mobile dispatch for blowouts and road hazards across Bury, M66, M60, and major A-roads day or night.</p>
      </div>
      <div className="pt-4 flex items-center justify-between border-t border-white/10">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Fixed Transparent Quote</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary">From £45 + Tyre</span>
      </div>
      </div>
      </div>
      {/* Card 2 */}
      <div className="min-w-[300px] md:min-w-[360px] max-w-[360px] snap-start flex flex-col rounded-2xl bg-primary/60 overflow-hidden shrink-0">
      <div className="relative h-48 w-full bg-primary overflow-hidden">
      <Image src="/gallery-roadside-fitting.webp" alt="Detailed close up of new premium tyre tread inspected with tyre tread depth gauge" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
      <Wrench className="text-[15px] leading-[24px] text-white h-5 w-5" />
      </div>
      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-primary-dark/80 backdrop-blur-sm text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">
                    Home &amp; Work
                  </span>
      </div>
      <div className="p-6 flex flex-col flex-1 justify-between gap-4">
      <div className="flex flex-col gap-2">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold md:text-[30px] md:leading-[38px] md:font-bold text-white">Home &amp; Work Pre-Booked</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">Save trips to traditional garages. We fit new premium or budget tyres on your driveway or company car park in Bury.</p>
      </div>
      <div className="pt-4 flex items-center justify-between border-t border-white/10">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Standard Slot</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary">Free Local Callout</span>
      </div>
      </div>
      </div>
      {/* Card 3 */}
      <div className="min-w-[300px] md:min-w-[360px] max-w-[360px] snap-start flex flex-col rounded-2xl bg-primary/60 overflow-hidden shrink-0">
      <div className="relative h-48 w-full bg-primary overflow-hidden">
      <Image src="/gallery-home-callout.webp" alt="Mechanic measuring puncture depth and tread condition on car wheel" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
      <Wrench className="text-[15px] leading-[24px] text-white h-5 w-5" />
      </div>
      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-primary-dark/80 backdrop-blur-sm text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">
                    BS AU 159
                  </span>
      </div>
      <div className="p-6 flex flex-col flex-1 justify-between gap-4">
      <div className="flex flex-col gap-2">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold md:text-[30px] md:leading-[38px] md:font-bold text-white">Puncture Inspection &amp; Repair</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">Tread puncture assessment meeting British safety guidelines. If it safely repairs, we fix it; if not, we hold backup stock.</p>
      </div>
      <div className="pt-4 flex items-center justify-between border-t border-white/10">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">BS Standard Repair</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary">£35 Fixed</span>
      </div>
      </div>
      </div>
      {/* Card 4 */}
      <div className="min-w-[300px] md:min-w-[360px] max-w-[360px] snap-start flex flex-col rounded-2xl bg-primary/60 overflow-hidden shrink-0">
      <div className="relative h-48 w-full bg-primary overflow-hidden">
      <Image src="/gallery-evening-callout.webp" alt="High roof fleet service vehicle attending van breakdown" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
      <Truck className="text-[15px] leading-[24px] text-white h-5 w-5" />
      </div>
      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-primary-dark/80 backdrop-blur-sm text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">
                    Fleet &amp; Van
                  </span>
      </div>
      <div className="p-6 flex flex-col flex-1 justify-between gap-4">
      <div className="flex flex-col gap-2">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold md:text-[30px] md:leading-[38px] md:font-bold text-white">Commercial Van Tyres</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">Dedicated 8-ply, reinforced commercial-rated rubber for delivery fleets, transit vans, and work vehicles in Pilsworth.</p>
      </div>
      <div className="pt-4 flex items-center justify-between border-t border-white/10">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Fleet Support</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary">Priority SLA</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* HOW IT WORKS (PHOTO TOPPED) */}
      <section className="w-full bg-primary-dark py-space-xl">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-space-lg">
      <div className="flex flex-col gap-1 text-center max-w-xl mx-auto">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider">Fast 3-Step Procedure</span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white">How Mobile Fitting Works</h2>
      <p className="text-[15px] leading-[24px] text-gray-400">No recovery waiting or garage queues. We bring the entire tyre shop directly to your location in Bury.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      {/* Step 1 */}
      <div className="flex flex-col bg-primary/60 rounded-2xl overflow-hidden shadow-md">
      <div className="relative h-44 w-full bg-primary overflow-hidden">
      <Image src="/gallery-evening-home-visit.webp" alt="Tyre specification and sizing check by technician" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col gap-3">
      <div className="flex items-center gap-3">
      <span className="font-heading text-[30px] leading-[38px] font-bold text-secondary">01</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Call &amp; Locate</h3>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    Dial <strong>07955 266 077</strong> or WhatsApp us. Provide your vehicle registration or tyre size (e.g. 205/55 R16) and your exact Bury location or What3Words reference.
                  </p>
      </div>
      </div>
      {/* Step 2 */}
      <div className="flex flex-col bg-primary/60 rounded-2xl overflow-hidden shadow-md">
      <div className="relative h-44 w-full bg-primary overflow-hidden">
      <Image src="/gallery-precision-care.webp" alt="Fully loaded mobile tyre workshop van en route on UK motorway" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col gap-3">
      <div className="flex items-center gap-3">
      <span className="font-heading text-[30px] leading-[38px] font-bold text-secondary">02</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Immediate Mobile Dispatch</h3>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    Our Bury response van is routed to you immediately with the verified tyre profile, digital balancers, heavy pneumatic jacks, and fresh rubber on board.
                  </p>
      </div>
      </div>
      {/* Step 3 */}
      <div className="flex flex-col bg-primary/60 rounded-2xl overflow-hidden shadow-md">
      <div className="relative h-44 w-full bg-primary overflow-hidden">
      <Image src="/mobile-tyre-fitting-3-1536x1024.webp" alt="Technician fitting and balancing fresh tyre on alloy rim roadside" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col gap-3">
      <div className="flex items-center gap-3">
      <span className="font-heading text-[30px] leading-[38px] font-bold text-secondary">03</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Professional Fit &amp; Pay</h3>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    We mount, replace the valve, balance digitally, and torque-check all wheel nuts to manufacturer spec. Pay simply via contactless card or Apple Pay once completed.
                  </p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* REAL LOCAL JOB + TESTIMONIAL ROW */}
      <section className="w-full bg-primary-dark py-space-xl">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-space-lg">
      <div className="flex flex-col gap-1">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider">Proof From Bury Roads</span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white">Recent Local Deployments</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      {/* Card 1: Real Local Job */}
      <div className="flex flex-col sm:flex-row bg-primary/60 rounded-2xl overflow-hidden shadow-md">
      <div className="relative w-full sm:w-2/5 h-48 sm:h-auto bg-primary shrink-0">
      <Image src="/wheel-balancing-2-1536x1024.webp" alt="Technician inspecting screw puncture on Ford Focus tyre" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col justify-between gap-3">
      <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
      <span className="inline-block w-2 h-2 rounded-full bg-secondary"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider">Verified Job Log #BY-8831</span>
      </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Retail Park Emergency: Woodfields, Bury</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                      Ford Focus • Tyre Size: 205/55 R16. Punctured by an industrial roofing screw in the car park. Driver dispatched callout via phone; unit arrived in 31 minutes. Tyre mounted and balanced in bay while driver waited in supermarket café.
                    </p>
      </div>
      <div className="flex items-center gap-4 text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold pt-2">
      <span className="flex items-center gap-1"><Timer className="text-[15px] leading-[24px] text-accent h-5 w-5" /> 31 min arrival</span>
      <span className="flex items-center gap-1"><CheckCircle2 className="text-[15px] leading-[24px] text-accent h-5 w-5" /> Solved On Site</span>
      </div>
      </div>
      </div>
      {/* Card 2: Verified Testimonial */}
      <div className="flex flex-col sm:flex-row bg-primary/60 rounded-2xl overflow-hidden shadow-md">
      <div className="relative w-full sm:w-2/5 h-48 sm:h-auto bg-primary shrink-0">
      <Image src="/about-rapid-response-tyres.webp" alt="Service technician finishing tyre replacement at dusk" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col justify-between gap-3">
      <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
      <div className="flex text-secondary">
      <Star className="text-[15px] leading-[24px] h-5 w-5" fill="currentColor" strokeWidth={0} />
      <Star className="text-[15px] leading-[24px] h-5 w-5" fill="currentColor" strokeWidth={0} />
      <Star className="text-[15px] leading-[24px] h-5 w-5" fill="currentColor" strokeWidth={0} />
      <Star className="text-[15px] leading-[24px] h-5 w-5" fill="currentColor" strokeWidth={0} />
      <Star className="text-[15px] leading-[24px] h-5 w-5" fill="currentColor" strokeWidth={0} />
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">A58 Bolton Rd</span>
      </div>
      <blockquote className="text-[15px] leading-[24px] text-white italic">
                      “Stranded off A58 Bolton Road after work in pouring rain with a destroyed sidewall. Tech arrived in 25 mins with the exact Pirelli tyre. Flawless service.”
                    </blockquote>
      </div>
      <div className="flex flex-col pt-2 border-t border-white/10">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Mark H. — Bury Resident</span>
      <span className="text-[13px] leading-[18px] text-gray-400">BMW 3 Series • A58 Bolton Road Emergency</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* ROADS & LOCAL COVERAGE PANEL */}
      <section className="w-full bg-primary-dark py-space-xl">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
      <div className="bg-primary/60 rounded-2xl p-space-md md:p-space-lg flex flex-col gap-space-lg">
      <div className="flex flex-col gap-2">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider">High Priority Arterials</span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white">
                  Key Routes &amp; Express Sector Coverage
                </h2>
      <p className="text-[18px] leading-[28px] text-gray-400 max-w-3xl">
                  Our vans remain continually mobile near Bury&apos;s major traffic arteries to ensure fastest possible arrival times for commuters and transport operators.
                </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
      <div className="flex flex-col p-4 rounded-xl bg-primary/80 gap-2">
      <div className="flex items-center gap-2">
      <span className="w-7 h-7 rounded-md bg-accent text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center">M</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">M66 Corridor</span>
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary">Junction 1 to Junction 3</span>
      <p className="text-[13px] leading-[18px] text-gray-400">Immediate hard shoulder and slip-road roadside emergency assistance between Ramsbottom, Bury North, and Pilsworth.</p>
      </div>
      <div className="flex flex-col p-4 rounded-xl bg-primary/80 gap-2">
      <div className="flex items-center gap-2">
      <span className="w-7 h-7 rounded-md bg-accent text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center">M</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">M60 Ring Road</span>
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary">Junction 17 &amp; 18 Interchange</span>
      <p className="text-[13px] leading-[18px] text-gray-400">Rapid connection connecting Whitefield, Prestwich, and Simister Island links for swift vehicle clearance.</p>
      </div>
      <div className="flex flex-col p-4 rounded-xl bg-primary/80 gap-2">
      <div className="flex items-center gap-2">
      <span className="w-7 h-7 rounded-md bg-accent text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center">A</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">A56 Manchester Rd</span>
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary">North &amp; South Axis</span>
      <p className="text-[13px] leading-[18px] text-gray-400">Direct coverage connecting Bury town center through Whitefield down to Higher Broughton and Manchester boundaries.</p>
      </div>
      <div className="flex flex-col p-4 rounded-xl bg-primary/80 gap-2">
      <div className="flex items-center gap-2">
      <span className="w-7 h-7 rounded-md bg-accent text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center">A</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">A58 Bolton/Rochdale</span>
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary">East &amp; West Transits</span>
      <p className="text-[13px] leading-[18px] text-gray-400">Continuous patrols handling breakdowns between Bolton Road, Bury Bridge, Heap Bridge, and Rochdale link roads.</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* FAQS (TWO COLUMN GRID OF 6) */}
      <section className="w-full bg-primary-dark py-space-xl">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-space-lg">
      <div className="flex flex-col gap-1 text-center max-w-xl mx-auto">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider">Direct Answers</span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white">Frequently Asked Questions</h2>
      <p className="text-[15px] leading-[24px] text-gray-400">Everything you need to know about our 24/7 Bury mobile tyre fitting response.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      {/* Q1 */}
      <div className="bg-primary/60 rounded-2xl p-6 flex flex-col gap-2">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white flex items-start gap-2">
      <HelpCircle className="text-secondary shrink-0 h-5 w-5" />
                  How quickly can a tyre fitting van reach me in Bury?
                </h3>
      <p className="text-[15px] leading-[24px] text-gray-400 pl-8">
                  Our typical emergency arrival time across Bury, Whitefield, and Radcliffe is between 30 and 45 minutes. Van positioning near M66 J2 and Pilsworth allows rapid access to all commercial retail parks and main residential zones.
                </p>
      </div>
      {/* Q2 */}
      <div className="bg-primary/60 rounded-2xl p-6 flex flex-col gap-2">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white flex items-start gap-2">
      <HelpCircle className="text-secondary shrink-0 h-5 w-5" />
                  Can you fit tyres in retail car parks like The Rock or Woodfields?
                </h3>
      <p className="text-[15px] leading-[24px] text-gray-400 pl-8">
                  Yes. Our vans operate self-contained power and ultra-quiet silent compressors, meaning we can complete replacements inside public surface car parks without blocking stalls or disrupting traffic.
                </p>
      </div>
      {/* Q3 */}
      <div className="bg-primary/60 rounded-2xl p-6 flex flex-col gap-2">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white flex items-start gap-2">
      <HelpCircle className="text-secondary shrink-0 h-5 w-5" />
                  Do you carry locking wheel nut removal tools?
                </h3>
      <p className="text-[15px] leading-[24px] text-gray-400 pl-8">
                  Every Direct Tyre Solutions mobile van carries specialist master locking wheel nut removal tooling to cleanly extract stripped, lost, or overtightened security lugs without damaging your alloy wheels.
                </p>
      </div>
      {/* Q4 */}
      <div className="bg-primary/60 rounded-2xl p-6 flex flex-col gap-2">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white flex items-start gap-2">
      <HelpCircle className="text-secondary shrink-0 h-5 w-5" />
                  What tyre brands do you stock for immediate roadside callout?
                </h3>
      <p className="text-[15px] leading-[24px] text-gray-400 pl-8">
                  We hold extensive inventory across Michelin, Continental, Pirelli, Goodyear, Dunlop, and Bridgestone, as well as cost-effective mid-range and budget options across standard, run-flat, and commercial ratings.
                </p>
      </div>
      {/* Q5 */}
      <div className="bg-primary/60 rounded-2xl p-6 flex flex-col gap-2">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white flex items-start gap-2">
      <HelpCircle className="text-secondary shrink-0 h-5 w-5" />
                  How do payments work on the roadside?
                </h3>
      <p className="text-[15px] leading-[24px] text-gray-400 pl-8">
                  No upfront deposits required over the telephone for standard callouts. Once the technician completes the job and torques the wheel nuts, you pay via chip &amp; pin, contactless card, Apple Pay, or Google Pay.
                </p>
      </div>
      {/* Q6 */}
      <div className="bg-primary/60 rounded-2xl p-6 flex flex-col gap-2">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white flex items-start gap-2">
      <HelpCircle className="text-secondary shrink-0 h-5 w-5" />
                  Are you available during bank holidays and overnight?
                </h3>
      <p className="text-[15px] leading-[24px] text-gray-400 pl-8">
                  Yes, our Bury operations are genuinely 24 hours a day, 365 days a year. We provide immediate callouts at 3:00 AM on Sunday just as readily as 11:00 AM on a Tuesday.
                </p>
      </div>
      </div>
      </div>
      </section>
      {/* RELATED NEARBY LOCATIONS */}
      <section className="w-full bg-primary-dark py-space-lg">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin flex flex-col items-center gap-space-md text-center">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-wider">Nearby Districts Covered</span>
      <div className="flex flex-wrap justify-center gap-3">
      <a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/60 hover:bg-primary/80 text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold transition-colors" href="#prestwich">
      <MapPin className="text-[15px] leading-[24px] text-secondary h-5 w-5" />
                Prestwich
              </a>
      <a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/60 hover:bg-primary/80 text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold transition-colors" href="#whitefield">
      <MapPin className="text-[15px] leading-[24px] text-secondary h-5 w-5" />
                Whitefield
              </a>
      <a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/60 hover:bg-primary/80 text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold transition-colors" href="#radcliffe">
      <MapPin className="text-[15px] leading-[24px] text-secondary h-5 w-5" />
                Radcliffe
              </a>
      <a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/60 hover:bg-primary/80 text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold transition-colors" href="#ramsbottom">
      <MapPin className="text-[15px] leading-[24px] text-secondary h-5 w-5" />
                Ramsbottom
              </a>
      <a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/60 hover:bg-primary/80 text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold transition-colors" href="#heywood">
      <MapPin className="text-[15px] leading-[24px] text-secondary h-5 w-5" />
                Heywood
              </a>
      </div>
      </div>
      </section>
      {/* FINAL CTA (SOLID GOLD BANNER, CRITICAL END POINT) */}
      <section className="w-full bg-primary-dark pb-space-xl">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
      <div className="w-full rounded-2xl bg-secondary p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-primary shadow-2xl">
      <div className="flex flex-col gap-2 text-center md:text-left">
      <div className="inline-flex items-center gap-2 justify-center md:justify-start">
      <span className="w-3 h-3 rounded-full bg-primary animate-ping"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider font-bold">Bury Mobile Tyre Team on Standby</span>
      </div>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold font-black">
                  Emergency Breakdown? We Are 30 Mins Away.
                </h2>
      <p className="text-[15px] leading-[24px] opacity-90 max-w-xl">
                  Direct roadside and on-site tyre fitting throughout Bury and adjacent motorways. Zero membership required. Pay roadside when satisfied.
                </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
      <a className="inline-flex items-center gap-3 bg-primary-dark hover:bg-primary/60 text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold px-8 py-5 rounded-full transition-transform active:scale-95 shadow-xl" href="tel:07955266077">
      <PhoneCall className="text-[20px] leading-[26px] font-bold text-secondary h-5 w-5" fill="currentColor" strokeWidth={0} />
      <span>07955 266 077</span>
      </a>
      </div>
      </div>
      </div>
      </section>
      </div>
    </main>
  );
}
