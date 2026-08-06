import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { projects } from '../data/portfolio';

const categories = ["All", "Web", "Mobile", "Data"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(p => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Selected Works" subtitle="Portfolio" />

        <div className="flex justify-center flex-wrap gap-8 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                filter === cat
                  ? "text-white"
                  : "text-white/20 hover:text-white/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group glass rounded-[2rem] overflow-hidden flex flex-col h-full"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                  
                  {/* Overlay for links */}
                  <div className="absolute inset-0 bg-primary-900/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                     <a
                       href={project.github}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all hover:scale-110"
                       title="View GitHub"
                     >
                        <Github className="text-white" />
                     </a>
                     {project.demo !== '#' && (
                       <a
                         href={project.demo}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="p-4 bg-primary-500 rounded-2xl transition-all hover:scale-110 hover:shadow-xl"
                         title="Live Demo"
                       >
                          <ExternalLink className="text-white" />
                       </a>
                     )}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-primary-400 bg-primary-400/10 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold font-display mb-3 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                     <span className="text-xs font-semibold uppercase tracking-widest text-foreground/40">{project.category}</span>
                     <div className="flex gap-4">
                       <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-white transition-colors">
                         <Github size={18} />
                       </a>
                       {project.demo !== '#' && (
                         <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-primary-400 transition-colors">
                           <ExternalLink size={18} />
                         </a>
                       )}
                     </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
