import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Layers, ArrowUpRight, CheckCircle2, Cpu } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { projects, ProjectItem } from '../data/portfolio';
import ProjectModal from './ProjectModal';

const categories = ["All", "Data & Backend", "Backend Systems", "Mobile & Backend"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projects.filter(p => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Production Architectures" subtitle="Featured Systems" />

        {/* Category Filters */}
        <div className="flex justify-center flex-wrap gap-2 sm:gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-2xl text-xs font-semibold tracking-wider transition-all duration-300 ${
                filter === cat
                  ? "bg-white text-black font-bold shadow-lg"
                  : "glass text-foreground/60 hover:text-white hover:bg-white/5 border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="group glass rounded-3xl border border-white/10 hover:border-primary-500/40 bg-slate-950/40 flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:shadow-primary-950/40 transition-all duration-300"
              >
                <div>
                  {/* Image header with category pill */}
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/80 backdrop-blur-md rounded-full border border-emerald-500/30">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold font-display text-white group-hover:text-primary-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-primary-400 font-medium mt-0.5 line-clamp-1">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    {/* Metrics Badges */}
                    <div className="grid grid-cols-2 gap-2">
                      {project.metrics.slice(0, 2).map((m, i) => (
                        <div key={i} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                          <p className="text-[10px] text-foreground/40 font-mono uppercase">{m.label}</p>
                          <p className="text-xs font-bold text-white mt-0.5">{m.value}</p>
                        </div>
                      ))}
                    </div>

                    <p className="text-foreground/60 text-xs leading-relaxed line-clamp-3 font-light">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.slice(0, 4).map(t => (
                        <span key={t} className="text-[10px] font-mono text-primary-300 bg-primary-950/60 border border-primary-500/20 px-2 py-0.5 rounded-lg">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="text-[10px] font-mono text-foreground/40 px-1.5 py-0.5">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-6 pt-0 space-y-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-primary-600 hover:text-white text-foreground/80 text-xs font-bold transition-all flex items-center justify-center gap-2 border border-white/5 hover:border-primary-500"
                  >
                    <Layers size={14} />
                    <span>System Deep Dive</span>
                  </button>

                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-foreground/50 hover:text-white transition-colors"
                    >
                      <Github size={14} />
                      <span>Code Repository</span>
                    </a>

                    {project.demo && project.demo !== '#' && !project.demo.includes('github.com') ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary-400 hover:text-primary-300 font-semibold transition-colors"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={13} />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-foreground/30">
                        Production Ready
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal Deep Dive */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
