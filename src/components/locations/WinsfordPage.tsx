import Image from "next/image";
import { CheckCircle2, ChevronRight, Clock, Headphones, HelpCircle, List, MessageCircle, Navigation, PhoneCall, Route, Search, ShieldCheck, Truck, Warehouse, Wrench, Zap } from "lucide-react";

export default function WinsfordPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-primary-dark">
      {/* Visual Backdrop with Real Roadside Emergency Response */}
      <div className="relative absolute inset-0 z-0">
      <Image src="/hero-section-images-936x527.webp" alt="A yellow and navy Direct Tyre Solutions emergency response van parked safely on a wet UK rural roadside at dusk, rear doors open revealing illuminated tyre fitting equipment, compressor, and replacement tyres, with a technician in high-visibility gear working on a modern saloon car." fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover object-center opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/85 via-primary-dark/90 to-primary-dark"></div>
      </div>
      {/* Live Status Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
      <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-primary/80 backdrop-blur-md shadow-sm">
      <span className="relative flex h-2.5 w-2.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
      </span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider">Live Cheshire Patrol: 2 Response Vans Active in Winsford &amp; Northwich Hub</span>
      </div>
      </div>
      {/* Centered Hero Pitch */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16 text-center flex flex-col items-center">
      <span className="inline-block text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-gray-400 tracking-widest uppercase mb-3">Cheshire Rapid Response Unit</span>
      <h1 className="font-heading text-[36px] leading-[42px] tracking-[-0.01em] font-black md:text-[56px] md:leading-[64px] md:tracking-[-0.02em] md:font-black text-white mb-6 max-w-4xl">
              24/7 Mobile Tyre Fitting in <span className="text-secondary">Winsford</span>
      </h1>
      <p className="text-[18px] leading-[28px] text-gray-400 max-w-3xl mb-10 text-balance">
              Dedicated residential driveway, historic town-centre, and rural roadside mobile tyre repairs across Winsford, Barony Park, A54, and A533 corridors.
            </p>
      {/* High-Priority CTAs */}
      <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold hover:brightness-110 active:scale-95 transition shadow-lg shadow-primary-container/20" href="tel:08009992470">
      <PhoneCall className="h-[20px] w-[20px]" fill="currentColor" strokeWidth={0} />
                Call 0800 999 2470
              </a>
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-accent text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold hover:bg-accent/90 active:scale-95 transition shadow-md" href="https://wa.me/448009992470" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="h-[20px] w-[20px]" />
                WhatsApp Dispatch
              </a>
      </div>
      {/* Quick Trust Badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-12 w-full max-w-4xl pt-8 border-t-0">
      <div className="p-3 rounded-xl bg-primary/80 backdrop-blur-sm text-left">
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Target Arrival</p>
      <p className="font-heading text-[20px] leading-[26px] font-bold text-white">30–45 Mins</p>
      </div>
      <div className="p-3 rounded-xl bg-primary/80 backdrop-blur-sm text-left">
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Service Window</p>
      <p className="font-heading text-[20px] leading-[26px] font-bold text-secondary">24/7 / 365 Days</p>
      </div>
      <div className="p-3 rounded-xl bg-primary/80 backdrop-blur-sm text-left">
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Alloy Protection</p>
      <p className="font-heading text-[20px] leading-[26px] font-bold text-white">No-Contact Kit</p>
      </div>
      <div className="p-3 rounded-xl bg-primary/80 backdrop-blur-sm text-left">
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Stock Handled</p>
      <p className="font-heading text-[20px] leading-[26px] font-bold text-white">Car, 4x4, EV, Van</p>
      </div>
      </div>
      </div>
      </section>
      {/* TWO-TONE SIDEBAR + CONTENT SECTION */}
      <section className="w-full bg-primary-dark py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* LEFT SIDEBAR CONTENTS RAIL (Sticky) */}
      <aside className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-6">
      {/* Table of Contents Module */}
      <div className="p-6 rounded-2xl bg-primary/80 shadow-md">
      <div className="flex items-center gap-2 mb-4 text-secondary">
      <List className="h-[18px] w-[18px]" />
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider">Quick Navigation</span>
      </div>
      <nav className="flex flex-col space-y-2">
      <a className="flex items-center justify-between p-3 rounded-xl bg-primary/60 text-white hover:bg-primary hover:text-secondary transition group" href="#overview">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center gap-3">
      <span className="text-gray-400 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">01</span>
                        Overview &amp; Territory
                      </span>
      <ChevronRight className="text-gray-400 group-hover:translate-x-1 transition h-[18px] w-[18px]" />
      </a>
      <a className="flex items-center justify-between p-3 rounded-xl bg-primary/60 text-white hover:bg-primary hover:text-secondary transition group" href="#services">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center gap-3">
      <span className="text-gray-400 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">02</span>
                        Fitting Services
                      </span>
      <ChevronRight className="text-gray-400 group-hover:translate-x-1 transition h-[18px] w-[18px]" />
      </a>
      <a className="flex items-center justify-between p-3 rounded-xl bg-primary/60 text-white hover:bg-primary hover:text-secondary transition group" href="#corridors">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center gap-3">
      <span className="text-gray-400 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">03</span>
                        Roads &amp; Coverage Areas
                      </span>
      <ChevronRight className="text-gray-400 group-hover:translate-x-1 transition h-[18px] w-[18px]" />
      </a>
      <a className="flex items-center justify-between p-3 rounded-xl bg-primary/60 text-white hover:bg-primary hover:text-secondary transition group" href="#process">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center gap-3">
      <span className="text-gray-400 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">04</span>
                        5-Step Emergency Flow
                      </span>
      <ChevronRight className="text-gray-400 group-hover:translate-x-1 transition h-[18px] w-[18px]" />
      </a>
      <a className="flex items-center justify-between p-3 rounded-xl bg-primary/60 text-white hover:bg-primary hover:text-secondary transition group" href="#dispatch-log">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center gap-3">
      <span className="text-gray-400 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">05</span>
                        Recent Winsford Job
                      </span>
      <ChevronRight className="text-gray-400 group-hover:translate-x-1 transition h-[18px] w-[18px]" />
      </a>
      <a className="flex items-center justify-between p-3 rounded-xl bg-primary/60 text-white hover:bg-primary hover:text-secondary transition group" href="#faq">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center gap-3">
      <span className="text-gray-400 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">06</span>
                        Common Questions
                      </span>
      <ChevronRight className="text-gray-400 group-hover:translate-x-1 transition h-[18px] w-[18px]" />
      </a>
      </nav>
      </div>
      {/* Mini Phone CTA Box */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-primary to-primary/60 shadow-lg">
      <div className="flex items-center gap-2 mb-2">
      <span className="inline-flex p-2 rounded-full bg-secondary text-primary">
      <Headphones className="h-[18px] w-[18px]" />
      </span>
      <div>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider">Direct Dispatch Desk</p>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Need assistance now?</p>
      </div>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-2 mb-4">
                    Quote your tyre size (e.g. 225/45 R17) or car registration. Technician rolling in under 10 minutes.
                  </p>
      <a className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold hover:brightness-105 active:scale-95 transition" href="tel:08009992470">
      <PhoneCall className="h-[18px] w-[18px]" />
                    0800 999 2470
                  </a>
      </div>
      {/* Active Patrol Radar Callout */}
      <div className="p-5 rounded-2xl bg-primary/60 shadow-sm flex items-start gap-4">
      <Navigation className="text-accent h-[24px] w-[24px] mt-0.5" />
      <div>
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Unit #CH-04 Patrolling A54</p>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">
                      Equipped with pneumatic jacks, Corghi touchless bead breakers, and digital wheel balancers. Suitable for narrow town lanes and A-road laybys.
                    </p>
      </div>
      </div>
      </aside>
      {/* RIGHT WIDER COLUMN */}
      <main className="lg:col-span-8 flex flex-col gap-12">
      {/* 01 LOCAL INTRO / OVERVIEW */}
      <section className="p-8 rounded-2xl bg-primary/80 shadow-md" id="overview">
      <div className="flex items-center gap-2 mb-3">
      <span className="px-2.5 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">Cheshire West &amp; Chester Border</span>
      <span className="text-gray-400 text-[13px] leading-[18px]">Local Coverage</span>
      </div>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white mb-4">
                    Specialist Tyre Assistance Across Historic &amp; Rural Winsford
                  </h2>
      <p className="text-[15px] leading-[24px] text-gray-400 mb-4">
                    Direct Tyre Solutions operates a fleet of heavy-duty, self-sufficient mobile tyre fitting vans designed specifically to address the unique geography of South Cheshire. From navigating Winsford’s historic cobbled corners around Churchyard Side and Welsh Row, to tight Barony Road residential driveways and high-speed A54 bypass routes, our technicians deploy zero-rim-scuff equipment and comprehensive alloy protection on every callout.
                  </p>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    Whether you’ve suffered an unexpected pothole blowout on the unlit rural stretches toward Hartford, discovered a flat in the morning before your commute, or require urgent commercial van repair, our 24/7 mobile units arrive directly at your exact coordinates with the replacement tyre ready to install.
                  </p>
      {/* Local Stats Cluster */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 bg-primary-dark/50 rounded-xl p-4">
      <div>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Average Winsford Arrival</p>
      <p className="font-heading text-[30px] leading-[38px] font-bold text-secondary font-heading">32 Mins</p>
      <p className="text-[13px] leading-[18px] text-gray-400">Live telemetry tracking</p>
      </div>
      <div>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Driveway Clearances</p>
      <p className="font-heading text-[30px] leading-[38px] font-bold text-white font-heading">100%</p>
      <p className="text-[13px] leading-[18px] text-gray-400">Low-profile rubber jacks</p>
      </div>
      <div>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Stock Range</p>
      <p className="font-heading text-[30px] leading-[38px] font-bold text-white font-heading">14&quot; to 23&quot;</p>
      <p className="text-[13px] leading-[18px] text-gray-400">Run-flats &amp; reinforced XL</p>
      </div>
      </div>
      </section>
      {/* 02 SERVICES LIST WITH PHOTO THUMBNAILS */}
      <section className="p-8 rounded-2xl bg-primary/60 shadow-md" id="services">
      <div className="flex items-center justify-between mb-6">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider">Comprehensive Van Capabilities</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white mt-1">Mobile Tyre Services in Winsford</h2>
      </div>
      <Wrench className="text-gray-400 h-[28px] w-[28px]" />
      </div>
      <div className="flex flex-col gap-4">
      {/* Service Row 1 */}
      <div className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-primary/80 transition hover:bg-primary">
      <div className="relative w-full sm:w-28 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-primary-dark">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="A professional tyre technician kneeling on a residential brick driveway using an electric impact driver on a silver alloy wheel, roadside service van visible in background." fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow text-left">
      <div className="flex items-center gap-2">
      <Zap className="text-secondary h-[20px] w-[20px]" />
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Emergency Roadside Tyre Replacement</h3>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">
                          Rapid callout for sudden blowouts, sidewall gouges, and debris impacts on the A54, A533, and Cheshire lanes. Safe beacon cordons established.
                        </p>
      </div>
      <div className="flex-shrink-0">
      <span className="px-3 py-1 rounded-full bg-primary-dark text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold">24/7 Priority</span>
      </div>
      </div>
      {/* Service Row 2 */}
      <div className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-primary/80 transition hover:bg-primary">
      <div className="relative w-full sm:w-28 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-primary-dark">
      <Image src="/gallery-roadside-fitting.webp" alt="Brand new tyre tread inspection" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow text-left">
      <div className="flex items-center gap-2">
      <Wrench className="text-secondary h-[20px] w-[20px]" />
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Driveway &amp; Home Fitting by Appointment</h3>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">
                          No waiting around tyre shops. We fit your premium or budget tyres at your home in Barony, Stapeley, or Willaston while you work.
                        </p>
      </div>
      <div className="flex-shrink-0">
      <span className="px-3 py-1 rounded-full bg-primary-dark text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold">Bookable Slots</span>
      </div>
      </div>
      {/* Service Row 3 */}
      <div className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-primary/80 transition hover:bg-primary">
      <div className="relative w-full sm:w-28 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-primary-dark">
      <Image src="/gallery-home-callout.webp" alt="Close up photograph of a tyre puncture repair technician inserting a rubber vulcanizing plug into the tread of a car tyre with workshop tools on mobile service bench." fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow text-left">
      <div className="flex items-center gap-2">
      <Wrench className="text-secondary h-[20px] w-[20px]" />
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">BS AU 159 Minor Puncture Repairs</h3>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">
                          If safe to repair under British Standard guidelines, our technician plugs and patches tread punctures internally, saving you the cost of a new tyre.
                        </p>
      </div>
      <div className="flex-shrink-0">
      <span className="px-3 py-1 rounded-full bg-primary-dark text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold">Economical</span>
      </div>
      </div>
      {/* Service Row 4 */}
      <div className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-primary/80 transition hover:bg-primary">
      <div className="relative w-full sm:w-28 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-primary-dark">
      <Image src="/gallery-evening-callout.webp" alt="Dual mobile tyre service vans with safety amber roof strobes parked on highway hard shoulder supporting a broken down saloon vehicle under evening sky." fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow text-left">
      <div className="flex items-center gap-2">
      <Truck className="text-secondary h-[20px] w-[20px]" />
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Commercial Van &amp; Fleet Turnaround</h3>
      </div>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">
                          Keep your business rolling. We carry 8-ply, reinforced, and high-load commercial tyres for Ford Transit, Mercedes Sprinter, and Vauxhall Vivaro.
                        </p>
      </div>
      <div className="flex-shrink-0">
      <span className="px-3 py-1 rounded-full bg-primary-dark text-accent text-[11px] leading-[14px] tracking-[0.06em] font-bold">High-Load</span>
      </div>
      </div>
      </div>
      </section>
      {/* 03 ROADS & AREAS (Data Table Panel) */}
      <section className="p-8 rounded-2xl bg-primary/80 shadow-md" id="corridors">
      <div className="flex items-center justify-between mb-4">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-wider">Cheshire Transit Hubs</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white mt-1">Roads &amp; Coverage Corridors</h2>
      </div>
      <Route className="text-secondary h-[24px] w-[24px]" />
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400 mb-6">
                    Our mobile units operate across Winsford and its surrounding commuter arteries with dedicated highway response equipment.
                  </p>
      {/* Responsive Data Table */}
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-primary text-gray-400 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <th className="py-3 px-4 rounded-l-lg">Corridor / Key Road</th>
      <th className="py-3 px-4">Transit Connection / Nearby Hub</th>
      <th className="py-3 px-4 rounded-r-lg">ETA Target</th>
      </tr>
      </thead>
      <tbody className="divide-y-0 text-white text-[13px] leading-[18px]">
      <tr className="hover:bg-primary/60 transition">
      <td className="py-3.5 px-4 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                            A54 Chester / Winsford Bypass
                          </td>
      <td className="py-3.5 px-4 text-gray-400">Connecting Barony Park, Hartford &amp; Calveley</td>
      <td className="py-3.5 px-4 font-heading text-secondary">25 - 35 mins</td>
      </tr>
      <tr className="hover:bg-primary/60 transition bg-primary/60">
      <td className="py-3.5 px-4 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                            A530 Shavington Link
                          </td>
      <td className="py-3.5 px-4 text-gray-400">Direct express route between Winsford &amp; M6 J16</td>
      <td className="py-3.5 px-4 font-heading text-secondary">20 - 30 mins</td>
      </tr>
      <tr className="hover:bg-primary/60 transition">
      <td className="py-3.5 px-4 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                            A533 Whitchurch Road
                          </td>
      <td className="py-3.5 px-4 text-gray-400">Serving South Winsford, Aston, Wrenbury &amp; Tarporley</td>
      <td className="py-3.5 px-4 font-heading text-secondary">30 - 45 mins</td>
      </tr>
      <tr className="hover:bg-primary/60 transition bg-primary/60">
      <td className="py-3.5 px-4 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-accent"></span>
                            Northwich &amp; Haslington
                          </td>
      <td className="py-3.5 px-4 text-gray-400">Commercial hubs, railway quarters, and B5071</td>
      <td className="py-3.5 px-4 font-heading text-white">25 - 40 mins</td>
      </tr>
      <tr className="hover:bg-primary/60 transition">
      <td className="py-3.5 px-4 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-accent"></span>
                            Middlewich &amp; Northwich
                          </td>
      <td className="py-3.5 px-4 text-gray-400">Industrial estates and A54 connecting corridor</td>
      <td className="py-3.5 px-4 font-heading text-white">35 - 50 mins</td>
      </tr>
      </tbody>
      </table>
      </div>
      </section>
      {/* 04 5-STEP HOW-IT-WORKS PROCESS */}
      <section className="p-8 rounded-2xl bg-primary/60 shadow-md" id="process">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider">No Workshop Required</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white mt-1 mb-8">Our 5-Step Mobile Process</h2>
      <div className="relative flex flex-col space-y-6">
      {/* Connecting Vertical Indicator Line */}
      <div className="absolute left-4 top-2 bottom-6 w-0.5 bg-primary"></div>
      {/* Step 1 */}
      <div className="relative flex items-start gap-4">
      <div className="w-8 h-8 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center flex-shrink-0 z-10 shadow-sm">
                        1
                      </div>
      <div className="flex-grow pt-0.5">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Emergency Call or WhatsApp</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">
                          Contact our South Cheshire desk on <a className="text-secondary hover:underline" href="tel:08009992470">0800 999 2470</a>. Provide your vehicle registration number or tyre sidewall size and current location.
                        </p>
      </div>
      </div>
      {/* Step 2 */}
      <div className="relative flex items-start gap-4">
      <div className="w-8 h-8 rounded-full bg-primary text-gray-400 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center flex-shrink-0 z-10">
                        2
                      </div>
      <div className="flex-grow pt-0.5">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Tyre Match &amp; Fixed Quotation</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">
                          We confirm the exact replacement tyre required from our localized stock (budget, mid-range, premium, run-flat) and state a guaranteed total price.
                        </p>
      </div>
      </div>
      {/* Step 3 */}
      <div className="relative flex items-start gap-4">
      <div className="w-8 h-8 rounded-full bg-primary text-gray-400 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center flex-shrink-0 z-10">
                        3
                      </div>
      <div className="flex-grow pt-0.5">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Van Dispatch &amp; Live Tracking</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">
                          The nearest active patrol vehicle navigates to your parked position with complete safety beacon protocols activated.
                        </p>
      </div>
      </div>
      {/* Step 4 */}
      <div className="relative flex items-start gap-4">
      <div className="w-8 h-8 rounded-full bg-primary text-gray-400 font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center flex-shrink-0 z-10">
                        4
                      </div>
      <div className="flex-grow pt-0.5">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Precision Fitting &amp; Digital Balancing</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">
                          Tyre replaced using alloy-safe bead clamps, new valves installed, and wheel balanced inside the mobile van. Old casing responsibly disposed of.
                        </p>
      </div>
      </div>
      {/* Step 5 */}
      <div className="relative flex items-start gap-4">
      <div className="w-8 h-8 rounded-full bg-accent text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center flex-shrink-0 z-10">
                        5
                      </div>
      <div className="flex-grow pt-0.5">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Torque Check &amp; Contactless Payment</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">
                          Wheel nuts torqued to manufacturer specification with calibrated wrench. Secure mobile card reader payment with instant VAT receipt sent via email.
                        </p>
      </div>
      </div>
      </div>
      </section>
      {/* 05 REAL JOB LOG CALLOUT */}
      <section className="p-6 md:p-8 rounded-2xl bg-primary/80 shadow-lg relative overflow-hidden" id="dispatch-log">
      {/* Decorative Left Border Accent */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-secondary"></div>
      <div className="flex flex-col md:flex-row items-center gap-6 pl-2">
      <div className="relative w-full md:w-44 h-32 rounded-xl overflow-hidden flex-shrink-0 bg-primary-dark">
      <Image src="/gallery-evening-home-visit.webp" alt="Close up photograph of a tyre puncture repair technician inserting a rubber vulcanizing plug into the tread of a car tyre with workshop tools on mobile service bench." fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow">
      <div className="flex flex-wrap items-center gap-2 mb-2">
      <span className="px-2.5 py-0.5 rounded-full bg-secondary/20 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold font-bold">Verified Incident Log</span>
      <span className="text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold">#NT-5201 • Welsh Row, Winsford</span>
      </div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mb-2">
                        Range Rover Evoque • 235/55 R19 Pinch Flat
                      </h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                        Driver clipped a stone kerb on Welsh Row near the river bridge causing an immediate sidewall tear. Our technician arrived in 26 minutes, mounted a Pirelli Scorpion Verde All-Season, precision-balanced the wheel, and had the motorist safely back on the road before evening rush.
                      </p>
      <div className="flex items-center gap-4 mt-3 text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <span>Response Time: <strong>26 Mins</strong></span>
      <span>•</span>
      <span>Total Job Time: <strong>19 Mins</strong></span>
      <span>•</span>
      <span>Alloy Scuffs: <strong>Zero</strong></span>
      </div>
      </div>
      </div>
      </section>
      {/* 06 FAQ SECTION */}
      <section className="p-8 rounded-2xl bg-primary/60 shadow-md" id="faq">
      <div className="flex items-center justify-between mb-6">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider">Help &amp; Clarification</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white mt-1">Frequently Asked Questions</h2>
      </div>
      <HelpCircle className="text-gray-400 h-[24px] w-[24px]" />
      </div>
      <div className="space-y-4">
      {/* Q1 */}
      <div className="p-4 rounded-xl bg-primary/80">
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-center justify-between">
                        How fast can you reach a vehicle broken down in Winsford?
                        <Clock className="text-secondary h-[18px] w-[18px]" />
      </h4>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-2">
                        Our average arrival across the CW5 postcode (including Barony Park, Stapeley, and the town center) is between 25 and 40 minutes, depending on traffic along the A54 or A530.
                      </p>
      </div>
      {/* Q2 */}
      <div className="p-4 rounded-xl bg-primary/80">
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-center justify-between">
                        Can you fit tyres on narrow residential streets or private driveways?
                        <Warehouse className="text-secondary h-[18px] w-[18px]" />
      </h4>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-2">
                        Yes. Our vans are self-contained with internal silent inverter generators and ultra-slim pneumatic jacking gear, allowing us to safely operate in tight driveways, apartment carparks, and narrow historic thoroughfares without blocking traffic.
                      </p>
      </div>
      {/* Q3 */}
      <div className="p-4 rounded-xl bg-primary/80">
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-center justify-between">
                        What tyre brands do you keep in stock for emergency dispatch?
                        <ShieldCheck className="text-secondary h-[18px] w-[18px]" />
      </h4>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-2">
                        We stock Michelin, Continental, Goodyear, Pirelli, and Bridgestone, as well as dependable mid-range brands (Avon, Kumho, Nexen) and budget options across standard, run-flat, EV-specific, and commercial van specifications.
                      </p>
      </div>
      {/* Q4 */}
      <div className="p-4 rounded-xl bg-primary/80">
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white flex items-center justify-between">
                        What if I don&apos;t know my exact tyre size?
                        <Search className="text-secondary h-[18px] w-[18px]" />
      </h4>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-2">
                        Simply provide your vehicle registration when you call us. Our dispatch system cross-references the DVLA database to confirm your manufacturer-approved wheel dimensions and load ratings instantly.
                      </p>
      </div>
      </div>
      </section>
      </main>
      </div>
      </div>
      </section>
      {/* FINAL CTA: TWO-COLUMN FULL-WIDTH BOTTOM PANEL */}
      <section className="w-full bg-primary-dark py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-8 md:p-12 rounded-2xl bg-primary/80 shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/* Left Column: Text & Reasons */}
      <div className="lg:col-span-8">
      <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider mb-4">
                    Immediate Assistance Standing By
                  </span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white mb-4">
                    Stuck with a Flat in Winsford or on the A54?
                  </h2>
      <p className="text-[18px] leading-[28px] text-gray-400 mb-6 max-w-2xl">
                    Don&apos;t risk rim damage or roadside danger. Call our emergency Cheshire dispatch team right now for instant tyre replacement delivered directly to your vehicle.
                  </p>
      {/* Three Assurance Bullet Badges */}
      <div className="flex flex-wrap gap-4 text-white">
      <div className="flex items-center gap-2">
      <CheckCircle2 className="text-secondary h-[18px] w-[18px]" />
      <span className="text-[13px] leading-[18px]">30-45 Minute Rapid Target</span>
      </div>
      <div className="flex items-center gap-2">
      <CheckCircle2 className="text-secondary h-[18px] w-[18px]" />
      <span className="text-[13px] leading-[18px]">Calibrated Wheel Balancing</span>
      </div>
      <div className="flex items-center gap-2">
      <CheckCircle2 className="text-secondary h-[18px] w-[18px]" />
      <span className="text-[13px] leading-[18px]">Contactless Mobile Card Payments</span>
      </div>
      </div>
      </div>
      {/* Right Column: Priority Dispatch Buttons */}
      <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center items-stretch">
      <a className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-secondary text-primary font-heading text-[20px] leading-[26px] font-bold hover:brightness-110 active:scale-95 transition shadow-xl shadow-primary-container/20 text-center" href="tel:08009992470">
      <PhoneCall className="h-[24px] w-[24px]" fill="currentColor" strokeWidth={0} />
                    Call 0800 999 2470
                  </a>
      <a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold hover:bg-primary transition text-center" href="https://wa.me/448009992470" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="text-gray-400 h-[20px] w-[20px]" />
                    WhatsApp Live Dispatch
                  </a>
      </div>
      </div>
      </div>
      </div>
      </section>
    </main>
  );
}
