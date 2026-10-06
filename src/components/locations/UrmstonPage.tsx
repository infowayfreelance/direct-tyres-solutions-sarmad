import Image from "next/image";
import { CheckCircle2, ChevronDown, Clock, Gauge, MapPin, MessageCircle, Navigation, PhoneCall, ShieldCheck, Siren, Star, Truck } from "lucide-react";

export default function UrmstonPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      <div className="flex flex-col w-full text-white">
      {/* HERO SECTION: Centered photo hero */}
      <section className="relative w-full overflow-hidden bg-primary-dark">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
      <div className="w-full h-full bg-cover bg-center opacity-40 mix-blend-luminosity scale-105 transition-transform duration-1000" style={{ backgroundImage: "url('/hero-section-images-936x527.webp')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary-dark/85 to-primary-dark"></div>
      <div className="absolute inset-0 bg-radial from-accent/10 via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-margin-mobile sm:px-gutter py-space-xl sm:py-24 text-center flex flex-col items-center">
      {/* Status Badge */}
      <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-accent/20 text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold tracking-wider uppercase backdrop-blur-md mb-space-lg shadow-sm">
      <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
      <span className="w-2 h-2 rounded-full bg-accent -ml-3"></span>
      <span>24/7 Rapid Mobile Dispatch • Urmston &amp; Trafford</span>
      </div>
      {/* Main Headline */}
      <h1 className="font-heading text-[36px] leading-[42px] tracking-[-0.01em] font-black sm:text-[56px] sm:leading-[64px] sm:tracking-[-0.02em] sm:font-black text-white max-w-4xl text-balance mb-space-md drop-shadow-sm">
              24/7 Mobile Tyre Fitting in <span className="text-secondary">Urmston</span>
            </h1>
      {/* Reassuring Subtitle */}
      <p className="text-[15px] leading-[24px] sm:text-[18px] sm:leading-[28px] text-gray-400 max-w-2xl text-balance mb-space-xl">
              Stress-free on-driveway and roadside tyre replacements across Urmston, Flixton, and Davyhulme. Perfect for school runs and daily commutes. We bring the complete garage to your door.
            </p>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-space-md w-full sm:w-auto">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-8 py-4 rounded-full bg-secondary text-primary font-heading hover:bg-secondary-hover transition-all duration-200 shadow-xl active:scale-95 group" href="tel:07955266077">
      <PhoneCall className="h-5 w-5 group-hover:rotate-12 transition-transform" />
      <span>Call 07955 266 077</span>
      </a>
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-8 py-4 rounded-full bg-primary/80 text-white hover:bg-primary transition-all duration-200 backdrop-blur-md shadow-sm" href="https://wa.me/448009992470" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="h-5 w-5 text-accent" />
      <span>Message on WhatsApp</span>
      </a>
      </div>
      {/* Local Quick Indicators */}
      <div className="mt-space-xl grid grid-cols-2 sm:grid-cols-3 gap-space-md text-left w-full max-w-xl pt-space-lg">
      <div className="flex items-center gap-space-xs text-gray-400">
      <CheckCircle2 className="text-secondary h-[18px] w-[18px]" />
      <span className="uppercase tracking-wider text-xs">No Towing Needed</span>
      </div>
      <div className="flex items-center gap-space-xs text-gray-400">
      <Clock className="text-secondary h-[18px] w-[18px]" />
      <span className="uppercase tracking-wider text-xs">25-35 Min Response</span>
      </div>
      <div className="col-span-2 sm:col-span-1 flex items-center justify-center sm:justify-start gap-space-xs text-gray-400">
      <ShieldCheck className="text-secondary h-[18px] w-[18px]" />
      <span className="uppercase tracking-wider text-xs">BS AU 159 Certified</span>
      </div>
      </div>
      </div>
      </section>
      {/* BODY CONTENT: Split Layout with Side Rail */}
      <div className="w-full bg-primary-dark py-space-xl">
      <div className="max-w-7xl mx-auto px-margin-mobile sm:px-gutter">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-start">
      {/* MAIN COLUMN (Left, 8 Cols) */}
      <main className="lg:col-span-8 flex flex-col gap-space-xl">
      {/* Local Community & School Run Editorial */}
      <article className="bg-primary/60 backdrop-blur-md p-space-lg sm:p-space-xl rounded-2xl shadow-sm">
      <div className="flex items-center gap-2 mb-space-md">
      <span className="px-2.5 py-0.5 rounded-full bg-accent/20 text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">Local Focus</span>
      <span className="text-gray-400 text-[13px] leading-[18px] tracking-wide">Urmston, Davyhulme &amp; Flixton</span>
      </div>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold sm:text-[40px] sm:leading-[48px] sm:tracking-[-0.02em] sm:font-extrabold text-white mb-space-md">
                    Rapid Tyre Recovery Along Tree-Lined Avenues &amp; Commuter Corridors
                  </h2>
      <div className="space-y-4 text-gray-400 leading-relaxed">
      <p>
                      Waking up to a completely flat tyre on your driveway down Church Road or finding a sharp nail during the frantic morning school run along Flixton Road doesn&apos;t have to ruin your schedule. Nursing a deflated tyre to a high street depot risks catastrophic alloy rim damage and invalidates your vehicle insurance. We eliminate that risk entirely by bringing heavy-duty workshop machinery directly outside your home.
                    </p>
      <p>
                      Whether you&apos;re stalled before hitting the M60 at Junction 9 or trapped on a residential crescent near Davyhulme Park, our mobile service vans operate fully equipped with high-precision bead breakers, computer balancers, and fresh OEM tyres. You stay warm indoors with your morning coffee while our certified technician completes fitting, balancing, and tyre pressure calibration right on your drive.
                    </p>
      </div>
      {/* Road Corridor Highlight Callout */}
      <div className="mt-space-lg p-space-md rounded-xl bg-primary/80 flex items-start gap-space-sm">
      <Navigation className="text-secondary h-6 w-6 shrink-0 mt-0.5" />
      <p className="text-white">
                      Regularly covering <strong className="text-white font-semibold">Flixton Road</strong>, <strong className="text-white font-semibold">Church Road</strong>, <strong className="text-white font-semibold">Carrington Spur (A6144)</strong>, <strong className="text-white font-semibold">M60 Junctions 9/10</strong>, and neighbouring <strong className="text-white font-semibold">Flixton</strong>, <strong className="text-white font-semibold">Davyhulme</strong>, <strong className="text-white font-semibold">Stretford</strong>, and <strong className="text-white font-semibold">Trafford Park</strong>.
                    </p>
      </div>
      </article>
      {/* Tailored Local Services (4-item Vertical List with Image Thumbnails) */}
      <section className="flex flex-col gap-space-md">
      <div>
      <span className="text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest">Our Operations</span>
      <h3 className="font-heading text-[22px] leading-[28px] font-bold sm:text-[30px] sm:leading-[38px] sm:font-bold text-white">On-Demand Emergency &amp; Driveway Solutions</h3>
      </div>
      <div className="grid grid-cols-1 gap-space-sm">
      {/* Service 1 */}
      <div className="bg-primary/60 backdrop-blur-md p-space-md sm:p-space-lg rounded-2xl flex flex-col sm:flex-row items-center gap-space-md hover:bg-primary/60 transition-colors shadow-sm">
      <div className="relative w-full sm:w-44 h-32 rounded-xl overflow-hidden shrink-0 bg-primary">
      <Image src="/gallery-roadside-fitting.webp" alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col flex-1">
      <div className="flex items-center justify-between mb-1">
      <h4 className="font-heading text-white">Emergency Roadside Puncture Response</h4>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">30-min Target</span>
      </div>
      <p className="text-gray-400 leading-normal mb-space-sm">
                          Rapid roadside deployment across major arterial routes including A56 and M60 slip roads. High-visibility beacons, motorway-rated safety gear, and complete roadside hazard management.
                        </p>
      <div className="flex items-center gap-2 text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">
      <span>Motorway Hard Shoulders</span>
      <span>•</span>
      <span>Dual Carriageways</span>
      <span>•</span>
      <span>Slip Roads</span>
      </div>
      </div>
      </div>
      {/* Service 2 */}
      <div className="bg-primary/60 backdrop-blur-md p-space-md sm:p-space-lg rounded-2xl flex flex-col sm:flex-row items-center gap-space-md hover:bg-primary/60 transition-colors shadow-sm">
      <div className="relative w-full sm:w-44 h-32 rounded-xl overflow-hidden shrink-0 bg-primary">
      <Image src="/gallery-home-callout.webp" alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col flex-1">
      <div className="flex items-center justify-between mb-1">
      <h4 className="font-heading text-white">Driveway &amp; Residential Fitting</h4>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 bg-accent/20 px-2 py-0.5 rounded-full">School-Run Saver</span>
      </div>
      <p className="text-gray-400 leading-normal mb-space-sm">
                          Pre-arranged or same-day driveway fittings across Urmston and Flixton suburbs. Avoid waiting rooms and school delays while our mobile technicians mount and balance premium or budget tyres at your home.
                        </p>
      <div className="flex items-center gap-2 text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">
      <span>Zero Disruption</span>
      <span>•</span>
      <span>Alloy Protection</span>
      <span>•</span>
      <span>Eco Disposal</span>
      </div>
      </div>
      </div>
      {/* Service 3 */}
      <div className="bg-primary/60 backdrop-blur-md p-space-md sm:p-space-lg rounded-2xl flex flex-col sm:flex-row items-center gap-space-md hover:bg-primary/60 transition-colors shadow-sm">
      <div className="relative w-full sm:w-44 h-32 rounded-xl overflow-hidden shrink-0 bg-primary">
      <Image src="/gallery-evening-callout.webp" alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col flex-1">
      <div className="flex items-center justify-between mb-1">
      <h4 className="font-heading text-white">Puncture Vulcanisation BS AU 159</h4>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 bg-primary px-2 py-0.5 rounded-full">Standard Compliant</span>
      </div>
      <p className="text-gray-400 leading-normal mb-space-sm">
                          We prioritize safe repairs over unnecessary tyre sales. Tread punctures within central 70% zone are vulcanised internally to British Standard specifications whenever structure remains uncompromised.
                        </p>
      <div className="flex items-center gap-2 text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">
      <span>Internal Patch-Plug</span>
      <span>•</span>
      <span>Pressure Restored</span>
      <span>•</span>
      <span>Cost-Saving</span>
      </div>
      </div>
      </div>
      {/* Service 4 */}
      <div className="bg-primary/60 backdrop-blur-md p-space-md sm:p-space-lg rounded-2xl flex flex-col sm:flex-row items-center gap-space-md hover:bg-primary/60 transition-colors shadow-sm">
      <div className="relative w-full sm:w-44 h-32 rounded-xl overflow-hidden shrink-0 bg-primary">
      <Image src="/gallery-evening-home-visit.webp" alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col flex-1">
      <div className="flex items-center justify-between mb-1">
      <h4 className="font-heading text-white">Locking Wheel Nut Extraction</h4>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">Specialist Tooling</span>
      </div>
      <p className="text-gray-400 leading-normal mb-space-sm">
                          Lost key, stripped flower heads, or overtightened security bolts removed cleanly without scuffing your alloys. Non-destructive reverse-threaded surgical extraction carried out directly on site.
                        </p>
      <div className="flex items-center gap-2 text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">
      <span>Zero Rim Marks</span>
      <span>•</span>
      <span>All Key Patterns</span>
      <span>•</span>
      <span>Instant Removal</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* HOW IT WORKS: 5-step numbered horizontal/vertical flow */}
      <section className="bg-primary/60 backdrop-blur-md p-space-lg sm:p-space-xl rounded-2xl">
      <div className="mb-space-lg">
      <span className="text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest">Process</span>
      <h3 className="font-heading text-[22px] leading-[28px] font-bold sm:text-[30px] sm:leading-[38px] sm:font-bold text-white">5 Simple Steps to Getting Back on the Road</h3>
      </div>
      <ol className="space-y-4">
      <li className="flex items-start gap-space-md p-3 rounded-xl hover:bg-primary/60 transition-colors">
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-primary font-heading shrink-0">1</span>
      <div>
      <h4 className="font-heading text-white">Call or WhatsApp Our Local Line</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Speak directly with a local Manchester dispatch controller who verifies your exact vehicle location and tyre dimensions.</p>
      </div>
      </li>
      <li className="flex items-start gap-space-md p-3 rounded-xl hover:bg-primary/60 transition-colors">
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-primary font-heading shrink-0">2</span>
      <div>
      <h4 className="font-heading text-white">Tyre &amp; Fitting Confirmation</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">We stock premium, mid-range, and economy specifications suited to your vehicle manufacturer standards and agreed budget.</p>
      </div>
      </li>
      <li className="flex items-start gap-space-md p-3 rounded-xl hover:bg-primary/60 transition-colors">
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-primary font-heading shrink-0">3</span>
      <div>
      <h4 className="font-heading text-white">Mobile Workshop Dispatched</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">A dedicated technician departs immediately towards Urmston with live ETA tracking updates sent straight to your mobile device.</p>
      </div>
      </li>
      <li className="flex items-start gap-space-md p-3 rounded-xl hover:bg-primary/60 transition-colors">
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-primary font-heading shrink-0">4</span>
      <div>
      <h4 className="font-heading text-white">On-Site Precision Fitting &amp; Balancing</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">We mount the new tyre, install new valves, digitally balance wheels on-board, and safely torque wheel nuts to factory spec.</p>
      </div>
      </li>
      <li className="flex items-start gap-space-md p-3 rounded-xl hover:bg-primary/60 transition-colors">
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-primary font-heading shrink-0">5</span>
      <div>
      <h4 className="font-heading text-white">Contactless Payment &amp; Guarantee</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Inspect the repair and pay securely on site via chip &amp; pin, contactless, or mobile pay. Full digital VAT invoice sent instantly.</p>
      </div>
      </li>
      </ol>
      </section>
      {/* REAL JOB SPOTLIGHT CARD */}
      <section className="bg-primary/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-12">
      <div className="relative sm:col-span-5 h-56 sm:h-auto bg-primary">
      <Image src="/gallery-precision-care.webp" alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="sm:col-span-7 p-space-lg flex flex-col justify-between">
      <div>
      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary/20 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold mb-2">
      <ShieldCheck className="h-[14px] w-[14px]" />
      <span>Verified Callout Log</span>
      </div>
      <h3 className="font-heading text-white mb-1">Ford Focus — Davyhulme Road</h3>
      <p className="text-gray-400 leading-relaxed">
                          Customer experienced an overnight sidewall deflation right before morning school drop-off. Technician dispatched from M60 depot arrived on driveway in 18 minutes, supplied and fitted a 205/55 R16 Hankook Ventus Prime with electronic balancing. Family reached destination with time to spare.
                        </p>
      </div>
      <div className="pt-space-md mt-space-md flex items-center justify-between">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block uppercase">Total Job Time</span>
      <span className="font-heading text-white">26 Minutes</span>
      </div>
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block uppercase">Response Arrival</span>
      <span className="font-heading text-gray-400">18 Min from Call</span>
      </div>
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block uppercase">Rating</span>
      <span className="font-heading text-secondary">5.0 ★★★★★</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* FAQ ACCORDION */}
      <section className="bg-primary/60 backdrop-blur-md p-space-lg sm:p-space-xl rounded-2xl">
      <div className="mb-space-lg">
      <span className="text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest">Questions</span>
      <h3 className="font-heading text-[22px] leading-[28px] font-bold sm:text-[30px] sm:leading-[38px] sm:font-bold text-white">Frequently Asked Questions</h3>
      </div>
      <div className="space-y-space-sm" id="faq-container">
      {/* Item 1 */}
      <details className="group bg-primary/60 rounded-xl overflow-hidden transition-all duration-200" open>
      <summary className="flex items-center justify-between p-space-md font-heading text-white cursor-pointer select-none list-none">
      <span>How quickly can a van get to my driveway in Urmston?</span>
      <ChevronDown className="transition-transform duration-200 group-open:rotate-180 text-gray-400 h-5 w-5" />
      </summary>
      <div className="px-space-md pb-space-md text-gray-400 leading-relaxed">
                        Our emergency mobile units are constantly patrolling Greater Manchester corridors including the Carrington Spur and M60 Junctions 9 and 10. For Urmston, Flixton, and Davyhulme residential addresses, our typical response time is between 25 and 35 minutes depending on real-time traffic.
                      </div>
      </details>
      {/* Item 2 */}
      <details className="group bg-primary/60 rounded-xl overflow-hidden transition-all duration-200">
      <summary className="flex items-center justify-between p-space-md font-heading text-white cursor-pointer select-none list-none">
      <span>Do you provide tyres for all makes, including electric cars and SUVs?</span>
      <ChevronDown className="transition-transform duration-200 group-open:rotate-180 text-gray-400 h-5 w-5" />
      </summary>
      <div className="px-space-md pb-space-md text-gray-400 leading-relaxed">
                        Yes. We carry comprehensive stock including standard passenger tyres, extra-load (XL) SUV variants, reinforced commercial van sizes, run-flat tyres (RFT), and acoustic foam-lined EV tyres suitable for Tesla, BMW, Audi, and Mercedes models.
                      </div>
      </details>
      {/* Item 3 */}
      <details className="group bg-primary/60 rounded-xl overflow-hidden transition-all duration-200">
      <summary className="flex items-center justify-between p-space-md font-heading text-white cursor-pointer select-none list-none">
      <span>Can you repair my tyre instead of fitting a brand new one?</span>
      <ChevronDown className="transition-transform duration-200 group-open:rotate-180 text-gray-400 h-5 w-5" />
      </summary>
      <div className="px-space-md pb-space-md text-gray-400 leading-relaxed">
                        Always. If your tyre has suffered a screw or nail penetration within the central three-quarters of the tread and there is no secondary sidewall or internal bead degradation, we perform a BS AU 159 certified chemical vulcanisation repair on-site for a fraction of replacement cost.
                      </div>
      </details>
      {/* Item 4 */}
      <details className="group bg-primary/60 rounded-xl overflow-hidden transition-all duration-200">
      <summary className="flex items-center justify-between p-space-md font-heading text-white cursor-pointer select-none list-none">
      <span>What if I have lost my locking wheel nut security adapter?</span>
      <ChevronDown className="transition-transform duration-200 group-open:rotate-180 text-gray-400 h-5 w-5" />
      </summary>
      <div className="px-space-md pb-space-md text-gray-400 leading-relaxed">
                        Every van carries high-torque pneumatic inverse-fluted extraction heads designed for locking nuts. We can securely remove stripped, rounded, or keyless security nuts without touching or scratching your alloy rim surface.
                      </div>
      </details>
      </div>
      </section>
      </main>
      {/* SLIM RIGHT-HAND RAIL (4 Cols) */}
      <aside className="lg:col-span-4 flex flex-col gap-space-lg sticky top-6">
      {/* Dispatch Action Card */}
      <div className="bg-primary/80 backdrop-blur-md p-space-lg rounded-2xl shadow-xl flex flex-col items-center text-center">
      <div className="w-14 h-14 rounded-full bg-accent/20 text-gray-400 flex items-center justify-center mb-space-sm">
      <Siren className="h-[30px] w-[30px]" />
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-gray-400 mb-1">Direct Controller</span>
      <h3 className="font-heading text-white mb-2">Immediate Tyre Dispatch</h3>
      <p className="text-gray-400 mb-space-lg">
                    Immediate response for residential driveways, parking bays, and motorways across Urmston and Davyhulme.
                  </p>
      <a className="w-full inline-flex items-center justify-center gap-space-sm px-6 py-3.5 rounded-full bg-secondary text-primary font-heading hover:bg-secondary-hover transition-all shadow-md active:scale-95 group" href="tel:07955266077">
      <PhoneCall className="h-5 w-5 group-hover:rotate-12 transition-transform" />
      <span>07955 266 077</span>
      </a>
      <div className="mt-4 flex items-center gap-1.5 text-xs text-gray-400">
      <span className="inline-block w-2 h-2 rounded-full bg-accent-hover"></span>
      <span>Operatives on standby right now</span>
      </div>
      </div>
      {/* Quick Statistics Rail */}
      <div className="bg-primary/60 backdrop-blur-md p-space-lg rounded-2xl space-y-space-md shadow-sm">
      <h4 className="font-heading text-white uppercase text-xs tracking-wider">Operational Metrics</h4>
      <div className="space-y-4">
      {/* Metric 1 */}
      <div className="p-space-sm rounded-xl bg-primary/80 flex items-center gap-space-md">
      <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-secondary shrink-0">
      <Gauge className="h-5 w-5" />
      </div>
      <div>
      <span className="block font-heading text-white">25-35 Min</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Average Arrival Time</span>
      </div>
      </div>
      {/* Metric 2 */}
      <div className="p-space-sm rounded-xl bg-primary/80 flex items-center gap-space-md">
      <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-secondary shrink-0">
      <Star className="h-5 w-5" />
      </div>
      <div>
      <span className="block font-heading text-white">4.9 / 5.0</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Customer Trust Score</span>
      </div>
      </div>
      {/* Metric 3 */}
      <div className="p-space-sm rounded-xl bg-primary/80 flex items-center gap-space-md">
      <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-secondary shrink-0">
      <Truck className="h-5 w-5" />
      </div>
      <div>
      <span className="block font-heading text-white">100% Mobile</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Van-Equipped Workshops</span>
      </div>
      </div>
      </div>
      </div>
      {/* Mini Map / Coverage Card */}
      <div className="bg-primary/60 backdrop-blur-md p-space-md rounded-2xl shadow-sm">
      <div className="w-full h-44 bg-cover bg-center rounded-xl overflow-hidden relative" data-location="Urmston, Greater Manchester, UK" style={{ backgroundImage: "url('/gallery-onsite-wheel-fitting.webp')" }}>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent flex items-end p-space-sm">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-white bg-primary-dark/90 px-2.5 py-1 rounded-md backdrop-blur-sm">
                        Active Area: Urmston &amp; Trafford
                      </span>
      </div>
      </div>
      <div className="mt-space-sm px-1 flex justify-between items-center text-[13px] leading-[18px] text-gray-400">
      <span>M60 (J9 &amp; J10) Covered</span>
      <span className="text-gray-400 text-xs uppercase">Live GPS Units</span>
      </div>
      </div>
      {/* Direct WhatsApp Dispatch Box */}
      <div className="p-space-md rounded-2xl bg-accent/10 flex items-center justify-between">
      <div>
      <span className="font-heading text-white block">Need a Quote?</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Send a tyre size photo</span>
      </div>
      <a className="px-4 py-2 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold hover:opacity-90 transition-opacity" href="https://wa.me/448009992470">
                    WhatsApp
                  </a>
      </div>
      </aside>
      </div>
      </div>
      </div>
      {/* FULL-WIDTH FOOTER SECTION: Related Locations Strip */}
      <section className="w-full bg-primary/40 py-space-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-margin-mobile sm:px-gutter flex flex-col md:flex-row items-center justify-between gap-space-md">
      <div className="flex items-center gap-space-xs text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider">
      <MapPin className="text-gray-400 h-4 w-4" />
      <span>Surrounding Response Hubs:</span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-space-sm text-[15px] leading-[24px] text-white font-heading">
      <span className="px-3 py-1 rounded-lg bg-primary/60 hover:bg-primary/60 transition-colors cursor-default">Stretford</span>
      <span className="text-gray-400/40">|</span>
      <span className="px-3 py-1 rounded-lg bg-primary/60 hover:bg-primary/60 transition-colors cursor-default">Trafford Park</span>
      <span className="text-gray-400/40">|</span>
      <span className="px-3 py-1 rounded-lg bg-primary/60 hover:bg-primary/60 transition-colors cursor-default">Sale</span>
      <span className="text-gray-400/40">|</span>
      <span className="px-3 py-1 rounded-lg bg-primary/60 hover:bg-primary/60 transition-colors cursor-default">Eccles</span>
      <span className="text-gray-400/40">|</span>
      <span className="px-3 py-1 rounded-lg bg-primary/60 hover:bg-primary/60 transition-colors cursor-default">Flixton</span>
      </div>
      </div>
      </section>
      {/* FINAL CTA: Full-Width Gold Banner */}
      <section className="w-full bg-secondary text-primary py-space-xl sm:py-16 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-margin-mobile sm:px-gutter flex flex-col sm:flex-row items-center justify-between gap-space-lg text-center sm:text-left relative z-10">
      <div className="space-y-2">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-primary block">No Waiting. No Tow Trucks.</span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold sm:text-[40px] sm:leading-[48px] sm:tracking-[-0.02em] sm:font-extrabold text-primary font-black">
                Stranded in Urmston with a Flat Tyre?
              </h2>
      <p className="text-primary/80 max-w-xl">
                Call our emergency response van directly. We arrive within 35 minutes with the correct spec tyres ready to fit.
              </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-space-sm shrink-0">
      <a className="inline-flex items-center justify-center gap-space-sm px-8 py-4 rounded-full bg-primary-dark text-white font-heading hover:bg-primary/60 transition-all duration-200 shadow-2xl active:scale-95" href="tel:07955266077">
      <PhoneCall className="h-5 w-5 text-secondary" />
      <span>Call 07955 266 077</span>
      </a>
      </div>
      </div>
      </section>
      </div>
    </main>
  );
}
