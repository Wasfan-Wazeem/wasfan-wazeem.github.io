import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Brain, ShieldAlert, GitBranch } from 'lucide-react';

const Research = () => {
    return (
        <section id="research" className="py-20 bg-tech-black/50 relative overflow-hidden">
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-mono mb-4">
                        <Microscope className="w-4 h-4" />
                        Academic Research
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Cognitive-Inspired Defense <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            Framework for Federated Learning
                        </span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 space-y-6 text-gray-300 leading-relaxed"
                    >
                        <p className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <span className="text-blue-400 font-bold block mb-2">Abstract</span>
                            Developing an adaptive defense architecture to mitigate model poisoning attacks in Federated Learning. The framework integrates cognitive reasoning loops (OODA and MAPE-K) for proactive anomaly detection and dynamic response mechanisms.
                        </p>
                        
                        <div className="grid sm:grid-cols-2 gap-4">
                             <div className="p-4 rounded-xl bg-tech-gray border border-white/5">
                                <ShieldAlert className="w-8 h-8 text-red-400 mb-3" />
                                <h4 className="font-bold text-white mb-2">Threat Mitigation</h4>
                                <p className="text-sm text-gray-500">Defending against adversarial model poisoning in distributed learning environments.</p>
                             </div>
                             <div className="p-4 rounded-xl bg-tech-gray border border-white/5">
                                <Brain className="w-8 h-8 text-purple-400 mb-3" />
                                <h4 className="font-bold text-white mb-2">Cognitive Loops</h4>
                                <p className="text-sm text-gray-500">Utilizing OODA & MAPE-K loops for autonomous decision making and adaptation.</p>
                             </div>
                        </div>
                    </motion.div>

                    {/* Tech & Tools */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            <GitBranch className="w-5 h-5 text-neon-green" />
                            Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {['Python', 'PyTorch', 'Flower (FL)', 'Docker', 'Cognitive Arch', 'Adversarial ML'].map(tech => (
                                <span key={tech} className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-mono">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        
                        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10">
                            <h4 className="font-bold text-white mb-2">Status</h4>
                            <div className="flex items-center gap-2 text-green-400 font-mono text-sm">
                                <span className="relative flex h-3 w-3">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                Ongoing Research
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Research;
