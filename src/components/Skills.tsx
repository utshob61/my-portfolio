import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SectionHeading from './SectionHeading';
import { skillsData } from '../data/portfolio';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillsData[0].category);

  const currentCategoryData = skillsData.find(c => c.category === activeCategory) || skillsData[0];

  return (
    <section id="skills" className="py-24 px-6 border-y border-white/[0.03] relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Technical Mastery" subtitle="Skill Matrix" />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {skillsData.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-4 py-2 rounded-2xl text-xs font-semibold tracking-wider transition-all duration-300 ${
                activeCategory === cat.category
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-600/30 border border-primary-500/50"
                  : "glass text-foreground/60 hover:text-white hover:bg-white/5 border border-white/5"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="text-xs sm:text-sm text-foreground/50 font-mono">
            {currentCategoryData.description}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[380px]">
          <AnimatePresence mode="wait">
            {currentCategoryData.items.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 15, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                  className="glass p-6 rounded-3xl border border-white/5 hover:border-primary-500/30 bg-white/[0.015] hover:bg-primary-500/[0.03] transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Icon + Name + Percentage */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-2xl bg-white/5 text-primary-400 group-hover:bg-primary-500/20 group-hover:text-primary-300 transition-colors border border-white/5">
                          <Icon size={20} />
                        </div>
                        <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-primary-300 transition-colors">
                          {skill.name}
                        </h3>
                      </div>
                      <span className="text-primary-400 font-mono font-bold text-xs">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-4">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Sub-tags */}
                  {skill.tags && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-[10px] font-mono text-foreground/50 bg-white/[0.02] border border-white/5 rounded-lg group-hover:text-foreground/70 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
