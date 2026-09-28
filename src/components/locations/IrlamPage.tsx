import Image from "next/image";
import { CheckCircle2, ChevronDown, Disc, MessageCircle, PhoneCall, Truck, Unlock, Wrench } from "lucide-react";

export default function IrlamPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      <div className="flex flex-col w-full">
      {/* BAND 1: HERO (Stacked Full-Width Photo Band) */}
      <section className="relative w-full py-24 md:py-32 px-4 md:px-8 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/hero-section-images-936x527.webp')" }}>
      <div className="absolute inset-0 bg-primary-dark/85"></div>
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold mb-6 uppercase">
      <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              24/7 Rapid Response Unit • Irlam &amp; M60 Corridor
            </div>
      <h1 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold md:font-heading md:text-[56px] md:leading-[64px] md:tracking-[-0.02em] md:font-black text-white uppercase text-balance mb-6">
              24/7 Mobile Tyre Fitting in Irlam
            </h1>
      <p className="text-[18px] leading-[28px] text-gray-400 max-w-3xl mb-8">
              Heavy commercial van and passenger tyre replacement across Northbank Industrial Estate, Cadishead Way (A57), and Irlam residential estates. Fast roadside and on-site fitting with zero downtime.
            </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider transition-transform active:scale-95" href="tel:08009992470">
      <PhoneCall className="h-5 w-5" fill="currentColor" strokeWidth={0} />
                Call 0800 999 2470
              </a>
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary/80 text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider transition-colors" href="https://wa.me/448009992470" rel="noopener noreferrer" target="_blank">
      <MessageCircle className="text-accent h-5 w-5" />
                WhatsApp Dispatch
              </a>
      </div>
      <div className="mt-8 flex items-center gap-6 text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest">
      <span>Average Response: 30-45 Mins</span>
      <span>•</span>
      <span>Commercial &amp; Passenger Ready</span>
      </div>
      </div>
      </section>
      {/* BAND 2: INTRO (Flat Navy Band) */}
      <section className="w-full py-16 md:py-20 px-4 md:px-8 bg-primary-dark">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-start justify-between">
      <div className="md:w-1/3">
      <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest block mb-2">Strategic Logistics Core</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white uppercase">Manchester Ship Canal &amp; Freight Corridor</h2>
      </div>
      <div className="md:w-2/3 flex flex-col gap-4 text-[15px] leading-[24px] text-gray-400">
      <p>
                Irlam serves as a mission-critical warehousing and distribution nexus positioned directly along the Manchester Ship Canal, linking Warrington haulage networks directly into Greater Manchester. From high-turnover freight hubs at Northbank Industrial Park to light commercial traffic along Liverpool Road, tyre integrity dictates supply chain velocity.
              </p>
      <p>
                Our fully equipped mobile workshops eliminate the need for recovery tow-trucks or idle transport bays. Whether you are a long-haul courier stranded before the M60 interchange or an early morning commuter on Cadishead Way, our dedicated roadside vans arrive loaded with original equipment and reinforced commercial grade tyres.
              </p>
      </div>
      </div>
      </section>
      {/* BAND 3: SERVICES (Photo Band with Floating Cards) */}
      <section className="relative w-full py-20 px-4 md:px-8 bg-cover bg-center" style={{ backgroundImage: "url('/gallery-onsite-wheel-fitting.webp')" }}>
      <div className="absolute inset-0 bg-primary-dark/90"></div>
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
      <div className="text-center mb-12">
      <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest block mb-2">Mobile Capabilities</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white uppercase">On-Site Fleet &amp; Driver Solutions</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {/* Card 1 */}
      <div className="p-6 rounded-2xl bg-primary-dark/90 backdrop-blur-md flex flex-col items-start justify-between min-h-[180px]">
      <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center mb-4">
      <Disc className="text-[20px] leading-[26px] font-bold h-5 w-5" />
      </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Emergency Replacement</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Immediate roadside fitting for blowouts, flats, and shredded highway tyres.</p>
      </div>
      </div>
      {/* Card 2 */}
      <div className="p-6 rounded-2xl bg-primary-dark/90 backdrop-blur-md flex flex-col items-start justify-between min-h-[180px]">
      <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center mb-4">
      <Wrench className="text-[20px] leading-[26px] font-bold h-5 w-5" />
      </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Industrial Puncture Repair</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Safe British Standard BSAU159 compliant on-site puncture sealing and checks.</p>
      </div>
      </div>
      {/* Card 3 */}
      <div className="p-6 rounded-2xl bg-primary-dark/90 backdrop-blur-md flex flex-col items-start justify-between min-h-[180px]">
      <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center mb-4">
      <Unlock className="text-[20px] leading-[26px] font-bold h-5 w-5" />
      </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Wheel Nut Extraction</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Specialist damage-free removal of rounded, broken, or lost locking wheel keys.</p>
      </div>
      </div>
      {/* Card 4 */}
      <div className="p-6 rounded-2xl bg-primary-dark/90 backdrop-blur-md flex flex-col items-start justify-between min-h-[180px]">
      <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center mb-4">
      <Truck className="text-[20px] leading-[26px] font-bold h-5 w-5" />
      </div>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Fleet &amp; Van Support</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Heavy commercial C-rated tyres for courier vans, Luton bodies, and drop-frames.</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* BAND 4: ROADS & AREAS (Plain Dark Band) */}
      <section className="w-full py-16 md:py-20 px-4 md:px-8 bg-primary-dark">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
      <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest block mb-2">Fast Transit Coverage</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white uppercase mb-6">Key Corridors &amp; Bordering Communities</h2>
      <p className="text-[15px] leading-[24px] text-gray-400 max-w-2xl mb-10">
              Our mobile units remain positioned across the A57 artery for rapid deployment across Salford, Trafford, and Warrington borders within minutes.
            </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 w-full">
      <div className="p-4 rounded-xl bg-primary-dark text-center">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white block mb-1">A57</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Cadishead Way</span>
      </div>
      <div className="p-4 rounded-xl bg-primary-dark text-center">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white block mb-1">M60</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Junction 11</span>
      </div>
      <div className="p-4 rounded-xl bg-primary-dark text-center">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white block mb-1">Eccles</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Central / Peel Green</span>
      </div>
      <div className="p-4 rounded-xl bg-primary-dark text-center">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white block mb-1">Cadishead</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Residential Hub</span>
      </div>
      <div className="p-4 rounded-xl bg-primary-dark text-center">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white block mb-1">Trafford Park</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Freight Depot</span>
      </div>
      <div className="p-4 rounded-xl bg-primary-dark text-center">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white block mb-1">Warrington</span>
      <span className="text-[13px] leading-[18px] text-gray-400">East Bypass</span>
      </div>
      </div>
      </div>
      </section>
      {/* BAND 5: HOW IT WORKS (Flat 5-Step Horizontal Ribbon) */}
      <section className="w-full py-16 px-4 md:px-8 bg-primary-dark">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
      <div className="text-center mb-10">
      <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest block mb-2">Rapid Process</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white uppercase">5-Step Roadside Protocol</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full">
      <div className="p-5 rounded-xl bg-primary/60 flex flex-col items-start justify-between min-h-[140px]">
      <span className="font-heading text-[30px] leading-[38px] font-bold text-secondary">01</span>
      <div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Emergency Call</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Call our team directly on 0800 999 2470 with your location.</p>
      </div>
      </div>
      <div className="p-5 rounded-xl bg-primary/60 flex flex-col items-start justify-between min-h-[140px]">
      <span className="font-heading text-[30px] leading-[38px] font-bold text-secondary">02</span>
      <div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Tyre Spec</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Provide tyre size, load index, or vehicle reg for immediate allocation.</p>
      </div>
      </div>
      <div className="p-5 rounded-xl bg-primary/60 flex flex-col items-start justify-between min-h-[140px]">
      <span className="font-heading text-[30px] leading-[38px] font-bold text-secondary">03</span>
      <div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Van Dispatched</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Mobile fitting rig deploys directly with precise live GPS tracking.</p>
      </div>
      </div>
      <div className="p-5 rounded-xl bg-primary/60 flex flex-col items-start justify-between min-h-[140px]">
      <span className="font-heading text-[30px] leading-[38px] font-bold text-secondary">04</span>
      <div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Fitted On-Site</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Mounted, dynamically balanced, new valves installed and torqued.</p>
      </div>
      </div>
      <div className="p-5 rounded-xl bg-primary/60 flex flex-col items-start justify-between min-h-[140px]">
      <span className="font-heading text-[30px] leading-[38px] font-bold text-secondary">05</span>
      <div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Drive &amp; Pay</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Contactless, card, or fleet account payment after total sign-off.</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* BAND 6: REAL JOB (Bordered Card with Action Photo) */}
      <section className="w-full py-16 md:py-20 px-4 md:px-8 bg-primary-dark">
      <div className="max-w-4xl mx-auto">
      <div className="rounded-2xl bg-primary-dark overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-1/2 relative min-h-[260px] md:min-h-full">
      <Image src="/gallery-roadside-fitting.webp" alt="Mobile tyre fitting technician working on commercial vehicle" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">
                  Resolved Incident
                </div>
      </div>
      <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
      <div>
      <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest block mb-1">Field Report #IRL-882</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white uppercase mb-3">
                    Mercedes-Benz Sprinter — Northbank Industrial Park
                  </h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mb-6">
                    Driver reported dual rear puncture following metal debris near warehouse loading dock. Roadside van reached location in 22 minutes, inspected rims, and executed dual replacement under strict depot safety regulations.
                  </p>
      <div className="space-y-2 mb-6">
      <div className="flex justify-between text-[13px] leading-[18px]">
      <span className="text-gray-400">Tyre Specifications:</span>
      <span className="text-white font-semibold">2x 235/65 R16C Commercial</span>
      </div>
      <div className="flex justify-between text-[13px] leading-[18px]">
      <span className="text-gray-400">Callout to Completion:</span>
      <span className="text-secondary font-semibold">38 Minutes Total</span>
      </div>
      <div className="flex justify-between text-[13px] leading-[18px]">
      <span className="text-gray-400">Work Location:</span>
      <span className="text-white">Excalibur Way, Irlam</span>
      </div>
      </div>
      </div>
      <div className="flex items-center gap-3 text-gray-300 text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <CheckCircle2 className="text-accent h-5 w-5" fill="currentColor" strokeWidth={0} />
                  Fleet back on schedule without missed delivery SLA
                </div>
      </div>
      </div>
      </div>
      </section>
      {/* BAND 7: FAQ (Accordion Band) */}
      <section className="w-full py-16 md:py-20 px-4 md:px-8 bg-primary-dark">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
      <div className="text-center mb-10">
      <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest block mb-2">Common Inquiries</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white uppercase">Frequently Asked Questions</h2>
      </div>
      <div className="w-full flex flex-col gap-4" id="faq-container">
      {/* FAQ 1 */}
      <details className="rounded-xl bg-primary/60 overflow-hidden group"><summary className="w-full p-5 text-left flex items-center justify-between font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white cursor-pointer list-none">
      <span>How fast can a mobile tyre van reach Northbank or Cadishead Way?</span>
      <ChevronDown className="transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-5 pb-5 text-[13px] leading-[18px] text-gray-400">
                  We operate emergency response vans directly across the M60 / A57 corridor. Under typical conditions, our ETA to Northbank Industrial Park, Cadishead, and central Irlam is 30 to 45 minutes from your dispatch confirmation.
                </div></details>
      {/* FAQ 2 */}
      <details className="rounded-xl bg-primary/60 overflow-hidden group"><summary className="w-full p-5 text-left flex items-center justify-between font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white cursor-pointer list-none">
      <span>Do your mobile vans stock commercial and C-rated van tyres?</span>
      <ChevronDown className="transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-5 pb-5 text-[13px] leading-[18px] text-gray-400">
                  Yes. Our inventory specifically caters to high-demand delivery fleets, stockists, and trades. We carry light commercial C-rated tyres across major sizes including 215/65 R16C, 235/65 R16C, and 195/70 R15C in both premium and durable budget options.
                </div></details>
      {/* FAQ 3 */}
      <details className="rounded-xl bg-primary/60 overflow-hidden group"><summary className="w-full p-5 text-left flex items-center justify-between font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white cursor-pointer list-none">
      <span>Can you replace tyres on the roadside if I don&apos;t have the locking wheel key?</span>
      <ChevronDown className="transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-5 pb-5 text-[13px] leading-[18px] text-gray-400">
                  Yes. All response rigs carry heavy-duty inverse-thread locking wheel nut removal toolkits. We safely extract rounded, damaged, or missing locking bolts on alloy wheels without causing cosmetic or structural rim damage.
                </div></details>
      {/* FAQ 4 */}
      <details className="rounded-xl bg-primary/60 overflow-hidden group"><summary className="w-full p-5 text-left flex items-center justify-between font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white cursor-pointer list-none">
      <span>Are you operational during late nights, weekends, and bank holidays?</span>
      <ChevronDown className="transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-5 pb-5 text-[13px] leading-[18px] text-gray-400">
                  We are fully active 24 hours a day, 365 days a year. Our overnight dispatch units are permanently manned to handle motorway blowouts, early logistics deadlines, and urgent residential calls when traditional garages are closed.
                </div></details>
      </div>
      </div>
      </section>
      {/* BAND 8: FINAL CTA (Solid Flat Gold Band) */}
      <section className="w-full py-16 md:py-20 px-4 md:px-8 bg-secondary text-primary">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-primary/80 block mb-1">Immediate Assistance Available</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold uppercase text-primary">
                Need Rapid Tyre Fitting in Irlam or Cadishead?
              </h2>
      <p className="text-[15px] leading-[24px] text-primary/90 mt-2 max-w-xl">
                Don&apos;t wait by the roadside. Call our emergency response team now for rapid on-site replacement and puncture repair.
              </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
      <a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary-dark text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider transition-transform active:scale-95 shadow-md" href="tel:08009992470">
      <PhoneCall className="text-secondary h-5 w-5" fill="currentColor" strokeWidth={0} />
                0800 999 2470
              </a>
      </div>
      </div>
      </section>
      </div>
    </main>
  );
}
