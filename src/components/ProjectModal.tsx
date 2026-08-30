import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle2, Server, Database, ShieldCheck, Layers, Cpu, Activity } from 'lucide-react';
import { ProjectItem } from '../data/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-white/10 rounded-3xl shadow-2xl z-10 text-left p-6 sm:p-10 custom-scrollbar"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-foreground/70 hover:text-white transition-all border border-white/5"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="space-y-3 mb-8 pr-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                {project.category}
              </span>
              <span className="text-xs text-foreground/40 font-mono">System Deep Dive</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-white">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-primary-400 font-medium leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="glass p-4 rounded-2xl border border-white/5 bg-white/[0.02]">
                <p className="text-xs text-foreground/40 font-medium uppercase tracking-wider">{m.label}</p>
                <p className="text-base sm:text-lg font-bold text-white mt-1">{m.value}</p>
              </div>
            ))}
          </div>

          {/* Architecture Pipeline Banner */}
          <div className="mb-8 p-5 rounded-2xl bg-primary-950/40 border border-primary-500/20">
            <div className="flex items-center gap-2 text-primary-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Activity size={16} />
              <span>Data & Execution Flow</span>
            </div>
            <p className="text-sm font-mono text-white/90 leading-relaxed">
              {project.architectureSummary}
            </p>
          </div>

          {/* Core Problem & Solution Breakdown */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <ShieldCheck size={16} /> The Engineering Problem
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed font-light">
                {project.architectureDetails.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                <Server size={16} /> Architectural Solution
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed font-light">
                {project.architectureDetails.solution}
              </p>
            </div>
          </div>

          {/* Key Architectural Decisions */}
          <div className="mb-8 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Layers size={18} className="text-primary-400" />
              Key Architectural Decisions & Invariants
            </h3>
            <div className="space-y-2.5">
              {project.architectureDetails.keyDecisions.map((decision, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.015] border border-white/5">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80 leading-relaxed">{decision}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="mb-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/40 mb-3">Technologies Deployed</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1.5 text-xs font-semibold text-white/90 bg-white/5 rounded-xl border border-white/5">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-sm transition-all flex items-center gap-2 border border-white/10"
            >
              <Github size={18} />
              View Source Repository
            </a>
            {project.demo && project.demo !== '#' && !project.demo.includes('github.com') && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-lg shadow-primary-600/30"
              >
                <ExternalLink size={18} />
                Launch Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
