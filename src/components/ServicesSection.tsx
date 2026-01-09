import React from "react";
import { 
    Smartphone, 
    Wallet, 
    CreditCard, 
    Palette, 
    Server,
    Shield
  } from "lucide-react";
  
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using Flutter & native Android development with Kotlin",
      features: ["iOS & Android", "Performance Optimized", "Offline Support"],
    },
    {
      icon: Wallet,
      title: "FinTech & Crypto Solutions",
      description: "Secure financial applications with blockchain integration and cryptocurrency features",
      features: ["Blockchain APIs", "Secure Wallets", "Real-time Data"],
    },
    {
      icon: CreditCard,
      title: "Payment Gateway Integration",
      description: "Seamless payment solutions including UPI, cards, and international payment methods",
      features: ["UPI Integration", "Multi-currency", "PCI Compliant"],
    },
    {
      icon: Palette,
      title: "UI/UX Optimization",
      description: "Creating intuitive and engaging user interfaces with focus on user experience",
      features: ["Material Design", "Animations", "Accessibility"],
    },
    {
      icon: Server,
      title: "Backend API Integration",
      description: "Robust backend connections using REST APIs, Firebase, and custom server solutions",
      features: ["REST APIs", "Real-time Sync", "Cloud Services"],
    },
    {
      icon: Shield,
      title: "App Security",
      description: "Implementing security best practices including encryption and secure authentication",
      features: ["Data Encryption", "Auth Systems", "Secure Storage"],
    },
  ];
  
  const ServicesSection = () => {
    return (
      <section id="services" className="py-12 sm:py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              What I <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground mt-4 max-w-2xl mx-auto">
              End-to-end mobile development services to bring your ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card p-6 sm:p-8 rounded-2xl hover-lift group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                <h3 className="text-base sm:text-xl font-semibold mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4">{service.description}</p>
                
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-background text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesSection;

