import { Car, CreditCard, Gavel, MapPin, MessageCircle, PhoneCall, Route, ShieldCheck, Star, Timer, TrafficCone, Truck } from "lucide-react";

export default function AshtonUnderLynePage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[620px] lg:h-[700px] overflow-hidden flex items-end">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero-section-images-936x527.webp')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/40 to-transparent"></div>
      <div className="relative w-full max-w-[1280px] mx-auto px-4 md:px-8 pb-12 lg:pb-16 z-10">
      <div className="flex items-center gap-3 mb-4">
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                24/7 Rapid Response Unit
              </span>
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/80 backdrop-blur-md text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <MapPin className="text-secondary h-[14px] w-[14px]" />
                Ashton-under-Lyne &amp; Tameside
              </span>
      </div>
      <h1 className="font-heading text-[36px] leading-[42px] tracking-[-0.01em] font-black md:text-[56px] md:leading-[64px] md:tracking-[-0.02em] md:font-black text-white max-w-4xl mb-4">
              24/7 Mobile Tyre Fitting in Ashton-under-Lyne
            </h1>
      <p className="text-[18px] leading-[28px] text-slate-300 max-w-2xl mb-8">
              Rapid mobile tyre replacement across Snipe Retail Park, Ashton Moss, Lord Sheldon Way &amp; Lord Street. Van dispatched to your roadside breakdown, driveway, or workplace within minutes.
            </p>
      <div className="flex flex-wrap items-center gap-4">
      <a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary hover:bg-secondary-hover text-primary font-heading text-[20px] leading-[26px] font-bold shadow-xl transition-all duration-200 hover:scale-105 active:scale-95" href="tel:08009992470">
      <PhoneCall className="font-bold h-5 w-5" />
                Call 0800 999 2470
              </a>
      <a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary/90 hover:bg-primary-light text-white font-heading text-[20px] leading-[26px] font-bold backdrop-blur-md transition-all duration-200" href="https://wa.me/448009992470">
      <MessageCircle className="text-accent h-5 w-5" />
                WhatsApp Dispatch
              </a>
      </div>
      </div>
      </section>
      {/* 2. STAT STRIP */}
      <section className="w-full bg-primary-dark py-6">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-primary/60 backdrop-blur-md p-6 rounded-2xl flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
      <Timer className="h-6 w-6" />
      </div>
      <div>
      <div className="font-heading text-[30px] leading-[38px] font-bold text-white">25-35 Min</div>
      <div className="text-[13px] leading-[18px] text-slate-400">Avg Ashton Arrival Time</div>
      </div>
      </div>
      <div className="bg-primary/60 backdrop-blur-md p-6 rounded-2xl flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-gray-400">
      <Route className="h-6 w-6" />
      </div>
      <div>
      <div className="font-heading text-[30px] leading-[38px] font-bold text-white">M60 &amp; A635</div>
      <div className="text-[13px] leading-[18px] text-slate-400">Priority Corridor Patrol</div>
      </div>
      </div>
      <div className="bg-primary/60 backdrop-blur-md p-6 rounded-2xl flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
      <Truck className="h-6 w-6" />
      </div>
      <div>
      <div className="font-heading text-[30px] leading-[38px] font-bold text-white">100% Mobile</div>
      <div className="text-[13px] leading-[18px] text-slate-400">Fully Equipped Van Fleet</div>
      </div>
      </div>
      <div className="bg-primary/60 backdrop-blur-md p-6 rounded-2xl flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-gray-400">
      <Star className="h-6 w-6" />
      </div>
      <div>
      <div className="font-heading text-[30px] leading-[38px] font-bold text-white">4.9 / 5 Rating</div>
      <div className="text-[13px] leading-[18px] text-slate-400">1,400+ Verified Callouts</div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 3. TRUST BADGES ROW */}
      <section className="w-full bg-primary-dark py-8">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      <div className="flex items-center justify-center gap-3">
      <ShieldCheck className="text-secondary h-6 w-6" />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-slate-200">Fully Insured Technicians</span>
      </div>
      <div className="flex items-center justify-center gap-3">
      <Gavel className="text-secondary h-6 w-6" />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-slate-200">BS AU 159 Certified Repairs</span>
      </div>
      <div className="flex items-center justify-center gap-3">
      <Car className="text-secondary h-6 w-6" />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-slate-200">Zero Towing Required</span>
      </div>
      <div className="flex items-center justify-center gap-3">
      <CreditCard className="text-secondary h-6 w-6" />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-slate-200">Contactless Card POS</span>
      </div>
      </div>
      </div>
      </section>
      {/* 4. SERVICES GRID */}
      <section className="w-full bg-primary-dark py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
      <div className="mb-12">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary uppercase tracking-wider block mb-2">On-Site Tyres Everywhere</span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white">Our Emergency Mobile Fitting Services</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Service Card 1 */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden flex flex-col hover:bg-primary/80 transition-all">
      <div className="h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/gallery-onsite-wheel-fitting.webp')" }}></div>
      <div className="p-6 flex flex-col flex-grow">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-2">Roadside Blowout Recovery</h3>
      <p className="text-[15px] leading-[24px] text-slate-400 flex-grow">
                    Stranded on M60 J23, A635 or A627? Our high-visibility vans deploy quickly with heavy-duty jacks and roadside safety perimeters.
                  </p>
      </div>
      </div>
      {/* Service Card 2 */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden flex flex-col hover:bg-primary/80 transition-all">
      <div className="h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/gallery-roadside-fitting.webp')" }}></div>
      <div className="p-6 flex flex-col flex-grow">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-2">Puncture Repairs (BS AU 159)</h3>
      <p className="text-[15px] leading-[24px] text-slate-400 flex-grow">
                    Safe, British Standard minor repair plug and patch on-site when your tread allows, saving you the cost of a full replacement.
                  </p>
      </div>
      </div>
      {/* Service Card 3 */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden flex flex-col hover:bg-primary/80 transition-all">
      <div className="h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/gallery-home-callout.webp')" }}></div>
      <div className="p-6 flex flex-col flex-grow">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-2">Home &amp; Driveway Fitting</h3>
      <p className="text-[15px] leading-[24px] text-slate-400 flex-grow">
                    Woke up to a flat tyre in Ashton or Dukinfield? We come directly to your driveway, fitting new tyres with digital precision balancing.
                  </p>
      </div>
      </div>
      {/* Service Card 4 */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden flex flex-col hover:bg-primary/80 transition-all">
      <div className="h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/gallery-evening-callout.webp')" }}></div>
      <div className="p-6 flex flex-col flex-grow">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-2">Commercial Fleet &amp; Vans</h3>
      <p className="text-[15px] leading-[24px] text-slate-400 flex-grow">
                    Fast turnaround for delivery fleets, transit vans, and light commercial hauliers across Ashton Moss and surrounding industrial parks.
                  </p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 5. HOW IT WORKS */}
      <section className="w-full bg-primary-dark py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary uppercase tracking-wider block mb-2">Frictionless Dispatch</span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white">How It Works in 3 Quick Steps</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Step 1 */}
      <div className="bg-primary/60 rounded-2xl p-6 relative flex flex-col">
      <div className="h-40 w-full rounded-xl bg-cover bg-center mb-6 overflow-hidden" style={{ backgroundImage: "url('/gallery-evening-home-visit.webp')" }}></div>
      <div className="flex items-center gap-3 mb-4">
      <span className="w-8 h-8 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center">1</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Contact &amp; Share GPS</h3>
      </div>
      <p className="text-[15px] leading-[24px] text-slate-400">
                  Call or send your location via WhatsApp. State your tyre size or registration, and we confirm stock immediately from our mobile dispatch unit.
                </p>
      </div>
      {/* Step 2 */}
      <div className="bg-primary/60 rounded-2xl p-6 relative flex flex-col">
      <div className="h-40 w-full rounded-xl bg-cover bg-center mb-6 overflow-hidden" style={{ backgroundImage: "url('/gallery-precision-care.webp')" }}></div>
      <div className="flex items-center gap-3 mb-4">
      <span className="w-8 h-8 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center">2</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Technician En Route</h3>
      </div>
      <p className="text-[15px] leading-[24px] text-slate-400">
                  Our nearest response van is flagged and routed directly to your car. Track live arrival progress with direct contact to your technician.
                </p>
      </div>
      {/* Step 3 */}
      <div className="bg-primary/60 rounded-2xl p-6 relative flex flex-col">
      <div className="h-40 w-full rounded-xl bg-cover bg-center mb-6 overflow-hidden" style={{ backgroundImage: "url('/mobile-tyre-fitting-3-1536x1024.webp')" }}></div>
      <div className="flex items-center gap-3 mb-4">
      <span className="w-8 h-8 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center">3</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Fitted, Torqued &amp; Cleared</h3>
      </div>
      <p className="text-[15px] leading-[24px] text-slate-400">
                  Fitted with brand-new valves, electronically balanced, and torqued to manufacturer spec. Pay safely with contactless card when complete.
                </p>
      </div>
      </div>
      </div>
      </section>
      {/* 6. REAL LOCAL JOB + TESTIMONIAL */}
      <section className="w-full bg-primary-dark py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
      {/* Card 1: Job Spotlight */}
      <div className="bg-primary/80 rounded-2xl overflow-hidden flex flex-col">
      <div className="h-64 w-full bg-cover bg-center" style={{ backgroundImage: "url('/wheel-balancing-2-1536x1024.webp')" }}></div>
      <div className="p-8 flex flex-col flex-grow">
      <div className="flex items-center gap-2 mb-3">
      <span className="px-2.5 py-0.5 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">Recent Dispatch</span>
      <span className="text-[13px] leading-[18px] text-slate-400">Snipe Retail Park, Ashton</span>
      </div>
      <h3 className="font-heading text-[30px] leading-[38px] font-bold text-white mb-4">Bolt Puncture Emergency: Audi A4</h3>
      <p className="text-[15px] leading-[24px] text-slate-300 mb-6">
                    Driver picked up a construction bolt near the retail entrance. We arrived on site within 24 minutes, fitted a replacement 245/40 R18 Goodyear Eagle F1, precision balanced the alloy wheel, and got them back safely on the road.
                  </p>
      <div className="mt-auto grid grid-cols-3 gap-2 py-4 bg-primary-dark/50 rounded-xl px-4 text-center">
      <div>
      <span className="block font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary">24 Min</span>
      <span className="text-xs text-slate-400">Response</span>
      </div>
      <div>
      <span className="block font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">245/40 R18</span>
      <span className="text-xs text-slate-400">Tyre Spec</span>
      </div>
      <div>
      <span className="block font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">On-Site</span>
      <span className="text-xs text-slate-400">Completed</span>
      </div>
      </div>
      </div>
      </div>
      {/* Card 2: Local Testimonial */}
      <div className="bg-primary/60 rounded-2xl p-8 lg:p-12 flex flex-col justify-between">
      <div>
      <div className="flex items-center gap-1 text-secondary mb-6">
      <Star className="h-5 w-5" fill="currentColor" strokeWidth={0} />
      <Star className="h-5 w-5" fill="currentColor" strokeWidth={0} />
      <Star className="h-5 w-5" fill="currentColor" strokeWidth={0} />
      <Star className="h-5 w-5" fill="currentColor" strokeWidth={0} />
      <Star className="h-5 w-5" fill="currentColor" strokeWidth={0} />
      </div>
      <blockquote className="font-heading text-[20px] leading-[26px] font-bold text-white mb-6">
                    “Blew out my front tyre on the A635 coming home from work late Tuesday night. No other garage picked up. Direct Tyre Solutions had a van with me in under 30 minutes. Absolute lifesavers, professional and clean work.”
                  </blockquote>
      </div>
      <div>
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Marcus T.</div>
      <div className="text-[13px] leading-[18px] text-slate-400">Ashton-under-Lyne Daily Commuter</div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 7. ROADS & NEARBY AREAS COVERED */}
      <section className="w-full bg-primary-dark py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
      <div className="mb-12">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary uppercase tracking-wider block mb-2">Coverage Zone</span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white">Strategic Roads &amp; Tameside Locations</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-primary/60 p-8 rounded-2xl">
      <div className="flex items-center gap-3 mb-6">
      <TrafficCone className="text-secondary h-[30px] w-[30px]" />
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Key Highway &amp; Road Links</h3>
      </div>
      <ul className="space-y-4 text-[15px] leading-[24px] text-slate-300">
      <li className="flex items-center gap-3">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span><strong className="text-white">M60 Junction 23:</strong> Direct fast access along the Manchester Outer Ring Road.</span>
      </li>
      <li className="flex items-center gap-3">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span><strong className="text-white">M67 Motorway:</strong> Rapid intervention for Denton, Hyde &amp; Peak links.</span>
      </li>
      <li className="flex items-center gap-3">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span><strong className="text-white">A635 Manchester Road:</strong> High-traffic commuter support from Manchester to Stalybridge.</span>
      </li>
      <li className="flex items-center gap-3">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span><strong className="text-white">A627 / Lord Sheldon Way:</strong> Snipe Retail Park and Ashton Moss retail zone coverage.</span>
      </li>
      </ul>
      </div>
      <div className="bg-primary/60 p-8 rounded-2xl">
      <div className="flex items-center gap-3 mb-6">
      <MapPin className="text-gray-400 h-[30px] w-[30px]" />
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Surrounding Towns &amp; Suburbs</h3>
      </div>
      <div className="grid grid-cols-2 gap-4 text-[15px] leading-[24px]">
      <div className="p-4 bg-primary/80 rounded-xl">
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Dukinfield</div>
      <div className="text-[13px] leading-[18px] text-slate-400">10-15 Min ETA</div>
      </div>
      <div className="p-4 bg-primary/80 rounded-xl">
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Stalybridge</div>
      <div className="text-[13px] leading-[18px] text-slate-400">12-18 Min ETA</div>
      </div>
      <div className="p-4 bg-primary/80 rounded-xl">
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Audenshaw</div>
      <div className="text-[13px] leading-[18px] text-slate-400">10-15 Min ETA</div>
      </div>
      <div className="p-4 bg-primary/80 rounded-xl">
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Droylsden</div>
      <div className="text-[13px] leading-[18px] text-slate-400">15-20 Min ETA</div>
      </div>
      <div className="p-4 bg-primary/80 rounded-xl col-span-2">
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Mossley &amp; Saddleworth Edge</div>
      <div className="text-[13px] leading-[18px] text-slate-400">18-25 Min ETA</div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section className="w-full bg-primary-dark py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
      <div className="mb-12">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary uppercase tracking-wider block mb-2">Got Questions?</span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white">Ashton Mobile Fitting FAQs</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-primary/80 p-6 rounded-2xl">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">How quickly can your tyre van reach Ashton Moss?</h3>
      <p className="text-[15px] leading-[24px] text-slate-400">
                  Our average arrival time in the Ashton-under-Lyne area, including Ashton Moss and Snipe Retail Park, is 25 to 35 minutes depending on traffic flow.
                </p>
      </div>
      <div className="bg-primary/80 p-6 rounded-2xl">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">What if I don&apos;t know my exact tyre size?</h3>
      <p className="text-[15px] leading-[24px] text-slate-400">
                  Simply give us your vehicle registration number when calling. We can look up standard manufacturer specifications or help you read the sidewall markings.
                </p>
      </div>
      <div className="bg-primary/80 p-6 rounded-2xl">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Do you operate during late nights and weekends?</h3>
      <p className="text-[15px] leading-[24px] text-slate-400">
                  Yes, our dispatch runs 24 hours a day, 365 days a year across Ashton and the wider Tameside region. Night-time emergency fitments are our specialty.
                </p>
      </div>
      <div className="bg-primary/80 p-6 rounded-2xl">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Can you safely work on motorway hard shoulders?</h3>
      <p className="text-[15px] leading-[24px] text-slate-400">
                  Yes. Our vans are fitted with Chapter 8 compliant flashing beacons, reflective chevrons, and technicians carry full roadside safety certifications for M60 and M67 callouts.
                </p>
      </div>
      </div>
      </div>
      </section>
      {/* 9. FINAL CTA FULL-WIDTH BAR */}
      <section className="w-full bg-secondary py-12 px-4 md:px-8">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="text-center md:text-left">
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-primary mb-2">
                Stranded in Ashton-under-Lyne?
              </h2>
      <p className="text-[18px] leading-[28px] text-primary/90">
                Our rapid response mobile tyre vans are operating in your area right now.
              </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
      <a className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary-dark hover:bg-primary-dark text-white font-heading text-[20px] leading-[26px] font-bold shadow-xl transition-all" href="tel:08009992470">
      <PhoneCall className="text-secondary h-5 w-5" />
                Call 0800 999 2470
              </a>
      <a className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-primary font-heading text-[20px] leading-[26px] font-bold shadow-md transition-all" href="https://wa.me/448009992470">
      <MessageCircle className="text-accent h-5 w-5" />
                Get Instant WhatsApp Quote
              </a>
      </div>
      </div>
      </section>
    </main>
  );
}
