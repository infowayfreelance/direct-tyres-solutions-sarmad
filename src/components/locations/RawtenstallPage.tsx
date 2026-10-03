import Image from "next/image";
import { Check, Clock, MapPin, MessageCircle, Navigation, PhoneCall, ShieldCheck, Siren, Truck, Zap } from "lucide-react";

export default function RawtenstallPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* 1. HERO SECTION: Full-Bleed Rural Photo Hero */}
      <section className="relative w-full min-h-[620px] md:min-h-[700px] flex items-end justify-center overflow-hidden bg-primary-dark" data-alt="A brightly lit emergency mobile tyre fitting van stationed at dusk on a wet rural bypass verge in the rolling hills of Rossendale Valley Lancashire with reflective chevrons and service lighting under deep twilight navy storm clouds" style={{ backgroundImage: "url('/gallery-precision-care.webp')", backgroundSize: "cover", backgroundPosition: "center" }}>
      {/* Clean flat bottom-third gradient scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/85 to-transparent"></div>
      <div className="relative z-10 w-full max-w-5xl px-space-md md:px-margin pb-16 pt-32 text-center flex flex-col items-center">
      {/* Location & Service Chip */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/80 text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
      <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              Rossendale Valley • 24/7 Mobile Response
            </div>
      <h1 className="font-heading text-[36px] leading-[42px] tracking-[-0.01em] font-black md:text-[56px] md:leading-[64px] md:tracking-[-0.02em] md:font-black text-white max-w-4xl leading-none mb-6">
              24/7 Mobile Tyre Fitting in Rawtenstall
            </h1>
      <p className="text-[15px] leading-[24px] md:text-[18px] md:leading-[28px] text-gray-400 max-w-2xl mx-auto mb-8">
              24-hour emergency roadside and rural driveway tyre replacement across Rossendale Valley, A56 Haslingden Bypass, A682, and steep Pennine corridors.
            </p>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-secondary text-primary-dark font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider hover:bg-secondary-hover transition-transform active:scale-95 shadow-lg" href="tel:07955266077">
      <PhoneCall className="h-5 w-5" />
                Call 07955 266 077
              </a>
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary/80 backdrop-blur-md text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold hover:bg-primary-light transition-colors shadow-sm" href="https://wa.me/448009992470">
      <MessageCircle className="h-5 w-5 text-secondary" />
                WhatsApp Dispatch
              </a>
      </div>
      {/* Quick Status Badges */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-400 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <span className="inline-flex items-center gap-1.5">
      <Zap className="h-4 w-4 text-secondary" />
                Avg. 25–40 min on-site
              </span>
      <span className="inline-flex items-center gap-1.5">
      <ShieldCheck className="h-4 w-4 text-secondary" />
                Fully Equipped Mobile Vans
              </span>
      <span className="inline-flex items-center gap-1.5">
      <MapPin className="h-4 w-4 text-secondary" />
                Covering BB4 Postcodes
              </span>
      </div>
      </div>
      </section>
      {/* 2. LOCAL INTRO: Rossendale Valley Focus */}
      <section className="w-full bg-primary-dark py-space-xl px-space-md md:px-margin">
      <div className="max-w-[680px] mx-auto text-center flex flex-col items-center">
      <div className="w-12 h-1 bg-secondary rounded-full mb-6"></div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider mb-2">Locally Stationed Technicians</span>
      <h2 className="font-heading text-[22px] leading-[28px] font-bold md:text-[30px] md:leading-[38px] md:font-bold text-white mb-6">
              Stranded on Steep Valley Inclines or High-Speed Dual Carriageways?
            </h2>
      <p className="text-[15px] leading-[24px] text-gray-400 text-left sm:text-center mb-6">
              Rossendale’s demanding topography combines narrow rural ascents, notoriously wet Pennine road surfaces, and high-velocity dual carriageways like the A56 bypass. When severe pothole impact punctures a tyre on an unlit single-track lane near Edenfield or tears a sidewall in heavy rain near Bacup, conventional garages cannot help.
            </p>
      <p className="text-[15px] leading-[24px] text-white text-left sm:text-center">
              Direct Tyre Solutions operates dedicated heavy-duty fitting units fully equipped with pneumatic bead breakers, high-precision digital balancers, and a comprehensive mobile stock of premium, mid-range, and winter-rated tyres straight to your exact GPS pin.
            </p>
      </div>
      </section>
      {/* 3. SERVICES: Vertical Timeline with Real Image Markers */}
      <section className="w-full bg-primary-dark py-space-xl px-space-md md:px-margin">
      <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider">Operational Capabilities</span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white mt-2">
                Specialist Mobile Tyre Solutions
              </h2>
      </div>
      {/* Timeline Container */}
      <div className="relative flex flex-col gap-12 before:absolute before:inset-0 before:left-6 md:before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-primary">
      {/* Timeline Item 1 */}
      <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 group">
      <div className="md:w-1/2 flex md:justify-end order-2 md:order-1 pl-14 md:pl-0 md:pr-10">
      <div className="bg-primary/60 p-space-lg rounded-2xl shadow-md w-full max-w-md">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase">Fast Lane Response</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mt-1 mb-2">Emergency Highway Replacement</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Rapid roadside deployment tailored for high-speed corridors along the A56 bypass and A682. Fitted on emergency laybys or highway verges safely under high-visibility warning systems.</p>
      </div>
      </div>
      {/* Real Image Marker */}
      <div className="relative absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden shadow-lg bg-primary flex-shrink-0">
      <Image src="/hero-section-images-936x527.webp" alt="A commercial mobile tyre service van parked on the side of a busy dual carriageway at dusk with bright amber warning beacons flashing and technician replacing wheel" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="hidden md:block md:w-1/2 order-3 pl-10">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-gray-400">A56 &amp; A682 Priority Coverage</span>
      </div>
      </div>
      {/* Timeline Item 2 */}
      <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 group">
      <div className="hidden md:flex md:w-1/2 justify-end order-1 pr-10">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-gray-400">British Standard Safety Compliance</span>
      </div>
      {/* Real Image Marker */}
      <div className="relative absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden shadow-lg bg-primary flex-shrink-0">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Technician measuring tyre tread depth with precision automotive inspection gauge" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="md:w-1/2 order-2 pl-14 md:pl-10">
      <div className="bg-primary/60 p-space-lg rounded-2xl shadow-md w-full max-w-md">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase">Safe &amp; Economical</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mt-1 mb-2">BS AU 159 Puncture Remediation</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Whenever tread conditions permit, our technician performs an internal mushroom-plug repair adhering strictly to British Standard BS AU 159, saving you from the cost of premature tyre replacement.</p>
      </div>
      </div>
      </div>
      {/* Timeline Item 3 */}
      <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 group">
      <div className="md:w-1/2 flex md:justify-end order-2 md:order-1 pl-14 md:pl-0 md:pr-10">
      <div className="bg-primary/60 p-space-lg rounded-2xl shadow-md w-full max-w-md">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase">Zero Damage Assurance</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mt-1 mb-2">Locking Wheel Nut Removal</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Rounded, over-torqued, or missing security keys? Our vans carry heavy-duty inverse extraction tooling designed to extract locked studs cleanly without damaging expensive alloy wheel finishes.</p>
      </div>
      </div>
      {/* Real Image Marker */}
      <div className="relative absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden shadow-lg bg-primary flex-shrink-0">
      <Image src="/gallery-roadside-fitting.webp" alt="Automotive specialist using a cordless impact wrench and precision extraction socket on an alloy wheel nut outside a residence" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="hidden md:block md:w-1/2 order-3 pl-10">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-gray-400">Specialist Inverse Extraction</span>
      </div>
      </div>
      {/* Timeline Item 4 */}
      <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 group">
      <div className="hidden md:flex md:w-1/2 justify-end order-1 pr-10">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-gray-400">Cold Climate &amp; 4x4 Readiness</span>
      </div>
      {/* Real Image Marker */}
      <div className="relative absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden shadow-lg bg-primary flex-shrink-0">
      <Image src="/gallery-home-callout.webp" alt="Close up of aggressive tread sipes on all-season and winter rated tyres arranged in an emergency mobile maintenance van" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="md:w-1/2 order-2 pl-14 md:pl-10">
      <div className="bg-primary/60 p-space-lg rounded-2xl shadow-md w-full max-w-md">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase">Valley &amp; Moorland Driving</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mt-1 mb-2">All-Season &amp; Winter Pennine Tyres</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Navigate steep Lancashire gradients safely through freeze and mud. We carry 3PMSF-certified all-season and dedicated cold-weather stock for cars, SUVs, and commercial light goods vehicles.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 4. ROADS & SERVICE AREAS: Side-by-Side with Action Photo */}
      <section className="w-full bg-primary-dark py-space-xl px-space-md md:px-margin">
      <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/* Left: Image representation */}
      <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-xl bg-primary/60 relative aspect-[4/3]">
      <Image src="/gallery-evening-callout.webp" alt="A fully equipped emergency mobile tyre fitting van with open rear cargo doors showing mounted tyres air compressor and balancing rig parked safely on a roadside in East Lancashire" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent"></div>
      <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-primary-dark/90 backdrop-blur-md">
      <div className="flex items-center gap-2 text-secondary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">
      <Truck className="h-[18px] w-[18px]" />
                    Rossendale Area Vans
                  </div>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">Operating round the clock throughout the BB4 postal code network.</p>
      </div>
      </div>
      {/* Right: Road Arterials & Nearby Towns */}
      <div className="lg:col-span-7 flex flex-col justify-center">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider mb-2">Local Dispatch Coverage</span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white mb-4">
                  Serving Rawtenstall &amp; Surrounding Rossendale Towns
                </h2>
      <p className="text-[15px] leading-[24px] text-gray-400 mb-6">
                  Our roaming units are permanently positioned near junction corridors to maintain an aggressive 30-minute average emergency dispatch time across all main routes and valley villages:
                </p>
      {/* Key Arterials Pill Grid */}
      <div className="mb-6">
      <h4 className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white uppercase mb-3">Key Highway Corridors Covered</h4>
      <div className="flex flex-wrap gap-2">
      <div className="px-4 py-2 rounded-full bg-primary/80 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-accent"></span>
      <strong>A56</strong> Haslingden Bypass &amp; Edenfield Link
                    </div>
      <div className="px-4 py-2 rounded-full bg-primary/80 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-accent"></span>
      <strong>A682</strong> Burnley Road Corridor
                    </div>
      <div className="px-4 py-2 rounded-full bg-primary/80 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-accent"></span>
      <strong>A681</strong> Bacup Road
                    </div>
      </div>
      </div>
      {/* Nearby Towns */}
      <div>
      <h4 className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white uppercase mb-3">Local Communities &amp; Suburbs</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      <div className="p-3 rounded-xl bg-primary-dark flex items-center gap-2">
      <Navigation className="text-secondary h-4 w-4" />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Haslingden</span>
      </div>
      <div className="p-3 rounded-xl bg-primary-dark flex items-center gap-2">
      <Navigation className="text-secondary h-4 w-4" />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Ramsbottom</span>
      </div>
      <div className="p-3 rounded-xl bg-primary-dark flex items-center gap-2">
      <Navigation className="text-secondary h-4 w-4" />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Bacup</span>
      </div>
      <div className="p-3 rounded-xl bg-primary-dark flex items-center gap-2">
      <Navigation className="text-secondary h-4 w-4" />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Waterfoot</span>
      </div>
      <div className="p-3 rounded-xl bg-primary-dark flex items-center gap-2">
      <Navigation className="text-secondary h-4 w-4" />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Edenfield</span>
      </div>
      <div className="p-3 rounded-xl bg-primary-dark flex items-center gap-2">
      <Navigation className="text-secondary h-4 w-4" />
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Crawshawbooth</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 5. HOW IT WORKS: Numbered List Inside One Neat Card */}
      <section className="w-full bg-primary-dark py-space-xl px-space-md md:px-margin">
      <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider">Fast &amp; Direct Process</span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white mt-2">
                How Our Rawtenstall Dispatch Works
              </h2>
      </div>
      <div className="rounded-2xl bg-primary/60 p-6 sm:p-10 shadow-xl">
      <div className="flex flex-col divide-y divide-primary">
      {/* Step 01 */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-5 first:pt-0 gap-4">
      <div className="flex items-start sm:items-center gap-4">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary leading-none opacity-90">01</span>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Contact Dispatch</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Call our 24/7 hotline or message via WhatsApp with your location or breakdown marker.</p>
      </div>
      </div>
      <span className="px-3 py-1 rounded-full bg-primary/80 text-xs text-gray-400 whitespace-nowrap self-start sm:self-center">Instant Call Handler</span>
      </div>
      {/* Step 02 */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-5 gap-4">
      <div className="flex items-start sm:items-center gap-4">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary leading-none opacity-90">02</span>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Tyre Match &amp; Fixed Quote</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">We match your registration and tyre dimensions and confirm an all-inclusive, fixed price upfront.</p>
      </div>
      </div>
      <span className="px-3 py-1 rounded-full bg-primary/80 text-xs text-gray-400 whitespace-nowrap self-start sm:self-center">No Hidden Surcharges</span>
      </div>
      {/* Step 03 */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-5 gap-4">
      <div className="flex items-start sm:items-center gap-4">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary leading-none opacity-90">03</span>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Van Dispatched</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">The nearest Rossendale response unit is routed directly to your car with live ETA tracking.</p>
      </div>
      </div>
      <span className="px-3 py-1 rounded-full bg-primary/80 text-xs text-gray-400 whitespace-nowrap self-start sm:self-center">Live GPS Updates</span>
      </div>
      {/* Step 04 */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-5 gap-4">
      <div className="flex items-start sm:items-center gap-4">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary leading-none opacity-90">04</span>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Digital Torque Mounting</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Precision fitting, computer dynamic wheel balancing, and calibration to factory torque settings.</p>
      </div>
      </div>
      <span className="px-3 py-1 rounded-full bg-primary/80 text-xs text-gray-400 whitespace-nowrap self-start sm:self-center">Manufacturer Specs</span>
      </div>
      {/* Step 05 */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-5 last:pb-0 gap-4">
      <div className="flex items-start sm:items-center gap-4">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary leading-none opacity-90">05</span>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Contactless Payment</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Pay safely at the roadside via debit/credit card or Apple/Google Pay only when you are satisfied.</p>
      </div>
      </div>
      <span className="px-3 py-1 rounded-full bg-primary/80 text-xs text-gray-400 whitespace-nowrap self-start sm:self-center">Card / Apple Pay</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 6. REAL JOB CARD: Recent Intervention Log */}
      <section className="w-full bg-primary-dark py-space-xl px-space-md md:px-margin">
      <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider">Field Operations Audit</span>
      <h2 className="font-heading text-[22px] leading-[28px] font-bold md:text-[30px] md:leading-[38px] md:font-bold text-white mt-1">
                Recent Intervention in Rawtenstall
              </h2>
      </div>
      <div className="rounded-2xl bg-primary/60 overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-12">
      {/* Photo Side */}
      <div className="md:col-span-5 relative min-h-[240px] md:min-h-full">
      <Image src="/gallery-evening-home-visit.webp" alt="Automotive roadside breakdown technician fitting a replacement tyre on a modern passenger car on an asphalt road refuge shoulder with emergency triangles deployed" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute top-3 left-3 bg-accent text-white px-3 py-1 rounded-full text-[11px] leading-[14px] tracking-[0.06em] font-bold font-bold flex items-center gap-1.5 shadow">
      <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Verified Job Log
                </div>
      </div>
      {/* Details Side */}
      <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
      <div>
      <div className="flex items-center justify-between mb-4">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary">Log #RT-1190</span>
      <span className="text-gray-400 text-xs flex items-center gap-1">
      <Clock className="h-[14px] w-[14px] text-secondary" />
                      29 Mins Response
                    </span>
      </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-2">
                    A56 Haslingden Bypass Approach
                  </h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mb-6">
                    Stranded family vehicle suffering catastrophic sidewall pinch flat following impact with sharp debris on the southbound slipway toward Edenfield during torrential rain.
                  </p>
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary/60">
      <div>
      <span className="text-xs uppercase text-gray-400 tracking-wider font-semibold block mb-0.5">Vehicle</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Nissan Qashqai</span>
      </div>
      <div>
      <span className="text-xs uppercase text-gray-400 tracking-wider font-semibold block mb-0.5">Tyre Specification</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">215/55 R18 99V XL</span>
      </div>
      <div>
      <span className="text-xs uppercase text-gray-400 tracking-wider font-semibold block mb-0.5">Outcome</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary">Refuge Shoulder Fitted</span>
      </div>
      <div>
      <span className="text-xs uppercase text-gray-400 tracking-wider font-semibold block mb-0.5">Safety Check</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Torqued to 112 Nm</span>
      </div>
      </div>
      </div>
      <div className="mt-6 pt-4 flex items-center justify-between text-xs text-gray-400">
      <span>Dispatched from: Haslingden Hub</span>
      <span className="text-secondary flex items-center gap-1 font-semibold">
      <ShieldCheck className="h-[14px] w-[14px]" /> Motorist safely back on route
                  </span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 7. FAQ: Checklist-Style Section */}
      <section className="w-full bg-primary-dark py-space-xl px-space-md md:px-margin">
      <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider">Rawtenstall Assistance Help</span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white mt-2">
                Frequently Asked Questions
              </h2>
      </div>
      <div className="flex flex-col gap-4">
      {/* FAQ 1 */}
      <div className="bg-primary/60 p-5 rounded-2xl flex items-start gap-4">
      <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
      <Check className="h-4 w-4 text-white" />
      </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">
                    Can your mobile service reach remote rural lanes or steep Rossendale tracks?
                  </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    Yes. Our fleet vans are specifically adapted with high-traction commercial equipment and heavy-duty onboard generators, allowing us to safely service vehicles on farm lanes, rural single tracks, residential driveways, and unpaved verges across Bacup, Edenfield, and Waterfoot.
                  </p>
      </div>
      </div>
      {/* FAQ 2 */}
      <div className="bg-primary/60 p-5 rounded-2xl flex items-start gap-4">
      <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
      <Check className="h-4 w-4 text-white" />
      </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">
                    Do you carry winter and all-season tyres suitable for Pennine weather?
                  </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    We maintain stock of severe-snow rated 3PMSF all-season tyres and dedicated winter compounds from Michelin, Continental, Bridgestone, and budget manufacturers, ensuring reliable traction on freezing valley ascents.
                  </p>
      </div>
      </div>
      {/* FAQ 3 */}
      <div className="bg-primary/60 p-5 rounded-2xl flex items-start gap-4">
      <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
      <Check className="h-4 w-4 text-white" />
      </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">
                    Are you operational late at night and during bank holidays?
                  </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    Yes, Direct Tyre Solutions operates true 24 hours a day, 365 days a year. Our emergency dispatch operators and mobile technicians work around the clock, including weekends and early morning bank holiday shifts.
                  </p>
      </div>
      </div>
      {/* FAQ 4 */}
      <div className="bg-primary/60 p-5 rounded-2xl flex items-start gap-4">
      <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
      <Check className="h-4 w-4 text-white" />
      </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">
                    What payment methods do your roadside technicians accept?
                  </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    Our technicians carry secure, encrypted contactless mobile payment terminals that support all major credit cards, debit cards, Apple Pay, Google Pay, and fleet account cards. Payment is taken strictly after work completion.
                  </p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 8. FINAL CTA: Prominent Gold Pill & Availability Assurance */}
      <section className="w-full bg-primary-dark py-space-xl px-space-md md:px-margin text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-6 shadow-sm">
      <Siren className="h-[30px] w-[30px]" />
      </div>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white mb-4">
              Need Emergency Tyre Fitting in Rawtenstall Right Now?
            </h2>
      <p className="text-[15px] leading-[24px] md:text-[18px] md:leading-[28px] text-gray-400 mb-8 max-w-xl">
              Speak directly with our local Rossendale dispatch controller. We will confirm tyre availability and provide an immediate fixed arrival time.
            </p>
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-secondary text-primary-dark font-heading text-[20px] leading-[26px] font-bold uppercase tracking-wider hover:bg-secondary-hover transition-transform active:scale-95 shadow-2xl" href="tel:07955266077">
      <PhoneCall className="h-6 w-6" />
              Call 07955 266 077 Now
            </a>
      <div className="mt-6 flex items-center gap-2 text-gray-400 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-ping"></span>
      <span>24/7 Rapid Response Active Across Rossendale &amp; Lancashire</span>
      </div>
      </div>
      </section>
    </main>
  );
}
