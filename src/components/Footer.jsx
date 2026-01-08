import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tech-gray border-t border-white/5 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex space-x-6">
            <a href="https://github.com/Wasfan-Wazeem" className="text-gray-400 hover:text-neon-green transition-colors"><Github className="w-6 h-6" /></a>
            <a href="https://www.linkedin.com/in/wasfan-wazeem" className="text-gray-400 hover:text-neon-green transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="mailto:mwasfan3@gmail.com" className="text-gray-400 hover:text-neon-green transition-colors"><Mail className="w-6 h-6" /></a>
          </div>
          <p className="text-gray-500 font-mono text-sm">
            © {new Date().getFullYear()} Wasfan.dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
