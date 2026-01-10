import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Trophy, Medal, Star } from 'lucide-react';

const educationData = [
    {
        school: 'University of Colombo School of Computing',
        degree: 'B.Sc (Hons) – Information Systems',
        period: 'May 2022 – Present',
        description: 'Reading for Honors Degree in Information Systems.',
        features: [
           { label: 'CGPA', value: '3.474 (Reading)' },
           { label: 'Award', value: "Dean's List (2nd Year 1st Sem)" },
        ],
        achievements: [
            'Captain of University Wrestling Team (2024)',
            'Led team to Championship (9 medals, 5 Golds)',
            'University Colours Awarded (2023 & 2024)',
            'Silver Medalist - Inter-University Wrestling 2024',
            'Bronze Medalist - SLUG Wrestling 2023'
        ],
        logo: '/logos/ucsc.png',
        color: 'text-neon-green'
    },
    {
        school: 'BCS, The Chartered Institute for IT (UK)',
        degree: 'Professional Graduate Diploma in IT (Reading)',
        period: '2021 – Present',
        description: 'Higher Education Qualification (HEQ) in Computer Software Engineering.',
        features: [
            { label: 'Level', value: 'Post Graduate Diploma (Reading)' },
            { label: 'Status', value: 'Diploma Compl. (UK NQF Lvl 5)' },
        ],
        details: [
            {
                title: 'Diploma in IT (UK NQF Level 5)',
                subjects: ['Software Engineering 1', 'Object Oriented Programming', 'Web Application Development', 'Professional Issues in IS Practice']
            },
            {
                title: 'Certificate in IT (UK NQF Level 4)',
                subjects: ['Information Systems', 'Software Development', 'Computer & Network Technology']
            }
        ],
        logo: '/logos/bcs.png',
        color: 'text-blue-400'
    },
    {
        school: "St. Thomas' College, Matale",
        degree: 'GCE Advanced Level – Mathematics Stream',
        period: '2018 – 2020',
        description: 'Successfully completed secondary education with a focus on Mathematics.',
        features: [],
        logo: '/logos/stc_matale.png',
        color: 'text-purple-400'
    }
];

const Education = () => {
    return (
        <section id="education" className="py-24 relative overflow-hidden">
             {/* Background Elements */}
             <div className="absolute top-1/4 left-0 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl -translate-x-1/2"></div>
             <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl translate-x-1/2"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neon-green text-sm font-mono mb-4">
                        <GraduationCap className="w-4 h-4" />
                        Academic Journey
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold">Education & Contribution</h2>
                </motion.div>

                <div className="space-y-12">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Timeline Line */}
                            <div className="absolute left-[28px] top-0 bottom-0 w-px bg-white/10" />
                            
                            <div className={`flex flex-col md:flex-row gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                
                                {/* Icon Marker */}
                                <div className="flex flex-col items-center justify-start min-w-[56px] absolute left-0 top-0 md:relative md:left-auto md:top-auto z-10">
                                    <motion.div 
                                        animate={{ 
                                            boxShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 15px rgba(255,255,255,0.2)", "0 0 0px rgba(255,255,255,0)"]
                                        }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-14 h-14 rounded-xl p-1.5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden bg-tech-black border border-white/5"
                                    >
                                        <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain" />
                                    </motion.div>
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 pl-20 md:pl-0">
                                    <div className="p-8 rounded-2xl bg-tech-gray/50 border border-white/5 hover:border-white/10 transition-all group backdrop-blur-sm">
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-green transition-colors">
                                                    {edu.school}
                                                </h3>
                                                <p className={`text-lg font-mono ${edu.color} mb-1`}>{edu.degree}</p>
                                                <p className="text-sm text-gray-500 font-mono">{edu.period}</p>
                                            </div>
                                            
                                            {/* Quick Stats */}
                                            {edu.features.length > 0 && (
                                                <div className="flex flex-wrap gap-2 md:max-w-xs md:justify-end">
                                                    {edu.features.map((feat, i) => (
                                                        <span key={i} className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-gray-300 font-mono whitespace-nowrap">
                                                            <span className="text-gray-500 mr-1">{feat.label}:</span>
                                                            {feat.value}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Description */}
                                        {edu.description && (
                                            <p className="text-gray-400 mb-6 leading-relaxed">
                                                {edu.description}
                                            </p>
                                        )}

                                        {/* Achievements Section (UCSC) */}
                                        {edu.achievements && (
                                            <div className="mb-6 bg-gradient-to-r from-neon-green/5 to-transparent p-4 rounded-xl border-l-2 border-neon-green">
                                                <h4 className="flex items-center gap-2 font-bold text-white mb-3">
                                                    <Trophy className="w-4 h-4 text-neon-green" />
                                                    Leadership & Achievements
                                                </h4>
                                                <ul className="space-y-2">
                                                    {edu.achievements.map((ach, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                                    <motion.div
                                                        animate={{ 
                                                            scale: [1, 1.2, 1],
                                                            rotate: [0, 5, -5, 0]
                                                        }}
                                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                                                    >
                                                        <Medal className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                                                    </motion.div>
                                                            {ach}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Course Details Section (BCS) */}
                                        {edu.details && (
                                            <div className="space-y-4">
                                                {edu.details.map((detail, i) => (
                                                    <div key={i}>
                                                        <h4 className="flex items-center gap-2 font-bold text-gray-200 mb-2 text-sm">
                                                            <motion.div 
                                                                animate={{ 
                                                                    scale: [1, 1.5, 1],
                                                                    opacity: [0.5, 1, 0.5]
                                                                }}
                                                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                                                className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.6)]"
                                                            />
                                                            {detail.title}
                                                        </h4>
                                                        <div className="flex flex-wrap gap-2 pl-4">
                                                            {detail.subjects.map((sub, j) => (
                                                                <span key={j} className="px-2 py-1 rounded bg-blue-500/10 text-blue-300 text-xs border border-blue-500/20">
                                                                    {sub}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
