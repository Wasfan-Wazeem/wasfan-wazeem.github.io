import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';

// Placeholder components for sections to be implemented
import TechStack from './components/TechStack';
import Education from './components/Education';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Research from './components/Research';
import Certifications from './components/Certifications';

function App() {
  return (
    <Router>
      <Layout>
        <div id="home">
            <Hero />
        </div>
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Education />
        <Research />
        <Certifications />
        <Contact />
      </Layout>
    </Router>
  );
}

export default App;
