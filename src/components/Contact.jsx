import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:mwasfan3@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoLink;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

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
                            Interested in hiring a Software Engineer? Let's discuss how I can contribute to your team and build scalable solutions together.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:border-neon-green/30 transition-colors">
                                    <Mail className="w-6 h-6 text-neon-green" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-mono text-gray-500 mb-1">Email</h4>
                                    <a href="mailto:mwasfan3@gmail.com" className="text-lg font-bold hover:text-neon-green transition-colors">mwasfan3@gmail.com</a>
                                </div>
                            </div>
                            
                             <div className="flex items-center gap-4 group">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:border-neon-green/30 transition-colors">
                                    <Phone className="w-6 h-6 text-neon-green" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-mono text-gray-500 mb-1">Phone</h4>
                                    <a href="tel:+94775713000" className="text-lg font-bold hover:text-neon-green transition-colors">+94 77 571 3000</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:border-neon-green/30 transition-colors">
                                    <MapPin className="w-6 h-6 text-neon-green" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-mono text-gray-500 mb-1">Location</h4>
                                    <p className="text-lg font-bold">Colombo, Sri Lanka</p>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <a href="https://github.com/Wasfan-Wazeem" className="p-3 bg-white/5 rounded-lg hover:bg-neon-green hover:text-black transition-all border border-white/10 group">
                                    <span className="sr-only">GitHub</span>
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="https://www.linkedin.com/in/wasfan-wazeem" className="p-3 bg-white/5 rounded-lg hover:bg-neon-green hover:text-black transition-all border border-white/10 group">
                                    <span className="sr-only">LinkedIn</span>
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                         initial={{ opacity: 0, x: 20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         className="p-8 rounded-2xl bg-tech-gray border border-white/10"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-mono text-gray-400">Name</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-tech-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-green transition-colors" 
                                        placeholder="John Doe" 
                                        required
                                    />
                                </div>
                                 <div className="space-y-2">
                                    <label className="text-sm font-mono text-gray-400">Email</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-tech-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-green transition-colors" 
                                        placeholder="john@example.com" 
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm font-mono text-gray-400">Subject</label>
                                <input 
                                    type="text" 
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-tech-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-green transition-colors" 
                                    placeholder="Hiring Inquiry / Project Proposal" 
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-mono text-gray-400">Message</label>
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full h-32 bg-tech-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-green transition-colors resize-none" 
                                    placeholder="Hi Wasfan, I'd like to discuss a potential opportunity..."
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full py-4 bg-neon-green text-black font-bold rounded-lg hover:bg-green-400 transition-colors flex items-center justify-center gap-2">
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
