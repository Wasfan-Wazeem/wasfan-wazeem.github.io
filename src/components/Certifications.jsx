import React from 'react';
import { motion } from 'framer-motion';
import { Award, BadgeCheck } from 'lucide-react';

const certifications = [
    {
        name: 'AWS Fundamental Specialization',
        issuer: 'Coursera',
        date: '2024'
    },
    {
        name: 'Meta – React Native Specialization',
        issuer: 'Coursera',
        date: '2024'
    },
    {
        name: 'Meta – React Basics',
        issuer: 'Coursera',
        date: '2023'
    },
    {
        name: 'Meta – Introduction to Mobile Development',
        issuer: 'Coursera',
        date: '2023'
    },
    {
        name: 'Docker for absolute beginners',
        issuer: 'Coursera',
        date: '2024'
    },
    {
        name: 'Postman API Fundamentals Student Expert',
        issuer: 'Postman Academy',
        date: '2024'
    },
    {
        name: 'Spring Boot for Beginners',
        issuer: 'Amigoscode',
        date: '2024'
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neon-green text-sm font-mono mb-4">
                        <Award className="w-4 h-4" />
                        Continuous Learning
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold">Certifications</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-2xl bg-tech-gray border border-white/5 hover:border-neon-green/30 transition-all group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-green-500/10 text-neon-green group-hover:bg-neon-green group-hover:text-black transition-colors">
                                    <BadgeCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-neon-green transition-colors">
                                        {cert.name}
                                    </h3>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-400">{cert.issuer}</span>
                                        {/* <span className="text-gray-600 font-mono text-xs">{cert.date}</span> */}
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

export default Certifications;
