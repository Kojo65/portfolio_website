import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { href: "https://github.com", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
    { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
    { href: "mailto:isaac.developer@email.com", icon: Mail, label: "Email" },
  ];

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-bold gradient-text mb-2">Isaac</h3>
            <p className="text-muted-foreground">Full Stack Developer</p>
          </div>
          
          <div className="flex items-center space-x-6">
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
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            &copy; 2024 Isaac. All rights reserved. Built with passion and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
