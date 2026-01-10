import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    
    // Create a smooth spring-based progress value
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-neon-green origin-left z-[99999] shadow-[0_0_10px_rgba(0,255,65,0.5)]"
            style={{ scaleX }}
        />
    );
};

export default ScrollProgress;
