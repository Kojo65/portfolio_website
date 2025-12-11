import ProjectCard from "@/components/project-card";

export default function Projects() {
  const projects = [
    {
      title: "Study Group Final Project",
      description: "A comprehensive study group management platform with collaborative features, scheduling, and resource sharing capabilities.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Node.js", "MongoDB"],
      demoUrl: "https://cs50-final-project-study-fgroup-fin-fawn.vercel.app/",
      codeUrl: "https://github.com/kojo65",
    },
    {
      title: "Study Hub Platform",
      description: "An interactive learning platform designed for students to collaborate, share resources, and organize study sessions.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      demoUrl: "https://study-hub-smoky.vercel.app/",
      codeUrl: "https://github.com/kojo65",
    },
    {
      title: "Comfy Store E-commerce",
      description: "A modern e-commerce platform for furniture shopping with cart functionality, product filtering, and responsive design.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["JavaScript", "CSS", "API Integration"],
      demoUrl: "https://comfy-store-h8jchvig2-kojo65s-projects.vercel.app/",
      codeUrl: "https://github.com/kojo65",
    },
    {
      title: "Figma UI Recreation",
      description: "A pixel-perfect recreation of a Figma design system with responsive components and modern UI patterns.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      demoUrl: "https://v0-recreate-figma-ui-m3.vercel.app/blog",
      codeUrl: "https://github.com/kojo65",
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-16 xs:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 xs:mb-16">
            <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold mb-3 xs:mb-4" data-testid="projects-title">Featured Projects</h2>
            <p className="text-muted-foreground text-base xs:text-lg max-w-2xl mx-auto px-2" data-testid="projects-subtitle">
              A showcase of my recent work and personal projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xs:gap-8" data-testid="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                demoUrl={project.demoUrl}
                codeUrl={project.codeUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}