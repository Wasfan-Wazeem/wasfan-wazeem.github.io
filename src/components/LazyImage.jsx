import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LazyImage = ({ 
    src, 
    alt, 
    className = '', 
    placeholderClassName = '',
    showPlaceholder = true 
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    return (
        <div className="relative w-full h-full">
            {/* Placeholder/Skeleton */}
            {!isLoaded && showPlaceholder && (
                <motion.div
                    animate={{
                        backgroundPosition: ['200% 0', '-200% 0'],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    className={`absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 ${placeholderClassName}`}
                    style={{ backgroundSize: '200% 100%' }}
                />
            )}

            {/* Actual Image */}
            {!hasError && (
                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                    onLoad={() => setIsLoaded(true)}
                    onError={() => {
                        setHasError(true);
                        setIsLoaded(true);
                    }}
                    className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
                />
            )}

            {/* Error State */}
            {hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/5 text-gray-500 text-sm">
                    Failed to load image
                </div>
            )}
        </div>
    );
};

export default LazyImage;
