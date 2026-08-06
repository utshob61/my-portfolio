import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { services } from '../data/portfolio';

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden border-b border-white/[0.03]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Solutions" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col items-start px-2"
            >
              <div className="mb-6 text-white/40 group-hover:text-white transition-colors duration-500">
                <service.icon size={32} strokeWidth={1} />
              </div>
              
              <h3 className="text-xl font-medium font-display mb-3">
                {service.title}
              </h3>
              
              <p className="text-white/40 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
