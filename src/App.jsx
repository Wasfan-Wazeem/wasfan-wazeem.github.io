import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';

// Placeholder components for sections to be implemented
import TechStack from './components/TechStack';
import Services from './components/Services';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <div id="home">
            <Hero />
        </div>
        <TechStack />
        <About />
        <Experience />
        <Services />
        <Projects />
        <Contact />
      </Layout>
    </Router>
  );
}

export default App;
