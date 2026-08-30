import { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Services />
    <Experience />
    <Contact />
  </>
);

export default function App() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-foreground selection:bg-primary-500/30 selection:text-primary-200 antialiased overflow-x-hidden">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-10 h-10 border-3 border-primary-500 border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        <HomePage />
      </Suspense>

      <Footer />
    </main>
  );
}
