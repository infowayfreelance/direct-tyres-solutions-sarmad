import Image from "next/image";
import { ArrowRight, Briefcase, ClipboardCheck, CreditCard, HelpCircle, MapPin, MessageCircle, PhoneCall, Route, ShieldCheck, Star, Timer, Truck } from "lucide-react";

export default function WiganPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-primary-dark min-h-[580px] lg:min-h-[640px] flex items-end">
      <div className="relative absolute inset-0 z-0">
      <Image src="/hero-section-images-936x527.webp" alt="Motorway roadside emergency tyre replacement" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover object-center brightness-75 scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-transparent"></div>
      <div className="absolute inset-0 bg-primary-dark/40 backdrop-blur-[2px]"></div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
      <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold mb-4">
      <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                24/7 RAPID DISPATCH ACROSS GREATER MANCHESTER &amp; WIGAN
              </div>
      <h1 className="text-[36px] leading-[42px] tracking-[-0.01em] font-black lg:text-[56px] lg:leading-[64px] lg:tracking-[-0.02em] lg:font-black font-heading text-white mb-4">
                24/7 Mobile Tyre Fitting in <span className="text-secondary">Wigan</span>
              </h1>
      <p className="text-[18px] leading-[28px] text-gray-400 max-w-2xl mb-8">
                Immediate roadside, retail park, and residential emergency tyre fitting across Wigan, Robin Park Retail Park, M6 Junctions 25–27, and the A49 corridor. Vans equipped with laser balancing and high-capacity tyre changers ready for immediate deployment.
              </p>
      <div className="flex flex-wrap items-center gap-4">
      <a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary text-primary text-[14px] leading-[18px] tracking-[0.02em] font-semibold hover:bg-secondary-hover transition-all shadow-lg active:scale-95" href="tel:07955266077">
      <PhoneCall className="h-[20px] w-[20px]" fill="currentColor" strokeWidth={0} />
                  Call 07955 266 077
                </a>
      <a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary/80 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold hover:bg-primary transition-all shadow-md active:scale-95" href="https://wa.me/448009992470">
      <MessageCircle className="text-gray-400 h-[20px] w-[20px]" />
                  WhatsApp Instant Quote
                </a>
      </div>
      </div>
      </div>
      </section>
      {/* 4-CARD STAT STRIP */}
      <section className="w-full bg-primary-dark py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-primary/60 rounded-2xl p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-1">
      <Timer className="text-secondary h-[20px] w-[20px]" />
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase text-gray-400">Avg Arrival</span>
      </div>
      <div className="text-[30px] leading-[38px] font-bold font-heading text-white">25–35 Mins</div>
      <p className="text-[13px] leading-[18px] text-gray-400/80 mt-1">Live traffic routing</p>
      </div>
      <div className="bg-primary/60 rounded-2xl p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-1">
      <Route className="text-gray-400 h-[20px] w-[20px]" />
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase text-gray-400">Roads Covered</span>
      </div>
      <div className="text-[20px] leading-[26px] font-bold font-heading text-white">M6, M58, A49, A577</div>
      <p className="text-[13px] leading-[18px] text-gray-400/80 mt-1">All primary arterials</p>
      </div>
      <div className="bg-primary/60 rounded-2xl p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-1">
      <Truck className="text-accent h-[20px] w-[20px]" />
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase text-gray-400">Response Vans</span>
      </div>
      <div className="text-[30px] leading-[38px] font-bold font-heading text-white">100% Mobile</div>
      <p className="text-[13px] leading-[18px] text-gray-400/80 mt-1">Direct to your exact GPS</p>
      </div>
      <div className="bg-primary/60 rounded-2xl p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-1">
      <Star className="text-secondary h-[20px] w-[20px]" fill="currentColor" strokeWidth={0} />
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase text-gray-400">Rating</span>
      </div>
      <div className="text-[30px] leading-[38px] font-bold font-heading text-white">4.9 / 5.0</div>
      <p className="text-[13px] leading-[18px] text-gray-400/80 mt-1">Verified TrustScore</p>
      </div>
      </div>
      </div>
      </section>
      {/* LOCAL PROFILE CONTEXT */}
      <section className="w-full bg-primary-dark py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-7">
      <span className="px-3 py-1 rounded-full bg-accent/40 text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider mb-3 inline-block">Local Operational Zone</span>
      <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold font-heading text-white mb-6">
                  Rapid Tyre Response Across Wigan Town &amp; Motorway Corridors
                </h2>
      <p className="text-[18px] leading-[28px] text-gray-400 mb-4">
                  Wigan presents unique vehicular demands: dense retail congestion around Robin Park Retail Park, heavy commuter traffic pushing down the A49 Warrington Road toward Marus Bridge, and continuous high-speed freight transport shifting between M6 Junctions 25 and 26 through to the M58 terminus.
                </p>
      <p className="text-[15px] leading-[24px] text-gray-400/90 mb-6">
                  Our strategically stationed mobile tyre units ensure you are never stranded on dangerous hard shoulders or stuck in store car parks. We carry a comprehensive range of premium, mid-range, and commercial tyres suited for instant deployment across Standish, Leigh, Hindley, Westhoughton, and Ashton-in-Makerfield.
                </p>
      <div className="flex flex-wrap gap-2">
      <span className="px-3 py-1 rounded-xl bg-primary/80 text-white text-[13px] leading-[18px]">Robin Park Retail Park</span>
      <span className="px-3 py-1 rounded-xl bg-primary/80 text-white text-[13px] leading-[18px]">M6 J25 &amp; J26</span>
      <span className="px-3 py-1 rounded-xl bg-primary/80 text-white text-[13px] leading-[18px]">A49 Warrington Rd</span>
      <span className="px-3 py-1 rounded-xl bg-primary/80 text-white text-[13px] leading-[18px]">M58 Orrell Interchanges</span>
      <span className="px-3 py-1 rounded-xl bg-primary/80 text-white text-[13px] leading-[18px]">Standish &amp; Shevington</span>
      <span className="px-3 py-1 rounded-xl bg-primary/80 text-white text-[13px] leading-[18px]">Ashton-in-Makerfield</span>
      </div>
      </div>
      <div className="lg:col-span-5 bg-primary/60 rounded-2xl p-6 shadow-md">
      <h3 className="text-[20px] leading-[26px] font-bold font-heading text-white mb-4 flex items-center gap-2">
      <MapPin className="text-secondary h-5 w-5" />
                  Live Deployment Matrix
                </h3>
      <div className="space-y-4">
      <div className="flex justify-between items-center bg-primary-dark p-3 rounded-xl">
      <div>
      <p className="text-[13px] leading-[18px] font-bold text-white">Robin Park &amp; Centre</p>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Retail shopping parks &amp; town centre</p>
      </div>
      <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-[11px] leading-[14px] tracking-[0.06em] font-bold">20 Mins</span>
      </div>
      <div className="flex justify-between items-center bg-primary-dark p-3 rounded-xl">
      <div>
      <p className="text-[13px] leading-[18px] font-bold text-white">M6 Motorway (J25–J27)</p>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Emergency hard shoulder response</p>
      </div>
      <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-[11px] leading-[14px] tracking-[0.06em] font-bold">25 Mins</span>
      </div>
      <div className="flex justify-between items-center bg-primary-dark p-3 rounded-xl">
      <div>
      <p className="text-[13px] leading-[18px] font-bold text-white">A49 / Marus Bridge / Ashton</p>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Commuter route roadside recovery</p>
      </div>
      <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-[11px] leading-[14px] tracking-[0.06em] font-bold">25 Mins</span>
      </div>
      <div className="flex justify-between items-center bg-primary-dark p-3 rounded-xl">
      <div>
      <p className="text-[13px] leading-[18px] font-bold text-white">Standish, Leigh &amp; Hindley</p>
      <p className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Driveway &amp; commercial depot fitting</p>
      </div>
      <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-[11px] leading-[14px] tracking-[0.06em] font-bold">30 Mins</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SERVICES SECTION (HORIZONTAL ROW OF 4 EQUAL CARDS) */}
      <section className="w-full bg-primary-dark py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
      <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold font-heading text-white mb-3">Our Core Mobile Services</h2>
      <p className="text-[15px] leading-[24px] text-gray-400">Fully equipped roadside workshops delivered straight to your exact coordinates across Wigan.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Card 1 */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden shadow-md flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="Emergency roadside tyre fitting van" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-1">
      <h3 className="text-[20px] leading-[26px] font-bold font-heading text-white mb-2">Emergency Roadside Fitting</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 flex-1 mb-4">
                    Rapid dispatch for high-speed motorway blowouts and carriageway punctures on M6, M58, and A-roads with full safety beacon protection.
                  </p>
      <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold flex items-center gap-1">
                    Available 24/7 <ArrowRight className="h-[16px] w-[16px]" />
      </span>
      </div>
      </div>
      {/* Card 2 */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden shadow-md flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
      <Image src="/gallery-roadside-fitting.webp" alt="BS AU 159 puncture repair tread measurement" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-1">
      <h3 className="text-[20px] leading-[26px] font-bold font-heading text-white mb-2">BS AU 159 Puncture Repair</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 flex-1 mb-4">
                    Minor nail or screw tread punctures assessed and repaired on the spot in strict compliance with British Safety standard BS AU 159.
                  </p>
      <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold flex items-center gap-1">
                    Save Tyres On-Site <ArrowRight className="h-[16px] w-[16px]" />
      </span>
      </div>
      </div>
      {/* Card 3 */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden shadow-md flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
      <Image src="/gallery-home-callout.webp" alt="Commercial and van tyre fitting with impact tool" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-1">
      <h3 className="text-[20px] leading-[26px] font-bold font-heading text-white mb-2">Commercial &amp; Van Tyres</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 flex-1 mb-4">
                    Heavy-duty reinforced 8-ply C-rated tyres kept in mobile stock for fleets, delivery couriers, and trades working across Wigan hubs.
                  </p>
      <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold flex items-center gap-1">
                    Fleet Rapid Support <ArrowRight className="h-[16px] w-[16px]" />
      </span>
      </div>
      </div>
      {/* Card 4 */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden shadow-md flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
      <Image src="/gallery-evening-callout.webp" alt="Mobile tyre fitting vehicle locking nut extraction" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-1">
      <h3 className="text-[20px] leading-[26px] font-bold font-heading text-white mb-2">Locking Wheel Nut Extraction</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 flex-1 mb-4">
                    Lost locking key or stripped nuts removed without damaging expensive alloy rims using specialised reverse-thread extraction tooling.
                  </p>
      <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold flex items-center gap-1">
                    Damage-Free Removal <ArrowRight className="h-[16px] w-[16px]" />
      </span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* TRUST BADGES (PLAIN ICON ROW) */}
      <section className="w-full bg-primary/60 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center text-secondary">
      <ShieldCheck className="h-[26px] w-[26px]" />
      </div>
      <div>
      <h4 className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Fully Insured £5M</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Public &amp; road liability</p>
      </div>
      </div>
      <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center text-gray-400">
      <ClipboardCheck className="h-[26px] w-[26px]" />
      </div>
      <div>
      <h4 className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">BS AU 159 Compliant</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">UK regulatory standard</p>
      </div>
      </div>
      <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center text-secondary">
      <CreditCard className="h-[26px] w-[26px]" />
      </div>
      <div>
      <h4 className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Contactless Roadside POS</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Card, Apple &amp; Google Pay</p>
      </div>
      </div>
      <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center text-accent">
      <Briefcase className="h-[26px] w-[26px]" />
      </div>
      <div>
      <h4 className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Fleet &amp; Trade Accounts</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Dedicated Wigan billing</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* HOW IT WORKS (3 LARGE COLUMNS WITH PHOTOS) */}
      <section className="w-full bg-primary-dark py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-14">
      <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase mb-2 inline-block">Frictionless Process</span>
      <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold font-heading text-white">How Our Wigan Dispatch Works</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Step 1 */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden shadow-sm flex flex-col">
      <div className="relative h-44 w-full overflow-hidden">
      <Image src="/gallery-evening-home-visit.webp" alt="Vehicle tyre registration lookup" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
      <div className="text-[30px] leading-[38px] font-bold font-heading text-secondary mb-2">01</div>
      <h3 className="text-[20px] leading-[26px] font-bold font-heading text-white mb-3">Call &amp; Vehicle Lookup</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    Phone our Wigan dispatch desk or send a WhatsApp. Provide your vehicle registration or tyre size markings. We immediately cross-reference warehouse inventory and assign the nearest service van.
                  </p>
      </div>
      </div>
      {/* Step 2 */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden shadow-sm flex flex-col">
      <div className="relative h-44 w-full overflow-hidden">
      <Image src="/gallery-precision-care.webp" alt="Priority mobile tyre van mobilized in Wigan" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
      <div className="text-[30px] leading-[38px] font-bold font-heading text-gray-400 mb-2">02</div>
      <h3 className="text-[20px] leading-[26px] font-bold font-heading text-white mb-3">Priority Van Mobilised</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    A certified technician is routed immediately to your exact live GPS location—whether you are parked at Robin Park, broken down on M6 hard shoulder, or stranded outside your home in Standish.
                  </p>
      </div>
      </div>
      {/* Step 3 */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden shadow-sm flex flex-col">
      <div className="relative h-44 w-full overflow-hidden">
      <Image src="/mobile-tyre-fitting-3-1536x1024.webp" alt="Tyre fitted torqued and cleared" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
      <div className="text-[30px] leading-[38px] font-bold font-heading text-accent mb-2">03</div>
      <h3 className="text-[20px] leading-[26px] font-bold font-heading text-white mb-3">Fitted, Torqued &amp; Cleared</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                    Old tyre stripped, rim bead cleaned, new valve inserted, wheel precision laser-balanced, and wheel bolts torqued to manufacturer specifications. You pay roadside via contactless POS.
                  </p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* REAL LOCAL JOB & TESTIMONIAL (TWO-CARD ROW) */}
      <section className="w-full bg-primary-dark py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Job Log Card */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden shadow-md flex flex-col">
      <div className="relative h-56 w-full">
      <Image src="/wheel-balancing-2-1536x1024.webp" alt="Ford Transit commercial tyre job in Robin Park Wigan" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="p-8 flex flex-col flex-1 justify-between">
      <div>
      <div className="flex items-center justify-between mb-3">
      <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">Roadside Incident Log</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Wigan Robin Park</span>
      </div>
      <h3 className="text-[20px] leading-[26px] font-bold font-heading text-white mb-3">Ford Transit Custom — Robin Park Retail, Wigan</h3>
      <p className="text-[15px] leading-[24px] text-gray-400 mb-4">
                      Slashed sidewall tread from building debris behind the retail park. Van dispatched from central depot, on scene in 26 minutes. Fitted heavy-duty 215/65 R16C commercial tyre, replaced valve, and got the driver back on schedule.
                    </p>
      </div>
      <div className="pt-4 border-t border-primary flex items-center justify-between text-[13px] leading-[18px] text-gray-400">
      <span>Fitted: 215/65 R16C</span>
      <span className="text-secondary">Turnaround: 26 Mins</span>
      </div>
      </div>
      </div>
      {/* Verified Testimonial Card */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden shadow-md flex flex-col">
      <div className="relative h-56 w-full">
      <Image src="/about-rapid-response-tyres.webp" alt="Emergency roadside breakdown M6 J26 Wigan" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="p-8 flex flex-col flex-1 justify-between">
      <div>
      <div className="flex items-center justify-between mb-3">
      <div className="flex text-secondary">
      <Star className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
      <Star className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
      <Star className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
      <Star className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
      <Star className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
      </div>
      <span className="text-[13px] leading-[18px] text-gray-400">Verified Commuter Review</span>
      </div>
      <h3 className="text-[20px] leading-[26px] font-bold font-heading text-white mb-3">Standish Commuter on M6 J26</h3>
      <p className="text-[15px] leading-[24px] text-gray-400 mb-4 italic">
                      &quot;Arrived within 30 minutes in the rain, replaced my shredded run-flat tyre with zero fuss. Motorway breakdown is terrifying, but their flashing amber van shielded my car and the fitter was calm, fast, and entirely professional.&quot;
                    </p>
      </div>
      <div className="pt-4 border-t border-primary flex items-center justify-between text-[13px] leading-[18px] text-gray-400">
      <span className="font-bold text-white">Mark H. (BMW 3 Series)</span>
      <span>Standish, Greater Manchester</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* FAQS (TWO COLUMNS) */}
      <section className="w-full bg-primary-dark py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-14">
      <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold font-heading text-white mb-3">Frequently Asked Questions</h2>
      <p className="text-[15px] leading-[24px] text-gray-400">Immediate answers for drivers requiring rapid tyre callouts in Wigan.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-primary/60 rounded-2xl p-6 shadow-sm">
      <h3 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-white mb-2 flex items-start gap-2">
      <HelpCircle className="text-secondary h-[20px] w-[20px] mt-0.5" />
                  How quickly can a van reach Robin Park or M6?
                </h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                  Our average arrival window across central Wigan, Robin Park, and M6 Junctions 25–27 is 25 to 35 minutes. Our dispatch operators track live motorway flow to ensure the fastest response vehicle reaches your coordinates without delay.
                </p>
      </div>
      <div className="bg-primary/60 rounded-2xl p-6 shadow-sm">
      <h3 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-white mb-2 flex items-start gap-2">
      <HelpCircle className="text-secondary h-[20px] w-[20px] mt-0.5" />
                  Do you fit commercial van tyres on site?
                </h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                  Yes. Every mobile unit is fully rated to lift and service LCVs, Ford Transits, Mercedes Sprinters, and commercial fleet trailers with high load-rated C-grade tyres in common profiles (such as 215/65 R16C and 235/65 R16C).
                </p>
      </div>
      <div className="bg-primary/60 rounded-2xl p-6 shadow-sm">
      <h3 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-white mb-2 flex items-start gap-2">
      <HelpCircle className="text-secondary h-[20px] w-[20px] mt-0.5" />
                  Can you repair punctures instead of replacing?
                </h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                  If the puncture is in the central 70% of the tread area and the internal cords remain undamaged, our technician will conduct an on-the-spot puncture repair compliant with British Standard BS AU 159, saving you the expense of a new tyre.
                </p>
      </div>
      <div className="bg-primary/60 rounded-2xl p-6 shadow-sm">
      <h3 className="text-[16px] leading-[22px] tracking-[0.01em] font-bold font-heading text-white mb-2 flex items-start gap-2">
      <HelpCircle className="text-secondary h-[20px] w-[20px] mt-0.5" />
                  What payment methods do you accept roadside?
                </h3>
      <p className="text-[13px] leading-[18px] text-gray-400">
                  All mobile technicians carry encrypted contactless POS terminals. We accept Visa, Mastercard, American Express, Apple Pay, and Google Pay once the work is completed and torqued to your full satisfaction.
                </p>
      </div>
      </div>
      </div>
      </section>
      {/* FINAL CTA (SOLID GOLD FULL-WIDTH BAR) */}
      <section className="w-full bg-secondary text-primary-dark py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
      <div>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-dark/10 text-primary-dark text-[11px] leading-[14px] tracking-[0.06em] font-bold font-bold uppercase mb-3">
      <span className="w-2 h-2 rounded-full bg-primary-dark animate-ping"></span>
                  Vans Available Now In Wigan &amp; Surrounding Towns
                </div>
      <h2 className="text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold font-heading text-primary-dark mb-2">
                  Stranded with a Flat Tyre in Wigan?
                </h2>
      <p className="text-[18px] leading-[28px] text-primary-dark/80 max-w-xl">
                  24/7 emergency dispatch to Robin Park, M6 J25–J27, Standish, Leigh, and your home driveway. Instant tyre arrival in under 35 minutes.
                </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary-dark text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold hover:bg-primary-dark transition-all shadow-xl active:scale-95" href="tel:07955266077">
      <PhoneCall className="h-[20px] w-[20px]" fill="currentColor" strokeWidth={0} />
                  Call 07955 266 077
                </a>
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/20 hover:bg-white/30 text-primary-dark text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-all border border-primary-dark/20 active:scale-95" href="https://wa.me/448009992470">
      <MessageCircle className="h-[20px] w-[20px]" />
                  WhatsApp Quote
                </a>
      </div>
      </div>
      </div>
      </section>
    </main>
  );
}
