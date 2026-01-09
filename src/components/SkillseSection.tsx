import { 
  Smartphone, 
  Code2, 
  Database, 
  Cloud, 
  GitBranch, 
  Terminal,
  Palette,
  Globe
} from "lucide-react";

const skills = [
  {
    category: "Mobile Development",
    icon: Smartphone,
    items: ["Flutter (Dart)", "Kotlin", "Jetpack Compose", "Android SDK"],
  },
  {
    category: "Backend & APIs",
    icon: Cloud,
    items: ["Firebase", "Node.js", "REST APIs", "Spring MVC"],
  },
  {
    category: "Database",
    icon: Database,
    items: ["MySQL", "SQLite", "Firestore", "Room DB"],
  },
  {
    category: "Programming",
    icon: Code2,
    items: ["Dart", "Kotlin", "JavaScript", "Java"],
  },
  {
    category: "Tools & Version Control",
    icon: GitBranch,
    items: ["Git", "CI/CD", "Android Studio", "VS Code"],
  },
  {
    category: "Web Technologies",
    icon: Globe,
    items: ["HTML5", "CSS3", "JavaScript", "Hibernate"],
  },
  {
    category: "Development Practices",
    icon: Terminal,
    items: ["Agile/Scrum", "Clean Architecture", "MVVM", "BLoC Pattern"],
  },
  {
    category: "UI/UX",
    icon: Palette,
    items: ["Material Design", "Figma", "Responsive Design", "Animations"],
  },
];

const SkillseSection = () => {
  return (
    <section id="skills" className="py-12 sm:py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Skills
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            My <span className="gradient-text">Technical Expertise</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-card p-4 sm:p-6 rounded-2xl hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <skill.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">{skill.category}</h3>
              <ul className="space-y-1 sm:space-y-2">
                {skill.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillseSection;
