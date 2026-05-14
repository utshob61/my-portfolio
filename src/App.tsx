/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';

// Lazy load non-critical sections for performance
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Services = lazy(() => import('./components/Services'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));

export default function App() {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary-500/30 selection:text-primary-200">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      
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

      <Footer />
      
      {/* Subtle Bottom Noise */}
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none -z-10" />
    </main>
  );
}
