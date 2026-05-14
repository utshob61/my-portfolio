import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { personalInfo } from '@/src/data/portfolio';
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
              Hi, I'm <span className="text-white font-medium">Orgho</span>. I'm a Software Engineering graduate from <span className="text-white">Daffodil International University</span> who genuinely believes that good code should feel like poetry—stable, efficient, and intentional. 
              <br /><br />
              My playground is the intersection where <span className="text-white font-semibold">Flutter's</span> fluidity meets the raw potential of <span className="text-white font-semibold">Artificial Intelligence</span>. Whether I'm building a mobile interface that reacts to a user's touch or training a model to understand the world through a camera lens, I focus on the human impact of every line I write.
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
                 {['Computer Vision', 'Deep Learning', 'Flutter 3.x', 'YOLO / CNN', 'Agile Methodologies'].map(tech => (
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
