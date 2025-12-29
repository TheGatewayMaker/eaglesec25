import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  AnimatedFadeInUp,
  AnimatedFadeInDown,
  AnimatedFadeInLeft,
  AnimatedFadeInRight,
  AnimatedSlideInFromBottom,
} from "@/components/AnimationWrappers";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div
      className="text-foreground"
      style={{
        background:
          "linear-gradient(to bottom, #f9f9f9 0%, #f3f3f3 40%, #efefef 100%)",
      }}
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background via-background to-background/95 text-foreground relative overflow-hidden py-10 sm:py-14 md:py-20 lg:py-32 transition-colors duration-300">
        {/* Decorative Background Elements - Hero Section */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-40"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="heroWaveGradient"
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
                style={{ stopColor: "var(--accent)", stopOpacity: 0.1 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M0,200 Q300,100 600,200 T1200,200 L1200,0 L0,0 Z"
            fill="url(#heroWaveGradient)"
            opacity="0.6"
          />
          <path
            d="M0,400 Q200,350 400,400 T800,400 Q1000,450 1200,400 L1200,600 L0,600 Z"
            fill="var(--accent)"
            opacity="0.08"
          />
          <circle
            cx="100"
            cy="150"
            r="80"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            opacity="0.3"
          />
          <circle
            cx="1100"
            cy="500"
            r="120"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.5"
            opacity="0.2"
          />
          <line
            x1="200"
            y1="300"
            x2="400"
            y2="350"
            stroke="var(--accent)"
            strokeWidth="2"
            opacity="0.25"
          />
          <line
            x1="900"
            y1="200"
            x2="1050"
            y2="300"
            stroke="var(--accent)"
            strokeWidth="1.5"
            opacity="0.2"
          />
        </svg>

        {/* Hero Logo - Right Half */}
        <div className="hidden md:flex absolute right-0 top-0 w-1/2 h-full items-start justify-center pr-8 lg:pr-12 pt-8 md:pt-10 lg:pt-12">
          <div className="flex flex-col items-center justify-center gap-6">
            <img
              src="https://i.ibb.co/s954vR34/eaglesecurityoriginallogo-1-copy.png"
              alt="Eagle Security Guards Logo"
              className="w-96 sm:w-[28rem] md:w-[32rem] lg:w-[36rem] h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 drop-shadow-xl"
            />
            <div className="text-center">
              <p className="text-sm sm:text-base font-black text-accent tracking-widest">
                TRUSTED SINCE 1992
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-background/5 to-transparent pointer-events-none"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <AnimatedFadeInLeft className="md:col-span-7" threshold={0.2}>
              <AnimatedFadeInDown delay={0} duration="normal">
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
                  <div className="w-1.5 h-8 sm:h-10 md:h-12 lg:h-14 bg-accent flex-shrink-0"></div>
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-accent uppercase tracking-widest leading-tight">
                    Get in Touch With Us
                  </p>
                </div>
              </AnimatedFadeInDown>
              <AnimatedFadeInDown delay={100} duration="normal">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 lg:mb-8 leading-tight text-foreground">
                  Contact Our Security Experts
                </h1>
              </AnimatedFadeInDown>
              <AnimatedFadeInDown delay={200} duration="normal">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground font-bold mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-2xl">
                  Reach out to our professional team for consultations,
                  inquiries, or to get a personalized quote for your security
                  needs.
                </p>
              </AnimatedFadeInDown>
              <AnimatedFadeInUp delay={300} duration="normal">
                <WhatsAppButton
                  size="md"
                  message="I'm interested in learning more about Eagle Security's professional security services."
                />
              </AnimatedFadeInUp>
            </AnimatedFadeInLeft>

            {/* Right Visual - Empty for background image */}
            <div className="hidden md:block md:col-span-5"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-gradient-to-b from-background via-background to-background/95 transition-colors duration-300 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            {/* Contact Form */}
            <AnimatedFadeInLeft threshold={0.2}>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-8 sm:mb-10">
                  Send us a Message
                </h2>

                {submitted && (
                  <div className="bg-green-600/10 border-2 border-green-600 text-green-600 dark:text-green-400 p-4 sm:p-6 mb-6 sm:mb-8">
                    <p className="font-black mb-2 text-base sm:text-lg">
                      Message Sent Successfully!
                    </p>
                    <p className="font-bold text-sm sm:text-base">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-black text-foreground mb-2 sm:mb-3 text-sm sm:text-base"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-input border-2 border-border text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-black text-foreground mb-2 sm:mb-3 text-sm sm:text-base"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-input border-2 border-border text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-black text-foreground mb-2 sm:mb-3 text-sm sm:text-base"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-input border-2 border-border text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      placeholder="+92 XXX XXXXXXX"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block font-black text-foreground mb-2 sm:mb-3 text-sm sm:text-base"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-input border-2 border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="security-guards">
                        Static Security Guards
                      </option>
                      <option value="bodyguards">Bodyguards</option>
                      <option value="mobile-escorts">Mobile Escorts</option>
                      <option value="equipment">Security Equipment</option>
                      <option value="inquiry">General Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-black text-foreground mb-2 sm:mb-3 text-sm sm:text-base"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-input border-2 border-border text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none transition-all duration-300"
                      placeholder="Tell us about your security needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent text-accent-foreground py-3 sm:py-4 px-4 font-black text-sm sm:text-base md:text-lg hover:shadow-lg transition-shadow duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </AnimatedFadeInLeft>

            {/* Direct Contact Options */}
            <AnimatedFadeInRight threshold={0.2}>
              <div className="flex flex-col space-y-6 sm:space-y-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground">
                  Direct Contact
                </h2>

                {/* Contact Card 1 - Address */}
                <div className="bg-card border-2 border-border p-6 sm:p-8 hover:border-accent/50 transition-all duration-300">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="w-12 sm:w-14 h-12 sm:h-14 bg-accent flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 sm:w-7 h-6 sm:h-7 text-accent-foreground" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg sm:text-2xl font-black text-foreground mb-2 sm:mb-3">
                        Head Office
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground font-bold mb-1">
                        Islamabad
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground/80 font-bold leading-relaxed">
                        Central coordination hub for all operations
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Card 2 - Phone */}
                <div className="bg-card border-2 border-border p-6 sm:p-8 hover:border-accent/50 transition-all duration-300">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="w-12 sm:w-14 h-12 sm:h-14 bg-accent flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 sm:w-7 h-6 sm:h-7 text-accent-foreground" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg sm:text-2xl font-black text-foreground mb-2 sm:mb-3">
                        Phone
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground font-bold mb-1">
                        For inquiries and quotes
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground/80 font-bold leading-relaxed">
                        Contact through our form or visit office
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Card 3 - Email */}
                <div className="bg-card border-2 border-border p-6 sm:p-8 hover:border-accent/50 transition-all duration-300">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="w-12 sm:w-14 h-12 sm:h-14 bg-accent flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 sm:w-7 h-6 sm:h-7 text-accent-foreground" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg sm:text-2xl font-black text-foreground mb-2 sm:mb-3">
                        Email
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground font-bold mb-1">
                        Professional inquiries
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground/80 font-bold leading-relaxed">
                        We respond to all inquiries promptly
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedFadeInRight>
          </div>
        </div>
      </section>

      {/* Our Locations Section - From National Presence */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-gradient-to-b from-background/95 via-background to-background transition-colors duration-300 relative overflow-hidden">
        {/* Decorative Background Elements - Presence Section */}
        <svg
          className="absolute top-1/4 left-0 w-1/3 h-3/4 -translate-x-1/4 opacity-35"
          viewBox="0 0 400 600"
          preserveAspectRatio="xMinYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="presenceGradient"
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
            d="M0,200 Q100,150 200,200 Q300,250 400,200 L400,0 L0,0 Z"
            fill="url(#presenceGradient)"
          />
          <path
            d="M0,400 Q200,350 400,400 L400,600 L0,600 Z"
            fill="var(--accent)"
            opacity="0.05"
          />
          <circle
            cx="200"
            cy="300"
            r="90"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.5"
            opacity="0.2"
            strokeDasharray="8,6"
          />
        </svg>
        <svg
          className="absolute bottom-0 -right-20 w-2/5 h-1/2 opacity-30"
          viewBox="0 0 500 400"
          preserveAspectRatio="xMaxYMax slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M500,100 Q375,50 250,100 Q125,150 0,100 L0,400 L500,400 Z"
            fill="var(--accent)"
            opacity="0.06"
          />
          <circle
            cx="350"
            cy="250"
            r="80"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            opacity="0.2"
          />
          <line
            x1="100"
            y1="150"
            x2="400"
            y2="250"
            stroke="var(--accent)"
            strokeWidth="1"
            opacity="0.15"
          />
        </svg>

        <div className="container mx-auto px-4 sm:px-6 w-full relative z-10">
          {/* Section Title with Visual Styling */}
          <AnimatedFadeInUp
            className="mb-8 sm:mb-12 md:mb-16 lg:mb-24"
            threshold={0.2}
          >
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6">
              <div className="w-1 md:w-1.5 h-8 sm:h-10 lg:h-12 bg-pk-green-main flex-shrink-0"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black leading-tight">
                Our Locations Across Country
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-muted-foreground max-w-3xl leading-relaxed">
              Offices across Pakistan ensuring reliable coverage and local
              expertise
            </p>
          </AnimatedFadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            {/* Left Side - Cities and Offices */}
            <AnimatedFadeInLeft threshold={0.2}>
              <div className="flex flex-col space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
                {/* Head Office */}
                <div className="bg-gradient-to-br from-pk-green-main to-[#2d6b3d] text-white p-6 sm:p-8 md:p-10 lg:p-12 border-2 border-pk-green-main/20 flex flex-col">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 sm:mb-4 md:mb-6 gap-2 sm:gap-0">
                    <p className="font-black text-xs uppercase tracking-widest text-white">
                      Head Office
                    </p>
                    <button
                      onClick={() => {
                        const element = document.getElementById(
                          "head-office-location",
                        );
                        element?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-blue-300 font-black text-xs sm:text-sm hover:text-blue-200 transition-colors duration-300"
                    >
                      Get Directions
                    </button>
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 lg:mb-8 leading-tight text-white">
                    Islamabad
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg font-black text-white leading-relaxed">
                    Central coordination and management hub
                  </p>
                </div>

                {/* Regional Offices with City Buttons */}
                <div>
                  <p className="text-pk-green-main font-black text-xs uppercase tracking-widest mb-3 sm:mb-4 md:mb-6">
                    Regional Offices
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    {[
                      "Lahore",
                      "Karachi",
                      "Multan",
                      "Peshawar",
                      "Jhelum",
                      "Gujranwala",
                    ].map((city) => (
                      <div
                        key={city}
                        className="bg-gradient-to-br from-pk-green-main to-[#2d6b3d] text-white px-3 sm:px-4 md:px-5 py-2 text-center font-black text-xs md:text-sm leading-tight transition-all duration-300 hover:shadow-lg hover:bg-foreground group cursor-pointer border-2 border-pk-green-main/20"
                      >
                        <span className="group-hover:text-white transition-colors duration-300">
                          {city}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-2 border-pk-green-main/30 bg-gradient-to-br from-background to-background/80 p-5 sm:p-6 md:p-8 transition-all duration-300 hover:shadow-lg cursor-pointer group hover:bg-gradient-to-br hover:from-black hover:to-black/80">
                  <p className="text-pk-green-main font-black text-xs uppercase tracking-widest mb-3 sm:mb-4 md:mb-6 group-hover:text-white transition-colors duration-300">
                    National Coverage
                  </p>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 md:mb-6 text-foreground group-hover:text-white transition-colors duration-300">
                    Nationwide
                  </h3>
                  <div className="text-xs sm:text-sm md:text-base font-black text-muted-foreground group-hover:text-white space-y-1.5 sm:space-y-2 md:space-y-3 leading-relaxed transition-colors duration-300">
                    <p>✓ Including AJK</p>
                    <p>✓ Sub-offices in major cities</p>
                    <p>✓ 24/7 availability everywhere</p>
                  </div>
                </div>
              </div>
            </AnimatedFadeInLeft>

            {/* Right Side - Pakistan Map */}
            <AnimatedFadeInRight threshold={0.2}>
              <div className="flex items-center justify-end md:ml-20">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fefd74c09605244708143d8415fd15fc4%2F60eb292d774d4532a0bd29f0a158fe2f?format=webp&width=800"
                  alt="Pakistan map showing Eagle Security locations"
                  className="w-full h-auto md:scale-110"
                />
              </div>
            </AnimatedFadeInRight>
          </div>
        </div>
      </section>

      {/* Location Section with Google Maps - Head Office Location */}
      <section
        id="head-office-location"
        className="py-10 sm:py-14 md:py-20 lg:py-28 bg-gradient-to-b from-background/98 to-background transition-colors duration-300 relative overflow-hidden"
      >
        {/* Decorative Background Elements - Location Section */}
        <svg
          className="absolute top-0 left-0 w-2/5 h-1/2 opacity-35"
          viewBox="0 0 400 300"
          preserveAspectRatio="xMinYMin slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="locationGradient"
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
                style={{ stopColor: "var(--accent)", stopOpacity: 0.08 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M0,80 Q100,40 200,80 Q300,120 400,80 L400,0 L0,0 Z"
            fill="url(#locationGradient)"
          />
          <circle
            cx="200"
            cy="150"
            r="50"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            opacity="0.25"
          />
        </svg>
        <svg
          className="absolute bottom-0 right-0 w-1/3 h-2/5 opacity-30"
          viewBox="0 0 400 300"
          preserveAspectRatio="xMaxYMax slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M400,100 Q300,50 200,100 Q100,150 0,100 L0,300 L400,300 Z"
            fill="var(--accent)"
            opacity="0.05"
          />
          <circle
            cx="300"
            cy="200"
            r="60"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.5"
            opacity="0.2"
            strokeDasharray="6,4"
          />
        </svg>

        <div className="container mx-auto px-4 sm:px-6 w-full relative z-10">
          <AnimatedFadeInUp className="mb-8 sm:mb-12 md:mb-16" threshold={0.2}>
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 md:mb-6">
              <div className="w-1 md:w-1.5 h-8 sm:h-10 lg:h-12 bg-pk-green-main rounded-full flex-shrink-0"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black leading-tight">
                Our Head Office Location
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-muted-foreground max-w-3xl leading-relaxed">
              Visit us at our Islamabad headquarters for consultations and
              inquiries
            </p>
          </AnimatedFadeInUp>

          <AnimatedSlideInFromBottom threshold={0.2}>
            <div className="overflow-hidden border border-border transition-shadow duration-300 hover:shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13282.195486583572!2d72.99590472612844!3d33.66884932093898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95ff25ed8b53%3A0x7e482ec7e99bebe0!2sG-11%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1766783293705!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full sm:h-96 lg:h-[500px]"
              ></iframe>
            </div>
          </AnimatedSlideInFromBottom>
        </div>
      </section>
    </div>
  );
}
