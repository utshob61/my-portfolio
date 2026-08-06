import { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Services />
    <Projects />
    <Experience />
    <Certifications />
    <Contact />
  </>
);

export default function App() {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary-500/30 selection:text-primary-200 antialiased">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
      </div>}>
        <HomePage />
      </Suspense>

      <Footer />
      
      {/* Ambient background glow */}
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none -z-10" />
    </main>
  );
}
