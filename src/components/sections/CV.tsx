
import { Download, Eye, Calendar, Award, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CV = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Lead full-stack development projects, mentor junior developers, and architect scalable solutions.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS']
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Agency Ltd.',
      period: '2021 - 2022',
      description: 'Developed and maintained multiple client projects, improved application performance by 40%.',
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Docker']
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      period: '2020 - 2021',
      description: 'Built responsive web applications, collaborated with UX/UI designers to implement pixel-perfect designs.',
      technologies: ['React', 'TypeScript', 'Sass', 'Jest']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University of Technology',
      period: '2017 - 2020',
      description: 'Specialized in Software Engineering and Database Systems. Graduated with First Class Honors.'
    },
    {
      degree: 'Advanced Certificate in Web Development',
      institution: 'Code Institute',
      period: '2019',
      description: 'Comprehensive program covering modern web technologies and best practices.'
    }
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional Developer',
    'MongoDB Certified Developer',
    'Scrum Master Certification',
    'React Advanced Patterns Certificate'
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">My CV</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Professional experience, education, and certifications
          </p>
          
          {/* CV Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-8 py-3 bg-gradient-to-r from-electric-blue to-electric-purple hover:from-electric-blue/80 hover:to-electric-purple/80 text-white font-semibold">
              <Download size={20} className="mr-2" />
              Download CV
            </Button>
            <Button 
              variant="outline"
              className="px-8 py-3 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white"
            >
              <Eye size={20} className="mr-2" />
              View Online
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8 animate-slide-in-left">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold text-electric-blue mb-6 flex items-center gap-2">
                <Briefcase size={24} />
                Professional Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-electric-blue/30 transition-all duration-300 glow-border"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                        <p className="text-electric-blue font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400 text-sm">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-md font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-electric-purple mb-6 flex items-center gap-2">
                <GraduationCap size={24} />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-electric-purple/30 transition-all duration-300 glow-border"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                        <p className="text-electric-purple font-medium">{edu.institution}</p>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400 text-sm">
                        <Calendar size={16} />
                        {edu.period}
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-electric-pink mb-6 flex items-center gap-2">
                <Award size={24} />
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 p-4 rounded-xl border border-gray-700/50 hover:border-electric-pink/30 transition-all duration-300 hover:scale-105 glow-border"
                  >
                    <div className="flex items-center gap-3">
                      <Award className="text-electric-pink" size={16} />
                      <span className="text-gray-300">{cert}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Skills Summary */}
            <div>
              <h3 className="text-2xl font-bold text-neon-cyan mb-6">Key Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'JavaScript/TypeScript',
                  'React/Next.js',
                  'Node.js/Express',
                  'Python/Django',
                  'MongoDB/PostgreSQL',
                  'AWS/Cloud Services',
                  'Docker/Kubernetes',
                  'Git/Version Control'
                ].map((skill, index) => (
                  <div
                    key={skill}
                    className="bg-slate-800/50 p-3 rounded-lg border border-gray-700/50 text-center hover:border-neon-cyan/30 transition-all duration-300 hover:scale-105"
                  >
                    <span className="text-gray-300 text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div>
              <h3 className="text-2xl font-bold text-electric-orange mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 p-4 rounded-xl border border-gray-700/50 text-center glow-border">
                  <div className="text-2xl font-bold text-electric-blue mb-1">3+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl border border-gray-700/50 text-center glow-border">
                  <div className="text-2xl font-bold text-electric-purple mb-1">50+</div>
                  <div className="text-gray-400 text-sm">Projects</div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl border border-gray-700/50 text-center glow-border">
                  <div className="text-2xl font-bold text-electric-pink mb-1">15+</div>
                  <div className="text-gray-400 text-sm">Technologies</div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl border border-gray-700/50 text-center glow-border">
                  <div className="text-2xl font-bold text-neon-cyan mb-1">5</div>
                  <div className="text-gray-400 text-sm">Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
