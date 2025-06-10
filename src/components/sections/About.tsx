import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, GraduationCap, Award, Users, Globe, Heart, Zap } from 'lucide-react';

const About: React.FC = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Introduction Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.span 
              className="text-electric-blue text-sm font-mono tracking-wider"
              variants={item}
            >
              ABOUT ME
            </motion.span>
            <motion.h2 
              className="text-4xl font-bold text-white mt-2 mb-4"
              variants={item}
            >
              Get to <span className="gradient-text">Know Me</span>
            </motion.h2>
            <motion.div 
              className="w-16 h-1 bg-gradient-to-r from-electric-blue to-electric-purple mx-auto mb-6"
              variants={item}
            />
            <motion.p 
              className="text-lg text-gray-300 max-w-3xl mx-auto"
              variants={item}
            >
              I'm a passionate software engineer dedicated to creating innovative solutions and pushing the boundaries of what's possible in web development.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={item}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Briefcase className="text-electric-blue" size={24} />
                Work Experience
              </h3>
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-electric-blue/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-electric-blue rounded-full"></div>
                  <h4 className="text-xl font-semibold text-white mb-2">Web App Designer</h4>
                  <p className="text-gray-400">Gamers Private Limited Company, Chipinge</p>
                  <p className="text-gray-400">October 2024 - February 2025</p>
                  <p className="text-gray-300 mt-2">Developed and collaborated with the team to create tournament and fixtures applications, focusing on user experience and functionality.</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={item}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <GraduationCap className="text-electric-pink" size={24} />
                Education
              </h3>
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-electric-pink/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-electric-pink rounded-full"></div>
                  <h4 className="text-xl font-semibold text-white mb-2">Software Engineering</h4>
                  <p className="text-gray-400">Bindura University of Science Education</p>
                  <p className="text-gray-400">2022 - 2027</p>
                  <p className="text-gray-300 mt-2">Currently pursuing a degree in Software Engineering, focusing on modern development practices and technologies.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl font-bold text-white mb-4"
              variants={item}
            >
              My <span className="gradient-text">Values</span>
            </motion.h2>
            <motion.div 
              className="w-16 h-1 bg-gradient-to-r from-electric-blue to-electric-purple mx-auto mb-6"
              variants={item}
            />
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50"
              variants={item}
            >
              <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-electric-blue" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
              <p className="text-gray-400">Constantly exploring new technologies and approaches to solve complex problems.</p>
            </motion.div>
            
            <motion.div 
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50"
              variants={item}
            >
              <div className="w-12 h-12 bg-electric-purple/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-electric-purple" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Collaboration</h3>
              <p className="text-gray-400">Working together to achieve common goals and create better solutions.</p>
            </motion.div>
            
            <motion.div 
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50"
              variants={item}
            >
              <div className="w-12 h-12 bg-electric-pink/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-electric-pink" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Passion</h3>
              <p className="text-gray-400">Dedicated to creating meaningful and impactful solutions.</p>
            </motion.div>
            
            <motion.div 
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50"
              variants={item}
            >
              <div className="w-12 h-12 bg-neon-cyan/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-neon-cyan" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
              <p className="text-gray-400">Striving for the highest quality in everything I do.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={item}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Globe className="text-electric-blue" size={24} />
                Global Impact
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I believe in using technology to make a positive impact on the world. Through my work, I aim to create solutions that help people and organizations achieve their goals.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
                  <h4 className="text-2xl font-bold text-white mb-2">5+</h4>
                  <p className="text-gray-400">Open Source Projects</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
                  <h4 className="text-2xl font-bold text-white mb-2">100+</h4>
                  <p className="text-gray-400">Contributions</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={item}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="text-electric-purple" size={24} />
                Achievements
              </h3>
              <div className="space-y-4">
                <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50">
                  <h4 className="text-lg font-semibold text-white mb-2">Best Developer Award</h4>
                  <p className="text-gray-400">Recognized for outstanding contributions to open source projects</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50">
                  <h4 className="text-lg font-semibold text-white mb-2">Hackathon Winner</h4>
                  <p className="text-gray-400">First place in the annual tech innovation challenge</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50">
                  <h4 className="text-lg font-semibold text-white mb-2">Community Leader</h4>
                  <p className="text-gray-400">Leading tech workshops and mentoring programs</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
