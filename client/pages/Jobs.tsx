import { Briefcase, Calendar, MapPin, Clock } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  AnimatedFadeInUp,
  AnimatedFadeInDown,
  AnimatedFadeInLeft,
  AnimatedFadeInRight,
  AnimatedScaleInUp,
} from "@/components/AnimationWrappers";

interface Job {
  id: number;
  title: string;
  department: string;
  city: string;
  openingDate: string;
  deadline: string;
}

export default function Jobs() {
  const jobListings: Job[] = [
    {
      id: 1,
      title: "Senior Security Officer",
      department: "Field Operations",
      city: "Islamabad",
      openingDate: "December 10, 2024",
      deadline: "January 15, 2025",
    },
    {
      id: 2,
      title: "Tactical Bodyguard Specialist",
      department: "VIP Protection",
      city: "Lahore",
      openingDate: "December 12, 2024",
      deadline: "January 20, 2025",
    },
    {
      id: 3,
      title: "Security Supervisor",
      department: "Team Management",
      city: "Karachi",
      openingDate: "December 15, 2024",
      deadline: "January 25, 2025",
    },
    {
      id: 4,
      title: "Mobile Escort Coordinator",
      department: "Mobile Security",
      city: "Multan",
      openingDate: "December 8, 2024",
      deadline: "January 10, 2025",
    },
    {
      id: 5,
      title: "Static Security Guard",
      department: "Facility Security",
      city: "Peshawar",
      openingDate: "December 18, 2024",
      deadline: "January 28, 2025",
    },
    {
      id: 6,
      title: "Training & Development Officer",
      department: "HR & Training",
      city: "Islamabad",
      openingDate: "December 14, 2024",
      deadline: "January 22, 2025",
    },
    {
      id: 7,
      title: "Surveillance Systems Operator",
      department: "Technology & Monitoring",
      city: "Lahore",
      openingDate: "December 16, 2024",
      deadline: "January 30, 2025",
    },
    {
      id: 8,
      title: "HR Manager",
      department: "Human Resources",
      city: "Islamabad",
      openingDate: "December 20, 2024",
      deadline: "February 5, 2025",
    },
  ];

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

        <div className="absolute top-8 right-8 opacity-10 pointer-events-none">
          <Briefcase className="w-32 h-32 text-accent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <AnimatedFadeInLeft
              className="flex flex-col justify-center"
              threshold={0.2}
            >
              <AnimatedFadeInDown delay={0} duration="normal">
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
                  <div className="w-1.5 h-8 sm:h-10 md:h-12 lg:h-14 bg-accent"></div>
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-accent uppercase tracking-widest leading-tight">
                    Join Our Team
                  </p>
                </div>
              </AnimatedFadeInDown>
              <AnimatedFadeInDown delay={100} duration="normal">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 lg:mb-8 leading-tight text-foreground">
                  Build Your Career In Security
                </h1>
              </AnimatedFadeInDown>
              <AnimatedFadeInDown delay={200} duration="normal">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground font-bold mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-2xl">
                  Be part of a legacy of excellence. Eagle Security Guards is
                  seeking dedicated professionals to join our military-trained
                  team. Work in a culture of discipline, professionalism, and
                  continuous growth.
                </p>
              </AnimatedFadeInDown>
              <AnimatedFadeInUp delay={300} duration="normal">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 flex-wrap">
                  <a
                    href="#job-listings"
                    className="bg-accent text-accent-foreground px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 font-black text-xs sm:text-sm lg:text-base text-center hover:shadow-xl hover:scale-105 transition-all duration-300 inline-block"
                  >
                    Browse Jobs
                  </a>
                  <WhatsAppButton size="md" />
                </div>
              </AnimatedFadeInUp>
            </AnimatedFadeInLeft>

            {/* Right Visual */}
            <AnimatedFadeInRight
              className="hidden md:flex items-center justify-end"
              threshold={0.2}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-accent/5 opacity-50"></div>
                <Briefcase className="w-48 h-48 text-accent relative" />
              </div>
            </AnimatedFadeInRight>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section
        id="job-listings"
        className="py-10 sm:py-14 md:py-20 lg:py-28 bg-gradient-to-b from-background via-background to-background/95 transition-colors duration-300 relative overflow-hidden"
      >
        {/* Decorative Background Elements */}
        <svg
          className="absolute top-0 right-0 w-1/2 h-full opacity-35"
          viewBox="0 0 600 800"
          preserveAspectRatio="xMaxYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="jobsGradient"
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
            fill="url(#jobsGradient)"
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
        </svg>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Section Title */}
          <AnimatedFadeInUp
            className="mb-8 sm:mb-12 md:mb-16 lg:mb-24"
            threshold={0.2}
          >
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6">
              <div className="w-1 md:w-1.5 h-8 sm:h-10 lg:h-12 bg-pk-green-main"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black leading-tight">
                Current Job Openings
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-muted-foreground max-w-3xl leading-relaxed">
              Explore opportunities to grow your career with Eagle Security
              Guards
            </p>
          </AnimatedFadeInUp>

          {/* Jobs Table - Desktop View */}
          <div className="hidden md:block overflow-hidden mb-8 sm:mb-12 md:mb-16">
            <div className="border-2 border-border bg-card">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 bg-pk-green-main/10 px-6 sm:px-8 py-5 md:py-6 border-b-2 border-border font-black text-foreground">
                <div className="col-span-3 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm">Job Title</span>
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm">Opening Date</span>
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm">Department</span>
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm">City</span>
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm">Deadline</span>
                </div>
                <div className="col-span-1"></div>
              </div>

              {/* Table Rows */}
              {jobListings.map((job, index) => (
                <AnimatedScaleInUp
                  key={job.id}
                  delay={index * 50}
                  threshold={0.1}
                >
                  <div
                    className={`grid grid-cols-12 gap-4 px-6 sm:px-8 py-5 md:py-6 items-center transition-all duration-300 hover:bg-accent/5 ${
                      index !== jobListings.length - 1
                        ? "border-b border-border/50"
                        : ""
                    }`}
                  >
                    <div className="col-span-3">
                      <p className="font-black text-sm md:text-base text-foreground">
                        {job.title}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="font-bold text-xs md:text-sm text-muted-foreground">
                        {job.openingDate}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="font-bold text-xs md:text-sm text-muted-foreground">
                        {job.department}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="font-bold text-xs md:text-sm text-muted-foreground">
                        {job.city}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="font-bold text-xs md:text-sm text-muted-foreground">
                        {job.deadline}
                      </p>
                    </div>
                    <div className="col-span-1 flex justify-end">
                      <a
                        href={`/jobs/apply/${job.id}`}
                        className="bg-pk-green-main text-white px-3 sm:px-4 py-2 font-black text-xs hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
                      >
                        Apply
                      </a>
                    </div>
                  </div>
                </AnimatedScaleInUp>
              ))}
            </div>
          </div>

          {/* Jobs Cards - Mobile View */}
          <div className="md:hidden space-y-4 sm:space-y-6">
            {jobListings.map((job, index) => (
              <AnimatedScaleInUp
                key={job.id}
                delay={index * 50}
                threshold={0.2}
              >
                <div className="border-2 border-border bg-card p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
                  {/* Title */}
                  <h3 className="font-black text-base sm:text-lg md:text-xl text-foreground mb-4">
                    {job.title}
                  </h3>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                    <div>
                      <p className="font-bold text-xs text-accent uppercase tracking-wider mb-1">
                        Department
                      </p>
                      <p className="font-bold text-xs sm:text-sm text-muted-foreground">
                        {job.department}
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-xs text-accent uppercase tracking-wider mb-1">
                        City
                      </p>
                      <p className="font-bold text-xs sm:text-sm text-muted-foreground">
                        {job.city}
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-xs text-accent uppercase tracking-wider mb-1">
                        Opening Date
                      </p>
                      <p className="font-bold text-xs sm:text-sm text-muted-foreground">
                        {job.openingDate}
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-xs text-accent uppercase tracking-wider mb-1">
                        Deadline
                      </p>
                      <p className="font-bold text-xs sm:text-sm text-muted-foreground">
                        {job.deadline}
                      </p>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <a
                    href={`/jobs/apply/${job.id}`}
                    className="w-full bg-pk-green-main text-white px-4 py-3 font-black text-sm text-center hover:shadow-lg hover:scale-105 transition-all duration-300 inline-block"
                  >
                    Apply Now
                  </a>
                </div>
              </AnimatedScaleInUp>
            ))}
          </div>

          {/* Call to Action Section */}
          <AnimatedFadeInUp
            className="mt-12 sm:mt-16 md:mt-24 text-center"
            threshold={0.2}
          >
            <div className="bg-gradient-to-r from-accent/10 to-pk-green-main/10 border-2 border-pk-green-main/30 p-8 sm:p-12 md:p-16">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 text-foreground">
                Don't See Your Perfect Role?
              </h3>
              <p className="text-xs sm:text-sm md:text-base font-bold text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your
                resume and let's discuss how you can be part of Eagle Security
                Guards.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center flex-wrap">
                <a
                  href="/contact"
                  className="bg-accent text-accent-foreground px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 font-black text-xs sm:text-sm lg:text-base text-center hover:shadow-xl hover:scale-105 transition-all duration-300 inline-block"
                >
                  Submit Resume
                </a>
                <WhatsAppButton
                  size="md"
                  message="I'm interested in job opportunities at Eagle Security Guards."
                />
              </div>
            </div>
          </AnimatedFadeInUp>
        </div>
      </section>
    </div>
  );
}
