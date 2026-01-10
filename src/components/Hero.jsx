import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ExternalLink, Code2, Cpu, Database, Smartphone, Globe, Layers, Terminal, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

// Custom typing animation hook
const useTypingAnimation = (words, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2500) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return currentText;
};

const Hero = () => {
  const roles = [
    'Software Engineer',
    'Full Stack Developer',
    'Mobile Engineer'
  ];
  
  const typedRole = useTypingAnimation(roles);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-10 md:pt-0">
      {/* Glow Effects */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-neon-green/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neon-green text-sm font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
            Available for Freelance Work
          </div>
          
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Hi, I'm <span className="text-neon-green">Wasfan Wazeem.</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-blue-500">
              {typedRole}
            </span>
            <span className="animate-pulse text-neon-green">|</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            Software Engineer specializing in high-performance web and mobile ecosystems, delivering scalable digital solutions with a disciplined mindset.
          </p>

          <div className="flex flex-wrap gap-4">
            <MagneticButton>
              <a href="#projects" className="group px-8 py-4 bg-neon-green text-black font-bold rounded-lg hover:bg-green-400 transition-all flex items-center gap-2">
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="/Wasfan_Wazeem.pdf" className="px-8 py-4 bg-transparent border border-white/20 hover:border-white/50 text-white rounded-lg transition-all flex items-center gap-2">
                Download CV
                <Download className="w-4 h-4" />
              </a>
            </MagneticButton>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-6">
            {[
              { label: 'Technical Expertise', value: '3+' },
              { label: 'Major Projects', value: '5+' },
              { label: 'University Colours', value: '2023/24' },
              // { label: 'Hackathons', value: '10+' },
            ].map((stat, index) => (
              <div key={index}>
                <h4 className="text-3xl font-bold text-white mb-1">{stat.value}</h4>
                <p className="text-gray-500 text-sm font-mono">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Content - Abstract Tech Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-neon-green/20 to-blue-500/20 rounded-2xl rotate-6 blur-2xl"></div>
                
                {/* Animated Border Container */}
                <div className="relative h-full rounded-2xl overflow-hidden p-[1px]">
                    {/* Running Border Animation */}
                    <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] animate-[spin_4s_linear_infinite] opacity-50"></div>
                    
                    {/* Main Card */}
                    <div className="relative h-full bg-tech-gray rounded-2xl p-6 shadow-2xl overflow-hidden backdrop-blur-sm border border-white/10">
                        {/* Code Editor Look */}
                        <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        
                        <div className="font-mono text-sm space-y-3">
                            <div className="flex gap-4">
                                <span className="text-gray-600 select-none">01</span>
                                <div>
                                    <span className="text-purple-400">const</span> <span className="text-blue-400">Developer</span> <span className="text-white">=</span> <span className="text-yellow-300">{'{'}</span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-gray-600 select-none">02</span>
                                <div className="pl-4">
                                    <span className="text-white">name:</span> <span className="text-green-400">'Wasfan Wazeem'</span><span className="text-white">,</span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-gray-600 select-none">03</span>
                                <div className="pl-4">
                                    <span className="text-white">role:</span> <span className="text-green-400">'Software Engineer'</span><span className="text-white">,</span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-gray-600 select-none">04</span>
                                <div className="pl-4">
                                    <span className="text-white">skills:</span> <span className="text-yellow-300">['React.js', 'Node.js', 'Android']</span><span className="text-white">,</span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-gray-600 select-none">05</span>
                                <div className="pl-4">
                                    <span className="text-white">hardWorker:</span> <span className="text-orange-400">true</span><span className="text-white">,</span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-gray-600 select-none">06</span>
                                <div className="pl-4">
                                    <span className="text-white">problemSolver:</span> <span className="text-orange-400">true</span><span className="text-white">,</span>
                                </div>
                            </div>
                             <div className="flex gap-4">
                                <span className="text-gray-600 select-none">07</span>
                                <div className="pl-4">
                                    <span className="text-white">hireable:</span> <span className="text-purple-400">function</span><span className="text-white">() {'{'}</span>
                                </div>
                            </div>
                             <div className="flex gap-4">
                                <span className="text-gray-600 select-none">08</span>
                                <div className="pl-8">
                                    <span className="text-purple-400">return</span> <span className="text-green-400">true</span><span className="text-white">;</span>
                                </div>
                            </div>
                             <div className="flex gap-4">
                                <span className="text-gray-600 select-none">09</span>
                                <div className="pl-4">
                                    <span className="text-white">{'}'}</span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-gray-600 select-none">10</span>
                                <span className="text-yellow-300">{'}'}</span>
                            </div>
                        </div>

                         <div className="absolute bottom-6 right-6 flex items-center gap-2 px-3 py-1.5 bg-tech-black rounded-md border border-white/10 shadow-lg">
                            <div className="w-6 h-6 rounded bg-green-600 flex items-center justify-center font-bold text-xs text-white">R</div>
                            <div className="text-xs">
                                <div className="text-gray-400 text-[10px]">Component</div>
                                <div className="font-bold text-white">Hero.jsx</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
