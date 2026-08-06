import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { cn } from '../lib/utils';
import SectionHeading from './SectionHeading';
import { personalInfo } from '../data/portfolio';

// You can use a service like Formspree for free (50 submissions/mo)
// or simply use a Google Form URL as the action.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/meajokoz"; // Note: User should replace this with their own ID

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to send message. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Let's Connect" subtitle="Get in Touch" />

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-3xl font-display font-bold mb-4">Have a project in mind?</h3>
              <p className="text-foreground/60 leading-relaxed text-lg">
                I'm currently available for freelance work and internship opportunities. Let's build something extraordinary together.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh", href: "#" },
              ].map((item, i) => (
                <div key={item.label} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 transition-all">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">{item.label}</p>
                    <a href={item.href} className="text-lg font-semibold hover:text-primary-400 transition-colors">{item.value}</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-6">
               {personalInfo.socials.map((social) => (
                  <a key={social.name} href={social.url} className="p-4 glass rounded-2xl hover:text-primary-400 transition-all">
                     <social.icon size={22} />
                  </a>
               ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass p-10 rounded-[2.5rem] relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-4">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder=""
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition-all placeholder:text-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-4">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder=""
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition-all placeholder:text-white/10"
                  />
                </div>
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-2xl text-sm font-medium">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-4">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder=""
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition-all placeholder:text-white/10"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-4">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  placeholder=""
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none placeholder:text-white/10"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative py-4 bg-primary-600 hover:bg-primary-700 disabled:opacity-50 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-3 overflow-hidden"
              >
                {isSubmitting ? (
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <Send size={20} className={cn("transition-transform group-hover:translate-x-1", isSent && "hidden")} />
                    <span>{isSent ? "Message Sent!" : "Send Message"}</span>
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
            </form>
            
            {/* Decarative Glow */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary-600/10 rounded-full blur-[100px] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
