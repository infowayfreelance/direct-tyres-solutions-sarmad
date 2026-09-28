import Image from "next/image";
import { Car, ChevronDown, KeyRound, MapPin, MessageCircle, Navigation, PhoneCall, ShieldCheck, Wrench } from "lucide-react";

export default function HazelGrovePage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* BAND 1: HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-primary-dark">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero-section-images-936x527.webp')" }}></div>
      <div className="absolute inset-0 bg-primary-dark/85"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col items-center text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 text-gray-300 text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase mb-6 backdrop-blur-md">
      <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              Cheshire Rapid Dispatch • Average 25-45 Min Response
            </div>
      <h1 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-extrabold max-w-4xl mb-6">
              24/7 Mobile Tyre Fitting in Hazel Grove
            </h1>
      <p className="text-[18px] leading-[28px] text-gray-400 max-w-2xl mb-10">
              Stranded on the Silk Road (A6), stuck in a town centre retail park, or flat on your residential driveway? Our dedicated Cheshire response units bring the tyre shop straight to your location.
            </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
      <a className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary text-primary text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider font-bold transition-all duration-150 hover:bg-secondary hover:scale-105 active:scale-95 shadow-xl shadow-primary-container/10" href="tel:08009992470">
      <PhoneCall className="text-primary h-5 w-5" fill="currentColor" strokeWidth={0} />
                Call 0800 999 2470
              </a>
      <a className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary/80 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider font-semibold transition-all duration-150 hover:bg-primary backdrop-blur-md" href="https://wa.me/448009992470" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="text-white h-5 w-5" />
                WhatsApp Dispatch
              </a>
      </div>
      {/* Quick Trust Indicators */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 pt-8 border-t border-white/10 w-full max-w-3xl">
      <div className="text-left">
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary">24/7/365</div>
      <div className="text-[13px] leading-[18px] text-gray-400">Emergency Callout</div>
      </div>
      <div className="text-left">
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary">No Recovery Truck</div>
      <div className="text-[13px] leading-[18px] text-gray-400">Fitted Roadside</div>
      </div>
      <div className="text-left">
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary">All Brands Stocked</div>
      <div className="text-[13px] leading-[18px] text-gray-400">Budget to Premium</div>
      </div>
      <div className="text-left">
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary">OEM Torqued</div>
      <div className="text-[13px] leading-[18px] text-gray-400">Laser Wheel Balanced</div>
      </div>
      </div>
      </div>
      </section>
      {/* BAND 2: LOCAL INTRO SECTION */}
      <section className="w-full bg-primary-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-start">
      <div className="md:w-1/3">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-accent">No Recovery Needed</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white mt-2">Zero Hassle On-Site Tyre Replacements</h2>
      </div>
      <div className="md:w-2/3 space-y-4 text-[15px] leading-[24px] text-gray-400">
      <p>
                Hazel Grove&apos;s distinctive geography—from the steep cobblestone and residential inclines of Hurdsfield to the high-traffic freight movement along The Silk Road (A6)—presents unique breakdown risks. Potholes, sharp kerbs, and unexpected blowouts shouldn&apos;t strand your vehicle for hours waiting on a costly recovery flatbed.
              </p>
      <p>
                Direct Tyre Solutions operates fully self-contained workshop vans armed with high-capacity pneumatic bead-breakers, digital computer balancers, and a comprehensive inventory of tyres. Whether you are parked outside your home in Tytherington, stuck at Lyme Green Retail Park, or stranded on an unlit rural link towards the Peak District, our technicians arrive equipped to resolve your puncture on the spot.
              </p>
      </div>
      </div>
      </section>
      {/* BAND 3: SERVICES (PHOTO BACKGROUND + 4 FLOATING CARDS) */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-primary-dark">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/gallery-onsite-wheel-fitting.webp')" }}></div>
      <div className="absolute inset-0 bg-primary-dark/90"></div>
      <div className="relative max-w-7xl mx-auto flex flex-col items-center">
      <div className="text-center max-w-2xl mb-12">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-widest font-semibold">Immediate Assistance</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white mt-2">Hazel Grove Mobile Tyre Services</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      {/* Service Card 1 */}
      <div className="bg-primary/60 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1">
      <div>
      <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-secondary mb-4">
      <Car className="h-5 w-5" fill="currentColor" strokeWidth={0} />
      </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Emergency Roadside</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    High-visibility roadside replacement on dual-carriageways, roundabouts, and trunk routes with full amber lighting safety protocol.
                  </p>
      </div>
      <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary">
      <span>24/7 Immediate Dispatch</span>
      </div>
      </div>
      {/* Service Card 2 */}
      <div className="bg-primary/60 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1">
      <div>
      <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-secondary mb-4">
      <Wrench className="h-5 w-5" fill="currentColor" strokeWidth={0} />
      </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">BS AU 159 Puncture Repair</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    Tread area puncture assessments and safe vulcanised plug repairs to British Safety Standards, avoiding unnecessary tyre replacements.
                  </p>
      </div>
      <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary">
      <span>Safe British Standard Fix</span>
      </div>
      </div>
      {/* Service Card 3 */}
      <div className="bg-primary/60 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1">
      <div>
      <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-secondary mb-4">
      <KeyRound className="h-5 w-5" fill="currentColor" strokeWidth={0} />
      </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Locking Nut Removal</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    Specialist non-destructive extractor tooling for stripped, rounded, or missing locking wheel nut keys across all vehicle makes.
                  </p>
      </div>
      <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary">
      <span>No Alloy Damage</span>
      </div>
      </div>
      {/* Service Card 4 */}
      <div className="bg-primary/60 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1">
      <div>
      <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-secondary mb-4">
      <MapPin className="h-5 w-5" fill="currentColor" strokeWidth={0} />
      </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Home &amp; Workplace Fitting</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    Convenient pre-booked or urgent fittings directly at your driveway or business park while you continue your day uninterrupted.
                  </p>
      </div>
      <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary">
      <span>Scheduled or Urgent</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* BAND 4: ROADS & AREAS BAND */}
      <section className="w-full bg-primary/80 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-5">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary">Strategic Cheshire Coverage</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white mt-2 mb-4">Key Arterials &amp; Surrounding Town Coverage</h2>
      <p className="text-[15px] leading-[24px] text-gray-400 mb-6">
                  Our vans are stationed across East Cheshire with direct access to Hazel Grove’s primary transit corridors. Whether you are traversing between Derbyshire and Manchester or commuting through Cheshire East, response time is minimized.
                </p>
      <div className="p-4 rounded-xl bg-primary-dark/60 flex items-center gap-3">
      <Navigation className="text-accent h-5 w-5" />
      <span className="text-[13px] leading-[18px] text-white">Average arrival on A6 corridor under 30 minutes</span>
      </div>
      </div>
      <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Road Card 1 */}
      <div className="p-5 rounded-2xl bg-primary-dark">
      <div className="flex items-center gap-3 mb-2">
      <span className="px-2.5 py-1 rounded bg-accent text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-bold">A6</span>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">The Silk Road</h4>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    Covering the primary dual-carriageway bypass, retail parks, Hulley Road industrial area, and links north to Bramhall and south toward Leek.
                  </p>
      </div>
      {/* Road Card 2 */}
      <div className="p-5 rounded-2xl bg-primary-dark">
      <div className="flex items-center gap-3 mb-2">
      <span className="px-2.5 py-1 rounded bg-accent text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-bold">A555</span>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Chelford Rd / Cat &amp; Fiddle</h4>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    Immediate response west toward Knutsford and Chelford, alongside emergency high-elevation support heading east across the moor passes.
                  </p>
      </div>
      {/* Road Card 3 */}
      <div className="p-5 rounded-2xl bg-primary-dark">
      <div className="flex items-center gap-3 mb-2">
      <span className="px-2.5 py-1 rounded bg-accent text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold font-bold">A627</span>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Marple Road</h4>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    Connecting southern Hazel Grove, Gawsworth, and Eaton down to Marple with comprehensive coverage of rural lanes and farms.
                  </p>
      </div>
      {/* Towns & Villages Serviced */}
      <div className="p-5 rounded-2xl bg-primary-dark">
      <div className="flex items-center gap-2 mb-2 text-secondary">
      <MapPin className="text-secondary h-5 w-5" />
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Surrounding Environs</h4>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    Bramhall • High Lane • Stockport • Bramhall • Bollington • Marple • Chelford • Sutton
                  </p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* BAND 5: HOW IT WORKS (FLAT 5-STEP HORIZONTAL RIBBON) */}
      <section className="w-full bg-primary-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <div className="text-center max-w-xl mx-auto mb-12">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary">Simple 5-Step Resolution</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white mt-2">How Our Mobile Fitting Operates</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {/* Step 1 */}
      <div className="p-5 rounded-2xl bg-primary/80 relative overflow-hidden flex flex-col justify-between">
      <div className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-gray-400/40 font-extrabold mb-2">01</div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Dial Dispatch</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Call our 24/7 hotline with your current location or postcode.</p>
      </div>
      </div>
      {/* Step 2 */}
      <div className="p-5 rounded-2xl bg-primary/80 relative overflow-hidden flex flex-col justify-between">
      <div className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-gray-400/40 font-extrabold mb-2">02</div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Vehicle &amp; Size</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">We confirm tyre markings (e.g. 225/45 R18) and your brand choice.</p>
      </div>
      </div>
      {/* Step 3 */}
      <div className="p-5 rounded-2xl bg-primary/80 relative overflow-hidden flex flex-col justify-between">
      <div className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-gray-400/40 font-extrabold mb-2">03</div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Van Dispatched</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">The nearest fitted Mercedes Sprinter unit heads straight to you.</p>
      </div>
      </div>
      {/* Step 4 */}
      <div className="p-5 rounded-2xl bg-primary/80 relative overflow-hidden flex flex-col justify-between">
      <div className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-gray-400/40 font-extrabold mb-2">04</div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Fitted &amp; Balanced</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">New tyre installed, dynamically balanced, and torqued to OEM specs.</p>
      </div>
      </div>
      {/* Step 5 */}
      <div className="p-5 rounded-2xl bg-primary/80 relative overflow-hidden flex flex-col justify-between">
      <div className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-gray-400/40 font-extrabold mb-2">05</div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Drive Away</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Secure card payment taken roadside. You&apos;re safely on your way.</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* BAND 6: REAL LOCAL JOB CARD */}
      <section className="w-full bg-primary-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
      <div className="p-6 sm:p-8 rounded-2xl bg-primary-dark overflow-hidden flex flex-col md:flex-row gap-8 items-center">
      <div className="relative w-full md:w-1/2 rounded-xl overflow-hidden aspect-[1.79]">
      <Image src="/gallery-roadside-fitting.webp" alt="Mobile tyre technician changing wheel on driveway in Hazel Grove" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase mb-3 self-start">
      <ShieldCheck className="h-[14px] w-[14px]" />
                  Recent Case Study
                </div>
      <h3 className="font-heading text-[30px] leading-[38px] font-bold text-white mb-3">
                  Incident Report: The Silk Road (A6), Hazel Grove
                </h3>
      <p className="text-[15px] leading-[24px] text-gray-400 mb-4">
                  Mercedes C-Class sustained an unrepairable kerbed alloy sidewall split exiting the retail park approach in heavy evening traffic. Direct Tyre Solutions dispatched a mobile unit stationed on the A555.
                </p>
      <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-primary/80 text-[13px] leading-[18px] text-white">
      <div>
      <span className="text-gray-400 block text-[11px] leading-[14px] tracking-[0.06em] font-bold">RESPONSE TIME</span>
      <strong className="text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">25 Minutes</strong>
      </div>
      <div>
      <span className="text-gray-400 block text-[11px] leading-[14px] tracking-[0.06em] font-bold">TYRE SPECIFICATION</span>
      <strong className="text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">225/45 R18</strong>
      </div>
      <div>
      <span className="text-gray-400 block text-[11px] leading-[14px] tracking-[0.06em] font-bold">RESOLUTION</span>
      <span className="text-white">Roadside Replacement</span>
      </div>
      <div>
      <span className="text-gray-400 block text-[11px] leading-[14px] tracking-[0.06em] font-bold">SAFETY CHECK</span>
      <span className="text-white">Torqued to OEM 130 Nm</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* BAND 7: FAQ ACCORDION */}
      <section className="w-full bg-primary/60 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary">Frequently Asked Questions</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white mt-2">Hazel Grove Tyre Replacement FAQ</h2>
      </div>
      <div className="space-y-4">
      {/* FAQ 1 */}
      <details className="group bg-primary-dark rounded-2xl p-6 open:bg-primary/80 transition-colors">
      <summary className="flex justify-between items-center cursor-pointer list-none text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">
      <span>What is your average emergency arrival time in Hazel Grove?</span>
      <ChevronDown className="text-secondary transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-4">
                  For emergencies on the A6 Silk Road, Lyme Green, and Hazel Grove town centre, our average response time is between 25 and 45 minutes. More outlying spots such as High Lane, Stockport, or high moor corridors like the Cat &amp; Fiddle (A555) are usually reached in 35 to 50 minutes depending on prevailing road conditions.
                </p>
      </details>
      {/* FAQ 2 */}
      <details className="group bg-primary-dark rounded-2xl p-6 open:bg-primary/80 transition-colors">
      <summary className="flex justify-between items-center cursor-pointer list-none text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">
      <span>Can you fit tyres on steep residential drives in Hurdsfield or Tytherington?</span>
      <ChevronDown className="text-secondary transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-4">
                  Yes. Our vans are fitted with heavy-duty commercial vehicle chocks and commercial pneumatic jacks designed to establish a safe, stable lifting footprint even on Hazel Grove&apos;s notoriously steep residential inclines. If a driveway is unviable for safety, we safely manoeuvre the car to the immediate kerbside.
                </p>
      </details>
      {/* FAQ 3 */}
      <details className="group bg-primary-dark rounded-2xl p-6 open:bg-primary/80 transition-colors">
      <summary className="flex justify-between items-center cursor-pointer list-none text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">
      <span>Do you operate genuine out-of-hours coverage across weekends and bank holidays?</span>
      <ChevronDown className="text-secondary transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-4">
                  Absolutely. Direct Tyre Solutions runs an uncompromised 24/7 rota, 365 days a year. Our phone lines connect directly to live dispatchers who have real-time visibility over local mobile tyre vans, not an unstaffed voicemail box or third-party call center.
                </p>
      </details>
      {/* FAQ 4 */}
      <details className="group bg-primary-dark rounded-2xl p-6 open:bg-primary/80 transition-colors">
      <summary className="flex justify-between items-center cursor-pointer list-none text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">
      <span>What happens if I don&apos;t know my exact tyre size?</span>
      <ChevronDown className="text-secondary transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-4">
                  Give our team your vehicle registration number. We pull the DVLA specifications instantly to identify standard fitment. If your vehicle uses staggered wheels (different sizes front and rear) or aftermarket alloys, our technicians will guide you through reading the numbers stamped on the sidewall over the phone.
                </p>
      </details>
      </div>
      </div>
      </section>
      {/* BAND 8: FINAL CTA (SOLID FLAT GOLD BAND) */}
      <section className="w-full bg-secondary text-primary-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
      <div>
      <span className="text-xs uppercase font-extrabold tracking-widest bg-primary-dark text-secondary px-3 py-1 rounded-full inline-block mb-3">
                Immediate Hazel Grove Dispatch
              </span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-primary-dark font-black">
                Stranded with a Flat Tyre in Hazel Grove?
              </h2>
      <p className="text-[18px] leading-[28px] text-primary-dark/80 max-w-xl mt-2 font-medium">
                Call our Cheshire control desk now. Our fitted vans are active 24/7 across the A6, A555, and surrounding villages.
              </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
      <a className="flex items-center gap-3 px-8 py-5 rounded-full bg-primary-dark text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase font-bold transition-all duration-150 hover:bg-primary-dark hover:scale-105 active:scale-95 shadow-2xl" href="tel:08009992470">
      <PhoneCall className="text-secondary h-5 w-5" fill="currentColor" strokeWidth={0} />
                Call 0800 999 2470
              </a>
      </div>
      </div>
      </section>
    </main>
  );
}
