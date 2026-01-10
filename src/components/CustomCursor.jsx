import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPointer, setIsPointer] = useState(false);
    
    // Smooth follow logic using motion values
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 250 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isClickable = 
                target.tagName === 'BUTTON' || 
                target.tagName === 'A' || 
                target.tagName === 'I' ||
                target.closest('button') || 
                target.closest('a') ||
                target.getAttribute('role') === 'button' ||
                window.getComputedStyle(target).cursor === 'pointer';
            
            setIsPointer(isClickable);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
            {/* Main Dot */}
            <motion.div
                className="fixed w-3 h-3 bg-neon-green rounded-full mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            {/* Liquid Aura */}
            <motion.div
                className="fixed w-10 h-10 border border-neon-green/30 rounded-full"
                style={{
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isPointer ? 1.8 : 1,
                    backgroundColor: isPointer ? 'rgba(0, 255, 65, 0.1)' : 'rgba(0, 255, 65, 0)',
                    borderColor: isPointer ? 'rgba(0, 255, 65, 0.5)' : 'rgba(0, 255, 65, 0.3)',
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            />
            
            {/* Outer Glow (Liquid trailing feel) */}
            <motion.div
                className="fixed w-16 h-16 bg-neon-green/5 rounded-full blur-xl"
                style={{
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />
        </div>
    );
};

export default CustomCursor;
