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
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-gradient-to-b from-background/95 via-background to-background transition-colors duration-300 relative overflow-hidden">
        <svg
          className="absolute top-1/3 -left-40 w-1/2 h-2/3 opacity-35"
          viewBox="0 0 500 600"
          preserveAspectRatio="xMinYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="apartGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "var(--accent)", stopOpacity: 0.5 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "var(--accent)", stopOpacity: 0.08 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M0,100 Q100,50 200,100 Q300,150 400,100 Q500,150 500,250 L0,250 Z"
            fill="url(#apartGradient)"
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
                Why Organizations Trust Eagle
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-muted-foreground max-w-3xl leading-relaxed">
              Six pillars that define our competitive advantage
            </p>
          </AnimatedFadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            <AnimatedFadeInUp delay={0} threshold={0.2}>
              <div className="group relative overflow-hidden bg-gradient-to-br from-card to-card/80 border border-border/50 p-5 sm:p-6 lg:p-8 rounded-xl transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:-translate-y-1">
                <div className="absolute -right-10 -top-10 w-28 h-28 bg-accent/5 rounded-full group-hover:bg-accent/10 transition-all duration-300 group-hover:scale-110"></div>
                <div className="relative z-10">
                  <Shield className="w-8 sm:w-10 h-8 sm:h-10 text-accent mb-4 sm:mb-5" />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-foreground mb-2 sm:mb-3 leading-tight">
                    Military Heritage
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base font-bold text-muted-foreground leading-relaxed">
                    Personnel drawn from Pakistan's elite armed forces with
                    unparalleled training and discipline.
                  </p>
                </div>
              </div>
            </AnimatedFadeInUp>

            <AnimatedFadeInUp delay={100} threshold={0.2}>
              <div className="group relative overflow-hidden bg-gradient-to-br from-card to-card/80 border border-border/50 p-5 sm:p-6 lg:p-8 rounded-xl transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:-translate-y-1">
                <div className="absolute -right-10 -top-10 w-28 h-28 bg-accent/5 rounded-full group-hover:bg-accent/10 transition-all duration-300 group-hover:scale-110"></div>
                <div className="relative z-10">
                  <Award className="w-8 sm:w-10 h-8 sm:h-10 text-accent mb-4 sm:mb-5" />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-foreground mb-2 sm:mb-3 leading-tight">
                    Rigorous Vetting
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base font-bold text-muted-foreground leading-relaxed">
                    Comprehensive background screening ensures only the most
                    qualified professionals join our ranks.
                  </p>
                </div>
              </div>
            </AnimatedFadeInUp>

            <AnimatedFadeInUp delay={200} threshold={0.2}>
              <div className="group relative overflow-hidden bg-gradient-to-br from-card to-card/80 border border-border/50 p-5 sm:p-6 lg:p-8 rounded-xl transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:-translate-y-1">
                <div className="absolute -right-10 -top-10 w-28 h-28 bg-accent/5 rounded-full group-hover:bg-accent/10 transition-all duration-300 group-hover:scale-110"></div>
                <div className="relative z-10">
                  <Zap className="w-8 sm:w-10 h-8 sm:h-10 text-accent mb-4 sm:mb-5" />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-foreground mb-2 sm:mb-3 leading-tight">
                    Rapid Response
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base font-bold text-muted-foreground leading-relaxed">
                    24/7 monitoring and immediate action protocols ensure
                    threats are addressed swiftly and effectively.
                  </p>
                </div>
              </div>
            </AnimatedFadeInUp>

            <AnimatedFadeInUp delay={300} threshold={0.2}>
              <div className="group relative overflow-hidden bg-gradient-to-br from-card to-card/80 border border-border/50 p-5 sm:p-6 lg:p-8 rounded-xl transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:-translate-y-1">
                <div className="absolute -right-10 -top-10 w-28 h-28 bg-accent/5 rounded-full group-hover:bg-accent/10 transition-all duration-300 group-hover:scale-110"></div>
                <div className="relative z-10">
                  <Lock className="w-8 sm:w-10 h-8 sm:h-10 text-accent mb-4 sm:mb-5" />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-foreground mb-2 sm:mb-3 leading-tight">
                    National Network
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base font-bold text-muted-foreground leading-relaxed">
                    50+ offices across Pakistan ensure rapid response and local
                    expertise wherever you operate.
                  </p>
                </div>
              </div>
            </AnimatedFadeInUp>

            <AnimatedFadeInUp delay={400} threshold={0.2}>
              <div className="group relative overflow-hidden bg-gradient-to-br from-card to-card/80 border border-border/50 p-5 sm:p-6 lg:p-8 rounded-xl transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:-translate-y-1">
                <div className="absolute -right-10 -top-10 w-28 h-28 bg-accent/5 rounded-full group-hover:bg-accent/10 transition-all duration-300 group-hover:scale-110"></div>
                <div className="relative z-10">
                  <Headphones className="w-8 sm:w-10 h-8 sm:h-10 text-accent mb-4 sm:mb-5" />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-foreground mb-2 sm:mb-3 leading-tight">
                    Client-Centric Approach
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base font-bold text-muted-foreground leading-relaxed">
                    Your security needs drive everything we do, with customized
                    solutions for every scenario.
                  </p>
                </div>
              </div>
            </AnimatedFadeInUp>

            <AnimatedFadeInUp delay={500} threshold={0.2}>
              <div className="group relative overflow-hidden bg-gradient-to-br from-card to-card/80 border border-border/50 p-5 sm:p-6 lg:p-8 rounded-xl transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:-translate-y-1">
                <div className="absolute -right-10 -top-10 w-28 h-28 bg-accent/5 rounded-full group-hover:bg-accent/10 transition-all duration-300 group-hover:scale-110"></div>
                <div className="relative z-10">
                  <Briefcase className="w-8 sm:w-10 h-8 sm:h-10 text-accent mb-4 sm:mb-5" />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-foreground mb-2 sm:mb-3 leading-tight">
                    Proven Excellence
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base font-bold text-muted-foreground leading-relaxed">
                    Trusted by government agencies, financial institutions, and
                    Fortune 500 companies since 1992.
                  </p>
                </div>
              </div>
            </AnimatedFadeInUp>
          </div>
        </div>
      </section>

      {/* Leadership & Management Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-background transition-colors duration-300 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <AnimatedFadeInUp className="mb-8 sm:mb-12 md:mb-16 lg:mb-24" threshold={0.2}>
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6">
              <div className="w-1 md:w-1.5 h-8 sm:h-10 lg:h-12 bg-pk-green-main rounded-full flex-shrink-0"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black leading-tight">
                Leadership & Management Excellence
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-muted-foreground max-w-3xl leading-relaxed">
              Our organizational structure led by experienced commanders and seasoned professionals
            </p>
          </AnimatedFadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Organizational Hierarchy */}
            <AnimatedFadeInLeft threshold={0.2}>
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-foreground mb-6 sm:mb-8 leading-tight">
                  Organizational Hierarchy
                </h3>

                {/* CEO */}
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-br from-accent/20 to-accent/10 border-2 border-accent rounded-xl p-4 sm:p-6 w-full sm:w-3/4 text-center hover:shadow-lg transition-all duration-300">
                    <div className="text-lg sm:text-xl lg:text-2xl font-black text-foreground mb-1">
                      MUSTABEEN ULLAH BAIG
                    </div>
                    <div className="text-xs sm:text-sm lg:text-base font-black text-accent">
                      CEO
                    </div>
                  </div>
                  <div className="w-1 h-6 sm:h-8 bg-border my-2 sm:my-3"></div>
                </div>

                {/* Executive Director */}
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-xl p-4 sm:p-6 w-full sm:w-3/4 text-center hover:shadow-lg transition-all duration-300">
                    <div className="text-base sm:text-lg lg:text-xl font-black text-foreground mb-1">
                      MAHNOOR MUSTABEEN BAIG
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-muted-foreground">
                      EXECUTIVE DIRECTOR
                    </div>
                  </div>
                  <div className="w-1 h-6 sm:h-8 bg-border my-2 sm:my-3"></div>
                </div>

                {/* Top Management */}
                <div>
                  <div className="text-xs sm:text-sm font-black text-accent uppercase tracking-widest mb-3 sm:mb-4">
                    Top Management
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-lg p-3 sm:p-4 hover:shadow-md transition-all duration-300">
                      <div className="text-sm sm:text-base font-black text-foreground">MAJ (R) KHALID NAWAZ ABBASI</div>
                      <div className="text-xs font-bold text-muted-foreground">GM Marketing & Operations</div>
                    </div>
                    <div className="bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-lg p-3 sm:p-4 hover:shadow-md transition-all duration-300">
                      <div className="text-sm sm:text-base font-black text-foreground">SYED REHAN WAQAR</div>
                      <div className="text-xs font-bold text-muted-foreground">Company Secretary / Manager Admin</div>
                    </div>
                    <div className="bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-lg p-3 sm:p-4 hover:shadow-md transition-all duration-300">
                      <div className="text-sm sm:text-base font-black text-foreground">SOHAIL AMIR</div>
                      <div className="text-xs font-bold text-muted-foreground">Chief Finance Manager</div>
                    </div>
                  </div>
                </div>

                {/* Operations & Regional Management */}
                <div>
                  <div className="text-xs sm:text-sm font-black text-accent uppercase tracking-widest mb-3 sm:mb-4">
                    Operations & Regional Management
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-lg p-3 sm:p-4 hover:shadow-md transition-all duration-300">
                      <div className="text-sm sm:text-base font-black text-foreground">MAJ (R) ABID LATIF</div>
                      <div className="text-xs font-bold text-muted-foreground">Regional Manager (South)</div>
                    </div>
                    <div className="bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-lg p-3 sm:p-4 hover:shadow-md transition-all duration-300">
                      <div className="text-sm sm:text-base font-black text-foreground">CAPT (R) MANSOOR</div>
                      <div className="text-xs font-bold text-muted-foreground">Area Manager (Abdul Hakeem)</div>
                    </div>
                    <div className="bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-lg p-3 sm:p-4 hover:shadow-md transition-all duration-300">
                      <div className="text-sm sm:text-base font-black text-foreground">HON CAPT (R) MUHAMMAD QURBAN</div>
                      <div className="text-xs font-bold text-muted-foreground">Area Manager (Karachi)</div>
                    </div>
                    <div className="bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-lg p-3 sm:p-4 hover:shadow-md transition-all duration-300">
                      <div className="text-sm sm:text-base font-black text-foreground">ZAKIR UR REHMAN</div>
                      <div className="text-xs font-bold text-muted-foreground">Area Manager (Karachi)</div>
                    </div>
                    <div className="bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-lg p-3 sm:p-4 hover:shadow-md transition-all duration-300">
                      <div className="text-sm sm:text-base font-black text-foreground">RAHEEL AKBAR SHAH</div>
                      <div className="text-xs font-bold text-muted-foreground">Area Manager (Quetta)</div>
                    </div>
                    <div className="bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-lg p-3 sm:p-4 hover:shadow-md transition-all duration-300">
                      <div className="text-sm sm:text-base font-black text-foreground">SALEEM MURAD</div>
                      <div className="text-xs font-bold text-muted-foreground">Area Manager (Lahore)</div>
                    </div>
                    <div className="bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-lg p-3 sm:p-4 hover:shadow-md transition-all duration-300">
                      <div className="text-sm sm:text-base font-black text-foreground">QASER IFTIKHAR</div>
                      <div className="text-xs font-bold text-muted-foreground">Area Manager (Gujranwala)</div>
                    </div>
                  </div>
                </div>

                {/* Administration & Finance */}
                <div>
                  <div className="text-xs sm:text-sm font-black text-accent uppercase tracking-widest mb-3 sm:mb-4">
                    Administration & Finance
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-lg p-3 sm:p-4 hover:shadow-md transition-all duration-300">
                      <div className="text-sm sm:text-base font-black text-foreground">PERVAIZ SIAL</div>
                      <div className="text-xs font-bold text-muted-foreground">Admin Officer</div>
                    </div>
                    <div className="bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-lg p-3 sm:p-4 hover:shadow-md transition-all duration-300">
                      <div className="text-sm sm:text-base font-black text-foreground">MANSOOR AMIN</div>
                      <div className="text-xs font-bold text-muted-foreground">Finance Manager (South)</div>
                    </div>
                    <div className="bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-lg p-3 sm:p-4 hover:shadow-md transition-all duration-300">
                      <div className="text-sm sm:text-base font-black text-foreground">WALEED AHMED</div>
                      <div className="text-xs font-bold text-muted-foreground">Accounts Officer (Karachi)</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedFadeInLeft>

            {/* Management Experience Table */}
            <AnimatedFadeInRight threshold={0.2}>
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-foreground mb-6 sm:mb-8 leading-tight">
                  Team Experience Overview
                </h3>
                <div className="overflow-x-auto bg-card border border-border/50 rounded-xl">
                  <table className="w-full text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-border/50 bg-gradient-to-r from-accent/10 to-accent/5">
                        <th className="px-3 sm:px-4 py-3 sm:py-4 text-left font-black text-foreground">S. No</th>
                        <th className="px-3 sm:px-4 py-3 sm:py-4 text-left font-black text-foreground">City</th>
                        <th className="px-3 sm:px-4 py-3 sm:py-4 text-left font-black text-foreground">Name</th>
                        <th className="px-3 sm:px-4 py-3 sm:py-4 text-left font-black text-foreground">Experience</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">1</td>
                        <td rowSpan={4} className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Islamabad</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Mustabeen Ullah Baig</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-accent">30 Yrs</td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="px-3 sm:px-4 py-3 sm:py-4"></td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Maj (R) Khalid Nawaz Abbasi</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-accent">15 Yrs</td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="px-3 sm:px-4 py-3 sm:py-4"></td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Syed Rehan Waqar</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-accent">20 Yrs</td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="px-3 sm:px-4 py-3 sm:py-4"></td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Sohail Amir</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-accent">15 Yrs</td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">2</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Chakwal</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Sub (R) Muhammad Aslam</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-accent">14 Yrs</td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">3</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Peshawar</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Muhammad Babar</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-accent">5 Yrs</td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">4</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Jhelum</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Muhammad Mushtaq</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-accent">18 Yrs</td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">5</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Abdul Hakeem</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Saleem Murad</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-accent">10 Yrs</td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">6</td>
                        <td rowSpan={2} className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Lahore</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Maj (R) Abid Latif</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-accent">16 Yrs</td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="px-3 sm:px-4 py-3 sm:py-4"></td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Mansoor Amin</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-accent">18 Yrs</td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">7</td>
                        <td rowSpan={2} className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Multan</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Sub (R) Muhammad Asghar</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-accent">6 Yrs</td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="px-3 sm:px-4 py-3 sm:py-4"></td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Capt (R) Mansoor</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-accent">5 Yrs</td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">8</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Gharo (Sindh)</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Mehr Khalid</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-accent">19 Yrs</td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">9</td>
                        <td rowSpan={3} className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Sargodha</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Muhammad Qaiser</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-accent">2 Yrs</td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="px-3 sm:px-4 py-3 sm:py-4"></td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Sub (R) Rasheed Ahmed</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-accent">8 Yrs</td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="px-3 sm:px-4 py-3 sm:py-4"></td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Sub (R) Muhammad Mushtaq</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-accent">9 Yrs</td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">10</td>
                        <td rowSpan={2} className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Gujranwala</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Zakir Ur Rehman</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-accent">30 Yrs</td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="px-3 sm:px-4 py-3 sm:py-4"></td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Waleed Ahmed</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-accent">2 Yrs</td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">11</td>
                        <td rowSpan={2} className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Karachi</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">N/Sub (R) Niaz Muhammad</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-accent">5 Yrs</td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="px-3 sm:px-4 py-3 sm:py-4"></td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Hav (R) Muhammad Bachal</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-accent">6 Yrs</td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">12</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Quetta</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Raheel Akbar Shah (R) Police</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-accent">12 Yrs</td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">13</td>
                        <td rowSpan={3} className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">AJK</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Sub (R) Muhammad Husnain</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-accent">11 Yrs</td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="px-3 sm:px-4 py-3 sm:py-4"></td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Sub (R) Muhammad Iqbal</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-accent">18 Yrs</td>
                      </tr>
                      <tr className="hover:bg-accent/5 transition-colors">
                        <td className="px-3 sm:px-4 py-3 sm:py-4"></td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-foreground">Capt (R) Muhammad Qurban</td>
                        <td className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-accent">13 Yrs</td>
                      </tr>
                    </tbody>
                  </table>
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

      {/* Call to Action Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 bg-background transition-colors duration-300 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 sm:mb-6 md:mb-8 leading-tight">
              Ready to Experience Eagle Security?
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-xl text-muted-foreground font-black mb-6 sm:mb-8 md:mb-10 lg:mb-14 leading-relaxed">
              Discover how our comprehensive security solutions can protect what
              matters most to you.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center">
              <a
                href="/services"
                className="bg-gradient-to-r from-accent to-blue-800 text-accent-foreground px-6 sm:px-8 md:px-10 lg:px-12 py-2.5 sm:py-3 md:py-4 lg:py-5 font-black text-xs sm:text-sm md:text-base lg:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block rounded-lg"
              >
                Explore Our Services
              </a>
              <a
                href="/contact"
                className="border-2 border-accent text-accent px-6 sm:px-8 md:px-10 lg:px-12 py-2.5 sm:py-3 md:py-4 lg:py-5 font-black text-xs sm:text-sm md:text-base lg:text-lg hover:bg-accent/10 transition-all duration-300 inline-block rounded-lg"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
