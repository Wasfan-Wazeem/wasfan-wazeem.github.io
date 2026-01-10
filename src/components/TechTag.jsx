import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

const TechTag = ({ name, color }) => {
    const cardRef = useRef(null);
    
    // Motion values for tracking mouse position over the tag
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring physics for the tilt effect
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    // Transform mouse position to rotation and translation
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (event) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // Perpetual floating animation
    const floatTransition = {
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, z: 50 }}
            animate={{
                y: [0, -10, 0],
                x: [0, 5, 0],
            }}
            transition={{
                y: floatTransition,
                x: floatTransition,
            }}
            className="px-6 py-3 rounded-xl bg-tech-gray border border-white/5 hover:border-neon-green/30 transition-shadow hover:shadow-[0_0_20px_rgba(0,255,65,0.15)] cursor-default group relative overflow-hidden"
        >
            <span className={`font-mono font-bold ${color} opacity-90 group-hover:opacity-100 transition-opacity relative z-10`}>
                {name}
            </span>
            
            {/* Inner Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
    );
};

export default TechTag;
