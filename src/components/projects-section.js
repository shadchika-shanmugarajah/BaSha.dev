import { ExternalLink, Github } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import projects from "../data/projects";

function ProjectCard({ project, index }) {
  const [cardRef, cardRevealed] = useScrollReveal({ threshold: 0.1 });
  
  return (
    <div
      ref={cardRef}
      className={`bg-gray-800 rounded-2xl border border-gray-700 hover:border-pink-500/50 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 overflow-hidden group scroll-reveal ${cardRevealed ? 'revealed' : ''} stagger-${(index % 6) + 1}`}
    >
            <div className={`h-32 sm:h-40 md:h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
        <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full backdrop-blur-sm border flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
                  style={{
                    background:
                      project.iconBackground ??
                      "linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.05))",
                    borderColor: "rgba(255,255,255,0.25)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                  }}
                >
                  <i className={`${project.icon} text-white text-2xl sm:text-3xl md:text-4xl drop-shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}></i>
                </div>
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="bg-gray-700 text-gray-300 px-2 sm:px-3 py-1 rounded-full text-xs hover:bg-gray-600 transition-colors">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:text-pink-300 font-medium flex items-center gap-1 text-sm hover:scale-110 transition-transform"
          >
            <Github size={14} />
            Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1 text-sm hover:scale-110 transition-transform"
          >
            <ExternalLink size={14} />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [titleRef, titleRevealed] = useScrollReveal({ threshold: 0.2 });
  const projectList = projects;

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-16 scroll-reveal ${titleRevealed ? 'revealed' : ''}`}>
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured <span className="text-gradient-pink animate-gradient">Projects</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projectList.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}