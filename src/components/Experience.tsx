import { motion } from 'motion/react';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { experience } from '@/src/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-b border-white/[0.03]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Experience" />

        <div className="space-y-16">
          {experience.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                <span className="text-[10px] font-bold tracking-widest uppercase text-white/30 whitespace-nowrap">{item.period}</span>
                <h3 className="text-xl font-display font-medium">{item.title}</h3>
                <span className="text-white/30 text-sm">{item.company}</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed max-w-2xl ml-0 md:ml-[140px]">
                {item.description}
              </p>
            </motion.div>
          ))}
          
          {/* Specific Education Entry */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
          >
             <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                <span className="text-[10px] font-bold tracking-widest uppercase text-white/30 whitespace-nowrap">2022 - 2025</span>
                <h3 className="text-xl font-display font-medium">B.Sc. in Software Engineering</h3>
                <span className="text-white/30 text-sm">Daffodil International University</span>
             </div>
             <p className="text-white/50 text-sm leading-relaxed max-w-2xl ml-0 md:ml-[140px]">
                Specializing in Software Engineering and AI. Focused on high-scale systems and intelligent automation.
             </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
