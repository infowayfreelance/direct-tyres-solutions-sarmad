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
  Phone,
  Navigation2,
  ShieldCheck,
  ChevronDown,
  Zap,
  Truck,
} from "lucide-react";
import ScrollDeck from "./ScrollDeck";

const stars = [0, 1, 2, 3, 4];

const services = [
  {
    icon: Disc,
    title: "Mobile Tyre Fitting in Failsworth",
    body: "New tyres mounted and fitted on your driveway, work car park, or hard shoulder. Covering all tyre profiles from 14” to 23”, run-flats, and commercial EV ratings.",
    tag: "All Brands Handled",
  },
  {
    icon: Gauge,
    title: "Mobile Wheel Balancing in Failsworth",
    body: "Computerized mobile spin balancing prevents high-speed vibration and irregular tread scuffing after roadside pothole strikes along the A62 Oldham Road.",
    tag: "Digital Precision",
  },
  {
    icon: Wrench,
    title: "Rapid Puncture Repair in Failsworth",
    body: "Full BSAU159-compliant tread repairs. If your tyre has picked up a screw or nail near Daisy Nook or local roads, we safely plug and reseal on-site.",
    tag: "Safety Certified",
  },
  {
    icon: Unlock,
    title: "Emergency Locking Nut Removal",
    body: "Stripped, deformed, or missing locking wheel nut keys resolved without scratching your alloy wheels. Specialized torque extraction tools onboard every unit.",
    tag: "Damage-Free Process",
  },
];

const testimonials = [
  {
    quote:
      "Blew out my front tire on Oldham Road right in the morning rush towards Manchester. Direct Tyre Solutions arrived in literally 22 minutes. The technician had the van kitted out like a surgical suite. Got me to my meeting on time.",
    name: "Gary L.",
    place: "Oldham Road (A62)",
    tag: "Emergency Callout",
  },
  {
    quote:
      "Walked out to a flat tyre on my driveway near Daisy Nook on Sunday morning. Booked online and they turned up with the exact Michelin replacement. No garage queues, no hassle, extremely polite operative.",
    name: "Priya N.",
    place: "Daisy Nook Environs",
    tag: "Driveway Service",
  },
  {
    quote:
      "Pulled off the M60 at Junction 22 with tyre pressure dropping fast. They were already close in Failsworth and pulled up safely behind me with hazard beacons. Replaced and re-balanced in under 20 mins.",
    name: "Steven C.",
    place: "M60 J22 Commuter",
    tag: "Highway Rescue",
  },
  {
    quote:
      "Lost my locking nut key and had a shredded sidewall by Newton Heath border. Other companies wanted to tow me. Direct Tyre Solutions extracted the stubborn nut cleanly without touching the rims. 10/10.",
    name: "David K.",
    place: "Woodhouses Border",
    tag: "Locking Nut",
  },
];

export default function FailsworthPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* 1. LAYERED OFFSET HERO */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[380px] md:h-[460px] lg:h-[520px]">
          <Image
            src="/hero-section-images-936x527.webp"
            alt="Direct Tyre Solutions mobile tyre fitting van with technician at roadside"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
          <div className="absolute top-6 left-4 md:left-6 lg:left-8 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/85 backdrop-blur-md text-white shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-80" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-secondary">Live Dispatch Active</span>
              <span className="text-sm text-white/10 hidden sm:inline">• Failsworth &amp; A62 Corridor</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 -mt-28 md:-mt-36 lg:-mt-44 relative z-20 pb-12">
          <div className="bg-primary text-white rounded-xl p-6 md:p-8 lg:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
                  <div className="flex items-center text-secondary">
                    {stars.map((i) => (
                      <Star key={i} className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-white">4.9 / 5.0</span>
                  <span className="text-sm text-white/10">Verified Google Rating across Oldham &amp; Manchester</span>
                </div>
                <h1 className="font-heading uppercase text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] tracking-[-0.02em] md:tracking-[-0.03em] text-white">
                  24/7 Mobile Tyre Fitting in Failsworth
                </h1>
                <p className="text-lg text-white/10 max-w-2xl leading-relaxed">
                  Professional mobile tyre replacement fitted on your drive or roadside in Failsworth within 20–30 minutes. Rapid response technicians deployed with full workshop vans.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <a
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-secondary text-primary hover:bg-secondary-hover transition-transform active:scale-95 shadow-md text-sm font-bold"
                    href="tel:07955266077"
                  >
                    <PhoneCall className="h-[22px] w-[22px] text-secondary" />
                    <span>Call Now: 07955 266 077</span>
                  </a>
                  <a
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-primary text-sm font-bold hover:bg-white/10 transition-colors shadow-sm"
                    href="#quick-quote"
                  >
                    <span>Get Instant Quote</span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-4 bg-white/5 rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-secondary">Local Dispatch Base</span>
                  <span className="text-xs text-secondary">J22 M60 Active</span>
                </div>
                <div className="space-y-1">
                  <div className="text-[11px] font-bold text-white/10 uppercase tracking-[0.06em]">Standard Arrival Window</div>
                  <div className="text-[40px] leading-[48px] text-secondary font-black">20–30 MIN</div>
                  <div className="text-sm text-white/10">Rapid roadside or home driveway fitting equipped for all passenger and fleet tyre specifications.</div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="bg-white/10 p-2 rounded">
                    <div className="text-lg font-semibold text-white">365</div>
                    <div className="text-[11px] font-bold text-white/10">Days / Year</div>
                  </div>
                  <div className="bg-white/10 p-2 rounded">
                    <div className="text-lg font-semibold text-secondary">£0</div>
                    <div className="text-[11px] font-bold text-white/10">Hidden Callout</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LOCAL INTRO */}
      <section className="w-full py-8 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-primary/60 border border-white/10 rounded-xl p-6 md:p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-4 space-y-2">
                <span className="text-secondary-hover text-[11px] font-bold uppercase tracking-[0.06em]">Local Community Coverage</span>
                <h2 className="font-heading text-[30px] leading-[38px] tracking-[-0.015em] font-bold text-white">
                  Failsworth&rsquo;s Trusted Roadside Lifeline
                </h2>
                <div className="flex items-center gap-2 pt-1">
                  <Navigation2 className="h-6 w-6 text-secondary-hover" />
                  <span className="text-sm font-semibold text-white">Oldham Road, Daisy Nook &amp; M60 J22</span>
                </div>
              </div>
              <div className="lg:col-span-8">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Serving as the vital arterial bridge connecting Oldham and Manchester city centre along the busy Oldham Road (A62), Failsworth experiences heavy commercial and commuter flow every single day. Road surfaces around the Rochdale Canal corridor, residential avenues near Daisy Nook Country Park, and the M60 Junction 22 roundabout often generate high tire wear and sudden punctures. When debris, potholes, or blowouts halt your journey, Direct Tyre Solutions brings fully equipped workshop vans straight to your vehicle&rsquo;s exact spot—changing, repairing, or balancing tyres without towing delays or disrupting your schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="w-full py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-secondary-hover text-[11px] font-bold uppercase tracking-[0.06em]">Precision Mobile Workshop</span>
            <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white">Emergency &amp; At-Home Tyre Services</h2>
            <p className="text-base text-gray-300">
              We stock premium, mid-range, and economy brands inside state-of-the-art mobile fitting bays operating across all Failsworth postcodes (M35).
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-primary/60 border border-white/10 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-heading text-[22px] leading-[28px] font-semibold text-white">{service.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{service.body}</p>
                </div>
                <div className="pt-1 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-secondary-hover">{service.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="w-full py-12 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-primary text-white rounded-xl p-6 md:p-8 lg:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-secondary">Streamlined Dispatch Flow</span>
                <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white">How Mobile Fitting Works</h2>
              </div>
              <div className="flex items-center gap-2 bg-secondary/20 px-4 py-1 rounded-full">
                <Zap className="h-5 w-5 text-secondary" />
                <span className="text-sm font-semibold text-white">Guaranteed Response Window: 20–30 mins in Failsworth</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  n: "01",
                  icon: Phone,
                  title: "Call or Send Reg",
                  body: (
                    <>
                      Ring our Failsworth dispatcher at <strong className="text-white">07955 266 077</strong> or enter your registration. We identify your tyre dimensions instantly.
                    </>
                  ),
                },
                {
                  n: "02",
                  icon: Navigation2,
                  title: "Rapid Van Dispatched",
                  body: "A certified technician routes straight to your vehicle via the A62 or M60 J22 carrying your selected tyre brand and specialist balancing gear.",
                },
                {
                  n: "03",
                  icon: ShieldCheck,
                  title: "Fitted & Drive Away",
                  body: "We remove the damaged tyre, fit the new rubber, dynamically balance wheels, safely torque nuts, and responsibly recycle the old casing.",
                },
              ].map((step) => (
                <div key={step.n} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[40px] leading-[48px] font-extrabold text-secondary">{step.n}</span>
                    <step.icon className="h-6 w-6 text-white/10" />
                  </div>
                  <h3 className="font-heading text-[22px] leading-[28px] font-semibold text-white">{step.title}</h3>
                  <p className="text-base text-white/10 leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. COVERAGE / NEARBY AREAS */}
      <section className="w-full py-8 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-secondary text-[11px] font-bold uppercase tracking-[0.06em]">Local Boundary Proximity</span>
              <h2 className="font-heading text-[30px] leading-[38px] tracking-[-0.015em] font-bold text-white">
                Greater Manchester Rapid Response Radius
              </h2>
            </div>
            <div className="text-sm text-white/10 max-w-md">
              Continuous patrolling units positioned throughout the M35 postcode district and neighboring regional junctions.
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <span className="px-4 py-2 rounded-full bg-secondary text-primary text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary" /> Failsworth (Hub)
            </span>
            <Link className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white text-sm font-semibold flex items-center gap-2" href="/mobile-tyre-fitting-oldham">
              <span className="w-2 h-2 rounded-full bg-secondary" /> Oldham
            </Link>
            <Link className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white text-sm font-semibold flex items-center gap-2" href="/mobile-tyre-fitting-chadderton">
              <span className="w-2 h-2 rounded-full bg-secondary" /> Chadderton
            </Link>
            <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary" /> Manchester City Centre
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary" /> Ancoats
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary" /> Newton Heath
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary" /> Woodhouses
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary" /> Hollinwood
            </span>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIAL SCROLL DECK */}
      <section className="w-full py-12 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-secondary-hover text-[11px] font-bold uppercase tracking-[0.06em]">Verified Local Feedback</span>
              <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white">Drivers Rescued in Failsworth</h2>
            </div>
          </div>
          <ScrollDeck>
            {testimonials.map((review) => (
              <div
                key={review.name}
                data-deck-card
                className="w-[320px] md:w-[380px] shrink-0 snap-start bg-primary/60 border border-white/10 p-6 rounded-xl shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center text-secondary">
                    {stars.map((i) => (
                      <Star key={i} className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="text-base text-gray-300 italic">&ldquo;{review.quote}&rdquo;</p>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-lg font-semibold text-white">{review.name}</div>
                    <div className="text-sm text-gray-400">{review.place}</div>
                  </div>
                  <span className="text-[11px] font-bold bg-white/10 px-2 py-1 rounded uppercase text-gray-300">{review.tag}</span>
                </div>
              </div>
            ))}
          </ScrollDeck>
        </div>
      </section>

      {/* 7. PRICING CALLOUT WITH REG LOOKUP */}
      <section className="w-full py-8 bg-primary-dark" id="quick-quote">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-primary text-white rounded-xl p-6 md:p-8 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-[11px] font-bold uppercase tracking-[0.06em]">
                  <span>Transparent Failsworth Pricing</span>
                </div>
                <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white">Instant Guaranteed Local Quote</h2>
                <p className="text-base text-white/10 leading-relaxed">
                  No hidden travel charges or unannounced roadside markups. Every single price quote includes on-site mobile van dispatch, tyre casing, new rubber valves, electronic wheel balancing, and old tyre environmental disposal.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <div className="flex items-center gap-2 text-white/10 text-sm">
                    <CheckCircle2 className="h-[18px] w-[18px] text-secondary" />
                    <span>Includes Mobile Callout</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/10 text-sm">
                    <CheckCircle2 className="h-[18px] w-[18px] text-secondary" />
                    <span>Eco Casing Recycling</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/10 text-sm">
                    <CheckCircle2 className="h-[18px] w-[18px] text-secondary" />
                    <span>Digital Balancing Included</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 bg-primary/60 border border-white/10 rounded-xl p-4 md:p-6 text-white shadow-md">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.06em]" htmlFor="regInput">
                      Look Up By Vehicle Registration
                    </label>
                    <div className="flex rounded-lg overflow-hidden shadow-inner bg-secondary">
                      <div className="w-10 bg-[#003399] flex flex-col items-center justify-between py-2 text-white font-bold text-[10px] leading-tight">
                        <span>GB</span>
                      </div>
                      <input
                        className="w-full bg-transparent px-4 py-2 text-[22px] leading-[28px] text-black font-extrabold uppercase placeholder-black/40 focus:outline-none tracking-wider"
                        id="regInput"
                        placeholder="ENTER REG (e.g. MV68 XTK)"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.06em]" htmlFor="postcodeSelect">
                      Your Location
                    </label>
                    <select className="w-full bg-primary px-4 py-2 rounded-lg text-base text-white focus:outline-none" id="postcodeSelect">
                      <option value="M35">Failsworth (M35 Postcodes)</option>
                      <option value="OL8">Oldham / Hollinwood (OL8 / OL9)</option>
                      <option value="M40">Newton Heath / Moston (M40)</option>
                      <option value="M60">M60 J22 Immediate Hard Shoulder</option>
                      <option value="other">Other Greater Manchester Area</option>
                    </select>
                  </div>
                  <a
                    className="w-full py-2 px-4 rounded-lg bg-secondary text-primary text-sm font-bold hover:bg-secondary-hover transition-colors flex items-center justify-center gap-2 shadow-md"
                    href="tel:07955266077"
                  >
                    <Zap className="h-5 w-5" />
                    <span>Get Instant Quote &amp; Check Stock</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <section className="w-full py-12 bg-primary">
        <div className="max-w-3xl mx-auto px-4 md:px-6 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-secondary-hover text-[11px] font-bold uppercase tracking-[0.06em]">Common Inquiries</span>
            <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white">Frequently Asked Questions</h2>
            <p className="text-base text-gray-300">Answers to common queries from motorists and fleet managers around Failsworth.</p>
          </div>
          <div className="space-y-3">
            {[
              {
                q: "How fast can you reach me on Oldham Road (A62) during rush hour?",
                a: "Our vans are continuously positioned around the M60 Junction 22 and the Oldham-Manchester boundary line. Even during peak morning and evening commuter hours along the A62, our typical arrival time across Failsworth is between 20 and 30 minutes from booking confirmation.",
              },
              {
                q: "Can you fit my new tyres directly on my residential driveway in Failsworth?",
                a: "Yes, absolutely. Our mobile units are completely self-contained with onboard pneumatic generators, bead breakers, and digital balancing machines. As long as our technician has safe clearance around the vehicle, we can fit tyres on driveways, street parking, or office spaces throughout M35 without touching your household power.",
              },
              {
                q: "Do you take care of old tyre casing recycling?",
                a: "Yes. Every tyre replacement quote includes free, environmentally certified disposal. We load your old, pierced, or worn-down casing into the mobile bay and return it to licensed UK rubber recycling facilities in accordance with Environment Agency requirements.",
              },
              {
                q: "Do you cover commercial vans, delivery couriers, and business fleets?",
                a: "We support commercial transit vans, fleet haulers, and local delivery fleets based along the Failsworth industrial trading corridors. We stock heavy-duty commercial (C-rated) reinforced tyres and offer priority contract turnarounds to minimize downtime for active delivery vehicles.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group bg-primary/60 border border-white/10 rounded-lg p-4 shadow-sm [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="w-full flex items-center justify-between text-left gap-3 cursor-pointer list-none">
                  <span className="text-[22px] leading-[28px] font-semibold text-white">{faq.q}</span>
                  <ChevronDown className="h-6 w-6 text-secondary-hover transition-transform duration-300 group-open:rotate-180 shrink-0" />
                </summary>
                <div className="pt-3 text-base text-gray-300 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LOCAL MAP SECTION */}
      <section className="w-full py-12 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-primary/60 border border-white/10 rounded-xl p-6 md:p-8 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-secondary-hover text-[11px] font-bold uppercase tracking-[0.06em]">Geographic Response Map</span>
                <h2 className="font-heading text-[30px] leading-[38px] tracking-[-0.015em] font-bold text-white">Failsworth A62 &amp; M60 Dispatch Grid</h2>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1 rounded-full text-white text-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
                <span>Active Response Zone: 100% Failsworth Coverage</span>
              </div>
            </div>
            <div className="relative w-full h-80 bg-primary rounded-xl overflow-hidden shadow-inner flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full opacity-40" preserveAspectRatio="none" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,200 Q400,180 800,200" fill="none" stroke="var(--color-gray-400, #9ca3af)" strokeWidth="6" />
                <path d="M150,0 Q300,220 450,400" fill="none" stroke="var(--color-gray-400, #9ca3af)" strokeWidth="4" />
                <path d="M550,0 Q500,180 650,400" fill="none" stroke="var(--color-gray-400, #9ca3af)" strokeWidth="4" />
                <path d="M100,50 Q400,20 700,120 Q650,380 200,350 Z" fill="none" stroke="var(--color-secondary)" strokeDasharray="8 6" strokeWidth="3" />
                <line stroke="var(--color-primary-light)" strokeWidth="2" x1="200" x2="600" y1="100" y2="300" />
                <line stroke="var(--color-primary-light)" strokeWidth="2" x1="300" x2="500" y1="350" y2="50" />
                <line stroke="var(--color-primary-light)" strokeWidth="2" x1="50" x2="750" y1="280" y2="260" />
              </svg>
              <div className="relative z-10 flex flex-col items-center text-center p-4">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-44 h-44 rounded-full bg-secondary/15 animate-ping" />
                  <div className="absolute w-32 h-32 rounded-full bg-secondary/25" />
                  <div className="w-16 h-16 rounded-full bg-secondary text-primary flex items-center justify-center shadow-xl">
                    <Truck className="h-8 w-8" />
                  </div>
                </div>
                <div className="mt-3 bg-primary/90 backdrop-blur-md px-4 py-2 rounded-lg text-white shadow-lg border border-white/10">
                  <div className="text-lg font-bold text-secondary">FAILSWORTH (M35)</div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.06em] text-white/10">A62 Corridor • M60 J22 • Daisy Nook</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CLOSING CTA */}
      <section className="w-full py-12 bg-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-primary-dark via-primary to-primary rounded-2xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left max-w-xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-secondary">Immediate Field Dispatch</span>
              <h2 className="font-heading text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] tracking-[-0.02em] md:tracking-[-0.03em] font-bold text-white">
                Stuck with a tyre in Failsworth? We&rsquo;re on our way.
              </h2>
              <p className="text-base text-white/10">Don&rsquo;t pay for recovery tow trucks. Get fitted right where you stand within 20 to 30 minutes.</p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-center gap-3 w-full md:w-auto shrink-0">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-secondary text-primary hover:bg-secondary-hover text-lg font-semibold transition-all shadow-lg text-center"
                href="tel:07955266077"
              >
                <PhoneCall className="h-6 w-6" />
                <span>07955 266 077</span>
              </a>
              <Link
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-all text-center"
                href="/#contact"
              >
                Request Callback
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
