import React from "react";
import { Award, Shield, Medal } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    title: "Ethical Hacking",
    issuer: "NIIT Technologies",
    description: "Comprehensive training in cybersecurity and ethical hacking practices",
  },
  {
    icon: Award,
    title: "Yoga & Meditation",
    issuer: "Arya Samaj Foundation",
    description: "Certified instructor in traditional yoga and meditation techniques",
  },
  {
    icon: Medal,
    title: "Bronze Medalist",
    issuer: "Indian Hip Hop Dance Championship",
    description: "Achieved bronze medal in the national hip hop dance competition",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-12 sm:py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Certifications & Achievements
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Recognition & <span className="gradient-text">Credentials</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-card p-6 sm:p-8 rounded-2xl text-center hover-lift group"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-primary transition-colors duration-300">
                <cert.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              
              <h3 className="text-base sm:text-xl font-semibold mb-2">{cert.title}</h3>
              <div className="text-xs sm:text-base text-primary font-medium mb-2 sm:mb-3">{cert.issuer}</div>
              <p className="text-xs sm:text-sm text-muted-foreground">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

