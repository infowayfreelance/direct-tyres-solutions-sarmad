import Image from "next/image";
import Link from "next/link";
import {
  Star,
  PhoneCall,
  MapPin,
  Timer,
  Wrench,
  CheckCircle2,
  Disc,
  Target,
  Unlock,
  ChevronDown,
  Search,
  Zap,
} from "lucide-react";

const stars = [0, 1, 2, 3, 4];

export default function ManchesterPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* 1. HERO — reg plate lookup module */}
      <section className="relative w-full bg-primary overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/hero-section-images-936x527.webp"
            alt="Manchester skyline at dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-4">
            <div className="flex flex-wrap items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
              <div className="flex items-center gap-1 text-secondary">
                {stars.map((i) => (
                  <Star key={i} className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span className="text-sm font-bold text-white">4.9 / 5.0</span>
              <span className="text-white/70 text-xs">• Over 1,400+ Verified Greater Manchester Callouts</span>
            </div>
            <h1 className="font-heading uppercase text-[40px] leading-none md:text-[56px] tracking-tight font-extrabold text-white">
              24/7 Mobile Tyre Fitting in <span className="text-secondary-hover">Manchester</span>
            </h1>
            <p className="text-lg text-secondary-hover max-w-2xl leading-relaxed">
              Greater Manchester&rsquo;s premier emergency mobile tyre fitting fleet — 20–35 minute dispatch to your roadside, office, or driveway.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-white">
              <div className="flex items-center gap-2 bg-primary-dark/60 px-3 py-1.5 rounded-lg">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-secondary-hover">City Center &amp; M60 Ring</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-dark/60 px-3 py-1.5 rounded-lg">
                <Timer className="h-5 w-5 text-secondary" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-white">Avg Arrival: 24 Mins</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-dark/60 px-3 py-1.5 rounded-lg">
                <Wrench className="h-5 w-5 text-secondary-hover" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-white">Heavy Commercial &amp; Runflat Ready</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-secondary text-primary hover:bg-secondary-hover transition-all shadow-md font-bold"
                href="tel:07955266077"
              >
                <PhoneCall className="h-5 w-5 text-secondary" />
                <span>Call Now: 07955 266 077</span>
              </a>
              <a
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white/15 text-white hover:bg-white/25 transition-all text-sm font-semibold"
                href="#services"
              >
                View Services &amp; Pricing
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-primary/60 border border-white/10 rounded-xl p-6 shadow-xl">
              <div className="flex items-center justify-between pb-3">
                <div className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-secondary" />
                  <span className="text-lg font-semibold text-white">Tyre Specification Finder</span>
                </div>
                <span className="bg-primary text-gray-400 text-[11px] px-2 py-0.5 rounded uppercase">GB Fleet Base</span>
              </div>
              <p className="text-sm text-gray-300 mb-4">
                Enter your vehicle registration to find OEM spec tyres loaded on our Manchester standby units.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center rounded-lg overflow-hidden bg-primary shadow-inner">
                  <div className="bg-[#003399] px-3 py-3 text-white flex flex-col items-center justify-center shrink-0">
                    <span className="text-[10px] font-bold">GB</span>
                  </div>
                  <input
                    className="w-full bg-transparent px-4 py-3 text-white text-xl uppercase tracking-widest font-bold placeholder:text-gray-400 outline-none"
                    placeholder="e.g. MA68 WYR"
                    type="text"
                  />
                </div>
                <a
                  href="tel:07955266077"
                  className="w-full bg-primary hover:bg-secondary transition-colors text-white py-3.5 rounded-lg font-bold flex items-center justify-center gap-2 shadow-sm hover:text-primary"
                >
                  <Zap className="h-[18px] w-[18px]" />
                  <span>Find Mobile Tyre Options</span>
                </a>
              </div>
              <div className="mt-4 pt-2 grid grid-cols-3 gap-2 text-center">
                {[
                  ["FITTING SPEED", "20 Mins/Tyre"],
                  ["LOCKING NUT", "100% Removal"],
                  ["PUNCTURE REPAIR", "BS AU 159"],
                ].map(([label, value]) => (
                  <div key={label} className="bg-white/10 p-2 rounded">
                    <span className="block text-[10px] font-bold text-gray-400">{label}</span>
                    <span className="text-xs font-bold text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LOCAL INTRO */}
      <section className="w-full bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-primary/60 border border-white/10 rounded-xl p-8 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-2">
              <div className="flex items-center gap-2 text-secondary-hover">
                <MapPin className="h-6 w-6" />
                <span className="text-[11px] font-bold uppercase tracking-[0.06em]">MANCHESTER RAPID DISPATCH CORRIDORS</span>
              </div>
              <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white">
                Stranded in Manchester? Our Roadside Units Clear Punctures Fast.
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Manchester&rsquo;s bustling transit network never pauses. From gridlock along the Mancunian Way (A57M) and Princess Parkway to frantic commuter merges at Regent Road and the outer M60 ring road, sudden punctures cause severe headaches. Whether you are pulled over near Manchester Royal Infirmary, stuck in university campuses on Oxford Road, or halted in Trafford Park logistics hubs, our high-velocity Mercedes Sprinter tyre workshops carry state-of-the-art Italian demounting gear, digital balancers, and full size stocks. We eliminate towing fees by resolving blown rubber right on the asphalt.
              </p>
              <div className="flex flex-wrap gap-4 pt-1 text-white">
                {["Mancunian Way Expressway Response", "Multi-Storey Low Clearance Kits", "Corporate Fleet SLAs"].map((f) => (
                  <span key={f} className="flex items-center gap-1.5 text-sm">
                    <CheckCircle2 className="h-[18px] w-[18px] text-secondary" /> {f}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3 bg-white/10 p-4 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 shadow-sm">
                  <Image
                    src="/gallery-onsite-wheel-fitting.webp"
                    alt="Direct Tyre Solutions technician on Manchester roadside"
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">Emergency Lead</div>
                  <p className="text-sm text-gray-300">Manchester Central Division</p>
                  <div className="text-[11px] font-bold text-secondary-hover uppercase mt-1">Standby at Deansgate</div>
                </div>
              </div>
              <p className="text-sm text-gray-300 italic bg-primary/60 border border-white/10 p-3 rounded">
                &ldquo;Our vans are positioned strategically off the ring road so rush-hour delays do not stop us from reaching your breakdown.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="w-full bg-primary-dark py-16" id="services">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
            <span className="text-secondary-hover text-[11px] font-bold uppercase tracking-[0.06em] mb-1">ON-DEMAND ROADSIDE SPECIALISMS</span>
            <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white">
              Comprehensive Mobile Tyre Care in Greater Manchester
            </h2>
            <p className="text-lg text-gray-300 mt-1">
              Equipped to replace, patch, balance, and release stubborn wheel hardware without needing a garage tow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Disc, title: "Rapid Mobile Tyre Fitting in Manchester", body: "Emergency roadside or driveway tyre replacements. We stock Michelin, Goodyear, Pirelli, and budget options with rim diameters from 14\" to 23\" ready for dispatch across Manchester.", note: "Dispatch: 20-35 mins", cta: "Request Van" },
              { icon: Target, title: "On-Site Wheel Balancing in Manchester", body: "Eliminate motorway vibrations after hard pothole impacts on the Mancunian Way. Our vans carry mobile dynamic computer spin balancers for mirror-smooth high-speed driving.", note: "Precision Calibrated", cta: "Book Balance" },
              { icon: Wrench, title: "Fast Roadside Puncture Repairs in Manchester", body: "Safe, British Standard (BS AU 159) internal combi-plug repairs wherever you are parked. If the tread is safely patchable, we repair it directly and save you purchasing a replacement.", note: "BS AU 159 Standard", cta: "Repair Tyre" },
              { icon: Unlock, title: "24/7 Locking Wheel Nut Removal in Manchester", body: "Lost your security key or rounded off locking nuts? Our mobile crews utilize specialized non-destructive extractor tooling to free wheels without scratching premium alloy rims.", note: "No Rim Damage", cta: "Free Wheels" },
            ].map((service) => (
              <div key={service.title} className="bg-primary/60 border border-white/10 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                    <service.icon className="h-6 w-6 text-secondary-hover group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{service.body}</p>
                </div>
                <div className="p-4 bg-primary flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase text-gray-300">{service.note}</span>
                  <a className="text-secondary-hover text-sm font-bold flex items-center gap-1 hover:underline" href="tel:07955266077">
                    {service.cta} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="w-full bg-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-secondary-hover text-[11px] font-bold uppercase tracking-[0.06em]">STREAMLINED 3-STEP RESPONSE</span>
              <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white mt-1">
                Back On The Road In Three Clear Moves
              </h2>
            </div>
            <div className="bg-primary/60 border border-white/10 px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-ping" />
              <span className="text-secondary-hover text-[11px] font-bold uppercase tracking-wider">RESPONSE WINDOW: 20-35 MINS ACROSS MANCHESTER</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: "01", icon: PhoneCall, title: "Call or Send Reg", body: "Provide your location (postcode, street name, or motorway marker) and tyre size or registration plate. We give you a fixed quote immediately.", bg: "bg-primary" },
              { n: "02", icon: Wrench, title: "Technician Dispatched", body: "Our nearest mobile service van navigates via live traffic routes directly to your car. Average Manchester arrival stands at 20–35 minutes.", bg: "bg-secondary" },
              { n: "03", icon: CheckCircle2, title: "Fitted & Rolling", body: "We change, precision-balance, torque the lug nuts to manufacturer specifications, and safely scrap the blown casing. Pay via card on-site.", bg: "bg-primary" },
            ].map((step) => (
              <div key={step.n} className="bg-primary/60 border border-white/10 rounded-xl p-6 shadow-sm relative flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[40px] leading-[48px] font-extrabold text-white/10">{step.n}</span>
                  <span className={`w-10 h-10 rounded-full text-white flex items-center justify-center ${step.bg}`}>
                    <step.icon className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-white mb-1">{step.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COVERAGE */}
      <section className="w-full bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-6 gap-2">
            <div>
              <span className="text-secondary text-[11px] font-bold uppercase tracking-[0.06em]">REGIONAL COVERAGE</span>
              <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white mt-1">
                Active Emergency Mobile Response Across Greater Manchester
              </h2>
            </div>
            <p className="text-sm text-secondary-hover max-w-md">
              Stationed throughout core Greater Manchester sectors for rapid response without long depot turnaround times.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link className="px-4 py-2 rounded-full bg-white/10 hover:bg-secondary transition-colors text-white text-sm font-semibold flex items-center gap-2 hover:text-primary" href="/mobile-tyre-fitting-manchester-city-centre">
              <MapPin className="h-4 w-4 text-secondary" /> Manchester City Centre
            </Link>
            <Link className="px-4 py-2 rounded-full bg-white/10 hover:bg-secondary transition-colors text-white text-sm font-semibold flex items-center gap-2 hover:text-primary" href="/mobile-tyre-fitting-ancoats">
              <MapPin className="h-4 w-4 text-secondary" /> Ancoats &amp; Northern Quarter
            </Link>
            <Link className="px-4 py-2 rounded-full bg-white/10 hover:bg-secondary transition-colors text-white text-sm font-semibold flex items-center gap-2 hover:text-primary" href="/mobile-tyre-fitting-oldham">
              <MapPin className="h-4 w-4 text-secondary" /> Oldham &amp; Saddleworth
            </Link>
            {["Salford & MediaCity", "Trafford & Trafford Park", "Stockport", "Didsbury & Chorlton", "Prestwich & Bury Link", "Altrincham & Sale"].map((a) => (
              <span key={a} className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold flex items-center gap-2">
                <MapPin className="h-4 w-4 text-secondary" /> {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="w-full bg-primary-dark py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
            <span className="text-secondary-hover text-[11px] font-bold uppercase tracking-[0.06em] mb-1">AUTHENTIC LOCAL FEEDBACK</span>
            <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white">
              What Manchester Drivers Say About Our Dispatch
            </h2>
            <p className="text-lg text-gray-300 mt-1">
              Over 1,400 rescues carried out in Greater Manchester without requiring an expensive vehicle recovery truck.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "Punctured my front tyre directly over the Mancunian Way viaduct during Friday evening gridlock. DTS reached me in 24 minutes, pulled me into a safe slip clearance, and swapped the tyre right there. Absolute lifesavers.", initials: "MB", name: "Marcus B.", sub: "Mancunian Way Commuter (BMW 3 Series)" },
              { quote: "Came out to my driveway in Didsbury at 6:45 AM before my clinic shift with a completely flat rear tyre. The technician was courteous, perfectly torqued the wheel, and took the old ruined casing away. Zero stress.", initials: "LJ", name: "Lisa J.", sub: "Didsbury Resident (Audi A4 Estate)" },
              { quote: "Lost our locking wheel nut key on an office delivery van parked in Salford Quays. Direct Tyre Solutions sent their specialist extractor team and had both fronts off in 15 minutes clean. No alloy damage whatsoever.", initials: "DR", name: "Dan R.", sub: "Salford Quays Fleet Supervisor (Ford Transit)" },
            ].map((r) => (
              <div key={r.name} className="bg-primary/60 border border-white/10 rounded-xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-secondary-hover mb-3">
                    {stars.map((i) => (
                      <Star key={i} className="h-5 w-5" fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="text-base text-white mb-4 italic">&ldquo;{r.quote}&rdquo;</p>
                </div>
                <div className="flex items-center gap-3 pt-1">
                  <div className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold">{r.initials}</div>
                  <div>
                    <div className="text-sm font-bold text-white">{r.name}</div>
                    <div className="text-sm text-gray-300">{r.sub}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PRICING CALLOUT */}
      <section className="w-full bg-primary py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-primary text-white rounded-xl p-8 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-secondary">
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-[11px] font-bold uppercase tracking-wider">100% TRANSPARENT MANCHESTER PRICING</span>
              </div>
              <h3 className="font-heading text-[30px] leading-[38px] font-bold text-white">
                No Hidden Callout Fees. Clear Upfront Quotations Guaranteed.
              </h3>
              <p className="text-base text-secondary-hover leading-relaxed">
                When you call, our Manchester dispatch dispatcher details the exact cost including callout, mobile tyre fitting, fresh valve, electronic balancing, and eco-friendly casing disposal before we roll. Never get ambushed by hidden roadside fees.
              </p>
            </div>
            <div className="bg-primary/60 border border-white/10 text-white p-6 rounded-xl shadow-md w-full lg:w-80 shrink-0 text-center flex flex-col gap-2">
              <span className="text-gray-400 text-[11px] font-bold uppercase">EMERGENCY DISPATCH INCLUDES</span>
              <div className="space-y-1 text-left text-sm text-white">
                {["Full Mobile Callout", "Standard Wheel Balancing", "New Rubber Valve Stem", "Old Tyre Casing Disposal"].map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-secondary-hover" /> {f}
                  </div>
                ))}
              </div>
              <a className="w-full bg-secondary hover:bg-secondary-hover text-primary py-3 rounded-lg font-bold transition-colors" href="tel:07955266077">
                Get Exact Quote Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="w-full bg-primary-dark py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-secondary-hover text-[11px] font-bold uppercase tracking-[0.06em]">COMMONLY ASKED QUESTIONS</span>
            <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-white mt-1">
              Manchester Roadside &amp; Tyre Fitting FAQs
            </h2>
          </div>
          <div className="space-y-3">
            {[
              { q: "How do you handle breakdowns on the Mancunian Way or M60?", a: "Safety comes first. If you suffer a blowout on the Mancunian Way or motorway hard shoulder, turn on your hazard lights, exit the vehicle via the nearside, and wait on the elevated verge behind barriers. Our vans are fitted with Chapter 8 compliant amber roof lightbars and highway warning boards to safely illuminate and protect the work zone while replacing your tyre." },
              { q: "Can your mobile vans enter Manchester multi-storey car parks?", a: "Standard high-roof Mercedes Sprinter tyre workshops often exceed the 1.9m–2.1m clearance of Manchester city multi-storeys (like Arndale or Piccadilly). For these specific rescues, we dispatch low-clearance mobile response units carrying portable high-lift pneumatic jacks and mobile air tanks so we can safely service your vehicle directly in your parking bay." },
              { q: "Do you carry premium and runflat tyres in stock on-call?", a: "Yes. Our Greater Manchester hubs stock a full spectrum of premium brands (Michelin, Pirelli, Continental, Goodyear, Bridgestone), commercial load-rated van tyres, reinforced runflats, and reliable mid-range options. When you call, our booking team verifies exact specifications with your registration." },
              { q: "Can you support commercial delivery fleets and vans in Manchester?", a: "Absolutely. We provide immediate emergency coverage and scheduled out-of-hours fleet servicing across Manchester logistics hubs, Trafford Park, and city courier fleets. We offer priority dispatch SLAs, batch tyre maintenance, and electronic VAT invoicing to keep your logistics rolling smoothly." },
            ].map((faq) => (
              <details key={faq.q} className="group bg-primary/60 border border-white/10 rounded-xl shadow-sm overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="w-full text-left p-6 flex items-center justify-between gap-3 hover:bg-primary transition-colors cursor-pointer list-none">
                  <span className="text-lg font-semibold text-white">{faq.q}</span>
                  <ChevronDown className="h-6 w-6 text-secondary-hover shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <p className="px-6 pb-6 text-base text-gray-300 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LOCAL MAP */}
      <section className="w-full bg-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center gap-1 text-secondary-hover font-bold">
                <MapPin className="h-4 w-4" />
                <span className="text-[11px] uppercase">Live Response Grid</span>
              </div>
              <h3 className="font-heading text-[30px] leading-[38px] font-bold text-white">
                20–35 Minute Service Perimeter Around Manchester
              </h3>
              <p className="text-base text-gray-300">
                Stationed centrally with quick access to the Mancunian Way, M60 ring, and Regent Road corridor. Vans loop constantly to bypass rush-hour gridlock.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-inner bg-primary">
                <Image
                  src="/gallery-home-callout.webp"
                  alt="Direct Tyre Solutions coverage across Greater Manchester"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover opacity-70"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-lg shadow-md flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-secondary animate-ping" />
                  <span className="text-[11px] font-bold uppercase text-primary-dark">Manchester Zone • Rapid Dispatch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CLOSING CTA */}
      <section className="w-full bg-primary text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-secondary text-[11px] font-bold uppercase tracking-[0.06em] mb-4">
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
            Immediate 24/7 Mobile Assistance
          </div>
          <h2 className="font-heading text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] tracking-[-0.02em] md:tracking-[-0.03em] font-bold text-white mb-4 max-w-3xl mx-auto">
            Stuck with a tyre in Manchester? We&rsquo;re on our way.
          </h2>
          <p className="text-lg text-secondary-hover max-w-2xl mx-auto mb-8">
            Don&rsquo;t risk driving on a flat across the city. Our nearest available technician can be with you in 20–35 minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-secondary text-primary hover:bg-secondary-hover transition-all shadow-2xl text-lg font-semibold"
              href="tel:07955266077"
            >
              <PhoneCall className="h-6 w-6" />
              <span>Call 07955 266 077</span>
            </a>
            <Link
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
              href="/#contact"
            >
              Book Online Appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
