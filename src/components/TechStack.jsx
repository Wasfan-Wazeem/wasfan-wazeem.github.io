import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    // Languages
    { name: "Java", color: "text-blue-400" },
    { name: "Kotlin", color: "text-purple-400" },
    { name: "JavaScript", color: "text-yellow-400" },
    { name: "TypeScript", color: "text-blue-500" },
    { name: "PHP", color: "text-indigo-400" },
    { name: "C/C++", color: "text-blue-300" },
    
    // Frontend
    { name: "React.js", color: "text-cyan-400" },
    { name: "Next.js", color: "text-white" },
    { name: "Tailwind CSS", color: "text-cyan-300" },
    { name: "NativeWind", color: "text-cyan-200" },
    { name: "Framer Motion", color: "text-pink-400" },
    
    // Backend
    { name: "Node.js", color: "text-green-500" },
    { name: "Express.js", color: "text-gray-400" },
    { name: "Spring Boot", color: "text-green-400" },
    { name: "REST API", color: "text-orange-400" },
    { name: "JWT", color: "text-pink-500" },
    
    // Mobile
    { name: "React Native", color: "text-cyan-400" },
    { name: "Android", color: "text-green-500" },
    
    // Cloud & DevOps
    { name: "Docker", color: "text-blue-500" },
    { name: "Kubernetes", color: "text-blue-600" },
    { name: "Argo Workflows", color: "text-orange-500" },
    { name: "GitOps", color: "text-red-400" },
    { name: "Azure Blob", color: "text-blue-400" },
    { name: "Kafka", color: "text-gray-200" },
    
    // Databases
    { name: "MySQL", color: "text-blue-300" },
    { name: "PostgreSQL", color: "text-blue-400" },
    { name: "MongoDB", color: "text-green-500" },
    { name: "Firebase", color: "text-yellow-500" },
    
    // Tools
    { name: "Git", color: "text-orange-600" },
    { name: "Jira", color: "text-blue-500" },
    { name: "Postman", color: "text-orange-500" },
    { name: "Figma", color: "text-pink-400" },
    { name: "Stripe", color: "text-purple-400" }
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-24 bg-tech-black relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="text-neon-green">Arsenal</span></h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    My comprehensive toolkit for building scalable, high-performance digital solutions.
                </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="px-6 py-3 rounded-xl bg-tech-gray border border-white/5 hover:border-neon-green/30 transition-all cursor-default group"
                    >
                        <span className={`font-mono font-bold ${skill.color} opacity-90 group-hover:opacity-100`}>
                            {skill.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default TechStack;
