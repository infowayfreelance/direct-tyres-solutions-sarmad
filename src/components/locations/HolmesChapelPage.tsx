import Image from "next/image";
import { Check, ChevronDown, Clock, Compass, MapPin, MessageCircle, PhoneCall, ShieldCheck, Siren } from "lucide-react";

export default function HolmesChapelPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      <div className="flex flex-col w-full">
      {/* SECTION 1: HERO (Compact Single-Column Centered Flow) */}
      <section className="relative w-full overflow-hidden bg-primary-dark py- space-xl px-margin-mobile">
      <div className="absolute inset-0 bg-cover bg-center opacity-30" data-alt="A heavy duty mobile tyre replacement emergency van operating at dusk on the roadside with illuminated orange warning beacons and professional mechanical gear in Cheshire UK." style={{ backgroundImage: "url('/hero-section-images-936x527.webp')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary-dark/90 to-primary-dark"></div>
      <div className="relative mx-auto max-w-xl flex flex-col items-center text-center">
      {/* Live Status Indicator */}
      <div className="inline-flex items-center gap-2 px-space-md py-1 rounded-full bg-primary/80 backdrop-blur-md mb-space-lg shadow-sm">
      <span className="relative flex h-2.5 w-2.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
      </span>
      <span className="text-white uppercase tracking-wider">24/7 Rapid Response Active • Holmes Chapel</span>
      </div>
      {/* Main Headline */}
      <h1 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black uppercase mb-space-md">
              24/7 Mobile Tyre Fitting in Holmes Chapel
            </h1>
      {/* Subtitle */}
      <p className="text-[18px] leading-[28px] text-white mb-space-lg max-w-lg">
              Immediate mobile tyre replacement and puncture resolution across Holmes Chapel, M6 Junction 18, A50 Knutsford Road, and rural Cheshire links.
            </p>
      {/* Primary Action CTA */}
      <div className="flex flex-col sm:flex-row w-full gap-space-sm justify-center items-center">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-secondary text-primary font-heading tracking-wide transition-all transform active:scale-95 shadow-lg shadow-primary-container/20" href="tel:08009992470">
      <PhoneCall className="h-[20px] w-[20px]" fill="currentColor" strokeWidth={0} />
                Call 0800 999 2470
              </a>
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-primary/80 text-white transition-all active:scale-95" href="https://wa.me/448009992470">
      <MessageCircle className="h-[20px] w-[20px]" />
                WhatsApp Us
              </a>
      </div>
      <p className="text-gray-400 mt-space-sm uppercase tracking-wider">
              Typical local roadside arrival: 25–40 minutes
            </p>
      </div>
      </section>
      {/* SECTION 2: LOCAL INTRO & CONTEXT */}
      <section className="w-full bg-primary-dark py-space-xl px-margin-mobile">
      <div className="mx-auto max-w-xl flex flex-col space-y-space-md">
      <div className="flex items-center gap-2 text-gray-400 tracking-wider uppercase">
      <MapPin className="h-[16px] w-[16px]" />
              M6 J18 &amp; Cheshire Arterials
            </div>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">
              Avoid extortionate motorway towing fees and village recovery gridlock.
            </h2>
      <p className="text-[15px] leading-[24px] text-white">
              Stranded on the hard shoulder near <span className="text-white font-semibold">M6 Junction 18</span>, stuck down a pitch-black passing place on the <span className="text-white font-semibold">A50 Knutsford Road</span>, or dealing with a shredded sidewall on your rural farm track? National recovery operators typically quote 3 to 5 hours just to winch your car to an off-peak compound.
            </p>
      <p className="text-[15px] leading-[24px] text-white">
              Direct Tyre Solutions brings the entire tyre workshop to your vehicle chassis. Fully insured, Chapter 8 highway-compliant mobile vans carry commercial-grade bead breakers, computerized balancers, and a comprehensive stock of premium, mid-range, and run-flat tyres straight to you.
            </p>
      </div>
      </section>
      {/* SECTION 3: SERVICES BREAKDOWN */}
      <section className="w-full bg-primary-dark py-space-xl px-margin-mobile">
      <div className="mx-auto max-w-xl flex flex-col space-y-space-lg">
      <div>
      <span className="text-gray-400 font-bold uppercase tracking-wider">Field Operations</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white mt-1">Our Rapid-Fit Capabilities</h2>
      </div>
      {/* Supporting Real Image */}
      <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-primary/60">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="A certified mobile tyre technician in high-visibility protective gear using a cordless torque impact gun to seat wheel nuts on a vehicle roadside in Cheshire UK." fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-56 object-cover object-center" />
      </div>
      {/* Service Checklist */}
      <div className="flex flex-col space-y-space-sm">
      <div className="p-space-md rounded-2xl bg-primary/60 flex items-start gap-space-sm">
      <div className="p-1 rounded-full bg-accent text-white mt-0.5">
      <Check className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
      </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Emergency Highway Blowout Replacement</h3>
      <p className="text-[13px] leading-[18px] text-white mt-0.5">Full rim safety assessment, valve replacement, tyre mounting, and laser balancing on active motorway links.</p>
      </div>
      </div>
      <div className="p-space-md rounded-2xl bg-primary/60 flex items-start gap-space-sm">
      <div className="p-1 rounded-full bg-accent text-white mt-0.5">
      <Check className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
      </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">BS AU 159 Approved Puncture Repair</h3>
      <p className="text-[13px] leading-[18px] text-white mt-0.5">Safe internal umbrella plug patching when tread degradation sits within regulated safety boundaries.</p>
      </div>
      </div>
      <div className="p-space-md rounded-2xl bg-primary/60 flex items-start gap-space-sm">
      <div className="p-1 rounded-full bg-accent text-white mt-0.5">
      <Check className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
      </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Specialist Locking Wheel Nut Removal</h3>
      <p className="text-[13px] leading-[18px] text-white mt-0.5">Non-destructive inverse extraction tools to remove stripped, overtightened, or missing key wheel bolts.</p>
      </div>
      </div>
      <div className="p-space-md rounded-2xl bg-primary/60 flex items-start gap-space-sm">
      <div className="p-1 rounded-full bg-accent text-white mt-0.5">
      <Check className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
      </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Driveway &amp; Rural Farm Track Fitting</h3>
      <p className="text-[13px] leading-[18px] text-white mt-0.5">All-terrain hydraulic jacking capable of fitting on loose gravel, private drives, estates, and yard spaces.</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 4: CORRIDORS & SURROUNDING LOCALITIES */}
      <section className="w-full bg-primary-dark py-space-xl px-margin-mobile">
      <div className="mx-auto max-w-xl">
      <div className="p-space-lg rounded-2xl bg-primary/80">
      <div className="flex items-center gap-2 mb-space-sm text-secondary">
      <Compass className="h-[20px] w-[20px]" />
      <span className="uppercase tracking-wider font-bold">Priority Coverage Network</span>
      </div>
      <p className="text-[15px] leading-[24px] text-white">
                Operating rapid mobile response units patrol the critical corridors of the <strong className="text-white font-bold">M6 J18 (Cranage/Holmes Chapel)</strong>, the <strong className="text-white font-bold">A50 Knutsford Road</strong>, and the <strong className="text-white font-bold">A535 Chelford Road</strong>, offering under-30-minute turnarounds across <strong className="text-white font-bold">Knutsford</strong>, <strong className="text-white font-bold">Sandbach</strong>, <strong className="text-white font-bold">Middlewich</strong>, <strong className="text-white font-bold">Congleton</strong>, and <strong className="text-white font-bold">Goostrey</strong>.
              </p>
      </div>
      </div>
      </section>
      {/* SECTION 5: HOW IT WORKS (NUMBERED DISPATCH WORKFLOW) */}
      <section className="w-full bg-primary-dark py-space-xl px-margin-mobile">
      <div className="mx-auto max-w-xl">
      <div className="mb-space-lg">
      <span className="text-gray-400 uppercase font-bold tracking-wider">Frictionless Dispatch</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white mt-1">From Callout to Road-Ready</h2>
      </div>
      <div className="flex flex-col space-y-space-md">
      {/* Step 1 */}
      <div className="flex items-start gap-space-md p-space-md rounded-2xl bg-primary-dark">
      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-primary font-heading">
                  1
                </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Phone or WhatsApp Live Pin</h3>
      <p className="text-[13px] leading-[18px] text-white mt-1">Dial direct or send a WhatsApp location pin so our fleet controller can immediately track your exact coordinates.</p>
      </div>
      </div>
      {/* Step 2 */}
      <div className="flex items-start gap-space-md p-space-md rounded-2xl bg-primary-dark">
      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-primary font-heading">
                  2
                </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Tyre Spec &amp; Pricing Confirmed</h3>
      <p className="text-[13px] leading-[18px] text-white mt-1">We confirm your tyre profile (e.g. 225/45 R18 95Y XL) or vehicle registration, and provide a binding fixed price quote.</p>
      </div>
      </div>
      {/* Step 3 */}
      <div className="flex items-start gap-space-md p-space-md rounded-2xl bg-primary-dark">
      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-primary font-heading">
                  3
                </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Mobile Unit Dispatched With Live ETA</h3>
      <p className="text-[13px] leading-[18px] text-white mt-1">The nearest fully-equipped Mercedes Sprinter or Iveco Daily service van rolls out directly to your location.</p>
      </div>
      </div>
      {/* Step 4 */}
      <div className="flex items-start gap-space-md p-space-md rounded-2xl bg-primary-dark">
      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-primary font-heading">
                  4
                </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">On-Site Precision Fitting &amp; Torque</h3>
      <p className="text-[13px] leading-[18px] text-white mt-1">Our technician replaces or repairs the tyre, checks balancing, and tightens wheel bolts with calibrated digital torque wrenches.</p>
      </div>
      </div>
      {/* Step 5 */}
      <div className="flex items-start gap-space-md p-space-md rounded-2xl bg-primary-dark">
      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-primary font-heading">
                  5
                </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Contactless Secure Receipt</h3>
      <p className="text-[13px] leading-[18px] text-white mt-1">Pay by chip &amp; pin, contactless card, Apple Pay, or business account invoice. No surprise surcharge fees.</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 6: RECENT REAL JOB DISPATCH LOG */}
      <section className="w-full bg-primary-dark py-space-xl px-margin-mobile">
      <div className="mx-auto max-w-xl">
      <div className="p-space-lg rounded-2xl bg-primary/60">
      <div className="flex items-center justify-between mb-space-sm">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-white">
      <span className="h-2 w-2 rounded-full bg-accent"></span>
                  Verified Local Job #HC-903
                </span>
      <span className="text-gray-400">Yesterday 22:15</span>
      </div>
      <div className="flex flex-col sm:flex-row gap-space-md items-center mt-space-md">
      <div className="relative w-full sm:w-28 h-28 rounded-xl overflow-hidden flex-shrink-0 bg-primary">
      <Image src="/gallery-roadside-fitting.webp" alt="Close up view of a roadside mobile tyre service technician kneeling next to an executive sedan wheel fitting a fresh low profile tyre at night." fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col justify-center w-full">
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">BMW 320d — A50 Knutsford Road</h4>
      <p className="text-[13px] leading-[18px] text-white mt-1">
                    Catastrophic pothole blowout on a 225/45 R18 run-flat tyre. Emergency unit reached the vehicle in 24 minutes. Fitted and balanced on the safe grass verge. Driver back on the road in under 45 minutes total.
                  </p>
      <div className="mt-space-sm flex items-center gap-4 text-white">
      <span className="flex items-center gap-1"><Clock className="h-[16px] w-[16px]" /> 24 min arrival</span>
      <span className="flex items-center gap-1"><ShieldCheck className="h-[16px] w-[16px]" /> OEM Spec Tyre</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 7: FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
      <section className="w-full bg-primary-dark py-space-xl px-margin-mobile">
      <div className="mx-auto max-w-xl">
      <div className="mb-space-lg">
      <span className="text-gray-400 uppercase font-bold tracking-wider">Breakdown Answers</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white mt-1">Emergency FAQ</h2>
      </div>
      <div className="flex flex-col space-y-space-sm" id="faq-container">
      {/* Item 1 */}
      <details className="rounded-2xl bg-primary/60 overflow-hidden group"><summary className="faq-toggle w-full text-left p-space-md flex items-center justify-between focus:outline-none cursor-pointer list-none">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white pr-4">Can you reach remote Cheshire farms and unlit country lanes?</span>
      <ChevronDown className="text-gray-400 transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="faq-content px-space-md pb-space-md">
      <p className="text-[13px] leading-[18px] text-white">Yes. Our mobile fitting vans carry high-output 360-degree LED floodlighting arrays and heavy-duty, low-profile hydraulic trolley jacks capable of stabilising on compact dirt, crushed gravel, and private farm tracks.</p>
      </div></details>
      {/* Item 2 */}
      <details className="rounded-2xl bg-primary/60 overflow-hidden group"><summary className="faq-toggle w-full text-left p-space-md flex items-center justify-between focus:outline-none cursor-pointer list-none">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white pr-4">How quickly can a van arrive at M6 Junction 18?</span>
      <ChevronDown className="text-gray-400 transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="faq-content px-space-md pb-space-md">
      <p className="text-[13px] leading-[18px] text-white">With patrol units frequently positioned on the A54/A50 connector corridors around Cranage, average response time directly to the J18 roundabout slip roads and adjoining laybys ranges between 20 and 35 minutes depending on traffic.</p>
      </div></details>
      {/* Item 3 */}
      <details className="rounded-2xl bg-primary/60 overflow-hidden group"><summary className="faq-toggle w-full text-left p-space-md flex items-center justify-between focus:outline-none cursor-pointer list-none">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white pr-4">Do you carry run-flat and EV-rated tyres on board?</span>
      <ChevronDown className="text-gray-400 transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="faq-content px-space-md pb-space-md">
      <p className="text-[13px] leading-[18px] text-white">Yes. We maintain emergency stock for all major configurations including BMW RSC run-flats, Mercedes MOExtended, Tesla T0/T1 acoustic-foam linings, and heavy load index (XL) SUV fitments.</p>
      </div></details>
      {/* Item 4 */}
      <details className="rounded-2xl bg-primary/60 overflow-hidden group"><summary className="faq-toggle w-full text-left p-space-md flex items-center justify-between focus:outline-none cursor-pointer list-none">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white pr-4">What payment options do your mobile technicians take?</span>
      <ChevronDown className="text-gray-400 transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="faq-content px-space-md pb-space-md">
      <p className="text-[13px] leading-[18px] text-white">Every mobile workshop is equipped with an encrypted roaming card terminal accepting Visa, Mastercard, AMEX, Google Pay, and Apple Pay. Commercial fleet operators can also settle via pre-approved account authorization.</p>
      </div></details>
      </div>
      </div>
      </section>
      {/* SECTION 8: FINAL DISPATCH CTA */}
      <section className="w-full bg-primary-dark py-space-xl px-margin-mobile">
      <div className="mx-auto max-w-xl flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-space-md">
      <Siren className="h-[28px] w-[28px]" />
      </div>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white mb-space-sm">
              Stuck in Holmes Chapel or M6 J18?
            </h2>
      <p className="text-[15px] leading-[24px] text-white mb-space-lg max-w-md">
              Call our live Cheshire control desk right now. We confirm your tyre size in 60 seconds and deploy the closest on-call mobile fitting van.
            </p>
      <a className="w-full max-w-md inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary text-primary font-heading tracking-wide transition-all transform active:scale-95 shadow-xl shadow-primary-container/25" href="tel:08009992470">
      <PhoneCall className="h-[22px] w-[22px]" fill="currentColor" strokeWidth={0} />
              Call 0800 999 2470 Now
            </a>
      <div className="mt-space-md flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-gray-400 uppercase tracking-wider">
      <span>• 24/7 Cheshire Dispatch</span>
      <span>• Roadside, Home &amp; Workplace</span>
      <span>• Zero Membership Required</span>
      </div>
      </div>
      </section>
      </div>
    </main>
  );
}
