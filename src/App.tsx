/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';
import Admin from './components/Admin';

// Lazy load non-critical sections for performance
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Services = lazy(() => import('./components/Services'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));

function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<div className="h-20 flex items-center justify-center opacity-20">Loading section...</div>}>
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </Suspense>
    </>
  );
}

export default function App() {
  const [view, setView] = useState<'home' | 'admin'>('home');

  useEffect(() => {
    const updateView = () => {
      setView(window.location.hash === '#admin' ? 'admin' : 'home');
    };

    updateView();
    window.addEventListener('hashchange', updateView);
    return () => window.removeEventListener('hashchange', updateView);
  }, []);

  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary-500/30 selection:text-primary-200">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      {view === 'admin' ? <Admin /> : <HomePage />}

      <Footer />
      
      {/* Subtle Bottom Noise */}
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none -z-10" />
    </main>
  );
}
