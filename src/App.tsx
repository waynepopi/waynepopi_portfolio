import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code2, Database, Globe, Smartphone, Server, Palette, Send, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';

const App = () => {
  const { toast } = useToast();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
        }
      });
    }, { threshold: 0.3 });

    [heroRef, aboutRef, skillsRef, projectsRef, contactRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: 'Message sent!', description: 'I will get back to you soon.' });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A responsive personal portfolio to showcase skills and projects.',
      image: '/projectpics/portfolio.png',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'To-Do List App',
      description: 'A simple to-do list app where users can add, delete, and mark tasks as completed.',
      image: '/projectpics/todo.png',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Weather Checker',
      description: 'A weather app that fetches and displays current weather information by city.',
      image: '/projectpics/weather.jpg',
      technologies: ['React', 'JavaScript', 'API Integration'],
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  const skillCategories = [
    { title: 'Frontend Development', icon: Globe, skills: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'HTML5/CSS3'], color: 'electric-blue' },
    { title: 'Backend Development', icon: Server, skills: ['Node.js', 'Python', 'Express.js', 'Django', 'RESTful APIs', 'GraphQL'], color: 'electric-purple' },
    { title: 'Database Management', icon: Database, skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'Supabase'], color: 'electric-pink' },
    { title: 'Mobile Development', icon: Smartphone, skills: ['React Native', 'Flutter', 'Progressive Web Apps', 'iOS', 'Android'], color: 'neon-cyan' },
    { title: 'DevOps & Tools', icon: Code2, skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux', 'Nginx'], color: 'neon-lime' },
    { title: 'Design & UX', icon: Palette, skills: ['Figma', 'Adobe XD', 'UI/UX Design', 'Responsive Design', 'Accessibility'], color: 'electric-orange' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      <Toaster />
      <Sonner />

      {/* Fixed Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-purple/10 rounded-full blur-3xl opacity-20" />
      </div>

      {/* Sticky Header with Navigation */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-electric-blue/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div className="text-2xl font-bold gradient-text">WP</motion.div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navItems.map(item => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id ? 'text-electric-blue' : 'text-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900/95 border-t border-electric-blue/20"
            >
              <nav className="flex flex-col gap-4 p-4">
                {navItems.map(item => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => { setActiveSection(item.id); setMenuOpen(false); }}
                    className="text-gray-300 hover:text-electric-blue transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section ref={heroRef} id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-electric-blue text-sm font-mono">WELCOME TO MY PORTFOLIO</span>
              <h1 className="text-7xl lg:text-9xl font-bold mt-4 mb-6">
                Hi, I'm <span className="gradient-text">Wayne Popi</span>
              </h1>
              <h2 className="text-3xl text-gray-300 mb-6">Software Engineer</h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl">
                I specialize in building modern, scalable web applications with a focus on performance, accessibility, and exceptional user experiences.
              </p>
              <div className="flex gap-4 flex-wrap">
                <motion.a href="#projects" whileHover={{ scale: 1.05 }} className="px-8 py-3 bg-gradient-to-r from-electric-blue to-electric-purple rounded-lg font-semibold hover:shadow-lg hover:shadow-electric-blue/50">
                  View My Work
                </motion.a>
                <motion.a href="#contact" whileHover={{ scale: 1.05 }} className="px-8 py-3 border-2 border-electric-blue rounded-lg font-semibold hover:bg-electric-blue/10">
                  Contact Me
                </motion.a>
                <motion.a href="/resume/waynepopi_resume.pdf" download whileHover={{ scale: 1.05 }} className="px-8 py-3 bg-slate-800 rounded-lg font-semibold hover:bg-slate-700">
                  Download CV
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-electric-purple rounded-full blur-3xl opacity-30" />
                <img
                  src="/screenshots/profile.jpg"
                  alt="Wayne Popi"
                  className="w-80 h-80 rounded-full object-cover relative z-10 border-4 border-electric-blue/30"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border-2 border-transparent border-t-electric-blue border-r-electric-purple"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} id="about" className="min-h-screen flex items-center py-20 px-4">
          <div className="max-w-6xl mx-auto w-full">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-bold mb-16 text-center"
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate software engineer with a strong foundation in web development. My journey in tech has been driven by a constant desire to learn and innovate.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[{ label: 'Years Experience', value: '3+' }, { label: 'Projects', value: '20+' }, { label: 'Happy Clients', value: '15+' }, { label: 'Open Source', value: '5+' }].map(stat => (
                    <div key={stat.label} className="bg-slate-800/50 p-4 rounded-lg border border-electric-blue/30">
                      <div className="text-2xl font-bold text-electric-blue">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-slate-800/50 p-6 rounded-lg border border-electric-blue/30">
                  <h3 className="text-xl font-bold mb-2 text-electric-blue">Education</h3>
                  <p className="font-semibold">Software Engineering</p>
                  <p className="text-sm text-gray-400">Bindura University of Science Education (2024 - 2027)</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg border border-electric-purple/30">
                  <h3 className="text-xl font-bold mb-2 text-electric-purple">Experience</h3>
                  <p className="font-semibold">Software Systems Assistant</p>
                  <p className="text-sm text-gray-400">Civil Legacy (Present)</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg border border-electric-pink/30">
                  <h3 className="text-xl font-bold mb-2 text-electric-pink">Philosophy</h3>
                  <p className="text-gray-300">Building clean, efficient code that makes a real difference.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} id="skills" className="min-h-screen flex items-center py-20 px-4">
          <div className="max-w-6xl mx-auto w-full">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-bold mb-16 text-center"
            >
              My <span className="gradient-text">Skills</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, idx) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-slate-800/50 p-6 rounded-lg border border-electric-blue/20 hover:border-electric-blue/50 transition-all"
                  >
                    <Icon className="w-8 h-8 mb-4 text-electric-blue" />
                    <h3 className="text-lg font-bold mb-4">{category.title}</h3>
                    <div className="space-y-2">
                      {category.skills.map(skill => (
                        <div key={skill} className="flex items-center gap-2">
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div key={i} className={`w-2 h-2 rounded-full ${i < 4 ? 'bg-electric-blue' : 'bg-slate-700'}`} />
                            ))}
                          </div>
                          <span className="text-sm text-gray-300">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} id="projects" className="min-h-screen flex items-center py-20 px-4">
          <div className="max-w-6xl mx-auto w-full">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-bold mb-16 text-center"
            >
              My <span className="gradient-text">Projects</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-800/50 rounded-lg overflow-hidden border border-electric-blue/20 hover:border-electric-blue/50 transition-all group"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map(tech => (
                        <span key={tech} className="text-xs bg-electric-blue/10 text-electric-blue px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-electric-blue to-electric-purple px-4 py-2 rounded font-semibold hover:shadow-lg hover:shadow-electric-blue/50 transition-all">
                        <ExternalLink size={16} /> Demo
                      </a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 border-2 border-electric-blue px-4 py-2 rounded font-semibold hover:bg-electric-blue/10 transition-all">
                        <Github size={16} /> Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} id="contact" className="min-h-screen flex items-center py-20 px-4">
          <div className="max-w-6xl mx-auto w-full">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-bold mb-16 text-center"
            >
              Get In <span className="gradient-text">Touch</span>
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {[{ icon: Mail, label: 'Email', value: 'waynepopy@gmail.com', href: 'mailto:waynepopy@gmail.com' }, { icon: Phone, label: 'Phone', value: '+263 78 585 9500', href: 'tel:+263785859500' }, { icon: MapPin, label: 'Location', value: 'Zimbabwe', href: 'https://www.google.com/maps/place/Zimbabwe' }].map(contact => {
                  const Icon = contact.icon;
                  return (
                    <a key={contact.label} href={contact.href} className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-electric-blue/20 hover:border-electric-blue/50 transition-all">
                      <Icon className="text-electric-blue flex-shrink-0" size={24} />
                      <div>
                        <div className="text-sm text-gray-400">{contact.label}</div>
                        <div className="font-semibold">{contact.value}</div>
                      </div>
                    </a>
                  );
                })}
                <div className="pt-4 flex gap-4">
                  {[{ icon: Github, href: 'https://github.com/waynepopi' }, { icon: Linkedin, href: 'https://linkedin.com/in/waynepopi' }, { icon: Mail, href: 'mailto:waynepopy@gmail.com' }].map(social => {
                    const Icon = social.icon;
                    return (
                      <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 rounded-lg border border-electric-blue/20 hover:border-electric-blue/50 transition-all">
                        <Icon className="text-electric-blue" size={20} />
                      </a>
                    );
                  })}
                </div>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-electric-blue/20 rounded-lg text-white placeholder-gray-500 focus:border-electric-blue outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-electric-blue/20 rounded-lg text-white placeholder-gray-500 focus:border-electric-blue outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-electric-blue/20 rounded-lg text-white placeholder-gray-500 focus:border-electric-blue outline-none transition-all"
                />
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-electric-blue/20 rounded-lg text-white placeholder-gray-500 focus:border-electric-blue outline-none transition-all resize-none"
                />
                <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-electric-blue to-electric-purple rounded-lg font-semibold hover:shadow-lg hover:shadow-electric-blue/50 flex items-center justify-center gap-2 transition-all">
                  <Send size={18} /> Send Message
                </button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-electric-blue/20 bg-slate-950/50 py-8 px-4 text-center text-gray-400">
        <p>© 2024 Wayne Popi. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
