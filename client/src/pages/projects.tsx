import ProjectCard from "@/components/project-card";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store built with React and Node.js, featuring user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Node.js", "MongoDB"],
      demoUrl: "https://example.com",
      codeUrl: "https://github.com",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates, team collaboration features, and intuitive drag-and-drop functionality.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Vue.js", "Flask", "PostgreSQL"],
      demoUrl: "https://example.com",
      codeUrl: "https://github.com",
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with detailed forecasts, location search, and beautiful data visualizations using modern APIs.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["JavaScript", "Chart.js", "API"],
      demoUrl: "https://example.com",
      codeUrl: "https://github.com",
    },
    {
      title: "Social Analytics Dashboard",
      description: "A comprehensive analytics platform for social media management with real-time data visualization and performance insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Express", "D3.js"],
      demoUrl: "https://example.com",
      codeUrl: "https://github.com",
    },
    {
      title: "Mobile-First Web App",
      description: "A progressive web application with offline capabilities, push notifications, and native-like user experience across all devices.",
      image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["PWA", "Service Workers", "IndexedDB"],
      demoUrl: "https://example.com",
      codeUrl: "https://github.com",
    },
    {
      title: "Open Source Library",
      description: "A lightweight utility library for React developers with comprehensive documentation and TypeScript support, used by 500+ developers.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["TypeScript", "NPM", "Jest"],
      demoUrl: "https://npmjs.com",
      codeUrl: "https://github.com",
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="projects-title">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="projects-subtitle">
              A showcase of my recent work and personal projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="projects-grid">
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
