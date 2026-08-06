import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export default function SectionHeading({ 
  title, 
  subtitle, 
  centered = true 
}: { 
  title: string; 
  subtitle?: string; 
  centered?: boolean 
}) {
  return (
    <div className={cn("mb-20", centered ? "text-center" : "text-left")}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] font-bold tracking-[0.3em] text-foreground/40 uppercase inline-block mb-6"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-display font-light tracking-tight"
      >
        {title}
      </motion.h2>
    </div>
  );
}
