import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { services } from '../data/portfolio';

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden border-b border-white/[0.03]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Engineering Core" subtitle="Capabilities & Solutions" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl border border-white/5 hover:border-primary-500/30 bg-white/[0.015] hover:bg-primary-500/[0.02] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="mb-6 p-3.5 rounded-2xl bg-white/5 text-primary-400 group-hover:bg-primary-500/20 group-hover:text-primary-300 transition-colors w-fit border border-white/5">
                    <Icon size={26} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-primary-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-foreground/60 leading-relaxed text-sm font-light mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-mono text-foreground/50 bg-white/[0.02] border border-white/5 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
