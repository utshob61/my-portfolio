import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { personalInfo } from '../data/portfolio';
import Counter from './Counter';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-8 max-w-4xl">
            <SectionHeading 
              title="Crafting with Purpose" 
              subtitle="About Me" 
              centered={false} 
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg text-foreground/70 leading-relaxed font-light"
            >
              Hi, I'm <span className="text-white font-medium">Orgho</span>. I'm a Software Engineering graduate from <span className="text-white">Daffodil International University</span> with a focus on backend and data engineering. I believe in building systems that are not just functional, but scalable, reliable, and well-architected.
              <br /><br />
              My expertise lies in the intersection of <span className="text-white font-semibold">FastAPI</span>, <span className="text-white font-semibold">PostgreSQL</span>, and <span className="text-white font-semibold">Data Engineering</span>. Whether I'm designing complex ETL pipelines or optimizing database schemas, I focus on building the robust infrastructure that powers modern applications.
            </motion.p>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="grid grid-cols-2 gap-6"
            >
              {personalInfo.stats.map((stat, i) => (
                <div key={stat.label} className="glass p-6 rounded-2xl hover:bg-primary-500/5 transition-colors">
                  <h3 className="text-3xl font-display font-bold text-primary-400 mb-1">
                    <Counter value={stat.value} />
                  </h3>
                  <p className="text-sm text-foreground/50 font-medium uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="pt-6"
            >
               <h4 className="font-bold mb-4 flex items-center gap-2">
                 <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                 Specialized Interests
               </h4>
               <div className="flex flex-wrap gap-2">
                 {['FastAPI', 'PostgreSQL', 'Docker', 'ETL Pipelines', 'SQLAlchemy', 'Linux Development', 'Agile Methodologies'].map(tech => (
                   <span key={tech} className="px-4 py-2 glass rounded-full text-xs font-semibold text-foreground/80">
                      {tech}
                   </span>
                 ))}
               </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
