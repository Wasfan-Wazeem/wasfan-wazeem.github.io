import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children, distance = 40, strength = 0.3 }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        
        const deltaX = clientX - centerX;
        const deltaY = clientY - centerY;
        
        const dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        if (dist < distance * 2) {
            setPosition({ x: deltaX * strength, y: deltaY * strength });
        } else {
            setPosition({ x: 0, y: 0 });
        }
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    );
};

export default MagneticButton;
