import Image from "next/image";
import { AlertTriangle, CheckCircle2, ChevronDown, Disc, Info, MessageCircle, Navigation, PhoneCall, ShieldCheck, Timer, Truck, Wrench, Zap } from "lucide-react";

export default function MiddletonPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* 1. Hero: Editorial Split Layout */}
      <section className="w-full relative overflow-hidden bg-primary-dark">
      <div className="max-w-[1280px] mx-auto min-h-[580px] grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
      {/* Left Content */}
      <div className="lg:col-span-7 flex flex-col justify-center py-12 px-6 sm:px-10 lg:pr-12 lg:py-16 z-10">
      <div className="inline-flex items-center gap-2 mb-4">
      <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary">M60 J19 • A664 Rapid Response Hub</span>
      </div>
      <h1 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold sm:text-[56px] sm:leading-[64px] sm:tracking-[-0.02em] sm:font-black text-white font-black leading-none">
                24/7 Mobile Tyre Fitting in Middleton
              </h1>
      {/* Thin gold rule */}
      <div className="w-28 h-1 bg-secondary mt-6 mb-6"></div>
      <p className="text-[18px] leading-[28px] text-gray-300 mb-8 max-w-xl">
                Rapid on-demand tyre replacement and emergency puncture repairs direct to your driveway, workplace car park, or roadside anywhere in Middleton, Mills Hill, and the A664 corridor.
              </p>
      {/* Inline Action Strip */}
      <div className="flex flex-wrap items-center gap-4">
      <a className="inline-flex items-center gap-3 bg-secondary hover:bg-secondary-hover text-primary px-8 py-4 rounded-full font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold transition-all shadow-xl active:scale-95 group" href="tel:08009992470">
      <PhoneCall className="text-primary group-hover:rotate-12 transition-transform h-5 w-5" fill="currentColor" strokeWidth={0} />
      <span>Call 0800 999 2470</span>
      </a>
      <a className="inline-flex items-center gap-3 bg-primary hover:bg-primary-light text-white px-7 py-4 rounded-full text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-all active:scale-95 shadow-md" href="https://wa.me/448009992470" rel="noopener" target="_blank">
      <MessageCircle className="text-accent h-5 w-5" />
      <span>WhatsApp Rapid Quote</span>
      </a>
      </div>
      <div className="flex items-center gap-6 mt-8 pt-6">
      <div className="flex items-center gap-2">
      <ShieldCheck className="text-secondary text-[16px] leading-[22px] tracking-[0.01em] font-bold h-5 w-5" fill="currentColor" strokeWidth={0} />
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Average 30-45 Min Arrival</span>
      </div>
      <div className="flex items-center gap-2">
      <Zap className="text-secondary text-[16px] leading-[22px] tracking-[0.01em] font-bold h-5 w-5" fill="currentColor" strokeWidth={0} />
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Driveway &amp; Kerbside Fitted</span>
      </div>
      </div>
      </div>
      {/* Right Edge-to-Edge Image */}
      <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full">
      <div className="absolute inset-0 w-full h-full bg-cover bg-center" data-alt="Professional mobile tyre service technician kneeling beside customer car wheel with pneumatic impact gun on brick driveway outside suburban British residence." style={{ backgroundImage: "url('/hero-section-images-936x527.webp')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent lg:bg-gradient-to-r lg:from-primary-dark lg:via-transparent lg:to-transparent"></div>
      <div className="absolute bottom-4 right-4 bg-primary-dark/90 px-4 py-2 rounded-xl backdrop-blur-md shadow-lg flex items-center gap-2">
      <Wrench className="text-secondary h-[14px] w-[14px]" />
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-white uppercase">Fully Equipped Mobile Van</span>
      </div>
      </div>
      </div>
      </section>
      {/* 2. Local Intro Section */}
      <section className="w-full bg-primary-dark py-14 px-6 sm:px-10">
      <div className="max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-8 space-y-5">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-accent bg-primary/60 px-3 py-1 rounded-full inline-block">Middleton Local Dispatch Coverage</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-extrabold">
                  Stop Driving On Dangerous Rims. We Come Straight to Your Middleton Location.
                </h2>
      <p className="text-[18px] leading-[28px] text-gray-300">
                  From the bustling spine of the <strong className="text-white">A664 Manchester Old Road</strong> to residential avenues in <strong className="text-white">Alkrington</strong>, <strong className="text-white">Mills Hill</strong>, and junctions feeding the <strong className="text-white">M60 J19 &amp; M62</strong>, driving on an uninflated tyre risks irreparable alloy destruction and catastrophic blowout. Our fleet vans carry high-precision mobile tyre mounting gear, laser balancers, and fresh stock across North Manchester.
                </p>
      <p className="text-[15px] leading-[24px] text-gray-400">
                  Whether you wake up to an unexpected nail puncture before your morning commute or sustain road-debris damage on the commute back through Middleton town centre, our fully certified technicians arrive at your private drive or kerbside workspace parking bay to swap or repair tyres in situ without the stress of towing fees.
                </p>
      </div>
      <div className="lg:col-span-4 bg-primary-dark rounded-2xl p-6 shadow-xl space-y-4">
      <div className="flex items-center gap-3">
      <Timer className="text-secondary text-[30px] leading-[38px] font-bold h-5 w-5" />
      <div>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-gray-400">Middleton Average Response</p>
      <p className="font-heading text-[30px] leading-[38px] font-bold text-white font-bold">32 Minutes</p>
      </div>
      </div>
      <div className="h-0.5 bg-primary w-full"></div>
      <ul className="space-y-3 text-[13px] leading-[18px] text-gray-300">
      <li className="flex items-center gap-2">
      <CheckCircle2 className="text-accent h-4 w-4" />
                    Driveway, car park &amp; roadside assistance
                  </li>
      <li className="flex items-center gap-2">
      <CheckCircle2 className="text-accent h-4 w-4" />
                    All major OEM brands &amp; budget options stocked
                  </li>
      <li className="flex items-center gap-2">
      <CheckCircle2 className="text-accent h-4 w-4" />
                    Digital torque wrench &amp; laser wheel balancing included
                  </li>
      </ul>
      </div>
      </div>
      </div>
      </section>
      {/* 3. Services: Vertical Icon-List With Photos */}
      <section className="w-full bg-primary-dark py-16 px-6 sm:px-10">
      <div className="max-w-[1280px] mx-auto">
      <div className="mb-12">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary">Mobile Fitting Capabilities</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black mt-2">Comprehensive On-Location Services</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Service Row 1 */}
      <div className="relative bg-primary/60 rounded-2xl p-5 shadow-lg flex flex-col sm:flex-row gap-5 items-start transition-all hover:bg-primary/80">
      <Image src="/gallery-evening-callout.webp" alt="Brand new tyre tread inspection" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full sm:w-28 h-28 object-cover rounded-xl flex-shrink-0" />
      <div className="flex-1 space-y-2">
      <div className="flex items-center gap-2">
      <span className="w-7 h-7 rounded-full bg-accent flex items-center justify-center text-white text-xs">
      <Wrench className="h-[14px] w-[14px]" />
      </span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-secondary font-bold">Driveway Emergency Replacements</h3>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    Wake up to a flat in Alkrington or Middleton Junction? Our van pulls up outside your house with your exact tyre specification, mounts, valves, and electronically balances the replacement on your drive.
                  </p>
      </div>
      </div>
      {/* Service Row 2 */}
      <div className="bg-primary/60 rounded-2xl p-5 shadow-lg flex flex-col sm:flex-row gap-5 items-start transition-all hover:bg-primary/80">
      <div className="w-full sm:w-28 h-28 bg-cover bg-center rounded-xl flex-shrink-0" data-alt="Close-up of automotive technician operating an electronic tyre tread depth measuring device on high performance rubber tyre." style={{ backgroundImage: "url('/gallery-onsite-wheel-fitting.webp')" }}></div>
      <div className="flex-1 space-y-2">
      <div className="flex items-center gap-2">
      <span className="w-7 h-7 rounded-full bg-accent flex items-center justify-center text-white text-xs">
      <Wrench className="h-[14px] w-[14px]" />
      </span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">BS AU 159 Puncture Repairs</h3>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    If safe and repairable according to British safety standards, we execute internal patch-plug repairs on site, saving you the expense of a brand new tyre when minor tread punctures strike.
                  </p>
      </div>
      </div>
      {/* Service Row 3 */}
      <div className="relative bg-primary/60 rounded-2xl p-5 shadow-lg flex flex-col sm:flex-row gap-5 items-start transition-all hover:bg-primary/80">
      <Image src="/gallery-evening-home-visit.webp" alt="Motorway roadside emergency response" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full sm:w-28 h-28 object-cover rounded-xl flex-shrink-0" />
      <div className="flex-1 space-y-2">
      <div className="flex items-center gap-2">
      <span className="w-7 h-7 rounded-full bg-accent flex items-center justify-center text-white text-xs">
      <AlertTriangle className="h-[14px] w-[14px]" />
      </span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-secondary font-bold">M60 / M62 Commuter Recovery</h3>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    Stranded near Junction 19 or the Manchester ring road? High-visibility safety beacon response vehicles dispatched immediately to get you safely back into traffic without prolonged hard shoulder risks.
                  </p>
      </div>
      </div>
      {/* Service Row 4 */}
      <div className="bg-primary/60 rounded-2xl p-5 shadow-lg flex flex-col sm:flex-row gap-5 items-start transition-all hover:bg-primary/80">
      <div className="w-full sm:w-28 h-28 bg-cover bg-center rounded-xl flex-shrink-0" data-alt="Commercial fleet van receiving dual rear wheel mobile tyre change in industrial distribution park in England." style={{ backgroundImage: "url('/gallery-roadside-fitting.webp')" }}></div>
      <div className="flex-1 space-y-2">
      <div className="flex items-center gap-2">
      <span className="w-7 h-7 rounded-full bg-accent flex items-center justify-center text-white text-xs">
      <Truck className="h-[14px] w-[14px]" />
      </span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">Fleet &amp; Van Tyre Maintenance</h3>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    We service delivery vehicles and commercial fleets across Stakehill Industrial Estate and local logistics hubs with zero yard disruption, keeping Middleton commercial runs on schedule.
                  </p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 4. Roads & Nearby Areas: Simplified Map-Style Hub Panel */}
      <section className="w-full bg-primary-dark py-16 px-6 sm:px-10 relative">
      <div className="max-w-[1280px] mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary">Key Dispatch Nodes</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black mt-2">Middleton Network &amp; Arterial Routes</h2>
      <p className="text-[15px] leading-[24px] text-gray-300 mt-2">Stationed for direct access to Middleton, North Manchester corridors, and surrounding towns.</p>
      </div>
      {/* Network Graphic */}
      <div className="relative bg-primary-dark/80 rounded-2xl p-8 sm:p-12 shadow-2xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
      {/* West & North Nodes */}
      <div className="space-y-4">
      <div className="bg-primary/60 p-4 rounded-xl shadow-md flex items-center justify-between">
      <div>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-accent uppercase">North-West Node</p>
      <p className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">Heywood</p>
      <p className="text-[13px] leading-[18px] text-gray-400">A6046 Corridor • ~12 Min</p>
      </div>
      <Navigation className="text-accent h-5 w-5" />
      </div>
      <div className="bg-primary/60 p-4 rounded-xl shadow-md flex items-center justify-between">
      <div>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-accent uppercase">North Node</p>
      <p className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">Rochdale</p>
      <p className="text-[13px] leading-[18px] text-gray-400">A664 Link • ~15 Min</p>
      </div>
      <Navigation className="text-accent h-5 w-5" />
      </div>
      <div className="bg-primary/60 p-4 rounded-xl shadow-md flex items-center justify-between">
      <div>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-accent uppercase">West Node</p>
      <p className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">Prestwich</p>
      <p className="text-[13px] leading-[18px] text-gray-400">M60 J17-J19 • ~14 Min</p>
      </div>
      <Navigation className="text-accent h-5 w-5" />
      </div>
      </div>
      {/* Central Hub: Middleton */}
      <div className="my-6 md:my-0 flex flex-col items-center justify-center">
      <div className="w-full bg-gradient-to-b from-secondary to-secondary-hover p-1 rounded-2xl shadow-2xl">
      <div className="bg-primary-dark rounded-xl p-8 text-center flex flex-col items-center">
      <span className="inline-block px-3 py-1 bg-secondary text-primary rounded-full text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest font-black mb-3">
                        PRIMARY HUB
                      </span>
      <h3 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black">
                        Middleton
                      </h3>
      <p className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary font-semibold mt-1">
                        M60 J19 • M62 • A664
                      </p>
      <p className="text-[13px] leading-[18px] text-gray-300 mt-3">
                        Dedicated local response vehicle patrol covering Alkrington, Langley, Rhodes, and Middleton Junction.
                      </p>
      <a className="mt-5 inline-flex items-center gap-2 bg-secondary text-primary px-6 py-2.5 rounded-full text-[14px] leading-[18px] tracking-[0.02em] font-semibold font-bold shadow-md hover:scale-105 transition-transform" href="tel:08009992470">
      <PhoneCall className="h-[14px] w-[14px]" fill="currentColor" strokeWidth={0} />
                        Dispatch Rapid Van
                      </a>
      </div>
      </div>
      </div>
      {/* East & South Nodes */}
      <div className="space-y-4">
      <div className="bg-primary/60 p-4 rounded-xl shadow-md flex items-center justify-between">
      <div>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-accent uppercase">East Node</p>
      <p className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">Chadderton</p>
      <p className="text-[13px] leading-[18px] text-gray-400">A663 Broadway • ~10 Min</p>
      </div>
      <Navigation className="text-accent h-5 w-5" />
      </div>
      <div className="bg-primary/60 p-4 rounded-xl shadow-md flex items-center justify-between">
      <div>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-accent uppercase">South Node</p>
      <p className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">Blackley</p>
      <p className="text-[13px] leading-[18px] text-gray-400">Manchester Old Rd • ~8 Min</p>
      </div>
      <Navigation className="text-accent h-5 w-5" />
      </div>
      <div className="bg-primary/60 p-4 rounded-xl shadow-md flex items-center justify-between">
      <div>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-accent uppercase">Industrial Zone</p>
      <p className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">Stakehill</p>
      <p className="text-[13px] leading-[18px] text-gray-400">Logistics Park • ~7 Min</p>
      </div>
      <Navigation className="text-accent h-5 w-5" />
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 5 & 6. How It Works Ribbon + Real Local Job Sidebar */}
      <section className="w-full bg-primary-dark py-16 px-6 sm:px-10">
      <div className="max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left: 5-step horizontal ribbon */}
      <div className="lg:col-span-8 space-y-8">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary">Streamlined Workflow</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black mt-1">How Mobile Tyre Fitting Works</h2>
      <p className="text-[15px] leading-[24px] text-gray-300 mt-2">Zero trips to a garage, no waiting in line, and no ruined rims.</p>
      </div>
      {/* 5-Step Ribbon */}
      <div className="bg-primary-dark rounded-2xl p-6 shadow-xl">
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 relative">
      {/* Step 1 */}
      <div className="flex flex-col items-center text-center space-y-2">
      <div className="w-12 h-12 rounded-full bg-secondary text-primary font-heading flex items-center justify-center font-black shadow-lg">1</div>
      <h4 className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white font-bold">Call / Message</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Share your vehicle reg and location in Middleton.</p>
      </div>
      {/* Step 2 */}
      <div className="flex flex-col items-center text-center space-y-2">
      <div className="w-12 h-12 rounded-full bg-primary text-white font-heading flex items-center justify-center font-bold">2</div>
      <h4 className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white font-bold">Tyre Match</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">We confirm tyre size, load index &amp; exact fixed pricing.</p>
      </div>
      {/* Step 3 */}
      <div className="flex flex-col items-center text-center space-y-2">
      <div className="w-12 h-12 rounded-full bg-primary text-white font-heading flex items-center justify-center font-bold">3</div>
      <h4 className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white font-bold">Van Dispatched</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Technician heads directly to your driveway or roadside.</p>
      </div>
      {/* Step 4 */}
      <div className="flex flex-col items-center text-center space-y-2">
      <div className="w-12 h-12 rounded-full bg-primary text-white font-heading flex items-center justify-center font-bold">4</div>
      <h4 className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white font-bold">Precision Fitting</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Tyre fitted, new rubber valve, and balanced on site.</p>
      </div>
      {/* Step 5 */}
      <div className="flex flex-col items-center text-center space-y-2">
      <div className="w-12 h-12 rounded-full bg-accent text-white font-heading flex items-center justify-center font-bold shadow-md">5</div>
      <h4 className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white font-bold">Drive Away</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Easy contactless card payment once work is certified.</p>
      </div>
      </div>
      </div>
      <div className="bg-primary/60 rounded-2xl p-5 flex items-center gap-4">
      <Info className="text-secondary h-[30px] w-[30px]" />
      <p className="text-[13px] leading-[18px] text-gray-300">
      <strong className="text-white">Need locking wheel nut removal?</strong> Our vans carry specialized non-destructive reverse-thread extraction equipment to handle rounded or misplaced keys on site in Middleton.
                  </p>
      </div>
      </div>
      {/* Right: Real Local Job Sidebar Card */}
      <div className="lg:col-span-4 bg-primary-dark rounded-2xl p-6 shadow-2xl">
      <div className="flex items-center justify-between mb-4">
      <span className="bg-secondary/20 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase px-2.5 py-1 rounded-md font-bold">Recent Job Dispatch</span>
      <span className="text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold">Middleton</span>
      </div>
      <div className="w-full h-44 rounded-xl overflow-hidden mb-4 bg-cover bg-center" data-alt="Suburban driveway tyre fitting case study showing technician with battery impact gun removing damaged wheel from silver Vauxhall Astra hatchback." style={{ backgroundImage: "url('/gallery-home-callout.webp')" }}></div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white font-bold">
                  Driveway Callout: Alkrington, Middleton
                </h3>
      <div className="mt-4 space-y-2.5 text-[13px] leading-[18px] text-gray-300">
      <div className="flex justify-between py-1 border-b border-white/10">
      <span className="text-gray-400">Vehicle:</span>
      <span className="text-white font-semibold">Vauxhall Astra 1.4T</span>
      </div>
      <div className="flex justify-between py-1 border-b border-white/10">
      <span className="text-gray-400">Tyre Specification:</span>
      <span className="text-white font-semibold">205/55 R16 (Reinforced)</span>
      </div>
      <div className="flex justify-between py-1 border-b border-white/10">
      <span className="text-gray-400">Fault Diagnosed:</span>
      <span className="text-red-400 font-semibold">Puncture on driveway before commute</span>
      </div>
      <div className="flex justify-between py-1 border-b border-white/10">
      <span className="text-gray-400">Arrival Time:</span>
      <span className="text-secondary font-bold">32 min from call</span>
      </div>
      <div className="flex justify-between py-1">
      <span className="text-gray-400">Work Completed:</span>
      <span className="text-accent font-semibold">Fitted &amp; balanced on drive</span>
      </div>
      </div>
      <div className="mt-5 p-3 rounded-lg bg-primary/60 text-xs text-gray-400 italic">
                  “Driver had a flat tyre at 7:15 AM before leaving for work in Manchester. Tech arrived at 7:47 AM, fitted brand new rubber, and customer was back on the road by 8:05 AM.”
                </div>
      </div>
      </div>
      </div>
      </section>
      {/* 7. FAQ: Single-Column Accordion */}
      <section className="w-full bg-primary-dark py-16 px-6 sm:px-10">
      <div className="max-w-[840px] mx-auto">
      <div className="text-center mb-10">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary">Frequently Asked Questions</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black mt-2">Middleton Mobile Tyre Service FAQ</h2>
      </div>
      <div className="space-y-4" id="middleton-faq">
      {/* FAQ 1 */}
      <details className="bg-primary/60 rounded-2xl p-6 shadow-md transition-all group"><summary className="w-full flex items-center justify-between text-left font-heading text-[20px] leading-[26px] font-bold text-white font-bold focus:outline-none cursor-pointer list-none">
      <span>How fast can you arrive at my Middleton home or roadside location?</span>
      <ChevronDown className="text-secondary transition-transform group-open:rotate-180 h-5 w-5" />
      </summary><div className="mt-3 text-gray-300 text-[15px] leading-[24px]">
                  Our average emergency response time across Middleton, Alkrington, and Mills Hill is between 30 and 45 minutes. Because our vans are already roving through the M60 J19 and A664 arterial zones, we can dispatch immediately upon receiving your tyre size and location details.
                </div></details>
      {/* FAQ 2 */}
      <details className="bg-primary/60 rounded-2xl p-6 shadow-md transition-all group"><summary className="w-full flex items-center justify-between text-left font-heading text-[20px] leading-[26px] font-bold text-white font-bold focus:outline-none cursor-pointer list-none">
      <span>Can you fit a new tyre on a sloped driveway or tight street in Alkrington?</span>
      <ChevronDown className="text-secondary transition-transform group-open:rotate-180 h-5 w-5" />
      </summary><div className="mt-3 text-gray-300 text-[15px] leading-[24px]">
                  Yes. Our vans carry heavy-duty mobile jacking systems and safety chocks specifically configured for suburban drives, private carports, and residential kerbsides. As long as there is enough clearance to safely set up around the wheel, we can perform a full tyre swap and computer balance on site.
                </div></details>
      {/* FAQ 3 */}
      <details className="bg-primary/60 rounded-2xl p-6 shadow-md transition-all group"><summary className="w-full flex items-center justify-between text-left font-heading text-[20px] leading-[26px] font-bold text-white font-bold focus:outline-none cursor-pointer list-none">
      <span>What payment methods do your mobile technicians accept?</span>
      <ChevronDown className="text-secondary transition-transform group-open:rotate-180 h-5 w-5" />
      </summary><div className="mt-3 text-gray-300 text-[15px] leading-[24px]">
                  All technicians carry secure mobile card terminals accepting major credit/debit cards (Visa, Mastercard, Maestro), contactless payments, and Apple Pay / Google Pay. We provide a VAT invoice instantly upon job sign-off before leaving your premises.
                </div></details>
      {/* FAQ 4 */}
      <details className="bg-primary/60 rounded-2xl p-6 shadow-md transition-all group"><summary className="w-full flex items-center justify-between text-left font-heading text-[20px] leading-[26px] font-bold text-white font-bold focus:outline-none cursor-pointer list-none">
      <span>What if I don&apos;t know my exact tyre size?</span>
      <ChevronDown className="text-secondary transition-transform group-open:rotate-180 h-5 w-5" />
      </summary><div className="mt-3 text-gray-300 text-[15px] leading-[24px]">
                  Simply give us a call with your vehicle registration plate number. Our dispatch system will pull your DVLA vehicle technical record to look up your factory rim and tyre specs (e.g. 205/55 R16, 225/45 R17) and confirm with you before sending out the fitting van.
                </div></details>
      </div>
      </div>
      </section>
      {/* 8. Related Locations: Plain Text-Link Row */}
      <section className="w-full bg-primary-dark py-8 px-6 sm:px-10">
      <div className="max-w-[1280px] mx-auto text-center">
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-gray-400 mb-3">Surrounding Service Areas Across Greater Manchester</p>
      <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-[13px] leading-[18px] text-gray-300">
      <a className="hover:text-secondary transition-colors underline-offset-4 hover:underline" href="#rochdale">Rochdale</a>
      <span className="text-gray-400">•</span>
      <a className="hover:text-secondary transition-colors underline-offset-4 hover:underline" href="#heywood">Heywood</a>
      <span className="text-gray-400">•</span>
      <a className="hover:text-secondary transition-colors underline-offset-4 hover:underline" href="#chadderton">Chadderton</a>
      <span className="text-gray-400">•</span>
      <a className="hover:text-secondary transition-colors underline-offset-4 hover:underline" href="#blackley">Blackley</a>
      <span className="text-gray-400">•</span>
      <a className="hover:text-secondary transition-colors underline-offset-4 hover:underline" href="#prestwich">Prestwich</a>
      <span className="text-gray-400">•</span>
      <a className="text-white font-semibold hover:text-secondary transition-colors underline-offset-4 hover:underline" href="#main">Main Tyre Fitting Hub</a>
      </div>
      </div>
      </section>
      {/* 9. Final CTA: Compact Centered Panel */}
      <section className="w-full bg-primary-dark py-12 px-6 sm:px-10">
      <div className="max-w-3xl mx-auto bg-primary-dark rounded-2xl p-8 sm:p-10 text-center shadow-2xl my-4">
      <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
      <Disc className="text-secondary h-[30px] w-[30px]" fill="currentColor" strokeWidth={0} />
      </div>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white font-black mb-3">
              Stuck in Middleton with a Flat Tyre?
            </h2>
      <p className="text-[15px] leading-[24px] text-gray-300 max-w-lg mx-auto mb-8">
              Don&apos;t damage your wheels or wait for an expensive recovery tow. Our local technician is on standby with emergency mobile fitting equipment right now.
            </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-secondary hover:bg-secondary-hover text-primary px-8 py-4 rounded-full font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold transition-all shadow-xl active:scale-95" href="tel:08009992470">
      <PhoneCall className="h-5 w-5" fill="currentColor" strokeWidth={0} />
      <span>Call Technician Now: 0800 999 2470</span>
      </a>
      </div>
      <div className="mt-6 flex items-center justify-center gap-2">
      <span className="w-2.5 h-2.5 rounded-full bg-accent-hover animate-ping"></span>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-white font-bold">
                24/7 Emergency Service • All Middleton Postcodes (M24)
              </p>
      </div>
      </div>
      </section>
      {/* Interactive Accordion Logic */}
    </main>
  );
}
