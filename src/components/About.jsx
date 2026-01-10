import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 relative bg-tech-black">
             {/* Decor */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-neon-green/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-12 items-center">
                    {/* Profile Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative group">
                            {/* Decorative frame */}
                            <div className="absolute -inset-4 border border-neon-green/20 rounded-2xl -z-10 group-hover:scale-105 transition-transform duration-500"></div>
                            <div className="absolute inset-0 bg-neon-green/10 rounded-2xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative z-10">
                                <img 
                                    src="/profile.jpg" 
                                    alt="Wasfan Wazeem" 
                                    className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                                />
                            </div>
                            
                            {/* Status badge */}
                            <div className="absolute -bottom-4 -right-4 bg-tech-gray border border-white/10 px-4 py-2 rounded-lg shadow-xl z-20 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
                                <span className="text-xs font-mono text-white">Software Engineer</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bio Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Crafting digital experiences <br />
                            <span className="text-neon-green">that matter.</span>
                        </h2>
                        
                        {/* Mobile Profile Photo (Visible only on small screens) */}
                        <div className="lg:hidden mb-8 max-w-[200px] mx-auto">
                            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                <img src="/profile.jpg" alt="Wasfan Wazeem" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        <p className="text-gray-400 mb-6 leading-relaxed">
                            I am <span className="text-white font-semibold">Wasfan Wazeem</span>, an Information Systems undergraduate at the University of Colombo School of Computing (UCSC), specializing in the intersection of business logic and modern software engineering.
                        </p>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            A double University Colours awardee (2023 & 2024) and Captain of the University Wrestling Team, I leverage a disciplined mindset to lead technical initiatives and solve complex challenges with excellence.
                        </p>
                        
                        <div className="grid grid-cols-3 gap-6">
                            <div>
                                <h4 className="text-2xl font-bold text-white mb-1">3.47</h4>
                                <p className="text-sm text-gray-500">Current CGPA</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-white mb-1">Dean's</h4>
                                <p className="text-sm text-gray-500">List Honors</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-white mb-1">Colours</h4>
                                <p className="text-sm text-gray-500">2023/24</p>
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
                                    <motion.span 
                                        animate={{ opacity: [0.4, 1, 0.4] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                                        className="text-neon-green mt-1 drop-shadow-[0_0_5px_rgba(0,255,65,0.5)]"
                                    >
                                        ▹
                                    </motion.span>
                                    <span><strong>Full Stack Development</strong> – Building scalable web applications with React.js, Next.js, Node.js, Spring Boot, and CMS platforms (WordPress, Sanity).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <motion.span 
                                        animate={{ opacity: [0.4, 1, 0.4] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                                        className="text-neon-green mt-1 drop-shadow-[0_0_5px_rgba(0,255,65,0.5)]"
                                    >
                                        ▹
                                    </motion.span>
                                    <span><strong>Mobile Development</strong> – Engineering cross-platform apps with React Native and native Android (Kotlin) for high-performance user experiences.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <motion.span 
                                        animate={{ opacity: [0.4, 1, 0.4] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                                        className="text-neon-green mt-1 drop-shadow-[0_0_5px_rgba(0,255,65,0.5)]"
                                    >
                                        ▹
                                    </motion.span>
                                    <span><strong>Cloud & DevOps</strong> – Specialized in Docker, Kubernetes, Argo Workflows, and CI/CD pipelines for automated deployments and GitOps practices.</span>
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
