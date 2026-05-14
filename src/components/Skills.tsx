import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SectionHeading from './SectionHeading';
import { skills } from '@/src/data/portfolio';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skills[0].category);

  return (
    <section id="skills" className="py-24 px-6 border-y border-white/[0.03]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Skills" />

        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {skills.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              className={`text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                activeCategory === category.category
                  ? "text-white"
                  : "text-white/20 hover:text-white/40"
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          <AnimatePresence mode="wait">
            {skills.find(c => c.category === activeCategory)?.items.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="glass p-8 rounded-3xl relative group hover:bg-primary-500/5 transition-all"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-lg">{skill.name}</h3>
                  <span className="text-primary-400 font-bold text-sm">{skill.level}%</span>
                </div>
                
                <div className="h-[1px] w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-white rounded-full"
                  />
                </div>
                
                {/* Decorative background glow */}
                <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/5 transition-colors pointer-events-none rounded-3xl" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
