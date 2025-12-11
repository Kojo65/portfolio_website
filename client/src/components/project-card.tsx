import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  demoUrl,
  codeUrl,
}: ProjectCardProps) {
  return (
    <div className="project-card bg-card rounded-xl overflow-hidden border border-border shadow-lg flex flex-col h-full">
      <img
        src={image}
        alt={title}
        className="w-full h-40 xs:h-48 object-cover"
        data-testid={`project-image-${title.toLowerCase().replace(/\s+/g, '-')}`}
      />
      <div className="p-4 xs:p-6 flex-grow flex flex-col">
        <h3 className="text-lg xs:text-xl font-semibold mb-2 xs:mb-3" data-testid={`project-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </h3>
        <p className="text-muted-foreground text-sm xs:text-base mb-3 xs:mb-4 flex-grow" data-testid={`project-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5 xs:gap-2 mb-3 xs:mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-primary/10 text-primary px-2 py-1 rounded text-xs xs:text-sm"
              data-testid={`project-tech-${tech.toLowerCase()}`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-auto">
          {demoUrl && (
            <a
              href={demoUrl}
              className="flex items-center gap-1.5 xs:gap-2 text-primary hover:text-primary/80 transition-colors text-sm xs:text-base"
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`project-demo-${title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <ExternalLink size={14} className="xs:size-16" />
              Live Demo
            </a>
          )}
          {codeUrl && (
            <a
              href={codeUrl}
              className="flex items-center gap-1.5 xs:gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm xs:text-base"
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`project-code-${title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <Github size={14} className="xs:size-16" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
