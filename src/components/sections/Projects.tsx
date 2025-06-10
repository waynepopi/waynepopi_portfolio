import { ExternalLink, Github, Code, Smartphone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'AI Resume Builder',
      description: 'An intelligent resume builder that uses AI to optimize and tailor your resume for specific job applications. Features include ATS optimization, content suggestions, and professional templates.',
      image: '/projectpics/airesume.png',
      technologies: ['React', 'Node.js', 'OpenAI API', 'MongoDB', 'Tailwind CSS'],
      type: 'Web Application',
      icon: <Globe className="text-electric-blue" size={20} />,
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'AI Stockwise',
      description: 'AI-powered stock market analysis tool that provides predictive insights, trend analysis, and personalized stock recommendations using machine learning algorithms.',
      image: '/projectpics/aistockwise.png',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'Pandas'],
      type: 'Web Application',
      icon: <Code className="text-electric-pink" size={20} />,
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Novatech',
      description: 'A modern e-commerce platform for tech gadgets, offering a wide range of electronics, computers, and accessories with secure checkout and user reviews.',
      image: '/projectpics/technov.png',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Stripe'],
      type: 'E-commerce Website',
      icon: <Globe className="text-electric-purple" size={20} />,
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">My Projects</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-electric-blue/30 transition-all duration-300 hover:scale-105 animate-fade-in-up glow-border group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="inline-block bg-slate-800/90 backdrop-blur-sm text-xs px-2.5 py-1 rounded-full text-gray-300 border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="inline-flex items-center justify-center bg-slate-800/90 backdrop-blur-sm text-xs w-6 h-6 rounded-full text-gray-400 border border-slate-700/50">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  {project.icon}
                  <span className="text-xs font-mono text-electric-blue">{project.type}</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-electric-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-5 mt-2 flex-1">{project.description}</p>
                <div className="flex gap-4">
                  <a 
                    href={project.title === 'AI Resume Builder' 
                      ? "https://ai-resume-builder-one-iota.vercel.app/"
                      : project.title === 'AI Stockwise'
                      ? "https://ai-stock-management.vercel.app"
                      : "https://nova-tech-ecommerce.vercel.app"
                    }
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-electric-blue to-electric-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-electric-blue/20 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    View Live Demo
                  </a>
                  <a 
                    href={project.title === 'AI Resume Builder' 
                      ? "https://github.com/waynepopi/ai-resume-builder"
                      : project.title === 'AI Stockwise'
                      ? "https://github.com/waynepopi/ai-stock-management"
                      : "https://github.com/waynepopi/nova-tech-ecommerce"
                    }
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 border-2 border-electric-blue text-electric-blue font-semibold rounded-lg hover:bg-electric-blue/10 hover:text-white transition-all duration-300"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <p className="text-gray-400 mb-6">
            Want to see more of my work or discuss a potential project?
          </p>
          <Button 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-gradient-to-r from-electric-blue to-electric-purple hover:from-electric-blue/80 hover:to-electric-purple/80 text-white font-semibold text-lg"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
