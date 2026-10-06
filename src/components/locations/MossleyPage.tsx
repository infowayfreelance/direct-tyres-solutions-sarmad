import Image from "next/image";
import { Check, MessageCircle, PhoneCall, ShieldCheck, Timer } from "lucide-react";

export default function MossleyPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[88vh] min-h-[640px] flex items-end justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center w-full h-full scale-105 motion-safe:animate-[pulse_10s_ease-in-out_infinite]" style={{ backgroundImage: "url('/hero-section-images-936x527.webp')" }}></div>
      {/* Simple flat bottom-third scrim gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-transparent"></div>
      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-4xl px-4 pb-16 text-center flex flex-col items-center">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/90 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold mb-6 shadow-md backdrop-blur-md">
      <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary animate-ping"></span>
      <span>RAPID RESPONSE TECH ON PATROL IN TAMESIDE &amp; SADDLEWORTH</span>
      </div>
      <h1 className="font-heading text-[36px] leading-[42px] tracking-[-0.01em] font-black md:text-[56px] md:leading-[64px] md:tracking-[-0.02em] md:font-black text-white uppercase mb-4">
              24/7 Mobile Tyre Fitting in <span className="text-secondary">Mossley</span>
            </h1>
      <p className="text-[15px] leading-[24px] md:text-[18px] md:leading-[28px] text-gray-300 max-w-2xl mb-8">
              Stranded on steep Pennine inclines or isolated routes? We deliver roadside tyre replacement across the <strong className="text-white font-semibold">A670 Manchester Road</strong>, high-altitude moorland stretches of the <strong className="text-white font-semibold">A635 Isle of Skye approach</strong>, and throughout rural Mossley. Avoid high-risk flatbed recoveries on narrow hillside passes.
            </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
      <a className="w-full sm:w-auto px-8 py-4 rounded-full bg-secondary hover:bg-secondary-hover text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold transition-all duration-200 transform active:scale-95 shadow-xl flex items-center justify-center gap-3" href="tel:07955266077">
      <PhoneCall className="h-6 w-6" fill="currentColor" strokeWidth={0} />
                Call 07955 266 077
              </a>
      <a className="w-full sm:w-auto px-8 py-4 rounded-full bg-green-500 hover:bg-green-500 text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold transition-all duration-200 transform active:scale-95 shadow-xl flex items-center justify-center gap-3" href="https://wa.me/448009992470?text=I%20need%20emergency%20tyre%20assistance%20in%20Mossley" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="h-6 w-6" />
                WhatsApp Dispatch
              </a>
      </div>
      <div className="mt-8 flex items-center justify-center gap-6 text-gray-400 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <div className="flex items-center gap-1.5">
      <Timer className="text-secondary h-4 w-4" />
      <span>Average arrival 30-45 mins</span>
      </div>
      <div className="flex items-center gap-1.5">
      <ShieldCheck className="text-secondary h-4 w-4" />
      <span>Fully Insured &amp; Certified</span>
      </div>
      </div>
      </div>
      </section>
      {/* 2. LOCAL INTRO */}
      <section className="w-full bg-primary-dark py-20 px-4">
      <div className="max-w-[680px] mx-auto text-center">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary block mb-3">Pennine Hillside Geography</span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white mb-6">
              Engineered for Mossley&apos;s Extreme Moorland Terrain
            </h2>
      <div className="space-y-6 text-gray-300 text-[15px] leading-[24px] md:text-[18px] md:leading-[28px] text-left">
      <p>
                Perched along the steep contours of the upper Tame Valley, Mossley presents treacherous driving conditions unknown to conventional metropolitan fitters. Sudden wet weather fronts off the moors, steep single-track inclines up toward Quick Edge, and rain-slicked cobbles make a sudden puncture far more than an inconvenience—it is a critical safety hazard. Heavy commercial flatbed recovery lorries often cannot access these narrow hillside tracks, leaving stranded drivers waiting hours in hazardous, unlit passing places.
              </p>
      <p>
                Direct Tyre Solutions operates heavy-duty, compact mobile workshop vans purpose-built for the rugged geography of Mossley and the Peak District fringes. Fitted with hydraulic bead breakers, high-precision digital wheel balancers, and pneumatic impact setups, our mobile fitting units navigate the winding hairpin turns of Stamford Road, Stockport Road, and the high-elevation sweeps of the A635 without needing a slow, expensive recovery flatbed.
              </p>
      </div>
      </div>
      </section>
      {/* 3. SERVICES: VERTICAL TIMELINE */}
      <section className="w-full bg-primary py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary block mb-2">Our Capabilities</span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white">
                Dedicated Roadside Mobile Tyre Services
              </h2>
      <p className="text-gray-400 text-[15px] leading-[24px] max-w-xl mx-auto mt-2">
                From high-speed run-flats to standard passenger tyres and commercial van compounds, delivered directly to your breakdown coordinate.
              </p>
      </div>
      {/* Vertical Timeline */}
      <div className="relative">
      {/* Center line */}
      <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-white/10 -translate-x-1/2"></div>
      <div className="space-y-12">
      {/* Timeline Item 1 */}
      <div className="relative flex flex-col md:flex-row items-start md:items-center">
      <div className="md:w-1/2 md:pr-12 pl-14 md:pl-0 text-left md:text-right order-2 md:order-1">
      <span className="text-xs uppercase font-bold tracking-wider text-secondary">Emergency Roadside Fitting</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mt-1">A-Road Blowout Replacements</h3>
      <p className="text-gray-400 text-[15px] leading-[24px] mt-2">
                      Rapid roadside dispatch on the A670 and A635. Hi-vis mobile workshop deployment with full safety perimeter beacons to secure exposed vehicles on high-speed single carriageways.
                    </p>
      </div>
      {/* Center Thumbnail Marker */}
      <div className="relative absolute left-6 md:left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full overflow-hidden shadow-lg shadow-black/40 ring-4 ring-primary">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Emergency roadside response van" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="md:w-1/2 md:pl-12 order-3 hidden md:block">
      <span className="text-xs text-gray-500 font-mono">CODE: EMR-01 // ETA: 35 MINS</span>
      </div>
      </div>
      {/* Timeline Item 2 */}
      <div className="relative flex flex-col md:flex-row items-start md:items-center">
      <div className="md:w-1/2 md:pr-12 hidden md:block text-right order-1">
      <span className="text-xs text-gray-500 font-mono">CODE: PNR-02 // BS AU 159 COMPLIANT</span>
      </div>
      {/* Center Thumbnail Marker */}
      <div className="relative absolute left-6 md:left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full overflow-hidden shadow-lg shadow-black/40 ring-4 ring-primary">
      <Image src="/gallery-roadside-fitting.webp" alt="Tyre tread inspection gauge" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="md:w-1/2 md:pl-12 pl-14 text-left order-2">
      <span className="text-xs uppercase font-bold tracking-wider text-gray-400">Tread Diagnostics</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mt-1">Puncture Repairs &amp; Assessment</h3>
      <p className="text-gray-400 text-[15px] leading-[24px] mt-2">
                      Full physical puncture inspection conforming to British safety regulations. If repairable, we plug and patch on the spot; if compromised, replacement stock is already onboard our van.
                    </p>
      </div>
      </div>
      {/* Timeline Item 3 */}
      <div className="relative flex flex-col md:flex-row items-start md:items-center">
      <div className="md:w-1/2 md:pr-12 pl-14 md:pl-0 text-left md:text-right order-2 md:order-1">
      <span className="text-xs uppercase font-bold tracking-wider text-secondary">Home &amp; Moorland Fitting</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mt-1">Driveway &amp; Rural Property Service</h3>
      <p className="text-gray-400 text-[15px] leading-[24px] mt-2">
                      Stuck on a steep driveway in Bottom Mossley or Top Mossley with a flat? We fit and balance right outside your home without having you risk driving on a deflated rim.
                    </p>
      </div>
      {/* Center Thumbnail Marker */}
      <div className="relative absolute left-6 md:left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full overflow-hidden shadow-lg shadow-black/40 ring-4 ring-primary">
      <Image src="/gallery-home-callout.webp" alt="Technician fitting tyre on driveway" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="md:w-1/2 md:pl-12 order-3 hidden md:block">
      <span className="text-xs text-gray-500 font-mono">CODE: LOC-03 // ZERO DRIVE DAM</span>
      </div>
      </div>
      {/* Timeline Item 4 */}
      <div className="relative flex flex-col md:flex-row items-start md:items-center">
      <div className="md:w-1/2 md:pr-12 hidden md:block text-right order-1">
      <span className="text-xs text-gray-500 font-mono">CODE: FLT-04 // 4X4 &amp; COMMERCIAL SPECS</span>
      </div>
      {/* Center Thumbnail Marker */}
      <div className="relative absolute left-6 md:left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full overflow-hidden shadow-lg shadow-black/40 ring-4 ring-primary">
      <Image src="/gallery-evening-callout.webp" alt="Emergency fleet fitting van" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="md:w-1/2 md:pl-12 pl-14 text-left order-2">
      <span className="text-xs uppercase font-bold tracking-wider text-gray-400">All-Terrain &amp; Run-Flats</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mt-1">4x4, SUV &amp; Commercial Fleets</h3>
      <p className="text-gray-400 text-[15px] leading-[24px] mt-2">
                      Specialist high-load equipment capable of handling reinforced SUV bead profiles, run-flat sidewalls, and light goods delivery vehicles serving remote Pennine homesteads.
                    </p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 4. ROADS & COVERED AREAS */}
      <section className="w-full bg-primary-dark py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/* Text & List Column */}
      <div className="lg:col-span-7 space-y-6">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary block mb-2">Operational Zones</span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white">
                    Covering Mossley, Key Corridors &amp; Neighboring Valley Towns
                  </h2>
      </div>
      <p className="text-gray-300 text-[15px] leading-[24px]">
                  Our strategic positioning near the Tameside and Oldham border allows rapid transit along the A670 valley floor and immediate ascent up the A635. If you are stuck in bad weather on any of these surrounding routes, our vans are already nearby:
                </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
      <div className="flex items-center gap-3 p-3.5 rounded-xl bg-primary/80 border border-white/5">
      <span className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0"></span>
      <div>
      <strong className="text-white block text-sm font-semibold">Stalybridge</strong>
      <span className="text-xs text-gray-400">Ridge Hill, Millbrook &amp; Town Centre</span>
      </div>
      </div>
      <div className="flex items-center gap-3 p-3.5 rounded-xl bg-primary/80 border border-white/5">
      <span className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0"></span>
      <div>
      <strong className="text-white block text-sm font-semibold">Saddleworth</strong>
      <span className="text-xs text-gray-400">Moorland roads &amp; surrounding hamlets</span>
      </div>
      </div>
      <div className="flex items-center gap-3 p-3.5 rounded-xl bg-primary/80 border border-white/5">
      <span className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0"></span>
      <div>
      <strong className="text-white block text-sm font-semibold">Uppermill</strong>
      <span className="text-xs text-gray-400">High Street &amp; residential hills</span>
      </div>
      </div>
      <div className="flex items-center gap-3 p-3.5 rounded-xl bg-primary/80 border border-white/5">
      <span className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0"></span>
      <div>
      <strong className="text-white block text-sm font-semibold">Greenfield</strong>
      <span className="text-xs text-gray-400">Chew Valley Road &amp; Dovestone approaches</span>
      </div>
      </div>
      <div className="flex items-center gap-3 p-3.5 rounded-xl bg-primary/80 border border-white/5 sm:col-span-2">
      <span className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0"></span>
      <div>
      <strong className="text-white block text-sm font-semibold">Ashton-under-Lyne</strong>
      <span className="text-xs text-gray-400">Direct A670 access routes, retail parks, and residential suburbs</span>
      </div>
      </div>
      </div>
      </div>
      {/* Image Panel Column */}
      <div className="lg:col-span-5">
      <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
      <Image src="/gallery-evening-home-visit.webp" alt="Direct Tyre Solutions van deployed on UK roadway" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-80 lg:h-96 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent"></div>
      <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-primary-dark/80 backdrop-blur-md border border-white/10">
      <p className="text-xs text-gray-300 font-mono flex items-center justify-between">
      <span>SECTOR: TAMESIDE &amp; SADDLEWORTH</span>
      <span className="text-secondary font-bold">LIVE DISPATCH ACTIVE</span>
      </p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 5. HOW IT WORKS: UNIFIED DARK CARD */}
      <section className="w-full bg-primary py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary block mb-2">Straightforward Process</span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white">
                Five Simple Steps to Get You Rolling
              </h2>
      </div>
      {/* Unified Dark Card with 5 Steps */}
      <div className="rounded-2xl bg-primary-dark/90 border border-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
      <div className="space-y-8">
      {/* Step 1 */}
      <div className="flex items-start gap-5">
      <div className="w-10 h-10 rounded-full bg-secondary text-primary font-bold flex items-center justify-center shrink-0 text-base shadow-md">
                    1
                  </div>
      <div>
      <h3 className="text-white font-heading text-[20px] leading-[26px] font-bold">Initial Urgent Call or WhatsApp</h3>
      <p className="text-gray-400 text-[15px] leading-[24px] mt-1">
                      Contact our 24/7 direct phone line. Tell us where you are stranded in Mossley or nearby Pennine passes, or send your live WhatsApp pin for immediate geolocation.
                    </p>
      </div>
      </div>
      <div className="w-full h-px bg-white/5"></div>
      {/* Step 2 */}
      <div className="flex items-start gap-5">
      <div className="w-10 h-10 rounded-full bg-secondary text-primary font-bold flex items-center justify-center shrink-0 text-base shadow-md">
                    2
                  </div>
      <div>
      <h3 className="text-white font-heading text-[20px] leading-[26px] font-bold">Registration &amp; Tyre Spec Verification</h3>
      <p className="text-gray-400 text-[15px] leading-[24px] mt-1">
                      We confirm your vehicle reg and check your tyre sidewall dimensions (e.g. 205/55 R16, load rating, run-flat specifications) from our extensive stock inventory.
                    </p>
      </div>
      </div>
      <div className="w-full h-px bg-white/5"></div>
      {/* Step 3 */}
      <div className="flex items-start gap-5">
      <div className="w-10 h-10 rounded-full bg-secondary text-primary font-bold flex items-center justify-center shrink-0 text-base shadow-md">
                    3
                  </div>
      <div>
      <h3 className="text-white font-heading text-[20px] leading-[26px] font-bold">Technician Dispatch with Live ETA</h3>
      <p className="text-gray-400 text-[15px] leading-[24px] mt-1">
                      Our equipped mobile fitting van sets off immediately toward your coordinates, communicating live timing so you aren&apos;t left guessing in poor weather.
                    </p>
      </div>
      </div>
      <div className="w-full h-px bg-white/5"></div>
      {/* Step 4 */}
      <div className="flex items-start gap-5">
      <div className="w-10 h-10 rounded-full bg-secondary text-primary font-bold flex items-center justify-center shrink-0 text-base shadow-md">
                    4
                  </div>
      <div>
      <h3 className="text-white font-heading text-[20px] leading-[26px] font-bold">Precision Roadside Tyre Installation</h3>
      <p className="text-gray-400 text-[15px] leading-[24px] mt-1">
                      We remove the wheel, fit a new valve, mount and dynamically balance the tyre, and torque wheel nuts to exact manufacturer ratings with calibrated tools.
                    </p>
      </div>
      </div>
      <div className="w-full h-px bg-white/5"></div>
      {/* Step 5 */}
      <div className="flex items-start gap-5">
      <div className="w-10 h-10 rounded-full bg-secondary text-primary font-bold flex items-center justify-center shrink-0 text-base shadow-md">
                    5
                  </div>
      <div>
      <h3 className="text-white font-heading text-[20px] leading-[26px] font-bold">Contactless Payment &amp; Safe Journey</h3>
      <p className="text-gray-400 text-[15px] leading-[24px] mt-1">
                      Settle up on the spot using debit/credit card or contactless on our secure handheld chip &amp; pin terminal, receipt emailed instantly, and drive off safely.
                    </p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 6. REAL LOCAL JOB SHOWCASE */}
      <section className="w-full bg-primary-dark py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary block mb-2">Verified Callout</span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white">
                Recent Emergency Response in Mossley
              </h2>
      </div>
      {/* Job Card with Image Thumbnail */}
      <div className="rounded-2xl bg-primary/80 border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 shadow-2xl backdrop-blur-md">
      {/* Thumbnail */}
      <div className="w-full md:w-56 h-48 rounded-xl overflow-hidden shrink-0 border border-white/10 relative">
      <Image src="/gallery-precision-care.webp" alt="Subaru Outback tyre replacement by mobile technician" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 text-xs font-mono text-secondary">
                  CASE #MS-942
                </div>
      </div>
      {/* Details */}
      <div className="flex-1 space-y-3">
      <div className="flex flex-wrap items-center gap-2">
      <span className="px-2.5 py-1 rounded-full bg-accent text-primary-dark font-bold text-xs">
                    A635 Moorland Route
                  </span>
      <span className="px-2.5 py-1 rounded-full bg-secondary/20 text-secondary font-semibold text-xs border border-secondary/30">
                    Completed in 34 mins
                  </span>
      </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">
                  Subaru Outback — A635 Manchester Road, Mossley
                </h3>
      <p className="text-gray-300 text-[15px] leading-[24px]">
                  Sharp stone sidewall puncture suffered in heavy evening rain on the ascent toward Saddleworth Moor. Fitted and dynamically torqued a replacement <strong className="text-white font-semibold">225/60 R17</strong> all-season tyre in 34 minutes, eliminating the requirement for a hazardous incline recovery.
                </p>
      <div className="flex items-center gap-4 pt-1 text-xs text-gray-400 font-mono">
      <span>DISPATCH: MOSSLEY DEPOT</span>
      <span>PRESSURE: 33 PSI VERIFIED</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 7. FAQ CHECKLIST-STYLE */}
      <section className="w-full bg-primary py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
      <div className="text-center mb-14">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary block mb-2">Got Questions?</span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white">
                Mossley Callout FAQs
              </h2>
      </div>
      <div className="space-y-4">
      {/* FAQ 1 */}
      <div className="rounded-2xl bg-primary-dark/80 border border-white/10 p-6 flex items-start gap-4">
      <div className="w-8 h-8 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center shrink-0 mt-0.5">
      <Check className="text-secondary h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
      </div>
      <div>
      <h3 className="text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold mb-1.5">How fast can you arrive at an emergency on the A635 or A670?</h3>
      <p className="text-gray-400 text-[15px] leading-[24px]">
                    Our average arrival time across Mossley, Stalybridge, and Saddleworth sits at 30 to 45 minutes, depending on your precise elevation and weather conditions. We prioritize live roadway hazards.
                  </p>
      </div>
      </div>
      {/* FAQ 2 */}
      <div className="rounded-2xl bg-primary-dark/80 border border-white/10 p-6 flex items-start gap-4">
      <div className="w-8 h-8 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center shrink-0 mt-0.5">
      <Check className="text-secondary h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
      </div>
      <div>
      <h3 className="text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold mb-1.5">Can your vans safely operate on steep hills like Quick Edge or Stamford Road?</h3>
      <p className="text-gray-400 text-[15px] leading-[24px]">
                    Yes. Our mobile fitting fleet uses compact commercial chassis equipped with heavy-duty mechanical wheel chocks and precision low-profile hydraulic jacking systems specifically rated for uneven and high-gradient roads.
                  </p>
      </div>
      </div>
      {/* FAQ 3 */}
      <div className="rounded-2xl bg-primary-dark/80 border border-white/10 p-6 flex items-start gap-4">
      <div className="w-8 h-8 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center shrink-0 mt-0.5">
      <Check className="text-secondary h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
      </div>
      <div>
      <h3 className="text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold mb-1.5">What if I don&apos;t know my exact tyre size while stranded in the dark?</h3>
      <p className="text-gray-400 text-[15px] leading-[24px]">
                    Simply provide your vehicle registration number when you call. Our dispatch system queries DVLA vehicle databases instantly. We will bring the confirmed factory size and load rating directly to you.
                  </p>
      </div>
      </div>
      {/* FAQ 4 */}
      <div className="rounded-2xl bg-primary-dark/80 border border-white/10 p-6 flex items-start gap-4">
      <div className="w-8 h-8 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center shrink-0 mt-0.5">
      <Check className="text-secondary h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
      </div>
      <div>
      <h3 className="text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold mb-1.5">Are you operational 24/7 on weekends and bank holidays?</h3>
      <p className="text-gray-400 text-[15px] leading-[24px]">
                    Direct Tyre Solutions operates round-the-clock, 365 days a year. Tyres do not puncture on a schedule, and our phone lines are staffed 24 hours a day by local British dispatch coordinators.
                  </p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 8. FINAL CTA PANEL */}
      <section className="w-full bg-primary-dark py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-primary to-primary-dark border border-white/10 p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
      {/* Decorative radial glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="relative z-10">
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider mb-6 border border-secondary/30">
      <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                24/7 Rapid Mobile Dispatch
              </span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white max-w-xl mx-auto mb-4">
                Stuck with a Flat Tyre in Mossley Right Now?
              </h2>
      <p className="text-gray-300 text-[15px] leading-[24px] md:text-[18px] md:leading-[28px] max-w-xl mx-auto mb-8">
                Do not risk rim damage or wait hours for a towing truck. Call our dedicated Mossley mobile dispatch unit for immediate roadside assistance.
              </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a className="w-full sm:w-auto px-10 py-5 rounded-full bg-secondary hover:bg-secondary-hover text-primary font-heading text-[20px] leading-[26px] font-bold transition-all duration-200 transform active:scale-95 shadow-2xl flex items-center justify-center gap-3 font-bold" href="tel:07955266077">
      <PhoneCall className="h-6 w-6" fill="currentColor" strokeWidth={0} />
                  Call 07955 266 077
                </a>
      <a className="w-full sm:w-auto px-8 py-5 rounded-full bg-primary hover:bg-primary-light text-white border border-white/20 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold transition-all duration-200 transform active:scale-95 flex items-center justify-center gap-3" href="https://wa.me/448009992470?text=I%20need%20emergency%20tyre%20fitting%20in%20Mossley" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="h-5 w-5" />
                  Message WhatsApp
                </a>
      </div>
      <p className="mt-8 text-xs font-mono text-gray-500 uppercase tracking-widest">
                DIRECT TYRE SOLUTIONS // MOSSLEY &amp; DISTRICT RAPID ROADSIDE CREW
              </p>
      </div>
      </div>
      </section>
    </main>
  );
}
