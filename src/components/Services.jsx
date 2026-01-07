import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, Zap, Code, Database, Globe } from 'lucide-react';

const services = [
  {
    icon: <Layout className="w-8 h-8 text-neon-green" />,
    title: 'Frontend Development',
    description: 'Building responsive and performant web applications using React, Next.js, and modern CSS frameworks.'
  },
  {
    icon: <Smartphone className="w-8 h-8 text-neon-green" />,
    title: 'Responsive Design',
    description: 'Creating mobile-first interfaces that work seamlessly across all devices and screen sizes.'
  },
  {
    icon: <Zap className="w-8 h-8 text-neon-green" />,
    title: 'Performance Optimization',
    description: 'Optimizing web applications for speed and efficiency through code splitting, lazy loading, and caching.'
  },
  {
    icon: <Code className="w-8 h-8 text-neon-green" />,
    title: 'Clean Code',
    description: 'Writing maintainable, documented, and scalable code that adheres to industry best practices.'
  },
  {
    icon: <Database className="w-8 h-8 text-neon-green" />,
    title: 'Backend Integration',
    description: 'Seamlessly connecting frontends with RESTful APIs, GraphQL, and database services.'
  },
  {
    icon: <Globe className="w-8 h-8 text-neon-green" />,
    title: 'SEO & Accessibility',
    description: 'Ensuring applications are discoverable by search engines and accessible to all users.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
              <span className="text-neon-green font-mono text-sm tracking-wider uppercase mb-2 block">What I Offer</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Built for innovation. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Designed for results.</span>
              </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-tech-gray/50 border border-white/5 hover:border-neon-green/30 hover:bg-white/5 transition-all duration-300 group"
            >
              <div className="mb-6 p-4 bg-tech-black border border-white/10 rounded-xl w-fit group-hover:shadow-[0_0_20px_rgba(0,255,65,0.2)] transition-shadow">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
