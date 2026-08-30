import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SectionHeading from './SectionHeading';
import { experience, education, leadership } from '../data/portfolio';
import { GraduationCap, Briefcase, Users, Calendar, MapPin, CheckCircle2, Award, ChevronRight } from 'lucide-react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState<'education' | 'experience' | 'leadership'>('education');

  return (
    <section id="experience" className="py-24 px-6 border-b border-white/[0.03] relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Trajectory & Credentials" subtitle="Experience & Education" />

        {/* Tab Switchers */}
        <div className="flex justify-center gap-3 mb-16">
          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold tracking-wider transition-all duration-300 ${
              activeTab === 'education'
                ? "bg-primary-600 text-white shadow-lg shadow-primary-600/30 border border-primary-500/50"
                : "glass text-foreground/60 hover:text-white hover:bg-white/5 border border-white/5"
            }`}
          >
            <GraduationCap size={16} />
            <span>Education</span>
          </button>

          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold tracking-wider transition-all duration-300 ${
              activeTab === 'experience'
                ? "bg-primary-600 text-white shadow-lg shadow-primary-600/30 border border-primary-500/50"
                : "glass text-foreground/60 hover:text-white hover:bg-white/5 border border-white/5"
            }`}
          >
            <Briefcase size={16} />
            <span>Experience</span>
          </button>

          <button
            onClick={() => setActiveTab('leadership')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold tracking-wider transition-all duration-300 ${
              activeTab === 'leadership'
                ? "bg-primary-600 text-white shadow-lg shadow-primary-600/30 border border-primary-500/50"
                : "glass text-foreground/60 hover:text-white hover:bg-white/5 border border-white/5"
            }`}
          >
            <Users size={16} />
            <span>Leadership</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {/* EDUCATION TAB */}
            {activeTab === 'education' && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="glass p-8 rounded-3xl border border-white/5 hover:border-primary-500/30 bg-white/[0.015] transition-all relative overflow-hidden group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-300 bg-primary-950/80 border border-primary-500/20 rounded-full">
                            {edu.status}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-primary-400 font-medium text-sm mt-0.5">
                          {edu.institution}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-foreground/40 font-mono">
                        <Calendar size={14} />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    <p className="text-sm text-foreground/70 leading-relaxed font-light mb-6">
                      {edu.description}
                    </p>

                    {edu.coursework && (
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-3">
                          Relevant Core Coursework
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs font-medium text-white/80 bg-white/[0.03] border border-white/5 rounded-xl"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {edu.focusAreas && (
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-3">
                          Research & Focus Areas
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {edu.focusAreas.map((area, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs font-medium text-emerald-300/90 bg-emerald-950/30 border border-emerald-500/20 rounded-xl"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            )}

            {/* EXPERIENCE TAB */}
            {activeTab === 'experience' && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {experience.map((exp, idx) => (
                  <div
                    key={idx}
                    className="glass p-8 rounded-3xl border border-white/5 hover:border-primary-500/30 bg-white/[0.015] transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-950/80 border border-amber-500/20 rounded-full">
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                          {exp.role}
                        </h3>
                        <p className="text-primary-400 font-medium text-sm mt-0.5">
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex flex-col sm:items-end gap-1 text-xs text-foreground/40 font-mono">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-foreground/70 leading-relaxed font-light mb-6">
                      {exp.description}
                    </p>

                    <div className="space-y-2.5">
                      <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-3">
                        Key Responsibilities & Deliverables
                      </p>
                      {exp.achievements.map((ach, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80">
                          <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* LEADERSHIP TAB */}
            {activeTab === 'leadership' && (
              <motion.div
                key="leadership"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {leadership.map((item, idx) => (
                  <div
                    key={idx}
                    className="glass p-6 rounded-3xl border border-white/5 hover:border-primary-500/30 bg-white/[0.015] flex flex-col justify-between"
                  >
                    <div>
                      <div className="p-3 rounded-2xl bg-white/5 text-primary-400 w-fit mb-4 border border-white/5">
                        <Award size={22} />
                      </div>
                      <h4 className="text-lg font-bold font-display text-white mb-1">
                        {item.role}
                      </h4>
                      <p className="text-xs font-semibold text-primary-400 mb-3">
                        {item.organization}
                      </p>
                      <p className="text-xs text-foreground/60 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-foreground/40 font-mono">
                      <span>{item.period}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
