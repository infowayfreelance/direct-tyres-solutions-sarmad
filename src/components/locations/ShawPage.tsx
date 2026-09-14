import Image from "next/image";
import Link from "next/link";
import {
  Star,
  PhoneCall,
  CheckCircle2,
  Disc,
  Gauge,
  Wrench,
  Unlock,
  Truck,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const stars = [0, 1, 2, 3, 4];

const services = [
  {
    icon: Disc,
    title: "Mobile Tyre Fitting in Shaw",
    body: "Complete on-location fitting for worn, slit, or blown tyres. We install fresh rubber, replace the valve stems, and inspect your bead seals on your driveway or kerbside.",
    footer: "20–35 min dispatch",
  },
  {
    icon: Gauge,
    title: "Computerized Wheel Balancing",
    body: "Every fitted tyre receives high-precision digital dynamic balancing inside our van. Prevents steering vibration, protects suspension arms, and stops premature tread scalloping.",
    footer: "Included with fitting",
  },
  {
    icon: Wrench,
    title: "BS-Standard Puncture Repairs",
    body: "Strict adherence to British Standard BSAU159. If a screw or nail is lodged within the central 70% tread zone, we execute safe internal combi-plug repairs to save you money.",
    footer: "Safety certified",
  },
  {
    icon: Unlock,
    title: "Locking Wheel Nut Extraction",
    body: "Lost security key or overtightened, stripped lug nuts? Our mobile engineers carry specialist non-impact extraction tools that safely dislodge seized nuts without damaging alloy rims.",
    footer: "Zero rim damage",
  },
];

export default function ShawPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* 1. HERO */}
      <section className="relative w-full bg-primary-dark py-12 lg:py-18 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 shadow-sm mb-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-secondary-hover">Shaw &amp; Crompton Rapid Dispatch</span>
                <span className="text-gray-300 text-[11px] font-bold">• 20–35 Min Window</span>
              </div>
              <h1 className="font-heading uppercase text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] tracking-[-0.02em] md:tracking-[-0.03em] text-white font-extrabold mb-4">
                24/7 Mobile Tyre Fitting in <span className="text-secondary underline decoration-secondary decoration-4 underline-offset-8">Shaw</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-xl mb-6 leading-relaxed">
                Local emergency tyre fitting dispatched to your doorstep or roadside in Shaw within 20–35 minutes. Zero callout charge surprises, fully mobile workshop units on call 24 hours a day.
              </p>
              <div className="flex items-center gap-2 mb-8 p-2 px-3 rounded-full bg-primary/60 border border-white/10 shadow-sm">
                <div className="flex items-center text-secondary">
                  {stars.map((i) => (
                    <Star key={i} className="h-5 w-5" fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <span className="text-sm font-bold text-white ml-1">4.9 / 5.0</span>
                <span className="text-sm text-gray-300">Shaw Driver Verified</span>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <a
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-secondary text-primary hover:bg-secondary-hover text-lg font-semibold transition-transform active:scale-95 shadow-md"
                  href="tel:07955266077"
                >
                  <PhoneCall className="h-[22px] w-[22px]" />
                  <span>Call 07955 266 077</span>
                </a>
                <Link
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-white hover:bg-primary-dark text-lg font-semibold transition-colors shadow-sm"
                  href="/#contact"
                >
                  Get a Free Quote
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 pt-4 text-gray-300 text-[11px] font-bold uppercase tracking-[0.06em]">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-secondary" /> No Hidden Callout
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-secondary" /> Locking Key Removal
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-secondary" /> Domestic &amp; Fleet
                </span>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-primary p-2">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-white/10">
                  <Image
                    src="/gallery-onsite-wheel-fitting.webp"
                    alt="Direct Tyre Solutions technician fitting a tyre on a residential street in Shaw"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-white/95 backdrop-blur-sm shadow-md flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-secondary/15 flex items-center justify-center text-secondary-hover">
                        <Truck className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase text-secondary-hover">Shaw Duty Van #4</div>
                        <div className="text-xs text-primary-dark">Available for dispatch now</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-white">25 min</div>
                      <div className="text-[11px] font-bold uppercase text-gray-300">Est. Arrival</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LOCAL INTRO */}
      <section className="w-full bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-4">
              <span className="text-secondary-hover text-[11px] font-bold uppercase tracking-[0.06em]">Local Community Expertise</span>
              <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white mt-1">
                Rapid Tyre Care Across Shaw &amp; Crompton
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="p-6 rounded-2xl bg-primary/60 border border-white/10 shadow-sm">
                <p className="text-lg text-gray-300 leading-relaxed">
                  When a flat or sudden blowout strikes in <strong className="text-white font-semibold">Shaw</strong>, waiting hours for a tow truck is out of the question. Whether you have clipped a kerb along busy <span className="text-white font-semibold">Beal Lane</span>, discovered a puncture after leaving your vehicle at the <span className="text-white font-semibold">Shaw Metrolink park-and-ride commuter car park</span>, or experienced tyre failure climbing the exposed tarmac on <span className="text-white font-semibold">Buckstones Road</span> toward the Pennine moors, our fleet responds immediately. The rugged rural lanes heading toward the hills frequently conceal sharp shale and frost-bitten potholes that claim sidewalls without warning. Our purpose-built, self-contained mobile tyre vans bring industrial pneumatic changers, electronic balancing hubs, and fresh tyres right to your specific location in <strong className="text-white font-semibold">Shaw</strong>, resolving your emergency without a costly recovery truck.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="w-full bg-primary-dark py-12 lg:py-18">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-secondary-hover text-[11px] font-bold uppercase tracking-[0.06em]">Mobile Engineering Solutions</span>
              <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white mt-1">Our Shaw Tyre Services</h2>
            </div>
            <p className="text-base text-gray-300 max-w-md mt-2 md:mt-0">
              Equipped to replace, repair, and balance car, 4x4, EV, and light commercial tyres on site wherever your car is parked.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-6 rounded-2xl bg-primary/60 border border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary-hover mb-4 group-hover:bg-secondary group-hover:text-primary transition-colors">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-heading text-[22px] leading-[28px] font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed mb-4">{service.body}</p>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-secondary-hover text-sm font-semibold">
                  <span>{service.footer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="w-full bg-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-secondary-hover text-[11px] font-bold uppercase tracking-[0.06em]">Fast Roadside Recovery</span>
            <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white mt-1">3 Simple Steps to Get Rolling</h2>
            <p className="text-base text-gray-300 mt-2">From your call to a fully fitted replacement: guaranteed 20–35 minute response anywhere in Shaw.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                title: "Call With Your Location",
                body: "Ring our 24/7 hotline. State your vehicle registration or tyre specs (e.g. 225/45 R17) and your spot in Shaw, whether by Beal Lane or Crompton moor.",
              },
              {
                n: "02",
                title: "Van Dispatched (20–35 Mins)",
                body: "We lock in an exact fixed quote with no hidden callout fees. Our stocked van is instantly routed via GPS directly to your roadside or driveway.",
              },
              {
                n: "03",
                title: "Fitted & Safe Departure",
                body: "Our technician replaces the tyre, fits a fresh valve, dynamically balances the wheel, and disposes of the casing. Pay securely via card on the spot.",
              },
            ].map((step) => (
              <div key={step.n} className="relative p-8 rounded-2xl bg-primary/60 border border-white/10 shadow-sm">
                <div className="text-secondary-hover text-[56px] leading-none font-extrabold select-none mb-3">{step.n}</div>
                <h3 className="font-heading text-[22px] leading-[28px] font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-base text-gray-300 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COVERAGE / NEARBY AREAS */}
      <section className="w-full bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5">
              <span className="text-secondary text-[11px] font-bold uppercase tracking-[0.06em]">Oldham Borough Coverage</span>
              <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white mt-2 mb-3">
                Immediate Dispatch Across Shaw &amp; Surrounds
              </h2>
              <p className="text-base text-gray-400 leading-relaxed">
                Our technicians operate continuously throughout Shaw and all adjacent townships, keeping local motorists and cross-Pennine commuters moving without delays.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-secondary text-primary flex flex-col justify-between">
                  <span className="text-[11px] font-bold uppercase text-secondary">Primary Hub</span>
                  <span className="text-lg font-semibold">Shaw</span>
                  <span className="text-sm mt-1 text-white/80">20–35 min</span>
                </div>
                <Link
                  className="p-4 rounded-xl bg-white/5 hover:bg-secondary transition-all flex flex-col justify-between"
                  href="/mobile-tyre-fitting-oldham"
                >
                  <span className="text-[11px] font-bold uppercase text-secondary">Metropolitan</span>
                  <span className="text-lg font-semibold text-white">Oldham</span>
                  <span className="text-sm text-gray-400 mt-1">20–30 min</span>
                </Link>
                <div className="p-4 rounded-xl bg-white/5 flex flex-col justify-between">
                  <span className="text-[11px] font-bold uppercase text-secondary">Adjacent</span>
                  <span className="text-lg font-semibold text-white">Royton</span>
                  <span className="text-sm text-gray-400 mt-1">15–25 min</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 flex flex-col justify-between">
                  <span className="text-[11px] font-bold uppercase text-secondary">Hills / Moors</span>
                  <span className="text-lg font-semibold text-white">Saddleworth</span>
                  <span className="text-sm text-gray-400 mt-1">25–35 min</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 flex flex-col justify-between">
                  <span className="text-[11px] font-bold uppercase text-secondary">Rochdale Border</span>
                  <span className="text-lg font-semibold text-white">Milnrow</span>
                  <span className="text-sm text-gray-400 mt-1">15–20 min</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 flex flex-col justify-between">
                  <span className="text-[11px] font-bold uppercase text-secondary">Local Sub-district</span>
                  <span className="text-lg font-semibold text-white">Crompton</span>
                  <span className="text-sm text-gray-400 mt-1">High Crompton</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="w-full bg-primary-dark py-12 lg:py-18">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-secondary-hover text-[11px] font-bold uppercase tracking-[0.06em]">Real Local Experiences</span>
            <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white mt-1">Trusted Across Shaw</h2>
            <p className="text-base text-gray-300 mt-1">Read reviews from drivers we have rescued on local roads.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Punctured a front tyre right on Beal Lane during rush hour. The technician arrived in exactly 22 minutes, fitted a new Bridgestone, and balanced the wheel without issue. Brilliant service.",
                initials: "NP",
                name: "Neil P.",
                place: "Beal Lane, Shaw",
                bg: "bg-primary",
              },
              {
                quote:
                  "Had a sidewall tear halfway up Buckstones Road in freezing weather. Direct Tyre Solutions were polite, totally upfront about costs, and sorted the wheel out in under twenty minutes.",
                initials: "RD",
                name: "Rebecca D.",
                place: "Buckstones Road, Shaw",
                bg: "bg-secondary",
              },
              {
                quote:
                  "Returned to my car at the Shaw Metrolink park-and-ride to find a completely flat tyre. Phoned them up; they arrived before my tram friends even reached Oldham. Absolute lifesavers.",
                initials: "MK",
                name: "Martin K.",
                place: "Shaw Station Commuter",
                bg: "bg-primary",
              },
            ].map((review) => (
              <div key={review.name} className="p-6 rounded-2xl bg-primary/60 border border-white/10 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center text-secondary mb-3">
                    {stars.map((i) => (
                      <Star key={i} className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="text-base text-white mb-4 italic">&ldquo;{review.quote}&rdquo;</p>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center gap-2">
                  <div className={`w-9 h-9 rounded-full ${review.bg} text-white flex items-center justify-center font-bold text-xs`}>
                    {review.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{review.name}</div>
                    <div className="text-[11px] font-bold uppercase text-gray-300">{review.place}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PRICING CALLOUT */}
      <section className="w-full bg-primary py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-primary text-white shadow-xl relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-white/10 text-secondary text-[11px] font-bold uppercase tracking-[0.06em] mb-3">
                  <ShieldCheck className="h-4 w-4" />
                  100% Honest Pricing Guarantee
                </div>
                <h3 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white mb-2">
                  Transparent Quotes With No Hidden Surcharges in Shaw
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                  We provide an all-inclusive quote over the telephone before dispatching a van to Shaw. Your rate covers mobile callout, the tyre unit, rubber valve replacement, computerized balancing, and eco-friendly casing disposal.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-4">
                <div className="text-left lg:text-right">
                  <div className="text-[11px] font-bold uppercase tracking-[0.06em] text-secondary">Live Dispatch Contact</div>
                  <div className="text-[30px] leading-[38px] font-extrabold text-white">07955 266 077</div>
                </div>
                <a
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary hover:bg-secondary-hover text-primary text-lg font-semibold transition-colors shadow-md"
                  href="tel:07955266077"
                >
                  <PhoneCall className="h-5 w-5" />
                  Confirm Price Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ 2x2 GRID */}
      <section className="w-full bg-primary-dark py-12 lg:py-18">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-secondary-hover text-[11px] font-bold uppercase tracking-[0.06em]">Frequently Asked Questions</span>
            <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white mt-1">Shaw Mobile Tyre Fitting FAQ</h2>
            <p className="text-base text-gray-300 mt-1">Clear answers to your emergency roadside and driveway queries.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "How fast can a technician arrive in Shaw?",
                a: (
                  <>
                    Our active patrol vehicles cover the OL2 district continuously. Under standard traffic conditions, we arrive at your location in Shaw or Crompton within <strong className="text-white">20 to 35 minutes</strong> of your emergency call.
                  </>
                ),
              },
              {
                q: "Do you service cars parked at Shaw Metrolink station?",
                a: (
                  <>
                    Yes, daily. We routinely help commuters stranded at the <strong className="text-white">Shaw and Crompton Metrolink park-and-ride</strong>. Provide your parking bay number and registration, and we can replace your tyre while you travel or meet you as you disembark.
                  </>
                ),
              },
              {
                q: "What if my locking wheel nut is rounded off or missing?",
                a: "Do not worry. Our vans carry inverse-thread extraction shrouds and specialist non-impact locking nut removers. We can safely remove stripped, overtightened, or damaged locking bolts without inflicting scratches or heat damage to your alloy rims.",
              },
              {
                q: "Do you carry budget, mid-range, and premium tyres?",
                a: "We hold extensive stocks across all price segments—from affordable economy tyres to trusted mid-range brands (Kumho, Hankook, Falken) and tier-one premium rubber (Michelin, Pirelli, Continental, Goodyear), including run-flats and EV-rated models.",
              },
            ].map((faq, i) => (
              <div key={faq.q} className="p-6 rounded-2xl bg-primary/60 border border-white/10 shadow-sm flex flex-col">
                <div className="flex items-start gap-3 mb-2">
                  <span className="w-8 h-8 rounded-lg bg-secondary/15 text-secondary-hover flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    Q{i + 1}
                  </span>
                  <h3 className="font-heading text-[22px] leading-[28px] font-semibold text-white">{faq.q}</h3>
                </div>
                <p className="text-base text-gray-300 leading-relaxed pl-11">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LOCAL MAP SECTION */}
      <section className="w-full bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-4">
              <span className="text-secondary-hover text-[11px] font-bold uppercase tracking-[0.06em]">GPS Dispatch Hub</span>
              <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white mt-1 mb-3">
                Shaw &amp; Crompton Service Radius
              </h2>
              <p className="text-base text-gray-300 leading-relaxed mb-4">
                Our local mobile units patrol the entire OL2 zone, encompassing High Crompton, Shaw town centre, Rushcroft, and Moorland fringes toward Denshaw.
              </p>
              <div className="p-4 rounded-xl bg-primary/60 border border-white/10 shadow-sm space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Primary Hub:</span>
                  <span className="text-white font-semibold">Shaw Town Centre</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Postcode Coverage:</span>
                  <span className="text-white font-semibold">OL2, OL1, OL16</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Average Response:</span>
                  <span className="text-secondary font-bold">25 Minutes</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 relative">
              <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/gallery-evening-home-visit.webp"
                  alt="Direct Tyre Solutions coverage across Shaw and Crompton, Oldham"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 pointer-events-none flex items-center justify-center">
                  <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-2 border-secondary bg-secondary/10 flex items-center justify-center animate-pulse">
                    <div className="w-8 h-8 rounded-full bg-secondary text-primary flex items-center justify-center shadow-lg">
                      <MapPin className="h-[18px] w-[18px]" />
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-primary-dark">Shaw Coverage Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CLOSING CTA */}
      <section className="w-full bg-primary-dark py-12 lg:py-18">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="rounded-3xl bg-secondary text-primary p-8 lg:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left relative overflow-hidden">
            <div className="absolute -left-12 -bottom-12 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
            <div className="max-w-2xl relative z-10">
              <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-secondary-hover">Immediate Roadside Dispatch</span>
              <h2 className="font-heading text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] tracking-[-0.02em] md:tracking-[-0.03em] font-extrabold text-white mt-1">
                Stuck with a tyre in Shaw? We&rsquo;re on our way.
              </h2>
              <p className="text-lg text-white/90 mt-2 leading-relaxed">
                Speak directly with our local dispatcher. No queues, no automated bots. A fully equipped van can be at your side in 20–35 minutes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-3 w-full lg:w-auto relative z-10 shrink-0">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-12 py-4 rounded-xl bg-primary text-white hover:bg-primary-dark text-[22px] font-bold transition-transform active:scale-95 shadow-lg"
                href="tel:07955266077"
              >
                <PhoneCall className="h-6 w-6 text-secondary" />
                <span>07955 266 077</span>
              </a>
              <div className="text-[11px] font-bold uppercase tracking-[0.06em] text-secondary-hover">Available 24 Hours • 7 Days A Week</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
