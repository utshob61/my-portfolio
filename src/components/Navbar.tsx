import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail, FileText, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { personalInfo } from '../data/portfolio';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Capabilities', href: '#services' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "glass py-3.5 bg-slate-950/80 border-b border-white/10 backdrop-blur-xl shadow-xl shadow-black/40" : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2.5 text-xl font-display font-bold tracking-tight text-white group"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-primary-600 to-indigo-400 group-hover:scale-105 transition-transform shadow-md">
            <img src={personalInfo.avatar} alt="Orgho Utshob" className="w-full h-full object-cover rounded-full" />
          </div>
          <span>
            ORGHO<span className="text-primary-400">.</span>UTSHOB
          </span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="text-xs font-semibold text-foreground/70 hover:text-white transition-colors"
            >
              {link.name}
            </motion.a>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 pl-2 border-l border-white/10"
          >
            <a
              href="resume.pdf"
              download="Orgho_Utshob_CV.pdf"
              className="px-4 py-2 rounded-full text-xs font-semibold text-white/80 glass hover:text-white hover:bg-white/10 border border-white/10 transition-all flex items-center gap-1.5"
            >
              <FileText size={13} className="text-primary-400" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="bg-primary-600 hover:bg-primary-500 text-white px-4 py-2 rounded-full text-xs font-bold transition-all shadow-md shadow-primary-600/30"
            >
              Connect
            </a>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2 rounded-xl glass border border-white/5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-3 rounded-2xl border border-white/10 overflow-hidden bg-slate-950/95"
          >
            <div className="flex flex-col p-6 space-y-3 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-semibold text-foreground/80 hover:text-white py-2 transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="resume.pdf"
                  download="Orgho_Utshob_CV.pdf"
                  className="w-full py-2.5 rounded-xl glass text-xs font-bold text-white flex items-center justify-center gap-2"
                >
                  <FileText size={15} />
                  Download CV / Resume
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-2.5 rounded-xl bg-primary-600 text-xs font-bold text-white text-center"
                >
                  Get In Touch
                </a>
              </div>

              <div className="flex justify-center gap-4 pt-2">
                {personalInfo.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 glass rounded-xl text-foreground/60 hover:text-white"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
