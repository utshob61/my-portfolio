import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, MapPin, Phone, Mail, Copy, Check, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';
import SectionHeading from './SectionHeading';
import { personalInfo } from '../data/portfolio';

const FORMSPREE_ENDPOINT = "https://formspree.io/f/meajokoz";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSent(true);
        e.currentTarget.reset();
        setTimeout(() => setIsSent(false), 5000);
      } else {
        setError('Something went wrong. Please reach out directly via email.');
      }
    } catch (err) {
      setError('Message dispatch failed. Please email directly to utshob61@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Initiate Contact" subtitle="Get in Touch" />

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
                Let's Build Scalable Systems
              </h3>
              <p className="text-foreground/60 leading-relaxed text-sm sm:text-base font-light">
                Whether you're looking for a dedicated Backend & Data Engineer, discussing distributed architecture, or exploring technical collaboration — my inbox is always open.
              </p>
            </div>

            {/* Quick Contact Cards with Instant Copy */}
            <div className="space-y-4">
              {[
                { 
                  icon: Mail, 
                  label: "Direct Email", 
                  value: personalInfo.email, 
                  href: `mailto:${personalInfo.email}`,
                  raw: personalInfo.email 
                },
                { 
                  icon: Phone, 
                  label: "Phone / WhatsApp", 
                  value: personalInfo.phone, 
                  href: `tel:${personalInfo.phone}`,
                  raw: personalInfo.phone 
                },
                { 
                  icon: MapPin, 
                  label: "Location", 
                  value: personalInfo.location, 
                  href: "#",
                  raw: personalInfo.location 
                },
              ].map((item) => (
                <div 
                  key={item.label} 
                  className="glass p-4 sm:p-5 rounded-2xl border border-white/5 hover:border-primary-500/30 bg-white/[0.015] flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 group-hover:text-primary-300 transition-colors border border-white/5">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">{item.label}</p>
                      <a 
                        href={item.href} 
                        className="text-sm sm:text-base font-semibold text-white hover:text-primary-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>

                  {item.label !== "Location" && (
                    <button
                      onClick={() => handleCopy(item.raw, item.label)}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-foreground/50 hover:text-white transition-colors border border-white/5"
                      title={`Copy ${item.label}`}
                    >
                      {copiedItem === item.label ? (
                        <Check size={16} className="text-emerald-400" />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-3">
                Professional Profiles
              </p>
              <div className="flex gap-3">
                {personalInfo.socials.map((social) => (
                  <a 
                    key={social.name} 
                    href={social.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 glass rounded-2xl hover:text-primary-300 hover:border-primary-500/40 hover:bg-primary-500/10 transition-all border border-white/5 text-xs font-semibold text-white/80"
                  >
                    <social.icon size={16} />
                    <span>{social.name}</span>
                    <ExternalLink size={12} className="text-foreground/40" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden bg-slate-950/60"
          >
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-foreground/50">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-white/5 border border-white/10 p-3.5 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder:text-white/20 text-sm text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-foreground/50">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. alex@company.com"
                    className="w-full bg-white/5 border border-white/10 p-3.5 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder:text-white/20 text-sm text-white"
                  />
                </div>
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-2xl text-xs font-medium">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-foreground/50">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Backend Role / Distributed System Project"
                  className="w-full bg-white/5 border border-white/10 p-3.5 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder:text-white/20 text-sm text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-foreground/50">Message Details</label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  placeholder="Share project requirements, team goals, or technical specifications..."
                  className="w-full bg-white/5 border border-white/10 p-3.5 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none placeholder:text-white/20 text-sm text-white"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary-600 hover:bg-primary-500 disabled:opacity-50 text-white rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-600/30 hover:scale-[1.01]"
              >
                {isSubmitting ? (
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <Send size={16} className={cn(isSent && "hidden")} />
                    <span>{isSent ? "Message Dispatched Successfully!" : "Transmit Message"}</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
