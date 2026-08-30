import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { personalInfo } from '../data/portfolio';
import Counter from './Counter';
import { Terminal, Database, Server, Cpu, ShieldCheck, CheckCircle2, MapPin, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          title="Engineering Philosophy" 
          subtitle="About Me" 
          centered={false} 
        />
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Narrative description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6 text-foreground/75 leading-relaxed text-base sm:text-lg font-light"
          >
            <p>
              I am a Software Engineering graduate currently pursuing an <span className="text-white font-semibold">M.Sc. in Computer Science and Engineering</span> at <span className="text-white font-medium">Daffodil International University</span>, focused deeply on <span className="text-primary-400 font-medium">backend systems and data engineering</span>.
            </p>

            <p>
              My hands-on experience revolves around building production-style systems across the full data pipeline — from vectorized data ingestion and clean multi-tenant schema isolation to high-concurrency API design and containerized cloud deployment using <span className="text-white font-medium">Python, FastAPI, Django, and PostgreSQL</span>.
            </p>

            <p>
              I bridge backend infrastructure with applied data intelligence, leveraging <span className="text-white font-medium">Pandas, NumPy, and Scikit-learn</span> for model evaluation and custom scoring engines (such as credit reliability scoring and rule-based fraud detection).
            </p>

            {/* Core Invariants Callout */}
            <div className="pt-4 grid sm:grid-cols-2 gap-3">
              {[
                "Idempotent & Safe Data Pipelines",
                "QuerySet-Level Multi-Tenancy",
                "FIFO Financial Ledger Integrity",
                "Docker Compose Orchestration",
                "Raw SQL text() Performance Tuning",
                "Automated pytest Test Suites"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-white/90">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Profile Card + Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Engineer Profile Card */}
            <div className="glass p-6 rounded-3xl border border-white/10 bg-slate-950/60 flex items-center gap-5">
              <div className="w-20 h-20 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-tr from-primary-600 to-indigo-400 shrink-0 shadow-lg">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white font-display">{personalInfo.name}</h4>
                <p className="text-xs text-primary-400 font-medium">Backend & Data Engineer</p>
                <div className="flex items-center gap-1.5 text-[11px] text-foreground/50 font-mono pt-1">
                  <GraduationCap size={13} className="text-emerald-400" />
                  <span>M.Sc. in CSE • DIU</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-foreground/50 font-mono">
                  <MapPin size={13} className="text-primary-400" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {personalInfo.stats.map((stat, i) => (
                <div 
                  key={stat.label} 
                  className="glass p-5 rounded-3xl border border-white/5 hover:border-primary-500/30 hover:bg-primary-500/5 transition-all duration-300 group"
                >
                  <h3 className="text-2xl font-display font-bold text-primary-400 group-hover:text-primary-300 transition-colors mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-white mb-1">
                    {stat.label}
                  </p>
                  <p className="text-[10px] text-foreground/40 font-mono">
                    {stat.subtext}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Specialized Focus Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-8 border-t border-white/5"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-4">
            Production Tech Specializations
          </p>
          <div className="flex flex-wrap gap-2.5">
            {[
              'FastAPI Microservices',
              'PostgreSQL ACID Modeling',
              'Vectorized ETL (Pandas/NumPy)',
              'Django Multi-Tenancy',
              'Docker Containerization',
              'Raw SQLAlchemy text() Aggregates',
              'FIFO Ledger Systems',
              'Rule-Based Fraud Detection',
              'pytest Unit & Integration Testing',
              'Flutter Mobile API Sync'
            ].map(tech => (
              <span 
                key={tech} 
                className="px-4 py-2 glass rounded-2xl text-xs font-medium text-white/80 border border-white/5 hover:border-primary-500/30 hover:text-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
