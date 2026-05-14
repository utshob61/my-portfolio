import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '@/src/data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-white/5 relative bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-8">
        <div>
          <h2 className="text-2xl font-display font-bold mb-2">OR<span className="text-primary-500">GHO.</span></h2>
          <p className="text-foreground/40 text-sm font-medium">Crafting the future of software and AI.</p>
        </div>
        
        <div className="flex gap-4">
          {personalInfo.socials.map((social) => (
             <a
               key={social.name}
               href={social.url}
               className="p-3 glass rounded-xl hover:text-primary-400 hover:-translate-y-1 transition-all"
               title={social.name}
             >
               <social.icon size={20} />
             </a>
          ))}
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <p className="text-foreground/40 text-xs tracking-widest font-semibold uppercase">
            &copy; {new Date().getFullYear()} Orgho Utshob. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-primary-400 transition-colors"
          >
            Back to Top
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
      
      {/* Visual noise/grain */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
    </footer>
  );
}
