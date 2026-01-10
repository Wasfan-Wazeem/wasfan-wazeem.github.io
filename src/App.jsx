import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LoadingScreen from './components/LoadingScreen';
import SkeletonLoader from './components/SkeletonLoader';

// Eagerly load critical components
import Hero from './components/Hero';
import ReactiveBackground from './components/ReactiveBackground';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

// Lazy load non-critical sections
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const TechStack = lazy(() => import('./components/TechStack'));
const Education = lazy(() => import('./components/Education'));
const Research = lazy(() => import('./components/Research'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));

// Section loading fallback
const SectionFallback = ({ variant = 'default' }) => (
  <section className="py-24 bg-tech-black">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map(i => (
          <SkeletonLoader key={i} variant={variant} />
        ))}
      </div>
    </div>
  </section>
);

function App() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Hide loading screen after initial load
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {isInitialLoad && <LoadingScreen />}
      <ScrollProgress />
      <ReactiveBackground />
      <CustomCursor />
      <Layout>
        <div id="home">
          <Hero />
        </div>
        
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<SectionFallback variant="experience" />}>
          <Experience />
        </Suspense>
        
        <Suspense fallback={<SectionFallback variant="project" />}>
          <Projects />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <TechStack />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <Education />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <Research />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <Certifications />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
