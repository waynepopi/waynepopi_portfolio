import { useState } from 'react';
import NewHome from '@/components/sections/NewHome';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import CircuitAnimation from '@/components/CircuitAnimation';
import Navigation from '@/components/NewNavigation';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <NewHome />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <NewHome />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Tech Background */}
      <div className="fixed inset-0 tech-bg opacity-10 z-0"></div>
      
      {/* Circuit Animation */}
      <CircuitAnimation />
      
      {/* Navigation */}
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Main Content */}
      <main className="relative z-10">
        {renderSection()}
      </main>
    </div>
  );
};

export default Portfolio;
