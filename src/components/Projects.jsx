import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'TrashSmart - Waste Solution',
        description: 'A comprehensive smart waste management ecosystem optimizing collection monitoring and routes. Features a real-time web admin dashboard for organizations, a mobile app for field operations, and IoT-integrated bin tracking.',
        tags: ['Spring Boot', 'React Native', 'PostgreSQL', 'Docker', 'Arduino', 'Google Maps API', 'NativeWind', 'Tailwind CSS', 'REST API'],
        image: '/projects/trashsmart_mockup.png',
        github: 'https://github.com/TrashSmart-G41',
        live: 'https://trashsmart.duckdns.org/'
    },
    {
        title: 'Fix Fast Buddy',
        description: 'Real-time vehicle breakdown assistance system connecting users with nearby mechanics. Features location-based request distribution and separate workflows for individual mechanics and garages.',
        tags: ['Android SDK', 'Kotlin', 'PHP', 'MySQL', 'Firebase', 'Google Maps', 'Retrofit', 'REST API'],
        image: '/projects/fixfastbuddy_mockup.png',
        github: 'https://github.com/Wasfan-Wazeem/Fix-Fast-Buddy',
        live: 'https://github.com/Wasfan-Wazeem/Fix-Fast-Buddy'
    },
    {
        title: 'Hekto - AI E-Commerce',
        description: 'Furniture marketplace featuring an AI shopping assistant for natural language product discovery. Built with a headless CMS for real-time inventory synchronization and a secure stripe checkout pipeline.',
        tags: ['Next.js', 'Sanity CMS', 'Stripe', 'Clerk', 'Vercel AI SDK', 'Zustand', 'Tailwind CSS'],
        image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80',
        github: 'https://github.com/Wasfan-Wazeem/Furniture-Store-ecommerce-ai-platform',
        live: '#'
    },
    {
        title: 'ZORO - MERN E-Commerce',
        description: 'Full-featured e-commerce platform with comprehensive admin dashboard. Includes advanced product filtering, secure Stripe payments, and JWT authentication with revenue analytics.',
        tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux Toolkit', 'Stripe', 'JWT', 'MERN Stack'],
        image: '/projects/zoro_mockup.png',
        github: 'https://github.com/Wasfan-Wazeem/zoro-ecommerce',
        live: '#'
    },
    {
        title: 'MyHR - HR Management System',
        description: 'A comprehensive Human Resource Management system featuring full CRUD operations for executive and user record management. Designed for administrative efficiency with a secure authentication layer.',
        tags: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'CRUD'],
        image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80',
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
                                <p className="text-gray-400 text-sm mb-4 line-clamp-5">
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
