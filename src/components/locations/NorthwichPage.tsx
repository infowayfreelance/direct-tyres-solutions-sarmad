import Image from "next/image";
import { ArrowRight, Car, CheckCircle2, CircleDot, ClipboardCheck, Compass, CreditCard, HelpCircle, Info, MapPin, MessageCircle, Navigation, PhoneCall, ShieldCheck, Tractor, TrafficCone } from "lucide-react";

export default function NorthwichPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-cover bg-center min-h-[580px] lg:min-h-[660px] flex items-center justify-center" data-alt="High contrast emergency mobile tyre fitting van with bright flashing amber beacon bar parked along wet Cheshire roadside near Northwich M56 at dusk, technician servicing wheel with impact wrench on asphalt, deep navy ambient atmosphere" style={{ backgroundImage: "url('/hero-section-images-936x527.webp')" }}>
      {/* Gradient Scrim: clear top transitioning to dark navy base */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/60 via-primary-dark/85 to-primary-dark"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-margin-mobile md:px-margin text-center flex flex-col items-center pt-space-xl pb-space-lg">
      {/* Fast Dispatch Alert Badge */}
      <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-accent/20 text-accent text-[14px] leading-[18px] tracking-[0.02em] font-semibold mb-space-md shadow-sm">
      <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
      <span>NORTHWICH RAPID ROADSIDE RESPONSE • 24/7/365</span>
      </div>
      {/* H1 */}
      <h1 className="font-heading text-[36px] leading-[42px] tracking-[-0.01em] font-black md:text-[56px] md:leading-[64px] md:tracking-[-0.02em] md:font-black text-white uppercase max-w-4xl">
              24/7 Mobile Tyre Fitting in <span className="text-secondary">Northwich</span>
      </h1>
      {/* Subheading */}
      <p className="mt-space-md text-[15px] leading-[24px] md:text-[18px] md:leading-[28px] text-gray-400 max-w-3xl">
              Emergency motorway approach and residential mobile tyre replacement across Northwich, M56 Junction 17, and the A556 corridor. Direct mobile workshops on-scene within 25–40 minutes.
            </p>
      {/* CTAs */}
      <div className="mt-space-lg flex flex-col sm:flex-row items-center justify-center gap-space-md w-full max-w-md sm:max-w-none">
      <a className="w-full sm:w-auto px-space-lg py-3.5 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase tracking-wider flex items-center justify-center gap-space-xs hover:brightness-105 active:scale-95 transition-all shadow-lg" href="tel:07955266077">
      <PhoneCall className="h-[20px] w-[20px]" />
      <span>Call 07955 266 077</span>
      </a>
      <a className="w-full sm:w-auto px-space-lg py-3.5 rounded-full bg-primary text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider flex items-center justify-center gap-space-xs hover:bg-primary-light active:scale-95 transition-all shadow-md" href="https://wa.me/448009992470">
      <MessageCircle className="h-[20px] w-[20px] text-accent" />
      <span>WhatsApp Dispatch</span>
      </a>
      </div>
      {/* Micro metadata trust markers */}
      <div className="mt-space-lg flex flex-wrap items-center justify-center gap-y-2 gap-x-space-lg text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <span className="inline-flex items-center gap-1">
      <ShieldCheck className="h-[16px] w-[16px] text-secondary" />
                No Towing Required
              </span>
      <span className="inline-flex items-center gap-1">
      <Navigation className="h-[16px] w-[16px] text-secondary" />
                Live GPS Fleet Tracking
              </span>
      <span className="inline-flex items-center gap-1">
      <CreditCard className="h-[16px] w-[16px] text-secondary" />
                Card Paid Roadside
              </span>
      </div>
      </div>
      </section>
      {/* 2. BENEATH HERO: STATS STRIP */}
      <section className="w-full bg-primary-dark py-space-md">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-md">
      {/* Stat 1 */}
      <div className="bg-primary/60 p-space-md rounded-2xl flex flex-col justify-between shadow-sm">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-wider">Avg Arrival Time</span>
      <div className="mt-space-xs flex items-baseline gap-1">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary">25–35</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Mins</span>
      </div>
      <span className="text-[13px] leading-[18px] text-gray-400 mt-1">Direct from local J17 post</span>
      </div>
      {/* Stat 2 */}
      <div className="bg-primary/60 p-space-md rounded-2xl flex flex-col justify-between shadow-sm">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-wider">Crucial Arteries</span>
      <div className="mt-space-xs flex items-baseline gap-1">
      <span className="font-heading text-[30px] leading-[38px] font-bold text-accent">M56 J17 &amp; A556</span>
      </div>
      <span className="text-[13px] leading-[18px] text-gray-400 mt-1">Priority breakdown corridors</span>
      </div>
      {/* Stat 3 */}
      <div className="bg-primary/60 p-space-md rounded-2xl flex flex-col justify-between shadow-sm">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-wider">Operational Hours</span>
      <div className="mt-space-xs flex items-baseline gap-1">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">24/7/365</span>
      </div>
      <span className="text-[13px] leading-[18px] text-gray-400 mt-1">Continuous live duty crew</span>
      </div>
      {/* Stat 4 */}
      <div className="bg-primary/60 p-space-md rounded-2xl flex flex-col justify-between shadow-sm">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-wider">Van Equipment</span>
      <div className="mt-space-xs flex items-baseline gap-1">
      <span className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-secondary">100%</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Mobile</span>
      </div>
      <span className="text-[13px] leading-[18px] text-gray-400 mt-1">Heavy hydraulic tyre fit bays</span>
      </div>
      </div>
      </div>
      </section>
      {/* 3. LOCAL INTRO SECTION */}
      <section className="w-full bg-primary-dark py-space-xl">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
      <div className="lg:col-span-7 flex flex-col">
      <div className="inline-flex items-center gap-2 text-secondary text-[14px] leading-[18px] tracking-[0.02em] font-semibold uppercase tracking-wider mb-space-xs">
      <MapPin className="h-[18px] w-[18px]" />
      <span>Cheshire Strategic Sector</span>
      </div>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">
                  Rapid roadside interventions across Northwich &amp; the M56 artery
                </h2>
      <p className="mt-space-md text-[15px] leading-[24px] md:text-[18px] md:leading-[28px] text-gray-400">
                  Northwich operates as a crucial transit hub connecting Cheshire manufacturing corridors with the North West motorway system. Centred right at <strong className="text-white font-semibold">M56 Junction 17 (Northwich Services)</strong> and <strong className="text-white font-semibold">Old Mill Road</strong>, our mobile workshops resolve critical tyre failures wherever your vehicle rests.
                </p>
      <p className="mt-space-sm text-[15px] leading-[24px] text-gray-400">
                  Whether stranded with a shredded tread on the J17 southbound slip road, facing a high-impact pothole pinch along the A556, or immobilized on your domestic driveway before the morning commute, Direct Tyre Solutions deploys custom-built tyre fitting vehicles stocked with your vehicle&apos;s specific size, speed index, and load rating. Zero recovery trailers, zero recovery delays.
                </p>
      <div className="mt-space-md flex flex-wrap gap-space-sm">
      <div className="px-space-md py-2 rounded-full bg-primary/80 text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold inline-flex items-center gap-1.5 shadow-sm">
      <MapPin className="h-[16px] w-[16px] text-accent" />
      <span>Northwich Town Centre &amp; Cobbles</span>
      </div>
      <div className="px-space-md py-2 rounded-full bg-primary/80 text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold inline-flex items-center gap-1.5 shadow-sm">
      <Car className="h-[16px] w-[16px] text-accent" />
      <span>M56 Services J16–J18</span>
      </div>
      <div className="px-space-md py-2 rounded-full bg-primary/80 text-white text-[11px] leading-[14px] tracking-[0.06em] font-bold inline-flex items-center gap-1.5 shadow-sm">
      <Tractor className="h-[16px] w-[16px] text-accent" />
      <span>Rural Cheshire Lanes &amp; Holdings</span>
      </div>
      </div>
      </div>
      <div className="lg:col-span-5">
      <div className="bg-primary/60 p-space-lg rounded-2xl shadow-xl flex flex-col gap-space-md">
      <div className="flex items-center justify-between pb-space-sm">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider block">Live Status</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Cheshire South Dispatch</span>
      </div>
      <span className="px-3 py-1 rounded-full bg-accent/30 text-accent text-[11px] leading-[14px] tracking-[0.06em] font-bold">Active • 3 Vans on Duty</span>
      </div>
      <div className="space-y-space-sm">
      <div className="flex items-center justify-between p-space-sm rounded-xl bg-primary-dark">
      <span className="text-[13px] leading-[18px] text-white">M56 J17 Slipway / Services</span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary">18–25 min ETA</span>
      </div>
      <div className="flex items-center justify-between p-space-sm rounded-xl bg-primary-dark">
      <span className="text-[13px] leading-[18px] text-white">A556 Wheelock Bypass</span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary">20–30 min ETA</span>
      </div>
      <div className="flex items-center justify-between p-space-sm rounded-xl bg-primary-dark">
      <span className="text-[13px] leading-[18px] text-white">Elworth &amp; Ettiley Heath</span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary">25–35 min ETA</span>
      </div>
      <div className="flex items-center justify-between p-space-sm rounded-xl bg-primary-dark">
      <span className="text-[13px] leading-[18px] text-white">A533 to Winsford / Northwich Heath</span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary">25–35 min ETA</span>
      </div>
      </div>
      <a className="w-full py-3 rounded-full bg-secondary text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold uppercase text-center tracking-wider hover:brightness-105 active:scale-95 transition-all shadow-md mt-space-xs" href="tel:07955266077">
                    Dispatch Van Immediately
                  </a>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 4. SERVICES: TIGHT 2x2 GRID WITH REAL PHOTOS */}
      <section className="w-full bg-primary-dark py-space-xl">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
      <div>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary uppercase tracking-wider">What We Do</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white mt-1">Mobile Tyre Services in Northwich</h2>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400 max-w-md mt-2 md:mt-0">
                Equipped with industrial bead breakers, dynamic computer balancers, and thousands of premium and budget tyre specs on hand.
              </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
      {/* Service 1 */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden shadow-lg flex flex-col group hover:shadow-2xl transition-all">
      <div className="h-56 w-full overflow-hidden relative">
      <Image src="/gallery-onsite-wheel-fitting.webp" alt="High angle shot of a specialist commercial roadside technician mounting a replacement tyre on a high performance BMW sedan parked along motorway verge with hazard safety cones and illuminated recovery vehicle" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary-dark/80 backdrop-blur-md text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold">
                    M56 Rapid Clear
                  </div>
      </div>
      <div className="p-space-lg flex-1 flex flex-col justify-between">
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Emergency Highway Replacement</h3>
      <p className="mt-space-xs text-[15px] leading-[24px] text-gray-400">
                      Direct deployment to the hard shoulder or emergency refuge areas on the M56 corridor (J16–J18) and high-speed bypasses. All fitters operate under strict Chapter 8 safety guidelines with high-visibility vehicle lighting arrays.
                    </p>
      </div>
      <div className="mt-space-md flex items-center justify-between pt-space-md bg-primary/80 -mx-space-lg -mb-space-lg px-space-lg py-space-md">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-accent">Run-flats • Low Profile • 4x4</span>
      <a className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary hover:underline inline-flex items-center gap-1" href="tel:07955266077">
                      Request Unit <ArrowRight className="h-[16px] w-[16px]" />
      </a>
      </div>
      </div>
      </div>
      {/* Service 2 */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden shadow-lg flex flex-col group hover:shadow-2xl transition-all">
      <div className="h-56 w-full overflow-hidden relative">
      <Image src="/gallery-roadside-fitting.webp" alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary-dark/80 backdrop-blur-md text-accent text-[11px] leading-[14px] tracking-[0.06em] font-bold">
                    BS AU 159 Certified
                  </div>
      </div>
      <div className="p-space-lg flex-1 flex flex-col justify-between">
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">BS AU 159 Puncture Seal</h3>
      <p className="mt-space-xs text-[15px] leading-[24px] text-gray-400">
                      Thorough internal tyre assessment. If nail or screw debris is situated within the central 70% tread area without secondary casing degradation, we execute British Standard vulcanised patch seals on-site, saving you the price of a new casing.
                    </p>
      </div>
      <div className="mt-space-md flex items-center justify-between pt-space-md bg-primary/80 -mx-space-lg -mb-space-lg px-space-lg py-space-md">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-accent">Tread Depth Check • Wheel Balance</span>
      <a className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary hover:underline inline-flex items-center gap-1" href="tel:07955266077">
                      Inspect Tyre <ArrowRight className="h-[16px] w-[16px]" />
      </a>
      </div>
      </div>
      </div>
      {/* Service 3 */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden shadow-lg flex flex-col group hover:shadow-2xl transition-all">
      <div className="h-56 w-full overflow-hidden relative">
      <Image src="/gallery-home-callout.webp" alt="Skilled automotive technician kneeling beside a silver car wheel using a heavy duty pneumatic torque wrench to remove rounded off stubborn wheel nuts in a residential driveway setting" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary-dark/80 backdrop-blur-md text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold">
                    Damage-Free Extraction
                  </div>
      </div>
      <div className="flex-1 flex flex-col justify-between p-space-lg">
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Specialist Locking Nut Removal</h3>
      <p className="mt-space-xs text-[15px] leading-[24px] text-gray-400">
                      Lost your locking wheel key or dealing with stripped, overtightened security bolts? Our mobile technicians use non-destructive reverse-thread extraction kits that free stubborn rims without scratching or damaging precision alloys.
                    </p>
      </div>
      <div className="mt-space-md flex items-center justify-between pt-space-md bg-primary/80 -mx-space-lg -mb-space-lg px-space-lg py-space-md">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-accent">All Vehicle Makes • Alloy Safe</span>
      <a className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary hover:underline inline-flex items-center gap-1" href="tel:07955266077">
                      Unlock Wheels <ArrowRight className="h-[16px] w-[16px]" />
      </a>
      </div>
      </div>
      </div>
      {/* Service 4 */}
      <div className="bg-primary/60 rounded-2xl overflow-hidden shadow-lg flex flex-col group hover:shadow-2xl transition-all">
      <div className="h-56 w-full overflow-hidden relative">
      <Image src="/gallery-evening-callout.webp" alt="Rear view of an equipped mobile tyre service van parked in a calm suburban British driveway fitting fresh Michelin performance tyres onto an SUV parked in front of brick garage" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary-dark/80 backdrop-blur-md text-accent text-[11px] leading-[14px] tracking-[0.06em] font-bold">
                    Home or Workplace
                  </div>
      </div>
      <div className="p-space-lg flex-1 flex flex-col justify-between">
      <div>
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Driveway &amp; Rural Property Fitting</h3>
      <p className="mt-space-xs text-[15px] leading-[24px] text-gray-400">
                      No need to waste weekend hours sitting in tyre depots. We dispatch fully autonomous vans to your home driveway, commercial workplace parking, or rural Cheshire farmhouse. Tyre changes, valve replacement, and precision balancing executed while you work.
                    </p>
      </div>
      <div className="mt-space-md flex items-center justify-between pt-space-md bg-primary/80 -mx-space-lg -mb-space-lg px-space-lg py-space-md">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-accent">Zero Disruption • Pre-Book or Immediate</span>
      <a className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary hover:underline inline-flex items-center gap-1" href="tel:07955266077">
                      Book Driveway <ArrowRight className="h-[16px] w-[16px]" />
      </a>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 5. ROADS & COVERED AREAS SECTION */}
      <section className="w-full bg-primary-dark py-space-xl">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
      <div className="bg-primary/60 p-space-lg md:p-space-xl rounded-2xl shadow-xl">
      <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 text-accent text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase tracking-wider mb-2">
      <Compass className="h-[16px] w-[16px]" />
      <span>Local Territory Index</span>
      </div>
      <h2 className="font-heading text-[30px] leading-[38px] font-bold text-white">
                  Immediate Response Across Key Northwich Routes &amp; Neighboring Towns
                </h2>
      <p className="mt-space-sm text-[15px] leading-[24px] text-gray-400">
                  Our vans stay pre-staged near critical transport intersections to maintain strict sub-40 minute arrival times across south Cheshire:
                </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg mt-space-lg">
      {/* Critical Roads */}
      <div className="bg-primary-dark p-space-md rounded-xl">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary uppercase tracking-wider mb-space-sm flex items-center gap-2">
      <TrafficCone className="h-[20px] w-[20px]" />
      <span>Primary Artery Coverage</span>
      </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    Active rapid dispatch continuously circulating the <strong className="text-white font-semibold">M56 Motorway (Junction 17 Northwich / Knutsford interchange and Northwich Services)</strong>, the vital <strong className="text-white font-semibold">A556 (Old Mill Road, Wheelock Bypass connecting Middlewich to Northwich)</strong>, and the <strong className="text-white font-semibold">A533 (Winsford Road leading toward Elworth and Ettiley Heath)</strong>.
                  </p>
      </div>
      {/* Neighboring Localities */}
      <div className="bg-primary-dark p-space-md rounded-xl">
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-accent uppercase tracking-wider mb-space-sm flex items-center gap-2">
      <CircleDot className="h-[20px] w-[20px]" />
      <span>Nearby Cheshire Service Zones</span>
      </h3>
      <p className="text-[15px] leading-[24px] text-gray-400">
                    We also deliver seamless round-the-clock roadside and home assistance into surrounding districts: <strong className="text-white font-semibold">Knutsford</strong>, <strong className="text-white font-semibold">Middlewich</strong>, <strong className="text-white font-semibold">Winsford</strong>, <strong className="text-white font-semibold">Hartford</strong>, and <strong className="text-white font-semibold">Weaverham</strong>, guaranteeing fast mobile assistance without tow truck expenses.
                  </p>
      </div>
      </div>
      <div className="mt-space-lg pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md">
      <div className="flex items-center gap-2 text-gray-400 text-[13px] leading-[18px]">
      <Info className="text-secondary h-[18px] w-[18px]" />
      <span>Stranded in a remote lane or field entry? Share your <strong className="text-white font-semibold">what3words</strong> location via WhatsApp.</span>
      </div>
      <a className="w-full sm:w-auto px-space-md py-2.5 rounded-full bg-primary text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold hover:bg-primary-light uppercase tracking-wider text-center shrink-0" href="tel:07955266077">
                  Check Nearest Van Location
                </a>
      </div>
      </div>
      </div>
      </section>
      {/* 6. HOW IT WORKS: HORIZONTAL RIBBON */}
      <section className="w-full bg-primary-dark py-space-xl">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
      <div className="text-center max-w-2xl mx-auto mb-space-xl">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary uppercase tracking-wider">Fast 5-Step Process</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white mt-1">From Breakdown to Back on the Road</h2>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-2">No complicated call centers. Speak directly to an emergency tyre technician.</p>
      </div>
      {/* 5-Step Horizontal Ribbon */}
      <div className="relative">
      {/* Connecting Line for larger screens */}
      <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-primary z-0"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md relative z-10">
      {/* Step 01 */}
      <div className="bg-primary/60 p-space-md rounded-2xl flex flex-col items-center text-center shadow-md">
      <div className="w-14 h-14 rounded-full bg-secondary text-primary font-heading text-[30px] leading-[38px] font-bold flex items-center justify-center mb-space-sm shadow-md">
                    01
                  </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white uppercase">Urgent Call</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">
                    Ring 07955 266 077 with your current Northwich location and vehicle registration.
                  </p>
      </div>
      {/* Step 02 */}
      <div className="bg-primary/60 p-space-md rounded-2xl flex flex-col items-center text-center shadow-md">
      <div className="w-14 h-14 rounded-full bg-primary text-accent font-heading text-[30px] leading-[38px] font-bold flex items-center justify-center mb-space-sm shadow-md">
                    02
                  </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white uppercase">Tyre Match</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">
                    We verify your exact tyre dimension (e.g. 225/45 R18) and confirm all-inclusive quote.
                  </p>
      </div>
      {/* Step 03 */}
      <div className="bg-primary/60 p-space-md rounded-2xl flex flex-col items-center text-center shadow-md">
      <div className="w-14 h-14 rounded-full bg-primary text-secondary font-heading text-[30px] leading-[38px] font-bold flex items-center justify-center mb-space-sm shadow-md">
                    03
                  </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white uppercase">Van Dispatched</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">
                    Closest response van rolls out with 25–40 minute ETA directly to your vehicle.
                  </p>
      </div>
      {/* Step 04 */}
      <div className="bg-primary/60 p-space-md rounded-2xl flex flex-col items-center text-center shadow-md">
      <div className="w-14 h-14 rounded-full bg-primary text-accent font-heading text-[30px] leading-[38px] font-bold flex items-center justify-center mb-space-sm shadow-md">
                    04
                  </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white uppercase">Laser Balance &amp; Fit</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">
                    New tyre mounted, new rubber/metal valve fitted, and dynamic wheel balance completed.
                  </p>
      </div>
      {/* Step 05 */}
      <div className="bg-primary/60 p-space-md rounded-2xl flex flex-col items-center text-center shadow-md">
      <div className="w-14 h-14 rounded-full bg-secondary text-primary font-heading text-[30px] leading-[38px] font-bold flex items-center justify-center mb-space-sm shadow-md">
                    05
                  </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white uppercase">Contactless Card</h3>
      <p className="text-[13px] leading-[18px] text-gray-400 mt-1">
                    Tap and go via roadside card machine with full digital invoice receipt sent to email.
                  </p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 7. REAL JOB CASE STUDY CARD */}
      <section className="w-full bg-primary-dark py-space-xl">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
      <div className="max-w-4xl mx-auto">
      {/* Folder tab style header label */}
      <div className="inline-flex items-center gap-2 px-space-md py-1.5 rounded-t-xl bg-primary text-secondary text-[14px] leading-[18px] tracking-[0.02em] font-semibold tracking-wider">
      <ClipboardCheck className="h-[18px] w-[18px]" />
      <span>Verified Callout Log #SB-4412</span>
      </div>
      {/* Main Case Study Card */}
      <div className="bg-primary/60 rounded-2xl rounded-tl-none p-space-md md:p-space-lg shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-center">
      {/* Thumbnail Image */}
      <div className="relative md:col-span-4 rounded-xl overflow-hidden shadow-md h-48 md:h-full min-h-[190px]">
      <Image src="/gallery-evening-home-visit.webp" alt="Close up shot of emergency mobile tyre technician kneeling beside dark grey Mercedes Benz executive car with blue puncture repair warning markers on wet motorway tarmac" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>
      {/* Case Study Content */}
      <div className="md:col-span-8 flex flex-col justify-between">
      <div>
      <div className="flex flex-wrap items-center justify-between gap-2 mb-space-xs">
      <span className="font-heading text-[20px] leading-[26px] font-bold text-white">Northwich M56 J17 Northbound Approach</span>
      <span className="px-2.5 py-0.5 rounded-full bg-secondary/20 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold">
                          26 Min Response
                        </span>
      </div>
      <p className="text-[15px] leading-[24px] text-gray-400">
                        Driver reported sudden pressure loss after hitting construction debris before the Northwich exit slip. Our mobile unit was on scene within 26 minutes to replace a split sidewall on a Mercedes E-Class.
                      </p>
      </div>
      {/* Case Details Grid */}
      <div className="mt-space-md grid grid-cols-2 sm:grid-cols-3 gap-space-xs bg-primary-dark p-space-sm rounded-xl">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block">Vehicle</span>
      <span className="text-[13px] leading-[18px] text-white font-semibold">Mercedes E-Class</span>
      </div>
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block">Tyre Fitted</span>
      <span className="text-[13px] leading-[18px] text-accent font-semibold">245/40 R19 (Run-Flat)</span>
      </div>
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block">Work Carried Out</span>
      <span className="text-[13px] leading-[18px] text-white font-semibold">Roadside Valve &amp; Bal.</span>
      </div>
      </div>
      <div className="mt-space-sm flex items-center justify-between">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400">Technician: Craig W. (Crew #04)</span>
      <span className="text-accent text-[11px] leading-[14px] tracking-[0.06em] font-bold flex items-center gap-1">
      <CheckCircle2 className="h-[14px] w-[14px]" />
                        Resolved with Zero Towing
                      </span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 8. FAQS: TWO-COLUMN GRID OF Q&A CARDS */}
      <section className="w-full bg-primary-dark py-space-xl">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
      <div className="text-center max-w-2xl mx-auto mb-space-lg">
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary uppercase tracking-wider">Common Questions</span>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white mt-1">Northwich Emergency Tyre FAQ</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
      {/* FAQ 1 */}
      <div className="bg-primary/60 p-space-lg rounded-2xl shadow-sm">
      <div className="flex items-start gap-3">
      <HelpCircle className="text-secondary h-[24px] w-[24px] mt-0.5" />
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">What is the response protocol if I am stuck on the M56 near J17?</h3>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-space-xs">
                      If you are on the motorway or an emergency refuge area, prioritize safety: exit the vehicle on the verge-side, stand behind the safety barrier, and telephone our dispatch desk. We will confirm your marker post number or what3words reference and alert you when the illuminated van is slowing behind your vehicle.
                    </p>
      </div>
      </div>
      </div>
      {/* FAQ 2 */}
      <div className="bg-primary/60 p-space-lg rounded-2xl shadow-sm">
      <div className="flex items-start gap-3">
      <HelpCircle className="text-secondary h-[24px] w-[24px] mt-0.5" />
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Can your mobile fitting vans access narrow rural Cheshire lanes?</h3>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-space-xs">
                      Yes. Our fleet comprises standard-wheelbase high-top Mercedes Sprinter and Ford Transit vans equipped with custom low-noise generators and hydraulic jacks. We regularly fit tyres down single-track rural lanes, farm yards, and unpaved drives across the outskirts of Northwich and Hartford.
                    </p>
      </div>
      </div>
      </div>
      {/* FAQ 3 */}
      <div className="bg-primary/60 p-space-lg rounded-2xl shadow-sm">
      <div className="flex items-start gap-3">
      <HelpCircle className="text-secondary h-[24px] w-[24px] mt-0.5" />
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Do you carry premium tyres or budget options for my size?</h3>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-space-xs">
                      We carry complete stock across both economy and premium brands including Michelin, Continental, Pirelli, Goodyear, and Bridgestone, as well as cost-effective mid-range options. When you call, we cross-reference your vehicle reg and present multiple price points before deploying.
                    </p>
      </div>
      </div>
      </div>
      {/* FAQ 4 */}
      <div className="bg-primary/60 p-space-lg rounded-2xl shadow-sm">
      <div className="flex items-start gap-3">
      <HelpCircle className="text-secondary h-[24px] w-[24px] mt-0.5" />
      <div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">How do payment methods work at the roadside?</h3>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-space-xs">
                      Payment is taken purely upon successful fitting of your tyre. All vans carry encrypted 4G contactless chip &amp; pin payment terminals supporting Apple Pay, Google Pay, Visa, and Mastercard. You will receive an immediate VAT invoice sent straight to your email.
                    </p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 9. FINAL CTA: FULL-WIDTH FLAT BAR */}
      <section className="w-full bg-primary/80 py-space-xl">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
      <div className="bg-primary/60 p-space-lg md:p-space-xl rounded-2xl shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-space-lg">
      {/* Text & Stats Summary */}
      <div className="max-w-2xl text-center lg:text-left">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-[11px] leading-[14px] tracking-[0.06em] font-bold mb-space-xs">
      <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
      <span>CREWS STANDING BY • NORTHWICH, CHESHIRE</span>
      </div>
      <h2 className="font-heading text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold text-white">
                  Stranded with a puncture? We come to you.
                </h2>
      <p className="text-[15px] leading-[24px] text-gray-400 mt-space-xs">
                  Average 25–40 minute arrival across Northwich, M56 J17, and the A556. Complete wheel balancing, new valve, and disposal of your old casing included in all emergency dispatches.
                </p>
      <div className="mt-space-md flex flex-wrap justify-center lg:justify-start gap-space-md text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold">
      <span className="flex items-center gap-1.5">
      <CheckCircle2 className="h-[18px] w-[18px] text-secondary" />
                    Sub-40 Min Arrival
                  </span>
      <span className="flex items-center gap-1.5">
      <CheckCircle2 className="h-[18px] w-[18px] text-secondary" />
                    All Major Tyre Brands
                  </span>
      <span className="flex items-center gap-1.5">
      <CheckCircle2 className="h-[18px] w-[18px] text-secondary" />
                    No Membership Needed
                  </span>
      </div>
      </div>
      {/* Action Button */}
      <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-space-sm w-full lg:w-auto shrink-0">
      <a className="w-full sm:w-auto px-space-xl py-4 rounded-full bg-secondary text-primary font-heading text-[20px] leading-[26px] font-bold uppercase tracking-wider flex items-center justify-center gap-space-xs hover:brightness-105 active:scale-95 transition-all shadow-xl" href="tel:07955266077">
      <PhoneCall className="h-[24px] w-[24px]" />
      <span>Call 07955 266 077</span>
      </a>
      <span className="text-gray-400 text-[11px] leading-[14px] tracking-[0.06em] font-bold text-center">
                  Direct Line • 24 Hours • Priority Dispatch
                </span>
      </div>
      </div>
      </div>
      </section>
    </main>
  );
}
