import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 relative bg-tech-black">
             {/* Decor */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-neon-green/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Crafting digital experiences <br />
                            <span className="text-neon-green">that matter.</span>
                        </h2>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            I'm an Information Systems undergraduate at UCSC with a strong IT background. I've demonstrated leadership as Captain of the Wrestling Team and have a proven track record in hackathons.
                        </p>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                             My expertise spans the entire frontend and backend ecosystem, from React and Next.js to Cloud Native technologies like Kubernetes and Docker. I'm committed to continuous learning and solving complex problems.
                        </p>
                        
                        <div className="grid grid-cols-3 gap-6">
                            <div>
                                <h4 className="text-2xl font-bold text-white mb-1">3.47</h4>
                                <p className="text-sm text-gray-500">CGPA (Reading)</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-white mb-1">Dean's</h4>
                                <p className="text-sm text-gray-500">List Awardee</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                         <div className="relative z-10 p-8 rounded-2xl bg-tech-gray border border-white/10 overflow-hidden group hover:border-neon-green/30 transition-colors">
                            <div className="absolute top-0 right-0 p-4 opacity-50">
                                <span className="text-6xl font-mono font-bold text-white/5 group-hover:text-neon-green/10 transition-colors">01</span>
                            </div>
                            
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-neon-green"></span>
                                Expertise
                            </h3>
                            <ul className="space-y-4 text-gray-400">
                                <li className="flex items-start gap-3">
                                    <span className="text-neon-green mt-1">▹</span>
                                    <span>Full Stack Development (React, Node, Java Spring).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-neon-green mt-1">▹</span>
                                    <span>Cloud & DevOps (Docker, K8s, Azure, GitOps).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-neon-green mt-1">▹</span>
                                    <span>Mobile App Development (React Native, Android).</span>
                                </li>
                            </ul>
                        </div>
                        
                         {/* Background Accent */}
                        <div className="absolute -bottom-4 -right-4 w-full h-full border border-white/5 rounded-2xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
