import { ArrowRight, Car, ChevronDown, CreditCard, FileImage, KeyRound, MapPin, MessageCircle, Navigation, PhoneCall, PhoneForwarded, Route, SearchCheck, ShieldCheck, Truck, Wrench } from "lucide-react";

export default function AccringtonPage() {
  return (
    <main className="w-full pt-20 bg-primary-dark">
      <div className="flex flex-col w-full">
      {/* Band 1: Hero (Real Photo Background with Gradient Scrim) */}
      <section className="relative w-full overflow-hidden bg-primary-dark">
      <div className="absolute inset-0 w-full h-full bg-cover bg-center" data-alt="Modern yellow and blue high-visibility emergency mobile tyre fitting van parked at twilight on a British country road shoulder with rear double doors open showing high tech tyre changers, compressed air hoses and nitrogen balancing machine illuminated by brilliant amber work beacons and led strips in cool navy atmosphere" style={{ backgroundImage: "url('/hero-section-images-936x527.webp')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary-dark/90 to-primary-dark"></div>
      <div className="relative w-full max-w-7xl mx-auto px-margin-mobile md:px-margin py-space-xl md:py-28 flex flex-col items-center text-center">
      {/* Response Status Badge */}
      <div className="inline-flex items-center gap-space-xs px-4 py-1.5 rounded-full bg-accent text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold mb-6 shadow-md">
      <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-ping"></span>
      <span>RAPID RESPONSE VANS LIVE: ACCRINGTON &amp; HYNDBURN</span>
      </div>
      {/* H1 Headline */}
      <h1 className="font-heading text-[36px] leading-[42px] tracking-[-0.01em] font-black md:text-[56px] md:leading-[64px] md:tracking-[-0.02em] md:font-black text-white max-w-4xl mb-6">
              24/7 Mobile Tyre Fitting in <span className="text-secondary">Accrington</span>
            </h1>
      {/* Subheading */}
      <p className="text-[15px] leading-[24px] md:text-[18px] md:leading-[28px] text-white max-w-2xl mb-8 font-normal">
              Emergency mobile tyre fitting, puncture repairs, and fleet tyre callouts across Accrington town centre, M65 Junction 7, and the A680 corridor. Fitted on your driveway or roadside in 25–40 minutes.
            </p>
      {/* Immediate Action CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-space-md w-full sm:w-auto">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-8 py-4 rounded-full bg-secondary text-primary text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-all hover:bg-secondary-hover hover:scale-105 active:scale-95 shadow-xl font-bold uppercase tracking-wider" href="tel:07955266077">
      <PhoneCall className="h-5 w-5" fill="currentColor" strokeWidth={0} />
      <span>Call 07955 266 077</span>
      </a>
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-8 py-4 rounded-full bg-primary/80 backdrop-blur-md text-white text-[14px] leading-[18px] tracking-[0.02em] font-semibold transition-all hover:bg-primary-light active:scale-95" href="https://wa.me/448009992470">
      <MessageCircle className="text-accent h-5 w-5" />
      <span>WhatsApp Dispatch</span>
      </a>
      </div>
      {/* Live Dispatch Telemetry Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 w-full max-w-3xl pt-8 bg-primary/60 backdrop-blur-md rounded-2xl p-4">
      <div className="flex flex-col items-center">
      <span className="font-heading text-secondary font-extrabold">21m</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Avg Hyndburn ETA</span>
      </div>
      <div className="flex flex-col items-center">
      <span className="font-heading text-accent font-extrabold">24/7</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Roadside Support</span>
      </div>
      <div className="flex flex-col items-center">
      <span className="font-heading text-secondary font-extrabold">550+</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Tyres In Stock</span>
      </div>
      <div className="flex flex-col items-center">
      <span className="font-heading text-gray-300 font-extrabold">0%</span>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase">Hidden Callout Fees</span>
      </div>
      </div>
      </div>
      </section>
      {/* Band 2: Intro (Solid Deep Navy #0b1e3d) */}
      <section className="w-full bg-primary/60 py-space-xl">
      <div className="w-full max-w-7xl mx-auto px-margin-mobile md:px-margin">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-4 flex flex-col">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-widest mb-2">HYNDBURN LOGISTICS HUB</span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white">
                  Zero-Downtime Tyre Coverage in Accrington
                </h2>
      </div>
      <div className="lg:col-span-8 flex flex-col gap-4 text-[15px] leading-[24px] md:text-[18px] md:leading-[28px] text-white">
      <p>
                  Positioned directly along the bustling industrial spine between Blackburn and Burnley, Accrington carries continuous heavy commuter volume and distribution traffic. With immediate proximity to M65 Junction 7 (Dunkenhalgh) and the essential A680 Manchester Road artery, roadside tyre failures halt critical logistics schedules and strand daily commuters.
                </p>
      <p className="text-gray-400 text-[15px] leading-[24px]">
                  Direct Tyre Solutions keeps dedicated mobile response vans stationed across Hyndburn 24 hours a day, 365 days a year. Whether you have suffered a sudden sidewall pinch over industrial debris on Huncoat Business Park or an unrepairable blowout on the dual-carriageway A56 bypass, our fully kitted mobile tyre workshops bring fitting, laser wheel balancing, and computerised puncture diagnostics right to your vehicle.
                </p>
      </div>
      </div>
      </div>
      </section>
      {/* Band 3: Services (Photo Band with 4 Overlaid Glass Cards) */}
      <section className="relative w-full overflow-hidden bg-primary-dark py-space-xl">
      <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30" data-alt="Professional tyre technician in high-vis orange workwear kneeling on an asphalt pavement using a heavy duty cordless impact wrench to secure wheel nuts onto a passenger car alloy wheel with emergency mobile service van equipped behind him" style={{ backgroundImage: "url('/gallery-onsite-wheel-fitting.webp')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-primary-dark"></div>
      <div className="relative w-full max-w-7xl mx-auto px-margin-mobile md:px-margin">
      <div className="text-center max-w-2xl mx-auto mb-10">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-300 uppercase tracking-wider">FULL WORKSHOP ON WHEELS</span>
      <h2 className="font-heading text-[22px] leading-[28px] font-bold md:text-[30px] md:leading-[38px] md:font-bold text-white mt-1">
                Complete Mobile Tyre Services
              </h2>
      </div>
      {/* 4 Floating Row Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Card 1 */}
      <div className="bg-primary/60 backdrop-blur-md rounded-2xl p-6 transition-transform hover:-translate-y-1 shadow-lg flex flex-col justify-between">
      <div>
      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-white mb-4 shadow-sm">
      <Car className="h-6 w-6 text-white" />
      </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Emergency Roadside</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Rapid dispatch to active dual-carriageways, motorways, and country lanes across Hyndburn.</p>
      </div>
      <div className="mt-6 flex items-center gap-2 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">
      <span>25-40 Min Arrival</span>
      <ArrowRight className="h-[14px] w-[14px]" />
      </div>
      </div>
      {/* Card 2 */}
      <div className="bg-primary/60 backdrop-blur-md rounded-2xl p-6 transition-transform hover:-translate-y-1 shadow-lg flex flex-col justify-between">
      <div>
      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-white mb-4 shadow-sm">
      <Wrench className="h-6 w-6 text-white" />
      </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">BS AU 159 Repair</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Safe minor tread repairs compliant with stringent British safety standards to save you money.</p>
      </div>
      <div className="mt-6 flex items-center gap-2 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">
      <span>Full Safety Test</span>
      <ArrowRight className="h-[14px] w-[14px]" />
      </div>
      </div>
      {/* Card 3 */}
      <div className="bg-primary/60 backdrop-blur-md rounded-2xl p-6 transition-transform hover:-translate-y-1 shadow-lg flex flex-col justify-between">
      <div>
      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-white mb-4 shadow-sm">
      <KeyRound className="h-6 w-6 text-white" />
      </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Locking Nut Extraction</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Non-destructive, master-grade removal for stripped, rounded, or missing wheel nut keys.</p>
      </div>
      <div className="mt-6 flex items-center gap-2 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">
      <span>No Alloy Damage</span>
      <ArrowRight className="h-[14px] w-[14px]" />
      </div>
      </div>
      {/* Card 4 */}
      <div className="bg-primary/60 backdrop-blur-md rounded-2xl p-6 transition-transform hover:-translate-y-1 shadow-lg flex flex-col justify-between">
      <div>
      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-white mb-4 shadow-sm">
      <Truck className="h-6 w-6 text-white" />
      </div>
      <h3 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-2">Driveway &amp; Fleet Fitting</h3>
      <p className="text-[13px] leading-[18px] text-gray-400">Scheduled or same-day batch fitting at home or commercial depots without garage delays.</p>
      </div>
      <div className="mt-6 flex items-center gap-2 text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold uppercase">
      <span>Commercial SLA</span>
      <ArrowRight className="h-[14px] w-[14px]" />
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Band 4: Roads & Coverage Areas (Plain Dark Navy #061226) */}
      <section className="w-full bg-primary-dark py-space-xl">
      <div className="w-full max-w-7xl mx-auto px-margin-mobile md:px-margin">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-widest">ROAD NETWORKS &amp; DISTRICTS</span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-white mt-2 mb-6">
                  Stationed Across Hyndburn’s Critical Arteries
                </h2>
      <p className="text-[15px] leading-[24px] text-gray-400 mb-6">
                  Our high-roof mobile tyre vans patrol within minutes of Accrington&apos;s primary commuter paths and express bypasses. We navigate direct access routes with no delay:
                </p>
      <div className="space-y-3">
      <div className="flex items-start gap-3 p-3 rounded-xl bg-primary/80">
      <Route className="text-accent h-5 w-5" />
      <div>
      <strong className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">M65 Junction 7 (Dunkenhalgh Interchange)</strong>
      <p className="text-[13px] leading-[18px] text-gray-400">Immediate roadside response for east-west Lancashire transit between Blackburn &amp; Colne.</p>
      </div>
      </div>
      <div className="flex items-start gap-3 p-3 rounded-xl bg-primary/80">
      <Navigation className="text-accent h-5 w-5" />
      <div>
      <strong className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">A680 Manchester Road Corridor</strong>
      <p className="text-[13px] leading-[18px] text-gray-400">Rapid callout for town centre, Baxenden, and express links toward Greater Manchester.</p>
      </div>
      </div>
      <div className="flex items-start gap-3 p-3 rounded-xl bg-primary/80">
      <FileImage className="text-accent h-5 w-5" />
      <div>
      <strong className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">A56 Haslingden Bypass</strong>
      <p className="text-[13px] leading-[18px] text-gray-400">High-speed dual-carriageway deployment fitted with amber hazard lighting protection.</p>
      </div>
      </div>
      </div>
      </div>
      <div className="bg-primary/60 rounded-2xl p-6 sm:p-8 flex flex-col gap-6">
      <h3 className="font-heading text-[20px] leading-[26px] font-bold text-white">Key Localities Served</h3>
      <div className="grid grid-cols-2 gap-3">
      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-primary/80">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Blackburn (East)</span>
      </div>
      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-primary/80">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Burnley (West)</span>
      </div>
      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-primary/80">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Oswaldtwistle</span>
      </div>
      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-primary/80">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Haslingden</span>
      </div>
      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-primary/80">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Clayton-le-Moors</span>
      </div>
      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-primary/80">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-white">Church &amp; Rishton</span>
      </div>
      </div>
      <div className="p-4 rounded-xl bg-primary/60 flex items-center justify-between">
      <div className="flex items-center gap-3">
      <MapPin className="text-secondary h-5 w-5" />
      <div className="flex flex-col">
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Stranded in Hyndburn right now?</span>
      <span className="text-[13px] leading-[18px] text-gray-400">Live technician coordinates ready on dispatch</span>
      </div>
      </div>
      <a className="px-4 py-2 rounded-full bg-secondary text-primary text-[14px] leading-[18px] tracking-[0.02em] font-semibold font-bold hover:scale-105 active:scale-95 transition-all whitespace-nowrap" href="tel:07955266077">
                    Get Dispatch
                  </a>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Band 5: How It Works (Horizontal Step Ribbon) */}
      <section className="w-full bg-primary/60 py-space-xl">
      <div className="w-full max-w-7xl mx-auto px-margin-mobile md:px-margin">
      <div className="text-center max-w-2xl mx-auto mb-12">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider">FRICTIONLESS DISPATCH</span>
      <h2 className="font-heading text-[22px] leading-[28px] font-bold md:text-[30px] md:leading-[38px] md:font-bold text-white mt-1">
                From Call to Back on the Road in 5 Steps
              </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
      {/* Step 1 */}
      <div className="bg-primary/80 p-5 rounded-2xl flex flex-col justify-between transition-transform hover:-translate-y-1">
      <div>
      <div className="flex items-center justify-between mb-4">
      <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">1</span>
      <PhoneCall className="text-gray-400 h-5 w-5" />
      </div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Direct Call</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Speak straight to an Accrington technician with zero call-centre queueing.</p>
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary mt-4">Immediate</span>
      </div>
      {/* Step 2 */}
      <div className="bg-primary/80 p-5 rounded-2xl flex flex-col justify-between transition-transform hover:-translate-y-1">
      <div>
      <div className="flex items-center justify-between mb-4">
      <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">2</span>
      <SearchCheck className="text-gray-400 h-5 w-5" />
      </div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Tyre Verify</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">We confirm exact tyre spec via your UK reg plate or sidewall stamping.</p>
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary mt-4">60 Seconds</span>
      </div>
      {/* Step 3 */}
      <div className="bg-primary/80 p-5 rounded-2xl flex flex-col justify-between transition-transform hover:-translate-y-1">
      <div>
      <div className="flex items-center justify-between mb-4">
      <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">3</span>
      <Truck className="text-gray-400 h-5 w-5" />
      </div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Van Mobilised</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Nearest fitted response van rolls out with live ETA tracking sent to your phone.</p>
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary mt-4">25–40 Mins ETA</span>
      </div>
      {/* Step 4 */}
      <div className="bg-primary/80 p-5 rounded-2xl flex flex-col justify-between transition-transform hover:-translate-y-1">
      <div>
      <div className="flex items-center justify-between mb-4">
      <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">4</span>
      <Wrench className="text-gray-400 h-5 w-5" />
      </div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Mount &amp; Balance</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Precision mounting, bead sealing, computer spin balancing &amp; new rubber valve.</p>
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary mt-4">Professional Rig</span>
      </div>
      {/* Step 5 */}
      <div className="bg-primary/80 p-5 rounded-2xl flex flex-col justify-between transition-transform hover:-translate-y-1">
      <div>
      <div className="flex items-center justify-between mb-4">
      <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold">5</span>
      <CreditCard className="text-gray-400 h-5 w-5" />
      </div>
      <h4 className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white mb-1">Card Payment</h4>
      <p className="text-[13px] leading-[18px] text-gray-400">Contactless or chip-and-pin roadside card payment only once completely satisfied.</p>
      </div>
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary mt-4">Zero Pre-Deposit</span>
      </div>
      </div>
      </div>
      </section>
      {/* Band 6: Real Job Verified Log */}
      <section className="w-full bg-primary-dark py-space-xl">
      <div className="w-full max-w-7xl mx-auto px-margin-mobile md:px-margin">
      <div className="bg-primary/60 rounded-2xl overflow-hidden shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12">
      {/* Real Photo Component */}
      <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[420px]">
      <div className="absolute inset-0 w-full h-full bg-cover bg-center" data-alt="Emergency motorway callout service van with high visibility chevron markings and amber strobe lights assisting a modern dark saloon car parked safely in emergency layby on motorway at dusk as mechanic changes tyre" style={{ backgroundImage: "url('/gallery-roadside-fitting.webp')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent lg:hidden"></div>
      <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-dark/90 backdrop-blur-md text-secondary text-[11px] leading-[14px] tracking-[0.06em] font-bold">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    VERIFIED WORK ORDER
                  </div>
      </div>
      {/* Job Details Pane */}
      <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
      <div>
      <div className="flex items-center justify-between mb-3">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 uppercase tracking-wider">Incident File</span>
      <span className="text-[14px] leading-[18px] tracking-[0.02em] font-semibold text-secondary bg-primary/80 px-3 py-1 rounded-lg">#AC-6112</span>
      </div>
      <h3 className="font-heading text-[22px] leading-[28px] font-bold md:text-[30px] md:leading-[38px] md:font-bold text-white mb-4">
                      Hyndburn Road, Accrington
                    </h3>
      <p className="text-[15px] leading-[24px] text-gray-400 mb-6">
                      Customer experienced a sudden puncture on a <strong>Vauxhall Astra (205/55 R16)</strong> right outside the Hyndburn Retail Park. Heavy evening retail traffic made waiting impossible.
                    </p>
      {/* Diagnostic Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="p-3 rounded-xl bg-primary/80">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block">Dispatched ETA</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-secondary">21 Minutes</span>
      </div>
      <div className="p-3 rounded-xl bg-primary/80">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block">Replacement Fitted</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">Michelin Primacy 4</span>
      </div>
      <div className="p-3 rounded-xl bg-primary/80">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block">Torque &amp; Balancing</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-white">110 Nm Calibrated</span>
      </div>
      <div className="p-3 rounded-xl bg-primary/80">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-gray-400 block">Outcome</span>
      <span className="font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold text-accent">Mobile &amp; Cleared</span>
      </div>
      </div>
      </div>
      <div className="flex items-center gap-3 pt-4 text-gray-400 text-[13px] leading-[18px]">
      <ShieldCheck className="text-secondary h-5 w-5" />
      <span>Work signed off by Hyndburn Area Tech Lead. Disposed worn tyre in compliance with UK environmental regulations.</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Band 7: FAQ (Accordion Component) */}
      <section className="w-full bg-primary/60 py-space-xl">
      <div className="w-full max-w-4xl mx-auto px-margin-mobile md:px-margin">
      <div className="text-center mb-10">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-secondary uppercase tracking-wider">FREQUENTLY ASKED QUESTIONS</span>
      <h2 className="font-heading text-[22px] leading-[28px] font-bold md:text-[30px] md:leading-[38px] md:font-bold text-white mt-1">
                Got Questions About Accrington Callouts?
              </h2>
      </div>
      <div className="space-y-4" id="faq-accordion">
      {/* FAQ 1 */}
      <details className="rounded-2xl bg-primary/80 overflow-hidden transition-colors group"><summary className="w-full p-5 text-left flex items-center justify-between text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold focus:outline-none cursor-pointer list-none">
      <span>How fast can your mobile tyre van reach M65 Junction 7?</span>
      <ChevronDown className="transform transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-5 pb-5 text-gray-400 text-[15px] leading-[24px]">
                  Because our emergency vans are staged around the Hyndburn and Dunkenhalgh interchange, our average roadside response time to M65 Junction 7 and the connecting A680 is between 20 to 30 minutes, 24 hours a day.
                </div></details>
      {/* FAQ 2 */}
      <details className="rounded-2xl bg-primary/80 overflow-hidden transition-colors group"><summary className="w-full p-5 text-left flex items-center justify-between text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold focus:outline-none cursor-pointer list-none">
      <span>Can you fit tyres on my home driveway or work depot in Accrington?</span>
      <ChevronDown className="transform transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-5 pb-5 text-gray-400 text-[15px] leading-[24px]">
                  Yes. We routinely fit tyres at private residences, business parks like Huncoat and Altham, and commercial yards. All our vans carry their own on-board electrical generators and silenced air compressors, meaning we do not require external power or water.
                </div></details>
      {/* FAQ 3 */}
      <details className="rounded-2xl bg-primary/80 overflow-hidden transition-colors group"><summary className="w-full p-5 text-left flex items-center justify-between text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold focus:outline-none cursor-pointer list-none">
      <span>What happens if I do not have the locking wheel nut key?</span>
      <ChevronDown className="transform transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-5 pb-5 text-gray-400 text-[15px] leading-[24px]">
                  Our vans are equipped with specialist reverse-thread extraction tooling and heavy-duty release systems capable of removing overtightened, damaged, or lost locking wheel nuts without scratching or damaging your alloy rims.
                </div></details>
      {/* FAQ 4 */}
      <details className="rounded-2xl bg-primary/80 overflow-hidden transition-colors group"><summary className="w-full p-5 text-left flex items-center justify-between text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold focus:outline-none cursor-pointer list-none">
      <span>What tyre brands do you stock for immediate callout?</span>
      <ChevronDown className="transform transition-transform duration-200 group-open:rotate-180 h-5 w-5" />
      </summary><div className="px-5 pb-5 text-gray-400 text-[15px] leading-[24px]">
                  We carry a vast mobile inventory from premium makers (Michelin, Pirelli, Continental, Goodyear, Bridgestone) to reliable mid-range options (Hankook, Kumho) and budget-friendly tyres to match every driver&apos;s budget.
                </div></details>
      </div>
      </div>
      </section>
      {/* Band 8: Final CTA (Solid Vibrant Gold Band #ffd700) */}
      <section className="w-full bg-secondary py-14 md:py-20 text-primary">
      <div className="w-full max-w-7xl mx-auto px-margin-mobile md:px-margin flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
      <div className="max-w-2xl">
      <span className="text-[11px] leading-[14px] tracking-[0.06em] font-bold text-primary-dark uppercase tracking-widest font-extrabold">24/7 ROADSIDE &amp; DRIVEWAY ASSISTANCE</span>
      <h2 className="font-heading text-[28px] leading-[34px] tracking-[-0.01em] font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] md:font-extrabold text-primary font-black mt-1 mb-2">
                Need a Tyre Replaced in Accrington Right Now?
              </h2>
      <p className="text-[15px] leading-[24px] md:text-[18px] md:leading-[28px] text-primary font-medium">
                Do not risk driving on a flat or ruined rim. Our technician is ready to roll out across Hyndburn immediately.
              </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-9 py-5 rounded-full bg-primary-dark text-white font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase font-extrabold" href="tel:07955266077">
      <PhoneForwarded className="text-secondary h-5 w-5" fill="currentColor" strokeWidth={0} />
      <span>Call 07955 266 077</span>
      </a>
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-8 py-5 rounded-full bg-primary/80 backdrop-blur-md text-primary font-heading text-[16px] leading-[22px] tracking-[0.01em] font-bold hover:bg-primary/80 active:scale-95 transition-all font-bold" href="https://wa.me/448009992470">
      <MessageCircle className="h-5 w-5" />
      <span>WhatsApp Dispatch</span>
      </a>
      </div>
      </div>
      </section>
      </div>
    </main>
  );
}
