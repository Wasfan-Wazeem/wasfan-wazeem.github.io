import React from 'react';
import { motion } from 'framer-motion';

const techs = [
  { name: 'React', color: 'text-blue-400', border: 'border-blue-400/30', bg: 'bg-blue-400/10' },
  { name: 'TypeScript', color: 'text-blue-600', border: 'border-blue-600/30', bg: 'bg-blue-600/10' },
  { name: 'Tailwind CSS', color: 'text-cyan-400', border: 'border-cyan-400/30', bg: 'bg-cyan-400/10' },
  { name: 'Node.js', color: 'text-green-500', border: 'border-green-500/30', bg: 'bg-green-500/10' },
  { name: 'Next.js', color: 'text-white', border: 'border-white/30', bg: 'bg-white/10' },
  { name: 'PostgreSQL', color: 'text-blue-300', border: 'border-blue-300/30', bg: 'bg-blue-300/10' },
  { name: 'Framer Motion', color: 'text-purple-400', border: 'border-purple-400/30', bg: 'bg-purple-400/10' },
  { name: 'Git', color: 'text-orange-500', border: 'border-orange-500/30', bg: 'bg-orange-500/10' },
];

const TechStack = () => {
  return (
    <section className="py-20 border-t border-white/5 bg-tech-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
            <h2 className="text-3xl font-bold mb-4 font-mono w-fit mx-auto px-4 py-1 rounded bg-gradient-to-r from-neon-green/10 to-transparent border-l-4 border-neon-green">
                Tech Stack & Expertise
            </h2>
            <p className="text-gray-400 text-sm mb-12">Technologies I work with to build amazing products</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
            {techs.map((tech, index) => (
                <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`px-6 py-3 rounded-xl border ${tech.border} ${tech.bg} backdrop-blur-md transition-all duration-300 cursor-default`}
                >
                    <span className={`font-semibold ${tech.color}`}>{tech.name}</span>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
