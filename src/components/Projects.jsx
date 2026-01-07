import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-stack online shopping application with real-time inventory management, secure payment processing, and an admin dashboard.',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
        github: '#',
        live: '#'
    },
    {
        title: 'Task Management Dashboard',
        description: 'Collaborative project management tool with drag-and-drop kanban boards, real-time updates through WebSockets, and team features.',
        tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind'],
         image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
        github: '#',
        live: '#'
    },
    {
        title: 'AI Content Generator',
        description: 'SaaS application leveraging OpenAI API to help marketers generate blog posts, social media captions, and ad copy.',
        tags: ['React', 'Python', 'FastAPI', 'OpenAI'],
         image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
        github: '#',
        live: '#'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-tech-black relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-neon-green font-mono text-sm tracking-wider uppercase mb-2 block">My Work</span>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Featured Projects
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden bg-tech-gray border border-white/10 hover:border-neon-green/50 transition-colors"
                        >
                            {/* Image Placeholder */}
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-tech-gray to-transparent z-10" />
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6 relative z-20">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-neon-green transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-2 py-1 text-xs font-mono rounded bg-white/5 border border-white/10 text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    <a href={project.github} className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a href={project.live} className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
