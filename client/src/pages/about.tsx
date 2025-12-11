export default function About() {
  const frontendSkills = ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind"];
  const backendSkills = ["Node.js", "Express", "Python", "Flask", "MongoDB"];
  const tools = ["Git", "Docker", "AWS", "Vercel"];

  return (
    <div className="pt-20">
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="about-title">About Me</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="about-subtitle">
              Passionate developer with a love for creating meaningful digital experiences
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6" data-testid="story-title">My Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p data-testid="story-paragraph-1">
                  I'm a full-stack developer with a passion for building web applications that solve real-world problems. 
                  My journey in tech started with curiosity about how websites work, which led me to dive deep into 
                  both frontend and backend development.
                </p>
                <p data-testid="story-paragraph-2">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                  or sharing knowledge with the developer community. I believe in writing clean, maintainable code 
                  and creating user experiences that make a difference.
                </p>
                <p data-testid="story-paragraph-3">
                  Currently, I'm focused on modern web technologies including React, Node.js, and cloud platforms, 
                  always looking for opportunities to learn and grow as a developer.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6" data-testid="skills-title">Skills & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-medium text-primary" data-testid="frontend-skills-title">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((skill) => (
                      <span
                        key={skill}
                        className="skill-tag bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                        data-testid={`skill-${skill.toLowerCase()}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-accent-foreground" data-testid="backend-skills-title">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {backendSkills.map((skill) => (
                      <span
                        key={skill}
                        className="skill-tag bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                        data-testid={`skill-${skill.toLowerCase()}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-primary mb-3" data-testid="tools-title">Tools & Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="skill-tag bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                      data-testid={`tool-${tool.toLowerCase()}`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
