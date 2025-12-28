import {
  Target,
  Lightbulb,
  Compass,
  CheckCircle2,
  MapPin,
  Users,
  Shield,
  Award,
  Zap,
  Lock,
  Headphones,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  AnimatedFadeInUp,
  AnimatedFadeInDown,
  AnimatedFadeInLeft,
  AnimatedFadeInRight,
  AnimatedScaleInUp,
  AnimatedSlideInFromBottom,
  AnimationWrapper,
} from "@/components/AnimationWrappers";

export default function About() {
  return (
    <div className="bg-background transition-colors duration-300">
      {/* Hero Banner Section */}
      <section
        className="relative w-full pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 lg:py-32 bg-cover bg-center flex items-center justify-center before:absolute before:inset-0 before:bg-black/50"
        style={{
          backgroundImage:
            "url('https://cdn.builder.io/api/v1/image/assets%2F9cce281f3ce14e12bc08ed97613894a0%2F25f7d10066fc4633869d313f410b5964?format=webp&width=800')",
        }}
      >
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
          <div className="mb-2 sm:mb-4 md:mb-6 lg:mb-8 animate-bounce-gentle">
            <img
              src="https://i.ibb.co/s954vR34/eaglesecurityoriginallogo-1-copy.png"
              alt="Eagle Security Guards Logo"
              className="w-16 sm:w-20 md:w-32 lg:w-48 h-16 sm:h-20 md:h-32 lg:h-48 object-contain mx-auto opacity-95 filter drop-shadow-xl"
            />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl font-black mb-2 sm:mb-3 md:mb-6 text-white drop-shadow-2xl leading-tight">
            About Eagle Security Guards
          </h1>
          <p className="text-xs sm:text-sm md:text-lg lg:text-2xl font-black opacity-95 max-w-3xl mx-auto drop-shadow-lg leading-tight">
            Guardians of Trust, Defenders of Peace, Protectors Since 1992
          </p>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-r from-accent to-accent/80 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-white">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-1 sm:mb-2 md:mb-3">
                30+
              </div>
              <p className="text-xs md:text-sm lg:text-lg font-bold opacity-90 leading-tight">
                Years of Excellence
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-1 sm:mb-2 md:mb-3">
                4000+
              </div>
              <p className="text-xs md:text-sm lg:text-lg font-bold opacity-90 leading-tight">
                Dedicated Personnel
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-1 sm:mb-2 md:mb-3">
                50+
              </div>
              <p className="text-xs md:text-sm lg:text-lg font-bold opacity-90 leading-tight">
                Offices Nationwide
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-1 sm:mb-2 md:mb-3">
                100%
              </div>
              <p className="text-xs md:text-sm lg:text-lg font-bold opacity-90 leading-tight">
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Heritage & Legacy Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-gradient-to-b from-background via-background to-background/95 transition-colors duration-300 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <svg
          className="absolute top-1/4 left-1/2 w-2/3 h-3/4 -translate-x-1/2 opacity-40"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="legacyGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "var(--accent)", stopOpacity: 0.4 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "var(--accent)", stopOpacity: 0.05 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M0,150 Q200,50 400,150 Q600,250 800,150 L800,0 L0,0 Z"
            fill="url(#legacyGradient)"
          />
          <path
            d="M0,350 Q150,300 300,350 Q450,400 600,350 Q700,330 800,350 L800,600 L0,600 Z"
            fill="var(--accent)"
            opacity="0.05"
          />
        </svg>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <AnimatedFadeInUp
            className="mb-8 sm:mb-12 md:mb-16 lg:mb-24"
            threshold={0.2}
          >
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6">
              <div className="w-1 md:w-1.5 h-8 sm:h-10 lg:h-12 bg-pk-green-main rounded-full flex-shrink-0"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black leading-tight">
                Built on a Legacy of Excellence
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-muted-foreground max-w-3xl leading-relaxed">
              Since 1992, Eagle Security Guards has been the trusted partner for
              organizations demanding military-grade security solutions
            </p>
          </AnimatedFadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <AnimatedFadeInLeft threshold={0.2}>
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-foreground mb-3 sm:mb-4 leading-tight">
                    Founded on Military Excellence
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground font-bold leading-relaxed">
                    Eagle Security Guards was established by military veterans
                    with a singular vision: to bring military-grade discipline
                    and professionalism to civilian security. We're not just a
                    security company—we're a legacy built on the foundation of
                    Pakistan's armed forces.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-gradient-to-br from-card to-card/80 border border-border/50 p-4 sm:p-6 rounded-xl hover:border-accent/40 hover:shadow-lg transition-all duration-300">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-accent mb-2">
                      30+
                    </div>
                    <p className="text-xs sm:text-sm font-black text-foreground">
                      Years of Service
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-card to-card/80 border border-border/50 p-4 sm:p-6 rounded-xl hover:border-accent/40 hover:shadow-lg transition-all duration-300">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-accent mb-2">
                      50+
                    </div>
                    <p className="text-xs sm:text-sm font-black text-foreground">
                      National Offices
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground font-bold leading-relaxed">
                  Licensed to operate nationwide across Pakistan and Azad Jammu
                  & Kashmir, we've grown into one of the nation's most trusted
                  private security providers.
                </p>
              </div>
            </AnimatedFadeInLeft>

            <AnimatedFadeInRight threshold={0.2}>
              <div className="overflow-hidden rounded-2xl shadow-2xl h-48 sm:h-64 md:h-72 lg:h-96">
                <img
                  src="https://i.ibb.co/Ps11NyHH/Screenshot-2025-12-27-at-10-23-11-PM.png"
                  alt="Elite security personnel in formation"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </AnimatedFadeInRight>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-background transition-colors duration-300 relative overflow-hidden">
        <svg
          className="absolute top-0 right-0 w-1/2 h-full opacity-35"
          viewBox="0 0 600 800"
          preserveAspectRatio="xMaxYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="valuesGradient"
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "var(--accent)", stopOpacity: 0.5 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "var(--accent)", stopOpacity: 0.1 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M600,100 Q500,150 400,100 Q300,50 200,100 Q100,150 0,100 L0,300 Q150,250 300,300 Q450,350 600,300 Z"
            fill="url(#valuesGradient)"
          />
        </svg>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <AnimatedFadeInUp
            className="mb-8 sm:mb-12 md:mb-16 lg:mb-24"
            threshold={0.2}
          >
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6">
              <div className="w-1 md:w-1.5 h-8 sm:h-10 lg:h-12 bg-pk-green-main rounded-full flex-shrink-0"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black leading-tight">
                The Eagle Foundation
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-muted-foreground max-w-3xl leading-relaxed">
              Vision, mission, and values that drive every decision
            </p>
          </AnimatedFadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-5xl">
            <AnimatedScaleInUp delay={0} threshold={0.2}>
              <div className="group relative overflow-hidden bg-gradient-to-br from-card to-card/80 border border-border/50 p-6 sm:p-8 lg:p-10 rounded-2xl transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:-translate-y-1">
                <div className="absolute -right-12 -top-12 w-32 h-32 bg-accent/5 rounded-full group-hover:bg-accent/10 transition-all duration-300 group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 sm:mb-6">
                    <Lightbulb className="w-6 sm:w-7 h-6 sm:h-7 text-accent" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-foreground mb-3 leading-tight">
                    Vision
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base font-bold text-muted-foreground leading-relaxed">
                    To be the gold standard in professional security, recognized
                    globally for vigilance, excellence, and unwavering
                    dedication.
                  </p>
                </div>
              </div>
            </AnimatedScaleInUp>

            <AnimatedScaleInUp delay={100} threshold={0.2}>
              <div className="group relative overflow-hidden bg-gradient-to-br from-card to-card/80 border border-border/50 p-6 sm:p-8 lg:p-10 rounded-2xl transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:-translate-y-1">
                <div className="absolute -right-12 -top-12 w-32 h-32 bg-accent/5 rounded-full group-hover:bg-accent/10 transition-all duration-300 group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 sm:mb-6">
                    <Target className="w-6 sm:w-7 h-6 sm:h-7 text-accent" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-foreground mb-3 leading-tight">
                    Mission
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base font-bold text-muted-foreground leading-relaxed">
                    Safeguard lives and assets through meticulously trained,
                    disciplined, and vetted personnel led by experienced
                    commanders.
                  </p>
                </div>
              </div>
            </AnimatedScaleInUp>

            <AnimatedScaleInUp delay={200} threshold={0.2}>
              <div className="group relative overflow-hidden bg-gradient-to-br from-card to-card/80 border border-border/50 p-6 sm:p-8 lg:p-10 rounded-2xl transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:-translate-y-1">
                <div className="absolute -right-12 -top-12 w-32 h-32 bg-accent/5 rounded-full group-hover:bg-accent/10 transition-all duration-300 group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 sm:mb-6">
                    <Compass className="w-6 sm:w-7 h-6 sm:h-7 text-accent" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-foreground mb-3 leading-tight">
                    Excellence
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base font-bold text-muted-foreground leading-relaxed">
                    Delivering uncompromising reliability, efficiency, and
                    integrity across all sectors with zero tolerance for
                    mediocrity.
                  </p>
                </div>
              </div>
            </AnimatedScaleInUp>
          </div>

          {/* Gallery Section */}
          <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 relative">
            {/* Decorative Background Elements - Gallery Section */}
            <svg
              className="absolute -top-20 -right-40 w-1/2 h-full opacity-35"
              viewBox="0 0 600 800"
              preserveAspectRatio="xMaxYMid slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="galleryGradient"
                  x1="100%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "var(--accent)", stopOpacity: 0.5 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "var(--accent)", stopOpacity: 0.1 }}
                  />
                </linearGradient>
              </defs>
              <path
                d="M600,100 Q500,150 400,100 Q300,50 200,100 Q100,150 0,100 L0,300 Q150,250 300,300 Q450,350 600,300 Z"
                fill="url(#galleryGradient)"
              />
              <circle
                cx="500"
                cy="200"
                r="60"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
                opacity="0.25"
              />
              <circle
                cx="100"
                cy="400"
                r="40"
                fill="var(--accent)"
                opacity="0.08"
              />
              <path
                d="M50,500 L200,450 M150,550 L350,500"
                stroke="var(--accent)"
                strokeWidth="1.5"
                opacity="0.25"
                fill="none"
              />
            </svg>
            <svg
              className="absolute -bottom-32 -left-40 w-2/5 h-1/2 opacity-30"
              viewBox="0 0 400 400"
              preserveAspectRatio="xMinYMax slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,200 Q100,100 200,150 Q300,200 400,100 L400,400 L0,400 Z"
                fill="var(--accent)"
                opacity="0.06"
              />
              <circle
                cx="50"
                cy="300"
                r="70"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
                opacity="0.2"
                strokeDasharray="5,5"
              />
            </svg>

            <div className="relative z-10">
              <AnimatedFadeInUp threshold={0.2}>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-8 sm:mb-12 leading-tight">
                  Gallery
                </h3>
              </AnimatedFadeInUp>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-7">
              {/* Image 1 */}
              <AnimatedFadeInUp delay={0} threshold={0.2}>
                <div className="overflow-hidden bg-background border border-pk-green-main">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fcaec10bd6dd84eb6b1b2aecc7df6f81f%2F5148fbbce7904d8daedf14b17119cd0f?format=webp&width=800"
                    alt="Eagle Foundation Gallery - Security personnel"
                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
                  />
                </div>
              </AnimatedFadeInUp>

              {/* Image 2 */}
              <AnimatedFadeInUp delay={50} threshold={0.2}>
                <div className="overflow-hidden bg-background border border-pk-green-main">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fcaec10bd6dd84eb6b1b2aecc7df6f81f%2F66d852aa6104499f8ce16d44c41297fd?format=webp&width=800"
                    alt="Eagle Foundation Gallery - Professional team"
                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
                  />
                </div>
              </AnimatedFadeInUp>

              {/* Image 3 */}
              <AnimatedFadeInUp delay={100} threshold={0.2}>
                <div className="overflow-hidden bg-background border border-pk-green-main">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fcaec10bd6dd84eb6b1b2aecc7df6f81f%2Fe071d3b02e6b445f976f012db6f6d3eb?format=webp&width=800"
                    alt="Eagle Foundation Gallery - Security operations"
                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
                  />
                </div>
              </AnimatedFadeInUp>

              {/* Image 4 */}
              <AnimatedFadeInUp delay={150} threshold={0.2}>
                <div className="overflow-hidden bg-background border border-pk-green-main">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fcaec10bd6dd84eb6b1b2aecc7df6f81f%2F81032fa35da34bb58697b3f6d97dd013?format=webp&width=800"
                    alt="Eagle Foundation Gallery - Team formation"
                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
                  />
                </div>
              </AnimatedFadeInUp>

              {/* Image 5 */}
              <AnimatedFadeInUp delay={200} threshold={0.2}>
                <div className="overflow-hidden bg-background border border-pk-green-main">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fcaec10bd6dd84eb6b1b2aecc7df6f81f%2Faf91213b00214bf1967bf09bf2f397f8?format=webp&width=800"
                    alt="Eagle Foundation Gallery - Management"
                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
                  />
                </div>
              </AnimatedFadeInUp>

              {/* Image 6 */}
              <AnimatedFadeInUp delay={250} threshold={0.2}>
                <div className="overflow-hidden bg-background border border-pk-green-main">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fcaec10bd6dd84eb6b1b2aecc7df6f81f%2F102c808b952242e2a775196c1f1aa3ed?format=webp&width=800"
                    alt="Eagle Foundation Gallery - Office operations"
                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
                  />
                </div>
              </AnimatedFadeInUp>

              {/* Image 7 */}
              <AnimatedFadeInUp delay={300} threshold={0.2}>
                <div className="overflow-hidden bg-background border border-pk-green-main">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fcaec10bd6dd84eb6b1b2aecc7df6f81f%2Fc0db4c9fc98f4bb89461125fd6148003?format=webp&width=800"
                    alt="Eagle Foundation Gallery - Administrative staff"
                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
                  />
                </div>
              </AnimatedFadeInUp>

              {/* Image 8 */}
              <AnimatedFadeInUp delay={350} threshold={0.2}>
                <div className="overflow-hidden bg-background border border-pk-green-main">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fcaec10bd6dd84eb6b1b2aecc7df6f81f%2F0eddf7d264f241e5af42d3736e13201a?format=webp&width=800"
                    alt="Eagle Foundation Gallery - Training session"
                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
                  />
                </div>
              </AnimatedFadeInUp>

              {/* Image 9 */}
              <AnimatedFadeInUp delay={400} threshold={0.2}>
                <div className="overflow-hidden bg-background border border-pk-green-main">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fcaec10bd6dd84eb6b1b2aecc7df6f81f%2Ff38027d9d070494385bf61d336f175e8?format=webp&width=800"
                    alt="Eagle Foundation Gallery - Professional development"
                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
                  />
                </div>
              </AnimatedFadeInUp>

              {/* Image 10 */}
              <AnimatedFadeInUp delay={450} threshold={0.2}>
                <div className="overflow-hidden bg-background border border-pk-green-main">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fcaec10bd6dd84eb6b1b2aecc7df6f81f%2Fafef6dbe845742bb9bf5241e3dfa1701?format=webp&width=800"
                    alt="Eagle Foundation Gallery - Team leadership"
                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
                  />
                </div>
              </AnimatedFadeInUp>

              {/* Image 11 */}
              <AnimatedFadeInUp delay={500} threshold={0.2}>
                <div className="overflow-hidden bg-background border border-pk-green-main">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fcaec10bd6dd84eb6b1b2aecc7df6f81f%2F7103a995d02f4f33a5ce5123c85888a0?format=webp&width=800"
                    alt="Eagle Foundation Gallery - Field operations"
                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
                  />
                </div>
              </AnimatedFadeInUp>

              {/* Image 12 */}
              <AnimatedFadeInUp delay={550} threshold={0.2}>
                <div className="overflow-hidden bg-background border border-pk-green-main">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fcaec10bd6dd84eb6b1b2aecc7df6f81f%2Fb6b1034c646d4ed4a48fc2aff3b4284d?format=webp&width=800"
                    alt="Eagle Foundation Gallery - Security training"
                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
                  />
                </div>
              </AnimatedFadeInUp>

              {/* Image 13 */}
              <AnimatedFadeInUp delay={600} threshold={0.2}>
                <div className="overflow-hidden bg-background border border-pk-green-main">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fcaec10bd6dd84eb6b1b2aecc7df6f81f%2Fa4d0fdf2f1b4461c905069da669dd8ad?format=webp&width=800"
                    alt="Eagle Foundation Gallery - Coordination meeting"
                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
                  />
                </div>
              </AnimatedFadeInUp>

              {/* Image 14 */}
              <AnimatedFadeInUp delay={650} threshold={0.2}>
                <div className="overflow-hidden bg-background border border-pk-green-main">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fcaec10bd6dd84eb6b1b2aecc7df6f81f%2F5a19e865f2994eaabc562c4bb95912bb?format=webp&width=800"
                    alt="Eagle Foundation Gallery - Equipment and tools"
                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
                  />
                </div>
              </AnimatedFadeInUp>

              {/* Image 15 */}
              <AnimatedFadeInUp delay={700} threshold={0.2}>
                <div className="overflow-hidden bg-background border border-pk-green-main">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fcaec10bd6dd84eb6b1b2aecc7df6f81f%2F0a72cc4ca25748c9abd6d662b9cff87c?format=webp&width=800"
                    alt="Eagle Foundation Gallery - Professional standards"
                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
                  />
                </div>
              </AnimatedFadeInUp>

              {/* Image 16 */}
              <AnimatedFadeInUp delay={750} threshold={0.2}>
                <div className="overflow-hidden bg-background border border-pk-green-main">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fcaec10bd6dd84eb6b1b2aecc7df6f81f%2F486f429f265347afa6e5abe1b7bcdd29?format=webp&width=800"
                    alt="Eagle Foundation Gallery - Facility security"
                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
                  />
                </div>
              </AnimatedFadeInUp>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Management Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-background transition-colors duration-300 relative overflow-hidden">
        {/* Decorative Background Elements - Leadership Section */}
        <svg
          className="absolute top-0 right-0 w-1/2 h-full opacity-35"
          viewBox="0 0 600 800"
          preserveAspectRatio="xMaxYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="leadershipGradient"
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "var(--accent)", stopOpacity: 0.5 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "var(--accent)", stopOpacity: 0.1 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M600,100 Q500,150 400,100 Q300,50 200,100 Q100,150 0,100 L0,300 Q150,250 300,300 Q450,350 600,300 Z"
            fill="url(#leadershipGradient)"
          />
          <circle
            cx="500"
            cy="200"
            r="60"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            opacity="0.25"
          />
          <circle
            cx="100"
            cy="400"
            r="40"
            fill="var(--accent)"
            opacity="0.08"
          />
          <path
            d="M50,500 L200,450 M150,550 L350,500"
            stroke="var(--accent)"
            strokeWidth="1.5"
            opacity="0.25"
            fill="none"
          />
        </svg>
        <svg
          className="absolute bottom-0 -left-40 w-2/5 h-1/2 opacity-30"
          viewBox="0 0 400 400"
          preserveAspectRatio="xMinYMax slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,200 Q100,100 200,150 Q300,200 400,100 L400,400 L0,400 Z"
            fill="var(--accent)"
            opacity="0.06"
          />
          <circle
            cx="50"
            cy="300"
            r="70"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            opacity="0.2"
            strokeDasharray="5,5"
          />
        </svg>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <AnimatedFadeInUp
            className="mb-8 sm:mb-12 md:mb-16 lg:mb-24"
            threshold={0.2}
          >
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6">
              <div className="w-1 md:w-1.5 h-8 sm:h-10 lg:h-12 bg-pk-green-main rounded-full flex-shrink-0"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black leading-tight">
                Leadership & Management Excellence
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-muted-foreground max-w-3xl leading-relaxed">
              Our organizational structure led by experienced commanders and
              seasoned professionals
            </p>
          </AnimatedFadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Organizational Hierarchy */}
            <AnimatedFadeInLeft threshold={0.2}>
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground mb-8 sm:mb-10 lg:mb-12 leading-tight">
                  Organizational Hierarchy
                </h3>

                {/* Level 1: CEO */}
                <div className="flex flex-col items-center mb-4 sm:mb-5">
                  <div className="relative w-full max-w-xs">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 blur-xl"></div>
                    <div className="relative bg-gradient-to-br from-accent to-accent/80 text-accent-foreground p-5 sm:p-7 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-accent/40">
                      <div className="text-lg sm:text-xl lg:text-2xl font-black mb-1">
                        MUSTABEEN ULLAH BAIG
                      </div>
                      <div className="text-xs sm:text-sm font-bold opacity-90">
                        CHIEF EXECUTIVE OFFICER
                      </div>
                    </div>
                  </div>
                  <div className="w-0.5 h-8 sm:h-10 bg-gradient-to-b from-accent to-accent/30 mt-4 sm:mt-5"></div>
                </div>

                {/* Level 2: Executive Director */}
                <div className="flex flex-col items-center mb-4 sm:mb-5">
                  <div className="relative w-full max-w-sm">
                    <div className="absolute inset-0 bg-gradient-to-r from-pk-green-main/10 to-pk-green-main/5 blur-lg"></div>
                    <div className="relative bg-gradient-to-br from-pk-green-light/20 to-pk-green-light/5 border-2 border-pk-green-main p-4 sm:p-6 text-center hover:shadow-lg hover:scale-102 transition-all duration-300">
                      <div className="text-base sm:text-lg lg:text-xl font-black text-foreground mb-1">
                        MAHNOOR MUSTABEEN BAIG
                      </div>
                      <div className="text-xs sm:text-sm font-black text-pk-green-main">
                        EXECUTIVE DIRECTOR
                      </div>
                    </div>
                  </div>
                  <div className="w-0.5 h-8 sm:h-10 bg-gradient-to-b from-pk-green-main/50 to-pk-green-main/20 mt-4 sm:mt-5"></div>
                </div>

                {/* Level 3: Top Management - 3 Column Grid */}
                <div className="mb-4 sm:mb-5">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-5">
                    {/* GM Marketing & Operations */}
                    <div className="group">
                      <div className="relative h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-500/5 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        <div className="relative bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-2 border-blue-500/30 group-hover:border-blue-500/60 p-4 sm:p-5 text-center hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                          <div className="text-sm sm:text-base font-black text-foreground mb-1">
                            MAJ (R) KHALID NAWAZ ABBASI
                          </div>
                          <div className="text-xs font-bold text-blue-600 dark:text-blue-400">
                            GM MARKETING & OPERATIONS
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Company Secretary */}
                    <div className="group">
                      <div className="relative h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-500/5 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        <div className="relative bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-500/30 group-hover:border-purple-500/60 p-4 sm:p-5 text-center hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                          <div className="text-sm sm:text-base font-black text-foreground mb-1">
                            SYED REHAN WAQAR
                          </div>
                          <div className="text-xs font-bold text-purple-600 dark:text-purple-400">
                            COMPANY SECRETARY / MANAGER ADMIN
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Chief Finance Manager */}
                    <div className="group">
                      <div className="relative h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        <div className="relative bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border-2 border-emerald-500/30 group-hover:border-emerald-500/60 p-4 sm:p-5 text-center hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                          <div className="text-sm sm:text-base font-black text-foreground mb-1">
                            SOHAIL AMIR
                          </div>
                          <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                            CHIEF FINANCE MANAGER
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-0.5 h-4 sm:h-5 bg-gradient-to-b from-slate-400 to-slate-200 dark:from-slate-600 dark:to-slate-800"></div>
                  </div>
                </div>

                {/* Level 4: Operations & Regional Management */}
                <div className="mb-4 sm:mb-5">
                  <div className="text-xs sm:text-sm font-black text-accent uppercase tracking-widest mb-3 sm:mb-4 text-center">
                    Operations & Regional Management
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {/* Regional Manager */}
                    <div className="group sm:col-span-2 sm:w-1/2 sm:mx-auto">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-500/5 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        <div className="relative bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/30 group-hover:border-orange-500/60 p-3 sm:p-4 hover:shadow-md transition-all duration-300">
                          <div className="text-sm sm:text-base font-black text-foreground mb-0.5">
                            MAJ (R) ABID LATIF
                          </div>
                          <div className="text-xs font-bold text-orange-600 dark:text-orange-400">
                            Regional Manager (South)
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Area Managers Grid */}
                    <div className="group">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        <div className="relative bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/30 group-hover:border-cyan-500/60 p-3 sm:p-4 hover:shadow-md transition-all duration-300">
                          <div className="text-sm sm:text-base font-black text-foreground mb-0.5">
                            CAPT (R) MANSOOR
                          </div>
                          <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400">
                            Area Manager (Abdul Hakeem)
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        <div className="relative bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/30 group-hover:border-cyan-500/60 p-3 sm:p-4 hover:shadow-md transition-all duration-300">
                          <div className="text-sm sm:text-base font-black text-foreground mb-0.5">
                            HON CAPT (R) MUHAMMAD QURBAN
                          </div>
                          <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400">
                            Area Manager (Karachi)
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        <div className="relative bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/30 group-hover:border-cyan-500/60 p-3 sm:p-4 hover:shadow-md transition-all duration-300">
                          <div className="text-sm sm:text-base font-black text-foreground mb-0.5">
                            ZAKIR UR REHMAN
                          </div>
                          <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400">
                            Area Manager (Karachi)
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        <div className="relative bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/30 group-hover:border-cyan-500/60 p-3 sm:p-4 hover:shadow-md transition-all duration-300">
                          <div className="text-sm sm:text-base font-black text-foreground mb-0.5">
                            RAHEEL AKBAR SHAH
                          </div>
                          <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400">
                            Area Manager (Quetta)
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        <div className="relative bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/30 group-hover:border-cyan-500/60 p-3 sm:p-4 hover:shadow-md transition-all duration-300">
                          <div className="text-sm sm:text-base font-black text-foreground mb-0.5">
                            SALEEM MURAD
                          </div>
                          <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400">
                            Area Manager (Lahore)
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        <div className="relative bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/30 group-hover:border-cyan-500/60 p-3 sm:p-4 hover:shadow-md transition-all duration-300">
                          <div className="text-sm sm:text-base font-black text-foreground mb-0.5">
                            QASER IFTIKHAR
                          </div>
                          <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400">
                            Area Manager (Gujranwala)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Level 5: Administration & Finance */}
                <div>
                  <div className="text-xs sm:text-sm font-black text-accent uppercase tracking-widest mb-3 sm:mb-4 text-center">
                    Administration & Finance
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                    <div className="group">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-rose-500/5 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        <div className="relative bg-gradient-to-br from-rose-500/10 to-rose-500/5 border border-rose-500/30 group-hover:border-rose-500/60 p-3 sm:p-4 hover:shadow-md transition-all duration-300">
                          <div className="text-sm sm:text-base font-black text-foreground mb-0.5">
                            PERVAIZ SIAL
                          </div>
                          <div className="text-xs font-bold text-rose-600 dark:text-rose-400">
                            Admin Officer
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-rose-500/5 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        <div className="relative bg-gradient-to-br from-rose-500/10 to-rose-500/5 border border-rose-500/30 group-hover:border-rose-500/60 p-3 sm:p-4 hover:shadow-md transition-all duration-300">
                          <div className="text-sm sm:text-base font-black text-foreground mb-0.5">
                            MANSOOR AMIN
                          </div>
                          <div className="text-xs font-bold text-rose-600 dark:text-rose-400">
                            Finance Manager (South)
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-rose-500/5 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        <div className="relative bg-gradient-to-br from-rose-500/10 to-rose-500/5 border border-rose-500/30 group-hover:border-rose-500/60 p-3 sm:p-4 hover:shadow-md transition-all duration-300">
                          <div className="text-sm sm:text-base font-black text-foreground mb-0.5">
                            WALEED AHMED
                          </div>
                          <div className="text-xs font-bold text-rose-600 dark:text-rose-400">
                            Accounts Officer (Karachi)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedFadeInLeft>

            {/* Team Experience Overview Table */}
            <AnimatedFadeInRight threshold={0.2}>
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground mb-6 sm:mb-8 leading-tight">
                  Team Experience Overview
                </h3>

                {/* Professional Table Layout with Sharp Corners */}
                <div className="border border-border/80 h-full min-h-screen lg:min-h-full flex flex-col">
                  {/* Table Header */}
                  <div className="grid grid-cols-4 bg-gradient-to-r from-accent/20 to-accent/10 border-b border-border/80 sticky top-0 z-10">
                    <div className="px-4 sm:px-6 py-4 sm:py-5 border-r border-border/80">
                      <p className="text-xs sm:text-sm font-black text-foreground uppercase tracking-wide">
                        Location
                      </p>
                    </div>
                    <div className="px-4 sm:px-6 py-4 sm:py-5 border-r border-border/80">
                      <p className="text-xs sm:text-sm font-black text-foreground uppercase tracking-wide">
                        Team Member
                      </p>
                    </div>
                    <div className="px-4 sm:px-6 py-4 sm:py-5 border-r border-border/80">
                      <p className="text-xs sm:text-sm font-black text-foreground uppercase tracking-wide">
                        Position
                      </p>
                    </div>
                    <div className="px-4 sm:px-6 py-4 sm:py-5">
                      <p className="text-xs sm:text-sm font-black text-foreground uppercase tracking-wide">
                        Experience
                      </p>
                    </div>
                  </div>

                  {/* Table Body */}
                  <div className="flex-1">
                    {/* Islamabad */}
                    <div className="grid grid-cols-4 border-b border-border/50">
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50 bg-accent/5">
                        <p className="text-xs sm:text-sm font-black text-accent">
                          Islamabad
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50">
                        <p className="text-xs sm:text-sm font-bold text-foreground">
                          Mustabeen Ullah Baig
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50">
                        <p className="text-xs sm:text-sm font-bold text-foreground">
                          CEO
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4">
                        <p className="text-xs sm:text-sm font-black text-accent">
                          30y
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 border-b border-border/50">
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50 bg-accent/5">
                        <p className="text-xs sm:text-sm font-black text-accent">
                          Islamabad
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50">
                        <p className="text-xs sm:text-sm font-bold text-foreground">
                          Maj (R) K. N. Abbasi
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50">
                        <p className="text-xs sm:text-sm font-bold text-foreground">
                          GM Marketing & Ops
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4">
                        <p className="text-xs sm:text-sm font-black text-accent">
                          15y
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 border-b border-border/50">
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50 bg-accent/5">
                        <p className="text-xs sm:text-sm font-black text-accent">
                          Islamabad
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50">
                        <p className="text-xs sm:text-sm font-bold text-foreground">
                          Syed Rehan Waqar
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50">
                        <p className="text-xs sm:text-sm font-bold text-foreground">
                          Company Secretary
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4">
                        <p className="text-xs sm:text-sm font-black text-accent">
                          20y
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 border-b border-border/50">
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50 bg-accent/5">
                        <p className="text-xs sm:text-sm font-black text-accent">
                          Islamabad
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50">
                        <p className="text-xs sm:text-sm font-bold text-foreground">
                          Sohail Amir
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50">
                        <p className="text-xs sm:text-sm font-bold text-foreground">
                          CFM
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4">
                        <p className="text-xs sm:text-sm font-black text-accent">
                          15y
                        </p>
                      </div>
                    </div>

                    {/* Lahore */}
                    <div className="grid grid-cols-4 border-b border-border/50">
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50 bg-accent/5">
                        <p className="text-xs sm:text-sm font-black text-accent">
                          Lahore
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50">
                        <p className="text-xs sm:text-sm font-bold text-foreground">
                          Maj (R) Abid Latif
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50">
                        <p className="text-xs sm:text-sm font-bold text-foreground">
                          Regional Manager
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4">
                        <p className="text-xs sm:text-sm font-black text-accent">
                          16y
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 border-b border-border/50">
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50 bg-accent/5">
                        <p className="text-xs sm:text-sm font-black text-accent">
                          Lahore
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50">
                        <p className="text-xs sm:text-sm font-bold text-foreground">
                          Mansoor Amin
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50">
                        <p className="text-xs sm:text-sm font-bold text-foreground">
                          Finance Manager
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4">
                        <p className="text-xs sm:text-sm font-black text-accent">
                          18y
                        </p>
                      </div>
                    </div>

                    {/* Karachi */}
                    <div className="grid grid-cols-4 border-b border-border/50">
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50 bg-accent/5">
                        <p className="text-xs sm:text-sm font-black text-accent">
                          Karachi
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50">
                        <p className="text-xs sm:text-sm font-bold text-foreground">
                          Hon Capt (R) M. Qurban
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50">
                        <p className="text-xs sm:text-sm font-bold text-foreground">
                          Area Manager
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4">
                        <p className="text-xs sm:text-sm font-black text-accent">
                          13y
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 border-b border-border/50">
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50 bg-accent/5">
                        <p className="text-xs sm:text-sm font-black text-accent">
                          Karachi
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50">
                        <p className="text-xs sm:text-sm font-bold text-foreground">
                          Zakir Ur Rehman
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50">
                        <p className="text-xs sm:text-sm font-bold text-foreground">
                          Area Manager
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4">
                        <p className="text-xs sm:text-sm font-black text-accent">
                          30y
                        </p>
                      </div>
                    </div>

                    {/* Multan */}
                    <div className="grid grid-cols-4 border-b border-border/50">
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50 bg-accent/5">
                        <p className="text-xs sm:text-sm font-black text-accent">
                          Multan
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50">
                        <p className="text-xs sm:text-sm font-bold text-foreground">
                          Capt (R) Mansoor
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50">
                        <p className="text-xs sm:text-sm font-bold text-foreground">
                          Area Manager
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4">
                        <p className="text-xs sm:text-sm font-black text-accent">
                          5y
                        </p>
                      </div>
                    </div>

                    {/* Gujranwala */}
                    <div className="grid grid-cols-4 border-b border-border/50">
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50 bg-accent/5">
                        <p className="text-xs sm:text-sm font-black text-accent">
                          Gujranwala
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50">
                        <p className="text-xs sm:text-sm font-bold text-foreground">
                          Qaser Iftikhar
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50">
                        <p className="text-xs sm:text-sm font-bold text-foreground">
                          Area Manager
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4">
                        <p className="text-xs sm:text-sm font-black text-accent">
                          8y
                        </p>
                      </div>
                    </div>

                    {/* Quetta */}
                    <div className="grid grid-cols-4 border-b border-border/50">
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50 bg-accent/5">
                        <p className="text-xs sm:text-sm font-black text-accent">
                          Quetta
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50">
                        <p className="text-xs sm:text-sm font-bold text-foreground">
                          Raheel Akbar Shah
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50">
                        <p className="text-xs sm:text-sm font-bold text-foreground">
                          Area Manager
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4">
                        <p className="text-xs sm:text-sm font-black text-accent">
                          12y
                        </p>
                      </div>
                    </div>

                    {/* AJK */}
                    <div className="grid grid-cols-4 border-b border-border/50">
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50 bg-accent/5">
                        <p className="text-xs sm:text-sm font-black text-accent">
                          AJK
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50">
                        <p className="text-xs sm:text-sm font-bold text-foreground">
                          Sub (R) M. Iqbal
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50">
                        <p className="text-xs sm:text-sm font-bold text-foreground">
                          Area Manager
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4">
                        <p className="text-xs sm:text-sm font-black text-accent">
                          18y
                        </p>
                      </div>
                    </div>

                    {/* Chakwal */}
                    <div className="grid grid-cols-4 border-b border-border/50">
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50 bg-accent/5">
                        <p className="text-xs sm:text-sm font-black text-accent">
                          Chakwal
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50">
                        <p className="text-xs sm:text-sm font-bold text-foreground">
                          Sub (R) M. Aslam
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4 border-r border-border/50">
                        <p className="text-xs sm:text-sm font-bold text-foreground">
                          Regional Manager
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4">
                        <p className="text-xs sm:text-sm font-black text-accent">
                          14y
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedFadeInRight>
          </div>
        </div>
      </section>

      {/* Expertise Summary Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-background transition-colors duration-300 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <AnimatedSlideInFromBottom threshold={0.2}>
            <div className="relative overflow-hidden bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/30 rounded-2xl p-8 sm:p-10 md:p-12 lg:p-16">
              <div className="absolute -right-20 -top-20 w-52 h-52 bg-accent/5 rounded-full"></div>
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-accent/5 rounded-full"></div>
              <div className="relative z-10">
                <p className="text-xs font-black text-accent uppercase tracking-widest mb-4 sm:mb-6">
                  Our Commitment
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 sm:mb-6 text-foreground max-w-3xl">
                  Strategic Security Solutions That Deliver Results
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-muted-foreground max-w-2xl leading-relaxed mb-6 sm:mb-8">
                  From comprehensive threat assessment to tactical response
                  protocols, we provide complete protection backed by military
                  expertise, continuous training standards, and proven success
                  protecting Pakistan's most critical organizations.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 flex-wrap">
                  <a
                    href="/services"
                    className="bg-accent text-accent-foreground px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 font-black text-xs sm:text-sm lg:text-base text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block rounded-lg"
                  >
                    Explore Our Services
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-accent text-accent px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 font-black text-xs sm:text-sm lg:text-base text-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 inline-block rounded-lg"
                  >
                    Request Consultation
                  </a>
                  <WhatsAppButton
                    size="md"
                    message="I'm interested in Eagle Security's comprehensive security solutions."
                  />
                </div>
              </div>
            </div>
          </AnimatedSlideInFromBottom>
        </div>
      </section>
    </div>
  );
}
