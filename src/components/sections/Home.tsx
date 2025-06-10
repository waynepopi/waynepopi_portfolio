import React from 'react';
import { Code, Zap, Mail, Server, Database, Github, Linkedin } from 'lucide-react';

const Home: React.FC = () => {
  const featuredSkills = [
    { name: 'React', icon: <Code className="text-electric-blue" size={20} />, level: 90 },
    { name: 'Node.js', icon: <Server className="text-electric-purple" size={20} />, level: 85 },
    { name: 'TypeScript', icon: <Code className="text-electric-pink" size={20} />, level: 88 },
    { name: 'MongoDB', icon: <Database className="text-neon-cyan" size={20} />, level: 80 },
  ];

  const skills = [
    {
      title: 'Frontend Development',
      icon: <Code className="text-electric-blue" size={24} />,
      description: 'Building responsive and interactive user interfaces with modern frameworks and libraries.'
    },
    {
      title: 'Backend Development',
      icon: <Server className="text-electric-purple" size={24} />,
      description: 'Designing robust and scalable server-side applications and APIs.'
    },
    {
      title: 'Database Design',
      icon: <Database className="text-electric-pink" size={24} />,
      description: 'Structuring efficient databases and writing optimized queries.'
    },
    {
      title: 'DevOps & Deployment',
      icon: <Zap className="text-neon-cyan" size={24} />,
      description: 'CI/CD pipelines, containerization, and cloud deployment.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16 pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <span className="inline-block text-electric-blue text-sm font-mono tracking-wider mb-4 animate-fade-in">
                WELCOME TO MY PORTFOLIO
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Hi, I'm <span className="gradient-text">Wayne Popi</span>
              </h1>
              <div className="relative inline-block mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-2xl md:text-3xl text-gray-300 font-medium inline-flex items-center gap-3">
                  <Code className="text-electric-blue" size={28} />
                  <span>Software Engineer</span>
                </h2>
                <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-electric-blue to-electric-purple rounded-full"></div>
              </div>
            </div>
            
            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              I specialize in building modern, scalable web applications with a focus on performance, 
              accessibility, and exceptional user experiences. Let's turn your ideas into reality 
              with clean, efficient code and innovative solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a 
                href="#projects" 
                className="px-8 py-4 bg-gradient-to-r from-electric-blue to-electric-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-electric-blue/20 hover:-translate-y-0.5 transition-all duration-300 text-center"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border-2 border-electric-blue text-electric-blue font-semibold rounded-lg hover:bg-electric-blue/10 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail size={18} />
                Contact Me
              </a>
            </div>
            
            {/* Tech Stack */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <p className="text-sm text-gray-500 mb-4">TECH STACK</p>
              <div className="flex flex-wrap gap-4">
                {featuredSkills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 group"
                    style={{ animationDelay: `${0.6 + (index * 0.1)}s` }}
                  >
                    {skill.icon}
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue via-electric-purple to-electric-pink rounded-2xl animate-pulse-glow -z-10" />
              
              {/* Profile container */}
              <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-2xl p-1.5 m-1.5">
                <div className="w-full max-w-md h-[500px] bg-gradient-to-br from-slate-800 to-slate-900/90 rounded-xl border border-slate-700/50 overflow-hidden">
                  <img 
                    src="/Screenshots/profile.jpg" 
                    alt="Wayne Popi" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.backgroundColor = '#0f172a';
                      target.alt = 'Profile picture not available';
                    }}
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-electric-blue rounded-full animate-pulse"></div>
              <div 
                className="absolute -bottom-3 -left-3 w-5 h-5 bg-electric-pink rounded-full animate-pulse" 
                style={{ animationDelay: '1s' }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-electric-blue text-sm font-mono tracking-wider">SKILLS & EXPERTISE</span>
            <h2 className="text-4xl font-bold text-white mt-2 mb-4">
              My <span className="gradient-text">Capabilities</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-electric-blue to-electric-purple mx-auto mb-6"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              I've honed my skills across various technologies and frameworks to deliver high-quality solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Frontend Development',
                icon: <Code className="text-electric-blue" size={24} />,
                description: 'Building responsive and interactive user interfaces with modern frameworks and libraries.'
              },
              {
                title: 'Backend Development',
                icon: <Server className="text-electric-purple" size={24} />,
                description: 'Designing robust and scalable server-side applications and APIs.'
              },
              {
                title: 'Database Design',
                icon: <Database className="text-electric-pink" size={24} />,
                description: 'Structuring efficient databases and writing optimized queries.'
              },
              {
                title: 'DevOps & Deployment',
                icon: <Zap className="text-neon-cyan" size={24} />,
                description: 'CI/CD pipelines, containerization, and cloud deployment.'
              }
            ].map((skill, index) => (
              <div 
                key={skill.title}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-electric-blue/30 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
              <div className="flex items-center gap-2 text-gray-400 hover:text-electric-purple transition-colors">
                <Zap size={20} />
                <span className="text-sm font-mono">Performance</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 hover:text-electric-pink transition-colors">
                <Code size={20} />
                <span className="text-sm font-mono">Innovation</span>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue via-electric-purple to-electric-pink rounded-2xl animate-pulse-glow" />
              
              {/* Profile container */}
              <div className="relative bg-slate-900 rounded-2xl p-4 m-2 animate-float">
                <div className="w-80 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-electric-blue/30 overflow-hidden">
                  <img 
                    src="/Screenshots/profile.jpg" 
                    alt="Wayne Popi" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.backgroundColor = '#1e293b';
                      target.alt = 'Profile picture not available';
                    }}
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-electric-blue rounded-full animate-pulse" />
              <div 
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-electric-pink rounded-full animate-pulse" 
                style={{ animationDelay: '1s' }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-20 px-4 bg-slate-900/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">Featured Skills</h2>
            <p className="text-lg text-gray-400">Some of the technologies I work with</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-slate-800/50 p-6 rounded-xl border border-electric-blue/20 hover:border-electric-blue/50 transition-all duration-300 hover:scale-105 animate-fade-in-up glow-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {skill.icon}
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Proficiency</span>
                    <span className="text-electric-blue">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-electric-blue to-electric-purple h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="px-6 py-3 border border-electric-blue text-electric-blue font-semibold rounded-lg hover:bg-electric-blue hover:text-white transition-all duration-300">
              View All Skills
            </button>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="py-20 px-4 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">What I Do</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I specialize in building modern, scalable web applications with a focus on user experience and performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-electric-blue/20 hover:border-electric-blue/50 transition-all duration-300">
              <div className="w-12 h-12 bg-electric-blue/20 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-electric-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Full Stack Development</h3>
              <p className="text-gray-400">
                Building end-to-end solutions with modern frameworks and technologies, from responsive frontends to robust backends.
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-electric-purple/20 hover:border-electric-purple/50 transition-all duration-300">
              <div className="w-12 h-12 bg-electric-purple/20 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="text-electric-purple" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">System Architecture</h3>
              <p className="text-gray-400">
                Designing scalable and maintainable system architectures that can grow with your business needs.
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-electric-pink/20 hover:border-electric-pink/50 transition-all duration-300">
              <div className="w-12 h-12 bg-electric-pink/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-electric-pink" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Performance Optimization</h3>
              <p className="text-gray-400">
                Optimizing applications for speed, efficiency, and exceptional user experience across all devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-20 px-4 bg-slate-900/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">Let's Connect</h2>
            <p className="text-lg text-gray-400">Ready to start your next project? Get in touch!</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-electric-blue/20 hover:border-electric-blue/50 transition-all duration-300 animate-fade-in-up">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-electric-blue/20 rounded-lg flex items-center justify-center">
                  <Mail className="text-electric-blue" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email Me</h3>
                  <p className="text-gray-400">Drop me a line anytime</p>
                </div>
              </div>
              <p className="text-electric-blue font-medium">waynepopy@gmail.com</p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-electric-purple/20 hover:border-electric-purple/50 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-electric-purple/20 rounded-lg flex items-center justify-center">
                  <Phone className="text-electric-purple" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Call Me</h3>
                  <p className="text-gray-400">Let's talk about your project</p>
                </div>
              </div>
              <p className="text-electric-purple font-medium">+263 78 585 9500</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="px-8 py-3 bg-gradient-to-r from-electric-blue to-electric-purple text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 glow-border">
              Contact Me Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-electric-blue/20 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold gradient-text mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail size={18} className="text-electric-blue" />
                  <span>waynepopy@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone size={18} className="text-electric-blue" />
                  <span>+263 78 585 9500</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold gradient-text mb-4">Quick Links</h3>
              <div className="space-y-2">
                <p className="text-gray-400 hover:text-electric-blue cursor-pointer transition-colors">About Me</p>
                <p className="text-gray-400 hover:text-electric-blue cursor-pointer transition-colors">My Skills</p>
                <p className="text-gray-400 hover:text-electric-blue cursor-pointer transition-colors">Projects</p>
                <p className="text-gray-400 hover:text-electric-blue cursor-pointer transition-colors">Contact</p>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold gradient-text mb-4">Connect</h3>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-electric-blue/20 rounded-lg flex items-center justify-center hover:bg-electric-blue/30 cursor-pointer transition-colors">
                  <Github size={20} className="text-electric-blue" />
                </div>
                <div className="w-10 h-10 bg-electric-blue/20 rounded-lg flex items-center justify-center hover:bg-electric-blue/30 cursor-pointer transition-colors">
                  <Linkedin size={20} className="text-electric-blue" />
                </div>
                <div className="w-10 h-10 bg-electric-blue/20 rounded-lg flex items-center justify-center hover:bg-electric-blue/30 cursor-pointer transition-colors">
                  <Mail size={20} className="text-electric-blue" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-electric-blue/20 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Wayne Popi. All rights reserved. Built with passion and modern technologies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
