import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2 } from 'lucide-react';

const LoadingScreen = () => {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsComplete(true), 500);
                    return 100;
                }
                return prev + 10;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    if (isComplete) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed inset-0 z-[9999] bg-tech-black flex items-center justify-center"
            >
                <div className="text-center">
                    {/* Logo Animation */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <div className="relative inline-block">
                            {/* Rotating border */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border-2 border-transparent border-t-neon-green border-r-neon-green"
                                style={{ padding: '4px' }}
                            />
                            
                            {/* Inner logo */}
                            <div className="relative p-6 bg-gradient-to-tr from-neon-green/20 to-blue-500/20 rounded-full">
                                <Code2 className="w-12 h-12 text-neon-green" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Loading Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-6"
                    >
                        <h2 className="text-2xl font-bold mb-2">
                            <span className="text-white">Loading</span>
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="text-neon-green"
                            >
                                ...
                            </motion.span>
                        </h2>
                        <p className="text-gray-400 text-sm font-mono">Initializing portfolio</p>
                    </motion.div>

                    {/* Progress Bar */}
                    <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden mx-auto">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.3 }}
                            className="h-full bg-gradient-to-r from-neon-green to-blue-500 rounded-full relative"
                        >
                            {/* Glow effect */}
                            <motion.div
                                animate={{ x: [-20, 100] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="absolute inset-0 bg-white/30 blur-sm"
                            />
                        </motion.div>
                    </div>

                    {/* Percentage */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-neon-green font-mono text-sm mt-4"
                    >
                        {progress}%
                    </motion.p>
                </div>

                {/* Background decoration */}
                <div className="absolute top-20 right-20 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
            </motion.div>
        </AnimatePresence>
    );
};

export default LoadingScreen;
