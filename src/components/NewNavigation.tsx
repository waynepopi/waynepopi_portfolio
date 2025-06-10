import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code2, Briefcase, Mail, Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const NewNavigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: <Home size={18} /> },
    { id: 'about', label: 'About', icon: <User size={18} /> },
    { id: 'skills', label: 'Skills', icon: <Code2 size={18} /> },
    { id: 'projects', label: 'Projects', icon: <Briefcase size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={18} /> },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800/50 shadow-xl py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold bg-gradient-to-r from-electric-blue to-electric-purple bg-clip-text text-transparent font-mono">
              WP
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div 
              className="flex items-center space-x-1 bg-slate-800/50 backdrop-blur-sm rounded-full p-1 border border-slate-700/50"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-electric-blue/90 to-electric-purple/90 shadow-lg shadow-electric-blue/20'
                      : 'text-gray-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <span className="text-sm">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a 
                href="https://github.com/waynepopi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-slate-700/50 transition-all duration-300"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/wayne-popi-399129369/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-slate-700/50 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:waynepopy@gmail.com" 
                className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-slate-700/50 transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden z-50"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 bg-slate-900/95 backdrop-blur-sm z-40 pt-20 px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-4 py-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-electric-blue/90 to-electric-purple/90 shadow-lg shadow-electric-blue/20'
                      : 'text-gray-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </motion.button>
              ))}

              {/* Social Links in Mobile Menu */}
              <div className="flex justify-center space-x-4 pt-4 border-t border-slate-800/50">
                <a 
                  href="https://github.com/waynepopi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-slate-700/50 transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/wayne-popi-399129369/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-slate-700/50 transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:waynepopy@gmail.com" 
                  className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-slate-700/50 transition-all duration-300"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            <div className="absolute bottom-8 left-0 right-0 text-center text-sm text-gray-500">
              <p>© {new Date().getFullYear()} Wayne Popi. All rights reserved.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NewNavigation;
