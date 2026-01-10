import React from 'react';
import { motion } from 'framer-motion';

const SkeletonLoader = ({ variant = 'project' }) => {
    const shimmer = {
        animate: {
            backgroundPosition: ['200% 0', '-200% 0'],
        },
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
        },
    };

    if (variant === 'project') {
        return (
            <div className="rounded-2xl overflow-hidden bg-tech-gray border border-white/10 h-full">
                {/* Image skeleton */}
                <motion.div
                    {...shimmer}
                    className="h-48 bg-gradient-to-r from-white/5 via-white/10 to-white/5"
                    style={{ backgroundSize: '200% 100%' }}
                />
                
                <div className="p-6">
                    {/* Title skeleton */}
                    <motion.div
                        {...shimmer}
                        className="h-6 w-3/4 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded mb-3"
                        style={{ backgroundSize: '200% 100%' }}
                    />
                    
                    {/* Description skeleton */}
                    <motion.div
                        {...shimmer}
                        className="h-4 w-full bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded mb-2"
                        style={{ backgroundSize: '200% 100%' }}
                    />
                    <motion.div
                        {...shimmer}
                        className="h-4 w-5/6 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded mb-4"
                        style={{ backgroundSize: '200% 100%' }}
                    />
                    
                    {/* Tags skeleton */}
                    <div className="flex gap-2 mb-6">
                        {[1, 2, 3].map(i => (
                            <motion.div
                                key={i}
                                {...shimmer}
                                className="h-6 w-16 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded"
                                style={{ backgroundSize: '200% 100%' }}
                            />
                        ))}
                    </div>
                    
                    {/* Button skeleton */}
                    <motion.div
                        {...shimmer}
                        className="h-12 w-full bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-xl"
                        style={{ backgroundSize: '200% 100%' }}
                    />
                </div>
            </div>
        );
    }

    if (variant === 'experience') {
        return (
            <div className="p-6 rounded-2xl bg-tech-gray/50 border border-white/5">
                <div className="flex items-start gap-4 mb-4">
                    {/* Logo skeleton */}
                    <motion.div
                        {...shimmer}
                        className="w-14 h-14 rounded-xl bg-gradient-to-r from-white/5 via-white/10 to-white/5"
                        style={{ backgroundSize: '200% 100%' }}
                    />
                    
                    <div className="flex-1">
                        <motion.div
                            {...shimmer}
                            className="h-5 w-48 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded mb-2"
                            style={{ backgroundSize: '200% 100%' }}
                        />
                        <motion.div
                            {...shimmer}
                            className="h-4 w-32 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded"
                            style={{ backgroundSize: '200% 100%' }}
                        />
                    </div>
                </div>
                
                {/* Description lines */}
                {[1, 2, 3].map(i => (
                    <motion.div
                        key={i}
                        {...shimmer}
                        className="h-3 w-full bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded mb-2"
                        style={{ backgroundSize: '200% 100%' }}
                    />
                ))}
            </div>
        );
    }

    // Default card skeleton
    return (
        <div className="p-6 rounded-2xl bg-tech-gray border border-white/10">
            <motion.div
                {...shimmer}
                className="h-6 w-3/4 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded mb-4"
                style={{ backgroundSize: '200% 100%' }}
            />
            <motion.div
                {...shimmer}
                className="h-4 w-full bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded mb-2"
                style={{ backgroundSize: '200% 100%' }}
            />
            <motion.div
                {...shimmer}
                className="h-4 w-5/6 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded"
                style={{ backgroundSize: '200% 100%' }}
            />
        </div>
    );
};

export default SkeletonLoader;
