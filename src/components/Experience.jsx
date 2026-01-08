import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'WSO2 LLC, Sri Lanka',
    role: 'Software Engineer Intern',
    period: 'Nov 2024 - Apr 2025',
    description: 'Contributed to Choreo R&D, enabling Mobile CI/CD for Android. Designed new mobile app component, implemented automated builds using Argo Workflows, Docker, and Azure Blob Storage.',
    skills: ['React', 'Go', 'Ballerina', 'Kubernetes', 'Docker']
  },
  {
    company: 'Legacy Health LLC, Sri Lanka',
    role: 'Executive Operations',
    period: 'Nov 2020 - Feb 2022',
    description: 'Managed executive operations and coordinated cross-functional teams to ensure optimized workflows and operational efficiency.',
    skills: ['Operations', 'Team Leadership', 'Management']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neon-green text-sm font-mono mb-4">
                    <Briefcase className="w-4 h-4" />
                    Career Path
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                    Work Experience
                </h2>
            </motion.div>

            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative grid md:grid-cols-2 gap-8 items-center"
                        >
                            {/* Dot on Timeline */}
                            <div className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-tech-black border-2 border-neon-green rounded-full -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(0,255,65,0.5)]" />

                            {/* Content Side */}
                            <div className={`${index % 2 === 0 ? 'md:order-1 md:text-right' : 'md:order-2 md:pl-8'} pl-12 md:pl-0`}>
                                <div className="p-6 rounded-2xl bg-tech-gray/50 border border-white/5 hover:border-white/10 transition-colors group">
                                    <h3 className="text-xl font-bold text-white group-hover:text-neon-green transition-colors">{exp.role}</h3>
                                    <h4 className="text-neon-green/80 font-mono text-sm mb-4">{exp.company}</h4>
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                        {exp.description}
                                    </p>
                                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                        {exp.skills.map(skill => (
                                            <span key={skill} className="px-2 py-1 text-xs font-mono rounded bg-white/5 border border-white/10 text-gray-400">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Date Side */}
                            <div className={`${index % 2 === 0 ? 'md:order-2 md:pl-8' : 'md:order-1 md:text-right'} pl-12 md:pl-0`}>
                                <div className="inline-flex items-center gap-2 text-gray-500 font-mono text-sm bg-tech-black px-3 py-1 rounded border border-white/5">
                                    <Calendar className="w-4 h-4" />
                                    {exp.period}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Experience;
