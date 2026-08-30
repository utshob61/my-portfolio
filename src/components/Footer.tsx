import { motion } from 'motion/react';
import { ArrowUp, Terminal, Heart, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 px-6 border-t border-white/5 relative bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <span className="w-6 h-6 rounded-lg bg-primary-600/30 border border-primary-500/40 flex items-center justify-center text-[10px] font-mono text-primary-300">
              OU
            </span>
            <h2 className="text-xl font-display font-bold text-white">
              ORGHO<span className="text-primary-400">.</span>UTSHOB
            </h2>
          </div>
          <p className="text-foreground/50 text-xs font-mono max-w-sm">
            Backend & Data Infrastructure • M.Sc. in CSE • Daffodil International University
          </p>
        </div>
        
        {/* Social Badges */}
        <div className="flex items-center gap-3">
          {personalInfo.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 glass rounded-xl text-foreground/60 hover:text-white hover:border-primary-500/40 hover:bg-primary-500/10 transition-all border border-white/5"
              title={social.name}
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>

        {/* Copyright & Scroll to top */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <p className="text-foreground/40 text-xs tracking-wider font-mono">
            &copy; {new Date().getFullYear()} Orgho Utshob. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary-400 hover:text-primary-300 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
