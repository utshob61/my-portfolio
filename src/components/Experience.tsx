import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { experience, leadership } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-b border-white/[0.03]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Experience & Education" />

        <div className="space-y-16">
          {experience.map((item) => (
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
                Focused on Software Engineering, Data Structures, Algorithms, DBMS, and AI. Building a strong foundation in scalable system design and data infrastructure.
             </p>
          </motion.div>
        </div>

        {/* Leadership & Activities */}
        <div className="mt-32">
          <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-primary-500 mb-12">Leadership & Activities</h4>
          <div className="grid md:grid-cols-2 gap-12">
            {leadership.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-2"
              >
                <h5 className="text-lg font-bold">{item.role}</h5>
                <p className="text-primary-400 text-sm font-medium">{item.organization}</p>
                {item.description && (
                  <p className="text-white/40 text-sm leading-relaxed mt-2">{item.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
