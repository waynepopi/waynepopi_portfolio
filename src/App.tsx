import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Menu, X, Github, Linkedin, Mail, ExternalLink, Code2, Database, Globe,
  Smartphone, Server, Palette, MapPin, ChevronDown, MessageSquare,
  Zap, Users, Heart, Star, GraduationCap, Briefcase, Award, ArrowRight
} from 'lucide-react';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';

// ─── Types ───────────────────────────────────────────────────────────────────
interface NavItem { label: string; id: string; }
interface Project { title: string; description: string; image: string; tech: string[]; demo: string; code: string; }
interface SkillCategory { title: string; icon: React.ElementType; color: string; dotColor: string; skills: { name: string; level: number }[]; }
interface FormData { name: string; email: string; message: string; }

// ─── Data ────────────────────────────────────────────────────────────────────
const NAV_ITEMS: NavItem[] = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

const PROJECTS: Project[] = [
  {
    title: 'AI Resume Builder',
    description: 'Intelligent resume generator using AI to craft tailored resumes from user input. Features smart templates and ATS optimization.',
    image: '/projectpics/portfolio.png',
    tech: ['React', 'TypeScript', 'OpenAI', 'Tailwind CSS'],
    demo: 'https://ai-resume-builder-one-iotna.vercel.app/',
    code: 'https://github.com/waynepopi/ai-resume-builder',
  },
  {
    title: 'AI Stockwise',
    description: 'AI-powered stock management system providing real-time analytics, predictive restocking, and inventory tracking.',
    image: '/projectpics/todo.png',
    tech: ['React', 'Node.js', 'MongoDB', 'AI/ML'],
    demo: 'https://ai-stock-managemenmt.vercel.app',
    code: 'https://github.com/waynepopi/ai-stock-management',
  },
  {
    title: 'Nova Tech E-commerce',
    description: 'Full-stack e-commerce platform with payment integration, product catalog, cart management, and admin dashboard.',
    image: '/projectpics/weather.jpg',
    tech: ['Next.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    demo: 'https://nova-tech-ecommnerce.vercel.app',
    code: 'https://github.com/waynepopi/nova-tech-ecommerce',
  },
];

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Development', icon: Globe, color: 'border-[#00D4FF]/40 hover:border-[#00D4FF]', dotColor: 'bg-[#00D4FF]',
    skills: [{ name: 'React / Next.js', level: 5 }, { name: 'TypeScript', level: 5 }, { name: 'Tailwind CSS', level: 5 }, { name: 'Vue.js', level: 4 }, { name: 'HTML5 / CSS3', level: 5 }, { name: 'Framer Motion', level: 4 }],
  },
  {
    title: 'Backend Development', icon: Server, color: 'border-[#8B5CF6]/40 hover:border-[#8B5CF6]', dotColor: 'bg-[#8B5CF6]',
    skills: [{ name: 'Node.js', level: 4 }, { name: 'Express.js', level: 4 }, { name: 'Python', level: 3 }, { name: 'Django', level: 3 }, { name: 'REST APIs', level: 5 }, { name: 'GraphQL', level: 3 }],
  },
  {
    title: 'Database Management', icon: Database, color: 'border-[#EC4899]/40 hover:border-[#EC4899]', dotColor: 'bg-[#EC4899]',
    skills: [{ name: 'MongoDB', level: 4 }, { name: 'PostgreSQL', level: 4 }, { name: 'MySQL', level: 4 }, { name: 'Firebase', level: 4 }, { name: 'Supabase', level: 3 }, { name: 'Redis', level: 3 }],
  },
  {
    title: 'Mobile Development', icon: Smartphone, color: 'border-[#06B6D4]/40 hover:border-[#06B6D4]', dotColor: 'bg-[#06B6D4]',
    skills: [{ name: 'React Native', level: 4 }, { name: 'Flutter', level: 3 }, { name: 'PWA', level: 4 }, { name: 'Expo', level: 4 }, { name: 'iOS (Swift)', level: 2 }, { name: 'Android', level: 2 }],
  },
  {
    title: 'DevOps & Tools', icon: Code2, color: 'border-[#84CC16]/40 hover:border-[#84CC16]', dotColor: 'bg-[#84CC16]',
    skills: [{ name: 'Git / GitHub', level: 5 }, { name: 'Docker', level: 3 }, { name: 'AWS', level: 3 }, { name: 'CI/CD', level: 3 }, { name: 'Linux', level: 4 }, { name: 'Nginx', level: 3 }],
  },
  {
    title: 'Design & UX', icon: Palette, color: 'border-[#F97316]/40 hover:border-[#F97316]', dotColor: 'bg-[#F97316]',
    skills: [{ name: 'Figma', level: 4 }, { name: 'Adobe XD', level: 3 }, { name: 'UI/UX Design', level: 4 }, { name: 'Responsive Design', level: 5 }, { name: 'Accessibility', level: 4 }, { name: 'Design Systems', level: 3 }],
  },
];

// ─── Circuit Animation Component ─────────────────────────────────────────────
const CircuitBackground: React.FC = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
    <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M0 40 H30 M50 40 H80 M40 0 V30 M40 50 V80" stroke="#00D4FF" strokeWidth="0.8" fill="none" />
          <circle cx="40" cy="40" r="3" fill="none" stroke="#00D4FF" strokeWidth="0.8" />
          <circle cx="0" cy="40" r="1.5" fill="#00D4FF" />
          <circle cx="80" cy="40" r="1.5" fill="#00D4FF" />
          <circle cx="40" cy="0" r="1.5" fill="#00D4FF" />
          <circle cx="40" cy="80" r="1.5" fill="#00D4FF" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
    <div className="circuit-line absolute top-1/4 left-0 w-full h-px" />
    <div className="circuit-line absolute top-2/3 left-0 w-full h-px" style={{ animationDelay: '1.5s' }} />
    <div className="absolute top-0 left-1/4 w-px h-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full circuit-vertical" />
    </div>
    <div className="absolute top-0 right-1/3 w-px h-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full circuit-vertical" style={{ animationDelay: '2s' }} />
    </div>
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00D4FF] rounded-full blur-[120px] opacity-[0.06]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#8B5CF6] rounded-full blur-[120px] opacity-[0.06]" />
      <div className="absolute top-1/2 right-1/2 w-48 h-48 bg-[#EC4899] rounded-full blur-[100px] opacity-[0.04]" />
    </div>
  </div>
);

// ─── Tech Orbit Component ─────────────────────────────────────────────────────
const TechOrbit: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative flex items-center justify-center w-full h-full">
    {/* Outer dashed ring */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      className="absolute rounded-full border border-[#00D4FF]/20 border-dashed"
      style={{ width: '108%', height: '108%' }}
    />
    {/* Middle dashed ring */}
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
      className="absolute rounded-full border border-[#8B5CF6]/20 border-dashed"
      style={{ width: '90%', height: '90%' }}
    />
    {/* Inner spinning arc */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      className="absolute rounded-full"
      style={{ width: '112%', height: '112%', border: '1.5px solid transparent', borderTopColor: '#00D4FF', borderRightColor: '#8B5CF6' }}
    />
    {/* Orbit dots — positioned at the outer arc */}
    {[0, 90, 180, 270].map((deg, i) => (
      <motion.div
        key={i}
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        className="absolute rounded-full"
        style={{ width: '112%', height: '112%', transformOrigin: 'center' }}
      >
        <div
          className="absolute w-2.5 h-2.5 rounded-full bg-[#00D4FF] shadow-[0_0_8px_#00D4FF]"
          style={{
            top: '-5px',
            left: '50%',
            transformOrigin: `50% calc(56% + 5px)`,
            transform: `translateX(-50%) rotate(${deg}deg)`,
          }}
        />
      </motion.div>
    ))}
    <div className="relative z-10 w-full h-full">{children}</div>
  </div>
);

// ─── Section Heading Component ────────────────────────────────────────────────
const SectionHeading: React.FC<{ label: string; title: string; accent: string }> = ({ label, title, accent }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    <span className="text-[#00D4FF] font-mono text-sm tracking-widest uppercase">{label}</span>
    <h2 className="text-4xl md:text-5xl font-bold mt-2">
      {title} <span className="gradient-text">{accent}</span>
    </h2>
    <div className="w-16 h-0.5 bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#EC4899] mx-auto mt-4" />
  </motion.div>
);

// ─── App Component ────────────────────────────────────────────────────────────
const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.35, rootMargin: '-60px 0px 0px 0px' }
    );
    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => observer.disconnect();
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const text = encodeURIComponent(
      `Hello Wayne,\n\nMy name is ${formData.name} and I came across your portfolio. You can reach me back at ${formData.email}.\n\n${formData.message}\n\nLooking forward to connecting!`
    );
    window.open(`https://wa.me/263785859500?text=${text}`, '_blank');
    setTimeout(() => {
      setSending(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap');

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #020617; color: white; font-family: 'Inter', sans-serif; overflow-x: hidden; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #020617; }
        ::-webkit-scrollbar-thumb { background: #00D4FF; border-radius: 2px; }

        .gradient-text {
          background: linear-gradient(135deg, #00D4FF 0%, #8B5CF6 50%, #EC4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% 200%;
          animation: gradientShift 5s ease infinite;
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .glow-blue { box-shadow: 0 0 20px rgba(0, 212, 255, 0.3); }
        .glow-purple { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
        .glow-pink { box-shadow: 0 0 20px rgba(236, 72, 153, 0.3); }

        .circuit-line {
          background: linear-gradient(90deg, transparent 0%, #00D4FF 50%, transparent 100%);
          opacity: 0;
          animation: circuitFlow 4s ease-in-out infinite;
        }
        @keyframes circuitFlow {
          0% { opacity: 0; transform: scaleX(0) translateX(-100%); }
          30% { opacity: 0.4; }
          70% { opacity: 0.4; }
          100% { opacity: 0; transform: scaleX(1) translateX(100%); }
        }
        .circuit-vertical {
          width: 1px;
          background: linear-gradient(180deg, transparent 0%, #8B5CF6 50%, transparent 100%);
          opacity: 0;
          animation: circuitFlowV 5s ease-in-out infinite;
        }
        @keyframes circuitFlowV {
          0% { opacity: 0; height: 0; top: 0; }
          50% { opacity: 0.3; height: 100%; top: 0; }
          100% { opacity: 0; height: 0; top: 100%; }
        }

        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0, 212, 255, 0.12);
        }

        .glass {
          background: rgba(2, 6, 23, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .font-mono { font-family: 'JetBrains Mono', monospace; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .float { animation: float 3s ease-in-out infinite; }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 8px rgba(0, 212, 255, 0.4); }
          50% { box-shadow: 0 0 24px rgba(0, 212, 255, 0.8); }
        }
        .pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
      `}</style>

      <Toaster />
      <Sonner />

      <CircuitBackground />

      {/* ── Header ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 glass border-b border-[#00D4FF]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <motion.button
            onClick={() => scrollTo('hero')}
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold gradient-text font-mono"
          >
            WP
          </motion.button>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-[#00D4FF]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 bg-[#00D4FF]/10 rounded-lg border border-[#00D4FF]/30"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.header>

      {/* ── Full-Screen Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col"
            style={{ background: '#020617' }}
          >
            <CircuitBackground />
            <div className="relative z-10 flex flex-col h-full p-6">
              <div className="flex items-center justify-between mb-12">
                <span className="text-xl font-bold gradient-text font-mono">WP</span>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-lg border border-[#00D4FF]/30 text-[#00D4FF]"
                >
                  <X size={22} />
                </motion.button>
              </div>
              <nav className="flex flex-col gap-2 flex-1 justify-center">
                {NAV_ITEMS.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 28, delay: i * 0.07 }}
                    onClick={() => scrollTo(item.id)}
                    className="group flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-[#00D4FF]/30 hover:bg-[#00D4FF]/5 transition-all text-left"
                  >
                    <span className="font-mono text-[#00D4FF]/50 text-sm group-hover:text-[#00D4FF] transition-colors">0{i + 1}</span>
                    <span className="text-2xl font-bold text-gray-300 group-hover:text-white transition-colors">{item.label}</span>
                    <ArrowRight size={18} className="ml-auto text-gray-600 group-hover:text-[#00D4FF] transition-colors" />
                  </motion.button>
                ))}
              </nav>
              <div className="flex gap-4 justify-center pb-8">
                {[
                  { icon: Github, href: 'https://github.com/waynepopi', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com/in/waynepopi', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:waynepopy@gmail.com', label: 'Email' },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-[#00D4FF]/20 text-gray-400 hover:text-[#00D4FF] hover:border-[#00D4FF]/50 transition-all">
                    <s.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ════════════════════════════════════════════
          Main Content
      ════════════════════════════════════════════ */}
      <main className="relative z-10">

        {/* ── Hero ── */}
        <section ref={sectionRefs.hero} id="hero" className="min-h-screen flex items-center px-4 sm:px-6 pt-16">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/5 mb-6"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00D4FF]"></span>
                </span>
                <span className="text-[#00D4FF] text-sm font-mono font-medium">Ready to Code</span>
              </motion.div>

              <span className="block text-gray-400 font-mono text-sm tracking-widest mb-3">WELCOME TO MY PORTFOLIO</span>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-none mb-4 tracking-tight">
                Hi, I'm{' '}
                <span className="gradient-text block">Wayne Popi</span>
              </h1>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-[#00D4FF]" />
                <h2 className="text-xl sm:text-2xl text-gray-300 font-medium">Software Engineer</h2>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed max-w-lg mb-8">
                I build modern, scalable web applications focused on performance, accessibility, and exceptional user experiences.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <motion.button
                  onClick={() => scrollTo('projects')}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] hover:shadow-[0_0_30px_rgba(0,212,255,0.35)] transition-shadow"
                >
                  View My Work
                </motion.button>
                <motion.button
                  onClick={() => scrollTo('contact')}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 rounded-xl font-semibold text-sm border border-[#00D4FF]/50 text-[#00D4FF] hover:bg-[#00D4FF]/10 transition-all"
                >
                  Contact Me
                </motion.button>
                <motion.a
                  href="/resume/waynepopi_resume.pdf"
                  download
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 rounded-xl font-semibold text-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                >
                  Download CV
                </motion.a>
              </div>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-6">
                {[{ v: '3+', l: 'Years Exp.' }, { v: '20+', l: 'Projects' }, { v: '15+', l: 'Clients' }].map(s => (
                  <div key={s.l}>
                    <div className="text-2xl font-bold text-[#00D4FF]">{s.v}</div>
                    <div className="text-gray-500 text-xs">{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Profile with orbit */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
              className="flex justify-center lg:justify-end items-center"
            >
              <div className="w-[min(72vw,340px)] sm:w-[min(55vw,400px)] md:w-[min(45vw,440px)] lg:w-[min(42vw,480px)] xl:w-[min(38vw,520px)] aspect-square p-6">
                <TechOrbit>
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] blur-2xl opacity-30 scale-110" />
                    <motion.img
                      src="/screenshots/profile.jpg"
                      alt="Wayne Popi"
                      className="relative z-10 w-full h-full rounded-full object-cover border-2 border-[#00D4FF]/40 pulse-glow"
                      style={{ objectPosition: 'center 15%' }}
                      whileHover={{ scale: 1.04 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    />
                  </div>
                </TechOrbit>
              </div>
            </motion.div>
          </div>

          {/* Scroll cue */}
          <motion.button
            onClick={() => scrollTo('about')}
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-[#00D4FF] transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown size={28} />
          </motion.button>
        </section>

        {/* ── About ── */}
        <section ref={sectionRefs.about} id="about" className="min-h-screen flex items-center py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto w-full">
            <SectionHeading label="Get to know me" title="About" accent="Me" />

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left — bio + timeline */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    I'm a passionate software engineer pursuing an Honours degree at Bindura University, with hands-on experience building production systems for gaming and civil engineering companies.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    I believe great software solves real problems — and I bring that mindset to every line of code I write.
                  </p>
                </div>

                {/* Timeline */}
                <div>
                  <h3 className="text-[#00D4FF] font-mono text-sm tracking-widest mb-6 uppercase">Experience Timeline</h3>
                  <div className="relative border-l border-[#00D4FF]/20 ml-3 space-y-8">
                    {[
                      { role: 'Software Systems Assistant', company: 'Civil Legacy', period: 'Present', icon: Briefcase, color: '#00D4FF', desc: 'Building and maintaining software systems for civil engineering workflows and project management.' },
                      { role: 'Software Systems Assistant', company: 'GreyBox Gaming', period: '2024', icon: Star, color: '#8B5CF6', desc: 'Developed gaming platform features, backend services, and user-facing interfaces for an interactive gaming product.' },
                    ].map((exp, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 }}
                        className="relative pl-8"
                      >
                        <div className="absolute -left-[15px] w-7 h-7 rounded-full flex items-center justify-center border-2 border-current" style={{ color: exp.color, background: '#020617', borderColor: exp.color }}>
                          <exp.icon size={12} />
                        </div>
                        <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4 card-hover">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <p className="font-semibold text-white">{exp.role}</p>
                            <span className="font-mono text-xs px-2 py-0.5 rounded-full border whitespace-nowrap" style={{ color: exp.color, borderColor: exp.color + '40' }}>{exp.period}</span>
                          </div>
                          <p className="text-sm font-medium mb-2" style={{ color: exp.color }}>{exp.company}</p>
                          <p className="text-gray-500 text-sm">{exp.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                    {/* Education */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="relative pl-8"
                    >
                      <div className="absolute -left-[15px] w-7 h-7 rounded-full flex items-center justify-center border-2 border-[#EC4899]" style={{ background: '#020617' }}>
                        <GraduationCap size={12} className="text-[#EC4899]" />
                      </div>
                      <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4 card-hover">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <p className="font-semibold text-white">Software Engineering Honours</p>
                          <span className="font-mono text-xs px-2 py-0.5 rounded-full border border-[#EC4899]/40 text-[#EC4899] whitespace-nowrap">2024–2027</span>
                        </div>
                        <p className="text-sm font-medium text-[#EC4899] mb-2">Bindura University (BUSE)</p>
                        <p className="text-gray-500 text-sm">Studying software systems, algorithms, databases, and modern engineering practices.</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Right — values + stats */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-8"
              >
                {/* Values Grid */}
                <div>
                  <h3 className="text-[#00D4FF] font-mono text-sm tracking-widest mb-6 uppercase">Core Values</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Zap, label: 'Innovation', desc: 'Embracing new tech and approaches to solve hard problems.', color: '#00D4FF' },
                      { icon: Users, label: 'Collaboration', desc: 'Working together to build solutions greater than any individual.', color: '#8B5CF6' },
                      { icon: Heart, label: 'Passion', desc: 'Genuine love for clean code and exceptional user experiences.', color: '#EC4899' },
                      { icon: Award, label: 'Excellence', desc: 'Commitment to high-quality, tested, and maintainable software.', color: '#06B6D4' },
                    ].map(v => (
                      <motion.div
                        key={v.label}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white/[0.03] border border-white/5 rounded-xl p-4 card-hover"
                      >
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: v.color + '15' }}>
                          <v.icon size={18} style={{ color: v.color }} />
                        </div>
                        <p className="font-semibold mb-1" style={{ color: v.color }}>{v.label}</p>
                        <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Global Impact Stats */}
                <div>
                  <h3 className="text-[#00D4FF] font-mono text-sm tracking-widest mb-6 uppercase">Global Impact</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: '3+', label: 'Years Building', color: '#00D4FF' },
                      { value: '20+', label: 'Projects Shipped', color: '#8B5CF6' },
                      { value: '15+', label: 'Happy Clients', color: '#EC4899' },
                      { value: '5+', label: 'Open Source', color: '#06B6D4' },
                    ].map(s => (
                      <div key={s.label} className="bg-white/[0.03] border border-white/5 rounded-xl p-4 text-center">
                        <div className="text-3xl font-black mb-1" style={{ color: s.color }}>{s.value}</div>
                        <div className="text-gray-500 text-xs">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section ref={sectionRefs.skills} id="skills" className="py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading label="What I work with" title="My" accent="Skills" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SKILL_CATEGORIES.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <motion.div
                    key={cat.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.6 }}
                    className={`bg-white/[0.03] border rounded-2xl p-6 card-hover ${cat.color} transition-colors`}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                        <Icon size={20} className="text-[#00D4FF]" />
                      </div>
                      <h3 className="font-bold text-white">{cat.title}</h3>
                    </div>
                    <div className="space-y-3">
                      {cat.skills.map(skill => (
                        <div key={skill.name} className="flex items-center justify-between gap-3">
                          <span className="text-sm text-gray-300 flex-1">{skill.name}</span>
                          <div className="flex gap-1 flex-shrink-0">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full transition-all ${i < skill.level ? cat.dotColor : 'bg-white/10'}`}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Projects ── */}
        <section ref={sectionRefs.projects} id="projects" className="py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading label="What I've built" title="Featured" accent="Projects" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="group bg-white/[0.03] border border-white/5 rounded-2xl overflow-hidden card-hover hover:border-[#00D4FF]/30"
                >
                  {/* Image */}
                  <div className="h-44 overflow-hidden relative bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-[#00D4FF] transition-colors">{project.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map(t => (
                        <span key={t} className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/20">{t}</span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-shadow"
                      >
                        <ExternalLink size={14} /> Live Demo
                      </motion.a>
                      <motion.a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold border border-[#00D4FF]/40 text-[#00D4FF] hover:bg-[#00D4FF]/10 transition-all"
                      >
                        <Github size={14} /> Source Code
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section ref={sectionRefs.contact} id="contact" className="py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading label="Let's talk" title="Get In" accent="Touch" />

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left — terminal style info */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-6"
              >
                {/* Contact links */}
                <div className="space-y-3">
                  {[
                    { icon: Mail, label: 'Email', value: 'waynepopy@gmail.com', href: 'mailto:waynepopy@gmail.com', color: '#00D4FF', linkAsSubtext: true },
                    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/waynepopi', href: 'https://linkedin.com/in/waynepopi', color: '#8B5CF6', linkAsSubtext: true },
                    { icon: Github, label: 'GitHub', value: 'github.com/waynepopi', href: 'https://github.com/waynepopi', color: '#EC4899', linkAsSubtext: true },
                    { icon: MapPin, label: 'Location', value: 'Zimbabwe, Africa', href: 'https://www.google.com/maps/place/Zimbabwe', color: '#06B6D4', linkAsSubtext: false },
                  ].map(c => (
                    <motion.a
                      key={c.label}
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/5 rounded-xl hover:border-[#00D4FF]/30 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: c.color + '15' }}>
                        <c.icon size={18} style={{ color: c.color }} />
                      </div>
                      <div>
                        {c.linkAsSubtext ? (
                          <>
                            <div className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{c.label}</div>
                            <div className="text-xs text-gray-500">{c.value}</div>
                          </>
                        ) : (
                          <>
                            <div className="text-xs text-gray-500">{c.label}</div>
                            <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{c.value}</div>
                          </>
                        )}
                      </div>
                      <ArrowRight size={14} className="ml-auto text-gray-600 group-hover:text-[#00D4FF] transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Right — WhatsApp form */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                      <MessageSquare size={20} className="text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Contact Wayne DEV</h3>
                      <p className="text-gray-500 text-xs">Your message will open in WhatsApp</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1.5">Your Name</label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-[#00D4FF]/60 focus:outline-none focus:ring-1 focus:ring-[#00D4FF]/30 transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1.5">Email Address</label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-[#00D4FF]/60 focus:outline-none focus:ring-1 focus:ring-[#00D4FF]/30 transition-all text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1.5">Message</label>
                      <textarea
                        placeholder="Tell me about your project or just say hello..."
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-[#00D4FF]/60 focus:outline-none focus:ring-1 focus:ring-[#00D4FF]/30 transition-all resize-none text-sm"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      disabled={sending}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:shadow-[0_0_24px_rgba(34,197,94,0.35)] transition-shadow disabled:opacity-60"
                    >
                      {sending ? (
                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full" />
                      ) : (
                        <MessageSquare size={16} />
                      )}
                      {sending ? 'Opening WhatsApp...' : 'Send via WhatsApp'}
                    </motion.button>
                    <p className="text-center text-gray-600 text-xs">
                      This will open WhatsApp with your message pre-filled
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-600 text-sm">
          <span className="font-mono gradient-text font-bold">WP</span>
          <span>© {new Date().getFullYear()} Wayne Popi. All rights reserved.</span>
          <div className="flex gap-4">
            {[{ icon: Github, href: 'https://github.com/waynepopi' }, { icon: Linkedin, href: 'https://linkedin.com/in/waynepopi' }, { icon: Mail, href: 'mailto:waynepopy@gmail.com' }].map(s => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-[#00D4FF] transition-colors">
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
