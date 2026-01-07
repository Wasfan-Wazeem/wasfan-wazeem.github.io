import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-tech-black text-white relative overflow-hidden">
      {/* Background Grid Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"></div>
      
      <Navbar />
      <main className="relative z-10 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
