import Image from "next/image";
import { ArrowRight, Award, CreditCard, Gavel, HelpCircle, History, PhoneCall, Receipt, Route, ShieldCheck, Star, Timer, Truck } from "lucide-react";

export default function TraffordParkPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* 1. HERO SECTION: Full-width real photo with flat bottom gradient */}
      <section className="relative w-full min-h-[580px] lg:min-h-[640px] flex items-end justify-center overflow-hidden bg-primary-dark">
      <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/hero-section-images-936x527.webp')" }}>
      </div>
      {/* Flat bottom gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-transparent"></div>
      <div className="relative w-full max-w-[1280px] px-margin-mobile lg:px-margin pt-24 pb-space-xl z-10">
      <div className="max-w-3xl flex flex-col gap-space-md">
      {/* Emergency Dispatch Chip */}
      <div className="inline-flex items-center gap-2 self-start bg-accent text-white px-3 py-1 rounded-full text-[14px] leading-[18px] tracking-[0.02em] font-semibold shadow-md">
      <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
      <span>Trafford Park Logistics Response Hub • 24/7 Active</span>
      </div>
      <h1 className="font-heading lg:font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold lg:text-[56px] lg:leading-[64px] lg:tracking-[-0.02em] lg:font-black text-white uppercase">
                24/7 Mobile Tyre Fitting in <span className="text-secondary">Trafford Park</span>
              </h1>
      <p className="text-[18px] leading-[28px] text-gray-400 max-w-2xl">
                Priority mobile tyre replacement and commercial fleet puncture response across Europe&apos;s largest industrial estate, Parkway (A5081), and Barton Dock Road. Zero depot downtime.
              </p>
      {/* CTA Cluster */}
      <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
      <a className="inline-flex items-center gap-3 bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase px-8 py-3.5 rounded-full hover:bg-secondary-hover active:scale-95 transition-all shadow-xl" href="tel:07955266077">
      <PhoneCall className="text-[20px] leading-[26px] font-bold h-5 w-5" fill="currentColor" strokeWidth={0} />
      <span>Call 07955 266 077</span>
      </a>
      <a className="inline-flex items-center gap-2 bg-primary/80 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold px-6 py-3.5 rounded-full hover:bg-primary-light active:scale-95 transition-all shadow-md" href="#services">
      <span>Book Commercial Fleet Visit</span>
      <ArrowRight className="text-[15px] leading-[24px] h-5 w-5" />
      </a>
      </div>
      </div>
      </div>
      </section>
      {/* 2. STATS STRIP: 4-Card flat grid */}
      <section className="w-full bg-primary-dark py-space-lg">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
      <div className="bg-primary-dark p-space-md rounded-2xl shadow-sm flex items-start gap-space-sm">
      <Timer className="text-secondary text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold h-5 w-5" />
      <div>
      <span className="font-heading text-[30px] leading-[38px] font-bold text-white block">20-35 Min</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Average Rapid Response</span>
      </div>
      </div>
      <div className="bg-primary-dark p-space-md rounded-2xl shadow-sm flex items-start gap-space-sm">
      <Truck className="text-secondary text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold h-5 w-5" />
      <div>
      <span className="font-heading text-[30px] leading-[38px] font-bold text-white block">Fleet Specialists</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Vans, HGVs &amp; Couriers</span>
      </div>
      </div>
      <div className="bg-primary-dark p-space-md rounded-2xl shadow-sm flex items-start gap-space-sm">
      <Route className="text-secondary text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold h-5 w-5" />
      <div>
      <span className="font-heading text-[30px] leading-[38px] font-bold text-white block">M60 • A5081 • A56</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Instant Arterial Clearance</span>
      </div>
      </div>
      <div className="bg-primary-dark p-space-md rounded-2xl shadow-sm flex items-start gap-space-sm">
      <History className="text-secondary text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold h-5 w-5" />
      <div>
      <span className="font-heading text-[30px] leading-[38px] font-bold text-white block">24/7/365</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Continuous Shift Coverage</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 3. LOCAL INTRO: Strategic Logistics & Industrial Context */}
      <section className="w-full bg-primary py-space-xl">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
      <div className="lg:col-span-5 flex flex-col gap-space-sm">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary uppercase tracking-wider">Mission-Critical Location</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">
                  Trafford Park Industrial &amp; Freight Infrastructure
                </h2>
      <div className="w-16 h-1 bg-secondary rounded-full"></div>
      </div>
      <div className="lg:col-span-7 flex flex-col gap-space-md text-gray-400 text-[18px] leading-[28px]">
      <p>
                  Home to over 1,300 active businesses, Trafford Park serves as the freight heart of the North West. Across massive national distribution hubs—from Kellogg&apos;s and Amazon through to heavy logistics terminals on Tenax Road and Barton Dock Road—a disabled delivery van or flat tyre directly threatens tight transport SLAs and critical delivery windows.
                </p>
      <p>
                  Whether you operate multi-drop courier sprinters on the A5081 Parkway, manage evening distribution transfers adjacent to the M60 (J9 &amp; J10), or work rotational night shifts with zero spare time, our heavy-duty mobile fitting fleet brings the tyre bay straight to your warehouse loading bay, industrial unit, or roadside hard shoulder in under 35 minutes.
                </p>
      </div>
      </div>
      </div>
      </section>
      {/* 4. SERVICES: 4 Horizontal Cards with Image Top-Halves */}
      <section className="w-full bg-primary-dark py-space-xl" id="services">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-space-lg">
      <div>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-gray-400 uppercase tracking-widest">Industrial Grade</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white mt-1">Trafford Fleet Services</h2>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-2 md:mt-0">Heavy vehicle rated mounting and industrial puncture diagnostics on site.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
      {/* Card 1 */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden flex flex-col shadow-md">
      <div className="h-44 w-full overflow-hidden relative">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Commercial Fleet and Van Tyres" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <span className="absolute top-3 left-3 bg-accent text-white px-2 py-0.5 rounded-full text-[11px] leading-[14px] tracking-[0.06em] font-bold">High Load</span>
      </div>
      <div className="p-space-md flex flex-col flex-grow justify-between">
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-2">Commercial Fleet &amp; Van Tyres</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Heavy-ply C-rated tyres for Sprinters, Transits, and light trucks. On-bay fitting during shifts.</p>
      </div>
      <div className="mt-4 pt-4 bg-primary/80 rounded-xl p-2.5">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary block">STOCK AVAILABILITY</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">215/75 R16, 235/65 R16</span>
      </div>
      </div>
      </div>
      {/* Card 2 */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden flex flex-col shadow-md">
      <div className="h-44 w-full overflow-hidden relative">
      <Image src="/gallery-roadside-fitting.webp" alt="Emergency Roadside &amp; Highway Intervention" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <span className="absolute top-3 left-3 bg-red-500/20 text-white px-2 py-0.5 rounded-full text-[11px] leading-[14px] tracking-[0.06em] font-bold">Rapid Highway</span>
      </div>
      <div className="p-space-md flex flex-col flex-grow justify-between">
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-2">Highway Intervention</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">High-visibility motorway response across M60 J9/10, M602, and A56 Chester Road pinch-points.</p>
      </div>
      <div className="mt-4 pt-4 bg-primary/80 rounded-xl p-2.5">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary block">RESPONSE PROTOCOL</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Class 1 Hi-Vis Beacons</span>
      </div>
      </div>
      </div>
      {/* Card 3 */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden flex flex-col shadow-md">
      <div className="h-44 w-full overflow-hidden relative">
      <Image src="/gallery-home-callout.webp" alt="Industrial Puncture Vulcanisation" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <span className="absolute top-3 left-3 bg-accent text-white px-2 py-0.5 rounded-full text-[11px] leading-[14px] tracking-[0.06em] font-bold">BS AU 159</span>
      </div>
      <div className="p-space-md flex flex-col flex-grow justify-between">
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-2">Industrial Vulcanisation</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Rapid patch &amp; plug repairs for yard debris, industrial metal tacks, and logistics estate punctures.</p>
      </div>
      <div className="mt-4 pt-4 bg-primary/80 rounded-xl p-2.5">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary block">STANDARD</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Full Tread Integrity Test</span>
      </div>
      </div>
      </div>
      {/* Card 4 */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden flex flex-col shadow-md">
      <div className="h-44 w-full overflow-hidden relative">
      <Image src="/gallery-evening-callout.webp" alt="Locking Wheel Nut Removal" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <span className="absolute top-3 left-3 bg-primary text-white px-2 py-0.5 rounded-full text-[11px] leading-[14px] tracking-[0.06em] font-bold">Specialist Kit</span>
      </div>
      <div className="p-space-md flex flex-col flex-grow justify-between">
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-2">Locking Nut Extraction</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Damage-free non-destructive removal for rounded, seized, or missing commercial wheel nut keys.</p>
      </div>
      <div className="mt-4 pt-4 bg-primary/80 rounded-xl p-2.5">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary block">SUCCESS RATE</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">100% Rim Protection</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 5. TRUST BADGES: Plain Industrial Icon Row */}
      <section className="w-full bg-primary py-space-lg">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-space-lg">
      <div className="flex items-center gap-space-sm">
      <div className="p-2.5 bg-primary/80 rounded-xl text-secondary flex items-center justify-center">
      <ShieldCheck className="text-[20px] leading-[26px] font-bold h-5 w-5" />
      </div>
      <div>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white block">Fully Insured</span>
      <span className="text-[13px] leading-[18px] text-gray-400">£5M Commercial Liability</span>
      </div>
      </div>
      <div className="flex items-center gap-space-sm">
      <div className="p-2.5 bg-primary/80 rounded-xl text-secondary flex items-center justify-center">
      <Gavel className="text-[20px] leading-[26px] font-bold h-5 w-5" />
      </div>
      <div>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white block">BS AU 159 Compliant</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Approved British Safety</span>
      </div>
      </div>
      <div className="flex items-center gap-space-sm">
      <div className="p-2.5 bg-primary/80 rounded-xl text-secondary flex items-center justify-center">
      <CreditCard className="text-[20px] leading-[26px] font-bold h-5 w-5" />
      </div>
      <div>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white block">Contactless POS</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Instant Chip &amp; Tap Payment</span>
      </div>
      </div>
      <div className="flex items-center gap-space-sm">
      <div className="p-2.5 bg-primary/80 rounded-xl text-secondary flex items-center justify-center">
      <Receipt className="text-[20px] leading-[26px] font-bold h-5 w-5" />
      </div>
      <div>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white block">Corporate Accounts</span>
      <span className="text-[13px] leading-[18px] text-gray-400">30-Day Fleet Invoicing</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 6. HOW IT WORKS: 3 Step Columns with Photo Top */}
      <section className="w-full bg-primary-dark py-space-xl">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
      <div className="text-center max-w-2xl mx-auto mb-space-xl">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary uppercase tracking-widest">Minimal Downtime</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white mt-1">Dispatched in Under 3 Minutes</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
      {/* Step 1 */}
      <div className="bg-primary/60 rounded-2xl p-space-lg flex flex-col shadow-md">
      <div className="relative h-32 w-full rounded-xl overflow-hidden mb-space-md">
      <Image src="/gallery-evening-home-visit.webp" alt="Inspection gauge checking tyre tread" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary">01</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mt-1 mb-2">Call &amp; Vehicle Spec</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">Dial our 24/7 hotline with your location (gate code/bay #) and tyre size. We confirm live stock in seconds.</p>
      </div>
      {/* Step 2 */}
      <div className="bg-primary/60 rounded-2xl p-space-lg flex flex-col shadow-md">
      <div className="relative h-32 w-full rounded-xl overflow-hidden mb-space-md">
      <Image src="/gallery-precision-care.webp" alt="Mobile workshop van on the road" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary">02</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mt-1 mb-2">Rapid Van En Route</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">Equipped Mercedes Sprinter deployed straight down the M60 / A5081 with live ETA tracking sent directly to dispatch.</p>
      </div>
      {/* Step 3 */}
      <div className="bg-primary/60 rounded-2xl p-space-lg flex flex-col shadow-md">
      <div className="relative h-32 w-full rounded-xl overflow-hidden mb-space-md">
      <Image src="/mobile-tyre-fitting-3-1536x1024.webp" alt="Precision fitting wheel with impact wrench" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary">03</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mt-1 mb-2">Fit &amp; Digital VAT Invoice</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">Laser wheel balancing, precision torque wrench fastening, and instantaneous company digital invoicing on completion.</p>
      </div>
      </div>
      </div>
      </section>
      {/* 7. REAL LOCAL JOB & TESTIMONIAL: Two-card split row */}
      <section className="w-full bg-primary py-space-xl">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
      {/* Job Log Card */}
      <div className="bg-primary-dark rounded-2xl overflow-hidden shadow-lg flex flex-col sm:flex-row">
      <div className="relative sm:w-1/2 h-56 sm:h-auto">
      <Image src="/wheel-balancing-2-1536x1024.webp" alt="Recent job log at Tenax Road" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="p-space-lg sm:w-1/2 flex flex-col justify-between">
      <div>
      <div className="inline-flex items-center gap-1.5 text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase mb-2">
      <span className="w-2 h-2 rounded-full bg-accent"></span>
      <span>Verified Field Job Log</span>
      </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Tenax Road Logistics Bay</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-2">
                      DAF LF Courier Van suffered a bead puncture on industrial scrap. Dispatched within 8 mins, new 215/75 R17.5 commercial tyre mounted and torqued in 35 mins total turnaround.
                    </p>
      </div>
      <div className="mt-4 pt-4 bg-primary/60 rounded-xl p-3 flex justify-between items-center">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">TOTAL TURNAROUND</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary">35 Minutes</span>
      </div>
      </div>
      </div>
      {/* Manager Testimonial Card */}
      <div className="bg-primary-dark rounded-2xl p-space-lg shadow-lg flex flex-col justify-between">
      <div>
      <div className="flex items-center gap-1 text-secondary mb-space-sm">
      <Star className="h-5 w-5" fill="currentColor" strokeWidth={0} />
      <Star className="h-5 w-5" fill="currentColor" strokeWidth={0} />
      <Star className="h-5 w-5" fill="currentColor" strokeWidth={0} />
      <Star className="h-5 w-5" fill="currentColor" strokeWidth={0} />
      <Star className="h-5 w-5" fill="currentColor" strokeWidth={0} />
      </div>
      <blockquote className="font-heading text-[20px] leading-[26px] font-bold text-white font-normal italic">
                    &quot;Fastest roadside callout in Greater Manchester. Kept our delivery fleet rolling on the 3 AM night shift without dropping a single Amazon distribution delivery window.&quot;
                  </blockquote>
      </div>
      <div className="flex items-center gap-space-md mt-space-md pt-space-md bg-primary/60 rounded-xl p-3">
      <div className="relative w-12 h-12 rounded-full overflow-hidden bg-primary/80 flex-shrink-0">
      <Image src="/about-rapid-response-tyres.webp" alt="Operations Supervisor" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white block">Marcus Gallagher</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Distribution Shift Controller, Parkway Freight Hub</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 8. FAQS: 2-Column Industrial Questions */}
      <section className="w-full bg-primary-dark py-space-xl">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
      <div className="max-w-2xl mb-space-xl">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary uppercase tracking-widest">Operational Questions</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white mt-1">Trafford Park Fleet FAQ</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
      <div className="bg-primary/60 p-space-lg rounded-2xl shadow-md flex flex-col gap-2">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white flex items-center gap-2">
      <HelpCircle className="text-secondary h-5 w-5" />
                  Can you clear gated security barriers and loading bays?
                </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Yes. All technicians carry verified ID, full PPE, and are experienced with warehouse gate intercoms, security log-ins, and loading dock access procedures across Trafford Park.
                </p>
      </div>
      <div className="bg-primary/60 p-space-lg rounded-2xl shadow-md flex flex-col gap-2">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white flex items-center gap-2">
      <HelpCircle className="text-secondary h-5 w-5" />
                  Do you support corporate 30-day invoice credit?
                </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  We provide pre-authorized invoicing facilities for courier operators, logistics contractors, and regional fleet managers. Immediate digital receipts sent to your central finance desk.
                </p>
      </div>
      <div className="bg-primary/60 p-space-lg rounded-2xl shadow-md flex flex-col gap-2">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white flex items-center gap-2">
      <HelpCircle className="text-secondary h-5 w-5" />
                  Can your vans handle high-roof long wheelbase vans?
                </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Our response vans use pneumatic commercial trolley jacks rated up to 10 tonnes, capable of safely servicing fully loaded Mercedes Sprinters, Iveco Dailys, and commercial Luton boxes.
                </p>
      </div>
      <div className="bg-primary/60 p-space-lg rounded-2xl shadow-md flex flex-col gap-2">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white flex items-center gap-2">
      <HelpCircle className="text-secondary h-5 w-5" />
                  Are you active for weekend and 2 AM shift changes?
                </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Trafford Park runs 24 hours a day, and so do we. We operate dedicated night vans stationed between Junctions 9 and 10 of the M60 specifically for graveyard shift callouts.
                </p>
      </div>
      </div>
      </div>
      </section>
      {/* 9. RELATED LOCATIONS: Nearby Sector Badges */}
      <section className="w-full bg-primary py-space-lg">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
      <div className="flex flex-col md:flex-row items-center justify-between gap-space-md">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-widest block">Immediate Rapid Response Environs</span>
      <span className="font-heading text-[20px] leading-[26px] font-bold text-white">Surrounding Dispatch Coverage</span>
      </div>
      <div className="flex flex-wrap gap-2.5">
      <span className="px-4 py-2 bg-primary/80 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold rounded-full">Stretford</span>
      <span className="px-4 py-2 bg-primary/80 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold rounded-full">Urmston</span>
      <span className="px-4 py-2 bg-primary/80 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold rounded-full">Salford</span>
      <span className="px-4 py-2 bg-primary/80 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold rounded-full">Eccles</span>
      <span className="px-4 py-2 bg-primary/80 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold rounded-full">Manchester City Centre</span>
      </div>
      </div>
      </div>
      </section>
      {/* 10. FINAL CTA: Plain Solid-Gold Full-Width Bar */}
      <section className="w-full bg-secondary text-primary py-space-xl">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin flex flex-col md:flex-row items-center justify-between gap-space-lg">
      <div className="text-center md:text-left">
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-primary font-black uppercase">
                Stranded in Trafford Park Right Now?
              </h2>
      <p className="text-[18px] leading-[28px] text-primary/80 mt-1 max-w-xl">
                Call our priority dispatch unit directly. Mobile technician en route with correct specification tyres immediately.
              </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-space-md flex-shrink-0">
      <a className="inline-flex items-center gap-3 bg-primary-dark text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase px-8 py-4 rounded-full hover:bg-primary/60 active:scale-95 transition-all shadow-xl" href="tel:07955266077">
      <PhoneCall className="text-secondary h-5 w-5" fill="currentColor" strokeWidth={0} />
      <span>Call 07955 266 077</span>
      </a>
      <a className="inline-flex items-center gap-2 bg-primary-dark/20 text-primary text-[14px] leading-[18px] tracking-[0.02em] font-semibold px-6 py-4 rounded-full hover:bg-primary-dark/30 active:scale-95 transition-all shadow-sm" href="#services">
      <span>Fleet Account Enquiry</span>
      <Award className="h-5 w-5" />
      </a>
      </div>
      </div>
      </section>
    </main>
  );
}
