import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 sm:py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-bold gradient-text">VS</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-xs sm:text-sm text-muted-foreground">
              Vikas Sharma
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-secondary transition-colors"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-secondary transition-colors"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="mailto:vikasind786@gmail.com"
              className="p-2 rounded-full hover:bg-secondary transition-colors"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>

          <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
            <span>© {currentYear} Made with</span>
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 fill-red-500" />
            <span>by Vikas Sharma</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
