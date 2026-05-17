import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { certifications } from '@/src/data/portfolio';

export default function Certifications() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Validated Expertise" subtitle="Certifications" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass p-8 rounded-3xl flex flex-col items-center text-center hover:bg-primary-500/5 transition-all"
            >
              <div className="mb-6 p-4 glass rounded-2xl text-primary-400 group-hover:scale-110 transition-transform">
                <Award size={32} />
              </div>
              
              <h3 className="text-xl font-bold font-display mb-6">{cert.title}</h3>
              
              <a
                href={cert.url}
                className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-400 hover:text-primary-300 transition-colors"
              >
                View Certificate
                <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
