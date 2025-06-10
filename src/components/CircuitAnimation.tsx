
const CircuitAnimation = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Horizontal Circuit Lines - positioned to avoid text areas */}
      <div className="absolute top-20 left-0 w-full h-0.5 circuit-line opacity-30"></div>
      <div className="absolute top-40 right-0 w-2/3 h-0.5 circuit-line opacity-20" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-0 w-3/4 h-0.5 circuit-line opacity-25" style={{ animationDelay: '2s' }}></div>
      
      {/* Vertical Circuit Lines - positioned at edges */}
      <div className="absolute left-10 top-0 w-0.5 h-full circuit-line rotate-90 opacity-20" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute right-20 top-0 w-0.5 h-full circuit-line rotate-90 opacity-15" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Circuit Nodes - positioned away from text */}
      <div className="absolute top-32 right-16 w-2 h-2 bg-electric-blue rounded-full animate-pulse-glow opacity-40"></div>
      <div className="absolute bottom-40 left-16 w-2 h-2 bg-electric-purple rounded-full animate-pulse-glow opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-32 w-2 h-2 bg-electric-pink rounded-full animate-pulse-glow opacity-40" style={{ animationDelay: '2s' }}></div>
      
      {/* Corner decorative elements */}
      <div className="absolute top-24 right-8 w-1 h-1 bg-neon-cyan rounded-full animate-pulse opacity-60" style={{ animationDelay: '0.8s' }}></div>
      <div className="absolute bottom-24 left-8 w-1 h-1 bg-neon-lime rounded-full animate-pulse opacity-60" style={{ animationDelay: '1.8s' }}></div>
    </div>
  );
};

export default CircuitAnimation;
