import Image from "next/image";
import { CheckCircle2, ChevronDown, CreditCard, Headphones, MapPin, MessageCircle, PhoneCall, ShieldCheck } from "lucide-react";

export default function HalifaxPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      <div className="flex flex-col w-full">
      {/* 1. HERO: TALL EDITORIAL VERTICAL STORY HERO */}
      <section className="relative w-full bg-primary-dark overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20 min-h-[850px] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full items-stretch">
      {/* Left Column: Giant Stacked Typography & Emergency Dispatch CTAs */}
      <div className="lg:col-span-7 flex flex-col justify-between z-10 space-y-8">
      <div>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-gray-400 border border-accent/30 mb-6 shadow-sm">
      <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary animate-ping"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-white">Calderdale Rapid Response Dispatch • 25-45 Min Avg</span>
      </div>
      <h1 className="font-heading text-[56px] leading-[64px] tracking-[-0.02em] font-black uppercase tracking-tighter text-white leading-[0.88] select-none flex flex-col">
      <span className="text-secondary drop-shadow-sm">24/7</span>
      <span>MOBILE</span>
      <span className="text-gray-400">TYRE</span>
      <span>FITTING</span>
      <span className="text-accent">HALIFAX</span>
      </h1>
      <p className="text-[18px] leading-[28px] text-gray-300 mt-6 max-w-xl">
                    Roadside punctures on Godley Cutting, steep residential driveways in Skircoat Green, or retail park blowouts in Broad Street Plaza. We bring the heavy-duty workshop direct to your wheel in Calderdale.
                  </p>
      </div>
      {/* Quick Action Buttons & Status */}
      <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
      <a className="group inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-secondary hover:bg-secondary-hover text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold transition-all duration-200 transform active:scale-95 shadow-xl shadow-primary-container/10" href="tel:08009992470">
      <PhoneCall className="text-primary group-hover:rotate-12 transition-transform h-5 w-5" />
      <span>CALL DISPATCH 0800 999 2470</span>
      </a>
      <a className="inline-flex items-center justify-center gap-2 px-6 py-5 rounded-full bg-primary/80 hover:bg-primary text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-colors" href="https://wa.me/448009992470" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="text-secondary h-5 w-5" />
      <span>Send WhatsApp Location</span>
      </a>
      </div>
      {/* Bottom Micro Metrics Strip */}
      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 text-left">
      <div>
      <div className="font-heading text-[20px] leading-[26px] font-bold text-secondary">30–45m</div>
      <div className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Arrival Window</div>
      </div>
      <div>
      <div className="font-heading text-[20px] leading-[26px] font-bold text-accent">M62 J24/J25</div>
      <div className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Corridor Coverage</div>
      </div>
      <div>
      <div className="font-heading text-[20px] leading-[26px] font-bold text-white">All Sizes</div>
      <div className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">13&quot; to 23&quot; In Stock</div>
      </div>
      </div>
      </div>
      {/* Right Column: Tall Portrait Image Bleed with Technical Badge */}
      <div className="lg:col-span-5 relative min-h-[500px] lg:min-h-full rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-end bg-primary/60">
      <Image src="/hero-section-images-936x527.webp" alt="Close up portrait photograph of professional mobile tyre technician kneeling beside customer car wheel fitting fresh tread with pneumatic impact wrench in rain, high vis jacket with industrial dark navy background" fill sizes="(max-width: 1024px) 100vw, 50vw" className="absolute inset-0 w-full h-full object-cover object-center mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 opacity-90 scale-105 hover:scale-100" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent"></div>
      {/* Floating Emergency In-Van Spec Card */}
      <div className="relative z-10 m-6 p-6 rounded-2xl bg-primary-dark/85 backdrop-blur-md border border-white/10 shadow-2xl">
      <div className="flex items-center justify-between mb-3">
      <span className="px-2.5 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">LIVE FEED</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary flex items-center gap-1">
      <MapPin className="h-[16px] w-[16px]" />
                      HX1 / Halifax Hub
                    </span>
      </div>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Calderdale Van #04 Standing By</p>
      <p className="text-[13px] leading-[18px] text-gray-400">Equipped with heavy hydraulic jacks for steep 1:4 Calderdale gradients and laser electronic balancers.</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 2. LOCAL CALDERDALE INTRO: STEEP ROADS & VALLEY GEOGRAPHY */}
      <section className="w-full bg-primary-dark py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-5">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-widest block mb-2">Engineered For The Hills</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white uppercase">
                  Tackling Calderdale’s Steepest Incline Breakdowns.
                </h2>
      </div>
      <div className="lg:col-span-7">
      <p className="text-[18px] leading-[28px] text-gray-300 mb-4">
                  Halifax is notoriously unforgiving on passenger tyres and suspension. From the sheer gradients of the <strong>A58 Godley Cutting</strong> and the twisty bottleneck at <strong>Salterhebble Hill</strong>, to slick wet stone setts along the historic <strong>Burdall Viaduct</strong> routes, roadside tyre failures present real hazards.
                </p>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Standard recovery trucks cannot easily load stranded vehicles on 15% valley inclines. Our custom Mercedes Sprinter mobile fitting workshops carry twin pneumatic heavy-duty locking jacks, run-flat bead blasters, and digital alignment systems capable of completing secure, level fittings safely curbside anywhere in Calderdale.
                </p>
      </div>
      </div>
      </div>
      </section>
      {/* 3. SERVICES: VERTICAL STORY STACK */}
      <section className="w-full bg-primary-dark py-16 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-14 max-w-2xl">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-widest">Rapid Mobile Operations</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white uppercase mt-1">Full Mobile Tyre Services</h2>
      </div>
      <div className="flex flex-col space-y-12">
      {/* Story Card 1: Photo Left */}
      <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl bg-primary/60 overflow-hidden shadow-xl border border-white/10 group">
      <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[420px] overflow-hidden">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Emergency roadside mobile fitting van on UK highway hard shoulder" fill sizes="(max-width: 1024px) 100vw, 50vw" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent lg:hidden"></div>
      </div>
      <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center">
      <div className="inline-flex items-center gap-2 mb-3">
      <span className="px-3 py-1 rounded-full bg-secondary text-primary text-[11px] leading-[14px] tracking-[0.06em] font-bold">SERVICE 01</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-300">HIGHWAY &amp; FAST-A ROADS</span>
      </div>
      <h3 className="font-heading text-[30px] leading-[38px] font-bold text-white uppercase mb-4">Emergency Roadside Replacement</h3>
      <p className="text-[15px] leading-[24px] text-gray-400 mb-6">
                    Stranded on the A58, A629 Calderdale Way, or caught off Junction 24 of the M62? Our rapid emergency response vans are equipped with high-intensity chapter 8 beacon safety arrays to protect you while our technicians demount, fit, and electronically balance your new tyre in sub-30 minutes.
                  </p>
      <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
      <CheckCircle2 className="text-secondary h-5 w-5" />
      <span className="text-[13px] leading-[18px] text-white">Highway Approved</span>
      </div>
      <div className="flex items-center gap-2">
      <CheckCircle2 className="text-secondary h-5 w-5" />
      <span className="text-[13px] leading-[18px] text-white">Run-Flat Capable</span>
      </div>
      </div>
      </div>
      </div>
      {/* Story Card 2: Photo Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl bg-primary/60 overflow-hidden shadow-xl border border-white/10 group">
      <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
      <div className="inline-flex items-center gap-2 mb-3">
      <span className="px-3 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">SERVICE 02</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-300">HOME &amp; WORKPLACE FITTING</span>
      </div>
      <h3 className="font-heading text-[30px] leading-[38px] font-bold text-white uppercase mb-4">Residential &amp; Fleet Driveway Fitting</h3>
      <p className="text-[15px] leading-[24px] text-gray-400 mb-6">
                    Skip the long queues at static garage depots. Whether parked at your home in Savile Park, working at Dean Clough Mills, or managing a courier fleet near Eureka! The National Children&apos;s Museum, we swap out tyres while you carry on with your day. Premium, mid-range, and budget tyres ready to mount.
                  </p>
      <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
      <CheckCircle2 className="text-secondary h-5 w-5" />
      <span className="text-[13px] leading-[18px] text-white">Zero Downtime</span>
      </div>
      <div className="flex items-center gap-2">
      <CheckCircle2 className="text-secondary h-5 w-5" />
      <span className="text-[13px] leading-[18px] text-white">Old Tyre Disposal Inc.</span>
      </div>
      </div>
      </div>
      <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[420px] overflow-hidden order-1 lg:order-2">
      <Image src="/gallery-roadside-fitting.webp" alt="Brand new car tyre tread depth measurement mobile technician inspection" fill sizes="(max-width: 1024px) 100vw, 50vw" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent lg:hidden"></div>
      </div>
      </div>
      {/* Story Card 3: Photo Left */}
      <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl bg-primary/60 overflow-hidden shadow-xl border border-white/10 group">
      <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[420px] overflow-hidden">
      <Image src="/gallery-home-callout.webp" alt="Close up shot of mechanical specialist using heavy torque wrench repairing commercial van alloy wheel rim on wet pavement roadside in Yorkshire UK" fill sizes="(max-width: 1024px) 100vw, 50vw" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent lg:hidden"></div>
      </div>
      <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center">
      <div className="inline-flex items-center gap-2 mb-3">
      <span className="px-3 py-1 rounded-full bg-secondary text-primary text-[11px] leading-[14px] tracking-[0.06em] font-bold">SERVICE 03</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-300">BS AU 159 COMPLIANT</span>
      </div>
      <h3 className="font-heading text-[30px] leading-[38px] font-bold text-white uppercase mb-4">Curbside Puncture Repair &amp; Valve Service</h3>
      <p className="text-[15px] leading-[24px] text-gray-400 mb-6">
                    Picked up a screw along the Shay Stadium industrial estate or cracked a valve rim? If the puncture sits within the central 75% tread zone and poses no structural belt damage, we carry out British Standard vulcanized plug-patch repairs on site, saving you the expense of a complete replacement tyre.
                  </p>
      <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
      <CheckCircle2 className="text-secondary h-5 w-5" />
      <span className="text-[13px] leading-[18px] text-white">TPMS Valve Sensor Reset</span>
      </div>
      <div className="flex items-center gap-2">
      <CheckCircle2 className="text-secondary h-5 w-5" />
      <span className="text-[13px] leading-[18px] text-white">Locking Nut Removal</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 4. ROADS & NEARBY AREAS: BOLD SINGLE-STATEMENT SECTION */}
      <section className="relative w-full bg-primary-dark py-20 lg:py-32 overflow-hidden flex items-center">
      {/* Dimmed Atmospheric Background Photo */}
      <div className="relative absolute inset-0 z-0">
      <Image src="/gallery-evening-callout.webp" alt="Long exposure night shot of British motorway bypass traffic streaming through misty Calderdale hills with blurred vehicle headlights and ambient deep navy sky" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover opacity-20 filter contrast-125" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/80 to-primary-dark"></div>
      </div>
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-widest block mb-4">West Yorkshire Rapid Grid</span>
      <h2 className="font-heading text-[56px] leading-[64px] tracking-[-0.02em] font-black uppercase tracking-tighter text-white mb-8">
              STRATEGIC KEY CORRIDORS &amp; SURROUNDING DISTRICTS
            </h2>
      {/* Giant Highway Badge Cluster */}
      <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 mb-12 max-w-4xl mx-auto">
      <span className="px-6 py-3 rounded-full bg-primary/80 text-secondary font-heading text-[20px] leading-[26px] font-bold border border-secondary/20">
                A629 CALDERDALE WAY
              </span>
      <span className="px-6 py-3 rounded-full bg-accent text-white font-heading text-[20px] leading-[26px] font-bold shadow-lg">
                M62 MOTORWAY (J22-J26)
              </span>
      <span className="px-6 py-3 rounded-full bg-primary/80 text-secondary font-heading text-[20px] leading-[26px] font-bold border border-secondary/20">
                A58 GODLEY CUTTING
              </span>
      </div>
      {/* Adjacent Towns Flow */}
      <p className="text-[18px] leading-[28px] text-gray-300 max-w-3xl mx-auto mb-10">
              Dedicated regional technicians patrol non-stop between Halifax town center and surrounding valley communities with average sub-40 minute emergency arrival times:
            </p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-4xl mx-auto">
      <div className="p-4 rounded-xl bg-primary/60 backdrop-blur-sm border border-white/10 text-center">
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Brighouse</div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">12 Mins Away</span>
      </div>
      <div className="p-4 rounded-xl bg-primary/60 backdrop-blur-sm border border-white/10 text-center">
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Huddersfield</div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">18 Mins Away</span>
      </div>
      <div className="p-4 rounded-xl bg-primary/60 backdrop-blur-sm border border-white/10 text-center">
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Sowerby Bridge</div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">8 Mins Away</span>
      </div>
      <div className="p-4 rounded-xl bg-primary/60 backdrop-blur-sm border border-white/10 text-center">
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Elland</div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">10 Mins Away</span>
      </div>
      <div className="p-4 rounded-xl bg-primary/60 backdrop-blur-sm border border-white/10 text-center col-span-2 md:col-span-1">
      <div className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Hebden Bridge</div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">19 Mins Away</span>
      </div>
      </div>
      </div>
      </section>
      {/* 5. HOW IT WORKS: TALL CARD WITH CONTINUOUS CONNECTING GOLD TIMELINE */}
      <section className="w-full bg-primary-dark py-16 lg:py-24">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-widest block mb-1">Seamless Process</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white uppercase">How Our Mobile Fitting Operates</h2>
      </div>
      <div className="relative bg-primary/60 rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10">
      {/* Connecting Vertical Line (Golden Thread) */}
      <div className="absolute left-9 sm:left-14 top-16 bottom-16 w-1 bg-gradient-to-b from-secondary via-secondary to-accent"></div>
      <div className="flex flex-col space-y-12">
      {/* Step 1 */}
      <div className="relative flex items-start gap-6 sm:gap-8 group">
      <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-secondary flex items-center justify-center text-primary font-heading text-[20px] leading-[26px] font-bold shadow-lg shrink-0">
                    01
                  </div>
      <div className="pt-1">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase">Step 01 • Instant Contact</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mt-1 mb-2">Provide Reg &amp; Halifax Location</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                      Call our direct line or submit your WhatsApp pin. Share your tyre specifications (e.g. 225/40 R18) or vehicle registration mark so we immediately verify inventory.
                    </p>
      </div>
      </div>
      {/* Step 2 */}
      <div className="relative flex items-start gap-6 sm:gap-8 group">
      <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-secondary flex items-center justify-center text-primary font-heading text-[20px] leading-[26px] font-bold shadow-lg shrink-0">
                    02
                  </div>
      <div className="pt-1">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase">Step 02 • Rapid Dispatch</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mt-1 mb-2">Calderdale Van En Route</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                      Our nearest equipped technician is dispatched immediately with live ETA updates delivered straight to your smartphone while you stay in safety and comfort.
                    </p>
      </div>
      </div>
      {/* Step 3 */}
      <div className="relative flex items-start gap-6 sm:gap-8 group">
      <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-secondary flex items-center justify-center text-primary font-heading text-[20px] leading-[26px] font-bold shadow-lg shrink-0">
                    03
                  </div>
      <div className="pt-1">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase">Step 03 • On-Site Replacement</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mt-1 mb-2">Fitted, Balanced &amp; Torqued</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                      The technician replaces the damaged tyre, installs a fresh valve, dynamically laser-balances the rim, and torques wheel nuts to manufacturer factory spec.
                    </p>
      </div>
      </div>
      {/* Step 4 */}
      <div className="relative flex items-start gap-6 sm:gap-8 group">
      <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent flex items-center justify-center text-white font-heading text-[20px] leading-[26px] font-bold shadow-lg shrink-0">
                    04
                  </div>
      <div className="pt-1">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Step 04 • Contactless Payment</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mt-1 mb-2">Back on the Road Safely</h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                      Inspect the work, tap to pay with any credit/debit card on our mobile chip reader, and receive a digital VAT receipt instantaneously via email.
                    </p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 6. REAL LOCAL JOB: GODLEY CUTTING TALL CASE STUDY */}
      <section className="w-full bg-primary-dark py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-primary/80 border border-secondary/30 relative overflow-hidden shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-7">
      <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full bg-secondary text-primary text-[11px] leading-[14px] tracking-[0.06em] font-bold">RECENT HALIFAX JOB</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">COMPLETED IN 29 MINUTES</span>
      </div>
      <h3 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white uppercase mb-4">
                    VW Golf GTD • A58 Godley Cutting Sidewall Pinch
                  </h3>
      <p className="text-[18px] leading-[28px] text-gray-300 mb-6">
                    A commuter struck a jagged stone curb along Godley Cutting descending toward New Bank during peak evening drizzle, resulting in a sudden total blowout and rim drop.
                  </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-primary-dark/80 border border-white/10 mb-6">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block">VEHICLE</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">VW Golf GTD</span>
      </div>
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block">TYRE SPEC</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary">225/40 R18</span>
      </div>
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block">ARRIVAL TIME</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-accent">19 Minutes</span>
      </div>
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block">JOB DURATION</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">10 Mins Fit</span>
      </div>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400 italic">
                    &quot;Stranded on an awkward hill bend in the dark, mobile technician Lee arrived in under 20 minutes, secured the car on heavy chocks, and had me rolling again before traffic cleared.&quot; — Mark T., Halifax
                  </p>
      </div>
      <div className="lg:col-span-5 relative h-72 lg:h-96 rounded-2xl overflow-hidden shadow-inner bg-primary-dark">
      <Image src="/gallery-evening-home-visit.webp" alt="Technical close up of newly mounted low profile performance car wheel on a Volkswagen Golf in twilight roadside conditions with amber warning lights reflecting" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute bottom-4 left-4 bg-primary-dark/90 px-3 py-1.5 rounded-lg border border-white/10">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary">Fitted: Pirelli P Zero 92Y XL</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 7. FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section className="w-full bg-primary-dark py-16 lg:py-24">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-widest block mb-1">Got Questions?</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white uppercase">Halifax Mobile Tyre FAQs</h2>
      </div>
      <div className="flex flex-col space-y-4" id="faq-container">
      {/* FAQ 1 */}
      <details className="rounded-2xl bg-primary/60 border border-white/10 overflow-hidden transition-all group"><summary className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none cursor-pointer list-none">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">How fast can a mobile van arrive to my location in Halifax?</span>
      <ChevronDown className="text-secondary transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-6 pb-6 text-gray-400 text-[15px] leading-[24px]">
                  Our typical arrival window across central Halifax, Skircoat Green, Copley, and Salterhebble is between 25 and 45 minutes from your confirmed call. We station mobile units continuously near the A629 Calderdale Way corridor for rapid highway access.
                </div></details>
      {/* FAQ 2 */}
      <details className="rounded-2xl bg-primary/60 border border-white/10 overflow-hidden transition-all group"><summary className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none cursor-pointer list-none">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Can you fit tyres on steep Halifax residential hills?</span>
      <ChevronDown className="text-secondary transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-6 pb-6 text-gray-400 text-[15px] leading-[24px]">
                  Yes. Calderdale&apos;s unique hill topography is standard operating territory for our team. Our vans carry specialized wheel chocks, pneumatic locking high-lift jacks, and safety plates specifically engineered to lift and balance vehicles safely on high-gradient driveways and valley roads.
                </div></details>
      {/* FAQ 3 */}
      <details className="rounded-2xl bg-primary/60 border border-white/10 overflow-hidden transition-all group"><summary className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none cursor-pointer list-none">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">What if I don&apos;t know my exact tyre size?</span>
      <ChevronDown className="text-secondary transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-6 pb-6 text-gray-400 text-[15px] leading-[24px]">
                  Simply provide your vehicle registration number when you call our 24/7 team. We instantly pull your car&apos;s factory axle dimensions from the DVLA database and confirm staggered fitments or run-flat requirements before our technician sets off.
                </div></details>
      {/* FAQ 4 */}
      <details className="rounded-2xl bg-primary/60 border border-white/10 overflow-hidden transition-all group"><summary className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none cursor-pointer list-none">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Do you carry locking wheel nut removal tools?</span>
      <ChevronDown className="text-secondary transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-6 pb-6 text-gray-400 text-[15px] leading-[24px]">
                  Yes. If you have misplaced your key or your locking wheel nut is rounded off or seized, our vans carry reverse-thread extraction kits that safely remove the damaged fastener without marring your alloy wheel finish.
                </div></details>
      </div>
      </div>
      </section>
      {/* 8. RELATED SURROUNDING LOCATIONS */}
      <section className="w-full bg-primary-dark py-14 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-widest">Wider West Yorkshire Network</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white uppercase mt-1">Explore Nearby Coverage Zones</h3>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 text-center">
      <a className="px-5 py-2.5 rounded-full bg-primary/60 hover:bg-primary text-white text-[13px] leading-[18px] transition-colors border border-white/10" href="#brighouse">
                Mobile Tyre Fitting Brighouse →
              </a>
      <a className="px-5 py-2.5 rounded-full bg-primary/60 hover:bg-primary text-white text-[13px] leading-[18px] transition-colors border border-white/10" href="#huddersfield">
                Mobile Tyre Fitting Huddersfield →
              </a>
      <a className="px-5 py-2.5 rounded-full bg-primary/60 hover:bg-primary text-white text-[13px] leading-[18px] transition-colors border border-white/10" href="#sowerby-bridge">
                Mobile Tyre Fitting Sowerby Bridge →
              </a>
      <a className="px-5 py-2.5 rounded-full bg-primary/60 hover:bg-primary text-white text-[13px] leading-[18px] transition-colors border border-white/10" href="#elland">
                Mobile Tyre Fitting Elland →
              </a>
      <a className="px-5 py-2.5 rounded-full bg-primary/60 hover:bg-primary text-secondary text-[13px] leading-[18px] transition-colors border border-secondary/30" href="#yorkshire">
                Mobile Tyre Fitting Yorkshire Hub →
              </a>
      </div>
      </div>
      </section>
      {/* 9. FINAL CTA: TALL PHOTO PANEL WITH STACKED BOLD HEADLINE */}
      <section className="relative w-full bg-primary-dark overflow-hidden min-h-[600px] flex items-center">
      {/* Full-Bleed Atmospheric Background */}
      <div className="relative absolute inset-0 z-0">
      <Image src="/gallery-precision-care.webp" alt="Cinematic night roadside perspective of emergency vehicle support amber beacons lighting up asphalt road in Halifax Yorkshire with tyre technician working safely" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-gray-400 border border-accent/40 mb-6">
      <Headphones className="h-[18px] w-[18px] text-secondary" />
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase text-white">HALIFAX ON-CALL VAN READY FOR DISPATCH</span>
      </div>
      <h2 className="font-heading text-[56px] leading-[64px] tracking-[-0.02em] font-black uppercase tracking-tighter text-white leading-none max-w-4xl mb-6">
              STRANDED IN CALDERDALE?<br/>
      <span className="text-secondary">WE’RE ROLLING TO YOU.</span>
      </h2>
      <p className="text-[18px] leading-[28px] text-gray-300 max-w-2xl mb-10">
              Don’t wait for a tow truck on the A58 or struggle with a scissor jack on a steep hill. Tap to speak directly with an emergency technician.
            </p>
      {/* Click-to-call visible twice (Hero + CTA) */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-6 rounded-full bg-secondary hover:bg-secondary-hover text-primary font-heading text-[20px] leading-[26px] font-bold transition-all duration-200 transform active:scale-95 shadow-2xl shadow-primary-container/20" href="tel:08009992470">
      <PhoneCall className="text-primary h-[28px] w-[28px]" />
      <span>DISPATCH TYRE VAN: 0800 999 2470</span>
      </a>
      </div>
      <div className="mt-8 flex items-center justify-center gap-6 text-gray-400 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <span className="flex items-center gap-1.5">
      <ShieldCheck className="text-secondary h-[18px] w-[18px]" />
                No Hidden Callout Fees
              </span>
      <span className="flex items-center gap-1.5">
      <CreditCard className="text-secondary h-[18px] w-[18px]" />
                Card Paid On Completion
              </span>
      </div>
      </div>
      </section>
      </div>
    </main>
  );
}
