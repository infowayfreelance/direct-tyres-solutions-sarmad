import Image from "next/image";
import { Baby, Briefcase, CheckCircle2, ChevronDown, Clock, Disc, Headphones, Home, KeyRound, MapPin, MessageCircle, Navigation, PhoneCall, ShieldCheck, Siren, Unlock, Wrench } from "lucide-react";

export default function HandforthPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full bg-primary-dark overflow-hidden py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      {/* Text & Primary Action */}
      <div className="lg:col-span-7 flex flex-col space-y-6">
      <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-primary/80 text-secondary shadow-sm">
      <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold tracking-wider uppercase text-white">Cheshire Response Unit • Handforth &amp; Wilmslow</span>
      </div>
      <h1 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black leading-none">
                24/7 Mobile Tyre Fitting in Handforth
              </h1>
      <p className="text-[18px] leading-[28px] text-white/90 max-w-2xl">
                Don&apos;t let a morning flat tyre ruin the school run or your commute. Our fully equipped mobile workshops bring professional tyre fitting straight to your driveway in Handforth and Wilmslow borders.
              </p>
      <div className="flex flex-wrap items-center gap-4 pt-2">
      <a className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-secondary text-primary text-[14px] leading-[18px] tracking-[0.02em] font-semibold hover:bg-secondary-hover transition-all duration-200 shadow-md active:scale-95" href="tel:08009992470">
      <PhoneCall className="h-[20px] w-[20px]" fill="currentColor" strokeWidth={0} />
      <span>Call 0800 999 2470</span>
      </a>
      <a className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-primary/80 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold hover:bg-primary transition-all duration-200 shadow-sm active:scale-95" href="https://wa.me/448009992470">
      <MessageCircle className="h-[20px] w-[20px] text-accent" />
      <span>WhatsApp Dispatch</span>
      </a>
      </div>
      {/* Trust Indicator Bar */}
      <div className="grid grid-cols-3 gap-3 pt-4 max-w-xl">
      <div className="p-3 rounded-xl bg-primary/60 backdrop-blur-md">
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary">25-40 min</div>
      <div className="text-[13px] leading-[18px] text-white/70">Typical driveway arrival</div>
      </div>
      <div className="p-3 rounded-xl bg-primary/60 backdrop-blur-md">
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-gray-400">No Tow Trucks</div>
      <div className="text-[13px] leading-[18px] text-white/70">Fitted at home or work</div>
      </div>
      <div className="p-3 rounded-xl bg-primary/60 backdrop-blur-md">
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">24/7 Service</div>
      <div className="text-[13px] leading-[18px] text-white/70">Day, night &amp; weekends</div>
      </div>
      </div>
      </div>
      {/* Hero Visual */}
      <div className="lg:col-span-5 relative">
      <div className="relative rounded-2xl overflow-hidden shadow-xl bg-primary/60">
      <Image src="/hero-section-images-936x527.webp" alt="Direct Tyre Solutions technician replacing a tyre directly on a residential driveway in Handforth" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-80 sm:h-96 lg:h-[430px] object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/30 to-transparent"></div>
      <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-primary-dark/80 backdrop-blur-md">
      <div className="flex items-center gap-3">
      <CheckCircle2 className="text-secondary h-6 w-6" fill="currentColor" strokeWidth={0} />
      <div>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">At-Home Precision Fitting</p>
      <p className="text-[13px] leading-[18px] text-white/80">Digital wheel balancing &amp; new rubber valves on your drive</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* LOCAL INTRO & RESIDENTIAL EMPHASIS */}
      <section className="w-full bg-primary/60 py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-7 flex flex-col space-y-4">
      <div className="inline-flex items-center gap-1.5 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider">
      <MapPin className="h-[14px] w-[14px]" />
      <span>Family &amp; Residential Service</span>
      </div>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white font-bold">
                  Skip the Cold Waiting Room with the Kids. We Come Directly to You.
                </h2>
      <p className="text-[15px] leading-[24px] text-white/80">
                  Finding a flat tyre when you&apos;re getting children dressed for school or packing bags for work is stressful enough. Instead of nursing a dangerous slow puncture to a garage or waiting hours in greasy waiting rooms around Handforth Dean or Wilmslow Road, Direct Tyre Solutions turns your driveway into a state-of-the-art tyre bay.
                </p>
      <p className="text-[15px] leading-[24px] text-white/80">
                  From Spath Lane and Meriton Road to the newer estates bordering Heald Green and the A34 bypass, our mobile fitting vans arrive fully stocked with premium, mid-range, and run-flat tyres tailored to your vehicle specifications.
                </p>
      </div>
      <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
      <div className="p-5 rounded-2xl bg-primary-dark/70 backdrop-blur-md shadow-sm flex items-start gap-4">
      <div className="p-3 rounded-full bg-accent/30 text-gray-400">
      <Baby className="h-5 w-5" />
      </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Stress-Free Mornings</h3>
      <p className="text-[13px] leading-[18px] text-white/75 mt-1">Keep the kids warm indoors with breakfast while we mount and balance your new tyre outside.</p>
      </div>
      </div>
      <div className="p-5 rounded-2xl bg-primary-dark/70 backdrop-blur-md shadow-sm flex items-start gap-4">
      <div className="p-3 rounded-full bg-secondary/20 text-secondary">
      <Briefcase className="h-5 w-5" />
      </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">No Interrupted Workdays</h3>
      <p className="text-[13px] leading-[18px] text-white/75 mt-1">Working from home in Handforth? We complete the swap silently without breaking your schedule.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SERVICES: 4 CIRCULAR PHOTO BADGES + ACCORDION */}
      <section className="w-full bg-primary-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary">Our Services in Handforth</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white font-bold">Complete Mobile Tyre Solutions</h2>
      <p className="text-[15px] leading-[24px] text-white/80">Select any service to view vehicle compatibility, timing, and equipment details.</p>
      </div>
      {/* 4 Rounded Photo Badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {/* Badge 1 */}
      <button className="group flex flex-col items-center focus:outline-none" type="button">
      <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-lg p-1 bg-primary/60 transition-transform duration-300 group-hover:scale-105">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Emergency roadside service support van" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full rounded-full object-cover" />
      <div className="absolute bottom-1 right-1 p-2 rounded-full bg-accent text-white shadow-md">
      <Siren className="h-4 w-4" />
      </div>
      </div>
      <span className="mt-3 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white group-hover:text-secondary transition-colors">Emergency roadside</span>
      </button>
      {/* Badge 2 */}
      <button className="group flex flex-col items-center focus:outline-none" type="button">
      <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-lg p-1 bg-primary/60 transition-transform duration-300 group-hover:scale-105">
      <Image src="/gallery-roadside-fitting.webp" alt="BS AU 159 certified tyre puncture repair inspection" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full rounded-full object-cover" />
      <div className="absolute bottom-1 right-1 p-2 rounded-full bg-secondary text-primary shadow-md">
      <Wrench className="h-4 w-4" />
      </div>
      </div>
      <span className="mt-3 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white group-hover:text-secondary transition-colors">BS AU 159 repair</span>
      </button>
      {/* Badge 3 */}
      <button className="group flex flex-col items-center focus:outline-none" type="button">
      <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-lg p-1 bg-primary/60 transition-transform duration-300 group-hover:scale-105">
      <Image src="/gallery-home-callout.webp" alt="Van fitted with locking wheel nut extraction tools" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full rounded-full object-cover" />
      <div className="absolute bottom-1 right-1 p-2 rounded-full bg-primary text-secondary shadow-md">
      <KeyRound className="h-4 w-4" />
      </div>
      </div>
      <span className="mt-3 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white group-hover:text-secondary transition-colors">Locking wheel nuts</span>
      </button>
      {/* Badge 4 */}
      <button className="group flex flex-col items-center focus:outline-none" type="button">
      <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-lg p-1 bg-primary/60 transition-transform duration-300 group-hover:scale-105">
      <Image src="/gallery-evening-callout.webp" alt="Technician fitting tyre on residential driveway" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full rounded-full object-cover" />
      <div className="absolute bottom-1 right-1 p-2 rounded-full bg-accent text-white shadow-md">
      <Home className="h-4 w-4" />
      </div>
      </div>
      <span className="mt-3 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white group-hover:text-secondary transition-colors">Driveway &amp; school-run</span>
      </button>
      </div>
      {/* Service Details Accordion */}
      <div className="space-y-3 max-w-4xl mx-auto w-full pt-4">
      <details className="accordion-item rounded-2xl bg-primary/60 backdrop-blur-md overflow-hidden transition-all duration-300 group" id="service-0"><summary className="accordion-trigger w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer list-none">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-center gap-3">
      <MapPin className="text-secondary group-open:rotate-180 h-5 w-5" />
                    Emergency Roadside Fitting
                  </span>
      <ChevronDown className="accordion-icon text-white/60 transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="accordion-content px-5 pb-5 pt-1 text-white/85 text-[15px] leading-[24px]">
                  Stuck on the A34 bypass or negotiating an off-ramp near Handforth Dean? Our fast-response support vans carry high-visibility motorway safety kit, compressed air, and heavy-duty jacks to safely change destroyed tyres in dynamic traffic environments day and night.
                </div></details>
      <details className="accordion-item rounded-2xl bg-primary/60 backdrop-blur-md overflow-hidden transition-all duration-300 group" id="service-1"><summary className="accordion-trigger w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer list-none">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-center gap-3">
      <ShieldCheck className="text-secondary group-open:rotate-180 h-5 w-5" />
                    BS AU 159 Puncture Repair
                  </span>
      <ChevronDown className="accordion-icon text-white/60 transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="accordion-content px-5 pb-5 pt-1 text-white/85 text-[15px] leading-[24px]">
                  Picked up a nail or screw? We don&apos;t push unnecessary tyre sales. If your puncture is located within the central 70% tread area and hasn&apos;t compromised internal sidewalls, we execute a permanent combi-plug BS AU 159 certified vulcanized repair right on your drive for a fraction of replacement cost.
                </div></details>
      <details className="accordion-item rounded-2xl bg-primary/60 backdrop-blur-md overflow-hidden transition-all duration-300 group" id="service-2"><summary className="accordion-trigger w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer list-none">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-center gap-3">
      <Unlock className="text-secondary group-open:rotate-180 h-5 w-5" />
                    Locking Wheel Nut Removal
                  </span>
      <ChevronDown className="accordion-icon text-white/60 transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="accordion-content px-5 pb-5 pt-1 text-white/85 text-[15px] leading-[24px]">
                  Lost your key key adaptor or discovered rounded lug bolts during an emergency? We deploy specialist torque extractors that remove stripped, overtightened, or damaged locking wheel nuts with zero damage to alloy wheels.
                </div></details>
      <details className="accordion-item rounded-2xl bg-primary/60 backdrop-blur-md overflow-hidden transition-all duration-300 group" id="service-3"><summary className="accordion-trigger w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer list-none">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-center gap-3">
      <Clock className="text-secondary group-open:rotate-180 h-5 w-5" />
                    Driveway &amp; School-Run Fast Turnaround
                  </span>
      <ChevronDown className="accordion-icon text-white/60 transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="accordion-content px-5 pb-5 pt-1 text-white/85 text-[15px] leading-[24px]">
                  Tailored specifically for families in Handforth. When an unexpected morning flat threatens to derail nurseries, school drop-offs, and morning meetings, our rapid dispatch priority gets a van to your driveway with the exact matching tyre sizes within 30 minutes.
                </div></details>
      </div>
      </div>
      </section>
      {/* ROADS & REGIONS COVERAGE */}
      <section className="w-full bg-primary/60 py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/* Text details */}
      <div className="lg:col-span-7 flex flex-col space-y-5">
      <div className="inline-flex items-center gap-2 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider">
      <Navigation className="h-4 w-4" />
      <span>Coverage Arteries &amp; Cheshire Borders</span>
      </div>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white font-bold">
                Stationed Close to A34, A555 &amp; M56 Corridors
              </h2>
      <p className="text-[15px] leading-[24px] text-white/80">
                Our rapid response units patrol the key Cheshire and South Manchester connectors continuously. Whether you&apos;ve suffered a blowout on the <span className="text-white font-semibold">A34 Handforth bypass</span>, lost pressure along the <span className="text-white font-semibold">A555 Manchester Airport Eastern Link</span>, or you&apos;re stuck along the <span className="text-white font-semibold">B5358 Wilmslow Road</span>, help is never more than a quick phone call away.
              </p>
      {/* Area pills */}
      <div className="pt-2">
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase text-white/60 tracking-wider mb-2">Neighbouring Towns Covered in 20-30 Mins:</p>
      <div className="flex flex-wrap gap-2">
      <span className="px-3 py-1 rounded-full bg-primary/80 text-white text-[13px] leading-[18px]">Wilmslow</span>
      <span className="px-3 py-1 rounded-full bg-primary/80 text-white text-[13px] leading-[18px]">Cheadle Hulme</span>
      <span className="px-3 py-1 rounded-full bg-primary/80 text-white text-[13px] leading-[18px]">Wythenshawe</span>
      <span className="px-3 py-1 rounded-full bg-primary/80 text-white text-[13px] leading-[18px]">Alderley Edge</span>
      <span className="px-3 py-1 rounded-full bg-primary/80 text-white text-[13px] leading-[18px]">Heald Green</span>
      <span className="px-3 py-1 rounded-full bg-primary/80 text-white text-[13px] leading-[18px]">Handforth Dean</span>
      </div>
      </div>
      </div>
      {/* Supporting Image */}
      <div className="lg:col-span-5">
      <div className="relative rounded-2xl overflow-hidden shadow-lg bg-primary-dark">
      <Image src="/gallery-evening-home-visit.webp" alt="Direct Tyre Solutions mobile fitting workshop van in evening lighting" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-72 sm:h-80 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent"></div>
      <div className="absolute bottom-4 left-4 right-4">
      <span className="inline-block px-3 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">
                    Mobile Workshop En Route
                  </span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* HOW IT WORKS: 3 SIMPLE STEPS */}
      <section className="w-full bg-primary-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary">Easy 3-Step Process</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white font-bold">How Mobile Tyre Fitting Works</h2>
      <p className="text-[15px] leading-[24px] text-white/80">No registration apps, no waiting days for slots. One phone call solves your tyre issue.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Step 1 */}
      <div className="p-6 rounded-2xl bg-primary/60 backdrop-blur-md flex flex-col justify-between space-y-6">
      <div className="space-y-4">
      <div className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center font-heading text-[20px] leading-[26px] font-bold font-black">
                    1
                  </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Call Us With Your Reg &amp; Postcode</h3>
      <p className="text-[15px] leading-[24px] text-white/75">
                    Dial 0800 999 2470. Give our friendly team your vehicle registration and Handforth location. We check exact OEM tyre sizes instantly.
                  </p>
      </div>
      <div className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider">Fast 2-minute booking</div>
      </div>
      {/* Step 2 */}
      <div className="p-6 rounded-2xl bg-primary/60 backdrop-blur-md flex flex-col justify-between space-y-6">
      <div className="space-y-4">
      <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-heading text-[20px] leading-[26px] font-bold font-black">
                    2
                  </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">We Come To Your Driveway With The Right Tyre</h3>
      <p className="text-[15px] leading-[24px] text-white/75">
                    Our technician arrives with the brand, premium or budget tyre you chose, completes wheel mounting, high-speed digital balancing, and new valve installation.
                  </p>
      </div>
      <div className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-wider">Average arrival: 25-40 mins</div>
      </div>
      {/* Step 3 */}
      <div className="p-6 rounded-2xl bg-primary/60 backdrop-blur-md flex flex-col justify-between space-y-6">
      <div className="space-y-4">
      <div className="w-12 h-12 rounded-full bg-primary text-secondary flex items-center justify-center font-heading text-[20px] leading-[26px] font-bold font-black">
                    3
                  </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Drive Away Safely With Clean Invoicing</h3>
      <p className="text-[15px] leading-[24px] text-white/75">
                    Lug nuts are calibrated to exact manufacturer torque specs. Pay securely via mobile card reader and receive a digital receipt instantly.
                  </p>
      </div>
      <div className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider">Contactless &amp; fully insured</div>
      </div>
      </div>
      </div>
      </section>
      {/* REAL LOCAL JOB CARD */}
      <section className="w-full bg-primary/60 py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
      <div className="rounded-2xl bg-primary-dark/80 backdrop-blur-md shadow-xl p-6 sm:p-8">
      <div className="flex items-center gap-2 mb-4">
      <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary">Recent Handforth Callout Log</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div className="relative md:col-span-4">
      <Image src="/gallery-precision-care.webp" alt="Technician fitting tyre on Audi Q3 on Spath Lane driveway" fill sizes="(max-width: 1024px) 100vw, 50vw" className="rounded-xl w-full h-44 object-cover shadow-sm" />
      </div>
      <div className="md:col-span-8 flex flex-col space-y-3">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">
                    Driveway Callout: Spath Lane, Handforth
                  </h3>
      <p className="text-[15px] leading-[24px] text-white/85">
                    Audi Q3 flat front tyre discovered at 7:35 AM right before morning school drop-off. Customer reached our Cheshire dispatch line directly. Our technician arrived on-site in 22 mins. Fitted 235/55 R18 Hankook Ventus S1 evo3. Wheels torqued to spec and TPMS tyre pressures reset before 8:20 AM.
                  </p>
      <div className="flex flex-wrap gap-4 pt-1 text-white/70 text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <span className="flex items-center gap-1">
      <Clock className="h-[14px] w-[14px] text-secondary" />
                      22 Min Arrival
                    </span>
      <span className="flex items-center gap-1">
      <MapPin className="h-[14px] w-[14px] text-secondary" />
                      Spath Lane (SK9)
                    </span>
      <span className="flex items-center gap-1">
      <Disc className="h-[14px] w-[14px] text-secondary" />
                      Hankook 235/55 R18
                    </span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* FAQ SECTION */}
      <section className="w-full bg-primary-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-2">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary">Got Questions?</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white font-bold">Frequently Asked Questions</h2>
      </div>
      <div className="space-y-3">
      <details className="accordion-item rounded-2xl bg-primary/60 backdrop-blur-md overflow-hidden group" id="faq-0"><summary className="accordion-trigger w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer list-none">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Can you fit tyres on narrow residential drives?</span>
      <ChevronDown className="accordion-icon text-white/60 transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="accordion-content px-5 pb-5 pt-1 text-white/85 text-[15px] leading-[24px]">
                  Yes. Our vans are custom Mercedes Sprinters equipped to operate safely in standard UK residential driveways, tight cul-de-sacs, and curbside spaces without obstructing neighbouring properties or requiring oversized turnaround space.
                </div></details>
      <details className="accordion-item rounded-2xl bg-primary/60 backdrop-blur-md overflow-hidden group" id="faq-1"><summary className="accordion-trigger w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer list-none">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">What if I need a replacement right before work?</span>
      <ChevronDown className="accordion-icon text-white/60 transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="accordion-content px-5 pb-5 pt-1 text-white/85 text-[15px] leading-[24px]">
                  We operate 24 hours a day, 7 days a week. If you discover a puncture at 6:30 AM before leaving for the office, call our dispatch immediately. We frequently complete driveway fittings before our customers need to leave.
                </div></details>
      <details className="accordion-item rounded-2xl bg-primary/60 backdrop-blur-md overflow-hidden group" id="faq-2"><summary className="accordion-trigger w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer list-none">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Do you carry child-seat safe premium brands?</span>
      <ChevronDown className="accordion-icon text-white/60 transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="accordion-content px-5 pb-5 pt-1 text-white/85 text-[15px] leading-[24px]">
                  Absolutely. We stock top wet-grip and safety-rated tyre brands including Michelin, Goodyear, Continental, Pirelli, and Bridgestone, as well as dependable mid-range alternatives with stellar stopping distances for family SUVs and city cars.
                </div></details>
      <details className="accordion-item rounded-2xl bg-primary/60 backdrop-blur-md overflow-hidden group" id="faq-3"><summary className="accordion-trigger w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer list-none">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">How does contactless roadside payment work?</span>
      <ChevronDown className="accordion-icon text-white/60 transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="accordion-content px-5 pb-5 pt-1 text-white/85 text-[15px] leading-[24px]">
                  All technicians carry secure Chip &amp; PIN, Apple Pay, and Google Pay card terminals. You only pay once the tyre is fitted, balanced, torqued, and you are 100% satisfied. No cash needed and VAT invoices are emailed on the spot.
                </div></details>
      </div>
      </div>
      </section>
      {/* FINAL CTA SECTION */}
      <section className="w-full bg-primary/60 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
      <div className="relative rounded-2xl bg-primary-dark/90 backdrop-blur-md p-8 sm:p-12 text-center shadow-xl overflow-hidden">
      {/* Subtle Glow Accent */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="relative z-10 flex flex-col items-center space-y-6">
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider">
      <Headphones className="h-4 w-4" />
                  Fast Cheshire Dispatch
                </span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black max-w-xl">
                  Flat Tyre in Handforth? We&apos;ll Come to You
                </h2>
      <p className="text-[18px] leading-[28px] text-white/80 max-w-xl">
                  No towing fees, no waiting rooms. Save your morning and get back on the road in minutes. Call our local team now.
                </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
      <a className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold hover:bg-secondary-hover transition-all duration-200 shadow-md active:scale-95" href="tel:08009992470">
      <PhoneCall className="h-5 w-5" fill="currentColor" strokeWidth={0} />
      <span>Call 0800 999 2470</span>
      </a>
      <a className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-primary/80 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold hover:bg-primary transition-all duration-200 active:scale-95" href="https://wa.me/448009992470">
      <span>Message on WhatsApp</span>
      </a>
      </div>
      <p className="text-[13px] leading-[18px] text-white/60">
                  Available 24/7 • Average 25-40 min arrival across Handforth, Wilmslow &amp; A34 corridor
                </p>
      </div>
      </div>
      </div>
      </section>
      </div>
    </main>
  );
}
