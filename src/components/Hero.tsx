import { motion } from 'motion/react';
import { FileText, ArrowRight, MousePointer2 } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import TypeWriter from './TypeWriter';

const BackgroundElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Very subtle noise only */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-150" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:32px_32px]" />
    </div>
  );
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <BackgroundElements />
      
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-6"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] text-foreground/40 uppercase inline-block mb-6">
            Backend Engineer & Data Infrastructure Specialist
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-light tracking-tight mb-6">
            <span className="text-gradient font-bold">{personalInfo.name}</span>
          </h1>
          <div className="text-xl md:text-2xl font-heading font-medium text-foreground/40 mb-12 h-12">
            <TypeWriter texts={personalInfo.titles} />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl font-bold transition-all flex items-center gap-2 overflow-hidden shadow-[0_0_20px_rgba(124,58,237,0.3)]"
          >
            <span className="relative z-10">Hire Me Now</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </a>
          <a
            href="resume.pdf"
            download="Orgho_Utshob_CV.pdf"
            className="px-8 py-4 glass hover:bg-white/10 text-white rounded-2xl font-bold transition-all flex items-center gap-2"
          >
            <FileText size={20} />
            Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-xs uppercase tracking-widest opacity-50 font-semibold">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-12 rounded-full bg-gradient-to-b from-primary-500 to-transparent"
          />
        </motion.div>

        {/* Floating Socials */}
        <div className="hidden lg:flex flex-col fixed left-10 top-1/2 -translate-y-1/2 gap-6 z-40">
           {personalInfo.socials.map((social, i) => (
             <motion.a 
               key={social.name}
               href={social.url}
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.8 + (i * 0.1) }}
               className="p-3 glass rounded-xl hover:text-primary-400 hover:-translate-y-1 transition-all"
               title={social.name}
             >
               <social.icon size={20} />
             </motion.a>
           ))}
        </div>
      </div>
    </section>
  );
}
