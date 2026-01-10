import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

const projects = [
    {
        title: 'TrashSmart - Waste Solution',
        description: 'A comprehensive smart waste management ecosystem optimizing collection monitoring and routes. Features a real-time web admin dashboard for organizations, a mobile app for field operations, and IoT-integrated bin tracking.',
        challenge: 'Traditional waste management suffers from static routes and zero visibility into bin levels, leading to inefficient fuel consumption and overflowing public waste containers.',
        solution: 'Developed a distributed system using Spring Boot and React Native. Integrated IoT sensors (Arduino) with real-time data streaming to a centralized dashboard. Authored custom route optimization algorithms using the Google Maps API to path collection trucks based on real-time bin priority.',
        results: 'Optimized collection efficiency by an estimated 25% and provided municipalities with 100% visibility into urban waste distribution through high-fidelity data visualizations.',
        features: ['IoT Real-time Monitoring', 'Automated Route Optimization', 'Cross-platform Mobile App (NativeWind)', 'Admin Dashboard Analytics', 'Secure IoT Handshake'],
        tags: ['Spring Boot', 'React Native', 'PostgreSQL', 'Docker', 'Arduino', 'Google Maps API', 'NativeWind', 'Tailwind CSS', 'REST API'],
        image: '/projects/trashsmart_mockup.png',
        github: 'https://github.com/TrashSmart-G41',
        live: 'https://trashsmart.duckdns.org/'
    },
    {
        title: 'Fix Fast Buddy',
        description: 'Real-time vehicle breakdown assistance system connecting users with nearby mechanics. Features location-based request distribution and separate workflows for individual mechanics and garages.',
        challenge: 'Stranded motorists lack a reliable, quick way to locate and engage nearby verified mechanics, often leading to long wait times and inconsistent service pricing.',
        solution: 'Built a location-aware service platform using Kotlin and PHP. Implemented a dual-app architecture with specific interfaces for customers and service providers. Leveraged Firebase for real-time signaling and Google Maps for precise geofencing and mechanic tracking.',
        results: 'Successfully piloted a system that reduced average response times for vehicle breakdowns by connecting users to mechanics within a 5km radius in under 3 minutes.',
        features: ['Real-time Geofencing', 'Dynamic Request Distribution', 'In-app Communication', 'Service Provider specialized UI', 'Verified Mechanic Onboarding'],
        tags: ['Android SDK', 'Kotlin', 'PHP', 'MySQL', 'Firebase', 'Google Maps', 'Retrofit', 'REST API'],
        image: '/projects/fixfastbuddy_mockup.png',
        github: 'https://github.com/Wasfan-Wazeem/Fix-Fast-Buddy',
        live: 'https://github.com/Wasfan-Wazeem/Fix-Fast-Buddy'
    },
    {
        title: 'Hekto - AI E-Commerce',
        description: 'Furniture marketplace featuring an AI shopping assistant for natural language product discovery. Built with a headless CMS for real-time inventory synchronization and a secure stripe checkout pipeline.',
        challenge: 'Navigating extensive furniture catalogs can be overwhelming for users, often leading to search fatigue and abandoned carts.',
        solution: 'Integrated an AI Shopping Assistant using Vercel AI SDK and Sanity CMS. Engineered a conversational interface that understands natural language queries ("Find me a modern blue velvet sofa under $1000") and maps them to product metadata.',
        results: 'Dramatically simplified product discovery, providing a personalized shopping experience that mimics in-store assistance, backed by a robust, performant Next.js 14 architecture.',
        features: ['AI Conversational Search', 'Headless CMS (Sanity)', 'Real-time Inventory Sync', 'Stripe Global Payments', 'Server-side Rendering (Next.js)'],
        tags: ['Next.js', 'Sanity CMS', 'Stripe', 'Clerk', 'Vercel AI SDK', 'Zustand', 'Tailwind CSS'],
        image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80',
        github: 'https://github.com/Wasfan-Wazeem/Furniture-Store-ecommerce-ai-platform',
        live: '#'
    },
    {
        title: 'ZORO - MERN E-Commerce',
        description: 'Full-featured e-commerce platform with comprehensive admin dashboard. Includes advanced product filtering, secure Stripe payments, and JWT authentication with revenue analytics.',
        challenge: 'Developing a unified platform that handles high-traffic transactions while providing detailed business intelligence to administrators.',
        solution: 'Leveraged the MERN stack with Redux Toolkit for complex state management. Implemented custom auth Middleware with JWT and developed a comprehensive analytics suite that processes sales data into interactive revenue charts.',
        results: 'Delivered a production-ready e-commerce solution with sub-2s page loads and a scalable backend architecture capable of handling thousands of concurrent user sessions.',
        features: ['Advanced State Management (Redux)', 'Admin Revenue Dashboard', 'Custom JWT Auth Pipeline', 'Stripe API Integration', 'Product Telemetry & Filtering'],
        tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux Toolkit', 'Stripe', 'JWT', 'MERN Stack'],
        image: '/projects/zoro_mockup.png',
        github: 'https://github.com/Wasfan-Wazeem/zoro-ecommerce',
        live: '#'
    },
    {
        title: 'MyHR - HR Management System',
        description: 'A comprehensive Human Resource Management system featuring full CRUD operations for executive and user record management. Designed for administrative efficiency with a secure authentication layer.',
        challenge: 'Manual HR processes and fragmented data spreadsheets often lead to record inaccuracies and security vulnerabilities for employee information.',
        solution: 'Built a centralized management system using PHP and MySQL. Developed a high-performance CRUD engine with strict input validation and hierarchical access controls (Admin vs User levels) to secure sensitive corporate data.',
        results: 'Modernized traditional HR workflows, resulting in a centralized, searchable database that reduced record retrieval time by over 50% compared to legacy systems.',
        features: ['Hierarchical Access Control', 'Administrative CRUD Engine', 'Advanced Search & Filter', 'Secure Auth Layer', 'Data Integrity Validation'],
        tags: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'CRUD'],
        image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80',
        github: '#',
        live: '#'
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openProject = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

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
                            className="group relative rounded-2xl overflow-hidden bg-tech-gray border border-white/10 hover:border-neon-green/30 transition-all flex flex-col h-full"
                        >
                            {/* Image Placeholder */}
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-tech-gray to-transparent z-10" />
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 z-20 flex gap-2">
                                    <a href={project.github} className="p-2 bg-tech-black/60 backdrop-blur-md text-white hover:text-neon-green rounded-full transition-all border border-white/10">
                                        <Github className="w-4 h-4" />
                                    </a>
                                    {project.live !== '#' && (
                                        <a href={project.live} className="p-2 bg-tech-black/60 backdrop-blur-md text-white hover:text-neon-green rounded-full transition-all border border-white/10">
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-1 relative z-20">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-neon-green transition-colors line-clamp-1">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                    {project.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className="px-2 py-1 text-[10px] font-mono rounded bg-white/5 border border-white/10 text-gray-400">
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <span className="px-2 py-1 text-[10px] font-mono text-gray-600">
                                            +{project.tags.length - 3} more
                                        </span>
                                    )}
                                </div>

                                <button 
                                    onClick={() => openProject(project)}
                                    className="w-full py-3 bg-white/5 hover:bg-neon-green/10 border border-white/10 hover:border-neon-green/50 text-white hover:text-neon-green rounded-xl transition-all flex items-center justify-center gap-2 group/btn font-bold text-sm"
                                >
                                    Explore Case Study
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Deep Dive Modal */}
            <ProjectModal 
                project={selectedProject} 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </section>
    );
};

export default Projects;
