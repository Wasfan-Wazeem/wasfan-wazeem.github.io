import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Target, Cpu, TrendingUp, CheckCircle2 } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!project) return null;

    const modalContent = (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-tech-gray border border-white/10 rounded-3xl shadow-2xl custom-scrollbar"
                    >
                        {/* Close Button */}
                        <button 
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all z-30"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Top Hero Section */}
                        <div className="relative h-64 md:h-96">
                            <div className="absolute inset-0 bg-gradient-to-t from-tech-gray via-tech-gray/20 to-transparent z-10" />
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-8 left-8 right-8 z-20">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{project.title}</h2>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.slice(0, 4).map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/20 text-neon-green text-xs font-mono">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Details Content */}
                        <div className="p-8 md:p-12 space-y-12">
                            {/* Case Study Sections */}
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-neon-green">
                                        <Target className="w-6 h-6" />
                                        <h3 className="font-bold text-xl uppercase tracking-wider">The Challenge</h3>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed italic">
                                        "{project.challenge}"
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-blue-400">
                                        <Cpu className="w-6 h-6" />
                                        <h3 className="font-bold text-xl uppercase tracking-wider">The Solution</h3>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed">
                                        {project.solution}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-purple-400">
                                        <TrendingUp className="w-6 h-6" />
                                        <h3 className="font-bold text-xl uppercase tracking-wider">The Results</h3>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed">
                                        {project.results}
                                    </p>
                                </div>
                            </div>

                            <hr className="border-white/5" />

                            {/* Core Tech & Features */}
                            <div className="grid md:grid-cols-2 gap-12">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                        Technical Implementation
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-mono text-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
                                    <ul className="space-y-3">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-300">
                                                <CheckCircle2 className="w-5 h-5 text-neon-green shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-wrap items-center gap-4 pt-6">
                                <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all flex items-center gap-2 font-bold"
                                >
                                    <Github className="w-5 h-5" />
                                    Source Code
                                </a>
                                {project.live !== '#' && (
                                    <a 
                                        href={project.live} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="px-8 py-3 bg-neon-green text-black rounded-xl hover:shadow-[0_0_20px_rgba(0,255,65,0.4)] transition-all flex items-center gap-2 font-bold"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );

    return createPortal(modalContent, document.body);
};

export default ProjectModal;
