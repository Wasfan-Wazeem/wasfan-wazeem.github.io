import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
             {/* Glow */}
             <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-green/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                         <h2 className="text-4xl font-bold mb-6">
                            Let's Work Together
                        </h2>
                        <p className="text-gray-400 mb-12">
                            Have a project in mind? Looking to hire a React developer? Let's discuss how we can bring your ideas to life.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:border-neon-green/30 transition-colors">
                                    <Mail className="w-6 h-6 text-neon-green" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-mono text-gray-500 mb-1">Email</h4>
                                    <a href="mailto:alex@example.com" className="text-lg font-bold hover:text-neon-green transition-colors">alex@example.com</a>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-4 group">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:border-neon-green/30 transition-colors">
                                    <MapPin className="w-6 h-6 text-neon-green" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-mono text-gray-500 mb-1">Location</h4>
                                    <p className="text-lg font-bold">San Francisco, CA</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                         initial={{ opacity: 0, x: 20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         className="p-8 rounded-2xl bg-tech-gray border border-white/10"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-mono text-gray-400">Name</label>
                                    <input type="text" className="w-full bg-tech-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-green transition-colors" placeholder="John Doe" />
                                </div>
                                 <div className="space-y-2">
                                    <label className="text-sm font-mono text-gray-400">Email</label>
                                    <input type="email" className="w-full bg-tech-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-green transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm font-mono text-gray-400">Subject</label>
                                <input type="text" className="w-full bg-tech-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-green transition-colors" placeholder="Project Inquiry" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-mono text-gray-400">Message</label>
                                <textarea className="w-full h-32 bg-tech-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-green transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
                            </div>

                            <button className="w-full py-4 bg-neon-green text-black font-bold rounded-lg hover:bg-green-400 transition-colors flex items-center justify-center gap-2">
                                Send Message
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
