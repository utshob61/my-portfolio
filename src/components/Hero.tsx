import { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, ArrowRight, Terminal as TerminalIcon, Copy, Check, Sparkles, Database, Server, GitBranch, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { personalInfo, terminalCodeSnippet } from '../data/portfolio';
import TypeWriter from './TypeWriter';

const BackgroundElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Ambient gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary-600/10 rounded-full blur-[140px]" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-emerald-600/5 rounded-full blur-[120px]" />
    </div>
  );
};

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(terminalCodeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden">
      <BackgroundElements />
      
      <div className="max-w-6xl mx-auto w-full">
        {/* Top Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass border border-emerald-500/30 bg-emerald-950/20 text-xs font-medium text-emerald-300 shadow-sm shadow-emerald-900/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>M.Sc in CSE Candidate • Available for Backend & Data Engineering</span>
          </div>
        </motion.div>

        {/* Profile Avatar & Hero Headline */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          {/* User Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative inline-block mb-6 group"
          >
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto rounded-full p-1 bg-gradient-to-tr from-primary-600 via-indigo-400 to-emerald-400 shadow-2xl shadow-primary-500/20 group-hover:scale-105 transition-transform duration-300">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-full h-full object-cover rounded-full border-2 border-slate-950"
              />
            </div>
            <div className="absolute bottom-1 right-1/2 translate-x-12 sm:translate-x-16 bg-slate-950/90 border border-emerald-500/40 px-2.5 py-0.5 rounded-full flex items-center gap-1.5 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-mono text-emerald-300 font-bold">Online</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl sm:text-7xl md:text-8xl font-display font-light tracking-tight mb-4"
          >
            <span className="text-gradient font-bold tracking-tight">{personalInfo.name}</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-xl sm:text-2xl md:text-3xl font-heading font-medium text-foreground/80 mb-6 h-10 flex items-center justify-center gap-2"
          >
            <span className="text-primary-400 font-mono text-base sm:text-lg">&gt;</span>
            <TypeWriter texts={personalInfo.titles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-base sm:text-lg text-foreground/60 leading-relaxed font-light max-w-3xl mx-auto"
          >
            Architecting production-ready backend systems, vectorized ETL pipelines, and multi-tenant ledger infrastructures with <span className="text-white font-medium">Python</span>, <span className="text-white font-medium">FastAPI</span>, <span className="text-white font-medium">Django</span>, and <span className="text-white font-medium">PostgreSQL</span>.
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href="#projects"
            className="group relative px-7 py-3.5 bg-primary-600 hover:bg-primary-500 text-white rounded-2xl font-bold text-sm transition-all flex items-center gap-2 overflow-hidden shadow-lg shadow-primary-600/30 hover:scale-[1.02]"
          >
            <span>Explore System Architectures</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="px-7 py-3.5 glass hover:bg-white/10 text-white rounded-2xl font-bold text-sm transition-all flex items-center gap-2 border border-white/10 hover:border-white/20 hover:scale-[1.02]"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-4 h-4 text-foreground/50" />
          </a>

          <a
            href="resume.pdf"
            download="Orgho_Utshob_CV.pdf"
            className="px-6 py-3.5 glass hover:bg-white/10 text-white/90 rounded-2xl font-semibold text-sm transition-all flex items-center gap-2 border border-white/10"
          >
            <FileText size={16} className="text-primary-400" />
            <span>CV / Resume</span>
          </a>
        </motion.div>

        {/* Senior Developer Interactive Terminal Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="max-w-4xl mx-auto rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl bg-slate-950/70"
        >
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900/90 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-3 text-xs font-mono text-foreground/40 hidden sm:inline">
                pipeline_core.py • FastAPI & PostgreSQL Idempotent Ingest
              </span>
            </div>

            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-foreground/60 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/5"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>

          {/* Terminal Code Body */}
          <div className="p-5 font-mono text-xs sm:text-sm text-foreground/90 overflow-x-auto leading-relaxed bg-slate-950/40">
            <pre className="text-slate-300">
              <span className="text-slate-500">// ⚡ Vectorized Ingestion & Idempotent Upsert Core</span>{'\n'}
              <span className="text-purple-400">from</span> fastapi <span className="text-purple-400">import</span> FastAPI, Depends{'\n'}
              <span className="text-purple-400">from</span> sqlalchemy <span className="text-purple-400">import</span> text{'\n'}{'\n'}
              <span className="text-blue-400">@app.post</span>(<span className="text-emerald-300">"/v1/transactions/ingest-batch"</span>){'\n'}
              <span className="text-purple-400">async def</span> <span className="text-amber-300">ingest_vectorized_batch</span>(payload: BatchPayload, db = Depends(get_db)):{'\n'}
              {'    '}<span className="text-slate-500">"""Process 50k+ records with zero duplication on overlapping backfills"""</span>{'\n'}
              {'    '}<span className="text-purple-400">async with</span> transaction_scope(db) <span className="text-purple-400">as</span> session:{'\n'}
              {'        '}<span className="text-blue-400">await</span> session.execute(text(<span className="text-emerald-300">"""</span>{'\n'}
              {'            '}<span className="text-emerald-300">INSERT INTO transactions (id, tenant_id, amount, status, channel)</span>{'\n'}
              {'            '}<span className="text-emerald-300">VALUES (:id, :tenant_id, :amount, :status, :channel)</span>{'\n'}
              {'            '}<span className="text-emerald-300">ON CONFLICT (id) DO UPDATE SET status = EXCLUDED.status, updated_at = NOW();</span>{'\n'}
              {'        '}<span className="text-emerald-300">"""</span>), payload.vector_records){'\n'}
              {'        '}<span className="text-purple-400">return</span> &#123;<span className="text-emerald-300">"processed"</span>: len(payload.vector_records), <span className="text-emerald-300">"status"</span>: <span className="text-emerald-300">"200_OK"</span>&#125;
            </pre>
          </div>
        </motion.div>

        {/* Floating Socials Sidebar for desktop */}
        <div className="hidden xl:flex flex-col fixed left-8 top-1/2 -translate-y-1/2 gap-4 z-40">
          {personalInfo.socials.map((social, i) => (
            <motion.a 
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + (i * 0.1) }}
              className="p-3 glass rounded-2xl hover:text-white hover:bg-primary-600/30 hover:border-primary-500/50 hover:-translate-y-1 transition-all text-foreground/60"
              title={social.name}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
