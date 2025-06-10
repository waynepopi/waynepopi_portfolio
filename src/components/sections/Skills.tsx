
import { Code2, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Globe className="text-electric-blue" size={24} />,
      skills: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'HTML5/CSS3'],
      color: 'electric-blue'
    },
    {
      title: 'Backend Development',
      icon: <Server className="text-electric-purple" size={24} />,
      skills: ['Node.js', 'Python', 'Express.js', 'Django', 'RESTful APIs', 'GraphQL'],
      color: 'electric-purple'
    },
    {
      title: 'Database Management',
      icon: <Database className="text-electric-pink" size={24} />,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'Supabase'],
      color: 'electric-pink'
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="text-neon-cyan" size={24} />,
      skills: ['React Native', 'Flutter', 'Progressive Web Apps', 'iOS', 'Android'],
      color: 'neon-cyan'
    },
    {
      title: 'DevOps & Tools',
      icon: <Code2 className="text-neon-lime" size={24} />,
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux', 'Nginx'],
      color: 'neon-lime'
    },
    {
      title: 'Design & UX',
      icon: <Palette className="text-electric-orange" size={24} />,
      skills: ['Figma', 'Adobe XD', 'UI/UX Design', 'Responsive Design', 'Accessibility'],
      color: 'electric-orange'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">My Skills</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-electric-blue/30 transition-all duration-300 hover:scale-105 animate-fade-in-up glow-border"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between p-2 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors"
                  >
                    <span className="text-gray-300">{skill}</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < 4 ? `bg-${category.color}` : 'bg-gray-600'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tech Stack */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <h3 className="text-2xl font-bold text-electric-blue mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'MongoDB', 
              'PostgreSQL', 'AWS', 'Docker', 'Git', 'Redux', 'GraphQL'
            ].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-electric-blue/20 to-electric-purple/20 border border-electric-blue/30 rounded-full text-gray-300 hover:text-white hover:scale-105 transition-all duration-300 font-mono text-sm"
                style={{ animationDelay: `${1.4 + index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
