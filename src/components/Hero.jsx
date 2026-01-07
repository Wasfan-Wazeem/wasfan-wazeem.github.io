import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
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
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Building Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-blue-500">Experiences</span> That Matter
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            I'm a Full Stack Developer specializing in building exceptional digital experiences. Currently focused on building accessible, human-centered products.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="group px-8 py-4 bg-neon-green text-black font-bold rounded-lg hover:bg-green-400 transition-all flex items-center gap-2">
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/resume.pdf" className="px-8 py-4 bg-transparent border border-white/20 hover:border-white/50 text-white rounded-lg transition-all flex items-center gap-2">
              Download CV
              <Download className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            {[
              { label: 'Years Experience', value: '5+' },
              { label: 'Projects Done', value: '50+' },
              { label: 'Clients Happy', value: '30+' },
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
                
                {/* Main Card */}
                <div className="relative h-full bg-tech-gray border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden backdrop-blur-sm">
                    {/* Code Editor Look */}
                    <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    
                    <div className="font-mono text-sm space-y-2">
                        <div className="flex gap-4">
                            <span className="text-gray-600">01</span>
                            <span className="text-purple-400">const</span> <span className="text-blue-400">Developer</span> <span className="text-white">=</span> <span className="text-yellow-300">{'{'}</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-gray-600">02</span>
                            <span className="text-white ml-4">name:</span> <span className="text-green-400">'Alex'</span><span className="text-white">,</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-gray-600">03</span>
                            <span className="text-white ml-4">skills:</span> <span className="text-yellow-300">['React', 'Node', 'Next']</span><span className="text-white">,</span>
                        </div>
                         <div className="flex gap-4">
                            <span className="text-gray-600">04</span>
                            <span className="text-white ml-4">hardWorker:</span> <span className="text-purple-400">true</span><span className="text-white">,</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-gray-600">05</span>
                            <span className="text-white ml-4">problemSolver:</span> <span className="text-purple-400">true</span><span className="text-white">,</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-gray-600">06</span>
                            <span className="text-white ml-4">hireable:</span> <span className="text-purple-400">function</span><span className="text-yellow-300">()</span> <span className="text-yellow-300">{'{'}</span>
                        </div>
                         <div className="flex gap-4">
                            <span className="text-gray-600">07</span>
                            <span className="text-purple-400 ml-8">return</span> <span className="text-green-400">true</span><span className="text-white">;</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-gray-600">08</span>
                            <span className="text-white ml-4">{'}'}</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-gray-600">09</span>
                            <span className="text-yellow-300">{'}'}</span>
                        </div>
                    </div>

                    {/* Draggable/Interactive Elements Decoration */}
                    <div className="absolute bottom-6 right-6 p-4 bg-tech-black border border-white/10 rounded-lg shadow-lg">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-neon-green/20 flex items-center justify-center text-neon-green font-bold">R</div>
                            <div>
                                <div className="text-xs text-gray-400">Component</div>
                                <div className="text-sm font-bold">Hero.tsx</div>
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
