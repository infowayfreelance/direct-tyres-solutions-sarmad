import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Clock, HelpCircle, KeyRound, MapPin, MessageCircle, PhoneCall, Route, ShieldCheck, Wrench, Zap } from "lucide-react";

export default function WythenshawePage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* HERO SECTION: SPLIT SCREEN (60% / 40%) */}
      <section className="w-full bg-primary text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      {/* Left Column: Content (60%) */}
      <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-dark/80 border border-white/10 w-fit">
      <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary animate-ping"></span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary">Time-Critical Emergency Response</span>
      </div>
      <h1 className="text-[36px] leading-[42px] tracking-[-0.01em] font-black lg:text-[56px] lg:leading-[64px] lg:tracking-[-0.02em] lg:font-black font-heading text-white">
                  24/7 Mobile Tyre Fitting in Wythenshawe
                </h1>
      <p className="text-[18px] leading-[28px] text-slate-300 max-w-2xl">
                  Stranded on your way to Manchester Airport or caught with a hazardous blowout on the M56? Our dedicated local tyre technicians provide rapid roadside puncture replacements, run-flat repairs, and wheel installations across Wythenshawe and South Manchester in under 45 minutes.
                </p>
      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
      <a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary hover:bg-secondary-hover text-primary font-bold text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-transform active:scale-95 shadow-xl" href="tel:07955266077">
      <PhoneCall className="h-6 w-6" fill="currentColor" strokeWidth={0} />
      <span>Call Now 07955 266 077</span>
      </a>
      <a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-all active:scale-95 shadow-lg" href="https://wa.me/448009992470" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="h-6 w-6" />
      <span>WhatsApp Dispatch</span>
      </a>
      </div>
      {/* Trust Badges */}
      <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/10">
      <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center text-accent">
      <Zap className="h-5 w-5" />
      </div>
      <div>
      <p className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-white">30–45 Mins</p>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-slate-400">Average Arrival</p>
      </div>
      </div>
      <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center text-accent">
      <Clock className="h-5 w-5" />
      </div>
      <div>
      <p className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-white">24/7 / 365</p>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-slate-400">Roadside &amp; Home</p>
      </div>
      </div>
      <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
      <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center text-accent">
      <ShieldCheck className="h-5 w-5" />
      </div>
      <div>
      <p className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-white">Fixed Quotes</p>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-slate-400">Zero Hidden Costs</p>
      </div>
      </div>
      </div>
      </div>
      {/* Right Column: Visual Panel (40%) */}
      <div className="lg:col-span-5 relative w-full h-[380px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-primary-dark">
      <Image src="/hero-section-images-936x527.webp" alt="Mobile tyre fitting response van active on roadside in Wythenshawe near M56 corridor" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover object-center" />
      {/* Floating Status Badge */}
      <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-primary-dark/90 backdrop-blur-md border border-white/15 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3">
      <span className="relative flex h-3.5 w-3.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
      </span>
      <div className="flex flex-col">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase text-secondary">M56 Rapid Response Unit</span>
      <span className="text-[13px] leading-[18px] text-slate-200">On Patrol • Active near Junction 4</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* LIVE STATUS BAR */}
      <aside className="w-full bg-primary-dark border-y border-white/10 py-3.5 px-4 sm:px-8">
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
      <div className="flex items-center gap-3">
      <span className="relative flex h-3 w-3 shrink-0">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
      </span>
      <p className="text-[13px] leading-[18px] text-slate-200">
      <strong className="text-white font-semibold">Live Status:</strong> Mobile technician patrolling M56 / M60 &amp; Manchester Airport corridor now • Typical arrival 30-40 mins
              </p>
      </div>
      <a className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary hover:underline whitespace-nowrap" href="tel:07955266077">
              Emergency Line: 07955 266 077 →
            </a>
      </div>
      </aside>
      {/* LOCAL INTRO & CONTEXT */}
      <section className="w-full bg-primary-dark py-14 lg:py-20 text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl space-y-6">
      <div className="inline-flex items-center gap-2 text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider">
      <MapPin className="h-4 w-4" />
      <span>Wythenshawe &amp; Manchester Airport Corridor</span>
      </div>
      <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold font-heading text-white">
                Don&apos;t Miss Your Flight or Get Stranded on the Motorway
              </h2>
      <p className="text-[18px] leading-[28px] text-slate-300">
                Wythenshawe sits at the most critical transit crossroad in Greater Manchester. Connecting the busy M56, M60 orbital, and Manchester Airport’s high-frequency terminals, tyre emergencies here demand immediate, hyper-localized intervention. Whether you hit debris approaching Junction 4 or discovered a sudden flat tyre while leaving the Airport Meet &amp; Greet, waiting hours for standard recovery is not an option.
              </p>
      <p className="text-[15px] leading-[24px] text-slate-300">
                Our fully equipped mobile tyre vans carry commercial-grade bead breakers, precision wheel balancers, and an extensive stock of standard, run-flat, and performance tyres (Michelin, Pirelli, Continental, Goodyear, and quality budget alternatives). We handle the fitting safely where your vehicle sits—at the hard shoulder, office car park, or your home driveway.
              </p>
      </div>
      </div>
      </section>
      {/* SERVICES: HORIZONTAL SCROLL-SNAP ROW */}
      <section className="w-full bg-primary-dark py-16 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary">Mobile Units Ready</span>
      <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold font-heading text-white mt-1">Our Wythenshawe Services</h2>
      </div>
      <p className="text-[13px] leading-[18px] text-slate-400">Scroll horizontally to view our specialized on-site repair capabilities</p>
      </div>
      <div className="flex overflow-x-auto pb-6 gap-6 snap-x snap-mandatory scrollbar-none">
      {/* Service 1 */}
      <div className="snap-start shrink-0 w-[300px] sm:w-[340px] rounded-2xl bg-primary/80 backdrop-blur-md border border-white/10 overflow-hidden flex flex-col justify-between group">
      <div>
      <div className="relative h-48 w-full overflow-hidden">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Emergency roadside tyre replacement on motorway near Wythenshawe" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center shadow-lg">
      <Wrench className="h-[18px] w-[18px]" />
      </div>
      </div>
      <div className="p-6">
      <h3 className="text-[20px] leading-[26px] font-bold font-heading text-secondary mb-2">Emergency Tyre Replacement</h3>
      <p className="text-[15px] leading-[24px] text-slate-300">
                      Fast-track on-scene fitting for blowouts, tread de-lamination, and sidewall ruptures on the M56 or residential streets.
                    </p>
      </div>
      </div>
      <div className="p-6 pt-0 mt-auto flex items-center justify-between border-t border-white/10">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-slate-400">Fixed Rate</span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white font-bold">From £59 + Tyre</span>
      </div>
      </div>
      {/* Service 2 */}
      <div className="snap-start shrink-0 w-[300px] sm:w-[340px] rounded-2xl bg-primary/80 backdrop-blur-md border border-white/10 overflow-hidden flex flex-col justify-between group">
      <div>
      <div className="relative h-48 w-full overflow-hidden">
      <Image src="/gallery-roadside-fitting.webp" alt="Automotive specialist inspecting and measuring tyre tread depth using a digital depth gauge on a premium wheel tyre inside a mobile workshop setting" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center shadow-lg">
      <Wrench className="h-[18px] w-[18px]" />
      </div>
      </div>
      <div className="p-6">
      <h3 className="text-[20px] leading-[26px] font-bold font-heading text-secondary mb-2">Puncture Repair (BS AU 159)</h3>
      <p className="text-[15px] leading-[24px] text-slate-300">
                      Safe, certified internal mushroom plug-patch repairs for minor nail and screw tread penetrations where replacement is not mandatory.
                    </p>
      </div>
      </div>
      <div className="p-6 pt-0 mt-auto flex items-center justify-between border-t border-white/10">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-slate-400">Standard Safety Repair</span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white font-bold">£45 Fixed</span>
      </div>
      </div>
      {/* Service 3 */}
      <div className="snap-start shrink-0 w-[300px] sm:w-[340px] rounded-2xl bg-primary/80 backdrop-blur-md border border-white/10 overflow-hidden flex flex-col justify-between group">
      <div>
      <div className="relative h-48 w-full overflow-hidden">
      <Image src="/gallery-home-callout.webp" alt="Professional tyre specialist removing locking wheel nut using specialized impact equipment" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center shadow-lg">
      <KeyRound className="h-[18px] w-[18px]" />
      </div>
      </div>
      <div className="p-6">
      <h3 className="text-[20px] leading-[26px] font-bold font-heading text-secondary mb-2">Locking Wheel Nut Removal</h3>
      <p className="text-[15px] leading-[24px] text-slate-300">
                      Lost, stripped, or overtightened wheel nut key? Our non-destructive extraction tools release seized nuts without harming your alloys.
                    </p>
      </div>
      </div>
      <div className="p-6 pt-0 mt-auto flex items-center justify-between border-t border-white/10">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-slate-400">Specialist Extraction</span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white font-bold">From £50</span>
      </div>
      </div>
      {/* Service 4 */}
      <div className="snap-start shrink-0 w-[300px] sm:w-[340px] rounded-2xl bg-primary/80 backdrop-blur-md border border-white/10 overflow-hidden flex flex-col justify-between group">
      <div>
      <div className="relative h-48 w-full overflow-hidden">
      <Image src="/gallery-evening-callout.webp" alt="Direct tyre mobile fitting service van parked on a suburban UK driveway completing scheduled car tyre changes at evening" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center shadow-lg">
      <Wrench className="h-[18px] w-[18px]" />
      </div>
      </div>
      <div className="p-6">
      <h3 className="text-[20px] leading-[26px] font-bold font-heading text-secondary mb-2">Roadside &amp; Home Fitting</h3>
      <p className="text-[15px] leading-[24px] text-slate-300">
                      Save hours waiting in a cold garage. We come direct to your home driveway or company car park across Wythenshawe on your schedule.
                    </p>
      </div>
      </div>
      <div className="p-6 pt-0 mt-auto flex items-center justify-between border-t border-white/10">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-slate-400">Convenience Dispatch</span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white font-bold">Zero Callout on Sets</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* ROADS & NEARBY AREAS COVERED */}
      <section className="w-full bg-primary-dark py-16 text-white border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mb-10">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary">Coverage &amp; Fast Arterials</span>
      <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold font-heading text-white mt-1">Priority Roads &amp; Surrounding Hubs</h2>
      <p className="text-[15px] leading-[24px] text-slate-300 mt-2">
                Strategically positioned units monitor high-collision and puncture blackspots throughout South Manchester and North Cheshire.
              </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Arterial Roads Column */}
      <div className="bg-primary/60 backdrop-blur-md rounded-2xl border border-white/10 p-6 sm:p-8">
      <h3 className="text-[20px] leading-[26px] font-bold font-heading text-white flex items-center gap-2 mb-6">
      <Route className="text-secondary h-5 w-5" />
                  Major Motorways &amp; Arterials
                </h3>
      <div className="space-y-4">
      <div className="flex items-center justify-between p-3.5 rounded-xl bg-primary-dark/80 border border-white/5">
      <div>
      <span className="px-2.5 py-0.5 rounded bg-blue-900 text-blue-200 font-bold text-[11px] leading-[14px] tracking-[0.06em] font-bold mr-2">M56</span>
      <span className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-slate-100">Junctions 2, 3, 3A, 4 &amp; 5</span>
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary font-bold">15–25 min ETA</span>
      </div>
      <div className="flex items-center justify-between p-3.5 rounded-xl bg-primary-dark/80 border border-white/5">
      <div>
      <span className="px-2.5 py-0.5 rounded bg-blue-900 text-blue-200 font-bold text-[11px] leading-[14px] tracking-[0.06em] font-bold mr-2">M60</span>
      <span className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-slate-100">Junctions 3, 4 &amp; 5 Interchange</span>
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary font-bold">20–30 min ETA</span>
      </div>
      <div className="flex items-center justify-between p-3.5 rounded-xl bg-primary-dark/80 border border-white/5">
      <div>
      <span className="px-2.5 py-0.5 rounded bg-amber-900 text-amber-200 font-bold text-[11px] leading-[14px] tracking-[0.06em] font-bold mr-2">A560</span>
      <span className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-slate-100">Altrincham Rd / Gatley Link</span>
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary font-bold">15–25 min ETA</span>
      </div>
      <div className="flex items-center justify-between p-3.5 rounded-xl bg-primary-dark/80 border border-white/5">
      <div>
      <span className="px-2.5 py-0.5 rounded bg-amber-900 text-amber-200 font-bold text-[11px] leading-[14px] tracking-[0.06em] font-bold mr-2">A5103</span>
      <span className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-slate-100">Princess Parkway Corridor</span>
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary font-bold">20–30 min ETA</span>
      </div>
      </div>
      </div>
      {/* Nearby Areas Covered */}
      <div className="bg-primary/60 backdrop-blur-md rounded-2xl border border-white/10 p-6 sm:p-8">
      <h3 className="text-[20px] leading-[26px] font-bold font-heading text-white flex items-center gap-2 mb-6">
      <MapPin className="text-secondary h-5 w-5" />
                  Local Areas &amp; Terminal Links
                </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="p-3 rounded-xl bg-primary-dark/80 border border-white/5 flex flex-col">
      <span className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-white">Manchester Airport</span>
      <span className="text-[13px] leading-[18px] text-slate-400 mt-1">Terminals 1, 2, 3 &amp; Freight Hub</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-emerald-400 font-semibold mt-2">15 min response</span>
      </div>
      <div className="p-3 rounded-xl bg-primary-dark/80 border border-white/5 flex flex-col">
      <span className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-white">Cheadle</span>
      <span className="text-[13px] leading-[18px] text-slate-400 mt-1">Cheadle Hulme &amp; Gatley borders</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-emerald-400 font-semibold mt-2">20 min response</span>
      </div>
      <div className="p-3 rounded-xl bg-primary-dark/80 border border-white/5 flex flex-col">
      <span className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-white">Sale</span>
      <span className="text-[13px] leading-[18px] text-slate-400 mt-1">Sale Moor, Brooklands, A56</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-emerald-400 font-semibold mt-2">25 min response</span>
      </div>
      <div className="p-3 rounded-xl bg-primary-dark/80 border border-white/5 flex flex-col">
      <span className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-white">Wilmslow</span>
      <span className="text-[13px] leading-[18px] text-slate-400 mt-1">Handforth Dean, Styal route</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-emerald-400 font-semibold mt-2">20 min response</span>
      </div>
      <div className="p-3 rounded-xl bg-primary-dark/80 border border-white/5 flex flex-col sm:col-span-2">
      <span className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-white">Altrincham &amp; Bowdon</span>
      <span className="text-[13px] leading-[18px] text-slate-400 mt-1">Hale, Broadheath, Timperley residential routes</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-emerald-400 font-semibold mt-2">25 min response</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* HOW IT WORKS: VERTICAL NUMBERED STEPPER */}
      <section className="w-full bg-primary-dark py-16 lg:py-20 text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mb-12">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary">Clear Protocol</span>
      <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold font-heading text-white mt-1">How Our Roadside Fitting Works</h2>
      <p className="text-[15px] leading-[24px] text-slate-300 mt-2">From distress call to back on the road in five simple steps.</p>
      </div>
      <div className="relative border-l-2 border-white/10 ml-4 md:ml-8 space-y-10 pl-6 md:pl-10">
      {/* Step 1 */}
      <div className="relative group">
      <div className="absolute -left-[35px] md:-left-[51px] top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary text-primary font-bold text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center shadow-lg">
                  1
                </div>
      <div>
      <h3 className="text-[20px] leading-[26px] font-bold font-heading text-white">Call 24/7 or Send Location</h3>
      <p className="text-[15px] leading-[24px] text-slate-300 mt-1 max-w-xl">
                    Phone <a className="text-secondary font-semibold underline" href="tel:07955266077">07955 266 077</a> or drop a WhatsApp pin. Our dedicated South Manchester coordinator immediately traces the nearest patrol van.
                  </p>
      </div>
      </div>
      {/* Step 2 */}
      <div className="relative group">
      <div className="absolute -left-[35px] md:-left-[51px] top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary text-primary font-bold text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center shadow-lg">
                  2
                </div>
      <div>
      <h3 className="text-[20px] leading-[26px] font-bold font-heading text-white">Tyre Size &amp; Vehicle Confirmation</h3>
      <p className="text-[15px] leading-[24px] text-slate-300 mt-1 max-w-xl">
                    We verify your tyre specs (e.g., 225/45 R18 95Y XL) via registration lookup or sidewall reading, confirming run-flat needs and load index.
                  </p>
      </div>
      </div>
      {/* Step 3 */}
      <div className="relative group">
      <div className="absolute -left-[35px] md:-left-[51px] top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary text-primary font-bold text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center shadow-lg">
                  3
                </div>
      <div>
      <h3 className="text-[20px] leading-[26px] font-bold font-heading text-white">Fixed Upfront Quote</h3>
      <p className="text-[15px] leading-[24px] text-slate-300 mt-1 max-w-xl">
                    You receive an all-inclusive transparent price including callout, tyre, valve, digital balancing, and eco-disposal of the old tyre. Zero surprises.
                  </p>
      </div>
      </div>
      {/* Step 4 */}
      <div className="relative group">
      <div className="absolute -left-[35px] md:-left-[51px] top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary text-primary font-bold text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center shadow-lg">
                  4
                </div>
      <div>
      <h3 className="text-[20px] leading-[26px] font-bold font-heading text-white">Fitter Dispatched with New Tyre</h3>
      <p className="text-[15px] leading-[24px] text-slate-300 mt-1 max-w-xl">
                    Our Mercedes/Ford custom fitting van arrives on-scene with high-visibility lighting, jacks, and safety beacons to secure the operational perimeter.
                  </p>
      </div>
      </div>
      {/* Step 5 */}
      <div className="relative group">
      <div className="absolute -left-[35px] md:-left-[51px] top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary text-primary font-bold text-[16px] leading-[22px] tracking-[0.01em] font-bold flex items-center justify-center shadow-lg">
                  5
                </div>
      <div>
      <h3 className="text-[20px] leading-[26px] font-bold font-heading text-white">Fitted, Torqued &amp; Contactless Payment</h3>
      <p className="text-[15px] leading-[24px] text-slate-300 mt-1 max-w-xl">
                    Wheel torqued to manufacturer specification with calibrated wrench. Inspect the finish, tap via Apple Pay, credit card, or debit, and proceed securely.
                  </p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* REAL LOCAL JOB EXAMPLE */}
      <section className="w-full bg-primary-dark py-16 text-white border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-primary/80 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
      <div className="lg:col-span-5 h-64 lg:h-auto relative">
      <Image src="/gallery-evening-home-visit.webp" alt="BMW alloy wheel tyre replacement carried out roadside near Manchester Airport" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute top-4 left-4 bg-secondary text-primary font-bold text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase px-3 py-1 rounded-full shadow-md">
                    Case Study
                  </div>
      </div>
      <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center space-y-4">
      <div className="flex items-center gap-2 text-secondary">
      <CheckCircle2 className="h-[18px] w-[18px]" />
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider font-bold">Recent Wythenshawe Dispatch</span>
      </div>
      <h3 className="text-[30px] leading-[38px] font-bold font-heading text-white">
                    BMW 3 Series — M56 Junction 4 Airport Run
                  </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
      <div className="p-3 bg-primary-dark/80 rounded-xl border border-white/5">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-slate-400 block">Vehicle &amp; Spec</span>
      <span className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-white mt-0.5 block">BMW 320d (225/45 R18 RF)</span>
      </div>
      <div className="p-3 bg-primary-dark/80 rounded-xl border border-white/5">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-slate-400 block">Location</span>
      <span className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-white mt-0.5 block">M56 Hard Shoulder J4</span>
      </div>
      <div className="p-3 bg-primary-dark/80 rounded-xl border border-white/5 col-span-2 sm:col-span-1">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-slate-400 block">Arrival Time</span>
      <span className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-emerald-400 mt-0.5 block">28 Minutes</span>
      </div>
      </div>
      <p className="text-[15px] leading-[24px] text-slate-300 pt-2">
      <strong>Incident:</strong> Severe blowout on route to Manchester Airport Terminal 2 for a European business flight. Customer stranded with luggage and hazard lights on.<br/>
      <strong>Outcome:</strong> Emergency unit arrived at 06:14 AM. Fitted replacement Bridgestone Turanza Run-flat, balanced wheel, checked remaining tyres. Customer reached terminal check-in with 40 minutes to spare.
                  </p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* FAQS: TWO-COLUMN GRID OF 6 FAQS */}
      <section className="w-full bg-primary-dark py-16 lg:py-20 text-white border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-12">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider text-secondary">Got Questions?</span>
      <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold font-heading text-white mt-1">Frequently Asked Questions</h2>
      <p className="text-[15px] leading-[24px] text-slate-400 mt-2">Everything you need to know about emergency callouts in Wythenshawe &amp; South Manchester.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* FAQ 1 */}
      <div className="p-6 rounded-2xl bg-primary/60 backdrop-blur-md border border-white/10">
      <h3 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-secondary mb-2 flex items-start gap-2">
      <HelpCircle className="h-[18px] w-[18px] mt-0.5 shrink-0" />
                  How fast can you arrive in Wythenshawe or Manchester Airport?
                </h3>
      <p className="text-[15px] leading-[24px] text-slate-300">
                  Our average arrival time in Wythenshawe, Cheadle, and Manchester Airport is between 30 and 45 minutes. Because we maintain roving patrol vans alongside the M56 and M60 corridors, we can often dispatch an operative within minutes of your call.
                </p>
      </div>
      {/* FAQ 2 */}
      <div className="p-6 rounded-2xl bg-primary/60 backdrop-blur-md border border-white/10">
      <h3 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-secondary mb-2 flex items-start gap-2">
      <HelpCircle className="h-[18px] w-[18px] mt-0.5 shrink-0" />
                  What is your motorway safety procedure on the M56 and M60?
                </h3>
      <p className="text-[15px] leading-[24px] text-slate-300">
                  Safety is paramount. All technicians carry Chapter 8 certified high-visibility liveries and roof strobes. On arrival, we position our impact-rated service vehicle upstream as a buffer and guide vehicle occupants to wait safely behind roadside crash barriers.
                </p>
      </div>
      {/* FAQ 3 */}
      <div className="p-6 rounded-2xl bg-primary/60 backdrop-blur-md border border-white/10">
      <h3 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-secondary mb-2 flex items-start gap-2">
      <HelpCircle className="h-[18px] w-[18px] mt-0.5 shrink-0" />
                  Do you carry tyres to fit my vehicle in stock?
                </h3>
      <p className="text-[15px] leading-[24px] text-slate-300">
                  Yes. Our local replenishment depot stocks thousands of tyres ranging from 13-inch compact car sizes to 22-inch SUV/EV and 4x4 low profiles. We stock run-flat (RFT), extra load (XL), premium brands, and budget options available around the clock.
                </p>
      </div>
      {/* FAQ 4 */}
      <div className="p-6 rounded-2xl bg-primary/60 backdrop-blur-md border border-white/10">
      <h3 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-secondary mb-2 flex items-start gap-2">
      <HelpCircle className="h-[18px] w-[18px] mt-0.5 shrink-0" />
                  What payment methods do you accept at the roadside?
                </h3>
      <p className="text-[15px] leading-[24px] text-slate-300">
                  Every technician carries an encrypted contactless mobile payment terminal. We accept Visa, Mastercard, Maestro, American Express, Apple Pay, Google Pay, and verified business fleet account invoicing.
                </p>
      </div>
      {/* FAQ 5 */}
      <div className="p-6 rounded-2xl bg-primary/60 backdrop-blur-md border border-white/10">
      <h3 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-secondary mb-2 flex items-start gap-2">
      <HelpCircle className="h-[18px] w-[18px] mt-0.5 shrink-0" />
                  Are there extra fees for late-night or early-morning callouts?
                </h3>
      <p className="text-[15px] leading-[24px] text-slate-300">
                  We operate transparent fixed quotes agreed before dispatch. Out-of-hours callouts (between 8:00 PM and 6:00 AM) include an upfront night service rate that is explicitly confirmed over the phone. There are never surprise add-ons.
                </p>
      </div>
      {/* FAQ 6 */}
      <div className="p-6 rounded-2xl bg-primary/60 backdrop-blur-md border border-white/10">
      <h3 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-secondary mb-2 flex items-start gap-2">
      <HelpCircle className="h-[18px] w-[18px] mt-0.5 shrink-0" />
                  Can you change a tyre if I lost my locking wheel nut key?
                </h3>
      <p className="text-[15px] leading-[24px] text-slate-300">
                  Yes. Our vans carry specialized reverse-threaded and tungsten-tipped locking wheel nut extraction tools capable of safely unlocking swollen, damaged, or lost nuts on 99% of vehicle alloys without wheel face damage.
                </p>
      </div>
      </div>
      </div>
      </section>
      {/* RELATED LOCATIONS */}
      <section className="w-full bg-primary-dark py-12 text-white border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
      <div>
      <h3 className="text-[20px] leading-[26px] font-bold font-heading text-white">Neighbouring Service Zones</h3>
      <p className="text-[13px] leading-[18px] text-slate-400 mt-1">Direct rapid response throughout South Manchester and North Cheshire</p>
      </div>
      <a className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary hover:underline flex items-center gap-1" href="#nationwide">
      <span>Mobile Tyre Fitting UK</span>
      <ArrowUpRight className="h-4 w-4" />
      </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 pt-6">
      <a className="p-3 rounded-xl bg-primary/60 hover:bg-primary border border-white/10 transition-colors text-center" href="#airport">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-slate-200 block">Manchester Airport</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary mt-0.5 block">24/7 Coverage</span>
      </a>
      <a className="p-3 rounded-xl bg-primary/60 hover:bg-primary border border-white/10 transition-colors text-center" href="#cheadle">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-slate-200 block">Cheadle &amp; Gatley</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary mt-0.5 block">Fast Dispatch</span>
      </a>
      <a className="p-3 rounded-xl bg-primary/60 hover:bg-primary border border-white/10 transition-colors text-center" href="#sale">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-slate-200 block">Sale &amp; Sale Moor</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary mt-0.5 block">Local Units</span>
      </a>
      <a className="p-3 rounded-xl bg-primary/60 hover:bg-primary border border-white/10 transition-colors text-center" href="#wilmslow">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-slate-200 block">Wilmslow</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary mt-0.5 block">Priority Link</span>
      </a>
      <a className="p-3 rounded-xl bg-primary/60 hover:bg-primary border border-white/10 transition-colors text-center col-span-2 sm:col-span-1" href="#altrincham">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-slate-200 block">Altrincham</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary mt-0.5 block">On Call Now</span>
      </a>
      </div>
      </div>
      </section>
      {/* FINAL CTA: FULL-WIDTH FLAT GOLD BANNER */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-8 bg-primary-dark">
      <div className="max-w-[1280px] mx-auto bg-secondary text-primary py-12 px-6 sm:px-12 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="text-center md:text-left space-y-2">
      <div className="inline-flex items-center gap-1.5 text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase font-extrabold tracking-wider bg-primary/10 px-3 py-1 rounded-full">
      <MapPin className="h-[14px] w-[14px]" />
      <span>Wythenshawe &amp; M56 On-Demand Service</span>
      </div>
      <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold font-heading text-primary">
                Need an Immediate Tyre Fitter in Wythenshawe?
              </h2>
      <p className="text-[18px] leading-[28px] text-primary/90 max-w-xl font-medium">
                Our mobile workshop is nearby. Call our 24/7 central control desk right now to get an accurate arrival time and upfront fixed quote.
              </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-[16px] leading-[22px] tracking-[0.01em] font-bold transition-transform active:scale-95 shadow-xl" href="tel:07955266077">
      <PhoneCall className="h-6 w-6 text-secondary" />
      <span>Call Dispatch: 07955 266 077</span>
      </a>
      </div>
      </div>
      </section>
    </main>
  );
}
