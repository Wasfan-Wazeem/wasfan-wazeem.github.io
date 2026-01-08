import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'About', to: '#about' },
        { name: 'Experience', to: '#experience' },
        { name: 'Projects', to: '#projects' },
        { name: 'Skills', to: '#tech-stack' },
        { name: 'Education', to: '#education' },
        { name: 'Contact', to: '#contact' },
    ];

    return (
        <nav className="fixed w-full top-0 left-0 z-50 bg-tech-black/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="p-2 bg-gradient-to-tr from-green-400 to-green-600 rounded-lg group-hover:shadow-[0_0_20px_rgba(74,222,128,0.5)] transition-all duration-300">
                            <Code2 className="w-6 h-6 text-black" />
                        </div>
                        <span className="text-xl font-bold font-mono tracking-tighter">Wasfan<span className="text-neon-green">.dev</span></span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.to}
                                className="text-gray-300 hover:text-neon-green font-mono text-sm transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="#contact" className="px-6 py-2 bg-transparent border border-neon-green text-neon-green font-mono text-sm rounded hover:bg-neon-green/10 transition-all duration-300 shadow-[0_0_10px_rgba(0,255,65,0.1)] hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]">
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-tech-black border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.to}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 text-base font-mono text-gray-300 hover:text-neon-green hover:bg-white/5 rounded-md transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
