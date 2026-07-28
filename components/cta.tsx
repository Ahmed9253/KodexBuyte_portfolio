'use client';

import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="py-24 sm:py-32 px-6 bg-[#CEAA99]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E1E22] leading-tight">
            Let&apos;s build something together.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#1E1E22]/70 max-w-xl mx-auto">
            Get in touch and tell us about your project. We&apos;ll take it from there.
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block px-8 py-3.5 rounded bg-[#1E1E22] text-white font-semibold text-sm hover:bg-[#1E1E22]/90 transition-colors"
            >
              Start a Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
