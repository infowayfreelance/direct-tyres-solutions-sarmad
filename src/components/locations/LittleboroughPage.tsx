import Image from "next/image";
import { AlertTriangle, Building2, CheckCircle2, Clock, MapPin, MessageCircle, PhoneCall, Route, Zap } from "lucide-react";

export default function LittleboroughPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* 1. FULL BLEED PHOTO HERO */}
      <section className="relative w-full h-[640px] md:h-[720px] flex items-end justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-cover bg-center" data-alt="British roadside assistance mobile fitting van illuminated at dusk on a wet rural Pennine A-road with rear doors wide open showcasing internal tyre fitting rig, balancing machine, and high-visibility highway maintenance chevron markings in deep evening blues and tactical golds." style={{ backgroundImage: "url('/hero-section-images-936x527.webp')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/60 to-transparent"></div>
      <div className="relative z-10 w-full max-w-5xl mx-auto px-margin-mobile md:px-margin pb-16 text-center flex flex-col items-center">
      <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-accent text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider mb- space-md shadow-md">
      <MapPin className="h-[14px] w-[14px]" />
              Littleborough &amp; South Pennines • 24/7 Rapid Response
            </div>
      <h1 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold md:text-[56px] md:leading-[64px] md:tracking-[-0.02em] md:font-black text-white mb-space-md max-w-4xl drop-shadow-md">
              24/7 Mobile Tyre Fitting in Littleborough
            </h1>
      <p className="text-[18px] leading-[28px] text-gray-300 max-w-2xl mb-space-lg">
              Immediate Pennine roadside tyre replacement across the A58, A6033, and M62 corridors. Avoid costly recovery flatbeds—our fully-equipped mobile workshops replace and balance tyres on-site within 30–50 minutes.
            </p>
      <div className="flex flex-col sm:flex-row items-center gap-space-md w-full justify-center">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-8 py-4 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase hover:bg-secondary-hover active:scale-95 transition-all shadow-xl" href="tel:07955266077">
      <PhoneCall className="font-bold h-5 w-5" />
                Call 24/7 Dispatch 07955 266 077
              </a>
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-8 py-4 rounded-full bg-primary/80 text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold hover:bg-primary active:scale-95 transition-all backdrop-blur-md shadow-md" href="https://wa.me/448009992470">
      <MessageCircle className="text-accent h-5 w-5" />
                WhatsApp Us
              </a>
      </div>
      </div>
      </section>
      {/* 2. LOCAL INTRO */}
      <section className="w-full py-12 md:py-16 bg-primary-dark">
      <div className="max-w-2xl mx-auto px-margin-mobile md:px-margin text-center">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-widest text-secondary-hover">Zero Recovery Needed</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white mt-space-xs mb-space-md">
              Pennine Stranded? We Bring The Garage To You
            </h2>
      <p className="text-[15px] leading-[24px] text-gray-300">
              Punctures rarely happen near a workshop. Getting caught on dark, exposed Pennine inclines like the winding <span className="text-white font-semibold">A58 over Blackstone Edge</span> or the twisty <span className="text-white font-semibold">A6033 towards Todmorden</span> leaves motorists stranded without mobile reception or accessible garages. Instead of waiting hours for a flatbed recovery into Manchester or Leeds, our mobile vans deploy directly to the verge, farm track, or driveway to fit brand-new rubber instantly.
            </p>
      </div>
      </section>
      {/* 3. SERVICES (VERTICAL TIMELINE WITH SMALL PHOTOS) */}
      <section className="w-full py-16 bg-primary-dark">
      <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin">
      <div className="text-center mb-space-xl">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-accent uppercase tracking-wider">Mobile Tyre Solutions</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white mt-space-xs">Complete On-Location Coverage</h2>
      </div>
      <div className="relative flex flex-col gap-12 before:absolute before:left-6 md:before:left-1/2 before:top-4 before:bottom-4 before:w-0.5 before:-translate-x-1/2 before:bg-primary">
      {/* Step 1 */}
      <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 group">
      <div className="flex items-center gap-4 md:w-1/2 md:justify-end md:pr-8 pl-12 md:pl-0 order-2 md:order-1">
      <div className="text-left md:text-right">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary-hover uppercase">Roadside Urgent</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mt-1">Emergency Tyre Replacement</h3>
      <p className="text-[13px] leading-[18px] text-gray-300 mt-1">Direct fitting for blowouts on the A58, M62, and rural routes. Fitted, laser-balanced, and torqued on the shoulder.</p>
      </div>
      </div>
      <div className="relative absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full overflow-hidden bg-primary/60 ring-4 ring-primary/80 z-10 shadow-lg">
      <Image src="/gallery-evening-callout.webp" alt="Motorway roadside emergency tyre technician" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="hidden md:block md:w-1/2 md:pl-8 order-3">
      <span className="inline-block px-3 py-1 rounded-full bg-primary/60 text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Average response: 35-45 mins</span>
      </div>
      </div>
      {/* Step 2 */}
      <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 group">
      <div className="hidden md:flex md:w-1/2 md:justify-end md:pr-8 order-1">
      <span className="inline-block px-3 py-1 rounded-full bg-primary/60 text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">BS AU 159 Certified Repairs</span>
      </div>
      <div className="relative absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full overflow-hidden bg-primary/60 ring-4 ring-primary/80 z-10 shadow-lg">
      <Image src="/gallery-evening-home-visit.webp" alt="Technician repairing tyre puncture on alloy wheel" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center gap-4 md:w-1/2 md:pl-8 pl-12 order-2">
      <div className="text-left">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-accent uppercase">On-Site Seal</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mt-1">Mobile Puncture Repair</h3>
      <p className="text-[13px] leading-[18px] text-gray-300 mt-1">Tread repairs for screws, nails, and sharp shale stone common to Pennine hill routes without replacing the entire casing.</p>
      </div>
      </div>
      </div>
      {/* Step 3 */}
      <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 group">
      <div className="flex items-center gap-4 md:w-1/2 md:justify-end md:pr-8 pl-12 md:pl-0 order-2 md:order-1">
      <div className="text-left md:text-right">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary-hover uppercase">Damage-Free</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mt-1">Locking Wheel Nut Extraction</h3>
      <p className="text-[13px] leading-[18px] text-gray-300 mt-1">Specialist inverse extraction tooling removes stripped, overtightened, or lost locking wheel nuts without wheel scuffs.</p>
      </div>
      </div>
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full overflow-hidden bg-primary/60 ring-4 ring-primary/80 z-10 shadow-lg">
      <div className="w-full h-full bg-cover bg-center" data-alt="Specialist locking wheel nut removal impact extraction tool firmly attached to alloy wheel in dark workshop lighting with gold diagnostic reflections." style={{ backgroundImage: "url('/gallery-onsite-wheel-fitting.webp')" }}></div>
      </div>
      <div className="hidden md:block md:w-1/2 md:pl-8 order-3">
      <span className="inline-block px-3 py-1 rounded-full bg-primary/60 text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Zero alloy damage guarantee</span>
      </div>
      </div>
      {/* Step 4 */}
      <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 group">
      <div className="hidden md:flex md:w-1/2 md:justify-end md:pr-8 order-1">
      <span className="inline-block px-3 py-1 rounded-full bg-primary/60 text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Michelin, Bridgestone, Continental</span>
      </div>
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full overflow-hidden bg-primary/60 ring-4 ring-primary/80 z-10 shadow-lg">
      <div className="w-full h-full bg-cover bg-center" data-alt="Deep tread winter tyre compound being measured with a digital tread depth gauge on wet tarmac, crisp industrial vehicle workshop setting." style={{ backgroundImage: "url('/gallery-roadside-fitting.webp')" }}></div>
      </div>
      <div className="flex items-center gap-4 md:w-1/2 md:pl-8 pl-12 order-2">
      <div className="text-left">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-accent uppercase">High Pennine Grip</span>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white mt-1">Winter &amp; All-Season Pennine Tyres</h3>
      <p className="text-[13px] leading-[18px] text-gray-300 mt-1">High-traction compounds stocked in our vans specifically for Blackstone Edge freeze conditions and steep gradients.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 4. ROADS & NEARBY AREAS (LABELLED LIST BESIDE SUPPORTING PHOTO PANEL) */}
      <section className="w-full py-16 bg-primary-dark">
      <div className="max-w-5xl mx-auto px-margin-mobile md:px-margin">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-7 flex flex-col">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider">Local Operational Coverage</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white mt-space-xs mb-space-md">
                  Serving Littleborough, Key Corridors &amp; Border Towns
                </h2>
      <p className="text-[15px] leading-[24px] text-gray-300 mb-space-lg">
                  Our vans continuously patrol South Pennine arteries, positioning rapid-fit response units within easy reach of Littleborough centre and surrounding high-elevation road networks.
                </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
      <div className="bg-primary/60 p-space-md rounded-2xl">
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary-hover flex items-center gap-2 mb-2">
      <Route className="h-[14px] w-[14px]" /> Key Road Corridors
                    </h4>
      <ul className="text-[13px] leading-[18px] text-gray-400 space-y-1.5">
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span><strong>A58 Halifax Rd</strong> (Blackstone Edge pass)</li>
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span><strong>A6033 Todmorden Rd</strong> (Summit pass)</li>
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span><strong>M62 Junction 21 &amp; 22</strong> (Rishworth Moor)</li>
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span><strong>B6225</strong> (Hollingworth Lake circuit)</li>
      </ul>
      </div>
      <div className="bg-primary/60 p-space-md rounded-2xl">
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary-hover flex items-center gap-2 mb-2">
      <Building2 className="h-[14px] w-[14px]" /> Surrounding Towns
                    </h4>
      <ul className="text-[13px] leading-[18px] text-gray-400 space-y-1.5">
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span>Rochdale (6 miles)</li>
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span>Todmorden (5.5 miles)</li>
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span>Milnrow &amp; Newhey (4 miles)</li>
      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span>Smithy Bridge &amp; Summit (Local)</li>
      </ul>
      </div>
      </div>
      </div>
      <div className="lg:col-span-5">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 lg:h-96">
      <div className="w-full h-full bg-cover bg-center" data-alt="British roadside recovery mobile fitting van positioned on wet country asphalt road at sunset in Littleborough near Hollingworth Lake, flashing amber beacons cutting through light fog." style={{ backgroundImage: "url('/gallery-home-callout.webp')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent"></div>
      <div className="absolute bottom-4 left-4 right-4 p-space-md rounded-xl bg-primary/80 backdrop-blur-md">
      <p className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Littleborough Station &amp; Lake Hubs</p>
      <p className="text-[13px] leading-[18px] text-gray-300 mt-0.5">Average dispatch ETA to Hollingworth Lake or Summit: 28 mins</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 5. HOW IT WORKS (CLEAN NUMBERED LIST INSIDE ONE UNIFIED DARK CARD) */}
      <section className="w-full py-16 bg-primary-dark">
      <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin">
      <div className="bg-primary/60 rounded-2xl p-space-lg md:p-10 shadow-xl">
      <div className="text-center max-w-xl mx-auto mb-10">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary-hover uppercase tracking-wider">Five Simple Steps</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white mt-space-xs">How Mobile Fitting Works</h2>
      </div>
      <div className="flex flex-col gap-6">
      <div className="flex items-start gap-4 p-space-md rounded-xl bg-primary/80 hover:bg-primary/80 transition-colors">
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-primary font-heading text-[20px] leading-[26px] font-bold flex items-center justify-center font-bold">1</span>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Call or WhatsApp With Your Location</h3>
      <p className="text-[15px] leading-[24px] text-gray-300 mt-1">Dial 07955 266 077. Give our South Pennine dispatcher your tyre size (from the tyre sidewall) and what3words or road marker.</p>
      </div>
      </div>
      <div className="flex items-start gap-4 p-space-md rounded-xl bg-primary/80 hover:bg-primary/80 transition-colors">
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-primary font-heading text-[20px] leading-[26px] font-bold flex items-center justify-center font-bold">2</span>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Fixed Upfront Quote</h3>
      <p className="text-[15px] leading-[24px] text-gray-300 mt-1">We give you one guaranteed price including callout, tyre, valve, digital wheel balancing, and old tyre disposal. No hidden roadside surprises.</p>
      </div>
      </div>
      <div className="flex items-start gap-4 p-space-md rounded-xl bg-primary/80 hover:bg-primary/80 transition-colors">
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-primary font-heading text-[20px] leading-[26px] font-bold flex items-center justify-center font-bold">3</span>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Mobile Workshop Dispatched</h3>
      <p className="text-[15px] leading-[24px] text-gray-300 mt-1">Our Littleborough-allocated van rolls immediately with live tracking updates directly to your smartphone.</p>
      </div>
      </div>
      <div className="flex items-start gap-4 p-space-md rounded-xl bg-primary/80 hover:bg-primary/80 transition-colors">
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-primary font-heading text-[20px] leading-[26px] font-bold flex items-center justify-center font-bold">4</span>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Professional On-Site Fitting</h3>
      <p className="text-[15px] leading-[24px] text-gray-300 mt-1">Technician safely jacks vehicle, unmounts damaged tyre, mounts and balances the new tyre, and torques wheel nuts to manufacturer spec.</p>
      </div>
      </div>
      <div className="flex items-start gap-4 p-space-md rounded-xl bg-primary/80 hover:bg-primary/80 transition-colors">
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-primary font-heading text-[20px] leading-[26px] font-bold flex items-center justify-center font-bold">5</span>
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Contactless Card Payment &amp; Away</h3>
      <p className="text-[15px] leading-[24px] text-gray-300 mt-1">Pay safely on roadside card machine (all major debit/credit cards and Apple/Google Pay accepted). You&apos;re back on your journey in under an hour.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 6. REAL LOCAL JOB */}
      <section className="w-full py-16 bg-primary-dark">
      <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin">
      <div className="text-center mb-8">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary-hover uppercase tracking-wider">Verified Roadside Log</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white mt-space-xs">Recent Littleborough Callout</h2>
      </div>
      <div className="bg-primary/60 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12">
      <div className="md:col-span-5 h-64 md:h-auto relative">
      <Image src="/gallery-precision-care.webp" alt="Real local job van on wet A58 roadside" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-red-500/20 text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase font-bold tracking-wider">
                  Completed Callout
                </div>
      </div>
      <div className="md:col-span-7 p-space-lg flex flex-col justify-between">
      <div>
      <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3 mb-4">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Nissan Qashqai 1.3 DIG-T</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-accent font-mono bg-primary-dark px-2 py-0.5 rounded">215/55 R18 99V</span>
      </div>
      <div className="space-y-3 text-[13px] leading-[18px] text-gray-300">
      <div className="flex items-start gap-2">
      <MapPin className="text-secondary h-4 w-4" />
      <span><strong>Location:</strong> A58 Halifax Road, approaching Blackstone Edge reservoir verge.</span>
      </div>
      <div className="flex items-start gap-2">
      <AlertTriangle className="text-secondary h-4 w-4" />
      <span><strong>Incident:</strong> Sharp millstone aggregate puncture in heavy rain at 21:40 on a Sunday night.</span>
      </div>
      <div className="flex items-start gap-2">
      <Clock className="text-secondary h-4 w-4" />
      <span><strong>Response Time:</strong> 36 minutes from emergency call to technician arrival on scene.</span>
      </div>
      <div className="flex items-start gap-2">
      <CheckCircle2 className="text-secondary h-4 w-4" />
      <span><strong>Resolution:</strong> Fitted mid-range Hankook Ventus Prime 4, balanced, customer resumed journey south safely.</span>
      </div>
      </div>
      </div>
      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-gray-400 text-[13px] leading-[18px]">
      <span>Customer: Mark T. (Littleborough)</span>
      <span className="text-white font-semibold">Saved £220 vs recovery flatbed</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 7. FAQ (CHECKLIST-STYLE LIST WITH DIRECT ANSWERS) */}
      <section className="w-full py-16 bg-primary-dark">
      <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin">
      <div className="text-center mb-10">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-accent uppercase tracking-wider">Got Questions?</span>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white mt-space-xs">Littleborough Mobile Tyre FAQs</h2>
      </div>
      <div className="flex flex-col gap-4">
      <div className="p-space-md rounded-2xl bg-primary/60">
      <div className="flex items-start gap-3">
      <CheckCircle2 className="text-accent h-5 w-5 mt-0.5" />
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">How quickly can you reach Blackstone Edge or the A58?</h3>
      <p className="text-[15px] leading-[24px] text-gray-300 mt-1">Our average emergency Pennine response is 30 to 45 minutes depending on weather conditions. We have dedicated vans operating around Rochdale and the M62 corridor 24 hours a day.</p>
      </div>
      </div>
      </div>
      <div className="p-space-md rounded-2xl bg-primary/60">
      <div className="flex items-start gap-3">
      <CheckCircle2 className="text-accent h-5 w-5 mt-0.5" />
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Do you carry premium and budget tyres in Littleborough stock?</h3>
      <p className="text-[15px] leading-[24px] text-gray-300 mt-1">Yes. Our mobile units carry high-demand sizes from budget brands through to Michelin, Continental, Goodyear, and all-terrain variants ideal for rural tracks.</p>
      </div>
      </div>
      </div>
      <div className="p-space-md rounded-2xl bg-primary/60">
      <div className="flex items-start gap-3">
      <CheckCircle2 className="text-accent h-5 w-5 mt-0.5" />
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">What if I don&apos;t know my exact tyre size?</h3>
      <p className="text-[15px] leading-[24px] text-gray-300 mt-1">Simply read your vehicle registration plate over the phone. Our dispatchers verify your exact manufacturer wheel specifications via DVLA lookup instantly.</p>
      </div>
      </div>
      </div>
      <div className="p-space-md rounded-2xl bg-primary/60">
      <div className="flex items-start gap-3">
      <CheckCircle2 className="text-accent h-5 w-5 mt-0.5" />
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Can you change tyres on high inclines or unpaved tracks?</h3>
      <p className="text-[15px] leading-[24px] text-gray-300 mt-1">Our vans carry heavy-duty high-lift commercial jacks, wheel chocks, and safety floodlights designed for difficult verges, farm gates, and uneven Pennine terrain.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 8. RELATED LOCATIONS (CLEAR TEXT LINKS) */}
      <section className="w-full py-12 bg-primary-dark">
      <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin text-center">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary-hover uppercase tracking-wider mb-space-md">Nearby Serviced Locations</h3>
      <div className="flex flex-wrap items-center justify-center gap-4">
      <a className="px-5 py-2 rounded-full bg-primary/60 text-white hover:bg-primary text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-colors" href="#rochdale">
                Rochdale
              </a>
      <a className="px-5 py-2 rounded-full bg-primary/60 text-white hover:bg-primary text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-colors" href="#milnrow">
                Milnrow
              </a>
      <a className="px-5 py-2 rounded-full bg-primary/60 text-white hover:bg-primary text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-colors" href="#todmorden">
                Todmorden
              </a>
      <a className="px-5 py-2 rounded-full bg-primary/60 text-white hover:bg-primary text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-colors" href="#summit">
                Summit
              </a>
      <a className="px-5 py-2 rounded-full bg-primary/60 text-white hover:bg-primary text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-colors" href="#smithy-bridge">
                Smithy Bridge
              </a>
      <a className="px-5 py-2 rounded-full bg-primary/60 text-white hover:bg-primary text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-colors" href="#hollingworth-lake">
                Hollingworth Lake
              </a>
      </div>
      </div>
      </section>
      {/* 9. FINAL CTA (PROMINENT GOLD BUTTON) */}
      <section className="w-full py-20 bg-primary-dark text-center">
      <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin flex flex-col items-center">
      <span className="inline-flex items-center gap-1 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider mb-2 font-bold">
      <Zap className="h-4 w-4" /> Live Dispatch On Standby
            </span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white mb-space-md">
              Stranded in Littleborough?
            </h2>
      <p className="text-[18px] leading-[28px] text-gray-300 max-w-xl mb-space-lg">
              Don’t wait hours in cold Pennine weather for a recovery trailer. Call our mobile fitting unit right now for instant dispatch to your exact location.
            </p>
      <a className="inline-flex items-center gap-space-sm px-10 py-5 rounded-full bg-secondary text-primary font-heading text-[20px] leading-[26px] font-bold hover:bg-secondary-hover active:scale-95 transition-all shadow-2xl" href="tel:07955266077">
      <PhoneCall className="font-bold h-5 w-5" />
              Call 07955 266 077
            </a>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-space-md">
              24/7 Pennine response note: All weather tyres and run-flats in stock.
            </p>
      </div>
      </section>
    </main>
  );
}
