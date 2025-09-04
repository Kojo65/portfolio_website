import { Link } from "wouter";
import isaacImage from "@assets/Isaac_1756977006424.png";

export default function Home() {
  return (
    <section className="min-h-screen hero-bg flex items-center justify-center relative overflow-hidden pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="mb-8">
          <img
            src={isaacImage}
            alt="Isaac - Full Stack Developer"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-primary/20 shadow-2xl object-cover"
            data-testid="hero-image"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="hero-title">
          Hi, I'm <span className="gradient-text">Isaac</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="hero-description">
          Full Stack Developer passionate about creating exceptional web experiences 
          with modern technologies and clean, efficient code.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/projects" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors" data-testid="cta-projects">
            View My Work
          </Link>
          <Link href="/contact" className="border border-border text-foreground hover:bg-muted px-8 py-3 rounded-lg font-medium transition-colors" data-testid="cta-contact">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
