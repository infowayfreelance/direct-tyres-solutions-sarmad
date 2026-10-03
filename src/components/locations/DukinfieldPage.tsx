import Image from "next/image";
import { ArrowRight, Building2, ChevronDown, HelpCircle, Map, MapPin, MessageCircle, PhoneCall, Route, Siren, TrafficCone, Truck, Wrench } from "lucide-react";

export default function DukinfieldPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-primary-dark">
      <div className="relative min-h-[540px] md:min-h-[580px] w-full flex items-center justify-center">
      {/* Background Image with Scrims */}
      <Image src="/hero-section-images-936x527.webp" alt="British motorway roadside emergency scene on hard shoulder with mobile tyre fitting service support van" fill sizes="(max-width: 1024px) 100vw, 50vw" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-primary-dark/85"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/60 to-transparent"></div>
      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center flex flex-col items-center">
      {/* Live Dispatch Chip */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/90 text-white shadow-md mb-6">
      <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider">Dukinfield &amp; Tameside Rapid Dispatch Active</span>
      </div>
      <h1 className="font-heading text-[36px] leading-[42px] tracking-[-0.01em] font-black md:text-[56px] md:leading-[64px] md:tracking-[-0.02em] md:font-black text-white max-w-4xl text-balance mb-6">
                24/7 Mobile Tyre Fitting in Dukinfield
              </h1>
      <p className="text-[18px] leading-[28px] text-gray-300 max-w-2xl text-balance mb-8">
                Immediate roadside, commercial yard, and home driveway dispatch across King Street, Globe Industrial Park, and all surrounding residential zones. Fast 30–60 min ETA.
              </p>
      {/* CTA Action Cluster */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider shadow-lg hover:bg-secondary-hover hover:scale-105 active:scale-95 transition-all duration-200" href="tel:07955266077">
      <PhoneCall className="h-[24px] w-[24px]" />
                  Call 07955 266 077
                </a>
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold shadow-md hover:bg-primary-light active:scale-95 transition-all duration-200" href="https://wa.me/448009992470" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="text-accent h-[22px] w-[22px]" />
                  WhatsApp Dispatch
                </a>
      </div>
      {/* Key Metrics Strip */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 pt-8 w-full max-w-2xl">
      <div className="flex flex-col items-center">
      <span className="font-heading text-[30px] leading-[38px] font-bold text-secondary">30-55m</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-300 uppercase">Average Local ETA</span>
      </div>
      <div className="flex flex-col items-center">
      <span className="font-heading text-[30px] leading-[38px] font-bold text-secondary">24/7/365</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-300 uppercase">Unbroken On-Call</span>
      </div>
      <div className="col-span-2 md:col-span-1 flex flex-col items-center">
      <span className="font-heading text-[30px] leading-[38px] font-bold text-secondary">100%</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-300 uppercase">Mobile Van Workshop</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Two-Column Rail Structure */}
      <section className="w-full bg-primary-dark py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
      {/* Left Sidebar Rail (~25%) */}
      <aside className="w-full lg:w-1/4 flex flex-col gap-6">
      <div className="bg-primary/60 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center justify-between pb-4">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-gray-300">Navigation Rail</span>
      <span className="w-2 h-2 rounded-full bg-accent"></span>
      </div>
      {/* Stylish Contents Directory */}
      <nav className="flex flex-col gap-2 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <a className="flex items-center justify-between p-3 rounded-xl bg-primary/80 text-white hover:text-white transition-colors" href="#overview">
      <span>01 Overview</span>
      <ArrowRight className="h-[18px] w-[18px] text-secondary" />
      </a>
      <a className="flex items-center justify-between p-3 rounded-xl hover:bg-primary/80 text-gray-300 hover:text-white transition-colors" href="#services">
      <span>02 Services</span>
      <Wrench className="h-[18px] w-[18px]" />
      </a>
      <a className="flex items-center justify-between p-3 rounded-xl hover:bg-primary/80 text-gray-300 hover:text-white transition-colors" href="#dispatch-protocol">
      <span>03 Dispatch Protocol</span>
      <Route className="h-[18px] w-[18px]" />
      </a>
      <a className="flex items-center justify-between p-3 rounded-xl hover:bg-primary/80 text-gray-300 hover:text-white transition-colors" href="#arteries">
      <span>04 Local Arteries</span>
      <Map className="h-[18px] w-[18px]" />
      </a>
      <a className="flex items-center justify-between p-3 rounded-xl hover:bg-primary/80 text-gray-300 hover:text-white transition-colors" href="#faq">
      <span>05 Dukinfield FAQ</span>
      <HelpCircle className="h-[18px] w-[18px]" />
      </a>
      </nav>
      {/* Mini Live Status Box */}
      <div className="mt-6 pt-6 bg-primary/60 rounded-xl p-4 flex flex-col gap-3">
      <div className="flex items-center gap-2">
      <span className="relative flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
      </span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Unit 04: Active Patrol</span>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-300">
                      Positioned close to A627 / Globe Lane. Ready for fast dispatch into Dukinfield &amp; Stalybridge.
                    </p>
      </div>
      {/* Quick Call Direct Rail Trigger */}
      <div className="mt-6 pt-2">
      <a className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase hover:bg-secondary-hover transition-transform active:scale-95" href="tel:07955266077">
      <PhoneCall className="h-[20px] w-[20px]" />
                      07955 266 077
                    </a>
      </div>
      </div>
      {/* Micro Coverage Badge List */}
      <div className="bg-primary/60 rounded-2xl p-5 shadow-lg flex flex-col gap-3">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-gray-300">Tameside Response Zones</span>
      <div className="flex flex-wrap gap-2">
      <span className="px-2.5 py-1 rounded-full bg-primary text-white text-[13px] leading-[18px]">King Street</span>
      <span className="px-2.5 py-1 rounded-full bg-primary text-white text-[13px] leading-[18px]">Globe Industrial</span>
      <span className="px-2.5 py-1 rounded-full bg-primary text-white text-[13px] leading-[18px]">Cheetham Hill Rd</span>
      <span className="px-2.5 py-1 rounded-full bg-primary text-white text-[13px] leading-[18px]">Birch Lane</span>
      <span className="px-2.5 py-1 rounded-full bg-primary text-white text-[13px] leading-[18px]">Dukinfield Park</span>
      </div>
      </div>
      </aside>
      {/* Right Main Content (~75%) */}
      <main className="w-full lg:w-3/4 flex flex-col gap-14">
      {/* 01 Local Intro */}
      <section className="flex flex-col gap-4" id="overview">
      <div className="flex items-center gap-2 text-secondary text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider">
      <MapPin className="h-[18px] w-[18px]" />
      <span>Dukinfield Operational Zone</span>
      </div>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">
                    Mobile Tyre Replacement Engineered for Dukinfield Commuters &amp; Fleets
                  </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
      <p className="text-[15px] leading-[24px] text-gray-300">
                      Stranded with a blowout or flat tyre in Dukinfield does not mean losing half a working day waiting for recovery trucks or navigating queues at stationary depots. Direct Tyre Solutions operates custom-fitted Mercedes Sprinter mobile workshops that bring digital wheel balancers, high-precision bead breakers, and rapid puncture repair units directly to your car, van, or light commercial vehicle.
                    </p>
      <p className="text-[15px] leading-[24px] text-gray-300">
                      Whether you are pinned down in a commuter bay along the A627 King Street, loading orders across Globe Industrial Estate, or stuck on your driveway off Birch Lane or Cheetham Hill Road, our accredited technicians arrive on-site with your exact tyre specifications, fitting and digitally balancing on the spot.
                    </p>
      </div>
      </section>
      {/* 02 Services Section */}
      <section className="flex flex-col gap-6" id="services">
      <div className="flex flex-col gap-1">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary">Technical Capabilities</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">Mobile Solutions in Dukinfield</h2>
      </div>
      {/* Bordered List Container */}
      <div className="bg-primary/60 rounded-2xl p-6 shadow-xl flex flex-col gap-6">
      {/* Service Item 1 */}
      <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-5 p-4 rounded-xl bg-primary/80 hover:bg-primary/80 transition-colors">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Emergency roadside mobile tyre van with amber safety lighting on hard shoulder" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover shrink-0" />
      <div className="flex flex-col gap-1.5 grow">
      <div className="flex items-center gap-3">
      <span className="p-1.5 rounded-lg bg-accent text-white">
      <Siren className="h-[20px] w-[20px]" />
      </span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Emergency Roadside Replacement</h3>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-300">
                          High-urgency callouts for kerbed tyres, sudden deflation, and motorway verge punctures along the A627, A6018, and M67 approaches. High-vis beacons and Chapter 8 safety compliant.
                        </p>
      <div className="flex items-center gap-2 pt-1">
      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary">30-60 min rapid roadside response</span>
      </div>
      </div>
      </div>
      {/* Service Item 2 */}
      <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-5 p-4 rounded-xl bg-primary/80 hover:bg-primary/80 transition-colors">
      <Image src="/gallery-roadside-fitting.webp" alt="Precision tread depth inspection with digital gauge in workshop" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover shrink-0" />
      <div className="flex flex-col gap-1.5 grow">
      <div className="flex items-center gap-3">
      <span className="p-1.5 rounded-lg bg-accent text-white">
      <Wrench className="h-[20px] w-[20px]" />
      </span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">BS AU 159 Certified Puncture Repair</h3>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-300">
                          Thorough internal carcass inspection and combination mushroom plug-patch repairs for clean central tread nail or screw penetration, saving you the expense of a full tyre replacement.
                        </p>
      <div className="flex items-center gap-2 pt-1">
      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary">Permanent internal repair with pressure re-test</span>
      </div>
      </div>
      </div>
      {/* Service Item 3 */}
      <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-5 p-4 rounded-xl bg-primary/80 hover:bg-primary/80 transition-colors">
      <Image src="/gallery-home-callout.webp" alt="Automotive technician fitting wheel tyre with cordless impact wrench on customer driveway" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover shrink-0" />
      <div className="flex flex-col gap-1.5 grow">
      <div className="flex items-center gap-3">
      <span className="p-1.5 rounded-lg bg-accent text-white">
      <Wrench className="h-[20px] w-[20px]" />
      </span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Home &amp; Workplace Fitting</h3>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-300">
                          Pre-booked or same-day scheduled fittings on your driveway or workplace bay across Dukinfield, Ashton, and Hyde. Full balance and rubber valve stem refresh included on every fitting.
                        </p>
      <div className="flex items-center gap-2 pt-1">
      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary">Zero downtime — we work while you continue your day</span>
      </div>
      </div>
      </div>
      {/* Service Item 4 */}
      <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-5 p-4 rounded-xl bg-primary/80 hover:bg-primary/80 transition-colors">
      <Image src="/gallery-evening-callout.webp" alt="Professional UK mobile tyre van parked with emergency livery and tools visible" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover shrink-0" />
      <div className="flex flex-col gap-1.5 grow">
      <div className="flex items-center gap-3">
      <span className="p-1.5 rounded-lg bg-accent text-white">
      <Truck className="h-[20px] w-[20px]" />
      </span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Commercial Fleet &amp; Van Tyre Maintenance</h3>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-300">
                          Heavy-duty 8-ply, reinforced commercial C-rated tyres for courier vans, light haulage, and trade vehicles parked across industrial estates throughout Tameside.
                        </p>
      <div className="flex items-center gap-2 pt-1">
      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary">Fleet accounts &amp; batch service calls available</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 03 Roads & Areas Data Table */}
      <section className="flex flex-col gap-5" id="arteries">
      <div className="flex flex-col gap-1">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary">Corridor Dispatch Matrix</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">Roads &amp; Nearby Arteries Served</h2>
      <p className="text-[15px] leading-[24px] text-gray-300">
                      Strategically positioned vehicles enable our mobile units to cover Dukinfield and adjoining towns in under 45 minutes on average.
                    </p>
      </div>
      {/* Structured Table Panel */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden shadow-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 bg-primary px-6 py-4 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white uppercase">
      <div>Corridor / Key Road</div>
      <div>Transit Connection / Nearby Hub</div>
      </div>
      <div className="divide-y divide-primary/60 text-[15px] leading-[24px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 px-6 py-4 items-center bg-primary/60 hover:bg-primary/80 transition-colors">
      <span className="font-semibold text-white flex items-center gap-2">
      <TrafficCone className="text-secondary h-[18px] w-[18px]" />
                          A627 (King Street / Dukinfield)
                        </span>
      <span className="text-gray-300">Direct connection linking Ashton-under-Lyne to Hyde</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 px-6 py-4 items-center bg-primary-dark hover:bg-primary/80 transition-colors">
      <span className="font-semibold text-white flex items-center gap-2">
      <TrafficCone className="text-secondary h-[18px] w-[18px]" />
                          A6018 (Stamford Road / Mottram)
                        </span>
      <span className="text-gray-300">Major easterly link towards Stalybridge and Longdendale</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 px-6 py-4 items-center bg-primary/60 hover:bg-primary/80 transition-colors">
      <span className="font-semibold text-white flex items-center gap-2">
      <TrafficCone className="text-secondary h-[18px] w-[18px]" />
                          M67 Motorway (Junctions 1–3)
                        </span>
      <span className="text-gray-300">Fast transit artery serving Denton, Hyde &amp; M60 Motorway Ring</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 px-6 py-4 items-center bg-primary-dark hover:bg-primary/80 transition-colors">
      <span className="font-semibold text-white flex items-center gap-2">
      <Building2 className="text-secondary h-[18px] w-[18px]" />
                          Ashton-under-Lyne
                        </span>
      <span className="text-gray-300">Under 10 mins ETA via Park Parade &amp; Cavendish Street</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 px-6 py-4 items-center bg-primary/60 hover:bg-primary/80 transition-colors">
      <span className="font-semibold text-white flex items-center gap-2">
      <Building2 className="text-secondary h-[18px] w-[18px]" />
                          Stalybridge
                        </span>
      <span className="text-gray-300">Direct access via B6170 &amp; Rassbottom Street corridors</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 px-6 py-4 items-center bg-primary-dark hover:bg-primary/80 transition-colors">
      <span className="font-semibold text-white flex items-center gap-2">
      <Building2 className="text-secondary h-[18px] w-[18px]" />
                          Hyde &amp; Denton
                        </span>
      <span className="text-gray-300">Serviced in under 15 mins via Newton and Commercial Brow</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 px-6 py-4 items-center bg-primary/60 hover:bg-primary/80 transition-colors">
      <span className="font-semibold text-white flex items-center gap-2">
      <Building2 className="text-secondary h-[18px] w-[18px]" />
                          Audenshaw
                        </span>
      <span className="text-gray-300">Full west Tameside coverage via A635 Manchester Road</span>
      </div>
      </div>
      </div>
      </section>
      {/* 04 How It Works (Connected Gold Timeline) */}
      <section className="flex flex-col gap-6" id="dispatch-protocol">
      <div className="flex flex-col gap-1">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary">Five-Step Dispatch</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">How Our Mobile Fitting Works</h2>
      </div>
      <div className="relative pl-6 sm:pl-8 flex flex-col gap-6">
      {/* Connecting Gold Side Line */}
      <div className="absolute left-2.5 sm:left-3 top-3 bottom-3 w-1 bg-gradient-to-b from-secondary via-secondary to-accent rounded-full"></div>
      {/* Step 1 */}
      <div className="relative flex items-start gap-4">
      <div className="absolute -left-[30px] sm:-left-[34px] w-6 h-6 rounded-full bg-secondary text-primary flex items-center justify-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold shrink-0 shadow-md">
                        1
                      </div>
      <div className="bg-primary/60 p-4 rounded-xl grow">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Initiate Dispatch Call or WhatsApp</h3>
      <p className="text-[13px] leading-[18px] text-gray-300 mt-1">
                          Ring 07955 266 077 or message our emergency desk. Give us your vehicle registration, tyre size, and current Dukinfield location.
                        </p>
      </div>
      </div>
      {/* Step 2 */}
      <div className="relative flex items-start gap-4">
      <div className="absolute -left-[30px] sm:-left-[34px] w-6 h-6 rounded-full bg-secondary text-primary flex items-center justify-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold shrink-0 shadow-md">
                        2
                      </div>
      <div className="bg-primary/60 p-4 rounded-xl grow">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Stock &amp; Tyre Selection Confirmation</h3>
      <p className="text-[13px] leading-[18px] text-gray-300 mt-1">
                          We cross-match premium (Michelin, Pirelli, Continental), mid-range (Hankook, Kumho), or budget sizes instantly in our mobile inventory.
                        </p>
      </div>
      </div>
      {/* Step 3 */}
      <div className="relative flex items-start gap-4">
      <div className="absolute -left-[30px] sm:-left-[34px] w-6 h-6 rounded-full bg-secondary text-primary flex items-center justify-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold shrink-0 shadow-md">
                        3
                      </div>
      <div className="bg-primary/60 p-4 rounded-xl grow">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Van En Route with Live ETA</h3>
      <p className="text-[13px] leading-[18px] text-gray-300 mt-1">
                          A fitted mobile workshop is dispatched straight to your spot. We send an exact live arrival window so you know when our technician is on site.
                        </p>
      </div>
      </div>
      {/* Step 4 */}
      <div className="relative flex items-start gap-4">
      <div className="absolute -left-[30px] sm:-left-[34px] w-6 h-6 rounded-full bg-secondary text-primary flex items-center justify-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold shrink-0 shadow-md">
                        4
                      </div>
      <div className="bg-primary/60 p-4 rounded-xl grow">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">On-Site Precision Fitting &amp; Digital Balance</h3>
      <p className="text-[13px] leading-[18px] text-gray-300 mt-1">
                          Our technician safely jacks the vehicle, removes the damaged tyre, mounts the replacement, fits a new valve, and laser-balances the rim.
                        </p>
      </div>
      </div>
      {/* Step 5 */}
      <div className="relative flex items-start gap-4">
      <div className="absolute -left-[30px] sm:-left-[34px] w-6 h-6 rounded-full bg-secondary text-primary flex items-center justify-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold shrink-0 shadow-md">
                        5
                      </div>
      <div className="bg-primary/60 p-4 rounded-xl grow">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Contactless Payment &amp; Disposal</h3>
      <p className="text-[13px] leading-[18px] text-gray-300 mt-1">
                          Pay securely on-site via card or contactless terminal. We responsibly haul away your old casing for environmental recycling.
                        </p>
      </div>
      </div>
      </div>
      </section>
      {/* 05 Real Local Job Callout */}
      <div className="relative overflow-hidden bg-primary/80 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row gap-6 items-center">
      {/* Distinct Structural Gold Left Line indicator */}
      <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-secondary"></div>
      <Image src="/gallery-evening-home-visit.webp" alt="Automotive mobile tyre technician in hi-vis vest changing alloy wheel tyre" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full md:w-44 h-40 md:h-36 object-cover rounded-xl shrink-0 shadow-md" />
      <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
      <span className="px-2.5 py-0.5 rounded-full bg-secondary/20 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase font-bold">
                        Verified Local Dispatch
                      </span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-300">Globe Industrial Estate</span>
      </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">
                      Vauxhall Vivaro Delivery Van — Nail Puncture
                    </h3>
      <p className="text-[15px] leading-[24px] text-gray-300">
                      “Contract courier stranded during morning delivery wave near Globe Lane. Direct Tyre Solutions arrived in 24 minutes with a commercial 205/65 R16 tyre. Fully fitted, balanced, and back on delivery route in 22 minutes.”
                    </p>
      <div className="flex items-center gap-4 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase pt-1">
      <span>Total Downtime: 46 Mins</span>
      <span>•</span>
      <span>Torqued to OEM Specs</span>
      </div>
      </div>
      </div>
      {/* 06 FAQ Accordion */}
      <section className="flex flex-col gap-5" id="faq">
      <div className="flex flex-col gap-1">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary">Frequently Asked Questions</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">Dukinfield Mobile Tyre FAQ</h2>
      </div>
      <div className="flex flex-col gap-3" id="faq-accordion">
      {/* FAQ Item 1 */}
      <details className="bg-primary/60 rounded-xl overflow-hidden group"><summary className="w-full flex items-center justify-between p-5 text-left font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white hover:bg-primary/80 transition-colors cursor-pointer list-none">
      <span>How quickly can a mobile tyre van reach me in Dukinfield?</span>
      <ChevronDown className="text-secondary transform transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-5 pb-5 pt-1 text-gray-300 text-[15px] leading-[24px]">
                        Because our mobile tyre units constantly patrol active Tameside routes near the A627 and M67 corridors, our typical emergency arrival time in Dukinfield is between 30 and 55 minutes, depending on the exact traffic density around Park Parade or Newton.
                      </div></details>
      {/* FAQ Item 2 */}
      <details className="bg-primary/60 rounded-xl overflow-hidden group"><summary className="w-full flex items-center justify-between p-5 text-left font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white hover:bg-primary/80 transition-colors cursor-pointer list-none">
      <span>Can you fit tyres on commercial vans and light trucks at Globe Industrial Park?</span>
      <ChevronDown className="text-secondary transform transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-5 pb-5 pt-1 text-gray-300 text-[15px] leading-[24px]">
                        Yes. Our mobile workshop vans are fully outfitted with commercial heavy-duty bead breakers and jacks capable of handling Ford Transits, Mercedes Sprinters, Vauxhall Vivaros, and other trade vehicles without requiring them to visit a garage.
                      </div></details>
      {/* FAQ Item 3 */}
      <details className="bg-primary/60 rounded-xl overflow-hidden group"><summary className="w-full flex items-center justify-between p-5 text-left font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white hover:bg-primary/80 transition-colors cursor-pointer list-none">
      <span>What if I do not have locking wheel nut keys?</span>
      <ChevronDown className="text-secondary transform transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-5 pb-5 pt-1 text-gray-300 text-[15px] leading-[24px]">
                        Our vans carry specialized, non-destructive locking wheel nut removal toolkits. If your key is stripped, damaged, or lost, please let our dispatcher know on your initial call so the technician brings the exact extraction tooling.
                      </div></details>
      {/* FAQ Item 4 */}
      <details className="bg-primary/60 rounded-xl overflow-hidden group"><summary className="w-full flex items-center justify-between p-5 text-left font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white hover:bg-primary/80 transition-colors cursor-pointer list-none">
      <span>Do you supply both budget and premium tyre brands on mobile calls?</span>
      <ChevronDown className="text-secondary transform transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-5 pb-5 pt-1 text-gray-300 text-[15px] leading-[24px]">
                        We carry comprehensive stock ranging from dependable economy options for unexpected budget squeezes to premium manufacturer-approved tyres from Michelin, Continental, Bridgestone, Pirelli, Goodyear, and Dunlop.
                      </div></details>
      {/* FAQ Item 5 */}
      <details className="bg-primary/60 rounded-xl overflow-hidden group"><summary className="w-full flex items-center justify-between p-5 text-left font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white hover:bg-primary/80 transition-colors cursor-pointer list-none">
      <span>Can you fix a puncture on my home driveway instead of replacing the tyre?</span>
      <ChevronDown className="text-secondary transform transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-5 pb-5 pt-1 text-gray-300 text-[15px] leading-[24px]">
                        Yes, if the puncture is within the central 70% tread area and meets British Standard BS AU 159 criteria (no sidewall cracking, run-flat structural breakdown, or previous improper repairs), our technician will perform a cost-effective plug-patch repair on your drive.
                      </div></details>
      </div>
      </section>
      </main>
      </div>
      </div>
      </section>
      {/* Final CTA Panel */}
      <section className="w-full bg-primary-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-r from-primary/60 to-primary/80 p-8 sm:p-12 lg:p-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
      {/* Left side: Urgent Copy & Status Badge */}
      <div className="flex flex-col gap-4 max-w-2xl">
      <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-secondary/20 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase font-bold">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                Direct Dispatch Guaranteed
              </div>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">
                Stuck with a Flat Tyre in Dukinfield? Our Mobile Workshop is Nearby.
              </h2>
      <p className="text-[18px] leading-[28px] text-gray-300">
                Call our 24-hour response team right now. We confirm your tyre size, give an accurate guaranteed arrival time, and dispatch a fully equipped van to your exact location.
              </p>
      </div>
      {/* Right side: Large Pill Gold Button & Actions */}
      <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-4 w-full sm:w-auto shrink-0">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-secondary text-primary font-heading text-[30px] leading-[38px] font-bold uppercase tracking-wider shadow-2xl hover:bg-secondary-hover hover:scale-105 active:scale-95 transition-all duration-200" href="tel:07955266077">
      <PhoneCall className="h-[30px] w-[30px]" />
                Call 07955 266 077
              </a>
      <span className="text-gray-300 text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-center">
                Open 24 Hours • 7 Days a Week • No Depot Visit Needed
              </span>
      </div>
      </div>
      </section>
      {/* Interactive Accordion Handler Script */}
    </main>
  );
}
