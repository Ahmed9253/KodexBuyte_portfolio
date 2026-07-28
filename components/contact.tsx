'use client';

import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 bg-[#1E1E22]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Get in touch
          </h2>
          <p className="mt-4 text-white/50 text-base sm:text-lg">
            Have a project or just want to say hi? Reach out.
          </p>
        </motion.div>

        <div className="mt-16 max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <a
              href="mailto:hello@kodexbyte.com"
              className="flex items-center gap-4 text-white/70 hover:text-[#CEAA99] transition-colors group"
            >
              <span className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#CEAA99]/10 transition-colors">
                <Mail size={18} className="group-hover:text-[#CEAA99]" />
              </span>
              <div>
                <div className="text-xs text-white/40 uppercase tracking-wider">Email</div>
                <div className="text-sm text-white">hello@kodexbyte.com</div>
              </div>
            </a>
            <div className="flex items-center gap-4 text-white/50">
              <span className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <MapPin size={18} />
              </span>
              <div>
                <div className="text-xs text-white/40 uppercase tracking-wider">Location</div>
                <div className="text-sm text-white">Pakistan</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#CEAA99]/10 flex items-center justify-center mb-6">
                  <Send size={24} className="text-[#CEAA99]" />
                </div>
                <p className="text-white font-semibold text-lg">Message sent!</p>
                <p className="text-white/50 text-sm mt-2">We&apos;ll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full px-5 py-3.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#CEAA99] focus:bg-white/[0.07] transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    required
                    className="w-full px-5 py-3.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#CEAA99] focus:bg-white/[0.07] transition-all"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  className="w-full px-5 py-3.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#CEAA99] focus:bg-white/[0.07] transition-all"
                />
                <textarea
                  placeholder="Tell us about your project"
                  required
                  rows={4}
                  className="w-full px-5 py-3.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#CEAA99] focus:bg-white/[0.07] transition-all resize-none"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#CEAA99] text-[#1E1E22] font-semibold text-sm hover:bg-[#CEAA99]/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
