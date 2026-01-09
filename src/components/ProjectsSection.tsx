import { useState } from "react";
import { ExternalLink, X, Download, Star } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import CoinCrazeImg from "@/assets/projects/CoinCraze.png"; // Adjust path as per your structure
import CryptoPayImg from "@/assets/projects/CryptoPay.png";
import QuickCashImg from "@/assets/projects/QuickCash.png";
import GlotheloImg from "@/assets/projects/Glotelho.png";
import fitpathImg from "@/assets/projects/fitpath.png";
import employeeManagement from "@/assets/projects/employeeManagement.png";


const projects = [
    {
    title: "Quick Cash",
    category: "FinTech",
    description: "UPI-based digital wallet app for instant money transfers, bill payments, and cashback rewards.",
    features: ["UPI payments", "Bill payments", "Cashback rewards", "Scan & Pay"],
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "UPI SDK"],
    image: QuickCashImg,
    downloads: "10K+",
    rating: "4.4",
    playstore: "https://play.google.com/store/apps/details?id=com.quickcash.quickcash&hl=en_IN",
    color: "from-green-500 to-emerald-500",
  },
   {
    title: "FitPath",
    category: "Health & Fitness",
    description: "Comprehensive fitness tracking app with workout plans, nutrition guidance, and progress monitoring.",
    features: ["Workout tracking", "Meal planning", "Progress charts", "Trainer connect"],
    tech: ["Flutter", "Firebase", "Health APIs", "ML Kit"],
    image: fitpathImg,
    downloads: "500K+",
    rating: "4.7",
    playstore: "https://play.google.com/store/apps/details?id=com.visionwizard.wellnessapp&hl=en_IN",
    color: "from-purple-500 to-pink-500",
  },
    {
    title: "Glotelho E-commerce",
    category: "E-commerce",
    description: "Full-featured online marketplace for Cameroon with product catalog, cart, and secure checkout.",
    features: ["Product catalog", "Shopping cart", "Secure checkout", "Order tracking"],
    tech: ["Flutter", "Node.js", "MongoDB", "Payment Gateway"],
    image: GlotheloImg,
    downloads: "50K+",
    playstore: "https://play.google.com/store/apps/details?id=com.glotelho.ecommerce&hl=en_IN",
    rating: "4.3",
    color: "from-rose-500 to-red-500",
  },
  {
    title: "Coin Craze",
    category: "FinTech / Crypto",
    description: "A comprehensive crypto trading wallet app with real-time market data, portfolio tracking, and secure transactions.",
    features: ["Real-time crypto prices", "Secure wallet integration", "Portfolio analytics", "Push notifications"],
    tech: ["Flutter", "Firebase", "Blockchain APIs", "REST APIs"],
    image: CoinCrazeImg,
    downloads: "10+",
    rating: "4.5",
    playstore: "https://play.google.com/store/apps/details?id=com.itio.coincraze&hl=en_IN",
    // color: "from-orange-500 to-amber-500",
  },
  {
    title: "Crypto Pay",
    category: "FinTech",
    description: "Secure cryptocurrency payment gateway enabling seamless digital transactions with multi-currency support.",
    features: ["Multi-currency support", "QR code payments", "Transaction history", "Bank integration"],
    tech: ["Flutter", "Node.js", "PostgreSQL", "Stripe"],
    image: CryptoPayImg,
    downloads: "15K+",
    rating: "4.6",
    playstore: "https://play.google.com/store/apps/details?id=com.itio.crypto_pay&hl=en_IN",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Employee Management",
    category: "Enterprise",
    description: "Comprehensive employee management system with attendance, leave management, and performance tracking.",
    features: ["Attendance tracking", "Leave management", "Performance reviews", "Payroll integration"],
    tech: ["Spring MVC", "Hibernate", "MySQL", "Bootstrap"],
    downloads: "Web App",
    image: employeeManagement,
    rating: "4.5",
    color: "from-slate-500 to-zinc-500",
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of applications I've built across FinTech, fitness, and e-commerce domains
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden hover-lift group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image/Gradient */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                <div className="absolute top-4 right-4 glass-card px-3 py-1 rounded-full text-xs font-medium">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      {project.downloads}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      {project.rating}
                    </span>
                  </div>
                  <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
            </DialogHeader>

            {selectedProject && (
              <div className="space-y-6">
                <div className="h-48 rounded-xl overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                    {selectedProject.category}
                  </span>
                  <p className="text-muted-foreground">{selectedProject.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-secondary text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Download className="w-5 h-5 text-primary" />
                      <span className="font-semibold">{selectedProject.downloads}</span>
                      <span className="text-muted-foreground">Downloads</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span className="font-semibold">{selectedProject.rating}</span>
                      <span className="text-muted-foreground">Rating</span>
                    </div>
                  </div>

                  {selectedProject.playstore && (
                    <a
                      href={selectedProject.playstore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Get on Play Store
                    </a>
                  )}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ProjectsSection;
