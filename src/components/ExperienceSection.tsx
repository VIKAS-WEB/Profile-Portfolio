import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Android/Flutter Developer",
    company: "ITIO Innovex Pvt. Ltd.",
    period: "Jan 2025 – Present",
    location: "Noida, India",
    highlights: [
      "Developed 3 FinTech apps with blockchain API integration",
      "Implemented secure payment gateways with enhanced encryption",
      "Improved app security by 30% through robust authentication systems",
    ],
  },
  {
    role: "App Developer",
    company: "Crewman Solution Pvt. Ltd.",
    period: "Sep 2023 – Dec 2024",
    location: "Noida, India",
    highlights: [
      "Built cross-platform apps using Flutter & Kotlin",
      "Created reusable UI components library for faster development",
      "Reduced app load time by 20% through code optimization",
    ],
  },
  {
    role: "App Developer",
    company: "Dream Reflection Media Pvt. Ltd.",
    period: "Feb 2022 – Aug 2023",
    location: "Noida, India",
    highlights: [
      "Developed high-performance Android/iOS applications",
      "Optimized large codebases for better maintainability",
      "Collaborated with UI/UX teams for seamless user experiences",
    ],
  },
  {
    role: "Web Developer",
    company: "Adaan Digital Solutions Pvt. Ltd.",
    period: "Jul 2020 – Dec 2021",
    location: "Noida, India",
    highlights: [
      "Built responsive websites using Spring MVC & Hibernate",
      "Implemented RESTful APIs for frontend-backend communication",
      "Maintained and enhanced existing web applications",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Experience
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            My Professional <span className="gradient-text">Journey</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-4 sm:gap-8 mb-8 sm:mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 mt-4 sm:mt-6 z-10" />

              <div
                className={`flex-1 ml-6 sm:ml-8 md:ml-0 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="glass-card p-4 sm:p-6 rounded-2xl hover-lift">
                  <div className="flex items-center gap-2 text-primary text-xs sm:text-sm font-medium mb-2">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    {exp.period}
                  </div>
                  <h3 className="text-base sm:text-xl font-semibold mb-1">{exp.role}</h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                    <Building2 className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                  <ul className="space-y-1 sm:space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
