import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Mail, Server, Database } from 'lucide-react';

const NewHome: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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
      <section className="min-h-screen flex items-center justify-center px-4 pt-16 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            className="text-center lg:text-left lg:mr-12"
            variants={container}
            initial="hidden"
            animate={isMounted ? "show" : "hidden"}
          >
            <motion.div className="mb-8" variants={item}>
              <motion.span 
                className="inline-block text-electric-blue text-sm font-mono tracking-wider mb-4"
              >
                WELCOME TO MY PORTFOLIO
              </motion.span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Hi, I'm <span className="gradient-text">Wayne Popi</span>
              </h1>
              <div className="relative inline-block mb-8">
                <h2 className="text-2xl md:text-3xl text-gray-300 font-medium inline-flex items-center gap-3">
                  <Code className="text-electric-blue" size={28} />
                  <span>Software Engineer</span>
                </h2>
                <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-electric-blue to-electric-purple rounded-full"></div>
              </div>
            </motion.div>
            
            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl">
              I specialize in building modern, scalable web applications with a focus on performance, 
              accessibility, and exceptional user experiences. Let's turn your ideas into reality 
              with clean, efficient code and innovative solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a 
                href="#projects" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-gradient-to-r from-electric-blue to-electric-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-electric-blue/20 hover:-translate-y-0.5 transition-all duration-300 text-center"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 border-2 border-electric-blue text-electric-blue font-semibold rounded-lg hover:bg-electric-blue/10 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail size={18} />
                Contact Me
              </a>
              <a 
                href="/waynepopi_resume.pdf" 
                download
                className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download CV
              </a>
            </div>
            
            {/* Tech Stack */}
            <div>
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
          </motion.div>
          
          {/* Profile Image with Tech Animations */}
          <motion.div 
            className="relative flex justify-center lg:justify-end lg:mr-8 lg:-mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="relative group"
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              {/* Tech Circuit Animation */}
              <motion.div 
                className="absolute inset-0 -z-10"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <path
                    d="M 40,100 A 60,60 0 1,1 160,100 A 60,60 0 1,1 40,100"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Floating Tech Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-electric-blue/20 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-electric-purple/20 rounded-full"
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-1/2 -right-8 w-4 h-4 bg-electric-pink/20 rounded-full"
                animate={{
                  x: [0, 10, 0],
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Animated border */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-electric-blue via-electric-purple to-electric-pink rounded-full p-[2px] -z-10"
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              {/* Profile container */}
              <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-full p-[2px]">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-slate-800 to-slate-900/90 rounded-full border border-slate-700/50 overflow-hidden shadow-2xl group">
                  <img 
                    src="/Screenshots/profile.jpg" 
                    alt="Wayne Popi" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    style={{ objectPosition: 'center 15%' }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.backgroundColor = '#0f172a';
                      target.alt = 'Profile picture not available';
                      target.innerHTML = '<div class="absolute inset-0 flex items-center justify-center text-gray-400">Profile Image</div>';
                    }}
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-2 -right-2 w-3 h-3 bg-electric-blue rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div 
                className="absolute -bottom-2 -left-2 w-2 h-2 bg-electric-pink rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2.5,
                  delay: 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-slate-800/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-white border border-slate-700/50 shadow-lg"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <span className="relative flex h-3 w-3 mr-1.5 float-left mt-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                Available for work
              </motion.div>
            </motion.div>
          </motion.div>
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
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.title}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-electric-blue/30 transition-all duration-300 hover:-translate-y-1"
                variants={item}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              >
                <div className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-electric-blue text-sm font-mono tracking-wider">EXPERIENCE</span>
            <h2 className="text-4xl font-bold text-white mt-2 mb-4">
              My <span className="gradient-text">Journey</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-electric-blue to-electric-purple mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Software Engineer</h3>
              <p className="text-gray-400 mb-4">Building modern web applications and contributing to open-source projects.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-electric-blue/10 text-electric-blue rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-electric-purple/10 text-electric-purple rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-electric-pink/10 text-electric-pink rounded-full text-sm">TypeScript</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Full Stack Developer</h3>
              <p className="text-gray-400 mb-4">Developing end-to-end solutions with a focus on user experience and performance.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-electric-blue/10 text-electric-blue rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-electric-purple/10 text-electric-purple rounded-full text-sm">Express</span>
                <span className="px-3 py-1 bg-electric-pink/10 text-electric-pink rounded-full text-sm">Next.js</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-electric-blue text-sm font-mono tracking-wider">ABOUT ME</span>
            <h2 className="text-4xl font-bold text-white mt-2 mb-4">
              Get to <span className="gradient-text">Know Me</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-electric-blue to-electric-purple mx-auto mb-6"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate software engineer with a strong foundation in web development and a keen eye for creating elegant solutions. My journey in tech has been driven by a constant desire to learn and innovate.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                  <span className="text-gray-300">Problem Solver</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-electric-purple rounded-full"></div>
                  <span className="text-gray-300">Team Player</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-electric-pink rounded-full"></div>
                  <span className="text-gray-300">Fast Learner</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 gap-6"
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-2">3+</h3>
                <p className="text-gray-400">Years of Experience</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-2">20+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-2">15+</h3>
                <p className="text-gray-400">Happy Clients</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-2">5+</h3>
                <p className="text-gray-400">Open Source Contributions</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-electric-blue text-sm font-mono tracking-wider">RESUME</span>
            <h2 className="text-4xl font-bold text-white mt-2 mb-4">
              My <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-electric-blue to-electric-purple mx-auto mb-6"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Professional Summary</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                I am a passionate software engineer with expertise in full-stack development, specializing in modern web technologies. My experience spans across various domains, from building scalable applications to implementing complex features.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My resume includes detailed information about my technical skills, work experience, and educational background. Feel free to download it to learn more about my qualifications and achievements.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                  <span className="text-gray-300">Full Stack Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-electric-purple rounded-full"></div>
                  <span className="text-gray-300">Web Applications</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-electric-pink rounded-full"></div>
                  <span className="text-gray-300">Cloud Solutions</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50"
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-2xl font-bold text-white mb-4">Download My Resume</h3>
                <p className="text-gray-300 mb-6">
                  Get a detailed overview of my skills, experience, and qualifications in a well-formatted PDF document.
                </p>
                <a 
                  href="/waynepopi_resume.pdf" 
                  download
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-electric-blue to-electric-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-electric-blue/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download Resume
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Let's Work Together Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-r from-electric-blue/10 to-electric-purple/10 p-12 rounded-2xl border border-slate-700/50"
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-gradient-to-r from-electric-blue to-electric-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-electric-blue/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                Get in Touch
              </a>
              <a 
                href="/waynepopi_resume.pdf" 
                download
                className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-400 text-sm">
        <p>© 2024 Wayne Popi. All rights reserved.</p>
        <a 
          href="mailto:waynepopy@gmail.com" 
          className="text-electric-blue hover:text-electric-purple transition-colors"
        >
          waynepopy@gmail.com
        </a>
      </footer>

      {/* Scroll indicator */}
      <motion.div 
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 text-sm pointer-events-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <span className="mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NewHome;
