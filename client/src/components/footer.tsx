import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { href: "https://github.com/Kojo65", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
    { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
    { href: "mailto:magboisaac390@gmail.com", icon: Mail, label: "Email" },
  ];

  return (
    <footer className="bg-background border-t border-border py-8 xs:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 xs:gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg xs:text-xl font-bold gradient-text mb-1 xs:mb-2">Isaac Magbo</h3>
            <p className="text-muted-foreground text-sm xs:text-base">Full Stack Developer</p>
          </div>
          
          <div className="flex items-center space-x-5 xs:space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  data-testid={`social-${link.label.toLowerCase()}`}
                >
                  <Icon size={20} className="xs:size-24" />
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="mt-6 xs:mt-8 pt-6 xs:pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-xs xs:text-sm">
            &copy; 2024 Isaac Magbo. All rights reserved. Built with passion and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
