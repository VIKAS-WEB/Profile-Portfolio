import { GraduationCap, Briefcase, Code, Smartphone } from "lucide-react";
import aboutPhoto from "@/assets/about-bg.jpg";

const AboutSection = () => {
  const highlights = [
    { icon: Briefcase, label: "4+ Years", desc: "Professional Experience" },
    { icon: Smartphone, label: "15+ Apps", desc: "Delivered Successfully" },
    { icon: Code, label: "500K+", desc: "Total Downloads" },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Know Who I <span className="gradient-text">Am</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Image/Stats Side */}
          <div className="relative">
            <div className="glass-card p-6 sm:p-8 rounded-3xl">
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-3 sm:p-4 rounded-2xl bg-background hover-lift"
                  >
                    <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2" />
                    <div className="text-base sm:text-xl font-bold">{item.label}</div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                ))}
              </div>

              <div className="h-48 sm:h-64 rounded-2xl overflow-hidden">
                <img 
                  src={aboutPhoto} 
                  alt="Vikas Sharma - About" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-4 sm:space-y-6">
            <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed">
              I'm a passionate <span className="text-foreground font-medium">Flutter & Android Developer</span> with 
              over 4 years of experience in building scalable, high-performance mobile applications.
            </p>
            
            <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed">
              My expertise spans across <span className="text-foreground font-medium">FinTech, cryptocurrency, fitness, 
              and e-commerce</span> domains. I've successfully launched multiple apps on the Play Store including 
              Coin Craze, Crypto Pay, Quick Cash, and FitPath with thousands of downloads.
            </p>

            <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed">
              I specialize in creating intuitive user interfaces backed by robust backend integrations, 
              ensuring seamless user experiences while maintaining top-notch security standards.
            </p>

            {/* Education */}
            <div className="glass-card p-4 sm:p-6 rounded-2xl mt-6 sm:mt-8">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                <h3 className="text-base sm:text-lg font-semibold">Education</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-sm sm:text-base font-medium">GNIIT – NIIT Technologies</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Software Development</div>
                  </div>
                  <span className="text-xs sm:text-sm text-primary">2020</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium">B.A. English Honors</div>
                    <div className="text-sm text-muted-foreground">CCS University, Meerut</div>
                  </div>
                  <span className="text-sm text-primary">2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
